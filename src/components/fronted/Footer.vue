<template>
  <div>
    <footer class="footer">
      <div class="footer-title">
        <p>Hey,let's keep in touch!</p>
      </div>
      <div class="footer-subscription">
        <ValidationObserver v-slot="{ invalid }">
          <form>
            <ValidationProvider rules="email" v-slot="{ errors }">
              <input type="email" name="電子信箱" placeholder="your email address" v-model="email" />
              <button type="button" :disabled="invalid">Subscribe</button>
              <span class="errormsg">{{ errors[0] }}</span>
            </ValidationProvider>
          </form>
        </ValidationObserver>
      </div>
      <div class="footer-contact">
        <ul>
          <li>
            <span>實體店面</span>
            <div class="footer-contact-address">
              <p>地址：桃園市中壢區環中東路1巷1號</p>
              <p>(營業時間：10:00 ~ 22:00)</p>
            </div>
          </li>
          <li>
            <span>客服專線</span>
            <div class="footer-contact-phone">
              <a href="javascript:;">03-1234-4321</a>
              <p>服務時間：09:00—18:00 (國定例假日暫停服務)</p>
            </div>
          </li>
          <li>
            <span>客服信箱</span>
            <div class="footer-contact-mail">
              <a href="javascript:;">jm@service.com.tw</a>
            </div>
          </li>
        </ul>
      </div>
      <div class="footer-copyright">
        <p>&copy; J&amp;M 2020 All Rights Reserved.圖片為練習使用，無商業用途。</p>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: '',
    };
  },
};
</script>
