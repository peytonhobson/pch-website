<template>
  <div class="card w-96 bg-base-300 shadow-xl">
    <figure v-if="image" class="m-0 h-2/5">
      <slot name="image"></slot>
    </figure>
    <div class="card-body prose">
      <slot name="title"></slot>
      <slot name="body"></slot>
      <div class="card-actions justify-end">
        <slot name="button"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Card",
  props: {
    title: {
      type: String,
      required: false,
      default: undefined,
    },
    image: {
      type: Boolean,
      required: false,
      default: false,
    },
    facility: {
      type: String,
      required: false,
      default: undefined,
    },
  },
  setup() {},
});
</script>
