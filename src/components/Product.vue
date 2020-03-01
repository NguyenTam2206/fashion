<template>
  <div class="col-9 mx-auto col-md-6 col-lg-3 my-3">
    <div class="card">
      <div class="img-container">
        <router-link to="/detail" tag="span">
          <img :src="product.img" alt="product" class="card-img-top" @click="$store.commit('handleDetail', product.id)" />
        </router-link>
        <button class="cart-btn" >
          <router-link to="/cart" tag="span" v-if="product.inCart">In Cart</router-link>
          <span v-else @click="addCart(product.id)">
            <i class="fas fa-shopping-cart"></i>
          </span>
        </button>
        <router-link tag="button" to="/checkout" class="buynow-btn btn-warning">
          Mua Ngay
        </router-link>
      </div>
      <router-link tag="div" to="/detail" class="card-footer d-flex justify-content-between">
        <p class="align-self-center mb-0">{{product.title}}</p>
        <h5 class="mb-0">
          <span class="mr-1">${{product.price}}</span>
        </h5>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods : {
    addCart(id) {
      this.$store.commit('addCart', id )
    }
  },
  props: {
    product: {
      type: Object
    },
    id: {
      type: Number
    }
  },
};
</script>

<style scoped>
.card {
  transition: all 0.5s linear;
}
.card:hover {
  cursor: pointer;
  border: 0.04rem solid rgba(0, 0, 0, 0.2);
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
}
.card-footer {
  background: transparent;
  border-top: transparent;
}
.card-footer:hover {
  cursor: pointer;
  background: rgba(247, 247, 247);
}
.img-container {
  position: relative;
  overflow: hidden;
}
.card-img-top {
  transition: all 0.5s linear;
}
.img-container:hover .card-img-top {
  transform: scale(1.2);
}
.cart-btn {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0.2rem 0.4rem;
  background-color: transparent;
  border: none;
  font-size: 1.2rem;
  color: grey
}
.cart-btn:hover{
  color: black
}
.buynow-btn {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0.2rem 0.4rem;
  font-size: 1rem;
  border-top-right-radius: 10px;
}
*:focus {
  outline : none;
}

@media (min-width: 992px) {
  .cart-btn {
    transform: translate(100%, 100%);
    transition: all 0.5s linear;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .buynow-btn {
    transform: translate(-100%,100%);
    transition: all 0.5s linear;
  }
  .img-container:hover .buynow-btn {
    transform: translate(0, 0);
  }
}
</style>