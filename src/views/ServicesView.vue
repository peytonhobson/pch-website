<template>
  <hero
    :image-url="heroProps.backgroundImage"
    :title="heroProps.title"
    :text="heroProps.text"
    class="h-[85vh]"
  />
  <main class="bg-mint pt-16 pb-32 lg:py-44">
    <our-cost-segment />
    <our-services-section />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import OurCostSegment from "@/components/Services/OurCostSegment.vue";
import OurServicesSection from "@/components/Services/OurServicesSection.vue";
import Hero from "@/components/Shared/Hero/Hero.vue";

export default defineComponent({
  name: "ServicesView",
  components: {
    OurCostSegment,
    OurServicesSection,
    Hero,
  },
  setup() {
    const heroProps = {
      title: "SERVICES & COST",
      text: "Exceptional, professional care for your loved one in a compassionate, home environment.",
      backgroundImage: "other/services-hero.jpg",
    };

    return { heroProps };
  },
});
</script>
