<template>
	<div>
		<div class="bg-base-100 py-12">
			<div class="relative mx-auto max-w-5xl py-16 px-4 sm:px-6 lg:px-8">
				<div class="">
					<div class="mx-auto text-base">
						<div
							class="flex items-center text-primary pb-3 border-b border-b-base-300"
						>
							<architecture-icon />
							<h3 class="ml-2 text-sm leading-8 sm:text-md">Architecture</h3>
						</div>
						<div class="mt-9 mb-12 flex flex-initial flex-row gap-10 items-end">
							<h2 class="text-5xl font-medium flex-1">
								Pieces making up the puzzle
							</h2>
							<p class="flex-1">
								Architecting a modern integration strategy using low-code at
								scale.
							</p>
						</div>
					</div>
				</div>

				<div class="space-y-8">
					<img
						alt="Details about the Q4 Roadmap that includes 12 projects across 3 teams. Includes Scope per team, and Progress per team."
						:src="architecture"
						decoding="async"
						data-nimg="future"
						class="rounded-lg"
						loading="lazy"
						data-loaded="true"
					/>
					
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
	import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';
	import architecture from '../../assets/images/embedded-architecture.png';


	const navigation = [
		{ name: 'Product', href: '#' },
		{ name: 'Features', href: '#' },
		{ name: 'Marketplace', href: '#' },
		{ name: 'Company', href: '#' },
	];
</script>
