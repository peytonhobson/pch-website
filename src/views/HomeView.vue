<template>
  <hero
    class="w-full"
    title="WHEN ONLY THE BEST WILL DO"
    image-url="other/resident-edith-and-red.jpg"
    ><div class="flex justify-evenly w-full">
      <router-link to="/Services" class="w-32 md:w-44"
        ><action-button type="primary" text="Get Started" class="md:whitespace-nowrap"/> </router-link
      ><router-link to="/About-Us" class="w-32 md:w-44"
        ><action-button type="primary" text="About Us" class="md:whitespace-nowrap"
      /></router-link></div
  ></hero>
  <hero-caption />
  <section class="bg-mint">
    <div class="flex flex-wrap w-full justify-evenly show-on-scroll">
      <description-box
        v-for="descriptionBoxContent in descriptionBoxContents"
        :key="descriptionBoxContent.title"
        :icon="descriptionBoxContent.icon"
        :title="descriptionBoxContent.title"
        :body="descriptionBoxContent.body"
        :icon-class="descriptionBoxContent.iconClass"
        class="md:max-w-md md:w-2/5 xl:w-2/7 mt-10 w-5/6 h-72 md:mt-0 md:last-of-type:mt-20 lg:last-of-type:mt-0"
      />
    </div>
    <div
      class="flex flex-wrap justify-evenly md:py-10 pb-10 show-on-scroll carousel-tag"
    >
      <facilities-card
        class="md:max-w-md md:w-2/5 xl:w-2/7 mt-10 md:my-10 w-5/6 h-144"
      />
      <locations-card
        class="md:max-w-md md:w-2/5 xl:w-2/7 mt-10 md:my-10 w-5/6 h-144"
        route="Facilities"
      />
      <contact-card
        class="md:max-w-md md:w-4/5 mt-10 xl:w-2/7 md:my-10 w-5/6 h-144"
      />
    </div>
    <div class="flex justify-center items-center show-on-scroll">
      <contact-form-container />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

import Hero from "@/components/Shared/Hero/Hero.vue";
import HeroCaption from "@/components/Home/HeroCaption.vue";
import DescriptionBox from "@/components/Home/DescriptionBox.vue";
import FacilitiesCard from "@/components/Home/Cards/FacilityCard/FacilitiesCard.vue";
import LocationsCard from "@/components/Home/Cards/LocationsCard.vue";
import ContactCard from "@/components/Home/Cards/ContactCard/ContactCard.vue";
import setScrollObserver from "@/composables/setScrollObserver";
import ActionButton from "@/components/Shared/ActionButton.vue";
import ContactFormContainer from "@/components/Home/ContactFormContainer.vue";

import getImgURL from "@/composables/getImgURL";

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
    ActionButton,
    ContactFormContainer,
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

    onMounted(setScrollObserver);

    return { descriptionBoxContents, getImgURL };
  },
});
</script>
