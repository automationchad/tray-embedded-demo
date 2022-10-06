<template>
  <div
    class="relative bg-bottom bg-no-repeat"
    style="
      background-image: url('https://tailwindcss.com/_next/static/media/hero@75.b2469a49.jpg');
    "
  >
    <div
      class="hidden sm:absolute sm:inset-y-0 sm:block sm:h-full sm:w-full"
      aria-hidden="true"
    ></div>
    <div class="relative pt-10 pb-16 sm:pb-24 min-h-screen">
      <Popover>
        <div class="mx-auto max-w-7xl px-4 sm:px-6">
          <nav
            class="
              relative
              flex
              items-center
              justify-between
              sm:h-10
              md:justify-center
            "
            aria-label="Global"
          >
            <div
              class="
                flex flex-1
                items-center
                md:absolute md:inset-y-0 md:left-0
              "
            >
              <div class="flex w-full items-center justify-between md:w-auto">
                <div class="">
                  <div class="flex items-center justify-center">
                    <span class="sr-only">Your Company</span>
                    <Logo class="h-14 w-auto mr-10" />
                    <div class="mr-10">+</div>
                    <img :src="logoURL" alt="" class="h-8" />
                  </div>
                </div>
                <div class="-mr-2 flex items-center md:hidden">
                  <PopoverButton
                    class="
                      inline-flex
                      items-center
                      justify-center
                      rounded-md
                      bg-gray-50
                      p-2
                      text-gray-400
                      hover:bg-gray-100 hover:text-gray-500
                      focus:outline-none
                      focus:ring-2
                      focus:ring-inset
                      focus:ring-indigo-500
                    "
                  >
                    <span class="sr-only">Open main menu</span>
                    <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
            </div>
            <div class="hidden md:flex md:space-x-10">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                class="font-medium text-gray-500 hover:text-gray-900"
                >{{ item.name }}</a
              >
            </div>
            <div
              class="
                hidden
                md:absolute
                md:inset-y-0
                md:right-0
                md:flex
                md:items-center
                md:justify-end
              "
            >
              <NuxtLink
                type="button"
                to="/settings/#account"
                class="
                  inline-flex
                  shadow
                  items-center
                  text-gray-900
                  bg-gradient-to-r
                  from-teal-200
                  to-lime-200
                  hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200
                  focus:ring-4 focus:outline-none focus:ring-lime-200
                  dark:focus:ring-teal-700
                  font-medium
                  rounded-lg
                  text-sm
                  px-5
                  py-2.5
                  text-center
                  mr-2
                  mb-2
                "
              >
                <AdjustmentsVerticalIcon class="h-4 w-4 mr-1" />Configure
              </NuxtLink>
            </div>
          </nav>
        </div>

        <transition
          enter-active-class="duration-150 ease-out"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="duration-100 ease-in"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <PopoverPanel
            focus
            class="
              absolute
              inset-x-0
              top-0
              z-10
              origin-top-right
              transform
              p-2
              transition
              md:hidden
            "
          >
            <div
              class="
                overflow-hidden
                rounded-lg
                bg-white
                shadow-md
                ring-1 ring-black ring-opacity-5
              "
            >
              <div class="flex items-center justify-between px-5 pt-4">
                <div>
                  <img
                    class="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </div>
                <div class="-mr-2">
                  <PopoverButton
                    class="
                      inline-flex
                      items-center
                      justify-center
                      rounded-md
                      bg-white
                      p-2
                      text-gray-400
                      hover:bg-gray-100 hover:text-gray-500
                      focus:outline-none
                      focus:ring-2
                      focus:ring-inset
                      focus:ring-indigo-500
                    "
                  >
                    <span class="sr-only">Close menu</span>
                    <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="px-2 pt-2 pb-3">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  class="
                    block
                    rounded-md
                    px-3
                    py-2
                    text-base
                    font-medium
                    text-gray-700
                    hover:bg-gray-50 hover:text-gray-900
                  "
                  >{{ item.name }}</a
                >
              </div>
              <a
                href="#"
                class="
                  block
                  w-full
                  bg-gray-50
                  px-5
                  py-3
                  text-center
                  font-medium
                  text-indigo-600
                  hover:bg-gray-100
                "
                >Log in</a
              >
            </div>
          </PopoverPanel>
        </transition>
      </Popover>

      <main
        class="
          mx-auto
          mt-32
          max-w-7xl
          px-4
          sm:mt-48
          items-center
          flex flex-col
          justify-center
        "
      >
        <div class="text-center mb-3">
          <h1
            class="
              text-4xl
              font-bold
              tracking-tight
              text-gray-900
              sm:text-5xl
              md:text-6xl
            "
          >
            <span class="block xl:inline">Struggling with</span>
            {{ " " }}
            <span class="block xl:inline gradient">{{ pains }}?</span>
          </h1>
          <p
            class="
              mx-auto
              mt-3
              max-w-md
              text-base text-gray-500
              sm:text-lg
              md:mt-5 md:max-w-3xl md:text-xl
            "
          >
            Despite {{ currentProcess }}, {{ companyName }} can’t {{ goal }}.

            <br /><br />
          </p>
          <div
            class="mx-auto mt-12 max-w-md sm:flex sm:justify-center md:mt-12"
          >
            <h1 class="text-3xl font-bold">That ends today.</h1>
          </div>
          <!-- <div class="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
            <div class="rounded-md shadow">
              <a
                href="#"
                class="
                  flex
                  w-full
                  items-center
                  justify-center
                  rounded-md
                  border border-transparent
                  bg-indigo-600
                  px-8
                  py-3
                  text-base
                  font-medium
                  text-white
                  hover:bg-indigo-700
                  md:py-4 md:px-10 md:text-lg
                "
                >Get started</a
              >
            </div>
            <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="#"
                class="
                  flex
                  w-full
                  items-center
                  justify-center
                  rounded-md
                  border border-transparent
                  bg-white
                  px-8
                  py-3
                  text-base
                  font-medium
                  text-indigo-600
                  hover:bg-gray-50
                  md:py-4 md:px-10 md:text-lg
                "
                >Live demo</a
              >
            </div>
          </div> -->
        </div>
        <Features class="mt-24" />
      </main>
    </div>
    <Slider />
  </div>
</template>

<style scoped>
.gradient {
  background: linear-gradient(43deg, #4158d0 0%, #c850c0 46%, #ffcc70 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import {
  Bars3Icon,
  XMarkIcon,
  WrenchIcon,
  AdjustmentsVerticalIcon,
} from "@heroicons/vue/24/outline";

const navigation = [
  { name: "Product", href: "#features" },
  { name: "Plans", href: "#pricing" },
  { name: "Breakdown", href: "#breakdown" },
  { name: "FAQ", href: "#faqs" },
];
</script>

<script>
export default {
  data() {
    return {
      currentProcess: localStorage.getItem("current_process") ?? "test",
      companyName: localStorage.getItem("companyName") ?? "test",
      logoURL: localStorage.getItem("companyLogo") ?? "",
      goal: localStorage.getItem("goal") ?? "test",
      pains: localStorage.getItem("pains") ?? "test",
      metrics: localStorage.getItem("metrics") ?? "test",
    };
  },
};
</script>