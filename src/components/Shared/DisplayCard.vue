<template>
  <div
    class="rounded-2xl bg-gray-300 h-full grid grid-cols-1 grid-rows-6 shadow-2xl"
  >
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
  },
  setup(props) {
    const { bottomBorder } = toRefs(props);

    const borderClass: string = bottomBorder.value ? "bottom-border" : "";

    const headerClass = computed(() => {
      return { [borderClass]: true, ["header"]: true };
    });

    return { headerClass };
  },
});
</script>

<style scoped>
.header {
  @apply w-full text-6xl row-span-1 row-start-1 rounded-t-2xl flex items-center justify-center;
}

.bottom-border {
  @apply border border-b-black;
}
</style>
