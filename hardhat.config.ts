import 'dotenv/config';
import '@enzymefinance/hardhat/plugin';
import '@tenderly/hardhat-tenderly';
import 'solidity-coverage';

import { utils } from 'ethers';
import type { HardhatUserConfig } from 'hardhat/types';
import path from 'path';

// This pure-JavaScript guard also protects direct `hardhat --network ...`
// invocations that bypass the package scripts.
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { assertSupportedNetwork } = require('./scripts/repository-policy-lib');

assertSupportedNetwork(process.argv.slice(2));

const GWEI = 1000 * 1000 * 1000;
const DEFAULT_BLOCK_GAS_LIMIT = 8000000;
const DEFAULT_GAS_MUL = 5;
//const HARDFORK = 'kovan'; //'istanbul';

function node(networkName: string) {
  const fallback = 'http://localhost:8545';
  const uppercase = networkName.toUpperCase();
  const uri = process.env[`ETHEREUM_NODE_${uppercase}`] || process.env.ETHEREUM_NODE || fallback;

  return uri.replace('{{NETWORK}}', networkName);
}

function accounts(networkName: string) {
  const uppercase = networkName.toUpperCase();
  const accounts = process.env[`ETHEREUM_ACCOUNTS_${uppercase}`] || process.env.ETHEREUM_ACCOUNTS || '';

  return accounts
    .split(',')
    .map((account) => account.trim())
    .filter(Boolean);
}

const mnemonic = 'test test test test test test test test test test test junk';

// Set the block gas limit and default gas. When testing with code coverage reporting,
// we double the gas limit & default gas to allow for large contracts with instrumentalisation
// injected.
const coverage = JSON.parse(process.env.COVERAGE || 'false');
const gas = 12450000 * (coverage ? 2 : 1);

require(`${path.join(__dirname, 'tasks')}/yearnVaultFix.ts`);

const config: HardhatUserConfig = {
  codeCoverage: {
    //exclude: ['/mock/i'], // Ignore anything with the word "mock" in it.
    exclude: ['/Uniswap/'],
  },

  codeGenerator: {
    abi: {
      path: './packages/protocol/artifacts',
    },
    bytecode: {
      path: './packages/protocol/artifacts',
    },
    clear: true,
    enabled: true,
    include: [
      // Explicitly allow inclusion of core release interfaces.
      'IExternalPosition',
      'IExternalPositionParser',
      'IExternalPositionProxy',
      'IDerivativePriceFeed',
      'IExtension',
      'IIntegrationAdapter',
      'IFee',
      'IPolicy',
      'IPrimitivePriceFeed',

      // TODO: Re-evaluate whether we should include these at all.
      'IMigrationHookHandler',
      'IMigratableVault',
      'IAlphaHomoraV1Bank',
      'IIdleTokenV4',
      'IChainlinkAggregator',
      'IUniswapV2Factory',
      'IUniswapV2Pair',
      'IUniswapV2Router2',
      'ICERC20',
      'ICEther',
      'ISynthetix',
      'ISynthetixAddressResolver',
      'ISynthetixExchangeRates',
      'ISynthetixExchanger',
      'ISynthetixProxyERC20',
      'ISynthetixSynth',
      'ICurveAddressProvider',
      'ICurveLiquidityGaugeV2',
      'ICurveLiquidityPool',
      'ICurveRegistry',
      'ICurveStableSwapSteth',
      'IYearnVaultV2',
      'IGsnRelayHub',
    ],
    options: {
      ignoreContractsWithoutAbi: true,
      ignoreContractsWithoutBytecode: true,
    },
    typescript: {
      path: './packages/protocol/src/codegen',
    },
  },
  contractSizer: {
    disambiguatePaths: false,
  },
  namedAccounts: {
    deployer: 0,
  },
  networks: {
    hardhat: {
      accounts: {
        accountsBalance: utils.parseUnits('1', 36).toString(),
        count: 5,
        mnemonic,
      },
      blockGasLimit: gas,
      chainId: 1,
      forking: {
        blockNumber: 13619920, // Nov 15, 2021
        url: node('mainnet'),
      },
      gasPrice: 0, // TODO: Consider removing this again.
      initialBaseFeePerGas: 0,
    },
    kovan: {
      accounts: accounts('kovan'),
      blockGasLimit: DEFAULT_BLOCK_GAS_LIMIT,
      chainId: 42,
      gasMultiplier: DEFAULT_GAS_MUL,
      gasPrice: 3 * GWEI,
      url: node('kovan'),
    },
    localhost: {
      chainId: 1,
      loggingEnabled: true,
      timeout: 10000000,
      url: 'http://localhost:8545',
    },

    mainnet: {
      accounts: accounts('mainnet'),
      url: node('mainnet'),
    },
  },
  paths: {
    deploy: 'deploy/scripts',
  },
  solidity: {
    compilers: [
      {
        settings: {
          optimizer: {
            details: {
              yul: false,
            },
            enabled: true,
            runs: 200,
          },
        },
        version: '0.7.6',
      },
      {
        settings: {
          optimizer: {
            details: {
              yul: false,
            },
            enabled: true,
            runs: 200,
          },
        },
        version: '0.6.12',
      },
    ],
  },
  tenderly: {
    project: process.env.TENDERLY_PROJECT || 'reference-only',
    username: process.env.TENDERLY_USERNAME || 'reference-only',
  },
};

export default config;
