<script lang="ts">
	import * as Accordion from '@/components/ui/accordion';
	import { Textarea } from '@/components/ui/textarea';

	export let name = '';
	export let data = '0x';
</script>

<div>
	<Accordion.Root type="single">
		<Accordion.Item value={name}>
			<Accordion.Trigger>Open {name}</Accordion.Trigger>
			<Accordion.Content>
				<Textarea readonly class="resize-none" value={data} />
			</Accordion.Content>
		</Accordion.Item>
	</Accordion.Root>
</div>
