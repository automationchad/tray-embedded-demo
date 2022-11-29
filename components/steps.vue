<template>
  <nav aria-label="Progress">
    <ol role="list" class="space-y-4 md:flex md:space-y-0 md:space-x-8">
      <li v-for="step in steps" :key="step.name" class="md:flex-1">
        <a v-if="step.status === 'complete'" :href="step.href" class="group flex flex-col border-l-4 border-indigo-600 dark:border-indigo-400 dark:hover:border-indigo-500 py-2 pl-4 hover:border-indigo-800 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0">
          <span class="text-sm font-medium text-indigo-600 dark:text-indigo-400 dark:group-hover:text-indigo-500 group-hover:text-indigo-800">{{ 'Step ' + step.id }}</span>
          <span class="text-sm font-medium dark:text-slate-300">{{ step.name }}</span>
        </a>
        <a v-else-if="step.status === 'current'" :href="step.href" class="flex flex-col border-l-4 border-indigo-600 dark:border-indigo-400 py-2 pl-4 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0" aria-current="step">
          <span class="text-sm font-medium text-indigo-600 dark:text-indigo-400">{{ 'Step ' + step.id }}</span>
          <span class="text-sm font-medium dark:text-slate-300">{{ step.name }}</span>
        </a>
        <a v-else :href="step.href" class="group flex flex-col border-l-4 border-gray-200 dark:border-slate-700 py-2 pl-4 hover:border-gray-300 dark:hover:border-slate-600 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0">
          <span class="text-sm font-medium text-gray-500 group-hover:text-gray-700 dark:text-gray-200 dark:group-hover:text-gray-100">{{ 'Step ' + step.id }}</span>
          <span class="text-sm font-medium dark:text-slate-300">{{ step.name }}</span>
        </a>
      </li>
    </ol>
  </nav>
</template>

<script setup>
const steps = [
  { id: 1, name: 'Trigger', href: '#', status: 'complete' },
  { id: 2, name: 'Conditions', href: '#', status: 'current' },
  { id: 3, name: 'Actions', href: '#', status: 'upcoming' },
]
</script>