<template>
  <div class="mapouter flex-1 w-full mt-10 md:mt-10">
    <div class="gmap_canvas flex w-full h-full">
      <iframe
        id="gmap_canvas"
        :src="locationLink"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        class="w-full h-full"
      ></iframe>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "GoogleMapsEmbed",
  props: {
    locationLink: {
      type: String,
      required: true,
    },
  },
  setup() {},
});
</script>
