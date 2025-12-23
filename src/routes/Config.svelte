<script lang="ts">
	import { toast } from 'svelte-sonner';
	import { CogIcon, Download, Info, Upload } from '@lucide/svelte';
	import { Button } from '@/components/ui/button';
	import * as Dialog from '@/components/ui/dialog';
	import { Input } from '@/components/ui/input';
	import * as Table from '@/components/ui/table';
	import * as constants from '@/constants';
	import * as stores from '@/stores';

	let open = false;
	let blocklistLimit = constants.DEFAULT_BLOCK_LIST_LIMIT;
	let interval = constants.MIN_INTERVAL;

	$: if (open) {
		blocklistLimit = stores.blocklistLimitStore.get();
		interval = stores.intervalStore.get();
	}

	function saveSetting() {
		if (!blocklistLimit || blocklistLimit < constants.MIN_BLOCK_LIST_LIMIT) {
			toast.warning(
				`invalid blocklist limit: blocklist limit must be at least ${constants.MIN_BLOCK_LIST_LIMIT}`
			);
			return;
		}
		if (!interval || interval < constants.MIN_INTERVAL) {
			toast.warning(`invalid interval: interval must be at least ${constants.MIN_INTERVAL}`);
			return;
		}
		stores.blocklistLimitStore.set(blocklistLimit);
		stores.intervalStore.set(interval);

		open = false;
		toast.info('successfully saved');
	}
</script>

<div>
	<Button
		class="cursor-pointer"
		size="icon"
		variant="outline"
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
								<Table.Cell>
									Interval
									<Button
										class="cursor-pointer"
										size="icon"
										variant="outline"
										onclick={() => {
											toast.info(
												`effective only for http/https rpc endpoints\nif changed during syncing, stop and restart the sync`,
												{
													class: 'whitespace-pre-line'
												}
											);
										}}
									>
										<Info />
									</Button>
								</Table.Cell>
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
				<div class="flex flex-row gap-4">
					<Button variant="outline" class="cursor-pointer">
						<Download />
					</Button>
					<Button variant="outline" class="cursor-pointer">
						<Upload />
					</Button>
					<Button class="cursor-pointer" variant="outline" onclick={saveSetting}>Save</Button>
				</div>
			</Dialog.Footer>
		</Dialog.Content>
	</Dialog.Root>
</div>
