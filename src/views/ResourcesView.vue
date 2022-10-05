<template>
  <section class="text-6xl border-y-2 border-y-brand-green-gray py-4">
    Testimonials
  </section>
  <section
    class="w-screen flex flex-wrap md:flex-nowrap justify-evenly"
  ></section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import DisplayCard from "@/components/Shared/DisplayCard.vue";

export default defineComponent({
  name: "BlogPostView",
  components: {
    DisplayCard,
  },
  setup() {
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    return { isMobile };
  },
});
</script>
