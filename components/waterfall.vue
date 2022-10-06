<template>
  <div
    class="
      flex
      min-h-full
      mx-auto
      max-w-2xl
      px-4
      text-center
      sm:px-6
      lg:max-w-7xl lg:px-8
      py-16
    "
  >
    <div class="flex flex-1 flex-col">
      <div class="z-0 flex flex-1">
        <main class="z-0 flex-1 focus:outline-none xl:order-last">
          <!-- Start main area-->
          <div
            class="py-6 px-4 sm:px-6 lg:px-8 bg-center bg-cover h-full"
            style="
              background-image: url('https://images.unsplash.com/photo-1601388152430-4ad0f14c0788?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3300&q=80');
            "
          >
            <div
              class="
                h-full
                rounded-lg
                flex flex-col
                items-center
                bg-white/80
                border border-white/80
                backdrop-blur
                justify-center
                p-1
              "
            >
              <div class="absolute top-2 right-2">
                <button
                  class="bg-white text-black rounded-full p-2"
                  @click="updateValue(workflows)"
                >
                  <ArrowPathIcon class="h-5 w-5" />
                </button>
              </div>
              <div class="flex-col flex items-start">
                <div class="flex items-end">
                  <h1 class="text-6xl font-bold">
                    {{ workflowCost.toLocaleString() }}
                  </h1>
                  <p class="text-base">.00</p>
                  <h3 class="text-xl ml-1">USD</h3>
                </div>
                <div class="flex items-center">
                  <p class="text-gray-600 mr-2">Billed annually</p>
                  <span
                    class="text-xs text-lime-600 bg-lime-100 rounded-full px-1"
                  >
                    ${{
                      Math.round(
                        workflowCost /
                          12 /
                          (effectiveWorkflows > 0 ? effectiveWorkflows : 1)
                      )
                    }}
                    per wf/mo
                  </span>
                </div>
                <div class="min-w-[400px]">
                  <div class="flex justify-between mt-6">
                    <div class="flex flex-col">
                      <div class="flex items-center">
                        <div class="font-bold flex mr-1">Workflows</div>
                      </div>
                    </div>

                    <div class="mb-4 flex items-center relative">
                      <div class="ml-3">{{ workflows }}</div>
                      <div class="h-2 w-2 right-0">
                        <div
                          class="
                            animate-ping
                            absolute
                            inline-flex
                            h-2
                            w-2
                            rounded-full
                            bg-rose-500
                            opacity-75
                          "
                        ></div>
                        <div
                          class="
                            absolute
                            inline-flex
                            rounded-full
                            h-2
                            w-2
                            bg-rose-600
                          "
                        ></div>
                      </div>
                    </div>
                  </div>
                  <input
                    type="range"
                    v-model.number="workflows"
                    min="1"
                    max="400"
                    class="w-full range mb-4"
                    id="slider"
                  />
                  <div class="flex items-center justify-end">
                    <div
                      class="
                        text-yellow-800
                        bg-yellow-200
                        flex
                        items-center
                        px-2
                        rounded-full
                      "
                    >
                      <BoltIcon class="h-4 w-4" /><span>{{
                        abbreviatedNumber(workflows * 500000) + " "
                      }}</span>
                    </div>
                    <span class="text-sm ml-1"> monthly task limit</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- End main area -->
        </main>

        <aside class="w-96 border-r border-gray-200 flex items-start">
          <!-- Start secondary column (hidden on smaller screens) -->
          <div class="py-12 px-4 sm:px-6 lg:px-8">
            <div class="h-full rounded-lg">
              <Table />
              <p class="text-sm text-gray-400 mt-6">
                Workflows are true’d up quarterly based on the number of active
                integrations. <br /><br />Pricing will be prorated (i.e. Adding
                WF #4 6 months into a 12 month contract will be $1000 not
                $2000).
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<style scoped>
.range {
  -webkit-appearance: none;
  vertical-align: middle;
  outline: none;
  border: none;
  padding: 0;
  background: none;
}

.range::-webkit-slider-runnable-track {
  background-color: #ffffff6d;
  height: 6px;
  border-radius: 3px;
  border: 1px solid transparent;
}

.range[disabled]::-webkit-slider-runnable-track {
  border: 1px solid #d7dbdd;
  background-color: transparent;
  opacity: 0.4;
}

.range::-moz-range-track {
  background-color: #d7dbdd;
  height: 6px;
  border-radius: 3px;
  border: none;
}

.range::-ms-track {
  color: transparent;
  border: none;
  background: none;
  height: 6px;
}

.range::-ms-fill-lower {
  background-color: #d7dbdd;
  border-radius: 3px;
}

.range::-ms-fill-upper {
  background-color: #d7dbdd;
  border-radius: 3px;
}

.range::-moz-range-thumb {
  border-radius: 20px;
  height: 18px;
  width: 18px;
  border: none;
  background: none;
  background-color: #4d2ab6;
}

.range:active::-moz-range-thumb {
  outline: none;
}

.range::-webkit-slider-thumb {
  -webkit-appearance: none !important;
  border-radius: 100%;
  background-color: #4d2ab6;
  height: 18px;
  width: 18px;
  margin-top: -7px;
}

.range[disabled]::-webkit-slider-thumb {
  background-color: transparent;
  border: 1px solid #d7dbdd;
}

.range:active::-webkit-slider-thumb {
  outline: none;
}

.range::-ms-thumb {
  border-radius: 100%;
  background-color: #606670;
  height: 18px;
  width: 18px;
  border: none;
}

.range:active::-ms-thumb {
  border: none;
}
</style>

<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  Bars3Icon,
  CalendarIcon,
  ArrowPathIcon,
  HomeIcon,
  MagnifyingGlassCircleIcon,
  MapIcon,
  MegaphoneIcon,
  UserGroupIcon,
  BoltIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";

const sidebarOpen = ref(false);

const abbreviatedNumber = (number) => {
  const SI_SYMBOL = ["", "k", "M", "B", "T", "P", "E"];
  const tier = (Math.log10(Math.abs(number)) / 3) | 0;
  if (tier === 0) {
    return number;
  }
  const suffix = SI_SYMBOL[tier];
  const scale = 10 ** (tier * 3);
  const scaled = number / scale;
  const { length } = scaled.toFixed(1).toString();
  const precision = length > 3 ? 0 : 1;
  return scaled.toFixed(precision) + suffix;
};
</script>

<script>
export default {
  data() {
    return {
      workflows: localStorage.getItem("workflows") ?? 3,
      selectedPlan: localStorage.getItem("tier") ?? "Professional",
      billingCycle: "Yearly",
    };
  },
  computed: {
    effectiveWorkflows() {
      let includedWorkflows = 0;
      if (this.selectedPlan === "Professional") includedWorkflows = 3;
      else if (this.selectedPlan === "Team") includedWorkflows = 5;
      else includedWorkflows = 10;
      const result = this.workflows - includedWorkflows;
      return result;
    },
    workflowCost() {
      let includedWorkflows = 0;
      if (this.selectedPlan === "Professional") {
        includedWorkflows = 3;
      } else if (this.selectedPlan === "Team") {
        includedWorkflows = 5;
      } else {
        includedWorkflows = 10;
      }
      let effectiveWorkflows = this.workflows - includedWorkflows;
      if (this.workflows <= includedWorkflows) {
        return 0;
      } else if (effectiveWorkflows <= 10) {
        return 2000 * effectiveWorkflows;
      } else if (effectiveWorkflows <= 30) {
        return (effectiveWorkflows - 10) * 1000 + 10 * 2000;
      } else if (effectiveWorkflows <= 100) {
        return (effectiveWorkflows - 30) * 500 + 20 * 1000 + 10 * 2000;
      } else if (effectiveWorkflows <= 200) {
        return (
          (effectiveWorkflows - 100) * 125 + 70 * 500 + 20 * 1000 + 10 * 2000
        );
      } else if (effectiveWorkflows <= 400) {
        return (
          (effectiveWorkflows - 200) * 100 +
          100 * 125 +
          70 * 500 +
          20 * 1000 +
          10 * 2000
        );
      } else {
        return (
          (effectiveWorkflows - 400) * 90 +
          200 * 100 +
          100 * 125 +
          70 * 500 +
          20 * 1000 +
          10 * 2000
        );
      }
    },
  },
  methods: {
    updateValue(value) {
      localStorage.setItem("workflows", value);
    },
  },
};
</script>