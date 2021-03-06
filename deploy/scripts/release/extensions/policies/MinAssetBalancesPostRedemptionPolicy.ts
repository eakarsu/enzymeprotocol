import type { MinAssetBalancesPostRedemptionPolicyArgs } from '@enzymefinance/protocol';
import type { DeployFunction } from 'hardhat-deploy/types';

const fn: DeployFunction = async function (hre) {
  const {
    deployments: { deploy, get },
    ethers: { getSigners },
  } = hre;

  const deployer = (await getSigners())[0];
  const policyManager = await get('PolicyManager');

  await deploy('MinAssetBalancesPostRedemptionPolicy', {
    args: [policyManager.address] as MinAssetBalancesPostRedemptionPolicyArgs,
    from: deployer.address,
    linkedData: {
      type: 'POLICY',
    },
    log: true,
    skipIfAlreadyDeployed: true,
  });
};

fn.tags = ['Release', 'Policies', 'MinAssetBalancesPostRedemptionPolicy'];
fn.dependencies = ['PolicyManager'];

export default fn;
