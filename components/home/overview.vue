<script setup>
import architecture from "../../assets/images/embedded-architecture.png";
</script>

<template>
  <div>
    <div class="bg-base-100 py-12">
      <div
        class="
          relative
          mx-auto
          max-w-7xl
          py-16
          px-4
          sm:px-6
          lg:px-8
          border-t border-gray-400
        "
      >
        <div class="mx-auto text-base flex lg:gap-8">
          <div>
            <h3
              class="
                mt-2
                text-3xl
                font-bold
                leading-8
                text-base-content
                sm:text-2xl
              "
            >
              How Native works
            </h3>
          </div>
        </div>
        <div class="mt-8 flex lg:gap-8 justify-start">
          <div class="mt-8 lg:mt-0">
            <div class="relative">
              <div
                class="
                  prose prose-lg prose-indigo
                  
                  mx-auto
                  mt-6
                  text-base-content
                "
              >
                <p>
                  Native is the approach you use to build a custom integration
                  marketplace. It contains a framework and a library of
                  components:
                </p>
                <ul role="list">
                  <li>
                    <a class="text-info underline-offset-2">Workflows</a>:
                    Logical representations of how data is processed between 3rd
                    party systems.
                  </li>
                  <li>
                    <a class="text-info underline-offset-2">Projects</a>:
                    Contains workflows, and the configuration slots for user
                    input.
                  </li>
                  <li>
                    <a class="text-info underline-offset-2">Forms</a>: The
                    front-end form collects custom authentication and
                    configuration data from end-users.
                  </li>
                  <li>
                    <a class="text-info underline-offset-2">Solutions</a>:
                    Integration template that can be installed by end-users.
                    Comprised of a Project, and a front-end form.
                  </li>
                  <li>
                    <a class="text-info underline-offset-2">Instances</a>:
                    When end-users configure a Solution through a form, they
                    create an instance for themselves.
                  </li>
                </ul>
                <div>
                  <img
                    class="
                      w-full
                      rounded-lg
                      hover:scale-150
                      text-center
                      transition-all
                    "
                    :src="architecture"
                    alt=""
                    width="1310"
                    height="873"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>