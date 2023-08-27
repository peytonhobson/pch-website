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
  @apply btn btn-block btn-md md:btn-lg rounded-full bg-brand-green-gray border-none hover:bg-mint no-underline;
}

.card {
  @apply btn btn-block btn-lg bg-brand-green-gray border-none hover:bg-mint no-underline;
}

.facility {
  @apply btn btn-block btn-lg bg-brand-green-gray border-none hover:bg-mint no-underline;
}
</style>
