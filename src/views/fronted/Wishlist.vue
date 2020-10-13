<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="products">
      <!-- <h1>Wish List</h1> -->
      <div v-for="item in wishlist" :key="item.id" class="products_list">
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
          </div>-->
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

export default {
  data() {
    return {
      isLoading: false,
      wishlist: JSON.parse(localStorage.getItem('wishList')) || [],
    };
  },
};
</script>
