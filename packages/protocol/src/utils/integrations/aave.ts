import type { AddressLike } from '@enzymefinance/ethers';
import type { BigNumberish } from 'ethers';

import { encodeArgs } from '../encoding';

export function aaveLendArgs({ aToken, amount }: { aToken: AddressLike; amount: BigNumberish }) {
  return encodeArgs(['address', 'uint256'], [aToken, amount]);
}

export function aaveRedeemArgs({ aToken, amount }: { aToken: AddressLike; amount: BigNumberish }) {
  return encodeArgs(['address', 'uint256'], [aToken, amount]);
}
