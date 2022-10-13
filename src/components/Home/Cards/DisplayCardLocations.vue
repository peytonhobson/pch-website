<template>
  <display-card header="Locations">
    <div class="row-start-2 row-span-4">
      <div class="w-full h-1/2">
        <img v-lazy="getImgURL('locations-teaser.png')" class="w-full h-full" />
      </div>
      <div class="grid grid-rows-4">
        <div class="p-7 row-start-1 row-span-3 m-auto">
          <div class="text-lg font-bold text-left mb-3 font-sen">Locations</div>
          <div class="text-base xl:text-lg text-left font-sans">
            See where our homes are located throughout Salem, Oregon. Contact us
            for a personal tour or more information.
          </div>
        </div>
      </div>
    </div>
    <div class="w-full row-start-6 row-span-1 flex items-end">
      <action-button
        text="Learn More"
        type="card"
        class="w-full h-full"
        @click="routeUser"
      />
    </div>
  </display-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

import DisplayCard from "@/components/Shared/DisplayCard.vue";
import ActionButton from "@/components/Shared/ActionButton.vue";
import getImgURL from "@/helpers/getImgURL";

export default defineComponent({
  name: "DisplayCardFacilities",
  components: {
    DisplayCard,
    ActionButton,
  },
  props: {
    route: {
      type: String,
      required: true,
    },
  },
  setup() {
    const router = useRouter();

    const routeUser = () => {
      router.push("Facilities");
    };

    return { getImgURL, routeUser };
  },
});
</script>
