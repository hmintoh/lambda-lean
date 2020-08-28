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
          <h1 class="summary--title">// PURSUING PRESENCE //</h1>
          <div class="summary--body">
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
  metaInfo: {
    title: "Home",
    meta: [
      {
        name: "description",
        content:
          "Lambda Acoustics specialises in studio and live mixing, audio consultation, broadcast and studio",
      },
      { name: "keywords", content: "acoustic design,acoustic consultation" },
    ],
  },
  data() {
    return {
      pageLoaded: false,
    };
  },
  mounted() {
    this.pageLoaded = true;
  },
};
</script>

<style lang="scss" scoped>
main {
  text-align: center;
  display: flex;
  flex-flow: column;
  padding-top: 40%;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    width: 100%;
    height: inherit;
  }

  .hero {
    padding: $spacing-xl 0;

    img {
      width: 100%;
    }
  }

  .summary {
    &--title {
      font-size: $font-size-xl;
      letter-spacing: 0.5px;
    }

    &--body {
      margin: auto;
    }
  }
}

@media (min-width: $media-query-tablet) {
  main {
    padding-top: 10%;

    .content {
      width: 80%;
    }

    .summary {
      &--title {
        font-size: $font-size-2xl;
      }
    }
  }
}
</style>
