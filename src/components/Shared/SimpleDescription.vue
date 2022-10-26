<template>
  <div class="flex flex-wrap items-center h-full">
    <div class="prose w-5/6 md:w-full">
      <h2 class="mb-5 text-left">
        {{ header }}
      </h2>
      <!-- eslint-disable vue/no-v-html -->
      <p class="text-left" v-html="text"></p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SimpleDescription",
  props: {
    header: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  setup() {},
});
</script>
