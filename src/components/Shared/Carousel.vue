<template>
  <control-labels class="h-full" @next="nextImg" @prev="prevImg">
    <img v-if="curImage" :src="curImage.src" class="w-full h-full" />
  </control-labels>
</template>

<script lang="ts">
import { defineComponent, toRefs, computed, ref } from "vue";

import ControlLabels from "@/components/Shared/ControlLabels.vue";
import preloadImages from "@/composables/preloadImages";

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

    const images = ref(preloadImages(imageLinks.value));

    const curImage = computed(() => images.value[curIndex.value]);

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
