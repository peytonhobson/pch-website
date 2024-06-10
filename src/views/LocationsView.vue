<template>
  <hero :title="heroProps.title" :image-url="heroProps.backgroundImage"></hero>
  <main
    class="flex flex-wrap w-full items-center justify-center bg-mint lg:h-screen"
  >
    <div class="flex items-center justify-center w-full h-full py-20 px-10">
      <locations-map class="h-144 w-full card" />
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
      backgroundImage:
        "https://premier-care-homes.s3.amazonaws.com/assets/hallet/hallet-7.jpg",
    };

    return { heroProps };
  },
});
</script>
