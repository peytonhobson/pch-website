<template>
  <section
    class="bg-white h-[190vh] md:h-screen flex items-center justify-evenly mt-10 md:py-20"
  >
    <div
      class="grid md:grid-cols-12 grid-cols-1 grid-rows-8 md:grid-rows-1 h-full justify-evenly w-full"
    >
      <div
        class="md:col-span-5 row-start-4 md:row-auto flex items-center justify-center md:justify-end w-full py-5 md:py-10 pb-20"
      >
        <display-card
          class="w-5/6 py-10 px-5 md:px-10 place-items-start"
          rows="1"
        >
          <resume-form />
        </display-card>
      </div>
      <!--end col-->

      <div
        class="md:col-span-7 row-start-1 row-span-3 md:row-auto flex md:items-center md:justify-center my-7 md:my-0 px-10 md:px-0"
      >
        <div class="lg:ml-4">
          <h4
            class="mb-5 md:text-3xl text-2xl lg:leading-normal leading-normal font-sen font-semibold text-left"
          >
            Submit Your Resumé
          </h4>
          <!-- eslint-disable vue/no-v-html -->
          <p class="text-slate-400 max-w-xl text-left font-sans">
            You may use this form to submit your PDF resumé for consideration,
            or you may send it to employment@premiercarehomes.net.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import DisplayCard from "../Shared/DisplayCard.vue";
import ResumeForm from "./Forms/ResumeForm.vue";

export default defineComponent({
  name: "SubmitResumeSection",
  components: {
    DisplayCard,
    ResumeForm,
  },
  setup() {},
});
</script>
