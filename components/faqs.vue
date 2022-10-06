<template>
  <section aria-labelledby="faq-heading" class="bg-white" id="faqs">
    <div class="max-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="max-w-xl">
        <h2 id="faq-heading" class="text-2xl font-bold tracking-tight text-gray-900">Frequently asked questions</h2>
        <p class="mt-4 text-base text-gray-500">Questions. Frequently asked ones. Plus our answers. That's how FAQs work. If you can't find what you're looking for, you can always <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">send us an email</a> with your enquiry.</p>
      </div>

      <dl class="mt-12 grid grid-cols-1 gap-y-10 sm:mt-16 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3">
        <div v-for="faq in faqs" :key="faq.id">
          <dt class="text-base font-medium text-gray-900">{{ faq.question }}</dt>
          <dd class="mt-3 text-sm text-gray-500">{{ faq.answer }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/24/outline";

const faqs = [
  {
    question: "What software can the Tray Platform connect to?",
    answer:
      "The Tray Platform can connect to practically any software that has an API - including REST-based and SOAP-based APIs. We can even process huge CSV files for customers that use software that has limited API support. Customers really value the Tray Platform’s ability to connect to databases and extract important data from them within their workflows.",
  },
  {
    question: "What do you mean by full API access?",
    answer:
      "The Tray Platform is good at getting all the data available from an API. Some vendors struggle to expose and make use of custom fields and other hard-to-access data values. With the Tray Platform, you can easily access any business you need.",
  },
  {
    question: "What is an event?",
    answer:
      "An event is a change in a data value in one or more of your software applications. As soon as the Tray Platform detects a change in the data value, it processes it in real-time. Some other vendors are only able to use polling triggers and can only check for changes of data every five minutes or so. Real-time event processing is an essential distinction for customers who require time-sensitive automations.",
  },
  {
    question: "What is a workflow?",
    answer:
      "Workflows are a key part of the Tray Platform. If you are building an integration to pass data between different services, you'll be using a workflow to do it. Workflows can have just a few steps or hundreds of steps. It depends on the process you are trying to automate.",
  },
  {
    question: "What is an enabled workflow?",
    answer:
      "When a workflow is enabled, the workflow is now able to be run. We like to give our customers the ability to play around with non-enabled workflows as a way to explore the potential of process automation.",
  },
  {
    question: "What is a billable workflow?",
    answer:
      "Any enabled workflow or manually triggered workflow located in a production workspace with tasks processed in the last 30 days.",
  },
  {
    question: "What is a non-billable workflow?",
    answer:
      "All callable and alerting workflows. Any workflow located in sandbox workspaces.",
  },
  {
    question: "What if I go over my allowed number of workflows?",
    answer:
      "If you do go above the number of workflows in your package, we will not stop any of your workflows. The next time your contract comes up for renewal, you will be upgraded based on the new number of enabled workflows that you are using.",
  },
  {
    question: "What is the fair use policy?",
    answer: "500,000 tasks/ workflow/ month",
  },
];
</script>