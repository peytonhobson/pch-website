<template>
  <div class="carousel w-full">
    <div id="slide1" class="carousel-item relative w-full">
      <img src="https://placeimg.com/800/200/arch" class="w-full" />
      <div
        class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
      >
        <button class="btn btn-circle">❮</button>
        <button class="btn btn-circle">❯</button>
      </div>
    </div>
    <div id="slide2" class="carousel-item relative w-full">
      <img src="https://placeimg.com/800/200/arch" class="w-full" />
      <div
        class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
      >
        <button class="btn btn-circle">❮</button>
        <button class="btn btn-circle">❯</button>
      </div>
    </div>
    <div id="slide3" class="carousel-item relative w-full">
      <img src="https://placeimg.com/800/200/arch" class="w-full" />
      <div
        class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
      >
        <button class="btn btn-circle">❮</button>
        <button class="btn btn-circle">❯</button>
      </div>
    </div>
    <div id="slide4" class="carousel-item relative w-full">
      <img src="https://placeimg.com/800/200/arch" class="w-full" />
      <div
        class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
      >
        <button class="btn btn-circle">❮</button>
        <button class="btn btn-circle">❯</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Carousel",
  setup() {},
});
</script>
