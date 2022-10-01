<template>
  <div class="rounded-2xl bg-gray-300 h-144">
    <section :class="headerClass">
      <div class="self-center">
        {{ header }}
      </div>
    </section>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from "vue";
import ActionButton from "./ActionButton.vue";

export default defineComponent({
  name: "DisplayCard",
  components: {
    ActionButton,
  },
  props: {
    header: {
      type: String,
      required: true,
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

    console.log(headerClass.value);

    return { headerClass };
  },
});
</script>

<style scoped>
.header {
  @apply w-full text-6xl h-1/5 row-span-1 rounded-t-2xl flex items-center justify-center;
}

.bottom-border {
  @apply border border-b-black;
}
</style>
