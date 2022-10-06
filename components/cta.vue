<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl py-16 sm:py-24">
      <div class="pb-16 xl:flex xl:items-center xl:justify-between">
        <div>
          <h1 class="text-4xl font-bold tracking-tight sm:text-5xl">
            <span class="text-gray-900">Everything you need for </span>
            <span class="text-indigo-600">${{ Math.round((total / 12)).toLocaleString() }} a month<p class="text-gray-400 text-sm font-normal tracking-normal mt-2">Billed yearly (${{total.toLocaleString()}})</p></span>
            
          </h1>
          <p class="mt-5 text-xl text-gray-500">
            Includes every feature we offer plus unlimited projects and
            unlimited users.
          </p>
        </div>
        <a
          href="#"
          class="
            mt-8
            inline-flex
            w-full
            items-center
            justify-center
            rounded-md
            border border-transparent
            bg-indigo-600
            px-5
            py-3
            text-base
            font-medium
            text-white
            hover:bg-indigo-700
            sm:mt-10 sm:w-auto
            xl:mt-0
          "
          >Get started today</a
        >
      </div>
      <div
        class="border-t border-gray-200 pt-16 xl:grid xl:grid-cols-3 xl:gap-x-8"
      >
        <div>
          <h2 class="text-lg font-semibold text-indigo-600">
            Everything you need
          </h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            All-in-one platform
          </p>
          <p class="mt-4 text-lg text-gray-500">
            Evolve at the speed and scale of your business with the leader in
            low-code automation.
          </p>
        </div>
        <div
          class="
            mt-4
            sm:mt-8
            md:mt-10 md:grid md:grid-cols-2 md:gap-x-8
            xl:col-span-2 xl:mt-0
          "
        >
          <ul role="list" class="divide-y divide-gray-200">
            <template
              v-for="(feature, featureIdx) in features.slice(0, 5)"
              :key="feature"
            >
              <li v-if="featureIdx === 0" class="flex py-4 md:py-0 md:pb-4">
                <CheckIcon
                  class="h-6 w-6 flex-shrink-0 text-green-500"
                  aria-hidden="true"
                />
                <span class="ml-3 text-base text-gray-500">{{ feature }}</span>
              </li>
              <li v-else class="flex py-4">
                <CheckIcon
                  class="h-6 w-6 flex-shrink-0 text-green-500"
                  aria-hidden="true"
                />
                <span class="ml-3 text-base text-gray-500">{{ feature }}</span>
              </li>
            </template>
          </ul>
          <ul
            role="list"
            class="
              divide-y divide-gray-200
              border-t border-gray-200
              md:border-t-0
            "
          >
            <template
              v-for="(feature, featureIdx) in features.slice(5)"
              :key="feature"
            >
              <li
                v-if="featureIdx === 0"
                class="flex py-4 md:border-t-0 md:py-0 md:pb-4"
              >
                <CheckIcon
                  class="h-6 w-6 flex-shrink-0 text-green-500"
                  aria-hidden="true"
                />
                <span class="ml-3 text-base text-gray-500">{{ feature }}</span>
              </li>
              <li v-else class="flex py-4">
                <CheckIcon
                  class="h-6 w-6 flex-shrink-0 text-green-500"
                  aria-hidden="true"
                />
                <span class="ml-3 text-base text-gray-500">{{ feature }}</span>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckIcon } from "@heroicons/vue/24/outline";

const features = [
  "Connect instantly to over 600+ apps.",
  "Eliminate manual work, without limits.",
  "Build as a team to innovate fast.",
  "Limit your risk with enterprise security and compliance.",
  "Scale elastically, without costly provisioning.",
  "Empower your business teams to automate.",
  "Scale integrations fully embedded in your app.",
  "Deliver bespoke integrations 10X faster.",
  "Transform integrations into a revenue driver.",
];
</script>

<script>
export default {
  props: ["total"],
  data() {},
};
</script>