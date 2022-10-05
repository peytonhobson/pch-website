<template>
  <services-hero />
  <our-cost-section />
  <our-services-section />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ServicesHero from "@/components/Services/ServicesHero.vue";
import OurCostSection from "@/components/Services/OurCostSection.vue";
import OurServicesSection from "@/components/Services/OurServicesSection.vue";

export default defineComponent({
  name: "ServicesView",
  components: {
    ServicesHero,
    OurCostSection,
    OurServicesSection,
  },
  setup() {},
});
</script>
