<template>
  <div>
    <div class="bg-white dark:bg-[#0C1017] py-12">
      <div
        class="
          relative
          mx-auto
          max-w-7xl
          py-16
          px-4
          sm:px-6
          lg:px-8
          border-y border-gray-400
        "
      >
        <div
          class="
            mx-auto
            max-w-prose
            text-base
             lg:max-w-none  lg:gap-8
          "
        >
          <div>
            <h3
              class="
                mt-2
                text-2xl
                font-bold
                leading-8
                text-gray-900
                dark:text-white
                sm:text-2xl
              "
            >
              Authentication
            </h3>
          </div>
        </div>
        <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8 bg-[#0C1017]">
          <div class="relative lg:col-start-2 lg:row-start-1">
            <div
              class="mx-auto max-w-prose text-base lg:max-w-none sticky top-0"
            >
              <Code />
            </div>
          </div>
          <div class="mt-8 lg:mt-0">
            <div
              class="
                prose prose-indigo
                mx-auto
                mt-5
                text-gray-500
                lg:col-start-1 lg:row-start-1 lg:max-w-none
              "
            >
              <p>
                All GraphQL API queries require a valid Embedded ID and token
                (master or user) passed as a bearer.
              </p>
              <p>
                Public and custom apps created in the Partner Dashboard generate
                tokens using OAuth, and custom apps made in the Shopify admin
                are authenticated in the Shopify admin.
              </p>
              <p>
                Include your token as a X-Shopify-Access-Token header on all API
                queries. Using Shopify’s supported client libraries can simplify
                this process. To keep the platform secure, apps need to request
                specific access scopes during the install process. Only request
                as much data access as your app needs to work. Learn more about
                getting started with authentication and building apps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>