<template>
  <div class="h-[12vh]"></div>
  <main class="flex h-screen w-full items-start justify-center">
    <locations-map class="w-3/4 h-3/4" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import LocationsMap from "@/components/Locations/LocationsMap.vue";

export default defineComponent({
  name: "LocationsView",
  components: {
    LocationsMap,
  },
  setup() {},
});
</script>
