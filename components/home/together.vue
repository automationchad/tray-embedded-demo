<script setup>
import screenshot from '../../assets/images/trayio_projects.png';

</script>

<template>
	<div>
		<div class="bg-base-100 py-12">
			<div class="relative mx-auto max-w-5xl py-16 px-4 sm:px-6 lg:px-8">
				<div class="mx-auto max-w-prose text-base lg:max-w-none">
					<div
						class="flex items-center text-primary pb-3 border-b border-b-base-300"
					>
						<AzIcon class="h-5 w-5"/>
						<h3 class="ml-2 text-sm leading-8 sm:text-md">User Journey</h3>
					</div>
				</div>
				<div class="">
					<div class="">
						<div class="mt-9 mb-12 flex flex-initial flex-row gap-10 items-end">
							<h2 class="text-5xl font-medium flex-1">
								Collection of related workflows
							</h2>
							<p class="flex-1">
								How you keep workflows and the related config data organized
								within the Tray UI. Combined with the Form, this turns into a
								Solution.
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
			</div>
		</div>
	</div>
</template>
