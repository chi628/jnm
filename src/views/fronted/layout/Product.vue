<template>
  <div class="product">
    <loading loader="dots" :active.sync="isLoading"></loading>
    <div class="product_area">
      <div class="product_area_img">
        <img
          :src="`${product.imageUrl[0]}`"
          :alt="`${product.title}`"
          :title="`${product.title}`"
        />
      </div>
      <div class="product_area_detail">
        <div class="product_area_detail_title">
          <h1>{{ product.title }}</h1>
        </div>
        <div class="product_area_detail_price">
          <span>{{ product.price }}</span>
        </div>
        <hr />
        <div class="product_area_detail_flavor">
          <span>Flavor:白麝香</span>
        </div>
        <div class="product_area_detail_quantity">
          <div>
            <button
              type="button"
              :disabled="product.quantity === 1"
              @click="quantity = quantity - 1"
            >
              -
            </button>
          </div>
          <input type="text" :value="quantity" />
          <div>
            <button type="button" @click="quantity = quantity + 1">+</button>
          </div>
        </div>
        <div class="product_area_detail_addbag">
          <button type="button" @click="addToCart(product, quantity)">
            Add to Cart
          </button>
        </div>
        <div class="wishlist">
          <div
            class="product_area_detail_wishlist"
            :class="{ hide: isWishList }"
          >
            <button type="button" @click="addToWish(product)">
              <i class="far fa-heart"></i>
              Add to Wish List
            </button>
          </div>
          <div class="product_area_detail_remove" :class="{ show: isWishList }">
            <button type="button" @click="removeWish(product)">
              <i class="fas fa-heart"></i>
              Remove Wish List
            </button>
          </div>
        </div>
        <hr />
        <div class="product_area_detail_navbar">
          <ul>
            <li>
              <span>商品描述</span>
              <span>DESCRIPTION</span>
              <p>{{ product.content }}</p>
            </li>
            <li>
              <span>注意事項</span>
              <span>Notice</span>
              <p>{{ product.description }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="product_morelook">
      <h1>More Look</h1>
      <div class="product_morelook-content">
        <div
          v-for="product in selectedProducts"
          :key="product.id"
          class="product_morelook-list"
          @click="getProdcut(), getRelatedProducts()"
        >
          <div class="product_morelook-img">
            <router-link :to="`/product/${product.id}`">
              <img :src="`${product.imageUrl[0]}`" alt />
            </router-link>
          </div>
          <div>
            <router-link
              :to="`/product/${product.id}`"
              class="product_morelook-title"
            >
              {{ product.title }}
            </router-link>
          </div>
          <div class="product_morelook-price">
            <p>NT.{{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      cart: [],
      product: {
        imageUrl: [],
      },
      quantity: 1,
      relatedProducts: [],
      selectedProducts: [],
      isWishList: false,
      wishid: [],
      wishlist: JSON.parse(localStorage.getItem('wishList')) || [],
      isLoading: false,
    };
  },
  methods: {
    getProducts() {
      this.isLoading = true;
      this.axios
        .get(
          `${process.env.VUE_APP_ApiPath}/api/${process.env.VUE_APP_UUID}/ec/products`,
        )
        .then((res) => {
          this.isLoading = false;
          this.products = res.data.data;
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
    getProdcut() {
      this.isWishList = false;
      this.isLoading = true;
      const { id } = this.$route.params;
      this.axios
        .get(
          `${process.env.VUE_APP_ApiPath}/api/${process.env.VUE_APP_UUID}/ec/product/${id}`,
        )
        .then((res) => {
          this.isLoading = false;
          this.product = res.data.data;
          this.wishlist.forEach((item) => {
            if (item.id === this.product.id) {
              this.isWishList = true;
            }
            this.wishid.push(item.id);
          });
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
    getRelatedProducts() {
      this.relatedProducts = [];
      this.selectedProducts = [];
      const { id } = this.$route.params;
      const url = `${process.env.VUE_APP_ApiPath}/api/${process.env.VUE_APP_UUID}/ec/product/${id}`;
      this.isLoading = true;
      this.axios.get(url).then((res) => {
        this.products.forEach((product) => {
          if (
            product.category === res.data.data.category
            && product.id !== id
          ) {
            this.relatedProducts.push(product);
          }
        });
        if (this.relatedProducts.length > 4) {
          for (let i = 0; i < 4; i += 1) {
            let num = Math.random() * this.relatedProducts.length;
            num = Math.floor(num);
            this.selectedProducts.push(this.relatedProducts[num]);
            this.relatedProducts.splice(num, 1);
          }
        } else {
          this.selectedProducts = this.relatedProducts;
        }
        this.isLoading = false;
      });
    },
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
            })
            .catch(() => {
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
    addToWish(item) {
      this.isWishList = true;
      this.wishlist.push(item);
      localStorage.setItem('wishList', JSON.stringify(this.wishlist));
    },
    removeWish(item) {
      const itemid = this.wishid.indexOf(item.id);
      this.wishlist.splice(itemid, 1);
      this.isWishList = false;
      localStorage.setItem('wishList', JSON.stringify(this.wishlist));
    },
  },
  created() {
    this.getProdcut();
    this.getRelatedProducts();
    this.getProducts();
    this.$bus.$on('getcarts', (carts) => {
      this.cart = carts;
    });
  },
  beforeDestroy() {
    this.$bus.$off('specialEvent');
  },
};
</script>
