<template>
  <div
    v-if="facility && imagesLoaded"
    class="mt-5 md:mt-10 h-128 md:px-20 motion-safe:animate-fadeIn"
  >
    <div class="grid md:grid-cols-12 grid-cols-1 h-full justify-evenly">
      <div class="md:col-span-5 h-40 md:h-full">
        <!-- Fix later for dynamic image and production link -->
        <Transition>
          <div
            v-if="show"
            class="md:relative h-full flex items-center justify-center md:rounded-xl shadow-md bg-cover"
            :style="`background-image: url(${currentImage})`"
          ></div>
        </Transition>
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
import {
  defineComponent,
  toRefs,
  computed,
  ref,
  onBeforeMount,
  onBeforeUnmount,
} from "vue";

import { Facility } from "@/api/types";
import ActionButton from "../Shared/ActionButton.vue";
import preloadImages from "@/helpers/preloadImages";

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

    const curIndex = ref(0);
    const currentImage = computed(() => facility.value.images[curIndex.value]);

    const show = ref(true);
    let interval: any = null;
    const changeFacility = () => {
      interval = setInterval(() => {
        show.value = !show.value;
        curIndex.value = (curIndex.value + 1) % facility.value.images.length;
        setTimeout(() => (show.value = !show.value), 1000);
      }, 6000);
    };

    const clearFacilityInterval = () => {
      clearInterval(interval);
    };

    onBeforeMount(changeFacility);
    onBeforeUnmount(clearFacilityInterval);

    const imagesLoaded = ref(false);

    onBeforeMount(
      async () =>
        (imagesLoaded.value = await preloadImages(facility.value.images))
    );

    return { routeUser, show, currentImage, imagesLoaded };
  },
});
</script>

<style scoped>
.mapouter {
  position: relative;
  text-align: right;
}

.gmap_canvas {
  overflow: hidden;
  background: none !important;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
>
