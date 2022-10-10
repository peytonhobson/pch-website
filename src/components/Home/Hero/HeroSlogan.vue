<template>
  <div class="flex flex-auto items-center justify-content-center">
    <div class="grid grid-rows-8">
      <div class="row-span-3 row-start-1">
        <div
          class="text-4xl md:text-6xl justify-center flex text-white font-sen"
        >
          {{ mainTextRow1 }}
        </div>
        <div
          class="text-4xl md:text-6xl justify-center flex text-white font-sen"
        >
          {{ mainTextRow2 }}
        </div>
      </div>
      <div class="row-span-2 row-start-8 mt-8 flex justify-evenly">
        <router-link to="/services">
          <action-button text="Get Started" type="primary" />
        </router-link>
        <router-link to="/about_us">
          <action-button text="About Us" type="primary" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ActionButton from "@/components/Shared/ActionButton.vue";

export default defineComponent({
  name: "HeroSlogan",
  components: {
    ActionButton,
  },
  props: {
    mainTextRow1: {
      type: String,
      required: true,
    },
    mainTextRow2: {
      type: String,
      required: true,
    },
  },
  setup() {},
});
</script>
