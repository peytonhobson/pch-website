<template>
  <ul
    class="flex flex-col p-4 mr-5 mt-4 w-full justify-end md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0"
  >
    <li v-for="listItem in listItems" :key="listItem.text">
      <router-link
        :to="listItem.to"
        :class="navItemClass"
        aria-current="page"
        >{{ listItem.text }}</router-link
      >
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, toRefs, computed } from "vue";
import { useRoute } from "vue-router";

interface Route {
  text: string;
  to: string;
}

export default defineComponent({
  name: "MainNavDesktopList",
  props: {
    transparentBackground: {
      type: Boolean,
      required: true,
    },
    listItems: {
      type: Object as () => Route[],
      required: true,
    },
  },
  setup(props) {
    const { transparentBackground } = toRefs(props);

    const route = useRoute();

    const navItemClass = computed(() => {
      return {
        ["nav-list-item"]: true,
        ["text-white"]:
          transparentBackground.value && !route.path.match(/\/(Facilities\/)/g),
      };
    });

    return { navItemClass };
  },
});
</script>

<style scoped>
.nav-list-item {
  @apply block py-2 px-7 hover:text-brand-green-gray md:py-0 font-bold text-lg underline-offset-8 decoration-4 hover:underline;
}
</style>
