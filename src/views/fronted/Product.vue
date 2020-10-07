<template>
  <div class="product">
    <loading loader="dots" :active.sync="isLoading"></loading>
    <div class="product_area">
      <div class="product_area_img">
        <img
         :src="`${product.imageUrl[0]}`"
         :alt="`${product.title}`"
         :title="`${product.title}`" />
      </div>
      <div class="product_area_detail">
        <div class="product_area_detail_title">
          <h1>{{product.title}}</h1>
        </div>
        <div class="product_area_detail_price">
          <span>{{product.price}}</span>
        </div>
        <hr />
        <div class="product_area_detail_flavor">
          <span>Flavor:白麝香</span>
        </div>
        <div class="product_area_detail_quantity">
          <div>
            <button type="button" :disabled="product.quantity === 1">-</button>
          </div>
          <input type="text" :value="product.quantity=1" />
          <div>
            <button type="button">+</button>
          </div>
        </div>
        <div class="product_area_detail_addbag">
          <button type="button" @click="addToCart(product)">Add to Cart</button>
        </div>
        <div class="product_area_detail_wishlist">
          <button type="button" @click="addToWish(product)">
            <i class="far fa-heart"></i>
            Add to Wish List
          </button>
        </div>
         <div class="product_area_detail_remove" :class="{'show':isWishList}">
          <button type="button" @click="removeWish(product)">
           <i class="fas fa-heart"></i>
            Remove Wish List
          </button>
        </div>
        <hr />
        <div class="product_area_detail_navbar">
          <ul>
            <li>
              <span>商品描述 DESCRIPTION</span>
              <p>{{product.content}}</p>
            </li>
            <li>
              <span>注意事項 Notice</span>
              <p>{{product.description}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="product_morelook">
      <h1>More Look</h1>
      <div class="product_morelook_content">
        <div v-for="product in relatedProducts"
         :key="product.id" class="product_morelook-list" @click="getProdcut(),getRelatedProducts()">
        <div class="product_morelook_img">
          <router-link :to="`/product/${product.id}`">
            <img :src="`${product.imageUrl[0]}`" alt/>
          </router-link>
        </div>
         <div>
            <router-link :to="`/product/${product.id}`" class="product_morelook_title">
              {{product.title}}
            </router-link>
          </div>
          <div class="product_morelook_price">
            <p>NT.{{product.price}}</p>
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
      router: '',
      products: [],
      cart: [],
      product: {
        imageUrl: [],
      },
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
        .catch((err) => {
          this.isLoading = false;
          console.log(err);
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
        .catch((err) => {
          console.log(err);
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
          if (product.category === res.data.data.category) {
            this.relatedProducts.push(product);
          }
        });
        if (this.relatedProducts.length > 4) {
          for (let i = 0; i < 4; i += 1) {
            // 選四個相關產品
            let num = Math.random() * this.relatedProducts.length; // 取得區間內亂數
            num = Math.floor(num); // 小於等於所給數字的最大整數
            this.selectedProducts.push(this.relatedProducts[num]);
            this.relatedProducts.splice(num, 1);
          }
        }
        this.isLoading = false;
      });
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
    addToCart(item, quantity = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_ApiPath}/api/${process.env.VUE_APP_UUID}/ec/shopping`;
      const isInCart = this.cart.some((cartitem) => {
        if (cartitem.product.id === item.id) {
          const data = {
            product: item.id,
            quantity: cartitem.quantity + 1,
          };
          this.axios
            .patch(url, data)
            .then(() => {
              this.addcart = true;
              this.$bus.$emit('addcart');
              this.isLoading = false;
            }).catch((err) => {
              this.isLoading = false;
              console.log(err);
            });
        }
        return true;
      });
      if (!isInCart) {
        const cart = {
          product: item.id,
          quantity,
        };
        this.axios
          .post(url, cart)
          .then(() => {
            this.addcart = true;
            this.$bus.$emit('addcart');
            this.isLoading = false;
          })
          .catch((err) => {
            this.isLoading = false;
            console.log(err);
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
    this.getCart();
  },
};
</script>
