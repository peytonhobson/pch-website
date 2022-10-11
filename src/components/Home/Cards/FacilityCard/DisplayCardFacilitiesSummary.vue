<template>
  <div v-if="curFacility" class="row-start-4 row-span-3 grid grid-rows-4">
    <div
      class="p-7 row-start-1 row-span-3 m-auto transition-opacity ease-in duration-700 opacity-100"
    >
      <div class="text-lg font-bold text-left mb-3 font-sen">
        {{ curFacility.name }}
      </div>
      <div class="text-base md:text-lg text-left font-sans">
        {{ curFacility.summary }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, toRefs } from "vue";

import { Facility } from "@/api/types";

export default defineComponent({
  name: "DisplayCardFacilitiesSummary",
  props: {
    facilities: {
      type: Object as () => Facility[],
      required: true,
    },
    curIndex: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const { facilities, curIndex } = toRefs(props);

    const curFacility = computed(() => facilities.value[curIndex.value]);

    return { curFacility };
  },
});
</script>
