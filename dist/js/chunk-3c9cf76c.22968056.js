(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c9cf76c"],{1799:function(t,a,o){"use strict";var i=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"pagination"},[o("a",{attrs:{href:"#"}},[t._v("«")]),t._l(t.page.total_pages,(function(a){return o("a",{key:a,attrs:{href:"#"},on:{click:function(o){return o.preventDefault(),t.updatePage(a)}}},[t._v(t._s(a))])})),o("a",{attrs:{href:"#"}},[t._v("»")])],2)},s=[],n={data:function(){return{}},props:["page"],methods:{updatePage:function(t){this.$emit("updatepage",t)}}},c=n,e=o("2877"),r=Object(e["a"])(c,i,s,!1,null,null,null);a["a"]=r.exports},"45fc":function(t,a,o){"use strict";var i=o("23e7"),s=o("b727").some,n=o("a640"),c=o("ae40"),e=n("some"),r=c("some");i({target:"Array",proto:!0,forced:!e||!r},{some:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},bd5a:function(t,a,o){"use strict";o.r(a);var i=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",[o("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),o("div",{staticClass:"products"},[t._l(t.showProducts,(function(a){return o("div",{key:a.id,staticClass:"products_list"},[o("div",{staticClass:"products_header"},[o("router-link",{attrs:{to:"/product/"+a.id}},[o("img",{staticClass:"products_header_img",attrs:{src:""+a.imageUrl[0],alt:""}}),o("button",{staticClass:"products_header_btn",attrs:{type:"button"}},[t._v("Quick View")])])],1),o("div",{staticClass:"products_container"},[o("div",[o("router-link",{staticClass:"products_container_title",attrs:{to:"/product/"+a.id}},[t._v(" "+t._s(a.title)+" ")])],1),o("div",{staticClass:"products_container_price"},[o("p",[t._v("NT$"+t._s(a.price))])])]),o("div",{staticClass:"products_footer"},[o("button",{staticClass:"products_footer_btn",attrs:{type:"button"},on:{click:function(o){return t.addToCart(a)}}},[t._v("Add To Cart")])])])})),o("div",{staticClass:"products-pagination"},[o("Pagination",{attrs:{page:t.pagination},on:{updatepage:t.getProducts}})],1)],2)],1)},s=[],n=(o("99af"),o("4160"),o("45fc"),o("159b"),o("1799")),c={components:{Pagination:n["a"]},data:function(){return{products:[],showProducts:[],cart:[],isLoading:!1,pagination:{},addcart:!1,isInCart:!1,router:""}},methods:{getProducts:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,o=this.$route.params.category;this.isLoading=!0,this.axios.get("".concat("https://course-ec-api.hexschool.io","/api/").concat("8e167757-8b00-4955-b28e-9494996b792d","/ec/products?page=").concat(a)).then((function(a){t.isLoading=!1,t.showProducts=[],t.products=a.data.data,t.pagination=a.data.meta.pagination,t.products.forEach((function(a){o===a.category?(t.showProducts.push(a),t.category=o):"all"===o&&(t.showProducts=t.products,t.category="All Products")})),t.showProducts.length<16&&(t.pagination.total_pages=1),t.isLoading=!1})).catch((function(a){t.isLoading=!1,console.log(a)}))},getCart:function(){var t=this;this.isLoading=!0,this.axios.get("".concat("https://course-ec-api.hexschool.io","/api/").concat("8e167757-8b00-4955-b28e-9494996b792d","/ec/shopping")).then((function(a){t.cart=a.data.data,t.isLoading=!1})).catch((function(a){t.isLoading=!1,console.log(a)}))},addToCart:function(t){var a=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.isLoading=!0;var i="".concat("https://course-ec-api.hexschool.io","/api/").concat("8e167757-8b00-4955-b28e-9494996b792d","/ec/shopping");if(this.isInCart=this.cart.some((function(o){if(o.product.id===t.id){var s={product:t.id,quantity:o.quantity+1};return a.axios.patch(i,s).then((function(){a.addcart=!0,a.getCart(),a.$bus.$emit("addcart"),a.isLoading=!1})).catch((function(t){a.isLoading=!1,console.log(t)})),!0}return!1})),!this.isInCart){var s={product:t.id,quantity:o};this.axios.post(i,s).then((function(){a.addcart=!0,a.getCart(),a.$bus.$emit("addcart"),a.isLoading=!1})).catch((function(t){a.isLoading=!1,console.log(t)}))}}},created:function(){var t=this;this.getProducts(),this.getCart(),this.$bus.$on("getproducts",(function(){t.getProducts()}))}},e=c,r=o("2877"),d=Object(r["a"])(e,i,s,!1,null,null,null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-3c9cf76c.22968056.js.map