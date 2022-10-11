<template>
  <div v-if="curImage" class="w-full h-1/2">
    <img :src="curImage.src" class="w-full h-full" />
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, computed, ComputedRef } from "vue";

import { Facility } from "@/api/types";
import preloadImages from "@/helpers/preloadImages";

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
  setup(props) {
    const { facilities, curIndex } = toRefs(props);

    const imageLinks = computed(() => {
      return facilities.value.map((facility) => facility.images[0]);
    });
    const images: ComputedRef<HTMLImageElement[]> = preloadImages(
      imageLinks.value
    );
    const curImage = computed(() => images.value[curIndex.value]);

    return { curImage };
  },
});
</script>
