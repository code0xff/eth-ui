<script lang="ts">
	import { Button } from '@/components/ui/button';
	import * as Dialog from '@/components/ui/dialog';
	import { Input } from '@/components/ui/input';
	import * as Table from '@/components/ui/table';
	import { Calculator } from '@lucide/svelte';
	import { toBigInt, toBeHex } from 'ethers';

	let open = false;
	let decimal = '0';
	let hex = '0x0000000000000000000000000000000000000000000000000000000000000000';

	function convertToHex(e: Event & { currentTarget: HTMLInputElement }): void {
		hex = toBeHex(e.currentTarget.value, 32);
	}

	function convertToDecimal(e: Event & { currentTarget: HTMLInputElement }): void {
		let _hex = e.currentTarget.value;
		if (!_hex.startsWith('0x')) {
			_hex = `0x${_hex}`;
		}
		decimal = toBigInt(_hex).toString();
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
		<Calculator />
	</Button>
	<Dialog.Root bind:open>
		<Dialog.Content>
			<Dialog.Header>
				<Dialog.Title>Calculator</Dialog.Title>
				<Dialog.Description>
					<Table.Root>
						<Table.Body>
							<Table.Row>
								<Table.Cell>Decimal</Table.Cell>
								<Table.Cell>
									<Input placeholder="0" value={decimal} oninput={convertToHex} />
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>Hex</Table.Cell>
								<Table.Cell>
									<Input placeholder="0x" value={hex} oninput={convertToDecimal} />
								</Table.Cell>
							</Table.Row>
						</Table.Body>
					</Table.Root>
				</Dialog.Description>
			</Dialog.Header>
			<Dialog.Footer></Dialog.Footer>
		</Dialog.Content>
	</Dialog.Root>
</div>
