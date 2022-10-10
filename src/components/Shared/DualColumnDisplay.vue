<template>
  <section class="bg-white flex items-center justify-evenly mt-16 md:my-20">
    <div
      class="grid md:grid-cols-12 grid-cols-1 grid-rows-2 md:grid-rows-1 justify-evenly w-full md:place-items-center"
    >
      <div
        class="md:col-span-5 row-start-2 md:row-auto flex items-start md:items-center mt-7 justify-center md:justify-end w-full h-full"
      >
        <slot name="leftColumn">Left Column</slot>
      </div>
      <!--end col-->

      <div
        class="md:col-span-5 md:col-start-7 row-span-1 row-start-1 flex md:row-auto md:items-center md:justify-center md:my-7 px-10 md:px-0"
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
