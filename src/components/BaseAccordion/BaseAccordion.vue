<template>
  <div :id="id" class="accordion" @click="revealDetailText = !revealDetailText">
    <div class="accordion--title">
      <span class="heading-h3">{{ title }}</span>
    </div>

    <transition
      name="slide"
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
    >
      <div v-show="revealDetailText" class="accordion--body">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "BaseHoverCard",
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
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
.accordion {
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

.accordion {
  &--title {
    cursor: pointer;
    padding: $spacing-m;
    background: $color-grey-100;
  }

  &--body {
    padding: $spacing-m;
    overflow: hidden;
  }
}

.slide {
  &-enter-active,
  &-leave-active {
    transition: $transition-fast;
  }
}
</style>
