<template>
  <main-nav />
  <router-view />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainNav from "./components/Navigation/MainNav.vue";
import Footer from "./components/Shared/Footer.vue";

export default defineComponent({
  name: "App",
  components: {
    MainNav,
    Footer,
  },
  setup() {},
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
