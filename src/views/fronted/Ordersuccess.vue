<template>
  <div class="ordersuccess">
    <loading :active.sync="isLoading"></loading>
    <div class="ordersuccess-header">
      <div class="success">
        <span></span>
        <span></span>
        <svg height="40" width="40">
          <circle cx="20" cy="20" r="18" />
        </svg>
      </div>
      <h1>訂單建立成功</h1>
    </div>
    <div>
      <div class="ordersuccess-orderlist">
        <h1>訂單商品</h1>
        <hr />
        <table>
          <thead>
            <tr>
              <th width="50%">商品資訊</th>
              <th>數量</th>
              <th>金額</th>
            </tr>
          </thead>
          <tbody v-for="item in order.products" :key="item.id">
            <tr>
              <th class="ordersuccess-orderlist-detail">
                <div>
                  <img
                    :src="`${item.product.imageUrl[0]}`"
                    alt
                    style="width: 50px"
                  />
                </div>
                <div>
                  <h1>{{ item.product.title }}</h1>
                </div>
              </th>
              <th>{{ item.quantity }}</th>
              <th>NT. {{ item.product.price * item.quantity }}</th>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="ordersuccess-amount">
        <h1>訂單金額</h1>
        <hr />
        <ul>
          <li>
            <span>商品小計</span>
            <span>NT. {{ subtotal | money }}</span>
          </li>
          <li>
            <span>運費</span>
            <span>NT. {{ shipping | money }}</span>
          </li>
          <li>
            <span>折扣</span>
            <span>NT. {{ discount | money }}</span>
          </li>
          <li>
            <span>總金額</span>
            <span>NT. {{ (subtotal + shipping - discount) | money }}</span>
          </li>
        </ul>
      </div>
      <div class="ordersuccess-info">
        <h1>訂單資訊</h1>
        <hr />
        <ul>
          <li>
            <span>訂單成立時間</span>
            <span>{{ order.created.datetime }}</span>
          </li>
          <li>
            <span>訂購人姓名</span>
            <span>{{ order.user.name }}</span>
          </li>
          <li>
            <span>訂購人信箱</span>
            <span>{{ order.user.email }}</span>
          </li>
          <li>
            <span>訂購人聯絡電話</span>
            <span>{{ order.user.tel }}</span>
          </li>
          <li>
            <span>收件地址</span>
            <span>{{ order.user.address }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="ordersuccess-btn">
      <router-link to="/orderhistory">
        <button type="button" class="ordersuccess_back">查看訂購紀錄</button>
      </router-link>
      <router-link to="/">
        <button type="button" class="ordersuccess_next">回首頁</button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      order: {
        user: {},
        created: {},
      },
      subtotal: 0,
      orderId: '',
      shipping: 60,
      discount: 0,
      isLoading: false,
    };
  },
  methods: {
    getOrderDetailed() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_ApiPath}/api/${process.env.VUE_APP_UUID}/ec/orders/${this.orderId}`;
      this.axios
        .get(url)
        .then((res) => {
          this.order = res.data.data;
          console.log('order', this.order);
          this.subtotal = this.order.amount;
          this.$bus.$emit('createorder');
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err);
          this.isLoading = false;
        });
    },
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrderDetailed();
  },
};
</script>
