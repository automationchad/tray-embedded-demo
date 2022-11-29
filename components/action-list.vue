<script setup>
const props = defineProps({
  enabled: Boolean,
  userId: String,
  solutionInstanceId: String,
  instanceName: String,
  webhookUrl: String,
  needsAction: Boolean,
  userToken: String,
  message: String,
});

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import {
  ArchiveBoxIcon,
  ArrowRightCircleIcon,
  ChevronDownIcon,
  GlobeAmericasIcon,
  DocumentDuplicateIcon,
  HeartIcon,
  PencilSquareIcon,
  PlayIcon,
  PauseIcon,
  TrashIcon,
  UserPlusIcon,
} from "@heroicons/vue/20/solid";
</script>


<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton
        class="
          inline-flex
          w-full
          justify-center
          bg-base-200
          px-2
          py-1
          text-sm
          font-medium
          shadow-sm
          transition-all
        "
      >
        Options
        <ChevronDownIcon class="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        class="
          absolute
          right-0
          z-10
          mt-2
          w-56
          bg-base-100
          origin-top-right
          shadow-lg
        "
      >
        <div class="py-1">
          <MenuItem v-slot="{ active }" v-if="!needsAction">
            <button
              @click="
                updateSolutionInstance(!enabled, solutionInstanceId, userToken)
              "
              :class="[
                active
                  ? 'text-base-content bg-base-200'
                  : 'text-base-content/60',
                'group flex items-center px-4 py-2 text-sm transition-colors w-full',
              ]"
            >
              <PauseIcon
                v-if="enabled && !needsAction"
                class="
                  mr-3
                  h-5
                  w-5
                  text-base-content/50
                  group-hover:text-base-content
                "
                aria-hidden="true"
              />
              <PlayIcon
                v-else
                class="
                  mr-3
                  h-5
                  w-5
                  text-base-content/50
                  group-hover:text-base-content
                "
                aria-hidden="true"
              />

              {{ enabled && !needsAction ? "Disable" : "Enable" }}
            </button>
          </MenuItem>
          
        </div>
        
        <div class="py-1">
          <MenuItem v-slot="{ active }">
            <button
              @click="editSolutionInstance(userId, solutionInstanceId)"
              :class="[
                active
                  ? 'text-base-content bg-base-200'
                  : 'text-base-content/60',
                'group flex items-center px-4 py-2 text-sm transition-colors w-full',
              ]"
            >
              <PencilSquareIcon
                class="
                  mr-3
                  h-5
                  w-5
                  text-base-content/50
                  group-hover:text-base-content
                "
                aria-hidden="true"
              />
              Edit
            </button>
          </MenuItem>
          <MenuItem v-slot="{ active }" v-if="!loading && enabled && webhookUrl && !needsAction">
            <button
              @click="sendPayload(webhookUrl)"
              :class="[
                active
                  ? 'text-base-content bg-base-200'
                  : 'text-base-content/60',
                'group flex items-center px-4 py-2 text-sm transition-colors cursor-pointer w-full',
              ]"
            >
              <GlobeAmericasIcon
                class="
                  mr-3
                  h-5
                  w-5
                  text-base-content/50
                  group-hover:text-base-content
                "
                aria-hidden="true"
              />
              <span class="btn-secondary px-1 rounded mr-1 font-mono">POST</span>
              Webhook
            </button>
          </MenuItem>
          <MenuItem v-slot="{ active }" v-if="loading && enabled && webhookUrl && !needsAction">
            <button
              type="button"
              :class="[
                active
                  ? 'text-base-content bg-base-200'
                  : 'text-base-content/60',
                `group flex items-center px-4 py-2 text-sm  w-full 
                
                transition
                ease-in-out
                duration-150
                cursor-not-allowed`,
              ]"
              disabled
            >
              <svg
                class="animate-spin -ml-1 mr-3 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing...
            </button>
          </MenuItem>
          
          <MenuItem v-slot="{ active }" v-if="!enabled">
            <button
              @click="deleteSolutionInstance(solutionInstanceId, userToken)"
              :class="[
                active
                  ? 'text-base-content bg-base-200'
                  : 'text-base-content/60',
                'group flex items-center px-4 py-2 text-sm transition-colors w-full',
              ]"
            >
              <TrashIcon
                class="
                  mr-3
                  h-5
                  w-5
                  text-base-content/50
                  group-hover:text-base-content
                "
                aria-hidden="true"
              />
              Delete
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>



<script>
export default {
  data() {
    return {
      loading: false,
      show: true,
      test: false,
    };
  },
  methods: {
    editSolutionInstance: async (userId, solutionInstanceId) => {
      const { authorizationCode } = await $fetch(`/api/auth?userId=${userId}`, {
        method: "post",
      });
      const url = `https://embedded.tray.io/external/solutions/willmarzella/configure/${solutionInstanceId}?code=${authorizationCode}`;
      window.open(url, "_blank", "width=500,height=500,scrollbars=no");
    },
    updateSolutionInstance: async (enabled, solutionInstanceId, userToken) => {
      await $fetch(
        `/api/instances/update?solutionInstanceId=${solutionInstanceId}&enabled=${enabled}&userToken=${userToken}`,
        { method: "post" }
      );
      location.reload();
    },
    deleteSolutionInstance: async (solutionInstanceId, userToken) => {
      await $fetch(
        `/api/instances/delete?solutionInstanceId=${solutionInstanceId}&userToken=${userToken}`,
        { method: "post" }
      );
      location.reload();
    },
    sendPayload(url) {
      let triggerUrl = this.test
        ? "https://f475adeb-2849-44cf-9870-4c970ab74721.trayapp.io"
        : url;
      this.loading = true;
      fetch(triggerUrl, {
        method: "POST",
        body: JSON.stringify({
          title: "foo",
          message: this.message,
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
      setTimeout(() => {
        this.loading = false;
        this.show = true;
      }, 2000);
    },
  },
};
</script>
