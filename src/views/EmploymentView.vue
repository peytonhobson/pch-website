<template>
  <hero
    :image-url="heroProps.backgroundImage"
    :title="heroProps.title"
    :text="heroProps.text"
    class="h-[85vh]"
  />
  <main class="pt-16 pb-32 lg:py-44 bg-mint">
    <submit-resume-section />
    <share-with-friend-section />
  </main>
</template>

<script>
import { defineComponent } from "vue";

import SubmitResumeSection from "@/components/Employment/SubmitResumeSection.vue";
import ShareWithFriendSection from "@/components/Employment/ShareWithFriendSection.vue";
import Hero from "@/components/Shared/Hero/Hero.vue";
import EmploymentHero from "@/assets/other/employment-hero.jpg";

export default defineComponent({
  name: "EmploymentView",
  components: {
    SubmitResumeSection,
    ShareWithFriendSection,
    Hero,
  },
  setup() {
    const heroProps = {
      title: "EMPLOYMENT",
      text: "Premier Care Homes is always accepting applications and looking to hire exceptional staff members to complement our highly qualified family of personnel. If you or someone you know meet the following requirements and are looking to join our team, please contact us.",
      backgroundImage: EmploymentHero,
    };

    return { heroProps };
  },
});
</script>
