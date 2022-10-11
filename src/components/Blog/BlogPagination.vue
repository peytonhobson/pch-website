<template>
  <div class="flex w-full items-center justify-center space-x-1 py-5">
    <router-link
      to="#"
      class="flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md"
    >
      Previous
    </router-link>

    <router-link
      to="#"
      class="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-brand-green-gray hover:text-white"
    >
      1
    </router-link>
    <router-link
      to="#"
      class="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-brand-green-gray hover:text-white"
    >
      2
    </router-link>
    <router-link
      to="#"
      class="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-brand-green-gray hover:text-white"
    >
      3
    </router-link>
    <router-link
      to="#"
      class="px-4 py-2 font-bold text-gray-500 bg-gray-300 rounded-md hover:bg-brand-green-gray hover:text-white"
    >
      Next
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BlogPagination",
  setup() {},
});
</script>
