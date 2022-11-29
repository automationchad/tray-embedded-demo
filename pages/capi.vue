<script setup>
import { BookmarkIcon } from "@heroicons/vue/20/solid";

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

let sections = [];

let operations = [
  {
    title: "getUserByExId",
    description: "Gets Tray user by externalUserId",
    type: "query",
    input: `query GetUserByExId ($externalUserId: String!) {
  users(criteria: {externalUserId: $externalUserId}) {
    edges {
    node {
      name
      id
      externalUserId
			isTestUser
    }
    cursor
  }
  pageInfo {
    hasNextPage
    endCursor
    hasPreviousPage
    startCursor
    }
  }
}`,
    variables: `{
	"tags": [
		"two-service",
		"asana"
	]
}`,
    output: tray_user,
  },
  {
    title: "authorize",
    description: "Creates Tray user token",
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
    description: "List all solutions",
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
    description:
      "Return the Solution Instances associated with a particular user.",
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

const steps = [
  { id: 1, name: 'Trigger', href: '#', status: 'complete' },
  { id: 2, name: 'Conditions', href: '#', status: 'current' },
  { id: 3, name: 'Actions', href: '#', status: 'upcoming' },
]

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
            <div class="h-full rounded-lg">
              <div class="my-12">
                <div
                  class="
                    relative
                    rounded-md
                    border border-gray-300
                    dark:border-[#133a48]
                    px-3
                    py-2
                    shadow-sm
                    focus-within:border-indigo-600
                    focus-within:ring-1
                    focus-within:ring-indigo-600
                  "
                >
                  <label
                    for="name"
                    class="
                      absolute
                      -top-2
                      left-2
                      -mt-px
                      inline-block
                      bg-white
                      dark:bg-[#0C1116]
                      px-1
                      text-xs
                      font-medium
                      dark:text-[#bfdbea]
                      text-gray-900
                    "
                    >Message text</label
                  >
                  <input
                    type="text"
                    name="name"
                    v-model="message"
                    id="name"
                    class="
                      block
                      w-full
                      border-0
                      p-0
                      dark:bg-transparent dark:text-white
                      text-gray-900
                      placeholder-gray-500
                      focus:ring-0
                      sm:text-sm
                    "
                    placeholder="Enter your message text"
                  />
                  <div class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                    <button
                      @click="saveMessage(message)"
                      class="
                        inline-flex
                        items-center
                        rounded
                        border border-gray-400
                        px-2
                        font-sans
                        text-sm
                        font-medium
                        text-gray-400
                        dark:hover:bg-white/10
                        active:scale-95
                      "
                    >
                      <BookmarkIcon class="h-4 w-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>
              <h1 class="text-xl font-bold dark:text-white text-slate-900 mb-6">
                Workflow Builder
              </h1>
              <div class="my-6">
                <TriggerList v-if="currentTab === 1" />
                <capi-conditions v-if="currentTab === 2" />
                <CapiList v-if="currentTab === 3" />
              </div>
              <nav aria-label="Progress" class>
                <ol
                  role="list"
                  class="space-y-4 md:flex md:space-y-0 md:space-x-8"
                >
                  <li v-for="step in steps" :key="step.name" class="md:flex-1">
                    <a
                      v-if="step.status === 'complete'"
                      :href="step.href"
                      class="
                        group
                        flex flex-col
                        border-l-4 border-indigo-600
                        dark:border-indigo-400 dark:hover:border-indigo-500
                        py-2
                        pl-4
                        hover:border-indigo-800
                        md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0
                      "
                    >
                      <span
                        class="
                          text-sm
                          font-medium
                          text-indigo-600
                          dark:text-indigo-400 dark:group-hover:text-indigo-500
                          group-hover:text-indigo-800
                        "
                        >{{ "Step " + step.id }}</span
                      >
                      <span class="text-sm font-medium dark:text-slate-300">{{
                        step.name
                      }}</span>
                    </a>
                    <a
                      v-else-if="step.status === 'current'"
                      :href="step.href"
                      class="
                        flex flex-col
                        border-l-4 border-indigo-600
                        dark:border-indigo-400
                        py-2
                        pl-4
                        md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0
                      "
                      aria-current="step"
                    >
                      <span
                        class="
                          text-sm
                          font-medium
                          text-indigo-600
                          dark:text-indigo-400
                        "
                        >{{ "Step " + step.id }}</span
                      >
                      <span class="text-sm font-medium dark:text-slate-300">{{
                        step.name
                      }}</span>
                    </a>
                    <a
                      v-else
                      :href="step.href"
                      class="
                        group
                        flex flex-col
                        border-l-4 border-gray-200
                        dark:border-slate-700
                        py-2
                        pl-4
                        hover:border-gray-300
                        dark:hover:border-slate-600
                        md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0
                      "
                    >
                      <span
                        class="
                          text-sm
                          font-medium
                          text-gray-500
                          group-hover:text-gray-700
                          dark:text-gray-200 dark:group-hover:text-gray-100
                        "
                        >{{ "Step " + step.id }}</span
                      >
                      <span class="text-sm font-medium dark:text-slate-300">{{
                        step.name
                      }}</span>
                    </a>
                  </li>
                </ol>
              </nav>
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
      currentTab: 3,
    };
  },
  methods: {
    saveMessage(text) {},
  },
};
</script>



