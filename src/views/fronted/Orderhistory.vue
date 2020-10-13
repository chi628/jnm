<template>
    <div class="history">
        <!-- <h1>訂單歷史紀錄</h1> -->
        <div v-for="order in orderlist" :key="order.id" class="history-sum">
            <p>訂單成立時間：{{order.created.datetime}}</p>
            <p>訂單總金額:{{order.amount}}</p>
            <p>付款方式：{{order.payment}}</p>
            <router-link :to="`/ordersuccess/${order.id}`">檢視訂單細節 &raquo;</router-link>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      orderlist: [],
    };
  },
  methods: {
    orders() {
      const url = `${process.env.VUE_APP_ApiPath}/api/${process.env.VUE_APP_UUID}/ec/orders`;
      this.axios.get(url).then((res) => {
        this.orderlist = res.data.data;
        console.log(this.orderlist);
      }).catch((err) => {
        console.log(err);
      });
    },
  },
  created() {
    this.orders();
  },
};
</script>
