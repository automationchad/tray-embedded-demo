<script setup>
	import screenshot from '../../assets/images/connectors.png';
	import screenshot2 from '../../assets/images/connector_builder.png';
	import screenshot3 from '../../assets/images/http-client.png';
	import screenshot4 from '../../assets/images/pre-built-connector.png';
</script>

<template>
	<div>
		<div class="bg-base-100 py-12">
			<div class="relative mx-auto max-w-5xl py-16 px-4 sm:px-6 lg:px-8">
				<div class="">
					<div class="mx-auto text-base">
						<div
							class="flex items-center text-primary pb-3 border-b border-b-base-300"
						>
							<connector-icon />
							<h3 class="ml-2 text-sm leading-8 sm:text-md">Connectors</h3>
						</div>
						<div class="mt-9 mb-12 flex flex-initial flex-row gap-10 items-end">
							<h2 class="text-5xl font-medium flex-1">
								Building blocks of workflows.
							</h2>
							<p class="flex-1">
								Visual modals to interface with a 3rd party service’s API
								endpoints and functions (e.g.
								<span
									class="bg-info text-info-content font-mono px-1 py-0.5 italic rounded"
									>send Slack message</span
								>).
							</p>
						</div>
					</div>
				</div>

				<div class="sc-e682bbb8-27 hlyXLb">
					<img
						alt="Details about the Q4 Roadmap that includes 12 projects across 3 teams. Includes Scope per team, and Progress per team."
						:src="screenshot"
						decoding="async"
						data-nimg="future"
						class="sc-da454721-0 iTkTfQ"
						loading="lazy"
						style="color: transparent"
						data-loaded="true"
					/>
				</div>
				<div class="grid grid-cols-3 mt-12 gap-10">
					<div class="col-span-1">
						<div class="flex items-center justify-start space-x-2">
							<h3 class="font-medium">Exisiting Connectors</h3>
							<span
								class="bg-success text-success-content text-xs rounded-full px-2 py-0.5"
								>✅ Low ability</span
							>
						</div>

						<div class="hover:scale-[150%] transition-transform mt-2">
							<img :src="screenshot4" alt="" class="rounded h-[500px]" />
						</div>
						<p class="text-sm mt-5">
							If it's listed in the services dropdown list, you're golden. With
							these pre-built connectors we have done all the heavy lifting for
							you. The service API endpoints and functions are configured for
							use in easy drop-down menus.
						</p>
					</div>
					<div class="col-span-1">
						<div class="flex items-center justify-start space-x-2">
							<h3 class="font-medium">Connector Builder</h3>
							<span
								class="bg-warning text-warning-content text-xs rounded-full px-2 py-0.5"
								>⚠️ Medium ability</span
							>
						</div>
						<div class="hover:scale-[150%] transition-transform mt-2">
							<img :src="screenshot2" alt="" class="block rounded max-h-[500px] w-full h-[500px] object-cover" />
						</div>
						<p class="text-sm mt-5">
							Recommended when there is no Tray connector available for the 3rd
							party service and you need to create a new connector with all the
							required operations and share it with other users within your
							organisation.
						</p>
					</div>
					<div class="col-span-1">
						<div class="flex items-center justify-start space-x-2">
							<h3 class="font-medium">HTTP Client</h3>
							<span
								class="bg-error text-error-content text-xs rounded-full px-2 py-0.5"
							>
								❗️ High ability
							</span>
						</div>

						<div class="hover:scale-[150%] transition-transform mt-2">
							<img :src="screenshot3" alt="" class="rounded h-[500px]" />
						</div>
						<p class="text-sm mt-5">
							Recommended when you are seeking to use a single endpoint which is
							either not currently available within the service connector's
							operations list or not available as a service connector.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
