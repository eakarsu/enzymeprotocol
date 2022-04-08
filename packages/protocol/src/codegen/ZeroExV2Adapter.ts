/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

export type ZeroExV2AdapterArgs = [
  _integrationManager: AddressLike,
  _exchange: AddressLike,
  _fundDeployer: AddressLike,
  _allowedMakers: AddressLike[],
];

// prettier-ignore
export interface ZeroExV2Adapter extends Contract<ZeroExV2Adapter> {
  CLAIM_REWARDS_SELECTOR: Call<() => string, ZeroExV2Adapter>
  LEND_AND_STAKE_SELECTOR: Call<() => string, ZeroExV2Adapter>
  LEND_SELECTOR: Call<() => string, ZeroExV2Adapter>
  REDEEM_SELECTOR: Call<() => string, ZeroExV2Adapter>
  STAKE_SELECTOR: Call<() => string, ZeroExV2Adapter>
  TAKE_ORDER_SELECTOR: Call<() => string, ZeroExV2Adapter>
  UNSTAKE_AND_REDEEM_SELECTOR: Call<() => string, ZeroExV2Adapter>
  UNSTAKE_SELECTOR: Call<() => string, ZeroExV2Adapter>
  addAllowedMakers: Send<(_accountsToAdd: AddressLike[]) => void, ZeroExV2Adapter>
  getFundDeployer: Call<() => string, ZeroExV2Adapter>
  getIntegrationManager: Call<() => string, ZeroExV2Adapter>
  getOwner: Call<() => string, ZeroExV2Adapter>
  getZeroExV2Exchange: Call<() => string, ZeroExV2Adapter>
  isAllowedMaker: Call<(_who: AddressLike) => boolean, ZeroExV2Adapter>
  parseAssetsForAction: Call<(arg0: AddressLike, _selector: BytesLike, _actionData: BytesLike) => { spendAssetsHandleType_: BigNumber, spendAssets_: string[], spendAssetAmounts_: BigNumber[], incomingAssets_: string[], minIncomingAssetAmounts_: BigNumber[] }, ZeroExV2Adapter>
  removeAllowedMakers: Send<(_accountsToRemove: AddressLike[]) => void, ZeroExV2Adapter>
  takeOrder: Send<(_vaultProxy: AddressLike, _actionData: BytesLike, _assetData: BytesLike) => void, ZeroExV2Adapter>
}

let ZeroExV2AdapterBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  ZeroExV2AdapterBytecode =
    '0x60e06040523480156200001157600080fd5b506040516200317d3803806200317d833981016040819052620000349162000254565b6001600160601b0319606085811b821660805283811b821660a05284901b1660c0528051156200006957620000698162000073565b505050506200040c565b6000815111620000a05760405162461bcd60e51b815260040162000097906200036b565b60405180910390fd5b60005b81518110156200019657620000d2828281518110620000be57fe5b60200260200101516200019a60201b60201c565b15620000f25760405162461bcd60e51b815260040162000097906200037d565b60016000808484815181106200010457fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a81548160ff0219169083151502179055508181815181106200015057fe5b60200260200101516001600160a01b03167f2e1c3b07a83c6d2606a67771e6dd5c25722baac28ecf38e8056fb820d88536a860405160405180910390a2600101620000a3565b5050565b6001600160a01b031660009081526020819052604090205460ff1690565b8051620001c581620003f2565b92915050565b600082601f830112620001dd57600080fd5b8151620001f4620001ee82620003b6565b6200038f565b915081818352602084019350602081019050838560208402820111156200021a57600080fd5b60005b838110156200024a5781620002338882620001b8565b84525060209283019291909101906001016200021d565b5050505092915050565b600080600080608085870312156200026b57600080fd5b6000620002798787620001b8565b94505060206200028c87828801620001b8565b93505060406200029f87828801620001b8565b92505060608501516001600160401b03811115620002bc57600080fd5b620002ca87828801620001cb565b91505092959194509250565b6000620002e5602883620003d7565b7f5f5f616464416c6c6f7765644d616b6572733a20456d707479205f6163636f758152671b9d1cd51bd0591960c21b602082015260400192915050565b600062000331602583620003d7565b7f5f5f616464416c6c6f7765644d616b6572733a2056616c756520616c726561648152641e481cd95d60da1b602082015260400192915050565b60208082528101620001c581620002d6565b60208082528101620001c58162000322565b6040518181016001600160401b0381118282101715620003ae57600080fd5b604052919050565b60006001600160401b03821115620003cd57600080fd5b5060209081020190565b90815260200190565b60006001600160a01b038216620001c5565b620003fd81620003e0565b81146200040957600080fd5b50565b60805160601c60a05160601c60c05160601c612d226200045b6000398061037f5280610ecb5280610fa65250806104ad5280610561528061058852508061021d5280610c585250612d226000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c8063863e5ad0116100a2578063c54efee511610071578063c54efee5146101ab578063c960260d146101cf578063e7c45690146101e2578063f7d882b5146101ea578063ff7ede37146101f25761010b565b8063863e5ad01461018b578063893d20e81461019357806397c0ac871461019b578063b23228cf146101a35761010b565b8063257cb1a3116100de578063257cb1a3146101605780633ffc15911461016857806340da225d146101705780634ce13fb0146101785761010b565b806303e38a2b14610110578063080456c114610125578063131461c0146101435780631d566eee1461014b575b600080fd5b61012361011e366004611e44565b610212565b005b61012d610335565b60405161013a91906128c4565b60405180910390f35b61012d610359565b61015361037d565b60405161013a9190612857565b61012d6103a1565b61012d6103c5565b61012d6103e9565b610123610186366004611f5b565b61040d565b61012d610485565b6101536104a9565b610153610541565b61012d6105aa565b6101be6101b9366004611ddd565b6105ce565b60405161013a9594939291906128d2565b6101236101dd366004611f5b565b610b05565b610153610c56565b61012d610c7a565b610205610200366004611d99565b610c9e565b60405161013a91906128b6565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146102635760405162461bcd60e51b815260040161025a906129ff565b60405180910390fd5b8482828080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250604080516020601f8c018190048102820181019092528a8152606095509193506102db92508a908a9081908401838280828437600092019190915250610cc092505050565b915091506102e7611930565b6102f083610ce1565b905060606102fd84610e5b565b935050505061030d828483610e98565b50505050606061031c82611037565b9250505061032a838261105d565b505050505050505050565b7f8334eb99be0145865eba9889fca2ee920288090caefff4cc776038e20ad9259a81565b7f29fa046e79524c3c5ac4c01df692c35e217802b2b13b21121b76cf0ef02b138c81565b7f000000000000000000000000000000000000000000000000000000000000000090565b7f099f75155f0e997bf83a7993a71d5e7e7540bd386fe1e84643a09ce6b412521981565b7ffa7dd04da627f433da73c4355ead9c75682a67a8fc84d3f6170ef0922f402d2481565b7fb9dfbaccbe5cd2a84fdcf1d15f23ef25d23086f5afbaa99516065ed4a5bbc7a381565b6104156104a9565b6001600160a01b0316336001600160a01b0316146104455760405162461bcd60e51b815260040161025a9061299f565b6104818282808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152506111b992505050565b5050565b7f03e38a2bd7063d45c897edeafc330e71657502dd86434d3c37a489caf116af6981565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663893d20e86040518163ffffffff1660e01b815260040160206040518083038186803b15801561050457600080fd5b505afa158015610518573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061053c9190611dbf565b905090565b6000610585604051806060016040528060298152602001612c56602991397f00000000000000000000000000000000000000000000000000000000000000006112c0565b507f000000000000000000000000000000000000000000000000000000000000000090565b7f68e30677f607df46e87da13e15b637784cfa62374b653f35ab43d10361a2f83081565b600060608080806001600160e01b031988166303e38a2b60e01b146106055760405162461bcd60e51b815260040161025a90612a6f565b6060600061064889898080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610cc092505050565b91509150610654611930565b61065d83610ce1565b905061066c8160000151610c9e565b6106885760405162461bcd60e51b815260040161025a90612a1f565b8060a001518211156106ac5760405162461bcd60e51b815260040161025a906129cf565b60006106bc826101400151611305565b905060006106ce836101600151611305565b6040805160018082528183019092529192506020808301908036833701905050965081876000815181106106fe57fe5b6001600160a01b03929092166020928302919091018201526040805160018082528183019092529182810190803683370190505095506107478360a0015184608001518661130c565b8660008151811061075457fe5b602090810291909101015260e083015115610a725760006107ef61077661037d565b6001600160a01b031663db123b1a6040518163ffffffff1660e01b815260040160006040518083038186803b1580156107ae57600080fd5b505afa1580156107c2573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526107ea919081019061204b565b611305565b905060006108068560a001518660e001518861130c565b9050836001600160a01b0316826001600160a01b0316141561090c5784608001518560e00151106108495760405162461bcd60e51b815260040161025a9061298f565b6040805160018082528183019092529060208083019080368337019050509a50828b60008151811061087757fe5b6001600160a01b0392909216602092830291909101820152604080516001808252818301909252918281019080368337019050509950858a6000815181106108bb57fe5b6020026020010181815250506108ee81896000815181106108d857fe5b602002602001015161132c90919063ffffffff16565b886000815181106108fb57fe5b602002602001018181525050610a6b565b826001600160a01b0316826001600160a01b031614156109a1576040805160018082528183019092529060208083019080368337019050509a50828b60008151811061095457fe5b6001600160a01b03929092166020928302919091018201526040805160018082528183019092529182810190803683370190505099506109948682611354565b8a6000815181106108fb57fe5b6040805160028082526060820183529091602083019080368337019050509a50828b6000815181106109cf57fe5b60200260200101906001600160a01b031690816001600160a01b031681525050818b6001815181106109fd57fe5b6001600160a01b0392909216602092830291909101820152604080516002808252606082018352909290919083019080368337019050509950858a600081518110610a4457fe5b602002602001018181525050808a600181518110610a5e57fe5b6020026020010181815250505b5050610af1565b60408051600180825281830190925290602080830190803683370190505098508089600081518110610aa057fe5b6001600160a01b03929092166020928302919091018201526040805160018082528183019092529182810190803683370190505097508388600081518110610ae457fe5b6020026020010181815250505b600299505050505050945094509450945094565b610b0d6104a9565b6001600160a01b0316336001600160a01b031614610b3d5760405162461bcd60e51b815260040161025a9061299f565b80610b5a5760405162461bcd60e51b815260040161025a9061297f565b60005b81811015610c5157610b89838383818110610b7457fe5b90506020020160208101906102009190611d99565b610ba55760405162461bcd60e51b815260040161025a90612a5f565b6000806000858585818110610bb657fe5b9050602002016020810190610bcb9190611d99565b6001600160a01b031681526020810191909152604001600020805460ff1916911515919091179055828282818110610bff57fe5b9050602002016020810190610c149190611d99565b6001600160a01b03167f20bc817441764d1758bec8956a90bf0ba498c8c4098524577f7c068d3c9f8c3660405160405180910390a2600101610b5d565b505050565b7f000000000000000000000000000000000000000000000000000000000000000090565b7fc29fa9dde84204c2908778afd0613d802d31cf046179b88f6d2b4a4e507ea2d581565b6001600160a01b03811660009081526020819052604090205460ff165b919050565b6060600082806020019051810190610cd8919061207f565b91509150915091565b610ce9611930565b610cf16119b5565b610cf96119d3565b610d016119f1565b610d0a85610e5b565b5092509250925060405180610180016040528084600060048110610d2a57fe5b60200201516001600160a01b0316815260200184600160048110610d4a57fe5b60200201516001600160a01b0316815260200184600260048110610d6a57fe5b60200201516001600160a01b0316815260200184600360048110610d8a57fe5b60200201516001600160a01b0316815260200183600060068110610daa57fe5b6020020151815260200183600160068110610dc157fe5b6020020151815260200183600260068110610dd857fe5b6020020151815260200183600360068110610def57fe5b6020020151815260200183600460068110610e0657fe5b6020020151815260200183600560068110610e1d57fe5b6020020151815260200182600060028110610e3457fe5b6020020151815260200182600160028110610e4b57fe5b6020020151905295945050505050565b610e636119b5565b610e6b6119d3565b610e736119f1565b606084806020019051810190610e899190611ec9565b93509350935093509193509193565b610ebd610ea9846101600151611305565b610eb7856101600151611379565b8461140e565b60e083015115610f8f5760607f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663db123b1a6040518163ffffffff1660e01b815260040160006040518083038186803b158015610f2257600080fd5b505afa158015610f36573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610f5e919081019061204b565b9050610f8d610f6c82611305565b610f7583611379565b610f888760a001518860e001518861130c565b61140e565b505b60405163b4be83d560e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063b4be83d590610fdf90869086908690600401612a7f565b608060405180830381600087803b158015610ff957600080fd5b505af115801561100d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061103191906120cf565b50505050565b6060806060838060200190518101906110509190611f9c565b9250925092509193909250565b606081516001600160401b038111801561107657600080fd5b506040519080825280602002602001820160405280156110a0578160200160208202803683370190505b50905060005b82518110156111b15760008382815181106110bd57fe5b60200260200101519050806001600160a01b03166370a08231306040518263ffffffff1660e01b81526004016110f39190612857565b60206040518083038186803b15801561110b57600080fd5b505afa15801561111f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061114391906120ed565b83838151811061114f57fe5b602002602001018181525050600083838151811061116957fe5b602002602001015111156111a8576111a88584848151811061118757fe5b6020026020010151836001600160a01b031661164a9092919063ffffffff16565b506001016110a6565b505b92915050565b60008151116111da5760405162461bcd60e51b815260040161025a906129bf565b60005b8151811015610481576112028282815181106111f557fe5b6020026020010151610c9e565b1561121f5760405162461bcd60e51b815260040161025a90612a3f565b600160008084848151811061123057fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a81548160ff02191690831515021790555081818151811061127b57fe5b60200260200101516001600160a01b03167f2e1c3b07a83c6d2606a67771e6dd5c25722baac28ecf38e8056fb820d88536a860405160405180910390a26001016111dd565b61048182826040516024016112d692919061293f565b60408051601f198184030181529190526020810180516001600160e01b031663319af33360e01b1790526116a0565b6024015190565b60006113228461131c84866116c1565b906116fb565b90505b9392505050565b60008282111561134e5760405162461bcd60e51b815260040161025a906129df565b50900390565b6000828201838110156113255760405162461bcd60e51b815260040161025a906129af565b60208101516000906001600160e01b03191661139361037d565b6001600160a01b03166360704108826040518263ffffffff1660e01b81526004016113be91906128c4565b60206040518083038186803b1580156113d657600080fd5b505afa1580156113ea573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113259190611dbf565b604051636eb1769f60e11b81526000906001600160a01b0385169063dd62ed3e9061143f9030908790600401612865565b60206040518083038186803b15801561145757600080fd5b505afa15801561146b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061148f91906120ed565b90506114b3604051806060016040528060268152602001612ca3602691398261172d565b81811015611629576114dc604051806060016040528060288152602001612c0a60289139611772565b80156115855760405163095ea7b360e01b81526001600160a01b0385169063095ea7b390611511908690600090600401612880565b602060405180830381600087803b15801561152b57600080fd5b505af115801561153f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611563919061202d565b50611585604051806060016040528060248152602001612cc960249139611772565b60405163095ea7b360e01b81526001600160a01b0385169063095ea7b3906115b59086906000199060040161289b565b602060405180830381600087803b1580156115cf57600080fd5b505af11580156115e3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611607919061202d565b50611629604051806060016040528060248152602001612c7f60249139611772565b611031604051806060016040528060248152602001612c3260249139611772565b610c518363a9059cbb60e01b848460405160240161166992919061289b565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526117b8565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b6000826116d0575060006111b3565b828202828482816116dd57fe5b04146113255760405162461bcd60e51b815260040161025a90612a0f565b600080821161171c5760405162461bcd60e51b815260040161025a906129ef565b81838161172557fe5b049392505050565b610481828260405160240161174392919061295f565b60408051601f198184030181529190526020810180516001600160e01b03166309710a9d60e41b1790526116a0565b6117b581604051602401611786919061292e565b60408051601f198184030181529190526020810180516001600160e01b031663104c13eb60e21b1790526116a0565b50565b606061180d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166118479092919063ffffffff16565b805190915015610c51578080602001905181019061182b919061202d565b610c515760405162461bcd60e51b815260040161025a90612a4f565b606061132284846000858561185b856118f1565b6118775760405162461bcd60e51b815260040161025a90612a2f565b60006060866001600160a01b03168587604051611894919061284b565b60006040518083038185875af1925050503d80600081146118d1576040519150601f19603f3d011682016040523d82523d6000602084013e6118d6565b606091505b50915091506118e68282866118f7565b979650505050505050565b3b151590565b60608315611906575081611325565b8251156119165782518084602001fd5b8160405162461bcd60e51b815260040161025a919061292e565b60405180610180016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160608152602001606081525090565b60405180608001604052806004906020820280368337509192915050565b6040518060c001604052806006906020820280368337509192915050565b60405180604001604052806002905b6060815260200190600190039081611a005790505090565b80356111b381612bda565b80516111b381612bda565b600082601f830112611a3f57600080fd5b6004611a52611a4d82612ad7565b612ab1565b91508183856020840282011115611a6857600080fd5b60005b83811015611a945781611a7e8882611a23565b8452506020928301929190910190600101611a6b565b5050505092915050565b60008083601f840112611ab057600080fd5b5081356001600160401b03811115611ac757600080fd5b602083019150836020820283011115611adf57600080fd5b9250929050565b600082601f830112611af757600080fd5b8151611b05611a4d82612af4565b91508181835260208401935060208101905083856020840282011115611b2a57600080fd5b60005b83811015611a945781611b408882611a23565b8452506020928301929190910190600101611b2d565b600082601f830112611b6757600080fd5b6002611b75611a4d82612ad7565b9150818360005b83811015611a945781518601611b928882611cd0565b8452506020928301929190910190600101611b7c565b600082601f830112611bb957600080fd5b6006611bc7611a4d82612ad7565b91508183856020840282011115611bdd57600080fd5b60005b83811015611a945781611bf38882611d8e565b8452506020928301929190910190600101611be0565b600082601f830112611c1a57600080fd5b8151611c28611a4d82612af4565b91508181835260208401935060208101905083856020840282011115611c4d57600080fd5b60005b83811015611a945781611c638882611d8e565b8452506020928301929190910190600101611c50565b80516111b381612bee565b80356111b381612bf7565b60008083601f840112611ca157600080fd5b5081356001600160401b03811115611cb857600080fd5b602083019150836001820283011115611adf57600080fd5b600082601f830112611ce157600080fd5b8151611cef611a4d82612b14565b91508082526020830160208301858383011115611d0b57600080fd5b611d16838284612b9a565b50505092915050565b600060808284031215611d3157600080fd5b611d3b6080612ab1565b90506000611d498484611d8e565b8252506020611d5a84848301611d8e565b6020830152506040611d6e84828501611d8e565b6040830152506060611d8284828501611d8e565b60608301525092915050565b80516111b381612c00565b600060208284031215611dab57600080fd5b6000611db78484611a18565b949350505050565b600060208284031215611dd157600080fd5b6000611db78484611a23565b60008060008060608587031215611df357600080fd5b6000611dff8787611a18565b9450506020611e1087828801611c84565b93505060408501356001600160401b03811115611e2c57600080fd5b611e3887828801611c8f565b95989497509550505050565b600080600080600060608688031215611e5c57600080fd5b6000611e688888611a18565b95505060208601356001600160401b03811115611e8457600080fd5b611e9088828901611c8f565b945094505060408601356001600160401b03811115611eae57600080fd5b611eba88828901611c8f565b92509250509295509295909350565b6000806000806101808587031215611ee057600080fd5b6000611eec8787611a2e565b9450506080611efd87828801611ba8565b9350506101408501516001600160401b03811115611f1a57600080fd5b611f2687828801611b56565b9250506101608501516001600160401b03811115611f4357600080fd5b611f4f87828801611cd0565b91505092959194509250565b60008060208385031215611f6e57600080fd5b82356001600160401b03811115611f8457600080fd5b611f9085828601611a9e565b92509250509250929050565b600080600060608486031215611fb157600080fd5b83516001600160401b03811115611fc757600080fd5b611fd386828701611ae6565b93505060208401516001600160401b03811115611fef57600080fd5b611ffb86828701611c09565b92505060408401516001600160401b0381111561201757600080fd5b61202386828701611ae6565b9150509250925092565b60006020828403121561203f57600080fd5b6000611db78484611c79565b60006020828403121561205d57600080fd5b81516001600160401b0381111561207357600080fd5b611db784828501611cd0565b6000806040838503121561209257600080fd5b82516001600160401b038111156120a857600080fd5b6120b485828601611cd0565b92505060206120c585828601611d8e565b9150509250929050565b6000608082840312156120e157600080fd5b6000611db78484611d1f565b6000602082840312156120ff57600080fd5b6000611db78484611d8e565b6000612117838361212b565b505060200190565b60006121178383612842565b61213481612b4e565b82525050565b600061214582612b41565b61214f8185612b45565b935061215a83612b3b565b8060005b83811015612188578151612172888261210b565b975061217d83612b3b565b92505060010161215e565b509495945050505050565b600061219e82612b41565b6121a88185612b45565b93506121b383612b3b565b8060005b838110156121885781516121cb888261211f565b97506121d683612b3b565b9250506001016121b7565b61213481612b59565b61213481612b5e565b60006121fe82612b41565b6122088185612b45565b9350612218818560208601612b9a565b61222181612bc6565b9093019392505050565b600061223682612b41565b6122408185610cbb565b9350612250818560208601612b9a565b9290920192915050565b61213481612b84565b61213481612b8f565b6000612279602c83612b45565b7f72656d6f7665416c6c6f7765644d616b6572733a20456d707479205f6163636f81526b756e7473546f52656d6f766560a01b602082015260400192915050565b60006122c7603783612b45565b7f7061727365417373657473466f72416374696f6e3a204665652067726561746581527f72207468616e206d616b65724173736574416d6f756e74000000000000000000602082015260400192915050565b6000612326604983612b45565b7f6f6e6c7946756e644465706c6f7965724f776e65723a204f6e6c79207468652081527f46756e644465706c6f796572206f776e65722063616e2063616c6c207468697360208201526810333ab731ba34b7b760b91b604082015260600192915050565b6000612397601b83612b45565b7f536166654d6174683a206164646974696f6e206f766572666c6f770000000000815260200192915050565b60006123d0602883612b45565b7f5f5f616464416c6c6f7765644d616b6572733a20456d707479205f6163636f758152671b9d1cd51bd0591960c21b602082015260400192915050565b600061241a604483612b45565b7f7061727365417373657473466f72416374696f6e3a2054616b6572206173736581527f742066696c6c20616d6f756e742067726561746572207468616e20617661696c60208201526361626c6560e01b604082015260600192915050565b6000612486601e83612b45565b7f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815260200192915050565b60006124bf601a83612b45565b7f536166654d6174683a206469766973696f6e206279207a65726f000000000000815260200192915050565b60006124f8603283612b45565b7f4f6e6c792074686520496e746567726174696f6e4d616e616765722063616e2081527131b0b636103a3434b990333ab731ba34b7b760711b602082015260400192915050565b600061254c602183612b45565b7f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f8152607760f81b602082015260400192915050565b600061258f603083612b45565b7f7061727365417373657473466f72416374696f6e3a204f72646572206d616b6581526f1c881a5cc81b9bdd08185b1b1bddd95960821b602082015260400192915050565b60006125e1601d83612b45565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000815260200192915050565b600061261a602583612b45565b7f5f5f616464416c6c6f7765644d616b6572733a2056616c756520616c726561648152641e481cd95d60da1b602082015260400192915050565b6000612661602a83612b45565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e8152691bdd081cdd58d8d9595960b21b602082015260400192915050565b60006126ad603483612b45565b7f72656d6f7665416c6c6f7765644d616b6572733a204163636f756e74206973208152733737ba1030b71030b63637bbb2b21036b0b5b2b960611b602082015260400192915050565b6000612703602783612b45565b7f7061727365417373657473466f72416374696f6e3a205f73656c6563746f72208152661a5b9d985b1a5960ca1b602082015260400192915050565b8051600090610180840190612754858261212b565b506020830151612767602086018261212b565b50604083015161277a604086018261212b565b50606083015161278d606086018261212b565b5060808301516127a06080860182612842565b5060a08301516127b360a0860182612842565b5060c08301516127c660c0860182612842565b5060e08301516127d960e0860182612842565b506101008301516127ee610100860182612842565b50610120830151612803610120860182612842565b5061014083015184820361014086015261281d82826121f3565b91505061016083015184820361016086015261283982826121f3565b95945050505050565b61213481612b81565b6000611325828461222b565b602081016111b3828461212b565b60408101612873828561212b565b611325602083018461212b565b6040810161288e828561212b565b6113256020830184612263565b604081016128a9828561212b565b6113256020830184612842565b602081016111b382846121e1565b602081016111b382846121ea565b60a081016128e0828861225a565b81810360208301526128f2818761213a565b905081810360408301526129068186612193565b9050818103606083015261291a818561213a565b905081810360808301526118e68184612193565b6020808252810161132581846121f3565b6040808252810161295081856121f3565b9050611325602083018461212b565b6040808252810161297081856121f3565b90506113256020830184612842565b602080825281016111b38161226c565b602080825281016111b3816122ba565b602080825281016111b381612319565b602080825281016111b38161238a565b602080825281016111b3816123c3565b602080825281016111b38161240d565b602080825281016111b381612479565b602080825281016111b3816124b2565b602080825281016111b3816124eb565b602080825281016111b38161253f565b602080825281016111b381612582565b602080825281016111b3816125d4565b602080825281016111b38161260d565b602080825281016111b381612654565b602080825281016111b3816126a0565b602080825281016111b3816126f6565b60608082528101612a90818661273f565b9050612a9f6020830185612842565b818103604083015261283981846121f3565b6040518181016001600160401b0381118282101715612acf57600080fd5b604052919050565b60006001600160401b03821115612aed57600080fd5b5060200290565b60006001600160401b03821115612b0a57600080fd5b5060209081020190565b60006001600160401b03821115612b2a57600080fd5b506020601f91909101601f19160190565b60200190565b5190565b90815260200190565b60006111b382612b75565b151590565b6001600160e01b03191690565b80610cbb81612bd0565b6001600160a01b031690565b90565b60006111b382612b6b565b60006111b382612b81565b60005b83811015612bb5578181015183820152602001612b9d565b838111156110315750506000910152565b601f01601f191690565b600381106117b557fe5b612be381612b4e565b81146117b557600080fd5b612be381612b59565b612be381612b5e565b612be381612b8156fe5f5f617070726f766541737365744d617841734e65656465643a6265666f726520617070726f76655f5f617070726f766541737365744d617841734e65656465643a617070726f766564203346756e644465706c6f7965724f776e65724d6978696e3a67657446756e644465706c6f7965723a25735f5f617070726f766541737365744d617841734e65656465643a617070726f76656420325f5f617070726f766541737365744d617841734e65656465643a616c6c6f77616e63653a25645f5f617070726f766541737365744d617841734e65656465643a617070726f7665642031a2646970667358221220e83409c6412b02ea285c54941f043f2388a6f237133210f49834012ae462c9ad64736f6c634300060c0033';
}

// prettier-ignore
export const ZeroExV2Adapter = contract<ZeroExV2Adapter, ZeroExV2AdapterArgs>(ZeroExV2AdapterBytecode)`
  constructor(address _integrationManager, address _exchange, address _fundDeployer, address[] _allowedMakers)
  event AllowedMakerAdded(address indexed account)
  event AllowedMakerRemoved(address indexed account)
  function CLAIM_REWARDS_SELECTOR() view returns (bytes4)
  function LEND_AND_STAKE_SELECTOR() view returns (bytes4)
  function LEND_SELECTOR() view returns (bytes4)
  function REDEEM_SELECTOR() view returns (bytes4)
  function STAKE_SELECTOR() view returns (bytes4)
  function TAKE_ORDER_SELECTOR() view returns (bytes4)
  function UNSTAKE_AND_REDEEM_SELECTOR() view returns (bytes4)
  function UNSTAKE_SELECTOR() view returns (bytes4)
  function addAllowedMakers(address[] _accountsToAdd)
  function getFundDeployer() view returns (address fundDeployer_)
  function getIntegrationManager() view returns (address integrationManager_)
  function getOwner() view returns (address owner_)
  function getZeroExV2Exchange() view returns (address zeroExV2Exchange_)
  function isAllowedMaker(address _who) view returns (bool isAllowedMaker_)
  function parseAssetsForAction(address, bytes4 _selector, bytes _actionData) view returns (uint8 spendAssetsHandleType_, address[] spendAssets_, uint256[] spendAssetAmounts_, address[] incomingAssets_, uint256[] minIncomingAssetAmounts_)
  function removeAllowedMakers(address[] _accountsToRemove)
  function takeOrder(address _vaultProxy, bytes _actionData, bytes _assetData)
`;