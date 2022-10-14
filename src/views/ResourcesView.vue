<template>
  <section
    class="w-screen flex flex-wrap xl:flex-nowrap items-start justify-evenly xl:h-128 py-5 xl:py-0"
  >
    <resource-card
      title="Web Links"
      :resources="resources.webLinks"
      class="h-max xl:h-144 my-5 w-5/6 md:w-auto"
    />
    <resource-card
      title="PDF Downloads"
      :resources="resources.pdfDownloads"
      class="h-max xl:h-144 my-5 w-5/6 md:w-auto"
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
