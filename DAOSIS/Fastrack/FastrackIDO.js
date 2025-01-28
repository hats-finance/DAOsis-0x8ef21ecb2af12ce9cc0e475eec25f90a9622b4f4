let masterABI = [
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "feesInToken",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "deploymentFee",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "firstBuyFee",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_admin",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_feeReceiver",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "maxAllowedCap",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "tokenPrice",
				"type": "uint256"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "tokenName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "tokenSymbol",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "tokenSupply",
						"type": "uint256"
					},
					{
						"internalType": "uint8",
						"name": "tokenDecimal",
						"type": "uint8"
					}
				],
				"internalType": "struct IDOParamsLibrary.TokenParams",
				"name": "tokenParams",
				"type": "tuple"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "idoName",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "startTime",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "endTime",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "minBuy",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "maxBuyUser",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "minBuyCreator",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "maxBuyCreator",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "maxCap",
						"type": "uint256"
					}
				],
				"internalType": "struct IDOParamsLibrary.IDOParams",
				"name": "idoParams",
				"type": "tuple"
			},
			{
				"internalType": "bytes32",
				"name": "_whitelistMerkleRoot",
				"type": "bytes32"
			}
		],
		"stateMutability": "payable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "EnforcedPause",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "ExpectedPause",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "Paused",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "Unpaused",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "creator",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "feeReceiver",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getDeploymentDetails",
		"outputs": [
			{
				"internalType": "address",
				"name": "_tokenAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_idoAddress",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ido",
		"outputs": [
			{
				"internalType": "contract FastTrackIDO",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "pause",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "paused",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "token",
		"outputs": [
			{
				"internalType": "contract ERC20Token",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "unpause",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

let fastTrackIdoABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_creator",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_adminAddr",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_tokenAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_tokenSymbol",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_tokenPrice",
				"type": "uint256"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "idoName",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "startTime",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "endTime",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "minBuy",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "maxBuyUser",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "minBuyCreator",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "maxBuyCreator",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "maxCap",
						"type": "uint256"
					}
				],
				"internalType": "struct IDOParamsLibrary.IDOParams",
				"name": "idoParams",
				"type": "tuple"
			},
			{
				"internalType": "bytes32",
				"name": "_whitelistMerkleRoot",
				"type": "bytes32"
			}
		],
		"stateMutability": "payable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "EnforcedPause",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "ExpectedPause",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Buy",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "sold",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "unsold",
				"type": "uint256"
			}
		],
		"name": "Finalize",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "Paused",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Refund",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "burner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "burnedAmount",
				"type": "uint256"
			}
		],
		"name": "TokensBurned",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "Unpaused",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "remainingBalance",
				"type": "uint256"
			}
		],
		"name": "UserBalance",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "adminAddr",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "burnToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32[]",
				"name": "merkleProof",
				"type": "bytes32[]"
			},
			{
				"internalType": "uint256",
				"name": "roseAmount",
				"type": "uint256"
			}
		],
		"name": "buy",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "buyCounter",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "creator",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "endTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "soldToken",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "unsoldTokens",
				"type": "uint256"
			}
		],
		"name": "finalizeIDO",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllUserBalances",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "getBuyedAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getIDOInfo",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "creator",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "idoName",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "startTime",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "endTime",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "minBuy",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "maxBuyUser",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "minBuyCreator",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "maxBuyCreator",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "maxCap",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "totalRaised",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "totalParticipants",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "tokenPrice",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "tokenAddress",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "tokenSymbol",
						"type": "string"
					}
				],
				"internalType": "struct FastTrackIDO.IDOInfo",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getUnsoldTokens",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "getUserBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "getUserDetails",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_buyAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_buyTimestamp",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "idoName",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "isBuyed",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maxBuyCreator",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maxBuyUser",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maxCap",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "minBuy",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "minBuyCreator",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "participants",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "pause",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "paused",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "refund",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "startTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tokenAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tokenPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tokenSymbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalParticipants",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalRaised",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "unpause",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "userDetails",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "buyAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "buyTimestamp",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32[]",
				"name": "proof",
				"type": "bytes32[]"
			},
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "verifyProof",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "whitelistMerkleRoot",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]

let masterByteCode = '608060405260405161838d38038061838d83398181016040528101906100259190610d21565b86600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036100985760006040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161008f9190610e47565b60405180910390fd5b6100a7816107f360201b60201c565b5060008060146101000a81548160ff02191690831515021790555087896100ce9190610e91565b341015610110576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161010790610f22565b60405180910390fd5b60008411610153576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161014a90610f8e565b60405180910390fd5b848260e00151111561019a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161019190610ffa565b60405180910390fd5b86600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555085600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550826000015183602001518460400151856060015160405161027d906108b7565b61028a949392919061107c565b604051809103906000f0801580156102a6573d6000803e3d6000fd5b50600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008060008c6103f65760646037876040015161030491906110cf565b61030e9190611140565b92508286604001516103209190611171565b90506000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168d60405161036a906111d6565b60006040518083038185875af1925050503d80600081146103a7576040519150601f19603f3d011682016040523d82523d6000602084013e6103ac565b606091505b50509050806103f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103e790611237565b60405180910390fd5b50610452565b60646036876040015161040991906110cf565b6104139190611140565b925060646001876040015161042891906110cf565b6104329190611140565b915081836104409190610e91565b866040015161044f9190611171565b90505b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16886060015160ff16600a6104c7919061138a565b866104d291906110cf565b6040518363ffffffff1660e01b81526004016104ef9291906113d5565b6020604051808303816000875af115801561050e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061053291906113fe565b50600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16886060015160ff16600a6105a8919061138a565b856105b391906110cf565b6040518363ffffffff1660e01b81526004016105d09291906113d5565b6020604051808303816000875af11580156105ef573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061061391906113fe565b508a600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1689602001518b8a8a604051610692906108c4565b6106a29796959493929190611543565b6040518091039082f09050801580156106bf573d6000803e3d6000fd5b50600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16886060015160ff16600a610775919061138a565b8461078091906110cf565b6040518363ffffffff1660e01b815260040161079d9291906113d5565b6020604051808303816000875af11580156107bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107e091906113fe565b50505050505050505050505050506115c0565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b611b4380611e6f83390190565b6149db806139b283390190565b6000604051905090565b600080fd5b600080fd5b60008115159050919050565b6108fa816108e5565b811461090557600080fd5b50565b600081519050610917816108f1565b92915050565b6000819050919050565b6109308161091d565b811461093b57600080fd5b50565b60008151905061094d81610927565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061097e82610953565b9050919050565b61098e81610973565b811461099957600080fd5b50565b6000815190506109ab81610985565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6109ff826109b6565b810181811067ffffffffffffffff82111715610a1e57610a1d6109c7565b5b80604052505050565b6000610a316108d1565b9050610a3d82826109f6565b919050565b600080fd5b600080fd5b600080fd5b600067ffffffffffffffff821115610a6c57610a6b6109c7565b5b610a75826109b6565b9050602081019050919050565b60005b83811015610aa0578082015181840152602081019050610a85565b60008484015250505050565b6000610abf610aba84610a51565b610a27565b905082815260208101848484011115610adb57610ada610a4c565b5b610ae6848285610a82565b509392505050565b600082601f830112610b0357610b02610a47565b5b8151610b13848260208601610aac565b91505092915050565b600060ff82169050919050565b610b3281610b1c565b8114610b3d57600080fd5b50565b600081519050610b4f81610b29565b92915050565b600060808284031215610b6b57610b6a6109b1565b5b610b756080610a27565b9050600082015167ffffffffffffffff811115610b9557610b94610a42565b5b610ba184828501610aee565b600083015250602082015167ffffffffffffffff811115610bc557610bc4610a42565b5b610bd184828501610aee565b6020830152506040610be58482850161093e565b6040830152506060610bf984828501610b40565b60608301525092915050565b60006101008284031215610c1c57610c1b6109b1565b5b610c27610100610a27565b9050600082015167ffffffffffffffff811115610c4757610c46610a42565b5b610c5384828501610aee565b6000830152506020610c678482850161093e565b6020830152506040610c7b8482850161093e565b6040830152506060610c8f8482850161093e565b6060830152506080610ca38482850161093e565b60808301525060a0610cb78482850161093e565b60a08301525060c0610ccb8482850161093e565b60c08301525060e0610cdf8482850161093e565b60e08301525092915050565b6000819050919050565b610cfe81610ceb565b8114610d0957600080fd5b50565b600081519050610d1b81610cf5565b92915050565b6000806000806000806000806000806101408b8d031215610d4557610d446108db565b5b6000610d538d828e01610908565b9a50506020610d648d828e0161093e565b9950506040610d758d828e0161093e565b9850506060610d868d828e0161099c565b9750506080610d978d828e0161099c565b96505060a0610da88d828e0161093e565b95505060c0610db98d828e0161093e565b94505060e08b015167ffffffffffffffff811115610dda57610dd96108e0565b5b610de68d828e01610b55565b9350506101008b015167ffffffffffffffff811115610e0857610e076108e0565b5b610e148d828e01610c05565b925050610120610e268d828e01610d0c565b9150509295989b9194979a5092959850565b610e4181610973565b82525050565b6000602082019050610e5c6000830184610e38565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610e9c8261091d565b9150610ea78361091d565b9250828201905080821115610ebf57610ebe610e62565b5b92915050565b600082825260208201905092915050565b7f496e73756666696369656e74206665652073656e742100000000000000000000600082015250565b6000610f0c601683610ec5565b9150610f1782610ed6565b602082019050919050565b60006020820190508181036000830152610f3b81610eff565b9050919050565b7f496e76616c696420746f6b656e20707269636521000000000000000000000000600082015250565b6000610f78601483610ec5565b9150610f8382610f42565b602082019050919050565b60006020820190508181036000830152610fa781610f6b565b9050919050565b7f496e76616c6964204d6178206361702100000000000000000000000000000000600082015250565b6000610fe4601083610ec5565b9150610fef82610fae565b602082019050919050565b6000602082019050818103600083015261101381610fd7565b9050919050565b600081519050919050565b60006110308261101a565b61103a8185610ec5565b935061104a818560208601610a82565b611053816109b6565b840191505092915050565b6110678161091d565b82525050565b61107681610b1c565b82525050565b600060808201905081810360008301526110968187611025565b905081810360208301526110aa8186611025565b90506110b9604083018561105e565b6110c6606083018461106d565b95945050505050565b60006110da8261091d565b91506110e58361091d565b92508282026110f38161091d565b9150828204841483151761110a57611109610e62565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061114b8261091d565b91506111568361091d565b92508261116657611165611111565b5b828204905092915050565b600061117c8261091d565b91506111878361091d565b925082820390508181111561119f5761119e610e62565b5b92915050565b600081905092915050565b50565b60006111c06000836111a5565b91506111cb826111b0565b600082019050919050565b60006111e1826111b3565b9150819050919050565b7f466565207472616e73666572206661696c656421000000000000000000000000600082015250565b6000611221601483610ec5565b915061122c826111eb565b602082019050919050565b6000602082019050818103600083015261125081611214565b9050919050565b60008160011c9050919050565b6000808291508390505b60018511156112ae5780860481111561128a57611289610e62565b5b60018516156112995780820291505b80810290506112a785611257565b945061126e565b94509492505050565b6000826112c75760019050611383565b816112d55760009050611383565b81600181146112eb57600281146112f557611324565b6001915050611383565b60ff84111561130757611306610e62565b5b8360020a91508482111561131e5761131d610e62565b5b50611383565b5060208310610133831016604e8410600b84101617156113595782820a90508381111561135457611353610e62565b5b611383565b6113668484846001611264565b9250905081840481111561137d5761137c610e62565b5b81810290505b9392505050565b60006113958261091d565b91506113a08361091d565b92506113cd7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff84846112b7565b905092915050565b60006040820190506113ea6000830185610e38565b6113f7602083018461105e565b9392505050565b600060208284031215611414576114136108db565b5b600061142284828501610908565b91505092915050565b600082825260208201905092915050565b60006114478261101a565b611451818561142b565b9350611461818560208601610a82565b61146a816109b6565b840191505092915050565b61147e8161091d565b82525050565b60006101008301600083015184820360008601526114a2828261143c565b91505060208301516114b76020860182611475565b5060408301516114ca6040860182611475565b5060608301516114dd6060860182611475565b5060808301516114f06080860182611475565b5060a083015161150360a0860182611475565b5060c083015161151660c0860182611475565b5060e083015161152960e0860182611475565b508091505092915050565b61153d81610ceb565b82525050565b600060e082019050611558600083018a610e38565b6115656020830189610e38565b6115726040830188610e38565b81810360608301526115848187611025565b9050611593608083018661105e565b81810360a08301526115a58185611484565b90506115b460c0830184611534565b98975050505050505050565b6108a0806115cf6000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c80638da5cb5b116100715780638da5cb5b14610132578063b3f0067414610150578063eeb522aa1461016e578063f2fde38b1461018c578063f851a440146101a8578063fc0c546a146101c6576100b4565b806302d05d3f146100b95780633f4ba83a146100d7578063450daaa9146100e15780635c975abb14610100578063715018a61461011e5780638456cb5914610128575b600080fd5b6100c16101e4565b6040516100ce91906106ca565b60405180910390f35b6100df61020a565b005b6100e961021c565b6040516100f79291906106e5565b60405180910390f35b61010861026d565b6040516101159190610729565b60405180910390f35b610126610283565b005b610130610297565b005b61013a6102a9565b60405161014791906106ca565b60405180910390f35b6101586102d2565b60405161016591906106ca565b60405180910390f35b6101766102f8565b60405161018391906107a3565b60405180910390f35b6101a660048036038101906101a191906107ef565b61031e565b005b6101b06103a4565b6040516101bd91906106ca565b60405180910390f35b6101ce6103ca565b6040516101db919061084f565b60405180910390f35b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6102126103f0565b61021a610477565b565b600080600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16915091509091565b60008060149054906101000a900460ff16905090565b61028b6103f0565b61029560006104d9565b565b61029f6103f0565b6102a761059d565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6103266103f0565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036103985760006040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161038f91906106ca565b60405180910390fd5b6103a1816104d9565b50565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6103f8610600565b73ffffffffffffffffffffffffffffffffffffffff166104166102a9565b73ffffffffffffffffffffffffffffffffffffffff161461047557610439610600565b6040517f118cdaa700000000000000000000000000000000000000000000000000000000815260040161046c91906106ca565b60405180910390fd5b565b61047f610608565b60008060146101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6104c2610600565b6040516104cf91906106ca565b60405180910390a1565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6105a5610648565b6001600060146101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586105e9610600565b6040516105f691906106ca565b60405180910390a1565b600033905090565b61061061026d565b610646576040517f8dfc202b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b61065061026d565b15610687576040517fd93c066500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006106b482610689565b9050919050565b6106c4816106a9565b82525050565b60006020820190506106df60008301846106bb565b92915050565b60006040820190506106fa60008301856106bb565b61070760208301846106bb565b9392505050565b60008115159050919050565b6107238161070e565b82525050565b600060208201905061073e600083018461071a565b92915050565b6000819050919050565b600061076961076461075f84610689565b610744565b610689565b9050919050565b600061077b8261074e565b9050919050565b600061078d82610770565b9050919050565b61079d81610782565b82525050565b60006020820190506107b86000830184610794565b92915050565b600080fd5b6107cc816106a9565b81146107d757600080fd5b50565b6000813590506107e9816107c3565b92915050565b600060208284031215610805576108046107be565b5b6000610813848285016107da565b91505092915050565b60006108278261074e565b9050919050565b60006108398261081c565b9050919050565b6108498161082e565b82525050565b60006020820190506108646000830184610840565b9291505056fea264697066735822122014f36c16e1e8d611a3fedcdb77e1f4602b75f6c16e32d2621325750718e4b2fc64736f6c634300081c0033608060405234801561001057600080fd5b50604051611b43380380611b438339818101604052810190610032919061054a565b838381600390816100439190610800565b5080600490816100539190610800565b50505080600560006101000a81548160ff021916908360ff1602179055506000600560009054906101000a900460ff1660ff16600a6100929190610a34565b8361009d9190610a7f565b90506100af33826100b960201b60201c565b5050505050610bb2565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361012b5760006040517fec442f050000000000000000000000000000000000000000000000000000000081526004016101229190610b02565b60405180910390fd5b61013d6000838361014160201b60201c565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036101935780600260008282546101879190610b1d565b92505081905550610266565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561021f578381836040517fe450d38c00000000000000000000000000000000000000000000000000000000815260040161021693929190610b60565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036102af57806002600082825403925050819055506102fc565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516103599190610b97565b60405180910390a3505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6103cd82610384565b810181811067ffffffffffffffff821117156103ec576103eb610395565b5b80604052505050565b60006103ff610366565b905061040b82826103c4565b919050565b600067ffffffffffffffff82111561042b5761042a610395565b5b61043482610384565b9050602081019050919050565b60005b8381101561045f578082015181840152602081019050610444565b60008484015250505050565b600061047e61047984610410565b6103f5565b90508281526020810184848401111561049a5761049961037f565b5b6104a5848285610441565b509392505050565b600082601f8301126104c2576104c161037a565b5b81516104d284826020860161046b565b91505092915050565b6000819050919050565b6104ee816104db565b81146104f957600080fd5b50565b60008151905061050b816104e5565b92915050565b600060ff82169050919050565b61052781610511565b811461053257600080fd5b50565b6000815190506105448161051e565b92915050565b6000806000806080858703121561056457610563610370565b5b600085015167ffffffffffffffff81111561058257610581610375565b5b61058e878288016104ad565b945050602085015167ffffffffffffffff8111156105af576105ae610375565b5b6105bb878288016104ad565b93505060406105cc878288016104fc565b92505060606105dd87828801610535565b91505092959194509250565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061063b57607f821691505b60208210810361064e5761064d6105f4565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026106b67fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610679565b6106c08683610679565b95508019841693508086168417925050509392505050565b6000819050919050565b60006106fd6106f86106f3846104db565b6106d8565b6104db565b9050919050565b6000819050919050565b610717836106e2565b61072b61072382610704565b848454610686565b825550505050565b600090565b610740610733565b61074b81848461070e565b505050565b5b8181101561076f57610764600082610738565b600181019050610751565b5050565b601f8211156107b45761078581610654565b61078e84610669565b8101602085101561079d578190505b6107b16107a985610669565b830182610750565b50505b505050565b600082821c905092915050565b60006107d7600019846008026107b9565b1980831691505092915050565b60006107f083836107c6565b9150826002028217905092915050565b610809826105e9565b67ffffffffffffffff81111561082257610821610395565b5b61082c8254610623565b610837828285610773565b600060209050601f83116001811461086a5760008415610858578287015190505b61086285826107e4565b8655506108ca565b601f19841661087886610654565b60005b828110156108a05784890151825560018201915060208501945060208101905061087b565b868310156108bd57848901516108b9601f8916826107c6565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160011c9050919050565b6000808291508390505b600185111561095857808604811115610934576109336108d2565b5b60018516156109435780820291505b808102905061095185610901565b9450610918565b94509492505050565b6000826109715760019050610a2d565b8161097f5760009050610a2d565b8160018114610995576002811461099f576109ce565b6001915050610a2d565b60ff8411156109b1576109b06108d2565b5b8360020a9150848211156109c8576109c76108d2565b5b50610a2d565b5060208310610133831016604e8410600b8410161715610a035782820a9050838111156109fe576109fd6108d2565b5b610a2d565b610a10848484600161090e565b92509050818404811115610a2757610a266108d2565b5b81810290505b9392505050565b6000610a3f826104db565b9150610a4a836104db565b9250610a777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484610961565b905092915050565b6000610a8a826104db565b9150610a95836104db565b9250828202610aa3816104db565b91508282048414831517610aba57610ab96108d2565b5b5092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610aec82610ac1565b9050919050565b610afc81610ae1565b82525050565b6000602082019050610b176000830184610af3565b92915050565b6000610b28826104db565b9150610b33836104db565b9250828201905080821115610b4b57610b4a6108d2565b5b92915050565b610b5a816104db565b82525050565b6000606082019050610b756000830186610af3565b610b826020830185610b51565b610b8f6040830184610b51565b949350505050565b6000602082019050610bac6000830184610b51565b92915050565b610f8280610bc16000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c806342966c681161007157806342966c681461016857806370a082311461018457806379cc6790146101b457806395d89b41146101d0578063a9059cbb146101ee578063dd62ed3e1461021e576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b661024e565b6040516100c39190610ba9565b60405180910390f35b6100e660048036038101906100e19190610c64565b6102e0565b6040516100f39190610cbf565b60405180910390f35b610104610303565b6040516101119190610ce9565b60405180910390f35b610134600480360381019061012f9190610d04565b61030d565b6040516101419190610cbf565b60405180910390f35b61015261033c565b60405161015f9190610d73565b60405180910390f35b610182600480360381019061017d9190610d8e565b610353565b005b61019e60048036038101906101999190610dbb565b610367565b6040516101ab9190610ce9565b60405180910390f35b6101ce60048036038101906101c99190610c64565b6103af565b005b6101d86103bd565b6040516101e59190610ba9565b60405180910390f35b61020860048036038101906102039190610c64565b61044f565b6040516102159190610cbf565b60405180910390f35b61023860048036038101906102339190610de8565b610472565b6040516102459190610ce9565b60405180910390f35b60606003805461025d90610e57565b80601f016020809104026020016040519081016040528092919081815260200182805461028990610e57565b80156102d65780601f106102ab576101008083540402835291602001916102d6565b820191906000526020600020905b8154815290600101906020018083116102b957829003601f168201915b5050505050905090565b6000806102eb6104f9565b90506102f8818585610501565b600191505092915050565b6000600254905090565b6000806103186104f9565b9050610325858285610513565b6103308585856105a7565b60019150509392505050565b6000600560009054906101000a900460ff16905090565b61036461035e6104f9565b8261069b565b50565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6103b9828261069b565b5050565b6060600480546103cc90610e57565b80601f01602080910402602001604051908101604052809291908181526020018280546103f890610e57565b80156104455780601f1061041a57610100808354040283529160200191610445565b820191906000526020600020905b81548152906001019060200180831161042857829003601f168201915b5050505050905090565b60008061045a6104f9565b90506104678185856105a7565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b61050e838383600161071d565b505050565b600061051f8484610472565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146105a15781811015610591578281836040517ffb8f41b200000000000000000000000000000000000000000000000000000000815260040161058893929190610e97565b60405180910390fd5b6105a08484848403600061071d565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036106195760006040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016106109190610ece565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361068b5760006040517fec442f050000000000000000000000000000000000000000000000000000000081526004016106829190610ece565b60405180910390fd5b6106968383836108f4565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361070d5760006040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016107049190610ece565b60405180910390fd5b610719826000836108f4565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff160361078f5760006040517fe602df050000000000000000000000000000000000000000000000000000000081526004016107869190610ece565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036108015760006040517f94280d620000000000000000000000000000000000000000000000000000000081526004016107f89190610ece565b60405180910390fd5b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555080156108ee578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516108e59190610ce9565b60405180910390a35b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361094657806002600082825461093a9190610f18565b92505081905550610a19565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156109d2578381836040517fe450d38c0000000000000000000000000000000000000000000000000000000081526004016109c993929190610e97565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a625780600260008282540392505081905550610aaf565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610b0c9190610ce9565b60405180910390a3505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610b53578082015181840152602081019050610b38565b60008484015250505050565b6000601f19601f8301169050919050565b6000610b7b82610b19565b610b858185610b24565b9350610b95818560208601610b35565b610b9e81610b5f565b840191505092915050565b60006020820190508181036000830152610bc38184610b70565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610bfb82610bd0565b9050919050565b610c0b81610bf0565b8114610c1657600080fd5b50565b600081359050610c2881610c02565b92915050565b6000819050919050565b610c4181610c2e565b8114610c4c57600080fd5b50565b600081359050610c5e81610c38565b92915050565b60008060408385031215610c7b57610c7a610bcb565b5b6000610c8985828601610c19565b9250506020610c9a85828601610c4f565b9150509250929050565b60008115159050919050565b610cb981610ca4565b82525050565b6000602082019050610cd46000830184610cb0565b92915050565b610ce381610c2e565b82525050565b6000602082019050610cfe6000830184610cda565b92915050565b600080600060608486031215610d1d57610d1c610bcb565b5b6000610d2b86828701610c19565b9350506020610d3c86828701610c19565b9250506040610d4d86828701610c4f565b9150509250925092565b600060ff82169050919050565b610d6d81610d57565b82525050565b6000602082019050610d886000830184610d64565b92915050565b600060208284031215610da457610da3610bcb565b5b6000610db284828501610c4f565b91505092915050565b600060208284031215610dd157610dd0610bcb565b5b6000610ddf84828501610c19565b91505092915050565b60008060408385031215610dff57610dfe610bcb565b5b6000610e0d85828601610c19565b9250506020610e1e85828601610c19565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610e6f57607f821691505b602082108103610e8257610e81610e28565b5b50919050565b610e9181610bf0565b82525050565b6000606082019050610eac6000830186610e88565b610eb96020830185610cda565b610ec66040830184610cda565b949350505050565b6000602082019050610ee36000830184610e88565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610f2382610c2e565b9150610f2e83610c2e565b9250828201905080821115610f4657610f45610ee9565b5b9291505056fea2646970667358221220bf03418ce41af7d2698586a14fc4faf84840764d3641494049a10c6318a15b7864736f6c634300081c003360806040526040516149db3803806149db83398181016040528101906100259190610874565b85600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036100985760006040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161008f919061095d565b60405180910390fd5b6100a78161048160201b60201c565b5060008060146101000a81548160ff02191690831515021790555085600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555086600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555084600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600c90816101949190610b8f565b5082600d819055508160000151600390816101af9190610b8f565b5081602001516004819055508160400151600581905550816060015160068190555081608001516007819055508160a001516008819055508160c001516009819055508160e00151600a81905550600160116000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600f600081548092919061027790610c90565b919050555034600e600082825461028e9190610cd8565b92505081905550600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fe3d4187f6ca4248660cc0ac8b8056515bac4a8132be2eca31d6d0cc170722a7e346040516102fd9190610d1b565b60405180910390a23460126000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008282546103799190610cd8565b925050819055504260126000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819055506013600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060108190555050505050505050610d36565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061058482610559565b9050919050565b61059481610579565b811461059f57600080fd5b50565b6000815190506105b18161058b565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61060a826105c1565b810181811067ffffffffffffffff82111715610629576106286105d2565b5b80604052505050565b600061063c610545565b90506106488282610601565b919050565b600067ffffffffffffffff821115610668576106676105d2565b5b610671826105c1565b9050602081019050919050565b60005b8381101561069c578082015181840152602081019050610681565b60008484015250505050565b60006106bb6106b68461064d565b610632565b9050828152602081018484840111156106d7576106d66105bc565b5b6106e284828561067e565b509392505050565b600082601f8301126106ff576106fe6105b7565b5b815161070f8482602086016106a8565b91505092915050565b6000819050919050565b61072b81610718565b811461073657600080fd5b50565b60008151905061074881610722565b92915050565b600080fd5b600080fd5b6000610100828403121561076f5761076e61074e565b5b61077a610100610632565b9050600082015167ffffffffffffffff81111561079a57610799610753565b5b6107a6848285016106ea565b60008301525060206107ba84828501610739565b60208301525060406107ce84828501610739565b60408301525060606107e284828501610739565b60608301525060806107f684828501610739565b60808301525060a061080a84828501610739565b60a08301525060c061081e84828501610739565b60c08301525060e061083284828501610739565b60e08301525092915050565b6000819050919050565b6108518161083e565b811461085c57600080fd5b50565b60008151905061086e81610848565b92915050565b600080600080600080600060e0888a0312156108935761089261054f565b5b60006108a18a828b016105a2565b97505060206108b28a828b016105a2565b96505060406108c38a828b016105a2565b955050606088015167ffffffffffffffff8111156108e4576108e3610554565b5b6108f08a828b016106ea565b94505060806109018a828b01610739565b93505060a088015167ffffffffffffffff81111561092257610921610554565b5b61092e8a828b01610758565b92505060c061093f8a828b0161085f565b91505092959891949750929550565b61095781610579565b82525050565b6000602082019050610972600083018461094e565b92915050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806109ca57607f821691505b6020821081036109dd576109dc610983565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610a457fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610a08565b610a4f8683610a08565b95508019841693508086168417925050509392505050565b6000819050919050565b6000610a8c610a87610a8284610718565b610a67565b610718565b9050919050565b6000819050919050565b610aa683610a71565b610aba610ab282610a93565b848454610a15565b825550505050565b600090565b610acf610ac2565b610ada818484610a9d565b505050565b5b81811015610afe57610af3600082610ac7565b600181019050610ae0565b5050565b601f821115610b4357610b14816109e3565b610b1d846109f8565b81016020851015610b2c578190505b610b40610b38856109f8565b830182610adf565b50505b505050565b600082821c905092915050565b6000610b6660001984600802610b48565b1980831691505092915050565b6000610b7f8383610b55565b9150826002028217905092915050565b610b9882610978565b67ffffffffffffffff811115610bb157610bb06105d2565b5b610bbb82546109b2565b610bc6828285610b02565b600060209050601f831160018114610bf95760008415610be7578287015190505b610bf18582610b73565b865550610c59565b601f198416610c07866109e3565b60005b82811015610c2f57848901518255600182019150602085019450602081019050610c0a565b86831015610c4c5784890151610c48601f891682610b55565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610c9b82610718565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610ccd57610ccc610c61565b5b600182019050919050565b6000610ce382610718565b9150610cee83610718565b9250828201905080821115610d0657610d05610c61565b5b92915050565b610d1581610718565b82525050565b6000602082019050610d306000830184610d0c565b92915050565b613c9680610d456000396000f3fe6080604052600436106102295760003560e01c8063715018a611610123578063aa98e0c6116100ab578063d55e28141161006f578063d55e2814146107e2578063f0fccebb1461080d578063f2fde38b1461084b578063f6bd18c414610874578063faa0a264146108b157610230565b8063aa98e0c6146106e6578063ac2c1d3b14610711578063b2dc61941461074e578063c5c4744c14610779578063cc3d967b146107a457610230565b806381830593116100f257806381830593146106235780638456cb591461064e5780638da5cb5b146106655780639d76ea5814610690578063a26dbf26146106bb57610230565b8063715018a61461058b57806378e97925146105a25780637b61c320146105cd5780637ff9b596146105f857610230565b80633f4ba83a116101b15780635c975abb116101755780635c975abb146104b35780636348e35d146104de57806366a4559b1461050a5780636d00e501146105355780637107d7a61461056057610230565b80633f4ba83a146103da57806347734892146103f1578063483203a21461042e57806348dec2a71461045e578063590e1ae31461049c57610230565b80633197cbb6116101f85780633197cbb61461030557806334bb2fff1461033057806335c1d3491461035b5780633c4889ec146103985780633ccfd60b146103c357610230565b806302d05d3f1461023557806306dfd6121461026057806323548b8b1461029d5780632d8b9ed7146102c857610230565b3661023057005b600080fd5b34801561024157600080fd5b5061024a6108c8565b60405161025791906127b4565b60405180910390f35b34801561026c57600080fd5b5061028760048036038101906102829190612805565b6108ee565b604051610294919061284b565b60405180910390f35b3480156102a957600080fd5b506102b2610906565b6040516102bf919061284b565b60405180910390f35b3480156102d457600080fd5b506102ef60048036038101906102ea91906128cb565b61090c565b6040516102fc9190612946565b60405180910390f35b34801561031157600080fd5b5061031a610990565b604051610327919061284b565b60405180910390f35b34801561033c57600080fd5b50610345610996565b604051610352919061284b565b60405180910390f35b34801561036757600080fd5b50610382600480360381019061037d919061298d565b61099c565b60405161038f91906127b4565b60405180910390f35b3480156103a457600080fd5b506103ad6109db565b6040516103ba919061284b565b60405180910390f35b3480156103cf57600080fd5b506103d86109e1565b005b3480156103e657600080fd5b506103ef610a82565b005b3480156103fd57600080fd5b5061041860048036038101906104139190612805565b610a94565b604051610425919061284b565b60405180910390f35b610448600480360381019061044391906129ba565b610b3e565b6040516104559190612946565b60405180910390f35b34801561046a57600080fd5b5061048560048036038101906104809190612805565b6112db565b604051610493929190612a1a565b60405180910390f35b3480156104a857600080fd5b506104b16112ff565b005b3480156104bf57600080fd5b506104c8611592565b6040516104d59190612946565b60405180910390f35b3480156104ea57600080fd5b506104f36115a8565b604051610501929190612bbf565b60405180910390f35b34801561051657600080fd5b5061051f6117ae565b60405161052c9190612dbb565b60405180910390f35b34801561054157600080fd5b5061054a6119b1565b604051610557919061284b565b60405180910390f35b34801561056c57600080fd5b50610575611a81565b604051610582919061284b565b60405180910390f35b34801561059757600080fd5b506105a0611a87565b005b3480156105ae57600080fd5b506105b7611a9b565b6040516105c4919061284b565b60405180910390f35b3480156105d957600080fd5b506105e2611aa1565b6040516105ef9190612e27565b60405180910390f35b34801561060457600080fd5b5061060d611b2f565b60405161061a919061284b565b60405180910390f35b34801561062f57600080fd5b50610638611b35565b60405161064591906127b4565b60405180910390f35b34801561065a57600080fd5b50610663611b5b565b005b34801561067157600080fd5b5061067a611b6d565b60405161068791906127b4565b60405180910390f35b34801561069c57600080fd5b506106a5611b96565b6040516106b291906127b4565b60405180910390f35b3480156106c757600080fd5b506106d0611bbc565b6040516106dd919061284b565b60405180910390f35b3480156106f257600080fd5b506106fb611bc2565b6040516107089190612e62565b60405180910390f35b34801561071d57600080fd5b5061073860048036038101906107339190612805565b611bc8565b604051610745919061284b565b60405180910390f35b34801561075a57600080fd5b50610763611c14565b6040516107709190612e27565b60405180910390f35b34801561078557600080fd5b5061078e611ca2565b60405161079b919061284b565b60405180910390f35b3480156107b057600080fd5b506107cb60048036038101906107c69190612805565b611ca8565b6040516107d9929190612a1a565b60405180910390f35b3480156107ee57600080fd5b506107f7611d02565b604051610804919061284b565b60405180910390f35b34801561081957600080fd5b50610834600480360381019061082f9190612805565b611d08565b604051610842929190612e7d565b60405180910390f35b34801561085757600080fd5b50610872600480360381019061086d9190612805565b611edd565b005b34801561088057600080fd5b5061089b60048036038101906108969190612ea6565b611f63565b6040516108a89190612946565b60405180910390f35b3480156108bd57600080fd5b506108c661212f565b005b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60116020528060005260406000206000915090505481565b600a5481565b600080826040516020016109209190612f2e565b604051602081830303815290604052805190602001209050610986858580806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505060105483612396565b9150509392505050565b60055481565b60085481565b601381815481106109ac57600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60075481565b6109e96123ad565b600047905060008111610a31576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2890612f95565b60405180910390fd5b610a39611b6d565b73ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610a7e573d6000803e3d6000fd5b5050565b610a8a6123ad565b610a92612434565b565b600080600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff166370a08231846040518263ffffffff1660e01b8152600401610af591906127b4565b602060405180830381865afa158015610b12573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b369190612fca565b915050919050565b6000610b48612496565b600454421015610b8d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b8490613043565b60405180910390fd5b600554421115610bd2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc9906130af565b60405180910390fd5b6000612710601984610be491906130fe565b610bee919061316f565b905060008184610bfe91906131a0565b905080341015610c43576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c3a90613220565b60405180910390fd5b610c4e86863361090c565b610c8d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c849061328c565b60405180910390fd5b6002601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410610d0f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d06906132f8565b60405180910390fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1603610ed857600854600e54600a54610d779190613318565b5050600954841115610dbe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610db5906133be565b60405180910390fd5b600060126000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060008160000154600954610e379190613318565b905080861115610e7c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e7390613450565b60405180910390fd5b601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190610ecc90613470565b9190505550505061110c565b600654600e54600a54610eeb9190613318565b50506000601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020540361105857600654600e54600a54610f479190613318565b10610f9257600754841115610f91576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f889061352a565b60405180910390fd5b5b6007548403610fe5576002601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061103b565b601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600081548092919061103590613470565b91905055505b600f600081548092919061104e90613470565b919050555061110b565b6001601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020540361110a57600654600e54600a546110b29190613318565b5050601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600081548092919061110490613470565b91905055505b5b5b6000600e54600a5461111e9190613318565b905080851115611163576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161115a906135bc565b60405180910390fd5b84600e600082825461117591906131a0565b925050819055503373ffffffffffffffffffffffffffffffffffffffff167fe3d4187f6ca4248660cc0ac8b8056515bac4a8132be2eca31d6d0cc170722a7e866040516111c2919061284b565b60405180910390a26013339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555084601260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001600082825461127f91906131a0565b9250508190555042601260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010181905550600193505050509392505050565b60126020528060005260406000206000915090508060000154908060010154905082565b6113076123ad565b61130f612496565b6005544211611353576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161134a90613628565b60405180910390fd5b600a54600e5410611399576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161139090613694565b60405180910390fd5b60005b60138054905081101561158f576000601382815481106113bf576113be6136b4565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000601260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000015490506000811115611580576000601260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018190555060008273ffffffffffffffffffffffffffffffffffffffff16826040516114aa90613714565b60006040518083038185875af1925050503d80600081146114e7576040519150601f19603f3d011682016040523d82523d6000602084013e6114ec565b606091505b5050905080611530576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161152790613775565b60405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff167fbb28353e4598c3b9199101a66e0989549b659a59a54d2c27fbb183f1932c8e6d83604051611576919061284b565b60405180910390a2505b5050808060010191505061139c565b50565b60008060149054906101000a900460ff16905090565b6060806000600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600060138054905067ffffffffffffffff8111156115f3576115f2613795565b5b6040519080825280602002602001820160405280156116215781602001602082028036833780820191505090505b50905060005b601380549050811015611718578273ffffffffffffffffffffffffffffffffffffffff166370a0823160138381548110611664576116636136b4565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b81526004016116ab91906127b4565b602060405180830381865afa1580156116c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116ec9190612fca565b8282815181106116ff576116fe6136b4565b5b6020026020010181815250508080600101915050611627565b506013818180548060200260200160405190810160405280929190818152602001828054801561179d57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611753575b505050505091509350935050509091565b6117b66126d8565b604051806101c00160405280600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016003805461180d906137f3565b80601f0160208091040260200160405190810160405280929190818152602001828054611839906137f3565b80156118865780601f1061185b57610100808354040283529160200191611886565b820191906000526020600020905b81548152906001019060200180831161186957829003601f168201915b50505050508152602001600454815260200160055481526020016006548152602001600754815260200160085481526020016009548152602001600a548152602001600e548152602001600f548152602001600d548152602001600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600c805461192b906137f3565b80601f0160208091040260200160405190810160405280929190818152602001828054611957906137f3565b80156119a45780601f10611979576101008083540402835291602001916119a4565b820191906000526020600020905b81548152906001019060200180831161198757829003601f168201915b5050505050815250905090565b600080600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600d548173ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015611a27573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a4b919061385d565b600a611a5791906139bd565b600e54600a54611a679190613318565b611a7191906130fe565b611a7b919061316f565b91505090565b60065481565b611a8f6123ad565b611a9960006124d7565b565b60045481565b600c8054611aae906137f3565b80601f0160208091040260200160405190810160405280929190818152602001828054611ada906137f3565b8015611b275780601f10611afc57610100808354040283529160200191611b27565b820191906000526020600020905b815481529060010190602001808311611b0a57829003601f168201915b505050505081565b600d5481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b611b636123ad565b611b6b61259b565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600f5481565b60105481565b6000601260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001549050919050565b60038054611c21906137f3565b80601f0160208091040260200160405190810160405280929190818152602001828054611c4d906137f3565b8015611c9a5780601f10611c6f57610100808354040283529160200191611c9a565b820191906000526020600020905b815481529060010190602001808311611c7d57829003601f168201915b505050505081565b600e5481565b6000806000601260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050806000015481600101549250925050915091565b60095481565b600080600080601160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541190506000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1603611e2757600060126000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060000154600954611e1f9190613318565b915050611ed0565b6000601160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205403611e78576007549050611ecf565b6001601160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205403611ec9576006549050611ece565b600090505b5b5b8181935093505050915091565b611ee56123ad565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611f575760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401611f4e91906127b4565b60405180910390fd5b611f60816124d7565b50565b6000611f6d6123ad565b6005544211611fb1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611fa890613628565b60405180910390fd5b6000600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16866040518363ffffffff1660e01b8152600401612035929190613a08565b6020604051808303816000875af1158015612054573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120789190613a5d565b6120b7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016120ae90613ad6565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166379cc679030856040518363ffffffff1660e01b81526004016120f2929190613a08565b600060405180830381600087803b15801561210c57600080fd5b505af1158015612120573d6000803e3d6000fd5b50505050600191505092915050565b6121376123ad565b61213f612496565b6005544211612183576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161217a90613b42565b60405180910390fd5b600a54600e54106121c9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016121c090613bd4565b60405180910390fd5b6000600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000600d548273ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015612240573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612264919061385d565b600a61227091906139bd565b600e54600a546122809190613318565b61228a91906130fe565b612294919061316f565b9050600081116122d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016122d090613c40565b60405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff166342966c68826040518263ffffffff1660e01b8152600401612312919061284b565b600060405180830381600087803b15801561232c57600080fd5b505af1158015612340573d6000803e3d6000fd5b505050503373ffffffffffffffffffffffffffffffffffffffff167ffd38818f5291bf0bb3a2a48aadc06ba8757865d1dabd804585338aab3009dcb68260405161238a919061284b565b60405180910390a25050565b6000826123a385846125fe565b1490509392505050565b6123b561264e565b73ffffffffffffffffffffffffffffffffffffffff166123d3611b6d565b73ffffffffffffffffffffffffffffffffffffffff1614612432576123f661264e565b6040517f118cdaa700000000000000000000000000000000000000000000000000000000815260040161242991906127b4565b60405180910390fd5b565b61243c612656565b60008060146101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa61247f61264e565b60405161248c91906127b4565b60405180910390a1565b61249e611592565b156124d5576040517fd93c066500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6125a3612496565b6001600060146101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586125e761264e565b6040516125f491906127b4565b60405180910390a1565b60008082905060005b84518110156126435761263482868381518110612627576126266136b4565b5b6020026020010151612696565b91508080600101915050612607565b508091505092915050565b600033905090565b61265e611592565b612694576040517f8dfc202b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b60008183106126ae576126a982846126c1565b6126b9565b6126b883836126c1565b5b905092915050565b600082600052816020526040600020905092915050565b604051806101c00160405280600073ffffffffffffffffffffffffffffffffffffffff1681526020016060815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001606081525090565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061279e82612773565b9050919050565b6127ae81612793565b82525050565b60006020820190506127c960008301846127a5565b92915050565b600080fd5b600080fd5b6127e281612793565b81146127ed57600080fd5b50565b6000813590506127ff816127d9565b92915050565b60006020828403121561281b5761281a6127cf565b5b6000612829848285016127f0565b91505092915050565b6000819050919050565b61284581612832565b82525050565b6000602082019050612860600083018461283c565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f84011261288b5761288a612866565b5b8235905067ffffffffffffffff8111156128a8576128a761286b565b5b6020830191508360208202830111156128c4576128c3612870565b5b9250929050565b6000806000604084860312156128e4576128e36127cf565b5b600084013567ffffffffffffffff811115612902576129016127d4565b5b61290e86828701612875565b93509350506020612921868287016127f0565b9150509250925092565b60008115159050919050565b6129408161292b565b82525050565b600060208201905061295b6000830184612937565b92915050565b61296a81612832565b811461297557600080fd5b50565b60008135905061298781612961565b92915050565b6000602082840312156129a3576129a26127cf565b5b60006129b184828501612978565b91505092915050565b6000806000604084860312156129d3576129d26127cf565b5b600084013567ffffffffffffffff8111156129f1576129f06127d4565b5b6129fd86828701612875565b93509350506020612a1086828701612978565b9150509250925092565b6000604082019050612a2f600083018561283c565b612a3c602083018461283c565b9392505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b612a7881612793565b82525050565b6000612a8a8383612a6f565b60208301905092915050565b6000602082019050919050565b6000612aae82612a43565b612ab88185612a4e565b9350612ac383612a5f565b8060005b83811015612af4578151612adb8882612a7e565b9750612ae683612a96565b925050600181019050612ac7565b5085935050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b612b3681612832565b82525050565b6000612b488383612b2d565b60208301905092915050565b6000602082019050919050565b6000612b6c82612b01565b612b768185612b0c565b9350612b8183612b1d565b8060005b83811015612bb2578151612b998882612b3c565b9750612ba483612b54565b925050600181019050612b85565b5085935050505092915050565b60006040820190508181036000830152612bd98185612aa3565b90508181036020830152612bed8184612b61565b90509392505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015612c30578082015181840152602081019050612c15565b60008484015250505050565b6000601f19601f8301169050919050565b6000612c5882612bf6565b612c628185612c01565b9350612c72818560208601612c12565b612c7b81612c3c565b840191505092915050565b60006101c083016000830151612c9f6000860182612a6f565b5060208301518482036020860152612cb78282612c4d565b9150506040830151612ccc6040860182612b2d565b506060830151612cdf6060860182612b2d565b506080830151612cf26080860182612b2d565b5060a0830151612d0560a0860182612b2d565b5060c0830151612d1860c0860182612b2d565b5060e0830151612d2b60e0860182612b2d565b50610100830151612d40610100860182612b2d565b50610120830151612d55610120860182612b2d565b50610140830151612d6a610140860182612b2d565b50610160830151612d7f610160860182612b2d565b50610180830151612d94610180860182612a6f565b506101a08301518482036101a0860152612dae8282612c4d565b9150508091505092915050565b60006020820190508181036000830152612dd58184612c86565b905092915050565b600082825260208201905092915050565b6000612df982612bf6565b612e038185612ddd565b9350612e13818560208601612c12565b612e1c81612c3c565b840191505092915050565b60006020820190508181036000830152612e418184612dee565b905092915050565b6000819050919050565b612e5c81612e49565b82525050565b6000602082019050612e776000830184612e53565b92915050565b6000604082019050612e926000830185612937565b612e9f602083018461283c565b9392505050565b60008060408385031215612ebd57612ebc6127cf565b5b6000612ecb85828601612978565b9250506020612edc85828601612978565b9150509250929050565b60008160601b9050919050565b6000612efe82612ee6565b9050919050565b6000612f1082612ef3565b9050919050565b612f28612f2382612793565b612f05565b82525050565b6000612f3a8284612f17565b60148201915081905092915050565b7f4e6f2045544820746f2077697468647261770000000000000000000000000000600082015250565b6000612f7f601283612ddd565b9150612f8a82612f49565b602082019050919050565b60006020820190508181036000830152612fae81612f72565b9050919050565b600081519050612fc481612961565b92915050565b600060208284031215612fe057612fdf6127cf565b5b6000612fee84828501612fb5565b91505092915050565b7f53616c65206e6f74207374617274656420796574210000000000000000000000600082015250565b600061302d601583612ddd565b915061303882612ff7565b602082019050919050565b6000602082019050818103600083015261305c81613020565b9050919050565b7f53616c6520456e64656421000000000000000000000000000000000000000000600082015250565b6000613099600b83612ddd565b91506130a482613063565b602082019050919050565b600060208201905081810360008301526130c88161308c565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061310982612832565b915061311483612832565b925082820261312281612832565b91508282048414831517613139576131386130cf565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061317a82612832565b915061318583612832565b92508261319557613194613140565b5b828204905092915050565b60006131ab82612832565b91506131b683612832565b92508282019050808211156131ce576131cd6130cf565b5b92915050565b7f506c656173652073656e64207265717569726564206665657300000000000000600082015250565b600061320a601983612ddd565b9150613215826131d4565b602082019050919050565b60006020820190508181036000830152613239816131fd565b9050919050565b7f496e76616c6964204d65726b6c652070726f6f66000000000000000000000000600082015250565b6000613276601483612ddd565b915061328182613240565b602082019050919050565b600060208201905081810360008301526132a581613269565b9050919050565b7f557365722063616e206f6e6c7920627579207477696365210000000000000000600082015250565b60006132e2601883612ddd565b91506132ed826132ac565b602082019050919050565b60006020820190508181036000830152613311816132d5565b9050919050565b600061332382612832565b915061332e83612832565b9250828203905081811115613346576133456130cf565b5b92915050565b7f416d6f756e742061626f7665206d617842757943726561746f72206973206e6f60008201527f7420616363657074656421000000000000000000000000000000000000000000602082015250565b60006133a8602b83612ddd565b91506133b38261334c565b604082019050919050565b600060208201905081810360008301526133d78161339b565b9050919050565b7f416d6f756e742061626f766520616c6c6f77656420627579206973206e6f742060008201527f6163636570746564210000000000000000000000000000000000000000000000602082015250565b600061343a602983612ddd565b9150613445826133de565b604082019050919050565b600060208201905081810360008301526134698161342d565b9050919050565b600061347b82612832565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036134ad576134ac6130cf565b5b600182019050919050565b7f466972737420427579204d757374206c657373207468616e204d61784275795560008201527f7365722100000000000000000000000000000000000000000000000000000000602082015250565b6000613514602483612ddd565b915061351f826134b8565b604082019050919050565b6000602082019050818103600083015261354381613507565b9050919050565b7f416d6f756e742061626f76652072656d61696e696e6720636170206973206e6f60008201527f7420616363657074656421000000000000000000000000000000000000000000602082015250565b60006135a6602b83612ddd565b91506135b18261354a565b604082019050919050565b600060208201905081810360008301526135d581613599565b9050919050565b7f49444f2073616c6520686173206e6f7420656e64656420796574000000000000600082015250565b6000613612601a83612ddd565b915061361d826135dc565b602082019050919050565b6000602082019050818103600083015261364181613605565b9050919050565b7f49444f207375636365737366756c2c206e6f20726566756e6473210000000000600082015250565b600061367e601b83612ddd565b915061368982613648565b602082019050919050565b600060208201905081810360008301526136ad81613671565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081905092915050565b50565b60006136fe6000836136e3565b9150613709826136ee565b600082019050919050565b600061371f826136f1565b9150819050919050565b7f526566756e64207472616e73666572206661696c656400000000000000000000600082015250565b600061375f601683612ddd565b915061376a82613729565b602082019050919050565b6000602082019050818103600083015261378e81613752565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061380b57607f821691505b60208210810361381e5761381d6137c4565b5b50919050565b600060ff82169050919050565b61383a81613824565b811461384557600080fd5b50565b60008151905061385781613831565b92915050565b600060208284031215613873576138726127cf565b5b600061388184828501613848565b91505092915050565b60008160011c9050919050565b6000808291508390505b60018511156138e1578086048111156138bd576138bc6130cf565b5b60018516156138cc5780820291505b80810290506138da8561388a565b94506138a1565b94509492505050565b6000826138fa57600190506139b6565b8161390857600090506139b6565b816001811461391e576002811461392857613957565b60019150506139b6565b60ff84111561393a576139396130cf565b5b8360020a915084821115613951576139506130cf565b5b506139b6565b5060208310610133831016604e8410600b841016171561398c5782820a905083811115613987576139866130cf565b5b6139b6565b6139998484846001613897565b925090508184048111156139b0576139af6130cf565b5b81810290505b9392505050565b60006139c882612832565b91506139d383613824565b9250613a007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff84846138ea565b905092915050565b6000604082019050613a1d60008301856127a5565b613a2a602083018461283c565b9392505050565b613a3a8161292b565b8114613a4557600080fd5b50565b600081519050613a5781613a31565b92915050565b600060208284031215613a7357613a726127cf565b5b6000613a8184828501613a48565b91505092915050565b7f5472616e7366657220746f2061646d696e206661696c65640000000000000000600082015250565b6000613ac0601883612ddd565b9150613acb82613a8a565b602082019050919050565b60006020820190508181036000830152613aef81613ab3565b9050919050565b7f49444f20686173206e6f7420656e646564207965740000000000000000000000600082015250565b6000613b2c601583612ddd565b9150613b3782613af6565b602082019050919050565b60006020820190508181036000830152613b5b81613b1f565b9050919050565b7f4d61784361702077617320726561636865642c206e6f20746f6b656e7320746f60008201527f206275726e000000000000000000000000000000000000000000000000000000602082015250565b6000613bbe602583612ddd565b9150613bc982613b62565b604082019050919050565b60006020820190508181036000830152613bed81613bb1565b9050919050565b7f4e6f20756e736f6c6420746f6b656e7320746f206275726e0000000000000000600082015250565b6000613c2a601883612ddd565b9150613c3582613bf4565b602082019050919050565b60006020820190508181036000830152613c5981613c1d565b905091905056fea26469706673582212208b9a91840ba6cd8353f18a930452a350129c2a595bf8242c7dc3a8d72cfca50964736f6c634300081c0033'
