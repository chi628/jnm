(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48801140"],{"057f":function(t,e,n){var o=n("fc6a"),i=n("241c").f,a={}.toString,r="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return i(t)}catch(e){return r.slice()}};t.exports.f=function(t){return r&&"[object Window]"==a.call(t)?c(t):i(o(t))}},1799:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination"},[n("a",{attrs:{href:"#"}},[t._v("«")]),t._l(t.page.total_pages,(function(e){return n("a",{key:e,attrs:{href:"#"},on:{click:function(n){return n.preventDefault(),t.updatePage(e)}}},[t._v(t._s(e))])})),n("a",{attrs:{href:"#"}},[t._v("»")])],2)},i=[],a={data:function(){return{}},props:["page"],methods:{updatePage:function(t){this.$emit("updatepage",t)}}},r=a,c=n("2877"),s=Object(c["a"])(r,o,i,!1,null,null,null);e["a"]=s.exports},"4de4":function(t,e,n){"use strict";var o=n("23e7"),i=n("b727").filter,a=n("1dde"),r=n("ae40"),c=a("filter"),s=r("filter");o({target:"Array",proto:!0,forced:!c||!s},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},"746f":function(t,e,n){var o=n("428f"),i=n("5135"),a=n("e538"),r=n("9bf2").f;t.exports=function(t){var e=o.Symbol||(o.Symbol={});i(e,t)||r(e,t,{value:a.f(t)})}},7749:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"storage"},[n("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),n("div",{staticClass:"container"},[n("div",{staticClass:"uploadnew"},[n("label",{staticClass:"uploadbtn"},[t._v("上傳圖片 "),n("input",{staticStyle:{display:"none"},attrs:{id:"customFile",type:"file"},on:{change:t.uploadFile}}),n("i",{staticClass:"fa fa-photo"}),t.status.fileUploading?n("i",{staticClass:"fas fa-spinner fa-spin"}):t._e()])]),n("table",[t._m(0),n("tbody",t._l(t.storages,(function(e){return n("tr",{key:e.id},[n("td",[n("img",{attrs:{src:e.path,alt:""}})]),n("td",[n("div",{staticClass:"storage-del"},[n("button",{attrs:{type:"button"},on:{click:function(n){return t.openModel(e)}}},[t._v("刪除")])])])])})),0)]),n("Pagination",{attrs:{page:t.pagination},on:{updatepage:t.getFile}})],1),n("div",{staticClass:"delmodal",class:{show:t.opendelmodal}},[n("div",{staticClass:"delmodal-header"},[n("h1",[t._v("刪除資料")]),n("div",{staticClass:"delmodal-header-close"},[n("button",{attrs:{type:"button"},on:{click:function(e){t.opendelmodal=!1}}},[n("span",[t._v("×")])])])]),t._m(1),n("div",{staticClass:"delmodal-footer"},[n("button",{staticClass:"delmodal-footer-close",attrs:{type:"button"},on:{click:function(e){t.opendelmodal=!1}}},[t._v("Close")]),n("button",{staticClass:"delmodal-footer-sure",attrs:{type:"button"},on:{click:t.deleteData}},[t._v("確認刪除")])])])],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{attrs:{width:"50%"}},[t._v("圖片縮圖")]),n("th",{attrs:{width:"50%"}},[t._v("編輯")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"delmodal-body"},[n("p",[t._v("刪除後將無法恢復，是否確定要刪除。")])])}],a=(n("99af"),n("5530")),r=n("1799"),c={name:"Storage",components:{Pagination:r["a"]},data:function(){return{storages:{},tempData:{},pagination:{},isLoading:!1,token:"",opendelmodal:!1,status:{fileUploading:!1}}},props:[" token"],created:function(){this.getFile()},methods:{uploadFile:function(){var t=this;this.isLoading=!0;var e=document.querySelector("#customFile").files[0],n=new FormData;n.append("file",e),this.status.fileUploading=!0,this.axios.post("".concat("https://course-ec-api.hexschool.io","/api/").concat("8e167757-8b00-4955-b28e-9494996b792d","/admin/storage"),n,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){t.isLoading=!1,t.status.fileUploading=!1,t.getFile(),console.log(e)})).catch((function(e){t.isLoading=!1,t.status.fileUploading=!1,console.log(e)}))},getFile:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0,this.axios.get("".concat("https://course-ec-api.hexschool.io","/api/").concat("8e167757-8b00-4955-b28e-9494996b792d","/admin/storage?page=").concat(e)).then((function(e){t.isLoading=!1,t.storages=e.data.data,t.pagination=e.data.meta.pagination})).catch((function(e){t.isLoading=!1,console.log(e)}))},deleteData:function(){var t=this;this.isLoading=!0,this.axios.delete("".concat("https://course-ec-api.hexschool.io","/api/").concat("8e167757-8b00-4955-b28e-9494996b792d","/admin/storage/").concat(this.tempData.id)).then((function(e){console.log("deletesucess",e),t.isLoading=!1,t.getFile(),t.opendelmodal=!1})).catch((function(e){console.log("刪除失敗",e),t.isLoading=!1}))},openModel:function(t){this.tempData=Object(a["a"])({},t),this.opendelmodal=!0}}},s=c,u=n("2877"),f=Object(u["a"])(s,o,i,!1,null,null,null);e["default"]=f.exports},a4d3:function(t,e,n){"use strict";var o=n("23e7"),i=n("da84"),a=n("d066"),r=n("c430"),c=n("83ab"),s=n("4930"),u=n("fdbf"),f=n("d039"),l=n("5135"),d=n("e8b5"),p=n("861d"),b=n("825a"),g=n("7b0b"),h=n("fc6a"),v=n("c04e"),m=n("5c6c"),y=n("7c73"),O=n("df75"),w=n("241c"),j=n("057f"),_=n("7418"),P=n("06cf"),S=n("9bf2"),C=n("d1e7"),k=n("9112"),D=n("6eeb"),L=n("5692"),F=n("f772"),x=n("d012"),E=n("90e3"),N=n("b622"),U=n("e538"),$=n("746f"),J=n("d44e"),T=n("69f3"),M=n("b727").forEach,q=F("hidden"),A="Symbol",I="prototype",Q=N("toPrimitive"),W=T.set,z=T.getterFor(A),B=Object[I],G=i.Symbol,H=a("JSON","stringify"),K=P.f,R=S.f,V=j.f,X=C.f,Y=L("symbols"),Z=L("op-symbols"),tt=L("string-to-symbol-registry"),et=L("symbol-to-string-registry"),nt=L("wks"),ot=i.QObject,it=!ot||!ot[I]||!ot[I].findChild,at=c&&f((function(){return 7!=y(R({},"a",{get:function(){return R(this,"a",{value:7}).a}})).a}))?function(t,e,n){var o=K(B,e);o&&delete B[e],R(t,e,n),o&&t!==B&&R(B,e,o)}:R,rt=function(t,e){var n=Y[t]=y(G[I]);return W(n,{type:A,tag:t,description:e}),c||(n.description=e),n},ct=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof G},st=function(t,e,n){t===B&&st(Z,e,n),b(t);var o=v(e,!0);return b(n),l(Y,o)?(n.enumerable?(l(t,q)&&t[q][o]&&(t[q][o]=!1),n=y(n,{enumerable:m(0,!1)})):(l(t,q)||R(t,q,m(1,{})),t[q][o]=!0),at(t,o,n)):R(t,o,n)},ut=function(t,e){b(t);var n=h(e),o=O(n).concat(bt(n));return M(o,(function(e){c&&!lt.call(n,e)||st(t,e,n[e])})),t},ft=function(t,e){return void 0===e?y(t):ut(y(t),e)},lt=function(t){var e=v(t,!0),n=X.call(this,e);return!(this===B&&l(Y,e)&&!l(Z,e))&&(!(n||!l(this,e)||!l(Y,e)||l(this,q)&&this[q][e])||n)},dt=function(t,e){var n=h(t),o=v(e,!0);if(n!==B||!l(Y,o)||l(Z,o)){var i=K(n,o);return!i||!l(Y,o)||l(n,q)&&n[q][o]||(i.enumerable=!0),i}},pt=function(t){var e=V(h(t)),n=[];return M(e,(function(t){l(Y,t)||l(x,t)||n.push(t)})),n},bt=function(t){var e=t===B,n=V(e?Z:h(t)),o=[];return M(n,(function(t){!l(Y,t)||e&&!l(B,t)||o.push(Y[t])})),o};if(s||(G=function(){if(this instanceof G)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=E(t),n=function(t){this===B&&n.call(Z,t),l(this,q)&&l(this[q],e)&&(this[q][e]=!1),at(this,e,m(1,t))};return c&&it&&at(B,e,{configurable:!0,set:n}),rt(e,t)},D(G[I],"toString",(function(){return z(this).tag})),D(G,"withoutSetter",(function(t){return rt(E(t),t)})),C.f=lt,S.f=st,P.f=dt,w.f=j.f=pt,_.f=bt,U.f=function(t){return rt(N(t),t)},c&&(R(G[I],"description",{configurable:!0,get:function(){return z(this).description}}),r||D(B,"propertyIsEnumerable",lt,{unsafe:!0}))),o({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:G}),M(O(nt),(function(t){$(t)})),o({target:A,stat:!0,forced:!s},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var n=G(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),o({target:"Object",stat:!0,forced:!s,sham:!c},{create:ft,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:dt}),o({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:pt,getOwnPropertySymbols:bt}),o({target:"Object",stat:!0,forced:f((function(){_.f(1)}))},{getOwnPropertySymbols:function(t){return _.f(g(t))}}),H){var gt=!s||f((function(){var t=G();return"[null]"!=H([t])||"{}"!=H({a:t})||"{}"!=H(Object(t))}));o({target:"JSON",stat:!0,forced:gt},{stringify:function(t,e,n){var o,i=[t],a=1;while(arguments.length>a)i.push(arguments[a++]);if(o=e,(p(e)||void 0!==t)&&!ct(t))return d(e)||(e=function(t,e){if("function"==typeof o&&(e=o.call(this,t,e)),!ct(e))return e}),i[1]=e,H.apply(null,i)}})}G[I][Q]||k(G[I],Q,G[I].valueOf),J(G,A),x[q]=!0},b64b:function(t,e,n){var o=n("23e7"),i=n("7b0b"),a=n("df75"),r=n("d039"),c=r((function(){a(1)}));o({target:"Object",stat:!0,forced:c},{keys:function(t){return a(i(t))}})},dbb4:function(t,e,n){var o=n("23e7"),i=n("83ab"),a=n("56ef"),r=n("fc6a"),c=n("06cf"),s=n("8418");o({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,n,o=r(t),i=c.f,u=a(o),f={},l=0;while(u.length>l)n=i(o,e=u[l++]),void 0!==n&&s(f,e,n);return f}})},e439:function(t,e,n){var o=n("23e7"),i=n("d039"),a=n("fc6a"),r=n("06cf").f,c=n("83ab"),s=i((function(){r(1)})),u=!c||s;o({target:"Object",stat:!0,forced:u,sham:!c},{getOwnPropertyDescriptor:function(t,e){return r(a(t),e)}})},e538:function(t,e,n){var o=n("b622");e.f=o}}]);
//# sourceMappingURL=chunk-48801140.e3b33e74.js.map