/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

export type CurveLiquidityStethAdapterArgs = [
  _integrationManager: AddressLike,
  _liquidityGaugeToken: AddressLike,
  _lpToken: AddressLike,
  _minter: AddressLike,
  _pool: AddressLike,
  _crvToken: AddressLike,
  _stethToken: AddressLike,
  _wethToken: AddressLike,
];

// prettier-ignore
export interface CurveLiquidityStethAdapter extends Contract<CurveLiquidityStethAdapter> {
  CLAIM_REWARDS_SELECTOR: Call<() => string, CurveLiquidityStethAdapter>
  LEND_AND_STAKE_SELECTOR: Call<() => string, CurveLiquidityStethAdapter>
  LEND_SELECTOR: Call<() => string, CurveLiquidityStethAdapter>
  REDEEM_SELECTOR: Call<() => string, CurveLiquidityStethAdapter>
  STAKE_SELECTOR: Call<() => string, CurveLiquidityStethAdapter>
  TAKE_ORDER_SELECTOR: Call<() => string, CurveLiquidityStethAdapter>
  UNSTAKE_AND_REDEEM_SELECTOR: Call<() => string, CurveLiquidityStethAdapter>
  UNSTAKE_SELECTOR: Call<() => string, CurveLiquidityStethAdapter>
  claimRewards: Send<(_vaultProxy: AddressLike, arg1: BytesLike, arg2: BytesLike) => void, CurveLiquidityStethAdapter>
  getCurveGaugeV2RewardsHandlerCrvToken: Call<() => string, CurveLiquidityStethAdapter>
  getCurveGaugeV2RewardsHandlerMinter: Call<() => string, CurveLiquidityStethAdapter>
  getCurveStethLiquidityPool: Call<() => string, CurveLiquidityStethAdapter>
  getCurveStethLiquidityWethToken: Call<() => string, CurveLiquidityStethAdapter>
  getIntegrationManager: Call<() => string, CurveLiquidityStethAdapter>
  getLiquidityGaugeToken: Call<() => string, CurveLiquidityStethAdapter>
  getLpToken: Call<() => string, CurveLiquidityStethAdapter>
  getStethToken: Call<() => string, CurveLiquidityStethAdapter>
  lend: Send<(_vaultProxy: AddressLike, _actionData: BytesLike, _assetData: BytesLike) => void, CurveLiquidityStethAdapter>
  lendAndStake: Send<(_vaultProxy: AddressLike, _actionData: BytesLike, _assetData: BytesLike) => void, CurveLiquidityStethAdapter>
  parseAssetsForAction: Call<(arg0: AddressLike, _selector: BytesLike, _actionData: BytesLike) => { spendAssetsHandleType_: BigNumber, spendAssets_: string[], spendAssetAmounts_: BigNumber[], incomingAssets_: string[], minIncomingAssetAmounts_: BigNumber[] }, CurveLiquidityStethAdapter>
  redeem: Send<(_vaultProxy: AddressLike, _actionData: BytesLike, _assetData: BytesLike) => void, CurveLiquidityStethAdapter>
  stake: Send<(_vaultProxy: AddressLike, _actionData: BytesLike, _assetData: BytesLike) => void, CurveLiquidityStethAdapter>
  unstake: Send<(_vaultProxy: AddressLike, _actionData: BytesLike, _assetData: BytesLike) => void, CurveLiquidityStethAdapter>
  unstakeAndRedeem: Send<(_vaultProxy: AddressLike, _actionData: BytesLike, _assetData: BytesLike) => void, CurveLiquidityStethAdapter>
}

let CurveLiquidityStethAdapterBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  CurveLiquidityStethAdapterBytecode =
    '0x6101806040523480156200001257600080fd5b5060405162003cc638038062003cc683398181016040526101008110156200003957600080fd5b508051602080830151604084015160608086015160808088015160a0808a015160c0808c015160e09c8d01516001600160601b03198d8a1b811690975283891b871690945286881b861690915283871b8516909b529481901b90921661010052969794969395919491849083908390620000cd906001600160a01b038416908590600019906200162262000129821b17901c565b505050606087811b6001600160601b03199081166101205287821b8116610140529083901b16610160526200011b6001600160a01b0387168860001962000129602090811b6200162217901c565b50505050505050506200053c565b801580620001b3575060408051636eb1769f60e11b81523060048201526001600160a01b03848116602483015291519185169163dd62ed3e91604480820192602092909190829003018186803b1580156200018357600080fd5b505afa15801562000198573d6000803e3d6000fd5b505050506040513d6020811015620001af57600080fd5b5051155b620001f05760405162461bcd60e51b815260040180806020018281038252603681526020018062003c906036913960400191505060405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620002489185916200024d16565b505050565b6060620002a9826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166200030960201b6200173a179092919060201c565b8051909150156200024857808060200190516020811015620002ca57600080fd5b5051620002485760405162461bcd60e51b815260040180806020018281038252602a81526020018062003c66602a913960400191505060405180910390fd5b60606200031a848460008562000324565b90505b9392505050565b606082471015620003675760405162461bcd60e51b815260040180806020018281038252602681526020018062003c406026913960400191505060405180910390fd5b62000372856200048c565b620003c4576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b60208310620004055780518252601f199092019160209182019101620003e4565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d806000811462000469576040519150601f19603f3d011682016040523d82523d6000602084013e6200046e565b606091505b5090925090506200048182828662000492565b979650505050505050565b3b151590565b60608315620004a35750816200031d565b825115620004b45782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101562000500578181015183820152602001620004e6565b50505050905090810190601f1680156200052e5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b60805160601c60a05160601c60c05160601c60e05160601c6101005160601c6101205160601c6101405160601c6101605160601c6135df620006616000398061116e5280612d135280612e525280612f6552806130b9525080610d735280610d945280610ff752806115d852806121f152806123a652806124b052806126e6525080610d525280610f7c5280610fd35280611108528061122052806115b55280612301528061254f5280612647528061278b525080610e9e528061178f5280611df65280612003525080610c15528061180e5280611d385280611e8e5280611f0a5250806114b3528061206a525080610e32525080610ae15280610c665280610ecb528061102452806111bf5280611257528061148f528061150452506135df6000f3fe60806040526004361061014f5760003560e01c80638214f5a4116100b6578063c29fa9dd1161006f578063c29fa9dd146106ee578063c54efee5146107c9578063e7c4569014610998578063f003eb85146109ad578063f7d882b5146109c2578063fa7dd04d146109d757610156565b80638214f5a4146104e45780638334eb99146104f9578063863e5ad0146105d457806391199f0f146105e9578063b23228cf146105fe578063b9dfbacc1461061357610156565b8063332d709f11610108578063332d709f146103a05780633ffc1591146103b557806340da225d146103ca57806355e72cc5146103df57806368e30677146103f45780637240b225146104cf57610156565b8063080456c11461015b578063099f75151461018d578063131461c01461026a5780631c76b6911461027f578063257cb1a3146102b057806329fa046e146102c557610156565b3661015657005b600080fd5b34801561016757600080fd5b50610170610ab2565b604080516001600160e01b03199092168252519081900360200190f35b34801561019957600080fd5b50610268600480360360608110156101b057600080fd5b6001600160a01b038235169190810190604081016020820135600160201b8111156101da57600080fd5b8201836020820111156101ec57600080fd5b803590602001918460018302840111600160201b8311171561020d57600080fd5b919390929091602081019035600160201b81111561022a57600080fd5b82018360208201111561023c57600080fd5b803590602001918460018302840111600160201b8311171561025d57600080fd5b509092509050610ad6565b005b34801561027657600080fd5b50610170610bef565b34801561028b57600080fd5b50610294610c13565b604080516001600160a01b039092168252519081900360200190f35b3480156102bc57600080fd5b50610170610c37565b3480156102d157600080fd5b50610268600480360360608110156102e857600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561031257600080fd5b82018360208201111561032457600080fd5b803590602001918460018302840111600160201b8311171561034557600080fd5b919390929091602081019035600160201b81111561036257600080fd5b82018360208201111561037457600080fd5b803590602001918460018302840111600160201b8311171561039557600080fd5b509092509050610c5b565b3480156103ac57600080fd5b50610294610e30565b3480156103c157600080fd5b50610170610e54565b3480156103d657600080fd5b50610170610e78565b3480156103eb57600080fd5b50610294610e9c565b34801561040057600080fd5b506102686004803603606081101561041757600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561044157600080fd5b82018360208201111561045357600080fd5b803590602001918460018302840111600160201b8311171561047457600080fd5b919390929091602081019035600160201b81111561049157600080fd5b8201836020820111156104a357600080fd5b803590602001918460018302840111600160201b831117156104c457600080fd5b509092509050610ec0565b3480156104db57600080fd5b50610294610fd1565b3480156104f057600080fd5b50610294610ff5565b34801561050557600080fd5b506102686004803603606081101561051c57600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561054657600080fd5b82018360208201111561055857600080fd5b803590602001918460018302840111600160201b8311171561057957600080fd5b919390929091602081019035600160201b81111561059657600080fd5b8201836020820111156105a857600080fd5b803590602001918460018302840111600160201b831117156105c957600080fd5b509092509050611019565b3480156105e057600080fd5b50610170611148565b3480156105f557600080fd5b5061029461116c565b34801561060a57600080fd5b50610170611190565b34801561061f57600080fd5b506102686004803603606081101561063657600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561066057600080fd5b82018360208201111561067257600080fd5b803590602001918460018302840111600160201b8311171561069357600080fd5b919390929091602081019035600160201b8111156106b057600080fd5b8201836020820111156106c257600080fd5b803590602001918460018302840111600160201b831117156106e357600080fd5b5090925090506111b4565b3480156106fa57600080fd5b506102686004803603606081101561071157600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561073b57600080fd5b82018360208201111561074d57600080fd5b803590602001918460018302840111600160201b8311171561076e57600080fd5b919390929091602081019035600160201b81111561078b57600080fd5b82018360208201111561079d57600080fd5b803590602001918460018302840111600160201b831117156107be57600080fd5b50909250905061124c565b3480156107d557600080fd5b50610863600480360360608110156107ec57600080fd5b6001600160a01b03823516916001600160e01b031960208201351691810190606081016040820135600160201b81111561082557600080fd5b82018360208201111561083757600080fd5b803590602001918460018302840111600160201b8311171561085857600080fd5b509092509050611342565b6040518086600281111561087357fe5b815260200180602001806020018060200180602001858103855289818151815260200191508051906020019060200280838360005b838110156108c05781810151838201526020016108a8565b50505050905001858103845288818151815260200191508051906020019060200280838360005b838110156108ff5781810151838201526020016108e7565b50505050905001858103835287818151815260200191508051906020019060200280838360005b8381101561093e578181015183820152602001610926565b50505050905001858103825286818151815260200191508051906020019060200280838360005b8381101561097d578181015183820152602001610965565b50505050905001995050505050505050505060405180910390f35b3480156109a457600080fd5b5061029461148d565b3480156109b957600080fd5b506102946114b1565b3480156109ce57600080fd5b506101706114d5565b3480156109e357600080fd5b50610268600480360360608110156109fa57600080fd5b6001600160a01b038235169190810190604081016020820135600160201b811115610a2457600080fd5b820183602082011115610a3657600080fd5b803590602001918460018302840111600160201b83111715610a5757600080fd5b919390929091602081019035600160201b811115610a7457600080fd5b820183602082011115610a8657600080fd5b803590602001918460018302840111600160201b83111715610aa757600080fd5b5090925090506114f9565b7f8334eb99be0145865eba9889fca2ee920288090caefff4cc776038e20ad9259a81565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610b3d5760405162461bcd60e51b81526004018080602001828103825260328152602001806133f06032913960400191505060405180910390fd5b8482828080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250604080516020601f8c018190048102820181019092528a8152919450849350839250610bb791908b908b908190840183828082843760009201919091525061175392505050565b925092509250610bc8838383611787565b5050506060610bd6826118de565b92505050610be48382611a9b565b505050505050505050565b7f29fa046e79524c3c5ac4c01df692c35e217802b2b13b21121b76cf0ef02b138c81565b7f000000000000000000000000000000000000000000000000000000000000000090565b7f099f75155f0e997bf83a7993a71d5e7e7540bd386fe1e84643a09ce6b412521981565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610cc25760405162461bcd60e51b81526004018080602001828103825260328152602001806133f06032913960400191505060405180910390fd5b8482828080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250604080516020601f8c018190048102820181019092528a8152919450849350839250610d3c91908b908b908190840183828082843760009201919091525061175392505050565b925092509250610d4d838383611787565b610bc87f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610dff57600080fd5b505afa158015610e13573d6000803e3d6000fd5b505050506040513d6020811015610e2957600080fd5b5051611bf6565b7f000000000000000000000000000000000000000000000000000000000000000090565b7ffa7dd04da627f433da73c4355ead9c75682a67a8fc84d3f6170ef0922f402d2481565b7fb9dfbaccbe5cd2a84fdcf1d15f23ef25d23086f5afbaa99516065ed4a5bbc7a381565b7f000000000000000000000000000000000000000000000000000000000000000090565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610f275760405162461bcd60e51b81526004018080602001828103825260328152602001806133f06032913960400191505060405180910390fd5b8482828080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8a01819004810282018101909252888152610fc693507f00000000000000000000000000000000000000000000000000000000000000009250610fc1918a908a9081908401838280828437600092019190915250611c6c92505050565b611c8b565b6060610bd6826118de565b7f000000000000000000000000000000000000000000000000000000000000000090565b7f000000000000000000000000000000000000000000000000000000000000000090565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146110805760405162461bcd60e51b81526004018080602001828103825260328152602001806133f06032913960400191505060405180910390fd5b8482828080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250604080516020601f8c018190048102820181019092528a815291945084935083925082916110fb918c908c9081908401838280828437600092019190915250611ced92505050565b935093509350935061112d7f000000000000000000000000000000000000000000000000000000000000000085611c8b565b61113984848484611d2a565b505050506060610bd6826118de565b7f03e38a2bd7063d45c897edeafc330e71657502dd86434d3c37a489caf116af6981565b7f000000000000000000000000000000000000000000000000000000000000000090565b7f68e30677f607df46e87da13e15b637784cfa62374b653f35ab43d10361a2f83081565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461121b5760405162461bcd60e51b81526004018080602001828103825260328152602001806133f06032913960400191505060405180910390fd5b6112457f000000000000000000000000000000000000000000000000000000000000000086612068565b5050505050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146112b35760405162461bcd60e51b81526004018080602001828103825260328152602001806133f06032913960400191505060405180910390fd5b8482828080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250604080516020601f8c018190048102820181019092528a8152919450849350839250829161132e918c908c9081908401838280828437600092019190915250611ced92505050565b935093509350935061113984848484611d2a565b600060608080806001600160e01b03198816632e77eeb360e21b14156113795761136a61210e565b94509450945094509450611482565b6001600160e01b0319881663099f751560e01b141561139c5761136a878761216e565b6001600160e01b031988166314fd023760e11b14156113bf5761136a878761227e565b6001600160e01b0319881663c29fa9dd60e01b14156113e25761136a878761232d565b6001600160e01b0319881663fa7dd04d60e01b14156114055761136a8787612443565b6001600160e01b031988166368e3067760e01b14156114285761136a87876125da565b6001600160e01b03198816638334eb9960e01b141561144b5761136a8787612712565b60405162461bcd60e51b81526004018080602001828103825260278152602001806135836027913960400191505060405180910390fd5b945094509450945094565b7f000000000000000000000000000000000000000000000000000000000000000090565b7f000000000000000000000000000000000000000000000000000000000000000090565b7fc29fa9dde84204c2908778afd0613d802d31cf046179b88f6d2b4a4e507ea2d581565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146115605760405162461bcd60e51b81526004018080602001828103825260328152602001806133f06032913960400191505060405180910390fd5b8482828080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8a01819004810282018101909252888152610fc693507f000000000000000000000000000000000000000000000000000000000000000092507f00000000000000000000000000000000000000000000000000000000000000009161161d91908b908b9081908401838280828437600092019190915250611c6c92505050565b611bf6565b8015806116a8575060408051636eb1769f60e11b81523060048201526001600160a01b03848116602483015291519185169163dd62ed3e91604480820192602092909190829003018186803b15801561167a57600080fd5b505afa15801561168e573d6000803e3d6000fd5b505050506040513d60208110156116a457600080fd5b5051155b6116e35760405162461bcd60e51b81526004018080602001828103825260368152602001806134df6036913960400191505060405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526117359084906127b7565b505050565b60606117498484600085612868565b90505b9392505050565b600080600083806020019051606081101561176d57600080fd5b508051602082015160409092015190969195509350915050565b821561180c577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316632e1a7d4d846040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b1580156117f357600080fd5b505af1158015611807573d6000803e3d6000fd5b505050505b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630b4c7e4d84604051806040016040528087815260200186815250846040518463ffffffff1660e01b81526004018083600260200280838360005b83811015611889578181015183820152602001611871565b50505050905001828152602001925050506020604051808303818588803b1580156118b357600080fd5b505af11580156118c7573d6000803e3d6000fd5b50505050506040513d602081101561124557600080fd5b60608060608380602001905160608110156118f857600080fd5b8101908080516040519392919084600160201b82111561191757600080fd5b90830190602082018581111561192c57600080fd5b82518660208202830111600160201b8211171561194857600080fd5b82525081516020918201928201910280838360005b8381101561197557818101518382015260200161195d565b5050505090500160405260200180516040519392919084600160201b82111561199d57600080fd5b9083019060208201858111156119b257600080fd5b82518660208202830111600160201b821117156119ce57600080fd5b82525081516020918201928201910280838360005b838110156119fb5781810151838201526020016119e3565b5050505090500160405260200180516040519392919084600160201b821115611a2357600080fd5b908301906020820185811115611a3857600080fd5b82518660208202830111600160201b82111715611a5457600080fd5b82525081516020918201928201910280838360005b83811015611a81578181015183820152602001611a69565b505050509050016040525050509250925092509193909250565b6060815167ffffffffffffffff81118015611ab557600080fd5b50604051908082528060200260200182016040528015611adf578160200160208202803683370190505b50905060005b8251811015611bef576000838281518110611afc57fe5b60200260200101519050806001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015611b5357600080fd5b505afa158015611b67573d6000803e3d6000fd5b505050506040513d6020811015611b7d57600080fd5b50518351849084908110611b8d57fe5b6020026020010181815250506000838381518110611ba757fe5b60200260200101511115611be657611be685848481518110611bc557fe5b6020026020010151836001600160a01b03166129c49092919063ffffffff16565b50600101611ae5565b5092915050565b611c01828483612a16565b60408051636e553f6560e01b81526004810183905230602482015290516001600160a01b03851691636e553f6591604480830192600092919082900301818387803b158015611c4f57600080fd5b505af1158015611c63573d6000803e3d6000fd5b50505050505050565b6000818060200190516020811015611c8357600080fd5b505192915050565b816001600160a01b0316632e1a7d4d826040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b158015611cd157600080fd5b505af1158015611ce5573d6000803e3d6000fd5b505050505050565b600080600080848060200190516080811015611d0857600080fd5b5080516020820151604083015160609093015191989097509195509350915050565b8015611f08578215611e5f577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316631a4d01d2856000866040518463ffffffff1660e01b81526004018084815260200183600f0b81526020018281526020019350505050602060405180830381600087803b158015611db057600080fd5b505af1158015611dc4573d6000803e3d6000fd5b505050506040513d6020811015611dda57600080fd5b505060408051630d0e30db60e41b815290516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169163d0e30db09130319160048082019260009290919082900301818588803b158015611e4157600080fd5b505af1158015611e55573d6000803e3d6000fd5b5050505050611f03565b60408051630d2680e960e11b815260048101869052600160248201526044810184905290516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001691631a4d01d29160648083019260209291908290030181600087803b158015611ed657600080fd5b505af1158015611eea573d6000803e3d6000fd5b505050506040513d6020811015611f0057600080fd5b50505b612062565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316635b36389c856040518060400160405280878152602001868152506040518363ffffffff1660e01b81526004018083815260200182600260200280838360005b83811015611f8a578181015183820152602001611f72565b50505050905001925050506040805180830381600087803b158015611fae57600080fd5b505af1158015611fc2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506040811015611fe757600080fd5b505060408051630d0e30db60e41b815290516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169163d0e30db09130319160048082019260009290919082900301818588803b15801561204e57600080fd5b505af1158015610be4573d6000803e3d6000fd5b50505050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166327f18ae383836040518363ffffffff1660e01b815260040180836001600160a01b03168152602001826001600160a01b0316815260200192505050600060405180830381600087803b1580156120e857600080fd5b505af11580156120fc573d6000803e3d6000fd5b5050505061210a8282612c55565b5050565b600060608080808480604051908082528060200260200182016040528015612140578160200160208202803683370190505b5060408051600080825260208201818152828401918252606083019093529399929850965094509092509050565b600060608060608060008060006121ba8a8a8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061175392505050565b9250925092506121ca8383612ca4565b604080516001808252818301909252929950909750602080830190803683370190505094507f00000000000000000000000000000000000000000000000000000000000000008560008151811061221d57fe5b6001600160a01b0392909216602092830291909101820152604080516001808252818301909252918281019080368337019050509350808460008151811061226157fe5b602002602001018181525050600297505050509295509295909350565b600060608060608060008060006122ca8a8a8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061175392505050565b9250925092506122da8383612ca4565b604080516001808252818301909252929950909750602080830190803683370190505094507f00000000000000000000000000000000000000000000000000000000000000008560008151811061221d57fe5b600060608060608060008060008061237a8b8b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611ced92505050565b6040805160018082528183019092529498509296509094509250602080830190803683370190505097507f0000000000000000000000000000000000000000000000000000000000000000886000815181106123d257fe5b6001600160a01b0392909216602092830291909101820152604080516001808252818301909252918281019080368337019050509650838760008151811061241657fe5b60200260200101818152505061242d838383612ed6565b60029d999c50979a509850959695505050505050565b6000606080606080600061248c88888080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611c6c92505050565b604080516001808252818301909252919250602080830190803683370190505094507f0000000000000000000000000000000000000000000000000000000000000000856000815181106124dc57fe5b6001600160a01b0392909216602092830291909101820152604080516001808252818301909252918281019080368337019050509350808460008151811061252057fe5b6020908102919091010152604080516001808252818301909252908160200160208202803683370190505092507f00000000000000000000000000000000000000000000000000000000000000008360008151811061257b57fe5b6001600160a01b039290921660209283029190910182015260408051600180825281830190925291828101908036833701905050915080826000815181106125bf57fe5b60200260200101818152505060029550509295509295909350565b6000606080606080600061262388888080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611c6c92505050565b604080516001808252818301909252919250602080830190803683370190505094507f00000000000000000000000000000000000000000000000000000000000000008560008151811061267357fe5b6001600160a01b039290921660209283029190910182015260408051600180825281830190925291828101908036833701905050935080846000815181106126b757fe5b6020908102919091010152604080516001808252818301909252908160200160208202803683370190505092507f00000000000000000000000000000000000000000000000000000000000000008360008151811061257b57fe5b600060608060608060008060008061275f8b8b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611ced92505050565b6040805160018082528183019092529498509296509094509250602080830190803683370190505097507f0000000000000000000000000000000000000000000000000000000000000000886000815181106123d257fe5b606061280c826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661173a9092919063ffffffff16565b8051909150156117355780806020019051602081101561282b57600080fd5b50516117355760405162461bcd60e51b815260040180806020018281038252602a8152602001806134b5602a913960400191505060405180910390fd5b6060824710156128a95760405162461bcd60e51b81526004018080602001828103825260268152602001806133a66026913960400191505060405180910390fd5b6128b28561315b565b612903576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106129425780518252601f199092019160209182019101612923565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146129a4576040519150601f19603f3d011682016040523d82523d6000602084013e6129a9565b606091505b50915091506129b9828286613161565b979650505050505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526117359084906127b7565b60408051636eb1769f60e11b81523060048201526001600160a01b038481166024830152915160009286169163dd62ed3e916044808301926020929190829003018186803b158015612a6757600080fd5b505afa158015612a7b573d6000803e3d6000fd5b505050506040513d6020811015612a9157600080fd5b505160408051606081019091526026808252919250612ab891613539602083013982613205565b81811015612c3457612ae160405180606001604052806028815260200161337e602891396132b3565b8015612b8d57836001600160a01b031663095ea7b38460006040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b158015612b3f57600080fd5b505af1158015612b53573d6000803e3d6000fd5b505050506040513d6020811015612b6957600080fd5b505060408051606081019091526024808252612b8d919061355f60208301396132b3565b836001600160a01b031663095ea7b3846000196040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b158015612be657600080fd5b505af1158015612bfa573d6000803e3d6000fd5b505050506040513d6020811015612c1057600080fd5b505060408051606081019091526024808252612c34919061351560208301396132b3565b6120626040518060600160405280602481526020016133cc602491396132b3565b816001600160a01b03166384e9bd7e826040518263ffffffff1660e01b815260040180826001600160a01b03168152602001915050600060405180830381600087803b158015611cd157600080fd5b606080600084118015612cb75750600083115b15612db1576040805160028082526060820183529091602083019080368337019050509150612ce4610e9c565b82600081518110612cf157fe5b60200260200101906001600160a01b031690816001600160a01b0316815250507f000000000000000000000000000000000000000000000000000000000000000082600181518110612d3f57fe5b6001600160a01b03929092166020928302919091018201526040805160028082526060820183529092909190830190803683370190505090508381600081518110612d8657fe5b6020026020010181815250508281600181518110612da057fe5b602002602001018181525050612ecf565b8315612e30576040805160018082528183019092529060208083019080368337019050509150612ddf610e9c565b82600081518110612dec57fe5b6001600160a01b03929092166020928302919091018201526040805160018082528183019092529182810190803683370190505090508381600081518110612da057fe5b60408051600180825281830190925290602080830190803683370190505091507f000000000000000000000000000000000000000000000000000000000000000082600081518110612e7e57fe5b6001600160a01b03929092166020928302919091018201526040805160018082528183019092529182810190803683370190505090508281600081518110612ec257fe5b6020026020010181815250505b9250929050565b6060808215613062576040805160018082528183019092529060208083019080368337505060408051600180825281830190925292945090506020808301908036833701905050905084612fd05760008411612f635760405162461bcd60e51b815260040180806020018281038252604681526020018061346f6046913960600191505060405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000082600081518110612f9157fe5b60200260200101906001600160a01b031690816001600160a01b0316815250508381600081518110612fbf57fe5b60200260200101818152505061305d565b831561300d5760405162461bcd60e51b815260040180806020018281038252604d815260200180613422604d913960600191505060405180910390fd5b613015610e9c565b8260008151811061302257fe5b60200260200101906001600160a01b031690816001600160a01b031681525050848160008151811061305057fe5b6020026020010181815250505b613153565b604080516002808252606082018352909160208301908036833701905050915061308a610e9c565b8260008151811061309757fe5b60200260200101906001600160a01b031690816001600160a01b0316815250507f0000000000000000000000000000000000000000000000000000000000000000826001815181106130e557fe5b6001600160a01b0392909216602092830291909101820152604080516002808252606082018352909290919083019080368337019050509050848160008151811061312c57fe5b602002602001018181525050838160018151811061314657fe5b6020026020010181815250505b935093915050565b3b151590565b6060831561317057508161174c565b8251156131805782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156131ca5781810151838201526020016131b2565b50505050905090810190601f1680156131f75780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b61210a82826040516024018080602001838152602001828103825284818151815260200191508051906020019080838360005b83811015613250578181015183820152602001613238565b50505050905090810190601f16801561327d5780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b03166309710a9d60e41b179052935061335c92505050565b613359816040516024018080602001828103825283818151815260200191508051906020019080838360005b838110156132f75781810151838201526020016132df565b50505050905090810190601f1680156133245780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b031663104c13eb60e21b179052925061335c915050565b50565b80516a636f6e736f6c652e6c6f67602083016000808483855afa505050505056fe5f5f617070726f766541737365744d617841734e65656465643a6265666f726520617070726f7665416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c5f5f617070726f766541737365744d617841734e65656465643a617070726f76656420334f6e6c792074686520496e746567726174696f6e4d616e616765722063616e2063616c6c20746869732066756e6374696f6e5f5f7061727365496e636f6d696e67417373657473466f72526564656d7074696f6e43616c6c733a20546f6f206d616e79206d696e20617373657420616d6f756e7473207370656369666965645f5f7061727365496e636f6d696e67417373657473466f72526564656d7074696f6e43616c6c733a204e6f206d696e20617373657420616d6f756e74207370656369666965645361666545524332303a204552433230206f7065726174696f6e20646964206e6f7420737563636565645361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f20746f206e6f6e2d7a65726f20616c6c6f77616e63655f5f617070726f766541737365744d617841734e65656465643a617070726f76656420325f5f617070726f766541737365744d617841734e65656465643a616c6c6f77616e63653a25645f5f617070726f766541737365744d617841734e65656465643a617070726f76656420317061727365417373657473466f72416374696f6e3a205f73656c6563746f7220696e76616c6964a2646970667358221220bfa97c9edba01eccfbb3acd4f129d90a8f77eacf4f289039fc5c41581153ec0764736f6c634300060c0033416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c5361666545524332303a204552433230206f7065726174696f6e20646964206e6f7420737563636565645361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f20746f206e6f6e2d7a65726f20616c6c6f77616e6365';
}

// prettier-ignore
export const CurveLiquidityStethAdapter = contract<CurveLiquidityStethAdapter, CurveLiquidityStethAdapterArgs>(CurveLiquidityStethAdapterBytecode)`
  constructor(address _integrationManager, address _liquidityGaugeToken, address _lpToken, address _minter, address _pool, address _crvToken, address _stethToken, address _wethToken)
  function CLAIM_REWARDS_SELECTOR() view returns (bytes4)
  function LEND_AND_STAKE_SELECTOR() view returns (bytes4)
  function LEND_SELECTOR() view returns (bytes4)
  function REDEEM_SELECTOR() view returns (bytes4)
  function STAKE_SELECTOR() view returns (bytes4)
  function TAKE_ORDER_SELECTOR() view returns (bytes4)
  function UNSTAKE_AND_REDEEM_SELECTOR() view returns (bytes4)
  function UNSTAKE_SELECTOR() view returns (bytes4)
  function claimRewards(address _vaultProxy, bytes, bytes)
  function getCurveGaugeV2RewardsHandlerCrvToken() view returns (address crvToken_)
  function getCurveGaugeV2RewardsHandlerMinter() view returns (address minter_)
  function getCurveStethLiquidityPool() view returns (address pool_)
  function getCurveStethLiquidityWethToken() view returns (address wethToken_)
  function getIntegrationManager() view returns (address integrationManager_)
  function getLiquidityGaugeToken() view returns (address liquidityGaugeToken_)
  function getLpToken() view returns (address lpToken_)
  function getStethToken() view returns (address stethToken_)
  function lend(address _vaultProxy, bytes _actionData, bytes _assetData)
  function lendAndStake(address _vaultProxy, bytes _actionData, bytes _assetData)
  function parseAssetsForAction(address, bytes4 _selector, bytes _actionData) view returns (uint8 spendAssetsHandleType_, address[] spendAssets_, uint256[] spendAssetAmounts_, address[] incomingAssets_, uint256[] minIncomingAssetAmounts_)
  function redeem(address _vaultProxy, bytes _actionData, bytes _assetData)
  function stake(address _vaultProxy, bytes _actionData, bytes _assetData)
  function unstake(address _vaultProxy, bytes _actionData, bytes _assetData)
  function unstakeAndRedeem(address _vaultProxy, bytes _actionData, bytes _assetData)
`;
