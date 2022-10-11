<template>
  <section class="text-6xl border-y-2 border-y-brand-green-gray py-4">
    Resources
  </section>
  <section
    class="w-screen flex flex-wrap md:flex-nowrap items-start justify-evenly md:h-128 py-5 md:py-0"
  >
    <resource-card header="Web Links" :resources="resources.webLinks" />
    <resource-card
      header="PDF Downloads"
      :resources="resources.pdfDownloads"
      class="h-128 md:h-full"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ComputedRef } from "vue";

import ResourceCard from "@/components/Resources/ResourceCard.vue";
import { useFetchResourcesDispatch, useResources } from "@/store/composables";
import { Resource } from "@/api/types";

export default defineComponent({
  name: "BlogPostView",
  components: {
    ResourceCard,
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
