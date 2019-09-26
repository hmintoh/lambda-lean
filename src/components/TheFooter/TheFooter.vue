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
        Emaill: "tim@lambda.sg"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.footer {
  text-align: center;
  font-size: $font-size-s;
  padding: $spacing-l 0;
}
</style>