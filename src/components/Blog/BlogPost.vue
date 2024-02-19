<template>
  <div class="py-6 md:py-12 lg:w-10/12 md:text-center mx-auto prose">
    <div class="font-medium text-gray-700">{{ filteredPost.date }}</div>

    <h1
      class="heading text-4xl md:text-6xl font-bold font-sans md:leading-tight"
    >
      {{ filteredPost.title }}
    </h1>
  </div>

  <div class="flex flex-col pb-3 md:hidden">
    <div class="flex items-center mb-3 last:mb-0 ml-2">
      <img
        class="rounded-full border-white border-2"
        src="@/assets/Headshot.jpg"
        alt="PeytonHobson"
        width="48"
        height="48"
      />
      <span class="ml-4 text-gray-700">{{ filteredPost.author }}</span>
    </div>
  </div>

  <img v-lazy="getImgURL(filteredPost.mainImage)" class="w-full h-144" />

  <div class="flex flex-col md:flex-row py-6 md:py-12">
    <div class="w-full md:w-3/12 pr-3">
      <div class="flex-col hidden md:flex mb-3 md:mb-6">
        <div class="flex items-center mb-3 justify-center last:mb-0">
          <img
            v-lazy="getImgURL('Headshot.jpg')"
            class="rounded-full border-white border-2"
            :alt="filteredPost.author"
            width="48"
            height="48"
          />

          <div>
            <span class="font-medium text-sm ml-1 block">{{
              filteredPost.author
            }}</span>
          </div>
        </div>
      </div>

      <div class="hidden md:block">
        <router-link
          v-for="category in filteredPost.categories"
          :key="category"
          to="/"
          class="p-1 px-3 mr-1 mb-1 inline-block text-xs font-mono rounded bg-brand-green-gray text-white"
          >{{ category }}</router-link
        >
      </div>
    </div>

    <!-- eslint-disable vue/no-v-html -->
    <div
      class="w-full md:w-9/12 text-left px-4 md:px-10"
      v-html="filteredPost.body"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { Post } from "@/types/types";
import getImgURL from "@/composables/getImgURL";

export default defineComponent({
  name: "BlogPost",
  props: {
    filteredPost: {
      type: Object as () => Post,
      required: true,
    },
  },
  setup() {
    return { getImgURL };
  },
});
</script>
