<template>
  <div>
    <loading loader="dots" :active.sync="isLoading"></loading>
    <AccountBread :tag="tag"/>
    <div class="products">
      <div v-for="item in wishlist" :key="item.id" class="products_list">
        <div class="products_header">
          <router-link :to="`/product/${item.id}`">
            <img :src="`${item.imageUrl[0]}`" class="products_header_img" />
            <button type="button" class="products_header_btn">Quick View</button>
          </router-link>
        </div>
        <div class="products_container">
          <div>
            <router-link
              :to="`/product/${item.id}`"
              class="products_container_title">
              {{item.title}}
            </router-link>
          </div>
          <div class="products_container_price">
            <p>NT${{item.price}}</p>
          </div>
        </div>
        <div class="products_footer">
          <button
           type="button" class="products_footer_btn" @click="addToCart(item)">Add To Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AccountBread from '@/components/fronted/Account_bread.vue';

export default {
  components: {
    AccountBread,
  },
  data() {
    return {
      isLoading: false,
      wishlist: [],
      tag: 'wishlist',
    };
  },
  methods: {
    addToCart(item, quantity = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_ApiPath}/api/${process.env.VUE_APP_UUID}/ec/shopping`;
      this.isInCart = this.cart.some((cartitem) => {
        if (cartitem.product.id === item.id) {
          const data = {
            product: item.id,
            quantity: cartitem.quantity + 1,
          };
          this.axios
            .patch(url, data)
            .then(() => {
              this.$bus.$emit('getcart');
              this.isLoading = false;
            }).catch(() => {
              this.isLoading = false;
            });
          return true;
        }
        return false;
      });
      if (!this.isInCart) {
        const cart = {
          product: item.id,
          quantity,
        };
        this.axios
          .post(url, cart)
          .then(() => {
            this.$bus.$emit('getcart');
            this.isLoading = false;
          })
          .catch(() => {
            this.isLoading = false;
          });
      }
    },
    getwish() {
      this.wishlist = JSON.parse(localStorage.getItem('wishList')) || [];
    },
  },
  created() {
    this.getwish();
    this.$bus.$on('getcarts', (carts) => {
      this.cart = carts;
    });
  },
  beforeDestroy() {
    this.$bus.$off('specialEvent');
  },
};
</script>
