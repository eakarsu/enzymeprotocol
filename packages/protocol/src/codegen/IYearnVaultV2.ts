/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

// prettier-ignore
export interface IYearnVaultV2 extends Contract<IYearnVaultV2> {
  availableDepositLimit: Call<() => BigNumber, IYearnVaultV2>
  deposit: Send<(arg0: BigNumberish, arg1: AddressLike) => BigNumber, IYearnVaultV2>
  emergencyShutdown: Call<() => boolean, IYearnVaultV2>
  pricePerShare: Call<() => BigNumber, IYearnVaultV2>
  setDepositLimit: Send<(arg0: BigNumberish) => void, IYearnVaultV2>
  setEmergencyShutdown: Send<(arg0: boolean) => void, IYearnVaultV2>
  token: Call<() => string, IYearnVaultV2>
  totalAssets: Call<() => BigNumber, IYearnVaultV2>
  withdraw: Send<(arg0: BigNumberish, arg1: AddressLike, arg2: BigNumberish) => BigNumber, IYearnVaultV2>
}

let IYearnVaultV2Bytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  IYearnVaultV2Bytecode = '0x';
}

// prettier-ignore
export const IYearnVaultV2 = contract<IYearnVaultV2>(IYearnVaultV2Bytecode)`
  function availableDepositLimit() view returns (uint256)
  function deposit(uint256, address) returns (uint256)
  function emergencyShutdown() view returns (bool)
  function pricePerShare() view returns (uint256)
  function setDepositLimit(uint256)
  function setEmergencyShutdown(bool)
  function token() view returns (address)
  function totalAssets() view returns (uint256)
  function withdraw(uint256, address, uint256) returns (uint256)
`;
