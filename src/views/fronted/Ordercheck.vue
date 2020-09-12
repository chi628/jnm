<template>
  <div class="checkorder">
    <h1>Shopping Cart</h1>
    <table class="checkorder_table">
      <thead>
        <tr>
          <th width="50%">商品資訊</th>
          <th>數量</th>
          <th>單價</th>
          <th>小計</th>
          <th>刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cart" :key="item.id">
          <th class="order">
            <div class="order">
              <div class="order-img">
                <img :src="item.product.imageUrl[0]" alt />
              </div>
              <div class="order-title">
                <router-link to="/">{{item.product.title}}</router-link>
              </div>
            </div>
          </th>
          <th>
            <div class="checkorder_table_quantity">
              <select v-model="item.quantity" @change="updateCart(item.product.id,item.quantity)">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
          </th>
          <th>{{item.product.price}}</th>
          <th>{{subtotal}}</th>
          <th>
            <button
              type="button"
              class="checkorder_table_remove"
              @click="removeCartItem(item.product.id)"
            >
              <i class="far fa-trash-alt"></i>
            </button>
          </th>
        </tr>
      </tbody>
    </table>
    <div class="checkorder_coupon">
      <input type="text" placeholder="Enter discount code" />
      <button type="submit">Apply</button>
    </div>

    <div class="checkorder_total">
      <ul>
        <li>
          <span>Subtotal</span>
          <span>{{subtotal}}</span>
        </li>
        <li>
          <span>Shipping</span>
          <span>{{shipping}}</span>
        </li>
        <li>
          <span>Discount</span>
          <span>{{discount}}</span>
        </li>
        <li>
          <span>Total</span>
          <span>{{subtotal+shipping-discount}}</span>
        </li>
      </ul>
    </div>
    <div class="checkorder_btn">
      <router-link to="/" class="checkorder_btn_back">
        <button type="button">&laquo; Back to Shopping</button>
      </router-link>
      <router-link to="/orderinfo" class="checkorder_btn_next">
        <button type="button">Order &raquo;</button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cart: [],
      subtotal: 0,
      shipping: 60,
      discount: 0,
    };
  },
  methods: {
    getCart() {
      // this.isLoading = true;
      this.axios
        .get(
          `${process.env.VUE_APP_ApiPath}/api/${process.env.VUE_APP_UUID}/ec/shopping`,
        )
        .then((res) => {
          console.log('ordercheck', res.data.data);
          // this.isLoading = false;
          this.cart = res.data.data;
          this.subtotal = 0;
          this.cart.forEach((item) => {
            this.subtotal += item.product.price * item.quantity;
          });
        })
        .catch((err) => {
          // this.isLoading = false;
          console.log(err);
        });
    },

    updateCart(id, num) {
      console.log('orderupdate', id, num);
      this.isLoading = true;
      console.log('update', id, num);
      const url = `${process.env.VUE_APP_ApiPath}/api/${process.env.VUE_APP_UUID}/ec/shopping`;
      const data = {
        product: id,
        quantity: num,
      };
      this.axios
        .patch(url, data)
        .then((res) => {
          console.log(res);
          this.getCart();
          this.isLoading = false;
        })
        .catch((err) => {
          this.isLoading = false;
          console.log(err);
        });
    },
    removeCartItem(id) {
      // console.log('delete', id);
      this.isLoading = true;
      const url = `${process.env.VUE_APP_ApiPath}/api/${process.env.VUE_APP_UUID}/ec/shopping/${id}`;
      this.axios
        .delete(url)
        .then((res) => {
          console.log(res);
          this.isLoading = false;
          this.getCart();
        })
        .catch((err) => {
          this.isLoading = false;
          console.log(err);
        });
    },
  },
  created() {
    this.getCart();
  },
};
</script>
