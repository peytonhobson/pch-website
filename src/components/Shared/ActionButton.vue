<template>
  <button
    class="btn btn-block btn-lg bg-brand-green-gray border-none hover:bg-brand-light-green flex items-center"
  >
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
  @apply rounded-full text-white bg-brand-green-gray hover:bg-brand-light-green py-3 font-questrial text-base md:text-xl font-medium;
}

.card {
  @apply btn btn-block btn-lg bg-brand-green-gray border-none hover:bg-brand-light-green flex items-center;
}
</style>
