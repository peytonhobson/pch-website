<template>
  <button :class="buttonClass" @click="$emit('click')">
    <span v-if="loading">
      <spinner-icon />
    </span>
    <span v-else>{{ text }}</span>
  </button>
</template>

<script>
import { computed, toRefs } from "vue";
import SpinnerIcon from "@/components/Shared/SpinnerIcon.vue";

export default {
  name: "ActionButton",
  components: {
    SpinnerIcon,
  },
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
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ["click"],
  setup(props) {
    const { type, additionalClasses } = toRefs(props);

    const buttonClass = computed(() => {
      return { [additionalClasses.value]: true, [type.value]: true };
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
  @apply btn btn-block btn-md rounded-lg bg-brand-green-gray border-none hover:bg-brand-dark-green no-underline;
}

.card {
  @apply btn btn-block btn-md bg-brand-green-gray border-none hover:bg-brand-dark-green no-underline;
}

.facility {
  @apply btn btn-block btn-md bg-brand-green-gray border-none hover:bg-brand-dark-green no-underline;
}
</style>
