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

let operations = [
  {
    title: "createExternalUser",
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
    title: "authorize",
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
            bg-base-200
          "
        >
          <!-- Start main area-->
          <div class="absolute inset-0 py-6 px-4 sm:px-8 lg:px-12">
            <div class="h-full rounded-lg">
              
              <h1 class="text-xl font-bold text-base-content mb-6">
                Solutions
              </h1>

              <button
                v-if="!solutions"
                type="button"
                class="
                  inline-flex
                  items-center
                  px-4
                  py-2
                  font-semibold
                  leading-6
                  text-sm
                  shadow
                  rounded-md
                  text-white
                  bg-indigo-500
                  hover:bg-indigo-400
                  transition
                  ease-in-out
                  duration-150
                  cursor-not-allowed
                "
                disabled=""
              >
                <svg
                  class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </button>
              <SolutionsAuthOnly />
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
            bg-base-200
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



