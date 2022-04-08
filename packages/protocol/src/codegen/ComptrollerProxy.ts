/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

export type ComptrollerProxyArgs = [_constructData: BytesLike, _comptrollerLib: AddressLike];

// prettier-ignore
export interface ComptrollerProxy extends Contract<ComptrollerProxy> {
  // No external functions
}

let ComptrollerProxyBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  ComptrollerProxyBytecode =
    '0x60a060405234801561001057600080fd5b506040516103093803806103098339818101604052604081101561003357600080fd5b810190808051604051939291908464010000000082111561005357600080fd5b90830190602082018581111561006857600080fd5b825164010000000081118282018810171561008257600080fd5b82525081516020918201929091019080838360005b838110156100af578181015183820152602001610097565b50505050905090810190601f1680156100dc5780820380516001836020036101000a031916815260200191505b50604052602001805190602001909291905050508181806001600160a01b03166080816001600160a01b031660601b81525050807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5560006060826001600160a01b0316846040518082805190602001908083835b602083106101705780518252601f199092019160209182019101610151565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d80600081146101d0576040519150601f19603f3d011682016040523d82523d6000602084013e6101d5565b606091505b50915091508181906102655760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561022a578181015183820152602001610212565b50505050905090810190601f1680156102575780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5050505050505060805160601c6083610286600039806006525060836000f3fe60806040527f00000000000000000000000000000000000000000000000000000000000000003660008037600080366000846127105a03f43d806000803e818015604857816000f35b816000fdfea2646970667358221220af3fa506b4585d3105feda3d44f2fc3c9f0ebf4c6a5e5924e3a86b53bce8828564736f6c634300060c0033';
}

// prettier-ignore
export const ComptrollerProxy = contract<ComptrollerProxy, ComptrollerProxyArgs>(ComptrollerProxyBytecode)`
  constructor(bytes _constructData, address _comptrollerLib)
`;