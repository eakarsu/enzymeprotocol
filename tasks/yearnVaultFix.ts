import { IYearnVaultV2 } from '@enzymefinance/protocol';
import { ethers } from 'ethers';
import { task } from 'hardhat/config';
import { exit } from 'process';

//Example usage
//In order to run, in hardhat confing file, we need to remove accounts in localhost network section
//npx hardhat yearnvault --yearnvaultgovernance 0xFEB4acf3df3cDEA7399794D0869ef76A6EfAff52  --yvault 0x19d3364a399d251e894ac732651be8b0e4e85001 --hardhathost http://localhost:8545
//yearnvaultgovernance=0xFEB4acf3df3cDEA7399794D0869ef76A6EfAff52
//yvault=0x19d3364a399d251e894ac732651be8b0e4e85001
task('yearnvault', 'Yearn vault fix')
  .addParam('yearnvaultgovernance', 'yearn vault governance User')
  .addParam('yvault', 'yearn vault address')
  .addParam('hardhathost', 'hardhat host')
  .setAction(async ({ yearnvaultgovernance, yvault, hardhathost }) => {
    try {
      const provider = new ethers.providers.JsonRpcProvider(hardhathost);
      console.log('yvault:' + yvault);
      console.log('yearnvaultgovernance:' + yearnvaultgovernance);

      await provider.send('hardhat_impersonateAccount', [yearnvaultgovernance]);
      const yearnVaultGovernanceUser = provider.getSigner(yearnvaultgovernance);
      console.log('Unlocked user:' + yearnvaultgovernance);

      //set deposit limit.
      //copy file from enzyme project to here
      const yearnVault = new IYearnVaultV2(yvault, provider);
      //remove emergency case from vault
      await yearnVault.connect(yearnVaultGovernanceUser).setEmergencyShutdown(false);

      //make a few test calls to yearn vault
      await yearnVault.connect(yearnVaultGovernanceUser).token();
      await yearnVault.connect(yearnVaultGovernanceUser).pricePerShare();
      //set limit
      await yearnVault.connect(yearnVaultGovernanceUser).setDepositLimit('23561429660698088586937600000');
      const depositLimit = await yearnVault.connect(yearnVaultGovernanceUser).availableDepositLimit();
      console.log('New deposit Limit:' + depositLimit);
    } catch (err) {
      console.error(err);
      exit(1);
    }
  });
