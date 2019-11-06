<template>
  <div
    :id="id"
    class="card-container"
    @click="revealDetailText = !revealDetailText"
  >
    <div class="initialText-container">
      <slot name="initialText" />
    </div>

    <transition
      name="slide"
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
    >
      <div v-show="revealDetailText" class="detailText-container">
        <slot name="detailText" />
      </div>
    </transition>
  </div>
</template>

<script>
import getViewport from "~Scripts/getViewport.js";

export default {
  name: "BaseHoverCard",
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      revealDetailText: false
    };
  },
  methods: {
    beforeEnter: function(el) {
      el.style.height = "0";
      el.style.opacity = "0";
    },
    enter: function(el) {
      el.style.height = el.scrollHeight + "px";
      el.style.opacity = "1";
    },
    beforeLeave: function(el) {
      el.style.height = el.scrollHeight + "px";
      el.style.opacity = "1";
    },
    leave: function(el) {
      el.style.height = "0";
      el.style.opacity = "0";
    }
  }
};
</script>

<style lang="scss" scoped>
.card-container {
  box-sizing: border-box;
  cursor: default;
  -webkit-box-shadow: 4px 4px 11px 0px rgba(242, 242, 242, 1);
  -moz-box-shadow: 4px 4px 11px 0px rgba(242, 242, 242, 1);
  box-shadow: 4px 4px 11px 0px rgba(242, 242, 242, 1);

  &:hover {
    -webkit-box-shadow: 4px 4px 11px 0px rgba(214, 214, 214, 1);
    -moz-box-shadow: 4px 4px 11px 0px rgba(214, 214, 214, 1);
    box-shadow: 4px 4px 11px 0px rgba(214, 214, 214, 1);
    transition: $transition-default;
  }
}

.initialText-container {
  cursor: pointer;
  padding: $spacing-m;
  background: $color-grey-100;
}

.detailText-container {
  padding: $spacing-m;
  overflow: hidden;
}

.slide {
  &-enter-active,
  &-leave-active {
    transition: $transition-fast;
  }
}
</style>