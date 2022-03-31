/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

export type UniswapV3AdapterArgs = [_integrationManager: AddressLike, _router: AddressLike];

// prettier-ignore
export interface UniswapV3Adapter extends Contract<UniswapV3Adapter> {
  CLAIM_REWARDS_SELECTOR: Call<() => string, UniswapV3Adapter>
  LEND_AND_STAKE_SELECTOR: Call<() => string, UniswapV3Adapter>
  LEND_SELECTOR: Call<() => string, UniswapV3Adapter>
  REDEEM_SELECTOR: Call<() => string, UniswapV3Adapter>
  STAKE_SELECTOR: Call<() => string, UniswapV3Adapter>
  TAKE_ORDER_SELECTOR: Call<() => string, UniswapV3Adapter>
  UNSTAKE_AND_REDEEM_SELECTOR: Call<() => string, UniswapV3Adapter>
  UNSTAKE_SELECTOR: Call<() => string, UniswapV3Adapter>
  getIntegrationManager: Call<() => string, UniswapV3Adapter>
  getUniswapV3Router: Call<() => string, UniswapV3Adapter>
  parseAssetsForAction: Call<(arg0: AddressLike, _selector: BytesLike, _actionData: BytesLike) => { spendAssetsHandleType_: BigNumber, spendAssets_: string[], spendAssetAmounts_: BigNumber[], incomingAssets_: string[], minIncomingAssetAmounts_: BigNumber[] }, UniswapV3Adapter>
  takeOrder: Send<(_vaultProxy: AddressLike, _actionData: BytesLike, arg2: BytesLike) => void, UniswapV3Adapter>
}

let UniswapV3AdapterBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  UniswapV3AdapterBytecode =
    '0x60c06040523480156200001157600080fd5b506040516200162c3803806200162c833981016040819052620000349162000066565b6001600160601b0319606092831b8116608052911b1660a052620000d1565b80516200006081620000b7565b92915050565b600080604083850312156200007a57600080fd5b600062000088858562000053565b92505060206200009b8582860162000053565b9150509250929050565b60006001600160a01b03821662000060565b620000c281620000a5565b8114620000ce57600080fd5b50565b60805160601c60a05160601c6115226200010a6000398061031952806105cb52806106da525080610170528061054252506115226000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063863e5ad011610071578063863e5ad01461010c578063b23228cf14610114578063b9e3de441461011c578063c54efee514610131578063e7c4569014610155578063f7d882b51461015d576100b4565b806303e38a2b146100b9578063080456c1146100ce578063131461c0146100ec578063257cb1a3146100f45780633ffc1591146100fc57806340da225d14610104575b600080fd5b6100cc6100c7366004610c92565b610165565b005b6100d661021b565b6040516100e391906111e7565b60405180910390f35b6100d661023f565b6100d6610263565b6100d6610287565b6100d66102ab565b6100d66102cf565b6100d66102f3565b610124610317565b6040516100e39190611181565b61014461013f366004610c2a565b61033b565b6040516100e39594939291906111f5565b610124610540565b6100d6610564565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146101b65760405162461bcd60e51b81526004016101ad906112ad565b60405180910390fd5b6060806000806101fb88888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061058892505050565b935093509350935061021089858585856105b1565b505050505050505050565b7f8334eb99be0145865eba9889fca2ee920288090caefff4cc776038e20ad9259a81565b7f29fa046e79524c3c5ac4c01df692c35e217802b2b13b21121b76cf0ef02b138c81565b7f099f75155f0e997bf83a7993a71d5e7e7540bd386fe1e84643a09ce6b412521981565b7ffa7dd04da627f433da73c4355ead9c75682a67a8fc84d3f6170ef0922f402d2481565b7fb9dfbaccbe5cd2a84fdcf1d15f23ef25d23086f5afbaa99516065ed4a5bbc7a381565b7f03e38a2bd7063d45c897edeafc330e71657502dd86434d3c37a489caf116af6981565b7f68e30677f607df46e87da13e15b637784cfa62374b653f35ab43d10361a2f83081565b7f000000000000000000000000000000000000000000000000000000000000000090565b600060608080806001600160e01b031988166303e38a2b60e01b146103725760405162461bcd60e51b81526004016101ad906112bd565b6060806000806103b78b8b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061058892505050565b93509350935093506002845110156103e15760405162461bcd60e51b81526004016101ad9061129d565b82516001018451146104055760405162461bcd60e51b81526004016101ad9061128d565b60408051600180825281830190925290602080830190803683370190505097508360008151811061043257fe5b60200260200101518860008151811061044757fe5b6001600160a01b0392909216602092830291909101820152604080516001808252818301909252918281019080368337019050509650818760008151811061048b57fe5b602090810291909101015260408051600180825281830190925290816020016020820280368337019050509550836001855103815181106104c857fe5b6020026020010151866000815181106104dd57fe5b6001600160a01b0392909216602092830291909101820152604080516001808252818301909252918281019080368337019050509450808560008151811061052157fe5b6020026020010181815250506002985050505050945094509450945094565b7f000000000000000000000000000000000000000000000000000000000000000090565b7fc29fa9dde84204c2908778afd0613d802d31cf046179b88f6d2b4a4e507ea2d581565b606080600080848060200190518101906105a29190610d19565b93509350935093509193509193565b6105f0846000815181106105c157fe5b60200260200101517f000000000000000000000000000000000000000000000000000000000000000084610780565b606060005b855181101561069a576001865103811461065a578186828151811061061657fe5b602002602001015186838151811061062a57fe5b60200260200101516040516020016106449392919061114e565b6040516020818303038152906040529150610692565b8186828151811061066757fe5b602002602001015160405160200161068092919061112c565b60405160208183030381529060405291505b6001016105f5565b506106a3610a72565b6040518060a00160405280838152602001886001600160a01b031681526020014260010181526020018581526020018481525090507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c04b8d59826040518263ffffffff1660e01b815260040161072491906112cd565b602060405180830381600087803b15801561073e57600080fd5b505af1158015610752573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107769190610dcf565b5050505050505050565b604051636eb1769f60e11b81526000906001600160a01b0385169063dd62ed3e906107b1903090879060040161118f565b60206040518083038186803b1580156107c957600080fd5b505afa1580156107dd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108019190610dcf565b90506108256040518060600160405280602681526020016114a360269139826109c2565b8181101561099b5761084e60405180606001604052806028815260200161143360289139610a0b565b80156108f75760405163095ea7b360e01b81526001600160a01b0385169063095ea7b3906108839086906000906004016111b1565b602060405180830381600087803b15801561089d57600080fd5b505af11580156108b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108d59190610da9565b506108f76040518060600160405280602481526020016114c960249139610a0b565b60405163095ea7b360e01b81526001600160a01b0385169063095ea7b390610927908690600019906004016111cc565b602060405180830381600087803b15801561094157600080fd5b505af1158015610955573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109799190610da9565b5061099b60405180606001604052806024815260200161147f60249139610a0b565b6109bc60405180606001604052806024815260200161145b60249139610a0b565b50505050565b610a0782826040516024016109d892919061126d565b60408051601f198184030181529190526020810180516001600160e01b03166309710a9d60e41b179052610a51565b5050565b610a4e81604051602401610a1f919061125c565b60408051601f198184030181529190526020810180516001600160e01b031663104c13eb60e21b179052610a51565b50565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b6040518060a001604052806060815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b8035610ab5816113fa565b92915050565b8051610ab5816113fa565b600082601f830112610ad757600080fd5b8151610aea610ae582611305565b6112de565b91508181835260208401935060208101905083856020840282011115610b0f57600080fd5b60005b83811015610b3b5781610b258882610abb565b8452506020928301929190910190600101610b12565b5050505092915050565b600082601f830112610b5657600080fd5b8151610b64610ae582611305565b91508181835260208401935060208101905083856020840282011115610b8957600080fd5b60005b83811015610b3b5781610b9f8882610c14565b8452506020928301929190910190600101610b8c565b8051610ab58161140e565b8035610ab581611417565b60008083601f840112610bdd57600080fd5b50813567ffffffffffffffff811115610bf557600080fd5b602083019150836001820283011115610c0d57600080fd5b9250929050565b8051610ab581611420565b8051610ab581611429565b60008060008060608587031215610c4057600080fd5b6000610c4c8787610aaa565b9450506020610c5d87828801610bc0565b935050604085013567ffffffffffffffff811115610c7a57600080fd5b610c8687828801610bcb565b95989497509550505050565b600080600080600060608688031215610caa57600080fd5b6000610cb68888610aaa565b955050602086013567ffffffffffffffff811115610cd357600080fd5b610cdf88828901610bcb565b9450945050604086013567ffffffffffffffff811115610cfe57600080fd5b610d0a88828901610bcb565b92509250509295509295909350565b60008060008060808587031215610d2f57600080fd5b845167ffffffffffffffff811115610d4657600080fd5b610d5287828801610ac6565b945050602085015167ffffffffffffffff811115610d6f57600080fd5b610d7b87828801610b45565b9350506040610d8c87828801610c1f565b9250506060610d9d87828801610c1f565b91505092959194509250565b600060208284031215610dbb57600080fd5b6000610dc78484610bb5565b949350505050565b600060208284031215610de157600080fd5b6000610dc78484610c1f565b6000610df98383610e0d565b505060200190565b6000610df98383611123565b610e168161133e565b82525050565b610e16610e288261133e565b6113be565b6000610e388261132c565b610e428185611330565b9350610e4d83611326565b8060005b83811015610e7b578151610e658882610ded565b9750610e7083611326565b925050600101610e51565b509495945050505050565b6000610e918261132c565b610e9b8185611330565b9350610ea683611326565b8060005b83811015610e7b578151610ebe8882610e01565b9750610ec983611326565b925050600101610eaa565b610e168161134e565b6000610ee88261132c565b610ef28185611330565b9350610f02818560208601611392565b610f0b816113da565b9093019392505050565b6000610f208261132c565b610f2a8185611339565b9350610f3a818560208601611392565b9290920192915050565b610e168161137c565b610e1681611387565b6000610f63604083611330565b7f7061727365417373657473466f72416374696f6e3a20696e636f72726563742081527f70617468416464726573736573206f72207061746846656573206c656e677468602082015260400192915050565b6000610fc2603083611330565b7f7061727365417373657473466f72416374696f6e3a207061746841646472657381526f39b2b99036bab9ba103132901f1e901960811b602082015260400192915050565b6000611014603283611330565b7f4f6e6c792074686520496e746567726174696f6e4d616e616765722063616e2081527131b0b636103a3434b990333ab731ba34b7b760711b602082015260400192915050565b6000611068602783611330565b7f7061727365417373657473466f72416374696f6e3a205f73656c6563746f72208152661a5b9d985b1a5960ca1b602082015260400192915050565b805160a0808452600091908401906110bc8282610edd565b91505060208301516110d16020860182610e0d565b5060408301516110e46040860182611123565b5060608301516110f76060860182611123565b50608083015161110a6080860182611123565b509392505050565b610e1661111e82611371565b6113cf565b610e1681611379565b60006111388285610f15565b91506111448284610e1c565b5060140192915050565b600061115a8286610f15565b91506111668285610e1c565b6014820191506111768284611112565b506003019392505050565b60208101610ab58284610e0d565b6040810161119d8285610e0d565b6111aa6020830184610e0d565b9392505050565b604081016111bf8285610e0d565b6111aa6020830184610f4d565b604081016111da8285610e0d565b6111aa6020830184611123565b60208101610ab58284610ed4565b60a081016112038288610f44565b81810360208301526112158187610e2d565b905081810360408301526112298186610e86565b9050818103606083015261123d8185610e2d565b905081810360808301526112518184610e86565b979650505050505050565b602080825281016111aa8184610edd565b6040808252810161127e8185610edd565b90506111aa6020830184611123565b60208082528101610ab581610f56565b60208082528101610ab581610fb5565b60208082528101610ab581611007565b60208082528101610ab58161105b565b602080825281016111aa81846110a4565b60405181810167ffffffffffffffff811182821017156112fd57600080fd5b604052919050565b600067ffffffffffffffff82111561131c57600080fd5b5060209081020190565b60200190565b5190565b90815260200190565b919050565b6000610ab582611365565b151590565b6001600160e01b03191690565b80611339816113f0565b6001600160a01b031690565b62ffffff1690565b90565b6000610ab58261135b565b6000610ab582611379565b60005b838110156113ad578181015183820152602001611395565b838111156109bc5750506000910152565b6000610ab5826000610ab5826113ea565b6000610ab5826113e4565b601f01601f191690565b60e81b90565b60601b90565b60038110610a4e57fe5b6114038161133e565b8114610a4e57600080fd5b61140381611349565b6114038161134e565b61140381611371565b6114038161137956fe5f5f617070726f766541737365744d617841734e65656465643a6265666f726520617070726f76655f5f617070726f766541737365744d617841734e65656465643a617070726f76656420335f5f617070726f766541737365744d617841734e65656465643a617070726f76656420325f5f617070726f766541737365744d617841734e65656465643a616c6c6f77616e63653a25645f5f617070726f766541737365744d617841734e65656465643a617070726f7665642031a2646970667358221220901248d1a01ce1444ae0f6597a8733225fc1d2ea714ed20cd7cd64ff16d70f2b64736f6c634300060c0033';
}

// prettier-ignore
export const UniswapV3Adapter = contract<UniswapV3Adapter, UniswapV3AdapterArgs>(UniswapV3AdapterBytecode)`
  constructor(address _integrationManager, address _router)
  function CLAIM_REWARDS_SELECTOR() view returns (bytes4)
  function LEND_AND_STAKE_SELECTOR() view returns (bytes4)
  function LEND_SELECTOR() view returns (bytes4)
  function REDEEM_SELECTOR() view returns (bytes4)
  function STAKE_SELECTOR() view returns (bytes4)
  function TAKE_ORDER_SELECTOR() view returns (bytes4)
  function UNSTAKE_AND_REDEEM_SELECTOR() view returns (bytes4)
  function UNSTAKE_SELECTOR() view returns (bytes4)
  function getIntegrationManager() view returns (address integrationManager_)
  function getUniswapV3Router() view returns (address router_)
  function parseAssetsForAction(address, bytes4 _selector, bytes _actionData) view returns (uint8 spendAssetsHandleType_, address[] spendAssets_, uint256[] spendAssetAmounts_, address[] incomingAssets_, uint256[] minIncomingAssetAmounts_)
  function takeOrder(address _vaultProxy, bytes _actionData, bytes)
`;
