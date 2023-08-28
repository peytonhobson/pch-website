<template>
  <div class="card shadow-2xl bg-white w-5/6 md:max-w-md md:w-4/5 lg:max-w-none lg:w-1/2" :body="false">
    <figure class="m-0 w-full h-60">
      <div
        :style="` background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${imageLink});`"
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
    const imageLink =
      "https://media.istockphoto.com/photos/-picture-id1311934969?k=20&m=1311934969&s=612x612&w=0&h=ftaxrSpkUB_ftSu-Zcxp44C1pBpxntMzNFjf5rcXPkw=";

    return { imageLink, getImgURL };
  },
});
</script>
