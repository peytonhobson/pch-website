<template>
  <dual-item-display class="mt-32 lg:mt-44" :reverse-column="true">
    <template #leftColumn>
      <image-card
        image-link="other/resident-red-and-patriotic-sweaters.png"
        class="w-5/6 md:w-3/4 lg:w-full max-w-lg mt-10 lg:mt-0 md:h-128 duration-500 md:hover:-translate-y-5 transition-all hover:cursor-pointer"
      />
    </template>

    <template #rightColumn>
      <simple-description
        :header="descriptionHeader"
        :text="descriptionText"
        class="md:max-w-lg lg:max-w-none"
      />
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

    const descriptionText = `The Home Care Team is dedicated to providing a secure, comfortable, and respectful environment for our residents. Each home has a resident manager who has completed the rigorous "Ensuring Quality Care" course through Northwest Senior Disability Services. Our carefully selected staff have passed required courses in caregiving, dementia care, medication administration, and maintain current Red Cross CPR certifications. They also participate in yearly continuing education and are required to have a clean criminal record. Our homes benefit from the oversight of medical professionals, including physical therapists, a nurse, and a paramedic, ensuring comprehensive and attentive care.`;

    return { descriptionHeader, descriptionText, getImgURL };
  },
});
</script>
