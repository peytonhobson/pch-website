<template>
  <div class="h-80 w-full lg:h-144 lg:my-auto">
    <Transition>
      <card
        v-if="show"
        :body="false"
        class="h-80 w-full lg:h-144 rounded-none lg:rounded-2xl"
        @mouseenter="clearImageInterval"
        @mouseleave="changeImage"
      >
        <template #other>
          <carousel
            :image-links="facility.images"
            :cur-index="curIndex"
            @next="nextImage"
            @prev="prevImage"
          />
        </template>
      </card>
    </Transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, ref, onMounted, onBeforeUnmount } from "vue";

import { Facility } from "@/types/types";
import Card from "@/components/Shared/Card.vue";
import Carousel from "@/components/Shared/Carousel/Carousel.vue";

export default defineComponent({
  name: "FacilityCarouselCard",
  components: {
    Card,
    Carousel,
  },
  props: {
    facility: {
      type: Object as () => Facility,
      required: true,
    },
  },
  setup(props) {
    const { facility } = toRefs(props);

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
    const clearImageInterval = () => {
      clearInterval(interval);
    };

    const nextImage = () => {
      show.value = !show.value;
      curIndex.value = (curIndex.value + 1) % facility.value.images.length;
      setTimeout(() => (show.value = !show.value), 1000);
    };

    const prevImage = () => {
      show.value = !show.value;
      curIndex.value =
        (curIndex.value + facility.value.images.length - 1) %
        facility.value.images.length;
      setTimeout(() => (show.value = !show.value), 1000);
    };

    onMounted(changeImage);
    onBeforeUnmount(clearImageInterval);

    return {
      prevImage,
      nextImage,
      show,
      curIndex,
      clearImageInterval,
      changeImage,
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
