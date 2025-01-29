// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract ERC20Token is ERC20, ERC20Burnable {
    uint8 private _decimals;

    constructor(
        string memory tokenName,
        string memory tokenSymbol,
        uint256 tokenSupply,
        uint8 tokenDecimal
    ) ERC20(tokenName, tokenSymbol) {
        _decimals = tokenDecimal;
        uint256 initialSupply = tokenSupply  * 10 ** uint256(_decimals);
        _mint(msg.sender, initialSupply);
    }

    function decimals() public view virtual override returns (uint8) {
        return _decimals;
    }
// Depending on what the intended functionality is:
// - The protocol wants only the owner to call this, in that case add "OnlyOwner" modifier
    function burnFrom(address account, uint256 amount) public OnlyOwner override {
        _burn(account, amount);
    }
}

// - The protocol wants only the msg.sender to burn for himself, in that case perform a msg.sender check which looks something like this
function burnFrom(address account, uint256 amount) public override {
   require(msg.sender == account, "Can only burn your own tokens");
   _burn(account, amount);
}