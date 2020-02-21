<template>
  <div>
    <SubNav />
    <div class="container">
      <b-breadcrumb :items="items" style="background-color: transparent"></b-breadcrumb>
      <div class="row">
        <div class="col-10 mx-auto text-center my-5">
          <h1>{{detailProduct.title}}</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-10 mx-auto col-md-6 my-3 text-capitalize">
          <img :src="detailProduct.img" alt="img" class="img-fluid" />
        </div>
        <div class="col-10 mx-auto col-md-6 my-3 text-capitalize">
          <h3>Model : {{detailProduct.title}}</h3>
          <h5
            class="text-title text-uppercase text-muted mt-3 mg-2"
          >made by : {{detailProduct.company}}</h5>
          <h5>price : $ {{detailProduct.price}}</h5>
          <p class="text-capitalize mt-3 mb-0">Some info about product</p>
          <p class="text-muted lead">{{detailProduct.info}}</p>
          <router-link
            tag="button"
            to="/checkout"
            class="btn btn-warning"
            style="width: 150px;"
          >Buy Now</router-link>
          <button
            @click="$store.state.addCart(detailProduct.id)"
            class="btn btn-outline-danger mx-2"
            style="width: 150px;"
            :disabled="detailProduct.inCart? true : false"
          >{{detailProduct.inCart ? 'In Cart' : 'Add To Cart'}}</button>
          <router-link
            tag="button"
            to="/"
            class="btn btn-outline-info"
            style="width: 150px;"
          >Buy More</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubNav from "../HomePage/SubNav";
export default {
  data() {
    return {
      items: [
        {
          text: "Home",
          to: "/"
        },
        {
          text: "Detail",
          active: true
        }
      ]
    };
  },
  computed: {
    detailProduct() {
      return this.$store.state.detailProduct;
    }
  },
  components: {
    SubNav
  }
};
</script>

<style scoped>
</style>