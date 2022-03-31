/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

export type TestPeggedDerivativesPriceFeedArgs = [_dispatcher: AddressLike];

// prettier-ignore
export interface TestPeggedDerivativesPriceFeed extends Contract<TestPeggedDerivativesPriceFeed> {
  addDerivatives: Send<(_derivatives: AddressLike[], _underlyings: AddressLike[]) => void, TestPeggedDerivativesPriceFeed>
  calcUnderlyingValues: Send<(_derivative: AddressLike, _derivativeAmount: BigNumberish) => { underlyings_: string[], underlyingAmounts_: BigNumber[] }, TestPeggedDerivativesPriceFeed>
  getFundDeployer: Call<() => string, TestPeggedDerivativesPriceFeed>
  getOwner: Call<() => string, TestPeggedDerivativesPriceFeed>
  getUnderlyingForDerivative: Call<(_derivative: AddressLike) => string, TestPeggedDerivativesPriceFeed>
  isSupportedAsset: Call<(_asset: AddressLike) => boolean, TestPeggedDerivativesPriceFeed>
  removeDerivatives: Send<(_derivatives: AddressLike[]) => void, TestPeggedDerivativesPriceFeed>
}

let TestPeggedDerivativesPriceFeedBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  TestPeggedDerivativesPriceFeedBytecode =
    '0x60a060405234801561001057600080fd5b50604051610f47380380610f478339818101604052602081101561003357600080fd5b5051606081901b6001600160601b0319166080526001600160a01b0316610ed6610071600039806108785280610adb5280610b025250610ed66000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063893d20e81161005b578063893d20e8146102b25780638f72b136146102ba57806397c0ac871461035d5780639be918e6146103655761007d565b806339cbb63c1461008257806366adb867146101ab578063727212f6146101ed575b600080fd5b6101a96004803603604081101561009857600080fd5b8101906020810181356401000000008111156100b357600080fd5b8201836020820111156100c557600080fd5b803590602001918460208302840111640100000000831117156100e757600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929594936020810193503591505064010000000081111561013757600080fd5b82018360208201111561014957600080fd5b8035906020019184602083028401116401000000008311171561016b57600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092955061039f945050505050565b005b6101d1600480360360208110156101c157600080fd5b50356001600160a01b031661077b565b604080516001600160a01b039092168252519081900360200190f35b6102196004803603604081101561020357600080fd5b506001600160a01b038135169060200135610799565b604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b8381101561025d578181015183820152602001610245565b50505050905001838103825284818151815260200191508051906020019060200280838360005b8381101561029c578181015183820152602001610284565b5050505090500194505050505060405180910390f35b6101d1610874565b6101a9600480360360208110156102d057600080fd5b8101906020810181356401000000008111156102eb57600080fd5b8201836020820111156102fd57600080fd5b8035906020019184602083028401116401000000008311171561031f57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610900945050505050565b6101d1610abb565b61038b6004803603602081101561037b57600080fd5b50356001600160a01b0316610b24565b604080519115158252519081900360200190f35b6103a7610874565b6001600160a01b0316336001600160a01b0316146103f65760405162461bcd60e51b8152600401808060200182810382526049815260200180610ce86049913960600191505060405180910390fd5b60008251116104365760405162461bcd60e51b8152600401808060200182810382526022815260200180610e7f6022913960400191505060405180910390fd5b805182511461048c576040805162461bcd60e51b815260206004820152601e60248201527f61646444657269766174697665733a20556e657175616c206172726179730000604482015290519081900360640190fd5b60005b82518110156107765760006001600160a01b03168382815181106104af57fe5b60200260200101516001600160a01b03161415610513576040805162461bcd60e51b815260206004820181905260248201527f61646444657269766174697665733a20456d7074792064657269766174697665604482015290519081900360640190fd5b60006001600160a01b031682828151811061052a57fe5b60200260200101516001600160a01b0316141561058e576040805162461bcd60e51b815260206004820181905260248201527f61646444657269766174697665733a20456d70747920756e6465726c79696e67604482015290519081900360640190fd5b60006001600160a01b03166105b58483815181106105a857fe5b602002602001015161077b565b6001600160a01b0316146105fa5760405162461bcd60e51b8152600401808060200182810382526021815260200180610d316021913960400191505060405180910390fd5b61062f604051806060016040528060378152602001610e486037913984838151811061062257fe5b6020026020010151610b41565b610657604051806060016040528060378152602001610d526037913983838151811061062257fe5b610678604051806060016040528060398152602001610e0f60399139610bf8565b81818151811061068457fe5b602002602001015160008085848151811061069b57fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b031602179055506107086040518060600160405280602d8152602001610db2602d9139610bf8565b81818151811061071457fe5b60200260200101516001600160a01b031683828151811061073157fe5b60200260200101516001600160a01b03167faa4ae250fb435bb4b31ed0b95822bc179fc6c5dd0c727c3ffe08d444025efd9860405160405180910390a360010161048f565b505050565b6001600160a01b039081166000908152602081905260409020541690565b60608060006107a78561077b565b90506001600160a01b0381166107ee5760405162461bcd60e51b8152600401808060200182810382526030815260200180610ddf6030913960400191505060405180910390fd5b6040805160018082528183019092529060208083019080368337019050509250808360008151811061081c57fe5b6001600160a01b0392909216602092830291909101820152604080516001808252818301909252918281019080368337019050509150838260008151811061086057fe5b602002602001018181525050509250929050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663893d20e86040518163ffffffff1660e01b815260040160206040518083038186803b1580156108cf57600080fd5b505afa1580156108e3573d6000803e3d6000fd5b505050506040513d60208110156108f957600080fd5b5051905090565b610908610874565b6001600160a01b0316336001600160a01b0316146109575760405162461bcd60e51b8152600401808060200182810382526049815260200180610ce86049913960600191505060405180910390fd5b60008151116109975760405162461bcd60e51b8152600401808060200182810382526025815260200180610cc36025913960400191505060405180910390fd5b60005b8151811015610ab75760006001600160a01b03166109bd8383815181106105a857fe5b6001600160a01b03161415610a19576040805162461bcd60e51b815260206004820181905260248201527f72656d6f766544657269766174697665733a2056616c7565206e6f7420736574604482015290519081900360640190fd5b600080838381518110610a2857fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a8154906001600160a01b030219169055818181518110610a7257fe5b60200260200101516001600160a01b03167fc15eb25d807b570f4567baf6e97c7b26d58a7d0512dc85e8db15375a056b860460405160405180910390a260010161099a565b5050565b6000610aff604051806060016040528060298152602001610d89602991397f0000000000000000000000000000000000000000000000000000000000000000610b41565b507f000000000000000000000000000000000000000000000000000000000000000090565b600080610b308361077b565b6001600160a01b0316141592915050565b610ab782826040516024018080602001836001600160a01b03168152602001828103825284818151815260200191508051906020019080838360005b83811015610b95578181015183820152602001610b7d565b50505050905090810190601f168015610bc25780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b031663319af33360e01b1790529350610ca192505050565b610c9e816040516024018080602001828103825283818151815260200191508051906020019080838360005b83811015610c3c578181015183820152602001610c24565b50505050905090810190601f168015610c695780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b031663104c13eb60e21b1790529250610ca1915050565b50565b80516a636f6e736f6c652e6c6f67602083016000808483855afa505050505056fe72656d6f766544657269766174697665733a20456d707479205f64657269766174697665736f6e6c7946756e644465706c6f7965724f776e65723a204f6e6c79207468652046756e644465706c6f796572206f776e65722063616e2063616c6c20746869732066756e6374696f6e61646444657269766174697665733a2056616c756520616c72656164792073657453696e676c65556e6465726c79696e674465726976617469766552656769737472794d6978696e205f756e6465726c79696e67733a257346756e644465706c6f7965724f776e65724d6978696e3a67657446756e644465706c6f7965723a257353696e676c65556e6465726c79696e674465726976617469766552656769737472794d6978696e20616164656463616c63556e6465726c79696e6756616c7565733a204e6f74206120737570706f72746564206465726976617469766553696e676c65556e6465726c79696e674465726976617469766552656769737472794d6978696e207061737365642076616c69646174696f6e53696e676c65556e6465726c79696e674465726976617469766552656769737472794d6978696e205f64657269766174697665733a257361646444657269766174697665733a20456d707479205f6465726976617469766573a264697066735822122016e179757318cfc8848d094dc54dc9453ebb10bc771c6a207994e0cbd45d981e64736f6c634300060c0033';
}

// prettier-ignore
export const TestPeggedDerivativesPriceFeed = contract<TestPeggedDerivativesPriceFeed, TestPeggedDerivativesPriceFeedArgs>(TestPeggedDerivativesPriceFeedBytecode)`
  constructor(address _dispatcher)
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
