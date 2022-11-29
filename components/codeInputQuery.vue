<script setup>
	import {
		ClipboardIcon,
		ClipboardDocumentCheckIcon,
	} from '@heroicons/vue/24/solid';
</script>

<template>
	<div>
		<div
			class="relative z-10 -ml-10 col-span-3 bg-[#194C5F] border border-base-content/20 rounded-xl shadow-lg xl:ml-0"
		>
			<div class="relative flex text-slate-400 text-sm leading-6">
				<div
					class="mt-2 flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center"
				>
					<div
						class="dark:border-[#06F3B9] dark:bg-[#1D2B25] dark:text-[#06F3B9] bg-sky-900 px-2 rounded border border-sky-300 font-mono font-bold items-center"
					>
						POST
					</div>
				</div>
				<div class="flex-auto flex pt-2 rounded-tr-xl overflow-hidden pl">
					<div
						class="flex-auto -mr-px bg-[#133B49] items-center rounded-tl pt-1.5 pl-4 font-mono text-white text-base"
					>
						https://tray.io/graphql
					</div>
				</div>
				<div class="absolute top-2 right-0 h-8 flex items-center pr-4">
					<div class="flex -mr-2 relative">
						<button
							:disabled="copied"
							@click="copyToClipboard(code)"
							type="button"
							class="text-[#8fbfd7] hover:text-white transition-colors items-center justify-center"
						>
							<ClipboardIcon
								:class="[
									copied ? 'opacity-0' : 'opacity-100',
									'h-5 w-5 transition-opacity',
								]"
								v-show="!copied"
							/>
							<ClipboardDocumentCheckIcon
								:class="[
									copied ? 'opacity-100' : 'opacity-0',
									'h-5 w-5 transition-opacity',
								]"
								v-show="copied"
							/>
						</button>
					</div>
				</div>
			</div>
			<div
				class="w-full max-h-64 overflow-y-auto inline-grid relative"
				style="scrollbar-color: auto"
			>
				<pre
					class="text-base leading-6 text-slate-50 text-left max-w-2xl break-all pl-3 pr-6 line-numbers"
				>
        <syntax :code="code" :lang="lang"/>
      </pre>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['code', 'lang', 'type'],
		data() {
			return {
				copied: false,
			};
		},
		methods: {
			copyToClipboard(text) {
				navigator.clipboard.writeText(text).then(
					() => {
						this.copied = !this.copied;
						console.log('Async: Copying to clipboard was successful!');
					},
					function (err) {
						console.error('Async: Could not copy text: ', err);
					}
				);
				setTimeout(() => {
					this.copied = !this.copied;
				}, 2000);
			},
		},
	};
</script>
