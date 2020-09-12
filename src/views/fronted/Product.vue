<template>
  <div class="product">
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
          <button type="button">Add to Bag</button>
        </div>
        <div class="product_area_detail_wishlist">
          <button type="button">
            <i class="far fa-heart"></i>
            Add to Wish List
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
        <div v-for="product in selectedProducts" :key="product.id" class="product_morelook-list">
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
            <p>NT${{product.price}}</p>
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
      product: {
        imageUrl: [],
      },
      relatedProducts: [],
      selectedProducts: [],
      isLoading: false,
    };
  },
  methods: {
    getProducts() {
      this.axios
        .get(
          `${process.env.VUE_APP_ApiPath}/api/${process.env.VUE_APP_UUID}/ec/products`,
        )
        .then((res) => {
          // console.log(res.data);
          this.products = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getProdcut() {
      this.isLoading = true;
      this.axios
        .get(
          `${process.env.VUE_APP_ApiPath}/api/${process.env.VUE_APP_UUID}/ec/product/${this.$route.params.id}`,
        )
        .then((res) => {
          this.isLoading = false;
          this.product = res.data.data;
          // console.log('detail', this.product);
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
      this.axios.get(url).then((response) => {
        this.products.forEach((product) => {
          if (product.category === response.data.data.category) {
            this.relatedProducts.push(product);
            console.log('related', this.relatedProducts);
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
        } else {
          this.selectedProducts = this.relatedProducts;
        }
        this.isLoading = false;
      });
    },
  },
  created() {
    this.getProdcut();
    this.getRelatedProducts();
    this.getProducts();
  },
};
</script>
