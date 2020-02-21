<template>
  <div>
    <SubNav />
    <div class="container">
      <p>Hello from Product Page of {{id}}</p>
      <div style="height: 3000px; background: yellow"></div>
    </div>
  </div>
</template>

<script>
import SubNav from "../HomePage/SubNav";
export default {
  data() {
    return {
      id: this.$route.params.id //note this.$route
    };
  },
  components: {
    SubNav
  },
  watch: {
    $route(to) {
      this.id = to.params.id;
    }
  }
};
</script>

<style scoped>
</style>