<template>
  <div
    v-if="facility"
    class="mt-5 md:mt-10 h-full md:px-20 motion-safe:animate-fadeIn"
  >
    <div class="grid md:grid-cols-12 grid-cols-1 h-full justify-evenly">
      <!-- Potential Component -->
      <div
        class="md:col-span-5 h-40 md:h-full flex items-center justify-center"
      >
        <!-- Fix later for dynamic image and production link -->
        <Transition>
          <img
            v-if="show"
            :src="currentImage.src"
            class="w-full h-128 md:rounded-xl shadow-md"
          />
        </Transition>
      </div>
      <!--end col-->

      <div
        class="md:col-span-6 md:col-start-7 flex flex-wrap md:items-spread md:justify-center my-7 md:my-0 px-10 md:px-0"
      >
        <simple-description
          :header="facility.name"
          :text="facility.description"
        />
        <div class="w-full">
          <google-maps-embed :location-link="facility.location" />

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
  Ref,
} from "vue";

import { Facility } from "@/api/types";
import ActionButton from "../Shared/ActionButton.vue";
import GoogleMapsEmbed from "@/components/Facilities/GoogleMapsEmbed.vue";
import SimpleDescription from "@/components/Shared/SimpleDescription.vue";
// import preloadImages from "@/helpers/preloadImages";

export default defineComponent({
  name: "Facility",
  components: {
    ActionButton,
    GoogleMapsEmbed,
    SimpleDescription,
  },
  props: {
    facility: {
      type: Object as () => Facility,
      required: true,
    },
  },
  setup(props) {
    const images: Ref<HTMLImageElement[]> = ref([]);

    const { facility } = toRefs(props);

    const routeUser = () => {
      window.open(facility.value.location.replace("&output=embed", ""));
    };

    const curIndex = ref(0);
    onBeforeMount(async () => {
      facility.value.images.forEach((link) => {
        let image = new Image();
        image.src = link;
        images.value.push(image);
      });
    });

    const currentImage = computed(() => images.value[curIndex.value]);

    const show = ref(true);
    let interval: any = null;
    const changeFacility = () => {
      interval = setInterval(() => {
        show.value = !show.value;
        curIndex.value = (curIndex.value + 1) % images.value.length;
        setTimeout(() => (show.value = !show.value), 1000);
      }, 5000);
    };

    const clearFacilityInterval = () => {
      clearInterval(interval);
    };

    onBeforeMount(changeFacility);
    onBeforeUnmount(clearFacilityInterval);

    onBeforeMount(async () => {
      facility.value.images.forEach((link) => {
        let image = new Image();
        image.src = link;
        images.value.push(image);
      });

      console.log("Images Loaded");
    });

    return { routeUser, show, currentImage };
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
