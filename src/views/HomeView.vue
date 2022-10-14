<template>
  <hero
    class="h-[85vh] md:h-[85vh] w-full"
    image-url="other/resident-edith-and-red.jpg"
  />
  <hero-caption />
  <div class="flex flex-wrap w-full">
    <description-box
      v-for="descriptionBoxContent in descriptionBoxContents"
      :key="descriptionBoxContent.title"
      :icon="descriptionBoxContent.icon"
      :title="descriptionBoxContent.title"
      :body="descriptionBoxContent.body"
      :icon-class="descriptionBoxContent.iconClass"
    />
  </div>
  <div
    class="flex flex-wrap justify-evenly pt-10 py-0 pb-10 show-on-scroll carousel-tag"
  >
    <facilities-card class="md:max-w-md md:w-2/5 xl:w-2/7 my-10 w-5/6 h-144" />
    <locations-card
      class="md:max-w-md md:w-2/5 xl:w-2/7 my-10 w-5/6 h-144"
      route="Facilities"
    />
    <contact-card class="md:max-w-md md:w-2/5 xl:w-2/7 my-10 w-5/6 h-144" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

import Hero from "@/components/Home/Hero/Hero.vue";
import HeroCaption from "@/components/Home/HeroCaption.vue";
import DescriptionBox from "@/components/Home/DescriptionBox.vue";
import FacilitiesCard from "@/components/Home/Cards/FacilityCard/FacilitiesCard.vue";
import LocationsCard from "@/components/Home/Cards/LocationsCard.vue";
import ContactCard from "@/components/Home/Cards/ContactCard/ContactCard.vue";
import setScrollObserver from "@/helpers/setScrollObserver";

interface DescriptionBoxContent {
  icon: string[];
  title: string;
  body: string;
  iconClass: string;
}

export default defineComponent({
  name: "HomeView",
  components: {
    Hero,
    HeroCaption,
    DescriptionBox,
    FacilitiesCard,
    LocationsCard,
    ContactCard,
  },
  setup() {
    const descriptionBoxContents: DescriptionBoxContent[] = [
      {
        icon: ["fas", "briefcase-medical"],
        title: "Professional Care",
        body: "Rest assured that your loved ones are being cared for by professional Physical Therapists, an RN, and a paramedic 24 hours a day.",
        iconClass: "primary-icon",
      },
      {
        icon: ["fas", "people-carry"],
        title: "Burden Free",
        body: "We take the burdens off of families who are currently providing their loved ones care or overseeing their care.",
        iconClass: "secondary-icon",
      },
      {
        icon: ["fas", "people-group"],
        title: "Caregiver Ratio",
        body: "Residents benefit from our low 5:1 resident to caregiver ratio.",
        iconClass: "tertiary-icon",
      },
    ];

    const imageLinks = [
      "other/resident-edith-and-red.jpg",
      "other/resident-blue-tag-dog.png",
      "madrona/madrona-2.jpg",
    ];

    onMounted(setScrollObserver);

    return { descriptionBoxContents, imageLinks };
  },
});
</script>
