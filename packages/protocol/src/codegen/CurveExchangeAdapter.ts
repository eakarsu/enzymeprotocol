/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

export type CurveExchangeAdapterArgs = [
  _integrationManager: AddressLike,
  _addressProvider: AddressLike,
  _wethToken: AddressLike,
];

// prettier-ignore
export interface CurveExchangeAdapter extends Contract<CurveExchangeAdapter> {
  CLAIM_REWARDS_SELECTOR: Call<() => string, CurveExchangeAdapter>
  LEND_AND_STAKE_SELECTOR: Call<() => string, CurveExchangeAdapter>
  LEND_SELECTOR: Call<() => string, CurveExchangeAdapter>
  REDEEM_SELECTOR: Call<() => string, CurveExchangeAdapter>
  STAKE_SELECTOR: Call<() => string, CurveExchangeAdapter>
  TAKE_ORDER_SELECTOR: Call<() => string, CurveExchangeAdapter>
  UNSTAKE_AND_REDEEM_SELECTOR: Call<() => string, CurveExchangeAdapter>
  UNSTAKE_SELECTOR: Call<() => string, CurveExchangeAdapter>
  getCurveExchangeAddressProvider: Call<() => string, CurveExchangeAdapter>
  getCurveExchangeWethToken: Call<() => string, CurveExchangeAdapter>
  getIntegrationManager: Call<() => string, CurveExchangeAdapter>
  parseAssetsForAction: Call<(arg0: AddressLike, _selector: BytesLike, _actionData: BytesLike) => { spendAssetsHandleType_: BigNumber, spendAssets_: string[], spendAssetAmounts_: BigNumber[], incomingAssets_: string[], minIncomingAssetAmounts_: BigNumber[] }, CurveExchangeAdapter>
  takeOrder: Send<(_vaultProxy: AddressLike, _actionData: BytesLike, arg2: BytesLike) => void, CurveExchangeAdapter>
}

let CurveExchangeAdapterBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  CurveExchangeAdapterBytecode =
    '0x60e060405234801561001057600080fd5b506040516117113803806117118339818101604052606081101561003357600080fd5b50805160208201516040909201516001600160601b0319606092831b811660805292821b831660a052901b1660c05260805160601c60a05160601c60c05160601c6116576100ba600039806108df52806109de5280610a135280610b485280610c4e5280610cc452508061062c528061094b5250806104af528061089752506116576000f3fe6080604052600436106100c65760003560e01c806372202e8f1161007f578063c54efee511610059578063c54efee514610294578063e7c4569014610465578063f7d882b51461047a578063fd070ae41461048f576100cd565b806372202e8f14610239578063863e5ad01461026a578063b23228cf1461027f576100cd565b806303e38a2b146100d2578063080456c1146101b3578063131461c0146101e5578063257cb1a3146101fa5780633ffc15911461020f57806340da225d14610224576100cd565b366100cd57005b600080fd5b3480156100de57600080fd5b506101b1600480360360608110156100f557600080fd5b6001600160a01b03823516919081019060408101602082013564010000000081111561012057600080fd5b82018360208201111561013257600080fd5b8035906020019184600183028401116401000000008311171561015457600080fd5b91939092909160208101903564010000000081111561017257600080fd5b82018360208201111561018457600080fd5b803590602001918460018302840111640100000000831117156101a657600080fd5b5090925090506104a4565b005b3480156101bf57600080fd5b506101c8610576565b604080516001600160e01b03199092168252519081900360200190f35b3480156101f157600080fd5b506101c861059a565b34801561020657600080fd5b506101c86105be565b34801561021b57600080fd5b506101c86105e2565b34801561023057600080fd5b506101c8610606565b34801561024557600080fd5b5061024e61062a565b604080516001600160a01b039092168252519081900360200190f35b34801561027657600080fd5b506101c861064e565b34801561028b57600080fd5b506101c8610672565b3480156102a057600080fd5b50610330600480360360608110156102b757600080fd5b6001600160a01b03823516916001600160e01b0319602082013516918101906060810160408201356401000000008111156102f157600080fd5b82018360208201111561030357600080fd5b8035906020019184600183028401116401000000008311171561032557600080fd5b509092509050610696565b6040518086600281111561034057fe5b815260200180602001806020018060200180602001858103855289818151815260200191508051906020019060200280838360005b8381101561038d578181015183820152602001610375565b50505050905001858103845288818151815260200191508051906020019060200280838360005b838110156103cc5781810151838201526020016103b4565b50505050905001858103835287818151815260200191508051906020019060200280838360005b8381101561040b5781810151838201526020016103f3565b50505050905001858103825286818151815260200191508051906020019060200280838360005b8381101561044a578181015183820152602001610432565b50505050905001995050505050505050505060405180910390f35b34801561047157600080fd5b5061024e610895565b34801561048657600080fd5b506101c86108b9565b34801561049b57600080fd5b5061024e6108dd565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461050b5760405162461bcd60e51b81526004018080602001828103825260328152602001806115316032913960400191505060405180910390fd5b600080600080600061055289898080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061090192505050565b9450945094509450945061056a8a8686868686610947565b50505050505050505050565b7f8334eb99be0145865eba9889fca2ee920288090caefff4cc776038e20ad9259a81565b7f29fa046e79524c3c5ac4c01df692c35e217802b2b13b21121b76cf0ef02b138c81565b7f099f75155f0e997bf83a7993a71d5e7e7540bd386fe1e84643a09ce6b412521981565b7ffa7dd04da627f433da73c4355ead9c75682a67a8fc84d3f6170ef0922f402d2481565b7fb9dfbaccbe5cd2a84fdcf1d15f23ef25d23086f5afbaa99516065ed4a5bbc7a381565b7f000000000000000000000000000000000000000000000000000000000000000090565b7f03e38a2bd7063d45c897edeafc330e71657502dd86434d3c37a489caf116af6981565b7f68e30677f607df46e87da13e15b637784cfa62374b653f35ab43d10361a2f83081565b600060608080806001600160e01b031988166303e38a2b60e01b146106ec5760405162461bcd60e51b81526004018080602001828103825260278152602001806115fb6027913960400191505060405180910390fd5b60008060008060006107338c8c8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061090192505050565b9398509196509450925090506001600160a01b0385166107845760405162461bcd60e51b815260040180806020018281038252602e815260200180611503602e913960400191505060405180910390fd5b604080516001808252818301909252906020808301908036833701905050985083896000815181106107b257fe5b6001600160a01b039290921660209283029190910182015260408051600180825281830190925291828101908036833701905050975082886000815181106107f657fe5b602090810291909101015260408051600180825281830190925290816020016020820280368337019050509650818760008151811061083157fe5b6001600160a01b0392909216602092830291909101820152604080516001808252818301909252918281019080368337019050509550808660008151811061087557fe5b602002602001018181525050600299505050505050945094509450945094565b7f000000000000000000000000000000000000000000000000000000000000000090565b7fc29fa9dde84204c2908778afd0613d802d31cf046179b88f6d2b4a4e507ea2d581565b7f000000000000000000000000000000000000000000000000000000000000000090565b60008060008060008580602001905160a081101561091e57600080fd5b508051602082015160408301516060840151608090940151929a91995097509195509350915050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663493f4f7460026040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b1580156109ae57600080fd5b505afa1580156109c2573d6000803e3d6000fd5b505050506040513d60208110156109d857600080fd5b505190507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b039081169086161415610b46577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316632e1a7d4d856040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b158015610a7757600080fd5b505af1158015610a8b573d6000803e3d6000fd5b505060408051631a4c1ca360e01b81526001600160a01b038a8116600483015273eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6024830152878116604483015260648201899052608482018790528b811660a483015291519185169350631a4c1ca39250879160c480830192602092919082900301818588803b158015610b1357600080fd5b505af1158015610b27573d6000803e3d6000fd5b50505050506040513d6020811015610b3e57600080fd5b50610d9f9050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316836001600160a01b03161415610cf557610b8b858286610da8565b60408051631a4c1ca360e01b81526001600160a01b038881166004830152878116602483015273eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee604483015260648201879052608482018590523060a4830152915191831691631a4c1ca39160c4808201926020929091908290030181600087803b158015610c0d57600080fd5b505af1158015610c21573d6000803e3d6000fd5b505050506040513d6020811015610c3757600080fd5b505060408051630d0e30db60e41b815290513031917f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169163d0e30db0918491600480830192600092919082900301818588803b158015610c9f57600080fd5b505af1158015610cb3573d6000803e3d6000fd5b50610cef9350506001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001691508a905083610fed565b50610d9f565b610d00858286610da8565b60408051631a4c1ca360e01b81526001600160a01b03888116600483015287811660248301528581166044830152606482018790526084820185905289811660a4830152915191831691631a4c1ca39160c4808201926020929091908290030181600087803b158015610d7257600080fd5b505af1158015610d86573d6000803e3d6000fd5b505050506040513d6020811015610d9c57600080fd5b50505b50505050505050565b60408051636eb1769f60e11b81523060048201526001600160a01b038481166024830152915160009286169163dd62ed3e916044808301926020929190829003018186803b158015610df957600080fd5b505afa158015610e0d573d6000803e3d6000fd5b505050506040513d6020811015610e2357600080fd5b505160408051606081019091526026808252919250610e4a916115b1602083013982611044565b81811015610fc657610e73604051806060016040528060288152602001611491602891396110f6565b8015610f1f57836001600160a01b031663095ea7b38460006040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b158015610ed157600080fd5b505af1158015610ee5573d6000803e3d6000fd5b505050506040513d6020811015610efb57600080fd5b505060408051606081019091526024808252610f1f91906115d760208301396110f6565b836001600160a01b031663095ea7b3846000196040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b158015610f7857600080fd5b505af1158015610f8c573d6000803e3d6000fd5b505050506040513d6020811015610fa257600080fd5b505060408051606081019091526024808252610fc6919061158d60208301396110f6565b610fe76040518060600160405280602481526020016114df602491396110f6565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b17905261103f90849061119f565b505050565b6110f282826040516024018080602001838152602001828103825284818151815260200191508051906020019080838360005b8381101561108f578181015183820152602001611077565b50505050905090810190601f1680156110bc5780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b03166309710a9d60e41b179052935061125092505050565b5050565b61119c816040516024018080602001828103825283818151815260200191508051906020019080838360005b8381101561113a578181015183820152602001611122565b50505050905090810190601f1680156111675780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b031663104c13eb60e21b1790529250611250915050565b50565b60606111f4826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166112719092919063ffffffff16565b80519091501561103f5780806020019051602081101561121357600080fd5b505161103f5760405162461bcd60e51b815260040180806020018281038252602a815260200180611563602a913960400191505060405180910390fd5b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b6060611280848460008561128a565b90505b9392505050565b6060824710156112cb5760405162461bcd60e51b81526004018080602001828103825260268152602001806114b96026913960400191505060405180910390fd5b6112d4856113e6565b611325576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106113645780518252601f199092019160209182019101611345565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146113c6576040519150601f19603f3d011682016040523d82523d6000602084013e6113cb565b606091505b50915091506113db8282866113ec565b979650505050505050565b3b151590565b606083156113fb575081611283565b82511561140b5782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561145557818101518382015260200161143d565b50505050905090810190601f1680156114825780820380516001836020036101000a031916815260200191505b509250505060405180910390fdfe5f5f617070726f766541737365744d617841734e65656465643a6265666f726520617070726f7665416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c5f5f617070726f766541737365744d617841734e65656465643a617070726f76656420337061727365417373657473466f72416374696f6e3a204e6f20706f6f6c20616464726573732070726f76696465644f6e6c792074686520496e746567726174696f6e4d616e616765722063616e2063616c6c20746869732066756e6374696f6e5361666545524332303a204552433230206f7065726174696f6e20646964206e6f7420737563636565645f5f617070726f766541737365744d617841734e65656465643a617070726f76656420325f5f617070726f766541737365744d617841734e65656465643a616c6c6f77616e63653a25645f5f617070726f766541737365744d617841734e65656465643a617070726f76656420317061727365417373657473466f72416374696f6e3a205f73656c6563746f7220696e76616c6964a26469706673582212200418d5a3714fb5c439505cd44ff7964f90ce8cf0189827765141aedd2498961364736f6c634300060c0033';
}

// prettier-ignore
export const CurveExchangeAdapter = contract<CurveExchangeAdapter, CurveExchangeAdapterArgs>(CurveExchangeAdapterBytecode)`
  constructor(address _integrationManager, address _addressProvider, address _wethToken)
  function CLAIM_REWARDS_SELECTOR() view returns (bytes4)
  function LEND_AND_STAKE_SELECTOR() view returns (bytes4)
  function LEND_SELECTOR() view returns (bytes4)
  function REDEEM_SELECTOR() view returns (bytes4)
  function STAKE_SELECTOR() view returns (bytes4)
  function TAKE_ORDER_SELECTOR() view returns (bytes4)
  function UNSTAKE_AND_REDEEM_SELECTOR() view returns (bytes4)
  function UNSTAKE_SELECTOR() view returns (bytes4)
  function getCurveExchangeAddressProvider() view returns (address curveExchangeAddressProvider_)
  function getCurveExchangeWethToken() view returns (address curveExchangeWethToken_)
  function getIntegrationManager() view returns (address integrationManager_)
  function parseAssetsForAction(address, bytes4 _selector, bytes _actionData) view returns (uint8 spendAssetsHandleType_, address[] spendAssets_, uint256[] spendAssetAmounts_, address[] incomingAssets_, uint256[] minIncomingAssetAmounts_)
  function takeOrder(address _vaultProxy, bytes _actionData, bytes)
`;
