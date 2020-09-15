<template>
  <header class="header" :class="{'scroll':scroll}">
    <loading :active.sync="isLoading"></loading>
    <div class="header-logo" :class="{'scroll':scroll}">
      <router-link to="/">
        <h2>J&amp;M</h2>
      </router-link>
    </div>
    <div class="ham-btn" :class="{'scroll':scroll}" @click="ham=!ham">
      <span></span>
      <span></span>
      <span></span>
    </div>
     <nav class="header-menu" :class="{'scroll':scroll , 'show':ham}">
      <ul>
        <li @click="ham=false">
          <router-link to="/about">
            <span>About J&amp;M</span>
            <span>品牌故事</span>
          </router-link>
        </li>
        <li @click="ham=false,getProducts()">
          <router-link to="/products/all">
            <span>All Items</span>
            <span>全部商品</span>
          </router-link>
        </li>
        <li @click="ham=false" class="category">
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
        <li @click="ham=false">
          <router-link to="/reserve">
            <span>reservation</span>
            <span>預約手作</span>
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="header-icon" :class="{'scroll':scroll}">
      <ul>
        <li>
          <!-- <input type="search"  placeholder="Search..." :class="{'active':isSearch}"/> -->
          <button type="button" @click="isSearch = !isSearch">
            <i class="fa fa-search"></i>
          </button>
        </li>
        <li>
          <router-link to="/wishlist">
            <i class="far fa-heart"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/account">
            <i class="far fa-user"></i>
          </router-link>
        </li>
        <li class="header-icon-cart">
          <button type="button" @click="isCartshow = true">
            <i class="fas fa-shopping-cart"></i>
          <span>{{cart.length}}</span>
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
    <div class="mask" :class="{ 'open': isCartshow}" @click="isCartshow = !isCartshow"></div>
  </header>
</template>
<script>
import Sidecart from '@/components/Sidecart.vue';

export default {
  components: {
    Sidecart,
  },
  data() {
    return {
      isLoading: false,
      isSearch: false,
      isCartshow: false,
      scroll: false,
      ham: false,
      subtotal: 0,
      cart: [],
    };
  },
  methods: {
    getPos() {
      const { scrollTop } = document.body;
      if (scrollTop >= 170) {
        this.scroll = true;
      } else {
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
          this.subtotal = 0;
          this.cart.forEach((item) => {
            this.subtotal += item.product.price * item.quantity;
          });
          setTimeout(() => {
            this.isCartshow = false;
          }, 1500);
          this.isLoading = false;
        })
        .catch((err) => {
          this.isLoading = false;
          console.log(err);
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
        .catch((err) => {
          this.isLoading = false;
          console.log(err);
        });
    },
    removeCartItem(id) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_ApiPath}/api/${process.env.VUE_APP_UUID}/ec/shopping/${id}`;
      this.axios
        .delete(url)
        .then(() => {
          // console.log(res);
          this.isLoading = false;
          this.getCart();
        })
        .catch((err) => {
          this.isLoading = false;
          console.log(err);
        });
    },
    removeAllCart() {
      const url = `${process.env.VUE_APP_ApiPath}/api/${process.env.VUE_APP_UUID}/ec/shopping/all/product`;

      this.axios
        .delete(url)
        .then(() => {
          this.isLoading = false;
          // this.getCart();
        })
        .catch((err) => {
          console.log(err);
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
    this.$bus.$on('addcart', () => {
      this.isCartshow = true;
      this.getCart();
    });
    this.$bus.$on('createorder', () => {
      this.getCart();
    });
  },
};
</script>
