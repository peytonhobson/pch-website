<template>
  <display-card header="Contact Us" :bottomBorder="true">
    <section class="p-7 row-span-2 row-start-3">
      <div class="text-lg text-left">
        We would like to hear from you, talk to you, and/or give you a tour of
        one of our wonderful homes.
      </div>
    </section>
    <section class="p-7 flex-row">
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
