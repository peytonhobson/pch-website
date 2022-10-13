<template>
  <div
    class="relative w-full h-92 xl:h-128 md:rounded-xl container"
    @mouseenter="clearImageInterval"
    @mouseleave="changeImage"
  >
    <Transition>
      <img
        v-if="show"
        v-lazy="curImg"
        class="w-full h-92 xl:h-128 md:rounded-xl shadow-md hover:cursor-pointer"
      />
    </Transition>
    <label
      class="control-left control w-10 h-10 ml-2 md:ml-5 xl:hidden absolute cursor-pointer text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 left-0 inset-y-0 my-auto"
      @click="prevImg"
      >‹</label
    >
    <label
      class="control-right control w-10 h-10 mr-2 md:mr-5 xl:hidden absolute cursor-pointer text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 right-0 inset-y-0 my-auto"
      @click="nextImg"
      >›</label
    >
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

export default defineComponent({
  name: "FacilityCarousel",
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

.container:hover > .control {
  display: block;
}
</style>
