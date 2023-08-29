<template>
  <dual-item-display :reverse-column="true">
    <template #leftColumn class="h-full items-center">
      <card
        class="w-5/6 md:w-3/4 lg:w-full py-10 h-full mt-10 lg:mt-0 flex items-center md:max-w-lg lg:max-w-none"
        :body="false"
      >
        <template #other>
          <span class="flex justify-center md:justify-end w-full">
            <notifications group="resume" class="static w-full" />
          </span>
          <resume-form />
        </template>
      </card>
    </template>

    <template #rightColumn>
      <div class="flex flex-wrap items-center h-full">
        <div class="flex flex-col items-center">
          <simple-description
            :header="firstDescriptionHeader"
            :text="firstDescriptionText"
            class="mb-5 !justify-start md:justify-center w-5/6 md:w-full"
          />
          <div
            class="prose flex md:grow w-5/6 mt-5 md:w-full flex-wrap justify-center md:justify-start items-center"
          >
            <h2 class="w-full mb-3 text-left">Requirements</h2>
            <ul class="list-disc w-full">
              <li v-for="item in requirements" :key="item" class="text-left">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </template>
  </dual-item-display>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Card from "@/components/Shared/Card.vue";
import ResumeForm from "./Forms/ResumeForm.vue";
import DualItemDisplay from "@/components/Shared/DualItemDisplay.vue";
import SimpleDescription from "@/components/Shared/SimpleDescription.vue";

export default defineComponent({
  name: "SubmitResumeSection",
  components: {
    Card,
    ResumeForm,
    DualItemDisplay,
    SimpleDescription,
  },
  setup() {
    const requirements = [
      "Two years of caregiving experience",
      "Clean criminal background check",
      "Detail-oriented",
      "Team player",
      "Caring, compassionate, and patient",
    ];

    const firstDescriptionHeader = "Submit Your Resumé";
    const firstDescriptionText =
      "You may use this form to submit your PDF resumé for consideration, or you may send it to employment@premiercarehomes.net.";

    return {
      requirements,
      firstDescriptionHeader,
      firstDescriptionText,
    };
  },
});
</script>
