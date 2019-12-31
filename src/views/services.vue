<template>
  <main>
    <TheNavbar />

    <div class="grid">
      <section>
        <BaseHoverCard id="live">
          <div slot="initialText"><h2 class="heading-h3">LIVE</h2></div>
          <div slot="detailText">
            <p>
              We have been blessed to be a part of many keystone events in some
              of the largest arenas locally. Attention to detail and proper
              speaker system design are what we believe allow us to achieve our
              highest ideals of pursuing presence. Our AV rental partners help
              us access the best speaker systems from renowned manufacturers
              like L’Acoustics and d & b Audiotechnik.
            </p>
            <p>
              We have a team of highly experienced audio engineers and
              consultants who are able to take on any live audio production
              needs on any scale.
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
              <a href="/portfolio">here</a>
            </p>
          </div>
        </BaseHoverCard>
      </section>

      <section>
        <BaseHoverCard id="fixed-installation">
          <div slot="initialText">
            <h2 class="heading-h3">FIXED INSTALLATION + CONSULTATION</h2>
          </div>
          <div slot="detailText">
            <p>
              Our niche has always been local venues especially Houses of
              Worship with audio design and consultation over the years. Be it
              full turn-key solutions that fit within the budget required or
              simply consultation for speaker systems, we are able to support
              all needs and deliver solutions that far exceed expectations.
            </p>
            <p>We have designed for:</p>
            <ul>
              <li
                v-for="(design, index) in fixedInstallationsDesigns"
                :key="index"
              >
                {{ design }}
              </li>
            </ul>
          </div>
        </BaseHoverCard>
      </section>

      <section>
        <BaseHoverCard id="broadcast">
          <div slot="initialText">
            <h2 class="heading-h3">BROADCAST + STUDIO</h2>
          </div>
          <div slot="detailText">
            <p>
              We have worked with various clients on broadcast projects using
              dedicated broadcast feeds via traditional as well as modern
              platforms such as Facebook Live.
            </p>
            <p>
              We also have a suite of equipment that allows us to do multitrack
              live recording and post production for events. Our engineers have
              vast experience producing the best audio post production that
              captures the essence and feel of the actual event being
              documented.
            </p>
          </div>
        </BaseHoverCard>
      </section>

      <section>
        <BaseHoverCard id="acoustic-design">
          <div slot="initialText">
            <h2 class="heading-h3">ACOUSTIC DESIGN + TREATMENT</h2>
          </div>
          <div slot="detailText">
            <p>
              Even the best sound systems can be marred by poor acoustics in a
              given space. We have dedicated some of our time and energy to help
              our clients achieve optimal solutions for the acoustics in their
              given space.
            </p>
            <p>
              We have the ability to advise on acoustic and spatial design while
              working with architects on new projects as well as improving the
              acoustics of an existing space.
            </p>
          </div>
        </BaseHoverCard>
      </section>
    </div>
  </main>
</template>

<script>
import TheNavbar from "~Components/TheNavbar/TheNavbar.vue";
import BaseHoverCard from "~Components/BaseHoverCard/BaseHoverCard.vue";

export default {
  name: "ViewServices",
  components: {
    BaseHoverCard,
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
        "Kingdom Invasion 2016 - Suntec City Convention Center",
        "Who is Jesus Musical - Esplanade Theatres on the Bay",
        "Kingdom Invasion 2017 - Singapore Expo & Convention Center",
        "Wan Ren He Yi Song 2017 - Singapore Indoor Stadium",
        "Snowglobed 2017 - Cornerstone Community Church",
        "Kingdom Invasion 2018 - Singapore Expo & Convention Center",
        "The Room Easter Production 2018 - Cornerstone Community Church",
        "Lighthouse Evangelism 40th Anniversary - Zepp @ Bigbox"
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

.fade-enter-active {
  transition: $transition-slow;
}

.fade-enter {
  opacity: 0;
}
</style>

