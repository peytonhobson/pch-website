<template>
  <div
    v-if="facility"
    class="motion-safe:animate-fadeIn flex justify-center items-center md:mt-10"
  >
    <dual-item-display :reverse-column="false" :items-start="true">
      <template #leftColumn>
        <facility-carousel :facility="facility" />
      </template>
      <!--end col-->

      <template #rightColumn>
        <div class="flex flex-wrap justify-center mt-10 md:my-0">
          <simple-description
            :header="facility.name"
            :text="facility.description"
          />
          <map-directions :location-link="facility.location" />
        </div>
      </template>
    </dual-item-display>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { Facility } from "@/api/types";
import MapDirections from "@/components/Facilities/MapDirections.vue";
import SimpleDescription from "@/components/Shared/SimpleDescription.vue";
import DualItemDisplay from "@/components/Shared/DualItemDisplay.vue";
import FacilityCarousel from "@/components/Facilities/FacilityCarousel.vue";

export default defineComponent({
  name: "Facility",
  components: {
    MapDirections,
    SimpleDescription,
    DualItemDisplay,
    FacilityCarousel,
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

.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
>
