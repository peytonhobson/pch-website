<template>
  <div
    class="w-full h-full border-black px-5 py-10 items-center grid content-center"
  >
    <div class="grid-rows-1">
      <div class="inline">
        <font-awesome-icon
          :icon="icon"
          class="fill-current text-red-500 mr-3"
          size="3x"
        />
      </div>
      <div class="md:text-5xl sm:text-3xl sm:text-red inline">{{ title }}</div>
    </div>
    <div class="grid-rows-1 text-xl mt-5 px-20 text-left">
      {{ body }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

interface IconProp {
  type: string[];
  required: boolean;
}

export default defineComponent({
  name: "DescriptionBox",
  components: {
    FontAwesomeIcon,
  },
  props: {
    icon: {
      type: Object,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  setup() {},
});
</script>
