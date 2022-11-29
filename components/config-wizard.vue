<template>
  <div>
    <div class="mt-6 h-full divide-y divide-gray-200">
      <div class="items-center text-center">
        <h2 class="mt-6 text-3xl font-bold tracking-tight text-gray-900">
          Slack Authorization
        </h2>
        <p class="mt-2 text-sm text-gray-600">
          Give ACME permission to connect to your HubSpot account
        </p>
      </div>
      <form action="#" method="POST" class="space-y-12 my-8">
        <div class="space-y-12">
          <button
            type="submit"
            class="
              group
              relative
              flex
              w-full
              justify-center
              rounded-md
              border border-transparent
              bg-indigo-600
              py-2
              px-4
              my-12
              text-sm
              font-medium
              text-white
              hover:bg-indigo-700
              focus:outline-none
              focus:ring-2
              focus:ring-indigo-500
              focus:ring-offset-2
            "
          >
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1024px"
                height="1024px"
                viewBox="0 0 1024 1024"
                class="h-6 w-6 text-indigo-500 group-hover:text-indigo-400"
              >
                <path
                  fill="currentColor"
                  d="M409.4 128c-42.4 0-76.7 34.4-76.7 76.8 0 20.3 8.1 39.9 22.4 54.3 14.4 14.4 33.9 22.5 54.3 22.5h76.7v-76.8c0-42.3-34.3-76.7-76.7-76.8zm0 204.8H204.7c-42.4 0-76.7 34.4-76.7 76.8s34.4 76.8 76.7 76.8h204.6c42.4 0 76.7-34.4 76.7-76.8.1-42.4-34.3-76.8-76.6-76.8zM614 486.4c42.4 0 76.8-34.4 76.7-76.8V204.8c0-42.4-34.3-76.8-76.7-76.8-42.4 0-76.7 34.4-76.7 76.8v204.8c0 42.5 34.3 76.8 76.7 76.8zm281.4-76.8c0-42.4-34.4-76.8-76.7-76.8S742 367.2 742 409.6v76.8h76.7c42.3 0 76.7-34.4 76.7-76.8zm-76.8 128H614c-42.4 0-76.7 34.4-76.7 76.8 0 20.3 8.1 39.9 22.4 54.3 14.4 14.4 33.9 22.5 54.3 22.5h204.6c42.4 0 76.7-34.4 76.7-76.8.1-42.4-34.3-76.7-76.7-76.8zM614 742.4h-76.7v76.8c0 42.4 34.4 76.8 76.7 76.8 42.4 0 76.8-34.4 76.7-76.8.1-42.4-34.3-76.7-76.7-76.8zM409.4 537.6c-42.4 0-76.7 34.4-76.7 76.8v204.8c0 42.4 34.4 76.8 76.7 76.8 42.4 0 76.8-34.4 76.7-76.8V614.4c0-20.3-8.1-39.9-22.4-54.3-14.4-14.4-34-22.5-54.3-22.5zM128 614.4c0 20.3 8.1 39.9 22.4 54.3 14.4 14.4 33.9 22.5 54.3 22.5 42.4 0 76.8-34.4 76.7-76.8v-76.8h-76.7c-42.3 0-76.7 34.4-76.7 76.8z"
                />
              </svg>
            </span>
            Authenticate
          </button>
          <div class="mt-1">
            <SlackList
              class="
                block
                w-full
                appearance-none
                rounded-md
                py-2
                placeholder-gray-400
                focus:border-indigo-500 focus:outline-none focus:ring-indigo-500
                sm:text-sm
              "
            />
          </div>
        </div>
      </form>
      <div class="flex justify-end pt-8">
        <a
          href="/"
          type="button"
          class="
            rounded-md
            border border-gray-300
            bg-white
            py-2
            px-4
            text-sm
            font-medium
            text-slate-900
            shadow-sm
            hover:bg-slate-50
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            focus:ring-offset-2
          "
        >
          Cancel
        </a>
        <a
          href="/finish"
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
          Finish
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { LockClosedIcon } from "@heroicons/vue/20/solid";
</script>