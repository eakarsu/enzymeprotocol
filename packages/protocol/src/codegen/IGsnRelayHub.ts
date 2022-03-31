/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

// prettier-ignore
export interface IGsnRelayHub extends Contract<IGsnRelayHub> {
  balanceOf: Call<(target: AddressLike) => BigNumber, IGsnRelayHub>
  calculateCharge: Call<(gasUsed: BigNumberish, relayData: { gasPrice: BigNumberish, pctRelayFee: BigNumberish, baseRelayFee: BigNumberish, relayWorker: AddressLike, paymaster: AddressLike, forwarder: AddressLike, paymasterData: BytesLike, clientId: BigNumberish }) => BigNumber, IGsnRelayHub>
  depositFor: Send<(target: AddressLike) => void, IGsnRelayHub>
  relayCall: Send<(maxAcceptanceBudget: BigNumberish, relayRequest: { request: { from: AddressLike, to: AddressLike, value: BigNumberish, gas: BigNumberish, nonce: BigNumberish, data: BytesLike, validUntil: BigNumberish }, relayData: { gasPrice: BigNumberish, pctRelayFee: BigNumberish, baseRelayFee: BigNumberish, relayWorker: AddressLike, paymaster: AddressLike, forwarder: AddressLike, paymasterData: BytesLike, clientId: BigNumberish } }, signature: BytesLike, approvalData: BytesLike, externalGasLimit: BigNumberish) => { paymasterAccepted: boolean, returnValue: string }, IGsnRelayHub>
  withdraw: Send<(amount: BigNumberish, dest: AddressLike) => void, IGsnRelayHub>
}

let IGsnRelayHubBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  IGsnRelayHubBytecode = '0x';
}

// prettier-ignore
export const IGsnRelayHub = contract<IGsnRelayHub>(IGsnRelayHubBytecode)`
  function balanceOf(address target) view returns (uint256)
  function calculateCharge(uint256 gasUsed, tuple(uint256 gasPrice, uint256 pctRelayFee, uint256 baseRelayFee, address relayWorker, address paymaster, address forwarder, bytes paymasterData, uint256 clientId) relayData) view returns (uint256)
  function depositFor(address target) payable
  function relayCall(uint256 maxAcceptanceBudget, tuple(tuple(address from, address to, uint256 value, uint256 gas, uint256 nonce, bytes data, uint256 validUntil) request, tuple(uint256 gasPrice, uint256 pctRelayFee, uint256 baseRelayFee, address relayWorker, address paymaster, address forwarder, bytes paymasterData, uint256 clientId) relayData) relayRequest, bytes signature, bytes approvalData, uint256 externalGasLimit) returns (bool paymasterAccepted, bytes returnValue)
  function withdraw(uint256 amount, address dest)
`;
