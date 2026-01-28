<script lang="ts">
	import { toBigInt, toBeHex } from 'ethers';
	import { ArrowRightToLine, Calculator, Clipboard } from '@lucide/svelte';
	import { Button } from '@/components/ui/button';
	import * as Dialog from '@/components/ui/dialog';
	import { Input } from '@/components/ui/input';
	import * as Table from '@/components/ui/table';

	let open = false;
	let decimal = '0';
	let hex = '0x00';

	$: if (open) {
		decimal = '0';
		hex = '0x00';
	}

	function onDecimalInput(e: Event & { currentTarget: HTMLInputElement }): void {
		if (e.currentTarget.value.trim().length === 0) return;
		hex = toBeHex(e.currentTarget.value);
	}

	function onHexInput(e: Event & { currentTarget: HTMLInputElement }): void {
		if (e.currentTarget.value.trim().length === 0) return;

		let _hex = e.currentTarget.value;
		if (!_hex.startsWith('0x')) {
			_hex = `0x${_hex}`;
		}
		decimal = toBigInt(_hex).toString();
	}

	function applyUint256Hex(): void {
		if (decimal.length === 0) return;
		hex = toBeHex(decimal, 32);
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
				<Dialog.Title>Hex Converter</Dialog.Title>
				<Dialog.Description>
					<Table.Root>
						<Table.Body>
							<Table.Row>
								<Table.Cell>Decimal</Table.Cell>
								<Table.Cell>
									<Input placeholder="0" value={decimal} oninput={onDecimalInput} />
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>Hex</Table.Cell>
								<Table.Cell>
									<div class="flex gap-2">
										<Input placeholder="0x00" value={hex} oninput={onHexInput} />
										<Button
											class="cursor-pointer"
											size="icon"
											variant="outline"
											onclick={applyUint256Hex}
										>
											<ArrowRightToLine />
										</Button>
									</div>
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
