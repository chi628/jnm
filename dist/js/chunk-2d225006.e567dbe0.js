(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d225006"],{e313:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("Navbar"),t.checkedSuccess?o("router-view",{attrs:{token:t.token}}):t._e()],1)},c=[],s=(o("ac1f"),o("5319"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"navbar"},[o("h1",[t._v("後台管理")]),o("router-link",{attrs:{to:"/admin/products"}},[t._v("商品列表")]),t._v("| "),o("router-link",{attrs:{to:"/admin/coupons"}},[t._v("優惠券列表")]),t._v("| "),o("router-link",{attrs:{to:"/admin/storage"}},[t._v("圖片列表")]),t._v("| "),o("router-link",{attrs:{to:"/admin/orders"}},[t._v("訂單列表")]),t._v("| "),o("router-link",{attrs:{to:"/"}},[t._v("回到前台")])],1)}),r=[],a=o("2877"),i={},u=Object(a["a"])(i,s,r,!1,null,null,null),l=u.exports,h={components:{Navbar:l},data:function(){return{token:"",checkedSuccess:!1}},methods:{checkedToken:function(){var t=this;this.token=document.cookie.replace(/(?:(?:^|.*;\s*)MikoToken\s*=\s*([^;]*).*$)|^.*$/,"$1"),this.axios.defaults.headers.common.Authorization="Bearer ".concat(this.token),this.axios.post("".concat("https://course-ec-api.hexschool.io","/api/auth/check"),{api_token:this.token}).then((function(e){console.log("Authtoken",e),t.checkedSuccess=!0})).catch((function(e){console.log(e),t.$router.push("/")}))}},created:function(){this.checkedToken()}},k=h,d=Object(a["a"])(k,n,c,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d225006.e567dbe0.js.map