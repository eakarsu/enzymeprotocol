/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

export type OnlyUntrackDustOrPricelessAssetsPolicyArgs = [
  _policyManager: AddressLike,
  _fundDeployer: AddressLike,
  _valueInterpreter: AddressLike,
  _wethToken: AddressLike,
  _pricelessAssetBypassTimelock: BigNumberish,
  _pricelessAssetBypassTimeLimit: BigNumberish,
];

// prettier-ignore
export interface OnlyUntrackDustOrPricelessAssetsPolicy extends Contract<OnlyUntrackDustOrPricelessAssetsPolicy> {
  activateForFund: Send<(arg0: AddressLike) => void, OnlyUntrackDustOrPricelessAssetsPolicy>
  addFundSettings: Send<(arg0: AddressLike, arg1: BytesLike) => void, OnlyUntrackDustOrPricelessAssetsPolicy>
  assetIsBypassableForFund: Call<(_comptrollerProxy: AddressLike, _asset: AddressLike) => boolean, OnlyUntrackDustOrPricelessAssetsPolicy>
  canDisable: Call<() => boolean, OnlyUntrackDustOrPricelessAssetsPolicy>
  getAssetBypassWindowStartForFund: Call<(_comptrollerProxy: AddressLike, _asset: AddressLike) => BigNumber, OnlyUntrackDustOrPricelessAssetsPolicy>
  getDustToleranceInWeth: Call<() => BigNumber, OnlyUntrackDustOrPricelessAssetsPolicy>
  getFundDeployer: Call<() => string, OnlyUntrackDustOrPricelessAssetsPolicy>
  getOwner: Call<() => string, OnlyUntrackDustOrPricelessAssetsPolicy>
  getPolicyManager: Call<() => string, OnlyUntrackDustOrPricelessAssetsPolicy>
  getPricelessAssetBypassTimeLimit: Call<() => BigNumber, OnlyUntrackDustOrPricelessAssetsPolicy>
  getPricelessAssetBypassTimelock: Call<() => BigNumber, OnlyUntrackDustOrPricelessAssetsPolicy>
  getPricelessAssetBypassValueInterpreter: Call<() => string, OnlyUntrackDustOrPricelessAssetsPolicy>
  getPricelessAssetBypassWethToken: Call<() => string, OnlyUntrackDustOrPricelessAssetsPolicy>
  identifier: Call<() => string, OnlyUntrackDustOrPricelessAssetsPolicy>
  implementedHooks: Call<() => BigNumber[], OnlyUntrackDustOrPricelessAssetsPolicy>
  setDustToleranceInWeth: Send<(_nextDustToleranceInWeth: BigNumberish) => void, OnlyUntrackDustOrPricelessAssetsPolicy>
  startAssetBypassTimelock: Send<(_asset: AddressLike) => void, OnlyUntrackDustOrPricelessAssetsPolicy>
  updateFundSettings: Send<(arg0: AddressLike, arg1: BytesLike) => void, OnlyUntrackDustOrPricelessAssetsPolicy>
  validateRule: Send<(_comptrollerProxy: AddressLike, arg1: BigNumberish, _encodedArgs: BytesLike) => boolean, OnlyUntrackDustOrPricelessAssetsPolicy>
}

let OnlyUntrackDustOrPricelessAssetsPolicyBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  OnlyUntrackDustOrPricelessAssetsPolicyBytecode =
    '0x61014060405234801561001157600080fd5b506040516112bd3803806112bd833981810160405260c081101561003457600080fd5b5080516020820151604083015160608085015160808087015160a0978801516001600160601b031988861b811690935286851b831690985260c081905260e088905284841b8216610100529282901b16610120526001600160a01b039485169593851694919392821691166111da6100e36000398061082e525080610773525080610ade525080610852525080610b3b5280610be35280610c0a5250806108815280610c8852506111da6000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c806358bfdfee116100ad578063893d20e811610071578063893d20e81461043857806397c0ac8714610440578063cbf54bb214610448578063ceb9a0ad146104a0578063d44ad6cb146104c657610121565b806358bfdfee1461034f5780635da4cdb2146103575780637998a1c4146103855780637fe292681461040257806385d63ec91461040a57610121565b80631ef92578116100f45780631ef925781461026e578063219ea7bf1461028a578063234dfb17146102a757806344105398146102af578063579be718146102c957610121565b806307d2890e146101265780630d4d75101461014e5780630f5f6b4f146101cc57806314f8e6151461024a575b600080fd5b61014c6004803603602081101561013c57600080fd5b50356001600160a01b03166104ce565b005b61014c6004803603604081101561016457600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561018e57600080fd5b8201836020820111156101a057600080fd5b803590602001918460018302840111600160201b831117156101c157600080fd5b509092509050610735565b61014c600480360360408110156101e257600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561020c57600080fd5b82018360208201111561021e57600080fd5b803590602001918460018302840111600160201b8311171561023f57600080fd5b50909250905061076c565b610252610771565b604080516001600160a01b039092168252519081900360200190f35b610276610795565b604080519115158252519081900360200190f35b61014c600480360360208110156102a057600080fd5b503561079a565b61025261082c565b6102b7610850565b60408051918252519081900360200190f35b610276600480360360608110156102df57600080fd5b6001600160a01b038235169160ff60208201351691810190606081016040820135600160201b81111561031157600080fd5b82018360208201111561032357600080fd5b803590602001918460018302840111600160201b8311171561034457600080fd5b509092509050610874565b6102b7610a8b565b6102b76004803603604081101561036d57600080fd5b506001600160a01b0381358116916020013516610a91565b61038d610abc565b6040805160208082528351818301528351919283929083019185019080838360005b838110156103c75781810151838201526020016103af565b50505050905090810190601f1680156103f45780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102b7610adc565b6102766004803603604081101561042057600080fd5b506001600160a01b0381358116916020013516610b00565b610252610b37565b610252610bc3565b610450610c2c565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561048c578181015183820152602001610474565b505050509050019250505060405180910390f35b61014c600480360360208110156104b657600080fd5b50356001600160a01b0316610c83565b610252610c86565b6000336001600160a01b0316635a53e3486040518163ffffffff1660e01b815260040160206040518083038186803b15801561050957600080fd5b505afa15801561051d573d6000803e3d6000fd5b505050506040513d602081101561053357600080fd5b50516040805163c980918760e01b815290519192506001600160a01b0383169163c980918791600480820192602092909190829003018186803b15801561057957600080fd5b505afa15801561058d573d6000803e3d6000fd5b505050506040513d60208110156105a357600080fd5b50516001600160a01b031633146105eb5760405162461bcd60e51b81526004018080602001828103825260598152602001806111276059913960600191505060405180910390fd5b6105f3610771565b6001600160a01b0316634c67e10683600161060c61082c565b6040518463ffffffff1660e01b815260040180846001600160a01b03168152602001838152602001826001600160a01b031681526020019350505050602060405180830381600087803b15801561066257600080fd5b505af192505050801561068757506040513d602081101561068257600080fd5b505160015b6106f95761069d610696610850565b4290610caa565b6001600160a01b03808316600081815260016020908152604080832094881680845294909152808220949094559251919290917f76fadd0d061c0fa0e079ec4814cecf7f5f6f43e604f241551dd35b6c3c9a69809190a3610731565b5060405162461bcd60e51b815260040180806020018281038252602b815260200180611060602b913960400191505060405180910390fd5b5050565b60405162461bcd60e51b81526004018080602001828103825260378152602001806110296037913960400191505060405180910390fd5b505050565b7f000000000000000000000000000000000000000000000000000000000000000090565b600090565b6107a2610b37565b6001600160a01b0316336001600160a01b0316146107f15760405162461bcd60e51b8152600401808060200182810382526049815260200180610fe06049913960600191505060405180910390fd5b60008190556040805182815290517ff02a8605888227ce9f14ab97539fc9aed32996f83d13befc980676da2549969b9181900360200190a150565b7f000000000000000000000000000000000000000000000000000000000000000090565b7f000000000000000000000000000000000000000000000000000000000000000090565b6000336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146108dd5760405162461bcd60e51b81526004018080602001828103825260298152602001806110b46029913960400191505060405180910390fd5b606061091e84848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610d0b92505050565b9150506000866001600160a01b031663c98091876040518163ffffffff1660e01b815260040160206040518083038186803b15801561095c57600080fd5b505afa158015610970573d6000803e3d6000fd5b505050506040513d602081101561098657600080fd5b5051905060005b8251811015610a7b5760008382815181106109a457fe5b60200260200101516001600160a01b03166370a08231846040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156109f857600080fd5b505afa158015610a0c573d6000803e3d6000fd5b505050506040513d6020811015610a2257600080fd5b50518451909150600090610a54908b90879086908110610a3e57fe5b602002602001015184610a4f61082c565b610dbe565b9050610a5f81610ef4565b610a7157600095505050505050610a83565b505060010161098d565b506001925050505b949350505050565b60005490565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b606060405180606001604052806025815260200161118060259139905090565b7f000000000000000000000000000000000000000000000000000000000000000090565b600080610b0d8484610a91565b9050428111158015610a83575042610b2d610b26610adc565b8390610caa565b1015949350505050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663893d20e86040518163ffffffff1660e01b815260040160206040518083038186803b158015610b9257600080fd5b505afa158015610ba6573d6000803e3d6000fd5b505050506040513d6020811015610bbc57600080fd5b5051905090565b6000610c0760405180606001604052806029815260200161108b602991397f0000000000000000000000000000000000000000000000000000000000000000610f07565b507f000000000000000000000000000000000000000000000000000000000000000090565b60408051600180825281830190925260609160208083019080368337019050509050600581600081518110610c5d57fe5b60200260200101906009811115610c7057fe5b90816009811115610c7d57fe5b90525090565b50565b7f000000000000000000000000000000000000000000000000000000000000000090565b600082820183811015610d04576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b60006060828060200190516040811015610d2457600080fd5b815160208301805160405192949293830192919084600160201b821115610d4a57600080fd5b908301906020820185811115610d5f57600080fd5b82518660208202830111600160201b82111715610d7b57600080fd5b82525081516020918201928201910280838360005b83811015610da8578181015183820152602001610d90565b5050505090500160405250505091509150915091565b6000610dc8610771565b6001600160a01b0316634c67e1068585856040518463ffffffff1660e01b815260040180846001600160a01b03168152602001838152602001826001600160a01b031681526020019350505050602060405180830381600087803b158015610e2f57600080fd5b505af1925050508015610e5457506040513d6020811015610e4f57600080fd5b505160015b610ee257610e628585610b00565b610e9d5760405162461bcd60e51b815260040180806020018281038252604a8152602001806110dd604a913960600191505060405180910390fd5b836001600160a01b0316856001600160a01b03167fa2de3d3e85d58ec3c62bcbd0a67a60fac9f9002f6e70cfe768a49fa19d7dcf4660405160405180910390a3610ee9565b9050610a83565b506000949350505050565b6000610efe610a8b565b90911115919050565b61073182826040516024018080602001836001600160a01b03168152602001828103825284818151815260200191508051906020019080838360005b83811015610f5b578181015183820152602001610f43565b50505050905090810190601f168015610f885780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b031663319af33360e01b1790529350610fbe92505050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa505050505056fe6f6e6c7946756e644465706c6f7965724f776e65723a204f6e6c79207468652046756e644465706c6f796572206f776e65722063616e2063616c6c20746869732066756e6374696f6e75706461746546756e6453657474696e67733a2055706461746573206e6f7420616c6c6f77656420666f72207468697320706f6c6963797374617274417373657442797061737354696d656c6f636b3a20417373657420686173206120707269636546756e644465706c6f7965724f776e65724d6978696e3a67657446756e644465706c6f7965723a25734f6e6c792074686520506f6c6963794d616e616765722063616e206d616b6520746869732063616c6c5f5f63616c6356616c75654578636c7564696e6742797061737361626c6550726963656c65737341737365743a20496e76616c6964206173736574206e6f742062797061737361626c657374617274417373657442797061737354696d656c6f636b3a2053656e646572206973206e6f7420746865205661756c7450726f7879206f6620746865206173736f63696174656420436f6d7074726f6c6c657250726f78794f4e4c595f554e545241434b5f445553545f4f525f50524943454c4553535f415353455453a264697066735822122071e8fe02b758b02d4f98767badf55802f0a68b035418726300cdcfc99598753464736f6c634300060c0033';
}

// prettier-ignore
export const OnlyUntrackDustOrPricelessAssetsPolicy = contract<OnlyUntrackDustOrPricelessAssetsPolicy, OnlyUntrackDustOrPricelessAssetsPolicyArgs>(OnlyUntrackDustOrPricelessAssetsPolicyBytecode)`
  constructor(address _policyManager, address _fundDeployer, address _valueInterpreter, address _wethToken, uint256 _pricelessAssetBypassTimelock, uint256 _pricelessAssetBypassTimeLimit)
  event DustToleranceInWethSet(uint256 nextDustToleranceInWeth)
  event PricelessAssetBypassed(address indexed comptrollerProxy, address indexed asset)
  event PricelessAssetTimelockStarted(address indexed comptrollerProxy, address indexed asset)
  function activateForFund(address)
  function addFundSettings(address, bytes)
  function assetIsBypassableForFund(address _comptrollerProxy, address _asset) view returns (bool isBypassable_)
  function canDisable() pure returns (bool canDisable_)
  function getAssetBypassWindowStartForFund(address _comptrollerProxy, address _asset) view returns (uint256 windowStart_)
  function getDustToleranceInWeth() view returns (uint256 dustToleranceInWeth_)
  function getFundDeployer() view returns (address fundDeployer_)
  function getOwner() view returns (address owner_)
  function getPolicyManager() view returns (address policyManager_)
  function getPricelessAssetBypassTimeLimit() view returns (uint256 timeLimit_)
  function getPricelessAssetBypassTimelock() view returns (uint256 timelock_)
  function getPricelessAssetBypassValueInterpreter() view returns (address valueInterpreter_)
  function getPricelessAssetBypassWethToken() view returns (address wethToken_)
  function identifier() pure returns (string identifier_)
  function implementedHooks() pure returns (uint8[] implementedHooks_)
  function setDustToleranceInWeth(uint256 _nextDustToleranceInWeth)
  function startAssetBypassTimelock(address _asset)
  function updateFundSettings(address, bytes)
  function validateRule(address _comptrollerProxy, uint8, bytes _encodedArgs) returns (bool isValid_)
`;
