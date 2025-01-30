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
    uint256 tokenPrice = 1e18; // 1 ETH per token
    uint256 maxCap = 10 ether;
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

    function testAliceBuysTwice() public {
    vm.startPrank(alice);
    vm.deal(alice, 10 ether);

    uint256 roseAmount = 1 ether;
    uint256 fee = (roseAmount * 25) / 10000; // 0.25% fee
    uint256 totalAmount = roseAmount + fee;

    // Alice buys first time
    bool success1 = ido.buy{value: totalAmount}(roseAmount);
    assertTrue(success1, "First buy should be successful");

    // Alice buys second time
    bool success2 = ido.buy{value: totalAmount}(roseAmount);
    assertTrue(success2, "Second buy should be successful");
    
    vm.stopPrank();

    // Check total participants
    (address[] memory participants, ) = ido.getAllUserBalances();
    assertEq(participants.length, 3, "Participants count should be 2 (Alice + Creator)");
}
}
