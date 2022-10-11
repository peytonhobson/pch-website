<template>
  <div class="flex w-full items-center justify-center space-x-1 py-5">
    <router-link
      v-if="pages.previousPage"
      to=""
      class="px-4 py-2 font-bold text-gray-7 00 bg-gray-300 rounded-md hover:bg-brand-green-gray hover:text-white"
    >
      Previous
    </router-link>
    <span v-else class="px-4 py-2 text-gray-400 bg-gray-100 rounded-md">
      Previous
    </span>

    <router-link
      to="#"
      class="px-4 py-2 text-gray-700 bg-gray-300 rounded-md hover:bg-brand-green-gray hover:text-white"
    >
      1
    </router-link>
    <router-link
      to="#"
      class="px-4 py-2 text-gray-700 bg-gray-300 rounded-md hover:bg-brand-green-gray hover:text-white"
    >
      2
    </router-link>
    <router-link
      to="#"
      class="px-4 py-2 text-gray-700 bg-gray-300 rounded-md hover:bg-brand-green-gray hover:text-white"
    >
      3
    </router-link>
    <router-link
      to="#"
      class="flex items-center px-4 py-2 font-bold text-gray-700 bg-gray-300 rounded-md hover:bg-brand-green-gray hover:text-white"
    >
      Next
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, toRefs } from "vue";

interface Pages {
  previousPage: number | undefined;
  nextPage: number | undefined;
}

export default defineComponent({
  name: "BlogPagination",
  props: {
    pages: {
      type: Object as () => Pages,
      required: true,
    },
  },
  setup(props) {
    const { pages } = toRefs(props);

    const previousClass = computed(() => {
      return {
        ["previous-router-link"]: true,
        ["disabled"]: !pages.value.previousPage,
      };
    });

    return { previousClass };
  },
});
</script>

<style scoped></style>
