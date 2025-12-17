<script lang="ts">
	import { resolve } from '$app/paths';
	import { toggleMode } from 'mode-watcher';
	import { Button } from '@/components/ui/button';
	import { RefreshCw, SunMoon } from '@lucide/svelte';
	import Config from './Config.svelte';
	import * as types from '@/types';
	import * as stores from '@/stores';

	let syncStatus: types.SyncStatus = 'idle';
	stores.syncStatusStore.subscribe((updatedSyncStatus) => {
		syncStatus = updatedSyncStatus;
	});
</script>

<div class="flex w-full flex-row">
	<div class="ml-4 flex-1">
		<a
			href={resolve('/')}
			class="scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
		>
			ETH UI
		</a>
	</div>
	<div class="mr-4 flex flex-1 justify-end gap-4">
		<div>
			<Button variant="ghost" size="icon">
				<RefreshCw class={syncStatus === 'processing' ? 'animate-spin' : ''} />
			</Button>
		</div>
		<div>
			<Config />
		</div>
		<div>
			<Button class="cursor-pointer" size="icon" variant="outline" onclick={toggleMode}>
				<SunMoon />
			</Button>
		</div>
	</div>
</div>
