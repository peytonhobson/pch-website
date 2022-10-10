<template>
  <static-hero
    :first-row-text="heroProps.firstRowText"
    :second-row-text="heroProps.secondRowText"
    :background-image-style="heroProps.backgroundImageStyle"
  />
  <submit-resume-section />
  <share-with-friend-section />
</template>

<script>
import { defineComponent } from "vue";

import SubmitResumeSection from "@/components/Careers/SubmitResumeSection.vue";
import ShareWithFriendSection from "@/components/Careers/ShareWithFriendSection.vue";
import StaticHero from "@/components/Shared/StaticHero.vue";

export default defineComponent({
  name: "CareersView",
  components: {
    StaticHero,
    SubmitResumeSection,
    ShareWithFriendSection,
  },
  setup() {
    const heroProps = {
      firstRowText: "EMPLOYMENT",
      secondRowText:
        "Premier Care Homes is always accepting applications and looking to hire exceptional staff members to complement our highly qualified family of personnel. If you or someone you know meet the following requirements and are looking to join our team, please contact us.",
      backgroundImageStyle:
        "background-image: url('https://pch-development-data.s3.amazonaws.com/pch_photos/other/resident-blue-tag-dog.jpeg')",
    };

    return { heroProps };
  },
});
</script>
