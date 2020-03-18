<template>
  <footer class="footer">
    <span v-for="(key, index) in Object.keys(office)" :key="index">
      \
      <strong>{{ key }}:</strong>
      {{ office[key] }}
      \
    </span>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
  data() {
    return {
      office: {
        Address: "#05-03, 196 Pandan Loop, Singapore 128384",
        Phone: "+65 6779 2226",
        Email: "hello@lambda.sg"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.footer {
  text-align: center;
  font-size: $font-size-2xs;
  padding: $spacing-l $spacing-m;
  box-sizing: border-box;
  background: $color-white;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
}

@media (min-width: $media-query-tablet) {
  .footer {
    font-size: $font-size-xs;
  }
}
</style>
