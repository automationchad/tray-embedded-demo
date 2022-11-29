<template>
	<section aria-labelledby="faq-heading" class="bg-base-100">
		<div
			class="max-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-5xl lg:px-8"
		>
			<div class="max-w-xl">
				<h2
					id="faq-heading"
					class="text-2xl font-bold tracking-tight text-base-content"
				>
					Frequently asked questions
				</h2>
				<p class="mt-4 text-base text-base-content/70">
					Questions. Frequently asked ones. Plus our answers. That's how FAQs
					work. If you can't find what you're looking for, you can always
					<a href="https://tray.io/documentation" class="font-medium text-info-content bg-info"
						>check out our documentation</a
					>
					and get your questions answered.
				</p>
			</div>
			<div class="flex h-96 space-x-4 mt-5">
				<img :src="meme" alt="" class="rounded-lg border border-base-300" />
        <img
					:src="meme2"
					alt=""
					class="rounded-lg border border-base-300"
				/>
       
			</div>

			<dl
				class="mt-12 grid grid-cols-1 gap-y-10 sm:mt-16 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3"
			>
				<div v-for="faq in faqs" :key="faq.id" v-if="false">
					<dt class="text-base font-medium text-base-content">
						{{ faq.question }}
					</dt>
					<dd class="mt-3 text-sm text-base-content/70">{{ faq.answer }}</dd>
				</div>
			</dl>
		</div>
	</section>
</template>

<script setup>
	import meme from '../../assets/images/seMeme.jpeg';
	import meme2 from '../../assets/images/docsMeme.jpeg';
	import meme3 from '../../assets/images/docsMeme2.jpeg';
	const faqs = [
		{
			id: 1,
			question: "What's the best thing about Switzerland?",
			answer:
				"I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
		},
		{
			id: 1,
			question: "What's the best thing about Switzerland?",
			answer:
				"I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
		},
		{
			id: 1,
			question: "What's the best thing about Switzerland?",
			answer:
				"I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
		},
		{
			id: 1,
			question: "What's the best thing about Switzerland?",
			answer:
				"I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
		},
		// More questions...
	];
</script>
