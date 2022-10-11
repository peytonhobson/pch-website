<template>
  <main class="mb-20">
    <static-hero
      first-row-text="About Us"
      :background-image="backgroundImage"
    />
    <owners-and-operators-section />
    <affiliates-section />
    <home-care-team-section />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import StaticHero from "@/components/Shared/StaticHero.vue";
import OwnersAndOperatorsSection from "@/components/AboutUs/OwnersAndOperatorsSection.vue";
import AffiliatesSection from "@/components/AboutUs/AffiliatesSection.vue";
import HomeCareTeamSection from "@/components/AboutUs/HomeCareTeamSection.vue";

export default defineComponent({
  name: "AboutUsView",
  components: {
    StaticHero,
    OwnersAndOperatorsSection,
    AffiliatesSection,
    HomeCareTeamSection,
  },
  setup() {
    const backgroundImage = "other/resident-blue-tag-dog.png";

    return { backgroundImage };
  },
});
</script>
