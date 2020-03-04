<template>
  <div>
    <SubNav />
    <div class="container">
      <h2>{{`Từ khoá "${keyword}"`}}</h2>
      <hr />
    </div>
    <div v-if="products.length === 0">
    <h2>{{`Không có sản phẩm phù hợp "${keyword}"`}}</h2>
    </div>
    <ProductsList :list="products" v-else />
  </div>
</template>

<script>
import SubNav from "../HomePage/SubNav";
import ProductsList from "../../components/ProductsList";

export default {
  data() {
    return {
      keyword: this.$route.params.keyword,
    };
  },
  computed: {
    products() {
      return this.$store.state.searchProducts;
    },
  },
  components: {
    SubNav,
    ProductsList
  },
  watch: {
    $route(to) {
      this.keyword = to.params.keyword;
    }
  }
};
</script>

<style scoped>
h2 {
  margin-top: 30px;
  color: grey;
  text-align: center;
}
hr {
  width: 150px;
}
</style>