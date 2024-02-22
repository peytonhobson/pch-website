<template>
  <div
    v-if="facility"
    class="flex-col flex lg:flex-row lg:min-h-[88vh] md:py-10 md:px-20 gap-10 lg:gap-20 md:justify-center items-center bg-mint"
  >
    <facility-carousel-card :key="facility.name" :facility="facility" />

    <div class="prose w-5/6 md:w-full md:max-w-lg lg:max-w-xl flex-col">
      <h2 class="mb-5 text-left">
        {{ facility.name }}
      </h2>
      <!-- eslint-disable vue/no-v-html -->
      <p class="text-left" v-html="facility.description"></p>
      <map-directions :location-link="facility.location" />
    </div>
  </div>
  <!-- TODO: Add see other facilities -->
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { Facility } from "@/types/types";
import MapDirections from "@/components/Facilities/MapDirections.vue";
import FacilityCarouselCard from "@/components/Facilities/FacilityCarouselCard.vue";

export default defineComponent({
  name: "Facility",
  components: {
    MapDirections,
    FacilityCarouselCard,
  },
  props: {
    facility: {
      type: Object as () => Facility,
      required: true,
    },
  },
  setup() {},
});
</script>

<style scoped>
.mapouter {
  position: relative;
  text-align: right;
}

.gmap_canvas {
  overflow: hidden;
  background: none !important;
}
</style>
>
