<template>
  <dual-item-display
    class="h-full md:py-44 flex flex-col items-stretch"
    :reverse-column="true"
  >
    <template #leftColumn>
      <image-card
        class="mt-10 md:mt-10 xl:mt-0 h-2/3 md:h-144 w-5/6 md:w-3/4 xl:w-full duration-500 xl:hover:-translate-y-5 transition-all"
        image-link="madrona/madrona-5.jpg"
      />
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
import ImageCard from "@/components/Shared/ImageCard.vue";
import getImgURL from "@/composables/getImgURL";

export default defineComponent({
  name: "OurCostSection",
  components: {
    SimpleDescription,
    DualItemDisplay,
    ImageCard,
  },
  setup() {
    const descriptionText =
      "The cost of Premier Care Homes is generally lower than nursing homes and assisted living facilities. It is based on several factors depending on the care needs and services required for the resident in order to provide good quality care. We do a complete assessment of each individual’s needs. This allows us to quote a fair and accurate monthly rate. You can call for our base rate. We accept private pay and some long-term care insurance. We are licensed and monitored by the State of Oregon.";

    const descriptionHeader = "Our Cost";

    return { descriptionText, descriptionHeader, getImgURL };
  },
});
</script>
