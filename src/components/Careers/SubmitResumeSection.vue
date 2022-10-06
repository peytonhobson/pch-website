<template>
  <section
    class="bg-white h-[190vh] md:h-screen flex items-center justify-evenly mt-10 md:py-20"
  >
    <div
      class="grid md:grid-cols-12 grid-cols-1 grid-rows-8 md:grid-rows-1 h-full justify-evenly w-full"
    >
      <div
        class="md:col-span-5 row-start-4 md:row-auto flex items-center justify-center md:justify-end w-full py-5 md:py-10 pb-20"
      >
        <display-card class="w-5/6 py-5 px-5 md:px-10" rows="1">
          <form class="w-full max-w-sm">
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  Full Name
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  class="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  type="text"
                  value="Jane Doe"
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-password"
                >
                  Password
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  class="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  type="password"
                  placeholder="******************"
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3"></div>
              <label class="md:w-2/3 block text-gray-500 font-bold">
                <input class="mr-2 leading-tight" type="checkbox" />
                <span class="text-sm"> Send me your newsletter! </span>
              </label>
            </div>
            <div class="md:flex md:items-center">
              <div class="md:w-1/3"></div>
              <div class="md:w-2/3">
                <button
                  class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </display-card>
      </div>
      <!--end col-->

      <div
        class="md:col-span-7 row-start-1 row-span-3 md:row-auto flex md:items-center md:justify-center my-7 md:my-0 px-10 md:px-0"
      >
        <div class="lg:ml-4">
          <h4
            class="mb-5 md:text-3xl text-2xl lg:leading-normal leading-normal font-sen font-semibold text-left"
          >
            Our Services
          </h4>
          <!-- eslint-disable vue/no-v-html -->
          <p class="text-slate-400 max-w-xl text-left font-sans">
            Services are provided by our Premier Care Homes adult foster home
            resident care team, which has been carefully selected and is
            committed to meet individual care needs in a dignified, respectful
            environment. Each resident care manager has completed and passed the
            “Ensure Quality Care” course through Northwest Senior Service. In
            addition, all caregivers require a clean criminal history. Each home
            has a RN who provides delegation/teaching for our staff.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import DisplayCard from "../Shared/DisplayCard.vue";

export default defineComponent({
  name: "SubmitResumeSection",
  components: {
    DisplayCard,
  },
  setup() {},
});
</script>
