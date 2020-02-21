<template>
  <div class="container-fluid">
    <CartItem v-for="(product, index) in cart" :key="index" :product="product" />
  </div>
</template>

<script>
import CartItem from "./CartItem";
export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    }
  },
  components: {
    CartItem,
  }
};
</script>