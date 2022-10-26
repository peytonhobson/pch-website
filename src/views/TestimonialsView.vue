<template>
  <hero
    :image-url="heroProps.backgroundImage"
    :title="heroProps.title"
    :text="heroProps.text"
    class="h-[85vh]"
  />
  <testimonial-cards class="bg-brand-light-gray" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import getImgURL from "@/composables/getImgURL";
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
      backgroundImage: "other/resident-wheelchair-balloon-girl.png",
      title: "TESTIMONIALS",
      text: "Hear the best about us",
    };

    return { getImgURL, heroProps };
  },
});
</script>
