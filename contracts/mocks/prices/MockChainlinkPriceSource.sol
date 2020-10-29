// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.6.8;

contract MockChainlinkPriceSource {
    event AnswerUpdated(int256 indexed current, uint256 indexed roundId, uint256 timestamp);

    uint256 public DECIMALS;

    int256 public latestAnswer;
    uint256 public latestTimestamp;
    uint256 public roundId;
    address public aggregator;

    constructor(uint256 _decimals) public {
        DECIMALS = _decimals;
        latestAnswer = int256(10**_decimals);
        latestTimestamp = now;
        roundId = 1;
        aggregator = address(this);
    }

    function setLatestAnswer(int256 _nextAnswer, uint256 _nextTimestamp) external {
        latestAnswer = _nextAnswer;
        latestTimestamp = _nextTimestamp;
        roundId = roundId + 1;

        emit AnswerUpdated(latestAnswer, roundId, latestTimestamp);
    }

    function setAggregator(address _nextAggregator) external {
        aggregator = _nextAggregator;
    }
}