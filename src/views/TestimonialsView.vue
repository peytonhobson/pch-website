<template>
  <hero
    :image-url="heroProps.backgroundImage"
    :title="heroProps.title"
    :text="heroProps.text"
    class="h-[85vh]"
  />
  <section
    v-if="testimonials.length > 0 && !isMobile"
    class="py-5 grid grid-cols-3"
  >
    <div class="flex flex-wrap col-span-1 col-start-1 justify-center">
      <image-card class="h-80 my-5 md:w-5/6" :image-link="images[0]" />
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
      <image-card class="h-80 my-5 md:w-5/6" :image-link="images[1]" />
      <testimonial-card :testimonial="testimonials[5]" class="my-5 md:w-5/6" />
    </div>
    <div
      class="flex flex-wrap col-span-1 col-start-3 items-stretch justify-center"
    >
      <testimonial-card :testimonial="testimonials[4]" class="my-5 md:w-5/6" />
      <testimonial-card :testimonial="testimonials[0]" class="my-5 md:w-5/6" />
      <image-card class="h-80 my-5 md:w-5/6" :image-link="images[2]" />
    </div>
  </section>
  <section
    v-if="testimonials.length > 0 && isMobile"
    class="py-5 flex flex-wrap justify-center px-10"
  >
    <testimonial-card :testimonial="testimonials[0]" class="my-5" />
    <image-card class="h-80 my-5" :image-link="images[0]" />
    <testimonial-card :testimonial="testimonials[1]" class="my-5" />
    <testimonial-card :testimonial="testimonials[2]" class="my-5" />
    <image-card class="h-80 my-5" :image-link="images[1]" />
    <testimonial-card :testimonial="testimonials[3]" class="my-5" />
    <testimonial-card :testimonial="testimonials[4]" class="my-5" />
    <testimonial-card :testimonial="testimonials[5]" class="my-5" />
    <image-card class="h-80 my-5" :image-link="images[2]" />
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
import ImageCard from "@/components/Shared/ImageCard.vue";
import Hero from "@/components/Shared/Hero/Hero.vue";

export default defineComponent({
  name: "BlogPostView",
  components: {
    TestimonialCard,
    ImageCard,
    Hero,
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

    const heroProps = {
      backgroundImage: "other/resident-wheelchair-balloon-girl.png",
      title: "TESTIMONIALS",
      text: "Hear the best about us",
    };

    const testimonials: ComputedRef<Testimonial[]> = useTestimonials();

    return { testimonials, isMobile, images, getImgURL, heroProps };
  },
});
</script>
