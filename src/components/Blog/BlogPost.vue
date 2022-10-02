<template>
  <div class="flex flex-col md:flex-row w-full lg:w-10/12">
    <div class="md:mr-4 mb-2 md:mb-0 md:w-4/12">
      <a class="bg-gray-100" href="/blog/2018-12-29-writing-with-markdown/">
        <img
          class="rounded mb-3 hover:opacity-70 transition duration-300 ease-in-out w-full h-full"
          alt="Writing With Markdown"
          :src="blogContent.mainImage"
      /></a>
    </div>

    <div class="flex-1">
      <div class="flex items-center">
        <div class="flex ml-4">
          <div class="flex items-center mr-2 -ml-4">
            <img
              class="rounded-full border-white border-2"
              src="@/assets/Headshot.jpg"
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

      <a
        href="/blog/2018-12-29-writing-with-markdown/"
        class="hover:text-brand-green-gray"
      >
        <h2 class="text-2xl text-left font-semibold mb-1">
          {{ blogContent.title }}
        </h2>
      </a>

      <p class="text-base text-left font-light text-gray-600 mb-4">
        {{ blogContent.description }}
      </p>

      <div class="mb-2 flex items-start justify-start">
        <router-link
          to="/"
          :key="category"
          v-for="category in blogContent.categories"
          class="p-1 px-3 mr-1 mb-1 inline-block text-xs font-mono rounded bg-green-200 text-green-800 hover:bg-blue-200 hover:text-blue-800 transition duration-300 ease-in-out"
          >{{ category }}</router-link
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface BlogContent {
  mainImage: string;
  authorImage: string;
  date: string;
  title: string;
  description: string;
  categories: string[];
}

export default defineComponent({
  name: "BlogPost",
  props: {
    blogContent: {
      type: Object as () => BlogContent,
      required: true,
    },
  },
  setup(props) {},
});
</script>
