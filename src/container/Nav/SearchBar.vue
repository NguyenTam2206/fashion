<template>
    <div>
        <b-form-input
              tag="b-form-input" 
              to="/products" 
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
              style="border-radius: 15px;"
              v-model="search"
              @keypress.enter="filter"
              @keydown.esc="deletekey"
            ></b-form-input>
            <span @click="filter">
              <i class="fas fa-search" />
            </span>
    </div>
</template>
<script>
export default {
    data() {
        return{
            search : '',
        }
    },
    computed: {
        products() {
            return this.$store.getters.getAllProducts
        }
    },
    methods: {
    filter() {
        let filteredProducts = this.products.filter(product => {
        return product.title.toLowerCase().includes(this.search.toLowerCase())
      })
      this.$store.commit('addFilter', filteredProducts)
      this.$router.push({path: `/searchpage/${this.search}`})
      this.search = ''
    },
    deletekey() {
        this.search = ''
    }
  }

}
</script>