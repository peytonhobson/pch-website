<template>
  <div class="flex w-full items-center justify-center space-x-1 py-5">
    <router-link
      v-if="previousPage"
      :to="{ name: 'Blog', query: { page: previousPage } }"
      class="px-4 py-2 font-bold text-gray-7 00 bg-gray-300 rounded-md hover:bg-brand-green-gray hover:text-white"
    >
      Previous
    </router-link>
    <span v-else class="px-4 py-2 text-gray-400 bg-gray-100 rounded-md">
      Previous
    </span>

    <router-link
      v-for="page in maxPage"
      :key="page"
      :to="{ name: 'Blog', query: { page: page } }"
      class="px-4 py-2 text-gray-700 bg-gray-300 rounded-md hover:bg-brand-green-gray hover:text-white"
    >
      {{ page }}
    </router-link>
    <router-link
      v-if="nextPage"
      :to="{ name: 'Blog', query: { page: nextPage } }"
      class="px-4 py-2 font-bold text-gray-7 00 bg-gray-300 rounded-md hover:bg-brand-green-gray hover:text-white"
    >
      Next
    </router-link>
    <span v-else class="px-4 py-2 text-gray-400 bg-gray-100 rounded-md">
      Next
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BlogPagination",
  props: {
    previousPage: {
      type: Object as () => Number | undefined,
      required: true,
    },
    nextPage: {
      type: Object as () => Number | undefined,
      required: true,
    },
    maxPage: {
      type: Object as () => Number | undefined,
      required: true,
    },
  },
  setup() {},
});
</script>

<style scoped></style>
