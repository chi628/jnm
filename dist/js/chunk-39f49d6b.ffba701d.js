(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39f49d6b"],{"057f":function(t,e,o){var a=o("fc6a"),n=o("241c").f,r={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return n(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==r.call(t)?c(t):n(a(t))}},1799:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"pagination"},[o("a",{attrs:{href:"#"}},[t._v("«")]),t._l(t.page.total_pages,(function(e){return o("a",{key:e,attrs:{href:"#"},on:{click:function(o){return o.preventDefault(),t.updatePage(e)}}},[t._v(t._s(e))])})),o("a",{attrs:{href:"#"}},[t._v("»")])],2)},n=[],r={data:function(){return{}},props:["page"],methods:{updatePage:function(t){this.$emit("updatepage",t)}}},i=r,c=o("2877"),s=Object(c["a"])(i,a,n,!1,null,null,null);e["a"]=s.exports},5530:function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));o("a4d3"),o("4de4"),o("4160"),o("e439"),o("dbb4"),o("b64b"),o("159b");function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function n(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,a)}return o}function r(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?n(Object(o),!0).forEach((function(e){a(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}},"61bc":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"backend"},[o("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),o("Modal",{attrs:{isNew:t.isNew,openmodal:t.showModal,tempProduct:t.tempProduct},on:{addproduct:t.addProduct,updateproduct:t.updateProduct,closemodal:t.closeModal}}),o("DelModal",{attrs:{tempProduct:t.tempProduct,opendelmodal:t.showDelModal},on:{deleteproduct:t.deleteProduct,closedelmodal:t.closeDelModal}}),o("div",{staticClass:"container"},[o("h1",[t._v("Products")]),o("button",{staticClass:"addbtn",attrs:{type:"button"},on:{click:function(e){return t.openModal("new")}}},[t._v("新增產品")]),o("table",[t._m(0),o("tbody",t._l(t.products,(function(e){return o("tr",{key:e.id},[o("td",[t._v(t._s(e.category))]),o("td",[t._v(t._s(e.title))]),o("td",[o("img",{attrs:{src:e.imageUrl[0],alt:""}})]),o("td",[t._v(t._s(e.price))]),o("td",[o("label",{staticClass:"container"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.enabled,expression:"item.enabled"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.enabled)?t._i(e.enabled,null)>-1:e.enabled},on:{change:function(o){var a=e.enabled,n=o.target,r=!!n.checked;if(Array.isArray(a)){var i=null,c=t._i(a,i);n.checked?c<0&&t.$set(e,"enabled",a.concat([i])):c>-1&&t.$set(e,"enabled",a.slice(0,c).concat(a.slice(c+1)))}else t.$set(e,"enabled",r)}}}),o("span",{staticClass:"checkmark"}),o("p",[t._v("上架")])])]),o("td",[o("button",{staticClass:"editbtn",attrs:{type:"button"},on:{click:function(o){return t.openModal("edit",e)}}},[t._v(" Edit ")]),o("button",{staticClass:"delbtn",attrs:{type:"button"},on:{click:function(o){return t.openModal("delete",e)}}},[t._v(" Delete ")])])])})),0)]),o("Pagination",{attrs:{page:t.pagination},on:{updatepage:t.getProducts}})],1)],1)},n=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("thead",[o("tr",[o("th",[t._v("Category")]),o("th",[t._v("Brand")]),o("th",[t._v("Image")]),o("th",[t._v("Price")]),o("th",[t._v("Enabled")]),o("th",[t._v("Edit / Delete")])])])}],r=(o("99af"),o("ac1f"),o("5319"),o("5530")),i=o("1799"),c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"modal",class:{show:t.openmodal}},[o("div",{staticClass:"modal-header"},[o("div",[t.isNew?o("h1",[t._v("新增產品")]):o("h1",[t._v("編輯產品")])]),o("div",{staticClass:"modal-header-close"},[o("button",{attrs:{type:"button"},on:{click:t.closeModal}},[o("span",[t._v("×")])])])]),o("div",{staticClass:"modal-body"},[o("div",{staticClass:"modal-body-img"},[t._l(5,(function(e){return o("div",{key:e+"img",staticClass:"form-group"},[o("label",{attrs:{for:"img"+e}},[t._v("輸入圖片網址")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.imageUrl[e-1],expression:"tempProduct.imageUrl[i - 1]"}],staticClass:"form-control",attrs:{id:"img"+e,type:"text",placeholder:"請輸入圖片連結"},domProps:{value:t.tempProduct.imageUrl[e-1]},on:{input:function(o){o.target.composing||t.$set(t.tempProduct.imageUrl,e-1,o.target.value)}}})])})),o("div",[o("label",{attrs:{for:"uploadimg"}},[t._v("或 上傳圖片 "),t.status.fileUploading?o("i",{staticClass:"fas fa-spinner fa-spin"}):t._e()]),o("input",{ref:"file",attrs:{id:"uploadimg",type:"file"},on:{change:t.uploadFile}})]),o("div",{staticClass:"modal-body-img-show"},[o("img",{attrs:{src:t.tempProduct.imageUrl[0],alt:""}})])],2),o("div",{staticClass:"modal-body-content"},[o("div",{staticClass:"modal-body-content-title"},[o("div",[o("label",{attrs:{for:"title"}},[t._v("產品名稱")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.title,expression:"tempProduct.title"}],attrs:{id:"title",type:"text",placeholder:"請輸入產品名稱"},domProps:{value:t.tempProduct.title},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"title",e.target.value)}}})]),o("div",[o("label",{attrs:{for:"category"}},[t._v("類別")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.category,expression:"tempProduct.category"}],attrs:{id:"category",type:"text",list:"items",required:""},domProps:{value:t.tempProduct.category},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"category",e.target.value)}}}),t._m(0)]),o("div",[o("div",[o("label",{attrs:{for:"price"}},[t._v("售價")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.price,expression:"tempProduct.price"}],attrs:{id:"price",type:"number",placeholder:"請輸入售價"},domProps:{value:t.tempProduct.price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"price",e.target.value)}}})])])]),o("div",{staticClass:"modal-body-describe"},[o("div",[o("label",{attrs:{for:"description"}},[t._v("產品描述")]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.description,expression:"tempProduct.description"}],attrs:{id:"description",type:"text",placeholder:"請輸入商品描述"},domProps:{value:t.tempProduct.description},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"description",e.target.value)}}})]),o("div",[o("label",{attrs:{for:"content"}},[t._v("注意事項")]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.content,expression:"tempProduct.content"}],attrs:{id:"content",type:"text",placeholder:"請輸入注意事項"},domProps:{value:t.tempProduct.content},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"content",e.target.value)}}})]),o("div",[o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.enabled,expression:"tempProduct.enabled"}],attrs:{id:"is_enabled",type:"checkbox"},domProps:{checked:Array.isArray(t.tempProduct.enabled)?t._i(t.tempProduct.enabled,null)>-1:t.tempProduct.enabled},on:{change:function(e){var o=t.tempProduct.enabled,a=e.target,n=!!a.checked;if(Array.isArray(o)){var r=null,i=t._i(o,r);a.checked?i<0&&t.$set(t.tempProduct,"enabled",o.concat([r])):i>-1&&t.$set(t.tempProduct,"enabled",o.slice(0,i).concat(o.slice(i+1)))}else t.$set(t.tempProduct,"enabled",n)}}}),o("label",{attrs:{for:"is_enabled"}},[t._v(" 是否啟用 ")])])])])])]),o("div",{staticClass:"modal-footer"},[o("button",{staticClass:"modal-footer-close",attrs:{type:"button"},on:{click:t.closeModal}},[t._v(" 關閉 ")]),t.isNew?o("button",{staticClass:"modal-footer-sure",attrs:{type:"button"},on:{click:t.addProduct}},[t._v(" 確認新增 ")]):o("button",{staticClass:"modal-footer-sure",attrs:{type:"button"},on:{click:function(e){return t.updateProduct(t.tempProduct.id)}}},[t._v(" 確定更新 ")])])])},s=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("datalist",{attrs:{name:"類別",id:"items"}},[o("option",{attrs:{value:"candle"}},[t._v("大豆蠟燭")]),o("option",{attrs:{value:"oil"}},[t._v("香氛精油")]),o("option",{attrs:{value:"diffuse"}},[t._v("香氛擴香")]),o("option",{attrs:{value:"jar"}},[t._v("香氛香膏")])])}],d={props:["isNew","openmodal","tempProduct"],data:function(){return{tempproduct:{imageUrl:[]},status:{fileUploading:!1}}},methods:{addProduct:function(){this.$emit("addproduct")},updateProduct:function(t){this.$emit("updateproduct",t)},closeModal:function(){this.$emit("closemodal")},uploadFile:function(){var t=this,e=this.$refs.file.files[0],o=new FormData;o.append("file",e);var a="".concat("https://course-ec-api.hexschool.io","/api/").concat("8e167757-8b00-4955-b28e-9494996b792d","/admin/storage");this.status.fileUploading=!0,this.axios.post(a,o,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){t.status.fileUploading=!1,200===e.status&&t.tempProduct.imageUrl.push(e.data.data.path)})).catch((function(){t.status.fileUploading=!1}))}}},l=d,u=o("2877"),p=Object(u["a"])(l,c,s,!1,null,null,null),f=p.exports,m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"delete_modal",class:{show:t.opendelmodal}},[o("div",{staticClass:"delete_modal-header"},[o("h1",[t._v("刪除產品")]),o("button",{staticClass:"delete_modal-header-close",attrs:{type:"button"},on:{click:t.closeDelModal}},[o("span",[t._v("×")])])]),o("div",{staticClass:"delete_modal-body"},[o("p",[t._v(" 是否刪除 "),o("strong",[t._v(t._s(t.tempProduct.title))]),t._v(" (刪除後將無法恢復)。")])]),o("div",{staticClass:"delete_modal-footer"},[o("button",{staticClass:"delete_modal-footer-close",attrs:{type:"button"},on:{click:t.closeDelModal}},[t._v("Close")]),o("button",{staticClass:"modal-footer-sure",attrs:{type:"button"},on:{click:function(e){return t.deleteProduct(t.tempProduct.id)}}},[t._v("確認刪除")])])])},h=[],b={props:["opendelmodal","tempProduct"],methods:{closeDelModal:function(){this.$emit("closedelmodal")},deleteProduct:function(t){this.$emit("deleteproduct",t)}}},v=b,g=Object(u["a"])(v,m,h,!1,null,null,null),P=g.exports,y={components:{Pagination:i["a"],Modal:f,DelModal:P},data:function(){return{products:[],tempProduct:{imageUrl:[]},isNew:!1,showModal:!1,showDelModal:!1,token:"",isLoading:!1,pagination:{}}},props:[" token"],methods:{getProducts:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0,this.axios.get("".concat("https://course-ec-api.hexschool.io","/api/").concat("8e167757-8b00-4955-b28e-9494996b792d","/admin/ec/products?page=").concat(e)).then((function(e){t.isLoading=!1,t.products=e.data.data,t.pagination=e.data.meta.pagination,console.log("admin/products",t.pagination)})).catch((function(e){t.isLoading=!1,console.log("err",e.response.data.message)}))},getProduct:function(t){var e=this;this.isLoading=!0,this.axios.get("".concat("https://course-ec-api.hexschool.io","/api/").concat("8e167757-8b00-4955-b28e-9494996b792d","/admin/ec/product/").concat(t)).then((function(t){e.isLoading=!1,e.tempProduct=t.data.data})).catch((function(t){e.isLoading=!1,console.log(t.response.data.message)}))},addProduct:function(){var t=this;this.isLoading=!0,this.axios.post("".concat("https://course-ec-api.hexschool.io","/api/").concat("8e167757-8b00-4955-b28e-9494996b792d","/admin/ec/product"),this.tempProduct).then((function(){t.isLoading=!1,t.getProducts(),t.closeModal()})).catch((function(e){t.isLoading=!1,console.log(e.response.data.message)}))},updateProduct:function(t){var e=this;this.isLoading=!0,this.axios.patch("".concat("https://course-ec-api.hexschool.io","/api/").concat("8e167757-8b00-4955-b28e-9494996b792d","/admin/ec/product/").concat(t),this.tempProduct).then((function(){e.isLoading=!1,e.getProducts(),e.closeModal()})).catch((function(t){e.isLoading=!1,console.log(t.response.data.message)})),this.tempProduct={imageUrl:[]}},deleteProduct:function(){var t=this;this.isLoading=!0,this.axios.delete("".concat("https://course-ec-api.hexschool.io","/api/").concat("8e167757-8b00-4955-b28e-9494996b792d","/admin/ec/product/").concat(this.tempProduct.id)).then((function(){t.isLoading=!1,t.showDelModal=!1,t.getProducts()})).catch((function(e){t.isLoading=!1,console.log(e.response.data.message)})),this.tempProduct={imageUrl:[]}},openModal:function(t,e){switch(t){case"new":this.isNew=!0,this.showModal=!0,this.tempProduct={imageUrl:[]};break;case"edit":this.isNew=!1,this.tempProduct=JSON.parse(JSON.stringify(e)),this.getProduct(this.tempProduct.id),this.showModal=!0;break;case"delete":this.tempProduct=Object(r["a"])({},e),this.showDelModal=!0;break;default:break}},closeModal:function(){this.showModal=!1},closeDelModal:function(){this.showDelModal=!1}},created:function(){this.token=document.cookie.replace(/(?:(?:^|.*;\s*)MikoToken\s*=\s*([^;]*).*$)|^.*$/,"$1"),this.axios.defaults.headers.common.Authorization="Bearer ".concat(this.token),this.getProducts()}},_=y,w=Object(u["a"])(_,a,n,!1,null,null,null);e["default"]=w.exports},"746f":function(t,e,o){var a=o("428f"),n=o("5135"),r=o("e538"),i=o("9bf2").f;t.exports=function(t){var e=a.Symbol||(a.Symbol={});n(e,t)||i(e,t,{value:r.f(t)})}},a4d3:function(t,e,o){"use strict";var a=o("23e7"),n=o("da84"),r=o("d066"),i=o("c430"),c=o("83ab"),s=o("4930"),d=o("fdbf"),l=o("d039"),u=o("5135"),p=o("e8b5"),f=o("861d"),m=o("825a"),h=o("7b0b"),b=o("fc6a"),v=o("c04e"),g=o("5c6c"),P=o("7c73"),y=o("df75"),_=o("241c"),w=o("057f"),O=o("7418"),k=o("06cf"),x=o("9bf2"),C=o("d1e7"),j=o("9112"),M=o("6eeb"),$=o("5692"),D=o("f772"),N=o("d012"),S=o("90e3"),L=o("b622"),U=o("e538"),E=o("746f"),A=o("d44e"),J=o("69f3"),F=o("b727").forEach,T=D("hidden"),B="Symbol",I="prototype",q=L("toPrimitive"),z=J.set,Q=J.getterFor(B),W=Object[I],G=n.Symbol,H=r("JSON","stringify"),K=k.f,R=x.f,V=w.f,X=C.f,Y=$("symbols"),Z=$("op-symbols"),tt=$("string-to-symbol-registry"),et=$("symbol-to-string-registry"),ot=$("wks"),at=n.QObject,nt=!at||!at[I]||!at[I].findChild,rt=c&&l((function(){return 7!=P(R({},"a",{get:function(){return R(this,"a",{value:7}).a}})).a}))?function(t,e,o){var a=K(W,e);a&&delete W[e],R(t,e,o),a&&t!==W&&R(W,e,a)}:R,it=function(t,e){var o=Y[t]=P(G[I]);return z(o,{type:B,tag:t,description:e}),c||(o.description=e),o},ct=d?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof G},st=function(t,e,o){t===W&&st(Z,e,o),m(t);var a=v(e,!0);return m(o),u(Y,a)?(o.enumerable?(u(t,T)&&t[T][a]&&(t[T][a]=!1),o=P(o,{enumerable:g(0,!1)})):(u(t,T)||R(t,T,g(1,{})),t[T][a]=!0),rt(t,a,o)):R(t,a,o)},dt=function(t,e){m(t);var o=b(e),a=y(o).concat(mt(o));return F(a,(function(e){c&&!ut.call(o,e)||st(t,e,o[e])})),t},lt=function(t,e){return void 0===e?P(t):dt(P(t),e)},ut=function(t){var e=v(t,!0),o=X.call(this,e);return!(this===W&&u(Y,e)&&!u(Z,e))&&(!(o||!u(this,e)||!u(Y,e)||u(this,T)&&this[T][e])||o)},pt=function(t,e){var o=b(t),a=v(e,!0);if(o!==W||!u(Y,a)||u(Z,a)){var n=K(o,a);return!n||!u(Y,a)||u(o,T)&&o[T][a]||(n.enumerable=!0),n}},ft=function(t){var e=V(b(t)),o=[];return F(e,(function(t){u(Y,t)||u(N,t)||o.push(t)})),o},mt=function(t){var e=t===W,o=V(e?Z:b(t)),a=[];return F(o,(function(t){!u(Y,t)||e&&!u(W,t)||a.push(Y[t])})),a};if(s||(G=function(){if(this instanceof G)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=S(t),o=function(t){this===W&&o.call(Z,t),u(this,T)&&u(this[T],e)&&(this[T][e]=!1),rt(this,e,g(1,t))};return c&&nt&&rt(W,e,{configurable:!0,set:o}),it(e,t)},M(G[I],"toString",(function(){return Q(this).tag})),M(G,"withoutSetter",(function(t){return it(S(t),t)})),C.f=ut,x.f=st,k.f=pt,_.f=w.f=ft,O.f=mt,U.f=function(t){return it(L(t),t)},c&&(R(G[I],"description",{configurable:!0,get:function(){return Q(this).description}}),i||M(W,"propertyIsEnumerable",ut,{unsafe:!0}))),a({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:G}),F(y(ot),(function(t){E(t)})),a({target:B,stat:!0,forced:!s},{for:function(t){var e=String(t);if(u(tt,e))return tt[e];var o=G(e);return tt[e]=o,et[o]=e,o},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(u(et,t))return et[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),a({target:"Object",stat:!0,forced:!s,sham:!c},{create:lt,defineProperty:st,defineProperties:dt,getOwnPropertyDescriptor:pt}),a({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:ft,getOwnPropertySymbols:mt}),a({target:"Object",stat:!0,forced:l((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(h(t))}}),H){var ht=!s||l((function(){var t=G();return"[null]"!=H([t])||"{}"!=H({a:t})||"{}"!=H(Object(t))}));a({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,o){var a,n=[t],r=1;while(arguments.length>r)n.push(arguments[r++]);if(a=e,(f(e)||void 0!==t)&&!ct(t))return p(e)||(e=function(t,e){if("function"==typeof a&&(e=a.call(this,t,e)),!ct(e))return e}),n[1]=e,H.apply(null,n)}})}G[I][q]||j(G[I],q,G[I].valueOf),A(G,B),N[T]=!0},b64b:function(t,e,o){var a=o("23e7"),n=o("7b0b"),r=o("df75"),i=o("d039"),c=i((function(){r(1)}));a({target:"Object",stat:!0,forced:c},{keys:function(t){return r(n(t))}})},dbb4:function(t,e,o){var a=o("23e7"),n=o("83ab"),r=o("56ef"),i=o("fc6a"),c=o("06cf"),s=o("8418");a({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){var e,o,a=i(t),n=c.f,d=r(a),l={},u=0;while(d.length>u)o=n(a,e=d[u++]),void 0!==o&&s(l,e,o);return l}})},e439:function(t,e,o){var a=o("23e7"),n=o("d039"),r=o("fc6a"),i=o("06cf").f,c=o("83ab"),s=n((function(){i(1)})),d=!c||s;a({target:"Object",stat:!0,forced:d,sham:!c},{getOwnPropertyDescriptor:function(t,e){return i(r(t),e)}})},e538:function(t,e,o){var a=o("b622");e.f=a}}]);
//# sourceMappingURL=chunk-39f49d6b.ffba701d.js.map