<template>
  <section class="text-6xl border-y-2 border-y-brand-green-gray py-4">
    Resources
  </section>
  <section
    class="w-screen flex flex-wrap md:flex-nowrap items-center justify-evenly md:h-128"
  >
    <display-card
      header="Web Links"
      class="w-5/6 md:w-2/5 h-full mt-20"
      :bottom-border="true"
    >
      <ul class="flex flex-wrap justify-start row-span-6 py-5 px-10 list-disc">
        <li
          v-for="webLink in resources.webLinks"
          :key="webLink.id"
          class="hover:underline text-left mb-4 md:mb-0"
        >
          <a :href="webLink.link" target="_blank" title="">{{
            webLink.text
          }}</a>
        </li>
      </ul>
    </display-card>
    <display-card
      header="PDF Downloads"
      class="w-5/6 md:w-2/5 h-full mt-20 pt-5"
      :bottom-border="true"
    >
      <ul class="flex flex-wrap row-span-6 py-5 px-10 list-disc h-1/2">
        <li
          v-for="pdfDownload in resources.pdfDownloads"
          :key="pdfDownload.id"
          class="hover:underline text-left"
        >
          <a :href="pdfDownload.link" target="_blank" title="">{{
            pdfDownload.text
          }}</a>
        </li>
      </ul>
    </display-card>
  </section>
</template>
a

<script lang="ts">
import { defineComponent, onMounted, ComputedRef } from "vue";

import DisplayCard from "@/components/Shared/DisplayCard.vue";
import { useFetchResourcesDispatch, useResources } from "@/store/composables";
import { Resource } from "@/api/types";

export default defineComponent({
  name: "BlogPostView",
  components: {
    DisplayCard,
  },
  setup() {
    onMounted(useFetchResourcesDispatch);

    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    const resources: ComputedRef<Resource> = useResources();

    return { resources, isMobile };
  },
});
</script>
