<template>
  <section class="text-6xl border-y-2 border-y-brand-green-gray py-4">
    Resources
  </section>
  <section
    v-if="windowWidth <= 640"
    class="w-screen flex flex-wrap md:flex-nowrap items-start justify-evenly md:h-128"
  >
    <display-card
      v-if="isMobile"
      header="Web Links"
      class="w-5/6 md:w-2/5 md:h-full mt-10"
      :bottom-border="true"
      rows="7"
    >
      <ul class="flex flex-wrap justify-start row-span-6 py-5 px-10 list-disc">
        <li
          v-for="webLink in resources.webLinks"
          :key="webLink.id"
          class="hover:underline text-left mb-3 md:mb-0"
        >
          <a :href="webLink.link" target="_blank" title="">{{
            webLink.text
          }}</a>
        </li>
      </ul>
    </display-card>
    <display-card
      header="PDF Downloads"
      class="w-5/6 md:w-2/5 h-full my-10"
      :bottom-border="true"
      rows="3"
    >
      <ul
        class="flex flex-wrap justify-start row-span-6 py-5 px-10 list-disc h-1/2"
      >
        <li
          v-for="pdfDownload in resources.pdfDownloads"
          :key="pdfDownload.id"
          class="hover:underline text-left my-3"
        >
          <a :href="pdfDownload.link" target="_blank" title="">{{
            pdfDownload.text
          }}</a>
        </li>
      </ul>
    </display-card>
  </section>
  <section
    v-else
    class="w-screen flex flex-wrap md:flex-nowrap items-start justify-evenly md:h-128"
  >
    <display-card
      header="Web Links"
      class="w-5/6 md:w-2/5 md:h-full mt-10"
      :bottom-border="true"
      :lift="false"
    >
      <ul class="flex flex-wrap justify-start row-span-6 py-5 px-10 list-disc">
        <li
          v-for="webLink in resources.webLinks"
          :key="webLink.id"
          class="hover:underline text-left mb-3 md:mb-0"
        >
          <a :href="webLink.link" target="_blank" title="">{{
            webLink.text
          }}</a>
        </li>
      </ul>
    </display-card>
    <display-card
      header="PDF Downloads"
      class="w-5/6 md:w-2/5 h-full my-10"
      :bottom-border="true"
      :lift="false"
    >
      <ul
        class="flex flex-wrap justify-start row-span-6 py-5 px-10 list-disc h-1/2"
      >
        <li
          v-for="pdfDownload in resources.pdfDownloads"
          :key="pdfDownload.id"
          class="hover:underline text-left my-3"
        >
          <a :href="pdfDownload.link" target="_blank" title="">{{
            pdfDownload.text
          }}</a>
        </li>
      </ul>
    </display-card>
  </section>
</template>

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

    const windowWidth = window.innerWidth;

    return { resources, isMobile, windowWidth };
  },
});
</script>
