<template>
  <display-card header="Locations">
    <section class="w-full h-1/3 flex">
      <img src="@/assets/locations-teaser.png" class="flex w-full" />
    </section>
    <section class="p-7">
      <div class="text-lg font-bold text-left mb-3">Locations</div>
      <div class="text-lg text-left">
        See where our homes are located throughout Salem, Oregon. Contact us for
        a personal tour or more information.
      </div>
    </section>
    <section class="w-full self-bottom mt-auto h-16">
      <action-button text="View Map" type="card" class="w-full flex" />
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
