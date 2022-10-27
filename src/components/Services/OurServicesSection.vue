<template>
  <dual-item-display class="py-36 xl:py-44" :items-start="false">
    <template #leftColumn>
      <simple-description :header="descriptionHeader" :text="descriptionText" />
    </template>

    <template #rightColumn>
      <services-card />
    </template>
  </dual-item-display>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SimpleDescription from "@/components/Shared/SimpleDescription.vue";
import DualItemDisplay from "@/components/Shared/DualItemDisplay.vue";
import ServicesCard from "@/components/Services/ServicesCard.vue";
export default defineComponent({
  name: "OurServicesSection",
  components: {
    SimpleDescription,
    DualItemDisplay,
    ServicesCard,
  },
  setup() {
    const descriptionText = `Services are provided by our Premier Care Homes adult foster home resident care team, which has been carefully selected and is committed to meet individual care needs in a dignified, respectful environment. Each resident care manager has completed and passed the “Ensure Quality Care” course through Northwest Senior Service. In addition, all caregivers require a clean criminal history. Each home has a RN who provides delegation/teaching for our staff.`;
    const descriptionHeader = "Our Services";
    return { descriptionHeader, descriptionText };
  },
});
</script>
