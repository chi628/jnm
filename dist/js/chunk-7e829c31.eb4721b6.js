(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e829c31"],{1799:function(t,o,a){"use strict";var s=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{staticClass:"pagination"},[a("a",{attrs:{href:"#"}},[t._v("«")]),t._l(t.page.total_pages,(function(o){return a("a",{key:o,attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.updatePage(o)}}},[t._v(t._s(o))])})),a("a",{attrs:{href:"#"}},[t._v("»")])],2)},i=[],n={data:function(){return{}},props:["page"],methods:{updatePage:function(t){this.$emit("updatepage",t)}}},c=n,e=a("2877"),r=Object(e["a"])(c,s,i,!1,null,null,null);o["a"]=r.exports},bd5a:function(t,o,a){"use strict";a.r(o);var s=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{staticClass:"products"},[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(o){t.isLoading=o}}}),t._l(t.showProducts,(function(o){return a("div",{key:o.id,staticClass:"products_list"},[a("div",{staticClass:"products_header"},[a("router-link",{attrs:{to:"/product/"+o.id}},[a("img",{staticClass:"products_header_img",attrs:{src:""+o.imageUrl[0],alt:""}}),a("button",{staticClass:"products_header_btn",attrs:{type:"button"}},[t._v("Quick View")])])],1),a("div",{staticClass:"products_container"},[a("div",[a("router-link",{staticClass:"products_container_title",attrs:{to:"/product/"+o.id}},[t._v(" "+t._s(o.title)+" ")])],1),a("div",{staticClass:"products_container_price"},[a("p",[t._v("NT$"+t._s(o.price))])])]),a("div",{staticClass:"products_footer"},[a("button",{staticClass:"products_footer_btn",attrs:{type:"button"},on:{click:function(a){return t.addToCart(o)}}},[t._v(" Add To Cart ")])])])})),a("div",{staticClass:"products-pagination"},[a("Pagination",{attrs:{page:t.pagination},on:{updatepage:t.getProducts}})],1)],2)},i=[],n=(a("99af"),a("4160"),a("b0c0"),a("159b"),a("1799")),c={components:{Pagination:n["a"]},data:function(){return{products:[],showProducts:[],isLoading:!1,pagination:{},addcart:!1,router:""}},methods:{getProducts:function(){var t=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=this.$route.params.category;this.isLoading=!0,this.axios.get("".concat("https://course-ec-api.hexschool.io","/api/").concat("8e167757-8b00-4955-b28e-9494996b792d","/ec/products?page=").concat(o,"&paged=12")).then((function(o){console.log(o.data),t.isLoading=!1,t.products=o.data.data,t.products.forEach((function(o){a===o.category?(console.log("category",a),t.showProducts.push(o),t.category=a):"all"===a&&(console.log("All-Products",a),t.showProducts=t.products,t.category="All Products")})),t.pagination=o.data.meta.pagination,t.isLoading=!1})).catch((function(o){t.isLoading=!1,console.log(o)}))},addToCart:function(t){var o=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.isLoading=!0;var s="".concat("https://course-ec-api.hexschool.io","/api/").concat("8e167757-8b00-4955-b28e-9494996b792d","/ec/shopping"),i={product:t.id,quantity:a};this.axios.post(s,i).then((function(t){o.isLoading=!1,o.addcart=!0,o.$bus.$emit("addcart"),console.log("item",t)})).catch((function(t){o.isLoading=!1,console.log(t)}))}},created:function(){var t=this;this.getProducts(),this.router=this.$router.history.current.name,this.$bus.$on("getproducts",(function(){console.log("products-router",t.router)}))}},e=c,r=a("2877"),u=Object(r["a"])(e,s,i,!1,null,null,null);o["default"]=u.exports}}]);
//# sourceMappingURL=chunk-7e829c31.eb4721b6.js.map