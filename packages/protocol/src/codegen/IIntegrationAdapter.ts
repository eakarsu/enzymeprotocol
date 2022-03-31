/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

// prettier-ignore
export interface IIntegrationAdapter extends Contract<IIntegrationAdapter> {
  parseAssetsForAction: Call<(_vaultProxy: AddressLike, _selector: BytesLike, _encodedCallArgs: BytesLike) => { spendAssetsHandleType_: BigNumber, spendAssets_: string[], spendAssetAmounts_: BigNumber[], incomingAssets_: string[], minIncomingAssetAmounts_: BigNumber[] }, IIntegrationAdapter>
}

let IIntegrationAdapterBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  IIntegrationAdapterBytecode = '0x';
}

// prettier-ignore
export const IIntegrationAdapter = contract<IIntegrationAdapter>(IIntegrationAdapterBytecode)`
  function parseAssetsForAction(address _vaultProxy, bytes4 _selector, bytes _encodedCallArgs) view returns (uint8 spendAssetsHandleType_, address[] spendAssets_, uint256[] spendAssetAmounts_, address[] incomingAssets_, uint256[] minIncomingAssetAmounts_)
`;
