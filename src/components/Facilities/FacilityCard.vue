<template>
  <display-card :header="facility.name" :route="route">
    <div class="w-full row-start-2 row-span-2 h-full">
      <!-- Fix for dynamic images -->
      <img :src="facility.images[0]" class="w-full h-full" />
    </div>
    <div class="row-start-4 row-span-2 grid grid-rows-4">
      <div class="px-7 row-start-2 row-span-3 flex items-start justify-center">
        <div class="text-lg text-left">
          {{ facility.summary }}
        </div>
      </div>
    </div>
  </display-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { Facility } from "@/api/types";
import DisplayCard from "../Shared/DisplayCard.vue";

export default defineComponent({
  name: "FacilityCard",
  components: {
    DisplayCard,
  },
  props: {
    facility: {
      type: Object as () => Facility,
      required: true,
    },
    route: {
      type: String,
      required: true,
    },
  },
  setup() {},
});
</script>
