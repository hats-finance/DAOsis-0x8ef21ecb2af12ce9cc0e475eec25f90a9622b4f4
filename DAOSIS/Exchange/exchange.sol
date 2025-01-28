// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract CrowdFunding is Pausable, Ownable, ReentrancyGuard {
    address public dssToken;
    uint256 public tokenPrice;
    uint256 public totalRaisedUSD;
    uint256 public totalTokensSold;
    uint256 public tokensForSale;
    uint256 public targetUSD;
    using SafeERC20 for IERC20;

    uint256 public startTime = 0;
    uint256 public endTime;

    mapping(address => uint256) public investments;
    mapping(address => uint256) public tokensToReceive;
    address[] public investors;

    event InvestmentReceived(
        address indexed investor,
        uint256 amount,
        uint256 tokensReceived
    );

    event InvestmentReceivedOnETH(
        address indexed investor,
        uint256 amount,
        uint256 tokensReceived
    );
    
    event TokensForSaleUpdated(uint256 newTokensForSale);

    constructor(
        address _dssToken,
        uint256 _tokenPrice,
        uint256 _tokensForSale,
        uint256 _targetUSD,
        address _owner
    ) Ownable(_owner) Pausable() {
        tokenPrice = _tokenPrice;
        tokensForSale = _tokensForSale;
        targetUSD = _targetUSD;
        dssToken = _dssToken;
    }

    function startSale(uint256 _endTime) external onlyOwner {
        require(startTime == 0, "Sale Already Started");
        startTime = block.timestamp;
        endTime = _endTime;
    }

    function updateEndTime(uint256 _endTime) external onlyOwner {
        endTime = _endTime;
    }

    function updateDssToken(address _dssToken) external onlyOwner {
        dssToken = _dssToken;
    }

    function invest(uint256 amount, address _investor) external whenNotPaused onlyOwner {
        require((totalRaisedUSD + amount) <= targetUSD,"Max Cap Reached");
        uint256 tokenAmount = (amount / tokenPrice) * 1e18;
        investments[_investor] += amount;
        tokensToReceive[_investor] += tokenAmount;
        totalRaisedUSD += amount;
        totalTokensSold += tokenAmount;
        investors.push(_investor);

        emit InvestmentReceived(_investor, amount, tokenAmount);
    }

    function transferDSS() external onlyOwner {
        uint length = investors.length;
        for(uint256 i=0; i<length; i++){
            address investor = investors[i];
            require(IERC20(dssToken).transfer(investor, tokensToReceive[investor]), "Token withdrawal failed");
        }
    }

    function updateTokensForSale(uint256 newTokensForSale) external onlyOwner {
        tokensForSale = newTokensForSale;
        emit TokensForSaleUpdated(newTokensForSale);
    }

    function withdrawFunds(
        address to,
        uint256 amount,
        address _tokenAddress
    ) external onlyOwner {
       require(IERC20(_tokenAddress).transfer(to, amount), "Token withdrawal failed");
    }

    function depositDSS(
        uint256 amount,
        address _tokenAddress
    ) external onlyOwner {
       require(IERC20(_tokenAddress).transferFrom(msg.sender, address(this), amount), "Token withdrawal failed");
    }

    function pause() external onlyOwner {
        _pause();
    }

    function unpause() external onlyOwner {
        _unpause();
    }

    function getInvestment(address investor) external view returns (uint256) {
        return investments[investor];
    }

    function getTokensToReceive(
        address investor
    ) external view returns (uint256) {
        return tokensToReceive[investor];
    }
}

