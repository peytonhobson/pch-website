<template>
  <div class="max-w-xl">
    <h1 class="mb-5 text-6xl font-bold">{{ title }}</h1>
    <p v-if="text" class="mb-5">{{ text }}</p>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeroSlogan",
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: false,
      default: undefined,
    },
  },
  setup() {},
});
</script>
