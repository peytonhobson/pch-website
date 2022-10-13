<template>
  <div v-if="curImage" class="relative w-full h-1/2 container">
    <img v-lazy="curImage" class="w-full h-full" />
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
import { defineComponent, toRefs, computed } from "vue";

import { Facility } from "@/api/types";
import getImgURL from "@/helpers/getImgURL";

export default defineComponent({
  name: "DisplayCardFacilitiesCarousel",
  props: {
    facilities: {
      type: Object as () => Facility[],
      required: true,
    },
    curIndex: {
      type: Number,
      required: true,
    },
  },
  emits: ["prev", "next"],
  setup(props, { emit }) {
    const { facilities, curIndex } = toRefs(props);

    const imageLinks = computed(() =>
      facilities.value.map((facility) => facility.images[0])
    );
    const curImage = computed(() =>
      getImgURL(imageLinks.value[curIndex.value])
    );

    const nextImg = () => {
      emit("next");
    };

    const prevImg = () => {
      emit("prev");
    };

    return { curImage, prevImg, nextImg };
  },
});
</script>

<style scoped>
.container:hover > .control {
  display: block;
}
</style>
