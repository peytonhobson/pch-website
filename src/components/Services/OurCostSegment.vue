<template>
  <dual-item-display
    class="h-full flex flex-col items-stretch"
    :reverse-column="true"
  >
    <template #leftColumn>
      <image-card
        class="mt-10 md:mt-10 lg:mt-0 h-2/3 md:h-144 w-5/6 md:w-3/4 lg:w-full duration-500 lg:hover:-translate-y-5 transition-all md:max-w-lg lg:max-w-none"
        image-link="madrona/madrona-5.jpg"
      />
    </template>
    <!--end col-->
    <template #rightColumn>
      <simple-description :header="descriptionHeader" :text="descriptionText" class="md:max-w-lg lg:max-w-none" />
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
      "Adult Foster Care Homes generally have lower rates than larger, institutionalized " +
      "settings. Premier Care Homes is a private pay facility and we accept long term care " +
      "insurance and Veteran’s funding. Please call or email for rates. " +
      "<br></br>*****We do not accept medicaid payment*****";

    const descriptionHeader = "Our Cost";

    return { descriptionText, descriptionHeader, getImgURL };
  },
});
</script>
