/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

// prettier-ignore
export interface IFee extends Contract<IFee> {
  activateForFund: Send<(_comptrollerProxy: AddressLike, _vaultProxy: AddressLike) => void, IFee>
  addFundSettings: Send<(_comptrollerProxy: AddressLike, _settingsData: BytesLike) => void, IFee>
  getRecipientForFund: Call<(_comptrollerProxy: AddressLike) => string, IFee>
  payout: Send<(_comptrollerProxy: AddressLike, _vaultProxy: AddressLike) => boolean, IFee>
  settle: Send<(_comptrollerProxy: AddressLike, _vaultProxy: AddressLike, _hook: BigNumberish, _settlementData: BytesLike, _gav: BigNumberish) => { settlementType_: BigNumber, payer_: string, sharesDue_: BigNumber }, IFee>
  settlesOnHook: Call<(_hook: BigNumberish) => { settles_: boolean, usesGav_: boolean }, IFee>
  update: Send<(_comptrollerProxy: AddressLike, _vaultProxy: AddressLike, _hook: BigNumberish, _settlementData: BytesLike, _gav: BigNumberish) => void, IFee>
  updatesOnHook: Call<(_hook: BigNumberish) => { updates_: boolean, usesGav_: boolean }, IFee>
}

let IFeeBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  IFeeBytecode = '0x';
}

// prettier-ignore
export const IFee = contract<IFee>(IFeeBytecode)`
  function activateForFund(address _comptrollerProxy, address _vaultProxy)
  function addFundSettings(address _comptrollerProxy, bytes _settingsData)
  function getRecipientForFund(address _comptrollerProxy) view returns (address recipient_)
  function payout(address _comptrollerProxy, address _vaultProxy) returns (bool isPayable_)
  function settle(address _comptrollerProxy, address _vaultProxy, uint8 _hook, bytes _settlementData, uint256 _gav) returns (uint8 settlementType_, address payer_, uint256 sharesDue_)
  function settlesOnHook(uint8 _hook) view returns (bool settles_, bool usesGav_)
  function update(address _comptrollerProxy, address _vaultProxy, uint8 _hook, bytes _settlementData, uint256 _gav)
  function updatesOnHook(uint8 _hook) view returns (bool updates_, bool usesGav_)
`;
