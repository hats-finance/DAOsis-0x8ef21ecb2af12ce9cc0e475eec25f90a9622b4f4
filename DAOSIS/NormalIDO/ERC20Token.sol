// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract ERC20Token is ERC20, ERC20Burnable {
    uint8 private _decimals;
    +address public idoContract;

    constructor(
        string memory tokenName,
        string memory tokenSymbol,
        uint256 tokenSupply,
        uint8 tokenDecimal
        +address idoContract
    ) ERC20(tokenName, tokenSymbol) {
        _decimals = tokenDecimal;
    +    idoContract = _idoContract;
        uint256 initialSupply = tokenSupply  * 10 ** uint256(_decimals);
        _mint(msg.sender, initialSupply);
    }

    function decimals() public view virtual override returns (uint8) {
        return _decimals;
    }

    function burnFrom(address account, uint256 amount) public override {
        +require(msg.sender == idoContract);
        _burn(account, amount);
    }

}