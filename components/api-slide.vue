<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <div class="fixed inset-0" />

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="
              pointer-events-none
              fixed
              inset-y-0
              right-0
              flex
              max-w-full
              pl-10
              sm:pl-16
            "
          >
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <DialogPanel class="pointer-events-auto w-screen max-w-2xl">
                <div
                  class="
                    flex
                    h-full
                    flex-col
                    overflow-y-scroll
                    bg-[#190D1F]
                    py-6
                    shadow-xl
                  "
                >
                  <div class="px-4 sm:px-6">
                    <div class="flex items-start justify-between">
                      <DialogTitle class="text-lg font-medium text-gray-900"
                        >Panel title</DialogTitle
                      >
                      <div class="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          class="
                            rounded-md
                            bg-white
                            text-gray-400
                            hover:text-gray-500
                            focus:outline-none
                            focus:ring-2
                            focus:ring-indigo-500
                            focus:ring-offset-2
                          "
                          @click="open = false"
                        >
                          <span class="sr-only">Close panel</span>
                          <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="relative mt-6 flex-1 px-4 sm:px-6">
                    <!-- Replace with your content -->
                    <div class="px-4 sm:px-6">
                      <div
                          class="
                            overflow-y-auto
                            border-l border-gray-200
                            
                            xl:flex xl:flex-col
                          "
                        >
                          <!-- Start secondary column (hidden on smaller screens) -->
                          <div
                            class="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8"
                          >
                            <div class="h-full rounded-lg">
                              <div class="mb-3">
                                <div class="flex items-center space-x-4 my-4">
                                  <h1
                                    class="
                                      text-white text-3xl
                                      font-mono font-bold
                                    "
                                  >
                                    customer
                                  </h1>
                                  <div
                                    class="
                                      font-mono
                                      text-xs text-[#b4b1ff]
                                      bg-[#190c56]
                                      rounded
                                    "
                                  >
                                    query
                                  </div>
                                </div>
                                <p class="text-[#eccfdf]">
                                  Create a new external user of your Embedded
                                  application.
                                </p>
                              </div>
                              <code-block />
                              <Output />
                            </div>
                          </div>
                          <!-- End secondary column -->
                        </div>
                    </div>
                    <!-- /End replace -->
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";

const open = ref(true);
</script>