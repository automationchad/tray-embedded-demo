<template>
  <header class="relative z-50 pb-11 lg:pt-11">
    <div
      class="
        flex flex-wrap
        items-center
        justify-center
        sm:justify-between
        lg:flex-nowrap
        mx-auto
        max-w-7xl
        px-4
        sm:px-6
        lg:px-8
      "
    >
      <div class="lg:mt-0 lg:grow lg:basis-0">
        <Logo class="h-12 w-auto text-slate-900" />
      </div>
      <div
        class="
          order-first
          -mx-4
          flex flex-auto
          basis-full
          overflow-x-auto
          whitespace-nowrap
          border-b border-blue-600/10
          py-4
          font-mono
          text-sm text-blue-600
          sm:-mx-6
          lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0
        "
      >
        <div class="mx-auto flex items-center gap-4 px-4">
          <p>
            <time dateTime="2022-04-04">04</time>-
            <time dateTime="2022-04-06">06 of April, 2022</time>
          </p>
          <svg
            aria-hidden="true"
            viewBox="0 0 6 6"
            class="h-1.5 w-1.5 overflow-visible fill-current stroke-current"
          >
            <path
              d="M3 0L6 3L3 6L0 3Z"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
          <p>Los Angeles, CA</p>
        </div>
      </div>
      <div
        class="
          hidden
          sm:mt-10 sm:flex
          lg:mt-0 lg:grow lg:basis-0 lg:justify-end
        "
      >
        <NuxtLink
          class="
            inline-flex
            justify-center
            rounded-2xl
            bg-blue-600
            px-4
            py-1
            text-base
            font-semibold
            text-white
            hover:bg-blue-500
            focus:outline-none
            focus-visible:outline-2
            focus-visible:outline-offset-2
            focus-visible:outline-blue-500
            active:text-white/70
          "
          to="/settings"
        >
          <WrenchIcon class="h-5 w-5 mr-1" />Configure
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup>
import { WrenchIcon } from "@heroicons/vue/24/outline";
</script>