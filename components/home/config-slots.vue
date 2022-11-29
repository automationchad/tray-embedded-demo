<script setup>
	import { VariableIcon } from '@heroicons/vue/20/solid';
	import screenshot from '../../assets/images/trayio_forms.png';
	import video from '../../assets/images/config-slots.mp4';
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
			output: `{
      "authValues": [
        {
          "externalId": "external_slack_authentication",
          "authId": "b0208eec-14bb-42f8-a217-00c36eb9f78e"
        }
      ],
      "configValues": [
        {
          "externalId": "external_username",
          "value": ""R2-D2""
        },
        {
          "externalId": "external_channel",
          "value": ""U01TU0JPCLD""
        }
      ]
    }`,
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
						<VariableIcon class="h-4 w-4" />
						<h3 class="ml-2 text-sm leading-8 sm:text-md">Config Parameters</h3>
					</div>
				</div>
				<div class="">
					<div class="">
						<div class="mt-9 mb-12 flex flex-initial flex-row gap-10 items-end">
							<h2 class="text-5xl font-medium flex-1">
								Parameters to be initialized by the End User of your app.
							</h2>
							<p class="flex-1">
								Added to a relevant field as a parameter, e.g
								<span
									class="font-mono italic bg-warning text-warning-content rounded p-1"
									>$.config.slack_channel</span
								>. Those parameters are shown in the Form as input fields. When
								a user adds unique values to the input fields, the parameters
								are initialized to those values.
							</p>
						</div>
					</div>
				</div>
				<div class="sc-e682bbb8-27 hlyXLb">
					<video
						:autoplay="true"
						preload
						controls
						loop
						class="h-full w-full rounded-lg border border-base-200 shadow-xl"
						:src="video"
					></video>
				</div>
				<!-- <div class="mt-8">
					<div class="mt-8 lg:mt-0 grid grid-cols-2 gap-x-8">
						<div class="relative lg:col-start-2 lg:row-start-1 mt-6">
							<div class="mx-auto max-w-prose text-base lg:max-w-none">
								<Code
									v-for="operation in operations"
									:key="operation.title"
									:title="operation.title"
									:description="operation.description"
									:subtitle="operation.subtitle"
									:type="operation.type"
									:input="operation.input"
									:variables="operation.variables"
									:output="operation.output"
								/>
							</div>
						</div>
					</div>
				</div> -->
			</div>
		</div>
	</div>
</template>
