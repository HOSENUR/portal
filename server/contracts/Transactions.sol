// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Transactions {
    event Transfer(
        address from,
        address to,
        uint256 amount,
        string message,
        uint256 timestamp,
        string keyword
    );
    struct Transaction {
        address from;
        address to;
        uint256 amount;
        string message;
        uint256 timestamp;
        string keyword;
    }
    Transaction[] public transactions;

    function addToBlockchain() public {}
}
