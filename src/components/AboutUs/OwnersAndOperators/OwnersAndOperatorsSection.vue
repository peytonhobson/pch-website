<template>
  <dual-item-display
    class="mt-32 md:mt-32 xl:mt-44 h-92"
    :reverse-column="true"
  >
    <template #leftColumn>
      <owners-and-operators-card class="my-10 md:my-0" />
    </template>
    <!--end col-->

    <template #rightColumn>
      <simple-description :header="descriptionHeader" :text="descriptionText" />
    </template>
  </dual-item-display>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import DualItemDisplay from "@/components/Shared/DualItemDisplay.vue";
import SimpleDescription from "@/components/Shared/SimpleDescription.vue";
import getImgURL from "@/helpers/getImgURL";
import OwnersAndOperatorsCard from "./OwnersAndOperatorsCard.vue";

export default defineComponent({
  name: "OwnersAndOperatorsSection",
  components: {
    DualItemDisplay,
    SimpleDescription,
    OwnersAndOperatorsCard,
  },
  setup() {
    const descriptionHeader = "Owners and Operators";

    const descriptionText =
      "Janelle LeFore P.T. and Margie Hibner P.T. have a total of 25 years experience as licensed physical therapists, and 21 years of home care experience working as a physical therapist with seniors in nursing homes, assisted living facilities and adult foster homes.";

    return { descriptionHeader, descriptionText, getImgURL };
  },
});
</script>
