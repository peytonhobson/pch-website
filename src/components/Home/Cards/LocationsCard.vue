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
      <button
        class="btn btn-block btn-lg bg-brand-green-gray border-none hover:bg-brand-light-green flex items-center"
      >
        Learn More
      </button>
    </template>
  </card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

// import DisplayCard from "@/components/Shared/DisplayCard.vue";
// import ActionButton from "@/components/Shared/ActionButton.vue";
import getImgURL from "@/helpers/getImgURL";
import Card from "@/components/Shared/Card.vue";
// import ActionButton from "@/components/Shared/ActionButton.vue";

export default defineComponent({
  name: "DisplayCardFacilities",
  components: {
    // DisplayCard,
    // ActionButton,
    Card,
    // ActionButton,
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
