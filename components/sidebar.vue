<script setup lang="ts">
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosurePanel,
  DisclosureButton,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

import {
  Bars3Icon,
  CalendarIcon,
  HomeIcon,
  ChartBarIcon,
  FolderIcon,
  InboxIcon,
  UsersIcon,
  CodeBracketSquareIcon,
  CalculatorIcon,
  BanknotesIcon,
  MapIcon,
  PlayCircleIcon,
  CubeTransparentIcon,
  PlusIcon,
  MinusIcon,
  QuestionMarkCircleIcon,
  ArrowLeftOnRectangleIcon,
  MegaphoneIcon,
  SquaresPlusIcon,
  UserGroupIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";

const client = useSupabaseClient();
// const { data: customers } = await useAsyncData(
//   "customers",
//   async () => {
//     return await client
//       .from("customers")
//       .select("id, first_name, last_name, tray_id")
//       .eq("id", user.value.id);
//   },
//   { transform: (result) => result.body }
// );

// console.log(customers.value);
// if (!customers.value[0].tray_id) {
//   console.log("Doesn't exist in Tray!!!");
// }

const props = defineProps({
  user: Object,
});

const navigation = [
  {
    name: "Overview",
    icon: HomeIcon,
    current: true,
    href: "/overview",
  },
  {
    name: "Products",
    icon: HomeIcon,
    current: true,
     children: [
      { name: "Integration Manager", href: "https://app.tray.io" },
      { name: "Native", href: "/native" },
      { name: "Connectivity API", href: "https://api.tray.io/core/v1/docs" },
    ],
  },
  {
    name: "Frontend",
    icon: UsersIcon,
    current: false,
    children: [
      { name: "Config Wizard", href: "/native/frontend/config-wizard" },
      { name: "Auth-Only", href: "/native/frontend/auth-only" },
      { name: "Custom", href: "/native/frontend/custom" },
    ],
  },
  {
    name: "Deployments",
    icon: FolderIcon,
    current: false,
    children: [
      { name: "Catalogue", href: "/native/deployments/catalogue" },
      { name: "Auth-Only", href: "/native/deployments/auth-only" },
      { name: "In App", href: "/native/deployments/in-app" },
    ],
  },
];

const secondaryNavigation = [
  { name: "Help", href: "#", icon: QuestionMarkCircleIcon },
  { name: "Logout", href: "#", icon: ArrowLeftOnRectangleIcon },
];

const sidebarOpen = ref(true);
</script>


<template>
  <div>
    <div class="hidden lg:flex lg:flex-shrink-1 h-full">
      <div class="flex w-8xl flex-col">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div
          class="
            flex
            min-h-full
            flex-1 flex-col
            border-r
            bg-base-200
            border-base-300
          "
        >
          <div class="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
            <nav class="mt-5 flex-1" aria-label="Sidebar">
              <div class="flex flex-shrink-0 items-center px-4">
                <img
                  class="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=purple&shade=600"
                  alt="Easywire"
                />
              </div>

              <div class="mt-5 flex-grow px-2">
                <div class="space-y-1">
                  <template v-for="item in navigation" :key="item.name">
                    <div v-if="!item.children">
                      <a
                        :href="item.href"
                        :class="[
                          item.current
                            ? ' text-base-content'
                            : 'bg-white dark:bg-base-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                          'group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md',
                        ]"
                      >
                        <!-- <component
                          :is="item.icon"
                          :class="[
                            item.current
                              ? 'text-gray-500'
                              : 'text-gray-400 group-hover:text-gray-500',
                            'mr-3 flex-shrink-0 h-6 w-6',
                          ]"
                          aria-hidden="true"
                        /> -->
                        {{ item.name }}
                      </a>
                    </div>
                    <Disclosure
                      as="div"
                      v-else
                      class="space-y-1"
                      v-slot="{ open }"
                    >
                      <DisclosureButton
                        :class="[
                          open
                            ? 'bg-base-200 text-base-content'
                            : ' text-base-content/60 hover:text-base-content',
                          'group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md',
                        ]"
                      >
                        <!-- <component
                          :is="item.icon"
                          class="
                            mr-3
                            h-6
                            w-6
                            flex-shrink-0
                            text-gray-400
                            group-hover:text-gray-500
                          "
                          aria-hidden="true"
                        /> -->
                        <span class="flex-1">{{ item.name }}</span>
                        <PlusIcon
                          v-if="!open"
                          :class="[
                            open ? 'text-base-content' : 'text-base-content/60',
                            'ml-3 h-4 w-4 flex-shrink-0 transform transition-colors duration-150 ease-in-out group-hover:text-base-content',
                          ]"
                        />
                        <MinusIcon
                          v-else
                          :class="[
                            open ? 'text-base-content' : 'text-base-content/60',
                            'ml-3 h-4 w-4 flex-shrink-0 transform transition-colors duration-150 ease-in-out group-hover:text-base-content',
                          ]"
                        />
                      </DisclosureButton>
                      <DisclosurePanel class="space-y-1">
                        <DisclosureButton
                          v-for="subItem in item.children"
                          :key="subItem.name"
                          as="a"
                          :href="subItem.href"
                          class="
                            group
                            flex
                            w-full
                            items-center
                            rounded-md
                            py-2
                            pl-4
                            pr-2
                            text-sm
                            font-medium
                            hover:text-base-content
                            text-base-content/40
                          "
                          >{{ subItem.name }}</DisclosureButton
                        >
                      </DisclosurePanel>
                    </Disclosure>
                  </template>
                </div>
              </div>
            </nav>
          </div>
          <div class="flex flex-shrink-0 border-t p-4 border-base-300">
            <a href="#" class="group block w-full flex-shrink-0">
              <div class="flex items-center">
                <div class="rounded-full h-9 w-9 relative overflow-hidden">
                  <img
                    class="h-full object-cover"
                    src="https://media.newyorker.com/photos/5909521c2179605b11ad334b/16:9/w_1280,c_limit/tony-soprano-1024-580.jpg"
                    alt=""
                  />
                </div>
                <div class="ml-3">
                  <p
                    class="
                      text-sm
                      font-medium
                      text-base-content
                    "
                  >
                    {{ user.first_name + " " + user.last_name }}
                  </p>
                  <button
                    v-if="user"
                    @click="client.auth.signOut()"
                    class="
                      text-xs
                      font-medium
                      text-base-content/50
                      
                    "
                  >
                    Logout
                  </button>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


