export const DEFAULT_RETRY_COUNT = 3;

export const CHUNK_SIZE = 64;
export const SELECTOR_SIZE = 8;

export const HASH_SIZE = 66; // prefix: 0x + hash size: 32 bytes
export const ADDRESS_SIZE = 42; //prefix: 0x + address size: 20 bytes

export const DEFAULT_RPCS = [
	'wss://ethereum-rpc.publicnode.com',
	'wss://ethereum-sepolia-rpc.publicnode.com'
];

export const GWEI = 1_000_000_000n;
export const ETH = 1_000_000_000_000_000_000n;

export const DEFAULT_DEPTH_LIMIT = 10;

export const MIN_DEPTH_LIMIT = 1;
export const MIN_INTERVAL = 300;

export const DEFAULT_CALL_ABIS = [
	'function totalSupply() external view returns (uint256)',
	'function balanceOf(address owner) view returns (uint256)',
	'function allowance(address owner, address spender) external view returns (uint256)'
];

export const DEFAULT_TX_ABIS = [
	'function transfer(address recipient, uint256 amount) external returns (bool)',
	'function approve(address spender, uint256 amount) external returns (bool)'
];

export const WALLET = 'wallet';
export const NONE = 'none';
