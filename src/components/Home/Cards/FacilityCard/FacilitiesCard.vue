<template>
  <card
    v-if="curFacility"
    :image="true"
    :title="`Facility - ${curFacility.name}`"
  >
    <template #image>
      <Transition>
        <carousel
          v-if="show"
          :image-links="imageLinks"
          :cur-index="curIndex"
          @next="nextFacility"
          @prev="prevFacility"
        />
      </Transition>
    </template>
    <template #title>
      <h2 class="card-title">
        Facilities -
        <Transition
          ><span v-if="show">{{ curFacility.name }}</span></Transition
        >
      </h2>
    </template>
    <template #body>
      <Transition>
        <p v-if="show" class="text-left">
          {{ curFacility.summary }}
        </p>
      </Transition>
    </template>
    <template #button>
      <router-link to="/Facilities" class="w-full">
        <action-button text="Learn More" type="card" />
      </router-link>
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
import Carousel from "@/components/Shared/Carousel.vue";
import ActionButton from "@/components/Shared/ActionButton.vue";

export default defineComponent({
  name: "FacilitiesCard",
  components: {
    Card,
    Carousel,
    ActionButton,
  },
  setup() {
    const facilities = useFilteredFacilities();
    onMounted(useFetchFacilitiesDispatch);

    const imageLinks = computed(() =>
      facilities.value.map((facility) => facility.images[0])
    );

    const curFacility = computed(() => facilities.value[curIndex.value]);

    const curIndex = ref(0);
    const show = ref(true);
    let interval: any = null;
    const changeFacility = () => {
      interval = setInterval(() => {
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
      imageLinks,
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
