<template>
  <div class="products">
    <loading :active.sync="isLoading"></loading>
     <div v-for="item in showProducts" :key="item.id" class="products_list">
        <div class="products_header">
          <router-link :to="`/product/${item.id}`">
            <img :src="`${item.imageUrl[0]}`" alt class="products_header_img" />
            <button type="button" class="products_header_btn">Quick View</button>
          </router-link>
        </div>
        <div class="products_container">
          <!-- <div>
            <button type="button" class="products_container_wish">
              <i class="far fa-heart"></i>
            </button>
            <button type="button" class="products_container_wish_hover">
              <i class="fas fa-heart"></i>
            </button>
          </div> -->
          <div>
            <router-link :to="`/product/${item.id}`" class="products_container_title">
              {{item.title}}
            </router-link>
          </div>
          <div class="products_container_price">
            <p>NT${{item.price}}</p>
          </div>
        </div>
        <div class="products_footer">
          <button type="button" class="products_footer_btn" @click="addToCart(item)">
              Add To Cart
          </button>
        </div>
      </div>
      <div class="products-pagination">
        <Pagination :page="pagination" @updatepage="getProducts"/>
      </div>
  </div>
</template>
<script>
import Pagination from '@/components/Pagination.vue';

export default {
  components: {
    Pagination,
  },
  data() {
    return {
      products: [],
      showProducts: [],
      isLoading: false,
      pagination: {},
      addcart: false,
      router: '',
    };
  },
  methods: {
    getProducts(num = 1) {
      // console.log('num', num)
      const { category } = this.$route.params;
      this.isLoading = true;
      this.axios
        .get(`${process.env.VUE_APP_ApiPath}/api/${process.env.VUE_APP_UUID}/ec/products?page=${num}&paged=12`)
        .then((res) => {
          console.log(res.data);
          this.isLoading = false;
          this.products = res.data.data;
          this.products.forEach((product) => {
            if (category === product.category) {
              console.log('category', category);
              this.showProducts.push(product);
              this.category = category;
            } else if (category === 'all') {
              console.log('All-Products', category);
              this.showProducts = this.products;
              this.category = 'All Products';
            }
          });
          this.pagination = res.data.meta.pagination;
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
      const cart = {
        product: item.id,
        quantity,
      };
      this.axios
        .post(url, cart)
        .then((res) => {
          this.isLoading = false;
          this.addcart = true;
          this.$bus.$emit('addcart');
          console.log('item', res);
        })
        .catch((err) => {
          this.isLoading = false;
          console.log(err);
        });
    },
  },
  created() {
    this.getProducts();
    this.router = this.$router.history.current.name;
    this.$bus.$on('getproducts', () => {
      console.log('products-router', this.router);
    });
  },
};
</script>
