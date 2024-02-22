<template>
  <button :class="buttonClass" @click="$emit('click')">
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
    additionalClasses: {
      type: String,
      required: false,
      default: "",
    },
  },
  emits: ["click"],
  setup(props) {
    const { type, additionalClasses } = toRefs(props);

    const buttonClass = computed(() => {
      return { [additionalClasses.value]: true, [type.value]: true };
    });

    console.log(buttonClass.value);

    return { buttonClass };
  },
};
</script>

<style scoped>
button {
  @apply px-5 font-medium;
}

.primary {
  @apply btn btn-block btn-md rounded-lg bg-brand-green-gray border-none hover:bg-brand-dark-green no-underline;
}

.card {
  @apply btn btn-block btn-md bg-brand-green-gray border-none hover:bg-brand-dark-green no-underline;
}

.facility {
  @apply btn btn-block btn-md bg-brand-green-gray border-none hover:bg-brand-dark-green no-underline;
}
</style>
