<script setup>
	import instances from '../../assets/images/solution-instances.png';
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
      "id": "d98f5e5d-53bf-4344-9600-61857af9710b",
      "name": "924ed0ab",
      "enabled": true,
      "owner": "5b0f09af-efe7-4af2-8a77-f908b1045ada",
      "created": "2022-11-08T21:36:11.319717Z",
      "solutionVersionFlags": {
        "hasNewerVersion": false,
        "requiresUserInputToUpdateVersion": false,
        "requiresSystemInputToUpdateVersion": false
      },
      "solution": {
        "id": "924ed0ab-3262-4626-b377-0009147bcead"
      },
      "workflows": {
        "edges": [
          {
            "node": {
              "triggerUrl": "https://92064da3-9976-41f0-9d99-5d03ba6d5f0c.trayapp.io",
              "id": "9be8dc11-bbe6-4a12-8bb4-baae2ea8e2f4",
              "sourceWorkflowId": "fa3fe031-d095-419c-aca6-4e5b637ed164"
            }
          }
        ]
      },
      "authValues": [
        {
          "externalId": "external_slack_authentication",
          "authId": "55910dd0-f48b-436c-b2a9-6228f6a2d561"
        }
      ],
      "configValues": [
        {
          "externalId": "external_username",
          "value": "\"Luke Skywalker\""
        },
        {
          "externalId": "external_channel",
          "value": "\"U1AEQJMHS\""
        }
      ]
    },
    "cursor": "ZDk4ZjVlNWQtNTNiZi00MzQ0LTk2MDAtNjE4NTdhZjk3MTBi"
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
						<instance-icon />
						<h3 class="ml-2 text-sm leading-8 sm:text-md">Instance</h3>
					</div>
					<div class="mt-9 mb-12 flex flex-initial flex-row gap-10 items-end">
						<h2 class="text-5xl bold flex-1 font-medium">
							Copy of Solution containing unique auth and config data values.
						</h2>
						<p class="flex-1">
							Configuration Data values may be hard-coded directly at the
							Solution level, collected as end-user input via the front-end
							during Solution Instance creation, or updated via the API during
							or after Solution Instance creation. Eitherway you'll be using the
							Tray GraphQL API to embed these into your front-end.
						</p>
					</div>
				</div>
				<div class="space-y-8">
					<div class=""><img :src="instances" alt="" /></div>
					<CodeOutput :code="operations[0].output" lang="json" />
				</div>
			</div>
		</div>
	</div>
</template>
