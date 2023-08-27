<template>
  <dual-item-display
    class="mt-80 xl:mt-44 h-92 lg:max-w-none flex justify-center"
    :reverse-column="true"
    :items-start="false"
  >
    <template #leftColumn>
      <affiliates-card class="my-10 lg:my-0" />
    </template>
    <!--end col-->

    <template #rightColumn>
      <simple-description :header="descriptionHeader" :text="descriptionText" class="md:max-w-lg lg:max-w-none" />
    </template>
  </dual-item-display>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AffiliatesCard from "@/components/AboutUs/Affiliates/AffiliatesCard.vue";
import DualItemDisplay from "@/components/Shared/DualItemDisplay.vue";
import SimpleDescription from "@/components/Shared/SimpleDescription.vue";
import getImgURL from "@/composables/getImgURL";

export default defineComponent({
  name: "AffiliatesSection",
  components: {
    DualItemDisplay,
    SimpleDescription,
    AffiliatesCard,
  },
  setup() {
    const descriptionHeader = "Affiliates";

    const descriptionText =
      "Quality Care Homes is a Premier Care Homes affiliated Adult Foster Care Home owned and operated by Scott Leavell. Scott is a paramedic/firefighter with 16 years of experience in the field.";

    return { descriptionHeader, descriptionText, getImgURL };
  },
});
</script>
