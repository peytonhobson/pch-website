<template>
  <card
    v-if="curFacility"
    :image="true"
    :title="`Facility - ${curFacility.name}`"
  >
    <template #image>
      <Transition>
        <display-card-facilities-carousel
          v-if="show"
          :facilities="facilities"
          :cur-index="curIndex"
          @next="nextFacility"
          @prev="prevFacility"
        />
      </Transition>
    </template>
    <template #body>
      <Transition>
        <p v-if="show" class="text-left">
          {{ curFacility.summary }}
        </p>
      </Transition>
    </template>
    <template #button>
      <button
        class="btn btn-block btn-lg bg-brand-green-gray border border-brand-green-gray flex items-center"
      >
        Learn More
      </button>
    </template>
  </card>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  onBeforeUnmount,
  computed,
} from "vue";

import Card from "@/components/Shared/Card.vue";
import {
  useFetchFacilitiesDispatch,
  useFilteredFacilities,
} from "@/store/composables";
import setScrollObserverCarousel from "@/helpers/setScrollObserverCarousel";
import DisplayCardFacilitiesCarousel from "@/components/Home/Cards/FacilityCard/DisplayCardFacilitiesCarousel.vue";

export default defineComponent({
  name: "DisplayCardFacilities",
  components: {
    Card,
    DisplayCardFacilitiesCarousel,
  },
  setup() {
    const facilities = useFilteredFacilities();
    onMounted(useFetchFacilitiesDispatch);

    const curFacility = computed(() => facilities.value[curIndex.value]);

    const curIndex = ref(0);
    const show = ref(true);
    let interval: any = null;
    const changeFacility = () => {
      interval = setInterval(() => {
        console.log("interval");
        show.value = !show.value;
        curIndex.value = (curIndex.value + 1) % facilities.value.length;
        setTimeout(() => (show.value = !show.value), 1000);
      }, 6000);
    };
    const clearFacilityInterval = () => {
      clearInterval(interval);
    };

    const nextFacility = () => {
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
      setScrollObserverCarousel(
        changeFacility,
        clearFacilityInterval,
        ".carousel-tag"
      )
    );
    onBeforeUnmount(clearFacilityInterval);

    return {
      curIndex,
      show,
      facilities,
      prevFacility,
      nextFacility,
      curFacility,
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
