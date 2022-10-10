<template>
  <section class="bg-white flex items-center justify-evenly mt-16 md:my-20">
    <div
      class="grid md:grid-cols-12 grid-cols-1 grid-rows-2 md:grid-rows-1 justify-evenly w-full md:place-items-center"
    >
      <div
        class="md:col-span-5 row-start-2 md:row-auto flex items-start md:items-center mt-7 justify-center md:justify-end w-full h-full"
      >
        <!-- Fix later for dynamic image and production link -->
        <div
          class="md:relative h-2/3 w-5/6 md:h-full rounded-xl shadow-md bg-cover duration-500 hover:-translate-y-5 transition-all hover:cursor-pointer"
        >
          <img
            src="https://pch-development-data.s3.amazonaws.com/pch_photos/madrona/madrona-5.jpg"
            class="w-full h-full md:rounded-xl shadow-md"
          />
        </div>
      </div>
      <!--end col-->

      <div
        class="md:col-span-5 md:col-start-7 row-span-1 row-start-1 flex md:row-auto md:items-center md:justify-center md:my-7 px-10 md:px-0"
      >
        <simple-description
          :header="descriptionHeader"
          :text="descriptionText"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import SimpleDescription from "@/components/Shared/SimpleDescription.vue";

export default defineComponent({
  name: "OurCostSection",
  components: {
    SimpleDescription,
  },
  setup() {
    const descriptionText =
      "The cost of Premier Care Homes is generally lower than nursing homes and assisted living facilities. It is based on several factors depending on the care needs and services required for the resident in order to provide good quality care. We do a complete assessment of each individual’s needs. This allows us to quote a fair and accurate monthly rate. You can call for our base rate. We accept private pay and some long-term care insurance. We are licensed and monitored by the State of Oregon.";

    const descriptionHeader = "Our Cost";

    return { descriptionText, descriptionHeader };
  },
});
</script>
