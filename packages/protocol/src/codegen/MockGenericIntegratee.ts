/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

// prettier-ignore
export interface MockGenericIntegratee extends Contract<MockGenericIntegratee> {
  ETH_ADDRESS: Call<() => string, MockGenericIntegratee>
  swap: Send<(_assetsToIntegratee: AddressLike[], _assetsToIntegrateeAmounts: BigNumberish[], _assetsFromIntegratee: AddressLike[], _assetsFromIntegrateeAmounts: BigNumberish[]) => void, MockGenericIntegratee>
  swapOnBehalf: Send<(_trader: AddressLike, _assetsToIntegratee: AddressLike[], _assetsToIntegrateeAmounts: BigNumberish[], _assetsFromIntegratee: AddressLike[], _assetsFromIntegrateeAmounts: BigNumberish[]) => void, MockGenericIntegratee>
}

let MockGenericIntegrateeBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  MockGenericIntegrateeBytecode =
    '0x608060405234801561001057600080fd5b50610c45806100206000396000f3fe6080604052600436106100385760003560e01c80633005d9d01461004457806335671b2f146101a4578063a734f06e146103125761003f565b3661003f57005b600080fd5b6101a26004803603608081101561005a57600080fd5b810190602081018135600160201b81111561007457600080fd5b82018360208201111561008657600080fd5b803590602001918460208302840111600160201b831117156100a757600080fd5b919390929091602081019035600160201b8111156100c457600080fd5b8201836020820111156100d657600080fd5b803590602001918460208302840111600160201b831117156100f757600080fd5b919390929091602081019035600160201b81111561011457600080fd5b82018360208201111561012657600080fd5b803590602001918460208302840111600160201b8311171561014757600080fd5b919390929091602081019035600160201b81111561016457600080fd5b82018360208201111561017657600080fd5b803590602001918460208302840111600160201b8311171561019757600080fd5b509092509050610343565b005b6101a2600480360360a08110156101ba57600080fd5b6001600160a01b038235169190810190604081016020820135600160201b8111156101e457600080fd5b8201836020820111156101f657600080fd5b803590602001918460208302840111600160201b8311171561021757600080fd5b919390929091602081019035600160201b81111561023457600080fd5b82018360208201111561024657600080fd5b803590602001918460208302840111600160201b8311171561026757600080fd5b919390929091602081019035600160201b81111561028457600080fd5b82018360208201111561029657600080fd5b803590602001918460208302840111600160201b831117156102b757600080fd5b919390929091602081019035600160201b8111156102d457600080fd5b8201836020820111156102e657600080fd5b803590602001918460208302840111600160201b8311171561030757600080fd5b50909250905061041d565b34801561031e57600080fd5b506103276104f8565b604080516001600160a01b039092168252519081900360200190f35b6104133389898080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050604080516020808d0282810182019093528c82529093508c92508b91829185019084908082843760009201919091525050604080516020808c0282810182019093528b82529093508b92508a91829185019084908082843760009201919091525050604080516020808b0282810182019093528a82529093508a92508991829185019084908082843760009201919091525061051092505050565b5050505050505050565b6104ed8989898080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050604080516020808d0282810182019093528c82529093508c92508b91829185019084908082843760009201919091525050604080516020808c0282810182019093528b82529093508b92508a91829185019084908082843760009201919091525050604080516020808b0282810182019093528a82529093508a92508991829185019084908082843760009201919091525061051092505050565b505050505050505050565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b60005b845181101561062957600085828151811061052a57fe5b60200260200101519050600085838151811061054257fe5b6020026020010151905060006001600160a01b0316826001600160a01b0316141561059e5760405162461bcd60e51b815260040180806020018281038252602a815260200180610bbc602a913960400191505060405180910390fd5b600081116105dd5760405162461bcd60e51b8152600401808060200182810382526031815260200180610b2c6031913960400191505060405180910390fd5b6001600160a01b03821673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1415610609575050610621565b61061e6001600160a01b03831689308461077e565b50505b600101610513565b5060005b825181101561077657600083828151811061064457fe5b60200260200101519050600083838151811061065c57fe5b6020026020010151905060006001600160a01b0316826001600160a01b031614156106b85760405162461bcd60e51b815260040180806020018281038252602c815260200180610b5d602c913960400191505060405180910390fd5b600081116106f75760405162461bcd60e51b8152600401808060200182810382526033815260200180610b896033913960400191505060405180910390fd5b6001600160a01b03821673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1415610758576040516001600160a01b0389169082156108fc029083906000818181858888f19350505050158015610752573d6000803e3d6000fd5b5061076c565b61076c6001600160a01b03831689836107de565b505060010161062d565b505050505050565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b1790526107d8908590610835565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610830908490610835565b505050565b606061088a826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166108e69092919063ffffffff16565b805190915015610830578080602001905160208110156108a957600080fd5b50516108305760405162461bcd60e51b815260040180806020018281038252602a815260200180610be6602a913960400191505060405180910390fd5b60606108f584846000856108ff565b90505b9392505050565b6060824710156109405760405162461bcd60e51b8152600401808060200182810382526026815260200180610b066026913960400191505060405180910390fd5b61094985610a5b565b61099a576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106109d95780518252601f1990920191602091820191016109ba565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114610a3b576040519150601f19603f3d011682016040523d82523d6000602084013e610a40565b606091505b5091509150610a50828286610a61565b979650505050505050565b3b151590565b60608315610a705750816108f8565b825115610a805782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610aca578181015183820152602001610ab2565b50505050905090810190601f168015610af75780820380516001836020036101000a031916815260200191505b509250505060405180910390fdfe416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c5f5f737761703a20656d7074792076616c756520696e205f617373657473546f496e7465677261746565416d6f756e74735f5f737761703a20656d7074792076616c756520696e205f61737365747346726f6d496e74656772617465655f5f737761703a20656d7074792076616c756520696e205f61737365747346726f6d496e7465677261746565416d6f756e74735f5f737761703a20656d7074792076616c756520696e205f617373657473546f496e74656772617465655361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a264697066735822122099ddcd5f6ed66204e108dc47216581e961805bda763afa9522cc576fae16671d64736f6c634300060c0033';
}

// prettier-ignore
export const MockGenericIntegratee = contract<MockGenericIntegratee>(MockGenericIntegrateeBytecode)`
  function ETH_ADDRESS() view returns (address)
  function swap(address[] _assetsToIntegratee, uint256[] _assetsToIntegrateeAmounts, address[] _assetsFromIntegratee, uint256[] _assetsFromIntegrateeAmounts) payable
  function swapOnBehalf(address _trader, address[] _assetsToIntegratee, uint256[] _assetsToIntegrateeAmounts, address[] _assetsFromIntegratee, uint256[] _assetsFromIntegrateeAmounts) payable
`;
