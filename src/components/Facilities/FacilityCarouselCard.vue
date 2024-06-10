<template>
  <Transition>
    <card
      v-if="show"
      :body="false"
      class="h-80 w-full md:max-w-lg lg:max-h-full rounded-none md:rounded-2xl"
    >
      <template #other>
        <carousel :image-links="facility.images" :cur-index="curIndex" />
      </template>
    </card>
  </Transition>
</template>

<script lang="ts">
import { defineComponent, toRefs, ref, onMounted } from "vue";

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

    const changeImage = () => {
      setInterval(() => {
        show.value = !show.value;
        curIndex.value = (curIndex.value + 1) % facility.value.images.length;
        setTimeout(() => (show.value = !show.value), 500);
      }, 3000);
    };

    onMounted(changeImage);

    return {
      show,
      curIndex,
    };
  },
});
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 500ms ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
