<template>
  <div class="card lg:card-side bg-base-300 shadow-xl">
    <figure class="xl:w-full">
      <img
        class="w-full h-full"
        :src="getImgURL(facility.images[0])"
        alt="Album"
      />
    </figure>
    <div class="card-body prose">
      <h2 class="card-title">{{ facility.name }}</h2>
      <p class="text-left">{{ facility.summary }}</p>
    </div>
  </div>
  <!-- <div class=""
    <template #image>
      <img :src="getImgURL(facility.images[0])" class="w-full h-full" />
    </template>
    <template #title>
      <h2 class="card-title">
        {{ facility.name }}
      </h2>
    </template>
    <template #body>
      <p class="text-left">
        {{ facility.summary }}
      </p>
    </template>
    <template #button>
      <action-button text="Learn More" type="card" />
    </template>
  </card> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { Facility } from "@/api/types";
import getImgURL from "@/helpers/getImgURL";

export default defineComponent({
  name: "FacilityCard",
  components: {},
  props: {
    facility: {
      type: Object as () => Facility,
      required: true,
    },
  },
  setup() {
    return { getImgURL };
  },
});
</script>
