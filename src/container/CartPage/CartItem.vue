<template>
  <div class="row my-2 text-capitalize text-center align-items-center">
    <router-link tag="div" to="/detail" class="col-10 mx-auto col-lg-2">
      <img :src="product.img" style="width: 8rem; cursor: pointer" alt="img" class="img-fluid" @click="$store.state.handleDetail(product.id)"/>
    </router-link>
    <div class="col-10 mx-auto col-lg-2">
        <span>{{product.title}}</span>
    </div>
    <div class="col-10 mx-auto col-lg-2">
        <span>{{product.price}}$</span>
    </div>
    <div class="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div class="d-flex justify-content-center">
            <div>
                <span @click="$store.state.decrement(product.id)" class="btn btn-outline-danger mx-1">-</span>
                <span class="mx-3">{{product.count}}</span>
                <span @click="$store.state.increment(product.id)" class="btn btn-outline-info mx-1">+</span>
            </div>
        </div>
    </div>
    <!-- lg -->
    <div class="col-10 mx-auto col-lg-2">
        <div style="color: #bd0000;" @click="$store.state.removeItem(product.id)" class="my-2"><i class="fas fa-trash" /></div>
    </div>
    <div class="col-10 mx-auto col-lg-2">
        <b>Tổng : {{product.total}}$ </b>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object
    },
  }
};
</script>