<template>
  <div :class="containerClass">
    <div class="row-start-1 row-span-2 mx-auto flex items-end pb-5 w-3/4">
      <font-awesome-icon :icon="icon" :class="iconColor" size="3x" />
      <span class="md:text-4xl text-3xl sm:text-red">
        {{ title }}
      </span>
    </div>
    <div class="row-start-3 row-span-2 w-3/4 mx-auto pt-5">
      <div class="text-xl text-left">{{ body }}</div>
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
      return { ["container-class"]: true, ["md:border-x-4"]: sideBorders };
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
  @apply w-full h-full border-b-4 border-brand-green-gray grid grid-rows-6;
}
</style>
