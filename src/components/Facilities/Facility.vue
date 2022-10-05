<template>
  <div
    v-if="facility"
    class="grid-rows-2 place-items-center mt-10 h-128 px-20 motion-safe:animate-fadeIn"
  >
    <div
      class="col-span-12 grid md:grid-cols-12 grid-cols-1 h-full justify-evenly"
    >
      <div class="md:col-span-5 h-full">
        <!-- Fix later for dynamic image and production link -->
        <div
          class="relative h-full flex items-center justify-center rounded-xl shadow-md bg-hero-image-trapper bg-cover"
        ></div>
      </div>
      <!--end col-->

      <div class="md:col-span-7 flex items-spread justify-end">
        <div class="lg:ml-4">
          <h4
            class="mb-6 md:text-3xl text-2xl lg:leading-normal leading-normal font-semibold text-left"
          >
            {{ facility.name }}
          </h4>
          <!-- eslint-disable vue/no-v-html -->
          <p
            class="text-slate-400 max-w-xl text-left"
            v-html="facility.description"
          ></p>

          <div class="mapouter flex w-full h-1/2 mt-10">
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

          <div class="mt-4">
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
