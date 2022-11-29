<template>
	<div>
		<div class="bg-base-100 py-12">
			<div class="relative mx-auto max-w-5xl py-16 px-4 sm:px-6 lg:px-8">
				<div class="mx-auto max-w-prose text-base lg:max-w-none">
					<div
						class="flex items-center text-primary pb-3 border-b border-b-base-300"
					>
						<BoltIcon class="h-5 w-5" />
						<h3 class="ml-2 text-sm leading-8 sm:text-md">Under the hood</h3>
					</div>
					<div class="mt-9 mb-12 flex flex-initial flex-row gap-10 items-end">
						<h2 class="text-5xl bold flex-1 font-medium">
							Supercharged by
							<span class="flex flex-1"
								><span class="inline-grid items-center"
									><img
										class="h-[50px] rounded-full w-auto mr-2"
										src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png"
										alt="" /></span
								><span class="text-[#E535AB]">GraphQL</span></span
							>
						</h2>
						<p class="flex-1">
							Powers the whitelabeling and the programmatic enabling of
							integrations. Get specific with Tray Native objects. No spinners.
							No loading. No worries.
						</p>
					</div>
				</div>
				<div class="grid grid-cols-4 gap-12 items-start">
					<div class="flex flex-initial flex-col col-span-1">
						<span class="text-3xl text-base-content"><div>20ms</div></span
						><span class="text-sm text-base-content/60"
							>instant interactions</span
						>
					</div>
					<div class="flex flex-initial flex-col col-span-1">
						<span class="text-3xl text-base-content"><div>10x faster</div></span
						><span class="text-sm text-base-content/60"
							>initial load times</span
						>
					</div>
					<div class="flex flex-initial flex-col col-span-2">
						<span class="text-3xl text-base-content"
							><div>Reliability upgrade</div></span
						><span class="text-sm text-base-content/60"
							>optimized for large workspaces that need ultimate
							performance</span
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { BoltIcon } from '@heroicons/vue/24/outline';
</script>
