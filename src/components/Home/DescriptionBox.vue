<template>
  <div :class="containerClass">
    <div class="mx-auto h-1/3 flex items-end justify-start w-3/4">
      <font-awesome-icon :icon="icon" :class="iconColor" size="3x" />
      <span class="md:text-4xl text-3xl sm:text-red font-sen">
        {{ title }}
      </span>
    </div>
    <div class="w-3/4 h-1/2 mx-auto flex items-start">
      <div class="text-xl text-left font-sans text-slate-400">{{ body }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, computed } from "vue";

export default defineComponent({
  name: "DescriptionBox",
  props: {
    icon: {
      type: Object,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    iconClass: {
      type: String,
      required: false,
      default: "primary-icon",
      validator(value: string) {
        return ["primary-icon", "secondary-icon", "tertiary-icon"].includes(
          value
        );
      },
    },
  },
  setup(props: any) {
    const { iconClass, title } = toRefs(props);
    const iconColor = computed(() => {
      return { [iconClass.value]: true };
    });

    const sideBorders = title.value === "Burden Free" ? true : false;

    const containerClass = computed(() => {
      return {
        ["container-class"]: true,
        ["md:border-x-2"]: sideBorders,
        ["border-y-2"]: !sideBorders,
      };
    });

    return { iconColor, containerClass };
  },
});
</script>

<style scoped>
.primary-icon {
  @apply fill-current text-red-500 mr-3;
}

.secondary-icon {
  @apply fill-current text-black mr-3;
}

.tertiary-icon {
  @apply fill-current text-brand-green-gray mr-3;
}

.container-class {
  @apply w-full md:w-1/3 h-80 md:border-y-2 border-brand-green-gray flex flex-wrap items-start;
}
</style>
