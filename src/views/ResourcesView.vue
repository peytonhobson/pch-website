<template>
  <section class="text-6xl border-y-2 border-y-brand-green-gray py-4">
    Resources
  </section>
  <section
    class="w-screen flex flex-wrap md:flex-nowrap items-center justify-evenly h-128"
  >
    <display-card
      header="Web Links"
      class="w-5/6 md:w-2/5 h-full mt-20"
      :bottom-border="true"
    >
      <ul
        class="flex flex-wrap justify-start items-stretch row-span-6 py-5 px-10 list-disc"
      >
        <li class="hover:underline text-left">
          <a href="http://www.nlm.nih.gov/medlineplus/hospicecare.html" title=""
            >A Definition of Hospice Care from Medline Plus</a
          >
        </li>
        <li class="hover:underline text-left">
          <a
            href="http://www.oregonhospice.org/endoflifecarePOLST.htm"
            title=""
            target="_blank"
            >Oregon Hospice Association Explains the Similarities and
            Differences Between Advanced Directives and POLST</a
          >
        </li>
        <li class="hover:underline text-left">
          <a
            href="http://www.oregon.gov/dhs/spwpd/pages/ltc/ltc_guide/whataremychoices.aspx#afh"
            title=""
            target="_blank"
            >Oregon’s Department of Human Resources Gives You Information on
            Choosing A Long Term Care Setting for Your Loved One</a
          >
        </li>
        <li class="hover:underline text-left">
          <a
            href="http://www.va.gov/GERIATRICS/Guide/LongTermCare/Adult_Family_Homes.asp"
            title=""
            target="_blank"
            >The US Dept of Veterans Affairs Educated about Geriatrics and
            Extended Care</a
          >
        </li>
        <li class="hover:underline text-left" id="link-438">
          <a
            href="http://adultcareplacementoregon.com/choosing-a-home/adult-foster-care/"
            title=""
            target="_blank"
            >Adult Care Placement Informs about Adult Foster Care</a
          >
        </li>
        <li class="hover:underline text-left">
          <a
            href="http://www.nwsds.org/getting-assistance/services/adult-foster-homes/ "
            title="(Click the top link for “How to Choose an AFH”)"
            target="_blank"
            >Northwest Senior and Disability Services Gives Questions to Ask for
            Choosing an Adult Foster Home</a
          >
          —
          <span class="link-description"
            >(Click the top link for “How to Choose an AFH”)</span
          >
        </li>
        <li class="hover:underline text-left">
          <a href="http://www.veteranaid.org" title="" target="_blank"
            >Veterans financial assistance for Adult Foster Care Homes</a
          >
        </li>
      </ul>
    </display-card>
    <display-card
      header="PDF Downloads"
      class="w-5/6 md:w-2/5 h-full mt-20"
      :bottom-border="true"
    >
    </display-card>
  </section>
</template>
a

<script lang="ts">
import { defineComponent } from "vue";

import DisplayCard from "@/components/Shared/DisplayCard.vue";

export default defineComponent({
  name: "BlogPostView",
  components: {
    DisplayCard,
  },
  setup() {
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    return { isMobile };
  },
});
</script>
