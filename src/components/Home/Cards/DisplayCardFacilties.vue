<template>
  <display-card header="Facilities">
    <section class="w-full row-span-2 row-start-4">
      <img src="@/assets/hallet-house.png" class="w-full" />
    </section>
    <section class="p-7 row-start-4 row-span-2">
      <div class="text-lg font-bold text-left mb-3">Hallet House</div>
      <div class="text-lg text-left">
        Located in a charming South Salem neighborhood near Sprague High School,
        this home is relaxed and peaceful.
      </div>
    </section>
    <section class="w-full h-16 mt-5">
      <action-button text="Learn More" type="card" class="w-full" />
    </section>
  </display-card>
</template>

<display-card header="Locations">
	<section class="w-full row-span-2 row-start-4">
		<img src="@/assets/locations-teaser.png" class="w-full" />
	</section>
	<section class="p-7 row-start-4 row-span-2">
		<div class="text-lg font-bold text-left mb-3">Locations</div>
		<div class="text-lg text-left">
			See where our homes are located throughout Salem, Oregon. Contact us for
			a personal tour or more information.
		</div>
	</section>
	<section class="w-full row-span-1 row-start-9 h-16 mb-auto">
		<action-button text="View Map" type="card" class="w-full" />
	</section>
</display-card>

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
