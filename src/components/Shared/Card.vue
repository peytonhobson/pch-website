<template>
  <div class="card shadow-2xl bg-white">
    <figure v-if="image" class="m-0 h-2/5">
      <slot name="image"></slot>
    </figure>
    <div v-if="body" class="card-body prose">
      <slot name="title"></slot>
      <slot name="body"></slot>
      <div class="card-actions justify-end">
        <slot name="button"></slot>
      </div>
    </div>
    <slot name="other"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Card",
  props: {
    image: {
      type: Boolean,
      required: false,
      default: false,
    },
    body: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  setup() {},
});
</script>
