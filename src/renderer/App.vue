<template>
  <div id="app">
    <head-nav>header</head-nav>
    <router-view></router-view>
  </div>
</template>
<script>
import headNav from "./components/public/headers.vue";
export default {
  name: "blog-electron",
  components: {
    headNav
  }
};
</script>
<style lang='scss' scoped>
</style>
