import type { AddressLike } from '@enzymefinance/ethers';
import { randomAddress } from '@enzymefinance/ethers';
import type { SignerWithAddress } from '@enzymefinance/hardhat';
import {
  CompoundDebtPositionActionId,
  compoundExternalPositionActionArgs,
  encodeArgs,
  StandardToken,
} from '@enzymefinance/protocol';
import type { ProtocolDeployment } from '@enzymefinance/testutils';
import { createCompoundDebtPosition, createNewFund, deployProtocolFixture } from '@enzymefinance/testutils';
import hre from 'hardhat';

let fork: ProtocolDeployment;
let externalPositionProxyUsed: AddressLike;

beforeEach(async () => {
  fork = await deployProtocolFixture();
  const [fundOwner] = fork.accounts;

  // Initialize fund and external position
  const { comptrollerProxy } = await createNewFund({
    denominationAsset: new StandardToken(fork.config.weth, hre.ethers.provider),
    fundDeployer: fork.deployment.fundDeployer,
    fundOwner,
    signer: fundOwner as SignerWithAddress,
  });

  const { externalPositionProxy } = await createCompoundDebtPosition({
    comptrollerProxy,
    externalPositionManager: fork.deployment.externalPositionManager,
    signer: fundOwner,
  });

  externalPositionProxyUsed = externalPositionProxy;
});

describe('constructor', () => {
  it('sets state vars', async () => {
    const compoundDebtPositionParser = fork.deployment.compoundDebtPositionParser;

    expect(await compoundDebtPositionParser.getCompoundPriceFeed()).toMatchAddress(fork.deployment.compoundPriceFeed);
    expect(await compoundDebtPositionParser.getCompToken()).toMatchAddress(fork.config.primitives.comp);
    expect(await compoundDebtPositionParser.getValueInterpreter()).toMatchAddress(fork.deployment.valueInterpreter);
  });
});

describe('parseAssetsForAction', () => {
  it('generates expected output for addCollateral', async () => {
    const compoundDebtPositionParser = fork.deployment.compoundDebtPositionParser;
    const assets = [fork.config.primitives.dai];
    const amounts = [1];
    const cTokens = [randomAddress()];

    const actionArgs = compoundExternalPositionActionArgs({
      amounts,
      assets,
      data: encodeArgs(['address[]'], [cTokens]),
    });

    const result = await compoundDebtPositionParser.parseAssetsForAction
      .args(externalPositionProxyUsed, CompoundDebtPositionActionId.AddCollateralAssets, actionArgs)
      .call();

    expect(result).toMatchFunctionOutput(compoundDebtPositionParser.parseAssetsForAction, {
      amountsToTransfer_: amounts,
      assetsToReceive_: [],
      assetsToTransfer_: assets,
    });
  });

  it('generates expected output for removeCollateral', async () => {
    const compoundDebtPositionParser = fork.deployment.compoundDebtPositionParser;
    const assets = [fork.config.primitives.dai];
    const amounts = [1];
    const cTokens = [randomAddress()];

    const actionArgs = compoundExternalPositionActionArgs({
      amounts,
      assets,
      data: encodeArgs(['address[]'], [cTokens]),
    });

    const result = await compoundDebtPositionParser.parseAssetsForAction
      .args(externalPositionProxyUsed, CompoundDebtPositionActionId.RemoveCollateralAssets, actionArgs)
      .call();

    expect(result).toMatchFunctionOutput(compoundDebtPositionParser.parseAssetsForAction, {
      amountsToTransfer_: [],
      assetsToReceive_: assets,
      assetsToTransfer_: [],
    });
  });

  it('generates expected output for borrow', async () => {
    const compoundDebtPositionParser = fork.deployment.compoundDebtPositionParser;
    const assets = [fork.config.primitives.dai];
    const amounts = [1];
    const cTokens = [fork.config.compound.ctokens.cdai];

    const actionArgs = compoundExternalPositionActionArgs({
      amounts,
      assets,
      data: encodeArgs(['address[]'], [cTokens]),
    });

    const result = await compoundDebtPositionParser.parseAssetsForAction
      .args(externalPositionProxyUsed, CompoundDebtPositionActionId.BorrowAsset, actionArgs)
      .call();

    expect(result).toMatchFunctionOutput(compoundDebtPositionParser.parseAssetsForAction, {
      amountsToTransfer_: [],
      assetsToReceive_: assets,
      assetsToTransfer_: [],
    });
  });

  it('generates expected output for claimComp', async () => {
    const compoundDebtPositionParser = fork.deployment.compoundDebtPositionParser;
    const assets = [fork.config.primitives.dai];
    const amounts = [1];

    const actionArgs = compoundExternalPositionActionArgs({
      amounts,
      assets,
      data: '0x',
    });

    const result = await compoundDebtPositionParser.parseAssetsForAction
      .args(externalPositionProxyUsed, CompoundDebtPositionActionId.ClaimComp, actionArgs)
      .call();

    expect(result).toMatchFunctionOutput(compoundDebtPositionParser.parseAssetsForAction, {
      amountsToTransfer_: [],
      assetsToReceive_: [fork.config.primitives.comp],
      assetsToTransfer_: [],
    });
  });

  it('reverts if receives a wrong combination token-cToken for borrow', async () => {
    const compoundDebtPositionParser = fork.deployment.compoundDebtPositionParser;
    const assets = [fork.config.primitives.dai];
    const amounts = [1];
    const cTokens = [randomAddress()];

    const actionArgs = compoundExternalPositionActionArgs({
      amounts,
      assets,
      data: encodeArgs(['address[]'], [cTokens]),
    });

    const result = compoundDebtPositionParser.parseAssetsForAction
      .args(externalPositionProxyUsed, CompoundDebtPositionActionId.BorrowAsset, actionArgs)
      .call();

    await expect(result).rejects.toBeRevertedWith('Bad token cToken pair');
  });

  it('generates expected output for repayBorrow', async () => {
    const compoundDebtPositionParser = fork.deployment.compoundDebtPositionParser;
    const assets = [fork.config.primitives.dai];
    const amounts = [1];
    const cTokens = [fork.config.compound.ctokens.cdai];

    const actionArgs = compoundExternalPositionActionArgs({
      amounts,
      assets,
      data: encodeArgs(['address[]'], [cTokens]),
    });

    const result = await compoundDebtPositionParser.parseAssetsForAction
      .args(externalPositionProxyUsed, CompoundDebtPositionActionId.RepayBorrowedAssets, actionArgs)
      .call();

    expect(result).toMatchFunctionOutput(compoundDebtPositionParser.parseAssetsForAction, {
      amountsToTransfer_: amounts,
      assetsToReceive_: [],
      assetsToTransfer_: assets,
    });
  });

  it('reverts if it receives a wrong token-cToken combination for repayBorrow', async () => {
    const compoundDebtPositionParser = fork.deployment.compoundDebtPositionParser;
    const assets = [fork.config.primitives.dai];
    const amounts = [1];
    const cTokens = [randomAddress()];

    const actionArgs = compoundExternalPositionActionArgs({
      amounts,
      assets,
      data: encodeArgs(['address[]'], [cTokens]),
    });

    const result = compoundDebtPositionParser.parseAssetsForAction
      .args(externalPositionProxyUsed, CompoundDebtPositionActionId.RepayBorrowedAssets, actionArgs)
      .call();

    await expect(result).rejects.toBeRevertedWith('Bad token cToken pair');
  });

  it('reverts if it receives an invalid asset', async () => {
    const compoundDebtPositionParser = fork.deployment.compoundDebtPositionParser;
    const assets = [randomAddress()];
    const amounts = [1];
    const cTokens = [fork.config.compound.ctokens.cdai];

    const actionArgs = compoundExternalPositionActionArgs({
      amounts,
      assets,
      data: encodeArgs(['address[]'], [cTokens]),
    });

    const result = compoundDebtPositionParser.parseAssetsForAction
      .args(externalPositionProxyUsed, CompoundDebtPositionActionId.BorrowAsset, actionArgs)
      .call();
    await expect(result).rejects.toBeRevertedWith('Unsupported asset');
  });
});

describe('parseInitArgs', () => {
  it('return expected result', async () => {
    const compoundDebtPositionParser = fork.deployment.compoundDebtPositionParser;
    expect(await compoundDebtPositionParser.parseInitArgs.args(randomAddress(), '0x00').call()).toEqual('0x');
  });
});
