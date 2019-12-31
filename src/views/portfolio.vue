<template>
  <main>
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

    <div class="grid">
      <section>
        portfolio page pending implementation
      </section>
    </div>
  </main>
</template>

<script>
import BaseHoverCard from "~Components/BaseHoverCard/BaseHoverCard.vue";
import getViewport from "~Scripts/getViewport.js";

export default {
  name: "ViewPortfolio",
  components: {
    BaseHoverCard
  },
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
main {
  display: flex;
  flex-flow: column;
  height: 100%;
}

.lambda_logo {
  padding: $spacing-xl 0 $spacing-2xl 0;
}

.grid {
  > section {
    width: 100%;
    border: 1px solid $color-grey-100;
    margin-bottom: $spacing-m;
  }
}

@media (min-width: $media-query-tablet) {
  main {
    margin-left: $spacing-2xl;
    width: 80%;
  }
}
</style>

