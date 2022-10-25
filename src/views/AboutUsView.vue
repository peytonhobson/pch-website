<template>
  <hero
    :image-url="heroProps.backgroundImage"
    :title="heroProps.title"
    :text="heroProps.text"
    class="h-[85vh]"
  />
  <main class="pb-20 pt-32 md:pt-32 xl:pt-44 bg-brand-green-gray bg-opacity-50">
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
      backgroundImage: "other/resident-wheelchair-balloon-girl.png",
      title: "ABOUT US",
      text: "So you can know who we are",
    };

    return { heroProps };
  },
});
</script>
