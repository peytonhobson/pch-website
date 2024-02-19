<template>
  <div class="flex flex-col md:flex-row w-full lg:w-10/12">
    <div class="md:mr-4 mb-2 md:mb-0 md:w-4/12">
      <router-link :to="blogPostLink">
        <img
          v-lazy="getImgURL(blogContent.mainImage)"
          class="rounded hover:opacity-70 transition duration-300 ease-in-out w-full h-56"
          alt="Writing With Markdown"
      /></router-link>
    </div>

    <div class="flex-1">
      <div class="flex items-center">
        <div class="flex ml-4">
          <div class="flex items-center mr-2 -ml-4">
            <img
              v-lazy="getImgURL('Headshot.jpg')"
              class="rounded-full border-white border-2"
              alt="Sage Kirk"
              width="28"
              height="28"
            />
          </div>
        </div>

        <div class="text-sm font-medium text-gray-700">
          {{ blogContent.date }}
        </div>
      </div>

      <router-link :to="blogPostLink" class="hover:text-brand-green-gray">
        <h2 class="text-2xl text-left font-semibold mb-1">
          {{ blogContent.title }}
        </h2>
      </router-link>

      <p class="text-base text-left font-light text-gray-600 mb-4">
        {{ blogContent.description }}
      </p>

      <div class="flex items-start justify-start">
        <span
          v-for="category in blogContent.categories"
          :key="category"
          class="p-1 px-3 mr-1 mb-1 inline-block text-xs font-mono rounded bg-brand-green-gray text-white border border-brand-green-gray"
          >{{ category }}</span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

import { Post } from "@/types/types";
import getImgURL from "@/composables/getImgURL";

export default defineComponent({
  name: "BlogPostSummary",
  props: {
    blogContent: {
      type: Object as () => Post,
      required: true,
    },
  },
  setup(props) {
    const blogPostLink = computed(
      () => `/Blog/Posts/${props.blogContent.title.replaceAll(" ", "_")}`
    );

    return { blogPostLink, getImgURL };
  },
});
</script>
