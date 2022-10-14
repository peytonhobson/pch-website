<template>
  <blog-post-summaries :displayed-posts="displayedPosts" />
  <blog-pagination
    :previous-page="previousPage"
    :next-page="nextPage"
    :max-page="maxPage"
  />
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ComputedRef } from "vue";

import BlogPostSummaries from "@/components/Blog/BlogPostSummaries.vue";
import BlogPagination from "@/components/Blog/BlogPagination.vue";
import useCurrentPage from "@/composables/useCurrentPage";
import usePreviousAndNextPages from "@/composables/usePreviousAndNextPages";
import { useFetchPostsDispatch, useFilteredPosts } from "@/store/composables";

export default defineComponent({
  name: "BlogView",
  components: {
    BlogPostSummaries,
    BlogPagination,
  },
  setup() {
    onMounted(useFetchPostsDispatch);

    const filteredPosts = useFilteredPosts();

    const currentPage = useCurrentPage();

    const maxPage = computed(() => Math.ceil(filteredPosts.value.length / 5));
    const {
      previousPage,
      nextPage,
    }: {
      previousPage: ComputedRef<number | undefined>;
      nextPage: ComputedRef<number | undefined>;
    } = usePreviousAndNextPages(currentPage, maxPage);

    const displayedPosts = computed(() => {
      const pageNumber = currentPage.value;
      const firstJobIndex = (pageNumber - 1) * 5;
      const lastJobIndex = pageNumber * 5;
      return filteredPosts.value.slice(firstJobIndex, lastJobIndex);
    });

    return { previousPage, nextPage, displayedPosts, maxPage };
  },
});
</script>
