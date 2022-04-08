/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

export type GuaranteedRedemptionPolicyArgs = [
  _policyManager: AddressLike,
  _fundDeployer: AddressLike,
  _redemptionWindowBuffer: BigNumberish,
  _redemptionBlockingAdapters: AddressLike[],
];

// prettier-ignore
export interface GuaranteedRedemptionPolicy extends Contract<GuaranteedRedemptionPolicy> {
  activateForFund: Send<(arg0: AddressLike) => void, GuaranteedRedemptionPolicy>
  adapterCanBlockRedemption: Call<(_adapter: AddressLike) => boolean, GuaranteedRedemptionPolicy>
  addFundSettings: Send<(_comptrollerProxy: AddressLike, _encodedSettings: BytesLike) => void, GuaranteedRedemptionPolicy>
  addRedemptionBlockingAdapters: Send<(_adapters: AddressLike[]) => void, GuaranteedRedemptionPolicy>
  calcLatestRedemptionWindowStart: Call<(_startTimestamp: BigNumberish) => BigNumber, GuaranteedRedemptionPolicy>
  canDisable: Call<() => boolean, GuaranteedRedemptionPolicy>
  getFundDeployer: Call<() => string, GuaranteedRedemptionPolicy>
  getOwner: Call<() => string, GuaranteedRedemptionPolicy>
  getPolicyManager: Call<() => string, GuaranteedRedemptionPolicy>
  getRedemptionWindowBuffer: Call<() => BigNumber, GuaranteedRedemptionPolicy>
  getRedemptionWindowForFund: Call<(_comptrollerProxy: AddressLike) => { startTimestamp: BigNumber, duration: BigNumber }, GuaranteedRedemptionPolicy>
  identifier: Call<() => string, GuaranteedRedemptionPolicy>
  implementedHooks: Call<() => BigNumber[], GuaranteedRedemptionPolicy>
  passesRule: Call<(_comptrollerProxy: AddressLike, _adapter: AddressLike) => boolean, GuaranteedRedemptionPolicy>
  removeRedemptionBlockingAdapters: Send<(_adapters: AddressLike[]) => void, GuaranteedRedemptionPolicy>
  setRedemptionWindowBuffer: Send<(_nextRedemptionWindowBuffer: BigNumberish) => void, GuaranteedRedemptionPolicy>
  updateFundSettings: Send<(arg0: AddressLike, arg1: BytesLike) => void, GuaranteedRedemptionPolicy>
  validateRule: Send<(_comptrollerProxy: AddressLike, arg1: BigNumberish, _encodedArgs: BytesLike) => boolean, GuaranteedRedemptionPolicy>
}

let GuaranteedRedemptionPolicyBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  GuaranteedRedemptionPolicyBytecode =
    '0x60c06040523480156200001157600080fd5b5060405162001f1e38038062001f1e83398101604081905262000034916200027f565b6001600160601b0319606085811b821660805284901b1660a05260028290556200005e8162000068565b5050505062000471565b60005b8151811015620001b45760006001600160a01b03168282815181106200008d57fe5b60200260200101516001600160a01b03161415620000c85760405162461bcd60e51b8152600401620000bf90620003c2565b60405180910390fd5b620000ed828281518110620000d957fe5b6020026020010151620001b860201b60201c565b156200010d5760405162461bcd60e51b8152600401620000bf90620003d4565b60016000808484815181106200011f57fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a81548160ff0219169083151502179055507fcf9c2c7f9adbb156bd76affb04df84595f8f5e69cab2e61221b05b05a902fa268282815181106200018c57fe5b6020026020010151604051620001a39190620003b2565b60405180910390a16001016200006b565b5050565b6001600160a01b031660009081526020819052604090205460ff1690565b8051620001e3816200044c565b92915050565b600082601f830112620001fb57600080fd5b8151620002126200020c826200040d565b620003e6565b915081818352602084019350602081019050838560208402820111156200023857600080fd5b60005b83811015620002685781620002518882620001d6565b84525060209283019291909101906001016200023b565b5050505092915050565b8051620001e38162000466565b600080600080608085870312156200029657600080fd5b6000620002a48787620001d6565b9450506020620002b787828801620001d6565b9350506040620002ca8782880162000272565b92505060608501516001600160401b03811115620002e757600080fd5b620002f587828801620001e9565b91505092959194509250565b6200030c8162000437565b82525050565b6000620003216038836200042e565b60008051602062001efe83398151915281527f20616461707465722063616e6e6f7420626520656d7074790000000000000000602082015260400192915050565b6000620003716036836200042e565b60008051602062001efe83398151915281527f206164617074657220616c726561647920616464656400000000000000000000602082015260400192915050565b60208101620001e3828462000301565b60208082528101620001e38162000312565b60208082528101620001e38162000362565b6040518181016001600160401b03811182821017156200040557600080fd5b604052919050565b60006001600160401b038211156200042457600080fd5b5060209081020190565b90815260200190565b60006001600160a01b038216620001e3565b90565b620004578162000437565b81146200046357600080fd5b50565b620004578162000449565b60805160601c60a05160601c611a54620004aa60003980610537528061061d52806106445250806102a952806108fd5250611a546000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c80638e05b36a116100a2578063cbf54bb211610071578063cbf54bb214610227578063ceb9a0ad1461023c578063d44ad6cb1461024f578063e0b9ae4014610257578063ef877c0f1461026a57610116565b80638e05b36a146101e657806397c0ac87146101f95780639c2f61d614610201578063b67cb40c1461021457610116565b8063579be718116100e9578063579be71814610176578063710304531461018957806374dc6b4b1461019c5780637998a1c4146101bc578063893d20e8146101d157610116565b80630d4d75101461011b5780630f5f6b4f146101305780631ef92578146101435780632057e3b614610161575b600080fd5b61012e610129366004610ff1565b61027d565b005b61012e61013e366004610ff1565b61029e565b61014b61042f565b6040516101589190611750565b60405180910390f35b610169610434565b60405161015891906118a8565b61014b610184366004611047565b61043a565b61014b610197366004610e7f565b610498565b6101af6101aa366004610e7f565b6104ba565b604051610158919061187f565b6101c4610504565b604051610158919061175e565b6101d9610533565b6040516101589190611731565b6101696101f4366004611121565b6105cb565b6101d96105fd565b61012e61020f3660046110af565b610666565b61014b610222366004610fb7565b6107b3565b61022f6108a1565b604051610158919061173f565b61012e61024a366004610e7f565b6108f8565b6101d96108fb565b61012e610265366004611121565b61091f565b61012e6102783660046110af565b6109bd565b60405162461bcd60e51b8152600401610295906117bf565b60405180910390fd5b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146102e65760405162461bcd60e51b8152600401610295906117ff565b6000806102f5838501856110f1565b91509150816001600160801b031660001415610339576001600160801b038116156103325760405162461bcd60e51b8152600401610295906117cf565b505061042a565b42826001600160801b0316106103615760405162461bcd60e51b81526004016102959061186f565b6000816001600160801b0316118015610386575062014370816001600160801b031611155b6103a25760405162461bcd60e51b81526004016102959061185f565b6001600160a01b0385166000818152600160205260409081902080546001600160801b03858116600160801b028188166fffffffffffffffffffffffffffffffff199093169290921716179055517f80cc2d4ed90a3144f9361fef27565cc5de45def7e45a5b330d79fa9e40c3796f9061041f908590859061188d565b60405180910390a250505b505050565b600090565b60025490565b60008061047c84848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610a5292505050565b505050505091505061048e86826107b3565b9695505050505050565b6001600160a01b03811660009081526020819052604090205460ff165b919050565b6104c2610ca1565b506001600160a01b03166000908152600160209081526040918290208251808401909352546001600160801b038082168452600160801b909104169082015290565b60408051808201909152601581527423aaa0a920a72a22a2a22fa922a222a6a82a24a7a760591b602082015290565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663893d20e86040518163ffffffff1660e01b815260040160206040518083038186803b15801561058e57600080fd5b505afa1580156105a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105c69190610e9d565b905090565b6000806105d84284610a88565b905060006105e98262015180610ab0565b90506105f54282610a88565b949350505050565b60006106416040518060600160405280602981526020016119f6602991397f0000000000000000000000000000000000000000000000000000000000000000610ae2565b507f000000000000000000000000000000000000000000000000000000000000000090565b61066e610533565b6001600160a01b0316336001600160a01b03161461069e5760405162461bcd60e51b81526004016102959061179f565b806106bb5760405162461bcd60e51b81526004016102959061183f565b60005b8181101561042a576106ea8383838181106106d557fe5b90506020020160208101906101979190610e7f565b6107065760405162461bcd60e51b81526004016102959061181f565b600080600085858581811061071757fe5b905060200201602081019061072c9190610e7f565b6001600160a01b031681526020810191909152604001600020805460ff19169115159190911790557fdf980d21d8c7bb34800e668dbe003299093bac8e693614151d3c57f73f98a93d83838381811061078157fe5b90506020020160208101906107969190610e7f565b6040516107a39190611731565b60405180910390a16001016106be565b60006107be82610498565b6107ca5750600161089b565b6107d2610ca1565b506001600160a01b0383166000908152600160209081526040918290208251808401909352546001600160801b03808216808552600160801b909204169183019190915261082457600091505061089b565b600061083c82600001516001600160801b03166105cb565b905061085e82602001516001600160801b031682610b2790919063ffffffff16565b4211801561088457506002546108819061087b8362015180610b27565b90610a88565b42105b156108945760019250505061089b565b6000925050505b92915050565b604080516001808252818301909252606091602080830190803683370190505090506001816000815181106108d257fe5b602002602001019060098111156108e557fe5b908160098111156108f257fe5b90525090565b50565b7f000000000000000000000000000000000000000000000000000000000000000090565b610927610533565b6001600160a01b0316336001600160a01b0316146109575760405162461bcd60e51b81526004016102959061179f565b6002548181141561097a5760405162461bcd60e51b81526004016102959061184f565b60028290556040517f72325148df4fbe9f28de10305dd97d6bf5531327e3db352c17dd75f123a90751906109b190839085906118b6565b60405180910390a15050565b6109c5610533565b6001600160a01b0316336001600160a01b0316146109f55760405162461bcd60e51b81526004016102959061179f565b80610a125760405162461bcd60e51b81526004016102959061180f565b610a4e828280806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250610b5392505050565b5050565b600080600060608060608087806020019051810190610a719190610ebb565b959e949d50929b5090995097509550909350915050565b600082821115610aaa5760405162461bcd60e51b8152600401610295906117df565b50900390565b6000808211610ad15760405162461bcd60e51b8152600401610295906117ef565b818381610ada57fe5b069392505050565b610a4e8282604051602401610af892919061176f565b60408051601f198184030181529190526020810180516001600160e01b031663319af33360e01b179052610c80565b600082820183811015610b4c5760405162461bcd60e51b8152600401610295906117af565b9392505050565b60005b8151811015610a4e5760006001600160a01b0316828281518110610b7657fe5b60200260200101516001600160a01b03161415610ba55760405162461bcd60e51b81526004016102959061178f565b610bc1828281518110610bb457fe5b6020026020010151610498565b15610bde5760405162461bcd60e51b81526004016102959061182f565b6001600080848481518110610bef57fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a81548160ff0219169083151502179055507fcf9c2c7f9adbb156bd76affb04df84595f8f5e69cab2e61221b05b05a902fa26828281518110610c5b57fe5b6020026020010151604051610c709190611731565b60405180910390a1600101610b56565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b604080518082019091526000808252602082015290565b803561089b816119b9565b805161089b816119b9565b60008083601f840112610ce057600080fd5b50813567ffffffffffffffff811115610cf857600080fd5b602083019150836020820283011115610d1057600080fd5b9250929050565b600082601f830112610d2857600080fd5b8151610d3b610d36826118f8565b6118d1565b91508181835260208401935060208101905083856020840282011115610d6057600080fd5b60005b83811015610d8c5781610d768882610cc3565b8452506020928301929190910190600101610d63565b5050505092915050565b600082601f830112610da757600080fd5b8151610db5610d36826118f8565b91508181835260208401935060208101905083856020840282011115610dda57600080fd5b60005b83811015610d8c5781610df08882610e74565b8452506020928301929190910190600101610ddd565b805161089b816119cd565b60008083601f840112610e2357600080fd5b50813567ffffffffffffffff811115610e3b57600080fd5b602083019150836001820283011115610d1057600080fd5b803561089b816119d6565b803561089b816119e3565b803561089b816119ec565b805161089b816119ec565b600060208284031215610e9157600080fd5b60006105f58484610cb8565b600060208284031215610eaf57600080fd5b60006105f58484610cc3565b600080600080600080600060e0888a031215610ed657600080fd5b6000610ee28a8a610cc3565b9750506020610ef38a828b01610cc3565b9650506040610f048a828b01610e06565b955050606088015167ffffffffffffffff811115610f2157600080fd5b610f2d8a828b01610d17565b945050608088015167ffffffffffffffff811115610f4a57600080fd5b610f568a828b01610d96565b93505060a088015167ffffffffffffffff811115610f7357600080fd5b610f7f8a828b01610d17565b92505060c088015167ffffffffffffffff811115610f9c57600080fd5b610fa88a828b01610d96565b91505092959891949750929550565b60008060408385031215610fca57600080fd5b6000610fd68585610cb8565b9250506020610fe785828601610cb8565b9150509250929050565b60008060006040848603121561100657600080fd5b60006110128686610cb8565b935050602084013567ffffffffffffffff81111561102f57600080fd5b61103b86828701610e11565b92509250509250925092565b6000806000806060858703121561105d57600080fd5b60006110698787610cb8565b945050602061107a87828801610e53565b935050604085013567ffffffffffffffff81111561109757600080fd5b6110a387828801610e11565b95989497509550505050565b600080602083850312156110c257600080fd5b823567ffffffffffffffff8111156110d957600080fd5b6110e585828601610cce565b92509250509250929050565b6000806040838503121561110457600080fd5b60006111108585610e5e565b9250506020610fe785828601610e5e565b60006020828403121561113357600080fd5b60006105f58484610e69565b600061114b83836111c4565b505060200190565b61115c8161192c565b82525050565b600061116d8261191f565b6111778185611923565b935061118283611919565b8060005b838110156111b057815161119a888261113f565b97506111a583611919565b925050600101611186565b509495945050505050565b61115c81611937565b61115c8161196e565b60006111d88261191f565b6111e28185611923565b93506111f2818560208601611979565b6111fb816119a5565b9093019392505050565b6000611212603883611923565b7f5f5f616464526564656d7074696f6e426c6f636b696e6741646170746572733a81527f20616461707465722063616e6e6f7420626520656d7074790000000000000000602082015260400192915050565b6000611271604983611923565b7f6f6e6c7946756e644465706c6f7965724f776e65723a204f6e6c79207468652081527f46756e644465706c6f796572206f776e65722063616e2063616c6c207468697360208201526810333ab731ba34b7b760b91b604082015260600192915050565b60006112e2601b83611923565b7f536166654d6174683a206164646974696f6e206f766572666c6f770000000000815260200192915050565b600061131b603783611923565b7f75706461746546756e6453657474696e67733a2055706461746573206e6f742081527f616c6c6f77656420666f72207468697320706f6c696379000000000000000000602082015260400192915050565b600061137a603a83611923565b7f61646446756e6453657474696e67733a206475726174696f6e206d757374206281527f65203020696620737461727454696d657374616d702069732030000000000000602082015260400192915050565b60006113d9601e83611923565b7f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815260200192915050565b6000611412601883611923565b7f536166654d6174683a206d6f64756c6f206279207a65726f0000000000000000815260200192915050565b600061144b602983611923565b7f4f6e6c792074686520506f6c6963794d616e616765722063616e206d616b65208152681d1a1a5cc818d85b1b60ba1b602082015260400192915050565b6000611496603a83611923565b7f5f5f616464526564656d7074696f6e426c6f636b696e6741646170746572733a81527f205f61646170746572732063616e6e6f7420626520656d707479000000000000602082015260400192915050565b60006114f5603683611923565b7f72656d6f7665526564656d7074696f6e426c6f636b696e6741646170746572738152750e881859185c1d195c881a5cc81b9bdd08185919195960521b602082015260400192915050565b600061154d603683611923565b7f5f5f616464526564656d7074696f6e426c6f636b696e6741646170746572733a815275081859185c1d195c88185b1c9958591e48185919195960521b602082015260400192915050565b60006115a5603b83611923565b7f72656d6f7665526564656d7074696f6e426c6f636b696e67416461707465727381527f3a205f61646170746572732063616e6e6f7420626520656d7074790000000000602082015260400192915050565b6000611604602c83611923565b7f736574526564656d7074696f6e57696e646f774275666665723a2056616c756581526b08185b1c9958591e481cd95d60a21b602082015260400192915050565b6000611652603f83611923565b7f61646446756e6453657474696e67733a206475726174696f6e206d757374206281527f65206265747765656e2031207365636f6e6420616e6420323320686f75727300602082015260400192915050565b60006116b1602f83611923565b7f61646446756e6453657474696e67733a20737461727454696d657374616d702081526e1b5d5cdd081899481a5b881c185cdd608a1b602082015260400192915050565b80516040830190611706848261171f565b506020820151611719602085018261171f565b50505050565b61115c81611953565b61115c8161196b565b6020810161089b8284611153565b60208082528101610b4c8184611162565b6020810161089b82846111bb565b60208082528101610b4c81846111cd565b6040808252810161178081856111cd565b9050610b4c6020830184611153565b6020808252810161089b81611205565b6020808252810161089b81611264565b6020808252810161089b816112d5565b6020808252810161089b8161130e565b6020808252810161089b8161136d565b6020808252810161089b816113cc565b6020808252810161089b81611405565b6020808252810161089b8161143e565b6020808252810161089b81611489565b6020808252810161089b816114e8565b6020808252810161089b81611540565b6020808252810161089b81611598565b6020808252810161089b816115f7565b6020808252810161089b81611645565b6020808252810161089b816116a4565b6040810161089b82846116f5565b6040810161189b828561171f565b610b4c602083018461171f565b6020810161089b8284611728565b604081016118c48285611728565b610b4c6020830184611728565b60405181810167ffffffffffffffff811182821017156118f057600080fd5b604052919050565b600067ffffffffffffffff82111561190f57600080fd5b5060209081020190565b60200190565b5190565b90815260200190565b600061089b8261195f565b151590565b6001600160e01b03191690565b806104b5816119af565b6001600160801b031690565b6001600160a01b031690565b90565b600061089b82611949565b60005b8381101561199457818101518382015260200161197c565b838111156117195750506000910152565b601f01601f191690565b600a81106108f857fe5b6119c28161192c565b81146108f857600080fd5b6119c28161193c565b600a81106108f857600080fd5b6119c281611953565b6119c28161196b56fe46756e644465706c6f7965724f776e65724d6978696e3a67657446756e644465706c6f7965723a2573a264697066735822122098cee81b5d4ba6be39e0c9d3eb2cad64762e7b6f6032202977428e7ef08e131764736f6c634300060c00335f5f616464526564656d7074696f6e426c6f636b696e6741646170746572733a';
}

// prettier-ignore
export const GuaranteedRedemptionPolicy = contract<GuaranteedRedemptionPolicy, GuaranteedRedemptionPolicyArgs>(GuaranteedRedemptionPolicyBytecode)`
  constructor(address _policyManager, address _fundDeployer, uint256 _redemptionWindowBuffer, address[] _redemptionBlockingAdapters)
  event AdapterAdded(address adapter)
  event AdapterRemoved(address adapter)
  event FundSettingsSet(address indexed comptrollerProxy, uint128 startTimestamp, uint128 duration)
  event RedemptionWindowBufferSet(uint256 prevBuffer, uint256 nextBuffer)
  function activateForFund(address)
  function adapterCanBlockRedemption(address _adapter) view returns (bool canBlockRedemption_)
  function addFundSettings(address _comptrollerProxy, bytes _encodedSettings)
  function addRedemptionBlockingAdapters(address[] _adapters)
  function calcLatestRedemptionWindowStart(uint256 _startTimestamp) view returns (uint256 latestRedemptionWindowStart_)
  function canDisable() pure returns (bool canDisable_)
  function getFundDeployer() view returns (address fundDeployer_)
  function getOwner() view returns (address owner_)
  function getPolicyManager() view returns (address policyManager_)
  function getRedemptionWindowBuffer() view returns (uint256 redemptionWindowBuffer_)
  function getRedemptionWindowForFund(address _comptrollerProxy) view returns (tuple(uint128 startTimestamp, uint128 duration) redemptionWindow_)
  function identifier() pure returns (string identifier_)
  function implementedHooks() pure returns (uint8[] implementedHooks_)
  function passesRule(address _comptrollerProxy, address _adapter) view returns (bool isValid_)
  function removeRedemptionBlockingAdapters(address[] _adapters)
  function setRedemptionWindowBuffer(uint256 _nextRedemptionWindowBuffer)
  function updateFundSettings(address, bytes)
  function validateRule(address _comptrollerProxy, uint8, bytes _encodedArgs) returns (bool isValid_)
`;