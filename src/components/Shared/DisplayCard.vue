<template>
  <div :class="containerClass" @click="routeUser">
    <div v-if="header" :class="headerClass">
      <div class="self-center font-sen">
        {{ header }}
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from "vue";

import { useRouter } from "vue-router";

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
    route: {
      type: String,
      required: false,
      default: "",
    },
    lift: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  setup(props) {
    const { bottomBorder, rows, route, lift } = toRefs(props);

    const borderClass: string = bottomBorder.value ? "bottom-border" : "";

    const headerClass = computed(() => {
      return { [borderClass]: true, ["header"]: true };
    });

    const containerClass = computed(() => {
      return {
        ["container-class"]: true,
        ["grid-rows-" + rows.value]: true,
        ["lift"]: lift.value,
      };
    });

    const router = useRouter();

    const routeUser = () => {
      //Will need to remove # in prod
      if (route.value !== "") {
        router.push(route.value);
      }
    };

    return { headerClass, containerClass, routeUser };
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
  @apply rounded-2xl bg-gray-200 grid grid-cols-1 shadow-2xl;
}

.lift {
  @apply ease-out duration-500 md:hover:-translate-y-5 transition-all hover:cursor-pointer;
}
</style>
