<template>
  <div class="hero" :style="`background-image: url(${getImgURL(imageUrl)})`">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <hero-slogan
        title="WHEN ONLY THE BEST WILL DO"
        class="items-center justify-center"
      >
        <div class="flex justify-evenly">
          <router-link to="/Services"
            ><action-button type="primary" text="Get Started" /> </router-link
          ><router-link to="/About-Us"
            ><action-button type="primary" text="About Us"
          /></router-link>
        </div>
      </hero-slogan>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import HeroSlogan from "./HeroSlogan.vue";
import getImgURL from "@/helpers/getImgURL";
import ActionButton from "@/components/Shared/ActionButton.vue";

export default defineComponent({
  name: "Hero",
  components: {
    HeroSlogan,
    ActionButton,
  },
  props: {
    imageUrl: {
      type: String,
      required: true,
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
