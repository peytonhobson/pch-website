<template>
  <div v-if="filteredPost">
    <blog-post :filtered-post="filteredPost" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import BlogPost from "@/components/Blog/BlogPost.vue";
import { posts } from "@/data";

export default defineComponent({
  name: "BlogPostView",
  components: {
    BlogPost,
  },
  setup() {
    const filteredPost = computed(() => posts[0]);

    return { filteredPost };
  },
});
</script>
