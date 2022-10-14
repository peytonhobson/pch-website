<template>
  <dual-item-display class="my-10 xl:my-44" :reverse-column="true">
    <template #leftColumn class="h-full items-center">
      <display-card
        class="w-5/6 md:w-3/4 xl:w-full py-10 px-7 h-full mt-10 xl:mt-0"
        rows="1"
        :lift="false"
      >
        <span class="flex justify-center md:justify-end w-full">
          <notifications group="resume" class="static w-full" />
        </span>
        <resume-form />
      </display-card>
    </template>

    <template #rightColumn>
      <div class="flex flex-wrap justify-center items-center h-full">
        <simple-description
          :header="firstDescriptionHeader"
          :text="firstDescriptionText"
          class="mb-5"
        />
        <div
          class="prose flex md:grow w-5/6 mt-5 md:w-full flex-wrap justify-center md:justify-start"
        >
          <h2 class="w-full mb-3 text-left">Requirements</h2>
          <ul class="list-disc w-full">
            <li
              v-for="item in requirements"
              :key="item"
              class="text-left text-slate-400"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </template>
  </dual-item-display>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import DisplayCard from "../Shared/DisplayCard.vue";
import ResumeForm from "./Forms/ResumeForm.vue";
import DualItemDisplay from "@/components/Shared/DualItemDisplay.vue";
import SimpleDescription from "@/components/Shared/SimpleDescription.vue";

export default defineComponent({
  name: "SubmitResumeSection",
  components: {
    DisplayCard,
    ResumeForm,
    DualItemDisplay,
    SimpleDescription,
  },
  setup() {
    const requirements = [
      "Two years of caregiving experience",
      "Clean criminal background check",
      "Able to pass a drug screening",
      "Detail oriented",
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
