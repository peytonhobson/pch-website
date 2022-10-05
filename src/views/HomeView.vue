<template>
  <hero />
  <div
    class="w-full h-[20vh] flex items-center py-5 px-10 md:px-20 border-b-4 border-brand-green-gray"
  >
    <span
      class="font-sans font-light text-black justify-center text-xl md:text-3xl flex-auto"
      >We know it’s a difficult decision when you or your loved one can no
      longer live independently at home. It is our goal to provide a
      comfortable, home-like environment as an alternative to impersonal
      institutional living.</span
    >
  </div>
  <div class="flex flex-wrap w-full">
    <div
      v-for="descriptionBoxContent in descriptionBoxContents"
      :key="descriptionBoxContent.title"
      class="w-full md:w-1/3 flex-auto h-80"
    >
      <description-box
        :icon="descriptionBoxContent.icon"
        :title="descriptionBoxContent.title"
        :body="descriptionBoxContent.body"
        :icon-class="descriptionBoxContent.iconClass"
      />
    </div>
  </div>
  <div class="flex flex-wrap justify-evenly pt-10 py-0 pb-10">
    <display-card-facilties
      class="md:w-2/7 my-10 md:my-0 w-5/6 show-on-scroll h-144"
    />
    <display-card-locations
      class="md:w-2/7 my-10 md:my-0 w-5/6 show-on-scroll h-144"
    />
    <display-card-contact
      class="md:w-2/7 my-10 md:my-0 w-5/6 show-on-scroll h-144"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

import Hero from "@/components/Home/Hero/Hero.vue";
import DescriptionBox from "@/components/Home/DescriptionBox.vue";
import DisplayCardFacilties from "@/components/Home/Cards/DisplayCardFacilties.vue";
import DisplayCardLocations from "@/components/Home/Cards/DisplayCardLocations.vue";
import DisplayCardContact from "@/components/Home/Cards/ContactCard/DisplayCardContact.vue";
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
    DescriptionBox,
    DisplayCardFacilties,
    DisplayCardLocations,
    DisplayCardContact,
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

    return { descriptionBoxContents };
  },
});
</script>

<style scoped></style>
