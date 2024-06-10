<template>
  <card :image="true" title="Locations">
    <template #image>
      <img
        class="w-full h-full"
        src="https://premier-care-homes.s3.amazonaws.com/assets/other/locations-teaser.jpg"
        alt="Google Maps image of Salem, Oregon"
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
      <router-link to="/locations" class="w-full no-underline">
        <action-button text="Learn More" type="card" />
      </router-link>
    </template>
  </card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

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

    return { routeUser };
  },
});
</script>
