<template>
  <hero
    :image-url="heroProps.backgroundImage"
    :title="heroProps.title"
    :text="heroProps.text"
    class="h-[85vh]"
  />
  <submit-resume-section />
  <share-with-friend-section />
</template>

<script>
import { defineComponent } from "vue";

import SubmitResumeSection from "@/components/Careers/SubmitResumeSection.vue";
import ShareWithFriendSection from "@/components/Careers/ShareWithFriendSection.vue";
import Hero from "@/components/Shared/Hero/Hero.vue";

export default defineComponent({
  name: "CareersView",
  components: {
    SubmitResumeSection,
    ShareWithFriendSection,
    Hero,
  },
  setup() {
    const heroProps = {
      title: "CAREERS",
      text: "Premier Care Homes is always accepting applications and looking to hire exceptional staff members to complement our highly qualified family of personnel. If you or someone you know meet the following requirements and are looking to join our team, please contact us.",
      backgroundImage: "other/resident-blue-tag-dog.png",
    };

    return { heroProps };
  },
});
</script>
