(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2178dd"],{c6e9:function(t,a,o){"use strict";o.r(a);var e=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"checkorder"},[o("h1",[t._v("Shopping Cart")]),o("table",{staticClass:"checkorder_table"},[t._m(0),o("tbody",t._l(t.cart,(function(a){return o("tr",{key:a.id},[o("th",{staticClass:"order"},[o("div",{staticClass:"order"},[o("div",{staticClass:"order-img"},[o("img",{attrs:{src:a.product.imageUrl[0],alt:""}})]),o("div",{staticClass:"order-title"},[o("router-link",{attrs:{to:"/"}},[t._v(t._s(a.product.title))])],1)])]),o("th",[o("div",{staticClass:"checkorder_table_quantity"},[o("select",{directives:[{name:"model",rawName:"v-model",value:a.quantity,expression:"item.quantity"}],on:{change:[function(o){var e=Array.prototype.filter.call(o.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(a,"quantity",o.target.multiple?e:e[0])},function(o){return t.updateCart(a.product.id,a.quantity)}]}},[o("option",{attrs:{value:"1"}},[t._v("1")]),o("option",{attrs:{value:"2"}},[t._v("2")]),o("option",{attrs:{value:"3"}},[t._v("3")]),o("option",{attrs:{value:"4"}},[t._v("4")]),o("option",{attrs:{value:"5"}},[t._v("5")]),o("option",{attrs:{value:"6"}},[t._v("6")]),o("option",{attrs:{value:"7"}},[t._v("7")]),o("option",{attrs:{value:"8"}},[t._v("8")]),o("option",{attrs:{value:"9"}},[t._v("9")]),o("option",{attrs:{value:"10"}},[t._v("10")])])])]),o("th",[t._v(t._s(a.product.price))]),o("th",[t._v(t._s(t.subtotal))]),o("th",[o("button",{staticClass:"checkorder_table_remove",attrs:{type:"button"},on:{click:function(o){return t.removeCartItem(a.product.id)}}},[o("i",{staticClass:"far fa-trash-alt"})])])])})),0)]),t._m(1),o("div",{staticClass:"checkorder_total"},[o("ul",[o("li",[o("span",[t._v("Subtotal")]),o("span",[t._v(t._s(t.subtotal))])]),o("li",[o("span",[t._v("Shipping")]),o("span",[t._v(t._s(t.shipping))])]),o("li",[o("span",[t._v("Discount")]),o("span",[t._v(t._s(t.discount))])]),o("li",[o("span",[t._v("Total")]),o("span",[t._v(t._s(t.subtotal+t.shipping-t.discount))])])])]),o("div",{staticClass:"checkorder_btn"},[o("router-link",{staticClass:"checkorder_btn_back",attrs:{to:"/"}},[o("button",{attrs:{type:"button"}},[t._v("« Back to Shopping")])]),o("router-link",{staticClass:"checkorder_btn_next",attrs:{to:"/orderinfo"}},[o("button",{attrs:{type:"button"}},[t._v("Order »")])])],1)])},n=[function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("thead",[o("tr",[o("th",{attrs:{width:"50%"}},[t._v("商品資訊")]),o("th",[t._v("數量")]),o("th",[t._v("單價")]),o("th",[t._v("小計")]),o("th",[t._v("刪除")])])])},function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"checkorder_coupon"},[o("input",{attrs:{type:"text",placeholder:"Enter discount code"}}),o("button",{attrs:{type:"submit"}},[t._v("Apply")])])}],s=(o("99af"),o("4160"),o("159b"),{data:function(){return{cart:[],subtotal:0,shipping:60,discount:0}},methods:{getCart:function(){var t=this;this.axios.get("".concat("https://course-ec-api.hexschool.io","/api/").concat("8e167757-8b00-4955-b28e-9494996b792d","/ec/shopping")).then((function(a){console.log("ordercheck",a.data.data),t.cart=a.data.data,t.subtotal=0,t.cart.forEach((function(a){t.subtotal+=a.product.price*a.quantity}))})).catch((function(t){console.log(t)}))},updateCart:function(t,a){var o=this;console.log("orderupdate",t,a),this.isLoading=!0,console.log("update",t,a);var e="".concat("https://course-ec-api.hexschool.io","/api/").concat("8e167757-8b00-4955-b28e-9494996b792d","/ec/shopping"),n={product:t,quantity:a};this.axios.patch(e,n).then((function(t){console.log(t),o.getCart(),o.isLoading=!1})).catch((function(t){o.isLoading=!1,console.log(t)}))},removeCartItem:function(t){var a=this;this.isLoading=!0;var o="".concat("https://course-ec-api.hexschool.io","/api/").concat("8e167757-8b00-4955-b28e-9494996b792d","/ec/shopping/").concat(t);this.axios.delete(o).then((function(t){console.log(t),a.isLoading=!1,a.getCart()})).catch((function(t){a.isLoading=!1,console.log(t)}))}},created:function(){this.getCart()}}),i=s,c=o("2877"),r=Object(c["a"])(i,e,n,!1,null,null,null);a["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d2178dd.d04b074d.js.map