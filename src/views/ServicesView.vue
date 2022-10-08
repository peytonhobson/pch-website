<template>
  <static-hero
    :first-row-text="heroProps.firstRowText"
    :second-row-text="heroProps.secondRowText"
    :background-image-style="heroProps.backgroundImageStyle"
  />
  <our-cost-section />
  <our-services-section />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import OurCostSection from "@/components/Services/OurCostSection.vue";
import OurServicesSection from "@/components/Services/OurServicesSection.vue";
import StaticHero from "@/components/Shared/StaticHero.vue";

export default defineComponent({
  name: "ServicesView",
  components: {
    OurCostSection,
    OurServicesSection,
    StaticHero,
  },
  setup() {
    const heroProps = {
      firstRowText: "SERVICES & COST",
      secondRowText:
        "Exceptional, professional care for your loved one in a compassionate, home environment.",
      backgroundImageStyle:
        "background-image: url('https://pch-development-data.s3.amazonaws.com/pch_photos/other/resident-blue-tag-dog.jpeg')",
    };

    return { heroProps };
  },
});
</script>
