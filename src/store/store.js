import Vue from 'vue';
import Vuex from 'vuex';
import {storeProducts, detailProduct} from '../data';

Vue.use(Vuex);
export const store = new Vuex.Store({
    state : {
        products : [],
        detailProduct,
        cart : [],
        cartSubTotal : 0,
        cartTax : 0,
        cartTotal : 0,
        setProducts() {
            let tempProducts = [];
            storeProducts.forEach(item => {
                const singleItem = {...item};
                tempProducts = [...tempProducts, singleItem]
            });
            this.products = tempProducts;
        },
        addCart(id) {
            let tempProducts = [...this.products];
            const index = tempProducts.indexOf(this.getItem(id));
            const product = tempProducts[index];
            product.inCart = true;
            product.count = 1;
            const price = product.price;
            product.total = price;
            this.products = tempProducts;
            this.cart = [...this.cart, product]
            this.quantifyCartItem()
            this.addTotals()
        },
        quantifyCartItem() {
            let quantify = this.cart.length;
            return quantify
        },
        getItem(id) {
            const product = this.products.find(item => item.id === id);
            return product;
        },
        handleDetail(id) {
            const product = this.getItem(id);
            return this.detailProduct = product
        },
        increment(id) {
            let tempCart = [...this.cart];
            const selectedProduct = tempCart.find(item => item.id === id);
            const index = tempCart.indexOf(selectedProduct);
            const product = tempCart[index];
            product.count = product.count + 1;
            product.total = product.count * product.price;
            this.cart = [...tempCart];
            this.addTotals();
        },
        decrement(id) {
            let tempCart = [...this.cart];
            const selectedProduct = tempCart.find(item => item.id === id);
            const index = tempCart.indexOf(selectedProduct);
            const product = tempCart[index];
            product.count = product.count - 1;
            if(product.count === 0){
                this.removeItem(id)
            }
            else{
                product.total = product.count * product.price;
                this.cart = [...tempCart];
                this.addTotals();
            }
        },
        removeItem(id) {
            let tempProducts = [...this.products];
            let tempCart = [...this.cart];
            tempCart = tempCart.filter(item => item.id !== id);
            const index = tempProducts.indexOf(this.getItem(id));
            let removeProduct = tempProducts[index];
            removeProduct.inCart = false;
            removeProduct.count = 0;
            removeProduct.total = 0;
            this.cart = [...tempCart];
            this.products = [...tempProducts];
            this.addTotals();
        },
        clearCart() {
            this.cart = [];
            this.setProducts();
            this.addTotals();
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
        }
    }
})