<script setup>
import {
  BookmarkIcon,
  CheckIcon,
  InformationCircleIcon,
  ExclamationTriangleIcon,
  ChevronUpDownIcon,
} from "@heroicons/vue/20/solid";
import { ref } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
const people = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
  { id: 7, name: "Caroline Schultz" },
  { id: 8, name: "Mason Heaney" },
  { id: 9, name: "Claudie Smitham" },
  { id: 10, name: "Emil Schaefer" },
];

const selected = ref(people[3]);

const user = useSupabaseUser();
const client = useSupabaseClient();

console.log(user);

// Get user in database

const { data: customers } = await useAsyncData(
  "customers",
  async () => {
    return await client
      .from("customers")
      .select("id, first_name, last_name, tray_id")
      .eq("id", user.value.id);
  },
  { transform: (result) => result.body }
);

// Check to see if exists in Tray
const { data: tray_user } = await useAsyncGql({
  operation: "GetUserByExId",
  variables: {
    externalUserId: user.value.id,
  },
});

const trayUser = tray_user.value.users.edges;
console.log(trayUser);

let userId;

// If exists then store userId
if (trayUser) {
  userId = trayUser[0].node.id;
  // If doesn't exist then create Tray user
} else {
  const { data: new_tray_user } = await useAsyncGql({
    operation: "createExternalUser",
    variables: {
      name: `${customers.value[0].first_name} ${customers.value[0].last_name}`,
      externalUserId: `${customers.value[0].id}`,
      isTestUser: false,
    },
  });
  userId = new_tray_user.createExternalUser.userId;
}

// Create user token

let { data: userToken } = await useAsyncGql({
  operation: "authorizeUser",
  variables: {
    userId,
  },
});

userToken = userToken.value.authorize.accessToken;

// // List all solutions
let { data: solutions } = await useAsyncGql("getAllSolutions");
solutions = solutions.value.viewer.solutions.edges;

// // Get Solution Instances

let { data: instances } = await useAsyncGql("getAllInstances", {
  ownerId: userId,
});
instances = instances.value.viewer.solutionInstances.edges;

let operations = [
  {
    title: "authentication",
    subtitle: `An External User of your Embedded application is somebody who has Instances of your Solutions set up and configured for their own use.

Your users should be stored in your own user database, and when they are created using the createExternalUser API they will be stored in your Tray Embedded account.

They must be linked between these two databases using a common externalUserId, which is created in your database and then passed as a parameter when using the createExternalUser API.`,
    description:
      "This will return the userId in the result which you should be storing in your own database",
    type: "mutation",
    input: `mutation($externalUserId: String!, $name: String!) {
  createExternalUser(input: { name: $name, externalUserId: $externalUserId }) {
      userId
  }
}`,
    variables: `{
	"name": "myCustomersName",
	"externalUserId":"my-apps-internal-user-id"
}`,
    output: `{
 "data": {
  "createExternalUser": {
   "userId": "fbb96559-xxxx-xxxx-xxxx-5552c2d2fca4"
  }
 }
}`,
  },

  {
    title: "recordType",
    description:
      "Which returns a token to perform user specific GraphQL calls in Tray",
    subtitle: "The userId can then be used to create an accessToken",
    type: "mutation",
    input: `mutation  ($userId: ID!){
  authorize(input: {
      userId: $userId
  }) {
    accessToken
  }
}`,
    variables: `{
	"userId": "b3034e80-8f89-4a22-9689-9e07919495fc"
    }`,
    output: `{
	"data": {
		"authorize": {
			"accessToken": "de1f28588d24496ab5a8cea54b95d9a6e599c5bbeedc4d23b93aeb1de4991d62"
		}
	}
}`,
  },
  {
    title: "getAllSolutions",
    subtitle: `A Solution is an integration template that can be installed by end-users. It is comprised of a Project, and a front-end interface. The front-end interface collects custom authentication and configuration data from end-users.  The Project contains workflows, which are logical representations of how data is processed. `,
    description: `The API calls returns a list of attributes that are associated with each Solution. You can use front-end code to filter, sort and display these Solutions any way you like. You may wish to show your end-users the list of Solutions that are available so that they may select the one that is relevant to them and 'install' it. Here, 'install' means create a Solution Instance for themselves by selecting the Solution, and inputting custom authentication and configuration data when prompted.`,
    type: "query",
    input: `query getAllSolutions {
	viewer {
		solutions {
			edges {
				node {
					id
					title
					description
					tags
					customFields {
						key
						value
					}
				}
			}
		}
	}
}
`,
    variables: `{
	"tags": [
		"two-service",
		"asana"
	]
}`,
    output: solutions,
  },
  {
    title: "solutionInstances",
    subtitle: `When end-users configure a Solution, they create a copy for themselves - this is called a Solution Instance. An end-user selects a Solution they wish to enable, and uses the front-end interface as a form to
input custom authentication data and
configuration data. A Solution Instance is
created, and the Configuration Data Slots
that were previously empty, are now
populated with the custom data input by the
end-user. An unlimited number of Solution
Instances may be created from the parent
Solution, each having its own custom
authentication and configuration data. The
Configuration data is read by the workflows,
and governs the logic used to make API
calls and data transformations.`,
    description:
      "You may wish to show your end-users the list of Solution Instances that have been activated, so that they may edit the associated authentications or configurations.",
    type: "query",
    input: `query ($ownerId: String!){
	viewer {
		solutionInstances(criteria: { owner: $ownerId }) {
			edges {
				node {
					id
					name
					enabled
					owner
					created
					solutionVersionFlags {
						hasNewerVersion
						requiresUserInputToUpdateVersion
						requiresSystemInputToUpdateVersion
					}
					workflows {
						edges {
							node {
								triggerUrl
								id
								sourceWorkflowId
							}
						}
					}
					authValues {
						externalId
						authId
					}
					configValues {
						externalId
						value
					}
				}
				cursor
			}
			pageInfo {
				startCursor
				endCursor
				hasNextPage
				hasPreviousPage
			}
		}
	}
}`,
    variables: `{
	"tags": [
		"two-service",
		"asana"
	]
}`,
    output: instances,
  },
];

onMounted(() => {
  watchEffect(async () => {
    if (!user.value) {
      await navigateTo("/");
    }
  });
});

definePageMeta({
  middleware: ["auth"],
});
</script>

<template>
  <div class="flex h-screen">
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        class="relative z-40 lg:hidden"
        @close="sidebarOpen = false"
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
          <div class="fixed inset-0 bg-gray-600 bg-opacity-75" />
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
                bg-[#24152C]
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
                <div class="absolute top-0 right-0 -mr-12 pt-2">
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
                    @click="sidebarOpen = false"
                  >
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <div class="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                <div class="flex flex-shrink-0 items-center px-4">
                  <img
                    class="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                  />
                </div>
                <nav aria-label="Sidebar" class="mt-5">
                  <div class="space-y-1 px-2">
                    <a
                      v-for="item in navigation"
                      :key="item.name"
                      :href="item.href"
                      :class="[
                        item.current
                          ? 'bg-gray-100 text-gray-900'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                        'group flex items-center px-2 py-2 text-base font-medium rounded-md',
                      ]"
                    >
                      <component
                        :is="item.icon"
                        :class="[
                          item.current
                            ? 'text-gray-500'
                            : 'text-gray-400 group-hover:text-gray-500',
                          'mr-4 h-6 w-6',
                        ]"
                        aria-hidden="true"
                      />
                      {{ item.name }}
                    </a>
                  </div>
                </nav>
              </div>
              <div class="flex flex-shrink-0 border-t border-gray-200 p-4">
                <a href="#" class="group block flex-shrink-0">
                  <div class="flex items-center">
                    <div>
                      <img
                        class="inline-block h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div class="ml-3">
                      <p
                        class="
                          text-base
                          font-medium
                          text-gray-700
                          group-hover:text-gray-900
                        "
                      >
                        Whitney Francis
                      </p>
                      <p
                        class="
                          text-sm
                          font-medium
                          text-gray-500
                          group-hover:text-gray-700
                        "
                      >
                        View profile
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
    <Sidebar :user="customers[0]" />
    <div class="flex min-w-0 flex-1 flex-col overflow-hidden">
      <div class="lg:hidden">
        <div
          class="
            flex
            items-center
            justify-between
            border-b border-gray-200
            bg-gray-50
            dark:bg-[#0C1116]
            px-4
            py-1.5
          "
        >
          <div>
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
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
                text-gray-500
                hover:text-gray-900
              "
              @click="sidebarOpen = true"
            >
              <span class="sr-only">Open sidebar</span>
              <Bars3Icon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <div class="relative z-0 flex flex-1 overflow-hidden">
        <main
          class="
            relative
            z-0
            flex-1
            overflow-y-auto
            focus:outline-none
            bg-white
            dark:bg-[#0C1116]
          "
        >
          <!-- Start main area-->
          <div class="absolute inset-0 py-6 px-4 sm:px-8 lg:px-12">
            <div
              class="
                text-sky-300
                bg-sky-900
                text-xs
                rounded-lg
                p-3
                w-full
                mb-12
                flex
                items-center
                space-x-2
              "
            >
              <div><InformationCircleIcon class="h-5 w-5" /></div>
              <div>
                This approach can be used for solutions that involve complex
                configurations/mappings (ex. paginated mappings ie. mapping tons
                of fields that can't fit on one page) that our config wizard is
                not designed for, or to fit the integration experience into an
                existing marketplace, you may wish to build your own form
                experience, leveraging our API’s.
              </div>
            </div>

            <div
              class="
                rounded-lg
                dark:bg-[#0A1C26]
                border
                dark:border-[#133a48]
                p-8
                w-full
              "
            >
              <form class="space-y-8 divide-y divide-gray-200">
                <div class="space-y-8 divide-y divide-gray-200">
                  <div>
                    <div>
                      <h3
                        class="
                          text-lg
                          font-medium
                          leading-6
                          text-gray-900
                          dark:text-white
                        "
                      >
                        Front-end Interface
                      </h3>
                      <span
                        class="
                          mt-1
                          text-sm text-rose-500
                          bg-rose-100
                          px-1
                          rounded
                        "
                      >
                        Custom
                      </span>
                    </div>

                    <div
                      class="
                        mt-6
                        grid grid-cols-1
                        gap-y-6 gap-x-4
                        sm:grid-cols-6
                      "
                    >
                      <div class="sm:col-span-6">
                        <Listbox as="div" v-model="selected">
                          <ListboxLabel
                            class="
                              block
                              text-sm
                              font-medium
                              text-gray-700
                              dark:text-white
                            "
                            >Authentication</ListboxLabel
                          >
                          <div class="relative mt-1">
                            <ListboxButton
                              class="
                                relative
                                w-full
                                cursor-default
                                rounded-md
                                border border-gray-300
                                bg-white
                                py-2
                                pl-3
                                pr-10
                                text-left
                                shadow-sm
                                focus:border-indigo-500
                                focus:outline-none
                                focus:ring-1
                                focus:ring-indigo-500
                                sm:text-sm
                              "
                            >
                              <span class="block truncate">{{
                                selected.name
                              }}</span>
                              <span
                                class="
                                  pointer-events-none
                                  absolute
                                  inset-y-0
                                  right-0
                                  flex
                                  items-center
                                  pr-2
                                "
                              >
                                <ChevronUpDownIcon
                                  class="h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              </span>
                            </ListboxButton>

                            <transition
                              leave-active-class="transition ease-in duration-100"
                              leave-from-class="opacity-100"
                              leave-to-class="opacity-0"
                            >
                              <ListboxOptions
                                class="
                                  absolute
                                  z-10
                                  mt-1
                                  max-h-60
                                  w-full
                                  overflow-auto
                                  rounded-md
                                  bg-white
                                  py-1
                                  text-base
                                  shadow-lg
                                  ring-1 ring-black ring-opacity-5
                                  focus:outline-none
                                  sm:text-sm
                                "
                              >
                                <ListboxOption
                                  as="template"
                                  v-for="person in people"
                                  :key="person.id"
                                  :value="person"
                                  v-slot="{ active, selected }"
                                >
                                  <li
                                    :class="[
                                      active
                                        ? 'text-white bg-indigo-600'
                                        : 'text-gray-900',
                                      'relative cursor-default select-none py-2 pl-3 pr-9',
                                    ]"
                                  >
                                    <span
                                      :class="[
                                        selected
                                          ? 'font-semibold'
                                          : 'font-normal',
                                        'block truncate',
                                      ]"
                                      >{{ person.name }}</span
                                    >

                                    <span
                                      v-if="selected"
                                      :class="[
                                        active
                                          ? 'text-white'
                                          : 'text-indigo-600',
                                        'absolute inset-y-0 right-0 flex items-center pr-4',
                                      ]"
                                    >
                                      <CheckIcon
                                        class="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  </li>
                                </ListboxOption>
                              </ListboxOptions>
                            </transition>
                          </div>
                        </Listbox>
                      </div>

                      <div class="sm:col-span-6">
                        <Listbox as="div" v-model="selected">
                          <ListboxLabel
                            class="
                              block
                              text-sm
                              font-medium
                              text-gray-700
                              dark:text-white
                            "
                            >Record type</ListboxLabel
                          >
                          <p class="text-sm text-gray-300">
                            Select which records you would like to sync
                          </p>
                          <div class="relative mt-1">
                            <ListboxButton
                              class="
                                relative
                                w-full
                                cursor-default
                                rounded-md
                                border border-gray-300
                                bg-white
                                py-2
                                pl-3
                                pr-10
                                text-left
                                shadow-sm
                                focus:border-indigo-500
                                focus:outline-none
                                focus:ring-1
                                focus:ring-indigo-500
                                sm:text-sm
                              "
                            >
                              <span class="block truncate">{{
                                selected.name
                              }}</span>
                              <span
                                class="
                                  pointer-events-none
                                  absolute
                                  inset-y-0
                                  right-0
                                  flex
                                  items-center
                                  pr-2
                                "
                              >
                                <ChevronUpDownIcon
                                  class="h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              </span>
                            </ListboxButton>

                            <transition
                              leave-active-class="transition ease-in duration-100"
                              leave-from-class="opacity-100"
                              leave-to-class="opacity-0"
                            >
                              <ListboxOptions
                                class="
                                  absolute
                                  z-10
                                  mt-1
                                  max-h-60
                                  w-full
                                  overflow-auto
                                  rounded-md
                                  bg-white
                                  py-1
                                  text-base
                                  shadow-lg
                                  ring-1 ring-black ring-opacity-5
                                  focus:outline-none
                                  sm:text-sm
                                "
                              >
                                <ListboxOption
                                  as="template"
                                  v-for="person in people"
                                  :key="person.id"
                                  :value="person"
                                  v-slot="{ active, selected }"
                                >
                                  <li
                                    :class="[
                                      active
                                        ? 'text-white bg-indigo-600'
                                        : 'text-gray-900',
                                      'relative cursor-default select-none py-2 pl-3 pr-9',
                                    ]"
                                  >
                                    <span
                                      :class="[
                                        selected
                                          ? 'font-semibold'
                                          : 'font-normal',
                                        'block truncate',
                                      ]"
                                      >{{ person.name }}</span
                                    >

                                    <span
                                      v-if="selected"
                                      :class="[
                                        active
                                          ? 'text-white'
                                          : 'text-indigo-600',
                                        'absolute inset-y-0 right-0 flex items-center pr-4',
                                      ]"
                                    >
                                      <CheckIcon
                                        class="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  </li>
                                </ListboxOption>
                              </ListboxOptions>
                            </transition>
                          </div>
                        </Listbox>
                      </div>
                      <div class="sm:col-span-6">
                        <Listbox as="div" v-model="selected">
                          <ListboxLabel
                            class="
                              block
                              text-sm
                              font-medium
                              text-gray-700
                              dark:text-white
                            "
                            >Record type</ListboxLabel
                          >
                          <p class="text-sm text-gray-300">
                            Select which records you would like to sync
                          </p>
                          <div class="relative mt-1">
                            <ListboxButton
                              class="
                                relative
                                w-full
                                cursor-default
                                rounded-md
                                border border-gray-300
                                bg-white
                                py-2
                                pl-3
                                pr-10
                                text-left
                                shadow-sm
                                focus:border-indigo-500
                                focus:outline-none
                                focus:ring-1
                                focus:ring-indigo-500
                                sm:text-sm
                              "
                            >
                              <span class="block truncate">{{
                                selected.name
                              }}</span>
                              <span
                                class="
                                  pointer-events-none
                                  absolute
                                  inset-y-0
                                  right-0
                                  flex
                                  items-center
                                  pr-2
                                "
                              >
                                <ChevronUpDownIcon
                                  class="h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              </span>
                            </ListboxButton>

                            <transition
                              leave-active-class="transition ease-in duration-100"
                              leave-from-class="opacity-100"
                              leave-to-class="opacity-0"
                            >
                              <ListboxOptions
                                class="
                                  absolute
                                  z-10
                                  mt-1
                                  max-h-60
                                  w-full
                                  overflow-auto
                                  rounded-md
                                  bg-white
                                  py-1
                                  text-base
                                  shadow-lg
                                  ring-1 ring-black ring-opacity-5
                                  focus:outline-none
                                  sm:text-sm
                                "
                              >
                                <ListboxOption
                                  as="template"
                                  v-for="person in people"
                                  :key="person.id"
                                  :value="person"
                                  v-slot="{ active, selected }"
                                >
                                  <li
                                    :class="[
                                      active
                                        ? 'text-white bg-indigo-600'
                                        : 'text-gray-900',
                                      'relative cursor-default select-none py-2 pl-3 pr-9',
                                    ]"
                                  >
                                    <span
                                      :class="[
                                        selected
                                          ? 'font-semibold'
                                          : 'font-normal',
                                        'block truncate',
                                      ]"
                                      >{{ person.name }}</span
                                    >

                                    <span
                                      v-if="selected"
                                      :class="[
                                        active
                                          ? 'text-white'
                                          : 'text-indigo-600',
                                        'absolute inset-y-0 right-0 flex items-center pr-4',
                                      ]"
                                    >
                                      <CheckIcon
                                        class="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  </li>
                                </ListboxOption>
                              </ListboxOptions>
                            </transition>
                          </div>
                        </Listbox>
                        <Listbox as="div" v-model="selected">
                          <div class="relative mt-2">
                            <ListboxButton
                              class="
                                relative
                                w-full
                                cursor-default
                                rounded-md
                                border border-gray-300
                                bg-white
                                py-2
                                pl-3
                                pr-10
                                text-left
                                shadow-sm
                                focus:border-indigo-500
                                focus:outline-none
                                focus:ring-1
                                focus:ring-indigo-500
                                sm:text-sm
                              "
                            >
                              <span class="block truncate">{{
                                selected.name
                              }}</span>
                              <span
                                class="
                                  pointer-events-none
                                  absolute
                                  inset-y-0
                                  right-0
                                  flex
                                  items-center
                                  pr-2
                                "
                              >
                                <ChevronUpDownIcon
                                  class="h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              </span>
                            </ListboxButton>

                            <transition
                              leave-active-class="transition ease-in duration-100"
                              leave-from-class="opacity-100"
                              leave-to-class="opacity-0"
                            >
                              <ListboxOptions
                                class="
                                  absolute
                                  z-10
                                  mt-1
                                  max-h-60
                                  w-full
                                  overflow-auto
                                  rounded-md
                                  bg-white
                                  py-1
                                  text-base
                                  shadow-lg
                                  ring-1 ring-black ring-opacity-5
                                  focus:outline-none
                                  sm:text-sm
                                "
                              >
                                <ListboxOption
                                  as="template"
                                  v-for="person in people"
                                  :key="person.id"
                                  :value="person"
                                  v-slot="{ active, selected }"
                                >
                                  <li
                                    :class="[
                                      active
                                        ? 'text-white bg-indigo-600'
                                        : 'text-gray-900',
                                      'relative cursor-default select-none py-2 pl-3 pr-9',
                                    ]"
                                  >
                                    <span
                                      :class="[
                                        selected
                                          ? 'font-semibold'
                                          : 'font-normal',
                                        'block truncate',
                                      ]"
                                      >{{ person.name }}</span
                                    >

                                    <span
                                      v-if="selected"
                                      :class="[
                                        active
                                          ? 'text-white'
                                          : 'text-indigo-600',
                                        'absolute inset-y-0 right-0 flex items-center pr-4',
                                      ]"
                                    >
                                      <CheckIcon
                                        class="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  </li>
                                </ListboxOption>
                              </ListboxOptions>
                            </transition>
                          </div>
                        </Listbox>
                        <Listbox as="div" v-model="selected">
                          <div class="relative mt-2">
                            <ListboxButton
                              class="
                                relative
                                w-full
                                cursor-default
                                rounded-md
                                border border-gray-300
                                bg-white
                                py-2
                                pl-3
                                pr-10
                                text-left
                                shadow-sm
                                focus:border-indigo-500
                                focus:outline-none
                                focus:ring-1
                                focus:ring-indigo-500
                                sm:text-sm
                              "
                            >
                              <span class="block truncate">{{
                                selected.name
                              }}</span>
                              <span
                                class="
                                  pointer-events-none
                                  absolute
                                  inset-y-0
                                  right-0
                                  flex
                                  items-center
                                  pr-2
                                "
                              >
                                <ChevronUpDownIcon
                                  class="h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              </span>
                            </ListboxButton>

                            <transition
                              leave-active-class="transition ease-in duration-100"
                              leave-from-class="opacity-100"
                              leave-to-class="opacity-0"
                            >
                              <ListboxOptions
                                class="
                                  absolute
                                  z-10
                                  mt-1
                                  max-h-60
                                  w-full
                                  overflow-auto
                                  rounded-md
                                  bg-white
                                  py-1
                                  text-base
                                  shadow-lg
                                  ring-1 ring-black ring-opacity-5
                                  focus:outline-none
                                  sm:text-sm
                                "
                              >
                                <ListboxOption
                                  as="template"
                                  v-for="person in people"
                                  :key="person.id"
                                  :value="person"
                                  v-slot="{ active, selected }"
                                >
                                  <li
                                    :class="[
                                      active
                                        ? 'text-white bg-indigo-600'
                                        : 'text-gray-900',
                                      'relative cursor-default select-none py-2 pl-3 pr-9',
                                    ]"
                                  >
                                    <span
                                      :class="[
                                        selected
                                          ? 'font-semibold'
                                          : 'font-normal',
                                        'block truncate',
                                      ]"
                                      >{{ person.name }}</span
                                    >

                                    <span
                                      v-if="selected"
                                      :class="[
                                        active
                                          ? 'text-white'
                                          : 'text-indigo-600',
                                        'absolute inset-y-0 right-0 flex items-center pr-4',
                                      ]"
                                    >
                                      <CheckIcon
                                        class="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  </li>
                                </ListboxOption>
                              </ListboxOptions>
                            </transition>
                          </div>
                        </Listbox>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="pt-5">
                  <div class="flex justify-end">
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
                        text-gray-700
                        shadow-sm
                        hover:bg-gray-50
                        focus:outline-none
                        focus:ring-2
                        focus:ring-indigo-500
                        focus:ring-offset-2
                      "
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      class="
                        ml-3
                        inline-flex
                        justify-center
                        rounded-md
                        border border-transparent
                        bg-indigo-600
                        py-2
                        px-4
                        text-sm
                        font-medium
                        text-white
                        shadow-sm
                        hover:bg-indigo-700
                        focus:outline-none
                        focus:ring-2
                        focus:ring-indigo-500
                        focus:ring-offset-2
                      "
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div
              class="
                bg-yellow-900
                text-yellow-400 text-xs
                flex
                items-center
                p-2
                rounded-md
                space-x-2
                mt-4
              "
            >
              <div><ExclamationTriangleIcon class="h-5 w-5" /></div>
              <div>
                Please note that you won't be able to use core Tray features
                like Data Mapping or Custom JS as they can only be used with the
                config wizard. However, you can write your own code using other
                features like Auth-Only dialog or Call Connector API as
                mentioned above.
              </div>
            </div>
          </div>
          <!-- End main area -->
        </main>
        <aside
          class="
            relative
            hidden
            w-[700px]
            flex-shrink-1
            overflow-y-auto
            border-l border-gray-200
            dark:border-[#133a48]
            bg-white
            dark:bg-[#0C1116]
            xl:flex xl:flex-col
          "
        >
          <!-- Start secondary column (hidden on smaller screens) -->
          <div
            class="
              inset-0
              py-6
              mb-6
              px-4
              sm:px-6
              lg:px-8
              overflow-y-auto
              max-h-screen
            "
          >
            <div class="h-full rounded-lg space-y-12">
              <Code
                v-for="operation in operations"
                :key="operation.title"
                :title="operation.title"
                :description="operation.description"
                :subtitle="operation.subtitle"
                :type="operation.type"
                :input="operation.input"
                :variables="operation.variables"
                :output="operation.output"
              />
            </div>
          </div>
          <!-- End secondary column -->
        </aside>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      message: "This is a test message",
    };
  },
  methods: {
    saveMessage(text) {},
  },
};
</script>



