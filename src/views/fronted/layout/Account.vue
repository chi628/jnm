<template>
  <div class="account">
    <loading :active.sync="isLoading"></loading>
    <div class="account-discount">
      <div class="card">
        <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/1mNveaL2vpzVSWwWV48SGhegCTxLBf03miSkcWAuqrQx2kMv64vnn2kovbMPPSedcL8w98z3HhxM5qQVMdMqZdaWsEOwz0M3WHSqpvaQmYHd7gwCATtw4HRR8hNkS7Jq.png" alt />
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
                <label for="register_account">帳號 / 電子信箱</label>
                <input
                  name="電子信箱"
                  id="register_account"
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
                  <input
                    name="密碼"
                    id="register_password"
                    :type="ispassword_register"
                    required
                    v-model="reigster.password"
                    placeholder="Password（ 6 至 12 碼英文字母）"
                  />
                <span class="errormsg">{{ errors[0] }}</span>
                <div class="show_password">
                  <i
                   class="fas fa-eye"
                   :class="{'show': !register_isclick}"
                   @click="ispassword_register='text',register_isclick=true"></i>
                  <i
                   class="fas fa-eye-slash"
                   :class="{'show':register_isclick}"
                   @click="ispassword_register='password',register_isclick=false"></i>
                </div>
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
                  <input
                    id="password"
                    name="密碼"
                    :type="ispassword_login"
                    v-model="signin.password"
                    placeholder="Password"
                    required
                  />
                <span class="errormsg">{{ errors[0] }}</span>
                <div class="show_password">
                  <i
                   class="fas fa-eye"
                   :class="{'show': !login_isclick}"
                   @click="ispassword_login='text',login_isclick=true"></i>
                  <i
                   class="fas fa-eye-slash"
                   :class="{'show':login_isclick}"
                   @click="ispassword_login='password',login_isclick=false"></i>
                </div>
              </ValidationProvider>
            </div>
            <div class="signin">
              <a href="javascript:;">忘記密碼</a>
              <button type="submit" :disabled="invalid">Login 登入會員</button>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ispassword_register: 'password',
      ispassword_login: 'password',
      register_isclick: false,
      login_isclick: false,
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
    login() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 1500);
    },
  },
};
</script>
