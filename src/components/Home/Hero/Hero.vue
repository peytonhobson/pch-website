<template>
  <div v-if="curImg" class="carousel relative">
    <div class="carousel-inner relative overflow-hidden w-full h-full">
      <!--Slide 1-->
      <input
        id="carousel-1"
        class="carousel-open"
        type="radio"
        name="carousel"
        aria-hidden="true"
        hidden
        checked
      />
      <div
        class="animate-fadeIn duration-1000 carousel-item absolute h-full w-full"
      >
        <Transition>
          <div
            v-if="show && curImg"
            class="h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover"
            :style="`background-image: url(${curImg})`"
          >
            <div class="container mx-auto my-10 md:my-auto">
              <div
                class="flex flex-col w-full lg:w-1/2 xl:ml-16 items-center xl:items-start px-6 tracking-wide"
              >
                <hero-slogan
                  main-text-row1="WHEN ONLY THE"
                  main-text-row2="BEST WILL DO"
                  class="items-center justify-center"
                />
              </div>
            </div>
          </div>
        </Transition>
      </div>
      <control-labels :animate="true" @next="nextImg" @prev="prevImg" />

      <!-- Add additional indicators for each slide-->
      <ol class="carousel-indicators">
        <li class="inline-block mr-3">
          <label
            for="carousel-1"
            class="carousel-bullet cursor-pointer block text-4xl text-gray-900 hover:text-gray-900"
            >•</label
          >
        </li>
        <li class="inline-block mr-3">
          <label
            for="carousel-2"
            class="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
            >•</label
          >
        </li>
        <li class="inline-block mr-3">
          <label
            for="carousel-3"
            class="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
            >•</label
          >
        </li>
      </ol>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

import HeroSlogan from "./HeroSlogan.vue";
import getImgURL from "@/helpers/getImgURL";
import ControlLabels from "@/components/Shared/ControlLabels.vue";

export default defineComponent({
  name: "Hero",
  components: {
    HeroSlogan,
    ControlLabels,
  },
  setup() {
    const curIndex = ref(0);

    const imageLinks = [
      "other/resident-edith-and-red.jpg",
      "other/resident-blue-tag-dog.png",
      "madrona/madrona-2.jpg",
    ];

    const show = ref(true);

    const nextImg = () => {
      show.value = !show.value;
      curIndex.value = (curIndex.value + 1) % imageLinks.length;
      setTimeout(() => (show.value = !show.value), 500);
    };

    const prevImg = () => {
      show.value = !show.value;
      curIndex.value =
        (curIndex.value + imageLinks.length - 1) % imageLinks.length;
      setTimeout(() => (show.value = !show.value), 500);
    };

    const curImg = computed(() => getImgURL(imageLinks[curIndex.value]));

    const showLabels = ref(false);

    return { nextImg, prevImg, curImg, show, showLabels };
  },
});
</script>

<style>
.carousel-indicators {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 2%;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 10;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
