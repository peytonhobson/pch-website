<template>
  <main-nav v-if="!loading" />
  <router-view @loaded="loading = false" />
  <Footer v-if="!loading" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import MainNav from "./components/Navigation/MainNav.vue";
import Footer from "./components/Shared/Footer.vue";
import router from "./router";

export default defineComponent({
  name: "App",
  components: {
    MainNav,
    Footer,
  },
  setup() {
    const loading = ref(true);
    // In your router configuration or main.js where Vue Router is set up
    router.beforeEach((to, from, next) => {
      // Set loading to true before navigation starts
      loading.value = true;
      next();
    });

    router.afterEach(() => {
      // Set loading to false once navigation is complete
      loading.value = false;
    });

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
