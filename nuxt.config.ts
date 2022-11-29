// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: ['@nuxtjs/tailwindcss', 'nuxt-graphql-client', '@nuxtjs/supabase'],
	build: {
		transpile: ['@heroicons/vue', '@headlessui/vue'],
	},
	runtimeConfig: {
		public: { GQL_HOST: 'https://tray.io/graphql' },
	},
	head: {
		title: 'Tray Pricing',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },

			// hid is used as unique identifier. Do not use `vmid` for it as it will not work
			{ hid: 'description', name: 'description', content: 'Meta description' },
		],
	},
});
