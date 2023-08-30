<template>
  <hero
    class="w-full"
    title="WHEN ONLY THE BEST WILL DO"
    image-url="other/landing-hero.jpg"
    ><div class="flex justify-evenly w-full">
    <div class="w-32 md:w-44">
      <action-button type="primary" text="Learn More" class="md:whitespace-nowrap" @click="handleLearnMoreClick"/>
      </div>
      <router-link to="/About-Us" class="w-32 md:w-44"
        ><action-button type="primary" text="About Us" class="md:whitespace-nowrap"
      /></router-link></div
  ></hero>
  <div ref="learnMoreRef"></div>
  <hero-caption />
  <section class="bg-mint" >
    <div class="flex flex-wrap w-full justify-evenly show-on-scroll">
      <description-box
        v-for="descriptionBoxContent in descriptionBoxContents"
        :key="descriptionBoxContent.title"
        :icon="descriptionBoxContent.icon"
        :title="descriptionBoxContent.title"
        :body="descriptionBoxContent.body"
        :icon-class="descriptionBoxContent.iconClass"
        class="md:max-w-md md:w-2/5 lg:w-2/7 mb-10 w-5/6 h-72 md:mb-20 md:mx-4 lg:min-w-[23rem]"
      />
    </div>
    <div
      class="flex flex-wrap justify-evenly show-on-scroll carousel-tag"
    >
      <facilities-card
        class="md:max-w-md mb-10 md:mb-20 w-5/6 md:w-2/7 h-144 md:min-w-[23rem]"
      />
      <locations-card
        class="md:max-w-md  mb-10 md:mb-20 w-5/6 md:w-2/7 h-144 md:min-w-[23rem]"
        route="Facilities"
      />
      <contact-card
        class="md:max-w-md mb-10 md:mb-20 w-5/6 md:w-2/7 h-144 md:min-w-[23rem]"
      />
      <contact-form-container class="md:max-w-md lg:max-w-none mb-10 md:mb-20 w-5/6 md:w-2/7 lg:w-2/5 md:h-144 md:min-w-[23rem]" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

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

    const learnMoreRef = ref<HTMLElement | null>(null);

    const handleLearnMoreClick = () => {
      const navBarHeight = document.querySelector("nav")?.clientHeight;

      if(learnMoreRef?.value) {
        window.scrollTo({
          top: learnMoreRef.value.offsetTop - navBarHeight!,
          behavior: "smooth",
        });
      }
    };

    onMounted(setScrollObserver);

    return { descriptionBoxContents, getImgURL, learnMoreRef, handleLearnMoreClick };
  },
});
</script>
