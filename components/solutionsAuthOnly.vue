<template>
  <div class="grid grid-cols-1 gap-4">
    <Disclosure
      as="div"
      v-slot="{ open }"
      v-for="person in people"
      :key="person.email"
      class="
        rounded-lg
        border border-base-300
        bg-base-100
        px-6
        py-5
        shadow-sm
        hover:border-gray-400
      "
    >
      <div class="flex items-center space-x-3">
        <div class="flex-shrink-0">
          <img class="h-10 w-10 rounded-full" :src="person.imageUrl" alt="" />
        </div>
        <a class="min-w-0 flex-1">
          <div href="#" class="focus:outline-none">
            <span class="inset-0" aria-hidden="true" />
            <p class="text-sm font-medium text-base-content">{{ person.name }}</p>
            <p class="truncate text-sm text-base-content/70">{{ person.role }}</p>
          </div>
        </a>
        <button
          type="button"
          class="
            inline-flex
            items-center
            rounded-full
            border border-transparent
            btn-primary
            px-3.5
            py-2
            text-sm
            font-medium
            leading-4
            shadow-sm
          "
        >
          {{ person.authed ? "Change Auth" : "Provide Auth" }}
        </button>
        <DisclosureButton
          type="button"
          class="
            inline-flex
            items-center
            rounded-full
            border border-transparent
            px-3.5
            py-2
            text-sm
            font-medium
            leading-4
          "
          ><ChevronUpIcon
            :class="[open ? 'rotate-180' : '', 'h-4 w-4 transition-transform']"
        /></DisclosureButton>
      </div>
      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-out"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
        ><DisclosurePanel
          ><SolutionInstancesAuthOnly
            :solutionId="person.solutionId"
            :authed="person.authed" /></DisclosurePanel
      ></transition>
    </Disclosure>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronUpIcon } from "@heroicons/vue/20/solid";
const people = [
  {
    name: "Salesforce",
    solutionId: "sfdc",
    authed: true,
    email: "Integrations to your favourite CRM",
    role: "Integrations to your favourite CRM",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Slack",
    solutionId: "slack",
    authed: false,
    email: "Connect with team members easily",
    role: "Connect with team members easily",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  // More people...
];
</script>