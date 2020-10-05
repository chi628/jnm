(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a30be"],{"0107":function(s,e,r){"use strict";r.r(e);var a=function(){var s=this,e=s.$createElement,r=s._self._c||e;return r("div",{staticClass:"account"},[r("loading",{attrs:{active:s.isLoading},on:{"update:active":function(e){s.isLoading=e}}}),s._m(0),r("div",{staticClass:"account-info"},[r("div",{staticClass:"account-register"},[r("h1",[s._v("Register")]),r("ValidationObserver",{scopedSlots:s._u([{key:"default",fn:function(e){var a=e.invalid;return[r("form",{on:{submit:function(e){return e.preventDefault(),s.login(e)}}},[r("div",[r("ValidationProvider",{attrs:{rules:"email|required"},scopedSlots:s._u([{key:"default",fn:function(e){var a=e.errors;return[r("label",{attrs:{for:"account"}},[s._v("帳號 / 電子信箱")]),r("input",{directives:[{name:"model",rawName:"v-model",value:s.reigster.email,expression:"reigster.email"}],attrs:{name:"電子信箱",id:"account",type:"email",placeholder:"E-mail address",required:""},domProps:{value:s.reigster.email},on:{input:function(e){e.target.composing||s.$set(s.reigster,"email",e.target.value)}}}),r("span",{staticClass:"errormsg"},[s._v(s._s(a[0]))])]}}],null,!0)})],1),r("div",[r("ValidationProvider",{attrs:{rules:"min:6|max:12|required"},scopedSlots:s._u([{key:"default",fn:function(e){var a=e.errors;return[r("label",{attrs:{for:"register_password"}},[s._v("密碼")]),"checkbox"===s.ispassword_register?r("input",{directives:[{name:"model",rawName:"v-model",value:s.reigster.password,expression:"reigster.password"}],attrs:{name:"密碼",id:"register_password",required:"",placeholder:"Password（ 6 至 12 碼英文字母）",type:"checkbox"},domProps:{checked:Array.isArray(s.reigster.password)?s._i(s.reigster.password,null)>-1:s.reigster.password},on:{change:function(e){var r=s.reigster.password,a=e.target,i=!!a.checked;if(Array.isArray(r)){var t=null,o=s._i(r,t);a.checked?o<0&&s.$set(s.reigster,"password",r.concat([t])):o>-1&&s.$set(s.reigster,"password",r.slice(0,o).concat(r.slice(o+1)))}else s.$set(s.reigster,"password",i)}}}):"radio"===s.ispassword_register?r("input",{directives:[{name:"model",rawName:"v-model",value:s.reigster.password,expression:"reigster.password"}],attrs:{name:"密碼",id:"register_password",required:"",placeholder:"Password（ 6 至 12 碼英文字母）",type:"radio"},domProps:{checked:s._q(s.reigster.password,null)},on:{change:function(e){return s.$set(s.reigster,"password",null)}}}):r("input",{directives:[{name:"model",rawName:"v-model",value:s.reigster.password,expression:"reigster.password"}],attrs:{name:"密碼",id:"register_password",required:"",placeholder:"Password（ 6 至 12 碼英文字母）",type:s.ispassword_register},domProps:{value:s.reigster.password},on:{input:function(e){e.target.composing||s.$set(s.reigster,"password",e.target.value)}}}),r("span",{staticClass:"errormsg"},[s._v(s._s(a[0]))]),r("div",{staticClass:"show_password"},[r("i",{staticClass:"fas fa-eye",class:{show:!s.register_isclick},on:{click:function(e){s.ispassword_register="text",s.register_isclick=!0}}}),r("i",{staticClass:"fas fa-eye-slash",class:{show:s.register_isclick},on:{click:function(e){s.ispassword_register="password",s.register_isclick=!1}}})])]}}],null,!0)})],1),r("div",[r("ValidationProvider",{attrs:{rules:"required"},scopedSlots:s._u([{key:"default",fn:function(e){var a=e.errors;return[r("label",{attrs:{for:"gender"}},[s._v("性別")]),r("select",{directives:[{name:"model",rawName:"v-model",value:s.reigster.gender,expression:"reigster.gender"}],attrs:{name:"性別"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(s){return s.selected})).map((function(s){var e="_value"in s?s._value:s.value;return e}));s.$set(s.reigster,"gender",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"",selected:"",disabled:""}},[s._v("請選擇")]),r("option",{attrs:{value:"male"}},[s._v("男")]),r("option",{attrs:{value:"female"}},[s._v("女")]),r("option",{attrs:{value:"other"}},[s._v("不透露")])]),r("span",{staticClass:"errormsg"},[s._v(s._s(a[0]))])]}}],null,!0)})],1),r("div",[r("ValidationProvider",{attrs:{rules:"required"},scopedSlots:s._u([{key:"default",fn:function(e){var a=e.errors;return[r("label",{attrs:{for:"date"}},[s._v("生日")]),r("input",{directives:[{name:"model",rawName:"v-model",value:s.reigster.birth,expression:"reigster.birth"}],attrs:{type:"date",id:"date",name:"生日",required:""},domProps:{value:s.reigster.birth},on:{input:function(e){e.target.composing||s.$set(s.reigster,"birth",e.target.value)}}}),r("span",{staticClass:"errormsg"},[s._v(s._s(a[0]))])]}}],null,!0)})],1),r("div",{staticClass:"agreebox"},[r("label",{staticClass:"check_box",attrs:{for:"agree_post"}},[r("input",{attrs:{type:"checkbox",id:"agree_post"}}),r("span",{staticClass:"checkmark"}),r("p",[s._v("我同意收到電子郵報")])]),r("label",{staticClass:"check_box",attrs:{for:"agree_privacy"}},[r("input",{attrs:{type:"checkbox",id:"agree_privacy"}}),r("span",{staticClass:"checkmark"}),r("p",[s._v(" 我同意本站之 "),r("a",{attrs:{href:"javascript:;"}},[s._v("服務條款")]),s._v(" 及 "),r("a",{attrs:{href:"javascript:;"}},[s._v("隱私政策")])])])]),r("div",{staticClass:"signup"},[r("button",{attrs:{type:"submit",disabled:a}},[s._v("Sign Up 註冊會員")])])])]}}])})],1),r("div",{staticClass:"account-login"},[r("h1",[s._v("Sign in")]),r("ValidationObserver",{scopedSlots:s._u([{key:"default",fn:function(e){var a=e.invalid;return[r("form",{on:{submit:function(e){return e.preventDefault(),s.login(e)}}},[r("div",[r("ValidationProvider",{attrs:{rules:"email|required"},scopedSlots:s._u([{key:"default",fn:function(e){var a=e.errors;return[r("label",{attrs:{for:"account"}},[s._v("帳號 / 電子信箱")]),r("input",{directives:[{name:"model",rawName:"v-model",value:s.signin.mail,expression:"signin.mail"}],attrs:{id:"account",name:"電子信箱",type:"email",placeholder:"E-mail address",required:""},domProps:{value:s.signin.mail},on:{input:function(e){e.target.composing||s.$set(s.signin,"mail",e.target.value)}}}),r("span",{staticClass:"errormsg"},[s._v(s._s(a[0]))])]}}],null,!0)})],1),r("div",[r("ValidationProvider",{attrs:{rules:"min:6|max:12|required"},scopedSlots:s._u([{key:"default",fn:function(e){var a=e.errors;return[r("label",{attrs:{for:"password"}},[s._v("密碼")]),"checkbox"===s.ispassword_login?r("input",{directives:[{name:"model",rawName:"v-model",value:s.signin.password,expression:"signin.password"}],attrs:{id:"password",name:"密碼",placeholder:"Password",required:"",type:"checkbox"},domProps:{checked:Array.isArray(s.signin.password)?s._i(s.signin.password,null)>-1:s.signin.password},on:{change:function(e){var r=s.signin.password,a=e.target,i=!!a.checked;if(Array.isArray(r)){var t=null,o=s._i(r,t);a.checked?o<0&&s.$set(s.signin,"password",r.concat([t])):o>-1&&s.$set(s.signin,"password",r.slice(0,o).concat(r.slice(o+1)))}else s.$set(s.signin,"password",i)}}}):"radio"===s.ispassword_login?r("input",{directives:[{name:"model",rawName:"v-model",value:s.signin.password,expression:"signin.password"}],attrs:{id:"password",name:"密碼",placeholder:"Password",required:"",type:"radio"},domProps:{checked:s._q(s.signin.password,null)},on:{change:function(e){return s.$set(s.signin,"password",null)}}}):r("input",{directives:[{name:"model",rawName:"v-model",value:s.signin.password,expression:"signin.password"}],attrs:{id:"password",name:"密碼",placeholder:"Password",required:"",type:s.ispassword_login},domProps:{value:s.signin.password},on:{input:function(e){e.target.composing||s.$set(s.signin,"password",e.target.value)}}}),r("span",{staticClass:"errormsg"},[s._v(s._s(a[0]))]),r("div",{staticClass:"show_password"},[r("i",{staticClass:"fas fa-eye",class:{show:!s.login_isclick},on:{click:function(e){s.ispassword_login="text",s.login_isclick=!0}}}),r("i",{staticClass:"fas fa-eye-slash",class:{show:s.login_isclick},on:{click:function(e){s.ispassword_login="password",s.login_isclick=!1}}})])]}}],null,!0)})],1),r("div",{staticClass:"signin"},[r("a",{attrs:{href:"javascript:;"}},[s._v("忘記密碼")]),r("button",{attrs:{type:"submit",disabled:a}},[s._v("Login 登入會員")])])])]}}])})],1)])],1)},i=[function(){var s=this,e=s.$createElement,r=s._self._c||e;return r("div",{staticClass:"account-discount"},[r("div",{staticClass:"card"},[r("img",{attrs:{src:"https://hexschool-api.s3.us-west-2.amazonaws.com/custom/1qsqDfAYkYi3seNiQKMaVWAM7t4ouVJ4aeqcVlfUWraiQBpLLHWEOMXfGiRamZ6ial2DffGZ3D7Zkdf2OOUHVNh3RNwpsKbMWQw1zlseX9XmH0auPYiBaOUX75bHQTeK.png",alt:""}})]),r("div",{staticClass:"text"},[r("ul",[r("li",[s._v("註冊會員，立即享有 8 折優惠券一張")]),r("li",[s._v("成為會員，我們將會寄送會員卡給您")]),r("li",[s._v("會員每年生日當月可享有一份生日禮，及一張優惠券")]),r("li",[s._v("憑會員卡號，即可享有線上購物免運優惠")]),r("li",[s._v("不定期會員專屬活動及優惠")])])])])}],t={data:function(){return{ispassword_register:"password",ispassword_login:"password",register_isclick:!1,login_isclick:!1,isLoading:!1,reigster:{email:"",password:"",birth:"",gender:""},signin:{email:"",password:""}}},methods:{login:function(){var s=this;this.isLoading=!0,setTimeout((function(){s.isLoading=!1}),1500)}}},o=t,n=r("2877"),l=Object(n["a"])(o,a,i,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0a30be.8b4f9420.js.map