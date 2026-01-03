<script lang="ts">
	import { LineChart } from 'layerchart';
	import { scaleLinear } from 'd3-scale';
	import { curveNatural } from 'd3-shape';

	import * as Card from '@/components/ui/card';
	import * as Select from '@/components/ui/select';
	import * as Chart from '@/components/ui/chart';

	import * as helpers from '@/helpers';
	import type * as types from '@/types';

	export let blocks: types.Block[] = [];

	type ChartMetric = 'txCount' | 'baseFee' | 'gasUsed';

	let selectedMetric: ChartMetric = 'txCount';

	type ChartPoint = {
		block: number;
		txCount: number;
		baseFeeGwei: number;
		gasUsed: number;
	};

	$: chartData = [...blocks]
		.slice()
		.sort((a, b) => a.number - b.number)
		.map((b): ChartPoint => {
			const wei = (b as any).baseFeePerGas ?? (b as any).baseFee ?? (b as any).baseFeeWei ?? 0n;

			const baseFeeGwei =
				typeof wei === 'bigint' ? Number(wei) / 1_000_000_000 : Number(wei) / 1_000_000_000;

			const gasUsedRaw = (b as any).gasUsed ?? 0n;
			const gasUsed = typeof gasUsedRaw === 'bigint' ? Number(gasUsedRaw) : Number(gasUsedRaw);

			return {
				block: b.number,
				txCount: b.transactions.length,
				baseFeeGwei,
				gasUsed
			};
		});

	const chartConfig = {
		txCount: { label: 'Tx Count', color: 'var(--chart-1)' },
		baseFeeGwei: { label: 'Base Fee', color: 'var(--chart-2)' },
		gasUsed: { label: 'Gas Used', color: 'var(--chart-3)' }
	} satisfies Chart.ChartConfig;

	function metricLabel(metric: ChartMetric): string {
		switch (metric) {
			case 'txCount':
				return 'Tx Count';
			case 'baseFee':
				return 'Base Fee';
			case 'gasUsed':
				return 'Gas Used';
		}
	}

	function metricSeries(metric: ChartMetric) {
		switch (metric) {
			case 'txCount':
				return [
					{ key: 'txCount', label: chartConfig.txCount.label, color: chartConfig.txCount.color }
				];
			case 'baseFee':
				return [
					{
						key: 'baseFeeGwei',
						label: chartConfig.baseFeeGwei.label,
						color: chartConfig.baseFeeGwei.color
					}
				];
			case 'gasUsed':
				return [
					{ key: 'gasUsed', label: chartConfig.gasUsed.label, color: chartConfig.gasUsed.color }
				];
		}
	}

	$: activeSeries = metricSeries(selectedMetric);
</script>

<Card.Root>
	<Card.Header>
		<div class="flex justify-end">
			<Select.Root type="single" bind:value={selectedMetric}>
				<Select.Trigger size="sm" class="text-xs">
					{metricLabel(selectedMetric)}
				</Select.Trigger>
				<Select.Content>
					<Select.Item value="txCount" class="text-xs">Tx Count</Select.Item>
					<Select.Item value="baseFee" class="text-xs">Base Fee</Select.Item>
					<Select.Item value="gasUsed" class="text-xs">Gas Used</Select.Item>
				</Select.Content>
			</Select.Root>
		</div>
	</Card.Header>

	<Card.Content>
		<Chart.Container config={chartConfig} class="h-[100px] w-full">
			<LineChart
				data={chartData}
				x="block"
				xScale={scaleLinear()}
				axis={false}
				series={activeSeries}
				props={{
					spline: { curve: curveNatural, motion: 'tween', strokeWidth: 2 },
					highlight: { points: { r: 3 } }
				}}
			>
				{#snippet tooltip()}
					<Chart.Tooltip labelFormatter={(v: number) => `Block #${helpers.printNumber(v)}`} />
				{/snippet}
			</LineChart>
		</Chart.Container>
	</Card.Content>
</Card.Root>
