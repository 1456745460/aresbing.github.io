(function(e){function t(t){for(var a,c,u=t[0],i=t[1],l=t[2],s=0,f=[];s<u.length;s++)c=u[s],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);p&&p(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,c=1;c<n.length;c++){var i=n[c];0!==r[i]&&(a=!1)}a&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={app:0},o=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d0aa5b8":"45ad0614","chunk-33695c88":"f005765c","chunk-3c83cad4":"45d29c7b","chunk-6c012071":"efdd4d5a","chunk-2d0c4fbb":"441ad95d"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=a);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=c(e);var l=new Error;o=function(t){i.onerror=i.onload=null,clearTimeout(s);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,n[1](l)}r[e]=void 0}};var s=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var p=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),n("tabbar")],1)},o=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("van-tabbar",{attrs:{"inactive-color":"#666666","active-color":"#000000",fixed:"",placeholder:""},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},e._l(e.tabbarList,(function(t,a){return n("van-tabbar-item",{key:a,attrs:{replace:"",to:t.path},scopedSlots:e._u([{key:"icon",fn:function(e){return n("img",{attrs:{src:e.active?t.active:t.normal}})}}],null,!0)},[n("span",[e._v(e._s(t.title))])])})),1)],1)},u=[],i=(n("c975"),n("d81d"),{name:"tabbar",data:function(){return{active:0,tabbarList:[{path:"/home",title:"首页",normal:"./icon/sy.png",active:"./icon/sy2.png"},{path:"/search",title:"搜索",normal:"./icon/ss.png",active:"./icon/ss2.png"},{path:"/mine",title:"我的",normal:"./icon/wd.png",active:"./icon/wd2.png"}]}},watch:{$route:function(e){this.activeTab(e.path)}},methods:{activeTab:function(e){var t=this.tabbarList.map((function(e){return e.path})).indexOf(e);-1!=t&&(this.active=t)}}}),l=i,s=n("2877"),p=Object(s["a"])(l,c,u,!1,null,null,null),f=p.exports,d={components:{tabbar:f},name:"App",data:function(){return{}},methods:{}},h=d,b=Object(s["a"])(h,r,o,!1,null,null,null),m=b.exports,v=n("b970"),y=(n("157a"),n("2241")),g=n("ee83"),k=n("9612"),w=n("ca19"),O=n("5596"),_=n("2bb1"),j=n("44bf"),P=n("343b"),x=n("f0ca"),T=n("58e6"),S=n("6b41"),E=n("d399"),L=n("f240"),M=(n("d3b7"),n("8c4f"));a["a"].use(M["a"]);var $=[{path:"*",redirect:"/home"},{path:"/home",name:"home",component:function(){return Promise.all([n.e("chunk-2d0aa5b8"),n.e("chunk-3c83cad4")]).then(n.bind(null,"6511"))}},{path:"/mine",name:"mine",component:function(){return n.e("chunk-2d0c4fbb").then(n.bind(null,"3cc8"))}},{path:"/search",name:"search",component:function(){return Promise.all([n.e("chunk-2d0aa5b8"),n.e("chunk-6c012071")]).then(n.bind(null,"4e22"))}},{path:"/type",name:"type",component:function(){return Promise.all([n.e("chunk-2d0aa5b8"),n.e("chunk-33695c88")]).then(n.bind(null,"266b"))}}],A=new M["a"]({routes:$}),C=A;a["a"].use(L["a"]),a["a"].use(E["a"]),a["a"].use(S["a"]),a["a"].use(T["a"]),a["a"].use(x["a"]),a["a"].use(P["a"]),a["a"].use(j["a"]),a["a"].use(O["a"]),a["a"].use(_["a"]),a["a"].use(w["a"]),a["a"].use(k["a"]),a["a"].use(v["a"]),a["a"].use(g["a"]),a["a"].use(y["a"]),a["a"].prototype.baseUrl="http://106.13.112.48:9092/",a["a"].use(v["a"]),a["a"].config.productionTip=!1,new a["a"]({router:C,render:function(e){return e(m)}}).$mount("#app")}});
//# sourceMappingURL=app.c80c7559.js.map