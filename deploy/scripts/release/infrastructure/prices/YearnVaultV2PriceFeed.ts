import type { YearnVaultV2PriceFeedArgs } from '@enzymefinance/protocol';
import { IYearnVaultV2, YearnVaultV2PriceFeed } from '@enzymefinance/protocol';
import type { DeployFunction } from 'hardhat-deploy/types';

import { loadConfig } from '../../../../utils/config';
import { isOneOfNetworks, Network } from '../../../../utils/helpers';

const fn: DeployFunction = async function (hre) {
  const {
    deployments: { deploy, get, log },
    ethers: { getSigners },
  } = hre;

  const deployer = (await getSigners())[0];
  const config = await loadConfig(hre);
  const fundDeployer = await get('FundDeployer');

  const yearnVaultV2PriceFeed = await deploy('YearnVaultV2PriceFeed', {
    args: [fundDeployer.address, config.yearn.vaultV2.registry] as YearnVaultV2PriceFeedArgs,
    from: deployer.address,
    log: true,
    skipIfAlreadyDeployed: true,
  });

  if (yearnVaultV2PriceFeed.newlyDeployed) {
    const yearnVaultV2PriceFeedInstance = new YearnVaultV2PriceFeed(yearnVaultV2PriceFeed.address, deployer);
    const yVaults = Object.values(config.yearn.vaultV2.yVaults);
    const underlyings = await Promise.all(
      yVaults.map((yVaultAddress) => {
        const yVault = new IYearnVaultV2(yVaultAddress, deployer);

        return yVault.token();
      }),
    );

    console.log('yearnVaultV2PriceFeed: underlyings');
    underlyings.forEach((x) => console.log(x));
    console.log('yearnVaultV2PriceFeed: yVaults');
    yVaults.forEach((x) => console.log(x));

    const underlyings2 = underlyings.map((x) => {
      if (x == '0x6B175474E89094C44Da98b954EedeAC495271d0F') {
        console.log(
          'Replacing dai address at mainnet 0x19D3364A399d251E894aC732651be8B0E4e85001 to local one' +
            config.primitives.dai,
        );

        return config.primitives.dai;
      } else return x;
    });
    console.log('yearnVaultV2PriceFeed: modified underlyings');
    underlyings2.forEach((x) => console.log(x));

    if (!!yVaults.length) {
      log('Registering yearn vault v2 tokens');
      await yearnVaultV2PriceFeedInstance.addDerivatives(yVaults, underlyings2);
    }
  }
};

fn.tags = ['Release', 'YearnVaultV2PriceFeed'];
fn.dependencies = ['Config', 'FundDeployer'];
fn.skip = async (hre) => {
  const chain = await hre.getChainId();

  return !isOneOfNetworks(chain, [Network.HOMESTEAD]);
};

export default fn;
