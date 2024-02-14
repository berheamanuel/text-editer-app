/*! For license information please see database.bundle.js.LICENSE.txt */
(()=>{var t={636:(t,e,r)=>{var n=r(848).default;function o(){"use strict";t.exports=o=function(){return r},t.exports.__esModule=!0,t.exports.default=t.exports;var e,r={},a=Object.prototype,i=a.hasOwnProperty,c=Object.defineProperty||function(t,e,r){t[e]=r.value},s="function"==typeof Symbol?Symbol:{},u=s.iterator||"@@iterator",l=s.asyncIterator||"@@asyncIterator",f=s.toStringTag||"@@toStringTag";function h(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(e){h=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,a=Object.create(o.prototype),i=new N(n||[]);return c(a,"_invoke",{value:S(t,r,i)}),a}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=p;var y="suspendedStart",v="suspendedYield",g="executing",m="completed",w={};function b(){}function x(){}function L(){}var E={};h(E,u,(function(){return this}));var j=Object.getPrototypeOf,I=j&&j(j(T([])));I&&I!==a&&i.call(I,u)&&(E=I);var _=L.prototype=b.prototype=Object.create(E);function D(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,a,c,s){var u=d(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==n(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,s)}),(function(t){r("throw",t,c,s)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,s)}))}s(u.arg)}var o;c(this,"_invoke",{value:function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}})}function S(t,r,n){var o=y;return function(a,i){if(o===g)throw new Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:e,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var s=k(c,n);if(s){if(s===w)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=g;var u=d(t,r,n);if("normal"===u.type){if(o=n.done?m:v,u.arg===w)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=m,n.method="throw",n.arg=u.arg)}}}function k(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),w;var a=d(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,w;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,w):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,w)}function B(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(B,this),this.reset(!0)}function T(t){if(t||""===t){var r=t[u];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(i.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}throw new TypeError(n(t)+" is not iterable")}return x.prototype=L,c(_,"constructor",{value:L,configurable:!0}),c(L,"constructor",{value:x,configurable:!0}),x.displayName=h(L,f,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,h(t,f,"GeneratorFunction")),t.prototype=Object.create(_),t},r.awrap=function(t){return{__await:t}},D(O.prototype),h(O.prototype,l,(function(){return this})),r.AsyncIterator=O,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var i=new O(p(t,e,n,o),a);return r.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},D(_),h(_,f,"Generator"),h(_,u,(function(){return this})),h(_,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=T,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=i.call(a,"catchLoc"),u=i.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,w):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),w},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),w}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),w}},r}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},848:t=>{function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},248:(t,e,r)=>{var n=r(636)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}var e=r(248),n=r.n(e);const o=(t,e)=>e.some((e=>t instanceof e));let a,i;const c=new WeakMap,s=new WeakMap,u=new WeakMap,l=new WeakMap,f=new WeakMap;let h={get(t,e,r){if(t instanceof IDBTransaction){if("done"===e)return s.get(t);if("objectStoreNames"===e)return t.objectStoreNames||u.get(t);if("store"===e)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return d(t[e])},set:(t,e,r)=>(t[e]=r,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function p(t){return"function"==typeof t?(e=t)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(y(this),t),d(c.get(this))}:function(...t){return d(e.apply(y(this),t))}:function(t,...r){const n=e.call(y(this),t,...r);return u.set(n,t.sort?t.sort():[t]),d(n)}:(t instanceof IDBTransaction&&function(t){if(s.has(t))return;const e=new Promise(((e,r)=>{const n=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=()=>{e(),n()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),n()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)}));s.set(t,e)}(t),o(t,a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(t,h):t);var e}function d(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,r)=>{const n=()=>{t.removeEventListener("success",o),t.removeEventListener("error",a)},o=()=>{e(d(t.result)),n()},a=()=>{r(t.error),n()};t.addEventListener("success",o),t.addEventListener("error",a)}));return e.then((e=>{e instanceof IDBCursor&&c.set(e,t)})).catch((()=>{})),f.set(e,t),e}(t);if(l.has(t))return l.get(t);const e=p(t);return e!==t&&(l.set(t,e),f.set(e,t)),e}const y=t=>f.get(t);function v(t,e,{blocked:r,upgrade:n,blocking:o,terminated:a}={}){const i=indexedDB.open(t,e),c=d(i);return n&&i.addEventListener("upgradeneeded",(t=>{n(d(i.result),t.oldVersion,t.newVersion,d(i.transaction))})),r&&i.addEventListener("blocked",(()=>r())),c.then((t=>{a&&t.addEventListener("close",(()=>a())),o&&t.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),c}const g=["get","getKey","getAll","getAllKeys","count"],m=["put","add","delete","clear"],w=new Map;function b(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(w.get(e))return w.get(e);const r=e.replace(/FromIndex$/,""),n=e!==r,o=m.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!o&&!g.includes(r))return;const a=async function(t,...e){const a=this.transaction(t,o?"readwrite":"readonly");let i=a.store;return n&&(i=i.index(e.shift())),(await Promise.all([i[r](...e),o&&a.done]))[0]};return w.set(e,a),a}var x;x=h,h={...x,get:(t,e,r)=>b(t,e)||x.get(t,e,r),has:(t,e)=>!!b(t,e)||x.has(t,e)},function(){var e,r=(e=n().mark((function t(){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,v("jate",1,{upgrade:function(t){t.objectStoreNames.contains("jate")?console.log("jate database already exists"):(t.createObjectStore("jate",{keyPath:"id",autoIncrement:!0}),console.log("jate database created"))}}),t.next=8;break;case 4:throw t.prev=4,t.t0=t.catch(0),console.error("Failed to initialize database",t.t0),t.t0;case 8:case"end":return t.stop()}}),t,null,[[0,4]])})),function(){var r=this,n=arguments;return new Promise((function(o,a){var i=e.apply(r,n);function c(e){t(i,o,a,c,s,"next",e)}function s(e){t(i,o,a,c,s,"throw",e)}c(void 0)}))});return function(){return r.apply(this,arguments)}}()()})()})();