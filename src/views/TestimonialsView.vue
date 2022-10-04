<template>
  <section class="text-6xl border-y-2 border-y-brand-green-gray py-4">
    Blog
  </section>
  <testimonial-card
    v-for="testimonial in testimonials"
    :key="testimonial.id"
    :testimonial="testimonial"
  />
</template>

<script lang="ts">
import { UPDATE_SELECTED_JOB_POST_TITLE } from "@/store/constants";
import { defineComponent, onMounted, computed, onUnmounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

import { key } from "@/store";
import { useFilteredPosts, useFetchPostsDispatch } from "@/store/composables";
import TestimonialCard from "@/components/Blog/BlogPost.vue";

export default defineComponent({
  name: "BlogPostView",
  components: {
    TestimonialCard,
  },
  setup() {
    const parseJobPostTitle = () => {
      const route = useRoute();
      const title = (route.params.title as String) || "";
      const parsedTitle = title.replaceAll("_", " ");
      const store = useStore(key);
      store.commit(UPDATE_SELECTED_JOB_POST_TITLE, parsedTitle);
    };
    const removeJobPostTitle = () => {
      const store = useStore(key);
      store.commit(UPDATE_SELECTED_JOB_POST_TITLE, "");
    };
    onMounted(useFetchPostsDispatch);
    onMounted(parseJobPostTitle);
    onUnmounted(removeJobPostTitle);

    const filteredPost = computed(() => useFilteredPosts().value[0]);

    return { filteredPost };
  },
});
</script>
