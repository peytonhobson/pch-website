<template>
  <div
    v-if="facility"
    class="h-[85vh] motion-safe:animate-fadeIn flex justify-center items-center"
  >
    <dual-item-display>
      <template #leftColumn>
        <Transition>
          <img
            v-if="show"
            :src="currentImage.src"
            class="w-full h-128 md:rounded-xl shadow-md"
          />
        </Transition>
      </template>
      <!--end col-->

      <template #rightColumn class="flex flex-wrap">
        <simple-description
          :header="facility.name"
          :text="facility.description"
        />
        <div class="w-full prose">
          <google-maps-embed :location-link="facility.location" />

          <div class="my-4">
            <action-button
              text="Get Directions"
              type="primary"
              @click="routeUser"
            />
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
  Ref,
} from "vue";

import { Facility } from "@/api/types";
import ActionButton from "../Shared/ActionButton.vue";
import GoogleMapsEmbed from "@/components/Facilities/GoogleMapsEmbed.vue";
import SimpleDescription from "@/components/Shared/SimpleDescription.vue";
import DualItemDisplay from "@/components/Shared/DualItemDisplay.vue";

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
    const images: Ref<HTMLImageElement[]> = ref([]);

    const { facility } = toRefs(props);

    const routeUser = () => {
      window.open(facility.value.location.replace("&output=embed", ""));
    };

    // Put in own function
    const curIndex = ref(0);
    onBeforeMount(async () => {
      facility.value.images.forEach((link) => {
        let image = new Image();
        image.src = link;
        images.value.push(image);
      });
    });

    const currentImage = computed(() => images.value[curIndex.value]);

    // Put in own function
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
