<script lang="ts">
	import Button from '@/components/ui/button/button.svelte';
	import Input from '@/components/ui/input/input.svelte';
	import * as Card from '@/components/ui/card/index.js';
	import * as Table from '@/components/ui/table/index.js';

	let rpc: string = '';
	let syncing: boolean = false;
	let syncJobId: NodeJS.Timeout;

	let chainId: string = '';
	let number: string = '';

	let blocksByNumber: Map<string, string> = new Map();
	let blocksByHash: Map<string, any> = new Map();
	let blocks: { number: string; hash: string; timestamp: string }[] = [];

	let txs: { hash: string; number: string }[] = [];

	async function jsonRpcRequest(rpc: string, method: string, params: any[] = []) {
		try {
			const response = await fetch(rpc.trim(), {
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
		syncing = true;

		chainId = await getChainId(rpc);
		number = await getBlockNumber(rpc);

		syncJobId = setInterval(async () => {
			const block = await getBlockByNumber(rpc, number);

			if (block) {
				blocksByNumber.set(number, block.hash!);
				blocksByHash.set(block.hash, block);
				blocks = [{ number, hash: block.hash, timestamp: block.timestamp }, ...blocks];

				txs = [
					...block.transactions.map((hash: string) => {
						return { hash, number: block.number };
					}),
					...txs
				];

				number = `0x${(parseInt(number, 16) + 1).toString(16)}`;
			}
		}, 5000);
	}

	function stopSync() {
		syncing = false;
		if (syncJobId) {
			clearInterval(syncJobId);
		}
	}

	function timestampToDate(timestampHex: string): string {
		const timestamp = parseInt(timestampHex, 16) * 1000; // Convert to milliseconds
		const datetime = new Date(timestamp).toISOString();
		const date = datetime.slice(0, 10);
		const time = datetime.slice(11, 19);

		return `${date} ${time}`;
	}
</script>

<div>
	<div class="m-4">
		<Card.Root>
			<Card.Content>
				<div class="flex flex-row gap-4">
					<div class="w-full">
						<Input placeholder="RPC endpoint" bind:value={rpc} disabled={syncing} />
					</div>
					<div>
						<Button onclick={() => (syncing ? stopSync() : startSync(rpc))} class="cursor-pointer"
							>{syncing ? 'Pause' : 'Start'}</Button
						>
					</div>
				</div>
			</Card.Content>
		</Card.Root>
	</div>
	<div class="m-4">
		<Card.Root>
			<Card.Header>
				<Card.Title>Network</Card.Title>
			</Card.Header>
			<Card.Content class="h-20">
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
			</Card.Content>
		</Card.Root>
	</div>
	<div>
		<div class="m-4 lg:flex lg:flex-row lg:gap-4">
			<div class="lg:flex-1">
				<Card.Root>
					<Card.Header>
						<Card.Title>Blocks</Card.Title>
					</Card.Header>
					<Card.Content class="h-100 overflow-y-auto">
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
										<Table.Cell>{block.hash}</Table.Cell>
										<Table.Cell>{timestampToDate(block.timestamp)}</Table.Cell>
									</Table.Row>
								{/each}
							</Table.Body>
						</Table.Root>
					</Card.Content>
				</Card.Root>
			</div>
			<div class="max-lg:mt-4 lg:flex-1">
				<Card.Root>
					<Card.Header>
						<Card.Title>Transactions</Card.Title>
					</Card.Header>
					<Card.Content class="h-100 overflow-y-auto">
						<Table.Root>
							<Table.Header>
								<Table.Row>
									<Table.Head>Hash</Table.Head>
									<Table.Head>Number</Table.Head>
								</Table.Row>
							</Table.Header>
							<Table.Body>
								{#each txs as tx}
									<Table.Row>
										<Table.Cell>{tx.hash}</Table.Cell>
										<Table.Cell>{parseInt(tx.number, 16)}</Table.Cell>
									</Table.Row>
								{/each}
							</Table.Body>
						</Table.Root>
					</Card.Content>
				</Card.Root>
			</div>
		</div>
	</div>
</div>
