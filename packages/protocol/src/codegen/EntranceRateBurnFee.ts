/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

export type EntranceRateBurnFeeArgs = [_feeManager: AddressLike];

// prettier-ignore
export interface EntranceRateBurnFee extends Contract<EntranceRateBurnFee> {
  activateForFund: Send<(arg0: AddressLike, arg1: AddressLike) => void, EntranceRateBurnFee>
  addFundSettings: Send<(_comptrollerProxy: AddressLike, _settingsData: BytesLike) => void, EntranceRateBurnFee>
  getFeeManager: Call<() => string, EntranceRateBurnFee>
  getRateForFund: Call<(_comptrollerProxy: AddressLike) => BigNumber, EntranceRateBurnFee>
  getRecipientForFund: Call<(arg0: AddressLike) => string, EntranceRateBurnFee>
  getSettlementType: Call<() => BigNumber, EntranceRateBurnFee>
  payout: Send<(arg0: AddressLike, arg1: AddressLike) => boolean, EntranceRateBurnFee>
  settle: Send<(_comptrollerProxy: AddressLike, arg1: AddressLike, arg2: BigNumberish, _settlementData: BytesLike, arg4: BigNumberish) => { settlementType_: BigNumber, payer_: string, sharesDue_: BigNumber }, EntranceRateBurnFee>
  settlesOnHook: Call<(_hook: BigNumberish) => { settles_: boolean, usesGav_: boolean }, EntranceRateBurnFee>
  update: Send<(arg0: AddressLike, arg1: AddressLike, arg2: BigNumberish, arg3: BytesLike, arg4: BigNumberish) => void, EntranceRateBurnFee>
  updatesOnHook: Call<(arg0: BigNumberish) => { updates_: boolean, usesGav_: boolean }, EntranceRateBurnFee>
}

let EntranceRateBurnFeeBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  EntranceRateBurnFeeBytecode =
    '0x60c060405234801561001057600080fd5b50604051610d73380380610d738339818101604052602081101561003357600080fd5b50516001600160601b0319606082901b16608052600360f81b60a0526001600160a01b03166003610ced610086600039806107df528061081752508061040f52806106a6528061084c5250610ced6000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c806341892d7e1161007157806341892d7e1461026457806362780b3c1461032f5780637bdd5b1d14610371578063b78b48131461039a578063e337a91f146103dc578063f2d63826146103fc576100a9565b80630f5f6b4f146100ae578063233faf5f146101305780633146d058146101c3578063320f0ddd146101f15780633eecc2bf1461022c575b600080fd5b61012e600480360360408110156100c457600080fd5b6001600160a01b0382351691908101906040810160208201356401000000008111156100ef57600080fd5b82018360208201111561010157600080fd5b8035906020019184600183028401116401000000008311171561012357600080fd5b509092509050610404565b005b61012e600480360360a081101561014657600080fd5b6001600160a01b03823581169260208101359091169160ff604083013516919081019060808101606082013564010000000081111561018457600080fd5b82018360208201111561019657600080fd5b803590602001918460018302840111640100000000831117156101b857600080fd5b919350915035610641565b61012e600480360360408110156101d957600080fd5b506001600160a01b0381358116916020013516610649565b6102116004803603602081101561020757600080fd5b503560ff1661064d565b60408051921515835290151560208301528051918290030190f35b6102526004803603602081101561024257600080fd5b50356001600160a01b031661067c565b60408051918252519081900360200190f35b6102f7600480360360a081101561027a57600080fd5b6001600160a01b03823581169260208101359091169160ff60408301351691908101906080810160608201356401000000008111156102b857600080fd5b8201836020820111156102ca57600080fd5b803590602001918460018302840111640100000000831117156102ec57600080fd5b919350915035610697565b6040518084600581111561030757fe5b8152602001836001600160a01b03168152602001828152602001935050505060405180910390f35b6103556004803603602081101561034557600080fd5b50356001600160a01b031661080f565b604080516001600160a01b039092168252519081900360200190f35b610379610815565b6040518082600581111561038957fe5b815260200191505060405180910390f35b6103c8600480360360408110156103b057600080fd5b506001600160a01b0381358116916020013516610839565b604080519115158252519081900360200190f35b610211600480360360208110156103f257600080fd5b503560ff16610842565b61035561084a565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461046b5760405162461bcd60e51b8152600401808060200182810382526025815260200180610bc86025913960400191505060405180910390fd5b6104a96040518060400160405280601881526020017f456e7472616365526174654665654261736520626567696e000000000000000081525061086e565b6000828260208110156104bb57600080fd5b5060408051808201909152601a81527f456e7472616365526174654665654261736520726174653a25640000000000006020820152903591506104fe9082610917565b6000811161053d5760405162461bcd60e51b8152600401808060200182810382526024815260200180610c6a6024913960400191505060405180910390fd5b612710811061057d5760405162461bcd60e51b8152600401808060200182810382526026815260200180610c446026913960400191505060405180910390fd5b61059f604051806060016040528060368152602001610c0e60369139856109c5565b6001600160a01b03841660009081526020818152604091829020839055815160608101909252602f8083526105db9291610b999083013961086e565b6040805182815290516001600160a01b038616917f90b7d1516011c1da1279f3ae0ed052b1416e7c373d4ec40cf515aa53c5f839df919081900360200190a261063b6040518060600160405280602a8152602001610c8e602a913961086e565b50505050565b505050505050565b5050565b600080600283600381111561065e57fe5b14156106705750600190506000610677565b5060009050805b915091565b6001600160a01b031660009081526020819052604090205490565b60008080336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146107025760405162461bcd60e51b8152600401808060200182810382526025815260200180610bc86025913960400191505060405180910390fd5b600061074387878080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610a7c92505050565b6001600160a01b038d16600090815260208190526040902054929550925061077990506127106107738484610ab0565b90610b10565b9250826107925760008060009450945094505050610803565b836001600160a01b03168b6001600160a01b03167f7e79a2206061184e05985ae0578dec52f817756a441996f984cdc817efc25a68856040518082815260200191505060405180910390a37f0000000000000000000000000000000000000000000000000000000000000000945050505b96509650969350505050565b50600090565b7f000000000000000000000000000000000000000000000000000000000000000090565b60005b92915050565b600080915091565b7f000000000000000000000000000000000000000000000000000000000000000090565b610914816040516024018080602001828103825283818151815260200191508051906020019080838360005b838110156108b257818101518382015260200161089a565b50505050905090810190601f1680156108df5780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b031663104c13eb60e21b1790529250610b77915050565b50565b61064982826040516024018080602001838152602001828103825284818151815260200191508051906020019080838360005b8381101561096257818101518382015260200161094a565b50505050905090810190601f16801561098f5780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b03166309710a9d60e41b1790529350610b7792505050565b61064982826040516024018080602001836001600160a01b03168152602001828103825284818151815260200191508051906020019080838360005b83811015610a19578181015183820152602001610a01565b50505050905090810190601f168015610a465780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b031663319af33360e01b1790529350610b7792505050565b6000806000838060200190516060811015610a9657600080fd5b508051602082015160409092015190969195509350915050565b600082610abf5750600061083c565b82820282848281610acc57fe5b0414610b095760405162461bcd60e51b8152600401808060200182810382526021815260200180610bed6021913960400191505060405180910390fd5b9392505050565b6000808211610b66576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b818381610b6f57fe5b049392505050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa505050505056fe456e7472616365526174654665654261736520616674657220636f6d7074726f6c6c657250726f7879546f526174654f6e6c7920746865204665654d616e6765722063616e206d616b6520746869732063616c6c536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77456e74726163655261746546656542617365206166746572207265717569726573205f636f6d7074726f6c6c657250726f78793a257361646446756e6453657474696e67733a204665652072617465206d617820657863656564656461646446756e6453657474696e67733a204665652072617465206d757374206265203e30456e747261636552617465466565426173652061667465722046756e6453657474696e67734164646564a2646970667358221220f19e55f365ea6892fbf83053645e07b4d3956412cb03aa753e863d52a607d92d64736f6c634300060c0033';
}

// prettier-ignore
export const EntranceRateBurnFee = contract<EntranceRateBurnFee, EntranceRateBurnFeeArgs>(EntranceRateBurnFeeBytecode)`
  constructor(address _feeManager)
  event FundSettingsAdded(address indexed comptrollerProxy, uint256 rate)
  event Settled(address indexed comptrollerProxy, address indexed payer, uint256 sharesQuantity)
  function activateForFund(address, address)
  function addFundSettings(address _comptrollerProxy, bytes _settingsData)
  function getFeeManager() view returns (address feeManager_)
  function getRateForFund(address _comptrollerProxy) view returns (uint256 rate_)
  function getRecipientForFund(address) view returns (address recipient_)
  function getSettlementType() view returns (uint8 settlementType_)
  function payout(address, address) returns (bool)
  function settle(address _comptrollerProxy, address, uint8, bytes _settlementData, uint256) returns (uint8 settlementType_, address payer_, uint256 sharesDue_)
  function settlesOnHook(uint8 _hook) view returns (bool settles_, bool usesGav_)
  function update(address, address, uint8, bytes, uint256)
  function updatesOnHook(uint8) view returns (bool updates_, bool usesGav_)
`;
