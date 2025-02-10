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

    //The fix simply follows the OpenZeppelin standard from ERC20Burnable
    //The fix that applies access control is insufficient since it kills
    //future integration possibilities
    //Simply grant the needed allowances on contract levels and work from there

    -function burnFrom(address account, uint256 amount) public override {
    -    _burn(account, amount);
    -}

    //There is actually no need to even override `burnFrom()`
    //If you simply don't add the below code, it will inherit it directly from ERC20Burnable
    // +function burnFrom(address account, uint256 value) public virtual {
    // +    _spendAllowance(account, msg.sender, value);
    // +    _burn(account, value);
    // +}
}