<template>
  <div class="flex flex-wrap items-center justify-center">
    <h1 class="w-full mb-5 text-4xl xl:text-6xl font-bold text-white max-w-xl">
      {{ title }}
    </h1>
    <h2 v-if="text" class="w-full mb-5 text-xl text-white">{{ text }}</h2>
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
