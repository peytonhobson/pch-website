<template>
  <static-hero
    first-row-text="About Us"
    background-image-class="bg-hero-image-madrona"
  />
</template>

<script lang="ts">
import StaticHero from "@/components/Shared/StaticHero.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutUsView",
  components: {
    StaticHero,
  },
  setup() {},
});
</script>
