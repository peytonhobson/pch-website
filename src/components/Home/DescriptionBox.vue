<template>
  <card>
    <template #title>
      <h2 class="card-title">
        <font-awesome-icon :icon="icon" :class="iconColor" size="2x" />{{
          title
        }}
      </h2>
    </template>
    <template #body>
      <p class="text-left pb-0 max-h-20">
        {{ body }}
      </p>
    </template>
  </card>
</template>

<script lang="ts">
import { defineComponent, toRefs, computed } from "vue";

import Card from "@/components/Shared/Card.vue";

export default defineComponent({
  name: "DescriptionBox",
  components: {
    Card,
  },
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
