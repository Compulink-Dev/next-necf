(function(){'use strict';var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ea=ca(this);function v(a,b){if(b)a:{var c=ea;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
v("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.g=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.g};
var d="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",e=0;return b});
v("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ea[b[c]];typeof d==="function"&&typeof d.prototype[a]!="function"&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ha(a){return a.raw=a}
function w(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function x(a){if(!(a instanceof Array)){a=w(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ia(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ja=typeof Object.assign=="function"?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ia(d,e)&&(a[e]=d[e])}return a};
v("Object.assign",function(a){return a||ja});
var ka=typeof Object.create=="function"?Object.create:function(a){function b(){}
b.prototype=a;return new b},la;
if(typeof Object.setPrototypeOf=="function")la=Object.setPrototypeOf;else{var ma;a:{var na={a:!0},oa={};try{oa.__proto__=na;ma=oa.a;break a}catch(a){}ma=!1}la=ma?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var pa=la;
function y(a,b){a.prototype=ka(b.prototype);a.prototype.constructor=a;if(pa)pa(a,b);else for(var c in b)if(c!="prototype")if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Ea=b.prototype}
function qa(){this.u=!1;this.m=null;this.l=void 0;this.g=1;this.s=this.o=0;this.B=this.i=null}
function ra(a){if(a.u)throw new TypeError("Generator is already running");a.u=!0}
qa.prototype.A=function(a){this.l=a};
function ta(a,b){a.i={Jd:b,de:!0};a.g=a.o||a.s}
qa.prototype.return=function(a){this.i={return:a};this.g=this.s};
function z(a,b,c){a.g=c;return{value:b}}
qa.prototype.M=function(a){this.g=a};
function ua(a,b,c){a.o=b;c!=void 0&&(a.s=c)}
function va(a){a.o=0;var b=a.i.Jd;a.i=null;return b}
function wa(a){var b=a.B.splice(0)[0];(b=a.i=a.i||b)?b.de?a.g=a.o||a.s:b.M!=void 0&&a.s<b.M?(a.g=b.M,a.i=null):a.g=a.s:a.g=0}
function xa(a){this.g=new qa;this.l=a}
function ya(a,b){ra(a.g);var c=a.g.m;if(c)return za(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g.return);
a.g.return(b);return Aa(a)}
function za(a,b,c,d){try{var e=b.call(a.g.m,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.g.u=!1,e;var f=e.value}catch(g){return a.g.m=null,ta(a.g,g),Aa(a)}a.g.m=null;d.call(a.g,f);return Aa(a)}
function Aa(a){for(;a.g.g;)try{var b=a.l(a.g);if(b)return a.g.u=!1,{value:b.value,done:!1}}catch(c){a.g.l=void 0,ta(a.g,c)}a.g.u=!1;if(a.g.i){b=a.g.i;a.g.i=null;if(b.de)throw b.Jd;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ba(a){this.next=function(b){ra(a.g);a.g.m?b=za(a,a.g.m.next,b,a.g.A):(a.g.A(b),b=Aa(a));return b};
this.throw=function(b){ra(a.g);a.g.m?b=za(a,a.g.m["throw"],b,a.g.A):(ta(a.g,b),b=Aa(a));return b};
this.return=function(b){return ya(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ca(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function B(a){return Ca(new Ba(new xa(a)))}
function Da(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
v("Reflect.setPrototypeOf",function(a){return a?a:pa?function(b,c){try{return pa(b,c),!0}catch(d){return!1}}:null});
v("Promise",function(a){function b(g){this.g=0;this.i=void 0;this.l=[];this.u=!1;var h=this.m();try{g(h.resolve,h.reject)}catch(l){h.reject(l)}}
function c(){this.g=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.l=function(g){if(this.g==null){this.g=[];var h=this;this.i(function(){h.o()})}this.g.push(g)};
var e=ea.setTimeout;c.prototype.i=function(g){e(g,0)};
c.prototype.o=function(){for(;this.g&&this.g.length;){var g=this.g;this.g=[];for(var h=0;h<g.length;++h){var l=g[h];g[h]=null;try{l()}catch(k){this.m(k)}}}this.g=null};
c.prototype.m=function(g){this.i(function(){throw g;})};
b.prototype.m=function(){function g(k){return function(m){l||(l=!0,k.call(h,m))}}
var h=this,l=!1;return{resolve:g(this.H),reject:g(this.o)}};
b.prototype.H=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.J(g);else{a:switch(typeof g){case "object":var h=g!=null;break a;case "function":h=!0;break a;default:h=!1}h?this.F(g):this.s(g)}};
b.prototype.F=function(g){var h=void 0;try{h=g.then}catch(l){this.o(l);return}typeof h=="function"?this.O(h,g):this.s(g)};
b.prototype.o=function(g){this.A(2,g)};
b.prototype.s=function(g){this.A(1,g)};
b.prototype.A=function(g,h){if(this.g!=0)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.i=h;this.g===2&&this.I();this.B()};
b.prototype.I=function(){var g=this;e(function(){if(g.D()){var h=ea.console;typeof h!=="undefined"&&h.error(g.i)}},1)};
b.prototype.D=function(){if(this.u)return!1;var g=ea.CustomEvent,h=ea.Event,l=ea.dispatchEvent;if(typeof l==="undefined")return!0;typeof g==="function"?g=new g("unhandledrejection",{cancelable:!0}):typeof h==="function"?g=new h("unhandledrejection",{cancelable:!0}):(g=ea.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.i;return l(g)};
b.prototype.B=function(){if(this.l!=null){for(var g=0;g<this.l.length;++g)f.l(this.l[g]);this.l=null}};
var f=new c;b.prototype.J=function(g){var h=this.m();g.Zb(h.resolve,h.reject)};
b.prototype.O=function(g,h){var l=this.m();try{g.call(h,l.resolve,l.reject)}catch(k){l.reject(k)}};
b.prototype.then=function(g,h){function l(r,q){return typeof r=="function"?function(t){try{k(r(t))}catch(u){m(u)}}:q}
var k,m,p=new b(function(r,q){k=r;m=q});
this.Zb(l(g,k),l(h,m));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Zb=function(g,h){function l(){switch(k.g){case 1:g(k.i);break;case 2:h(k.i);break;default:throw Error("Unexpected state: "+k.g);}}
var k=this;this.l==null?f.l(l):this.l.push(l);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,l){l(g)})};
b.race=function(g){return new b(function(h,l){for(var k=w(g),m=k.next();!m.done;m=k.next())d(m.value).Zb(h,l)})};
b.all=function(g){var h=w(g),l=h.next();return l.done?d([]):new b(function(k,m){function p(t){return function(u){r[t]=u;q--;q==0&&k(r)}}
var r=[],q=0;do r.push(void 0),q++,d(l.value).Zb(p(r.length-1),m),l=h.next();while(!l.done)})};
return b});
v("Object.setPrototypeOf",function(a){return a||pa});
v("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
v("WeakMap",function(a){function b(l){this.g=(h+=Math.random()+1).toString();if(l){l=w(l);for(var k;!(k=l.next()).done;)k=k.value,this.set(k[0],k[1])}}
function c(){}
function d(l){var k=typeof l;return k==="object"&&l!==null||k==="function"}
function e(l){if(!ia(l,g)){var k=new c;ba(l,g,{value:k})}}
function f(l){var k=Object[l];k&&(Object[l]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return k(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var l=Object.seal({}),k=Object.seal({}),m=new a([[l,2],[k,3]]);if(m.get(l)!=2||m.get(k)!=3)return!1;m.delete(l);m.set(k,4);return!m.has(l)&&m.get(k)==4}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(l,k){if(!d(l))throw Error("Invalid WeakMap key");e(l);if(!ia(l,g))throw Error("WeakMap key fail: "+l);l[g][this.g]=k;return this};
b.prototype.get=function(l){return d(l)&&ia(l,g)?l[g][this.g]:void 0};
b.prototype.has=function(l){return d(l)&&ia(l,g)&&ia(l[g],this.g)};
b.prototype.delete=function(l){return d(l)&&ia(l,g)&&ia(l[g],this.g)?delete l[g][this.g]:!1};
return b});
v("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,l){var k=h[1];return fa(function(){if(k){for(;k.head!=h[1];)k=k.previous;for(;k.next!=k.head;)return k=k.next,{done:!1,value:l(k)};k=null}return{done:!0,value:void 0}})}
function d(h,l){var k=l&&typeof l;k=="object"||k=="function"?f.has(l)?k=f.get(l):(k=""+ ++g,f.set(l,k)):k="p_"+l;var m=h[0][k];if(m&&ia(h[0],k))for(h=0;h<m.length;h++){var p=m[h];if(l!==l&&p.key!==p.key||l===p.key)return{id:k,list:m,index:h,entry:p}}return{id:k,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=w(h);for(var l;!(l=h.next()).done;)l=l.value,this.set(l[0],l[1])}}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var h=Object.seal({x:4}),l=new a(w([[h,"s"]]));if(l.get(h)!="s"||l.size!=1||l.get({x:4})||l.set({x:4},"t")!=l||l.size!=2)return!1;var k=l.entries(),m=k.next();if(m.done||m.value[0]!=h||m.value[1]!="s")return!1;m=k.next();return m.done||m.value[0].x!=4||m.value[1]!="t"||!k.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,l){h=h===0?0:h;var k=d(this,h);k.list||(k.list=this[0][k.id]=[]);k.entry?k.entry.value=l:(k.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:l},k.list.push(k.entry),this[1].previous.next=k.entry,this[1].previous=k.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,l){for(var k=this.entries(),m;!(m=k.next()).done;)m=m.value,h.call(l,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Fa(a,b,c){if(a==null)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
v("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Fa(this,b,"endsWith");b+="";c===void 0&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;e>0&&c>0;)if(d[--c]!=b[--e])return!1;return e<=0}});
function Ga(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
v("Array.prototype.entries",function(a){return a?a:function(){return Ga(this,function(b,c){return[b,c]})}});
v("Array.prototype.keys",function(a){return a?a:function(){return Ga(this,function(b){return b})}});
v("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Fa(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
v("Number.isFinite",function(a){return a?a:function(b){return typeof b!=="number"?!1:!isNaN(b)&&b!==Infinity&&b!==-Infinity}});
v("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
v("Set",function(a){function b(c){this.g=new Map;if(c){c=w(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.g.size}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var c=Object.seal({x:4}),d=new a(w([c]));if(!d.has(c)||d.size!=1||d.add(c)!=d||d.size!=1||d.add({x:4})!=d||d.size!=2)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||f.value[0].x!=4||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=c===0?0:c;this.g.set(c,c);this.size=this.g.size;return this};
b.prototype.delete=function(c){c=this.g.delete(c);this.size=this.g.size;return c};
b.prototype.clear=function(){this.g.clear();this.size=0};
b.prototype.has=function(c){return this.g.has(c)};
b.prototype.entries=function(){return this.g.entries()};
b.prototype.values=function(){return this.g.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.g.forEach(function(f){return c.call(d,f,f,e)})};
return b});
v("Array.prototype.values",function(a){return a?a:function(){return Ga(this,function(b,c){return c})}});
v("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ia(b,d)&&c.push(b[d]);return c}});
v("Object.is",function(a){return a?a:function(b,c){return b===c?b!==0||1/b===1/c:b!==b&&c!==c}});
v("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(c<0&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
v("String.prototype.includes",function(a){return a?a:function(b,c){return Fa(this,b,"includes").indexOf(b,c||0)!==-1}});
v("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
v("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
v("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
v("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||b===Infinity||b===-Infinity||b===0)return b;var c=Math.floor(Math.abs(b));return b<0?-c:c}});
v("Number.isNaN",function(a){return a?a:function(b){return typeof b==="number"&&isNaN(b)}});
v("Array.from",function(a){return a?a:function(b,c,d){c=c!=null?c:function(h){return h};
var e=[],f=typeof Symbol!="undefined"&&Symbol.iterator&&b[Symbol.iterator];if(typeof f=="function"){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
v("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ia(b,d)&&c.push([d,b[d]]);return c}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var C=this||self;function Ha(a,b){var c=D("CLOSURE_FLAGS");a=c&&c[a];return a!=null?a:b}
function D(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],b==null)return null;return b}
function Ia(a){var b=typeof a;return b!="object"?b:a?Array.isArray(a)?"array":b:"null"}
function Ja(a){var b=Ia(a);return b=="array"||b=="object"&&typeof a.length=="number"}
function La(a){var b=typeof a;return b=="object"&&a!=null||b=="function"}
function Ma(a,b,c){return a.call.apply(a.bind,arguments)}
function Na(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function E(a,b,c){E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ma:Na;return E.apply(null,arguments)}
function F(){return Date.now()}
function G(a,b){a=a.split(".");var c=C;a[0]in c||typeof c.execScript=="undefined"||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function H(a,b){function c(){}
c.prototype=b.prototype;a.Ea=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Gh=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Oa(a){return a}
;function Pa(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Pa);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b!==void 0&&(this.cause=b)}
H(Pa,Error);Pa.prototype.name="CustomError";function Qa(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.i=!b&&/[?&]ae=1(&|$)/.test(a);this.m=!b&&/[?&]ae=2(&|$)/.test(a);if((this.g=/[?&]adurl=([^&]*)/.exec(a))&&this.g[1]){try{var c=decodeURIComponent(this.g[1])}catch(d){c=null}this.l=c}}
;var Ra=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Sa(a,b){return a<b?-1:a>b?1:0}
;/*

 SPDX-License-Identifier: Apache-2.0
*/
function Ta(a){return{valueOf:a}.valueOf()}
;var Va;function Wa(){if(Va===void 0){var a=null,b=C.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Oa,createScript:Oa,createScriptURL:Oa})}catch(c){C.console&&C.console.error(c.message)}Va=a}else Va=a}return Va}
;function Xa(a){this.g=a}
Xa.prototype.toString=function(){return this.g+""};
function Ya(a){if(a instanceof Xa&&a.constructor===Xa)return a.g;Ia(a);return"type_error:TrustedResourceUrl"}
var Za={};function $a(a){var b=Wa();a=b?b.createScriptURL(a):a;return new Xa(a,Za)}
;function ab(a){this.g=a}
ab.prototype.toString=function(){return this.g};
var bb=new ab("about:invalid#zClosurez");function cb(a){this.ig=a}
function db(a){return new cb(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var eb=[db("data"),db("http"),db("https"),db("mailto"),db("ftp"),new cb(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function hb(a){for(var b=Da.apply(1,arguments),c=[a[0]],d=0;d<b.length;d++)c.push(String(b[d])),c.push(a[d+1]);return new ab(c.join(""))}
var ib=Ta(function(){return typeof URL==="function"}),jb=["data:",
"http:","https:","mailto:","ftp:"],kb=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;function lb(a){if(a instanceof ab)if(a instanceof ab)a=a.g;else throw Error("");else a=kb.test(a)?a:void 0;return a}
;function mb(a,b){b=lb(b);b!==void 0&&(a.href=b)}
;var nb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(typeof a==="string")return typeof b!=="string"||b.length!=1?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ob=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},pb=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=typeof a==="string"?a.split(""):a,h=0;h<d;h++)if(h in g){var l=g[h];
b.call(c,l,h,a)&&(e[f++]=l)}return e};
function qb(a,b){b=nb(a,b);var c;(c=b>=0)&&Array.prototype.splice.call(a,b,1);return c}
function rb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ja(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function sb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function tb(a){if(!a||typeof a!=="object")return a;if(typeof a.clone==="function")return a.clone();if(typeof Map!=="undefined"&&a instanceof Map)return new Map(a);if(typeof Set!=="undefined"&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:typeof ArrayBuffer!=="function"||typeof ArrayBuffer.isView!=="function"||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=tb(a[c]);return b}
var ub="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ub.length;f++)c=ub[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
function wb(a){var b=arguments.length;if(b==1&&Array.isArray(arguments[0]))return wb.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c}
;var xb={};function yb(a){this.g=a}
yb.prototype.toString=function(){return this.g.toString()};
function zb(a){if(a instanceof yb&&a.constructor===yb)return a.g;Ia(a);return"type_error:SafeHtml"}
function Ab(a){var b=Wa();a=b?b.createHTML(a):a;return new yb(a,xb)}
;function Bb(a,b){if(a.nodeType===1){var c=a.tagName;if(c==="SCRIPT"||c==="STYLE")throw Error("");}a.innerHTML=zb(b)}
;function Cb(){throw Error("unknown trace type");}
;function Db(a,b){a.src=Ya(b);var c,d;(c=(b=(d=(c=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)==null?void 0:d.call(c,"script[nonce]"))?b.nonce||b.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)}
;function Eb(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function Fb(a){return decodeURIComponent(a.replace(/\+/g," "))}
;var Gb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Hb(a){return a?decodeURI(a):a}
function Ib(a){return Hb(a.match(Gb)[3]||null)}
function Jb(a){var b=a.match(Gb);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function Kb(a){var b=a.indexOf("#");return b<0?a:a.slice(0,b)}
function Lb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Lb(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
function Mb(a){var b=[],c;for(c in a)Lb(c,a[c],b);return b.join("&")}
function Nb(a,b){b=Mb(b);if(b){var c=a.indexOf("#");c<0&&(c=a.length);var d=a.indexOf("?");if(d<0||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function Ob(a,b,c,d){for(var e=c.length;(b=a.indexOf(c,b))>=0&&b<d;){var f=a.charCodeAt(b-1);if(f==38||f==63)if(f=a.charCodeAt(b+e),!f||f==61||f==38||f==35)return b;b+=e+1}return-1}
var Pb=/#|$/,Qb=/[?&]($|#)/;function Rb(){this.Za=this.Za;this.m=this.m}
Rb.prototype.Za=!1;Rb.prototype.dispose=function(){this.Za||(this.Za=!0,this.Ba())};
Rb.prototype[Symbol.dispose]=function(){this.dispose()};
Rb.prototype.addOnDisposeCallback=function(a,b){this.Za?b!==void 0?a.call(b):a():(this.m||(this.m=[]),b&&(a=a.bind(b)),this.m.push(a))};
Rb.prototype.Ba=function(){if(this.m)for(;this.m.length;)this.m.shift()()};function Sb(a,b){this.type=a;this.g=this.target=b;this.defaultPrevented=this.i=!1}
Sb.prototype.stopPropagation=function(){this.i=!0};
Sb.prototype.preventDefault=function(){this.defaultPrevented=!0};var Tb=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();var Ub=Ha(610401301,!1),Vb=Ha(188588736,!0),Wb=Ha(645172343,Ha(1,!0));function Xb(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Yb,Zb=C.navigator;Yb=Zb?Zb.userAgentData||null:null;function $b(a){return Ub?Yb?Yb.brands.some(function(b){return(b=b.brand)&&b.indexOf(a)!=-1}):!1:!1}
function I(a){return Xb().indexOf(a)!=-1}
;function ac(){return Ub?!!Yb&&Yb.brands.length>0:!1}
function bc(){return ac()?!1:I("Opera")}
function cc(){return ac()?!1:I("Trident")||I("MSIE")}
function dc(){return ac()?$b("Microsoft Edge"):I("Edg/")}
function ec(){return I("Safari")&&!(fc()||(ac()?0:I("Coast"))||bc()||(ac()?0:I("Edge"))||dc()||(ac()?$b("Opera"):I("OPR"))||I("Firefox")||I("FxiOS")||I("Silk")||I("Android"))}
function fc(){return ac()?$b("Chromium"):(I("Chrome")||I("CriOS"))&&!(ac()?0:I("Edge"))||I("Silk")}
function gc(a){var b={};a.forEach(function(c){b[c[0]]=c[1]});
return function(c){return b[c.find(function(d){return d in b})]||""}}
function hc(){var a=Xb();if(cc()){var b=/rv: *([\d\.]*)/.exec(a);if(b&&b[1])a=b[1];else{b="";var c=/MSIE +([\d\.]+)/.exec(a);if(c&&c[1])if(a=/Trident\/(\d.\d)/.exec(a),c[1]=="7.0")if(a&&a[1])switch(a[1]){case "4.0":b="8.0";break;case "5.0":b="9.0";break;case "6.0":b="10.0";break;case "7.0":b="11.0"}else b="7.0";else b=c[1];a=b}return a}c=RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g");b=[];for(var d;d=c.exec(a);)b.push([d[1],d[2],d[3]||void 0]);a=gc(b);return bc()?a(["Version","Opera"]):
(ac()?0:I("Edge"))?a(["Edge"]):dc()?a(["Edg"]):I("Silk")?a(["Silk"]):fc()?a(["Chrome","CriOS","HeadlessChrome"]):(a=b[2])&&a[1]||""}
;function ic(){return Ub&&Yb&&Yb.platform?Yb.platform==="Android":I("Android")}
function jc(){return I("iPhone")&&!I("iPod")&&!I("iPad")}
;var kc=cc(),lc=I("Edge"),mc=ic();function nc(a,b){Sb.call(this,a?a.type:"");this.relatedTarget=this.g=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.l=null;a&&this.init(a,b)}
H(nc,Sb);
nc.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.g=b;b=a.relatedTarget;b||(c=="mouseover"?b=a.fromElement:c=="mouseout"&&(b=a.toElement));this.relatedTarget=b;d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==
void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=a.pointerType;this.state=a.state;this.l=a;a.defaultPrevented&&nc.Ea.preventDefault.call(this)};
nc.prototype.stopPropagation=function(){nc.Ea.stopPropagation.call(this);this.l.stopPropagation?this.l.stopPropagation():this.l.cancelBubble=!0};
nc.prototype.preventDefault=function(){nc.Ea.preventDefault.call(this);var a=this.l;a.preventDefault?a.preventDefault():a.returnValue=!1};var oc="closure_listenable_"+(Math.random()*1E6|0);var pc=0;function qc(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.kc=e;this.key=++pc;this.Rb=this.Yb=!1}
function rc(a){a.Rb=!0;a.listener=null;a.proxy=null;a.src=null;a.kc=null}
;function sc(a){this.src=a;this.listeners={};this.g=0}
sc.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.g++);var g=tc(a,b,d,e);g>-1?(b=a[g],c||(b.Yb=!1)):(b=new qc(b,this.src,f,!!d,e),b.Yb=c,a.push(b));return b};
sc.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=tc(e,b,c,d);return b>-1?(rc(e[b]),Array.prototype.splice.call(e,b,1),e.length==0&&(delete this.listeners[a],this.g--),!0):!1};
function uc(a,b){var c=b.type;c in a.listeners&&qb(a.listeners[c],b)&&(rc(b),a.listeners[c].length==0&&(delete a.listeners[c],a.g--))}
function tc(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Rb&&f.listener==b&&f.capture==!!c&&f.kc==d)return e}return-1}
;var vc="closure_lm_"+(Math.random()*1E6|0),wc={},xc=0;function yc(a,b,c,d,e){if(d&&d.once)zc(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)yc(a,b[f],c,d,e);else c=Ac(c),a&&a[oc]?a.ra(b,c,La(d)?!!d.capture:!!d,e):Bc(a,b,c,!1,d,e)}
function Bc(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=La(e)?!!e.capture:!!e,h=Cc(a);h||(a[vc]=h=new sc(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Dc();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Tb||(e=g),e===void 0&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Ec(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");xc++}}
function Dc(){function a(c){return b.call(a.src,a.listener,c)}
var b=Fc;return a}
function zc(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)zc(a,b[f],c,d,e);else c=Ac(c),a&&a[oc]?a.g.add(String(b),c,!0,La(d)?!!d.capture:!!d,e):Bc(a,b,c,!0,d,e)}
function Gc(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Gc(a,b[f],c,d,e);else(d=La(d)?!!d.capture:!!d,c=Ac(c),a&&a[oc])?a.g.remove(String(b),c,d,e):a&&(a=Cc(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=tc(b,c,d,e)),(c=a>-1?b[a]:null)&&Hc(c))}
function Hc(a){if(typeof a!=="number"&&a&&!a.Rb){var b=a.src;if(b&&b[oc])uc(b.g,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Ec(c),d):b.addListener&&b.removeListener&&b.removeListener(d);xc--;(c=Cc(b))?(uc(c,a),c.g==0&&(c.src=null,b[vc]=null)):rc(a)}}}
function Ec(a){return a in wc?wc[a]:wc[a]="on"+a}
function Fc(a,b){if(a.Rb)a=!0;else{b=new nc(b,this);var c=a.listener,d=a.kc||a.src;a.Yb&&Hc(a);a=c.call(d,b)}return a}
function Cc(a){a=a[vc];return a instanceof sc?a:null}
var Ic="__closure_events_fn_"+(Math.random()*1E9>>>0);function Ac(a){if(typeof a==="function")return a;a[Ic]||(a[Ic]=function(b){return a.handleEvent(b)});
return a[Ic]}
;function Jc(){Rb.call(this);this.g=new sc(this);this.B=this;this.u=null}
H(Jc,Rb);Jc.prototype[oc]=!0;Jc.prototype.addEventListener=function(a,b,c,d){yc(this,a,b,c,d)};
Jc.prototype.removeEventListener=function(a,b,c,d){Gc(this,a,b,c,d)};
function Kc(a,b){var c=a.u;if(c){var d=[];for(var e=1;c;c=c.u)d.push(c),++e}a=a.B;c=b.type||b;typeof b==="string"?b=new Sb(b,a):b instanceof Sb?b.target=b.target||a:(e=b,b=new Sb(c,a),vb(b,e));e=!0;if(d)for(var f=d.length-1;!b.i&&f>=0;f--){var g=b.g=d[f];e=Lc(g,c,!0,b)&&e}b.i||(g=b.g=a,e=Lc(g,c,!0,b)&&e,b.i||(e=Lc(g,c,!1,b)&&e));if(d)for(f=0;!b.i&&f<d.length;f++)g=b.g=d[f],e=Lc(g,c,!1,b)&&e}
Jc.prototype.Ba=function(){Jc.Ea.Ba.call(this);if(this.g){var a=this.g,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,rc(d[e]);delete a.listeners[c];a.g--}}this.u=null};
Jc.prototype.ra=function(a,b,c,d){return this.g.add(String(a),b,!1,c,d)};
function Lc(a,b,c,d){b=a.g.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Rb&&g.capture==c){var h=g.listener,l=g.kc||g.src;g.Yb&&uc(a.g,g);e=h.call(l,d)!==!1&&e}}return e&&!d.defaultPrevented}
;function Mc(a,b){this.i=a;this.m=b;this.l=0;this.g=null}
Mc.prototype.get=function(){if(this.l>0){this.l--;var a=this.g;this.g=a.next;a.next=null}else a=this.i();return a};
function Nc(a,b){a.m(b);a.l<100&&(a.l++,b.next=a.g,a.g=b)}
;function Oc(){}
;function Pc(){var a=Qc;return document.createRange().createContextualFragment(zb(Ab(a[0])))}
;function Rc(a,b){var c=b.createRange();c.selectNode(b.body);a=Ab(a);return c.createContextualFragment(zb(a))}
;function Sc(a){a=a.nodeName;return typeof a==="string"?a:"FORM"}
function Tc(a){a=a.nodeType;return a===1||typeof a!=="number"}
;var Uc="ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" "),
Vc=[["A",new Map([["href",{ja:2}]])],["AREA",new Map([["href",{ja:2}]])],["LINK",new Map([["href",{ja:5,conditions:new Map([["rel",new Set("alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" "))]])}]])],["SOURCE",new Map([["src",{ja:5}],["srcset",{ja:6}]])],["IMG",new Map([["src",{ja:5}],["srcset",{ja:6}]])],["VIDEO",new Map([["src",{ja:5}]])],["AUDIO",new Map([["src",{ja:5}]])]],Wc="title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked color cols colspan controls datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden ismap label lang loop max maxlength media minlength min multiple muted nonce open placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type valign value width wrap itemscope itemtype itemid itemprop itemref".split(" "),
Xc=[["dir",{ja:3,conditions:Ta(function(){return new Map([["dir",new Set(["auto","ltr","rtl"])]])})}],
["async",{ja:3,conditions:Ta(function(){return new Map([["async",new Set(["async"])]])})}],
["cite",{ja:2}],["loading",{ja:3,conditions:Ta(function(){return new Map([["loading",new Set(["eager","lazy"])]])})}],
["poster",{ja:2}],["target",{ja:3,conditions:Ta(function(){return new Map([["target",new Set(["_self","_blank"])]])})}]],Yc=new function(){var a=new Set(Wc),b=new Map(Xc),c=new Map(Vc);
this.l=new Set(Uc);this.g=c;this.i=a;this.m=b};function Zc(){this.g=Yc}
function $c(a,b){var c=document.implementation.createHTMLDocument("");a=ad(a,b,c);c=c.body;c.appendChild(a);c=(new XMLSerializer).serializeToString(c);c=c.slice(c.indexOf(">")+1,c.lastIndexOf("</"));return Ab(c)}
function ad(a,b,c){b=Rc(b,c);b=document.createTreeWalker(b,5,function(h){if(h.nodeType===3)h=1;else if(Tc(h))if(h=Sc(h),h===null)h=2;else{var l=a.g;h=h!=="FORM"&&(l.l.has(h)||l.g.has(h))?1:2}else h=2;return h});
for(var d=b.nextNode(),e=c.createDocumentFragment(),f=e;d!==null;){var g=void 0;if(d.nodeType===3)g=document.createTextNode(d.data);else if(Tc(d))g=bd(a,d,c);else throw Error("");f.appendChild(g);if(d=b.firstChild())f=g;else for(;!(d=b.nextSibling())&&(d=b.parentNode());)f=f.parentNode}return e}
function bd(a,b,c){var d=Sc(b);c=c.createElement(d);b=b.attributes;for(var e=w(b),f=e.next();!f.done;f=e.next()){var g=f.value;f=g.name;g=g.value;var h=a.g;var l=h.g.get(d);h=(l==null?0:l.has(f))?l.get(f):h.i.has(f)?{ja:1}:(h=h.m.get(f))?h:{ja:0};a:{if(l=h.conditions){l=w(l);for(var k=l.next();!k.done;k=l.next()){var m=w(k.value);k=m.next().value;m=m.next().value;var p=void 0;if((k=(p=b.getNamedItem(k))==null?void 0:p.value)&&!m.has(k)){l=!1;break a}}}l=!0}if(l)switch(h.ja){case 1:cd(c,f,g);break;
case 2:a:if(h=void 0,ib){try{h=new URL(g)}catch(r){h="https:";break a}h=h.protocol}else b:{h=document.createElement("a");try{h.href=g}catch(r){h=void 0;break b}h=h.protocol;h=h===":"||h===""?"https:":h}cd(c,f,h!==void 0&&jb.indexOf(h.toLowerCase())!==-1?g:"about:invalid#zClosurez");break;case 3:cd(c,f,g.toLowerCase());break;case 4:cd(c,f,g);break;case 5:cd(c,f,g);break;case 6:cd(c,f,g)}}return c}
function cd(a,b,c){a.setAttribute(b,c)}
var dd=Ta(function(){return new Zc});function ed(a){var b=a.split(/\?|#/),c=/\?/.test(a)?"?"+b[1]:"";return{path:b[0],params:c,hash:/#/.test(a)?"#"+(c?b[2]:b[1]):""}}
function fd(a){var b=Da.apply(1,arguments);if(b.length===0)return $a(a[0]);for(var c=a[0],d=0;d<b.length;d++)c+=encodeURIComponent(b[d])+a[d+1];return $a(c)}
function gd(a,b){a=ed(Ya(a).toString());var c=a.params,d=c.length?"&":"?";b.forEach(function(e,f){e=e instanceof Array?e:[e];for(var g=0;g<e.length;g++){var h=e[g];h!==null&&h!==void 0&&(c+=d+encodeURIComponent(f)+"="+encodeURIComponent(String(h)),d="&")}});
return $a(a.path+c+a.hash)}
;function hd(a,b){this.width=a;this.height=b}
n=hd.prototype;n.clone=function(){return new hd(this.width,this.height)};
n.aspectRatio=function(){return this.width/this.height};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function id(a){var b=document;a=String(a);b.contentType==="application/xhtml+xml"&&(a=a.toLowerCase());return b.createElement(a)}
;function jd(a){typeof C.setImmediate!=="function"||C.Window&&C.Window.prototype&&C.Window.prototype.setImmediate==C.setImmediate?(kd||(kd=ld()),kd(a)):C.setImmediate(a)}
var kd;function ld(){var a=C.MessageChannel;typeof a==="undefined"&&typeof window!=="undefined"&&window.postMessage&&window.addEventListener&&!I("Presto")&&(a=function(){var e=id("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h=f.location.protocol=="file:"?"*":f.location.protocol+"//"+f.location.host;e=E(function(l){if((h=="*"||l.origin==h)&&l.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if(typeof a!=="undefined"){var b=new a,c={},d=c;b.port1.onmessage=function(){if(c.next!==void 0){c=c.next;var e=c.Ed;c.Ed=null;e()}};
return function(e){d.next={Ed:e};d=d.next;b.port2.postMessage(0)}}return function(e){C.setTimeout(e,0)}}
;function md(a){C.setTimeout(function(){throw a;},0)}
;function nd(){this.l=this.g=null}
nd.prototype.add=function(a,b){var c=od.get();c.set(a,b);this.l?this.l.next=c:this.g=c;this.l=c};
nd.prototype.remove=function(){var a=null;this.g&&(a=this.g,this.g=this.g.next,this.g||(this.l=null),a.next=null);return a};
var od=new Mc(function(){return new pd},function(a){return a.reset()});
function pd(){this.next=this.scope=this.g=null}
pd.prototype.set=function(a,b){this.g=a;this.scope=b;this.next=null};
pd.prototype.reset=function(){this.next=this.scope=this.g=null};var qd,rd=!1,sd=new nd;function td(a,b){qd||ud();rd||(qd(),rd=!0);sd.add(a,b)}
function ud(){if(C.Promise&&C.Promise.resolve){var a=C.Promise.resolve(void 0);qd=function(){a.then(vd)}}else qd=function(){jd(vd)}}
function vd(){for(var a;a=sd.remove();){try{a.g.call(a.scope)}catch(b){md(b)}Nc(od,a)}rd=!1}
;function wd(a){this.g=0;this.u=void 0;this.m=this.l=this.i=null;this.o=this.s=!1;if(a!=Oc)try{var b=this;a.call(void 0,function(c){xd(b,2,c)},function(c){xd(b,3,c)})}catch(c){xd(this,3,c)}}
function yd(){this.next=this.context=this.l=this.i=this.g=null;this.m=!1}
yd.prototype.reset=function(){this.context=this.l=this.i=this.g=null;this.m=!1};
var zd=new Mc(function(){return new yd},function(a){a.reset()});
function Ad(a,b,c){var d=zd.get();d.i=a;d.l=b;d.context=c;return d}
wd.prototype.then=function(a,b,c){return Bd(this,typeof a==="function"?a:null,typeof b==="function"?b:null,c)};
wd.prototype.$goog_Thenable=!0;wd.prototype.cancel=function(a){if(this.g==0){var b=new Cd(a);td(function(){Dd(this,b)},this)}};
function Dd(a,b){if(a.g==0)if(a.i){var c=a.i;if(c.l){for(var d=0,e=null,f=null,g=c.l;g&&(g.m||(d++,g.g==a&&(e=g),!(e&&d>1)));g=g.next)e||(f=g);e&&(c.g==0&&d==1?Dd(c,b):(f?(d=f,d.next==c.m&&(c.m=d),d.next=d.next.next):Ed(c),Fd(c,e,3,b)))}a.i=null}else xd(a,3,b)}
function Gd(a,b){a.l||a.g!=2&&a.g!=3||Hd(a);a.m?a.m.next=b:a.l=b;a.m=b}
function Bd(a,b,c,d){var e=Ad(null,null,null);e.g=new wd(function(f,g){e.i=b?function(h){try{var l=b.call(d,h);f(l)}catch(k){g(k)}}:f;
e.l=c?function(h){try{var l=c.call(d,h);l===void 0&&h instanceof Cd?g(h):f(l)}catch(k){g(k)}}:g});
e.g.i=a;Gd(a,e);return e.g}
wd.prototype.B=function(a){this.g=0;xd(this,2,a)};
wd.prototype.D=function(a){this.g=0;xd(this,3,a)};
function xd(a,b,c){if(a.g==0){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.g=1;a:{var d=c,e=a.B,f=a.D;if(d instanceof wd){Gd(d,Ad(e||Oc,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(k){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(La(d))try{var l=d.then;if(typeof l==="function"){Id(d,l,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}}g||(a.u=c,a.g=b,a.i=null,Hd(a),b!=3||c instanceof Cd||Jd(a,c))}}
function Id(a,b,c,d,e){function f(l){h||(h=!0,d.call(e,l))}
function g(l){h||(h=!0,c.call(e,l))}
var h=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function Hd(a){a.s||(a.s=!0,td(a.A,a))}
function Ed(a){var b=null;a.l&&(b=a.l,a.l=b.next,b.next=null);a.l||(a.m=null);return b}
wd.prototype.A=function(){for(var a;a=Ed(this);)Fd(this,a,this.g,this.u);this.s=!1};
function Fd(a,b,c,d){if(c==3&&b.l&&!b.m)for(;a&&a.o;a=a.i)a.o=!1;if(b.g)b.g.i=null,Kd(b,c,d);else try{b.m?b.i.call(b.context):Kd(b,c,d)}catch(e){Ld.call(null,e)}Nc(zd,b)}
function Kd(a,b,c){b==2?a.i.call(a.context,c):a.l&&a.l.call(a.context,c)}
function Jd(a,b){a.o=!0;td(function(){a.o&&Ld.call(null,b)})}
var Ld=md;function Cd(a){Pa.call(this,a)}
H(Cd,Pa);Cd.prototype.name="cancel";function Md(a,b){Jc.call(this);this.i=a||1;this.l=b||C;this.o=E(this.Rg,this);this.s=F()}
H(Md,Jc);n=Md.prototype;n.enabled=!1;n.Ka=null;n.Rg=function(){if(this.enabled){var a=F()-this.s;a>0&&a<this.i*.8?this.Ka=this.l.setTimeout(this.o,this.i-a):(this.Ka&&(this.l.clearTimeout(this.Ka),this.Ka=null),Kc(this,"tick"),this.enabled&&(Nd(this),this.start()))}};
n.start=function(){this.enabled=!0;this.Ka||(this.Ka=this.l.setTimeout(this.o,this.i),this.s=F())};
function Nd(a){a.enabled=!1;a.Ka&&(a.l.clearTimeout(a.Ka),a.Ka=null)}
n.Ba=function(){Md.Ea.Ba.call(this);Nd(this);delete this.l};var Od=jc()||I("iPod"),Pd=I("iPad");!I("Android")||fc();fc();var Qd=ec()&&!(jc()||I("iPad")||I("iPod"));var Rd={},Sd=null;
function Td(a,b){Ja(a);b===void 0&&(b=0);if(!Sd){Sd={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;e<5;e++){var f=c.concat(d[e].split(""));Rd[e]=f;for(var g=0;g<f.length;g++){var h=f[g];Sd[h]===void 0&&(Sd[h]=g)}}}b=Rd[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var l=a[f],k=a[f+1];h=a[f+2];g=b[l>>2];l=b[(l&3)<<4|k>>4];k=b[(k&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+l+k+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Ud=typeof Uint8Array!=="undefined",Vd=!kc&&typeof btoa==="function";var Wd;function Xd(){var a=Error();Eb(a,"incident");md(a)}
function Yd(a){a=Error(a);Eb(a,"warning");return a}
;function Zd(){return typeof BigInt==="function"}
;var $d=typeof Symbol==="function"&&typeof Symbol()==="symbol";function ae(a){return typeof Symbol==="function"&&typeof Symbol()==="symbol"?Symbol():a}
var be=ae(),ce=ae("2ex"),de=ae("1oa");Math.max.apply(Math,x(Object.values({sh:1,qh:2,ph:4,vh:8,uh:16,th:32,kh:64,xh:128,oh:256,nh:512,rh:1024,lh:2048,wh:4096,mh:8192})));var ee=$d?function(a,b){a[be]|=b}:function(a,b){a.g!==void 0?a.g|=b:Object.defineProperties(a,{g:{value:b,
configurable:!0,writable:!0,enumerable:!1}})},fe=$d?function(a,b){a[be]&=~b}:function(a,b){a.g!==void 0&&(a.g&=~b)},ge=$d?function(a){return a[be]|0}:function(a){return a.g|0},he=$d?function(a){return a[be]}:function(a){return a.g},ie=$d?function(a,b){a[be]=b}:function(a,b){a.g!==void 0?a.g=b:Object.defineProperties(a,{g:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function je(a,b){ie(b,(a|0)&-14591)}
function ke(a,b){ie(b,(a|34)&-14557)}
;var le={},me={};function ne(a){return!(!a||typeof a!=="object"||a.g!==me)}
function oe(a){return a!==null&&typeof a==="object"&&!Array.isArray(a)&&a.constructor===Object}
function pe(a,b,c){if(!Array.isArray(a)||a.length)return!1;var d=ge(a);if(d&1)return!0;if(!(b&&(Array.isArray(b)?b.includes(c):b.has(c))))return!1;ie(a,d|1);return!0}
var qe,re=[];ie(re,55);qe=Object.freeze(re);function se(a){if(a&2)throw Error();}
;var te=0,ue=0;function ve(a){var b=a>>>0;te=b;ue=(a-b)/4294967296>>>0}
function we(a){if(a<0){ve(0-a);var b=w(xe(te,ue));a=b.next().value;b=b.next().value;te=a>>>0;ue=b>>>0}else ve(a)}
function ye(a,b){b>>>=0;a>>>=0;if(b<=2097151)var c=""+(4294967296*b+a);else Zd()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+c*6777216+b*6710656,c+=b*8147497,b*=2,a>=1E7&&(c+=a/1E7>>>0,a%=1E7),c>=1E7&&(b+=c/1E7>>>0,c%=1E7),c=b+ze(c)+ze(a));return c}
function ze(a){a=String(a);return"0000000".slice(a.length)+a}
function Ae(){var a=te,b=ue;b&2147483648?Zd()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=w(xe(a,b)),a=b.next().value,b=b.next().value,a="-"+ye(a,b)):a=ye(a,b);return a}
function xe(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function Be(a){return a.displayName||a.name||"unknown type name"}
var Ce=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function De(a){var b=typeof a;return b==="number"?Number.isFinite(a):b!=="string"?!1:Ce.test(a)}
function Ee(a){if(a!=null){var b=!!b;if(!De(a))throw Yd("int64");if(typeof a==="string")if(De(a),b=Math.trunc(Number(a)),Number.isSafeInteger(b))a=String(b);else{if(b=a.indexOf("."),b!==-1&&(a=a.substring(0,b)),!Fe(a)){if(a.length<16)we(Number(a));else if(Zd())a=BigInt(a),te=Number(a&BigInt(4294967295))>>>0,ue=Number(a>>BigInt(32)&BigInt(4294967295));else{b=+(a[0]==="-");ue=te=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),ue*=1E6,te=te*1E6+d,te>=4294967296&&(ue+=Math.trunc(te/
4294967296),ue>>>=0,te>>>=0);b&&(b=w(xe(te,ue)),a=b.next().value,b=b.next().value,te=a,ue=b)}a=Ae()}}else if(b)De(a),a=Math.trunc(a),Number.isSafeInteger(a)?a=String(a):(b=String(a),Fe(b)?a=b:(we(a),a=Ae()));else if(De(a),a=Math.trunc(a),!Number.isSafeInteger(a)){we(a);b=te;c=ue;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,b==0&&(c=c+1>>>0);b=c*4294967296+(b>>>0);a=a?-b:b}}return a}
function Fe(a){return a[0]==="-"?a.length<20?!0:a.length===20&&Number(a.substring(0,7))>-922337:a.length<19?!0:a.length===19&&Number(a.substring(0,6))<922337}
function Ge(a){if(a!=null&&typeof a!=="string")throw Error();return a}
function He(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Be(b)+" but got "+(a&&Be(a.constructor)));return a}
function Ie(a,b,c){if(a!=null&&typeof a==="object"&&a.bd===le)return a;if(Array.isArray(a)){var d=ge(a),e=d;e===0&&(e|=c&32);e|=c&2;e!==d&&ie(a,e);return new b(a)}}
;function Je(a){var b=Ke(a);if(b)return b;if(Math.random()>.01||typeof Proxy!=="function")return a;b=new Proxy(a,{set:function(c,d,e){Le();c[d]=e;return!0}});
Me(a,b);return b}
function Le(){Xd()}
var Ne=void 0,Oe=void 0;function Ke(a){var b;return(b=Ne)==null?void 0:b.get(a)}
function Me(a,b){(Ne||(Ne=new WeakMap)).set(a,b);(Oe||(Oe=new WeakMap)).set(b,a)}
;var Pe;
function Qe(a,b,c){a==null&&(a=Pe);Pe=void 0;if(a==null){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error("narr");d=ge(a);if(d&2048)throw Error("farr");if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error("mid");a:{c=a;var e=c.length;if(e){var f=e-1;if(oe(c[f])){d|=256;b=f-(+!!(d&512)-1);if(b>=1024)throw Error("pvtlmt");d=d&-16760833|(b&1023)<<14;break a}}if(b){b=Math.max(b,e-(+!!(d&512)-1));if(b>1024)throw Error("spvt");d=d&-16760833|(b&1023)<<
14}}}ie(a,d);return a}
;function Re(a,b){return Se(b)}
function Se(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(pe(a,void 0,0))return}else if(Ud&&a!=null&&a instanceof Uint8Array){if(Vd){for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);a=btoa(b)}else a=Td(a);return a}}return a}
;function Te(a,b,c){a=Array.prototype.slice.call(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function Ue(a,b,c,d,e){if(a!=null){if(Array.isArray(a))a=pe(a,void 0,0)?void 0:e&&ge(a)&2?a:Ve(a,b,c,d!==void 0,e);else if(oe(a)){var f={},g;for(g in a)f[g]=Ue(a[g],b,c,d,e);a=f}else a=b(a,d);return a}}
function Ve(a,b,c,d,e){var f=d||c?ge(a):0;d=d?!!(f&32):void 0;a=Array.prototype.slice.call(a);for(var g=0;g<a.length;g++)a[g]=Ue(a[g],b,c,d,e);c&&c(f,a);return a}
function We(a){return a.bd===le?a.toJSON():Se(a)}
;function Xe(a,b,c){c=c===void 0?ke:c;if(a!=null){if(Ud&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=ge(a);if(d&2)return a;b&&(b=d===0||!!(d&32)&&!(d&64||!(d&16)));return b?(ie(a,(d|34)&-12293),a):Ve(a,Xe,d&4?ke:c,!0,!0)}a.bd===le&&(c=a.U,d=he(c),a=d&2?a:Ye(a,c,d,!0));return a}}
function Ye(a,b,c,d){a=a.constructor;b=Ze(b,c,d);ge(b);Pe=b;b=new a(b);Pe=void 0;return b}
function Ze(a,b,c){var d=c||b&2?ke:je,e=!!(b&32);a=Te(a,b,function(f){return Xe(f,e,d)});
ee(a,32|(c?2:0));return a}
function $e(a){var b=a.U,c=he(b);return c&2?Ye(a,b,c,!1):a}
;function af(a,b){a=a.U;return bf(a,he(a),b)}
function cf(a,b,c,d){b=d+(+!!(b&512)-1);if(!(b<0||b>=a.length||b>=c))return a[b]}
function bf(a,b,c,d){if(c===-1)return null;var e=b>>14&1023||536870912;if(c>=e){if(b&256)return a[a.length-1][c]}else{var f=a.length;if(d&&b&256&&(d=a[f-1][c],d!=null)){if(cf(a,b,e,c)&&ce!=null){var g;a=(g=Wd)!=null?g:Wd={};g=a[ce]||0;g>=4||(a[ce]=g+1,Xd())}return d}return cf(a,b,e,c)}}
function df(a,b,c){var d=a.U,e=he(d);se(e);ef(d,e,b,c);return a}
function ef(a,b,c,d,e){oe(d);var f=b>>14&1023||536870912;if(c>=f||e&&!Wb){var g=b;if(b&256)e=a[a.length-1];else{if(d==null)return g;e=a[f+(+!!(b&512)-1)]={};g|=256}e[c]=d;c<f&&(a[c+(+!!(b&512)-1)]=void 0);g!==b&&ie(a,g);return g}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function ff(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function gf(a){if($d){var b;return(b=a[de])!=null?b:a[de]=new Map}if(de in a)return a[de];b=new Map;Object.defineProperty(a,de,{value:b});return b}
function hf(a,b,c,d){var e=a.get(d);if(e!=null)return e;for(var f=e=0;f<d.length;f++){var g=d[f];bf(b,c,g)!=null&&(e!==0&&(c=ef(b,c,e)),e=g)}a.set(d,e);return e}
function jf(a,b,c){var d=d===void 0?!1:d;var e=a.U;var f=he(e),g=bf(e,f,c,d);b=Ie(g,b,f);b!==g&&b!=null&&ef(e,f,c,b,d);e=b;if(e==null)return e;a=a.U;f=he(a);f&2||(g=$e(e),g!==e&&(e=g,ef(a,f,c,e,d)));return e}
function kf(a,b,c,d){d!=null?He(d,b):d=void 0;return df(a,c,d)}
function lf(a,b){a=(2&b?a|2:a&-3)|32;return a&=-2049}
function mf(a,b){var c=!0;32&b&&c||(a&=-33);return a}
function nf(a,b,c,d){a=a.U;var e=he(a);se(e);var f,g,h=!!(2&e),l=h?1:2;g&&(g=!h);h=bf(a,e,b);h=Array.isArray(h)?h:qe;var k=ge(h),m=!!(4&k);if(!m){var p=k;p===0&&(p=lf(p,e));k=h;p|=1;var r=e,q=!!(2&p);q&&(r|=2);for(var t=!q,u=!0,A=0,K=0;A<k.length;A++){var O=Ie(k[A],c,r);if(O instanceof c){if(!q){var X=!!(ge(O.U)&2);t&&(t=!X);u&&(u=X)}k[K++]=O}}K<A&&(k.length=K);p|=4;p=u?p|16:p&-17;p=t?p|8:p&-9;ie(k,p);q&&Object.freeze(k);k=p}if(g&&!(8&k||!h.length&&(l===1||l===4&&32&k))){ff(k)&&(h=Array.prototype.slice.call(h),
k=lf(k,e),e=ef(a,e,b,h));g=h;for(p=0;p<g.length;p++)r=g[p],q=$e(r),r!==q&&(g[p]=q);k|=8;k=g.length?k&-17:k|16;ie(g,k)}l===1||l===4&&32&k?ff(k)||(b=k,a=!!(32&k),k|=!h.length||16&k&&(!m||a)?2:2048,k!==b&&ie(h,k),Object.freeze(h)):(m=l!==5?!1:!!(32&k)||ff(k)||!!Ke(h),(l===2||m)&&ff(k)&&(h=Array.prototype.slice.call(h),k=lf(k,e),k=mf(k,e),ie(h,k),e=ef(a,e,b,h)),ff(k)||(b=k,k=mf(k,e),k!==b&&ie(h,k)),m&&(f=Je(h)));f=f||h;c=d!=null?He(d,c):new c;f.push(c);ge(c.U)&2?fe(f,8):fe(f,16)}
function of(a,b){var c=0;c=c===void 0?0:c;a=af(a,b);a=a==null?a:Number.isFinite(a)?a|0:void 0;return a!=null?a:c}
function pf(a,b){var c=qf;var d=a.U;c=hf(gf(d),d,he(d),c);a=af(a,c===b?b:-1);return a==null||typeof a==="string"?a:void 0}
function J(a,b,c){return df(a,b,Ge(c))}
function rf(a,b,c){if(c!=null){if(!Number.isFinite(c))throw Yd("enum");c|=0}return df(a,b,c)}
;var sf;function tf(a,b,c){this.U=Qe(a,b,c)}
tf.prototype.toJSON=function(){return uf(this)};
tf.prototype.clone=function(){var a=this.U;return Ye(this,a,he(a),!1)};
tf.prototype.bd=le;tf.prototype.toString=function(){try{return sf=!0,uf(this).toString()}finally{sf=!1}};
function uf(a){var b;sf?b=a.U:b=Ve(a.U,We,void 0,void 0,!1);var c=!sf;var d=Vb?void 0:a.constructor.ii;var e=he(c?a.U:b);if(a=b.length){var f=b[a-1],g=oe(f);g?a--:f=void 0;e=+!!(e&512)-1;var h=b;if(g){b:{var l=f;var k={};g=!1;if(l)for(var m in l)if(isNaN(+m))k[m]=l[m];else{var p=l[m];Array.isArray(p)&&(pe(p,d,+m)||ne(p)&&p.size===0)&&(p=null);p==null&&(g=!0);p!=null&&(k[m]=p)}if(g){for(var r in k)break b;k=null}else k=l}l=k==null?f!=null:k!==f}for(;a>0;a--){r=a-1;m=h[r];r-=e;if(!(m==null||pe(m,d,
r)||ne(m)&&m.size===0))break;var q=!0}if(h!==b||l||q){if(!c)h=Array.prototype.slice.call(h,0,a);else if(q||l||k)h.length=a;k&&h.push(k)}q=h}else q=b;return q}
;var vf=window;function wf(){return Ub&&Yb?Yb.mobile:!(Ub&&Yb?!Yb.mobile&&(I("iPad")||I("Android")||I("Silk")):I("iPad")||I("Android")&&!I("Mobile")||I("Silk"))&&(I("iPod")||I("iPhone")||I("Android")||I("IEMobile"))}
;function xf(a){var b=yf;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function zf(){var a=[];xf(function(b){a.push(b)});
return a}
var yf={Yg:"allow-forms",Zg:"allow-modals",ah:"allow-orientation-lock",bh:"allow-pointer-lock",dh:"allow-popups",eh:"allow-popups-to-escape-sandbox",fh:"allow-presentation",gh:"allow-same-origin",hh:"allow-scripts",ih:"allow-top-navigation",jh:"allow-top-navigation-by-user-activation"},Af=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){return zf()});
function Bf(){var a=Cf(),b={};ob(Af(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Cf(){var a=a===void 0?document:a;return a.createElement("iframe")}
;function Df(){var a=document.body||document.documentElement;a:{var b=a.nodeType==9?a:a.ownerDocument||a.document;if(b.defaultView&&b.defaultView.getComputedStyle&&(b=b.defaultView.getComputedStyle(a,null))){b=b.direction||b.getPropertyValue("direction")||"";break a}b=""}return b||(a.currentStyle?a.currentStyle.direction:null)||a.style&&a.style.direction}
;var Ef=(new Date).getTime();function Ff(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.indexOf("blob:")===0&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();a.indexOf("//")==0&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");c!=-1&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if(c!=="http"&&c!=="https"&&c!=="chrome-extension"&&
c!=="moz-extension"&&c!=="file"&&c!=="android-app"&&c!=="chrome-search"&&c!=="chrome-untrusted"&&c!=="chrome"&&c!=="app"&&c!=="devtools")throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(d!=-1){var e=b.substring(d+1);b=b.substring(0,d);if(c==="http"&&e!=="80"||c==="https"&&e!=="443")a=":"+e}return c+"://"+b+a}
;function Gf(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=k=0}
function b(p){for(var r=g,q=0;q<64;q+=4)r[q/4]=p[q]<<24|p[q+1]<<16|p[q+2]<<8|p[q+3];for(q=16;q<80;q++)p=r[q-3]^r[q-8]^r[q-14]^r[q-16],r[q]=(p<<1|p>>>31)&4294967295;p=e[0];var t=e[1],u=e[2],A=e[3],K=e[4];for(q=0;q<80;q++){if(q<40)if(q<20){var O=A^t&(u^A);var X=1518500249}else O=t^u^A,X=1859775393;else q<60?(O=t&u|A&(t|u),X=2400959708):(O=t^u^A,X=3395469782);O=((p<<5|p>>>27)&4294967295)+O+K+X+r[q]&4294967295;K=A;A=u;u=(t<<30|t>>>2)&4294967295;t=p;p=O}e[0]=e[0]+p&4294967295;e[1]=e[1]+t&4294967295;e[2]=
e[2]+u&4294967295;e[3]=e[3]+A&4294967295;e[4]=e[4]+K&4294967295}
function c(p,r){if(typeof p==="string"){p=unescape(encodeURIComponent(p));for(var q=[],t=0,u=p.length;t<u;++t)q.push(p.charCodeAt(t));p=q}r||(r=p.length);q=0;if(k==0)for(;q+64<r;)b(p.slice(q,q+64)),q+=64,m+=64;for(;q<r;)if(f[k++]=p[q++],m++,k==64)for(k=0,b(f);q+64<r;)b(p.slice(q,q+64)),q+=64,m+=64}
function d(){var p=[],r=m*8;k<56?c(h,56-k):c(h,64-(k-56));for(var q=63;q>=56;q--)f[q]=r&255,r>>>=8;b(f);for(q=r=0;q<5;q++)for(var t=24;t>=0;t-=8)p[r++]=e[q]>>t&255;return p}
for(var e=[],f=[],g=[],h=[128],l=1;l<64;++l)h[l]=0;var k,m;a();return{reset:a,update:c,digest:d,Ye:function(){for(var p=d(),r="",q=0;q<p.length;q++)r+="0123456789ABCDEF".charAt(Math.floor(p[q]/16))+"0123456789ABCDEF".charAt(p[q]%16);return r}}}
;function Hf(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,If(Ff(d),a,c||null)].join(" "):null}
function If(a,b,c){var d=[],e=[];if((Array.isArray(c)?2:1)==1)return e=[b,a],ob(d,function(h){e.push(h)}),Jf(e.join(" "));
var f=[],g=[];ob(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=f.length==0?[c,b,a]:[f.join(":"),c,b,a];ob(d,function(h){e.push(h)});
a=Jf(e.join(" "));a=[c,a];g.length==0||a.push(g.join(""));return a.join("_")}
function Jf(a){var b=Gf();b.update(a);return b.Ye().toLowerCase()}
;var Kf={};function Lf(a){this.g=a||{cookie:""}}
n=Lf.prototype;n.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(this.g.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{Zc:60});if(this.get("TESTCOOKIESENABLED")!=="1")return!1;this.remove("TESTCOOKIESENABLED");return!0};
n.set=function(a,b,c){var d=!1;if(typeof c==="object"){var e=c.ki;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Zc}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');h===void 0&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=h<0?"":h==0?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+h*1E3)).toUTCString();this.g.cookie=a+"="+b+c+g+h+d+(e!=null?";samesite="+
e:"")};
n.get=function(a,b){for(var c=a+"=",d=(this.g.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Ra(d[e]);if(f.lastIndexOf(c,0)==0)return f.slice(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=this.get(a)!==void 0;this.set(a,"",{Zc:0,path:b,domain:c});return d};
n.clear=function(){for(var a=(this.g.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Ra(a[f]),d=e.indexOf("="),d==-1?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;a>=0;a--)this.remove(b[a])};
var Mf=new Lf(typeof document=="undefined"?null:document);function Nf(a){return!!Kf.FPA_SAMESITE_PHASE2_MOD||!(a===void 0||!a)}
function Of(a){a=a===void 0?!1:a;var b=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__OVERRIDE_SID;Nf(a)&&(b=b||C.__1PSAPISID);if(b)return!0;if(typeof document!=="undefined"){var c=new Lf(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID");Nf(a)&&(b=b||c.get("__Secure-1PAPISID"))}return!!b}
function Pf(a,b,c,d){(a=C[a])||typeof document==="undefined"||(a=(new Lf(document)).get(b));return a?Hf(a,c,d):null}
function Qf(a){var b=b===void 0?!1:b;var c=Ff(String(C.location.href)),d=[];if(Of(b)){c=c.indexOf("https:")==0||c.indexOf("chrome-extension:")==0||c.indexOf("chrome-untrusted://new-tab-page")==0||c.indexOf("moz-extension:")==0;var e=c?C.__SAPISID:C.__APISID;e||typeof document==="undefined"||(e=new Lf(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?Hf(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&Nf(b)&&((b=Pf("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&
d.push(b),(a=Pf("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return d.length==0?null:d.join(" ")}
;function Rf(a){Jc.call(this);var b=this;this.A=this.i=0;this.Da=a!=null?a:{Ga:function(e,f){return setTimeout(e,f)},
xa:function(e){clearTimeout(e)}};
var c,d;this.l=(d=(c=window.navigator)==null?void 0:c.onLine)!=null?d:!0;this.o=function(){return B(function(e){return z(e,Sf(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.A||Tf(this)}
y(Rf,Jc);function Uf(){var a=Vf;Rf.g||(Rf.g=new Rf(a));return Rf.g}
Rf.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.Da.xa(this.A);delete Rf.g};
Rf.prototype.ya=function(){return this.l};
function Tf(a){a.A=a.Da.Ga(function(){var b;return B(function(c){if(c.g==1)return a.l?((b=window.navigator)==null?0:b.onLine)?c.M(3):z(c,Sf(a),3):z(c,Sf(a),3);Tf(a);c.g=0})},3E4)}
function Sf(a,b){return a.s?a.s:a.s=new Promise(function(c){var d,e,f,g;return B(function(h){switch(h.g){case 1:return d=window.AbortController?new window.AbortController:void 0,f=(e=d)==null?void 0:e.signal,g=!1,ua(h,2,3),d&&(a.i=a.Da.Ga(function(){d.abort()},b||2E4)),z(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.B=[h.i];h.o=0;h.s=0;a.s=void 0;a.i&&(a.Da.xa(a.i),a.i=0);g!==a.l&&(a.l=g,a.l?Kc(a,"networkstatus-online"):Kc(a,"networkstatus-offline"));c(g);wa(h);break;case 2:va(h),g=!1,h.M(3)}})})}
;var Wf=/^[6-9]$/,Xf=/<\/?(?:b|em)>/gi;function Yf(a){this.g=a}
var Zf=new Yf({});function $f(a){a=ag(a);return Ab(a)}
function bg(a){a=ag(a);return $a(a)}
function ag(a){return a===null?"null":a===void 0?"undefined":a}
;function cg(a,b,c,d,e,f){this.A=a instanceof yb?a:$f(a);this.g=b;this.l=c;this.s=d;this.i=e;this.m=f||Zf;this.o=!1;switch(this.s){case 0:case 32:case 38:case 400:case 407:case 35:case 33:case 41:case 34:case 44:case 45:case 40:case 46:case 56:case 30:case 94:case 92:case 93:case 411:case 410:case 71:this.o=!0}}
cg.prototype.getHtml=function(){return zb(this.A).toString()};
cg.prototype.u=function(){return this.l};
cg.prototype.getType=function(){return this.s};var dg=/^\s/,eg=/\s+/,fg=/\s+/g,gg=/^\s+|\s+$/g,hg=/^\s+$/,ig=/<[^>]*>/g,jg=/&nbsp;/g,kg=/&#x3000;/g,lg=[/&/g,/&amp;/g,/</g,/&lt;/g,/>/g,/&gt;/g,/"/g,/&quot;/g,/'/g,/&#39;/g,/{/g,/&#123;/g],mg=document.getElementsByTagName("head")[0],ng=0,og=1;function pg(a){var b={};if(a)for(var c=0;c<a.length;++c)b[a[c]]=!0;return b}
function qg(a,b){function c(){return b}
b===void 0&&(b=a);return{Mb:c,Sd:function(){return a},
tf:c,Th:function(){return a<b},
equals:function(d){return d&&a==d.Sd()&&b==d.tf()}}}
function rg(a,b,c,d){if(b==null||b===""){if(!d)return;b=""}c.push(a+"="+encodeURIComponent(String(b)))}
function sg(a,b){var c=[],d;for(d in a)rg(d,a[d],c,b);return c.join("&")}
function tg(a){var b={},c=Math.max(a.indexOf("?"),a.indexOf("#"));a=a.substr(c+1);if(c>=0&&a){c=a.split("&");a=0;for(var d;a<c.length;++a)if(d=c[a])d=d.split("="),b[d[0]]=d[1]||""}return b}
function ug(a){return!!a&&!hg.test(a)}
function vg(a){for(var b=lg.length,c=0;c<b;c+=2)a=a.replace(lg[c],lg[c+1].source);return a}
function wg(a){for(var b=lg.length,c=0;c<b;c+=2)a=a.replace(lg[c+1],lg[c].source);a=a.replace(jg," ");return a.replace(kg,"\u3000")}
function xg(a,b){return a&&(a.indexOf(" ")>-1||eg.test(a))?(a=a.replace(fg," "),a.replace(b?gg:dg,"")):a}
function yg(a,b,c){c&&(a=a.toLowerCase(),b=b.toLowerCase());return b.length<=a.length&&a.substring(0,b.length)==b}
function zg(){}
function Ag(a){var b=Bg;if(b.indexOf)return b.indexOf(a);for(var c=0,d=b.length;c<d;++c)if(b[c]===a)return c;return-1}
function Cg(){return 0}
function Dg(a){var b={},c;for(c in a)b[c]=a[c];return b}
function Eg(a,b){a+="";b.length&&(a+="i"+b.join("i"),a+="k"+(nb(b,173)!=-1?14:1));return a}
;function Fg(a,b,c){this.g=a;this.J=b;this.D=c||"";this.u=(ng++).toString(36);this.B=this.g.toLowerCase();this.l=xg(this.B);this.F={};this.A={};this.o=this.I=this.m=!1;this.H=1}
Fg.prototype.getId=function(){return this.u};
function Gg(a){a=parseInt(a.u,36);return isNaN(a)?-1:a}
function Hg(a,b,c,d){a.m||(a.F[b]=c,d&&(a.A[b]=c))}
;function Ig(a,b,c,d,e,f){this.l=a;this.g=b;this.i=c;this.o=d;this.m=e;this.u=f;this.s=!0;this.g?this.g.length&&this.g[0].getType()==33&&(this.m=this.s=!1):this.g=[];this.i||(this.i=Zf)}
Ig.prototype.getType=function(){return this.s};function Jg(){}
Jg.prototype.xd=function(){};
Jg.prototype.redirect=function(){};
Jg.prototype.wd=function(){return""};
Jg.prototype.ge=function(){};function Kg(){this.l={};this.g={}}
Kg.prototype.set=function(a,b){this.l[a]=b};
Kg.prototype.has=function(a){return!!this.l[a]};
function Lg(a,b,c){b in a.g||(a.g[b]=[]);a.g[b].push(c)}
;function Mg(a,b,c,d,e,f){this.s=a;this.A=b;this.B=c;this.o=d;this.i=e;this.config_=f;this.u={};this.m={};this.g=[];this.l=!1;a=this.A;c=a.l;for(var g in c)if(d=g,b=c[d])this.u[d]=b,this.g.push(b);a=a.g;for(g in a){d=g;b=a[d];c=d;d=b;e=this.m[c]||[];for(f=0;f<d.length;++f)if(b=d[f])e.push(b),this.g.push(b);this.m[c]=e}this.g.sort(Ng);for(g=0;a=this.g[g++];)a.sa(this.B,this.o);this.s.ge(this.o);this.o.Se();for(g=0;a=this.g[g++];)a.N(this);for(g=0;a=this.g[g++];)a.ga(this.config_);for(g=0;a=this.g[g++];)a.lb(this.config_);
for(g=0;a=this.g[g++];)a.P(this.config_);this.l=!0}
function Og(a){if(a.l){for(var b=0,c;c=a.g[b++];)c.Fa();a.l=!1}}
Mg.prototype.isActive=function(){return this.l};
Mg.prototype.get=function(a){return this.u[a]};
function Pg(a,b){return a.m[b]||[]}
function Ng(a,b){a=Ag(a.getType());b=Ag(b.getType());return a<0?1:b<0?-1:a-b}
var Bg=[127,551,149,134,494,123,121,126,553,118,115,128,160,173,119,116,152,153,129,120,374,124,158,155,131,130,147,570,141,143,138,144,139,140,135,136];function L(a){this.l=a}
n=L.prototype;n.sa=function(){};
n.N=function(){};
n.ga=function(){};
n.lb=function(){};
n.P=function(){};
n.getType=function(){return this.l};
n.Fa=function(){};function Qg(){this.l=149;this.g={};this.i=0}
y(Qg,L);n=Qg.prototype;n.N=function(a){this.A=a.get(127)};
n.P=function(a){if(a.connectionType==this.ob()){this.config_=a;var b=this.A.i,c="https:"==document.location.protocol;this.s=b.protocol||"http"+(c?"s":"")+"://";this.o=b.host||"clients1."+a.dc;this.u=b.wc;this.m=b.Be}};
n.Fa=function(){Rg(this);this.i=0};
n.ze=function(a,b,c){Sg(this,a.getId(),a.g,b,c);return!0};
n.ob=function(){return 1};
n.Oc=function(){return this.i};
n.Kc=function(a){var b=this.g[a];b&&(Tg(b),delete this.g[a])};
function Sg(a,b,c,d,e){a.config_.Id||Rg(a);var f=new XMLHttpRequest;c=a.s+a.o+a.u+"?"+(a.m?a.m+"&":"")+(d?d+"&":"")+"q="+encodeURIComponent(c)+"&xhr=t&xssi=t";f.open("GET",c,!0);f.withCredentials=!0;a.config_.visitorData&&f.setRequestHeader("X-Goog-Visitor-Id",a.config_.visitorData);f.onreadystatechange=function(){if(f.readyState==4){switch(f.status){case 403:a.i=1E3;break;case 302:case 500:case 502:case 503:++a.i;break;case 200:var g=f.responseText;g.lastIndexOf(")]}'\n",0)==0&&(g=g.substring(5));
e(JSON.parse(g));default:a.i=0}a.Kc(b)}};
a.g[b]=f;f.send(null)}
function Rg(a){for(var b in a.g)Tg(a.g[b]);a.g={}}
function Tg(a){a.onreadystatechange=zg;var b=a.readyState;b!=0&&b!=4&&a.abort()}
;var Ug;function Vg(){this.l=153}
y(Vg,L);function Wg(a,b){a.length&&b.push({getType:function(){return 507},
position:2})}
;function Xg(a){this.o=a}
Xg.prototype.getType=function(){return this.o};
Xg.prototype.s=function(){return!0};function Yg(a){this.l=152;this.D=a}
H(Yg,L);Yg.prototype.yb=zg;var Zg=cc(),$g;if($g=Zg){for(var ah=hc(),bh=0,ch=Ra(String(ah)).split("."),dh=Ra("10").split("."),eh=Math.max(ch.length,dh.length),fh=0;bh==0&&fh<eh;fh++){var gh=ch[fh]||"",hh=dh[fh]||"";do{var ih=/(\d*)(\D*)(.*)/.exec(gh)||["","","",""],jh=/(\d*)(\D*)(.*)/.exec(hh)||["","","",""];if(ih[0].length==0&&jh[0].length==0)break;bh=Sa(ih[1].length==0?0:parseInt(ih[1],10),jh[1].length==0?0:parseInt(jh[1],10))||Sa(ih[2].length==0,jh[2].length==0)||Sa(ih[2],jh[2]);gh=ih[3];hh=jh[3]}while(bh==0)}$g=bh>=0}
var kh=$g,lh=I("Gecko")&&!(Xb().toLowerCase().indexOf("webkit")!=-1&&!I("Edge"))&&!(I("Trident")||I("MSIE"))&&!I("Edge");lh&&hc();var mh=bc(),nh=Xb().toLowerCase().indexOf("webkit")!=-1&&!I("Edge");ec();var oh=fc(),ph=wf()&&ec(),qh=ic(),rh=Ub&&Yb&&Yb.platform?Yb.platform==="macOS":I("Macintosh"),sh=wf();var th;wb("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));function uh(a,b){b?a.setAttribute("role",b):a.removeAttribute("role")}
function vh(a,b,c){Array.isArray(c)&&(c=c.join(" "));var d="aria-"+b;c===""||c==void 0?(th||(c={},th=(c.atomic=!1,c.autocomplete="none",c.dropeffect="none",c.haspopup=!1,c.live="off",c.multiline=!1,c.multiselectable=!1,c.orientation="vertical",c.readonly=!1,c.relevant="additions text",c.required=!1,c.sort="none",c.busy=!1,c.disabled=!1,c.hidden=!1,c.invalid="false",c)),c=th,b in c?a.setAttribute(d,c[b]):a.removeAttribute(d)):a.setAttribute(d,c)}
function wh(a){var b=a.getAttribute("aria-activedescendant");return(a.nodeType==9?a:a.ownerDocument||a.document).getElementById(b==null||b==void 0?"":String(b))}
function xh(a,b){var c="";b&&(c=b.id);vh(a,"activedescendant",c)}
;var yh=document.documentElement.style.opacity!=void 0,zh={rtl:"right",ltr:"left"};function Ah(a,b){try{if(a.setSelectionRange)a.setSelectionRange(b,b);else if(a.createTextRange){var c=a.createTextRange();c.collapse(!0);c.moveStart("character",b);c.select()}}catch(d){}}
function Bh(a){for(var b=0,c=0;a;){b+=a.offsetTop;c+=a.offsetLeft;try{a=a.offsetParent}catch(d){a=null}}return{Ac:b,Sa:c}}
function Ch(a){try{return Dh(a).activeElement==a}catch(b){}return!1}
function M(a,b){a=document.createElement(a);b&&(a.className=b);return a}
function N(a){return M("div",a)}
function Eh(a,b){a.innerHTML!=b&&Bb(a,$f(b))}
function Fh(a,b){a.dir!=b&&(a.dir=b,a.style.textAlign=zh[b])}
function Gh(a){a&&(a.preventDefault&&a.preventDefault(),a.returnValue=!1);return!1}
function Hh(a){if(a=a||window.event)a.stopPropagation&&a.stopPropagation(),a.cancelBubble=a.cancel=!0;return Gh(a)}
function Ih(a){var b=M("a");mb(b,"#ifl");b.className="sbsb_i sbqs_b";a.appendChild(b);return b}
function Jh(a){var b=a||window;a=b.document;var c=b.innerWidth;b=b.innerHeight;if(!c){var d=a.documentElement;d&&(c=d.clientWidth,b=d.clientHeight);c||(c=a.body.clientWidth,b=a.body.clientHeight)}return{Ie:c,Xd:b}}
function Dh(a){return a?a.ownerDocument||a.document:window.document}
function Kh(a){return a?(a=Dh(a),a.defaultView||a.parentWindow):window}
function Lh(){return yh?"opacity":"filter"}
function Mh(a){return yh?a+"":"alpha(opacity="+Math.floor(a*100)+")"}
;function Nh(){this.o=507;Oh(this)}
y(Nh,Xg);Nh.prototype.g=function(){return this.i};
function Ph(a,b,c,d){Oh(a,c,d);Bb(a.l,$c(dd,b))}
function Oh(a,b,c){a.i=N("sbfl_a");a.l=N("sbfl_b");a.l.onclick=function(){c&&c.openReportForm&&c.openReportForm(b)};
a.i.appendChild(a.l)}
;var Qh=[30,35,33,41],Rh=[39,10,21];function Sh(a,b){Yg.call(this,507);this.m=a;this.g=b}
y(Sh,Yg);Sh.prototype.N=function(a){this.i=a.get(128)};
Sh.prototype.sa=function(a,b){b.addRule(".sbfl_a","font-size:12px;font-style:italic;color:#777;margin:-5px -18px -5px 0");b.addRule(".sbsb_c[dir=ltr] .sbfl_a","text-align:right");b.addRule(".sbsb_c[dir=rtl] .sbfl_a","text-align:left");b.addRule(".sbfl_a:hover","color:#333;cursor:pointer");b.addRule(".sbfl_b","background:rgba(255,255,255,.9)")};
Sh.prototype.Gb=function(){return new Nh};
function Th(a){return a.map(function(b){return{label:b.g}})}
Sh.prototype.zb=function(a,b){a=pb(this.i.m,function(c){a:if(Qh.indexOf(c.getType())>=0)c=!1;else{c=c.i||[];for(var d=w(Rh),e=d.next();!e.done;e=d.next())if(c.indexOf(e.value)>=0){c=!1;break a}c=!0}return c},this);
a.length>0?(Ph(b,this.m,Th(a),this.g),b.g().style.display=""):b.g().style.display="none"};var Qc=ha(['<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.16667 14.1667H7.50001V6.66667H9.16667V14.1667ZM12.5 6.66667H10.8333V14.1667H12.5V6.66667ZM15.8333 3.33333V4.16667H15V17.5H5.00001V4.16667H4.16667V3.33333H7.50001V2.5H12.5V3.33333H15.8333ZM14.1667 4.16667H5.83334V16.6667H14.1667V4.16667Z" fill="#030303"/></svg>']),Uh=ha(["#ps"]);
function Vh(a,b,c,d,e,f,g){this.o=35;this.X=b;this.W=c;this.H=d;this.D=e;this.J=f;this.Y=g;this.B=!0;this.A=!1;this.i=N("sbpqs_d");this.u=N();this.O=M("span","sbpqs_a");this.J&&(this.l=M("a"),mb(this.l,hb(Uh)),this.l.className="sbsb_i",this.I=N("fr sbpqs_b"),this.u.appendChild(this.I),this.I.appendChild(this.l),this.m=N("sbpqs_c"),Bb(this.m,$c(dd,this.Y)),uh(this.m,"alert"));this.u.appendChild(this.O);this.i.appendChild(this.u);this.m&&this.i.appendChild(this.m)}
y(Vh,Xg);Vh.prototype.g=function(){return this.i};
Vh.prototype.s=function(){return this.B};
function Wh(a,b,c,d,e){a.A=!1;a.B=!0;a.ca=c;a.F=d;a.u.style.display="";Bb(a.O,$c(dd,b));a.J&&(a.m.style.display="none",b=Pc(),a.l.textContent="",a.l.appendChild(b),a.l.onclick=function(f){Xh(a,f)},a.l.title=e)}
function Xh(a,b){a.A=!0;Yh(a.X,a.ca,function(){a.A&&(Zh(a.W),a.i.onmouseover=a.i.onmouseout=a.i.onclick=null,a.u.style.display="none",a.m.style.display="",a.D.i==a.F&&$h(a.H),a.D.g==a.F&&(ai(a.D),bi(a.H)),a.B=!1)});
Hh(b)}
;function ci(){Yg.call(this,35)}
y(ci,Yg);n=ci.prototype;n.sa=function(a,b){b.addRule(".sbpqs_a","color:#52188c");b.addRule(".sbdd_a[dir=ltr] .sbpqs_a","padding-right:8px");b.addRule(".sbdd_a[dir=rtl] .sbpqs_a","padding-left:8px");b.addRule(".sbpqs_c","color:#666;line-height:22px")};
n.N=function(a){this.g=a.get(123);this.i=a.get(118);this.m=a.get(189);this.u=a.get(127);this.B=a.get(128)};
n.ga=function(a){this.P(a)};
n.P=function(a){this.A=a.qd;this.s=a.ld;this.o=a.kd};
n.Gb=function(){return new Vh(this.u,this.m,this.g,this.i,this.B,this.A,this.o)};
n.zb=function(a,b){Wh(b,a.getHtml(),a.g,a.l,this.s)};
n.yb=function(a,b,c){di(c,b.g,1)};function ei(a,b,c,d,e,f,g,h){this.o=35;this.X=b;this.W=c;this.H=d;this.D=e;this.J=g;this.Y=h;this.B=!0;this.A=!1;this.l=N("sbpqs_d");this.m=N();this.O=M("span","sbpqs_a");this.J&&(this.u=M("a"),mb(this.u,"#ps"),this.u.className="sbsb_i",this.I=N("fr sbpqs_b"),this.m.appendChild(this.I),this.I.appendChild(this.u),this.i=N("sbpqs_c"),Bb(this.i,$c(dd,this.Y)),uh(this.i,"alert"));this.m.appendChild(this.O);this.l.appendChild(this.m);this.i&&this.l.appendChild(this.i)}
y(ei,Xg);ei.prototype.g=function(){return this.l};
ei.prototype.s=function(){return this.B};
ei.prototype.ea=function(a){this.A=!0;Yh(this.X,this.ca,E(this.na,this));return Hh(a)};
ei.prototype.na=function(){this.A&&(Zh(this.W),this.l.onmouseover=this.l.onmouseout=this.l.onclick=null,this.m.style.display="none",this.i.style.display="",this.D.i==this.F&&$h(this.H),this.D.g==this.F&&(ai(this.D),bi(this.H)),this.B=!1)};function fi(){Yg.call(this,35)}
y(fi,Yg);n=fi.prototype;n.sa=function(a,b){b.addRule(".sbpqs_a","color:#52188c");b.addRule(".sbdd_a[dir=ltr] .sbpqs_a","padding-right:8px");b.addRule(".sbdd_a[dir=rtl] .sbpqs_a","padding-left:8px");b.addRule(".sbdd_a[dir=ltr] .sbpqs_b","padding-right:3px");b.addRule(".sbdd_a[dir=rtl] .sbpqs_b","padding-left:3px");b.addRule(".sbpqs_c","color:#666;line-height:22px")};
n.N=function(a){this.g=a.get(123);this.i=a.get(118);this.m=a.get(189);this.u=a.get(127);this.B=a.get(128)};
n.ga=function(a){this.P(a)};
n.P=function(a){this.A=a.qd;this.s=a.ld;this.o=a.kd};
n.Gb=function(a){return new ei(this.u,this.m,this.g,this.i,this.B,a,this.A,this.o)};
n.zb=function(a,b){var c=a.getHtml(),d=a.g;a=a.l;var e=this.s;b.A=!1;b.B=!0;b.ca=d;b.F=a;b.m.style.display="";Bb(b.O,$c(dd,c));b.J&&(b.i.style.display="none",Bb(b.u,$c(dd,e)),b.u.onclick=E(b.ea,b))};
n.yb=function(a,b,c){di(c,b.g,1)};function gi(){this.l=134;this.i={}}
y(gi,L);n=gi.prototype;n.N=function(a){this.m=a.i.getId()};
n.ga=function(){"google"in window||(window.google={});"sbox"in window.google||(window.google.sbox={});window.google.sbox["d"+this.m]=E(this.Ne,this)};
n.P=function(a){this.A=bg("//"+(a.md||"clients1."+a.dc)+"/complete/deleteitems");this.s=a.ud;this.o=a.authuser;this.u=a.clientName};
n.Fa=function(){hi(this)};
function hi(a){a.g&&(ii.removeChild(a.g),a.g=null)}
n.Ne=function(a){hi(this);a=a[0];var b=this.i[a];b&&(delete this.i[a],b())};
var ii=mg;function ji(){this.l=189}
y(ji,L);ji.prototype.N=function(a){this.g=a.get(134);this.i=a.get(123);this.s=a.get(118);this.A=a.get(553)};
ji.prototype.ga=function(a){this.o=a.nf};
ji.prototype.P=function(a){this.m=a.ud;this.u=!(!this.g||!this.m);this.o&&(a=this.s.g?3E3:0,window.setTimeout(E(this.B,this),a),this.o=!1)};
function Yh(a,b,c){a=a.g;a.i[b]=c;c=new Map;"1"===tg(window.location.search).ssl_dbg&&c.set("ssl_dbg","1");c.set("delq",b);c.set("client",a.u);c.set("callback","google.sbox.d"+a.m);b=a.A;c.set("tok",a.s);a.o&&c.set("authuser",a.o);a.g=M("script");b=gd(b,c);Db(a.g,b);ii.appendChild(a.g)}
ji.prototype.B=function(){var a=ki(this.A,"",void 0,void 0,!0);li(this.i,a);mi(this.i)};function ni(){this.l=156}
y(ni,L);ni.prototype.N=function(a){this.m=a.get(189)};
ni.prototype.i=function(a){var b=this.m,c={};b.u&&(c.tok=b.m);"1"===tg(window.location.search).ssl_dbg&&(c.ssl_dbg="1");for(var d in c)Hg(a,d,c[d]);return 1};
ni.prototype.g=function(){return 12};function oi(a){this.l=156;this.o=a;this.m=null}
H(oi,L);oi.prototype.i=function(a){var b=1,c=a.D;a=ug(a.g);var d=c=="focus"||c=="input";c=this.o.SEARCHBOX_INPUT_AUTOFOCUS&&c=="mousedown"&&this.m&&!this.m.isVisible();a||!d&&!c||(b=2);return b};
oi.prototype.g=function(){return 2};
oi.prototype.N=function(a){this.m=a.get(128)};function pi(){this.l=157}
y(pi,L);function qi(){this.l=156}
y(qi,L);qi.prototype.i=function(a){var b=tg(Fb(window.location.href));b.v&&Hg(a,"video_id",b.v,!0);return 1};
qi.prototype.g=function(){return 24};function ri(a,b,c){this.l=598;this.I=b;this.A=c;this.s="";this.i=a;this.u=!1}
y(ri,L);ri.prototype.N=function(a){this.F=a.get(553);this.g=a.get(128);this.D=a.get(118);this.B=a.get(150)};
ri.prototype.ga=function(a){this.m=a.jd;this.H=a.kf};
function si(a,b){a.s=b;a.F.pd(a.s)}
function ti(a){if(!a.I||a.g.isVisible())return!1;var b=a.D.g;if(!b||b.length==0)return!1;if(b!=a.m)return a.A=="always"&&a.g&&a.g.m&&a.g.m.length>0&&ui(a.g),!1;if(a.i&&a.i.getRefinementsTuple){var c=a.i.getRefinementsTuple();if(c){var d=c[0];d=="ClearBySearchbox"?a.o=[]:d=="FromSearchResponse"&&a.u&&(a.o=c[1],a.u=!1)}}if(!a.o||a.o.length<=0)return a.g&&a.g.m&&a.g.m.length>0?(ui(a.g),!1):a.A=="always"||a.A=="fallback";c=[];for(var e=d=0;e<a.o.length&&!(c.length>=a.H);++e){var f=a.o[e];f&&f.length>
0&&c.push(new cg(a.B.bold(b,f),f,d++,0,[71],null))}c.length>0&&vi(a.g,c,!1);return!1}
;function wi(){this.l=156}
y(wi,L);wi.prototype.N=function(a){this.m=a.get(598)};
wi.prototype.i=function(a){var b=this.m,c;a:{if(b.i&&b.i.getPreviousQuery&&(c=b.i.getPreviousQuery()))break a;c=null}var d;d=(d=tg(Fb(window.location.href)))?(d=d.search_query||d.q)&&d==b.m:!1;c&&c!=b.m?(b.u=!0,b.m=c,si(b,c)):d||b.s==""?d&&b.s==""&&si(b,b.m):si(b,"");return a.D!="mousedown"&&a.D!="focus"||!ti(this.m)?1:2};
wi.prototype.g=function(){return 46};function xi(){this.l=149;this.i=mg;this.g={}}
y(xi,L);n=xi.prototype;n.N=function(a){this.D=a.get(127);this.u=a.i.getId()};
n.ga=function(){"google"in window||(window.google={});"sbox"in window.google||(window.google.sbox={})};
n.P=function(a){this.config_=a;a.connectionType==this.ob()&&(a=this.D.i,this.s=a.protocol,this.o=a.host,this.B=a.wc,this.A=a.Be,this.F="https:"==document.location.protocol,yi(this,E(this.Oe,this)),(new Image).src=this.s+this.o+"/generate_204")};
n.Fa=function(){yi(this,null);zi(this)};
n.ze=function(a,b,c,d){c=a.getId();var e=a.g;this.config_.Id||zi(this);b=this.s+this.o+this.B+"?"+(this.A?this.A+"&":"")+(b?b+"&":"");a=[];rg("q",e,a,!0);this.config_.He||rg("callback","google.sbox.p"+this.u,a);if(this.F){e="";for(var f=4+Math.floor(Math.random()*32),g,h=0;h<f;++h)g=Math.random()<.3?48+Math.floor(Math.random()*10):(Math.random()>.5?65:97)+Math.floor(Math.random()*26),e+=String.fromCharCode(g);rg("gs_gbg",e,a)}e=M("script");this.config_.jg&&e.setAttribute("nonce",this.config_.jg);
Db(e,bg(b+a.join("&")));e.charset="utf-8";this.g[c]=e;this.m=d;this.i.appendChild(e);return!0};
n.ob=function(){return 0};
n.Oc=function(){return 0};
n.Kc=function(a){var b=this.g[a];b&&(this.i.removeChild(b),delete this.g[a])};
function zi(a){for(var b in a.g)a.i.removeChild(a.g[b]);a.g={};a.m=null}
n.Oe=function(a){this.m&&this.m(a)};
function yi(a,b){b||(b=zg);var c=window.google;a.config_.He?c.ac.h=b:c.sbox["p"+a.u]=b}
;function Ai(){this.l=115;this.o={}}
y(Ai,L);n=Ai.prototype;n.N=function(a){this.m=a.get(116);if(a=Pg(a,154))for(var b,c=0;b=a[c++];)this.o[Bi]=b};
n.P=function(){this.g=!1};
n.Fa=function(){Ci(this)};
n.isVisible=function(){return this.g};
n.getHeight=function(){return this.g?this.m.getHeight():0};
function Ci(a){if(a.g){var b=a.m;b.B=0;Di(b.o.m,!1);Ei(b.O,!1);Ei(b.i,!1);Fi(b,b.W);Gi(b.F,9);a.g=!1}}
var Hi={Yd:"left",fg:!0,nb:null,marginWidth:0};function Ii(){this.l=118}
y(Ii,L);n=Ii.prototype;n.N=function(a){this.m=a.get(119);this.A=a.get(130);this.X=a.get(145);this.s=a.get(117);this.I=a.get(123);this.B=a.get(374);this.F=a.get(121);this.Y=a.get(553);this.i=a.get(128);this.J=a.get(139);this.ca=a.get(173);this.ea=Pg(a,160)};
n.ga=function(a){this.config_=a;this.g=this.o=this.m.g.value||""};
n.P=function(a){this.config_=a;this.D=this.O=!1;Ji(this)};
function Ki(a){var b={};Gi(a.s,11,b);!b.cancel&&a.config_.Qf&&jd(function(){var c=a.i;mi(c.D);Li(c)})}
function Mi(a,b){if(a.config_.zc==0||a.config_.zc==2||a.config_.zc==3&&!a.o&&!b)return!1;a:{if(Ni(a.i)&&(a.i.i!=null?b=Oi(a.i):(b=a.i,b=Ni(b)?b.m[0]:null),b.o))break a;b=null}var c;if(c=b){if(c=b=b.g)c=a.o,c=!(c||b?c&&b&&c.toLowerCase()==b.toLowerCase():1);c?(a.o=a.g,yg(b,a.g,!0)&&(b=a.g+b.substr(a.g.length)),Pi(a,b,qg(b.length),"",!0),Qi(a,b,!0),c=!0):c=!1}return c?(a.B.add(8),!0):!1}
function Pi(a,b,c,d,e){a.config_.bf&&!a.i.isVisible()&&d=="mousedown"&&Ri(a.i,c,d);var f=!1,g=!1;if(b!=a.g||d=="onremovechip")yg(d,"key")?a.B.add(1):d=="paste"&&a.B.add(2),f=!0,Si(a,b),Gi(a.s,1,{Ub:d,nb:a.u}),g=F(),a.H||(a.H=g),a.W=g,ug(b)&&(e=!0),g=!0;b=ki(a.Y,b,c,d);switch(b.H){case 3:b.o=!0;case 2:e=!0;break;case 4:e=!1}e?(f&&(f=a.i,f.s&&!f.A&&(f.A=window.setTimeout(E(f.clear,f),f.config_.Rf))),a.O&&Hg(b,"gs_is",1),li(a.I,b)):g&&(a.i.clear(),mi(a.I));Gi(a.s,2,{Ub:d})}
function bi(a){a=a.m;if(!a.u)try{a.g.focus(),a.u=!0,Ti(a)}catch(b){}}
function Ui(a,b){Si(a,b);Vi(a.m);Gi(a.s,4,{nb:a.u,input:b})}
function $h(a){a.g!=a.o&&Si(a,a.o);Gi(a.s,5,{input:a.o,Ng:a.i.m,nb:a.u});Vi(a.m)}
n.getHeight=function(){return this.m.getHeight()};
function Wi(a){if(a.ca){if(a.config_.Rc)return!0;for(var b=0,c;c=a.ea[b++];)if(c.isEnabled())return!0}return!1}
n.clear=function(){this.g&&(Si(this,""),this.m.clear(),Gi(this.s,1),Gi(this.s,16),this.i.clear())};
function Xi(a,b){var c=a.m.s.Mb();a.u==b?Ni(a.i)&&c==a.g.length&&(a.i.i!=null?a.config_.ic&&!a.config_.Ma&&di(a.F,Oi(a.i).g,6):a.config_.fe&&Mi(a,!0)):a.A&&c==0&&a.A.g()}
function Yi(a){var b=a.m.s.Mb();return a.config_.Ma&&Ni(a.i)&&a.i.i!=null&&b===a.g.length}
function Qi(a,b,c){a.g=b||"";Ji(a);Vi(a.m);c||Gi(a.s,4,{nb:a.u,input:a.g})}
function Ji(a){var b=Zi(a.X,a.g);if(b!=a.u){var c=a.m;c.o&&(c.o.dir=b);c.g.dir=b;c.B&&(c.B.dir=b);if(c.Ab){c=c.g;var d=0,e=c.style;c.nodeName!="INPUT"&&(d+=1);e.left=e.right="";e[b=="rtl"?"right":"left"]=d+"px"}a.u=b}}
function Si(a,b){a.g=a.o=b||"";Ji(a)}
;function $i(){this.l=128}
y($i,L);n=$i.prototype;n.N=function(a){this.o=a.get(129);this.O=a.get(145);this.I=a.get(115);this.D=a.get(123);this.u=a.get(118);this.ca=a.get(147);this.W=Pg(a,153);this.Y=a.get(553);this.H=a.get(184);this.ea=a.get(157)};
n.ga=function(){this.W.sort(Cg)};
n.P=function(a){this.config_=a;this.i=this.g=null;this.s=this.F=!1;this.X=!0;this.B="";this.J=0};
n.Fa=function(){this.A&&(window.clearTimeout(this.A),this.A=null);this.m=null;Li(this)};
function vi(a,b,c){var d=a.H&&a.H.i(b);a.clear();a.m=b;var e=Ni(a)?b[0].g:a.u.o;a:{var f=e;if(a.O.g){for(var g=!1,h=!1,l=0,k;l<f.length;++l)if(k=f.charAt(l),!aj.test(k)&&(bj.test(k)?h=!0:g=!0,h&&g)){f=!0;break a}f=!1}else f=!0}f&&(e=a.u.o);a.B=Zi(a.O,e);if(a.config_.yg&&Ni(a)&&c&&!sh){a.F=!0;c=a.o;if(c.o){c.F=a.B;cj(c);e=!1;for(f=0;g=b[f++];)dj(c,g)&&(e=!0);c=e}else c=!1;e=b[0].m.g.a||"";e=wg(e);b=a.ca;f=0;e&&(b.g||ej(b),fj(b),e in b.m?f=b.m[e]:(Eh(b.g,vg(e)),b.m[e]=f=b.g.offsetWidth,Eh(b.g,"")));
a.J=f}else{a.F=!1;b=a.o;if(a.F||!a.config_.Jg&&!Ni(a))c=[];else{c=[];e=[];for(f=0;a.W[f++]&&!Wg(a.m,e););(f=e?e.length:0)&&(f-=gj(e,c,0));for(g=0;g<a.m.length;++g)c.push(a.m[g]);f&&(f-=gj(e,c,1));a.config_.Nf&&c.push(1);f&&(f-=gj(e,c,2));f&&gj(e,c,3);a.config_.Vd&&c.push(2);a.ea&&c.length>1&&c[0].getType()==5&&c.splice(1,0,3)}if(b.o){b.F=a.B;cj(b);e=!1;for(f=0;g=c[f++];)if(g==1)g=b,g.B?g.B.style.display="":(h=M("li"),l=h.style,l.position="relative",l.textAlign="center",l.whiteSpace="nowrap",h.dir=
g.H,g.i=N(),g.i.className="sbsb_g",g.config_.Vd&&(g.i.style.paddingBottom="1px"),hj(g,g.config_.Gg,g.i,13),g.config_.Mf?hj(g,g.config_.Ld,g.i,8):g.config_.Of&&hj(g,g.config_.Hg,g.i,14),h.appendChild(g.i),h.onmousedown=E(g.hd,g),h.className=g.config_.yc,g.B=h),g.g.appendChild(g.B);else if(g==2)if(g=b,g.A)g.A.style.display="";else{h=N("sbsb_j "+g.config_.yc);l=M("a");l.id="sbsb_f";mb(l,"http://www.google.com/support/websearch/bin/answer.py?hl="+g.config_.Vc+"&answer=106230");var m=g.config_.kg;k={zg:!0};
k=k===void 0?{}:k;m instanceof yb?k=m:(m=String(m).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;"),k.fi&&(m=m.replace(/(^|[\r\n\t ]) /g,"$1&#160;")),k.zg&&(m=m.replace(/(\r\n|\n|\r)/g,"<br>")),k.gi&&(m=m.replace(/(\t+)/g,'<span style="white-space:pre">$1</span>')),k=Ab(m));Bb(l,k);h.appendChild(l);h.onmousedown=E(g.hd,g);g.A=h;g.o.appendChild(g.A)}else g==3?(g=b,h=g.ca.pop(),h||(h=M("li"),vh(h,"hidden",!0),h.l=!0,l=M("div","sbsb_e"),h.appendChild(l)),
g.g.appendChild(h)):dj(b,g)&&(e=!0);c=e}else c=!1;a.J=0}d&&(a.i=a.H.l(),ij(a,a.H.g()));c?ui(a):a.clear()}
function ij(a,b){if(a.g!=b){var c=a.g;a.g=b;jj(a,c)}}
n.xe=function(){if(Ni(this))if(this.s){var a=this.g;this.g==this.m.length-1?this.i=this.g=null:this.g==null?this.g=0:++this.g;this.i=this.g;kj(this,a,E(this.xe,this))}else ui(this)};
n.ye=function(){if(Ni(this))if(this.s){var a=this.g;this.m&&this.g!=0?this.g==null?this.g=this.m.length-1:--this.g:this.i=this.g=null;this.i=this.g;kj(this,a,E(this.ye,this))}else ui(this)};
n.isVisible=function(){return this.s};
n.isEnabled=function(){return this.X};
function Oi(a){return a.i!=null?a.m[a.i]:null}
function Ni(a){return!(!a.m||!a.m.length)}
function ui(a){if(!a.s){a:{var b=a.I,c=Bi;if(c in b.o){if(b.i){if(c==Bi)break a;Ci(b);b.i.i.s=!1}b.i=b.o[c];c=b.m;b=b.i;b!=c.u&&(c.u=b,b=b.g.o,c.I?b!=c.I&&c.s.replaceChild(b,c.I):c.s.appendChild(b),c.I=b)}}c=a.I;if(!c.g){b=c.m;var d=Dg(Hi);if(c.i){var e=c.i.i;d.nb=e.B;d.marginWidth=e.J;var f=e.config_.Og;f||(f=e.B=="rtl"?"right":"left");d.Yd=f}Fi(b,d.nb||b.W);e=d.marginWidth;b.X!=e&&(f=b.H.style,e?(f.width=e+"px",f.height="1px"):f.height="",b.X=e);b.ea=d.fg;b.ca=d.Yd;Di(b.o.m,!0);Ei(b.O,!0);Ei(b.i,
!0);Gi(b.F,14);b.zd();c.g=!0}a.s=!0}}
function Li(a){a.s&&(a.A&&(window.clearTimeout(a.A),a.A=null),Ci(a.I),a.s=!1)}
n.clear=function(){Li(this);this.m=null;this.F=!1;this.g!=null&&lj(this.o,this.g);this.i=this.g=null;this.o.clear()};
function ai(a){a.g!=null&&lj(a.o,a.g);a.i=a.g=null}
function Ri(a,b,c){if(Ni(a))ui(a);else{var d=a.u.o;d&&(b=ki(a.Y,d,b||a.u.m.s,c),li(a.D,b))}}
function gj(a,b,c){for(var d=0,e=0,f;e<a.length;++e)(f=a[e])&&f.position==c&&(c==3?f.la&&f.la(b)&&++d:(b.push(f),++d));return d}
function kj(a,b,c){var d;(d=a.g==null)||(d=(d=a.o.m[a.g])?d.s():!1);d?(jj(a,b),b=a.o,c=a.g,c=c===void 0?null:c,c===null?b.u.removeAttribute("aria-activedescendant"):(c=b.m[c])&&c.s()&&(c=c.g(),b.config_.Ma&&(c=c.querySelector('[role="gridcell"]')),c&&xh(b.u,c)),a.g==null?$h(a.u):(b=a.m[a.g],b.getType(),Qi(a.u,b.g))):(lj(a.o,b),c())}
function jj(a,b){b!=null&&lj(a.o,b);a.g!=null&&(b=a.o,(a=b.m[a.g])&&a.s()&&mj(a.g().parentNode,b.X))}
var Bi=og++;function nj(){this.l=154}
y(nj,L);nj.prototype.N=function(a){this.i=a.get(128);this.g=a.get(129)};function oj(){this.l=145;this.g=bj.test("x")}
y(oj,L);oj.prototype.sa=function(a){this.i=a.jc()};
function Zi(a,b){var c=a.i;a.g&&(bj.test(b)?c="ltr":aj.test(b)||(c="rtl"));return c}
var aj=RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$"),bj=RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*(?:\\d[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])");function pj(){this.l=117;this.i=[];this.g={Me:1}}
y(pj,L);function qj(a,b,c,d,e,f){var g=rj(a,b);g||(g={},a.i.push({element:b,If:g}));var h=g[c];h||(h=g[c]=[],a=sj(a,c,b.Me?window:Kh(b),h),typeof c!=="string"?b[c]=a:b.addEventListener?b.addEventListener(c,a,!1):b["on"+c]=a);h.push({eg:!!f,Yc:!1,priority:e||0,process:d});h.sort(tj);d.jf=c}
function uj(a,b,c){if(a=rj(a,b))if(a=a[c.jf])for(var d=0;b=a[d++];)if(b.process==c){b.Yc=!0;break}}
function Gi(a,b,c){c=c||{};(a=a.g[b])&&a(c,c.Ub)}
pj.prototype.ra=function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c)};
function sj(a,b,c,d){return E(function(e,f){if(d.length){if(!e){e={};var g=c.event;g&&(g.keyCode&&(e.keyCode=g.keyCode),e.dg=!0)}e.Ub=f||b;f=e;for(var h,l,k=0;g=d[k++];)g.Yc?l=!0:h||(g.eg?vj(g,f):h=g.process(f));if(l)for(l=0;h=d[l];)h.Yc?d.splice(l,1):++l;if(e.nc)return delete e.nc,e.dg&&(e=c.event||e),Hh(e),e.returnValue=!1}},a)}
function rj(a,b){for(var c,d=0;d<a.i.length;++d)if(c=a.i[d],c.element==b)return c.If;return null}
function vj(a,b){jd(function(){a.process(b)})}
function tj(a,b){return b.priority-a.priority}
;function wj(){this.l=494;this.g={};this.o=this.u=0;this.i=-1;this.m=0;this.s={}}
y(wj,L);wj.prototype.P=function(){this.reset()};
wj.prototype.reset=function(){this.g={};this.o=this.u=0;this.i=-1;this.m=0;this.s={}};function xj(){this.l=374}
y(xj,L);xj.prototype.P=function(){this.reset()};
xj.prototype.add=function(a){this.g||(this.g={});this.g[a]=!0};
xj.prototype.reset=function(){this.g={}};function yj(){this.l=120;this.D=-1}
y(yj,L);yj.prototype.N=function(a){this.H=a.get(191);this.g=a.get(123);this.m=a.get(118);this.A=a.get(374);this.i=a.get(494);this.B=a.get(126);this.o=a.get(128);this.F=Pg(a,311)};
yj.prototype.ga=function(a){this.u=a.mg};
yj.prototype.P=function(a){this.config_=a;this.reset()};
function zj(a,b){var c=a.m.o;var d=[];d[27]=64;d[0]=Aj(a.config_.clientName);d[28]=Aj(a.config_.requestIdentifier);d[1]=b==void 0?"":b+"";b=a.A;var e=[];for(f in b.g)e.push(parseInt(f,10));d[26]=e.join("j");var f="";a.o.i!=null?f=a.o.i+"":(b=a.B.i,(b.s>=10||b.u.Oc()>=3)&&(f="o"));d[2]=f;f="";if(b=a.o.m){for(var g=e=0,h;h=b[g++];){h=Eg(h.getType(),h.i||[]);if(h!=l){e>1&&(f+="l"+e);f+=(l?"j":"")+h;e=0;var l=h}++e}e>1&&(f+="l"+e)}d[3]=f;l="";f=a.o.m;b=a.i.s;if(f)for(e=0;g=f[e++];){var k=Eg(g.getType(),
g.i||[]);k in b&&delete b[k]}if(b)for(k in b)l+=(l?"j":"")+k;d[35]=l;k=a.i.i;d[33]=k>-1?String(k):"";d[4]=Math.max(a.m.H-a.s,0);d[5]=Math.max(a.m.W-a.s,0);d[6]=a.D;d[7]=F()-a.s;d[18]=Math.max(a.m.na-a.s,0);d[8]=a.g.Bb;l=a.g;l=(k=l.i)?l.g.m:0;d[25]=k?"1"+(a.config_.ef?"a":"")+(a.config_.Gd?"c":""):"";d[10]=l;k=a.g;d[11]=k.i?k.g.o:0;d[12]=a.g.na;f=a.g;k=f.ca;l=f.Y;f=f.ea;d[9]=k;d[22]=l;d[17]=f;d[13]=a.g.Ab;d[14]=a.g.H;d[15]=a.g.J;k=a.g;l=[];for(b=e=0;b<=Bj;++b)f=k.I[b],f==0?e++:(e=e==1?"0j":e>1?b+"-":
"",l.push(e+f),e=0);d[16]=l.join("j");d[36]=a.g.O;k=0;for(var m in a.i.g)k++;d[30]=k;d[31]=a.i.u;d[32]=a.i.o;d[19]=Aj(a.config_.sd);m=a.i;l=a.B.g;k=!1;l&&(k=l.i.g.e||"");l=0;k?(l|=1,m.m>1&&(l|=2)):m.m>0&&(l|=2);m=l;d[20]=m==0?"":m+"";for(m=0;k=a.F[m++];)l=k.l,Cj[l]&&(d[l]=d[l]==void 0?Aj(k.g()):"");d=d.join(".").replace(Dj,"");if(a.H&&a.u){m=c+d;b:{k=a.u;l=[];if(k)for(e=b=f=0;e<k.length;++e){g=k.charCodeAt(e);if(g<32||g>127||!Ej[g-32]){k=[];break b}f<<=6;f|=Ej[g-32]-1;b+=6;b>=8&&(l.push(f>>b-8&255),
b-=8)}k=l}f=k;k={};k.chain=Array(4);k.buffer=Array(4);k.Xg=Array(4);k.padding=Array(64);k.padding[0]=128;for(l=1;l<64;++l)k.padding[l]=0;Fj(k);l=Array(64);f.length>64&&(Fj(k),Gj(k,f),f=Hj(k));for(b=0;b<f.length;++b)l[b]=f[b]^92;for(b=f.length;b<64;++b)l[b]=92;Fj(k);for(b=0;b<64;++b)k.buffer[b]=l[b]^106;Ij(k,k.buffer);k.total=64;Gj(k,Jj(m));m=Hj(k);Fj(k);Ij(k,l);k.total=64;Gj(k,m);m=Hj(k);m=m.slice(0,8);typeof m==="string"&&(m=Jj(m));k="";if(m){l=m.length;for(e=b=f=0;l--;)for(b<<=8,b|=m[e++],f+=8;f>=
6;)k+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b>>f-6&63),f-=6;f&&(k+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b<<8>>f+8-6&63))}m=k}else m="";c={oq:c,gs_l:d+"."+m};a.config_.gg&&(c.q=a.m.g);return c}
yj.prototype.reset=function(){this.s=F();++this.D;var a=this.m;a.H=0;a.W=0;a.na=0;this.A.reset();a=this.g;if(a.i){var b=a.g;b.m=0;b.o=0}a.Bb=0;a.s=0;a.na=0;a.ca=0;a.Y=0;a.ea=0;a.Ab=0;a.H=0;a.J=0;a.O=0;a.I=[];for(b=0;b<=Bj;++b)a.I[b]=0;for(a=0;b=this.F[a++];)b.reset();this.i.reset()};
function Aj(a){return a?a.replace(Kj,"-"):""}
var Dj=/\.+$/,Kj=/\./g,Cj=pg([23]);function Lj(){this.l=121}
y(Lj,L);Lj.prototype.sa=function(a){this.m=a.Pd()};
Lj.prototype.N=function(a){this.g=a.get(347);this.s=a.get(130);this.F=a.get(117);this.A=a.get(123);this.o=a.get(118);this.H=a.get(120);this.I=a.get(128);this.B=a.get(139);this.u=a.s;this.D=Pg(a,294)};
Lj.prototype.P=function(a){this.config_=a};
function di(a,b,c){if(a.D){for(var d=!1,e=0,f;f=a.D[e++];)f.g(b,c)==2&&(d=!0);if(d)return}if(ug(b)||a.config_.jb||a.s&&a.s.jb()){if(Wf.test(c)){if(a.m&&!a.i){d=a.m;b:{if(e=d.getElementsByTagName("input"))for(var g=0;f=e[g++];)if(f.name=="btnI"&&f.type.toLowerCase()!="submit"){e=f;break b}e=null}e?d=null:(e=M("input"),e.type="hidden",e.name="btnI",e.value="1",d.appendChild(e),d=e);a.i=d}}else a.i&&(a.m.removeChild(a.i),a.i=null);a.g&&a.config_.Lc&&Mj(a.g,c);a.u.xd(c);Nj(a);Gi(a.F,12,{query:b})}}
Lj.prototype.redirect=function(a){this.g&&this.config_.Lc&&Mj(this.g);this.u.redirect(a);Nj(this)};
function Nj(a){mi(a.A);a.A.o=null;a.H.reset();a.I.clear();if(a.o.o!=a.o.g){var b=a.o;b.o=b.g}a.B&&a.B.clear()}
;function Oj(){this.l=553}
y(Oj,L);Oj.prototype.N=function(a){this.g=Pg(a,156);a.get(126)};
Oj.prototype.ga=function(){this.g.sort(Pj)};
Oj.prototype.P=function(a){this.config_=a;this.i=a.jd};
Oj.prototype.pd=function(a){this.i=a};
function ki(a,b,c,d,e){b=new Fg(b,c||qg(b.length),d||"");c=1;if(a.g){d=0;for(var f;f=a.g[d++];)f=f.i(b),f>c&&(c=f)}b.H=c;a.config_.Ic!=null&&Hg(b,"ds",a.config_.Ic,!0);a.config_.Ae!=null&&Hg(b,"swl",a.config_.Ae,!0);Hg(b,"pq",a.i,!0);e&&!b.m&&(b.I=!0);b.m||(b.s=F(),"cp"in b.A||(a=b.J.Mb(),Hg(b,"cp",a,!0)),Hg(b,"gs_id",b.u),b.i=sg(b.A)+":"+b.B,b.m=!0);return b}
function Pj(a,b){return a.g()-b.g()}
;function Qj(){this.l=123;this.A=!1;this.F=-1}
y(Qj,L);n=Qj.prototype;n.N=function(a){this.g=a.get(133);this.W=a.get(130);this.Dc=a.get(118);this.Ec=a.get(120);this.X=a.get(494);this.Te=a.get(124);this.Cb=a.get(125);this.Db=a.get(230);this.Fc=a.get(127)};
n.P=function(a){this.u=this.Fc.g;this.config_=a;this.A=!0;this.m={};this.D=0;this.Pe=a.pf;this.Qe=a.Uf;this.Xa=-1;this.i=this.config_.enableCaching&&!!this.g};
n.Fa=function(){this.A=!1;Rj(this);this.m=this.o=null;mi(this)};
function li(a,b){if(!(!a.A||a.Qe||a.W&&a.W.l())){var c=!0,d=Gg(b);d>a.F&&(a.F=d);++a.Bb;a.X.g[b.getId()]=!0;ug(a.Dc.g)||ug(b.g)||(d=a.X,d.i=Math.max(d.i,0));d=F();for(var e in a.m)d-a.m[e].s>2500&&Sj(a,e);a.i&&(e=a.g.get(b))&&((c=a.Pe||b.I)&&a.config_.Vf&&(b.o=!0),a.Cb.process(e),e.o&&++a.na,a.o=null);c&&(a.o=b,a.B||a.ne())}}
function mi(a){a.Xa=a.F}
function Zh(a){if(a.i){a=a.g;for(var b in a.i)for(var c=a.i[b].g,d,e=0;d=c[e++];)if(d.getType()==35){delete a.i[b];break}for(b=0;b<a.g.length;++b)a.g[b].reset()}}
function Tj(a,b){return E(function(c){this.yd(c,b)},a)}
n.ne=function(){Rj(this);if(!(this.u.Oc()>2)){var a=this.o;this.o=null;if(a){var b=[],c=a.F;if(c)for(var d in c)rg(d,c[d],b);b=this.u.ze(a,b.join("&"),Tj(this,a),E(this.yd,this));a.o||(++this.ca,b?(this.m[a.getId()]=a,++this.s):++this.Y);a=100;b=(this.s-2)/2;for(c=1;c++<=b;)a*=2;a<this.D&&(a=this.D);this.B=window.setTimeout(E(this.ne,this),a)}}};
function Rj(a){a.B!=null&&(window.clearTimeout(a.B),a.B=null)}
function Sj(a,b){a.u.Kc(b);delete a.m[b];a.s&&--a.s}
n.yd=function(a,b){if(this.A){if(!b&&(b=this.m[(a[2]||{}).j],!b))return;if(!b.o){var c=this.Te;var d=b,e=a[0],f=a[1],g={};if(a=a[2])for(var h in a){var l=a[h];h in c.g&&(l=c.g[h].parse(l));g[h]=l}h=l=a=!1;for(var k,m=0;k=f[m++];)if((k[1]||0)==33?l=!0:a=!0,l&&a){h=!0;break}a=0;l=[];for(m=0;k=f[m++];){var p=k[1]||0;if(!h||p!=33){var r=k[0];c.m&&(r=c.i.bold(e.toLowerCase(),wg(r).replace(ig,"")));var q=l,t=q.push,u=wg(r).replace(ig,""),A=a++,K=k[3];t.call(q,new cg(r,u,A,p,k[2]||[],K?new Yf(K):Zf))}}c=
new Ig(d,l,new Yf(g),!1,!0,!1);this.Db&&(c=$c(this.Db,c));if(this.i)for(d=this.g,e=c,(e.g&&e.g[0]||e.l.g!="")&&e&&e.m&&(d.i[e.l.i]=e),f=0;f<d.g.length;++f)d.g[f].update(e);Gg(b)<=this.Xa?!b||b.g||c.o||(this.O=F()-b.s):(++this.ea,this.Cb.process(c)||++this.Ab,this.D=c.i.g.d||0,b&&(Sj(this,b.getId()),d=b.s,d=F()-d,b.g?(this.J+=d,this.H=Math.max(d,this.H),++this.I[d>Uj?Bj:Vj[Math.floor(d/100)]]):this.O=d));c&&(b=c.i.g.q||"")&&(this.Ec.u=b)}}};
var Vj=[0,1,2,3,4,5,5,6,6,6,7,7,7,7,7,8,8,8,8,8],Bj=Vj[Vj.length-1]+1,Uj=Vj.length*100-1;function Wj(){this.l=124;this.g={}}
y(Wj,L);Wj.prototype.N=function(a){this.i=a.get(150);if(a=Pg(a,158))for(var b,c=0;b=a[c++];)this.g[b.Qh()]=b};
Wj.prototype.P=function(a){this.m=a.Qc};function Xj(){this.l=125}
y(Xj,L);Xj.prototype.N=function(a){this.o=a.get(117);this.u=a.get(118);this.s=a.get(494);this.g=Pg(a,122);this.i=a.get(126);this.m=a.get(128);this.g.sort(Yj)};
Xj.prototype.process=function(a){var b=a,c=this.u.g.toLowerCase(),d=this.i.g;c=xg(c);var e=b.l;b=e?e.l:xg(b.l.g.toLowerCase());var f=(d=d?d.l:null)?d.l:"";e=(c.indexOf(b)==0?c.indexOf(f)==0?d&&d.getId()==e.getId()?0:b.length>=f.length?1:-1:1:-1)==1;c=e!=-1;if(e){if(this.g)for(e=0;b=this.g[e++];)a=b.l(a);d=this.i.g=a;a=d.l.g;e=d.g;this.m.isEnabled()&&(b=d.getType()==0,vi(this.m,e,b));b=this.s;var g=d.l;f=g.getId();if(f in b.g){var h=d.g.length;h>0&&(ug(g.g)||(b.i=h),g=g.s,g=F()-g,b.o+=g,++b.u);d.i.g.e&&
++b.m;delete b.g[f]}d=d.g;for(g=0;f=d[g++];)h=f.getType(),b.s[Eg(h,f.i||[])]=!0;Gi(this.o,3,{input:a,Ng:e})}return c};
function Yj(a,b){return a.g()-b.g()}
;function Zj(){this.l=126}
y(Zj,L);Zj.prototype.N=function(a){this.i=a.get(123)};
Zj.prototype.P=function(){this.g=null};var ak=["expflags","plugin"];function bk(){this.l=127;this.m={}}
y(bk,L);bk.prototype.N=function(a){a=Pg(a,149);for(var b,c=0;b=a[c++];)this.m[b.ob()]=b};
bk.prototype.P=function(a){var b="https:"==document.location.protocol,c=[];rg("client",a.clientName,c);rg("hl",a.Vc,c);rg("gl",a.De,c);rg("sugexp",a.sd,c);rg("gs_rn",64,c);rg("gs_ri",a.requestIdentifier,c);var d=tg(a.url||C.location.href);ak.filter(function(e){return d.hasOwnProperty(e)}).forEach(function(e){return c.push(e+"="+d[e])});
a.authuser&&rg("authuser",a.authuser,c);this.i={protocol:"http"+(b?"s":"")+"://",host:a.md||"clients1."+a.dc,wc:a.wc||"/complete/search",Be:c.length?c.join("&"):""};this.g&&this.g.ob()==a.connectionType||(this.g=this.m[a.connectionType])};function ck(){this.l=191}
y(ck,L);function Jj(a){for(var b=[],c=0,d=0;d<a.length;++d){var e=a.charCodeAt(d);e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:(b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}
function Fj(a){a.chain[0]=1732584193;a.chain[1]=4023233417;a.chain[2]=2562383102;a.chain[3]=271733878;a.Wb=a.total=0}
function Ij(a,b){for(var c=a.Xg,d=0;d<64;d+=4)c[d/4]=b[d]|b[d+1]<<8|b[d+2]<<16|b[d+3]<<24;var e=a.chain[0];b=a.chain[1];d=a.chain[2];for(var f=a.chain[3],g,h,l,k=0;k<64;++k)k<16?(g=f^b&(d^f),h=k):k<32?(g=d^f&(b^d),h=5*k+1&15):k<48?(g=b^d^f,h=3*k+5&15):(g=d^(b|~f),h=7*k&15),l=f,f=d,d=b,e=e+g+dk[k]+c[h]&4294967295,g=ek[k],b=b+((e<<g|e>>>32-g)&4294967295)&4294967295,e=l;a.chain[0]=a.chain[0]+e&4294967295;a.chain[1]=a.chain[1]+b&4294967295;a.chain[2]=a.chain[2]+d&4294967295;a.chain[3]=a.chain[3]+f&4294967295}
function Gj(a,b,c){c||(c=b.length);a.total+=c;for(var d=0;d<c;++d)a.buffer[a.Wb++]=b[d],a.Wb==64&&(Ij(a,a.buffer),a.Wb=0)}
function Hj(a){var b=Array(16),c=a.total*8,d=a.Wb;Gj(a,a.padding,d<56?56-d:64-(d-56));for(var e=56;e<64;++e)a.buffer[e]=c&255,c>>>=8;Ij(a,a.buffer);for(e=d=0;e<4;++e)for(c=0;c<32;c+=8)b[d++]=a.chain[e]>>c&255;return b}
var Ej=[0,0,0,0,0,0,0,0,0,0,0,0,0,63,0,0,53,54,55,56,57,58,59,60,61,62,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,0,0,0,0,64,0,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,0,0,0,0,0],ek=[7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21],dk=[3614090360,3905402710,606105819,3250441966,4118548399,1200080426,
2821735955,4249261313,1770035416,2336552879,4294925233,2304563134,1804603682,4254626195,2792965006,1236535329,4129170786,3225465664,643717713,3921069994,3593408605,38016083,3634488961,3889429448,568446438,3275163606,4107603335,1163531501,2850285829,4243563512,1735328473,2368359562,4294588738,2272392833,1839030562,4259657740,2763975236,1272893353,4139469664,3200236656,681279174,3936430074,3572445317,76029189,3654602809,3873151461,530742520,3299628645,4096336452,1126891415,2878612391,4237533241,1700485571,
2399980690,4293915773,2240044497,1873313359,4264355552,2734768916,1309151649,4149444226,3174756917,718787259,3951481745];function fk(){this.l=150}
H(fk,L);
fk.prototype.bold=function(a,b){b=vg(b.replace(Xf,""));a=vg(xg(a,!0));if(yg(b,a))return a+"<b>"+b.substr(a.length)+"</b>";for(var c="",d=[],e=b.length-1,f=0,g=-1,h;h=b.charAt(f);++f)h==" "||h=="\t"?c.length&&(d.push({t:c,Sb:g,e:f+1}),c="",g=-1):(c+=h,g==-1?g=f:f==e&&d.push({t:c,Sb:g,e:f+1}));a=a.split(/\s+/);f={};for(c=0;e=a[c++];)f[e]=1;g=-1;a=[];h=d.length-1;for(c=0;e=d[c];++c)f[e.t]?(e=g==-1,c==h?a.push({Sb:e?c:g,e:c}):e&&(g=c)):g>-1&&(a.push({Sb:g,e:c-1}),g=-1);if(!a.length)return"<b>"+b+"</b>";
c="";for(f=e=0;g=a[f];++f)(h=d[g.Sb].Sb)&&(c+="<b>"+b.substring(e,h-1)+"</b> "),e=d[g.e].e,c+=b.substring(h,e);e<b.length&&(c+="<b>"+b.substring(e)+"</b> ");return c};function gk(){this.l=146}
H(gk,L);function hk(a){JSON.parse('"\\u30'+a.split(",").join("\\u30")+'"')}
hk("02,0C,0D,01,FB,F2,A1,A3,A5,A7,A9,E3,E5,E7,C3,FC,A2,A4,A6,A8,AA,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CA,CB,CC,CD,CE,CF,D2,D5,D8,DB,DE,DF,E0,E1,E2,E4,E6,E8,E9,EA,EB,EC,ED,EF,F3,9B,9C");hk("F4__,AC,AE,B0,B2,B4,B6,B8,BA,BC,BE,C0,C2,C5,C7,C9_____,D0,D3,D6,D9,DC");hk("D1,D4,D7,DA,DD");hk("F4____,AC_,AE_,B0_,B2_,B4_,B6_,B8_,BA_,BC_,BE_,C0_,C2__,C5_,C7_,C9______,D0__,D3__,D6__,D9__,DC");hk("D1__,D4__,D7__,DA__,DD");hk("A6,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CF,D2,D5,D8,DB");hk("CF,D2,D5,D8,DB");function ik(){this.l=116;this.ea=!0;this.isDarkTheme=!!document.body.dataset.dt}
y(ik,L);n=ik.prototype;
n.sa=function(a,b){var c=this.isDarkTheme?"#202124":"#fff",d=this.isDarkTheme?"#3c4043":"#ccc",e=this.isDarkTheme?"#5f6368":"#d9d9d9";this.W=a.jc();b.addRule(".sbdd_a",(sh?"margin-top:-1px;":"")+"z-index:989");b.addRule(".sbdd_a[dir=ltr] .fl, .sbdd_a[dir=rtl] .fr","float:left");b.addRule(".sbdd_a[dir=ltr] .fr, .sbdd_a[dir=rtl] .fl","float:right");sh?b.addRule(".sbdd_b","background:"+c+";border:1px solid "+(d+";border-top-color:")+(e+";")+b.prefix("border-radius:0 0 3px 3px;")+"cursor:default"):b.addRule(".sbdd_b",
"background:"+c+";border:1px solid "+(d+";border-top-color:")+(e+";")+b.prefix("box-shadow:0 2px 4px rgba(0,0,0,0.2);")+"cursor:default");b.addRule(".sbdd_c","border:0;display:block;position:absolute;top:0;z-index:988")};
n.N=function(a){this.J=a.get(130);a.get(115);this.o=a.get(118);this.F=a.get(117);this.Y=a.i.getId()};
n.ga=function(a){this.config_=a};
n.lb=function(a){this.g=N();this.g.className="gstl_"+this.Y+" sbdd_a";Ei(this.g,!1);this.O=this.g;this.H=N("fl");this.g.appendChild(this.H);this.A=N();this.g.appendChild(this.A);this.s=N("sbdd_b");this.A.appendChild(this.s);this.na=N();this.A.appendChild(this.na);this.config_.Ud&&(this.i=M("iframe","gstl_"+this.Y+" sbdd_c"),Ei(this.i,!1),(this.config_.Ha||document.body).appendChild(this.i));if(this.m=this.config_.cf)typeof this.m==="number"&&(this.m+=this.config_.fc[2],this.m-=jk(this)),kk(this,this.g,
this.m);lk(this);(a.Ha||document.body).appendChild(this.g);a=this.F;var b=E(this.zd,this);qj(a,a.g,8,b)};
n.P=function(a){this.config_=a;this.g.style.position=a.Kb};
n.getHeight=function(){this.B||(this.B=this.s?Math.max(this.s.offsetHeight,0):0);return this.B};
n.zd=function(){this.B=0;lk(this);if(this.i){var a=this.config_.Bd[0],b=this.i.style;this.config_.Kb!="relative"&&(b.top=this.g.style.top,b.left=this.g.offsetLeft+this.H.offsetWidth+"px");b=this.i;a=this.getHeight()+a;b.style.height=Math.max(a,0)+"px";kk(this,this.i,this.s.offsetWidth)}this.u&&cj(this.u.g)};
function lk(a){var b,c;if(c=a.u)c=a.u.g,c=c.config_.Lf||c.H==c.F?c.Xa:null;var d=(b=c)?b.offsetWidth:mk(a.o.m);var e=a.m;c=jk(a);e?typeof e==="string"&&(e=null):a.X||!a.ea?a.A.style.display="inline-block":(a.A.style.display="",e=d+a.config_.fc[2]-c,kk(a,a.g,e));if(a.config_.Kb!="relative"){var f="rtl"==Df()!=(a.D=="rtl"),g=a.config_.Ha;var h={Sa:0,Ac:0};if(f||!g||g==document.body||a.config_.Nd)h=Bh(a.o.m.F),b&&(h.Sa=Bh(b).Sa);b=h;h=e;e=a.config_.fc;g=e[1];e=e[0];e=b.Ac+a.o.getHeight()+e;if(a.ca==
"right"){h="rtl"==Df()!=(a.D=="rtl");var l=a.config_.Ha;g=-g;if(h||!l||l==document.body)g+=(Kh(a.g)||window).document.documentElement.clientWidth-d-b.Sa;d=g;h=e;b=void 0}else b=b.Sa+g,a.ca=="center"&&h&&(b+=(d-h)/2),h=e,d=void 0;e={Sa:0,Ac:0};a.config_.Kb=="absolute"&&a.config_.Ha&&a.config_.Ha!=document.body&&(f||a.config_.Nd)&&(e=Bh(a.config_.Ha));g=a.g.style;g.top=h-e.Ac+"px";g.left=g.right="";b!=void 0?g.left=b+c-e.Sa+"px":(b=0,a.config_.Ha&&f&&(b=document.body.clientWidth-(e.Sa+a.config_.Ha.offsetWidth)),
g.right=d+c-b+"px")}}
function kk(a,b,c){typeof c==="number"?c>0&&(a.config_.Wg?b.style.width=c+"px":b.style.minWidth=c+"px"):b.style.width=c}
function Ei(a,b){a&&(a.style.display=b?"":"none")}
function Fi(a,b){if(a.D!=b){a.D=b;var c=a.config_.Ha;c&&c!=document.body&&(c.style.textAlign=b=="rtl"?"right":"left");Fh(a.g,b)}}
function jk(a){return a.J&&a.J.i()&&(a=a.o.m.B.offsetWidth,typeof a==="number")?a:0}
;function nk(){this.l=119;this.W=!1;this.s=qg(0);this.ca=-1;this.ea=!1;this.isDarkTheme=!!document.body.dataset.dt}
y(nk,L);n=nk.prototype;
n.sa=function(a,b){var c=this.isDarkTheme?"#202124":"#fff";this.D=a;this.g=a.Pc();uh(this.g,"combobox");vh(this.g,"haspopup",!1);vh(this.g,"autocomplete","list");this.Dc=a.jc();a.Gc()||(b.addRule(".sbib_a","background:"+c+";"+b.prefix("box-sizing:border-box;")),a=rh&&nh||Zg?6:5,b.addRule(".sbib_b",b.prefix("box-sizing:border-box;")+"height:100%;overflow:hidden;padding:"+a+"px 9px 0"),b.addRule(".sbib_c[dir=ltr]","float:right"),b.addRule(".sbib_c[dir=rtl]","float:left"),b.addRule(".sbib_d",b.prefix("box-sizing:border-box;")+
"height:100%;unicode-bidi:embed;white-space:nowrap"),b.addRule(".sbib_d[dir=ltr]","float:left"),b.addRule(".sbib_d[dir=rtl]","float:right"),kh&&b.addRule(".sbib_a input::-ms-clear","display: none"),b.addRule(".sbib_a,.sbib_c","vertical-align:top"))};
n.N=function(a){this.i=a.get(118);this.m=a.get(117);this.X=a.get(128);this.I=a.get(173);this.Ab=!!a.get(136);this.Ec=a.i.getId()};
n.ga=function(a){this.config_=a;this.J=a.Nb;this.O=a.cg;this.Fc=a.Hd;this.u=Ch(this.g);this.Cc();var b=this;Zg&&qj(this.m,this.g,"beforedeactivate",function(c){b.ea&&(b.ea=!1,c.nc=!0)},10);
a=(jc()||I("iPad")||I("iPod"))&&oh;lh&&ok(this);(ph||a)&&pk(this);this.F=this.g};
n.lb=function(a){var b=!!a.hf[130];if(this.Ab||Wi(this.i)||b||a.qf)(this.A=this.D.get("gs_id"))?(b&&(this.B=this.D.get("sb_chc")),this.o=this.D.get("sb_ifc")):(this.A=N("gstl_"+this.Ec+" sbib_a"),a=this.A.style,this.O&&(a.width=this.O+"px"),this.J&&(a.height=this.J+"px"),a=this.g.style,a.border="none",a.padding=mh||Zg?"0 1px":"0",a.margin="0",a.height="auto",a.width="100%",this.g.className=this.config_.Uc,b&&(this.B=N("sbib_d"),this.B.id=this.D.getId("sb_chc"),this.A.appendChild(this.B)),Wi(this.i)&&
this.I&&(this.I.g.className+=" sbib_c",b=this.I,a=this.Dc,b.s!=a&&(b.g.dir=b.s=a),this.A.appendChild(this.I.g)),this.o=N("sbib_b"),this.o.id=this.D.getId("sb_ifc"),this.A.appendChild(this.o),qk(this,this.A,this.o)),this.config_.od&&this.g&&this.o&&(this.g.removeAttribute("role"),uh(this.o,"combobox"),this.g.removeAttribute("aria-haspopup"),vh(this.o,"haspopup",!0)),this.config_.Ma&&this.g&&(b=this.D.getId("sbsg"),vh(this.g,"controls",b),this.config_.od&&this.o?(vh(this.o,"haspopup","grid"),vh(this.o,
"owns",b)):vh(this.g,"haspopup","grid")),this.config_.Kg||this.config_.Ze||rk(this,this.A),this.F=this.A;this.Fc&&(b=E(this.le,this),qj(this.m,this.g,"blur",b,10),b=E(this.te,this),qj(this.m,this.g,"focus",b,10),this.Db=!0);b=this.m;a=E(this.Hf,this);qj(b,b.g,8,a);sk(this)};
n.P=function(a){this.config_=a;this.g.setAttribute("autocomplete","off");this.g.setAttribute("spellcheck",!1);this.g.style.outline=a.he?"":"none";this.Bb=this.g.value;this.Db&&this.te();tk(this)};
n.Fa=function(){this.Db&&this.le();uk(this)};
function qk(a,b,c){uk(a);c||(c=b);a.g.parentNode.replaceChild(b,a.g);c.appendChild(a.g);a.u&&a.config_.Bg&&(Zg||lh?jd(function(){a.g.focus();Ah(a.g,a.s.Mb())}):a.g.focus());
tk(a)}
n.getHeight=function(){var a=this.F?this.F.offsetHeight:0;this.J>a&&(a=this.J);return a};
function mk(a){return a.O?a.O:a.F?a.F.offsetWidth:0}
n.select=function(){this.g.select();this.Cc()};
function Vi(a){qh&&(a.g.value="");a.g.value=a.i.g;qh&&(a.g.value=a.g.value);Ti(a)}
function vk(a){a.u&&(a.g.blur(),a.u=!1)}
n.clear=function(){this.g.value=""};
function Ti(a){if(a.u){var b=a.g.value.length;a.s=qg(b);Ah(a.g,b)}}
function rk(a,b){qj(a.m,b,"mouseup",function(){a.g.focus()})}
function sk(a){function b(e){qj(a.m,a.g,e,E(a.re,a),10,c)}
qj(a.m,a.g,"keydown",E(a.Ff,a));(mh||a.config_.We)&&qj(a.m,a.g,"keypress",E(a.Gf,a));qj(a.m,a.g,"select",E(a.Cc,a),10);var c=!1;b("mousedown");b("keyup");b("keypress");c=!0;b("mouseup");b("keydown");b("focus");b("blur");b("cut");b("paste");b("input");var d=E(a.Cf,a);qj(a.m,a.g,"compositionstart",d);qj(a.m,a.g,"compositionend",d)}
n.Cf=function(a){a=a.type;a=="compositionstart"?(a=this.i,a.D!=1&&(a.D=!0)):a=="compositionend"&&(a=this.i,a.D!=0&&(a.D=!1))};
n.Ff=function(a){var b=a.keyCode;this.ca=b;var c=(nh||lh)&&(b==38||b==40)&&Ni(this.X),d=b==13,e=b==27;this.Y=!1;b!=9||a.shiftKey||(this.Y=Mi(this.i));if(d){(b=Oi(this.X))&&b.getType();var f=this;jd(function(){var g=f.X,h=a.shiftKey?4:3;g.i!=null&&Oi(g).getType();g=g.u;di(g.F,g.g,h)})}if(c||d||e||this.Y)a.nc=!0};
n.Gf=function(a){var b=a.keyCode,c=b==9&&this.Y;if(b==13||b==27||c)a.nc=!0};
n.re=function(a){if(!this.Cb){var b=a.Ub;if(!(b.indexOf("key")||a.ctrlKey||a.altKey||a.shiftKey||a.metaKey))a:if(a=a.keyCode,b!="keypress"){var c=a==38||a==40;if(b=="keydown"){var d=this.i;var e=a==229;(d.O=e)&&d.B.add(4);if(c)break a}else if(d=a!=this.ca,this.ca=-1,!c||d)break a;switch(a){case 27:a=this.i;a.config_.Fg?di(a.F,a.g,5):(a.i.isVisible()?(c=a.i,mi(c.D),Li(c)):vk(a.m),$h(a));break;case 37:a=this.i;Xi(a,"rtl");if(Yi(a)&&(c=a.i,c.i!==null&&(a=c.o,(c=wk(a,c.i))&&!(c.length<=1))))for(d=wh(a.u),
e=1;e<c.length;e++)c[e].id===d.id&&xh(a.u,c[e-1]);break;case 39:a=this.i;Xi(a,"ltr");if(Yi(a)&&(c=a.i,c.i!==null&&(a=c.o,c=wk(a,c.i))))for(d=wh(a.u),e=0;e<c.length-1;e++)c[e].id===d.id&&xh(a.u,c[e+1]);break;case 38:this.i.i.ye();break;case 40:a=this.i;c=this.s;Ni(a.i)?a.i.xe():Ri(a.i,c);break;case 46:a=this.i;a.g&&this.s.Sd()==a.g.length&&(a.J&&a.J.clear(),a.config_.Eg&&di(a.F,a.g,2));break;case 8:a=this.i,a.A&&this.s.Mb()==0&&a.A.g()}}this.Cc();Pi(this.i,this.g.value,this.s,b)}};
n.Bf=function(){this.u=!0;Gi(this.i.s,10)};
n.zf=function(){this.u=!1;Ki(this.i)};
function tk(a){a.W||(a.W=!0,a.Xa=E(a.Bf,a),qj(a.m,a.g,"focus",a.Xa,99),a.na=E(a.zf,a),qj(a.m,a.g,"blur",a.na,99))}
function uk(a){a.W&&(a.W=!1,uj(a.m,a.g,a.Xa),uj(a.m,a.g,a.na))}
n.te=function(){this.H||(this.H=new Md(this.config_.xg||50),this.H.ra("tick",this.wg,void 0,this),this.H.start())};
n.le=function(){this.H&&(Nd(this.H),this.H=null)};
n.wg=function(){this.re({Ub:"polling"})};
n.Hf=function(){if(lh){var a=this.g,b=document.createEvent("KeyboardEvent");b.initKeyEvent&&(b.initKeyEvent("keypress",!0,!0,null,!1,!1,!0,!1,27,0),a.dispatchEvent(b))}};
n.Cc=function(){if(this.u){a:{var a=this.g;try{if("selectionStart"in a){var b=a.selectionStart;var c=a.selectionEnd}else{var d=a.createTextRange(),e=Dh(a).selection.createRange();d.inRange(e)&&(d.setEndPoint("EndToStart",e),b=d.text.length,d.setEndPoint("EndToEnd",e),c=d.text.length)}if(b!==void 0){var f=qg(b,c);break a}}catch(g){}f=null}f&&(this.s=f)}};
function ok(a){var b;a.m.ra(window,"pagehide",function(){a.Cb=!0;b=a.g.value});
a.m.ra(window,"pageshow",function(c){a.Cb=!1;(c.persisted||b!==void 0)&&Ui(a.i,b)})}
function pk(a){a.m.ra(window,"pageshow",function(b){b.persisted&&a.Bb&&Ui(a.i,a.Bb)})}
function Di(a,b){a.config_.od&&a.o?vh(a.o,"expanded",b):vh(a.g,"haspopup",b);b||a.g.removeAttribute("aria-activedescendant")}
;function xk(a){return typeof a.className=="string"?a.className:a.getAttribute&&a.getAttribute("class")||""}
function yk(a,b){typeof a.className=="string"?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function zk(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:xk(a).match(/\S+/g)||[],b=nb(a,b)>=0);return b}
function mj(a,b){if(a.classList)a.classList.add(b);else if(!zk(a,b)){var c=xk(a);yk(a,c+(c.length>0?" "+b:b))}}
function Ak(a,b){a.classList?a.classList.remove(b):zk(a,b)&&yk(a,Array.prototype.filter.call(a.classList?a.classList:xk(a).match(/\S+/g)||[],function(c){return c!=b}).join(" "))}
;function Bk(){this.l=129;this.J={};this.W=[];this.Y=[];this.ca=[];this.m=[];this.ea=0;this.isDarkTheme=!!document.body.dataset.dt}
y(Bk,L);n=Bk.prototype;
n.sa=function(a,b){var c=this.isDarkTheme?"#202124":"#fff";this.O=a;this.u=a.Pc();this.H=a.jc();sh||b.addRule(".sbsb_a","background:"+c);b.addRule(".sbsb_b","list-style-type:none;margin:0;padding:0");sh||b.addRule(".sbsb_c","line-height:22px;overflow:hidden;padding:0 10px");b.addRule(".sbsb_d","background:#eee");b.addRule(".sbsb_e","height:1px;background-color:#e5e5e5");b.addRule("#sbsb_f","font-size:11px;color:#36c;text-decoration:none");b.addRule("#sbsb_f:hover","font-size:11px;color:#36c;text-decoration:underline");b.addRule(".sbsb_g",
"text-align:center;padding:8px 0 7px;position:relative");b.addRule(".sbsb_h","font-size:15px;height:28px;margin:0.2em"+(nh?";-webkit-appearance:button":""));b.addRule(".sbsb_i","font-size:13px;color:#36c;text-decoration:none;line-height:100%");b.addRule(".sbsb_i:hover","text-decoration:underline");b.addRule(".sbsb_j","padding-top:1px 0 2px 0;font-size:11px");b.addRule(".sbdd_a[dir=ltr] .sbsb_j","padding-right:4px;text-align:right");b.addRule(".sbdd_a[dir=rtl] .sbsb_j","padding-left:4px;text-align:left");
sh&&(b.addRule(".sbsb_c[dir=ltr] .sbsb_k","padding:10px 3px 11px 8px"),b.addRule(".sbsb_c[dir=rtl] .sbsb_k","padding:10px 8px 11px 3px"))};
n.N=function(a){this.D=a.get(128);this.s=a.get(118);this.I=a.get(121);a=Pg(a,152);var b={};if(a)for(var c,d=0;c=a[d++];)b[c.D]=c;this.na=b};
n.ga=function(a){this.config_=a};
n.lb=function(a){this.o=N();a.Ma?(this.g=N("sbsb_b"),uh(this.g,"grid"),this.g.id=this.O.getId("sbsg")):(this.g=M("ul","sbsb_b"),uh(this.g,"listbox"));this.o.appendChild(this.g)};
n.P=function(a){this.config_=a;var b=a.qe;b&&(this.Xa=this.O.Od(b));this.o.className=a.Pg||"sbsb_a";this.X=a.Mg||"sbsb_d"};
function wk(a,b){if(a.config_.Ma&&(a=a.m[b]))return a.g().parentNode.querySelectorAll("[role=gridcell]")}
function lj(a,b){(b=a.m[b])&&Ak(b.g().parentNode,a.X)}
n.clear=function(){for(var a,b,c;c=this.W.pop();)a=c.getType(),(b=this.J[a])||(b=this.J[a]=[]),b.push(c),a=c.g(),a.parentNode.removeChild(a);for(;a=this.g.firstChild;)a=this.g.removeChild(a),a.l?this.ca.push(a):a!=this.B&&a!=this.A&&this.Y.push(a);this.B&&(this.B.style.display="none");this.A&&(this.A.style.display="none");this.m=[]};
function dj(a,b){var c=b.getType(),d=a.na[c];if(!d)return!1;(c=(c=a.J[c])&&c.pop())||(c=Ck(a,d));d.zb(b,c);a.W.push(c);var e=c.g();if(a.config_.Ma)for(var f=e.querySelectorAll('[role="gridcell"]'),g=0;g<f.length;g++)f[g].id=e.id+("x"+g);f=Dk(a);f.appendChild(e);if(b.u!==void 0){a.m.push(c);g=a.F;var h=b.l;a.config_.Sf&&(e.onmouseover=function(){ij(a.D,h)},e.onmouseout=function(){ai(a.D)});
var l=c.g();l.onclick=function(k){vk(a.s.m);b.o&&Qi(a.s,b.g);ai(a.D);var m=a.D;m.i=m.g=h;k=k||Kh(l).event;d.yb(k,b,a.I)}}else g=a.H;
Fh(f,g);return!0}
function Ck(a,b){b=b.Gb(a.I);var c=b.g();mj(c,"sbse");c.id="sbse"+a.ea;(c=b.g())&&!a.config_.Ma&&uh(c,"option");a.ea++;return b}
function hj(a,b,c,d){var e=M("input");e.type="button";e.value=wg(b);e.onclick=function(){di(a.I,a.s.g,d)};
if(a.config_.Kf){b="lsb";var f=M("span");var g=M("span");f.className="ds";g.className="lsbb";f.appendChild(g);g.appendChild(e)}else b="sbsb_h",f=e;e.className=b;c.appendChild(f)}
function Dk(a){var b=a.Y.pop();if(b)return a.g.appendChild(b),b;a.config_.Ma?(b=N(),uh(b,"row")):(b=M("li"),uh(b,"presentation"));b.className="sbsb_c "+a.config_.yc;b.onmousedown=E(a.hd,a);a.g.appendChild(b);return b}
n.hd=function(a){a=a||Kh(this.o).event;a.stopPropagation?(a.stopPropagation(),window.Polymer&&window.Polymer.Element&&a.preventDefault()):Zg&&!mh&&(this.s.m.ea=!0);return!1};
function cj(a){if(a.i){var b=0,c=a.s.m.B;c&&(b=c.offsetWidth);c=a.i;a=mk(a.s.m)-b-3;a>0&&(c.style.width=a+"px")}}
;function Ek(){this.l=147}
H(Ek,L);Ek.prototype.sa=function(a){this.u=a.Pd()||document.body};
Ek.prototype.ga=function(a){this.config_=a};
Ek.prototype.getHeight=function(){this.g||ej(this);fj(this);this.i||(Eh(this.g,"|"),this.i=this.g.offsetHeight);return this.i};
function ej(a){var b=N(a.config_.Uc),c=b.style;c.background="transparent";c.color="#000";c.padding=0;c.position="absolute";c.whiteSpace="pre";a.g=b;a.g.style.visibility="hidden";a.u.appendChild(a.g)}
function fj(a){var b=F();if(!a.o||a.o+3E3<b){a.o=b;b=a.g;var c=Kh(b);b=(b=c.getComputedStyle?c.getComputedStyle(b,""):b.currentStyle)?b.fontSize:null;a.s&&b==a.s||(a.m={},a.i=null,a.s=b)}}
;function Fk(){Kg.call(this);this.set(191,new ck);this.set(150,new fk);this.set(146,new gk);this.set(147,new Ek);Lg(this,149,new xi);this.set(145,new oj);this.set(117,new pj);this.set(494,new wj);this.set(374,new xj);this.set(120,new yj);this.set(121,new Lj);this.set(553,new Oj);this.set(124,new Wj);this.set(125,new Xj);this.set(123,new Qj);this.set(126,new Zj);this.set(127,new bk);this.set(115,new Ai);this.set(118,new Ii);this.set(128,new $i);Lg(this,154,new nj);this.set(116,new ik);this.set(119,
new nk);this.set(129,new Bk)}
y(Fk,Kg);function Gk(){this.l=347;this.i=[];this.m=0}
y(Gk,L);Gk.prototype.N=function(a){this.o=a.get(120)};
Gk.prototype.P=function(a){this.s="//"+(a.lg||"www."+a.dc)+"/gen_204?";this.g=a.Lg||{}};
function Mj(a,b){b=zj(a.o,b);for(var c in a.g)c in b||(b[c]=a.g[c]);c=sg(b,!0);Hk(a,a.s+c)}
function Hk(a,b){var c=new Image,d=a.m,e=a.i;c.onerror=c.onload=c.onabort=function(){try{delete e[d]}catch(f){}};
a.i[a.m++]=c;c.src=b}
;function Ik(){this.l=151;this.g=!0;this.i={}}
y(Ik,L);n=Ik.prototype;n.N=function(a){this.m=a.get(150)};
n.ga=function(){this.s=pg([0])};
n.P=function(a){this.o=a.Qc;this.g=a.Gd};
n.Fa=function(){this.g=!1};
n.update=function(a){if(this.g){var b=a.g;if(b.length){var c=a.l.l;a:{var d=Number.MAX_VALUE;for(var e,f=0;e=b[f++];){if(!this.s[e.getType()]){d=-1;break a}e=e.g;d=Math.min(e.length,d)}}if(d!=-1){var g=b[0].g;if(yg(g,c,!0))for(f=c.length+1;f<=d;){c=null;for(e=0;g=b[e++];){g=g.g;if(f>g.length)return;g=g.substr(0,f);if(!c)c=g;else if(c!=g)return}this.i[c]=a;++f}}}}};
n.get=function(a){if(this.g){var b=this.i[a.l];if(b){for(var c=a.B,d=a.l,e=b.i,f=this.o||!e.g.k,g=[],h,l,k=b.g,m,p=0;m=k[p++];)l=m.g,h=f?this.m.bold(c,l):vg(l),g.push(new cg(h,l,m.l,m.getType(),m.i||[],m.m));delete this.i[d];return new Ig(a,g,e,!0,b.m,!1)}}return null};
n.reset=function(){this.i={}};function Jk(){this.l=133;this.i={};this.g=[];this.o=this.m=0}
y(Jk,L);Jk.prototype.N=function(a){this.g=Pg(a,151);this.g.sort(Kk)};
Jk.prototype.P=function(){this.o=this.m=0};
Jk.prototype.get=function(a){var b=this.i[a.i];if(b)++this.m;else if(this.g)for(var c=0;c<this.g.length;++c)if(b=this.g[c].get(a)){b&&b.m&&(this.i[b.l.i]=b);++this.o;break}return b?new Ig(a,b.g,b.i,b.o,b.m,b.u):null};
Jk.prototype.has=function(a){return!!this.i[a.i]};
function Kk(){return 0}
;function Lk(a){this.l=a;this.g=new RegExp("(?:^|\\s+)"+a+"(?:$|\\s+)")}
function Mk(a,b){b&&!a.g.test(b.className)&&(b.className+=" "+a.l)}
function Nk(a,b){b&&(b.className=b.className.replace(a.g," "))}
;function Ok(){this.l=570;this.m=!1}
H(Ok,L);n=Ok.prototype;n.sa=function(a){this.u=a};
n.N=function(a){this.s=a.get(117);this.A=a.get(118)};
n.ga=function(a){var b=a.Lb;if(this.g=b?this.u.Od(b):null){b=this.s;var c=E(this.Af,this);qj(b,b.g,10,c);b=this.s;c=E(this.yf,this);qj(b,b.g,11,c);qj(this.s,this.g,"mouseover",E(this.Ef,this));qj(this.s,this.g,"mouseout",E(this.Df,this));a.Nc&&(this.o=new Lk(a.Nc));a.Mc&&(this.i=new Lk(a.Mc))}};
n.P=function(){this.m=!0;this.g&&this.A.m.u&&this.i&&Mk(this.i,this.g)};
n.Fa=function(){this.m=!1;this.g&&(this.o&&Nk(this.o,this.g),this.i&&Nk(this.i,this.g))};
n.Ef=function(){this.m&&this.o&&Mk(this.o,this.g)};
n.Df=function(){this.m&&this.o&&Nk(this.o,this.g)};
n.Af=function(){this.m&&this.i&&Mk(this.i,this.g)};
n.yf=function(){this.m&&this.i&&Nk(this.i,this.g)};var Pk=ha(["//www.google.com/textinputassistant/","/","_tia.js"]);function Qk(){this.l=160}
H(Qk,L);n=Qk.prototype;n.sa=function(a,b){this.m=a;a.Gc()||(b.addRule(".gsok_a","background:url(data:image/gif;base64,R0lGODlhEwALAKECAAAAABISEv///////yH5BAEKAAIALAAAAAATAAsAAAIdDI6pZ+suQJyy0ocV3bbm33EcCArmiUYk1qxAUAAAOw==) no-repeat center;display:inline-block;height:11px;line-height:0;width:19px"),b.addRule(".gsok_a img","border:none;visibility:hidden"))};
n.N=function(a){this.s=a.get(374);this.u=a.get(128)};
n.ga=function(a){this.o=!!a.lc;this.A=a.je;this.D=a.pc;this.H=a.ug;this.F=a.tg};
n.lb=function(){(this.i=this.m.get("gs_ok"))?this.g=this.i.firstChild:(this.g=M("img"),this.g.src=this.A+"/tia.png",this.i=M("span","gsok_a gsst_e"),this.i.id=this.m.getId("gs_ok"),this.i.appendChild(this.g));this.g.ds=E(this.af,this);this.g.setAttribute("tia_field_name",this.m.Pc().name);this.g.setAttribute("tia_disable_swap",!0)};
n.P=function(a){a.Rc&&(this.o=!!a.lc);this.g.setAttribute("tia_property",a.ke)};
n.isEnabled=function(){return this.o};
n.Rd=function(){return{tooltip:this.F}};
n.Ad=function(a){if(!this.B){a=id("SCRIPT");var b=fd(Pk,this.H,this.D);Db(a,b);document.body.appendChild(a);this.B=!0;this.s.add(3)}else if(this.g.onclick)this.g.onclick(a);return!1};
n.af=function(){var a=this.u;mi(a.D);Li(a)};
var Rk=og++;var Sk=ha(["#"]);function Tk(){this.l=173;this.m={}}
y(Tk,L);n=Tk.prototype;
n.sa=function(a,b){this.o=a;a.Gc()||(b.addRule(".gsst_a","display:inline-block"),b.addRule(".gsst_a","cursor:pointer;padding:0 4px"),b.addRule(".gsst_a:hover","text-decoration:none!important"),b.addRule(".gsst_b","font-size:16px;padding:0 2px;position:relative;"+b.prefix("user-select:none;")+"white-space:nowrap"),b.addRule(".gsst_e","vertical-align:middle;"+(Lh()+":"+Mh(.6)+";")),b.addRule(".gsst_a:hover .gsst_e,.gsst_a:focus .gsst_e",Lh()+":"+Mh(.8)+";"),b.addRule(".gsst_a:active .gsst_e",Lh()+":"+
Mh(1)+";"))};
n.N=function(a){this.u=a.get(118);this.i=Pg(a,160)};
n.ga=function(a){this.A=a.Rc;this.i.sort(Uk)};
n.lb=function(a){this.g=this.o.get("gs_st");if(!this.g){this.g=N("gsst_b");this.g.id=this.o.getId("gs_st");if(a=a.Nb)this.g.style.lineHeight=a+"px";Vk(this)}Wk(this)};
n.P=function(){if(this.A)for(var a=0,b;b=this.i[a++];){var c=!!this.m[Rk];if(b.isEnabled()!=c){for(;this.g.hasChildNodes();)this.g.removeChild(this.g.lastChild);Vk(this);Wk(this);break}}};
function Uk(){return 0}
function Vk(a){for(var b,c=0,d;d=a.i[c++];)if(d.isEnabled()){b=!0;var e=M("a","gsst_a");Xk(a,e,d);e.appendChild(d.i);a.g.appendChild(e)}a.g.style.display=b?"":"none"}
function Wk(a){a.m={};for(var b=0,c;c=a.i[b++];)if(c.isEnabled()){var d=Rk,e=c.i.parentNode;e.onclick=E(c.Ad,c);a.m[d]=e;c.Rd&&(c=c.Rd(),c.Wh&&(d=a.m[d])&&d.style&&(d.style.visibility="hidden"),d=c.tooltip)&&(e.title=d)}}
function Xk(a,b,c){mb(b,hb(Sk));b.addEventListener("click",function(){return!1});
mh&&(b.tabIndex=0);b.onkeydown=function(d){d=d||window.event;var e=d.keyCode;if(e==13||e==32)c.Ad(d),bi(a.u),Hh(d)}}
og++;function Yk(){this.o=33;this.l=N();this.l.className="gspr_a"}
H(Yk,Xg);Yk.prototype.g=function(){return this.l};function Zk(){Yg.call(this,33)}
y(Zk,Yg);Zk.prototype.sa=function(a,b){b.addRule(".gspr_a","padding-right:1px")};
Zk.prototype.Gb=function(){return new Yk};
Zk.prototype.zb=function(a,b){Bb(b.l,$c(dd,a.m.g.b||""))};
Zk.prototype.yb=function(a,b,c){di(c,b.g,1)};function $k(a,b){this.o=0;this.u=a;this.D=b;this.m=N();this.l=N("sbqs_a");this.m.appendChild(this.l);this.B=N("sbqs_c");this.m.appendChild(this.B)}
y($k,Xg);$k.prototype.g=function(){return this.m};
function al(a,b,c,d){Bb(a.B,$f(b));a.A=c;d&&!a.i&&(a.i=Ih(a.l),a.i.onclick=E(function(e){vk(this.u.m);Qi(this.u,this.A);di(this.D,this.A,9);return Hh(e)},a));
d?(Bb(a.i,$f(d+" &raquo;")),a.l.style.display="",vh(a.l,"hidden",!0)):a.i&&(a.l.style.display="none")}
;function bl(){Yg.call(this,0)}
H(bl,Yg);n=bl.prototype;n.sa=function(a,b){b.addRule(".sbsb_c[dir=ltr] .sbqs_a","float:right");b.addRule(".sbsb_c[dir=rtl] .sbqs_a","float:left");b.addRule(".sbqs_b","visibility:hidden");b.addRule(".sbsb_d .sbqs_b","visibility:visible");b.addRule(".sbsb_c[dir=ltr] .sbqs_b","padding-left:5px;");b.addRule(".sbsb_c[dir=rtl] .sbqs_b","padding-right:5px;");b.addRule(".sbqs_c","word-wrap:break-word")};
n.N=function(a){this.g=a.get(118)};
n.P=function(a){this.i=a.Kd?a.Ld:""};
n.Gb=function(a){return new $k(this.g,a)};
n.zb=function(a,b){al(b,a.getHtml(),a.g,this.i)};
n.yb=function(a,b,c){di(c,b.g,1)};function cl(a){Fk.call(this);Lg(this,149,new Qg);this.set(347,new Gk);this.set(133,new Jk);Lg(this,151,new Ik);this.set(570,new Ok);this.set(134,new gi);this.set(189,new ji);Lg(this,156,new ni);a.ENABLE_DELETE_ICON?Lg(this,152,new ci):Lg(this,152,new fi);Lg(this,152,new Zk);Lg(this,152,new bl);this.set(173,new Tk);Lg(this,160,new Qk);this.set(157,new pi);Lg(this,156,new qi);a.SEARCHBOX_BEHAVIOR_EXPERIMENT=="zero-prefix"&&Lg(this,156,new oi(a));var b=a.SBOX_STRINGS||{};a.SEARCHBOX_REPORTING&&a.SEARCHBOX_COMPONENT&&
b.SBOX_REPORT_SUGGESTIONS&&(Lg(this,153,new Vg),Lg(this,152,new Sh(b.SBOX_REPORT_SUGGESTIONS,a.SEARCHBOX_COMPONENT)));a.SEARCHBOX_COMPONENT&&(this.set(598,new ri(a.SEARCHBOX_COMPONENT,a.SEARCHBOX_ENABLE_REFINEMENT_SUGGEST,a.SEARCHBOX_ZERO_TYPING_SUGGEST_USE_REGULAR_SUGGEST)),Lg(this,156,new wi))}
y(cl,Fk);function dl(){return{sf:function(){return{clientName:"hp",requestIdentifier:"hp",dc:"google.com",De:"",Vc:"en",Ic:"",jd:"",videoId:"",ud:"",authuser:0,mg:"",wi:"",Ae:null,sd:"",Id:!1,md:"",wc:"",connectionType:0,transport:null,He:!1,ji:!1,Uf:!1,enableCaching:!0,kf:10,Ph:10,ef:!0,Gd:!0,Lh:!1,pf:!1,gg:!1,hg:!1,Zh:!1,Qf:!0,bf:!1,Rf:500,Rc:!1,Jf:!0,Uh:!0,ni:!1,lc:!1,pc:"",je:"//www.google.com/textinputassistant",ke:"",ug:7,Rh:!1,Sh:!1,Nf:!1,Mf:!0,Of:!1,Vd:!1,Ma:!1,Fg:!1,Eg:!1,zc:1,fe:!0,ic:!1,Kd:!1,Hd:!1,
xg:10,Qc:!1,Bg:!0,Ha:document.body,Pf:!0,Ee:null,hf:{},Oh:{},hi:0,qf:!1,Vf:!0,jb:!1,nf:!1,Jg:!1,ri:null,ff:!1,lg:null,Lg:null,Lc:!1,Sf:!0,od:!1,We:!1,ti:1,he:!1,Gg:"Search",Ld:"I'm  Feeling Lucky",Hg:"",kg:"Learn more",ld:"Remove",kd:"This search was removed from your Web History",Vh:"",Kh:"Did you mean:",tg:"",li:"",zi:"Search by voice",yi:'Listening for "Ok Google"',xi:'Say "Ok Google"',Jh:"Clear Search",Nb:0,cg:0,Uc:"",yc:"",Yh:!1,Kb:"absolute",Kf:!1,Ud:!1,qe:null,Lf:!0,fc:[0,0,0],cf:null,Og:null,
Bd:[0],qd:!0,Ge:"",Pg:"",Mg:"",Lb:null,Nc:"",Mc:"",Ih:1,Wg:!1,Nd:!1,bi:0,Kg:!1,Ze:!1,Mh:!1,yg:!0}}}}
;function el(a,b,c,d,e){var f=lh?"-moz-":Zg?"-ms-":mh?"-o-":nh?"-webkit-":"",g=".gstl_"+d,h=new RegExp("(\\.("+e.join("|")+")\\b)"),l=[];return{addRule:function(k,m){if(b){if(c){k=k.split(",");for(var p=[],r=0,q;q=k[r++];)q=h.test(q)?q.replace(h,g+"$1"):g+" "+q,p.push(q);k=p.join(",")}l.push(k,"{",m,"}")}},
Se:function(){if(b&&l.length){b=!1;var k=M("style");k.setAttribute("type","text/css");(a||mg).appendChild(k);var m=l.join("");l=null;k.styleSheet?k.styleSheet.cssText=m:k.appendChild(document.createTextNode(m))}},
prefix:function(k,m){var p=k+(m||"");f&&(p+=m?k+f+m:f+k);return p}}}
;function fl(a,b,c,d){this.i=a;this.I=b;this.F=c;this.H=d;this.l=-1;this.D=!1}
n=fl.prototype;n.install=function(a){if(!this.D){a=gl(a);this.l<0&&(this.l=hl(a));var b=Dh(this.i),c=il(this),d=!!b.getElementById("gs_id"+this.l),e=this,f=["gssb_c","gssb_k","sbdd_a","sbdd_c","sbib_a"];a.Ge&&f.push(a.Ge);f=el(a.Ee,a.Pf,a.ff,this.l,f);this.A=a.jb;this.g=new Mg(this.F,this.H,{Gc:function(){return d},
get:function(g){return b.getElementById(g+e.l)},
Od:function(g){return b.getElementById(g)},
Pd:function(){return e.I},
jc:function(){return c},
getId:function(g){return g+e.l},
Pc:function(){return e.i}},f,this,a);
this.g.get(347);this.u=this.g.get(130);this.g.get(115);this.m=this.g.get(117);this.g.get(123);this.g.get(135);this.J=this.g.get(118);this.Y=this.g.get(119);this.O=this.g.get(374);this.o=this.g.get(120);this.g.get(189);this.W=this.g.get(553);this.g.get(419);this.g.get(126);this.g.get(128);this.g.get(139);this.X=this.g.get(121);a=Kh(this.i);this.s=Jh(a);this.B=E(this.Dg,this);this.m.ra(a,"resize",this.B);this.D=!0}};
n.isActive=function(){return!!this.g&&this.g.isActive()};
function jl(a,b){function c(d){di(a.X,a.J.g,12);return Gh(d)}
a.m.ra(b,"keyup",function(d){d.keyCode!=13&&d.keyCode!=32||c(d)});
a.m.ra(b,"click",c)}
n.getId=function(){return this.l};
n.jb=function(){return this.A||!!this.u&&this.u.jb()};
n.pd=function(a){this.W.pd(a)};
function hl(a){a=Kh(a.Ee||mg);a.nextSearchboxId==void 0&&(a.nextSearchboxId=50);return a.nextSearchboxId++}
function il(a){if(a.i)for(a=a.i;a=a.parentNode;){var b=a.dir;if(b)return b}return"ltr"}
function gl(a){a=Dg(a);var b=a.pc;b?a.pc=b.toLowerCase():a.lc=!1;a.ic&&!a.Kd&&(a.ic=!1);oh||(a.hg=!1);return a}
n.Dg=function(){var a=Jh(Kh(this.i));if(a.Ie!=this.s.Ie||a.Xd!=this.s.Xd)this.s=a,Gi(this.m,8)};function kl(){this.B="sbhcn";this.A="sbfcn";this.D="gsfi";this.i="gsfs";this.u=function(){return!0};
G("ytvoicesearchloggingparams",E(this.uf,this))}
y(kl,Jg);n=kl.prototype;n.uf=function(){this.g.O.add(6);return zj(this.g.o,15)};
n.xd=function(a){vk(this.g.Y);this.u(zj(this.g.o,a))&&this.l.submit()};
n.redirect=function(a){this.I(this.wd(a))};
n.wd=function(a){var b=a.indexOf("?")>=0?"&":"?",c=zj(this.g.o);var d=this.g;c||(c=zj(d.o));d=sg(c);return a+b+d};
n.ge=function(a){if(this.o||this.m){if(this.s>22){var b=(this.s-22)/2;a.addRule(".sbsb_c","padding:"+b+"px 24px "+b+"px 10px")}else a.addRule(".sbsb_c","padding:4px 24px 4px 10px");this.J?a.addRule(".sbsb_a","padding: 16px 0 0"):a.addRule(".sbsb_a","padding: 16px 0");a.addRule(".sbdd_b","border-top: 0");a.addRule(".sbib_a","background:transparent");a.addRule(".sbib_b","padding: 0")}b='background: no-repeat url("data:image/svg+xml;base64, '+window.btoa('<svg fill="#030303" xmlns="http://www.w3.org/2000/svg"><path d="M12.475 14.1253L8.3333 11.5587V5.83366H9.99997V10.6337L13.3583 12.7087L12.475 14.1253ZM18.3333 10.0003C18.3333 14.592 14.5916 18.3337 9.99997 18.3337C5.4083 18.3337 1.66663 14.592 1.66663 10.0003H2.49997C2.49997 14.1337 5.86663 17.5003 9.99997 17.5003C14.1333 17.5003 17.5 14.1337 17.5 10.0003C17.5 5.86699 14.1333 2.50033 9.99997 2.50033C7.34163 2.50033 4.9333 3.86699 3.56663 6.15033C3.47497 6.30033 3.3833 6.45866 3.3083 6.61699C3.29997 6.63366 3.29163 6.65033 3.2833 6.66699H6.66663V7.50033H1.6333V2.50033H2.46663V6.45033C2.49997 6.37533 2.52497 6.30866 2.5583 6.24199C2.64997 6.05866 2.74997 5.89199 2.84997 5.71699C4.34997 3.21699 7.09163 1.66699 9.99997 1.66699C14.5916 1.66699 18.3333 5.40866 18.3333 10.0003Z"/></svg>')+
'");';a.addRule(".sbpqs_a","display: flex; align-items:center; white-space: pre;");a.addRule(".sbpqs_a:before",b);b='background: no-repeat url("data:image/svg+xml;base64,'+window.btoa('<svg fill="#030303" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11ZM16.2961 16.9961C14.8853 18.2431 13.031 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 13.0274 18.2458 14.8786 17.0028 16.2885L20.5583 19.8441L20.9119 20.1976L20.2048 20.9047L19.8512 20.5512L16.2961 16.9961Z"/>\n</svg>')+
'");';a.addRule(".sbqs_c","display: flex; align-items:center; white-space: pre;");a.addRule(".sbqs_c:before",b);b='background: no-repeat url("data:image/svg+xml;base64, '+window.btoa('<svg fill="#f1f1f1" xmlns="http://www.w3.org/2000/svg"><path d="M12.475 14.1253L8.3333 11.5587V5.83366H9.99997V10.6337L13.3583 12.7087L12.475 14.1253ZM18.3333 10.0003C18.3333 14.592 14.5916 18.3337 9.99997 18.3337C5.4083 18.3337 1.66663 14.592 1.66663 10.0003H2.49997C2.49997 14.1337 5.86663 17.5003 9.99997 17.5003C14.1333 17.5003 17.5 14.1337 17.5 10.0003C17.5 5.86699 14.1333 2.50033 9.99997 2.50033C7.34163 2.50033 4.9333 3.86699 3.56663 6.15033C3.47497 6.30033 3.3833 6.45866 3.3083 6.61699C3.29997 6.63366 3.29163 6.65033 3.2833 6.66699H6.66663V7.50033H1.6333V2.50033H2.46663V6.45033C2.49997 6.37533 2.52497 6.30866 2.5583 6.24199C2.64997 6.05866 2.74997 5.89199 2.84997 5.71699C4.34997 3.21699 7.09163 1.66699 9.99997 1.66699C14.5916 1.66699 18.3333 5.40866 18.3333 10.0003Z"/></svg>')+
'");';a.addRule("html[dark] .sbpqs_a:before",b);b='background: no-repeat url("data:image/svg+xml;base64, '+window.btoa('<svg fill="#f1f1f1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11ZM16.2961 16.9961C14.8853 18.2431 13.031 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 13.0274 18.2458 14.8786 17.0028 16.2885L20.5583 19.8441L20.9119 20.1976L20.2048 20.9047L19.8512 20.5512L16.2961 16.9961Z"/>\n</svg>')+
'");';a.addRule("html[dark] .sbqs_c:before",b);a.addRule(".sbpqs_a:before",'height: 20px; width: 20px; content: " ";');a.addRule(".sbqs_c:before",'height: 20px; width: 20px; content: " ";');a.addRule(".sbpqs_c","display: flex; align-items:center; margin-left: 34px;");a.addRule(".sbsb_c[dir=rtl] .sbpqs_c","margin-right: 34px;");a.addRule(".sbsb_c","line-height: 32px;");a.addRule(".sbpqs_c","line-height: 32px;");a.addRule(".sbsb_a","padding: 16px 0 8px");a.addRule(".sbfl_a","margin:-5px -18px -9px 0");
a.addRule("."+this.i,"font-size:1.6rem;color:#222");a.addRule(".sbdd_c","z-index:2010");a.addRule(".sbdd_a","z-index:2021");a.addRule(".sbib_a","background:transparent; width: 100%; flex: 1;");a.addRule("ytd-masthead[dark] .gsst_e","filter: invert(100%)");a.addRule(".sbpqs_a","color: #030303");a.addRule(".sbqs_c b","font-weight:500");a.addRule(".sbpqs_a b","font-weight: 500");a.addRule("html[dark] .sbqs_c b","font-weight: 600");a.addRule("html[dark] .sbpqs_a b","font-weight: 600");a.addRule(".sbsb_c[dir=ltr]",
"padding: 0px 24px 0px 16px;");a.addRule(".sbsb_c[dir=rtl]","padding: 0px 16px 0px 24px;");a.addRule(".sbdd_b","border-radius: 12px;");a.addRule(".sbsb_a","border-radius: 12px;");a.addRule(".sbsb_c[dir=ltr] .sbpqs_a:before","margin-right: 14px;");a.addRule(".sbsb_c[dir=ltr] .sbqs_c:before","margin-right: 14px;");a.addRule(".sbsb_c[dir=rtl] .sbpqs_a:before","margin-left: 14px;");a.addRule(".sbsb_c[dir=rtl] .sbqs_c:before","margin-left: 14px;");a.addRule(".sbfl_a","margin:-5px -10px -9px 0");this.H&&
(a.addRule(".sbsb_c","padding:0px 12px 0px 16px"),a.addRule(".sbpqs_b","display: flex; align-items: center; height: 32px;"));this.F&&(a.addRule(".sbpqs_b","display: none"),a.addRule(".sbsb_d .sbpqs_b","display: flex; align-items: center; height: 32px;"));a.addRule("html[dark] .sbsb_a","background: var(--yt-spec-raised-background);");a.addRule("html[dark] .sbdd_b","border: none; background: none; box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.15);");a.addRule("html[dark] .sbsb_i","color: var(--yt-spec-call-to-action)");
a.addRule("html[dark] .sbsb_d","background: var(--yt-spec-additive-background);");a.addRule(".sbfl_b","background: none; color: var(--yt-spec-text-secondary);");a.addRule("html[dark] .sbfl_a:hover","color: var(--yt-spec-text-primary);");a.addRule("html[dark] .sbpqs_a","color: var(--yt-spec-text-primary);");a.addRule("html[dark] .sbqs_c","color: var(--yt-spec-text-primary);");a.addRule("html[dark] .sbse","color: var(--yt-spec-text-primary);")};
n.install=function(a,b,c,d,e,f,g){this.l=a;this.I=f;g&&(this.u=g);f=dl().sf();f.clientName="youtube";f.requestIdentifier="youtube";f.Ic="yt";f.Vc=d.REQUEST_LANGUAGE;f.De=d.REQUEST_DOMAIN;f.Jf=!1;f.zc=0;f.fe=!1;f.ic=!1;f.he=!1;f.Qc=!0;f.Uc=this.D;f.yc=this.i;f.Nc=this.B;f.Mc=this.A;f.Xh=!0;f.lc=d.HAS_ON_SCREEN_KEYBOARD;f.pc=d.REQUEST_LANGUAGE;f.je="//www.gstatic.com/inputtools/images";f.ke="youtube";f.Lc=!0;f.Kb="fixed";this.o=d.IS_POLYMER;this.m=d.IS_FUSION;this.J=d.SEARCHBOX_REPORTING;this.s=d.SEARCHBOX_TAP_TARGET_EXPERIMENT;
this.H=d.ENABLE_DELETE_ICON;this.F=d.ENABLE_DELETE_ICON_HOVER;f.md="suggestqueries-clients6.youtube.com";d.PQ&&(f.jd=d.PQ);f.ud=d.PSUGGEST_TOKEN;f.authuser=d.SESSION_INDEX;f.kd=e.SUGGESTION_DISMISSED_LABEL;f.ld=e.SUGGESTION_DISMISS_LABEL;f.qd=!d.HIDE_REMOVE_LINK;f.si=pg([0,33,35]);this.o?(f.Lb="search-container",f.Nb=24):this.m?(f.Lb="masthead-search",f.Nb=24):(f.Lb="masthead-search-terms",f.Nb=30);bc()||(f.Ud=!0);f.qe=f.Lb;e=this.l.offsetHeight;f.fc=[e+(56-e)/2-40+4,0,0];e=[0];cc()&&hc()=="8.0"&&
(e[0]=-1);f.Bd=e;(e=d.REQUEST_LANGUAGE)?(e=e.toLowerCase(),e=e=="zh-tw"||e=="zh-cn"||e=="ja"||e=="ko"):e=!1;e&&(f.Hd=!0);if(e=d.SUGG_EXP_ID)f.sd=e;d.SEND_VISITOR_DATA&&(f.connectionType=1);d.SEND_VISITOR_DATA&&"VISITOR_DATA"in d&&(f.visitorData=d.VISITOR_DATA);if(this.g){a=this.g;b=f;c=Kh(a.i);d=a.B;c.removeEventListener?c.removeEventListener("resize",d,!1):c.detachEvent("onresize",d);Og(a.g);b=gl(b);a.A=b.jb;a=a.g;Og(a);for(c=0;d=a.g[c++];)d.P(b);a.l=!0}else d=new cl(d),this.g=new fl(b,a,this,d),
this.g.install(f),c&&(jl(this.g,c),c.onclick=null)};function ll(){this.data=[];this.g=-1}
ll.prototype.set=function(a,b){b=b===void 0?!0:b;0<=a&&a<52&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.g=-1)};
ll.prototype.get=function(a){return!!this.data[a]};
function ml(a){a.g===-1&&(a.g=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.g}
;function nl(){this.blockSize=-1}
;function ol(){this.blockSize=-1;this.blockSize=64;this.g=[];this.o=[];this.s=[];this.i=[];this.i[0]=128;for(var a=1;a<this.blockSize;++a)this.i[a]=0;this.m=this.l=0;this.reset()}
H(ol,nl);ol.prototype.reset=function(){this.g[0]=1732584193;this.g[1]=4023233417;this.g[2]=2562383102;this.g[3]=271733878;this.g[4]=3285377520;this.m=this.l=0};
function pl(a,b,c){c||(c=0);var d=a.s;if(typeof b==="string")for(var e=0;e<16;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;e<16;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;e<80;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.g[0];c=a.g[1];var g=a.g[2],h=a.g[3],l=a.g[4];for(e=0;e<80;e++){if(e<40)if(e<20){f=h^c&(g^h);var k=1518500249}else f=c^g^h,k=1859775393;else e<60?(f=c&g|h&(c|g),k=2400959708):
(f=c^g^h,k=3395469782);f=(b<<5|b>>>27)+f+l+k+d[e]&4294967295;l=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.g[0]=a.g[0]+b&4294967295;a.g[1]=a.g[1]+c&4294967295;a.g[2]=a.g[2]+g&4294967295;a.g[3]=a.g[3]+h&4294967295;a.g[4]=a.g[4]+l&4294967295}
ol.prototype.update=function(a,b){if(a!=null){b===void 0&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.o,f=this.l;d<b;){if(f==0)for(;d<=c;)pl(this,a,d),d+=this.blockSize;if(typeof a==="string")for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){pl(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){pl(this,e);f=0;break}}this.l=f;this.m+=b}};
ol.prototype.digest=function(){var a=[],b=this.m*8;this.l<56?this.update(this.i,56-this.l):this.update(this.i,this.blockSize-(this.l-56));for(var c=this.blockSize-1;c>=56;c--)this.o[c]=b&255,b/=256;pl(this,this.o);for(c=b=0;c<5;c++)for(var d=24;d>=0;d-=8)a[b]=this.g[c]>>d&255,++b;return a};function ql(){}
ql.prototype.next=function(){return rl};
var rl={done:!0,value:void 0};ql.prototype.ib=function(){return this};function sl(a){if(a instanceof tl||a instanceof ul||a instanceof vl)return a;if(typeof a.next=="function")return new tl(function(){return a});
if(typeof a[Symbol.iterator]=="function")return new tl(function(){return a[Symbol.iterator]()});
if(typeof a.ib=="function")return new tl(function(){return a.ib()});
throw Error("Not an iterator or iterable.");}
function tl(a){this.g=a}
tl.prototype.ib=function(){return new ul(this.g())};
tl.prototype[Symbol.iterator]=function(){return new vl(this.g())};
tl.prototype.l=function(){return new vl(this.g())};
function ul(a){this.g=a}
y(ul,ql);ul.prototype.next=function(){return this.g.next()};
ul.prototype[Symbol.iterator]=function(){return new vl(this.g)};
ul.prototype.l=function(){return new vl(this.g)};
function vl(a){tl.call(this,function(){return a});
this.i=a}
y(vl,tl);vl.prototype.next=function(){return this.i.next()};function wl(a){var b=[];xl(new yl,a,b);return b.join("")}
function yl(){}
function xl(a,b,c){if(b==null)c.push("null");else{if(typeof b=="object"){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),xl(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],typeof f!="function"&&(c.push(e),zl(d,c),c.push(":"),xl(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":zl(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Al={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Bl=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function zl(a,b){b.push('"',a.replace(Bl,function(c){var d=Al[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Al[c]=d);return d}),'"')}
;function Cl(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function P(a){Rb.call(this);this.s=1;this.i=[];this.o=0;this.g=[];this.l={};this.u=!!a}
H(P,Rb);n=P.prototype;n.subscribe=function(a,b,c){var d=this.l[a];d||(d=this.l[a]=[]);var e=this.s;this.g[e]=a;this.g[e+1]=b;this.g[e+2]=c;this.s=e+3;d.push(e);return e};
n.Bc=function(a){var b=this.g[a];if(b){var c=this.l[b];this.o!=0?(this.i.push(a),this.g[a+1]=function(){}):(c&&qb(c,a),delete this.g[a],delete this.g[a+1],delete this.g[a+2])}return!!b};
n.oe=function(a,b){var c=this.l[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.u)for(e=0;e<c.length;e++){var g=c[e];Dl(this.g[g+1],this.g[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f&&!this.Za;e++)g=c[e],this.g[g+1].apply(this.g[g+2],d)}finally{if(this.o--,this.i.length>0&&this.o==0)for(;c=this.i.pop();)this.Bc(c)}}return e!=0}return!1};
function Dl(a,b,c){td(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.l[a];b&&(b.forEach(this.Bc,this),delete this.l[a])}else this.g.length=0,this.l={}};
n.Ba=function(){P.Ea.Ba.call(this);this.clear();this.i.length=0};function El(a){this.g=a}
El.prototype.set=function(a,b){b===void 0?this.g.remove(a):this.g.set(a,wl(b))};
El.prototype.get=function(a){try{var b=this.g.get(a)}catch(c){return}if(b!==null)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
El.prototype.remove=function(a){this.g.remove(a)};function Fl(a){this.g=a}
H(Fl,El);function Gl(a){this.data=a}
function Hl(a){return a===void 0||a instanceof Gl?a:new Gl(a)}
Fl.prototype.set=function(a,b){Fl.Ea.set.call(this,a,Hl(b))};
Fl.prototype.l=function(a){a=Fl.Ea.get.call(this,a);if(a===void 0||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Fl.prototype.get=function(a){if(a=this.l(a)){if(a=a.data,a===void 0)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Il(a){this.g=a}
H(Il,Fl);Il.prototype.set=function(a,b,c){if(b=Hl(b)){if(c){if(c<F()){Il.prototype.remove.call(this,a);return}b.expiration=c}b.creation=F()}Il.Ea.set.call(this,a,b)};
Il.prototype.l=function(a){var b=Il.Ea.l.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<F()||c&&c>F())Il.prototype.remove.call(this,a);else return b}};function Jl(){}
;function Kl(){}
H(Kl,Jl);Kl.prototype[Symbol.iterator]=function(){return sl(this.ib(!0)).l()};
Kl.prototype.clear=function(){var a=Array.from(this);a=w(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Ll(a){this.g=a;this.l=null}
H(Ll,Kl);n=Ll.prototype;n.set=function(a,b){Ml(this);try{this.g.setItem(a,b)}catch(c){if(this.g.length==0)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
n.get=function(a){Ml(this);a=this.g.getItem(a);if(typeof a!=="string"&&a!==null)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){Ml(this);this.g.removeItem(a)};
n.ib=function(a){Ml(this);var b=0,c=this.g,d=new ql;d.next=function(){if(b>=c.length)return rl;var e=c.key(b++);if(a)return{value:e,done:!1};e=c.getItem(e);if(typeof e!=="string")throw"Storage mechanism: Invalid value was encountered";return{value:e,done:!1}};
return d};
n.clear=function(){Ml(this);this.g.clear()};
n.key=function(a){Ml(this);return this.g.key(a)};
function Ml(a){if(a.g==null)throw Error("Storage mechanism: Storage unavailable");var b;((b=a.l)!=null?b:a.l=Nl(a.g))||md(Error("Storage mechanism: Storage unavailable"))}
function Nl(a){if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return b instanceof DOMException&&(b.name==="QuotaExceededError"||b.code===22||b.code===1014||b.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a&&a.length!==0}}
;function Ol(){var a=null;try{a=C.localStorage||null}catch(b){}Ll.call(this,a)}
H(Ol,Ll);function Pl(a,b){this.l=a;this.g=b+"::"}
H(Pl,Kl);Pl.prototype.set=function(a,b){this.l.set(this.g+a,b)};
Pl.prototype.get=function(a){return this.l.get(this.g+a)};
Pl.prototype.remove=function(a){this.l.remove(this.g+a)};
Pl.prototype.ib=function(a){var b=this.l[Symbol.iterator](),c=this,d=new ql;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.g.length)!=c.g;){e=b.next();if(e.done)return e;e=e.value}return{value:a?e.slice(c.g.length):c.l.get(e),done:!1}};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var Q={},Ql=typeof Uint8Array!=="undefined"&&typeof Uint16Array!=="undefined"&&typeof Int32Array!=="undefined";Q.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if(typeof c!=="object")throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
Q.rd=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var Rl={kb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Md:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},Sl={kb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Md:function(a){return[].concat.apply([],a)}};
Q.Ig=function(){Ql?(Q.hb=Uint8Array,Q.Ja=Uint16Array,Q.Le=Int32Array,Q.assign(Q,Rl)):(Q.hb=Array,Q.Ja=Array,Q.Le=Array,Q.assign(Q,Sl))};
Q.Ig();var Tl=!0;try{new Uint8Array(1)}catch(a){Tl=!1}
function Ul(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if((f&64512)===55296&&b+1<d){var g=a.charCodeAt(b+1);(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=f<128?1:f<2048?2:f<65536?3:4}var h=new Q.hb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),(f&64512)===55296&&b+1<d&&(g=a.charCodeAt(b+1),(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)),f<128?h[c++]=f:(f<2048?h[c++]=192|f>>>6:(f<65536?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var Vl={};Vl=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;c!==0;){f=c>2E3?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var Wl={},Xl,Yl=[],Zl=0;Zl<256;Zl++){Xl=Zl;for(var $l=0;$l<8;$l++)Xl=Xl&1?3988292384^Xl>>>1:Xl>>>1;Yl[Zl]=Xl}Wl=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^Yl[(a^b[d])&255];return a^-1};var am={};am={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function bm(a){for(var b=a.length;--b>=0;)a[b]=0}
var cm=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],dm=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],em=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],fm=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],gm=Array(576);bm(gm);var hm=Array(60);bm(hm);var im=Array(512);bm(im);var jm=Array(256);bm(jm);var km=Array(29);bm(km);var lm=Array(30);bm(lm);function mm(a,b,c,d,e){this.Ce=a;this.mf=b;this.lf=c;this.df=d;this.qg=e;this.Wd=a&&a.length}
var nm,om,pm;function qm(a,b){this.Fd=a;this.ub=0;this.Ta=b}
function rm(a,b){a.ba[a.pending++]=b&255;a.ba[a.pending++]=b>>>8&255}
function sm(a,b,c){a.ha>16-c?(a.pa|=b<<a.ha&65535,rm(a,a.pa),a.pa=b>>16-a.ha,a.ha+=c-16):(a.pa|=b<<a.ha&65535,a.ha+=c)}
function tm(a,b,c){sm(a,c[b*2],c[b*2+1])}
function um(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(--b>0);return c>>>1}
function vm(a,b,c){var d=Array(16),e=0,f;for(f=1;f<=15;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[c*2+1],e!==0&&(a[c*2]=um(d[e]++,e))}
function wm(a){var b;for(b=0;b<286;b++)a.ta[b*2]=0;for(b=0;b<30;b++)a.ab[b*2]=0;for(b=0;b<19;b++)a.ka[b*2]=0;a.ta[512]=1;a.Qa=a.xb=0;a.za=a.matches=0}
function xm(a){a.ha>8?rm(a,a.pa):a.ha>0&&(a.ba[a.pending++]=a.pa);a.pa=0;a.ha=0}
function ym(a,b,c){xm(a);rm(a,c);rm(a,~c);Q.kb(a.ba,a.window,b,c,a.pending);a.pending+=c}
function zm(a,b,c,d){var e=b*2,f=c*2;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Am(a,b,c){for(var d=a.da[c],e=c<<1;e<=a.Pa;){e<a.Pa&&zm(b,a.da[e+1],a.da[e],a.depth)&&e++;if(zm(b,d,a.da[e],a.depth))break;a.da[c]=a.da[e];c=e;e<<=1}a.da[c]=d}
function Bm(a,b,c){var d=0;if(a.za!==0){do{var e=a.ba[a.Hb+d*2]<<8|a.ba[a.Hb+d*2+1];var f=a.ba[a.Xc+d];d++;if(e===0)tm(a,f,b);else{var g=jm[f];tm(a,g+256+1,b);var h=cm[g];h!==0&&(f-=km[g],sm(a,f,h));e--;g=e<256?im[e]:im[256+(e>>>7)];tm(a,g,c);h=dm[g];h!==0&&(e-=lm[g],sm(a,e,h))}}while(d<a.za)}tm(a,256,b)}
function Cm(a,b){var c=b.Fd,d=b.Ta.Ce,e=b.Ta.Wd,f=b.Ta.df,g,h=-1;a.Pa=0;a.qb=573;for(g=0;g<f;g++)c[g*2]!==0?(a.da[++a.Pa]=h=g,a.depth[g]=0):c[g*2+1]=0;for(;a.Pa<2;){var l=a.da[++a.Pa]=h<2?++h:0;c[l*2]=1;a.depth[l]=0;a.Qa--;e&&(a.xb-=d[l*2+1])}b.ub=h;for(g=a.Pa>>1;g>=1;g--)Am(a,c,g);l=f;do g=a.da[1],a.da[1]=a.da[a.Pa--],Am(a,c,1),d=a.da[1],a.da[--a.qb]=g,a.da[--a.qb]=d,c[l*2]=c[g*2]+c[d*2],a.depth[l]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[g*2+1]=c[d*2+1]=l,a.da[1]=l++,Am(a,c,1);while(a.Pa>=
2);a.da[--a.qb]=a.da[1];g=b.Fd;l=b.ub;d=b.Ta.Ce;e=b.Ta.Wd;f=b.Ta.mf;var k=b.Ta.lf,m=b.Ta.qg,p,r=0;for(p=0;p<=15;p++)a.La[p]=0;g[a.da[a.qb]*2+1]=0;for(b=a.qb+1;b<573;b++){var q=a.da[b];p=g[g[q*2+1]*2+1]+1;p>m&&(p=m,r++);g[q*2+1]=p;if(!(q>l)){a.La[p]++;var t=0;q>=k&&(t=f[q-k]);var u=g[q*2];a.Qa+=u*(p+t);e&&(a.xb+=u*(d[q*2+1]+t))}}if(r!==0){do{for(p=m-1;a.La[p]===0;)p--;a.La[p]--;a.La[p+1]+=2;a.La[m]--;r-=2}while(r>0);for(p=m;p!==0;p--)for(q=a.La[p];q!==0;)d=a.da[--b],d>l||(g[d*2+1]!==p&&(a.Qa+=(p-g[d*
2+1])*g[d*2],g[d*2+1]=p),q--)}vm(c,h,a.La)}
function Dm(a,b,c){var d,e=-1,f=b[1],g=0,h=7,l=4;f===0&&(h=138,l=3);b[(c+1)*2+1]=65535;for(d=0;d<=c;d++){var k=f;f=b[(d+1)*2+1];++g<h&&k===f||(g<l?a.ka[k*2]+=g:k!==0?(k!==e&&a.ka[k*2]++,a.ka[32]++):g<=10?a.ka[34]++:a.ka[36]++,g=0,e=k,f===0?(h=138,l=3):k===f?(h=6,l=3):(h=7,l=4))}}
function Em(a,b,c){var d,e=-1,f=b[1],g=0,h=7,l=4;f===0&&(h=138,l=3);for(d=0;d<=c;d++){var k=f;f=b[(d+1)*2+1];if(!(++g<h&&k===f)){if(g<l){do tm(a,k,a.ka);while(--g!==0)}else k!==0?(k!==e&&(tm(a,k,a.ka),g--),tm(a,16,a.ka),sm(a,g-3,2)):g<=10?(tm(a,17,a.ka),sm(a,g-3,3)):(tm(a,18,a.ka),sm(a,g-11,7));g=0;e=k;f===0?(h=138,l=3):k===f?(h=6,l=3):(h=7,l=4)}}}
function Fm(a){var b=4093624447,c;for(c=0;c<=31;c++,b>>>=1)if(b&1&&a.ta[c*2]!==0)return 0;if(a.ta[18]!==0||a.ta[20]!==0||a.ta[26]!==0)return 1;for(c=32;c<256;c++)if(a.ta[c*2]!==0)return 1;return 0}
var Gm=!1;function Hm(a,b,c){a.ba[a.Hb+a.za*2]=b>>>8&255;a.ba[a.Hb+a.za*2+1]=b&255;a.ba[a.Xc+a.za]=c&255;a.za++;b===0?a.ta[c*2]++:(a.matches++,b--,a.ta[(jm[c]+256+1)*2]++,a.ab[(b<256?im[b]:im[256+(b>>>7)])*2]++);return a.za===a.Pb-1}
;function Im(a,b){a.msg=am[b];return b}
function Jm(a){for(var b=a.length;--b>=0;)a[b]=0}
function Km(a){var b=a.state,c=b.pending;c>a.T&&(c=a.T);c!==0&&(Q.kb(a.output,b.ba,b.Qb,c,a.vb),a.vb+=c,b.Qb+=c,a.td+=c,a.T-=c,b.pending-=c,b.pending===0&&(b.Qb=0))}
function Lm(a,b){var c=a.va>=0?a.va:-1,d=a.C-a.va,e=0;if(a.level>0){a.R.Jc===2&&(a.R.Jc=Fm(a));Cm(a,a.oc);Cm(a,a.ec);Dm(a,a.ta,a.oc.ub);Dm(a,a.ab,a.ec.ub);Cm(a,a.Cd);for(e=18;e>=3&&a.ka[fm[e]*2+1]===0;e--);a.Qa+=3*(e+1)+14;var f=a.Qa+3+7>>>3;var g=a.xb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&c!==-1)sm(a,b?1:0,3),ym(a,c,d);else if(a.strategy===4||g===f)sm(a,2+(b?1:0),3),Bm(a,gm,hm);else{sm(a,4+(b?1:0),3);c=a.oc.ub+1;d=a.ec.ub+1;e+=1;sm(a,c-257,5);sm(a,d-1,5);sm(a,e-4,4);for(f=0;f<e;f++)sm(a,a.ka[fm[f]*
2+1],3);Em(a,a.ta,c-1);Em(a,a.ab,d-1);Bm(a,a.ta,a.ab)}wm(a);b&&xm(a);a.va=a.C;Km(a.R)}
function R(a,b){a.ba[a.pending++]=b}
function Mm(a,b){a.ba[a.pending++]=b>>>8&255;a.ba[a.pending++]=b&255}
function Nm(a,b){var c=a.ee,d=a.C,e=a.wa,f=a.ie,g=a.C>a.ma-262?a.C-(a.ma-262):0,h=a.window,l=a.Va,k=a.Ia,m=a.C+258,p=h[d+e-1],r=h[d+e];a.wa>=a.Td&&(c>>=2);f>a.G&&(f=a.G);do{var q=b;if(h[q+e]===r&&h[q+e-1]===p&&h[q]===h[d]&&h[++q]===h[d+1]){d+=2;for(q++;h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&d<m;);q=258-(m-d);d=m-258;if(q>e){a.tb=b;e=q;if(q>=f)break;p=h[d+e-1];r=h[d+e]}}}while((b=k[b&l])>g&&--c!==0);return e<=
a.G?e:a.G}
function Om(a){var b=a.ma,c;do{var d=a.Je-a.G-a.C;if(a.C>=b+(b-262)){Q.kb(a.window,a.window,b,b,0);a.tb-=b;a.C-=b;a.va-=b;var e=c=a.mc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ia[--e],a.Ia[e]=f>=b?f-b:0;while(--c);d+=b}if(a.R.oa===0)break;e=a.R;c=a.window;f=a.C+a.G;var g=e.oa;g>d&&(g=d);g===0?c=0:(e.oa-=g,Q.kb(c,e.input,e.fb,g,f),e.state.wrap===1?e.L=Vl(e.L,c,g,f):e.state.wrap===2&&(e.L=Wl(e.L,c,g,f)),e.fb+=g,e.gb+=g,c=g);a.G+=c;if(a.G+a.la>=3)for(d=a.C-a.la,a.S=a.window[d],
a.S=(a.S<<a.Oa^a.window[d+1])&a.Na;a.la&&!(a.S=(a.S<<a.Oa^a.window[d+3-1])&a.Na,a.Ia[d&a.Va]=a.head[a.S],a.head[a.S]=d,d++,a.la--,a.G+a.la<3););}while(a.G<262&&a.R.oa!==0)}
function Pm(a,b){for(var c;;){if(a.G<262){Om(a);if(a.G<262&&b===0)return 1;if(a.G===0)break}c=0;a.G>=3&&(a.S=(a.S<<a.Oa^a.window[a.C+3-1])&a.Na,c=a.Ia[a.C&a.Va]=a.head[a.S],a.head[a.S]=a.C);c!==0&&a.C-c<=a.ma-262&&(a.V=Nm(a,c));if(a.V>=3)if(c=Hm(a,a.C-a.tb,a.V-3),a.G-=a.V,a.V<=a.ad&&a.G>=3){a.V--;do a.C++,a.S=(a.S<<a.Oa^a.window[a.C+3-1])&a.Na,a.Ia[a.C&a.Va]=a.head[a.S],a.head[a.S]=a.C;while(--a.V!==0);a.C++}else a.C+=a.V,a.V=0,a.S=a.window[a.C],a.S=(a.S<<a.Oa^a.window[a.C+1])&a.Na;else c=Hm(a,0,
a.window[a.C]),a.G--,a.C++;if(c&&(Lm(a,!1),a.R.T===0))return 1}a.la=a.C<2?a.C:2;return b===4?(Lm(a,!0),a.R.T===0?3:4):a.za&&(Lm(a,!1),a.R.T===0)?1:2}
function Qm(a,b){for(var c,d;;){if(a.G<262){Om(a);if(a.G<262&&b===0)return 1;if(a.G===0)break}c=0;a.G>=3&&(a.S=(a.S<<a.Oa^a.window[a.C+3-1])&a.Na,c=a.Ia[a.C&a.Va]=a.head[a.S],a.head[a.S]=a.C);a.wa=a.V;a.me=a.tb;a.V=2;c!==0&&a.wa<a.ad&&a.C-c<=a.ma-262&&(a.V=Nm(a,c),a.V<=5&&(a.strategy===1||a.V===3&&a.C-a.tb>4096)&&(a.V=2));if(a.wa>=3&&a.V<=a.wa){d=a.C+a.G-3;c=Hm(a,a.C-1-a.me,a.wa-3);a.G-=a.wa-1;a.wa-=2;do++a.C<=d&&(a.S=(a.S<<a.Oa^a.window[a.C+3-1])&a.Na,a.Ia[a.C&a.Va]=a.head[a.S],a.head[a.S]=a.C);
while(--a.wa!==0);a.cb=0;a.V=2;a.C++;if(c&&(Lm(a,!1),a.R.T===0))return 1}else if(a.cb){if((c=Hm(a,0,a.window[a.C-1]))&&Lm(a,!1),a.C++,a.G--,a.R.T===0)return 1}else a.cb=1,a.C++,a.G--}a.cb&&(Hm(a,0,a.window[a.C-1]),a.cb=0);a.la=a.C<2?a.C:2;return b===4?(Lm(a,!0),a.R.T===0?3:4):a.za&&(Lm(a,!1),a.R.T===0)?1:2}
function Rm(a,b){for(var c,d,e,f=a.window;;){if(a.G<=258){Om(a);if(a.G<=258&&b===0)return 1;if(a.G===0)break}a.V=0;if(a.G>=3&&a.C>0&&(d=a.C-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.C+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.V=258-(e-d);a.V>a.G&&(a.V=a.G)}a.V>=3?(c=Hm(a,1,a.V-3),a.G-=a.V,a.C+=a.V,a.V=0):(c=Hm(a,0,a.window[a.C]),a.G--,a.C++);if(c&&(Lm(a,!1),a.R.T===0))return 1}a.la=0;return b===4?(Lm(a,!0),a.R.T===0?3:4):
a.za&&(Lm(a,!1),a.R.T===0)?1:2}
function Sm(a,b){for(var c;;){if(a.G===0&&(Om(a),a.G===0)){if(b===0)return 1;break}a.V=0;c=Hm(a,0,a.window[a.C]);a.G--;a.C++;if(c&&(Lm(a,!1),a.R.T===0))return 1}a.la=0;return b===4?(Lm(a,!0),a.R.T===0?3:4):a.za&&(Lm(a,!1),a.R.T===0)?1:2}
function Tm(a,b,c,d,e){this.wf=a;this.pg=b;this.sg=c;this.og=d;this.rf=e}
var Um;Um=[new Tm(0,0,0,0,function(a,b){var c=65535;for(c>a.Aa-5&&(c=a.Aa-5);;){if(a.G<=1){Om(a);if(a.G===0&&b===0)return 1;if(a.G===0)break}a.C+=a.G;a.G=0;var d=a.va+c;if(a.C===0||a.C>=d)if(a.G=a.C-d,a.C=d,Lm(a,!1),a.R.T===0)return 1;if(a.C-a.va>=a.ma-262&&(Lm(a,!1),a.R.T===0))return 1}a.la=0;if(b===4)return Lm(a,!0),a.R.T===0?3:4;a.C>a.va&&Lm(a,!1);return 1}),
new Tm(4,4,8,4,Pm),new Tm(4,5,16,8,Pm),new Tm(4,6,32,32,Pm),new Tm(4,4,16,16,Qm),new Tm(8,16,32,32,Qm),new Tm(8,16,128,128,Qm),new Tm(8,32,128,256,Qm),new Tm(32,128,258,1024,Qm),new Tm(32,258,258,4096,Qm)];
function Vm(){this.R=null;this.status=0;this.ba=null;this.wrap=this.pending=this.Qb=this.Aa=0;this.K=null;this.Ca=0;this.method=8;this.rb=-1;this.Va=this.vd=this.ma=0;this.window=null;this.Je=0;this.head=this.Ia=null;this.ie=this.Td=this.strategy=this.level=this.ad=this.ee=this.wa=this.G=this.tb=this.C=this.cb=this.me=this.V=this.va=this.Oa=this.Na=this.Sc=this.mc=this.S=0;this.ta=new Q.Ja(1146);this.ab=new Q.Ja(122);this.ka=new Q.Ja(78);Jm(this.ta);Jm(this.ab);Jm(this.ka);this.Cd=this.ec=this.oc=
null;this.La=new Q.Ja(16);this.da=new Q.Ja(573);Jm(this.da);this.qb=this.Pa=0;this.depth=new Q.Ja(573);Jm(this.depth);this.ha=this.pa=this.la=this.matches=this.xb=this.Qa=this.Hb=this.za=this.Pb=this.Xc=0}
function Wm(a,b){if(!a||!a.state||b>5||b<0)return a?Im(a,-2):-2;var c=a.state;if(!a.output||!a.input&&a.oa!==0||c.status===666&&b!==4)return Im(a,a.T===0?-5:-2);c.R=a;var d=c.rb;c.rb=b;if(c.status===42)if(c.wrap===2)a.L=0,R(c,31),R(c,139),R(c,8),c.K?(R(c,(c.K.text?1:0)+(c.K.Ra?2:0)+(c.K.extra?4:0)+(c.K.name?8:0)+(c.K.comment?16:0)),R(c,c.K.time&255),R(c,c.K.time>>8&255),R(c,c.K.time>>16&255),R(c,c.K.time>>24&255),R(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),R(c,c.K.di&255),c.K.extra&&c.K.extra.length&&
(R(c,c.K.extra.length&255),R(c,c.K.extra.length>>8&255)),c.K.Ra&&(a.L=Wl(a.L,c.ba,c.pending,0)),c.Ca=0,c.status=69):(R(c,0),R(c,0),R(c,0),R(c,0),R(c,0),R(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),R(c,3),c.status=113);else{var e=8+(c.vd-8<<4)<<8;e|=(c.strategy>=2||c.level<2?0:c.level<6?1:c.level===6?2:3)<<6;c.C!==0&&(e|=32);c.status=113;Mm(c,e+(31-e%31));c.C!==0&&(Mm(c,a.L>>>16),Mm(c,a.L&65535));a.L=1}if(c.status===69)if(c.K.extra){for(e=c.pending;c.Ca<(c.K.extra.length&65535)&&(c.pending!==c.Aa||
(c.K.Ra&&c.pending>e&&(a.L=Wl(a.L,c.ba,c.pending-e,e)),Km(a),e=c.pending,c.pending!==c.Aa));)R(c,c.K.extra[c.Ca]&255),c.Ca++;c.K.Ra&&c.pending>e&&(a.L=Wl(a.L,c.ba,c.pending-e,e));c.Ca===c.K.extra.length&&(c.Ca=0,c.status=73)}else c.status=73;if(c.status===73)if(c.K.name){e=c.pending;do{if(c.pending===c.Aa&&(c.K.Ra&&c.pending>e&&(a.L=Wl(a.L,c.ba,c.pending-e,e)),Km(a),e=c.pending,c.pending===c.Aa)){var f=1;break}f=c.Ca<c.K.name.length?c.K.name.charCodeAt(c.Ca++)&255:0;R(c,f)}while(f!==0);c.K.Ra&&c.pending>
e&&(a.L=Wl(a.L,c.ba,c.pending-e,e));f===0&&(c.Ca=0,c.status=91)}else c.status=91;if(c.status===91)if(c.K.comment){e=c.pending;do{if(c.pending===c.Aa&&(c.K.Ra&&c.pending>e&&(a.L=Wl(a.L,c.ba,c.pending-e,e)),Km(a),e=c.pending,c.pending===c.Aa)){f=1;break}f=c.Ca<c.K.comment.length?c.K.comment.charCodeAt(c.Ca++)&255:0;R(c,f)}while(f!==0);c.K.Ra&&c.pending>e&&(a.L=Wl(a.L,c.ba,c.pending-e,e));f===0&&(c.status=103)}else c.status=103;c.status===103&&(c.K.Ra?(c.pending+2>c.Aa&&Km(a),c.pending+2<=c.Aa&&(R(c,
a.L&255),R(c,a.L>>8&255),a.L=0,c.status=113)):c.status=113);if(c.pending!==0){if(Km(a),a.T===0)return c.rb=-1,0}else if(a.oa===0&&(b<<1)-(b>4?9:0)<=(d<<1)-(d>4?9:0)&&b!==4)return Im(a,-5);if(c.status===666&&a.oa!==0)return Im(a,-5);if(a.oa!==0||c.G!==0||b!==0&&c.status!==666){d=c.strategy===2?Sm(c,b):c.strategy===3?Rm(c,b):Um[c.level].rf(c,b);if(d===3||d===4)c.status=666;if(d===1||d===3)return a.T===0&&(c.rb=-1),0;if(d===2&&(b===1?(sm(c,2,3),tm(c,256,gm),c.ha===16?(rm(c,c.pa),c.pa=0,c.ha=0):c.ha>=
8&&(c.ba[c.pending++]=c.pa&255,c.pa>>=8,c.ha-=8)):b!==5&&(sm(c,0,3),ym(c,0,0),b===3&&(Jm(c.head),c.G===0&&(c.C=0,c.va=0,c.la=0))),Km(a),a.T===0))return c.rb=-1,0}if(b!==4)return 0;if(c.wrap<=0)return 1;c.wrap===2?(R(c,a.L&255),R(c,a.L>>8&255),R(c,a.L>>16&255),R(c,a.L>>24&255),R(c,a.gb&255),R(c,a.gb>>8&255),R(c,a.gb>>16&255),R(c,a.gb>>24&255)):(Mm(c,a.L>>>16),Mm(c,a.L&65535));Km(a);c.wrap>0&&(c.wrap=-c.wrap);return c.pending!==0?0:1}
;var Xm={};Xm=function(){this.input=null;this.gb=this.oa=this.fb=0;this.output=null;this.td=this.T=this.vb=0;this.msg="";this.state=null;this.Jc=2;this.L=0};var Ym=Object.prototype.toString;
function Zm(a){if(!(this instanceof Zm))return new Zm(a);a=this.options=Q.assign({level:-1,method:8,chunkSize:16384,Wa:15,rg:8,strategy:0,Ua:""},a||{});a.raw&&a.Wa>0?a.Wa=-a.Wa:a.xf&&a.Wa>0&&a.Wa<16&&(a.Wa+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.R=new Xm;this.R.T=0;var b=this.R;var c=a.level,d=a.method,e=a.Wa,f=a.rg,g=a.strategy;if(b){var h=1;c===-1&&(c=6);e<0?(h=0,e=-e):e>15&&(h=2,e-=16);if(f<1||f>9||d!==8||e<8||e>15||c<0||c>9||g<0||g>4)b=Im(b,-2);else{e===8&&(e=9);var l=new Vm;
b.state=l;l.R=b;l.wrap=h;l.K=null;l.vd=e;l.ma=1<<l.vd;l.Va=l.ma-1;l.Sc=f+7;l.mc=1<<l.Sc;l.Na=l.mc-1;l.Oa=~~((l.Sc+3-1)/3);l.window=new Q.hb(l.ma*2);l.head=new Q.Ja(l.mc);l.Ia=new Q.Ja(l.ma);l.Pb=1<<f+6;l.Aa=l.Pb*4;l.ba=new Q.hb(l.Aa);l.Hb=1*l.Pb;l.Xc=3*l.Pb;l.level=c;l.strategy=g;l.method=d;if(b&&b.state){b.gb=b.td=0;b.Jc=2;c=b.state;c.pending=0;c.Qb=0;c.wrap<0&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.L=c.wrap===2?0:1;c.rb=0;if(!Gm){d=Array(16);for(f=g=0;f<28;f++)for(km[f]=g,e=0;e<1<<cm[f];e++)jm[g++]=
f;jm[g-1]=f;for(f=g=0;f<16;f++)for(lm[f]=g,e=0;e<1<<dm[f];e++)im[g++]=f;for(g>>=7;f<30;f++)for(lm[f]=g<<7,e=0;e<1<<dm[f]-7;e++)im[256+g++]=f;for(e=0;e<=15;e++)d[e]=0;for(e=0;e<=143;)gm[e*2+1]=8,e++,d[8]++;for(;e<=255;)gm[e*2+1]=9,e++,d[9]++;for(;e<=279;)gm[e*2+1]=7,e++,d[7]++;for(;e<=287;)gm[e*2+1]=8,e++,d[8]++;vm(gm,287,d);for(e=0;e<30;e++)hm[e*2+1]=5,hm[e*2]=um(e,5);nm=new mm(gm,cm,257,286,15);om=new mm(hm,dm,0,30,15);pm=new mm([],em,0,19,7);Gm=!0}c.oc=new qm(c.ta,nm);c.ec=new qm(c.ab,om);c.Cd=
new qm(c.ka,pm);c.pa=0;c.ha=0;wm(c);c=0}else c=Im(b,-2);c===0&&(b=b.state,b.Je=2*b.ma,Jm(b.head),b.ad=Um[b.level].pg,b.Td=Um[b.level].wf,b.ie=Um[b.level].sg,b.ee=Um[b.level].og,b.C=0,b.va=0,b.G=0,b.la=0,b.V=b.wa=2,b.cb=0,b.S=0);b=c}}else b=-2;if(b!==0)throw Error(am[b]);a.header&&(b=this.R)&&b.state&&b.state.wrap===2&&(b.state.K=a.header);if(a.Ib){var k;typeof a.Ib==="string"?k=Ul(a.Ib):Ym.call(a.Ib)==="[object ArrayBuffer]"?k=new Uint8Array(a.Ib):k=a.Ib;a=this.R;f=k;g=f.length;if(a&&a.state)if(k=
a.state,b=k.wrap,b===2||b===1&&k.status!==42||k.G)b=-2;else{b===1&&(a.L=Vl(a.L,f,g,0));k.wrap=0;g>=k.ma&&(b===0&&(Jm(k.head),k.C=0,k.va=0,k.la=0),c=new Q.hb(k.ma),Q.kb(c,f,g-k.ma,k.ma,0),f=c,g=k.ma);c=a.oa;d=a.fb;e=a.input;a.oa=g;a.fb=0;a.input=f;for(Om(k);k.G>=3;){f=k.C;g=k.G-2;do k.S=(k.S<<k.Oa^k.window[f+3-1])&k.Na,k.Ia[f&k.Va]=k.head[k.S],k.head[k.S]=f,f++;while(--g);k.C=f;k.G=2;Om(k)}k.C+=k.G;k.va=k.C;k.la=k.G;k.G=0;k.V=k.wa=2;k.cb=0;a.fb=d;a.input=e;a.oa=c;k.wrap=b;b=0}else b=-2;if(b!==0)throw Error(am[b]);
this.Dh=!0}}
Zm.prototype.push=function(a,b){var c=this.R,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:b===!0?4:0;typeof a==="string"?c.input=Ul(a):Ym.call(a)==="[object ArrayBuffer]"?c.input=new Uint8Array(a):c.input=a;c.fb=0;c.oa=c.input.length;do{c.T===0&&(c.output=new Q.hb(d),c.vb=0,c.T=d);a=Wm(c,e);if(a!==1&&a!==0)return $m(this,a),this.ended=!0,!1;if(c.T===0||c.oa===0&&(e===4||e===2))if(this.options.Ua==="string"){var f=Q.rd(c.output,c.vb);b=f;f=f.length;if(f<65537&&(b.subarray&&Tl||!b.subarray))b=
String.fromCharCode.apply(null,Q.rd(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=Q.rd(c.output,c.vb),this.chunks.push(b)}while((c.oa>0||c.T===0)&&a!==1);if(e===4)return(c=this.R)&&c.state?(d=c.state.status,d!==42&&d!==69&&d!==73&&d!==91&&d!==103&&d!==113&&d!==666?a=Im(c,-2):(c.state=null,a=d===113?Im(c,-3):0)):a=-2,$m(this,a),this.ended=!0,a===0;e===2&&($m(this,0),c.T=0);return!0};
function $m(a,b){b===0&&(a.result=a.options.Ua==="string"?a.chunks.join(""):Q.Md(a.chunks));a.chunks=[];a.err=b;a.msg=a.R.msg}
;function an(a){this.name=a}
;var bn=new an("rawColdConfigGroup");var cn=new an("rawHotConfigGroup");function dn(a){this.U=Qe(a)}
y(dn,tf);dn.prototype.g=function(a){J(this,5,a)};function en(a){this.U=Qe(a)}
y(en,tf);function fn(a){this.U=Qe(a)}
y(fn,tf);function gn(a){this.U=Qe(a)}
y(gn,tf);gn.prototype.ob=function(){return of(this,61)};
gn.prototype.getPlayerType=function(){return of(this,36)};
gn.prototype.setHomeGroupInfo=function(a){return kf(this,fn,81,a)};function hn(a){this.U=Qe(a)}
y(hn,tf);var jn=[2,3,4,5,6];function kn(a){this.U=Qe(a)}
y(kn,tf);function ln(a){this.U=Qe(a)}
y(ln,tf);function mn(a){this.U=Qe(a)}
y(mn,tf);function nn(a){this.U=Qe(a)}
y(nn,tf);nn.prototype.setSafetyMode=function(a){return rf(this,5,a)};function on(a){this.U=Qe(a)}
y(on,tf);var pn={Ch:"WEB_DISPLAY_MODE_UNKNOWN",yh:"WEB_DISPLAY_MODE_BROWSER",Ah:"WEB_DISPLAY_MODE_MINIMAL_UI",Bh:"WEB_DISPLAY_MODE_STANDALONE",zh:"WEB_DISPLAY_MODE_FULLSCREEN"};function qn(a){this.U=Qe(a,497)}
y(qn,tf);function rn(a){this.U=Qe(a)}
y(rn,tf);function sn(a){this.U=Qe(a)}
y(sn,tf);sn.prototype.getPlaylistId=function(){return pf(this,2)};
var qf=[1,2];function tn(a){this.U=Qe(a)}
y(tn,tf);var un=C.window,vn,wn,xn=(un==null?void 0:(vn=un.yt)==null?void 0:vn.config_)||(un==null?void 0:(wn=un.ytcfg)==null?void 0:wn.data_)||{};G("yt.config_",xn);function yn(){var a=arguments;a.length>1?xn[a[0]]=a[1]:a.length===1&&Object.assign(xn,a[0])}
function S(a,b){return a in xn?xn[a]:b}
;var zn={};function An(){return zn.clicktracking||(zn.clicktracking="clicktracking".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function T(a){a=Bn(a);return typeof a==="string"&&a==="false"?!1:!!a}
function V(a,b){a=Bn(a);return a===void 0&&b!==void 0?b:Number(a||0)}
function Bn(a){return S("EXPERIMENT_FLAGS",{})[a]}
function Cn(){for(var a=[],b=S("EXPERIMENTS_FORCED_FLAGS",{}),c=w(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=S("EXPERIMENT_FLAGS",{});d=w(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&b[e]===void 0&&a.push({key:e,value:String(c[e])});return a}
;function Dn(a,b,c,d){Mf.set(""+a,b,{Zc:c,path:"/",domain:d===void 0?"youtube.com":d,secure:!1})}
;var En=[];function Fn(a){En.forEach(function(b){return b(a)})}
function Gn(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Hn(b)}}:a}
function Hn(a){var b=D("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=S("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),yn("ERRORS",b));Fn(a)}
function In(a,b,c,d,e){var f=D("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=S("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),yn("ERRORS",f))}
;var Jn=/^[\w.]*$/,Kn={q:!0,search_query:!0};function Ln(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(f.length===1&&f[0]||f.length===2)try{var g=Mn(f[0]||""),h=Mn(f[1]||"");if(g in c){var l=c[g];Array.isArray(l)?rb(l,h):c[g]=[l,h]}else c[g]=h}catch(r){var k=r,m=f[0],p=String(Ln);k.args=[{key:m,value:f[1],query:a,method:Nn===p?"unchanged":p}];Kn.hasOwnProperty(m)||In(k)}}return c}
var Nn=String(Ln);function On(a){var b=[];sb(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];ob(c,function(f){f==""?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function Pn(a){a.charAt(0)==="?"&&(a=a.substring(1));return Ln(a,"&")}
function Qn(a,b,c){var d=a.split("#",2);a=d[0];d=d.length>1?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Pn(e[1]||"");for(var f in b)!c&&e!==null&&f in e||(e[f]=b[f]);return Nb(a,e)+d}
function Rn(a){if(!b)var b=window.location.href;var c=a.match(Gb)[1]||null,d=Ib(a);c&&d?(a=a.match(Gb),b=b.match(Gb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Ib(b)===d&&(Number(b.match(Gb)[4]||null)||null)===(Number(a.match(Gb)[4]||null)||null):!0;return a}
function Mn(a){return a&&a.match(Jn)?a:Fb(a)}
;var Sn=Od||Pd;function Tn(a){var b=Xb();return b?b.toLowerCase().indexOf(a)>=0:!1}
;var Un=Date.now().toString();function Vn(a){var b=Wn;a=a===void 0?D("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Ef;e.flash="0";a:{try{var f=b.g.top.location.href}catch(fb){f=2;break a}f=f?f===b.l.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=g===void 0?vf:g;try{var h=g.history.length}catch(fb){h=0}e.u_his=h;var l;e.u_h=(l=vf.screen)==null?void 0:l.height;var k;e.u_w=(k=vf.screen)==null?void 0:k.width;var m;e.u_ah=(m=vf.screen)==null?void 0:m.availHeight;var p;e.u_aw=
(p=vf.screen)==null?void 0:p.availWidth;var r;e.u_cd=(r=vf.screen)==null?void 0:r.colorDepth}catch(fb){}h=b.g;try{var q=h.screenX;var t=h.screenY}catch(fb){}try{var u=h.outerWidth;var A=h.outerHeight}catch(fb){}try{var K=h.innerWidth;var O=h.innerHeight}catch(fb){}try{var X=h.screenLeft;var U=h.screenTop}catch(fb){}try{K=h.innerWidth,O=h.innerHeight}catch(fb){}try{var da=h.screen.availWidth;var Ua=h.screen.availTop}catch(fb){}q=[X,U,q,t,da,Ua,u,A,K,O];t=b.g.top;try{var gb=(t||window).document,sa=
gb.compatMode=="CSS1Compat"?gb.documentElement:gb.body;var Ea=(new hd(sa.clientWidth,sa.clientHeight)).round()}catch(fb){Ea=new hd(-12245933,-12245933)}gb=Ea;Ea={};var Ka=Ka===void 0?C:Ka;sa=new ll;"SVGElement"in Ka&&"createElementNS"in Ka.document&&sa.set(0);t=Bf();t["allow-top-navigation-by-user-activation"]&&sa.set(1);t["allow-popups-to-escape-sandbox"]&&sa.set(2);Ka.crypto&&Ka.crypto.subtle&&sa.set(3);"TextDecoder"in Ka&&"TextEncoder"in Ka&&sa.set(4);Ka=ml(sa);Ea.bc=Ka;Ea.bih=gb.height;Ea.biw=
gb.width;Ea.brdim=q.join();b=b.l;b=(Ea.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,Ea.wgl=!!vf.WebGLRenderingContext,Ea);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Wn=new function(){var a=window.document;this.g=window;this.l=a};
G("yt.ads_.signals_.getAdSignalsString",function(a){return On(Vn(a))});F();var Xn="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function Yn(){if(!Xn)return null;var a=Xn();return"open"in a?a:null}
;function Zn(a,b){typeof a==="function"&&(a=Gn(a));return window.setTimeout(a,b)}
;var $n="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");x($n);var ao={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},bo="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(x($n)),co=!1;
function eo(a,b,c,d,e,f,g,h){function l(){(k&&"readyState"in k?k.readyState:0)===4&&b&&Gn(b)(k)}
c=c===void 0?"GET":c;d=d===void 0?"":d;h=h===void 0?!1:h;var k=Yn();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",l,!1):k.onreadystatechange=l;T("debug_forward_web_query_parameters")&&(a=fo(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c=c==="POST"&&(window.FormData===void 0||!(d instanceof FormData));if(e=go(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"===m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{k.setAttributionReporting(a)}catch(p){In(p)}}k.send(d);return k}
function go(a,b){b=b===void 0?{}:b;var c=Rn(a),d=S("INNERTUBE_CLIENT_NAME"),e=T("web_ajax_ignore_global_headers_if_set"),f;for(f in ao){var g=S(ao[f]),h=f==="X-Goog-AuthUser"||f==="X-Goog-PageId";f!=="X-Goog-Visitor-Id"||g||(g=S("VISITOR_DATA"));var l;if(!(l=!g)){if(!(l=c||(Ib(a)?!1:!0))){l=a;var k;if(k=T("add_auth_headers_to_remarketing_google_dot_com_ping")&&f==="Authorization"&&(d==="TVHTML5"||d==="TVHTML5_UNPLUGGED"||d==="TVHTML5_SIMPLY"))k=Ib(l),k=k!==null?k.split(".").reverse():null,k=k===null?
!1:k[1]==="google"?!0:k[2]==="google"?k[0]==="au"&&k[1]==="com"?!0:k[0]==="uk"&&k[1]==="co"?!0:!1:!1;k&&(l=Hb(l.match(Gb)[5]||null)||"",l=l.split("/"),l="/"+(l.length>1?l[1]:""),k=l==="/pagead");l=k?!0:!1}l=!l}l||e&&b[f]!==void 0||d==="TVHTML5_UNPLUGGED"&&h||(b[f]=g)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!Ib(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!Ib(a)){try{var m=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(p){}m&&
(b["X-YouTube-Time-Zone"]=m)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&Ib(a)||(b["X-YouTube-Ad-Signals"]=On(Vn()));return b}
function ho(a,b){b.method="POST";b.postParams||(b.postParams={});return io(a,b)}
function io(a,b){var c=b.format||"JSON";a=jo(a,b);var d=ko(a,b),e=!1,f=lo(a,function(l){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(l&&"status"in l?l.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var k=!0;break a;default:k=!1}var m=null,p=400<=l.status&&l.status<500,r=500<=l.status&&l.status<600;if(k||p||r)m=mo(a,c,l,b.convertToSafeHtml);k&&(k=no(c,l,m));m=m||{};p=b.context||C;k?b.onSuccess&&b.onSuccess.call(p,l,m):b.onError&&b.onError.call(p,l,m);b.onFinish&&
b.onFinish.call(p,l,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&d>0){var g=b.onTimeout;var h=Zn(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function jo(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=S("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Qn(a,b||{},!0);return a}
function ko(a,b){var c=S("XSRF_FIELD_NAME"),d=S("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=S("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Ib(a)&&!b.withCredentials&&Ib(a)!==document.location.hostname||b.method!=="POST"||h&&h!=="application/x-www-form-urlencoded"||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(T("ajax_parse_query_data_only_when_filled")&&f&&Object.keys(f).length>0||f)&&typeof e==="string"&&(e=Pn(e),vb(e,f),e=b.postBodyFormat&&b.postBodyFormat===
"JSON"?JSON.stringify(e):Mb(e));if(!(a=e)&&(a=f)){a:{for(var l in f){f=!1;break a}f=!0}a=!f}!co&&a&&b.method!=="POST"&&(co=!0,Hn(Error("AJAX request with postData should use POST")));return e}
function mo(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,In(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&a.indexOf("json")>=0&&(f.substring(0,5)===")]}'\n"&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?oo(a):null)e={},ob(a.getElementsByTagName("*"),function(g){e[g.tagName]=po(g)})}d&&qo(e);
return e}
function qo(a){if(La(a))for(var b in a){var c;(c=b==="html_content")||(c=b.length-5,c=c>=0&&b.indexOf("_html",c)==c);if(c){c=b;var d=Ab(a[b]);a[c]=d}else qo(a[b])}}
function no(a,b,c){if(b&&b.status===204)return!0;switch(a){case "JSON":return!!c;case "XML":return Number(c&&c.return_code)===0;case "RAW":return!0;default:return!!c}}
function oo(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&a.length>0?a[0]:null:null}
function po(a){var b="";ob(a.childNodes,function(c){b+=c.nodeValue});
return b}
function fo(a){var b=window.location.search,c=Ib(a);T("debug_handle_relative_url_for_query_forward_killswitch")||!c&&Rn(a)&&(c=document.location.hostname);var d=Hb(a.match(Gb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Pn(b),f={};ob(bo,function(g){e[g]&&(f[g]=e[g])});
return Qn(a,f||{},!1)}
var lo=eo;function ro(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function so(){}
;function to(a){switch(a){case "DESKTOP":return 1;case "UNKNOWN_PLATFORM":return 0;case "TV":return 2;case "GAME_CONSOLE":return 3;case "MOBILE":return 4;case "TABLET":return 5}}
;G("ytglobal.prefsUserPrefsPrefs_",D("ytglobal.prefsUserPrefsPrefs_")||{});var uo={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},vo={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_WIRED:30,CONN_INVALID:31},wo={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},xo={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function yo(){var a=C.navigator;return a?a.connection:void 0}
;function zo(a){var b=Da.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(x(b))}
y(zo,Error);function Ao(){try{return Bo(),!0}catch(a){return!1}}
function Bo(){if(S("DATASYNC_ID")!==void 0)return S("DATASYNC_ID");throw new zo("Datasync ID not set","unknown");}
;function Co(){}
function Do(a,b){return Vf.Ya(a,0,b)}
Co.prototype.Ga=function(a,b){return this.Ya(a,1,b)};
Co.prototype.Eb=function(a){var b=D("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var Eo=V("web_emulated_idle_callback_delay",300),Fo=1E3/60-3,Go=[8,5,4,3,2,1,0];
function Ho(a){a=a===void 0?{}:a;Rb.call(this);this.l=[];this.i={};this.I=this.g=0;this.H=this.s=!1;this.B=[];this.D=this.J=!1;for(var b=w(Go),c=b.next();!c.done;c=b.next())this.l[c.value]=[];this.o=0;this.na=a.timeout||1;this.A=Fo;this.u=0;this.O=this.vg.bind(this);this.ea=this.Sg.bind(this);this.X=this.Re.bind(this);this.Y=this.Tf.bind(this);this.ca=this.Ag.bind(this);this.W=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!T("disable_scheduler_requestIdleCallback");(this.F=a.useRaf!==
!1&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.O)}
y(Ho,Rb);n=Ho.prototype;n.Eb=function(a){var b=F();Io(a);a=F()-b;this.s||(this.A-=a)};
n.Ya=function(a,b,c){++this.I;if(b===10)return this.Eb(a),this.I;var d=this.I;this.i[d]=a;this.s&&!c?this.B.push({id:d,priority:b}):(this.l[b].push(d),this.H||this.s||(this.g!==0&&Jo(this)!==this.u&&Ko(this),this.start()));return d};
n.xa=function(a){delete this.i[a]};
function Lo(a){a.B.length=0;for(var b=5;b>=0;b--)a.l[b].length=0;a.l[8].length=0;a.i={};Ko(a)}
function Jo(a){if(a.l[8].length){if(a.D)return 4;if(!document.hidden&&a.F)return 3}for(var b=5;b>=a.o;b--)if(a.l[b].length>0)return b>0?!document.hidden&&a.F?3:2:1;return 0}
function Mo(a){var b=D("yt.logging.errors.log");b&&b(a)}
function Io(a){try{a()}catch(b){Mo(b)}}
function No(a){for(var b=w(Go),c=b.next();!c.done;c=b.next())if(a.l[c.value].length)return!0;return!1}
n.Tf=function(a){var b=void 0;a&&(b=a.timeRemaining());this.J=!0;Oo(this,b);this.J=!1};
n.Sg=function(){Oo(this)};
n.Re=function(){Po(this)};
n.Ag=function(a){this.D=!0;var b=Jo(this);b===4&&b!==this.u&&(Ko(this),this.start());Oo(this,void 0,a);this.D=!1};
n.vg=function(){document.hidden||Po(this);this.g&&(Ko(this),this.start())};
function Po(a){Ko(a);a.s=!0;for(var b=F(),c=a.l[8];c.length;){var d=c.shift(),e=a.i[d];delete a.i[d];e&&Io(e)}Qo(a);a.s=!1;No(a)&&a.start();b=F()-b;a.A-=b}
function Qo(a){for(var b=0,c=a.B.length;b<c;b++){var d=a.B[b];a.l[d.priority].push(d.id)}a.B.length=0}
function Oo(a,b,c){a.D&&a.u===4&&a.g||Ko(a);a.s=!0;b=F()+(b||a.A);for(var d=a.l[5];d.length;){var e=d.shift(),f=a.i[e];delete a.i[e];if(f)try{f(c)}catch(k){Mo(k)}}for(d=a.l[4];d.length;)c=d.shift(),e=a.i[c],delete a.i[c],e&&Io(e);d=a.J?0:1;d=a.o>d?a.o:d;if(!(F()>=b)){do{a:{c=a;e=d;for(f=3;f>=e;f--)for(var g=c.l[f];g.length;){var h=g.shift(),l=c.i[h];delete c.i[h];if(l){c=l;break a}}c=null}c&&Io(c)}while(c&&F()<b)}a.s=!1;Qo(a);a.A=Fo;No(a)&&a.start()}
n.start=function(){this.H=!1;if(this.g===0)switch(this.u=Jo(this),this.u){case 1:var a=this.Y;this.g=this.W?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Eo);break;case 2:this.g=window.setTimeout(this.ea,this.na);break;case 3:this.g=window.requestAnimationFrame(this.ca);break;case 4:this.g=window.setTimeout(this.X,0)}};
function Ko(a){if(a.g){switch(a.u){case 1:var b=a.g;a.W?window.cancelIdleCallback(b):window.clearTimeout(b);break;case 2:case 4:window.clearTimeout(a.g);break;case 3:window.cancelAnimationFrame(a.g)}a.g=0}}
n.Ba=function(){Lo(this);Ko(this);this.F&&document.removeEventListener("visibilitychange",this.O);Rb.prototype.Ba.call(this)};var Ro=D("yt.scheduler.instance.timerIdMap_")||{},So=V("kevlar_tuner_scheduler_soft_state_timer_ms",800),To=0,Uo=0;function Vo(){var a=D("ytglobal.schedulerInstanceInstance_");if(!a||a.Za)a=new Ho(S("scheduler")||{}),G("ytglobal.schedulerInstanceInstance_",a);return a}
function Wo(){Xo();var a=D("ytglobal.schedulerInstanceInstance_");a&&(a&&typeof a.dispose=="function"&&a.dispose(),G("ytglobal.schedulerInstanceInstance_",null))}
function Xo(){Lo(Vo());for(var a in Ro)Ro.hasOwnProperty(a)&&delete Ro[Number(a)]}
function Yo(a,b,c){if(!c)return c=c===void 0,-Vo().Ya(a,b,c);var d=window.setTimeout(function(){var e=Vo().Ya(a,b);Ro[d]=e},c);
return d}
function Zo(a){Vo().Eb(a)}
function $o(a){var b=Vo();if(a<0)b.xa(-a);else{var c=Ro[a];c?(b.xa(c),delete Ro[a]):window.clearTimeout(a)}}
function ap(){bp()}
function bp(){window.clearTimeout(To);Vo().start()}
function cp(){var a=Vo();Ko(a);a.H=!0;window.clearTimeout(To);To=window.setTimeout(ap,So)}
function dp(){window.clearTimeout(Uo);Uo=window.setTimeout(function(){ep(0)},So)}
function ep(a){dp();var b=Vo();b.o=a;b.start()}
function fp(a){dp();var b=Vo();b.o>a&&(b.o=a,b.start())}
function gp(){window.clearTimeout(Uo);var a=Vo();a.o=0;a.start()}
;function hp(){Co.apply(this,arguments)}
y(hp,Co);function ip(){hp.g||(hp.g=new hp);return hp.g}
hp.prototype.Ya=function(a,b,c){c!==void 0&&Number.isNaN(Number(c))&&(c=void 0);var d=D("yt.scheduler.instance.addJob");return d?d(a,b,c):c===void 0?(a(),NaN):Zn(a,c||0)};
hp.prototype.xa=function(a){if(a===void 0||!Number.isNaN(Number(a))){var b=D("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
hp.prototype.start=function(){var a=D("yt.scheduler.instance.start");a&&a()};
var Vf=ip();
T("web_scheduler_auto_init")&&!D("yt.scheduler.initialized")&&(G("yt.scheduler.instance.dispose",Wo),G("yt.scheduler.instance.addJob",Yo),G("yt.scheduler.instance.addImmediateJob",Zo),G("yt.scheduler.instance.cancelJob",$o),G("yt.scheduler.instance.cancelAllJobs",Xo),G("yt.scheduler.instance.start",bp),G("yt.scheduler.instance.pause",cp),G("yt.scheduler.instance.setPriorityThreshold",ep),G("yt.scheduler.instance.enablePriorityThreshold",fp),G("yt.scheduler.instance.clearPriorityThreshold",gp),G("yt.scheduler.initialized",
!0));function jp(a){var b=new Ol;this.g=(a=(b.l=Nl(b.g))?a?new Pl(b,a):b:null)?new Il(a):null;this.l=document.domain||window.location.hostname}
jp.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.g)try{this.g.set(a,b,Date.now()+c*1E3);return}catch(f){}var e="";if(d)try{e=escape(wl(b))}catch(f){return}else e=escape(b);Dn(a,e,c,this.l)};
jp.prototype.get=function(a,b){var c=void 0,d=!this.g;if(!d)try{c=this.g.get(a)}catch(e){d=!0}if(d&&(c=Mf.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
jp.prototype.remove=function(a){this.g&&this.g.remove(a);var b=this.l;Mf.remove(""+a,"/",b===void 0?"youtube.com":b)};var kp=function(){var a;return function(){a||(a=new jp("ytidb"));return a}}();
function lp(){var a;return(a=kp())==null?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var mp=[],np=!1;function op(a){np||(mp.push({type:"ERROR",payload:a}),mp.length>10&&mp.shift())}
function pp(a,b){np||(mp.push({type:"EVENT",eventType:a,payload:b}),mp.length>10&&mp.shift())}
;function qp(a){if(a.indexOf(":")>=0)throw Error("Database name cannot contain ':'");}
function rp(a){return a.substr(0,a.indexOf(":"))||a}
;var sp={},tp=(sp.AUTH_INVALID="No user identifier specified.",sp.EXPLICIT_ABORT="Transaction was explicitly aborted.",sp.IDB_NOT_SUPPORTED="IndexedDB is not supported.",sp.MISSING_INDEX="Index not created.",sp.MISSING_OBJECT_STORES="Object stores not created.",sp.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",sp.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",sp.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
sp.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",sp.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",sp.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",sp.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",sp),up={},vp=(up.AUTH_INVALID="ERROR",up.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",up.EXPLICIT_ABORT="IGNORED",up.IDB_NOT_SUPPORTED="ERROR",up.MISSING_INDEX=
"WARNING",up.MISSING_OBJECT_STORES="ERROR",up.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",up.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",up.QUOTA_EXCEEDED="WARNING",up.QUOTA_MAYBE_EXCEEDED="WARNING",up.UNKNOWN_ABORT="WARNING",up.INCOMPATIBLE_DB_VERSION="WARNING",up),wp={},xp=(wp.AUTH_INVALID=!1,wp.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,wp.EXPLICIT_ABORT=!1,wp.IDB_NOT_SUPPORTED=!1,wp.MISSING_INDEX=!1,wp.MISSING_OBJECT_STORES=!1,wp.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,wp.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,wp.QUOTA_EXCEEDED=!1,wp.QUOTA_MAYBE_EXCEEDED=!0,wp.UNKNOWN_ABORT=!0,wp.INCOMPATIBLE_DB_VERSION=!1,wp);function W(a,b,c,d,e){b=b===void 0?{}:b;c=c===void 0?tp[a]:c;d=d===void 0?vp[a]:d;e=e===void 0?xp[a]:e;zo.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:self.document===void 0,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.g=e;Object.setPrototypeOf(this,W.prototype)}
y(W,zo);function yp(a,b){W.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},tp.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,yp.prototype)}
y(yp,W);function zp(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,zp.prototype)}
y(zp,Error);var Ap=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Bp(a,b,c,d){b=rp(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof W)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if(e.name==="QuotaExceededError")return new W("QUOTA_EXCEEDED",a);if(Qd&&e.name==="UnknownError")return new W("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof zp)return new W("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if(e.name==="InvalidStateError"&&Ap.some(function(f){return e.message.includes(f)}))return new W("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if(e.name==="AbortError")return new W("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",ci:e.name})];e.level="WARNING";return e}
function Cp(a,b,c){var d=lp();return new W("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:d==null?void 0:d.hasSucceededOnce}})}
;function Dp(a){if(!a)throw Error();throw a;}
function Ep(a){return a}
function Fp(a){this.g=a}
function Gp(a){function b(e){if(d.state.status==="PENDING"){d.state={status:"REJECTED",reason:e};e=w(d.l);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if(d.state.status==="PENDING"){d.state={status:"FULFILLED",value:e};e=w(d.g);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.g=[];this.l=[];a=a.g;try{a(c,b)}catch(e){b(e)}}
Gp.resolve=function(a){return new Gp(new Fp(function(b,c){a instanceof Gp?a.then(b,c):b(a)}))};
Gp.reject=function(a){return new Gp(new Fp(function(b,c){c(a)}))};
Gp.prototype.then=function(a,b){var c=this,d=a!=null?a:Ep,e=b!=null?b:Dp;return new Gp(new Fp(function(f,g){c.state.status==="PENDING"?(c.g.push(function(){Hp(c,c,d,f,g)}),c.l.push(function(){Ip(c,c,e,f,g)})):c.state.status==="FULFILLED"?Hp(c,c,d,f,g):c.state.status==="REJECTED"&&Ip(c,c,e,f,g)}))};
function Jp(a,b){a.then(void 0,b)}
function Hp(a,b,c,d,e){try{if(a.state.status!=="FULFILLED")throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Gp?Kp(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Ip(a,b,c,d,e){try{if(a.state.status!=="REJECTED")throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Gp?Kp(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Kp(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Gp?Kp(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Lp(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Mp(a){return new Promise(function(b,c){Lp(a,b,c)})}
function Np(a){return new Gp(new Fp(function(b,c){Lp(a,b,c)}))}
;function Op(a,b){return new Gp(new Fp(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Pp=window,Y=Pp.ytcsi&&Pp.ytcsi.now?Pp.ytcsi.now:Pp.performance&&Pp.performance.timing&&Pp.performance.now&&Pp.performance.timing.navigationStart?function(){return Pp.performance.timing.navigationStart+Pp.performance.now()}:function(){return(new Date).getTime()};function Qp(a,b){this.g=a;this.options=b;this.transactionCount=0;this.i=Math.round(Y());this.l=!1}
n=Qp.prototype;n.add=function(a,b,c){return Rp(this,[a],{mode:"readwrite",qa:!0},function(d){return d.objectStore(a).add(b,c)})};
n.clear=function(a){return Rp(this,[a],{mode:"readwrite",qa:!0},function(b){return b.objectStore(a).clear()})};
n.close=function(){this.g.close();var a;((a=this.options)==null?0:a.closed)&&this.options.closed()};
function Sp(a,b,c){a=a.g.createObjectStore(b,c);return new Tp(a)}
n.delete=function(a,b){return Rp(this,[a],{mode:"readwrite",qa:!0},function(c){return c.objectStore(a).delete(b)})};
n.get=function(a,b){return Rp(this,[a],{mode:"readonly",qa:!0},function(c){return c.objectStore(a).get(b)})};
function Up(a,b,c){return Rp(a,[b],{mode:"readwrite",qa:!0},function(d){d=d.objectStore(b);return Np(d.g.put(c,void 0))})}
n.objectStoreNames=function(){return Array.from(this.g.objectStoreNames)};
function Rp(a,b,c,d){var e,f,g,h,l,k,m,p,r,q,t,u;return B(function(A){switch(A.g){case 1:var K={mode:"readonly",qa:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};typeof c==="string"?K.mode=c:Object.assign(K,c);e=K;a.transactionCount++;f=e.qa?3:1;g=0;case 2:if(h){A.M(4);break}g++;l=Math.round(Y());ua(A,5);k=a.g.transaction(b,e.mode);K=new Vp(k);K=Wp(K,d);return z(A,K,7);case 7:return m=A.l,p=Math.round(Y()),Xp(a,l,p,g,void 0,b.join(),e),A.return(m);case 5:r=va(A);q=Math.round(Y());t=Bp(r,a.g.name,b.join(),
a.g.version);if((u=t instanceof W&&!t.g)||g>=f)Xp(a,l,q,g,t,b.join(),e),h=t;A.M(2);break;case 4:return A.return(Promise.reject(h))}})}
function Xp(a,b,c,d,e,f,g){b=c-b;e?(e instanceof W&&(e.type==="QUOTA_EXCEEDED"||e.type==="QUOTA_MAYBE_EXCEEDED")&&pp("QUOTA_EXCEEDED",{dbName:rp(a.g.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof W&&e.type==="UNKNOWN_ABORT"&&(c-=a.i,c<0&&c>=Math.pow(2,31)&&(c=0),pp("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.l=!0),Yp(a,!1,d,f,b,g.tag),op(e)):Yp(a,!0,d,f,b,g.tag)}
function Yp(a,b,c,d,e,f){pp("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.l,duration:e,isSuccessful:b,tryCount:c,tag:f===void 0?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
n.getName=function(){return this.g.name};
function Tp(a){this.g=a}
n=Tp.prototype;n.add=function(a,b){return Np(this.g.add(a,b))};
n.autoIncrement=function(){return this.g.autoIncrement};
n.clear=function(){return Np(this.g.clear()).then(function(){})};
function Zp(a,b,c){a.g.createIndex(b,c,{unique:!1})}
function $p(a,b){return aq(a,{query:b},function(c){return c.delete().then(function(){return bq(c)})}).then(function(){})}
n.delete=function(a){return a instanceof IDBKeyRange?$p(this,a):Np(this.g.delete(a))};
n.get=function(a){return Np(this.g.get(a))};
n.index=function(a){try{return new cq(this.g.index(a))}catch(b){if(b instanceof Error&&b.name==="NotFoundError")throw new zp(a,this.g.name);throw b;}};
n.getName=function(){return this.g.name};
n.keyPath=function(){return this.g.keyPath};
function aq(a,b,c){a=a.g.openCursor(b.query,b.direction);return dq(a).then(function(d){return Op(d,c)})}
function Vp(a){var b=this;this.g=a;this.i=new Map;this.l=!1;this.done=new Promise(function(c,d){b.g.addEventListener("complete",function(){c()});
b.g.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.g.error)});
b.g.addEventListener("abort",function(){var e=b.g.error;if(e)d(e);else if(!b.l){e=W;for(var f=b.g.objectStoreNames,g=[],h=0;h<f.length;h++){var l=f.item(h);if(l===null)throw Error("Invariant: item in DOMStringList is null");g.push(l)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.g.db.name,mode:b.g.mode});d(e)}})})}
function Wp(a,b){var c=new Promise(function(d,e){try{Jp(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return w(d).next().value})}
Vp.prototype.abort=function(){this.g.abort();this.l=!0;throw new W("EXPLICIT_ABORT");};
Vp.prototype.objectStore=function(a){a=this.g.objectStore(a);var b=this.i.get(a);b||(b=new Tp(a),this.i.set(a,b));return b};
function cq(a){this.g=a}
cq.prototype.delete=function(a){return eq(this,{query:a},function(b){return b.delete().then(function(){return bq(b)})})};
cq.prototype.get=function(a){return Np(this.g.get(a))};
cq.prototype.keyPath=function(){return this.g.keyPath};
cq.prototype.unique=function(){return this.g.unique};
function eq(a,b,c){a=a.g.openCursor(b.query===void 0?null:b.query,b.direction===void 0?"next":b.direction);return dq(a).then(function(d){return Op(d,c)})}
function fq(a,b){this.request=a;this.cursor=b}
function dq(a){return Np(a).then(function(b){return b?new fq(a,b):null})}
function bq(a){a.cursor.continue(void 0);return dq(a.request)}
fq.prototype.delete=function(){return Np(this.cursor.delete()).then(function(){})};
fq.prototype.update=function(a){return Np(this.cursor.update(a))};function gq(a,b,c){return new Promise(function(d,e){function f(){r||(r=new Qp(g.result,{closed:p}));return r}
var g=b!==void 0?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Ue,l=c.Ve,k=c.Qg,m=c.upgrade,p=c.closed,r;g.addEventListener("upgradeneeded",function(q){try{if(q.newVersion===null)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(g.transaction===null)throw Error("Invariant: transaction on IDbOpenDbRequest is null");q.dataLoss&&q.dataLoss!=="none"&&pp("IDB_DATA_CORRUPTED",{reason:q.dataLossMessage||"unknown reason",dbName:rp(a)});var t=f(),u=new Vp(g.transaction);m&&
m(t,function(A){return q.oldVersion<A&&q.newVersion>=A},u);
u.done.catch(function(A){e(A)})}catch(A){e(A)}});
g.addEventListener("success",function(){var q=g.result;l&&q.addEventListener("versionchange",function(){l(f())});
q.addEventListener("close",function(){pp("IDB_UNEXPECTEDLY_CLOSED",{dbName:rp(a),dbVersion:q.version});k&&k()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function hq(a,b,c){c=c===void 0?{}:c;return gq(a,b,c)}
function iq(a,b){b=b===void 0?{}:b;var c,d,e,f;return B(function(g){if(g.g==1)return ua(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Ue)&&c.addEventListener("blocked",function(){e()}),z(g,Mp(c),4);
if(g.g!=2)g.g=0,g.o=0;else throw f=va(g),Bp(f,a,"",-1);})}
;function jq(a,b){this.name=a;this.options=b;this.i=!0;this.o=this.m=0}
jq.prototype.l=function(a,b,c){c=c===void 0?{}:c;return hq(a,b,c)};
jq.prototype.delete=function(a){a=a===void 0?{}:a;return iq(this.name,a)};
function kq(a,b){return new W("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function lq(a,b){if(!b)throw Cp("openWithToken",rp(a.name));return mq(a)}
function mq(a){function b(){var f,g,h,l,k,m,p,r,q,t;return B(function(u){switch(u.g){case 1:return g=(f=Error().stack)!=null?f:"",ua(u,2),z(u,a.l(a.name,a.options.version,d),4);case 4:for(var A=h=u.l,K=a.options,O=[],X=w(Object.keys(K.wb)),U=X.next();!U.done;U=X.next()){U=U.value;var da=K.wb[U],Ua=da.Cg===void 0?Number.MAX_VALUE:da.Cg;!(A.g.version>=da.Fb)||A.g.version>=Ua||A.g.objectStoreNames.contains(U)||O.push(U)}l=O;if(l.length===0){u.M(5);break}k=Object.keys(a.options.wb);m=h.objectStoreNames();
if(a.o<V("ytidb_reopen_db_retries",0))return a.o++,h.close(),op(new W("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:k,foundObjectStores:m})),u.return(b());if(!(a.m<V("ytidb_remake_db_retries",1))){u.M(6);break}a.m++;return z(u,a.delete(),7);case 7:return op(new W("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:k,foundObjectStores:m})),u.return(b());case 6:throw new yp(m,k);case 5:return u.return(h);case 2:p=va(u);if(p instanceof DOMException?
p.name!=="VersionError":"DOMError"in self&&p instanceof DOMError?p.name!=="VersionError":!(p instanceof Object&&"message"in p)||p.message!=="An attempt was made to open a database using a lower version than the existing version."){u.M(8);break}return z(u,a.l(a.name,void 0,Object.assign({},d,{upgrade:void 0})),9);case 9:r=u.l;q=r.g.version;if(a.options.version!==void 0&&q>a.options.version+1)throw r.close(),a.i=!1,kq(a,q);return u.return(r);case 8:throw c(),p instanceof Error&&!T("ytidb_async_stack_killswitch")&&
(p.stack=p.stack+"\n"+g.substring(g.indexOf("\n")+1)),Bp(p,a.name,"",(t=a.options.version)!=null?t:-1);}})}
function c(){a.g===e&&(a.g=void 0)}
if(!a.i)throw kq(a);if(a.g)return a.g;var d={Ve:function(f){f.close()},
closed:c,Qg:c,upgrade:a.options.upgrade};var e=b();a.g=e;return a.g}
;var nq=new jq("YtIdbMeta",{wb:{databases:{Fb:1}},upgrade:function(a,b){b(1)&&Sp(a,"databases",{keyPath:"actualName"})}});
function oq(a,b){var c;return B(function(d){if(d.g==1)return z(d,lq(nq,b),2);c=d.l;return d.return(Rp(c,["databases"],{qa:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Np(f.g.put(a,void 0)).then(function(){})})}))})}
function pq(a,b){var c;return B(function(d){if(d.g==1)return a?z(d,lq(nq,b),2):d.return();c=d.l;return d.return(c.delete("databases",a))})}
function qq(a,b){var c,d;return B(function(e){return e.g==1?(c=[],z(e,lq(nq,b),2)):e.g!=3?(d=e.l,z(e,Rp(d,["databases"],{qa:!0,mode:"readonly"},function(f){c.length=0;return aq(f.objectStore("databases"),{},function(g){a(g.cursor.value)&&c.push(g.cursor.value);return bq(g)})}),3)):e.return(c)})}
function rq(a){return qq(function(b){return b.publicName==="LogsDatabaseV2"&&b.userIdentifier!==void 0},a)}
;var sq,tq=new function(){}(new function(){});
function uq(){var a,b,c,d;return B(function(e){switch(e.g){case 1:a=lp();if((b=a)==null?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Sn)f=/WebKit\/([0-9]+)/.exec(Xb()),f=!!(f&&parseInt(f[1],10)>=600);f&&(f=/WebKit\/([0-9]+)/.exec(Xb()),f=!(f&&parseInt(f[1],10)>=602));if(f||lc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
ua(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return z(e,oq(d,tq),4);case 4:return z(e,pq("yt-idb-test-do-not-use",tq),5);case 5:return e.return(!0);case 2:return va(e),e.return(!1)}})}
function vq(){if(sq!==void 0)return sq;np=!0;return sq=uq().then(function(a){np=!1;var b;if((b=kp())!=null&&b.g){var c;b={hasSucceededOnce:((c=lp())==null?void 0:c.hasSucceededOnce)||a};var d;(d=kp())==null||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function wq(){return D("ytglobal.idbToken_")||void 0}
function xq(){var a=wq();return a?Promise.resolve(a):vq().then(function(b){(b=b?tq:void 0)&&G("ytglobal.idbToken_",b);return b})}
;new Cl;function yq(a){if(!Ao())throw a=new W("AUTH_INVALID",{dbName:a}),op(a),a;var b=Bo();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function zq(a,b,c,d){var e,f,g,h,l,k;return B(function(m){switch(m.g){case 1:return f=(e=Error().stack)!=null?e:"",z(m,xq(),2);case 2:g=m.l;if(!g)throw h=Cp("openDbImpl",a,b),T("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),op(h),h;qp(a);l=c?{actualName:a,publicName:a,userIdentifier:void 0}:yq(a);ua(m,3);return z(m,oq(l,g),5);case 5:return z(m,hq(l.actualName,b,d),6);case 6:return m.return(m.l);case 3:return k=va(m),ua(m,7),z(m,pq(l.actualName,g),9);case 9:m.g=
8;m.o=0;break;case 7:va(m);case 8:throw k;}})}
function Aq(a,b,c){c=c===void 0?{}:c;return zq(a,b,!1,c)}
function Bq(a,b,c){c=c===void 0?{}:c;return zq(a,b,!0,c)}
function Cq(a,b){b=b===void 0?{}:b;var c,d;return B(function(e){if(e.g==1)return z(e,xq(),2);if(e.g!=3){c=e.l;if(!c)return e.return();qp(a);d=yq(a);return z(e,iq(d.actualName,b),3)}return z(e,pq(d.actualName,c),0)})}
function Dq(a,b,c){a=a.map(function(d){return B(function(e){return e.g==1?z(e,iq(d.actualName,b),2):z(e,pq(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Eq(){var a=a===void 0?{}:a;var b,c;return B(function(d){if(d.g==1)return z(d,xq(),2);if(d.g!=3){b=d.l;if(!b)return d.return();qp("LogsDatabaseV2");return z(d,rq(b),3)}c=d.l;return z(d,Dq(c,a,b),0)})}
function Fq(a,b){b=b===void 0?{}:b;var c;return B(function(d){if(d.g==1)return z(d,xq(),2);if(d.g!=3){c=d.l;if(!c)return d.return();qp(a);return z(d,iq(a,b),3)}return z(d,pq(a,c),0)})}
;function Gq(a,b){jq.call(this,a,b);this.options=b;qp(a)}
y(Gq,jq);function Hq(a,b){var c;return function(){c||(c=new Gq(a,b));return c}}
Gq.prototype.l=function(a,b,c){c=c===void 0?{}:c;return(this.options.shared?Bq:Aq)(a,b,Object.assign({},c))};
Gq.prototype.delete=function(a){a=a===void 0?{}:a;return(this.options.shared?Fq:Cq)(this.name,a)};
function Iq(a,b){return Hq(a,b)}
;var Jq={},Kq=Iq("ytGcfConfig",{wb:(Jq.coldConfigStore={Fb:1},Jq.hotConfigStore={Fb:1},Jq),shared:!1,upgrade:function(a,b){b(1)&&(Zp(Sp(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),Zp(Sp(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Lq(a){return lq(Kq(),a)}
function Mq(a,b,c){var d,e,f;return B(function(g){switch(g.g){case 1:return d={config:a,hashData:b,timestamp:Y()},z(g,Lq(c),2);case 2:return e=g.l,z(g,e.clear("hotConfigStore"),3);case 3:return z(g,Up(e,"hotConfigStore",d),4);case 4:return f=g.l,g.return(f)}})}
function Nq(a,b,c,d){var e,f,g;return B(function(h){switch(h.g){case 1:return e={config:a,hashData:b,configData:c,timestamp:Y()},z(h,Lq(d),2);case 2:return f=h.l,z(h,f.clear("coldConfigStore"),3);case 3:return z(h,Up(f,"coldConfigStore",e),4);case 4:return g=h.l,h.return(g)}})}
function Oq(a){var b,c;return B(function(d){return d.g==1?z(d,Lq(a),2):d.g!=3?(b=d.l,c=void 0,z(d,Rp(b,["coldConfigStore"],{mode:"readwrite",qa:!0},function(e){return eq(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.cursor.value})}),3)):d.return(c)})}
function Pq(a){var b,c;return B(function(d){return d.g==1?z(d,Lq(a),2):d.g!=3?(b=d.l,c=void 0,z(d,Rp(b,["hotConfigStore"],{mode:"readwrite",qa:!0},function(e){return eq(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.cursor.value})}),3)):d.return(c)})}
;function Qq(){Rb.call(this);this.l=[];this.g=[];var a=D("yt.gcf.config.hotUpdateCallbacks");a?(this.l=[].concat(x(a)),this.g=a):(this.g=[],G("yt.gcf.config.hotUpdateCallbacks",this.g))}
y(Qq,Rb);Qq.prototype.Ba=function(){for(var a=w(this.l),b=a.next();!b.done;b=a.next()){var c=this.g;b=c.indexOf(b.value);b>=0&&c.splice(b,1)}this.l.length=0;Rb.prototype.Ba.call(this)};function Rq(){this.l=0;this.i=new Qq}
function Sq(a,b,c){var d,e,f;return B(function(g){switch(g.g){case 1:if(!T("start_client_gcf")){g.M(0);break}c&&(a.m=c,G("yt.gcf.config.hotConfigGroup",a.m||null));a.g(b);d=wq();if(!d){g.M(3);break}if(c){g.M(4);break}return z(g,Pq(d),5);case 5:e=g.l,c=(f=e)==null?void 0:f.config;case 4:return z(g,Mq(c,b,d),3);case 3:if(c)for(var h=c,l=w(a.i.g),k=l.next();!k.done;k=l.next())k=k.value,k(h);g.g=0}})}
function Tq(a,b,c){var d,e,f,g;return B(function(h){if(h.g==1){if(!T("start_client_gcf"))return h.M(0);a.coldHashData=b;G("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=wq())?c?h.M(4):z(h,Oq(d),5):h.M(0)}h.g!=4&&(e=h.l,c=(f=e)==null?void 0:f.config);if(!c)return h.M(0);g=c.configData;return z(h,Nq(c,b,g,d),0)})}
Rq.prototype.g=function(a){this.hotHashData=a;G("yt.gcf.config.hotHashData",this.hotHashData||null)};function Uq(){return"INNERTUBE_API_KEY"in xn&&"INNERTUBE_API_VERSION"in xn}
function Vq(){return{Wf:S("INNERTUBE_API_KEY"),Xf:S("INNERTUBE_API_VERSION"),Tc:S("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Zd:S("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Yf:S("INNERTUBE_CONTEXT_CLIENT_NAME",1),ae:S("INNERTUBE_CONTEXT_CLIENT_VERSION"),ce:S("INNERTUBE_CONTEXT_HL"),be:S("INNERTUBE_CONTEXT_GL"),Zf:S("INNERTUBE_HOST_OVERRIDE")||"",bg:!!S("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),ag:!!S("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",!1),appInstallData:S("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Wq(a){var b={client:{hl:a.ce,gl:a.be,clientName:a.Zd,clientVersion:a.ae,configInfo:a.Tc}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&c!=1&&(b.client.screenDensityFloat=String(c));c=S("EXPERIMENTS_TOKEN","");c!==""&&(b.client.experimentsToken=c);c=Cn();c.length>0&&(b.request={internalExperimentFlags:c});Xq(a,void 0,b);Yq(void 0,b);Zq(void 0,b);$q(a,void 0,b);ar(void 0,b);T("start_client_gcf")&&br(void 0,b);S("DELEGATED_SESSION_ID")&&!T("pageid_as_header_web")&&
(b.user={onBehalfOfUser:S("DELEGATED_SESSION_ID")});!T("fill_delegate_context_in_gel_killswitch")&&(a=S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;c=a.assign;for(var d=b.client,e={},f=w(Object.entries(Pn(S("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=w(g.value);g=h.next().value;h=h.next().value;g==="cbrand"?e.deviceMake=h:g==="cmodel"?e.deviceModel=h:g==="cbr"?e.browserName=h:g==="cbrver"?e.browserVersion=
h:g==="cos"?e.osName=h:g==="cosver"?e.osVersion=h:g==="cplatform"&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function Xq(a,b,c){a=a.Zd;if(a==="WEB"||a==="MWEB"||a===1||a===2)if(b){c=jf(b,en,96)||new en;var d=ro();d=Object.keys(pn).indexOf(d);d=d===-1?null:d;d!==null&&rf(c,3,d);kf(b,en,96,c)}else c&&(c.client.mainAppWebInfo=(d=c.client.mainAppWebInfo)!=null?d:{},c.client.mainAppWebInfo.webDisplayMode=ro())}
function Yq(a,b){var c=D("yt.embedded_player.embed_url");c&&(a?(b=jf(a,ln,7)||new ln,J(b,4,c),kf(a,ln,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function Zq(a,b){var c;if(T("web_log_memory_total_kbytes")&&((c=C.navigator)==null?0:c.deviceMemory)){var d;c=(d=C.navigator)==null?void 0:d.deviceMemory;a?df(a,95,Ee(c*1E6)):b&&(b.client.memoryTotalKbytes=""+c*1E6)}}
function $q(a,b,c){if(a.appInstallData)if(b){var d;c=(d=jf(b,dn,62))!=null?d:new dn;J(c,6,a.appInstallData);kf(b,dn,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function ar(a,b){a:{var c=yo();if(c){var d=uo[c.type||"unknown"]||"CONN_UNKNOWN";c=uo[c.effectiveType||"unknown"]||"CONN_UNKNOWN";d==="CONN_CELLULAR_UNKNOWN"&&c!=="CONN_UNKNOWN"&&(d=c);if(d!=="CONN_UNKNOWN")break a;if(c!=="CONN_UNKNOWN"){d=c;break a}}d=void 0}d&&(a?rf(a,61,vo[d]):b&&(b.client.connectionType=d));T("web_log_effective_connection_type")&&(d=yo(),d=d!=null&&d.effectiveType?xo.hasOwnProperty(d.effectiveType)?xo[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?rf(a,94,wo[d]):
b&&(b.client.effectiveConnectionType=d)))}
function cr(a,b,c){c=c===void 0?{}:c;var d={};S("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":S("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||S("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.Fh||S("AUTHORIZATION");if(!b)if(a)b="Bearer "+D("gapi.auth.getToken")().Eh;else{so.g||(so.g=new so);a={};c=[];var e=T("enable_first_party_auth_v2")||void 0;"USER_SESSION_ID"in xn&&e&&c.push({key:"u",value:S("USER_SESSION_ID")});if(c=Qf(c))a.Authorization=c,c=void 0,
c===void 0&&(c=Number(S("SESSION_INDEX",0)),c=isNaN(c)?0:c),T("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in xn||(a["X-Origin"]=window.location.origin),"DELEGATED_SESSION_ID"in xn&&(a["X-Goog-PageId"]=S("DELEGATED_SESSION_ID"));T("pageid_as_header_web")||delete a["X-Goog-PageId"];d=Object.assign({},d,a)}b&&(d.Authorization=b);return d}
function br(a,b){if(!Rq.g){var c=new Rq;Rq.g=c}c=Rq.g;var d=Y()-c.l;if(c.l!==0&&d<V("send_config_hash_timer"))c=void 0;else{d=D("yt.gcf.config.coldConfigData");var e=D("yt.gcf.config.hotHashData"),f=D("yt.gcf.config.coldHashData");d&&e&&f&&(c.l=Y());c={coldConfigData:d,hotHashData:e,coldHashData:f}}if(e=c)if(d=e.coldConfigData,c=e.coldHashData,e=e.hotHashData,a){var g;b=(g=jf(a,dn,62))!=null?g:new dn;g=J(b,1,d);J(g,3,c).g(e);kf(a,dn,62,b)}else b&&(b.client.configInfo=b.client.configInfo||{},d&&(b.client.configInfo.coldConfigData=
d),c&&(b.client.configInfo.coldHashData=c),e&&(b.client.configInfo.hotHashData=e))}
;var dr=typeof TextEncoder!=="undefined"?new TextEncoder:null,er=dr?function(a){return dr.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:((e&64512)==55296&&d+1<a.length&&(a.charCodeAt(d+1)&64512)==56320?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};var fr=D("ytPubsub2Pubsub2Instance")||new P;P.prototype.subscribe=P.prototype.subscribe;P.prototype.unsubscribeByKey=P.prototype.Bc;P.prototype.publish=P.prototype.oe;P.prototype.clear=P.prototype.clear;G("ytPubsub2Pubsub2Instance",fr);G("ytPubsub2Pubsub2SubscribedKeys",D("ytPubsub2Pubsub2SubscribedKeys")||{});G("ytPubsub2Pubsub2TopicToKeys",D("ytPubsub2Pubsub2TopicToKeys")||{});G("ytPubsub2Pubsub2IsAsync",D("ytPubsub2Pubsub2IsAsync")||{});G("ytPubsub2Pubsub2SkipSubKey",null);function gr(a,b,c){c=c===void 0?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&(a={vi:a,ui:b},(b=D("ytPubsub2Pubsub2Instance"))&&b.publish.call(b,"meta_logging_csi_event".toString(),"meta_logging_csi_event",a))}
;var hr=void 0,ir=void 0;function jr(){if(!ir){var a=S("WORKER_SERIALIZATION_URL");ir=a?(a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue)?$a(a):null:null}return ir||void 0}
function kr(){var a=jr();hr||a===void 0||(hr=new Worker(Ya(a),void 0));return hr}
;var lr=V("max_body_size_to_compress",5E5),mr=V("min_body_size_to_compress",500),nr=!0,or=0,pr=0,qr=V("compression_performance_threshold_lr",250),rr=V("slow_compressions_before_abandon_count",4),sr=!1,tr=new Map,ur=1,vr=!0;function wr(){if(typeof Worker==="function"&&jr()&&!sr){var a=function(c){c=c.data;if(c.op==="gzippedGelBatch"){var d=tr.get(c.key);d&&(xr(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),tr.delete(c.key))}},b=kr();
b&&(b.addEventListener("message",a),b.onerror=function(){tr.clear()},sr=!0)}}
function yr(a,b,c,d,e){e=e===void 0?!1:e;var f={startTime:Y(),ticks:{},infos:{}};if(nr)try{try{var g=(new Blob(b.split(""))).size}catch(m){In(m),g=null}if(g!=null&&(g>lr||g<mr))d(a,c);else{if(T("gzip_gel_with_worker")&&(T("initial_gzip_use_main_thread")&&!vr||!T("initial_gzip_use_main_thread"))){sr||wr();var h=kr();if(h&&!e){tr.set(ur,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:ur});ur++;return}}var l=er(b);b=(b=void 0,{});b.xf=!0;var k=new Zm(b);
k.push(l,!0);if(k.err)throw k.msg||am[k.err];xr(k.result,f,a,c,d)}}catch(m){In(m),d(a,c)}else d(a,c)}
function xr(a,b,c,d,e){vr=!1;var f=Y();b.ticks.gelc=f;pr++;T("disable_compression_due_to_performance_degredation")&&f-b.startTime>=qr&&(or++,T("abandon_compression_after_N_slow_zips")?pr===V("compression_disable_point")&&or>rr&&(nr=!1):nr=!1);T("gel_compression_csi_killswitch")||!T("log_gel_compression_latency")&&!T("log_gel_compression_latency_lr")||gr("gel_compression",b,{sampleRate:.1});d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
;function zr(a){a=Object.assign({},a);delete a.Authorization;var b=Qf();if(b){var c=new ol;c.update(S("INNERTUBE_API_KEY"));c.update(b);a.hash=Td(c.digest(),3)}return a}
;var Ar;function Br(){Ar||(Ar=new jp("yt.innertube"));return Ar}
function Cr(a,b,c,d){if(d)return null;d=Br().get("nextId",!0)||1;var e=Br().get("requests",!0)||{};e[d]={method:a,request:b,authState:zr(c),requestTime:Math.round(Y())};Br().set("nextId",d+1,86400,!0);Br().set("requests",e,86400,!0);return d}
function Dr(a){var b=Br().get("requests",!0)||{};delete b[a];Br().set("requests",b,86400,!0)}
function Er(a){var b=Br().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(Math.round(Y())-d.requestTime<6E4)){var e=d.authState;var f=zr(cr(!1));a:{var g=void 0,h=void 0;for(h in e)if(!(h in f)||e[h]!==f[h]){e=!1;break a}for(g in f)if(!(g in e)){e=!1;break a}e=!0}e&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Y())),Fr(a,d.method,e,{}));delete b[c]}}Br().set("requests",b,86400,!0)}}
;function Gr(a){this.Xb=this.g=!1;this.potentialEsfErrorCounter=this.l=0;this.handleError=function(){};
this.pb=function(){};
this.now=Date.now;this.Jb=!1;var b;this.Fe=(b=a.Fe)!=null?b:100;var c;this.we=(c=a.we)!=null?c:1;var d;this.se=(d=a.se)!=null?d:2592E6;var e;this.pe=(e=a.pe)!=null?e:12E4;var f;this.ue=(f=a.ue)!=null?f:5E3;var g;this.Z=(g=a.Z)!=null?g:void 0;this.hc=!!a.hc;var h;this.cc=(h=a.cc)!=null?h:.1;var l;this.sc=(l=a.sc)!=null?l:10;a.handleError&&(this.handleError=a.handleError);a.pb&&(this.pb=a.pb);a.Jb&&(this.Jb=a.Jb);a.Xb&&(this.Xb=a.Xb);this.aa=a.aa;this.Da=a.Da;this.fa=a.fa;this.ia=a.ia;this.sendFn=a.sendFn;
this.gd=a.gd;this.dd=a.dd;Hr(this)&&(!this.aa||this.aa("networkless_logging"))&&Ir(this)}
function Ir(a){Hr(a)&&!a.Jb&&(a.g=!0,a.hc&&Math.random()<=a.cc&&a.fa.Xe(a.Z),Jr(a),a.ia.ya()&&a.Tb(),a.ia.ra(a.gd,a.Tb.bind(a)),a.ia.ra(a.dd,a.Dd.bind(a)))}
n=Gr.prototype;n.writeThenSend=function(a,b){var c=this;b=b===void 0?{}:b;if(Hr(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.fa.set(d,this.Z).then(function(e){d.id=e;c.ia.ya()&&Kr(c,d)}).catch(function(e){Kr(c,d);
Lr(c,e)})}else this.sendFn(a,b)};
n.sendThenWrite=function(a,b,c){var d=this;b=b===void 0?{}:b;if(Hr(this)&&this.g){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.aa&&this.aa("nwl_skip_retry")&&(e.skipRetry=c);if(this.ia.ya()||this.aa&&this.aa("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return B(function(l){if(l.g==1)return z(l,d.fa.set(e,d.Z).catch(function(k){Lr(d,k)}),2);
f(g,h);l.g=0})}}this.sendFn(a,b,e.skipRetry)}else this.fa.set(e,this.Z).catch(function(g){d.sendFn(a,b,e.skipRetry);
Lr(d,g)})}else this.sendFn(a,b,this.aa&&this.aa("nwl_skip_retry")&&c)};
n.sendAndWrite=function(a,b){var c=this;b=b===void 0?{}:b;if(Hr(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){d.id!==void 0?c.fa.mb(d.id,c.Z):e=!0;c.ia.eb&&c.aa&&c.aa("vss_network_hint")&&c.ia.eb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.fa.set(d,this.Z).then(function(g){d.id=g;e&&c.fa.mb(d.id,c.Z)}).catch(function(g){Lr(c,g)})}else this.sendFn(a,b,void 0,!0)};
n.Tb=function(){var a=this;if(!Hr(this))throw Error("IndexedDB is not supported: throttleSend");this.l||(this.l=this.Da.Ga(function(){var b;return B(function(c){if(c.g==1)return z(c,a.fa.Qd("NEW",a.Z),2);if(c.g!=3)return b=c.l,b?z(c,Kr(a,b),3):(a.Dd(),c.return());a.l&&(a.l=0,a.Tb());c.g=0})},this.Fe))};
n.Dd=function(){this.Da.xa(this.l);this.l=0};
function Kr(a,b){var c;return B(function(d){switch(d.g){case 1:if(!Hr(a))throw Error("IndexedDB is not supported: immediateSend");if(b.id===void 0){d.M(2);break}return z(d,a.fa.ng(b.id,a.Z),3);case 3:(c=d.l)||a.pb(Error("The request cannot be found in the database."));case 2:if(Mr(a,b,a.se)){d.M(4);break}a.pb(Error("Networkless Logging: Stored logs request expired age limit"));if(b.id===void 0){d.M(5);break}return z(d,a.fa.mb(b.id,a.Z),5);case 5:return d.return();case 4:b.skipRetry||(b=Nr(a,b));if(!b){d.M(0);
break}if(!b.skipRetry||b.id===void 0){d.M(8);break}return z(d,a.fa.mb(b.id,a.Z),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.g=0}})}
function Nr(a,b){if(!Hr(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,l,k;return B(function(m){switch(m.g){case 1:g=Or(f);(h=Pr(f))&&a.aa&&a.aa("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.aa&&a.aa("nwl_consider_error_code")&&g||a.aa&&!a.aa("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.sc)){m.M(2);break}if(!a.ia.xc){m.M(3);break}return z(m,a.ia.xc(),3);case 3:if(a.ia.ya()){m.M(2);break}c(e,f);if(!a.aa||!a.aa("nwl_consider_error_code")||((l=b)==null?void 0:l.id)===
void 0){m.M(6);break}return z(m,a.fa.nd(b.id,a.Z,!1),6);case 6:return m.return();case 2:if(a.aa&&a.aa("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.sc)return m.return();a.potentialEsfErrorCounter++;if(((k=b)==null?void 0:k.id)===void 0){m.M(8);break}return b.sendCount<a.we?z(m,a.fa.nd(b.id,a.Z,!0,h?!1:void 0),12):z(m,a.fa.mb(b.id,a.Z),8);case 12:a.Da.Ga(function(){a.ia.ya()&&a.Tb()},a.ue);
case 8:c(e,f),m.g=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return B(function(h){if(h.g==1)return((g=b)==null?void 0:g.id)===void 0?h.M(2):z(h,a.fa.mb(b.id,a.Z),2);a.ia.eb&&a.aa&&a.aa("vss_network_hint")&&a.ia.eb(!0);d(e,f);h.g=0})};
return b}
function Mr(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Jr(a){if(!Hr(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.fa.Qd("QUEUED",a.Z).then(function(b){b&&!Mr(a,b,a.pe)?a.Da.Ga(function(){return B(function(c){if(c.g==1)return b.id===void 0?c.M(2):z(c,a.fa.nd(b.id,a.Z),2);Jr(a);c.g=0})}):a.ia.ya()&&a.Tb()})}
function Lr(a,b){a.Ke&&!a.ia.ya()?a.Ke(b):a.handleError(b)}
function Hr(a){return!!a.Z||a.Xb}
function Or(a){var b;return(a=a==null?void 0:(b=a.error)==null?void 0:b.code)&&a>=400&&a<=599?!1:!0}
function Pr(a){var b;a=a==null?void 0:(b=a.error)==null?void 0:b.code;return!(a!==400&&a!==415)}
;var Qr;
function Rr(){if(Qr)return Qr();var a={};Qr=Iq("LogsDatabaseV2",{wb:(a.LogsRequestsStore={Fb:2},a),shared:!1,upgrade:function(b,c,d){c(2)&&Sp(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.g.indexNames.contains("newRequest")&&d.g.deleteIndex("newRequest"),Zp(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.g.objectStoreNames.contains("sapisid")&&b.g.deleteObjectStore("sapisid");c(9)&&b.g.objectStoreNames.contains("SWHealthLog")&&b.g.deleteObjectStore("SWHealthLog")},
version:9});return Qr()}
;function Sr(a){return lq(Rr(),a)}
function Tr(a,b){var c,d,e,f;return B(function(g){if(g.g==1)return c={startTime:Y(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},z(g,Sr(b),2);if(g.g!=3)return d=g.l,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:S("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),z(g,Up(d,"LogsRequestsStore",e),3);f=g.l;c.ticks.tc=Y();Ur(c);return g.return(f)})}
function Vr(a,b){var c,d,e,f,g,h,l,k;return B(function(m){if(m.g==1)return c={startTime:Y(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},z(m,Sr(b),2);if(m.g!=3)return d=m.l,e=S("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,Y()],h=IDBKeyRange.bound(f,g),l="prev",T("use_fifo_for_networkless")&&(l="next"),k=void 0,z(m,Rp(d,["LogsRequestsStore"],{mode:"readwrite",qa:!0},function(p){return eq(p.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:l},function(r){r.cursor.value&&
(k=r.cursor.value,a==="NEW"&&(k.status="QUEUED",r.update(k)))})}),3);
c.ticks.tc=Y();Ur(c);return m.return(k)})}
function Wr(a,b){var c;return B(function(d){if(d.g==1)return z(d,Sr(b),2);c=d.l;return d.return(Rp(c,["LogsRequestsStore"],{mode:"readwrite",qa:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Np(f.g.put(g,void 0)).then(function(){return g})})}))})}
function Xr(a,b,c,d){c=c===void 0?!0:c;var e;return B(function(f){if(f.g==1)return z(f,Sr(b),2);e=f.l;return f.return(Rp(e,["LogsRequestsStore"],{mode:"readwrite",qa:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(l){return l?(l.status="NEW",c&&(l.sendCount+=1),d!==void 0&&(l.options.compress=d),Np(h.g.put(l,void 0)).then(function(){return l})):Gp.resolve(void 0)})}))})}
function Yr(a,b){var c;return B(function(d){if(d.g==1)return z(d,Sr(b),2);c=d.l;return d.return(c.delete("LogsRequestsStore",a))})}
function Zr(a){var b,c;return B(function(d){if(d.g==1)return z(d,Sr(a),2);b=d.l;c=Y()-2592E6;return z(d,Rp(b,["LogsRequestsStore"],{mode:"readwrite",qa:!0},function(e){return aq(e.objectStore("LogsRequestsStore"),{},function(f){if(f.cursor.value.timestamp<=c)return f.delete().then(function(){return bq(f)})})}),0)})}
function $r(){B(function(a){return z(a,Eq(),0)})}
function Ur(a){T("nwl_csi_killswitch")||gr("networkless_performance",a,{sampleRate:1})}
;var as={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrCowatchUserStartOrJoinEvent:504,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,
mbsConnectionInitiated:138,mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,
kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,mdeExporterEvent:497,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,externalVideoShareToYoutubeAttempt:501,parentCodeEvent:502,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,
mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,
cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,
webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,
miniAppPerformanceMetrics:495,userFeedbackEvent:496,kidsGuestSessionMismatch:498,musicSideloadedPlaylistMigrationEvent:499,sleepTimerSessionFinishEvent:500,watchEpPromoConflict:503};var bs={},cs=Iq("ServiceWorkerLogsDatabase",{wb:(bs.SWHealthLog={Fb:1},bs),shared:!0,upgrade:function(a,b){b(1)&&Zp(Sp(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function ds(a){return lq(cs(),a)}
function es(a){var b,c;B(function(d){if(d.g==1)return z(d,ds(a),2);b=d.l;c=Y()-2592E6;return z(d,Rp(b,["SWHealthLog"],{mode:"readwrite",qa:!0},function(e){return aq(e.objectStore("SWHealthLog"),{},function(f){if(f.cursor.value.timestamp<=c)return f.delete().then(function(){return bq(f)})})}),0)})}
function fs(a){var b;return B(function(c){if(c.g==1)return z(c,ds(a),2);b=c.l;return z(c,b.clear("SWHealthLog"),0)})}
;var gs={},hs=0;function is(a){var b=new Image,c=""+hs++;gs[c]=b;b.onload=b.onerror=function(){delete gs[c]};
b.src=a}
;var js;function ks(){js||(js=new jp("yt.offline"));return js}
function ls(a){if(T("offline_error_handling")){var b=ks().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);ks().set("errors",b,2592E3,!0)}}
;function ms(){this.g=new Map;this.l=!1}
function ns(){if(!ms.g){var a=D("yt.networkRequestMonitor.instance")||new ms;G("yt.networkRequestMonitor.instance",a);ms.g=a}return ms.g}
ms.prototype.requestComplete=function(a,b){b&&(this.l=!0);a=this.removeParams(a);this.g.get(a)||this.g.set(a,b)};
ms.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.g.get(a))?!1:a===!1&&this.l?!0:null};
ms.prototype.removeParams=function(a){return a.split("?")[0]};
ms.prototype.removeParams=ms.prototype.removeParams;ms.prototype.isEndpointCFR=ms.prototype.isEndpointCFR;ms.prototype.requestComplete=ms.prototype.requestComplete;ms.getInstance=ns;function Z(){Jc.call(this);var a=this;this.i=!1;this.l=Uf();this.l.ra("networkstatus-online",function(){if(a.i&&T("offline_error_handling")){var b=ks().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new zo(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Hn(d)}ks().set("errors",{},2592E3,!0)}}})}
y(Z,Jc);function os(){if(!Z.g){var a=D("yt.networkStatusManager.instance")||new Z;G("yt.networkStatusManager.instance",a);Z.g=a}return Z.g}
n=Z.prototype;n.ya=function(){return this.l.ya()};
n.eb=function(a){this.l.l=a};
n.vf=function(){var a=window.navigator.onLine;return a===void 0?!0:a};
n.gf=function(){this.i=!0};
n.ra=function(a,b){return this.l.ra(a,b)};
n.xc=function(a){a=Sf(this.l,a);a.then(function(b){T("use_cfr_monitor")&&ns().requestComplete("generate_204",b)});
return a};
Z.prototype.sendNetworkCheckRequest=Z.prototype.xc;Z.prototype.listen=Z.prototype.ra;Z.prototype.enableErrorFlushing=Z.prototype.gf;Z.prototype.getWindowStatus=Z.prototype.vf;Z.prototype.networkStatusHint=Z.prototype.eb;Z.prototype.isNetworkAvailable=Z.prototype.ya;Z.getInstance=os;function ps(a){a=a===void 0?{}:a;Jc.call(this);var b=this;this.l=this.s=0;this.i=os();var c=D("yt.networkStatusManager.instance.listen").bind(this.i);c&&(a.vc?(this.vc=a.vc,c("networkstatus-online",function(){qs(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){qs(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){Kc(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Kc(b,"publicytnetworkstatus-offline")})))}
y(ps,Jc);ps.prototype.ya=function(){var a=D("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.i)():!0};
ps.prototype.eb=function(a){var b=D("yt.networkStatusManager.instance.networkStatusHint").bind(this.i);b&&b(a)};
ps.prototype.xc=function(a){var b=this,c;return B(function(d){c=D("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.i);return T("skip_network_check_if_cfr")&&ns().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.eb(((f=window.navigator)==null?void 0:f.onLine)||!0);e(b.ya())})):c?d.return(c(a)):d.return(!0)})};
function qs(a,b){a.vc?a.l?(Vf.xa(a.s),a.s=Vf.Ga(function(){a.o!==b&&(Kc(a,b),a.o=b,a.l=Y())},a.vc-(Y()-a.l))):(Kc(a,b),a.o=b,a.l=Y()):Kc(a,b)}
;var rs;function ss(){var a=Gr.call;rs||(rs=new ps({ai:!0,Nh:!0}));a.call(Gr,this,{fa:{Xe:Zr,mb:Yr,Qd:Vr,ng:Wr,nd:Xr,set:Tr},ia:rs,handleError:function(b,c,d){var e,f=d==null?void 0:(e=d.error)==null?void 0:e.code;if(f===400||f===415){var g;In(new zo(b.message,c,d==null?void 0:(g=d.error)==null?void 0:g.code),void 0,void 0,void 0,!0)}else Hn(b)},
pb:In,sendFn:ts,now:Y,Ke:ls,Da:ip(),gd:"publicytnetworkstatus-online",dd:"publicytnetworkstatus-offline",hc:!0,cc:.1,sc:V("potential_esf_error_limit",10),aa:T,Jb:!(Ao()&&Ib(document.location.toString())!=="www.youtube-nocookie.com")});this.i=new Cl;T("networkless_immediately_drop_all_requests")&&$r();Fq("LogsDatabaseV2")}
y(ss,Gr);function us(){var a=D("yt.networklessRequestController.instance");a||(a=new ss,G("yt.networklessRequestController.instance",a),T("networkless_logging")&&xq().then(function(b){a.Z=b;Ir(a);a.i.resolve();a.hc&&Math.random()<=a.cc&&a.Z&&es(a.Z);T("networkless_immediately_drop_sw_health_store")&&vs(a)}));
return a}
ss.prototype.writeThenSend=function(a,b){b||(b={});b=ws(a,b);Ao()||(this.g=!1);Gr.prototype.writeThenSend.call(this,a,b)};
ss.prototype.sendThenWrite=function(a,b,c){b||(b={});b=ws(a,b);Ao()||(this.g=!1);Gr.prototype.sendThenWrite.call(this,a,b,c)};
ss.prototype.sendAndWrite=function(a,b){b||(b={});b=ws(a,b);Ao()||(this.g=!1);Gr.prototype.sendAndWrite.call(this,a,b)};
ss.prototype.awaitInitialization=function(){return this.i.promise};
function vs(a){var b;B(function(c){if(!a.Z)throw b=Cp("clearSWHealthLogsDb"),b;return c.return(fs(a.Z).catch(function(d){a.handleError(d)}))})}
function ts(a,b,c,d){d=d===void 0?!1:d;b=T("web_fp_via_jspb")?Object.assign({},b):b;T("use_cfr_monitor")&&xs(a,b);if(T("use_request_time_ms_header"))b.headers&&Rn(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));else{var e;if((e=b.postParams)==null?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(Y())}if(c&&Object.keys(b).length===0){var f=f===void 0?"":f;var g=g===void 0?!1:g;var h=h===void 0?!1:h;if(a)if(f)eo(a,void 0,"POST",f,void 0);else if(S("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)eo(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var l=new Qa({url:a});if(l.i&&l.l||l.m){var k=Hb(a.match(Gb)[5]||null),m;if(!(m=!k||!k.endsWith("/aclk"))){var p=a.search(Pb),r=Ob(a,0,"ri",p);if(r<0)var q=null;else{var t=a.indexOf("&",r);if(t<0||t>p)t=p;q=Fb(a.slice(r+3,t!==-1?t:0))}m=q!=="1"}var u=!m;break b}}catch(K){}u=!1}if(u){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var A=!0;break b}}catch(K){}A=!1}c=A?!0:!1}else c=!1;c||is(a)}}else b.compress?
b.postBody?(typeof b.postBody!=="string"&&(b.postBody=JSON.stringify(b.postBody)),yr(a,b.postBody,b,io,d)):yr(a,JSON.stringify(b.postParams),b,ho,d):io(a,b)}
function ws(a,b){T("use_event_time_ms_header")&&Rn(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(Y())));return b}
function xs(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){ns().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){ns().requestComplete(a,!0);d(e,f)}}
;var ys=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1};G("ytNetworklessLoggingInitializationOptions",ys);function zs(a){var b=this;this.config_=null;a?this.config_=a:Uq()&&(this.config_=Vq());Do(function(){Er(b)},5E3)}
zs.prototype.isReady=function(){!this.config_&&Uq()&&(this.config_=Vq());return!!this.config_};
function Fr(a,b,c,d){function e(t){t=t===void 0?!1:t;var u;if(d.retry&&h!="www.youtube-nocookie.com"&&(t||T("skip_ls_gel_retry")||g.headers["Content-Type"]!=="application/json"||(u=Cr(b,c,k,l)),u)){var A=g.onSuccess,K=g.onFetchSuccess;g.onSuccess=function(U,da){Dr(u);A(U,da)};
c.onFetchSuccess=function(U,da){Dr(u);K(U,da)}}try{if(t&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?us().writeThenSend(q,g):us().sendAndWrite(q,g);
else if(d.compress){var O=!d.networklessOptions.writeThenSend;if(g.postBody){var X=g.postBody;typeof X!=="string"&&(X=JSON.stringify(g.postBody));yr(q,X,g,io,O)}else yr(q,JSON.stringify(g.postParams),g,ho,O)}else T("web_all_payloads_via_jspb")?io(q,g):ho(q,g)}catch(U){if(U.name==="InvalidAccessError")u&&(Dr(u),u=0),In(Error("An extension is blocking network request."));else throw U;}u&&Do(function(){Er(a)},5E3)}
!S("VISITOR_DATA")&&b!=="visitor_id"&&Math.random()<.01&&In(new zo("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new zo("innertube xhrclient not ready",b,c,d);Hn(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(t,u){if(d.onSuccess)d.onSuccess(u)},
onFetchSuccess:function(t){if(d.onSuccess)d.onSuccess(t)},
onError:function(t,u){if(d.onError)d.onError(u)},
onFetchError:function(t){if(d.onError)d.onError(t)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Zf)&&(h=f);var l=a.config_.bg||!1,k=cr(l,h,d);Object.assign(g.headers,k);(f=g.headers.Authorization)&&!h&&l&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.Xf+"/"+b,p={alt:"json"},r=a.config_.ag&&f;r=r&&f.startsWith("Bearer");r||(p.key=a.config_.Wf);var q=Qn(""+h+m,p||{},!0);D("ytNetworklessLoggingInitializationOptions")&&
ys.isNwlInitialized?vq().then(function(t){e(t)}):e(!1)}
;var As=0;G("ytDomDomGetNextId",D("ytDomDomGetNextId")||function(){return++As});G("ytEventsEventsListeners",C.ytEventsEventsListeners||{});G("ytEventsEventsCounter",C.ytEventsEventsCounter||{count:0});var Bs=C.ytPubsubPubsubInstance||new P,Cs=C.ytPubsubPubsubSubscribedKeys||{},Ds=C.ytPubsubPubsubTopicToKeys||{},Es=C.ytPubsubPubsubIsSynchronous||{};P.prototype.subscribe=P.prototype.subscribe;P.prototype.unsubscribeByKey=P.prototype.Bc;P.prototype.publish=P.prototype.oe;P.prototype.clear=P.prototype.clear;G("ytPubsubPubsubInstance",Bs);G("ytPubsubPubsubTopicToKeys",Ds);G("ytPubsubPubsubIsSynchronous",Es);G("ytPubsubPubsubSubscribedKeys",Cs);var Fs=Symbol("injectionDeps");function Gs(){this.key=Rq}
function Hs(){this.l=new Map;this.g=new Map}
Hs.prototype.resolve=function(a){return a instanceof Gs?Is(this,a.key,[],!0):Is(this,a,[])};
function Is(a,b,c,d){d=d===void 0?!1:d;if(c.indexOf(b)>-1)throw Error("Deps cycle for: "+b);if(a.g.has(b))return a.g.get(b);if(!a.l.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.l.get(b);c.push(b);if(d.Vg!==void 0)var e=d.Vg;else if(d.Ug)e=d[Fs]?Js(a,d[Fs],c):[],e=d.Ug.apply(d,x(e));else if(d.Tg){e=d.Tg;var f=e[Fs]?Js(a,e[Fs],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(x(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.oi||a.g.set(b,e);return e}
function Js(a,b,c){return b?b.map(function(d){return d instanceof Gs?Is(a,d.key,c,!0):Is(a,d,c)}):[]}
;var Ks;function Ls(){Ks||(Ks=new Hs);return Ks}
;var Ms=window;function Ns(){var a,b;return"h5vcc"in Ms&&((a=Ms.h5vcc.traceEvent)==null?0:a.traceBegin)&&((b=Ms.h5vcc.traceEvent)==null?0:b.traceEnd)?1:"performance"in Ms&&Ms.performance.mark&&Ms.performance.measure?2:0}
function Os(a){switch(Ns()){case 1:Ms.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Ms.performance.mark(a+"-start");break;case 0:break;default:Cb()}}
function Ps(a){switch(Ns()){case 1:Ms.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:var b=a+"-start",c=a+"-end";Ms.performance.mark(c);Ms.performance.measure(a,b,c);break;case 0:break;default:Cb()}}
;var Qs=T("web_enable_lifecycle_monitoring")&&Ns()!==0,Rs=T("web_enable_lifecycle_monitoring");function Ss(a){var b=this;var c=c===void 0?0:c;var d=d===void 0?ip():d;this.m=c;this.l=d;this.i=new Cl;this.g=a;for(a={bb:0};a.bb<this.g.length;a={qc:void 0,bb:a.bb},a.bb++)a.qc=this.g[a.bb],c=function(e){return function(){e.qc.Wc();b.g[e.bb].uc=!0;b.g.every(function(f){return f.uc===!0})&&b.i.resolve()}}(a),d=this.l.Ya(c,Ts(this,a.qc)),this.g[a.bb]=Object.assign({},a.qc,{Wc:c,
jobId:d})}
function Us(a){var b=Array.from(a.g.keys()).sort(function(d,e){return Ts(a,a.g[e])-Ts(a,a.g[d])});
b=w(b);for(var c=b.next();!c.done;c=b.next())c=a.g[c.value],c.jobId===void 0||c.uc||(a.l.xa(c.jobId),a.l.Ya(c.Wc,10))}
Ss.prototype.cancel=function(){for(var a=w(this.g),b=a.next();!b.done;b=a.next())b=b.value,b.jobId===void 0||b.uc||this.l.xa(b.jobId),b.uc=!0;this.i.resolve()};
function Ts(a,b){var c;return(c=b.priority)!=null?c:a.m}
;function Vs(a){this.state=a;this.i=[];this.o=void 0;this.u={};Qs&&Os(this.state)}
Vs.prototype.install=function(a){this.i.push(a);return this};
function Ws(a){Qs&&Ps(a.state);var b=a.transitions.find(function(d){return Array.isArray(d.from)?d.from.find(function(e){return e===a.state&&d.Ua==="none"}):d.from===a.state&&d.Ua==="none"});
if(b){a.l&&(Us(a.l),a.l=void 0);Rs&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to 'none'"),console.log("with message: ",void 0),console.groupEnd());a.state="none";Qs&&Os(a.state);b=b.action.bind(a);var c=a.i.filter(function(d){return d.none}).map(function(d){return d.none});
b(Xs(a,c),void 0)}else throw Error("no transition specified from "+a.state+" to none");}
function Xs(a,b){var c=b.filter(function(e){return Ys(a,e)===10}),d=b.filter(function(e){return Ys(a,e)!==10});
return a.u.mi?function(){var e=Da.apply(0,arguments);return B(function(f){if(f.g==1)return z(f,a.D.apply(a,[c].concat(x(e))),2);a.s.apply(a,[d].concat(x(e)));f.g=0})}:function(){var e=Da.apply(0,arguments);
a.F.apply(a,[c].concat(x(e)));a.s.apply(a,[d].concat(x(e)))}}
Vs.prototype.F=function(a){for(var b=Da.apply(1,arguments),c=ip(),d=w(a),e=d.next(),f={};!e.done;f={Ob:void 0},e=d.next())f.Ob=e.value,c.Eb(function(g){return function(){Zs(g.Ob.name);g.Ob.Hc.apply(g.Ob,x(b));$s(g.Ob.name)}}(f))};
Vs.prototype.D=function(a){var b=Da.apply(1,arguments),c,d,e,f,g;return B(function(h){h.g==1&&(c=ip(),d=w(a),e=d.next(),f={});if(h.g!=3){if(e.done)return h.M(0);f.sb=e.value;f.Vb=void 0;g=function(l){return function(){Zs(l.sb.name);var k=l.sb.Hc.apply(l.sb,x(b));typeof(k==null?void 0:k.then)==="function"?l.Vb=k.then(function(){$s(l.sb.name)}):$s(l.sb.name)}}(f);
c.Eb(g);return f.Vb?z(h,f.Vb,3):h.M(3)}f={sb:void 0,Vb:void 0};e=d.next();return h.M(2)})};
Vs.prototype.s=function(a){var b=Da.apply(1,arguments),c=this,d=a.map(function(e){return{Wc:function(){Zs(e.name);e.Hc.apply(e,x(b));$s(e.name)},
priority:Ys(c,e)}});
d.length&&(this.l=new Ss(d))};
function Ys(a,b){var c,d;return(d=(c=a.o)!=null?c:b.priority)!=null?d:0}
function Zs(a){Qs&&a&&Os(a)}
function $s(a){Qs&&a&&Ps(a)}
ea.Object.defineProperties(Vs.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function at(a){Vs.call(this,a===void 0?"none":a);this.g=null;this.o=10;this.transitions=[{from:"none",Ua:"application_navigating",action:this.A},{from:"application_navigating",Ua:"none",action:this.B},{from:"application_navigating",Ua:"application_navigating",action:function(){}},
{from:"none",Ua:"none",action:function(){}}]}
var bt;y(at,Vs);at.prototype.A=function(a,b){var c=this;this.g=Do(function(){c.m==="application_navigating"&&Ws(c)},5E3);
a(b==null?void 0:b.event)};
at.prototype.B=function(a,b){this.g&&(Vf.xa(this.g),this.g=null);a(b==null?void 0:b.event)};
function ct(){bt||(bt=new at);return bt}
;var dt=[];G("yt.logging.transport.getScrapedGelPayloads",function(){return dt});function et(){this.store={};this.g={}}
et.prototype.storePayload=function(a,b){a=ft(a);this.store[a]?this.store[a].push(b):(this.g={},this.store[a]=[b]);return a};
et.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=gt(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,x(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,x(this.store[b[d]].splice(0,a.sizeLimit))));(a==null?0:a.sizeLimit)&&c.length<(a==null?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,x(this.smartExtractMatchingEntries(a))));return c};
et.prototype.extractMatchingEntries=function(a){a=gt(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,x(this.store[a[c]])),delete this.store[a[c]]);return b};
et.prototype.getSequenceCount=function(a){a=gt(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=((d=this.store[a[c]])==null?void 0:d.length)||0}return b};
function gt(a,b){var c=ft(b);if(a.g[c])return a.g[c];var d=Object.keys(a.store)||[];if(d.length<=1&&ft(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(ht(b.auth,g[0])){var h=b.isJspb;ht(h===void 0?"undefined":h?"true":"false",g[1])&&ht(b.cttAuthInfo,g[2])&&(h=b.tier,h=h===void 0?"undefined":JSON.stringify(h),ht(h,g[3])&&e.push(d[f]))}}return a.g[c]=e}
function ht(a,b){return a===void 0||a==="undefined"?!0:a===b}
et.prototype.getSequenceCount=et.prototype.getSequenceCount;et.prototype.extractMatchingEntries=et.prototype.extractMatchingEntries;et.prototype.smartExtractMatchingEntries=et.prototype.smartExtractMatchingEntries;et.prototype.storePayload=et.prototype.storePayload;function ft(a){return[a.auth===void 0?"undefined":a.auth,a.isJspb===void 0?"undefined":a.isJspb,a.cttAuthInfo===void 0?"undefined":a.cttAuthInfo,a.tier===void 0?"undefined":a.tier].join("/")}
;var it=V("initial_gel_batch_timeout",2E3),jt=V("gel_queue_timeout_max_ms",6E4),kt=Math.pow(2,16)-1,lt=V("gel_min_batch_size",5),mt=void 0;function nt(){this.m=this.g=this.l=0;this.i=!1}
var ot=new nt,pt=new nt,qt=new nt,rt=new nt,st,tt=!0,ut=1,vt=new Map,wt=C.ytLoggingTransportTokensToCttTargetIds_||{};G("ytLoggingTransportTokensToCttTargetIds_",wt);var xt=C.ytLoggingTransportTokensToJspbCttTargetIds_||{};G("ytLoggingTransportTokensToJspbCttTargetIds_",xt);var zt={};function At(){var a=D("yt.logging.ims");a||(a=new et,G("yt.logging.ims",a));return a}
function Bt(a,b){if(a.endpoint==="log_event"){Ct(a);var c=Dt(a),d=Et(a.payload)||"";a:{if(T("enable_web_tiered_gel")){var e=as[d||""];var f,g;if(Ls().resolve(new Gs)==null)var h=void 0;else{var l;h=(l=D("yt.gcf.config.hotConfigGroup"))!=null?l:S("RAW_HOT_CONFIG_GROUP");h=h==null?void 0:(f=h.loggingHotConfig)==null?void 0:(g=f.eventLoggingConfig)==null?void 0:g.payloadPolicies}if(f=h)for(g=0;g<f.length;g++)if(f[g].payloadNumber===e){e=f[g];break a}}e=void 0}f=200;if(e){if(e.enabled===!1&&!T("web_payload_policy_disabled_killswitch"))return;
f=Ft(e.tier);if(f===400){Gt(a,b);return}}zt[c]=!0;e={cttAuthInfo:c,isJspb:!1,tier:f};At().storePayload(e,a.payload);Ht(b,c,e,d==="gelDebuggingEvent")}}
function Ht(a,b,c,d){function e(){It(T("flush_only_full_queue")?b:void 0,f,c.tier)}
var f=!1;f=f===void 0?!1:f;d=d===void 0?!1:d;a&&(mt=new a);a=V("tvhtml5_logging_max_batch_ads_fork")||V("tvhtml5_logging_max_batch")||V("web_logging_max_batch")||100;var g=Y(),h=Jt(f,c.tier),l=h.m;d&&(h.i=!0);d=0;c&&(d=At().getSequenceCount(c));d>=1E3?e():d>=a?st||(st=Kt(function(){e();st=void 0},0)):g-l>=10&&(Lt(f,c.tier),h.m=g)}
function Gt(a,b){if(a.endpoint==="log_event"){Ct(a);var c=Dt(a),d=new Map;d.set(c,[a.payload]);var e=Et(a.payload)||"";b&&(mt=new b);return new wd(function(f,g){mt&&mt.isReady()?Mt(d,mt,f,g,{bypassNetworkless:!0},!0,e==="gelDebuggingEvent"):f()})}}
function Dt(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);wt[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function It(a,b,c){var d={writeThenSend:!0};d=d===void 0?{}:d;b=b===void 0?!1:b;new wd(function(e,f){var g=Jt(b,c),h=g.i;g.i=!1;Nt(g.l);Nt(g.g);g.g=0;mt&&mt.isReady()?c===void 0&&T("enable_web_tiered_gel")?Ot(e,f,d,a,b,300,h):Ot(e,f,d,a,b,c,h):(Lt(b,c),e())})}
function Ot(a,b,c,d,e,f,g){var h=mt;c=c===void 0?{}:c;e=e===void 0?!1:e;f=f===void 0?200:f;g=g===void 0?!1:g;var l=new Map,k=new Map,m={isJspb:e,cttAuthInfo:d,tier:f},p={isJspb:e,cttAuthInfo:d};if(d!==void 0)e?(b=T("enable_web_tiered_gel")?At().smartExtractMatchingEntries({keys:[m,p],sizeLimit:1E3}):At().extractMatchingEntries(p),l.set(d,b),Pt(l,h,a,c,g)):(l=T("enable_web_tiered_gel")?At().smartExtractMatchingEntries({keys:[m,p],sizeLimit:1E3}):At().extractMatchingEntries(p),k.set(d,l),Mt(k,h,a,b,
c,!1,g));else if(e){b=w(Object.keys(zt));for(k=b.next();!k.done;k=b.next())k=k.value,f=T("enable_web_tiered_gel")?At().smartExtractMatchingEntries({keys:[m,p],sizeLimit:1E3}):At().extractMatchingEntries({isJspb:!0,cttAuthInfo:k}),f.length>0&&l.set(k,f),(T("web_fp_via_jspb_and_json")&&c.writeThenSend||!T("web_fp_via_jspb_and_json"))&&delete zt[k];Pt(l,h,a,c,g)}else{l=w(Object.keys(zt));for(m=l.next();!m.done;m=l.next())m=m.value,p=T("enable_web_tiered_gel")?At().smartExtractMatchingEntries({keys:[{isJspb:!1,
cttAuthInfo:m,tier:f},{isJspb:!1,cttAuthInfo:m}],sizeLimit:1E3}):At().extractMatchingEntries({isJspb:!1,cttAuthInfo:m}),p.length>0&&k.set(m,p),(T("web_fp_via_jspb_and_json")&&c.writeThenSend||!T("web_fp_via_jspb_and_json"))&&delete zt[m];Mt(k,h,a,b,c,!1,g)}}
function Lt(a,b){function c(){It(void 0,a,b)}
a=a===void 0?!1:a;b=b===void 0?200:b;var d=Jt(a,b),e=d===rt||d===qt?5E3:jt;T("web_gel_timeout_cap")&&!d.g&&(e=Kt(function(){c()},e),d.g=e);
Nt(d.l);e=S("LOGGING_BATCH_TIMEOUT",V("web_gel_debounce_ms",1E4));T("shorten_initial_gel_batch_timeout")&&tt&&(e=it);e=Kt(function(){V("gel_min_batch_size")>0?At().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=lt&&c():c()},e);
d.l=e}
function Mt(a,b,c,d,e,f,g){e=e===void 0?{}:e;var h=Math.round(Y()),l=a.size,k=Qt(g);a=w(a);var m=a.next();for(g={};!m.done;g={cd:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,fd:void 0,ed:void 0},m=a.next()){var p=w(m.value);m=p.next().value;p=p.next().value;g.batchRequest=tb({context:Wq(b.config_||Vq())});if(!Ja(p)&&!T("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=p;(p=wt[m])&&Rt(g.batchRequest,m,p);delete wt[m];g.dangerousLogToVisitorSession=m===
"visitorOnlyApprovedKey";St(g.batchRequest,h,g.dangerousLogToVisitorSession);Tt(e);g.fd=function(r){T("start_client_gcf")&&Vf.Ga(function(){return B(function(q){return z(q,Ut(r),0)})});
l--;l||c()};
g.cd=0;g.ed=function(r){return function(){r.cd++;if(e.bypassNetworkless&&r.cd===1)try{Fr(b,k,r.batchRequest,Vt({writeThenSend:!0},r.dangerousLogToVisitorSession,r.fd,r.ed,f)),tt=!1}catch(q){Hn(q),d()}l--;l||c()}}(g);
try{Fr(b,k,g.batchRequest,Vt(e,g.dangerousLogToVisitorSession,g.fd,g.ed,f)),tt=!1}catch(r){Hn(r),d()}}}
function Pt(a,b,c,d,e){d=d===void 0?{}:d;var f=Math.round(Y()),g={value:a.size},h=new Map([].concat(x(a))),l=w(h);for(h=l.next();!h.done;h=l.next()){var k=w(h.value).next().value,m=a.get(k);h=new tn;var p=b.config_||Vq(),r=new on,q=new gn;J(q,1,p.ce);J(q,2,p.be);rf(q,16,p.Yf);J(q,17,p.ae);if(p.Tc){var t=p.Tc,u=new dn;t.coldConfigData&&J(u,1,t.coldConfigData);t.appInstallData&&J(u,6,t.appInstallData);t.coldHashData&&J(u,3,t.coldHashData);t.hotHashData&&u.g(t.hotHashData);kf(q,dn,62,u)}if((t=C.devicePixelRatio)&&
t!=1){if(t!=null&&typeof t!=="number")throw Error("Value of float/double field must be a number, found "+typeof t+": "+t);df(q,65,t)}t=S("EXPERIMENTS_TOKEN","");t!==""&&J(q,54,t);t=Cn();if(t.length>0){u=new kn;for(var A=0;A<t.length;A++){var K=new hn;J(K,1,t[A].key);a:{var O=K,X=Ge(t[A].value),U=jn;O=O.U;var da=he(O);se(da);if(X==null){var Ua=gf(O);if(hf(Ua,O,da,U)===2)Ua.set(U,0);else break a}else{Ua=O;U.includes(2);var gb=gf(Ua),sa=hf(gb,Ua,da,U);sa!==2&&(sa&&(da=ef(Ua,da,sa)),gb.set(U,2))}ef(O,
da,2,X)}nf(u,15,hn,K)}kf(r,kn,5,u)}Xq(p,q);Yq(r);Zq(q);$q(p,q);ar(q);T("start_client_gcf")&&br(q);S("DELEGATED_SESSION_ID")&&!T("pageid_as_header_web")&&(p=new nn,J(p,3,S("DELEGATED_SESSION_ID")));!T("fill_delegate_context_in_gel_killswitch")&&(t=S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(u=jf(r,nn,3)||new nn,p=r,t=J(u,18,t),kf(p,nn,3,t));p=q;t=w(Object.entries(Pn(S("DEVICE",""))));for(u=t.next();!u.done;u=t.next())A=w(u.value),u=A.next().value,A=A.next().value,u==="cbrand"?J(p,12,A):
u==="cmodel"?J(p,13,A):u==="cbr"?J(p,87,A):u==="cbrver"?J(p,88,A):u==="cos"?J(p,18,A):u==="cosver"?J(p,19,A):u==="cplatform"&&rf(p,42,to(A));kf(r,gn,1,q);kf(h,on,1,r);if(q=xt[k])a:{if(pf(q,1))r=1;else if(q.getPlaylistId())r=2;else break a;kf(h,sn,4,q);q=jf(h,on,1)||new on;p=jf(q,nn,3)||new nn;t=new mn;J(t,2,k);rf(t,1,r);nf(p,12,mn,t);kf(q,nn,3,p)}delete xt[k];k=k==="visitorOnlyApprovedKey";Wt()||df(h,2,Ee(f));!k&&(r=S("EVENT_ID"))&&(q=Xt(),p=new rn,J(p,1,r),df(p,2,Ee(q)),kf(h,rn,5,p));Tt(d);if(T("jspb_serialize_with_worker")&&
(r=kr())&&d.writeThenSend){vt.set(ut,{client:b,resolve:c,networklessOptions:d,isIsolated:!1,useVSSEndpoint:e,dangerousLogToVisitorSession:k,requestsOutstanding:g});a=r;b=a.postMessage;c=uf(h);b.call(a,{op:"gelBatchToSerialize",batchRequest:c,clientEvents:m,key:ut});ut++;break}if(m){r=[];for(q=0;q<m.length;q++)try{r.push(new qn(m[q]))}catch(Ka){Hn(new zo("Transport failed to deserialize "+String(m[q])))}m=r}else m=[];m=w(m);for(r=m.next();!r.done;r=m.next())nf(h,3,qn,r.value);m={startTime:Y(),ticks:{},
infos:{}};try{sf=!0;var Ea=JSON.stringify(uf(h),Re)}finally{sf=!1}m.ticks.geljspc=Y();T("log_jspb_serialize_latency")&&gr("gel_jspb_serialize",m,{sampleRate:.1});Yt(Ea,b,c,d,e,k,g)}}
function Yt(a,b,c,d,e,f,g){d=d===void 0?{}:d;g=g===void 0?{value:0}:g;e=Qt(e);d=Vt(d,f,function(h){T("start_client_gcf")&&Vf.Ga(function(){return B(function(l){return z(l,Ut(h),0)})});
g.value--;g.value||c()},function(){g.value--;
g.value||c()},!1);
d.headers["Content-Type"]="application/json+protobuf";d.postBodyFormat="JSPB";d.postBody=a;Fr(b,e,"",d);tt=!1}
function Tt(a){T("always_send_and_write")&&(a.writeThenSend=!1)}
function Vt(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,Hh:!!e,headers:{},postBodyFormat:"",postBody:"",compress:T("compress_gel")||T("compress_gel_lr")};Wt()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));return a}
function St(a,b,c){Wt()||(a.requestTimeMs=String(b));T("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=S("EVENT_ID"))&&(c=Xt(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Xt(){var a=S("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*kt/2));a++;a>kt&&(a=1);yn("BATCH_CLIENT_COUNTER",a);return a}
function Rt(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Ct(a){if(!D("yt.logging.transport.enableScrapingForTest")){var b=Bn("il_payload_scraping");if((b!==void 0?String(b):"")==="enable_il_payload_scraping")dt=[],G("yt.logging.transport.enableScrapingForTest",!0),G("yt.logging.transport.scrapedPayloadsForTesting",dt),G("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),G("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
G("yt.logging.transport.scrapeClientEvent",!0);else return}b=D("yt.logging.transport.scrapedPayloadsForTesting");var c=D("yt.logging.transport.payloadToScrape"),d=D("yt.logging.transport.scrapeClientEvent");if(c&&c.length>=1)for(var e=0;e<c.length;e++)if(a&&a.payload[c[e]])if(d)b.push(a.payload);else{var f=void 0;b.push(((f=a)==null?void 0:f.payload)[c[e]])}G("yt.logging.transport.scrapedPayloadsForTesting",b)}
function Wt(){return T("use_request_time_ms_header")||T("lr_use_request_time_ms_header")}
function Kt(a,b){return T("transport_use_scheduler")===!1?Zn(a,b):T("logging_avoid_blocking_during_navigation")||T("lr_logging_avoid_blocking_during_navigation")?Do(function(){if(ct().m==="none")a();else{var c={};ct().install((c.none={Hc:a},c))}},b):Do(a,b)}
function Nt(a){T("transport_use_scheduler")?Vf.xa(a):window.clearTimeout(a)}
function Ut(a){var b,c,d,e,f,g,h,l,k,m;return B(function(p){if(p.g==1){d=(b=a)==null?void 0:(c=b.responseContext)==null?void 0:c.globalConfigGroup;var r=d?d[cn.name]:void 0;e=r;g=(f=d)==null?void 0:f.hotHashData;r=d?d[bn.name]:void 0;h=r;k=(l=d)==null?void 0:l.coldHashData;return(m=Ls().resolve(new Gs))?g?e?z(p,Sq(m,g,e),2):z(p,Sq(m,g),2):p.M(2):p.return()}return k?h?z(p,Tq(m,k,h),0):z(p,Tq(m,k),0):p.M(0)})}
function Jt(a,b){b=b===void 0?200:b;return a?b===300?rt:pt:b===300?qt:ot}
function Et(a){a=Object.keys(a);a=w(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,as[b])return b}
function Ft(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
function Qt(a){return(a===void 0?0:a)&&T("vss_through_gel_video_stats")?"video_stats":"log_event"}
;var Zt=C.ytLoggingGelSequenceIdObj_||{};G("ytLoggingGelSequenceIdObj_",Zt);var $t,au=C.ytLoggingDocDocumentNonce_;
if(!au){var bu;a:{if(window.crypto&&window.crypto.getRandomValues)try{var cu=Array(16),du=new Uint8Array(16);window.crypto.getRandomValues(du);for(var eu=0;eu<cu.length;eu++)cu[eu]=du[eu];bu=cu;break a}catch(a){}for(var fu=Array(16),gu=0;gu<16;gu++){for(var hu=Date.now(),iu=0;iu<hu%23;iu++)fu[gu]=Math.random();fu[gu]=Math.floor(Math.random()*256)}if(Un)for(var ju=1,ku=0;ku<Un.length;ku++)fu[ju%16]=fu[ju%16]^fu[(ju-1)%16]/4^Un.charCodeAt(ku),ju++;bu=fu}for(var lu=bu,mu=[],nu=0;nu<lu.length;nu++)mu.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(lu[nu]&
63));au=mu.join("");G("ytLoggingDocDocumentNonce_",au)}$t=au;function ou(a){return S("client-screen-nonce-store",{})[a===void 0?0:a]}
function pu(a,b){b=b===void 0?0:b;var c=S("client-screen-nonce-store");c||(c={},yn("client-screen-nonce-store",c));c[b]=a}
function qu(a){a=a===void 0?0:a;return a===0?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
G("yt_logging_screen.getRootVeType",function(a){return S(qu(a===void 0?0:a))});
function ru(){var a=S("csn-to-ctt-auth-info");a||(a={},yn("csn-to-ctt-auth-info",a));return a}
function su(a){a=ou(a===void 0?0:a);if(!a&&!S("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
G("yt_logging_screen.getCurrentCsn",su);function tu(a,b,c){var d=ru();(c=su(c))&&delete d[c];b&&(d[a]=b)}
G("yt_logging_screen.getCttAuthInfo",function(a){return ru()[a]});
G("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=c===void 0?0:c;if(a!==ou(c)||b!==S(qu(c)))if(tu(a,d,c),pu(a,c),yn(qu(c),b),b=function(){setTimeout(function(){if(a){var e={clientDocumentNonce:$t,clientScreenNonce:a};var f=f===void 0?{}:f;var g=zs;S("ytLoggingEventsDefaultDisabled",!1)&&zs===zs&&(g=null);f=f===void 0?{}:f;var h={},l=Math.round(f.timestamp||Y());h.eventTimeMs=l<Number.MAX_SAFE_INTEGER?l:0;h.foregroundHeartbeatScreenAssociated=e;e=D("_lact",window);e=e==null?-1:Math.max(Date.now()-
e,0);h.context={lastActivityMs:String(f.timestamp||!isFinite(e)?-1:e)};f.sequenceGroup&&!T("web_gel_sequence_info_killswitch")&&(e=h.context,l=f.sequenceGroup,Zt[l]=l in Zt?Zt[l]+1:0,e.sequence={index:Zt[l],groupKey:l},f.endOfSequence&&delete Zt[f.sequenceGroup]);(f.sendIsolatedPayload?Gt:Bt)({endpoint:"log_event",payload:h,cttAuthInfo:f.cttAuthInfo,dangerousLogToVisitorSession:f.dangerousLogToVisitorSession},g)}},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});var uu="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function vu(a,b){var c=c===void 0?!0:c;var d=S("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=Ib(window.location.href);e&&d.push(e);e=Ib(a);if(nb(d,e)>=0||!e&&a.lastIndexOf("/",0)==0)if(d=document.createElement("a"),mb(d,a),a=d.href)if(a=Jb(a),a=Kb(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:su()},b)),f){var f=parseInt(f,10);isFinite(f)&&f>0&&wu(a,b,f)}else wu(a,b)}
function wu(a,b,c){a=xu(a);b=b?Mb(b):"";c=c||5;(Of()||(Od||Pd)&&Tn("applewebkit")&&!Tn("version")&&(!Tn("safari")||Tn("gsa/"))||mc&&Tn("version/")||!S("EOM_VISITOR_DATA"))&&Dn(a,b,c)}
function xu(a){var b=a;a=w(uu);for(var c=a.next();!c.done;c=a.next()){for(var d=c.value,e=b.search(Pb),f=0,g=[];(c=Ob(b,f,d,e))>=0;)g.push(b.substring(f,c)),f=Math.min(b.indexOf("&",c)+1||e,e);g.push(b.slice(f));b=g.join("").replace(Qb,"$1")}for(c=a=0;c<b.length;++c)a=31*a+b.charCodeAt(c)>>>0;return"ST-"+a.toString(36)}
;new P;function yu(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return(S("INNERTUBE_CLIENT_NAME")==="WEB"||S("INNERTUBE_CLIENT_NAME")==="WEB_CREATOR")&&a}
;function zu(a,b){b=b?{feature:b}:{};var c=S("EVENT_ID");c&&(b.ei=c,c=((c=document.getElementById("masthead-search"))?c.dataset?c.dataset[An()]:c.getAttribute("data-clicktracking"):null)||"",b.ved=c,vu(a,b));b=D("yt.window.navigate");try{b(a)}catch(h){var d=d===void 0?{}:d;var e=e===void 0?"":e;var f=f===void 0?window:f;a=Nb(a,d);S("LOGGED_IN",!0)&&yu()&&(d=S("VALID_SESSION_TEMPDATA_DOMAINS",[]),(b=Ib(window.location.href))&&d.push(b),b=Ib(a),nb(d,b)>=0||!b&&a.lastIndexOf("/",0)==0?(d=Jb(a),(d=Kb(d))?
(d=xu(d),d=(d=Mf.get(""+d,void 0)||null)?Pn(d):{}):d=null):d=null,d==null&&(d={}),b=d,c=void 0,yu()?(c||(c=S("LOGIN_INFO")),c?(b.session_logininfo=c,b=!0):b=!1):b=!1,b&&vu(a,d));e=a+e;var g=g===void 0?eb:g;a:if(g=g===void 0?eb:g,e instanceof ab)g=e;else{for(a=0;a<g.length;++a)if(d=g[a],d instanceof cb&&d.ig(e)){g=new ab(e);break a}g=void 0}f=f.location;g=lb(g||bb);g!==void 0&&(f.href=g)}}
;G("searchbox.yt.install",function(a,b,c,d,e,f,g){Ug||(Ug=new kl);Ug.install(a,b,c,d,e,f,g)});
G("yt.www.masthead.searchbox.initPolymer",function(a,b,c,d){var e=Vf.Ga;if(a&&e){var f=S("SBOX_SETTINGS"),g=S("SBOX_LABELS");f&&g&&(a=D("searchbox.yt.install")(a,b,c,f,g,zu,d))&&e(a,100)}});}).call(this);