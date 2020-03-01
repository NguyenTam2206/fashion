import Vue from 'vue';
import Vuex from 'vuex';
import { storeProducts, detailProduct } from '../data';

Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        products: [],
        detailProduct,
        cart: [],
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
        loading: true,
        getItem(id) {
            const product = this.products.find(item => item.id === id);
            return product;
        },
        quantifyCartItem() {
            let quantify = this.cart.length;
            return quantify
        },
        addTotals() {
            let subTotal = 0;
            this.cart.map(item => {
                return subTotal += item.total
            });
            const tempTax = subTotal * 0.1;
            const tax = parseFloat(tempTax.toFixed(2));
            const total = subTotal + tax
            this.cartSubTotal = subTotal;
            this.cartTax = tax;
            this.cartTotal = total;
        },
    },
    mutations: {
        setProducts(state) {
            let tempProducts = [];
            storeProducts.forEach(item => {
                const singleItem = { ...item };
                tempProducts = [...tempProducts, singleItem]
            });
            state.products = tempProducts;
            // this.loading = false;
            state.loading = false;
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
            state.addTotals()
        },
        handleDetail(state,id) {
            const product = state.getItem(id);
            return state.detailProduct = product
        },
        increment(state,id) {
            let tempCart = [...state.cart];
            const selectedProduct = tempCart.find(item => item.id === id);
            const index = tempCart.indexOf(selectedProduct);
            const product = tempCart[index];
            product.count = product.count + 1;
            product.total = product.count * product.price;
            state.cart = [...tempCart];
            state.addTotals();
        },
        decrement(state,id) {
            let tempCart = [...state.cart];
            const selectedProduct = tempCart.find(item => item.id === id);
            const index = tempCart.indexOf(selectedProduct);
            const product = tempCart[index];
            product.count = product.count - 1;
            if (product.count === 0) {
                this.commit('removeItem',id)
            }
            else {
                product.total = product.count * product.price;
                state.cart = [...tempCart];
                state.addTotals();
            }
        },
        removeItem(state,id) {
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
            state.addTotals();
        },
        clearCart(state) {
            state.cart = [];
            this.commit('setProducts')
            state.addTotals();
        },
    }
})

//https://code.tutsplus.com/vi/tutorials/how-to-build-complex-large-scale-vuejs-applications-with-vuex--cms-30952