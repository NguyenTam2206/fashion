<template>
  <div>
    <BannerHomePage />
    <SubNav />
    <ProductsList />
  </div>
</template>

<script>
import BannerHomePage from "./BannerHomePage.vue";
import SubNav from "./SubNav";
import ProductsList from "../../components/ProductsList";
export default {
  components: {
    BannerHomePage,
    SubNav,
    ProductsList,
  }
};
</script>

<style>
</style>
