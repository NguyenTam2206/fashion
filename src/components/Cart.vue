<template>
  <div>
    <router-link to="/cart" tag="span"><i class="fas fa-shopping-cart"></i></router-link>
    <div class="cycle" v-if="quantifyCartItem === 0 ? false : true ">
      <span class="number">{{quantifyCartItem}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    quantifyCartItem() {
      return this.$store.state.quantifyCartItem();
    }
  }
};
</script>

<style scoped>
.cycle {
  width: 15px;
  height: 15px;
  background: red;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  --border-radius: 10px;
  border-radius: 10px;
  position: absolute;
  z-index: 2;
  top: -5px;
  right: -8px;
}
.number {
  position: absolute;
  color: white;
  z-index: 2;
  font-size: 12px;
  top: -1px;
  right: 4px;
}
</style>