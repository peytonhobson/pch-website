<template>
  <hero
    :image-url="heroProps.backgroundImage"
    :title="heroProps.title"
    :text="heroProps.text"
    class="h-[85vh]"
  />
  <section
    class="flex flex-wrap justify-evenly py-10 show-on-scroll md:h-screen"
  >
    <router-link
      v-for="facility in filteredFacilities"
      :key="facility.id"
      :to="`/Facilities/${facility.name.toLowerCase()}`"
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
import {
  useFilteredFacilities,
  useFetchFacilitiesDispatch,
} from "@/store/composables";
import Hero from "@/components/Shared/Hero/Hero.vue";

export default defineComponent({
  name: "FacilitiesView",
  components: {
    FacilityCard,
    Hero,
  },
  setup() {
    onMounted(setScrollObserver);
    onMounted(useFetchFacilitiesDispatch);

    const filteredFacilities = useFilteredFacilities();

    const heroProps = {
      title: "FACILITIES",
      text: "Check out our dope homes",
      backgroundImage: "hallet/hallet-7.jpg",
    };

    return { filteredFacilities, heroProps };
  },
});
</script>
