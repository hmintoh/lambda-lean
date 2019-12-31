<template>
  <main>
    <TheNavbar />

    <div class="grid">
      <section>
        portfolio page pending implementation
      </section>
    </div>
  </main>
</template>

<script>
import TheNavbar from "~Components/TheNavbar/TheNavbar.vue";
import BaseHoverCard from "~Components/BaseHoverCard/BaseHoverCard.vue";

export default {
  name: "ViewPortfolio",
  components: {
    BaseHoverCard,
    TheNavbar
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

