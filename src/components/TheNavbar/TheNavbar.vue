<template>
  <transition name="fade">
    <div v-if="pageLoaded">
      <router-link title="Back to Home" to="/">
        <img
          src="/_assets/images/lambda_logo.svg"
          alt="lambda-logo"
          width="60"
          height="60"
          class="lambda_logo"
        />
      </router-link>
    </div>
  </transition>
</template>

<script>
export default {
  name: "TheFooter",
  data() {
    return {
      pageLoaded: false
    };
  },
  mounted() {
    this.pageLoaded = true;
  }
};
</script>

<style lang="scss" scoped>
.lambda_logo {
  padding: $spacing-xl 0 $spacing-2xl 0;
}
</style>