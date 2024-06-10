<template>
  <div class="card shadow-xl">
    <figure class="h-full w-full">
      <img :src="imageLink" class="h-full w-full" />
    </figure>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ImageCard",
  props: {
    imageLink: {
      type: String,
      required: true,
    },
  },
  setup() {},
});
</script>
