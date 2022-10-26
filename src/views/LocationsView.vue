<template>
  <hero :title="heroProps.title" :image-url="heroProps.backgroundImage"></hero>
  <main
    class="flex flex-wrap w-screen items-center justify-center bg-brand-light-gray h-screen"
  >
    <div class="flex items-center justify-center w-full h-full p-10">
      <locations-map class="h-144 w-full" />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import LocationsMap from "@/components/Locations/LocationsMap.vue";
import Hero from "@/components/Shared/Hero/Hero.vue";

export default defineComponent({
  name: "LocationsView",
  components: {
    LocationsMap,
    Hero,
  },
  setup() {
    const heroProps = {
      title: "LOCATIONS",
      backgroundImage: "hallet/hallet-7.jpg",
    };

    return { heroProps };
  },
});
</script>
