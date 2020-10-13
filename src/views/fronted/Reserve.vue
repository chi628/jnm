<template>
  <div class="reserve">
    <loading :active.sync="isLoading"></loading>
    <div class="reserve-rule">
      <h1>預約須知</h1>
      <ul>
        <li>
          為了維護體驗品質，手作課程僅開放線上預約，現場不開放登記報名。造成您的不便，敬請諒解。
        </li>
        <li>
          預約成功後，我們將會寄發確認簡訊。若沒收到簡訊，請立即與我們聯繫。
        </li>
        <li>
          因應新冠病毒，來店時我們將量測體溫。若體溫高於 37.5
          度，我們保有取消體驗的權利。
        </li>
      </ul>
    </div>
    <div class="reserve-form">
      <h1>預約表單</h1>
      <p class="describe">為確保您的權益，請務必確實填寫資料，謝謝您的配合。</p>
      <ValidationObserver v-slot="{ invalid }">
        <form @submit.prevent="reserve">
          <div class="reserve-form-group">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <label for="name">姓名 Name</label>
              <input
                type="text"
                name="姓名"
                id="name"
                v-model="form.name"
                placeholder="your name"
                required
              />
              <span class="errormsg">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="reserve-form-group">
            <ValidationProvider rules="min:10|required" v-slot="{ errors }">
              <label for="phone">聯絡電話 Phone</label>
              <input
                type="tel"
                name="聯絡電話"
                id="phone"
                placeholder="your phone number"
                v-model="form.phone"
                required
              />
              <span class="errormsg">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="reserve-form-group">
            <ValidationProvider rules="email|required" v-slot="{ errors }">
              <label for="email">聯絡信箱</label>
              <input
                name="電子信箱"
                id="eamil"
                type="email"
                placeholder="E-mail address"
                required
                v-model="form.email"
              />
              <span class="errormsg">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="reserve-form-group">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <label for="date">日期 Date</label>
              <input
                type="date"
                name="日期"
                id="date"
                v-model="form.date"
                required
              />
              <span class="errormsg">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="reserve-form-group">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <label for="time">時間 Time</label>
              <input
                type="time"
                name="時間"
                id="time"
                v-model="form.time"
                required
              />
              <span class="errormsg">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="reserve-form-group">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <label for="member">人數 Member</label>
              <select name="人數" v-model="form.member">
                <option value selected disabled>請選擇</option>
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
              <span class="errormsg">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="reservebtn">
            <button type="submit" :disabled="invalid">確定預約</button>
          </div>
        </form>
      </ValidationObserver>
    </div>
    <div class="reserve-modal" :class="{'show':message}">
      <div class="reserve-modal-header">
        <div class="success">
            <span></span>
            <span></span>
          <svg height="40" width="40">
            <circle cx="20" cy="20" r="18" />
          </svg>
        </div>
        <h1>恭喜預約成功</h1>
      </div>
      <div class="reserve-modal-body">
        <span>以下為您的預約資訊，若有錯誤或是要更改資料，<br/>請致電 <a href="javascript:;">03-1234-4321</a>與客服聯繫。</span>
        <h5>預約人資訊</h5>
        <p>預約人姓名：{{checked.name}}</p>
        <p>預約人聯絡電話：{{checked.phone}}</p>
        <p>預約日期：{{checked.date}}</p>
        <p>預約時間：{{checked.time}}</p>
        <p>預約人數：{{checked.member}}</p>
      </div>
      <div class="reserve-modal-footer">
        <button type="button" class="reserve-modal-footer-sure" @click="closeModal">確認</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isLoading: false,
      message: false,
      form: {
        email: '',
        name: '',
        phone: '',
        date: '',
        time: '',
        member: '',
      },
      checked: {
        email: '',
        name: '',
        phone: '',
        date: '',
        time: '',
        member: '',
      },
    };
  },
  methods: {
    reserve() {
      this.isLoading = true;
      this.checked = { ...this.form };
      setTimeout(() => {
        this.message = true;
        this.form = {
          email: '',
          name: '',
          phone: '',
          date: '',
          time: '',
          member: '',
        };
        this.isLoading = false;
      }, 1500);
    },
    closeModal() {
      this.message = false;
    },
  },
};
</script>
