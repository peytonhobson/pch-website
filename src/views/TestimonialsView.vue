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

import Hero from "@/components/Shared/Hero/Hero.vue";
import TestimonialCards from "../components/Testimonials/TestimonialCards.vue";

export default defineComponent({
  name: "BlogPostView",
  components: {
    Hero,
    TestimonialCards,
  },
  setup() {
    const heroProps = {
      backgroundImage:
        "https://premier-care-homes.s3.amazonaws.com/assets/other/testimonials-hero.jpg",
      title: "TESTIMONIALS",
      text: "From Our Home to Your Hearts: Real Stories of Care",
    };

    return { heroProps };
  },
});
</script>
