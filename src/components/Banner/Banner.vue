<template>
  <div :class="className">
    <div class="container mx-auto px-4 py-2">
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-2xl font-bold">{{ title }}</h1>
          <p class="text-sm">{{ text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Banner",
  props: {
    type: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const className = () => {
      switch (props.type) {
        case "success":
          return "bg-[#22bb33] text-white fixed top-5 z-50 rounded-lg left-1/2 transform -translate-x-1/2";
        case "error":
          return "bg-red-500 text-white fixed top-5 z-50 rounded-lg left-1/2 transform -translate-x-1/2";
      }
    };

    return { className: className() };
  },
});
</script>
