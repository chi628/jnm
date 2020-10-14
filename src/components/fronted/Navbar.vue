<template>
  <header class="header" :class="{ scroll: scroll }">
    <loading loader="dots" :active.sync="isLoading"></loading>
    <div
      class="ham-btn"
      :class="{ scroll: scroll, close: ham }"
      @click="(ham = !ham), (ham_category = false)"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="header-logo" @click="ham = false" :class="{ scroll: scroll }">
      <router-link to="/">
        <h2>J&amp;M</h2>
      </router-link>
    </div>
    <div class="header-mobile_serach">
      <form action="">
        <label for="mobile-search">搜尋</label>
        <input id="mobile-search" type="search" placeholder="Search..." />
      </form>
    </div>
    <nav class="header-menu" :class="{ scroll: scroll }">
      <ul>
        <li @click="ham = false">
          <router-link to="/about">
            <span>About J&amp;M</span>
            <span>品牌故事</span>
          </router-link>
        </li>
        <li @click="(ham = false), getProducts()">
          <router-link to="/products/all">
            <span>All Items</span>
            <span>全部商品</span>
          </router-link>
        </li>
        <li @click="ham = false" class="category">
          <a href="javascript:;">
            <span>Category</span>
            <span>分類商品</span>
          </a>
          <ul>
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
        <li @click="ham = false">
          <router-link to="/reserve">
            <span>reservation</span>
            <span>預約手作</span>
          </router-link>
        </li>
      </ul>
    </nav>
    <nav class="header-menu-mobile" :class="{ show: ham }">
      <ul>
        <li @click="ham = false">
          <router-link to="/about">
            <span>About J&amp;M</span>
            <span>品牌故事</span>
          </router-link>
        </li>
        <li @click="(ham = false), getProducts()">
          <router-link to="/products/all">
            <span>All Items</span>
            <span>全部商品</span>
          </router-link>
        </li>
        <li @click="ham_category = !ham_category" class="category">
          <a href="javascript:;">
            <span>Category</span>
            <span>分類商品</span>
          </a>
          <ul :class="{ show: ham_category }">
            <li @click="getProducts(), (ham = false)">
              <router-link to="/products/candle">
                <span>Scented candle</span>
                <span>香氛蠟燭</span>
              </router-link>
            </li>
            <li @click="getProducts(), (ham = false)">
              <router-link to="/products/jar">
                <span>Fragrance cream</span>
                <span>居家香氛膏</span>
              </router-link>
            </li>
            <li @click="getProducts(), (ham = false)">
              <router-link to="/products/sprayer">
                <span>Aroma spray</span>
                <span>芳香噴霧</span>
              </router-link>
            </li>
            <li @click="getProducts(), (ham = false)">
              <router-link to="/products/oil">
                <span>Essential oil</span>
                <span>天然精油</span>
              </router-link>
            </li>
          </ul>
        </li>
        <li @click="ham = false">
          <router-link to="/reserve">
            <span>reservation</span>
            <span>預約手作</span>
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="header-icon" :class="{ scroll: scroll }">
      <ul>
        <li class="search">
          <input type="search" placeholder="Search..." />
          <button type="button">
            <i class="fa fa-search"></i>
          </button>
        </li>
        <li>
          <router-link to="/account">
            <i class="far fa-user"></i>
          </router-link>
          <ul>
            <li>
              <router-link to="/wishlist">
                <i class="far fa-heart"></i>
                <span>Wish list</span>
                <span>願望清單</span>
              </router-link>
            </li>
            <li>
              <router-link to="/orderhistory">
                <i class="fas fa-clipboard-list"></i>
                <span>My orders</span>
                <span>訂單查詢</span>
              </router-link>
            </li>
            <li>
              <router-link to="/coupons">
                <i class="fas fa-tags"></i>
                <span>My coupons</span>
                <span>優惠券</span>
              </router-link>
            </li>
          </ul>
        </li>
        <li class="header-icon-cart">
          <button type="button" @click="isCartshow = true">
            <i class="fas fa-shopping-cart"></i>
            <span>{{ cart.length }}</span>
          </button>
        </li>
      </ul>
    </div>
    <div class="mobile-icon">
      <ul>
        <li>
          <router-link to="/account">
            <i class="far fa-user"></i>
          </router-link>
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
        <li class="header-icon-cart">
          <button type="button" @click="isCartshow = true">
            <i class="fas fa-shopping-cart"></i>
            <span>{{ cart.length }}</span>
          </button>
        </li>
      </ul>
    </div>
    <Sidecart
      :opencart="isCartshow"
      :getcart="cart"
      :total="subtotal"
      @removeitem="removeCartItem"
      @removeall="removeAllCart"
      @updatecart="updateCart"
    />
    <div
      class="mask"
      :class="{ open: isCartshow, show: ham }"
      @click="(isCartshow = false), (ham = false)"
    ></div>
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
      ham: false,
      ham_category: false,
      subtotal: 0,
      cart: [],
      lastPos: 0,
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
    removeAllCart() {
      const url = `${process.env.VUE_APP_ApiPath}/api/${process.env.VUE_APP_UUID}/ec/shopping/all/product`;

      this.axios
        .delete(url)
        .then(() => {
          this.isLoading = false;
        })
        .catch(() => {
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
  beforeDestroy() {
    this.$bus.$off('specialEvent');
  },
};
</script>
