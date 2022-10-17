<template>
  <section class="my-36 xl:my-44 flex flex-wrap w-full">
    <div class="flex items-center justify-center w-full">
      <simple-description :header="descriptionHeader" :text="descriptionText" />
    </div>
    <div class="flex items-center justify-center w-full">
      <services-card class="my-10 w-5/6 xl:w-3/4" />
    </div>
  </section>
  <!-- 
  <dual-item-display class="my-36 xl:my-44" :reverse-column="true">
    <template #leftColumn>
      <services-card class="my-10 w-5/6 xl:w-full" />
    </template>

    <template #rightColumn>
      <simple-description :header="descriptionHeader" :text="descriptionText" />
    </template>
  </dual-item-display> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";

import SimpleDescription from "@/components/Shared/SimpleDescription.vue";
import ServicesCard from "@/components/Services/ServicesCard.vue";

export default defineComponent({
  name: "OurServicesSection",
  components: {
    SimpleDescription,
    ServicesCard,
  },
  setup() {
    const descriptionText = `Services are provided by our Premier Care Homes adult foster home resident care team, which has been carefully selected and is committed to meet individual care needs in a dignified, respectful environment. Each resident care manager has completed and passed the “Ensure Quality Care” course through Northwest Senior Service. In addition, all caregivers require a clean criminal history. Each home has a RN who provides delegation/teaching for our staff.`;

    const descriptionHeader = "Our Services";

    return { descriptionHeader, descriptionText };
  },
});
</script>
