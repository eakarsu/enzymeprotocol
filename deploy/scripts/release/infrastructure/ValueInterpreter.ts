import type { ValueInterpreterArgs } from '@enzymefinance/protocol';
import {
  ONE_DAY_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ValueInterpreter,
} from '@enzymefinance/protocol';
import type { DeployFunction } from 'hardhat-deploy/types';

import { loadConfig } from '../../../utils/config';

const fn: DeployFunction = async function (hre) {
  const {
    deployments: { deploy, get, getOrNull },
    ethers: { getSigners },
  } = hre;

  const deployer = (await getSigners())[0];
  const config = await loadConfig(hre);
  const fundDeployer = await get('FundDeployer');

  const chainlinkStaleRateThreshold = hre.network.live
    ? ONE_DAY_IN_SECONDS + ONE_HOUR_IN_SECONDS
    : ONE_YEAR_IN_SECONDS * 10;

  const valueInterpreter = await deploy('ValueInterpreter', {
    args: [fundDeployer.address, config.weth, chainlinkStaleRateThreshold] as ValueInterpreterArgs,
    from: deployer.address,
    log: true,
    skipIfAlreadyDeployed: true,
  });

  if (valueInterpreter.newlyDeployed) {
    const valueInterpreterInstance = new ValueInterpreter(valueInterpreter.address, deployer);

    // Add ChainlinkPriceFeedMixin config

    await valueInterpreterInstance.setEthUsdAggregator(config.chainlink.ethusd);

    console.log('ValueInterpreter start');
    const primitivesInfo = Object.keys(config.primitives).map((key) => {
      if (!config.chainlink.aggregators[key]) {
        throw new Error(`Missing aggregator for ${key}`);
      }

      const aggregator = config.chainlink.aggregators[key];
      const primitive = config.primitives[key];
      console.log('aggregator:' + aggregator + ' primitive ' + primitive);

      return [primitive, ...aggregator] as const;
    });
    console.log('ValueInterpreter end');
    const primitives = primitivesInfo.map(([primitive]) => primitive);
    const aggregators = primitivesInfo.map(([, aggregator]) => aggregator);
    const rateAssets = primitivesInfo.map(([, , rateAsset]) => rateAsset);
    console.log('ValueInterpreter primitivesInfo');

    await valueInterpreterInstance.addPrimitives(primitives, aggregators, rateAssets);

    console.log('ValueInterpreter valueInterpreterInstance addPrimitives ');
    // Add AggregatedDerivativePriceFeedMixin config

    const aavePriceFeed = await getOrNull('AavePriceFeed');
    const curvePriceFeed = await getOrNull('CurvePriceFeed');
    const compoundPriceFeed = await getOrNull('CompoundPriceFeed');
    const idlePriceFeed = await getOrNull('IdlePriceFeed');
    const lidoStethPriceFeed = await getOrNull('LidoStethPriceFeed');
    const poolTogetherV4PriceFeed = await getOrNull('PoolTogetherV4PriceFeed');
    const stakehoundEthPriceFeed = await getOrNull('StakehoundEthPriceFeed');
    const synthetixPriceFeed = await getOrNull('SynthetixPriceFeed');
    const yearnVaultV2PriceFeed = await getOrNull('YearnVaultV2PriceFeed');

    console.log('ValueInterpreter yearnVaultV2PriceFeed ');

    const derivativePairs: [string, string][] = [
      ...(compoundPriceFeed ? [[config.compound.ceth, compoundPriceFeed.address] as [string, string]] : []),
      ...(lidoStethPriceFeed ? [[config.lido.steth, lidoStethPriceFeed.address] as [string, string]] : []),
      ...(stakehoundEthPriceFeed
        ? [[config.stakehound.steth, stakehoundEthPriceFeed.address] as [string, string]]
        : []),
      ...(aavePriceFeed
        ? Object.values(config.aave.atokens)
            .filter((x, index) => index == 0 || index == 4 || index == 5)
            .map(([atoken]) => [atoken, aavePriceFeed.address] as [string, string])
        : []),
      ...(compoundPriceFeed
        ? Object.values(config.compound.ctokens).map(
            (ctoken) => [ctoken, compoundPriceFeed.address] as [string, string],
          )
        : []),
      ...(curvePriceFeed
        ? Object.values(config.curve.pools).map((pool) => [pool.lpToken, curvePriceFeed.address] as [string, string])
        : []),
      ...(curvePriceFeed
        ? Object.values(config.curve.pools).map(
            (pool) => [pool.liquidityGaugeToken, curvePriceFeed.address] as [string, string],
          )
        : []),
      ...(idlePriceFeed
        ? Object.values(config.idle).map((idleToken) => [idleToken, idlePriceFeed.address] as [string, string])
        : []),
      ...(poolTogetherV4PriceFeed
        ? Object.values(config.poolTogetherV4.ptTokens).map(
            ([ptToken]) => [ptToken, poolTogetherV4PriceFeed.address] as [string, string],
          )
        : []),
      ...(synthetixPriceFeed
        ? Object.values(config.synthetix.synths).map((synth) => [synth, synthetixPriceFeed.address] as [string, string])
        : []),
      ...(yearnVaultV2PriceFeed
        ? Object.values(config.yearn.vaultV2.yVaults).map(
            (yVault) => [yVault, yearnVaultV2PriceFeed.address] as [string, string],
          )
        : []),
    ];

    console.log('ValueInterpreter derivativePairs ');
    const derivatives = derivativePairs.map(([derivative]) => derivative);
    const derivativeFeeds = derivativePairs.map(([, feed]) => feed);
    if (derivatives.length && derivativeFeeds.length) {
      console.log('ValueInterpreter addDerivatives before ');
      await valueInterpreterInstance.addDerivatives(derivatives, derivativeFeeds);
      console.log('ValueInterpreter addDerivatives after ');
    }
  }
};

fn.tags = ['Release', 'ValueInterpreter'];
fn.dependencies = [
  'Config',
  'FundDeployer',
  // Derivative price feeds
  'AavePriceFeed',
  'AlphaHomoraV1PriceFeed',
  'CurvePriceFeed',
  'CompoundPriceFeed',
  'IdlePriceFeed',
  'LidoStethPriceFeed',
  'PoolTogetherV4PriceFeed',
  'StakehoundEthPriceFeed',
  'SynthetixPriceFeed',
  'YearnVaultV2PriceFeed',
];

export default fn;
