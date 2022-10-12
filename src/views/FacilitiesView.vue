<template>
  <section class="text-6xl border-y-2 border-y-brand-green-gray py-4">
    Facilities
  </section>
  <section class="flex flex-wrap justify-evenly py-10">
    <facility-card
      v-for="facility in filteredFacilities"
      :key="facility.id"
      class="w-5/6 md:w-1/5 show-on-scroll h-128 my-10 md:my-0"
      :facility="facility"
      :route="`/Facilities/${facility.name.toLowerCase()}`"
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

    return { filteredFacilities };
  },
});
</script>
