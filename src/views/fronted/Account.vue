<template>
  <div class="account">
    <loading :active.sync="isLoading"></loading>
    <div class="account-discount">
      <div class="card">
        <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/1qsqDfAYkYi3seNiQKMaVWAM7t4ouVJ4aeqcVlfUWraiQBpLLHWEOMXfGiRamZ6ial2DffGZ3D7Zkdf2OOUHVNh3RNwpsKbMWQw1zlseX9XmH0auPYiBaOUX75bHQTeK.png" alt />
      </div>
      <div class="text">
        <ul>
          <li>註冊會員，立即享有 8 折優惠券一張</li>
          <li>成為會員，我們將會寄送會員卡給您</li>
          <li>會員每年生日當月可享有一份生日禮，及一張優惠券</li>
          <li>憑會員卡號，即可享有線上購物免運優惠</li>
          <li>不定期會員專屬活動及優惠</li>
        </ul>
      </div>
    </div>
    <div class="account-info">
      <div class="account-register">
        <h1>Register</h1>
        <ValidationObserver v-slot="{ invalid }">
          <form @submit.prevent="login">
            <div>
              <ValidationProvider rules="email|required" v-slot="{ errors }">
                <label for="account">帳號 / 電子信箱</label>
                <input
                  name="電子信箱"
                  id="account"
                  type="email"
                  placeholder="E-mail address"
                  required
                  v-model="reigster.email"
                />
                <span class="errormsg">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div>
              <ValidationProvider rules="min:6|max:12|required" v-slot="{ errors }">
                <label for="register_password">密碼</label>
                <div class="password">
                  <input
                    id="register_password"
                    name="密碼"
                    :type="ispassword_register"
                    required
                    v-model="reigster.password"
                    placeholder="Password（ 6 至 12 碼英文字母）"
                  />
                  <i class="fas fa-eye" @click="Showpassword"></i>
                  <i class="fas fa-eye-slash" @click="Hidepassword"></i>
                </div>
                <span class="errormsg">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div>
              <ValidationProvider rules="required" v-slot="{ errors }">
                <label for="gender">性別</label>
                <select name="性別" v-model="reigster.gender">
                  <option value selected disabled>請選擇</option>
                  <option value="male">男</option>
                  <option value="female">女</option>
                  <option value="other">不透露</option>
                </select>

                <span class="errormsg">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div>
              <ValidationProvider rules="required" v-slot="{ errors }">
                <label for="date">生日</label>
                <input type="date" id="date" name="生日" required v-model="reigster.birth" />
                <span class="errormsg">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div>
              <div class="agreebox">
                <label class="check_box" for="agree_post">
                  <input type="checkbox" id="agree_post" />
                  <span class="checkmark"></span>
                  <p>我同意收到電子郵報</p>
                </label>
                <label class="check_box" for="agree_privacy">
                  <input type="checkbox" id="agree_privacy" />
                  <span class="checkmark"></span>
                  <p>
                    我同意本站之
                    <a href="javascript:;">服務條款</a> 及
                    <a href="javascript:;">隱私政策</a>
                  </p>
                </label>
              </div>
            </div>
            <div class="signup">
              <button type="submit" :disabled="invalid">Sign Up 註冊會員</button>
            </div>
          </form>
        </ValidationObserver>
      </div>
      <div class="account-login">
        <h1>Sign in</h1>

        <ValidationObserver v-slot="{ invalid }">
          <form @submit.prevent="login">
            <div>
              <ValidationProvider rules="email|required" v-slot="{ errors }">
                <label for="account">帳號 / 電子信箱</label>
                <input
                  id="account"
                  name="電子信箱"
                  type="email"
                  placeholder="E-mail address"
                  required
                  v-model="signin.mail"
                />

                <span class="errormsg">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div>
              <ValidationProvider rules="min:6|max:12|required" v-slot="{ errors }">
                <label for="password">密碼</label>
                <div class="password">
                  <input
                    id="password"
                    name="密碼"
                    :type="ispassword_register"
                    v-model="signin.password"
                    placeholder="Password"
                    required
                  />
                  <i class="fas fa-eye" @click="Showpassword"></i>
                  <i class="fas fa-eye-slash" @click="Hidepassword"></i>
                </div>
                <span class="errormsg">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div class="signin">
              <a href="javascript:;">忘記密碼</a>
              <button type="submit" :disabled="invalid">Sign Up 註冊會員</button>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>
<script>
/* global $ */
export default {
  data() {
    return {
      register_password: '',
      ispassword_register: 'password',
      isLoading: false,
      reigster: {
        email: '',
        password: '',
        birth: '',
        gender: '',
      },
      signin: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    Showpassword() {
      if (this.register_password !== '') {
        this.ispassword_register = 'text';
        $('.fa-eye').css('visibility', ' hidden');
        $('.fa-eye-slash').css('visibility', ' visible');
      }
    },
    Hidepassword() {
      this.ispassword_register = 'password';
      $('.fa-eye').css('visibility', ' visible');
      $('.fa-eye-slash').css('visibility', ' hidden');
    },
    login() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 1500);
    },
  },
};
</script>
