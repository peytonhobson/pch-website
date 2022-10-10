<template>
  <section class="bg-white">
    <div
      class="grid md:grid-cols-12 grid-cols-1 grid-rows-2 md:grid-rows-1 w-full"
    >
      <div
        class="md:col-span-4 md:col-start-2 row-start-2 md:row-auto flex items-start md:items-center justify-center w-full h-full"
      >
        <slot name="leftColumn">Left Column</slot>
      </div>

      <div
        class="row-span-1 row-start-1 flex md:flex-wrap md:row-auto md:items-center md:justify-center md:col-span-5 md:col-start-7"
      >
        <slot name="rightColumn">Right Column</slot>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DualColumnDisplay",
  setup() {},
});
</script>
