<template>
  <div class="body" id="app">
    <AppHeader /> 
    <router-view></router-view>
    <AppFooter />
  </div>
</template>


<script>
import AppHeader from "@/components/AppHeader.vue"
import AppFooter from "@/components/AppFooter.vue"

export default {
  name: "App",
  components: {
    AppFooter,
    AppHeader
},
  data: () => ({
  })
};
</script>

<style scoped>
</style>
