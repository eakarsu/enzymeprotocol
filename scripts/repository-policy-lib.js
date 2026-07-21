'use strict';
/* eslint-disable @typescript-eslint/no-var-requires */

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const EXTERNAL_NETWORKS = new Set(['kovan', 'mainnet']);
const REQUIRED_UNSUPPORTED_ACTIVITIES = ['package-publishing', 'production-use', 'public-network-deployment'];

function requestedNetwork(argv) {
  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (argument === '--network') {
      return argv[index + 1];
    }
    if (argument.startsWith('--network=')) {
      return argument.slice('--network='.length);
    }
  }

  return undefined;
}

function assertSupportedNetwork(argv) {
  const network = requestedNetwork(argv);
  if (network && EXTERNAL_NETWORKS.has(network.toLowerCase())) {
    throw new Error(
      `Network "${network}" is disabled: this repository is a retained historical reference, not a deployment source.`,
    );
  }
}

function sha256(file) {
  return crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
}

function validatePolicy(rootDirectory) {
  const failures = [];
  const policyPath = path.join(rootDirectory, 'repository-policy.json');
  const policy = JSON.parse(fs.readFileSync(policyPath, 'utf8'));

  if (policy.schemaVersion !== 1) failures.push('schemaVersion must be 1');
  if (policy.decision !== 'retain-as-historical-reference') failures.push('reference decision is missing');
  if (policy.classification !== 'not-an-app') failures.push('classification must remain not-an-app');
  if (policy.productBoundary !== 'none') failures.push('productBoundary must be none');
  if (!policy.maintenanceOwner) failures.push('maintenanceOwner is required');
  if (!policy.securityPatchOwner) failures.push('securityPatchOwner is required');
  if (policy.upstream.repository !== 'https://github.com/enzymefinance/protocol') {
    failures.push('upstream repository does not match the recorded source');
  }
  if (policy.upstream.baseCommit !== 'fec37a7e') failures.push('upstream base commit changed');
  if (policy.fork.retainedBaselineCommit !== '2402153a69c8a9c24284f9011df79fdf5e5fbcfb') {
    failures.push('retained fork baseline changed');
  }
  if (policy.license.spdx !== 'GPL-3.0') failures.push('license must be GPL-3.0');

  const unsupported = [...policy.unsupportedActivities].sort();
  if (JSON.stringify(unsupported) !== JSON.stringify(REQUIRED_UNSUPPORTED_ACTIVITIES)) {
    failures.push('unsupported activities must block publishing, production use, and public deployment');
  }

  const license = fs.readFileSync(path.join(rootDirectory, policy.license.file), 'utf8');
  if (!license.includes('GNU GENERAL PUBLIC LICENSE') || !license.includes('Version 3, 29 June 2007')) {
    failures.push('LICENSE is not the recorded GPL version 3 text');
  }

  for (const audit of policy.auditDocuments) {
    const auditPath = path.join(rootDirectory, audit.path);
    if (!fs.existsSync(auditPath)) {
      failures.push(`missing audit document: ${audit.path}`);
    } else if (sha256(auditPath) !== audit.sha256) {
      failures.push(`audit checksum mismatch: ${audit.path}`);
    }
  }

  const packageJson = JSON.parse(fs.readFileSync(path.join(rootDirectory, 'package.json'), 'utf8'));
  for (const script of ['release', 'deploy:kovan', 'verify:kovan', 'deploy:mainnet', 'verify:mainnet']) {
    if (!packageJson.scripts[script] || !packageJson.scripts[script].includes('deny-unsupported-action')) {
      failures.push(`${script} must fail closed through deny-unsupported-action`);
    }
  }

  const config = fs.readFileSync(path.join(rootDirectory, 'hardhat.config.ts'), 'utf8');
  if (!config.includes('assertSupportedNetwork(process.argv.slice(2))')) {
    failures.push('Hardhat must reject external networks when invoked directly');
  }
  if (/alchemyapi\.io\/v2\/[A-Za-z0-9_-]+/.test(config)) {
    failures.push('hardhat.config.ts contains a credential-bearing Alchemy URL');
  }
  if (/accounts:\s*\[[^\]]*0x[a-fA-F0-9]{64}/s.test(config)) {
    failures.push('hardhat.config.ts contains copied private keys');
  }

  return failures;
}

module.exports = { assertSupportedNetwork, requestedNetwork, validatePolicy };
