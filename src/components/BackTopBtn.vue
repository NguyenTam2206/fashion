<template>
  <button @click="topFunction" id="myBtn" @scroll="handleScroll" :style="display" title="Go to top">
    <i class="fas fa-arrow-up"></i>
  </button>
</template>

<script>
export default {
  data() {
    return {
        display : 'display: none;'
    };
  },
  methods: {
    handleScroll() {
      if (
        document.body.scrollTop > 30 ||
        document.documentElement.scrollTop > 30
      ) {
        return (this.display = "display: block;");
      } else {
        return (this.display = "display: none;");
      }
    },
    topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
<style scoped>
#myBtn {
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  font-size: 18px;
  border: none;
  outline: none;
  background-color: #efb85d;
  color: white;
  cursor: pointer;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 4px;
}

#myBtn:hover {
  background-color: #555;
}
</style>