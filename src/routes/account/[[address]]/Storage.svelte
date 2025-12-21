<script lang="ts">
	import * as Card from '@/components/ui/card';
	import { Button } from '@/components/ui/button';
	import { Input } from '@/components/ui/input';
	import * as Select from '@/components/ui/select';
	import * as Table from '@/components/ui/table';
	import * as constants from '@/constants';
	import * as helpers from '@/helpers';
	import * as types from '@/types';

	export let address = '';

	$: if (keyType) {
		key = '';
	}

	let keyType: types.KeyType = constants.NONE;
	let key = '';
	let baseSlot = '';
	let slot = '';
	let result = '';

	const keyTypes: types.KeyType[] = [constants.NONE, 'address', 'uint256', 'bytes32'];

	async function getStorageAt() {
		await helpers.tryExecuteAsync(async () => {
			const _provider = await helpers.ensureProvider();
			result = await _provider.getStorage(address, slot);
		});
	}

	function deriveStorageKey() {
		helpers.tryExecute(() => {
			if (baseSlot.trim().length === 0) {
				throw new Error('invalid base slot');
			}
			if (keyType !== constants.NONE && key.trim().length === 0) {
				throw new Error('invalid key');
			}

			slot = helpers.deriveStorageKey(BigInt(baseSlot), keyType, key);
		});
	}
</script>

<div>
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
							<div class="flex flex-col gap-4 md:flex-row">
								<div class="flex flex-2 flex-row gap-4">
									<div class="min-w-[110px]">
										<Select.Root type="single" bind:value={keyType}>
											<Select.Trigger class="w-full cursor-pointer truncate">
												{keyType}
											</Select.Trigger>
											<Select.Content>
												{#each keyTypes as option}
													<Select.Item value={option}>{option}</Select.Item>
												{/each}
											</Select.Content>
										</Select.Root>
									</div>
									<div class="flex-1">
										<Input
											bind:value={key}
											disabled={keyType === constants.NONE}
											placeholder="mapping key"
										/>
									</div>
								</div>
								<div class="flex-1">
									<Input bind:value={baseSlot} placeholder="base slot" />
								</div>
								<div class="max-md:w-full">
									<Button
										class="w-full cursor-pointer"
										variant="outline"
										onclick={deriveStorageKey}
									>
										Derive
									</Button>
								</div>
							</div>
						</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell class="w-1/6">Key</Table.Cell>
						<Table.Cell class="w-5/6">
							<div class="flex flex-row gap-4">
								<div class="w-full">
									<Input bind:value={slot} />
								</div>
								<div>
									<Button class="cursor-pointer" variant="outline" onclick={getStorageAt}>
										Get
									</Button>
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
