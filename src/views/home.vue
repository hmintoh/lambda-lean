<template>
  <main>
    <section class="content">
      <transition name="fade">
        <div v-if="pageLoaded" class="hero">
          <router-link title="Lambda Acoustics" to="/services">
            <img
              src="/_assets/images/lambda_logo_with_name.jpg"
              alt="lambda-logo"
              title="Click to go to Services page"
            />
          </router-link>
        </div>
      </transition>

      <transition name="fade-delay">
        <div v-if="pageLoaded" class="summary">
          <h1 class="summary__title">// PURSUING PRESENCE //</h1>
          <div class="summary__body">
            <p>
              Musical presence defines why an individual prefers the acoustics
              of a room to another or why one prefers a certian audio mix to
              another.
            </p>
            <p>
              Our team at Lambda Acoustics pursues the highest goal of achieving
              Musical Presence in all aspects of music, be it in acoustic design
              or in live mixing.
            </p>
          </div>
        </div>
      </transition>
    </section>
  </main>
</template>

<script>
export default {
  name: "ViewHome",
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
  text-align: center;
  display: flex;
  flex-flow: column;
  height: -webkit-fill-available;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    width: 100%;
  }

  .hero {
    padding: $spacing-xl 0;

    img {
      width: 100%;
    }
  }

  .summary {
    &__title {
      font-size: $font-size-xl;
    }

    &__body {
      width: 70%;
      margin: auto;
    }
  }
}

@media (min-width: $media-query-tablet) {
  main {
    .content {
      width: 80%;
    }

    .summary {
      &__title {
        font-size: $font-size-2xl;
      }
    }
  }
}

@media (min-width: $media-query-desktop) {
}

.fade-enter-active {
  transition: $transition-slow;
  transition-delay: 0.5s;
}

.fade-delay-enter-active {
  transition: $transition-slow;
  transition-delay: 1s;
}

.fade-enter,
.fade-delay-enter {
  opacity: 0;
}
</style>

