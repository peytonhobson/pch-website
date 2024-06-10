<template>
  <hero
    :image-url="heroProps.backgroundImage"
    :title="heroProps.title"
    class="h-[85vh]"
  />
  <main
    class="w-full flex flex-col lg:flex-row items-center lg:items-start justify-evenly py-5 lg:py-20 bg-mint overflow-x-hidden"
  >
    <resource-card
      title="Web Links"
      :resources="webLinks"
      class="h-max lg:h-144 my-5 w-5/6 md:w-auto lg:mx-8"
    />
    <resource-card
      title="PDF Downloads"
      :resources="pdfDownloads"
      class="h-max lg:h-144 my-5 w-5/6 md:w-auto lg:mx-8"
    />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ResourceCard from "@/components/Resources/ResourceCard.vue";

import Hero from "@/components/Shared/Hero/Hero.vue";

export default defineComponent({
  name: "BlogPostView",
  components: {
    ResourceCard,
    Hero,
  },
  setup() {
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    const webLinks = [
      {
        link: "https://dailycaring.com/what-is-a-residential-care-home/",
        text: "What is a Residental Care Home?",
      },
      {
        link: "https://www.veteranaid.org/",
        text: "Veterans financial assistance for Adult Foster Care Homes",
      },
      {
        link: "https://www.va.gov/geriatrics/pages/Adult_Family_Homes.asp",
        text: "The US Dept of Veterans Affairs Educated about Geriatrics and Extended Care",
      },
      {
        link: "https://www.assistedliving.org/care-homes/",
        text: "A Comprehensive Guide to Residential Care Homes",
      },
    ];

    const pdfDownloads = [
      {
        link: "https://apps.state.or.us/Forms/Served/de9033.pdf",
        text: "A Guide to Adult Foster Homes Here in Oregon for Potential Residents",
      },
      {
        link: "http://assets.aarp.org/rgcenter/ppi/liv-com/fs174-afc.pdf",
        text: "The AARP Puts Out a Fact Sheet about Adult Foster Care",
      },
    ];

    const windowWidth = window.innerWidth;

    const heroProps = {
      backgroundImage:
        "https://premier-care-homes.s3.amazonaws.com/assets/other/resources-hero.jpg",
      title: "RESOURCES",
    };

    return { webLinks, pdfDownloads, isMobile, windowWidth, heroProps };
  },
});
</script>
