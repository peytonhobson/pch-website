<template>
  <div class="container mx-auto px-4">
    <main class="py-6">
      <div class="mb-12 flex items-center justify-center flex-wrap">
        <blog-post-summary
          v-for="blogContent in displayedPosts"
          :key="blogContent.id"
          :blog-content="blogContent"
          class="py-5 border-b-2"
        />
      </div>
    </main>
  </div>
  <div class="mt-8 mx-auto">
    <div class="flex flex-row flex-nowrap">
      <p class="text-sm flex-grow">Page {{ currentPage }}</p>

      <div class="flex items-center justify-center">
        <router-link
          v-if="previousPage"
          :to="{ name: 'blog', query: { page: previousPage } }"
          class="mx-3 text-sm font-semibold text-brand-blue-1"
          data-test="previous-page-link"
          >Previous</router-link
        >

        <router-link
          v-if="nextPage"
          :to="{ name: 'blog', query: { page: nextPage } }"
          class="mx-3 text-sm font-semibold text-brand-blue-1"
          data-test="next-page-link"
          >Next</router-link
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";

import BlogPostSummary from "@/components/Blog/BlogPostSummary.vue";

import { useFetchPostsDispatch } from "@/store/composables";
import { useFilteredPosts } from "@/store/composables";
import useCurrentPage from "@/composables/useCurrentPage";
import usePreviousAndNextPages from "@/composables/usePreviousAndNextPages";

export default defineComponent({
  name: "BlogPostSummaries",
  components: {
    BlogPostSummary,
  },
  setup() {
    onMounted(useFetchPostsDispatch);

    const filteredPosts = useFilteredPosts();

    const currentPage = useCurrentPage();

    const maxPage = computed(() => Math.ceil(filteredPosts.value.length / 5));
    const { previousPage, nextPage } = usePreviousAndNextPages(
      currentPage,
      maxPage
    );

    const displayedPosts = computed(() => {
      const pageNumber = currentPage.value;
      const firstJobIndex = (pageNumber - 1) * 5;
      const lastJobIndex = pageNumber * 5;
      return filteredPosts.value.slice(firstJobIndex, lastJobIndex);
    });

    return { displayedPosts, previousPage, currentPage, nextPage };
  },
});
</script>
