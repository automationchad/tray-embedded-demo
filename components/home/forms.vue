<script setup>
	import screenshot from '../../assets/images/trayio_forms.png';
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
      "title": "🧪 Slack Tester",
      "description": "Notify a channel or individual in Slack with real-time responses to a webhook in ACME.",
      "tags": [],
      "customFields": [
        {
          "key": "icon",
          "value": "https://user-images.githubusercontent.com/5147537/54070671-0a173780-4263-11e9-8946-09ac0e37d8c6.png"
        }
      ]
    }
  },
  {
    "node": {
      "id": "70c4cce4-de9e-45ca-bdb1-ef7297cfb740",
      "title": "Salesforce",
      "description": "Send typeform responses to Salesforce as contacts, leads, and more. Available on Premium plans.",
      "tags": [
        "paid"
      ],
      "customFields": [
        {
          "key": "icon",
          "value": "https://livestorm.imgix.net/1127/1632413411-salesforce.svg"
        }
      ]
    }
  },
  {
    "node": {
      "id": "851deaa0-c3ef-42fe-b870-f211331ad5b7",
      "title": "Google Drive",
      "description": "Send files from ACME to Google Drive for better organization and collaboration.",
      "tags": [],
      "customFields": [
        {
          "key": "icon",
          "value": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Google_Drive_logo.png/1200px-Google_Drive_logo.png?20220818055023"
        }
      ]
    }
  },
  {
    "node": {
      "id": "f03f82cc-ffea-4234-91c5-5695dd61727d",
      "title": "Gmail",
      "description": "Trigger an email to your respondent and notify your team. Collaborate with your team and keep your leads warm.",
      "tags": [],
      "customFields": [
        {
          "key": "icon",
          "value": "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
        }
      ]
    }
  },
  {
    "node": {
      "id": "83ee003c-88a1-4186-b3ed-c3693a473597",
      "title": "Asana",
      "description": "Create Asana task",
      "tags": [],
      "customFields": [
        {
          "key": "icon",
          "value": "''"
        }
      ]
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
						<form-icon />
						<h3 class="ml-2 text-sm leading-8 sm:text-md">Form</h3>
					</div>
					<div class="mt-9 mb-12 flex flex-initial flex-row gap-10 items-end">
						<h2 class="text-5xl bold flex-1 font-medium">
							Collect auth and config data from End Users.
						</h2>
						<p class="flex-1">
							The Config Wizard is used when building a simplistic front-end.
							Custom JS allows developers to define their own UI leveraging Tray
							components. The Tray Call Connector API + auth-only dialogue
							allows a totally custom front-end.
						</p>
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
			</div>
		</div>
	</div>
</template>
