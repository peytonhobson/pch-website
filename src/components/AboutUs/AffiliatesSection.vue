<template>
  <section class="bg-white h-[80vh] flex items-center justify-evenly">
    <div class="grid md:grid-cols-12 grid-cols-1 h-full justify-evenly w-full">
      <div
        class="md:col-span-5 flex items-center justify-end w-full py-10 h-3/4"
      >
        <display-card
          class="w-5/6 py-5 px-10 h-full grid place-items-center"
          rows="1"
        >
          <div
            class="w-full h-1/2 flex row-span-1 row-start-1 items-center justify-evenly"
          >
            <img
              class="rounded-full h-5/6 w-1/3 col-start-1 col-span-1 row-start-1 row-span-1"
              src="@/assets/Headshot.jpg"
            />
            <div class="text-3xl font-sen">Scott Leavell</div>
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
            Affiliates
          </h4>
          <!-- eslint-disable vue/no-v-html -->
          <p class="text-slate-400 max-w-xl text-left font-sans">
            Quality Care Homes is a Premier Care Homes affiliated Adult Foster
            Care Home owned and operated by Scott Leavell. Scott is a
            paramedic/firefighter with 16 years of experience in the field.
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
  name: "AffiliatesSection",
  components: {
    DisplayCard,
  },
  setup() {},
});
</script>
