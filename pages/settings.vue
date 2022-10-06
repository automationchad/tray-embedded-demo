
<template>
  <div class="flex h-full min-h-screen">
    <TransitionRoot as="template" :show="mobileMenuOpen">
      <Dialog
        as="div"
        class="relative z-40 lg:hidden"
        @close="mobileMenuOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-blue-gray-600 bg-opacity-75" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel
              class="
                relative
                flex
                w-full
                max-w-xs
                flex-1 flex-col
                bg-white
                focus:outline-none
              "
            >
              <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div class="absolute top-0 right-0 -mr-12 pt-4">
                  <button
                    type="button"
                    class="
                      ml-1
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      focus:outline-none
                      focus:ring-2
                      focus:ring-inset
                      focus:ring-white
                    "
                    @click="mobileMenuOpen = false"
                  >
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <div class="pt-5 pb-4">
                <div class="flex flex-shrink-0 items-center px-4">
                  <img
                    class="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600"
                    alt="Your Company"
                  />
                </div>
                <nav aria-label="Sidebar" class="mt-5">
                  <div class="space-y-1 px-2">
                    <a
                      v-for="item in navigation"
                      :key="item.name"
                      :href="item.href"
                      class="
                        group
                        flex
                        items-center
                        rounded-md
                        p-2
                        text-base
                        font-medium
                        text-blue-gray-600
                        hover:bg-blue-gray-50 hover:text-blue-gray-900
                      "
                    >
                      <component
                        :is="item.icon"
                        class="
                          mr-4
                          h-6
                          w-6
                          text-blue-gray-400
                          group-hover:text-blue-gray-500
                        "
                        aria-hidden="true"
                      />
                      {{ item.name }}
                    </a>
                  </div>
                </nav>
              </div>
              <div class="flex flex-shrink-0 border-t border-blue-gray-200 p-4">
                <a href="#" class="group block flex-shrink-0">
                  <div class="flex items-center">
                    <div>
                      <img
                        class="inline-block h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div class="ml-3">
                      <p
                        class="
                          text-base
                          font-medium
                          text-blue-gray-700
                          group-hover:text-blue-gray-900
                        "
                      >
                        Lisa Marie
                      </p>
                      <p
                        class="
                          text-sm
                          font-medium
                          text-blue-gray-500
                          group-hover:text-blue-gray-700
                        "
                      >
                        Account Settings
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </DialogPanel>
          </TransitionChild>
          <div class="w-14 flex-shrink-0" aria-hidden="true">
            <!-- Force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:flex lg:flex-shrink-0">
      <div class="flex w-20 flex-col">
        <div class="flex min-h-0 flex-1 flex-col overflow-y-auto bg-blue-600">
          <div class="flex-1">
            <div class="flex items-center justify-center bg-blue-800 py-4">
              <img
                class="h-8 w-auto"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUsXDTfAZFqZbeDEsMKviITu8SMgtd5xRZ00xjtuZG5Q&s"
                alt="Your Company"
              />
            </div>
            <nav
              aria-label="Sidebar"
              class="flex flex-col items-center space-y-3 py-6"
            >
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                class="
                  flex
                  items-center
                  rounded-lg
                  p-4
                  text-blue-200
                  hover:bg-blue-700
                "
              >
                <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                <span class="sr-only">{{ item.name }}</span>
              </a>
            </nav>
          </div>
          <div class="flex flex-shrink-0 pb-5">
            <!-- <a href="#" class="w-full flex-shrink-0">
              <img
                class="mx-auto block h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80"
                alt=""
              />
              <div class="sr-only">
                <p>Lisa Marie</p>
                <p>Account settings</p>
              </div>
            </a> -->
          </div>
        </div>
      </div>
    </div>

    <div class="flex min-w-0 flex-1 flex-col overflow-hidden">
      <!-- Mobile top navigation -->
      <div class="lg:hidden">
        <div
          class="
            flex
            items-center
            justify-between
            bg-blue-600
            py-2
            px-4
            sm:px-6
          "
        >
          <div>
            <img
              class="h-8 w-auto"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUsXDTfAZFqZbeDEsMKviITu8SMgtd5xRZ00xjtuZG5Q&s"
              alt="Your Company"
            />
          </div>
          <div>
            <button
              type="button"
              class="
                -mr-3
                inline-flex
                h-12
                w-12
                items-center
                justify-center
                rounded-md
                bg-blue-600
                text-white
                hover:bg-blue-700
                focus:outline-none
                focus:ring-2
                focus:ring-inset
                focus:ring-white
              "
              @click="mobileMenuOpen = true"
            >
              <span class="sr-only">Open sidebar</span>
              <Bars3Icon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <main class="flex flex-1 overflow-hidden">
        <div class="flex flex-1 flex-col overflow-y-auto xl:overflow-hidden">
          <!-- Breadcrumb -->
          <nav
            aria-label="Breadcrumb"
            class="border-b border-blue-gray-200 bg-white xl:hidden"
          >
            <div
              class="
                mx-auto
                flex
                max-w-3xl
                items-start
                py-3
                px-4
                sm:px-6
                lg:px-8
              "
            >
              <a
                href="#"
                class="
                  -ml-1
                  inline-flex
                  items-center
                  space-x-3
                  text-sm
                  font-medium
                  text-blue-gray-900
                "
              >
                <ChevronLeftIcon
                  class="h-5 w-5 text-blue-gray-400"
                  aria-hidden="true"
                />
                <span>Settings</span>
              </a>
            </div>
          </nav>

          <div class="flex flex-1 xl:overflow-hidden">
            <!-- Secondary sidebar -->
            <nav
              aria-label="Sections"
              class="
                hidden
                w-96
                flex-shrink-0
                border-r border-blue-gray-200
                bg-white
                xl:flex xl:flex-col
              "
            >
              <div
                class="
                  flex
                  h-16
                  flex-shrink-0
                  items-center
                  border-b border-blue-gray-200
                  px-6
                "
              >
                <p class="text-lg font-medium text-blue-gray-900">Settings</p>
              </div>
              <div class="min-h-0 flex-1 overflow-y-auto">
                <a
                  v-for="item in subNavigation"
                  @click="currentTab = item.name"
                  :key="item.name"
                  :href="item.href"
                  :class="[
                    currentTab == item.name
                      ? 'bg-blue-50 bg-opacity-50'
                      : 'hover:bg-blue-50 hover:bg-opacity-50',
                    'flex p-6 border-b border-blue-gray-200',
                  ]"
                  :aria-current="
                    item.name == currentTab ? 'page' : undefined
                  "
                >
                  <component
                    :is="item.icon"
                    class="-mt-0.5 h-6 w-6 flex-shrink-0 text-blue-gray-400"
                    aria-hidden="true"
                  />
                  <div class="ml-3 text-sm">
                    <p class="font-medium text-blue-gray-900">
                      {{ item.name }}
                    </p>
                    <p class="mt-1 text-blue-gray-500">
                      {{ item.description }}
                    </p>
                  </div>
                </a>
              </div>
            </nav>
            <div class="flex-1 xl:overflow-y-auto">
              <Account v-if="currentTab === 'Account'" />
              <Workflows v-else-if="currentTab === 'Workflows'" />
              <Addons v-else />
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  BanknotesIcon,
  Bars3Icon,
  BellIcon,
  BookmarkSquareIcon,
  CalculatorIcon,
  CogIcon,
  FireIcon,
  HomeIcon,
  InboxIcon,
  KeyIcon,
  MagnifyingGlassCircleIcon,
  PhotoIcon,
  SquaresPlusIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import { ChevronLeftIcon, UserCircleIcon } from "@heroicons/vue/20/solid";
import Workflows from "~~/components/workflows.vue";
import Addons from "~~/components/addons.vue";
import Account from "~~/components/account.vue";

const navigation = [{ name: "Home", href: "/", icon: HomeIcon }];
const subNavigation = [
  {
    name: "Account",
    href: "/settings/#account",
    description: "Details of the opportunity and customer problems",
    component: Account,
    icon: UserCircleIcon,
    current: true,
  },
  {
    name: "License Cost",
    description: "Cost lever configuration",
    href: "/settings#license",
    component: Workflows,
    icon: CalculatorIcon,
    current: true,
  },
  {
    name: "Add ons",
    description: "Configure the custom add ons for a given prospect",
    href: "/settings#addons",
    component: Addons,
    icon: SquaresPlusIcon,
    current: false,
  },
  //   {
  //     name: "Additional Resources",
  //     description:
  //       "Quis viverra netus donec ut auctor fringilla facilisis. Nunc sit donec cursus sit quis et.",
  //     href: "#",
  //     icon: MagnifyingGlassCircleIcon,
  //     current: false,
  //   },
];

const mobileMenuOpen = ref(false);
</script>

<script>
export default {
  data() {
    return {
      currentTab: Workflows,
    };
  },
};
</script>
