<template>
  <Transition>
    <div v-if="show" class="row-start-2 row-span-4">
      <display-card-facilities-carousel
        :facilities="facilities"
        :cur-index="curIndex"
      />
      <display-card-facilities-summary
        :facilities="facilities"
        :cur-index="curIndex"
      />
    </div>
  </Transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { Facility } from "@/api/types";
import DisplayCardFacilitiesCarousel from "@/components/Home/Cards/FacilityCard/DisplayCardFacilitiesCarousel.vue";
import DisplayCardFacilitiesSummary from "./DisplayCardFacilitiesSummary.vue";

export default defineComponent({
  name: "DisplayCardFacilitiesTransition",
  components: {
    DisplayCardFacilitiesCarousel,
    DisplayCardFacilitiesSummary,
  },
  props: {
    facilities: {
      type: Object as () => Facility[],
      required: true,
    },
    show: {
      type: Boolean,
      required: true,
    },
    curIndex: {
      type: Number,
      required: true,
    },
  },
  setup() {},
});
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
