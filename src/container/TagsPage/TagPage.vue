<template>
  <div class="container">
    <p>Hello from Tag Page of {{tag}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tag: this.$route.params.tag //note this.$route
    };
  },
  watch: {
    $route(to) {
      this.tag = to.params.tag;
    }
  }
};
</script>

<style scoped>
</style>