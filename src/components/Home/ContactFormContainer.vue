<template>
  <div class="card shadow-2xl bg-white" :body="false">
    <figure class="m-0 w-full h-60">
      <div
        :style="`background: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(${imageLink}); background-size: cover; background-position: center 100%;`"
        class="flex items-center justify-center w-full h-full"
      >
        <h2 class="text-white font-bold text-3xl">Questions?</h2>
      </div>
    </figure>
    <notifications group="contact" />
    <div class="card-body items-center px-0 py-8">
      <contact-form />
    </div>
  </div>
</template>

<script lang="ts">
import getImgURL from "@/composables/getImgURL";
import { defineComponent } from "vue";

import ContactForm from "./ContactForm.vue";

export default defineComponent({
  name: "ContactFormContainer",
  components: {
    ContactForm,
  },
  setup() {
    const imageLink = getImgURL("other/questions-background.jpg");

    return { imageLink, getImgURL };
  },
});
</script>
