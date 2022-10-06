<template>
  <section class="bg-white h-[80vh] flex items-center justify-evenly">
    <div
      class="grid grid-rows-2 md:grid-rows-1 md:grid-cols-12 grid-cols-1 md:row-auto h-full justify-evenly w-full"
    >
      <div
        class="md:col-span-5 flex items-center justify-end w-full py-10 h-3/4"
      >
        <display-card class="w-5/6 py-5 px-10 h-full grid" rows="2">
          <div
            class="w-full h-full flex row-span-1 row-start-1 items-center justify-evenly"
          >
            <img
              class="rounded-full h-5/6 w-1/3 col-start-1 col-span-1 row-start-1 row-span-1"
              src="@/assets/Headshot.jpg"
            />
            <div class="text-3xl font-sen">Janelle Leavell</div>
          </div>
          <div
            class="w-full h-full row-span-1 row-start-2 flex items-center justify-evenly"
          >
            <img
              class="rounded-full h-5/6 w-1/3 col-start-1 col-span-1 row-start-1 row-span-1"
              src="@/assets/Headshot.jpg"
            />
            <div class="text-3xl font-sen">Margie Hibner</div>
          </div>
        </display-card>
      </div>
      <!--end col-->

      <div
        class="md:col-span-7 flex md:items-center md:justify-center my-7 md:my-0 px-10 md:px-0 h-3/4"
      >
        <div class="lg:ml-4">
          <h4
            class="mb-5 md:text-3xl text-2xl lg:leading-normal leading-normal font-sen font-semibold text-left"
          >
            Owners and Operators
          </h4>
          <!-- eslint-disable vue/no-v-html -->
          <p class="text-slate-400 max-w-xl text-left font-sans">
            Janelle LeFore P.T. and Margie Hibner P.T. have a total of 25 years
            experience as licensed physical therapists, and 21 years of home
            care experience working as a physical therapist with seniors in
            nursing homes, assisted living facilities and adult foster homes.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DisplayCard from "@/components/Shared/DisplayCard.vue";

export default defineComponent({
  name: "OwnersAndOperatorsSection",
  components: {
    DisplayCard,
  },
  setup() {},
});
</script>
