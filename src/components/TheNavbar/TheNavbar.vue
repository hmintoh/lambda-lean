<template>
  <transition name="fade">
    <div v-if="pageLoaded" class="container">
      <router-link title="Back to Home" to="/">
        <img
          src="/_assets/images/lambda_logo.svg"
          alt="lambda-logo"
          width="60"
          height="60"
          class="container__logo"
        />
      </router-link>

      <nav class="container__nav">
        <ul>
          <li v-for="(route, index) in routes" :key="index">
            <a :href="route.url" class="lambda-link">
              {{ route.label }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </transition>
</template>

<script>
export default {
  name: "TheFooter",
  data() {
    return {
      pageLoaded: false,
      routes: [
        { url: "/services", label: "Services" },
        { url: "/portfolio", label: "Portfolio" }
      ]
    };
  },
  mounted() {
    this.pageLoaded = true;
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
  padding: $spacing-xl 0 $spacing-2xl 0;

  &__logo {
  }

  &__nav {
    display: flex;
    align-items: flex-end;

    > ul {
      list-style-type: none;
      display: flex;
      margin-left: 0;
    }

    > ul li {
      padding: 0 0 0 $spacing-l;
      margin-bottom: $spacing-xs;
    }
  }
}
</style>