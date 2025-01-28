// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

library IDOParamsLibrary {
    struct IDOParams {
        string idoName;
        uint256 startTime;
        uint256 endTime;
        uint256 minBuy;
        uint256 maxBuyUser;
        uint256 minBuyCreator;
        uint256 maxBuyCreator;
        uint256 maxCap;
    }

    struct TokenParams {
        string tokenName;
        string tokenSymbol;
        uint256 tokenSupply;
        uint8 tokenDecimal;
    }
}
