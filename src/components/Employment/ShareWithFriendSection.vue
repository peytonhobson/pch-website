<template>
  <dual-item-display class="mt-32 lg:mt-44" :reverse-column="true">
    <template #leftColumn>
      <card
        class="w-5/6 md:w-3/4 lg:w-full py-10 h-full mt-10 lg:mt-0 flex items-center md:max-w-lg lg:max-w-none"
        :body="false"
      >
        <template #other>
          <span class="flex justify-center md:justify-end w-full">
            <notifications group="friend" class="static w-full" />
          </span>
          <share-with-friend-form />
        </template>
      </card>
    </template>

    <template #rightColumn>
      <simple-description :header="descriptionHeader" :text="descriptionText" />
    </template>
  </dual-item-display>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Card from "@/components/Shared/Card.vue";
import ShareWithFriendForm from "@/components/Employment/Forms/ShareWithFriendForm.vue";
import SimpleDescription from "@/components/Shared/SimpleDescription.vue";
import DualItemDisplay from "@/components/Shared/DualItemDisplay.vue";

export default defineComponent({
  name: "SubmitFriendSection",
  components: {
    Card,
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
