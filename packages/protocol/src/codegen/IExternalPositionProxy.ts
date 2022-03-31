/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

// prettier-ignore
export interface IExternalPositionProxy extends Contract<IExternalPositionProxy> {
  getExternalPositionType: Call<() => BigNumber, IExternalPositionProxy>
  getVaultProxy: Call<() => string, IExternalPositionProxy>
}

let IExternalPositionProxyBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  IExternalPositionProxyBytecode = '0x';
}

// prettier-ignore
export const IExternalPositionProxy = contract<IExternalPositionProxy>(IExternalPositionProxyBytecode)`
  function getExternalPositionType() view returns (uint256)
  function getVaultProxy() view returns (address)
`;
