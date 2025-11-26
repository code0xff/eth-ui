<script lang="ts">
	import { toast } from 'svelte-sonner';
	import { CogIcon } from '@lucide/svelte';
	import Button from '@/components/ui/button/button.svelte';
	import * as Dialog from '@/components/ui/dialog';
	import Input from '@/components/ui/input/input.svelte';
	import * as Table from '@/components/ui/table';
	import * as constants from '@/constants';
	import * as stores from '@/stores';
	import { get } from 'svelte/store';

	let open = false;
	let blocklistLimit = constants.DEFAULT_BLOCK_LIST_LIMIT;
	let interval = constants.MIN_INTERVAL;

	$: if (open) {
		blocklistLimit = get(stores.blocklistLimitStore);
		interval = get(stores.intervalStore);
	}

	function saveSetting() {
		if (!blocklistLimit || blocklistLimit < constants.MIN_BLOCK_LIST_LIMIT) {
			toast(
				`invalid blocklist limit: blocklist limit must be at least ${constants.MIN_BLOCK_LIST_LIMIT}`
			);
			return;
		}
		if (!interval || interval < constants.MIN_INTERVAL) {
			toast(`invalid interval: interval must be at least ${constants.MIN_INTERVAL}`);
			return;
		}
		localStorage.setItem('blocklist_limit', blocklistLimit.toString());
		stores.blocklistLimitStore.set(blocklistLimit);

		localStorage.setItem('interval', interval.toString());
		stores.intervalStore.set(interval);

		open = false;
		toast('successfully saved');
	}
</script>

<div>
	<Button
		class="cursor-pointer"
		onclick={() => {
			open = true;
		}}
	>
		<CogIcon />
	</Button>
	<Dialog.Root bind:open>
		<Dialog.Content>
			<Dialog.Header>
				<Dialog.Title>Setting</Dialog.Title>
				<Dialog.Description>
					<Table.Root>
						<Table.Body>
							<Table.Row>
								<Table.Cell>Blocklist limit</Table.Cell>
								<Table.Cell>
									<Input
										type="number"
										min={constants.MIN_BLOCK_LIST_LIMIT}
										placeholder={constants.DEFAULT_BLOCK_LIST_LIMIT.toString()}
										bind:value={blocklistLimit}
									/>
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>Interval</Table.Cell>
								<Table.Cell>
									<Input
										type="number"
										min={constants.MIN_INTERVAL}
										placeholder={`${constants.MIN_INTERVAL.toString()} ms`}
										bind:value={interval}
									/>
								</Table.Cell>
							</Table.Row>
						</Table.Body>
					</Table.Root>
				</Dialog.Description>
			</Dialog.Header>
			<Dialog.Footer>
				<Button class="cursor-pointer" onclick={saveSetting}>Save</Button>
			</Dialog.Footer>
		</Dialog.Content>
	</Dialog.Root>
</div>
