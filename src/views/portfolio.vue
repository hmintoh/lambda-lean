<template>
  <main>
    <transition name="fade-delay">
      <TheNavbar v-if="pageLoaded" activeRoute="/portfolio" />
    </transition>

    <transition name="fade">
      <div v-if="pageLoaded" class="main-wrapper typesetting-article">
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
    </transition>
  </main>
</template>

<script>
import TheNavbar from "~Components/TheNavbar/TheNavbar.vue";
import BaseHoverCard from "~Components/BaseHoverCard/BaseHoverCard.vue";

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
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam iaculis leo id nunc maximus, in molestie elit faucibus. Duis condimentum metus ac odio sollicitudin, eu mattis ligula bibendum",
          imgSrc: "/_assets/images/SAC-cns-2019-1.png"
        },
        {
          label: "St.Andrews Cathedral",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam iaculis leo id nunc maximus, in molestie elit faucibus. Duis condimentum metus ac odio sollicitudin, eu mattis ligula bibendum",
          imgSrc: "/_assets/images/SAC-cns-2019-2.png"
        },
        {
          label: "Singlang 2019",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam iaculis leo id nunc maximus, in molestie elit faucibus. Duis condimentum metus ac odio sollicitudin, eu mattis ligula bibendum",
          imgSrc: "/_assets/images/singlang-2019-1.png"
        },
        {
          label: "Singlang 2019",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam iaculis leo id nunc maximus, in molestie elit faucibus. Duis condimentum metus ac odio sollicitudin, eu mattis ligula bibendum",
          imgSrc: "/_assets/images/singlang-2019-2.png"
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
