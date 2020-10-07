(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-154330fd"],{"45fc":function(t,i,s){"use strict";var o=s("23e7"),a=s("b727").some,e=s("a640"),c=s("ae40"),r=e("some"),d=c("some");o({target:"Array",proto:!0,forced:!r||!d},{some:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},"8a7d":function(t,i,s){"use strict";s.r(i);var o=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"product"},[s("loading",{attrs:{loader:"dots",active:t.isLoading},on:{"update:active":function(i){t.isLoading=i}}}),s("div",{staticClass:"product_area"},[s("div",{staticClass:"product_area_img"},[s("img",{attrs:{src:""+t.product.imageUrl[0],alt:""+t.product.title,title:""+t.product.title}})]),s("div",{staticClass:"product_area_detail"},[s("div",{staticClass:"product_area_detail_title"},[s("h1",[t._v(t._s(t.product.title))])]),s("div",{staticClass:"product_area_detail_price"},[s("span",[t._v(t._s(t.product.price))])]),s("hr"),t._m(0),s("div",{staticClass:"product_area_detail_quantity"},[s("div",[s("button",{attrs:{type:"button",disabled:1===t.product.quantity}},[t._v("-")])]),s("input",{attrs:{type:"text"},domProps:{value:t.product.quantity=1}}),t._m(1)]),s("div",{staticClass:"product_area_detail_addbag"},[s("button",{attrs:{type:"button"},on:{click:function(i){return t.addToCart(t.product)}}},[t._v("Add to Cart")])]),s("div",{staticClass:"product_area_detail_wishlist"},[s("button",{attrs:{type:"button"},on:{click:function(i){return t.addToWish(t.product)}}},[s("i",{staticClass:"far fa-heart"}),t._v(" Add to Wish List ")])]),s("div",{staticClass:"product_area_detail_remove",class:{show:t.isWishList}},[s("button",{attrs:{type:"button"},on:{click:function(i){return t.removeWish(t.product)}}},[s("i",{staticClass:"fas fa-heart"}),t._v(" Remove Wish List ")])]),s("hr"),s("div",{staticClass:"product_area_detail_navbar"},[s("ul",[s("li",[s("span",[t._v("商品描述 DESCRIPTION")]),s("p",[t._v(t._s(t.product.content))])]),s("li",[s("span",[t._v("注意事項 Notice")]),s("p",[t._v(t._s(t.product.description))])])])])])]),s("div",{staticClass:"product_morelook"},[s("h1",[t._v("More Look")]),s("div",{staticClass:"product_morelook_content"},t._l(t.relatedProducts,(function(i){return s("div",{key:i.id,staticClass:"product_morelook-list",on:{click:function(i){t.getProdcut(),t.getRelatedProducts()}}},[s("div",{staticClass:"product_morelook_img"},[s("router-link",{attrs:{to:"/product/"+i.id}},[s("img",{attrs:{src:""+i.imageUrl[0],alt:""}})])],1),s("div",[s("router-link",{staticClass:"product_morelook_title",attrs:{to:"/product/"+i.id}},[t._v(" "+t._s(i.title)+" ")])],1),s("div",{staticClass:"product_morelook_price"},[s("p",[t._v("NT."+t._s(i.price))])])])})),0)])],1)},a=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"product_area_detail_flavor"},[s("span",[t._v("Flavor:白麝香")])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("button",{attrs:{type:"button"}},[t._v("+")])])}],e=(s("99af"),s("4160"),s("c975"),s("45fc"),s("a434"),s("159b"),{data:function(){return{router:"",products:[],cart:[],product:{imageUrl:[]},relatedProducts:[],selectedProducts:[],isWishList:!1,wishid:[],wishlist:JSON.parse(localStorage.getItem("wishList"))||[],isLoading:!1}},methods:{getProducts:function(){var t=this;this.isLoading=!0,this.axios.get("".concat("https://course-ec-api.hexschool.io","/api/").concat("8e167757-8b00-4955-b28e-9494996b792d","/ec/products")).then((function(i){t.isLoading=!1,t.products=i.data.data})).catch((function(i){t.isLoading=!1,console.log(i)}))},getProdcut:function(){var t=this;this.isWishList=!1,this.isLoading=!0;var i=this.$route.params.id;this.axios.get("".concat("https://course-ec-api.hexschool.io","/api/").concat("8e167757-8b00-4955-b28e-9494996b792d","/ec/product/").concat(i)).then((function(i){t.isLoading=!1,t.product=i.data.data,t.wishlist.forEach((function(i){i.id===t.product.id&&(t.isWishList=!0),t.wishid.push(i.id)}))})).catch((function(i){console.log(i),t.isLoading=!1}))},getRelatedProducts:function(){var t=this;this.relatedProducts=[],this.selectedProducts=[];var i=this.$route.params.id,s="".concat("https://course-ec-api.hexschool.io","/api/").concat("8e167757-8b00-4955-b28e-9494996b792d","/ec/product/").concat(i);this.isLoading=!0,this.axios.get(s).then((function(i){if(t.products.forEach((function(s){s.category===i.data.data.category&&t.relatedProducts.push(s)})),t.relatedProducts.length>4)for(var s=0;s<4;s+=1){var o=Math.random()*t.relatedProducts.length;o=Math.floor(o),t.selectedProducts.push(t.relatedProducts[o]),t.relatedProducts.splice(o,1)}t.isLoading=!1}))},getCart:function(){var t=this;this.isLoading=!0,this.axios.get("".concat("https://course-ec-api.hexschool.io","/api/").concat("8e167757-8b00-4955-b28e-9494996b792d","/ec/shopping")).then((function(i){t.cart=i.data.data,t.subtotal=0,t.cart.forEach((function(i){t.subtotal+=i.product.price*i.quantity})),setTimeout((function(){t.isCartshow=!1}),1500),t.isLoading=!1})).catch((function(i){t.isLoading=!1,console.log(i)}))},addToCart:function(t){var i=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.isLoading=!0;var o="".concat("https://course-ec-api.hexschool.io","/api/").concat("8e167757-8b00-4955-b28e-9494996b792d","/ec/shopping"),a=this.cart.some((function(s){if(s.product.id===t.id){var a={product:t.id,quantity:s.quantity+1};i.axios.patch(o,a).then((function(){i.addcart=!0,i.$bus.$emit("addcart"),i.isLoading=!1})).catch((function(t){i.isLoading=!1,console.log(t)}))}return!0}));if(!a){var e={product:t.id,quantity:s};this.axios.post(o,e).then((function(){i.addcart=!0,i.$bus.$emit("addcart"),i.isLoading=!1})).catch((function(t){i.isLoading=!1,console.log(t)}))}},addToWish:function(t){this.isWishList=!0,this.wishlist.push(t),localStorage.setItem("wishList",JSON.stringify(this.wishlist))},removeWish:function(t){var i=this.wishid.indexOf(t.id);this.wishlist.splice(i,1),this.isWishList=!1,localStorage.setItem("wishList",JSON.stringify(this.wishlist))}},created:function(){this.getProdcut(),this.getRelatedProducts(),this.getProducts(),this.getCart()}}),c=e,r=s("2877"),d=Object(r["a"])(c,o,a,!1,null,null,null);i["default"]=d.exports},a434:function(t,i,s){"use strict";var o=s("23e7"),a=s("23cb"),e=s("a691"),c=s("50c4"),r=s("7b0b"),d=s("65f0"),n=s("8418"),u=s("1dde"),l=s("ae40"),h=u("splice"),p=l("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,g=Math.min,v=9007199254740991,_="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!h||!p},{splice:function(t,i){var s,o,u,l,h,p,m=r(this),b=c(m.length),C=a(t,b),L=arguments.length;if(0===L?s=o=0:1===L?(s=0,o=b-C):(s=L-2,o=g(f(e(i),0),b-C)),b+s-o>v)throw TypeError(_);for(u=d(m,o),l=0;l<o;l++)h=C+l,h in m&&n(u,l,m[h]);if(u.length=o,s<o){for(l=C;l<b-o;l++)h=l+o,p=l+s,h in m?m[p]=m[h]:delete m[p];for(l=b;l>b-o+s;l--)delete m[l-1]}else if(s>o)for(l=b-o;l>C;l--)h=l+o-1,p=l+s-1,h in m?m[p]=m[h]:delete m[p];for(l=0;l<s;l++)m[l+C]=arguments[l+2];return m.length=b-o+s,u}})},c975:function(t,i,s){"use strict";var o=s("23e7"),a=s("4d64").indexOf,e=s("a640"),c=s("ae40"),r=[].indexOf,d=!!r&&1/[1].indexOf(1,-0)<0,n=e("indexOf"),u=c("indexOf",{ACCESSORS:!0,1:0});o({target:"Array",proto:!0,forced:d||!n||!u},{indexOf:function(t){return d?r.apply(this,arguments)||0:a(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-154330fd.9bc9e2f2.js.map