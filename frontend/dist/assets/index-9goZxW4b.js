import{R as it,r as g,L as De,u as ol,a as Uf,b as v4,O as x4,N as I0,B as nv,c as av,d as ht}from"./router-DkPTQYeX.js";import{r as rv,a as iv}from"./vendor-DJG_os-6.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))f(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const m of d.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&f(m)}).observe(document,{childList:!0,subtree:!0});function i(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function f(c){if(c.ep)return;c.ep=!0;const d=i(c);fetch(c.href,d)}})();var Wu={exports:{}},lf={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u2;function fv(){if(u2)return lf;u2=1;var e=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function i(f,c,d){var m=null;if(d!==void 0&&(m=""+d),c.key!==void 0&&(m=""+c.key),"key"in c){d={};for(var y in c)y!=="key"&&(d[y]=c[y])}else d=c;return c=d.ref,{$$typeof:e,type:f,key:m,ref:c!==void 0?c:null,props:d}}return lf.Fragment=a,lf.jsx=i,lf.jsxs=i,lf}var d2;function ov(){return d2||(d2=1,Wu.exports=fv()),Wu.exports}var s=ov(),Ku={exports:{}},cf={},ed={exports:{}},td={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h2;function sv(){return h2||(h2=1,function(e){function a(B,P){var q=B.length;B.push(P);e:for(;0<q;){var K=q-1>>>1,oe=B[K];if(0<c(oe,P))B[K]=P,B[q]=oe,q=K;else break e}}function i(B){return B.length===0?null:B[0]}function f(B){if(B.length===0)return null;var P=B[0],q=B.pop();if(q!==P){B[0]=q;e:for(var K=0,oe=B.length,Ae=oe>>>1;K<Ae;){var ye=2*(K+1)-1,ve=B[ye],Ue=ye+1,yt=B[Ue];if(0>c(ve,q))Ue<oe&&0>c(yt,ve)?(B[K]=yt,B[Ue]=q,K=Ue):(B[K]=ve,B[ye]=q,K=ye);else if(Ue<oe&&0>c(yt,q))B[K]=yt,B[Ue]=q,K=Ue;else break e}}return P}function c(B,P){var q=B.sortIndex-P.sortIndex;return q!==0?q:B.id-P.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;e.unstable_now=function(){return d.now()}}else{var m=Date,y=m.now();e.unstable_now=function(){return m.now()-y}}var b=[],x=[],v=1,M=null,j=3,k=!1,I=!1,S=!1,N=!1,R=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;function T(B){for(var P=i(x);P!==null;){if(P.callback===null)f(x);else if(P.startTime<=B)f(x),P.sortIndex=P.expirationTime,a(b,P);else break;P=i(x)}}function C(B){if(S=!1,T(B),!I)if(i(b)!==null)I=!0,D||(D=!0,Ge());else{var P=i(x);P!==null&&fe(C,P.startTime-B)}}var D=!1,G=-1,F=5,me=-1;function Ke(){return N?!0:!(e.unstable_now()-me<F)}function ct(){if(N=!1,D){var B=e.unstable_now();me=B;var P=!0;try{e:{I=!1,S&&(S=!1,A(G),G=-1),k=!0;var q=j;try{t:{for(T(B),M=i(b);M!==null&&!(M.expirationTime>B&&Ke());){var K=M.callback;if(typeof K=="function"){M.callback=null,j=M.priorityLevel;var oe=K(M.expirationTime<=B);if(B=e.unstable_now(),typeof oe=="function"){M.callback=oe,T(B),P=!0;break t}M===i(b)&&f(b),T(B)}else f(b);M=i(b)}if(M!==null)P=!0;else{var Ae=i(x);Ae!==null&&fe(C,Ae.startTime-B),P=!1}}break e}finally{M=null,j=q,k=!1}P=void 0}}finally{P?Ge():D=!1}}}var Ge;if(typeof _=="function")Ge=function(){_(ct)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,ae=X.port2;X.port1.onmessage=ct,Ge=function(){ae.postMessage(null)}}else Ge=function(){R(ct,0)};function fe(B,P){G=R(function(){B(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(B){B.callback=null},e.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<B?Math.floor(1e3/B):5},e.unstable_getCurrentPriorityLevel=function(){return j},e.unstable_next=function(B){switch(j){case 1:case 2:case 3:var P=3;break;default:P=j}var q=j;j=P;try{return B()}finally{j=q}},e.unstable_requestPaint=function(){N=!0},e.unstable_runWithPriority=function(B,P){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var q=j;j=B;try{return P()}finally{j=q}},e.unstable_scheduleCallback=function(B,P,q){var K=e.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?K+q:K):q=K,B){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=q+oe,B={id:v++,callback:P,priorityLevel:B,startTime:q,expirationTime:oe,sortIndex:-1},q>K?(B.sortIndex=q,a(x,B),i(b)===null&&B===i(x)&&(S?(A(G),G=-1):S=!0,fe(C,q-K))):(B.sortIndex=oe,a(b,B),I||k||(I=!0,D||(D=!0,Ge()))),B},e.unstable_shouldYield=Ke,e.unstable_wrapCallback=function(B){var P=j;return function(){var q=j;j=P;try{return B.apply(this,arguments)}finally{j=q}}}}(td)),td}var m2;function lv(){return m2||(m2=1,ed.exports=sv()),ed.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g2;function cv(){if(g2)return cf;g2=1;var e=lv(),a=rv(),i=iv();function f(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function d(t){var n=t,r=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(r=n.return),t=n.return;while(t)}return n.tag===3?r:null}function m(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function y(t){if(d(t)!==t)throw Error(f(188))}function b(t){var n=t.alternate;if(!n){if(n=d(t),n===null)throw Error(f(188));return n!==t?null:t}for(var r=t,o=n;;){var l=r.return;if(l===null)break;var u=l.alternate;if(u===null){if(o=l.return,o!==null){r=o;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===r)return y(l),t;if(u===o)return y(l),n;u=u.sibling}throw Error(f(188))}if(r.return!==o.return)r=l,o=u;else{for(var p=!1,w=l.child;w;){if(w===r){p=!0,r=l,o=u;break}if(w===o){p=!0,o=l,r=u;break}w=w.sibling}if(!p){for(w=u.child;w;){if(w===r){p=!0,r=u,o=l;break}if(w===o){p=!0,o=u,r=l;break}w=w.sibling}if(!p)throw Error(f(189))}}if(r.alternate!==o)throw Error(f(190))}if(r.tag!==3)throw Error(f(188));return r.stateNode.current===r?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,M=Symbol.for("react.element"),j=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),A=Symbol.for("react.consumer"),_=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),D=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),me=Symbol.for("react.activity"),Ke=Symbol.for("react.memo_cache_sentinel"),ct=Symbol.iterator;function Ge(t){return t===null||typeof t!="object"?null:(t=ct&&t[ct]||t["@@iterator"],typeof t=="function"?t:null)}var X=Symbol.for("react.client.reference");function ae(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===X?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case I:return"Fragment";case N:return"Profiler";case S:return"StrictMode";case C:return"Suspense";case D:return"SuspenseList";case me:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case k:return"Portal";case _:return(t.displayName||"Context")+".Provider";case A:return(t._context.displayName||"Context")+".Consumer";case T:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case G:return n=t.displayName||null,n!==null?n:ae(t.type)||"Memo";case F:n=t._payload,t=t._init;try{return ae(t(n))}catch{}}return null}var fe=Array.isArray,B=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},K=[],oe=-1;function Ae(t){return{current:t}}function ye(t){0>oe||(t.current=K[oe],K[oe]=null,oe--)}function ve(t,n){oe++,K[oe]=t.current,t.current=n}var Ue=Ae(null),yt=Ae(null),Mt=Ae(null),Cn=Ae(null);function gn(t,n){switch(ve(Mt,n),ve(yt,t),ve(Ue,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?_g(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=_g(n),t=Yg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ye(Ue),ve(Ue,t)}function jt(){ye(Ue),ye(yt),ye(Mt)}function ka(t){t.memoizedState!==null&&ve(Cn,t);var n=Ue.current,r=Yg(n,t.type);n!==r&&(ve(yt,t),ve(Ue,r))}function kn(t){yt.current===t&&(ye(Ue),ye(yt)),Cn.current===t&&(ye(Cn),af._currentValue=q)}var Zt=Object.prototype.hasOwnProperty,_l=e.unstable_scheduleCallback,Yl=e.unstable_cancelCallback,zb=e.unstable_shouldYield,Rb=e.unstable_requestPaint,pn=e.unstable_now,Ob=e.unstable_getCurrentPriorityLevel,w1=e.unstable_ImmediatePriority,v1=e.unstable_UserBlockingPriority,Vf=e.unstable_NormalPriority,Bb=e.unstable_LowPriority,x1=e.unstable_IdlePriority,Ub=e.log,_b=e.unstable_setDisableYieldValue,ui=null,It=null;function Hn(t){if(typeof Ub=="function"&&_b(t),It&&typeof It.setStrictMode=="function")try{It.setStrictMode(ui,t)}catch{}}var Dt=Math.clz32?Math.clz32:Gb,Yb=Math.log,Qb=Math.LN2;function Gb(t){return t>>>=0,t===0?32:31-(Yb(t)/Qb|0)|0}var Xf=256,Wf=4194304;function Ea(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Kf(t,n,r){var o=t.pendingLanes;if(o===0)return 0;var l=0,u=t.suspendedLanes,p=t.pingedLanes;t=t.warmLanes;var w=o&134217727;return w!==0?(o=w&~u,o!==0?l=Ea(o):(p&=w,p!==0?l=Ea(p):r||(r=w&~t,r!==0&&(l=Ea(r))))):(w=o&~u,w!==0?l=Ea(w):p!==0?l=Ea(p):r||(r=o&~t,r!==0&&(l=Ea(r)))),l===0?0:n!==0&&n!==l&&(n&u)===0&&(u=l&-l,r=n&-n,u>=r||u===32&&(r&4194048)!==0)?n:l}function di(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function $b(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function M1(){var t=Xf;return Xf<<=1,(Xf&4194048)===0&&(Xf=256),t}function j1(){var t=Wf;return Wf<<=1,(Wf&62914560)===0&&(Wf=4194304),t}function Ql(t){for(var n=[],r=0;31>r;r++)n.push(t);return n}function hi(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Zb(t,n,r,o,l,u){var p=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var w=t.entanglements,L=t.expirationTimes,U=t.hiddenUpdates;for(r=p&~r;0<r;){var Z=31-Dt(r),H=1<<Z;w[Z]=0,L[Z]=-1;var Y=U[Z];if(Y!==null)for(U[Z]=null,Z=0;Z<Y.length;Z++){var Q=Y[Z];Q!==null&&(Q.lane&=-536870913)}r&=~H}o!==0&&L1(t,o,0),u!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=u&~(p&~n))}function L1(t,n,r){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Dt(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|r&4194090}function S1(t,n){var r=t.entangledLanes|=n;for(t=t.entanglements;r;){var o=31-Dt(r),l=1<<o;l&n|t[o]&n&&(t[o]|=n),r&=~l}}function Gl(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function $l(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function C1(){var t=P.p;return t!==0?t:(t=window.event,t===void 0?32:i2(t.type))}function Jb(t,n){var r=P.p;try{return P.p=t,n()}finally{P.p=r}}var Pn=Math.random().toString(36).slice(2),ut="__reactFiber$"+Pn,Lt="__reactProps$"+Pn,fr="__reactContainer$"+Pn,Zl="__reactEvents$"+Pn,Hb="__reactListeners$"+Pn,Pb="__reactHandles$"+Pn,k1="__reactResources$"+Pn,mi="__reactMarker$"+Pn;function Jl(t){delete t[ut],delete t[Lt],delete t[Zl],delete t[Hb],delete t[Pb]}function or(t){var n=t[ut];if(n)return n;for(var r=t.parentNode;r;){if(n=r[fr]||r[ut]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(t=Zg(t);t!==null;){if(r=t[ut])return r;t=Zg(t)}return n}t=r,r=t.parentNode}return null}function sr(t){if(t=t[ut]||t[fr]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function gi(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(f(33))}function lr(t){var n=t[k1];return n||(n=t[k1]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function et(t){t[mi]=!0}var E1=new Set,T1={};function Ta(t,n){cr(t,n),cr(t+"Capture",n)}function cr(t,n){for(T1[t]=n,t=0;t<n.length;t++)E1.add(n[t])}var Fb=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),N1={},I1={};function qb(t){return Zt.call(I1,t)?!0:Zt.call(N1,t)?!1:Fb.test(t)?I1[t]=!0:(N1[t]=!0,!1)}function eo(t,n,r){if(qb(n))if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+r)}}function to(t,n,r){if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+r)}}function En(t,n,r,o){if(o===null)t.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(n,r,""+o)}}var Hl,D1;function ur(t){if(Hl===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);Hl=n&&n[1]||"",D1=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Hl+t+D1}var Pl=!1;function Fl(t,n){if(!t||Pl)return"";Pl=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var H=function(){throw Error()};if(Object.defineProperty(H.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(H,[])}catch(Q){var Y=Q}Reflect.construct(t,[],H)}else{try{H.call()}catch(Q){Y=Q}t.call(H.prototype)}}else{try{throw Error()}catch(Q){Y=Q}(H=t())&&typeof H.catch=="function"&&H.catch(function(){})}}catch(Q){if(Q&&Y&&typeof Q.stack=="string")return[Q.stack,Y.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=o.DetermineComponentFrameRoot(),p=u[0],w=u[1];if(p&&w){var L=p.split(`
`),U=w.split(`
`);for(l=o=0;o<L.length&&!L[o].includes("DetermineComponentFrameRoot");)o++;for(;l<U.length&&!U[l].includes("DetermineComponentFrameRoot");)l++;if(o===L.length||l===U.length)for(o=L.length-1,l=U.length-1;1<=o&&0<=l&&L[o]!==U[l];)l--;for(;1<=o&&0<=l;o--,l--)if(L[o]!==U[l]){if(o!==1||l!==1)do if(o--,l--,0>l||L[o]!==U[l]){var Z=`
`+L[o].replace(" at new "," at ");return t.displayName&&Z.includes("<anonymous>")&&(Z=Z.replace("<anonymous>",t.displayName)),Z}while(1<=o&&0<=l);break}}}finally{Pl=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?ur(r):""}function Vb(t){switch(t.tag){case 26:case 27:case 5:return ur(t.type);case 16:return ur("Lazy");case 13:return ur("Suspense");case 19:return ur("SuspenseList");case 0:case 15:return Fl(t.type,!1);case 11:return Fl(t.type.render,!1);case 1:return Fl(t.type,!0);case 31:return ur("Activity");default:return""}}function A1(t){try{var n="";do n+=Vb(t),t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function Jt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function z1(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Xb(t){var n=z1(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,u=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return l.call(this)},set:function(p){o=""+p,u.call(this,p)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(p){o=""+p},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function no(t){t._valueTracker||(t._valueTracker=Xb(t))}function R1(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var r=n.getValue(),o="";return t&&(o=z1(t)?t.checked?"true":"false":t.value),t=o,t!==r?(n.setValue(t),!0):!1}function ao(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Wb=/[\n"\\]/g;function Ht(t){return t.replace(Wb,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ql(t,n,r,o,l,u,p,w){t.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?t.type=p:t.removeAttribute("type"),n!=null?p==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Jt(n)):t.value!==""+Jt(n)&&(t.value=""+Jt(n)):p!=="submit"&&p!=="reset"||t.removeAttribute("value"),n!=null?Vl(t,p,Jt(n)):r!=null?Vl(t,p,Jt(r)):o!=null&&t.removeAttribute("value"),l==null&&u!=null&&(t.defaultChecked=!!u),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+Jt(w):t.removeAttribute("name")}function O1(t,n,r,o,l,u,p,w){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),n!=null||r!=null){if(!(u!=="submit"&&u!=="reset"||n!=null))return;r=r!=null?""+Jt(r):"",n=n!=null?""+Jt(n):r,w||n===t.value||(t.value=n),t.defaultValue=n}o=o??l,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=w?t.checked:!!o,t.defaultChecked=!!o,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(t.name=p)}function Vl(t,n,r){n==="number"&&ao(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function dr(t,n,r,o){if(t=t.options,n){n={};for(var l=0;l<r.length;l++)n["$"+r[l]]=!0;for(r=0;r<t.length;r++)l=n.hasOwnProperty("$"+t[r].value),t[r].selected!==l&&(t[r].selected=l),l&&o&&(t[r].defaultSelected=!0)}else{for(r=""+Jt(r),n=null,l=0;l<t.length;l++){if(t[l].value===r){t[l].selected=!0,o&&(t[l].defaultSelected=!0);return}n!==null||t[l].disabled||(n=t[l])}n!==null&&(n.selected=!0)}}function B1(t,n,r){if(n!=null&&(n=""+Jt(n),n!==t.value&&(t.value=n),r==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=r!=null?""+Jt(r):""}function U1(t,n,r,o){if(n==null){if(o!=null){if(r!=null)throw Error(f(92));if(fe(o)){if(1<o.length)throw Error(f(93));o=o[0]}r=o}r==null&&(r=""),n=r}r=Jt(n),t.defaultValue=r,o=t.textContent,o===r&&o!==""&&o!==null&&(t.value=o)}function hr(t,n){if(n){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=n;return}}t.textContent=n}var Kb=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _1(t,n,r){var o=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,r):typeof r!="number"||r===0||Kb.has(n)?n==="float"?t.cssFloat=r:t[n]=(""+r).trim():t[n]=r+"px"}function Y1(t,n,r){if(n!=null&&typeof n!="object")throw Error(f(62));if(t=t.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var l in n)o=n[l],n.hasOwnProperty(l)&&r[l]!==o&&_1(t,l,o)}else for(var u in n)n.hasOwnProperty(u)&&_1(t,u,n[u])}function Xl(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ew=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),tw=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ro(t){return tw.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Wl=null;function Kl(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var mr=null,gr=null;function Q1(t){var n=sr(t);if(n&&(t=n.stateNode)){var r=t[Lt]||null;e:switch(t=n.stateNode,n.type){case"input":if(ql(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Ht(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var o=r[n];if(o!==t&&o.form===t.form){var l=o[Lt]||null;if(!l)throw Error(f(90));ql(o,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<r.length;n++)o=r[n],o.form===t.form&&R1(o)}break e;case"textarea":B1(t,r.value,r.defaultValue);break e;case"select":n=r.value,n!=null&&dr(t,!!r.multiple,n,!1)}}}var ec=!1;function G1(t,n,r){if(ec)return t(n,r);ec=!0;try{var o=t(n);return o}finally{if(ec=!1,(mr!==null||gr!==null)&&(Zo(),mr&&(n=mr,t=gr,gr=mr=null,Q1(n),t)))for(n=0;n<t.length;n++)Q1(t[n])}}function pi(t,n){var r=t.stateNode;if(r===null)return null;var o=r[Lt]||null;if(o===null)return null;r=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(f(231,n,typeof r));return r}var Tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tc=!1;if(Tn)try{var yi={};Object.defineProperty(yi,"passive",{get:function(){tc=!0}}),window.addEventListener("test",yi,yi),window.removeEventListener("test",yi,yi)}catch{tc=!1}var Fn=null,nc=null,io=null;function $1(){if(io)return io;var t,n=nc,r=n.length,o,l="value"in Fn?Fn.value:Fn.textContent,u=l.length;for(t=0;t<r&&n[t]===l[t];t++);var p=r-t;for(o=1;o<=p&&n[r-o]===l[u-o];o++);return io=l.slice(t,1<o?1-o:void 0)}function fo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function oo(){return!0}function Z1(){return!1}function St(t){function n(r,o,l,u,p){this._reactName=r,this._targetInst=l,this.type=o,this.nativeEvent=u,this.target=p,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(r=t[w],this[w]=r?r(u):u[w]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?oo:Z1,this.isPropagationStopped=Z1,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=oo)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=oo)},persist:function(){},isPersistent:oo}),n}var Na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},so=St(Na),bi=v({},Na,{view:0,detail:0}),nw=St(bi),ac,rc,wi,lo=v({},bi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wi&&(wi&&t.type==="mousemove"?(ac=t.screenX-wi.screenX,rc=t.screenY-wi.screenY):rc=ac=0,wi=t),ac)},movementY:function(t){return"movementY"in t?t.movementY:rc}}),J1=St(lo),aw=v({},lo,{dataTransfer:0}),rw=St(aw),iw=v({},bi,{relatedTarget:0}),ic=St(iw),fw=v({},Na,{animationName:0,elapsedTime:0,pseudoElement:0}),ow=St(fw),sw=v({},Na,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),lw=St(sw),cw=v({},Na,{data:0}),H1=St(cw),uw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mw(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=hw[t])?!!n[t]:!1}function fc(){return mw}var gw=v({},bi,{key:function(t){if(t.key){var n=uw[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=fo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?dw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fc,charCode:function(t){return t.type==="keypress"?fo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?fo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),pw=St(gw),yw=v({},lo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),P1=St(yw),bw=v({},bi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fc}),ww=St(bw),vw=v({},Na,{propertyName:0,elapsedTime:0,pseudoElement:0}),xw=St(vw),Mw=v({},lo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),jw=St(Mw),Lw=v({},Na,{newState:0,oldState:0}),Sw=St(Lw),Cw=[9,13,27,32],oc=Tn&&"CompositionEvent"in window,vi=null;Tn&&"documentMode"in document&&(vi=document.documentMode);var kw=Tn&&"TextEvent"in window&&!vi,F1=Tn&&(!oc||vi&&8<vi&&11>=vi),q1=" ",V1=!1;function X1(t,n){switch(t){case"keyup":return Cw.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function W1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var pr=!1;function Ew(t,n){switch(t){case"compositionend":return W1(n);case"keypress":return n.which!==32?null:(V1=!0,q1);case"textInput":return t=n.data,t===q1&&V1?null:t;default:return null}}function Tw(t,n){if(pr)return t==="compositionend"||!oc&&X1(t,n)?(t=$1(),io=nc=Fn=null,pr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return F1&&n.locale!=="ko"?null:n.data;default:return null}}var Nw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function K1(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Nw[t.type]:n==="textarea"}function eh(t,n,r,o){mr?gr?gr.push(o):gr=[o]:mr=o,n=Vo(n,"onChange"),0<n.length&&(r=new so("onChange","change",null,r,o),t.push({event:r,listeners:n}))}var xi=null,Mi=null;function Iw(t){zg(t,0)}function co(t){var n=gi(t);if(R1(n))return t}function th(t,n){if(t==="change")return n}var nh=!1;if(Tn){var sc;if(Tn){var lc="oninput"in document;if(!lc){var ah=document.createElement("div");ah.setAttribute("oninput","return;"),lc=typeof ah.oninput=="function"}sc=lc}else sc=!1;nh=sc&&(!document.documentMode||9<document.documentMode)}function rh(){xi&&(xi.detachEvent("onpropertychange",ih),Mi=xi=null)}function ih(t){if(t.propertyName==="value"&&co(Mi)){var n=[];eh(n,Mi,t,Kl(t)),G1(Iw,n)}}function Dw(t,n,r){t==="focusin"?(rh(),xi=n,Mi=r,xi.attachEvent("onpropertychange",ih)):t==="focusout"&&rh()}function Aw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return co(Mi)}function zw(t,n){if(t==="click")return co(n)}function Rw(t,n){if(t==="input"||t==="change")return co(n)}function Ow(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var At=typeof Object.is=="function"?Object.is:Ow;function ji(t,n){if(At(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var r=Object.keys(t),o=Object.keys(n);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var l=r[o];if(!Zt.call(n,l)||!At(t[l],n[l]))return!1}return!0}function fh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function oh(t,n){var r=fh(t);t=0;for(var o;r;){if(r.nodeType===3){if(o=t+r.textContent.length,t<=n&&o>=n)return{node:r,offset:n-t};t=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=fh(r)}}function sh(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?sh(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function lh(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=ao(t.document);n instanceof t.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)t=n.contentWindow;else break;n=ao(t.document)}return n}function cc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Bw=Tn&&"documentMode"in document&&11>=document.documentMode,yr=null,uc=null,Li=null,dc=!1;function ch(t,n,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;dc||yr==null||yr!==ao(o)||(o=yr,"selectionStart"in o&&cc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Li&&ji(Li,o)||(Li=o,o=Vo(uc,"onSelect"),0<o.length&&(n=new so("onSelect","select",null,n,r),t.push({event:n,listeners:o}),n.target=yr)))}function Ia(t,n){var r={};return r[t.toLowerCase()]=n.toLowerCase(),r["Webkit"+t]="webkit"+n,r["Moz"+t]="moz"+n,r}var br={animationend:Ia("Animation","AnimationEnd"),animationiteration:Ia("Animation","AnimationIteration"),animationstart:Ia("Animation","AnimationStart"),transitionrun:Ia("Transition","TransitionRun"),transitionstart:Ia("Transition","TransitionStart"),transitioncancel:Ia("Transition","TransitionCancel"),transitionend:Ia("Transition","TransitionEnd")},hc={},uh={};Tn&&(uh=document.createElement("div").style,"AnimationEvent"in window||(delete br.animationend.animation,delete br.animationiteration.animation,delete br.animationstart.animation),"TransitionEvent"in window||delete br.transitionend.transition);function Da(t){if(hc[t])return hc[t];if(!br[t])return t;var n=br[t],r;for(r in n)if(n.hasOwnProperty(r)&&r in uh)return hc[t]=n[r];return t}var dh=Da("animationend"),hh=Da("animationiteration"),mh=Da("animationstart"),Uw=Da("transitionrun"),_w=Da("transitionstart"),Yw=Da("transitioncancel"),gh=Da("transitionend"),ph=new Map,mc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");mc.push("scrollEnd");function on(t,n){ph.set(t,n),Ta(n,[t])}var yh=new WeakMap;function Pt(t,n){if(typeof t=="object"&&t!==null){var r=yh.get(t);return r!==void 0?r:(n={value:t,source:n,stack:A1(n)},yh.set(t,n),n)}return{value:t,source:n,stack:A1(n)}}var Ft=[],wr=0,gc=0;function uo(){for(var t=wr,n=gc=wr=0;n<t;){var r=Ft[n];Ft[n++]=null;var o=Ft[n];Ft[n++]=null;var l=Ft[n];Ft[n++]=null;var u=Ft[n];if(Ft[n++]=null,o!==null&&l!==null){var p=o.pending;p===null?l.next=l:(l.next=p.next,p.next=l),o.pending=l}u!==0&&bh(r,l,u)}}function ho(t,n,r,o){Ft[wr++]=t,Ft[wr++]=n,Ft[wr++]=r,Ft[wr++]=o,gc|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function pc(t,n,r,o){return ho(t,n,r,o),mo(t)}function vr(t,n){return ho(t,null,null,n),mo(t)}function bh(t,n,r){t.lanes|=r;var o=t.alternate;o!==null&&(o.lanes|=r);for(var l=!1,u=t.return;u!==null;)u.childLanes|=r,o=u.alternate,o!==null&&(o.childLanes|=r),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(l=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,l&&n!==null&&(l=31-Dt(r),t=u.hiddenUpdates,o=t[l],o===null?t[l]=[n]:o.push(n),n.lane=r|536870912),u):null}function mo(t){if(50<qi)throw qi=0,Mu=null,Error(f(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var xr={};function Qw(t,n,r,o){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zt(t,n,r,o){return new Qw(t,n,r,o)}function yc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Nn(t,n){var r=t.alternate;return r===null?(r=zt(t.tag,n,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=n,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,n=t.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function wh(t,n){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,n=r.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function go(t,n,r,o,l,u){var p=0;if(o=t,typeof t=="function")yc(t)&&(p=1);else if(typeof t=="string")p=$6(t,r,Ue.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case me:return t=zt(31,r,n,l),t.elementType=me,t.lanes=u,t;case I:return Aa(r.children,l,u,n);case S:p=8,l|=24;break;case N:return t=zt(12,r,n,l|2),t.elementType=N,t.lanes=u,t;case C:return t=zt(13,r,n,l),t.elementType=C,t.lanes=u,t;case D:return t=zt(19,r,n,l),t.elementType=D,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R:case _:p=10;break e;case A:p=9;break e;case T:p=11;break e;case G:p=14;break e;case F:p=16,o=null;break e}p=29,r=Error(f(130,t===null?"null":typeof t,"")),o=null}return n=zt(p,r,n,l),n.elementType=t,n.type=o,n.lanes=u,n}function Aa(t,n,r,o){return t=zt(7,t,o,n),t.lanes=r,t}function bc(t,n,r){return t=zt(6,t,null,n),t.lanes=r,t}function wc(t,n,r){return n=zt(4,t.children!==null?t.children:[],t.key,n),n.lanes=r,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Mr=[],jr=0,po=null,yo=0,qt=[],Vt=0,za=null,In=1,Dn="";function Ra(t,n){Mr[jr++]=yo,Mr[jr++]=po,po=t,yo=n}function vh(t,n,r){qt[Vt++]=In,qt[Vt++]=Dn,qt[Vt++]=za,za=t;var o=In;t=Dn;var l=32-Dt(o)-1;o&=~(1<<l),r+=1;var u=32-Dt(n)+l;if(30<u){var p=l-l%5;u=(o&(1<<p)-1).toString(32),o>>=p,l-=p,In=1<<32-Dt(n)+l|r<<l|o,Dn=u+t}else In=1<<u|r<<l|o,Dn=t}function vc(t){t.return!==null&&(Ra(t,1),vh(t,1,0))}function xc(t){for(;t===po;)po=Mr[--jr],Mr[jr]=null,yo=Mr[--jr],Mr[jr]=null;for(;t===za;)za=qt[--Vt],qt[Vt]=null,Dn=qt[--Vt],qt[Vt]=null,In=qt[--Vt],qt[Vt]=null}var bt=null,_e=null,xe=!1,Oa=null,yn=!1,Mc=Error(f(519));function Ba(t){var n=Error(f(418,""));throw ki(Pt(n,t)),Mc}function xh(t){var n=t.stateNode,r=t.type,o=t.memoizedProps;switch(n[ut]=t,n[Lt]=o,r){case"dialog":he("cancel",n),he("close",n);break;case"iframe":case"object":case"embed":he("load",n);break;case"video":case"audio":for(r=0;r<Xi.length;r++)he(Xi[r],n);break;case"source":he("error",n);break;case"img":case"image":case"link":he("error",n),he("load",n);break;case"details":he("toggle",n);break;case"input":he("invalid",n),O1(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),no(n);break;case"select":he("invalid",n);break;case"textarea":he("invalid",n),U1(n,o.value,o.defaultValue,o.children),no(n)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||o.suppressHydrationWarning===!0||Ug(n.textContent,r)?(o.popover!=null&&(he("beforetoggle",n),he("toggle",n)),o.onScroll!=null&&he("scroll",n),o.onScrollEnd!=null&&he("scrollend",n),o.onClick!=null&&(n.onclick=Xo),n=!0):n=!1,n||Ba(t)}function Mh(t){for(bt=t.return;bt;)switch(bt.tag){case 5:case 13:yn=!1;return;case 27:case 3:yn=!0;return;default:bt=bt.return}}function Si(t){if(t!==bt)return!1;if(!xe)return Mh(t),xe=!0,!1;var n=t.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||Uu(t.type,t.memoizedProps)),r=!r),r&&_e&&Ba(t),Mh(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(f(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(r=t.data,r==="/$"){if(n===0){_e=ln(t.nextSibling);break e}n--}else r!=="$"&&r!=="$!"&&r!=="$?"||n++;t=t.nextSibling}_e=null}}else n===27?(n=_e,ca(t.type)?(t=Gu,Gu=null,_e=t):_e=n):_e=bt?ln(t.stateNode.nextSibling):null;return!0}function Ci(){_e=bt=null,xe=!1}function jh(){var t=Oa;return t!==null&&(Et===null?Et=t:Et.push.apply(Et,t),Oa=null),t}function ki(t){Oa===null?Oa=[t]:Oa.push(t)}var jc=Ae(null),Ua=null,An=null;function qn(t,n,r){ve(jc,n._currentValue),n._currentValue=r}function zn(t){t._currentValue=jc.current,ye(jc)}function Lc(t,n,r){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===r)break;t=t.return}}function Sc(t,n,r,o){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var u=l.dependencies;if(u!==null){var p=l.child;u=u.firstContext;e:for(;u!==null;){var w=u;u=l;for(var L=0;L<n.length;L++)if(w.context===n[L]){u.lanes|=r,w=u.alternate,w!==null&&(w.lanes|=r),Lc(u.return,r,t),o||(p=null);break e}u=w.next}}else if(l.tag===18){if(p=l.return,p===null)throw Error(f(341));p.lanes|=r,u=p.alternate,u!==null&&(u.lanes|=r),Lc(p,r,t),p=null}else p=l.child;if(p!==null)p.return=l;else for(p=l;p!==null;){if(p===t){p=null;break}if(l=p.sibling,l!==null){l.return=p.return,p=l;break}p=p.return}l=p}}function Ei(t,n,r,o){t=null;for(var l=n,u=!1;l!==null;){if(!u){if((l.flags&524288)!==0)u=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var p=l.alternate;if(p===null)throw Error(f(387));if(p=p.memoizedProps,p!==null){var w=l.type;At(l.pendingProps.value,p.value)||(t!==null?t.push(w):t=[w])}}else if(l===Cn.current){if(p=l.alternate,p===null)throw Error(f(387));p.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(af):t=[af])}l=l.return}t!==null&&Sc(n,t,r,o),n.flags|=262144}function bo(t){for(t=t.firstContext;t!==null;){if(!At(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function _a(t){Ua=t,An=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function dt(t){return Lh(Ua,t)}function wo(t,n){return Ua===null&&_a(t),Lh(t,n)}function Lh(t,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},An===null){if(t===null)throw Error(f(308));An=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else An=An.next=n;return r}var Gw=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(r,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(r){return r()})}},$w=e.unstable_scheduleCallback,Zw=e.unstable_NormalPriority,Xe={$$typeof:_,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Cc(){return{controller:new Gw,data:new Map,refCount:0}}function Ti(t){t.refCount--,t.refCount===0&&$w(Zw,function(){t.controller.abort()})}var Ni=null,kc=0,Lr=0,Sr=null;function Jw(t,n){if(Ni===null){var r=Ni=[];kc=0,Lr=Tu(),Sr={status:"pending",value:void 0,then:function(o){r.push(o)}}}return kc++,n.then(Sh,Sh),n}function Sh(){if(--kc===0&&Ni!==null){Sr!==null&&(Sr.status="fulfilled");var t=Ni;Ni=null,Lr=0,Sr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Hw(t,n){var r=[],o={status:"pending",value:null,reason:null,then:function(l){r.push(l)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var l=0;l<r.length;l++)(0,r[l])(n)},function(l){for(o.status="rejected",o.reason=l,l=0;l<r.length;l++)(0,r[l])(void 0)}),o}var Ch=B.S;B.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Jw(t,n),Ch!==null&&Ch(t,n)};var Ya=Ae(null);function Ec(){var t=Ya.current;return t!==null?t:Ne.pooledCache}function vo(t,n){n===null?ve(Ya,Ya.current):ve(Ya,n.pool)}function kh(){var t=Ec();return t===null?null:{parent:Xe._currentValue,pool:t}}var Ii=Error(f(460)),Eh=Error(f(474)),xo=Error(f(542)),Tc={then:function(){}};function Th(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Mo(){}function Nh(t,n,r){switch(r=t[r],r===void 0?t.push(n):r!==n&&(n.then(Mo,Mo),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Dh(t),t;default:if(typeof n.status=="string")n.then(Mo,Mo);else{if(t=Ne,t!==null&&100<t.shellSuspendCounter)throw Error(f(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=o}},function(o){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Dh(t),t}throw Di=n,Ii}}var Di=null;function Ih(){if(Di===null)throw Error(f(459));var t=Di;return Di=null,t}function Dh(t){if(t===Ii||t===xo)throw Error(f(483))}var Vn=!1;function Nc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ic(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Xn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Wn(t,n,r){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(je&2)!==0){var l=o.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),o.pending=n,n=mo(t),bh(t,null,r),n}return ho(t,o,n,r),mo(t)}function Ai(t,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,r|=o,n.lanes=r,S1(t,r)}}function Dc(t,n){var r=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var l=null,u=null;if(r=r.firstBaseUpdate,r!==null){do{var p={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};u===null?l=u=p:u=u.next=p,r=r.next}while(r!==null);u===null?l=u=n:u=u.next=n}else l=u=n;r={baseState:o.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:o.shared,callbacks:o.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=n:t.next=n,r.lastBaseUpdate=n}var Ac=!1;function zi(){if(Ac){var t=Sr;if(t!==null)throw t}}function Ri(t,n,r,o){Ac=!1;var l=t.updateQueue;Vn=!1;var u=l.firstBaseUpdate,p=l.lastBaseUpdate,w=l.shared.pending;if(w!==null){l.shared.pending=null;var L=w,U=L.next;L.next=null,p===null?u=U:p.next=U,p=L;var Z=t.alternate;Z!==null&&(Z=Z.updateQueue,w=Z.lastBaseUpdate,w!==p&&(w===null?Z.firstBaseUpdate=U:w.next=U,Z.lastBaseUpdate=L))}if(u!==null){var H=l.baseState;p=0,Z=U=L=null,w=u;do{var Y=w.lane&-536870913,Q=Y!==w.lane;if(Q?(be&Y)===Y:(o&Y)===Y){Y!==0&&Y===Lr&&(Ac=!0),Z!==null&&(Z=Z.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var ne=t,ee=w;Y=n;var Ee=r;switch(ee.tag){case 1:if(ne=ee.payload,typeof ne=="function"){H=ne.call(Ee,H,Y);break e}H=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=ee.payload,Y=typeof ne=="function"?ne.call(Ee,H,Y):ne,Y==null)break e;H=v({},H,Y);break e;case 2:Vn=!0}}Y=w.callback,Y!==null&&(t.flags|=64,Q&&(t.flags|=8192),Q=l.callbacks,Q===null?l.callbacks=[Y]:Q.push(Y))}else Q={lane:Y,tag:w.tag,payload:w.payload,callback:w.callback,next:null},Z===null?(U=Z=Q,L=H):Z=Z.next=Q,p|=Y;if(w=w.next,w===null){if(w=l.shared.pending,w===null)break;Q=w,w=Q.next,Q.next=null,l.lastBaseUpdate=Q,l.shared.pending=null}}while(!0);Z===null&&(L=H),l.baseState=L,l.firstBaseUpdate=U,l.lastBaseUpdate=Z,u===null&&(l.shared.lanes=0),fa|=p,t.lanes=p,t.memoizedState=H}}function Ah(t,n){if(typeof t!="function")throw Error(f(191,t));t.call(n)}function zh(t,n){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)Ah(r[t],n)}var Cr=Ae(null),jo=Ae(0);function Rh(t,n){t=Qn,ve(jo,t),ve(Cr,n),Qn=t|n.baseLanes}function zc(){ve(jo,Qn),ve(Cr,Cr.current)}function Rc(){Qn=jo.current,ye(Cr),ye(jo)}var Kn=0,se=null,Ce=null,He=null,Lo=!1,kr=!1,Qa=!1,So=0,Oi=0,Er=null,Pw=0;function $e(){throw Error(f(321))}function Oc(t,n){if(n===null)return!1;for(var r=0;r<n.length&&r<t.length;r++)if(!At(t[r],n[r]))return!1;return!0}function Bc(t,n,r,o,l,u){return Kn=u,se=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=t===null||t.memoizedState===null?bm:wm,Qa=!1,u=r(o,l),Qa=!1,kr&&(u=Bh(n,r,o,l)),Oh(t),u}function Oh(t){B.H=Io;var n=Ce!==null&&Ce.next!==null;if(Kn=0,He=Ce=se=null,Lo=!1,Oi=0,Er=null,n)throw Error(f(300));t===null||tt||(t=t.dependencies,t!==null&&bo(t)&&(tt=!0))}function Bh(t,n,r,o){se=t;var l=0;do{if(kr&&(Er=null),Oi=0,kr=!1,25<=l)throw Error(f(301));if(l+=1,He=Ce=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}B.H=e6,u=n(r,o)}while(kr);return u}function Fw(){var t=B.H,n=t.useState()[0];return n=typeof n.then=="function"?Bi(n):n,t=t.useState()[0],(Ce!==null?Ce.memoizedState:null)!==t&&(se.flags|=1024),n}function Uc(){var t=So!==0;return So=0,t}function _c(t,n,r){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~r}function Yc(t){if(Lo){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Lo=!1}Kn=0,He=Ce=se=null,kr=!1,Oi=So=0,Er=null}function Ct(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?se.memoizedState=He=t:He=He.next=t,He}function Pe(){if(Ce===null){var t=se.alternate;t=t!==null?t.memoizedState:null}else t=Ce.next;var n=He===null?se.memoizedState:He.next;if(n!==null)He=n,Ce=t;else{if(t===null)throw se.alternate===null?Error(f(467)):Error(f(310));Ce=t,t={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},He===null?se.memoizedState=He=t:He=He.next=t}return He}function Qc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Bi(t){var n=Oi;return Oi+=1,Er===null&&(Er=[]),t=Nh(Er,t,n),n=se,(He===null?n.memoizedState:He.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?bm:wm),t}function Co(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Bi(t);if(t.$$typeof===_)return dt(t)}throw Error(f(438,String(t)))}function Gc(t){var n=null,r=se.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var o=se.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=Qc(),se.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(t),o=0;o<t;o++)r[o]=Ke;return n.index++,r}function Rn(t,n){return typeof n=="function"?n(t):n}function ko(t){var n=Pe();return $c(n,Ce,t)}function $c(t,n,r){var o=t.queue;if(o===null)throw Error(f(311));o.lastRenderedReducer=r;var l=t.baseQueue,u=o.pending;if(u!==null){if(l!==null){var p=l.next;l.next=u.next,u.next=p}n.baseQueue=l=u,o.pending=null}if(u=t.baseState,l===null)t.memoizedState=u;else{n=l.next;var w=p=null,L=null,U=n,Z=!1;do{var H=U.lane&-536870913;if(H!==U.lane?(be&H)===H:(Kn&H)===H){var Y=U.revertLane;if(Y===0)L!==null&&(L=L.next={lane:0,revertLane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),H===Lr&&(Z=!0);else if((Kn&Y)===Y){U=U.next,Y===Lr&&(Z=!0);continue}else H={lane:0,revertLane:U.revertLane,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},L===null?(w=L=H,p=u):L=L.next=H,se.lanes|=Y,fa|=Y;H=U.action,Qa&&r(u,H),u=U.hasEagerState?U.eagerState:r(u,H)}else Y={lane:H,revertLane:U.revertLane,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},L===null?(w=L=Y,p=u):L=L.next=Y,se.lanes|=H,fa|=H;U=U.next}while(U!==null&&U!==n);if(L===null?p=u:L.next=w,!At(u,t.memoizedState)&&(tt=!0,Z&&(r=Sr,r!==null)))throw r;t.memoizedState=u,t.baseState=p,t.baseQueue=L,o.lastRenderedState=u}return l===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Zc(t){var n=Pe(),r=n.queue;if(r===null)throw Error(f(311));r.lastRenderedReducer=t;var o=r.dispatch,l=r.pending,u=n.memoizedState;if(l!==null){r.pending=null;var p=l=l.next;do u=t(u,p.action),p=p.next;while(p!==l);At(u,n.memoizedState)||(tt=!0),n.memoizedState=u,n.baseQueue===null&&(n.baseState=u),r.lastRenderedState=u}return[u,o]}function Uh(t,n,r){var o=se,l=Pe(),u=xe;if(u){if(r===void 0)throw Error(f(407));r=r()}else r=n();var p=!At((Ce||l).memoizedState,r);p&&(l.memoizedState=r,tt=!0),l=l.queue;var w=Qh.bind(null,o,l,t);if(Ui(2048,8,w,[t]),l.getSnapshot!==n||p||He!==null&&He.memoizedState.tag&1){if(o.flags|=2048,Tr(9,Eo(),Yh.bind(null,o,l,r,n),null),Ne===null)throw Error(f(349));u||(Kn&124)!==0||_h(o,n,r)}return r}function _h(t,n,r){t.flags|=16384,t={getSnapshot:n,value:r},n=se.updateQueue,n===null?(n=Qc(),se.updateQueue=n,n.stores=[t]):(r=n.stores,r===null?n.stores=[t]:r.push(t))}function Yh(t,n,r,o){n.value=r,n.getSnapshot=o,Gh(n)&&$h(t)}function Qh(t,n,r){return r(function(){Gh(n)&&$h(t)})}function Gh(t){var n=t.getSnapshot;t=t.value;try{var r=n();return!At(t,r)}catch{return!0}}function $h(t){var n=vr(t,2);n!==null&&_t(n,t,2)}function Jc(t){var n=Ct();if(typeof t=="function"){var r=t;if(t=r(),Qa){Hn(!0);try{r()}finally{Hn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rn,lastRenderedState:t},n}function Zh(t,n,r,o){return t.baseState=r,$c(t,Ce,typeof o=="function"?o:Rn)}function qw(t,n,r,o,l){if(No(t))throw Error(f(485));if(t=n.action,t!==null){var u={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){u.listeners.push(p)}};B.T!==null?r(!0):u.isTransition=!1,o(u),r=n.pending,r===null?(u.next=n.pending=u,Jh(n,u)):(u.next=r.next,n.pending=r.next=u)}}function Jh(t,n){var r=n.action,o=n.payload,l=t.state;if(n.isTransition){var u=B.T,p={};B.T=p;try{var w=r(l,o),L=B.S;L!==null&&L(p,w),Hh(t,n,w)}catch(U){Hc(t,n,U)}finally{B.T=u}}else try{u=r(l,o),Hh(t,n,u)}catch(U){Hc(t,n,U)}}function Hh(t,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){Ph(t,n,o)},function(o){return Hc(t,n,o)}):Ph(t,n,r)}function Ph(t,n,r){n.status="fulfilled",n.value=r,Fh(n),t.state=r,n=t.pending,n!==null&&(r=n.next,r===n?t.pending=null:(r=r.next,n.next=r,Jh(t,r)))}function Hc(t,n,r){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=r,Fh(n),n=n.next;while(n!==o)}t.action=null}function Fh(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function qh(t,n){return n}function Vh(t,n){if(xe){var r=Ne.formState;if(r!==null){e:{var o=se;if(xe){if(_e){t:{for(var l=_e,u=yn;l.nodeType!==8;){if(!u){l=null;break t}if(l=ln(l.nextSibling),l===null){l=null;break t}}u=l.data,l=u==="F!"||u==="F"?l:null}if(l){_e=ln(l.nextSibling),o=l.data==="F!";break e}}Ba(o)}o=!1}o&&(n=r[0])}}return r=Ct(),r.memoizedState=r.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qh,lastRenderedState:n},r.queue=o,r=gm.bind(null,se,o),o.dispatch=r,o=Jc(!1),u=Xc.bind(null,se,!1,o.queue),o=Ct(),l={state:n,dispatch:null,action:t,pending:null},o.queue=l,r=qw.bind(null,se,l,u,r),l.dispatch=r,o.memoizedState=t,[n,r,!1]}function Xh(t){var n=Pe();return Wh(n,Ce,t)}function Wh(t,n,r){if(n=$c(t,n,qh)[0],t=ko(Rn)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Bi(n)}catch(p){throw p===Ii?xo:p}else o=n;n=Pe();var l=n.queue,u=l.dispatch;return r!==n.memoizedState&&(se.flags|=2048,Tr(9,Eo(),Vw.bind(null,l,r),null)),[o,u,t]}function Vw(t,n){t.action=n}function Kh(t){var n=Pe(),r=Ce;if(r!==null)return Wh(n,r,t);Pe(),n=n.memoizedState,r=Pe();var o=r.queue.dispatch;return r.memoizedState=t,[n,o,!1]}function Tr(t,n,r,o){return t={tag:t,create:r,deps:o,inst:n,next:null},n=se.updateQueue,n===null&&(n=Qc(),se.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=t.next=t:(o=r.next,r.next=t,t.next=o,n.lastEffect=t),t}function Eo(){return{destroy:void 0,resource:void 0}}function em(){return Pe().memoizedState}function To(t,n,r,o){var l=Ct();o=o===void 0?null:o,se.flags|=t,l.memoizedState=Tr(1|n,Eo(),r,o)}function Ui(t,n,r,o){var l=Pe();o=o===void 0?null:o;var u=l.memoizedState.inst;Ce!==null&&o!==null&&Oc(o,Ce.memoizedState.deps)?l.memoizedState=Tr(n,u,r,o):(se.flags|=t,l.memoizedState=Tr(1|n,u,r,o))}function tm(t,n){To(8390656,8,t,n)}function nm(t,n){Ui(2048,8,t,n)}function am(t,n){return Ui(4,2,t,n)}function rm(t,n){return Ui(4,4,t,n)}function im(t,n){if(typeof n=="function"){t=t();var r=n(t);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function fm(t,n,r){r=r!=null?r.concat([t]):null,Ui(4,4,im.bind(null,n,t),r)}function Pc(){}function om(t,n){var r=Pe();n=n===void 0?null:n;var o=r.memoizedState;return n!==null&&Oc(n,o[1])?o[0]:(r.memoizedState=[t,n],t)}function sm(t,n){var r=Pe();n=n===void 0?null:n;var o=r.memoizedState;if(n!==null&&Oc(n,o[1]))return o[0];if(o=t(),Qa){Hn(!0);try{t()}finally{Hn(!1)}}return r.memoizedState=[o,n],o}function Fc(t,n,r){return r===void 0||(Kn&1073741824)!==0?t.memoizedState=n:(t.memoizedState=r,t=ug(),se.lanes|=t,fa|=t,r)}function lm(t,n,r,o){return At(r,n)?r:Cr.current!==null?(t=Fc(t,r,o),At(t,n)||(tt=!0),t):(Kn&42)===0?(tt=!0,t.memoizedState=r):(t=ug(),se.lanes|=t,fa|=t,n)}function cm(t,n,r,o,l){var u=P.p;P.p=u!==0&&8>u?u:8;var p=B.T,w={};B.T=w,Xc(t,!1,n,r);try{var L=l(),U=B.S;if(U!==null&&U(w,L),L!==null&&typeof L=="object"&&typeof L.then=="function"){var Z=Hw(L,o);_i(t,n,Z,Ut(t))}else _i(t,n,o,Ut(t))}catch(H){_i(t,n,{then:function(){},status:"rejected",reason:H},Ut())}finally{P.p=u,B.T=p}}function Xw(){}function qc(t,n,r,o){if(t.tag!==5)throw Error(f(476));var l=um(t).queue;cm(t,l,n,q,r===null?Xw:function(){return dm(t),r(o)})}function um(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rn,lastRenderedState:q},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rn,lastRenderedState:r},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function dm(t){var n=um(t).next.queue;_i(t,n,{},Ut())}function Vc(){return dt(af)}function hm(){return Pe().memoizedState}function mm(){return Pe().memoizedState}function Ww(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var r=Ut();t=Xn(r);var o=Wn(n,t,r);o!==null&&(_t(o,n,r),Ai(o,n,r)),n={cache:Cc()},t.payload=n;return}n=n.return}}function Kw(t,n,r){var o=Ut();r={lane:o,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},No(t)?pm(n,r):(r=pc(t,n,r,o),r!==null&&(_t(r,t,o),ym(r,n,o)))}function gm(t,n,r){var o=Ut();_i(t,n,r,o)}function _i(t,n,r,o){var l={lane:o,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(No(t))pm(n,l);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=n.lastRenderedReducer,u!==null))try{var p=n.lastRenderedState,w=u(p,r);if(l.hasEagerState=!0,l.eagerState=w,At(w,p))return ho(t,n,l,0),Ne===null&&uo(),!1}catch{}finally{}if(r=pc(t,n,l,o),r!==null)return _t(r,t,o),ym(r,n,o),!0}return!1}function Xc(t,n,r,o){if(o={lane:2,revertLane:Tu(),action:o,hasEagerState:!1,eagerState:null,next:null},No(t)){if(n)throw Error(f(479))}else n=pc(t,r,o,2),n!==null&&_t(n,t,2)}function No(t){var n=t.alternate;return t===se||n!==null&&n===se}function pm(t,n){kr=Lo=!0;var r=t.pending;r===null?n.next=n:(n.next=r.next,r.next=n),t.pending=n}function ym(t,n,r){if((r&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,r|=o,n.lanes=r,S1(t,r)}}var Io={readContext:dt,use:Co,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e},bm={readContext:dt,use:Co,useCallback:function(t,n){return Ct().memoizedState=[t,n===void 0?null:n],t},useContext:dt,useEffect:tm,useImperativeHandle:function(t,n,r){r=r!=null?r.concat([t]):null,To(4194308,4,im.bind(null,n,t),r)},useLayoutEffect:function(t,n){return To(4194308,4,t,n)},useInsertionEffect:function(t,n){To(4,2,t,n)},useMemo:function(t,n){var r=Ct();n=n===void 0?null:n;var o=t();if(Qa){Hn(!0);try{t()}finally{Hn(!1)}}return r.memoizedState=[o,n],o},useReducer:function(t,n,r){var o=Ct();if(r!==void 0){var l=r(n);if(Qa){Hn(!0);try{r(n)}finally{Hn(!1)}}}else l=n;return o.memoizedState=o.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},o.queue=t,t=t.dispatch=Kw.bind(null,se,t),[o.memoizedState,t]},useRef:function(t){var n=Ct();return t={current:t},n.memoizedState=t},useState:function(t){t=Jc(t);var n=t.queue,r=gm.bind(null,se,n);return n.dispatch=r,[t.memoizedState,r]},useDebugValue:Pc,useDeferredValue:function(t,n){var r=Ct();return Fc(r,t,n)},useTransition:function(){var t=Jc(!1);return t=cm.bind(null,se,t.queue,!0,!1),Ct().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,r){var o=se,l=Ct();if(xe){if(r===void 0)throw Error(f(407));r=r()}else{if(r=n(),Ne===null)throw Error(f(349));(be&124)!==0||_h(o,n,r)}l.memoizedState=r;var u={value:r,getSnapshot:n};return l.queue=u,tm(Qh.bind(null,o,u,t),[t]),o.flags|=2048,Tr(9,Eo(),Yh.bind(null,o,u,r,n),null),r},useId:function(){var t=Ct(),n=Ne.identifierPrefix;if(xe){var r=Dn,o=In;r=(o&~(1<<32-Dt(o)-1)).toString(32)+r,n="«"+n+"R"+r,r=So++,0<r&&(n+="H"+r.toString(32)),n+="»"}else r=Pw++,n="«"+n+"r"+r.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:Vc,useFormState:Vh,useActionState:Vh,useOptimistic:function(t){var n=Ct();n.memoizedState=n.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=Xc.bind(null,se,!0,r),r.dispatch=n,[t,n]},useMemoCache:Gc,useCacheRefresh:function(){return Ct().memoizedState=Ww.bind(null,se)}},wm={readContext:dt,use:Co,useCallback:om,useContext:dt,useEffect:nm,useImperativeHandle:fm,useInsertionEffect:am,useLayoutEffect:rm,useMemo:sm,useReducer:ko,useRef:em,useState:function(){return ko(Rn)},useDebugValue:Pc,useDeferredValue:function(t,n){var r=Pe();return lm(r,Ce.memoizedState,t,n)},useTransition:function(){var t=ko(Rn)[0],n=Pe().memoizedState;return[typeof t=="boolean"?t:Bi(t),n]},useSyncExternalStore:Uh,useId:hm,useHostTransitionStatus:Vc,useFormState:Xh,useActionState:Xh,useOptimistic:function(t,n){var r=Pe();return Zh(r,Ce,t,n)},useMemoCache:Gc,useCacheRefresh:mm},e6={readContext:dt,use:Co,useCallback:om,useContext:dt,useEffect:nm,useImperativeHandle:fm,useInsertionEffect:am,useLayoutEffect:rm,useMemo:sm,useReducer:Zc,useRef:em,useState:function(){return Zc(Rn)},useDebugValue:Pc,useDeferredValue:function(t,n){var r=Pe();return Ce===null?Fc(r,t,n):lm(r,Ce.memoizedState,t,n)},useTransition:function(){var t=Zc(Rn)[0],n=Pe().memoizedState;return[typeof t=="boolean"?t:Bi(t),n]},useSyncExternalStore:Uh,useId:hm,useHostTransitionStatus:Vc,useFormState:Kh,useActionState:Kh,useOptimistic:function(t,n){var r=Pe();return Ce!==null?Zh(r,Ce,t,n):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:Gc,useCacheRefresh:mm},Nr=null,Yi=0;function Do(t){var n=Yi;return Yi+=1,Nr===null&&(Nr=[]),Nh(Nr,t,n)}function Qi(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ao(t,n){throw n.$$typeof===M?Error(f(525)):(t=Object.prototype.toString.call(n),Error(f(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function vm(t){var n=t._init;return n(t._payload)}function xm(t){function n(z,E){if(t){var O=z.deletions;O===null?(z.deletions=[E],z.flags|=16):O.push(E)}}function r(z,E){if(!t)return null;for(;E!==null;)n(z,E),E=E.sibling;return null}function o(z){for(var E=new Map;z!==null;)z.key!==null?E.set(z.key,z):E.set(z.index,z),z=z.sibling;return E}function l(z,E){return z=Nn(z,E),z.index=0,z.sibling=null,z}function u(z,E,O){return z.index=O,t?(O=z.alternate,O!==null?(O=O.index,O<E?(z.flags|=67108866,E):O):(z.flags|=67108866,E)):(z.flags|=1048576,E)}function p(z){return t&&z.alternate===null&&(z.flags|=67108866),z}function w(z,E,O,J){return E===null||E.tag!==6?(E=bc(O,z.mode,J),E.return=z,E):(E=l(E,O),E.return=z,E)}function L(z,E,O,J){var V=O.type;return V===I?Z(z,E,O.props.children,J,O.key):E!==null&&(E.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===F&&vm(V)===E.type)?(E=l(E,O.props),Qi(E,O),E.return=z,E):(E=go(O.type,O.key,O.props,null,z.mode,J),Qi(E,O),E.return=z,E)}function U(z,E,O,J){return E===null||E.tag!==4||E.stateNode.containerInfo!==O.containerInfo||E.stateNode.implementation!==O.implementation?(E=wc(O,z.mode,J),E.return=z,E):(E=l(E,O.children||[]),E.return=z,E)}function Z(z,E,O,J,V){return E===null||E.tag!==7?(E=Aa(O,z.mode,J,V),E.return=z,E):(E=l(E,O),E.return=z,E)}function H(z,E,O){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=bc(""+E,z.mode,O),E.return=z,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case j:return O=go(E.type,E.key,E.props,null,z.mode,O),Qi(O,E),O.return=z,O;case k:return E=wc(E,z.mode,O),E.return=z,E;case F:var J=E._init;return E=J(E._payload),H(z,E,O)}if(fe(E)||Ge(E))return E=Aa(E,z.mode,O,null),E.return=z,E;if(typeof E.then=="function")return H(z,Do(E),O);if(E.$$typeof===_)return H(z,wo(z,E),O);Ao(z,E)}return null}function Y(z,E,O,J){var V=E!==null?E.key:null;if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return V!==null?null:w(z,E,""+O,J);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case j:return O.key===V?L(z,E,O,J):null;case k:return O.key===V?U(z,E,O,J):null;case F:return V=O._init,O=V(O._payload),Y(z,E,O,J)}if(fe(O)||Ge(O))return V!==null?null:Z(z,E,O,J,null);if(typeof O.then=="function")return Y(z,E,Do(O),J);if(O.$$typeof===_)return Y(z,E,wo(z,O),J);Ao(z,O)}return null}function Q(z,E,O,J,V){if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return z=z.get(O)||null,w(E,z,""+J,V);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case j:return z=z.get(J.key===null?O:J.key)||null,L(E,z,J,V);case k:return z=z.get(J.key===null?O:J.key)||null,U(E,z,J,V);case F:var le=J._init;return J=le(J._payload),Q(z,E,O,J,V)}if(fe(J)||Ge(J))return z=z.get(O)||null,Z(E,z,J,V,null);if(typeof J.then=="function")return Q(z,E,O,Do(J),V);if(J.$$typeof===_)return Q(z,E,O,wo(E,J),V);Ao(E,J)}return null}function ne(z,E,O,J){for(var V=null,le=null,W=E,te=E=0,at=null;W!==null&&te<O.length;te++){W.index>te?(at=W,W=null):at=W.sibling;var we=Y(z,W,O[te],J);if(we===null){W===null&&(W=at);break}t&&W&&we.alternate===null&&n(z,W),E=u(we,E,te),le===null?V=we:le.sibling=we,le=we,W=at}if(te===O.length)return r(z,W),xe&&Ra(z,te),V;if(W===null){for(;te<O.length;te++)W=H(z,O[te],J),W!==null&&(E=u(W,E,te),le===null?V=W:le.sibling=W,le=W);return xe&&Ra(z,te),V}for(W=o(W);te<O.length;te++)at=Q(W,z,te,O[te],J),at!==null&&(t&&at.alternate!==null&&W.delete(at.key===null?te:at.key),E=u(at,E,te),le===null?V=at:le.sibling=at,le=at);return t&&W.forEach(function(ga){return n(z,ga)}),xe&&Ra(z,te),V}function ee(z,E,O,J){if(O==null)throw Error(f(151));for(var V=null,le=null,W=E,te=E=0,at=null,we=O.next();W!==null&&!we.done;te++,we=O.next()){W.index>te?(at=W,W=null):at=W.sibling;var ga=Y(z,W,we.value,J);if(ga===null){W===null&&(W=at);break}t&&W&&ga.alternate===null&&n(z,W),E=u(ga,E,te),le===null?V=ga:le.sibling=ga,le=ga,W=at}if(we.done)return r(z,W),xe&&Ra(z,te),V;if(W===null){for(;!we.done;te++,we=O.next())we=H(z,we.value,J),we!==null&&(E=u(we,E,te),le===null?V=we:le.sibling=we,le=we);return xe&&Ra(z,te),V}for(W=o(W);!we.done;te++,we=O.next())we=Q(W,z,te,we.value,J),we!==null&&(t&&we.alternate!==null&&W.delete(we.key===null?te:we.key),E=u(we,E,te),le===null?V=we:le.sibling=we,le=we);return t&&W.forEach(function(tv){return n(z,tv)}),xe&&Ra(z,te),V}function Ee(z,E,O,J){if(typeof O=="object"&&O!==null&&O.type===I&&O.key===null&&(O=O.props.children),typeof O=="object"&&O!==null){switch(O.$$typeof){case j:e:{for(var V=O.key;E!==null;){if(E.key===V){if(V=O.type,V===I){if(E.tag===7){r(z,E.sibling),J=l(E,O.props.children),J.return=z,z=J;break e}}else if(E.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===F&&vm(V)===E.type){r(z,E.sibling),J=l(E,O.props),Qi(J,O),J.return=z,z=J;break e}r(z,E);break}else n(z,E);E=E.sibling}O.type===I?(J=Aa(O.props.children,z.mode,J,O.key),J.return=z,z=J):(J=go(O.type,O.key,O.props,null,z.mode,J),Qi(J,O),J.return=z,z=J)}return p(z);case k:e:{for(V=O.key;E!==null;){if(E.key===V)if(E.tag===4&&E.stateNode.containerInfo===O.containerInfo&&E.stateNode.implementation===O.implementation){r(z,E.sibling),J=l(E,O.children||[]),J.return=z,z=J;break e}else{r(z,E);break}else n(z,E);E=E.sibling}J=wc(O,z.mode,J),J.return=z,z=J}return p(z);case F:return V=O._init,O=V(O._payload),Ee(z,E,O,J)}if(fe(O))return ne(z,E,O,J);if(Ge(O)){if(V=Ge(O),typeof V!="function")throw Error(f(150));return O=V.call(O),ee(z,E,O,J)}if(typeof O.then=="function")return Ee(z,E,Do(O),J);if(O.$$typeof===_)return Ee(z,E,wo(z,O),J);Ao(z,O)}return typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint"?(O=""+O,E!==null&&E.tag===6?(r(z,E.sibling),J=l(E,O),J.return=z,z=J):(r(z,E),J=bc(O,z.mode,J),J.return=z,z=J),p(z)):r(z,E)}return function(z,E,O,J){try{Yi=0;var V=Ee(z,E,O,J);return Nr=null,V}catch(W){if(W===Ii||W===xo)throw W;var le=zt(29,W,null,z.mode);return le.lanes=J,le.return=z,le}finally{}}}var Ir=xm(!0),Mm=xm(!1),Xt=Ae(null),bn=null;function ea(t){var n=t.alternate;ve(We,We.current&1),ve(Xt,t),bn===null&&(n===null||Cr.current!==null||n.memoizedState!==null)&&(bn=t)}function jm(t){if(t.tag===22){if(ve(We,We.current),ve(Xt,t),bn===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(bn=t)}}else ta()}function ta(){ve(We,We.current),ve(Xt,Xt.current)}function On(t){ye(Xt),bn===t&&(bn=null),ye(We)}var We=Ae(0);function zo(t){for(var n=t;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||Qu(r)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Wc(t,n,r,o){n=t.memoizedState,r=r(o,n),r=r==null?n:v({},n,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Kc={enqueueSetState:function(t,n,r){t=t._reactInternals;var o=Ut(),l=Xn(o);l.payload=n,r!=null&&(l.callback=r),n=Wn(t,l,o),n!==null&&(_t(n,t,o),Ai(n,t,o))},enqueueReplaceState:function(t,n,r){t=t._reactInternals;var o=Ut(),l=Xn(o);l.tag=1,l.payload=n,r!=null&&(l.callback=r),n=Wn(t,l,o),n!==null&&(_t(n,t,o),Ai(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var r=Ut(),o=Xn(r);o.tag=2,n!=null&&(o.callback=n),n=Wn(t,o,r),n!==null&&(_t(n,t,r),Ai(n,t,r))}};function Lm(t,n,r,o,l,u,p){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,u,p):n.prototype&&n.prototype.isPureReactComponent?!ji(r,o)||!ji(l,u):!0}function Sm(t,n,r,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,o),n.state!==t&&Kc.enqueueReplaceState(n,n.state,null)}function Ga(t,n){var r=n;if("ref"in n){r={};for(var o in n)o!=="ref"&&(r[o]=n[o])}if(t=t.defaultProps){r===n&&(r=v({},r));for(var l in t)r[l]===void 0&&(r[l]=t[l])}return r}var Ro=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Cm(t){Ro(t)}function km(t){console.error(t)}function Em(t){Ro(t)}function Oo(t,n){try{var r=t.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Tm(t,n,r){try{var o=t.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function eu(t,n,r){return r=Xn(r),r.tag=3,r.payload={element:null},r.callback=function(){Oo(t,n)},r}function Nm(t){return t=Xn(t),t.tag=3,t}function Im(t,n,r,o){var l=r.type.getDerivedStateFromError;if(typeof l=="function"){var u=o.value;t.payload=function(){return l(u)},t.callback=function(){Tm(n,r,o)}}var p=r.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(t.callback=function(){Tm(n,r,o),typeof l!="function"&&(oa===null?oa=new Set([this]):oa.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})})}function t6(t,n,r,o,l){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=r.alternate,n!==null&&Ei(n,r,l,!0),r=Xt.current,r!==null){switch(r.tag){case 13:return bn===null?Lu():r.alternate===null&&Ye===0&&(Ye=3),r.flags&=-257,r.flags|=65536,r.lanes=l,o===Tc?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([o]):n.add(o),Cu(t,o,l)),!1;case 22:return r.flags|=65536,o===Tc?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([o]):r.add(o)),Cu(t,o,l)),!1}throw Error(f(435,r.tag))}return Cu(t,o,l),Lu(),!1}if(xe)return n=Xt.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,o!==Mc&&(t=Error(f(422),{cause:o}),ki(Pt(t,r)))):(o!==Mc&&(n=Error(f(423),{cause:o}),ki(Pt(n,r))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,o=Pt(o,r),l=eu(t.stateNode,o,l),Dc(t,l),Ye!==4&&(Ye=2)),!1;var u=Error(f(520),{cause:o});if(u=Pt(u,r),Fi===null?Fi=[u]:Fi.push(u),Ye!==4&&(Ye=2),n===null)return!0;o=Pt(o,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,t=l&-l,r.lanes|=t,t=eu(r.stateNode,o,t),Dc(r,t),!1;case 1:if(n=r.type,u=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(oa===null||!oa.has(u))))return r.flags|=65536,l&=-l,r.lanes|=l,l=Nm(l),Im(l,t,r,o),Dc(r,l),!1}r=r.return}while(r!==null);return!1}var Dm=Error(f(461)),tt=!1;function ot(t,n,r,o){n.child=t===null?Mm(n,null,r,o):Ir(n,t.child,r,o)}function Am(t,n,r,o,l){r=r.render;var u=n.ref;if("ref"in o){var p={};for(var w in o)w!=="ref"&&(p[w]=o[w])}else p=o;return _a(n),o=Bc(t,n,r,p,u,l),w=Uc(),t!==null&&!tt?(_c(t,n,l),Bn(t,n,l)):(xe&&w&&vc(n),n.flags|=1,ot(t,n,o,l),n.child)}function zm(t,n,r,o,l){if(t===null){var u=r.type;return typeof u=="function"&&!yc(u)&&u.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=u,Rm(t,n,u,o,l)):(t=go(r.type,null,o,n,n.mode,l),t.ref=n.ref,t.return=n,n.child=t)}if(u=t.child,!su(t,l)){var p=u.memoizedProps;if(r=r.compare,r=r!==null?r:ji,r(p,o)&&t.ref===n.ref)return Bn(t,n,l)}return n.flags|=1,t=Nn(u,o),t.ref=n.ref,t.return=n,n.child=t}function Rm(t,n,r,o,l){if(t!==null){var u=t.memoizedProps;if(ji(u,o)&&t.ref===n.ref)if(tt=!1,n.pendingProps=o=u,su(t,l))(t.flags&131072)!==0&&(tt=!0);else return n.lanes=t.lanes,Bn(t,n,l)}return tu(t,n,r,o,l)}function Om(t,n,r){var o=n.pendingProps,l=o.children,u=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=u!==null?u.baseLanes|r:r,t!==null){for(l=n.child=t.child,u=0;l!==null;)u=u|l.lanes|l.childLanes,l=l.sibling;n.childLanes=u&~o}else n.childLanes=0,n.child=null;return Bm(t,n,o,r)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&vo(n,u!==null?u.cachePool:null),u!==null?Rh(n,u):zc(),jm(n);else return n.lanes=n.childLanes=536870912,Bm(t,n,u!==null?u.baseLanes|r:r,r)}else u!==null?(vo(n,u.cachePool),Rh(n,u),ta(),n.memoizedState=null):(t!==null&&vo(n,null),zc(),ta());return ot(t,n,l,r),n.child}function Bm(t,n,r,o){var l=Ec();return l=l===null?null:{parent:Xe._currentValue,pool:l},n.memoizedState={baseLanes:r,cachePool:l},t!==null&&vo(n,null),zc(),jm(n),t!==null&&Ei(t,n,o,!0),null}function Bo(t,n){var r=n.ref;if(r===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(f(284));(t===null||t.ref!==r)&&(n.flags|=4194816)}}function tu(t,n,r,o,l){return _a(n),r=Bc(t,n,r,o,void 0,l),o=Uc(),t!==null&&!tt?(_c(t,n,l),Bn(t,n,l)):(xe&&o&&vc(n),n.flags|=1,ot(t,n,r,l),n.child)}function Um(t,n,r,o,l,u){return _a(n),n.updateQueue=null,r=Bh(n,o,r,l),Oh(t),o=Uc(),t!==null&&!tt?(_c(t,n,u),Bn(t,n,u)):(xe&&o&&vc(n),n.flags|=1,ot(t,n,r,u),n.child)}function _m(t,n,r,o,l){if(_a(n),n.stateNode===null){var u=xr,p=r.contextType;typeof p=="object"&&p!==null&&(u=dt(p)),u=new r(o,u),n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Kc,n.stateNode=u,u._reactInternals=n,u=n.stateNode,u.props=o,u.state=n.memoizedState,u.refs={},Nc(n),p=r.contextType,u.context=typeof p=="object"&&p!==null?dt(p):xr,u.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(Wc(n,r,p,o),u.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(p=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),p!==u.state&&Kc.enqueueReplaceState(u,u.state,null),Ri(n,o,u,l),zi(),u.state=n.memoizedState),typeof u.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){u=n.stateNode;var w=n.memoizedProps,L=Ga(r,w);u.props=L;var U=u.context,Z=r.contextType;p=xr,typeof Z=="object"&&Z!==null&&(p=dt(Z));var H=r.getDerivedStateFromProps;Z=typeof H=="function"||typeof u.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,Z||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(w||U!==p)&&Sm(n,u,o,p),Vn=!1;var Y=n.memoizedState;u.state=Y,Ri(n,o,u,l),zi(),U=n.memoizedState,w||Y!==U||Vn?(typeof H=="function"&&(Wc(n,r,H,o),U=n.memoizedState),(L=Vn||Lm(n,r,L,o,Y,U,p))?(Z||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(n.flags|=4194308)):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=U),u.props=o,u.state=U,u.context=p,o=L):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{u=n.stateNode,Ic(t,n),p=n.memoizedProps,Z=Ga(r,p),u.props=Z,H=n.pendingProps,Y=u.context,U=r.contextType,L=xr,typeof U=="object"&&U!==null&&(L=dt(U)),w=r.getDerivedStateFromProps,(U=typeof w=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(p!==H||Y!==L)&&Sm(n,u,o,L),Vn=!1,Y=n.memoizedState,u.state=Y,Ri(n,o,u,l),zi();var Q=n.memoizedState;p!==H||Y!==Q||Vn||t!==null&&t.dependencies!==null&&bo(t.dependencies)?(typeof w=="function"&&(Wc(n,r,w,o),Q=n.memoizedState),(Z=Vn||Lm(n,r,Z,o,Y,Q,L)||t!==null&&t.dependencies!==null&&bo(t.dependencies))?(U||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(o,Q,L),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(o,Q,L)),typeof u.componentDidUpdate=="function"&&(n.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof u.componentDidUpdate!="function"||p===t.memoizedProps&&Y===t.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||p===t.memoizedProps&&Y===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=Q),u.props=o,u.state=Q,u.context=L,o=Z):(typeof u.componentDidUpdate!="function"||p===t.memoizedProps&&Y===t.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||p===t.memoizedProps&&Y===t.memoizedState||(n.flags|=1024),o=!1)}return u=o,Bo(t,n),o=(n.flags&128)!==0,u||o?(u=n.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:u.render(),n.flags|=1,t!==null&&o?(n.child=Ir(n,t.child,null,l),n.child=Ir(n,null,r,l)):ot(t,n,r,l),n.memoizedState=u.state,t=n.child):t=Bn(t,n,l),t}function Ym(t,n,r,o){return Ci(),n.flags|=256,ot(t,n,r,o),n.child}var nu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function au(t){return{baseLanes:t,cachePool:kh()}}function ru(t,n,r){return t=t!==null?t.childLanes&~r:0,n&&(t|=Wt),t}function Qm(t,n,r){var o=n.pendingProps,l=!1,u=(n.flags&128)!==0,p;if((p=u)||(p=t!==null&&t.memoizedState===null?!1:(We.current&2)!==0),p&&(l=!0,n.flags&=-129),p=(n.flags&32)!==0,n.flags&=-33,t===null){if(xe){if(l?ea(n):ta(),xe){var w=_e,L;if(L=w){e:{for(L=w,w=yn;L.nodeType!==8;){if(!w){w=null;break e}if(L=ln(L.nextSibling),L===null){w=null;break e}}w=L}w!==null?(n.memoizedState={dehydrated:w,treeContext:za!==null?{id:In,overflow:Dn}:null,retryLane:536870912,hydrationErrors:null},L=zt(18,null,null,0),L.stateNode=w,L.return=n,n.child=L,bt=n,_e=null,L=!0):L=!1}L||Ba(n)}if(w=n.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return Qu(w)?n.lanes=32:n.lanes=536870912,null;On(n)}return w=o.children,o=o.fallback,l?(ta(),l=n.mode,w=Uo({mode:"hidden",children:w},l),o=Aa(o,l,r,null),w.return=n,o.return=n,w.sibling=o,n.child=w,l=n.child,l.memoizedState=au(r),l.childLanes=ru(t,p,r),n.memoizedState=nu,o):(ea(n),iu(n,w))}if(L=t.memoizedState,L!==null&&(w=L.dehydrated,w!==null)){if(u)n.flags&256?(ea(n),n.flags&=-257,n=fu(t,n,r)):n.memoizedState!==null?(ta(),n.child=t.child,n.flags|=128,n=null):(ta(),l=o.fallback,w=n.mode,o=Uo({mode:"visible",children:o.children},w),l=Aa(l,w,r,null),l.flags|=2,o.return=n,l.return=n,o.sibling=l,n.child=o,Ir(n,t.child,null,r),o=n.child,o.memoizedState=au(r),o.childLanes=ru(t,p,r),n.memoizedState=nu,n=l);else if(ea(n),Qu(w)){if(p=w.nextSibling&&w.nextSibling.dataset,p)var U=p.dgst;p=U,o=Error(f(419)),o.stack="",o.digest=p,ki({value:o,source:null,stack:null}),n=fu(t,n,r)}else if(tt||Ei(t,n,r,!1),p=(r&t.childLanes)!==0,tt||p){if(p=Ne,p!==null&&(o=r&-r,o=(o&42)!==0?1:Gl(o),o=(o&(p.suspendedLanes|r))!==0?0:o,o!==0&&o!==L.retryLane))throw L.retryLane=o,vr(t,o),_t(p,t,o),Dm;w.data==="$?"||Lu(),n=fu(t,n,r)}else w.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=L.treeContext,_e=ln(w.nextSibling),bt=n,xe=!0,Oa=null,yn=!1,t!==null&&(qt[Vt++]=In,qt[Vt++]=Dn,qt[Vt++]=za,In=t.id,Dn=t.overflow,za=n),n=iu(n,o.children),n.flags|=4096);return n}return l?(ta(),l=o.fallback,w=n.mode,L=t.child,U=L.sibling,o=Nn(L,{mode:"hidden",children:o.children}),o.subtreeFlags=L.subtreeFlags&65011712,U!==null?l=Nn(U,l):(l=Aa(l,w,r,null),l.flags|=2),l.return=n,o.return=n,o.sibling=l,n.child=o,o=l,l=n.child,w=t.child.memoizedState,w===null?w=au(r):(L=w.cachePool,L!==null?(U=Xe._currentValue,L=L.parent!==U?{parent:U,pool:U}:L):L=kh(),w={baseLanes:w.baseLanes|r,cachePool:L}),l.memoizedState=w,l.childLanes=ru(t,p,r),n.memoizedState=nu,o):(ea(n),r=t.child,t=r.sibling,r=Nn(r,{mode:"visible",children:o.children}),r.return=n,r.sibling=null,t!==null&&(p=n.deletions,p===null?(n.deletions=[t],n.flags|=16):p.push(t)),n.child=r,n.memoizedState=null,r)}function iu(t,n){return n=Uo({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Uo(t,n){return t=zt(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function fu(t,n,r){return Ir(n,t.child,null,r),t=iu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Gm(t,n,r){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Lc(t.return,n,r)}function ou(t,n,r,o,l){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:l}:(u.isBackwards=n,u.rendering=null,u.renderingStartTime=0,u.last=o,u.tail=r,u.tailMode=l)}function $m(t,n,r){var o=n.pendingProps,l=o.revealOrder,u=o.tail;if(ot(t,n,o.children,r),o=We.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gm(t,r,n);else if(t.tag===19)Gm(t,r,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(ve(We,o),l){case"forwards":for(r=n.child,l=null;r!==null;)t=r.alternate,t!==null&&zo(t)===null&&(l=r),r=r.sibling;r=l,r===null?(l=n.child,n.child=null):(l=r.sibling,r.sibling=null),ou(n,!1,l,r,u);break;case"backwards":for(r=null,l=n.child,n.child=null;l!==null;){if(t=l.alternate,t!==null&&zo(t)===null){n.child=l;break}t=l.sibling,l.sibling=r,r=l,l=t}ou(n,!0,r,null,u);break;case"together":ou(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Bn(t,n,r){if(t!==null&&(n.dependencies=t.dependencies),fa|=n.lanes,(r&n.childLanes)===0)if(t!==null){if(Ei(t,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(f(153));if(n.child!==null){for(t=n.child,r=Nn(t,t.pendingProps),n.child=r,r.return=n;t.sibling!==null;)t=t.sibling,r=r.sibling=Nn(t,t.pendingProps),r.return=n;r.sibling=null}return n.child}function su(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&bo(t)))}function n6(t,n,r){switch(n.tag){case 3:gn(n,n.stateNode.containerInfo),qn(n,Xe,t.memoizedState.cache),Ci();break;case 27:case 5:ka(n);break;case 4:gn(n,n.stateNode.containerInfo);break;case 10:qn(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ea(n),n.flags|=128,null):(r&n.child.childLanes)!==0?Qm(t,n,r):(ea(n),t=Bn(t,n,r),t!==null?t.sibling:null);ea(n);break;case 19:var l=(t.flags&128)!==0;if(o=(r&n.childLanes)!==0,o||(Ei(t,n,r,!1),o=(r&n.childLanes)!==0),l){if(o)return $m(t,n,r);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),ve(We,We.current),o)break;return null;case 22:case 23:return n.lanes=0,Om(t,n,r);case 24:qn(n,Xe,t.memoizedState.cache)}return Bn(t,n,r)}function Zm(t,n,r){if(t!==null)if(t.memoizedProps!==n.pendingProps)tt=!0;else{if(!su(t,r)&&(n.flags&128)===0)return tt=!1,n6(t,n,r);tt=(t.flags&131072)!==0}else tt=!1,xe&&(n.flags&1048576)!==0&&vh(n,yo,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var o=n.elementType,l=o._init;if(o=l(o._payload),n.type=o,typeof o=="function")yc(o)?(t=Ga(o,t),n.tag=1,n=_m(null,n,o,t,r)):(n.tag=0,n=tu(null,n,o,t,r));else{if(o!=null){if(l=o.$$typeof,l===T){n.tag=11,n=Am(null,n,o,t,r);break e}else if(l===G){n.tag=14,n=zm(null,n,o,t,r);break e}}throw n=ae(o)||o,Error(f(306,n,""))}}return n;case 0:return tu(t,n,n.type,n.pendingProps,r);case 1:return o=n.type,l=Ga(o,n.pendingProps),_m(t,n,o,l,r);case 3:e:{if(gn(n,n.stateNode.containerInfo),t===null)throw Error(f(387));o=n.pendingProps;var u=n.memoizedState;l=u.element,Ic(t,n),Ri(n,o,null,r);var p=n.memoizedState;if(o=p.cache,qn(n,Xe,o),o!==u.cache&&Sc(n,[Xe],r,!0),zi(),o=p.element,u.isDehydrated)if(u={element:o,isDehydrated:!1,cache:p.cache},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){n=Ym(t,n,o,r);break e}else if(o!==l){l=Pt(Error(f(424)),n),ki(l),n=Ym(t,n,o,r);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(_e=ln(t.firstChild),bt=n,xe=!0,Oa=null,yn=!0,r=Mm(n,null,o,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(Ci(),o===l){n=Bn(t,n,r);break e}ot(t,n,o,r)}n=n.child}return n;case 26:return Bo(t,n),t===null?(r=Fg(n.type,null,n.pendingProps,null))?n.memoizedState=r:xe||(r=n.type,t=n.pendingProps,o=Wo(Mt.current).createElement(r),o[ut]=n,o[Lt]=t,lt(o,r,t),et(o),n.stateNode=o):n.memoizedState=Fg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return ka(n),t===null&&xe&&(o=n.stateNode=Jg(n.type,n.pendingProps,Mt.current),bt=n,yn=!0,l=_e,ca(n.type)?(Gu=l,_e=ln(o.firstChild)):_e=l),ot(t,n,n.pendingProps.children,r),Bo(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&xe&&((l=o=_e)&&(o=N6(o,n.type,n.pendingProps,yn),o!==null?(n.stateNode=o,bt=n,_e=ln(o.firstChild),yn=!1,l=!0):l=!1),l||Ba(n)),ka(n),l=n.type,u=n.pendingProps,p=t!==null?t.memoizedProps:null,o=u.children,Uu(l,u)?o=null:p!==null&&Uu(l,p)&&(n.flags|=32),n.memoizedState!==null&&(l=Bc(t,n,Fw,null,null,r),af._currentValue=l),Bo(t,n),ot(t,n,o,r),n.child;case 6:return t===null&&xe&&((t=r=_e)&&(r=I6(r,n.pendingProps,yn),r!==null?(n.stateNode=r,bt=n,_e=null,t=!0):t=!1),t||Ba(n)),null;case 13:return Qm(t,n,r);case 4:return gn(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Ir(n,null,o,r):ot(t,n,o,r),n.child;case 11:return Am(t,n,n.type,n.pendingProps,r);case 7:return ot(t,n,n.pendingProps,r),n.child;case 8:return ot(t,n,n.pendingProps.children,r),n.child;case 12:return ot(t,n,n.pendingProps.children,r),n.child;case 10:return o=n.pendingProps,qn(n,n.type,o.value),ot(t,n,o.children,r),n.child;case 9:return l=n.type._context,o=n.pendingProps.children,_a(n),l=dt(l),o=o(l),n.flags|=1,ot(t,n,o,r),n.child;case 14:return zm(t,n,n.type,n.pendingProps,r);case 15:return Rm(t,n,n.type,n.pendingProps,r);case 19:return $m(t,n,r);case 31:return o=n.pendingProps,r=n.mode,o={mode:o.mode,children:o.children},t===null?(r=Uo(o,r),r.ref=n.ref,n.child=r,r.return=n,n=r):(r=Nn(t.child,o),r.ref=n.ref,n.child=r,r.return=n,n=r),n;case 22:return Om(t,n,r);case 24:return _a(n),o=dt(Xe),t===null?(l=Ec(),l===null&&(l=Ne,u=Cc(),l.pooledCache=u,u.refCount++,u!==null&&(l.pooledCacheLanes|=r),l=u),n.memoizedState={parent:o,cache:l},Nc(n),qn(n,Xe,l)):((t.lanes&r)!==0&&(Ic(t,n),Ri(n,null,null,r),zi()),l=t.memoizedState,u=n.memoizedState,l.parent!==o?(l={parent:o,cache:o},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),qn(n,Xe,o)):(o=u.cache,qn(n,Xe,o),o!==l.cache&&Sc(n,[Xe],r,!0))),ot(t,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(f(156,n.tag))}function Un(t){t.flags|=4}function Jm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Kg(n)){if(n=Xt.current,n!==null&&((be&4194048)===be?bn!==null:(be&62914560)!==be&&(be&536870912)===0||n!==bn))throw Di=Tc,Eh;t.flags|=8192}}function _o(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?j1():536870912,t.lanes|=n,Rr|=n)}function Gi(t,n){if(!xe)switch(t.tailMode){case"hidden":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Oe(t){var n=t.alternate!==null&&t.alternate.child===t.child,r=0,o=0;if(n)for(var l=t.child;l!==null;)r|=l.lanes|l.childLanes,o|=l.subtreeFlags&65011712,o|=l.flags&65011712,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)r|=l.lanes|l.childLanes,o|=l.subtreeFlags,o|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=o,t.childLanes=r,n}function a6(t,n,r){var o=n.pendingProps;switch(xc(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(n),null;case 1:return Oe(n),null;case 3:return r=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),zn(Xe),jt(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Si(n)?Un(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,jh())),Oe(n),null;case 26:return r=n.memoizedState,t===null?(Un(n),r!==null?(Oe(n),Jm(n,r)):(Oe(n),n.flags&=-16777217)):r?r!==t.memoizedState?(Un(n),Oe(n),Jm(n,r)):(Oe(n),n.flags&=-16777217):(t.memoizedProps!==o&&Un(n),Oe(n),n.flags&=-16777217),null;case 27:kn(n),r=Mt.current;var l=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Un(n);else{if(!o){if(n.stateNode===null)throw Error(f(166));return Oe(n),null}t=Ue.current,Si(n)?xh(n):(t=Jg(l,o,r),n.stateNode=t,Un(n))}return Oe(n),null;case 5:if(kn(n),r=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Un(n);else{if(!o){if(n.stateNode===null)throw Error(f(166));return Oe(n),null}if(t=Ue.current,Si(n))xh(n);else{switch(l=Wo(Mt.current),t){case 1:t=l.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:t=l.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":t=l.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":t=l.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?l.createElement("select",{is:o.is}):l.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?l.createElement(r,{is:o.is}):l.createElement(r)}}t[ut]=n,t[Lt]=o;e:for(l=n.child;l!==null;){if(l.tag===5||l.tag===6)t.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===n)break e;for(;l.sibling===null;){if(l.return===null||l.return===n)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}n.stateNode=t;e:switch(lt(t,r,o),r){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Un(n)}}return Oe(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Un(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(f(166));if(t=Mt.current,Si(n)){if(t=n.stateNode,r=n.memoizedProps,o=null,l=bt,l!==null)switch(l.tag){case 27:case 5:o=l.memoizedProps}t[ut]=n,t=!!(t.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||Ug(t.nodeValue,r)),t||Ba(n)}else t=Wo(t).createTextNode(o),t[ut]=n,n.stateNode=t}return Oe(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=Si(n),o!==null&&o.dehydrated!==null){if(t===null){if(!l)throw Error(f(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(f(317));l[ut]=n}else Ci(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Oe(n),l=!1}else l=jh(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(On(n),n):(On(n),null)}if(On(n),(n.flags&128)!==0)return n.lanes=r,n;if(r=o!==null,t=t!==null&&t.memoizedState!==null,r){o=n.child,l=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(l=o.alternate.memoizedState.cachePool.pool);var u=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(u=o.memoizedState.cachePool.pool),u!==l&&(o.flags|=2048)}return r!==t&&r&&(n.child.flags|=8192),_o(n,n.updateQueue),Oe(n),null;case 4:return jt(),t===null&&Au(n.stateNode.containerInfo),Oe(n),null;case 10:return zn(n.type),Oe(n),null;case 19:if(ye(We),l=n.memoizedState,l===null)return Oe(n),null;if(o=(n.flags&128)!==0,u=l.rendering,u===null)if(o)Gi(l,!1);else{if(Ye!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(u=zo(t),u!==null){for(n.flags|=128,Gi(l,!1),t=u.updateQueue,n.updateQueue=t,_o(n,t),n.subtreeFlags=0,t=r,r=n.child;r!==null;)wh(r,t),r=r.sibling;return ve(We,We.current&1|2),n.child}t=t.sibling}l.tail!==null&&pn()>Go&&(n.flags|=128,o=!0,Gi(l,!1),n.lanes=4194304)}else{if(!o)if(t=zo(u),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,_o(n,t),Gi(l,!0),l.tail===null&&l.tailMode==="hidden"&&!u.alternate&&!xe)return Oe(n),null}else 2*pn()-l.renderingStartTime>Go&&r!==536870912&&(n.flags|=128,o=!0,Gi(l,!1),n.lanes=4194304);l.isBackwards?(u.sibling=n.child,n.child=u):(t=l.last,t!==null?t.sibling=u:n.child=u,l.last=u)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=pn(),n.sibling=null,t=We.current,ve(We,o?t&1|2:t&1),n):(Oe(n),null);case 22:case 23:return On(n),Rc(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(r&536870912)!==0&&(n.flags&128)===0&&(Oe(n),n.subtreeFlags&6&&(n.flags|=8192)):Oe(n),r=n.updateQueue,r!==null&&_o(n,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==r&&(n.flags|=2048),t!==null&&ye(Ya),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),zn(Xe),Oe(n),null;case 25:return null;case 30:return null}throw Error(f(156,n.tag))}function r6(t,n){switch(xc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return zn(Xe),jt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return kn(n),null;case 13:if(On(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(f(340));Ci()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ye(We),null;case 4:return jt(),null;case 10:return zn(n.type),null;case 22:case 23:return On(n),Rc(),t!==null&&ye(Ya),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return zn(Xe),null;case 25:return null;default:return null}}function Hm(t,n){switch(xc(n),n.tag){case 3:zn(Xe),jt();break;case 26:case 27:case 5:kn(n);break;case 4:jt();break;case 13:On(n);break;case 19:ye(We);break;case 10:zn(n.type);break;case 22:case 23:On(n),Rc(),t!==null&&ye(Ya);break;case 24:zn(Xe)}}function $i(t,n){try{var r=n.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var l=o.next;r=l;do{if((r.tag&t)===t){o=void 0;var u=r.create,p=r.inst;o=u(),p.destroy=o}r=r.next}while(r!==l)}}catch(w){Te(n,n.return,w)}}function na(t,n,r){try{var o=n.updateQueue,l=o!==null?o.lastEffect:null;if(l!==null){var u=l.next;o=u;do{if((o.tag&t)===t){var p=o.inst,w=p.destroy;if(w!==void 0){p.destroy=void 0,l=n;var L=r,U=w;try{U()}catch(Z){Te(l,L,Z)}}}o=o.next}while(o!==u)}}catch(Z){Te(n,n.return,Z)}}function Pm(t){var n=t.updateQueue;if(n!==null){var r=t.stateNode;try{zh(n,r)}catch(o){Te(t,t.return,o)}}}function Fm(t,n,r){r.props=Ga(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(o){Te(t,n,o)}}function Zi(t,n){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof r=="function"?t.refCleanup=r(o):r.current=o}}catch(l){Te(t,n,l)}}function wn(t,n){var r=t.ref,o=t.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(l){Te(t,n,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(l){Te(t,n,l)}else r.current=null}function qm(t){var n=t.type,r=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break e;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(l){Te(t,t.return,l)}}function lu(t,n,r){try{var o=t.stateNode;S6(o,t.type,r,n),o[Lt]=n}catch(l){Te(t,t.return,l)}}function Vm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ca(t.type)||t.tag===4}function cu(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Vm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ca(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function uu(t,n,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(t),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=Xo));else if(o!==4&&(o===27&&ca(t.type)&&(r=t.stateNode,n=null),t=t.child,t!==null))for(uu(t,n,r),t=t.sibling;t!==null;)uu(t,n,r),t=t.sibling}function Yo(t,n,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?r.insertBefore(t,n):r.appendChild(t);else if(o!==4&&(o===27&&ca(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(Yo(t,n,r),t=t.sibling;t!==null;)Yo(t,n,r),t=t.sibling}function Xm(t){var n=t.stateNode,r=t.memoizedProps;try{for(var o=t.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);lt(n,o,r),n[ut]=t,n[Lt]=r}catch(u){Te(t,t.return,u)}}var _n=!1,Ze=!1,du=!1,Wm=typeof WeakSet=="function"?WeakSet:Set,nt=null;function i6(t,n){if(t=t.containerInfo,Ou=rs,t=lh(t),cc(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var l=o.anchorOffset,u=o.focusNode;o=o.focusOffset;try{r.nodeType,u.nodeType}catch{r=null;break e}var p=0,w=-1,L=-1,U=0,Z=0,H=t,Y=null;t:for(;;){for(var Q;H!==r||l!==0&&H.nodeType!==3||(w=p+l),H!==u||o!==0&&H.nodeType!==3||(L=p+o),H.nodeType===3&&(p+=H.nodeValue.length),(Q=H.firstChild)!==null;)Y=H,H=Q;for(;;){if(H===t)break t;if(Y===r&&++U===l&&(w=p),Y===u&&++Z===o&&(L=p),(Q=H.nextSibling)!==null)break;H=Y,Y=H.parentNode}H=Q}r=w===-1||L===-1?null:{start:w,end:L}}else r=null}r=r||{start:0,end:0}}else r=null;for(Bu={focusedElem:t,selectionRange:r},rs=!1,nt=n;nt!==null;)if(n=nt,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,nt=t;else for(;nt!==null;){switch(n=nt,u=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,r=n,l=u.memoizedProps,u=u.memoizedState,o=r.stateNode;try{var ne=Ga(r.type,l,r.elementType===r.type);t=o.getSnapshotBeforeUpdate(ne,u),o.__reactInternalSnapshotBeforeUpdate=t}catch(ee){Te(r,r.return,ee)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,r=t.nodeType,r===9)Yu(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Yu(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(f(163))}if(t=n.sibling,t!==null){t.return=n.return,nt=t;break}nt=n.return}}function Km(t,n,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:aa(t,r),o&4&&$i(5,r);break;case 1:if(aa(t,r),o&4)if(t=r.stateNode,n===null)try{t.componentDidMount()}catch(p){Te(r,r.return,p)}else{var l=Ga(r.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(l,n,t.__reactInternalSnapshotBeforeUpdate)}catch(p){Te(r,r.return,p)}}o&64&&Pm(r),o&512&&Zi(r,r.return);break;case 3:if(aa(t,r),o&64&&(t=r.updateQueue,t!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{zh(t,n)}catch(p){Te(r,r.return,p)}}break;case 27:n===null&&o&4&&Xm(r);case 26:case 5:aa(t,r),n===null&&o&4&&qm(r),o&512&&Zi(r,r.return);break;case 12:aa(t,r);break;case 13:aa(t,r),o&4&&ng(t,r),o&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=m6.bind(null,r),D6(t,r))));break;case 22:if(o=r.memoizedState!==null||_n,!o){n=n!==null&&n.memoizedState!==null||Ze,l=_n;var u=Ze;_n=o,(Ze=n)&&!u?ra(t,r,(r.subtreeFlags&8772)!==0):aa(t,r),_n=l,Ze=u}break;case 30:break;default:aa(t,r)}}function eg(t){var n=t.alternate;n!==null&&(t.alternate=null,eg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Jl(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ze=null,kt=!1;function Yn(t,n,r){for(r=r.child;r!==null;)tg(t,n,r),r=r.sibling}function tg(t,n,r){if(It&&typeof It.onCommitFiberUnmount=="function")try{It.onCommitFiberUnmount(ui,r)}catch{}switch(r.tag){case 26:Ze||wn(r,n),Yn(t,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:Ze||wn(r,n);var o=ze,l=kt;ca(r.type)&&(ze=r.stateNode,kt=!1),Yn(t,n,r),Ki(r.stateNode),ze=o,kt=l;break;case 5:Ze||wn(r,n);case 6:if(o=ze,l=kt,ze=null,Yn(t,n,r),ze=o,kt=l,ze!==null)if(kt)try{(ze.nodeType===9?ze.body:ze.nodeName==="HTML"?ze.ownerDocument.body:ze).removeChild(r.stateNode)}catch(u){Te(r,n,u)}else try{ze.removeChild(r.stateNode)}catch(u){Te(r,n,u)}break;case 18:ze!==null&&(kt?(t=ze,$g(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),sf(t)):$g(ze,r.stateNode));break;case 4:o=ze,l=kt,ze=r.stateNode.containerInfo,kt=!0,Yn(t,n,r),ze=o,kt=l;break;case 0:case 11:case 14:case 15:Ze||na(2,r,n),Ze||na(4,r,n),Yn(t,n,r);break;case 1:Ze||(wn(r,n),o=r.stateNode,typeof o.componentWillUnmount=="function"&&Fm(r,n,o)),Yn(t,n,r);break;case 21:Yn(t,n,r);break;case 22:Ze=(o=Ze)||r.memoizedState!==null,Yn(t,n,r),Ze=o;break;default:Yn(t,n,r)}}function ng(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{sf(t)}catch(r){Te(n,n.return,r)}}function f6(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Wm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Wm),n;default:throw Error(f(435,t.tag))}}function hu(t,n){var r=f6(t);n.forEach(function(o){var l=g6.bind(null,t,o);r.has(o)||(r.add(o),o.then(l,l))})}function Rt(t,n){var r=n.deletions;if(r!==null)for(var o=0;o<r.length;o++){var l=r[o],u=t,p=n,w=p;e:for(;w!==null;){switch(w.tag){case 27:if(ca(w.type)){ze=w.stateNode,kt=!1;break e}break;case 5:ze=w.stateNode,kt=!1;break e;case 3:case 4:ze=w.stateNode.containerInfo,kt=!0;break e}w=w.return}if(ze===null)throw Error(f(160));tg(u,p,l),ze=null,kt=!1,u=l.alternate,u!==null&&(u.return=null),l.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)ag(n,t),n=n.sibling}var sn=null;function ag(t,n){var r=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Rt(n,t),Ot(t),o&4&&(na(3,t,t.return),$i(3,t),na(5,t,t.return));break;case 1:Rt(n,t),Ot(t),o&512&&(Ze||r===null||wn(r,r.return)),o&64&&_n&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?o:r.concat(o))));break;case 26:var l=sn;if(Rt(n,t),Ot(t),o&512&&(Ze||r===null||wn(r,r.return)),o&4){var u=r!==null?r.memoizedState:null;if(o=t.memoizedState,r===null)if(o===null)if(t.stateNode===null){e:{o=t.type,r=t.memoizedProps,l=l.ownerDocument||l;t:switch(o){case"title":u=l.getElementsByTagName("title")[0],(!u||u[mi]||u[ut]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=l.createElement(o),l.head.insertBefore(u,l.querySelector("head > title"))),lt(u,o,r),u[ut]=t,et(u),o=u;break e;case"link":var p=Xg("link","href",l).get(o+(r.href||""));if(p){for(var w=0;w<p.length;w++)if(u=p[w],u.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&u.getAttribute("rel")===(r.rel==null?null:r.rel)&&u.getAttribute("title")===(r.title==null?null:r.title)&&u.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){p.splice(w,1);break t}}u=l.createElement(o),lt(u,o,r),l.head.appendChild(u);break;case"meta":if(p=Xg("meta","content",l).get(o+(r.content||""))){for(w=0;w<p.length;w++)if(u=p[w],u.getAttribute("content")===(r.content==null?null:""+r.content)&&u.getAttribute("name")===(r.name==null?null:r.name)&&u.getAttribute("property")===(r.property==null?null:r.property)&&u.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&u.getAttribute("charset")===(r.charSet==null?null:r.charSet)){p.splice(w,1);break t}}u=l.createElement(o),lt(u,o,r),l.head.appendChild(u);break;default:throw Error(f(468,o))}u[ut]=t,et(u),o=u}t.stateNode=o}else Wg(l,t.type,t.stateNode);else t.stateNode=Vg(l,o,t.memoizedProps);else u!==o?(u===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):u.count--,o===null?Wg(l,t.type,t.stateNode):Vg(l,o,t.memoizedProps)):o===null&&t.stateNode!==null&&lu(t,t.memoizedProps,r.memoizedProps)}break;case 27:Rt(n,t),Ot(t),o&512&&(Ze||r===null||wn(r,r.return)),r!==null&&o&4&&lu(t,t.memoizedProps,r.memoizedProps);break;case 5:if(Rt(n,t),Ot(t),o&512&&(Ze||r===null||wn(r,r.return)),t.flags&32){l=t.stateNode;try{hr(l,"")}catch(Q){Te(t,t.return,Q)}}o&4&&t.stateNode!=null&&(l=t.memoizedProps,lu(t,l,r!==null?r.memoizedProps:l)),o&1024&&(du=!0);break;case 6:if(Rt(n,t),Ot(t),o&4){if(t.stateNode===null)throw Error(f(162));o=t.memoizedProps,r=t.stateNode;try{r.nodeValue=o}catch(Q){Te(t,t.return,Q)}}break;case 3:if(ts=null,l=sn,sn=Ko(n.containerInfo),Rt(n,t),sn=l,Ot(t),o&4&&r!==null&&r.memoizedState.isDehydrated)try{sf(n.containerInfo)}catch(Q){Te(t,t.return,Q)}du&&(du=!1,rg(t));break;case 4:o=sn,sn=Ko(t.stateNode.containerInfo),Rt(n,t),Ot(t),sn=o;break;case 12:Rt(n,t),Ot(t);break;case 13:Rt(n,t),Ot(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(wu=pn()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,hu(t,o)));break;case 22:l=t.memoizedState!==null;var L=r!==null&&r.memoizedState!==null,U=_n,Z=Ze;if(_n=U||l,Ze=Z||L,Rt(n,t),Ze=Z,_n=U,Ot(t),o&8192)e:for(n=t.stateNode,n._visibility=l?n._visibility&-2:n._visibility|1,l&&(r===null||L||_n||Ze||$a(t)),r=null,n=t;;){if(n.tag===5||n.tag===26){if(r===null){L=r=n;try{if(u=L.stateNode,l)p=u.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{w=L.stateNode;var H=L.memoizedProps.style,Y=H!=null&&H.hasOwnProperty("display")?H.display:null;w.style.display=Y==null||typeof Y=="boolean"?"":(""+Y).trim()}}catch(Q){Te(L,L.return,Q)}}}else if(n.tag===6){if(r===null){L=n;try{L.stateNode.nodeValue=l?"":L.memoizedProps}catch(Q){Te(L,L.return,Q)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(r=o.retryQueue,r!==null&&(o.retryQueue=null,hu(t,r))));break;case 19:Rt(n,t),Ot(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,hu(t,o)));break;case 30:break;case 21:break;default:Rt(n,t),Ot(t)}}function Ot(t){var n=t.flags;if(n&2){try{for(var r,o=t.return;o!==null;){if(Vm(o)){r=o;break}o=o.return}if(r==null)throw Error(f(160));switch(r.tag){case 27:var l=r.stateNode,u=cu(t);Yo(t,u,l);break;case 5:var p=r.stateNode;r.flags&32&&(hr(p,""),r.flags&=-33);var w=cu(t);Yo(t,w,p);break;case 3:case 4:var L=r.stateNode.containerInfo,U=cu(t);uu(t,U,L);break;default:throw Error(f(161))}}catch(Z){Te(t,t.return,Z)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function rg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;rg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function aa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Km(t,n.alternate,n),n=n.sibling}function $a(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:na(4,n,n.return),$a(n);break;case 1:wn(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&Fm(n,n.return,r),$a(n);break;case 27:Ki(n.stateNode);case 26:case 5:wn(n,n.return),$a(n);break;case 22:n.memoizedState===null&&$a(n);break;case 30:$a(n);break;default:$a(n)}t=t.sibling}}function ra(t,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,l=t,u=n,p=u.flags;switch(u.tag){case 0:case 11:case 15:ra(l,u,r),$i(4,u);break;case 1:if(ra(l,u,r),o=u,l=o.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(U){Te(o,o.return,U)}if(o=u,l=o.updateQueue,l!==null){var w=o.stateNode;try{var L=l.shared.hiddenCallbacks;if(L!==null)for(l.shared.hiddenCallbacks=null,l=0;l<L.length;l++)Ah(L[l],w)}catch(U){Te(o,o.return,U)}}r&&p&64&&Pm(u),Zi(u,u.return);break;case 27:Xm(u);case 26:case 5:ra(l,u,r),r&&o===null&&p&4&&qm(u),Zi(u,u.return);break;case 12:ra(l,u,r);break;case 13:ra(l,u,r),r&&p&4&&ng(l,u);break;case 22:u.memoizedState===null&&ra(l,u,r),Zi(u,u.return);break;case 30:break;default:ra(l,u,r)}n=n.sibling}}function mu(t,n){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&Ti(r))}function gu(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ti(t))}function vn(t,n,r,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)ig(t,n,r,o),n=n.sibling}function ig(t,n,r,o){var l=n.flags;switch(n.tag){case 0:case 11:case 15:vn(t,n,r,o),l&2048&&$i(9,n);break;case 1:vn(t,n,r,o);break;case 3:vn(t,n,r,o),l&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ti(t)));break;case 12:if(l&2048){vn(t,n,r,o),t=n.stateNode;try{var u=n.memoizedProps,p=u.id,w=u.onPostCommit;typeof w=="function"&&w(p,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(L){Te(n,n.return,L)}}else vn(t,n,r,o);break;case 13:vn(t,n,r,o);break;case 23:break;case 22:u=n.stateNode,p=n.alternate,n.memoizedState!==null?u._visibility&2?vn(t,n,r,o):Ji(t,n):u._visibility&2?vn(t,n,r,o):(u._visibility|=2,Dr(t,n,r,o,(n.subtreeFlags&10256)!==0)),l&2048&&mu(p,n);break;case 24:vn(t,n,r,o),l&2048&&gu(n.alternate,n);break;default:vn(t,n,r,o)}}function Dr(t,n,r,o,l){for(l=l&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var u=t,p=n,w=r,L=o,U=p.flags;switch(p.tag){case 0:case 11:case 15:Dr(u,p,w,L,l),$i(8,p);break;case 23:break;case 22:var Z=p.stateNode;p.memoizedState!==null?Z._visibility&2?Dr(u,p,w,L,l):Ji(u,p):(Z._visibility|=2,Dr(u,p,w,L,l)),l&&U&2048&&mu(p.alternate,p);break;case 24:Dr(u,p,w,L,l),l&&U&2048&&gu(p.alternate,p);break;default:Dr(u,p,w,L,l)}n=n.sibling}}function Ji(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=t,o=n,l=o.flags;switch(o.tag){case 22:Ji(r,o),l&2048&&mu(o.alternate,o);break;case 24:Ji(r,o),l&2048&&gu(o.alternate,o);break;default:Ji(r,o)}n=n.sibling}}var Hi=8192;function Ar(t){if(t.subtreeFlags&Hi)for(t=t.child;t!==null;)fg(t),t=t.sibling}function fg(t){switch(t.tag){case 26:Ar(t),t.flags&Hi&&t.memoizedState!==null&&J6(sn,t.memoizedState,t.memoizedProps);break;case 5:Ar(t);break;case 3:case 4:var n=sn;sn=Ko(t.stateNode.containerInfo),Ar(t),sn=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=Hi,Hi=16777216,Ar(t),Hi=n):Ar(t));break;default:Ar(t)}}function og(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Pi(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];nt=o,lg(o,t)}og(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)sg(t),t=t.sibling}function sg(t){switch(t.tag){case 0:case 11:case 15:Pi(t),t.flags&2048&&na(9,t,t.return);break;case 3:Pi(t);break;case 12:Pi(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Qo(t)):Pi(t);break;default:Pi(t)}}function Qo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];nt=o,lg(o,t)}og(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:na(8,n,n.return),Qo(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,Qo(n));break;default:Qo(n)}t=t.sibling}}function lg(t,n){for(;nt!==null;){var r=nt;switch(r.tag){case 0:case 11:case 15:na(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Ti(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,nt=o;else e:for(r=t;nt!==null;){o=nt;var l=o.sibling,u=o.return;if(eg(o),o===r){nt=null;break e}if(l!==null){l.return=u,nt=l;break e}nt=u}}}var o6={getCacheForType:function(t){var n=dt(Xe),r=n.data.get(t);return r===void 0&&(r=t(),n.data.set(t,r)),r}},s6=typeof WeakMap=="function"?WeakMap:Map,je=0,Ne=null,de=null,be=0,Le=0,Bt=null,ia=!1,zr=!1,pu=!1,Qn=0,Ye=0,fa=0,Za=0,yu=0,Wt=0,Rr=0,Fi=null,Et=null,bu=!1,wu=0,Go=1/0,$o=null,oa=null,st=0,sa=null,Or=null,Br=0,vu=0,xu=null,cg=null,qi=0,Mu=null;function Ut(){if((je&2)!==0&&be!==0)return be&-be;if(B.T!==null){var t=Lr;return t!==0?t:Tu()}return C1()}function ug(){Wt===0&&(Wt=(be&536870912)===0||xe?M1():536870912);var t=Xt.current;return t!==null&&(t.flags|=32),Wt}function _t(t,n,r){(t===Ne&&(Le===2||Le===9)||t.cancelPendingCommit!==null)&&(Ur(t,0),la(t,be,Wt,!1)),hi(t,r),((je&2)===0||t!==Ne)&&(t===Ne&&((je&2)===0&&(Za|=r),Ye===4&&la(t,be,Wt,!1)),xn(t))}function dg(t,n,r){if((je&6)!==0)throw Error(f(327));var o=!r&&(n&124)===0&&(n&t.expiredLanes)===0||di(t,n),l=o?u6(t,n):Su(t,n,!0),u=o;do{if(l===0){zr&&!o&&la(t,n,0,!1);break}else{if(r=t.current.alternate,u&&!l6(r)){l=Su(t,n,!1),u=!1;continue}if(l===2){if(u=n,t.errorRecoveryDisabledLanes&u)var p=0;else p=t.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){n=p;e:{var w=t;l=Fi;var L=w.current.memoizedState.isDehydrated;if(L&&(Ur(w,p).flags|=256),p=Su(w,p,!1),p!==2){if(pu&&!L){w.errorRecoveryDisabledLanes|=u,Za|=u,l=4;break e}u=Et,Et=l,u!==null&&(Et===null?Et=u:Et.push.apply(Et,u))}l=p}if(u=!1,l!==2)continue}}if(l===1){Ur(t,0),la(t,n,0,!0);break}e:{switch(o=t,u=l,u){case 0:case 1:throw Error(f(345));case 4:if((n&4194048)!==n)break;case 6:la(o,n,Wt,!ia);break e;case 2:Et=null;break;case 3:case 5:break;default:throw Error(f(329))}if((n&62914560)===n&&(l=wu+300-pn(),10<l)){if(la(o,n,Wt,!ia),Kf(o,0,!0)!==0)break e;o.timeoutHandle=Qg(hg.bind(null,o,r,Et,$o,bu,n,Wt,Za,Rr,ia,u,2,-0,0),l);break e}hg(o,r,Et,$o,bu,n,Wt,Za,Rr,ia,u,0,-0,0)}}break}while(!0);xn(t)}function hg(t,n,r,o,l,u,p,w,L,U,Z,H,Y,Q){if(t.timeoutHandle=-1,H=n.subtreeFlags,(H&8192||(H&16785408)===16785408)&&(nf={stylesheets:null,count:0,unsuspend:Z6},fg(n),H=H6(),H!==null)){t.cancelPendingCommit=H(vg.bind(null,t,n,u,r,o,l,p,w,L,Z,1,Y,Q)),la(t,u,p,!U);return}vg(t,n,u,r,o,l,p,w,L)}function l6(t){for(var n=t;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var l=r[o],u=l.getSnapshot;l=l.value;try{if(!At(u(),l))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function la(t,n,r,o){n&=~yu,n&=~Za,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var l=n;0<l;){var u=31-Dt(l),p=1<<u;o[u]=-1,l&=~p}r!==0&&L1(t,r,n)}function Zo(){return(je&6)===0?(Vi(0),!1):!0}function ju(){if(de!==null){if(Le===0)var t=de.return;else t=de,An=Ua=null,Yc(t),Nr=null,Yi=0,t=de;for(;t!==null;)Hm(t.alternate,t),t=t.return;de=null}}function Ur(t,n){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,k6(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),ju(),Ne=t,de=r=Nn(t.current,null),be=n,Le=0,Bt=null,ia=!1,zr=di(t,n),pu=!1,Rr=Wt=yu=Za=fa=Ye=0,Et=Fi=null,bu=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var l=31-Dt(o),u=1<<l;n|=t[l],o&=~u}return Qn=n,uo(),r}function mg(t,n){se=null,B.H=Io,n===Ii||n===xo?(n=Ih(),Le=3):n===Eh?(n=Ih(),Le=4):Le=n===Dm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Bt=n,de===null&&(Ye=1,Oo(t,Pt(n,t.current)))}function gg(){var t=B.H;return B.H=Io,t===null?Io:t}function pg(){var t=B.A;return B.A=o6,t}function Lu(){Ye=4,ia||(be&4194048)!==be&&Xt.current!==null||(zr=!0),(fa&134217727)===0&&(Za&134217727)===0||Ne===null||la(Ne,be,Wt,!1)}function Su(t,n,r){var o=je;je|=2;var l=gg(),u=pg();(Ne!==t||be!==n)&&($o=null,Ur(t,n)),n=!1;var p=Ye;e:do try{if(Le!==0&&de!==null){var w=de,L=Bt;switch(Le){case 8:ju(),p=6;break e;case 3:case 2:case 9:case 6:Xt.current===null&&(n=!0);var U=Le;if(Le=0,Bt=null,_r(t,w,L,U),r&&zr){p=0;break e}break;default:U=Le,Le=0,Bt=null,_r(t,w,L,U)}}c6(),p=Ye;break}catch(Z){mg(t,Z)}while(!0);return n&&t.shellSuspendCounter++,An=Ua=null,je=o,B.H=l,B.A=u,de===null&&(Ne=null,be=0,uo()),p}function c6(){for(;de!==null;)yg(de)}function u6(t,n){var r=je;je|=2;var o=gg(),l=pg();Ne!==t||be!==n?($o=null,Go=pn()+500,Ur(t,n)):zr=di(t,n);e:do try{if(Le!==0&&de!==null){n=de;var u=Bt;t:switch(Le){case 1:Le=0,Bt=null,_r(t,n,u,1);break;case 2:case 9:if(Th(u)){Le=0,Bt=null,bg(n);break}n=function(){Le!==2&&Le!==9||Ne!==t||(Le=7),xn(t)},u.then(n,n);break e;case 3:Le=7;break e;case 4:Le=5;break e;case 7:Th(u)?(Le=0,Bt=null,bg(n)):(Le=0,Bt=null,_r(t,n,u,7));break;case 5:var p=null;switch(de.tag){case 26:p=de.memoizedState;case 5:case 27:var w=de;if(!p||Kg(p)){Le=0,Bt=null;var L=w.sibling;if(L!==null)de=L;else{var U=w.return;U!==null?(de=U,Jo(U)):de=null}break t}}Le=0,Bt=null,_r(t,n,u,5);break;case 6:Le=0,Bt=null,_r(t,n,u,6);break;case 8:ju(),Ye=6;break e;default:throw Error(f(462))}}d6();break}catch(Z){mg(t,Z)}while(!0);return An=Ua=null,B.H=o,B.A=l,je=r,de!==null?0:(Ne=null,be=0,uo(),Ye)}function d6(){for(;de!==null&&!zb();)yg(de)}function yg(t){var n=Zm(t.alternate,t,Qn);t.memoizedProps=t.pendingProps,n===null?Jo(t):de=n}function bg(t){var n=t,r=n.alternate;switch(n.tag){case 15:case 0:n=Um(r,n,n.pendingProps,n.type,void 0,be);break;case 11:n=Um(r,n,n.pendingProps,n.type.render,n.ref,be);break;case 5:Yc(n);default:Hm(r,n),n=de=wh(n,Qn),n=Zm(r,n,Qn)}t.memoizedProps=t.pendingProps,n===null?Jo(t):de=n}function _r(t,n,r,o){An=Ua=null,Yc(n),Nr=null,Yi=0;var l=n.return;try{if(t6(t,l,n,r,be)){Ye=1,Oo(t,Pt(r,t.current)),de=null;return}}catch(u){if(l!==null)throw de=l,u;Ye=1,Oo(t,Pt(r,t.current)),de=null;return}n.flags&32768?(xe||o===1?t=!0:zr||(be&536870912)!==0?t=!1:(ia=t=!0,(o===2||o===9||o===3||o===6)&&(o=Xt.current,o!==null&&o.tag===13&&(o.flags|=16384))),wg(n,t)):Jo(n)}function Jo(t){var n=t;do{if((n.flags&32768)!==0){wg(n,ia);return}t=n.return;var r=a6(n.alternate,n,Qn);if(r!==null){de=r;return}if(n=n.sibling,n!==null){de=n;return}de=n=t}while(n!==null);Ye===0&&(Ye=5)}function wg(t,n){do{var r=r6(t.alternate,t);if(r!==null){r.flags&=32767,de=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(t=t.sibling,t!==null)){de=t;return}de=t=r}while(t!==null);Ye=6,de=null}function vg(t,n,r,o,l,u,p,w,L){t.cancelPendingCommit=null;do Ho();while(st!==0);if((je&6)!==0)throw Error(f(327));if(n!==null){if(n===t.current)throw Error(f(177));if(u=n.lanes|n.childLanes,u|=gc,Zb(t,r,u,p,w,L),t===Ne&&(de=Ne=null,be=0),Or=n,sa=t,Br=r,vu=u,xu=l,cg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,p6(Vf,function(){return Sg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,l=P.p,P.p=2,p=je,je|=4;try{i6(t,n,r)}finally{je=p,P.p=l,B.T=o}}st=1,xg(),Mg(),jg()}}function xg(){if(st===1){st=0;var t=sa,n=Or,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=B.T,B.T=null;var o=P.p;P.p=2;var l=je;je|=4;try{ag(n,t);var u=Bu,p=lh(t.containerInfo),w=u.focusedElem,L=u.selectionRange;if(p!==w&&w&&w.ownerDocument&&sh(w.ownerDocument.documentElement,w)){if(L!==null&&cc(w)){var U=L.start,Z=L.end;if(Z===void 0&&(Z=U),"selectionStart"in w)w.selectionStart=U,w.selectionEnd=Math.min(Z,w.value.length);else{var H=w.ownerDocument||document,Y=H&&H.defaultView||window;if(Y.getSelection){var Q=Y.getSelection(),ne=w.textContent.length,ee=Math.min(L.start,ne),Ee=L.end===void 0?ee:Math.min(L.end,ne);!Q.extend&&ee>Ee&&(p=Ee,Ee=ee,ee=p);var z=oh(w,ee),E=oh(w,Ee);if(z&&E&&(Q.rangeCount!==1||Q.anchorNode!==z.node||Q.anchorOffset!==z.offset||Q.focusNode!==E.node||Q.focusOffset!==E.offset)){var O=H.createRange();O.setStart(z.node,z.offset),Q.removeAllRanges(),ee>Ee?(Q.addRange(O),Q.extend(E.node,E.offset)):(O.setEnd(E.node,E.offset),Q.addRange(O))}}}}for(H=[],Q=w;Q=Q.parentNode;)Q.nodeType===1&&H.push({element:Q,left:Q.scrollLeft,top:Q.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<H.length;w++){var J=H[w];J.element.scrollLeft=J.left,J.element.scrollTop=J.top}}rs=!!Ou,Bu=Ou=null}finally{je=l,P.p=o,B.T=r}}t.current=n,st=2}}function Mg(){if(st===2){st=0;var t=sa,n=Or,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=B.T,B.T=null;var o=P.p;P.p=2;var l=je;je|=4;try{Km(t,n.alternate,n)}finally{je=l,P.p=o,B.T=r}}st=3}}function jg(){if(st===4||st===3){st=0,Rb();var t=sa,n=Or,r=Br,o=cg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?st=5:(st=0,Or=sa=null,Lg(t,t.pendingLanes));var l=t.pendingLanes;if(l===0&&(oa=null),$l(r),n=n.stateNode,It&&typeof It.onCommitFiberRoot=="function")try{It.onCommitFiberRoot(ui,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,l=P.p,P.p=2,B.T=null;try{for(var u=t.onRecoverableError,p=0;p<o.length;p++){var w=o[p];u(w.value,{componentStack:w.stack})}}finally{B.T=n,P.p=l}}(Br&3)!==0&&Ho(),xn(t),l=t.pendingLanes,(r&4194090)!==0&&(l&42)!==0?t===Mu?qi++:(qi=0,Mu=t):qi=0,Vi(0)}}function Lg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ti(n)))}function Ho(t){return xg(),Mg(),jg(),Sg()}function Sg(){if(st!==5)return!1;var t=sa,n=vu;vu=0;var r=$l(Br),o=B.T,l=P.p;try{P.p=32>r?32:r,B.T=null,r=xu,xu=null;var u=sa,p=Br;if(st=0,Or=sa=null,Br=0,(je&6)!==0)throw Error(f(331));var w=je;if(je|=4,sg(u.current),ig(u,u.current,p,r),je=w,Vi(0,!1),It&&typeof It.onPostCommitFiberRoot=="function")try{It.onPostCommitFiberRoot(ui,u)}catch{}return!0}finally{P.p=l,B.T=o,Lg(t,n)}}function Cg(t,n,r){n=Pt(r,n),n=eu(t.stateNode,n,2),t=Wn(t,n,2),t!==null&&(hi(t,2),xn(t))}function Te(t,n,r){if(t.tag===3)Cg(t,t,r);else for(;n!==null;){if(n.tag===3){Cg(n,t,r);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(oa===null||!oa.has(o))){t=Pt(r,t),r=Nm(2),o=Wn(n,r,2),o!==null&&(Im(r,o,n,t),hi(o,2),xn(o));break}}n=n.return}}function Cu(t,n,r){var o=t.pingCache;if(o===null){o=t.pingCache=new s6;var l=new Set;o.set(n,l)}else l=o.get(n),l===void 0&&(l=new Set,o.set(n,l));l.has(r)||(pu=!0,l.add(r),t=h6.bind(null,t,n,r),n.then(t,t))}function h6(t,n,r){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,Ne===t&&(be&r)===r&&(Ye===4||Ye===3&&(be&62914560)===be&&300>pn()-wu?(je&2)===0&&Ur(t,0):yu|=r,Rr===be&&(Rr=0)),xn(t)}function kg(t,n){n===0&&(n=j1()),t=vr(t,n),t!==null&&(hi(t,n),xn(t))}function m6(t){var n=t.memoizedState,r=0;n!==null&&(r=n.retryLane),kg(t,r)}function g6(t,n){var r=0;switch(t.tag){case 13:var o=t.stateNode,l=t.memoizedState;l!==null&&(r=l.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(f(314))}o!==null&&o.delete(n),kg(t,r)}function p6(t,n){return _l(t,n)}var Po=null,Yr=null,ku=!1,Fo=!1,Eu=!1,Ja=0;function xn(t){t!==Yr&&t.next===null&&(Yr===null?Po=Yr=t:Yr=Yr.next=t),Fo=!0,ku||(ku=!0,b6())}function Vi(t,n){if(!Eu&&Fo){Eu=!0;do for(var r=!1,o=Po;o!==null;){if(t!==0){var l=o.pendingLanes;if(l===0)var u=0;else{var p=o.suspendedLanes,w=o.pingedLanes;u=(1<<31-Dt(42|t)+1)-1,u&=l&~(p&~w),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(r=!0,Ig(o,u))}else u=be,u=Kf(o,o===Ne?u:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(u&3)===0||di(o,u)||(r=!0,Ig(o,u));o=o.next}while(r);Eu=!1}}function y6(){Eg()}function Eg(){Fo=ku=!1;var t=0;Ja!==0&&(C6()&&(t=Ja),Ja=0);for(var n=pn(),r=null,o=Po;o!==null;){var l=o.next,u=Tg(o,n);u===0?(o.next=null,r===null?Po=l:r.next=l,l===null&&(Yr=r)):(r=o,(t!==0||(u&3)!==0)&&(Fo=!0)),o=l}Vi(t)}function Tg(t,n){for(var r=t.suspendedLanes,o=t.pingedLanes,l=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var p=31-Dt(u),w=1<<p,L=l[p];L===-1?((w&r)===0||(w&o)!==0)&&(l[p]=$b(w,n)):L<=n&&(t.expiredLanes|=w),u&=~w}if(n=Ne,r=be,r=Kf(t,t===n?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,r===0||t===n&&(Le===2||Le===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Yl(o),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||di(t,r)){if(n=r&-r,n===t.callbackPriority)return n;switch(o!==null&&Yl(o),$l(r)){case 2:case 8:r=v1;break;case 32:r=Vf;break;case 268435456:r=x1;break;default:r=Vf}return o=Ng.bind(null,t),r=_l(r,o),t.callbackPriority=n,t.callbackNode=r,n}return o!==null&&o!==null&&Yl(o),t.callbackPriority=2,t.callbackNode=null,2}function Ng(t,n){if(st!==0&&st!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(Ho()&&t.callbackNode!==r)return null;var o=be;return o=Kf(t,t===Ne?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(dg(t,o,n),Tg(t,pn()),t.callbackNode!=null&&t.callbackNode===r?Ng.bind(null,t):null)}function Ig(t,n){if(Ho())return null;dg(t,n,!0)}function b6(){E6(function(){(je&6)!==0?_l(w1,y6):Eg()})}function Tu(){return Ja===0&&(Ja=M1()),Ja}function Dg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ro(""+t)}function Ag(t,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,t.id&&r.setAttribute("form",t.id),n.parentNode.insertBefore(r,n),t=new FormData(t),r.parentNode.removeChild(r),t}function w6(t,n,r,o,l){if(n==="submit"&&r&&r.stateNode===l){var u=Dg((l[Lt]||null).action),p=o.submitter;p&&(n=(n=p[Lt]||null)?Dg(n.formAction):p.getAttribute("formAction"),n!==null&&(u=n,p=null));var w=new so("action","action",null,o,l);t.push({event:w,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ja!==0){var L=p?Ag(l,p):new FormData(l);qc(r,{pending:!0,data:L,method:l.method,action:u},null,L)}}else typeof u=="function"&&(w.preventDefault(),L=p?Ag(l,p):new FormData(l),qc(r,{pending:!0,data:L,method:l.method,action:u},u,L))},currentTarget:l}]})}}for(var Nu=0;Nu<mc.length;Nu++){var Iu=mc[Nu],v6=Iu.toLowerCase(),x6=Iu[0].toUpperCase()+Iu.slice(1);on(v6,"on"+x6)}on(dh,"onAnimationEnd"),on(hh,"onAnimationIteration"),on(mh,"onAnimationStart"),on("dblclick","onDoubleClick"),on("focusin","onFocus"),on("focusout","onBlur"),on(Uw,"onTransitionRun"),on(_w,"onTransitionStart"),on(Yw,"onTransitionCancel"),on(gh,"onTransitionEnd"),cr("onMouseEnter",["mouseout","mouseover"]),cr("onMouseLeave",["mouseout","mouseover"]),cr("onPointerEnter",["pointerout","pointerover"]),cr("onPointerLeave",["pointerout","pointerover"]),Ta("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ta("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ta("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ta("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ta("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ta("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),M6=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xi));function zg(t,n){n=(n&4)!==0;for(var r=0;r<t.length;r++){var o=t[r],l=o.event;o=o.listeners;e:{var u=void 0;if(n)for(var p=o.length-1;0<=p;p--){var w=o[p],L=w.instance,U=w.currentTarget;if(w=w.listener,L!==u&&l.isPropagationStopped())break e;u=w,l.currentTarget=U;try{u(l)}catch(Z){Ro(Z)}l.currentTarget=null,u=L}else for(p=0;p<o.length;p++){if(w=o[p],L=w.instance,U=w.currentTarget,w=w.listener,L!==u&&l.isPropagationStopped())break e;u=w,l.currentTarget=U;try{u(l)}catch(Z){Ro(Z)}l.currentTarget=null,u=L}}}}function he(t,n){var r=n[Zl];r===void 0&&(r=n[Zl]=new Set);var o=t+"__bubble";r.has(o)||(Rg(n,t,2,!1),r.add(o))}function Du(t,n,r){var o=0;n&&(o|=4),Rg(r,t,o,n)}var qo="_reactListening"+Math.random().toString(36).slice(2);function Au(t){if(!t[qo]){t[qo]=!0,E1.forEach(function(r){r!=="selectionchange"&&(M6.has(r)||Du(r,!1,t),Du(r,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[qo]||(n[qo]=!0,Du("selectionchange",!1,n))}}function Rg(t,n,r,o){switch(i2(n)){case 2:var l=q6;break;case 8:l=V6;break;default:l=Pu}r=l.bind(null,n,r,t),l=void 0,!tc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),o?l!==void 0?t.addEventListener(n,r,{capture:!0,passive:l}):t.addEventListener(n,r,!0):l!==void 0?t.addEventListener(n,r,{passive:l}):t.addEventListener(n,r,!1)}function zu(t,n,r,o,l){var u=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var p=o.tag;if(p===3||p===4){var w=o.stateNode.containerInfo;if(w===l)break;if(p===4)for(p=o.return;p!==null;){var L=p.tag;if((L===3||L===4)&&p.stateNode.containerInfo===l)return;p=p.return}for(;w!==null;){if(p=or(w),p===null)return;if(L=p.tag,L===5||L===6||L===26||L===27){o=u=p;continue e}w=w.parentNode}}o=o.return}G1(function(){var U=u,Z=Kl(r),H=[];e:{var Y=ph.get(t);if(Y!==void 0){var Q=so,ne=t;switch(t){case"keypress":if(fo(r)===0)break e;case"keydown":case"keyup":Q=pw;break;case"focusin":ne="focus",Q=ic;break;case"focusout":ne="blur",Q=ic;break;case"beforeblur":case"afterblur":Q=ic;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Q=J1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Q=rw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Q=ww;break;case dh:case hh:case mh:Q=ow;break;case gh:Q=xw;break;case"scroll":case"scrollend":Q=nw;break;case"wheel":Q=jw;break;case"copy":case"cut":case"paste":Q=lw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Q=P1;break;case"toggle":case"beforetoggle":Q=Sw}var ee=(n&4)!==0,Ee=!ee&&(t==="scroll"||t==="scrollend"),z=ee?Y!==null?Y+"Capture":null:Y;ee=[];for(var E=U,O;E!==null;){var J=E;if(O=J.stateNode,J=J.tag,J!==5&&J!==26&&J!==27||O===null||z===null||(J=pi(E,z),J!=null&&ee.push(Wi(E,J,O))),Ee)break;E=E.return}0<ee.length&&(Y=new Q(Y,ne,null,r,Z),H.push({event:Y,listeners:ee}))}}if((n&7)===0){e:{if(Y=t==="mouseover"||t==="pointerover",Q=t==="mouseout"||t==="pointerout",Y&&r!==Wl&&(ne=r.relatedTarget||r.fromElement)&&(or(ne)||ne[fr]))break e;if((Q||Y)&&(Y=Z.window===Z?Z:(Y=Z.ownerDocument)?Y.defaultView||Y.parentWindow:window,Q?(ne=r.relatedTarget||r.toElement,Q=U,ne=ne?or(ne):null,ne!==null&&(Ee=d(ne),ee=ne.tag,ne!==Ee||ee!==5&&ee!==27&&ee!==6)&&(ne=null)):(Q=null,ne=U),Q!==ne)){if(ee=J1,J="onMouseLeave",z="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(ee=P1,J="onPointerLeave",z="onPointerEnter",E="pointer"),Ee=Q==null?Y:gi(Q),O=ne==null?Y:gi(ne),Y=new ee(J,E+"leave",Q,r,Z),Y.target=Ee,Y.relatedTarget=O,J=null,or(Z)===U&&(ee=new ee(z,E+"enter",ne,r,Z),ee.target=O,ee.relatedTarget=Ee,J=ee),Ee=J,Q&&ne)t:{for(ee=Q,z=ne,E=0,O=ee;O;O=Qr(O))E++;for(O=0,J=z;J;J=Qr(J))O++;for(;0<E-O;)ee=Qr(ee),E--;for(;0<O-E;)z=Qr(z),O--;for(;E--;){if(ee===z||z!==null&&ee===z.alternate)break t;ee=Qr(ee),z=Qr(z)}ee=null}else ee=null;Q!==null&&Og(H,Y,Q,ee,!1),ne!==null&&Ee!==null&&Og(H,Ee,ne,ee,!0)}}e:{if(Y=U?gi(U):window,Q=Y.nodeName&&Y.nodeName.toLowerCase(),Q==="select"||Q==="input"&&Y.type==="file")var V=th;else if(K1(Y))if(nh)V=Rw;else{V=Aw;var le=Dw}else Q=Y.nodeName,!Q||Q.toLowerCase()!=="input"||Y.type!=="checkbox"&&Y.type!=="radio"?U&&Xl(U.elementType)&&(V=th):V=zw;if(V&&(V=V(t,U))){eh(H,V,r,Z);break e}le&&le(t,Y,U),t==="focusout"&&U&&Y.type==="number"&&U.memoizedProps.value!=null&&Vl(Y,"number",Y.value)}switch(le=U?gi(U):window,t){case"focusin":(K1(le)||le.contentEditable==="true")&&(yr=le,uc=U,Li=null);break;case"focusout":Li=uc=yr=null;break;case"mousedown":dc=!0;break;case"contextmenu":case"mouseup":case"dragend":dc=!1,ch(H,r,Z);break;case"selectionchange":if(Bw)break;case"keydown":case"keyup":ch(H,r,Z)}var W;if(oc)e:{switch(t){case"compositionstart":var te="onCompositionStart";break e;case"compositionend":te="onCompositionEnd";break e;case"compositionupdate":te="onCompositionUpdate";break e}te=void 0}else pr?X1(t,r)&&(te="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(te="onCompositionStart");te&&(F1&&r.locale!=="ko"&&(pr||te!=="onCompositionStart"?te==="onCompositionEnd"&&pr&&(W=$1()):(Fn=Z,nc="value"in Fn?Fn.value:Fn.textContent,pr=!0)),le=Vo(U,te),0<le.length&&(te=new H1(te,t,null,r,Z),H.push({event:te,listeners:le}),W?te.data=W:(W=W1(r),W!==null&&(te.data=W)))),(W=kw?Ew(t,r):Tw(t,r))&&(te=Vo(U,"onBeforeInput"),0<te.length&&(le=new H1("onBeforeInput","beforeinput",null,r,Z),H.push({event:le,listeners:te}),le.data=W)),w6(H,t,U,r,Z)}zg(H,n)})}function Wi(t,n,r){return{instance:t,listener:n,currentTarget:r}}function Vo(t,n){for(var r=n+"Capture",o=[];t!==null;){var l=t,u=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||u===null||(l=pi(t,r),l!=null&&o.unshift(Wi(t,l,u)),l=pi(t,n),l!=null&&o.push(Wi(t,l,u))),t.tag===3)return o;t=t.return}return[]}function Qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Og(t,n,r,o,l){for(var u=n._reactName,p=[];r!==null&&r!==o;){var w=r,L=w.alternate,U=w.stateNode;if(w=w.tag,L!==null&&L===o)break;w!==5&&w!==26&&w!==27||U===null||(L=U,l?(U=pi(r,u),U!=null&&p.unshift(Wi(r,U,L))):l||(U=pi(r,u),U!=null&&p.push(Wi(r,U,L)))),r=r.return}p.length!==0&&t.push({event:n,listeners:p})}var j6=/\r\n?/g,L6=/\u0000|\uFFFD/g;function Bg(t){return(typeof t=="string"?t:""+t).replace(j6,`
`).replace(L6,"")}function Ug(t,n){return n=Bg(n),Bg(t)===n}function Xo(){}function ke(t,n,r,o,l,u){switch(r){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||hr(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&hr(t,""+o);break;case"className":to(t,"class",o);break;case"tabIndex":to(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":to(t,r,o);break;case"style":Y1(t,o,u);break;case"data":if(n!=="object"){to(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||r!=="href")){t.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=ro(""+o),t.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(r==="formAction"?(n!=="input"&&ke(t,n,"name",l.name,l,null),ke(t,n,"formEncType",l.formEncType,l,null),ke(t,n,"formMethod",l.formMethod,l,null),ke(t,n,"formTarget",l.formTarget,l,null)):(ke(t,n,"encType",l.encType,l,null),ke(t,n,"method",l.method,l,null),ke(t,n,"target",l.target,l,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=ro(""+o),t.setAttribute(r,o);break;case"onClick":o!=null&&(t.onclick=Xo);break;case"onScroll":o!=null&&he("scroll",t);break;case"onScrollEnd":o!=null&&he("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(f(61));if(r=o.__html,r!=null){if(l.children!=null)throw Error(f(60));t.innerHTML=r}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}r=ro(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""+o):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":o===!0?t.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,o):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(r,o):t.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(r):t.setAttribute(r,o);break;case"popover":he("beforetoggle",t),he("toggle",t),eo(t,"popover",o);break;case"xlinkActuate":En(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":En(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":En(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":En(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":En(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":En(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":En(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":En(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":En(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":eo(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=ew.get(r)||r,eo(t,r,o))}}function Ru(t,n,r,o,l,u){switch(r){case"style":Y1(t,o,u);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(f(61));if(r=o.__html,r!=null){if(l.children!=null)throw Error(f(60));t.innerHTML=r}}break;case"children":typeof o=="string"?hr(t,o):(typeof o=="number"||typeof o=="bigint")&&hr(t,""+o);break;case"onScroll":o!=null&&he("scroll",t);break;case"onScrollEnd":o!=null&&he("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Xo);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!T1.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(l=r.endsWith("Capture"),n=r.slice(2,l?r.length-7:void 0),u=t[Lt]||null,u=u!=null?u[r]:null,typeof u=="function"&&t.removeEventListener(n,u,l),typeof o=="function")){typeof u!="function"&&u!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(n,o,l);break e}r in t?t[r]=o:o===!0?t.setAttribute(r,""):eo(t,r,o)}}}function lt(t,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":he("error",t),he("load",t);var o=!1,l=!1,u;for(u in r)if(r.hasOwnProperty(u)){var p=r[u];if(p!=null)switch(u){case"src":o=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(f(137,n));default:ke(t,n,u,p,r,null)}}l&&ke(t,n,"srcSet",r.srcSet,r,null),o&&ke(t,n,"src",r.src,r,null);return;case"input":he("invalid",t);var w=u=p=l=null,L=null,U=null;for(o in r)if(r.hasOwnProperty(o)){var Z=r[o];if(Z!=null)switch(o){case"name":l=Z;break;case"type":p=Z;break;case"checked":L=Z;break;case"defaultChecked":U=Z;break;case"value":u=Z;break;case"defaultValue":w=Z;break;case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(f(137,n));break;default:ke(t,n,o,Z,r,null)}}O1(t,u,w,L,U,p,l,!1),no(t);return;case"select":he("invalid",t),o=p=u=null;for(l in r)if(r.hasOwnProperty(l)&&(w=r[l],w!=null))switch(l){case"value":u=w;break;case"defaultValue":p=w;break;case"multiple":o=w;default:ke(t,n,l,w,r,null)}n=u,r=p,t.multiple=!!o,n!=null?dr(t,!!o,n,!1):r!=null&&dr(t,!!o,r,!0);return;case"textarea":he("invalid",t),u=l=o=null;for(p in r)if(r.hasOwnProperty(p)&&(w=r[p],w!=null))switch(p){case"value":o=w;break;case"defaultValue":l=w;break;case"children":u=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(f(91));break;default:ke(t,n,p,w,r,null)}U1(t,o,l,u),no(t);return;case"option":for(L in r)if(r.hasOwnProperty(L)&&(o=r[L],o!=null))switch(L){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:ke(t,n,L,o,r,null)}return;case"dialog":he("beforetoggle",t),he("toggle",t),he("cancel",t),he("close",t);break;case"iframe":case"object":he("load",t);break;case"video":case"audio":for(o=0;o<Xi.length;o++)he(Xi[o],t);break;case"image":he("error",t),he("load",t);break;case"details":he("toggle",t);break;case"embed":case"source":case"link":he("error",t),he("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(U in r)if(r.hasOwnProperty(U)&&(o=r[U],o!=null))switch(U){case"children":case"dangerouslySetInnerHTML":throw Error(f(137,n));default:ke(t,n,U,o,r,null)}return;default:if(Xl(n)){for(Z in r)r.hasOwnProperty(Z)&&(o=r[Z],o!==void 0&&Ru(t,n,Z,o,r,void 0));return}}for(w in r)r.hasOwnProperty(w)&&(o=r[w],o!=null&&ke(t,n,w,o,r,null))}function S6(t,n,r,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,u=null,p=null,w=null,L=null,U=null,Z=null;for(Q in r){var H=r[Q];if(r.hasOwnProperty(Q)&&H!=null)switch(Q){case"checked":break;case"value":break;case"defaultValue":L=H;default:o.hasOwnProperty(Q)||ke(t,n,Q,null,o,H)}}for(var Y in o){var Q=o[Y];if(H=r[Y],o.hasOwnProperty(Y)&&(Q!=null||H!=null))switch(Y){case"type":u=Q;break;case"name":l=Q;break;case"checked":U=Q;break;case"defaultChecked":Z=Q;break;case"value":p=Q;break;case"defaultValue":w=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(f(137,n));break;default:Q!==H&&ke(t,n,Y,Q,o,H)}}ql(t,p,w,L,U,Z,u,l);return;case"select":Q=p=w=Y=null;for(u in r)if(L=r[u],r.hasOwnProperty(u)&&L!=null)switch(u){case"value":break;case"multiple":Q=L;default:o.hasOwnProperty(u)||ke(t,n,u,null,o,L)}for(l in o)if(u=o[l],L=r[l],o.hasOwnProperty(l)&&(u!=null||L!=null))switch(l){case"value":Y=u;break;case"defaultValue":w=u;break;case"multiple":p=u;default:u!==L&&ke(t,n,l,u,o,L)}n=w,r=p,o=Q,Y!=null?dr(t,!!r,Y,!1):!!o!=!!r&&(n!=null?dr(t,!!r,n,!0):dr(t,!!r,r?[]:"",!1));return;case"textarea":Q=Y=null;for(w in r)if(l=r[w],r.hasOwnProperty(w)&&l!=null&&!o.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:ke(t,n,w,null,o,l)}for(p in o)if(l=o[p],u=r[p],o.hasOwnProperty(p)&&(l!=null||u!=null))switch(p){case"value":Y=l;break;case"defaultValue":Q=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(f(91));break;default:l!==u&&ke(t,n,p,l,o,u)}B1(t,Y,Q);return;case"option":for(var ne in r)if(Y=r[ne],r.hasOwnProperty(ne)&&Y!=null&&!o.hasOwnProperty(ne))switch(ne){case"selected":t.selected=!1;break;default:ke(t,n,ne,null,o,Y)}for(L in o)if(Y=o[L],Q=r[L],o.hasOwnProperty(L)&&Y!==Q&&(Y!=null||Q!=null))switch(L){case"selected":t.selected=Y&&typeof Y!="function"&&typeof Y!="symbol";break;default:ke(t,n,L,Y,o,Q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in r)Y=r[ee],r.hasOwnProperty(ee)&&Y!=null&&!o.hasOwnProperty(ee)&&ke(t,n,ee,null,o,Y);for(U in o)if(Y=o[U],Q=r[U],o.hasOwnProperty(U)&&Y!==Q&&(Y!=null||Q!=null))switch(U){case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(f(137,n));break;default:ke(t,n,U,Y,o,Q)}return;default:if(Xl(n)){for(var Ee in r)Y=r[Ee],r.hasOwnProperty(Ee)&&Y!==void 0&&!o.hasOwnProperty(Ee)&&Ru(t,n,Ee,void 0,o,Y);for(Z in o)Y=o[Z],Q=r[Z],!o.hasOwnProperty(Z)||Y===Q||Y===void 0&&Q===void 0||Ru(t,n,Z,Y,o,Q);return}}for(var z in r)Y=r[z],r.hasOwnProperty(z)&&Y!=null&&!o.hasOwnProperty(z)&&ke(t,n,z,null,o,Y);for(H in o)Y=o[H],Q=r[H],!o.hasOwnProperty(H)||Y===Q||Y==null&&Q==null||ke(t,n,H,Y,o,Q)}var Ou=null,Bu=null;function Wo(t){return t.nodeType===9?t:t.ownerDocument}function _g(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Yg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Uu(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var _u=null;function C6(){var t=window.event;return t&&t.type==="popstate"?t===_u?!1:(_u=t,!0):(_u=null,!1)}var Qg=typeof setTimeout=="function"?setTimeout:void 0,k6=typeof clearTimeout=="function"?clearTimeout:void 0,Gg=typeof Promise=="function"?Promise:void 0,E6=typeof queueMicrotask=="function"?queueMicrotask:typeof Gg<"u"?function(t){return Gg.resolve(null).then(t).catch(T6)}:Qg;function T6(t){setTimeout(function(){throw t})}function ca(t){return t==="head"}function $g(t,n){var r=n,o=0,l=0;do{var u=r.nextSibling;if(t.removeChild(r),u&&u.nodeType===8)if(r=u.data,r==="/$"){if(0<o&&8>o){r=o;var p=t.ownerDocument;if(r&1&&Ki(p.documentElement),r&2&&Ki(p.body),r&4)for(r=p.head,Ki(r),p=r.firstChild;p;){var w=p.nextSibling,L=p.nodeName;p[mi]||L==="SCRIPT"||L==="STYLE"||L==="LINK"&&p.rel.toLowerCase()==="stylesheet"||r.removeChild(p),p=w}}if(l===0){t.removeChild(u),sf(n);return}l--}else r==="$"||r==="$?"||r==="$!"?l++:o=r.charCodeAt(0)-48;else o=0;r=u}while(r);sf(n)}function Yu(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Yu(r),Jl(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function N6(t,n,r,o){for(;t.nodeType===1;){var l=r;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[mi])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var u=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=ln(t.nextSibling),t===null)break}return null}function I6(t,n,r){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=ln(t.nextSibling),t===null))return null;return t}function Qu(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function D6(t,n){var r=t.ownerDocument;if(t.data!=="$?"||r.readyState==="complete")n();else{var o=function(){n(),r.removeEventListener("DOMContentLoaded",o)};r.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function ln(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var Gu=null;function Zg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(n===0)return t;n--}else r==="/$"&&n++}t=t.previousSibling}return null}function Jg(t,n,r){switch(n=Wo(r),t){case"html":if(t=n.documentElement,!t)throw Error(f(452));return t;case"head":if(t=n.head,!t)throw Error(f(453));return t;case"body":if(t=n.body,!t)throw Error(f(454));return t;default:throw Error(f(451))}}function Ki(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Jl(t)}var Kt=new Map,Hg=new Set;function Ko(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Gn=P.d;P.d={f:A6,r:z6,D:R6,C:O6,L:B6,m:U6,X:Y6,S:_6,M:Q6};function A6(){var t=Gn.f(),n=Zo();return t||n}function z6(t){var n=sr(t);n!==null&&n.tag===5&&n.type==="form"?dm(n):Gn.r(t)}var Gr=typeof document>"u"?null:document;function Pg(t,n,r){var o=Gr;if(o&&typeof n=="string"&&n){var l=Ht(n);l='link[rel="'+t+'"][href="'+l+'"]',typeof r=="string"&&(l+='[crossorigin="'+r+'"]'),Hg.has(l)||(Hg.add(l),t={rel:t,crossOrigin:r,href:n},o.querySelector(l)===null&&(n=o.createElement("link"),lt(n,"link",t),et(n),o.head.appendChild(n)))}}function R6(t){Gn.D(t),Pg("dns-prefetch",t,null)}function O6(t,n){Gn.C(t,n),Pg("preconnect",t,n)}function B6(t,n,r){Gn.L(t,n,r);var o=Gr;if(o&&t&&n){var l='link[rel="preload"][as="'+Ht(n)+'"]';n==="image"&&r&&r.imageSrcSet?(l+='[imagesrcset="'+Ht(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(l+='[imagesizes="'+Ht(r.imageSizes)+'"]')):l+='[href="'+Ht(t)+'"]';var u=l;switch(n){case"style":u=$r(t);break;case"script":u=Zr(t)}Kt.has(u)||(t=v({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:t,as:n},r),Kt.set(u,t),o.querySelector(l)!==null||n==="style"&&o.querySelector(ef(u))||n==="script"&&o.querySelector(tf(u))||(n=o.createElement("link"),lt(n,"link",t),et(n),o.head.appendChild(n)))}}function U6(t,n){Gn.m(t,n);var r=Gr;if(r&&t){var o=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+Ht(o)+'"][href="'+Ht(t)+'"]',u=l;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Zr(t)}if(!Kt.has(u)&&(t=v({rel:"modulepreload",href:t},n),Kt.set(u,t),r.querySelector(l)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(tf(u)))return}o=r.createElement("link"),lt(o,"link",t),et(o),r.head.appendChild(o)}}}function _6(t,n,r){Gn.S(t,n,r);var o=Gr;if(o&&t){var l=lr(o).hoistableStyles,u=$r(t);n=n||"default";var p=l.get(u);if(!p){var w={loading:0,preload:null};if(p=o.querySelector(ef(u)))w.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},r),(r=Kt.get(u))&&$u(t,r);var L=p=o.createElement("link");et(L),lt(L,"link",t),L._p=new Promise(function(U,Z){L.onload=U,L.onerror=Z}),L.addEventListener("load",function(){w.loading|=1}),L.addEventListener("error",function(){w.loading|=2}),w.loading|=4,es(p,n,o)}p={type:"stylesheet",instance:p,count:1,state:w},l.set(u,p)}}}function Y6(t,n){Gn.X(t,n);var r=Gr;if(r&&t){var o=lr(r).hoistableScripts,l=Zr(t),u=o.get(l);u||(u=r.querySelector(tf(l)),u||(t=v({src:t,async:!0},n),(n=Kt.get(l))&&Zu(t,n),u=r.createElement("script"),et(u),lt(u,"link",t),r.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(l,u))}}function Q6(t,n){Gn.M(t,n);var r=Gr;if(r&&t){var o=lr(r).hoistableScripts,l=Zr(t),u=o.get(l);u||(u=r.querySelector(tf(l)),u||(t=v({src:t,async:!0,type:"module"},n),(n=Kt.get(l))&&Zu(t,n),u=r.createElement("script"),et(u),lt(u,"link",t),r.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(l,u))}}function Fg(t,n,r,o){var l=(l=Mt.current)?Ko(l):null;if(!l)throw Error(f(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=$r(r.href),r=lr(l).hoistableStyles,o=r.get(n),o||(o={type:"style",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=$r(r.href);var u=lr(l).hoistableStyles,p=u.get(t);if(p||(l=l.ownerDocument||l,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,p),(u=l.querySelector(ef(t)))&&!u._p&&(p.instance=u,p.state.loading=5),Kt.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Kt.set(t,r),u||G6(l,t,r,p.state))),n&&o===null)throw Error(f(528,""));return p}if(n&&o!==null)throw Error(f(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Zr(r),r=lr(l).hoistableScripts,o=r.get(n),o||(o={type:"script",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(f(444,t))}}function $r(t){return'href="'+Ht(t)+'"'}function ef(t){return'link[rel="stylesheet"]['+t+"]"}function qg(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function G6(t,n,r,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),lt(n,"link",r),et(n),t.head.appendChild(n))}function Zr(t){return'[src="'+Ht(t)+'"]'}function tf(t){return"script[async]"+t}function Vg(t,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Ht(r.href)+'"]');if(o)return n.instance=o,et(o),o;var l=v({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),et(o),lt(o,"style",l),es(o,r.precedence,t),n.instance=o;case"stylesheet":l=$r(r.href);var u=t.querySelector(ef(l));if(u)return n.state.loading|=4,n.instance=u,et(u),u;o=qg(r),(l=Kt.get(l))&&$u(o,l),u=(t.ownerDocument||t).createElement("link"),et(u);var p=u;return p._p=new Promise(function(w,L){p.onload=w,p.onerror=L}),lt(u,"link",o),n.state.loading|=4,es(u,r.precedence,t),n.instance=u;case"script":return u=Zr(r.src),(l=t.querySelector(tf(u)))?(n.instance=l,et(l),l):(o=r,(l=Kt.get(u))&&(o=v({},r),Zu(o,l)),t=t.ownerDocument||t,l=t.createElement("script"),et(l),lt(l,"link",o),t.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(f(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,es(o,r.precedence,t));return n.instance}function es(t,n,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=o.length?o[o.length-1]:null,u=l,p=0;p<o.length;p++){var w=o[p];if(w.dataset.precedence===n)u=w;else if(u!==l)break}u?u.parentNode.insertBefore(t,u.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(t,n.firstChild))}function $u(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Zu(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var ts=null;function Xg(t,n,r){if(ts===null){var o=new Map,l=ts=new Map;l.set(r,o)}else l=ts,o=l.get(r),o||(o=new Map,l.set(r,o));if(o.has(t))return o;for(o.set(t,null),r=r.getElementsByTagName(t),l=0;l<r.length;l++){var u=r[l];if(!(u[mi]||u[ut]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var p=u.getAttribute(n)||"";p=t+p;var w=o.get(p);w?w.push(u):o.set(p,[u])}}return o}function Wg(t,n,r){t=t.ownerDocument||t,t.head.insertBefore(r,n==="title"?t.querySelector("head > title"):null)}function $6(t,n,r){if(r===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Kg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var nf=null;function Z6(){}function J6(t,n,r){if(nf===null)throw Error(f(475));var o=nf;if(n.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=$r(r.href),u=t.querySelector(ef(l));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=ns.bind(o),t.then(o,o)),n.state.loading|=4,n.instance=u,et(u);return}u=t.ownerDocument||t,r=qg(r),(l=Kt.get(l))&&$u(r,l),u=u.createElement("link"),et(u);var p=u;p._p=new Promise(function(w,L){p.onload=w,p.onerror=L}),lt(u,"link",r),n.instance=u}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=ns.bind(o),t.addEventListener("load",n),t.addEventListener("error",n))}}function H6(){if(nf===null)throw Error(f(475));var t=nf;return t.stylesheets&&t.count===0&&Ju(t,t.stylesheets),0<t.count?function(n){var r=setTimeout(function(){if(t.stylesheets&&Ju(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(r)}}:null}function ns(){if(this.count--,this.count===0){if(this.stylesheets)Ju(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var as=null;function Ju(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,as=new Map,n.forEach(P6,t),as=null,ns.call(t))}function P6(t,n){if(!(n.state.loading&4)){var r=as.get(t);if(r)var o=r.get(null);else{r=new Map,as.set(t,r);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<l.length;u++){var p=l[u];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(r.set(p.dataset.precedence,p),o=p)}o&&r.set(null,o)}l=n.instance,p=l.getAttribute("data-precedence"),u=r.get(p)||o,u===o&&r.set(null,l),r.set(p,l),this.count++,o=ns.bind(this),l.addEventListener("load",o),l.addEventListener("error",o),u?u.parentNode.insertBefore(l,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),n.state.loading|=4}}var af={$$typeof:_,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function F6(t,n,r,o,l,u,p,w){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ql(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ql(0),this.hiddenUpdates=Ql(null),this.identifierPrefix=o,this.onUncaughtError=l,this.onCaughtError=u,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function e2(t,n,r,o,l,u,p,w,L,U,Z,H){return t=new F6(t,n,r,p,w,L,U,H),n=1,u===!0&&(n|=24),u=zt(3,null,null,n),t.current=u,u.stateNode=t,n=Cc(),n.refCount++,t.pooledCache=n,n.refCount++,u.memoizedState={element:o,isDehydrated:r,cache:n},Nc(u),t}function t2(t){return t?(t=xr,t):xr}function n2(t,n,r,o,l,u){l=t2(l),o.context===null?o.context=l:o.pendingContext=l,o=Xn(n),o.payload={element:r},u=u===void 0?null:u,u!==null&&(o.callback=u),r=Wn(t,o,n),r!==null&&(_t(r,t,n),Ai(r,t,n))}function a2(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<n?r:n}}function Hu(t,n){a2(t,n),(t=t.alternate)&&a2(t,n)}function r2(t){if(t.tag===13){var n=vr(t,67108864);n!==null&&_t(n,t,67108864),Hu(t,67108864)}}var rs=!0;function q6(t,n,r,o){var l=B.T;B.T=null;var u=P.p;try{P.p=2,Pu(t,n,r,o)}finally{P.p=u,B.T=l}}function V6(t,n,r,o){var l=B.T;B.T=null;var u=P.p;try{P.p=8,Pu(t,n,r,o)}finally{P.p=u,B.T=l}}function Pu(t,n,r,o){if(rs){var l=Fu(o);if(l===null)zu(t,n,o,is,r),f2(t,o);else if(W6(l,t,n,r,o))o.stopPropagation();else if(f2(t,o),n&4&&-1<X6.indexOf(t)){for(;l!==null;){var u=sr(l);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var p=Ea(u.pendingLanes);if(p!==0){var w=u;for(w.pendingLanes|=2,w.entangledLanes|=2;p;){var L=1<<31-Dt(p);w.entanglements[1]|=L,p&=~L}xn(u),(je&6)===0&&(Go=pn()+500,Vi(0))}}break;case 13:w=vr(u,2),w!==null&&_t(w,u,2),Zo(),Hu(u,2)}if(u=Fu(o),u===null&&zu(t,n,o,is,r),u===l)break;l=u}l!==null&&o.stopPropagation()}else zu(t,n,o,null,r)}}function Fu(t){return t=Kl(t),qu(t)}var is=null;function qu(t){if(is=null,t=or(t),t!==null){var n=d(t);if(n===null)t=null;else{var r=n.tag;if(r===13){if(t=m(n),t!==null)return t;t=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return is=t,null}function i2(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ob()){case w1:return 2;case v1:return 8;case Vf:case Bb:return 32;case x1:return 268435456;default:return 32}default:return 32}}var Vu=!1,ua=null,da=null,ha=null,rf=new Map,ff=new Map,ma=[],X6="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function f2(t,n){switch(t){case"focusin":case"focusout":ua=null;break;case"dragenter":case"dragleave":da=null;break;case"mouseover":case"mouseout":ha=null;break;case"pointerover":case"pointerout":rf.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ff.delete(n.pointerId)}}function of(t,n,r,o,l,u){return t===null||t.nativeEvent!==u?(t={blockedOn:n,domEventName:r,eventSystemFlags:o,nativeEvent:u,targetContainers:[l]},n!==null&&(n=sr(n),n!==null&&r2(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),t)}function W6(t,n,r,o,l){switch(n){case"focusin":return ua=of(ua,t,n,r,o,l),!0;case"dragenter":return da=of(da,t,n,r,o,l),!0;case"mouseover":return ha=of(ha,t,n,r,o,l),!0;case"pointerover":var u=l.pointerId;return rf.set(u,of(rf.get(u)||null,t,n,r,o,l)),!0;case"gotpointercapture":return u=l.pointerId,ff.set(u,of(ff.get(u)||null,t,n,r,o,l)),!0}return!1}function o2(t){var n=or(t.target);if(n!==null){var r=d(n);if(r!==null){if(n=r.tag,n===13){if(n=m(r),n!==null){t.blockedOn=n,Jb(t.priority,function(){if(r.tag===13){var o=Ut();o=Gl(o);var l=vr(r,o);l!==null&&_t(l,r,o),Hu(r,o)}});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fs(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var r=Fu(t.nativeEvent);if(r===null){r=t.nativeEvent;var o=new r.constructor(r.type,r);Wl=o,r.target.dispatchEvent(o),Wl=null}else return n=sr(r),n!==null&&r2(n),t.blockedOn=r,!1;n.shift()}return!0}function s2(t,n,r){fs(t)&&r.delete(n)}function K6(){Vu=!1,ua!==null&&fs(ua)&&(ua=null),da!==null&&fs(da)&&(da=null),ha!==null&&fs(ha)&&(ha=null),rf.forEach(s2),ff.forEach(s2)}function os(t,n){t.blockedOn===n&&(t.blockedOn=null,Vu||(Vu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,K6)))}var ss=null;function l2(t){ss!==t&&(ss=t,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){ss===t&&(ss=null);for(var n=0;n<t.length;n+=3){var r=t[n],o=t[n+1],l=t[n+2];if(typeof o!="function"){if(qu(o||r)===null)continue;break}var u=sr(r);u!==null&&(t.splice(n,3),n-=3,qc(u,{pending:!0,data:l,method:r.method,action:o},o,l))}}))}function sf(t){function n(L){return os(L,t)}ua!==null&&os(ua,t),da!==null&&os(da,t),ha!==null&&os(ha,t),rf.forEach(n),ff.forEach(n);for(var r=0;r<ma.length;r++){var o=ma[r];o.blockedOn===t&&(o.blockedOn=null)}for(;0<ma.length&&(r=ma[0],r.blockedOn===null);)o2(r),r.blockedOn===null&&ma.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var l=r[o],u=r[o+1],p=l[Lt]||null;if(typeof u=="function")p||l2(r);else if(p){var w=null;if(u&&u.hasAttribute("formAction")){if(l=u,p=u[Lt]||null)w=p.formAction;else if(qu(l)!==null)continue}else w=p.action;typeof w=="function"?r[o+1]=w:(r.splice(o,3),o-=3),l2(r)}}}function Xu(t){this._internalRoot=t}ls.prototype.render=Xu.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(f(409));var r=n.current,o=Ut();n2(r,o,t,n,null,null)},ls.prototype.unmount=Xu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;n2(t.current,2,null,t,null,null),Zo(),n[fr]=null}};function ls(t){this._internalRoot=t}ls.prototype.unstable_scheduleHydration=function(t){if(t){var n=C1();t={blockedOn:null,target:t,priority:n};for(var r=0;r<ma.length&&n!==0&&n<ma[r].priority;r++);ma.splice(r,0,t),r===0&&o2(t)}};var c2=a.version;if(c2!=="19.1.0")throw Error(f(527,c2,"19.1.0"));P.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(f(188)):(t=Object.keys(t).join(","),Error(f(268,t)));return t=b(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var ev={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cs.isDisabled&&cs.supportsFiber)try{ui=cs.inject(ev),It=cs}catch{}}return cf.createRoot=function(t,n){if(!c(t))throw Error(f(299));var r=!1,o="",l=Cm,u=km,p=Em,w=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(p=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(w=n.unstable_transitionCallbacks)),n=e2(t,1,!1,null,null,r,o,l,u,p,w,null),t[fr]=n.current,Au(t),new Xu(n)},cf.hydrateRoot=function(t,n,r){if(!c(t))throw Error(f(299));var o=!1,l="",u=Cm,p=km,w=Em,L=null,U=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onUncaughtError!==void 0&&(u=r.onUncaughtError),r.onCaughtError!==void 0&&(p=r.onCaughtError),r.onRecoverableError!==void 0&&(w=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(L=r.unstable_transitionCallbacks),r.formState!==void 0&&(U=r.formState)),n=e2(t,1,!0,n,r??null,o,l,u,p,w,L,U),n.context=t2(null),r=n.current,o=Ut(),o=Gl(o),l=Xn(o),l.callback=null,Wn(r,l,o),r=o,n.current.lanes=r,hi(n,r),xn(n),t[fr]=n.current,Au(t),new ls(n)},cf.version="19.1.0",cf}var p2;function uv(){if(p2)return Ku.exports;p2=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(a){console.error(a)}}return e(),Ku.exports=cv(),Ku.exports}var dv=uv(),ft=function(){return ft=Object.assign||function(a){for(var i,f=1,c=arguments.length;f<c;f++){i=arguments[f];for(var d in i)Object.prototype.hasOwnProperty.call(i,d)&&(a[d]=i[d])}return a},ft.apply(this,arguments)};function Xr(e,a,i){if(i||arguments.length===2)for(var f=0,c=a.length,d;f<c;f++)(d||!(f in a))&&(d||(d=Array.prototype.slice.call(a,0,f)),d[f]=a[f]);return e.concat(d||Array.prototype.slice.call(a))}var Ie="-ms-",Lf="-moz-",Me="-webkit-",M4="comm",sl="rule",D0="decl",hv="@import",j4="@keyframes",mv="@layer",L4=Math.abs,A0=String.fromCharCode,a0=Object.assign;function gv(e,a){return rt(e,0)^45?(((a<<2^rt(e,0))<<2^rt(e,1))<<2^rt(e,2))<<2^rt(e,3):0}function S4(e){return e.trim()}function $n(e,a){return(e=a.exec(e))?e[0]:e}function ie(e,a,i){return e.replace(a,i)}function ks(e,a,i){return e.indexOf(a,i)}function rt(e,a){return e.charCodeAt(a)|0}function Wr(e,a,i){return e.slice(a,i)}function Ln(e){return e.length}function C4(e){return e.length}function vf(e,a){return a.push(e),e}function pv(e,a){return e.map(a).join("")}function y2(e,a){return e.filter(function(i){return!$n(i,a)})}var ll=1,Kr=1,k4=0,an=0,Fe=0,ii="";function cl(e,a,i,f,c,d,m,y){return{value:e,root:a,parent:i,type:f,props:c,children:d,line:ll,column:Kr,length:m,return:"",siblings:y}}function ya(e,a){return a0(cl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},a)}function Jr(e){for(;e.root;)e=ya(e.root,{children:[e]});vf(e,e.siblings)}function yv(){return Fe}function bv(){return Fe=an>0?rt(ii,--an):0,Kr--,Fe===10&&(Kr=1,ll--),Fe}function dn(){return Fe=an<k4?rt(ii,an++):0,Kr++,Fe===10&&(Kr=1,ll++),Fe}function qa(){return rt(ii,an)}function Es(){return an}function ul(e,a){return Wr(ii,e,a)}function r0(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function wv(e){return ll=Kr=1,k4=Ln(ii=e),an=0,[]}function vv(e){return ii="",e}function nd(e){return S4(ul(an-1,i0(e===91?e+2:e===40?e+1:e)))}function xv(e){for(;(Fe=qa())&&Fe<33;)dn();return r0(e)>2||r0(Fe)>3?"":" "}function Mv(e,a){for(;--a&&dn()&&!(Fe<48||Fe>102||Fe>57&&Fe<65||Fe>70&&Fe<97););return ul(e,Es()+(a<6&&qa()==32&&dn()==32))}function i0(e){for(;dn();)switch(Fe){case e:return an;case 34:case 39:e!==34&&e!==39&&i0(Fe);break;case 40:e===41&&i0(e);break;case 92:dn();break}return an}function jv(e,a){for(;dn()&&e+Fe!==57;)if(e+Fe===84&&qa()===47)break;return"/*"+ul(a,an-1)+"*"+A0(e===47?e:dn())}function Lv(e){for(;!r0(qa());)dn();return ul(e,an)}function Sv(e){return vv(Ts("",null,null,null,[""],e=wv(e),0,[0],e))}function Ts(e,a,i,f,c,d,m,y,b){for(var x=0,v=0,M=m,j=0,k=0,I=0,S=1,N=1,R=1,A=0,_="",T=c,C=d,D=f,G=_;N;)switch(I=A,A=dn()){case 40:if(I!=108&&rt(G,M-1)==58){ks(G+=ie(nd(A),"&","&\f"),"&\f",L4(x?y[x-1]:0))!=-1&&(R=-1);break}case 34:case 39:case 91:G+=nd(A);break;case 9:case 10:case 13:case 32:G+=xv(I);break;case 92:G+=Mv(Es()-1,7);continue;case 47:switch(qa()){case 42:case 47:vf(Cv(jv(dn(),Es()),a,i,b),b);break;default:G+="/"}break;case 123*S:y[x++]=Ln(G)*R;case 125*S:case 59:case 0:switch(A){case 0:case 125:N=0;case 59+v:R==-1&&(G=ie(G,/\f/g,"")),k>0&&Ln(G)-M&&vf(k>32?w2(G+";",f,i,M-1,b):w2(ie(G," ","")+";",f,i,M-2,b),b);break;case 59:G+=";";default:if(vf(D=b2(G,a,i,x,v,c,y,_,T=[],C=[],M,d),d),A===123)if(v===0)Ts(G,a,D,D,T,d,M,y,C);else switch(j===99&&rt(G,3)===110?100:j){case 100:case 108:case 109:case 115:Ts(e,D,D,f&&vf(b2(e,D,D,0,0,c,y,_,c,T=[],M,C),C),c,C,M,y,f?T:C);break;default:Ts(G,D,D,D,[""],C,0,y,C)}}x=v=k=0,S=R=1,_=G="",M=m;break;case 58:M=1+Ln(G),k=I;default:if(S<1){if(A==123)--S;else if(A==125&&S++==0&&bv()==125)continue}switch(G+=A0(A),A*S){case 38:R=v>0?1:(G+="\f",-1);break;case 44:y[x++]=(Ln(G)-1)*R,R=1;break;case 64:qa()===45&&(G+=nd(dn())),j=qa(),v=M=Ln(_=G+=Lv(Es())),A++;break;case 45:I===45&&Ln(G)==2&&(S=0)}}return d}function b2(e,a,i,f,c,d,m,y,b,x,v,M){for(var j=c-1,k=c===0?d:[""],I=C4(k),S=0,N=0,R=0;S<f;++S)for(var A=0,_=Wr(e,j+1,j=L4(N=m[S])),T=e;A<I;++A)(T=S4(N>0?k[A]+" "+_:ie(_,/&\f/g,k[A])))&&(b[R++]=T);return cl(e,a,i,c===0?sl:y,b,x,v,M)}function Cv(e,a,i,f){return cl(e,a,i,M4,A0(yv()),Wr(e,2,-2),0,f)}function w2(e,a,i,f,c){return cl(e,a,i,D0,Wr(e,0,f),Wr(e,f+1,-1),f,c)}function E4(e,a,i){switch(gv(e,a)){case 5103:return Me+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Me+e+e;case 4789:return Lf+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Me+e+Lf+e+Ie+e+e;case 5936:switch(rt(e,a+11)){case 114:return Me+e+Ie+ie(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Me+e+Ie+ie(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Me+e+Ie+ie(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Me+e+Ie+e+e;case 6165:return Me+e+Ie+"flex-"+e+e;case 5187:return Me+e+ie(e,/(\w+).+(:[^]+)/,Me+"box-$1$2"+Ie+"flex-$1$2")+e;case 5443:return Me+e+Ie+"flex-item-"+ie(e,/flex-|-self/g,"")+($n(e,/flex-|baseline/)?"":Ie+"grid-row-"+ie(e,/flex-|-self/g,""))+e;case 4675:return Me+e+Ie+"flex-line-pack"+ie(e,/align-content|flex-|-self/g,"")+e;case 5548:return Me+e+Ie+ie(e,"shrink","negative")+e;case 5292:return Me+e+Ie+ie(e,"basis","preferred-size")+e;case 6060:return Me+"box-"+ie(e,"-grow","")+Me+e+Ie+ie(e,"grow","positive")+e;case 4554:return Me+ie(e,/([^-])(transform)/g,"$1"+Me+"$2")+e;case 6187:return ie(ie(ie(e,/(zoom-|grab)/,Me+"$1"),/(image-set)/,Me+"$1"),e,"")+e;case 5495:case 3959:return ie(e,/(image-set\([^]*)/,Me+"$1$`$1");case 4968:return ie(ie(e,/(.+:)(flex-)?(.*)/,Me+"box-pack:$3"+Ie+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Me+e+e;case 4200:if(!$n(e,/flex-|baseline/))return Ie+"grid-column-align"+Wr(e,a)+e;break;case 2592:case 3360:return Ie+ie(e,"template-","")+e;case 4384:case 3616:return i&&i.some(function(f,c){return a=c,$n(f.props,/grid-\w+-end/)})?~ks(e+(i=i[a].value),"span",0)?e:Ie+ie(e,"-start","")+e+Ie+"grid-row-span:"+(~ks(i,"span",0)?$n(i,/\d+/):+$n(i,/\d+/)-+$n(e,/\d+/))+";":Ie+ie(e,"-start","")+e;case 4896:case 4128:return i&&i.some(function(f){return $n(f.props,/grid-\w+-start/)})?e:Ie+ie(ie(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ie(e,/(.+)-inline(.+)/,Me+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ln(e)-1-a>6)switch(rt(e,a+1)){case 109:if(rt(e,a+4)!==45)break;case 102:return ie(e,/(.+:)(.+)-([^]+)/,"$1"+Me+"$2-$3$1"+Lf+(rt(e,a+3)==108?"$3":"$2-$3"))+e;case 115:return~ks(e,"stretch",0)?E4(ie(e,"stretch","fill-available"),a,i)+e:e}break;case 5152:case 5920:return ie(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(f,c,d,m,y,b,x){return Ie+c+":"+d+x+(m?Ie+c+"-span:"+(y?b:+b-+d)+x:"")+e});case 4949:if(rt(e,a+6)===121)return ie(e,":",":"+Me)+e;break;case 6444:switch(rt(e,rt(e,14)===45?18:11)){case 120:return ie(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Me+(rt(e,14)===45?"inline-":"")+"box$3$1"+Me+"$2$3$1"+Ie+"$2box$3")+e;case 100:return ie(e,":",":"+Ie)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ie(e,"scroll-","scroll-snap-")+e}return e}function Fs(e,a){for(var i="",f=0;f<e.length;f++)i+=a(e[f],f,e,a)||"";return i}function kv(e,a,i,f){switch(e.type){case mv:if(e.children.length)break;case hv:case D0:return e.return=e.return||e.value;case M4:return"";case j4:return e.return=e.value+"{"+Fs(e.children,f)+"}";case sl:if(!Ln(e.value=e.props.join(",")))return""}return Ln(i=Fs(e.children,f))?e.return=e.value+"{"+i+"}":""}function Ev(e){var a=C4(e);return function(i,f,c,d){for(var m="",y=0;y<a;y++)m+=e[y](i,f,c,d)||"";return m}}function Tv(e){return function(a){a.root||(a=a.return)&&e(a)}}function Nv(e,a,i,f){if(e.length>-1&&!e.return)switch(e.type){case D0:e.return=E4(e.value,e.length,i);return;case j4:return Fs([ya(e,{value:ie(e.value,"@","@"+Me)})],f);case sl:if(e.length)return pv(i=e.props,function(c){switch($n(c,f=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Jr(ya(e,{props:[ie(c,/:(read-\w+)/,":"+Lf+"$1")]})),Jr(ya(e,{props:[c]})),a0(e,{props:y2(i,f)});break;case"::placeholder":Jr(ya(e,{props:[ie(c,/:(plac\w+)/,":"+Me+"input-$1")]})),Jr(ya(e,{props:[ie(c,/:(plac\w+)/,":"+Lf+"$1")]})),Jr(ya(e,{props:[ie(c,/:(plac\w+)/,Ie+"input-$1")]})),Jr(ya(e,{props:[c]})),a0(e,{props:y2(i,f)});break}return""})}}var Iv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Yt={},ei=typeof process<"u"&&Yt!==void 0&&(Yt.REACT_APP_SC_ATTR||Yt.SC_ATTR)||"data-styled",T4="active",N4="data-styled-version",dl="6.1.18",z0=`/*!sc*/
`,qs=typeof window<"u"&&typeof document<"u",Dv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Yt!==void 0&&Yt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Yt.REACT_APP_SC_DISABLE_SPEEDY!==""?Yt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Yt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Yt!==void 0&&Yt.SC_DISABLE_SPEEDY!==void 0&&Yt.SC_DISABLE_SPEEDY!==""&&Yt.SC_DISABLE_SPEEDY!=="false"&&Yt.SC_DISABLE_SPEEDY),Av={},hl=Object.freeze([]),ti=Object.freeze({});function I4(e,a,i){return i===void 0&&(i=ti),e.theme!==i.theme&&e.theme||a||i.theme}var D4=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),zv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Rv=/(^-|-$)/g;function v2(e){return e.replace(zv,"-").replace(Rv,"")}var Ov=/(a)(d)/gi,us=52,x2=function(e){return String.fromCharCode(e+(e>25?39:97))};function f0(e){var a,i="";for(a=Math.abs(e);a>us;a=a/us|0)i=x2(a%us)+i;return(x2(a%us)+i).replace(Ov,"$1-$2")}var ad,A4=5381,Hr=function(e,a){for(var i=a.length;i;)e=33*e^a.charCodeAt(--i);return e},z4=function(e){return Hr(A4,e)};function R0(e){return f0(z4(e)>>>0)}function Bv(e){return e.displayName||e.name||"Component"}function rd(e){return typeof e=="string"&&!0}var R4=typeof Symbol=="function"&&Symbol.for,O4=R4?Symbol.for("react.memo"):60115,Uv=R4?Symbol.for("react.forward_ref"):60112,_v={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Yv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},B4={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Qv=((ad={})[Uv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ad[O4]=B4,ad);function M2(e){return("type"in(a=e)&&a.type.$$typeof)===O4?B4:"$$typeof"in e?Qv[e.$$typeof]:_v;var a}var Gv=Object.defineProperty,$v=Object.getOwnPropertyNames,j2=Object.getOwnPropertySymbols,Zv=Object.getOwnPropertyDescriptor,Jv=Object.getPrototypeOf,L2=Object.prototype;function U4(e,a,i){if(typeof a!="string"){if(L2){var f=Jv(a);f&&f!==L2&&U4(e,f,i)}var c=$v(a);j2&&(c=c.concat(j2(a)));for(var d=M2(e),m=M2(a),y=0;y<c.length;++y){var b=c[y];if(!(b in Yv||i&&i[b]||m&&b in m||d&&b in d)){var x=Zv(a,b);try{Gv(e,b,x)}catch{}}}}return e}function Xa(e){return typeof e=="function"}function O0(e){return typeof e=="object"&&"styledComponentId"in e}function Pa(e,a){return e&&a?"".concat(e," ").concat(a):e||a||""}function Vs(e,a){if(e.length===0)return"";for(var i=e[0],f=1;f<e.length;f++)i+=e[f];return i}function Cf(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function o0(e,a,i){if(i===void 0&&(i=!1),!i&&!Cf(e)&&!Array.isArray(e))return a;if(Array.isArray(a))for(var f=0;f<a.length;f++)e[f]=o0(e[f],a[f]);else if(Cf(a))for(var f in a)e[f]=o0(e[f],a[f]);return e}function B0(e,a){Object.defineProperty(e,"toString",{value:a})}function Wa(e){for(var a=[],i=1;i<arguments.length;i++)a[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(a.length>0?" Args: ".concat(a.join(", ")):""))}var Hv=function(){function e(a){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=a}return e.prototype.indexOfGroup=function(a){for(var i=0,f=0;f<a;f++)i+=this.groupSizes[f];return i},e.prototype.insertRules=function(a,i){if(a>=this.groupSizes.length){for(var f=this.groupSizes,c=f.length,d=c;a>=d;)if((d<<=1)<0)throw Wa(16,"".concat(a));this.groupSizes=new Uint32Array(d),this.groupSizes.set(f),this.length=d;for(var m=c;m<d;m++)this.groupSizes[m]=0}for(var y=this.indexOfGroup(a+1),b=(m=0,i.length);m<b;m++)this.tag.insertRule(y,i[m])&&(this.groupSizes[a]++,y++)},e.prototype.clearGroup=function(a){if(a<this.length){var i=this.groupSizes[a],f=this.indexOfGroup(a),c=f+i;this.groupSizes[a]=0;for(var d=f;d<c;d++)this.tag.deleteRule(f)}},e.prototype.getGroup=function(a){var i="";if(a>=this.length||this.groupSizes[a]===0)return i;for(var f=this.groupSizes[a],c=this.indexOfGroup(a),d=c+f,m=c;m<d;m++)i+="".concat(this.tag.getRule(m)).concat(z0);return i},e}(),Ns=new Map,Xs=new Map,Is=1,ds=function(e){if(Ns.has(e))return Ns.get(e);for(;Xs.has(Is);)Is++;var a=Is++;return Ns.set(e,a),Xs.set(a,e),a},Pv=function(e,a){Is=a+1,Ns.set(e,a),Xs.set(a,e)},Fv="style[".concat(ei,"][").concat(N4,'="').concat(dl,'"]'),qv=new RegExp("^".concat(ei,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Vv=function(e,a,i){for(var f,c=i.split(","),d=0,m=c.length;d<m;d++)(f=c[d])&&e.registerName(a,f)},Xv=function(e,a){for(var i,f=((i=a.textContent)!==null&&i!==void 0?i:"").split(z0),c=[],d=0,m=f.length;d<m;d++){var y=f[d].trim();if(y){var b=y.match(qv);if(b){var x=0|parseInt(b[1],10),v=b[2];x!==0&&(Pv(v,x),Vv(e,v,b[3]),e.getTag().insertRules(x,c)),c.length=0}else c.push(y)}}},S2=function(e){for(var a=document.querySelectorAll(Fv),i=0,f=a.length;i<f;i++){var c=a[i];c&&c.getAttribute(ei)!==T4&&(Xv(e,c),c.parentNode&&c.parentNode.removeChild(c))}};function Wv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var _4=function(e){var a=document.head,i=e||a,f=document.createElement("style"),c=function(y){var b=Array.from(y.querySelectorAll("style[".concat(ei,"]")));return b[b.length-1]}(i),d=c!==void 0?c.nextSibling:null;f.setAttribute(ei,T4),f.setAttribute(N4,dl);var m=Wv();return m&&f.setAttribute("nonce",m),i.insertBefore(f,d),f},Kv=function(){function e(a){this.element=_4(a),this.element.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var f=document.styleSheets,c=0,d=f.length;c<d;c++){var m=f[c];if(m.ownerNode===i)return m}throw Wa(17)}(this.element),this.length=0}return e.prototype.insertRule=function(a,i){try{return this.sheet.insertRule(i,a),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(a){this.sheet.deleteRule(a),this.length--},e.prototype.getRule=function(a){var i=this.sheet.cssRules[a];return i&&i.cssText?i.cssText:""},e}(),ex=function(){function e(a){this.element=_4(a),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(a,i){if(a<=this.length&&a>=0){var f=document.createTextNode(i);return this.element.insertBefore(f,this.nodes[a]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(a){this.element.removeChild(this.nodes[a]),this.length--},e.prototype.getRule=function(a){return a<this.length?this.nodes[a].textContent:""},e}(),tx=function(){function e(a){this.rules=[],this.length=0}return e.prototype.insertRule=function(a,i){return a<=this.length&&(this.rules.splice(a,0,i),this.length++,!0)},e.prototype.deleteRule=function(a){this.rules.splice(a,1),this.length--},e.prototype.getRule=function(a){return a<this.length?this.rules[a]:""},e}(),C2=qs,nx={isServer:!qs,useCSSOMInjection:!Dv},Ws=function(){function e(a,i,f){a===void 0&&(a=ti),i===void 0&&(i={});var c=this;this.options=ft(ft({},nx),a),this.gs=i,this.names=new Map(f),this.server=!!a.isServer,!this.server&&qs&&C2&&(C2=!1,S2(this)),B0(this,function(){return function(d){for(var m=d.getTag(),y=m.length,b="",x=function(M){var j=function(R){return Xs.get(R)}(M);if(j===void 0)return"continue";var k=d.names.get(j),I=m.getGroup(M);if(k===void 0||!k.size||I.length===0)return"continue";var S="".concat(ei,".g").concat(M,'[id="').concat(j,'"]'),N="";k!==void 0&&k.forEach(function(R){R.length>0&&(N+="".concat(R,","))}),b+="".concat(I).concat(S,'{content:"').concat(N,'"}').concat(z0)},v=0;v<y;v++)x(v);return b}(c)})}return e.registerId=function(a){return ds(a)},e.prototype.rehydrate=function(){!this.server&&qs&&S2(this)},e.prototype.reconstructWithOptions=function(a,i){return i===void 0&&(i=!0),new e(ft(ft({},this.options),a),this.gs,i&&this.names||void 0)},e.prototype.allocateGSInstance=function(a){return this.gs[a]=(this.gs[a]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(a=function(i){var f=i.useCSSOMInjection,c=i.target;return i.isServer?new tx(c):f?new Kv(c):new ex(c)}(this.options),new Hv(a)));var a},e.prototype.hasNameForId=function(a,i){return this.names.has(a)&&this.names.get(a).has(i)},e.prototype.registerName=function(a,i){if(ds(a),this.names.has(a))this.names.get(a).add(i);else{var f=new Set;f.add(i),this.names.set(a,f)}},e.prototype.insertRules=function(a,i,f){this.registerName(a,i),this.getTag().insertRules(ds(a),f)},e.prototype.clearNames=function(a){this.names.has(a)&&this.names.get(a).clear()},e.prototype.clearRules=function(a){this.getTag().clearGroup(ds(a)),this.clearNames(a)},e.prototype.clearTag=function(){this.tag=void 0},e}(),ax=/&/g,rx=/^\s*\/\/.*$/gm;function Y4(e,a){return e.map(function(i){return i.type==="rule"&&(i.value="".concat(a," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(a," ")),i.props=i.props.map(function(f){return"".concat(a," ").concat(f)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=Y4(i.children,a)),i})}function ix(e){var a,i,f,c=ti,d=c.options,m=d===void 0?ti:d,y=c.plugins,b=y===void 0?hl:y,x=function(j,k,I){return I.startsWith(i)&&I.endsWith(i)&&I.replaceAll(i,"").length>0?".".concat(a):j},v=b.slice();v.push(function(j){j.type===sl&&j.value.includes("&")&&(j.props[0]=j.props[0].replace(ax,i).replace(f,x))}),m.prefix&&v.push(Nv),v.push(kv);var M=function(j,k,I,S){k===void 0&&(k=""),I===void 0&&(I=""),S===void 0&&(S="&"),a=S,i=k,f=new RegExp("\\".concat(i,"\\b"),"g");var N=j.replace(rx,""),R=Sv(I||k?"".concat(I," ").concat(k," { ").concat(N," }"):N);m.namespace&&(R=Y4(R,m.namespace));var A=[];return Fs(R,Ev(v.concat(Tv(function(_){return A.push(_)})))),A};return M.hash=b.length?b.reduce(function(j,k){return k.name||Wa(15),Hr(j,k.name)},A4).toString():"",M}var fx=new Ws,s0=ix(),Q4=it.createContext({shouldForwardProp:void 0,styleSheet:fx,stylis:s0});Q4.Consumer;it.createContext(void 0);function l0(){return g.useContext(Q4)}var G4=function(){function e(a,i){var f=this;this.inject=function(c,d){d===void 0&&(d=s0);var m=f.name+d.hash;c.hasNameForId(f.id,m)||c.insertRules(f.id,m,d(f.rules,m,"@keyframes"))},this.name=a,this.id="sc-keyframes-".concat(a),this.rules=i,B0(this,function(){throw Wa(12,String(f.name))})}return e.prototype.getName=function(a){return a===void 0&&(a=s0),this.name+a.hash},e}(),ox=function(e){return e>="A"&&e<="Z"};function k2(e){for(var a="",i=0;i<e.length;i++){var f=e[i];if(i===1&&f==="-"&&e[0]==="-")return e;ox(f)?a+="-"+f.toLowerCase():a+=f}return a.startsWith("ms-")?"-"+a:a}var $4=function(e){return e==null||e===!1||e===""},Z4=function(e){var a,i,f=[];for(var c in e){var d=e[c];e.hasOwnProperty(c)&&!$4(d)&&(Array.isArray(d)&&d.isCss||Xa(d)?f.push("".concat(k2(c),":"),d,";"):Cf(d)?f.push.apply(f,Xr(Xr(["".concat(c," {")],Z4(d),!1),["}"],!1)):f.push("".concat(k2(c),": ").concat((a=c,(i=d)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||a in Iv||a.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return f};function ba(e,a,i,f){if($4(e))return[];if(O0(e))return[".".concat(e.styledComponentId)];if(Xa(e)){if(!Xa(d=e)||d.prototype&&d.prototype.isReactComponent||!a)return[e];var c=e(a);return ba(c,a,i,f)}var d;return e instanceof G4?i?(e.inject(i,f),[e.getName(f)]):[e]:Cf(e)?Z4(e):Array.isArray(e)?Array.prototype.concat.apply(hl,e.map(function(m){return ba(m,a,i,f)})):[e.toString()]}function J4(e){for(var a=0;a<e.length;a+=1){var i=e[a];if(Xa(i)&&!O0(i))return!1}return!0}var sx=z4(dl),lx=function(){function e(a,i,f){this.rules=a,this.staticRulesId="",this.isStatic=(f===void 0||f.isStatic)&&J4(a),this.componentId=i,this.baseHash=Hr(sx,i),this.baseStyle=f,Ws.registerId(i)}return e.prototype.generateAndInjectStyles=function(a,i,f){var c=this.baseStyle?this.baseStyle.generateAndInjectStyles(a,i,f):"";if(this.isStatic&&!f.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))c=Pa(c,this.staticRulesId);else{var d=Vs(ba(this.rules,a,i,f)),m=f0(Hr(this.baseHash,d)>>>0);if(!i.hasNameForId(this.componentId,m)){var y=f(d,".".concat(m),void 0,this.componentId);i.insertRules(this.componentId,m,y)}c=Pa(c,m),this.staticRulesId=m}else{for(var b=Hr(this.baseHash,f.hash),x="",v=0;v<this.rules.length;v++){var M=this.rules[v];if(typeof M=="string")x+=M;else if(M){var j=Vs(ba(M,a,i,f));b=Hr(b,j+v),x+=j}}if(x){var k=f0(b>>>0);i.hasNameForId(this.componentId,k)||i.insertRules(this.componentId,k,f(x,".".concat(k),void 0,this.componentId)),c=Pa(c,k)}}return c},e}(),kf=it.createContext(void 0);kf.Consumer;function cx(e){var a=it.useContext(kf),i=g.useMemo(function(){return function(f,c){if(!f)throw Wa(14);if(Xa(f)){var d=f(c);return d}if(Array.isArray(f)||typeof f!="object")throw Wa(8);return c?ft(ft({},c),f):f}(e.theme,a)},[e.theme,a]);return e.children?it.createElement(kf.Provider,{value:i},e.children):null}var id={};function ux(e,a,i){var f=O0(e),c=e,d=!rd(e),m=a.attrs,y=m===void 0?hl:m,b=a.componentId,x=b===void 0?function(T,C){var D=typeof T!="string"?"sc":v2(T);id[D]=(id[D]||0)+1;var G="".concat(D,"-").concat(R0(dl+D+id[D]));return C?"".concat(C,"-").concat(G):G}(a.displayName,a.parentComponentId):b,v=a.displayName,M=v===void 0?function(T){return rd(T)?"styled.".concat(T):"Styled(".concat(Bv(T),")")}(e):v,j=a.displayName&&a.componentId?"".concat(v2(a.displayName),"-").concat(a.componentId):a.componentId||x,k=f&&c.attrs?c.attrs.concat(y).filter(Boolean):y,I=a.shouldForwardProp;if(f&&c.shouldForwardProp){var S=c.shouldForwardProp;if(a.shouldForwardProp){var N=a.shouldForwardProp;I=function(T,C){return S(T,C)&&N(T,C)}}else I=S}var R=new lx(i,j,f?c.componentStyle:void 0);function A(T,C){return function(D,G,F){var me=D.attrs,Ke=D.componentStyle,ct=D.defaultProps,Ge=D.foldedComponentIds,X=D.styledComponentId,ae=D.target,fe=it.useContext(kf),B=l0(),P=D.shouldForwardProp||B.shouldForwardProp,q=I4(G,fe,ct)||ti,K=function(yt,Mt,Cn){for(var gn,jt=ft(ft({},Mt),{className:void 0,theme:Cn}),ka=0;ka<yt.length;ka+=1){var kn=Xa(gn=yt[ka])?gn(jt):gn;for(var Zt in kn)jt[Zt]=Zt==="className"?Pa(jt[Zt],kn[Zt]):Zt==="style"?ft(ft({},jt[Zt]),kn[Zt]):kn[Zt]}return Mt.className&&(jt.className=Pa(jt.className,Mt.className)),jt}(me,G,q),oe=K.as||ae,Ae={};for(var ye in K)K[ye]===void 0||ye[0]==="$"||ye==="as"||ye==="theme"&&K.theme===q||(ye==="forwardedAs"?Ae.as=K.forwardedAs:P&&!P(ye,oe)||(Ae[ye]=K[ye]));var ve=function(yt,Mt){var Cn=l0(),gn=yt.generateAndInjectStyles(Mt,Cn.styleSheet,Cn.stylis);return gn}(Ke,K),Ue=Pa(Ge,X);return ve&&(Ue+=" "+ve),K.className&&(Ue+=" "+K.className),Ae[rd(oe)&&!D4.has(oe)?"class":"className"]=Ue,F&&(Ae.ref=F),g.createElement(oe,Ae)}(_,T,C)}A.displayName=M;var _=it.forwardRef(A);return _.attrs=k,_.componentStyle=R,_.displayName=M,_.shouldForwardProp=I,_.foldedComponentIds=f?Pa(c.foldedComponentIds,c.styledComponentId):"",_.styledComponentId=j,_.target=f?c.target:e,Object.defineProperty(_,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(T){this._foldedDefaultProps=f?function(C){for(var D=[],G=1;G<arguments.length;G++)D[G-1]=arguments[G];for(var F=0,me=D;F<me.length;F++)o0(C,me[F],!0);return C}({},c.defaultProps,T):T}}),B0(_,function(){return".".concat(_.styledComponentId)}),d&&U4(_,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),_}function E2(e,a){for(var i=[e[0]],f=0,c=a.length;f<c;f+=1)i.push(a[f],e[f+1]);return i}var T2=function(e){return Object.assign(e,{isCss:!0})};function _f(e){for(var a=[],i=1;i<arguments.length;i++)a[i-1]=arguments[i];if(Xa(e)||Cf(e))return T2(ba(E2(hl,Xr([e],a,!0))));var f=e;return a.length===0&&f.length===1&&typeof f[0]=="string"?ba(f):T2(ba(E2(f,a)))}function c0(e,a,i){if(i===void 0&&(i=ti),!a)throw Wa(1,a);var f=function(c){for(var d=[],m=1;m<arguments.length;m++)d[m-1]=arguments[m];return e(a,i,_f.apply(void 0,Xr([c],d,!1)))};return f.attrs=function(c){return c0(e,a,ft(ft({},i),{attrs:Array.prototype.concat(i.attrs,c).filter(Boolean)}))},f.withConfig=function(c){return c0(e,a,ft(ft({},i),c))},f}var H4=function(e){return c0(ux,e)},h=H4;D4.forEach(function(e){h[e]=H4(e)});var dx=function(){function e(a,i){this.rules=a,this.componentId=i,this.isStatic=J4(a),Ws.registerId(this.componentId+1)}return e.prototype.createStyles=function(a,i,f,c){var d=c(Vs(ba(this.rules,i,f,c)),""),m=this.componentId+a;f.insertRules(m,m,d)},e.prototype.removeStyles=function(a,i){i.clearRules(this.componentId+a)},e.prototype.renderStyles=function(a,i,f,c){a>2&&Ws.registerId(this.componentId+a),this.removeStyles(a,f),this.createStyles(a,i,f,c)},e}();function hx(e){for(var a=[],i=1;i<arguments.length;i++)a[i-1]=arguments[i];var f=_f.apply(void 0,Xr([e],a,!1)),c="sc-global-".concat(R0(JSON.stringify(f))),d=new dx(f,c),m=function(b){var x=l0(),v=it.useContext(kf),M=it.useRef(x.styleSheet.allocateGSInstance(c)).current;return x.styleSheet.server&&y(M,b,x.styleSheet,v,x.stylis),it.useLayoutEffect(function(){if(!x.styleSheet.server)return y(M,b,x.styleSheet,v,x.stylis),function(){return d.removeStyles(M,x.styleSheet)}},[M,b,x.styleSheet,v,x.stylis]),null};function y(b,x,v,M,j){if(d.isStatic)d.renderStyles(b,Av,v,j);else{var k=ft(ft({},x),{theme:I4(x,M,m.defaultProps)});d.renderStyles(b,k,v,j)}}return it.memo(m)}function Gt(e){for(var a=[],i=1;i<arguments.length;i++)a[i-1]=arguments[i];var f=Vs(_f.apply(void 0,Xr([e],a,!1))),c=R0(f);return new G4(c,f)}const ml=({width:e=45,height:a=45})=>s.jsx(s.Fragment,{children:s.jsxs("svg",{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 66.59 63.66",width:e,height:a,children:[s.jsx("defs",{children:s.jsx("style",{children:`
            .logo-dark { fill: var(--blue) }
          `})}),s.jsx("path",{className:"logo-dark",d:"M50,70.82c-.13-.51-.28-1.13-.47-1.74A29,29,0,0,0,45,60.79a70.83,70.83,0,0,0-5.71-6.41,59.7,59.7,0,0,1-9.34-12.16c-.37-.67-.69-1.37-1.06-2.1-.06.12-.12.21-.17.31a39.53,39.53,0,0,0-3.13,10A25.62,25.62,0,0,0,27.66,66a32.27,32.27,0,0,0,7.45,9.79A52.47,52.47,0,0,0,43,81.64l.21.14c-1.85.11-8.38-2.61-11.73-4.86a33.27,33.27,0,0,1-9-9,32.14,32.14,0,0,1-5-11.7,33.2,33.2,0,0,1,21-38c-.55.66-1.1,1.29-1.61,1.95a14.4,14.4,0,0,0-2.76,5.58A11.27,11.27,0,0,0,34.93,33a39,39,0,0,0,6.27,9.26C42.88,44.15,44.63,46,46.26,48a20.22,20.22,0,0,1,3.67,6.42s0,.05.07.09c.29-.67.54-1.34.85-2a30.15,30.15,0,0,1,5-7A79.35,79.35,0,0,0,62,38.22a28.19,28.19,0,0,0,3.49-6.28,10.94,10.94,0,0,0-1-9.84c-.82-1.38-1.86-2.63-2.7-3.81C72.49,21.9,83.66,33.71,83.28,50.08a33.12,33.12,0,0,1-26.5,31.75l1.84-1.2a42.78,42.78,0,0,0,11-10.08,25.92,25.92,0,0,0,4.94-11.64A28.44,28.44,0,0,0,73.38,46c-.62-2-1.4-3.93-2.11-5.89l-.2-.06a1,1,0,0,1,0,.18A40.08,40.08,0,0,1,65.43,49c-2.17,2.71-4.57,5.21-7,7.71a35.26,35.26,0,0,0-7,10.05C50.83,68.11,50.42,69.52,50,70.82Z",transform:"translate(-16.71 -18.17)"})]})}),mx=({width:e=45,height:a=45})=>s.jsx(s.Fragment,{children:s.jsxs("svg",{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 66.59 63.66",width:e,height:a,children:[s.jsx("defs",{children:s.jsx("style",{children:`
            .cls-1 { fill: #ffffff }
          `})}),s.jsx("path",{className:"cls-1",d:"M50,70.82c-.13-.51-.28-1.13-.47-1.74A29,29,0,0,0,45,60.79a70.83,70.83,0,0,0-5.71-6.41,59.7,59.7,0,0,1-9.34-12.16c-.37-.67-.69-1.37-1.06-2.1-.06.12-.12.21-.17.31a39.53,39.53,0,0,0-3.13,10A25.62,25.62,0,0,0,27.66,66a32.27,32.27,0,0,0,7.45,9.79A52.47,52.47,0,0,0,43,81.64l.21.14c-1.85.11-8.38-2.61-11.73-4.86a33.27,33.27,0,0,1-9-9,32.14,32.14,0,0,1-5-11.7,33.2,33.2,0,0,1,21-38c-.55.66-1.1,1.29-1.61,1.95a14.4,14.4,0,0,0-2.76,5.58A11.27,11.27,0,0,0,34.93,33a39,39,0,0,0,6.27,9.26C42.88,44.15,44.63,46,46.26,48a20.22,20.22,0,0,1,3.67,6.42s0,.05.07.09c.29-.67.54-1.34.85-2a30.15,30.15,0,0,1,5-7A79.35,79.35,0,0,0,62,38.22a28.19,28.19,0,0,0,3.49-6.28,10.94,10.94,0,0,0-1-9.84c-.82-1.38-1.86-2.63-2.7-3.81C72.49,21.9,83.66,33.71,83.28,50.08a33.12,33.12,0,0,1-26.5,31.75l1.84-1.2a42.78,42.78,0,0,0,11-10.08,25.92,25.92,0,0,0,4.94-11.64A28.44,28.44,0,0,0,73.38,46c-.62-2-1.4-3.93-2.11-5.89l-.2-.06a1,1,0,0,1,0,.18A40.08,40.08,0,0,1,65.43,49c-2.17,2.71-4.57,5.21-7,7.71a35.26,35.26,0,0,0-7,10.05C50.83,68.11,50.42,69.52,50,70.82Z",transform:"translate(-16.71 -18.17)"})]})});function P4(e,a){return function(){return e.apply(a,arguments)}}const{toString:gx}=Object.prototype,{getPrototypeOf:U0}=Object,{iterator:gl,toStringTag:F4}=Symbol,pl=(e=>a=>{const i=gx.call(a);return e[i]||(e[i]=i.slice(8,-1).toLowerCase())})(Object.create(null)),mn=e=>(e=e.toLowerCase(),a=>pl(a)===e),yl=e=>a=>typeof a===e,{isArray:fi}=Array,Ef=yl("undefined");function px(e){return e!==null&&!Ef(e)&&e.constructor!==null&&!Ef(e.constructor)&&Tt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const q4=mn("ArrayBuffer");function yx(e){let a;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?a=ArrayBuffer.isView(e):a=e&&e.buffer&&q4(e.buffer),a}const bx=yl("string"),Tt=yl("function"),V4=yl("number"),bl=e=>e!==null&&typeof e=="object",wx=e=>e===!0||e===!1,Ds=e=>{if(pl(e)!=="object")return!1;const a=U0(e);return(a===null||a===Object.prototype||Object.getPrototypeOf(a)===null)&&!(F4 in e)&&!(gl in e)},vx=mn("Date"),xx=mn("File"),Mx=mn("Blob"),jx=mn("FileList"),Lx=e=>bl(e)&&Tt(e.pipe),Sx=e=>{let a;return e&&(typeof FormData=="function"&&e instanceof FormData||Tt(e.append)&&((a=pl(e))==="formdata"||a==="object"&&Tt(e.toString)&&e.toString()==="[object FormData]"))},Cx=mn("URLSearchParams"),[kx,Ex,Tx,Nx]=["ReadableStream","Request","Response","Headers"].map(mn),Ix=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Yf(e,a,{allOwnKeys:i=!1}={}){if(e===null||typeof e>"u")return;let f,c;if(typeof e!="object"&&(e=[e]),fi(e))for(f=0,c=e.length;f<c;f++)a.call(null,e[f],f,e);else{const d=i?Object.getOwnPropertyNames(e):Object.keys(e),m=d.length;let y;for(f=0;f<m;f++)y=d[f],a.call(null,e[y],y,e)}}function X4(e,a){a=a.toLowerCase();const i=Object.keys(e);let f=i.length,c;for(;f-- >0;)if(c=i[f],a===c.toLowerCase())return c;return null}const Fa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,W4=e=>!Ef(e)&&e!==Fa;function u0(){const{caseless:e}=W4(this)&&this||{},a={},i=(f,c)=>{const d=e&&X4(a,c)||c;Ds(a[d])&&Ds(f)?a[d]=u0(a[d],f):Ds(f)?a[d]=u0({},f):fi(f)?a[d]=f.slice():a[d]=f};for(let f=0,c=arguments.length;f<c;f++)arguments[f]&&Yf(arguments[f],i);return a}const Dx=(e,a,i,{allOwnKeys:f}={})=>(Yf(a,(c,d)=>{i&&Tt(c)?e[d]=P4(c,i):e[d]=c},{allOwnKeys:f}),e),Ax=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),zx=(e,a,i,f)=>{e.prototype=Object.create(a.prototype,f),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:a.prototype}),i&&Object.assign(e.prototype,i)},Rx=(e,a,i,f)=>{let c,d,m;const y={};if(a=a||{},e==null)return a;do{for(c=Object.getOwnPropertyNames(e),d=c.length;d-- >0;)m=c[d],(!f||f(m,e,a))&&!y[m]&&(a[m]=e[m],y[m]=!0);e=i!==!1&&U0(e)}while(e&&(!i||i(e,a))&&e!==Object.prototype);return a},Ox=(e,a,i)=>{e=String(e),(i===void 0||i>e.length)&&(i=e.length),i-=a.length;const f=e.indexOf(a,i);return f!==-1&&f===i},Bx=e=>{if(!e)return null;if(fi(e))return e;let a=e.length;if(!V4(a))return null;const i=new Array(a);for(;a-- >0;)i[a]=e[a];return i},Ux=(e=>a=>e&&a instanceof e)(typeof Uint8Array<"u"&&U0(Uint8Array)),_x=(e,a)=>{const f=(e&&e[gl]).call(e);let c;for(;(c=f.next())&&!c.done;){const d=c.value;a.call(e,d[0],d[1])}},Yx=(e,a)=>{let i;const f=[];for(;(i=e.exec(a))!==null;)f.push(i);return f},Qx=mn("HTMLFormElement"),Gx=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(i,f,c){return f.toUpperCase()+c}),N2=(({hasOwnProperty:e})=>(a,i)=>e.call(a,i))(Object.prototype),$x=mn("RegExp"),K4=(e,a)=>{const i=Object.getOwnPropertyDescriptors(e),f={};Yf(i,(c,d)=>{let m;(m=a(c,d,e))!==!1&&(f[d]=m||c)}),Object.defineProperties(e,f)},Zx=e=>{K4(e,(a,i)=>{if(Tt(e)&&["arguments","caller","callee"].indexOf(i)!==-1)return!1;const f=e[i];if(Tt(f)){if(a.enumerable=!1,"writable"in a){a.writable=!1;return}a.set||(a.set=()=>{throw Error("Can not rewrite read-only method '"+i+"'")})}})},Jx=(e,a)=>{const i={},f=c=>{c.forEach(d=>{i[d]=!0})};return fi(e)?f(e):f(String(e).split(a)),i},Hx=()=>{},Px=(e,a)=>e!=null&&Number.isFinite(e=+e)?e:a;function Fx(e){return!!(e&&Tt(e.append)&&e[F4]==="FormData"&&e[gl])}const qx=e=>{const a=new Array(10),i=(f,c)=>{if(bl(f)){if(a.indexOf(f)>=0)return;if(!("toJSON"in f)){a[c]=f;const d=fi(f)?[]:{};return Yf(f,(m,y)=>{const b=i(m,c+1);!Ef(b)&&(d[y]=b)}),a[c]=void 0,d}}return f};return i(e,0)},Vx=mn("AsyncFunction"),Xx=e=>e&&(bl(e)||Tt(e))&&Tt(e.then)&&Tt(e.catch),ey=((e,a)=>e?setImmediate:a?((i,f)=>(Fa.addEventListener("message",({source:c,data:d})=>{c===Fa&&d===i&&f.length&&f.shift()()},!1),c=>{f.push(c),Fa.postMessage(i,"*")}))(`axios@${Math.random()}`,[]):i=>setTimeout(i))(typeof setImmediate=="function",Tt(Fa.postMessage)),Wx=typeof queueMicrotask<"u"?queueMicrotask.bind(Fa):typeof process<"u"&&process.nextTick||ey,Kx=e=>e!=null&&Tt(e[gl]),$={isArray:fi,isArrayBuffer:q4,isBuffer:px,isFormData:Sx,isArrayBufferView:yx,isString:bx,isNumber:V4,isBoolean:wx,isObject:bl,isPlainObject:Ds,isReadableStream:kx,isRequest:Ex,isResponse:Tx,isHeaders:Nx,isUndefined:Ef,isDate:vx,isFile:xx,isBlob:Mx,isRegExp:$x,isFunction:Tt,isStream:Lx,isURLSearchParams:Cx,isTypedArray:Ux,isFileList:jx,forEach:Yf,merge:u0,extend:Dx,trim:Ix,stripBOM:Ax,inherits:zx,toFlatObject:Rx,kindOf:pl,kindOfTest:mn,endsWith:Ox,toArray:Bx,forEachEntry:_x,matchAll:Yx,isHTMLForm:Qx,hasOwnProperty:N2,hasOwnProp:N2,reduceDescriptors:K4,freezeMethods:Zx,toObjectSet:Jx,toCamelCase:Gx,noop:Hx,toFiniteNumber:Px,findKey:X4,global:Fa,isContextDefined:W4,isSpecCompliantForm:Fx,toJSONObject:qx,isAsyncFn:Vx,isThenable:Xx,setImmediate:ey,asap:Wx,isIterable:Kx};function re(e,a,i,f,c){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",a&&(this.code=a),i&&(this.config=i),f&&(this.request=f),c&&(this.response=c,this.status=c.status?c.status:null)}$.inherits(re,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:$.toJSONObject(this.config),code:this.code,status:this.status}}});const ty=re.prototype,ny={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ny[e]={value:e}});Object.defineProperties(re,ny);Object.defineProperty(ty,"isAxiosError",{value:!0});re.from=(e,a,i,f,c,d)=>{const m=Object.create(ty);return $.toFlatObject(e,m,function(b){return b!==Error.prototype},y=>y!=="isAxiosError"),re.call(m,e.message,a,i,f,c),m.cause=e,m.name=e.name,d&&Object.assign(m,d),m};const eM=null;function d0(e){return $.isPlainObject(e)||$.isArray(e)}function ay(e){return $.endsWith(e,"[]")?e.slice(0,-2):e}function I2(e,a,i){return e?e.concat(a).map(function(c,d){return c=ay(c),!i&&d?"["+c+"]":c}).join(i?".":""):a}function tM(e){return $.isArray(e)&&!e.some(d0)}const nM=$.toFlatObject($,{},null,function(a){return/^is[A-Z]/.test(a)});function wl(e,a,i){if(!$.isObject(e))throw new TypeError("target must be an object");a=a||new FormData,i=$.toFlatObject(i,{metaTokens:!0,dots:!1,indexes:!1},!1,function(S,N){return!$.isUndefined(N[S])});const f=i.metaTokens,c=i.visitor||v,d=i.dots,m=i.indexes,b=(i.Blob||typeof Blob<"u"&&Blob)&&$.isSpecCompliantForm(a);if(!$.isFunction(c))throw new TypeError("visitor must be a function");function x(I){if(I===null)return"";if($.isDate(I))return I.toISOString();if(!b&&$.isBlob(I))throw new re("Blob is not supported. Use a Buffer instead.");return $.isArrayBuffer(I)||$.isTypedArray(I)?b&&typeof Blob=="function"?new Blob([I]):Buffer.from(I):I}function v(I,S,N){let R=I;if(I&&!N&&typeof I=="object"){if($.endsWith(S,"{}"))S=f?S:S.slice(0,-2),I=JSON.stringify(I);else if($.isArray(I)&&tM(I)||($.isFileList(I)||$.endsWith(S,"[]"))&&(R=$.toArray(I)))return S=ay(S),R.forEach(function(_,T){!($.isUndefined(_)||_===null)&&a.append(m===!0?I2([S],T,d):m===null?S:S+"[]",x(_))}),!1}return d0(I)?!0:(a.append(I2(N,S,d),x(I)),!1)}const M=[],j=Object.assign(nM,{defaultVisitor:v,convertValue:x,isVisitable:d0});function k(I,S){if(!$.isUndefined(I)){if(M.indexOf(I)!==-1)throw Error("Circular reference detected in "+S.join("."));M.push(I),$.forEach(I,function(R,A){(!($.isUndefined(R)||R===null)&&c.call(a,R,$.isString(A)?A.trim():A,S,j))===!0&&k(R,S?S.concat(A):[A])}),M.pop()}}if(!$.isObject(e))throw new TypeError("data must be an object");return k(e),a}function D2(e){const a={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(f){return a[f]})}function _0(e,a){this._pairs=[],e&&wl(e,this,a)}const ry=_0.prototype;ry.append=function(a,i){this._pairs.push([a,i])};ry.toString=function(a){const i=a?function(f){return a.call(this,f,D2)}:D2;return this._pairs.map(function(c){return i(c[0])+"="+i(c[1])},"").join("&")};function aM(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function iy(e,a,i){if(!a)return e;const f=i&&i.encode||aM;$.isFunction(i)&&(i={serialize:i});const c=i&&i.serialize;let d;if(c?d=c(a,i):d=$.isURLSearchParams(a)?a.toString():new _0(a,i).toString(f),d){const m=e.indexOf("#");m!==-1&&(e=e.slice(0,m)),e+=(e.indexOf("?")===-1?"?":"&")+d}return e}class A2{constructor(){this.handlers=[]}use(a,i,f){return this.handlers.push({fulfilled:a,rejected:i,synchronous:f?f.synchronous:!1,runWhen:f?f.runWhen:null}),this.handlers.length-1}eject(a){this.handlers[a]&&(this.handlers[a]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(a){$.forEach(this.handlers,function(f){f!==null&&a(f)})}}const fy={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},rM=typeof URLSearchParams<"u"?URLSearchParams:_0,iM=typeof FormData<"u"?FormData:null,fM=typeof Blob<"u"?Blob:null,oM={isBrowser:!0,classes:{URLSearchParams:rM,FormData:iM,Blob:fM},protocols:["http","https","file","blob","url","data"]},Y0=typeof window<"u"&&typeof document<"u",h0=typeof navigator=="object"&&navigator||void 0,sM=Y0&&(!h0||["ReactNative","NativeScript","NS"].indexOf(h0.product)<0),lM=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",cM=Y0&&window.location.href||"http://localhost",uM=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Y0,hasStandardBrowserEnv:sM,hasStandardBrowserWebWorkerEnv:lM,navigator:h0,origin:cM},Symbol.toStringTag,{value:"Module"})),mt={...uM,...oM};function dM(e,a){return wl(e,new mt.classes.URLSearchParams,Object.assign({visitor:function(i,f,c,d){return mt.isNode&&$.isBuffer(i)?(this.append(f,i.toString("base64")),!1):d.defaultVisitor.apply(this,arguments)}},a))}function hM(e){return $.matchAll(/\w+|\[(\w*)]/g,e).map(a=>a[0]==="[]"?"":a[1]||a[0])}function mM(e){const a={},i=Object.keys(e);let f;const c=i.length;let d;for(f=0;f<c;f++)d=i[f],a[d]=e[d];return a}function oy(e){function a(i,f,c,d){let m=i[d++];if(m==="__proto__")return!0;const y=Number.isFinite(+m),b=d>=i.length;return m=!m&&$.isArray(c)?c.length:m,b?($.hasOwnProp(c,m)?c[m]=[c[m],f]:c[m]=f,!y):((!c[m]||!$.isObject(c[m]))&&(c[m]=[]),a(i,f,c[m],d)&&$.isArray(c[m])&&(c[m]=mM(c[m])),!y)}if($.isFormData(e)&&$.isFunction(e.entries)){const i={};return $.forEachEntry(e,(f,c)=>{a(hM(f),c,i,0)}),i}return null}function gM(e,a,i){if($.isString(e))try{return(a||JSON.parse)(e),$.trim(e)}catch(f){if(f.name!=="SyntaxError")throw f}return(i||JSON.stringify)(e)}const Qf={transitional:fy,adapter:["xhr","http","fetch"],transformRequest:[function(a,i){const f=i.getContentType()||"",c=f.indexOf("application/json")>-1,d=$.isObject(a);if(d&&$.isHTMLForm(a)&&(a=new FormData(a)),$.isFormData(a))return c?JSON.stringify(oy(a)):a;if($.isArrayBuffer(a)||$.isBuffer(a)||$.isStream(a)||$.isFile(a)||$.isBlob(a)||$.isReadableStream(a))return a;if($.isArrayBufferView(a))return a.buffer;if($.isURLSearchParams(a))return i.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),a.toString();let y;if(d){if(f.indexOf("application/x-www-form-urlencoded")>-1)return dM(a,this.formSerializer).toString();if((y=$.isFileList(a))||f.indexOf("multipart/form-data")>-1){const b=this.env&&this.env.FormData;return wl(y?{"files[]":a}:a,b&&new b,this.formSerializer)}}return d||c?(i.setContentType("application/json",!1),gM(a)):a}],transformResponse:[function(a){const i=this.transitional||Qf.transitional,f=i&&i.forcedJSONParsing,c=this.responseType==="json";if($.isResponse(a)||$.isReadableStream(a))return a;if(a&&$.isString(a)&&(f&&!this.responseType||c)){const m=!(i&&i.silentJSONParsing)&&c;try{return JSON.parse(a)}catch(y){if(m)throw y.name==="SyntaxError"?re.from(y,re.ERR_BAD_RESPONSE,this,null,this.response):y}}return a}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:mt.classes.FormData,Blob:mt.classes.Blob},validateStatus:function(a){return a>=200&&a<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};$.forEach(["delete","get","head","post","put","patch"],e=>{Qf.headers[e]={}});const pM=$.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),yM=e=>{const a={};let i,f,c;return e&&e.split(`
`).forEach(function(m){c=m.indexOf(":"),i=m.substring(0,c).trim().toLowerCase(),f=m.substring(c+1).trim(),!(!i||a[i]&&pM[i])&&(i==="set-cookie"?a[i]?a[i].push(f):a[i]=[f]:a[i]=a[i]?a[i]+", "+f:f)}),a},z2=Symbol("internals");function uf(e){return e&&String(e).trim().toLowerCase()}function As(e){return e===!1||e==null?e:$.isArray(e)?e.map(As):String(e)}function bM(e){const a=Object.create(null),i=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let f;for(;f=i.exec(e);)a[f[1]]=f[2];return a}const wM=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function fd(e,a,i,f,c){if($.isFunction(f))return f.call(this,a,i);if(c&&(a=i),!!$.isString(a)){if($.isString(f))return a.indexOf(f)!==-1;if($.isRegExp(f))return f.test(a)}}function vM(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(a,i,f)=>i.toUpperCase()+f)}function xM(e,a){const i=$.toCamelCase(" "+a);["get","set","has"].forEach(f=>{Object.defineProperty(e,f+i,{value:function(c,d,m){return this[f].call(this,a,c,d,m)},configurable:!0})})}let Nt=class{constructor(a){a&&this.set(a)}set(a,i,f){const c=this;function d(y,b,x){const v=uf(b);if(!v)throw new Error("header name must be a non-empty string");const M=$.findKey(c,v);(!M||c[M]===void 0||x===!0||x===void 0&&c[M]!==!1)&&(c[M||b]=As(y))}const m=(y,b)=>$.forEach(y,(x,v)=>d(x,v,b));if($.isPlainObject(a)||a instanceof this.constructor)m(a,i);else if($.isString(a)&&(a=a.trim())&&!wM(a))m(yM(a),i);else if($.isObject(a)&&$.isIterable(a)){let y={},b,x;for(const v of a){if(!$.isArray(v))throw TypeError("Object iterator must return a key-value pair");y[x=v[0]]=(b=y[x])?$.isArray(b)?[...b,v[1]]:[b,v[1]]:v[1]}m(y,i)}else a!=null&&d(i,a,f);return this}get(a,i){if(a=uf(a),a){const f=$.findKey(this,a);if(f){const c=this[f];if(!i)return c;if(i===!0)return bM(c);if($.isFunction(i))return i.call(this,c,f);if($.isRegExp(i))return i.exec(c);throw new TypeError("parser must be boolean|regexp|function")}}}has(a,i){if(a=uf(a),a){const f=$.findKey(this,a);return!!(f&&this[f]!==void 0&&(!i||fd(this,this[f],f,i)))}return!1}delete(a,i){const f=this;let c=!1;function d(m){if(m=uf(m),m){const y=$.findKey(f,m);y&&(!i||fd(f,f[y],y,i))&&(delete f[y],c=!0)}}return $.isArray(a)?a.forEach(d):d(a),c}clear(a){const i=Object.keys(this);let f=i.length,c=!1;for(;f--;){const d=i[f];(!a||fd(this,this[d],d,a,!0))&&(delete this[d],c=!0)}return c}normalize(a){const i=this,f={};return $.forEach(this,(c,d)=>{const m=$.findKey(f,d);if(m){i[m]=As(c),delete i[d];return}const y=a?vM(d):String(d).trim();y!==d&&delete i[d],i[y]=As(c),f[y]=!0}),this}concat(...a){return this.constructor.concat(this,...a)}toJSON(a){const i=Object.create(null);return $.forEach(this,(f,c)=>{f!=null&&f!==!1&&(i[c]=a&&$.isArray(f)?f.join(", "):f)}),i}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([a,i])=>a+": "+i).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(a){return a instanceof this?a:new this(a)}static concat(a,...i){const f=new this(a);return i.forEach(c=>f.set(c)),f}static accessor(a){const f=(this[z2]=this[z2]={accessors:{}}).accessors,c=this.prototype;function d(m){const y=uf(m);f[y]||(xM(c,m),f[y]=!0)}return $.isArray(a)?a.forEach(d):d(a),this}};Nt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);$.reduceDescriptors(Nt.prototype,({value:e},a)=>{let i=a[0].toUpperCase()+a.slice(1);return{get:()=>e,set(f){this[i]=f}}});$.freezeMethods(Nt);function od(e,a){const i=this||Qf,f=a||i,c=Nt.from(f.headers);let d=f.data;return $.forEach(e,function(y){d=y.call(i,d,c.normalize(),a?a.status:void 0)}),c.normalize(),d}function sy(e){return!!(e&&e.__CANCEL__)}function oi(e,a,i){re.call(this,e??"canceled",re.ERR_CANCELED,a,i),this.name="CanceledError"}$.inherits(oi,re,{__CANCEL__:!0});function ly(e,a,i){const f=i.config.validateStatus;!i.status||!f||f(i.status)?e(i):a(new re("Request failed with status code "+i.status,[re.ERR_BAD_REQUEST,re.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i))}function MM(e){const a=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return a&&a[1]||""}function jM(e,a){e=e||10;const i=new Array(e),f=new Array(e);let c=0,d=0,m;return a=a!==void 0?a:1e3,function(b){const x=Date.now(),v=f[d];m||(m=x),i[c]=b,f[c]=x;let M=d,j=0;for(;M!==c;)j+=i[M++],M=M%e;if(c=(c+1)%e,c===d&&(d=(d+1)%e),x-m<a)return;const k=v&&x-v;return k?Math.round(j*1e3/k):void 0}}function LM(e,a){let i=0,f=1e3/a,c,d;const m=(x,v=Date.now())=>{i=v,c=null,d&&(clearTimeout(d),d=null),e.apply(null,x)};return[(...x)=>{const v=Date.now(),M=v-i;M>=f?m(x,v):(c=x,d||(d=setTimeout(()=>{d=null,m(c)},f-M)))},()=>c&&m(c)]}const Ks=(e,a,i=3)=>{let f=0;const c=jM(50,250);return LM(d=>{const m=d.loaded,y=d.lengthComputable?d.total:void 0,b=m-f,x=c(b),v=m<=y;f=m;const M={loaded:m,total:y,progress:y?m/y:void 0,bytes:b,rate:x||void 0,estimated:x&&y&&v?(y-m)/x:void 0,event:d,lengthComputable:y!=null,[a?"download":"upload"]:!0};e(M)},i)},R2=(e,a)=>{const i=e!=null;return[f=>a[0]({lengthComputable:i,total:e,loaded:f}),a[1]]},O2=e=>(...a)=>$.asap(()=>e(...a)),SM=mt.hasStandardBrowserEnv?((e,a)=>i=>(i=new URL(i,mt.origin),e.protocol===i.protocol&&e.host===i.host&&(a||e.port===i.port)))(new URL(mt.origin),mt.navigator&&/(msie|trident)/i.test(mt.navigator.userAgent)):()=>!0,CM=mt.hasStandardBrowserEnv?{write(e,a,i,f,c,d){const m=[e+"="+encodeURIComponent(a)];$.isNumber(i)&&m.push("expires="+new Date(i).toGMTString()),$.isString(f)&&m.push("path="+f),$.isString(c)&&m.push("domain="+c),d===!0&&m.push("secure"),document.cookie=m.join("; ")},read(e){const a=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return a?decodeURIComponent(a[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function kM(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function EM(e,a){return a?e.replace(/\/?\/$/,"")+"/"+a.replace(/^\/+/,""):e}function cy(e,a,i){let f=!kM(a);return e&&(f||i==!1)?EM(e,a):a}const B2=e=>e instanceof Nt?{...e}:e;function Ka(e,a){a=a||{};const i={};function f(x,v,M,j){return $.isPlainObject(x)&&$.isPlainObject(v)?$.merge.call({caseless:j},x,v):$.isPlainObject(v)?$.merge({},v):$.isArray(v)?v.slice():v}function c(x,v,M,j){if($.isUndefined(v)){if(!$.isUndefined(x))return f(void 0,x,M,j)}else return f(x,v,M,j)}function d(x,v){if(!$.isUndefined(v))return f(void 0,v)}function m(x,v){if($.isUndefined(v)){if(!$.isUndefined(x))return f(void 0,x)}else return f(void 0,v)}function y(x,v,M){if(M in a)return f(x,v);if(M in e)return f(void 0,x)}const b={url:d,method:d,data:d,baseURL:m,transformRequest:m,transformResponse:m,paramsSerializer:m,timeout:m,timeoutMessage:m,withCredentials:m,withXSRFToken:m,adapter:m,responseType:m,xsrfCookieName:m,xsrfHeaderName:m,onUploadProgress:m,onDownloadProgress:m,decompress:m,maxContentLength:m,maxBodyLength:m,beforeRedirect:m,transport:m,httpAgent:m,httpsAgent:m,cancelToken:m,socketPath:m,responseEncoding:m,validateStatus:y,headers:(x,v,M)=>c(B2(x),B2(v),M,!0)};return $.forEach(Object.keys(Object.assign({},e,a)),function(v){const M=b[v]||c,j=M(e[v],a[v],v);$.isUndefined(j)&&M!==y||(i[v]=j)}),i}const uy=e=>{const a=Ka({},e);let{data:i,withXSRFToken:f,xsrfHeaderName:c,xsrfCookieName:d,headers:m,auth:y}=a;a.headers=m=Nt.from(m),a.url=iy(cy(a.baseURL,a.url,a.allowAbsoluteUrls),e.params,e.paramsSerializer),y&&m.set("Authorization","Basic "+btoa((y.username||"")+":"+(y.password?unescape(encodeURIComponent(y.password)):"")));let b;if($.isFormData(i)){if(mt.hasStandardBrowserEnv||mt.hasStandardBrowserWebWorkerEnv)m.setContentType(void 0);else if((b=m.getContentType())!==!1){const[x,...v]=b?b.split(";").map(M=>M.trim()).filter(Boolean):[];m.setContentType([x||"multipart/form-data",...v].join("; "))}}if(mt.hasStandardBrowserEnv&&(f&&$.isFunction(f)&&(f=f(a)),f||f!==!1&&SM(a.url))){const x=c&&d&&CM.read(d);x&&m.set(c,x)}return a},TM=typeof XMLHttpRequest<"u",NM=TM&&function(e){return new Promise(function(i,f){const c=uy(e);let d=c.data;const m=Nt.from(c.headers).normalize();let{responseType:y,onUploadProgress:b,onDownloadProgress:x}=c,v,M,j,k,I;function S(){k&&k(),I&&I(),c.cancelToken&&c.cancelToken.unsubscribe(v),c.signal&&c.signal.removeEventListener("abort",v)}let N=new XMLHttpRequest;N.open(c.method.toUpperCase(),c.url,!0),N.timeout=c.timeout;function R(){if(!N)return;const _=Nt.from("getAllResponseHeaders"in N&&N.getAllResponseHeaders()),C={data:!y||y==="text"||y==="json"?N.responseText:N.response,status:N.status,statusText:N.statusText,headers:_,config:e,request:N};ly(function(G){i(G),S()},function(G){f(G),S()},C),N=null}"onloadend"in N?N.onloadend=R:N.onreadystatechange=function(){!N||N.readyState!==4||N.status===0&&!(N.responseURL&&N.responseURL.indexOf("file:")===0)||setTimeout(R)},N.onabort=function(){N&&(f(new re("Request aborted",re.ECONNABORTED,e,N)),N=null)},N.onerror=function(){f(new re("Network Error",re.ERR_NETWORK,e,N)),N=null},N.ontimeout=function(){let T=c.timeout?"timeout of "+c.timeout+"ms exceeded":"timeout exceeded";const C=c.transitional||fy;c.timeoutErrorMessage&&(T=c.timeoutErrorMessage),f(new re(T,C.clarifyTimeoutError?re.ETIMEDOUT:re.ECONNABORTED,e,N)),N=null},d===void 0&&m.setContentType(null),"setRequestHeader"in N&&$.forEach(m.toJSON(),function(T,C){N.setRequestHeader(C,T)}),$.isUndefined(c.withCredentials)||(N.withCredentials=!!c.withCredentials),y&&y!=="json"&&(N.responseType=c.responseType),x&&([j,I]=Ks(x,!0),N.addEventListener("progress",j)),b&&N.upload&&([M,k]=Ks(b),N.upload.addEventListener("progress",M),N.upload.addEventListener("loadend",k)),(c.cancelToken||c.signal)&&(v=_=>{N&&(f(!_||_.type?new oi(null,e,N):_),N.abort(),N=null)},c.cancelToken&&c.cancelToken.subscribe(v),c.signal&&(c.signal.aborted?v():c.signal.addEventListener("abort",v)));const A=MM(c.url);if(A&&mt.protocols.indexOf(A)===-1){f(new re("Unsupported protocol "+A+":",re.ERR_BAD_REQUEST,e));return}N.send(d||null)})},IM=(e,a)=>{const{length:i}=e=e?e.filter(Boolean):[];if(a||i){let f=new AbortController,c;const d=function(x){if(!c){c=!0,y();const v=x instanceof Error?x:this.reason;f.abort(v instanceof re?v:new oi(v instanceof Error?v.message:v))}};let m=a&&setTimeout(()=>{m=null,d(new re(`timeout ${a} of ms exceeded`,re.ETIMEDOUT))},a);const y=()=>{e&&(m&&clearTimeout(m),m=null,e.forEach(x=>{x.unsubscribe?x.unsubscribe(d):x.removeEventListener("abort",d)}),e=null)};e.forEach(x=>x.addEventListener("abort",d));const{signal:b}=f;return b.unsubscribe=()=>$.asap(y),b}},DM=function*(e,a){let i=e.byteLength;if(i<a){yield e;return}let f=0,c;for(;f<i;)c=f+a,yield e.slice(f,c),f=c},AM=async function*(e,a){for await(const i of zM(e))yield*DM(i,a)},zM=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const a=e.getReader();try{for(;;){const{done:i,value:f}=await a.read();if(i)break;yield f}}finally{await a.cancel()}},U2=(e,a,i,f)=>{const c=AM(e,a);let d=0,m,y=b=>{m||(m=!0,f&&f(b))};return new ReadableStream({async pull(b){try{const{done:x,value:v}=await c.next();if(x){y(),b.close();return}let M=v.byteLength;if(i){let j=d+=M;i(j)}b.enqueue(new Uint8Array(v))}catch(x){throw y(x),x}},cancel(b){return y(b),c.return()}},{highWaterMark:2})},vl=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",dy=vl&&typeof ReadableStream=="function",RM=vl&&(typeof TextEncoder=="function"?(e=>a=>e.encode(a))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),hy=(e,...a)=>{try{return!!e(...a)}catch{return!1}},OM=dy&&hy(()=>{let e=!1;const a=new Request(mt.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!a}),_2=64*1024,m0=dy&&hy(()=>$.isReadableStream(new Response("").body)),el={stream:m0&&(e=>e.body)};vl&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(a=>{!el[a]&&(el[a]=$.isFunction(e[a])?i=>i[a]():(i,f)=>{throw new re(`Response type '${a}' is not supported`,re.ERR_NOT_SUPPORT,f)})})})(new Response);const BM=async e=>{if(e==null)return 0;if($.isBlob(e))return e.size;if($.isSpecCompliantForm(e))return(await new Request(mt.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if($.isArrayBufferView(e)||$.isArrayBuffer(e))return e.byteLength;if($.isURLSearchParams(e)&&(e=e+""),$.isString(e))return(await RM(e)).byteLength},UM=async(e,a)=>{const i=$.toFiniteNumber(e.getContentLength());return i??BM(a)},_M=vl&&(async e=>{let{url:a,method:i,data:f,signal:c,cancelToken:d,timeout:m,onDownloadProgress:y,onUploadProgress:b,responseType:x,headers:v,withCredentials:M="same-origin",fetchOptions:j}=uy(e);x=x?(x+"").toLowerCase():"text";let k=IM([c,d&&d.toAbortSignal()],m),I;const S=k&&k.unsubscribe&&(()=>{k.unsubscribe()});let N;try{if(b&&OM&&i!=="get"&&i!=="head"&&(N=await UM(v,f))!==0){let C=new Request(a,{method:"POST",body:f,duplex:"half"}),D;if($.isFormData(f)&&(D=C.headers.get("content-type"))&&v.setContentType(D),C.body){const[G,F]=R2(N,Ks(O2(b)));f=U2(C.body,_2,G,F)}}$.isString(M)||(M=M?"include":"omit");const R="credentials"in Request.prototype;I=new Request(a,{...j,signal:k,method:i.toUpperCase(),headers:v.normalize().toJSON(),body:f,duplex:"half",credentials:R?M:void 0});let A=await fetch(I);const _=m0&&(x==="stream"||x==="response");if(m0&&(y||_&&S)){const C={};["status","statusText","headers"].forEach(me=>{C[me]=A[me]});const D=$.toFiniteNumber(A.headers.get("content-length")),[G,F]=y&&R2(D,Ks(O2(y),!0))||[];A=new Response(U2(A.body,_2,G,()=>{F&&F(),S&&S()}),C)}x=x||"text";let T=await el[$.findKey(el,x)||"text"](A,e);return!_&&S&&S(),await new Promise((C,D)=>{ly(C,D,{data:T,headers:Nt.from(A.headers),status:A.status,statusText:A.statusText,config:e,request:I})})}catch(R){throw S&&S(),R&&R.name==="TypeError"&&/Load failed|fetch/i.test(R.message)?Object.assign(new re("Network Error",re.ERR_NETWORK,e,I),{cause:R.cause||R}):re.from(R,R&&R.code,e,I)}}),g0={http:eM,xhr:NM,fetch:_M};$.forEach(g0,(e,a)=>{if(e){try{Object.defineProperty(e,"name",{value:a})}catch{}Object.defineProperty(e,"adapterName",{value:a})}});const Y2=e=>`- ${e}`,YM=e=>$.isFunction(e)||e===null||e===!1,my={getAdapter:e=>{e=$.isArray(e)?e:[e];const{length:a}=e;let i,f;const c={};for(let d=0;d<a;d++){i=e[d];let m;if(f=i,!YM(i)&&(f=g0[(m=String(i)).toLowerCase()],f===void 0))throw new re(`Unknown adapter '${m}'`);if(f)break;c[m||"#"+d]=f}if(!f){const d=Object.entries(c).map(([y,b])=>`adapter ${y} `+(b===!1?"is not supported by the environment":"is not available in the build"));let m=a?d.length>1?`since :
`+d.map(Y2).join(`
`):" "+Y2(d[0]):"as no adapter specified";throw new re("There is no suitable adapter to dispatch the request "+m,"ERR_NOT_SUPPORT")}return f},adapters:g0};function sd(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new oi(null,e)}function Q2(e){return sd(e),e.headers=Nt.from(e.headers),e.data=od.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),my.getAdapter(e.adapter||Qf.adapter)(e).then(function(f){return sd(e),f.data=od.call(e,e.transformResponse,f),f.headers=Nt.from(f.headers),f},function(f){return sy(f)||(sd(e),f&&f.response&&(f.response.data=od.call(e,e.transformResponse,f.response),f.response.headers=Nt.from(f.response.headers))),Promise.reject(f)})}const gy="1.9.0",xl={};["object","boolean","number","function","string","symbol"].forEach((e,a)=>{xl[e]=function(f){return typeof f===e||"a"+(a<1?"n ":" ")+e}});const G2={};xl.transitional=function(a,i,f){function c(d,m){return"[Axios v"+gy+"] Transitional option '"+d+"'"+m+(f?". "+f:"")}return(d,m,y)=>{if(a===!1)throw new re(c(m," has been removed"+(i?" in "+i:"")),re.ERR_DEPRECATED);return i&&!G2[m]&&(G2[m]=!0,console.warn(c(m," has been deprecated since v"+i+" and will be removed in the near future"))),a?a(d,m,y):!0}};xl.spelling=function(a){return(i,f)=>(console.warn(`${f} is likely a misspelling of ${a}`),!0)};function QM(e,a,i){if(typeof e!="object")throw new re("options must be an object",re.ERR_BAD_OPTION_VALUE);const f=Object.keys(e);let c=f.length;for(;c-- >0;){const d=f[c],m=a[d];if(m){const y=e[d],b=y===void 0||m(y,d,e);if(b!==!0)throw new re("option "+d+" must be "+b,re.ERR_BAD_OPTION_VALUE);continue}if(i!==!0)throw new re("Unknown option "+d,re.ERR_BAD_OPTION)}}const zs={assertOptions:QM,validators:xl},Mn=zs.validators;let Va=class{constructor(a){this.defaults=a||{},this.interceptors={request:new A2,response:new A2}}async request(a,i){try{return await this._request(a,i)}catch(f){if(f instanceof Error){let c={};Error.captureStackTrace?Error.captureStackTrace(c):c=new Error;const d=c.stack?c.stack.replace(/^.+\n/,""):"";try{f.stack?d&&!String(f.stack).endsWith(d.replace(/^.+\n.+\n/,""))&&(f.stack+=`
`+d):f.stack=d}catch{}}throw f}}_request(a,i){typeof a=="string"?(i=i||{},i.url=a):i=a||{},i=Ka(this.defaults,i);const{transitional:f,paramsSerializer:c,headers:d}=i;f!==void 0&&zs.assertOptions(f,{silentJSONParsing:Mn.transitional(Mn.boolean),forcedJSONParsing:Mn.transitional(Mn.boolean),clarifyTimeoutError:Mn.transitional(Mn.boolean)},!1),c!=null&&($.isFunction(c)?i.paramsSerializer={serialize:c}:zs.assertOptions(c,{encode:Mn.function,serialize:Mn.function},!0)),i.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?i.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:i.allowAbsoluteUrls=!0),zs.assertOptions(i,{baseUrl:Mn.spelling("baseURL"),withXsrfToken:Mn.spelling("withXSRFToken")},!0),i.method=(i.method||this.defaults.method||"get").toLowerCase();let m=d&&$.merge(d.common,d[i.method]);d&&$.forEach(["delete","get","head","post","put","patch","common"],I=>{delete d[I]}),i.headers=Nt.concat(m,d);const y=[];let b=!0;this.interceptors.request.forEach(function(S){typeof S.runWhen=="function"&&S.runWhen(i)===!1||(b=b&&S.synchronous,y.unshift(S.fulfilled,S.rejected))});const x=[];this.interceptors.response.forEach(function(S){x.push(S.fulfilled,S.rejected)});let v,M=0,j;if(!b){const I=[Q2.bind(this),void 0];for(I.unshift.apply(I,y),I.push.apply(I,x),j=I.length,v=Promise.resolve(i);M<j;)v=v.then(I[M++],I[M++]);return v}j=y.length;let k=i;for(M=0;M<j;){const I=y[M++],S=y[M++];try{k=I(k)}catch(N){S.call(this,N);break}}try{v=Q2.call(this,k)}catch(I){return Promise.reject(I)}for(M=0,j=x.length;M<j;)v=v.then(x[M++],x[M++]);return v}getUri(a){a=Ka(this.defaults,a);const i=cy(a.baseURL,a.url,a.allowAbsoluteUrls);return iy(i,a.params,a.paramsSerializer)}};$.forEach(["delete","get","head","options"],function(a){Va.prototype[a]=function(i,f){return this.request(Ka(f||{},{method:a,url:i,data:(f||{}).data}))}});$.forEach(["post","put","patch"],function(a){function i(f){return function(d,m,y){return this.request(Ka(y||{},{method:a,headers:f?{"Content-Type":"multipart/form-data"}:{},url:d,data:m}))}}Va.prototype[a]=i(),Va.prototype[a+"Form"]=i(!0)});let GM=class py{constructor(a){if(typeof a!="function")throw new TypeError("executor must be a function.");let i;this.promise=new Promise(function(d){i=d});const f=this;this.promise.then(c=>{if(!f._listeners)return;let d=f._listeners.length;for(;d-- >0;)f._listeners[d](c);f._listeners=null}),this.promise.then=c=>{let d;const m=new Promise(y=>{f.subscribe(y),d=y}).then(c);return m.cancel=function(){f.unsubscribe(d)},m},a(function(d,m,y){f.reason||(f.reason=new oi(d,m,y),i(f.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(a){if(this.reason){a(this.reason);return}this._listeners?this._listeners.push(a):this._listeners=[a]}unsubscribe(a){if(!this._listeners)return;const i=this._listeners.indexOf(a);i!==-1&&this._listeners.splice(i,1)}toAbortSignal(){const a=new AbortController,i=f=>{a.abort(f)};return this.subscribe(i),a.signal.unsubscribe=()=>this.unsubscribe(i),a.signal}static source(){let a;return{token:new py(function(c){a=c}),cancel:a}}};function $M(e){return function(i){return e.apply(null,i)}}function ZM(e){return $.isObject(e)&&e.isAxiosError===!0}const p0={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(p0).forEach(([e,a])=>{p0[a]=e});function yy(e){const a=new Va(e),i=P4(Va.prototype.request,a);return $.extend(i,Va.prototype,a,{allOwnKeys:!0}),$.extend(i,a,null,{allOwnKeys:!0}),i.create=function(c){return yy(Ka(e,c))},i}const Je=yy(Qf);Je.Axios=Va;Je.CanceledError=oi;Je.CancelToken=GM;Je.isCancel=sy;Je.VERSION=gy;Je.toFormData=wl;Je.AxiosError=re;Je.Cancel=Je.CanceledError;Je.all=function(a){return Promise.all(a)};Je.spread=$M;Je.isAxiosError=ZM;Je.mergeConfig=Ka;Je.AxiosHeaders=Nt;Je.formToJSON=e=>oy($.isHTMLForm(e)?new FormData(e):e);Je.getAdapter=my.getAdapter;Je.HttpStatusCode=p0;Je.default=Je;const{Axios:aR,AxiosError:rR,CanceledError:iR,isCancel:fR,CancelToken:oR,VERSION:sR,all:lR,Cancel:cR,isAxiosError:uR,spread:dR,toFormData:hR,AxiosHeaders:mR,HttpStatusCode:gR,formToJSON:pR,getAdapter:yR,mergeConfig:bR}=Je,JM="https://mendam-server.onrender.com/api",Se=Je.create({baseURL:JM,headers:{"Content-Type":"application/json"},timeout:1e4,withCredentials:!0});Se.interceptors.request.use(e=>{const a=localStorage.getItem("token");return a&&(e.headers.Authorization=`Bearer ${a}`),e},e=>(console.error("❌ API Request Error:",e),Promise.reject(e)));Se.interceptors.response.use(e=>e,e=>{var a,i,f,c;return console.error(`❌ API Response Error: ${(a=e.response)==null?void 0:a.status} ${(i=e.config)==null?void 0:i.url}`,(f=e.response)==null?void 0:f.data),((c=e.response)==null?void 0:c.status)===401&&(localStorage.removeItem("token"),window.location.href="/auth/login"),Promise.reject(e)});const xf={register:async e=>{var a,i,f;try{return(await Se.post("/auth/register",e)).data}catch(c){throw console.error("❌ Registration failed:",(a=c.response)==null?void 0:a.data),new Error(((f=(i=c.response)==null?void 0:i.data)==null?void 0:f.message)||"Registration failed")}},login:async e=>{var a,i,f;try{return(await Se.post("/auth/login",e)).data}catch(c){throw console.error("❌ Login failed:",(a=c.response)==null?void 0:a.data),new Error(((f=(i=c.response)==null?void 0:i.data)==null?void 0:f.message)||"Login failed")}},logout:async()=>{try{await Se.post("/auth/logout")}catch(e){console.error("Logout error:",e)}finally{localStorage.removeItem("token")}},getProfile:async()=>{var e,a,i;try{return(await Se.get("/auth/profile")).data}catch(f){throw console.error("❌ Get profile failed:",(e=f.response)==null?void 0:e.data),new Error(((i=(a=f.response)==null?void 0:a.data)==null?void 0:i.message)||"Failed to get profile")}},updateProfile:async e=>{var a,i,f;try{return(await Se.put("/users/profile",e)).data}catch(c){throw console.error("❌ Update profile failed:",(a=c.response)==null?void 0:a.data),new Error(((f=(i=c.response)==null?void 0:i.data)==null?void 0:f.message)||"Failed to update profile")}}},pa={getFriends:async()=>{var e,a,i;try{return(await Se.get("/friends")).data}catch(f){throw console.error("❌ Get friends failed:",(e=f.response)==null?void 0:e.data),new Error(((i=(a=f.response)==null?void 0:a.data)==null?void 0:i.message)||"Failed to get friends")}},getFriendRequests:async()=>{var e,a,i;try{return(await Se.get("/friends/requests")).data}catch(f){throw console.error("❌ Get friend requests failed:",(e=f.response)==null?void 0:e.data),new Error(((i=(a=f.response)==null?void 0:a.data)==null?void 0:i.message)||"Failed to get friend requests")}},sendFriendRequest:async e=>{var a,i,f;try{return(await Se.post("/friends/request",{friendId:e})).data}catch(c){throw console.error("❌ Send friend request failed:",(a=c.response)==null?void 0:a.data),new Error(((f=(i=c.response)==null?void 0:i.data)==null?void 0:f.message)||"Failed to send friend request")}},acceptFriendRequest:async e=>{var a,i,f;try{return(await Se.put(`/friends/request/${e}/accept`)).data}catch(c){throw console.error("❌ Accept friend request failed:",(a=c.response)==null?void 0:a.data),new Error(((f=(i=c.response)==null?void 0:i.data)==null?void 0:f.message)||"Failed to accept friend request")}},declineFriendRequest:async e=>{var a,i,f;try{return(await Se.put(`/friends/request/${e}/decline`)).data}catch(c){throw console.error("❌ Decline friend request failed:",(a=c.response)==null?void 0:a.data),new Error(((f=(i=c.response)==null?void 0:i.data)==null?void 0:f.message)||"Failed to decline friend request")}},removeFriend:async e=>{var a,i,f;try{return(await Se.delete(`/friends/${e}`)).data}catch(c){throw console.error("❌ Remove friend failed:",(a=c.response)==null?void 0:a.data),new Error(((f=(i=c.response)==null?void 0:i.data)==null?void 0:f.message)||"Failed to remove friend")}},blockUser:async e=>{var a,i,f;try{return(await Se.post("/friends/block",{friendId:e})).data}catch(c){throw console.error("❌ Block user failed:",(a=c.response)==null?void 0:a.data),new Error(((f=(i=c.response)==null?void 0:i.data)==null?void 0:f.message)||"Failed to block user")}},searchUsers:async e=>{var a,i,f;try{return(await Se.get(`/users/search?query=${encodeURIComponent(e)}`)).data}catch(c){throw console.error("❌ Search users failed:",(a=c.response)==null?void 0:a.data),new Error(((f=(i=c.response)==null?void 0:i.data)==null?void 0:f.message)||"Failed to search users")}}},ld={sendDirectMessage:async(e,a,i="text")=>{var f,c,d;try{return(await Se.post("/messages/direct",{recipientId:e,content:a,type:i})).data}catch(m){throw console.error("❌ Send message failed:",(f=m.response)==null?void 0:f.data),new Error(((d=(c=m.response)==null?void 0:c.data)==null?void 0:d.message)||"Failed to send message")}},getDirectMessages:async(e,a=1,i=50)=>{var f,c,d;try{return(await Se.get(`/messages/direct/${e}?page=${a}&limit=${i}`)).data}catch(m){throw console.error("❌ Get messages failed:",(f=m.response)==null?void 0:f.data),new Error(((d=(c=m.response)==null?void 0:c.data)==null?void 0:d.message)||"Failed to get messages")}},deleteMessage:async e=>{var a,i,f;try{return(await Se.delete(`/messages/${e}`)).data}catch(c){throw console.error("❌ Delete message failed:",(a=c.response)==null?void 0:a.data),new Error(((f=(i=c.response)==null?void 0:i.data)==null?void 0:f.message)||"Failed to delete message")}}},jn={getUserGroups:async()=>{var e,a,i;try{return(await Se.get("/chat-groups")).data}catch(f){throw console.error("❌ Get groups failed:",(e=f.response)==null?void 0:e.data),new Error(((i=(a=f.response)==null?void 0:a.data)==null?void 0:i.message)||"Failed to get groups")}},getGroupDetails:async e=>{var a,i,f;try{return(await Se.get(`/chat-groups/${e}`)).data}catch(c){throw console.error("❌ Get group details failed:",(a=c.response)==null?void 0:a.data),new Error(((f=(i=c.response)==null?void 0:i.data)==null?void 0:f.message)||"Failed to get group details")}},createGroup:async(e,a,i=!1,f=100)=>{var c,d,m;try{return(await Se.post("/chat-groups",{name:e,description:a,isPrivate:i,maxMembers:f})).data}catch(y){throw console.error("❌ Create group failed:",(c=y.response)==null?void 0:c.data),new Error(((m=(d=y.response)==null?void 0:d.data)==null?void 0:m.message)||"Failed to create group")}},sendGroupMessage:async(e,a,i="text")=>{var f,c,d;try{return(await Se.post("/messages/group",{chatGroupId:e,content:a,type:i})).data}catch(m){throw console.error("❌ Send group message failed:",(f=m.response)==null?void 0:f.data),new Error(((d=(c=m.response)==null?void 0:c.data)==null?void 0:d.message)||"Failed to send group message")}},getGroupMessages:async(e,a=1,i=50)=>{var f,c,d;try{return(await Se.get(`/messages/group/${e}?page=${a}&limit=${i}`)).data}catch(m){throw console.error("❌ Get group messages failed:",(f=m.response)==null?void 0:f.data),new Error(((d=(c=m.response)==null?void 0:c.data)==null?void 0:d.message)||"Failed to get group messages")}},joinGroup:async e=>{var a,i,f;try{return(await Se.post(`/chat-groups/${e}/join`)).data}catch(c){throw console.error("❌ Join group failed:",(a=c.response)==null?void 0:a.data),new Error(((f=(i=c.response)==null?void 0:i.data)==null?void 0:f.message)||"Failed to join group")}},leaveGroup:async e=>{var a,i,f;try{return(await Se.delete(`/chat-groups/${e}/leave`)).data}catch(c){throw console.error("❌ Leave group failed:",(a=c.response)==null?void 0:a.data),new Error(((f=(i=c.response)==null?void 0:i.data)==null?void 0:f.message)||"Failed to leave group")}},addMember:async(e,a)=>{var i,f,c;try{return(await Se.post(`/chat-groups/${e}/members`,{userId:a})).data}catch(d){throw console.error("❌ Add member failed:",(i=d.response)==null?void 0:i.data),new Error(((c=(f=d.response)==null?void 0:f.data)==null?void 0:c.message)||"Failed to add member")}},removeMember:async(e,a)=>{var i,f,c;try{return(await Se.delete(`/chat-groups/${e}/members/${a}`)).data}catch(d){throw console.error("❌ Remove member failed:",(i=d.response)==null?void 0:i.data),new Error(((c=(f=d.response)==null?void 0:f.data)==null?void 0:c.message)||"Failed to remove member")}},updateMemberRole:async(e,a,i)=>{var f,c,d;try{return(await Se.put(`/chat-groups/${e}/members/${a}/role`,{role:i})).data}catch(m){throw console.error("❌ Update member role failed:",(f=m.response)==null?void 0:f.data),new Error(((d=(c=m.response)==null?void 0:c.data)==null?void 0:d.message)||"Failed to update member role")}},searchPublicGroups:async e=>{var a,i,f;try{return(await Se.get(`/chat-groups/search?query=${encodeURIComponent(e)}`)).data}catch(c){throw console.error("❌ Search groups failed:",(a=c.response)==null?void 0:a.data),new Error(((f=(i=c.response)==null?void 0:i.data)==null?void 0:f.message)||"Failed to search groups")}}},by=g.createContext(void 0),HM=({children:e})=>{const[a,i]=g.useState(null),[f,c]=g.useState(!0);g.useEffect(()=>{(async()=>{try{if(localStorage.getItem("token")){const j=await xf.getProfile();j.success?i(j.data.user):localStorage.removeItem("token")}}catch(M){console.error("Token verification failed:",M),localStorage.removeItem("token"),i(null)}finally{c(!1)}})()},[]);const x={user:a,loading:f,login:async v=>{try{c(!0);const M=await xf.login(v);if(M.success){const{user:j,token:k}=M.data;localStorage.setItem("token",k),i(j)}else throw new Error(M.message||"Login failed")}catch(M){throw new Error(M.message||"Login failed")}finally{c(!1)}},register:async v=>{try{c(!0);const M=await xf.register(v);if(M.success){const{user:j,token:k}=M.data;localStorage.setItem("token",k),i(j)}else throw new Error(M.message||"Registration failed")}catch(M){throw new Error(M.message||"Registration failed")}finally{c(!1)}},logout:async()=>{try{await xf.logout()}catch(v){console.error("Logout error:",v)}finally{localStorage.removeItem("token"),i(null)}},updateUser:v=>{i(M=>M?{...M,...v}:null)},isAuthenticated:!!a};return s.jsx(by.Provider,{value:x,children:e})},pt=()=>{const e=g.useContext(by);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e},PM=Gt`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,FM=()=>{const[e,a]=g.useState(!1),[i,f]=g.useState(!1),{isAuthenticated:c}=pt();g.useEffect(()=>{const m=()=>{a(window.scrollY>50)};return window.addEventListener("scroll",m),()=>window.removeEventListener("scroll",m)},[]);const d=[{label:"Features",href:"#features"},{label:"CTA",href:"#cta"},{label:"Trust",href:"#trust"},{label:"Testimonials",href:"#testimonials"}];return s.jsx(qM,{isScrolled:e,children:s.jsxs(VM,{children:[s.jsxs(XM,{children:[s.jsxs(WM,{children:[s.jsx(KM,{children:e?s.jsx(ml,{}):s.jsx(mx,{})}),s.jsx(ej,{isScrolled:e,children:"Mendam"})]}),s.jsx(tj,{children:s.jsx(nj,{children:d.map((m,y)=>s.jsx(aj,{children:s.jsx(rj,{isScrolled:e,children:s.jsx("a",{href:m.href,children:m.label})})},y))})}),s.jsxs(ij,{children:[!c&&s.jsxs(s.Fragment,{children:[s.jsx(De,{to:"/auth/login",children:s.jsx(fj,{isScrolled:e,children:"Sign In"})}),s.jsx(De,{to:"/auth/register",children:s.jsx($2,{children:"Get Started"})})]}),c&&s.jsx(De,{to:"/app/@me",children:s.jsx($2,{children:"Open Mendam"})}),s.jsxs(oj,{onClick:()=>f(!i),isOpen:i,isScrolled:e,children:[s.jsx("span",{}),s.jsx("span",{}),s.jsx("span",{})]})]})]}),s.jsx(sj,{isOpen:i,children:s.jsxs(lj,{children:[d.map((m,y)=>s.jsx(cd,{children:s.jsx(ud,{onClick:()=>f(!1),children:s.jsx("a",{href:m.href,children:m.label})})},y)),s.jsx(cj,{}),s.jsx(cd,{children:s.jsx(De,{to:"/auth/login",children:s.jsx(ud,{children:"Sign In"})})}),s.jsx(cd,{children:s.jsx(De,{to:"/auth/register",children:s.jsx(ud,{isPrimary:!0,children:"Get Started"})})})]})})]})})},qM=h.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 2rem 0;
  background: ${e=>e.isScrolled?"rgba(255, 255, 255, 0.95)":"transparent"};
  backdrop-filter: ${e=>e.isScrolled?"blur(20px)":"none"};
  border-bottom: ${e=>e.isScrolled?"1px solid rgba(0, 0, 0, 0.1)":"1px solid transparent"};
  transition: all 0.3s ease;
  animation: ${PM} 0.8s ease-out;
  
  @media (max-width: 768px) {
    padding: 1.5rem 0;
  }
`,VM=h.div`
  max-width: 140rem;
  margin: 0 auto;
  padding: 0 3rem;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`,XM=h.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,WM=h.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  user-select: none;
`,KM=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 3.5rem;
    height: 3.5rem;
  }
`,ej=h.div`
  font-size: var(--text-xl);
  font-weight: 700;
  color: ${e=>e.isScrolled?"#1a202c":"white"};
  transition: color 0.3s ease;
  
  @media (max-width: 640px) {
    display: none;
  }
`,tj=h.div`
  @media (max-width: 768px) {
    display: none;
  }
`,nj=h.ul`
  display: flex;
  align-items: center;
  gap: 4rem;
  list-style: none;
  margin: 0;
  padding: 0;
`,aj=h.li`
  position: relative;
`,rj=h.div`
a {
  color: ${e=>e.isScrolled?"#4a5568":"rgba(255, 255, 255, 0.9)"};
  
}
  font-size: var(--text-md);
  font-weight: 500;
  color: ${e=>e.isScrolled?"#4a5568":"rgba(255, 255, 255, 0.9)"};
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 0;
  
  &:hover {
    color: ${e=>e.isScrolled?"#667eea":"white"};
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${e=>e.isScrolled?"#667eea":"rgba(255, 255, 255, 0.8)"};
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`,ij=h.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`,fj=h.a`
  font-size: var(--text-md);
  font-weight: 500;
  color: ${e=>e.isScrolled?"#4a5568":"rgba(255, 255, 255, 0.9)"};
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.8rem 1.6rem;
  border-radius: 0.8rem;
  
  &:hover {
    color: ${e=>e.isScrolled?"#667eea":"white"};
    background: ${e=>e.isScrolled?"rgba(102, 126, 234, 0.1)":"rgba(255, 255, 255, 0.1)"};
  }
  
  @media (max-width: 640px) {
    display: none;
  }
`,$2=h.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-md);
  font-weight: 600;
  color: #667eea;
  background: white;
  text-decoration: none;
  padding: 1.2rem 2.4rem;
  border-radius: 0.8rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    background: #f8fafc;
  }
  
  @media (max-width: 640px) {
    padding: 1rem 2rem;
    font-size: var(--text-sm);
  }
`,oj=h.button`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 3rem;
  height: 3rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  
  @media (max-width: 768px) {
    display: flex;
  }
  
  span {
    width: 100%;
    height: 2px;
    background: ${e=>e.isScrolled?"#4a5568":"white"};
    border-radius: 2px;
    transition: all 0.3s ease;
    transform-origin: 1px;
    
    &:first-child {
      transform: ${e=>e.isOpen?"rotate(45deg)":"rotate(0)"};
    }
    
    &:nth-child(2) {
      opacity: ${e=>e.isOpen?"0":"1"};
      transform: ${e=>e.isOpen?"translateX(20px)":"translateX(0)"};
    }
    
    &:nth-child(3) {
      transform: ${e=>e.isOpen?"rotate(-45deg)":"rotate(0)"};
    }
  }
`,sj=h.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  border-radius: 0 0 1.5rem 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-top: none;
  overflow: hidden;
  max-height: ${e=>e.isOpen?"50rem":"0"};
  opacity: ${e=>e.isOpen?"1":"0"};
  visibility: ${e=>e.isOpen?"visible":"hidden"};
  transition: all 0.3s ease;
  
  @media (min-width: 769px) {
    display: none;
  }
`,lj=h.ul`
  list-style: none;
  margin: 0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,cd=h.li`
  width: 100%;
`,ud=h.div`
  display: block;
  padding: 1.5rem 2rem;
  font-size: var(--text-md);
  font-weight: ${e=>e.isPrimary?"600":"500"};
  color: ${e=>e.isPrimary?"white":"#4a5568"};
  text-decoration: none;
  border-radius: 1rem;
  transition: all 0.3s ease;
  background: ${e=>e.isPrimary?"#667eea":"transparent"};
  text-align: center;
  
  &:hover {
    background: ${e=>e.isPrimary?"#5a67d8":"rgba(102, 126, 234, 0.1)"};
    color: ${e=>e.isPrimary?"white":"#667eea"};
    transform: translateY(-1px);
  }
`,cj=h.div`
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, #e2e8f0 50%, transparent 100%);
  margin: 1rem 0;
`,uj=Gt`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,wy=Gt`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
`,dj=()=>{const e=[{title:"Product",links:[{label:"Features",href:"#features"},{label:"Security",href:"#security"}]},{title:"Company",links:[{label:"About Us",href:"#about"},{label:"Blog",href:"#blog"},{label:"Contact",href:"#contact"}]},{title:"Resources",links:[{label:"Help Center",href:"#help"},{label:"Documentation",href:"#docs"},{label:"Community",href:"#community"},{label:"Status",href:"#status"}]},{title:"Legal",links:[{label:"Privacy Policy",href:"#privacy"},{label:"Terms of Service",href:"#terms"},{label:"Cookie Policy",href:"#cookies"}]}];return s.jsxs(hj,{children:[s.jsxs(gj,{children:[s.jsxs(pj,{children:[s.jsxs(yj,{children:[s.jsxs(bj,{children:[s.jsx(wj,{children:s.jsx(ml,{})}),s.jsx(vj,{children:s.jsx(xj,{children:"Mendam"})})]}),s.jsx(Mj,{children:"Empowering teams worldwide with intelligent, secure, and seamless communication tools. Join thousands of organizations who trust Mendam for their daily collaboration needs."})]}),s.jsx(Lj,{children:e.map((a,i)=>s.jsxs(Sj,{children:[s.jsx(Cj,{children:a.title}),s.jsx(kj,{children:a.links.map((f,c)=>s.jsx(Ej,{children:s.jsx("a",{href:f.href,children:f.label})},c))})]},i))})]}),s.jsx(Tj,{children:s.jsxs(Nj,{children:[s.jsxs(Ij,{children:[s.jsx(Dj,{children:"Stay in the loop"}),s.jsx(Aj,{children:"Get the latest updates, tips, and insights delivered to your inbox."})]}),s.jsxs(zj,{children:[s.jsx(Rj,{type:"email",placeholder:"Enter your email address"}),s.jsxs(Oj,{children:[s.jsx("span",{children:"Subscribe"}),s.jsx(Bj,{children:"✨"})]})]})]})}),s.jsxs(Uj,{children:[s.jsx(_j,{children:"© 2024 Mendam Technologies Inc. All rights reserved."}),s.jsxs(Yj,{children:[s.jsx(dd,{href:"#privacy",children:"Privacy"}),s.jsx(Z2,{children:"•"}),s.jsx(dd,{href:"#terms",children:"Terms"}),s.jsx(Z2,{children:"•"}),s.jsx(dd,{href:"#cookies",children:"Cookies"})]}),s.jsxs(Qj,{children:[s.jsx(Gj,{}),s.jsx("span",{children:"All systems operational"})]})]})]}),s.jsx(mj,{})]})},hj=h.footer`
  background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
  color: white;
  position: relative;
  overflow: hidden;
  /* margin-top: 8rem; */
`,mj=h.div`
  position: absolute;
  inset: 0;
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(118, 75, 162, 0.1) 0%, transparent 50%);
  pointer-events: none;
`,gj=h.div`
  max-width: 140rem;
  margin: 0 auto;
  padding: 0 3rem;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`,pj=h.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 6rem;
  padding: 8rem 0 6rem;
  animation: ${uj} 0.8s ease-out;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 4rem;
    text-align: center;
  }
  
  @media (max-width: 768px) {
    padding: 6rem 0 4rem;
  }
`,yj=h.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`,bj=h.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  
  @media (max-width: 1024px) {
    justify-content: center;
  }
`,wj=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 1.2rem;
  padding: 1rem;
  
  svg {
    filter: brightness(0) invert(1);
  }
`,vj=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`,xj=h.div`
  font-size: var(--text-xl);
  font-weight: 700;
  line-height: 1;
`;h.div`
  font-size: var(--text-sm);
  opacity: 0.8;
  line-height: 1;
`;const Mj=h.p`
  font-size: var(--text-md);
  line-height: 1.6;
  opacity: 0.9;
  max-width: 40rem;
  
  @media (max-width: 1024px) {
    margin: 0 auto;
  }
`;h.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 1024px) {
    justify-content: center;
  }
`;const jj=h.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-10px);
  background: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: var(--text-xs);
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  pointer-events: none;
  
  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    border-top-color: rgba(0, 0, 0, 0.9);
  }
`;h.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.5rem;
  height: 4.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  font-size: 2rem;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    
    ${jj} {
      opacity: 1;
      visibility: visible;
      transform: translateY(-100%);
    }
  }
`;const Lj=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 4rem;
  
  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,Sj=h.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,Cj=h.h4`
  font-size: var(--text-lg);
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
`,kj=h.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Ej=h.li`
  a {
    font-size: var(--text-md);
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: all 0.3s ease;
    
    &:hover {
      color: #667eea;
      transform: translateX(5px);
    }
  }
`,Tj=h.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 2rem;
  padding: 4rem;
  margin-bottom: 4rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: 768px) {
    padding: 3rem 2rem;
    margin-bottom: 3rem;
  }
`,Nj=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    gap: 3rem;
  }
`,Ij=h.div`
  flex: 1;
`,Dj=h.h3`
  font-size: var(--text-xl);
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
`,Aj=h.p`
  font-size: var(--text-md);
  opacity: 0.9;
  line-height: 1.6;
`,zj=h.form`
  display: flex;
  gap: 1.5rem;
  flex: 1;
  max-width: 40rem;
  
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 1rem;
  }
`,Rj=h.input`
  flex: 1;
  padding: 1.5rem 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: var(--text-md);
  backdrop-filter: blur(10px);
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  
  &:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.15);
  }
`,Oj=h.button`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1.5rem 2.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 1rem;
  font-weight: 600;
  font-size: var(--text-md);
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
  }
`,Bj=h.span`
  animation: ${wy} 2s infinite;
`,Uj=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
  
  @media (max-width: 640px) {
    gap: 1.5rem;
  }
`,_j=h.div`
  font-size: var(--text-sm);
  opacity: 0.8;
`,Yj=h.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  
  @media (max-width: 640px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`,dd=h.a`
  font-size: var(--text-sm);
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #667eea;
  }
`,Z2=h.span`
  opacity: 0.5;
  
  @media (max-width: 640px) {
    display: none;
  }
`,Qj=h.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: var(--text-sm);
  opacity: 0.8;
`,Gj=h.div`
  width: 0.8rem;
  height: 0.8rem;
  background: #22c55e;
  border-radius: 50%;
  animation: ${wy} 2s infinite;
`,$j=({fz:e,bg:a,outline:i,color:f,hoverColor:c,hoverBg:d,title:m,isLink:y,href:b,isBlank:x})=>y?s.jsx("a",{href:b,target:x?"_blank":void 0,children:s.jsx(J2,{color:f,outline:i,bg:a,fz:e,hoverColor:c,hoverBg:d,children:m})}):s.jsx(J2,{color:f,outline:i,bg:a,fz:e,hoverColor:c,hoverBg:d,children:m}),J2=h.button`
  width: max-content;
  padding: 1.4rem 4rem;
  border-radius: 30px;
  background-color: ${({bg:e,outline:a})=>e?`var(--${e})`:a?"transparent":"var(--blue)"};
  font-size: ${({fz:e})=>e?`var(--text-${e})`:"var(--text-lg)"};
  border: 2px solid
    ${({outline:e})=>e?"var(--blue)":"transparent"};
  color: ${({color:e,outline:a})=>e?`var(--${e})`:a?"var(--blue)":"var(--light)"};
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${({hoverBg:e,outline:a})=>e?`var(--${e})`:a?"var(--blue)":"var(--light)"};
    color: ${({hoverColor:e,outline:a})=>e?`var(--${e})`:a?"var(--light)":"var(--blue)"};
    border: 2px solid
      ${({outline:e})=>"var(--blue)"};
  }
  text-decoration: none;
  font-weight: 600;
`,vy=Gt`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,xy=Gt`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`,My=Gt`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
`,Zj=()=>s.jsxs(Jj,{children:[s.jsxs(Hj,{children:[s.jsxs(Pj,{children:[s.jsxs(Fj,{children:[s.jsx(H2,{children:"Connect"})," teams.",s.jsx("br",{}),s.jsx(H2,{children:"Build"})," relationships.",s.jsx("br",{}),s.jsx(qj,{children:"Achieve more."})]}),s.jsx(Vj,{children:"Experience the future of team communication with Mendam's AI-powered chat platform. Real-time collaboration, custom workflows, and seamless integration - all in one place."}),s.jsx(Xj,{children:s.jsx(Wj,{children:s.jsx($j,{isLink:!0,href:"/auth/register",title:"Get Started"})})})]}),s.jsx(Kj,{children:s.jsxs(eL,{children:[s.jsxs(tL,{children:[s.jsxs(nL,{children:[s.jsx(Ha,{color:"#ff5f57"}),s.jsx(Ha,{color:"#ffbd2e"}),s.jsx(Ha,{color:"#28ca42"}),s.jsx(aL,{children:"Mendam"})]}),s.jsx(rL,{children:s.jsxs(iL,{children:[s.jsxs(fL,{children:[s.jsxs(hd,{active:!0,children:[s.jsx(Rs,{color:"#6366f1"}),s.jsx("span",{children:"Design Team"}),s.jsx(P2,{children:"3"})]}),s.jsxs(hd,{children:[s.jsx(Rs,{color:"#10b981"}),s.jsx("span",{children:"Development"})]}),s.jsxs(hd,{children:[s.jsx(Rs,{color:"#f59e0b"}),s.jsx("span",{children:"Marketing"}),s.jsx(P2,{children:"1"})]})]}),s.jsxs(oL,{children:[s.jsxs(F2,{children:[s.jsx(q2,{color:"#6366f1"}),s.jsxs(V2,{children:[s.jsx(X2,{children:"Alex Designer"}),s.jsx(W2,{children:"Just finished the new component library! 🎨"})]})]}),s.jsxs(F2,{children:[s.jsx(q2,{color:"#10b981"}),s.jsxs(V2,{children:[s.jsx(X2,{children:"Sarah Dev"}),s.jsx(W2,{children:"Amazing work! The new buttons look fantastic"})]})]}),s.jsxs(sL,{children:[s.jsx(Ha,{color:"#6366f1"}),s.jsx(Ha,{color:"#6366f1"}),s.jsx(Ha,{color:"#6366f1"}),s.jsx("span",{children:"Mike is typing..."})]})]})]})})]}),s.jsxs(md,{delay:"0s",children:[s.jsx(gd,{children:"📊"}),s.jsxs(pd,{children:[s.jsx("strong",{children:"Team Analytics"}),s.jsx("span",{children:"Real-time insights"})]})]}),s.jsxs(md,{delay:"1s",children:[s.jsx(gd,{children:"🔔"}),s.jsxs(pd,{children:[s.jsx("strong",{children:"Smart Notifications"}),s.jsx("span",{children:"Never miss important updates"})]})]}),s.jsxs(md,{delay:"2s",children:[s.jsx(gd,{children:"🚀"}),s.jsxs(pd,{children:[s.jsx("strong",{children:"AI Assistant"}),s.jsx("span",{children:"Boost productivity by 40%"})]})]})]})})]}),s.jsxs(lL,{children:[s.jsx(yd,{top:"10%",left:"5%",size:"300px"}),s.jsx(yd,{top:"60%",right:"10%",size:"200px"}),s.jsx(yd,{bottom:"20%",left:"20%",size:"150px"})]})]}),Jj=h.section`
  min-height: 100vh;
  padding: 8rem 3rem 4rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 6rem 2rem 2rem;
    min-height: auto;
  }
`,Hj=h.div`
  max-width: 140rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;
  z-index: 2;
  position: relative;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 4rem;
    text-align: center;
  }
`,Pj=h.div`
  animation: ${vy} 0.8s ease-out;
`;h.div`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 5rem;
  padding: 0.8rem 1.6rem;
  margin-bottom: 2rem;
  font-size: var(--text-sm);
  color: white;
  font-weight: 500;
`;h.span`
  font-size: 1.4rem;
  animation: ${My} 2s infinite;
`;const Fj=h.h1`
  font-size: clamp(4rem, 8vw, 7rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 2rem;
  color: white;
`,H2=h.span`
  background: linear-gradient(135deg, #ffd89b 0%, #ffffff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,qj=h.span`
  color: #ffd89b;
`,Vj=h.p`
  font-size: var(--text-lg);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 3rem;
  max-width: 50rem;
`,Xj=h.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 4rem;
  
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
`,Wj=h.div`
  a {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 15px 40px rgba(102, 126, 234, 0.6);
    }
  }
`;h.div`
  a {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.3);
    
    &:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-2px);
    }
  }
`;h.div`
  opacity: 0.9;
`;h.p`
  font-size: var(--text-sm);
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1rem;
`;h.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 640px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;h.div`
  font-size: var(--text-sm);
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
  opacity: 0.8;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 1;
  }
`;const Kj=h.div`
  animation: ${vy} 0.8s ease-out 0.2s both;
  position: relative;
`,eL=h.div`
  position: relative;
  perspective: 1000px;
`,tL=h.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2);
  transform: rotateY(-5deg) rotateX(5deg);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: rotateY(0deg) rotateX(0deg);
  }
`,nL=h.div`
  background: #f8f9fa;
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid #e9ecef;
`,Ha=h.div`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  background: ${e=>e.color};
`,aL=h.div`
  font-weight: 600;
  color: #495057;
  margin-left: auto;
`,rL=h.div`
  height: 40rem;
  background: white;
`,iL=h.div`
  display: flex;
  height: 100%;
`,fL=h.div`
  width: 25rem;
  background: #f8f9fa;
  padding: 2rem 1rem;
  border-right: 1px solid #e9ecef;
`,hd=h.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.8rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: background 0.2s ease;
  background: ${e=>e.active?"#e3f2fd":"transparent"};
  
  span {
    font-size: var(--text-sm);
    font-weight: 500;
    color: #495057;
    flex: 1;
  }
  
  &:hover {
    background: #e9ecef;
  }
`,Rs=h.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: ${e=>e.color};
  flex-shrink: 0;
`,P2=h.div`
  background: #ff4757;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,oL=h.div`
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,F2=h.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`,q2=h(Rs)`
  width: 4rem;
  height: 4rem;
`,V2=h.div`
  flex: 1;
`,X2=h.div`
  font-weight: 600;
  color: #495057;
  font-size: var(--text-sm);
  margin-bottom: 0.3rem;
`,W2=h.div`
  color: #6c757d;
  font-size: var(--text-sm);
  line-height: 1.4;
`,sL=h.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  opacity: 0.7;
  font-size: var(--text-xs);
  color: #6c757d;
  
  ${Ha} {
    width: 0.6rem;
    height: 0.6rem;
    animation: ${My} 1.5s infinite;
    
    &:nth-child(2) {
      animation-delay: 0.2s;
    }
    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`,md=h.div`
  position: absolute;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 1.2rem;
  padding: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 20rem;
  animation: ${xy} 3s ease-in-out infinite;
  animation-delay: ${e=>e.delay};
  
  &:nth-child(2) {
    top: 10%;
    right: -5rem;
  }
  
  &:nth-child(3) {
    bottom: 40%;
    right: -8rem;
  }
  
  &:nth-child(4) {
    bottom: 10%;
    right: -3rem;
  }
  
  @media (max-width: 1024px) {
    display: none;
  }
`,gd=h.div`
  font-size: 2.4rem;
`,pd=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  
  strong {
    font-weight: 600;
    color: #495057;
    font-size: var(--text-sm);
  }
  
  span {
    font-size: var(--text-xs);
    color: #6c757d;
  }
`,lL=h.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`,yd=h.div`
  position: absolute;
  width: ${e=>e.size};
  height: ${e=>e.size};
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  top: ${e=>e.top};
  bottom: ${e=>e.bottom};
  left: ${e=>e.left};
  right: ${e=>e.right};
  animation: ${xy} 6s ease-in-out infinite;
  
  &:nth-child(2) {
    animation-delay: -2s;
  }
  
  &:nth-child(3) {
    animation-delay: -4s;
  }
`;h.section`
  /* width: 100%; */
  margin: 3rem;
  margin-top: 8rem;
  height: 65rem;
  background-color: #7615f567;
  border-radius: 10rem;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 3rem;
  /* gap: 3rem; */
  position: relative;
`;h.div`
  /* grid-column: span 3 / span 3; */
  width: 100%;
  height: 100%;
  border-radius: 8rem;
  overflow: hidden;
  background-color: #492f89;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;h.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: 3rem;
  h1 {
    font-size: var(--text-giant);
    width: 90%;
    text-align: center;
    margin: 0 auto;
  }
  p {
    font-size: var(--text-xl);
    width: 80%;
    text-align: center;
    margin: 0 auto;
    line-height: 1.4;
  }
`;const jy=Gt`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,cL=Gt`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,uL=Gt`
  0%, 100% {
    box-shadow: 0 0 20px rgba(102, 126, 234, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(102, 126, 234, 0.6);
  }
`,dL=()=>{const e=[{icon:"💬",title:"Real-time Messaging",description:"Lightning-fast messaging with typing indicators, read receipts, and instant delivery across all devices.",stats:"99.9% uptime",color:"#667eea"},{icon:"🤖",title:"AI-Powered Assistant",description:"Smart suggestions, automated summaries, and intelligent task management to boost your team's productivity.",stats:"40% faster workflows",color:"#764ba2"},{icon:"🔒",title:"Enterprise Security",description:"End-to-end encryption, SSO integration, and compliance with GDPR, HIPAA, and SOC 2 standards.",stats:"Bank-level security",color:"#f093fb"},{icon:"📊",title:"Advanced Analytics",description:"Deep insights into team performance, communication patterns, and productivity metrics.",stats:"Real-time insights",color:"#f5576c"},{icon:"🔗",title:"Seamless Integrations",description:"Connect with 200+ tools including Slack, Microsoft Teams, Google Workspace, and custom APIs.",stats:"200+ integrations",color:"#4facfe"},{icon:"📱",title:"Cross-Platform",description:"Native apps for iOS, Android, Windows, macOS, and web. Your conversations sync everywhere.",stats:"All platforms",color:"#43e97b"}];return s.jsx(hL,{id:"features",children:s.jsxs(mL,{children:[s.jsxs(gL,{children:[s.jsx(pL,{children:"Features"}),s.jsxs(yL,{children:["Everything you need for",s.jsx(bL,{children:" modern communication"})]}),s.jsx(wL,{children:"Discover the powerful features that make Mendam the preferred choice for teams who demand excellence in their communication tools."})]}),s.jsx(vL,{children:e.map((a,i)=>s.jsxs(xL,{index:i,color:a.color,children:[s.jsxs(ML,{children:[s.jsx(jL,{children:a.icon}),s.jsx(LL,{children:a.stats})]}),s.jsxs(SL,{children:[s.jsx(CL,{children:a.title}),s.jsx(kL,{children:a.description})]}),s.jsx(Ly,{color:a.color})]},i))}),s.jsx(EL,{id:"cta",children:s.jsxs(TL,{children:[s.jsx(NL,{children:"Ready to transform your team communication?"}),s.jsx(IL,{children:"Join thousands of teams already using Mendam to collaborate more effectively."}),s.jsx(DL,{children:s.jsx(AL,{children:s.jsx(De,{to:"/auth/register",children:"Get Started"})})})]})})]})})},hL=h.section`
  /* padding: 12rem 0; */
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, #e2e8f0 50%, transparent 100%);
  }
`,mL=h.div`
  max-width: 140rem;
  margin: 0 auto;
  padding: 0 3rem;
  
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`,gL=h.div`
  text-align: center;
  margin-bottom: 8rem;
  animation: ${jy} 0.8s ease-out;
`,pL=h.div`
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 5rem;
  font-size: var(--text-sm);
  font-weight: 600;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,yL=h.h2`
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 700;
  line-height: 1.2;
  color: #1a202c;
  margin-bottom: 2rem;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
`,bL=h.span`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,wL=h.p`
  font-size: var(--text-lg);
  color: #4a5568;
  line-height: 1.6;
  max-width: 60rem;
  margin: 0 auto;
`,vL=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  gap: 3rem;
  margin-bottom: 8rem;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,Ly=h.div`
  position: absolute;
  top: -50%;
  left: -50%;
  right: -50%;
  bottom: -50%;
  background: radial-gradient(circle, ${e=>e.color}20 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
`,xL=h.div`
  background: white;
  border-radius: 2rem;
  padding: 3rem;
  position: relative;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  animation: ${e=>e.index%2===0?jy:cL} 0.8s ease-out;
  animation-delay: ${e=>e.index*.1}s;
  animation-fill-mode: both;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
    border-color: ${e=>e.color};
    
    ${Ly} {
      opacity: 0.6;
      animation: ${uL} 2s infinite;
    }
  }
`,ML=h.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`,jL=h.div`
  font-size: 4rem;
  width: 8rem;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
  border-radius: 1.5rem;
  border: 1px solid #e2e8f0;
`,LL=h.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.5rem 1.2rem;
  border-radius: 5rem;
  font-size: var(--text-xs);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,SL=h.div`
  position: relative;
  z-index: 2;
`,CL=h.h3`
  font-size: var(--text-xl);
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 1rem;
`,kL=h.p`
  font-size: var(--text-md);
  color: #4a5568;
  line-height: 1.6;
`,EL=h.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 3rem;
  padding: 6rem 4rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.3;
  }
  
  @media (max-width: 768px) {
    padding: 4rem 2rem;
    border-radius: 2rem;
  }
`,TL=h.div`
  position: relative;
  z-index: 2;
`,NL=h.h3`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
  line-height: 1.2;
`,IL=h.p`
  font-size: var(--text-lg);
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 3rem;
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`,DL=h.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`,AL=h.div`
  a {
    display: inline-block;
    background: white;
    color: #667eea;
    padding: 1.4rem 3rem;
    border-radius: 3rem;
    font-weight: 600;
    font-size: var(--text-md);
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
      background: #f7fafc;
    }
  }
`;h.div`
  a {
    display: inline-block;
    background: transparent;
    color: white;
    padding: 1.4rem 3rem;
    border-radius: 3rem;
    font-weight: 600;
    font-size: var(--text-md);
    text-decoration: none;
    border: 2px solid rgba(255, 255, 255, 0.3);
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: white;
      transform: translateY(-2px);
    }
  }
`;const zL=Gt`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,RL=Gt`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`,OL=()=>{const e=[{number:"10,000+",label:"Active Teams",description:"Trust Mendam for daily communication"},{number:"99.9%",label:"Uptime",description:"Reliable service you can count on"},{number:"50M+",label:"Messages",description:"Sent securely every month"},{number:"150+",label:"Countries",description:"Teams worldwide using Mendam"}],a=[{quote:"Mendam transformed how our distributed team communicates. The AI features save us hours every week.",author:"Sarah Chen",role:"Engineering Manager",company:"TechFlow Inc",avatar:"👩‍💻",rating:5},{quote:"Best team chat app we've ever used. The security features give us peace of mind with sensitive data.",author:"Michael Rodriguez",role:"CTO",company:"SecureBank",avatar:"👨‍💼",rating:5},{quote:"The analytics dashboard helps us understand team dynamics better. Highly recommend for growing teams.",author:"Emma Thompson",role:"Head of Operations",company:"GrowthCo",avatar:"👩‍🎯",rating:5}];return s.jsx(BL,{id:"trust",children:s.jsxs(UL,{children:[s.jsxs(_L,{children:[s.jsxs(K2,{children:[s.jsx(ep,{children:"Trusted Globally"}),s.jsx(tp,{children:"Numbers that speak for themselves"}),s.jsx(np,{children:"Join thousands of teams who have already discovered the power of seamless communication."})]}),s.jsx(YL,{children:e.map((i,f)=>s.jsxs(QL,{index:f,children:[s.jsx(GL,{children:i.number}),s.jsx($L,{children:i.label}),s.jsx(ZL,{children:i.description}),s.jsx(JL,{children:"📈"})]},f))})]}),s.jsxs(HL,{id:"testimonials",children:[s.jsxs(K2,{children:[s.jsx(ep,{children:"Customer Stories"}),s.jsx(tp,{children:"What our customers are saying"}),s.jsx(np,{children:"Don't just take our word for it. Here's what real teams say about their Mendam experience."})]}),s.jsx(PL,{children:a.map((i,f)=>s.jsxs(FL,{index:f,children:[s.jsxs(qL,{children:[s.jsx(VL,{children:'"'}),s.jsx(XL,{children:i.quote}),s.jsx(WL,{children:[...Array(i.rating)].map((c,d)=>s.jsx(KL,{children:"⭐"},d))})]}),s.jsxs(e5,{children:[s.jsx(t5,{children:i.avatar}),s.jsxs(n5,{children:[s.jsx(a5,{children:i.author}),s.jsx(r5,{children:i.role}),s.jsx(i5,{children:i.company})]})]})]},f))})]})]})})},BL=h.section`
  /* padding: 10rem 0; */
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%);
  position: relative;
`,UL=h.div`
  max-width: 140rem;
  margin: 0 auto;
  padding: 0 3rem;
  
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`,_L=h.div`
  margin-bottom: 10rem;
`,K2=h.div`
  text-align: center;
  margin-bottom: 6rem;
`,ep=h.div`
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 5rem;
  font-size: var(--text-sm);
  font-weight: 600;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,tp=h.h2`
  font-size: clamp(3rem, 5vw, 4.5rem);
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 2rem;
  line-height: 1.2;
`,np=h.p`
  font-size: var(--text-lg);
  color: #4a5568;
  line-height: 1.6;
  max-width: 60rem;
  margin: 0 auto;
`,YL=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 3rem;
  
  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,QL=h.div`
  background: white;
  border-radius: 2rem;
  padding: 3rem 2rem;
  text-align: center;
  position: relative;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  animation: ${zL} 0.8s ease-out;
  animation-delay: ${e=>e.index*.1}s;
  animation-fill-mode: both;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 60px rgba(102, 126, 234, 0.1);
    border-color: #667eea;
  }
`,GL=h.div`
  font-size: clamp(3rem, 5vw, 4rem);
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  line-height: 1;
`,$L=h.div`
  font-size: var(--text-lg);
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
`,ZL=h.div`
  font-size: var(--text-sm);
  color: #718096;
  line-height: 1.5;
`,JL=h.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-size: 2rem;
  opacity: 0.3;
`,HL=h.div`
  margin-bottom: 8rem;
`,PL=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  gap: 3rem;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,FL=h.div`
  background: white;
  border-radius: 2rem;
  padding: 3rem;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  animation: ${RL} 3s ease-in-out infinite;
  animation-delay: ${e=>e.index*.5}s;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.1);
    border-color: #667eea;
  }
`,qL=h.div`
  margin-bottom: 2rem;
`,VL=h.div`
  font-size: 4rem;
  color: #667eea;
  line-height: 1;
  margin-bottom: 1rem;
  font-family: serif;
`,XL=h.p`
  font-size: var(--text-lg);
  line-height: 1.6;
  color: #2d3748;
  margin-bottom: 1.5rem;
  font-style: italic;
`,WL=h.div`
  display: flex;
  gap: 0.2rem;
  margin-bottom: 1rem;
`,KL=h.span`
  font-size: 1.4rem;
`,e5=h.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`,t5=h.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  flex-shrink: 0;
`,n5=h.div`
  flex: 1;
`,a5=h.div`
  font-size: var(--text-md);
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.2rem;
`,r5=h.div`
  font-size: var(--text-sm);
  color: #4a5568;
  margin-bottom: 0.2rem;
`,i5=h.div`
  font-size: var(--text-sm);
  color: #718096;
`;h.div`
  text-align: center;
`;h.div`
  margin-bottom: 4rem;
`;h.h3`
  font-size: var(--text-xl);
  color: #4a5568;
  font-weight: 500;
`;h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 2rem;
  border-radius: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    background: #f7fafc;
  }
`;h.div`
  font-size: var(--text-lg);
  font-weight: 600;
  color: #2d3748;
`;h.div`
  font-size: var(--text-sm);
  color: #718096;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;const f5=h.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 8rem;

`,o5=()=>s.jsxs(f5,{children:[s.jsx(FM,{}),s.jsx(Zj,{}),s.jsx(dL,{}),s.jsx(OL,{}),s.jsx(dj,{})]}),s5=h.rect`
  fill: #2492c2;
`,l5=h.path`
  fill: #fbfbfb;
`,c5=()=>s.jsxs("svg",{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",width:43,height:43,children:[s.jsx(s5,{width:"100",height:"100",rx:"8"}),s.jsx(l5,{d:"M42.59,82.84a17.76,17.76,0,0,1-1.82-.37c-12.57-4-21.06-12.15-24.54-25A34.7,34.7,0,0,1,35.07,17.34a1.74,1.74,0,0,1,.91-.17c.49.09.57.69.17,1.22a15.42,15.42,0,0,0-2.64,5.26,11.3,11.3,0,0,0,.74,8,45.6,45.6,0,0,0,8.21,11.56,39.26,39.26,0,0,1,5.94,7.47c.58,1,1.05,2.16,1.55,3.19.72-1.33,1.41-2.71,2.19-4a43.15,43.15,0,0,1,5.5-6.78c3.06-3.43,6-6.95,8-11.18a11.69,11.69,0,0,0-.41-11.47A2.48,2.48,0,0,1,65,20a1.44,1.44,0,0,1,.31-1.71A1.27,1.27,0,0,1,67,18.25a63.72,63.72,0,0,1,5.64,3.93A33.31,33.31,0,0,1,84.22,41.82c2.12,11.24-.52,21.32-8,30A33.8,33.8,0,0,1,60,82.15a1.84,1.84,0,0,1-.64.17c-.18,0-.47-.09-.53-.23s.05-.4.17-.55a1.88,1.88,0,0,1,.48-.34A41.12,41.12,0,0,0,72.25,68.34,26.46,26.46,0,0,0,75.83,52c-.36-4.17-1.8-8-3.25-11.88l-.35-.91c-.9,1.59-1.71,3.15-2.64,4.63A64.74,64.74,0,0,1,61.26,54c-2.91,3-5.92,6-8,9.72-1,1.77-1.72,3.65-2.6,5.47a1.17,1.17,0,0,1-.68.62c-.18,0-.55-.31-.63-.56-1.7-4.9-4.74-8.92-8.24-12.63-3.1-3.3-6.37-6.45-8.91-10.22-1.44-2.15-2.73-4.41-4.08-6.61l-.31-.47c-.19.35-.34.61-.46.89A37.56,37.56,0,0,0,24.05,53.9a27,27,0,0,0,5.53,17.23A44.24,44.24,0,0,0,41.72,82l1,.63Z"})]}),u5=""+new URL("wardd-logo-DYqvtVQR.jpg",import.meta.url).href,d5=""+new URL("dxc-logo-DJHAVO8h.jpg",import.meta.url).href;function h5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{fillRule:"evenodd",d:"M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",clipRule:"evenodd"}),g.createElement("path",{d:"M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z"}))}const m5=g.forwardRef(h5);function g5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{fillRule:"evenodd",d:"M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z",clipRule:"evenodd"}))}const p5=g.forwardRef(g5);function y5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{fillRule:"evenodd",d:"M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z",clipRule:"evenodd"}))}const b5=g.forwardRef(y5);function w5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{fillRule:"evenodd",d:"M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z",clipRule:"evenodd"}))}const Sy=g.forwardRef(w5);function v5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{d:"M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"}),g.createElement("path",{d:"M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"}))}const x5=g.forwardRef(v5);function M5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{d:"M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z"}))}const j5=g.forwardRef(M5);function L5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{fillRule:"evenodd",d:"M11.097 1.515a.75.75 0 0 1 .589.882L10.666 7.5h4.47l1.079-5.397a.75.75 0 1 1 1.47.294L16.665 7.5h3.585a.75.75 0 0 1 0 1.5h-3.885l-1.2 6h3.585a.75.75 0 0 1 0 1.5h-3.885l-1.08 5.397a.75.75 0 1 1-1.47-.294l1.02-5.103h-4.47l-1.08 5.397a.75.75 0 1 1-1.47-.294l1.02-5.103H3.75a.75.75 0 0 1 0-1.5h3.885l1.2-6H5.25a.75.75 0 0 1 0-1.5h3.885l1.08-5.397a.75.75 0 0 1 .882-.588ZM10.365 9l-1.2 6h4.47l1.2-6h-4.47Z",clipRule:"evenodd"}))}const Ml=g.forwardRef(L5);function S5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{fillRule:"evenodd",d:"M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z",clipRule:"evenodd"}))}const C5=g.forwardRef(S5);function k5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{fillRule:"evenodd",d:"M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z",clipRule:"evenodd"}))}const Q0=g.forwardRef(k5);function E5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{fillRule:"evenodd",d:"m6.72 5.66 11.62 11.62A8.25 8.25 0 0 0 6.72 5.66Zm10.56 12.68L5.66 6.72a8.25 8.25 0 0 0 11.62 11.62ZM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788Z",clipRule:"evenodd"}))}const T5=g.forwardRef(E5);function N5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{d:"M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z"}))}const Cy=g.forwardRef(N5);function I5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{fillRule:"evenodd",d:"M18.97 3.659a2.25 2.25 0 0 0-3.182 0l-10.94 10.94a3.75 3.75 0 1 0 5.304 5.303l7.693-7.693a.75.75 0 0 1 1.06 1.06l-7.693 7.693a5.25 5.25 0 1 1-7.424-7.424l10.939-10.94a3.75 3.75 0 1 1 5.303 5.304L9.097 18.835l-.008.008-.007.007-.002.002-.003.002A2.25 2.25 0 0 1 5.91 15.66l7.81-7.81a.75.75 0 0 1 1.061 1.06l-7.81 7.81a.75.75 0 0 0 1.054 1.068L18.97 6.84a2.25 2.25 0 0 0 0-3.182Z",clipRule:"evenodd"}))}const ky=g.forwardRef(I5);function D5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{fillRule:"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z",clipRule:"evenodd"}))}const A5=g.forwardRef(D5);function z5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{fillRule:"evenodd",d:"M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z",clipRule:"evenodd"}))}const R5=g.forwardRef(z5);function O5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{fillRule:"evenodd",d:"M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z",clipRule:"evenodd"}),g.createElement("path",{d:"M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z"}))}const Ey=g.forwardRef(O5);function B5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{d:"M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z"}))}const G0=g.forwardRef(B5);function U5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{fillRule:"evenodd",d:"M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z",clipRule:"evenodd"}))}const _5=g.forwardRef(U5);function Y5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{fillRule:"evenodd",d:"M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"}))}const $0=g.forwardRef(Y5);function Q5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"}))}const Ty=g.forwardRef(Q5);function G5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"}))}const Ny=g.forwardRef(G5);function $5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"}))}const Z5=g.forwardRef($5);function J5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"}))}const H5=g.forwardRef(J5);function P5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"}),g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"}))}const Z0=g.forwardRef(P5);function F5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"}))}const ap=g.forwardRef(F5);function q5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 12.75 6 6 9-13.5"}))}const V5=g.forwardRef(q5);function X5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m8.25 4.5 7.5 7.5-7.5 7.5"}))}const W5=g.forwardRef(X5);function K5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"}),g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}))}const Tf=g.forwardRef(K5);function e9({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"}),g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}))}const rp=g.forwardRef(e9);function t9({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"}))}const Iy=g.forwardRef(t9);function n9({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"}))}const jl=g.forwardRef(n9);function a9({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"}))}const r9=g.forwardRef(a9);function i9({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"}))}const y0=g.forwardRef(i9);function f9({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"}),g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}))}const b0=g.forwardRef(f9);function o9({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"}))}const Dy=g.forwardRef(o9);function s9({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"}))}const l9=g.forwardRef(s9);function c9({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"}))}const u9=g.forwardRef(c9);function d9({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"}))}const h9=g.forwardRef(d9);function m9({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"}))}const g9=g.forwardRef(m9);function p9({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"}))}const y9=g.forwardRef(p9);function b9({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"}))}const w9=g.forwardRef(b9);function v9({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"}))}const x9=g.forwardRef(v9);function M9({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"}))}const Ay=g.forwardRef(M9);function j9({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"}))}const ip=g.forwardRef(j9);function L9({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"}))}const S9=g.forwardRef(L9);function C9({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"}))}const k9=g.forwardRef(C9);function E9({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"}))}const zy=g.forwardRef(E9);function T9({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"}))}const Ry=g.forwardRef(T9);function N9({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M22 10.5h-6m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z"}))}const bd=g.forwardRef(N9);function I9({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"}))}const D9=g.forwardRef(I9);function A9({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"}))}const Oy=g.forwardRef(A9);function z9({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"}))}const R9=g.forwardRef(z9);function O9({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"}))}const Nf=g.forwardRef(O9),Gf=({children:e,title:a,isOpen:i,onClose:f})=>{g.useEffect(()=>{if(!i)return;const d=m=>{m.key==="Escape"&&f()};return document.body.style.overflow="hidden",document.addEventListener("keydown",d),()=>{document.body.style.overflow="auto",document.removeEventListener("keydown",d)}},[i,f]);const c=g.useCallback(d=>{d.target===d.currentTarget&&f()},[f]);return i?s.jsx(B9,{onClick:c,children:s.jsxs(U9,{onClick:d=>d.stopPropagation(),children:[s.jsxs(_9,{children:[s.jsx(Y9,{children:a}),s.jsx(G9,{onClick:f,"aria-label":"Close modal",children:s.jsx(Nf,{className:"size-6"})})]}),s.jsx(Q9,{children:e})]})}):null},B9=h.div`
  position: fixed;
  inset: 0;
  background-color: #00000039;
  z-index: 10034567890987650;
  padding: 1.5rem;
`,U9=h.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 60rem;
  max-height: 70vh;
  background-color: ${({theme:e})=>e.background.thirdly};
  border-radius: 2rem;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.border.primary};
   z-index: 10034567890987650;
`,_9=h.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  border-bottom: 1px solid var(--b-c);
  background-color: ${({theme:e})=>e.background.thirdly};
  flex-shrink: 0;
  @media (max-width: 700px) {
    padding: 1.5rem;
  }
  /* box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1); */
`,Y9=h.h2`
  font-size: var(--text-xl);
  color: ${({theme:e})=>e.text.secondary};
  font-weight: 500;
  margin: 0;
`,Q9=h.div`
  flex: 1;
  overflow-y: auto;
  margin: 2rem;
  margin-top: 0;
  @media (max-width: 700px) {
    margin: 1.5rem;
    margin-top: 0;
  }
`,G9=h.button`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 8px;
  background: ${({theme:e})=>e.background.secondary};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #6b7280;
  transition: all 0.2s ease;
  flex-shrink: 0;

  outline: none;

  &:hover {
    background: ${({theme:e})=>e.background.primary};
    color: #9ca3af;
  }

  &:focus {
    outline: 2px solid var(--primary-color, #7515f5);
    outline-offset: 2px;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`,wt=({variant:e="primary",type:a="button",onClick:i,disabled:f=!1,title:c,link:d,target:m="self",full:y})=>{const b=c,x=s.jsx($9,{disabled:f,onClick:i,type:a,variant:e,full:y,children:b});return d?s.jsx("a",{target:`_${m}`,href:d,children:x}):x},fp={primary:{default:"var(--blue)",hover:"var(--dark-blue)"},danger:{default:"#e83333",hover:"#c22626"},cancel:{default:"#1e1e20",hover:"#3c3c41"}},$9=h.button`
width: ${({full:e})=>e?"100%":"max-width"};
  min-height: 4rem;
  max-height: 4rem;
  border-radius: 0.8rem;
  border: none;
  padding: 0 2rem;
  font-size: 1.5rem;
  font-weight: 500;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({disabled:e})=>e?.6:1};
  transition: opacity 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({variant:e="primary"})=>fp[e].default};
  color: var(--light);
  border: 1px solid
    ${({variant:e})=>e==="cancel"?({theme:a})=>a.border.secondary:"transparent"};

  &:hover:not(:disabled) {
    background-color: ${({variant:e="primary"})=>fp[e].hover};
  }
`,Z9=({title:e,onClose:a,isOpen:i})=>s.jsx(s.Fragment,{children:s.jsx(Gf,{title:e,onClose:a,isOpen:i,children:s.jsxs(J9,{children:[s.jsxs(H9,{htmlFor:"upload-Workspace-image",children:[s.jsx(By,{children:s.jsx(Z0,{})}),s.jsx(P9,{children:s.jsx("span",{children:"Add Workspace image (optional)"})}),s.jsx("input",{type:"file",id:"upload-Workspace-image",name:"upload-Workspace-image"})]}),s.jsxs(F9,{children:[s.jsx(q9,{htmlFor:"Workspace-name",children:"Provide Workspace name *"}),s.jsx(V9,{placeholder:"Workspace name",type:"text",name:"Workspace-name",id:"Workspace-name"})]}),s.jsx(X9,{children:s.jsxs(W9,{children:[s.jsx(wt,{onClick:a,variant:"cancel",type:"button",title:"Cancel"}),s.jsx(wt,{variant:"primary",type:"submit",title:"Create"})]})})]})})}),J9=h.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,By=h.div`
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  background-color: ${({theme:e})=>e.background.primary};
  border: 1.5px solid ${({theme:e})=>e.border.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.text.placeholder};
  svg {
    width: 2.4rem;
  }
`,H9=h.label`
  width: max-content;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  cursor: pointer;
  input {
    display: none;
  }
  &:hover ${By} {
    background-color: ${({theme:e})=>e.background.secondary};
  }
`,P9=h.div`
  span {
    line-height: 1;
    font-size: var(--text-md);
    color: ${({theme:e})=>e.text.secondary};
  }
`,F9=h.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,q9=h.label`
  font-size: var(--text-md);
  line-height: 1;
  color: ${({theme:e})=>e.text.secondary};
`,V9=h.input`
  padding: 0 1.5rem 0 1.5rem;
  width: 100%;
  height: 4.5rem;
  border-radius: 0.8rem;
  background-color: ${({theme:e})=>e.background.secondary};
  border: 1px solid ${({theme:e})=>e.border.secondary};
  outline: none;
  color: ${({theme:e})=>e.text.primary};
  &::placeholder {
    color: ${({theme:e})=>e.text.placeholder};
  }
`,X9=h.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
`,W9=h.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`,Uy=({})=>{const e=ol(),[a,i]=g.useState(!1),f=()=>{i(!1)};return s.jsx(s.Fragment,{children:s.jsxs(K9,{children:[s.jsxs(eS,{children:[s.jsx(tS,{children:s.jsx(De,{to:"/app/@me",children:s.jsx(c5,{})})}),s.jsx(op,{}),s.jsxs(nS,{children:[s.jsx(De,{to:"/app/@me",children:s.jsx(wd,{selected:e.pathname==="/app/@me",children:s.jsx(hs,{children:s.jsx(b5,{})})})}),s.jsx(De,{to:"/app/friends",children:s.jsx(wd,{selected:e.pathname==="/app/friends",children:s.jsx(hs,{children:s.jsx(G0,{})})})}),s.jsx(De,{to:"/app/groups",children:s.jsx(wd,{selected:e.pathname==="/app/groups",children:s.jsx(hs,{children:s.jsx(Ey,{})})})})]}),s.jsx(op,{}),s.jsxs(rS,{children:[s.jsxs(aS,{children:[s.jsx(De,{to:"/app/channel/345678",children:s.jsx(vd,{children:s.jsx(xd,{children:s.jsx("img",{src:u5,alt:"wardd logo"})})})}),s.jsx(De,{to:"/app/channel/345678",children:s.jsx(vd,{children:s.jsx(xd,{children:s.jsx("img",{src:"https://docs.imperium.plus/files/media-GRGQG-GFRFXRXG-PQQLL-WGRWM-GFRFGQQPLL-LLPXR-GFRFGQPXQWWM-X-QMGGQFRMWG",alt:"wardd logo"})})})}),s.jsx(De,{to:"/app/channel/345678",children:s.jsx(vd,{children:s.jsx(xd,{children:s.jsx("img",{src:d5,alt:"dxc logo"})})})})]}),s.jsx(iS,{onClick:()=>i(!0),children:s.jsx(hs,{children:s.jsx(A5,{})})})]})]}),s.jsx(Z9,{title:"Create new workspace",onClose:f,isOpen:a})]})})},K9=h.aside`
  height: 100%;
  background-color: ${({theme:e})=>e.background.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 2.5rem 1.5rem 0;
  width: max-content;
  /* overflow-y: auto;
  overflow-x: hidden; */
  @media (max-width: 1000px) {
    padding: 1.5rem 1rem 0;
  }
  @media (max-width: 700px) {
    padding: 2rem 1.5rem;
  }
  ::-webkit-scrollbar {
    width: 0px;
  }

  ::-webkit-scrollbar-track {
    background: ${({theme:e})=>e.background.primary};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.background.secondary};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({theme:e})=>e.background.primary};
  }
`,eS=h.aside`
  height: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.8rem;
  @media (max-width: 1000px) {
    gap: 1.5rem;
  }
`,tS=h.div`
  width: max-content;
  svg {
    border-radius: 8px;
  }
`,op=h.div`
  width: 100%;
  height: 1.5px;
  background-color: ${({theme:e})=>e.border.primary};
  @media (max-width: 1000px) {
    height: 0.5px;
  }
`,nS=h.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.8rem;
`,wd=h.div`
  width: 4.3rem;
  height: 4.3rem;
  border-radius: 0.8rem;
  background-color: ${({theme:e})=>e.background.thirdly};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({theme:e})=>e.text.primary};
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -1.5rem;
    width: 0.4rem;
    height: ${({selected:e})=>e?"100%":"0.6rem"};
    background-color: ${({selected:e})=>e?({theme:a})=>a.text.secondary:({theme:a})=>a.background.thirdly};
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    transition: all 0.3s ease;
      @media (max-width: 1000px) {
    left: -1.1rem;
  }
      @media (max-width: 700px) {
    left: -1.5rem;
  }
  }
  &:hover::after {
    height: 100%;
    background-color: ${({theme:e})=>e.text.secondary};
  }
  &:hover {
    /* background-color: var(--blue); */
    /* color: var(--light); */
  }
`,hs=h.a`
  width: 2rem;
  height: 2rem;
`,aS=h.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.8rem;
`,rS=h.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.8rem;
`,iS=h.div`
  width: 4.3rem;
  height: 4.3rem;
  border-radius: 0.8rem;
  background-color: ${({theme:e})=>e.background.thirdly};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.text.primary};
  cursor: pointer;
  &:hover {
    background-color: var(--blue);
    color: var(--light);
  }
`,vd=h.div`
  width: 4.3rem;
  height: 4.3rem;
  cursor: pointer;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -1.5rem;
    width: 4px;
    height: 0.6rem;
    background-color: ${({theme:e})=>e.background.thirdly};
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    transition: all 0.3s ease;
     @media (max-width: 1000px) {
    left: -1.1rem;
  }
      @media (max-width: 700px) {
    left: -1.5rem;
  }
  }
  &:hover::after {
    height: 100%;
    background-color: ${({theme:e})=>e.text.secondary};
  }
`,xd=h.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 0.8rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,vt=({userName:e="Ali Yara",image:a,link:i=!1,status:f="offline",showStatus:c=!1,showStatusCircle:d=!1,showUserName:m=!1,size:y=40,isGroup:b=!1,bg:x})=>{const v=s.jsxs(fS,{children:[s.jsx(oS,{bg:x,size:y,children:a?s.jsx("img",{src:a,alt:`${e} avatar`,loading:"lazy",width:y,height:y}):b?s.jsx(Ey,{}):s.jsx(_5,{})}),d&&s.jsx(sS,{children:s.jsxs(cS,{status:f,children:[f==="idle"&&s.jsx(uS,{}),f==="offline"&&s.jsx(dS,{})]})})]});return i?s.jsxs(sp,{children:[s.jsx(De,{to:"#",children:v}),m&&s.jsxs(lp,{children:[s.jsx("h5",{children:e}),c&&s.jsx("span",{children:f})]})]}):s.jsxs(sp,{children:[v,m&&s.jsxs(lp,{children:[s.jsx("h5",{children:e}),c&&s.jsx("span",{children:f})]})]})},sp=h.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  /* z-index: 1; */
  user-select: none;
`,fS=h.div`
  position: relative;
  width: max-content;
`,oS=h.div`
  overflow: hidden;
  border-radius: 50%;
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  background-color: ${({bg:e})=>e?({theme:a})=>a.background.secondary:({theme:a})=>a.background.thirdly};
  display: flex;
  align-items: center;
  justify-content: center;
  /* box-shadow: var(--shadow-sm); */

  svg {
    width: ${({size:e})=>e*.5}px;
    color: ${({theme:e})=>e.text.placeholder};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 10%;
  }
`,sS=h.div`
  position: absolute;
  right: 0;
  bottom: -3px;
  width: 1.6rem;
  height: 1.6rem;
  background-color: ${({theme:e})=>e.background.secondary};
  border-radius: 50%;
`,lS=e=>({idle:"var(--info-500)",online:"var(--success-500)",offline:"var(--primary)"})[e],cS=h.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-45%, -46%);
  width: 1rem;
  height: 1rem;
  background-color: ${({status:e})=>lS(e)};
  border-radius: 50%;
`,uS=h.div`
  position: absolute;
  top: -5%;
  left: -3%;
  width: 0.8rem;
  height: 0.8rem;
  background-color: ${({theme:e})=>e.background.secondary};
  border-radius: 50%;
`,dS=h.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0.5rem;
  height: 0.5rem;
  background-color: ${({theme:e})=>e.text.thirdly};
  border-radius: 50%;
`,lp=h.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  h5 {
    font-size: var(--text-md);
    color: ${({theme:e})=>e.text.primary};
    font-weight: 500;
    margin: 0;
    line-height: 1;
  }

  span {
    font-size: var(--text-sm);
    color: ${({theme:e})=>e.text.secondary};
    line-height: 1;

  }
`;function hS({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{fillRule:"evenodd",d:"M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z",clipRule:"evenodd"}))}const mS=g.forwardRef(hS);function gS({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{fillRule:"evenodd",d:"M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"}))}const cp=g.forwardRef(gS);function pS({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{fillRule:"evenodd",d:"M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z",clipRule:"evenodd"}))}const yS=g.forwardRef(pS);function bS({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{d:"M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z"}))}const wS=g.forwardRef(bS),vS=({isOpen:e,shouldAnimate:a,user:i,onLogout:f,onClose:c})=>{const d=g.useRef(null);g.useEffect(()=>{const b=x=>{d.current&&!d.current.contains(x.target)&&c()};return e&&document.addEventListener("mousedown",b),()=>{document.removeEventListener("mousedown",b)}},[e,c]);const m=b=>{switch(b){case"online":return"#43a25a";case"idle":return"#f2c100";case"offline":default:return"#6b7280"}},y=b=>{switch(b){case"online":return"online";case"idle":return"idle";case"offline":default:return"offline"}};return s.jsx(s.Fragment,{children:s.jsxs(xS,{ref:d,isOpen:e,shouldAnimate:a,children:[s.jsx(MS,{children:s.jsxs(jS,{children:[s.jsx(LS,{children:s.jsx(SS,{children:i.avatar?s.jsx("img",{src:i.avatar,alt:i.fullName}):s.jsx(CS,{children:i.fullName.charAt(0).toUpperCase()})})}),s.jsxs(kS,{children:[s.jsx("h4",{children:i.fullName}),s.jsxs("span",{children:["@",i.username]})]})]})}),s.jsx(ES,{children:s.jsxs(TS,{children:[s.jsxs(Md,{as:De,to:"/app/settings/profile",children:[s.jsx(jd,{children:s.jsx(Os,{children:"Edit profile"})}),s.jsx(dp,{children:s.jsx(hp,{children:s.jsx(cp,{})})})]}),s.jsx(up,{}),s.jsxs(Md,{children:[s.jsxs(jd,{children:[s.jsx(_y,{children:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12px",height:"12px",viewBox:"0 0 24 24",fill:"none",children:s.jsx("circle",{cx:"12",cy:"12",r:"10",fill:m(i.status)})})}),s.jsx(Os,{children:y(i.status)})]}),s.jsx(dp,{children:s.jsx(hp,{children:s.jsx(cp,{})})})]}),s.jsx(up,{}),s.jsx(Md,{onClick:f,isLogout:!0,children:s.jsx(jd,{children:s.jsx(Os,{children:"Sign out"})})})]})})]})})},xS=h.div`
  position: absolute;
  left: 1.5rem;
  top: ${({isOpen:e})=>e?"-36rem":"31rem"};
  width: 25rem;
  border-radius: 8px;
  background-color: ${({theme:e})=>e.background.secondary};
  z-index: 456566;
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.border.primary};
  box-shadow: var(--shadow-sm);
  transition: ${({shouldAnimate:e})=>e?"top 0.3s ease":"none"};
`,MS=h.div`
  width: 100%;
  height: 8rem;
  background: var(--blue);
  position: relative;
  margin-bottom: 11rem;
`,jS=h.div`
  position: absolute;
  bottom: -9rem;
  left: 2rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;
`,LS=h.div`
  width: 9rem;
  height: 9rem;
  border-radius: 100%;
  background-color: ${({theme:e})=>e.background.secondary};
  padding: 0.8rem;
  position: relative;
`,SS=h.div`
  width: 100%;
  height: 100%;
  background-color: ${({theme:e})=>e.background.thirdly};
  border-radius: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 10% 10%;
  }
`,CS=h.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-xxl);
  font-weight: 600;
  color: ${({theme:e})=>e.text.primary};
  background: linear-gradient(135deg, var(--blue), #764ba2);
  color: white;
`,kS=h.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.4rem;
  h4 {
    font-size: var(--text-xl);
    line-height: 1;
    color: ${({theme:e})=>e.text.primary};
    font-weight: 500;
  }
  span {
    font-size: var(--text-sm);
    line-height: 1;
    color: ${({theme:e})=>e.text.thirdly};
  }
`,ES=h.div`
  width: 100%;
  padding: 1rem;
  user-select: none;
`,TS=h.div`
  width: 100%;
  padding: 0.7rem;
  border-radius: 0.6rem;
  background-color: ${({theme:e})=>e.background.thirdly};
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`,Md=h.div`
  padding: 0.8rem 1rem;
  border-radius: 0.4rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.4rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${({isLogout:e,theme:a})=>e?"#eedde3":a.background.secondary};
    
    ${({isLogout:e})=>e&&`
      ${Os} {
        color: #ff99a4;
      }
      ${_y} {
        color: #ff99a4;
      }
    `}
  }
`,Os=h.div`
  font-size: var(--text-md);
  color: ${({theme:e})=>e.text.thirdly};
  line-height: 1;
`,_y=h.div`
  color: ${({theme:e})=>e.text.thirdly};
  display: flex;
  align-items: center;
  height: 100%;
  padding-top: 1px;
  
  svg {
    width: 1.4rem;
    height: 1.4rem;
  }
`,up=h.div`
  width: 100%;
  height: 1px;
  background-color: ${({theme:e})=>e.border.secondary};
  opacity: 0.3;
`,jd=h.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,dp=h.div`
  width: max-content;
`,hp=h.div`
  svg {
    width: 1.6rem;
    color: ${({theme:e})=>e.text.placeholder};
  }
`,Sn=Object.create(null);Sn.open="0";Sn.close="1";Sn.ping="2";Sn.pong="3";Sn.message="4";Sn.upgrade="5";Sn.noop="6";const Bs=Object.create(null);Object.keys(Sn).forEach(e=>{Bs[Sn[e]]=e});const w0={type:"error",data:"parser error"},Yy=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Qy=typeof ArrayBuffer=="function",Gy=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e&&e.buffer instanceof ArrayBuffer,J0=({type:e,data:a},i,f)=>Yy&&a instanceof Blob?i?f(a):mp(a,f):Qy&&(a instanceof ArrayBuffer||Gy(a))?i?f(a):mp(new Blob([a]),f):f(Sn[e]+(a||"")),mp=(e,a)=>{const i=new FileReader;return i.onload=function(){const f=i.result.split(",")[1];a("b"+(f||""))},i.readAsDataURL(e)};function gp(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}let Ld;function NS(e,a){if(Yy&&e.data instanceof Blob)return e.data.arrayBuffer().then(gp).then(a);if(Qy&&(e.data instanceof ArrayBuffer||Gy(e.data)))return a(gp(e.data));J0(e,!1,i=>{Ld||(Ld=new TextEncoder),a(Ld.encode(i))})}const pp="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Mf=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let e=0;e<pp.length;e++)Mf[pp.charCodeAt(e)]=e;const IS=e=>{let a=e.length*.75,i=e.length,f,c=0,d,m,y,b;e[e.length-1]==="="&&(a--,e[e.length-2]==="="&&a--);const x=new ArrayBuffer(a),v=new Uint8Array(x);for(f=0;f<i;f+=4)d=Mf[e.charCodeAt(f)],m=Mf[e.charCodeAt(f+1)],y=Mf[e.charCodeAt(f+2)],b=Mf[e.charCodeAt(f+3)],v[c++]=d<<2|m>>4,v[c++]=(m&15)<<4|y>>2,v[c++]=(y&3)<<6|b&63;return x},DS=typeof ArrayBuffer=="function",H0=(e,a)=>{if(typeof e!="string")return{type:"message",data:$y(e,a)};const i=e.charAt(0);return i==="b"?{type:"message",data:AS(e.substring(1),a)}:Bs[i]?e.length>1?{type:Bs[i],data:e.substring(1)}:{type:Bs[i]}:w0},AS=(e,a)=>{if(DS){const i=IS(e);return $y(i,a)}else return{base64:!0,data:e}},$y=(e,a)=>{switch(a){case"blob":return e instanceof Blob?e:new Blob([e]);case"arraybuffer":default:return e instanceof ArrayBuffer?e:e.buffer}},Zy="",zS=(e,a)=>{const i=e.length,f=new Array(i);let c=0;e.forEach((d,m)=>{J0(d,!1,y=>{f[m]=y,++c===i&&a(f.join(Zy))})})},RS=(e,a)=>{const i=e.split(Zy),f=[];for(let c=0;c<i.length;c++){const d=H0(i[c],a);if(f.push(d),d.type==="error")break}return f};function OS(){return new TransformStream({transform(e,a){NS(e,i=>{const f=i.length;let c;if(f<126)c=new Uint8Array(1),new DataView(c.buffer).setUint8(0,f);else if(f<65536){c=new Uint8Array(3);const d=new DataView(c.buffer);d.setUint8(0,126),d.setUint16(1,f)}else{c=new Uint8Array(9);const d=new DataView(c.buffer);d.setUint8(0,127),d.setBigUint64(1,BigInt(f))}e.data&&typeof e.data!="string"&&(c[0]|=128),a.enqueue(c),a.enqueue(i)})}})}let Sd;function ms(e){return e.reduce((a,i)=>a+i.length,0)}function gs(e,a){if(e[0].length===a)return e.shift();const i=new Uint8Array(a);let f=0;for(let c=0;c<a;c++)i[c]=e[0][f++],f===e[0].length&&(e.shift(),f=0);return e.length&&f<e[0].length&&(e[0]=e[0].slice(f)),i}function BS(e,a){Sd||(Sd=new TextDecoder);const i=[];let f=0,c=-1,d=!1;return new TransformStream({transform(m,y){for(i.push(m);;){if(f===0){if(ms(i)<1)break;const b=gs(i,1);d=(b[0]&128)===128,c=b[0]&127,c<126?f=3:c===126?f=1:f=2}else if(f===1){if(ms(i)<2)break;const b=gs(i,2);c=new DataView(b.buffer,b.byteOffset,b.length).getUint16(0),f=3}else if(f===2){if(ms(i)<8)break;const b=gs(i,8),x=new DataView(b.buffer,b.byteOffset,b.length),v=x.getUint32(0);if(v>Math.pow(2,21)-1){y.enqueue(w0);break}c=v*Math.pow(2,32)+x.getUint32(4),f=3}else{if(ms(i)<c)break;const b=gs(i,c);y.enqueue(H0(d?b:Sd.decode(b),a)),f=0}if(c===0||c>e){y.enqueue(w0);break}}}})}const Jy=4;function Ve(e){if(e)return US(e)}function US(e){for(var a in Ve.prototype)e[a]=Ve.prototype[a];return e}Ve.prototype.on=Ve.prototype.addEventListener=function(e,a){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(a),this};Ve.prototype.once=function(e,a){function i(){this.off(e,i),a.apply(this,arguments)}return i.fn=a,this.on(e,i),this};Ve.prototype.off=Ve.prototype.removeListener=Ve.prototype.removeAllListeners=Ve.prototype.removeEventListener=function(e,a){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var i=this._callbacks["$"+e];if(!i)return this;if(arguments.length==1)return delete this._callbacks["$"+e],this;for(var f,c=0;c<i.length;c++)if(f=i[c],f===a||f.fn===a){i.splice(c,1);break}return i.length===0&&delete this._callbacks["$"+e],this};Ve.prototype.emit=function(e){this._callbacks=this._callbacks||{};for(var a=new Array(arguments.length-1),i=this._callbacks["$"+e],f=1;f<arguments.length;f++)a[f-1]=arguments[f];if(i){i=i.slice(0);for(var f=0,c=i.length;f<c;++f)i[f].apply(this,a)}return this};Ve.prototype.emitReserved=Ve.prototype.emit;Ve.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]};Ve.prototype.hasListeners=function(e){return!!this.listeners(e).length};const Ll=typeof Promise=="function"&&typeof Promise.resolve=="function"?a=>Promise.resolve().then(a):(a,i)=>i(a,0),tn=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),_S="arraybuffer";function Hy(e,...a){return a.reduce((i,f)=>(e.hasOwnProperty(f)&&(i[f]=e[f]),i),{})}const YS=tn.setTimeout,QS=tn.clearTimeout;function Sl(e,a){a.useNativeTimers?(e.setTimeoutFn=YS.bind(tn),e.clearTimeoutFn=QS.bind(tn)):(e.setTimeoutFn=tn.setTimeout.bind(tn),e.clearTimeoutFn=tn.clearTimeout.bind(tn))}const GS=1.33;function $S(e){return typeof e=="string"?ZS(e):Math.ceil((e.byteLength||e.size)*GS)}function ZS(e){let a=0,i=0;for(let f=0,c=e.length;f<c;f++)a=e.charCodeAt(f),a<128?i+=1:a<2048?i+=2:a<55296||a>=57344?i+=3:(f++,i+=4);return i}function Py(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function JS(e){let a="";for(let i in e)e.hasOwnProperty(i)&&(a.length&&(a+="&"),a+=encodeURIComponent(i)+"="+encodeURIComponent(e[i]));return a}function HS(e){let a={},i=e.split("&");for(let f=0,c=i.length;f<c;f++){let d=i[f].split("=");a[decodeURIComponent(d[0])]=decodeURIComponent(d[1])}return a}class PS extends Error{constructor(a,i,f){super(a),this.description=i,this.context=f,this.type="TransportError"}}class P0 extends Ve{constructor(a){super(),this.writable=!1,Sl(this,a),this.opts=a,this.query=a.query,this.socket=a.socket,this.supportsBinary=!a.forceBase64}onError(a,i,f){return super.emitReserved("error",new PS(a,i,f)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(a){this.readyState==="open"&&this.write(a)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(a){const i=H0(a,this.socket.binaryType);this.onPacket(i)}onPacket(a){super.emitReserved("packet",a)}onClose(a){this.readyState="closed",super.emitReserved("close",a)}pause(a){}createUri(a,i={}){return a+"://"+this._hostname()+this._port()+this.opts.path+this._query(i)}_hostname(){const a=this.opts.hostname;return a.indexOf(":")===-1?a:"["+a+"]"}_port(){return this.opts.port&&(this.opts.secure&&+(this.opts.port!==443)||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(a){const i=JS(a);return i.length?"?"+i:""}}class FS extends P0{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(a){this.readyState="pausing";const i=()=>{this.readyState="paused",a()};if(this._polling||!this.writable){let f=0;this._polling&&(f++,this.once("pollComplete",function(){--f||i()})),this.writable||(f++,this.once("drain",function(){--f||i()}))}else i()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(a){const i=f=>{if(this.readyState==="opening"&&f.type==="open"&&this.onOpen(),f.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(f)};RS(a,this.socket.binaryType).forEach(i),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const a=()=>{this.write([{type:"close"}])};this.readyState==="open"?a():this.once("open",a)}write(a){this.writable=!1,zS(a,i=>{this.doWrite(i,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const a=this.opts.secure?"https":"http",i=this.query||{};return this.opts.timestampRequests!==!1&&(i[this.opts.timestampParam]=Py()),!this.supportsBinary&&!i.sid&&(i.b64=1),this.createUri(a,i)}}let Fy=!1;try{Fy=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const qS=Fy;function VS(){}class XS extends FS{constructor(a){if(super(a),typeof location<"u"){const i=location.protocol==="https:";let f=location.port;f||(f=i?"443":"80"),this.xd=typeof location<"u"&&a.hostname!==location.hostname||f!==a.port}}doWrite(a,i){const f=this.request({method:"POST",data:a});f.on("success",i),f.on("error",(c,d)=>{this.onError("xhr post error",c,d)})}doPoll(){const a=this.request();a.on("data",this.onData.bind(this)),a.on("error",(i,f)=>{this.onError("xhr poll error",i,f)}),this.pollXhr=a}}let Pr=class Us extends Ve{constructor(a,i,f){super(),this.createRequest=a,Sl(this,f),this._opts=f,this._method=f.method||"GET",this._uri=i,this._data=f.data!==void 0?f.data:null,this._create()}_create(){var a;const i=Hy(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");i.xdomain=!!this._opts.xd;const f=this._xhr=this.createRequest(i);try{f.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){f.setDisableHeaderCheck&&f.setDisableHeaderCheck(!0);for(let c in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(c)&&f.setRequestHeader(c,this._opts.extraHeaders[c])}}catch{}if(this._method==="POST")try{f.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{f.setRequestHeader("Accept","*/*")}catch{}(a=this._opts.cookieJar)===null||a===void 0||a.addCookies(f),"withCredentials"in f&&(f.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(f.timeout=this._opts.requestTimeout),f.onreadystatechange=()=>{var c;f.readyState===3&&((c=this._opts.cookieJar)===null||c===void 0||c.parseCookies(f.getResponseHeader("set-cookie"))),f.readyState===4&&(f.status===200||f.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof f.status=="number"?f.status:0)},0))},f.send(this._data)}catch(c){this.setTimeoutFn(()=>{this._onError(c)},0);return}typeof document<"u"&&(this._index=Us.requestsCount++,Us.requests[this._index]=this)}_onError(a){this.emitReserved("error",a,this._xhr),this._cleanup(!0)}_cleanup(a){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=VS,a)try{this._xhr.abort()}catch{}typeof document<"u"&&delete Us.requests[this._index],this._xhr=null}}_onLoad(){const a=this._xhr.responseText;a!==null&&(this.emitReserved("data",a),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}};Pr.requestsCount=0;Pr.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",yp);else if(typeof addEventListener=="function"){const e="onpagehide"in tn?"pagehide":"unload";addEventListener(e,yp,!1)}}function yp(){for(let e in Pr.requests)Pr.requests.hasOwnProperty(e)&&Pr.requests[e].abort()}const WS=function(){const e=qy({xdomain:!1});return e&&e.responseType!==null}();class KS extends XS{constructor(a){super(a);const i=a&&a.forceBase64;this.supportsBinary=WS&&!i}request(a={}){return Object.assign(a,{xd:this.xd},this.opts),new Pr(qy,this.uri(),a)}}function qy(e){const a=e.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!a||qS))return new XMLHttpRequest}catch{}if(!a)try{return new tn[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const Vy=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class eC extends P0{get name(){return"websocket"}doOpen(){const a=this.uri(),i=this.opts.protocols,f=Vy?{}:Hy(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(f.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(a,i,f)}catch(c){return this.emitReserved("error",c)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=a=>this.onClose({description:"websocket connection closed",context:a}),this.ws.onmessage=a=>this.onData(a.data),this.ws.onerror=a=>this.onError("websocket error",a)}write(a){this.writable=!1;for(let i=0;i<a.length;i++){const f=a[i],c=i===a.length-1;J0(f,this.supportsBinary,d=>{try{this.doWrite(f,d)}catch{}c&&Ll(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const a=this.opts.secure?"wss":"ws",i=this.query||{};return this.opts.timestampRequests&&(i[this.opts.timestampParam]=Py()),this.supportsBinary||(i.b64=1),this.createUri(a,i)}}const Cd=tn.WebSocket||tn.MozWebSocket;class tC extends eC{createSocket(a,i,f){return Vy?new Cd(a,i,f):i?new Cd(a,i):new Cd(a)}doWrite(a,i){this.ws.send(i)}}class nC extends P0{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(a){return this.emitReserved("error",a)}this._transport.closed.then(()=>{this.onClose()}).catch(a=>{this.onError("webtransport error",a)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(a=>{const i=BS(Number.MAX_SAFE_INTEGER,this.socket.binaryType),f=a.readable.pipeThrough(i).getReader(),c=OS();c.readable.pipeTo(a.writable),this._writer=c.writable.getWriter();const d=()=>{f.read().then(({done:y,value:b})=>{y||(this.onPacket(b),d())}).catch(y=>{})};d();const m={type:"open"};this.query.sid&&(m.data=`{"sid":"${this.query.sid}"}`),this._writer.write(m).then(()=>this.onOpen())})})}write(a){this.writable=!1;for(let i=0;i<a.length;i++){const f=a[i],c=i===a.length-1;this._writer.write(f).then(()=>{c&&Ll(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var a;(a=this._transport)===null||a===void 0||a.close()}}const aC={websocket:tC,webtransport:nC,polling:KS},rC=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,iC=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function v0(e){if(e.length>8e3)throw"URI too long";const a=e,i=e.indexOf("["),f=e.indexOf("]");i!=-1&&f!=-1&&(e=e.substring(0,i)+e.substring(i,f).replace(/:/g,";")+e.substring(f,e.length));let c=rC.exec(e||""),d={},m=14;for(;m--;)d[iC[m]]=c[m]||"";return i!=-1&&f!=-1&&(d.source=a,d.host=d.host.substring(1,d.host.length-1).replace(/;/g,":"),d.authority=d.authority.replace("[","").replace("]","").replace(/;/g,":"),d.ipv6uri=!0),d.pathNames=fC(d,d.path),d.queryKey=oC(d,d.query),d}function fC(e,a){const i=/\/{2,9}/g,f=a.replace(i,"/").split("/");return(a.slice(0,1)=="/"||a.length===0)&&f.splice(0,1),a.slice(-1)=="/"&&f.splice(f.length-1,1),f}function oC(e,a){const i={};return a.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(f,c,d){c&&(i[c]=d)}),i}const x0=typeof addEventListener=="function"&&typeof removeEventListener=="function",_s=[];x0&&addEventListener("offline",()=>{_s.forEach(e=>e())},!1);class wa extends Ve{constructor(a,i){if(super(),this.binaryType=_S,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,a&&typeof a=="object"&&(i=a,a=null),a){const f=v0(a);i.hostname=f.host,i.secure=f.protocol==="https"||f.protocol==="wss",i.port=f.port,f.query&&(i.query=f.query)}else i.host&&(i.hostname=v0(i.host).host);Sl(this,i),this.secure=i.secure!=null?i.secure:typeof location<"u"&&location.protocol==="https:",i.hostname&&!i.port&&(i.port=this.secure?"443":"80"),this.hostname=i.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=i.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},i.transports.forEach(f=>{const c=f.prototype.name;this.transports.push(c),this._transportsByName[c]=f}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},i),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=HS(this.opts.query)),x0&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},_s.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(a){const i=Object.assign({},this.opts.query);i.EIO=Jy,i.transport=a,this.id&&(i.sid=this.id);const f=Object.assign({},this.opts,{query:i,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[a]);return new this._transportsByName[a](f)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const a=this.opts.rememberUpgrade&&wa.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const i=this.createTransport(a);i.open(),this.setTransport(i)}setTransport(a){this.transport&&this.transport.removeAllListeners(),this.transport=a,a.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",i=>this._onClose("transport close",i))}onOpen(){this.readyState="open",wa.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(a){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",a),this.emitReserved("heartbeat"),a.type){case"open":this.onHandshake(JSON.parse(a.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const i=new Error("server error");i.code=a.data,this._onError(i);break;case"message":this.emitReserved("data",a.data),this.emitReserved("message",a.data);break}}onHandshake(a){this.emitReserved("handshake",a),this.id=a.sid,this.transport.query.sid=a.sid,this._pingInterval=a.pingInterval,this._pingTimeout=a.pingTimeout,this._maxPayload=a.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const a=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+a,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},a),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const a=this._getWritablePackets();this.transport.send(a),this._prevBufferLen=a.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let i=1;for(let f=0;f<this.writeBuffer.length;f++){const c=this.writeBuffer[f].data;if(c&&(i+=$S(c)),f>0&&i>this._maxPayload)return this.writeBuffer.slice(0,f);i+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const a=Date.now()>this._pingTimeoutTime;return a&&(this._pingTimeoutTime=0,Ll(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),a}write(a,i,f){return this._sendPacket("message",a,i,f),this}send(a,i,f){return this._sendPacket("message",a,i,f),this}_sendPacket(a,i,f,c){if(typeof i=="function"&&(c=i,i=void 0),typeof f=="function"&&(c=f,f=null),this.readyState==="closing"||this.readyState==="closed")return;f=f||{},f.compress=f.compress!==!1;const d={type:a,data:i,options:f};this.emitReserved("packetCreate",d),this.writeBuffer.push(d),c&&this.once("flush",c),this.flush()}close(){const a=()=>{this._onClose("forced close"),this.transport.close()},i=()=>{this.off("upgrade",i),this.off("upgradeError",i),a()},f=()=>{this.once("upgrade",i),this.once("upgradeError",i)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?f():a()}):this.upgrading?f():a()),this}_onError(a){if(wa.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",a),this._onClose("transport error",a)}_onClose(a,i){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),x0&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const f=_s.indexOf(this._offlineEventListener);f!==-1&&_s.splice(f,1)}this.readyState="closed",this.id=null,this.emitReserved("close",a,i),this.writeBuffer=[],this._prevBufferLen=0}}}wa.protocol=Jy;class sC extends wa{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let a=0;a<this._upgrades.length;a++)this._probe(this._upgrades[a])}_probe(a){let i=this.createTransport(a),f=!1;wa.priorWebsocketSuccess=!1;const c=()=>{f||(i.send([{type:"ping",data:"probe"}]),i.once("packet",M=>{if(!f)if(M.type==="pong"&&M.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",i),!i)return;wa.priorWebsocketSuccess=i.name==="websocket",this.transport.pause(()=>{f||this.readyState!=="closed"&&(v(),this.setTransport(i),i.send([{type:"upgrade"}]),this.emitReserved("upgrade",i),i=null,this.upgrading=!1,this.flush())})}else{const j=new Error("probe error");j.transport=i.name,this.emitReserved("upgradeError",j)}}))};function d(){f||(f=!0,v(),i.close(),i=null)}const m=M=>{const j=new Error("probe error: "+M);j.transport=i.name,d(),this.emitReserved("upgradeError",j)};function y(){m("transport closed")}function b(){m("socket closed")}function x(M){i&&M.name!==i.name&&d()}const v=()=>{i.removeListener("open",c),i.removeListener("error",m),i.removeListener("close",y),this.off("close",b),this.off("upgrading",x)};i.once("open",c),i.once("error",m),i.once("close",y),this.once("close",b),this.once("upgrading",x),this._upgrades.indexOf("webtransport")!==-1&&a!=="webtransport"?this.setTimeoutFn(()=>{f||i.open()},200):i.open()}onHandshake(a){this._upgrades=this._filterUpgrades(a.upgrades),super.onHandshake(a)}_filterUpgrades(a){const i=[];for(let f=0;f<a.length;f++)~this.transports.indexOf(a[f])&&i.push(a[f]);return i}}let lC=class extends sC{constructor(a,i={}){const f=typeof a=="object"?a:i;(!f.transports||f.transports&&typeof f.transports[0]=="string")&&(f.transports=(f.transports||["polling","websocket","webtransport"]).map(c=>aC[c]).filter(c=>!!c)),super(a,f)}};function cC(e,a="",i){let f=e;i=i||typeof location<"u"&&location,e==null&&(e=i.protocol+"//"+i.host),typeof e=="string"&&(e.charAt(0)==="/"&&(e.charAt(1)==="/"?e=i.protocol+e:e=i.host+e),/^(https?|wss?):\/\//.test(e)||(typeof i<"u"?e=i.protocol+"//"+e:e="https://"+e),f=v0(e)),f.port||(/^(http|ws)$/.test(f.protocol)?f.port="80":/^(http|ws)s$/.test(f.protocol)&&(f.port="443")),f.path=f.path||"/";const d=f.host.indexOf(":")!==-1?"["+f.host+"]":f.host;return f.id=f.protocol+"://"+d+":"+f.port+a,f.href=f.protocol+"://"+d+(i&&i.port===f.port?"":":"+f.port),f}const uC=typeof ArrayBuffer=="function",dC=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e.buffer instanceof ArrayBuffer,Xy=Object.prototype.toString,hC=typeof Blob=="function"||typeof Blob<"u"&&Xy.call(Blob)==="[object BlobConstructor]",mC=typeof File=="function"||typeof File<"u"&&Xy.call(File)==="[object FileConstructor]";function F0(e){return uC&&(e instanceof ArrayBuffer||dC(e))||hC&&e instanceof Blob||mC&&e instanceof File}function Ys(e,a){if(!e||typeof e!="object")return!1;if(Array.isArray(e)){for(let i=0,f=e.length;i<f;i++)if(Ys(e[i]))return!0;return!1}if(F0(e))return!0;if(e.toJSON&&typeof e.toJSON=="function"&&arguments.length===1)return Ys(e.toJSON(),!0);for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&Ys(e[i]))return!0;return!1}function gC(e){const a=[],i=e.data,f=e;return f.data=M0(i,a),f.attachments=a.length,{packet:f,buffers:a}}function M0(e,a){if(!e)return e;if(F0(e)){const i={_placeholder:!0,num:a.length};return a.push(e),i}else if(Array.isArray(e)){const i=new Array(e.length);for(let f=0;f<e.length;f++)i[f]=M0(e[f],a);return i}else if(typeof e=="object"&&!(e instanceof Date)){const i={};for(const f in e)Object.prototype.hasOwnProperty.call(e,f)&&(i[f]=M0(e[f],a));return i}return e}function pC(e,a){return e.data=j0(e.data,a),delete e.attachments,e}function j0(e,a){if(!e)return e;if(e&&e._placeholder===!0){if(typeof e.num=="number"&&e.num>=0&&e.num<a.length)return a[e.num];throw new Error("illegal attachments")}else if(Array.isArray(e))for(let i=0;i<e.length;i++)e[i]=j0(e[i],a);else if(typeof e=="object")for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(e[i]=j0(e[i],a));return e}const yC=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],bC=5;var pe;(function(e){e[e.CONNECT=0]="CONNECT",e[e.DISCONNECT=1]="DISCONNECT",e[e.EVENT=2]="EVENT",e[e.ACK=3]="ACK",e[e.CONNECT_ERROR=4]="CONNECT_ERROR",e[e.BINARY_EVENT=5]="BINARY_EVENT",e[e.BINARY_ACK=6]="BINARY_ACK"})(pe||(pe={}));class wC{constructor(a){this.replacer=a}encode(a){return(a.type===pe.EVENT||a.type===pe.ACK)&&Ys(a)?this.encodeAsBinary({type:a.type===pe.EVENT?pe.BINARY_EVENT:pe.BINARY_ACK,nsp:a.nsp,data:a.data,id:a.id}):[this.encodeAsString(a)]}encodeAsString(a){let i=""+a.type;return(a.type===pe.BINARY_EVENT||a.type===pe.BINARY_ACK)&&(i+=a.attachments+"-"),a.nsp&&a.nsp!=="/"&&(i+=a.nsp+","),a.id!=null&&(i+=a.id),a.data!=null&&(i+=JSON.stringify(a.data,this.replacer)),i}encodeAsBinary(a){const i=gC(a),f=this.encodeAsString(i.packet),c=i.buffers;return c.unshift(f),c}}function bp(e){return Object.prototype.toString.call(e)==="[object Object]"}class q0 extends Ve{constructor(a){super(),this.reviver=a}add(a){let i;if(typeof a=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");i=this.decodeString(a);const f=i.type===pe.BINARY_EVENT;f||i.type===pe.BINARY_ACK?(i.type=f?pe.EVENT:pe.ACK,this.reconstructor=new vC(i),i.attachments===0&&super.emitReserved("decoded",i)):super.emitReserved("decoded",i)}else if(F0(a)||a.base64)if(this.reconstructor)i=this.reconstructor.takeBinaryData(a),i&&(this.reconstructor=null,super.emitReserved("decoded",i));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+a)}decodeString(a){let i=0;const f={type:Number(a.charAt(0))};if(pe[f.type]===void 0)throw new Error("unknown packet type "+f.type);if(f.type===pe.BINARY_EVENT||f.type===pe.BINARY_ACK){const d=i+1;for(;a.charAt(++i)!=="-"&&i!=a.length;);const m=a.substring(d,i);if(m!=Number(m)||a.charAt(i)!=="-")throw new Error("Illegal attachments");f.attachments=Number(m)}if(a.charAt(i+1)==="/"){const d=i+1;for(;++i&&!(a.charAt(i)===","||i===a.length););f.nsp=a.substring(d,i)}else f.nsp="/";const c=a.charAt(i+1);if(c!==""&&Number(c)==c){const d=i+1;for(;++i;){const m=a.charAt(i);if(m==null||Number(m)!=m){--i;break}if(i===a.length)break}f.id=Number(a.substring(d,i+1))}if(a.charAt(++i)){const d=this.tryParse(a.substr(i));if(q0.isPayloadValid(f.type,d))f.data=d;else throw new Error("invalid payload")}return f}tryParse(a){try{return JSON.parse(a,this.reviver)}catch{return!1}}static isPayloadValid(a,i){switch(a){case pe.CONNECT:return bp(i);case pe.DISCONNECT:return i===void 0;case pe.CONNECT_ERROR:return typeof i=="string"||bp(i);case pe.EVENT:case pe.BINARY_EVENT:return Array.isArray(i)&&(typeof i[0]=="number"||typeof i[0]=="string"&&yC.indexOf(i[0])===-1);case pe.ACK:case pe.BINARY_ACK:return Array.isArray(i)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class vC{constructor(a){this.packet=a,this.buffers=[],this.reconPack=a}takeBinaryData(a){if(this.buffers.push(a),this.buffers.length===this.reconPack.attachments){const i=pC(this.reconPack,this.buffers);return this.finishedReconstruction(),i}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const xC=Object.freeze(Object.defineProperty({__proto__:null,Decoder:q0,Encoder:wC,get PacketType(){return pe},protocol:bC},Symbol.toStringTag,{value:"Module"}));function cn(e,a,i){return e.on(a,i),function(){e.off(a,i)}}const MC=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Wy extends Ve{constructor(a,i,f){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=a,this.nsp=i,f&&f.auth&&(this.auth=f.auth),this._opts=Object.assign({},f),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const a=this.io;this.subs=[cn(a,"open",this.onopen.bind(this)),cn(a,"packet",this.onpacket.bind(this)),cn(a,"error",this.onerror.bind(this)),cn(a,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...a){return a.unshift("message"),this.emit.apply(this,a),this}emit(a,...i){var f,c,d;if(MC.hasOwnProperty(a))throw new Error('"'+a.toString()+'" is a reserved event name');if(i.unshift(a),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(i),this;const m={type:pe.EVENT,data:i};if(m.options={},m.options.compress=this.flags.compress!==!1,typeof i[i.length-1]=="function"){const v=this.ids++,M=i.pop();this._registerAckCallback(v,M),m.id=v}const y=(c=(f=this.io.engine)===null||f===void 0?void 0:f.transport)===null||c===void 0?void 0:c.writable,b=this.connected&&!(!((d=this.io.engine)===null||d===void 0)&&d._hasPingExpired());return this.flags.volatile&&!y||(b?(this.notifyOutgoingListeners(m),this.packet(m)):this.sendBuffer.push(m)),this.flags={},this}_registerAckCallback(a,i){var f;const c=(f=this.flags.timeout)!==null&&f!==void 0?f:this._opts.ackTimeout;if(c===void 0){this.acks[a]=i;return}const d=this.io.setTimeoutFn(()=>{delete this.acks[a];for(let y=0;y<this.sendBuffer.length;y++)this.sendBuffer[y].id===a&&this.sendBuffer.splice(y,1);i.call(this,new Error("operation has timed out"))},c),m=(...y)=>{this.io.clearTimeoutFn(d),i.apply(this,y)};m.withError=!0,this.acks[a]=m}emitWithAck(a,...i){return new Promise((f,c)=>{const d=(m,y)=>m?c(m):f(y);d.withError=!0,i.push(d),this.emit(a,...i)})}_addToQueue(a){let i;typeof a[a.length-1]=="function"&&(i=a.pop());const f={id:this._queueSeq++,tryCount:0,pending:!1,args:a,flags:Object.assign({fromQueue:!0},this.flags)};a.push((c,...d)=>f!==this._queue[0]?void 0:(c!==null?f.tryCount>this._opts.retries&&(this._queue.shift(),i&&i(c)):(this._queue.shift(),i&&i(null,...d)),f.pending=!1,this._drainQueue())),this._queue.push(f),this._drainQueue()}_drainQueue(a=!1){if(!this.connected||this._queue.length===0)return;const i=this._queue[0];i.pending&&!a||(i.pending=!0,i.tryCount++,this.flags=i.flags,this.emit.apply(this,i.args))}packet(a){a.nsp=this.nsp,this.io._packet(a)}onopen(){typeof this.auth=="function"?this.auth(a=>{this._sendConnectPacket(a)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(a){this.packet({type:pe.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},a):a})}onerror(a){this.connected||this.emitReserved("connect_error",a)}onclose(a,i){this.connected=!1,delete this.id,this.emitReserved("disconnect",a,i),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(a=>{if(!this.sendBuffer.some(f=>String(f.id)===a)){const f=this.acks[a];delete this.acks[a],f.withError&&f.call(this,new Error("socket has been disconnected"))}})}onpacket(a){if(a.nsp===this.nsp)switch(a.type){case pe.CONNECT:a.data&&a.data.sid?this.onconnect(a.data.sid,a.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case pe.EVENT:case pe.BINARY_EVENT:this.onevent(a);break;case pe.ACK:case pe.BINARY_ACK:this.onack(a);break;case pe.DISCONNECT:this.ondisconnect();break;case pe.CONNECT_ERROR:this.destroy();const f=new Error(a.data.message);f.data=a.data.data,this.emitReserved("connect_error",f);break}}onevent(a){const i=a.data||[];a.id!=null&&i.push(this.ack(a.id)),this.connected?this.emitEvent(i):this.receiveBuffer.push(Object.freeze(i))}emitEvent(a){if(this._anyListeners&&this._anyListeners.length){const i=this._anyListeners.slice();for(const f of i)f.apply(this,a)}super.emit.apply(this,a),this._pid&&a.length&&typeof a[a.length-1]=="string"&&(this._lastOffset=a[a.length-1])}ack(a){const i=this;let f=!1;return function(...c){f||(f=!0,i.packet({type:pe.ACK,id:a,data:c}))}}onack(a){const i=this.acks[a.id];typeof i=="function"&&(delete this.acks[a.id],i.withError&&a.data.unshift(null),i.apply(this,a.data))}onconnect(a,i){this.id=a,this.recovered=i&&this._pid===i,this._pid=i,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(a=>this.emitEvent(a)),this.receiveBuffer=[],this.sendBuffer.forEach(a=>{this.notifyOutgoingListeners(a),this.packet(a)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(a=>a()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:pe.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(a){return this.flags.compress=a,this}get volatile(){return this.flags.volatile=!0,this}timeout(a){return this.flags.timeout=a,this}onAny(a){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(a),this}prependAny(a){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(a),this}offAny(a){if(!this._anyListeners)return this;if(a){const i=this._anyListeners;for(let f=0;f<i.length;f++)if(a===i[f])return i.splice(f,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(a){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(a),this}prependAnyOutgoing(a){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(a),this}offAnyOutgoing(a){if(!this._anyOutgoingListeners)return this;if(a){const i=this._anyOutgoingListeners;for(let f=0;f<i.length;f++)if(a===i[f])return i.splice(f,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(a){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const i=this._anyOutgoingListeners.slice();for(const f of i)f.apply(this,a.data)}}}function si(e){e=e||{},this.ms=e.min||100,this.max=e.max||1e4,this.factor=e.factor||2,this.jitter=e.jitter>0&&e.jitter<=1?e.jitter:0,this.attempts=0}si.prototype.duration=function(){var e=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var a=Math.random(),i=Math.floor(a*this.jitter*e);e=(Math.floor(a*10)&1)==0?e-i:e+i}return Math.min(e,this.max)|0};si.prototype.reset=function(){this.attempts=0};si.prototype.setMin=function(e){this.ms=e};si.prototype.setMax=function(e){this.max=e};si.prototype.setJitter=function(e){this.jitter=e};class L0 extends Ve{constructor(a,i){var f;super(),this.nsps={},this.subs=[],a&&typeof a=="object"&&(i=a,a=void 0),i=i||{},i.path=i.path||"/socket.io",this.opts=i,Sl(this,i),this.reconnection(i.reconnection!==!1),this.reconnectionAttempts(i.reconnectionAttempts||1/0),this.reconnectionDelay(i.reconnectionDelay||1e3),this.reconnectionDelayMax(i.reconnectionDelayMax||5e3),this.randomizationFactor((f=i.randomizationFactor)!==null&&f!==void 0?f:.5),this.backoff=new si({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(i.timeout==null?2e4:i.timeout),this._readyState="closed",this.uri=a;const c=i.parser||xC;this.encoder=new c.Encoder,this.decoder=new c.Decoder,this._autoConnect=i.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(a){return arguments.length?(this._reconnection=!!a,a||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(a){return a===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=a,this)}reconnectionDelay(a){var i;return a===void 0?this._reconnectionDelay:(this._reconnectionDelay=a,(i=this.backoff)===null||i===void 0||i.setMin(a),this)}randomizationFactor(a){var i;return a===void 0?this._randomizationFactor:(this._randomizationFactor=a,(i=this.backoff)===null||i===void 0||i.setJitter(a),this)}reconnectionDelayMax(a){var i;return a===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=a,(i=this.backoff)===null||i===void 0||i.setMax(a),this)}timeout(a){return arguments.length?(this._timeout=a,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(a){if(~this._readyState.indexOf("open"))return this;this.engine=new lC(this.uri,this.opts);const i=this.engine,f=this;this._readyState="opening",this.skipReconnect=!1;const c=cn(i,"open",function(){f.onopen(),a&&a()}),d=y=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",y),a?a(y):this.maybeReconnectOnOpen()},m=cn(i,"error",d);if(this._timeout!==!1){const y=this._timeout,b=this.setTimeoutFn(()=>{c(),d(new Error("timeout")),i.close()},y);this.opts.autoUnref&&b.unref(),this.subs.push(()=>{this.clearTimeoutFn(b)})}return this.subs.push(c),this.subs.push(m),this}connect(a){return this.open(a)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const a=this.engine;this.subs.push(cn(a,"ping",this.onping.bind(this)),cn(a,"data",this.ondata.bind(this)),cn(a,"error",this.onerror.bind(this)),cn(a,"close",this.onclose.bind(this)),cn(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(a){try{this.decoder.add(a)}catch(i){this.onclose("parse error",i)}}ondecoded(a){Ll(()=>{this.emitReserved("packet",a)},this.setTimeoutFn)}onerror(a){this.emitReserved("error",a)}socket(a,i){let f=this.nsps[a];return f?this._autoConnect&&!f.active&&f.connect():(f=new Wy(this,a,i),this.nsps[a]=f),f}_destroy(a){const i=Object.keys(this.nsps);for(const f of i)if(this.nsps[f].active)return;this._close()}_packet(a){const i=this.encoder.encode(a);for(let f=0;f<i.length;f++)this.engine.write(i[f],a.options)}cleanup(){this.subs.forEach(a=>a()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(a,i){var f;this.cleanup(),(f=this.engine)===null||f===void 0||f.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",a,i),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const a=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const i=this.backoff.duration();this._reconnecting=!0;const f=this.setTimeoutFn(()=>{a.skipReconnect||(this.emitReserved("reconnect_attempt",a.backoff.attempts),!a.skipReconnect&&a.open(c=>{c?(a._reconnecting=!1,a.reconnect(),this.emitReserved("reconnect_error",c)):a.onreconnect()}))},i);this.opts.autoUnref&&f.unref(),this.subs.push(()=>{this.clearTimeoutFn(f)})}}onreconnect(){const a=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",a)}}const df={};function Qs(e,a){typeof e=="object"&&(a=e,e=void 0),a=a||{};const i=cC(e,a.path||"/socket.io"),f=i.source,c=i.id,d=i.path,m=df[c]&&d in df[c].nsps,y=a.forceNew||a["force new connection"]||a.multiplex===!1||m;let b;return y?b=new L0(f,a):(df[c]||(df[c]=new L0(f,a)),b=df[c]),i.query&&!a.query&&(a.query=i.queryKey),b.socket(i.path,a)}Object.assign(Qs,{Manager:L0,Socket:Wy,io:Qs,connect:Qs});const Ky=g.createContext(void 0),jC=({children:e})=>{const[a,i]=g.useState(null),[f,c]=g.useState(!1),[d,m]=g.useState([]),{user:y,isAuthenticated:b}=pt();g.useEffect(()=>{if(b&&y){const S=localStorage.getItem("token"),R=Qs("https://mendam-server.onrender.com",{auth:{token:S},transports:["websocket","polling"],reconnection:!0,reconnectionAttempts:5,reconnectionDelay:1e3});return R.on("connect",()=>{c(!0)}),R.on("disconnect",A=>{c(!1)}),R.on("connect_error",A=>{c(!1)}),R.on("reconnect",A=>{c(!0)}),R.on("reconnect_error",A=>{}),R.on("user_online",A=>{m(_=>[..._.filter(T=>T!==A.userId),A.userId])}),R.on("user_offline",A=>{m(_=>_.filter(T=>T!==A.userId))}),R.on("user_status_change",A=>{}),R.on("new_direct_message",A=>{window.dispatchEvent(new CustomEvent("new_direct_message",{detail:A}))}),R.on("new_group_message",A=>{window.dispatchEvent(new CustomEvent("new_group_message",{detail:A}))}),R.on("user_typing_start_direct",A=>{window.dispatchEvent(new CustomEvent("user_typing_start_direct",{detail:A}))}),R.on("user_typing_stop_direct",A=>{window.dispatchEvent(new CustomEvent("user_typing_stop_direct",{detail:A}))}),R.on("user_typing_start_group",A=>{window.dispatchEvent(new CustomEvent("user_typing_start_group",{detail:A}))}),R.on("user_typing_stop_group",A=>{window.dispatchEvent(new CustomEvent("user_typing_stop_group",{detail:A}))}),R.on("message_read_receipt",A=>{window.dispatchEvent(new CustomEvent("message_read_receipt",{detail:A}))}),R.on("group_member_joined",A=>{window.dispatchEvent(new CustomEvent("group_member_joined",{detail:A}))}),R.on("group_member_left",A=>{window.dispatchEvent(new CustomEvent("group_member_left",{detail:A}))}),R.on("notification",A=>{window.dispatchEvent(new CustomEvent("notification",{detail:A}))}),R.on("new_friend_request",A=>{window.dispatchEvent(new CustomEvent("new_friend_request",{detail:A}))}),R.on("friend_request_accepted",A=>{window.dispatchEvent(new CustomEvent("friend_request_accepted",{detail:A}))}),i(R),()=>{R.close(),i(null),c(!1),m([])}}else a&&(a.close(),i(null),c(!1),m([]))},[b,y]);const I={socket:a,isConnected:f,onlineUsers:d,joinGroup:S=>{a&&f?a.emit("join_group",S):console.warn("Cannot join group - socket not connected")},leaveGroup:S=>{a&&f?a.emit("leave_group",S):console.warn("Cannot leave group - socket not connected")},sendDirectMessage:(S,N,R="text")=>{a&&f?a.emit("send_direct_message",{recipientId:S,content:N,type:R}):console.warn("Cannot send direct message - socket not connected")},sendGroupMessage:(S,N,R="text")=>{a&&f?a.emit("send_group_message",{groupId:S,content:N,type:R}):console.warn("Cannot send group message - socket not connected")},updateStatus:S=>{a&&f?a.emit("status_update",S):console.warn("❌ Cannot update status - socket not connected")}};return s.jsx(Ky.Provider,{value:I,children:e})},$f=()=>{const e=g.useContext(Ky);if(!e)throw new Error("useSocket must be used within a SocketProvider");return e},e3=g.createContext(void 0),LC=({children:e})=>{const[a,i]=g.useState([]),[f,c]=g.useState([]),[d,m]=g.useState(!1),[y,b]=g.useState(null),{isAuthenticated:x,user:v}=pt(),{socket:M}=$f();g.useEffect(()=>{x&&v&&(j(),k())},[x,v]),g.useEffect(()=>{if(!M||!x)return;const C=G=>{k()},D=G=>{j(),k()};return M.on("new_friend_request",C),M.on("friend_request_accepted",D),()=>{M.off("new_friend_request",C),M.off("friend_request_accepted",D)}},[M,x]);const j=async()=>{try{const C=await pa.getFriends();C.success&&i(C.data.friends||[])}catch(C){b(C.message)}},k=async()=>{try{const C=await pa.getFriendRequests();C.success&&c(C.data.friendRequests||[])}catch(C){b(C.message)}},T={friends:a,friendRequests:f,loading:d,error:y,loadFriends:j,loadFriendRequests:k,sendFriendRequest:async C=>{try{b(null),(await pa.sendFriendRequest(C)).success}catch(D){throw b(D.message),D}},acceptFriendRequest:async C=>{try{b(null),(await pa.acceptFriendRequest(C)).success&&(c(G=>G.filter(F=>F._id!==C)),await j())}catch(D){throw b(D.message),D}},declineFriendRequest:async C=>{try{b(null),(await pa.declineFriendRequest(C)).success&&c(G=>G.filter(F=>F._id!==C))}catch(D){throw b(D.message),D}},removeFriend:async C=>{try{b(null),(await pa.removeFriend(C)).success&&i(G=>G.filter(F=>F.friendId._id!==C))}catch(D){throw b(D.message),D}},blockUser:async C=>{try{b(null),(await pa.blockUser(C)).success&&i(G=>G.filter(F=>F.friendId._id!==C))}catch(D){throw b(D.message),D}},searchUsers:async C=>{try{b(null);const D=await pa.searchUsers(C);return D.success?D.data.users||[]:[]}catch(D){return b(D.message),[]}}};return s.jsx(e3.Provider,{value:T,children:e})},xa=()=>{const e=g.useContext(e3);if(!e)throw new Error("useFriends must be used within a FriendsProvider");return e},t3=g.createContext(void 0),SC=({children:e})=>{const[a,i]=g.useState({}),[f,c]=g.useState(null),{user:d,isAuthenticated:m}=pt(),{socket:y,sendDirectMessage:b}=$f();g.useEffect(()=>{if(!y||!m)return;const S=R=>{const A={_id:R.messageId||`temp_${Date.now()}`,senderId:{_id:R.senderId,username:R.senderUsername,fullName:R.senderFullName||R.senderUsername,avatar:R.senderAvatar},content:R.content,type:R.type,createdAt:R.timestamp,isEdited:!1,readBy:[]};i(_=>{const T=_[R.senderId];return{..._,[R.senderId]:{userId:R.senderId,messages:[...(T==null?void 0:T.messages)||[],A],hasMore:(T==null?void 0:T.hasMore)||!1,loading:!1}}})},N=R=>{S(R.detail)};return window.addEventListener("new_direct_message",N),()=>{window.removeEventListener("new_direct_message",N)}},[y,m]);const x=g.useCallback(async(S,N=1)=>{var R;try{i(_=>{var T;return{..._,[S]:{userId:S,messages:((T=_[S])==null?void 0:T.messages)||[],hasMore:!0,loading:!0}}});const A=await ld.getDirectMessages(S,N,50);if(A.success){const _=A.data.messages||[],T=((R=A.data.pagination)==null?void 0:R.hasMore)||!1;i(C=>{var D;return{...C,[S]:{userId:S,messages:N===1?_:[..._,...((D=C[S])==null?void 0:D.messages)||[]],hasMore:T,loading:!1}}})}}catch{i(_=>{var T;return{..._,[S]:{userId:S,messages:((T=_[S])==null?void 0:T.messages)||[],hasMore:!1,loading:!1}}})}},[]),v=g.useCallback(async(S,N,R="text")=>{try{const A={_id:`temp_${Date.now()}`,senderId:{_id:(d==null?void 0:d.id)||"",username:(d==null?void 0:d.username)||"",fullName:(d==null?void 0:d.fullName)||"",avatar:d==null?void 0:d.avatar},content:N,type:R,createdAt:new Date,isEdited:!1,readBy:[]};i(T=>{var C,D;return{...T,[S]:{userId:S,messages:[...((C=T[S])==null?void 0:C.messages)||[],A],hasMore:((D=T[S])==null?void 0:D.hasMore)||!1,loading:!1}}}),y&&b(S,N,R);const _=await ld.sendDirectMessage(S,N,R);if(_.success){const T=_.data.message;i(C=>{var D,G;return{...C,[S]:{userId:S,messages:[...((D=C[S])==null?void 0:D.messages.filter(F=>F._id!==A._id))||[],T],hasMore:((G=C[S])==null?void 0:G.hasMore)||!1,loading:!1}}})}}catch(A){throw i(_=>{var T;return{..._,[S]:{..._[S],messages:((T=_[S])==null?void 0:T.messages.filter(C=>C._id!==`temp_${Date.now()}`))||[]}}}),A}},[y,b,d]),M=g.useCallback(async S=>{try{(await ld.deleteMessage(S)).success&&i(R=>{const A={...R};return Object.keys(A).forEach(_=>{A[_]={...A[_],messages:A[_].messages.filter(T=>T._id!==S)}}),A})}catch(N){throw N}},[]),j=g.useCallback((S,N)=>{!y||!d||(y.emit("message_read",{messageId:N,senderId:S}),i(R=>{var A;return{...R,[S]:{...R[S],messages:((A=R[S])==null?void 0:A.messages.map(_=>_._id===N?{..._,readBy:[..._.readBy.filter(T=>T.userId!==d.id),{userId:d.id,readAt:new Date}]}:_))||[]}}}))},[y,d]),k=g.useCallback(S=>{c(S)},[]),I={conversations:a,currentConversation:f,setCurrentConversation:k,loadMessages:x,sendMessage:v,deleteMessage:M,markAsRead:j};return s.jsx(t3.Provider,{value:I,children:e})},er=()=>{const e=g.useContext(t3);if(!e)throw new Error("useMessages must be used within a MessagesProvider");return e},CC=()=>{const[e,a]=g.useState(!1),i=g.useRef(null),{friendRequests:f,acceptFriendRequest:c,declineFriendRequest:d,loadFriendRequests:m}=xa(),{setCurrentConversation:y}=er();Uf(),g.useEffect(()=>{const v=setInterval(()=>{f.length===0&&m()},7e3);return()=>clearInterval(v)},[f.length,m]),g.useEffect(()=>{const v=M=>{i.current&&!i.current.contains(M.target)&&a(!1)};return e&&document.addEventListener("mousedown",v),()=>{document.removeEventListener("mousedown",v)}},[e]);const b=async v=>{try{await c(v),console.log("✅ Friend request accepted!")}catch(M){console.error("Failed to accept friend request:",M)}},x=async v=>{try{await d(v),console.log("❌ Friend request declined")}catch(M){console.error("Failed to decline friend request:",M)}};return s.jsxs(kC,{ref:i,children:[s.jsxs(TC,{onClick:()=>a(!e),children:[s.jsx(Z5,{}),f.length>0&&s.jsx(NC,{children:f.length})]}),e&&s.jsxs(IC,{children:[s.jsxs(DC,{children:[s.jsx("h4",{children:"Friend Requests"}),s.jsx(AC,{onClick:()=>a(!1),children:s.jsx(Nf,{})})]}),f.length===0?s.jsx(zC,{children:s.jsx(RC,{children:"No pending friend requests"})}):s.jsx(OC,{children:f.map(v=>s.jsxs(BC,{children:[s.jsxs(UC,{children:[s.jsx(vt,{image:v.friendId.avatar,userName:v.friendId.fullName,size:35}),s.jsxs(_C,{children:[s.jsx(YC,{children:v.friendId.fullName}),s.jsxs(QC,{children:["@",v.friendId.username]})]})]}),s.jsxs(GC,{children:[s.jsx(wp,{accept:!0,onClick:()=>b(v._id),title:"Accept",children:s.jsx(V5,{})}),s.jsx(wp,{onClick:()=>x(v._id),title:"Decline",children:s.jsx(Nf,{})})]})]},v._id))}),f.length>0&&s.jsx($C,{children:s.jsxs(ZC,{children:[f.length," pending request",f.length!==1?"s":""]})})]})]})},kC=h.div`
  position: relative;
`,EC=Gt`
0% {
  transform: rotate(-10deg);
}
50% {
  transform: rotate(10deg);
}
100% {
  transform: rotate(0);
}
`,TC=h.button`
  position: relative;
  background: none;
  border: none;
  color: ${({theme:e})=>e.text.primary};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: ${({theme:e})=>e.background.primary};
    color: var(--blue);
    svg {
      animation: ${EC} .3s ease-in;
    }
  }
  
  svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`,NC=h.div`
  position: absolute;
  top: 0.2rem;
  right: 0.2rem;
  background-color: #ef4444;
  color: white;
  font-size: var(--text-xs);
  font-weight: 600;
  min-width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({theme:e})=>e.background.secondary};
  animation: pulse 2s infinite;
  
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.7;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`,IC=h.div`
  position: absolute;
  bottom: 7rem;
  right: -2rem;
  width: 36rem;
  max-height: 50rem;
  background-color: ${({theme:e})=>e.background.secondary};
  border: 1px solid ${({theme:e})=>e.border.primary};
  border-radius: 1rem;
  box-shadow: var(--shadow-lg);
  overflow: hidden;
  z-index: 10000;
  
  @media (max-width: 600px) {
    width: 90vw;
    right: -5rem;
  }
`,DC=h.div`
  padding: 1.5rem;
  border-bottom: 1px solid ${({theme:e})=>e.border.secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  h4 {
    font-size: var(--text-lg);
    color: ${({theme:e})=>e.text.primary};
    font-weight: 500;
    margin: 0;
  }
`,AC=h.button`
  background: none;
  border: none;
  color: ${({theme:e})=>e.text.placeholder};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: ${({theme:e})=>e.background.secondary};
    color: ${({theme:e})=>e.text.primary};
  }
  
  svg {
    width: 2rem;
    height: 2rem;
  }
`,zC=h.div`
  padding: 3rem 1.5rem;
  text-align: center;
`,RC=h.div`
  color: ${({theme:e})=>e.text.placeholder};
  font-size: var(--text-md);
`,OC=h.div`
  max-height: 40rem;
  overflow-y: auto;
`,BC=h.div`
  padding: 1.5rem;
  border-bottom: 1px solid ${({theme:e})=>e.border.secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: ${({theme:e})=>e.background.secondary};
  }
  
  &:last-child {
    border-bottom: none;
  }
`,UC=h.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
  min-width: 0;
`,_C=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  min-width: 0;
`,YC=h.div`
  font-size: var(--text-md);
  color: ${({theme:e})=>e.text.primary};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,QC=h.div`
  font-size: var(--text-sm);
  color: ${({theme:e})=>e.text.secondary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;h.div`
  font-size: var(--text-xs);
  color: ${({theme:e})=>e.text.placeholder};
`;const GC=h.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,wp=h.button`
  width: 2.9rem;
  height: 2.9rem;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  
  background-color: ${({accept:e})=>e?"var(--blue)":"#554955"};
  color: ${({accept:e,theme:a})=>e?"white":"#ff99a4"};
  &:hover {
    background-color: ${({accept:e})=>e?"var(--dark-blue)":"#ff99a4"};
    color: white;
    transform: scale(1.05);
  }
  
  svg {
    width: 1.8rem;
    height: 1.8rem;
  }
`,$C=h.div`
  padding: 1rem 1.5rem;
  border-top: 1px solid ${({theme:e})=>e.border.secondary};
  text-align: center;
`,ZC=h.div`
  font-size: var(--text-sm);
  color: ${({theme:e})=>e.text.placeholder};
`,n3=({})=>{const[e,a]=g.useState(!1),[i,f]=g.useState(!1),c=ol(),{user:d,logout:m}=pt(),y=()=>{f(!e),a(x=>!x)},b=async()=>{try{await m()}catch(x){console.error("Logout failed:",x)}};return d?s.jsx(s.Fragment,{children:s.jsxs(JC,{children:[s.jsx(HC,{children:s.jsx(PC,{children:window.innerWidth<=700?s.jsx(s.Fragment,{children:s.jsxs(XC,{children:[s.jsx(kd,{isActive:c.pathname==="/app/@me",children:s.jsxs(De,{to:"/app/@me",children:[s.jsx(vp,{children:s.jsx(u9,{})}),s.jsx(Ed,{children:s.jsx("span",{children:"Home"})})]})}),s.jsx(kd,{isActive:c.pathname==="/app/friends",children:s.jsxs(De,{to:"/app/friends",children:[s.jsx(WC,{isActive:c.pathname==="/app/friends",children:d.avatar?s.jsx("img",{src:d.avatar,alt:d.fullName}):s.jsx("div",{className:"placeholder",children:d.fullName.charAt(0).toUpperCase()})}),s.jsx(Ed,{children:s.jsx("span",{children:"Profile"})})]})}),s.jsx(kd,{isActive:c.pathname.startsWith("/app/settings"),children:s.jsxs(De,{to:"/app/settings/profile",children:[s.jsx(vp,{children:s.jsx(rp,{})}),s.jsx(Ed,{children:s.jsx("span",{children:"Settings"})})]})})]})}):s.jsxs(s.Fragment,{children:[s.jsx(FC,{onClick:y,children:s.jsx(vt,{image:d.avatar,userName:d.fullName,status:d.status,showStatus:!0,showStatusCircle:!0,showUserName:!0})}),s.jsxs(qC,{children:[s.jsx(CC,{}),s.jsx(VC,{children:s.jsx(De,{to:"/app/settings/profile",children:s.jsx(rp,{})})})]})]})})}),s.jsx(vS,{isOpen:e,shouldAnimate:i,user:d,onLogout:b,onClose:()=>a(!1)})]})}):null},JC=h.div`
  width: 100%;
  position: relative;
`,HC=h.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 4565669;
  background-color: ${({theme:e})=>e.background.primary};
  padding: 1.5rem;
  @media (max-width: 1000px) {
    padding: 1rem;
  }
  @media (max-width: 700px) {
    padding: 0;
    padding-top: 1rem;
  }
`,PC=h.div`
  width: 100%;
  height: 100%;
  background-color: ${({theme:e})=>e.background.secondary};
  border-radius: 0.8rem;
  padding: 1rem 1.5rem 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({theme:e})=>e.border.primary};
   @media (max-width: 1000px) {
    padding: 0.5rem 1rem 0.5rem 0.5rem;
  }
   @media (max-width: 700px) {
    border-radius: 0;
    border: none;
  }
`,FC=h.div`
  width: max-content;
  padding-right: 2rem;
  border-radius: 3rem;
  padding: 0.5rem;
  padding-right: 2rem;
  cursor: pointer;
  &:hover {
    background-color: ${({theme:e})=>e.background.primary};
  }
`,qC=h.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,VC=h.div`
  a {
    color: ${({theme:e})=>e.text.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
  svg {
    width: 2.4rem;
  transition: transform 0.4s ease;

  }
  &:hover {
    background-color: ${({theme:e})=>e.background.primary};
    color: var(--blue);
    svg {
    transform: rotate(90deg);
    }
  }
  }
`;h.div`
  color: ${({theme:e})=>e.text.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
  
  svg {
    width: 2.4rem;
  }
  
  &:hover {
    background-color: ${({theme:e})=>e.background.primary};
    color: #ef4444;
  }
`;const XC=h.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  padding: 0.6rem 0;
`,kd=h.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    color: ${({isActive:e})=>e?({theme:a})=>a.text.primary:({theme:a})=>a.text.placeholder};
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`,vp=h.div`
  svg {
    color: inherit;
    width: 2.4rem;
  }
`,WC=h.div`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 100%;
  background-color: ${({theme:e})=>e.background.thirdly};
  margin-bottom: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 0.7px solid ${({theme:e})=>e.text.placeholder};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: ${({isActive:e})=>e?"1":"0.7"};
  }
  
  .placeholder {
    color: inherit;
    font-size: var(--text-sm);
    font-weight: 600;
  }
`,Ed=h.div`
  color: inherit;
  span {
    font-size: var(--text-xxs);
    line-height: 1;
  }
`,KC=({onClick:e,isOpen:a,user:i})=>{if(!a)return null;const f=m=>new Date(m).toLocaleDateString("en-US",{month:"long",year:"numeric"}),c=()=>i.isOnline?i.status==="idle"?"Idle":"Online":"Offline",d=()=>i.isOnline?i.status==="idle"?"#f2c100":"#43a25a":"#6b7280";return s.jsx(s.Fragment,{children:s.jsx(e7,{children:s.jsxs(t7,{children:[s.jsx(a7,{children:s.jsxs(r7,{children:[s.jsxs(i7,{children:[s.jsx(o7,{children:i.avatar?s.jsx("img",{src:i.avatar,alt:i.fullName}):s.jsx(s7,{children:i.fullName.charAt(0).toUpperCase()})}),s.jsx(f7,{})]}),s.jsxs(l7,{children:[s.jsx("h4",{children:i.fullName}),s.jsxs("span",{children:["@",i.username]}),s.jsxs(c7,{children:[s.jsx(u7,{color:d()}),s.jsx(d7,{children:c()})]})]})]})}),s.jsxs(h7,{children:[s.jsx(m7,{children:s.jsxs(g7,{children:[s.jsx(xp,{children:"Personal Info"}),s.jsx(xp,{children:"Mutual Friends"})]})}),s.jsxs(p7,{children:[s.jsxs(Td,{children:[s.jsx(Nd,{children:s.jsx(x5,{})}),s.jsxs(Id,{children:["@",i.username]})]}),i.jobTitle&&s.jsxs(Td,{children:[s.jsx(Nd,{children:s.jsx(m5,{})}),s.jsx(Id,{children:i.jobTitle})]}),s.jsxs(Td,{children:[s.jsx(Nd,{children:s.jsx(p5,{})}),s.jsxs(Id,{children:["Joined ",f(i.lastSeen)]})]})]}),i.biography&&s.jsx(y7,{children:s.jsx("p",{children:i.biography})})]}),s.jsx(n7,{onClick:e,children:s.jsx($0,{})})]})})})},e7=h.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000039;
  z-index: 234567890876543;
`,t7=h.div`
  width: 100%;
  height: 50rem;
  max-width: 70rem;
  background-color: ${({theme:e})=>e.background.secondary};
  border-radius: 2rem;
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  position: relative;
  border: 1px solid ${({theme:e})=>e.border.primary};
`,n7=h.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff39;
  color: var(--light);
  cursor: pointer;
  
  &:hover {
    background-color: #ffffff58;
  }
  
  svg {
    width: 2.2rem;
  }
`,a7=h.div`
  width: 100%;
  height: 13rem;
  background: var(--blue);
  margin-bottom: 16rem;
  position: relative;
`,r7=h.div`
  position: absolute;
  bottom: -16rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`,i7=h.div`
  width: 15rem;
  height: 15rem;
  border-radius: 100%;
  background-color: ${({theme:e})=>e.background.secondary};
  padding: 1rem;
  position: relative;
`,f7=h.div`
  width: 135%;
  height: 7rem;
  border-radius: 3rem;
  background-color: ${({theme:e})=>e.background.secondary};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
`,o7=h.div`
  width: 100%;
  height: 100%;
  background-color: ${({theme:e})=>e.background.secondary};
  border-radius: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 0%;
  }
`,s7=h.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-big);
  font-weight: 600;
  color: var(--light);
  background: ${({theme:e})=>e.background.thirdly};
  text-transform: uppercase;
`,l7=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
  
  h4 {
    font-size: var(--text-xxl);
    line-height: 1;
    color: ${({theme:e})=>e.text.primary};
    font-weight: 500;
  }
  
  span {
    font-size: var(--text-md);
    line-height: 1;
    color: ${({theme:e})=>e.text.secondary};
  }
`,c7=h.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,u7=h.div`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background-color: ${({color:e})=>e};
`,d7=h.span`
  font-size: var(--text-sm);
  color: ${({theme:e})=>e.text.secondary};
`,h7=h.div`
  width: 100%;
  max-height: 19rem;
  overflow: auto;
`,m7=h.div`
  background-color: ${({theme:e})=>e.background.secondary};
  border-bottom: 1px solid ${({theme:e})=>e.border.secondary};
  margin: 0 2rem;
  position: sticky;
  top: 0;
`,g7=h.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
`,xp=h.li`
  font-size: var(--text-md);
  color: ${({theme:e})=>e.text.thirdly};
  padding: 1rem 0;
  cursor: pointer;
  position: relative;
  
  &:hover {
    color: ${({theme:e})=>e.text.primary};
  }
  
  &:first-child::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${({theme:e})=>e.text.thirdly};
  }
`,p7=h.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
`,Td=h.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,Nd=h.div`
  color: ${({theme:e})=>e.text.thirdly};
  
  svg {
    width: 2rem;
  }
`,Id=h.div`
  color: ${({theme:e})=>e.text.thirdly};
  font-size: var(--text-md);
`,y7=h.div`
  padding: 0 2rem 2rem;
  
  p {
    font-size: var(--text-md);
    color: ${({theme:e})=>e.text.thirdly};
    line-height: 1.6;
  }
`,Ma=({items:e=[],top:a,left:i,right:f,bottom:c,isOpen:d=!1,onClose:m})=>{const y=g.useRef(null);return g.useEffect(()=>{const b=x=>{y.current&&!y.current.contains(x.target)&&m()};return d&&document.addEventListener("mousedown",b),()=>{document.removeEventListener("mousedown",b)}},[d,m]),s.jsx(b7,{ref:y,bottom:c,left:i,right:f,top:a,isOpen:d,children:s.jsx(w7,{children:s.jsx(v7,{isOpen:d,children:e.map((b,x)=>s.jsxs(x7,{isDanger:b.danger,onClick:b.onClick,children:[b.icon&&s.jsx(M7,{isDanger:b.danger,children:b.icon}),s.jsx(j7,{isDanger:b.danger,children:s.jsx("span",{children:b.label})})]},x))})})})},b7=h.div`
  min-width: 20rem;
  overflow: hidden;
  position: absolute;
  top: ${({top:e})=>e?`${e}%`:"unset"};
  left: ${({left:e})=>e?`${e}%`:"unset"};
  right: ${({right:e})=>e?`${e}%`:"unset"};
  bottom: ${({bottom:e})=>e?`${e}%`:"unset"};
  z-index: 233546578;
  
  /* Control visibility and pointer events */
  opacity: ${({isOpen:e})=>e?1:0};
  pointer-events: ${({isOpen:e})=>e?"auto":"none"};
  transition: opacity 0.2s ease;
`,w7=h.div`
  width: 100%;
  height: max-content;
`,v7=h.div`
  transform: ${({isOpen:e})=>e?"translateY(0)":"translateY(-100%)"};
  background-color: ${({theme:e})=>e.background.thirdly};
  border-radius: 8px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  transition: transform 0.2s ease;
`,x7=h.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 1rem 3rem 1rem 0.6rem;
  cursor: pointer;
  border-radius: 0.6rem;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${({isDanger:e})=>e?"#ff99a333":({theme:a})=>a.background.secondary};
  }
`,M7=h.div`
  color: ${({isDanger:e})=>e?"#ff99a4":({theme:a})=>a.text.primary};
  display: flex;
  align-items: center;
  
  svg {
    width: 1.6rem;
  }
`,j7=h.div`
  span {
    font-size: var(--text-md);
    color: ${({isDanger:e})=>e?"#ff99a4":({theme:a})=>a.text.primary};
  }
`,L7=({recipient:e})=>{const[a,i]=g.useState(!1),[f,c]=g.useState(!1),{removeFriend:d,blockUser:m}=xa(),{setCurrentConversation:y}=er(),b=()=>{i(!1)},x=()=>{c(!0)},v=async()=>{try{await d(e._id),y(null),c(!1)}catch(S){console.error("Failed to remove friend:",S)}},M=async()=>{try{await m(e._id),y(null),c(!1)}catch(S){console.error("Failed to block user:",S)}},j=()=>{alert("Clear messages functionality not implemented yet"),c(!1)},k=[{label:"View Profile",icon:s.jsx(Oy,{}),onClick:()=>{i(!0),c(!1)}},{label:"Clear messages",icon:s.jsx(Nf,{}),onClick:j},{label:"Remove Friend",icon:s.jsx(zy,{}),onClick:v},{label:"Block User",icon:s.jsx(w9,{}),danger:!0,onClick:M}],I=()=>e.isOnline?e.status==="idle"?"idle":"online":"offline";return s.jsxs(s.Fragment,{children:[s.jsxs(S7,{children:[s.jsx(C7,{onClick:()=>i(!0),children:s.jsx(vt,{image:e.avatar,showStatus:!0,showStatusCircle:!0,showUserName:!0,userName:e.fullName,status:I()})}),s.jsx(k7,{children:s.jsx(E7,{onClick:x,children:s.jsx(Ny,{})})}),s.jsx(Ma,{onClose:()=>c(!1),isOpen:f,right:"0",top:"100",items:k})]}),s.jsx(KC,{isOpen:a,onClick:b,user:e})]})},S7=h.header`
  width: 100%;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid ${({theme:e})=>e.border.secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  background-color: ${({theme:e})=>e.background.secondary};
  
  @media (max-width: 1000px) {
    padding: 0.5rem 1rem;
  }
`,C7=h.div`
  width: max-content;
  border-radius: 3rem;
  cursor: pointer;
  padding: 0.7em 2rem 0.7em 0.7em;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: ${({theme:e})=>e.background.primary};
  }
`;h.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  
  @media (max-width: 600px) {
    display: none;
  }
`;h.span`
  font-size: var(--text-sm);
  color: ${({theme:e})=>e.text.placeholder};
  line-height: 1;
`;const k7=h.div`
  width: max-content;
  display: flex;
  align-items: center;
  gap: 2rem;
`,E7=h.div`
  cursor: pointer;
  color: ${({theme:e})=>e.text.placeholder};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
  
  svg {
    width: 3rem;
  }
  
  &:hover {
    color: ${({theme:e})=>e.text.primary};
    background-color: ${({theme:e})=>e.background.primary};
  }
`,T7=({group:e,memberCount:a,userRole:i,isOpen:f,onClose:c})=>{const[d,m]=g.useState(!1),[y,b]=g.useState(e.name),[x,v]=g.useState(e.description||""),M=i==="admin"||i==="moderator",j=async()=>{try{console.log("Saving changes:",{name:y,description:x}),m(!1)}catch(S){console.error("Failed to update group:",S)}},k=()=>{b(e.name),v(e.description||""),m(!1)},I=S=>new Date(S).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return s.jsx(Gf,{title:d?"Edit Group Info":"Group Info",isOpen:f,onClose:c,children:s.jsxs(N7,{children:[s.jsxs(I7,{children:[s.jsx(D7,{children:e.avatar?s.jsx(vt,{image:e.avatar,userName:e.name,size:80,isGroup:!0}):s.jsx(A7,{children:s.jsx(Ml,{})})}),d?s.jsxs(_7,{children:[s.jsxs(Mp,{children:[s.jsx(jp,{children:"Group Name"}),s.jsx(Y7,{type:"text",value:y,onChange:S=>b(S.target.value),placeholder:"Enter group name"})]}),s.jsxs(Mp,{children:[s.jsx(jp,{children:"Description"}),s.jsx(Q7,{value:x,onChange:S=>v(S.target.value),placeholder:"Enter group description (optional)",rows:3})]}),s.jsxs(G7,{children:[s.jsx(wt,{variant:"cancel",title:"Cancel",onClick:k}),s.jsx(wt,{variant:"primary",title:"Save Changes",onClick:j})]})]}):s.jsxs(z7,{children:[s.jsxs(R7,{children:[s.jsx(O7,{children:e.name}),M&&s.jsx(B7,{onClick:()=>m(!0),children:s.jsx(x9,{})})]}),e.description&&s.jsx(U7,{children:e.description})]})]}),!d&&s.jsxs($7,{children:[s.jsxs(ps,{children:[s.jsx(ys,{children:s.jsx(Ry,{})}),s.jsxs(bs,{children:[s.jsx(ws,{children:"Members"}),s.jsx(vs,{children:a})]})]}),s.jsxs(ps,{children:[s.jsx(ys,{children:s.jsx(H5,{})}),s.jsxs(bs,{children:[s.jsx(ws,{children:"Created"}),s.jsx(vs,{children:I(e.createdAt)})]})]}),s.jsxs(ps,{children:[s.jsx(ys,{children:e.isPrivate?s.jsx(g9,{}):s.jsx(l9,{})}),s.jsxs(bs,{children:[s.jsx(ws,{children:"Type"}),s.jsx(vs,{children:e.isPrivate?"Private Group":"Public Group"})]})]}),s.jsxs(ps,{children:[s.jsx(ys,{}),s.jsxs(bs,{children:[s.jsx(ws,{children:"Created by"}),s.jsx(vs,{children:e.createdBy.fullName})]})]})]}),!d&&s.jsx(Z7,{children:s.jsxs(J7,{children:[s.jsx("h4",{children:"Group ID"}),s.jsx(H7,{children:e._id})]})})]})})},N7=h.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,I7=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
`,D7=h.div`
  position: relative;
`,A7=h.div`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.background.thirdly};
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 4rem;
    height: 4rem;
    color: ${({theme:e})=>e.text.primary};
  }
`,z7=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
`,R7=h.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,O7=h.h2`
  font-size: var(--text-xxl);
  color: ${({theme:e})=>e.text.primary};
  font-weight: 600;
  margin: 0;
`,B7=h.button`
  width: 3.2rem;
  height: 3.2rem;
  border: none;
  background-color: ${({theme:e})=>e.background.secondary};
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({theme:e})=>e.text.placeholder};
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${({theme:e})=>e.background.primary};
    color: ${({theme:e})=>e.text.primary};
  }
  
  svg {
    width: 1.8rem;
    height: 1.8rem;
  }
`,U7=h.p`
  font-size: var(--text-md);
  color: ${({theme:e})=>e.text.secondary};
  line-height: 1.5;
  margin: 0;
`,_7=h.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Mp=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`,jp=h.label`
  font-size: var(--text-sm);
  font-weight: 600;
  color: ${({theme:e})=>e.text.secondary};
`,Y7=h.input`
  width: 100%;
  padding: 1rem 1.5rem;
  border: 1px solid ${({theme:e})=>e.border.secondary};
  border-radius: 0.8rem;
  background-color: ${({theme:e})=>e.background.secondary};
  color: ${({theme:e})=>e.text.primary};
  font-size: var(--text-md);
  outline: none;
  transition: border-color 0.2s ease;
  
  &:focus {
    border-color: var(--blue);
  }
  
  &::placeholder {
    color: ${({theme:e})=>e.text.placeholder};
  }
`,Q7=h.textarea`
  width: 100%;
  padding: 1rem 1.5rem;
  border: 1px solid ${({theme:e})=>e.border.secondary};
  border-radius: 0.8rem;
  background-color: ${({theme:e})=>e.background.secondary};
  color: ${({theme:e})=>e.text.primary};
  font-size: var(--text-md);
  outline: none;
  resize: vertical;
  font-family: inherit;
  transition: border-color 0.2s ease;
  
  &:focus {
    border-color: var(--blue);
  }
  
  &::placeholder {
    color: ${({theme:e})=>e.text.placeholder};
  }
`,G7=h.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
`,$7=h.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,ps=h.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background-color: ${({theme:e})=>e.background.secondary};
  border-radius: 0.8rem;
`,ys=h.div`
  width: 4rem;
  height: 4rem;
  border-radius: 0.8rem;
  background-color: ${({theme:e})=>e.background.thirdly};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.text.primary};
  
  svg {
    width: 2rem;
    height: 2rem;
  }
`,bs=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`,ws=h.div`
  font-size: var(--text-sm);
  color: ${({theme:e})=>e.text.placeholder};
  font-weight: 500;
`,vs=h.div`
  font-size: var(--text-md);
  color: ${({theme:e})=>e.text.primary};
  font-weight: 600;
`,Z7=h.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,J7=h.div`
  h4 {
    font-size: var(--text-sm);
    color: ${({theme:e})=>e.text.placeholder};
    font-weight: 600;
    margin: 0 0 0.5rem 0;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`,H7=h.div`
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: var(--text-sm);
  color: ${({theme:e})=>e.text.secondary};
  background-color: ${({theme:e})=>e.background.secondary};
  padding: 0.8rem 1rem;
  border-radius: 0.6rem;
  word-break: break-all;
`,a3=g.createContext(void 0),P7=({children:e})=>{const[a,i]=g.useState([]),[f,c]=g.useState({}),[d,m]=g.useState({}),[y,b]=g.useState(null),[x,v]=g.useState(!1),[M,j]=g.useState(null),{user:k,isAuthenticated:I}=pt(),{socket:S,joinGroup:N,leaveGroup:R}=$f(),A=g.useCallback(async()=>{var X;try{v(!0),j(null);const ae=await jn.getUserGroups();ae.success&&(i(ae.data.chatGroups||[]),(X=ae.data.chatGroups)==null||X.forEach(fe=>{N&&N(fe._id)}))}catch(ae){j(ae.message)}finally{v(!1)}},[N]);g.useEffect(()=>{I&&a.length===0&&!x&&A()},[I,a.length,x,A]),g.useEffect(()=>{if(!S||!I)return;const X=B=>{const P={_id:B.messageId||`temp_${Date.now()}`,senderId:{_id:B.senderId,username:B.senderUsername,fullName:B.senderFullName||B.senderUsername,avatar:B.senderAvatar},chatGroupId:B.groupId,content:B.content,type:B.type,createdAt:B.timestamp,isEdited:!1,readBy:[]};m(q=>{const K=q[B.groupId];return{...q,[B.groupId]:{groupId:B.groupId,messages:[...(K==null?void 0:K.messages)||[],P],hasMore:(K==null?void 0:K.hasMore)||!1,loading:!1}}})},ae=B=>{c(P=>({...P,[B.groupId]:[...P[B.groupId]||[],B.member]}))},fe=B=>{c(P=>({...P,[B.groupId]:(P[B.groupId]||[]).filter(q=>q.userId._id!==B.userId)}))};return S.on("new_group_message",X),S.on("group_member_joined",ae),S.on("group_member_left",fe),()=>{S.off("new_group_message",X),S.off("group_member_joined",ae),S.off("group_member_left",fe)}},[S,I]);const _=g.useCallback(async X=>{try{j(null);const ae=await jn.getGroupDetails(X);ae.success&&c(fe=>({...fe,[X]:ae.data.members||[]}))}catch(ae){j(ae.message)}},[]),T=g.useCallback(async(X,ae=1)=>{var fe;try{m(P=>{var q;return{...P,[X]:{groupId:X,messages:((q=P[X])==null?void 0:q.messages)||[],hasMore:!0,loading:!0}}});const B=await jn.getGroupMessages(X,ae,50);if(B.success){const P=B.data.messages||[],q=((fe=B.data.pagination)==null?void 0:fe.hasMore)||!1;m(K=>{var oe;return{...K,[X]:{groupId:X,messages:ae===1?P:[...P,...((oe=K[X])==null?void 0:oe.messages)||[]],hasMore:q,loading:!1}}})}}catch{m(P=>{var q;return{...P,[X]:{groupId:X,messages:((q=P[X])==null?void 0:q.messages)||[],hasMore:!1,loading:!1}}})}},[]),C=g.useCallback(async(X,ae,fe="text")=>{try{const B={_id:`temp_${Date.now()}`,senderId:{_id:(k==null?void 0:k.id)||"",username:(k==null?void 0:k.username)||"",fullName:(k==null?void 0:k.fullName)||"",avatar:k==null?void 0:k.avatar},chatGroupId:X,content:ae,type:fe,createdAt:new Date,isEdited:!1,readBy:[]};m(q=>{var K,oe;return{...q,[X]:{...q[X],groupId:X,messages:[...((K=q[X])==null?void 0:K.messages)||[],B],hasMore:((oe=q[X])==null?void 0:oe.hasMore)||!1,loading:!1}}}),S&&S.emit("send_group_message",{groupId:X,content:ae,type:fe});const P=await jn.sendGroupMessage(X,ae,fe);if(P.success){const q=P.data.message;m(K=>{var oe,Ae;return{...K,[X]:{...K[X],groupId:X,messages:[...((oe=K[X])==null?void 0:oe.messages.filter(ye=>ye._id!==B._id))||[],q],hasMore:((Ae=K[X])==null?void 0:Ae.hasMore)||!1,loading:!1}}})}}catch(B){throw m(P=>{var q;return{...P,[X]:{...P[X],messages:((q=P[X])==null?void 0:q.messages.filter(K=>K._id!==`temp_${Date.now()}`))||[]}}}),B}},[S,k]),D=g.useCallback(async(X,ae,fe=!1)=>{try{j(null);const B=await jn.createGroup(X,ae,fe);if(B.success)return await A(),B.data.chatGroup}catch(B){throw j(B.message),B}},[A]),G=g.useCallback(async X=>{try{j(null),(await jn.joinGroup(X)).success&&(N&&N(X),await A())}catch(ae){throw j(ae.message),ae}},[N,A]),F=g.useCallback(async X=>{try{j(null),(await jn.leaveGroup(X)).success&&(R&&R(X),i(fe=>fe.filter(B=>B._id!==X)),b(null))}catch(ae){throw j(ae.message),ae}},[R]),me=g.useCallback(async(X,ae)=>{try{j(null),(await jn.addMember(X,ae)).success&&await _(X)}catch(fe){throw j(fe.message),fe}},[_]),Ke=g.useCallback(async(X,ae)=>{try{j(null),(await jn.removeMember(X,ae)).success&&await _(X)}catch(fe){throw j(fe.message),fe}},[_]),ct=g.useCallback(async(X,ae,fe)=>{try{j(null),(await jn.updateMemberRole(X,ae,fe)).success&&await _(X)}catch(B){throw j(B.message),B}},[_]),Ge={groups:a,groupMembers:f,groupConversations:d,currentGroup:y,loading:x,error:M,setCurrentGroup:b,loadGroups:A,loadGroupMembers:_,loadGroupMessages:T,sendGroupMessage:C,createGroup:D,joinGroup:G,leaveGroup:F,addMember:me,removeMember:Ke,updateMemberRole:ct};return s.jsx(a3.Provider,{value:Ge,children:e})},ja=()=>{const e=g.useContext(a3);if(!e)throw new Error("useGroups must be used within a GroupsProvider");return e},F7=({group:e,isOpen:a,onClose:i})=>{const[f,c]=g.useState(""),[d,m]=g.useState([]),[y,b]=g.useState([]),[x,v]=g.useState(new Set),[M,j]=g.useState(!1),[k,I]=g.useState(""),{addMember:S,groupMembers:N}=ja(),{friends:R}=xa(),A=new Set((N[e._id]||[]).map(C=>C.userId._id));g.useEffect(()=>{if(a){const C=R.map(D=>({_id:D.friendId._id,username:D.friendId.username,fullName:D.friendId.fullName,avatar:D.friendId.avatar,status:D.friendId.status})).filter(D=>!A.has(D._id));b(C),m(C),c(""),v(new Set),I("")}},[a,R,N,e._id]),g.useEffect(()=>{if(!f.trim())m(y);else{const C=y.filter(D=>D.fullName.toLowerCase().includes(f.toLowerCase())||D.username.toLowerCase().includes(f.toLowerCase()));m(C)}},[f,y]);const _=async C=>{try{I(""),await S(e._id,C),v(D=>new Set([...D,C]))}catch(D){I(D.message||"Failed to add member")}},T=()=>{c(""),m([]),v(new Set),I(""),i()};return s.jsx(Gf,{title:`Add Members to ${e.name}`,isOpen:a,onClose:T,children:s.jsxs(q7,{children:[s.jsx(V7,{children:s.jsxs(X7,{children:[s.jsx(W7,{children:s.jsx(Q0,{})}),s.jsx(K7,{children:s.jsx("input",{type:"text",placeholder:"Search your friends to add",value:f,onChange:C=>c(C.target.value)})})]})}),k&&s.jsx(e8,{children:k}),s.jsxs(t8,{children:[s.jsx(n8,{children:s.jsx("h4",{children:d.length===0&&f?"No friends found":d.length===0&&!f?"No friends available to add":`${d.length} friend${d.length!==1?"s":""} available`})}),d.length===0?s.jsx(d8,{children:f?s.jsxs(Lp,{children:['No friends found matching "',f,'". Try a different search term.']}):s.jsx(Lp,{children:"All your friends are already members of this group, or you don't have any friends to add yet."})}):s.jsx(a8,{children:d.map(C=>s.jsxs(r8,{children:[s.jsxs(i8,{children:[s.jsx(vt,{image:C.avatar,userName:C.fullName,status:"offline",size:40}),s.jsxs(f8,{children:[s.jsx(o8,{children:C.fullName}),s.jsxs(s8,{children:["@",C.username]})]})]}),s.jsx(l8,{children:x.has(C._id)?s.jsxs(u8,{children:[s.jsx(Sy,{}),s.jsx("span",{children:"Added"})]}):s.jsxs(c8,{onClick:()=>_(C._id),disabled:M,children:[s.jsx(G0,{}),s.jsx("span",{children:"Add"})]})})]},C._id))})]}),s.jsx(h8,{children:s.jsx(wt,{variant:"primary",title:"Done",onClick:T})})]})})},q7=h.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,V7=h.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,X7=h.div`
  position: relative;
  display: flex;
  align-items: center;
`,W7=h.div`
  position: absolute;
  left: 1.2rem;
  z-index: 1;
  color: ${({theme:e})=>e.text.placeholder};
  
  svg {
    width: 2rem;
    height: 2rem;
  }
`,K7=h.div`
  width: 100%;
  
  input {
    width: 100%;
    height: 4.5rem;
    padding: 0 1.5rem 0 4.5rem;
    border: 1px solid ${({theme:e})=>e.border.secondary};
    border-radius: 0.8rem;
    background-color: ${({theme:e})=>e.background.secondary};
    color: ${({theme:e})=>e.text.primary};
    font-size: var(--text-md);
    outline: none;
    transition: border-color 0.2s ease;
    
    &:focus {
      border-color: var(--blue);
    }
    
    &::placeholder {
      color: ${({theme:e})=>e.text.placeholder};
    }
  }
`,e8=h.div`
  background-color: #fee2e2;
  border: 1px solid #fecaca;
  color: #dc2626;
  padding: 1rem 1.5rem;
  border-radius: 0.8rem;
  font-size: var(--text-sm);
  text-align: center;
`,t8=h.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,n8=h.div`
  h4 {
    font-size: var(--text-md);
    color: ${({theme:e})=>e.text.secondary};
    font-weight: 600;
    margin: 0;
  }
`,a8=h.div`
  display: flex;
  flex-direction: column;
  max-height: 40rem;
  overflow-y: auto;
  gap: 0.5rem;
`,r8=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem;
  border-radius: 0.8rem;
  background-color: ${({theme:e})=>e.background.secondary};
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: ${({theme:e})=>e.background.primary};
  }
`,i8=h.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
  min-width: 0;
`,f8=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  min-width: 0;
`,o8=h.div`
  font-size: var(--text-md);
  color: ${({theme:e})=>e.text.primary};
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,s8=h.div`
  font-size: var(--text-sm);
  color: ${({theme:e})=>e.text.secondary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,l8=h.div`
  display: flex;
  align-items: center;
`,c8=h.button`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.8rem 1.2rem;
  background-color: var(--blue);
  color: white;
  border: none;
  border-radius: 0.6rem;
  cursor: pointer;
  font-size: var(--text-sm);
  font-weight: 500;
  transition: background-color 0.2s ease;
  
  &:hover:not(:disabled) {
    background-color: var(--dark-blue);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  svg {
    width: 1.6rem;
    height: 1.6rem;
  }
`,u8=h.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.8rem 1.2rem;
  background-color: ${({theme:e})=>e.background.thirdly};
  color: ${({theme:e})=>e.text.secondary};
  border: 1px solid ${({theme:e})=>e.border.secondary};
  border-radius: 0.6rem;
  font-size: var(--text-sm);
  font-weight: 500;
  
  svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--success-500);
  }
`,d8=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
  text-align: center;
`,Lp=h.div`
  color: ${({theme:e})=>e.text.secondary};
  font-size: var(--text-md);
  line-height: 1.5;
`,h8=h.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 1rem;
  border-top: 1px solid ${({theme:e})=>e.border.secondary};
`,m8=({group:e,memberCount:a,userRole:i,onToggleMembersSidebar:f})=>{const[c,d]=g.useState(!1),[m,y]=g.useState(!1),[b,x]=g.useState(!1),{leaveGroup:v}=ja(),M=async()=>{try{await v(e._id),d(!1)}catch(I){console.error("Failed to leave group:",I)}},j=i==="admin"||i==="moderator",k=[{label:"Group Info",icon:s.jsx(h9,{}),onClick:()=>{y(!0),d(!1)}},...j?[{label:"Add Members",icon:s.jsx(D9,{}),onClick:()=>{x(!0),d(!1)}}]:[],{label:"Group Settings",icon:s.jsx(Tf,{}),onClick:()=>{d(!1),alert("Group settings not implemented yet")}},{label:"Leave Group",icon:s.jsx(Ty,{}),danger:!0,onClick:M}];return s.jsxs(s.Fragment,{children:[s.jsxs(g8,{children:[s.jsxs(p8,{onClick:()=>y(!0),children:[s.jsx(y8,{children:e.avatar?s.jsx(vt,{image:e.avatar,userName:e.name,size:40,isGroup:!0}):s.jsx(b8,{children:s.jsx(Ml,{})})}),s.jsxs(w8,{children:[s.jsx(v8,{children:e.name}),s.jsxs(x8,{children:[a," member",a!==1?"s":"",e.isPrivate&&s.jsx(M8,{children:"Private"})]})]})]}),s.jsxs(j8,{children:[s.jsx(Sp,{onClick:f,title:"Show members",children:s.jsx(R9,{})}),s.jsx(Sp,{onClick:()=>d(!0),title:"Group menu",children:s.jsx(Ny,{})})]}),s.jsx(Ma,{onClose:()=>d(!1),isOpen:c,right:"0",top:"100",items:k})]}),m&&s.jsx(T7,{group:e,memberCount:a,userRole:i,isOpen:m,onClose:()=>y(!1)}),b&&j&&s.jsx(F7,{group:e,isOpen:b,onClose:()=>x(!1)})]})},g8=h.header`
  width: 100%;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid ${({theme:e})=>e.border.secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  background-color: ${({theme:e})=>e.background.secondary};
  
  @media (max-width: 1000px) {
    padding: 0.5rem 1rem;
  }
`,p8=h.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.8rem;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: ${({theme:e})=>e.background.primary};
  }
`,y8=h.div`
  flex-shrink: 0;
`,b8=h.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.background.thirdly};
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 2rem;
    height: 2rem;
    color: ${({theme:e})=>e.text.primary};
  }
`,w8=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  min-width: 0;
`,v8=h.h3`
  font-size: var(--text-lg);
  font-weight: 600;
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,x8=h.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: var(--text-sm);
  color: ${({theme:e})=>e.text.secondary};
`,M8=h.span`
  background-color: var(--blue);
  color: white;
  padding: 0.2rem 0.6rem;
  border-radius: 1rem;
  font-size: var(--text-xs);
  font-weight: 500;
`,j8=h.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Sp=h.button`
  width: 4rem;
  height: 4rem;
  border: none;
  background: none;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({theme:e})=>e.text.placeholder};
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${({theme:e})=>e.background.primary};
    color: ${({theme:e})=>e.text.primary};
  }
  
  svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`;function S0(e){return[].concat(e)}function V0(e){return e.startsWith(":")}function r3(e){return Cl(e)&&(e==="*"||e.length>1&&":>~.+*".includes(e.slice(0,1))||s3(e))}function i3(e,a){return(Cl(a)||typeof a=="number")&&!o3(e)&&!V0(e)&&!f3(e)}function f3(e){return e.startsWith("@media")}function L8(e){return e==="."}function o3(e){return e==="--"}function Cl(e){return e+""===e}function s3(e){return Cl(e)&&(e.startsWith("&")||V0(e))}function tl(e,a=""){return e.filter(Boolean).join(a)}function l3(e,a){let i=0;if(a.length===0)return i.toString();for(let f=0;f<a.length;f++){const c=a.charCodeAt(f);i=(i<<5)-i+c,i=i&i}return`${e??"cl"}_${i.toString(36)}`}function S8(e,a){return e==="content"?`"${a}"`:a}function C8(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function Cp(e,a){return`${e}:${a}`}function k8(e){return e?`.${e}`:""}function E8(e,a){return e?`${e}
${a}`:a}var c3=class u3{constructor(a,i,f,c){this.sheet=a,this.property=i,this.value=f,this.selector=c,this.property=i,this.value=f,this.joined=Cp(i,f);const d=this.selector.preconditions.concat(this.selector.postconditions);this.hash=this.selector.hasConditions?this.selector.scopeClassName:l3(this.sheet.name,this.joined),this.key=tl([this.joined,d,this.hash])}toString(){let a=C0(this.selector.preconditions,{right:this.hash});return a=C0(this.selector.postconditions,{left:a}),`${a} {${u3.genRule(this.property,this.value)}}`}static genRule(a,i){const f=C8(a);return Cp(f,S8(a,i))+";"}};function C0(e,{left:a="",right:i=""}={}){const f=e.reduce((c,d)=>V0(d)?c+d:s3(d)?c+d.slice(1):tl([c,d]," "),a);return tl([f,k8(i)]," ")}var T8=class Gs{constructor(a,i=null,{preconditions:f,postconditions:c}={}){this.sheet=a,this.preconditions=[],this.scopeClassName=null,this.scopeName=null,this.postconditions=[],this.preconditions=f?S0(f):[],this.postconditions=c?S0(c):[],this.setScope(i)}setScope(a){return a?(this.scopeClassName||(this.scopeName=a,this.scopeClassName=l3(this.sheet.name,a+this.sheet.count)),this):this}get hasConditions(){return this.preconditions.length>0||this.postconditions.length>0}addScope(a){return new Gs(this.sheet,a,{preconditions:this.preconditions,postconditions:this.postconditions})}addPrecondition(a){return new Gs(this.sheet,this.scopeClassName,{postconditions:this.postconditions,preconditions:this.preconditions.concat(a)})}addPostcondition(a){return new Gs(this.sheet,this.scopeClassName,{preconditions:this.preconditions,postconditions:this.postconditions.concat(a)})}createRule(a,i){return new c3(this.sheet,a,i,this)}},N8=class{constructor(e,a){this.name=e,this.rootNode=a,this.storedStyles={},this.storedClasses={},this.style="",this.count=0,this.id=`flairup-${e}`,this.styleTag=this.createStyleTag()}getStyle(){return this.style}append(e){this.style=E8(this.style,e)}apply(){this.count++,this.styleTag&&(this.styleTag.innerHTML=this.style)}isApplied(){return!!this.styleTag}createStyleTag(){if(typeof document>"u"||this.isApplied()||this.rootNode===null)return this.styleTag;const e=document.createElement("style");return e.type="text/css",e.id=this.id,(this.rootNode??document.head).appendChild(e),e}addRule(e){const a=this.storedClasses[e.key];return Cl(a)?a:(this.storedClasses[e.key]=e.hash,this.storedStyles[e.hash]=[e.property,e.value],this.append(e.toString()),e.hash)}};function X0(e,a){for(const i in e)a(i.trim(),e[i])}function ge(...e){const a=e.reduce((i,f)=>(f instanceof Set?i.push(...f):typeof f=="string"?i.push(f):Array.isArray(f)?i.push(ge(...f)):typeof f=="object"&&Object.entries(f).forEach(([c,d])=>{d&&i.push(c)}),i),[]);return tl(a," ").trim()}function I8(e,a){const i=new N8(e,a);return{create:f,getStyle:i.getStyle.bind(i),isApplied:i.isApplied.bind(i)};function f(c){const d={};return d3(i,c,new T8(i)).forEach(([y,b,x])=>{kl(i,b,x).forEach(v=>{m(y,v)})}),i.apply(),d;function m(y,b){d[y]=d[y]??new Set,d[y].add(b)}}}function d3(e,a,i){const f=[];return X0(a,(c,d)=>{if(r3(c))return d3(e,d,i.addPrecondition(c)).forEach(m=>f.push(m));f.push([c,a[c],i.addScope(c)])}),f}function kl(e,a,i){const f=new Set;return X0(a,(c,d)=>{let m=[];if(r3(c))m=kl(e,d,i.addPostcondition(c));else if(L8(c))m=S0(d);else if(f3(c))m=A8(e,d,c,i);else if(o3(c))m=D8(e,d,i);else if(i3(c,d)){const y=i.createRule(c,d);e.addRule(y),f.add(y.hash)}return h3(m,f)}),f}function h3(e,a){return e.forEach(i=>a.add(i)),a}function D8(e,a,i){const f=new Set,c=[];if(X0(a,(d,m)=>{if(i3(d,m)){c.push(c3.genRule(d,m));return}const y=kl(e,m??{},i);h3(y,f)}),!i.scopeClassName)return f;if(c.length){const d=c.join(" ");e.append(`${C0(i.preconditions,{right:i.scopeClassName})} {${d}}`)}return f.add(i.scopeClassName),f}function A8(e,a,i,f){e.append(i+" {");const c=kl(e,a,f);return e.append("}"),c}function Be(){return Be=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var i=arguments[a];for(var f in i)Object.prototype.hasOwnProperty.call(i,f)&&(e[f]=i[f])}return e},Be.apply(this,arguments)}function z8(e,a){e.prototype=Object.create(a.prototype),e.prototype.constructor=e,k0(e,a)}function k0(e,a){return k0=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(f,c){return f.__proto__=c,f},k0(e,a)}function m3(e,a){if(e==null)return{};var i={},f=Object.keys(e),c,d;for(d=0;d<f.length;d++)c=f[d],!(a.indexOf(c)>=0)&&(i[c]=e[c]);return i}function R8(e,a){if(e){if(typeof e=="string")return kp(e,a);var i=Object.prototype.toString.call(e).slice(8,-1);if(i==="Object"&&e.constructor&&(i=e.constructor.name),i==="Map"||i==="Set")return Array.from(e);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return kp(e,a)}}function kp(e,a){(a==null||a>e.length)&&(a=e.length);for(var i=0,f=new Array(a);i<a;i++)f[i]=e[i];return f}function O8(e,a){var i=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(i)return(i=i.call(e)).next.bind(i);if(Array.isArray(e)||(i=R8(e))||a){i&&(e=i);var f=0;return function(){return f>=e.length?{done:!0}:{done:!1,value:e[f++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ue;(function(e){e.hiddenOnSearch="epr-hidden-on-search",e.searchActive="epr-search-active",e.hidden="epr-hidden",e.visible="epr-visible",e.active="epr-active",e.emoji="epr-emoji",e.category="epr-emoji-category",e.label="epr-emoji-category-label",e.categoryContent="epr-emoji-category-content",e.emojiHasVariations="epr-emoji-has-variations",e.scrollBody="epr-body",e.emojiList="epr-emoji-list",e.external="__EmojiPicker__",e.emojiPicker="EmojiPickerReact",e.open="epr-open",e.vertical="epr-vertical",e.horizontal="epr-horizontal",e.variationPicker="epr-emoji-variation-picker",e.darkTheme="epr-dark-theme",e.autoTheme="epr-auto-theme"})(ue||(ue={}));function gt(){for(var e=arguments.length,a=new Array(e),i=0;i<e;i++)a[i]=arguments[i];return a.map(function(f){return"."+f}).join("")}var Re=I8("epr",null),$s={display:"none",opacity:"0",pointerEvents:"none",visibility:"hidden",overflow:"hidden"},W0=Re.create({hidden:Be({".":ue.hidden},$s)}),B8=g.memo(function(){return g.createElement("style",{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:Re.getStyle()}})}),tr=Re.create({".epr-main":{":has(input:not(:placeholder-shown))":{categoryBtn:{":hover":{opacity:"1",backgroundPositionY:"var(--epr-category-navigation-button-size)"}},hiddenOnSearch:Be({".":ue.hiddenOnSearch},$s)},":has(input(:placeholder-shown))":{visibleOnSearchOnly:$s}},hiddenOnReactions:{transition:"all 0.5s ease-in-out"},".epr-reactions":{hiddenOnReactions:{height:"0px",width:"0px",opacity:"0",pointerEvents:"none",overflow:"hidden"}},".EmojiPickerReact:not(.epr-search-active)":{categoryBtn:{":hover":{opacity:"1",backgroundPositionY:"var(--epr-category-navigation-button-size)"},"&.epr-active":{opacity:"1",backgroundPositionY:"var(--epr-category-navigation-button-size)"}},visibleOnSearchOnly:Be({".":"epr-visible-on-search-only"},$s)}});function va(e,a){var i,f;return{".epr-dark-theme":(i={},i[e]=a,i),".epr-auto-theme":(f={},f[e]={"@media (prefers-color-scheme: dark)":a},f)}}function g3(e,a){var i,f,c=(i=e.customEmojis)!=null?i:[],d=(f=a.customEmojis)!=null?f:[];return e.open===a.open&&e.emojiVersion===a.emojiVersion&&e.reactionsDefaultOpen===a.reactionsDefaultOpen&&e.searchPlaceHolder===a.searchPlaceHolder&&e.searchPlaceholder===a.searchPlaceholder&&e.defaultSkinTone===a.defaultSkinTone&&e.skinTonesDisabled===a.skinTonesDisabled&&e.autoFocusSearch===a.autoFocusSearch&&e.emojiStyle===a.emojiStyle&&e.theme===a.theme&&e.suggestedEmojisMode===a.suggestedEmojisMode&&e.lazyLoadEmojis===a.lazyLoadEmojis&&e.className===a.className&&e.height===a.height&&e.width===a.width&&e.style===a.style&&e.searchDisabled===a.searchDisabled&&e.skinTonePickerLocation===a.skinTonePickerLocation&&c.length===d.length}var U8=["1f44d","2764-fe0f","1f603","1f622","1f64f","1f44e","1f621"],If;(function(e){e.RECENT="recent",e.FREQUENT="frequent"})(If||(If={}));var Qt;(function(e){e.NATIVE="native",e.APPLE="apple",e.TWITTER="twitter",e.GOOGLE="google",e.FACEBOOK="facebook"})(Qt||(Qt={}));var Df;(function(e){e.DARK="dark",e.LIGHT="light",e.AUTO="auto"})(Df||(Df={}));var un;(function(e){e.NEUTRAL="neutral",e.LIGHT="1f3fb",e.MEDIUM_LIGHT="1f3fc",e.MEDIUM="1f3fd",e.MEDIUM_DARK="1f3fe",e.DARK="1f3ff"})(un||(un={}));var ce;(function(e){e.SUGGESTED="suggested",e.CUSTOM="custom",e.SMILEYS_PEOPLE="smileys_people",e.ANIMALS_NATURE="animals_nature",e.FOOD_DRINK="food_drink",e.TRAVEL_PLACES="travel_places",e.ACTIVITIES="activities",e.OBJECTS="objects",e.SYMBOLS="symbols",e.FLAGS="flags"})(ce||(ce={}));var ni;(function(e){e.SEARCH="SEARCH",e.PREVIEW="PREVIEW"})(ni||(ni={}));var en,_8=[ce.SUGGESTED,ce.CUSTOM,ce.SMILEYS_PEOPLE,ce.ANIMALS_NATURE,ce.FOOD_DRINK,ce.TRAVEL_PLACES,ce.ACTIVITIES,ce.OBJECTS,ce.SYMBOLS,ce.FLAGS],Y8={name:"Recently Used",category:ce.SUGGESTED},p3=(en={},en[ce.SUGGESTED]={category:ce.SUGGESTED,name:"Frequently Used"},en[ce.CUSTOM]={category:ce.CUSTOM,name:"Custom Emojis"},en[ce.SMILEYS_PEOPLE]={category:ce.SMILEYS_PEOPLE,name:"Smileys & People"},en[ce.ANIMALS_NATURE]={category:ce.ANIMALS_NATURE,name:"Animals & Nature"},en[ce.FOOD_DRINK]={category:ce.FOOD_DRINK,name:"Food & Drink"},en[ce.TRAVEL_PLACES]={category:ce.TRAVEL_PLACES,name:"Travel & Places"},en[ce.ACTIVITIES]={category:ce.ACTIVITIES,name:"Activities"},en[ce.OBJECTS]={category:ce.OBJECTS,name:"Objects"},en[ce.SYMBOLS]={category:ce.SYMBOLS,name:"Symbols"},en[ce.FLAGS]={category:ce.FLAGS,name:"Flags"},en);function y3(e){return _8.map(function(a){return Be({},p3[a],e&&e[a]&&e[a])})}function K0(e){return e.category}function b3(e){return e.name}function Q8(e,a){var i;e===void 0&&(e=[]),a===void 0&&(a={});var f={};a.suggestionMode===If.RECENT&&(f[ce.SUGGESTED]=Y8);var c=y3(f);return(i=e)!=null&&i.length?e.map(function(d){return typeof d=="string"?Ep(d,f[d]):Be({},Ep(d.category,f[d.category]),d)}):c}function Ep(e,a){return a===void 0&&(a={}),Object.assign(p3[e],a)}var G8="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/",$8="https://cdn.jsdelivr.net/npm/emoji-datasource-facebook/img/facebook/64/",Z8="https://cdn.jsdelivr.net/npm/emoji-datasource-twitter/img/twitter/64/",J8="https://cdn.jsdelivr.net/npm/emoji-datasource-google/img/google/64/";function H8(e){switch(e){case Qt.TWITTER:return Z8;case Qt.GOOGLE:return J8;case Qt.FACEBOOK:return $8;case Qt.APPLE:default:return G8}}var P8=[],F8=[{n:["grinning","grinning face"],u:"1f600",a:"1.0"},{n:["smiley","smiling face with open mouth"],u:"1f603",a:"0.6"},{n:["smile","smiling face with open mouth and smiling eyes"],u:"1f604",a:"0.6"},{n:["grin","grinning face with smiling eyes"],u:"1f601",a:"0.6"},{n:["laughing","satisfied","smiling face with open mouth and tightly-closed eyes"],u:"1f606",a:"0.6"},{n:["sweat smile","smiling face with open mouth and cold sweat"],u:"1f605",a:"0.6"},{n:["rolling on the floor laughing"],u:"1f923",a:"3.0"},{n:["joy","face with tears of joy"],u:"1f602",a:"0.6"},{n:["slightly smiling face"],u:"1f642",a:"1.0"},{n:["upside-down face","upside down face"],u:"1f643",a:"1.0"},{n:["melting face"],u:"1fae0",a:"14.0"},{n:["wink","winking face"],u:"1f609",a:"0.6"},{n:["blush","smiling face with smiling eyes"],u:"1f60a",a:"0.6"},{n:["innocent","smiling face with halo"],u:"1f607",a:"1.0"},{n:["smiling face with 3 hearts","smiling face with smiling eyes and three hearts"],u:"1f970",a:"11.0"},{n:["heart eyes","smiling face with heart-shaped eyes"],u:"1f60d",a:"0.6"},{n:["star-struck","grinning face with star eyes"],u:"1f929",a:"5.0"},{n:["kissing heart","face throwing a kiss"],u:"1f618",a:"0.6"},{n:["kissing","kissing face"],u:"1f617",a:"1.0"},{n:["relaxed","white smiling face"],u:"263a-fe0f",a:"0.6"},{n:["kissing closed eyes","kissing face with closed eyes"],u:"1f61a",a:"0.6"},{n:["kissing smiling eyes","kissing face with smiling eyes"],u:"1f619",a:"1.0"},{n:["smiling face with tear"],u:"1f972",a:"13.0"},{n:["yum","face savouring delicious food"],u:"1f60b",a:"0.6"},{n:["stuck out tongue","face with stuck-out tongue"],u:"1f61b",a:"1.0"},{n:["stuck out tongue winking eye","face with stuck-out tongue and winking eye"],u:"1f61c",a:"0.6"},{n:["zany face","grinning face with one large and one small eye"],u:"1f92a",a:"5.0"},{n:["stuck out tongue closed eyes","face with stuck-out tongue and tightly-closed eyes"],u:"1f61d",a:"0.6"},{n:["money-mouth face","money mouth face"],u:"1f911",a:"1.0"},{n:["hugging face"],u:"1f917",a:"1.0"},{n:["face with hand over mouth","smiling face with smiling eyes and hand covering mouth"],u:"1f92d",a:"5.0"},{n:["face with open eyes and hand over mouth"],u:"1fae2",a:"14.0"},{n:["face with peeking eye"],u:"1fae3",a:"14.0"},{n:["shushing face","face with finger covering closed lips"],u:"1f92b",a:"5.0"},{n:["thinking face"],u:"1f914",a:"1.0"},{n:["saluting face"],u:"1fae1",a:"14.0"},{n:["zipper-mouth face","zipper mouth face"],u:"1f910",a:"1.0"},{n:["face with raised eyebrow","face with one eyebrow raised"],u:"1f928",a:"5.0"},{n:["neutral face"],u:"1f610",a:"0.7"},{n:["expressionless","expressionless face"],u:"1f611",a:"1.0"},{n:["no mouth","face without mouth"],u:"1f636",a:"1.0"},{n:["dotted line face"],u:"1fae5",a:"14.0"},{n:["face in clouds"],u:"1f636-200d-1f32b-fe0f",a:"13.1"},{n:["smirk","smirking face"],u:"1f60f",a:"0.6"},{n:["unamused","unamused face"],u:"1f612",a:"0.6"},{n:["face with rolling eyes"],u:"1f644",a:"1.0"},{n:["grimacing","grimacing face"],u:"1f62c",a:"1.0"},{n:["face exhaling"],u:"1f62e-200d-1f4a8",a:"13.1"},{n:["lying face"],u:"1f925",a:"3.0"},{n:["relieved","relieved face"],u:"1f60c",a:"0.6"},{n:["pensive","pensive face"],u:"1f614",a:"0.6"},{n:["sleepy","sleepy face"],u:"1f62a",a:"0.6"},{n:["drooling face"],u:"1f924",a:"3.0"},{n:["sleeping","sleeping face"],u:"1f634",a:"1.0"},{n:["mask","face with medical mask"],u:"1f637",a:"0.6"},{n:["face with thermometer"],u:"1f912",a:"1.0"},{n:["face with head-bandage","face with head bandage"],u:"1f915",a:"1.0"},{n:["nauseated face"],u:"1f922",a:"3.0"},{n:["face vomiting","face with open mouth vomiting"],u:"1f92e",a:"5.0"},{n:["sneezing face"],u:"1f927",a:"3.0"},{n:["hot face","overheated face"],u:"1f975",a:"11.0"},{n:["cold face","freezing face"],u:"1f976",a:"11.0"},{n:["woozy face","face with uneven eyes and wavy mouth"],u:"1f974",a:"11.0"},{n:["dizzy face"],u:"1f635",a:"0.6"},{n:["face with spiral eyes"],u:"1f635-200d-1f4ab",a:"13.1"},{n:["exploding head","shocked face with exploding head"],u:"1f92f",a:"5.0"},{n:["face with cowboy hat"],u:"1f920",a:"3.0"},{n:["partying face","face with party horn and party hat"],u:"1f973",a:"11.0"},{n:["disguised face"],u:"1f978",a:"13.0"},{n:["sunglasses","smiling face with sunglasses"],u:"1f60e",a:"1.0"},{n:["nerd face"],u:"1f913",a:"1.0"},{n:["face with monocle"],u:"1f9d0",a:"5.0"},{n:["confused","confused face"],u:"1f615",a:"1.0"},{n:["face with diagonal mouth"],u:"1fae4",a:"14.0"},{n:["worried","worried face"],u:"1f61f",a:"1.0"},{n:["slightly frowning face"],u:"1f641",a:"1.0"},{n:["frowning face","white frowning face"],u:"2639-fe0f",a:"0.7"},{n:["open mouth","face with open mouth"],u:"1f62e",a:"1.0"},{n:["hushed","hushed face"],u:"1f62f",a:"1.0"},{n:["astonished","astonished face"],u:"1f632",a:"0.6"},{n:["flushed","flushed face"],u:"1f633",a:"0.6"},{n:["pleading face","face with pleading eyes"],u:"1f97a",a:"11.0"},{n:["face holding back tears"],u:"1f979",a:"14.0"},{n:["frowning","frowning face with open mouth"],u:"1f626",a:"1.0"},{n:["anguished","anguished face"],u:"1f627",a:"1.0"},{n:["fearful","fearful face"],u:"1f628",a:"0.6"},{n:["cold sweat","face with open mouth and cold sweat"],u:"1f630",a:"0.6"},{n:["disappointed relieved","disappointed but relieved face"],u:"1f625",a:"0.6"},{n:["cry","crying face"],u:"1f622",a:"0.6"},{n:["sob","loudly crying face"],u:"1f62d",a:"0.6"},{n:["scream","face screaming in fear"],u:"1f631",a:"0.6"},{n:["confounded","confounded face"],u:"1f616",a:"0.6"},{n:["persevere","persevering face"],u:"1f623",a:"0.6"},{n:["disappointed","disappointed face"],u:"1f61e",a:"0.6"},{n:["sweat","face with cold sweat"],u:"1f613",a:"0.6"},{n:["weary","weary face"],u:"1f629",a:"0.6"},{n:["tired face"],u:"1f62b",a:"0.6"},{n:["yawning face"],u:"1f971",a:"12.0"},{n:["triumph","face with look of triumph"],u:"1f624",a:"0.6"},{n:["rage","pouting face"],u:"1f621",a:"0.6"},{n:["angry","angry face"],u:"1f620",a:"0.6"},{n:["face with symbols on mouth","serious face with symbols covering mouth"],u:"1f92c",a:"5.0"},{n:["smiling imp","smiling face with horns"],u:"1f608",a:"1.0"},{n:["imp"],u:"1f47f",a:"0.6"},{n:["skull"],u:"1f480",a:"0.6"},{n:["skull and crossbones"],u:"2620-fe0f",a:"1.0"},{n:["poop","shit","hankey","pile of poo"],u:"1f4a9",a:"0.6"},{n:["clown face"],u:"1f921",a:"3.0"},{n:["japanese ogre"],u:"1f479",a:"0.6"},{n:["japanese goblin"],u:"1f47a",a:"0.6"},{n:["ghost"],u:"1f47b",a:"0.6"},{n:["alien","extraterrestrial alien"],u:"1f47d",a:"0.6"},{n:["alien monster","space invader"],u:"1f47e",a:"0.6"},{n:["robot face"],u:"1f916",a:"1.0"},{n:["smiley cat","smiling cat face with open mouth"],u:"1f63a",a:"0.6"},{n:["smile cat","grinning cat face with smiling eyes"],u:"1f638",a:"0.6"},{n:["joy cat","cat face with tears of joy"],u:"1f639",a:"0.6"},{n:["heart eyes cat","smiling cat face with heart-shaped eyes"],u:"1f63b",a:"0.6"},{n:["smirk cat","cat face with wry smile"],u:"1f63c",a:"0.6"},{n:["kissing cat","kissing cat face with closed eyes"],u:"1f63d",a:"0.6"},{n:["scream cat","weary cat face"],u:"1f640",a:"0.6"},{n:["crying cat face"],u:"1f63f",a:"0.6"},{n:["pouting cat","pouting cat face"],u:"1f63e",a:"0.6"},{n:["see no evil","see-no-evil monkey"],u:"1f648",a:"0.6"},{n:["hear no evil","hear-no-evil monkey"],u:"1f649",a:"0.6"},{n:["speak no evil","speak-no-evil monkey"],u:"1f64a",a:"0.6"},{n:["kiss","kiss mark"],u:"1f48b",a:"0.6"},{n:["love letter"],u:"1f48c",a:"0.6"},{n:["cupid","heart with arrow"],u:"1f498",a:"0.6"},{n:["gift heart","heart with ribbon"],u:"1f49d",a:"0.6"},{n:["sparkling heart"],u:"1f496",a:"0.6"},{n:["heartpulse","growing heart"],u:"1f497",a:"0.6"},{n:["heartbeat","beating heart"],u:"1f493",a:"0.6"},{n:["revolving hearts"],u:"1f49e",a:"0.6"},{n:["two hearts"],u:"1f495",a:"0.6"},{n:["heart decoration"],u:"1f49f",a:"0.6"},{n:["heart exclamation","heavy heart exclamation mark ornament"],u:"2763-fe0f",a:"1.0"},{n:["broken heart"],u:"1f494",a:"0.6"},{n:["heart on fire"],u:"2764-fe0f-200d-1f525",a:"13.1"},{n:["mending heart"],u:"2764-fe0f-200d-1fa79",a:"13.1"},{n:["heart","heavy black heart"],u:"2764-fe0f",a:"0.6"},{n:["orange heart"],u:"1f9e1",a:"5.0"},{n:["yellow heart"],u:"1f49b",a:"0.6"},{n:["green heart"],u:"1f49a",a:"0.6"},{n:["blue heart"],u:"1f499",a:"0.6"},{n:["purple heart"],u:"1f49c",a:"0.6"},{n:["brown heart"],u:"1f90e",a:"12.0"},{n:["black heart"],u:"1f5a4",a:"3.0"},{n:["white heart"],u:"1f90d",a:"12.0"},{n:["100","hundred points symbol"],u:"1f4af",a:"0.6"},{n:["anger","anger symbol"],u:"1f4a2",a:"0.6"},{n:["boom","collision","collision symbol"],u:"1f4a5",a:"0.6"},{n:["dizzy","dizzy symbol"],u:"1f4ab",a:"0.6"},{n:["sweat drops","splashing sweat symbol"],u:"1f4a6",a:"0.6"},{n:["dash","dash symbol"],u:"1f4a8",a:"0.6"},{n:["hole"],u:"1f573-fe0f",a:"0.7"},{n:["bomb"],u:"1f4a3",a:"0.6"},{n:["speech balloon"],u:"1f4ac",a:"0.6"},{n:["eye in speech bubble","eye-in-speech-bubble"],u:"1f441-fe0f-200d-1f5e8-fe0f",a:"2.0"},{n:["left speech bubble"],u:"1f5e8-fe0f",a:"2.0"},{n:["right anger bubble"],u:"1f5ef-fe0f",a:"0.7"},{n:["thought balloon"],u:"1f4ad",a:"1.0"},{n:["zzz","sleeping symbol"],u:"1f4a4",a:"0.6"},{n:["wave","waving hand sign"],u:"1f44b",v:["1f44b-1f3fb","1f44b-1f3fc","1f44b-1f3fd","1f44b-1f3fe","1f44b-1f3ff"],a:"0.6"},{n:["raised back of hand"],u:"1f91a",v:["1f91a-1f3fb","1f91a-1f3fc","1f91a-1f3fd","1f91a-1f3fe","1f91a-1f3ff"],a:"3.0"},{n:["hand with fingers splayed","raised hand with fingers splayed"],u:"1f590-fe0f",v:["1f590-1f3fb","1f590-1f3fc","1f590-1f3fd","1f590-1f3fe","1f590-1f3ff"],a:"0.7"},{n:["hand","raised hand"],u:"270b",v:["270b-1f3fb","270b-1f3fc","270b-1f3fd","270b-1f3fe","270b-1f3ff"],a:"0.6"},{n:["spock-hand","raised hand with part between middle and ring fingers"],u:"1f596",v:["1f596-1f3fb","1f596-1f3fc","1f596-1f3fd","1f596-1f3fe","1f596-1f3ff"],a:"1.0"},{n:["rightwards hand"],u:"1faf1",v:["1faf1-1f3fb","1faf1-1f3fc","1faf1-1f3fd","1faf1-1f3fe","1faf1-1f3ff"],a:"14.0"},{n:["leftwards hand"],u:"1faf2",v:["1faf2-1f3fb","1faf2-1f3fc","1faf2-1f3fd","1faf2-1f3fe","1faf2-1f3ff"],a:"14.0"},{n:["palm down hand"],u:"1faf3",v:["1faf3-1f3fb","1faf3-1f3fc","1faf3-1f3fd","1faf3-1f3fe","1faf3-1f3ff"],a:"14.0"},{n:["palm up hand"],u:"1faf4",v:["1faf4-1f3fb","1faf4-1f3fc","1faf4-1f3fd","1faf4-1f3fe","1faf4-1f3ff"],a:"14.0"},{n:["ok hand","ok hand sign"],u:"1f44c",v:["1f44c-1f3fb","1f44c-1f3fc","1f44c-1f3fd","1f44c-1f3fe","1f44c-1f3ff"],a:"0.6"},{n:["pinched fingers"],u:"1f90c",v:["1f90c-1f3fb","1f90c-1f3fc","1f90c-1f3fd","1f90c-1f3fe","1f90c-1f3ff"],a:"13.0"},{n:["pinching hand"],u:"1f90f",v:["1f90f-1f3fb","1f90f-1f3fc","1f90f-1f3fd","1f90f-1f3fe","1f90f-1f3ff"],a:"12.0"},{n:["v","victory hand"],u:"270c-fe0f",v:["270c-1f3fb","270c-1f3fc","270c-1f3fd","270c-1f3fe","270c-1f3ff"],a:"0.6"},{n:["crossed fingers","hand with index and middle fingers crossed"],u:"1f91e",v:["1f91e-1f3fb","1f91e-1f3fc","1f91e-1f3fd","1f91e-1f3fe","1f91e-1f3ff"],a:"3.0"},{n:["hand with index finger and thumb crossed"],u:"1faf0",v:["1faf0-1f3fb","1faf0-1f3fc","1faf0-1f3fd","1faf0-1f3fe","1faf0-1f3ff"],a:"14.0"},{n:["i love you hand sign"],u:"1f91f",v:["1f91f-1f3fb","1f91f-1f3fc","1f91f-1f3fd","1f91f-1f3fe","1f91f-1f3ff"],a:"5.0"},{n:["the horns","sign of the horns"],u:"1f918",v:["1f918-1f3fb","1f918-1f3fc","1f918-1f3fd","1f918-1f3fe","1f918-1f3ff"],a:"1.0"},{n:["call me hand"],u:"1f919",v:["1f919-1f3fb","1f919-1f3fc","1f919-1f3fd","1f919-1f3fe","1f919-1f3ff"],a:"3.0"},{n:["point left","white left pointing backhand index"],u:"1f448",v:["1f448-1f3fb","1f448-1f3fc","1f448-1f3fd","1f448-1f3fe","1f448-1f3ff"],a:"0.6"},{n:["point right","white right pointing backhand index"],u:"1f449",v:["1f449-1f3fb","1f449-1f3fc","1f449-1f3fd","1f449-1f3fe","1f449-1f3ff"],a:"0.6"},{n:["point up 2","white up pointing backhand index"],u:"1f446",v:["1f446-1f3fb","1f446-1f3fc","1f446-1f3fd","1f446-1f3fe","1f446-1f3ff"],a:"0.6"},{n:["middle finger","reversed hand with middle finger extended"],u:"1f595",v:["1f595-1f3fb","1f595-1f3fc","1f595-1f3fd","1f595-1f3fe","1f595-1f3ff"],a:"1.0"},{n:["point down","white down pointing backhand index"],u:"1f447",v:["1f447-1f3fb","1f447-1f3fc","1f447-1f3fd","1f447-1f3fe","1f447-1f3ff"],a:"0.6"},{n:["point up","white up pointing index"],u:"261d-fe0f",v:["261d-1f3fb","261d-1f3fc","261d-1f3fd","261d-1f3fe","261d-1f3ff"],a:"0.6"},{n:["index pointing at the viewer"],u:"1faf5",v:["1faf5-1f3fb","1faf5-1f3fc","1faf5-1f3fd","1faf5-1f3fe","1faf5-1f3ff"],a:"14.0"},{n:["+1","thumbsup","thumbs up sign"],u:"1f44d",v:["1f44d-1f3fb","1f44d-1f3fc","1f44d-1f3fd","1f44d-1f3fe","1f44d-1f3ff"],a:"0.6"},{n:["-1","thumbsdown","thumbs down sign"],u:"1f44e",v:["1f44e-1f3fb","1f44e-1f3fc","1f44e-1f3fd","1f44e-1f3fe","1f44e-1f3ff"],a:"0.6"},{n:["fist","raised fist"],u:"270a",v:["270a-1f3fb","270a-1f3fc","270a-1f3fd","270a-1f3fe","270a-1f3ff"],a:"0.6"},{n:["punch","facepunch","fisted hand sign"],u:"1f44a",v:["1f44a-1f3fb","1f44a-1f3fc","1f44a-1f3fd","1f44a-1f3fe","1f44a-1f3ff"],a:"0.6"},{n:["left-facing fist"],u:"1f91b",v:["1f91b-1f3fb","1f91b-1f3fc","1f91b-1f3fd","1f91b-1f3fe","1f91b-1f3ff"],a:"3.0"},{n:["right-facing fist"],u:"1f91c",v:["1f91c-1f3fb","1f91c-1f3fc","1f91c-1f3fd","1f91c-1f3fe","1f91c-1f3ff"],a:"3.0"},{n:["clap","clapping hands sign"],u:"1f44f",v:["1f44f-1f3fb","1f44f-1f3fc","1f44f-1f3fd","1f44f-1f3fe","1f44f-1f3ff"],a:"0.6"},{n:["raised hands","person raising both hands in celebration"],u:"1f64c",v:["1f64c-1f3fb","1f64c-1f3fc","1f64c-1f3fd","1f64c-1f3fe","1f64c-1f3ff"],a:"0.6"},{n:["heart hands"],u:"1faf6",v:["1faf6-1f3fb","1faf6-1f3fc","1faf6-1f3fd","1faf6-1f3fe","1faf6-1f3ff"],a:"14.0"},{n:["open hands","open hands sign"],u:"1f450",v:["1f450-1f3fb","1f450-1f3fc","1f450-1f3fd","1f450-1f3fe","1f450-1f3ff"],a:"0.6"},{n:["palms up together"],u:"1f932",v:["1f932-1f3fb","1f932-1f3fc","1f932-1f3fd","1f932-1f3fe","1f932-1f3ff"],a:"5.0"},{n:["handshake"],u:"1f91d",v:["1f91d-1f3fb","1f91d-1f3fc","1f91d-1f3fd","1f91d-1f3fe","1f91d-1f3ff","1faf1-1f3fb-200d-1faf2-1f3fc","1faf1-1f3fb-200d-1faf2-1f3fd","1faf1-1f3fb-200d-1faf2-1f3fe","1faf1-1f3fb-200d-1faf2-1f3ff","1faf1-1f3fc-200d-1faf2-1f3fb","1faf1-1f3fc-200d-1faf2-1f3fd","1faf1-1f3fc-200d-1faf2-1f3fe","1faf1-1f3fc-200d-1faf2-1f3ff","1faf1-1f3fd-200d-1faf2-1f3fb","1faf1-1f3fd-200d-1faf2-1f3fc","1faf1-1f3fd-200d-1faf2-1f3fe","1faf1-1f3fd-200d-1faf2-1f3ff","1faf1-1f3fe-200d-1faf2-1f3fb","1faf1-1f3fe-200d-1faf2-1f3fc","1faf1-1f3fe-200d-1faf2-1f3fd","1faf1-1f3fe-200d-1faf2-1f3ff","1faf1-1f3ff-200d-1faf2-1f3fb","1faf1-1f3ff-200d-1faf2-1f3fc","1faf1-1f3ff-200d-1faf2-1f3fd","1faf1-1f3ff-200d-1faf2-1f3fe"],a:"3.0"},{n:["pray","person with folded hands"],u:"1f64f",v:["1f64f-1f3fb","1f64f-1f3fc","1f64f-1f3fd","1f64f-1f3fe","1f64f-1f3ff"],a:"0.6"},{n:["writing hand"],u:"270d-fe0f",v:["270d-1f3fb","270d-1f3fc","270d-1f3fd","270d-1f3fe","270d-1f3ff"],a:"0.7"},{n:["nail care","nail polish"],u:"1f485",v:["1f485-1f3fb","1f485-1f3fc","1f485-1f3fd","1f485-1f3fe","1f485-1f3ff"],a:"0.6"},{n:["selfie"],u:"1f933",v:["1f933-1f3fb","1f933-1f3fc","1f933-1f3fd","1f933-1f3fe","1f933-1f3ff"],a:"3.0"},{n:["muscle","flexed biceps"],u:"1f4aa",v:["1f4aa-1f3fb","1f4aa-1f3fc","1f4aa-1f3fd","1f4aa-1f3fe","1f4aa-1f3ff"],a:"0.6"},{n:["mechanical arm"],u:"1f9be",a:"12.0"},{n:["mechanical leg"],u:"1f9bf",a:"12.0"},{n:["leg"],u:"1f9b5",v:["1f9b5-1f3fb","1f9b5-1f3fc","1f9b5-1f3fd","1f9b5-1f3fe","1f9b5-1f3ff"],a:"11.0"},{n:["foot"],u:"1f9b6",v:["1f9b6-1f3fb","1f9b6-1f3fc","1f9b6-1f3fd","1f9b6-1f3fe","1f9b6-1f3ff"],a:"11.0"},{n:["ear"],u:"1f442",v:["1f442-1f3fb","1f442-1f3fc","1f442-1f3fd","1f442-1f3fe","1f442-1f3ff"],a:"0.6"},{n:["ear with hearing aid"],u:"1f9bb",v:["1f9bb-1f3fb","1f9bb-1f3fc","1f9bb-1f3fd","1f9bb-1f3fe","1f9bb-1f3ff"],a:"12.0"},{n:["nose"],u:"1f443",v:["1f443-1f3fb","1f443-1f3fc","1f443-1f3fd","1f443-1f3fe","1f443-1f3ff"],a:"0.6"},{n:["brain"],u:"1f9e0",a:"5.0"},{n:["anatomical heart"],u:"1fac0",a:"13.0"},{n:["lungs"],u:"1fac1",a:"13.0"},{n:["tooth"],u:"1f9b7",a:"11.0"},{n:["bone"],u:"1f9b4",a:"11.0"},{n:["eyes"],u:"1f440",a:"0.6"},{n:["eye"],u:"1f441-fe0f",a:"0.7"},{n:["tongue"],u:"1f445",a:"0.6"},{n:["lips","mouth"],u:"1f444",a:"0.6"},{n:["biting lip"],u:"1fae6",a:"14.0"},{n:["baby"],u:"1f476",v:["1f476-1f3fb","1f476-1f3fc","1f476-1f3fd","1f476-1f3fe","1f476-1f3ff"],a:"0.6"},{n:["child"],u:"1f9d2",v:["1f9d2-1f3fb","1f9d2-1f3fc","1f9d2-1f3fd","1f9d2-1f3fe","1f9d2-1f3ff"],a:"5.0"},{n:["boy"],u:"1f466",v:["1f466-1f3fb","1f466-1f3fc","1f466-1f3fd","1f466-1f3fe","1f466-1f3ff"],a:"0.6"},{n:["girl"],u:"1f467",v:["1f467-1f3fb","1f467-1f3fc","1f467-1f3fd","1f467-1f3fe","1f467-1f3ff"],a:"0.6"},{n:["adult"],u:"1f9d1",v:["1f9d1-1f3fb","1f9d1-1f3fc","1f9d1-1f3fd","1f9d1-1f3fe","1f9d1-1f3ff"],a:"5.0"},{n:["person with blond hair"],u:"1f471",v:["1f471-1f3fb","1f471-1f3fc","1f471-1f3fd","1f471-1f3fe","1f471-1f3ff"],a:"0.6"},{n:["man"],u:"1f468",v:["1f468-1f3fb","1f468-1f3fc","1f468-1f3fd","1f468-1f3fe","1f468-1f3ff"],a:"0.6"},{n:["bearded person"],u:"1f9d4",v:["1f9d4-1f3fb","1f9d4-1f3fc","1f9d4-1f3fd","1f9d4-1f3fe","1f9d4-1f3ff"],a:"5.0"},{n:["man: beard","man with beard"],u:"1f9d4-200d-2642-fe0f",v:["1f9d4-1f3fb-200d-2642-fe0f","1f9d4-1f3fc-200d-2642-fe0f","1f9d4-1f3fd-200d-2642-fe0f","1f9d4-1f3fe-200d-2642-fe0f","1f9d4-1f3ff-200d-2642-fe0f"],a:"13.1"},{n:["woman: beard","woman with beard"],u:"1f9d4-200d-2640-fe0f",v:["1f9d4-1f3fb-200d-2640-fe0f","1f9d4-1f3fc-200d-2640-fe0f","1f9d4-1f3fd-200d-2640-fe0f","1f9d4-1f3fe-200d-2640-fe0f","1f9d4-1f3ff-200d-2640-fe0f"],a:"13.1"},{n:["man: red hair","red haired man"],u:"1f468-200d-1f9b0",v:["1f468-1f3fb-200d-1f9b0","1f468-1f3fc-200d-1f9b0","1f468-1f3fd-200d-1f9b0","1f468-1f3fe-200d-1f9b0","1f468-1f3ff-200d-1f9b0"],a:"11.0"},{n:["man: curly hair","curly haired man"],u:"1f468-200d-1f9b1",v:["1f468-1f3fb-200d-1f9b1","1f468-1f3fc-200d-1f9b1","1f468-1f3fd-200d-1f9b1","1f468-1f3fe-200d-1f9b1","1f468-1f3ff-200d-1f9b1"],a:"11.0"},{n:["man: white hair","white haired man"],u:"1f468-200d-1f9b3",v:["1f468-1f3fb-200d-1f9b3","1f468-1f3fc-200d-1f9b3","1f468-1f3fd-200d-1f9b3","1f468-1f3fe-200d-1f9b3","1f468-1f3ff-200d-1f9b3"],a:"11.0"},{n:["bald man","man: bald"],u:"1f468-200d-1f9b2",v:["1f468-1f3fb-200d-1f9b2","1f468-1f3fc-200d-1f9b2","1f468-1f3fd-200d-1f9b2","1f468-1f3fe-200d-1f9b2","1f468-1f3ff-200d-1f9b2"],a:"11.0"},{n:["woman"],u:"1f469",v:["1f469-1f3fb","1f469-1f3fc","1f469-1f3fd","1f469-1f3fe","1f469-1f3ff"],a:"0.6"},{n:["woman: red hair","red haired woman"],u:"1f469-200d-1f9b0",v:["1f469-1f3fb-200d-1f9b0","1f469-1f3fc-200d-1f9b0","1f469-1f3fd-200d-1f9b0","1f469-1f3fe-200d-1f9b0","1f469-1f3ff-200d-1f9b0"],a:"11.0"},{n:["person: red hair","red haired person"],u:"1f9d1-200d-1f9b0",v:["1f9d1-1f3fb-200d-1f9b0","1f9d1-1f3fc-200d-1f9b0","1f9d1-1f3fd-200d-1f9b0","1f9d1-1f3fe-200d-1f9b0","1f9d1-1f3ff-200d-1f9b0"],a:"12.1"},{n:["woman: curly hair","curly haired woman"],u:"1f469-200d-1f9b1",v:["1f469-1f3fb-200d-1f9b1","1f469-1f3fc-200d-1f9b1","1f469-1f3fd-200d-1f9b1","1f469-1f3fe-200d-1f9b1","1f469-1f3ff-200d-1f9b1"],a:"11.0"},{n:["person: curly hair","curly haired person"],u:"1f9d1-200d-1f9b1",v:["1f9d1-1f3fb-200d-1f9b1","1f9d1-1f3fc-200d-1f9b1","1f9d1-1f3fd-200d-1f9b1","1f9d1-1f3fe-200d-1f9b1","1f9d1-1f3ff-200d-1f9b1"],a:"12.1"},{n:["woman: white hair","white haired woman"],u:"1f469-200d-1f9b3",v:["1f469-1f3fb-200d-1f9b3","1f469-1f3fc-200d-1f9b3","1f469-1f3fd-200d-1f9b3","1f469-1f3fe-200d-1f9b3","1f469-1f3ff-200d-1f9b3"],a:"11.0"},{n:["person: white hair","white haired person"],u:"1f9d1-200d-1f9b3",v:["1f9d1-1f3fb-200d-1f9b3","1f9d1-1f3fc-200d-1f9b3","1f9d1-1f3fd-200d-1f9b3","1f9d1-1f3fe-200d-1f9b3","1f9d1-1f3ff-200d-1f9b3"],a:"12.1"},{n:["bald woman","woman: bald"],u:"1f469-200d-1f9b2",v:["1f469-1f3fb-200d-1f9b2","1f469-1f3fc-200d-1f9b2","1f469-1f3fd-200d-1f9b2","1f469-1f3fe-200d-1f9b2","1f469-1f3ff-200d-1f9b2"],a:"11.0"},{n:["bald person","person: bald"],u:"1f9d1-200d-1f9b2",v:["1f9d1-1f3fb-200d-1f9b2","1f9d1-1f3fc-200d-1f9b2","1f9d1-1f3fd-200d-1f9b2","1f9d1-1f3fe-200d-1f9b2","1f9d1-1f3ff-200d-1f9b2"],a:"12.1"},{n:["woman: blond hair","blond-haired-woman"],u:"1f471-200d-2640-fe0f",v:["1f471-1f3fb-200d-2640-fe0f","1f471-1f3fc-200d-2640-fe0f","1f471-1f3fd-200d-2640-fe0f","1f471-1f3fe-200d-2640-fe0f","1f471-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["man: blond hair","blond-haired-man"],u:"1f471-200d-2642-fe0f",v:["1f471-1f3fb-200d-2642-fe0f","1f471-1f3fc-200d-2642-fe0f","1f471-1f3fd-200d-2642-fe0f","1f471-1f3fe-200d-2642-fe0f","1f471-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["older adult"],u:"1f9d3",v:["1f9d3-1f3fb","1f9d3-1f3fc","1f9d3-1f3fd","1f9d3-1f3fe","1f9d3-1f3ff"],a:"5.0"},{n:["older man"],u:"1f474",v:["1f474-1f3fb","1f474-1f3fc","1f474-1f3fd","1f474-1f3fe","1f474-1f3ff"],a:"0.6"},{n:["older woman"],u:"1f475",v:["1f475-1f3fb","1f475-1f3fc","1f475-1f3fd","1f475-1f3fe","1f475-1f3ff"],a:"0.6"},{n:["person frowning"],u:"1f64d",v:["1f64d-1f3fb","1f64d-1f3fc","1f64d-1f3fd","1f64d-1f3fe","1f64d-1f3ff"],a:"0.6"},{n:["man frowning","man-frowning"],u:"1f64d-200d-2642-fe0f",v:["1f64d-1f3fb-200d-2642-fe0f","1f64d-1f3fc-200d-2642-fe0f","1f64d-1f3fd-200d-2642-fe0f","1f64d-1f3fe-200d-2642-fe0f","1f64d-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman frowning","woman-frowning"],u:"1f64d-200d-2640-fe0f",v:["1f64d-1f3fb-200d-2640-fe0f","1f64d-1f3fc-200d-2640-fe0f","1f64d-1f3fd-200d-2640-fe0f","1f64d-1f3fe-200d-2640-fe0f","1f64d-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["person with pouting face"],u:"1f64e",v:["1f64e-1f3fb","1f64e-1f3fc","1f64e-1f3fd","1f64e-1f3fe","1f64e-1f3ff"],a:"0.6"},{n:["man pouting","man-pouting"],u:"1f64e-200d-2642-fe0f",v:["1f64e-1f3fb-200d-2642-fe0f","1f64e-1f3fc-200d-2642-fe0f","1f64e-1f3fd-200d-2642-fe0f","1f64e-1f3fe-200d-2642-fe0f","1f64e-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman pouting","woman-pouting"],u:"1f64e-200d-2640-fe0f",v:["1f64e-1f3fb-200d-2640-fe0f","1f64e-1f3fc-200d-2640-fe0f","1f64e-1f3fd-200d-2640-fe0f","1f64e-1f3fe-200d-2640-fe0f","1f64e-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["no good","face with no good gesture"],u:"1f645",v:["1f645-1f3fb","1f645-1f3fc","1f645-1f3fd","1f645-1f3fe","1f645-1f3ff"],a:"0.6"},{n:["man gesturing no","man-gesturing-no"],u:"1f645-200d-2642-fe0f",v:["1f645-1f3fb-200d-2642-fe0f","1f645-1f3fc-200d-2642-fe0f","1f645-1f3fd-200d-2642-fe0f","1f645-1f3fe-200d-2642-fe0f","1f645-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman gesturing no","woman-gesturing-no"],u:"1f645-200d-2640-fe0f",v:["1f645-1f3fb-200d-2640-fe0f","1f645-1f3fc-200d-2640-fe0f","1f645-1f3fd-200d-2640-fe0f","1f645-1f3fe-200d-2640-fe0f","1f645-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["ok woman","face with ok gesture"],u:"1f646",v:["1f646-1f3fb","1f646-1f3fc","1f646-1f3fd","1f646-1f3fe","1f646-1f3ff"],a:"0.6"},{n:["man gesturing ok","man-gesturing-ok"],u:"1f646-200d-2642-fe0f",v:["1f646-1f3fb-200d-2642-fe0f","1f646-1f3fc-200d-2642-fe0f","1f646-1f3fd-200d-2642-fe0f","1f646-1f3fe-200d-2642-fe0f","1f646-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman gesturing ok","woman-gesturing-ok"],u:"1f646-200d-2640-fe0f",v:["1f646-1f3fb-200d-2640-fe0f","1f646-1f3fc-200d-2640-fe0f","1f646-1f3fd-200d-2640-fe0f","1f646-1f3fe-200d-2640-fe0f","1f646-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["information desk person"],u:"1f481",v:["1f481-1f3fb","1f481-1f3fc","1f481-1f3fd","1f481-1f3fe","1f481-1f3ff"],a:"0.6"},{n:["man tipping hand","man-tipping-hand"],u:"1f481-200d-2642-fe0f",v:["1f481-1f3fb-200d-2642-fe0f","1f481-1f3fc-200d-2642-fe0f","1f481-1f3fd-200d-2642-fe0f","1f481-1f3fe-200d-2642-fe0f","1f481-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman tipping hand","woman-tipping-hand"],u:"1f481-200d-2640-fe0f",v:["1f481-1f3fb-200d-2640-fe0f","1f481-1f3fc-200d-2640-fe0f","1f481-1f3fd-200d-2640-fe0f","1f481-1f3fe-200d-2640-fe0f","1f481-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["raising hand","happy person raising one hand"],u:"1f64b",v:["1f64b-1f3fb","1f64b-1f3fc","1f64b-1f3fd","1f64b-1f3fe","1f64b-1f3ff"],a:"0.6"},{n:["man raising hand","man-raising-hand"],u:"1f64b-200d-2642-fe0f",v:["1f64b-1f3fb-200d-2642-fe0f","1f64b-1f3fc-200d-2642-fe0f","1f64b-1f3fd-200d-2642-fe0f","1f64b-1f3fe-200d-2642-fe0f","1f64b-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman raising hand","woman-raising-hand"],u:"1f64b-200d-2640-fe0f",v:["1f64b-1f3fb-200d-2640-fe0f","1f64b-1f3fc-200d-2640-fe0f","1f64b-1f3fd-200d-2640-fe0f","1f64b-1f3fe-200d-2640-fe0f","1f64b-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["deaf person"],u:"1f9cf",v:["1f9cf-1f3fb","1f9cf-1f3fc","1f9cf-1f3fd","1f9cf-1f3fe","1f9cf-1f3ff"],a:"12.0"},{n:["deaf man"],u:"1f9cf-200d-2642-fe0f",v:["1f9cf-1f3fb-200d-2642-fe0f","1f9cf-1f3fc-200d-2642-fe0f","1f9cf-1f3fd-200d-2642-fe0f","1f9cf-1f3fe-200d-2642-fe0f","1f9cf-1f3ff-200d-2642-fe0f"],a:"12.0"},{n:["deaf woman"],u:"1f9cf-200d-2640-fe0f",v:["1f9cf-1f3fb-200d-2640-fe0f","1f9cf-1f3fc-200d-2640-fe0f","1f9cf-1f3fd-200d-2640-fe0f","1f9cf-1f3fe-200d-2640-fe0f","1f9cf-1f3ff-200d-2640-fe0f"],a:"12.0"},{n:["bow","person bowing deeply"],u:"1f647",v:["1f647-1f3fb","1f647-1f3fc","1f647-1f3fd","1f647-1f3fe","1f647-1f3ff"],a:"0.6"},{n:["man bowing","man-bowing"],u:"1f647-200d-2642-fe0f",v:["1f647-1f3fb-200d-2642-fe0f","1f647-1f3fc-200d-2642-fe0f","1f647-1f3fd-200d-2642-fe0f","1f647-1f3fe-200d-2642-fe0f","1f647-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman bowing","woman-bowing"],u:"1f647-200d-2640-fe0f",v:["1f647-1f3fb-200d-2640-fe0f","1f647-1f3fc-200d-2640-fe0f","1f647-1f3fd-200d-2640-fe0f","1f647-1f3fe-200d-2640-fe0f","1f647-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["face palm"],u:"1f926",v:["1f926-1f3fb","1f926-1f3fc","1f926-1f3fd","1f926-1f3fe","1f926-1f3ff"],a:"3.0"},{n:["man facepalming","man-facepalming"],u:"1f926-200d-2642-fe0f",v:["1f926-1f3fb-200d-2642-fe0f","1f926-1f3fc-200d-2642-fe0f","1f926-1f3fd-200d-2642-fe0f","1f926-1f3fe-200d-2642-fe0f","1f926-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman facepalming","woman-facepalming"],u:"1f926-200d-2640-fe0f",v:["1f926-1f3fb-200d-2640-fe0f","1f926-1f3fc-200d-2640-fe0f","1f926-1f3fd-200d-2640-fe0f","1f926-1f3fe-200d-2640-fe0f","1f926-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["shrug"],u:"1f937",v:["1f937-1f3fb","1f937-1f3fc","1f937-1f3fd","1f937-1f3fe","1f937-1f3ff"],a:"3.0"},{n:["man shrugging","man-shrugging"],u:"1f937-200d-2642-fe0f",v:["1f937-1f3fb-200d-2642-fe0f","1f937-1f3fc-200d-2642-fe0f","1f937-1f3fd-200d-2642-fe0f","1f937-1f3fe-200d-2642-fe0f","1f937-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman shrugging","woman-shrugging"],u:"1f937-200d-2640-fe0f",v:["1f937-1f3fb-200d-2640-fe0f","1f937-1f3fc-200d-2640-fe0f","1f937-1f3fd-200d-2640-fe0f","1f937-1f3fe-200d-2640-fe0f","1f937-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["health worker"],u:"1f9d1-200d-2695-fe0f",v:["1f9d1-1f3fb-200d-2695-fe0f","1f9d1-1f3fc-200d-2695-fe0f","1f9d1-1f3fd-200d-2695-fe0f","1f9d1-1f3fe-200d-2695-fe0f","1f9d1-1f3ff-200d-2695-fe0f"],a:"12.1"},{n:["male-doctor","man health worker"],u:"1f468-200d-2695-fe0f",v:["1f468-1f3fb-200d-2695-fe0f","1f468-1f3fc-200d-2695-fe0f","1f468-1f3fd-200d-2695-fe0f","1f468-1f3fe-200d-2695-fe0f","1f468-1f3ff-200d-2695-fe0f"],a:"4.0"},{n:["female-doctor","woman health worker"],u:"1f469-200d-2695-fe0f",v:["1f469-1f3fb-200d-2695-fe0f","1f469-1f3fc-200d-2695-fe0f","1f469-1f3fd-200d-2695-fe0f","1f469-1f3fe-200d-2695-fe0f","1f469-1f3ff-200d-2695-fe0f"],a:"4.0"},{n:["student"],u:"1f9d1-200d-1f393",v:["1f9d1-1f3fb-200d-1f393","1f9d1-1f3fc-200d-1f393","1f9d1-1f3fd-200d-1f393","1f9d1-1f3fe-200d-1f393","1f9d1-1f3ff-200d-1f393"],a:"12.1"},{n:["man student","male-student"],u:"1f468-200d-1f393",v:["1f468-1f3fb-200d-1f393","1f468-1f3fc-200d-1f393","1f468-1f3fd-200d-1f393","1f468-1f3fe-200d-1f393","1f468-1f3ff-200d-1f393"],a:"4.0"},{n:["woman student","female-student"],u:"1f469-200d-1f393",v:["1f469-1f3fb-200d-1f393","1f469-1f3fc-200d-1f393","1f469-1f3fd-200d-1f393","1f469-1f3fe-200d-1f393","1f469-1f3ff-200d-1f393"],a:"4.0"},{n:["teacher"],u:"1f9d1-200d-1f3eb",v:["1f9d1-1f3fb-200d-1f3eb","1f9d1-1f3fc-200d-1f3eb","1f9d1-1f3fd-200d-1f3eb","1f9d1-1f3fe-200d-1f3eb","1f9d1-1f3ff-200d-1f3eb"],a:"12.1"},{n:["man teacher","male-teacher"],u:"1f468-200d-1f3eb",v:["1f468-1f3fb-200d-1f3eb","1f468-1f3fc-200d-1f3eb","1f468-1f3fd-200d-1f3eb","1f468-1f3fe-200d-1f3eb","1f468-1f3ff-200d-1f3eb"],a:"4.0"},{n:["woman teacher","female-teacher"],u:"1f469-200d-1f3eb",v:["1f469-1f3fb-200d-1f3eb","1f469-1f3fc-200d-1f3eb","1f469-1f3fd-200d-1f3eb","1f469-1f3fe-200d-1f3eb","1f469-1f3ff-200d-1f3eb"],a:"4.0"},{n:["judge"],u:"1f9d1-200d-2696-fe0f",v:["1f9d1-1f3fb-200d-2696-fe0f","1f9d1-1f3fc-200d-2696-fe0f","1f9d1-1f3fd-200d-2696-fe0f","1f9d1-1f3fe-200d-2696-fe0f","1f9d1-1f3ff-200d-2696-fe0f"],a:"12.1"},{n:["man judge","male-judge"],u:"1f468-200d-2696-fe0f",v:["1f468-1f3fb-200d-2696-fe0f","1f468-1f3fc-200d-2696-fe0f","1f468-1f3fd-200d-2696-fe0f","1f468-1f3fe-200d-2696-fe0f","1f468-1f3ff-200d-2696-fe0f"],a:"4.0"},{n:["woman judge","female-judge"],u:"1f469-200d-2696-fe0f",v:["1f469-1f3fb-200d-2696-fe0f","1f469-1f3fc-200d-2696-fe0f","1f469-1f3fd-200d-2696-fe0f","1f469-1f3fe-200d-2696-fe0f","1f469-1f3ff-200d-2696-fe0f"],a:"4.0"},{n:["farmer"],u:"1f9d1-200d-1f33e",v:["1f9d1-1f3fb-200d-1f33e","1f9d1-1f3fc-200d-1f33e","1f9d1-1f3fd-200d-1f33e","1f9d1-1f3fe-200d-1f33e","1f9d1-1f3ff-200d-1f33e"],a:"12.1"},{n:["man farmer","male-farmer"],u:"1f468-200d-1f33e",v:["1f468-1f3fb-200d-1f33e","1f468-1f3fc-200d-1f33e","1f468-1f3fd-200d-1f33e","1f468-1f3fe-200d-1f33e","1f468-1f3ff-200d-1f33e"],a:"4.0"},{n:["woman farmer","female-farmer"],u:"1f469-200d-1f33e",v:["1f469-1f3fb-200d-1f33e","1f469-1f3fc-200d-1f33e","1f469-1f3fd-200d-1f33e","1f469-1f3fe-200d-1f33e","1f469-1f3ff-200d-1f33e"],a:"4.0"},{n:["cook"],u:"1f9d1-200d-1f373",v:["1f9d1-1f3fb-200d-1f373","1f9d1-1f3fc-200d-1f373","1f9d1-1f3fd-200d-1f373","1f9d1-1f3fe-200d-1f373","1f9d1-1f3ff-200d-1f373"],a:"12.1"},{n:["man cook","male-cook"],u:"1f468-200d-1f373",v:["1f468-1f3fb-200d-1f373","1f468-1f3fc-200d-1f373","1f468-1f3fd-200d-1f373","1f468-1f3fe-200d-1f373","1f468-1f3ff-200d-1f373"],a:"4.0"},{n:["woman cook","female-cook"],u:"1f469-200d-1f373",v:["1f469-1f3fb-200d-1f373","1f469-1f3fc-200d-1f373","1f469-1f3fd-200d-1f373","1f469-1f3fe-200d-1f373","1f469-1f3ff-200d-1f373"],a:"4.0"},{n:["mechanic"],u:"1f9d1-200d-1f527",v:["1f9d1-1f3fb-200d-1f527","1f9d1-1f3fc-200d-1f527","1f9d1-1f3fd-200d-1f527","1f9d1-1f3fe-200d-1f527","1f9d1-1f3ff-200d-1f527"],a:"12.1"},{n:["man mechanic","male-mechanic"],u:"1f468-200d-1f527",v:["1f468-1f3fb-200d-1f527","1f468-1f3fc-200d-1f527","1f468-1f3fd-200d-1f527","1f468-1f3fe-200d-1f527","1f468-1f3ff-200d-1f527"],a:"4.0"},{n:["woman mechanic","female-mechanic"],u:"1f469-200d-1f527",v:["1f469-1f3fb-200d-1f527","1f469-1f3fc-200d-1f527","1f469-1f3fd-200d-1f527","1f469-1f3fe-200d-1f527","1f469-1f3ff-200d-1f527"],a:"4.0"},{n:["factory worker"],u:"1f9d1-200d-1f3ed",v:["1f9d1-1f3fb-200d-1f3ed","1f9d1-1f3fc-200d-1f3ed","1f9d1-1f3fd-200d-1f3ed","1f9d1-1f3fe-200d-1f3ed","1f9d1-1f3ff-200d-1f3ed"],a:"12.1"},{n:["man factory worker","male-factory-worker"],u:"1f468-200d-1f3ed",v:["1f468-1f3fb-200d-1f3ed","1f468-1f3fc-200d-1f3ed","1f468-1f3fd-200d-1f3ed","1f468-1f3fe-200d-1f3ed","1f468-1f3ff-200d-1f3ed"],a:"4.0"},{n:["woman factory worker","female-factory-worker"],u:"1f469-200d-1f3ed",v:["1f469-1f3fb-200d-1f3ed","1f469-1f3fc-200d-1f3ed","1f469-1f3fd-200d-1f3ed","1f469-1f3fe-200d-1f3ed","1f469-1f3ff-200d-1f3ed"],a:"4.0"},{n:["office worker"],u:"1f9d1-200d-1f4bc",v:["1f9d1-1f3fb-200d-1f4bc","1f9d1-1f3fc-200d-1f4bc","1f9d1-1f3fd-200d-1f4bc","1f9d1-1f3fe-200d-1f4bc","1f9d1-1f3ff-200d-1f4bc"],a:"12.1"},{n:["man office worker","male-office-worker"],u:"1f468-200d-1f4bc",v:["1f468-1f3fb-200d-1f4bc","1f468-1f3fc-200d-1f4bc","1f468-1f3fd-200d-1f4bc","1f468-1f3fe-200d-1f4bc","1f468-1f3ff-200d-1f4bc"],a:"4.0"},{n:["woman office worker","female-office-worker"],u:"1f469-200d-1f4bc",v:["1f469-1f3fb-200d-1f4bc","1f469-1f3fc-200d-1f4bc","1f469-1f3fd-200d-1f4bc","1f469-1f3fe-200d-1f4bc","1f469-1f3ff-200d-1f4bc"],a:"4.0"},{n:["scientist"],u:"1f9d1-200d-1f52c",v:["1f9d1-1f3fb-200d-1f52c","1f9d1-1f3fc-200d-1f52c","1f9d1-1f3fd-200d-1f52c","1f9d1-1f3fe-200d-1f52c","1f9d1-1f3ff-200d-1f52c"],a:"12.1"},{n:["man scientist","male-scientist"],u:"1f468-200d-1f52c",v:["1f468-1f3fb-200d-1f52c","1f468-1f3fc-200d-1f52c","1f468-1f3fd-200d-1f52c","1f468-1f3fe-200d-1f52c","1f468-1f3ff-200d-1f52c"],a:"4.0"},{n:["woman scientist","female-scientist"],u:"1f469-200d-1f52c",v:["1f469-1f3fb-200d-1f52c","1f469-1f3fc-200d-1f52c","1f469-1f3fd-200d-1f52c","1f469-1f3fe-200d-1f52c","1f469-1f3ff-200d-1f52c"],a:"4.0"},{n:["technologist"],u:"1f9d1-200d-1f4bb",v:["1f9d1-1f3fb-200d-1f4bb","1f9d1-1f3fc-200d-1f4bb","1f9d1-1f3fd-200d-1f4bb","1f9d1-1f3fe-200d-1f4bb","1f9d1-1f3ff-200d-1f4bb"],a:"12.1"},{n:["man technologist","male-technologist"],u:"1f468-200d-1f4bb",v:["1f468-1f3fb-200d-1f4bb","1f468-1f3fc-200d-1f4bb","1f468-1f3fd-200d-1f4bb","1f468-1f3fe-200d-1f4bb","1f468-1f3ff-200d-1f4bb"],a:"4.0"},{n:["woman technologist","female-technologist"],u:"1f469-200d-1f4bb",v:["1f469-1f3fb-200d-1f4bb","1f469-1f3fc-200d-1f4bb","1f469-1f3fd-200d-1f4bb","1f469-1f3fe-200d-1f4bb","1f469-1f3ff-200d-1f4bb"],a:"4.0"},{n:["singer"],u:"1f9d1-200d-1f3a4",v:["1f9d1-1f3fb-200d-1f3a4","1f9d1-1f3fc-200d-1f3a4","1f9d1-1f3fd-200d-1f3a4","1f9d1-1f3fe-200d-1f3a4","1f9d1-1f3ff-200d-1f3a4"],a:"12.1"},{n:["man singer","male-singer"],u:"1f468-200d-1f3a4",v:["1f468-1f3fb-200d-1f3a4","1f468-1f3fc-200d-1f3a4","1f468-1f3fd-200d-1f3a4","1f468-1f3fe-200d-1f3a4","1f468-1f3ff-200d-1f3a4"],a:"4.0"},{n:["woman singer","female-singer"],u:"1f469-200d-1f3a4",v:["1f469-1f3fb-200d-1f3a4","1f469-1f3fc-200d-1f3a4","1f469-1f3fd-200d-1f3a4","1f469-1f3fe-200d-1f3a4","1f469-1f3ff-200d-1f3a4"],a:"4.0"},{n:["artist"],u:"1f9d1-200d-1f3a8",v:["1f9d1-1f3fb-200d-1f3a8","1f9d1-1f3fc-200d-1f3a8","1f9d1-1f3fd-200d-1f3a8","1f9d1-1f3fe-200d-1f3a8","1f9d1-1f3ff-200d-1f3a8"],a:"12.1"},{n:["man artist","male-artist"],u:"1f468-200d-1f3a8",v:["1f468-1f3fb-200d-1f3a8","1f468-1f3fc-200d-1f3a8","1f468-1f3fd-200d-1f3a8","1f468-1f3fe-200d-1f3a8","1f468-1f3ff-200d-1f3a8"],a:"4.0"},{n:["woman artist","female-artist"],u:"1f469-200d-1f3a8",v:["1f469-1f3fb-200d-1f3a8","1f469-1f3fc-200d-1f3a8","1f469-1f3fd-200d-1f3a8","1f469-1f3fe-200d-1f3a8","1f469-1f3ff-200d-1f3a8"],a:"4.0"},{n:["pilot"],u:"1f9d1-200d-2708-fe0f",v:["1f9d1-1f3fb-200d-2708-fe0f","1f9d1-1f3fc-200d-2708-fe0f","1f9d1-1f3fd-200d-2708-fe0f","1f9d1-1f3fe-200d-2708-fe0f","1f9d1-1f3ff-200d-2708-fe0f"],a:"12.1"},{n:["man pilot","male-pilot"],u:"1f468-200d-2708-fe0f",v:["1f468-1f3fb-200d-2708-fe0f","1f468-1f3fc-200d-2708-fe0f","1f468-1f3fd-200d-2708-fe0f","1f468-1f3fe-200d-2708-fe0f","1f468-1f3ff-200d-2708-fe0f"],a:"4.0"},{n:["woman pilot","female-pilot"],u:"1f469-200d-2708-fe0f",v:["1f469-1f3fb-200d-2708-fe0f","1f469-1f3fc-200d-2708-fe0f","1f469-1f3fd-200d-2708-fe0f","1f469-1f3fe-200d-2708-fe0f","1f469-1f3ff-200d-2708-fe0f"],a:"4.0"},{n:["astronaut"],u:"1f9d1-200d-1f680",v:["1f9d1-1f3fb-200d-1f680","1f9d1-1f3fc-200d-1f680","1f9d1-1f3fd-200d-1f680","1f9d1-1f3fe-200d-1f680","1f9d1-1f3ff-200d-1f680"],a:"12.1"},{n:["man astronaut","male-astronaut"],u:"1f468-200d-1f680",v:["1f468-1f3fb-200d-1f680","1f468-1f3fc-200d-1f680","1f468-1f3fd-200d-1f680","1f468-1f3fe-200d-1f680","1f468-1f3ff-200d-1f680"],a:"4.0"},{n:["woman astronaut","female-astronaut"],u:"1f469-200d-1f680",v:["1f469-1f3fb-200d-1f680","1f469-1f3fc-200d-1f680","1f469-1f3fd-200d-1f680","1f469-1f3fe-200d-1f680","1f469-1f3ff-200d-1f680"],a:"4.0"},{n:["firefighter"],u:"1f9d1-200d-1f692",v:["1f9d1-1f3fb-200d-1f692","1f9d1-1f3fc-200d-1f692","1f9d1-1f3fd-200d-1f692","1f9d1-1f3fe-200d-1f692","1f9d1-1f3ff-200d-1f692"],a:"12.1"},{n:["man firefighter","male-firefighter"],u:"1f468-200d-1f692",v:["1f468-1f3fb-200d-1f692","1f468-1f3fc-200d-1f692","1f468-1f3fd-200d-1f692","1f468-1f3fe-200d-1f692","1f468-1f3ff-200d-1f692"],a:"4.0"},{n:["woman firefighter","female-firefighter"],u:"1f469-200d-1f692",v:["1f469-1f3fb-200d-1f692","1f469-1f3fc-200d-1f692","1f469-1f3fd-200d-1f692","1f469-1f3fe-200d-1f692","1f469-1f3ff-200d-1f692"],a:"4.0"},{n:["cop","police officer"],u:"1f46e",v:["1f46e-1f3fb","1f46e-1f3fc","1f46e-1f3fd","1f46e-1f3fe","1f46e-1f3ff"],a:"0.6"},{n:["man police officer","male-police-officer"],u:"1f46e-200d-2642-fe0f",v:["1f46e-1f3fb-200d-2642-fe0f","1f46e-1f3fc-200d-2642-fe0f","1f46e-1f3fd-200d-2642-fe0f","1f46e-1f3fe-200d-2642-fe0f","1f46e-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman police officer","female-police-officer"],u:"1f46e-200d-2640-fe0f",v:["1f46e-1f3fb-200d-2640-fe0f","1f46e-1f3fc-200d-2640-fe0f","1f46e-1f3fd-200d-2640-fe0f","1f46e-1f3fe-200d-2640-fe0f","1f46e-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["detective","sleuth or spy"],u:"1f575-fe0f",v:["1f575-1f3fb","1f575-1f3fc","1f575-1f3fd","1f575-1f3fe","1f575-1f3ff"],a:"0.7"},{n:["man detective","male-detective"],u:"1f575-fe0f-200d-2642-fe0f",v:["1f575-1f3fb-200d-2642-fe0f","1f575-1f3fc-200d-2642-fe0f","1f575-1f3fd-200d-2642-fe0f","1f575-1f3fe-200d-2642-fe0f","1f575-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman detective","female-detective"],u:"1f575-fe0f-200d-2640-fe0f",v:["1f575-1f3fb-200d-2640-fe0f","1f575-1f3fc-200d-2640-fe0f","1f575-1f3fd-200d-2640-fe0f","1f575-1f3fe-200d-2640-fe0f","1f575-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["guardsman"],u:"1f482",v:["1f482-1f3fb","1f482-1f3fc","1f482-1f3fd","1f482-1f3fe","1f482-1f3ff"],a:"0.6"},{n:["man guard","male-guard"],u:"1f482-200d-2642-fe0f",v:["1f482-1f3fb-200d-2642-fe0f","1f482-1f3fc-200d-2642-fe0f","1f482-1f3fd-200d-2642-fe0f","1f482-1f3fe-200d-2642-fe0f","1f482-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman guard","female-guard"],u:"1f482-200d-2640-fe0f",v:["1f482-1f3fb-200d-2640-fe0f","1f482-1f3fc-200d-2640-fe0f","1f482-1f3fd-200d-2640-fe0f","1f482-1f3fe-200d-2640-fe0f","1f482-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["ninja"],u:"1f977",v:["1f977-1f3fb","1f977-1f3fc","1f977-1f3fd","1f977-1f3fe","1f977-1f3ff"],a:"13.0"},{n:["construction worker"],u:"1f477",v:["1f477-1f3fb","1f477-1f3fc","1f477-1f3fd","1f477-1f3fe","1f477-1f3ff"],a:"0.6"},{n:["man construction worker","male-construction-worker"],u:"1f477-200d-2642-fe0f",v:["1f477-1f3fb-200d-2642-fe0f","1f477-1f3fc-200d-2642-fe0f","1f477-1f3fd-200d-2642-fe0f","1f477-1f3fe-200d-2642-fe0f","1f477-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman construction worker","female-construction-worker"],u:"1f477-200d-2640-fe0f",v:["1f477-1f3fb-200d-2640-fe0f","1f477-1f3fc-200d-2640-fe0f","1f477-1f3fd-200d-2640-fe0f","1f477-1f3fe-200d-2640-fe0f","1f477-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["person with crown"],u:"1fac5",v:["1fac5-1f3fb","1fac5-1f3fc","1fac5-1f3fd","1fac5-1f3fe","1fac5-1f3ff"],a:"14.0"},{n:["prince"],u:"1f934",v:["1f934-1f3fb","1f934-1f3fc","1f934-1f3fd","1f934-1f3fe","1f934-1f3ff"],a:"3.0"},{n:["princess"],u:"1f478",v:["1f478-1f3fb","1f478-1f3fc","1f478-1f3fd","1f478-1f3fe","1f478-1f3ff"],a:"0.6"},{n:["man with turban"],u:"1f473",v:["1f473-1f3fb","1f473-1f3fc","1f473-1f3fd","1f473-1f3fe","1f473-1f3ff"],a:"0.6"},{n:["man wearing turban","man-wearing-turban"],u:"1f473-200d-2642-fe0f",v:["1f473-1f3fb-200d-2642-fe0f","1f473-1f3fc-200d-2642-fe0f","1f473-1f3fd-200d-2642-fe0f","1f473-1f3fe-200d-2642-fe0f","1f473-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman wearing turban","woman-wearing-turban"],u:"1f473-200d-2640-fe0f",v:["1f473-1f3fb-200d-2640-fe0f","1f473-1f3fc-200d-2640-fe0f","1f473-1f3fd-200d-2640-fe0f","1f473-1f3fe-200d-2640-fe0f","1f473-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["man with gua pi mao"],u:"1f472",v:["1f472-1f3fb","1f472-1f3fc","1f472-1f3fd","1f472-1f3fe","1f472-1f3ff"],a:"0.6"},{n:["person with headscarf"],u:"1f9d5",v:["1f9d5-1f3fb","1f9d5-1f3fc","1f9d5-1f3fd","1f9d5-1f3fe","1f9d5-1f3ff"],a:"5.0"},{n:["man in tuxedo","person in tuxedo"],u:"1f935",v:["1f935-1f3fb","1f935-1f3fc","1f935-1f3fd","1f935-1f3fe","1f935-1f3ff"],a:"3.0"},{n:["man in tuxedo"],u:"1f935-200d-2642-fe0f",v:["1f935-1f3fb-200d-2642-fe0f","1f935-1f3fc-200d-2642-fe0f","1f935-1f3fd-200d-2642-fe0f","1f935-1f3fe-200d-2642-fe0f","1f935-1f3ff-200d-2642-fe0f"],a:"13.0"},{n:["woman in tuxedo"],u:"1f935-200d-2640-fe0f",v:["1f935-1f3fb-200d-2640-fe0f","1f935-1f3fc-200d-2640-fe0f","1f935-1f3fd-200d-2640-fe0f","1f935-1f3fe-200d-2640-fe0f","1f935-1f3ff-200d-2640-fe0f"],a:"13.0"},{n:["bride with veil"],u:"1f470",v:["1f470-1f3fb","1f470-1f3fc","1f470-1f3fd","1f470-1f3fe","1f470-1f3ff"],a:"0.6"},{n:["man with veil"],u:"1f470-200d-2642-fe0f",v:["1f470-1f3fb-200d-2642-fe0f","1f470-1f3fc-200d-2642-fe0f","1f470-1f3fd-200d-2642-fe0f","1f470-1f3fe-200d-2642-fe0f","1f470-1f3ff-200d-2642-fe0f"],a:"13.0"},{n:["woman with veil"],u:"1f470-200d-2640-fe0f",v:["1f470-1f3fb-200d-2640-fe0f","1f470-1f3fc-200d-2640-fe0f","1f470-1f3fd-200d-2640-fe0f","1f470-1f3fe-200d-2640-fe0f","1f470-1f3ff-200d-2640-fe0f"],a:"13.0"},{n:["pregnant woman"],u:"1f930",v:["1f930-1f3fb","1f930-1f3fc","1f930-1f3fd","1f930-1f3fe","1f930-1f3ff"],a:"3.0"},{n:["pregnant man"],u:"1fac3",v:["1fac3-1f3fb","1fac3-1f3fc","1fac3-1f3fd","1fac3-1f3fe","1fac3-1f3ff"],a:"14.0"},{n:["pregnant person"],u:"1fac4",v:["1fac4-1f3fb","1fac4-1f3fc","1fac4-1f3fd","1fac4-1f3fe","1fac4-1f3ff"],a:"14.0"},{n:["breast-feeding"],u:"1f931",v:["1f931-1f3fb","1f931-1f3fc","1f931-1f3fd","1f931-1f3fe","1f931-1f3ff"],a:"5.0"},{n:["woman feeding baby"],u:"1f469-200d-1f37c",v:["1f469-1f3fb-200d-1f37c","1f469-1f3fc-200d-1f37c","1f469-1f3fd-200d-1f37c","1f469-1f3fe-200d-1f37c","1f469-1f3ff-200d-1f37c"],a:"13.0"},{n:["man feeding baby"],u:"1f468-200d-1f37c",v:["1f468-1f3fb-200d-1f37c","1f468-1f3fc-200d-1f37c","1f468-1f3fd-200d-1f37c","1f468-1f3fe-200d-1f37c","1f468-1f3ff-200d-1f37c"],a:"13.0"},{n:["person feeding baby"],u:"1f9d1-200d-1f37c",v:["1f9d1-1f3fb-200d-1f37c","1f9d1-1f3fc-200d-1f37c","1f9d1-1f3fd-200d-1f37c","1f9d1-1f3fe-200d-1f37c","1f9d1-1f3ff-200d-1f37c"],a:"13.0"},{n:["angel","baby angel"],u:"1f47c",v:["1f47c-1f3fb","1f47c-1f3fc","1f47c-1f3fd","1f47c-1f3fe","1f47c-1f3ff"],a:"0.6"},{n:["santa","father christmas"],u:"1f385",v:["1f385-1f3fb","1f385-1f3fc","1f385-1f3fd","1f385-1f3fe","1f385-1f3ff"],a:"0.6"},{n:["mrs claus","mother christmas"],u:"1f936",v:["1f936-1f3fb","1f936-1f3fc","1f936-1f3fd","1f936-1f3fe","1f936-1f3ff"],a:"3.0"},{n:["mx claus"],u:"1f9d1-200d-1f384",v:["1f9d1-1f3fb-200d-1f384","1f9d1-1f3fc-200d-1f384","1f9d1-1f3fd-200d-1f384","1f9d1-1f3fe-200d-1f384","1f9d1-1f3ff-200d-1f384"],a:"13.0"},{n:["superhero"],u:"1f9b8",v:["1f9b8-1f3fb","1f9b8-1f3fc","1f9b8-1f3fd","1f9b8-1f3fe","1f9b8-1f3ff"],a:"11.0"},{n:["man superhero","male superhero"],u:"1f9b8-200d-2642-fe0f",v:["1f9b8-1f3fb-200d-2642-fe0f","1f9b8-1f3fc-200d-2642-fe0f","1f9b8-1f3fd-200d-2642-fe0f","1f9b8-1f3fe-200d-2642-fe0f","1f9b8-1f3ff-200d-2642-fe0f"],a:"11.0"},{n:["woman superhero","female superhero"],u:"1f9b8-200d-2640-fe0f",v:["1f9b8-1f3fb-200d-2640-fe0f","1f9b8-1f3fc-200d-2640-fe0f","1f9b8-1f3fd-200d-2640-fe0f","1f9b8-1f3fe-200d-2640-fe0f","1f9b8-1f3ff-200d-2640-fe0f"],a:"11.0"},{n:["supervillain"],u:"1f9b9",v:["1f9b9-1f3fb","1f9b9-1f3fc","1f9b9-1f3fd","1f9b9-1f3fe","1f9b9-1f3ff"],a:"11.0"},{n:["man supervillain","male supervillain"],u:"1f9b9-200d-2642-fe0f",v:["1f9b9-1f3fb-200d-2642-fe0f","1f9b9-1f3fc-200d-2642-fe0f","1f9b9-1f3fd-200d-2642-fe0f","1f9b9-1f3fe-200d-2642-fe0f","1f9b9-1f3ff-200d-2642-fe0f"],a:"11.0"},{n:["woman supervillain","female supervillain"],u:"1f9b9-200d-2640-fe0f",v:["1f9b9-1f3fb-200d-2640-fe0f","1f9b9-1f3fc-200d-2640-fe0f","1f9b9-1f3fd-200d-2640-fe0f","1f9b9-1f3fe-200d-2640-fe0f","1f9b9-1f3ff-200d-2640-fe0f"],a:"11.0"},{n:["mage"],u:"1f9d9",v:["1f9d9-1f3fb","1f9d9-1f3fc","1f9d9-1f3fd","1f9d9-1f3fe","1f9d9-1f3ff"],a:"5.0"},{n:["man mage","male mage"],u:"1f9d9-200d-2642-fe0f",v:["1f9d9-1f3fb-200d-2642-fe0f","1f9d9-1f3fc-200d-2642-fe0f","1f9d9-1f3fd-200d-2642-fe0f","1f9d9-1f3fe-200d-2642-fe0f","1f9d9-1f3ff-200d-2642-fe0f"],a:"5.0"},{n:["woman mage","female mage"],u:"1f9d9-200d-2640-fe0f",v:["1f9d9-1f3fb-200d-2640-fe0f","1f9d9-1f3fc-200d-2640-fe0f","1f9d9-1f3fd-200d-2640-fe0f","1f9d9-1f3fe-200d-2640-fe0f","1f9d9-1f3ff-200d-2640-fe0f"],a:"5.0"},{n:["fairy"],u:"1f9da",v:["1f9da-1f3fb","1f9da-1f3fc","1f9da-1f3fd","1f9da-1f3fe","1f9da-1f3ff"],a:"5.0"},{n:["man fairy","male fairy"],u:"1f9da-200d-2642-fe0f",v:["1f9da-1f3fb-200d-2642-fe0f","1f9da-1f3fc-200d-2642-fe0f","1f9da-1f3fd-200d-2642-fe0f","1f9da-1f3fe-200d-2642-fe0f","1f9da-1f3ff-200d-2642-fe0f"],a:"5.0"},{n:["woman fairy","female fairy"],u:"1f9da-200d-2640-fe0f",v:["1f9da-1f3fb-200d-2640-fe0f","1f9da-1f3fc-200d-2640-fe0f","1f9da-1f3fd-200d-2640-fe0f","1f9da-1f3fe-200d-2640-fe0f","1f9da-1f3ff-200d-2640-fe0f"],a:"5.0"},{n:["vampire"],u:"1f9db",v:["1f9db-1f3fb","1f9db-1f3fc","1f9db-1f3fd","1f9db-1f3fe","1f9db-1f3ff"],a:"5.0"},{n:["man vampire","male vampire"],u:"1f9db-200d-2642-fe0f",v:["1f9db-1f3fb-200d-2642-fe0f","1f9db-1f3fc-200d-2642-fe0f","1f9db-1f3fd-200d-2642-fe0f","1f9db-1f3fe-200d-2642-fe0f","1f9db-1f3ff-200d-2642-fe0f"],a:"5.0"},{n:["woman vampire","female vampire"],u:"1f9db-200d-2640-fe0f",v:["1f9db-1f3fb-200d-2640-fe0f","1f9db-1f3fc-200d-2640-fe0f","1f9db-1f3fd-200d-2640-fe0f","1f9db-1f3fe-200d-2640-fe0f","1f9db-1f3ff-200d-2640-fe0f"],a:"5.0"},{n:["merperson"],u:"1f9dc",v:["1f9dc-1f3fb","1f9dc-1f3fc","1f9dc-1f3fd","1f9dc-1f3fe","1f9dc-1f3ff"],a:"5.0"},{n:["merman"],u:"1f9dc-200d-2642-fe0f",v:["1f9dc-1f3fb-200d-2642-fe0f","1f9dc-1f3fc-200d-2642-fe0f","1f9dc-1f3fd-200d-2642-fe0f","1f9dc-1f3fe-200d-2642-fe0f","1f9dc-1f3ff-200d-2642-fe0f"],a:"5.0"},{n:["mermaid"],u:"1f9dc-200d-2640-fe0f",v:["1f9dc-1f3fb-200d-2640-fe0f","1f9dc-1f3fc-200d-2640-fe0f","1f9dc-1f3fd-200d-2640-fe0f","1f9dc-1f3fe-200d-2640-fe0f","1f9dc-1f3ff-200d-2640-fe0f"],a:"5.0"},{n:["elf"],u:"1f9dd",v:["1f9dd-1f3fb","1f9dd-1f3fc","1f9dd-1f3fd","1f9dd-1f3fe","1f9dd-1f3ff"],a:"5.0"},{n:["man elf","male elf"],u:"1f9dd-200d-2642-fe0f",v:["1f9dd-1f3fb-200d-2642-fe0f","1f9dd-1f3fc-200d-2642-fe0f","1f9dd-1f3fd-200d-2642-fe0f","1f9dd-1f3fe-200d-2642-fe0f","1f9dd-1f3ff-200d-2642-fe0f"],a:"5.0"},{n:["woman elf","female elf"],u:"1f9dd-200d-2640-fe0f",v:["1f9dd-1f3fb-200d-2640-fe0f","1f9dd-1f3fc-200d-2640-fe0f","1f9dd-1f3fd-200d-2640-fe0f","1f9dd-1f3fe-200d-2640-fe0f","1f9dd-1f3ff-200d-2640-fe0f"],a:"5.0"},{n:["genie"],u:"1f9de",a:"5.0"},{n:["man genie","male genie"],u:"1f9de-200d-2642-fe0f",a:"5.0"},{n:["woman genie","female genie"],u:"1f9de-200d-2640-fe0f",a:"5.0"},{n:["zombie"],u:"1f9df",a:"5.0"},{n:["man zombie","male zombie"],u:"1f9df-200d-2642-fe0f",a:"5.0"},{n:["woman zombie","female zombie"],u:"1f9df-200d-2640-fe0f",a:"5.0"},{n:["troll"],u:"1f9cc",a:"14.0"},{n:["massage","face massage"],u:"1f486",v:["1f486-1f3fb","1f486-1f3fc","1f486-1f3fd","1f486-1f3fe","1f486-1f3ff"],a:"0.6"},{n:["man getting massage","man-getting-massage"],u:"1f486-200d-2642-fe0f",v:["1f486-1f3fb-200d-2642-fe0f","1f486-1f3fc-200d-2642-fe0f","1f486-1f3fd-200d-2642-fe0f","1f486-1f3fe-200d-2642-fe0f","1f486-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman getting massage","woman-getting-massage"],u:"1f486-200d-2640-fe0f",v:["1f486-1f3fb-200d-2640-fe0f","1f486-1f3fc-200d-2640-fe0f","1f486-1f3fd-200d-2640-fe0f","1f486-1f3fe-200d-2640-fe0f","1f486-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["haircut"],u:"1f487",v:["1f487-1f3fb","1f487-1f3fc","1f487-1f3fd","1f487-1f3fe","1f487-1f3ff"],a:"0.6"},{n:["man getting haircut","man-getting-haircut"],u:"1f487-200d-2642-fe0f",v:["1f487-1f3fb-200d-2642-fe0f","1f487-1f3fc-200d-2642-fe0f","1f487-1f3fd-200d-2642-fe0f","1f487-1f3fe-200d-2642-fe0f","1f487-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman getting haircut","woman-getting-haircut"],u:"1f487-200d-2640-fe0f",v:["1f487-1f3fb-200d-2640-fe0f","1f487-1f3fc-200d-2640-fe0f","1f487-1f3fd-200d-2640-fe0f","1f487-1f3fe-200d-2640-fe0f","1f487-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["walking","pedestrian"],u:"1f6b6",v:["1f6b6-1f3fb","1f6b6-1f3fc","1f6b6-1f3fd","1f6b6-1f3fe","1f6b6-1f3ff"],a:"0.6"},{n:["man walking","man-walking"],u:"1f6b6-200d-2642-fe0f",v:["1f6b6-1f3fb-200d-2642-fe0f","1f6b6-1f3fc-200d-2642-fe0f","1f6b6-1f3fd-200d-2642-fe0f","1f6b6-1f3fe-200d-2642-fe0f","1f6b6-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman walking","woman-walking"],u:"1f6b6-200d-2640-fe0f",v:["1f6b6-1f3fb-200d-2640-fe0f","1f6b6-1f3fc-200d-2640-fe0f","1f6b6-1f3fd-200d-2640-fe0f","1f6b6-1f3fe-200d-2640-fe0f","1f6b6-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["standing person"],u:"1f9cd",v:["1f9cd-1f3fb","1f9cd-1f3fc","1f9cd-1f3fd","1f9cd-1f3fe","1f9cd-1f3ff"],a:"12.0"},{n:["man standing"],u:"1f9cd-200d-2642-fe0f",v:["1f9cd-1f3fb-200d-2642-fe0f","1f9cd-1f3fc-200d-2642-fe0f","1f9cd-1f3fd-200d-2642-fe0f","1f9cd-1f3fe-200d-2642-fe0f","1f9cd-1f3ff-200d-2642-fe0f"],a:"12.0"},{n:["woman standing"],u:"1f9cd-200d-2640-fe0f",v:["1f9cd-1f3fb-200d-2640-fe0f","1f9cd-1f3fc-200d-2640-fe0f","1f9cd-1f3fd-200d-2640-fe0f","1f9cd-1f3fe-200d-2640-fe0f","1f9cd-1f3ff-200d-2640-fe0f"],a:"12.0"},{n:["kneeling person"],u:"1f9ce",v:["1f9ce-1f3fb","1f9ce-1f3fc","1f9ce-1f3fd","1f9ce-1f3fe","1f9ce-1f3ff"],a:"12.0"},{n:["man kneeling"],u:"1f9ce-200d-2642-fe0f",v:["1f9ce-1f3fb-200d-2642-fe0f","1f9ce-1f3fc-200d-2642-fe0f","1f9ce-1f3fd-200d-2642-fe0f","1f9ce-1f3fe-200d-2642-fe0f","1f9ce-1f3ff-200d-2642-fe0f"],a:"12.0"},{n:["woman kneeling"],u:"1f9ce-200d-2640-fe0f",v:["1f9ce-1f3fb-200d-2640-fe0f","1f9ce-1f3fc-200d-2640-fe0f","1f9ce-1f3fd-200d-2640-fe0f","1f9ce-1f3fe-200d-2640-fe0f","1f9ce-1f3ff-200d-2640-fe0f"],a:"12.0"},{n:["person with white cane","person with probing cane"],u:"1f9d1-200d-1f9af",v:["1f9d1-1f3fb-200d-1f9af","1f9d1-1f3fc-200d-1f9af","1f9d1-1f3fd-200d-1f9af","1f9d1-1f3fe-200d-1f9af","1f9d1-1f3ff-200d-1f9af"],a:"12.1"},{n:["man with white cane","man with probing cane"],u:"1f468-200d-1f9af",v:["1f468-1f3fb-200d-1f9af","1f468-1f3fc-200d-1f9af","1f468-1f3fd-200d-1f9af","1f468-1f3fe-200d-1f9af","1f468-1f3ff-200d-1f9af"],a:"12.0"},{n:["woman with white cane","woman with probing cane"],u:"1f469-200d-1f9af",v:["1f469-1f3fb-200d-1f9af","1f469-1f3fc-200d-1f9af","1f469-1f3fd-200d-1f9af","1f469-1f3fe-200d-1f9af","1f469-1f3ff-200d-1f9af"],a:"12.0"},{n:["person in motorized wheelchair"],u:"1f9d1-200d-1f9bc",v:["1f9d1-1f3fb-200d-1f9bc","1f9d1-1f3fc-200d-1f9bc","1f9d1-1f3fd-200d-1f9bc","1f9d1-1f3fe-200d-1f9bc","1f9d1-1f3ff-200d-1f9bc"],a:"12.1"},{n:["man in motorized wheelchair"],u:"1f468-200d-1f9bc",v:["1f468-1f3fb-200d-1f9bc","1f468-1f3fc-200d-1f9bc","1f468-1f3fd-200d-1f9bc","1f468-1f3fe-200d-1f9bc","1f468-1f3ff-200d-1f9bc"],a:"12.0"},{n:["woman in motorized wheelchair"],u:"1f469-200d-1f9bc",v:["1f469-1f3fb-200d-1f9bc","1f469-1f3fc-200d-1f9bc","1f469-1f3fd-200d-1f9bc","1f469-1f3fe-200d-1f9bc","1f469-1f3ff-200d-1f9bc"],a:"12.0"},{n:["person in manual wheelchair"],u:"1f9d1-200d-1f9bd",v:["1f9d1-1f3fb-200d-1f9bd","1f9d1-1f3fc-200d-1f9bd","1f9d1-1f3fd-200d-1f9bd","1f9d1-1f3fe-200d-1f9bd","1f9d1-1f3ff-200d-1f9bd"],a:"12.1"},{n:["man in manual wheelchair"],u:"1f468-200d-1f9bd",v:["1f468-1f3fb-200d-1f9bd","1f468-1f3fc-200d-1f9bd","1f468-1f3fd-200d-1f9bd","1f468-1f3fe-200d-1f9bd","1f468-1f3ff-200d-1f9bd"],a:"12.0"},{n:["woman in manual wheelchair"],u:"1f469-200d-1f9bd",v:["1f469-1f3fb-200d-1f9bd","1f469-1f3fc-200d-1f9bd","1f469-1f3fd-200d-1f9bd","1f469-1f3fe-200d-1f9bd","1f469-1f3ff-200d-1f9bd"],a:"12.0"},{n:["runner","running"],u:"1f3c3",v:["1f3c3-1f3fb","1f3c3-1f3fc","1f3c3-1f3fd","1f3c3-1f3fe","1f3c3-1f3ff"],a:"0.6"},{n:["man running","man-running"],u:"1f3c3-200d-2642-fe0f",v:["1f3c3-1f3fb-200d-2642-fe0f","1f3c3-1f3fc-200d-2642-fe0f","1f3c3-1f3fd-200d-2642-fe0f","1f3c3-1f3fe-200d-2642-fe0f","1f3c3-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman running","woman-running"],u:"1f3c3-200d-2640-fe0f",v:["1f3c3-1f3fb-200d-2640-fe0f","1f3c3-1f3fc-200d-2640-fe0f","1f3c3-1f3fd-200d-2640-fe0f","1f3c3-1f3fe-200d-2640-fe0f","1f3c3-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["dancer"],u:"1f483",v:["1f483-1f3fb","1f483-1f3fc","1f483-1f3fd","1f483-1f3fe","1f483-1f3ff"],a:"0.6"},{n:["man dancing"],u:"1f57a",v:["1f57a-1f3fb","1f57a-1f3fc","1f57a-1f3fd","1f57a-1f3fe","1f57a-1f3ff"],a:"3.0"},{n:["person in suit levitating","man in business suit levitating"],u:"1f574-fe0f",v:["1f574-1f3fb","1f574-1f3fc","1f574-1f3fd","1f574-1f3fe","1f574-1f3ff"],a:"0.7"},{n:["dancers","woman with bunny ears"],u:"1f46f",a:"0.6"},{n:["men with bunny ears","men-with-bunny-ears-partying","man-with-bunny-ears-partying"],u:"1f46f-200d-2642-fe0f",a:"4.0"},{n:["women with bunny ears","women-with-bunny-ears-partying","woman-with-bunny-ears-partying"],u:"1f46f-200d-2640-fe0f",a:"4.0"},{n:["person in steamy room"],u:"1f9d6",v:["1f9d6-1f3fb","1f9d6-1f3fc","1f9d6-1f3fd","1f9d6-1f3fe","1f9d6-1f3ff"],a:"5.0"},{n:["man in steamy room"],u:"1f9d6-200d-2642-fe0f",v:["1f9d6-1f3fb-200d-2642-fe0f","1f9d6-1f3fc-200d-2642-fe0f","1f9d6-1f3fd-200d-2642-fe0f","1f9d6-1f3fe-200d-2642-fe0f","1f9d6-1f3ff-200d-2642-fe0f"],a:"5.0"},{n:["woman in steamy room"],u:"1f9d6-200d-2640-fe0f",v:["1f9d6-1f3fb-200d-2640-fe0f","1f9d6-1f3fc-200d-2640-fe0f","1f9d6-1f3fd-200d-2640-fe0f","1f9d6-1f3fe-200d-2640-fe0f","1f9d6-1f3ff-200d-2640-fe0f"],a:"5.0"},{n:["person climbing"],u:"1f9d7",v:["1f9d7-1f3fb","1f9d7-1f3fc","1f9d7-1f3fd","1f9d7-1f3fe","1f9d7-1f3ff"],a:"5.0"},{n:["man climbing"],u:"1f9d7-200d-2642-fe0f",v:["1f9d7-1f3fb-200d-2642-fe0f","1f9d7-1f3fc-200d-2642-fe0f","1f9d7-1f3fd-200d-2642-fe0f","1f9d7-1f3fe-200d-2642-fe0f","1f9d7-1f3ff-200d-2642-fe0f"],a:"5.0"},{n:["woman climbing"],u:"1f9d7-200d-2640-fe0f",v:["1f9d7-1f3fb-200d-2640-fe0f","1f9d7-1f3fc-200d-2640-fe0f","1f9d7-1f3fd-200d-2640-fe0f","1f9d7-1f3fe-200d-2640-fe0f","1f9d7-1f3ff-200d-2640-fe0f"],a:"5.0"},{n:["fencer"],u:"1f93a",a:"3.0"},{n:["horse racing"],u:"1f3c7",v:["1f3c7-1f3fb","1f3c7-1f3fc","1f3c7-1f3fd","1f3c7-1f3fe","1f3c7-1f3ff"],a:"1.0"},{n:["skier"],u:"26f7-fe0f",a:"0.7"},{n:["snowboarder"],u:"1f3c2",v:["1f3c2-1f3fb","1f3c2-1f3fc","1f3c2-1f3fd","1f3c2-1f3fe","1f3c2-1f3ff"],a:"0.6"},{n:["golfer","person golfing"],u:"1f3cc-fe0f",v:["1f3cc-1f3fb","1f3cc-1f3fc","1f3cc-1f3fd","1f3cc-1f3fe","1f3cc-1f3ff"],a:"0.7"},{n:["man golfing","man-golfing"],u:"1f3cc-fe0f-200d-2642-fe0f",v:["1f3cc-1f3fb-200d-2642-fe0f","1f3cc-1f3fc-200d-2642-fe0f","1f3cc-1f3fd-200d-2642-fe0f","1f3cc-1f3fe-200d-2642-fe0f","1f3cc-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman golfing","woman-golfing"],u:"1f3cc-fe0f-200d-2640-fe0f",v:["1f3cc-1f3fb-200d-2640-fe0f","1f3cc-1f3fc-200d-2640-fe0f","1f3cc-1f3fd-200d-2640-fe0f","1f3cc-1f3fe-200d-2640-fe0f","1f3cc-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["surfer"],u:"1f3c4",v:["1f3c4-1f3fb","1f3c4-1f3fc","1f3c4-1f3fd","1f3c4-1f3fe","1f3c4-1f3ff"],a:"0.6"},{n:["man surfing","man-surfing"],u:"1f3c4-200d-2642-fe0f",v:["1f3c4-1f3fb-200d-2642-fe0f","1f3c4-1f3fc-200d-2642-fe0f","1f3c4-1f3fd-200d-2642-fe0f","1f3c4-1f3fe-200d-2642-fe0f","1f3c4-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman surfing","woman-surfing"],u:"1f3c4-200d-2640-fe0f",v:["1f3c4-1f3fb-200d-2640-fe0f","1f3c4-1f3fc-200d-2640-fe0f","1f3c4-1f3fd-200d-2640-fe0f","1f3c4-1f3fe-200d-2640-fe0f","1f3c4-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["rowboat"],u:"1f6a3",v:["1f6a3-1f3fb","1f6a3-1f3fc","1f6a3-1f3fd","1f6a3-1f3fe","1f6a3-1f3ff"],a:"1.0"},{n:["man rowing boat","man-rowing-boat"],u:"1f6a3-200d-2642-fe0f",v:["1f6a3-1f3fb-200d-2642-fe0f","1f6a3-1f3fc-200d-2642-fe0f","1f6a3-1f3fd-200d-2642-fe0f","1f6a3-1f3fe-200d-2642-fe0f","1f6a3-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman rowing boat","woman-rowing-boat"],u:"1f6a3-200d-2640-fe0f",v:["1f6a3-1f3fb-200d-2640-fe0f","1f6a3-1f3fc-200d-2640-fe0f","1f6a3-1f3fd-200d-2640-fe0f","1f6a3-1f3fe-200d-2640-fe0f","1f6a3-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["swimmer"],u:"1f3ca",v:["1f3ca-1f3fb","1f3ca-1f3fc","1f3ca-1f3fd","1f3ca-1f3fe","1f3ca-1f3ff"],a:"0.6"},{n:["man swimming","man-swimming"],u:"1f3ca-200d-2642-fe0f",v:["1f3ca-1f3fb-200d-2642-fe0f","1f3ca-1f3fc-200d-2642-fe0f","1f3ca-1f3fd-200d-2642-fe0f","1f3ca-1f3fe-200d-2642-fe0f","1f3ca-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman swimming","woman-swimming"],u:"1f3ca-200d-2640-fe0f",v:["1f3ca-1f3fb-200d-2640-fe0f","1f3ca-1f3fc-200d-2640-fe0f","1f3ca-1f3fd-200d-2640-fe0f","1f3ca-1f3fe-200d-2640-fe0f","1f3ca-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["person with ball","person bouncing ball"],u:"26f9-fe0f",v:["26f9-1f3fb","26f9-1f3fc","26f9-1f3fd","26f9-1f3fe","26f9-1f3ff"],a:"0.7"},{n:["man bouncing ball","man-bouncing-ball"],u:"26f9-fe0f-200d-2642-fe0f",v:["26f9-1f3fb-200d-2642-fe0f","26f9-1f3fc-200d-2642-fe0f","26f9-1f3fd-200d-2642-fe0f","26f9-1f3fe-200d-2642-fe0f","26f9-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman bouncing ball","woman-bouncing-ball"],u:"26f9-fe0f-200d-2640-fe0f",v:["26f9-1f3fb-200d-2640-fe0f","26f9-1f3fc-200d-2640-fe0f","26f9-1f3fd-200d-2640-fe0f","26f9-1f3fe-200d-2640-fe0f","26f9-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["weight lifter","person lifting weights"],u:"1f3cb-fe0f",v:["1f3cb-1f3fb","1f3cb-1f3fc","1f3cb-1f3fd","1f3cb-1f3fe","1f3cb-1f3ff"],a:"0.7"},{n:["man lifting weights","man-lifting-weights"],u:"1f3cb-fe0f-200d-2642-fe0f",v:["1f3cb-1f3fb-200d-2642-fe0f","1f3cb-1f3fc-200d-2642-fe0f","1f3cb-1f3fd-200d-2642-fe0f","1f3cb-1f3fe-200d-2642-fe0f","1f3cb-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman lifting weights","woman-lifting-weights"],u:"1f3cb-fe0f-200d-2640-fe0f",v:["1f3cb-1f3fb-200d-2640-fe0f","1f3cb-1f3fc-200d-2640-fe0f","1f3cb-1f3fd-200d-2640-fe0f","1f3cb-1f3fe-200d-2640-fe0f","1f3cb-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["bicyclist"],u:"1f6b4",v:["1f6b4-1f3fb","1f6b4-1f3fc","1f6b4-1f3fd","1f6b4-1f3fe","1f6b4-1f3ff"],a:"1.0"},{n:["man biking","man-biking"],u:"1f6b4-200d-2642-fe0f",v:["1f6b4-1f3fb-200d-2642-fe0f","1f6b4-1f3fc-200d-2642-fe0f","1f6b4-1f3fd-200d-2642-fe0f","1f6b4-1f3fe-200d-2642-fe0f","1f6b4-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman biking","woman-biking"],u:"1f6b4-200d-2640-fe0f",v:["1f6b4-1f3fb-200d-2640-fe0f","1f6b4-1f3fc-200d-2640-fe0f","1f6b4-1f3fd-200d-2640-fe0f","1f6b4-1f3fe-200d-2640-fe0f","1f6b4-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["mountain bicyclist"],u:"1f6b5",v:["1f6b5-1f3fb","1f6b5-1f3fc","1f6b5-1f3fd","1f6b5-1f3fe","1f6b5-1f3ff"],a:"1.0"},{n:["man mountain biking","man-mountain-biking"],u:"1f6b5-200d-2642-fe0f",v:["1f6b5-1f3fb-200d-2642-fe0f","1f6b5-1f3fc-200d-2642-fe0f","1f6b5-1f3fd-200d-2642-fe0f","1f6b5-1f3fe-200d-2642-fe0f","1f6b5-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman mountain biking","woman-mountain-biking"],u:"1f6b5-200d-2640-fe0f",v:["1f6b5-1f3fb-200d-2640-fe0f","1f6b5-1f3fc-200d-2640-fe0f","1f6b5-1f3fd-200d-2640-fe0f","1f6b5-1f3fe-200d-2640-fe0f","1f6b5-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["person doing cartwheel"],u:"1f938",v:["1f938-1f3fb","1f938-1f3fc","1f938-1f3fd","1f938-1f3fe","1f938-1f3ff"],a:"3.0"},{n:["man cartwheeling","man-cartwheeling"],u:"1f938-200d-2642-fe0f",v:["1f938-1f3fb-200d-2642-fe0f","1f938-1f3fc-200d-2642-fe0f","1f938-1f3fd-200d-2642-fe0f","1f938-1f3fe-200d-2642-fe0f","1f938-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman cartwheeling","woman-cartwheeling"],u:"1f938-200d-2640-fe0f",v:["1f938-1f3fb-200d-2640-fe0f","1f938-1f3fc-200d-2640-fe0f","1f938-1f3fd-200d-2640-fe0f","1f938-1f3fe-200d-2640-fe0f","1f938-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["wrestlers"],u:"1f93c",a:"3.0"},{n:["men wrestling","man-wrestling"],u:"1f93c-200d-2642-fe0f",a:"4.0"},{n:["women wrestling","woman-wrestling"],u:"1f93c-200d-2640-fe0f",a:"4.0"},{n:["water polo"],u:"1f93d",v:["1f93d-1f3fb","1f93d-1f3fc","1f93d-1f3fd","1f93d-1f3fe","1f93d-1f3ff"],a:"3.0"},{n:["man playing water polo","man-playing-water-polo"],u:"1f93d-200d-2642-fe0f",v:["1f93d-1f3fb-200d-2642-fe0f","1f93d-1f3fc-200d-2642-fe0f","1f93d-1f3fd-200d-2642-fe0f","1f93d-1f3fe-200d-2642-fe0f","1f93d-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman playing water polo","woman-playing-water-polo"],u:"1f93d-200d-2640-fe0f",v:["1f93d-1f3fb-200d-2640-fe0f","1f93d-1f3fc-200d-2640-fe0f","1f93d-1f3fd-200d-2640-fe0f","1f93d-1f3fe-200d-2640-fe0f","1f93d-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["handball"],u:"1f93e",v:["1f93e-1f3fb","1f93e-1f3fc","1f93e-1f3fd","1f93e-1f3fe","1f93e-1f3ff"],a:"3.0"},{n:["man playing handball","man-playing-handball"],u:"1f93e-200d-2642-fe0f",v:["1f93e-1f3fb-200d-2642-fe0f","1f93e-1f3fc-200d-2642-fe0f","1f93e-1f3fd-200d-2642-fe0f","1f93e-1f3fe-200d-2642-fe0f","1f93e-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman playing handball","woman-playing-handball"],u:"1f93e-200d-2640-fe0f",v:["1f93e-1f3fb-200d-2640-fe0f","1f93e-1f3fc-200d-2640-fe0f","1f93e-1f3fd-200d-2640-fe0f","1f93e-1f3fe-200d-2640-fe0f","1f93e-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["juggling"],u:"1f939",v:["1f939-1f3fb","1f939-1f3fc","1f939-1f3fd","1f939-1f3fe","1f939-1f3ff"],a:"3.0"},{n:["man juggling","man-juggling"],u:"1f939-200d-2642-fe0f",v:["1f939-1f3fb-200d-2642-fe0f","1f939-1f3fc-200d-2642-fe0f","1f939-1f3fd-200d-2642-fe0f","1f939-1f3fe-200d-2642-fe0f","1f939-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman juggling","woman-juggling"],u:"1f939-200d-2640-fe0f",v:["1f939-1f3fb-200d-2640-fe0f","1f939-1f3fc-200d-2640-fe0f","1f939-1f3fd-200d-2640-fe0f","1f939-1f3fe-200d-2640-fe0f","1f939-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["person in lotus position"],u:"1f9d8",v:["1f9d8-1f3fb","1f9d8-1f3fc","1f9d8-1f3fd","1f9d8-1f3fe","1f9d8-1f3ff"],a:"5.0"},{n:["man in lotus position"],u:"1f9d8-200d-2642-fe0f",v:["1f9d8-1f3fb-200d-2642-fe0f","1f9d8-1f3fc-200d-2642-fe0f","1f9d8-1f3fd-200d-2642-fe0f","1f9d8-1f3fe-200d-2642-fe0f","1f9d8-1f3ff-200d-2642-fe0f"],a:"5.0"},{n:["woman in lotus position"],u:"1f9d8-200d-2640-fe0f",v:["1f9d8-1f3fb-200d-2640-fe0f","1f9d8-1f3fc-200d-2640-fe0f","1f9d8-1f3fd-200d-2640-fe0f","1f9d8-1f3fe-200d-2640-fe0f","1f9d8-1f3ff-200d-2640-fe0f"],a:"5.0"},{n:["bath"],u:"1f6c0",v:["1f6c0-1f3fb","1f6c0-1f3fc","1f6c0-1f3fd","1f6c0-1f3fe","1f6c0-1f3ff"],a:"0.6"},{n:["sleeping accommodation"],u:"1f6cc",v:["1f6cc-1f3fb","1f6cc-1f3fc","1f6cc-1f3fd","1f6cc-1f3fe","1f6cc-1f3ff"],a:"1.0"},{n:["people holding hands"],u:"1f9d1-200d-1f91d-200d-1f9d1",v:["1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fb","1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fc","1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fd","1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fe","1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3ff","1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fb","1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fc","1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fd","1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fe","1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3ff","1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fb","1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fc","1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fd","1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fe","1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3ff","1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fb","1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fc","1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fd","1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fe","1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3ff","1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fb","1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fc","1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fd","1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fe","1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3ff"],a:"12.0"},{n:["women holding hands","two women holding hands"],u:"1f46d",v:["1f46d-1f3fb","1f46d-1f3fc","1f46d-1f3fd","1f46d-1f3fe","1f46d-1f3ff","1f469-1f3fb-200d-1f91d-200d-1f469-1f3fc","1f469-1f3fb-200d-1f91d-200d-1f469-1f3fd","1f469-1f3fb-200d-1f91d-200d-1f469-1f3fe","1f469-1f3fb-200d-1f91d-200d-1f469-1f3ff","1f469-1f3fc-200d-1f91d-200d-1f469-1f3fb","1f469-1f3fc-200d-1f91d-200d-1f469-1f3fd","1f469-1f3fc-200d-1f91d-200d-1f469-1f3fe","1f469-1f3fc-200d-1f91d-200d-1f469-1f3ff","1f469-1f3fd-200d-1f91d-200d-1f469-1f3fb","1f469-1f3fd-200d-1f91d-200d-1f469-1f3fc","1f469-1f3fd-200d-1f91d-200d-1f469-1f3fe","1f469-1f3fd-200d-1f91d-200d-1f469-1f3ff","1f469-1f3fe-200d-1f91d-200d-1f469-1f3fb","1f469-1f3fe-200d-1f91d-200d-1f469-1f3fc","1f469-1f3fe-200d-1f91d-200d-1f469-1f3fd","1f469-1f3fe-200d-1f91d-200d-1f469-1f3ff","1f469-1f3ff-200d-1f91d-200d-1f469-1f3fb","1f469-1f3ff-200d-1f91d-200d-1f469-1f3fc","1f469-1f3ff-200d-1f91d-200d-1f469-1f3fd","1f469-1f3ff-200d-1f91d-200d-1f469-1f3fe"],a:"1.0"},{n:["couple","man and woman holding hands","woman and man holding hands"],u:"1f46b",v:["1f46b-1f3fb","1f46b-1f3fc","1f46b-1f3fd","1f46b-1f3fe","1f46b-1f3ff","1f469-1f3fb-200d-1f91d-200d-1f468-1f3fc","1f469-1f3fb-200d-1f91d-200d-1f468-1f3fd","1f469-1f3fb-200d-1f91d-200d-1f468-1f3fe","1f469-1f3fb-200d-1f91d-200d-1f468-1f3ff","1f469-1f3fc-200d-1f91d-200d-1f468-1f3fb","1f469-1f3fc-200d-1f91d-200d-1f468-1f3fd","1f469-1f3fc-200d-1f91d-200d-1f468-1f3fe","1f469-1f3fc-200d-1f91d-200d-1f468-1f3ff","1f469-1f3fd-200d-1f91d-200d-1f468-1f3fb","1f469-1f3fd-200d-1f91d-200d-1f468-1f3fc","1f469-1f3fd-200d-1f91d-200d-1f468-1f3fe","1f469-1f3fd-200d-1f91d-200d-1f468-1f3ff","1f469-1f3fe-200d-1f91d-200d-1f468-1f3fb","1f469-1f3fe-200d-1f91d-200d-1f468-1f3fc","1f469-1f3fe-200d-1f91d-200d-1f468-1f3fd","1f469-1f3fe-200d-1f91d-200d-1f468-1f3ff","1f469-1f3ff-200d-1f91d-200d-1f468-1f3fb","1f469-1f3ff-200d-1f91d-200d-1f468-1f3fc","1f469-1f3ff-200d-1f91d-200d-1f468-1f3fd","1f469-1f3ff-200d-1f91d-200d-1f468-1f3fe"],a:"0.6"},{n:["men holding hands","two men holding hands"],u:"1f46c",v:["1f46c-1f3fb","1f46c-1f3fc","1f46c-1f3fd","1f46c-1f3fe","1f46c-1f3ff","1f468-1f3fb-200d-1f91d-200d-1f468-1f3fc","1f468-1f3fb-200d-1f91d-200d-1f468-1f3fd","1f468-1f3fb-200d-1f91d-200d-1f468-1f3fe","1f468-1f3fb-200d-1f91d-200d-1f468-1f3ff","1f468-1f3fc-200d-1f91d-200d-1f468-1f3fb","1f468-1f3fc-200d-1f91d-200d-1f468-1f3fd","1f468-1f3fc-200d-1f91d-200d-1f468-1f3fe","1f468-1f3fc-200d-1f91d-200d-1f468-1f3ff","1f468-1f3fd-200d-1f91d-200d-1f468-1f3fb","1f468-1f3fd-200d-1f91d-200d-1f468-1f3fc","1f468-1f3fd-200d-1f91d-200d-1f468-1f3fe","1f468-1f3fd-200d-1f91d-200d-1f468-1f3ff","1f468-1f3fe-200d-1f91d-200d-1f468-1f3fb","1f468-1f3fe-200d-1f91d-200d-1f468-1f3fc","1f468-1f3fe-200d-1f91d-200d-1f468-1f3fd","1f468-1f3fe-200d-1f91d-200d-1f468-1f3ff","1f468-1f3ff-200d-1f91d-200d-1f468-1f3fb","1f468-1f3ff-200d-1f91d-200d-1f468-1f3fc","1f468-1f3ff-200d-1f91d-200d-1f468-1f3fd","1f468-1f3ff-200d-1f91d-200d-1f468-1f3fe"],a:"1.0"},{n:["kiss","couplekiss"],u:"1f48f",v:["1f48f-1f3fb","1f48f-1f3fc","1f48f-1f3fd","1f48f-1f3fe","1f48f-1f3ff","1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc","1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd","1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe","1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff","1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb","1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd","1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe","1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff","1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb","1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc","1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe","1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff","1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb","1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc","1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd","1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff","1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb","1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc","1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd","1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe"],a:"0.6"},{n:["woman-kiss-man","kiss: woman, man"],u:"1f469-200d-2764-fe0f-200d-1f48b-200d-1f468",v:["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb","1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc","1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd","1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe","1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff","1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb","1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc","1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd","1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe","1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff","1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb","1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc","1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd","1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe","1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff","1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb","1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc","1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd","1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe","1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff","1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb","1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc","1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd","1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe","1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff"],a:"2.0"},{n:["man-kiss-man","kiss: man, man"],u:"1f468-200d-2764-fe0f-200d-1f48b-200d-1f468",v:["1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb","1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc","1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd","1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe","1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff","1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb","1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc","1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd","1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe","1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff","1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb","1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc","1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd","1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe","1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff","1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb","1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc","1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd","1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe","1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff","1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb","1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc","1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd","1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe","1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff"],a:"2.0"},{n:["woman-kiss-woman","kiss: woman, woman"],u:"1f469-200d-2764-fe0f-200d-1f48b-200d-1f469",v:["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb","1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc","1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd","1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe","1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff","1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb","1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc","1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd","1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe","1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff","1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb","1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc","1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd","1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe","1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff","1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb","1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc","1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd","1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe","1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff","1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb","1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc","1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd","1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe","1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff"],a:"2.0"},{n:["couple with heart"],u:"1f491",v:["1f491-1f3fb","1f491-1f3fc","1f491-1f3fd","1f491-1f3fe","1f491-1f3ff","1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fc","1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fd","1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fe","1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3ff","1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fb","1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fd","1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fe","1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3ff","1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fb","1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fc","1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fe","1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3ff","1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fb","1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fc","1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fd","1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3ff","1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fb","1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fc","1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fd","1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fe"],a:"0.6"},{n:["woman-heart-man","couple with heart: woman, man"],u:"1f469-200d-2764-fe0f-200d-1f468",v:["1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fb","1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fc","1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fd","1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fe","1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3ff","1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fb","1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fc","1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fd","1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fe","1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3ff","1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fb","1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fc","1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fd","1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fe","1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3ff","1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fb","1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fc","1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fd","1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fe","1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3ff","1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fb","1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fc","1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fd","1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fe","1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3ff"],a:"2.0"},{n:["man-heart-man","couple with heart: man, man"],u:"1f468-200d-2764-fe0f-200d-1f468",v:["1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fb","1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fc","1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fd","1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fe","1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3ff","1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fb","1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fc","1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fd","1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fe","1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3ff","1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fb","1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fc","1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fd","1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fe","1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3ff","1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fb","1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fc","1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fd","1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fe","1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3ff","1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fb","1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fc","1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fd","1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fe","1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3ff"],a:"2.0"},{n:["woman-heart-woman","couple with heart: woman, woman"],u:"1f469-200d-2764-fe0f-200d-1f469",v:["1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fb","1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fc","1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fd","1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fe","1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3ff","1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fb","1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fc","1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fd","1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fe","1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3ff","1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fb","1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fc","1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fd","1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fe","1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3ff","1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fb","1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fc","1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fd","1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fe","1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3ff","1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fb","1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fc","1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fd","1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fe","1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3ff"],a:"2.0"},{n:["family"],u:"1f46a",a:"0.6"},{n:["man-woman-boy","family: man, woman, boy"],u:"1f468-200d-1f469-200d-1f466",a:"2.0"},{n:["man-woman-girl","family: man, woman, girl"],u:"1f468-200d-1f469-200d-1f467",a:"2.0"},{n:["man-woman-girl-boy","family: man, woman, girl, boy"],u:"1f468-200d-1f469-200d-1f467-200d-1f466",a:"2.0"},{n:["man-woman-boy-boy","family: man, woman, boy, boy"],u:"1f468-200d-1f469-200d-1f466-200d-1f466",a:"2.0"},{n:["man-woman-girl-girl","family: man, woman, girl, girl"],u:"1f468-200d-1f469-200d-1f467-200d-1f467",a:"2.0"},{n:["man-man-boy","family: man, man, boy"],u:"1f468-200d-1f468-200d-1f466",a:"2.0"},{n:["man-man-girl","family: man, man, girl"],u:"1f468-200d-1f468-200d-1f467",a:"2.0"},{n:["man-man-girl-boy","family: man, man, girl, boy"],u:"1f468-200d-1f468-200d-1f467-200d-1f466",a:"2.0"},{n:["man-man-boy-boy","family: man, man, boy, boy"],u:"1f468-200d-1f468-200d-1f466-200d-1f466",a:"2.0"},{n:["man-man-girl-girl","family: man, man, girl, girl"],u:"1f468-200d-1f468-200d-1f467-200d-1f467",a:"2.0"},{n:["woman-woman-boy","family: woman, woman, boy"],u:"1f469-200d-1f469-200d-1f466",a:"2.0"},{n:["woman-woman-girl","family: woman, woman, girl"],u:"1f469-200d-1f469-200d-1f467",a:"2.0"},{n:["woman-woman-girl-boy","family: woman, woman, girl, boy"],u:"1f469-200d-1f469-200d-1f467-200d-1f466",a:"2.0"},{n:["woman-woman-boy-boy","family: woman, woman, boy, boy"],u:"1f469-200d-1f469-200d-1f466-200d-1f466",a:"2.0"},{n:["woman-woman-girl-girl","family: woman, woman, girl, girl"],u:"1f469-200d-1f469-200d-1f467-200d-1f467",a:"2.0"},{n:["man-boy","family: man, boy"],u:"1f468-200d-1f466",a:"4.0"},{n:["man-boy-boy","family: man, boy, boy"],u:"1f468-200d-1f466-200d-1f466",a:"4.0"},{n:["man-girl","family: man, girl"],u:"1f468-200d-1f467",a:"4.0"},{n:["man-girl-boy","family: man, girl, boy"],u:"1f468-200d-1f467-200d-1f466",a:"4.0"},{n:["man-girl-girl","family: man, girl, girl"],u:"1f468-200d-1f467-200d-1f467",a:"4.0"},{n:["woman-boy","family: woman, boy"],u:"1f469-200d-1f466",a:"4.0"},{n:["woman-boy-boy","family: woman, boy, boy"],u:"1f469-200d-1f466-200d-1f466",a:"4.0"},{n:["woman-girl","family: woman, girl"],u:"1f469-200d-1f467",a:"4.0"},{n:["woman-girl-boy","family: woman, girl, boy"],u:"1f469-200d-1f467-200d-1f466",a:"4.0"},{n:["woman-girl-girl","family: woman, girl, girl"],u:"1f469-200d-1f467-200d-1f467",a:"4.0"},{n:["speaking head","speaking head in silhouette"],u:"1f5e3-fe0f",a:"0.7"},{n:["bust in silhouette"],u:"1f464",a:"0.6"},{n:["busts in silhouette"],u:"1f465",a:"1.0"},{n:["people hugging"],u:"1fac2",a:"13.0"},{n:["footprints"],u:"1f463",a:"0.6"}],q8=[{n:["monkey face"],u:"1f435",a:"0.6"},{n:["monkey"],u:"1f412",a:"0.6"},{n:["gorilla"],u:"1f98d",a:"3.0"},{n:["orangutan"],u:"1f9a7",a:"12.0"},{n:["dog","dog face"],u:"1f436",a:"0.6"},{n:["dog","dog2"],u:"1f415",a:"0.7"},{n:["guide dog"],u:"1f9ae",a:"12.0"},{n:["service dog"],u:"1f415-200d-1f9ba",a:"12.0"},{n:["poodle"],u:"1f429",a:"0.6"},{n:["wolf","wolf face"],u:"1f43a",a:"0.6"},{n:["fox face"],u:"1f98a",a:"3.0"},{n:["raccoon"],u:"1f99d",a:"11.0"},{n:["cat","cat face"],u:"1f431",a:"0.6"},{n:["cat","cat2"],u:"1f408",a:"0.7"},{n:["black cat"],u:"1f408-200d-2b1b",a:"13.0"},{n:["lion face"],u:"1f981",a:"1.0"},{n:["tiger","tiger face"],u:"1f42f",a:"0.6"},{n:["tiger","tiger2"],u:"1f405",a:"1.0"},{n:["leopard"],u:"1f406",a:"1.0"},{n:["horse","horse face"],u:"1f434",a:"0.6"},{n:["horse","racehorse"],u:"1f40e",a:"0.6"},{n:["unicorn face"],u:"1f984",a:"1.0"},{n:["zebra face"],u:"1f993",a:"5.0"},{n:["deer"],u:"1f98c",a:"3.0"},{n:["bison"],u:"1f9ac",a:"13.0"},{n:["cow","cow face"],u:"1f42e",a:"0.6"},{n:["ox"],u:"1f402",a:"1.0"},{n:["water buffalo"],u:"1f403",a:"1.0"},{n:["cow","cow2"],u:"1f404",a:"1.0"},{n:["pig","pig face"],u:"1f437",a:"0.6"},{n:["pig","pig2"],u:"1f416",a:"1.0"},{n:["boar"],u:"1f417",a:"0.6"},{n:["pig nose"],u:"1f43d",a:"0.6"},{n:["ram"],u:"1f40f",a:"1.0"},{n:["sheep"],u:"1f411",a:"0.6"},{n:["goat"],u:"1f410",a:"1.0"},{n:["dromedary camel"],u:"1f42a",a:"1.0"},{n:["camel","bactrian camel"],u:"1f42b",a:"0.6"},{n:["llama"],u:"1f999",a:"11.0"},{n:["giraffe face"],u:"1f992",a:"5.0"},{n:["elephant"],u:"1f418",a:"0.6"},{n:["mammoth"],u:"1f9a3",a:"13.0"},{n:["rhinoceros"],u:"1f98f",a:"3.0"},{n:["hippopotamus"],u:"1f99b",a:"11.0"},{n:["mouse","mouse face"],u:"1f42d",a:"0.6"},{n:["mouse","mouse2"],u:"1f401",a:"1.0"},{n:["rat"],u:"1f400",a:"1.0"},{n:["hamster","hamster face"],u:"1f439",a:"0.6"},{n:["rabbit","rabbit face"],u:"1f430",a:"0.6"},{n:["rabbit","rabbit2"],u:"1f407",a:"1.0"},{n:["chipmunk"],u:"1f43f-fe0f",a:"0.7"},{n:["beaver"],u:"1f9ab",a:"13.0"},{n:["hedgehog"],u:"1f994",a:"5.0"},{n:["bat"],u:"1f987",a:"3.0"},{n:["bear","bear face"],u:"1f43b",a:"0.6"},{n:["polar bear"],u:"1f43b-200d-2744-fe0f",a:"13.0"},{n:["koala"],u:"1f428",a:"0.6"},{n:["panda face"],u:"1f43c",a:"0.6"},{n:["sloth"],u:"1f9a5",a:"12.0"},{n:["otter"],u:"1f9a6",a:"12.0"},{n:["skunk"],u:"1f9a8",a:"12.0"},{n:["kangaroo"],u:"1f998",a:"11.0"},{n:["badger"],u:"1f9a1",a:"11.0"},{n:["feet","paw prints"],u:"1f43e",a:"0.6"},{n:["turkey"],u:"1f983",a:"1.0"},{n:["chicken"],u:"1f414",a:"0.6"},{n:["rooster"],u:"1f413",a:"1.0"},{n:["hatching chick"],u:"1f423",a:"0.6"},{n:["baby chick"],u:"1f424",a:"0.6"},{n:["hatched chick","front-facing baby chick"],u:"1f425",a:"0.6"},{n:["bird"],u:"1f426",a:"0.6"},{n:["penguin"],u:"1f427",a:"0.6"},{n:["dove","dove of peace"],u:"1f54a-fe0f",a:"0.7"},{n:["eagle"],u:"1f985",a:"3.0"},{n:["duck"],u:"1f986",a:"3.0"},{n:["swan"],u:"1f9a2",a:"11.0"},{n:["owl"],u:"1f989",a:"3.0"},{n:["dodo"],u:"1f9a4",a:"13.0"},{n:["feather"],u:"1fab6",a:"13.0"},{n:["flamingo"],u:"1f9a9",a:"12.0"},{n:["peacock"],u:"1f99a",a:"11.0"},{n:["parrot"],u:"1f99c",a:"11.0"},{n:["frog","frog face"],u:"1f438",a:"0.6"},{n:["crocodile"],u:"1f40a",a:"1.0"},{n:["turtle"],u:"1f422",a:"0.6"},{n:["lizard"],u:"1f98e",a:"3.0"},{n:["snake"],u:"1f40d",a:"0.6"},{n:["dragon face"],u:"1f432",a:"0.6"},{n:["dragon"],u:"1f409",a:"1.0"},{n:["sauropod"],u:"1f995",a:"5.0"},{n:["t-rex"],u:"1f996",a:"5.0"},{n:["whale","spouting whale"],u:"1f433",a:"0.6"},{n:["whale","whale2"],u:"1f40b",a:"1.0"},{n:["dolphin","flipper"],u:"1f42c",a:"0.6"},{n:["seal"],u:"1f9ad",a:"13.0"},{n:["fish"],u:"1f41f",a:"0.6"},{n:["tropical fish"],u:"1f420",a:"0.6"},{n:["blowfish"],u:"1f421",a:"0.6"},{n:["shark"],u:"1f988",a:"3.0"},{n:["octopus"],u:"1f419",a:"0.6"},{n:["shell","spiral shell"],u:"1f41a",a:"0.6"},{n:["coral"],u:"1fab8",a:"14.0"},{n:["snail"],u:"1f40c",a:"0.6"},{n:["butterfly"],u:"1f98b",a:"3.0"},{n:["bug"],u:"1f41b",a:"0.6"},{n:["ant"],u:"1f41c",a:"0.6"},{n:["bee","honeybee"],u:"1f41d",a:"0.6"},{n:["beetle"],u:"1fab2",a:"13.0"},{n:["ladybug","lady beetle"],u:"1f41e",a:"0.6"},{n:["cricket"],u:"1f997",a:"5.0"},{n:["cockroach"],u:"1fab3",a:"13.0"},{n:["spider"],u:"1f577-fe0f",a:"0.7"},{n:["spider web"],u:"1f578-fe0f",a:"0.7"},{n:["scorpion"],u:"1f982",a:"1.0"},{n:["mosquito"],u:"1f99f",a:"11.0"},{n:["fly"],u:"1fab0",a:"13.0"},{n:["worm"],u:"1fab1",a:"13.0"},{n:["microbe"],u:"1f9a0",a:"11.0"},{n:["bouquet"],u:"1f490",a:"0.6"},{n:["cherry blossom"],u:"1f338",a:"0.6"},{n:["white flower"],u:"1f4ae",a:"0.6"},{n:["lotus"],u:"1fab7",a:"14.0"},{n:["rosette"],u:"1f3f5-fe0f",a:"0.7"},{n:["rose"],u:"1f339",a:"0.6"},{n:["wilted flower"],u:"1f940",a:"3.0"},{n:["hibiscus"],u:"1f33a",a:"0.6"},{n:["sunflower"],u:"1f33b",a:"0.6"},{n:["blossom"],u:"1f33c",a:"0.6"},{n:["tulip"],u:"1f337",a:"0.6"},{n:["seedling"],u:"1f331",a:"0.6"},{n:["potted plant"],u:"1fab4",a:"13.0"},{n:["evergreen tree"],u:"1f332",a:"1.0"},{n:["deciduous tree"],u:"1f333",a:"1.0"},{n:["palm tree"],u:"1f334",a:"0.6"},{n:["cactus"],u:"1f335",a:"0.6"},{n:["ear of rice"],u:"1f33e",a:"0.6"},{n:["herb"],u:"1f33f",a:"0.6"},{n:["shamrock"],u:"2618-fe0f",a:"1.0"},{n:["four leaf clover"],u:"1f340",a:"0.6"},{n:["maple leaf"],u:"1f341",a:"0.6"},{n:["fallen leaf"],u:"1f342",a:"0.6"},{n:["leaves","leaf fluttering in wind"],u:"1f343",a:"0.6"},{n:["empty nest"],u:"1fab9",a:"14.0"},{n:["nest with eggs"],u:"1faba",a:"14.0"}],V8=[{n:["grapes"],u:"1f347",a:"0.6"},{n:["melon"],u:"1f348",a:"0.6"},{n:["watermelon"],u:"1f349",a:"0.6"},{n:["tangerine"],u:"1f34a",a:"0.6"},{n:["lemon"],u:"1f34b",a:"1.0"},{n:["banana"],u:"1f34c",a:"0.6"},{n:["pineapple"],u:"1f34d",a:"0.6"},{n:["mango"],u:"1f96d",a:"11.0"},{n:["apple","red apple"],u:"1f34e",a:"0.6"},{n:["green apple"],u:"1f34f",a:"0.6"},{n:["pear"],u:"1f350",a:"1.0"},{n:["peach"],u:"1f351",a:"0.6"},{n:["cherries"],u:"1f352",a:"0.6"},{n:["strawberry"],u:"1f353",a:"0.6"},{n:["blueberries"],u:"1fad0",a:"13.0"},{n:["kiwifruit"],u:"1f95d",a:"3.0"},{n:["tomato"],u:"1f345",a:"0.6"},{n:["olive"],u:"1fad2",a:"13.0"},{n:["coconut"],u:"1f965",a:"5.0"},{n:["avocado"],u:"1f951",a:"3.0"},{n:["eggplant","aubergine"],u:"1f346",a:"0.6"},{n:["potato"],u:"1f954",a:"3.0"},{n:["carrot"],u:"1f955",a:"3.0"},{n:["corn","ear of maize"],u:"1f33d",a:"0.6"},{n:["hot pepper"],u:"1f336-fe0f",a:"0.7"},{n:["bell pepper"],u:"1fad1",a:"13.0"},{n:["cucumber"],u:"1f952",a:"3.0"},{n:["leafy green"],u:"1f96c",a:"11.0"},{n:["broccoli"],u:"1f966",a:"5.0"},{n:["garlic"],u:"1f9c4",a:"12.0"},{n:["onion"],u:"1f9c5",a:"12.0"},{n:["mushroom"],u:"1f344",a:"0.6"},{n:["peanuts"],u:"1f95c",a:"3.0"},{n:["beans"],u:"1fad8",a:"14.0"},{n:["chestnut"],u:"1f330",a:"0.6"},{n:["bread"],u:"1f35e",a:"0.6"},{n:["croissant"],u:"1f950",a:"3.0"},{n:["baguette bread"],u:"1f956",a:"3.0"},{n:["flatbread"],u:"1fad3",a:"13.0"},{n:["pretzel"],u:"1f968",a:"5.0"},{n:["bagel"],u:"1f96f",a:"11.0"},{n:["pancakes"],u:"1f95e",a:"3.0"},{n:["waffle"],u:"1f9c7",a:"12.0"},{n:["cheese wedge"],u:"1f9c0",a:"1.0"},{n:["meat on bone"],u:"1f356",a:"0.6"},{n:["poultry leg"],u:"1f357",a:"0.6"},{n:["cut of meat"],u:"1f969",a:"5.0"},{n:["bacon"],u:"1f953",a:"3.0"},{n:["hamburger"],u:"1f354",a:"0.6"},{n:["fries","french fries"],u:"1f35f",a:"0.6"},{n:["pizza","slice of pizza"],u:"1f355",a:"0.6"},{n:["hotdog","hot dog"],u:"1f32d",a:"1.0"},{n:["sandwich"],u:"1f96a",a:"5.0"},{n:["taco"],u:"1f32e",a:"1.0"},{n:["burrito"],u:"1f32f",a:"1.0"},{n:["tamale"],u:"1fad4",a:"13.0"},{n:["stuffed flatbread"],u:"1f959",a:"3.0"},{n:["falafel"],u:"1f9c6",a:"12.0"},{n:["egg"],u:"1f95a",a:"3.0"},{n:["cooking","fried egg"],u:"1f373",a:"0.6"},{n:["shallow pan of food"],u:"1f958",a:"3.0"},{n:["stew","pot of food"],u:"1f372",a:"0.6"},{n:["fondue"],u:"1fad5",a:"13.0"},{n:["bowl with spoon"],u:"1f963",a:"5.0"},{n:["green salad"],u:"1f957",a:"3.0"},{n:["popcorn"],u:"1f37f",a:"1.0"},{n:["butter"],u:"1f9c8",a:"12.0"},{n:["salt","salt shaker"],u:"1f9c2",a:"11.0"},{n:["canned food"],u:"1f96b",a:"5.0"},{n:["bento","bento box"],u:"1f371",a:"0.6"},{n:["rice cracker"],u:"1f358",a:"0.6"},{n:["rice ball"],u:"1f359",a:"0.6"},{n:["rice","cooked rice"],u:"1f35a",a:"0.6"},{n:["curry","curry and rice"],u:"1f35b",a:"0.6"},{n:["ramen","steaming bowl"],u:"1f35c",a:"0.6"},{n:["spaghetti"],u:"1f35d",a:"0.6"},{n:["sweet potato","roasted sweet potato"],u:"1f360",a:"0.6"},{n:["oden"],u:"1f362",a:"0.6"},{n:["sushi"],u:"1f363",a:"0.6"},{n:["fried shrimp"],u:"1f364",a:"0.6"},{n:["fish cake","fish cake with swirl design"],u:"1f365",a:"0.6"},{n:["moon cake"],u:"1f96e",a:"11.0"},{n:["dango"],u:"1f361",a:"0.6"},{n:["dumpling"],u:"1f95f",a:"5.0"},{n:["fortune cookie"],u:"1f960",a:"5.0"},{n:["takeout box"],u:"1f961",a:"5.0"},{n:["crab"],u:"1f980",a:"1.0"},{n:["lobster"],u:"1f99e",a:"11.0"},{n:["shrimp"],u:"1f990",a:"3.0"},{n:["squid"],u:"1f991",a:"3.0"},{n:["oyster"],u:"1f9aa",a:"12.0"},{n:["icecream","soft ice cream"],u:"1f366",a:"0.6"},{n:["shaved ice"],u:"1f367",a:"0.6"},{n:["ice cream"],u:"1f368",a:"0.6"},{n:["doughnut"],u:"1f369",a:"0.6"},{n:["cookie"],u:"1f36a",a:"0.6"},{n:["birthday","birthday cake"],u:"1f382",a:"0.6"},{n:["cake","shortcake"],u:"1f370",a:"0.6"},{n:["cupcake"],u:"1f9c1",a:"11.0"},{n:["pie"],u:"1f967",a:"5.0"},{n:["chocolate bar"],u:"1f36b",a:"0.6"},{n:["candy"],u:"1f36c",a:"0.6"},{n:["lollipop"],u:"1f36d",a:"0.6"},{n:["custard"],u:"1f36e",a:"0.6"},{n:["honey pot"],u:"1f36f",a:"0.6"},{n:["baby bottle"],u:"1f37c",a:"1.0"},{n:["glass of milk"],u:"1f95b",a:"3.0"},{n:["coffee","hot beverage"],u:"2615",a:"0.6"},{n:["teapot"],u:"1fad6",a:"13.0"},{n:["tea","teacup without handle"],u:"1f375",a:"0.6"},{n:["sake","sake bottle and cup"],u:"1f376",a:"0.6"},{n:["champagne","bottle with popping cork"],u:"1f37e",a:"1.0"},{n:["wine glass"],u:"1f377",a:"0.6"},{n:["cocktail","cocktail glass"],u:"1f378",a:"0.6"},{n:["tropical drink"],u:"1f379",a:"0.6"},{n:["beer","beer mug"],u:"1f37a",a:"0.6"},{n:["beers","clinking beer mugs"],u:"1f37b",a:"0.6"},{n:["clinking glasses"],u:"1f942",a:"3.0"},{n:["tumbler glass"],u:"1f943",a:"3.0"},{n:["pouring liquid"],u:"1fad7",a:"14.0"},{n:["cup with straw"],u:"1f964",a:"5.0"},{n:["bubble tea"],u:"1f9cb",a:"13.0"},{n:["beverage box"],u:"1f9c3",a:"12.0"},{n:["mate drink"],u:"1f9c9",a:"12.0"},{n:["ice cube"],u:"1f9ca",a:"12.0"},{n:["chopsticks"],u:"1f962",a:"5.0"},{n:["knife fork plate","fork and knife with plate"],u:"1f37d-fe0f",a:"0.7"},{n:["fork and knife"],u:"1f374",a:"0.6"},{n:["spoon"],u:"1f944",a:"3.0"},{n:["hocho","knife"],u:"1f52a",a:"0.6"},{n:["jar"],u:"1fad9",a:"14.0"},{n:["amphora"],u:"1f3fa",a:"1.0"}],X8=[{n:["earth africa","earth globe europe-africa"],u:"1f30d",a:"0.7"},{n:["earth americas","earth globe americas"],u:"1f30e",a:"0.7"},{n:["earth asia","earth globe asia-australia"],u:"1f30f",a:"0.6"},{n:["globe with meridians"],u:"1f310",a:"1.0"},{n:["world map"],u:"1f5fa-fe0f",a:"0.7"},{n:["japan","silhouette of japan"],u:"1f5fe",a:"0.6"},{n:["compass"],u:"1f9ed",a:"11.0"},{n:["snow-capped mountain","snow capped mountain"],u:"1f3d4-fe0f",a:"0.7"},{n:["mountain"],u:"26f0-fe0f",a:"0.7"},{n:["volcano"],u:"1f30b",a:"0.6"},{n:["mount fuji"],u:"1f5fb",a:"0.6"},{n:["camping"],u:"1f3d5-fe0f",a:"0.7"},{n:["beach with umbrella"],u:"1f3d6-fe0f",a:"0.7"},{n:["desert"],u:"1f3dc-fe0f",a:"0.7"},{n:["desert island"],u:"1f3dd-fe0f",a:"0.7"},{n:["national park"],u:"1f3de-fe0f",a:"0.7"},{n:["stadium"],u:"1f3df-fe0f",a:"0.7"},{n:["classical building"],u:"1f3db-fe0f",a:"0.7"},{n:["building construction"],u:"1f3d7-fe0f",a:"0.7"},{n:["brick","bricks"],u:"1f9f1",a:"11.0"},{n:["rock"],u:"1faa8",a:"13.0"},{n:["wood"],u:"1fab5",a:"13.0"},{n:["hut"],u:"1f6d6",a:"13.0"},{n:["houses","house buildings"],u:"1f3d8-fe0f",a:"0.7"},{n:["derelict house","derelict house building"],u:"1f3da-fe0f",a:"0.7"},{n:["house","house building"],u:"1f3e0",a:"0.6"},{n:["house with garden"],u:"1f3e1",a:"0.6"},{n:["office","office building"],u:"1f3e2",a:"0.6"},{n:["post office","japanese post office"],u:"1f3e3",a:"0.6"},{n:["european post office"],u:"1f3e4",a:"1.0"},{n:["hospital"],u:"1f3e5",a:"0.6"},{n:["bank"],u:"1f3e6",a:"0.6"},{n:["hotel"],u:"1f3e8",a:"0.6"},{n:["love hotel"],u:"1f3e9",a:"0.6"},{n:["convenience store"],u:"1f3ea",a:"0.6"},{n:["school"],u:"1f3eb",a:"0.6"},{n:["department store"],u:"1f3ec",a:"0.6"},{n:["factory"],u:"1f3ed",a:"0.6"},{n:["japanese castle"],u:"1f3ef",a:"0.6"},{n:["european castle"],u:"1f3f0",a:"0.6"},{n:["wedding"],u:"1f492",a:"0.6"},{n:["tokyo tower"],u:"1f5fc",a:"0.6"},{n:["statue of liberty"],u:"1f5fd",a:"0.6"},{n:["church"],u:"26ea",a:"0.6"},{n:["mosque"],u:"1f54c",a:"1.0"},{n:["hindu temple"],u:"1f6d5",a:"12.0"},{n:["synagogue"],u:"1f54d",a:"1.0"},{n:["shinto shrine"],u:"26e9-fe0f",a:"0.7"},{n:["kaaba"],u:"1f54b",a:"1.0"},{n:["fountain"],u:"26f2",a:"0.6"},{n:["tent"],u:"26fa",a:"0.6"},{n:["foggy"],u:"1f301",a:"0.6"},{n:["night with stars"],u:"1f303",a:"0.6"},{n:["cityscape"],u:"1f3d9-fe0f",a:"0.7"},{n:["sunrise over mountains"],u:"1f304",a:"0.6"},{n:["sunrise"],u:"1f305",a:"0.6"},{n:["city sunset","cityscape at dusk"],u:"1f306",a:"0.6"},{n:["city sunrise","sunset over buildings"],u:"1f307",a:"0.6"},{n:["bridge at night"],u:"1f309",a:"0.6"},{n:["hotsprings","hot springs"],u:"2668-fe0f",a:"0.6"},{n:["carousel horse"],u:"1f3a0",a:"0.6"},{n:["playground slide"],u:"1f6dd",a:"14.0"},{n:["ferris wheel"],u:"1f3a1",a:"0.6"},{n:["roller coaster"],u:"1f3a2",a:"0.6"},{n:["barber","barber pole"],u:"1f488",a:"0.6"},{n:["circus tent"],u:"1f3aa",a:"0.6"},{n:["steam locomotive"],u:"1f682",a:"1.0"},{n:["railway car"],u:"1f683",a:"0.6"},{n:["high-speed train","bullettrain side"],u:"1f684",a:"0.6"},{n:["bullettrain front","high-speed train with bullet nose"],u:"1f685",a:"0.6"},{n:["train","train2"],u:"1f686",a:"1.0"},{n:["metro"],u:"1f687",a:"0.6"},{n:["light rail"],u:"1f688",a:"1.0"},{n:["station"],u:"1f689",a:"0.6"},{n:["tram"],u:"1f68a",a:"1.0"},{n:["monorail"],u:"1f69d",a:"1.0"},{n:["mountain railway"],u:"1f69e",a:"1.0"},{n:["train","tram car"],u:"1f68b",a:"1.0"},{n:["bus"],u:"1f68c",a:"0.6"},{n:["oncoming bus"],u:"1f68d",a:"0.7"},{n:["trolleybus"],u:"1f68e",a:"1.0"},{n:["minibus"],u:"1f690",a:"1.0"},{n:["ambulance"],u:"1f691",a:"0.6"},{n:["fire engine"],u:"1f692",a:"0.6"},{n:["police car"],u:"1f693",a:"0.6"},{n:["oncoming police car"],u:"1f694",a:"0.7"},{n:["taxi"],u:"1f695",a:"0.6"},{n:["oncoming taxi"],u:"1f696",a:"1.0"},{n:["car","red car","automobile"],u:"1f697",a:"0.6"},{n:["oncoming automobile"],u:"1f698",a:"0.7"},{n:["blue car","recreational vehicle"],u:"1f699",a:"0.6"},{n:["pickup truck"],u:"1f6fb",a:"13.0"},{n:["truck","delivery truck"],u:"1f69a",a:"0.6"},{n:["articulated lorry"],u:"1f69b",a:"1.0"},{n:["tractor"],u:"1f69c",a:"1.0"},{n:["racing car"],u:"1f3ce-fe0f",a:"0.7"},{n:["motorcycle","racing motorcycle"],u:"1f3cd-fe0f",a:"0.7"},{n:["motor scooter"],u:"1f6f5",a:"3.0"},{n:["manual wheelchair"],u:"1f9bd",a:"12.0"},{n:["motorized wheelchair"],u:"1f9bc",a:"12.0"},{n:["auto rickshaw"],u:"1f6fa",a:"12.0"},{n:["bike","bicycle"],u:"1f6b2",a:"0.6"},{n:["scooter"],u:"1f6f4",a:"3.0"},{n:["skateboard"],u:"1f6f9",a:"11.0"},{n:["roller skate"],u:"1f6fc",a:"13.0"},{n:["busstop","bus stop"],u:"1f68f",a:"0.6"},{n:["motorway"],u:"1f6e3-fe0f",a:"0.7"},{n:["railway track"],u:"1f6e4-fe0f",a:"0.7"},{n:["oil drum"],u:"1f6e2-fe0f",a:"0.7"},{n:["fuelpump","fuel pump"],u:"26fd",a:"0.6"},{n:["wheel"],u:"1f6de",a:"14.0"},{n:["rotating light","police cars revolving light"],u:"1f6a8",a:"0.6"},{n:["traffic light","horizontal traffic light"],u:"1f6a5",a:"0.6"},{n:["vertical traffic light"],u:"1f6a6",a:"1.0"},{n:["octagonal sign"],u:"1f6d1",a:"3.0"},{n:["construction","construction sign"],u:"1f6a7",a:"0.6"},{n:["anchor"],u:"2693",a:"0.6"},{n:["ring buoy"],u:"1f6df",a:"14.0"},{n:["boat","sailboat"],u:"26f5",a:"0.6"},{n:["canoe"],u:"1f6f6",a:"3.0"},{n:["speedboat"],u:"1f6a4",a:"0.6"},{n:["passenger ship"],u:"1f6f3-fe0f",a:"0.7"},{n:["ferry"],u:"26f4-fe0f",a:"0.7"},{n:["motor boat"],u:"1f6e5-fe0f",a:"0.7"},{n:["ship"],u:"1f6a2",a:"0.6"},{n:["airplane"],u:"2708-fe0f",a:"0.6"},{n:["small airplane"],u:"1f6e9-fe0f",a:"0.7"},{n:["airplane departure"],u:"1f6eb",a:"1.0"},{n:["airplane arriving"],u:"1f6ec",a:"1.0"},{n:["parachute"],u:"1fa82",a:"12.0"},{n:["seat"],u:"1f4ba",a:"0.6"},{n:["helicopter"],u:"1f681",a:"1.0"},{n:["suspension railway"],u:"1f69f",a:"1.0"},{n:["mountain cableway"],u:"1f6a0",a:"1.0"},{n:["aerial tramway"],u:"1f6a1",a:"1.0"},{n:["satellite"],u:"1f6f0-fe0f",a:"0.7"},{n:["rocket"],u:"1f680",a:"0.6"},{n:["flying saucer"],u:"1f6f8",a:"5.0"},{n:["bellhop bell"],u:"1f6ce-fe0f",a:"0.7"},{n:["luggage"],u:"1f9f3",a:"11.0"},{n:["hourglass"],u:"231b",a:"0.6"},{n:["hourglass flowing sand","hourglass with flowing sand"],u:"23f3",a:"0.6"},{n:["watch"],u:"231a",a:"0.6"},{n:["alarm clock"],u:"23f0",a:"0.6"},{n:["stopwatch"],u:"23f1-fe0f",a:"1.0"},{n:["timer clock"],u:"23f2-fe0f",a:"1.0"},{n:["mantelpiece clock"],u:"1f570-fe0f",a:"0.7"},{n:["clock12","clock face twelve oclock"],u:"1f55b",a:"0.6"},{n:["clock1230","clock face twelve-thirty"],u:"1f567",a:"0.7"},{n:["clock1","clock face one oclock"],u:"1f550",a:"0.6"},{n:["clock130","clock face one-thirty"],u:"1f55c",a:"0.7"},{n:["clock2","clock face two oclock"],u:"1f551",a:"0.6"},{n:["clock230","clock face two-thirty"],u:"1f55d",a:"0.7"},{n:["clock3","clock face three oclock"],u:"1f552",a:"0.6"},{n:["clock330","clock face three-thirty"],u:"1f55e",a:"0.7"},{n:["clock4","clock face four oclock"],u:"1f553",a:"0.6"},{n:["clock430","clock face four-thirty"],u:"1f55f",a:"0.7"},{n:["clock5","clock face five oclock"],u:"1f554",a:"0.6"},{n:["clock530","clock face five-thirty"],u:"1f560",a:"0.7"},{n:["clock6","clock face six oclock"],u:"1f555",a:"0.6"},{n:["clock630","clock face six-thirty"],u:"1f561",a:"0.7"},{n:["clock7","clock face seven oclock"],u:"1f556",a:"0.6"},{n:["clock730","clock face seven-thirty"],u:"1f562",a:"0.7"},{n:["clock8","clock face eight oclock"],u:"1f557",a:"0.6"},{n:["clock830","clock face eight-thirty"],u:"1f563",a:"0.7"},{n:["clock9","clock face nine oclock"],u:"1f558",a:"0.6"},{n:["clock930","clock face nine-thirty"],u:"1f564",a:"0.7"},{n:["clock10","clock face ten oclock"],u:"1f559",a:"0.6"},{n:["clock1030","clock face ten-thirty"],u:"1f565",a:"0.7"},{n:["clock11","clock face eleven oclock"],u:"1f55a",a:"0.6"},{n:["clock1130","clock face eleven-thirty"],u:"1f566",a:"0.7"},{n:["new moon","new moon symbol"],u:"1f311",a:"0.6"},{n:["waxing crescent moon","waxing crescent moon symbol"],u:"1f312",a:"1.0"},{n:["first quarter moon","first quarter moon symbol"],u:"1f313",a:"0.6"},{n:["moon","waxing gibbous moon","waxing gibbous moon symbol"],u:"1f314",a:"0.6"},{n:["full moon","full moon symbol"],u:"1f315",a:"0.6"},{n:["waning gibbous moon","waning gibbous moon symbol"],u:"1f316",a:"1.0"},{n:["last quarter moon","last quarter moon symbol"],u:"1f317",a:"1.0"},{n:["waning crescent moon","waning crescent moon symbol"],u:"1f318",a:"1.0"},{n:["crescent moon"],u:"1f319",a:"0.6"},{n:["new moon with face"],u:"1f31a",a:"1.0"},{n:["first quarter moon with face"],u:"1f31b",a:"0.6"},{n:["last quarter moon with face"],u:"1f31c",a:"0.7"},{n:["thermometer"],u:"1f321-fe0f",a:"0.7"},{n:["sunny","black sun with rays"],u:"2600-fe0f",a:"0.6"},{n:["full moon with face"],u:"1f31d",a:"1.0"},{n:["sun with face"],u:"1f31e",a:"1.0"},{n:["ringed planet"],u:"1fa90",a:"12.0"},{n:["star","white medium star"],u:"2b50",a:"0.6"},{n:["star2","glowing star"],u:"1f31f",a:"0.6"},{n:["stars","shooting star"],u:"1f320",a:"0.6"},{n:["milky way"],u:"1f30c",a:"0.6"},{n:["cloud"],u:"2601-fe0f",a:"0.6"},{n:["partly sunny","sun behind cloud"],u:"26c5",a:"0.6"},{n:["thunder cloud and rain","cloud with lightning and rain"],u:"26c8-fe0f",a:"0.7"},{n:["mostly sunny","sun small cloud","sun behind small cloud"],u:"1f324-fe0f",a:"0.7"},{n:["barely sunny","sun behind cloud","sun behind large cloud"],u:"1f325-fe0f",a:"0.7"},{n:["partly sunny rain","sun behind rain cloud"],u:"1f326-fe0f",a:"0.7"},{n:["rain cloud","cloud with rain"],u:"1f327-fe0f",a:"0.7"},{n:["snow cloud","cloud with snow"],u:"1f328-fe0f",a:"0.7"},{n:["lightning","lightning cloud","cloud with lightning"],u:"1f329-fe0f",a:"0.7"},{n:["tornado","tornado cloud"],u:"1f32a-fe0f",a:"0.7"},{n:["fog"],u:"1f32b-fe0f",a:"0.7"},{n:["wind face","wind blowing face"],u:"1f32c-fe0f",a:"0.7"},{n:["cyclone"],u:"1f300",a:"0.6"},{n:["rainbow"],u:"1f308",a:"0.6"},{n:["closed umbrella"],u:"1f302",a:"0.6"},{n:["umbrella"],u:"2602-fe0f",a:"0.7"},{n:["umbrella with rain drops"],u:"2614",a:"0.6"},{n:["umbrella on ground"],u:"26f1-fe0f",a:"0.7"},{n:["zap","high voltage sign"],u:"26a1",a:"0.6"},{n:["snowflake"],u:"2744-fe0f",a:"0.6"},{n:["snowman"],u:"2603-fe0f",a:"0.7"},{n:["snowman without snow"],u:"26c4",a:"0.6"},{n:["comet"],u:"2604-fe0f",a:"1.0"},{n:["fire"],u:"1f525",a:"0.6"},{n:["droplet"],u:"1f4a7",a:"0.6"},{n:["ocean","water wave"],u:"1f30a",a:"0.6"}],W8=[{n:["jack-o-lantern","jack o lantern"],u:"1f383",a:"0.6"},{n:["christmas tree"],u:"1f384",a:"0.6"},{n:["fireworks"],u:"1f386",a:"0.6"},{n:["sparkler","firework sparkler"],u:"1f387",a:"0.6"},{n:["firecracker"],u:"1f9e8",a:"11.0"},{n:["sparkles"],u:"2728",a:"0.6"},{n:["balloon"],u:"1f388",a:"0.6"},{n:["tada","party popper"],u:"1f389",a:"0.6"},{n:["confetti ball"],u:"1f38a",a:"0.6"},{n:["tanabata tree"],u:"1f38b",a:"0.6"},{n:["bamboo","pine decoration"],u:"1f38d",a:"0.6"},{n:["dolls","japanese dolls"],u:"1f38e",a:"0.6"},{n:["flags","carp streamer"],u:"1f38f",a:"0.6"},{n:["wind chime"],u:"1f390",a:"0.6"},{n:["rice scene","moon viewing ceremony"],u:"1f391",a:"0.6"},{n:["red envelope","red gift envelope"],u:"1f9e7",a:"11.0"},{n:["ribbon"],u:"1f380",a:"0.6"},{n:["gift","wrapped present"],u:"1f381",a:"0.6"},{n:["reminder ribbon"],u:"1f397-fe0f",a:"0.7"},{n:["admission tickets"],u:"1f39f-fe0f",a:"0.7"},{n:["ticket"],u:"1f3ab",a:"0.6"},{n:["medal","military medal"],u:"1f396-fe0f",a:"0.7"},{n:["trophy"],u:"1f3c6",a:"0.6"},{n:["sports medal"],u:"1f3c5",a:"1.0"},{n:["first place medal"],u:"1f947",a:"3.0"},{n:["second place medal"],u:"1f948",a:"3.0"},{n:["third place medal"],u:"1f949",a:"3.0"},{n:["soccer","soccer ball"],u:"26bd",a:"0.6"},{n:["baseball"],u:"26be",a:"0.6"},{n:["softball"],u:"1f94e",a:"11.0"},{n:["basketball","basketball and hoop"],u:"1f3c0",a:"0.6"},{n:["volleyball"],u:"1f3d0",a:"1.0"},{n:["football","american football"],u:"1f3c8",a:"0.6"},{n:["rugby football"],u:"1f3c9",a:"1.0"},{n:["tennis","tennis racquet and ball"],u:"1f3be",a:"0.6"},{n:["flying disc"],u:"1f94f",a:"11.0"},{n:["bowling"],u:"1f3b3",a:"0.6"},{n:["cricket bat and ball"],u:"1f3cf",a:"1.0"},{n:["field hockey stick and ball"],u:"1f3d1",a:"1.0"},{n:["ice hockey stick and puck"],u:"1f3d2",a:"1.0"},{n:["lacrosse","lacrosse stick and ball"],u:"1f94d",a:"11.0"},{n:["table tennis paddle and ball"],u:"1f3d3",a:"1.0"},{n:["badminton racquet and shuttlecock"],u:"1f3f8",a:"1.0"},{n:["boxing glove"],u:"1f94a",a:"3.0"},{n:["martial arts uniform"],u:"1f94b",a:"3.0"},{n:["goal net"],u:"1f945",a:"3.0"},{n:["golf","flag in hole"],u:"26f3",a:"0.6"},{n:["ice skate"],u:"26f8-fe0f",a:"0.7"},{n:["fishing pole and fish"],u:"1f3a3",a:"0.6"},{n:["diving mask"],u:"1f93f",a:"12.0"},{n:["running shirt with sash"],u:"1f3bd",a:"0.6"},{n:["ski","ski and ski boot"],u:"1f3bf",a:"0.6"},{n:["sled"],u:"1f6f7",a:"5.0"},{n:["curling stone"],u:"1f94c",a:"5.0"},{n:["dart","direct hit"],u:"1f3af",a:"0.6"},{n:["yo-yo"],u:"1fa80",a:"12.0"},{n:["kite"],u:"1fa81",a:"12.0"},{n:["8ball","billiards"],u:"1f3b1",a:"0.6"},{n:["crystal ball"],u:"1f52e",a:"0.6"},{n:["magic wand"],u:"1fa84",a:"13.0"},{n:["nazar amulet"],u:"1f9ff",a:"11.0"},{n:["hamsa"],u:"1faac",a:"14.0"},{n:["video game"],u:"1f3ae",a:"0.6"},{n:["joystick"],u:"1f579-fe0f",a:"0.7"},{n:["slot machine"],u:"1f3b0",a:"0.6"},{n:["game die"],u:"1f3b2",a:"0.6"},{n:["jigsaw","jigsaw puzzle piece"],u:"1f9e9",a:"11.0"},{n:["teddy bear"],u:"1f9f8",a:"11.0"},{n:["pinata"],u:"1fa85",a:"13.0"},{n:["mirror ball"],u:"1faa9",a:"14.0"},{n:["nesting dolls"],u:"1fa86",a:"13.0"},{n:["spades","black spade suit"],u:"2660-fe0f",a:"0.6"},{n:["hearts","black heart suit"],u:"2665-fe0f",a:"0.6"},{n:["diamonds","black diamond suit"],u:"2666-fe0f",a:"0.6"},{n:["clubs","black club suit"],u:"2663-fe0f",a:"0.6"},{n:["chess pawn"],u:"265f-fe0f",a:"11.0"},{n:["black joker","playing card black joker"],u:"1f0cf",a:"0.6"},{n:["mahjong","mahjong tile red dragon"],u:"1f004",a:"0.6"},{n:["flower playing cards"],u:"1f3b4",a:"0.6"},{n:["performing arts"],u:"1f3ad",a:"0.6"},{n:["framed picture","frame with picture"],u:"1f5bc-fe0f",a:"0.7"},{n:["art","artist palette"],u:"1f3a8",a:"0.6"},{n:["thread","spool of thread"],u:"1f9f5",a:"11.0"},{n:["sewing needle"],u:"1faa1",a:"13.0"},{n:["yarn","ball of yarn"],u:"1f9f6",a:"11.0"},{n:["knot"],u:"1faa2",a:"13.0"}],K8=[{n:["eyeglasses"],u:"1f453",a:"0.6"},{n:["sunglasses","dark sunglasses"],u:"1f576-fe0f",a:"0.7"},{n:["goggles"],u:"1f97d",a:"11.0"},{n:["lab coat"],u:"1f97c",a:"11.0"},{n:["safety vest"],u:"1f9ba",a:"12.0"},{n:["necktie"],u:"1f454",a:"0.6"},{n:["shirt","tshirt","t-shirt"],u:"1f455",a:"0.6"},{n:["jeans"],u:"1f456",a:"0.6"},{n:["scarf"],u:"1f9e3",a:"5.0"},{n:["gloves"],u:"1f9e4",a:"5.0"},{n:["coat"],u:"1f9e5",a:"5.0"},{n:["socks"],u:"1f9e6",a:"5.0"},{n:["dress"],u:"1f457",a:"0.6"},{n:["kimono"],u:"1f458",a:"0.6"},{n:["sari"],u:"1f97b",a:"12.0"},{n:["one-piece swimsuit"],u:"1fa71",a:"12.0"},{n:["briefs"],u:"1fa72",a:"12.0"},{n:["shorts"],u:"1fa73",a:"12.0"},{n:["bikini"],u:"1f459",a:"0.6"},{n:["womans clothes"],u:"1f45a",a:"0.6"},{n:["purse"],u:"1f45b",a:"0.6"},{n:["handbag"],u:"1f45c",a:"0.6"},{n:["pouch"],u:"1f45d",a:"0.6"},{n:["shopping bags"],u:"1f6cd-fe0f",a:"0.7"},{n:["school satchel"],u:"1f392",a:"0.6"},{n:["thong sandal"],u:"1fa74",a:"13.0"},{n:["shoe","mans shoe"],u:"1f45e",a:"0.6"},{n:["athletic shoe"],u:"1f45f",a:"0.6"},{n:["hiking boot"],u:"1f97e",a:"11.0"},{n:["flat shoe","womans flat shoe"],u:"1f97f",a:"11.0"},{n:["high heel","high-heeled shoe"],u:"1f460",a:"0.6"},{n:["sandal","womans sandal"],u:"1f461",a:"0.6"},{n:["ballet shoes"],u:"1fa70",a:"12.0"},{n:["boot","womans boots"],u:"1f462",a:"0.6"},{n:["crown"],u:"1f451",a:"0.6"},{n:["womans hat"],u:"1f452",a:"0.6"},{n:["tophat","top hat"],u:"1f3a9",a:"0.6"},{n:["mortar board","graduation cap"],u:"1f393",a:"0.6"},{n:["billed cap"],u:"1f9e2",a:"5.0"},{n:["military helmet"],u:"1fa96",a:"13.0"},{n:["rescue worker’s helmet","helmet with white cross"],u:"26d1-fe0f",a:"0.7"},{n:["prayer beads"],u:"1f4ff",a:"1.0"},{n:["lipstick"],u:"1f484",a:"0.6"},{n:["ring"],u:"1f48d",a:"0.6"},{n:["gem","gem stone"],u:"1f48e",a:"0.6"},{n:["mute","speaker with cancellation stroke"],u:"1f507",a:"1.0"},{n:["speaker"],u:"1f508",a:"0.7"},{n:["sound","speaker with one sound wave"],u:"1f509",a:"1.0"},{n:["loud sound","speaker with three sound waves"],u:"1f50a",a:"0.6"},{n:["loudspeaker","public address loudspeaker"],u:"1f4e2",a:"0.6"},{n:["mega","cheering megaphone"],u:"1f4e3",a:"0.6"},{n:["postal horn"],u:"1f4ef",a:"1.0"},{n:["bell"],u:"1f514",a:"0.6"},{n:["no bell","bell with cancellation stroke"],u:"1f515",a:"1.0"},{n:["musical score"],u:"1f3bc",a:"0.6"},{n:["musical note"],u:"1f3b5",a:"0.6"},{n:["notes","multiple musical notes"],u:"1f3b6",a:"0.6"},{n:["studio microphone"],u:"1f399-fe0f",a:"0.7"},{n:["level slider"],u:"1f39a-fe0f",a:"0.7"},{n:["control knobs"],u:"1f39b-fe0f",a:"0.7"},{n:["microphone"],u:"1f3a4",a:"0.6"},{n:["headphone","headphones"],u:"1f3a7",a:"0.6"},{n:["radio"],u:"1f4fb",a:"0.6"},{n:["saxophone"],u:"1f3b7",a:"0.6"},{n:["accordion"],u:"1fa97",a:"13.0"},{n:["guitar"],u:"1f3b8",a:"0.6"},{n:["musical keyboard"],u:"1f3b9",a:"0.6"},{n:["trumpet"],u:"1f3ba",a:"0.6"},{n:["violin"],u:"1f3bb",a:"0.6"},{n:["banjo"],u:"1fa95",a:"12.0"},{n:["drum with drumsticks"],u:"1f941",a:"3.0"},{n:["long drum"],u:"1fa98",a:"13.0"},{n:["iphone","mobile phone"],u:"1f4f1",a:"0.6"},{n:["calling","mobile phone with rightwards arrow at left"],u:"1f4f2",a:"0.6"},{n:["phone","telephone","black telephone"],u:"260e-fe0f",a:"0.6"},{n:["telephone receiver"],u:"1f4de",a:"0.6"},{n:["pager"],u:"1f4df",a:"0.6"},{n:["fax","fax machine"],u:"1f4e0",a:"0.6"},{n:["battery"],u:"1f50b",a:"0.6"},{n:["low battery"],u:"1faab",a:"14.0"},{n:["electric plug"],u:"1f50c",a:"0.6"},{n:["computer","personal computer"],u:"1f4bb",a:"0.6"},{n:["desktop computer"],u:"1f5a5-fe0f",a:"0.7"},{n:["printer"],u:"1f5a8-fe0f",a:"0.7"},{n:["keyboard"],u:"2328-fe0f",a:"1.0"},{n:["computer mouse","three button mouse"],u:"1f5b1-fe0f",a:"0.7"},{n:["trackball"],u:"1f5b2-fe0f",a:"0.7"},{n:["minidisc"],u:"1f4bd",a:"0.6"},{n:["floppy disk"],u:"1f4be",a:"0.6"},{n:["cd","optical disc"],u:"1f4bf",a:"0.6"},{n:["dvd"],u:"1f4c0",a:"0.6"},{n:["abacus"],u:"1f9ee",a:"11.0"},{n:["movie camera"],u:"1f3a5",a:"0.6"},{n:["film frames"],u:"1f39e-fe0f",a:"0.7"},{n:["film projector"],u:"1f4fd-fe0f",a:"0.7"},{n:["clapper","clapper board"],u:"1f3ac",a:"0.6"},{n:["tv","television"],u:"1f4fa",a:"0.6"},{n:["camera"],u:"1f4f7",a:"0.6"},{n:["camera with flash"],u:"1f4f8",a:"1.0"},{n:["video camera"],u:"1f4f9",a:"0.6"},{n:["vhs","videocassette"],u:"1f4fc",a:"0.6"},{n:["mag","left-pointing magnifying glass"],u:"1f50d",a:"0.6"},{n:["mag right","right-pointing magnifying glass"],u:"1f50e",a:"0.6"},{n:["candle"],u:"1f56f-fe0f",a:"0.7"},{n:["bulb","electric light bulb"],u:"1f4a1",a:"0.6"},{n:["flashlight","electric torch"],u:"1f526",a:"0.6"},{n:["lantern","izakaya lantern"],u:"1f3ee",a:"0.6"},{n:["diya lamp"],u:"1fa94",a:"12.0"},{n:["notebook with decorative cover"],u:"1f4d4",a:"0.6"},{n:["closed book"],u:"1f4d5",a:"0.6"},{n:["book","open book"],u:"1f4d6",a:"0.6"},{n:["green book"],u:"1f4d7",a:"0.6"},{n:["blue book"],u:"1f4d8",a:"0.6"},{n:["orange book"],u:"1f4d9",a:"0.6"},{n:["books"],u:"1f4da",a:"0.6"},{n:["notebook"],u:"1f4d3",a:"0.6"},{n:["ledger"],u:"1f4d2",a:"0.6"},{n:["page with curl"],u:"1f4c3",a:"0.6"},{n:["scroll"],u:"1f4dc",a:"0.6"},{n:["page facing up"],u:"1f4c4",a:"0.6"},{n:["newspaper"],u:"1f4f0",a:"0.6"},{n:["rolled-up newspaper","rolled up newspaper"],u:"1f5de-fe0f",a:"0.7"},{n:["bookmark tabs"],u:"1f4d1",a:"0.6"},{n:["bookmark"],u:"1f516",a:"0.6"},{n:["label"],u:"1f3f7-fe0f",a:"0.7"},{n:["moneybag","money bag"],u:"1f4b0",a:"0.6"},{n:["coin"],u:"1fa99",a:"13.0"},{n:["yen","banknote with yen sign"],u:"1f4b4",a:"0.6"},{n:["dollar","banknote with dollar sign"],u:"1f4b5",a:"0.6"},{n:["euro","banknote with euro sign"],u:"1f4b6",a:"1.0"},{n:["pound","banknote with pound sign"],u:"1f4b7",a:"1.0"},{n:["money with wings"],u:"1f4b8",a:"0.6"},{n:["credit card"],u:"1f4b3",a:"0.6"},{n:["receipt"],u:"1f9fe",a:"11.0"},{n:["chart","chart with upwards trend and yen sign"],u:"1f4b9",a:"0.6"},{n:["email","envelope"],u:"2709-fe0f",a:"0.6"},{n:["e-mail","e-mail symbol"],u:"1f4e7",a:"0.6"},{n:["incoming envelope"],u:"1f4e8",a:"0.6"},{n:["envelope with arrow","envelope with downwards arrow above"],u:"1f4e9",a:"0.6"},{n:["outbox tray"],u:"1f4e4",a:"0.6"},{n:["inbox tray"],u:"1f4e5",a:"0.6"},{n:["package"],u:"1f4e6",a:"0.6"},{n:["mailbox","closed mailbox with raised flag"],u:"1f4eb",a:"0.6"},{n:["mailbox closed","closed mailbox with lowered flag"],u:"1f4ea",a:"0.6"},{n:["mailbox with mail","open mailbox with raised flag"],u:"1f4ec",a:"0.7"},{n:["mailbox with no mail","open mailbox with lowered flag"],u:"1f4ed",a:"0.7"},{n:["postbox"],u:"1f4ee",a:"0.6"},{n:["ballot box with ballot"],u:"1f5f3-fe0f",a:"0.7"},{n:["pencil","pencil2"],u:"270f-fe0f",a:"0.6"},{n:["black nib"],u:"2712-fe0f",a:"0.6"},{n:["fountain pen","lower left fountain pen"],u:"1f58b-fe0f",a:"0.7"},{n:["pen","lower left ballpoint pen"],u:"1f58a-fe0f",a:"0.7"},{n:["paintbrush","lower left paintbrush"],u:"1f58c-fe0f",a:"0.7"},{n:["crayon","lower left crayon"],u:"1f58d-fe0f",a:"0.7"},{n:["memo","pencil"],u:"1f4dd",a:"0.6"},{n:["briefcase"],u:"1f4bc",a:"0.6"},{n:["file folder"],u:"1f4c1",a:"0.6"},{n:["open file folder"],u:"1f4c2",a:"0.6"},{n:["card index dividers"],u:"1f5c2-fe0f",a:"0.7"},{n:["date","calendar"],u:"1f4c5",a:"0.6"},{n:["calendar","tear-off calendar"],u:"1f4c6",a:"0.6"},{n:["spiral notepad","spiral note pad"],u:"1f5d2-fe0f",a:"0.7"},{n:["spiral calendar","spiral calendar pad"],u:"1f5d3-fe0f",a:"0.7"},{n:["card index"],u:"1f4c7",a:"0.6"},{n:["chart with upwards trend"],u:"1f4c8",a:"0.6"},{n:["chart with downwards trend"],u:"1f4c9",a:"0.6"},{n:["bar chart"],u:"1f4ca",a:"0.6"},{n:["clipboard"],u:"1f4cb",a:"0.6"},{n:["pushpin"],u:"1f4cc",a:"0.6"},{n:["round pushpin"],u:"1f4cd",a:"0.6"},{n:["paperclip"],u:"1f4ce",a:"0.6"},{n:["linked paperclips"],u:"1f587-fe0f",a:"0.7"},{n:["straight ruler"],u:"1f4cf",a:"0.6"},{n:["triangular ruler"],u:"1f4d0",a:"0.6"},{n:["scissors","black scissors"],u:"2702-fe0f",a:"0.6"},{n:["card file box"],u:"1f5c3-fe0f",a:"0.7"},{n:["file cabinet"],u:"1f5c4-fe0f",a:"0.7"},{n:["wastebasket"],u:"1f5d1-fe0f",a:"0.7"},{n:["lock"],u:"1f512",a:"0.6"},{n:["unlock","open lock"],u:"1f513",a:"0.6"},{n:["lock with ink pen"],u:"1f50f",a:"0.6"},{n:["closed lock with key"],u:"1f510",a:"0.6"},{n:["key"],u:"1f511",a:"0.6"},{n:["old key"],u:"1f5dd-fe0f",a:"0.7"},{n:["hammer"],u:"1f528",a:"0.6"},{n:["axe"],u:"1fa93",a:"12.0"},{n:["pick"],u:"26cf-fe0f",a:"0.7"},{n:["hammer and pick"],u:"2692-fe0f",a:"1.0"},{n:["hammer and wrench"],u:"1f6e0-fe0f",a:"0.7"},{n:["dagger","dagger knife"],u:"1f5e1-fe0f",a:"0.7"},{n:["crossed swords"],u:"2694-fe0f",a:"1.0"},{n:["gun","pistol"],u:"1f52b",a:"0.6"},{n:["boomerang"],u:"1fa83",a:"13.0"},{n:["bow and arrow"],u:"1f3f9",a:"1.0"},{n:["shield"],u:"1f6e1-fe0f",a:"0.7"},{n:["carpentry saw"],u:"1fa9a",a:"13.0"},{n:["wrench"],u:"1f527",a:"0.6"},{n:["screwdriver"],u:"1fa9b",a:"13.0"},{n:["nut and bolt"],u:"1f529",a:"0.6"},{n:["gear"],u:"2699-fe0f",a:"1.0"},{n:["clamp","compression"],u:"1f5dc-fe0f",a:"0.7"},{n:["scales","balance scale"],u:"2696-fe0f",a:"1.0"},{n:["probing cane"],u:"1f9af",a:"12.0"},{n:["link","link symbol"],u:"1f517",a:"0.6"},{n:["chains"],u:"26d3-fe0f",a:"0.7"},{n:["hook"],u:"1fa9d",a:"13.0"},{n:["toolbox"],u:"1f9f0",a:"11.0"},{n:["magnet"],u:"1f9f2",a:"11.0"},{n:["ladder"],u:"1fa9c",a:"13.0"},{n:["alembic"],u:"2697-fe0f",a:"1.0"},{n:["test tube"],u:"1f9ea",a:"11.0"},{n:["petri dish"],u:"1f9eb",a:"11.0"},{n:["dna","dna double helix"],u:"1f9ec",a:"11.0"},{n:["microscope"],u:"1f52c",a:"1.0"},{n:["telescope"],u:"1f52d",a:"1.0"},{n:["satellite antenna"],u:"1f4e1",a:"0.6"},{n:["syringe"],u:"1f489",a:"0.6"},{n:["drop of blood"],u:"1fa78",a:"12.0"},{n:["pill"],u:"1f48a",a:"0.6"},{n:["adhesive bandage"],u:"1fa79",a:"12.0"},{n:["crutch"],u:"1fa7c",a:"14.0"},{n:["stethoscope"],u:"1fa7a",a:"12.0"},{n:["x-ray"],u:"1fa7b",a:"14.0"},{n:["door"],u:"1f6aa",a:"0.6"},{n:["elevator"],u:"1f6d7",a:"13.0"},{n:["mirror"],u:"1fa9e",a:"13.0"},{n:["window"],u:"1fa9f",a:"13.0"},{n:["bed"],u:"1f6cf-fe0f",a:"0.7"},{n:["couch and lamp"],u:"1f6cb-fe0f",a:"0.7"},{n:["chair"],u:"1fa91",a:"12.0"},{n:["toilet"],u:"1f6bd",a:"0.6"},{n:["plunger"],u:"1faa0",a:"13.0"},{n:["shower"],u:"1f6bf",a:"1.0"},{n:["bathtub"],u:"1f6c1",a:"1.0"},{n:["mouse trap"],u:"1faa4",a:"13.0"},{n:["razor"],u:"1fa92",a:"12.0"},{n:["lotion bottle"],u:"1f9f4",a:"11.0"},{n:["safety pin"],u:"1f9f7",a:"11.0"},{n:["broom"],u:"1f9f9",a:"11.0"},{n:["basket"],u:"1f9fa",a:"11.0"},{n:["roll of paper"],u:"1f9fb",a:"11.0"},{n:["bucket"],u:"1faa3",a:"13.0"},{n:["soap","bar of soap"],u:"1f9fc",a:"11.0"},{n:["bubbles"],u:"1fae7",a:"14.0"},{n:["toothbrush"],u:"1faa5",a:"13.0"},{n:["sponge"],u:"1f9fd",a:"11.0"},{n:["fire extinguisher"],u:"1f9ef",a:"11.0"},{n:["shopping trolley"],u:"1f6d2",a:"3.0"},{n:["smoking","smoking symbol"],u:"1f6ac",a:"0.6"},{n:["coffin"],u:"26b0-fe0f",a:"1.0"},{n:["headstone"],u:"1faa6",a:"13.0"},{n:["funeral urn"],u:"26b1-fe0f",a:"1.0"},{n:["moyai"],u:"1f5ff",a:"0.6"},{n:["placard"],u:"1faa7",a:"13.0"},{n:["identification card"],u:"1faaa",a:"14.0"}],ek=[{n:["atm","automated teller machine"],u:"1f3e7",a:"0.6"},{n:["put litter in its place","put litter in its place symbol"],u:"1f6ae",a:"1.0"},{n:["potable water","potable water symbol"],u:"1f6b0",a:"1.0"},{n:["wheelchair","wheelchair symbol"],u:"267f",a:"0.6"},{n:["mens","mens symbol"],u:"1f6b9",a:"0.6"},{n:["womens","womens symbol"],u:"1f6ba",a:"0.6"},{n:["restroom"],u:"1f6bb",a:"0.6"},{n:["baby symbol"],u:"1f6bc",a:"0.6"},{n:["wc","water closet"],u:"1f6be",a:"0.6"},{n:["passport control"],u:"1f6c2",a:"1.0"},{n:["customs"],u:"1f6c3",a:"1.0"},{n:["baggage claim"],u:"1f6c4",a:"1.0"},{n:["left luggage"],u:"1f6c5",a:"1.0"},{n:["warning","warning sign"],u:"26a0-fe0f",a:"0.6"},{n:["children crossing"],u:"1f6b8",a:"1.0"},{n:["no entry"],u:"26d4",a:"0.6"},{n:["no entry sign"],u:"1f6ab",a:"0.6"},{n:["no bicycles"],u:"1f6b3",a:"1.0"},{n:["no smoking","no smoking symbol"],u:"1f6ad",a:"0.6"},{n:["do not litter","do not litter symbol"],u:"1f6af",a:"1.0"},{n:["non-potable water","non-potable water symbol"],u:"1f6b1",a:"1.0"},{n:["no pedestrians"],u:"1f6b7",a:"1.0"},{n:["no mobile phones"],u:"1f4f5",a:"1.0"},{n:["underage","no one under eighteen symbol"],u:"1f51e",a:"0.6"},{n:["radioactive","radioactive sign"],u:"2622-fe0f",a:"1.0"},{n:["biohazard","biohazard sign"],u:"2623-fe0f",a:"1.0"},{n:["arrow up","upwards black arrow"],u:"2b06-fe0f",a:"0.6"},{n:["north east arrow","arrow upper right"],u:"2197-fe0f",a:"0.6"},{n:["arrow right","black rightwards arrow"],u:"27a1-fe0f",a:"0.6"},{n:["south east arrow","arrow lower right"],u:"2198-fe0f",a:"0.6"},{n:["arrow down","downwards black arrow"],u:"2b07-fe0f",a:"0.6"},{n:["south west arrow","arrow lower left"],u:"2199-fe0f",a:"0.6"},{n:["arrow left","leftwards black arrow"],u:"2b05-fe0f",a:"0.6"},{n:["north west arrow","arrow upper left"],u:"2196-fe0f",a:"0.6"},{n:["up down arrow","arrow up down"],u:"2195-fe0f",a:"0.6"},{n:["left right arrow"],u:"2194-fe0f",a:"0.6"},{n:["leftwards arrow with hook"],u:"21a9-fe0f",a:"0.6"},{n:["arrow right hook","rightwards arrow with hook"],u:"21aa-fe0f",a:"0.6"},{n:["arrow heading up","arrow pointing rightwards then curving upwards"],u:"2934-fe0f",a:"0.6"},{n:["arrow heading down","arrow pointing rightwards then curving downwards"],u:"2935-fe0f",a:"0.6"},{n:["arrows clockwise","clockwise downwards and upwards open circle arrows"],u:"1f503",a:"0.6"},{n:["arrows counterclockwise","anticlockwise downwards and upwards open circle arrows"],u:"1f504",a:"1.0"},{n:["back","back with leftwards arrow above"],u:"1f519",a:"0.6"},{n:["end","end with leftwards arrow above"],u:"1f51a",a:"0.6"},{n:["on","on with exclamation mark with left right arrow above"],u:"1f51b",a:"0.6"},{n:["soon","soon with rightwards arrow above"],u:"1f51c",a:"0.6"},{n:["top","top with upwards arrow above"],u:"1f51d",a:"0.6"},{n:["place of worship"],u:"1f6d0",a:"1.0"},{n:["atom symbol"],u:"269b-fe0f",a:"1.0"},{n:["om","om symbol"],u:"1f549-fe0f",a:"0.7"},{n:["star of david"],u:"2721-fe0f",a:"0.7"},{n:["wheel of dharma"],u:"2638-fe0f",a:"0.7"},{n:["yin yang"],u:"262f-fe0f",a:"0.7"},{n:["latin cross"],u:"271d-fe0f",a:"0.7"},{n:["orthodox cross"],u:"2626-fe0f",a:"1.0"},{n:["star and crescent"],u:"262a-fe0f",a:"0.7"},{n:["peace symbol"],u:"262e-fe0f",a:"1.0"},{n:["menorah with nine branches"],u:"1f54e",a:"1.0"},{n:["six pointed star","six pointed star with middle dot"],u:"1f52f",a:"0.6"},{n:["aries"],u:"2648",a:"0.6"},{n:["taurus"],u:"2649",a:"0.6"},{n:["gemini"],u:"264a",a:"0.6"},{n:["cancer"],u:"264b",a:"0.6"},{n:["leo"],u:"264c",a:"0.6"},{n:["virgo"],u:"264d",a:"0.6"},{n:["libra"],u:"264e",a:"0.6"},{n:["scorpius"],u:"264f",a:"0.6"},{n:["sagittarius"],u:"2650",a:"0.6"},{n:["capricorn"],u:"2651",a:"0.6"},{n:["aquarius"],u:"2652",a:"0.6"},{n:["pisces"],u:"2653",a:"0.6"},{n:["ophiuchus"],u:"26ce",a:"0.6"},{n:["twisted rightwards arrows"],u:"1f500",a:"1.0"},{n:["repeat","clockwise rightwards and leftwards open circle arrows"],u:"1f501",a:"1.0"},{n:["repeat one","clockwise rightwards and leftwards open circle arrows with circled one overlay"],u:"1f502",a:"1.0"},{n:["arrow forward","black right-pointing triangle"],u:"25b6-fe0f",a:"0.6"},{n:["fast forward","black right-pointing double triangle"],u:"23e9",a:"0.6"},{n:["next track button","black right pointing double triangle with vertical bar"],u:"23ed-fe0f",a:"0.7"},{n:["play or pause button","black right pointing triangle with double vertical bar"],u:"23ef-fe0f",a:"1.0"},{n:["arrow backward","black left-pointing triangle"],u:"25c0-fe0f",a:"0.6"},{n:["rewind","black left-pointing double triangle"],u:"23ea",a:"0.6"},{n:["last track button","black left pointing double triangle with vertical bar"],u:"23ee-fe0f",a:"0.7"},{n:["arrow up small","up-pointing small red triangle"],u:"1f53c",a:"0.6"},{n:["arrow double up","black up-pointing double triangle"],u:"23eb",a:"0.6"},{n:["arrow down small","down-pointing small red triangle"],u:"1f53d",a:"0.6"},{n:["arrow double down","black down-pointing double triangle"],u:"23ec",a:"0.6"},{n:["pause button","double vertical bar"],u:"23f8-fe0f",a:"0.7"},{n:["stop button","black square for stop"],u:"23f9-fe0f",a:"0.7"},{n:["record button","black circle for record"],u:"23fa-fe0f",a:"0.7"},{n:["eject","eject button"],u:"23cf-fe0f",a:"1.0"},{n:["cinema"],u:"1f3a6",a:"0.6"},{n:["low brightness","low brightness symbol"],u:"1f505",a:"1.0"},{n:["high brightness","high brightness symbol"],u:"1f506",a:"1.0"},{n:["signal strength","antenna with bars"],u:"1f4f6",a:"0.6"},{n:["vibration mode"],u:"1f4f3",a:"0.6"},{n:["mobile phone off"],u:"1f4f4",a:"0.6"},{n:["female sign"],u:"2640-fe0f",a:"4.0"},{n:["male sign"],u:"2642-fe0f",a:"4.0"},{n:["transgender symbol"],u:"26a7-fe0f",a:"13.0"},{n:["heavy multiplication x"],u:"2716-fe0f",a:"0.6"},{n:["heavy plus sign"],u:"2795",a:"0.6"},{n:["heavy minus sign"],u:"2796",a:"0.6"},{n:["heavy division sign"],u:"2797",a:"0.6"},{n:["heavy equals sign"],u:"1f7f0",a:"14.0"},{n:["infinity"],u:"267e-fe0f",a:"11.0"},{n:["bangbang","double exclamation mark"],u:"203c-fe0f",a:"0.6"},{n:["interrobang","exclamation question mark"],u:"2049-fe0f",a:"0.6"},{n:["question","black question mark ornament"],u:"2753",a:"0.6"},{n:["grey question","white question mark ornament"],u:"2754",a:"0.6"},{n:["grey exclamation","white exclamation mark ornament"],u:"2755",a:"0.6"},{n:["exclamation","heavy exclamation mark","heavy exclamation mark symbol"],u:"2757",a:"0.6"},{n:["wavy dash"],u:"3030-fe0f",a:"0.6"},{n:["currency exchange"],u:"1f4b1",a:"0.6"},{n:["heavy dollar sign"],u:"1f4b2",a:"0.6"},{n:["medical symbol","staff of aesculapius"],u:"2695-fe0f",a:"4.0"},{n:["recycle","black universal recycling symbol"],u:"267b-fe0f",a:"0.6"},{n:["fleur-de-lis","fleur de lis"],u:"269c-fe0f",a:"1.0"},{n:["trident","trident emblem"],u:"1f531",a:"0.6"},{n:["name badge"],u:"1f4db",a:"0.6"},{n:["beginner","japanese symbol for beginner"],u:"1f530",a:"0.6"},{n:["o","heavy large circle"],u:"2b55",a:"0.6"},{n:["white check mark","white heavy check mark"],u:"2705",a:"0.6"},{n:["ballot box with check"],u:"2611-fe0f",a:"0.6"},{n:["heavy check mark"],u:"2714-fe0f",a:"0.6"},{n:["x","cross mark"],u:"274c",a:"0.6"},{n:["negative squared cross mark"],u:"274e",a:"0.6"},{n:["curly loop"],u:"27b0",a:"0.6"},{n:["loop","double curly loop"],u:"27bf",a:"1.0"},{n:["part alternation mark"],u:"303d-fe0f",a:"0.6"},{n:["eight spoked asterisk"],u:"2733-fe0f",a:"0.6"},{n:["eight pointed black star"],u:"2734-fe0f",a:"0.6"},{n:["sparkle"],u:"2747-fe0f",a:"0.6"},{n:["copyright","copyright sign"],u:"00a9-fe0f",a:"0.6"},{n:["registered","registered sign"],u:"00ae-fe0f",a:"0.6"},{n:["tm","trade mark sign"],u:"2122-fe0f",a:"0.6"},{n:["hash","hash key"],u:"0023-fe0f-20e3",a:"0.6"},{n:["keycap: *","keycap star"],u:"002a-fe0f-20e3",a:"2.0"},{n:["zero","keycap 0"],u:"0030-fe0f-20e3",a:"0.6"},{n:["one","keycap 1"],u:"0031-fe0f-20e3",a:"0.6"},{n:["two","keycap 2"],u:"0032-fe0f-20e3",a:"0.6"},{n:["three","keycap 3"],u:"0033-fe0f-20e3",a:"0.6"},{n:["four","keycap 4"],u:"0034-fe0f-20e3",a:"0.6"},{n:["five","keycap 5"],u:"0035-fe0f-20e3",a:"0.6"},{n:["six","keycap 6"],u:"0036-fe0f-20e3",a:"0.6"},{n:["seven","keycap 7"],u:"0037-fe0f-20e3",a:"0.6"},{n:["eight","keycap 8"],u:"0038-fe0f-20e3",a:"0.6"},{n:["nine","keycap 9"],u:"0039-fe0f-20e3",a:"0.6"},{n:["keycap ten"],u:"1f51f",a:"0.6"},{n:["capital abcd","input symbol for latin capital letters"],u:"1f520",a:"0.6"},{n:["abcd","input symbol for latin small letters"],u:"1f521",a:"0.6"},{n:["1234","input symbol for numbers"],u:"1f522",a:"0.6"},{n:["symbols","input symbol for symbols"],u:"1f523",a:"0.6"},{n:["abc","input symbol for latin letters"],u:"1f524",a:"0.6"},{n:["a","negative squared latin capital letter a"],u:"1f170-fe0f",a:"0.6"},{n:["ab","negative squared ab"],u:"1f18e",a:"0.6"},{n:["b","negative squared latin capital letter b"],u:"1f171-fe0f",a:"0.6"},{n:["cl","squared cl"],u:"1f191",a:"0.6"},{n:["cool","squared cool"],u:"1f192",a:"0.6"},{n:["free","squared free"],u:"1f193",a:"0.6"},{n:["information source"],u:"2139-fe0f",a:"0.6"},{n:["id","squared id"],u:"1f194",a:"0.6"},{n:["m","circled latin capital letter m"],u:"24c2-fe0f",a:"0.6"},{n:["new","squared new"],u:"1f195",a:"0.6"},{n:["ng","squared ng"],u:"1f196",a:"0.6"},{n:["o2","negative squared latin capital letter o"],u:"1f17e-fe0f",a:"0.6"},{n:["ok","squared ok"],u:"1f197",a:"0.6"},{n:["parking","negative squared latin capital letter p"],u:"1f17f-fe0f",a:"0.6"},{n:["sos","squared sos"],u:"1f198",a:"0.6"},{n:["up","squared up with exclamation mark"],u:"1f199",a:"0.6"},{n:["vs","squared vs"],u:"1f19a",a:"0.6"},{n:["koko","squared katakana koko"],u:"1f201",a:"0.6"},{n:["sa","squared katakana sa"],u:"1f202-fe0f",a:"0.6"},{n:["u6708","squared cjk unified ideograph-6708"],u:"1f237-fe0f",a:"0.6"},{n:["u6709","squared cjk unified ideograph-6709"],u:"1f236",a:"0.6"},{n:["u6307","squared cjk unified ideograph-6307"],u:"1f22f",a:"0.6"},{n:["ideograph advantage","circled ideograph advantage"],u:"1f250",a:"0.6"},{n:["u5272","squared cjk unified ideograph-5272"],u:"1f239",a:"0.6"},{n:["u7121","squared cjk unified ideograph-7121"],u:"1f21a",a:"0.6"},{n:["u7981","squared cjk unified ideograph-7981"],u:"1f232",a:"0.6"},{n:["accept","circled ideograph accept"],u:"1f251",a:"0.6"},{n:["u7533","squared cjk unified ideograph-7533"],u:"1f238",a:"0.6"},{n:["u5408","squared cjk unified ideograph-5408"],u:"1f234",a:"0.6"},{n:["u7a7a","squared cjk unified ideograph-7a7a"],u:"1f233",a:"0.6"},{n:["congratulations","circled ideograph congratulation"],u:"3297-fe0f",a:"0.6"},{n:["secret","circled ideograph secret"],u:"3299-fe0f",a:"0.6"},{n:["u55b6","squared cjk unified ideograph-55b6"],u:"1f23a",a:"0.6"},{n:["u6e80","squared cjk unified ideograph-6e80"],u:"1f235",a:"0.6"},{n:["red circle","large red circle"],u:"1f534",a:"0.6"},{n:["large orange circle"],u:"1f7e0",a:"12.0"},{n:["large yellow circle"],u:"1f7e1",a:"12.0"},{n:["large green circle"],u:"1f7e2",a:"12.0"},{n:["large blue circle"],u:"1f535",a:"0.6"},{n:["large purple circle"],u:"1f7e3",a:"12.0"},{n:["large brown circle"],u:"1f7e4",a:"12.0"},{n:["black circle","medium black circle"],u:"26ab",a:"0.6"},{n:["white circle","medium white circle"],u:"26aa",a:"0.6"},{n:["large red square"],u:"1f7e5",a:"12.0"},{n:["large orange square"],u:"1f7e7",a:"12.0"},{n:["large yellow square"],u:"1f7e8",a:"12.0"},{n:["large green square"],u:"1f7e9",a:"12.0"},{n:["large blue square"],u:"1f7e6",a:"12.0"},{n:["large purple square"],u:"1f7ea",a:"12.0"},{n:["large brown square"],u:"1f7eb",a:"12.0"},{n:["black large square"],u:"2b1b",a:"0.6"},{n:["white large square"],u:"2b1c",a:"0.6"},{n:["black medium square"],u:"25fc-fe0f",a:"0.6"},{n:["white medium square"],u:"25fb-fe0f",a:"0.6"},{n:["black medium small square"],u:"25fe",a:"0.6"},{n:["white medium small square"],u:"25fd",a:"0.6"},{n:["black small square"],u:"25aa-fe0f",a:"0.6"},{n:["white small square"],u:"25ab-fe0f",a:"0.6"},{n:["large orange diamond"],u:"1f536",a:"0.6"},{n:["large blue diamond"],u:"1f537",a:"0.6"},{n:["small orange diamond"],u:"1f538",a:"0.6"},{n:["small blue diamond"],u:"1f539",a:"0.6"},{n:["small red triangle","up-pointing red triangle"],u:"1f53a",a:"0.6"},{n:["small red triangle down","down-pointing red triangle"],u:"1f53b",a:"0.6"},{n:["diamond shape with a dot inside"],u:"1f4a0",a:"0.6"},{n:["radio button"],u:"1f518",a:"0.6"},{n:["white square button"],u:"1f533",a:"0.6"},{n:["black square button"],u:"1f532",a:"0.6"}],tk=[{n:["chequered flag","checkered flag"],u:"1f3c1",a:"0.6"},{n:["triangular flag on post"],u:"1f6a9",a:"0.6"},{n:["crossed flags"],u:"1f38c",a:"0.6"},{n:["waving black flag"],u:"1f3f4",a:"1.0"},{n:["white flag","waving white flag"],u:"1f3f3-fe0f",a:"0.7"},{n:["rainbow flag","rainbow-flag"],u:"1f3f3-fe0f-200d-1f308",a:"4.0"},{n:["transgender flag"],u:"1f3f3-fe0f-200d-26a7-fe0f",a:"13.0"},{n:["pirate flag"],u:"1f3f4-200d-2620-fe0f",a:"11.0"},{n:["flag-ac","ascension island flag"],u:"1f1e6-1f1e8",a:"2.0"},{n:["flag-ad","andorra flag"],u:"1f1e6-1f1e9",a:"2.0"},{n:["flag-ae","united arab emirates flag"],u:"1f1e6-1f1ea",a:"2.0"},{n:["flag-af","afghanistan flag"],u:"1f1e6-1f1eb",a:"2.0"},{n:["flag-ag","antigua & barbuda flag"],u:"1f1e6-1f1ec",a:"2.0"},{n:["flag-ai","anguilla flag"],u:"1f1e6-1f1ee",a:"2.0"},{n:["flag-al","albania flag"],u:"1f1e6-1f1f1",a:"2.0"},{n:["flag-am","armenia flag"],u:"1f1e6-1f1f2",a:"2.0"},{n:["flag-ao","angola flag"],u:"1f1e6-1f1f4",a:"2.0"},{n:["flag-aq","antarctica flag"],u:"1f1e6-1f1f6",a:"2.0"},{n:["flag-ar","argentina flag"],u:"1f1e6-1f1f7",a:"2.0"},{n:["flag-as","american samoa flag"],u:"1f1e6-1f1f8",a:"2.0"},{n:["flag-at","austria flag"],u:"1f1e6-1f1f9",a:"2.0"},{n:["flag-au","australia flag"],u:"1f1e6-1f1fa",a:"2.0"},{n:["flag-aw","aruba flag"],u:"1f1e6-1f1fc",a:"2.0"},{n:["flag-ax","åland islands flag"],u:"1f1e6-1f1fd",a:"2.0"},{n:["flag-az","azerbaijan flag"],u:"1f1e6-1f1ff",a:"2.0"},{n:["flag-ba","bosnia & herzegovina flag"],u:"1f1e7-1f1e6",a:"2.0"},{n:["flag-bb","barbados flag"],u:"1f1e7-1f1e7",a:"2.0"},{n:["flag-bd","bangladesh flag"],u:"1f1e7-1f1e9",a:"2.0"},{n:["flag-be","belgium flag"],u:"1f1e7-1f1ea",a:"2.0"},{n:["flag-bf","burkina faso flag"],u:"1f1e7-1f1eb",a:"2.0"},{n:["flag-bg","bulgaria flag"],u:"1f1e7-1f1ec",a:"2.0"},{n:["flag-bh","bahrain flag"],u:"1f1e7-1f1ed",a:"2.0"},{n:["flag-bi","burundi flag"],u:"1f1e7-1f1ee",a:"2.0"},{n:["flag-bj","benin flag"],u:"1f1e7-1f1ef",a:"2.0"},{n:["flag-bl","st. barthélemy flag"],u:"1f1e7-1f1f1",a:"2.0"},{n:["flag-bm","bermuda flag"],u:"1f1e7-1f1f2",a:"2.0"},{n:["flag-bn","brunei flag"],u:"1f1e7-1f1f3",a:"2.0"},{n:["flag-bo","bolivia flag"],u:"1f1e7-1f1f4",a:"2.0"},{n:["flag-bq","caribbean netherlands flag"],u:"1f1e7-1f1f6",a:"2.0"},{n:["flag-br","brazil flag"],u:"1f1e7-1f1f7",a:"2.0"},{n:["flag-bs","bahamas flag"],u:"1f1e7-1f1f8",a:"2.0"},{n:["flag-bt","bhutan flag"],u:"1f1e7-1f1f9",a:"2.0"},{n:["flag-bv","bouvet island flag"],u:"1f1e7-1f1fb",a:"2.0"},{n:["flag-bw","botswana flag"],u:"1f1e7-1f1fc",a:"2.0"},{n:["flag-by","belarus flag"],u:"1f1e7-1f1fe",a:"2.0"},{n:["flag-bz","belize flag"],u:"1f1e7-1f1ff",a:"2.0"},{n:["flag-ca","canada flag"],u:"1f1e8-1f1e6",a:"2.0"},{n:["flag-cc","cocos (keeling) islands flag"],u:"1f1e8-1f1e8",a:"2.0"},{n:["flag-cd","congo - kinshasa flag"],u:"1f1e8-1f1e9",a:"2.0"},{n:["flag-cf","central african republic flag"],u:"1f1e8-1f1eb",a:"2.0"},{n:["flag-cg","congo - brazzaville flag"],u:"1f1e8-1f1ec",a:"2.0"},{n:["flag-ch","switzerland flag"],u:"1f1e8-1f1ed",a:"2.0"},{n:["flag-ci","côte d’ivoire flag"],u:"1f1e8-1f1ee",a:"2.0"},{n:["flag-ck","cook islands flag"],u:"1f1e8-1f1f0",a:"2.0"},{n:["flag-cl","chile flag"],u:"1f1e8-1f1f1",a:"2.0"},{n:["flag-cm","cameroon flag"],u:"1f1e8-1f1f2",a:"2.0"},{n:["cn","flag-cn","china flag"],u:"1f1e8-1f1f3",a:"0.6"},{n:["flag-co","colombia flag"],u:"1f1e8-1f1f4",a:"2.0"},{n:["flag-cp","clipperton island flag"],u:"1f1e8-1f1f5",a:"2.0"},{n:["flag-cr","costa rica flag"],u:"1f1e8-1f1f7",a:"2.0"},{n:["flag-cu","cuba flag"],u:"1f1e8-1f1fa",a:"2.0"},{n:["flag-cv","cape verde flag"],u:"1f1e8-1f1fb",a:"2.0"},{n:["flag-cw","curaçao flag"],u:"1f1e8-1f1fc",a:"2.0"},{n:["flag-cx","christmas island flag"],u:"1f1e8-1f1fd",a:"2.0"},{n:["flag-cy","cyprus flag"],u:"1f1e8-1f1fe",a:"2.0"},{n:["flag-cz","czechia flag"],u:"1f1e8-1f1ff",a:"2.0"},{n:["de","flag-de","germany flag"],u:"1f1e9-1f1ea",a:"0.6"},{n:["flag-dg","diego garcia flag"],u:"1f1e9-1f1ec",a:"2.0"},{n:["flag-dj","djibouti flag"],u:"1f1e9-1f1ef",a:"2.0"},{n:["flag-dk","denmark flag"],u:"1f1e9-1f1f0",a:"2.0"},{n:["flag-dm","dominica flag"],u:"1f1e9-1f1f2",a:"2.0"},{n:["flag-do","dominican republic flag"],u:"1f1e9-1f1f4",a:"2.0"},{n:["flag-dz","algeria flag"],u:"1f1e9-1f1ff",a:"2.0"},{n:["flag-ea","ceuta & melilla flag"],u:"1f1ea-1f1e6",a:"2.0"},{n:["flag-ec","ecuador flag"],u:"1f1ea-1f1e8",a:"2.0"},{n:["flag-ee","estonia flag"],u:"1f1ea-1f1ea",a:"2.0"},{n:["flag-eg","egypt flag"],u:"1f1ea-1f1ec",a:"2.0"},{n:["flag-eh","western sahara flag"],u:"1f1ea-1f1ed",a:"2.0"},{n:["flag-er","eritrea flag"],u:"1f1ea-1f1f7",a:"2.0"},{n:["es","flag-es","spain flag"],u:"1f1ea-1f1f8",a:"0.6"},{n:["flag-et","ethiopia flag"],u:"1f1ea-1f1f9",a:"2.0"},{n:["flag-eu","european union flag"],u:"1f1ea-1f1fa",a:"2.0"},{n:["flag-fi","finland flag"],u:"1f1eb-1f1ee",a:"2.0"},{n:["flag-fj","fiji flag"],u:"1f1eb-1f1ef",a:"2.0"},{n:["flag-fk","falkland islands flag"],u:"1f1eb-1f1f0",a:"2.0"},{n:["flag-fm","micronesia flag"],u:"1f1eb-1f1f2",a:"2.0"},{n:["flag-fo","faroe islands flag"],u:"1f1eb-1f1f4",a:"2.0"},{n:["fr","flag-fr","france flag"],u:"1f1eb-1f1f7",a:"0.6"},{n:["flag-ga","gabon flag"],u:"1f1ec-1f1e6",a:"2.0"},{n:["gb","uk","flag-gb","united kingdom flag"],u:"1f1ec-1f1e7",a:"0.6"},{n:["flag-gd","grenada flag"],u:"1f1ec-1f1e9",a:"2.0"},{n:["flag-ge","georgia flag"],u:"1f1ec-1f1ea",a:"2.0"},{n:["flag-gf","french guiana flag"],u:"1f1ec-1f1eb",a:"2.0"},{n:["flag-gg","guernsey flag"],u:"1f1ec-1f1ec",a:"2.0"},{n:["flag-gh","ghana flag"],u:"1f1ec-1f1ed",a:"2.0"},{n:["flag-gi","gibraltar flag"],u:"1f1ec-1f1ee",a:"2.0"},{n:["flag-gl","greenland flag"],u:"1f1ec-1f1f1",a:"2.0"},{n:["flag-gm","gambia flag"],u:"1f1ec-1f1f2",a:"2.0"},{n:["flag-gn","guinea flag"],u:"1f1ec-1f1f3",a:"2.0"},{n:["flag-gp","guadeloupe flag"],u:"1f1ec-1f1f5",a:"2.0"},{n:["flag-gq","equatorial guinea flag"],u:"1f1ec-1f1f6",a:"2.0"},{n:["flag-gr","greece flag"],u:"1f1ec-1f1f7",a:"2.0"},{n:["flag-gs","south georgia & south sandwich islands flag"],u:"1f1ec-1f1f8",a:"2.0"},{n:["flag-gt","guatemala flag"],u:"1f1ec-1f1f9",a:"2.0"},{n:["flag-gu","guam flag"],u:"1f1ec-1f1fa",a:"2.0"},{n:["flag-gw","guinea-bissau flag"],u:"1f1ec-1f1fc",a:"2.0"},{n:["flag-gy","guyana flag"],u:"1f1ec-1f1fe",a:"2.0"},{n:["flag-hk","hong kong sar china flag"],u:"1f1ed-1f1f0",a:"2.0"},{n:["flag-hm","heard & mcdonald islands flag"],u:"1f1ed-1f1f2",a:"2.0"},{n:["flag-hn","honduras flag"],u:"1f1ed-1f1f3",a:"2.0"},{n:["flag-hr","croatia flag"],u:"1f1ed-1f1f7",a:"2.0"},{n:["flag-ht","haiti flag"],u:"1f1ed-1f1f9",a:"2.0"},{n:["flag-hu","hungary flag"],u:"1f1ed-1f1fa",a:"2.0"},{n:["flag-ic","canary islands flag"],u:"1f1ee-1f1e8",a:"2.0"},{n:["flag-id","indonesia flag"],u:"1f1ee-1f1e9",a:"2.0"},{n:["flag-ie","ireland flag"],u:"1f1ee-1f1ea",a:"2.0"},{n:["flag-il","israel flag"],u:"1f1ee-1f1f1",a:"2.0"},{n:["flag-im","isle of man flag"],u:"1f1ee-1f1f2",a:"2.0"},{n:["flag-in","india flag"],u:"1f1ee-1f1f3",a:"2.0"},{n:["flag-io","british indian ocean territory flag"],u:"1f1ee-1f1f4",a:"2.0"},{n:["flag-iq","iraq flag"],u:"1f1ee-1f1f6",a:"2.0"},{n:["flag-ir","iran flag"],u:"1f1ee-1f1f7",a:"2.0"},{n:["flag-is","iceland flag"],u:"1f1ee-1f1f8",a:"2.0"},{n:["it","flag-it","italy flag"],u:"1f1ee-1f1f9",a:"0.6"},{n:["flag-je","jersey flag"],u:"1f1ef-1f1ea",a:"2.0"},{n:["flag-jm","jamaica flag"],u:"1f1ef-1f1f2",a:"2.0"},{n:["flag-jo","jordan flag"],u:"1f1ef-1f1f4",a:"2.0"},{n:["jp","flag-jp","japan flag"],u:"1f1ef-1f1f5",a:"0.6"},{n:["flag-ke","kenya flag"],u:"1f1f0-1f1ea",a:"2.0"},{n:["flag-kg","kyrgyzstan flag"],u:"1f1f0-1f1ec",a:"2.0"},{n:["flag-kh","cambodia flag"],u:"1f1f0-1f1ed",a:"2.0"},{n:["flag-ki","kiribati flag"],u:"1f1f0-1f1ee",a:"2.0"},{n:["flag-km","comoros flag"],u:"1f1f0-1f1f2",a:"2.0"},{n:["flag-kn","st. kitts & nevis flag"],u:"1f1f0-1f1f3",a:"2.0"},{n:["flag-kp","north korea flag"],u:"1f1f0-1f1f5",a:"2.0"},{n:["kr","flag-kr","south korea flag"],u:"1f1f0-1f1f7",a:"0.6"},{n:["flag-kw","kuwait flag"],u:"1f1f0-1f1fc",a:"2.0"},{n:["flag-ky","cayman islands flag"],u:"1f1f0-1f1fe",a:"2.0"},{n:["flag-kz","kazakhstan flag"],u:"1f1f0-1f1ff",a:"2.0"},{n:["flag-la","laos flag"],u:"1f1f1-1f1e6",a:"2.0"},{n:["flag-lb","lebanon flag"],u:"1f1f1-1f1e7",a:"2.0"},{n:["flag-lc","st. lucia flag"],u:"1f1f1-1f1e8",a:"2.0"},{n:["flag-li","liechtenstein flag"],u:"1f1f1-1f1ee",a:"2.0"},{n:["flag-lk","sri lanka flag"],u:"1f1f1-1f1f0",a:"2.0"},{n:["flag-lr","liberia flag"],u:"1f1f1-1f1f7",a:"2.0"},{n:["flag-ls","lesotho flag"],u:"1f1f1-1f1f8",a:"2.0"},{n:["flag-lt","lithuania flag"],u:"1f1f1-1f1f9",a:"2.0"},{n:["flag-lu","luxembourg flag"],u:"1f1f1-1f1fa",a:"2.0"},{n:["flag-lv","latvia flag"],u:"1f1f1-1f1fb",a:"2.0"},{n:["flag-ly","libya flag"],u:"1f1f1-1f1fe",a:"2.0"},{n:["flag-ma","morocco flag"],u:"1f1f2-1f1e6",a:"2.0"},{n:["flag-mc","monaco flag"],u:"1f1f2-1f1e8",a:"2.0"},{n:["flag-md","moldova flag"],u:"1f1f2-1f1e9",a:"2.0"},{n:["flag-me","montenegro flag"],u:"1f1f2-1f1ea",a:"2.0"},{n:["flag-mf","st. martin flag"],u:"1f1f2-1f1eb",a:"2.0"},{n:["flag-mg","madagascar flag"],u:"1f1f2-1f1ec",a:"2.0"},{n:["flag-mh","marshall islands flag"],u:"1f1f2-1f1ed",a:"2.0"},{n:["flag-mk","north macedonia flag"],u:"1f1f2-1f1f0",a:"2.0"},{n:["flag-ml","mali flag"],u:"1f1f2-1f1f1",a:"2.0"},{n:["flag-mm","myanmar (burma) flag"],u:"1f1f2-1f1f2",a:"2.0"},{n:["flag-mn","mongolia flag"],u:"1f1f2-1f1f3",a:"2.0"},{n:["flag-mo","macao sar china flag"],u:"1f1f2-1f1f4",a:"2.0"},{n:["flag-mp","northern mariana islands flag"],u:"1f1f2-1f1f5",a:"2.0"},{n:["flag-mq","martinique flag"],u:"1f1f2-1f1f6",a:"2.0"},{n:["flag-mr","mauritania flag"],u:"1f1f2-1f1f7",a:"2.0"},{n:["flag-ms","montserrat flag"],u:"1f1f2-1f1f8",a:"2.0"},{n:["flag-mt","malta flag"],u:"1f1f2-1f1f9",a:"2.0"},{n:["flag-mu","mauritius flag"],u:"1f1f2-1f1fa",a:"2.0"},{n:["flag-mv","maldives flag"],u:"1f1f2-1f1fb",a:"2.0"},{n:["flag-mw","malawi flag"],u:"1f1f2-1f1fc",a:"2.0"},{n:["flag-mx","mexico flag"],u:"1f1f2-1f1fd",a:"2.0"},{n:["flag-my","malaysia flag"],u:"1f1f2-1f1fe",a:"2.0"},{n:["flag-mz","mozambique flag"],u:"1f1f2-1f1ff",a:"2.0"},{n:["flag-na","namibia flag"],u:"1f1f3-1f1e6",a:"2.0"},{n:["flag-nc","new caledonia flag"],u:"1f1f3-1f1e8",a:"2.0"},{n:["flag-ne","niger flag"],u:"1f1f3-1f1ea",a:"2.0"},{n:["flag-nf","norfolk island flag"],u:"1f1f3-1f1eb",a:"2.0"},{n:["flag-ng","nigeria flag"],u:"1f1f3-1f1ec",a:"2.0"},{n:["flag-ni","nicaragua flag"],u:"1f1f3-1f1ee",a:"2.0"},{n:["flag-nl","netherlands flag"],u:"1f1f3-1f1f1",a:"2.0"},{n:["flag-no","norway flag"],u:"1f1f3-1f1f4",a:"2.0"},{n:["flag-np","nepal flag"],u:"1f1f3-1f1f5",a:"2.0"},{n:["flag-nr","nauru flag"],u:"1f1f3-1f1f7",a:"2.0"},{n:["flag-nu","niue flag"],u:"1f1f3-1f1fa",a:"2.0"},{n:["flag-nz","new zealand flag"],u:"1f1f3-1f1ff",a:"2.0"},{n:["flag-om","oman flag"],u:"1f1f4-1f1f2",a:"2.0"},{n:["flag-pa","panama flag"],u:"1f1f5-1f1e6",a:"2.0"},{n:["flag-pe","peru flag"],u:"1f1f5-1f1ea",a:"2.0"},{n:["flag-pf","french polynesia flag"],u:"1f1f5-1f1eb",a:"2.0"},{n:["flag-pg","papua new guinea flag"],u:"1f1f5-1f1ec",a:"2.0"},{n:["flag-ph","philippines flag"],u:"1f1f5-1f1ed",a:"2.0"},{n:["flag-pk","pakistan flag"],u:"1f1f5-1f1f0",a:"2.0"},{n:["flag-pl","poland flag"],u:"1f1f5-1f1f1",a:"2.0"},{n:["flag-pm","st. pierre & miquelon flag"],u:"1f1f5-1f1f2",a:"2.0"},{n:["flag-pn","pitcairn islands flag"],u:"1f1f5-1f1f3",a:"2.0"},{n:["flag-pr","puerto rico flag"],u:"1f1f5-1f1f7",a:"2.0"},{n:["flag-ps","palestinian territories flag"],u:"1f1f5-1f1f8",a:"2.0"},{n:["flag-pt","portugal flag"],u:"1f1f5-1f1f9",a:"2.0"},{n:["flag-pw","palau flag"],u:"1f1f5-1f1fc",a:"2.0"},{n:["flag-py","paraguay flag"],u:"1f1f5-1f1fe",a:"2.0"},{n:["flag-qa","qatar flag"],u:"1f1f6-1f1e6",a:"2.0"},{n:["flag-re","réunion flag"],u:"1f1f7-1f1ea",a:"2.0"},{n:["flag-ro","romania flag"],u:"1f1f7-1f1f4",a:"2.0"},{n:["flag-rs","serbia flag"],u:"1f1f7-1f1f8",a:"2.0"},{n:["ru","flag-ru","russia flag"],u:"1f1f7-1f1fa",a:"0.6"},{n:["flag-rw","rwanda flag"],u:"1f1f7-1f1fc",a:"2.0"},{n:["flag-sa","saudi arabia flag"],u:"1f1f8-1f1e6",a:"2.0"},{n:["flag-sb","solomon islands flag"],u:"1f1f8-1f1e7",a:"2.0"},{n:["flag-sc","seychelles flag"],u:"1f1f8-1f1e8",a:"2.0"},{n:["flag-sd","sudan flag"],u:"1f1f8-1f1e9",a:"2.0"},{n:["flag-se","sweden flag"],u:"1f1f8-1f1ea",a:"2.0"},{n:["flag-sg","singapore flag"],u:"1f1f8-1f1ec",a:"2.0"},{n:["flag-sh","st. helena flag"],u:"1f1f8-1f1ed",a:"2.0"},{n:["flag-si","slovenia flag"],u:"1f1f8-1f1ee",a:"2.0"},{n:["flag-sj","svalbard & jan mayen flag"],u:"1f1f8-1f1ef",a:"2.0"},{n:["flag-sk","slovakia flag"],u:"1f1f8-1f1f0",a:"2.0"},{n:["flag-sl","sierra leone flag"],u:"1f1f8-1f1f1",a:"2.0"},{n:["flag-sm","san marino flag"],u:"1f1f8-1f1f2",a:"2.0"},{n:["flag-sn","senegal flag"],u:"1f1f8-1f1f3",a:"2.0"},{n:["flag-so","somalia flag"],u:"1f1f8-1f1f4",a:"2.0"},{n:["flag-sr","suriname flag"],u:"1f1f8-1f1f7",a:"2.0"},{n:["flag-ss","south sudan flag"],u:"1f1f8-1f1f8",a:"2.0"},{n:["flag-st","são tomé & príncipe flag"],u:"1f1f8-1f1f9",a:"2.0"},{n:["flag-sv","el salvador flag"],u:"1f1f8-1f1fb",a:"2.0"},{n:["flag-sx","sint maarten flag"],u:"1f1f8-1f1fd",a:"2.0"},{n:["flag-sy","syria flag"],u:"1f1f8-1f1fe",a:"2.0"},{n:["flag-sz","eswatini flag"],u:"1f1f8-1f1ff",a:"2.0"},{n:["flag-ta","tristan da cunha flag"],u:"1f1f9-1f1e6",a:"2.0"},{n:["flag-tc","turks & caicos islands flag"],u:"1f1f9-1f1e8",a:"2.0"},{n:["flag-td","chad flag"],u:"1f1f9-1f1e9",a:"2.0"},{n:["flag-tf","french southern territories flag"],u:"1f1f9-1f1eb",a:"2.0"},{n:["flag-tg","togo flag"],u:"1f1f9-1f1ec",a:"2.0"},{n:["flag-th","thailand flag"],u:"1f1f9-1f1ed",a:"2.0"},{n:["flag-tj","tajikistan flag"],u:"1f1f9-1f1ef",a:"2.0"},{n:["flag-tk","tokelau flag"],u:"1f1f9-1f1f0",a:"2.0"},{n:["flag-tl","timor-leste flag"],u:"1f1f9-1f1f1",a:"2.0"},{n:["flag-tm","turkmenistan flag"],u:"1f1f9-1f1f2",a:"2.0"},{n:["flag-tn","tunisia flag"],u:"1f1f9-1f1f3",a:"2.0"},{n:["flag-to","tonga flag"],u:"1f1f9-1f1f4",a:"2.0"},{n:["flag-tr","turkey flag"],u:"1f1f9-1f1f7",a:"2.0"},{n:["flag-tt","trinidad & tobago flag"],u:"1f1f9-1f1f9",a:"2.0"},{n:["flag-tv","tuvalu flag"],u:"1f1f9-1f1fb",a:"2.0"},{n:["flag-tw","taiwan flag"],u:"1f1f9-1f1fc",a:"2.0"},{n:["flag-tz","tanzania flag"],u:"1f1f9-1f1ff",a:"2.0"},{n:["flag-ua","ukraine flag"],u:"1f1fa-1f1e6",a:"2.0"},{n:["flag-ug","uganda flag"],u:"1f1fa-1f1ec",a:"2.0"},{n:["flag-um","u.s. outlying islands flag"],u:"1f1fa-1f1f2",a:"2.0"},{n:["flag-un","united nations flag"],u:"1f1fa-1f1f3",a:"4.0"},{n:["us","flag-us","united states flag"],u:"1f1fa-1f1f8",a:"0.6"},{n:["flag-uy","uruguay flag"],u:"1f1fa-1f1fe",a:"2.0"},{n:["flag-uz","uzbekistan flag"],u:"1f1fa-1f1ff",a:"2.0"},{n:["flag-va","vatican city flag"],u:"1f1fb-1f1e6",a:"2.0"},{n:["flag-vc","st. vincent & grenadines flag"],u:"1f1fb-1f1e8",a:"2.0"},{n:["flag-ve","venezuela flag"],u:"1f1fb-1f1ea",a:"2.0"},{n:["flag-vg","british virgin islands flag"],u:"1f1fb-1f1ec",a:"2.0"},{n:["flag-vi","u.s. virgin islands flag"],u:"1f1fb-1f1ee",a:"2.0"},{n:["flag-vn","vietnam flag"],u:"1f1fb-1f1f3",a:"2.0"},{n:["flag-vu","vanuatu flag"],u:"1f1fb-1f1fa",a:"2.0"},{n:["flag-wf","wallis & futuna flag"],u:"1f1fc-1f1eb",a:"2.0"},{n:["flag-ws","samoa flag"],u:"1f1fc-1f1f8",a:"2.0"},{n:["flag-xk","kosovo flag"],u:"1f1fd-1f1f0",a:"2.0"},{n:["flag-ye","yemen flag"],u:"1f1fe-1f1ea",a:"2.0"},{n:["flag-yt","mayotte flag"],u:"1f1fe-1f1f9",a:"2.0"},{n:["flag-za","south africa flag"],u:"1f1ff-1f1e6",a:"2.0"},{n:["flag-zm","zambia flag"],u:"1f1ff-1f1f2",a:"2.0"},{n:["flag-zw","zimbabwe flag"],u:"1f1ff-1f1fc",a:"2.0"},{n:["england flag","flag-england"],u:"1f3f4-e0067-e0062-e0065-e006e-e0067-e007f",a:"5.0"},{n:["scotland flag","flag-scotland"],u:"1f3f4-e0067-e0062-e0073-e0063-e0074-e007f",a:"5.0"},{n:["wales flag","flag-wales"],u:"1f3f4-e0067-e0062-e0077-e006c-e0073-e007f",a:"5.0"}],Af={custom:P8,smileys_people:F8,animals_nature:q8,food_drink:V8,travel_places:X8,activities:W8,objects:K8,symbols:ek,flags:tk},nl=[un.NEUTRAL,un.LIGHT,un.MEDIUM_LIGHT,un.MEDIUM,un.MEDIUM_DARK,un.DARK],nk=Object.entries(un).reduce(function(e,a){var i=a[0],f=a[1];return e[f]=i,e},{}),ak=nl.reduce(function(e,a){var i;return Object.assign(e,(i={},i[a]=a,i))},{}),nn;(function(e){e.name="n",e.unified="u",e.variations="v",e.added_in="a",e.imgUrl="imgUrl"})(nn||(nn={}));var Sf={};setTimeout(function(){El.reduce(function(e,a){return w3(a),e},Sf)});function w3(e){var a=Zf(e).flat().join("").toLowerCase().replace(/[^a-zA-Z\d]/g,"").split("");a.forEach(function(i){var f;Sf[i]=(f=Sf[i])!=null?f:{},Sf[i][xt(e)]=e})}function Zf(e){var a;return(a=e[nn.name])!=null?a:[]}function rk(e){return parseFloat(e[nn.added_in])}function E0(e){return e?Zf(e)[0]:""}function e1(e){var a=e.split("-"),i=a.splice(1,1),f=i[0];return ak[f]?a.join("-"):e}function xt(e,a){var i,f=e[nn.unified];return!a||!li(e)?f:(i=fk(e,a))!=null?i:f}function ik(e){var a;return(a=Af==null?void 0:Af[e])!=null?a:[]}function v3(e,a){return""+H8(a)+e+".png"}function Jf(e){var a;return(a=e[nn.variations])!=null?a:[]}function li(e){return Jf(e).length>0}function fk(e,a){return a?Jf(e).find(function(i){return i.includes(a)}):xt(e)}function ai(e){if(e){if(Fr[e])return Fr[e];var a=e1(e);return Fr[a]}}var El=Object.values(Af).flat();function ok(e){Af[ce.CUSTOM].length=0,e.forEach(function(a){var i=sk(a);Af[ce.CUSTOM].push(i),!Fr[i[nn.unified]]&&(El.push(i),Fr[i[nn.unified]]=i,w3(i))})}function sk(e){var a;return a={},a[nn.name]=e.names.map(function(i){return i.toLowerCase()}),a[nn.unified]=e.id.toLowerCase(),a[nn.added_in]="0",a[nn.imgUrl]=e.imgUrl,a}var Fr={};setTimeout(function(){El.reduce(function(e,a){return e[xt(a)]=a,li(a)&&Jf(a).forEach(function(i){e[i]=a}),e},Fr)});function lk(e){var a=e.split("-"),i=a[1];return nl.includes(i)?i:null}var ck=["2640-fe0f","2642-fe0f","2695-fe0f"],al="Search",uk="No results found",x3=" found. Use up and down arrow keys to navigate.",dk="1 result"+x3,hk="%n results"+x3;function Tp(e){var a,i;e===void 0&&(e={});var f=M3(),c=Object.assign(f.previewConfig,(a=e.previewConfig)!=null?a:{}),d=Object.assign(f,e),m=Q8(e.categories,{suggestionMode:d.suggestedEmojisMode});d.hiddenEmojis.forEach(function(b){d.unicodeToHide.add(b)}),ok((i=d.customEmojis)!=null?i:[]);var y=d.searchDisabled?ni.PREVIEW:d.skinTonePickerLocation;return Be({},d,{categories:m,previewConfig:c,skinTonePickerLocation:y})}function M3(){return{autoFocusSearch:!0,categories:y3(),className:"",customEmojis:[],defaultSkinTone:un.NEUTRAL,emojiStyle:Qt.APPLE,emojiVersion:null,getEmojiUrl:v3,height:450,lazyLoadEmojis:!1,previewConfig:Be({},mk),searchDisabled:!1,searchPlaceHolder:al,searchPlaceholder:al,skinTonePickerLocation:ni.SEARCH,skinTonesDisabled:!1,style:{},suggestedEmojisMode:If.FREQUENT,theme:Df.LIGHT,unicodeToHide:new Set(ck),width:350,reactionsDefaultOpen:!1,reactions:U8,open:!0,allowExpandReactions:!0,hiddenEmojis:[]}}var mk={defaultEmoji:"1f60a",defaultCaption:"What's your mood?",showPreview:!0},gk=["children"],j3=g.createContext(M3());function pk(e){var a=e.children,i=m3(e,gk),f=yk(i);return g.createElement(j3.Provider,{value:f},a)}function yk(e){var a,i=g.useState(function(){return Tp(e)}),f=i[0],c=i[1];return g.useEffect(function(){g3(f,e)||c(Tp(e))},[(a=e.customEmojis)==null?void 0:a.length,e.open,e.emojiVersion,e.reactionsDefaultOpen,e.searchPlaceHolder,e.searchPlaceholder,e.defaultSkinTone,e.skinTonesDisabled,e.autoFocusSearch,e.emojiStyle,e.theme,e.suggestedEmojisMode,e.lazyLoadEmojis,e.className,e.height,e.width,e.searchDisabled,e.skinTonePickerLocation,e.allowExpandReactions]),f}function Qe(){return g.useContext(j3)}var L3=it.createContext({});function S3(){var e=it.useContext(L3);return e}function bk(e){var a=it.useRef({onEmojiClick:e.onEmojiClick||xs,onReactionClick:e.onReactionClick||e.onEmojiClick,onSkinToneChange:e.onSkinToneChange||xs});return it.useEffect(function(){a.current.onEmojiClick=e.onEmojiClick||xs,a.current.onReactionClick=e.onReactionClick||e.onEmojiClick},[e.onEmojiClick,e.onReactionClick]),it.useEffect(function(){a.current.onSkinToneChange=e.onSkinToneChange||xs},[e.onSkinToneChange]),a}function xs(){}var zf;(function(e){e.REACTIONS="reactions",e.PICKER="picker"})(zf||(zf={}));function wk(){var e,a=Qe(),i=a.searchPlaceHolder,f=a.searchPlaceholder;return(e=[i,f].find(function(c){return c!==al}))!=null?e:al}function vk(){var e=Qe(),a=e.defaultSkinTone;return a}function C3(){var e=Qe(),a=e.allowExpandReactions;return a}function k3(){var e=Qe(),a=e.skinTonesDisabled;return a}function nr(){var e=Qe(),a=e.emojiStyle;return a}function xk(){var e=Qe(),a=e.autoFocusSearch;return a}function E3(){var e=Qe(),a=e.categories;return a}function Mk(){var e=Qe(),a=e.customEmojis;return a}function jk(){var e=Qe(),a=e.open;return a}function Lk(e){var a,i=S3(),f=i.current,c=(a=e===zf.REACTIONS?f.onReactionClick:f.onEmojiClick)!=null?a:f.onEmojiClick;return c||function(){}}function Sk(){var e=S3(),a=e.current;return a.onSkinToneChange||function(){}}function T3(){var e=Qe(),a=e.previewConfig;return a}function Ck(){var e=Qe(),a=e.theme;return a}function kk(){var e=Qe(),a=e.suggestedEmojisMode;return a}function Ek(){var e=Qe(),a=e.lazyLoadEmojis;return a}function Tk(){var e=Qe(),a=e.className;return a}function Nk(){var e=Qe(),a=e.height,i=e.width,f=e.style;return Be({height:Np(a),width:Np(i)},f)}function Ik(){var e=Qe(),a=e.reactionsDefaultOpen;return a}function Dk(){var e=Qe(),a=e.emojiVersion;return a}function N3(){var e=Qe(),a=e.searchDisabled;return a}function I3(){var e=Qe(),a=e.skinTonePickerLocation;return a}function Ak(){var e=Qe(),a=e.unicodeToHide;return a}function zk(){var e=Qe(),a=e.reactions;return a}function ar(){var e=Qe(),a=e.getEmojiUrl;return a}function Np(e){return typeof e=="number"?e+"px":e}function Rk(e){var a=e>0,i=e>1;return a?i?hk.replace("%n",e.toString()):dk:uk}function Ip(e,a){a===void 0&&(a=0);var i=g.useState(e),f=i[0],c=i[1],d=g.useRef(null);function m(y){return new Promise(function(b){var x;d.current&&clearTimeout(d.current),d.current=(x=window)==null?void 0:x.setTimeout(function(){c(y),b(y)},a)})}return[f,m]}function Ok(){var e=Ak();return function(a){return e.has(a)}}function D3(){var e=g.useRef({}),a=Dk();return g.useMemo(function(){var i=parseFloat(""+a);return!a||Number.isNaN(i)?e.current:El.reduce(function(f,c){return Uk(c,i)&&(f[xt(c)]=!0),f},e.current)},[a])}function Bk(){var e=D3(),a=Ok();return function(f){var c=e1(xt(f));return!!(e[c]||a(c))}}function Uk(e,a){return rk(e)>a}function _k(e){g.useEffect(function(){e(!0)},[e])}function Yk(e){var a=e.children,i=D3(),f=vk(),c=Ik(),d=g.useRef(Sf),m=g.useRef(!1),y=g.useRef(!1),b=g.useRef(i),x=Ip(Date.now(),200),v=Ip("",100),M=g.useState(!1),j=g.useState(f),k=g.useState(null),I=g.useState(new Set),S=g.useState(null),N=g.useState(c),R=g.useState(!1),A=R[0],_=R[1];return _k(_),g.createElement(rn.Provider,{value:{activeCategoryState:k,activeSkinTone:j,disallowClickRef:m,disallowMouseRef:y,disallowedEmojisRef:b,emojiVariationPickerState:S,emojisThatFailedToLoadState:I,filterRef:d,isPastInitialLoad:A,searchTerm:v,skinToneFanOpenState:M,suggestedUpdateState:x,reactionsModeState:N}},a)}var rn=g.createContext({activeCategoryState:[null,function(){}],activeSkinTone:[un.NEUTRAL,function(){}],disallowClickRef:{current:!1},disallowMouseRef:{current:!1},disallowedEmojisRef:{current:{}},emojiVariationPickerState:[null,function(){}],emojisThatFailedToLoadState:[new Set,function(){}],filterRef:{current:{}},isPastInitialLoad:!0,searchTerm:["",function(){return new Promise(function(){})}],skinToneFanOpenState:[!1,function(){}],suggestedUpdateState:[Date.now(),function(){}],reactionsModeState:[!1,function(){}]});function t1(){var e=g.useContext(rn),a=e.filterRef;return a}function Qk(){var e=g.useContext(rn),a=e.disallowClickRef;return a}function n1(){var e=g.useContext(rn),a=e.disallowMouseRef;return a}function Tl(){var e=g.useContext(rn),a=e.reactionsModeState;return a}function Nl(){var e=g.useContext(rn),a=e.searchTerm;return a}function a1(){var e=g.useContext(rn),a=e.activeSkinTone;return a}function A3(){var e=g.useContext(rn),a=e.emojisThatFailedToLoadState;return a}function Gk(){var e=g.useContext(rn),a=e.isPastInitialLoad;return a}function ci(){var e=g.useContext(rn),a=e.emojiVariationPickerState;return a}function Hf(){var e=g.useContext(rn),a=e.skinToneFanOpenState;return a}function z3(){var e=g.useContext(rn),a=e.suggestedUpdateState,i=a[0],f=a[1];return[i,function(){f(Date.now())}]}function Il(){var e=Nl(),a=e[0];return!!a}function $t(e){e&&requestAnimationFrame(function(){e.focus()})}function R3(e){if(e){var a=e.previousElementSibling;$t(a)}}function O3(e){if(e){var a=e.nextElementSibling;$t(a)}}function B3(e){if(e){var a=e.firstElementChild;$t(a)}}function Rf(){return document.activeElement}function $k(e){var a=e.children,i=g.useRef(null),f=g.useRef(null),c=g.useRef(null),d=g.useRef(null),m=g.useRef(null),y=g.useRef(null),b=g.useRef(null),x=g.useRef(null);return g.createElement(U3.Provider,{value:{AnchoredEmojiRef:f,BodyRef:c,CategoryNavigationRef:y,PickerMainRef:i,SearchInputRef:d,SkinTonePickerRef:m,VariationPickerRef:b,ReactionsRef:x}},a)}var U3=g.createContext({AnchoredEmojiRef:g.createRef(),BodyRef:g.createRef(),CategoryNavigationRef:g.createRef(),PickerMainRef:g.createRef(),SearchInputRef:g.createRef(),SkinTonePickerRef:g.createRef(),VariationPickerRef:g.createRef(),ReactionsRef:g.createRef()});function La(){return g.useContext(U3)}function Pf(){return La().PickerMainRef}function Dl(){return La().AnchoredEmojiRef}function _3(){var e=Dl();return function(a){a===null&&e.current!==null&&$t(e.current),e.current=a}}function fn(){return La().BodyRef}function Zk(){return La().ReactionsRef}function Sa(){return La().SearchInputRef}function r1(){return La().SkinTonePickerRef}function i1(){return La().CategoryNavigationRef}function Jk(){return La().VariationPickerRef}function Y3(e,a){a===void 0&&(a=0);var i=tb(e);i&&requestAnimationFrame(function(){i.scrollTop=a})}function Hk(e,a){var i=tb(e);i&&requestAnimationFrame(function(){i.scrollTop=i.scrollTop+a})}function Pk(){var e=fn();return g.useCallback(function(a){requestAnimationFrame(function(){e.current&&(e.current.scrollTop=a)})},[e])}function Al(e){if(!(!e||!BE(e))&&!e.closest(gt(ue.variationPicker))){var a=ab(e),i=nb(e);Hk(a,-(u1(Ca(e))-i))}}function zl(e){var a=g1(e);$t(a),Al(a)}function Fk(e){var a=g1(e);$t(a),a==null||a.click()}function qk(e){$t(ob(e))}function Vk(e){if(e){var a=sb(e);if(!a)return zl(Ol(e));$t(a),Al(a)}}function Xk(e){if(e){var a=m1(e);if(!a)return qk(Rl(e));$t(a),Al(a)}}function Wk(e,a){if(e){var i=eE(e);if(!i)return a();$t(i),Al(i)}}function Kk(e){if(e){var a=tE(e);return $t(a)}}function eE(e){if(!e)return null;var a=lb(e),i=Ca(a),f=X3(a,e),c=W3(a,e),d=V3(a,e);if(c===0){var m=Rl(i);return m?K3(ri(m),-1,d,f):null}return IE(ri(a),c,d,f)}function tE(e){if(!e)return null;var a=lb(e),i=Ca(a),f=X3(a,e),c=W3(a,e),d=V3(a,e);if(!EE(a,e)){var m=Ol(i);return m?K3(ri(m),0,d,f):null}var y=NE(ri(a),c,d,f);return y}function rr(){var e=ci(),a=e[0],i=e[1],f=Hf(),c=f[0],d=f[1],m=g.useCallback(function(){a&&i(null),c&&d(!1)},[a,c,i,d]);return m}function Q3(){var e=ci(),a=e[0],i=Hf(),f=i[0];return function(){return!!a||f}}function nE(){var e=n1();return function(){e.current=!0}}function G3(){var e=n1();return function(){e.current=!1}}function $3(){var e=n1();return function(){return e.current}}function aE(){var e=fn(),a=G3(),i=$3();g.useEffect(function(){var f=e.current;f==null||f.addEventListener("mousemove",c,{passive:!0});function c(){i()&&a()}return function(){f==null||f.removeEventListener("mousemove",c)}},[e,a,i])}function ir(){var e=Sa();return g.useCallback(function(){$t(e.current)},[e])}function rE(){var e=r1();return g.useCallback(function(){e.current&&B3(e.current)},[e])}function Z3(){var e=i1();return g.useCallback(function(){e.current&&B3(e.current)},[e])}function iE(){var e=t1();return function a(i){if(typeof i=="function")return a(i(e.current));e.current=i}}function J3(){var e=f1(),a=Sa(),i=ir();return function(){a.current&&(a.current.value=""),e(""),i()}}function fE(){var e=Sa(),a=f1();return function(f){e.current?(e.current.value=""+e.current.value+f,a(T0(e.current.value))):a(T0(f))}}function oE(){var e=Sa(),a=t1(),i=iE(),f=f1(),c=Nl(),d=c[0],m=hE(a.current,d);return{onChange:y,searchTerm:d,SearchInputRef:e,statusSearchResults:m};function y(b){var x=a.current,v=b.toLowerCase();if(x!=null&&x[v]||v.length<=1)return f(v);var M=dE(v,x);if(!M)return f(v);i(function(j){var k;return Object.assign(j,(k={},k[v]=sE(M,v),k))}),f(v)}}function f1(){var e=Nl(),a=e[1],i=Pf();return function(c){requestAnimationFrame(function(){a(c&&(c==null?void 0:c.toLowerCase())).then(function(){Y3(i.current,0)})})}}function sE(e,a){var i={};for(var f in e){var c=e[f];lE(c,a)&&(i[f]=c)}return i}function lE(e,a){return Zf(e).some(function(i){return i.includes(a)})}function cE(){var e=t1(),a=e.current,i=Nl(),f=i[0];return function(c){return uE(c,a,f)}}function uE(e,a,i){var f;return!a||!i?!1:!((f=a[i])!=null&&f[e])}function dE(e,a){if(!a)return null;if(a[e])return a[e];var i=Object.keys(a).sort(function(f,c){return c.length-f.length}).find(function(f){return e.includes(f)});return i?a[i]:null}function T0(e){return!e||typeof e!="string"?"":e.trim().toLowerCase()}function hE(e,a){var i;if(!(e!=null&&e[a]))return"";var f=((i=Object.entries(e==null?void 0:e[a]))==null?void 0:i.length)||0;return Rk(f)}function H3(){var e=_3(),a=ci(),i=a[1];return function(c){var d=c1(c),m=d[0];m&&(e(c),i(m))}}function o1(){var e=I3();return e===ni.SEARCH}function P3(){var e=I3();return e===ni.PREVIEW}var qe;(function(e){e.ArrowDown="ArrowDown",e.ArrowUp="ArrowUp",e.ArrowLeft="ArrowLeft",e.ArrowRight="ArrowRight",e.Escape="Escape",e.Enter="Enter",e.Space=" "})(qe||(qe={}));function mE(){gE(),pE(),yE(),bE(),wE()}function gE(){var e=Pf(),a=J3(),i=Pk(),f=Sa(),c=ir(),d=Q3(),m=nE(),y=rr(),b=g.useMemo(function(){return function(v){var M=v.key;switch(m(),M){case qe.Escape:if(v.preventDefault(),d()){y();return}a(),i(0),c();break}}},[i,a,y,c,d,m]);g.useEffect(function(){var x=e.current;if(x)return x.addEventListener("keydown",b),function(){x.removeEventListener("keydown",b)}},[e,f,i,b])}function pE(){var e=rE(),a=Pf(),i=fn(),f=Sa(),c=Hf(),d=c[1],m=F3(),y=o1(),b=g.useMemo(function(){return function(v){var M=v.key;switch(M){case qe.ArrowRight:if(!y)return;v.preventDefault(),d(!0),e();break;case qe.ArrowDown:v.preventDefault(),m();break;case qe.Enter:v.preventDefault(),Fk(i.current);break}}},[e,m,d,i,y]);g.useEffect(function(){var x=f.current;if(x)return x.addEventListener("keydown",b),function(){x.removeEventListener("keydown",b)}},[a,f,b])}function yE(){var e=r1(),a=ir(),i=Sa(),f=F3(),c=Hf(),d=c[0],m=c[1],y=P3(),b=o1(),x=s1(),v=g.useMemo(function(){return function(j){var k=j.key;if(b)switch(k){case qe.ArrowLeft:if(j.preventDefault(),!d)return a();Dp(a);break;case qe.ArrowRight:if(j.preventDefault(),!d)return a();Ap();break;case qe.ArrowDown:j.preventDefault(),d&&m(!1),f();break;default:x(j);break}if(y)switch(k){case qe.ArrowUp:if(j.preventDefault(),!d)return a();Dp(a);break;case qe.ArrowDown:if(j.preventDefault(),!d)return a();Ap();break;default:x(j);break}}},[d,a,m,f,x,y,b]);g.useEffect(function(){var M=e.current;if(M)return M.addEventListener("keydown",v),function(){M.removeEventListener("keydown",v)}},[e,i,d,v])}function bE(){var e=ir(),a=i1(),i=fn(),f=s1(),c=g.useMemo(function(){return function(m){var y=m.key;switch(y){case qe.ArrowUp:m.preventDefault(),e();break;case qe.ArrowRight:m.preventDefault(),O3(Rf());break;case qe.ArrowLeft:m.preventDefault(),R3(Rf());break;case qe.ArrowDown:m.preventDefault(),zl(i.current);break;default:f(m);break}}},[i,e,f]);g.useEffect(function(){var d=a.current;if(d)return d.addEventListener("keydown",c),function(){d.removeEventListener("keydown",c)}},[a,i,c])}function wE(){var e=fn(),a=vE(),i=H3(),f=Q3(),c=rr(),d=s1(),m=g.useMemo(function(){return function(b){var x=b.key,v=hn(Rf());switch(x){case qe.ArrowRight:b.preventDefault(),Vk(v);break;case qe.ArrowLeft:b.preventDefault(),Xk(v);break;case qe.ArrowDown:if(b.preventDefault(),f()){c();break}Kk(v);break;case qe.ArrowUp:if(b.preventDefault(),f()){c();break}Wk(v,a);break;case qe.Space:b.preventDefault(),i(b.target);break;default:d(b);break}}},[a,d,i,f,c]);g.useEffect(function(){var y=e.current;if(y)return y.addEventListener("keydown",m),function(){y.removeEventListener("keydown",m)}},[e,m])}function F3(){var e=Z3(),a=Il(),i=fn();return g.useCallback(function(){return a?zl(i.current):e()},[i,e,a])}function vE(){var e=ir(),a=Z3(),i=Il();return g.useCallback(function(){return i?e():a()},[e,i,a])}function Dp(e){var a=Rf();a&&(AE(a)||e(),O3(a))}function Ap(){var e=Rf();e&&R3(e)}function s1(){var e=fE(),a=ir(),i=N3(),f=rr();return function(d){var m=d.key;xE(d)||i||m.match(/(^[a-zA-Z0-9]$){1}/)&&(d.preventDefault(),f(),a(),e(m))}}function xE(e){var a=e.metaKey,i=e.ctrlKey,f=e.altKey;return a||i||f}function ME(e,a,i){if(a&&i!==Qt.NATIVE){var f=xt(a);zp.has(f)||(Jf(a).forEach(function(c){var d=e(c,i);jE(d)}),zp.add(f))}}var zp=new Set;function jE(e){var a=new Image;a.src=e}function LE(){var e=fn(),a=nr(),i=ar();g.useEffect(function(){if(a===Qt.NATIVE)return;var f=e.current;return f==null||f.addEventListener("focusin",c),function(){f==null||f.removeEventListener("focusin",c)};function c(d){var m=hn(d.target);if(m){var y=c1(m),b=y[0];b&&li(b)&&ME(i,b,a)}}},[e,a,i])}var SE=["width","height"],q3=40;function CE(e){var a=e.children;return g.createElement(Yk,null,g.createElement(kE,null,a))}function kE(e){var a,i=e.children,f=Tl(),c=f[0],d=Ck(),m=Il(),y=Pf(),b=Tk(),x=Nk();mE(),LE();var v=x||{},M=v.width,j=v.height,k=m3(v,SE);return g.createElement("aside",{className:ge(hf.main,hf.baseVariables,d===Df.DARK&&hf.darkTheme,d===Df.AUTO&&hf.autoThemeDark,(a={},a[ue.searchActive]=m,a),c&&hf.reactionsMenu,b),ref:y,style:Be({},k,!c&&{height:j,width:M})},i)}var Rp={"--epr-emoji-variation-picker-bg-color":"var(--epr-dark-emoji-variation-picker-bg-color)","--epr-hover-bg-color-reduced-opacity":"var(--epr-dark-hover-bg-color-reduced-opacity)","--epr-highlight-color":"var(--epr-dark-highlight-color)","--epr-text-color":"var(--epr-dark-text-color)","--epr-hover-bg-color":"var(--epr-dark-hover-bg-color)","--epr-focus-bg-color":"var(--epr-dark-focus-bg-color)","--epr-search-input-bg-color":"var(--epr-dark-search-input-bg-color)","--epr-category-label-bg-color":"var(--epr-dark-category-label-bg-color)","--epr-picker-border-color":"var(--epr-dark-picker-border-color)","--epr-bg-color":"var(--epr-dark-bg-color)","--epr-reactions-bg-color":"var(--epr-dark-reactions-bg-color)","--epr-search-input-bg-color-active":"var(--epr-dark-search-input-bg-color-active)","--epr-emoji-variation-indicator-color":"var(--epr-dark-emoji-variation-indicator-color)","--epr-category-icon-active-color":"var(--epr-dark-category-icon-active-color)","--epr-skin-tone-picker-menu-color":"var(--epr-dark-skin-tone-picker-menu-color)","--epr-skin-tone-outer-border-color":"var(--epr-dark-skin-tone-outer-border-color)","--epr-skin-tone-inner-border-color":"var(--epr-dark-skin-tone-inner-border-color)"},hf=Re.create({main:{".":["epr-main",ue.emojiPicker],position:"relative",display:"flex",flexDirection:"column",borderWidth:"1px",borderStyle:"solid",borderRadius:"var(--epr-picker-border-radius)",borderColor:"var(--epr-picker-border-color)",backgroundColor:"var(--epr-bg-color)",overflow:"hidden",transition:"all 0.3s ease-in-out, background-color 0.1s ease-in-out","*":{boxSizing:"border-box",fontFamily:"sans-serif"}},baseVariables:{"--":{"--epr-highlight-color":"#007aeb","--epr-hover-bg-color":"#e5f0fa","--epr-hover-bg-color-reduced-opacity":"#e5f0fa80","--epr-focus-bg-color":"#e0f0ff","--epr-text-color":"#858585","--epr-search-input-bg-color":"#f6f6f6","--epr-picker-border-color":"#e7e7e7","--epr-bg-color":"#fff","--epr-reactions-bg-color":"#ffffff90","--epr-category-icon-active-color":"#6aa8de","--epr-skin-tone-picker-menu-color":"#ffffff95","--epr-skin-tone-outer-border-color":"#555555","--epr-skin-tone-inner-border-color":"var(--epr-bg-color)","--epr-horizontal-padding":"10px","--epr-picker-border-radius":"8px","--epr-search-border-color":"var(--epr-highlight-color)","--epr-header-padding":"15px var(--epr-horizontal-padding)","--epr-active-skin-tone-indicator-border-color":"var(--epr-highlight-color)","--epr-active-skin-hover-color":"var(--epr-hover-bg-color)","--epr-search-input-bg-color-active":"var(--epr-search-input-bg-color)","--epr-search-input-padding":"0 30px","--epr-search-input-border-radius":"8px","--epr-search-input-height":"40px","--epr-search-input-text-color":"var(--epr-text-color)","--epr-search-input-placeholder-color":"var(--epr-text-color)","--epr-search-bar-inner-padding":"var(--epr-horizontal-padding)","--epr-category-navigation-button-size":"30px","--epr-emoji-variation-picker-height":"45px","--epr-emoji-variation-picker-bg-color":"var(--epr-bg-color)","--epr-preview-height":"70px","--epr-preview-text-size":"14px","--epr-preview-text-padding":"0 var(--epr-horizontal-padding)","--epr-preview-border-color":"var(--epr-picker-border-color)","--epr-preview-text-color":"var(--epr-text-color)","--epr-category-padding":"0 var(--epr-horizontal-padding)","--epr-category-label-bg-color":"#ffffffe6","--epr-category-label-text-color":"var(--epr-text-color)","--epr-category-label-padding":"0 var(--epr-horizontal-padding)","--epr-category-label-height":q3+"px","--epr-emoji-size":"30px","--epr-emoji-padding":"5px","--epr-emoji-fullsize":"calc(var(--epr-emoji-size) + var(--epr-emoji-padding) * 2)","--epr-emoji-hover-color":"var(--epr-hover-bg-color)","--epr-emoji-variation-indicator-color":"var(--epr-picker-border-color)","--epr-emoji-variation-indicator-color-hover":"var(--epr-text-color)","--epr-header-overlay-z-index":"3","--epr-emoji-variations-indictator-z-index":"1","--epr-category-label-z-index":"2","--epr-skin-variation-picker-z-index":"5","--epr-preview-z-index":"6","--epr-dark":"#000","--epr-dark-emoji-variation-picker-bg-color":"var(--epr-dark)","--epr-dark-highlight-color":"#c0c0c0","--epr-dark-text-color":"var(--epr-highlight-color)","--epr-dark-hover-bg-color":"#363636f6","--epr-dark-hover-bg-color-reduced-opacity":"#36363680","--epr-dark-focus-bg-color":"#474747","--epr-dark-search-input-bg-color":"#333333","--epr-dark-category-label-bg-color":"#222222e6","--epr-dark-picker-border-color":"#151617","--epr-dark-bg-color":"#222222","--epr-dark-reactions-bg-color":"#22222290","--epr-dark-search-input-bg-color-active":"var(--epr-dark)","--epr-dark-emoji-variation-indicator-color":"#444","--epr-dark-category-icon-active-color":"#3271b7","--epr-dark-skin-tone-picker-menu-color":"#22222295","--epr-dark-skin-tone-outer-border-color":"var(--epr-dark-picker-border-color)","--epr-dark-skin-tone-inner-border-color":"#FFFFFF"}},autoThemeDark:{".":ue.autoTheme,"@media (prefers-color-scheme: dark)":{"--":Rp}},darkTheme:{".":ue.darkTheme,"--":Rp},reactionsMenu:{".":"epr-reactions",height:"50px",display:"inline-flex",backgroundColor:"var(--epr-reactions-bg-color)",backdropFilter:"blur(8px)","--":{"--epr-picker-border-radius":"50px"}}});function V3(e,a){if(!e||!a)return 0;var i=e.getBoundingClientRect().width,f=a.getBoundingClientRect().width;return Math.floor(i/f)}function X3(e,a){if(!e||!a)return 0;var i=a.getBoundingClientRect().width,f=a.getBoundingClientRect().left,c=e.getBoundingClientRect().left;return Math.floor((f-c)/i)}function W3(e,a){if(!e||!a)return 0;var i=a.getBoundingClientRect().height,f=a.getBoundingClientRect().top,c=e.getBoundingClientRect().top;return Math.round((f-c)/i)}function EE(e,a){if(!e||!a)return!1;var i=a.getBoundingClientRect().height,f=a.getBoundingClientRect().top,c=e.getBoundingClientRect().top,d=e.getBoundingClientRect().height;return Math.round(f-c+i)<d}function l1(e,a,i){if(a===-1){var f=Math.floor((e.length-1)/i),c=f*i,d=e.length-1;return e.slice(c,d+1)}return e.slice(a*i,(a+1)*i)}function TE(e,a,i){var f=a+1;return f*i>e.length?[]:l1(e,f,i)}function K3(e,a,i,f){var c=l1(e,a,i);return c[f]||c[c.length-1]||null}function NE(e,a,i,f){var c=TE(e,a,i);return c[f]||c[c.length-1]||null}function IE(e,a,i,f){var c=l1(e,a-1,i);return c[f]||c[c.length-1]||null}function DE(e,a,i){if(!e||!a.length)return null;var f=e.getBoundingClientRect().top,c=e.getBoundingClientRect().bottom,d=f+zE(e),m=a.find(function(y){var b=y.getBoundingClientRect().top,x=y.getBoundingClientRect().bottom,v=y.clientHeight*i,M=b+v,j=x-v;return M<d?!1:M>=f&&M<=c||j>=f&&j<=c});return m||null}function AE(e){return!!e.nextElementSibling}function zE(e){for(var a=Array.from(e.querySelectorAll(gt(ue.label))),i=0,f=a;i<f.length;i++){var c=f[i],d=c.getBoundingClientRect().height;if(d>0)return d}return q3}var rl="button"+gt(ue.emoji),RE=[rl,gt(ue.visible),":not("+gt(ue.hidden)+")"].join("");function hn(e){var a;return(a=e==null?void 0:e.closest(rl))!=null?a:null}function c1(e){var a=rb(e),i=d1(e);if(!a)return[];var f=ai(i??a);return f?[f,i]:[]}function OE(e){var a;return!!(e!=null&&e.matches(rl)||!(e==null||(a=e.parentElement)==null)&&a.matches(rl))}function Op(e){var a;return(a=e==null?void 0:e.clientHeight)!=null?a:0}function eb(e){if(!e)return 0;var a=hn(e),i=Ca(a),f=u1(i);return Bp(a)+Bp(i)+f}function u1(e){var a,i;if(!e)return 0;var f=e.querySelector(gt(ue.categoryContent));return((a=e==null?void 0:e.clientHeight)!=null?a:0)-((i=f==null?void 0:f.clientHeight)!=null?i:0)}function BE(e){return e?nb(e)<u1(Ca(e)):!1}function tb(e){return e?e.matches(gt(ue.scrollBody))?e:e.querySelector(gt(ue.scrollBody)):null}function nb(e){var a,i;return e?eb(e)-((a=(i=ab(e))==null?void 0:i.scrollTop)!=null?a:0):0}function ab(e){var a;return e&&(a=e.closest(gt(ue.scrollBody)))!=null?a:null}function UE(e){var a=hn(e),i=Ca(a);return Up(a)+Up(i)}function Bp(e){var a;return(a=e==null?void 0:e.offsetTop)!=null?a:0}function Up(e){var a;return(a=e==null?void 0:e.offsetLeft)!=null?a:0}function d1(e){var a;return(a=_E(hn(e),"unified"))!=null?a:null}function rb(e){var a=d1(e);return a?e1(a):null}function ib(e){return e?{unified:d1(e),originalUnified:rb(e)}:{unified:null,originalUnified:null}}function _E(e,a){var i;return(i=YE(e)[a])!=null?i:null}function YE(e){var a;return(a=e==null?void 0:e.dataset)!=null?a:{}}function h1(e){return e.classList.contains(ue.visible)}function fb(e){return e?e.classList.contains(ue.hidden):!0}function ri(e){return e?Array.from(e.querySelectorAll(RE)):[]}function ob(e){if(!e)return null;var a=ri(e),i=a.slice(-1),f=i[0];return f?h1(f)?f:m1(f):null}function sb(e){var a=e.nextElementSibling;return a?h1(a)?a:sb(a):g1(Ol(e))}function m1(e){var a=e.previousElementSibling;return a?h1(a)?a:m1(a):ob(Rl(e))}function g1(e){if(!e)return null;var a=ri(e);return DE(e,a,.1)}function Rl(e){var a=Ca(e);if(!a)return null;var i=a.previousElementSibling;return i?fb(i)?Rl(i):i:null}function Ol(e){var a=Ca(e);if(!a)return null;var i=a.nextElementSibling;return i?fb(i)?Ol(i):i:null}function Ca(e){return e?e.closest(gt(ue.category)):null}function lb(e){return e?e.closest(gt(ue.categoryContent)):null}function cb(e){return e.split("-").map(function(a){return String.fromCodePoint(parseInt(a,16))}).join("")}var ub="epr_suggested";function db(e){try{var a,i,f;if(!((a=window)!=null&&a.localStorage))return[];var c=JSON.parse((i=(f=window)==null?void 0:f.localStorage.getItem(ub))!=null?i:"[]");return e===If.FREQUENT?c.sort(function(d,m){return m.count-d.count}):c}catch{return[]}}function QE(e,a){var i=db(),f=xt(e,a),c=xt(e),d=i.find(function(b){var x=b.unified;return x===f}),m;d?m=[d].concat(i.filter(function(b){return b!==d})):(d={unified:f,original:c,count:0},m=[d].concat(i)),d.count++,m.length=Math.min(m.length,14);try{var y;(y=window)==null||y.localStorage.setItem(ub,JSON.stringify(m))}catch{}}function GE(e){return e.category===ce.CUSTOM}function hb(e){return e.imgUrl!==void 0}function mb(e,a){var i=g.useRef(),f=H3(),c=Qk(),d=ci(),m=d[1],y=rr(),b=a1(),x=b[0],v=Lk(a),M=z3(),j=M[1],k=ar(),I=nr(),S=g.useCallback(function(_){if(!c.current){y();var T=_p(_),C=T[0],D=T[1];if(!(!C||!D)){var G=lk(D)||x;j(),QE(C,G),v($E(C,G,I,k),_)}}},[x,y,c,v,j,k,I]),N=g.useCallback(function(_){var T;i.current&&clearTimeout(i.current);var C=_p(_),D=C[0];!D||!li(D)||(i.current=(T=window)==null?void 0:T.setTimeout(function(){c.current=!0,i.current=void 0,y(),f(_.target),m(D)},500))},[c,y,f,m]),R=g.useCallback(function(){i.current?(clearTimeout(i.current),i.current=void 0):c.current&&requestAnimationFrame(function(){c.current=!1})},[c]);g.useEffect(function(){if(e.current){var A=e.current;return A.addEventListener("click",S,{passive:!0}),A.addEventListener("mousedown",N,{passive:!0}),A.addEventListener("mouseup",R,{passive:!0}),function(){A==null||A.removeEventListener("click",S),A==null||A.removeEventListener("mousedown",N),A==null||A.removeEventListener("mouseup",R)}}},[e,S,N,R])}function _p(e){var a=e==null?void 0:e.target;return OE(a)?c1(a):[]}function $E(e,a,i,f){var c=Zf(e);if(hb(e)){var d=xt(e);return{activeSkinTone:a,emoji:d,getImageUrl:function(){return e.imgUrl},imageUrl:e.imgUrl,isCustom:!0,names:c,unified:d,unifiedWithoutSkinTone:d}}var m=xt(e,a);return{activeSkinTone:a,emoji:cb(m),getImageUrl:function(b){return b===void 0&&(b=i??Qt.APPLE),f(m,b)},imageUrl:f(m,i??Qt.APPLE),isCustom:!1,names:c,unified:m,unifiedWithoutSkinTone:xt(e)}}function Ff(e){return g.createElement("button",Object.assign({type:"button"},e,{className:ge(ZE.button,e.className)}),e.children)}var ZE=Re.create({button:{".":"epr-btn",cursor:"pointer",border:"0",background:"none",outline:"none"}});function JE(e){var a,i=e.emojiNames,f=e.unified,c=e.hidden,d=e.hiddenOnSearch,m=e.showVariations,y=m===void 0?!0:m,b=e.hasVariations,x=e.children,v=e.className,M=e.noBackground,j=M===void 0?!1:M;return g.createElement(Ff,{className:ge(Dd.emoji,c&&W0.hidden,d&&tr.hiddenOnSearch,(a={},a[ue.visible]=!c&&!d,a),!!(b&&y)&&Dd.hasVariations,j&&Dd.noBackground,v),"data-unified":f,"aria-label":HE(i),"data-full-name":i},x)}function HE(e){var a;return e[0].match("flag-")&&(a=e[1])!=null?a:e[0]}var Dd=Re.create({emoji:{".":ue.emoji,position:"relative",width:"var(--epr-emoji-fullsize)",height:"var(--epr-emoji-fullsize)",boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:"center",maxWidth:"var(--epr-emoji-fullsize)",maxHeight:"var(--epr-emoji-fullsize)",borderRadius:"8px",overflow:"hidden",transition:"background-color 0.2s",":hover":{backgroundColor:"var(--epr-emoji-hover-color)"},":focus":{backgroundColor:"var(--epr-focus-bg-color)"}},noBackground:{background:"none",":hover":{backgroundColor:"transparent",background:"none"},":focus":{backgroundColor:"transparent",background:"none"}},hasVariations:{".":ue.emojiHasVariations,":after":{content:"",display:"block",width:"0",height:"0",right:"0px",bottom:"1px",position:"absolute",borderLeft:"4px solid transparent",borderRight:"4px solid transparent",transform:"rotate(135deg)",borderBottom:"4px solid var(--epr-emoji-variation-indicator-color)",zIndex:"var(--epr-emoji-variations-indictator-z-index)"},":hover:after":{borderBottom:"4px solid var(--epr-emoji-variation-indicator-color-hover)"}}}),il=Re.create({external:{".":ue.external,fontSize:"0"},common:{alignSelf:"center",justifySelf:"center",display:"block"}});function Yp(e){var a=e.emojiName,i=e.style,f=e.lazyLoad,c=f===void 0?!1:f,d=e.imgUrl,m=e.onError,y=e.className;return g.createElement("img",{src:d,alt:a,className:ge(PE.emojiImag,il.external,il.common,y),loading:c?"lazy":"eager",onError:m,style:i})}var PE=Re.create({emojiImag:{".":"epr-emoji-img",maxWidth:"var(--epr-emoji-fullsize)",maxHeight:"var(--epr-emoji-fullsize)",minWidth:"var(--epr-emoji-fullsize)",minHeight:"var(--epr-emoji-fullsize)",padding:"var(--epr-emoji-padding)"}});function FE(e){var a=e.unified,i=e.style,f=e.className;return g.createElement("span",{className:ge(qE.nativeEmoji,il.common,il.external,f),"data-unified":a,style:i},cb(a))}var qE=Re.create({nativeEmoji:{".":"epr-emoji-native",fontFamily:'"Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "EmojiOne Color", "Android Emoji"!important',position:"relative",lineHeight:"100%",fontSize:"var(--epr-emoji-size)",textAlign:"center",alignSelf:"center",justifySelf:"center",letterSpacing:"0",padding:"var(--epr-emoji-padding)"}});function N0(e){var a=e.emoji,i=e.unified,f=e.emojiStyle,c=e.size,d=e.lazyLoad,m=e.getEmojiUrl,y=m===void 0?v3:m,b=e.className,x=A3(),v=x[1],M={};c&&(M.width=M.height=M.fontSize=c+"px");var j=a||ai(i);if(!j)return null;if(hb(j))return g.createElement(Yp,{style:M,emojiName:i,emojiStyle:Qt.NATIVE,lazyLoad:d,imgUrl:j.imgUrl,onError:k,className:b});return g.createElement(g.Fragment,null,f===Qt.NATIVE?g.createElement(FE,{unified:i,style:M,className:b}):g.createElement(Yp,{style:M,emojiName:E0(j),emojiStyle:f,lazyLoad:d,imgUrl:y(i,f),onError:k,className:b}));function k(){v(function(I){return new Set(I).add(i)})}}function Bl(e){var a=e.emoji,i=e.unified,f=e.hidden,c=e.hiddenOnSearch,d=e.emojiStyle,m=e.showVariations,y=m===void 0?!0:m,b=e.size,x=e.lazyLoad,v=e.getEmojiUrl,M=e.className,j=e.noBackground,k=j===void 0?!1:j,I=li(a);return g.createElement(JE,{hasVariations:I,showVariations:y,hidden:f,hiddenOnSearch:c,emojiNames:Zf(a),unified:i,noBackground:k},g.createElement(N0,{unified:i,emoji:a,size:b,emojiStyle:d,lazyLoad:x,getEmojiUrl:v,className:M}))}var VE="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI4LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjgwcHgiIHZpZXdCb3g9IjAgMCAyMCA4MCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjAgODAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsPSIjODY4Njg2IiBkPSJNNS43LDEwLjRjMCwwLjEsMC4xLDAuMywwLjIsMC40QzYsMTAuOSw2LjEsMTEsNi4zLDExaDMuNHYzLjRjMCwwLjEsMC4xLDAuMywwLjIsMC40CgljMC4xLDAuMSwwLjIsMC4yLDAuNCwwLjJjMC4zLDAsMC41LTAuMiwwLjUtMC41di0zLjRoMy40YzAuMywwLDAuNS0wLjIsMC41LTAuNXMtMC4yLTAuNS0wLjUtMC41aC0zLjRWNi43YzAtMC4zLTAuMi0wLjUtMC41LTAuNQoJQzkuOCw2LDkuNiw2LjIsOS42LDYuNXYzLjRINi4yQzUuOSw5LjksNS43LDEwLjEsNS43LDEwLjRMNS43LDEwLjR6Ii8+CjxwYXRoIGZpbGw9IiMzMzcxQjciIGQ9Ik01LjcsMzAuNGMwLDAuMSwwLjEsMC4zLDAuMiwwLjRTNi4xLDMxLDYuMywzMWgzLjR2My40YzAsMC4xLDAuMSwwLjMsMC4yLDAuNGMwLjEsMC4xLDAuMiwwLjIsMC40LDAuMgoJYzAuMywwLDAuNS0wLjIsMC41LTAuNXYtMy40aDMuNGMwLjMsMCwwLjUtMC4yLDAuNS0wLjVzLTAuMi0wLjUtMC41LTAuNWgtMy40di0zLjRjMC0wLjMtMC4yLTAuNS0wLjUtMC41cy0wLjUsMC4yLTAuNSwwLjV2My40SDYuMgoJQzUuOSwyOS45LDUuNywzMC4xLDUuNywzMC40TDUuNywzMC40eiIvPgo8cGF0aCBmaWxsPSIjQzBDMEJGIiBkPSJNNS43LDUwLjRjMCwwLjEsMC4xLDAuMywwLjIsMC40QzYsNTAuOSw2LjEsNTEsNi4zLDUxaDMuNHYzLjRjMCwwLjEsMC4xLDAuMywwLjIsMC40CgljMC4xLDAuMSwwLjIsMC4yLDAuNCwwLjJjMC4zLDAsMC41LTAuMiwwLjUtMC41di0zLjRoMy40YzAuMywwLDAuNS0wLjIsMC41LTAuNXMtMC4yLTAuNS0wLjUtMC41aC0zLjR2LTMuNGMwLTAuMy0wLjItMC41LTAuNS0wLjUKCXMtMC41LDAuMi0wLjUsMC41djMuNEg2LjJDNS45LDQ5LjksNS43LDUwLjEsNS43LDUwLjRMNS43LDUwLjR6Ii8+CjxwYXRoIGZpbGw9IiM2QUE5REQiIGQ9Ik01LjcsNzAuNGMwLDAuMSwwLjEsMC4zLDAuMiwwLjRTNi4xLDcxLDYuMyw3MWgzLjR2My40YzAsMC4xLDAuMSwwLjMsMC4yLDAuNGMwLjEsMC4xLDAuMiwwLjIsMC40LDAuMgoJYzAuMywwLDAuNS0wLjIsMC41LTAuNXYtMy40aDMuNGMwLjMsMCwwLjUtMC4yLDAuNS0wLjVzLTAuMi0wLjUtMC41LTAuNWgtMy40di0zLjRjMC0wLjMtMC4yLTAuNS0wLjUtMC41cy0wLjUsMC4yLTAuNSwwLjV2My40SDYuNAoJQzUuOSw2OS45LDUuNyw3MC4xLDUuNyw3MC40TDUuNyw3MC40eiIvPgo8L3N2Zz4=";function XE(){var e=Tl(),a=e[1];return g.createElement(Ff,{"aria-label":"Show all Emojis",title:"Show all Emojis",tabIndex:0,className:ge(WE.plusSign),onClick:function(){return a(!1)}})}var WE=Re.create(Be({plusSign:{fontSize:"20px",padding:"17px",color:"var(--epr-text-color)",borderRadius:"50%",textAlign:"center",lineHeight:"100%",width:"20px",height:"20px",display:"flex",justifyContent:"center",alignItems:"center",transition:"background-color 0.2s ease-in-out",":after":{content:"",minWidth:"20px",minHeight:"20px",backgroundImage:"url("+VE+")",backgroundColor:"transparent",backgroundRepeat:"no-repeat",backgroundSize:"20px",backgroundPositionY:"0"},":hover":{color:"var(--epr-highlight-color)",backgroundColor:"var(--epr-hover-bg-color-reduced-opacity)",":after":{backgroundPositionY:"-20px"}},":focus":{color:"var(--epr-highlight-color)",backgroundColor:"var(--epr-hover-bg-color-reduced-opacity)",":after":{backgroundPositionY:"-40px"}}}},va("plusSign",{":after":{backgroundPositionY:"-40px"},":hover:after":{backgroundPositionY:"-60px"}})));function KE(){var e=Tl(),a=e[0],i=Zk(),f=zk();mb(i,zf.REACTIONS);var c=nr(),d=C3(),m=ar();return a?g.createElement("ul",{className:ge(Qp.list,!a&&W0.hidden),ref:i},f.map(function(y){return g.createElement("li",{key:y},g.createElement(Bl,{emoji:ai(y),emojiStyle:c,unified:y,showVariations:!1,className:ge(Qp.emojiButton),noBackground:!0,getEmojiUrl:m}))}),d?g.createElement("li",null,g.createElement(XE,null)):null):null}var Qp=Re.create({list:{listStyle:"none",margin:"0",padding:"0 5px",display:"flex",justifyContent:"space-between",alignItems:"center",height:"100%"},emojiButton:{":hover":{transform:"scale(1.2)"},":focus":{transform:"scale(1.2)"},":active":{transform:"scale(1.1)"},transition:"transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.5)"}});function eT(e){var a=rr();g.useEffect(function(){var i=e.current;if(!i)return;i.addEventListener("scroll",f,{passive:!0});function f(){a()}return function(){i==null||i.removeEventListener("scroll",f)}},[e,a])}function tT(){var e=A3(),a=e[0],i=cE();return function(f){var c=xt(f),d=a.has(c),m=i(c);return{failedToLoad:d,filteredOut:m,hidden:d||m}}}function gb(e){var a=e.categoryConfig,i=e.children,f=e.hidden,c=e.hiddenOnSearch,d=K0(a),m=b3(a);return g.createElement("li",{className:ge(Ad.category,f&&W0.hidden,c&&tr.hiddenOnSearch),"data-name":d,"aria-label":m},g.createElement("h2",{className:ge(Ad.label)},m),g.createElement("div",{className:ge(Ad.categoryContent)},i))}var Ad=Re.create({category:{".":ue.category,":not(:has(.epr-visible))":{display:"none"}},categoryContent:{".":ue.categoryContent,display:"grid",gridGap:"0",gridTemplateColumns:"repeat(auto-fill, var(--epr-emoji-fullsize))",justifyContent:"space-between",margin:"var(--epr-category-padding)",position:"relative"},label:{".":ue.label,alignItems:"center",backdropFilter:"blur(3px)",backgroundColor:"var(--epr-category-label-bg-color)",color:"var(--epr-category-label-text-color)",display:"flex",fontSize:"16px",fontWeight:"bold",height:"var(--epr-category-label-height)",margin:"0",padding:"var(--epr-category-label-padding)",position:"sticky",textTransform:"capitalize",top:"0",width:"100%",zIndex:"var(--epr-category-label-z-index)"}}),zd=!1;function nT(){var e=g.useState(zd),a=e[0],i=e[1];return g.useEffect(function(){i(!0),zd=!0},[]),a||zd}function aT(e){var a=e.categoryConfig,i=z3(),f=i[0],c=nT(),d=kk(),m=ar(),y=g.useMemo(function(){var x;return(x=db(d))!=null?x:[]},[f,d]),b=nr();return c?g.createElement(gb,{categoryConfig:a,hiddenOnSearch:!0,hidden:y.length===0},y.map(function(x){var v=ai(x.original);return v?g.createElement(Bl,{showVariations:!1,unified:x.unified,emojiStyle:b,emoji:v,key:x.unified,getEmojiUrl:m}):null})):null}function rT(){var e=E3(),a=g.useRef(0);return g.createElement("ul",{className:ge(fT.emojiList)},e.map(function(i){var f=K0(i);return f===ce.SUGGESTED?g.createElement(aT,{key:f,categoryConfig:i}):g.createElement(g.Suspense,{key:f},g.createElement(iT,{category:f,categoryConfig:i,renderdCategoriesCountRef:a}))}))}function iT(e){var a=e.category,i=e.categoryConfig,f=e.renderdCategoriesCountRef,c=tT(),d=Ek(),m=nr(),y=Gk(),b=a1(),x=b[0],v=Bk(),M=ar(),j=!k3(),k=!y&&f.current>0?[]:ik(a);k.length>0&&f.current++;var I=0,S=k.map(function(N){var R=xt(N,x),A=c(N),_=A.failedToLoad,T=A.filteredOut,C=A.hidden,D=v(N);return(C||D)&&I++,D?null:g.createElement(Bl,{showVariations:j,key:R,emoji:N,unified:R,hidden:_,hiddenOnSearch:T,emojiStyle:m,lazyLoad:d,getEmojiUrl:M})});return g.createElement(gb,{categoryConfig:i,hidden:I===S.length},S)}var fT=Re.create({emojiList:{".":ue.emojiList,listStyle:"none",margin:"0",padding:"0"}}),oT="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI1MHB4IgoJIGhlaWdodD0iMTVweCIgdmlld0JveD0iMCAwIDUwIDE1IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MCAxNSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnIGlkPSJMYXllcl8xIj4KPC9nPgo8ZyBpZD0iTGF5ZXJfMiI+Cgk8cGF0aCBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiNFOEU3RTciIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTEuODYtMC40M2w5LjgzLDExLjUzYzAuNTksMC42OSwxLjU2LDAuNjksMi4xNCwwbDkuODMtMTEuNTMiLz4KCTxwYXRoIGZpbGw9IiMwMTAyMDIiIHN0cm9rZT0iIzE1MTYxNyIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMjYuODYtMC40M2w5LjgzLDExLjUzYzAuNTksMC42OSwxLjU2LDAuNjksMi4xNCwwbDkuODMtMTEuNTMiLz4KPC9nPgo8L3N2Zz4=",qr;(function(e){e[e.Up=0]="Up",e[e.Down=1]="Down"})(qr||(qr={}));function sT(){var e=Dl(),a=Jk(),i=ci(),f=i[0],c=nr(),d=cT(a),m=d.getTop,y=d.getMenuDirection,b=_3(),x=lT(a),v=ar(),M=hn(e.current),j=!!(f&&M&&li(f)&&M.classList.contains(ue.emojiHasVariations));g.useEffect(function(){j&&zl(a.current)},[a,j,e]);var k,I;return!j&&e.current?b(null):(k=m(),I=x()),g.createElement("div",{ref:a,className:ge(Ms.variationPicker,y()===qr.Down&&Ms.pointingUp,j&&Ms.visible),style:{top:k}},j&&f?[xt(f)].concat(Jf(f)).slice(0,6).map(function(S){return g.createElement(Bl,{key:S,emoji:f,unified:S,emojiStyle:c,showVariations:!1,getEmojiUrl:v})}):null,g.createElement("div",{className:ge(Ms.pointer),style:I}))}function lT(e){var a=Dl();return function(){var f={};if(!e.current)return f;if(a.current){var c=hn(a.current),d=UE(c);if(!c)return f;f.left=d+(c==null?void 0:c.clientWidth)/2}return f}}function cT(e){var a=Dl(),i=fn(),f=qr.Up;return{getMenuDirection:c,getTop:d};function c(){return f}function d(){f=qr.Up;var m=0;if(!e.current)return 0;var y=Op(e.current);if(a.current){var b,x=i.current,v=hn(a.current),M=Op(v);m=eb(v);var j=(b=x==null?void 0:x.scrollTop)!=null?b:0;j>m-y&&(f=qr.Down,m+=M+y)}return m-y}}var Ms=Re.create(Be({variationPicker:{".":ue.variationPicker,position:"absolute",right:"15px",left:"15px",padding:"5px",boxShadow:"0px 2px 5px rgba(0, 0, 0, 0.2)",borderRadius:"3px",display:"flex",alignItems:"center",justifyContent:"space-around",opacity:"0",visibility:"hidden",pointerEvents:"none",top:"-100%",border:"1px solid var(--epr-picker-border-color)",height:"var(--epr-emoji-variation-picker-height)",zIndex:"var(--epr-skin-variation-picker-z-index)",background:"var(--epr-emoji-variation-picker-bg-color)",transform:"scale(0.9)",transition:"transform 0.1s ease-out, opacity 0.2s ease-out"},visible:{opacity:"1",visibility:"visible",pointerEvents:"all",transform:"scale(1)"},pointingUp:{".":"pointing-up",transformOrigin:"center 0%",transform:"scale(0.9)"},".pointing-up":{pointer:{top:"0",transform:"rotate(180deg) translateY(100%) translateX(18px)"}},pointer:{".":"epr-emoji-pointer",content:"",position:"absolute",width:"25px",height:"15px",backgroundRepeat:"no-repeat",backgroundPosition:"0 0",backgroundSize:"50px 15px",top:"100%",transform:"translateX(-18px)",backgroundImage:"url("+oT+")"}},va("pointer",{backgroundPosition:"-25px 0"})));function uT(){var e=fn();return eT(e),mb(e,zf.PICKER),aE(),g.createElement("div",{className:ge(dT.body,tr.hiddenOnReactions),ref:e},g.createElement(sT,null),g.createElement(rT,null))}var dT=Re.create({body:{".":ue.scrollBody,flex:"1",overflowY:"scroll",overflowX:"hidden",position:"relative"}});function hT(e,a){if(!e||!a)return 0;var i=e.getBoundingClientRect(),f=a.getBoundingClientRect();return f.height-(i.y-f.y)}function mT(e,a){var i=fn(),f=$3(),c=G3();g.useEffect(function(){if(!e)return;var d=i.current;d==null||d.addEventListener("keydown",b,{passive:!0}),d==null||d.addEventListener("mouseover",x,!0),d==null||d.addEventListener("focus",m,!0),d==null||d.addEventListener("mouseout",y,{passive:!0}),d==null||d.addEventListener("blur",y,!0);function m(v){var M=hn(v.target);if(!M)return y();var j=ib(M),k=j.unified,I=j.originalUnified;if(!k||!I)return y();a({unified:k,originalUnified:I})}function y(v){if(v){var M=v.relatedTarget;if(!hn(M))return a(null)}a(null)}function b(v){v.key==="Escape"&&a(null)}function x(v){if(!f()){var M=hn(v.target);if(M){var j=hT(M,d),k=M.getBoundingClientRect().height;if(j<k)return gT(M,a);$t(M)}}}return function(){d==null||d.removeEventListener("mouseover",x),d==null||d.removeEventListener("mouseout",y),d==null||d.removeEventListener("focus",m,!0),d==null||d.removeEventListener("blur",y,!0),d==null||d.removeEventListener("keydown",b)}},[i,e,a,f,c])}function gT(e,a){var i,f=ib(e),c=f.unified,d=f.originalUnified;!c||!d||((i=document.activeElement)==null||i.blur==null||i.blur(),a({unified:c,originalUnified:d}))}var js,Of;(function(e){e.ROW="FlexRow",e.COLUMN="FlexColumn"})(Of||(Of={}));function pb(e){var a=e.children,i=e.className,f=e.style,c=f===void 0?{}:f,d=e.direction,m=d===void 0?Of.ROW:d;return g.createElement("div",{style:Be({},c),className:ge(Gp.flex,i,Gp[m])},a)}var Gp=Re.create((js={flex:{display:"flex"}},js[Of.ROW]={flexDirection:"row"},js[Of.COLUMN]={flexDirection:"column"},js));function pT(e){var a=e.className,i=e.style,f=i===void 0?{}:i;return g.createElement("div",{style:Be({flex:1},f),className:ge(a)})}function yT(e){var a=e.children,i=e.className,f=e.style;return g.createElement("div",{style:Be({},f,{position:"absolute"}),className:i},a)}function Ul(e){var a=e.children,i=e.className,f=e.style;return g.createElement("div",{style:Be({},f,{position:"relative"}),className:i},a)}function bT(e){var a=e.isOpen,i=e.onClick,f=e.isActive,c=e.skinToneVariation,d=e.style;return g.createElement(Ff,{style:d,onClick:i,className:ge("epr-tone-"+c,Rd.tone,!a&&Rd.closedTone,f&&Rd.active),"aria-pressed":f,"aria-label":"Skin tone "+nk[c]})}var Rd=Re.create({closedTone:{opacity:"0",zIndex:"0"},active:{".":"epr-active",zIndex:"1",opacity:"1"},tone:{".":"epr-tone",width:"var(--epr-skin-tone-size)",display:"block",cursor:"pointer",borderRadius:"4px",height:"var(--epr-skin-tone-size)",position:"absolute",right:"0",transition:"transform 0.3s ease-in-out, opacity 0.35s ease-in-out",zIndex:"0",border:"1px solid var(--epr-skin-tone-outer-border-color)",boxShadow:"inset 0px 0px 0 1px var(--epr-skin-tone-inner-border-color)",":hover":{boxShadow:"0 0 0 3px var(--epr-active-skin-hover-color), inset 0px 0px 0 1px var(--epr-skin-tone-inner-border-color)"},":focus":{boxShadow:"0 0 0 3px var(--epr-focus-bg-color)"},"&.epr-tone-neutral":{backgroundColor:"#ffd225"},"&.epr-tone-1f3fb":{backgroundColor:"#ffdfbd"},"&.epr-tone-1f3fc":{backgroundColor:"#e9c197"},"&.epr-tone-1f3fd":{backgroundColor:"#c88e62"},"&.epr-tone-1f3fe":{backgroundColor:"#a86637"},"&.epr-tone-1f3ff":{backgroundColor:"#60463a"}}}),jf=28;function wT(){return g.createElement(Ul,{style:{height:jf}},g.createElement(yT,{style:{bottom:0,right:0}},g.createElement(yb,{direction:Bf.VERTICAL})))}function yb(e){var a=e.direction,i=a===void 0?Bf.HORIZONTAL:a,f=r1(),c=k3(),d=Hf(),m=d[0],y=d[1],b=a1(),x=b[0],v=b[1],M=Sk(),j=rr(),k=ir();if(c)return null;var I=jf*nl.length+"px",S=m?I:jf+"px",N=i===Bf.VERTICAL;return g.createElement(Ul,{className:ge(mf.skinTones,N&&mf.vertical,m&&mf.open,N&&m&&mf.verticalShadow),style:N?{flexBasis:S,height:S}:{flexBasis:S}},g.createElement("div",{className:ge(mf.select),ref:f},nl.map(function(R,A){var _=R===x;return g.createElement(bT,{key:R,skinToneVariation:R,isOpen:m,style:{transform:ge(N?"translateY(-"+A*(m?jf:0)+"px)":"translateX(-"+A*(m?jf:0)+"px)",m&&_&&"scale(1.3)")},isActive:_,onClick:function(){m?(v(R),M(R),k()):y(!0),j()}})})))}var Bf;(function(e){e.VERTICAL="epr-vertical",e.HORIZONTAL="epr-horizontal"})(Bf||(Bf={}));var mf=Re.create({skinTones:{".":"epr-skin-tones","--":{"--epr-skin-tone-size":"15px"},display:"flex",alignItems:"center",justifyContent:"flex-end",transition:"all 0.3s ease-in-out",padding:"10px 0"},vertical:{padding:"9px",alignItems:"flex-end",flexDirection:"column",borderRadius:"6px",border:"1px solid var(--epr-bg-color)"},verticalShadow:{boxShadow:"0px 0 7px var(--epr-picker-border-color)"},open:{backdropFilter:"blur(5px)",background:"var(--epr-skin-tone-picker-menu-color)",".epr-active":{border:"1px solid var(--epr-active-skin-tone-indicator-border-color)"}},select:{".":"epr-skin-tone-select",position:"relative",width:"var(--epr-skin-tone-size)",height:"var(--epr-skin-tone-size)"}});function vT(){var e=T3(),a=P3();return e.showPreview?g.createElement(pb,{className:ge(Zs.preview,tr.hiddenOnReactions)},g.createElement(xT,null),g.createElement(pT,null),a?g.createElement(wT,null):null):null}function xT(){var e,a=T3(),i=g.useState(null),f=i[0],c=i[1],d=nr(),m=ci(),y=m[0],b=ar();mT(a.showPreview,c);var x=ai((e=f==null?void 0:f.unified)!=null?e:f==null?void 0:f.originalUnified),v=x!=null&&f!=null;return g.createElement(M,null);function M(){var j=y??ai(a.defaultEmoji);if(!j)return null;var k=y?E0(y):a.defaultCaption;return g.createElement(g.Fragment,null,g.createElement("div",null,v?g.createElement(N0,{unified:f==null?void 0:f.unified,emoji:x,emojiStyle:d,size:45,getEmojiUrl:b,className:ge(Zs.emoji)}):j?g.createElement(N0,{unified:xt(j),emoji:j,emojiStyle:d,size:45,getEmojiUrl:b,className:ge(Zs.emoji)}):null),g.createElement("div",{className:ge(Zs.label)},v?E0(x):k))}}var Zs=Re.create({preview:{alignItems:"center",borderTop:"1px solid var(--epr-preview-border-color)",height:"var(--epr-preview-height)",padding:"0 var(--epr-horizontal-padding)",position:"relative",zIndex:"var(--epr-preview-z-index)"},label:{color:"var(--epr-preview-text-color)",fontSize:"var(--epr-preview-text-size)",padding:"var(--epr-preview-text-padding)",textTransform:"capitalize"},emoji:{padding:"0"}});function MT(e){var a;return(a=e==null?void 0:e.getAttribute("data-name"))!=null?a:null}function jT(e){var a=fn();g.useEffect(function(){var i=new Map,f=a.current,c=new IntersectionObserver(function(d){if(f){for(var m=O8(d),y;!(y=m()).done;){var b=y.value,x=MT(b.target);i.set(x,b.intersectionRatio)}var v=Array.from(i),M=v[v.length-1];if(M[1]==1)return e(M[0]);for(var j=0,k=v;j<k.length;j++){var I=k[j],S=I[0],N=I[1];if(N){e(S);break}}}},{threshold:[0,1]});f==null||f.querySelectorAll(gt(ue.category)).forEach(function(d){c.observe(d)})},[a,e])}function LT(){var e=fn(),a=Pf();return function(f){var c;if(e.current){var d=(c=e.current)==null?void 0:c.querySelector('[data-name="'+f+'"]');if(d){var m=d.offsetTop||0;Y3(a.current,m)}}}}function ST(){var e=Mk();return e?e.length===0:!1}var CT="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIyMDBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgMjAwIDgwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyMDAgODAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8ZyBpZD0iTGF5ZXJfMTEiPgoJPGc+CgkJPHBhdGggZmlsbD0iIzMzNzFCNyIgc3Ryb2tlPSIjMzM3MUI3IiBzdHJva2Utd2lkdGg9IjAuMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTIuOCwyOS41YzAuNiwwLDEuMS0wLjUsMS4xLTEuMQoJCQljMC0wLjYtMC41LTEuMi0xLjEtMS4yYy0wLjYsMC0xLjIsMC41LTEuMiwxLjJDMTEuNiwyOSwxMi4yLDI5LjUsMTIuOCwyOS41eiBNMTIuOCwyOGMwLjIsMCwwLjQsMC4yLDAuNCwwLjQKCQkJYzAsMC4yLTAuMiwwLjQtMC40LDAuNGMtMC4yLDAtMC40LTAuMi0wLjQtMC40QzEyLjQsMjguMSwxMi42LDI4LDEyLjgsMjh6Ii8+CgkJPHBhdGggZmlsbD0iIzMzNzFCNyIgc3Ryb2tlPSIjMzM3MUI3IiBzdHJva2Utd2lkdGg9IjAuMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTAsMjNjLTMuOCwwLTcsMy4xLTcsN2MwLDMuOCwzLjEsNyw3LDcKCQkJczctMy4xLDctN0MxNywyNi4yLDEzLjgsMjMsMTAsMjN6IE0xMCwzNi4yYy0zLjQsMC02LjItMi44LTYuMi02LjJjMC0zLjQsMi44LTYuMiw2LjItNi4yczYuMiwyLjgsNi4yLDYuMgoJCQlDMTYuMiwzMy40LDEzLjQsMzYuMiwxMCwzNi4yeiIvPgoJCTxwYXRoIGZpbGw9IiMzMzcxQjciIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTE0LjYsMzEuMmMtMC4xLTAuMS0wLjItMC4yLTAuMy0wLjJINS43CgkJCWMtMC4xLDAtMC4yLDAuMS0wLjMsMC4yYy0wLjEsMC4xLTAuMSwwLjIsMCwwLjRjMC43LDIsMi41LDMuMyw0LjYsMy4zczMuOS0xLjMsNC42LTMuM0MxNC43LDMxLjUsMTQuNywzMS4zLDE0LjYsMzEuMnogTTEwLDM0LjEKCQkJYy0xLjYsMC0zLTAuOS0zLjctMi4yaDcuM0MxMywzMy4yLDExLjYsMzQuMSwxMCwzNC4xeiIvPgoJCTxwYXRoIGZpbGw9IiMzMzcxQjciIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTcuMiwyOS41YzAuNiwwLDEuMi0wLjUsMS4yLTEuMQoJCQljMC0wLjYtMC41LTEuMi0xLjItMS4yYy0wLjYsMC0xLjEsMC41LTEuMSwxLjJDNi4xLDI5LDYuNiwyOS41LDcuMiwyOS41eiBNNy4yLDI4YzAuMiwwLDAuNCwwLjIsMC40LDAuNGMwLDAuMi0wLjIsMC40LTAuNCwwLjQKCQkJYy0wLjIsMC0wLjQtMC4yLTAuNC0wLjRDNi44LDI4LjEsNywyOCw3LjIsMjh6Ii8+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzM3MUI3IiBkPSJNNjQuMSwzMy40bDIuMywwYzAuMiwwLDAuNCwwLjIsMC40LDAuNHYyLjFjMCwwLjItMC4yLDAuNC0wLjQsMC40aC0yLjMKCQkJCWMtMC4yLDAtMC40LTAuMi0wLjQtMC40di0yLjFDNjMuNywzMy42LDYzLjgsMzMuNCw2NC4xLDMzLjR6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgZD0iTTczLjUsMzMuNWgyLjRjMC4yLDAsMC40LDAuMiwwLjQsMC40djJjMCwwLjItMC4yLDAuNC0wLjQsMC40aC0yLjQKCQkJCWMtMC4yLDAtMC40LTAuMi0wLjQtMC40bDAtMkM3My4xLDMzLjYsNzMuMywzMy41LDczLjUsMzMuNXoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzM3MUI3IiBkPSJNNjMuNywyOC40aDEyLjZ2NUg2My43VjI4LjR6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgZD0iTTY1LjUsMjMuNmg4LjljMSwwLDEuOSwwLjgsMS45LDEuOXYzLjFINjMuN3YtMy4xQzYzLjcsMjQuNSw2NC41LDIzLjYsNjUuNSwyMy42eiIvPgoJCQk8ZWxsaXBzZSBmaWxsPSIjMzM3MUI3IiBjeD0iNjYuMiIgY3k9IjMwLjkiIHJ4PSIwLjkiIHJ5PSIxIi8+CgkJCTxlbGxpcHNlIGZpbGw9IiMzMzcxQjciIGN4PSI3My44IiBjeT0iMzAuOSIgcng9IjAuOSIgcnk9IjEiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzM3MUI3IiBkPSJNOTYuNCwzMGMwLDMuNi0yLjksNi41LTYuNCw2LjVzLTYuNC0yLjktNi40LTYuNXMyLjktNi41LDYuNC02LjVTOTYuNCwyNi40LDk2LjQsMzB6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgZD0iTTk2LjMsMjguNmMwLDAsMCwwLjEsMCwwLjFjLTAuOSwwLjEtMi45LDAuMS00LjYtMS4xYy0xLjEtMC44LTItMS43LTIuNi0yLjUKCQkJCWMtMC4zLTAuNC0wLjYtMC44LTAuNy0xYy0wLjEtMC4xLTAuMS0wLjEtMC4xLTAuMmMwLjUtMC4xLDEuMi0wLjIsMi0wLjFjMS4yLDAsMi41LDAuMywzLjUsMS4xYzEsMC44LDEuNywxLjgsMi4xLDIuOAoJCQkJQzk2LjEsMjcuOSw5Ni4yLDI4LjMsOTYuMywyOC42eiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIGQ9Ik04NCwzMi4yYzAsMCwwLTAuMSwwLTAuMWMwLjktMC4yLDIuOS0wLjQsNC43LDAuNmMxLjEsMC43LDEuOSwxLjUsMi40LDIuMwoJCQkJYzAuNCwwLjUsMC42LDEsMC43LDEuM2MtMC40LDAuMS0xLDAuMi0xLjcsMC4zYy0xLDAtMi4xLTAuMS0zLjItMC44cy0xLjktMS42LTIuNC0yLjVDODQuMiwzMi44LDg0LjEsMzIuNSw4NCwzMi4yeiIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTExNi4zLDI2LjhsLTEuNCwybC0wLjgtMC44bC0wLjYtMC42bDAsMC45bC0wLjEsOC4yaC02LjgKCQkJCWwtMC4xLTguMmwwLTAuOWwtMC42LDAuNmwtMC44LDAuOGwtMS40LTJsMi42LTIuOWMwLjEtMC4xLDAuMi0wLjEsMC4zLTAuMWgxLjNsMC40LDAuN2MwLjcsMS4zLDIuNiwxLjMsMy4zLTAuMWwwLjMtMC42aDEuMgoJCQkJYzAuMSwwLDAuMiwwLDAuMywwLjFsMC4zLTAuM2wtMC4zLDAuM0wxMTYuMywyNi44eiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIGQ9Ik0xMTAuMSwyNy43aDJ2MC45YzAsMC40LTAuNCwwLjctMSwwLjdjLTAuNiwwLTEtMC4zLTEtMC43TDExMC4xLDI3LjdMMTEwLjEsMjcuN3oiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzM3MUI3IiBkPSJNMTI2LjgsMzQuM2MwLDEuMi0xLDIuMi0yLjIsMi4ycy0yLjItMS0yLjItMi4yczEtMi4yLDIuMi0yLjJTMTI2LjgsMzMuMSwxMjYuOCwzNC4zeiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIGQ9Ik0xMzcuNiwzNC4zYzAsMS4yLTEsMi4yLTIuMiwyLjJjLTEuMiwwLTIuMi0xLTIuMi0yLjJzMS0yLjIsMi4yLTIuMgoJCQkJQzEzNi42LDMyLjEsMTM3LjYsMzMuMSwxMzcuNiwzNC4zeiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIGQ9Ik0xMjYuOCwyNC40djkuOSIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIGQ9Ik0xMzcuNywyNC40djkuOSIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIGQ9Ik0xMjYuOCwyMy41aDEwLjh2Mi43aC0xMC44QzEyNi44LDI2LjIsMTI2LjgsMjMuNSwxMjYuOCwyMy41eiIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSIjMzM3MUI3IiBkPSJNMTcwLjgsMjMuMUwxNzAuOCwyMy4xYy0wLjMsMC0wLjUsMC0wLjgsMGMtMi4xLDAtNCwxLTUuMywyLjVsLTAuMSwwbC0wLjEtMC4xbC0xLTEuMmwtMC4zLDMuNGwzLjQsMC4zCgkJCQlsLTEuMS0xLjNsLTAuMS0wLjFsMC4xLTAuMWMxLjEtMS41LDMtMi4zLDUtMi4xbDAsMGMzLjIsMC4zLDUuNSwzLjEsNS4yLDYuM2MtMC4zLDMtMy4xLDUuMy02LjEsNS4xYy0zLjEtMC4yLTUuNC0yLjktNS4zLTYKCQkJCWwtMS4zLTAuMWMtMC4yLDMuOCwyLjYsNy4xLDYuMyw3LjRjMy45LDAuMyw3LjMtMi42LDcuNi02LjVDMTc3LjIsMjYuOCwxNzQuNCwyMy41LDE3MC44LDIzLjF6Ii8+CgkJCTxwYXRoIGZpbGw9IiMzMzcxQjciIGQ9Ik0xNzAuMywyNy40YzAtMC4zLTAuMy0wLjYtMC42LTAuNnMtMC42LDAuMy0wLjYsMC42djMuMmMwLDAuMiwwLjEsMC4zLDAuMiwwLjRjMC4xLDAuMSwwLjMsMC4yLDAuNCwwLjIKCQkJCWgyLjRjMC40LDAsMC42LTAuMywwLjYtMC42YzAtMC40LTAuMy0wLjYtMC42LTAuNmgtMS42aC0wLjJ2LTAuMkwxNzAuMywyNy40TDE3MC4zLDI3LjR6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgZD0iTTE4Ni4yLDIzLjRoNy43YzEuNSwwLDIuNywxLjIsMi43LDIuN3Y3LjdjMCwxLjUtMS4yLDIuNy0yLjcsMi43aC03LjcKCQkJCWMtMS41LDAtMi43LTEuMi0yLjctMi43di03LjdDMTgzLjQsMjQuNiwxODQuNywyMy40LDE4Ni4yLDIzLjR6Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiMzMzcxQjciIGN4PSIxODYiIGN5PSIyOC45IiByeD0iMC43IiByeT0iMC43Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiMzMzcxQjciIGN4PSIxOTQiIGN5PSIyNi43IiByeD0iMC43IiByeT0iMC43Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMTg2LDMzLjNsMC40LTAuM2MwLjQtMC4zLDEtMC4zLDEuNS0wLjFsMSwwLjQKCQkJCWMwLjUsMC4yLDEsMC4yLDEuNS0wLjFsMC44LTAuNWMwLjQtMC4zLDEtMC4zLDEuNS0wLjFsMS44LDAuOCIvPgoJCTwvZz4KCTwvZz4KCTxwYXRoIGZpbGw9IiMzMzcxQjciIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLXdpZHRoPSIwLjI1IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0xNTYsMjQuM2MtMC4yLTAuMS0wLjQtMC4xLTAuNSwwCgkJYzAsMC0wLjIsMC4xLTAuOSwwLjJjLTAuNywwLTIuNC0wLjEtMy44LTAuNmMtMC44LTAuMy0xLjctMC41LTIuNS0wLjVjLTAuMiwwLTAuNCwwLTAuNSwwYy0xLjMsMC0yLjUsMC4zLTMuNiwxCgkJYy0wLjIsMC4xLTAuMiwwLjItMC4yLDAuNHYxMS42YzAsMC4zLDAuMSwwLjUsMC4zLDAuNWMwLjYsMCwwLjUtMC40LDAuNS0wLjZ2LTUuN2MwLjctMC4zLDMuMi0xLjEsNS44LTAuMQoJCWMxLjYsMC42LDMuNSwwLjcsNC4zLDAuN2MwLjgsMCwxLjMtMC4zLDEuMy0wLjNjMC4yLTAuMSwwLjMtMC4yLDAuMy0wLjR2LTUuN0MxNTYuMiwyNC42LDE1Ni4xLDI0LjQsMTU2LDI0LjN6IE0xNTUuNiwzMC4yCgkJYy0wLjEsMC0wLjcsMC4xLTEsMC4xYy0wLjcsMC0yLjQtMC4xLTMuOC0wLjZjLTIuNS0xLTUtMC41LTYuMi0wLjF2LTQuOWMwLjktMC41LDIuMi0wLjcsMy4yLTAuN2MwLjEsMCwwLjMsMCwwLjQsMAoJCWMwLjcsMCwxLjUsMC4yLDIuMiwwLjRjMS42LDAuNiwzLjUsMC43LDQuMywwLjdjMC4yLDAsMC44LDAsMS0wLjFWMzAuMnoiLz4KCTxnPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgZD0iTTQ4LjEsMjMuNWgzLjdjMi41LDAsNC41LDIsNC41LDQuNWMwLDAuNS0wLjQsMC45LTAuOSwwLjlINDQuNWMtMC41LDAtMC45LTAuNC0wLjktMC45CgkJCUM0My42LDI1LjUsNDUuNiwyMy41LDQ4LjEsMjMuNXoiLz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTQzLjUsMjguOGMtMC4yLDAuMS0wLjUsMS4yLDAsMS41YzEuNCwxLDguNSwwLjgsMTEuMywwLjYKCQkJYzAuOC0wLjEsMS42LTAuNCwxLjctMS4yYzAtMC4zLTAuMS0wLjYtMC42LTAuOSIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSwzMC42TDQzLjMsMzFjLTAuMiwwLjUsMC4yLDEsMC43LDAuOWMwLjMtMC4xLDAuNSwwLDAuNywwLjMKCQkJbDAuMSwwLjJjMC4zLDAuNSwxLDAuNiwxLjUsMC4ybDAsMGMwLjMtMC4yLDAuNy0wLjMsMS0wLjJsMC44LDAuM2MwLjQsMC4yLDAuOCwwLjEsMS4yLDBsMC41LTAuMmMwLjQtMC4yLDAuOS0wLjIsMS4zLDBsMC41LDAuMgoJCQljMC40LDAuMiwwLjgsMC4yLDEuMiwwbDAuMi0wLjFjMC4zLTAuMiwwLjgtMC4yLDEuMSwwLjFsMC4yLDAuMmMwLjMsMC4zLDAuOCwwLjIsMS0wLjJsMC4xLTAuMmMwLjEtMC4yLDAtMC4zLDAuMi0wLjMKCQkJYzAuNSwwLDEuMi0wLjMsMS4xLTAuN2wtMC40LTEuMSIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSwzMi4yYy0wLjEsMC4yLTAuMywwLjgsMCwxLjFjMC4zLDAuNCwzLDEuMSw2LjQsMS4xCgkJCWMyLjIsMCw0LjYtMC4zLDYtMC42YzAuNS0wLjEsMC45LTAuNSwwLjgtMC45YzAtMC4yLTAuMi0wLjUtMC40LTAuNyIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSwzMy4zYzAsMC41LDAuNiwyLjMsMS4zLDIuN2MxLjgsMC44LDUuNywwLjcsOC4xLDAuNQoJCQljMS4zLTAuMSwyLjUtMC43LDMuMi0xLjhjMC4zLTAuNSwwLjUtMSwwLjUtMS40Ii8+CgkJPGVsbGlwc2UgZmlsbD0iIzMzNzFCNyIgY3g9IjUxLjYiIGN5PSIyNi41IiByeD0iMC4zIiByeT0iMC40Ii8+CgkJPGVsbGlwc2UgZmlsbD0iIzMzNzFCNyIgY3g9IjUzIiBjeT0iMjUiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjMzM3MUI3IiBjeD0iNTMiIGN5PSIyNy4yIiByeD0iMC4zIiByeT0iMC40Ii8+CgkJPGVsbGlwc2UgZmlsbD0iIzMzNzFCNyIgY3g9IjU0LjMiIGN5PSIyNi41IiByeD0iMC4zIiByeT0iMC40Ii8+CgkJPGVsbGlwc2UgZmlsbD0iIzMzNzFCNyIgY3g9IjUwLjkiIGN5PSIyNSIgcng9IjAuMyIgcnk9IjAuNCIvPgoJPC9nPgoJPGc+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzM3MUI3IiBkPSJNMjQuMiwzMXYtNy42YzAuMSwwLjEsMC44LDAuOSwyLjgsMy4xYzIuNS0xLjYsNS42LTAuNyw2LjksMGwyLjQtMy4xdjcuMQoJCQljMCwxLjItMC4xLDIuNS0wLjksMy40Yy0xLDEuMi0yLjcsMi41LTUuMywyLjVjLTIuOSwwLTQuNS0xLjUtNS4zLTIuOUMyNC4yLDMyLjksMjQuMiwzMiwyNC4yLDMxeiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMjEuMiwzMGw1LjQsMS4yIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzM3MUI3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0yMS4yLDM0LjFsNS40LTEuMiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMzguOCwzMGwtNS40LDEuMiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMzguOCwzNC4xbC01LjQtMS4yIi8+CgkJPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiMzMzcxQjciIGQ9Ik0yOS41LDMyLjRMMjksMzEuN2MtMC4yLTAuMywwLTAuNiwwLjMtMC42aDEuNAoJCQljMC4zLDAsMC41LDAuNCwwLjMsMC42bC0wLjcsMWwwLDBjLTAuNywxLjItMi42LDEuMS0zLjEtMC4zbC0wLjEtMC4yYy0wLjEtMC4yLDAtMC40LDAuMi0wLjVzMC40LDAsMC41LDAuMmwwLjEsMC4yCgkJCUMyOC4zLDMyLjgsMjkuMSwzMi45LDI5LjUsMzIuNHoiLz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTMyLjQsMzIuMWwtMC4xLDAuMmMtMC40LDEtMS44LDEuMS0yLjMsMC4yIi8+CgkJPGVsbGlwc2UgZmlsbD0iIzMzNzFCNyIgY3g9IjI3LjYiIGN5PSIyOS43IiByeD0iMC43IiByeT0iMC43Ii8+CgkJPGVsbGlwc2UgZmlsbD0iIzMzNzFCNyIgY3g9IjMyLjQiIGN5PSIyOS43IiByeD0iMC43IiByeT0iMC43Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBmaWxsPSIjQzBDMEJGIiBzdHJva2U9IiNDMEMwQkYiIHN0cm9rZS13aWR0aD0iMC4xIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0xMi44LDQ5LjVjMC42LDAsMS4xLTAuNSwxLjEtMS4xCgkJCWMwLTAuNi0wLjUtMS4yLTEuMS0xLjJjLTAuNiwwLTEuMiwwLjUtMS4yLDEuMkMxMS42LDQ5LDEyLjIsNDkuNSwxMi44LDQ5LjV6IE0xMi44LDQ4YzAuMiwwLDAuNCwwLjIsMC40LDAuNAoJCQljMCwwLjItMC4yLDAuNC0wLjQsMC40Yy0wLjIsMC0wLjQtMC4yLTAuNC0wLjRDMTIuNCw0OC4xLDEyLjYsNDgsMTIuOCw0OHoiLz4KCQk8cGF0aCBmaWxsPSIjQzBDMEJGIiBzdHJva2U9IiNDMEMwQkYiIHN0cm9rZS13aWR0aD0iMC4xIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0xNC42LDUxLjJjLTAuMS0wLjEtMC4yLTAuMi0wLjMtMC4ySDUuNwoJCQljLTAuMSwwLTAuMiwwLjEtMC4zLDAuMmMtMC4xLDAuMS0wLjEsMC4yLDAsMC40YzAuNywyLDIuNSwzLjMsNC42LDMuM3MzLjktMS4zLDQuNi0zLjNDMTQuNyw1MS41LDE0LjcsNTEuMywxNC42LDUxLjJ6IE0xMCw1NC4xCgkJCWMtMS42LDAtMy0wLjktMy43LTIuMmg3LjNDMTMsNTMuMiwxMS42LDU0LjEsMTAsNTQuMXoiLz4KCQk8cGF0aCBmaWxsPSIjQzBDMEJGIiBzdHJva2U9IiNDMEMwQkYiIHN0cm9rZS13aWR0aD0iMC4xIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik03LjIsNDkuNWMwLjYsMCwxLjItMC41LDEuMi0xLjEKCQkJYzAtMC42LTAuNS0xLjItMS4yLTEuMmMtMC42LDAtMS4xLDAuNS0xLjEsMS4yQzYuMSw0OSw2LjYsNDkuNSw3LjIsNDkuNXogTTcuMiw0OGMwLjIsMCwwLjQsMC4yLDAuNCwwLjRjMCwwLjItMC4yLDAuNC0wLjQsMC40CgkJCWMtMC4yLDAtMC40LTAuMi0wLjQtMC40QzYuOCw0OC4xLDcsNDgsNy4yLDQ4eiIvPgoJCTxwYXRoIGZpbGw9IiNDMEMwQkYiIHN0cm9rZT0iI0MwQzBCRiIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTEwLDQzYy0zLjgsMC03LDMuMS03LDdjMCwzLjgsMy4xLDcsNyw3CgkJCXM3LTMuMSw3LTdDMTcsNDYuMiwxMy44LDQzLDEwLDQzeiBNMTAsNTYuMmMtMy40LDAtNi4yLTIuOC02LjItNi4yYzAtMy40LDIuOC02LjIsNi4yLTYuMnM2LjIsMi44LDYuMiw2LjIKCQkJQzE2LjIsNTMuNCwxMy40LDU2LjIsMTAsNTYuMnoiLz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNDMEMwQkYiIGQ9Ik02NC4xLDUzLjRsMi4zLDBjMC4yLDAsMC40LDAuMiwwLjQsMC40djIuMWMwLDAuMi0wLjIsMC40LTAuNCwwLjRoLTIuMwoJCQkJYy0wLjIsMC0wLjQtMC4yLTAuNC0wLjR2LTIuMUM2My43LDUzLjYsNjMuOCw1My40LDY0LjEsNTMuNHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBkPSJNNzMuNSw1My41aDIuNGMwLjIsMCwwLjQsMC4yLDAuNCwwLjR2MmMwLDAuMi0wLjIsMC40LTAuNCwwLjRoLTIuNAoJCQkJYy0wLjIsMC0wLjQtMC4yLTAuNC0wLjRsMC0yQzczLjEsNTMuNiw3My4zLDUzLjUsNzMuNSw1My41eiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNDMEMwQkYiIGQ9Ik02My43LDQ4LjRoMTIuNnY1SDYzLjdWNDguNHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBkPSJNNjUuNSw0My42aDguOWMxLDAsMS45LDAuOCwxLjksMS45djMuMUg2My43di0zLjFDNjMuNyw0NC41LDY0LjUsNDMuNiw2NS41LDQzLjZ6Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiNDMEMwQkYiIGN4PSI2Ni4yIiBjeT0iNTAuOSIgcng9IjAuOSIgcnk9IjEiLz4KCQkJPGVsbGlwc2UgZmlsbD0iI0MwQzBCRiIgY3g9IjczLjgiIGN5PSI1MC45IiByeD0iMC45IiByeT0iMSIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNDMEMwQkYiIGQ9Ik05Ni40LDUwYzAsMy42LTIuOSw2LjUtNi40LDYuNXMtNi40LTIuOS02LjQtNi41czIuOS02LjUsNi40LTYuNVM5Ni40LDQ2LjQsOTYuNCw1MHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBkPSJNOTYuMyw0OC42YzAsMCwwLDAuMSwwLDAuMWMtMC45LDAuMS0yLjksMC4xLTQuNi0xLjJjLTEuMS0wLjgtMi0xLjctMi42LTIuNQoJCQkJYy0wLjMtMC40LTAuNi0wLjgtMC43LTFjLTAuMS0wLjEtMC4xLTAuMi0wLjEtMC4yYzAuNS0wLjEsMS4yLTAuMiwyLTAuMmMxLjIsMCwyLjUsMC4zLDMuNSwxLjFjMSwwLjgsMS43LDEuOCwyLjEsMi44CgkJCQlDOTYuMSw0Ny45LDk2LjIsNDguMyw5Ni4zLDQ4LjZ6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgZD0iTTg0LDUyLjJjMCwwLDAtMC4xLDAtMC4xYzAuOS0wLjIsMi45LTAuNCw0LjcsMC42YzEuMSwwLjcsMS45LDEuNSwyLjQsMi4zCgkJCQljMC40LDAuNSwwLjYsMSwwLjcsMS4zYy0wLjQsMC4xLTEsMC4yLTEuNywwLjNjLTEsMC0yLjEtMC4xLTMuMi0wLjhzLTEuOS0xLjYtMi40LTIuNUM4NC4yLDUyLjgsODQuMSw1Mi41LDg0LDUyLjJ6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMTE2LjMsNDYuOGwtMS40LDJsLTAuOC0wLjhsLTAuNi0wLjdsMCwwLjlsLTAuMSw4LjJoLTYuOAoJCQkJbC0wLjEtOC4ybDAtMC45bC0wLjYsMC43bC0wLjgsMC44bC0xLjQtMmwyLjYtMi45YzAuMS0wLjEsMC4yLTAuMSwwLjMtMC4xaDEuM2wwLjQsMC43YzAuNywxLjMsMi42LDEuMywzLjMtMC4xbDAuMy0wLjZoMS4yCgkJCQljMC4xLDAsMC4yLDAsMC4zLDAuMWwwLjMtMC4zbC0wLjMsMC4zTDExNi4zLDQ2Ljh6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgZD0iTTExMC4xLDQ3LjdoMnYwLjljMCwwLjQtMC40LDAuNy0xLDAuN2MtMC42LDAtMS0wLjMtMS0wLjdMMTEwLjEsNDcuN0wxMTAuMSw0Ny43eiIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNDMEMwQkYiIGQ9Ik0xMjYuOCw1NC4zYzAsMS4yLTEsMi4yLTIuMiwyLjJzLTIuMi0xLTIuMi0yLjJzMS0yLjIsMi4yLTIuMlMxMjYuOCw1My4xLDEyNi44LDU0LjN6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgZD0iTTEzNy42LDU0LjNjMCwxLjItMSwyLjItMi4yLDIuMmMtMS4yLDAtMi4yLTEtMi4yLTIuMnMxLTIuMiwyLjItMi4yCgkJCQlDMTM2LjYsNTIuMSwxMzcuNiw1My4xLDEzNy42LDU0LjN6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgZD0iTTEyNi44LDQ0LjR2OS45Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgZD0iTTEzNy43LDQ0LjR2OS45Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgZD0iTTEyNi44LDQzLjVoMTAuOHYyLjdoLTEwLjhDMTI2LjgsNDYuMiwxMjYuOCw0My41LDEyNi44LDQzLjV6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9IiNDMEMwQkYiIGQ9Ik0xNzAuOCw0My4xTDE3MC44LDQzLjFjLTAuMywwLTAuNSwwLTAuOCwwYy0yLjEsMC00LDEtNS4zLDIuNWwtMC4xLDBsLTAuMS0wLjFsLTEtMS4ybC0wLjMsMy40bDMuNCwwLjMKCQkJCWwtMS4xLTEuM2wtMC4xLTAuMWwwLjEtMC4xYzEuMS0xLjUsMy0yLjMsNS0yLjFsMCwwYzMuMiwwLjMsNS41LDMuMSw1LjIsNi4zYy0wLjMsMy0zLjEsNS4zLTYuMSw1LjFjLTMuMS0wLjItNS40LTIuOS01LjMtNgoJCQkJbC0xLjMtMC4xYy0wLjIsMy44LDIuNiw3LjEsNi4zLDcuNGMzLjksMC4zLDcuMy0yLjYsNy42LTYuNUMxNzcuMiw0Ni44LDE3NC40LDQzLjUsMTcwLjgsNDMuMXoiLz4KCQkJPHBhdGggZmlsbD0iI0MwQzBCRiIgZD0iTTE3MC4zLDQ3LjRjMC0wLjMtMC4zLTAuNi0wLjYtMC42cy0wLjYsMC4zLTAuNiwwLjZ2My4yYzAsMC4yLDAuMSwwLjMsMC4yLDAuNGMwLjEsMC4xLDAuMywwLjIsMC40LDAuMgoJCQkJaDIuNGMwLjQsMCwwLjYtMC4zLDAuNi0wLjZjMC0wLjMtMC4zLTAuNi0wLjYtMC42aC0xLjZoLTAuMnYtMC4yTDE3MC4zLDQ3LjRMMTcwLjMsNDcuNHoiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBkPSJNMTg2LjIsNDMuNGg3LjdjMS41LDAsMi43LDEuMiwyLjcsMi43djcuN2MwLDEuNS0xLjIsMi43LTIuNywyLjdoLTcuNwoJCQkJYy0xLjUsMC0yLjctMS4yLTIuNy0yLjd2LTcuN0MxODMuNCw0NC43LDE4NC43LDQzLjQsMTg2LjIsNDMuNHoiLz4KCQkJPGVsbGlwc2UgZmlsbD0iI0MwQzBCRiIgY3g9IjE4NiIgY3k9IjQ4LjkiIHJ4PSIwLjciIHJ5PSIwLjciLz4KCQkJPGVsbGlwc2UgZmlsbD0iI0MwQzBCRiIgY3g9IjE5NCIgY3k9IjQ2LjciIHJ4PSIwLjciIHJ5PSIwLjciLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0xODYsNTMuM2wwLjQtMC4zYzAuNC0wLjMsMS0wLjMsMS41LTAuMWwxLDAuNAoJCQkJYzAuNSwwLjIsMSwwLjIsMS41LTAuMWwwLjgtMC41YzAuNC0wLjMsMS0wLjMsMS41LTAuMWwxLjgsMC44Ii8+CgkJPC9nPgoJPC9nPgoJPHBhdGggZmlsbD0iI0MwQzBCRiIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2Utd2lkdGg9IjAuMjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTE1Niw0NC4zYy0wLjItMC4xLTAuNC0wLjEtMC41LDAKCQljMCwwLTAuMiwwLjEtMC45LDAuMmMtMC43LDAtMi40LTAuMS0zLjgtMC42Yy0wLjgtMC4zLTEuNy0wLjUtMi41LTAuNWMtMC4yLDAtMC40LDAtMC41LDBjLTEuMywwLTIuNSwwLjMtMy42LDEKCQljLTAuMiwwLjEtMC4yLDAuMi0wLjIsMC40djExLjZjMCwwLjMsMC4xLDAuNSwwLjMsMC41YzAuNiwwLDAuNS0wLjQsMC41LTAuNnYtNS43YzAuNy0wLjMsMy4yLTEuMSw1LjgtMC4xCgkJYzEuNiwwLjYsMy41LDAuNyw0LjMsMC43YzAuOCwwLDEuMy0wLjMsMS4zLTAuM2MwLjItMC4xLDAuMy0wLjIsMC4zLTAuNHYtNS43QzE1Ni4yLDQ0LjYsMTU2LjEsNDQuNCwxNTYsNDQuM3ogTTE1NS42LDUwLjIKCQljLTAuMSwwLTAuNywwLjEtMSwwLjFjLTAuNywwLTIuNC0wLjEtMy44LTAuNmMtMi41LTEtNS0wLjUtNi4yLTAuMXYtNC45YzAuOS0wLjUsMi4yLTAuNywzLjItMC43YzAuMSwwLDAuMywwLDAuNCwwCgkJYzAuNywwLDEuNSwwLjIsMi4yLDAuNGMxLjYsMC42LDMuNSwwLjcsNC4zLDAuN2MwLjIsMCwwLjgsMCwxLTAuMVY1MC4yeiIvPgoJPGc+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBkPSJNNDguMSw0My41aDMuN2MyLjUsMCw0LjUsMiw0LjUsNC41YzAsMC41LTAuNCwwLjktMC45LDAuOUg0NC41Yy0wLjUsMC0wLjktMC40LTAuOS0wLjkKCQkJQzQzLjYsNDUuNSw0NS42LDQzLjUsNDguMSw0My41eiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSw0OC44Yy0wLjIsMC4xLTAuNSwxLjIsMCwxLjVjMS40LDEsOC41LDAuOCwxMS4zLDAuNgoJCQljMC44LTAuMSwxLjYtMC40LDEuNy0xLjJjMC0wLjMtMC4xLTAuNi0wLjYtMC45Ii8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik00My41LDUwLjZMNDMuMyw1MWMtMC4yLDAuNSwwLjIsMSwwLjcsMC45YzAuMy0wLjEsMC41LDAsMC43LDAuMwoJCQlsMC4xLDAuMmMwLjMsMC41LDEsMC42LDEuNSwwLjJsMCwwYzAuMy0wLjIsMC43LTAuMywxLTAuMmwwLjgsMC4zYzAuNCwwLjIsMC44LDAuMSwxLjIsMGwwLjUtMC4yYzAuNC0wLjIsMC45LTAuMiwxLjMsMGwwLjUsMC4yCgkJCWMwLjQsMC4yLDAuOCwwLjIsMS4yLDBsMC4yLTAuMWMwLjMtMC4yLDAuOC0wLjIsMS4xLDAuMWwwLjIsMC4yYzAuMywwLjMsMC44LDAuMiwxLTAuMmwwLjEtMC4yYzAuMS0wLjIsMC0wLjMsMC4yLTAuMwoJCQljMC41LDAsMS4yLTAuMywxLjEtMC43bC0wLjQtMS4xIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik00My41LDUyLjJjLTAuMSwwLjItMC4zLDAuOCwwLDEuMWMwLjMsMC40LDMsMS4xLDYuNCwxLjEKCQkJYzIuMiwwLDQuNi0wLjMsNi0wLjZjMC41LTAuMSwwLjktMC41LDAuOC0wLjljMC0wLjItMC4yLTAuNS0wLjQtMC43Ii8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik00My41LDUzLjNjMCwwLjUsMC42LDIuMywxLjMsMi43YzEuOCwwLjgsNS43LDAuNyw4LjEsMC41CgkJCWMxLjMtMC4xLDIuNS0wLjcsMy4yLTEuOGMwLjMtMC41LDAuNS0xLDAuNS0xLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjQzBDMEJGIiBjeD0iNTEuNiIgY3k9IjQ2LjUiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjQzBDMEJGIiBjeD0iNTMiIGN5PSI0NSIgcng9IjAuMyIgcnk9IjAuNCIvPgoJCTxlbGxpcHNlIGZpbGw9IiNDMEMwQkYiIGN4PSI1MyIgY3k9IjQ3LjIiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjQzBDMEJGIiBjeD0iNTQuMyIgY3k9IjQ2LjUiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjQzBDMEJGIiBjeD0iNTAuOSIgY3k9IjQ1IiByeD0iMC4zIiByeT0iMC40Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNDMEMwQkYiIGQ9Ik0yNC4yLDUxdi03LjZjMC4xLDAuMSwwLjgsMC45LDIuOCwzLjFjMi41LTEuNyw1LjYtMC43LDYuOSwwbDIuNC0zLjF2Ny4xCgkJCWMwLDEuMi0wLjEsMi41LTAuOSwzLjRjLTEsMS4yLTIuNywyLjUtNS4zLDIuNWMtMi45LDAtNC41LTEuNS01LjMtMi45QzI0LjIsNTIuOSwyNC4yLDUyLDI0LjIsNTF6Ii8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0yMS4yLDUwbDUuNCwxLjIiLz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNDMEMwQkYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTIxLjIsNTQuMWw1LjQtMS4yIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0zOC44LDUwbC01LjQsMS4yIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0zOC44LDU0LjFsLTUuNC0xLjIiLz4KCQk8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI0MwQzBCRiIgZD0iTTI5LjUsNTIuNEwyOSw1MS43Yy0wLjItMC4zLDAtMC42LDAuMy0wLjZoMS40CgkJCWMwLjMsMCwwLjUsMC40LDAuMywwLjZsLTAuNywxbDAsMGMtMC43LDEuMi0yLjYsMS4xLTMuMS0wLjNsLTAuMS0wLjJjLTAuMS0wLjIsMC0wLjQsMC4yLTAuNXMwLjQsMCwwLjUsMC4ybDAuMSwwLjIKCQkJQzI4LjMsNTIuOCwyOS4xLDUyLjksMjkuNSw1Mi40eiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMzIuNCw1Mi4xbC0wLjEsMC4yYy0wLjQsMS0xLjgsMS4xLTIuMywwLjIiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjQzBDMEJGIiBjeD0iMjcuNiIgY3k9IjQ5LjciIHJ4PSIwLjciIHJ5PSIwLjciLz4KCQk8ZWxsaXBzZSBmaWxsPSIjQzBDMEJGIiBjeD0iMzIuNCIgY3k9IjQ5LjciIHJ4PSIwLjciIHJ5PSIwLjciLz4KCTwvZz4KCTxnPgoJCTxwYXRoIGZpbGw9IiM2QUE5REQiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTE0LjYsNzEuMmMtMC4xLTAuMS0wLjItMC4yLTAuMy0wLjJINS43CgkJCWMtMC4xLDAtMC4yLDAuMS0wLjMsMC4yYy0wLjEsMC4xLTAuMSwwLjIsMCwwLjRjMC43LDIsMi41LDMuMyw0LjYsMy4zczMuOS0xLjMsNC42LTMuM0MxNC43LDcxLjUsMTQuNyw3MS4zLDE0LjYsNzEuMnogTTEwLDc0LjEKCQkJYy0xLjYsMC0zLTAuOS0zLjctMi4yaDcuM0MxMyw3My4yLDExLjYsNzQuMSwxMCw3NC4xeiIvPgoJCTxwYXRoIGZpbGw9IiM2QUE5REQiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTEyLjgsNjkuNWMwLjYsMCwxLjEtMC41LDEuMS0xLjEKCQkJYzAtMC42LTAuNS0xLjItMS4xLTEuMmMtMC42LDAtMS4yLDAuNS0xLjIsMS4yQzExLjYsNjksMTIuMiw2OS41LDEyLjgsNjkuNXogTTEyLjgsNjhjMC4yLDAsMC40LDAuMiwwLjQsMC40CgkJCWMwLDAuMi0wLjIsMC40LTAuNCwwLjRjLTAuMiwwLTAuNC0wLjItMC40LTAuNEMxMi40LDY4LjEsMTIuNiw2OCwxMi44LDY4eiIvPgoJCTxwYXRoIGZpbGw9IiM2QUE5REQiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTcuMiw2OS41YzAuNiwwLDEuMi0wLjUsMS4yLTEuMQoJCQljMC0wLjYtMC41LTEuMi0xLjItMS4yYy0wLjYsMC0xLjEsMC41LTEuMSwxLjJDNi4xLDY5LDYuNiw2OS41LDcuMiw2OS41eiBNNy4yLDY4YzAuMiwwLDAuNCwwLjIsMC40LDAuNGMwLDAuMi0wLjIsMC40LTAuNCwwLjQKCQkJYy0wLjIsMC0wLjQtMC4yLTAuNC0wLjRDNi44LDY4LjEsNyw2OCw3LjIsNjh6Ii8+CgkJPHBhdGggZmlsbD0iIzZBQTlERCIgc3Ryb2tlPSIjNkFBOUREIiBzdHJva2Utd2lkdGg9IjAuMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTAsNjNjLTMuOCwwLTcsMy4xLTcsN2MwLDMuOCwzLjEsNyw3LDcKCQkJczctMy4xLDctN0MxNyw2Ni4yLDEzLjgsNjMsMTAsNjN6IE0xMCw3Ni4yYy0zLjQsMC02LjItMi44LTYuMi02LjJjMC0zLjQsMi44LTYuMiw2LjItNi4yczYuMiwyLjgsNi4yLDYuMgoJCQlDMTYuMiw3My40LDEzLjQsNzYuMiwxMCw3Ni4yeiIvPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTY0LjEsNzMuNGwyLjMsMGMwLjIsMCwwLjQsMC4yLDAuNCwwLjR2Mi4xYzAsMC4yLTAuMiwwLjQtMC40LDAuNGgtMi4zCgkJCQljLTAuMiwwLTAuNC0wLjItMC40LTAuNHYtMi4xQzYzLjcsNzMuNiw2My44LDczLjQsNjQuMSw3My40eiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM2QUE5REQiIGQ9Ik03My41LDczLjVoMi40YzAuMiwwLDAuNCwwLjIsMC40LDAuNHYyLjFjMCwwLjItMC4yLDAuNC0wLjQsMC40aC0yLjQKCQkJCWMtMC4yLDAtMC40LTAuMi0wLjQtMC40bDAtMi4xQzczLjEsNzMuNiw3My4zLDczLjUsNzMuNSw3My41eiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM2QUE5REQiIGQ9Ik02My43LDY4LjRoMTIuNnY1SDYzLjdWNjguNHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBkPSJNNjUuNSw2My42aDguOWMxLDAsMS45LDAuOCwxLjksMS45djMuMUg2My43di0zLjFDNjMuNyw2NC41LDY0LjUsNjMuNiw2NS41LDYzLjZ6Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiM2QUE5REQiIGN4PSI2Ni4yIiBjeT0iNzAuOSIgcng9IjAuOSIgcnk9IjAuOSIvPgoJCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iNzMuOCIgY3k9IjcwLjkiIHJ4PSIwLjkiIHJ5PSIwLjkiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBkPSJNOTYuNCw3MGMwLDMuNi0yLjksNi41LTYuNCw2LjVzLTYuNC0yLjktNi40LTYuNXMyLjktNi41LDYuNC02LjVTOTYuNCw2Ni40LDk2LjQsNzB6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTk2LjMsNjguNmMwLDAsMCwwLjEsMCwwLjFjLTAuOSwwLjEtMi45LDAuMS00LjYtMS4yYy0xLjEtMC44LTItMS43LTIuNi0yLjUKCQkJCWMtMC4zLTAuNC0wLjYtMC44LTAuNy0xLjFjLTAuMS0wLjEtMC4xLTAuMi0wLjEtMC4yYzAuNS0wLjEsMS4yLTAuMiwyLTAuMmMxLjIsMCwyLjUsMC4zLDMuNSwxLjFjMSwwLjgsMS43LDEuOCwyLjEsMi44CgkJCQlDOTYuMSw2Ny45LDk2LjIsNjguMyw5Ni4zLDY4LjZ6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTg0LDcyLjJjMCwwLDAtMC4xLDAtMC4xYzAuOS0wLjIsMi45LTAuNCw0LjcsMC42YzEuMSwwLjcsMS45LDEuNSwyLjQsMi4zCgkJCQljMC40LDAuNSwwLjYsMSwwLjcsMS4zYy0wLjQsMC4xLTEsMC4yLTEuNywwLjNjLTEsMC0yLjEtMC4xLTMuMi0wLjhzLTEuOS0xLjYtMi40LTIuNUM4NC4yLDcyLjgsODQuMSw3Mi40LDg0LDcyLjJ6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMTE2LjMsNjYuOGwtMS40LDJsLTAuOC0wLjhsLTAuNi0wLjdsMCwwLjlsLTAuMSw4LjJoLTYuOAoJCQkJbC0wLjEtOC4ybDAtMC45bC0wLjYsMC43bC0wLjgsMC44bC0xLjQtMmwyLjYtMi45YzAuMS0wLjEsMC4yLTAuMSwwLjMtMC4xaDEuM2wwLjQsMC43YzAuNywxLjMsMi42LDEuMywzLjMtMC4xbDAuMy0wLjZoMS4yCgkJCQljMC4xLDAsMC4yLDAsMC4zLDAuMWwwLjMtMC4zbC0wLjMsMC4zTDExNi4zLDY2Ljh6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTExMC4xLDY3LjdoMnYwLjljMCwwLjQtMC40LDAuNy0xLDAuN2MtMC42LDAtMS0wLjMtMS0wLjdMMTEwLjEsNjcuN0wxMTAuMSw2Ny43eiIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM2QUE5REQiIGQ9Ik0xMjYuOCw3NC4zYzAsMS4yLTEsMi4yLTIuMiwyLjJzLTIuMi0xLTIuMi0yLjJzMS0yLjIsMi4yLTIuMlMxMjYuOCw3My4xLDEyNi44LDc0LjN6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTEzNy42LDc0LjNjMCwxLjItMSwyLjItMi4yLDIuMmMtMS4yLDAtMi4yLTEtMi4yLTIuMnMxLTIuMiwyLjItMi4yCgkJCQlDMTM2LjYsNzIuMSwxMzcuNiw3My4xLDEzNy42LDc0LjN6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTEyNi44LDY0LjR2OS45Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTEzNy43LDY0LjR2OS45Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTEyNi44LDYzLjVoMTAuOHYyLjdoLTEwLjhDMTI2LjgsNjYuMiwxMjYuOCw2My41LDEyNi44LDYzLjV6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9IiM2QUE5REQiIGQ9Ik0xNzAuOCw2My4xTDE3MC44LDYzLjFjLTAuMywwLTAuNSwwLTAuOCwwYy0yLjEsMC00LDEtNS4zLDIuNWwtMC4xLDBsLTAuMS0wLjFsLTEtMS4ybC0wLjMsMy40bDMuNCwwLjMKCQkJCWwtMS4xLTEuM2wtMC4xLTAuMWwwLjEtMC4xYzEuMS0xLjQsMy0yLjMsNS0yLjFsMCwwYzMuMiwwLjMsNS41LDMuMSw1LjIsNi4zYy0wLjMsMy0zLjEsNS4zLTYuMSw1LjFjLTMuMS0wLjItNS40LTIuOS01LjMtNgoJCQkJbC0xLjMtMC4xYy0wLjIsMy44LDIuNiw3LjEsNi4zLDcuNGMzLjksMC4zLDcuMy0yLjYsNy42LTYuNUMxNzcuMiw2Ni44LDE3NC40LDYzLjUsMTcwLjgsNjMuMXoiLz4KCQkJPHBhdGggZmlsbD0iIzZBQTlERCIgZD0iTTE3MC4zLDY3LjRjMC0wLjMtMC4zLTAuNi0wLjYtMC42cy0wLjYsMC4zLTAuNiwwLjZ2My4yYzAsMC4yLDAuMSwwLjMsMC4yLDAuNGMwLjEsMC4xLDAuMywwLjIsMC40LDAuMgoJCQkJaDIuNGMwLjQsMCwwLjYtMC4zLDAuNi0wLjZTMTcyLjQsNzAsMTcyLDcwaC0xLjZoLTAuMnYtMC4yTDE3MC4zLDY3LjRMMTcwLjMsNjcuNHoiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBkPSJNMTg2LjIsNjMuNGg3LjdjMS41LDAsMi43LDEuMiwyLjcsMi43djcuN2MwLDEuNS0xLjIsMi43LTIuNywyLjdoLTcuNwoJCQkJYy0xLjUsMC0yLjctMS4yLTIuNy0yLjd2LTcuN0MxODMuNCw2NC43LDE4NC43LDYzLjQsMTg2LjIsNjMuNHoiLz4KCQkJPGVsbGlwc2UgZmlsbD0iIzZBQTlERCIgY3g9IjE4NiIgY3k9IjY4LjkiIHJ4PSIwLjciIHJ5PSIwLjciLz4KCQkJPGVsbGlwc2UgZmlsbD0iIzZBQTlERCIgY3g9IjE5NCIgY3k9IjY2LjciIHJ4PSIwLjciIHJ5PSIwLjciLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0xODYsNzMuM2wwLjQtMC4zYzAuNC0wLjMsMS0wLjMsMS41LTAuMWwxLDAuNAoJCQkJYzAuNSwwLjIsMSwwLjIsMS41LTAuMWwwLjgtMC41YzAuNC0wLjMsMS0wLjMsMS41LTAuMWwxLjgsMC44Ii8+CgkJPC9nPgoJPC9nPgoJPHBhdGggZmlsbD0iIzZBQTlERCIgc3Ryb2tlPSIjNkFBOUREIiBzdHJva2Utd2lkdGg9IjAuMjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTE1Niw2NC4zYy0wLjItMC4xLTAuNC0wLjEtMC41LDAKCQljMCwwLTAuMiwwLjEtMC45LDAuMmMtMC43LDAtMi40LTAuMS0zLjgtMC42Yy0wLjgtMC4zLTEuNy0wLjUtMi41LTAuNWMtMC4yLDAtMC40LDAtMC41LDBjLTEuMywwLTIuNSwwLjMtMy42LDEKCQljLTAuMiwwLjEtMC4yLDAuMi0wLjIsMC40djExLjZjMCwwLjMsMC4xLDAuNSwwLjMsMC41YzAuNiwwLDAuNS0wLjQsMC41LTAuNnYtNS43YzAuNy0wLjMsMy4yLTEuMSw1LjgtMC4xCgkJYzEuNiwwLjYsMy41LDAuNyw0LjMsMC43YzAuOCwwLDEuMy0wLjMsMS4zLTAuM2MwLjItMC4xLDAuMy0wLjIsMC4zLTAuNHYtNS43QzE1Ni4yLDY0LjYsMTU2LjEsNjQuNCwxNTYsNjQuM3ogTTE1NS42LDcwLjIKCQljLTAuMSwwLTAuNywwLjEtMSwwLjFjLTAuNywwLTIuNC0wLjEtMy44LTAuNmMtMi41LTEtNS0wLjUtNi4yLTAuMXYtNC45YzAuOS0wLjUsMi4yLTAuNywzLjItMC43YzAuMSwwLDAuMywwLDAuNCwwCgkJYzAuNywwLDEuNSwwLjIsMi4yLDAuNGMxLjYsMC42LDMuNSwwLjcsNC4zLDAuN2MwLjIsMCwwLjgsMCwxLTAuMVY3MC4yeiIvPgoJPGc+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBkPSJNNDguMSw2My41aDMuN2MyLjUsMCw0LjUsMiw0LjUsNC41YzAsMC41LTAuNCwwLjktMC45LDAuOUg0NC41Yy0wLjUsMC0wLjktMC40LTAuOS0wLjkKCQkJQzQzLjYsNjUuNSw0NS42LDYzLjUsNDguMSw2My41eiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSw2OC44Yy0wLjIsMC4xLTAuNSwxLjIsMCwxLjVjMS40LDAuOSw4LjUsMC44LDExLjMsMC42CgkJCWMwLjgtMC4xLDEuNi0wLjQsMS43LTEuMmMwLTAuMy0wLjEtMC42LTAuNi0wLjkiLz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM2QUE5REQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTQzLjUsNzAuNkw0My4zLDcxYy0wLjIsMC41LDAuMiwxLDAuNywwLjljMC4zLTAuMSwwLjUsMC4xLDAuNywwLjMKCQkJbDAuMSwwLjJjMC4zLDAuNSwxLDAuNiwxLjUsMC4ybDAsMGMwLjMtMC4yLDAuNy0wLjMsMS0wLjJsMC44LDAuM2MwLjQsMC4yLDAuOCwwLjEsMS4yLDBsMC41LTAuMmMwLjQtMC4yLDAuOS0wLjIsMS4zLDBsMC41LDAuMgoJCQljMC40LDAuMiwwLjgsMC4yLDEuMi0wLjFsMC4yLTAuMWMwLjMtMC4yLDAuOC0wLjIsMS4xLDAuMWwwLjIsMC4yYzAuMywwLjMsMC44LDAuMiwxLTAuMmwwLjEtMC4yYzAuMS0wLjIsMC0wLjMsMC4yLTAuMwoJCQljMC41LDAsMS4yLTAuMywxLjEtMC43bC0wLjQtMS4xIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik00My41LDcyLjJjLTAuMSwwLjItMC4zLDAuOCwwLDEuMWMwLjMsMC40LDMsMS4xLDYuNCwxLjEKCQkJYzIuMiwwLDQuNi0wLjMsNi0wLjZjMC41LTAuMSwwLjktMC40LDAuOC0wLjljMC0wLjItMC4yLTAuNS0wLjQtMC43Ii8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik00My41LDczLjNjMCwwLjUsMC42LDIuMywxLjMsMi43YzEuOCwwLjgsNS43LDAuNyw4LjEsMC41CgkJCWMxLjMtMC4xLDIuNS0wLjcsMy4yLTEuOGMwLjMtMC41LDAuNS0xLDAuNS0xLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iNTEuNiIgY3k9IjY2LjUiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iNTMiIGN5PSI2NSIgcng9IjAuMyIgcnk9IjAuNCIvPgoJCTxlbGxpcHNlIGZpbGw9IiM2QUE5REQiIGN4PSI1MyIgY3k9IjY3LjIiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iNTQuMyIgY3k9IjY2LjUiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iNTAuOSIgY3k9IjY1IiByeD0iMC4zIiByeT0iMC40Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM2QUE5REQiIGQ9Ik0yNC4yLDcxdi03LjZjMC4xLDAuMSwwLjgsMC45LDIuOCwzLjFjMi41LTEuNyw1LjYtMC43LDYuOSwwbDIuNC0zLjF2Ny4xCgkJCWMwLDEuMi0wLjEsMi41LTAuOSwzLjRjLTEsMS4yLTIuNywyLjUtNS4zLDIuNWMtMi45LDAtNC41LTEuNS01LjMtMi45QzI0LjIsNzIuOSwyNC4yLDcyLDI0LjIsNzF6Ii8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0yMS4yLDcwLjFsNS40LDEuMiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMjEuMiw3NC4xbDUuNC0xLjIiLz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM2QUE5REQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTM4LjgsNzAuMWwtNS40LDEuMiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMzguOCw3NC4xbC01LjQtMS4yIi8+CgkJPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiM2QUE5REQiIGQ9Ik0yOS41LDcyLjRMMjksNzEuN2MtMC4yLTAuMywwLTAuNiwwLjMtMC42aDEuNAoJCQljMC4zLDAsMC41LDAuNCwwLjMsMC42bC0wLjcsMWwwLDBjLTAuNywxLjItMi42LDEuMS0zLjEtMC4zbC0wLjEtMC4yYy0wLjEtMC4yLDAtMC40LDAuMi0wLjVjMC4yLTAuMSwwLjQsMCwwLjUsMC4ybDAuMSwwLjIKCQkJQzI4LjMsNzIuOCwyOS4xLDcyLjksMjkuNSw3Mi40eiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMzIuNCw3Mi4xbC0wLjEsMC4yYy0wLjQsMS0xLjgsMS4xLTIuMywwLjIiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iMjcuNiIgY3k9IjY5LjciIHJ4PSIwLjciIHJ5PSIwLjciLz4KCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iMzIuNCIgY3k9IjY5LjciIHJ4PSIwLjciIHJ5PSIwLjciLz4KCTwvZz4KPC9nPgo8Zz4KCTxwYXRoIGZpbGw9IiM4Njg2ODYiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTEyLjgsOS41YzAuNiwwLDEuMS0wLjUsMS4xLTEuMgoJCWMwLTAuNi0wLjUtMS4xLTEuMS0xLjFjLTAuNiwwLTEuMiwwLjUtMS4yLDEuMVMxMi4yLDkuNSwxMi44LDkuNXogTTEyLjgsNy45YzAuMiwwLDAuNCwwLjIsMC40LDAuNGMwLDAuMi0wLjIsMC40LTAuNCwwLjQKCQljLTAuMiwwLTAuNC0wLjItMC40LTAuNEMxMi40LDguMSwxMi42LDcuOSwxMi44LDcuOXoiLz4KCTxwYXRoIGZpbGw9IiM4Njg2ODYiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTcuMiw5LjVjMC42LDAsMS4yLTAuNSwxLjItMS4yCgkJYzAtMC42LTAuNS0xLjEtMS4yLTEuMWMtMC42LDAtMS4xLDAuNS0xLjEsMS4xUzYuNiw5LjUsNy4yLDkuNXogTTcuMiw3LjljMC4yLDAsMC40LDAuMiwwLjQsMC40YzAsMC4yLTAuMiwwLjQtMC40LDAuNAoJCUM3LDguNyw2LjgsOC41LDYuOCw4LjNDNi44LDguMSw3LDcuOSw3LjIsNy45eiIvPgoJPHBhdGggZmlsbD0iIzg2ODY4NiIgc3Ryb2tlPSIjODY4Njg2IiBzdHJva2Utd2lkdGg9IjAuMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTQuNiwxMS4yYy0wLjEtMC4xLTAuMi0wLjItMC4zLTAuMkg1LjcKCQljLTAuMSwwLTAuMiwwLjEtMC4zLDAuMmMtMC4xLDAuMS0wLjEsMC4yLDAsMC40YzAuNywyLDIuNSwzLjMsNC42LDMuM3MzLjktMS4zLDQuNi0zLjNDMTQuNywxMS40LDE0LjcsMTEuMywxNC42LDExLjJ6IE0xMCwxNC4xCgkJYy0xLjYsMC0zLTAuOS0zLjctMi4yaDcuM0MxMywxMy4yLDExLjYsMTQuMSwxMCwxNC4xeiIvPgoJPHBhdGggZmlsbD0iIzg2ODY4NiIgc3Ryb2tlPSIjODY4Njg2IiBzdHJva2Utd2lkdGg9IjAuMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTAsM2MtMy44LDAtNywzLjEtNyw3czMuMSw3LDcsN3M3LTMuMSw3LTcKCQlTMTMuOCwzLDEwLDN6IE0xMCwxNi4yYy0zLjQsMC02LjItMi44LTYuMi02LjJTNi42LDMuOCwxMCwzLjhzNi4yLDIuOCw2LjIsNi4yUzEzLjQsMTYuMiwxMCwxNi4yeiIvPgo8L2c+CjxnIGlkPSJDYXJfMDAwMDAwMTg5MzUzOTUwODU0MTM0MTM3NTAwMDAwMDA4MjUyNzM4Nzc4NDI3NzU3MTVfIj4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIGQ9Ik02NC4xLDEzLjRsMi4zLDBjMC4yLDAsMC40LDAuMiwwLjQsMC40djIuMWMwLDAuMi0wLjIsMC40LTAuNCwwLjRoLTIuMwoJCQkJYy0wLjIsMC0wLjQtMC4yLTAuNC0wLjR2LTIuMUM2My43LDEzLjYsNjMuOCwxMy40LDY0LjEsMTMuNHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBkPSJNNzMuNSwxMy40aDIuNGMwLjIsMCwwLjQsMC4yLDAuNCwwLjR2Mi4xYzAsMC4yLTAuMiwwLjQtMC40LDAuNGgtMi40CgkJCQljLTAuMiwwLTAuNC0wLjItMC40LTAuNGwwLTIuMUM3My4xLDEzLjYsNzMuMywxMy40LDczLjUsMTMuNHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBkPSJNNjMuNyw4LjRoMTIuNnY1SDYzLjdWOC40eiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIGQ9Ik02NS41LDMuNmg4LjljMSwwLDEuOSwwLjgsMS45LDEuOXYzLjFINjMuN1Y1LjVDNjMuNyw0LjQsNjQuNSwzLjYsNjUuNSwzLjZ6Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiM4Njg2ODYiIGN4PSI2Ni4yIiBjeT0iMTAuOSIgcng9IjAuOSIgcnk9IjAuOSIvPgoJCQk8ZWxsaXBzZSBmaWxsPSIjODY4Njg2IiBjeD0iNzMuOCIgY3k9IjEwLjkiIHJ4PSIwLjkiIHJ5PSIwLjkiLz4KCQk8L2c+Cgk8L2c+CjwvZz4KPGcgaWQ9IkFjdGl2aXRpZXMiPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgZD0iTTk2LjQsMTBjMCwzLjYtMi45LDYuNS02LjQsNi41cy02LjQtMi45LTYuNC02LjVzMi45LTYuNSw2LjQtNi41Uzk2LjQsNi40LDk2LjQsMTB6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgZD0iTTk2LjMsOC42YzAsMCwwLDAuMSwwLDAuMWMtMC45LDAuMS0yLjksMC4xLTQuNi0xLjJjLTEuMS0wLjgtMi0xLjctMi42LTIuNQoJCQkJYy0wLjMtMC40LTAuNi0wLjgtMC43LTEuMWMtMC4xLTAuMS0wLjEtMC4yLTAuMS0wLjJjMC41LTAuMSwxLjItMC4yLDItMC4yYzEuMiwwLDIuNSwwLjMsMy41LDEuMWMxLDAuOCwxLjcsMS44LDIuMSwyLjgKCQkJCUM5Ni4xLDcuOSw5Ni4yLDguMyw5Ni4zLDguNnoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBkPSJNODQsMTIuMWMwLDAsMC0wLjEsMC0wLjFjMC45LTAuMiwyLjktMC40LDQuNywwLjZjMS4xLDAuNiwxLjksMS41LDIuNCwyLjMKCQkJCWMwLjQsMC41LDAuNiwxLDAuNywxLjNjLTAuNCwwLjEtMSwwLjItMS43LDAuM2MtMSwwLTIuMS0wLjEtMy4yLTAuOGMtMS4xLTAuNi0xLjktMS42LTIuNC0yLjVDODQuMiwxMi44LDg0LjEsMTIuNCw4NCwxMi4xeiIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8ZyBpZD0iT2JqZWN0c18wMDAwMDA2NDMxMjM3MTczOTEzMDMxNTI1MDAwMDAxMDIyNTg4OTAzMjIyODYzMjk3NV8iPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMTE2LjMsNi44bC0xLjQsMkwxMTQuMSw4bC0wLjYtMC43bDAsMC45bC0wLjEsOC4yaC02LjhsLTAuMS04LjIKCQkJCWwwLTAuOUwxMDUuOSw4bC0wLjgsMC44bC0xLjQtMmwyLjYtMi45YzAuMS0wLjEsMC4yLTAuMSwwLjMtMC4xaDEuM2wwLjQsMC43YzAuNywxLjMsMi42LDEuMywzLjMtMC4xbDAuMy0wLjZoMS4yCgkJCQljMC4xLDAsMC4yLDAsMC4zLDAuMWwwLjMtMC4zbC0wLjMsMC4zTDExNi4zLDYuOHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBkPSJNMTEwLjEsNy43aDJ2MC45YzAsMC40LTAuNCwwLjctMSwwLjdjLTAuNiwwLTEtMC4zLTEtMC43TDExMC4xLDcuN0wxMTAuMSw3Ljd6Ii8+CgkJPC9nPgoJPC9nPgo8L2c+CjxnIGlkPSJTeW1ib2xzXzAwMDAwMDk2NzQ2OTA3ODY5OTI5OTIxMTgwMDAwMDA2NDg0ODEyODMwMjgyNTgyNDE2XyI+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBkPSJNMTI2LjgsMTQuM2MwLDEuMi0xLDIuMi0yLjIsMi4ycy0yLjItMS0yLjItMi4yczEtMi4yLDIuMi0yLjJTMTI2LjgsMTMuMSwxMjYuOCwxNC4zeiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIGQ9Ik0xMzcuNiwxNC4zYzAsMS4yLTEsMi4yLTIuMiwyLjJjLTEuMiwwLTIuMi0xLTIuMi0yLjJzMS0yLjIsMi4yLTIuMgoJCQkJQzEzNi42LDEyLjEsMTM3LjYsMTMuMSwxMzcuNiwxNC4zeiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIGQ9Ik0xMjYuOCw0LjR2OS45Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgZD0iTTEzNy43LDQuNHY5LjkiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBkPSJNMTI2LjgsMy41aDEwLjh2Mi43aC0xMC44QzEyNi44LDYuMiwxMjYuOCwzLjUsMTI2LjgsMy41eiIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8ZyBpZD0iUmVjZW50cyI+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0iIzg2ODY4NiIgZD0iTTE3MC44LDMuMUwxNzAuOCwzLjFjLTAuMywwLTAuNSwwLTAuOCwwYy0yLjEsMC00LDEtNS4zLDIuNWwtMC4xLDBsLTAuMS0wLjFsLTEtMS4ybC0wLjMsMy40bDMuNCwwLjMKCQkJCWwtMS4xLTEuM2wtMC4xLTAuMWwwLjEtMC4xYzEuMS0xLjQsMy0yLjMsNS0yLjFsMCwwYzMuMiwwLjMsNS41LDMuMSw1LjIsNi4zYy0wLjMsMy0zLjEsNS4zLTYuMSw1LjFjLTMuMS0wLjItNS40LTIuOS01LjMtNgoJCQkJTDE2Myw5LjVjLTAuMiwzLjgsMi42LDcuMSw2LjMsNy40YzMuOSwwLjQsNy4zLTIuNiw3LjYtNi41QzE3Ny4yLDYuOCwxNzQuNCwzLjUsMTcwLjgsMy4xeiIvPgoJCQk8cGF0aCBmaWxsPSIjODY4Njg2IiBkPSJNMTcwLjMsNy40YzAtMC4zLTAuMy0wLjYtMC42LTAuNlMxNjksNy4xLDE2OSw3LjR2My4yYzAsMC4yLDAuMSwwLjMsMC4yLDAuNGMwLjEsMC4xLDAuMywwLjIsMC40LDAuMgoJCQkJaDIuNGMwLjQsMCwwLjYtMC4zLDAuNi0wLjZzLTAuMy0wLjYtMC42LTAuNmgtMS42aC0wLjJWOS44TDE3MC4zLDcuNEwxNzAuMyw3LjR6Ii8+CgkJPC9nPgoJPC9nPgo8L2c+CjxnIGlkPSJDdXN0b21fMDAwMDAxODEwODcyMjk0MzQzMDIzMzY3ODAwMDAwMDUxNTIyNzc5NDU5NDA2NzQ0ODhfIj4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIGQ9Ik0xODYuMiwzLjRoNy43YzEuNSwwLDIuNywxLjIsMi43LDIuN3Y3LjdjMCwxLjUtMS4yLDIuNy0yLjcsMi43aC03LjcKCQkJCWMtMS41LDAtMi43LTEuMi0yLjctMi43VjYuMUMxODMuNCw0LjYsMTg0LjcsMy40LDE4Ni4yLDMuNHoiLz4KCQkJPGVsbGlwc2UgZmlsbD0iIzg2ODY4NiIgY3g9IjE4NiIgY3k9IjguOSIgcng9IjAuNyIgcnk9IjAuNyIvPgoJCQk8ZWxsaXBzZSBmaWxsPSIjODY4Njg2IiBjeD0iMTk0IiBjeT0iNi43IiByeD0iMC43IiByeT0iMC43Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMTg2LDEzLjNsMC40LTAuM2MwLjQtMC4zLDEtMC4zLDEuNS0wLjFsMSwwLjQKCQkJCWMwLjUsMC4yLDEsMC4yLDEuNS0wLjFsMC44LTAuNWMwLjQtMC4zLDEtMC4zLDEuNS0wLjFsMS44LDAuOCIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8cGF0aCBmaWxsPSIjODY4Njg2IiBzdHJva2U9IiM4Njg2ODYiIHN0cm9rZS13aWR0aD0iMC4yNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTU2LDQuM2MtMC4yLTAuMS0wLjQtMC4xLTAuNSwwCgljMCwwLTAuMiwwLjEtMC45LDAuMWMtMC43LDAtMi40LTAuMS0zLjgtMC42Yy0wLjgtMC4zLTEuNy0wLjUtMi41LTAuNWMtMC4yLDAtMC40LDAtMC41LDBjLTEuMywwLTIuNSwwLjMtMy42LDEKCWMtMC4yLDAuMS0wLjIsMC4yLTAuMiwwLjR2MTEuNmMwLDAuMywwLjEsMC41LDAuMywwLjVjMC42LDAsMC41LTAuNCwwLjUtMC42di01LjdjMC43LTAuMywzLjItMS4xLDUuOC0wLjFjMS42LDAuNiwzLjUsMC43LDQuMywwLjcKCWMwLjgsMCwxLjMtMC4zLDEuMy0wLjNjMC4yLTAuMSwwLjMtMC4yLDAuMy0wLjRWNC43QzE1Ni4yLDQuNSwxNTYuMSw0LjQsMTU2LDQuM3ogTTE1NS42LDEwLjJjLTAuMSwwLTAuNywwLjEtMSwwLjEKCWMtMC43LDAtMi40LTAuMS0zLjgtMC42Yy0yLjUtMS01LTAuNS02LjItMC4xVjQuN2MwLjktMC41LDIuMi0wLjcsMy4yLTAuN2MwLjEsMCwwLjMsMCwwLjQsMGMwLjcsMCwxLjUsMC4yLDIuMiwwLjQKCWMxLjYsMC42LDMuNSwwLjcsNC4zLDAuN2MwLjIsMCwwLjgsMCwxLTAuMVYxMC4yeiIvPgo8ZyBpZD0iRm9vZCI+Cgk8ZyBpZD0iTGF5ZXJfMTIiPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIGQ9Ik00OC4xLDMuNWgzLjdjMi41LDAsNC41LDIsNC41LDQuNWMwLDAuNS0wLjQsMC45LTAuOSwwLjlINDQuNWMtMC41LDAtMC45LTAuNC0wLjktMC45CgkJCQlDNDMuNiw1LjUsNDUuNiwzLjUsNDguMSwzLjV6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSw4LjdjLTAuMiwwLjEtMC41LDEuMiwwLDEuNWMxLjQsMC45LDguNSwwLjgsMTEuMywwLjYKCQkJCWMwLjgtMC4xLDEuNi0wLjQsMS43LTEuMmMwLTAuMy0wLjEtMC42LTAuNi0wLjkiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik00My41LDEwLjZMNDMuMywxMWMtMC4yLDAuNSwwLjIsMSwwLjcsMC45CgkJCQljMC4zLTAuMSwwLjUsMC4xLDAuNywwLjNsMC4xLDAuMmMwLjMsMC41LDEsMC42LDEuNSwwLjJsMCwwYzAuMy0wLjIsMC43LTAuMywxLTAuMmwwLjgsMC4zYzAuNCwwLjEsMC44LDAuMSwxLjIsMGwwLjUtMC4yCgkJCQljMC40LTAuMiwwLjktMC4yLDEuMywwbDAuNSwwLjJjMC40LDAuMiwwLjgsMC4xLDEuMi0wLjFsMC4yLTAuMWMwLjMtMC4yLDAuOC0wLjEsMS4xLDAuMWwwLjIsMC4yYzAuMywwLjMsMC44LDAuMiwxLTAuMmwwLjEtMC4yCgkJCQljMC4xLTAuMiwwLTAuMywwLjItMC40YzAuNSwwLDEuMi0wLjMsMS4xLTAuN2wtMC40LTEuMSIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTQzLjUsMTIuMWMtMC4xLDAuMi0wLjMsMC44LDAsMS4xYzAuMywwLjQsMywxLjEsNi40LDEuMQoJCQkJYzIuMiwwLDQuNi0wLjMsNi0wLjZjMC41LTAuMSwwLjktMC40LDAuOC0wLjljMC0wLjItMC4yLTAuNS0wLjQtMC43Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSwxMy4zYzAsMC41LDAuNiwyLjQsMS4zLDIuNmMxLjgsMC44LDUuNywwLjcsOC4xLDAuNQoJCQkJYzEuMy0wLjEsMi41LTAuNywzLjItMS44YzAuMy0wLjUsMC41LTEsMC41LTEuNCIvPgoJCQk8ZWxsaXBzZSBmaWxsPSIjODY4Njg2IiBjeD0iNTEuNiIgY3k9IjYuNSIgcng9IjAuMyIgcnk9IjAuNCIvPgoJCQk8ZWxsaXBzZSBmaWxsPSIjODY4Njg2IiBjeD0iNTMiIGN5PSI0LjkiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQkJPGVsbGlwc2UgZmlsbD0iIzg2ODY4NiIgY3g9IjUzIiBjeT0iNy4yIiByeD0iMC4zIiByeT0iMC40Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiM4Njg2ODYiIGN4PSI1NC4zIiBjeT0iNi41IiByeD0iMC4zIiByeT0iMC40Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiM4Njg2ODYiIGN4PSI1MC45IiBjeT0iNC45IiByeD0iMC4zIiByeT0iMC40Ii8+CgkJPC9nPgoJPC9nPgo8L2c+CjxnIGlkPSJBbmltYWxzIj4KCTxnPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgZD0iTTI0LjIsMTFWMy41YzAuMSwwLjEsMC44LDAuOSwyLjgsMy4xYzIuNS0xLjcsNS42LTAuNyw2LjksMGwyLjQtMy4xdjcuMQoJCQljMCwxLjItMC4xLDIuNS0wLjksMy40Yy0xLDEuMi0yLjcsMi41LTUuMywyLjVjLTIuOSwwLTQuNS0xLjUtNS4zLTIuOUMyNC4yLDEyLjksMjQuMiwxMS45LDI0LjIsMTF6Ii8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0yMS4yLDEwbDUuNCwxLjIiLz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTIxLjIsMTQuMWw1LjQtMS4yIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0zOC44LDEwbC01LjQsMS4yIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0zOC44LDE0LjFsLTUuNC0xLjIiLz4KCQk8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzg2ODY4NiIgZD0iTTI5LjUsMTIuNEwyOSwxMS43Yy0wLjItMC4zLDAtMC42LDAuMy0wLjZoMS40CgkJCWMwLjMsMCwwLjUsMC40LDAuMywwLjZsLTAuNywxbDAsMGMtMC43LDEuMi0yLjYsMS4xLTMuMS0wLjNsLTAuMS0wLjJjLTAuMS0wLjIsMC0wLjQsMC4yLTAuNXMwLjQsMCwwLjUsMC4ybDAuMSwwLjIKCQkJQzI4LjMsMTIuNywyOS4xLDEyLjksMjkuNSwxMi40eiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMzIuNCwxMi4xbC0wLjEsMC4yYy0wLjQsMS0xLjgsMS4xLTIuMywwLjIiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjODY4Njg2IiBjeD0iMjcuNiIgY3k9IjkuNyIgcng9IjAuNyIgcnk9IjAuNyIvPgoJCTxlbGxpcHNlIGZpbGw9IiM4Njg2ODYiIGN4PSIzMi40IiBjeT0iOS43IiByeD0iMC43IiByeT0iMC43Ii8+Cgk8L2c+CjwvZz4KPC9zdmc+";function kT(e){var a,i=e.isActiveCategory,f=e.category,c=e.allowNavigation,d=e.categoryConfig,m=e.onClick;return g.createElement(Ff,{tabIndex:c?0:-1,className:ge(TT.catBtn,tr.categoryBtn,"epr-icn-"+f,(a={},a[ue.active]=i,a)),onClick:m,"aria-label":b3(d),"aria-selected":i,role:"tab","aria-controls":"epr-category-nav-id"})}var $p={backgroundPositionY:"calc(var(--epr-category-navigation-button-size) * 3)"},ET={backgroundPositionY:"calc(var(--epr-category-navigation-button-size) * 2)"},Zp={":not(.epr-search-active)":{catBtn:{":hover":$p,"&.epr-active":$p}}},TT=Re.create(Be({catBtn:{".":"epr-cat-btn",display:"inline-block",transition:"opacity 0.2s ease-in-out",position:"relative",height:"var(--epr-category-navigation-button-size)",width:"var(--epr-category-navigation-button-size)",backgroundSize:"calc(var(--epr-category-navigation-button-size) * 10)",outline:"none",backgroundPosition:"0 0",backgroundImage:"url("+CT+")",":focus:before":{content:"",position:"absolute",top:"-2px",left:"-2px",right:"-2px",bottom:"-2px",border:"2px solid var(--epr-category-icon-active-color)",borderRadius:"50%"},"&.epr-icn-suggested":{backgroundPositionX:"calc(var(--epr-category-navigation-button-size) * -8)"},"&.epr-icn-custom":{backgroundPositionX:"calc(var(--epr-category-navigation-button-size) * -9)"},"&.epr-icn-activities":{backgroundPositionX:"calc(var(--epr-category-navigation-button-size) * -4)"},"&.epr-icn-animals_nature":{backgroundPositionX:"calc(var(--epr-category-navigation-button-size) * -1)"},"&.epr-icn-flags":{backgroundPositionX:"calc(var(--epr-category-navigation-button-size) * -7)"},"&.epr-icn-food_drink":{backgroundPositionX:"calc(var(--epr-category-navigation-button-size) * -2)"},"&.epr-icn-objects":{backgroundPositionX:"calc(var(--epr-category-navigation-button-size) * -5)"},"&.epr-icn-smileys_people":{backgroundPositionX:"0px"},"&.epr-icn-symbols":{backgroundPositionX:"calc(var(--epr-category-navigation-button-size) * -6)"},"&.epr-icn-travel_places":{backgroundPositionX:"calc(var(--epr-category-navigation-button-size) * -3)"}}},va("catBtn",ET),{".epr-dark-theme":Be({},Zp),".epr-auto-theme":Be({},Zp)}));function NT(){var e=g.useState(null),a=e[0],i=e[1],f=LT();jT(i);var c=Il(),d=E3(),m=i1(),y=ST();return g.createElement("div",{className:ge(IT.nav),role:"tablist","aria-label":"Category navigation",id:"epr-category-nav-id",ref:m},d.map(function(b){var x=K0(b),v=x===a;if(GE(b)&&y)return null;var M=!c&&!v;return g.createElement(kT,{key:x,category:x,isActiveCategory:v,allowNavigation:M,categoryConfig:b,onClick:function(){i(x),f(x)}})}))}var IT=Re.create({nav:{".":"epr-category-nav",display:"flex",flexDirection:"row",justifyContent:"space-around",padding:"var(--epr-header-padding)"},".epr-search-active":{nav:{opacity:"0.3",cursor:"default",pointerEvents:"none"}},".epr-main:has(input:not(:placeholder-shown))":{nav:{opacity:"0.3",cursor:"default",pointerEvents:"none"}}}),bb="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjgwcHgiIHZpZXdCb3g9IjAgMCAyMCA4MCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjAgODAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsPSIjODY4Njg2IiBkPSJNNi45OCwxMy41OWMwLjEsMC4xLDAuMjQsMC4xNSwwLjM3LDAuMTVzMC4yNy0wLjA1LDAuMzctMC4xNWwyLjQyLTIuNDJsMi40MywyLjQzCgljMC4xLDAuMSwwLjI0LDAuMTUsMC4zNywwLjE1YzAuMTQsMCwwLjI3LTAuMDUsMC4zNy0wLjE1YzAuMjEtMC4yMSwwLjIxLTAuNTQsMC0wLjc1bC0yLjQzLTIuNDNMMTMuMzIsOAoJYzAuMjEtMC4yMSwwLjIxLTAuNTQsMC0wLjc1Yy0wLjIxLTAuMjEtMC41NC0wLjIxLTAuNzUsMGwtMi40MiwyLjQyTDcuNzQsNy4yN2MtMC4yMS0wLjIxLTAuNTQtMC4yMS0wLjc1LDAKCWMtMC4yMSwwLjIxLTAuMjEsMC41NCwwLDAuNzVsMi40MSwyLjQxbC0yLjQyLDIuNDJDNi43NywxMy4wNSw2Ljc3LDEzLjM5LDYuOTgsMTMuNTlMNi45OCwxMy41OXoiLz4KPHBhdGggZmlsbD0iIzg2ODY4NiIgZD0iTTEwLjE1LDE4LjQzYzQuNDEsMCw4LTMuNTksOC04YzAtNC40MS0zLjU5LTgtOC04Yy00LjQxLDAtOCwzLjU5LTgsOEMyLjE1LDE0Ljg0LDUuNzQsMTguNDMsMTAuMTUsMTguNDN6CgkgTTEwLjE1LDMuNDljMy44MywwLDYuOTQsMy4xMSw2Ljk0LDYuOTRjMCwzLjgzLTMuMTEsNi45NC02Ljk0LDYuOTRjLTMuODMsMC02Ljk0LTMuMTEtNi45NC02Ljk0QzMuMjEsNi42LDYuMzMsMy40OSwxMC4xNSwzLjQ5CglMMTAuMTUsMy40OXoiLz4KPHBhdGggZmlsbD0iIzMzNzFCNyIgZD0iTTYuOTgsMzMuNTljMC4xLDAuMSwwLjI0LDAuMTUsMC4zNywwLjE1czAuMjctMC4wNSwwLjM3LTAuMTVsMi40Mi0yLjQybDIuNDMsMi40MwoJYzAuMSwwLjEsMC4yNCwwLjE1LDAuMzcsMC4xNWMwLjE0LDAsMC4yNy0wLjA1LDAuMzctMC4xNWMwLjIxLTAuMjEsMC4yMS0wLjU0LDAtMC43NWwtMi40My0yLjQzTDEzLjMyLDI4CgljMC4yMS0wLjIxLDAuMjEtMC41NCwwLTAuNzVjLTAuMjEtMC4yMS0wLjU0LTAuMjEtMC43NSwwbC0yLjQyLDIuNDJsLTIuNDEtMi40MWMtMC4yMS0wLjIxLTAuNTQtMC4yMS0wLjc1LDAKCWMtMC4yMSwwLjIxLTAuMjEsMC41NCwwLDAuNzVsMi40MSwyLjQxbC0yLjQyLDIuNDJDNi43NywzMy4wNSw2Ljc3LDMzLjM5LDYuOTgsMzMuNTlMNi45OCwzMy41OXoiLz4KPHBhdGggZmlsbD0iIzMzNzFCNyIgZD0iTTEwLjE1LDM4LjQzYzQuNDEsMCw4LTMuNTksOC04YzAtNC40MS0zLjU5LTgtOC04Yy00LjQxLDAtOCwzLjU5LTgsOEMyLjE1LDM0Ljg0LDUuNzQsMzguNDMsMTAuMTUsMzguNDN6CgkgTTEwLjE1LDIzLjQ5YzMuODMsMCw2Ljk0LDMuMTEsNi45NCw2Ljk0YzAsMy44My0zLjExLDYuOTQtNi45NCw2Ljk0Yy0zLjgzLDAtNi45NC0zLjExLTYuOTQtNi45NAoJQzMuMjEsMjYuNiw2LjMzLDIzLjQ5LDEwLjE1LDIzLjQ5TDEwLjE1LDIzLjQ5eiIvPgo8cGF0aCBmaWxsPSIjQzBDMEJGIiBkPSJNNi45OCw1My41OWMwLjEsMC4xLDAuMjQsMC4xNSwwLjM3LDAuMTVzMC4yNy0wLjA1LDAuMzctMC4xNWwyLjQyLTIuNDJsMi40MywyLjQzCgljMC4xLDAuMSwwLjI0LDAuMTUsMC4zNywwLjE1YzAuMTQsMCwwLjI3LTAuMDUsMC4zNy0wLjE1YzAuMjEtMC4yMSwwLjIxLTAuNTQsMC0wLjc1bC0yLjQzLTIuNDNMMTMuMzIsNDgKCWMwLjIxLTAuMjEsMC4yMS0wLjU0LDAtMC43NWMtMC4yMS0wLjIxLTAuNTQtMC4yMS0wLjc1LDBsLTIuNDIsMi40MmwtMi40MS0yLjQxYy0wLjIxLTAuMjEtMC41NC0wLjIxLTAuNzUsMAoJYy0wLjIxLDAuMjEtMC4yMSwwLjU0LDAsMC43NWwyLjQxLDIuNDFsLTIuNDIsMi40MkM2Ljc3LDUzLjA1LDYuNzcsNTMuMzksNi45OCw1My41OUw2Ljk4LDUzLjU5eiIvPgo8cGF0aCBmaWxsPSIjQzBDMEJGIiBkPSJNMTAuMTUsNTguNDNjNC40MSwwLDgtMy41OSw4LThjMC00LjQxLTMuNTktOC04LThjLTQuNDEsMC04LDMuNTktOCw4QzIuMTUsNTQuODQsNS43NCw1OC40MywxMC4xNSw1OC40M3oKCSBNMTAuMTUsNDMuNDljMy44MywwLDYuOTQsMy4xMSw2Ljk0LDYuOTRjMCwzLjgzLTMuMTEsNi45NC02Ljk0LDYuOTRjLTMuODMsMC02Ljk0LTMuMTEtNi45NC02Ljk0CglDMy4yMSw0Ni42LDYuMzMsNDMuNDksMTAuMTUsNDMuNDlMMTAuMTUsNDMuNDl6Ii8+CjxwYXRoIGZpbGw9IiM2QUE5REQiIGQ9Ik02Ljk4LDczLjU5YzAuMSwwLjEsMC4yNCwwLjE1LDAuMzcsMC4xNXMwLjI3LTAuMDUsMC4zNy0wLjE1bDIuNDItMi40MmwyLjQzLDIuNDMKCWMwLjEsMC4xLDAuMjQsMC4xNSwwLjM3LDAuMTVjMC4xNCwwLDAuMjctMC4wNSwwLjM3LTAuMTVjMC4yMS0wLjIxLDAuMjEtMC41NCwwLTAuNzVsLTIuNDMtMi40M0wxMy4zMiw2OAoJYzAuMjEtMC4yMSwwLjIxLTAuNTQsMC0wLjc1Yy0wLjIxLTAuMjEtMC41NC0wLjIxLTAuNzUsMGwtMi40MiwyLjQybC0yLjQxLTIuNDFjLTAuMjEtMC4yMS0wLjU0LTAuMjEtMC43NSwwCgljLTAuMjEsMC4yMS0wLjIxLDAuNTQsMCwwLjc1bDIuNDEsMi40MWwtMi40MiwyLjQyQzYuNzcsNzMuMDUsNi43Nyw3My4zOSw2Ljk4LDczLjU5TDYuOTgsNzMuNTl6Ii8+CjxwYXRoIGZpbGw9IiM2QUE5REQiIGQ9Ik0xMC4xNSw3OC40M2M0LjQxLDAsOC0zLjU5LDgtOGMwLTQuNDEtMy41OS04LTgtOGMtNC40MSwwLTgsMy41OS04LDhDMi4xNSw3NC44NCw1Ljc0LDc4LjQzLDEwLjE1LDc4LjQzegoJIE0xMC4xNSw2My40OWMzLjgzLDAsNi45NCwzLjExLDYuOTQsNi45NGMwLDMuODMtMy4xMSw2Ljk0LTYuOTQsNi45NGMtMy44MywwLTYuOTQtMy4xMS02Ljk0LTYuOTQKCUMzLjIxLDY2LjYsNi4zMyw2My40OSwxMC4xNSw2My40OUwxMC4xNSw2My40OXoiLz4KPC9zdmc+";function DT(){var e=J3();return g.createElement(Ff,{className:ge(Jp.btnClearSearch,tr.visibleOnSearchOnly),onClick:e,"aria-label":"Clear",title:"Clear"},g.createElement("div",{className:ge(Jp.icnClearnSearch)}))}var AT={":hover":{"> .epr-icn-clear-search":{backgroundPositionY:"-60px"}}},Jp=Re.create(Be({btnClearSearch:{".":"epr-btn-clear-search",position:"absolute",right:"var(--epr-search-bar-inner-padding)",height:"30px",width:"30px",display:"flex",alignItems:"center",justifyContent:"center",top:"50%",transform:"translateY(-50%)",padding:"0",borderRadius:"50%",":hover":{background:"var(--epr-hover-bg-color)"},":focus":{background:"var(--epr-hover-bg-color)"}},icnClearnSearch:{".":"epr-icn-clear-search",backgroundColor:"transparent",backgroundRepeat:"no-repeat",backgroundSize:"20px",height:"20px",width:"20px",backgroundImage:"url("+bb+")",":hover":{backgroundPositionY:"-20px"},":focus":{backgroundPositionY:"-20px"}}},va("icnClearnSearch",{backgroundPositionY:"-40px"}),va("btnClearSearch",AT))),Od=gt(ue.emojiPicker)+" "+gt(ue.emojiList),wb=["button",gt(ue.emoji)].join(""),zT=gt(ue.category);function RT(e){var a=e.value;if(!a)return null;var i=OT(a);return g.createElement("style",null,`
    `+Od+" "+wb+` {
      display: none;
    }


    `+Od+" "+i+` {
      display: flex;
    }

    `+Od+" "+zT+":not(:has("+i+`)) {
      display: none;
    }
  `)}function OT(e){return[wb,'[data-full-name*="',T0(e),'"]'].join("")}var BT="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjQwcHgiIHZpZXdCb3g9IjAgMCAyMCA0MCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjAgNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzg2ODY4NiIgZD0iTTEyLDguODFjMCwyLjA4LTEuNjgsMy43Ni0zLjc2LDMuNzZjLTIuMDgsMC0zLjc2LTEuNjgtMy43Ni0zLjc2CgljMC0yLjA4LDEuNjgtMy43NiwzLjc2LTMuNzZDMTAuMzIsNS4wNSwxMiw2LjczLDEyLDguODF6IE0xMS4yMywxMi43MmMtMC44MywwLjY0LTEuODcsMS4wMS0yLjk5LDEuMDFjLTIuNzIsMC00LjkyLTIuMi00LjkyLTQuOTIKCWMwLTIuNzIsMi4yLTQuOTIsNC45Mi00LjkyYzIuNzIsMCw0LjkyLDIuMiw0LjkyLDQuOTJjMCwxLjEzLTAuMzgsMi4xNi0xLjAxLDIuOTlsMy45NCwzLjkzYzAuMjUsMC4yNSwwLjI1LDAuNjYsMCwwLjkyCgljLTAuMjUsMC4yNS0wLjY2LDAuMjUtMC45MiwwTDExLjIzLDEyLjcyeiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI0MwQzBCRiIgZD0iTTEyLDI4LjgxYzAsMi4wOC0xLjY4LDMuNzYtMy43NiwzLjc2Yy0yLjA4LDAtMy43Ni0xLjY4LTMuNzYtMy43NgoJYzAtMi4wOCwxLjY4LTMuNzYsMy43Ni0zLjc2QzEwLjMyLDI1LjA1LDEyLDI2LjczLDEyLDI4LjgxeiBNMTEuMjMsMzIuNzJjLTAuODMsMC42NC0xLjg3LDEuMDEtMi45OSwxLjAxCgljLTIuNzIsMC00LjkyLTIuMi00LjkyLTQuOTJjMC0yLjcyLDIuMi00LjkyLDQuOTItNC45MmMyLjcyLDAsNC45MiwyLjIsNC45Miw0LjkyYzAsMS4xMy0wLjM4LDIuMTYtMS4wMSwyLjk5bDMuOTQsMy45MwoJYzAuMjUsMC4yNSwwLjI1LDAuNjYsMCwwLjkyYy0wLjI1LDAuMjUtMC42NiwwLjI1LTAuOTIsMEwxMS4yMywzMi43MnoiLz4KPC9zdmc+";function UT(){return g.createElement("div",{className:ge(_T.icnSearch)})}var _T=Re.create(Be({icnSearch:{".":"epr-icn-search",content:"",position:"absolute",top:"50%",left:"var(--epr-search-bar-inner-padding)",transform:"translateY(-50%)",width:"20px",height:"20px",backgroundRepeat:"no-repeat",backgroundPosition:"0 0",backgroundSize:"20px",backgroundImage:"url("+BT+")"}},va("icnSearch",{backgroundPositionY:"-20px"})));function YT(){var e=N3(),a=o1();return e?null:g.createElement(pb,{className:ge(Js.overlay)},g.createElement(QT,null),a?g.createElement(yb,null):null)}function QT(){var e=g.useState(0),a=e[0],i=e[1],f=rr(),c=Sa(),d=wk(),m=xk(),y=oE(),b=y.statusSearchResults,x=y.searchTerm,v=y.onChange,M=c==null?void 0:c.current,j=M==null?void 0:M.value;return g.createElement(Ul,{className:ge(Js.searchContainer)},g.createElement(RT,{value:j}),g.createElement("input",{autoFocus:m,"aria-label":"Type to search for an emoji",onFocus:f,className:ge(Js.search),type:"text","aria-controls":"epr-search-id",placeholder:d,onChange:function(I){i(a+1),setTimeout(function(){var S,N;v((S=I==null||(N=I.target)==null?void 0:N.value)!=null?S:j)})},ref:c}),x?g.createElement("div",{role:"status",className:ge("epr-status-search-results",Js.visuallyHidden),"aria-live":"polite",id:"epr-search-id","aria-atomic":"true"},b):null,g.createElement(UT,null),g.createElement(DT,null))}var Js=Re.create(Be({overlay:{padding:"var(--epr-header-padding)",zIndex:"var(--epr-header-overlay-z-index)"},searchContainer:{".":"epr-search-container",flex:"1",display:"block",minWidth:"0"},visuallyHidden:{clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",width:"1px"},search:{outline:"none",transition:"all 0.2s ease-in-out",color:"var(--epr-search-input-text-color)",borderRadius:"var(--epr-search-input-border-radius)",padding:"var(--epr-search-input-padding)",height:"var(--epr-search-input-height)",backgroundColor:"var(--epr-search-input-bg-color)",border:"1px solid var(--epr-search-input-bg-color)",width:"100%",":focus":{backgroundColor:"var(--epr-search-input-bg-color-active)",border:"1px solid var(--epr-search-border-color)"},"::placeholder":{color:"var(--epr-search-input-placeholder-color)"}},btnClearSearch:{".":"epr-btn-clear-search",position:"absolute",right:"var(--epr-search-bar-inner-padding)",height:"30px",width:"30px",display:"flex",alignItems:"center",justifyContent:"center",top:"50%",transform:"translateY(-50%)",padding:"0",borderRadius:"50%",":hover":{background:"var(--epr-hover-bg-color)"},":focus":{background:"var(--epr-hover-bg-color)"}},icnClearnSearch:{".":"epr-icn-clear-search",backgroundColor:"transparent",backgroundRepeat:"no-repeat",backgroundSize:"20px",height:"20px",width:"20px",backgroundImage:"url("+bb+")",":hover":{backgroundPositionY:"-20px"},":focus":{backgroundPositionY:"-20px"}}},va("icnClearnSearch",{backgroundPositionY:"-40px"}),va("btnClearSearch",{":hover > .epr-icn-clear-search":{backgroundPositionY:"-60px"}})));function GT(){return g.createElement(Ul,{className:ge("epr-header",tr.hiddenOnReactions)},g.createElement(YT,null),g.createElement(NT,null))}function $T(e){return g.createElement($k,null,g.createElement(B8,null),g.createElement(pk,Object.assign({},e),g.createElement(ZT,null)))}function ZT(){var e=Tl(),a=e[0],i=C3(),f=g.useState(!a),c=f[0],d=f[1],m=jk();return g.useEffect(function(){a&&!i||c||d(!0)},[c,i,a]),m?g.createElement(CE,null,g.createElement(KE,null),g.createElement(JT,{renderAll:c})):null}function JT(e){var a=e.renderAll;return a?g.createElement(g.Fragment,null,g.createElement(GT,null),g.createElement(uT,null),g.createElement(vT,null)):null}var HT=g.memo($T,g3),PT=function(e){z8(a,e);function a(f){var c;return c=e.call(this,f)||this,c.state={hasError:!1},c}a.getDerivedStateFromError=function(){return{hasError:!0}};var i=a.prototype;return i.componentDidCatch=function(c,d){console.error("Emoji Picker React failed to render:",c,d)},i.render=function(){return this.state.hasError?null:this.props.children},a}(g.Component);function vb(e){var a=bk({onEmojiClick:e.onEmojiClick,onReactionClick:e.onReactionClick,onSkinToneChange:e.onSkinToneChange});return g.createElement(PT,null,g.createElement(L3.Provider,{value:a},g.createElement(HT,Object.assign({},e))))}const p1={mode:"dark",background:{primary:"#0d1117",secondary:"#161b22",thirdly:"#21262d",message:"#2d3748"},text:{primary:"#ffffff",secondary:"#e6edf3",thirdly:"#c9d1d9",placeholder:"#7d8590"},border:{primary:"#30363d",secondary:"#484f58"},buttons:{primary:"#6366f1",secondary:"#21262d",danger:"#f85149"},status:{success:"#3fb950",info:"#f0883e",danger:"#f85149"},shadow:{primary:"#00000020",secondary:"#00000040"}},xb={mode:"light",background:{primary:"#ffffff",secondary:"#f6f8fa",thirdly:"#eaeef2",message:"#dbeafe"},text:{primary:"#1f2328",secondary:"#656d76",thirdly:"#7c8b96",placeholder:"#9a9ea6"},border:{primary:"#d1d9e0",secondary:"#afb8c1"},buttons:{primary:"#6366f1",secondary:"#f6f8fa",danger:"#da3633"},status:{success:"#1a7f37",info:"#fb8500",danger:"#da3633"},shadow:{primary:"#0000000a",secondary:"#0000001a"}},Mb={mode:"clean-light",background:{primary:"#ffffff",secondary:"#f8fafc",thirdly:"#e2e8f0",message:"#eff6ff"},text:{primary:"#0f172a",secondary:"#475569",thirdly:"#64748b",placeholder:"#94a3b8"},border:{primary:"#cbd5e1",secondary:"#94a3b8"},buttons:{primary:"#3b82f6",secondary:"#f1f5f9",danger:"#ef4444"},status:{success:"#10b981",info:"#f59e0b",danger:"#ef4444"},shadow:{primary:"#0000000d",secondary:"#00000024"}},jb={mode:"minimal-white",background:{primary:"#ffffff",secondary:"#fafafa",thirdly:"#f4f4f5",message:"#f8fafc"},text:{primary:"#18181b",secondary:"#3f3f46",thirdly:"#71717a",placeholder:"#a1a1aa"},border:{primary:"#e4e4e7",secondary:"#d4d4d8"},buttons:{primary:"#5b21b6",secondary:"#f4f4f5",danger:"#dc2626"},status:{success:"#059669",info:"#ea580c",danger:"#dc2626"},shadow:{primary:"#0000000a",secondary:"#00000018"}},Lb={mode:"modern-sky",background:{primary:"#f0f9ff",secondary:"#e0f2fe",thirdly:"#bae6fd",message:"#93c5fd"},text:{primary:"#0c4a6e",secondary:"#0369a1",thirdly:"#0284c7",placeholder:"#0ea5e9"},border:{primary:"#7dd3fc",secondary:"#38bdf8"},buttons:{primary:"#0284c7",secondary:"#e0f2fe",danger:"#dc2626"},status:{success:"#059669",info:"#ea580c",danger:"#dc2626"},shadow:{primary:"#0284c720",secondary:"#0284c740"}},Sb={mode:"soft-blush",background:{primary:"#fefcfc",secondary:"#fef2f2",thirdly:"#fecaca",message:"#f3e8ff"},text:{primary:"#374151",secondary:"#4b5563",thirdly:"#6b7280",placeholder:"#9ca3af"},border:{primary:"#fca5a5",secondary:"#f87171"},buttons:{primary:"#db2777",secondary:"#fef2f2",danger:"#dc2626"},status:{success:"#059669",info:"#ea580c",danger:"#dc2626"},shadow:{primary:"#db277720",secondary:"#db277740"}},Cb={mode:"clean-dark",background:{primary:"#0f172a",secondary:"#1e293b",thirdly:"#334155",message:"#475569"},text:{primary:"#f8fafc",secondary:"#e2e8f0",thirdly:"#cbd5e1",placeholder:"#64748b"},border:{primary:"#475569",secondary:"#64748b"},buttons:{primary:"#3b82f6",secondary:"#334155",danger:"#ef4444"},status:{success:"#10b981",info:"#f59e0b",danger:"#ef4444"},shadow:{primary:"#00000030",secondary:"#00000050"}},kb={mode:"modern-charcoal",background:{primary:"#0a0a0a",secondary:"#171717",thirdly:"#262626",message:"#404040"},text:{primary:"#fafafa",secondary:"#e5e5e5",thirdly:"#d4d4d4",placeholder:"#737373"},border:{primary:"#404040",secondary:"#525252"},buttons:{primary:"#7c3aed",secondary:"#262626",danger:"#ef4444"},status:{success:"#22c55e",info:"#f59e0b",danger:"#ef4444"},shadow:{primary:"#00000040",secondary:"#00000060"}},Eb={mode:"neo-dark",background:{primary:"#09090b",secondary:"#18181b",thirdly:"#27272a",message:"#3f3f46"},text:{primary:"#fafafa",secondary:"#e4e4e7",thirdly:"#d4d4d8",placeholder:"#71717a"},border:{primary:"#3f3f46",secondary:"#52525b"},buttons:{primary:"#8b5cf6",secondary:"#27272a",danger:"#f87171"},status:{success:"#4ade80",info:"#facc15",danger:"#f87171"},shadow:{primary:"#8b5cf630",secondary:"#8b5cf650"}},Tb={mode:"glass-night",background:{primary:"#0c1222",secondary:"#1a2332",thirdly:"#2a3441",message:"#374151"},text:{primary:"#ffffff",secondary:"#f3f4f6",thirdly:"#d1d5db",placeholder:"#6b7280"},border:{primary:"#374151",secondary:"#4b5563"},buttons:{primary:"#06b6d4",secondary:"#1a2332",danger:"#f87171"},status:{success:"#10b981",info:"#f59e0b",danger:"#f87171"},shadow:{primary:"#00000040",secondary:"#00000060"}},Nb={dark:p1,light:xb,"clean-light":Mb,"minimal-white":jb,"modern-sky":Lb,"soft-blush":Sb,"clean-dark":Cb,"modern-charcoal":kb,"neo-dark":Eb,"glass-night":Tb},Hp=Object.keys(Nb),Ib=g.createContext(void 0),FT=({children:e})=>{const[a,i]=g.useState(()=>{const m=localStorage.getItem("theme");return m&&Hp.includes(m)?m:window.matchMedia("(prefers-color-scheme: dark)").matches?"glass-night":"minimal-white"}),f=Nb[a]||p1;g.useEffect(()=>{localStorage.setItem("theme",a)},[a]);const d={theme:f,themeMode:a,switchTheme:m=>{Hp.includes(m)?i(m):console.warn(`Invalid theme: ${m}`)}};return s.jsx(Ib.Provider,{value:d,children:s.jsx(cx,{theme:f,children:e})})},y1=()=>{const e=g.useContext(Ib);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e},qT=({recipientId:e})=>{const[a,i]=g.useState(""),[f,c]=g.useState(!1),[d,m]=g.useState(!1),[y,b]=g.useState(!1),[x,v]=g.useState(!1),{themeMode:M}=y1(),{sendMessage:j}=er(),{socket:k}=$f(),I=g.useRef(null),S=g.useRef(null),N=g.useRef(null);g.useEffect(()=>{if(!(!k||!e))return a.trim()&&!y&&(b(!0),k.emit("typing_start_direct",{recipientId:e})),N.current&&clearTimeout(N.current),N.current=setTimeout(()=>{y&&(b(!1),k.emit("typing_stop_direct",{recipientId:e}))},2e3),()=>{N.current&&clearTimeout(N.current)}},[a,k,e,y]),g.useEffect(()=>()=>{N.current&&clearTimeout(N.current),y&&k&&e&&k.emit("typing_stop_direct",{recipientId:e})},[y,k,e]);const R=G=>{var F;i(me=>me+G.emoji),(F=S.current)==null||F.focus()},A=async()=>{var F;if(!a.trim()||!e||x)return;const G=a.trim();i(""),v(!0),y&&(b(!1),k&&k.emit("typing_stop_direct",{recipientId:e}));try{await j(e,G)}catch(me){console.error("Failed to send message:",me),i(G)}finally{v(!1),(F=S.current)==null||F.focus()}},_=G=>{G.key==="Enter"&&!G.shiftKey&&(G.preventDefault(),A())},T=G=>{i(G.target.value)};g.useEffect(()=>{const G=F=>{I.current&&!I.current.contains(F.target)&&c(!1)};return f&&document.addEventListener("mousedown",G),()=>{document.removeEventListener("mousedown",G)}},[f]);const C=[{label:"Photos & Videos",icon:s.jsx(Ay,{}),onClick:()=>{m(!1),alert("File upload not implemented yet")}},{label:"Document",icon:s.jsx(Iy,{}),onClick:()=>{m(!1),alert("Document upload not implemented yet")}}],D=M==="light"||M==="clean-light"||M==="minimal-white"||M==="modern-sky"||M==="soft-blush"?"light":"dark";return e?s.jsxs(Pp,{children:[s.jsx(KT,{children:s.jsx(Fp,{onClick:()=>c(G=>!G),children:s.jsx(Dy,{})})}),s.jsx(tN,{ref:I,isOpen:f,children:s.jsx(nN,{isOpen:f,children:s.jsx(vb,{autoFocusSearch:!1,theme:D,lazyLoadEmojis:!0,onEmojiClick:R})})}),s.jsx(XT,{children:s.jsx("input",{ref:S,type:"text",placeholder:"Type a message",value:a,onChange:T,onKeyPress:_,disabled:x,autoFocus:!0})}),s.jsxs(eN,{children:[s.jsx(Ma,{onClose:()=>m(!1),isOpen:d,right:"1",top:"-160",items:C}),s.jsx(Fp,{onClick:()=>m(!0),children:s.jsx(ky,{})}),a.trim()&&s.jsx(WT,{onClick:A,disabled:x,children:s.jsx(Cy,{})})]})]}):s.jsx(Pp,{children:s.jsx(VT,{children:"Select a conversation to start messaging"})})},Pp=h.div`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({theme:e})=>e.background.thirdly};
  position: relative;
  user-select: none;
  border-top: 1px solid ${({theme:e})=>e.border.secondary};
  
  @media (max-width: 1000px) {
    height: 5.5rem;
  }
`,VT=h.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.text.placeholder};
  font-size: var(--text-md);
`,XT=h.div`
  width: 100%;
  height: 100%;
  
  input {
    width: 100%;
    height: 100%;
    padding: 0 1rem;
    font-size: var(--text-md);
    background-color: transparent;
    border: none;
    outline: none;
    color: ${({theme:e})=>e.text.secondary};
    
    &::placeholder {
      color: ${({theme:e})=>e.text.placeholder};
    }
    
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`,Fp=h.div`
  padding: 0 2rem;
  color: ${({theme:e})=>e.text.thirdly};
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${({theme:e})=>e.text.primary};
  }
  
  svg {
    width: 2.3rem;
  }

  @media (max-width: 1000px) {
    padding: 0 1.5rem;
  }
`,WT=h.button`
  padding: 0 1rem;
  color: var(--blue);
  background: none;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover:not(:disabled) {
    color: var(--dark-blue);
    transform: scale(1.1);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  svg {
    width: 2.3rem;
  }

  @media (max-width: 1000px) {
    padding: 0 1.5rem;
  }
`,KT=h.div`
  width: max-content;
`,eN=h.div`
  width: max-content;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,tN=h.div`
  position: absolute;
  bottom: 7rem;
  left: 1rem;
  z-index: 100;
  box-shadow: var(--shadow-sm);
  border-radius: 0.8rem;
  overflow: hidden;
  
  /* Control visibility and interaction */
  opacity: ${({isOpen:e})=>e?1:0};
  pointer-events: ${({isOpen:e})=>e?"auto":"none"};
  transform: ${({isOpen:e})=>e?"translateY(0)":"translateY(10px)"};
  transition: opacity 0.3s ease, transform 0.3s ease;
`,nN=h.div`
  width: 100%;
`,aN=({groupId:e})=>{const[a,i]=g.useState(""),[f,c]=g.useState(!1),[d,m]=g.useState(!1),[y,b]=g.useState(!1),[x,v]=g.useState(!1),{themeMode:M}=y1(),{sendGroupMessage:j}=ja(),{socket:k}=$f(),I=g.useRef(null),S=g.useRef(null),N=g.useRef(null);g.useEffect(()=>{if(!(!k||!e))return a.trim()&&!y&&(b(!0),k.emit("typing_start_group",{groupId:e})),N.current&&clearTimeout(N.current),N.current=setTimeout(()=>{y&&(b(!1),k.emit("typing_stop_group",{groupId:e}))},2e3),()=>{N.current&&clearTimeout(N.current)}},[a,k,e,y]),g.useEffect(()=>()=>{N.current&&clearTimeout(N.current),y&&k&&e&&k.emit("typing_stop_group",{groupId:e})},[y,k,e]);const R=G=>{var F;i(me=>me+G.emoji),(F=S.current)==null||F.focus()},A=async()=>{var F;if(!a.trim()||!e||x)return;const G=a.trim();i(""),v(!0),y&&(b(!1),k&&k.emit("typing_stop_group",{groupId:e}));try{await j(e,G)}catch(me){console.error("Failed to send group message:",me),i(G)}finally{v(!1),(F=S.current)==null||F.focus()}},_=G=>{G.key==="Enter"&&!G.shiftKey&&(G.preventDefault(),A())},T=G=>{i(G.target.value)};g.useEffect(()=>{const G=F=>{I.current&&!I.current.contains(F.target)&&c(!1)};return f&&document.addEventListener("mousedown",G),()=>{document.removeEventListener("mousedown",G)}},[f]);const C=[{label:"Photos & Videos",icon:s.jsx(Ay,{}),onClick:()=>{m(!1),alert("File upload not implemented yet")}},{label:"Document",icon:s.jsx(Iy,{}),onClick:()=>{m(!1),alert("Document upload not implemented yet")}}],D=M==="light"||M==="clean-light"||M==="minimal-white"||M==="modern-sky"||M==="soft-blush"?"light":"dark";return e?s.jsxs(qp,{children:[s.jsx(oN,{children:s.jsx(Vp,{onClick:()=>c(G=>!G),children:s.jsx(Dy,{})})}),s.jsx(lN,{ref:I,isOpen:f,children:s.jsx(cN,{isOpen:f,children:s.jsx(vb,{autoFocusSearch:!1,theme:D,lazyLoadEmojis:!0,onEmojiClick:R})})}),s.jsx(iN,{children:s.jsx("input",{ref:S,type:"text",placeholder:"Type a message",value:a,onChange:T,onKeyPress:_,disabled:x})}),s.jsxs(sN,{children:[s.jsx(Ma,{onClose:()=>m(!1),isOpen:d,right:"1",top:"-160",items:C}),s.jsx(Vp,{onClick:()=>m(!0),children:s.jsx(ky,{})}),a.trim()&&s.jsx(fN,{onClick:A,disabled:x,children:s.jsx(Cy,{})})]})]}):s.jsx(qp,{children:s.jsx(rN,{children:"Select a group to start messaging"})})},qp=h.div`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({theme:e})=>e.background.thirdly};
  position: relative;
  user-select: none;
  border-top: 1px solid ${({theme:e})=>e.border.secondary};
  
  @media (max-width: 1000px) {
    height: 5.5rem;
  }
`,rN=h.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.text.placeholder};
  font-size: var(--text-md);
`,iN=h.div`
  width: 100%;
  height: 100%;
  
  input {
    width: 100%;
    height: 100%;
    padding: 0 1rem;
    font-size: var(--text-md);
    background-color: transparent;
    border: none;
    outline: none;
    color: ${({theme:e})=>e.text.secondary};
    
    &::placeholder {
      color: ${({theme:e})=>e.text.placeholder};
    }
    
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`,Vp=h.div`
  padding: 0 2rem;
  color: ${({theme:e})=>e.text.thirdly};
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${({theme:e})=>e.text.primary};
  }
  
  svg {
    width: 2.3rem;
  }

  @media (max-width: 1000px) {
    padding: 0 1.5rem;
  }
`,fN=h.button`
  padding: 0 1rem;
  color: var(--blue);
  background: none;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover:not(:disabled) {
    color: var(--dark-blue);
    transform: scale(1.1);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  svg {
    width: 2.3rem;
  }

  @media (max-width: 1000px) {
    padding: 0 1.5rem;
  }
`,oN=h.div`
  width: max-content;
`,sN=h.div`
  width: max-content;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,lN=h.div`
  position: absolute;
  bottom: 7rem;
  left: 1rem;
  z-index: 100;
  box-shadow: var(--shadow-sm);
  border-radius: 0.8rem;
  overflow: hidden;
  
  /* Control visibility and interaction */
  opacity: ${({isOpen:e})=>e?1:0};
  pointer-events: ${({isOpen:e})=>e?"auto":"none"};
  transform: ${({isOpen:e})=>e?"translateY(0)":"translateY(10px)"};
  transition: opacity 0.3s ease, transform 0.3s ease;
`,cN=h.div`
  width: 100%;
`,uN=Gt`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,dN=h.div`
  width: 20px;
  height: 20px;
  border: 3px solid ${({theme:e})=>e.text.placeholder};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${uN} 1s linear infinite;
`,fl=()=>s.jsx(dN,{}),hN=({recipientId:e})=>{var A,_,T;const{conversations:a,loadMessages:i,markAsRead:f}=er(),{user:c}=pt(),{friends:d}=xa(),m=g.useRef(null),[y,b]=g.useState(!1),[x,v]=g.useState(new Set),M=a[e],j=(A=d.find(C=>C.friendId._id===e))==null?void 0:A.friendId;g.useEffect(()=>{e&&!x.has(e)&&(i(e,1),v(C=>new Set([...C,e])))},[e,i,x]),g.useEffect(()=>{var C;((C=M==null?void 0:M.messages)==null?void 0:C.length)>0&&k()},[(_=M==null?void 0:M.messages)==null?void 0:_.length]),g.useEffect(()=>{if(!(M!=null&&M.messages)||!c||!e)return;const C=M.messages.filter(D=>D.senderId._id!==c.id&&!D.readBy.some(G=>G.userId===c.id));if(C.length>0){const D=C[C.length-1];f(D.senderId._id,D._id)}},[M==null?void 0:M.messages,c,e,f]);const k=g.useCallback(()=>{var C;(C=m.current)==null||C.scrollIntoView({behavior:"smooth"})},[]),I=g.useCallback(async()=>{if(!(!(M!=null&&M.hasMore)||y)){b(!0);try{const C=M.messages.length,D=Math.floor(C/50)+1;await i(e,D)}finally{b(!1)}}},[M==null?void 0:M.hasMore,(T=M==null?void 0:M.messages)==null?void 0:T.length,y,i,e]),S=g.useCallback(C=>new Date(C).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),[]),N=g.useCallback(C=>{const D=new Date,G=new Date(C);if(G.toDateString()===D.toDateString())return"Today";const F=new Date(D);return F.setDate(F.getDate()-1),G.toDateString()===F.toDateString()?"Yesterday":G.toLocaleDateString()},[]);if(!j)return s.jsx(gf,{children:s.jsx(Bd,{children:s.jsx(Ud,{children:"User not found"})})});if(!M&&x.has(e))return s.jsx(gf,{children:s.jsxs(Bd,{children:[s.jsx(vt,{image:j.avatar,userName:j.fullName,size:60}),s.jsxs(Xp,{children:["Start a conversation with ",j.fullName]}),s.jsx(Ud,{children:"Send a message to get the conversation started!"})]})});if(M!=null&&M.loading&&M.messages.length===0)return s.jsx(gf,{children:s.jsx(kN,{children:s.jsx(EN,{children:s.jsx(fl,{})})})});if(!(M!=null&&M.messages)||M.messages.length===0)return s.jsx(gf,{children:s.jsxs(Bd,{children:[s.jsx(vt,{image:j.avatar,userName:j.fullName,size:70}),s.jsxs(Xp,{children:["Start a conversation with ",j.fullName]}),s.jsx(Ud,{children:"Send a message to get the conversation started!"})]})});let R="";return s.jsxs(gf,{children:[M.hasMore&&s.jsx(SN,{children:s.jsx(CN,{onClick:I,disabled:y,children:y?s.jsx(fl,{}):"Load older messages"})}),s.jsx(mN,{children:M.messages.map((C,D)=>{const G=C.senderId._id===(c==null?void 0:c.id),F=N(C.createdAt),me=F!==R;R=F;const Ke=D>0?M.messages[D-1]:null,ct=D<M.messages.length-1?M.messages[D+1]:null,Ge=!Ke||Ke.senderId._id!==C.senderId._id,X=!ct||ct.senderId._id!==C.senderId._id;return s.jsxs(it.Fragment,{children:[me&&s.jsx(jN,{children:s.jsx(LN,{children:F})}),s.jsx(gN,{isOwn:G,children:s.jsxs(pN,{isOwn:G,children:[!G&&Ge&&s.jsx(yN,{children:s.jsx(vt,{image:C.senderId.avatar,userName:C.senderId.fullName,size:36})}),s.jsx(bN,{isOwn:G,children:s.jsxs(wN,{isOwn:G,hasAvatar:!G&&Ge,isLastInGroup:X,children:[s.jsx(vN,{children:C.content}),s.jsxs(xN,{isOwn:G,children:[S(C.createdAt),G&&C.readBy.length>1&&s.jsx(MN,{children:"✓✓"})]})]})})]})})]},C._id)})}),s.jsx("div",{ref:m})]})},gf=h.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.background.secondary};
`,mN=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`,gN=h.div`
  display: flex;
  justify-content: ${({isOwn:e})=>e?"flex-end":"flex-start"};
  margin-bottom: 0.3rem;
`,pN=h.div`
  display: flex;
  align-items: flex-end;
  gap: 0.8rem;
  max-width: 70%;
  flex-direction: ${({isOwn:e})=>e?"row-reverse":"row"};
  
  @media (max-width: 600px) {
    max-width: 85%;
  }
`,yN=h.div`
  flex-shrink: 0;
  align-self: flex-end;
`,bN=h.div`
  display: flex;
  flex-direction: column;
  align-items: ${({isOwn:e})=>e?"flex-end":"flex-start"};
`,wN=h.div`
  background-color: ${({isOwn:e,theme:a})=>e?"var(--blue)":a.background.thirdly};
  color: ${({isOwn:e,theme:a})=>e?"white":a.text.primary};
  padding: 0.8rem 1.2rem;
  border-radius: 1.2rem;
  word-wrap: break-word;
  position: relative;
  max-width: 50rem;
  min-width: 0;
  
  ${({isOwn:e,hasAvatar:a,isLastInGroup:i})=>e?i?"border-bottom-right-radius: 0.3rem;":"":a&&i?"border-bottom-left-radius: 0.3rem;":""}
`,vN=h.div`
  font-size: var(--text-md);
  line-height: 1.4;
  word-break: break-word;
  margin-bottom: 0.3rem;
`,xN=h.div`
  font-size: var(--text-xs);
  opacity: 0.7;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  justify-content: ${({isOwn:e})=>e?"flex-end":"flex-start"};
`,MN=h.span`
  color: #4ade80;
  font-size: var(--text-xs);
`,jN=h.div`
  display: flex;
  justify-content: center;
  margin: 1.5rem 0 1rem;
`,LN=h.div`
  background-color: ${({theme:e})=>e.background.thirdly};
  color: ${({theme:e})=>e.text.secondary};
  padding: 0.4rem 1.2rem;
  border-radius: 1.5rem;
  font-size: var(--text-sm);
  font-weight: 500;
`,SN=h.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`,CN=h.button`
  background-color: ${({theme:e})=>e.background.thirdly};
  color: ${({theme:e})=>e.text.secondary};
  border: 1px solid ${({theme:e})=>e.border.secondary};
  padding: 0.8rem 1.6rem;
  border-radius: 0.8rem;
  cursor: pointer;
  font-size: var(--text-sm);
  
  &:hover:not(:disabled) {
    background-color: ${({theme:e})=>e.background.primary};
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,Bd=h.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
`,Xp=h.h3`
  font-size: var(--text-lg);
  color: ${({theme:e})=>e.text.primary};
  font-weight: 500;
  text-align: center;
`,Ud=h.p`
  font-size: var(--text-md);
  color: ${({theme:e})=>e.text.secondary};
  text-align: center;
`,kN=h.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`,EN=h.div`
  font-size: var(--text-md);
  color: ${({theme:e})=>e.text.secondary};
`,TN=({groupId:e,conversation:a})=>{const{user:i}=pt(),{loadGroupMessages:f}=ja(),c=g.useRef(null),[d,m]=g.useState(!1);g.useEffect(()=>{y()},[a==null?void 0:a.messages]);const y=()=>{var j;(j=c.current)==null||j.scrollIntoView({behavior:"smooth"})},b=async()=>{if(!(!(a!=null&&a.hasMore)||a!=null&&a.loading||d)){m(!0);try{const j=a.messages.length,k=Math.floor(j/50)+1;await f(e,k)}catch(j){console.error("Failed to load more messages:",j)}finally{m(!1)}}},x=j=>new Date(j).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),v=j=>{const k=new Date,I=new Date(j);if(I.toDateString()===k.toDateString())return"Today";const S=new Date(k);return S.setDate(S.getDate()-1),I.toDateString()===S.toDateString()?"Yesterday":I.toLocaleDateString()};if(!a)return s.jsx(Ls,{children:s.jsx(Wp,{children:s.jsx(Kp,{children:"Loading messages..."})})});if(a.loading&&a.messages.length===0)return s.jsx(Ls,{children:s.jsx(Wp,{children:s.jsx(Kp,{children:"Loading messages..."})})});if(a.messages.length===0)return s.jsx(Ls,{children:s.jsxs(ZN,{children:[s.jsx(JN,{children:"💬"}),s.jsx(HN,{children:"Welcome to the group!"}),s.jsx(PN,{children:"Be the first to send a message in this group."})]})});let M="";return s.jsxs(Ls,{children:[a.hasMore&&s.jsx(GN,{children:s.jsx($N,{onClick:b,disabled:d||a.loading,children:d||a.loading?"Loading...":"Load older messages"})}),s.jsx(NN,{children:a.messages.map((j,k)=>{const I=j.senderId._id===(i==null?void 0:i.id),S=v(j.createdAt),N=S!==M;M=S;const R=k>0?a.messages[k-1]:null,A=k<a.messages.length-1?a.messages[k+1]:null,_=!R||R.senderId._id!==j.senderId._id,T=!A||A.senderId._id!==j.senderId._id;return s.jsxs(it.Fragment,{children:[N&&s.jsx(YN,{children:s.jsx(QN,{children:S})}),s.jsx(IN,{isOwn:I,children:s.jsxs(DN,{isOwn:I,children:[!I&&_&&s.jsx(AN,{children:s.jsx(vt,{image:j.senderId.avatar,userName:j.senderId.fullName,size:36})}),s.jsxs(zN,{isOwn:I,children:[!I&&_&&s.jsx(RN,{children:j.senderId.fullName}),s.jsxs(ON,{isOwn:I,hasAvatar:!I&&_,isLastInGroup:T,children:[s.jsx(BN,{children:j.content}),s.jsxs(UN,{isOwn:I,children:[x(j.createdAt),I&&j.readBy.length>1&&s.jsx(_N,{children:"✓✓"})]})]})]})]})})]},j._id)})}),s.jsx("div",{ref:c})]})},Ls=h.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.background.secondary};
`,NN=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`,IN=h.div`
  display: flex;
  justify-content: ${({isOwn:e})=>e?"flex-end":"flex-start"};
  margin-bottom: 0.3rem;
`,DN=h.div`
  display: flex;
  align-items: flex-end;
  gap: 0.8rem;
  max-width: 70%;
  flex-direction: ${({isOwn:e})=>e?"row-reverse":"row"};
  
  @media (max-width: 600px) {
    max-width: 85%;
  }
`,AN=h.div`
  flex-shrink: 0;
  align-self: flex-end;
`,zN=h.div`
  display: flex;
  flex-direction: column;
  align-items: ${({isOwn:e})=>e?"flex-end":"flex-start"};
  gap: 0.2rem;
  min-width: 0;
`,RN=h.div`
  font-size: var(--text-sm);
  font-weight: 600;
  color: ${({theme:e})=>e.text.primary};
  margin-bottom: 0.2rem;
  margin-left: 0.2rem;
`,ON=h.div`
  background-color: ${({isOwn:e,theme:a})=>e?"var(--blue)":a.background.thirdly};
  color: ${({isOwn:e,theme:a})=>e?"white":a.text.primary};
  padding: 0.8rem 1.2rem;
  border-radius: 1.2rem;
  word-wrap: break-word;
  position: relative;
  max-width: 50rem;
  min-width: 0;
  
  ${({isOwn:e,hasAvatar:a,isLastInGroup:i})=>e?i?"border-bottom-right-radius: 0.3rem;":"":a&&i?"border-bottom-left-radius: 0.3rem;":""}
`,BN=h.div`
  font-size: var(--text-md);
  line-height: 1.4;
  word-break: break-word;
  margin-bottom: 0.3rem;
`,UN=h.div`
  font-size: var(--text-xs);
  opacity: 0.7;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  justify-content: ${({isOwn:e})=>e?"flex-end":"flex-start"};
`,_N=h.span`
  color: #4ade80;
  font-size: var(--text-xs);
`,YN=h.div`
  display: flex;
  justify-content: center;
  margin: 1.5rem 0 1rem;
`,QN=h.div`
  background-color: ${({theme:e})=>e.background.thirdly};
  color: ${({theme:e})=>e.text.secondary};
  padding: 0.4rem 1.2rem;
  border-radius: 1.5rem;
  font-size: var(--text-sm);
  font-weight: 500;
`,GN=h.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`,$N=h.button`
  background-color: ${({theme:e})=>e.background.thirdly};
  color: ${({theme:e})=>e.text.secondary};
  border: 1px solid ${({theme:e})=>e.border.secondary};
  padding: 0.8rem 1.6rem;
  border-radius: 0.8rem;
  cursor: pointer;
  font-size: var(--text-sm);
  transition: all 0.2s ease;
  
  &:hover:not(:disabled) {
    background-color: ${({theme:e})=>e.background.primary};
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,ZN=h.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
`,JN=h.div`
  font-size: 4rem;
  margin-bottom: 1rem;
`,HN=h.h3`
  font-size: var(--text-lg);
  color: ${({theme:e})=>e.text.primary};
  font-weight: 500;
  text-align: center;
`,PN=h.p`
  font-size: var(--text-md);
  color: ${({theme:e})=>e.text.secondary};
  text-align: center;
`,Wp=h.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`,Kp=h.div`
  font-size: var(--text-md);
  color: ${({theme:e})=>e.text.secondary};
`,FN=({group:e,members:a,userRole:i,onClose:f})=>{const[c,d]=g.useState(""),[m,y]=g.useState(null),{user:b}=pt(),{removeMember:x,updateMemberRole:v}=ja(),M=i==="admin"||i==="moderator",j=i==="admin",k=a.filter(C=>C.userId.fullName.toLowerCase().includes(c.toLowerCase())||C.userId.username.toLowerCase().includes(c.toLowerCase())),I={admin:k.filter(C=>C.role==="admin"),moderator:k.filter(C=>C.role==="moderator"),member:k.filter(C=>C.role==="member")},S=async C=>{try{await x(e._id,C),y(null)}catch(D){console.error("Failed to remove member:",D)}},N=async(C,D)=>{try{await v(e._id,C,D),y(null)}catch(G){console.error("Failed to update member role:",G)}},R=C=>{const D=[];return C.userId._id===(b==null?void 0:b.id)||!M||(j&&(C.role!=="admin"&&D.push({label:"Make Admin",icon:s.jsx(bd,{}),onClick:()=>N(C.userId._id,"admin")}),C.role!=="moderator"&&C.role!=="admin"&&D.push({label:"Make Moderator",icon:s.jsx(ip,{}),onClick:()=>N(C.userId._id,"moderator")}),(C.role==="moderator"||C.role==="admin")&&D.push({label:"Remove Role",icon:s.jsx(bd,{}),onClick:()=>N(C.userId._id,"member")})),M&&!(i==="moderator"&&C.role==="admin")&&D.push({label:"Remove from Group",icon:s.jsx(r9,{}),danger:!0,onClick:()=>S(C.userId._id)})),D},A=C=>{switch(C){case"admin":return s.jsx(bd,{});case"moderator":return s.jsx(ip,{});default:return null}},_=C=>{switch(C){case"admin":return"#f59e0b";case"moderator":return"#3b82f6";default:return"inherit"}},T=(C,D,G)=>D.length===0?null:s.jsxs(rI,{children:[s.jsxs(iI,{children:[C," — ",D.length]}),s.jsx(fI,{children:D.map(F=>s.jsxs(oI,{children:[s.jsxs(sI,{children:[s.jsx(vt,{image:F.userId.avatar,userName:F.userId.fullName,status:F.userId.isOnline?"online":"offline",showStatusCircle:!0,size:36}),s.jsxs(lI,{children:[s.jsxs(cI,{children:[F.userId.fullName,F.userId._id===(b==null?void 0:b.id)&&s.jsx(uI,{children:"You"})]}),s.jsxs(dI,{children:["@",F.userId.username]})]})]}),s.jsxs(hI,{children:[F.role!=="member"&&s.jsx(mI,{color:_(F.role),children:A(F.role)}),R(F).length>0&&s.jsx(gI,{onClick:()=>y(m===F.userId._id?null:F.userId._id),children:s.jsx(jl,{})})]}),m===F.userId._id&&s.jsx(Ma,{onClose:()=>y(null),isOpen:!0,right:"0",top:"100",items:R(F)})]},F.userId._id))})]},G);return s.jsxs(s.Fragment,{children:[s.jsx(qN,{onClick:f}),s.jsxs(VN,{children:[s.jsxs(XN,{children:[s.jsxs(WN,{children:[s.jsx("h3",{children:"Members"}),s.jsx(KN,{children:a.length})]}),s.jsx(eI,{onClick:f,children:s.jsx(Nf,{})})]}),s.jsx(tI,{children:s.jsxs(nI,{children:[s.jsx(y9,{}),s.jsx("input",{type:"text",placeholder:"Search members",value:c,onChange:C=>d(C.target.value)})]})}),s.jsxs(aI,{children:[T("Admins",I.admin,"admin"),T("Moderators",I.moderator,"moderator"),T("Members",I.member,"member"),k.length===0&&s.jsx(pI,{children:s.jsx(yI,{children:c?`No members found matching "${c}"`:"No members found"})})]})]})]})},qN=h.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  
  @media (min-width: 1201px) {
    display: none;
  }
`,VN=h.div`
  width: 32rem;
  height: 100%;
  background-color: ${({theme:e})=>e.background.primary};
  border-left: 1px solid ${({theme:e})=>e.border.secondary};
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1001;
  
  @media (max-width: 1200px) {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1001;
    box-shadow: var(--shadow-lg);
  }
  
  @media (max-width: 600px) {
    width: 100%;
  }
`,XN=h.div`
  padding: 2rem;
  border-bottom: 1px solid ${({theme:e})=>e.border.secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,WN=h.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  h3 {
    font-size: var(--text-xl);
    color: ${({theme:e})=>e.text.primary};
    font-weight: 600;
    margin: 0;
  }
`,KN=h.span`
  background-color: ${({theme:e})=>e.background.thirdly};
  color: ${({theme:e})=>e.text.secondary};
  padding: 0.3rem 0.8rem;
  border-radius: 1rem;
  font-size: var(--text-sm);
  font-weight: 500;
`,eI=h.button`
  width: 3.2rem;
  height: 3.2rem;
  border: none;
  background-color: ${({theme:e})=>e.background.secondary};
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({theme:e})=>e.text.placeholder};
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${({theme:e})=>e.background.thirdly};
    color: ${({theme:e})=>e.text.primary};
  }
  
  svg {
    width: 2rem;
    height: 2rem;
  }
`,tI=h.div`
  padding: 0 2rem 2rem;
`,nI=h.div`
  position: relative;
  display: flex;
  align-items: center;
  
  svg {
    position: absolute;
    left: 1.2rem;
    width: 1.8rem;
    height: 1.8rem;
    color: ${({theme:e})=>e.text.placeholder};
    z-index: 1;
  }
  
  input {
    width: 100%;
    height: 4rem;
    padding: 0 1.2rem 0 4.2rem;
    border: 1px solid ${({theme:e})=>e.border.secondary};
    border-radius: 0.8rem;
    background-color: ${({theme:e})=>e.background.secondary};
    color: ${({theme:e})=>e.text.primary};
    font-size: var(--text-md);
    outline: none;
    transition: border-color 0.2s ease;
    
    &:focus {
      border-color: var(--blue);
    }
    
    &::placeholder {
      color: ${({theme:e})=>e.text.placeholder};
    }
  }
`,aI=h.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 2rem 2rem;
`,rI=h.div`
  margin-bottom: 2rem;
`,iI=h.h4`
  font-size: var(--text-sm);
  color: ${({theme:e})=>e.text.secondary};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0 0 1rem 0;
  padding: 0 0.5rem;
`,fI=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,oI=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 0.8rem;
  transition: background-color 0.2s ease;
  position: relative;
  
  &:hover {
    background-color: ${({theme:e})=>e.background.secondary};
  }
`,sI=h.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
  min-width: 0;
`,lI=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  min-width: 0;
`,cI=h.div`
  font-size: var(--text-md);
  color: ${({theme:e})=>e.text.primary};
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,uI=h.span`
  background-color: var(--blue);
  color: white;
  padding: 0.2rem 0.6rem;
  border-radius: 0.8rem;
  font-size: var(--text-xs);
  font-weight: 500;
  flex-shrink: 0;
`,dI=h.div`
  font-size: var(--text-sm);
  color: ${({theme:e})=>e.text.secondary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,hI=h.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,mI=h.div`
  width: 2.4rem;
  height: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({color:e})=>e};
  
  svg {
    width: 1.8rem;
    height: 1.8rem;
  }
`,gI=h.button`
  width: 3rem;
  height: 3rem;
  border: none;
  background: none;
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({theme:e})=>e.text.placeholder};
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${({theme:e})=>e.background.thirdly};
    color: ${({theme:e})=>e.text.primary};
  }
  
  svg {
    width: 1.8rem;
    height: 1.8rem;
  }
`,pI=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
`,yI=h.div`
  color: ${({theme:e})=>e.text.secondary};
  font-size: var(--text-md);
  text-align: center;
`,bI=()=>{var N;const{groupId:e}=v4(),{currentConversation:a}=er(),{friends:i}=xa(),{groups:f,groupMembers:c,groupConversations:d,loadGroupMembers:m,loadGroupMessages:y,setCurrentGroup:b,currentGroup:x}=ja(),{user:v}=pt(),[M,j]=g.useState(!1),k=g.useRef(new Set),I=g.useRef(new Set),S=!!e;if(g.useEffect(()=>{e&&e!==x?b(e):e||b(null)},[e,b,x]),g.useEffect(()=>{e&&!k.current.has(e)&&(k.current.add(e),m(e))},[e,m]),g.useEffect(()=>{if(e&&!I.current.has(e)){const R=d[e];(!R||R.messages.length===0)&&(I.current.add(e),y(e))}},[e,d,y]),S){const R=f.find(C=>C._id===e),A=c[e||""]||[],_=d[e||""];if(!R)return s.jsx(Ss,{children:s.jsx(_d,{children:s.jsxs(Yd,{children:[s.jsx(e4,{children:"🔍"}),s.jsx(Qd,{children:"Group not found"}),s.jsx(Gd,{children:"The group you're looking for doesn't exist or you don't have access to it."})]})})});const T=A.find(C=>C.userId._id===(v==null?void 0:v.id));return A.length>0&&!T?s.jsx(Ss,{children:s.jsx(_d,{children:s.jsxs(Yd,{children:[s.jsx(e4,{children:"🚫"}),s.jsx(Qd,{children:"Access Denied"}),s.jsx(Gd,{children:"You are not a member of this group."})]})})}):s.jsxs(Ss,{children:[s.jsxs(vI,{showSidebar:M,children:[s.jsx(m8,{group:R,memberCount:A.length,userRole:(T==null?void 0:T.role)||"member",onToggleMembersSidebar:()=>j(!M)}),s.jsx(TN,{groupId:e,conversation:_}),s.jsx(aN,{groupId:e})]}),M&&s.jsx(FN,{group:R,members:A,userRole:(T==null?void 0:T.role)||"member",onClose:()=>j(!1)})]})}else{const R=a?(N=i.find(A=>A.friendId._id===a))==null?void 0:N.friendId:null;return!a||!R?s.jsx(Ss,{children:s.jsx(_d,{children:s.jsxs(Yd,{children:[s.jsx("svg",{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 66.59 63.66",width:70,height:70,children:s.jsx(xI,{d:"M50,70.82c-.13-.51-.28-1.13-.47-1.74A29,29,0,0,0,45,60.79a70.83,70.83,0,0,0-5.71-6.41,59.7,59.7,0,0,1-9.34-12.16c-.37-.67-.69-1.37-1.06-2.1-.06.12-.12.21-.17.31a39.53,39.53,0,0,0-3.13,10A25.62,25.62,0,0,0,27.66,66a32.27,32.27,0,0,0,7.45,9.79A52.47,52.47,0,0,0,43,81.64l.21.14c-1.85.11-8.38-2.61-11.73-4.86a33.27,33.27,0,0,1-9-9,32.14,32.14,0,0,1-5-11.7,33.2,33.2,0,0,1,21-38c-.55.66-1.10,1.29-1.61,1.95a14.4,14.4,0,0,0-2.76,5.58A11.27,11.27,0,0,0,34.93,33a39,39,0,0,0,6.27,9.26C42.88,44.15,44.63,46,46.26,48a20.22,20.22,0,0,1,3.67,6.42s0,.05.07.09c.29-.67.54-1.34.85-2a30.15,30.15,0,0,1,5-7A79.35,79.35,0,0,0,62,38.22a28.19,28.19,0,0,0,3.49-6.28,10.94,10.94,0,0,0-1-9.84c-.82-1.38-1.86-2.63-2.7-3.81C72.49,21.9,83.66,33.71,83.28,50.08a33.12,33.12,0,0,1-26.5,31.75l1.84-1.2a42.78,42.78,0,0,0,11-10.08,25.92,25.92,0,0,0,4.94-11.64A28.44,28.44,0,0,0,73.38,46c-.62-2-1.4-3.93-2.11-5.89l-.2-.06a1,1,0,0,1,0,.18A40.08,40.08,0,0,1,65.43,49c-2.17,2.71-4.57,5.21-7,7.71a35.26,35.26,0,0,0-7,10.05C50.83,68.11,50.42,69.52,50,70.82Z",transform:"translate(-16.71 -18.17)"})}),s.jsx(Qd,{children:"Welcome to Mendam"}),s.jsx(Gd,{children:"Select a conversation from the sidebar to start chatting with your friends."})]})})}):s.jsxs(wI,{children:[s.jsx(L7,{recipient:R}),s.jsx(hN,{recipientId:a}),s.jsx(qT,{recipientId:a})]})}},Ss=h.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: ${({theme:e})=>e.background.secondary};
`,wI=h.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.background.secondary};
`,vI=h.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  
  ${({showSidebar:e})=>e&&`
    @media (max-width: 1200px) {
      display: none;
    }
  `}
`,_d=h.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e})=>e.background.secondary};
`,Yd=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  max-width: 40rem;
  text-align: center;
  padding: 2rem;
`,e4=h.div`
  font-size: 4rem;
  margin-bottom: 1rem;
`,Qd=h.h2`
  font-size: var(--text-xxl);
  color: ${({theme:e})=>e.text.placeholder};
  font-weight: 600;
  margin: 0;
`,Gd=h.p`
  font-size: var(--text-md);
  color: ${({theme:e})=>e.text.placeholder};
  line-height: 1.6;
  margin: 0;
`,xI=h.path`
  fill: ${({theme:e})=>e.text.placeholder};
`,MI=()=>s.jsxs(jI,{children:[s.jsxs(LI,{children:[s.jsxs(SI,{children:[s.jsx(Uy,{}),s.jsx(CI,{children:s.jsx(x4,{})})]}),s.jsx(n3,{})]}),s.jsx(kI,{children:s.jsx(bI,{})})]}),jI=h.div`
  width: 100%;
  display: flex;
`,LI=h.div`
width: 100%;
    max-width: 47rem;
  height: 100svh;
  /* position: sticky; */
  /* left: 0; */
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.background.primary};

  @media (max-width: 1200px) {
    max-width: 40rem;
  }
  @media (max-width: 1000px) {
    max-width: 35rem;
  }
  @media (max-width: 850px) {
    max-width: 32rem;
  }
  @media (max-width: 700px) {
    max-width: unset;
  }
`,SI=h.div`
  min-height: calc(100% - 100px);
  max-height: calc(100% - 100px);

   @media (max-width: 1000px) {
    min-height: calc(100% - 81.6px);
    max-height: calc(100% -  81.6px);
  }
   @media (max-width: 700px) {
    min-height: calc(100% - 67.4px);
    max-height: calc(100% -  67.4px);
  }
  display: flex;
`,CI=h.div`
  width: 100%;
  height: 100%;
  background-color: ${({theme:e})=>e.background.primary};
  border-left: 1px solid ${({theme:e})=>e.border.primary};
  border-bottom: 1px solid ${({theme:e})=>e.border.primary};
  border-bottom-left-radius: 8px;
`,kI=h.div`
  width: 100%;
  height: 100svh;
  background-color: ${({theme:e})=>e.background.secondary};
  border-left: 1px solid ${({theme:e})=>e.border.primary};
  /* display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  svg {
    fill: ${({theme:e})=>e.background.thirdly};
  }
  span {
    color: ${({theme:e})=>e.text.placeholder};
    font-size: var(--text-md);
  } */
   @media (max-width: 700px) {
    display: none;
  }
`,Db=g.createContext(void 0),EI=({children:e})=>{const[a,i]=g.useState(!1);return s.jsx(Db.Provider,{value:{openSettings:a,setOpenSettings:i},children:e})},qf=()=>{const e=g.useContext(Db);if(!e)throw new Error("useMainContent must be used within a MainContentProvider");return e},TI=()=>{const e=ol(),{setOpenSettings:a}=qf(),i=()=>{a&&a(!0)};return s.jsx(s.Fragment,{children:s.jsx(NI,{children:s.jsx(II,{children:s.jsxs(AI,{children:[s.jsx(DI,{children:s.jsx("h4",{children:"Settings"})}),s.jsxs(zI,{children:[s.jsx($d,{onClick:i,isActive:e.pathname==="/app/settings/profile",children:s.jsxs(De,{to:"profile",children:[s.jsx(Hs,{children:s.jsx(Oy,{})}),s.jsx(Ps,{children:s.jsx("span",{children:"Profile"})})]})}),s.jsx($d,{onClick:i,isActive:e.pathname==="/app/settings/account",children:s.jsxs(De,{to:"account",children:[s.jsx(Hs,{children:s.jsx(Tf,{})}),s.jsx(Ps,{children:s.jsx("span",{children:"Account"})})]})}),s.jsx($d,{onClick:i,isActive:e.pathname==="/app/settings/appearance",children:s.jsxs(De,{to:"appearance",children:[s.jsx(Hs,{children:s.jsx(k9,{})}),s.jsx(Ps,{children:s.jsx("span",{children:"Appearance"})})]})})]})]})})})})},NI=h.div`
  width: 100%;
  height: 100%;
  background-color: ${({theme:e})=>e.background.primary};
  border-left: 1px solid ${({theme:e})=>e.border.primary};
  @media (max-width: 700px) {
    border-bottom-left-radius: 0.8rem;
    border-bottom: 1px solid ${({theme:e})=>e.border.primary};
  }
    @media (min-width: 700px) {

      padding: 2rem 1.5rem;
    }
`,II=h.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,DI=h.div`
  padding-bottom: 3rem;
  @media (max-width: 700px) {
      padding: 2rem 1.5rem 3rem;
    }
  h4 {
    color: ${({theme:e})=>e.text.primary};
    font-size: var(--text-xl);
    font-weight: 400;
  }
`,AI=h.div`
  width: 100%;
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: space-between;
`,zI=h.div`
  width: 100%;
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 0.8rem;
`,Hs=h.div`
  color: ${({theme:e})=>e.text.secondary};
  display: flex;
  align-items: center;
  svg {
    width: 2rem;
  }
`,Ps=h.div`
  color: ${({theme:e})=>e.text.secondary};
  span {
    font-size: var(--text-md);
  }
`,$d=h.div`
  width: 100%;

  a {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    border-radius: 0.8rem;
    padding: 1.1rem 1rem;
    
    @media (min-width: 700px) {
      ${({isActive:e,theme:a})=>e&&`
          ${Hs} {
            color: var(--blue);
          }
          ${Ps} {
            color: var(--blue);
          }
          background-color: ${a.background.secondary};
        `}
  
      &:hover {
        background-color: ${({theme:e})=>e.background.secondary};
      }
  }
  @media (max-width: 700px) {
    border-radius: 0;
      &:active {
        background-color: ${({theme:e})=>e.background.secondary};
      }
    }
  }
`,RI=({})=>{const{openSettings:e}=qf();return s.jsx(s.Fragment,{children:s.jsxs(OI,{children:[s.jsxs(BI,{children:[s.jsxs(UI,{children:[s.jsx(Uy,{}),s.jsx(TI,{})]}),window.innerWidth<=700&&s.jsx(n3,{})]}),s.jsx(_I,{isOpen:e,children:s.jsx(x4,{})})]})})},OI=h.div`
  width: 100%;
  height: 100svh;
  display: flex;
  overflow: hidden;
  background-color: ${({theme:e})=>e.background.primary};
`,BI=h.div`
  width: 100%;
  max-width: 47rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
@media (max-width: 1200px) {
    max-width: 40rem;
  }
  @media (max-width: 1000px) {
    max-width: 35rem;
  }
  @media (max-width: 850px) {
    max-width: 32rem;
  }
  @media (max-width: 700px) {
    max-width: unset;
  }
`,UI=h.div`
height: 100%;
   @media (max-width: 700px) {
    min-height: calc(100% - 67.4px);
    max-height: calc(100% -  67.4px);
  }
  display: flex;
  overflow: hidden;

`,_I=h.div`
  width: 100%;
  height: 98%;
  background-color: ${({theme:e})=>e.background.secondary};
  border-left: 1px solid ${({theme:e})=>e.border.secondary};
  border-bottom: 1px solid ${({theme:e})=>e.border.secondary};
  border-bottom-left-radius: 0.8rem;
  overflow: auto;
   @media (max-width: 700px) {
    position: fixed;
    top: 0;
    right: ${({isOpen:e})=>e?"0":"-100%"};
    width: 100%;
    height: 100%;
    z-index: 1234567890987654321234567890;
    border: none;
    transition: right .3s ease;
  }
  /* overflow: hidden; */
`,Zn=({value:e,placeholder:a="Search for",onInputChange:i})=>{const f=c=>{i&&i(c.target.value)};return s.jsx(s.Fragment,{children:s.jsxs(YI,{children:[s.jsx(QI,{children:s.jsx("input",{type:"text",placeholder:a,value:e||"",onChange:f})}),s.jsx(GI,{children:s.jsx(Q0,{})})]})})},YI=h.div`
  width: 100%;
  height: 4.5rem;
  overflow: hidden;
  border-radius: 0.8rem;
  background-color: ${({theme:e})=>e.background.secondary};
  border: 1px solid ${({theme:e})=>e.border.primary};
  display: flex;
  align-items: center;
`,QI=h.div`
  width: 100%;
  height: 100%;
  input {
    padding: 0 0 0 1.5rem;
    width: 100%;
    height: 100%;
    background: transparent;
    outline: none;
    border: none;
    color: ${({theme:e})=>e.text.primary};
    &::placeholder {
      color: ${({theme:e})=>e.text.placeholder};
    }
  }
`,GI=h.div`
  color: ${({theme:e})=>e.text.placeholder};
  padding: 1.5rem;
  display: flex;
  align-items: center;
  
  svg {
    width: 2.1rem;
    margin-left: 1.5rem;
  }
`,Jn=({title:e,heading:a})=>s.jsx(s.Fragment,{children:s.jsx($I,{children:s.jsx(ZI,{as:a,children:e})})}),$I=h.div`
  width: max-content;
`,ZI=h.h1`
  color: ${({theme:e})=>e.text.primary};
  line-height: 1;
  font-weight: 500;
  font-size: ${({fontSize:e})=>e?`var(--text-${e})`:"var(--text-xl)"};
`,JI=({})=>{const[e,a]=g.useState(null),[i,f]=g.useState(null),[c,d]=g.useState(""),{friends:m,loading:y}=xa(),{conversations:b,currentConversation:x,setCurrentConversation:v,loadMessages:M}=er(),{user:j}=pt(),k=D=>{f(i===D?null:D)},I=()=>{f(null)},S=[{label:"Add to favorite",icon:s.jsx(S9,{}),onClick:()=>{I()}},{label:"Clear messages",icon:s.jsx($0,{}),onClick:()=>{I()}},{label:"Delete",icon:s.jsx(zy,{}),danger:!0,onClick:()=>{I(),alert("Delete functionality")}}],R=m.map(D=>{const G=D.friendId._id,F=b[G],me=F==null?void 0:F.messages[F.messages.length-1],Ke=(F==null?void 0:F.messages.filter(ct=>ct.senderId._id!==(j==null?void 0:j.id)&&!ct.readBy.some(Ge=>Ge.userId===(j==null?void 0:j.id))).length)||0;return{id:G,userName:D.friendId.fullName,avatar:D.friendId.avatar,status:D.friendId.isOnline?"online":"offline",lastMessage:(me==null?void 0:me.content)||"No messages yet",lastMessageTime:me?C(new Date(me.createdAt)):"",unreadCount:Ke>0?Ke:void 0}}).filter(D=>D.userName.toLowerCase().includes(c.toLowerCase())),A=D=>{a(D)},_=()=>{a(null)},T=async D=>{try{v(D);const G=b[D];(!G||G.messages.length===0)&&await M(D,1)}catch(G){console.error("❌ Failed to load conversation:",G)}};function C(D){const F=Math.floor((new Date().getTime()-D.getTime())/(1e3*60));if(F<1)return"now";if(F<60)return`${F}m`;const me=Math.floor(F/60);if(me<24)return`${me}h`;const Ke=Math.floor(me/24);return Ke<7?`${Ke}d`:`${Math.floor(Ke/7)}w`}return y&&m.length===0?s.jsxs(t4,{children:[s.jsxs(n4,{children:[s.jsx(Jn,{title:"Direct Messages",heading:"h3"}),s.jsx(Zn,{placeholder:"Search or start a new conversation"})]}),s.jsx(nD,{children:s.jsx(aD,{children:"Loading conversations..."})})]}):s.jsx(s.Fragment,{children:s.jsxs(t4,{children:[s.jsxs(n4,{children:[s.jsx(Jn,{title:"Direct Messages",heading:"h3"}),s.jsx(Zn,{placeholder:"Search or start a new conversation",value:c,onInputChange:d})]}),R.length===0?s.jsx(rD,{children:s.jsx(iD,{children:c?`No conversations found matching "${c}"`:"No conversations yet. Add some friends to start chatting!"})}):s.jsx(HI,{children:R.map(D=>s.jsxs(PI,{children:[s.jsxs(FI,{onClick:()=>T(D.id),onMouseEnter:()=>A(D.id),onMouseLeave:_,isActive:x===D.id,children:[s.jsxs(qI,{children:[s.jsx(vt,{image:D.avatar,status:D.status,userName:D.userName,showStatusCircle:!0,size:35}),s.jsxs(VI,{children:[s.jsxs(XI,{hasUnread:!!D.unreadCount,children:[D.userName,D.unreadCount&&s.jsx(KI,{children:D.unreadCount})]}),s.jsxs(WI,{children:[D.lastMessage.substring(0,40),D.lastMessage.length>40?"...":""]})]})]}),e!==D.id&&D.lastMessageTime&&s.jsx(eD,{children:s.jsx("span",{children:D.lastMessageTime})}),e===D.id&&s.jsx(tD,{onClick:G=>{G.stopPropagation(),k(D.id)},children:s.jsx(jl,{})})]}),s.jsx("div",{onClick:G=>G.stopPropagation(),children:s.jsx(Ma,{onClose:()=>f(null),isOpen:i===D.id,right:"1",items:S})})]},D.id))})]})})},t4=h.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding-bottom: 0.5rem;
`,n4=h.div`
  background-color: ${({theme:e})=>e.background.primary};
  position: sticky;
  top: 0;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 20;
  @media (max-width: 1000px) {
    padding: 1.5rem 1rem;
  }
  @media (max-width: 700px) {
    padding: 2rem 1.5rem;
  }
`,HI=h.div`
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 3px;
  @media (max-width: 1000px) {
    padding: 0;
  }
`,PI=h.div`
  width: 100%;
  position: relative;
`,FI=h.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease-in;
  text-decoration: none;
  color: inherit;
  background-color: ${({isActive:e,theme:a})=>e?a.background.secondary:"transparent"};
  
  @media (max-width: 1000px) {
    padding: 1rem;
    border-radius: 0;
  }
  @media (max-width: 700px) {
    padding: 1rem 1.5rem;
    &:active {
      background-color: ${({theme:e})=>e.background.thirdly}; 
    }
  }
  @media (min-width: 700px) {
    &:hover {
      background-color: ${({theme:e,isActive:a})=>a?e.background.secondary:e.background.thirdly};
    }
  }
`,qI=h.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
  min-width: 0;
`,VI=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
  min-width: 0;
`,XI=h.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: ${({hasUnread:e})=>e?"500":"400"};
  font-size: var(--text-base);
  color: ${({hasUnread:e,theme:a})=>e?a.text.primary:a.text.thirdly};
  @media (max-width: 1000px) {
    font-size: var(--text-sm);
  }
`,WI=h.div`
  width: 90%;
  font-size: var(--text-sm);
  color: ${({theme:e})=>e.text.secondary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,KI=h.span`
  background-color: var(--blue);
  color: var(--light);
  font-size: var(--text-xs);
  font-weight: 500;
  padding: 0.125rem 0.375rem;
  border-radius: 10px;
  min-width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`,eD=h.div`
  flex-shrink: 0;
  span {
    font-size: var(--text-sm);
    color: ${({theme:e})=>e.text.placeholder};
  }
`,tD=h.div`
  flex-shrink: 0;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3rem;
  &:hover {
    background-color: ${({theme:e})=>e.background.thirdly};
  }
  svg {
    color: ${({theme:e})=>e.text.placeholder};
    width: 2rem;
    height: 2rem;
  }
`,nD=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
`,aD=h.div`
  color: ${({theme:e})=>e.text.secondary};
  font-size: var(--text-md);
`,rD=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
`,iD=h.div`
  color: ${({theme:e})=>e.text.secondary};
  font-size: var(--text-md);
  text-align: center;
`,Vr=({onClick:e})=>s.jsx(s.Fragment,{children:s.jsx(fD,{onClick:e,children:s.jsx(R5,{})})}),fD=h.div`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 0.8rem;
  /* box-shadow: var(--shadow-sm); */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--blue);
  color: var(--light);
  cursor: pointer;
  padding: 0 1rem;
  &:hover {
    background-color: var(--dark-blue);
    svg {
      rotate: 90deg;
    }
  }
  svg {
    width: 2.5rem;
    transition: all 0.2s ease-in-out;
  }
`,Zd=({title:e,onClose:a,isOpen:i})=>{const[f,c]=g.useState(""),[d,m]=g.useState([]),[y,b]=g.useState(!1),[x,v]=g.useState(new Set),[M,j]=g.useState(""),{searchUsers:k,sendFriendRequest:I,friends:S}=xa(),N=new Set(S.map(T=>T.friendId._id)),R=async()=>{if(!f.trim()){m([]);return}b(!0),j("");try{const C=(await k(f.trim())).filter(D=>!N.has(D._id));m(C)}catch(T){j(T.message||"Failed to search users"),m([])}finally{b(!1)}},A=async T=>{try{j(""),await I(T),v(C=>new Set([...C,T]))}catch(C){j(C.message||"Failed to send friend request")}};g.useEffect(()=>{i&&(c(""),m([]),v(new Set),j(""))},[i]);const _=T=>{T.key==="Enter"&&R()};return s.jsx(Gf,{title:e,onClose:a,isOpen:i,children:s.jsxs(oD,{children:[s.jsx(sD,{children:s.jsxs(lD,{children:[s.jsx(cD,{children:s.jsx("input",{type:"text",placeholder:"Search for friend by username or name",value:f,onChange:T=>c(T.target.value),onKeyPress:_,disabled:y})}),s.jsx(uD,{onClick:R,disabled:y,children:s.jsx(Q0,{})})]})}),M&&s.jsx(dD,{children:M}),s.jsxs(hD,{children:[s.jsx(mD,{children:s.jsx("h6",{children:y?"Searching...":d.length>0?`Found ${d.length} user${d.length!==1?"s":""}:`:f.trim()?"No users found":"Enter a username or name to search"})}),d.length>0&&s.jsx(gD,{children:d.map(T=>s.jsx(pD,{children:s.jsxs(yD,{children:[s.jsx(vt,{image:T.avatar,userName:T.fullName,showUserName:!0,size:35,bg:!0}),s.jsx(bD,{children:s.jsxs(wD,{children:["@",T.username]})}),s.jsx(vD,{children:x.has(T._id)?s.jsxs(MD,{children:[s.jsx(Sy,{}),s.jsx("span",{children:"Request Sent"})]}):s.jsxs(xD,{onClick:()=>A(T._id),children:[s.jsx(G0,{}),s.jsx("span",{children:"Add Friend"})]})})]})},T._id))})]}),s.jsx(jD,{children:s.jsx(wt,{variant:"cancel",title:"Close",onClick:a})})]})})},oD=h.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,sD=h.div`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 3456;
  background-color: ${({theme:e})=>e.background.thirdly};
`,lD=h.div`
  width: 100%;
  height: 4.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`,cD=h.div`
  width: 100%;
  height: 100%;
  background-color: ${({theme:e})=>e.background.secondary};
  border-radius: 0.8rem;
  border: 1px solid ${({theme:e})=>e.border.secondary};
  
  input {
    padding: 0 1.5rem;
    width: 100%;
    height: 100%;
    background: transparent;
    outline: none;
    border: none;
    color: ${({theme:e})=>e.text.primary};
    font-size: var(--text-md);
    
    &::placeholder {
      color: ${({theme:e})=>e.text.placeholder};
    }
    
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`,uD=h.button`
  color: var(--light);
  width: 7rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({disabled:e})=>e?"#999":"var(--blue)"};
  border: 1px solid transparent;
  border-radius: 0.8rem;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  transition: background-color 0.2s ease;
  
  &:hover:not(:disabled) {
    background-color: var(--dark-blue);
  }
  
  svg {
    width: 2.1rem;
  }
`,dD=h.div`
  background-color: #fee2e2;
  border: 1px solid #fecaca;
  color: #dc2626;
  padding: 1rem 1.5rem;
  border-radius: 0.8rem;
  font-size: var(--text-sm);
  text-align: center;
`,hD=h.div`
  width: 100%;
`,mD=h.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 1.5rem;
  
  h6 {
    line-height: 1;
    font-weight: 500;
    color: ${({theme:e})=>e.text.secondary};
    font-size: var(--text-md);
  }
`,gD=h.div`
  display: flex;
  flex-direction: column;
  max-height: 40rem;
  overflow-y: auto;
`,pD=h.div`
  width: 100%;
  
  &:not(:last-child) {
    border-bottom: 1px solid ${({theme:e})=>e.border.secondary};
  }
`,yD=h.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;
  gap: 1rem;
`,bD=h.div`
  flex: 1;
  min-width: 0;
`,wD=h.div`
  font-size: var(--text-sm);
  color: ${({theme:e})=>e.text.placeholder};
  margin-top: 0.3rem;
`,vD=h.div`
  display: flex;
  align-items: center;
`,xD=h.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.2rem;
  background-color: var(--blue);
  color: white;
  border: none;
  border-radius: 0.6rem;
  cursor: pointer;
  font-size: var(--text-sm);
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: var(--dark-blue);
  }
  
  svg {
    width: 1.6rem;
  }
`,MD=h.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.2rem;
  background-color: ${({theme:e})=>e.background.secondary};
  color: ${({theme:e})=>e.text.secondary};
  border: 1px solid ${({theme:e})=>e.border.secondary};
  border-radius: 0.6rem;
  font-size: var(--text-sm);
  
  svg {
    width: 1.6rem;
    color: var(--success-500);
  }
`,jD=h.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 1rem;
  border-top: 1px solid ${({theme:e})=>e.border.secondary};
`,LD=({})=>{const[e,a]=g.useState(!1),[i,f]=g.useState(""),[c,d]=g.useState(null),{friends:m,loading:y,error:b,loadFriends:x,removeFriend:v,blockUser:M}=xa(),{setCurrentConversation:j}=er(),k=Uf();g.useEffect(()=>{x()},[]);const I=()=>{a(!1)},S=T=>{j(T),k("/app/@me")},N=async T=>{try{await v(T),d(null)}catch(C){console.error("Failed to remove friend:",C)}},R=async T=>{try{await M(T),d(null)}catch(C){console.error("Failed to block user:",C)}},A=T=>[{label:"Start Chat",icon:s.jsx(ap,{}),onClick:()=>{S(T),d(null)}},{label:"Remove Friend",icon:s.jsx($0,{}),onClick:()=>N(T)},{label:"Block User",icon:s.jsx(T5,{}),danger:!0,onClick:()=>R(T)}],_=m.filter(T=>T.friendId.fullName.toLowerCase().includes(i.toLowerCase())||T.friendId.username.toLowerCase().includes(i.toLowerCase()));return y&&m.length===0?s.jsxs(Jd,{children:[s.jsxs(Hd,{children:[s.jsx(Jn,{title:"Friends",heading:"h3"}),s.jsxs(Pd,{children:[s.jsx(Zn,{placeholder:"Search for people"}),s.jsx(Vr,{onClick:()=>a(!0)})]})]}),s.jsx(TD,{children:s.jsx(ND,{children:"Loading friends..."})}),s.jsx(Zd,{title:"Add new friend",onClose:I,isOpen:e})]}):b?s.jsxs(Jd,{children:[s.jsxs(Hd,{children:[s.jsx(Jn,{title:"Friends",heading:"h3"}),s.jsxs(Pd,{children:[s.jsx(Zn,{placeholder:"Search for people"}),s.jsx(Vr,{onClick:()=>a(!0)})]})]}),s.jsxs(ID,{children:[s.jsxs(DD,{children:["Failed to load friends: ",b]}),s.jsx(AD,{onClick:x,children:"Retry"})]}),s.jsx(Zd,{title:"Add new friend",onClose:I,isOpen:e})]}):s.jsxs(Jd,{children:[s.jsxs(Hd,{children:[s.jsx(Jn,{title:"Friends",heading:"h3"}),s.jsxs(Pd,{children:[s.jsx(Zn,{placeholder:"Search for people",value:i,onInputChange:T=>f(T)}),s.jsx(Vr,{onClick:()=>a(!0)})]})]}),_.length===0?s.jsx(zD,{children:s.jsx(RD,{children:i?`No friends found matching "${i}"`:"No friends yet. Add some friends to start chatting!"})}):s.jsx(SD,{children:_.map(T=>s.jsxs(CD,{children:[s.jsxs(kD,{children:[s.jsx(vt,{image:T.friendId.avatar,status:T.friendId.isOnline?"online":"offline",userName:T.friendId.fullName,showStatusCircle:!0,showUserName:!0,size:35}),s.jsxs(ED,{children:[s.jsx(a4,{onClick:()=>S(T.friendId._id),children:s.jsx(ap,{})}),s.jsx(a4,{onClick:()=>d(c===T.friendId._id?null:T.friendId._id),children:s.jsx(jl,{})})]})]}),s.jsx("div",{onClick:C=>C.stopPropagation(),children:s.jsx(Ma,{onClose:()=>d(null),isOpen:c===T.friendId._id,right:"1",items:A(T.friendId._id)})})]},T._id))}),s.jsx(Zd,{title:"Add new friend",onClose:I,isOpen:e})]})},Jd=h.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding-bottom: 1rem;
  position: relative;
`,Hd=h.div`
  background-color: ${({theme:e})=>e.background.primary};
  position: sticky;
  top: 0;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 20;
  @media (max-width: 1000px) {
    padding: 1.5rem 1rem;
  }
  @media (max-width: 700px) {
    padding: 2rem 1.5rem;
  }
`,Pd=h.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  @media (max-width: 1000px) {
    gap: 1rem;
  }
  @media (max-width: 700px) {
    gap: 1.5rem;
  }
`,SD=h.div`
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 1000px) {
    padding: 0;
  }
`,CD=h.div`
  width: 100%;
  position: relative;
`,kD=h.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.1s ease-in-out;
  @media (max-width: 1000px) {
    padding: 1rem;
    border-radius: 0;
  }
  @media (max-width: 700px) {
    padding: 1rem 1.5rem;
    &:active {
      background-color: ${({theme:e})=>e.background.thirdly};
    }
  }
  @media (min-width: 700px) {
    &:hover {
      background-color: ${({theme:e})=>e.background.secondary};
    }
  }
`,ED=h.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,a4=h.div`
  width: 3rem;
  height: 3rem;
  border-radius: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.text.placeholder};
  &:hover {
    background-color: ${({theme:e})=>e.background.thirdly};
    color: ${({theme:e})=>e.text.secondary};
  }
  svg {
    width: 2rem;
    color: inherit;
  }
`,TD=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
`,ND=h.div`
  color: ${({theme:e})=>e.text.secondary};
  font-size: var(--text-md);
`,ID=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  gap: 1rem;
`,DD=h.div`
  color: ${({theme:e})=>e.text.secondary};
  font-size: var(--text-md);
  text-align: center;
`,AD=h.button`
  padding: 0.8rem 1.6rem;
  background-color: var(--blue);
  color: white;
  border: none;
  border-radius: 0.8rem;
  cursor: pointer;
  font-size: var(--text-sm);
  
  &:hover {
    background-color: var(--dark-blue);
  }
`,zD=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
`,RD=h.div`
  color: ${({theme:e})=>e.text.secondary};
  font-size: var(--text-md);
  text-align: center;
`,Fd=({title:e,onClose:a,isOpen:i})=>{const[f,c]=g.useState({name:"",description:"",isPrivate:!1,maxMembers:100}),[d,m]=g.useState({}),[y,b]=g.useState(!1),{createGroup:x}=ja(),v=()=>{const S={};return f.name.trim()?f.name.length<3?S.name="Group name must be at least 3 characters":f.name.length>100&&(S.name="Group name cannot exceed 100 characters"):S.name="Group name is required",f.description&&f.description.length>500&&(S.description="Description cannot exceed 500 characters"),f.maxMembers<2?S.maxMembers="Group must allow at least 2 members":f.maxMembers>1e3&&(S.maxMembers="Group cannot exceed 1000 members"),m(S),Object.keys(S).length===0},M=S=>{const{name:N,value:R,type:A}=S.target,_=S.target.checked;c(T=>({...T,[N]:A==="checkbox"?_:A==="number"?parseInt(R)||0:R})),d[N]&&m(T=>({...T,[N]:""}))},j=async S=>{if(S.preventDefault(),!!v()){b(!0);try{await x(f.name.trim(),f.description.trim()||void 0,f.isPrivate),c({name:"",description:"",isPrivate:!1,maxMembers:100}),m({}),a()}catch(N){m({general:N.message||"Failed to create group"})}finally{b(!1)}}},k=()=>{y||(c({name:"",description:"",isPrivate:!1,maxMembers:100}),m({}),a())},I=f.name.trim().length>=3&&Object.keys(d).length===0;return s.jsx(Gf,{title:e,onClose:k,isOpen:i,children:s.jsx(OD,{children:s.jsxs("form",{onSubmit:j,children:[d.general&&s.jsx(BD,{children:d.general}),s.jsxs(UD,{htmlFor:"upload-group-image",children:[s.jsx(Ab,{children:s.jsx(Z0,{})}),s.jsx(_D,{children:s.jsx("span",{children:"Add group image (optional)"})}),s.jsx("input",{type:"file",id:"upload-group-image",name:"upload-group-image",accept:"image/*",disabled:y})]}),s.jsxs(qd,{children:[s.jsx(Vd,{htmlFor:"group-name",children:"Group name *"}),s.jsx(r4,{placeholder:"Enter group name",type:"text",name:"name",id:"group-name",value:f.name,onChange:M,disabled:y,hasError:!!d.name}),d.name&&s.jsx(Xd,{children:d.name})]}),s.jsxs(qd,{children:[s.jsx(Vd,{htmlFor:"group-description",children:"Description (optional)"}),s.jsx(YD,{placeholder:"What's this group about?",name:"description",id:"group-description",value:f.description,onChange:M,disabled:y,rows:3,hasError:!!d.description}),d.description&&s.jsx(Xd,{children:d.description})]}),s.jsxs(QD,{children:[s.jsxs(GD,{children:[s.jsxs($D,{children:[s.jsxs(ZD,{children:[s.jsx(JD,{isPrivate:f.isPrivate,children:f.isPrivate?s.jsx(C5,{}):s.jsx(j5,{})}),f.isPrivate?"Private Group":"Public Group"]}),s.jsx(HD,{children:f.isPrivate?"Only invited members can join this group":"Anyone can discover and join this group"})]}),s.jsxs(PD,{children:[s.jsx("input",{type:"checkbox",name:"isPrivate",checked:f.isPrivate,onChange:M,disabled:y}),s.jsx(FD,{})]})]}),s.jsxs(qd,{children:[s.jsx(Vd,{htmlFor:"max-members",children:"Maximum members (2-1000)"}),s.jsx(r4,{type:"number",name:"maxMembers",id:"max-members",value:f.maxMembers,onChange:M,disabled:y,min:"2",max:"1000",hasError:!!d.maxMembers}),d.maxMembers&&s.jsx(Xd,{children:d.maxMembers})]})]}),s.jsx(qD,{children:s.jsxs(VD,{children:[s.jsx(wt,{onClick:k,variant:"cancel",type:"button",title:"Cancel",disabled:y}),s.jsx(wt,{variant:"primary",type:"submit",title:y?"Creating...":"Create Group",disabled:y||!I})]})})]})})})},OD=h.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,BD=h.div`
  background-color: #fee2e2;
  border: 1px solid #fecaca;
  color: #dc2626;
  padding: 1rem 1.5rem;
  border-radius: 0.8rem;
  font-size: var(--text-sm);
  text-align: center;
`,Ab=h.div`
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  background-color: ${({theme:e})=>e.background.primary};
  border: 1.5px solid ${({theme:e})=>e.border.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.text.placeholder};
  transition: all 0.2s ease;
  
  svg {
    width: 2.4rem;
  }
`,UD=h.label`
  width: max-content;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  cursor: pointer;
  
  input {
    display: none;
  }
  
  &:hover ${Ab} {
    background-color: ${({theme:e})=>e.background.secondary};
    border-color: var(--blue);
  }
`,_D=h.div`
  span {
    line-height: 1;
    font-size: var(--text-md);
    color: ${({theme:e})=>e.text.secondary};
  }
`,qd=h.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Vd=h.label`
  font-size: var(--text-md);
  line-height: 1;
  color: ${({theme:e})=>e.text.secondary};
  font-weight: 500;
`,r4=h.input`
  padding: 0 1.5rem;
  width: 100%;
  height: 4.5rem;
  border-radius: 0.8rem;
  background-color: ${({theme:e})=>e.background.secondary};
  border: 1px solid ${({hasError:e,theme:a})=>e?"#ef4444":a.border.secondary};
  outline: none;
  color: ${({theme:e})=>e.text.primary};
  font-size: var(--text-md);
  transition: border-color 0.2s ease;
  
  &:focus {
    border-color: ${({hasError:e})=>e?"#ef4444":"var(--blue)"};
  }
  
  &::placeholder {
    color: ${({theme:e})=>e.text.placeholder};
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,YD=h.textarea`
  padding: 1rem 1.5rem;
  width: 100%;
  border-radius: 0.8rem;
  background-color: ${({theme:e})=>e.background.secondary};
  border: 1px solid ${({hasError:e,theme:a})=>e?"#ef4444":a.border.secondary};
  outline: none;
  color: ${({theme:e})=>e.text.primary};
  font-size: var(--text-md);
  font-family: inherit;
  resize: vertical;
  transition: border-color 0.2s ease;
  
  &:focus {
    border-color: ${({hasError:e})=>e?"#ef4444":"var(--blue)"};
  }
  
  &::placeholder {
    color: ${({theme:e})=>e.text.placeholder};
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,Xd=h.span`
  color: #ef4444;
  font-size: var(--text-xs);
  margin-top: 0.4rem;
`,QD=h.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
  background-color: ${({theme:e})=>e.background.secondary};
  border-radius: 0.8rem;
  border: 1px solid ${({theme:e})=>e.border.secondary};
`,GD=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`,$D=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
`,ZD=h.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: var(--text-md);
  font-weight: 500;
  color: ${({theme:e})=>e.text.primary};
`,JD=h.div`
  width: 2rem;
  height: 2rem;
  color: ${({isPrivate:e})=>e?"#f59e0b":"#10b981"};
  
  svg {
    width: 100%;
    height: 100%;
  }
`,HD=h.div`
  font-size: var(--text-sm);
  color: ${({theme:e})=>e.text.secondary};
  line-height: 1.4;
`,PD=h.label`
  position: relative;
  display: inline-block;
  width: 4.4rem;
  height: 2.4rem;
  cursor: pointer;
  
  input {
    opacity: 0;
    width: 0;
    height: 0;
    
    &:checked + span {
      background-color: var(--blue);
    }
    
    &:checked + span:before {
      transform: translateX(2rem);
    }
  }
`,FD=h.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({theme:e})=>e.background.thirdly};
  transition: 0.2s;
  border-radius: 2.4rem;
  
  &:before {
    position: absolute;
    content: "";
    height: 1.8rem;
    width: 1.8rem;
    left: 0.3rem;
    bottom: 0.3rem;
    background-color: white;
    transition: 0.2s;
    border-radius: 50%;
  }
`,qD=h.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  padding-top: 1rem;
  border-top: 1px solid ${({theme:e})=>e.border.secondary};
`,VD=h.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`,i4=({})=>{const[e,a]=g.useState(!1),[i,f]=g.useState(""),[c,d]=g.useState(null),{groupId:m}=v4(),y=Uf(),{groups:b,loading:x,error:v,loadGroups:M,leaveGroup:j,setCurrentGroup:k,currentGroup:I}=ja();g.useEffect(()=>{M()},[]),g.useEffect(()=>{m&&k(m)},[m,k]);const S=()=>{a(!1)},N=T=>{k(T),y(`/app/groups/${T}`)},R=async T=>{try{await j(T),d(null),I===T&&(k(null),y("/app/groups"))}catch(C){console.error("Failed to leave group:",C)}},A=T=>[{label:"Group Settings",icon:s.jsx(Tf,{}),onClick:()=>{d(null),alert("Group settings not implemented yet")}},{label:"Leave Group",icon:s.jsx(Ty,{}),danger:!0,onClick:()=>R(T)}],_=b.filter(T=>T.name.toLowerCase().includes(i.toLowerCase()));return x&&b.length===0?s.jsxs(Wd,{children:[s.jsxs(Kd,{children:[s.jsx(Jn,{title:"Groups",heading:"h3"}),s.jsxs(e0,{children:[s.jsx(Zn,{placeholder:"Search for groups"}),s.jsx(Vr,{onClick:()=>a(!0)})]})]}),s.jsx(dA,{children:s.jsx(hA,{children:"Loading groups..."})}),s.jsx(Fd,{title:"Create new group",onClose:S,isOpen:e})]}):v?s.jsxs(Wd,{children:[s.jsxs(Kd,{children:[s.jsx(Jn,{title:"Groups",heading:"h3"}),s.jsxs(e0,{children:[s.jsx(Zn,{placeholder:"Search for groups"}),s.jsx(Vr,{onClick:()=>a(!0)})]})]}),s.jsxs(mA,{children:[s.jsxs(gA,{children:["Failed to load groups: ",v]}),s.jsx(pA,{onClick:M,children:"Retry"})]}),s.jsx(Fd,{title:"Create new group",onClose:S,isOpen:e})]}):s.jsxs(Wd,{children:[s.jsxs(Kd,{children:[s.jsx(Jn,{title:"Groups",heading:"h3"}),s.jsxs(e0,{children:[s.jsx(Zn,{placeholder:"Search for groups",value:i,onInputChange:T=>f(T)}),s.jsx(Vr,{onClick:()=>a(!0)})]})]}),_.length===0?s.jsxs(sA,{children:[s.jsx(lA,{children:s.jsx(Ry,{})}),s.jsx(cA,{children:i?`No groups found matching "${i}"`:"No groups yet. Create a group to start collaborating!"}),!i&&s.jsx(uA,{onClick:()=>a(!0),children:"Create Your First Group"})]}):s.jsx(XD,{children:_.map(T=>s.jsxs(WD,{children:[s.jsxs(KD,{onClick:()=>N(T._id),isActive:I===T._id||m===T._id,children:[s.jsx(eA,{children:T.avatar?s.jsx(vt,{image:T.avatar,userName:T.name,size:40,isGroup:!0}):s.jsx(tA,{children:s.jsx(Ml,{})})}),s.jsxs(nA,{children:[s.jsx(aA,{children:T.name}),s.jsxs(rA,{children:[T.memberCount||0," member",(T.memberCount||0)!==1?"s":"",T.isPrivate&&s.jsx(iA,{children:"Private"})]})]}),s.jsx(fA,{onClick:C=>C.stopPropagation(),children:s.jsx(oA,{onClick:()=>d(c===T._id?null:T._id),children:s.jsx(jl,{})})})]}),s.jsx("div",{onClick:C=>C.stopPropagation(),children:s.jsx(Ma,{onClose:()=>d(null),isOpen:c===T._id,right:"1",items:A(T._id)})})]},T._id))}),s.jsx(Fd,{title:"Create new group",onClose:S,isOpen:e})]})},Wd=h.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding-bottom: 1rem;
  position: relative;
`,Kd=h.div`
  background-color: ${({theme:e})=>e.background.primary};
  position: sticky;
  top: 0;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 20;
  @media (max-width: 1000px) {
    padding: 1.5rem 1rem;
  }
  @media (max-width: 700px) {
    padding: 2rem 1.5rem;
  }
`,e0=h.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  @media (max-width: 1000px) {
    gap: 1rem;
  }
  @media (max-width: 700px) {
    gap: 1.5rem;
  }
`,XD=h.div`
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 1000px) {
    padding: 0;
  }
`,WD=h.div`
  width: 100%;
  position: relative;
`,KD=h.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  background-color: ${({isActive:e,theme:a})=>e?a.background.secondary:"transparent"};
  
  @media (max-width: 1000px) {
    padding: 1.2rem 1rem;
    border-radius: 0;
  }
  @media (max-width: 700px) {
    padding: 1.2rem 1.5rem;
    &:active {
      background-color: ${({theme:e})=>e.background.thirdly};
    }
  }
  @media (min-width: 700px) {
    &:hover {
      background-color: ${({theme:e})=>e.background.secondary};
    }
  }
`,eA=h.div`
  flex-shrink: 0;
`,tA=h.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.background.thirdly};
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 2rem;
    height: 2rem;
    color: ${({theme:e})=>e.text.primary};
  }
`,nA=h.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-left: 1rem;
  min-width: 0;
`,aA=h.h4`
  font-size: var(--text-md);
  color: ${({theme:e})=>e.text.primary};
  font-weight: 500;
  margin: 0;
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,rA=h.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: var(--text-sm);
  color: ${({theme:e})=>e.text.secondary};
`,iA=h.span`
  background-color: var(--blue);
  color: white;
  padding: 0.2rem 0.6rem;
  border-radius: 1rem;
  font-size: var(--text-xs);
  font-weight: 500;
`,fA=h.div`
  display: flex;
  align-items: center;
`,oA=h.div`
  width: 3rem;
  height: 3rem;
  border-radius: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.text.placeholder};
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${({theme:e})=>e.background.thirdly};
    color: ${({theme:e})=>e.text.secondary};
  }
  
  svg {
    width: 2rem;
    color: inherit;
  }
`,sA=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  gap: 1.5rem;
`,lA=h.div`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.background.thirdly};
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 3rem;
    height: 3rem;
    color: ${({theme:e})=>e.text.placeholder};
  }
`,cA=h.div`
  color: ${({theme:e})=>e.text.secondary};
  font-size: var(--text-md);
  text-align: center;
  line-height: 1.5;
`,uA=h.button`
  padding: 1rem 2rem;
  background-color: var(--blue);
  color: white;
  border: none;
  border-radius: 0.8rem;
  cursor: pointer;
  font-size: var(--text-md);
  font-weight: 500;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: var(--dark-blue);
  }
`,dA=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
`,hA=h.div`
  color: ${({theme:e})=>e.text.secondary};
  font-size: var(--text-md);
`,mA=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  gap: 1rem;
`,gA=h.div`
  color: ${({theme:e})=>e.text.secondary};
  font-size: var(--text-md);
  text-align: center;
`,pA=h.button`
  padding: 0.8rem 1.6rem;
  background-color: var(--blue);
  color: white;
  border: none;
  border-radius: 0.8rem;
  cursor: pointer;
  font-size: var(--text-sm);
  
  &:hover {
    background-color: var(--dark-blue);
  }
`,yA=()=>{const[e]=g.useState({id:"234567834567",name:"Heisenberg",teams:[{id:"34567876543",name:"Frontend Team",channels:[{id:"chan-fe-gen",name:"general"},{id:"chan-fe-ui",name:"ui-design"},{id:"chan-fe-bugs",name:"bug-reports"}]},{id:"456787654567",name:"Backend Team",channels:[{id:"chan-be-gen",name:"general"},{id:"chan-be-api",name:"api-development"},{id:"chan-be-db",name:"database"}]},{id:"789012345678",name:"DevOps Team",channels:[{id:"chan-do-gen",name:"general"},{id:"chan-do-deploy",name:"deployment"},{id:"chan-do-test",name:"testing"}]}]}),[a,i]=g.useState(()=>{try{const c=localStorage.getItem("o-c");return c?JSON.parse(c):(e==null?void 0:e.teams.map(d=>d.id))||[]}catch(c){return console.warn("Error reading from localStorage:",c),(e==null?void 0:e.teams.map(d=>d.id))||[]}}),f=c=>{i(d=>{const m=d.includes(c)?d.filter(y=>y!==c):[...d,c];try{localStorage.setItem("o-c",JSON.stringify(m))}catch(y){console.warn("Error saving to localStorage:",y)}return m})};return s.jsxs(bA,{children:[s.jsxs(wA,{children:[s.jsx(Jn,{title:`${e==null?void 0:e.name}`,heading:"h3"}),s.jsx(Zn,{placeholder:"Search in Heisenberg group"})]}),s.jsx(vA,{children:s.jsx(xA,{children:e==null?void 0:e.teams.map(c=>s.jsxs(jA,{children:[s.jsxs(SA,{onClick:()=>f(c.id),children:[s.jsxs(LA,{children:[s.jsx(CA,{children:s.jsx("span",{children:c.name})}),s.jsx(Cs,{children:s.jsx(yS,{})})]}),s.jsxs(MA,{children:[s.jsx(Cs,{children:s.jsx(Tf,{})}),s.jsx(Cs,{children:s.jsx(wS,{})})]})]}),a.includes(c.id)&&s.jsx(kA,{children:s.jsx(EA,{children:c.channels.map(d=>s.jsx(TA,{children:s.jsxs(NA,{children:[s.jsxs(f4,{children:[s.jsx(Ml,{}),s.jsx("span",{children:d.name})]}),s.jsx(f4,{children:s.jsx(Cs,{children:s.jsx(Tf,{})})})]})},d.id))})})]},c.id))})})]})},bA=h.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`,wA=h.div`
  background-color: ${({theme:e})=>e.background.primary};
  position: sticky;
  top: 0;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 20;
`,vA=h.div`
  /* width: 100%; */
  border-top: 0.5px solid ${({theme:e})=>e.border.primary};
  margin: 0 1.5rem 1.5rem 1.5rem;
  padding-top: 1.5rem;
`,xA=h.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,MA=h.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  svg {
    visibility: hidden;
    &:hover {
      color: ${({theme:e})=>e.text.primary};
    }
  }
`,jA=h.li`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: ${({theme:e})=>e.background.secondary};
  overflow: hidden;
  &:hover svg {
    visibility: visible;
  }
`,LA=h.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`,Cs=h.div`
  color: ${({theme:e})=>e.text.thirdly};
  display: flex;
  align-items: center;
  svg {
    width: 1.5rem;
    transition: rotate 0.2s ease;
  }
`,SA=h.div`
  width: 100%;
  background-color: ${({theme:e})=>e.background.thirdly};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  cursor: pointer;
  svg {
    rotate: 180deg;
  }
`,CA=h.div`
  span {
    font-size: var(--text-md);
    color: ${({theme:e})=>e.text.thirdly};
  }
  svg {
    width: 2rem;
  }
`,kA=h.div`
  padding: 0.8rem;
`,EA=h.ul`
  display: flex;
  flex-direction: column;
  /* gap: 1.5rem; */
`,TA=h.li`
  list-style-type: none;
`,NA=h.a`
  width: 100%;
  padding: 1rem 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: ${({theme:e})=>e.background.primary};
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.3rem;
  span {
    font-size: var(--text-sm);
    color: ${({theme:e})=>e.text.thirdly};
  }
  svg {
    width: 1.5rem;
    color: ${({theme:e})=>e.text.thirdly};
    &:last-child {
      visibility: hidden;
      &:hover {
        color: ${({theme:e})=>e.text.primary};
      }
    }
  }
  &:hover svg {
    visibility: visible;
  }
`,f4=h.a`
  width: max-content;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`,b1=({title:e,onClick:a})=>s.jsx(s.Fragment,{children:s.jsxs(IA,{children:[s.jsx(DA,{onClick:a,children:s.jsx(W5,{})}),s.jsx(AA,{children:s.jsx("h3",{children:e})})]})}),IA=h.div`
width: 100%;
display: grid;
grid-template-columns: repeat(8, 1fr);
  padding: 3rem;
  padding-bottom: 2rem;
   @media (max-width: 700px) {
    padding: 2rem 2rem 1rem 1rem;
  }
/* padding-bottom: 5rem; */

`,DA=h.div`
width: 4rem;
height: 4rem;
border-radius: 100%;
grid-column: span 1 / span 1;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
&:active {
    background-color: ${({theme:e})=>e.background.thirdly};
}
svg {
    width: 2.5rem;
    color: ${({theme:e})=>e.text.secondary};
}
@media (min-width: 700px) {
    display: none;
  }
`,AA=h.div`
width: 100%;
grid-column: span 6 / span 6;
display: flex;
align-items: center;
justify-content: center;
@media (min-width: 700px) {
    justify-content: start;
  }
  h3 {
    font-weight: 500;
    font-size: var(--text-xxl);
    line-height: 1;
    color: ${({theme:e})=>e.text.primary};
    @media (max-width: 600px) {
    font-size: var(--text-xl);
  }
  }
`,zA=({})=>{const{setOpenSettings:e}=qf(),a=()=>{e&&e(!1)};return s.jsx(s.Fragment,{children:s.jsxs(RA,{children:[s.jsx(b1,{onClick:a,title:"Account"}),s.jsxs(OA,{children:[s.jsxs(s4,{children:[s.jsx(o4,{children:s.jsx("h5",{children:"Password"})}),s.jsx(l4,{children:s.jsx(wt,{variant:"primary",title:"Change password",type:"button"})})]}),s.jsxs(s4,{children:[s.jsxs(o4,{children:[s.jsx("h5",{children:"Account Removal"}),s.jsx("p",{children:"Disabling your account means you can recover it at any time after taking this action."})]}),s.jsxs(l4,{children:[s.jsx(wt,{variant:"danger",title:"Disable Account",type:"button"}),s.jsx(wt,{variant:"danger",title:"Delete Account",type:"button"})]})]})]})]})})},RA=h.div`
  width: 100%;
`,OA=h.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  gap: 3rem;
  padding: 3rem;
   @media (max-width: 700px) {
    padding: 2rem;
  }
`,o4=h.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  h5 {
    font-weight: 500;
    font-size: var(--text-lg);
    line-height: 1;
    color: ${({theme:e})=>e.text.secondary};
  }
  p {
    font-weight: 500;
    font-size: var(--text-md);
    line-height: 1;
    color: ${({theme:e})=>e.text.placeholder};
    padding-top: 0.7rem;
  }
`,s4=h.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,l4=h.div`
  width: 100%;
  display: flex;
  gap: 1.5rem;
`,BA=()=>{const{setOpenSettings:e}=qf(),{user:a,updateUser:i}=pt(),[f,c]=g.useState(!1),[d,m]=g.useState(""),[y,b]=g.useState(""),[x,v]=g.useState({fullName:(a==null?void 0:a.fullName)||"",jobTitle:(a==null?void 0:a.jobTitle)||"",biography:(a==null?void 0:a.biography)||""}),[M,j]=g.useState(!1);g.useEffect(()=>{if(a){const R={fullName:a.fullName,jobTitle:a.jobTitle||"",biography:a.biography||""};v(R)}},[a]),g.useEffect(()=>{if(a){const R=x.fullName!==a.fullName||x.jobTitle!==(a.jobTitle||"")||x.biography!==(a.biography||"");j(R)}},[x,a]);const k=()=>{e&&e(!1)},I=R=>{const{name:A,value:_}=R.target;v(T=>({...T,[A]:_})),m(""),b("")},S=async R=>{var A,_;R.preventDefault(),c(!0),m(""),b("");try{const T=await xf.updateProfile(x);i(T.data.user),b("Profile updated successfully!"),j(!1)}catch(T){m(((_=(A=T.response)==null?void 0:A.data)==null?void 0:_.message)||"Failed to update profile")}finally{c(!1)}},N=()=>{a&&(v({fullName:a.fullName,jobTitle:a.jobTitle||"",biography:a.biography||""}),j(!1),m(""),b(""))};return a?s.jsxs(UA,{children:[s.jsx(b1,{onClick:k,title:"Profile"}),s.jsxs(_A,{children:[s.jsxs(GA,{children:[s.jsx(YA,{children:s.jsxs(QA,{htmlFor:"upload-image",children:[s.jsx(Z0,{}),s.jsx("span",{children:"Update Avatar"}),s.jsx("input",{type:"file",name:"upload-image",id:"upload-image"})]})}),s.jsx("form",{onSubmit:S,children:s.jsxs($A,{children:[d&&s.jsx(c4,{type:"error",children:d}),y&&s.jsx(c4,{type:"success",children:y}),s.jsxs(t0,{children:[s.jsx(n0,{htmlFor:"fullName",children:"Display Name"}),s.jsx(u4,{type:"text",name:"fullName",id:"fullName",value:x.fullName,onChange:I,placeholder:"Display Name",disabled:f,required:!0})]}),s.jsxs(t0,{children:[s.jsx(n0,{htmlFor:"jobTitle",children:"Job Title"}),s.jsx(u4,{type:"text",name:"jobTitle",id:"jobTitle",value:x.jobTitle,onChange:I,placeholder:"Job Title",disabled:f})]}),s.jsxs(t0,{children:[s.jsx(n0,{htmlFor:"biography",children:"Bio"}),s.jsx(ZA,{name:"biography",id:"biography",value:x.biography,onChange:I,placeholder:"Tell us about yourself...",disabled:f})]}),s.jsx(KA,{children:s.jsxs(ez,{children:[s.jsx(wt,{onClick:N,variant:"cancel",type:"button",title:"Cancel",disabled:f||!M}),s.jsx(wt,{variant:"primary",type:"submit",title:f?"Updating...":"Update",disabled:f||!M})]})})]})})]}),s.jsx(JA,{children:s.jsx(HA,{children:s.jsxs(PA,{children:[s.jsxs(FA,{children:[s.jsx(VA,{children:a.avatar?s.jsx("img",{src:a.avatar,alt:a.fullName}):s.jsx(XA,{children:a.fullName.charAt(0).toUpperCase()})}),s.jsx(qA,{})]}),s.jsxs(WA,{children:[s.jsx("h4",{children:x.fullName||a.fullName}),s.jsxs("span",{children:["@",a.username]})]})]})})})]})]}):s.jsx("div",{children:"Loading..."})},UA=h.div`
  width: 100%;
`,_A=h.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  padding: 3rem;
  
  @media (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (max-width: 700px) {
    padding: 2rem;
  }
`,c4=h.div`
  padding: 1rem 1.5rem;
  border-radius: 0.8rem;
  font-size: var(--text-sm);
  font-weight: 500;
  
  ${({type:e})=>e==="error"&&`
    background-color: #fee2e2;
    border: 1px solid #fecaca;
    color: #dc2626;
  `}
  
  ${({type:e})=>e==="success"&&`
    background-color: #d1fae5;
    border: 1px solid #a7f3d0;
    color: #065f46;
  `}
`,YA=h.div`
  width: 100%;
  padding-bottom: 2rem;
`,QA=h.label`
  width: 100%;
  height: 20rem;
  background-color: ${({theme:e})=>e.background.primary};
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.6rem;
  font-size: var(--text-md);
  color: ${({theme:e})=>e.text.placeholder};
  font-weight: 500;
  border: 1px solid ${({theme:e})=>e.border.secondary};
  cursor: pointer;
  transition: all 0.2s ease;
  
  svg {
    width: 5rem;
    color: ${({theme:e})=>e.text.placeholder};
  }
  
  input {
    display: none;
  }
  
  &:hover {
    background-color: ${({theme:e})=>e.background.thirdly};
    svg {
      color: ${({theme:e})=>e.text.thirdly};
    }
  }
`,GA=h.div`
  width: 100%;
`,$A=h.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,t0=h.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,n0=h.label`
  line-height: 1;
  font-size: var(--text-md);
  color: ${({theme:e})=>e.text.secondary};
  font-weight: 500;
`,u4=h.input`
  padding: 0 1.5rem;
  width: 100%;
  height: 4.5rem;
  border-radius: 0.8rem;
  background-color: ${({theme:e})=>e.background.thirdly};
  border: 1px solid ${({theme:e})=>e.border.secondary};
  outline: none;
  color: ${({theme:e})=>e.text.primary};
  font-size: var(--text-md);
  transition: all 0.2s ease;
  
  &:focus {
    border-color: var(--blue);
    box-shadow: 0 0 0 3px rgba(36, 146, 194, 0.1);
  }
  
  &::placeholder {
    color: ${({theme:e})=>e.text.placeholder};
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,ZA=h.textarea`
  padding: 1.5rem;
  width: 100%;
  height: 10rem;
  border-radius: 0.8rem;
  background-color: ${({theme:e})=>e.background.thirdly};
  border: 1px solid ${({theme:e})=>e.border.secondary};
  outline: none;
  color: ${({theme:e})=>e.text.primary};
  resize: vertical;
  font-size: var(--text-md);
  font-family: inherit;
  transition: all 0.2s ease;
  
  &:focus {
    border-color: var(--blue);
    box-shadow: 0 0 0 3px rgba(36, 146, 194, 0.1);
  }
  
  &::placeholder {
    color: ${({theme:e})=>e.text.placeholder};
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,JA=h.div`
  width: 100%;
  height: max-content;
  background-color: ${({theme:e})=>e.background.primary};
  border: 1px solid ${({theme:e})=>e.border.secondary};
  border-radius: 0.8rem;
  overflow: hidden;
  
  @media (max-width: 1000px) {
    display: none;
  }
`,HA=h.div`
  width: 100%;
  height: 10rem;
  background: var(--blue);
  position: relative;
  margin-bottom: 14rem;
`,PA=h.div`
  position: absolute;
  top: 5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`,FA=h.div`
  width: 11rem;
  height: 11rem;
  border-radius: 100%;
  background-color: ${({theme:e})=>e.background.primary};
  padding: 1rem;
  position: relative;
`,qA=h.div`
  width: 135%;
  height: 4rem;
  border-radius: 3rem;
  background-color: ${({theme:e})=>e.background.primary};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
`,VA=h.div`
  width: 100%;
  height: 100%;
  background-color: ${({theme:e})=>e.background.secondary};
  border-radius: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`,XA=h.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-xxxl);
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, var(--blue), #764ba2);
`,WA=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
  
  h4 {
    font-size: var(--text-xl);
    line-height: 1;
    color: ${({theme:e})=>e.text.primary};
    font-weight: 500;
  }
  
  span {
    font-size: var(--text-md);
    line-height: 1;
    color: ${({theme:e})=>e.text.secondary};
  }
`,KA=h.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
`,ez=h.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`,tz={"minimal-white":jb,"glass-night":Tb,light:xb,"clean-light":Mb,"modern-sky":Lb,"soft-blush":Sb,dark:p1,"clean-dark":Cb,"modern-charcoal":kb,"neo-dark":Eb},nz=()=>{const{themeMode:e,switchTheme:a}=y1(),{setOpenSettings:i}=qf(),f=()=>{i&&i(!0)};return s.jsxs(az,{children:[s.jsx(b1,{onClick:f,title:"Appearance"}),s.jsx(rz,{children:s.jsxs(fz,{children:[s.jsxs(iz,{children:[s.jsx("h5",{children:"Theme"}),s.jsx("p",{children:"Adjust the color of the interface for better visibility."})]}),s.jsx(oz,{children:s.jsx(sz,{children:Object.entries(tz).map(([c,d])=>s.jsx(lz,{onClick:()=>a(c),selected:e===c,mode:d.background.primary,title:c,children:e===c&&s.jsx(cz,{children:s.jsx(mS,{})})},c))})})]})})]})},az=h.div`
  width: 100%;
`,rz=h.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 3rem;
   @media (max-width: 700px) {
    padding: 2rem;
  }
`,iz=h.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  h5 {
    font-weight: 500;
    font-size: var(--text-lg);
    line-height: 1;
    color: ${({theme:e})=>e.text.secondary};
  }
  p {
    font-weight: 500;
    font-size: var(--text-md);
    line-height: 1;
    color: ${({theme:e})=>e.text.placeholder};
    padding-top: 0.7rem;
  }
`,fz=h.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,oz=h.div`
  width: 40rem;
  display: flex;
  gap: 1.5rem;
  @media (max-width: 700px) {
    width: 100%;
  }
`,sz=h.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.5rem;
  padding-top: 1rem;
  @media (max-width: 700px) {
      justify-content: center;
  gap: 1rem;

    }
`,lz=h.div`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 100%;
  background-color: ${({mode:e})=>e};
  border: ${({selected:e})=>e?"3px":"1px"} solid
    ${({selected:e})=>e?"var(--blue)":({theme:a})=>a.border.primary};
  position: relative;
  cursor: pointer;
  &:hover {
    border-color: var(--blue);
  }
`,cz=h.div`
  position: absolute;
  top: -4px;
  right: -8px;
  width: 2rem;
  height: 2rem;
  background-color: var(--blue);
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 1.4rem;
    color: var(--light);
  }
`,uz=({})=>s.jsx(s.Fragment,{children:s.jsxs(dz,{children:[s.jsx(hz,{children:s.jsx("h3",{children:"Languages"})}),s.jsx(mz,{})]})}),dz=h.div`
  width: 100%;
`,hz=h.div`
  width: 100%;
  padding-bottom: 5rem;
  h3 {
    font-weight: 500;
    font-size: var(--text-xxl);
    line-height: 1;
    color: ${({theme:e})=>e.text.primary};
  }
`,mz=h.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`,gz=({})=>s.jsx(s.Fragment,{children:s.jsxs(pz,{children:[s.jsx(yz,{children:s.jsx("h3",{children:"Notifications"})}),s.jsx(bz,{})]})}),pz=h.div`
  width: 100%;
`,yz=h.div`
  width: 100%;
  padding-bottom: 5rem;
  h3 {
    font-weight: 500;
    font-size: var(--text-xxl);
    line-height: 1;
    color: ${({theme:e})=>e.text.primary};
  }
`,bz=h.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`,wz=()=>{const[e,a]=g.useState(""),[i,f]=g.useState(""),[c,d]=g.useState(!1),[m,y]=g.useState(""),[b,x]=g.useState(!1),{login:v}=pt(),M=Uf(),j=async k=>{var I,S;k.preventDefault(),y(""),x(!0);try{await v({email:e,password:i}),M("/app/@me")}catch(N){y(((S=(I=N.response)==null?void 0:I.data)==null?void 0:S.message)||"Login failed. Please try again.")}finally{x(!1)}};return s.jsx(vz,{children:s.jsx(xz,{children:s.jsxs(Mz,{children:[s.jsxs(jz,{children:[s.jsx(ml,{}),s.jsxs(Lz,{children:[s.jsx("h1",{children:"Welcome back!"}),s.jsx("p",{children:"We're so excited to see you again!"})]})]}),s.jsxs(Sz,{onSubmit:j,children:[m&&s.jsx(Cz,{children:s.jsx("span",{children:m})}),s.jsxs(d4,{children:[s.jsxs(h4,{htmlFor:"email",children:["Email ",s.jsx("span",{children:"*"})]}),s.jsx(m4,{type:"email",id:"email",value:e,onChange:k=>a(k.target.value),required:!0,disabled:b,placeholder:"Enter your email"})]}),s.jsxs(d4,{children:[s.jsxs(h4,{htmlFor:"password",children:["Password ",s.jsx("span",{children:"*"})]}),s.jsxs(kz,{children:[s.jsx(m4,{type:c?"text":"password",id:"password",value:i,onChange:k=>f(k.target.value),required:!0,disabled:b,placeholder:"Enter your password"}),s.jsx(Ez,{type:"button",onClick:()=>d(!c),disabled:b,children:c?s.jsx(y0,{}):s.jsx(b0,{})})]})]}),s.jsx(Tz,{children:s.jsx(De,{to:"/forgot-password",children:"Forgot your password?"})}),s.jsx(Nz,{children:b?s.jsxs(Iz,{children:[s.jsx(fl,{}),s.jsx("span",{children:"Signing in..."})]}):s.jsx(wt,{full:!0,type:"submit",variant:"primary",title:"Log In",disabled:b||!e||!i})}),s.jsxs(Dz,{children:["Need an account? ",s.jsx(De,{to:"/auth/register",children:"Register"})]})]})]})})})},vz=h.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--blue) 0%, #320460 100%);
  padding: 2rem;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background-image: url("/assets/auth__lines-bg.png");
    background-position: center;
    background-size: cover;
    opacity: .5;
  }
`,xz=h.div`
  width: 100%;
  max-width: 480px;
  position: relative;
  z-index: 45678;
`,Mz=h.div`
  background-color: ${({theme:e})=>e.background.secondary};
  border-radius: 1.6rem;
  padding: 3rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  border: 1px solid ${({theme:e})=>e.border.primary};

  @media (max-width: 600px) {
    padding: 3rem 2rem;
    border-radius: 1.2rem;
  }
`,jz=h.div`
  text-align: center;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`,Lz=h.div`
  h1 {
    font-size: var(--text-xl);
    color: ${({theme:e})=>e.text.primary};
    font-weight: 600;
    margin-bottom: 0.5rem;
    line-height: 1.2;
  }
  p {
    font-size: var(--text-base);
    color: ${({theme:e})=>e.text.secondary};
    line-height: 1.4;
  }
`,Sz=h.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Cz=h.div`
  background-color: #fee2e2;
  border: 1px solid #fecaca;
  color: #dc2626;
  padding: 1rem 1.5rem;
  border-radius: 0.8rem;
  font-size: var(--text-sm);
  text-align: center;
`,d4=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`,h4=h.label`
  font-size: var(--text-sm);
  font-weight: 600;
  color: ${({theme:e})=>e.text.thirdly};
  text-transform: capitalize;
  letter-spacing: 0.5px;

  span {
    color: #ef4444;
  }
`,m4=h.input`
  width: 100%;
  height: 4.5rem;
  padding: 0 1.5rem;
  border: 1px solid ${({theme:e})=>e.border.secondary};
  border-radius: 0.8rem;
  background-color: ${({theme:e})=>e.background.primary};
  color: ${({theme:e})=>e.text.primary};
  font-size: var(--text-md);
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--blue);
    /* box-shadow: 0 0 0 3px rgba(36, 146, 194, 0.1); */
  }

  &::placeholder {
    color: ${({theme:e})=>e.text.placeholder};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,kz=h.div`
  position: relative;
  display: flex;
  align-items: center;
`,Ez=h.button`
  position: absolute;
  right: 1.5rem;
  background: none;
  border: none;
  color: ${({theme:e})=>e.text.placeholder};
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${({theme:e})=>e.text.secondary};
  }

  svg {
    width: 2rem;
    height: 2rem;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,Tz=h.div`

  a {
    color: var(--blue);
    text-decoration: none;
    font-size: var(--text-base);
    font-weight: 500;
    &:hover {
      text-decoration: underline;
    }
  }
`,Nz=h.div`
  margin-top: 1rem;
`,Iz=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  color: ${({theme:e})=>e.text.secondary};

  span {
    font-size: var(--text-md);
  }
`,Dz=h.div`
  color: ${({theme:e})=>e.text.secondary};
  font-size: var(--text-base);
  a {
    color: var(--blue);
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`,Az=()=>{const[e,a]=g.useState({username:"",email:"",fullName:"",password:"",confirmPassword:""}),[i,f]=g.useState(!1),[c,d]=g.useState(!1),[m,y]=g.useState({}),[b,x]=g.useState(!1),{register:v}=pt(),M=Uf(),j=()=>{const N={};return e.username?e.username.length<3?N.username="Username must be at least 3 characters":e.username.length>20?N.username="Username cannot exceed 20 characters":/^[a-zA-Z0-9_]+$/.test(e.username)||(N.username="Username can only contain letters, numbers, and underscores"):N.username="Username is required",e.email?/^\S+@\S+\.\S+$/.test(e.email)||(N.email="Please enter a valid email address"):N.email="Email is required",e.fullName?e.fullName.length>50&&(N.fullName="Full name cannot exceed 50 characters"):N.fullName="Full name is required",e.password?e.password.length<8&&(N.password="Password must be at least 8 characters"):N.password="Password is required",e.confirmPassword?e.password!==e.confirmPassword&&(N.confirmPassword="Passwords do not match"):N.confirmPassword="Please confirm your password",y(N),Object.keys(N).length===0},k=N=>{const{name:R,value:A}=N.target;a(_=>({..._,[R]:A})),m[R]&&y(_=>({..._,[R]:""}))},I=async N=>{var R,A;if(N.preventDefault(),!!j()){x(!0);try{const{confirmPassword:_,...T}=e;await v(T),M("/app/@me")}catch(_){(A=(R=_.response)==null?void 0:R.data)!=null&&A.message?y({general:_.response.data.message}):y({general:"Registration failed. Please try again."})}finally{x(!1)}}},S=Object.values(e).every(N=>N.trim()!=="")&&e.password===e.confirmPassword&&Object.keys(m).length===0;return s.jsx(zz,{children:s.jsx(Rz,{children:s.jsxs(Oz,{children:[s.jsxs(Bz,{children:[s.jsx(ml,{}),s.jsxs(Uz,{children:[s.jsx("h1",{children:"Create an account"}),s.jsx("p",{children:"Join Mendam and start connecting with your team!"})]})]}),s.jsxs(_z,{onSubmit:I,children:[m.general&&s.jsx(Yz,{children:s.jsx("span",{children:m.general})}),s.jsxs(pf,{children:[s.jsxs(yf,{htmlFor:"fullName",children:["Full Name ",s.jsx("span",{children:"*"})]}),s.jsx(bf,{type:"text",id:"fullName",name:"fullName",value:e.fullName,onChange:k,disabled:b,placeholder:"Enter your full name",hasError:!!m.fullName}),m.fullName&&s.jsx(wf,{children:m.fullName})]}),s.jsxs(g4,{children:[s.jsxs(pf,{children:[s.jsxs(yf,{htmlFor:"email",children:["Email ",s.jsx("span",{children:"*"})]}),s.jsx(bf,{type:"email",id:"email",name:"email",value:e.email,onChange:k,disabled:b,placeholder:"Enter your email",hasError:!!m.email}),m.email&&s.jsx(wf,{children:m.email})]}),s.jsxs(pf,{children:[s.jsxs(yf,{htmlFor:"username",children:["Username ",s.jsx("span",{children:"*"})]}),s.jsx(bf,{type:"text",id:"username",name:"username",value:e.username,onChange:k,disabled:b,placeholder:"Enter your username",hasError:!!m.username}),m.username&&s.jsx(wf,{children:m.username})]})]}),s.jsxs(g4,{children:[s.jsxs(pf,{children:[s.jsxs(yf,{htmlFor:"password",children:["Password ",s.jsx("span",{children:"*"})]}),s.jsxs(p4,{children:[s.jsx(bf,{type:i?"text":"password",id:"password",name:"password",value:e.password,onChange:k,disabled:b,placeholder:"Enter your password",hasError:!!m.password}),s.jsx(y4,{type:"button",onClick:()=>f(!i),disabled:b,children:i?s.jsx(y0,{}):s.jsx(b0,{})})]}),m.password&&s.jsx(wf,{children:m.password})]}),s.jsxs(pf,{children:[s.jsxs(yf,{htmlFor:"confirmPassword",children:["Confirm Password ",s.jsx("span",{children:"*"})]}),s.jsxs(p4,{children:[s.jsx(bf,{type:c?"text":"password",id:"confirmPassword",name:"confirmPassword",value:e.confirmPassword,onChange:k,disabled:b,placeholder:"Confirm your password",hasError:!!m.confirmPassword}),s.jsx(y4,{type:"button",onClick:()=>d(!c),disabled:b,children:c?s.jsx(y0,{}):s.jsx(b0,{})})]}),m.confirmPassword&&s.jsx(wf,{children:m.confirmPassword})]})]}),s.jsx(Qz,{children:b?s.jsxs(Gz,{children:[s.jsx(fl,{}),s.jsx("span",{children:"Creating account..."})]}):s.jsx(wt,{full:!0,type:"submit",variant:"primary",title:"Continue",disabled:b||!S})}),s.jsxs($z,{children:["Already have an account? ",s.jsx(De,{to:"/auth/login",children:"Log In"})]})]})]})})})},zz=h.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--blue) 0%, #320460 100%);

  padding: 2rem;
    position: relative;
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background-image: url("/assets/auth__lines-bg.png");
    background-position: center;
    background-size: cover;
    opacity: .5;
  }
`,Rz=h.div`
  width: 100%;
  max-width: 600px;
  position: relative;
  z-index: 45678;
`,Oz=h.div`
  background-color: ${({theme:e})=>e.background.secondary};
  border-radius: 1.6rem;
  padding: 3rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  border: 1px solid ${({theme:e})=>e.border.primary};

  @media (max-width: 600px) {
    padding: 3rem 2rem;
    border-radius: 1.2rem;
  }
`,Bz=h.div`
  text-align: center;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`,Uz=h.div`
  h1 {
    font-size: var(--text-xl);
    color: ${({theme:e})=>e.text.primary};
    font-weight: 600;
    margin-bottom: 0.5rem;
    line-height: 1.2;
  }

  p {
    font-size: var(--text-base);
    color: ${({theme:e})=>e.text.secondary};
    line-height: 1.4;
  }
`,_z=h.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Yz=h.div`
  background-color: #fee2e2;
  border: 1px solid #fecaca;
  color: #dc2626;
  padding: 1rem 1.5rem;
  border-radius: 0.8rem;
  font-size: var(--text-sm);
  text-align: center;
`,g4=h.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,pf=h.div`
  display: grid;
  flex-direction: column;
  gap: 0.8rem;
`,yf=h.label`
  font-size: var(--text-sm);
  font-weight: 600;
  color: ${({theme:e})=>e.text.thirdly};
  text-transform: capitalize;
  letter-spacing: 0.5px;

  span {
    color: #ef4444;
  }
`,bf=h.input`
  width: 100%;
  height: 4.5rem;
  padding: 0 1.5rem;
  border: 1px solid ${({hasError:e,theme:a})=>e?"#ef4444":a.border.secondary};
  border-radius: 0.8rem;
  background-color: ${({theme:e})=>e.background.primary};
  color: ${({theme:e})=>e.text.primary};
  font-size: var(--text-md);
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({hasError:e})=>e?"#ef4444":"var(--blue)"};
  }

  &::placeholder {
    color: ${({theme:e})=>e.text.placeholder};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,p4=h.div`
  position: relative;
  display: flex;
  align-items: center;
`,y4=h.button`
  position: absolute;
  right: 1.5rem;
  background: none;
  border: none;
  color: ${({theme:e})=>e.text.placeholder};
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${({theme:e})=>e.text.secondary};
  }

  svg {
    width: 2rem;
    height: 2rem;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,wf=h.span`
  color: #ef4444;
  font-size: var(--text-xs);
  margin-top: 0.4rem;
`,Qz=h.div`
  margin-top: 1rem;
`,Gz=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  color: ${({theme:e})=>e.text.secondary};

  span {
    font-size: var(--text-md);
  }
`,$z=h.div`
  color: ${({theme:e})=>e.text.secondary};
  font-size: var(--text-base);

  a {
    color: var(--blue);
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`,b4=({children:e})=>{const{isAuthenticated:a,loading:i}=pt(),f=ol();return i?s.jsx(Zz,{children:s.jsx("svg",{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 66.59 63.66",width:70,height:70,children:s.jsx(Jz,{d:"M50,70.82c-.13-.51-.28-1.13-.47-1.74A29,29,0,0,0,45,60.79a70.83,70.83,0,0,0-5.71-6.41,59.7,59.7,0,0,1-9.34-12.16c-.37-.67-.69-1.37-1.06-2.1-.06.12-.12.21-.17.31a39.53,39.53,0,0,0-3.13,10A25.62,25.62,0,0,0,27.66,66a32.27,32.27,0,0,0,7.45,9.79A52.47,52.47,0,0,0,43,81.64l.21.14c-1.85.11-8.38-2.61-11.73-4.86a33.27,33.27,0,0,1-9-9,32.14,32.14,0,0,1-5-11.7,33.2,33.2,0,0,1,21-38c-.55.66-1.1,1.29-1.61,1.95a14.4,14.4,0,0,0-2.76,5.58A11.27,11.27,0,0,0,34.93,33a39,39,0,0,0,6.27,9.26C42.88,44.15,44.63,46,46.26,48a20.22,20.22,0,0,1,3.67,6.42s0,.05.07.09c.29-.67.54-1.34.85-2a30.15,30.15,0,0,1,5-7A79.35,79.35,0,0,0,62,38.22a28.19,28.19,0,0,0,3.49-6.28,10.94,10.94,0,0,0-1-9.84c-.82-1.38-1.86-2.63-2.7-3.81C72.49,21.9,83.66,33.71,83.28,50.08a33.12,33.12,0,0,1-26.5,31.75l1.84-1.2a42.78,42.78,0,0,0,11-10.08,25.92,25.92,0,0,0,4.94-11.64A28.44,28.44,0,0,0,73.38,46c-.62-2-1.4-3.93-2.11-5.89l-.2-.06a1,1,0,0,1,0,.18A40.08,40.08,0,0,1,65.43,49c-2.17,2.71-4.57,5.21-7,7.71a35.26,35.26,0,0,0-7,10.05C50.83,68.11,50.42,69.52,50,70.82Z",transform:"translate(-16.71 -18.17)"})})}):a?s.jsx(s.Fragment,{children:e}):s.jsx(I0,{to:"/auth/login",state:{from:f},replace:!0})},Zz=h.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${({theme:e})=>e.background.primary};
`,Jz=h.path`
  fill: ${({theme:e})=>e.text.primary};
`;h.div`
  width: 4rem;
  height: 4rem;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;h.p`
  color: white;
  font-size: 1.6rem;
  font-weight: 500;
`;const Hz=()=>s.jsx(nv,{children:s.jsxs(av,{children:[s.jsx(ht,{path:"/",element:s.jsx(o5,{})}),s.jsx(ht,{path:"/auth/login",element:s.jsx(w4,{children:s.jsx(wz,{})})}),s.jsx(ht,{path:"/auth/register",element:s.jsx(w4,{children:s.jsx(Az,{})})}),s.jsxs(ht,{path:"/app",element:s.jsx(b4,{children:s.jsx(MI,{})}),children:[s.jsx(ht,{path:"@me",element:s.jsx(JI,{})}),s.jsx(ht,{path:"friends",element:s.jsx(LD,{})}),s.jsx(ht,{path:"groups",element:s.jsx(i4,{})}),s.jsx(ht,{path:"groups/:groupId",element:s.jsx(i4,{})}),s.jsx(ht,{path:"channel/:id",element:s.jsx(yA,{})})]}),s.jsxs(ht,{path:"/app/settings",element:s.jsx(b4,{children:s.jsx(RI,{})}),children:[s.jsx(ht,{path:"account",element:s.jsx(zA,{})}),s.jsx(ht,{path:"profile",element:s.jsx(BA,{})}),s.jsx(ht,{path:"appearance",element:s.jsx(nz,{})}),s.jsx(ht,{path:"languages",element:s.jsx(uz,{})}),s.jsx(ht,{path:"notifications",element:s.jsx(gz,{})})]}),s.jsx(ht,{path:"*",element:s.jsx(I0,{to:"/",replace:!0})})]})}),w4=({children:e})=>{const{isAuthenticated:a,loading:i}=pt();return i?s.jsx(Pz,{children:s.jsx("svg",{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 66.59 63.66",width:70,height:70,children:s.jsx(Fz,{d:"M50,70.82c-.13-.51-.28-1.13-.47-1.74A29,29,0,0,0,45,60.79a70.83,70.83,0,0,0-5.71-6.41,59.7,59.7,0,0,1-9.34-12.16c-.37-.67-.69-1.37-1.06-2.1-.06.12-.12.21-.17.31a39.53,39.53,0,0,0-3.13,10A25.62,25.62,0,0,0,27.66,66a32.27,32.27,0,0,0,7.45,9.79A52.47,52.47,0,0,0,43,81.64l.21.14c-1.85.11-8.38-2.61-11.73-4.86a33.27,33.27,0,0,1-9-9,32.14,32.14,0,0,1-5-11.7,33.2,33.2,0,0,1,21-38c-.55.66-1.1,1.29-1.61,1.95a14.4,14.4,0,0,0-2.76,5.58A11.27,11.27,0,0,0,34.93,33a39,39,0,0,0,6.27,9.26C42.88,44.15,44.63,46,46.26,48a20.22,20.22,0,0,1,3.67,6.42s0,.05.07.09c.29-.67.54-1.34.85-2a30.15,30.15,0,0,1,5-7A79.35,79.35,0,0,0,62,38.22a28.19,28.19,0,0,0,3.49-6.28,10.94,10.94,0,0,0-1-9.84c-.82-1.38-1.86-2.63-2.7-3.81C72.49,21.9,83.66,33.71,83.28,50.08a33.12,33.12,0,0,1-26.5,31.75l1.84-1.2a42.78,42.78,0,0,0,11-10.08,25.92,25.92,0,0,0,4.94-11.64A28.44,28.44,0,0,0,73.38,46c-.62-2-1.4-3.93-2.11-5.89l-.2-.06a1,1,0,0,1,0,.18A40.08,40.08,0,0,1,65.43,49c-2.17,2.71-4.57,5.21-7,7.71a35.26,35.26,0,0,0-7,10.05C50.83,68.11,50.42,69.52,50,70.82Z",transform:"translate(-16.71 -18.17)"})})}):a?s.jsx(I0,{to:"/app/@me",replace:!0}):s.jsx(s.Fragment,{children:e})},Pz=h.div`
  width: 100%;
  height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e})=>e.background.primary};
`,Fz=h.path`
  fill: ${({theme:e})=>e.text.placeholder};
`,qz=_f`

@font-face {
    font-family: 'Inter';
    src: url('@assets/fonts/Inter28pt-Medium.eot');
    src: url('@assets/fonts/Inter28pt-Medium.eot?#iefix') format('embedded-opentype'),
        url('@assets/fonts/Inter28pt-Medium.woff2') format('woff2'),
        url('@assets/fonts/Inter28pt-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('@assets/fonts/Inter28pt-ExtraLight.eot');
    src: url('@assets/fonts/Inter28pt-ExtraLight.eot?#iefix') format('embedded-opentype'),
        url('@assets/fonts/Inter28pt-ExtraLight.woff2') format('woff2'),
        url('@assets/fonts/Inter28pt-ExtraLight.woff') format('woff');
    font-weight: 200;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('@assets/fonts/Inter28pt-ExtraBoldItalic.eot');
    src: url('@assets/fonts/Inter28pt-ExtraBoldItalic.eot?#iefix') format('embedded-opentype'),
        url('@assets/fonts/Inter28pt-ExtraBoldItalic.woff2') format('woff2'),
        url('@assets/fonts/Inter28pt-ExtraBoldItalic.woff') format('woff');
    font-weight: bold;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('@assets/fonts/Inter28pt-Italic.eot');
    src: url('@assets/fonts/Inter28pt-Italic.eot?#iefix') format('embedded-opentype'),
        url('@assets/fonts/Inter28pt-Italic.woff2') format('woff2'),
        url('@assets/fonts/Inter28pt-Italic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('@assets/fonts/Inter28pt-ExtraBold.eot');
    src: url('@assets/fonts/Inter28pt-ExtraBold.eot?#iefix') format('embedded-opentype'),
        url('@assets/fonts/Inter28pt-ExtraBold.woff2') format('woff2'),
        url('@assets/fonts/Inter28pt-ExtraBold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('@assets/fonts/Inter28pt-ExtraLightItalic.eot');
    src: url('@assets/fonts/Inter28pt-ExtraLightItalic.eot?#iefix') format('embedded-opentype'),
        url('@assets/fonts/Inter28pt-ExtraLightItalic.woff2') format('woff2'),
        url('@assets/fonts/Inter28pt-ExtraLightItalic.woff') format('woff');
    font-weight: 200;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('@assets/fonts/Inter28pt-LightItalic.eot');
    src: url('@assets/fonts/Inter28pt-LightItalic.eot?#iefix') format('embedded-opentype'),
        url('@assets/fonts/Inter28pt-LightItalic.woff2') format('woff2'),
        url('@assets/fonts/Inter28pt-LightItalic.woff') format('woff');
    font-weight: 300;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('@assets/fonts/Inter28pt-Thin.eot');
    src: url('@assets/fonts/Inter28pt-Thin.eot?#iefix') format('embedded-opentype'),
        url('@assets/fonts/Inter28pt-Thin.woff2') format('woff2'),
        url('@assets/fonts/Inter28pt-Thin.woff') format('woff');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('@assets/fonts/Inter28pt-Light.eot');
    src: url('@assets/fonts/Inter28pt-Light.eot?#iefix') format('embedded-opentype'),
        url('@assets/fonts/Inter28pt-Light.woff2') format('woff2'),
        url('@assets/fonts/Inter28pt-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('@assets/fonts/Inter28pt-MediumItalic.eot');
    src: url('@assets/fonts/Inter28pt-MediumItalic.eot?#iefix') format('embedded-opentype'),
        url('@assets/fonts/Inter28pt-MediumItalic.woff2') format('woff2'),
        url('@assets/fonts/Inter28pt-MediumItalic.woff') format('woff');
    font-weight: 500;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('@assets/fonts/Inter28pt-Regular.eot');
    src: url('@assets/fonts/Inter28pt-Regular.eot?#iefix') format('embedded-opentype'),
        url('@assets/fonts/Inter28pt-Regular.woff2') format('woff2'),
        url('@assets/fonts/Inter28pt-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('@assets/fonts/Inter28pt-SemiBoldItalic.eot');
    src: url('@assets/fonts/Inter28pt-SemiBoldItalic.eot?#iefix') format('embedded-opentype'),
        url('@assets/fonts/Inter28pt-SemiBoldItalic.woff2') format('woff2'),
        url('@assets/fonts/Inter28pt-SemiBoldItalic.woff') format('woff');
    font-weight: 600;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('@assets/fonts/Inter28pt-SemiBold.eot');
    src: url('@assets/fonts/Inter28pt-SemiBold.eot?#iefix') format('embedded-opentype'),
        url('@assets/fonts/Inter28pt-SemiBold.woff2') format('woff2'),
        url('@assets/fonts/Inter28pt-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('@assets/fonts/Inter18pt-ExtraLightItalic.eot');
    src: url('@assets/fonts/Inter18pt-ExtraLightItalic.eot?#iefix') format('embedded-opentype'),
        url('@assets/fonts/Inter18pt-ExtraLightItalic.woff2') format('woff2'),
        url('@assets/fonts/Inter18pt-ExtraLightItalic.woff') format('woff');
    font-weight: 200;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('@assets/fonts/Inter18pt-ExtraBold.eot');
    src: url('@assets/fonts/Inter18pt-ExtraBold.eot?#iefix') format('embedded-opentype'),
        url('@assets/fonts/Inter18pt-ExtraBold.woff2') format('woff2'),
        url('@assets/fonts/Inter18pt-ExtraBold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('@assets/fonts/Inter18pt-Bold.eot');
    src: url('@assets/fonts/Inter18pt-Bold.eot?#iefix') format('embedded-opentype'),
        url('@assets/fonts/Inter18pt-Bold.woff2') format('woff2'),
        url('@assets/fonts/Inter18pt-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('@assets/fonts/Inter18pt-Italic.eot');
    src: url('@assets/fonts/Inter18pt-Italic.eot?#iefix') format('embedded-opentype'),
        url('@assets/fonts/Inter18pt-Italic.woff2') format('woff2'),
        url('@assets/fonts/Inter18pt-Italic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('@assets/fonts/Inter28pt-ThinItalic.eot');
    src: url('@assets/fonts/Inter28pt-ThinItalic.eot?#iefix') format('embedded-opentype'),
        url('@assets/fonts/Inter28pt-ThinItalic.woff2') format('woff2'),
        url('@assets/fonts/Inter28pt-ThinItalic.woff') format('woff');
    font-weight: 100;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('@assets/fonts/Inter18pt-ExtraBoldItalic.eot');
    src: url('@assets/fonts/Inter18pt-ExtraBoldItalic.eot?#iefix') format('embedded-opentype'),
        url('@assets/fonts/Inter18pt-ExtraBoldItalic.woff2') format('woff2'),
        url('@assets/fonts/Inter18pt-ExtraBoldItalic.woff') format('woff');
    font-weight: bold;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('@assets/fonts/Inter18pt-BoldItalic.eot');
    src: url('@assets/fonts/Inter18pt-BoldItalic.eot?#iefix') format('embedded-opentype'),
        url('@assets/fonts/Inter18pt-BoldItalic.woff2') format('woff2'),
        url('@assets/fonts/Inter18pt-BoldItalic.woff') format('woff');
    font-weight: bold;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('@assets/fonts/Inter18pt-ExtraLight.eot');
    src: url('@assets/fonts/Inter18pt-ExtraLight.eot?#iefix') format('embedded-opentype'),
        url('@assets/fonts/Inter18pt-ExtraLight.woff2') format('woff2'),
        url('@assets/fonts/Inter18pt-ExtraLight.woff') format('woff');
    font-weight: 200;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('@assets/fonts/Inter18pt-BlackItalic.eot');
    src: url('@assets/fonts/Inter18pt-BlackItalic.eot?#iefix') format('embedded-opentype'),
        url('@assets/fonts/Inter18pt-BlackItalic.woff2') format('woff2'),
        url('@assets/fonts/Inter18pt-BlackItalic.woff') format('woff');
    font-weight: 900;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('@assets/fonts/Inter18pt-Black.eot');
    src: url('@assets/fonts/Inter18pt-Black.eot?#iefix') format('embedded-opentype'),
        url('@assets/fonts/Inter18pt-Black.woff2') format('woff2'),
        url('@assets/fonts/Inter18pt-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('@assets/fonts/Inter18pt-LightItalic.eot');
    src: url('@assets/fonts/Inter18pt-LightItalic.eot?#iefix') format('embedded-opentype'),
        url('@assets/fonts/Inter18pt-LightItalic.woff2') format('woff2'),
        url('@assets/fonts/Inter18pt-LightItalic.woff') format('woff');
    font-weight: 300;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('@assets/fonts/Inter18pt-Medium.eot');
    src: url('@assets/fonts/Inter18pt-Medium.eot?#iefix') format('embedded-opentype'),
        url('@assets/fonts/Inter18pt-Medium.woff2') format('woff2'),
        url('@assets/fonts/Inter18pt-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('@assets/fonts/Inter18pt-Regular.eot');
    src: url('@assets/fonts/Inter18pt-Regular.eot?#iefix') format('embedded-opentype'),
        url('@assets/fonts/Inter18pt-Regular.woff2') format('woff2'),
        url('@assets/fonts/Inter18pt-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('@assets/fonts/Inter18pt-SemiBold.eot');
    src: url('@assets/fonts/Inter18pt-SemiBold.eot?#iefix') format('embedded-opentype'),
        url('@assets/fonts/Inter18pt-SemiBold.woff2') format('woff2'),
        url('@assets/fonts/Inter18pt-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('@assets/fonts/Inter18pt-MediumItalic.eot');
    src: url('@assets/fonts/Inter18pt-MediumItalic.eot?#iefix') format('embedded-opentype'),
        url('@assets/fonts/Inter18pt-MediumItalic.woff2') format('woff2'),
        url('@assets/fonts/Inter18pt-MediumItalic.woff') format('woff');
    font-weight: 500;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('@assets/fonts/Inter18pt-SemiBoldItalic.eot');
    src: url('@assets/fonts/Inter18pt-SemiBoldItalic.eot?#iefix') format('embedded-opentype'),
        url('@assets/fonts/Inter18pt-SemiBoldItalic.woff2') format('woff2'),
        url('@assets/fonts/Inter18pt-SemiBoldItalic.woff') format('woff');
    font-weight: 600;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('@assets/fonts/Inter18pt-Light.eot');
    src: url('@assets/fonts/Inter18pt-Light.eot?#iefix') format('embedded-opentype'),
        url('@assets/fonts/Inter18pt-Light.woff2') format('woff2'),
        url('@assets/fonts/Inter18pt-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}
`,Vz=_f`
  :root {
    /* color  */

    --light: #fbfbfb;
    --pup-white: #e3d5f6;
    --blue: #2492c2;
    --dark-blue: rgb(13, 104, 143);
    --primary: #121214;
    --secondary: #1a1a1e;
    --jet: #222327;
    --gray: #9d9c9c;
    --ms-bg: #4e3e63;
    --text-primary: #efeff0;
    --text-secondary: #d4d4d9;
    --border-color: #1a1a1e;

    /* Semantic Colors */
    --success-500: #43a25a;
    --info-100: hsl(20, 57%, 94%);
    --info-500: #f2c100;
    --danger-500: #e06363;

    /* Shadows */
    --shadow-sm: 0 0 12px 3px #00000016;
    --shadow-md: 0 0 12px 3px #00000024;
    --shadow-lg: 0 0 12px 3px #00000032;

    /* border */

    --border-px: 1px solid;

    /* Font size variables  */
    --text-xxs: 0.8rem; /* 8px */
    --text-xs: 1rem; /* 10px */
    --text-sm: 1.2rem; /* 12px */
    --text-base: 1.4rem; /* 14px */
    --text-md: 1.5rem; /* 16px */
    --text-lg: 1.6rem; /* 20px - h4/subheaders */
    --text-xl: 2rem; /* 24px - h3 */
    --text-xxl: 3rem; /* 30px - h2 */
    --text-xxxl: 4rem; /* 38px - h1 */
    --text-giant: 5rem; /* 48px - display text */
    --text-big: 6rem;

    --text-h4: var(--text-lg);
    --text-h3: var(--text-xl);
    --text-h2: var(--text-xxl);
    --text-h1: var(--text-xxxl);

    /* Border radius scale */
    --radius-xxs: 0.2rem; /* 2px - subtle rounding */
    --radius-xs: 0.4rem; /* 4px - small elements */
    --radius-sm: 0.8rem; /* 8px - default radius */
    --radius-md: 1rem; /* 12px - cards/containers */
    --radius-lg: 1.2rem; /* 12px - large containers */

    /* border */

    /* gradient */

    --blue-gradient: linear-gradient(55deg, #7515f5, #440c8f);
  }
`,Xz=hx`
${qz}

* {
    font-family: "Roboto";
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    -webkit-tap-highlight-color: transparent;
}

a {
    text-decoration: none;
}

li {
    list-style-type: none;
}

html {
    font-size: 10px;
    scroll-behavior: smooth;
}

body {
    overflow-x: hidden;
    position: relative;
    /* background-color: var(--light); */
}


${Vz}

::-moz-selection { 
    color: var(--light);
    background: var(--blue);
}

::selection {
    color: var(--light);
    background: var(--blue);

}

::-webkit-scrollbar {
    width: 0; 
}

::-webkit-scrollbar-track {
    background: ${({theme:e})=>e.background.primary};
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.background.thirdly};
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: #555;
}
img {
  user-select: none;
  pointer-events: none;
  -webkit-user-drag: none;
}

`;function Wz(){return s.jsx(HM,{children:s.jsx(jC,{children:s.jsx(LC,{children:s.jsx(P7,{children:s.jsx(SC,{children:s.jsx(EI,{children:s.jsxs(FT,{children:[s.jsx(Xz,{}),s.jsx(Hz,{})]})})})})})})})}dv.createRoot(document.getElementById("root")).render(s.jsx(g.StrictMode,{children:s.jsx(Wz,{})}));
