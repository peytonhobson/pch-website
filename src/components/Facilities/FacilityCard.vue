<template>
  <div class="card lg:card-side bg-white shadow-xl">
    <figure class="lg:w-full">
      <img class="w-full h-full" :src="facility.images[0]" alt="Album" />
    </figure>
    <div class="card-body prose">
      <h2 class="card-title">{{ facility.name }}</h2>
      <p class="text-left">{{ facility.summary }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { Facility } from "@/types/types";

export default defineComponent({
  name: "FacilityCard",
  components: {},
  props: {
    facility: {
      type: Object as () => Facility,
      required: true,
    },
  },
  setup() {},
});
</script>
