// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import "../daosis_contracts/DAOSIS/NormalIDO/NormalIDO.sol";
import "../daosis_contracts/DAOSIS/NormalIDO/ERC20Token.sol";
import "../daosis_contracts/DAOSIS/NormalIDO/IDOParams.sol";

contract NormalIDOTest is Test {
    NormalIDO ido;
    ERC20Token token;
    address admin = address(0x1);
    address creator = address(0x2);
    address alice = address(0x3);
    address bob = address(0x4);
    uint256 tokenPrice = 1e18; // 1 ETH per token
    uint256 maxCap = 100 ether;
    uint256 minBuy = 1 ether;
    uint256 maxBuyUser = 5 ether;
    
    function setUp() public {
        token = new ERC20Token("TestToken", "TTK", 10000 ether, 18);
        IDOParamsLibrary.IDOParams memory params = IDOParamsLibrary.IDOParams({
            idoName: "Test IDO",
            startTime: block.timestamp,
            endTime: block.timestamp + 1 days,
            minBuy: minBuy,
            maxBuyUser: maxBuyUser,
            minBuyCreator: 1 ether,
            maxBuyCreator: 5 ether,
            maxCap: maxCap
        });

        ido = new NormalIDO{value: 1 ether}(creator, admin, address(token), "TTK", tokenPrice, params);
    }

    // function testAliceBuysTwice() public {
    //     vm.startPrank(alice);
    //     vm.deal(alice, 10 ether);

    //     uint256 roseAmount = 1 ether;
    //     uint256 fee = (roseAmount * 25) / 10000; // 0.25% fee
    //     uint256 totalAmount = roseAmount + fee;

    //     // Alice buys first time
    //     bool success1 = ido.buy{value: totalAmount}(roseAmount);
    //     assertTrue(success1, "First buy should be successful");

    //     // Alice buys second time
    //     bool success2 = ido.buy{value: totalAmount}(roseAmount);
    //     assertTrue(success2, "Second buy should be successful");

    //     vm.stopPrank();

    //     // Check total participants
    //     (address[] memory participants, ) = ido.getAllUserBalances();
    //     assertEq(participants.length, 3, "Participants count should be 2 (Alice + Creator)");
    // }

    // function testRefundAfterIDOEnds() public {
    //     vm.startPrank(alice);
    //     vm.deal(alice, 10 ether);

    //     uint256 roseAmount = 1 ether;
    //     uint256 fee = (roseAmount * 25) / 10000; // 0.25% fee
    //     uint256 totalAmount = roseAmount + fee;

    //     // Alice buys tokens
    //     bool success1 = ido.buy{value: totalAmount}(1 ether);
    //     assertTrue(success1, "Alice's buy should be successful");
    //     vm.stopPrank();

    //     vm.startPrank(bob);
    //     vm.deal(bob, 10 ether);

    //     // Bob buys tokens
    //     bool success2 = ido.buy{value: totalAmount}(1 ether);
    //     assertTrue(success2, "Bob's buy should be successful");
    //     vm.stopPrank();

    //     // Move time forward to simulate IDO ending
    //     vm.warp(block.timestamp + 2 days);

    //     // Refund process
    //     vm.prank(admin);
    //     ido.refund();

    //     // Check that Alice and Bob got their ETH back
    //     assertEq(alice.balance, 10 ether - fee, "Alice should be refunded");
    //     assertEq(bob.balance, 10 ether - fee, "Bob should be refunded");
    // }

    function testRefundWithManyParticipants() public {
    uint256 numParticipants = 1000000; // Large number of buyers
    address[] memory buyers = new address[](numParticipants);
    
    // Assign unique addresses to buyers
    for (uint256 i = 0; i < numParticipants; i++) {
        buyers[i] = address(uint160(i + 100)); // Unique mock addresses
        vm.deal(buyers[i], 10 ether);
    }

    uint256 roseAmount = 10000;
    uint256 fee = (roseAmount * 25) / 10000; // 0.25% fee
    uint256 totalAmount = roseAmount + fee;

    // Each buyer purchases tokens
    for (uint256 i = 0; i < numParticipants; i++) {
        vm.startPrank(buyers[i]);
        bool success = ido.buy{value: totalAmount}(roseAmount);
        assertTrue(success, "Buy should be successful");
        vm.stopPrank();
    }

    // Move time forward to simulate IDO ending
    vm.warp(block.timestamp + 2 days);

    // Attempt refund
    vm.prank(admin);
    ido.refund(); // This should fail due to out-of-gas issues
}
}
