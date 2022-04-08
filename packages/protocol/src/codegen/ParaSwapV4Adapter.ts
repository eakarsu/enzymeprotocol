/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

export type ParaSwapV4AdapterArgs = [
  _integrationManager: AddressLike,
  _augustusSwapper: AddressLike,
  _tokenTransferProxy: AddressLike,
];

// prettier-ignore
export interface ParaSwapV4Adapter extends Contract<ParaSwapV4Adapter> {
  CLAIM_REWARDS_SELECTOR: Call<() => string, ParaSwapV4Adapter>
  LEND_AND_STAKE_SELECTOR: Call<() => string, ParaSwapV4Adapter>
  LEND_SELECTOR: Call<() => string, ParaSwapV4Adapter>
  REDEEM_SELECTOR: Call<() => string, ParaSwapV4Adapter>
  STAKE_SELECTOR: Call<() => string, ParaSwapV4Adapter>
  TAKE_ORDER_SELECTOR: Call<() => string, ParaSwapV4Adapter>
  UNSTAKE_AND_REDEEM_SELECTOR: Call<() => string, ParaSwapV4Adapter>
  UNSTAKE_SELECTOR: Call<() => string, ParaSwapV4Adapter>
  getIntegrationManager: Call<() => string, ParaSwapV4Adapter>
  getParaSwapV4AugustusSwapper: Call<() => string, ParaSwapV4Adapter>
  getParaSwapV4TokenTransferProxy: Call<() => string, ParaSwapV4Adapter>
  parseAssetsForAction: Call<(arg0: AddressLike, _selector: BytesLike, _actionData: BytesLike) => { spendAssetsHandleType_: BigNumber, spendAssets_: string[], spendAssetAmounts_: BigNumber[], incomingAssets_: string[], minIncomingAssetAmounts_: BigNumber[] }, ParaSwapV4Adapter>
  takeOrder: Send<(_vaultProxy: AddressLike, _actionData: BytesLike, arg2: BytesLike) => void, ParaSwapV4Adapter>
}

let ParaSwapV4AdapterBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  ParaSwapV4AdapterBytecode =
    '0x60e06040523480156200001157600080fd5b50604051620017953803806200179583398101604081905262000034916200006f565b6001600160601b0319606093841b811660805291831b821660a05290911b1660c052620000ef565b80516200006981620000d5565b92915050565b6000806000606084860312156200008557600080fd5b60006200009386866200005c565b9350506020620000a6868287016200005c565b9250506040620000b9868287016200005c565b9150509250925092565b60006001600160a01b03821662000069565b620000e081620000c3565b8114620000ec57600080fd5b50565b60805160601c60a05160601c60c05160601c611661620001346000398061053c52806105da5250806102fa5280610678525080610193528061056052506116616000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80635e21197a1161008c578063c54efee511610066578063c54efee51461014c578063c7308c0314610170578063e7c4569014610178578063f7d882b514610180576100cf565b80635e21197a14610127578063863e5ad01461013c578063b23228cf14610144576100cf565b806303e38a2b146100d4578063080456c1146100e9578063131461c014610107578063257cb1a31461010f5780633ffc15911461011757806340da225d1461011f575b600080fd5b6100e76100e2366004610d7d565b610188565b005b6100f1610244565b6040516100fe9190611357565b60405180910390f35b6100f1610268565b6100f161028c565b6100f16102b0565b6100f16102d4565b61012f6102f8565b6040516100fe91906112f8565b6100f161031c565b6100f1610340565b61015f61015a366004610d15565b610364565b6040516100fe959493929190611365565b61012f61053a565b61012f61055e565b6100f1610582565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146101d95760405162461bcd60e51b81526004016101d0906113fd565b60405180910390fd5b600080600080606061022089898080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506105a692505050565b94509450945094509450610238838387878e866105d4565b50505050505050505050565b7f8334eb99be0145865eba9889fca2ee920288090caefff4cc776038e20ad9259a81565b7f29fa046e79524c3c5ac4c01df692c35e217802b2b13b21121b76cf0ef02b138c81565b7f099f75155f0e997bf83a7993a71d5e7e7540bd386fe1e84643a09ce6b412521981565b7ffa7dd04da627f433da73c4355ead9c75682a67a8fc84d3f6170ef0922f402d2481565b7fb9dfbaccbe5cd2a84fdcf1d15f23ef25d23086f5afbaa99516065ed4a5bbc7a381565b7f000000000000000000000000000000000000000000000000000000000000000090565b7f03e38a2bd7063d45c897edeafc330e71657502dd86434d3c37a489caf116af6981565b7f68e30677f607df46e87da13e15b637784cfa62374b653f35ab43d10361a2f83081565b600060608080806001600160e01b031988166303e38a2b60e01b1461039b5760405162461bcd60e51b81526004016101d09061140d565b600080600060606103e18b8b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506105a692505050565b945094509450509350600167ffffffffffffffff8111801561040257600080fd5b5060405190808252806020026020018201604052801561042c578160200160208202803683370190505b509750828860008151811061043d57fe5b6001600160a01b0392909216602092830291909101820152604080516001808252818301909252918281019080368337019050509650818760008151811061048157fe5b602090810291909101015260408051600180825281830190925290816020016020820280368337019050509550806001825103815181106104be57fe5b602002602001015160000151866000815181106104d757fe5b6001600160a01b0392909216602092830291909101820152604080516001808252818301909252918281019080368337019050509450838560008151811061051b57fe5b6020026020010181815250506002985050505050945094509450945094565b7f000000000000000000000000000000000000000000000000000000000000000090565b7f000000000000000000000000000000000000000000000000000000000000000090565b7fc29fa9dde84204c2908778afd0613d802d31cf046179b88f6d2b4a4e507ea2d581565b6000806000806060858060200190518101906105c29190610e48565b939a9299509097509550909350915050565b6105ff867f00000000000000000000000000000000000000000000000000000000000000008761071e565b610607610a10565b604051806101000160405280886001600160a01b03168152602001878152602001868152602001858152602001846001600160a01b0316815260200160405180604001604052806006815260200165656e7a796d6560d01b81525081526020016000151581526020018381525090507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638f00eccb826040518263ffffffff1660e01b81526004016106c2919061141d565b602060405180830381600087803b1580156106dc57600080fd5b505af11580156106f0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107149190610e2a565b5050505050505050565b604051636eb1769f60e11b81526000906001600160a01b0385169063dd62ed3e9061074f9030908790600401611306565b60206040518083038186803b15801561076757600080fd5b505afa15801561077b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061079f9190610e2a565b90506107c36040518060600160405280602681526020016115e26026913982610960565b81811015610939576107ec604051806060016040528060288152602001611572602891396109a9565b80156108955760405163095ea7b360e01b81526001600160a01b0385169063095ea7b390610821908690600090600401611321565b602060405180830381600087803b15801561083b57600080fd5b505af115801561084f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108739190610e04565b50610895604051806060016040528060248152602001611608602491396109a9565b60405163095ea7b360e01b81526001600160a01b0385169063095ea7b3906108c59086906000199060040161133c565b602060405180830381600087803b1580156108df57600080fd5b505af11580156108f3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109179190610e04565b506109396040518060600160405280602481526020016115be602491396109a9565b61095a60405180606001604052806024815260200161159a602491396109a9565b50505050565b6109a582826040516024016109769291906113dd565b60408051601f198184030181529190526020810180516001600160e01b03166309710a9d60e41b1790526109ef565b5050565b6109ec816040516024016109bd91906113cc565b60408051601f198184030181529190526020810180516001600160e01b031663104c13eb60e21b1790526109ef565b50565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b60405180610100016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160608152602001600015158152602001606081525090565b8035610a7481611542565b92915050565b8051610a7481611542565b600082601f830112610a9657600080fd5b8151610aa9610aa482611455565b61142e565b81815260209384019390925082018360005b83811015610ae75781518601610ad18882610bfc565b8452506020928301929190910190600101610abb565b5050505092915050565b600082601f830112610b0257600080fd5b8151610b10610aa482611455565b81815260209384019390925082018360005b83811015610ae75781518601610b388882610c6f565b8452506020928301929190910190600101610b22565b8051610a7481611556565b8035610a748161155f565b60008083601f840112610b7657600080fd5b50813567ffffffffffffffff811115610b8e57600080fd5b602083019150836001820283011115610ba657600080fd5b9250929050565b600082601f830112610bbe57600080fd5b8151610bcc610aa482611476565b91508082526020830160208301858383011115610be857600080fd5b610bf3838284611502565b50505092915050565b600060608284031215610c0e57600080fd5b610c18606061142e565b90506000610c268484610a7a565b8252506020610c3784848301610d0a565b602083015250604082015167ffffffffffffffff811115610c5757600080fd5b610c6384828501610af1565b60408301525092915050565b600060a08284031215610c8157600080fd5b610c8b60a061142e565b90506000610c998484610a7a565b8252506020610caa84848301610a7a565b6020830152506040610cbe84828501610d0a565b604083015250606082015167ffffffffffffffff811115610cde57600080fd5b610cea84828501610bad565b6060830152506080610cfe84828501610d0a565b60808301525092915050565b8051610a7481611568565b60008060008060608587031215610d2b57600080fd5b6000610d378787610a69565b9450506020610d4887828801610b59565b935050604085013567ffffffffffffffff811115610d6557600080fd5b610d7187828801610b64565b95989497509550505050565b600080600080600060608688031215610d9557600080fd5b6000610da18888610a69565b955050602086013567ffffffffffffffff811115610dbe57600080fd5b610dca88828901610b64565b9450945050604086013567ffffffffffffffff811115610de957600080fd5b610df588828901610b64565b92509250509295509295909350565b600060208284031215610e1657600080fd5b6000610e228484610b4e565b949350505050565b600060208284031215610e3c57600080fd5b6000610e228484610d0a565b600080600080600060a08688031215610e6057600080fd5b6000610e6c8888610d0a565b9550506020610e7d88828901610d0a565b9450506040610e8e88828901610a7a565b9350506060610e9f88828901610d0a565b925050608086015167ffffffffffffffff811115610ebc57600080fd5b610ec888828901610a85565b9150509295509295909350565b6000610ee18383610f14565b505060200190565b6000610ef58383611192565b9392505050565b6000610ef583836111da565b6000610ee183836112ef565b610f1d816114b1565b82525050565b6000610f2e826114a4565b610f3881856114a8565b9350610f438361149e565b8060005b83811015610f71578151610f5b8882610ed5565b9750610f668361149e565b925050600101610f47565b509495945050505050565b6000610f87826114a4565b610f9181856114a8565b935083602082028501610fa38561149e565b8060005b85811015610fdd5784840389528151610fc08582610ee9565b9450610fcb8361149e565b60209a909a0199925050600101610fa7565b5091979650505050505050565b6000610ff5826114a4565b610fff81856114a8565b9350836020820285016110118561149e565b8060005b85811015610fdd578484038952815161102e8582610efc565b94506110398361149e565b60209a909a0199925050600101611015565b6000611056826114a4565b61106081856114a8565b935061106b8361149e565b8060005b83811015610f715781516110838882610f08565b975061108e8361149e565b92505060010161106f565b610f1d816114bc565b610f1d816114c1565b60006110b6826114a4565b6110c081856114a8565b93506110d0818560208601611502565b6110d98161152e565b9093019392505050565b610f1d816114ec565b610f1d816114f7565b60006111026032836114a8565b7f4f6e6c792074686520496e746567726174696f6e4d616e616765722063616e2081527131b0b636103a3434b990333ab731ba34b7b760711b602082015260400192915050565b60006111566027836114a8565b7f7061727365417373657473466f72416374696f6e3a205f73656c6563746f72208152661a5b9d985b1a5960ca1b602082015260400192915050565b805160009060608401906111a68582610f14565b5060208301516111b960208601826112ef565b50604083015184820360408601526111d18282610fea565b95945050505050565b805160009060a08401906111ee8582610f14565b5060208301516112016020860182610f14565b50604083015161121460408601826112ef565b506060830151848203606086015261122c82826110ab565b915050608083015161124160808601826112ef565b509392505050565b805160009061010084019061125e8582610f14565b50602083015161127160208601826112ef565b50604083015161128460408601826112ef565b50606083015161129760608601826112ef565b5060808301516112aa6080860182610f14565b5060a083015184820360a08601526112c282826110ab565b91505060c08301516112d760c0860182611099565b5060e083015184820360e08601526111d18282610f7c565b610f1d816114e9565b60208101610a748284610f14565b604081016113148285610f14565b610ef56020830184610f14565b6040810161132f8285610f14565b610ef560208301846110ec565b6040810161134a8285610f14565b610ef560208301846112ef565b60208101610a7482846110a2565b60a0810161137382886110e3565b81810360208301526113858187610f23565b90508181036040830152611399818661104b565b905081810360608301526113ad8185610f23565b905081810360808301526113c1818461104b565b979650505050505050565b60208082528101610ef581846110ab565b604080825281016113ee81856110ab565b9050610ef560208301846112ef565b60208082528101610a74816110f5565b60208082528101610a7481611149565b60208082528101610ef58184611249565b60405181810167ffffffffffffffff8111828210171561144d57600080fd5b604052919050565b600067ffffffffffffffff82111561146c57600080fd5b5060209081020190565b600067ffffffffffffffff82111561148d57600080fd5b506020601f91909101601f19160190565b60200190565b5190565b90815260200190565b6000610a74826114dd565b151590565b6001600160e01b03191690565b806114d881611538565b919050565b6001600160a01b031690565b90565b6000610a74826114ce565b6000610a74826114e9565b60005b8381101561151d578181015183820152602001611505565b8381111561095a5750506000910152565b601f01601f191690565b600381106109ec57fe5b61154b816114b1565b81146109ec57600080fd5b61154b816114bc565b61154b816114c1565b61154b816114e956fe5f5f617070726f766541737365744d617841734e65656465643a6265666f726520617070726f76655f5f617070726f766541737365744d617841734e65656465643a617070726f76656420335f5f617070726f766541737365744d617841734e65656465643a617070726f76656420325f5f617070726f766541737365744d617841734e65656465643a616c6c6f77616e63653a25645f5f617070726f766541737365744d617841734e65656465643a617070726f7665642031a2646970667358221220ab20aa4f4aceccf3dd35eba3049502880255545f6f0a95f0c1c582f0c6d3f5e364736f6c634300060c0033';
}

// prettier-ignore
export const ParaSwapV4Adapter = contract<ParaSwapV4Adapter, ParaSwapV4AdapterArgs>(ParaSwapV4AdapterBytecode)`
  constructor(address _integrationManager, address _augustusSwapper, address _tokenTransferProxy)
  function CLAIM_REWARDS_SELECTOR() view returns (bytes4)
  function LEND_AND_STAKE_SELECTOR() view returns (bytes4)
  function LEND_SELECTOR() view returns (bytes4)
  function REDEEM_SELECTOR() view returns (bytes4)
  function STAKE_SELECTOR() view returns (bytes4)
  function TAKE_ORDER_SELECTOR() view returns (bytes4)
  function UNSTAKE_AND_REDEEM_SELECTOR() view returns (bytes4)
  function UNSTAKE_SELECTOR() view returns (bytes4)
  function getIntegrationManager() view returns (address integrationManager_)
  function getParaSwapV4AugustusSwapper() view returns (address augustusSwapper_)
  function getParaSwapV4TokenTransferProxy() view returns (address tokenTransferProxy_)
  function parseAssetsForAction(address, bytes4 _selector, bytes _actionData) view returns (uint8 spendAssetsHandleType_, address[] spendAssets_, uint256[] spendAssetAmounts_, address[] incomingAssets_, uint256[] minIncomingAssetAmounts_)
  function takeOrder(address _vaultProxy, bytes _actionData, bytes)
`;