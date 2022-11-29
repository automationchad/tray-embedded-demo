<template>
	<div>
		<div class="bg-base-100 py-12">
			<div class="relative mx-auto max-w-5xl py-16 px-4 sm:px-6 lg:px-8">
				<div class="">
					<div class="mx-auto text-base">
						<div
							class="flex items-center text-primary pb-3 border-b border-b-base-300"
						>
							<market-icon />
							<h3 class="ml-2 text-sm leading-8 sm:text-md">Process</h3>
						</div>
						<div class="mt-9 mb-12 flex flex-initial flex-row gap-10 items-end">
							<h2 class="text-5xl font-medium flex-1">
								The ideal licensing style
							</h2>
							<p class="flex-1">
								There are several ways that Tray can be owned. All are dependent
								on who will be building and maintaing.
							</p>
						</div>
					</div>
				</div>

				<div class="sc-e682bbb8-27 hlyXLb">
					<img
						alt="Details about the Q4 Roadmap that includes 12 projects across 3 teams. Includes Scope per team, and Progress per team."
						:src="process"
						decoding="async"
						data-nimg="future"
						class="rounded-lg hover:scale-150 transition-transform"
						loading="lazy"
						style="color: transparent"
						data-loaded="true"
					/>
				</div>
				<div class="">
					<div class="mx-auto text-base">
						<div
							class="mt-9 mb-12 gap-x-10 gap-y-5 items-start grid grid-cols-2"
						>
							<div class="col-span-2">
								<h2 class="text-xl font-medium mb-3">
									What licensing model depends on the following:
								</h2>
								<ul class="text-primary/60 list-decimal list-inside">
									<li class="">What type of business you are</li>
									<li>
										If you now have or will have access to internal building
										resources
									</li>
								</ul>
								<p class="mt-5">Licensing options:</p>
							</div>
							<div class="col-span-1">
								<div class="mb-6 py-4">
									<p class="font-medium">Beneficiary owns the license.</p>
									<ul class="my-3 text-sm border border-base-200 p-6 rounded-lg">
										<p class="mb-3 font-medium">Benefits</p>
										<li
											v-for="item in options[0].benefits"
											:key="item"
											class="flex space-x-2 my-1"
										>
											<CheckIcon class="h-5 w-5 text-success mr-2" />
											{{ item }}
										</li>
									</ul>
									<ul class="my-3 text-sm border border-base-200 p-6 rounded-lg">
										<p class="mb-3 font-medium">Drawbacks</p>
										<li
											v-for="item in options[0].drawbacks"
											:key="item"
											class="flex space-x-2 my-1"
										>
											<XMarkIcon class="h-5 w-5 text-error mr-2" />
											{{ item }}
										</li>
									</ul>
								</div>
							</div>
							<div class="space-y-3 col-span-1 border-base-200">
								<div class="py-4">
									<p class="font-medium">Tray SI Partner owns the license.</p>
									<ul class="my-3 text-sm border border-base-200 p-6 rounded-lg">
										<p class="mb-3 font-medium">Benefits</p>
										<li
											v-for="item in options[1].benefits"
											:key="item"
											class="flex space-x-2 my-1"
										>
											<CheckIcon class="h-5 w-5 text-success mr-2" />
											{{ item }}
										</li>
									</ul>
									<ul class="my-3 text-sm border border-base-200 p-6 rounded-lg">
										<p class="mb-3 font-medium">Drawbacks</p>
										<li
											v-for="item in options[1].drawbacks"
											:key="item"
											class="flex space-x-2 my-1"
										>
											<XMarkIcon class="h-5 w-5 text-error mr-2" />
											{{ item }}
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
	import {
		Bars3Icon,
		XMarkIcon,
		CheckIcon,
		ArrowTopRightOnSquareIcon,
	} from '@heroicons/vue/24/outline';
	import process from '../../assets/images/partner-process.png';
	import airtable from '../../assets/images/airtable.png';
	import lynton from '../../assets/images/lynton.png';
	import typeform from '../../assets/images/typeform.png';

	const navigation = [
		{ name: 'Product', href: '#' },
		{ name: 'Features', href: '#' },
		{ name: 'Marketplace', href: '#' },
		{ name: 'Company', href: '#' },
	];

	const options = [
		{
			name: 'Internal',
			benefits: [
				'More control',
				'Potential to scale more',
				'More flexible',
			],
			drawbacks: [
				'More expensive',
				'New platform to learn',
				'Demands more internal resources',
			],
		},
		{ name: 'External', benefits: ['Costs less', 'Set and forget', 'Don\'t have to learn tool'], drawbacks: ['Less control', 'Partner dependence on support and services', 'Less flexible'] },
	];
</script>
