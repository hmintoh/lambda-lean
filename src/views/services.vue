<template>
  <main>
    <TheNavbar activeRoute="/services" />

    <div class="main-wrapper text-container">
      <BaseAccordion id="live" class="section" title="LIVE">
        <p>
          We have been blessed to be a part of many keystone events in some of
          the largest arenas locally. Attention to detail and proper speaker
          system design are what we believe allow us to achieve our highest
          ideals of pursuing presence. Our AV rental partners help us access the
          best speaker systems from renowned manufacturers like L’Acoustics and
          d & b Audiotechnik.
        </p>
        <p>
          We have a team of highly experienced audio engineers and consultants
          who are able to take on any live audio production needs at any scale.
        </p>
        <p>Our Key Clients:</p>
        <ul>
          <li v-for="(client, index) in liveKeyClients" :key="index">
            {{ client }}
          </li>
        </ul>

        <p>Some of our recent Live work include:</p>
        <ul>
          <li v-for="(work, index) in liveKeyWorks" :key="index">
            {{ work }}
          </li>
        </ul>

        <p>
          The full list of clients we have worked for can be found
          <a href="/portfolio" class="lambda-link">here</a>
        </p>
      </BaseAccordion>

      <BaseAccordion
        id="fixed-installation"
        class="section"
        title="FIXED INSTALLATION + CONSULTATION"
      >
        <p>
          Over the years, our niche has always been local venues especially
          Houses of Worship with audio design and consultation. Be it full
          turn-key solutions that respect the budget given or consultation for
          speaker systems, we are able to support all needs and deliver
          solutions that far exceed expectations.
        </p>
        <p>We have designed for:</p>
        <ul>
          <li v-for="(design, index) in fixedInstallationsDesigns" :key="index">
            {{ design }}
          </li>
        </ul>
      </BaseAccordion>

      <BaseAccordion id="broadcast" class="section" title="BROADCAST + STUDIO">
        <p>
          We have worked with various clients on broadcast projects using
          dedicated broadcast feeds via traditional as well as modern platforms
          such as Facebook Live.
        </p>
        <p>
          We also have a suite of equipment that allows us to do multitrack live
          recording and post production for events. Our engineers have vast
          experience producing the best audio post production that captures the
          essence and feel of the actual event being documented.
        </p>
      </BaseAccordion>

      <BaseAccordion
        id="acoustic-design"
        class="section"
        title="ACOUSTIC DESIGN + TREATMENT"
      >
        <p>
          Even the best sound systems can be marred by poor acoustics in a given
          space. We dedicate our time and energy to help our clients achieve
          optimal solutions for the acoustics in their given space.
        </p>
        <p>
          We have the ability to advise on acoustic and spatial design while
          working with architects on new projects as well as improving the
          acoustics of an existing space.
        </p>
      </BaseAccordion>
    </div>
  </main>
</template>

<script>
import TheNavbar from "~Components/TheNavbar/TheNavbar.vue";
import BaseAccordion from "~Components/BaseAccordion/BaseAccordion.vue";

export default {
  name: "ViewServices",
  components: {
    BaseAccordion,
    TheNavbar
  },
  data() {
    return {
      pageLoaded: false,
      active: true,
      liveKeyClients: [
        "Cornerstone Community Church",
        "Lighthouse Evangelism",
        "St. Andrew's Cathedral",
        "Grace Assembly of God",
        "Full Gospel Church (JB)",
        "Facebook Singapore"
      ],
      liveKeyWorks: [
        "The Tsoh Show Christmas Production – Cornerstone Community Church, Singapore",
        "Experiencing God The Musical 2019 – St. Andrew’s Cathedral, Singapore",
        "LifeFest 2019 - St. Andrew’s Cathedral, Singapore",
        "SingLang 2019 – National Stadium, Singapore Sports Hub",
        "Asia’s Got Talent Season 3 Grand Finals – Marina Bay Sands Theatre, Singapore",
        "Asia’s Got Talent Season 3 Judges Auditions & Semifinals – Pinewood Studios, Malaysia"
      ],
      fixedInstallationsDesigns: [
        "St. Andrew's Cathedral Singapore (Cathedral New Sanctuary)",
        "Burning Hearts @ 66 Kampung Bugis",
        "Petra Church Singapore",
        "Impact Life Church Singapore"
      ]
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

.section {
  width: 100%;
  border: 1px solid $color-grey-100;
  margin-bottom: $spacing-m;
}

h2 {
  margin-bottom: 0;
}

@media (min-width: $media-query-tablet) {
  main {
    margin-left: $spacing-2xl;
  }
}
</style>
