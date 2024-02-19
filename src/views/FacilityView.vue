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
import { Facility as FacilityType } from "@/api/types";

export default defineComponent({
  name: "FacilityView",
  components: {
    Facility,
  },
  setup() {
    const filteredFacility = ref<FacilityType | null>(null);

    const route = useRoute();

    watch(
      () => route.params.name,
      (name) => {
        const newFacility =
          facilities.find((facility) => {
            return facility.name.toLowerCase() === String(name).toLowerCase();
          }) ?? null;

        if (!newFacility) {
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
