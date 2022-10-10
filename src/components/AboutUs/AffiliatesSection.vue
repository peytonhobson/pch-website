<template>
  <dual-item-display class="mt-44">
    <template #leftColumn>
      <display-card
        class="w-full py-20 px-10 h-full grid place-items-center"
        rows="1"
      >
        <div
          class="w-full h-full flex row-span-1 row-start-1 items-center justify-evenly"
        >
          <img
            class="rounded-full h-full md:h-5/6 w-1/3 col-start-1 col-span-1 row-start-1 row-span-1"
            src="@/assets/Headshot.jpg"
          />
          <div class="text-3xl font-sen">Scott Leavell</div>
        </div>
      </display-card>
    </template>
    <!--end col-->

    <template #rightColumn>
      <simple-description :header="descriptionHeader" :text="descriptionText" />
    </template>
  </dual-item-display>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import DisplayCard from "../Shared/DisplayCard.vue";
import DualItemDisplay from "@/components/Shared/DualItemDisplay.vue";
import SimpleDescription from "@/components/Shared/SimpleDescription.vue";

export default defineComponent({
  name: "AffiliatesSection",
  components: {
    DisplayCard,
    DualItemDisplay,
    SimpleDescription,
  },
  setup() {
    const descriptionHeader = "Affiliates";

    const descriptionText =
      "Quality Care Homes is a Premier Care Homes affiliated Adult Foster Care Home owned and operated by Scott Leavell. Scott is a paramedic/firefighter with 16 years of experience in the field.";

    return { descriptionHeader, descriptionText };
  },
});
</script>
