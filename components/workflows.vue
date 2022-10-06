<template>
  <div>
    <div class="mx-auto max-w-3xl py-10 px-4 sm:px-6 lg:py-12 lg:px-8">
      <!-- <h1 class="text-3xl font-bold tracking-tight text-blue-gray-900">
        Numbers
      </h1> -->
      <form class="divide-y-blue-gray-200 mt-6 space-y-8 divide-y">
        <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
          <div class="sm:col-span-6">
            <h2 class="text-xl font-medium text-blue-gray-900">
              License Costs
            </h2>
            <p class="mt-1 text-sm text-blue-gray-500">
              Enter or select values in all cells to calculate price.
            </p>
          </div>

          <div class="sm:col-span-5">
            <label
              for="first-name"
              class="block text-sm font-medium text-blue-gray-900"
              >Package</label
            >
            <div>
              <select
                id="location"
                name="location"
                v-model="tier"
                class="
                  mt-1
                  block
                  w-full
                  rounded-md
                  border-gray-300
                  py-2
                  pl-3
                  pr-10
                  text-base
                  focus:border-indigo-500
                  focus:outline-none
                  focus:ring-indigo-500
                  sm:text-sm
                "
              >
                <option>Professional</option>
                <option selected="">Team</option>
                <option>Enterprise</option>
              </select>
            </div>
          </div>
          <div class="sm:col-span-1">
            <label
              for="last-name"
              class="block text-sm font-medium text-blue-gray-900"
              >Discount</label
            >
            <div class="relative mt-1 rounded-md shadow-sm">
              <input
                type="number"
                name="discount"
                id="discount"
                class="
                  block
                  w-full
                  rounded-md
                  border-gray-300
                  pr-10
                  focus:border-indigo-500 focus:ring-indigo-500
                  sm:text-sm
                "
                placeholder="10"
              />
              <div
                class="
                  pointer-events-none
                  absolute
                  inset-y-0
                  right-0
                  flex
                  items-center
                  pr-3
                "
              >
                <ReceiptPercentIcon
                  class="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          <div class="sm:col-span-5">
            <label
              for="first-name"
              class="block text-sm font-medium text-blue-gray-900"
              >Workflows</label
            >
            <div>
              <input
                type="number"
                v-model="workflows"
                min="1"
                max="400"
                name="workflows"
                id="workflows"
                class="
                  block
                  w-full
                  rounded-md
                  border-gray-300
                  focus:border-indigo-500 focus:ring-indigo-500
                  sm:text-sm
                  mt-1
                  py-2
                  pl-3
                  text-base
                  focus:outline-none
                "
                placeholder="10"
              />
            </div>
          </div>

          <div class="sm:col-span-1">
            <label
              for="last-name"
              class="block text-sm font-medium text-blue-gray-900"
              >Discount</label
            >
            <div class="relative mt-1 rounded-md shadow-sm">
              <input
                type="number"
                name="discount"
                id="discount"
                class="
                  block
                  w-full
                  rounded-md
                  border-gray-300
                  pr-10
                  focus:border-indigo-500 focus:ring-indigo-500
                  sm:text-sm
                "
                placeholder="10"
              />
              <div
                class="
                  pointer-events-none
                  absolute
                  inset-y-0
                  right-0
                  flex
                  items-center
                  pr-3
                "
              >
                <ReceiptPercentIcon
                  class="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
          <div class="sm:col-span-5">
            <label
              for="first-name"
              class="block text-sm font-medium text-blue-gray-900"
              >Workspaces</label
            >
            <div>
              <input
                type="number"
                v-model="workspaces"
                :disabled="tier === 'Enterprise'"
                min="1"
                max="400"
                name="workflows"
                id="workflows"
                class="
                  block
                  w-full
                  rounded-md
                  border-gray-300
                  focus:border-indigo-500 focus:ring-indigo-500
                  sm:text-sm
                  mt-1
                  py-2
                  pl-3
                  text-base
                  focus:outline-none
                  disabled:opacity-50
                "
                placeholder="10"
              />
            </div>
          </div>

          <div class="sm:col-span-1">
            <label
              for="last-name"
              class="block text-sm font-medium text-blue-gray-900"
              >Discount</label
            >
            <div class="relative mt-1 rounded-md shadow-sm opacity-50">
              <input
                type="number"
                disabled
                name="discount"
                id="discount"
                class="
                  block
                  w-full
                  rounded-md
                  border-gray-300
                  pr-10
                  focus:border-indigo-500 focus:ring-indigo-500
                  sm:text-sm
                   disabled:border-rose-500 disabled:placeholder:text-rose-600
                  peer
                "
                placeholder="10"
              />
              <div
                class="
                  pointer-events-none
                  absolute
                  inset-y-0
                  right-0
                  flex
                  items-center
                  pr-3
                  text-gray-400
                  peer-disabled:text-rose-700
                "
              >
                <ReceiptPercentIcon
                  class="h-5 w-5 "
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
          <div class="sm:col-span-5">
            <label
              for="first-name"
              class="block text-sm font-medium text-blue-gray-900"
              >Support Plan</label
            >
            <div>
              <select
                id="location"
                name="location"
                v-model="support"
                class="
                  mt-1
                  block
                  w-full
                  rounded-md
                  border-gray-300
                  py-2
                  pl-3
                  pr-10
                  text-base
                  focus:border-indigo-500
                  focus:outline-none
                  focus:ring-indigo-500
                  sm:text-sm
                "
              >
                <option selected="">Standard</option>
                <option>Premium</option>
              </select>
            </div>
          </div>
          <div class="sm:col-span-1 ">
            <label
              for="last-name"
              class="block text-sm font-medium text-blue-gray-900"
              >Discount</label
            >
            <div class="relative mt-1 rounded-md shadow-sm opacity-50">
              <input
                type="number"
                name="discount"
                id="discount"
                disabled
                class="
                  block
                  w-full
                  rounded-md
                  border-gray-300
                  pr-10
                  focus:border-indigo-500 focus:ring-indigo-500
                  sm:text-sm
                  disabled:border-rose-500 disabled:placeholder:text-rose-600
                  peer
                "
                placeholder="0"
              />
              <div
                class="
                  pointer-events-none
                  absolute
                  inset-y-0
                  right-0
                  flex
                  items-center
                  pr-3
                  peer-disabled:text-rose-700
                "
              >
                <ReceiptPercentIcon class="h-5 w-5" aria-hidden="true" />
              </div>
            </div>
          </div>
          <div class="sm:col-span-5">
            <label
              for="first-name"
              class="block text-sm font-medium text-blue-gray-900"
              >Onboarding</label
            >
            <div>
              <select
                id="location"
                v-model="onboarding"
                name="location"
                class="
                  mt-1
                  block
                  w-full
                  rounded-md
                  border-gray-300
                  py-2
                  pl-3
                  pr-10
                  text-base
                  focus:border-indigo-500
                  focus:outline-none
                  focus:ring-indigo-500
                  sm:text-sm
                "
              >
                <option selected="">Starter</option>
                <option>Foundations I</option>
                <option>Foundations II</option>
              </select>
            </div>
          </div>

          <div class="sm:col-span-1">
            <label
              for="last-name"
              class="block text-sm font-medium text-blue-gray-900"
              >Discount</label
            >
            <div class="relative mt-1 rounded-md shadow-sm opacity-50">
              <input
                type="number"
                name="discount"
                id="discount"
                disabled
                class="
                  block
                  w-full
                  rounded-md
                  border-gray-300
                  pr-10
                  focus:border-indigo-500 focus:ring-indigo-500
                  sm:text-sm
                  disabled:border-rose-500 disabled:placeholder:text-rose-600
                  peer
                "
                placeholder="0"
              />
              <div
                class="
                  pointer-events-none
                  absolute
                  inset-y-0
                  right-0
                  flex
                  items-center
                  pr-3
                  peer-disabled:text-rose-700
                "
              >
                <ReceiptPercentIcon class="h-5 w-5" aria-hidden="true" />
              </div>
            </div>
          </div>
          <div class="sm:col-span-5">
            <label
              for="first-name"
              class="block text-sm font-medium text-blue-gray-900"
              >Success Services</label
            >
            <div>
              <select
                id="location"
                v-model="success"
                name="location"
                class="
                  mt-1
                  block
                  w-full
                  rounded-md
                  border-gray-300
                  py-2
                  pl-3
                  pr-10
                  text-base
                  focus:border-indigo-500
                  focus:outline-none
                  focus:ring-indigo-500
                  sm:text-sm
                "
              >
                <option selected>N/A</option>
                <option>Advisory</option>
                <option>Advisory + Delivery</option>
              </select>
            </div>
          </div>

          <div class="sm:col-span-1">
            <label
              for="last-name"
              class="block text-sm font-medium text-blue-gray-900"
              >Discount</label
            >
            <div class="relative mt-1 rounded-md shadow-sm opacity-50">
              <input
                type="number"
                name="discount"
                :disabled="true"
                id="discount"
                class="
                  block
                  w-full
                  rounded-md
                  border-gray-300
                  pr-10
                  focus:border-indigo-500 focus:ring-indigo-500
                  sm:text-sm
                  disabled:border-rose-500 disabled:placeholder:text-rose-600
                  peer
                "
                placeholder="0"
              />
              <div
                class="
                  pointer-events-none
                  absolute
                  inset-y-0
                  right-0
                  flex
                  items-center
                  pr-3
                  text-gray-400
                  peer-disabled:text-rose-700
                "
              >
                <ReceiptPercentIcon class="h-5 w-5" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-end pt-8">
          <button
            type="button"
            class="
              rounded-md
              border border-gray-300
              bg-white
              py-2
              px-4
              text-sm
              font-medium
              text-blue-gray-900
              shadow-sm
              hover:bg-blue-gray-50
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              focus:ring-offset-2
            "
          >
            Cancel
          </button>
          <button
            @click="saveValues()"
            class="
              ml-3
              inline-flex
              justify-center
              rounded-md
              border border-transparent
              bg-blue-600
              py-2
              px-4
              text-sm
              font-medium
              text-white
              shadow-sm
              hover:bg-blue-700
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              focus:ring-offset-2
            "
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ReceiptPercentIcon } from "@heroicons/vue/24/outline";
</script>

<script>
export default {
  data() {
    return {
      workflows: localStorage.getItem("workflows") ?? 0,
      workspaces: localStorage.getItem("workspaces") ?? 0,
      tier: localStorage.getItem("tier") ?? "Professional",
      support: localStorage.getItem("support") ?? "Standard",
      onboarding: localStorage.getItem("onboarding") ?? "Starter",
      success: localStorage.getItem("success") ?? "N/A",
    };
  },

  methods: {
    saveValues() {
      localStorage.setItem("workflows", this.workflows);
      localStorage.setItem("workspaces", this.workspaces);
      localStorage.setItem("tier", this.tier);
      localStorage.setItem("support", this.support);
      localStorage.setItem("onboarding", this.onboarding);
      localStorage.setItem("success", this.success);
    },
  },
};
</script>