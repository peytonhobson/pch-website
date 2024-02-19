<template>
  <div :style="{ height: navHeight + 'px' }"></div>
  <facility v-if="filteredFacility" :facility="filteredFacility"></facility>
</template>

<script lang="ts">
import { defineComponent, computed, watch, ref } from "vue";

import Facility from "@/components/Facilities/Facility.vue";

import { useRoute } from "vue-router";

import { facilities } from "@/data";
import router from "@/router";
import { Facility as FacilityType } from "@/types/types";

export default defineComponent({
  name: "FacilityView",
  components: {
    Facility,
  },
  setup() {
    const findFacility = computed(() => {
      return (name: string) => {
        return facilities.find((facility) => {
          return facility.name.toLowerCase() === name.toLowerCase();
        });
      };
    });

    const route = useRoute();

    const filteredFacility = ref<FacilityType | undefined>(
      findFacility.value(String(route.params.name))
    );

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

    return { filteredFacility, navHeight };
  },
});
</script>
