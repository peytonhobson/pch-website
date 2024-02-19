<template>
  <main class="container mx-auto px-4">
    <div class="mb-12 last:mb-0 flex items-center justify-center flex-wrap">
      <blog-post-summary
        v-for="blogContent in displayedPosts"
        :key="blogContent.id"
        :blog-content="blogContent"
        class="py-10 border-b-2"
      />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BlogPostSummary from "@/components/Blog/BlogPostSummary.vue";

import { Post } from "@/types/types";

export default defineComponent({
  name: "BlogPostSummaries",
  components: {
    BlogPostSummary,
  },
  props: {
    displayedPosts: {
      type: Object as () => Post[],
      required: true,
    },
  },
  setup() {},
});
</script>
