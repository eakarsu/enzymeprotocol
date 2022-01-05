import type { AaveAdapterArgs } from '@enzymefinance/protocol';
import type { DeployFunction } from 'hardhat-deploy/types';

import { loadConfig } from '../../../../utils/config';
import { isOneOfNetworks, Network } from '../../../../utils/helpers';

const fn: DeployFunction = async function (hre) {
  const {
    deployments: { deploy, get },
    ethers: { getSigners },
  } = hre;

  const deployer = (await getSigners())[0];
  const config = await loadConfig(hre);
  const integrationManager = await get('IntegrationManager');
  const aavePriceFeed = await get('AavePriceFeed');

  await deploy('AaveAdapter', {
    args: [
      integrationManager.address,
      config.aave.lendingPoolAddressProvider,
      aavePriceFeed.address,
    ] as AaveAdapterArgs,
    from: deployer.address,
    linkedData: {
      nonSlippageAdapter: true,
      type: 'ADAPTER',
    },
    log: true,
    skipIfAlreadyDeployed: true,
  });
};

fn.tags = ['Release', 'Adapters', 'AaveAdapter'];
fn.dependencies = ['Config', 'IntegrationManager', 'AavePriceFeed'];
fn.skip = async (hre) => {
  const chain = await hre.getChainId();
  console.log('chain:' + chain + ':' + Network.HOMESTEAD);
  console.log('ddddd:' + isOneOfNetworks(chain, [Network.HOMESTEAD]));

  return !isOneOfNetworks(chain, [Network.HOMESTEAD]);
};

export default fn;
