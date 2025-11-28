<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { ModeWatcher, toggleMode } from 'mode-watcher';
	import { onMount } from 'svelte';
	import { SunMoon } from '@lucide/svelte';
	import { Toaster } from '@/components/ui/sonner';
	import { Button } from '@/components/ui/button';
	import * as constants from '@/constants';
	import * as services from '@/services';
	import * as stores from '@/stores';
	import Config from './Config.svelte';
	import { toast } from 'svelte-sonner';

	let { children } = $props();

	onMount(async () => {
		try {
			const _rpcs = localStorage.getItem('rpcs');
			if (_rpcs) {
				stores.rpcsStore.set(JSON.parse(_rpcs));
			}
			const _callAbis = localStorage.getItem('call_abis');
			if (_callAbis) {
				stores.callAbisStore.set(JSON.parse(_callAbis));
			}
			const _txAbis = localStorage.getItem('tx_abis');
			if (_txAbis) {
				stores.txAbisStore.set(JSON.parse(_txAbis));
			}

			const _blocklistLimit = localStorage.getItem('blocklist_limit');
			if (_blocklistLimit) {
				stores.blocklistLimitStore.set(parseInt(_blocklistLimit));
			}
			const _interval = localStorage.getItem('interval');
			if (_interval) {
				stores.intervalStore.set(parseInt(_interval));
			}

			const _rpc = localStorage.getItem('rpc') ?? constants.DEFAULT_RPCS[0];
			if (_rpc) {
				stores.rpcStore.set(_rpc);
				
				const _provider = services.defaultBlockProvider(_rpc);
				stores.providerStore.set(_provider);
			}

			stores.initializedStore.set(true);
		} catch (e: unknown) {
			if (e instanceof Error) {
				console.error(e.message);
				toast(e.message);
			}
		}
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Toaster position="top-right" />

<ModeWatcher />

<div class="my-4 flex w-full flex-row">
	<div class="ml-4 flex-1">
		<a
			href="/"
			class="scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
		>
			ETH UI
		</a>
	</div>
	<div class="mr-4 flex flex-1 justify-end gap-4">
		<div>
			<Config />
		</div>
		<div>
			<Button class="cursor-pointer" onclick={toggleMode}>
				<SunMoon />
			</Button>
		</div>
	</div>
</div>
{@render children?.()}
