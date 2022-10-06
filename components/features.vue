<template>
  <div class="relative py-16 sm:py-24 lg:py-32" id="features">
    <div
      class="
        mx-auto
        max-w-md
        px-4
        text-center
        sm:max-w-3xl sm:px-6
        lg:max-w-7xl lg:px-8
      "
    >
      <div class="mt-12">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="feature in features" :key="feature.name" class="pt-6">
            <div class="flow-root rounded-lg bg-gray-50 border border-gray-300 px-6 pb-8">
              <div class="-mt-6">
                <div>
                  <span
                    class="
                      inline-flex
                      items-center
                      justify-center
                      rounded-md
                      bg-slate-800
                      p-3
                      shadow-lg
                    "
                  >
                    <component
                      :is="feature.icon"
                      class="h-6 w-6 text-cyan-300"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <h3
                  class="mt-8 text-lg font-medium tracking-tight text-gray-900"
                >
                  {{ feature.name }}
                </h3>
                <p class="mt-5 text-base text-gray-500">
                  {{ feature.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  ArrowPathIcon,
  BeakerIcon,
  ChatBubbleLeftIcon,
  CloudArrowUpIcon,
  CodeBracketIcon,
  CogIcon,
  ExclamationCircleIcon,
  GlobeAmericasIcon,
  LockClosedIcon,
  ServerIcon,
  ShieldCheckIcon,
} from "@heroicons/vue/24/outline";

const features = [
  {
    name: "Low Code",
    description:
      "Enables you to deliver customized, timely, and relevant integrations.",
    icon: CodeBracketIcon,
  },
  {
    name: "Robust Error Handling",
    description: "Ensure that data is accurately flowing through the systems.",
    icon: ExclamationCircleIcon,
  },
  {
    name: "Flexibility + Scalability",
    description:
      "Tray to grow with your tech stack and allow you to edit existing workflows.",
    icon: BeakerIcon,
  },
  {
    name: "Universal Connectors",
    description: "Integrate any system with an SOAP, REST or GraphQL API.",
    icon: GlobeAmericasIcon,
  },
  {
    name: "Database encryption",
    description:
      "Encrypt of all of your sensitive data, authentications and tokens.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Customer Support",
    description:
      "Guidance and support options designed to ensure your success.",
    icon: ChatBubbleLeftIcon,
  },
];
</script>