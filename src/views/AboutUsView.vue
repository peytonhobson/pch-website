<template>
  <static-hero
    first-row-text="About Us"
    background-image-class="bg-hero-image-madrona"
  />
  <owners-and-operators-section />
</template>

<script lang="ts">
import StaticHero from "@/components/Shared/StaticHero.vue";
import OwnersAndOperatorsSection from "@/components/AboutUs/OwnersAndOperatorsSection.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutUsView",
  components: {
    StaticHero,
    OwnersAndOperatorsSection,
  },
  setup() {},
});
</script>
