/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

// prettier-ignore
export interface CompoundDebtPositionLibBase1 extends Contract<CompoundDebtPositionLibBase1> {
  // No external functions
}

let CompoundDebtPositionLibBase1Bytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  CompoundDebtPositionLibBase1Bytecode =
    '0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea26469706673582212205c153107d388b8cbe1783e9616c9261b03a52a1e8083ab6b4986b93276a74cbf64736f6c634300060c0033';
}

// prettier-ignore
export const CompoundDebtPositionLibBase1 = contract<CompoundDebtPositionLibBase1>(CompoundDebtPositionLibBase1Bytecode)`
  event AssetBorrowed(address indexed asset, uint256 amount)
  event BorrowedAssetRepaid(address indexed asset, uint256 amount)
  event CollateralAssetAdded(address indexed asset, uint256 amount)
  event CollateralAssetRemoved(address indexed asset, uint256 amount)
`;
