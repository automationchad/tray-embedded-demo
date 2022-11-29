<template>
	<div class="flex justify-between mb-8">
		<div>
			<label
				for="location"
				class="block text-sm font-medium text-base-content/60"
				>Plan</label
			>
			<select
				id="location"
				v-model="selectedPlan"
				name="location"
				class="mt-1 block w-full rounded-md border-base-300 py-2 pl-3 pr-10 text-base bg-base-200 sm:text-sm"
			>
				<option>Standard</option>
				<option>Professional</option>
				<option>Team</option>
			</select>
		</div>
		<div>
			<label for="price" class="block text-sm font-medium text-base-content/60"
				>ACV per mo</label
			>
			<div class="relative mt-1 rounded-md shadow-sm bg-base-200">
				<div
					class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
				>
					<span class="text-base-content/60 sm:text-sm">$</span>
				</div>
				<input
					type="number"
					v-model="acv"
					name="price"
					id="price"
					class="block w-full rounded-md border-base-300 pl-7 pr-12 sm:text-sm bg-base-200"
					placeholder="0.00"
					aria-describedby="price-currency"
					style=""
				/>
				<div
					class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
				>
					<span class="text-base-content/60 sm:text-sm" id="price-currency"
						>USD</span
					>
				</div>
			</div>
		</div>
	</div>
    <div class=""><ol><li></li></ol></div>
	<Line
		:chart-options="chartOptions"
		:chart-data="chartData"
		:plugins="chartPlugins"
		:width="'100%'"
		:height="height"
	/>
</template>

<script>
	import { Line } from 'vue-chartjs';
	import {
		Chart as ChartJS,
		Title,
		Tooltip,
		Legend,
		LineElement,
		LinearScale,
		PointElement,
		CategoryScale,
		Filler,
	} from 'chart.js';

	ChartJS.register(
		Title,
		Tooltip,
		Legend,
		LineElement,
		LinearScale,
		PointElement,
		CategoryScale,
		Filler
	);

	export default {
		name: 'BarChart',
		components: { Line },
		props: {
			chartView: { type: String, default: 'max' },
			chartId: { type: String, default: 'line-chart' },
			chartData: { type: Array, required: true },
			datasetIdKey: { type: String, default: 'user_score' },
			width: { type: Number, default: 400 },
			height: { type: Number, default: 400 },
			plugins: { type: Object, required: true },
		},
		data() {
			return {
				acv: 10,
				users: 5000,
				selectedPlan: 'Standard',
			};
		},
		methods: {
			abbreviatedNumber(number) {
				const SI_SYMBOL = ['', 'k', 'M', 'B', 'T', 'P', 'E'];
				const tier = (Math.log10(Math.abs(number)) / 3) | 0;
				if (tier === 0) {
					return number;
				}
				const suffix = SI_SYMBOL[tier];
				const scale = 10 ** (tier * 3);
				const scaled = number / scale;
                
				const length = scaled.toString().length;
				const precision = length > 2 ? 1 : 0;
				return scaled.toFixed(precision) + suffix;
			},
			workflowCost(uas) {
				let effectiveWorkflows = uas;
				let cost;
				let tiers = [
					{ id: 0, value: 500 },
					{ id: 1, value: 300 },
					{ id: 2, value: 250 },
					{ id: 3, value: 125 },
					{ id: 4, value: 50 },
					{ id: 5, value: 25 },
					{ id: 6, value: 10 },
				];
				if (effectiveWorkflows <= 5) {
					cost = tiers[0].value * effectiveWorkflows;
				} else if (effectiveWorkflows <= 15) {
					cost = (effectiveWorkflows - 5) * tiers[1].value + 5 * tiers[0].value;
				} else if (effectiveWorkflows <= 50) {
					cost =
						(effectiveWorkflows - 15) * tiers[2].value +
						10 * tiers[1].value +
						5 * tiers[0].value;
				} else if (effectiveWorkflows <= 250) {
					cost =
						(effectiveWorkflows - 50) * tiers[3].value +
						35 * tiers[2].value +
						10 * tiers[1].value +
						5 * tiers[0].value;
				} else if (effectiveWorkflows <= 1000) {
					cost =
						(effectiveWorkflows - 250) * tiers[4].value +
						200 * tiers[3].value +
						35 * tiers[2].value +
						10 * tiers[1].value +
						5 * tiers[0].value;
				} else if (effectiveWorkflows <= 5000) {
					cost =
						(effectiveWorkflows - 1000) * tiers[5].value +
						750 * tiers[4].value +
						200 * tiers[3].value +
						35 * tiers[2].value +
						10 * tiers[1].value +
						5 * tiers[0].value;
				} else
					cost =
						(effectiveWorkflows - 5000) * tiers[6].value +
						1000 * tiers[5].value +
						750 * tiers[4].value +
						200 * tiers[3].value +
						35 * tiers[2].value +
						10 * tiers[1].value +
						5 * tiers[0].value;
				return cost;
			},
			totalCost(uas) {
				return this.acv * uas - (this.workflowCost(uas) + this.basePlan) / 12;
			},
		},
		computed: {
			basePlan() {
				let basePlan = 0;
				if (this.selectedPlan === 'Standard') {
					basePlan = 18000;
				} else if (this.selectedPlan === 'Professional') {
					basePlan = 25000;
				} else basePlan = 49000;
				return basePlan;
			},
			chartData() {
				return {
					labels: Array.from({ length: this.users }, (_, i) => i + 0).map((o) =>
						this.abbreviatedNumber(o)
					),
					datasets: [
						{
							data: Array.from({ length: this.users }, (_, i) => i + 0).map(
								(o) => {
									return this.totalCost(o);
								}
							),
						},
					],
				};
			},
			chartOptions() {
				return {
					responsive: true,
					maintainAspectRatio: false,

					scales: {
						y: {
							color: 'transparent',
							title: { display: true, text: 'Monthly profit', color: 'rgba(154, 161, 167,0.6)', padding:12 },
							grid: {
								color: 'rgba(154, 161, 167,0.1)',
								lineWidth: 2,
								tickWidth: 2,
								borderWidth: 0,
							},
							min: 0,
							ticks: {
								callback: function (value, index, ticks) {
									return '$ ' + value.toLocaleString();
								},
								beginAtZero: true,
								maxTicksLimit: 10,
								minTicksLimit: 10,
								color: '#9AA1A7',
								font: { size: 14, family: "'Inter', sans-serif" },
							},
						},
						x: {
                            title: { display: true, text: 'Unique auths', color: 'rgba(154, 161, 167,0.6)', padding:12 },
							grid: {
								drawTicks: true,
								tickColor: 'rgba(154, 161, 167,0.1)',
								lineWidth: 0,
								tickLength: 8,
								tickWidth: 2,
								display: true,
								borderWidth: 0,
							},
							ticks: {
								color: '#9AA1A7',
								maxTicksLimit: 10,

								align: 'start',
								padding: 5,
								maxRotation: 0,
								fontFamily: "'Inter', sans-serif",
								font: { size: 14, family: "'Inter', sans-serif" },
							},
						},
					},
					layout: {
						autoPadding: true,
					},
					elements: {
						line: {
							borderColor: 'rgb(92, 207, 232)',
							borderCapStyle: 'round',
							borderWidth: 4,
							tension: 0.4,
						},
						point: {
							radius: 0,
						},
					},
					plugins: {
						legend: {
							display: false,
						},
						labels: {
							font: { color: '#fff', family: "'Inter', sans-serif" },
						},
					},
				};
			},
		},
	};
</script>

<style scoped>
	input[type='number']::-webkit-inner-spin-button,
	input[type='number']::-webkit-outer-spin-button {
		-webkit-appearance: none;
		background: red;
	}
</style>
