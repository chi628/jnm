(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d165227"],{1799:function(t,a,o){"use strict";var s=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"pagination"},[o("a",{attrs:{href:"#"}},[t._v("«")]),t._l(t.page.total_pages,(function(a){return o("a",{key:a,attrs:{href:"#"},on:{click:function(o){return o.preventDefault(),t.updatePage(a)}}},[t._v(t._s(a))])})),o("a",{attrs:{href:"#"}},[t._v("»")])],2)},i=[],n={data:function(){return{}},props:["page"],methods:{updatePage:function(t){this.$emit("updatepage",t)}}},r=n,c=o("2877"),e=Object(c["a"])(r,s,i,!1,null,null,null);a["a"]=e.exports},"45fc":function(t,a,o){"use strict";var s=o("23e7"),i=o("b727").some,n=o("a640"),r=o("ae40"),c=n("some"),e=r("some");s({target:"Array",proto:!0,forced:!c||!e},{some:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"7f48":function(t,a,o){"use strict";o.r(a);var s=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",[o("loading",{attrs:{loader:"dots",active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),o("Breadcrumbs",{attrs:{catergroy:t.category},on:{getproducts:t.getProducts}}),o("div",{staticClass:"products"},[t._l(t.showProducts,(function(a){return o("div",{key:a.id,staticClass:"products_list"},[o("div",{staticClass:"products_header"},[o("router-link",{attrs:{to:"/product/"+a.id}},[o("img",{staticClass:"products_header_img",attrs:{src:""+a.imageUrl[0],alt:""}}),o("button",{staticClass:"products_header_btn",attrs:{type:"button"}},[t._v("Quick View")])])],1),o("div",{staticClass:"products_container"},[o("div",[o("router-link",{staticClass:"products_container_title",attrs:{to:"/product/"+a.id}},[t._v(" "+t._s(a.title)+" ")])],1),o("div",{staticClass:"products_container_price"},[o("p",[t._v("NT$"+t._s(a.price))])])]),o("div",{staticClass:"products_footer"},[o("button",{staticClass:"products_footer_btn",attrs:{type:"button"},on:{click:function(o){return t.addToCart(a)}}},[t._v("Add To Cart")])])])})),o("div",{staticClass:"products-pagination"},[o("Pagination",{attrs:{page:t.pagination},on:{updatepage:t.getProducts}})],1)],2)],1)},i=[],n=(o("99af"),o("4160"),o("45fc"),o("159b"),o("1799")),r=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"breadcrumbs"},[o("ul",[o("li",{on:{click:function(a){return t.getProducts()}}},[o("router-link",{attrs:{to:"/products/all"}},[t._v("All Products")])],1),o("li",{staticClass:"breadcrumbs_now"},[t._v(t._s(t.catergroy))])])])},c=[],e={props:["catergroy"],data:function(){return{}},methods:{getProducts:function(){this.$emit("getproducts")}}},u=e,d=o("2877"),p=Object(d["a"])(u,r,c,!1,null,null,null),l=p.exports,g={components:{Pagination:n["a"],Breadcrumbs:l},data:function(){return{products:[],showProducts:[],cart:[],isLoading:!1,pagination:{},isInCart:!1,category:""}},methods:{getProducts:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.category=this.$route.params.category,this.isLoading=!0,this.axios.get("".concat("https://course-ec-api.hexschool.io","/api/").concat("8e167757-8b00-4955-b28e-9494996b792d","/ec/products?page=").concat(a)).then((function(a){t.isLoading=!1,t.showProducts=[],t.products=a.data.data,t.pagination=a.data.meta.pagination,t.products.forEach((function(a){t.category===a.category?(t.showProducts.push(a),t.category=a.category):"all"===t.category&&(t.showProducts=t.products)})),t.showProducts.length<16&&(t.pagination.total_pages=1),t.isLoading=!1})).catch((function(){t.isLoading=!1}))},addToCart:function(t){var a=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.isLoading=!0;var s="".concat("https://course-ec-api.hexschool.io","/api/").concat("8e167757-8b00-4955-b28e-9494996b792d","/ec/shopping");if(this.isInCart=this.cart.some((function(o){if(o.product.id===t.id){var i={product:t.id,quantity:o.quantity+1};return a.axios.patch(s,i).then((function(){a.$bus.$emit("getcart"),a.isLoading=!1})).catch((function(){a.isLoading=!1})),!0}return!1})),!this.isInCart){var i={product:t.id,quantity:o};this.axios.post(s,i).then((function(){a.$bus.$emit("getcart"),a.isLoading=!1})).catch((function(t){a.isLoading=!1,console.log(t)}))}}},created:function(){var t=this;this.getProducts(),this.$bus.$on("getproducts",(function(){t.getProducts()})),this.$bus.$on("getcarts",(function(a){t.cart=a})),this.$bus.$on("addtocart",(function(a){t.addToCart(a)}))},beforeDestroy:function(){this.$bus.$off("specialEvent")}},h=g,f=Object(d["a"])(h,s,i,!1,null,null,null);a["default"]=f.exports}}]);
//# sourceMappingURL=chunk-3d165227.cebec73f.js.map