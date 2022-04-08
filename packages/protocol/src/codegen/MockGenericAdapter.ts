/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

export type MockGenericAdapterArgs = [_integratee: AddressLike];

// prettier-ignore
export interface MockGenericAdapter extends Contract<MockGenericAdapter> {
  CLAIM_REWARDS_SELECTOR: Call<() => string, MockGenericAdapter>
  INTEGRATEE: Call<() => string, MockGenericAdapter>
  LEND_AND_STAKE_SELECTOR: Call<() => string, MockGenericAdapter>
  LEND_SELECTOR: Call<() => string, MockGenericAdapter>
  REDEEM_SELECTOR: Call<() => string, MockGenericAdapter>
  STAKE_SELECTOR: Call<() => string, MockGenericAdapter>
  TAKE_ORDER_SELECTOR: Call<() => string, MockGenericAdapter>
  UNSTAKE_AND_REDEEM_SELECTOR: Call<() => string, MockGenericAdapter>
  UNSTAKE_SELECTOR: Call<() => string, MockGenericAdapter>
  getIntegrationManager: Call<() => string, MockGenericAdapter>
  parseAssetsForAction: Call<(arg0: AddressLike, _selector: BytesLike, _callArgs: BytesLike) => { spendAssetsHandleType_: BigNumber, spendAssets_: string[], maxSpendAssetAmounts_: BigNumber[], incomingAssets_: string[], minIncomingAssetAmounts_: BigNumber[] }, MockGenericAdapter>
  removeOnly: Send<(arg0: AddressLike, arg1: BytesLike, arg2: BytesLike) => void, MockGenericAdapter>
  swapA: Send<(_vaultProxy: AddressLike, _callArgs: BytesLike, _assetTransferArgs: BytesLike) => void, MockGenericAdapter>
  swapB: Send<(_vaultProxy: AddressLike, _callArgs: BytesLike, _assetTransferArgs: BytesLike) => void, MockGenericAdapter>
  swapDirectFromVault: Send<(_vaultProxy: AddressLike, _callArgs: BytesLike, arg2: BytesLike) => void, MockGenericAdapter>
  swapViaApproval: Send<(_vaultProxy: AddressLike, _callArgs: BytesLike, _assetTransferArgs: BytesLike) => void, MockGenericAdapter>
}

let MockGenericAdapterBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  MockGenericAdapterBytecode =
    '0x60c060405234801561001057600080fd5b50604051611c97380380611c978339818101604052602081101561003357600080fd5b505160006080819052606082901b6001600160601b03191660a052906001600160a01b0316611c146100838339806107a95280610b5852806113c65280611430525080610ce15250611c146000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063740f285211610097578063cadd965d11610066578063cadd965d146105ac578063e7c456901461067a578063f7d882b514610682578063fb5051071461068a57610100565b8063740f2852146103b6578063863e5ad0146103da578063b23228cf146103e2578063c54efee5146103ea57610100565b8063360bbf05116100d3578063360bbf051461020a5780633ffc1591146102d857806340da225d146102e057806362231430146102e857610100565b80630377b2d014610105578063080456c1146101d5578063131461c0146101fa578063257cb1a314610202575b600080fd5b6101d36004803603606081101561011b57600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561014557600080fd5b82018360208201111561015757600080fd5b803590602001918460018302840111600160201b8311171561017857600080fd5b919390929091602081019035600160201b81111561019557600080fd5b8201836020820111156101a757600080fd5b803590602001918460018302840111600160201b831117156101c857600080fd5b509092509050610758565b005b6101dd610951565b604080516001600160e01b03199092168252519081900360200190f35b6101dd610975565b6101dd610999565b6101d36004803603606081101561022057600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561024a57600080fd5b82018360208201111561025c57600080fd5b803590602001918460018302840111600160201b8311171561027d57600080fd5b919390929091602081019035600160201b81111561029a57600080fd5b8201836020820111156102ac57600080fd5b803590602001918460018302840111600160201b831117156102cd57600080fd5b5090925090506109bd565b6101dd6109c4565b6101dd6109e8565b6101d3600480360360608110156102fe57600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561032857600080fd5b82018360208201111561033a57600080fd5b803590602001918460018302840111600160201b8311171561035b57600080fd5b919390929091602081019035600160201b81111561037857600080fd5b82018360208201111561038a57600080fd5b803590602001918460018302840111600160201b831117156103ab57600080fd5b509092509050610a0c565b6103be610b56565b604080516001600160a01b039092168252519081900360200190f35b6101dd610b7a565b6101dd610b9e565b6104776004803603606081101561040057600080fd5b6001600160a01b03823516916001600160e01b031960208201351691810190606081016040820135600160201b81111561043957600080fd5b82018360208201111561044b57600080fd5b803590602001918460018302840111600160201b8311171561046c57600080fd5b509092509050610bc2565b6040518086600281111561048757fe5b815260200180602001806020018060200180602001858103855289818151815260200191508051906020019060200280838360005b838110156104d45781810151838201526020016104bc565b50505050905001858103845288818151815260200191508051906020019060200280838360005b838110156105135781810151838201526020016104fb565b50505050905001858103835287818151815260200191508051906020019060200280838360005b8381101561055257818101518382015260200161053a565b50505050905001858103825286818151815260200191508051906020019060200280838360005b83811015610591578181015183820152602001610579565b50505050905001995050505050505050505060405180910390f35b6101d3600480360360608110156105c257600080fd5b6001600160a01b038235169190810190604081016020820135600160201b8111156105ec57600080fd5b8201836020820111156105fe57600080fd5b803590602001918460018302840111600160201b8311171561061f57600080fd5b919390929091602081019035600160201b81111561063c57600080fd5b82018360208201111561064e57600080fd5b803590602001918460018302840111600160201b8311171561066f57600080fd5b509092509050610c2e565b6103be610cdf565b6101dd610d03565b6101d3600480360360608110156106a057600080fd5b6001600160a01b038235169190810190604081016020820135600160201b8111156106ca57600080fd5b8201836020820111156106dc57600080fd5b803590602001918460018302840111600160201b831117156106fd57600080fd5b919390929091602081019035600160201b81111561071a57600080fd5b82018360208201111561072c57600080fd5b803590602001918460018302840111600160201b8311171561074d57600080fd5b509092509050610d27565b60608060608061079d88888080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610dd892505050565b955050945094505093507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166335671b2f8a868686866040518663ffffffff1660e01b815260040180866001600160a01b0316815260200180602001806020018060200180602001858103855289818151815260200191508051906020019060200280838360005b8381101561084557818101518382015260200161082d565b50505050905001858103845288818151815260200191508051906020019060200280838360005b8381101561088457818101518382015260200161086c565b50505050905001858103835287818151815260200191508051906020019060200280838360005b838110156108c35781810151838201526020016108ab565b50505050905001858103825286818151815260200191508051906020019060200280838360005b838110156109025781810151838201526020016108ea565b505050509050019950505050505050505050600060405180830381600087803b15801561092e57600080fd5b505af1158015610942573d6000803e3d6000fd5b50505050505050505050505050565b7f8334eb99be0145865eba9889fca2ee920288090caefff4cc776038e20ad9259a81565b7f29fa046e79524c3c5ac4c01df692c35e217802b2b13b21121b76cf0ef02b138c81565b7f099f75155f0e997bf83a7993a71d5e7e7540bd386fe1e84643a09ce6b412521981565b5050505050565b7ffa7dd04da627f433da73c4355ead9c75682a67a8fc84d3f6170ef0922f402d2481565b7fb9dfbaccbe5cd2a84fdcf1d15f23ef25d23086f5afbaa99516065ed4a5bbc7a381565b8482828080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610a6f92507f62231430458bd051b4b08f5320d5d1d44938c14a62d90c95311a2e227f85c7b491506111339050565b6060806060610a7d8561117f565b919450925090506001846002811115610a9257fe5b1415610af45760005b8351811015610af257610aea8730858481518110610ab557fe5b6020026020010151878581518110610ac957fe5b60200260200101516001600160a01b031661133c909392919063ffffffff16565b600101610a9b565b505b610b338a8a8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061139c92505050565b610b3d86826115c3565b50610b4886846115c3565b505050505050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f03e38a2bd7063d45c897edeafc330e71657502dd86434d3c37a489caf116af6981565b7f68e30677f607df46e87da13e15b637784cfa62374b653f35ab43d10361a2f83081565b6000606080606080610c0987878080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610dd892505050565b50939750919550909350909150610c21905088611133565b9450945094509450945094565b8482828080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610c9192507fcadd965d4251b3cf197bac2aaf1b2efaad0abada23065ae873fda39383fbebac91506111339050565b6060806060610c9f8561117f565b919450925090506001846002811115610cb457fe5b1415610af45760005b8351811015610af257610cd78730858481518110610ab557fe5b600101610cbd565b7f000000000000000000000000000000000000000000000000000000000000000090565b7fc29fa9dde84204c2908778afd0613d802d31cf046179b88f6d2b4a4e507ea2d581565b8482828080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610d8a92507ffb5051076bd418e114f533b0b78c638e754015d74936fe20ffdfe387b0f6995d91506111339050565b6060806060610d988561117f565b919450925090506001846002811115610dad57fe5b1415610af45760005b8351811015610af257610dd08730858481518110610ab557fe5b600101610db6565b6060806060806060808680602001905160c0811015610df657600080fd5b8101908080516040519392919084600160201b821115610e1557600080fd5b908301906020820185811115610e2a57600080fd5b82518660208202830111600160201b82111715610e4657600080fd5b82525081516020918201928201910280838360005b83811015610e73578181015183820152602001610e5b565b5050505090500160405260200180516040519392919084600160201b821115610e9b57600080fd5b908301906020820185811115610eb057600080fd5b82518660208202830111600160201b82111715610ecc57600080fd5b82525081516020918201928201910280838360005b83811015610ef9578181015183820152602001610ee1565b5050505090500160405260200180516040519392919084600160201b821115610f2157600080fd5b908301906020820185811115610f3657600080fd5b82518660208202830111600160201b82111715610f5257600080fd5b82525081516020918201928201910280838360005b83811015610f7f578181015183820152602001610f67565b5050505090500160405260200180516040519392919084600160201b821115610fa757600080fd5b908301906020820185811115610fbc57600080fd5b82518660208202830111600160201b82111715610fd857600080fd5b82525081516020918201928201910280838360005b83811015611005578181015183820152602001610fed565b5050505090500160405260200180516040519392919084600160201b82111561102d57600080fd5b90830190602082018581111561104257600080fd5b82518660208202830111600160201b8211171561105e57600080fd5b82525081516020918201928201910280838360005b8381101561108b578181015183820152602001611073565b5050505090500160405260200180516040519392919084600160201b8211156110b357600080fd5b9083019060208201858111156110c857600080fd5b82518660208202830111600160201b821117156110e457600080fd5b82525081516020918201928201910280838360005b838110156111115781810151838201526020016110f9565b5050505090500160405250505095509550955095509550955091939550919395565b60006001600160e01b0319821662377b2d60e41b14156111555750600061117a565b6001600160e01b0319821663fb50510760e01b14156111765750600161117a565b5060025b919050565b606080606083806020019051606081101561119957600080fd5b8101908080516040519392919084600160201b8211156111b857600080fd5b9083019060208201858111156111cd57600080fd5b82518660208202830111600160201b821117156111e957600080fd5b82525081516020918201928201910280838360005b838110156112165781810151838201526020016111fe565b5050505090500160405260200180516040519392919084600160201b82111561123e57600080fd5b90830190602082018581111561125357600080fd5b82518660208202830111600160201b8211171561126f57600080fd5b82525081516020918201928201910280838360005b8381101561129c578181015183820152602001611284565b5050505090500160405260200180516040519392919084600160201b8211156112c457600080fd5b9083019060208201858111156112d957600080fd5b82518660208202830111600160201b821117156112f557600080fd5b82525081516020918201928201910280838360005b8381101561132257818101518382015260200161130a565b505050509050016040525050509250925092509193909250565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b17905261139690859061171e565b50505050565b6060806060806113ab85610dd8565b9550509450945050935060005b845181101561142d576114257f00000000000000000000000000000000000000000000000000000000000000008583815181106113f157fe5b602002602001015187848151811061140557fe5b60200260200101516001600160a01b03166117d49092919063ffffffff16565b6001016113b8565b507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316633005d9d0858585856040518563ffffffff1660e01b81526004018080602001806020018060200180602001858103855289818151815260200191508051906020019060200280838360005b838110156114bc5781810151838201526020016114a4565b50505050905001858103845288818151815260200191508051906020019060200280838360005b838110156114fb5781810151838201526020016114e3565b50505050905001858103835287818151815260200191508051906020019060200280838360005b8381101561153a578181015183820152602001611522565b50505050905001858103825286818151815260200191508051906020019060200280838360005b83811015611579578181015183820152602001611561565b5050505090500198505050505050505050600060405180830381600087803b1580156115a457600080fd5b505af11580156115b8573d6000803e3d6000fd5b505050505050505050565b6060815167ffffffffffffffff811180156115dd57600080fd5b50604051908082528060200260200182016040528015611607578160200160208202803683370190505b50905060005b825181101561171757600083828151811061162457fe5b60200260200101519050806001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561167b57600080fd5b505afa15801561168f573d6000803e3d6000fd5b505050506040513d60208110156116a557600080fd5b505183518490849081106116b557fe5b60200260200101818152505060008383815181106116cf57fe5b6020026020010151111561170e5761170e858484815181106116ed57fe5b6020026020010151836001600160a01b03166118e79092919063ffffffff16565b5060010161160d565b5092915050565b6060611773826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166119399092919063ffffffff16565b8051909150156117cf5780806020019051602081101561179257600080fd5b50516117cf5760405162461bcd60e51b815260040180806020018281038252602a815260200180611b7f602a913960400191505060405180910390fd5b505050565b80158061185a575060408051636eb1769f60e11b81523060048201526001600160a01b03848116602483015291519185169163dd62ed3e91604480820192602092909190829003018186803b15801561182c57600080fd5b505afa158015611840573d6000803e3d6000fd5b505050506040513d602081101561185657600080fd5b5051155b6118955760405162461bcd60e51b8152600401808060200182810382526036815260200180611ba96036913960400191505060405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526117cf90849061171e565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526117cf90849061171e565b60606119488484600085611952565b90505b9392505050565b6060824710156119935760405162461bcd60e51b8152600401808060200182810382526026815260200180611b596026913960400191505060405180910390fd5b61199c85611aae565b6119ed576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b60208310611a2c5780518252601f199092019160209182019101611a0d565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611a8e576040519150601f19603f3d011682016040523d82523d6000602084013e611a93565b606091505b5091509150611aa3828286611ab4565b979650505050505050565b3b151590565b60608315611ac357508161194b565b825115611ad35782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611b1d578181015183820152602001611b05565b50505050905090810190601f168015611b4a5780820380516001836020036101000a031916815260200191505b509250505060405180910390fdfe416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c5361666545524332303a204552433230206f7065726174696f6e20646964206e6f7420737563636565645361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f20746f206e6f6e2d7a65726f20616c6c6f77616e6365a2646970667358221220ff8f52e6f9267425ed1550ec6716712942382f4344424a0fc4a083271862e3a764736f6c634300060c0033';
}

// prettier-ignore
export const MockGenericAdapter = contract<MockGenericAdapter, MockGenericAdapterArgs>(MockGenericAdapterBytecode)`
  constructor(address _integratee)
  function CLAIM_REWARDS_SELECTOR() view returns (bytes4)
  function INTEGRATEE() view returns (address)
  function LEND_AND_STAKE_SELECTOR() view returns (bytes4)
  function LEND_SELECTOR() view returns (bytes4)
  function REDEEM_SELECTOR() view returns (bytes4)
  function STAKE_SELECTOR() view returns (bytes4)
  function TAKE_ORDER_SELECTOR() view returns (bytes4)
  function UNSTAKE_AND_REDEEM_SELECTOR() view returns (bytes4)
  function UNSTAKE_SELECTOR() view returns (bytes4)
  function getIntegrationManager() view returns (address integrationManager_)
  function parseAssetsForAction(address, bytes4 _selector, bytes _callArgs) view returns (uint8 spendAssetsHandleType_, address[] spendAssets_, uint256[] maxSpendAssetAmounts_, address[] incomingAssets_, uint256[] minIncomingAssetAmounts_)
  function removeOnly(address, bytes, bytes)
  function swapA(address _vaultProxy, bytes _callArgs, bytes _assetTransferArgs)
  function swapB(address _vaultProxy, bytes _callArgs, bytes _assetTransferArgs)
  function swapDirectFromVault(address _vaultProxy, bytes _callArgs, bytes)
  function swapViaApproval(address _vaultProxy, bytes _callArgs, bytes _assetTransferArgs)
`;