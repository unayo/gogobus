(function(e){function t(t){for(var c,r,u=t[0],i=t[1],s=t[2],l=0,d=[];l<u.length;l++)r=u[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);b&&b(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],c=!0,r=1;r<n.length;r++){var u=n[r];0!==o[u]&&(c=!1)}c&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var c={},r={app:0},o={app:0},a=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-5c493391":"c887bb4a","chunk-74acc47a":"e9205bf7","chunk-b94aaa5c":"2c8650ce","chunk-f5678dfc":"06c70e1d"}[e]+".js"}function i(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-74acc47a":1,"chunk-b94aaa5c":1,"chunk-f5678dfc":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var c="css/"+({}[e]||e)+"."+{"chunk-5c493391":"31d6cfe0","chunk-74acc47a":"2d841d1f","chunk-b94aaa5c":"10977b18","chunk-f5678dfc":"c05279fd"}[e]+".css",o=i.p+c,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var s=a[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===c||l===o))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],l=s.getAttribute("data-href");if(l===c||l===o)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var c=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=c,delete r[e],b.parentNode.removeChild(b),n(a)},b.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(b)})).then((function(){r[e]=0})));var c=o[e];if(0!==c)if(c)t.push(c[2]);else{var a=new Promise((function(t,n){c=o[e]=[t,n]}));t.push(c[2]=a);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(b);var n=o[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",d.name="ChunkLoadError",d.type=c,d.request=r,n[1](d)}o[e]=void 0}};var b=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=c,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(n,c,function(t){return e[t]}.bind(null,c));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/gogobus/dist/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var b=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0a7a":function(e,t,n){},"34da":function(e,t,n){e.exports=n.p+"img/icon-pin.24c902a3.svg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),r=n("cf05"),o=n.n(r),a=n("34da"),u=n.n(a),i=n("e854"),s=n.n(i),l={class:"d-none d-md-block"},d=Object(c["f"])("img",{class:"bus px-3 py-5 mb-3 border-bottom w-100",alt:"bus logo",src:o.a},null,-1),b=Object(c["f"])("img",{alt:"stop",src:u.a},null,-1),p=Object(c["f"])("img",{alt:"stop",src:s.a},null,-1),f=Object(c["f"])("img",{alt:"stop",src:u.a},null,-1),m=Object(c["f"])("span",null,null,-1),h=Object(c["f"])("span",null,null,-1),g=Object(c["f"])("span",null,null,-1),O=[m,h,g],j=Object(c["f"])("div",{class:"menu-phone fixed-top d-md-none bg-primary rounded-1 text-center"},[Object(c["f"])("img",{class:"logo-phone",alt:"bus logo",src:o.a})],-1),v=Object(c["f"])("img",{class:"me-2",alt:"stop",src:u.a},null,-1),k=Object(c["g"])(" 附近站牌 "),y=Object(c["f"])("img",{class:"me-2",alt:"stop",src:s.a},null,-1),A=Object(c["g"])(" 路線搜尋 "),w=Object(c["f"])("img",{class:"me-2",alt:"stop",src:u.a},null,-1),x=Object(c["g"])(" 最新消息 ");function C(e,t,n,r,o,a){var u=Object(c["x"])("router-link"),i=Object(c["x"])("router-view");return Object(c["s"])(),Object(c["e"])(c["a"],null,[Object(c["f"])("div",l,[Object(c["f"])("div",{class:Object(c["n"])([a.look?"d-none":"","menu bg-primary rounded-1 text-center"])},[d,Object(c["h"])(u,{to:"/stop",class:"icon d-inline-block rounded-1 p-2 m-2"},{default:Object(c["E"])((function(){return[b]})),_:1}),Object(c["h"])(u,{to:"/search",class:"icon d-inline-block rounded-1 p-2 m-2"},{default:Object(c["E"])((function(){return[p]})),_:1}),Object(c["h"])(u,{to:"/news",class:"icon d-inline-block rounded-1 p-2 m-2"},{default:Object(c["E"])((function(){return[f]})),_:1})],2)]),Object(c["f"])("div",{onClick:t[0]||(t[0]=Object(c["G"])((function(){return a.myHamburger&&a.myHamburger.apply(a,arguments)}),["prevent"])),class:Object(c["n"])([o.isClick?"open":"","hamburger d-md-none"]),href:"#",id:"nav-icon"},O,2),j,Object(c["f"])("div",{class:Object(c["n"])([o.isClick?"menu-items-on":"menu-items-off","menu-items d-md-none"])},[Object(c["h"])(u,{onClick:Object(c["G"])(a.myHamburger,["prevent"]),to:"/stop",class:"icon d-block rounded-1 p-2 m-2 text-white"},{default:Object(c["E"])((function(){return[v,k]})),_:1},8,["onClick"]),Object(c["h"])(u,{onClick:Object(c["G"])(a.myHamburger,["prevent"]),to:"/search",class:"icon d-block rounded-1 p-2 m-2 text-white"},{default:Object(c["E"])((function(){return[y,A]})),_:1},8,["onClick"]),Object(c["h"])(u,{onClick:Object(c["G"])(a.myHamburger,["prevent"]),to:"/news",class:"icon d-block rounded-1 p-2 m-2 text-white"},{default:Object(c["E"])((function(){return[w,x]})),_:1},8,["onClick"])],2),Object(c["f"])("div",{class:Object(c["n"])(a.look?"page-none":"page")},[Object(c["h"])(i)],2)],64)}var U={data:function(){return{isClick:!1}},methods:{myHamburger:function(){this.isClick=!this.isClick}},computed:{look:function(){return"/"===this.$route.path}}},M=(n("fc24"),n("6b0d")),G=n.n(M);const S=G()(U,[["render",C]]);var E=S,P=n("bc3a"),B=n.n(P),H=n("130e"),Y=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),D=n("d746"),T=n.n(D),F=n("92b3"),J=n.n(F),q=n("adfd"),z=n.n(q),L={class:"banner position-relative"},Q=Object(c["f"])("div",{class:"container"},[Object(c["f"])("div",{class:"row"},[Object(c["f"])("div",{class:"col-12 col-md-4 text-center"},[Object(c["f"])("img",{class:"bus pt-5 mt-5",alt:"bus logo",src:T.a})])])],-1),Z=Object(c["f"])("img",{class:"bg-bus img-fluid position-absolute",alt:"background-bus",src:J.a},null,-1),N=Object(c["f"])("img",{class:"bg-star position-absolute",alt:"background-star",src:z.a},null,-1),W=[Q,Z,N];function X(e,t,n,r,o,a){return Object(c["s"])(),Object(c["e"])("div",L,W)}var I={name:"Home",created:function(){var e=this;setTimeout((function(){return e.$router.push({path:"/stop"})}),3e3)}};n("9585");const R=G()(I,[["render",X]]);var V=R,K=[{path:"/",name:"Home",component:V},{path:"/stop",name:"Stop",component:function(){return Promise.all([n.e("chunk-5c493391"),n.e("chunk-74acc47a")]).then(n.bind(null,"4c95"))}},{path:"/search",name:"Search",component:function(){return Promise.all([n.e("chunk-5c493391"),n.e("chunk-f5678dfc")]).then(n.bind(null,"d529"))}},{path:"/news",name:"News",component:function(){return Promise.all([n.e("chunk-5c493391"),n.e("chunk-b94aaa5c")]).then(n.bind(null,"a2f9"))}}],_=Object(Y["a"])({history:Object(Y["b"])(),routes:K}),$=_,ee=Object(c["c"])(E);ee.use(H["a"],B.a),ee.use($),ee.mount("#app")},"92b3":function(e,t,n){e.exports=n.p+"img/banner-bus.c81b6c5b.png"},9585:function(e,t,n){"use strict";n("ad12")},ad12:function(e,t,n){},adfd:function(e,t,n){e.exports=n.p+"img/star.5a20c77f.png"},cf05:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMsAAAB+BAMAAAB40vjGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURUdwTP///////////////////////////////////////48EzvsAAAAKdFJOUwBfwuR9HECikDAV+1uYAAAENUlEQVRo3u2byW/TQBSH7TZOWk6O2HOqAlVFTiEtLfiUglmUU0qxgJxSQK3oqQtqRE+WEELqqWI7t3aXdP5KZvEy42USpJcUpPldqvGk88Uzb94s70XThpRxcx4l5W1rwDKeoCwttGEx71G2HoFSdJQnExJTycUcQ46MlYvxAUdnImiyyitAz4D3mSc8DDBncJiaBOPBDQ2SYFAb2pyzMWAmPSXFuFCYkhSzBWzPyC/zGhkmWwqjMECU3i5vy7dwy8u8VS/1YDB0ykSlIi51xTmqMAqjMJeFoV4gHwPlBYhPk2AgXec4MC0p5mT0G3XIzXoJydWEwXQGYB6M+gwFepLaH4A5Bz125NsAnLMhR7VU+w14jP9Ue52gfNUKzNQBMRdsmnIi0/IHNKaZ2q+Rs20BGtOOGuUvHgw0gvWmKGC6o1rWRo/J6DQyWtPQY0MOspMpV1aCxpykvM55ZOKQXuCz8S4xPRfbGwgcI5HCXBrGGs96M2j1BLpR2xyAAbofnBqAgdp2Hsh3HFDXg+O85ThZT6sFjznLM47/DVMaD4Za9GneJh7s5pYecNyc1wSMRXxHaCGz4gtC9zQlJSUlJSUlJSUlJaV/Q8bzHZY6NZtZXfwWZFaZWZVh2tUnyVkKV7vc3cJpJsWSBYPi7Lh+PobejMc3JZmYDhoOIznoUsymHGMNizmTY/almGk0LKYvx9QQ8lhqxvWMj5AL7j7L2jjMwWyXy9cs2aUaxYghuOLOPFbjbpvDcK/xapdW7/EYk42gr2m2beOCgf/gr7RiUz2LMTOxcYddeJ/DdOMvn8wVCzGTFMMMoUifvYyDPGlMFOH0D7MwneRAcBhPxFgyTEeIAaUwcSyvneq0YwGjIxkmjmrVszCp3FTOBOoCZiITU+wR7RGP0Hect7XIuhlmila7JPS06Dg/48HRhcA0h7mCn1D7vU2nXoDRg2gstoAj9lIChgVU6gYzOyOe87qQ4itizrmu3vpbjBk1l5iebuptfjmOE2CaYJi+gAkDSl6T3paHmGq1JsGUqtV8TKNK/xl/jMOUuDFrBXXU0ioSDGs6B0OeFFHQ/yFmmvPccBjS/3VhelZih1wh0wwMcyRgDOocLbJArJTLGhDGSmKYNqOcBSvw0CGGtL8vYFwe46bmDWnyDQo6bUYzNpIYPEm7BOP3qtU7FnmCvYBn2y+sCEPa8Uh1iHlo24/jxUEXIuGkqXnqM82S35jr2TZtlNYd8DkZlaRPM7h26tyKbaYxJudZY4NGF8m9AMas8pM64ZQxppUMc+lCtk0rCxP0ZYHHFFIpOqs8ZjWZi6ILv1tgS5lnCZhwylwNWyZrb1iYTa2n/pwbFXwzhSG/wqDVS108DGYh/EHIYmTLa7a9XF532D9+oCs4t/swrpHqj05UwIpWIMMJxF4ebwNuaBorGr/XynQrQMt/APCLNmOWna+bAAAAAElFTkSuQmCC"},d746:function(e,t,n){e.exports=n.p+"img/logo-home.10bc7074.svg"},e854:function(e,t,n){e.exports=n.p+"img/icon-search.0b8872b3.svg"},fc24:function(e,t,n){"use strict";n("0a7a")}});
//# sourceMappingURL=app.6d1aba0b.js.map