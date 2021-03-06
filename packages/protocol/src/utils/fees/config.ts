import type { AddressLike } from '@enzymefinance/ethers';
import type { BytesLike } from 'ethers';

import { encodeArgs } from '../encoding';

export function feeManagerConfigArgs({ fees, settings }: { fees: AddressLike[]; settings: BytesLike[] }) {
  return encodeArgs(['address[]', 'bytes[]'], [fees, settings]);
}

export function payoutSharesOutstandingForFeesArgs(fees: AddressLike[]) {
  return encodeArgs(['address[]'], [fees]);
}
