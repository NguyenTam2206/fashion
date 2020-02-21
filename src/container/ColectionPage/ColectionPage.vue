<template>
  <div class="container">
    <p>Hello from Colection Page of {{colection}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colection: this.$route.params.colection //note this.$route
    };
  },
  watch: {
    $route(to) {
      this.colection = to.params.colection;
    }
  }
};
</script>

<style scoped>
</style>