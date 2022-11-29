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
							<h3 class="ml-2 text-sm leading-8 sm:text-md">Next steps</h3>
						</div>
						<div class="mt-9 mb-12 flex flex-initial flex-row gap-10 items-end">
							<h2 class="text-5xl font-medium flex-1">
								Setting POC success criteria.
							</h2>
							<p class="flex-1">
								1. This is what we’re going to test. 2. We’re happy to do more
								POC for different softwares. Obviously the first one is free,
								the other ones incur costs. 3. Most people know they want Tray
								after the first POC. And they know which POC is most important
								one. 4. So let’s make sure that we choose the right software.
							</p>
						</div>
					</div>
				</div>

				<!-- <div class="sc-e682bbb8-27 hlyXLb">
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
				</div> -->
				<div class="">
					<div class="mx-auto text-base">
						<div class="my-24 gap-x-10 gap-y-5 items-start grid grid-cols-2">
							<div class="col-span-2 mb-24">
								<div class="mb-6 py-4">
									<p class="font-medium">Problems we solve</p>
									<p>
										100% this is the way forward but what doesn’t get accounted
										for here is people’s reluctance for change. How much will it
										cost to transition to the new system? Will the new system
										enable more growth? Or is it just creating more capacity
										where none is needed? IT has to reconfigure everything.
										People have to onboard to a new tool. There’ll be business
										downtime when you can’t use the systems. How much does all
										of that cost? You have to be careful about this back of the
										napkin math - gives you a biased view. You’re only looking
										at what you have now and what you could have. There’s a
										third variable in these calculations that you’re missing:
										cost of getting there. And if you factor it in, it might
										work out to be cheaper to stay with the current. To each
										their own I guess but if it were that easy to change then
										tools like Zapier and Tray.io would be out of business. It’s
										a lot easier to add a consolidator tool to make the existing
										stack better than throw the entire system out.
									</p>
									<ul
										class="my-3 text-sm border border-base-200 p-6 rounded-lg"
										v-for="problem in problems"
										:key="problem.title"
									>
										<p class="mb-3 font-medium">{{ problem.title }}</p>
										<p class="text-base-content/60">
											{{ problem.description }}
										</p>
									</ul>
								</div>
							</div>
							<div class="col-span-2">
								<div class="mb-6 py-4">
									<p class="font-medium">Who it's not for</p>
									<ul
										class="my-3 text-sm border border-error p-6 rounded-lg"
										v-for="dq in dqs"
										:key="dq.title"
									>
										<li class="flex">
											<XMarkIcon class="h-5 w-5 text-error mr-2" />
											<p class="font-medium text-error-content">
												{{ dq.title }}
											</p>
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
	import process from '~/assets/images/partner-process.png';
	import airtable from '~/assets/images/airtable.png';
	import lynton from '~/assets/images/lynton.png';
	import typeform from '~/assets/images/typeform.png';

	const navigation = [
		{ name: 'Product', href: '#' },
		{ name: 'Features', href: '#' },
		{ name: 'Marketplace', href: '#' },
		{ name: 'Company', href: '#' },
	];

	const problems = [
		{
			title:
				'Having engineers custom coding internally is not the best approach.',
			description:
				'Probably have to re-architect your code base for 3-4 months. It takes too much time to maintain. You want a solution that manages infrastructure (execution, run times) and consolidates code on a central platform so you don’t have to worry about data silos and lack of control. Whilst still being dedicated towards users with a development background and gives you control over logic or data transformation.',
		},
		{
			title:
				'You don’t want to copy/paste integrations every time you get a request.',
			description:
				'Ideally, you want a programmatic way for end-users to create those integrations. And a way that if you make a change to the logic of the integration you want those changes to automatically propagate to everyone who has it enabled.',
		},
		{
			title:
				'You want a whitelabeled seamless user experience so that end-users can’t tell that a 3rd party iPaaS is running the show.',
			description:
				'You don’t want an unguided workflow builder in your application. It gets directly coded into the user interface of your application. ',
		},
	];
	const dqs = [
		{
			title: 'Your product is still in beta.',
			description:
				'It takes too much time to maintain. You want a solution that manages infrastructure (execution, run times) and consolidates code on a central platform so you don’t have to worry about data silos and lack of control. Whilst still being dedicated towards users with a development background and gives you control over logic or data transformation.',
		},
		{
			title: 'You cannot justify spending >$35k/year.',
			description:
				'Ideally, you want a programmatic way for end-users to create those integrations. And a way that if you make a change to the logic of the integration you want those changes to automatically propagate to everyone who has it enabled.',
		},
		{
			title: 'You think ~3-4 weeks of implementation is too long.',
			description:
				'It gets directly coded into the user interface of your application. And execution of these integrations is consolidated so you don’t have to worry about data silos and lack of control.',
		},

		{
			title: 'You want to embed our workflow builder as an iframe.',
			description:
				'It gets directly coded into the user interface of your application. And execution of these integrations is consolidated so you don’t have to worry about data silos and lack of control.',
		},
		{
			title: 'You want a point-to-point solution not a Swiss Army knife.',
			description:
				'It gets directly coded into the user interface of your application. And execution of these integrations is consolidated so you don’t have to worry about data silos and lack of control.',
		},
		{
			title:
				'You don’t have at least one front-end developer dedicated to learning this.',
			description:
				'It gets directly coded into the user interface of your application. And execution of these integrations is consolidated so you don’t have to worry about data silos and lack of control.',
		},
	];
</script>
