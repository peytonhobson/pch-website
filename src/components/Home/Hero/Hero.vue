<template>
  <div class="carousel relative">
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
      <div class="carousel-item absolute h-full w-full">
        <Transition>
          <div
            v-if="show && curImg"
            class="h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right"
            :style="`background-image: url(${curImg})`"
          >
            <div class="container mx-auto my-10 md:my-auto">
              <div
                class="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide"
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
      <label
        for="carousel-3"
        class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
        @click="prevImg"
        >‹</label
      >
      <label
        for="carousel-2"
        class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
        @click="nextImg"
        >›</label
      >

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

export default defineComponent({
  name: "Hero",
  components: {
    HeroSlogan,
  },
  setup() {
    const curImgIndex = ref(0);

    const images = [
      "https://pch-development-data.s3.amazonaws.com/pch_photos/other/resident-edith-and-red-1024x998%402x+2.jpg",
      "https://pch-development-data.s3.amazonaws.com/pch_photos/other/resident-blue-tag-dog.jpeg",
      "https://pch-development-data.s3.amazonaws.com/pch_photos/madrona/madrona-2.jpg",
    ];

    const show = ref(true);

    const nextImg = () => {
      show.value = !show.value;
      curImgIndex.value = (curImgIndex.value + 1) % images.length;
      setTimeout(() => (show.value = !show.value), 500);
    };

    const prevImg = () => {
      show.value = !show.value;
      curImgIndex.value =
        (curImgIndex.value + images.length - 1) % images.length;
      console.log(curImgIndex.value);
      setTimeout(() => (show.value = !show.value), 500);
    };

    const curImg = computed(() => images[curImgIndex.value]);

    return { nextImg, prevImg, curImg, show };
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

.carousel-item {
  transition: opacity 0.5s ease;
}
</style>
