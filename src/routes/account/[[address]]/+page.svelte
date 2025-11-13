<script lang="ts">
	import * as ethers from 'ethers';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { toast } from 'svelte-sonner';
	import { Minus, Plus } from '@lucide/svelte';
	import { Button } from '@/components/ui/button';
	import { Input } from '@/components/ui/input';
	import * as Card from '@/components/ui/card';
	import * as Dialog from '@/components/ui/dialog';
	import * as Table from '@/components/ui/table';
	import * as Select from '$lib/components/ui/select';
	import { DEFAULT_ABIS, DEFAULT_RPC } from '@/constants';
	import { printNumber, printWei } from '@/helpers';
	import { providerStore } from '@/stores';
	import * as types from '@/types';

	export let data: { address: string };

	let provider: ethers.Provider | undefined;

	let balance: bigint;
	let nonce: number;
	let code: string;

	let slot: string;
	let result: string;

	let selectedAbi: string;
	let abis: string[] = [];
	let func: types.Function;
	let inputs: string = '';
	let outputs: string = '';
	let inputsPlaceholder: string = '';
	let outputsPlaceholder: string = '';

	let abiOpen = false;
	let abiInput = '';

	$: if (selectedAbi) {
		inputs = '';
		outputs = '';

		const _interface = JSON.parse(new ethers.Interface([selectedAbi]).formatJson());
		if (_interface && _interface.length > 0) {
			func = _interface[0];
		}

		inputsPlaceholder = func.inputs.map((input) => input.type).join(',');
		outputsPlaceholder = func.outputs.map((output) => output.type).join(',');
	}

	onMount(async () => {
		try {
			const _savedAbis = localStorage.getItem('abis');
			if (_savedAbis) {
				abis = [...JSON.parse(_savedAbis)];
			}
			selectedAbi = DEFAULT_ABIS[0];

			provider = get(providerStore);

			if (!provider) {
				const _rpc = localStorage.getItem('rpc') ?? DEFAULT_RPC;
				provider = new ethers.WebSocketProvider(_rpc);
				providerStore.set(provider);
			}

			balance = await provider.getBalance(data.address);
			nonce = await provider.getTransactionCount(data.address);
			code = await provider.getCode(data.address);
		} catch (_e: any) {
			console.error(_e.toString());
			toast(_e.toString());
		}
	});

	async function getStorageAt() {
		try {
			if (!provider) {
				const _rpc = localStorage.getItem('rpc') ?? DEFAULT_RPC;
				provider = new ethers.WebSocketProvider(_rpc);
				providerStore.set(provider);
			}

			result = await provider.getStorage(data.address, slot);
		} catch (e: any) {
			console.error(e.toString());
			toast(e.toString());
		}
	}

	async function call() {
		try {
			if (!provider) {
				const _rpc = localStorage.getItem('rpc') ?? DEFAULT_RPC;
				provider = new ethers.WebSocketProvider(_rpc);
				providerStore.set(provider);
			}

			const _contract = new ethers.Contract(
				data.address,
				new ethers.Interface([selectedAbi]),
				provider
			);
			let _outputs: any;
			if (func.inputs.length > 0) {
				const _inputs = inputs.split(',');
				_outputs = await _contract[func.name](..._inputs);
			} else {
				_outputs = await _contract[func.name]();
			}
			if (_outputs instanceof Array) {
				outputs = _outputs.map((output) => output.toString()).join(',');
			} else {
				outputs = _outputs.toString();
			}
		} catch (e: any) {
			console.error(e.toString());
			toast(e.toString());
		}
	}

	async function addAbi() {
		try {
			const _interface = new ethers.Interface([abiInput]);
			if (!_interface) {
				throw new Error('invalid abi');
			}
			abis = [...abis, abiInput];
			localStorage.setItem('abis', JSON.stringify(abis));

			abiInput = '';
		} catch (_e: any) {
			console.error(_e.toString());
			toast(_e.toString());
		}
	}

	async function removeAbi(index: number) {
		try {
			abis.splice(index, 1);
			abis = [...abis];
			localStorage.setItem('abis', JSON.stringify(abis));
		} catch (_e: any) {
			console.error(_e.toString());
			toast(_e.toString());
		}
	}
</script>

<div>
	<div class="m-4">
		<Card.Root>
			<Card.Header>
				<Card.Title>Account #{data.address}</Card.Title>
			</Card.Header>
			<Card.Content>
				<Table.Root>
					<Table.Body>
						<Table.Row>
							<Table.Cell class="w-1/6">Balance</Table.Cell>
							<Table.Cell class="w-5/6">{balance ? printWei(balance, true) : ''}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="w-1/6">Nonce</Table.Cell>
							<Table.Cell class="w-5/6">{nonce ? printNumber(nonce) : ''}</Table.Cell>
						</Table.Row>
						<!-- <Table.Row>
							<Table.Cell>Code</Table.Cell>
							<Table.Cell>
								<Textarea readonly class="resize-none" value={code} />
							</Table.Cell>
						</Table.Row> -->
					</Table.Body>
				</Table.Root>
			</Card.Content>
		</Card.Root>
	</div>
	<div class="m-4">
		<Card.Root>
			<Card.Header>
				<Card.Title>Call</Card.Title>
			</Card.Header>
			<Card.Content>
				<div>
					<div class="flex flex-row gap-4">
						<div class="w-full">
							<Select.Root type="single" bind:value={selectedAbi}>
								<Select.Trigger class="w-full cursor-pointer">{selectedAbi}</Select.Trigger>
								<Select.Content>
									{#each DEFAULT_ABIS as abi}
										<Select.Item value={abi}>{abi}</Select.Item>
									{/each}
									{#each abis as abi}
										<Select.Item value={abi}>{abi}</Select.Item>
									{/each}
								</Select.Content>
							</Select.Root>
						</div>
						<div>
							<Button
								class="cursor-pointer"
								onclick={() => {
									abiOpen = true;
								}}
							>
								<Plus />
							</Button>
							<Dialog.Root bind:open={abiOpen}>
								<Dialog.Content>
									<Dialog.Header>
										<Dialog.Title>Edit ABIs</Dialog.Title>
										<Dialog.Description>
											<div class="mt-4">
												<div class="flex flex-row gap-4">
													<div class="w-full">
														<Input bind:value={abiInput} />
													</div>
													<div>
														<Button class="cursor-pointer" onclick={addAbi}>Add</Button>
													</div>
												</div>
												<div class="mt-4 max-h-55 overflow-y-auto">
													<Table.Root>
														<Table.Header>
															<Table.Row>
																<Table.Head>Registered ABI</Table.Head>
																<Table.Head>Remove</Table.Head>
															</Table.Row>
														</Table.Header>
														<Table.Body>
															{#each DEFAULT_ABIS as abi}
																<Table.Row>
																	<Table.Cell class="w-full">
																		<Input value={abi} />
																	</Table.Cell>
																	<Table.Cell></Table.Cell>
																</Table.Row>
															{/each}
															{#each abis as abi, index}
																<Table.Row>
																	<Table.Cell class="w-full">
																		<Input value={abi} />
																	</Table.Cell>
																	<Table.Cell>
																		<Button class="cursor-pointer" onclick={() => removeAbi(index)}>
																			<Minus />
																		</Button>
																	</Table.Cell>
																</Table.Row>
															{/each}
														</Table.Body>
													</Table.Root>
												</div>
											</div>
										</Dialog.Description>
									</Dialog.Header>
								</Dialog.Content>
							</Dialog.Root>
						</div>
						<div>
							<Button class="cursor-pointer" onclick={call}>Call</Button>
						</div>
					</div>
					<div class="mt-4">
						<Table.Root>
							<Table.Body>
								<Table.Row>
									<Table.Cell class="w-1/6">Inputs</Table.Cell>
									<Table.Cell class="w-5/6"
										><Input bind:value={inputs} placeholder={inputsPlaceholder} /></Table.Cell
									>
								</Table.Row>
								<Table.Row>
									<Table.Cell class="w-1/6">Outputs</Table.Cell>
									<Table.Cell class="w-5/6"
										><Input
											readonly
											bind:value={outputs}
											placeholder={outputsPlaceholder}
										/></Table.Cell
									>
								</Table.Row>
							</Table.Body>
						</Table.Root>
					</div>
				</div>
			</Card.Content>
		</Card.Root>
	</div>
	<div class="m-4">
		<Card.Root>
			<Card.Header>
				<Card.Title>Storage</Card.Title>
			</Card.Header>
			<Card.Content>
				<Table.Root>
					<Table.Body>
						<Table.Row>
							<Table.Cell class="w-1/6">Slot</Table.Cell>
							<Table.Cell class="w-5/6">
								<div class="flex flex-row gap-4">
									<div class="w-full">
										<Input bind:value={slot} />
									</div>
									<div>
										<Button class="cursor-pointer" onclick={getStorageAt}>Get</Button>
									</div>
								</div>
							</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="w-1/6">Value</Table.Cell>
							<Table.Cell class="w-5/6">
								<Input readonly bind:value={result} />
							</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table.Root>
			</Card.Content>
		</Card.Root>
	</div>
</div>
