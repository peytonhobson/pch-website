<template>
  <control-labels class="h-full" @next="nextImg" @prev="prevImg">
    <img v-if="curImage" v-lazy="curImage" class="w-full h-full" />
  </control-labels>
</template>

<script lang="ts">
import { defineComponent, toRefs, computed } from "vue";

import { Facility } from "@/api/types";
import getImgURL from "@/helpers/getImgURL";
import ControlLabels from "@/components/Shared/ControlLabels.vue";

export default defineComponent({
  name: "DisplayCardFacilitiesCarousel",
  components: {
    ControlLabels,
  },
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
