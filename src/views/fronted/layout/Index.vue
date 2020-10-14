<template>
  <div class="index">
    <div class="index-banner">
      <img
        src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/Y9gkvcUyOaVwqpxarWLAYKsgTjp5K8t0VcQRxjlmvinYum5cJgpESLROwpeAopUfOKYN21lwbSC3gtmSgwtRamL8QtustM35kwVoJOFwqJ2bsutEmVA8Tdhu5c3ImjnV.jpg"
        alt
      />
    </div>
    <div class="index-reserve">
      <div class="index-reserve-content">
        <h1>Create your own memory</h1>
        <span>
          讓記憶成為永恆
          <br />創造屬於自己專屬的回憶
        </span>
        <p>
          每種味道，在每個人心中，都會勾勒出不一樣的畫面。
          <br />回憶或許稍縱即逝，但是味道可以永恆的留存。
          <br />如果你也有一份珍貴的回憶想保存下，
          <br />那麼歡迎你來 J&amp;M 創造屬於你自己的回憶。
        </p>
      </div>
      <router-link to="/reserve" class="more-btn">
        <button type="button">立即預約</button>
      </router-link>
      <div class="img">
        <img src="@/assets/img/reserve.jpg" alt />
      </div>
    </div>
    <div class="index-activity">
      <div class="img">
        <img src="@/assets/img/Valentine.jpg" alt />
      </div>
      <div class="index-activity-content">
        <h1>Valentine's Day |</h1>
        <span>平淡的生活也要有儀式感</span>
        <p>
          歡慶情人節，快與另一半挑選出你們感情的代表味！
          <br />結帳輸入折扣碼「iloveu」，不限金額立即 88 折。
        </p>
        <router-link to="/products/all" class="more-btn">
          <button type="button">View More</button>
        </router-link>
      </div>
    </div>
    <div class="index-categroy">
      <h1>| 商品介紹</h1>
    </div>
    <div class="index-products">
      <div class="index-item">
        <router-link to="/products/oil">
          <div class="index-item-img">
            <img
              src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/Pxai7ZO9C3388VSBAlghs7cJUyYasptEBHi1xhimGhgRAuakNKie0NlxrcLzI8CeUCqTrgyBGocMeSuZa5SD58g5yTsDrrOgCtM2g4WHhffMzTIKttNRnGzjah1BtC0d.jpg"
              alt
            />
          </div>
          <div class="index-item-text">
            <h1>芳香精油 | 做自己的芳療師</h1>
          </div>
        </router-link>
      </div>
      <div class="index-item">
        <router-link to="/products/sprayer">
          <div class="index-item-img">
            <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/bU84w9CFD3myUd2tKgLNMBtKpiIQBajVxMyxixuQy1wR24VmsdZk3LD57ckQBCgcYR4MlitSHUeGYBnsmkBJSqHMYNJZWtRtHHo5on2gyWlhNko6BhnrKz9NiwnEIo8q.jpg" alt />
          </div>
          <div class="index-item-text">
            <h1>香氛噴霧 | 迎接嶄新的每一天</h1>
          </div>
        </router-link>
      </div>
      <div class="index-item">
        <router-link to="/products/candle">
          <div class="index-item-img">
            <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/nncGKS5HjUosKXSK0whEAjf3EeAmI95N7p7m48f3jG4Tocgkq3hxDF32DI2qYWpIjRDi5wvlLkyMCvujROjCrHrEljH5L36evgE1d6pahAfXnBpdmbFoQM18mtjKksNu.jpg" alt />
          </div>
          <div class="index-item-text">
            <h1>大豆蠟燭 | 清新香味療癒自我</h1>
          </div>
        </router-link>
      </div>
      <div class="index-item">
        <router-link to="/products/jar">
          <div class="index-item-img">
            <img
              src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/tgr5aisSAd7nsxThEn0728koKeQiN9i37yNTM8QvuYrgs9CqaWnWLZfDtRFw0jBCZn4DHvE2v05Gkmsw4tSLHPRMLJvfKdHx1Lf2syh7xatfmZlYae9oaVhtjjAaOSEB.jpg"
              alt
            />
          </div>
          <div class="index-item-text">
            <h1>手工芳香膏 ｜ 散發優雅清香</h1>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
