<template>
  <div>
    <loading loader="dots" :active.sync="isLoading"></loading>
    <Breadcrumbs
     :catergroy="category"
     @getproducts="getProducts"/>
    <div class="products">
      <div v-for="item in showProducts" :key="item.id" class="products_list">
        <div class="products_header">
          <router-link :to="`/product/${item.id}`">
            <img :src="`${item.imageUrl[0]}`" alt class="products_header_img" />
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
      <div class="products-pagination">
        <Pagination :page="pagination" @updatepage="getProducts" />
      </div>
    </div>
  </div>
</template>
<script>
import Pagination from '@/components/Pagination.vue';
import Breadcrumbs from '@/components/fronted/Breadcrumb.vue';

export default {
  components: {
    Pagination,
    Breadcrumbs,
  },
  data() {
    return {
      products: [],
      showProducts: [],
      cart: [],
      isLoading: false,
      pagination: {},
      isInCart: false,
      category: '',
    };
  },
  methods: {
    getProducts(num = 1) {
      this.category = this.$route.params.category;
      this.isLoading = true;
      this.axios
        .get(
          `${process.env.VUE_APP_ApiPath}/api/${process.env.VUE_APP_UUID}/ec/products?page=${num}`,
        )
        .then((res) => {
          this.isLoading = false;
          this.showProducts = [];
          this.products = res.data.data;
          this.pagination = res.data.meta.pagination;
          this.products.forEach((product) => {
            if (this.category === product.category) {
              this.showProducts.push(product);
              this.category = product.category;
            } else if (this.category === 'all') {
              this.showProducts = this.products;
            }
          });
          if (this.showProducts.length < 16) {
            this.pagination.total_pages = 1;
          }
          this.isLoading = false;
        })
        .catch(() => {
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
          .catch((err) => {
            this.isLoading = false;
            console.log(err);
          });
      }
    },
  },
  created() {
    this.getProducts();
    this.$bus.$on('getproducts', () => {
      this.getProducts();
    });
    this.$bus.$on('getcarts', (carts) => {
      this.cart = carts;
    });
    this.$bus.$on('addtocart', (item) => {
      this.addToCart(item);
    });
  },
  beforeDestroy() {
    this.$bus.$off('specialEvent');
  },
};
</script>
