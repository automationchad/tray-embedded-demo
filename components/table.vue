<template>
  <div
    class="shadow ring-1 ring-black ring-opacity-5 rounded-lg overflow-hidden"
  >
    <table class="min-w-full divide-y divide-gray-300 overflow-hidden">
      <thead class="bg-gray-50">
        <tr>
          <th
            scope="col"
            class="
              py-3.5
              pl-4
              pr-3
              text-left text-sm
              font-semibold
              text-gray-900
              sm:pl-6
            "
          >
            Band
          </th>
          <th
            scope="col"
            class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            $ / workflow
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200 bg-white">
        <tr v-for="tier in tiers" :key="tier.name">
          <td
            class="
              whitespace-nowrap
              py-4
              pl-4
              pr-3
              text-sm
              font-medium
              text-gray-900
              sm:pl-6
            "
          >
            {{ tier.name }}
          </td>
          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {{ tier.priceYearly === 'Custom' ? 'Custom' : `$${tier.priceYearly.toLocaleString()}` }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const tiers = [
  {
    name: "1 - 10",
    priceMonthly: 167,
    priceYearly: 2000,
  },
  {
    name: "11 - 30",
    priceMonthly: 83,
    priceYearly: 1000,
  },
  {
    name: "31 - 100",
    priceMonthly: 42,
    priceYearly: 500,
  },
  {
    name: "101 - 200",
    priceMonthly: 10,
    priceYearly: 125,
  },
  {
    name: "201 - 400",
    priceMonthly: 8,
    priceYearly: 100,
  },
  {
    name: "401+",
    priceMonthly: "Custom",
    priceYearly: "Custom",
  },
];
</script>