<template>
  <hero
    :image-url="heroProps.backgroundImage"
    :title="heroProps.title"
    :text="heroProps.text"
    class="h-[85vh]"
  />
  <main class="pt-16 pb-32 lg:py-44 bg-mint">
    <owners-and-operators-section />
    <affiliates-section />
    <home-care-team-section />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Hero from "@/components/Shared/Hero/Hero.vue";
import OwnersAndOperatorsSection from "@/components/AboutUs/OwnersAndOperators/OwnersAndOperatorsSection.vue";
import AffiliatesSection from "@/components/AboutUs/Affiliates/AffiliatesSection.vue";
import HomeCareTeamSection from "@/components/AboutUs/HomeCareTeamSection.vue";

export default defineComponent({
  name: "AboutUsView",
  components: {
    OwnersAndOperatorsSection,
    AffiliatesSection,
    HomeCareTeamSection,
    Hero,
  },
  setup() {
    const heroProps = {
      backgroundImage: "other/aboutus-hero.jpg",
      title: "ABOUT US",
      text: "Meet the Team Behind the Care",
    };

    return { heroProps };
  },
});
</script>
