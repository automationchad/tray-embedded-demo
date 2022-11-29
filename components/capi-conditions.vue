<template>
  <div>
    <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
      <div class="sm:col-span-2">
        <label for="city" class="block text-sm font-medium text-gray-700"
          >City</label
        >
        <div class="mt-1">
          <input
            type="text"
            name="city"
            id="city"
            autocomplete="address-level2"
            class="
              block
              w-full
              rounded-md
              border-gray-300
              shadow-sm
              focus:border-indigo-500 focus:ring-indigo-500
              sm:text-sm
            "
          />
        </div>
      </div>

      <div class="sm:col-span-2">
        <label for="region" class="block text-sm font-medium text-gray-700"
          >State / Province</label
        >
        <div class="mt-1">
          <input
            type="text"
            name="region"
            id="region"
            autocomplete="address-level1"
            class="
              block
              w-full
              rounded-md
              border-gray-300
              shadow-sm
              focus:border-indigo-500 focus:ring-indigo-500
              sm:text-sm
            "
          />
        </div>
      </div>

      <div class="sm:col-span-2">
        <label for="postal-code" class="block text-sm font-medium text-gray-700"
          >ZIP / Postal code</label
        >
        <div class="mt-1">
          <input
            type="text"
            name="postal-code"
            id="postal-code"
            autocomplete="postal-code"
            class="
              block
              w-full
              rounded-md
              border-gray-300
              shadow-sm
              focus:border-indigo-500 focus:ring-indigo-500
              sm:text-sm
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>