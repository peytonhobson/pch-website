<template>
  <display-card
    header="Facilities"
    class="slideshow"
    @mouseenter="clearFacilityInterval"
    @mouseleave="changeFacility"
  >
    <display-card-facilities-transition ref="transition" />
    <section class="w-full row-start-6 row-span-1 items-end flex">
      <action-button text="Learn More" type="card" class="w-full h-1/2" />
    </section>
  </display-card>
</template>

<script lang="ts">
import { Component, defineComponent, ref } from "vue";

import DisplayCard from "@/components/Shared/DisplayCard.vue";
import ActionButton from "@/components/Shared/ActionButton.vue";
import DisplayCardFacilitiesTransition from "@/components/Home/Cards/FacilityCard/DisplayCardFacilitiesTransition.vue";

export default defineComponent({
  name: "DisplayCardFacilities",
  components: {
    DisplayCard,
    ActionButton,
    DisplayCardFacilitiesTransition,
  },
  setup() {
    const transition: Component = ref("transition");

    const changeFacility = () => {
      transition.value.changeFacility();
    };

    const clearFacilityInterval = () => {
      transition.value.clearFacilityInterval();
    };

    return { transition, changeFacility, clearFacilityInterval };
  },
});
</script>
