import HomePage from './container/HomePage/HomePage.vue';
import ProductPage from './container/ProductPage/ProductPage';
import ColectionPage from './container/ColectionPage/ColectionPage';
import TagPage from './container/TagsPage/TagPage';
import ErrorPage from './container/Error/Error';
import CartPage from './container/CartPage/CartPage';
import DetailProduct from './container/DetailPage/DetailProduct';
import CheckOut from './container/CheckOut/CheckOut';
import SearchPage from './container/SearchPage/SearchPage';

export const routes = [
    {path : '/', name : 'homepage', component : HomePage},
    {path:'/products', component: ProductPage },
    {path : '/products/:id', name: 'productpage', component : ProductPage},
    {path : '/colection/:colection', name: 'colectionpage', component : ColectionPage},
    {path : '/tag/:tag', name: 'tagpage', component : TagPage},
    {path : '/404', name: 'errorpage', component : ErrorPage},
    {path : '*', redirect: { name: 'errorpage' }},
    {path : '/cart', name: 'cartpage', component : CartPage},
    {path : '/detail', name : 'detailpage', component : DetailProduct },
    {path : '/checkout' , name: 'checkoutpage' , component : CheckOut},
    {path: '/searchpage/:keyword', name: 'searchpage', component : SearchPage}
]