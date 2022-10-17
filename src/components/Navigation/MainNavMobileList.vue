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
            class="block py-2 pr-4 pl-3 md:px-0 md:py-5 hover:text-brand-green-gray font-bold text-lg md:text-base underline-offset-8 decoration-4 hover:underline bg-transparent"
            aria-current="page"
            @click="handleRouteClick"
            >{{ listItem.text }}</router-link
          >
        </li>
      </ul>
    </div>
  </Transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";

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
  emits: ["handle-open"],
  setup(props, { emit }) {
    const handleRouteClick = () => {
      emit("handle-open");
    };

    return { handleRouteClick };
  },
});
</script>
