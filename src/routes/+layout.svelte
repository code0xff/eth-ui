<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { ModeWatcher } from 'mode-watcher';
	import { toggleMode } from 'mode-watcher';
	import { SunMoon } from '@lucide/svelte';
	import { Toaster } from '@/components/ui/sonner';
	import { Button } from '@/components/ui/button';
	import Config from './Config.svelte';

	let { children } = $props();
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
