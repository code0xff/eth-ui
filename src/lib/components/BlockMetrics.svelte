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
		baseFee: number;
		gasUsed: number;
	};

	function toChartPoint(b: types.Block): ChartPoint {
		const wei = b.baseFeePerGas ?? 0n;

		const baseFee = b.baseFeePerGas ? Number(wei) : 0;
		const gasUsed = b.gasUsed ? Number(b.gasUsed) : 0;

		return {
			block: b.number,
			txCount: b.transactions.length,
			baseFee,
			gasUsed
		};
	}

	/**
	 * Build chart data using only the latest contiguous block sequence.
	 * Starts from the highest block number and keeps blocks where
	 * block.number decreases exactly by 1 (N, N-1, N-2, ...).
	 * Stops immediately when a gap is detected.
	 */
	function buildLatestContiguousBlocks(_blocks: types.Block[]): types.Block[] {
		if (_blocks.length === 0) return [];

		// Sort by block number descending (latest first)
		const sortedDesc = [..._blocks].sort((a, b) => b.number - a.number);

		const picked: types.Block[] = [];
		let expected: number | null = null;

		for (const b of sortedDesc) {
			if (picked.length === 0) {
				picked.push(b);
				expected = b.number - 1;
				continue;
			}

			if (expected !== null && b.number === expected) {
				picked.push(b);
				expected = b.number - 1;
			} else {
				// Stop at the first gap; only keep the latest contiguous range
				break;
			}
		}

		// Return ascending order for chart rendering
		return picked.reverse();
	}

	$: chartData = buildLatestContiguousBlocks(blocks).map(toChartPoint);

	const chartConfig = {
		txCount: { label: 'Tx Count', color: 'var(--chart-1)' },
		baseFee: { label: 'Base Fee', color: 'var(--chart-2)' },
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
						key: 'baseFee',
						label: chartConfig.baseFee.label,
						color: chartConfig.baseFee.color
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
				<Select.Trigger size="sm" class="cursor-pointer text-xs">
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
