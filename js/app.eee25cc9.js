(function(e){function t(t){for(var o,r,i=t[0],l=t[1],c=t[2],s=0,d=[];s<i.length;s++)r=i[s],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);f&&f(t);while(d.length)d.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],o=!0,r=1;r<n.length;r++){var i=n[r];0!==a[i]&&(o=!1)}o&&(u.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},r={app:0},a={app:0},u=[];function i(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"48af990d"}[e]+".js"}function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({about:"about"}[e]||e)+"."+{about:"11fa03f0"}[e]+".css",a=l.p+o,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var c=u[i],s=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(s===o||s===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){c=d[i],s=c.getAttribute("data-href");if(s===o||s===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=o,delete r[e],f.parentNode.removeChild(f),n(u)},f.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var u=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=u);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=i(e);var d=new Error;c=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3394:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"background-img",style:e.backgroundDiv},[n("header",{staticClass:"navbar"},[n("navigation")],1),n("div",{attrs:{id:"main"}},[n("router-view")],1),n("div",[n("p",{staticStyle:{"font-size":"25px"}},[e._v(e._s(e.$t("message.hello")))])])])])},a=[],u=n("cb54"),i=n.n(u),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"font-family":"Meath"}},[n("el-menu",{staticClass:"el-menu-demo",staticStyle:{opacity:"0.35"},attrs:{"default-active":e.activeIndex,mode:"horizontal"}},[n("el-menu-item",[n("span",{staticStyle:{"text-align":"center","font-size":"20px","font-family":"'DejaVu Sans Mono'"}},[e._v("Jiyuan Wong")])]),n("el-menu-item",{attrs:{index:"1"},on:{click:function(t){return e.skip("/")}}},[e._v(e._s(e.$t("message.nav.home_but")))]),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[e._v(e._s(e.$t("message.nav.project_but")))]),n("el-submenu",{attrs:{index:"2-4"}},[n("template",{slot:"title"},[e._v("ToDo")]),n("el-menu-item",{attrs:{index:"2-4-1"}},[e._v("ToDo")]),n("el-menu-item",{attrs:{index:"2-4-2"}},[e._v("ToDo")]),n("el-menu-item",{attrs:{index:"2-4-3"}},[e._v("ToDo")])],2)],2),n("el-submenu",{attrs:{index:"3"}},[n("template",{staticStyle:{"font-family":"'DejaVu Sans Mono'"},slot:"title"},[e._v(e._s(e.$t("message.nav.document_but")))]),n("el-menu-item",{attrs:{index:"3-1"},on:{click:function(t){return e.docSkip("DocViews_technology")}}},[e._v("技术文档")]),n("el-menu-item",{attrs:{index:"3-2"},on:{click:function(t){return e.docSkip("/document/DocViews_Computer")}}},[e._v("电脑杂项")]),n("el-submenu",{attrs:{index:"4"}},[n("template",{slot:"title"},[e._v("Spring")]),n("el-menu-item",[e._v("Spring Cloud")]),n("el-menu-item",[e._v("Spring Boot")])],2),n("el-submenu",{attrs:{index:"5"}},[n("template",{slot:"title"},[e._v("MyBatis")]),n("el-menu-item",[e._v("MySql")]),n("el-menu-item",[e._v("JDBC")])],2)],2),n("el-menu-item",{attrs:{index:"4"},on:{click:function(t){return e.skip("other")}}},[e._v(e._s(e.$t("message.nav.todo_but")))]),n("el-menu-item",{staticStyle:{float:"right"}},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.$i18n.locale,expression:"$i18n.locale"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.$i18n,"locale",t.target.multiple?n:n[0])}}},e._l(e.langs,(function(t,o){return n("option",{key:"Lang"+o,domProps:{value:t}},[e._v(e._s(t))])})),0)])],1)],1)},c=[],s={name:"Navigation",data:function(){return{activeIndex:"1",activeIndex2:"1",navStyle:{width:"100%",backgroundColor:"white",alpha:"0.5"},langs:["English_US","中文"],home:""}},methods:{skip:function(e){this.$router.push(e)},docSkip:function(e){e="/document/"+e,this.$router.push(e)}}},d=s,f=n("2877"),m=Object(f["a"])(d,l,c,!1,null,"18b82115",null),p=m.exports,h=(n("3394"),{components:{Navigation:p},data:function(){return{bg:{background:"url(".concat(i.a,")"),backgroundSize:"100% 100%",backgroundRepeat:"no-repeat"},backgroundDiv:{backgroundImage:"url("+n("cb54")+")"}}}}),v=h,g=(n("7faf"),Object(f["a"])(v,r,a,!1,null,null,null)),b=g.exports,_=(n("d3b7"),n("8c4f"));o["default"].use(_["a"]);var y=[{path:"/",name:"Home",meta:{requireAuth:!0},component:function(){return n.e("about").then(n.bind(null,"bb51"))}},{path:"/project",name:"Project",meta:{requireAuth:!0},component:function(){return n.e("about").then(n.bind(null,"07bd"))}},{path:"/other",name:"other",meta:{requireAuth:!0},component:function(){return n.e("about").then(n.bind(null,"d180"))}},{path:"/*",name:"error-404",meta:{title:"页面走丢啦~"},component:function(){return n.e("about").then(n.bind(null,"c305"))}}],x=new _["a"]({routes:y,mode:"hash"}),S=_["a"].prototype.push;_["a"].prototype.push=function(e){return S.call(this,e).catch((function(e){return e}))};var k=x,w=n("5c96"),j=n.n(w),D=(n("0fae"),n("499a"),n("a925")),C=(n("cd22"),n("9af4"),n("1487")),E=n.n(C),O=(n("8da8"),{install:function(e){e.directive("highlight",{inserted:function(e){for(var t=e.querySelectorAll("pre code"),n=0;n<t.length;n++)E.a.highlightBlock(t[n])},componentUpdated:function(e){for(var t=e.querySelectorAll("pre code"),n=0;n<t.length;n++)E.a.highlightBlock(t[n])}})}}),$=O;o["default"].use($),o["default"].use(j.a),o["default"].config.productionTip=!1,o["default"].use(D["a"]);var P={English_US:n("be80"),"中文":n("99c2")},T=new D["a"]({locale:"English_US",messages:P});new o["default"]({router:k,i18n:T,render:function(e){return e(b)}}).$mount("#app")},"7faf":function(e,t,n){"use strict";n("b8ff")},"99c2":function(e,t){e.exports={message:{hello:"你好，世界",nav:{home_but:"主页",project_but:"项目",document_but:"文档",todo_but:"计划"}}}},"9af4":function(e,t,n){},b8ff:function(e,t,n){},be80:function(e,t){e.exports={message:{hello:"hello World",nav:{home_but:"Home",project_but:"Project",document_but:"Document",todo_but:"ToDo"}}}},cb54:function(e,t,n){e.exports=n.p+"img/background.5750fc9a.png"},cd22:function(e,t,n){}});
//# sourceMappingURL=app.eee25cc9.js.map