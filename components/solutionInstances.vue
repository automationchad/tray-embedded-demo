<script setup>
import { SparklesIcon } from "@heroicons/vue/24/outline";
import moment from "moment";
</script>

<template>
  <div class="bg-base-100">
    <div class="mt-6 flow-root ">
      <ul
        role="list"
        class="-my-5 divide-y divide-gray-200 dark:divide-[#133a48]"
      >
        <li
          v-for="(solution, idx) in instances"
          :key="solution.node.id"
          class="py-8"
        >
          <div class="flex items-center space-x-4">
            <div
              class="
                flex-shrink-0
                rounded-lg
                overflow-hidden
                h-8
                w-8
                flex
                items-center
                justify-center
              "
            >
              <!-- <img class="" :src="solution.node.customFields.find(o => o.key === 'icon').value" alt="" /> -->
            </div>
            <div class="min-w-0 flex-1">
              <div class="flex items-center">
                <p
                  class="
                    truncate
                    text-sm
                    font-medium
                    text-base-content
                    mr-2
                  "
                >
                  {{ solution.node.name }}
                </p>

                <span
                  v-if="
                    solution.node.enabled &&
                    !solution.node.solutionVersionFlags
                      .requiresUserInputToUpdateVersion
                  "
                  class="
                    inline-flex
                    items-center
                    rounded-full
                    badge-success
                    px-2.5
                    py-0.5
                    text-xs
                    font-medium
                  "
                  >Enabled</span
                >
                <span
                  v-else-if="
                    solution.node.solutionVersionFlags
                      .requiresUserInputToUpdateVersion
                  "
                  class="
                    inline-flex
                    items-center
                    rounded-full
                    bg-green-100
                    dark:bg-[#35360A]
                    dark:border
                    dark:border-[#E3EB45]
                    dark:text-[#E3EB45]
                    px-2.5
                    py-0.5
                    text-xs
                    font-medium
                    text-green-800
                  "
                  >Reauthenticate</span
                >
                <span
                  v-else
                  class="
                    inline-flex
                    items-center
                    rounded-full
                    
                    px-2.5
                    py-0.5
                    text-xs
                    font-medium
                    badge-error
                  "
                  >Disabled</span
                >
              </div>
              <p class="truncate text-xs text-gray-500 dark:text-[#bfdbea]">
                {{ "Created " + moment(solution.node.created).fromNow() }}
              </p>
            </div>
            <div class="space-x-2 flex items-center">
              <ActionList
                :enabled="solution.node.enabled"
                :userId="userId"
                :solutionInstanceId="solution.node.id"
                :instanceName="solution.node.name"
                :webhook-url="solution.node.workflows.edges[0].node.triggerUrl"
                :user-token="userToken"
                :needs-action="
                  solution.node.solutionVersionFlags
                    .requiresUserInputToUpdateVersion
                "
                :message="message"
              />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>



<script>
export default {
  props: ["instances", "userId", "userToken", "message"],
};
</script>