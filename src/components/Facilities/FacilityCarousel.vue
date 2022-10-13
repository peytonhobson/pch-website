<template>
  <div
    class="relative w-full h-92 xl:h-128 md:rounded-xl containment"
    @mouseenter="clearImageInterval"
    @mouseleave="changeImage"
  >
    <control-labels @next="nextImg" @prev="prevImg"
      ><Transition>
        <img
          v-if="show"
          v-lazy="curImg"
          class="w-full h-92 xl:h-128 md:rounded-xl shadow-md hover:cursor-pointer"
        /> </Transition
    ></control-labels>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  toRefs,
  ref,
  computed,
  onBeforeMount,
  onBeforeUnmount,
} from "vue";

import { Facility } from "@/api/types";
import getImgURL from "@/helpers/getImgURL";
import ControlLabels from "@/components/Shared/ControlLabels.vue";

export default defineComponent({
  name: "FacilityCarousel",
  components: {
    ControlLabels,
  },
  props: {
    facility: {
      type: Object as () => Facility,
      required: true,
    },
  },
  setup(props) {
    const { facility } = toRefs(props);

    const curImg = computed(() =>
      getImgURL(facility.value.images[curIndex.value])
    );

    // Put in own function
    const curIndex = ref(0);
    const show = ref(true);
    let interval: any = null;
    const changeImage = () => {
      interval = setInterval(() => {
        show.value = !show.value;
        curIndex.value = (curIndex.value + 1) % facility.value.images.length;
        setTimeout(() => (show.value = !show.value), 1000);
      }, 5000);
    };

    const nextImg = () => {
      show.value = !show.value;
      curIndex.value = (curIndex.value + 1) % facility.value.images.length;
      setTimeout(() => (show.value = !show.value), 1000);
    };

    const prevImg = () => {
      show.value = !show.value;
      curIndex.value =
        (curIndex.value + facility.value.images.length - 1) %
        facility.value.images.length;
      setTimeout(() => (show.value = !show.value), 1000);
    };

    const clearImageInterval = () => {
      clearInterval(interval);
    };

    onBeforeMount(changeImage);
    onBeforeUnmount(clearImageInterval);

    return { curImg, show, changeImage, clearImageInterval, nextImg, prevImg };
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
