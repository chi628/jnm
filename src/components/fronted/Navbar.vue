<template>
  <header class="header" :class="{ scroll: scroll }">
    <loading loader="dots" :active.sync="isLoading"></loading>
    <div class="header-mobile">
      <div class="ham" @click="menu = !menu" :class="{ show: menu }">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h1>
        <router-link to="/">J&amp;M</router-link>
      </h1>
      <div></div>
    </div>
    <nav class="nav">
      <ul class="menu uppercase">
        <li>
          <router-link to="/about">
            <span>About J&amp;M</span>
            <span>品牌故事</span>
          </router-link>
        </li>
        <li @click="getProducts()">
          <router-link to="/products/all">
            <span>All Items</span>
            <span>全部商品</span>
          </router-link>
        </li>
        <li>
          <router-link to="/products/all">
            <span>Category</span>
            <span>分類商品</span>
          </router-link>
          <ul class="category">
            <li @click="getProducts()">
              <router-link to="/products/candle">
                <span>Scented candle</span>
                <span>香氛蠟燭</span>
              </router-link>
            </li>
            <li @click="getProducts()">
              <router-link to="/products/jar">
                <span>Fragrance cream</span>
                <span>居家香氛膏</span>
              </router-link>
            </li>
            <li @click="getProducts()">
              <router-link to="/products/sprayer">
                <span>Aroma spray</span>
                <span>芳香噴霧</span>
              </router-link>
            </li>
            <li @click="getProducts()">
              <router-link to="/products/oil">
                <span>Essential oil</span>
                <span>天然精油</span>
              </router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link to="/reserve">
            <span>reservation</span>
            <span>預約手作</span>
          </router-link>
        </li>
      </ul>
      <ul class="menu-mobile uppercase" :class="{ show: menu }">
        <li @click="menu = false">
          <router-link to="/about">
            <span>About J&amp;M</span>
            <span>品牌故事</span>
          </router-link>
        </li>
        <li @click="(menu = false), getProducts()">
          <router-link to="/products/all">
            <span>All Items</span>
            <span>全部商品</span>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <span>Category</span>
            <span>分類商品</span>
          </router-link>
          <ul class="category">
            <li @click="(menu = false), getProducts()">
              <router-link to="/products/candle">
                <span>Scented candle</span>
                <span>香氛蠟燭</span>
              </router-link>
            </li>
            <li @click="(menu = false), getProducts()">
              <router-link to="/products/jar">
                <span>Fragrance cream</span>
                <span>居家香氛膏</span>
              </router-link>
            </li>
            <li @click="(menu = false), getProducts()">
              <router-link to="/products/sprayer">
                <span>Aroma spray</span>
                <span>芳香噴霧</span>
              </router-link>
            </li>
            <li @click="(menu = false), getProducts()">
              <router-link to="/products/oil">
                <span>Essential oil</span>
                <span>天然精油</span>
              </router-link>
            </li>
          </ul>
        </li>
        <li @click="menu = false">
          <router-link to="/reserve">
            <span>reservation</span>
            <span>預約手作</span>
          </router-link>
        </li>
      </ul>
      <ul class="icons">
        <li>
          <input type="search" placeholder="Search..." />
          <button type="button">
            <i class="fa fa-search"></i>
          </button>
        </li>
        <li>
          <button type="button">
            <router-link to="/account">
              <i class="far fa-user"></i>
            </router-link>
          </button>
          <ul>
            <li>
              <router-link to="/wishlist">
                <div>
                  <i class="far fa-heart"></i>
                </div>
                <div class="subtitle">
                  <span>Wish list</span>
                  <span>願望清單</span>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to="/orderhistory">
                <div>
                  <i class="fas fa-clipboard-list"></i>
                </div>
                <div class="subtitle">
                  <span>My orders</span>
                  <span>訂單查詢</span>
                </div></router-link>
            </li>
            <li>
              <router-link to="/coupons">
                <div>
                  <i class="fas fa-tags"></i>
                </div>
                <div class="subtitle">
                  <span>My coupons</span>
                  <span>優惠券</span>
                </div>
              </router-link>
            </li>
          </ul>
        </li>
        <li>
          <button type="button" @click="isCartshow = true">
            <i class="fas fa-shopping-cart"></i>
            <span class="cart-amount">{{ cart.length }}</span>
          </button>
        </li>
      </ul>
      <ul class="icons-mobile">
        <li>
          <button type="button">
            <router-link to="/account">
              <i class="far fa-user"></i>
            </router-link>
          </button>
        </li>
        <li>
          <router-link to="/wishlist">
            <i class="far fa-heart"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/orderhistory">
            <i class="fas fa-clipboard-list"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/coupons">
            <i class="fas fa-tags"></i>
          </router-link>
        </li>
        <li>
          <button type="button" @click="isCartshow = true">
            <i class="fas fa-shopping-cart"></i>
            <span class="cart-amount">{{ cart.length }}</span>
          </button>
        </li>
      </ul>
    </nav>
    <div class="mask" :class="{ show: menu }" @click="menu = false"></div>
    <Sidecart
      :opencart="isCartshow"
      :getcart="cart"
      :total="subtotal"
      @removeitem="removeCartItem"
      @removeall="removeAllCart"
      @updatecart="updateCart"
    />
  </header>
</template>

<script>
import Sidecart from '@/components/fronted/Sidecart.vue';

export default {
  components: {
    Sidecart,
  },
  data() {
    return {
      isLoading: false,
      isCartshow: false,
      scroll: false,
      menu: false,
      subtotal: 0,
      cart: [],
    };
  },
  methods: {
    getPos() {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 165) {
        this.scroll = true;
      } else if (scrollTop < 10) {
        this.scroll = false;
      }
    },
    getProducts() {
      this.$bus.$emit('getproducts');
    },
    getCart() {
      this.isLoading = true;
      this.axios
        .get(
          `${process.env.VUE_APP_ApiPath}/api/${process.env.VUE_APP_UUID}/ec/shopping`,
        )
        .then((res) => {
          this.cart = res.data.data;
          this.$bus.$emit('getcarts', this.cart);
          this.subtotal = 0;
          this.cart.forEach((item) => {
            this.subtotal += item.product.price * item.quantity;
          });
          setTimeout(() => {
            this.isCartshow = false;
          }, 1500);
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
    updateCart(id, num) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_ApiPath}/api/${process.env.VUE_APP_UUID}/ec/shopping`;
      const data = {
        product: id,
        quantity: num,
      };
      this.axios
        .patch(url, data)
        .then(() => {
          this.getCart();
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
    removeCartItem(id) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_ApiPath}/api/${process.env.VUE_APP_UUID}/ec/shopping/${id}`;
      this.axios
        .delete(url)
        .then(() => {
          this.isLoading = false;
          this.getCart();
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
  },
  mounted() {
    window.addEventListener('scroll', this.getPos, true);
  },
  created() {
    this.getCart();

    // 接收從sidecart的關閉按鈕傳過來的
    this.$bus.$on('close', () => {
      this.isCartshow = false;
    });

    // 點擊產品加入購物車後動畫
    this.$bus.$on('getcart', () => {
      this.isCartshow = true;
      this.getCart();
    });
    this.$bus.$on('createorder', () => {
      this.getCart();
    });
  },
};
</script>
