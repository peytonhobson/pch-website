<template>
  <card :image="true" title="Locations">
    <template #image>
      <img
        class="w-full h-full"
        :src="getImgURL('locations-teaser.png')"
        alt="Shoes"
      />
    </template>
    <template #title>
      <h2 class="card-title">Locations</h2>
    </template>
    <template #body>
      <p class="text-left">
        See where our homes are located throughout Salem, Oregon. Contact us for
        a personal tour or more information.
      </p>
    </template>
    <template #button>
      <router-link to="/Locations" class="w-full no-underline">
        <action-button text="Learn More" type="card" />
      </router-link>
    </template>
  </card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

import getImgURL from "@/composables/getImgURL";
import Card from "@/components/Shared/Card.vue";
import ActionButton from "@/components/Shared/ActionButton.vue";

export default defineComponent({
  name: "DisplayCardFacilities",
  components: {
    Card,
    ActionButton,
  },
  props: {
    route: {
      type: String,
      required: true,
    },
  },
  setup() {
    const router = useRouter();

    const routeUser = () => {
      router.push("Facilities");
    };

    return { getImgURL, routeUser };
  },
});
</script>
