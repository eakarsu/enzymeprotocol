/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

// prettier-ignore
export interface IExternalPositionParser extends Contract<IExternalPositionParser> {
  parseAssetsForAction: Send<(_externalPosition: AddressLike, _actionId: BigNumberish, _encodedActionArgs: BytesLike) => { assetsToTransfer_: string[], amountsToTransfer_: BigNumber[], assetsToReceive_: string[] }, IExternalPositionParser>
  parseInitArgs: Send<(_vaultProxy: AddressLike, _initializationData: BytesLike) => string, IExternalPositionParser>
}

let IExternalPositionParserBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  IExternalPositionParserBytecode = '0x';
}

// prettier-ignore
export const IExternalPositionParser = contract<IExternalPositionParser>(IExternalPositionParserBytecode)`
  function parseAssetsForAction(address _externalPosition, uint256 _actionId, bytes _encodedActionArgs) returns (address[] assetsToTransfer_, uint256[] amountsToTransfer_, address[] assetsToReceive_)
  function parseInitArgs(address _vaultProxy, bytes _initializationData) returns (bytes initArgs_)
`;
