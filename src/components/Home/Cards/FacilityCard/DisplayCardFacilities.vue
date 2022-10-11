<template>
  <display-card
    header="Facilities"
    :route="route"
    class="slideshow"
    @mouseenter="clearFacilityInterval"
    @mouseleave="changeFacility"
  >
    <display-card-facilities-transition
      :facilities="facilities"
      :show="show"
      :cur-index="curIndex"
    />
    <section class="w-full row-start-6 row-span-1 items-end flex">
      <action-button text="Learn More" type="card" class="w-full h-1/2" />
    </section>
  </display-card>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, onBeforeUnmount } from "vue";

import DisplayCard from "@/components/Shared/DisplayCard.vue";
import ActionButton from "@/components/Shared/ActionButton.vue";
import DisplayCardFacilitiesTransition from "@/components/Home/Cards/FacilityCard/DislayCardFacilitiesTransition.vue";
import {
  useFetchFacilitiesDispatch,
  useFilteredFacilities,
} from "@/store/composables";
import setScrollObserverSlideshow from "@/helpers/setScrollObserverSlideshow";

export default defineComponent({
  name: "DisplayCardFacilities",
  components: {
    DisplayCard,
    ActionButton,
    DisplayCardFacilitiesTransition,
  },
  props: {
    route: {
      type: String,
      required: true,
    },
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
      }, 5000);
    };
    const clearFacilityInterval = () => {
      clearInterval(interval);
    };

    onMounted(() =>
      setScrollObserverSlideshow(changeFacility, clearFacilityInterval)
    );
    onBeforeUnmount(clearFacilityInterval);

    return {
      facilities,
      curIndex,
      show,
      clearFacilityInterval,
      changeFacility,
    };
  },
});
</script>
