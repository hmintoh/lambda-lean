<template>
  <div
    class="hover-card"
    @mouseenter="revealDetailText = true"
    @mouseleave="revealDetailText = false"
    v-touch:touch="touchHandler"
  >
    <div :style="applyBackgroundStyles()">
      <slot name="initialText" />
    </div>

    <transition name="fade">
      <div v-if="revealDetailText" class="detailText-container">
        <div>
          <slot />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "BaseHoverCard",
  props: {
    imgSrc: {
      type: String
    },
    imgAlt: {
      type: String
    }
  },
  data() {
    return {
      revealDetailText: false
    };
  },
  methods: {
    applyBackgroundStyles() {
      return {
        height: "460px",
        backgroundImage: `url(${this.imgSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      };
    }
  },
  touchHandler() {
    this.revealDetailText = !this.revealDetailText;
  }
};
</script>

<style lang="scss" scoped>
.hover-card {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  margin-right: $spacing-s;
}

.detailText-container {
  position: absolute;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: $spacing-m;
  overflow: hidden;
  background: linear-gradient(transparent, $color-grey-400, $color-grey-500);
  opacity: 0.9;
  color: $color-white;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  cursor: default;
}

@media (min-width: $media-query-tablet) {
  .detailText-container {
    padding: $spacing-m $spacing-3xl;
  }
}
</style>
