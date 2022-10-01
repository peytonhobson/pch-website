<template>
  <display-card header="Locations">
    <section class="w-full row-start-2 row-span-2">
      <img src="@/assets/locations-teaser.png" class="w-full h-full" />
    </section>
    <section class="row-start-4 row-span-3 grid grid-rows-4">
      <section class="p-7 row-start-1 row-span-3 m-auto">
        <div class="text-lg font-bold text-left mb-3">Locations</div>
        <div class="text-lg text-left">
          See where our homes are located throughout Salem, Oregon. Contact us for
        a personal tour or more information.
        </div>
      </section>
      <section class="w-full row-start-4 row-span-1">
        <action-button text="Learn More" type="card" class="w-full h-full" />
      </section>
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
  setup() {},
});
</script>
