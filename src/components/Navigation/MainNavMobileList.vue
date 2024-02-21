<template>
  <Transition>
    <div v-if="isOpen" class="w-full bg-transparent">
      <ul
        class="flex flex-col p-4 w-full justify-evenly md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-transparent"
      >
        <li
          v-for="listItem in listItems"
          :key="listItem.text"
          class="bg-transparent"
        >
          <router-link
            :to="listItem.to"
            :class="navItemClass[listItem.to]"
            aria-current="page"
            >{{ listItem.text }}</router-link
          >
        </li>
      </ul>
    </div>
  </Transition>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRoute } from "vue-router";

interface Route {
  text: string;
  to: string;
}

export default defineComponent({
  name: "MainNavMobileList",
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    listItems: {
      type: Object as () => Route[],
      required: true,
    },
  },
  setup(props) {
    const route = useRoute();

    const navItemClass = computed(() => {
      return props.listItems.reduce((acc, item) => {
        return {
          ...acc,
          [item.to]: {
            ["nav-list-item"]: true,
            ["selected"]: route.path === item.to,
          },
        };
      }, {} as Record<string, object>);
    });

    return { navItemClass };
  },
});
</script>
z
<style scoped>
.nav-list-item {
  @apply block py-2 pr-4 pl-3 md:px-0 md:py-5 hover:text-brand-green-gray font-bold text-lg md:text-base underline-offset-8 decoration-4 hover:underline bg-transparent;
}

.selected {
  @apply underline text-brand-green-gray;
}
</style>
