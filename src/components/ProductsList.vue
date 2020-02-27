<template>
  <div class="container py-3">
    <Title title="Hot Deals" />
    <Loading v-if="loading"/>
    <div class="row" v-else>
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
import Loading from './Loading';
export default {
  data() {
    return{
    }
  },
  computed : {
    products() {
      return this.$store.state.products
    },
    loading() {
      return this.$store.state.loading
    }
  },
  components: {
    Product,
    Title,
    Loading
  }
};
</script>

<style scoped>
</style>
