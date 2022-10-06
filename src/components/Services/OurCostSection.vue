<template>
  <section
    class="bg-white h-[105vh] md:h-[55vh] flex items-center justify-evenly"
  >
    <div
      class="grid md:grid-cols-12 grid-cols-1 grid-rows-2 justify-evenly h-full w-full"
    >
      <div
        class="md:col-span-5 row-start-2 flex items-end justify-center w-full"
      >
        <!-- Fix later for dynamic image and production link -->
        <div
          class="md:relative h-2/3 w-5/6 rounded-xl shadow-md bg-hero-image-trapper bg-cover duration-500 hover:-translate-y-5 transition-all hover:cursor-pointer"
        ></div>
      </div>
      <!--end col-->

      <div
        class="md:col-span-7 row-span-1 row-start-1 flex md:items-center md:justify-center my-7 md:my-0 px-10 md:px-0"
      >
        <div class="lg:ml-4">
          <h4
            class="mb-5 md:text-3xl text-2xl lg:leading-normal leading-normal font-semibold font-sen text-left"
          >
            Our Cost
          </h4>
          <!-- eslint-disable vue/no-v-html -->
          <p class="text-slate-400 max-w-xl text-left font-sans">
            The cost of Premier Care Homes is generally lower than nursing homes
            and assisted living facilities. It is based on several factors
            depending on the care needs and services required for the resident
            in order to provide good quality care. We do a complete assessment
            of each individual’s needs. This allows us to quote a fair and
            accurate monthly rate. You can call for our base rate. We accept
            private pay and some long-term care insurance. We are licensed and
            monitored by the State of Oregon.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "OurCostSection",
  setup() {},
});
</script>
