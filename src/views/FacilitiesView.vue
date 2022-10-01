<template>
  <section class="text-6xl border-y-2 border-y-brand-green-gray py-4">
    Facilities
  </section>
  <section v-if="!isMobile" class="grid grid-rows-2 mt-10">
    <div class="row-start-1 row-span-1 flex justify-evenly">
      <display-card-baxter-house class="w-5/6 md:w-2/7 show-on-scroll" />
      <display-card-hallet-house class="w-5/6 md:w-2/7 show-on-scroll" />
      <display-card-juneau-house class="w-5/6 md:w-2/7 show-on-scroll" />
    </div>
    <div class="row-start-2 row-span-1 flex justify-evenly mt-10">
      <display-card-madrona-house class="w-5/6 md:w-2/7 show-on-scroll" />
      <display-card-hallet-house class="w-5/6 md:w-2/7 show-on-scroll" />
    </div>
  </section>
  <section v-else class="flex flex-wrap">
    <display-card-baxter-house class="w-5/6 md:w-2/7 show-on-scroll" />
    <display-card-hallet-house class="w-5/6 md:w-2/7 show-on-scroll" />
    <display-card-juneau-house class="w-5/6 md:w-2/7 show-on-scroll" />
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

import DisplayCardBaxterHouse from "@/components/Facilities/Cards/DisplayCardBaxterHouse.vue";
import DisplayCardHalletHouse from "@/components/Facilities/Cards/DisplayCardHalletHouse.vue";
import DisplayCardJuneauHouse from "@/components/Facilities/Cards/DisplayCardJuneauHouse.vue";
import DisplayCardMadronaHouse from "@/components/Facilities/Cards/DisplayCardMadronaHouse.vue";
import setScrollObserver from "@/helpers/setScrollObserver";

export default defineComponent({
  name: "FacilitiesView",
  components: {
    DisplayCardBaxterHouse,
    DisplayCardHalletHouse,
    DisplayCardJuneauHouse,
    DisplayCardMadronaHouse,
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
