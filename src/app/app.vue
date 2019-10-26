<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss" scoped>
#app {
  width: 100%;
  margin: auto;
  height: 100vh;
  max-width: $media-query-ldesktop;
  box-sizing: border-box;
  padding: 0 $spacing-m;
}
</style>