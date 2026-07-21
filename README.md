# Enzyme Protocol

![Build Status](../../workflows/CI/badge.svg)

Enzyme is an Ethereum-based protocol for decentralized on-chain asset management. It is a protocol for people or entities to manage their wealth & the wealth of others within a customizable and safe environment. Enzyme empowers anyone to set up, manage and invest in customized on-chain investment vehicles.

> **Repository status:** retained historical reference fork, not a supported application or deployment source. This snapshot diverged from the upstream Enzyme Protocol after commit `fec37a7e` and includes local experimental changes. Do not publish its packages or deploy its contracts. See [Repository status](docs/REPOSITORY_STATUS.md) for provenance, ownership, support, and update policy.

## Install

### Prerequisites

- [node](https://www.nodejs.org)
- [yarn](https://www.yarnpkg.com)

```sh
git clone [GIT_REPOSITORY_URL]
cd protocol
yarn install
```

## Compile contracts

```sh
yarn compile
```

## Test

First, create a `.env` file by copying `.env.example`. Input your Ethereum node endpoint info as-needed (generally, only setting `ETHEREUM_NODE_MAINNET` is fine).

Then, you can run tests. The full test suite can be run with:

```sh
yarn test
```

Note that tests might fail on the first runs while building a cache for the fork block, due to timeout. Continue to run tests as-needed, which will build the cache.

The tests target a historical mainnet fork and require an archive-capable RPC endpoint for the pinned block. Compilation and tests are reproducibility aids only; passing them does not make this fork production-ready.

## Repository policy

Run the dependency-free policy checks before using this snapshot:

```sh
yarn policy:test
yarn policy:check
```

The checks verify the recorded provenance, audit-document hashes, GPL license, reference-only decision, and deployment/publishing guardrails.

## Contribute

See [our contributing instructions](CONTRIBUTING.md).

Please note that all repositories hosted under this organization follow our [Code of Conduct](CODE_OF_CONDUCT.md), make sure to review and follow it.

### Security Issues

For vulnerabilities in the upstream Enzyme Protocol, follow the current upstream private reporting process. The Enzyme project is not responsible for local changes in this fork. Vulnerabilities or dependency alerts specific to this snapshot are owned by this repository's maintainer and must be resolved before any extraction or reuse; do not publish sensitive findings in a public issue.
