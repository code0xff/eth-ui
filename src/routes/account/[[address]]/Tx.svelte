<script lang="ts">
	import * as ethers from 'ethers';
	import { Minus, Plus } from '@lucide/svelte';
	import { toast } from 'svelte-sonner';
	import { Button } from '@/components/ui/button';
	import * as Card from '@/components/ui/card';
	import * as Dialog from '@/components/ui/dialog';
	import { Input } from '@/components/ui/input';
	import * as Select from '@/components/ui/select';
	import * as Table from '@/components/ui/table';
	import * as constants from '@/constants';
	import * as types from '@/types';

	export let address = '';
	export let abis: string[] = [];

	let selectedAbi = constants.DEFAULT_TX_ABIS[0];
	let abiInput = '';
	let abiOpen = false;
	let inputs: string = '';
	let outputs: string = '';
	let func: types.Function;
	let inputsPlaceholder: string = '';

	$: if (selectedAbi) {
		inputs = '';
		outputs = '';

		const _interface = JSON.parse(new ethers.Interface([selectedAbi]).formatJson());
		if (_interface && _interface.length > 0) {
			func = _interface[0];
		}

		inputsPlaceholder = func.inputs.map((input) => input.type).join(',');
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

	async function removeAbi(_index: number) {
		try {
			abis.splice(_index, 1);
			abis = [...abis];

			localStorage.setItem('abis', JSON.stringify(abis));
		} catch (_e: any) {
			console.error(_e.toString());
			toast(_e.toString());
		}
	}

	async function sendTx() {
		try {
			if (!(globalThis as any).ethereum) {
				globalThis.open('https://metamask.io/download');
			}

			const _provider = new ethers.BrowserProvider((globalThis as any).ethereum);
			await _provider.send('eth_requestAccounts', []);

			const _signer = await _provider.getSigner();
			const _contract = new ethers.Contract(address, new ethers.Interface([selectedAbi]), _signer);
			let _response: ethers.TransactionResponse;
			if (func.inputs.length > 0) {
				const _inputs = inputs.split(',');
				_response = await _contract[func.name](..._inputs);
			} else {
				_response = await _contract[func.name]();
			}
			outputs = _response.hash;
		} catch (_e: any) {
			console.error(_e.toString());
			toast(_e.toString());
		}
	}
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Transaction</Card.Title>
	</Card.Header>
	<Card.Content>
		<div>
			<div class="flex flex-row gap-4">
				<div class="w-full">
					<Select.Root type="single" bind:value={selectedAbi}>
						<Select.Trigger class="w-full cursor-pointer">{selectedAbi}</Select.Trigger>
						<Select.Content>
							{#each constants.DEFAULT_TX_ABIS as abi}
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
					<Button class="cursor-pointer" onclick={sendTx}>Send Tx</Button>
				</div>
			</div>
			<div class="mt-4">
				<Table.Root>
					<Table.Body>
						<Table.Row>
							<Table.Cell class="w-1/6">Inputs</Table.Cell>
							<Table.Cell class="w-5/6"
								><Input
									placeholder={inputsPlaceholder}
									readonly={inputsPlaceholder === ''}
									bind:value={inputs}
								/></Table.Cell
							>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="w-1/6">Outputs</Table.Cell>
							<Table.Cell class="w-5/6"
								><Input readonly bind:value={outputs} placeholder="hash" /></Table.Cell
							>
						</Table.Row>
					</Table.Body>
				</Table.Root>
			</div>
		</div>
	</Card.Content>
</Card.Root>
