<template>
  <section
    v-if="testimonials.length > 0"
    class="py-10 grid grid-cols-1 md:grid-cols-3"
  >
    <div class="flex flex-wrap col-span-1 md:col-start-1 justify-center">
      <image-card class="h-80 my-5 w-5/6" :image-link="images[0]" />
      <testimonial-card :testimonial="testimonials[3]" class="my-5 w-5/6" />
      <testimonial-card
        :testimonial="testimonials[1]"
        class="my-5 w-5/6 align-bottom"
      />
    </div>
    <div
      class="flex flex-wrap col-span-1 md:col-start-2 items-stretch justify-center"
    >
      <testimonial-card :testimonial="testimonials[2]" class="my-5 w-5/6" />
      <image-card class="h-80 my-5 w-5/6" :image-link="images[1]" />
      <testimonial-card :testimonial="testimonials[5]" class="my-5 w-5/6" />
    </div>
    <div
      class="flex flex-wrap col-span-1 md:col-start-3 items-stretch justify-center"
    >
      <testimonial-card :testimonial="testimonials[4]" class="my-5 w-5/6" />
      <testimonial-card :testimonial="testimonials[0]" class="my-5 w-5/6" />
      <image-card class="h-90 my-5 w-5/6" :image-link="images[2]" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ComputedRef } from "vue";

import TestimonialCard from "@/components/Testimonials/TestimonialCard.vue";
import ImageCard from "@/components/Shared/ImageCard.vue";

import { Testimonial } from "@/api/types";
import {
  useFetchTestimonialsDispatch,
  useTestimonials,
} from "@/store/composables";

export default defineComponent({
  name: "TestimonialCards",
  components: {
    TestimonialCard,
    ImageCard,
  },
  setup() {
    onMounted(useFetchTestimonialsDispatch);

    const images = reactive([
      "other/resident-red-and-patriotic-sweaters.png",
      "other/resident-out-for-a-treat.png",
      "other/resident-christmas-guitar-music.png",
    ]);

    const testimonials: ComputedRef<Testimonial[]> = useTestimonials();

    return { testimonials, images };
  },
});
</script>
