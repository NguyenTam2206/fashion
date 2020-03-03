<template>
  <div class="container py-3">
    <Loading v-if="loading"/>
    <div class="row" v-else>
        <Product v-for="(product, index) in list" :key="index" :id="product.id" :product="product"  />
    </div>
  </div>
</template>

<script>
import Product from "./Product";
import Loading from './Loading';
export default {
  data() {
    return{
    }
  },
  props : {
    list : {
      type : Array
    },
  },
  computed : {
    loading() {
      return this.$store.state.loading
    }
  },
  components: {
    Product,
    Loading,
  }
};
</script>

<style scoped>
</style>
