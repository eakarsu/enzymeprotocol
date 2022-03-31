/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

// prettier-ignore
export interface IChainlinkAggregator extends Contract<IChainlinkAggregator> {
  latestRoundData: Call<() => { '0': BigNumber, '1': BigNumber, '2': BigNumber, '3': BigNumber, '4': BigNumber }, IChainlinkAggregator>
}

let IChainlinkAggregatorBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  IChainlinkAggregatorBytecode = '0x';
}

// prettier-ignore
export const IChainlinkAggregator = contract<IChainlinkAggregator>(IChainlinkAggregatorBytecode)`
  function latestRoundData() view returns (uint80, int256, uint256, uint256, uint80)
`;
