<template>
  <div>
    <div class="mt-6 flow-root">
      <ul role="list" class="-my-4">
        <li
          v-for="person in people.filter((o) => o.solutionId === solutionId)"
          :key="person.handle"
          class="py-4"
        >
          <div class="flex items-center space-x-4">
            <div class="min-w-0 flex-1">
              <p class="truncate text-sm font-medium text-base-content">
                {{ person.name }}
              </p>
            </div>
            <div v-if="person.enabled && authed" class="space-x-2">
              <a
                href="#"
                class="
                  inline-flex
                  items-center
                  rounded-full
                  px-2.5
                  py-0.5
                  text-xs
                  font-medium
                  leading-5
                  text-neutral
                  hover:underline
                "
                >Delete</a
              >
              <a
                href="#"
                class="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  text-primary
                  bg-primary/30
                  hover:bg-primary/60
                  border-primary
                  px-2.5
                  py-0.5
                  text-xs
                  font-medium
                  leading-5
                  shadow-sm
                "
                >Disable</a
              >
            </div>
            <div v-else class="space-x-2">
              <button
                :disabled="!authed"
                class="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  text-primary
                  bg-primary/30
                  border-primary
                  hover:bg-primary/60
                  px-2.5
                  py-0.5
                  text-xs
                  font-medium
                  leading-5
                  shadow-sm
                  disabled:bg-gray-400
                  disabled:text-gray-700
                  disabled:border-gray-700
                "
              >
                <LockClosedIcon v-if="!authed" class="h-4 w-4" />{{
                  !authed ? "" : "Enable"
                }}
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { LockClosedIcon } from "@heroicons/vue/20/solid";
const people = [
  {
    name: "Salesforce Lead Gen Tracking",
    solutionId: "sfdc",
    enabled: Math.random() > 0.5,
    handle: "leonardkrasner",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Salesforce Account Health Monitor ",
    solutionId: "sfdc",
    enabled: Math.random() > 0.5,
    handle: "leonardkrasner",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Weekly Team Slack Stats",
    solutionId: "slack",
    enabled: false,
    handle: "leonardkrasner",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];
</script>

<script>
export default {
  props: ["solutionId", "authed"],
};
</script>