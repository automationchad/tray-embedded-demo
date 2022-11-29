<script setup>
	import user_architecture from '../../assets/images/user-architecture.png';
	let operations = [
		{
			title: '',
			subtitle: `Gets a list of Solutions`,
			description: ``,
			type: 'query',
			input: ``,
			variables: `{
	"tags": [
		"two-service",
		"asana"
	]
}`,
			output: `[
  {
    "node": {
      "id": "924ed0ab-3262-4626-b377-0009147bcead",
      "title": "Slack",
      "description": "Notify a channel or individual in Slack with real-time responses to a webhook in ACME.",
      "tags": [],
      "customFields": [
        {
          "key": "icon",
          "value": "https://user-images.githubusercontent.com/5147537/54070671-0a173780-4263-11e9-8946-09ac0e37d8c6.png"
        }
      ]
    }
  }
  }
]`,
		},
	];
</script>

<template>
	<div>
		<div class="bg-base-100 py-12">
			<div class="relative mx-auto max-w-5xl py-16 px-4 sm:px-6 lg:px-8">
				<div class="mx-auto max-w-prose text-base lg:max-w-none">
					<div
						class="flex items-center text-primary pb-3 border-b border-b-base-300"
					>
						<solution-icon />
						<h3 class="ml-2 text-sm leading-8 sm:text-md">Solution</h3>
					</div>
					<div class="mt-9 mb-12 flex flex-initial flex-row gap-10 items-end">
						<h2 class="text-5xl bold flex-1 font-medium">
							Integration template that can be installed by end-users.
						</h2>
						<p class="flex-1 font-normal">
							Encompasses the Project, and front-end Form. When end-users
							configure a Solution, they create a copy for themselves - this is
							called an Instance. You'll be using the Tray GraphQL API to embed
							these into your front-end.
						</p>
					</div>
				</div>
				<div class="space-y-8">
					<img :src="user_architecture" class="rounded-lg" alt="" />
					<CodeOutput :code="operations[0].output" lang="json" />
				</div>
			</div>
		</div>
	</div>
</template>
