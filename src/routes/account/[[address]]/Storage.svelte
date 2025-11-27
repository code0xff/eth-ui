<script lang="ts">
	import { get } from 'svelte/store';
	import { toast } from 'svelte-sonner';
	import * as Card from '@/components/ui/card';
	import { Button } from '@/components/ui/button';
	import { Input } from '@/components/ui/input';
	import * as Table from '@/components/ui/table';
	import * as services from '@/services';
	import * as stores from '@/stores';

	export let address = '';

	let slot: string;
	let result: string;

	async function getStorageAt() {
		try {
			let _provider = get(stores.providerStore);
			if (!_provider) {
				const _rpc = get(stores.rpcStore);

				_provider = services.defaultBlockProvider(_rpc);
				stores.providerStore.set(_provider);
			}

			result = await _provider.getStorage(address, slot);
		} catch (e: unknown) {
			if (e instanceof Error) {
				console.error(e.message);
				toast(e.message);
			}
		}
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
