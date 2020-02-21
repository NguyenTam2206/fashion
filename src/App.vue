<template>
 <div>
   <NavBar />
   <router-view></router-view>
   <BackTopBtn />
 </div>
</template>

<script>
import NavBar from './container/Nav/NavBar';
import BackTopBtn from './components/BackTopBtn';
export default {
  components : {
    NavBar,
    BackTopBtn,
  },
  created() {
    this.$store.state.setProducts()
  }
}
</script>

<style>

</style>
