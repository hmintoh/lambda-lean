<template>
  <ul class="link-card-container">
    <li class="link-card" v-for="(link, index) in links" :key="index">
      <a :href="link.href" target="_blank">
        <img :src="link.imgSrc" :alt="link.imgAlt" />
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "BaseLinkCard",
  props: {
    links: {
      type: Array,
      required: true,
      default: () => [
        {
          href: "",
          imgSrc: "",
          imgAlt: ""
        }
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
.link-card-container {
  list-style-type: none;
  margin-left: 0;
  display: flex;

  > li {
    margin-right: 4px;
  }
}

.link-card > a {
  width: 240px;
  height: 120px;
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

  > img {
    width: 100%;
  }
}
</style>
