pragma solidity ^0.5.13;

import "../fund/trading/Trading.sol";
import "../fund/hub/Hub.sol";
import "../fund/accounting/Accounting.sol";
import "./ExchangeAdapter.sol";

contract MockAdapter is ExchangeAdapter {

    //  METHODS

    //  PUBLIC METHODS

    /// @notice Mock make order
    function makeOrder(
        address targetExchange,
        address[6] memory orderAddresses,
        uint[8] memory orderValues,
        bytes32 identifier,
        bytes memory makerAssetData,
        bytes memory takerAssetData,
        bytes memory signature
    ) public {
        Hub hub = getHub();
        address makerAsset = orderAddresses[2];
        address takerAsset = orderAddresses[3];
        uint makerQuantity = orderValues[0];
        uint takerQuantity = orderValues[1];

        getTrading().orderUpdateHook(
            targetExchange,
            identifier,
            Trading.UpdateType.make,
            [address(uint160(makerAsset)), address(uint160(takerAsset))],
            [makerQuantity, takerQuantity, uint(0)]
        );
        getTrading().addOpenMakeOrder(targetExchange, makerAsset, takerAsset, uint(identifier), 0);
    }

    /// @notice Mock take order
    function takeOrder(
        address targetExchange,
        address[6] memory orderAddresses,
        uint[8] memory orderValues,
        bytes32 identifier,
        bytes memory makerAssetData,
        bytes memory takerAssetData,
        bytes memory signature
    ) public {
        address makerAsset = orderAddresses[2];
        address takerAsset = orderAddresses[3];
        uint makerQuantity = orderValues[0];
        uint takerQuantity = orderValues[1];
        uint fillTakerQuantity = orderValues[6];

        getTrading().orderUpdateHook(
            targetExchange,
            bytes32(identifier),
            Trading.UpdateType.take,
            [address(uint160(makerAsset)), address(uint160(takerAsset))],
            [makerQuantity, takerQuantity, fillTakerQuantity]
        );
    }

    /// @notice Mock cancel order
    function cancelOrder(
        address targetExchange,
        address[6] memory orderAddresses,
        uint[8] memory orderValues,
        bytes32 identifier,
        bytes memory makerAssetData,
        bytes memory takerAssetData,
        bytes memory signature
    ) public {
        Hub hub = getHub();
        address makerAsset = orderAddresses[2];

        getTrading().removeOpenMakeOrder(targetExchange, makerAsset);
        getTrading().orderUpdateHook(
            targetExchange,
            bytes32(identifier),
            Trading.UpdateType.cancel,
            [address(0), address(0)],
            [uint(0), uint(0), uint(0)]
        );
    }
}
