export const MANAGER = {
	address: "0xf2b303538cD4744BedD94901a297cDCAbd5f4D98",
	abi: [
		{
			inputs: [
				{
					internalType: "address",
					name: "_owner",
					type: "address",
				},
				{
					internalType: "address[]",
					name: "_users",
					type: "address[]",
				},
			],
			stateMutability: "nonpayable",
			type: "constructor",
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: "uint8",
					name: "projectId",
					type: "uint8",
				},
				{
					indexed: true,
					internalType: "address",
					name: "user",
					type: "address",
				},
				{
					indexed: false,
					internalType: "uint256",
					name: "amount",
					type: "uint256",
				},
				{
					indexed: false,
					internalType: "uint256",
					name: "profit",
					type: "uint256",
				},
			],
			name: "InvestmentClaimed",
			type: "event",
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: "uint8",
					name: "projectId",
					type: "uint8",
				},
				{
					indexed: true,
					internalType: "address",
					name: "user",
					type: "address",
				},
				{
					indexed: false,
					internalType: "uint256",
					name: "amount",
					type: "uint256",
				},
			],
			name: "InvestmentDeposited",
			type: "event",
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: "uint8",
					name: "projectId",
					type: "uint8",
				},
				{
					indexed: true,
					internalType: "address",
					name: "user",
					type: "address",
				},
				{
					indexed: false,
					internalType: "uint256",
					name: "amount",
					type: "uint256",
				},
			],
			name: "InvestmentEarlyClaimed",
			type: "event",
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: "uint8",
					name: "projectId",
					type: "uint8",
				},
				{
					indexed: true,
					internalType: "address",
					name: "oldOwner",
					type: "address",
				},
				{
					indexed: true,
					internalType: "address",
					name: "newOwner",
					type: "address",
				},
			],
			name: "OwnershipTransferred",
			type: "event",
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: "uint8",
					name: "projectId",
					type: "uint8",
				},
			],
			name: "ProjectCreated",
			type: "event",
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: "uint8",
					name: "projectId",
					type: "uint8",
				},
				{
					indexed: true,
					internalType: "address",
					name: "swapper",
					type: "address",
				},
			],
			name: "ProjectSwapperUpdated",
			type: "event",
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: "uint8",
					name: "projectId",
					type: "uint8",
				},
				{
					indexed: true,
					internalType: "address",
					name: "user",
					type: "address",
				},
				{
					indexed: false,
					internalType: "uint256",
					name: "amountIn",
					type: "uint256",
				},
				{
					indexed: false,
					internalType: "uint256",
					name: "amountSwapped",
					type: "uint256",
				},
				{
					indexed: false,
					internalType: "uint256",
					name: "amountOut",
					type: "uint256",
				},
				{
					indexed: true,
					internalType: "address",
					name: "swapper",
					type: "address",
				},
			],
			name: "SingleSidedLiquidity",
			type: "event",
		},
		{
			inputs: [
				{
					internalType: "address[]",
					name: "_users",
					type: "address[]",
				},
			],
			name: "addUserAvailable",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "uint8",
					name: "projectId",
					type: "uint8",
				},
				{
					internalType: "uint16",
					name: "index",
					type: "uint16",
				},
			],
			name: "claimInvestment",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "address",
					name: "_token",
					type: "address",
				},
				{
					internalType: "address",
					name: "_tokenv",
					type: "address",
				},
				{
					internalType: "address",
					name: "_recipientFunds",
					type: "address",
				},
				{
					internalType: "uint256",
					name: "_minInvestment",
					type: "uint256",
				},
			],
			name: "createProject",
			outputs: [
				{
					internalType: "uint256",
					name: "",
					type: "uint256",
				},
			],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "uint8",
					name: "projectId",
					type: "uint8",
				},
				{
					internalType: "uint256",
					name: "_amount",
					type: "uint256",
				},
			],
			name: "deposit",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "uint8",
					name: "projectId",
					type: "uint8",
				},
			],
			name: "getInvestmentCount",
			outputs: [
				{
					internalType: "uint16",
					name: "",
					type: "uint16",
				},
			],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "uint8",
					name: "projectId",
					type: "uint8",
				},
				{
					internalType: "address",
					name: "user",
					type: "address",
				},
				{
					internalType: "uint16",
					name: "investmentId",
					type: "uint16",
				},
			],
			name: "getInvestmentInformation",
			outputs: [
				{
					components: [
						{
							internalType: "uint256",
							name: "amount",
							type: "uint256",
						},
						{
							internalType: "bool",
							name: "claimed",
							type: "bool",
						},
					],
					internalType: "struct Manager.Investment",
					name: "",
					type: "tuple",
				},
			],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "address",
					name: "user",
					type: "address",
				},
			],
			name: "isAvailable",
			outputs: [
				{
					internalType: "bool",
					name: "",
					type: "bool",
				},
			],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [],
			name: "ownerNudo",
			outputs: [
				{
					internalType: "address",
					name: "",
					type: "address",
				},
			],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [],
			name: "projectCount",
			outputs: [
				{
					internalType: "uint8",
					name: "",
					type: "uint8",
				},
			],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "uint8",
					name: "",
					type: "uint8",
				},
			],
			name: "projectSwappers",
			outputs: [
				{
					internalType: "address",
					name: "",
					type: "address",
				},
			],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "uint8",
					name: "",
					type: "uint8",
				},
			],
			name: "projects",
			outputs: [
				{
					internalType: "address",
					name: "owner",
					type: "address",
				},
				{
					internalType: "address",
					name: "recipientFunds",
					type: "address",
				},
				{
					internalType: "uint256",
					name: "minInvestment",
					type: "uint256",
				},
				{
					internalType: "uint256",
					name: "totalLock",
					type: "uint256",
				},
				{
					internalType: "contract IERC20",
					name: "tokenERC20",
					type: "address",
				},
				{
					internalType: "contract IERC20",
					name: "tokenUSDv",
					type: "address",
				},
				{
					internalType: "bool",
					name: "isActive",
					type: "bool",
				},
			],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "address[]",
					name: "_users",
					type: "address[]",
				},
			],
			name: "removeUserAvailable",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "uint8",
					name: "projectId",
					type: "uint8",
				},
				{
					internalType: "bool",
					name: "isActive",
					type: "bool",
				},
			],
			name: "setProjectIsActive",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "uint8",
					name: "projectId",
					type: "uint8",
				},
				{
					internalType: "address",
					name: "swapper",
					type: "address",
				},
			],
			name: "setProjectSwapper",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "uint8",
					name: "projectId",
					type: "uint8",
				},
				{
					internalType: "uint256",
					name: "_amount",
					type: "uint256",
				},
				{
					internalType: "bytes",
					name: "swapData",
					type: "bytes",
				},
			],
			name: "singleSidedDepositAndSwap",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "uint8",
					name: "projectId",
					type: "uint8",
				},
				{
					internalType: "address",
					name: "_token",
					type: "address",
				},
			],
			name: "updateUSDv",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "uint8",
					name: "projectId",
					type: "uint8",
				},
				{
					internalType: "uint256",
					name: "amount",
					type: "uint256",
				},
			],
			name: "withdrawFromContract",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
	],
};
