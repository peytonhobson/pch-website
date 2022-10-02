<template>
  <section class="text-6xl border-y-2 border-y-brand-green-gray py-4">
    Facilities
  </section>
  <section v-if="!isMobile" class="flex flex-wrap justify-evenly my-10">
    <display-card-baxter-house class="w-5/6 md:w-1/5 show-on-scroll" />
    <display-card-hallet-house class="w-5/6 md:w-1/5 show-on-scroll" />
    <display-card-madrona-house class="w-5/6 md:w-1/5 show-on-scroll" />
    <display-card-trapper-house class="w-5/6 md:w-1/5 show-on-scroll" />
  </section>
  <section v-else class="flex flex-wrap justify-evenly my-10">
    <display-card-baxter-house class="w-5/6 md:w-2/7 show-on-scroll" />
    <display-card-hallet-house class="w-5/6 md:w-2/7 show-on-scroll mt-5" />
    <display-card-madrona-house class="w-5/6 md:w-2/7 show-on-scroll mt-5" />
    <display-card-trapper-house class="w-5/6 md:w-2/7 show-on-scroll mt-5" />
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

import DisplayCardBaxterHouse from "@/components/Facilities/Cards/DisplayCardBaxterHouse.vue";
import DisplayCardHalletHouse from "@/components/Facilities/Cards/DisplayCardHalletHouse.vue";
import DisplayCardMadronaHouse from "@/components/Facilities/Cards/DisplayCardMadronaHouse.vue";
import DisplayCardTrapperHouse from "@/components/Facilities/Cards/DisplayCardTrapperHouse.vue";
import setScrollObserver from "@/helpers/setScrollObserver";

export default defineComponent({
  name: "FacilitiesView",
  components: {
    DisplayCardBaxterHouse,
    DisplayCardHalletHouse,
    DisplayCardMadronaHouse,
    DisplayCardTrapperHouse,
  },
  setup() {
    onMounted(setScrollObserver);

    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    return { isMobile };
  },
});
</script>
