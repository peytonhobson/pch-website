<template>
  <display-card header="Facilities">
    <section class="w-full h-1/3 flex">
      <img src="@/assets/hallet-house.png" class="flex w-full" />
    </section>
    <section class="p-7">
      <div class="text-lg font-bold text-left mb-3">Hallet House</div>
      <div class="text-lg text-left">
        Located in a charming South Salem neighborhood near Sprague High School,
        this home is relaxed and peaceful.
      </div>
    </section>
    <section class="w-full self-bottom mt-auto h-16">
      <action-button text="Learn More" type="card" class="w-full flex" />
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
