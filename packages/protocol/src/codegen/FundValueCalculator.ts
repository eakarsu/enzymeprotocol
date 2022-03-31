/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

export type FundValueCalculatorArgs = [
  _feeManager: AddressLike,
  _protocolFeeTracker: AddressLike,
  _valueInterpreter: AddressLike,
];

// prettier-ignore
export interface FundValueCalculator extends Contract<FundValueCalculator> {
  calcGav: Send<(_vaultProxy: AddressLike) => { denominationAsset_: string, gav_: BigNumber }, FundValueCalculator>
  calcGavInAsset: Send<(_vaultProxy: AddressLike, _quoteAsset: AddressLike) => BigNumber, FundValueCalculator>
  calcGrossShareValue: Send<(_vaultProxy: AddressLike) => { denominationAsset_: string, grossShareValue_: BigNumber }, FundValueCalculator>
  calcGrossShareValueInAsset: Send<(_vaultProxy: AddressLike, _quoteAsset: AddressLike) => BigNumber, FundValueCalculator>
  calcNav: Send<(_vaultProxy: AddressLike) => { denominationAsset_: string, nav_: BigNumber }, FundValueCalculator>
  calcNavInAsset: Send<(_vaultProxy: AddressLike, _quoteAsset: AddressLike) => BigNumber, FundValueCalculator>
  calcNetShareValue: Send<(_vaultProxy: AddressLike) => { denominationAsset_: string, netShareValue_: BigNumber }, FundValueCalculator>
  calcNetShareValueInAsset: Send<(_vaultProxy: AddressLike, _quoteAsset: AddressLike) => BigNumber, FundValueCalculator>
  calcNetValueForSharesHolder: Send<(_vaultProxy: AddressLike, _sharesHolder: AddressLike) => { denominationAsset_: string, netValue_: BigNumber }, FundValueCalculator>
  calcNetValueForSharesHolderInAsset: Send<(_vaultProxy: AddressLike, _sharesHolder: AddressLike, _quoteAsset: AddressLike) => BigNumber, FundValueCalculator>
  calcProtocolFeeDueForFund: Call<(_vaultProxy: AddressLike) => BigNumber, FundValueCalculator>
  getFeeManager: Call<() => string, FundValueCalculator>
  getProtocolFeeTracker: Call<() => string, FundValueCalculator>
  getValueInterpreter: Call<() => string, FundValueCalculator>
}

let FundValueCalculatorBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  FundValueCalculatorBytecode =
    '0x60e060405234801561001057600080fd5b506040516112813803806112818339818101604052606081101561003357600080fd5b50805160208201516040909201516001600160601b0319606092831b811660805292821b831660a052901b1660c05260805160601c60a05160601c60c05160601c6111ea61009760003980610ba5525080610a44525080610ca752506111ea6000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806381dfa95b1161008c578063c65988ff11610066578063c65988ff146102a2578063eefcb1b3146102d0578063f2d63826146102fe578063faf6eeef14610306576100ea565b806381dfa95b14610246578063875fb4b314610274578063c35526631461027c576100ea565b80634807ccbd116100c85780634807ccbd1461019657806351ac29c7146101ce57806353d467f3146101fc578063749cc8f514610222576100ea565b8063037276c1146100ef578063140a9924146101385780633ba6b85114610170575b600080fd5b6101156004803603602081101561010557600080fd5b50356001600160a01b0316610334565b604080516001600160a01b03909316835260208301919091528051918290030190f35b61015e6004803603602081101561014e57600080fd5b50356001600160a01b031661042d565b60408051918252519081900360200190f35b6101156004803603602081101561018657600080fd5b50356001600160a01b031661062e565b61015e600480360360608110156101ac57600080fd5b506001600160a01b03813581169160208101358216916040909101351661083e565b61015e600480360360408110156101e457600080fd5b506001600160a01b03813581169160200135166108f8565b6101156004803603602081101561021257600080fd5b50356001600160a01b03166109b0565b61022a610a42565b604080516001600160a01b039092168252519081900360200190f35b6101156004803603604081101561025c57600080fd5b506001600160a01b0381358116916020013516610a66565b61022a610ba3565b6101156004803603602081101561029257600080fd5b50356001600160a01b0316610bc7565b61015e600480360360408110156102b857600080fd5b506001600160a01b0381358116916020013516610c89565b61015e600480360360408110156102e657600080fd5b506001600160a01b0381358116916020013516610c97565b61022a610ca5565b61015e6004803603604081101561031c57600080fd5b506001600160a01b0381358116916020013516610cc9565b600080600061034284610cd7565b9050806001600160a01b031663e269c3d66040518163ffffffff1660e01b815260040160206040518083038186803b15801561037d57600080fd5b505afa158015610391573d6000803e3d6000fd5b505050506040513d60208110156103a757600080fd5b505160408051637a89e49360e11b815260006004820181905291516001600160a01b0385169263f513c92692602480820193602093909283900390910190829087803b1580156103f657600080fd5b505af115801561040a573d6000803e3d6000fd5b505050506040513d602081101561042057600080fd5b5051909350915050915091565b600080610438610a42565b6001600160a01b031663b69f3652846040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561048457600080fd5b505afa158015610498573d6000803e3d6000fd5b505050506040513d60208110156104ae57600080fd5b5051905042811015806104bf575080155b156104ce576000915050610629565b60006104da4283610d44565b90506000846001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561051757600080fd5b505afa15801561052b573d6000803e3d6000fd5b505050506040513d602081101561054157600080fd5b5051905060006105ed6127106105e76301e187e081876105e1610562610a42565b6001600160a01b031663f8fc29618e6040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156105ae57600080fd5b505afa1580156105c2573d6000803e3d6000fd5b505050506040513d60208110156105d857600080fd5b50518990610da1565b90610da1565b90610dfa565b905060006105fb8383610d44565b90508061061057600095505050505050610629565b61062160026105e783818688610da1565b955050505050505b919050565b600080600061063c84610cd7565b9050806001600160a01b03166339bf70d1610655610ca5565b604080516001600160e01b031960e085901b1681526001600160a01b0390921660048301526000602483018190526060604484015260648301819052905160a48084019382900301818387803b1580156106ae57600080fd5b505af11580156106c2573d6000803e3d6000fd5b5050505060006106d18561042d565b9050816001600160a01b031663e269c3d66040518163ffffffff1660e01b815260040160206040518083038186803b15801561070c57600080fd5b505afa158015610720573d6000803e3d6000fd5b505050506040513d602081101561073657600080fd5b505160408051637a89e49360e11b815260006004820181905291519296506108359287926001600160a01b0387169263f513c9269260248083019360209383900390910190829087803b15801561078c57600080fd5b505af11580156107a0573d6000803e3d6000fd5b505050506040513d60208110156107b657600080fd5b5051604080516318160ddd60e01b815290516108309186916001600160a01b038c16916318160ddd916004808301926020929190829003018186803b1580156107fe57600080fd5b505afa158015610812573d6000803e3d6000fd5b505050506040513d602081101561082857600080fd5b505190610e61565b610ebb565b92505050915091565b600080600061084d8686610a66565b91509150610859610ba3565b6001600160a01b0316634c67e1068383876040518463ffffffff1660e01b815260040180846001600160a01b03168152602001838152602001826001600160a01b031681526020019350505050602060405180830381600087803b1580156108c057600080fd5b505af11580156108d4573d6000803e3d6000fd5b505050506040513d60208110156108ea57600080fd5b5051925050505b9392505050565b600080600061090685610334565b91509150610912610ba3565b6001600160a01b0316634c67e1068383876040518463ffffffff1660e01b815260040180846001600160a01b03168152602001838152602001826001600160a01b031681526020019350505050602060405180830381600087803b15801561097957600080fd5b505af115801561098d573d6000803e3d6000fd5b505050506040513d60208110156109a357600080fd5b5051925050505b92915050565b6000806000836001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156109ee57600080fd5b505afa158015610a02573d6000803e3d6000fd5b505050506040513d6020811015610a1857600080fd5b505190506000610a278561062e565b9094509050610835670de0b6b3a76400006105e78484610da1565b7f000000000000000000000000000000000000000000000000000000000000000090565b6000806000846001600160a01b03166370a08231856040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610ab857600080fd5b505afa158015610acc573d6000803e3d6000fd5b505050506040513d6020811015610ae257600080fd5b505160408051606081019091526032808252919250610b0991611105602083013982610f52565b6000610b148661062e565b8092508195505050610b3e6040518060600160405280603181526020016111846031913985611004565b610b606040518060600160405280602c8152602001611137602c913982610f52565b610b76670de0b6b3a76400006105e78484610da1565b9250610b9a6040518060600160405280602881526020016110dd6028913984610f52565b50509250929050565b7f000000000000000000000000000000000000000000000000000000000000000090565b6000806000610bd584610cd7565b9050806001600160a01b031663e269c3d66040518163ffffffff1660e01b815260040160206040518083038186803b158015610c1057600080fd5b505afa158015610c24573d6000803e3d6000fd5b505050506040513d6020811015610c3a57600080fd5b505160408051635a0b830960e11b815260006004820181905291516001600160a01b0385169263b417061292602480820193602093909283900390910190829087803b1580156103f657600080fd5b6000806000610906856109b0565b600080600061090685610bc7565b7f000000000000000000000000000000000000000000000000000000000000000090565b60008060006109068561062e565b6000816001600160a01b0316635a53e3486040518163ffffffff1660e01b815260040160206040518083038186803b158015610d1257600080fd5b505afa158015610d26573d6000803e3d6000fd5b505050506040513d6020811015610d3c57600080fd5b505192915050565b600082821115610d9b576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b600082610db0575060006109aa565b82820282848281610dbd57fe5b04146108f15760405162461bcd60e51b81526004018080602001828103825260218152602001806111636021913960400191505060405180910390fd5b6000808211610e50576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b818381610e5957fe5b049392505050565b6000828201838110156108f1576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b600081610f3457836001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b158015610efb57600080fd5b505afa158015610f0f573d6000803e3d6000fd5b505050506040513d6020811015610f2557600080fd5b505160ff16600a0a90506108f1565b610f4a826105e785670de0b6b3a7640000610da1565b949350505050565b61100082826040516024018080602001838152602001828103825284818151815260200191508051906020019080838360005b83811015610f9d578181015183820152602001610f85565b50505050905090810190601f168015610fca5780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b03166309710a9d60e41b17905293506110bb92505050565b5050565b61100082826040516024018080602001836001600160a01b03168152602001828103825284818151815260200191508051906020019080838360005b83811015611058578181015183820152602001611040565b50505050905090810190601f1680156110855780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b031663319af33360e01b17905293506110bb92505050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa505050505056fe63616c634e657456616c7565466f72536861726573486f6c6465723a6e657456616c75655f3a256463616c634e657456616c7565466f72536861726573486f6c6465723a736861726573486f6c64657242616c616e63653a256463616c634e657456616c7565466f72536861726573486f6c6465723a6e6574536861726556616c75653a2564536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7763616c634e657456616c7565466f72536861726573486f6c6465723a64656e6f6d696e6174696f6e41737365745f3a2573a2646970667358221220bd92dab6fcfff9f6c2994c43ae996c5ede87d9267813b4ecbeaded083aff6fb064736f6c634300060c0033';
}

// prettier-ignore
export const FundValueCalculator = contract<FundValueCalculator, FundValueCalculatorArgs>(FundValueCalculatorBytecode)`
  constructor(address _feeManager, address _protocolFeeTracker, address _valueInterpreter)
  function calcGav(address _vaultProxy) returns (address denominationAsset_, uint256 gav_)
  function calcGavInAsset(address _vaultProxy, address _quoteAsset) returns (uint256 gav_)
  function calcGrossShareValue(address _vaultProxy) returns (address denominationAsset_, uint256 grossShareValue_)
  function calcGrossShareValueInAsset(address _vaultProxy, address _quoteAsset) returns (uint256 grossShareValue_)
  function calcNav(address _vaultProxy) returns (address denominationAsset_, uint256 nav_)
  function calcNavInAsset(address _vaultProxy, address _quoteAsset) returns (uint256 nav_)
  function calcNetShareValue(address _vaultProxy) returns (address denominationAsset_, uint256 netShareValue_)
  function calcNetShareValueInAsset(address _vaultProxy, address _quoteAsset) returns (uint256 netShareValue_)
  function calcNetValueForSharesHolder(address _vaultProxy, address _sharesHolder) returns (address denominationAsset_, uint256 netValue_)
  function calcNetValueForSharesHolderInAsset(address _vaultProxy, address _sharesHolder, address _quoteAsset) returns (uint256 netValue_)
  function calcProtocolFeeDueForFund(address _vaultProxy) view returns (uint256 sharesDue_)
  function getFeeManager() view returns (address feeManager_)
  function getProtocolFeeTracker() view returns (address protocolFeeTracker_)
  function getValueInterpreter() view returns (address valueInterpreter_)
`;
