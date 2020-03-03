<template>
  <div>
    <SubNav />
    <div class="container">
      <h2>{{id ? `Dành cho ${id}` : 'Tất cả sản phẩm'}}</h2>
      <hr />
    </div>
    <ProductsList :list="products" />
    <div class="col-2 offset-5 text-center btn btn-info mt-3">Xem Thêm</div>
  </div>
</template>

<script>
import SubNav from "../HomePage/SubNav";
import ProductsList from "../../components/ProductsList";

export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  computed: {
    products() {
      return this.$store.getters.getAllProducts;
    },
  },
  components: {
    SubNav,
    ProductsList
  },
  watch: {
    $route(to) {
      this.id = to.params.id;
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