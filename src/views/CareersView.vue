<template>
  <static-hero
    :first-row-text="heroProps.firstRowText"
    :second-row-text="heroProps.secondRowText"
    :background-image-class="heroProps.backgroundImageClass"
  />
  <submit-resume-section />
</template>

<script>
import { defineComponent } from "vue";

import SubmitResumeSection from "@/components/Careers/SubmitResumeSection.vue";
import StaticHero from "@/components/Shared/StaticHero.vue";

export default defineComponent({
  name: "CareersView",
  components: {
    StaticHero,
    SubmitResumeSection,
  },
  setup() {
    const heroProps = {
      firstRowText: "EMPLOYMENT",
      secondRowText:
        "Premier Care Homes is always accepting applications and looking to hire exceptional staff members to complement our highly qualified family of personnel. If you or someone you know meet the following requirements and are looking to join our team, please contact us.",
      backgroundImageClass: "bg-hero-image-madrona",
    };

    return { heroProps };
  },
});
</script>
