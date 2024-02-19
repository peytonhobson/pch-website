<template>
  <hero
    :image-url="heroProps.backgroundImage"
    :title="heroProps.title"
    :text="heroProps.text"
    class="h-[85vh]"
  />
  <testimonial-cards class="bg-mint" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import getImgURL from "@/composables/getImgURL";
import Hero from "@/components/Shared/Hero/Hero.vue";
import TestimonialCards from "../components/Testimonials/TestimonialCards.vue";
import TestimonialsHero from "@/assets/other/testimonials-hero.jpg";

export default defineComponent({
  name: "BlogPostView",
  components: {
    Hero,
    TestimonialCards,
  },
  setup() {
    const heroProps = {
      backgroundImage: TestimonialsHero,
      title: "TESTIMONIALS",
      text: "From Our Home to Your Hearts: Real Stories of Care",
    };

    return { getImgURL, heroProps };
  },
});
</script>
