<template>
  <display-card header="Locations" :route="route">
    <div class="row-start-2 row-span-4">
      <section class="w-full h-1/2">
        <img src="@/assets/locations-teaser.png" class="w-full h-full" />
      </section>
      <section class="grid grid-rows-4">
        <section class="p-7 row-start-1 row-span-3 m-auto">
          <div class="text-lg font-bold text-left mb-3 font-sen">Locations</div>
          <div class="text-base md:text-lg text-left font-sans">
            See where our homes are located throughout Salem, Oregon. Contact us
            for a personal tour or more information.
          </div>
        </section>
      </section>
    </div>
    <section class="w-full row-start-6 row-span-1 flex items-end">
      <action-button text="Learn More" type="card" class="w-full h-full" />
    </section>
  </display-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DisplayCard from "@/components/Shared/DisplayCard.vue";
import ActionButton from "@/components/Shared/ActionButton.vue";

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
  setup() {},
});
</script>
