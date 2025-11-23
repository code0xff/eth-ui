<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { ModeWatcher } from 'mode-watcher';
	import { toggleMode } from 'mode-watcher';
	import { SunMoon } from '@lucide/svelte';
	import { Toaster } from '@/components/ui/sonner';
	import { Button } from '@/components/ui/button';

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
	<div class="mr-4 flex-1 flex justify-end">
		<Button onclick={toggleMode} class="cursor-pointer">
			<SunMoon />
		</Button>
	</div>
</div>
<hr />
{@render children?.()}
