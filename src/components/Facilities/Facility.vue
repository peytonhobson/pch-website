<template>
  <div
    v-if="facility"
    class="motion-safe:animate-fadeIn flex justify-center items-center md:mt-10"
  >
    <dual-item-display :reverse-column="false" :items-start="true">
      <template #leftColumn>
        <Transition>
          <img
            v-if="show"
            :src="curImg"
            class="w-full h-92 md:h-144 md:rounded-xl shadow-md"
          />
        </Transition>
      </template>
      <!--end col-->

      <template #rightColumn>
        <div class="flex flex-wrap justify-center mt-10 md:my-0">
          <simple-description
            :header="facility.name"
            :text="facility.description"
          />
          <div class="w-5/6 md:w-full prose my-10">
            <!-- Include action button in google maps component -->
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
      </template>
    </dual-item-display>
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
import GoogleMapsEmbed from "@/components/Facilities/GoogleMapsEmbed.vue";
import SimpleDescription from "@/components/Shared/SimpleDescription.vue";
import DualItemDisplay from "@/components/Shared/DualItemDisplay.vue";
import getImgURL from "@/helpers/getImgURL";

export default defineComponent({
  name: "Facility",
  components: {
    ActionButton,
    GoogleMapsEmbed,
    SimpleDescription,
    DualItemDisplay,
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

    const curImg = computed(() =>
      getImgURL(facility.value.images[curIndex.value])
    );

    // Put in own function
    const curIndex = ref(0);
    const show = ref(true);
    let interval: any = null;
    const changeFacility = () => {
      interval = setInterval(() => {
        show.value = !show.value;
        curIndex.value = (curIndex.value + 1) % facility.value.images.length;
        setTimeout(() => (show.value = !show.value), 1000);
      }, 5000);
    };

    const clearFacilityInterval = () => {
      clearInterval(interval);
    };

    onBeforeMount(changeFacility);
    onBeforeUnmount(clearFacilityInterval);

    return { routeUser, show, curImg };
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
