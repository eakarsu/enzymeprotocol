/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

export type ExternalPositionManagerArgs = [
  _fundDeployer: AddressLike,
  _externalPositionFactory: AddressLike,
  _policyManager: AddressLike,
];

// prettier-ignore
export interface ExternalPositionManager extends Contract<ExternalPositionManager> {
  activateForFund: Send<(arg0: boolean) => void, ExternalPositionManager>
  deactivateForFund: Send<() => void, ExternalPositionManager>
  getExternalPositionFactory: Call<() => string, ExternalPositionManager>
  getExternalPositionLibForType: Call<(_typeId: BigNumberish) => string, ExternalPositionManager>
  getExternalPositionParserForType: Call<(_typeId: BigNumberish) => string, ExternalPositionManager>
  getFundDeployer: Call<() => string, ExternalPositionManager>
  getOwner: Call<() => string, ExternalPositionManager>
  getPolicyManager: Call<() => string, ExternalPositionManager>
  getVaultProxyForFund: Call<(_comptrollerProxy: AddressLike) => string, ExternalPositionManager>
  receiveCallFromComptroller: Send<(_caller: AddressLike, _actionId: BigNumberish, _callArgs: BytesLike) => void, ExternalPositionManager>
  setConfigForFund: Send<(_comptrollerProxy: AddressLike, _vaultProxy: AddressLike, arg2: BytesLike) => void, ExternalPositionManager>
  updateExternalPositionTypesInfo: Send<(_typeIds: BigNumberish[], _libs: AddressLike[], _parsers: AddressLike[]) => void, ExternalPositionManager>
}

let ExternalPositionManagerBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  ExternalPositionManagerBytecode =
    '0x60e060405234801561001057600080fd5b506040516125e03803806125e08339818101604052606081101561003357600080fd5b50805160208201516040909201516001600160601b0319606092831b811660805292821b831660a052901b1660c05260805160601c60a05160601c60c05160601c61253a6100a660003980610ac9525080610971528061107e5250806109d45280610a7c5280610aa3525061253a6000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806380d570631161007157806380d5706314610367578063893d20e81461038657806397c0ac871461038e578063bd8e959a14610396578063d44ad6cb1461039e578063f067cc11146103a6576100b4565b80631bee801e146100b9578063467903461461013e5780634c68a8dc14610180578063634ac96d1461032557806375d8bb0e1461032d5780637c65c1141461034a575b600080fd5b61013c600480360360608110156100cf57600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b8111156100fe57600080fd5b82018360208201111561011057600080fd5b803590602001918460018302840111600160201b8311171561013157600080fd5b50909250905061042d565b005b6101646004803603602081101561015457600080fd5b50356001600160a01b031661069e565b604080516001600160a01b039092168252519081900360200190f35b61013c6004803603606081101561019657600080fd5b810190602081018135600160201b8111156101b057600080fd5b8201836020820111156101c257600080fd5b803590602001918460208302840111600160201b831117156101e357600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561023257600080fd5b82018360208201111561024457600080fd5b803590602001918460208302840111600160201b8311171561026557600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b8111156102b457600080fd5b8201836020820111156102c657600080fd5b803590602001918460208302840111600160201b831117156102e757600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506106bc945050505050565b61016461096f565b6101646004803603602081101561034357600080fd5b5035610993565b6101646004803603602081101561036057600080fd5b50356109b2565b61013c6004803603602081101561037d57600080fd5b503515156109cd565b6101646109d0565b610164610a5c565b61013c610ac5565b610164610ac7565b61013c600480360360608110156103bc57600080fd5b6001600160a01b038235811692602081013590911691810190606081016040820135600160201b8111156103ef57600080fd5b82018360208201111561040157600080fd5b803590602001918460018302840111600160201b8311171561042257600080fd5b509092509050610aeb565b3360006104398261069e565b90506001600160a01b0381166104805760405162461bcd60e51b815260040180806020018281038252602d8152602001806124a9602d913960400191505060405180910390fd5b806001600160a01b031663714ca2d1876040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156104cd57600080fd5b505afa1580156104e1573d6000803e3d6000fd5b505050506040513d60208110156104f757600080fd5b50516105345760405162461bcd60e51b81526004018080602001828103825260288152602001806123b16028913960400191505060405180910390fd5b846105805761057b86838387878080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610b6e92505050565b610696565b60018514156105ca5761057b868386868080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061126892505050565b60028514156106145761057b868386868080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611c4492505050565b600385141561065f5761057b86838387878080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611d6992505050565b60405162461bcd60e51b815260040180806020018281038252602d81526020018061230c602d913960400191505060405180910390fd5b505050505050565b6001600160a01b039081166000908152602081905260409020541690565b6106c46109d0565b6001600160a01b0316336001600160a01b0316146107135760405162461bcd60e51b81526004018080602001828103825260498152602001806122c36049913960600191505060405180910390fd5b80518351148015610725575080518251145b6107605760405162461bcd60e51b815260040180806020018281038252602f8152602001806124d6602f913960400191505060405180910390fd5b60005b83518110156109695761077461096f565b6001600160a01b0316633825abe86040518163ffffffff1660e01b815260040160206040518083038186803b1580156107ac57600080fd5b505afa1580156107c0573d6000803e3d6000fd5b505050506040513d60208110156107d657600080fd5b505184518590839081106107e657fe5b60200260200101511061082a5760405162461bcd60e51b81526004018080602001828103825260348152602001806123d96034913960400191505060405180910390fd5b604051806040016040528083838151811061084157fe5b60200260200101516001600160a01b0316815260200184838151811061086357fe5b60200260200101516001600160a01b03168152506001600086848151811061088757fe5b602090810291909101810151825281810192909252604001600020825181546001600160a01b03199081166001600160a01b03928316178355939092015160019091018054909316911617905583518490829081106108e257fe5b60200260200101517f14f0f52379e27a06185de7281205c2496464cf539a6dcc46258cc6cebe89dc3084838151811061091757fe5b602002602001015184848151811061092b57fe5b602002602001015160405180836001600160a01b03168152602001826001600160a01b031681526020019250505060405180910390a2600101610763565b50505050565b7f000000000000000000000000000000000000000000000000000000000000000090565b600090815260016020819052604090912001546001600160a01b031690565b6000908152600160205260409020546001600160a01b031690565b50565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663893d20e86040518163ffffffff1660e01b815260040160206040518083038186803b158015610a2b57600080fd5b505afa158015610a3f573d6000803e3d6000fd5b505050506040513d6020811015610a5557600080fd5b5051905090565b6000610aa0604051806060016040528060298152602001612339602991397f0000000000000000000000000000000000000000000000000000000000000000612004565b507f000000000000000000000000000000000000000000000000000000000000000090565b565b7f000000000000000000000000000000000000000000000000000000000000000090565b610b0d6040518060600160405280602d8152602001612296602d913933612004565b610b15610a5c565b6001600160a01b0316336001600160a01b031614610b645760405162461bcd60e51b815260040180806020018281038252602881526020018061240d6028913960400191505060405180910390fd5b61096984846120bf565b60006060828060200190516040811015610b8757600080fd5b815160208301805160405192949293830192919084600160201b821115610bad57600080fd5b908301906020820185811115610bc257600080fd5b8251600160201b811182820188101715610bdb57600080fd5b82525081516020918201929091019080838360005b83811015610c08578181015183820152602001610bf0565b50505050905090810190601f168015610c355780820380516001836020036101000a031916815260200191505b50604052505050915091506000610c4b836109b2565b90506001600160a01b038116610c925760405162461bcd60e51b81526004018080602001828103825260288152602001806124356028913960400191505060405180910390fd5b610c9a610ac7565b6001600160a01b0316630442bad58760068a878760405160200180846001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610d03578181015183820152602001610ceb565b50505050905090810190601f168015610d305780820380516001836020036101000a031916815260200191505b509450505050506040516020818303038152906040526040518463ffffffff1660e01b815260040180846001600160a01b03168152602001836009811115610d7457fe5b815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610db2578181015183820152602001610d9a565b50505050905090810190601f168015610ddf5780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b158015610e0057600080fd5b505af1158015610e14573d6000803e3d6000fd5b505050506060816001600160a01b031663db16c72e87856040518363ffffffff1660e01b815260040180836001600160a01b0316815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610e86578181015183820152602001610e6e565b50505050905090810190601f168015610eb35780820380516001836020036101000a031916815260200191505b509350505050600060405180830381600087803b158015610ed357600080fd5b505af1158015610ee7573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526020811015610f1057600080fd5b8101908080516040519392919084600160201b821115610f2f57600080fd5b908301906020820185811115610f4457600080fd5b8251600160201b811182820188101715610f5d57600080fd5b82525081516020918201929091019080838360005b83811015610f8a578181015183820152602001610f72565b50505050905090810190601f168015610fb75780820380516001836020036101000a031916815260200191505b5060405250505090506060634ddf47d460e01b826040516024018080602001828103825283818151815260200191508051906020019080838360005b8381101561100b578181015183820152602001610ff3565b50505050905090810190601f1680156110385780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909616959095179094525091925060009150506001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663f908bc7789886110ae81610993565b866040518563ffffffff1660e01b815260040180856001600160a01b03168152602001848152602001836001600160a01b0316815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561111f578181015183820152602001611107565b50505050905090810190601f16801561114c5780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b15801561116e57600080fd5b505af1158015611182573d6000803e3d6000fd5b505050506040513d602081101561119857600080fd5b5051604080516001600160a01b038084168252602082810184815288519484019490945287519495508a94828e1694928f16937fc3b9bcc16acc2ee56104cb9a5d736ade0f1446a66aa9e217d8fa5b44f946b59e9388938b93606084019185019080838360005b838110156112175781810151838201526020016111ff565b50505050905090810190601f1680156112445780820380516001836020036101000a031916815260200191505b50935050505060405180910390a461125c8982612116565b50505050505050505050565b600080606083806020019051606081101561128257600080fd5b81516020830151604080850180519151939592948301929184600160201b8211156112ac57600080fd5b9083019060208201858111156112c157600080fd5b8251600160201b8111828201881017156112da57600080fd5b82525081516020918201929091019080838360005b838110156113075781810151838201526020016112ef565b50505050905090810190601f1680156113345780820380516001836020036101000a031916815260200191505b5060405250505092509250925060006113b0846001600160a01b03166312bc0a446040518163ffffffff1660e01b815260040160206040518083038186803b15801561137f57600080fd5b505afa158015611393573d6000803e3d6000fd5b505050506040513d60208110156113a957600080fd5b50516109b2565b90506060806060836001600160a01b031663bbd2d6468888886040518463ffffffff1660e01b815260040180846001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561142a578181015183820152602001611412565b50505050905090810190601f1680156114575780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b15801561147857600080fd5b505af115801561148c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405260608110156114b557600080fd5b8101908080516040519392919084600160201b8211156114d457600080fd5b9083019060208201858111156114e957600080fd5b82518660208202830111600160201b8211171561150557600080fd5b82525081516020918201928201910280838360005b8381101561153257818101518382015260200161151a565b5050505090500160405260200180516040519392919084600160201b82111561155a57600080fd5b90830190602082018581111561156f57600080fd5b82518660208202830111600160201b8211171561158b57600080fd5b82525081516020918201928201910280838360005b838110156115b85781810151838201526020016115a0565b5050505090500160405260200180516040519392919084600160201b8211156115e057600080fd5b9083019060208201858111156115f557600080fd5b82518660208202830111600160201b8211171561161157600080fd5b82525081516020918201928201910280838360005b8381101561163e578181015183820152602001611626565b50505050905001604052505050925092509250606086866040516020018083815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561169b578181015183820152602001611683565b50505050905090810190601f1680156116c85780820380516001836020036101000a031916815260200191505b50935050505060405160208183030381529060405290506118498a898387878760405160200180866001600160a01b0316815260200180602001806020018060200180602001858103855289818151815260200191508051906020019080838360005b8381101561174357818101518382015260200161172b565b50505050905090810190601f1680156117705780820380516001836020036101000a031916815260200191505b508581038452885181528851602091820191808b01910280838360005b838110156117a557818101518382015260200161178d565b50505050905001858103835287818151815260200191508051906020019060200280838360005b838110156117e45781810151838201526020016117cc565b50505050905001858103825286818151815260200191508051906020019060200280838360005b8381101561182357818101518382015260200161180b565b5050505090500199505050505050505050506040516020818303038152906040526121fc565b611851610ac7565b6001600160a01b0316630442bad58b60078e8c8989898960405160200180876001600160a01b03168152602001866001600160a01b0316815260200180602001806020018060200180602001858103855289818151815260200191508051906020019060200280838360005b838110156118d55781810151838201526020016118bd565b50505050905001858103845288818151815260200191508051906020019060200280838360005b838110156119145781810151838201526020016118fc565b50505050905001858103835287818151815260200191508051906020019060200280838360005b8381101561195357818101518382015260200161193b565b50505050905001858103825286818151815260200191508051906020019080838360005b8381101561198f578181015183820152602001611977565b50505050905090810190601f1680156119bc5780820380516001836020036101000a031916815260200191505b509a50505050505050505050506040516020818303038152906040526040518463ffffffff1660e01b815260040180846001600160a01b03168152602001836009811115611a0657fe5b815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611a44578181015183820152602001611a2c565b50505050905090810190601f168015611a715780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b158015611a9257600080fd5b505af1158015611aa6573d6000803e3d6000fd5b50505050876001600160a01b03168a6001600160a01b03168c6001600160a01b03167f62e5ab7686baa8b666d45a227de296ea589ff48f1f215ca0e647ef6417a8657e8a8a8989896040518086815260200180602001806020018060200180602001858103855289818151815260200191508051906020019080838360005b83811015611b3d578181015183820152602001611b25565b50505050905090810190601f168015611b6a5780820380516001836020036101000a031916815260200191505b508581038452885181528851602091820191808b01910280838360005b83811015611b9f578181015183820152602001611b87565b50505050905001858103835287818151815260200191508051906020019060200280838360005b83811015611bde578181015183820152602001611bc6565b50505050905001858103825286818151815260200191508051906020019060200280838360005b83811015611c1d578181015183820152602001611c05565b50505050905001995050505050505050505060405180910390a45050505050505050505050565b6000818060200190516020811015611c5b57600080fd5b50519050611c67610ac7565b604080516001600160a01b038781166020830152848116828401528251808303840181526060830193849052630442bad560e01b90935286811660648301908152931692630442bad59287926008929060840183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611cf9578181015183820152602001611ce1565b50505050905090810190601f168015611d265780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b158015611d4757600080fd5b505af1158015611d5b573d6000803e3d6000fd5b505050506109698382612229565b6000818060200190516020811015611d8057600080fd5b50519050611d8c61096f565b6001600160a01b03166371b79dc1826040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015611dd857600080fd5b505afa158015611dec573d6000803e3d6000fd5b505050506040513d6020811015611e0257600080fd5b5051611e3f5760405162461bcd60e51b815260040180806020018281038252604f815260200180612362604f913960600191505060405180910390fd5b826001600160a01b0316816001600160a01b031663c98091876040518163ffffffff1660e01b815260040160206040518083038186803b158015611e8257600080fd5b505afa158015611e96573d6000803e3d6000fd5b505050506040513d6020811015611eac57600080fd5b50516001600160a01b031614611ef35760405162461bcd60e51b815260040180806020018281038252604c81526020018061245d604c913960600191505060405180910390fd5b611efb610ac7565b604080516001600160a01b038881166020830152848116828401528251808303840181526060830193849052630442bad560e01b90935287811660648301908152931692630442bad59288926009929060840183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611f8d578181015183820152602001611f75565b50505050905090810190601f168015611fba5780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b158015611fdb57600080fd5b505af1158015611fef573d6000803e3d6000fd5b50505050611ffd8482612116565b5050505050565b6120bb82826040516024018080602001836001600160a01b03168152602001828103825284818151815260200191508051906020019080838360005b83811015612058578181015183820152602001612040565b50505050905090810190601f1680156120855780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b031663319af33360e01b179052935061227492505050565b5050565b6001600160a01b0382811660008181526020819052604080822080546001600160a01b0319169486169485179055517f8852dcaa71340ea616a65ffac013450dfb238607481fb9d78346c667fe256c139190a35050565b604080516001600160a01b0383811660208084019190915283518084039091018152828401938490526310acd06d60e01b9093528416916310acd06d916008919060440180835b815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561219b578181015183820152602001612183565b50505050905090810190601f1680156121c85780820380516001836020036101000a031916815260200191505b509350505050600060405180830381600087803b1580156121e857600080fd5b505af1158015610696573d6000803e3d6000fd5b6040516310acd06d60e01b81526001600160a01b038316906310acd06d906009908490600401808361215d565b604080516001600160a01b0383811660208084019190915283518084039091018152828401938490526310acd06d60e01b9093528416916310acd06d91600a9190604401808361215d565b80516a636f6e736f6c652e6c6f67602083016000808483855afa505050505056fe457874656e73696f6e426173653a6f6e6c7946756e644465706c6f7965723a6d73672e73656e6465723a2025736f6e6c7946756e644465706c6f7965724f776e65723a204f6e6c79207468652046756e644465706c6f796572206f776e65722063616e2063616c6c20746869732066756e6374696f6e7265636569766543616c6c46726f6d436f6d7074726f6c6c65723a20496e76616c6964205f616374696f6e496446756e644465706c6f7965724f776e65724d6978696e3a67657446756e644465706c6f7965723a25735f5f7265616374697661746545787465726e616c506f736974696f6e3a204163636f756e742070726f7669646564206973206e6f7420612076616c69642065787465726e616c20706f736974696f6e7265636569766543616c6c46726f6d436f6d7074726f6c6c65723a20556e617574686f72697a656475706461746545787465726e616c506f736974696f6e5479706573496e666f3a205479706520646f6573206e6f742065786973744f6e6c79207468652046756e644465706c6f7965722063616e206d616b6520746869732063616c6c5f5f63726561746545787465726e616c506f736974696f6e3a20496e76616c6964207479706549645f5f7265616374697661746545787465726e616c506f736974696f6e3a2045787465726e616c20706f736974696f6e2062656c6f6e677320746f206120646966666572656e74207661756c747265636569766543616c6c46726f6d436f6d7074726f6c6c65723a2046756e64206973206e6f742076616c696475706461746545787465726e616c506f736974696f6e5479706573496e666f3a20556e657175616c20617272617973a26469706673582212203aa9478c655e9648587ee1eb3e53e9b78f0549bddcc533ae1d1ac12fa6ebe68b64736f6c634300060c0033';
}

// prettier-ignore
export const ExternalPositionManager = contract<ExternalPositionManager, ExternalPositionManagerArgs>(ExternalPositionManagerBytecode)`
  constructor(address _fundDeployer, address _externalPositionFactory, address _policyManager)
  event CallOnExternalPositionExecutedForFund(address indexed caller, address indexed comptrollerProxy, address indexed externalPosition, uint256 actionId, bytes actionArgs, address[] assetsToTransfer, uint256[] amountsToTransfer, address[] assetsToReceive)
  event ExternalPositionDeployedForFund(address indexed comptrollerProxy, address indexed vaultProxy, address externalPosition, uint256 indexed externalPositionTypeId, bytes data)
  event ExternalPositionTypeInfoUpdated(uint256 indexed typeId, address lib, address parser)
  event ValidatedVaultProxySetForFund(address indexed comptrollerProxy, address indexed vaultProxy)
  function activateForFund(bool)
  function deactivateForFund()
  function getExternalPositionFactory() view returns (address externalPositionFactory_)
  function getExternalPositionLibForType(uint256 _typeId) view returns (address lib_)
  function getExternalPositionParserForType(uint256 _typeId) view returns (address parser_)
  function getFundDeployer() view returns (address fundDeployer_)
  function getOwner() view returns (address owner_)
  function getPolicyManager() view returns (address policyManager_)
  function getVaultProxyForFund(address _comptrollerProxy) view returns (address vaultProxy_)
  function receiveCallFromComptroller(address _caller, uint256 _actionId, bytes _callArgs)
  function setConfigForFund(address _comptrollerProxy, address _vaultProxy, bytes)
  function updateExternalPositionTypesInfo(uint256[] _typeIds, address[] _libs, address[] _parsers)
`;
