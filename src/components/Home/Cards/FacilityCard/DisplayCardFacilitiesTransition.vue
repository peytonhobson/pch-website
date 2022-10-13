<template>
  <Transition>
    <div v-if="show" class="row-start-2 row-span-4">
      <display-card-facilities-carousel
        :facilities="facilities"
        :cur-index="curIndex"
        @next="nextFacility"
        @prev="prevFacility"
      />
      <display-card-facilities-summary
        :facilities="facilities"
        :cur-index="curIndex"
      />
    </div>
  </Transition>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, onBeforeUnmount } from "vue";

import DisplayCardFacilitiesCarousel from "@/components/Home/Cards/FacilityCard/DisplayCardFacilitiesCarousel.vue";
import DisplayCardFacilitiesSummary from "./DisplayCardFacilitiesSummary.vue";
import {
  useFetchFacilitiesDispatch,
  useFilteredFacilities,
} from "@/store/composables";
import setScrollObserverSlideshow from "@/helpers/setScrollObserverSlideshow";

export default defineComponent({
  name: "DisplayCardFacilitiesTransition",
  components: {
    DisplayCardFacilitiesCarousel,
    DisplayCardFacilitiesSummary,
  },
  setup() {
    const facilities = useFilteredFacilities();
    onMounted(useFetchFacilitiesDispatch);

    const curIndex = ref(0);
    const show = ref(true);
    let interval: any = null;
    const changeFacility = () => {
      interval = setInterval(() => {
        show.value = !show.value;
        curIndex.value = (curIndex.value + 1) % facilities.value.length;
        setTimeout(() => (show.value = !show.value), 1000);
      }, 4000);
    };
    const clearFacilityInterval = () => {
      clearInterval(interval);
    };

    const nextFacility = () => {
      console.log("here");
      show.value = !show.value;
      curIndex.value = (curIndex.value + 1) % facilities.value.length;
      setTimeout(() => (show.value = !show.value), 1000);
    };

    const prevFacility = () => {
      show.value = !show.value;
      curIndex.value =
        (curIndex.value + facilities.value.length - 1) %
        facilities.value.length;
      setTimeout(() => (show.value = !show.value), 1000);
    };

    onMounted(() =>
      setScrollObserverSlideshow(changeFacility, clearFacilityInterval)
    );
    onBeforeUnmount(clearFacilityInterval);

    return {
      curIndex,
      show,
      facilities,
      prevFacility,
      nextFacility,
      changeFacility,
      clearFacilityInterval,
    };
  },
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
