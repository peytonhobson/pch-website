<template>
  <div class="prose">
    <h4 class="mb-5 md:text-3xl text-2xl font-semibold text-left font-sen">
      {{ header }}
    </h4>
    <!-- eslint-disable vue/no-v-html -->
    <p class="text-slate-400 text-left font-sans" v-html="text"></p>
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
