<template>
  <div>
    <AccountBread :tag="tag" />
    <loading loader="dots" :active.sync="isLoading"></loading>
    <div class="history">
      <div v-for="order in orderlist" :key="order.id" class="history-sum">
        <p>訂單成立時間：{{ order.created.datetime }}</p>
        <p>訂單總金額:{{ order.amount }}</p>
        <p>付款方式：{{ order.payment }}</p>
        <router-link :to="`/ordersuccess/${order.id}`"
          >檢視訂單細節 &raquo;</router-link
        >
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
      orderlist: [],
      isLoading: false,
      tag: 'orderhistory',
    };
  },
  methods: {
    orders() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_ApiPath}/api/${process.env.VUE_APP_UUID}/ec/orders`;
      this.axios
        .get(url)
        .then((res) => {
          this.orderlist = res.data.data;
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.orders();
  },
};
</script>
