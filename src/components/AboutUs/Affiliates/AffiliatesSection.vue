<template>
  <dual-item-display
    class="mt-48 md:mt-128 xl:mt-44 h-92"
    :reverse-column="true"
    :items-start="false"
  >
    <template #leftColumn>
      <affiliates-card />
    </template>
    <!--end col-->

    <template #rightColumn>
      <simple-description :header="descriptionHeader" :text="descriptionText" />
    </template>
  </dual-item-display>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AffiliatesCard from "@/components/AboutUs/Affiliates/AffiliatesCard.vue";
import DualItemDisplay from "@/components/Shared/DualItemDisplay.vue";
import SimpleDescription from "@/components/Shared/SimpleDescription.vue";
import getImgURL from "@/helpers/getImgURL";

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
