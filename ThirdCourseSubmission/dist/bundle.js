(()=>{"use strict";var n={286:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(i[u]=!0)}for(var s=0;s<n.length;s++){var p=[].concat(n[s]);r&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},372:n=>{n.exports=function(n){return n[1]}},982:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(372),o=t.n(r),a=t(286),i=t.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600&display=swap);"]),i.push([n.id,"*{\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n    font-family: Quicksand, sans-serif;\r\n}\r\n\r\nheader{\r\n    font-size: 20px;\r\n    padding: 20px 60px 60px 60px;\r\n    color: white;\r\n    background-color: black;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    border-radius: 10px;\r\n    padding: 20px 30px 20px 30px;\r\n    margin: 10px 10px 0px 10px;\r\n    text-align: center;\r\n}\r\n\r\nmain{\r\n    box-shadow: 0 10px 8px 0 rgba(0, 0, 0, 0.2);\r\n    border-radius: 20px;\r\n    padding: 20px 30px 20px 30px;\r\n    margin: 10px;\r\n    display:flex; \r\n    flex-direction:column; \r\n    text-align: center;\r\n}\r\nimg{\r\n    width:250px;\r\n    margin-bottom: 15px;\r\n    box-shadow: 0 10px 8px 0 rgba(0, 0, 0, 0.2);\r\n}\r\nbutton {\r\n    background-color: black;\r\n    border: none;\r\n    color: white;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    margin:30px 0px;\r\n    cursor: pointer;\r\n    width: 80%;\r\n    font-size: 20px;\r\n}\r\n\r\nbutton:hover{\r\n    background-color: grey;\r\n    color:black ;\r\n}\r\n\r\nfooter{\r\n    color: white;\r\n    background-color: black;\r\n    text-align: center;\r\n    font-weight: bold;\r\n    border-radius: 20px;\r\n    margin: 10px;\r\n    padding: 20px 30px;\r\n}\r\n\r\n",""]);const c=i},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var u=n[c],s=r.base?u[0]+r.base:u[0],p=a[s]||0,l="".concat(s," ").concat(p);a[s]=p+1;var f=t(l),d={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==f)e[f].references++,e[f].updater(d);else{var h=o(d,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var u=r(n,o),s=0;s<a.length;s++){var p=t(a[s]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=u}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),u=t.n(c),s=t(216),p=t.n(s),l=t(589),f=t.n(l),d=t(982),h={};function b(n){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},b(n)}function m(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function y(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function v(n,e,t){return e&&y(n.prototype,e),t&&y(n,t),n}function g(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&M(n,e)}function x(n){var e=E();return function(){var t,r=S(n);if(e){var o=S(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return k(this,t)}}function k(n,e){if(e&&("object"===b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n)}function w(n){var e="function"==typeof Map?new Map:void 0;return w=function(n){if(null===n||(t=n,-1===Function.toString.call(t).indexOf("[native code]")))return n;var t;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(n))return e.get(n);e.set(n,r)}function r(){return T(n,arguments,S(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),M(r,n)},w(n)}function T(n,e,t){return T=E()?Reflect.construct:function(n,e,t){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(n,r));return t&&M(o,t.prototype),o},T.apply(null,arguments)}function E(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}function M(n,e){return M=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n},M(n,e)}function S(n){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},S(n)}h.styleTagTransform=f(),h.setAttributes=u(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=p(),e()(d.Z,h),d.Z&&d.Z.locals&&d.Z.locals;var O=1,j=document.getElementById("rekomendasikomik"),R=document.getElementById("the_button");R.addEventListener("click",(function(){var n=new XMLHttpRequest;n.open("GET","https://raw.githubusercontent.com/abrahamparn/Webdev3/main/Komik-".concat(O,".json")),n.onload=function(){var e=JSON.parse(n.responseText);L(e)},n.send(),++O>3&&(R.classList.add("StopList"),alert("Enough Recommendation for Today"),alert("Made by Abraham"),alert("Please Refresh the Page"))}));var L=function(n){for(var e="",t=0;t<n.length;t++)e+="<h2>".concat(n[t].name,"</h2> <p>it is an ").concat(n[t].genre," comic with ").concat(n[t].rating," that could be read on ").concat(n[t].placeread,". <br><br><h3> SUMMARY </h3> ").concat(n[t].summary,"</p><br><br>");j.insertAdjacentHTML("beforeend",e)},C=function(n){g(t,n);var e=x(t);function t(){return m(this,t),e.apply(this,arguments)}return v(t,[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='  <img src="https://user-images.githubusercontent.com/87258755/142727184-d863058f-e60d-46b2-a323-f1512c3449ac.jpg" alt="Gambar representasi perwibuan">\n                            <h2 id="title2">Dapatkan Rekomendasi komik kesukaanku</h2>'}}]),t}(w(HTMLElement));customElements.define("selain-button",C);var P=function(n){g(t,n);var e=x(t);function t(){return m(this,t),e.apply(this,arguments)}return v(t,[{key:"connectedCallback",value:function(){this.innerHTML='<h1 id = "title"> Rekomendasi komik kesukaanku </h1>'}}]),t}(w(HTMLElement));customElements.define("app-bar",P);var A=function(n){g(t,n);var e=x(t);function t(){return m(this,t),e.apply(this,arguments)}return v(t,[{key:"connectedCallback",value:function(){this.innerHTML="\n        <h1>Abraham Naiborhu</h1>\n        <h2>Just For Learning</h2>\n        <h3>Susah euy ini dicoding</h3>\n        <p>Copytright &copy; 2021 Abraham. All Right Reserved</p>"}}]),t}(w(HTMLElement));customElements.define("footer-aja",A)})()})();