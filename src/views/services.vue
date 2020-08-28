<template>
  <main>
    <transition name="fade-delay">
      <TheNavbar v-if="pageLoaded" activeRoute="/services" />
    </transition>

    <transition name="fade">
      <div v-if="pageLoaded" class="main-wrapper text-container">
        <BaseAccordion id="live" class="section" title="LIVE">
          <p>
            We are blessed have been a part of many keystone events in some of
            the largest arenas in Singapore. We believe that attention to detail
            and proper speaker design are what allows us to consistently achieve
            our highest ideals of pursuing <em>presence</em>. Together with our
            AV rental partners, we are able to offer our clients some of the
            best speaker systems from renowned manufacturers such as L’Acoustics
            and d&b Audiotechnik.
          </p>
          <p>
            We have a team of highly experienced audio engineers and consultants
            who are able to meet live audio production needs at any scale. Some
            of our Key clients include:
          </p>
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
            A full list of clients we have worked with can be found
            <a href="/portfolio" class="lambda-link">here</a>.
          </p>
        </BaseAccordion>

        <BaseAccordion
          id="fixed-installation"
          class="section"
          title="FIXED INSTALLATION + CONSULTATION"
        >
          <p>
            Over the years, our niche lies in audio design and consultation for
            local venues, espcially for Houses of Worship. We strongly believe
            in faithful stewardship of funds and believe our advantage lies in
            being able to advise the best systems that both meet the budget as
            well as the client's needs.
          </p>

          <p>
            Be they full turn-key solutions or consultation for speaker systems,
            we are able to support our client and deliver solutions that far
            exceed expectations.
          </p>

          <p>Our notable clients include:</p>
          <ul>
            <li
              v-for="(design, index) in fixedInstallationsDesigns"
              :key="index"
            >
              {{ design }}
            </li>
          </ul>

          <p>Our partners:</p>
          <BaseLinkCardContainer :links="ourPartners" />
        </BaseAccordion>

        <BaseAccordion
          id="broadcast"
          class="section"
          title="BROADCAST + STUDIO"
        >
          <p>
            We have worked with a number of clients on broadcast projects and
            have experience in working with dedicated broadcast feeds via
            traditional as well as modern platforms such as Facebook Live.
          </p>
          <p>
            For events, we have a suite of high quality equipment that allows to
            do multitrack live recording and post production. Our engineers have
            many years of experience and have produced some of the best content
            that were able to capture the essence and
            <em>presence</em> of the actual event being documented.
          </p>
        </BaseAccordion>

        <BaseAccordion
          id="acoustic-design"
          class="section"
          title="ACOUSTIC DESIGN + TREATMENT"
        >
          <p>
            Even the best sound systems can be marred by poor acoustics. Be it a
            new or existing space, we dedicate our time and energy to design
            solutions that allow for optimal acoustic coverage in our client's
            spaces.
          </p>
        </BaseAccordion>
      </div>
    </transition>
  </main>
</template>

<script>
import TheNavbar from "~Components/TheNavbar.vue";
import BaseAccordion from "~Components/BaseAccordion.vue";
import BaseLinkCardContainer from "~Components/BaseLinkCardContainer.vue";

export default {
  name: "ViewServices",
  head: {
    title: {
      inner: "Services"
    },
    meta: [
      {
        name: "description",
        content:
          "We offer services in broadcast, studio and live mixing, audio consultation, acoustic design and treatment",
        id: "meta-desc"
      },
      {
        name: "keywords",
        content:
          "audio consultation,live mixing,acoustic design,l-acoustics distributor,d&b audiotechnik distributor",
        id: "meta-keywords"
      }
    ]
  },
  components: {
    TheNavbar,
    BaseAccordion,
    BaseLinkCardContainer
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
        "The Tsoh Show Christmas Production 2019 – Cornerstone Community Church, Singapore",
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
      ],
      ourPartners: [
        {
          href: "https://www.dbaudio.com/global/en/",
          imgAlt: "d&b Audiotechnik logo",
          imgSrc: "/_assets/images/db_logo.svg"
        },
        {
          href: "https://www.l-acoustics.com/en/",
          imgAlt: "L-Acoustics logo",
          imgSrc: "/_assets/images/lacoustics_logo.svg"
        }
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
