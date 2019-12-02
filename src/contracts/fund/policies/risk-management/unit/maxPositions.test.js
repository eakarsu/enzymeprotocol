import { CONTRACT_NAMES, EMPTY_ADDRESS } from '~/tests/utils/new/constants';
import { randomHex } from 'web3-utils';
import { getFunctionSignature } from '~/tests/utils/new/metadata';
import { encodeFunctionSignature } from 'web3-eth-abi';
const web3 = require('../../../../../../deploy/utils/get-web3');
const {deploy} = require('../../../../../../deploy/utils/deploy-contract');
const deployMockSystem = require('../../../../../tests/utils/new/deployMockSystem');

describe('maxPositions', () => {
  let user, defaultTxOpts;
  let mockSystem;
  let makeOrderSignature, makeOrderSignatureBytes;

  beforeAll(async () => {
    const accounts = await web3.eth.getAccounts();
    user = accounts[0];
    mockSystem = await deployMockSystem();
    defaultTxOpts = { from: user, gas: 8000000 };

    makeOrderSignature = getFunctionSignature(
      CONTRACT_NAMES.EXCHANGE_ADAPTER,
      'makeOrder',
    );

    makeOrderSignatureBytes = encodeFunctionSignature(
      makeOrderSignature
    );
  });

  it('Create and get max', async () => {
    const positions = ['0', '125', '9999999999'];
    for (const n of positions) {
      const maxPositions = await deploy(CONTRACT_NAMES.MAX_POSITIONS, [n]);
      expect(await maxPositions.methods.maxPositions().call()).toEqual(n);
    }
  });

  it('Policy manager and mock accounting with maxPositions', async () => {
    const maxPositions = '3';
    const policy = await deploy(CONTRACT_NAMES.MAX_POSITIONS, [
      maxPositions
    ]);
    const nonQuoteAsset = randomHex(20);
    const quoteAsset = mockSystem.weth.options.address;
    await mockSystem.policyManager.methods
      .register(makeOrderSignatureBytes, policy.options.address)
      .send(defaultTxOpts);
    await mockSystem.accounting.methods
      .setOwnedAssets([mockSystem.weth.options.address])
      .send(defaultTxOpts);

    await expect(
      mockSystem.policyManager.methods
        .postValidate(
          makeOrderSignatureBytes,
          [EMPTY_ADDRESS, EMPTY_ADDRESS, EMPTY_ADDRESS, quoteAsset, EMPTY_ADDRESS],
          [0, 0, 0],
          '0x0',
        )
        .call(),
    ).resolves.not.toThrow();
    await expect(
      mockSystem.policyManager.methods
        .postValidate(
          makeOrderSignatureBytes,
          [
            EMPTY_ADDRESS,
            EMPTY_ADDRESS,
            EMPTY_ADDRESS,
            nonQuoteAsset,
            EMPTY_ADDRESS,
          ],
          [0, 0, 0],
          '0x0',
        )
        .call(),
    ).resolves.not.toThrow();

    await mockSystem.accounting.methods
      .setOwnedAssets([
        nonQuoteAsset,
        randomHex(20),
        randomHex(20),
      ])
      .send(defaultTxOpts);

    await expect(
      mockSystem.policyManager.methods
        .postValidate(
          makeOrderSignatureBytes,
          [EMPTY_ADDRESS, EMPTY_ADDRESS, EMPTY_ADDRESS, quoteAsset, EMPTY_ADDRESS],
          [0, 0, 0],
          '0x0',
        )
        .call(),
    ).resolves.not.toThrow();
    await expect(
      mockSystem.policyManager.methods
        .postValidate(
          makeOrderSignatureBytes,
          [
            EMPTY_ADDRESS,
            EMPTY_ADDRESS,
            EMPTY_ADDRESS,
            nonQuoteAsset,
            EMPTY_ADDRESS,
          ],
          [0, 0, 0],
          '0x0',
        )
        .call(),
    ).resolves.not.toThrow();

    await mockSystem.accounting.methods
      .setOwnedAssets([
        nonQuoteAsset,
        randomHex(20),
        randomHex(20),
        randomHex(20),
      ])
      .send(defaultTxOpts);

    await expect(
      mockSystem.policyManager.methods
        .postValidate(
          makeOrderSignatureBytes,
          [
            EMPTY_ADDRESS,
            EMPTY_ADDRESS,
            EMPTY_ADDRESS,
            randomHex(20),
            EMPTY_ADDRESS,
          ],
          [0, 0, 0],
          '0x0',
        )
        .call(),
    ).rejects.toThrow('Rule evaluated to false');
  });
});
