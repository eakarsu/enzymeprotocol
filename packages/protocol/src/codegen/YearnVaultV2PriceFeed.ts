/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

export type YearnVaultV2PriceFeedArgs = [_fundDeployer: AddressLike, _yearnVaultV2Registry: AddressLike];

// prettier-ignore
export interface YearnVaultV2PriceFeed extends Contract<YearnVaultV2PriceFeed> {
  addDerivatives: Send<(_derivatives: AddressLike[], _underlyings: AddressLike[]) => void, YearnVaultV2PriceFeed>
  calcUnderlyingValues: Send<(_derivative: AddressLike, _derivativeAmount: BigNumberish) => { underlyings_: string[], underlyingAmounts_: BigNumber[] }, YearnVaultV2PriceFeed>
  getFundDeployer: Call<() => string, YearnVaultV2PriceFeed>
  getOwner: Call<() => string, YearnVaultV2PriceFeed>
  getUnderlyingForDerivative: Call<(_derivative: AddressLike) => string, YearnVaultV2PriceFeed>
  getYearnVaultV2Registry: Call<() => string, YearnVaultV2PriceFeed>
  isSupportedAsset: Call<(_asset: AddressLike) => boolean, YearnVaultV2PriceFeed>
  removeDerivatives: Send<(_derivatives: AddressLike[]) => void, YearnVaultV2PriceFeed>
}

let YearnVaultV2PriceFeedBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  YearnVaultV2PriceFeedBytecode =
    '0x60c060405234801561001057600080fd5b506040516111903803806111908339818101604052604081101561003357600080fd5b5080516020909101516001600160601b0319606092831b8116608052911b1660a05260805160601c60a05160601c61110861008860003980610c4e5250806109a05280610c035280610c2a52506111086000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80638f72b1361161005b5780638f72b136146102c557806397c0ac8714610368578063981dc8e4146103705780639be918e61461037857610088565b806339cbb63c1461008d57806366adb867146101b6578063727212f6146101f8578063893d20e8146102bd575b600080fd5b6101b4600480360360408110156100a357600080fd5b8101906020810181356401000000008111156100be57600080fd5b8201836020820111156100d057600080fd5b803590602001918460208302840111640100000000831117156100f257600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929594936020810193503591505064010000000081111561014257600080fd5b82018360208201111561015457600080fd5b8035906020019184602083028401116401000000008311171561017657600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506103b2945050505050565b005b6101dc600480360360208110156101cc57600080fd5b50356001600160a01b031661078e565b604080516001600160a01b039092168252519081900360200190f35b6102246004803603604081101561020e57600080fd5b506001600160a01b0381351690602001356107ac565b604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b83811015610268578181015183820152602001610250565b50505050905001838103825284818151815260200191508051906020019060200280838360005b838110156102a757818101518382015260200161028f565b5050505090500194505050505060405180910390f35b6101dc61099c565b6101b4600480360360208110156102db57600080fd5b8101906020810181356401000000008111156102f657600080fd5b82018360208201111561030857600080fd5b8035906020019184602083028401116401000000008311171561032a57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610a28945050505050565b6101dc610be3565b6101dc610c4c565b61039e6004803603602081101561038e57600080fd5b50356001600160a01b0316610c70565b604080519115158252519081900360200190f35b6103ba61099c565b6001600160a01b0316336001600160a01b0316146104095760405162461bcd60e51b8152600401808060200182810382526049815260200180610efd6049913960600191505060405180910390fd5b60008251116104495760405162461bcd60e51b81526004018080602001828103825260228152602001806110856022913960400191505060405180910390fd5b805182511461049f576040805162461bcd60e51b815260206004820152601e60248201527f61646444657269766174697665733a20556e657175616c206172726179730000604482015290519081900360640190fd5b60005b82518110156107895760006001600160a01b03168382815181106104c257fe5b60200260200101516001600160a01b03161415610526576040805162461bcd60e51b815260206004820181905260248201527f61646444657269766174697665733a20456d7074792064657269766174697665604482015290519081900360640190fd5b60006001600160a01b031682828151811061053d57fe5b60200260200101516001600160a01b031614156105a1576040805162461bcd60e51b815260206004820181905260248201527f61646444657269766174697665733a20456d70747920756e6465726c79696e67604482015290519081900360640190fd5b60006001600160a01b03166105c88483815181106105bb57fe5b602002602001015161078e565b6001600160a01b03161461060d5760405162461bcd60e51b8152600401808060200182810382526021815260200180610f466021913960400191505060405180910390fd5b61064260405180606001604052806037815260200161102d6037913984838151811061063557fe5b6020026020010151610c8d565b61066a604051806060016040528060378152602001610f676037913983838151811061063557fe5b61068b604051806060016040528060398152602001610ff460399139610d44565b81818151811061069757fe5b60200260200101516000808584815181106106ae57fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b0316021790555061071b6040518060600160405280602d8152602001610fc7602d9139610d44565b81818151811061072757fe5b60200260200101516001600160a01b031683828151811061074457fe5b60200260200101516001600160a01b03167faa4ae250fb435bb4b31ed0b95822bc179fc6c5dd0c727c3ffe08d444025efd9860405160405180910390a36001016104a2565b505050565b6001600160a01b039081166000908152602081905260409020541690565b604080516001808252818301909252606091829190602080830190803683370190505091506107da8461078e565b826000815181106107e757fe5b60200260200101906001600160a01b031690816001600160a01b03168152505060006001600160a01b03168260008151811061081f57fe5b60200260200101516001600160a01b0316141561086d5760405162461bcd60e51b815260040180806020018281038252602c8152602001806110a7602c913960400191505060405180910390fd5b604080516001808252818301909252906020808301908036833701905050905061097c846001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156108c957600080fd5b505afa1580156108dd573d6000803e3d6000fd5b505050506040513d60208110156108f357600080fd5b505160408051634ca9858360e11b8152905160ff909216600a0a91610976916001600160a01b038916916399530b0691600480820192602092909190829003018186803b15801561094357600080fd5b505afa158015610957573d6000803e3d6000fd5b505050506040513d602081101561096d57600080fd5b50518690610ded565b90610e4f565b8160008151811061098957fe5b6020026020010181815250509250929050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663893d20e86040518163ffffffff1660e01b815260040160206040518083038186803b1580156109f757600080fd5b505afa158015610a0b573d6000803e3d6000fd5b505050506040513d6020811015610a2157600080fd5b5051905090565b610a3061099c565b6001600160a01b0316336001600160a01b031614610a7f5760405162461bcd60e51b8152600401808060200182810382526049815260200180610efd6049913960600191505060405180910390fd5b6000815111610abf5760405162461bcd60e51b8152600401808060200182810382526025815260200180610ed86025913960400191505060405180910390fd5b60005b8151811015610bdf5760006001600160a01b0316610ae58383815181106105bb57fe5b6001600160a01b03161415610b41576040805162461bcd60e51b815260206004820181905260248201527f72656d6f766544657269766174697665733a2056616c7565206e6f7420736574604482015290519081900360640190fd5b600080838381518110610b5057fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a8154906001600160a01b030219169055818181518110610b9a57fe5b60200260200101516001600160a01b03167fc15eb25d807b570f4567baf6e97c7b26d58a7d0512dc85e8db15375a056b860460405160405180910390a2600101610ac2565b5050565b6000610c27604051806060016040528060298152602001610f9e602991397f0000000000000000000000000000000000000000000000000000000000000000610c8d565b507f000000000000000000000000000000000000000000000000000000000000000090565b7f000000000000000000000000000000000000000000000000000000000000000090565b600080610c7c8361078e565b6001600160a01b0316141592915050565b610bdf82826040516024018080602001836001600160a01b03168152602001828103825284818151815260200191508051906020019080838360005b83811015610ce1578181015183820152602001610cc9565b50505050905090810190601f168015610d0e5780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b031663319af33360e01b1790529350610eb692505050565b610dea816040516024018080602001828103825283818151815260200191508051906020019080838360005b83811015610d88578181015183820152602001610d70565b50505050905090810190601f168015610db55780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b031663104c13eb60e21b1790529250610eb6915050565b50565b600082610dfc57506000610e49565b82820282848281610e0957fe5b0414610e465760405162461bcd60e51b81526004018080602001828103825260218152602001806110646021913960400191505060405180910390fd5b90505b92915050565b6000808211610ea5576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b818381610eae57fe5b049392505050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa505050505056fe72656d6f766544657269766174697665733a20456d707479205f64657269766174697665736f6e6c7946756e644465706c6f7965724f776e65723a204f6e6c79207468652046756e644465706c6f796572206f776e65722063616e2063616c6c20746869732066756e6374696f6e61646444657269766174697665733a2056616c756520616c72656164792073657453696e676c65556e6465726c79696e674465726976617469766552656769737472794d6978696e205f756e6465726c79696e67733a257346756e644465706c6f7965724f776e65724d6978696e3a67657446756e644465706c6f7965723a257353696e676c65556e6465726c79696e674465726976617469766552656769737472794d6978696e20616164656453696e676c65556e6465726c79696e674465726976617469766552656769737472794d6978696e207061737365642076616c69646174696f6e53696e676c65556e6465726c79696e674465726976617469766552656769737472794d6978696e205f64657269766174697665733a2573536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7761646444657269766174697665733a20456d707479205f646572697661746976657363616c63556e6465726c79696e6756616c7565733a20556e737570706f727465642064657269766174697665a2646970667358221220d9d9d38eb815b4c84d1ed399d3a52e0e477f710e1cc118db5b23cede3f898c3964736f6c634300060c0033';
}

// prettier-ignore
export const YearnVaultV2PriceFeed = contract<YearnVaultV2PriceFeed, YearnVaultV2PriceFeedArgs>(YearnVaultV2PriceFeedBytecode)`
  constructor(address _fundDeployer, address _yearnVaultV2Registry)
  event DerivativeAdded(address indexed derivative, address indexed underlying)
  event DerivativeRemoved(address indexed derivative)
  function addDerivatives(address[] _derivatives, address[] _underlyings)
  function calcUnderlyingValues(address _derivative, uint256 _derivativeAmount) returns (address[] underlyings_, uint256[] underlyingAmounts_)
  function getFundDeployer() view returns (address fundDeployer_)
  function getOwner() view returns (address owner_)
  function getUnderlyingForDerivative(address _derivative) view returns (address underlying_)
  function getYearnVaultV2Registry() view returns (address yearnVaultV2Registry_)
  function isSupportedAsset(address _asset) view returns (bool isSupported_)
  function removeDerivatives(address[] _derivatives)
`;