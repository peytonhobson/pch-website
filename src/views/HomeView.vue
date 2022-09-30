<template>
  <main
    class="w-full bg-hero-image bg-hero-opacity h-128 bg-no-repeat bg-cover flex align-middle"
  >
    <hero-slogan
      mainTextRow1="WHEN ONLY THE"
      mainTextRow2="BEST WILL DO"
      class="items-center justify-center"
    />
  </main>
  <div
    class="w-full flex-auto items-center py-5 px-20 border-b-4 border-brand-green-gray"
  >
    <span class="font-playfair text-black justify-center text-3xl flex-auto"
      >We know it’s a difficult decision when you or your loved one can no
      longer live independently at home. It is our goal to provide a
      comfortable, home-like environment as an alternative to impersonal
      institutional living.</span
    >
  </div>
  <div class="flex w-full">
    <div
      :key="descriptionBoxContent.title"
      v-for="descriptionBoxContent in descriptionBoxContents"
      class="w-1/3 flex-auto h-80"
    >
      <description-box
        :icon="descriptionBoxContent.icon"
        :title="descriptionBoxContent.title"
        :body="descriptionBoxContent.body"
        :iconClass="descriptionBoxContent.iconClass"
      />
    </div>
  </div>
  <div class="flex flex-auto justify-evenly pt-10 pb-44">
    <display-card-facilties class="w-2/7" />
    <display-card-locations class="w-2/7" />
    <display-card header="Facilities" class="w-2/7" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import HeroSlogan from "@/components/Home/HeroSlogan.vue";
import DescriptionBox from "@/components/Home/DescriptionBox.vue";
import DisplayCard from "@/components/Shared/DisplayCard.vue";
import DisplayCardFacilties from "@/components/Home/Cards/DisplayCardFacilties.vue";
import DisplayCardLocations from "@/components/Home/Cards/DisplayCardLocations.vue";

interface DescriptionBoxContent {
  icon: string[];
  title: string;
  body: string;
  iconClass: string;
}

export default defineComponent({
  name: "HomeView",
  components: {
    HeroSlogan,
    DescriptionBox,
    DisplayCard,
    DisplayCardFacilties,
    DisplayCardLocations,
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

    return { descriptionBoxContents };
  },
});
</script>

<style scoped></style>
