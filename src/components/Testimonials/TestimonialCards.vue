<template>
  <section
    v-if="testimonials.length > 0"
    class="py-10 grid grid-cols-1 lg:grid-cols-3"
  >
    <div
      class="flex flex-col col-span-1 lg:col-start-1 md:justify-center lg:justify-between items-center md:max-w-xl mx-auto"
    >
      <image-card class="h-80 my-5 w-5/6" :image-link="images[0]" />
      <testimonial-card :testimonial="testimonials[3]" class="my-5 w-5/6" />
      <testimonial-card
        :testimonial="testimonials[1]"
        class="my-5 w-5/6 align-bottom"
      />
    </div>
    <div
      class="flex flex-col col-span-1 lg:col-start-2 justify-center md:justify-center lg:justify-between items-center md:max-w-xl mx-auto"
    >
      <testimonial-card :testimonial="testimonials[2]" class="my-5 w-5/6" />
      <image-card class="h-80 my-5 w-5/6" :image-link="images[1]" />
      <testimonial-card :testimonial="testimonials[5]" class="my-5 w-5/6" />
    </div>
    <div
      class="flex flex-col col-span-1 lg:col-start-3 justify-center md:justify-center lg:justify-between items-center md:max-w-xl mx-auto"
    >
      <testimonial-card :testimonial="testimonials[4]" class="my-5 w-5/6" />
      <testimonial-card :testimonial="testimonials[0]" class="my-5 w-5/6" />
      <image-card class="h-90 my-5 w-5/6" :image-link="images[2]" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

import TestimonialCard from "@/components/Testimonials/TestimonialCard.vue";
import ImageCard from "@/components/Shared/ImageCard.vue";

import { testimonials } from "@/data";

export default defineComponent({
  name: "TestimonialCards",
  components: {
    TestimonialCard,
    ImageCard,
  },
  setup() {
    const images = reactive([
      "https://premier-care-homes.s3.amazonaws.com/assets/other/resident-red-and-patriotic-sweaters.png",
      "https://premier-care-homes.s3.amazonaws.com/assets/other/resident-out-for-a-treat.png",
      "https://premier-care-homes.s3.amazonaws.com/assets/other/resident-christmas-guitar-music.png",
    ]);

    return { testimonials, images };
  },
});
</script>
