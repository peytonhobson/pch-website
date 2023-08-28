<template>
  <section class="flex items-center justify-center">
    <div :class="columnContainerClass">
      <div :class="firstColumnClass">
        <slot name="leftColumn">Left Column</slot>
      </div>

      <div :class="secondColumnClass">
        <slot name="rightColumn">Right Column</slot>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, toRefs, computed } from "vue";

export default defineComponent({
  name: "DualItemDisplay",
  props: {
    reverseColumn: {
      type: Boolean,
      required: false,
      default: false,
    },
    itemsStart: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props) {
    const { reverseColumn, itemsStart } = toRefs(props);

    const columnContainerClass = computed(() => {
      return {
        ["column-container"]: true,
        ["flex-col"]: !reverseColumn.value,
        ["flex-col-reverse"]: reverseColumn.value,
      };
    });

    const firstColumnClass = computed(() => {
      return {
        ["first-column"]: true,
        ["md:items-start"]: itemsStart.value,
        ["md:items-center"]: !itemsStart.value,
      };
    });

    const secondColumnClass = computed(() => {
      return {
        ["second-column"]: true,
        ["md:items-start"]: itemsStart.value,
        ["md:items-center"]: !itemsStart.value,
      };
    });

    return { columnContainerClass, firstColumnClass, secondColumnClass };
  },
});
</script>

<style scoped>
.column-container {
  @apply lg:grid lg:grid-cols-12 lg:grid-rows-1 flex justify-center md:items-center w-full h-full;
}

.first-column {
  @apply lg:col-span-4 lg:col-start-2 flex items-start justify-center w-full h-full;
}

.second-column {
  @apply flex justify-center lg:flex-wrap lg:col-span-5 lg:col-start-7;
}
</style>
