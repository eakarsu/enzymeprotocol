// SPDX-License-Identifier: GPL-3.0

/*
    This file is part of the Enzyme Protocol.

    (c) Enzyme Council <council@enzyme.finance>

    For the full license information, please view the LICENSE
    file that was distributed with this source code.
*/

pragma solidity 0.6.12;

import "../../../../../interfaces/IYearnVaultV2.sol";
import "../../../../../utils/AssetHelpers.sol";
import "hardhat/console.sol";

/// @title YearnVaultV2ActionsMixin Contract
/// @author Enzyme Council <security@enzyme.finance>
/// @notice Mixin contract for interacting with Yearn v2 vaults
abstract contract YearnVaultV2ActionsMixin is AssetHelpers {
    /// @dev Helper to lend underlying for yVault shares
    function __yearnVaultV2Lend(
        address _recipient,
        address _yVault,
        address _underlying,
        uint256 _underlyingAmount
    ) internal {
        console.log("__yearnVaultV2Lend :recipient:%s", _recipient);
        console.log("__yearnVaultV2Lend :_yVault:%s", _yVault);
        console.log("__yearnVaultV2Lend :_underlying:%s", _underlying);
        console.log("__yearnVaultV2Lend :_underlyingAmount:%d", _underlyingAmount);

        __approveAssetMaxAsNeeded(_underlying, _yVault, _underlyingAmount);
        console.log("__yearnVaultV2Lend after approve");

        IYearnVaultV2(_yVault).deposit(_underlyingAmount, _recipient);
        console.log("__yearnVaultV2Lend after deposit");
    }

    /// @dev Helper to redeem yVault shares for underlying
    function __yearnVaultV2Redeem(
        address _recipient,
        address _yVault,
        uint256 _yVaultSharesAmount,
        uint256 _slippageToleranceBps
    ) internal {
        IYearnVaultV2(_yVault).withdraw(_yVaultSharesAmount, _recipient, _slippageToleranceBps);
    }
}
