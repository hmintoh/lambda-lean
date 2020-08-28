<template>
  <div id="app">
    <router-view></router-view>
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from "~Components/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheFooter
  }
};
</script>

<style lang="scss" scoped>
#app {
  min-height: 100vh;
  margin: auto;
  box-sizing: border-box;
  padding: 0 $spacing-m;
  max-width: $media-query-desktop;
  padding-bottom: $spacing-3xl;
}
</style>
