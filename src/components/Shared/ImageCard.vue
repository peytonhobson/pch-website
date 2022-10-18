<template>
  <div class="card shadow-xl">
    <figure class="h-full w-full">
      <img :src="getImgURL(imageLink)" class="h-full w-full" />
    </figure>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import getImgURL from "@/composables/getImgURL";

export default defineComponent({
  name: "ImageCard",
  props: {
    imageLink: {
      type: String,
      required: true,
    },
  },
  setup() {
    return { getImgURL };
  },
});
</script>
