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
        class="h-80 my-5 md:w-5/6 rounded-2xl flex items-center justify-center"
      >
        <img :src="getImgURL(images[0])" class="w-full h-full rounded-2xl" />
      </div>
      <testimonial-card :testimonial="testimonials[3]" class="my-5 md:w-5/6" />
      <testimonial-card
        :testimonial="testimonials[1]"
        class="my-5 md:w-5/6 align-bottom"
      />
    </div>
    <div
      class="flex flex-wrap col-span-1 col-start-2 items-stretch justify-center"
    >
      <testimonial-card :testimonial="testimonials[2]" class="my-5 md:w-5/6" />
      <div
        class="h-80 my-5 md:w-5/6 rounded-2xl flex items-center justify-center"
      >
        <img :src="getImgURL(images[1])" class="w-full h-full rounded-2xl" />
      </div>
      <testimonial-card :testimonial="testimonials[5]" class="my-5 md:w-5/6" />
    </div>
    <div
      class="flex flex-wrap col-span-1 col-start-3 items-stretch justify-center"
    >
      <testimonial-card :testimonial="testimonials[4]" class="my-5 md:w-5/6" />
      <testimonial-card :testimonial="testimonials[0]" class="my-5 md:w-5/6" />
      <div
        class="h-90 my-5 md:w-5/6 rounded-2xl flex items-center justify-center"
      >
        <img :src="getImgURL(images[2])" class="w-full h-full rounded-2xl" />
      </div>
    </div>
  </section>
  <section
    v-if="testimonials.length > 0 && isMobile"
    class="py-5 flex flex-wrap justify-center"
  >
    <testimonial-card :testimonial="testimonials[0]" class="my-5 w-5/6" />
    <div
      class="h-80 my-5 md:w-5/6 rounded-2xl flex items-center justify-center"
    >
      <img :src="getImgURL(images[0])" class="w-5/6 h-full rounded-2xl" />
    </div>
    <testimonial-card :testimonial="testimonials[1]" class="my-5 w-5/6" />
    <testimonial-card :testimonial="testimonials[2]" class="my-5 w-5/6" />
    <div
      class="h-80 my-5 md:w-5/6 rounded-2xl flex items-center justify-center"
    >
      <img :src="getImgURL(images[1])" class="w-5/6 h-full rounded-2xl" />
    </div>
    <testimonial-card :testimonial="testimonials[3]" class="my-5 w-5/6" />
    <testimonial-card :testimonial="testimonials[4]" class="my-5 w-5/6" />
    <testimonial-card :testimonial="testimonials[5]" class="my-5 w-5/6" />
    <div
      class="h-80 my-5 md:w-5/6 rounded-2xl flex items-center justify-center"
    >
      <img :src="getImgURL(images[2])" class="w-5/6 h-full rounded-2xl" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ComputedRef, reactive } from "vue";

import {
  useFetchTestimonialsDispatch,
  useTestimonials,
} from "@/store/composables";
import TestimonialCard from "@/components/Testimonials/TestimonialCard.vue";
import { Testimonial } from "@/api/types";
import getImgURL from "@/helpers/getImgURL";

export default defineComponent({
  name: "BlogPostView",
  components: {
    TestimonialCard,
  },
  setup() {
    onMounted(useFetchTestimonialsDispatch);

    const images = reactive([
      "other/resident-red-and-patriotic-sweaters.png",
      "other/resident-out-for-a-treat.png",
      "other/resident-christmas-guitar-music.png",
    ]);

    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    const testimonials: ComputedRef<Testimonial[]> = useTestimonials();

    return { testimonials, isMobile, images, getImgURL };
  },
});
</script>
