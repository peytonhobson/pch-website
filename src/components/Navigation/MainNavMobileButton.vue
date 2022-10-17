<template>
  <button class="btn btn-square btn-ghost">
    <font-awesome-icon
      :icon="['fas', 'bars']"
      size="2x"
      :class="mobileIconClass"
    />
  </button>
</template>

<script lang="ts">
import { defineComponent, computed, toRefs } from "vue";

export default defineComponent({
  props: {
    whiteText: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    const { whiteText } = toRefs(props);

    const mobileIconClass = computed(() => {
      return {
        ["fill-current"]: true,
        ["text-white"]: whiteText.value,
      };
    });

    return { mobileIconClass };
  },
});
</script>
