(()=>{"use strict";var n,e,t,r,o={365:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,'html{\n    font-family: system-ui;\n}\n\n.forward > img,\n.backward > img{\n    background: black;\n    pointer-events: none;\n    user-select: none\n;\n\n}\n.forward,.backward{\n    cursor: pointer;\n    user-select: none\n\n}\n\nbody{\n    min-height: 100vh;\n    height: 100vh;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n}\n\n.dropdown-enabled.dropdown-items{\n    display: flex;\n}\n\n.dropdown-item.expand:hover>.dropdown-items.expand{\n    display: grid;\n}\n\n\n\n.dropdown-items{\n    flex-direction: column;\n    width: 15rem;\n    font-size: 1.5rem;\n    color: white;\n    position: absolute;\n}\n\n.dropdown-items.expand{\n    display: none;\n    grid-column: 2 / 3;\n    grid-row-start: 1;\n    align-self: flex-start;\n}\n\n.dropdown-item.expand:after{\n    content: ">";\n    position: absolute;\n    display: flex;\n    justify-content: right;\n    width: 100%;\n    transform: translate(-1rem, 0px);\n}\n\n\n\n.dropdown-item.expand{\n    display: grid;\n    justify-content: normal;\n    >:first-child{\n        text-align: center;\n    }\n}\n\n.dropdown-item{\n    cursor: default;\n    user-select: none;\n    height: 3rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n}\n\n.dropdown-container{\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\nul{\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    align-self: center;\n    gap: 0.5rem;\n    font-size: 1.5rem;\n    li{\n        cursor: pointer;\n        caret-color: transparent;\n        user-select: none;\n    }\n}\n\n.main-image-container{\n    display: flex;\n    align-items: center;\n    height: 100%;\n}\n\n.image-background{\n    flex: 1;\n    padding: 5%;\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n\n}\n\n.image-carousel-container{\n    box-shadow: inset 0 0 20px 20px;\n    display: flex;\n    gap: 1rem;\n    align-items: center;\n    overflow: hidden;\n    min-width: 0;\n    height: 100%;\n    flex: 1;\n}\n\n.image-container{\n    border: solid black 1px;\n    height: 90%;\n    width: 30%;\n    flex: none\n;\n}\n\n.dropdown-item:hover{\n    background: #363635;\n    border-radius: 0.5rem;\n\n}\n\n.dropdown-items{\n    display: none;\n    background: black;\n    border-radius: 0.5rem;\n\n}\n.expand{\n}',""]);const c=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},601:n=>{n.exports=function(n){return n[1]}},788:(n,e,t)=>{var r=t(72),o=t.n(r),a=t(825),i=t.n(a),c=t(659),s=t.n(c),l=t(56),d=t.n(l),p=t(540),u=t.n(p),f=t(113),m=t.n(f),h=t(365),v={};v.styleTagTransform=m(),v.setAttributes=d(),v.insert=s().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=u(),o()(h.A,v),h.A&&h.A.locals&&h.A.locals},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},219:(n,e,t)=>{t.d(e,{n:()=>a});let r=document.querySelectorAll(".dropdown-container > button"),o=document.querySelectorAll(".dropdown-item.expand"),a=()=>{r.forEach((n=>{n.addEventListener("click",(e=>{i(n,e)})),document.body.addEventListener("click",(e=>c(n,e)))})),o.forEach((n=>{n.addEventListener("click",(n=>{}))}))},i=n=>{n.parentElement.childNodes[1].classList.toggle("dropdown-enabled")},c=(n,e)=>{let t=n.parentElement.childNodes[1];e.target===n||e.target.classList.contains("dropdown-item")||t.classList.remove("dropdown-enabled")}},583:(n,e,t)=>{t.d(e,{W:()=>d});let r=document.querySelector(".image-carousel-container"),o=document.querySelector(".image-container"),a=document.querySelectorAll("ul li"),i=document.querySelector(".forward"),c=document.querySelector(".backward"),s=!0,l=1,d=()=>{setInterval((()=>{if(s){let n=r.scrollLeft;(n>=3*o.scrollWidth-20||0===n)&&(l*=-1),r.scrollBy({behavior:"smooth",left:o.scrollWidth*l})}else s=!0}),5e3),a.forEach(((n,e)=>{n.addEventListener("click",(()=>{r.scrollTo({behavior:"smooth",left:e*o.scrollWidth}),s=!1}))})),u(i,1),u(c,-1),r.addEventListener("scroll",(()=>{p()})),p()},p=()=>{c.style.pointerEvents=0===r.scrollLeft?"none":"auto",i.style.pointerEvents=r.scrollLeft>=3*o.scrollWidth-20?"none":"auto"},u=(n,e)=>{n.addEventListener("click",(()=>{r.scrollBy({behavior:"smooth",left:o.scrollWidth*e}),s=!1}))}},44:(n,e,t)=>{t.a(n,(async(n,e)=>{try{t(788);var r=t(219),o=t(583);t(515),t(63);let n=async()=>{await(0,o.W)()};await n(),(0,r.n)(),e()}catch(n){e(n)}}),1)},515:(n,e,t)=>{n.exports=t.p+"c8791cd3448d83fe72c5.svg"},63:(n,e,t)=>{n.exports=t.p+"9d199a6952843804af3c.svg"}},a={};function i(n){var e=a[n];if(void 0!==e)return e.exports;var t=a[n]={id:n,exports:{}};return o[n](t,t.exports,i),t.exports}n="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",e="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",t="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",r=n=>{n&&n.d<1&&(n.d=1,n.forEach((n=>n.r--)),n.forEach((n=>n.r--?n.r++:n())))},i.a=(o,a,i)=>{var c;i&&((c=[]).d=-1);var s,l,d,p=new Set,u=o.exports,f=new Promise(((n,e)=>{d=e,l=n}));f[e]=u,f[n]=n=>(c&&n(c),p.forEach(n),f.catch((n=>{}))),o.exports=f,a((o=>{var a;s=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[n])return o;if(o.then){var a=[];a.d=0,o.then((n=>{i[e]=n,r(a)}),(n=>{i[t]=n,r(a)}));var i={};return i[n]=n=>n(a),i}}var c={};return c[n]=n=>{},c[e]=o,c})))(o);var i=()=>s.map((n=>{if(n[t])throw n[t];return n[e]})),l=new Promise((e=>{(a=()=>e(i)).r=0;var t=n=>n!==c&&!p.has(n)&&(p.add(n),n&&!n.d&&(a.r++,n.push(a)));s.map((e=>e[n](t)))}));return a.r?l:i()}),(n=>(n?d(f[t]=n):l(u),r(c)))),c&&c.d<0&&(c.d=0)},i.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return i.d(e,{a:e}),e},i.d=(n,e)=>{for(var t in e)i.o(e,t)&&!i.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),i.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;i.g.importScripts&&(n=i.g.location+"");var e=i.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=t[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=n})(),i.nc=void 0,i(44)})();