<template>
  <div :style="{ height: navHeight + 'px' }"></div>
  <facility v-if="filteredFacility" :facility="filteredFacility"></facility>
  <section class="bg-mint pt-12">
    <h2 class="text-4xl font-semibold text-center">See Our Other Facilities</h2>
    <div class="flex flex-wrap justify-around pt-5 pb-10 show-on-scroll">
      <router-link
        v-for="facility in otherFacilities"
        :key="facility.id"
        :to="`/facilities/${facility.name.toLowerCase()}`"
        class="w-5/6 md:w-2/5 xl:h-60 my-10 hover:cursor-pointer"
      >
        <facility-card
          :facility="facility"
          class="h-full duration-500 xl:hover:-translate-y-5 transition-all"
        />
      </router-link>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed, watch, ref, onMounted } from "vue";

import Facility from "@/components/Facilities/Facility.vue";

import { useRoute } from "vue-router";

import { facilities } from "@/data";
import router from "@/router";
import { Facility as FacilityType } from "@/types/types";
import FacilityCard from "@/components/Facilities/FacilityCard.vue";
import setScrollObserver from "@/composables/setScrollObserver";

export default defineComponent({
  name: "FacilityView",
  components: {
    Facility,
    FacilityCard,
  },
  setup() {
    const findFacility = computed(() => {
      return (name: string) => {
        return facilities.find((facility) => {
          return facility.name.toLowerCase() === name.toLowerCase();
        });
      };
    });

    onMounted(setScrollObserver);

    const route = useRoute();

    const filteredFacility = ref<FacilityType | undefined>(
      findFacility.value(String(route.params.name))
    );

    const otherFacilities = computed(() => {
      return facilities.filter(
        (facility) => facility.name !== filteredFacility.value?.name
      );
    });

    watch(
      () => route.params.name,
      (name) => {
        const newFacility = findFacility.value(String(name));

        if (!newFacility && route.path.includes("Facilities")) {
          router.push(`/Facilities/${facilities[0].name}`);
        }

        filteredFacility.value = newFacility;
      },
      { immediate: true, deep: true }
    );

    const navHeight = computed(() => {
      const nav = document.querySelector("nav");
      return nav ? nav.clientHeight : 0;
    });

    return { filteredFacility, otherFacilities, navHeight };
  },
});
</script>
