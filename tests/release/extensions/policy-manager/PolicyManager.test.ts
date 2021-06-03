import { extractEvent } from '@enzymefinance/ethers';
import {
  IPolicy,
  MockGenericAdapter,
  MockGenericIntegratee,
  PolicyHook,
  policyManagerConfigArgs,
  validateRuleAddTrackedAssetsArgs,
  WETH,
} from '@enzymefinance/protocol';
import {
  createNewFund,
  generateRegisteredMockPolicies,
  mockGenericSwap,
  assertEvent,
  createFundDeployer,
  createMigratedFundConfig,
  deployProtocolFixture,
  addTrackedAssetsToVault,
} from '@enzymefinance/testutils';
import { constants, utils } from 'ethers';

async function snapshot() {
  const {
    accounts: [fundOwner, ...remainingAccounts],
    deployment,
    config,
    deployer,
  } = await deployProtocolFixture();

  const policies = await generateRegisteredMockPolicies({
    deployer,
    policyManager: deployment.policyManager,
  });

  const mockGenericIntegratee = await MockGenericIntegratee.deploy(deployer);
  const mockGenericAdapter = await MockGenericAdapter.deploy(deployer, mockGenericIntegratee);
  await deployment.integrationManager.registerAdapters([mockGenericAdapter]);

  const orderedPolicies = Object.values(policies);
  const policiesSettingsData = [
    ...new Array(orderedPolicies.length - 1).fill(constants.HashZero),
    utils.randomBytes(10),
  ];

  const policyManagerConfig = policyManagerConfigArgs({
    policies: orderedPolicies,
    settings: policiesSettingsData,
  });

  const denominationAsset = new WETH(config.weth, whales.weth);

  return {
    deployer,
    accounts: remainingAccounts,
    config,
    deployment,
    policies,
    orderedPolicies,
    policiesSettingsData,
    policyManagerConfig,
    denominationAsset,
    fundOwner,
    mockGenericIntegratee,
    mockGenericAdapter,
  };
}

describe('constructor', () => {
  it('sets state vars', async () => {
    const {
      deployment: {
        assetWhitelist,
        fundDeployer,
        guaranteedRedemption,
        policyManager,
        investorWhitelist,
        minMaxInvestment,
      },
      policies,
    } = await provider.snapshot(snapshot);

    const result = await policyManager.getRegisteredPolicies();
    expect(result).toMatchFunctionOutput(policyManager.getRegisteredPolicies, [
      assetWhitelist,
      guaranteedRedemption,
      investorWhitelist,
      minMaxInvestment,
      ...Object.values(policies),
    ]);

    expect(await policyManager.getOwner()).toMatchAddress(await fundDeployer.getOwner());
  });
});

describe('activateForFund', () => {
  it('stores the validated VaultProxy and calls `activateForFund()` on each policy (migrated fund only)', async () => {
    // create fund with policies
    const {
      deployer,
      config: {
        synthetix: { addressResolver: synthetixAddressResolverAddress },
      },
      deployment: {
        assetFinalityResolver,
        fundDeployer,
        chainlinkPriceFeed,
        debtPositionManager,
        dispatcher,
        feeManager,
        integrationManager,
        policyManager,
        synthetixPriceFeed,
        valueInterpreter,
        vaultLib,
      },
      fundOwner,
      denominationAsset,
      orderedPolicies,
      policyManagerConfig,
    } = await provider.snapshot(snapshot);

    const { vaultProxy } = await createNewFund({
      signer: fundOwner,
      fundOwner,
      fundDeployer,
      denominationAsset,
      policyManagerConfig,
    });

    // migrate fund
    const nextFundDeployer = await createFundDeployer({
      deployer,
      assetFinalityResolver,
      chainlinkPriceFeed,
      debtPositionManager,
      dispatcher,
      feeManager,
      integrationManager,
      policyManager,
      synthetixPriceFeed,
      synthetixAddressResolverAddress,
      valueInterpreter,
      vaultLib,
    });

    const { comptrollerProxy: nextComptrollerProxy } = await createMigratedFundConfig({
      signer: fundOwner,
      fundDeployer: nextFundDeployer,
      denominationAsset,
      policyManagerConfigData: policyManagerConfig,
    });

    const signedNextFundDeployer = nextFundDeployer.connect(fundOwner);
    await signedNextFundDeployer.signalMigration(vaultProxy, nextComptrollerProxy);

    // Warp to migratable time
    const migrationTimelock = await dispatcher.getMigrationTimelock();
    await provider.send('evm_increaseTime', [migrationTimelock.toNumber()]);

    // Migration execution settles the accrued fee
    await signedNextFundDeployer.executeMigration(vaultProxy);

    // check activateForFund called on each policy
    for (const key in orderedPolicies) {
      expect(orderedPolicies[key].activateForFund).toHaveBeenCalledOnContract();
    }
  });
});

describe('disablePolicyForFund', () => {
  it('does not allow a caller other than the fund owner', async () => {
    const {
      accounts: [randomAccount],
      deployment: { fundDeployer, policyManager },
      policies: { mockPostBuySharesPolicy },
      fundOwner,
      denominationAsset,
      policyManagerConfig,
    } = await provider.snapshot(snapshot);

    // Create fund without policy config
    const { comptrollerProxy } = await createNewFund({
      signer: fundOwner,
      fundOwner,
      fundDeployer,
      denominationAsset,
      policyManagerConfig,
    });

    // Disable the policy
    const disablePolicyForFundCall = policyManager
      .connect(randomAccount)
      .disablePolicyForFund(comptrollerProxy, mockPostBuySharesPolicy);

    await expect(disablePolicyForFundCall).rejects.toBeRevertedWith('Only the fund owner can call this function');
  });

  it('removes specified policy and emits event if the policy allows disabling', async () => {
    const {
      deployment: { fundDeployer, policyManager },
      policies: { mockPostBuySharesPolicy },
      fundOwner,
      denominationAsset,
      policyManagerConfig,
    } = await provider.snapshot(snapshot);

    // Create fund without policy config
    const { comptrollerProxy } = await createNewFund({
      signer: fundOwner,
      fundOwner,
      fundDeployer,
      denominationAsset,
      policyManagerConfig,
    });

    // Attempting to disable a policy that cannot be disabled should fail
    await expect(
      policyManager.connect(fundOwner).disablePolicyForFund(comptrollerProxy, mockPostBuySharesPolicy),
    ).rejects.toBeRevertedWith('_policy cannot be disabled');

    // Change the policy settings to allow disabling
    await mockPostBuySharesPolicy.canDisable.returns(true);

    // Disabling the policy should now succeed
    const receipt = await policyManager
      .connect(fundOwner)
      .disablePolicyForFund(comptrollerProxy, mockPostBuySharesPolicy);

    // Assert that the policy is disabled for the fund
    for (const hook of await mockPostBuySharesPolicy.implementedHooks()) {
      expect(await policyManager.policyIsEnabledOnHookForFund(comptrollerProxy, hook, mockPostBuySharesPolicy)).toBe(
        false,
      );
    }
    expect(await policyManager.getEnabledPoliciesForFund(comptrollerProxy)).not.toEqual(
      expect.arrayContaining([mockPostBuySharesPolicy.address]),
    );

    // Assert that the proper event has been emitted
    const disablePolicyEvent = policyManager.abi.getEvent('PolicyDisabledForFund');
    assertEvent(receipt, disablePolicyEvent, { comptrollerProxy, policy: mockPostBuySharesPolicy });
  });
});

describe('enablePolicyForFund', () => {
  it('does not allow a caller other than the fund owner', async () => {
    const {
      accounts: [randomAccount],
      deployment: { fundDeployer, policyManager },
      policies: { mockPostBuySharesPolicy },
      fundOwner,
      denominationAsset,
    } = await provider.snapshot(snapshot);

    // Create fund without policy config
    const { comptrollerProxy } = await createNewFund({
      signer: fundOwner,
      fundOwner,
      fundDeployer,
      denominationAsset,
    });

    // Add the policy with addFundSettings
    const enablePolicyForFundCall = policyManager
      .connect(randomAccount)
      .enablePolicyForFund(comptrollerProxy, mockPostBuySharesPolicy, '0x');

    await expect(enablePolicyForFundCall).rejects.toBeRevertedWith('Only the fund owner can call this function');
  });

  it('does not allow a policy with a hook that potentially restricts the actions of current investors', async () => {
    const {
      deployment: { fundDeployer, policyManager },
      policies: { mockPreTransferSharesPolicy, mockRedeemSharesForSpecificAssetsPolicy },
      fundOwner,
      denominationAsset,
    } = await provider.snapshot(snapshot);

    // Create fund without policy config
    const { comptrollerProxy } = await createNewFund({
      signer: fundOwner,
      fundOwner,
      fundDeployer,
      denominationAsset,
    });

    const revertReason = '_policy restricts actions of current investors';

    // Attempting to enable a policy that implements PolicyHook.PreTransferShares should fail
    await expect(
      policyManager.connect(fundOwner).enablePolicyForFund(comptrollerProxy, mockPreTransferSharesPolicy, '0x'),
    ).rejects.toBeRevertedWith(revertReason);

    // Attempting to enable a policy that implements PolicyHook.RedeemSharesForSpecificAssetsPolicy should fail
    await expect(
      policyManager
        .connect(fundOwner)
        .enablePolicyForFund(comptrollerProxy, mockRedeemSharesForSpecificAssetsPolicy, '0x'),
    ).rejects.toBeRevertedWith(revertReason);
  });

  it('does not allow an already enabled policy', async () => {
    const {
      deployment: { fundDeployer, policyManager },
      policies: { mockPostBuySharesPolicy },
      fundOwner,
      denominationAsset,
      policyManagerConfig,
    } = await provider.snapshot(snapshot);

    // Create fund and enable mockPostBuySharesPolicy
    const { comptrollerProxy } = await createNewFund({
      signer: fundOwner,
      fundOwner,
      fundDeployer,
      denominationAsset,
      policyManagerConfig,
    });

    // Attempt to enable an already enabled policy
    const enablePolicyForFundCall = policyManager
      .connect(fundOwner)
      .enablePolicyForFund(comptrollerProxy, mockPostBuySharesPolicy, utils.randomBytes(10));

    await expect(enablePolicyForFundCall).rejects.toBeRevertedWith('Policy is already enabled');
  });

  it('does not allow an unregistered policy', async () => {
    const {
      deployment: { fundDeployer, policyManager },
      policies: { mockPostBuySharesPolicy },
      fundOwner,
      denominationAsset,
    } = await provider.snapshot(snapshot);

    // Create fund without policy config
    const { comptrollerProxy } = await createNewFund({
      signer: fundOwner,
      fundOwner,
      fundDeployer,
      denominationAsset,
    });

    // Deregister the mockPostBuySharesPolicy
    await policyManager.deregisterPolicies([mockPostBuySharesPolicy]);

    // Assert that the policy has been de-registered
    const mockPostBuySharesPolicyIsRegistered = await policyManager.policyIsRegistered(mockPostBuySharesPolicy);
    expect(mockPostBuySharesPolicyIsRegistered).toBe(false);

    // Attempt to enable the unregistered policy
    const enablePolicyForFundCall = policyManager
      .connect(fundOwner)
      .enablePolicyForFund(comptrollerProxy, mockPostBuySharesPolicy, utils.randomBytes(10));

    await expect(enablePolicyForFundCall).rejects.toBeRevertedWith('Policy is not registered');
  });

  it('adds specified policy, calls `addFundSettings` and `activateForFund` with the correct params, and emits event', async () => {
    const {
      deployment: { fundDeployer, policyManager },
      policies: { mockPostBuySharesPolicy },
      fundOwner,
      denominationAsset,
    } = await provider.snapshot(snapshot);

    // Create fund without policy config
    const { comptrollerProxy } = await createNewFund({
      signer: fundOwner,
      fundOwner,
      fundDeployer,
      denominationAsset,
    });

    // Assert that the policy disabled on the fund
    for (const hook of await mockPostBuySharesPolicy.implementedHooks()) {
      expect(await policyManager.policyIsEnabledOnHookForFund(comptrollerProxy, hook, mockPostBuySharesPolicy)).toBe(
        false,
      );
    }
    expect(await policyManager.getEnabledPoliciesForFund(comptrollerProxy)).not.toEqual(
      expect.arrayContaining([mockPostBuySharesPolicy.address]),
    );

    // Enable the mockPostBuySharesPolicy
    const policySettings = utils.randomBytes(10);
    const receipt = await policyManager
      .connect(fundOwner)
      .enablePolicyForFund(comptrollerProxy, mockPostBuySharesPolicy, policySettings);

    // Assert that the policy is enabled for the fund
    for (const hook of await mockPostBuySharesPolicy.implementedHooks()) {
      expect(await policyManager.policyIsEnabledOnHookForFund(comptrollerProxy, hook, mockPostBuySharesPolicy)).toBe(
        true,
      );
    }
    expect(await policyManager.getEnabledPoliciesForFund(comptrollerProxy)).toEqual(
      expect.arrayContaining([mockPostBuySharesPolicy.address]),
    );

    // Assert that the proper event has been emitted
    const enablePolicyEvent = policyManager.abi.getEvent('PolicyEnabledForFund');
    assertEvent(receipt, enablePolicyEvent, {
      comptrollerProxy,
      policy: mockPostBuySharesPolicy,
      settingsData: utils.hexlify(policySettings),
    });
  });

  it('Policy with no settings: adds the policy and emits an event, does NOT call `addFundSettings()` on fee but DOES call `activateForFund`', async () => {
    const {
      deployment: { fundDeployer, policyManager },
      policies: { mockPostBuySharesPolicy },
      fundOwner,
      denominationAsset,
    } = await provider.snapshot(snapshot);

    // Create fund without policy config
    const { comptrollerProxy } = await createNewFund({
      signer: fundOwner,
      fundOwner,
      fundDeployer,
      denominationAsset,
    });

    // Add the policy with addFundSettings
    const receipt = await policyManager
      .connect(fundOwner)
      .enablePolicyForFund(comptrollerProxy, mockPostBuySharesPolicy, '0x');

    // Check that the policy has been added
    for (const hook of await mockPostBuySharesPolicy.implementedHooks()) {
      expect(await policyManager.policyIsEnabledOnHookForFund(comptrollerProxy, hook, mockPostBuySharesPolicy)).toBe(
        true,
      );
    }
    expect(await policyManager.getEnabledPoliciesForFund(comptrollerProxy)).toEqual(
      expect.arrayContaining([mockPostBuySharesPolicy.address]),
    );

    // Assert that the event has been emitted
    const policyEnabledForFundEvent = policyManager.abi.getEvent('PolicyEnabledForFund');
    assertEvent(receipt, policyEnabledForFundEvent);

    // Assert that addFundSettings() has NOT been called
    expect(mockPostBuySharesPolicy.addFundSettings).not.toHaveBeenCalledOnContract();
  });
});

describe('setConfigForFund', () => {
  it('does not allow unequal policies and settingsData array lengths', async () => {
    const {
      deployment: { policyManager },
      policies: { mockPostBuySharesPolicy },
    } = await provider.snapshot(snapshot);

    const policies = [mockPostBuySharesPolicy];
    const policiesSettings = [utils.randomBytes(10), utils.randomBytes(12), utils.randomBytes(20)];
    const policyManagerConfig = policyManagerConfigArgs({ policies, settings: policiesSettings });

    const setConfigForFundCall = policyManager.setConfigForFund(policyManagerConfig);

    await expect(setConfigForFundCall).rejects.toBeRevertedWith('policies and settingsData array lengths unequal');
  });

  it('does not allow an already enabled policy', async () => {
    const {
      deployment: { policyManager },
      policies: { mockPostBuySharesPolicy },
    } = await provider.snapshot(snapshot);

    // Create config for mockPostBuySharesPolicy
    const policies = [mockPostBuySharesPolicy];
    const policiesSettings = [utils.randomBytes(10)];
    const policyManagerConfig = policyManagerConfigArgs({ policies, settings: policiesSettings });

    // Call the setConfigForFund with initial config
    await policyManager.setConfigForFund(policyManagerConfig);

    // Create new config with an already enabled policy
    const newPoliciesSettings = [utils.randomBytes(20)];
    const newPolicyManagerConfig = policyManagerConfigArgs({ policies, settings: newPoliciesSettings });

    // Call the setConfigForFund with this new config
    const newSetConfigForFundCall = policyManager.setConfigForFund(newPolicyManagerConfig);
    await expect(newSetConfigForFundCall).rejects.toBeRevertedWith('Policy is already enabled');
  });

  it('does not allow unregistered policies', async () => {
    const {
      deployment: { fundDeployer, policyManager },
      policies: { mockPostBuySharesPolicy },
      fundOwner,
      denominationAsset,
      policyManagerConfig,
    } = await provider.snapshot(snapshot);

    await createNewFund({
      signer: fundOwner,
      fundOwner,
      fundDeployer,
      denominationAsset,
      policyManagerConfig,
    });

    // De-register mockPostBuySharesPolicy
    await policyManager.deregisterPolicies([mockPostBuySharesPolicy]);

    // Create config for mockPostBuySharesPolicy
    const policies = [mockPostBuySharesPolicy];
    const policiesSettings = [utils.randomBytes(10)];
    const newPolicyManagerConfig = policyManagerConfigArgs({ policies, settings: policiesSettings });

    // Call the setConfigForFund with this new config
    const callSetConfigForFund = policyManager.setConfigForFund(newPolicyManagerConfig);
    await expect(callSetConfigForFund).rejects.toBeRevertedWith('Policy is not registered');
  });

  it('adds specified policies, calls `addFundSettings` on each with the correct params, and emits an event for each', async () => {
    const {
      deployment: { fundDeployer, policyManager },
      fundOwner,
      denominationAsset,
      orderedPolicies,
      policiesSettingsData,
      policyManagerConfig,
    } = await provider.snapshot(snapshot);

    const { comptrollerProxy, receipt } = await createNewFund({
      signer: fundOwner,
      fundOwner,
      fundDeployer,
      denominationAsset,
      policyManagerConfig,
    });

    // Assert state for fund
    for (const policy of orderedPolicies) {
      for (const hook of await policy.implementedHooks()) {
        expect(await policyManager.policyIsEnabledOnHookForFund(comptrollerProxy, hook, policy)).toBe(true);
      }
    }

    // Assert addFundSettings was called on each policy with its settingsData,
    // only if settingsData was passed
    for (const key in orderedPolicies) {
      if (policiesSettingsData[key] === '0x') {
        expect(orderedPolicies[key].addFundSettings).not.toHaveBeenCalledOnContract();
      } else {
        expect(orderedPolicies[key].addFundSettings).toHaveBeenCalledOnContractWith(
          comptrollerProxy,
          policiesSettingsData[key],
        );
      }
    }

    // Assert PolicyEnabledForFund events
    const policyEnabledForFundEvent = policyManager.abi.getEvent('PolicyEnabledForFund');

    const events = extractEvent(receipt, policyEnabledForFundEvent);
    expect(events.length).toBe(orderedPolicies.length);
    for (let i = 0; i < orderedPolicies.length; i++) {
      expect(events[i]).toMatchEventArgs({
        comptrollerProxy: comptrollerProxy.address,
        policy: orderedPolicies[i].address,
        settingsData: utils.hexlify(policiesSettingsData[i]),
      });
    }
  });

  it('Policy with no settings: adds the policy and emits an event, does NOT call `addFundSettings()`', async () => {
    const {
      deployment: { fundDeployer, policyManager },
      policies: { mockPostBuySharesPolicy },
      fundOwner,
      denominationAsset,
    } = await provider.snapshot(snapshot);

    // Create config with empty settings for mockPostBuySharesPolicy
    const policies = [mockPostBuySharesPolicy];
    const policiesSettings = ['0x'];
    const policyManagerConfig = policyManagerConfigArgs({ policies, settings: policiesSettings });

    const { comptrollerProxy, receipt } = await createNewFund({
      signer: fundOwner,
      fundOwner,
      fundDeployer,
      denominationAsset,
      policyManagerConfig,
    });

    // Check that the policy has been added
    for (const hook of await mockPostBuySharesPolicy.implementedHooks()) {
      expect(await policyManager.policyIsEnabledOnHookForFund(comptrollerProxy, hook, mockPostBuySharesPolicy)).toBe(
        true,
      );
    }

    // Assert that the event has been emitted
    const policyEnabledForFundEvent = policyManager.abi.getEvent('PolicyEnabledForFund');
    assertEvent(receipt, policyEnabledForFundEvent);

    // Assert that addFundSettings() has NOT been called
    expect(mockPostBuySharesPolicy.addFundSettings).not.toHaveBeenCalledOnContract();
  });
});

describe('updatePolicySettingsForFund', () => {
  it('does not allow a caller other than the fund owner', async () => {
    const {
      accounts: [randomAccount],
      deployment: { fundDeployer, policyManager },
      policies: { mockPostBuySharesPolicy },
      fundOwner,
      denominationAsset,
      policyManagerConfig,
    } = await provider.snapshot(snapshot);

    const { comptrollerProxy } = await createNewFund({
      signer: fundOwner,
      fundOwner,
      fundDeployer,
      denominationAsset,
      policyManagerConfig,
    });

    // Update the mockPostBuySharesPolicy with new setting with non-fundOwner account
    const updatePolicyCall = policyManager
      .connect(randomAccount)
      .updatePolicySettingsForFund(comptrollerProxy, mockPostBuySharesPolicy, utils.randomBytes(10));

    await expect(updatePolicyCall).rejects.toBeRevertedWith('Only the fund owner can call this function');
  });

  it('calls `updateFundSettings` on the policy with the correct params', async () => {
    const {
      deployment: { fundDeployer, policyManager },
      policies: { mockPostBuySharesPolicy },
      fundOwner,
      denominationAsset,
      policyManagerConfig,
    } = await provider.snapshot(snapshot);

    const { comptrollerProxy } = await createNewFund({
      signer: fundOwner,
      fundOwner,
      fundDeployer,
      denominationAsset,
      policyManagerConfig,
    });

    const policySettings = utils.randomBytes(10);
    // Update the mockPostBuySharesPolicy with new setting
    await policyManager
      .connect(fundOwner)
      .updatePolicySettingsForFund(comptrollerProxy, mockPostBuySharesPolicy, policySettings);

    // Check that updatePolicySettingsForFund has been called with the arguments above
    expect(policyManager.updatePolicySettingsForFund).toHaveBeenCalledOnContractWith(
      comptrollerProxy,
      mockPostBuySharesPolicy,
      policySettings,
    );
  });
});

describe('validatePolicies', () => {
  // Data passed to individual hooks are validated in the tests of their invoking functions

  it('correctly handles a PolicyHook', async () => {
    const {
      policies: { mockAddTrackedAssetsPolicy, mockPostBuySharesPolicy, mockPostCoIPolicy },
      deployment: { fundDeployer, integrationManager },
      fundOwner,
      denominationAsset,
      policyManagerConfig,
      config: {
        primitives: { dai, mln },
      },
    } = await provider.snapshot(snapshot);

    const { comptrollerProxy } = await createNewFund({
      signer: fundOwner,
      fundOwner,
      fundDeployer,
      denominationAsset,
      policyManagerConfig,
    });

    const assetsToAdd = [dai, mln];

    await addTrackedAssetsToVault({
      signer: fundOwner,
      comptrollerProxy,
      integrationManager,
      assets: assetsToAdd,
    });

    const ruleArgs = validateRuleAddTrackedAssetsArgs({
      assets: assetsToAdd,
    });
    expect(mockAddTrackedAssetsPolicy.validateRule).toHaveBeenCalledOnContractWith(
      comptrollerProxy,
      PolicyHook.AddTrackedAssets,
      ruleArgs,
    );

    // Assert validateRule not called on other policies
    expect(mockPostBuySharesPolicy.validateRule).not.toHaveBeenCalledOnContract();
    expect(mockPostCoIPolicy.validateRule).not.toHaveBeenCalledOnContract();
  });

  it('reverts if return value is false', async () => {
    const {
      mockGenericAdapter,
      deployment: { fundDeployer, integrationManager },
      policies: { mockPostCoIPolicy },
      fundOwner,
      denominationAsset,
      policyManagerConfig,
    } = await provider.snapshot(snapshot);

    const { comptrollerProxy, vaultProxy } = await createNewFund({
      signer: fundOwner,
      fundOwner,
      fundDeployer,
      denominationAsset,
      policyManagerConfig,
    });

    // Set policy to return validateRule as false
    await mockPostCoIPolicy.validateRule.returns(false);

    await expect(
      mockGenericSwap({
        comptrollerProxy,
        vaultProxy,
        integrationManager,
        fundOwner,
        mockGenericAdapter,
      }),
    ).rejects.toBeRevertedWith('Rule evaluated to false');
  });
});

describe('policy registry', () => {
  describe('deregisterPolicies', () => {
    it('can only be called by the owner of the FundDeployer contract', async () => {
      const {
        accounts: [, randomUser],
        deployment: { policyManager },
        policies: { mockPostBuySharesPolicy },
      } = await provider.snapshot(snapshot);

      // Attempt to call deregisterPolicies with a random (non-owner) account
      const deregisterPoliciesCall = policyManager.connect(randomUser).deregisterPolicies([mockPostBuySharesPolicy]);
      await expect(deregisterPoliciesCall).rejects.toBeRevertedWith(
        'Only the FundDeployer owner can call this function',
      );
    });

    it('does not allow empty _policies param', async () => {
      const {
        deployment: { policyManager },
      } = await provider.snapshot(snapshot);

      // Attempt to call deregisterPolicies with an empty _policies param
      const deregisterPoliciesCall = policyManager.deregisterPolicies([]);
      await expect(deregisterPoliciesCall).rejects.toBeRevertedWith('_policies cannot be empty');
    });

    it('does not allow an unregistered policy', async () => {
      const {
        deployment: { policyManager },
        policies: { mockPostBuySharesPolicy },
      } = await provider.snapshot(snapshot);

      // De-register mockPostBuySharesPolicy
      await policyManager.deregisterPolicies([mockPostBuySharesPolicy]);

      // Confirm that mockPostBuySharesPolicy is deregistered
      const isMockPostBuySharesPolicyRegistered = await policyManager.policyIsRegistered(mockPostBuySharesPolicy);
      expect(isMockPostBuySharesPolicyRegistered).toBe(false);

      // Attempt to de-register mockPostBuySharesPolicy again
      const deregisterPoliciesCall = policyManager.deregisterPolicies([mockPostBuySharesPolicy]);
      await expect(deregisterPoliciesCall).rejects.toBeRevertedWith('policy is not registered');
    });

    it('successfully de-registers multiple policies and emits one event per policy', async () => {
      const {
        deployment: { policyManager },
        policies: { mockPostBuySharesPolicy, mockPostCoIPolicy },
      } = await provider.snapshot(snapshot);

      // De-register multiple policies
      const policies = [mockPostBuySharesPolicy, mockPostCoIPolicy];
      const receipt = await policyManager.deregisterPolicies(policies);

      const policyDeRegisteredEvent = policyManager.abi.getEvent('PolicyDeregistered');

      // One policyDeRegisteredEvent should have been emitted for each element in policyArray
      const events = extractEvent(receipt, policyDeRegisteredEvent);
      expect(events.length).toBe(policies.length);

      for (let i = 0; i < policies.length; i++) {
        // Make sure that each event contains the corresponding policy address
        expect(events[i].args[0]).toBe(policies[i].address);
      }
    });
  });

  describe('registerPolicies', () => {
    it('can only be called by the owner of the FundDeployer contract', async () => {
      const {
        deployer,
        accounts: [randomAccount],
        deployment: { policyManager },
      } = await provider.snapshot(snapshot);

      const mockPolicy = await IPolicy.mock(deployer);

      // Attempt to register the policy with a non-owner account
      const registerPoliciesCall = policyManager.connect(randomAccount).registerPolicies([mockPolicy]);
      await expect(registerPoliciesCall).rejects.toBeRevertedWith('Only the FundDeployer owner can call this function');
    });

    it('does not allow empty _policies param', async () => {
      const {
        deployment: { policyManager },
      } = await provider.snapshot(snapshot);

      // Attempt to call deregisterPolicies with an empty _policies param
      const registerPoliciesCall = policyManager.registerPolicies([]);
      await expect(registerPoliciesCall).rejects.toBeRevertedWith('_policies cannot be empty');
    });

    it('does not allow an already registered policy', async () => {
      const {
        policies: { mockPostBuySharesPolicy },
        deployment: { policyManager },
      } = await provider.snapshot(snapshot);

      // Confirm that policy is already registered
      expect(await policyManager.policyIsRegistered(mockPostBuySharesPolicy)).toBe(true);

      // Attempt to re-register policy
      const registerPoliciesCall = policyManager.registerPolicies([mockPostBuySharesPolicy]);
      await expect(registerPoliciesCall).rejects.toBeRevertedWith('policy already registered');
    });

    it('successfully registers a policy and emits the correct event', async () => {
      const {
        deployer,
        deployment: { policyManager },
      } = await provider.snapshot(snapshot);

      // Setup a mock policy
      const identifier = `MOCK_POLICY`;
      const mockPolicy = await IPolicy.mock(deployer);
      await mockPolicy.identifier.returns(identifier);

      const receipt = await policyManager.registerPolicies([mockPolicy]);

      // Assert event
      assertEvent(receipt, 'PolicyRegistered', {
        policy: mockPolicy,
        // TODO: Improve param matching to automatically derive the sighash for indexed event args.
        identifier: expect.objectContaining({
          hash: utils.id(identifier),
        }),
      });

      // Policies should be registered
      const registeredPolicies = await policyManager.getRegisteredPolicies();
      expect(registeredPolicies).toMatchFunctionOutput(
        policyManager.getRegisteredPolicies,
        expect.arrayContaining([mockPolicy.address]),
      );
    });
  });
});
