<template>
  <hero
    :image-url="heroProps.backgroundImage"
    :title="heroProps.title"
    :text="heroProps.text"
    class="h-[85vh]"
  />
  <section class="flex flex-wrap justify-evenly py-10 show-on-scroll bg-mint">
    <router-link
      v-for="facility in facilities"
      :key="facility.id"
      :to="`/facilities/${facility.name.toLowerCase()}`"
      class="w-5/6 md:w-2/5 xl:h-60 my-10 hover:cursor-pointer"
    >
      <facility-card
        :facility="facility"
        class="h-full duration-500 xl:hover:-translate-y-5 transition-all"
      />
    </router-link>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

import FacilityCard from "@/components/Facilities/FacilityCard.vue";
import setScrollObserver from "@/composables/setScrollObserver";
import { facilities } from "@/data/Facilities.en";
import Hero from "@/components/Shared/Hero/Hero.vue";

export default defineComponent({
  name: "FacilitiesView",
  components: {
    FacilityCard,
    Hero,
  },
  setup() {
    onMounted(setScrollObserver);

    const heroProps = {
      title: "FACILITIES",
      text: "Elegant Living Spaces Tailored for Exceptional Care",
      backgroundImage:
        "https://premier-care-homes.s3.amazonaws.com/assets/other/facilities-hero.jpg",
    };

    return { facilities, heroProps };
  },
});
</script>
