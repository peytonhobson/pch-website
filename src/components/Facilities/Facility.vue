<template>
  <div
    v-if="facility"
    class="mt-5 md:mt-10 h-128 md:px-20 motion-safe:animate-fadeIn"
  >
    <div class="grid md:grid-cols-12 grid-cols-1 h-full justify-evenly">
      <div class="md:col-span-5 h-40 md:h-full">
        <!-- Fix later for dynamic image and production link -->
        <div
          class="md:relative h-full flex items-center justify-center md:rounded-xl shadow-md bg-hero-image-trapper bg-cover"
        ></div>
      </div>
      <!--end col-->

      <div
        class="md:col-span-7 flex md:items-spread md:justify-center my-7 md:my-0 px-10 md:px-0"
      >
        <div class="lg:ml-4">
          <h4
            class="mb-5 md:text-3xl text-2xl lg:leading-normal leading-normal font-semibold text-left"
          >
            {{ facility.name }}
          </h4>
          <!-- eslint-disable vue/no-v-html -->
          <p
            class="text-slate-400 max-w-xl text-left"
            v-html="facility.description"
          ></p>

          <div class="mapouter flex-1 w-full mt-10 md:mt-10">
            <div class="gmap_canvas flex w-full h-full">
              <iframe
                id="gmap_canvas"
                :src="facility.location"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                class="w-full h-full"
              ></iframe>
            </div>
          </div>

          <div class="my-4">
            <action-button
              text="Get Directions"
              type="primary"
              @click="routeUser"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";

import { Facility } from "@/api/types";
import ActionButton from "../Shared/ActionButton.vue";

export default defineComponent({
  name: "Facility",
  components: {
    ActionButton,
  },
  props: {
    facility: {
      type: Object as () => Facility,
      required: true,
    },
  },
  setup(props) {
    const { facility } = toRefs(props);

    const routeUser = () => {
      window.open(facility.value.location.replace("&output=embed", ""));
    };

    return { routeUser };
  },
});
</script>

<style>
.mapouter {
  position: relative;
  text-align: right;
}

.gmap_canvas {
  overflow: hidden;
  background: none !important;
}
</style>
>
