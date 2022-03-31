/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

// prettier-ignore
export interface IExtension extends Contract<IExtension> {
  activateForFund: Send<(_isMigration: boolean) => void, IExtension>
  deactivateForFund: Send<() => void, IExtension>
  receiveCallFromComptroller: Send<(_caller: AddressLike, _actionId: BigNumberish, _callArgs: BytesLike) => void, IExtension>
  setConfigForFund: Send<(_comptrollerProxy: AddressLike, _vaultProxy: AddressLike, _configData: BytesLike) => void, IExtension>
}

let IExtensionBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  IExtensionBytecode = '0x';
}

// prettier-ignore
export const IExtension = contract<IExtension>(IExtensionBytecode)`
  function activateForFund(bool _isMigration)
  function deactivateForFund()
  function receiveCallFromComptroller(address _caller, uint256 _actionId, bytes _callArgs)
  function setConfigForFund(address _comptrollerProxy, address _vaultProxy, bytes _configData)
`;
