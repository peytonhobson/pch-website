<template>
  <dual-item-display
    class="h-144 mt-28 md:my-44 flex flex-col items-stretch"
    :reverse-column="true"
  >
    <template #leftColumn>
      <div
        class="h-2/3 w-5/6 md:w-full md:h-full rounded-xl shadow-md bg-cover duration-500 hover:-translate-y-5 transition-all hover:cursor-pointer"
      >
        <img
          v-lazy="getImgURL('madrona/madrona-5.jpg')"
          class="w-full h-full rounded-xl shadow-md"
        />
      </div>
    </template>
    <!--end col-->
    <template #rightColumn>
      <simple-description :header="descriptionHeader" :text="descriptionText" />
    </template>
  </dual-item-display>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import SimpleDescription from "@/components/Shared/SimpleDescription.vue";
import DualItemDisplay from "@/components/Shared/DualItemDisplay.vue";
import getImgURL from "@/helpers/getImgURL";

export default defineComponent({
  name: "OurCostSection",
  components: {
    SimpleDescription,
    DualItemDisplay,
  },
  setup() {
    const descriptionText =
      "The cost of Premier Care Homes is generally lower than nursing homes and assisted living facilities. It is based on several factors depending on the care needs and services required for the resident in order to provide good quality care. We do a complete assessment of each individual’s needs. This allows us to quote a fair and accurate monthly rate. You can call for our base rate. We accept private pay and some long-term care insurance. We are licensed and monitored by the State of Oregon.";

    const descriptionHeader = "Our Cost";

    return { descriptionText, descriptionHeader, getImgURL };
  },
});
</script>
