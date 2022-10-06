<template>
  <div>
    <div class="mx-auto max-w-3xl py-10 px-4 sm:px-6 lg:py-12 lg:px-8">
      <form class="divide-y-blue-gray-200 mt-6 space-y-8 divide-y">
        <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
          <div class="sm:col-span-6">
            <h2 class="text-xl font-medium text-blue-gray-900">Deal details</h2>
            <p class="mt-1 text-sm text-blue-gray-500">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>

          <div class="sm:col-span-3">
            <label
              for="first-name"
              class="block text-sm font-medium text-blue-gray-900"
              >First name</label
            >
            <input
              type="text"
              v-model="firstName"
              name="first-name"
              id="first-name"
              autocomplete="given-name"
              class="
                mt-1
                block
                w-full
                rounded-md
                border-blue-gray-300
                text-blue-gray-900
                shadow-sm
                focus:border-blue-500 focus:ring-blue-500
                sm:text-sm
              "
            />
          </div>

          <div class="sm:col-span-3">
            <label
              for="last-name"
              class="block text-sm font-medium text-blue-gray-900"
              >Last name</label
            >
            <input
              type="text"
              v-model="lastName"
              name="last-name"
              id="last-name"
              autocomplete="family-name"
              class="
                mt-1
                block
                w-full
                rounded-md
                border-blue-gray-300
                text-blue-gray-900
                shadow-sm
                focus:border-blue-500 focus:ring-blue-500
                sm:text-sm
              "
            />
          </div>
          <div class="sm:col-span-6">
            <label
              for="company-name"
              class="block text-sm font-medium text-blue-gray-900"
              >Company name</label
            >
            <input
              type="text"
              v-model="companyName"
              name="company-name"
              id="company-name"
              autocomplete="company-name"
              class="
                mt-1
                block
                w-full
                rounded-md
                border-blue-gray-300
                text-blue-gray-900
                shadow-sm
                focus:border-blue-500 focus:ring-blue-500
                sm:text-sm
              "
            />
          </div>
          <div class="sm:col-span-6">
            <label
              for="company-name"
              class="block text-sm font-medium text-blue-gray-900"
              >Logo URL</label
            >
            <div class="mt-1 flex rounded-md shadow-sm">
              <span
                class="
                  inline-flex
                  items-center
                  rounded-l-md
                  border border-r-0 border-gray-300
                  bg-gray-50
                  px-3
                  text-gray-500
                  sm:text-sm
                "
                >http://</span
              >
              <input
                type="url"
                v-model="companyLogo"
                name="company-logo"
                id="company-logo"
                class="
                  block
                  w-full
                  min-w-0
                  flex-1
                  rounded-none rounded-r-md
                  border-gray-300
                  px-3
                  py-2
                  focus:border-indigo-500 focus:ring-indigo-500
                  sm:text-sm
                "
                placeholder="www.example.com"
              />
            </div>
          </div>
          <div class="sm:col-span-6">
            <blockquote class="mt-10 bg-gray-50 p-8 rounded-lg">
              <div
                class="
                  mx-auto
                  max-w-3xl
                  text-center text-2xl
                  font-medium
                  leading-9
                  text-gray-900
                "
              >
                <p>
                  &ldquo;Despite {{ currentProcess }}, {{ companyName }} can’t
                  {{ goal }}, which means {{ pains }}, as measured by
                  {{ metrics }}.&rdquo;
                </p>
              </div>
              <footer class="mt-8">
                <div class="md:flex md:items-center md:justify-center">
                  <div class="md:flex-shrink-0">
                    <img
                      class="mx-auto h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div
                    class="
                      mt-3
                      text-center
                      md:mt-0 md:ml-4 md:flex md:items-center
                    "
                  >
                    <div class="text-base font-medium text-gray-900">
                      {{ firstName }} {{ lastName }}
                    </div>

                    <svg
                      class="mx-1 hidden h-5 w-5 text-indigo-600 md:block"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M11 0h3L9 20H6l5-20z" />
                    </svg>

                    <div class="text-base font-medium text-gray-500">
                      CEO, {{ companyName }}
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
          <div class="sm:col-span-6">
            <label
              for="url"
              class="block text-sm font-medium text-blue-gray-900"
              >Current Process</label
            >
            <input
              type="text"
              v-model="currentProcess"
              name="url"
              id="url"
              placeholder="What they've tried to do to fix it?"
              class="
                mt-1
                block
                w-full
                rounded-md
                border-blue-gray-300
                text-blue-gray-900
                shadow-sm
                focus:border-blue-500 focus:ring-blue-500
                sm:text-sm
              "
            />
          </div>
          <div class="sm:col-span-6">
            <label
              for="url"
              class="block text-sm font-medium text-blue-gray-900"
              >Plan</label
            >
            <input
              type="text"
              v-model="goal"
              name="url"
              id="url"
              placeholder="What are they trying to do?"
              class="
                mt-1
                block
                w-full
                rounded-md
                border-blue-gray-300
                text-blue-gray-900
                shadow-sm
                focus:border-blue-500 focus:ring-blue-500
                sm:text-sm
              "
            />
          </div>
          <div class="sm:col-span-6">
            <label
              for="url"
              class="block text-sm font-medium text-blue-gray-900"
              >Pains</label
            >
            <input
              type="text"
              v-model="pains"
              name="url"
              id="url"
              placeholder="What is the impact of not solving X?"
              class="
                mt-1
                block
                w-full
                rounded-md
                border-blue-gray-300
                text-blue-gray-900
                shadow-sm
                focus:border-blue-500 focus:ring-blue-500
                sm:text-sm
              "
            />
          </div>
          <div class="sm:col-span-6">
            <label
              for="url"
              class="block text-sm font-medium text-blue-gray-900"
              >Success</label
            >
            <input
              type="text"
              v-model="metrics"
              name="success"
              id="success"
              placeholder="How is it measured?"
              class="
                mt-1
                block
                w-full
                rounded-md
                border-blue-gray-300
                text-blue-gray-900
                shadow-sm
                focus:border-blue-500 focus:ring-blue-500
                sm:text-sm
              "
            />
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
            type="submit"
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentProcess: localStorage.getItem("current_process") ?? "",
      companyLogo: localStorage.getItem("companyLogo") ?? "",
      firstName: localStorage.getItem("fname") ?? "",
      lastName: localStorage.getItem("lname") ?? "",
      companyName: localStorage.getItem("companyName") ?? "",
      goal: localStorage.getItem("goal") ?? "",
      pains: localStorage.getItem("pains") ?? "",
      metrics: localStorage.getItem("metrics") ?? "",
    };
  },
  methods: {
    saveValues() {
      localStorage.setItem("current_process", this.currentProcess);
      localStorage.setItem("companyName", this.companyName);
      localStorage.setItem("companyLogo", this.companyLogo);
      localStorage.setItem("goal", this.goal);
      localStorage.setItem("pains", this.pains);
      localStorage.setItem("metrics", this.metrics);
      localStorage.setItem("fname", this.firstName);
      localStorage.setItem("lname", this.lastName);
    },
  },
};
</script>