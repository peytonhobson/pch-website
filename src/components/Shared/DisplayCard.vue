<template>
  <div :class="containerClass">
    <section v-if="header" :class="headerClass">
      <div class="self-center">
        {{ header }}
      </div>
    </section>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from "vue";

export default defineComponent({
  name: "DisplayCard",
  components: {},
  props: {
    header: {
      type: String,
      required: false,
      default: undefined,
    },
    bottomBorder: {
      type: Boolean,
      required: false,
      default: false,
    },
    rows: {
      type: String,
      required: false,
      default: "6",
    },
  },
  setup(props) {
    const { bottomBorder, rows } = toRefs(props);

    const borderClass: string = bottomBorder.value ? "bottom-border" : "";

    const headerClass = computed(() => {
      return { [borderClass]: true, ["header"]: true };
    });

    const containerClass = computed(() => {
      return { ["container-class"]: true, ["grid-rows-" + rows.value]: true };
    });

    return { headerClass, containerClass };
  },
});
</script>

<style scoped>
.header {
  @apply w-full text-5xl md:text-6xl row-span-1 row-start-1 rounded-t-2xl flex items-center justify-center py-3 md:py-0;
}

.bottom-border {
  @apply border-2 border-b-black;
}

.container-class {
  @apply rounded-2xl bg-gray-200 grid grid-cols-1 shadow-2xl ease-out duration-500 hover:-translate-y-5 transition-all hover:cursor-pointer;
}
</style>
