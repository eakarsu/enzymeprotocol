#!/usr/bin/env node
'use strict';
/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const { validatePolicy } = require('./repository-policy-lib');

const rootDirectory = path.resolve(__dirname, '..');
const failures = validatePolicy(rootDirectory);

if (failures.length > 0) {
  console.error('Repository policy check failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log('Repository policy check passed. Reference-only boundaries and provenance are intact.');
}
