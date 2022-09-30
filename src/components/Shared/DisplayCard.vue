<template>
  <div class="rounded-2xl bg-gray-300 h-144 align-top flex flex-wrap">
    <section class="w-full text-6xl h-1/6 flex items-center justify-center">
      <div class="flex items-center justify-center">
        {{ header }}
      </div>
    </section>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ActionButton from "./ActionButton.vue";

export default defineComponent({
  name: "DisplayCard",
  components: {
    ActionButton,
  },
  setup() {},
  props: {
    header: {
      type: String,
      required: true,
    },
  },
});
</script>
