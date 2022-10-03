<template>
  <section class="text-6xl border-y-2 border-y-brand-green-gray py-4">
    Blog
  </section>
  <blog-post-summaries />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BlogPostSummaries from "@/components/Blog/BlogPostSummaries.vue";

export default defineComponent({
  name: "BlogView",
  components: {
    BlogPostSummaries,
  },
});
</script>
