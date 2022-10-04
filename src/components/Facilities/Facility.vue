<template>
  <div v-if="facility" class="grid-rows-2 place-items-center mt-10 h-128 px-20">
    <div
      class="col-span-12 grid md:grid-cols-12 grid-cols-1 h-full justify-evenly"
    >
      <div class="md:col-span-5 h-full">
        <div class="relative h-full flex items-center justify-center">
          <!-- Fix later for production link -->
          <img
            src="@/assets/hallet-house.png"
            class="rounded-xl shadow-md h-full w-full"
            alt=""
          />
        </div>
      </div>
      <!--end col-->

      <div class="md:col-span-7 flex items-spread justify-end">
        <div class="lg:ml-4">
          <h4
            class="mb-6 md:text-3xl text-2xl lg:leading-normal leading-normal font-semibold text-left"
          >
            {{ facility.name }}
          </h4>
          <p class="text-slate-400 max-w-xl text-left">
            {{ facility.description }}
          </p>

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
            <action-button text="Get Directions" type="primary" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

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
    console.log(props.facility.location);
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
