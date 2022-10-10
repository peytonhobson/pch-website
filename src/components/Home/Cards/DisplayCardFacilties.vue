<template>
  <display-card header="Facilities" :route="route">
    <Transition>
      <div v-if="show && curFacility" class="row-start-2 row-span-4">
        <section class="w-full h-1/2">
          <img :src="curImage.src" class="w-full h-full" />
        </section>
        <section class="row-start-4 row-span-3 grid grid-rows-4">
          <section
            class="p-7 row-start-1 row-span-3 m-auto transition-opacity ease-in duration-700 opacity-100"
          >
            <div class="text-lg font-bold text-left mb-3 font-sen">
              {{ curFacility.name }}
            </div>
            <div class="text-base md:text-lg text-left font-sans">
              {{ curFacility.summary }}
            </div>
          </section>
        </section>
      </div>
    </Transition>
    <section class="w-full row-start-6 row-span-1 items-end flex">
      <action-button text="Learn More" type="card" class="w-full h-1/2" />
    </section>
  </display-card>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  onBeforeUnmount,
  onBeforeMount,
  computed,
  ref,
  Ref,
} from "vue";

import DisplayCard from "@/components/Shared/DisplayCard.vue";
import ActionButton from "@/components/Shared/ActionButton.vue";
import {
  useFetchFacilitiesDispatch,
  useFilteredFacilities,
} from "@/store/composables";

export default defineComponent({
  name: "DisplayCardFacilities",
  components: {
    DisplayCard,
    ActionButton,
  },
  props: {
    route: {
      type: String,
      required: true,
    },
  },
  setup() {
    const filteredFacilities = useFilteredFacilities();

    const curIndex = ref(0);
    const curFacility = computed(
      () => filteredFacilities.value[curIndex.value]
    );
    const show = ref(true);
    let interval: any = null;
    const changeFacility = () => {
      interval = setInterval(() => {
        show.value = !show.value;
        curIndex.value = (curIndex.value + 1) % filteredFacilities.value.length;
        setTimeout(() => (show.value = !show.value), 1000);
      }, 6000);
    };
    const clearFacilityInterval = () => {
      clearInterval(interval);
    };

    // Preload images for slideshow to reduce swiping effect
    const images: Ref<HTMLImageElement[]> = ref([]);
    const curImage = computed(() => images.value[curIndex.value]);
    onBeforeMount(async () => {
      filteredFacilities.value.forEach((link) => {
        let image = new Image();
        image.src = link.images[0];
        images.value.push(image);
      });
    });

    onMounted(useFetchFacilitiesDispatch);
    onBeforeMount(changeFacility);
    onBeforeUnmount(clearFacilityInterval);

    return { curFacility, show, curImage };
  },
});
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
