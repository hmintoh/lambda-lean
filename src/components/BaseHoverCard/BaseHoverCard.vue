<template>
  <div
    class="hover-card"
    @click="revealDetailText = !revealDetailText"
    @mouseenter="revealDetailText = true"
    @mouseleave="revealDetailText = false"
  >
    <div class="initialText-container">
      <slot name="initialText" />
    </div>

    <transition name="fade">
      <div v-if="revealDetailText" class="detailText-container">
        <slot name="detailText" />
      </div>
    </transition>
  </div>
</template>

<script>
import getViewport from "~Scripts/getViewport.js";

export default {
  name: "BaseHoverCard",
  data() {
    return {
      revealDetailText: false
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.hover-card {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.detailText-container {
  position: absolute;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: $spacing-m;
  overflow: hidden;
  background: $color-grey-500;
  opacity: 0.8;
  color: $color-white;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
}
</style>
