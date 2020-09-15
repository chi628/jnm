<template>
  <div class="orderinfo">
    <loading :active.sync="isLoading"></loading>
    <div class="checkinfo">
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
      this.$bus.$on('checkcoupon', (coupon) => {
        console.log('info', coupon);
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
<style lang="scss">
.orderinfo {
  // border: 1px solid blue;
  width: 1240px;
  display: flex;
  margin: 10px auto;
  h1 {
    font-size: 16px;
    font-family: "Roboto Mono", monospace;
    font-weight: bold;
    padding: 10px;
    border-bottom: 1px solid #f7efe5;
    color: #7c644b;
  }
  button:hover {
    cursor: pointer;
  }
  button:active,
  button:focus,
  select:active,
  select:focus {
    outline: none;
  }
  button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}
.cartinfo {
  margin: 0 10px;
  width: 600px;
  border-right: 1px solid #D4C8B9;
  padding-right: 10px ;
  &_table {
    width: 100%;
    margin-top: 15px;
    table {
      border-collapse: collapse;
      border-spacing: 0;
      padding-top: 15px;
    }
    tr {
      border-bottom: 1px solid #f7efe5;
    }
    th {
      padding: 10px 0;
      vertical-align: middle;
      text-align: center;
    }
    &_quantity {
      position: relative;
      display: inline-block;
      select {
        width: 60px;
        height: 30px;
        padding: 0 3px;
        border: 1px solid #957d61;
        border-radius: 3px;
        color: #7c644b;
        &:hover {
          cursor: pointer;
        }
        &:active,
        &:focus {
          outline: none;
        }
      }
    }
    &_remove {
      height: 40px;
      border: none;
      background-color: #fff;
      font-size: 16px;
    }
  }
  &_total {
    text-align: right;
    font-family: "Roboto Mono", monospace;
    color: #7c644b;
    font-size: 16px;
    margin: 5px;
    padding-bottom: 5px;
    border-bottom: 1px solid #f7efe5;
    span {
      display: inline-block;
      margin: 5px 0;
    }
    li span:nth-child(2) {
      width: 120px;
    }
  }
}
.checkinfo {
  // border: 1px solid blue;
  margin: 15px auto;
  width: 600px;
  &_form {
    // border: 1px solid red;
    text-align: center;
    margin: 15px 0;
    color: #7c644b;
    label {
      vertical-align: middle;
      display: inline-block;
      text-align: left;
    }
    &_group {
      margin: 15px 0;
    }
    &_title {
      width: 100px;
      font-weight: bold;
    }
    &_ans {
      width: 200px;
      height: 25px;
      border: 1px solid #957d61;
      border-radius: 3px;
      margin: 0 5px;
      color: #7c644b;
    }
    &_btn {
      margin-top: 25px;
      &_back {
        button {
          position: relative;
          left: -150px;
          border: none;
          width: 150px;
          height: 40px;
          background-color: #fff;
          color: #7c644b;
          font-family: "Roboto Mono", monospace;
          font-size: 12px;
          text-transform: uppercase;
          text-align: left;
        }
      }
      &_next {
        float: right;
        button {
          border: 1px solid #7c644b;
          background-color: #7c644b;
          border-radius: 3px;
          color: white;
          width: 150px;
          height: 40px;
          font-family: "Roboto Mono", monospace;
          font-size: 14px;
          text-transform: uppercase;
        }
      }
    }
  }
}
</style>
