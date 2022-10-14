<template>
  <hero
    :image-url="heroProps.backgroundImage"
    :title="heroProps.title"
    :text="heroProps.text"
    class="h-[85vh]"
  />
  <section
    class="w-screen flex flex-wrap xl:flex-nowrap items-start justify-evenly py-5 xl:py-20"
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
import Hero from "@/components/Shared/Hero/Hero.vue";

export default defineComponent({
  name: "BlogPostView",
  components: {
    ResourceCard,
    Hero,
  },
  setup() {
    onMounted(useFetchResourcesDispatch);

    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    const resources: ComputedRef<Resource> = useResources();

    const windowWidth = window.innerWidth;

    const heroProps = {
      backgroundImage: "other/resident-wheelchair-balloon-girl.png",
      title: "RESOURCES",
      text: "For those of you who don't know anything",
    };

    return { resources, isMobile, windowWidth, heroProps };
  },
});
</script>
