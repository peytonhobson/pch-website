<template>
  <div class="w-full prose flex flex-wrap items-stretch">
    <div class="mapouter w-full mt-10 md:mt-10">
      <div class="gmap_canvas flex w-full h-full">
        <iframe
          id="gmap_canvas"
          :src="locationLink"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          class="w-full h-full rounded-xl"
        ></iframe>
      </div>
    </div>

    <div class="w-full my-10 md:mt-10 md:mb-0">
      <action-button text="Get Directions" type="facility" @click="routeUser" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";

import ActionButton from "@/components/Shared/ActionButton.vue";

export default defineComponent({
  name: "GoogleMapsEmbed",
  components: {
    ActionButton,
  },
  props: {
    locationLink: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { locationLink } = toRefs(props);

    const routeUser = () => {
      window.open(locationLink.value.replace("&output=embed", ""));
    };

    return { routeUser };
  },
});
</script>
