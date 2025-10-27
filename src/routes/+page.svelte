<script lang="ts">
	import Input from '@/components/ui/input/input.svelte';
	import * as Table from '@/components/ui/table/index.js';

	let rpc: string = '';
	let chainId: string = '';
	let number: string = '';
	let blocksByNumber: Map<string, string> = new Map();
	let blocksByHash: Map<string, any> = new Map();
	let blocks: { number: string; hash: string; timestamp: string }[] = [];

	async function jsonRpcRequest(rpc: string, method: string, params: any[] = []) {
		try {
			const response = await fetch(rpc, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					jsonrpc: '2.0',
					method,
					params,
					id: 1
				})
			});

			const data = await response.json();
			return data.result;
		} catch (error) {
			throw new Error(`Error fetching ${method}: ${error}`);
		}
	}

	async function getChainId(rpc: string): Promise<string> {
		return await jsonRpcRequest(rpc, 'eth_chainId');
	}

	async function getBlockNumber(rpc: string): Promise<string> {
		return await jsonRpcRequest(rpc, 'eth_blockNumber');
	}

	async function getBlockByNumber(rpc: string, number: string): Promise<any> {
		return await jsonRpcRequest(rpc, 'eth_getBlockByNumber', [number, false]);
	}

	async function startSync(rpc: string) {
		setInterval(async () => {
			const latestNumber = await getBlockNumber(rpc);
			console.log('Current block number:', number, 'Latest block number:', latestNumber);

			if (latestNumber !== number) {
				number = latestNumber;

				const block = await getBlockByNumber(rpc, number);
				blocksByNumber.set(number, block.hash!);
				blocksByHash.set(block.hash, block);
				blocks = [{ number, hash: block.hash, timestamp: block.timestamp }, ...blocks];
			}
		}, 10000);
	}

	async function setRpcEndpoint(event: Event) {
		const target = event.target as HTMLInputElement;
		rpc = target.value.trim();

		if (rpc.startsWith('https')) {
			chainId = await getChainId(rpc);
			await startSync(rpc);
		} else {
			console.error('Only HTTPS RPC endpoints are supported in this demo.');
		}
	}

	function formatHex(hex: string): string {
		if (hex.length <= 10) return hex;
		return `${hex.slice(0, 6)}...${hex.slice(-4)}`;
	}
</script>

<div>
	<div class="p-4">
		<Input placeholder="RPC endpoint" onchange={setRpcEndpoint} />
	</div>
	<div>
		<div class="mx-4 p-4">
			<Table.Root>
				<Table.Header>
					<Table.Row>
						<Table.Head>ChainId</Table.Head>
						<Table.Head>Number</Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					<Table.Row>
						<Table.Cell>{chainId}</Table.Cell>
						<Table.Cell>{number}</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table.Root>
		</div>
		<div class="mx-4 flex flex-row gap-4 p-4">
			<div class="flex-1">
				<div>Block</div>
				<div>
					<Table.Root>
						<Table.Header>
							<Table.Row>
								<Table.Head>Number</Table.Head>
								<Table.Head>Hash</Table.Head>
								<Table.Head>Time</Table.Head>
							</Table.Row>
						</Table.Header>
						<Table.Body>
							{#each blocks as block}
								<Table.Row>
									<Table.Cell>{parseInt(block.number, 16)}</Table.Cell>
									<Table.Cell>{formatHex(block.hash)}</Table.Cell>
									<Table.Cell>{block.timestamp}</Table.Cell>
								</Table.Row>
							{/each}
						</Table.Body>
					</Table.Root>
				</div>
			</div>
			<div class="flex-1">
				<div>Transaction</div>
				<div>
					<Table.Root>
						<Table.Header>
							<Table.Row>
								<Table.Head>Hash</Table.Head>
								<Table.Head>Block</Table.Head>
							</Table.Row>
						</Table.Header>
						<Table.Body>
							<Table.Row>
								<Table.Cell>0xdef456...</Table.Cell>
								<Table.Cell>1</Table.Cell>
							</Table.Row>
						</Table.Body>
					</Table.Root>
				</div>
			</div>
		</div>
	</div>
</div>
