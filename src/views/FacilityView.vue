<template>
  <facility v-if="filteredFacility" :facility="filteredFacility"></facility>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed, onUnmounted } from "vue";

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
    const parseFacilityName = () => {
      const route = useRoute();
      const name = (route.params.name as String) || "";
      const store = useStore(key);
      store.commit(UPDATE_SELECTED_FACILITY_NAME, name);
    };
    const removeFacilityName = () => {
      const store = useStore(key);
      store.commit(UPDATE_SELECTED_FACILITY_NAME, "");
    };
    onMounted(useFetchFacilitiesDispatch);
    onMounted(parseFacilityName);
    onUnmounted(removeFacilityName);

    const filteredFacility = computed(() => useFilteredFacilities().value[0]);

    return { filteredFacility };
  },
});
</script>
