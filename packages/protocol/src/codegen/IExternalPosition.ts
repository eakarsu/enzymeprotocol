/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

// prettier-ignore
export interface IExternalPosition extends Contract<IExternalPosition> {
  getDebtAssets: Send<() => { '0': string[], '1': BigNumber[] }, IExternalPosition>
  getManagedAssets: Send<() => { '0': string[], '1': BigNumber[] }, IExternalPosition>
  init: Send<(arg0: BytesLike) => void, IExternalPosition>
  receiveCallFromVault: Send<(arg0: BytesLike) => void, IExternalPosition>
}

let IExternalPositionBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  IExternalPositionBytecode = '0x';
}

// prettier-ignore
export const IExternalPosition = contract<IExternalPosition>(IExternalPositionBytecode)`
  function getDebtAssets() returns (address[], uint256[])
  function getManagedAssets() returns (address[], uint256[])
  function init(bytes)
  function receiveCallFromVault(bytes)
`;
