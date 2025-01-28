// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Pausable.sol";
import "@openzeppelin/contracts/utils/math/Math.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./ERC20Token.sol";
import "./IDOParams.sol";

contract NormalIDO is Ownable, Pausable {
    using Math for uint256;
    using IDOParamsLibrary for IDOParamsLibrary.IDOParams;

    address public adminAddr;
    address public creator;
    string public idoName;
    uint256 public startTime;
    uint256 public endTime;
    uint256 public minBuy;
    uint256 public maxBuyUser;
    uint256 public minBuyCreator;
    uint256 public maxBuyCreator;
    uint256 public maxCap;
    address public tokenAddress;
    string public tokenSymbol;
    uint256 public tokenPrice;
    uint256 public totalRaised;
    uint256 public totalParticipants;
    // bool public hasCreatorBuyed;

    struct User {
        uint256 buyAmount;
        uint256 buyTimestamp;
    }

    struct IDOInfo {
        address creator;
        string idoName;
        uint256 startTime;
        uint256 endTime;
        uint256 minBuy;
        uint256 maxBuyUser;
        uint256 minBuyCreator;
        uint256 maxBuyCreator;
        uint256 maxCap;
        uint256 totalRaised;
        uint256 totalParticipants;
        uint256 tokenPrice;
        address tokenAddress;
        string tokenSymbol;
    }

    mapping(address => uint256) public buyCounter;
    mapping(address => User) public userDetails;
    address[] public participants;

    event Buy(address indexed user, uint256 amount);
    event Finalize(uint256 sold, uint256 unsold);
    event Refund(address indexed user, uint256 amount);
    event TokensBurned(address indexed burner, uint256 burnedAmount);
    event UserBalance(address indexed user, uint256 remainingBalance);

    constructor(
        address _creator,
        address _adminAddr,
        address _tokenAddress,
        string memory _tokenSymbol,
        uint256 _tokenPrice,
        IDOParamsLibrary.IDOParams memory idoParams
    ) payable Ownable(_adminAddr) Pausable() {
        adminAddr = _adminAddr;
        creator = _creator;
        tokenAddress = _tokenAddress;
        tokenSymbol = _tokenSymbol;
        tokenPrice = _tokenPrice;
        idoName = idoParams.idoName;
        startTime = idoParams.startTime;
        endTime = idoParams.endTime;
        minBuy = idoParams.minBuy;
        maxBuyUser = idoParams.maxBuyUser;
        minBuyCreator = idoParams.minBuyCreator;
        maxBuyCreator = idoParams.maxBuyCreator;
        maxCap = idoParams.maxCap;

        buyCounter[creator] = 1;
        totalParticipants++;
        totalRaised += msg.value;
        emit Buy(creator, msg.value);

        userDetails[creator].buyAmount += msg.value;
        userDetails[creator].buyTimestamp = block.timestamp;

        participants.push(creator);
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function buy(uint256 roseAmount) external payable whenNotPaused returns (bool) {
        require(block.timestamp >= startTime, "Sale not started yet!");
        require(block.timestamp <= endTime, "Sale Ended!");

        uint256 fee = roseAmount*25 / 10000;
        uint256 totalRoseAmount = (roseAmount + fee);
        require( msg.value >= totalRoseAmount, "Please send required fees");

        require(buyCounter[msg.sender] < 2, "User can only buy twice!");

        if (msg.sender == creator) {
            if ((maxCap - totalRaised) >= minBuyCreator) {
                // require(
                //     msg.value >= minBuyCreator,
                //     "Amount below minBuyCreator is not accepted!"
                // );
            }
            require(
                roseAmount <= maxBuyCreator,
                "Amount above maxBuyCreator is not accepted!"
            );
            User storage user = userDetails[creator];
            uint256 availBuy = maxBuyCreator - user.buyAmount;
            require(
                roseAmount <= availBuy,
                "Amount above allowed buy is not accepted!"
            );
            buyCounter[msg.sender]++;
        } else {
            if ((maxCap - totalRaised) >= minBuy) {
                // require(
                //     msg.value >= minBuy,
                //     "Amount below minBuy is not accepted!"
                // );
            }
            if (buyCounter[msg.sender] == 0) {
                if ((maxCap - totalRaised) >= minBuy) {
                    // require(
                    //     msg.value == minBuy || msg.value == maxBuyUser,
                    //     "First Buy Must Be MinBuy OR.. MaxBuyUser!"
                    // );
                      require(
                        roseAmount <= maxBuyUser,
                        "First Buy Must less than MaxBuyUser!"
                    );
                }
                if (roseAmount == maxBuyUser) {
                    buyCounter[msg.sender] = 2;
                } else {
                    buyCounter[msg.sender]++;
                }
                totalParticipants++;
            } else if (buyCounter[msg.sender] == 1) {
                if ((maxCap - totalRaised) >= minBuy) {
                    // require(roseAmount == minBuy, "Second buy must be minBuy!");
                }
                buyCounter[msg.sender]++;
            }
        }
        uint256 remainingCap = maxCap - totalRaised;
        require(
            roseAmount <= remainingCap,
            "Amount above remaining cap is not accepted!"
        );
        totalRaised += roseAmount;
        emit Buy(msg.sender, roseAmount);
        participants.push(msg.sender);
        userDetails[msg.sender].buyAmount += roseAmount;
        userDetails[msg.sender].buyTimestamp = block.timestamp;

        return true;
    }

    function getIDOInfo() public view returns (IDOInfo memory) {
        return
            IDOInfo(
                creator,
                idoName,
                startTime,
                endTime,
                minBuy,
                maxBuyUser,
                minBuyCreator,
                maxBuyCreator,
                maxCap,
                totalRaised,
                totalParticipants,
                tokenPrice,
                tokenAddress,
                tokenSymbol
            );
    }

    function getUserDetails(
        address userAddress
    ) external view returns (uint256 _buyAmount, uint256 _buyTimestamp) {
        User storage user = userDetails[userAddress];
        return (user.buyAmount, user.buyTimestamp);
    }

    function getBuyedAmount(
        address userAddress
    ) external view returns (uint256) {
        return userDetails[userAddress].buyAmount;
    }

    function isBuyed(address _address) external view returns (bool, uint256) {
        bool hasBought = buyCounter[_address] > 0;
        uint256 remainingAmount;
        if (_address == creator) {
            User storage user = userDetails[creator];
            remainingAmount = maxBuyCreator - user.buyAmount;
        } else {
            if (buyCounter[_address] == 0) {
                remainingAmount = maxBuyUser;
            } else if (buyCounter[_address] == 1) {
                remainingAmount = minBuy;
            } else {
                remainingAmount = 0;
            }
        }
        return (hasBought, remainingAmount);
    }

    // refund Token
    function refund() external onlyOwner whenNotPaused {
        require(block.timestamp > endTime, "IDO sale has not ended yet");
        require(totalRaised < maxCap, "IDO successful, no refunds!");

        for (uint256 i = 0; i < participants.length; i++) {
            address user = participants[i];
            uint256 userContribution = userDetails[user].buyAmount;

            if (userContribution > 0) {
                userDetails[user].buyAmount = 0; 
                (bool success, ) = payable(user).call{value: userContribution}("");
                require(success, "Refund transfer failed");

                emit Refund(user, userContribution);
            }
        }
    }

    // burn Token
    function burnToken() external onlyOwner whenNotPaused {
        require(block.timestamp > endTime, "IDO has not ended yet");
        require(totalRaised < maxCap, "MaxCap was reached, no tokens to burn");

        ERC20Token token = ERC20Token(tokenAddress);

        uint256 unsoldTokens = ((maxCap - totalRaised) * 10 ** token.decimals()) / tokenPrice ;

        require(unsoldTokens > 0, "No unsold tokens to burn");

        token.burn(unsoldTokens);

        emit TokensBurned(msg.sender, unsoldTokens);
    }

    function getUnsoldTokens() public view returns (uint256) {
        ERC20Token token = ERC20Token(tokenAddress);
        return ((maxCap - totalRaised) * 10 ** token.decimals()) / tokenPrice;
    }

    function getUserBalance(address user) public view returns (uint256) {
        ERC20Token token = ERC20Token(tokenAddress);
        return token.balanceOf(user);
    }

    function withdraw() external onlyOwner {
        uint256 contractBalance = address(this).balance; 
        require(contractBalance > 0, "No ETH to withdraw");

        payable(owner()).transfer(contractBalance); 
    }

    receive() external payable {}

    function getAllUserBalances() external view returns (address[] memory, uint256[] memory) {
        ERC20Token token = ERC20Token(tokenAddress);
        uint256[] memory balances = new uint256[](participants.length);
        
        for (uint256 i = 0; i < participants.length; i++) {
            balances[i] = token.balanceOf(participants[i]);
        }

        return (participants, balances);
    }

    function finalizeIDO(
        uint256 soldToken,
        uint256 unsoldTokens
    ) external onlyOwner returns (bool) {
        require(block.timestamp > endTime, "IDO sale has not ended yet");

        ERC20Token token = ERC20Token(tokenAddress);
        require(
            token.transfer(adminAddr, soldToken),
            "Transfer to admin failed"
        );

        token.burnFrom(address(this), unsoldTokens);

        return true;
    }
}

