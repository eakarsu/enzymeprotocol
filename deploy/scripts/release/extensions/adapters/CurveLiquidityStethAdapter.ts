import type { CurveLiquidityStethAdapterArgs } from '@enzymefinance/protocol';
import type { DeployFunction } from 'hardhat-deploy/types';

import { loadConfig } from '../../../../utils/config';
import { isOneOfNetworks, Network } from '../../../../utils/helpers';

const fn: DeployFunction = async function (hre) {
  const {
    deployments: { deploy, get },
    ethers: { getSigners },
  } = hre;

  const config = await loadConfig(hre);
  const deployer = (await getSigners())[0];
  const integrationManager = await get('IntegrationManager');

  await deploy('CurveLiquidityStethAdapter', {
    args: [
      integrationManager.address,
      config.curve.pools.steth.liquidityGaugeToken,
      config.curve.pools.steth.lpToken,
      config.curve.minter,
      config.curve.pools.steth.pool,
      config.primitives.crv,
      config.lido.steth,
      config.weth,
    ] as CurveLiquidityStethAdapterArgs,
    from: deployer.address,
    linkedData: {
      nonSlippageAdapter: true,
      type: 'ADAPTER',
    },
    log: true,
    skipIfAlreadyDeployed: true,
  });
};

fn.tags = ['Release', 'Adapters', 'CurveLiquidityStethAdapter'];
fn.dependencies = ['Config', 'IntegrationManager'];
fn.skip = async (hre) => {
  const chain = await hre.getChainId();

  const flag = !isOneOfNetworks(chain, [Network.HOMESTEAD]);

  return flag || true;
};

export default fn;
