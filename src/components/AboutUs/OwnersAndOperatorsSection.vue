<template>
  <dual-item-display class="mt-20 md:mt-44" :reverse-column="true">
    <template #leftColumn>
      <display-card
        class="w-5/6 md:w-full py-5 px-10 h-60 md:h-full grid mt-10 md:mt-0"
        rows="2"
      >
        <div
          class="w-full h-full flex row-span-1 row-start-1 items-center justify-evenly"
        >
          <img
            class="rounded-full md:h-5/6 w-1/3 col-start-1 col-span-1 row-start-1 row-span-1"
            src="@/assets/Headshot.jpg"
          />
          <div class="text-3xl font-sen">Janelle Leavell</div>
        </div>
        <div
          class="w-full h-full row-span-1 row-start-2 flex items-center justify-evenly"
        >
          <img
            class="rounded-full md:h-5/6 w-1/3 col-start-1 col-span-1 row-start-1 row-span-1"
            src="@/assets/Headshot.jpg"
          />
          <div class="text-3xl font-sen">Margie Hibner</div>
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

import DisplayCard from "@/components/Shared/DisplayCard.vue";
import DualItemDisplay from "@/components/Shared/DualItemDisplay.vue";
import SimpleDescription from "@/components/Shared/SimpleDescription.vue";

export default defineComponent({
  name: "OwnersAndOperatorsSection",
  components: {
    DisplayCard,
    DualItemDisplay,
    SimpleDescription,
  },
  setup() {
    const descriptionHeader = "Owners and Operators";

    const descriptionText =
      "Janelle LeFore P.T. and Margie Hibner P.T. have a total of 25 years experience as licensed physical therapists, and 21 years of home care experience working as a physical therapist with seniors in nursing homes, assisted living facilities and adult foster homes.";

    return { descriptionHeader, descriptionText };
  },
});
</script>
