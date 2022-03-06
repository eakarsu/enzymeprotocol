import type { AavePriceFeedArgs } from '@enzymefinance/protocol';
import { AavePriceFeed } from '@enzymefinance/protocol';
import type { DeployFunction } from 'hardhat-deploy/types';

import { loadConfig } from '../../../../utils/config';
import { isOneOfNetworks, Network } from '../../../../utils/helpers';

const fn: DeployFunction = async function (hre) {
  const {
    deployments: { get, log, deploy },
    ethers: { getSigners },
  } = hre;

  const deployer = (await getSigners())[0];
  const config = await loadConfig(hre);
  const fundDeployer = await get('FundDeployer');

  const aavePriceFeed = await deploy('AavePriceFeed', {
    args: [fundDeployer.address, config.aave.protocolDataProvider] as AavePriceFeedArgs,
    from: deployer.address,
    log: true,
    skipIfAlreadyDeployed: true,
  });

  if (aavePriceFeed.newlyDeployed) {
    const aavePriceFeedInstance = new AavePriceFeed(aavePriceFeed.address, deployer);
    const atokenValues = Object.entries(config.aave.atokens)
      .filter(([k, []]) => config.aave.atokensIncluded.includes(k))
      .map(([, [v1, v2]]) => [v1, v2]);

    atokenValues.forEach((t) => console.log(JSON.stringify(t)));

    if (!!atokenValues.length) {
      const atokenDerivatives = atokenValues.map(([derivative]) => derivative);
      const atokenUnderlyings = atokenValues.map(([, underlying]) => underlying);
      log('Registering aave tokens');
      log('Derivatives:');
      atokenDerivatives.forEach((t) => console.log(JSON.stringify(t)));
      log('Underlying:');
      atokenUnderlyings.forEach((t) => console.log(JSON.stringify(t)));

      await aavePriceFeedInstance.addDerivatives(atokenDerivatives, atokenUnderlyings);
    }
  }
};

fn.tags = ['Release', 'AavePriceFeed'];
fn.dependencies = ['Config', 'FundDeployer'];
fn.skip = async (hre) => {
  const chain = await hre.getChainId();

  return !isOneOfNetworks(chain, [Network.HOMESTEAD]);
};

export default fn;
