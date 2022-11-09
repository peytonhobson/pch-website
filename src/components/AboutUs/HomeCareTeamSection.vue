<template>
  <dual-item-display class="mt-60 xl:my-44" :reverse-column="true">
    <template #leftColumn>
      <image-card
        image-link="other/resident-red-and-patriotic-sweaters.png"
        class="w-5/6 md:w-3/4 xl:w-full max-w-lg mt-10 xl:mt-0 md:h-128 duration-500 md:hover:-translate-y-5 transition-all hover:cursor-pointer"
      />
    </template>

    <template #rightColumn>
      <simple-description :header="descriptionHeader" :text="descriptionText" />
    </template>
  </dual-item-display>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DualItemDisplay from "@/components/Shared/DualItemDisplay.vue";
import SimpleDescription from "@/components/Shared/SimpleDescription.vue";
import getImgURL from "@/composables/getImgURL";
import ImageCard from "@/components/Shared/ImageCard.vue";

export default defineComponent({
  name: "HomeCareTeamSection",
  components: {
    DualItemDisplay,
    SimpleDescription,
    ImageCard,
  },
  setup() {
    const descriptionHeader = "The Home Care Team";

    const descriptionText =
      "Our Senior Care Home team at Premier Care Homes consists of staff members that are" +
      "carefully selected in order to meet our own, and your high standards, ensuring each" +
      "resident is in a secure, comfortable, and respected environment. All staff have attended" +
      "and passed a stated required caregiver, dementia, and medication administration" +
      "course. They are required to complete yearly continuing education and maintain current" +
      "Red Cross CPR certifications. Everyone is required to have a clean criminal record." +
      "Our homes are overseen by medical professionals, including physical therapists, a" +
      "nurse, and paramedic.";

    return { descriptionHeader, descriptionText, getImgURL };
  },
});
</script>
