<template>
  <main>
    <TheNavbar activeRoute="/portfolio" />

    <div class="main-wrapper typesetting-article">
      <section class="text-container">
        <h1>Portfolio</h1>
        <p>
          Explore our list of projects that we have completed over the years.
        </p>
      </section>

      <section>
        <h2>Designs</h2>
        <p>Test</p>
        <div class="carousel-wrapper">
          <div class="carousel">
            <BaseHoverCard v-for="(design, index) in designs" :key="index">
              <img slot="initialText" :src="design.imgSrc" width="100%" />
              <div slot="detailText">
                <h3>{{ design.label }}</h3>
                <p>{{ design.description }}</p>
              </div>
            </BaseHoverCard>
          </div>
        </div>
      </section>

      <section class="text-container">
        <h2>Past Projects</h2>
        <section v-for="(category, index) in pastProjects" :key="index">
          <h3>{{ category.label }}</h3>
          <ul>
            <li v-for="(project, index) in category.list" :key="index">
              {{ project }}
            </li>
          </ul>
        </section>
      </section>

      <section class="text-container">
        <h2>In the news</h2>
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
      pageLoaded: false,
      designs: [
        {
          label: "Project 1",
          description: "Project 1 description",
          imgSrc: "/_assets/images/speaker_coverage.png"
        },
        {
          label: "Project 2",
          description: "Project 2 description",
          imgSrc: "/_assets/images/speaker_coverage.png"
        },
        {
          label: "Project 3",
          description: "Project 3 description",
          imgSrc: "/_assets/images/speaker_coverage.png"
        },
        {
          label: "Project 4",
          description: "Project 4 description",
          imgSrc: "/_assets/images/speaker_coverage.png"
        }
      ],
      pastProjects: [
        {
          label: "Live",
          list: [
            "Kingdom Invasion 2016 - Suntec City Convention Center",
            "Who is Jesus Musical - Esplanade Theatres on the Bay",
            "Kingdom Invasion 2017 - Singapore Expo & Convention Center",
            "Wan Ren He Yi Song 2017 - Singapore Indoor Stadium",
            "Snowglobed 2017 - Cornerstone Community Church",
            "Kingdom Invasion 2018 - Singapore Expo & Convention Center",
            "The Room Easter Production 2018 - Cornerstone Community Church",
            "Lighthouse Evangelism 40th Anniversary - Zepp @ Bigbox"
          ]
        },
        {
          label: "Fixed",
          list: [
            "Kingdom Invasion 2016 - Suntec City Convention Center",
            "Who is Jesus Musical - Esplanade Theatres on the Bay",
            "Kingdom Invasion 2017 - Singapore Expo & Convention Center",
            "Wan Ren He Yi Song 2017 - Singapore Indoor Stadium",
            "Snowglobed 2017 - Cornerstone Community Church",
            "Kingdom Invasion 2018 - Singapore Expo & Convention Center",
            "The Room Easter Production 2018 - Cornerstone Community Church",
            "Lighthouse Evangelism 40th Anniversary - Zepp @ Bigbox"
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
$hover-card-width: 700px;

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
      min-width: $hover-card-width;
    }
  }

  .carousel:hover .hover-card {
    opacity: 0.3;

    &:hover {
      transition: $transition-fast;
      opacity: 1;
    }
  }
}

@media (min-width: $media-query-tablet) {
  main {
    margin-left: $spacing-2xl;
  }
}
</style>
