<template>
  <div class="body" id="app">
    <AppHeader /> 
    <AboutHome />
    <AppFooter />
  </div>
</template>


<script>
import AppHeader from "./AppHeader.vue"
import AppFooter from "./AppFooter.vue"
import AboutHome from "./AboutHome.vue";

export default {
  name: "AboutMe",
  components: {
    AppHeader,
    AboutHome,
    AppFooter,
},
  data: () => ({
  })
};
</script>

<style scoped>
</style>
