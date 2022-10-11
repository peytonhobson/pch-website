<template>
  <static-hero
    :first-row-text="heroProps.firstRowText"
    :second-row-text="heroProps.secondRowText"
    :background-image="heroProps.backgroundImage"
  />
  <our-cost-segment />
  <our-services-section />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import OurCostSegment from "@/components/Services/OurCostSegment.vue";
import OurServicesSection from "@/components/Services/OurServicesSection.vue";
import StaticHero from "@/components/Shared/StaticHero.vue";

export default defineComponent({
  name: "ServicesView",
  components: {
    OurCostSegment,
    OurServicesSection,
    StaticHero,
  },
  setup() {
    const heroProps = {
      firstRowText: "SERVICES & COST",
      secondRowText:
        "Exceptional, professional care for your loved one in a compassionate, home environment.",
      backgroundImage: "other/resident-blue-tag-dog.png",
    };

    return { heroProps };
  },
});
</script>
