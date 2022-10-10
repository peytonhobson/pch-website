<template>
  <dual-item-display class="md:my-44">
    <template #leftColumn>
      <display-card class="w-full py-10 px-7" rows="1" :lift="false">
        <share-with-friend-form />
      </display-card>
    </template>

    <template #rightColumn>
      <simple-description :header="descriptionHeader" :text="descriptionText" />
    </template>
  </dual-item-display>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import DisplayCard from "@/components/Shared/DisplayCard.vue";
import ShareWithFriendForm from "@/components/Careers/Forms/ShareWithFriendForm.vue";
import SimpleDescription from "@/components/Shared/SimpleDescription.vue";
import DualItemDisplay from "@/components/Shared/DualItemDisplay.vue";

export default defineComponent({
  name: "SubmitFriendSection",
  components: {
    DisplayCard,
    ShareWithFriendForm,
    DualItemDisplay,
    SimpleDescription,
  },
  setup() {
    const descriptionHeader = "Share with a friend";

    const descriptionText =
      "If you know of someone searching for a job who fits the criteria of employment with Premier Care Homes, please share a link to this page.";

    return { descriptionHeader, descriptionText };
  },
});
</script>
