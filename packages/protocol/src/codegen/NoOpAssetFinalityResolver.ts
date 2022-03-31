/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

// prettier-ignore
export interface NoOpAssetFinalityResolver extends Contract<NoOpAssetFinalityResolver> {
  finalizeAssets: Send<(_target: AddressLike, _assets: AddressLike[]) => void, NoOpAssetFinalityResolver>
}

let NoOpAssetFinalityResolverBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  NoOpAssetFinalityResolverBytecode =
    '0x608060405234801561001057600080fd5b50610116806100206000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80637620630514602d575b600080fd5b60da60048036036040811015604157600080fd5b6001600160a01b038235169190810190604081016020820135640100000000811115606b57600080fd5b820183602082011115607c57600080fd5b80359060200191846020830284011164010000000083111715609d57600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092955060dc945050505050565b005b505056fea264697066735822122030e89fa717b07b6fceab7d77a79fc1ede10e71adbf5fe6d70f56f455edc17a7b64736f6c634300060c0033';
}

// prettier-ignore
export const NoOpAssetFinalityResolver = contract<NoOpAssetFinalityResolver>(NoOpAssetFinalityResolverBytecode)`
  function finalizeAssets(address _target, address[] _assets)
`;
