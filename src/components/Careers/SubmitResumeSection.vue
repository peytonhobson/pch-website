<template>
  <dual-item-display class="md:my-44">
    <template #leftColumn>
      <display-card
        class="w-full py-10 px-7 place-items-start"
        rows="1"
        :lift="false"
      >
        <resume-form />
      </display-card>
    </template>

    <template #rightColumn>
      <simple-description
        :header="firstDescriptionHeader"
        :text="firstDescriptionText"
        class="mb-5"
      />
      <div class="prose flex grow flex-wrap justify-start">
        <h4
          class="w-full mb-3 md:text-3xl text-2xl font-semibold text-left font-sen"
        >
          Requirements
        </h4>
        <ul class="list-disc w-full">
          <li
            v-for="item in requirements"
            :key="item"
            class="text-left font-sans text-slate-400"
          >
            {{ item }}
          </li>
        </ul>
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
