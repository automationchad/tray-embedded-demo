<template>
	<div>
		<div class="bg-base-100 py-12">
			<div class="relative mx-auto max-w-5xl pt-16 px-4 sm:px-6 lg:px-8">
				<div class="">
					<div class="mx-auto text-base">
						<div
							class="flex items-center text-primary pb-3 border-b border-b-base-300"
						>
							<market-icon />
							<h3 class="ml-2 text-sm leading-8 sm:text-md">Market</h3>
						</div>
						<div class="mt-9 mb-12 flex flex-initial flex-row gap-10 items-end">
							<h2 class="text-5xl font-medium flex-1">
								The Embedded continuum
							</h2>
							<p class="flex-1">
								The correlation between how native the experience is for a
								consumer is provided by the distribution model and how
								technically involved the outcome is to implement.
							</p>
						</div>
					</div>
				</div>

				<div class="sc-e682bbb8-27 hlyXLb">
					<img
						alt="Details about the Q4 Roadmap that includes 12 projects across 3 teams. Includes Scope per team, and Progress per team."
						:src="market"
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
									What product you'll resonate most with depends on two factors:
								</h2>
								<ul class="text-primary/60 list-decimal list-inside">
									<li class="">
										How much complexity will you expose to end-users
									</li>
									<li>How technical will the implementation be</li>
								</ul>
								<p class="mt-5">Some possible options...</p>
							</div>
							<div class="col-span-1">
								<div class="mb-6 py-4 border-b border-base-200">
									<p class="font-medium">
										Creating bespoke integrations and activate these
										integrations for your end user.
									</p>
									<div class="my-3">
										<div class="">
											<img :src="lynton" alt="" class="" />
										</div>
										<div class="flex justify-between mt-1 items-end">
											<span
												class="font-mono italic text-info-content bg-info rounded px-2"
												>Integration Manager</span
											>
											<p class="text-xs text-base-content/60 flex items-start mt-2">
												<LyntonLogo class="h-4 mr-1" />(2019)
											</p>
										</div>
									</div>
									<p class="my-2"></p>
									<ul class="list-disc list-inside my-3 text-sm">
										<li>Service based businesses</li>
										<li>APIs, JSON</li>
										<li>At least one Tray builder needed</li>
									</ul>
								</div>
								<div class="py-4 border-b border-base-200">
									<p class="font-medium">
										Offering an embedded logic builder that lets end-users build
										their own workflows within your app.
									</p>
									<div class="my-3">
										<figure class="">
											<img :src="airtable" alt="" class="" />
										</figure>
										<div class="flex justify-between mt-1 items-end">
											<span
												href="#"
												class="font-mono italic text-error-content bg-error rounded px-2"
												>Connectivity API</span
											>
											<p class="text-xs text-base-content/60 flex items-start mt-2">
												<AirtableLogo class="h-4 mr-1" />(2021)
											</p>
										</div>
									</div>

									<ul class="list-disc list-inside my-3 text-sm">
										<li>B2B SaaS companies</li>
										<li>GraphQL API, JSON, JavaScript</li>
										<li>Front-end and back-end engineers needed</li>
									</ul>
									<a
										class="bg-primary text-primary-content px-2 rounded py-1 flex items-center max-w-min active:scale-95 text-sm"
										href="https://api.tray.io/core/v1/docs/"
										target="_blank"
										><ArrowTopRightOnSquareIcon class="h-5 w-5" />Docs</a
									>
								</div>
							</div>
							<div class="space-y-3 col-span-1">
								<div class="py-4 border-b border-base-200">
									<p class="font-medium">
										Offering an integration marketplace that let's end-users
										enable integrations themselves.
									</p>
									<div class="my-3">
										<figure class="">
											<img :src="typeform" alt="" class="" />
										</figure>
										<div class="flex justify-between mt-1">
											<a
												href="/native"
												class="font-mono italic text-warning-content bg-warning rounded px-2"
												>Embedded Native</a
											>
											<p class="text-xs text-base-content/60 flex items-start mt-2">
												<TypeformLogo class="h-4 mr-1" />(2020)
											</p>
										</div>
									</div>

									<ul class="list-disc list-inside my-3 text-sm">
										<li>B2B SaaS companies</li>
										<li>GraphQL API, JSON, JavaScript</li>
										<li>Front-end engineer needed</li>
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
		ArrowTopRightOnSquareIcon,
	} from '@heroicons/vue/24/outline';
	import market from '../../assets/images/embedded-market.png';
	import airtable from '../../assets/images/airtable.png';
	import lynton from '../../assets/images/lynton.png';
	import typeform from '../../assets/images/typeform.png';

	const navigation = [
		{ name: 'Product', href: '#' },
		{ name: 'Features', href: '#' },
		{ name: 'Marketplace', href: '#' },
		{ name: 'Company', href: '#' },
	];
</script>
