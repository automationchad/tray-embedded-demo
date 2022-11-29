<template>
	<div class="bg-base-100">
		<div class="mx-auto max-w-5xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
			<p class="text-center text-lg text-base-content/75">
				Powering the world’s best product teams.
			</p>
			<p class="text-center text-lg text-base-content">
				From next-gen startups to established enterprises.
			</p>
			<div class="mt-6 grid grid-cols-6 gap-0.5 md:grid-cols-6 lg:mt-8">
				<div
					v-for="company in companies"
					:key="company.src"
					class="flex py-8 px-4"
				>
					<component class="w-5" :is="company.src" aria-hidden="true" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import eventbriteLogo from '../eventbriteLogo.vue';
	import typeformLogo from '../typeformLogo.vue'
	const companies = [
		{
			alt: 'Eventbrite',
			src: eventbriteLogo,
		},
		{
			alt: 'Typeform',
			src: typeformLogo,
		},
	];
</script>
