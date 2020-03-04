<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand href="#">
        <router-link to="/" tag="img" :src="Logo" alt style="height: 40px; width: 40px;"></router-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link to="/" tag="b-nav-item">Home</router-link>
          <b-nav-item-dropdown text="Catelogy" right>
            <router-link to="/products" tag="b-dropdown-item">Tất cả</router-link>
            <router-link to="/products/nam" tag="b-dropdown-item">Nam</router-link>
            <router-link to="/products/nu" tag="b-dropdown-item">Nữ</router-link>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="Collection" right>
            <router-link to="/colection/A" tag="b-dropdown-item">Collection A</router-link>
            <router-link to="/colection/B" tag="b-dropdown-item">Collection B</router-link>
            <router-link to="/colection/C" tag="b-dropdown-item">Collection C</router-link>
            <router-link to="/colection/D" tag="b-dropdown-item">Collection D</router-link>
            <router-link to="/colection/E" tag="b-dropdown-item">Collection E</router-link>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="Tags" right>
            <router-link to="/tag/new" tag="b-dropdown-item">Hàng Mới</router-link>
            <router-link to="/tag/quanao" tag="b-dropdown-item">Quần Áo</router-link>
            <router-link to="/tag/giaydep" tag="b-dropdown-item">Giày Dép</router-link>
            <router-link to="/tag/phukien" tag="b-dropdown-item">Phụ Kiện</router-link>
            <router-link to="/tag/boozilla" tag="b-dropdown-item">Boozilla</router-link>
            <router-link to="/tag/graphics" tag="b-dropdown-item">Graphics</router-link>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <SearchBar />
          </b-nav-form>

          <b-nav-item-dropdown :text="lang" right>
            <b-dropdown-item @click="changeLang" href="#">EN</b-dropdown-item>
            <b-dropdown-item @click="changeLang" href="#">VI</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>
                <i class="fas fa-user"></i>
              </em>
            </template>
            <b-dropdown-item>
              <div v-if="!$auth.loading">
                <!-- show login when not authenticated -->
                <a v-if="!$auth.isAuthenticated" @click="login" class="button is-dark">
                  <strong>Sign in</strong>
                </a>
                <!-- show logout when authenticated -->
                <a v-if="$auth.isAuthenticated" @click="logout" class="button is-dark">
                  <strong>Log out</strong>
                </a>
              </div>
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <router-link to="/cart" tag="b-nav-item">
            <Cart />
          </router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import Logo from "../../assets/logo.svg";
import Cart from "../../components/Cart";
import SearchBar from './SearchBar';
export default {
  data() {
    return {
      Logo,
      lang: "VI"
    };
  },
  methods: {
    changeLang() {
      if (this.lang === "VI") {
        this.lang = "EN";
      } else if (this.lang === "EN") {
        this.lang = "VI";
      }
    },
    login() {
      this.$auth.loginWithRedirect();
    },
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  },
  components: {
    Cart,
    SearchBar
  }
};
</script>

<style scoped>
div {
  position: sticky;
  top: 0px;
  z-index: 1000;
}
</style>>
