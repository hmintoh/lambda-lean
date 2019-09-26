<template>
  <div :id="id" class="card-container">
    <div
      class="initialText-container"
      @mouseover="revealDetailText = true"
      @mouseout="revealDetailText = false"
    >
      <slot name="initialText" />
    </div>

    <div v-if="revealDetailText" class="detailText-container">
      <slot name="detailText" />
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseHoverCard",
  props() {
    return {
      id: {
        type: String,
        required: true
      }
    };
  },
  data() {
    return {
      revealDetailText: false
    };
  }
};
</script>

<style lang="scss" scoped>
.card-container {
  box-sizing: border-box;
}

.card-container > div {
}

.initialText-container {
}

.detailText-container {
}
</style>