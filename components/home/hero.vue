<template>
	<div class="bg-base-100">
		<div class="relative overflow-hidden">
			<div class="relative pt-6 pb-16 sm:pb-24">
				<div class="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 sm:px-6">
					<div class="text-center flex flex-col items-center justify-center">
						<div class="btn-primary px-3 py-1 rounded-full text-sm mb-4 w-max">
							Low-code at scale →
						</div>
						<h1
							class="text-7xl font-medium tracking-tight text-base-content sm:text-7xl md:text-7xl mb-6"
						>
							<span class="block">Embedded is a better way</span>
							<span class="block">to build integrations </span>
						</h1>
						<div
							class="mx-auto font-light mt-3 max-w-md text-base text-base-content/70 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl"
						>
							<p class="">
								Meet the new standard for modern integration development.
							</p>
							<p class="">Streamline issues, sprints, and product roadmaps.</p>
						</div>
					</div>
				</div>
				<div class="mx-auto max-w-7xl px-4 sm:px-6 mt-24">
					<iframe
						class="max-w-7xl rounded-lg"
						width="100%"
						height="600"
						src="https://www.youtube.com/embed/hK4d09mnfS4?controls=0&autoplay=0&showinfo=0&modestbranding=1"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				</div>
			</div>

			<div class=""></div>
		</div>
	</div>
</template>

<script setup>
	import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
	import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';
	import market from '../../assets/images/embedded-market.png';

	const navigation = [
		{ name: 'Product', href: '#' },
		{ name: 'Features', href: '#' },
		{ name: 'Marketplace', href: '#' },
		{ name: 'Company', href: '#' },
	];
</script>
