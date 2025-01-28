let masterNormalABI = [
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
				"internalType": "contract NormalIDO",
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

let normalIdoABI = [
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
				"internalType": "struct NormalIDO.IDOInfo",
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

let masterNormalByteCode = '6080604052604051617ea5380380617ea583398181016040528101906100259190610ce8565b85600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036100985760006040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161008f9190610df9565b60405180910390fd5b6100a7816107f060201b60201c565b5060008060146101000a81548160ff02191690831515021790555086886100ce9190610e43565b341015610110576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161010790610ed4565b60405180910390fd5b60008311610153576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161014a90610f40565b60405180910390fd5b838160e00151111561019a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161019190610fac565b60405180910390fd5b85600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555084600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550816000015182602001518360400151846060015160405161027d906108b4565b61028a949392919061102e565b604051809103906000f0801580156102a6573d6000803e3d6000fd5b50600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008060008b6103f6576064603786604001516103049190611081565b61030e91906110f2565b92508285604001516103209190611123565b90506000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168c60405161036a90611188565b60006040518083038185875af1925050503d80600081146103a7576040519150601f19603f3d011682016040523d82523d6000602084013e6103ac565b606091505b50509050806103f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103e7906111e9565b60405180910390fd5b50610452565b6064603686604001516104099190611081565b61041391906110f2565b92506064600186604001516104289190611081565b61043291906110f2565b915081836104409190610e43565b856040015161044f9190611123565b90505b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16876060015160ff16600a6104c7919061133c565b866104d29190611081565b6040518363ffffffff1660e01b81526004016104ef929190611387565b6020604051808303816000875af115801561050e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061053291906113b0565b50600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16876060015160ff16600a6105a8919061133c565b856105b39190611081565b6040518363ffffffff1660e01b81526004016105d0929190611387565b6020604051808303816000875af11580156105ef573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061061391906113b0565b5089600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1688602001518a89604051610691906108c1565b6106a0969594939291906114e6565b6040518091039082f09050801580156106bd573d6000803e3d6000fd5b50600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16876060015160ff16600a610773919061133c565b8461077e9190611081565b6040518363ffffffff1660e01b815260040161079b929190611387565b6020604051808303816000875af11580156107ba573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107de91906113b0565b50505050505050505050505050611555565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b611b4380611e0483390190565b61455e8061394783390190565b6000604051905090565b600080fd5b600080fd5b60008115159050919050565b6108f7816108e2565b811461090257600080fd5b50565b600081519050610914816108ee565b92915050565b6000819050919050565b61092d8161091a565b811461093857600080fd5b50565b60008151905061094a81610924565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061097b82610950565b9050919050565b61098b81610970565b811461099657600080fd5b50565b6000815190506109a881610982565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6109fc826109b3565b810181811067ffffffffffffffff82111715610a1b57610a1a6109c4565b5b80604052505050565b6000610a2e6108ce565b9050610a3a82826109f3565b919050565b600080fd5b600080fd5b600080fd5b600067ffffffffffffffff821115610a6957610a686109c4565b5b610a72826109b3565b9050602081019050919050565b60005b83811015610a9d578082015181840152602081019050610a82565b60008484015250505050565b6000610abc610ab784610a4e565b610a24565b905082815260208101848484011115610ad857610ad7610a49565b5b610ae3848285610a7f565b509392505050565b600082601f830112610b0057610aff610a44565b5b8151610b10848260208601610aa9565b91505092915050565b600060ff82169050919050565b610b2f81610b19565b8114610b3a57600080fd5b50565b600081519050610b4c81610b26565b92915050565b600060808284031215610b6857610b676109ae565b5b610b726080610a24565b9050600082015167ffffffffffffffff811115610b9257610b91610a3f565b5b610b9e84828501610aeb565b600083015250602082015167ffffffffffffffff811115610bc257610bc1610a3f565b5b610bce84828501610aeb565b6020830152506040610be28482850161093b565b6040830152506060610bf684828501610b3d565b60608301525092915050565b60006101008284031215610c1957610c186109ae565b5b610c24610100610a24565b9050600082015167ffffffffffffffff811115610c4457610c43610a3f565b5b610c5084828501610aeb565b6000830152506020610c648482850161093b565b6020830152506040610c788482850161093b565b6040830152506060610c8c8482850161093b565b6060830152506080610ca08482850161093b565b60808301525060a0610cb48482850161093b565b60a08301525060c0610cc88482850161093b565b60c08301525060e0610cdc8482850161093b565b60e08301525092915050565b60008060008060008060008060006101208a8c031215610d0b57610d0a6108d8565b5b6000610d198c828d01610905565b9950506020610d2a8c828d0161093b565b9850506040610d3b8c828d0161093b565b9750506060610d4c8c828d01610999565b9650506080610d5d8c828d01610999565b95505060a0610d6e8c828d0161093b565b94505060c0610d7f8c828d0161093b565b93505060e08a015167ffffffffffffffff811115610da057610d9f6108dd565b5b610dac8c828d01610b52565b9250506101008a015167ffffffffffffffff811115610dce57610dcd6108dd565b5b610dda8c828d01610c02565b9150509295985092959850929598565b610df381610970565b82525050565b6000602082019050610e0e6000830184610dea565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610e4e8261091a565b9150610e598361091a565b9250828201905080821115610e7157610e70610e14565b5b92915050565b600082825260208201905092915050565b7f496e73756666696369656e74206665652073656e742100000000000000000000600082015250565b6000610ebe601683610e77565b9150610ec982610e88565b602082019050919050565b60006020820190508181036000830152610eed81610eb1565b9050919050565b7f496e76616c696420746f6b656e20707269636521000000000000000000000000600082015250565b6000610f2a601483610e77565b9150610f3582610ef4565b602082019050919050565b60006020820190508181036000830152610f5981610f1d565b9050919050565b7f496e76616c6964204d6178206361702100000000000000000000000000000000600082015250565b6000610f96601083610e77565b9150610fa182610f60565b602082019050919050565b60006020820190508181036000830152610fc581610f89565b9050919050565b600081519050919050565b6000610fe282610fcc565b610fec8185610e77565b9350610ffc818560208601610a7f565b611005816109b3565b840191505092915050565b6110198161091a565b82525050565b61102881610b19565b82525050565b600060808201905081810360008301526110488187610fd7565b9050818103602083015261105c8186610fd7565b905061106b6040830185611010565b611078606083018461101f565b95945050505050565b600061108c8261091a565b91506110978361091a565b92508282026110a58161091a565b915082820484148315176110bc576110bb610e14565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006110fd8261091a565b91506111088361091a565b925082611118576111176110c3565b5b828204905092915050565b600061112e8261091a565b91506111398361091a565b925082820390508181111561115157611150610e14565b5b92915050565b600081905092915050565b50565b6000611172600083611157565b915061117d82611162565b600082019050919050565b600061119382611165565b9150819050919050565b7f466565207472616e73666572206661696c656421000000000000000000000000600082015250565b60006111d3601483610e77565b91506111de8261119d565b602082019050919050565b60006020820190508181036000830152611202816111c6565b9050919050565b60008160011c9050919050565b6000808291508390505b60018511156112605780860481111561123c5761123b610e14565b5b600185161561124b5780820291505b808102905061125985611209565b9450611220565b94509492505050565b6000826112795760019050611335565b816112875760009050611335565b816001811461129d57600281146112a7576112d6565b6001915050611335565b60ff8411156112b9576112b8610e14565b5b8360020a9150848211156112d0576112cf610e14565b5b50611335565b5060208310610133831016604e8410600b841016171561130b5782820a90508381111561130657611305610e14565b5b611335565b6113188484846001611216565b9250905081840481111561132f5761132e610e14565b5b81810290505b9392505050565b60006113478261091a565b91506113528361091a565b925061137f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484611269565b905092915050565b600060408201905061139c6000830185610dea565b6113a96020830184611010565b9392505050565b6000602082840312156113c6576113c56108d8565b5b60006113d484828501610905565b91505092915050565b600082825260208201905092915050565b60006113f982610fcc565b61140381856113dd565b9350611413818560208601610a7f565b61141c816109b3565b840191505092915050565b6114308161091a565b82525050565b600061010083016000830151848203600086015261145482826113ee565b91505060208301516114696020860182611427565b50604083015161147c6040860182611427565b50606083015161148f6060860182611427565b5060808301516114a26080860182611427565b5060a08301516114b560a0860182611427565b5060c08301516114c860c0860182611427565b5060e08301516114db60e0860182611427565b508091505092915050565b600060c0820190506114fb6000830189610dea565b6115086020830188610dea565b6115156040830187610dea565b81810360608301526115278186610fd7565b90506115366080830185611010565b81810360a08301526115488184611436565b9050979650505050505050565b6108a0806115646000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c80638da5cb5b116100715780638da5cb5b14610132578063b3f0067414610150578063eeb522aa1461016e578063f2fde38b1461018c578063f851a440146101a8578063fc0c546a146101c6576100b4565b806302d05d3f146100b95780633f4ba83a146100d7578063450daaa9146100e15780635c975abb14610100578063715018a61461011e5780638456cb5914610128575b600080fd5b6100c16101e4565b6040516100ce91906106ca565b60405180910390f35b6100df61020a565b005b6100e961021c565b6040516100f79291906106e5565b60405180910390f35b61010861026d565b6040516101159190610729565b60405180910390f35b610126610283565b005b610130610297565b005b61013a6102a9565b60405161014791906106ca565b60405180910390f35b6101586102d2565b60405161016591906106ca565b60405180910390f35b6101766102f8565b60405161018391906107a3565b60405180910390f35b6101a660048036038101906101a191906107ef565b61031e565b005b6101b06103a4565b6040516101bd91906106ca565b60405180910390f35b6101ce6103ca565b6040516101db919061084f565b60405180910390f35b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6102126103f0565b61021a610477565b565b600080600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16915091509091565b60008060149054906101000a900460ff16905090565b61028b6103f0565b61029560006104d9565b565b61029f6103f0565b6102a761059d565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6103266103f0565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036103985760006040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161038f91906106ca565b60405180910390fd5b6103a1816104d9565b50565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6103f8610600565b73ffffffffffffffffffffffffffffffffffffffff166104166102a9565b73ffffffffffffffffffffffffffffffffffffffff161461047557610439610600565b6040517f118cdaa700000000000000000000000000000000000000000000000000000000815260040161046c91906106ca565b60405180910390fd5b565b61047f610608565b60008060146101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6104c2610600565b6040516104cf91906106ca565b60405180910390a1565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6105a5610648565b6001600060146101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586105e9610600565b6040516105f691906106ca565b60405180910390a1565b600033905090565b61061061026d565b610646576040517f8dfc202b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b61065061026d565b15610687576040517fd93c066500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006106b482610689565b9050919050565b6106c4816106a9565b82525050565b60006020820190506106df60008301846106bb565b92915050565b60006040820190506106fa60008301856106bb565b61070760208301846106bb565b9392505050565b60008115159050919050565b6107238161070e565b82525050565b600060208201905061073e600083018461071a565b92915050565b6000819050919050565b600061076961076461075f84610689565b610744565b610689565b9050919050565b600061077b8261074e565b9050919050565b600061078d82610770565b9050919050565b61079d81610782565b82525050565b60006020820190506107b86000830184610794565b92915050565b600080fd5b6107cc816106a9565b81146107d757600080fd5b50565b6000813590506107e9816107c3565b92915050565b600060208284031215610805576108046107be565b5b6000610813848285016107da565b91505092915050565b60006108278261074e565b9050919050565b60006108398261081c565b9050919050565b6108498161082e565b82525050565b60006020820190506108646000830184610840565b9291505056fea264697066735822122033880014cc487dbe60e793abc89fd3d7334a72d4d14c0aa6473c6e965397f16e64736f6c634300081c0033608060405234801561001057600080fd5b50604051611b43380380611b438339818101604052810190610032919061054a565b838381600390816100439190610800565b5080600490816100539190610800565b50505080600560006101000a81548160ff021916908360ff1602179055506000600560009054906101000a900460ff1660ff16600a6100929190610a34565b8361009d9190610a7f565b90506100af33826100b960201b60201c565b5050505050610bb2565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361012b5760006040517fec442f050000000000000000000000000000000000000000000000000000000081526004016101229190610b02565b60405180910390fd5b61013d6000838361014160201b60201c565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036101935780600260008282546101879190610b1d565b92505081905550610266565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561021f578381836040517fe450d38c00000000000000000000000000000000000000000000000000000000815260040161021693929190610b60565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036102af57806002600082825403925050819055506102fc565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516103599190610b97565b60405180910390a3505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6103cd82610384565b810181811067ffffffffffffffff821117156103ec576103eb610395565b5b80604052505050565b60006103ff610366565b905061040b82826103c4565b919050565b600067ffffffffffffffff82111561042b5761042a610395565b5b61043482610384565b9050602081019050919050565b60005b8381101561045f578082015181840152602081019050610444565b60008484015250505050565b600061047e61047984610410565b6103f5565b90508281526020810184848401111561049a5761049961037f565b5b6104a5848285610441565b509392505050565b600082601f8301126104c2576104c161037a565b5b81516104d284826020860161046b565b91505092915050565b6000819050919050565b6104ee816104db565b81146104f957600080fd5b50565b60008151905061050b816104e5565b92915050565b600060ff82169050919050565b61052781610511565b811461053257600080fd5b50565b6000815190506105448161051e565b92915050565b6000806000806080858703121561056457610563610370565b5b600085015167ffffffffffffffff81111561058257610581610375565b5b61058e878288016104ad565b945050602085015167ffffffffffffffff8111156105af576105ae610375565b5b6105bb878288016104ad565b93505060406105cc878288016104fc565b92505060606105dd87828801610535565b91505092959194509250565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061063b57607f821691505b60208210810361064e5761064d6105f4565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026106b67fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610679565b6106c08683610679565b95508019841693508086168417925050509392505050565b6000819050919050565b60006106fd6106f86106f3846104db565b6106d8565b6104db565b9050919050565b6000819050919050565b610717836106e2565b61072b61072382610704565b848454610686565b825550505050565b600090565b610740610733565b61074b81848461070e565b505050565b5b8181101561076f57610764600082610738565b600181019050610751565b5050565b601f8211156107b45761078581610654565b61078e84610669565b8101602085101561079d578190505b6107b16107a985610669565b830182610750565b50505b505050565b600082821c905092915050565b60006107d7600019846008026107b9565b1980831691505092915050565b60006107f083836107c6565b9150826002028217905092915050565b610809826105e9565b67ffffffffffffffff81111561082257610821610395565b5b61082c8254610623565b610837828285610773565b600060209050601f83116001811461086a5760008415610858578287015190505b61086285826107e4565b8655506108ca565b601f19841661087886610654565b60005b828110156108a05784890151825560018201915060208501945060208101905061087b565b868310156108bd57848901516108b9601f8916826107c6565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160011c9050919050565b6000808291508390505b600185111561095857808604811115610934576109336108d2565b5b60018516156109435780820291505b808102905061095185610901565b9450610918565b94509492505050565b6000826109715760019050610a2d565b8161097f5760009050610a2d565b8160018114610995576002811461099f576109ce565b6001915050610a2d565b60ff8411156109b1576109b06108d2565b5b8360020a9150848211156109c8576109c76108d2565b5b50610a2d565b5060208310610133831016604e8410600b8410161715610a035782820a9050838111156109fe576109fd6108d2565b5b610a2d565b610a10848484600161090e565b92509050818404811115610a2757610a266108d2565b5b81810290505b9392505050565b6000610a3f826104db565b9150610a4a836104db565b9250610a777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484610961565b905092915050565b6000610a8a826104db565b9150610a95836104db565b9250828202610aa3816104db565b91508282048414831517610aba57610ab96108d2565b5b5092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610aec82610ac1565b9050919050565b610afc81610ae1565b82525050565b6000602082019050610b176000830184610af3565b92915050565b6000610b28826104db565b9150610b33836104db565b9250828201905080821115610b4b57610b4a6108d2565b5b92915050565b610b5a816104db565b82525050565b6000606082019050610b756000830186610af3565b610b826020830185610b51565b610b8f6040830184610b51565b949350505050565b6000602082019050610bac6000830184610b51565b92915050565b610f8280610bc16000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c806342966c681161007157806342966c681461016857806370a082311461018457806379cc6790146101b457806395d89b41146101d0578063a9059cbb146101ee578063dd62ed3e1461021e576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b661024e565b6040516100c39190610ba9565b60405180910390f35b6100e660048036038101906100e19190610c64565b6102e0565b6040516100f39190610cbf565b60405180910390f35b610104610303565b6040516101119190610ce9565b60405180910390f35b610134600480360381019061012f9190610d04565b61030d565b6040516101419190610cbf565b60405180910390f35b61015261033c565b60405161015f9190610d73565b60405180910390f35b610182600480360381019061017d9190610d8e565b610353565b005b61019e60048036038101906101999190610dbb565b610367565b6040516101ab9190610ce9565b60405180910390f35b6101ce60048036038101906101c99190610c64565b6103af565b005b6101d86103bd565b6040516101e59190610ba9565b60405180910390f35b61020860048036038101906102039190610c64565b61044f565b6040516102159190610cbf565b60405180910390f35b61023860048036038101906102339190610de8565b610472565b6040516102459190610ce9565b60405180910390f35b60606003805461025d90610e57565b80601f016020809104026020016040519081016040528092919081815260200182805461028990610e57565b80156102d65780601f106102ab576101008083540402835291602001916102d6565b820191906000526020600020905b8154815290600101906020018083116102b957829003601f168201915b5050505050905090565b6000806102eb6104f9565b90506102f8818585610501565b600191505092915050565b6000600254905090565b6000806103186104f9565b9050610325858285610513565b6103308585856105a7565b60019150509392505050565b6000600560009054906101000a900460ff16905090565b61036461035e6104f9565b8261069b565b50565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6103b9828261069b565b5050565b6060600480546103cc90610e57565b80601f01602080910402602001604051908101604052809291908181526020018280546103f890610e57565b80156104455780601f1061041a57610100808354040283529160200191610445565b820191906000526020600020905b81548152906001019060200180831161042857829003601f168201915b5050505050905090565b60008061045a6104f9565b90506104678185856105a7565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b61050e838383600161071d565b505050565b600061051f8484610472565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146105a15781811015610591578281836040517ffb8f41b200000000000000000000000000000000000000000000000000000000815260040161058893929190610e97565b60405180910390fd5b6105a08484848403600061071d565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036106195760006040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016106109190610ece565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361068b5760006040517fec442f050000000000000000000000000000000000000000000000000000000081526004016106829190610ece565b60405180910390fd5b6106968383836108f4565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361070d5760006040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016107049190610ece565b60405180910390fd5b610719826000836108f4565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff160361078f5760006040517fe602df050000000000000000000000000000000000000000000000000000000081526004016107869190610ece565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036108015760006040517f94280d620000000000000000000000000000000000000000000000000000000081526004016107f89190610ece565b60405180910390fd5b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555080156108ee578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516108e59190610ce9565b60405180910390a35b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361094657806002600082825461093a9190610f18565b92505081905550610a19565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156109d2578381836040517fe450d38c0000000000000000000000000000000000000000000000000000000081526004016109c993929190610e97565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a625780600260008282540392505081905550610aaf565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610b0c9190610ce9565b60405180910390a3505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610b53578082015181840152602081019050610b38565b60008484015250505050565b6000601f19601f8301169050919050565b6000610b7b82610b19565b610b858185610b24565b9350610b95818560208601610b35565b610b9e81610b5f565b840191505092915050565b60006020820190508181036000830152610bc38184610b70565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610bfb82610bd0565b9050919050565b610c0b81610bf0565b8114610c1657600080fd5b50565b600081359050610c2881610c02565b92915050565b6000819050919050565b610c4181610c2e565b8114610c4c57600080fd5b50565b600081359050610c5e81610c38565b92915050565b60008060408385031215610c7b57610c7a610bcb565b5b6000610c8985828601610c19565b9250506020610c9a85828601610c4f565b9150509250929050565b60008115159050919050565b610cb981610ca4565b82525050565b6000602082019050610cd46000830184610cb0565b92915050565b610ce381610c2e565b82525050565b6000602082019050610cfe6000830184610cda565b92915050565b600080600060608486031215610d1d57610d1c610bcb565b5b6000610d2b86828701610c19565b9350506020610d3c86828701610c19565b9250506040610d4d86828701610c4f565b9150509250925092565b600060ff82169050919050565b610d6d81610d57565b82525050565b6000602082019050610d886000830184610d64565b92915050565b600060208284031215610da457610da3610bcb565b5b6000610db284828501610c4f565b91505092915050565b600060208284031215610dd157610dd0610bcb565b5b6000610ddf84828501610c19565b91505092915050565b60008060408385031215610dff57610dfe610bcb565b5b6000610e0d85828601610c19565b9250506020610e1e85828601610c19565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610e6f57607f821691505b602082108103610e8257610e81610e28565b5b50919050565b610e9181610bf0565b82525050565b6000606082019050610eac6000830186610e88565b610eb96020830185610cda565b610ec66040830184610cda565b949350505050565b6000602082019050610ee36000830184610e88565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610f2382610c2e565b9150610f2e83610c2e565b9250828201905080821115610f4657610f45610ee9565b5b9291505056fea2646970667358221220b7a246923e06ee5ecce6b99cc58980ecb07b54f47208ae858adcc030d2ad555464736f6c634300081c0033608060405260405161455e38038061455e83398181016040528101906100259190610836565b84600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036100985760006040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161008f919061090a565b60405180910390fd5b6100a78161047960201b60201c565b5060008060146101000a81548160ff02191690831515021790555084600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555085600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600c90816101949190610b3c565b5081600d819055508060000151600390816101af9190610b3c565b5080602001516004819055508060400151600581905550806060015160068190555080608001516007819055508060a001516008819055508060c001516009819055508060e00151600a81905550600160106000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600f600081548092919061027790610c3d565b919050555034600e600082825461028e9190610c85565b92505081905550600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fe3d4187f6ca4248660cc0ac8b8056515bac4a8132be2eca31d6d0cc170722a7e346040516102fd9190610cc8565b60405180910390a23460116000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008282546103799190610c85565b925050819055504260116000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819055506012600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050505050610ce3565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061057c82610551565b9050919050565b61058c81610571565b811461059757600080fd5b50565b6000815190506105a981610583565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610602826105b9565b810181811067ffffffffffffffff82111715610621576106206105ca565b5b80604052505050565b600061063461053d565b905061064082826105f9565b919050565b600067ffffffffffffffff8211156106605761065f6105ca565b5b610669826105b9565b9050602081019050919050565b60005b83811015610694578082015181840152602081019050610679565b60008484015250505050565b60006106b36106ae84610645565b61062a565b9050828152602081018484840111156106cf576106ce6105b4565b5b6106da848285610676565b509392505050565b600082601f8301126106f7576106f66105af565b5b81516107078482602086016106a0565b91505092915050565b6000819050919050565b61072381610710565b811461072e57600080fd5b50565b6000815190506107408161071a565b92915050565b600080fd5b600080fd5b6000610100828403121561076757610766610746565b5b61077261010061062a565b9050600082015167ffffffffffffffff8111156107925761079161074b565b5b61079e848285016106e2565b60008301525060206107b284828501610731565b60208301525060406107c684828501610731565b60408301525060606107da84828501610731565b60608301525060806107ee84828501610731565b60808301525060a061080284828501610731565b60a08301525060c061081684828501610731565b60c08301525060e061082a84828501610731565b60e08301525092915050565b60008060008060008060c0878903121561085357610852610547565b5b600061086189828a0161059a565b965050602061087289828a0161059a565b955050604061088389828a0161059a565b945050606087015167ffffffffffffffff8111156108a4576108a361054c565b5b6108b089828a016106e2565b93505060806108c189828a01610731565b92505060a087015167ffffffffffffffff8111156108e2576108e161054c565b5b6108ee89828a01610750565b9150509295509295509295565b61090481610571565b82525050565b600060208201905061091f60008301846108fb565b92915050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061097757607f821691505b60208210810361098a57610989610930565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026109f27fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826109b5565b6109fc86836109b5565b95508019841693508086168417925050509392505050565b6000819050919050565b6000610a39610a34610a2f84610710565b610a14565b610710565b9050919050565b6000819050919050565b610a5383610a1e565b610a67610a5f82610a40565b8484546109c2565b825550505050565b600090565b610a7c610a6f565b610a87818484610a4a565b505050565b5b81811015610aab57610aa0600082610a74565b600181019050610a8d565b5050565b601f821115610af057610ac181610990565b610aca846109a5565b81016020851015610ad9578190505b610aed610ae5856109a5565b830182610a8c565b50505b505050565b600082821c905092915050565b6000610b1360001984600802610af5565b1980831691505092915050565b6000610b2c8383610b02565b9150826002028217905092915050565b610b4582610925565b67ffffffffffffffff811115610b5e57610b5d6105ca565b5b610b68825461095f565b610b73828285610aaf565b600060209050601f831160018114610ba65760008415610b94578287015190505b610b9e8582610b20565b865550610c06565b601f198416610bb486610990565b60005b82811015610bdc57848901518255600182019150602085019450602081019050610bb7565b86831015610bf95784890151610bf5601f891682610b02565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610c4882610710565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610c7a57610c79610c0e565b5b600182019050919050565b6000610c9082610710565b9150610c9b83610710565b9250828201905080821115610cb357610cb2610c0e565b5b92915050565b610cc281610710565b82525050565b6000602082019050610cdd6000830184610cb9565b92915050565b61386c80610cf26000396000f3fe6080604052600436106102135760003560e01c806378e9792511610118578063b2dc6194116100a0578063d96a094a1161006f578063d96a094a1461075f578063f0fccebb1461078f578063f2fde38b146107cd578063f6bd18c4146107f6578063faa0a264146108335761021a565b8063b2dc6194146106a0578063c5c4744c146106cb578063cc3d967b146106f6578063d55e2814146107345761021a565b80638456cb59116100e75780638456cb59146105cb5780638da5cb5b146105e25780639d76ea581461060d578063a26dbf2614610638578063ac2c1d3b146106635761021a565b806378e979251461051f5780637b61c3201461054a5780637ff9b5961461057557806381830593146105a05761021a565b8063477348921161019b5780636348e35d1161016a5780636348e35d1461045b57806366a4559b146104875780636d00e501146104b25780637107d7a6146104dd578063715018a6146105085761021a565b8063477348921461039e57806348dec2a7146103db578063590e1ae3146104195780635c975abb146104305761021a565b806334bb2fff116101e257806334bb2fff146102dd57806335c1d349146103085780633c4889ec146103455780633ccfd60b146103705780633f4ba83a146103875761021a565b806302d05d3f1461021f57806306dfd6121461024a57806323548b8b146102875780633197cbb6146102b25761021a565b3661021a57005b600080fd5b34801561022b57600080fd5b5061023461084a565b60405161024191906125b7565b60405180910390f35b34801561025657600080fd5b50610271600480360381019061026c9190612603565b610870565b60405161027e9190612649565b60405180910390f35b34801561029357600080fd5b5061029c610888565b6040516102a99190612649565b60405180910390f35b3480156102be57600080fd5b506102c761088e565b6040516102d49190612649565b60405180910390f35b3480156102e957600080fd5b506102f2610894565b6040516102ff9190612649565b60405180910390f35b34801561031457600080fd5b5061032f600480360381019061032a9190612690565b61089a565b60405161033c91906125b7565b60405180910390f35b34801561035157600080fd5b5061035a6108d9565b6040516103679190612649565b60405180910390f35b34801561037c57600080fd5b506103856108df565b005b34801561039357600080fd5b5061039c610980565b005b3480156103aa57600080fd5b506103c560048036038101906103c09190612603565b610992565b6040516103d29190612649565b60405180910390f35b3480156103e757600080fd5b5061040260048036038101906103fd9190612603565b610a3c565b6040516104109291906126bd565b60405180910390f35b34801561042557600080fd5b5061042e610a60565b005b34801561043c57600080fd5b50610445610cf3565b6040516104529190612701565b60405180910390f35b34801561046757600080fd5b50610470610d09565b60405161047e929190612898565b60405180910390f35b34801561049357600080fd5b5061049c610f0f565b6040516104a99190612a94565b60405180910390f35b3480156104be57600080fd5b506104c7611112565b6040516104d49190612649565b60405180910390f35b3480156104e957600080fd5b506104f26111e2565b6040516104ff9190612649565b60405180910390f35b34801561051457600080fd5b5061051d6111e8565b005b34801561052b57600080fd5b506105346111fc565b6040516105419190612649565b60405180910390f35b34801561055657600080fd5b5061055f611202565b60405161056c9190612b00565b60405180910390f35b34801561058157600080fd5b5061058a611290565b6040516105979190612649565b60405180910390f35b3480156105ac57600080fd5b506105b5611296565b6040516105c291906125b7565b60405180910390f35b3480156105d757600080fd5b506105e06112bc565b005b3480156105ee57600080fd5b506105f76112ce565b60405161060491906125b7565b60405180910390f35b34801561061957600080fd5b506106226112f7565b60405161062f91906125b7565b60405180910390f35b34801561064457600080fd5b5061064d61131d565b60405161065a9190612649565b60405180910390f35b34801561066f57600080fd5b5061068a60048036038101906106859190612603565b611323565b6040516106979190612649565b60405180910390f35b3480156106ac57600080fd5b506106b561136f565b6040516106c29190612b00565b60405180910390f35b3480156106d757600080fd5b506106e06113fd565b6040516106ed9190612649565b60405180910390f35b34801561070257600080fd5b5061071d60048036038101906107189190612603565b611403565b60405161072b9291906126bd565b60405180910390f35b34801561074057600080fd5b5061074961145d565b6040516107569190612649565b60405180910390f35b61077960048036038101906107749190612690565b611463565b6040516107869190612701565b60405180910390f35b34801561079b57600080fd5b506107b660048036038101906107b19190612603565b611bb4565b6040516107c4929190612b22565b60405180910390f35b3480156107d957600080fd5b506107f460048036038101906107ef9190612603565b611d89565b005b34801561080257600080fd5b5061081d60048036038101906108189190612b4b565b611e0f565b60405161082a9190612701565b60405180910390f35b34801561083f57600080fd5b50610848611fdb565b005b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60106020528060005260406000206000915090505481565b600a5481565b60055481565b60085481565b601281815481106108aa57600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60075481565b6108e7612242565b60004790506000811161092f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161092690612bd7565b60405180910390fd5b6109376112ce565b73ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015801561097c573d6000803e3d6000fd5b5050565b610988612242565b6109906122c9565b565b600080600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff166370a08231846040518263ffffffff1660e01b81526004016109f391906125b7565b602060405180830381865afa158015610a10573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a349190612c0c565b915050919050565b60116020528060005260406000206000915090508060000154908060010154905082565b610a68612242565b610a7061232b565b6005544211610ab4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aab90612c85565b60405180910390fd5b600a54600e5410610afa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610af190612cf1565b60405180910390fd5b60005b601280549050811015610cf057600060128281548110610b2057610b1f612d11565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000601160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000015490506000811115610ce1576000601160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018190555060008273ffffffffffffffffffffffffffffffffffffffff1682604051610c0b90612d71565b60006040518083038185875af1925050503d8060008114610c48576040519150601f19603f3d011682016040523d82523d6000602084013e610c4d565b606091505b5050905080610c91576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c8890612dd2565b60405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff167fbb28353e4598c3b9199101a66e0989549b659a59a54d2c27fbb183f1932c8e6d83604051610cd79190612649565b60405180910390a2505b50508080600101915050610afd565b50565b60008060149054906101000a900460ff16905090565b6060806000600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600060128054905067ffffffffffffffff811115610d5457610d53612df2565b5b604051908082528060200260200182016040528015610d825781602001602082028036833780820191505090505b50905060005b601280549050811015610e79578273ffffffffffffffffffffffffffffffffffffffff166370a0823160128381548110610dc557610dc4612d11565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b8152600401610e0c91906125b7565b602060405180830381865afa158015610e29573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e4d9190612c0c565b828281518110610e6057610e5f612d11565b5b6020026020010181815250508080600101915050610d88565b5060128181805480602002602001604051908101604052809291908181526020018280548015610efe57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610eb4575b505050505091509350935050509091565b610f176124db565b604051806101c00160405280600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160038054610f6e90612e50565b80601f0160208091040260200160405190810160405280929190818152602001828054610f9a90612e50565b8015610fe75780601f10610fbc57610100808354040283529160200191610fe7565b820191906000526020600020905b815481529060010190602001808311610fca57829003601f168201915b50505050508152602001600454815260200160055481526020016006548152602001600754815260200160085481526020016009548152602001600a548152602001600e548152602001600f548152602001600d548152602001600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600c805461108c90612e50565b80601f01602080910402602001604051908101604052809291908181526020018280546110b890612e50565b80156111055780601f106110da57610100808354040283529160200191611105565b820191906000526020600020905b8154815290600101906020018083116110e857829003601f168201915b5050505050815250905090565b600080600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600d548173ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015611188573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111ac9190612eba565b600a6111b89190613049565b600e54600a546111c89190613094565b6111d291906130c8565b6111dc9190613139565b91505090565b60065481565b6111f0612242565b6111fa600061236c565b565b60045481565b600c805461120f90612e50565b80601f016020809104026020016040519081016040528092919081815260200182805461123b90612e50565b80156112885780601f1061125d57610100808354040283529160200191611288565b820191906000526020600020905b81548152906001019060200180831161126b57829003601f168201915b505050505081565b600d5481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6112c4612242565b6112cc612430565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600f5481565b6000601160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001549050919050565b6003805461137c90612e50565b80601f01602080910402602001604051908101604052809291908181526020018280546113a890612e50565b80156113f55780601f106113ca576101008083540402835291602001916113f5565b820191906000526020600020905b8154815290600101906020018083116113d857829003601f168201915b505050505081565b600e5481565b6000806000601160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050806000015481600101549250925050915091565b60095481565b600061146d61232b565b6004544210156114b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114a9906131b6565b60405180910390fd5b6005544211156114f7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114ee90613222565b60405180910390fd5b600061271060198461150991906130c8565b6115139190613139565b9050600081846115239190613242565b905080341015611568576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161155f906132c2565b60405180910390fd5b6002601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054106115ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115e19061332e565b60405180910390fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16036117b357600854600e54600a546116529190613094565b5050600954841115611699576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611690906133c0565b60405180910390fd5b600060116000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050600081600001546009546117129190613094565b905080861115611757576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161174e90613452565b60405180910390fd5b601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008154809291906117a790613472565b919050555050506119e7565b600654600e54600a546117c69190613094565b50506000601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020540361193357600654600e54600a546118229190613094565b1061186d5760075484111561186c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118639061352c565b60405180910390fd5b5b60075484036118c0576002601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611916565b601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600081548092919061191090613472565b91905055505b600f600081548092919061192990613472565b91905055506119e6565b6001601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054036119e557600654600e54600a5461198d9190613094565b5050601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008154809291906119df90613472565b91905055505b5b5b6000600e54600a546119f99190613094565b905080851115611a3e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a35906135be565b60405180910390fd5b84600e6000828254611a509190613242565b925050819055503373ffffffffffffffffffffffffffffffffffffffff167fe3d4187f6ca4248660cc0ac8b8056515bac4a8132be2eca31d6d0cc170722a7e86604051611a9d9190612649565b60405180910390a26012339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555084601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000016000828254611b5a9190613242565b9250508190555042601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018190555060019350505050919050565b600080600080601060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541190506000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1603611cd357600060116000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060000154600954611ccb9190613094565b915050611d7c565b6000601060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205403611d24576007549050611d7b565b6001601060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205403611d75576006549050611d7a565b600090505b5b5b8181935093505050915091565b611d91612242565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611e035760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401611dfa91906125b7565b60405180910390fd5b611e0c8161236c565b50565b6000611e19612242565b6005544211611e5d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e5490612c85565b60405180910390fd5b6000600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16866040518363ffffffff1660e01b8152600401611ee19291906135de565b6020604051808303816000875af1158015611f00573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f249190613633565b611f63576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f5a906136ac565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166379cc679030856040518363ffffffff1660e01b8152600401611f9e9291906135de565b600060405180830381600087803b158015611fb857600080fd5b505af1158015611fcc573d6000803e3d6000fd5b50505050600191505092915050565b611fe3612242565b611feb61232b565b600554421161202f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161202690613718565b60405180910390fd5b600a54600e5410612075576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161206c906137aa565b60405180910390fd5b6000600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000600d548273ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156120ec573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121109190612eba565b600a61211c9190613049565b600e54600a5461212c9190613094565b61213691906130c8565b6121409190613139565b905060008111612185576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161217c90613816565b60405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff166342966c68826040518263ffffffff1660e01b81526004016121be9190612649565b600060405180830381600087803b1580156121d857600080fd5b505af11580156121ec573d6000803e3d6000fd5b505050503373ffffffffffffffffffffffffffffffffffffffff167ffd38818f5291bf0bb3a2a48aadc06ba8757865d1dabd804585338aab3009dcb6826040516122369190612649565b60405180910390a25050565b61224a612493565b73ffffffffffffffffffffffffffffffffffffffff166122686112ce565b73ffffffffffffffffffffffffffffffffffffffff16146122c75761228b612493565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016122be91906125b7565b60405180910390fd5b565b6122d161249b565b60008060146101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa612314612493565b60405161232191906125b7565b60405180910390a1565b612333610cf3565b1561236a576040517fd93c066500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b61243861232b565b6001600060146101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25861247c612493565b60405161248991906125b7565b60405180910390a1565b600033905090565b6124a3610cf3565b6124d9576040517f8dfc202b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b604051806101c00160405280600073ffffffffffffffffffffffffffffffffffffffff1681526020016060815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001606081525090565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006125a182612576565b9050919050565b6125b181612596565b82525050565b60006020820190506125cc60008301846125a8565b92915050565b600080fd5b6125e081612596565b81146125eb57600080fd5b50565b6000813590506125fd816125d7565b92915050565b600060208284031215612619576126186125d2565b5b6000612627848285016125ee565b91505092915050565b6000819050919050565b61264381612630565b82525050565b600060208201905061265e600083018461263a565b92915050565b61266d81612630565b811461267857600080fd5b50565b60008135905061268a81612664565b92915050565b6000602082840312156126a6576126a56125d2565b5b60006126b48482850161267b565b91505092915050565b60006040820190506126d2600083018561263a565b6126df602083018461263a565b9392505050565b60008115159050919050565b6126fb816126e6565b82525050565b600060208201905061271660008301846126f2565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61275181612596565b82525050565b60006127638383612748565b60208301905092915050565b6000602082019050919050565b60006127878261271c565b6127918185612727565b935061279c83612738565b8060005b838110156127cd5781516127b48882612757565b97506127bf8361276f565b9250506001810190506127a0565b5085935050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61280f81612630565b82525050565b60006128218383612806565b60208301905092915050565b6000602082019050919050565b6000612845826127da565b61284f81856127e5565b935061285a836127f6565b8060005b8381101561288b5781516128728882612815565b975061287d8361282d565b92505060018101905061285e565b5085935050505092915050565b600060408201905081810360008301526128b2818561277c565b905081810360208301526128c6818461283a565b90509392505050565b600081519050919050565b600082825260208201905092915050565b60005b838110156129095780820151818401526020810190506128ee565b60008484015250505050565b6000601f19601f8301169050919050565b6000612931826128cf565b61293b81856128da565b935061294b8185602086016128eb565b61295481612915565b840191505092915050565b60006101c0830160008301516129786000860182612748565b50602083015184820360208601526129908282612926565b91505060408301516129a56040860182612806565b5060608301516129b86060860182612806565b5060808301516129cb6080860182612806565b5060a08301516129de60a0860182612806565b5060c08301516129f160c0860182612806565b5060e0830151612a0460e0860182612806565b50610100830151612a19610100860182612806565b50610120830151612a2e610120860182612806565b50610140830151612a43610140860182612806565b50610160830151612a58610160860182612806565b50610180830151612a6d610180860182612748565b506101a08301518482036101a0860152612a878282612926565b9150508091505092915050565b60006020820190508181036000830152612aae818461295f565b905092915050565b600082825260208201905092915050565b6000612ad2826128cf565b612adc8185612ab6565b9350612aec8185602086016128eb565b612af581612915565b840191505092915050565b60006020820190508181036000830152612b1a8184612ac7565b905092915050565b6000604082019050612b3760008301856126f2565b612b44602083018461263a565b9392505050565b60008060408385031215612b6257612b616125d2565b5b6000612b708582860161267b565b9250506020612b818582860161267b565b9150509250929050565b7f4e6f2045544820746f2077697468647261770000000000000000000000000000600082015250565b6000612bc1601283612ab6565b9150612bcc82612b8b565b602082019050919050565b60006020820190508181036000830152612bf081612bb4565b9050919050565b600081519050612c0681612664565b92915050565b600060208284031215612c2257612c216125d2565b5b6000612c3084828501612bf7565b91505092915050565b7f49444f2073616c6520686173206e6f7420656e64656420796574000000000000600082015250565b6000612c6f601a83612ab6565b9150612c7a82612c39565b602082019050919050565b60006020820190508181036000830152612c9e81612c62565b9050919050565b7f49444f207375636365737366756c2c206e6f20726566756e6473210000000000600082015250565b6000612cdb601b83612ab6565b9150612ce682612ca5565b602082019050919050565b60006020820190508181036000830152612d0a81612cce565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081905092915050565b50565b6000612d5b600083612d40565b9150612d6682612d4b565b600082019050919050565b6000612d7c82612d4e565b9150819050919050565b7f526566756e64207472616e73666572206661696c656400000000000000000000600082015250565b6000612dbc601683612ab6565b9150612dc782612d86565b602082019050919050565b60006020820190508181036000830152612deb81612daf565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680612e6857607f821691505b602082108103612e7b57612e7a612e21565b5b50919050565b600060ff82169050919050565b612e9781612e81565b8114612ea257600080fd5b50565b600081519050612eb481612e8e565b92915050565b600060208284031215612ed057612ecf6125d2565b5b6000612ede84828501612ea5565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160011c9050919050565b6000808291508390505b6001851115612f6d57808604811115612f4957612f48612ee7565b5b6001851615612f585780820291505b8081029050612f6685612f16565b9450612f2d565b94509492505050565b600082612f865760019050613042565b81612f945760009050613042565b8160018114612faa5760028114612fb457612fe3565b6001915050613042565b60ff841115612fc657612fc5612ee7565b5b8360020a915084821115612fdd57612fdc612ee7565b5b50613042565b5060208310610133831016604e8410600b84101617156130185782820a90508381111561301357613012612ee7565b5b613042565b6130258484846001612f23565b9250905081840481111561303c5761303b612ee7565b5b81810290505b9392505050565b600061305482612630565b915061305f83612e81565b925061308c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484612f76565b905092915050565b600061309f82612630565b91506130aa83612630565b92508282039050818111156130c2576130c1612ee7565b5b92915050565b60006130d382612630565b91506130de83612630565b92508282026130ec81612630565b9150828204841483151761310357613102612ee7565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061314482612630565b915061314f83612630565b92508261315f5761315e61310a565b5b828204905092915050565b7f53616c65206e6f74207374617274656420796574210000000000000000000000600082015250565b60006131a0601583612ab6565b91506131ab8261316a565b602082019050919050565b600060208201905081810360008301526131cf81613193565b9050919050565b7f53616c6520456e64656421000000000000000000000000000000000000000000600082015250565b600061320c600b83612ab6565b9150613217826131d6565b602082019050919050565b6000602082019050818103600083015261323b816131ff565b9050919050565b600061324d82612630565b915061325883612630565b92508282019050808211156132705761326f612ee7565b5b92915050565b7f506c656173652073656e64207265717569726564206665657300000000000000600082015250565b60006132ac601983612ab6565b91506132b782613276565b602082019050919050565b600060208201905081810360008301526132db8161329f565b9050919050565b7f557365722063616e206f6e6c7920627579207477696365210000000000000000600082015250565b6000613318601883612ab6565b9150613323826132e2565b602082019050919050565b600060208201905081810360008301526133478161330b565b9050919050565b7f416d6f756e742061626f7665206d617842757943726561746f72206973206e6f60008201527f7420616363657074656421000000000000000000000000000000000000000000602082015250565b60006133aa602b83612ab6565b91506133b58261334e565b604082019050919050565b600060208201905081810360008301526133d98161339d565b9050919050565b7f416d6f756e742061626f766520616c6c6f77656420627579206973206e6f742060008201527f6163636570746564210000000000000000000000000000000000000000000000602082015250565b600061343c602983612ab6565b9150613447826133e0565b604082019050919050565b6000602082019050818103600083015261346b8161342f565b9050919050565b600061347d82612630565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036134af576134ae612ee7565b5b600182019050919050565b7f466972737420427579204d757374206c657373207468616e204d61784275795560008201527f7365722100000000000000000000000000000000000000000000000000000000602082015250565b6000613516602483612ab6565b9150613521826134ba565b604082019050919050565b6000602082019050818103600083015261354581613509565b9050919050565b7f416d6f756e742061626f76652072656d61696e696e6720636170206973206e6f60008201527f7420616363657074656421000000000000000000000000000000000000000000602082015250565b60006135a8602b83612ab6565b91506135b38261354c565b604082019050919050565b600060208201905081810360008301526135d78161359b565b9050919050565b60006040820190506135f360008301856125a8565b613600602083018461263a565b9392505050565b613610816126e6565b811461361b57600080fd5b50565b60008151905061362d81613607565b92915050565b600060208284031215613649576136486125d2565b5b60006136578482850161361e565b91505092915050565b7f5472616e7366657220746f2061646d696e206661696c65640000000000000000600082015250565b6000613696601883612ab6565b91506136a182613660565b602082019050919050565b600060208201905081810360008301526136c581613689565b9050919050565b7f49444f20686173206e6f7420656e646564207965740000000000000000000000600082015250565b6000613702601583612ab6565b915061370d826136cc565b602082019050919050565b60006020820190508181036000830152613731816136f5565b9050919050565b7f4d61784361702077617320726561636865642c206e6f20746f6b656e7320746f60008201527f206275726e000000000000000000000000000000000000000000000000000000602082015250565b6000613794602583612ab6565b915061379f82613738565b604082019050919050565b600060208201905081810360008301526137c381613787565b9050919050565b7f4e6f20756e736f6c6420746f6b656e7320746f206275726e0000000000000000600082015250565b6000613800601883612ab6565b915061380b826137ca565b602082019050919050565b6000602082019050818103600083015261382f816137f3565b905091905056fea2646970667358221220cfdd5568a8f96daeee77b4d0b535eed3a252267f734afc3e7384fc93e22419c764736f6c634300081c0033'
