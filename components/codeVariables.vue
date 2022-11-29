<template>
  <div>
    <div
      class="
        relative
        z-10
        -ml-10
        col-span-3
        bg-slate-800
        rounded-xl
        shadow-lg
        xl:ml-0
        dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10
      "
    >
      <div class="relative flex text-slate-400 text-sm leading-6">
        <div
          class="
            mt-2
            flex-none
            text-sky-300
            border-t border-b border-t-transparent border-b-sky-300
            px-4
            py-1
            flex
            items-center
          "
        >
          <div
            class="
              text-sky-300
              bg-sky-900
              px-2
              rounded
              border border-sky-300
              font-mono
              items-center
            "
          >
            {}
          </div>
        </div>
        <div class="flex-auto flex pt-2 rounded-tr-xl overflow-hidden pl">
          <div
            class="
              flex-auto
              -mr-px
              bg-slate-700/50
              border border-slate-500/30
              rounded-tl
              py-1
              pl-4
              font-mono
              text-green-300
            "
          >
            Variables
          </div>
        </div>
        <div class="absolute top-2 right-0 h-8 flex items-center pr-4">
          <div class="relative flex -mr-2">
            <button type="button" class="text-slate-500 hover:text-slate-400">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
                class="w-8 h-8"
              >
                <path
                  d="M13 10.75h-1.25a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H19"
                ></path>
                <path
                  d="M18 12.25h-4a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1ZM13.75 16.25h4.5M13.75 19.25h4.5"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="relative">
        <pre class="text-sm leading-6 text-slate-50 flex p-9">
<syntax :code="code" :lang="lang"/></pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["code", 'lang'],
  data() {
    return {};
  },
};
</script>