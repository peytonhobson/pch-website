<template>
  <div class="hero h-screen relative hero-overlay overflow-hidden">
    <img
      :src="getImgURL(imageUrl)"
      alt="Hero"
      class="object-cover w-full h-full filter brightness-75"
      rel="preload"
    />
    <div
      class="hero-content text-center text-neutral-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <hero-slogan
        :title="title"
        :text="text"
        class="items-center justify-center"
      >
        <slot></slot>
      </hero-slogan>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import HeroSlogan from "./HeroSlogan.vue";
import getImgURL from "@/composables/getImgURL";

export default defineComponent({
  name: "Hero",
  components: {
    HeroSlogan,
  },
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
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
  setup() {
    return { getImgURL };
  },
});
</script>

<style>
.carousel-indicators {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 2%;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 10;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
