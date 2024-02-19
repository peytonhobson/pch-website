<template>
  <main-nav v-if="!loading" />
  <router-view />
  <Footer v-if="!loading" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainNav from "./components/Navigation/MainNav.vue";
import Footer from "./components/Shared/Footer.vue";
import useLoadingState from "./composables/useLoadingState";

export default defineComponent({
  name: "App",
  components: {
    MainNav,
    Footer,
  },
  setup() {
    const { loading } = useLoadingState(); // Access the reactive state

    return { loading };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
