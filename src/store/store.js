import Vue from 'vue';
import Vuex from 'vuex';
// import { storeProducts } from '../data';

Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        products: [],
        detailProduct: [],
        cart: [],
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
        loading: true,
        searchProducts : [],
        getItem(id) {
            const product = this.products.find(item => item.id === id);
            return product;
        },
        quantifyCartItem() {
            let quantify = this.cart.length;
            return quantify
        },
    },

    getters : {
        getHomeProducts(state) {
            let products = [];
            for(let i = 0 ; i < 8 ; i++) {
                products.push(state.products[i])
            }
            return products
        },
        getAllProducts(state) {
            return state.products
        },
    },

    mutations: {
        setProducts(state) {
            Vue.axios.get('https://5e5b7f0f2faeae0014f92b43.mockapi.io/api/products').then((response) => {
                let storeProducts = response.data;
                let tempProducts = [];
                storeProducts.forEach(item => {
                    const singleItem = { ...item };
                    tempProducts = [...tempProducts, singleItem]
                });
                state.products = tempProducts;
                state.loading = false;
            })

        },
        addCart(state, id) {
            let tempProducts = [...state.products];
            const index = tempProducts.indexOf(state.getItem(id));
            const product = tempProducts[index];
            product.inCart = true;
            product.count = 1;
            const price = product.price;
            product.total = price;
            state.products = tempProducts;
            state.cart = [...state.cart, product]
            state.quantifyCartItem()
            this.commit('addTotals')
        },
        handleDetail(state, id) {
            const product = state.getItem(id);
            return state.detailProduct = product
        },
        addTotals(state) {
            let subTotal = 0;
            state.cart.map(item => {
                return subTotal += item.total
            });
            const tempTax = subTotal * 0.1;
            const tax = parseFloat(tempTax.toFixed(2));
            const total = subTotal + tax
            state.cartSubTotal = subTotal;
            state.cartTax = tax;
            state.cartTotal = total;
        },
        increment(state, id) {
            let tempCart = [...state.cart];
            const selectedProduct = tempCart.find(item => item.id === id);
            const index = tempCart.indexOf(selectedProduct);
            const product = tempCart[index];
            product.count = product.count + 1;
            product.total = product.count * product.price;
            state.cart = [...tempCart];
            this.commit('addTotals');
        },
        decrement(state, id) {
            let tempCart = [...state.cart];
            const selectedProduct = tempCart.find(item => item.id === id);
            const index = tempCart.indexOf(selectedProduct);
            const product = tempCart[index];
            product.count = product.count - 1;
            if (product.count === 0) {
                this.commit('removeItem', id)
            }
            else {
                product.total = product.count * product.price;
                state.cart = [...tempCart];
                this.commit('addTotals');
            }
        },
        removeItem(state, id) {
            let tempProducts = [...state.products];
            let tempCart = [...state.cart];
            tempCart = tempCart.filter(item => item.id !== id);
            const index = tempProducts.indexOf(state.getItem(id));
            let removeProduct = tempProducts[index];
            removeProduct.inCart = false;
            removeProduct.count = 0;
            removeProduct.total = 0;
            state.cart = [...tempCart];
            state.products = [...tempProducts];
            this.commit('addTotals');
        },
        clearCart(state) {
            state.cart = [];
            this.commit('setProducts')
            this.commit('addTotals');
        },
        addFilter(state, products) {
            state.searchProducts = products
            console.log(products)
        }
    }
})

//https://code.tutsplus.com/vi/tutorials/how-to-build-complex-large-scale-vuejs-applications-with-vuex--cms-30952