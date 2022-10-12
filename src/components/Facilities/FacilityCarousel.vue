<template>
  <Transition>
    <img
      v-if="show"
      v-lazy="curImg"
      class="w-full h-92 md:h-144 md:rounded-xl shadow-md"
    />
  </Transition>
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

    const clearFacilityInterval = () => {
      clearInterval(interval);
    };

    onBeforeMount(changeImage);
    onBeforeUnmount(clearFacilityInterval);

    return { curImg, show };
  },
});
</script>
