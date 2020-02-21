<template>
  <div class="container">
    <div class="row">
      <div class="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-12 text-capitalize text-right">
          <router-link to="/">
          <button class="btn btn-outline-info mb-3 mr-2">Mua Thêm</button>
        </router-link>
        <router-link to="/">
          <button class="btn btn-outline-danger mb-3" @click="$store.state.clearCart()">Xóa giỏ hàng</button>
        </router-link>
        <h5>
            <span>
                Tạm tính : <b>{{$store.state.cartSubTotal}}$</b>
            </span>
        </h5>
        <h5>
            <span>
                Thuế : <b>{{$store.state.cartTax}}$</b>
            </span>
        </h5>
        <h5>
            <span>
                Tổng cộng : <b>{{$store.state.cartTotal}}$</b>
            </span>
        </h5>
        <router-link tag="button" to="/checkout" class="btn btn-warning mt-2" style="width: 200px;">Thanh Toán</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>