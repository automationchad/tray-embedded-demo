<script setup lang="ts">
	const props = defineProps({
		solutions: Array,
		instances: Array,
		userId: String,
		userToken: String,
		message: String,
	});

	import {
		CheckCircleIcon,
		ChevronDownIcon,
		EnvelopeIcon,
	} from '@heroicons/vue/20/solid';
	import { SparklesIcon } from '@heroicons/vue/24/outline';
	import {
		Disclosure,
		DisclosureButton,
		DisclosurePanel,
	} from '@headlessui/vue';
</script>

<template>
	<div class="bg-base-100 shadow-lg sm:rounded-lg border-base-300 border">
		<div class="divide-y divide-base-300">
			<div v-for="solution in solutions" :key="solution.node.id">
        <div class="flex items-center px-8 py-8 sm:px-8">
						<div class="flex min-w-0 flex-1 items-center">
							<div class="flex-shrink-0 mr-2">
								<img
									class="h-10 w-10"
									:src="solution.node.customFields[0].value"
									alt=""
								/>
							</div>
							<div
								class="min-w-0 flex-1 px-4 md:grid md:grid-cols-4 md:gap-4 items-center"
							>
								<div class="col-span-3">
									<div class="flex items-center space-x-2 mb-2">
										<p class="truncate text-base font-medium text-base-content">
											{{ solution.node.title }}
										</p>
										<div
											class=""
											v-for="(solution, idx) in instances.filter(
												(o) => o.node.solution.id === solution.node.id
											)"
											:key="solution.node.id"
										>
											<span
												v-if="
													solution.node.enabled &&
													!solution.node.solutionVersionFlags
														.requiresUserInputToUpdateVersion
												"
												class="inline-flex items-center rounded-full badge-success px-2.5 py-0.5 text-xs font-medium"
												>Enabled</span
											>
											<span
												v-else-if="
													solution.node.solutionVersionFlags
														.requiresUserInputToUpdateVersion
												"
												class="inline-flex items-center rounded-full badge-warning px-2.5 py-0.5 text-xs font-medium"
												>Reauthenticate</span
											>
											<span
												v-else
												class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium badge-error"
												>Disabled</span
											>
										</div>
									</div>
									<p
										class="mt-2 flex items-center text-sm text-gray-500 text-base-content/70"
									>
										<span class="">{{ solution.node.description }}</span>
									</p>
								</div>
								<div class="hidden md:block items-end justify-end">
									<div class="text-right">
										<a
											href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
											v-if="solution.node.tags.includes('paid')"
											:class="[
												solution.node.tags.includes('paid')
													? `
                  btn-accent`
													: 'btn-primary',
												`inline-flex
                  items-center
                  
                  border 
                  px-2.5
                  py-0.5
                  text-sm
                  font-medium
                  leading-5
                  
                  shadow-sm
                  cursor-pointer
                  `,
											]"
										>
											<SparklesIcon
												v-if="solution.node.tags.includes('paid')"
												class="h-3 w-3 mr-1"
											/>{{
												solution.node.tags.includes('paid')
													? 'Upgrade'
													: 'Create'
											}}
										</a>
										<button
											v-else-if="
												instances.filter(
													(o) => o.node.solution.id === solution.node.id
												).length == 0
											"
											@click="
												createNew(
													solution.node.id,
													`Webhook demo 2`,
													userId,
													userToken
												)
											"
											class="inline-flex active:scale-95 items-center bg-base-200 px-2.5 py-0.5 text-sm font-medium leading-5 shadow-sm"
										>
											Connect
										</button>
										<button v-else>
											<div
												class="flex items-center"
												v-for="(solution, idx) in instances.filter(
													(o) => o.node.solution.id === solution.node.id
												)"
												:key="solution.node.id"
											>
												<ActionList
													:enabled="solution.node.enabled"
													:userId="userId"
													:solutionInstanceId="solution.node.id"
													:instanceName="solution.node.name"
													:webhook-url="
														solution.node.workflows.edges[0].node.triggerUrl
													"
													:user-token="userToken"
													:needs-action="
														solution.node.solutionVersionFlags
															.requiresUserInputToUpdateVersion
													"
													:message="message"
												/>
											</div>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				
			</div>
		</div>
		<Success :show="success" />
	</div>
</template>

<script lang="ts">
	export default {
		data() {
			return {
				success: false,
			};
		},
		methods: {
			async createNew(solutionId, instanceName, userId, userToken) {
				const { id: solutionInstanceId } = await $fetch(
					`/api/instances/create?solutionId=${solutionId}&userToken=${userToken}`,
					{ method: 'post' }
				);
				const { authorizationCode } = await $fetch(
					`/api/auth?userId=${userId}`,
					{
						method: 'post',
					}
				);
				const url = `https://embedded.tray.io/external/solutions/willmarzella/configure/${solutionInstanceId}?code=${authorizationCode}`;

				// Must open window from user interaction code otherwise it is likely
				// to be blocked by a popup blocker:
				const configWindow = window.open(
					undefined,
					'_blank',
					'width=500,height=500,scrollbars=no'
				);
				// Listen to popup messages
				let configFinished = false;
				const onmessage = (e) => {
					if (e.data.type === 'tray.configPopup.error') {
						// Handle popup error message
						alert(`Error: ${e.data.err}`);
					}
					if (e.data.type === 'tray.configPopup.cancel') {
						configWindow.close();
					}
					if (e.data.type === 'tray.configPopup.finish') {
						// Handle popup finish message
						configFinished = true;
						configWindow.close();
					}
					if (e.data.type === 'tray.configPopup.validate') {
						// Return validation in progress
						configWindow.postMessage(
							{
								type: 'tray.configPopup.client.validation',
								data: {
									inProgress: true,
								},
							},
							'*'
						);
						setTimeout(() => {
							// Add errors to all inputs
							const errors = e.data.data.visibleSlots.reduce(
								(errors, externalId) => {
									console.log(
										`Visible ${externalId} value:`,
										e.data.data.slotValues[externalId]
									);
									// Uncomment next line to set an error message
									// errors[externalId] = 'Custom error message';
									return errors;
								},
								{}
							);

							// Return validation
							configWindow.postMessage(
								{
									type: 'tray.configPopup.client.validation',
									data: {
										inProgress: false,
										errors: errors,
									},
								},
								'*'
							);
						}, 2000);
					}
				};
				window.addEventListener('message', onmessage);
				// Check if popup window has been closed before finishing the configuration.
				// We use a polling function due to the fact that some browsers may not
				// display prompts created in the beforeunload event handler.
				const CHECK_TIMEOUT = 1000;
				const checkWindow = () => {
					if (configWindow.closed) {
						// Handle popup closing
						if (!configFinished) {
							alert('Configuration not finished');
						} else {
							$fetch(
								`/api/instances/update?solutionInstanceId=${solutionInstanceId}&enabled=${true}&userToken=${userToken}`,
								{ method: 'post' }
							);
							this.success = true;
							location.reload();
							console.log('Configuration finished');
						}
						window.removeEventListener('message', onmessage);
					} else {
						setTimeout(checkWindow, CHECK_TIMEOUT);
					}
				};
				checkWindow();
				configWindow.location = url;
				return configWindow;
			},
		},
	};
</script>
