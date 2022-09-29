<template>
  <main
    class="h-128 w-full bg-hero-image bg-hero-opacity bg-no-repeat bg-cover"
  ></main>
  <hero-slogan
    mainText="WHEN ONLY THE BEST WILL DO"
    class="absolute top-56 left-36"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeroSlogan from "@/components/Home/HeroSlogan.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    HeroSlogan,
  },
});
</script>

<style scoped></style>
