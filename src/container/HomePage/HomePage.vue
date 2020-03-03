<template>
  <div>
    <BannerHomePage />
    <SubNav />
    <Title title="Hot Deals" />
    <ProductsList :list="products" linkto="/products" />
    <Button linkto="/products" content="Xem Tất Cả" />
  </div>
</template>

<script>
import BannerHomePage from "./BannerHomePage.vue";
import SubNav from "./SubNav";
import ProductsList from "../../components/ProductsList";
import Title from "../../components/Title";
import Button from '../../components/Button';
export default {
  components: {
    BannerHomePage,
    SubNav,
    ProductsList,
    Title,
    Button,
  },
  computed : {
     products() {
      return this.$store.getters.getHomeProducts
    },
  }
};
</script>

<style>
</style>
