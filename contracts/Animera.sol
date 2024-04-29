// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract Animera is ERC20{
    uint256 public tokenDecimal;

    constructor() ERC20("Animera", "ANMR")  {
        tokenDecimal = 0;
    }
    
    function mint(address to, uint256 amount) public  {
        _mint(to, amount);
    }

    function _beforeTokenTransfer(address from, address to, uint256 amount)
        internal
        
        override
    {
        super._beforeTokenTransfer(from, to, amount);
    }

        /**
     * @dev Returns the number of decimals used to get its user representation.
     * For example, if `decimals` equals `2`, a balance of `505` tokens should
     * be displayed to a user as `5.05` (`505 / 10 ** 2`).
     *
     * Tokens usually opt for a value of 18, imitating the relationship between
     * Ether and Wei. This is the value {ERC20} uses, unless this function is
     * overridden;
     *
     * NOTE: This information is only used for _display_ purposes: it in
     * no way affects any of the arithmetic of the contract, including
     * {IERC20-balanceOf} and {IERC20-transfer}.
     */
    function decimals() public view virtual override returns (uint8) {
        return uint8(tokenDecimal);
    }

    function setDecimals(uint256 _decimal) external  {
        tokenDecimal = _decimal;
    }
   
}