# Enzyme Protocol

![Build Status](../../workflows/CI/badge.svg)

Enzyme is an Ethereum-based protocol for decentralized on-chain asset management. It is a protocol for people or entities to manage their wealth & the wealth of others within a customizable and safe environment. Enzyme empowers anyone to set up, manage and invest in customized on-chain investment vehicles.

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

## Contribute

See [our contributing instructions](CONTRIBUTING.md).

Please note that all repositories hosted under this organization follow our [Code of Conduct](CODE_OF_CONDUCT.md), make sure to review and follow it.

### Security Issues

If you find a vulnerability that may affect live or testnet deployments, please send your report privately to [security@enzyme.finance](mailto:security@enzyme.finance). Please **DO NOT** file a public issue.
When you run
npx hardhat node
in one terminal.

you need to run
npx hardhat console --network localhost

to connect to same block chain network. Otherwise you will get error: WARNING: Calling an account which is not a contract

In order to achieve this, we need to add this into network section of hardhat conf
localhost: {
accounts: ["0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80","0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d"],
chainId: 1,
//chainId: 31337,
loggingEnabled: true,
url: "http://localhost:8545",
timeout: 10000000
},

where I have started a empty hardhat node and
npx hardhat --network localhost deploy
Please delete deployment and cache folders before installing local redhat block chain network

Empty hardhat node was configured as
hardhat: {
accounts: {
accountsBalance: "100000000000000000000000000000000000000",
count: 5,
mnemonic,
},
//chainId: 31337,
chainId: 1,
forking: {
blockNumber: 13619920, // Nov 15, 2021
url: "https://eth-mainnet.alchemyapi.io/v2/4gZBZgXw-GGmzJF3R6FTJvXKNK_XDTJn",
},
},

We need to update coin addresses in mainnet.ts file. For example for aave token and atoke. We need to update lending Smart contract and aave data provider
address like this in this file:

const atokens = {
aaave: ['0x3642fd8F149664b0B4D492C95bc62aC61a39be7A', primitives.aave] as [string, string],

const primitives = {
aave: '0x07882Ae1ecB7429a84f1D53048d35c4bB2056877',

const mainnetConfig: DeploymentConfig = {
aave: {
atokens,
//lendingPoolAddressProvider: '0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5',
//protocolDataProvider: '0x057835Ad21a177dbdd3090bB1CAE03EaCF78Fc6d',

    lendingPoolAddressProvider: '0x68cec0B81d0D21F51415aCa93F24E64bC0406a75',
    protocolDataProvider: '0x0a17FabeA4633ce714F1Fa4a2dcA62C3bAc4758d',

},
rm -fr deployments/ artifacts/ cache/

find deployments/localhost/ -name \*json -print | grep -v "dbg.json" | xargs -i -t cp {} ~/ProsperityFinance/erol-enzyme-aave-fork-protocol/src/abis/
