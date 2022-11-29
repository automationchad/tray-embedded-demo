<script setup>
	import { BookmarkIcon } from '@heroicons/vue/20/solid';

	const user = useSupabaseUser();
	const client = useSupabaseClient();

	console.log(user);

	// Get user in database

	const { data: customers } = await useAsyncData(
		'customers',
		async () => {
			return await client
				.from('customers')
				.select('id, first_name, last_name, tray_id')
				.eq('id', user.value.id);
		},
		{ transform: (result) => result.body }
	);

	// Check to see if exists in Tray
	const { data: tray_user } = await useAsyncGql({
		operation: 'GetUserByExId',
		variables: {
			externalUserId: user.value.id,
		},
	});

	const trayUser = tray_user.value.users.edges;
	console.log(trayUser);

	let userId;

	// If exists then store userId
	if (trayUser) {
		userId = trayUser[0].node.id;
		// If doesn't exist then create Tray user
	} else {
		const { data: new_tray_user } = await useAsyncGql({
			operation: 'createExternalUser',
			variables: {
				name: `${customers.value[0].first_name} ${customers.value[0].last_name}`,
				externalUserId: `${customers.value[0].id}`,
				isTestUser: false,
			},
		});
		userId = new_tray_user.createExternalUser.userId;
	}

	onMounted(() => {
		watchEffect(async () => {
			if (!user.value) {
				await navigateTo('/');
			}
		});
	});

	definePageMeta({
		middleware: ['auth'],
	});
</script>

<template>
	<div class="flex h-screen w-screen">
		<!-- Static sidebar for desktop -->
		<Sidebar :user="customers[0]" />
		<div class="flex flex-1 flex-col overflow-auto">
			<main>
				<div class="grid grid-cols-4">
					<div class="col-span-4">
						<Problems/>
						<Architecture />
						<Connectors/>
						<Workflows />
						<ConfigSlots />
						<Projects />
						<Forms />
						<Solution />
						<Instances />
						<Hood />
						<Together v-if="false"/>
						<NextSteps/>
						<Faqs />
					</div>
				</div>
			</main>
		</div>
	</div>
</template>

<script>
	import Hero from '../../components/home/hero.vue';
	import Architecture from '../../components/home/architecture.vue';
	import Market from '../../components/home/market.vue';
	import Hood from '../../components/home/underTheHood.vue';
	import Testimonials from '../../components/home/testimonials.vue';
	import Overview from '../../components/home/overview.vue';
	import Workflows from '../../components/home/workflows.vue';
	import Projects from '../../components/home/projects.vue';
	import ConfigSlots from '../../components/home/config-slots.vue';
	import Forms from '../../components/home/forms.vue';
	import Solution from '../../components/home/solution.vue';
	import Instances from '../../components/home/instances.vue';
	import Together from '../../components/home/together.vue';
	import Faqs from '~~/components/home/faqs.vue';
	import Connectors from '~~/components/home/connectors.vue';

	

	export default {
		components: {
			Overview,
			Workflows,
			Connectors,
			Architecture,
			Faqs,
			Hero,
			Market,
			Hood,
			Testimonials,
			Projects,
			Together,
			ConfigSlots,
			Forms,
			Solution,
			Instances,
		},
		data() {
			return {
				message: 'This is a test message',
			};
		},
		methods: {
			saveMessage(text) {},
		},
	};
</script>
