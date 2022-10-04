<template>
  <section class="py-5 only:flex flex-wrap items-center justify-center">
    <testimonial-card
      v-for="testimonial in testimonials"
      :key="testimonial.id"
      :testimonial="testimonial"
      class="my-5 md:w-5/6"
    />
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

    return { testimonials };
  },
});
</script>
