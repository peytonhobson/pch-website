<template>
  <section class="text-6xl border-y-2 border-y-brand-green-gray py-4">
    Testimonials
  </section>
  <section v-if="testimonials.length > 0" class="py-5 grid grid-cols-3">
    <div class="flex flex-wrap col-span-1 col-start-1">
      <testimonial-card :testimonial="testimonials[0]" class="my-5 md:w-5/6" />
      <testimonial-card :testimonial="testimonials[1]" class="my-5 md:w-5/6" />
    </div>
    <div class="flex flex-wrap col-span-1 col-start-2">
      <testimonial-card :testimonial="testimonials[2]" class="my-5 md:w-5/6" />
      <testimonial-card :testimonial="testimonials[5]" class="my-5 md:w-5/6" />
    </div>
    <div class="flex flex-wrap col-span-1 col-start-3">
      <testimonial-card :testimonial="testimonials[4]" class="my-5 md:w-5/6" />
      <testimonial-card :testimonial="testimonials[3]" class="my-5 md:w-5/6" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ComputedRef } from "vue";

import {
  useFetchTestimonialsDispatch,
  useTestimonials,
} from "@/store/composables";
import TestimonialCard from "@/components/Testimonials/TestimonialCard.vue";
import { Testimonial } from "@/api/types";

export default defineComponent({
  name: "BlogPostView",
  components: {
    TestimonialCard,
  },
  setup() {
    onMounted(useFetchTestimonialsDispatch);

    const testimonials: ComputedRef<Testimonial[]> = useTestimonials();
    console.log(testimonials.value);

    return { testimonials };
  },
});
</script>
