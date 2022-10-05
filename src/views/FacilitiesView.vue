<template>
  <section class="text-6xl border-y-2 border-y-brand-green-gray py-4">
    Facilities
  </section>
  <section v-if="!isMobile" class="flex flex-wrap justify-evenly my-10">
    <facility-card
      v-for="facility in filteredFacilities"
      :key="facility.id"
      class="w-5/6 md:w-1/5 show-on-scroll h-128"
      :facility="facility"
      :route="`/facilities/${facility.name.toLowerCase()}`"
    />
  </section>
  <section v-else class="flex flex-wrap justify-evenly my-10">
    <facility-card
      v-for="facility in filteredFacilities"
      :key="facility.id"
      class="w-5/6 md:w-2/7 show-on-scroll h-128 my-5"
      :facility="facility"
      :route="`/facilities/${facility.name.toLowerCase()}`"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

import FacilityCard from "@/components/Facilities/FacilityCard.vue";
import setScrollObserver from "@/helpers/setScrollObserver";
import {
  useFilteredFacilities,
  useFetchFacilitiesDispatch,
} from "@/store/composables";

export default defineComponent({
  name: "FacilitiesView",
  components: {
    FacilityCard,
  },
  setup() {
    onMounted(setScrollObserver);
    onMounted(useFetchFacilitiesDispatch);

    const filteredFacilities = useFilteredFacilities();

    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    return { isMobile, filteredFacilities };
  },
});
</script>
