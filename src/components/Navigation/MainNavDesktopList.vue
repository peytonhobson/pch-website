<template>
  <ul
    class="flex flex-col p-4 mr-5 mt-4 w-full justify-end md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0"
    role="group"
  >
    <li id="Home">
      <router-link
        :to="listItemsReturned[0].to"
        :class="navItemClass"
        aria-current="page"
        >{{ listItemsReturned[0].text }}</router-link
      >
    </li>
    <li id="Services">
      <router-link
        :to="listItemsReturned[1].to"
        aria-current="page"
        :class="navItemClass"
      >
        {{ listItemsReturned[1].text }}
      </router-link>
    </li>
    <li
      id="Facilities"
      class="relative flex justify-center"
      @mouseenter="showSubMenu = true"
      @mouseleave="showSubMenu = false"
    >
      <router-link
        :to="listItemsReturned[2].to"
        :class="navItemClass"
        aria-current="page"
        >{{ listItemsReturned[2].text }}</router-link
      >
      <ul
        v-if="showSubMenu"
        class="menu bg-base-100 border absolute top-9 w-40 p-2 rounded-box"
      >
        <li v-for="link in facilityLinks" :key="link.text">
          <router-link
            :to="link.to"
            class="flex justify-center text-black hover:bg-brand-green-gray hover:text-white prose"
          >
            {{ link.text }}</router-link
          >
        </li>
      </ul>
    </li>
    <li id="Testimonials">
      <router-link
        :to="listItemsReturned[3].to"
        :class="navItemClass"
        aria-current="page"
        >{{ listItemsReturned[3].text }}</router-link
      >
    </li>
    <li id="About-Us">
      <router-link
        :to="listItemsReturned[4].to"
        :class="navItemClass"
        aria-current="page"
        >{{ listItemsReturned[4].text }}</router-link
      >
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, toRefs, computed, ref, watch } from "vue";
import { useRoute } from "vue-router";

import setSelectedButton from "@/composables/setSelectedButton";

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
    const { transparentBackground, listItems } = toRefs(props);

    const listItemsReturned = computed(() => listItems.value);

    const facilityLinks: Route[] = [
      { text: "Baxter", to: "/Facilities/Baxter" },
      { text: "Hallet", to: "/Facilities/Hallet" },
      { text: "Madrona", to: "/Facilities/Madrona" },
      { text: "Trapper", to: "/Facilities/Trapper" },
    ];

    const route = useRoute();

    const navItemClass = computed(() => {
      return {
        ["nav-list-item"]: true,
        ["text-white"]:
          transparentBackground.value && !route.path.match(/\/(Facilities\/)/g),
      };
    });

    watch(
      () => route.path,
      (path) => {
        setSelectedButton(listItemsReturned.value, path);
      }
    );

    const showSubMenu = ref(false);

    return { navItemClass, showSubMenu, facilityLinks, listItemsReturned };
  },
});
</script>

<style scoped>
.nav-list-item {
  @apply block py-2 px-7 mb-2 md:py-0 font-bold text-lg underline-offset-8 decoration-4 hover:underline hover:text-brand-green-gray;
}

.selected {
  @apply underline-offset-8 underline text-brand-green-gray;
}
</style>
