<template>
  <div class="checkinfo">
    <loading :active.sync="isLoading"></loading>
    <div>
      <h1>Customer Information</h1>
      <div class="checkinfo_form">
        <validation-observer v-slot="{ invalid }">
          <form @submit.prevent="createOrder">
            <ul>
              <div class="checkinfo_form_group">
                <li>
                  <ValidationProvider rules="required">
                    <label for="name" class="checkinfo_form_title">姓名</label>
                    <input id="name" v-model="form.name" type="text" class="checkinfo_form_ans" />
                  </ValidationProvider>
                </li>
              </div>
              <div class="checkinfo_form_group">
                <li>
                  <ValidationProvider rules="required">
                    <label for="tel" class="checkinfo_form_title">手機</label>
                    <input id="tel" v-model="form.tel" type="tel" class="checkinfo_form_ans" />
                  </ValidationProvider>
                </li>
              </div>
              <div class="checkinfo_form_group">
                <li>
                  <ValidationProvider rules="required">
                    <label for="address" class="checkinfo_form_title">地址</label>
                    <input
                      id="address"
                      v-model="form.address"
                      type="text"
                      class="checkinfo_form_ans"
                    />
                  </ValidationProvider>
                </li>
              </div>

              <div class="checkinfo_form_group">
                <li>
                  <ValidationProvider rules="required">
                    <label for="email" class="checkinfo_form_title">E-mail</label>
                    <input
                     id="email"
                     v-model="form.email"
                     type="email"
                     class="checkinfo_form_ans" />
                  </ValidationProvider>
                </li>
              </div>

              <div class="checkinfo_form_group">
                <li>
                  <ValidationProvider rules="required">
                    <label for="ship" class="checkinfo_form_title">運送方式</label>
                    <select id="ship" v-model="ship" class="checkinfo_form_ans">
                      <option value="Delivery" selected>宅配</option>
                      <option value="711">7-11 超商取貨</option>
                      <option value="familymart">全家 超商取貨</option>
                      <option value="Okmart">OK 超商取貨</option>
                      <option value="Hilife">萊爾富 超商取貨</option>
                    </select>
                  </ValidationProvider>
                </li>
              </div>

              <div class="checkinfo_form_group">
                <li>
                  <ValidationProvider rules="required">
                    <label for="payment" class="checkinfo_form_title">付款方式</label>
                    <select id="payment" v-model="form.payment" class="checkinfo_form_ans">
                      <option value="WebATM" selected>WebATM</option>
                      <option value="ATM">ATM</option>
                      <option value="CVS">CVS</option>
                      <option value="Barcode">Barcode</option>
                      <option value="Credit">Credit</option>
                      <option value="GooglePay">GooglePay</option>
                      <option value="ApplePay">ApplePay</option>
                    </select>
                  </ValidationProvider>
                </li>
              </div>
              <div class="checkinfo_form_group">
                <li>
                  <ValidationProvider rules="required">
                    <label for="invoice" class="checkinfo_form_title">發票</label>
                    <select id="invoice" v-model="invoice" class="checkinfo_form_ans">
                      <option selected value="electronic-invoice">電子發票</option>
                      <option value="mobile-vehicle">手機載具</option>
                      <option value="donation-invoice">捐贈發票</option>
                      <option value="unified-invoice">統編發票</option>
                    </select>
                  </ValidationProvider>
                </li>
              </div>
            </ul>
            <div class="checkinfo_form_btn">
              <router-link to="/ordercheck" class="checkinfo_form_btn_back">
                <button type="button">&laquo; back to cart</button>
              </router-link>
              <div class="checkinfo_form_btn_next">
                <button type="submit" :disabled="invalid">Order &raquo;</button>
              </div>
            </div>
          </form>
        </validation-observer>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      router: '',
      form: {
        name: '',
        tel: '',
        address: '',
        email: '',
        payment: 'WebATM',
      },
      ship: 'Delivery',
      invoice: 'electronic-invoice',
      isLoading: false,
    };
  },
  methods: {
    createOrder() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_ApiPath}/api/${process.env.VUE_APP_UUID}/ec/orders`;
      const order = { ...this.form };
      this.$bus.$on('checkcoupon', () => {
        if (this.coupon.enabled) {
          order.coupon = this.coupon.code;
        }
      });
      this.axios.post(url, order)
        .then((res) => {
          if (res.data.data.id) {
            this.$router.push(`/ordersuccess/${res.data.data.id}`);
          }
          this.isLoading = false;
        }).catch((err) => {
          console.log(err);
          this.isLoading = false;
        });
    },
  },
  created() {
  },
};
</script>
