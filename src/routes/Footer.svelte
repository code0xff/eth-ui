<script lang="ts">
	import { Button } from '@/components/ui/button';
	import { BookOpen, Github } from '@lucide/svelte';
	import * as constants from '@/constants';
</script>

<div class="grid w-full grid-cols-3 items-center">
	<div></div>

	<p class="text-center">© 2025 code0xff</p>

	<div class="mr-4 flex justify-end gap-4">
		<Button
			class="cursor-pointer"
			variant="outline"
			size="icon"
			onclick={() => window.open(constants.MANUAL)}
		>
			<BookOpen />
		</Button>
		<Button
			class="cursor-pointer"
			variant="outline"
			size="icon"
			onclick={() => window.open(constants.GITHUB)}
		>
			<Github />
		</Button>
	</div>
</div>
