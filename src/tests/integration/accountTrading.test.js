import { toWei } from 'web3-utils';
import { Environment } from '~/utils/environment/Environment';
import { getTokenBySymbol } from '~/utils/environment/getTokenBySymbol';
import { getContract } from '~/utils/solidity/getContract';
import { deployAndInitTestEnv } from '../utils/deployAndInitTestEnv';
import { CONTRACT_NAMES, EXCHANGES } from '../utils/new/constants';
const getFundComponents = require('../utils/new/getFundComponents');
const updateTestingPriceFeed = require('../utils/new/updateTestingPriceFeed');
const {increaseTime} = require('../utils/new/rpc');
const getAllBalances = require('../utils/new/getAllBalances');
const {deploy, fetchContract} = require('../../../new/deploy/deploy-contract');
const web3 = require('../../../new/deploy/get-web3');
const deploySystem = require('../../../new/deploy/deploy-system');

describe('account-trading', () => {
  let defaultTxOpts;
  let mlnTokenInfo, wethTokenInfo;
  let mln, weth, matchingMarket, matchingMarketAccessor;

  beforeAll(async () => {
    const accounts = await web3.eth.getAccounts();
    defaultTxOpts = { from: accounts[0], gas: 8000000 };

    const deployment = await deploySystem(JSON.parse(require('fs').readFileSync(process.env.CONF))); // TODO: change from reading file each time
    const contracts = deployment.contracts;

    mln = contracts.MLN;
    weth = contracts.WETH;
    matchingMarket = contracts.MatchingMarket;
    matchingMarketAccessor = contracts.MatchingMarketAccessor;
  });

  it('Happy path', async () => {
    const order1 = {
      buyQuantity: toWei('0.1', 'ether'),
      buyAsset: weth.options.address,
      sellQuantity: toWei('2', 'ether'),
      sellAsset: mln.options.address
    };

    await mln.methods
      .approve(matchingMarket.options.address, order1.sellQuantity)
      .send(defaultTxOpts);

    await matchingMarket.methods
      .offer(
        order1.sellQuantity,
        order1.sellAsset,
        order1.buyQuantity,
        order1.buyAsset,
        0
      )
      .send(defaultTxOpts);

    const activeOrders1 = await matchingMarketAccessor.methods
      .getOrders(matchingMarket.options.address, order1.sellAsset, order1.buyAsset)
      .call()

    order1.id = activeOrders1[0][0];
    expect(activeOrders1[1][0].toString()).toBe(order1.sellQuantity.toString());
    expect(activeOrders1[2][0].toString()).toBe(order1.buyQuantity.toString());

    await weth.methods
      .approve(matchingMarket.options.address, order1.buyQuantity)
      .send(defaultTxOpts);

    await matchingMarket.methods
      .buy(
        order1.id,
        order1.sellQuantity
      )
      .send(defaultTxOpts);

    const activeOrders2 = await matchingMarketAccessor.methods
      .getOrders(matchingMarket.options.address, order1.sellAsset, order1.buyAsset)
      .call()

    expect(activeOrders2[0].length).toBe(0);

    const order2 = {
      buyQuantity: toWei('2', 'ether'),
      buyAsset: mln.options.address,
      sellQuantity: toWei('0.1', 'ether'),
      sellAsset: weth.options.address
    };

    await weth.methods
      .approve(matchingMarket.options.address, order2.sellQuantity)
      .send(defaultTxOpts);

    await matchingMarket.methods
      .offer(
        order2.sellQuantity,
        order2.sellAsset,
        order2.buyQuantity,
        order2.buyAsset,
        0
      )
      .send(defaultTxOpts);

    const activeOrders3 = await matchingMarketAccessor.methods
      .getOrders(matchingMarket.options.address, order2.sellAsset, order2.buyAsset)
      .call()

    order2.id = activeOrders3[0][0];
    expect(activeOrders3[1][0].toString()).toBe(order2.sellQuantity.toString());
    expect(activeOrders3[2][0].toString()).toBe(order2.buyQuantity.toString());

    await matchingMarket.methods
      .cancel(order2.id)
      .send(defaultTxOpts);

    const activeOrders4 = await matchingMarketAccessor.methods
      .getOrders(matchingMarket.options.address, order2.sellAsset, order2.buyAsset)
      .call()

    expect(activeOrders4[0].length).toBe(0);
  });
});
