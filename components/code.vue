<template>
  <div>
    <div class="mb-3 space-y-6">
      <div v-if="title != ''">
        <div class="flex items-center space-x-4 my-4">
          <h1 class="text-base-content text-3xl font-mono font-bold">{{ title }}</h1>
          <div
            v-if="type === 'query'"
            class="font-mono text-xs text-secondary bg-secondary-content rounded"
          >
            query
          </div>
          <div
            v-if="type === 'mutation'"
            class="font-mono text-xs text-warning bg-warning-content rounded px-2"
          >
            mutation
          </div>
        </div>
        <p class="text-base-content/60 text-sm">
          {{ subtitle }}
        </p>
      </div>

      <CodeInputQuery :code="input" lang="graphql" v-if="input != ''" />
      <div
        v-if="description != ''"
        class="
          bg-neutral
          text-neutral-content
          rounded-xl
          border border-base-content/60
          p-4
          flex
          text-sm
        "
      >
        <BookmarkIcon class="h-8 w-8" />
        {{ description }}
      </div>
      <CodeOutput :code="output" lang="json" />
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "title",
    "subtitle",
    "description",
    "type",
    "input",
    "variables",
    "output",
  ],
};
</script>