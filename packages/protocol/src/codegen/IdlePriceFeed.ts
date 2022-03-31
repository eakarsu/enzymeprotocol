/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

export type IdlePriceFeedArgs = [_fundDeployer: AddressLike];

// prettier-ignore
export interface IdlePriceFeed extends Contract<IdlePriceFeed> {
  addDerivatives: Send<(_derivatives: AddressLike[], _underlyings: AddressLike[]) => void, IdlePriceFeed>
  calcUnderlyingValues: Send<(_derivative: AddressLike, _derivativeAmount: BigNumberish) => { underlyings_: string[], underlyingAmounts_: BigNumber[] }, IdlePriceFeed>
  getFundDeployer: Call<() => string, IdlePriceFeed>
  getOwner: Call<() => string, IdlePriceFeed>
  getUnderlyingForDerivative: Call<(_derivative: AddressLike) => string, IdlePriceFeed>
  isSupportedAsset: Call<(_asset: AddressLike) => boolean, IdlePriceFeed>
  removeDerivatives: Send<(_derivatives: AddressLike[]) => void, IdlePriceFeed>
}

let IdlePriceFeedBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  IdlePriceFeedBytecode =
    '0x60a060405234801561001057600080fd5b506040516110d43803806110d48339818101604052602081101561003357600080fd5b5051606081901b6001600160601b0319166080526001600160a01b03166110636100716000398061091f5280610b825280610ba952506110636000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063893d20e81161005b578063893d20e8146102b25780638f72b136146102ba57806397c0ac871461035d5780639be918e6146103655761007d565b806339cbb63c1461008257806366adb867146101ab578063727212f6146101ed575b600080fd5b6101a96004803603604081101561009857600080fd5b8101906020810181356401000000008111156100b357600080fd5b8201836020820111156100c557600080fd5b803590602001918460208302840111640100000000831117156100e757600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929594936020810193503591505064010000000081111561013757600080fd5b82018360208201111561014957600080fd5b8035906020019184602083028401116401000000008311171561016b57600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092955061039f945050505050565b005b6101d1600480360360208110156101c157600080fd5b50356001600160a01b031661077b565b604080516001600160a01b039092168252519081900360200190f35b6102196004803603604081101561020357600080fd5b506001600160a01b038135169060200135610799565b604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b8381101561025d578181015183820152602001610245565b50505050905001838103825284818151815260200191508051906020019060200280838360005b8381101561029c578181015183820152602001610284565b5050505090500194505050505060405180910390f35b6101d161091b565b6101a9600480360360208110156102d057600080fd5b8101906020810181356401000000008111156102eb57600080fd5b8201836020820111156102fd57600080fd5b8035906020019184602083028401116401000000008311171561031f57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506109a7945050505050565b6101d1610b62565b61038b6004803603602081101561037b57600080fd5b50356001600160a01b0316610bcb565b604080519115158252519081900360200190f35b6103a761091b565b6001600160a01b0316336001600160a01b0316146103f65760405162461bcd60e51b8152600401808060200182810382526049815260200180610e586049913960600191505060405180910390fd5b60008251116104365760405162461bcd60e51b8152600401808060200182810382526022815260200180610fe06022913960400191505060405180910390fd5b805182511461048c576040805162461bcd60e51b815260206004820152601e60248201527f61646444657269766174697665733a20556e657175616c206172726179730000604482015290519081900360640190fd5b60005b82518110156107765760006001600160a01b03168382815181106104af57fe5b60200260200101516001600160a01b03161415610513576040805162461bcd60e51b815260206004820181905260248201527f61646444657269766174697665733a20456d7074792064657269766174697665604482015290519081900360640190fd5b60006001600160a01b031682828151811061052a57fe5b60200260200101516001600160a01b0316141561058e576040805162461bcd60e51b815260206004820181905260248201527f61646444657269766174697665733a20456d70747920756e6465726c79696e67604482015290519081900360640190fd5b60006001600160a01b03166105b58483815181106105a857fe5b602002602001015161077b565b6001600160a01b0316146105fa5760405162461bcd60e51b8152600401808060200182810382526021815260200180610ea16021913960400191505060405180910390fd5b61062f604051806060016040528060378152602001610f886037913984838151811061062257fe5b6020026020010151610be8565b610657604051806060016040528060378152602001610ec26037913983838151811061062257fe5b610678604051806060016040528060398152602001610f4f60399139610c9f565b81818151811061068457fe5b602002602001015160008085848151811061069b57fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b031602179055506107086040518060600160405280602d8152602001610f22602d9139610c9f565b81818151811061071457fe5b60200260200101516001600160a01b031683828151811061073157fe5b60200260200101516001600160a01b03167faa4ae250fb435bb4b31ed0b95822bc179fc6c5dd0c727c3ffe08d444025efd9860405160405180910390a360010161048f565b505050565b6001600160a01b039081166000908152602081905260409020541690565b604080516001808252818301909252606091829190602080830190803683370190505091506107c78461077b565b826000815181106107d457fe5b60200260200101906001600160a01b031690816001600160a01b03168152505060006001600160a01b03168260008151811061080c57fe5b60200260200101516001600160a01b0316141561085a5760405162461bcd60e51b815260040180806020018281038252602c815260200180611002602c913960400191505060405180910390fd5b60408051600180825281830190925290602080830190803683370190505090506108fb670de0b6b3a76400006108f5866001600160a01b0316637ff9b5966040518163ffffffff1660e01b815260040160206040518083038186803b1580156108c257600080fd5b505afa1580156108d6573d6000803e3d6000fd5b505050506040513d60208110156108ec57600080fd5b50518690610d48565b90610daa565b8160008151811061090857fe5b6020026020010181815250509250929050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663893d20e86040518163ffffffff1660e01b815260040160206040518083038186803b15801561097657600080fd5b505afa15801561098a573d6000803e3d6000fd5b505050506040513d60208110156109a057600080fd5b5051905090565b6109af61091b565b6001600160a01b0316336001600160a01b0316146109fe5760405162461bcd60e51b8152600401808060200182810382526049815260200180610e586049913960600191505060405180910390fd5b6000815111610a3e5760405162461bcd60e51b8152600401808060200182810382526025815260200180610e336025913960400191505060405180910390fd5b60005b8151811015610b5e5760006001600160a01b0316610a648383815181106105a857fe5b6001600160a01b03161415610ac0576040805162461bcd60e51b815260206004820181905260248201527f72656d6f766544657269766174697665733a2056616c7565206e6f7420736574604482015290519081900360640190fd5b600080838381518110610acf57fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a8154906001600160a01b030219169055818181518110610b1957fe5b60200260200101516001600160a01b03167fc15eb25d807b570f4567baf6e97c7b26d58a7d0512dc85e8db15375a056b860460405160405180910390a2600101610a41565b5050565b6000610ba6604051806060016040528060298152602001610ef9602991397f0000000000000000000000000000000000000000000000000000000000000000610be8565b507f000000000000000000000000000000000000000000000000000000000000000090565b600080610bd78361077b565b6001600160a01b0316141592915050565b610b5e82826040516024018080602001836001600160a01b03168152602001828103825284818151815260200191508051906020019080838360005b83811015610c3c578181015183820152602001610c24565b50505050905090810190601f168015610c695780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b031663319af33360e01b1790529350610e1192505050565b610d45816040516024018080602001828103825283818151815260200191508051906020019080838360005b83811015610ce3578181015183820152602001610ccb565b50505050905090810190601f168015610d105780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b031663104c13eb60e21b1790529250610e11915050565b50565b600082610d5757506000610da4565b82820282848281610d6457fe5b0414610da15760405162461bcd60e51b8152600401808060200182810382526021815260200180610fbf6021913960400191505060405180910390fd5b90505b92915050565b6000808211610e00576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b818381610e0957fe5b049392505050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa505050505056fe72656d6f766544657269766174697665733a20456d707479205f64657269766174697665736f6e6c7946756e644465706c6f7965724f776e65723a204f6e6c79207468652046756e644465706c6f796572206f776e65722063616e2063616c6c20746869732066756e6374696f6e61646444657269766174697665733a2056616c756520616c72656164792073657453696e676c65556e6465726c79696e674465726976617469766552656769737472794d6978696e205f756e6465726c79696e67733a257346756e644465706c6f7965724f776e65724d6978696e3a67657446756e644465706c6f7965723a257353696e676c65556e6465726c79696e674465726976617469766552656769737472794d6978696e20616164656453696e676c65556e6465726c79696e674465726976617469766552656769737472794d6978696e207061737365642076616c69646174696f6e53696e676c65556e6465726c79696e674465726976617469766552656769737472794d6978696e205f64657269766174697665733a2573536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7761646444657269766174697665733a20456d707479205f646572697661746976657363616c63556e6465726c79696e6756616c7565733a20556e737570706f727465642064657269766174697665a2646970667358221220d922190b26bfd1cf52409024a416aacfc9c01c146b8592b1f69aa9e87b704a2f64736f6c634300060c0033';
}

// prettier-ignore
export const IdlePriceFeed = contract<IdlePriceFeed, IdlePriceFeedArgs>(IdlePriceFeedBytecode)`
  constructor(address _fundDeployer)
  event DerivativeAdded(address indexed derivative, address indexed underlying)
  event DerivativeRemoved(address indexed derivative)
  function addDerivatives(address[] _derivatives, address[] _underlyings)
  function calcUnderlyingValues(address _derivative, uint256 _derivativeAmount) returns (address[] underlyings_, uint256[] underlyingAmounts_)
  function getFundDeployer() view returns (address fundDeployer_)
  function getOwner() view returns (address owner_)
  function getUnderlyingForDerivative(address _derivative) view returns (address underlying_)
  function isSupportedAsset(address _asset) view returns (bool isSupported_)
  function removeDerivatives(address[] _derivatives)
`;
