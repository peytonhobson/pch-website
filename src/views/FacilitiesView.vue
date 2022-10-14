<template>
  <!--  add hero here -->
  <section class="flex flex-wrap justify-evenly py-10">
    <facility-card
      v-for="facility in filteredFacilities"
      :key="facility.id"
      class="w-5/6 md:w-2/5 xl:w-1/5 show-on-scroll my-10 xl:my-0"
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
