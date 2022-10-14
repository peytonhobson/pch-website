<template>
  <control-labels class="h-full" @next="nextImg" @prev="prevImg">
    <img v-if="curImage" :src="curImage" class="w-full h-full" />
  </control-labels>
</template>

<script lang="ts">
import { defineComponent, toRefs, computed } from "vue";

import getImgURL from "@/helpers/getImgURL";
import ControlLabels from "@/components/Shared/ControlLabels.vue";

export default defineComponent({
  name: "FacilityCardCarousel",
  components: {
    ControlLabels,
  },
  props: {
    imageLinks: {
      type: Object as () => string[],
      required: true,
    },
    curIndex: {
      type: Number,
      required: true,
    },
  },
  emits: ["prev", "next"],
  setup(props, { emit }) {
    const { imageLinks, curIndex } = toRefs(props);

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
