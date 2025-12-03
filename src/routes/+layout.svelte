<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.ico';
	import { ModeWatcher } from 'mode-watcher';
	import { onMount } from 'svelte';
	import { Toaster } from '@/components/ui/sonner';
	import * as constants from '@/constants';
	import * as helpers from '@/helpers';
	import * as stores from '@/stores';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';

	let { children } = $props();

	async function initialize() {
		const _rpc = stores.rpcStore.get();
		const _rpcs = stores.rpcsStore.get();

		if (!_rpc || _rpc.trim().length === 0 || !_rpcs.includes(_rpc)) {
			stores.rpcStore.set(constants.DEFAULT_RPCS[0]);
		}

		await helpers.ensureProvider();
		stores.initializedStore.set(true);
	}

	onMount(async () => {
		await helpers.tryExecuteAsync(initialize);
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>ETH UI</title>
</svelte:head>

<Toaster position="top-right" />

<ModeWatcher />

<div class="my-4">
	<Header />
</div>
{@render children?.()}
<div class="my-4">
	<Footer />
</div>
