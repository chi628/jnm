<template>
  <div class="side_cart" :class="{'show':opencart}">
    <div class="side_cart_header">
      <label class="title">
        Cart
        <span v-if="getcart.length==1">{{getcart.length}} item</span>
        <span v-else>{{getcart.length}} items</span>
      </label>
      <button type="button" class="closebtn"  @click="closeCart">
        <span>&times;</span>
      </button>
    </div>
    <div class="no-product">
    <p v-if="getcart.length == 0">購物車還沒有商品唷！</p>
    </div>
    <div class="body">
      <div v-for="item in getcart" :key="item.id" class="side_cart_container">
      <div class="side_cart_container_content">
        <div class="img">
          <img :src="`${item.product.imageUrl[0]}`" />
        </div>
        <div class="content">
          <h1>{{item.product.title}}</h1>
          <p>{{item.product.title}}</p>
          <p class="price">{{item.product.price}}</p>
        </div>
      </div>
      <div class="side_cart_container_footer">
        <div class="quantity">
          <div>
            <button type="button"
            :disabled="item.quantity === 1"
            @click="updatequantity(item.product.id, item.quantity-1)">-</button>
          </div>
          <input type="text"
          :value="item.quantity" />
          <div>
            <button type="button"
            @click="updatequantity(item.product.id, item.quantity+1)">+</button>
          </div>
        </div>
        <div>
          <button type="button"
          class="remove"
          @click="removeItem(item.product.id)">Remove</button>
        </div>
      </div>
    </div>
    </div>
    <div class="side_cart_footer">
      <div class="subtotal">
        <label>SUBTOTAL</label>
        <span>{{total}}</span>
      </div>

        <!-- <div>
          <button type="button" @click="removeAllCart">Remove all</button>
        </div> -->
      <div class="checkout">
        <router-link to='/ordercheck'>
          <button type="button" @click="closeCart">Secure Checkout</button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isLoading: false,
      subtotal: 0,
    };
  },
  props: ['opencart', 'getcart', 'total'],
  methods: {
    closeCart() {
      this.$bus.$emit('close');
    },
    removeItem(id) {
      this.$emit('removeitem', id);
    },
    removeAllCart() {
      this.$emit('removeall');
    },
    updatequantity(id, num) {
      this.$emit('updatecart', id, num);
    },
  },
};
</script>
