<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>

<script>
import { computed, toRefs } from "vue";

export default {
  name: "ActionButton",
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "primary",
      validator(value) {
        return ["primary", "card"].includes(value);
      },
    },
  },
  setup(props) {
    const { type } = toRefs(props);

    const buttonClass = computed(() => {
      return { [type.value]: true };
    });

    return { buttonClass };
  },
};
</script>

<style scoped>
button {
  @apply px-5 font-medium;
}

.primary {
  @apply rounded-full text-white bg-brand-green-gray py-3 font-questrial text-base md:text-xl font-medium;
}

.card {
  @apply w-full flex text-white bg-brand-green-gray font-questrial font-medium text-3xl items-center justify-center h-full rounded-b-2xl;
}

/* .secondary {
  @apply text-brand-blue-1 bg-transparent hover:bg-brand-blue-2 hover:text-white;
} */
</style>
