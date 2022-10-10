<template>
  <section class="bg-white flex items-center justify-center">
    <div
      class="md:grid md:grid-cols-12 md:grid-rows-1 flex flex-col-reverse justify-center w-full"
    >
      <div
        class="md:col-span-4 md:col-start-2 md:row-auto flex items-start md:items-center justify-center w-full h-full"
      >
        <slot name="leftColumn">Left Column</slot>
      </div>

      <div
        class="flex justify-center md:flex-wrap md:row-auto md:items-center md:col-span-5 md:col-start-7"
      >
        <slot name="rightColumn">Right Column</slot>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DualItemDisplay",
  setup() {},
});
</script>
