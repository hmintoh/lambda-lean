<template>
  <main>
    <div class="hero">
      <router-link title="Lambda Acoustics" to="/services">
        <img src="/_assets/images/lambda_logo.svg" />
      </router-link>
    </div>

    <div class="description ">
      <h1 class="">// PURSUING PRESENCE //</h1>
      <div class="">
        <p>
          Musical presence defines why an individual prefers the acoustics of a
          room to another or why one prefers a certian audio mix to another.
        </p>
        <p>
          Our team at Lambda Acoustics pursues the highest goal of achieving
          Musical Presence in all aspects of music, be it in acoustic design or
          in live mixing.
        </p>
      </div>
    </div>

    <TheFooter />
  </main>
</template>

<script>
import TheFooter from "~Components/TheFooter/TheFooter.vue";

export default {
  name: "ViewHome",
  components: {
    TheFooter
  }
};
</script>

<style lang="scss" scoped>
main {
  text-align: center;

  img {
    width: 400px;
  }
}

.hero {
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
  }
}
</style>

