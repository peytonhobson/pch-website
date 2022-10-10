<template>
  <section class="text-6xl border-y-2 border-y-brand-green-gray py-4">
    Testimonials
  </section>
  <section
    v-if="testimonials.length > 0 && !isMobile"
    class="py-5 grid grid-cols-3"
  >
    <div class="flex flex-wrap col-span-1 col-start-1 justify-center">
      <div
        v-if="imagesLoaded"
        class="h-80 bg-cover my-5 md:w-5/6 rounded-2xl"
        style="
          background-image: url('https://pch-development-data.s3.amazonaws.com/pch_photos/other/resident-red-and-patriotic-sweaters.png');
        "
      ></div>
      <testimonial-card :testimonial="testimonials[3]" class="my-5 md:w-5/6" />
      <testimonial-card :testimonial="testimonials[1]" class="my-5 md:w-5/6" />
    </div>
    <div class="flex flex-wrap col-span-1 col-start-2 justify-center">
      <testimonial-card :testimonial="testimonials[2]" class="my-5 md:w-5/6" />
      <div
        v-if="imagesLoaded"
        class="h-80 bg-cover my-5 md:w-5/6 rounded-2xl"
        style="
          background-image: url('https://pch-development-data.s3.amazonaws.com/pch_photos/other/resident-out-for-a-treat.png');
        "
      ></div>
      <testimonial-card :testimonial="testimonials[5]" class="my-5 md:w-5/6" />
    </div>
    <div class="flex flex-wrap col-span-1 col-start-3 justify-center">
      <testimonial-card :testimonial="testimonials[4]" class="my-5 md:w-5/6" />
      <testimonial-card :testimonial="testimonials[0]" class="my-5 md:w-5/6" />
      <div
        v-if="imagesLoaded"
        class="h-80 bg-cover mt-5 md:w-5/6 rounded-2xl"
        style="
          background-image: url('https://pch-development-data.s3.amazonaws.com/pch_photos/other/resident-christmas-guitar-music.png');
        "
      ></div>
    </div>
  </section>
  <section
    v-if="testimonials.length > 0 && isMobile"
    class="py-5 flex flex-wrap justify-center"
  >
    <testimonial-card :testimonial="testimonials[0]" class="my-5 w-5/6" />
    <div
      v-if="imagesLoaded"
      class="h-80 bg-cover my-5 w-5/6 rounded-2xl"
      style="
        background-image: url('https://pch-development-data.s3.amazonaws.com/pch_photos/other/resident-red-and-patriotic-sweaters.png');
      "
    ></div>
    <testimonial-card :testimonial="testimonials[1]" class="my-5 w-5/6" />
    <testimonial-card :testimonial="testimonials[2]" class="my-5 w-5/6" />
    <div
      v-if="imagesLoaded"
      class="h-80 bg-cover my-5 w-5/6 rounded-2xl"
      style="
        background-image: url('https://pch-development-data.s3.amazonaws.com/pch_photos/other/resident-out-for-a-treat.png');
      "
    ></div>
    <testimonial-card :testimonial="testimonials[3]" class="my-5 w-5/6" />
    <testimonial-card :testimonial="testimonials[4]" class="my-5 w-5/6" />
    <testimonial-card :testimonial="testimonials[5]" class="my-5 w-5/6" />
    <div
      v-if="imagesLoaded"
      class="h-80 bg-cover my-5 w-5/6 rounded-2xl"
      style="
        background-image: url('https://pch-development-data.s3.amazonaws.com/pch_photos/other/resident-red-and-patriotic-sweaters.png');
      "
    ></div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ComputedRef, ref } from "vue";

import {
  useFetchTestimonialsDispatch,
  useTestimonials,
} from "@/store/composables";
import TestimonialCard from "@/components/Testimonials/TestimonialCard.vue";
import { Testimonial } from "@/api/types";
// import preloadImages from "@/helpers/preloadImages";

export default defineComponent({
  name: "BlogPostView",
  components: {
    TestimonialCard,
  },
  setup() {
    onMounted(useFetchTestimonialsDispatch);

    // const imagesToPreload = ref([
    //   "https://pch-development-data.s3.amazonaws.com/pch_photos/other/resident-red-and-patriotic-sweaters.png",
    //   "https://pch-development-data.s3.amazonaws.com/pch_photos/other/resident-out-for-a-treat.png",
    //   "https://pch-development-data.s3.amazonaws.com/pch_photos/other/resident-christmas-guitar-music.png",
    // ]);

    const imagesLoaded = ref(false);

    // const images = ref([])

    // onBeforeMount(async () => preloadImages(imagesToPreload.value));

    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    const testimonials: ComputedRef<Testimonial[]> = useTestimonials();

    return { testimonials, isMobile, imagesLoaded };
  },
});
</script>
