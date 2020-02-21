<template>
  <div>
    <SubNav />
    <div class="container">
      <b-breadcrumb :items="items" style="background-color: transparent"></b-breadcrumb>
      <Title title="Giỏ hàng" />
      <EmtyCart v-if="quantify === 0" />
      <div v-else>
        <CartColumns />
        <CartList />
        <CartTotal />
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../../components/Title";
import CartColumns from "./CartColumns";
import EmtyCart from "./EmtyCart";
import CartList from "./CartList";
import CartTotal from "./CartTotal";
import SubNav from '../HomePage/SubNav';
export default {
  data() {
    return {
      items: [
        {
          text: "Home",
          to: "/"
        },
        {
          text: "Cart",
          active: true
        }
      ]
    };
  },
  computed: {
    quantify() {
      return this.$store.state.quantifyCartItem();
    }
  },
  components: {
    Title,
    CartColumns,
    EmtyCart,
    CartList,
    CartTotal,
    SubNav,
  }
};
</script>