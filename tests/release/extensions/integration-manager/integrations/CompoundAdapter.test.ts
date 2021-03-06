import { randomAddress } from '@enzymefinance/ethers';
import type { SignerWithAddress } from '@enzymefinance/hardhat';
import type {
  CompoundAdapter,
  CompoundPriceFeed,
  ComptrollerLib,
  IntegrationManager,
  VaultLib,
} from '@enzymefinance/protocol';
import {
  compoundArgs,
  ICERC20,
  lendSelector,
  redeemSelector,
  SpendAssetsHandleType,
  StandardToken,
} from '@enzymefinance/protocol';
import type { ProtocolDeployment } from '@enzymefinance/testutils';
import {
  compoundLend,
  compoundRedeem,
  createNewFund,
  deployProtocolFixture,
  getAssetBalances,
  ICompoundComptroller,
} from '@enzymefinance/testutils';
import { BigNumber, utils } from 'ethers';

async function assertCompoundLend({
  tokenWhale,
  comptrollerProxy,
  vaultProxy,
  integrationManager,
  fundOwner,
  compoundAdapter,
  tokenAmount = utils.parseEther('1'),
  cToken,
  compoundPriceFeed,
}: {
  tokenWhale: SignerWithAddress;
  comptrollerProxy: ComptrollerLib;
  vaultProxy: VaultLib;
  integrationManager: IntegrationManager;
  fundOwner: SignerWithAddress;
  compoundAdapter: CompoundAdapter;
  tokenAmount?: BigNumber;
  cToken: ICERC20;
  compoundPriceFeed: CompoundPriceFeed;
}) {
  const token = new StandardToken(await compoundPriceFeed.getTokenFromCToken.args(cToken).call(), tokenWhale);
  await token.connect(tokenWhale).transfer(vaultProxy, tokenAmount);
  const rateBefore = await cToken.exchangeRateStored.call();

  // Exchange rate stored can have a small deviation from exchangeRateStored
  const minIncomingCTokenAmount = tokenAmount
    .mul(utils.parseEther('1'))
    .div(rateBefore)
    .mul(BigNumber.from('999'))
    .div(BigNumber.from('1000'));

  const [preTxIncomingAssetBalance, preTxOutgoingAssetBalance] = await getAssetBalances({
    account: vaultProxy,
    assets: [cToken as any, token],
  });

  const lendReceipt = await compoundLend({
    cToken,
    cTokenAmount: minIncomingCTokenAmount,
    compoundAdapter,
    comptrollerProxy,
    fundOwner,
    integrationManager,
    tokenAmount,
  });

  // Get exchange rate after tx (the rate is updated right after)
  const rate = await cToken.exchangeRateStored();
  const [postTxIncomingAssetBalance, postTxOutgoingAssetBalance] = await getAssetBalances({
    account: vaultProxy,
    assets: [cToken as any, token],
  });

  const expectedCTokenAmount = tokenAmount.mul(utils.parseEther('1')).div(rate);
  expect(postTxIncomingAssetBalance).toEqBigNumber(preTxIncomingAssetBalance.add(expectedCTokenAmount));
  expect(postTxOutgoingAssetBalance).toEqBigNumber(preTxOutgoingAssetBalance.sub(tokenAmount));

  return lendReceipt;
}

async function assertCompoundRedeem({
  comptrollerProxy,
  vaultProxy,
  integrationManager,
  fundOwner,
  compoundAdapter,
  cToken,
  compoundPriceFeed,
}: {
  comptrollerProxy: ComptrollerLib;
  vaultProxy: VaultLib;
  integrationManager: IntegrationManager;
  fundOwner: SignerWithAddress;
  compoundAdapter: CompoundAdapter;
  cToken: ICERC20;
  compoundPriceFeed: CompoundPriceFeed;
}) {
  const cTokenAmount = utils.parseUnits('1', await cToken.decimals());
  await cToken.transfer(vaultProxy, cTokenAmount);

  const token = new StandardToken(await compoundPriceFeed.getTokenFromCToken.args(cToken).call(), provider);
  const [preTxIncomingAssetBalance, preTxOutgoingAssetBalance] = await getAssetBalances({
    account: vaultProxy,
    assets: [token, cToken as any],
  });

  const rateBefore = await cToken.exchangeRateStored();
  const minIncomingTokenAmount = cTokenAmount.mul(rateBefore).div(utils.parseEther('1'));

  const redeemReceipt = await compoundRedeem({
    cToken,
    cTokenAmount,
    compoundAdapter,
    comptrollerProxy,
    fundOwner,
    integrationManager,
    tokenAmount: minIncomingTokenAmount,
    vaultProxy,
  });

  const [postTxIncomingAssetBalance, postTxOutgoingAssetBalance] = await getAssetBalances({
    account: vaultProxy,
    assets: [token, cToken as any],
  });

  // Get exchange rate after tx (the rate is updated right after)
  const rate = await cToken.exchangeRateStored();
  const expectedTokenAmount = cTokenAmount.mul(rate).div(utils.parseEther('1'));

  expect(postTxIncomingAssetBalance).toEqBigNumber(preTxIncomingAssetBalance.add(expectedTokenAmount));
  expect(postTxOutgoingAssetBalance).toEqBigNumber(preTxOutgoingAssetBalance.sub(cTokenAmount));

  return redeemReceipt;
}

const compoundComptrollerAddress = '0x3d9819210A31b4961b30EF54bE2aeD79B9c9Cd3B';

let fork: ProtocolDeployment;
beforeEach(async () => {
  fork = await deployProtocolFixture();
});

describe('constructor', () => {
  it('sets state vars', async () => {
    const compoundAdapter = fork.deployment.compoundAdapter;

    const getCompoundPriceFeedCall = await compoundAdapter.getCompoundPriceFeed();
    expect(getCompoundPriceFeedCall).toMatchAddress(fork.deployment.compoundPriceFeed);

    const getIntegrationManagerCall = await compoundAdapter.getIntegrationManager();
    expect(getIntegrationManagerCall).toMatchAddress(fork.deployment.integrationManager);

    const getWethTokenCall = await compoundAdapter.getCompoundWethToken();
    expect(getWethTokenCall).toMatchAddress(fork.config.weth);
  });
});

describe('parseAssetsForAction', () => {
  it('does not allow a bad selector', async () => {
    const compoundAdapter = fork.deployment.compoundAdapter;

    const args = compoundArgs({
      cToken: fork.config.compound.ctokens.ccomp,
      minIncomingAssetAmount: utils.parseEther('1'),
      outgoingAssetAmount: utils.parseEther('1'),
    });

    await expect(
      compoundAdapter.parseAssetsForAction(randomAddress(), utils.randomBytes(4), args),
    ).rejects.toBeRevertedWith('_selector invalid');

    await expect(compoundAdapter.parseAssetsForAction(randomAddress(), lendSelector, args)).resolves.toBeTruthy();
  });

  it('does not allow a bad cToken', async () => {
    const compoundAdapter = fork.deployment.compoundAdapter;

    const badArgs = compoundArgs({
      cToken: randomAddress(),
      minIncomingAssetAmount: utils.parseEther('1'),
      outgoingAssetAmount: utils.parseEther('1'),
    });

    const goodArgs = compoundArgs({
      cToken: fork.config.compound.ctokens.ccomp,
      minIncomingAssetAmount: utils.parseEther('1'),
      outgoingAssetAmount: utils.parseEther('1'),
    });

    await expect(compoundAdapter.parseAssetsForAction(randomAddress(), lendSelector, badArgs)).rejects.toBeRevertedWith(
      'Unsupported cToken',
    );

    await expect(compoundAdapter.parseAssetsForAction(randomAddress(), lendSelector, goodArgs)).resolves.toBeTruthy();
  });

  it('generates expected output for lending', async () => {
    const compoundAdapter = fork.deployment.compoundAdapter;
    const cToken = fork.config.compound.ctokens.ccomp;
    const token = fork.config.primitives.comp;

    const tokenAmount = utils.parseEther('1');
    const minIncomingCTokenAmount = utils.parseEther('2');

    const args = compoundArgs({
      cToken,
      minIncomingAssetAmount: minIncomingCTokenAmount,
      outgoingAssetAmount: tokenAmount,
    });
    const selector = lendSelector;

    const result = await compoundAdapter.parseAssetsForAction(randomAddress(), selector, args);

    expect(result).toMatchFunctionOutput(compoundAdapter.parseAssetsForAction, {
      incomingAssets_: [cToken],
      minIncomingAssetAmounts_: [minIncomingCTokenAmount],
      spendAssetAmounts_: [tokenAmount],
      spendAssetsHandleType_: SpendAssetsHandleType.Transfer,
      spendAssets_: [token],
    });
  });

  it('generates expected output for redeeming', async () => {
    const compoundAdapter = fork.deployment.compoundAdapter;
    const cToken = fork.config.compound.ctokens.ccomp;
    const token = fork.config.primitives.comp;

    const cTokenAmount = utils.parseEther('1');
    const minIncomingTokenAmount = utils.parseEther('2');

    const args = compoundArgs({
      cToken,
      minIncomingAssetAmount: minIncomingTokenAmount,
      outgoingAssetAmount: cTokenAmount,
    });
    const selector = redeemSelector;

    const result = await compoundAdapter.parseAssetsForAction(randomAddress(), selector, args);

    expect(result).toMatchFunctionOutput(compoundAdapter.parseAssetsForAction, {
      incomingAssets_: [token],
      minIncomingAssetAmounts_: [minIncomingTokenAmount],
      spendAssetAmounts_: [cTokenAmount],
      spendAssetsHandleType_: SpendAssetsHandleType.Transfer,
      spendAssets_: [cToken],
    });
  });
});

describe('lend', () => {
  it('works as expected when called for lending by a fund', async () => {
    const [fundOwner] = fork.accounts;

    const { comptrollerProxy, vaultProxy } = await createNewFund({
      denominationAsset: new StandardToken(fork.config.weth, provider),
      fundDeployer: fork.deployment.fundDeployer,
      fundOwner,
      signer: fundOwner,
    });

    const lendReceipt = await assertCompoundLend({
      cToken: new ICERC20(fork.config.compound.ctokens.cdai, provider),
      compoundAdapter: fork.deployment.compoundAdapter,
      compoundPriceFeed: fork.deployment.compoundPriceFeed,
      comptrollerProxy,
      fundOwner,
      integrationManager: fork.deployment.integrationManager,
      tokenAmount: utils.parseEther('1'),
      tokenWhale: whales.dai,
      vaultProxy,
    });

    expect(lendReceipt).toCostAround('447029');
  });

  it('works as expected when called for lending by a fund (ETH)', async () => {
    const [fundOwner] = fork.accounts;

    const { comptrollerProxy, vaultProxy } = await createNewFund({
      denominationAsset: new StandardToken(fork.config.weth, provider),
      fundDeployer: fork.deployment.fundDeployer,
      fundOwner,
      signer: fundOwner,
    });

    const lendReceipt = await assertCompoundLend({
      cToken: new ICERC20(fork.config.compound.ceth, provider),
      compoundAdapter: fork.deployment.compoundAdapter,
      compoundPriceFeed: fork.deployment.compoundPriceFeed,
      comptrollerProxy,
      fundOwner,
      integrationManager: fork.deployment.integrationManager,
      tokenAmount: utils.parseEther('1'),
      tokenWhale: whales.weth,
      vaultProxy,
    });

    expect(lendReceipt).toCostAround('393955');
  });
});

describe('redeem', () => {
  it('works as expected when called for redeeming by a fund', async () => {
    const [fundOwner] = fork.accounts;

    const { comptrollerProxy, vaultProxy } = await createNewFund({
      denominationAsset: new StandardToken(fork.config.weth, provider),
      fundDeployer: fork.deployment.fundDeployer,
      fundOwner,
      signer: fundOwner,
    });

    const redeemReceipt = await assertCompoundRedeem({
      cToken: new ICERC20(fork.config.compound.ctokens.cdai, whales.cdai),
      compoundAdapter: fork.deployment.compoundAdapter,
      compoundPriceFeed: fork.deployment.compoundPriceFeed,
      comptrollerProxy,
      fundOwner,
      integrationManager: fork.deployment.integrationManager,
      vaultProxy,
    });

    expect(redeemReceipt).toCostAround('414990');
  });

  it('works as expected when called for redeeming by a fund (ETH)', async () => {
    const [fundOwner] = fork.accounts;

    const { comptrollerProxy, vaultProxy } = await createNewFund({
      denominationAsset: new StandardToken(fork.config.weth, provider),
      fundDeployer: fork.deployment.fundDeployer,
      fundOwner,
      signer: fundOwner,
    });

    const redeemReceipt = await assertCompoundRedeem({
      cToken: new ICERC20(fork.config.compound.ceth, whales.ceth),
      compoundAdapter: fork.deployment.compoundAdapter,
      compoundPriceFeed: fork.deployment.compoundPriceFeed,
      comptrollerProxy,
      fundOwner,
      integrationManager: fork.deployment.integrationManager,
      vaultProxy,
    });

    expect(redeemReceipt).toCostAround('341323');
  });
});

describe('claimComp', () => {
  it('should accrue COMP on the fund after lending', async () => {
    const [fundOwner] = fork.accounts;
    const compoundAdapter = fork.deployment.compoundAdapter;
    const compoundComptroller = new ICompoundComptroller(compoundComptrollerAddress, fork.deployer);
    const comp = new StandardToken(fork.config.primitives.comp, provider);

    const { comptrollerProxy, vaultProxy } = await createNewFund({
      denominationAsset: new StandardToken(fork.config.weth, provider),
      fundDeployer: fork.deployment.fundDeployer,
      fundOwner,
      signer: fundOwner,
    });

    await assertCompoundLend({
      cToken: new ICERC20(fork.config.compound.ctokens.cdai, provider),
      compoundAdapter,
      compoundPriceFeed: fork.deployment.compoundPriceFeed,
      comptrollerProxy,
      fundOwner,
      integrationManager: fork.deployment.integrationManager,
      tokenAmount: utils.parseEther('1'),
      tokenWhale: whales.dai,
      vaultProxy,
    });

    const secondsToWarp = 100000000;
    await provider.send('evm_increaseTime', [secondsToWarp]);
    await provider.send('evm_mine', []);

    await compoundComptroller.claimComp(vaultProxy.address);
    await compoundComptroller.claimComp(compoundAdapter.address);

    const compVaultBalance = await comp.balanceOf(vaultProxy);
    const compAdapterBalance = await comp.balanceOf(compoundAdapter.address);

    expect(compVaultBalance).toBeGtBigNumber(0);
    expect(compAdapterBalance).toEqBigNumber(0);
  });
});
