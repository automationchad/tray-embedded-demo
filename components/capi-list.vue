<template>
  <div>
    <div class="mt-6 flow-root">
      <ul role="list" class="-my-5 divide-y divide-gray-200 dark:divide-gray-800">
        <li v-for="person in people" :key="person.handle" class="py-4">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <img class="h-8 w-8 rounded-full" :src="person.imageUrl" alt="" />
            </div>
            <div class="min-w-0 flex-1">
              <p
                class="
                  truncate
                  text-sm
                  font-medium
                  text-gray-900
                  dark:text-white
                "
              >
                {{ person.name }}
              </p>
              <p class="truncate text-sm text-gray-500">
                {{ person.handle }}
              </p>
            </div>
            <div>
              <a
                href="#"
                class="
                  inline-flex
                  items-center
                  rounded-full
                  border border-gray-300
                  bg-white
                  px-2.5
                  py-0.5
                  text-sm
                  font-medium
                  leading-5
                  text-gray-700
                  shadow-sm
                  hover:bg-gray-50
                "
                >Add</a
              >
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const people = [
  {
    name: "Send SMS Message",
    handle: "Send messages to your contacts using Twilio",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Create or update record",
    handle: "Create or update people in Pipedrive",
    imageUrl:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Create or update record",
    handle: "Create or update contacts in Nimble",
    imageUrl:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Create or update record",
    handle: "Create or update contacts in Google Contacts",
    imageUrl:
      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Post message",
    handle: "Post a message automatically in a Slack channel",
    imageUrl:
      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Add row",
    handle: "Add a row in Google Sheets",
    imageUrl:
      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];
</script>