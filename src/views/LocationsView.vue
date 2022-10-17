<template>
  <div class="h-[12vh]"></div>
  <main class="flex h-screen w-full items-start justify-center">
    <iframe
      src="https://storage.googleapis.com/maps-solutions-vc5lhmrtc4/locator-plus/4rmr/locator-plus.html"
      width="75%"
      height="75%"
      style="border: 0"
      loading="lazy"
    >
    </iframe>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LocationsView",
  setup() {},
});
</script>
