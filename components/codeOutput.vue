<template>
  <div>
    <div
      class="
        relative
        z-10
        -ml-10
        col-span-3
        bg-[#0A1C26]
        border border-info
        rounded-xl
        shadow-lg
        xl:ml-0
        
      "
    >
      <div class="relative flex text-slate-400 text-sm leading-6">
        <div
          class="
            mt-2
            flex-none
            text-sky-300
            border-t border-b border-t-transparent border-b-info
            px-4
            py-1
            flex
            items-center
          "
        >
          <div class="text-sky-300 px-2 rounded font-mono items-center">{}</div>
        </div>
        <div class="flex-auto flex pt-2 rounded-tr-xl overflow-hidden pl">
          <div
            class="
              flex-auto
              -mr-px
              bg-[#041318]
              rounded-tl
              text-base
              py-1
              pl-4
              font-mono
              text-slate-50
            "
          >
            Response
          </div>
        </div>
        <div class="absolute top-2 right-0 h-8 flex items-center pr-4">
          <div class="relative flex -mr-2">
            <button
              type="button"
              class="
                border border-[#133a48]
                rounded
                bg-[#0a1d26]
                text-[#bedbeb]
                px-1
                font-mono font-bold
                text-sm
              "
            >
              JSON
            </button>
          </div>
        </div>
      </div>
      <div class="w-full max-h-[600px] overflow-y-auto inline-grid relative">
        <pre
          class="
            text-base
            m-0
            leading-6
            text-slate-50 text-left
            max-w-5xl
            break-all
            scroll-pr-6
            pl-3
            py-3
            line-numbers
          "
        >
<syntax :code="code" :lang="lang" class=""/></pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["code", "lang"],
  data() {
    return {};
  },
};
</script>