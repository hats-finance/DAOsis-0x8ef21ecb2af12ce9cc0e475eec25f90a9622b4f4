// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Pausable.sol";
import "@openzeppelin/contracts/utils/math/Math.sol";
import "./NormalIDO.sol";
import "./IDOParams.sol";
import "./ERC20Token.sol";

contract MasterNormalIDO is Ownable, Pausable {
    using Math for uint256;
    using IDOParamsLibrary for IDOParamsLibrary.IDOParams;

    address public admin;
    address public creator;
    address public feeReceiver;
    ERC20Token public token;
    NormalIDO public ido;

    constructor(
        bool feesInToken,
        uint256 deploymentFee,
        uint256 firstBuyFee,
        address _admin,
        address _feeReceiver,
        uint256 maxAllowedCap,
        uint256 tokenPrice,
        IDOParamsLibrary.TokenParams memory tokenParams,
        IDOParamsLibrary.IDOParams memory idoParams
    ) payable Ownable(_admin) Pausable() {
        require(
            msg.value >= deploymentFee + firstBuyFee,
            "Insufficient fee sent!"
        );
        require(tokenPrice > 0, "Invalid token price!");
        require(idoParams.maxCap <= maxAllowedCap, "Invalid Max cap!");
        admin = _admin;
        creator = msg.sender;
        feeReceiver = _feeReceiver;

        token = new ERC20Token(
            tokenParams.tokenName,
            tokenParams.tokenSymbol,
            tokenParams.tokenSupply,
            tokenParams.tokenDecimal
        );

        uint256 adminAmount;
        uint256 feeAmount;
        uint256 idoAmount;

        if (!feesInToken) {
            adminAmount = (tokenParams.tokenSupply * 55) / 100;
            idoAmount = tokenParams.tokenSupply - adminAmount;
            (bool success, ) = feeReceiver.call{value: deploymentFee}("");
            require(success, "Fee transfer failed!");
        } else {
            adminAmount = (tokenParams.tokenSupply * 54) / 100;
            feeAmount = (tokenParams.tokenSupply * 1) / 100;
            idoAmount = tokenParams.tokenSupply - (adminAmount + feeAmount);
        }
        token.transfer(
            admin,
            adminAmount * 10**uint256(tokenParams.tokenDecimal)
        );

        token.transfer(
                feeReceiver,
                feeAmount * 10**uint256(tokenParams.tokenDecimal)
        );

        ido = new NormalIDO{value: firstBuyFee}(
            creator,
            admin,
            address(token),
            tokenParams.tokenSymbol,
            tokenPrice,
            idoParams
        );

        token.transfer(
            address(ido),
            idoAmount * 10**uint256(tokenParams.tokenDecimal)
        );
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function getDeploymentDetails()
        external
        view
        returns (address _tokenAddress, address _idoAddress)
    {
        return (address(token), address(ido));
    }
}
