<template>
  <card :image="true">
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
  </card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { Facility } from "@/api/types";
import getImgURL from "@/helpers/getImgURL";
import Card from "@/components/Shared/Card.vue";

export default defineComponent({
  name: "FacilityCard",
  components: {
    Card,
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
  setup() {
    return { getImgURL };
  },
});
</script>
