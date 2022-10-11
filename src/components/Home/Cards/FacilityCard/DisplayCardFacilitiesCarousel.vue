<template>
  <div v-if="curImage" class="w-full h-1/2">
    <img v-lazy="curImage" class="w-full h-full" />
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
  setup(props) {
    const { facilities, curIndex } = toRefs(props);

    const imageLinks = computed(() =>
      facilities.value.map((facility) => facility.images[0])
    );
    const curImage = computed(() =>
      getImgURL(imageLinks.value[curIndex.value])
    );

    return { curImage };
  },
});
</script>
