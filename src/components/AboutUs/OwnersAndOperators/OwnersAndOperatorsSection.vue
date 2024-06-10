<template>
  <dual-item-display :reverse-column="true">
    <template #leftColumn>
      <owners-and-operators-card class="mt-10 lg:my-0" />
    </template>
    <!--end col-->

    <template #rightColumn>
      <simple-description
        :header="descriptionHeader"
        :text="descriptionText"
        class="md:max-w-lg lg:max-w-none"
      />
    </template>
  </dual-item-display>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import DualItemDisplay from "@/components/Shared/DualItemDisplay.vue";
import SimpleDescription from "@/components/Shared/SimpleDescription.vue";
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

    const descriptionText = `Janelle LeFore, P.T., and Margie Hibner, P.T., bring over 30 years of combined experience as physical therapists in various senior care settings. Since 2008, they have owned and operated Adult Foster Care Homes, driven by their unwavering passion and dedication to senior care. `;

    return { descriptionHeader, descriptionText };
  },
});
</script>
