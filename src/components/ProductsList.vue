<template>
  <div class="container py-3">
    <Title title="Hot Deals" />
    <div class="row">
        <Product v-for="(product, index) in products" :key="index" :id="product.id" :product="product"  />
    </div>
    <router-link tag="div" to="/products" class="col-4 offset-4 text-center btn btn-info mt-3">
       Xem Tất Cả
    </router-link> 
  </div>
</template>

<script>
import Product from "./Product";
import Title from "../components/Title";
export default {
  data() {
    return{
    }
  },
  computed : {
    products() {
      return this.$store.state.products
    }
  },
  components: {
    Product,
    Title
  }
};
</script>

<style scoped>
</style>
