<template>
  <main>
    <transition name="fade-delay">
      <TheNavbar v-if="pageLoaded" activeRoute="/portfolio" />
    </transition>

    <transition name="fade">
      <div v-if="pageLoaded" class="main-wrapper typesetting-article">
        <section class="text-container">
          <h1>Portfolio</h1>
          <p class="body--intro">
            Explore some of the projects that we have completed over the years.
          </p>
        </section>

        <section>
          <div class="text-container">
            <h2>Designs</h2>
            <p>
              We take pride in accurately mapping out our designs in 3D to
              ensure even Sound Pressure Level coverage throughout the listening
              plane and avoid unwanted reflections and visual blockages.
            </p>
          </div>
          <div class="carousel-wrapper">
            <div class="carousel">
              <BaseHoverCard
                v-for="(design, index) in designs"
                :key="index"
                :imgSrc="design.imgSrc"
                :imgAlt="design.label"
              >
                <h3>{{ design.label }}</h3>
                <p>{{ design.description }}</p>
              </BaseHoverCard>
            </div>
          </div>
        </section>

        <section class="text-container">
          <h2>Past projects</h2>
          <p>
            Some of the clients we have worked with over the years:
          </p>
          <section v-for="(category, index) in pastProjects" :key="index">
            <!-- <h3>{{ category.label }}</h3> -->
            <ul>
              <li v-for="(project, index) in category.list" :key="index">
                {{ project }}
              </li>
            </ul>
          </section>
        </section>

        <section class="text-container">
          <h2>In the news</h2>
          <a
            href="https://www.worshipavl.com/details/63299-feature-renewing-st-andrew-s-new-sanctuary"
            target="_blank"
            class="in_the_news_container"
            ><img src="/_assets/images/worship_avl.svg" />
          </a>
        </section>
      </div>
    </transition>
  </main>
</template>

<script>
import TheNavbar from "~Components/TheNavbar.vue";
import BaseHoverCard from "~Components/BaseHoverCard.vue";

export default {
  name: "ViewPortfolio",
  head: {
    title: {
      inner: "Portfolio"
    },
    meta: [
      { name: "description", content: "A description of the page", id: "desc" }
    ]
  },
  components: {
    BaseHoverCard,
    TheNavbar
  },
  data() {
    return {
      pageLoaded: false,
      designs: [
        {
          label: "St. Andrews Cathedral",
          description:
            "Cathedral New Sanctuary Upgrade – L’Acoustics Wifo System with X12 Downfill and X8 Delay Line",
          imgSrc: "/_assets/images/SAC-cns-2019-1.png"
        },
        {
          label: "St.Andrews Cathedral",
          description:
            "Cathedral New Sanctuary Upgrade – L’Acoustics Wifo System with X12 Downfill and X8 Delay Line",
          imgSrc: "/_assets/images/SAC-cns-2019-2.png"
        },
        {
          label: "Singlang 2019",
          description:
            "Singapore Sports Hub – L’Acoustics K2 System with K2/Kara Outfills",
          imgSrc: "/_assets/images/singlang-2019-1.png"
        },
        {
          label: "Singlang 2019",
          description:
            "Singapore Sports Hub – L’Acoustics K2 System with K2/Kara Outfills",
          imgSrc: "/_assets/images/singlang-2019-2.png"
        }
      ],
      pastProjects: [
        {
          label: "Past projects",
          list: [
            "The Tsoh Show Christmas Production 2019 – Cornerstone Community Church, Singapore",
            "Burning Hearts - 66 Kampung Bugis",
            "Experiencing God The Musical 2019 – St. Andrew’s Cathedral, Singapore",
            "LifeFest 2019 - St. Andrew’s Cathedral, Singapore",
            "SingLang 2019 – National Stadium, Singapore Sports Hub",
            "Petra Church Singapore - Bible House",
            "Asia’s Got Talent Season 3 Grand Finals – Marina Bay Sands Theatre, Singapore",
            "Asia’s Got Talent Season 3 Judges Auditions & Semifinals – Pinewood Studios, Malaysia",
            "Cathedral New Sanctuary - St. Andrew’s Cathedral, Singapore",
            "Unstoppable Love 2018 – Novena Church",
            "Lighthouse Evangelism 40th Anniversary - Zepp - Bigbox",
            "The Room Easter Production 2018 - Cornerstone Community Church",
            "Kingdom Invasion 2018 - Singapore Expo & Convention Center",
            "Victory Family Centre 40th Anniversary – Singapore Indoor Stadium",
            "Snowglobed 2017 - Cornerstone Community Church",
            "Wan Ren He Yi Song 2017 - Singapore Indoor Stadium",
            "Kingdom Invasion 2017 - Singapore Expo & Convention Center",
            "Who is Jesus Musical - Esplanade Theatres on the Bay",
            "Impact Life Church - Bigbox Singapore",
            "Kingdom Invasion 2016 - Suntec City Convention Center"
          ]
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
$hover-card-width: 740px;
$hover-card-height: 460px;
$hover-card-width-mobile: 320px;

main {
  display: flex;
  flex-flow: column;
  height: 100%;
}

.carousel-wrapper {
  overflow-x: scroll;
  width: 100%;
  height: auto;

  .carousel {
    display: flex;
    position: relative;

    > .hover-card {
      min-width: $hover-card-width-mobile;
      min-height: 100%;
    }
  }

  .carousel:hover .hover-card {
    transition: $transition-fast;
    opacity: 0.5;
    filter: grayscale(100%);

    &:hover {
      transition: $transition-fast;
      opacity: 1;
      filter: none;
    }
  }
}

.in_the_news_container {
  width: 240px;
  height: 180px;
  opacity: 0.8;
  align-content: center;
  justify-content: center;
  display: flex;
  padding: $spacing-m;
  box-sizing: border-box;
  align-items: center;
  border-radius: 4px;
  box-shadow: $box-shadow-grey-100;
  background: linear-gradient($color-grey-100, $color-grey-200);

  &:hover {
    transition: $transition-fast;
    box-shadow: $box-shadow-grey-200;
    background: $color-grey-200;
  }
}

@media (min-width: $media-query-tablet) {
  main {
    margin-left: $spacing-2xl;
  }

  .carousel-wrapper {
    .carousel {
      > .hover-card {
        min-width: $hover-card-width;
        min-height: $hover-card-height;
      }
    }
  }
}
</style>
