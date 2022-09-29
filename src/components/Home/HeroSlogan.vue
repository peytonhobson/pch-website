<template>
  <div>
    <div class="w-160">
      <div class="text-7xl justify-center flex text-black font-main">
        {{ mainText }}
      </div>
    </div>
    <div class="mt-8 flex justify-evenly">
      <action-button text="Get Started" type="primary" />
      <action-button text="Contact Us" type="primary" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ActionButton from "../Shared/ActionButton.vue";

export default defineComponent({
  name: "HeroSlogan",
  components: {
    ActionButton,
  },
  props: {
    mainText: {
      type: String,
      required: true,
    },
  },
  setup() {},
});
</script>
