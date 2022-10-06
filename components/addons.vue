<template>
  <div class="mx-auto max-w-3xl py-10 px-4 sm:px-6 lg:py-12 lg:px-8">
    <form class="divide-y-blue-gray-200 mt-6 space-y-8 divide-y">
      <div class="sm:col-span-6">
        <h2 class="text-xl font-medium text-blue-gray-900">Add ons</h2>
        <p class="mt-1 text-sm text-blue-gray-500">
          This information will be displayed publicly so be careful what you
          share.
        </p>
      </div>
      <div class="divide-y divide-gray-200 pt-6">
        <div class="">
          <ul role="list" class="mt-2 divide-y divide-gray-200">
            <SwitchGroup
              v-for="addOn in addOns"
              :key="addOn.name"
              as="li"
              class="flex items-center justify-between py-4"
            >
              <div class="flex flex-col">
                <SwitchLabel
                  as="p"
                  class="text-sm font-medium text-gray-900"
                  passive
                  >{{ addOn.name }}</SwitchLabel
                >
                <SwitchDescription class="text-sm text-gray-500">{{
                  addOn.description
                }}</SwitchDescription>
              </div>
              <Switch
                @click="
                  saveValue(addOn.id, addOn.enabled, addOn.price),
                    (addOn.enabled = !addOn.enabled)
                "
                :class="[
                  addOn.enabled ? 'bg-teal-500' : 'bg-gray-200',
                  'relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2',
                ]"
              >
                <span
                  aria-hidden="true"
                  :class="[
                    addOn.enabled ? 'translate-x-5' : 'translate-x-0',
                    'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
                  ]"
                />
              </Switch>
            </SwitchGroup>
          </ul>
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
</template>

<script setup>
import { ref } from "vue";
</script>

<script>
export default {
  data() {
    return {
      addOns: [
        {
          name: "SSO",
          id: "sso",
          description:
            "Single sign on integrates into your existing SAML based authentication infrastructure",
          price: 3000,
          enabled: localStorage.getItem("sso") === "true" || localStorage.getItem("tier") === "Enterprise",
        },
        {
          name: "Multi Region Hosting",
          id: "regions",
          description:
            "For customers who have a strict requirement that their data must be hosted in the USA, EU or APAC.",
          price: 6000,
          enabled: localStorage.getItem("regions") === "true" || localStorage.getItem("tier") === "Enterprise",
        },
        {
          name: "Log Streaming",
          id: "log_streaming",
          description:
            "Programmatically export Tray Platform log data to access it in third-party monitoring services",
          price: 6000,
          enabled: localStorage.getItem("log_streaming") === "true" || localStorage.getItem("tier") === "Enterprise",
        },
        {
          name: "Custom Log Retention",
          id: "log_retention",
          description:
            "Flexible log data retention policies designed to fit your requirements",
          price: 6000,
          enabled: localStorage.getItem("log_retention") === "true" || localStorage.getItem("tier") === "Enterprise",
        },
        {
          name: "On premise connectivty",
          id: "on-prem",
          description:
            "Build workflows to connect apps in your data center with your cloud apps",
          price: 12000,
          enabled: localStorage.getItem("on-prem") === "true" || localStorage.getItem("tier") === "Enterprise",
        },
        {
          name: "HIPAA Compliance",
          id: "hipaa",
          description:
            "Meets HIPAA standards for data processing, security and incident notification",
          price: 9000,
          enabled: localStorage.getItem("hipaa") === "true" || localStorage.getItem("tier") === "Enterprise",
        },
      ],
    };
  },
  methods: {
    saveValue(id, value, price) {
      localStorage.setItem(id, !value);
    },
  },
};
</script>