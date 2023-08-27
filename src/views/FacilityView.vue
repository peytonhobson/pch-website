<template>
  <div :style="{height: navHeight + 'px'}"></div>
  <facility v-if="filteredFacility" :facility="filteredFacility"></facility>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed, watch, onUnmounted } from "vue";

import Facility from "@/components/Facilities/Facility.vue";

import { UPDATE_SELECTED_FACILITY_NAME } from "@/store/constants";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

import { key } from "@/store";
import {
  useFilteredFacilities,
  useFetchFacilitiesDispatch,
} from "@/store/composables";

export default defineComponent({
  name: "FacilityView",
  components: {
    Facility,
  },
  setup() {
    const store = useStore(key);

    const parseFacilityName = () => {
      const route = useRoute();
      const name = (route.params.name as String) || "";
      store.commit(UPDATE_SELECTED_FACILITY_NAME, name);
    };
    const removeFacilityName = () => {
      store.commit(UPDATE_SELECTED_FACILITY_NAME, "");
    };
    onMounted(useFetchFacilitiesDispatch);
    onMounted(parseFacilityName);
    onUnmounted(removeFacilityName);
    let filteredFacility = computed(() => useFilteredFacilities().value[0]);

    const route = useRoute();

    watch(
      () => route.params.name,
      async (name) => {
        store.commit(UPDATE_SELECTED_FACILITY_NAME, name || "");
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
