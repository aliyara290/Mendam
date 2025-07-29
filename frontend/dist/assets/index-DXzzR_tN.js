import{R as rt,r as g,L as $e,u as cl,a as Yf,b as b4,O as w4,N as I0,B as ev,c as tv,d as dt}from"./router-DkPTQYeX.js";import{r as nv,a as av}from"./vendor-DJG_os-6.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))f(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const m of d.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&f(m)}).observe(document,{childList:!0,subtree:!0});function i(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function f(c){if(c.ep)return;c.ep=!0;const d=i(c);fetch(c.href,d)}})();var ed={exports:{}},cf={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d2;function rv(){if(d2)return cf;d2=1;var e=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function i(f,c,d){var m=null;if(d!==void 0&&(m=""+d),c.key!==void 0&&(m=""+c.key),"key"in c){d={};for(var y in c)y!=="key"&&(d[y]=c[y])}else d=c;return c=d.ref,{$$typeof:e,type:f,key:m,ref:c!==void 0?c:null,props:d}}return cf.Fragment=a,cf.jsx=i,cf.jsxs=i,cf}var h2;function iv(){return h2||(h2=1,ed.exports=rv()),ed.exports}var s=iv(),td={exports:{}},uf={},nd={exports:{}},ad={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m2;function fv(){return m2||(m2=1,function(e){function a(U,P){var F=U.length;U.push(P);e:for(;0<F;){var W=F-1>>>1,te=U[W];if(0<c(te,P))U[W]=P,U[F]=te,F=W;else break e}}function i(U){return U.length===0?null:U[0]}function f(U){if(U.length===0)return null;var P=U[0],F=U.pop();if(F!==P){U[0]=F;e:for(var W=0,te=U.length,fe=te>>>1;W<fe;){var re=2*(W+1)-1,ce=U[re],xe=re+1,ft=U[xe];if(0>c(ce,F))xe<te&&0>c(ft,ce)?(U[W]=ft,U[xe]=F,W=xe):(U[W]=ce,U[re]=F,W=re);else if(xe<te&&0>c(ft,F))U[W]=ft,U[xe]=F,W=xe;else break e}}return P}function c(U,P){var F=U.sortIndex-P.sortIndex;return F!==0?F:U.id-P.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;e.unstable_now=function(){return d.now()}}else{var m=Date,y=m.now();e.unstable_now=function(){return m.now()-y}}var b=[],x=[],v=1,M=null,j=3,k=!1,N=!1,C=!1,E=!1,I=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;function _(U){for(var P=i(x);P!==null;){if(P.callback===null)f(x);else if(P.startTime<=U)f(x),P.sortIndex=P.expirationTime,a(b,P);else break;P=i(x)}}function L(U){if(C=!1,_(U),!N)if(i(b)!==null)N=!0,R||(R=!0,Oe());else{var P=i(x);P!==null&&V(L,P.startTime-U)}}var R=!1,O=-1,q=5,se=-1;function Ye(){return E?!0:!(e.unstable_now()-se<q)}function Je(){if(E=!1,R){var U=e.unstable_now();se=U;var P=!0;try{e:{N=!1,C&&(C=!1,A(O),O=-1),k=!0;var F=j;try{t:{for(_(U),M=i(b);M!==null&&!(M.expirationTime>U&&Ye());){var W=M.callback;if(typeof W=="function"){M.callback=null,j=M.priorityLevel;var te=W(M.expirationTime<=U);if(U=e.unstable_now(),typeof te=="function"){M.callback=te,_(U),P=!0;break t}M===i(b)&&f(b),_(U)}else f(b);M=i(b)}if(M!==null)P=!0;else{var fe=i(x);fe!==null&&V(L,fe.startTime-U),P=!1}}break e}finally{M=null,j=F,k=!1}P=void 0}}finally{P?Oe():R=!1}}}var Oe;if(typeof G=="function")Oe=function(){G(Je)};else if(typeof MessageChannel<"u"){var Gt=new MessageChannel,Sn=Gt.port2;Gt.port1.onmessage=Je,Oe=function(){Sn.postMessage(null)}}else Oe=function(){I(Je,0)};function V(U,P){O=I(function(){U(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(U){U.callback=null},e.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<U?Math.floor(1e3/U):5},e.unstable_getCurrentPriorityLevel=function(){return j},e.unstable_next=function(U){switch(j){case 1:case 2:case 3:var P=3;break;default:P=j}var F=j;j=P;try{return U()}finally{j=F}},e.unstable_requestPaint=function(){E=!0},e.unstable_runWithPriority=function(U,P){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var F=j;j=U;try{return P()}finally{j=F}},e.unstable_scheduleCallback=function(U,P,F){var W=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?W+F:W):F=W,U){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=F+te,U={id:v++,callback:P,priorityLevel:U,startTime:F,expirationTime:te,sortIndex:-1},F>W?(U.sortIndex=F,a(x,U),i(b)===null&&U===i(x)&&(C?(A(O),O=-1):C=!0,V(L,F-W))):(U.sortIndex=te,a(b,U),N||k||(N=!0,R||(R=!0,Oe()))),U},e.unstable_shouldYield=Ye,e.unstable_wrapCallback=function(U){var P=j;return function(){var F=j;j=P;try{return U.apply(this,arguments)}finally{j=F}}}}(ad)),ad}var g2;function ov(){return g2||(g2=1,nd.exports=fv()),nd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p2;function sv(){if(p2)return uf;p2=1;var e=ov(),a=nv(),i=av();function f(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function d(t){var n=t,r=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(r=n.return),t=n.return;while(t)}return n.tag===3?r:null}function m(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function y(t){if(d(t)!==t)throw Error(f(188))}function b(t){var n=t.alternate;if(!n){if(n=d(t),n===null)throw Error(f(188));return n!==t?null:t}for(var r=t,o=n;;){var l=r.return;if(l===null)break;var u=l.alternate;if(u===null){if(o=l.return,o!==null){r=o;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===r)return y(l),t;if(u===o)return y(l),n;u=u.sibling}throw Error(f(188))}if(r.return!==o.return)r=l,o=u;else{for(var p=!1,w=l.child;w;){if(w===r){p=!0,r=l,o=u;break}if(w===o){p=!0,o=l,r=u;break}w=w.sibling}if(!p){for(w=u.child;w;){if(w===r){p=!0,r=u,o=l;break}if(w===o){p=!0,o=u,r=l;break}w=w.sibling}if(!p)throw Error(f(189))}}if(r.alternate!==o)throw Error(f(190))}if(r.tag!==3)throw Error(f(188));return r.stateNode.current===r?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,M=Symbol.for("react.element"),j=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),I=Symbol.for("react.provider"),A=Symbol.for("react.consumer"),G=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),R=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),se=Symbol.for("react.activity"),Ye=Symbol.for("react.memo_cache_sentinel"),Je=Symbol.iterator;function Oe(t){return t===null||typeof t!="object"?null:(t=Je&&t[Je]||t["@@iterator"],typeof t=="function"?t:null)}var Gt=Symbol.for("react.client.reference");function Sn(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Gt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case N:return"Fragment";case E:return"Profiler";case C:return"StrictMode";case L:return"Suspense";case R:return"SuspenseList";case se:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case k:return"Portal";case G:return(t.displayName||"Context")+".Provider";case A:return(t._context.displayName||"Context")+".Consumer";case _:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O:return n=t.displayName||null,n!==null?n:Sn(t.type)||"Memo";case q:n=t._payload,t=t._init;try{return Sn(t(n))}catch{}}return null}var V=Array.isArray,U=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},W=[],te=-1;function fe(t){return{current:t}}function re(t){0>te||(t.current=W[te],W[te]=null,te--)}function ce(t,n){te++,W[te]=t.current,t.current=n}var xe=fe(null),ft=fe(null),vt=fe(null),Cn=fe(null);function mn(t,n){switch(ce(vt,n),ce(ft,t),ce(xe,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Yg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Yg(n),t=Qg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}re(xe),ce(xe,t)}function xt(){re(xe),re(ft),re(vt)}function ka(t){t.memoizedState!==null&&ce(Cn,t);var n=xe.current,r=Qg(n,t.type);n!==r&&(ce(ft,t),ce(xe,r))}function kn(t){ft.current===t&&(re(xe),re(ft)),Cn.current===t&&(re(Cn),rf._currentValue=F)}var $t=Object.prototype.hasOwnProperty,Ql=e.unstable_scheduleCallback,Gl=e.unstable_cancelCallback,Db=e.unstable_shouldYield,Ab=e.unstable_requestPaint,gn=e.unstable_now,zb=e.unstable_getCurrentPriorityLevel,v1=e.unstable_ImmediatePriority,x1=e.unstable_UserBlockingPriority,Wf=e.unstable_NormalPriority,Rb=e.unstable_LowPriority,M1=e.unstable_IdlePriority,Ob=e.log,Bb=e.unstable_setDisableYieldValue,di=null,Nt=null;function Pn(t){if(typeof Ob=="function"&&Bb(t),Nt&&typeof Nt.setStrictMode=="function")try{Nt.setStrictMode(di,t)}catch{}}var It=Math.clz32?Math.clz32:Yb,Ub=Math.log,_b=Math.LN2;function Yb(t){return t>>>=0,t===0?32:31-(Ub(t)/_b|0)|0}var Kf=256,eo=4194304;function Ea(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function to(t,n,r){var o=t.pendingLanes;if(o===0)return 0;var l=0,u=t.suspendedLanes,p=t.pingedLanes;t=t.warmLanes;var w=o&134217727;return w!==0?(o=w&~u,o!==0?l=Ea(o):(p&=w,p!==0?l=Ea(p):r||(r=w&~t,r!==0&&(l=Ea(r))))):(w=o&~u,w!==0?l=Ea(w):p!==0?l=Ea(p):r||(r=o&~t,r!==0&&(l=Ea(r)))),l===0?0:n!==0&&n!==l&&(n&u)===0&&(u=l&-l,r=n&-n,u>=r||u===32&&(r&4194048)!==0)?n:l}function hi(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Qb(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function j1(){var t=Kf;return Kf<<=1,(Kf&4194048)===0&&(Kf=256),t}function L1(){var t=eo;return eo<<=1,(eo&62914560)===0&&(eo=4194304),t}function $l(t){for(var n=[],r=0;31>r;r++)n.push(t);return n}function mi(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Gb(t,n,r,o,l,u){var p=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var w=t.entanglements,S=t.expirationTimes,B=t.hiddenUpdates;for(r=p&~r;0<r;){var Z=31-It(r),H=1<<Z;w[Z]=0,S[Z]=-1;var Y=B[Z];if(Y!==null)for(B[Z]=null,Z=0;Z<Y.length;Z++){var Q=Y[Z];Q!==null&&(Q.lane&=-536870913)}r&=~H}o!==0&&S1(t,o,0),u!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=u&~(p&~n))}function S1(t,n,r){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-It(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|r&4194090}function C1(t,n){var r=t.entangledLanes|=n;for(t=t.entanglements;r;){var o=31-It(r),l=1<<o;l&n|t[o]&n&&(t[o]|=n),r&=~l}}function Zl(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Jl(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function k1(){var t=P.p;return t!==0?t:(t=window.event,t===void 0?32:f2(t.type))}function $b(t,n){var r=P.p;try{return P.p=t,n()}finally{P.p=r}}var Fn=Math.random().toString(36).slice(2),ct="__reactFiber$"+Fn,Mt="__reactProps$"+Fn,fr="__reactContainer$"+Fn,Hl="__reactEvents$"+Fn,Zb="__reactListeners$"+Fn,Jb="__reactHandles$"+Fn,E1="__reactResources$"+Fn,gi="__reactMarker$"+Fn;function Pl(t){delete t[ct],delete t[Mt],delete t[Hl],delete t[Zb],delete t[Jb]}function or(t){var n=t[ct];if(n)return n;for(var r=t.parentNode;r;){if(n=r[fr]||r[ct]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(t=Jg(t);t!==null;){if(r=t[ct])return r;t=Jg(t)}return n}t=r,r=t.parentNode}return null}function sr(t){if(t=t[ct]||t[fr]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function pi(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(f(33))}function lr(t){var n=t[E1];return n||(n=t[E1]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ke(t){t[gi]=!0}var T1=new Set,N1={};function Ta(t,n){cr(t,n),cr(t+"Capture",n)}function cr(t,n){for(N1[t]=n,t=0;t<n.length;t++)T1.add(n[t])}var Hb=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),I1={},D1={};function Pb(t){return $t.call(D1,t)?!0:$t.call(I1,t)?!1:Hb.test(t)?D1[t]=!0:(I1[t]=!0,!1)}function no(t,n,r){if(Pb(n))if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+r)}}function ao(t,n,r){if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+r)}}function En(t,n,r,o){if(o===null)t.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(n,r,""+o)}}var Fl,A1;function ur(t){if(Fl===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);Fl=n&&n[1]||"",A1=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Fl+t+A1}var ql=!1;function Vl(t,n){if(!t||ql)return"";ql=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var H=function(){throw Error()};if(Object.defineProperty(H.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(H,[])}catch(Q){var Y=Q}Reflect.construct(t,[],H)}else{try{H.call()}catch(Q){Y=Q}t.call(H.prototype)}}else{try{throw Error()}catch(Q){Y=Q}(H=t())&&typeof H.catch=="function"&&H.catch(function(){})}}catch(Q){if(Q&&Y&&typeof Q.stack=="string")return[Q.stack,Y.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=o.DetermineComponentFrameRoot(),p=u[0],w=u[1];if(p&&w){var S=p.split(`
`),B=w.split(`
`);for(l=o=0;o<S.length&&!S[o].includes("DetermineComponentFrameRoot");)o++;for(;l<B.length&&!B[l].includes("DetermineComponentFrameRoot");)l++;if(o===S.length||l===B.length)for(o=S.length-1,l=B.length-1;1<=o&&0<=l&&S[o]!==B[l];)l--;for(;1<=o&&0<=l;o--,l--)if(S[o]!==B[l]){if(o!==1||l!==1)do if(o--,l--,0>l||S[o]!==B[l]){var Z=`
`+S[o].replace(" at new "," at ");return t.displayName&&Z.includes("<anonymous>")&&(Z=Z.replace("<anonymous>",t.displayName)),Z}while(1<=o&&0<=l);break}}}finally{ql=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?ur(r):""}function Fb(t){switch(t.tag){case 26:case 27:case 5:return ur(t.type);case 16:return ur("Lazy");case 13:return ur("Suspense");case 19:return ur("SuspenseList");case 0:case 15:return Vl(t.type,!1);case 11:return Vl(t.type.render,!1);case 1:return Vl(t.type,!0);case 31:return ur("Activity");default:return""}}function z1(t){try{var n="";do n+=Fb(t),t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function Zt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function R1(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function qb(t){var n=R1(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,u=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return l.call(this)},set:function(p){o=""+p,u.call(this,p)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(p){o=""+p},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function ro(t){t._valueTracker||(t._valueTracker=qb(t))}function O1(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var r=n.getValue(),o="";return t&&(o=R1(t)?t.checked?"true":"false":t.value),t=o,t!==r?(n.setValue(t),!0):!1}function io(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Vb=/[\n"\\]/g;function Jt(t){return t.replace(Vb,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Xl(t,n,r,o,l,u,p,w){t.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?t.type=p:t.removeAttribute("type"),n!=null?p==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Zt(n)):t.value!==""+Zt(n)&&(t.value=""+Zt(n)):p!=="submit"&&p!=="reset"||t.removeAttribute("value"),n!=null?Wl(t,p,Zt(n)):r!=null?Wl(t,p,Zt(r)):o!=null&&t.removeAttribute("value"),l==null&&u!=null&&(t.defaultChecked=!!u),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+Zt(w):t.removeAttribute("name")}function B1(t,n,r,o,l,u,p,w){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),n!=null||r!=null){if(!(u!=="submit"&&u!=="reset"||n!=null))return;r=r!=null?""+Zt(r):"",n=n!=null?""+Zt(n):r,w||n===t.value||(t.value=n),t.defaultValue=n}o=o??l,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=w?t.checked:!!o,t.defaultChecked=!!o,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(t.name=p)}function Wl(t,n,r){n==="number"&&io(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function dr(t,n,r,o){if(t=t.options,n){n={};for(var l=0;l<r.length;l++)n["$"+r[l]]=!0;for(r=0;r<t.length;r++)l=n.hasOwnProperty("$"+t[r].value),t[r].selected!==l&&(t[r].selected=l),l&&o&&(t[r].defaultSelected=!0)}else{for(r=""+Zt(r),n=null,l=0;l<t.length;l++){if(t[l].value===r){t[l].selected=!0,o&&(t[l].defaultSelected=!0);return}n!==null||t[l].disabled||(n=t[l])}n!==null&&(n.selected=!0)}}function U1(t,n,r){if(n!=null&&(n=""+Zt(n),n!==t.value&&(t.value=n),r==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=r!=null?""+Zt(r):""}function _1(t,n,r,o){if(n==null){if(o!=null){if(r!=null)throw Error(f(92));if(V(o)){if(1<o.length)throw Error(f(93));o=o[0]}r=o}r==null&&(r=""),n=r}r=Zt(n),t.defaultValue=r,o=t.textContent,o===r&&o!==""&&o!==null&&(t.value=o)}function hr(t,n){if(n){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=n;return}}t.textContent=n}var Xb=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Y1(t,n,r){var o=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,r):typeof r!="number"||r===0||Xb.has(n)?n==="float"?t.cssFloat=r:t[n]=(""+r).trim():t[n]=r+"px"}function Q1(t,n,r){if(n!=null&&typeof n!="object")throw Error(f(62));if(t=t.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var l in n)o=n[l],n.hasOwnProperty(l)&&r[l]!==o&&Y1(t,l,o)}else for(var u in n)n.hasOwnProperty(u)&&Y1(t,u,n[u])}function Kl(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Kb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function fo(t){return Kb.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var ec=null;function tc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var mr=null,gr=null;function G1(t){var n=sr(t);if(n&&(t=n.stateNode)){var r=t[Mt]||null;e:switch(t=n.stateNode,n.type){case"input":if(Xl(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Jt(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var o=r[n];if(o!==t&&o.form===t.form){var l=o[Mt]||null;if(!l)throw Error(f(90));Xl(o,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<r.length;n++)o=r[n],o.form===t.form&&O1(o)}break e;case"textarea":U1(t,r.value,r.defaultValue);break e;case"select":n=r.value,n!=null&&dr(t,!!r.multiple,n,!1)}}}var nc=!1;function $1(t,n,r){if(nc)return t(n,r);nc=!0;try{var o=t(n);return o}finally{if(nc=!1,(mr!==null||gr!==null)&&(Ho(),mr&&(n=mr,t=gr,gr=mr=null,G1(n),t)))for(n=0;n<t.length;n++)G1(t[n])}}function yi(t,n){var r=t.stateNode;if(r===null)return null;var o=r[Mt]||null;if(o===null)return null;r=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(f(231,n,typeof r));return r}var Tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ac=!1;if(Tn)try{var bi={};Object.defineProperty(bi,"passive",{get:function(){ac=!0}}),window.addEventListener("test",bi,bi),window.removeEventListener("test",bi,bi)}catch{ac=!1}var qn=null,rc=null,oo=null;function Z1(){if(oo)return oo;var t,n=rc,r=n.length,o,l="value"in qn?qn.value:qn.textContent,u=l.length;for(t=0;t<r&&n[t]===l[t];t++);var p=r-t;for(o=1;o<=p&&n[r-o]===l[u-o];o++);return oo=l.slice(t,1<o?1-o:void 0)}function so(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function lo(){return!0}function J1(){return!1}function jt(t){function n(r,o,l,u,p){this._reactName=r,this._targetInst=l,this.type=o,this.nativeEvent=u,this.target=p,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(r=t[w],this[w]=r?r(u):u[w]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?lo:J1,this.isPropagationStopped=J1,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=lo)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=lo)},persist:function(){},isPersistent:lo}),n}var Na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},co=jt(Na),wi=v({},Na,{view:0,detail:0}),ew=jt(wi),ic,fc,vi,uo=v({},wi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==vi&&(vi&&t.type==="mousemove"?(ic=t.screenX-vi.screenX,fc=t.screenY-vi.screenY):fc=ic=0,vi=t),ic)},movementY:function(t){return"movementY"in t?t.movementY:fc}}),H1=jt(uo),tw=v({},uo,{dataTransfer:0}),nw=jt(tw),aw=v({},wi,{relatedTarget:0}),oc=jt(aw),rw=v({},Na,{animationName:0,elapsedTime:0,pseudoElement:0}),iw=jt(rw),fw=v({},Na,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ow=jt(fw),sw=v({},Na,{data:0}),P1=jt(sw),lw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dw(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=uw[t])?!!n[t]:!1}function sc(){return dw}var hw=v({},wi,{key:function(t){if(t.key){var n=lw[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=so(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?cw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sc,charCode:function(t){return t.type==="keypress"?so(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?so(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),mw=jt(hw),gw=v({},uo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),F1=jt(gw),pw=v({},wi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sc}),yw=jt(pw),bw=v({},Na,{propertyName:0,elapsedTime:0,pseudoElement:0}),ww=jt(bw),vw=v({},uo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),xw=jt(vw),Mw=v({},Na,{newState:0,oldState:0}),jw=jt(Mw),Lw=[9,13,27,32],lc=Tn&&"CompositionEvent"in window,xi=null;Tn&&"documentMode"in document&&(xi=document.documentMode);var Sw=Tn&&"TextEvent"in window&&!xi,q1=Tn&&(!lc||xi&&8<xi&&11>=xi),V1=" ",X1=!1;function W1(t,n){switch(t){case"keyup":return Lw.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function K1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var pr=!1;function Cw(t,n){switch(t){case"compositionend":return K1(n);case"keypress":return n.which!==32?null:(X1=!0,V1);case"textInput":return t=n.data,t===V1&&X1?null:t;default:return null}}function kw(t,n){if(pr)return t==="compositionend"||!lc&&W1(t,n)?(t=Z1(),oo=rc=qn=null,pr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return q1&&n.locale!=="ko"?null:n.data;default:return null}}var Ew={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function eh(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Ew[t.type]:n==="textarea"}function th(t,n,r,o){mr?gr?gr.push(o):gr=[o]:mr=o,n=Wo(n,"onChange"),0<n.length&&(r=new co("onChange","change",null,r,o),t.push({event:r,listeners:n}))}var Mi=null,ji=null;function Tw(t){Rg(t,0)}function ho(t){var n=pi(t);if(O1(n))return t}function nh(t,n){if(t==="change")return n}var ah=!1;if(Tn){var cc;if(Tn){var uc="oninput"in document;if(!uc){var rh=document.createElement("div");rh.setAttribute("oninput","return;"),uc=typeof rh.oninput=="function"}cc=uc}else cc=!1;ah=cc&&(!document.documentMode||9<document.documentMode)}function ih(){Mi&&(Mi.detachEvent("onpropertychange",fh),ji=Mi=null)}function fh(t){if(t.propertyName==="value"&&ho(ji)){var n=[];th(n,ji,t,tc(t)),$1(Tw,n)}}function Nw(t,n,r){t==="focusin"?(ih(),Mi=n,ji=r,Mi.attachEvent("onpropertychange",fh)):t==="focusout"&&ih()}function Iw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ho(ji)}function Dw(t,n){if(t==="click")return ho(n)}function Aw(t,n){if(t==="input"||t==="change")return ho(n)}function zw(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Dt=typeof Object.is=="function"?Object.is:zw;function Li(t,n){if(Dt(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var r=Object.keys(t),o=Object.keys(n);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var l=r[o];if(!$t.call(n,l)||!Dt(t[l],n[l]))return!1}return!0}function oh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sh(t,n){var r=oh(t);t=0;for(var o;r;){if(r.nodeType===3){if(o=t+r.textContent.length,t<=n&&o>=n)return{node:r,offset:n-t};t=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=oh(r)}}function lh(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?lh(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function ch(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=io(t.document);n instanceof t.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)t=n.contentWindow;else break;n=io(t.document)}return n}function dc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Rw=Tn&&"documentMode"in document&&11>=document.documentMode,yr=null,hc=null,Si=null,mc=!1;function uh(t,n,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;mc||yr==null||yr!==io(o)||(o=yr,"selectionStart"in o&&dc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Si&&Li(Si,o)||(Si=o,o=Wo(hc,"onSelect"),0<o.length&&(n=new co("onSelect","select",null,n,r),t.push({event:n,listeners:o}),n.target=yr)))}function Ia(t,n){var r={};return r[t.toLowerCase()]=n.toLowerCase(),r["Webkit"+t]="webkit"+n,r["Moz"+t]="moz"+n,r}var br={animationend:Ia("Animation","AnimationEnd"),animationiteration:Ia("Animation","AnimationIteration"),animationstart:Ia("Animation","AnimationStart"),transitionrun:Ia("Transition","TransitionRun"),transitionstart:Ia("Transition","TransitionStart"),transitioncancel:Ia("Transition","TransitionCancel"),transitionend:Ia("Transition","TransitionEnd")},gc={},dh={};Tn&&(dh=document.createElement("div").style,"AnimationEvent"in window||(delete br.animationend.animation,delete br.animationiteration.animation,delete br.animationstart.animation),"TransitionEvent"in window||delete br.transitionend.transition);function Da(t){if(gc[t])return gc[t];if(!br[t])return t;var n=br[t],r;for(r in n)if(n.hasOwnProperty(r)&&r in dh)return gc[t]=n[r];return t}var hh=Da("animationend"),mh=Da("animationiteration"),gh=Da("animationstart"),Ow=Da("transitionrun"),Bw=Da("transitionstart"),Uw=Da("transitioncancel"),ph=Da("transitionend"),yh=new Map,pc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");pc.push("scrollEnd");function fn(t,n){yh.set(t,n),Ta(n,[t])}var bh=new WeakMap;function Ht(t,n){if(typeof t=="object"&&t!==null){var r=bh.get(t);return r!==void 0?r:(n={value:t,source:n,stack:z1(n)},bh.set(t,n),n)}return{value:t,source:n,stack:z1(n)}}var Pt=[],wr=0,yc=0;function mo(){for(var t=wr,n=yc=wr=0;n<t;){var r=Pt[n];Pt[n++]=null;var o=Pt[n];Pt[n++]=null;var l=Pt[n];Pt[n++]=null;var u=Pt[n];if(Pt[n++]=null,o!==null&&l!==null){var p=o.pending;p===null?l.next=l:(l.next=p.next,p.next=l),o.pending=l}u!==0&&wh(r,l,u)}}function go(t,n,r,o){Pt[wr++]=t,Pt[wr++]=n,Pt[wr++]=r,Pt[wr++]=o,yc|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function bc(t,n,r,o){return go(t,n,r,o),po(t)}function vr(t,n){return go(t,null,null,n),po(t)}function wh(t,n,r){t.lanes|=r;var o=t.alternate;o!==null&&(o.lanes|=r);for(var l=!1,u=t.return;u!==null;)u.childLanes|=r,o=u.alternate,o!==null&&(o.childLanes|=r),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(l=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,l&&n!==null&&(l=31-It(r),t=u.hiddenUpdates,o=t[l],o===null?t[l]=[n]:o.push(n),n.lane=r|536870912),u):null}function po(t){if(50<Vi)throw Vi=0,Lu=null,Error(f(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var xr={};function _w(t,n,r,o){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(t,n,r,o){return new _w(t,n,r,o)}function wc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Nn(t,n){var r=t.alternate;return r===null?(r=At(t.tag,n,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=n,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,n=t.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function vh(t,n){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,n=r.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function yo(t,n,r,o,l,u){var p=0;if(o=t,typeof t=="function")wc(t)&&(p=1);else if(typeof t=="string")p=Q6(t,r,xe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case se:return t=At(31,r,n,l),t.elementType=se,t.lanes=u,t;case N:return Aa(r.children,l,u,n);case C:p=8,l|=24;break;case E:return t=At(12,r,n,l|2),t.elementType=E,t.lanes=u,t;case L:return t=At(13,r,n,l),t.elementType=L,t.lanes=u,t;case R:return t=At(19,r,n,l),t.elementType=R,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case I:case G:p=10;break e;case A:p=9;break e;case _:p=11;break e;case O:p=14;break e;case q:p=16,o=null;break e}p=29,r=Error(f(130,t===null?"null":typeof t,"")),o=null}return n=At(p,r,n,l),n.elementType=t,n.type=o,n.lanes=u,n}function Aa(t,n,r,o){return t=At(7,t,o,n),t.lanes=r,t}function vc(t,n,r){return t=At(6,t,null,n),t.lanes=r,t}function xc(t,n,r){return n=At(4,t.children!==null?t.children:[],t.key,n),n.lanes=r,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Mr=[],jr=0,bo=null,wo=0,Ft=[],qt=0,za=null,In=1,Dn="";function Ra(t,n){Mr[jr++]=wo,Mr[jr++]=bo,bo=t,wo=n}function xh(t,n,r){Ft[qt++]=In,Ft[qt++]=Dn,Ft[qt++]=za,za=t;var o=In;t=Dn;var l=32-It(o)-1;o&=~(1<<l),r+=1;var u=32-It(n)+l;if(30<u){var p=l-l%5;u=(o&(1<<p)-1).toString(32),o>>=p,l-=p,In=1<<32-It(n)+l|r<<l|o,Dn=u+t}else In=1<<u|r<<l|o,Dn=t}function Mc(t){t.return!==null&&(Ra(t,1),xh(t,1,0))}function jc(t){for(;t===bo;)bo=Mr[--jr],Mr[jr]=null,wo=Mr[--jr],Mr[jr]=null;for(;t===za;)za=Ft[--qt],Ft[qt]=null,Dn=Ft[--qt],Ft[qt]=null,In=Ft[--qt],Ft[qt]=null}var pt=null,Be=null,ve=!1,Oa=null,pn=!1,Lc=Error(f(519));function Ba(t){var n=Error(f(418,""));throw Ei(Ht(n,t)),Lc}function Mh(t){var n=t.stateNode,r=t.type,o=t.memoizedProps;switch(n[ct]=t,n[Mt]=o,r){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(r=0;r<Wi.length;r++)ge(Wi[r],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),B1(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),ro(n);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),_1(n,o.value,o.defaultValue,o.children),ro(n)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||o.suppressHydrationWarning===!0||_g(n.textContent,r)?(o.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),o.onScroll!=null&&ge("scroll",n),o.onScrollEnd!=null&&ge("scrollend",n),o.onClick!=null&&(n.onclick=Ko),n=!0):n=!1,n||Ba(t)}function jh(t){for(pt=t.return;pt;)switch(pt.tag){case 5:case 13:pn=!1;return;case 27:case 3:pn=!0;return;default:pt=pt.return}}function Ci(t){if(t!==pt)return!1;if(!ve)return jh(t),ve=!0,!1;var n=t.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||Yu(t.type,t.memoizedProps)),r=!r),r&&Be&&Ba(t),jh(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(f(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(r=t.data,r==="/$"){if(n===0){Be=sn(t.nextSibling);break e}n--}else r!=="$"&&r!=="$!"&&r!=="$?"||n++;t=t.nextSibling}Be=null}}else n===27?(n=Be,ua(t.type)?(t=Zu,Zu=null,Be=t):Be=n):Be=pt?sn(t.stateNode.nextSibling):null;return!0}function ki(){Be=pt=null,ve=!1}function Lh(){var t=Oa;return t!==null&&(Ct===null?Ct=t:Ct.push.apply(Ct,t),Oa=null),t}function Ei(t){Oa===null?Oa=[t]:Oa.push(t)}var Sc=fe(null),Ua=null,An=null;function Vn(t,n,r){ce(Sc,n._currentValue),n._currentValue=r}function zn(t){t._currentValue=Sc.current,re(Sc)}function Cc(t,n,r){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===r)break;t=t.return}}function kc(t,n,r,o){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var u=l.dependencies;if(u!==null){var p=l.child;u=u.firstContext;e:for(;u!==null;){var w=u;u=l;for(var S=0;S<n.length;S++)if(w.context===n[S]){u.lanes|=r,w=u.alternate,w!==null&&(w.lanes|=r),Cc(u.return,r,t),o||(p=null);break e}u=w.next}}else if(l.tag===18){if(p=l.return,p===null)throw Error(f(341));p.lanes|=r,u=p.alternate,u!==null&&(u.lanes|=r),Cc(p,r,t),p=null}else p=l.child;if(p!==null)p.return=l;else for(p=l;p!==null;){if(p===t){p=null;break}if(l=p.sibling,l!==null){l.return=p.return,p=l;break}p=p.return}l=p}}function Ti(t,n,r,o){t=null;for(var l=n,u=!1;l!==null;){if(!u){if((l.flags&524288)!==0)u=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var p=l.alternate;if(p===null)throw Error(f(387));if(p=p.memoizedProps,p!==null){var w=l.type;Dt(l.pendingProps.value,p.value)||(t!==null?t.push(w):t=[w])}}else if(l===Cn.current){if(p=l.alternate,p===null)throw Error(f(387));p.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(rf):t=[rf])}l=l.return}t!==null&&kc(n,t,r,o),n.flags|=262144}function vo(t){for(t=t.firstContext;t!==null;){if(!Dt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function _a(t){Ua=t,An=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ut(t){return Sh(Ua,t)}function xo(t,n){return Ua===null&&_a(t),Sh(t,n)}function Sh(t,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},An===null){if(t===null)throw Error(f(308));An=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else An=An.next=n;return r}var Yw=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(r,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(r){return r()})}},Qw=e.unstable_scheduleCallback,Gw=e.unstable_NormalPriority,Xe={$$typeof:G,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ec(){return{controller:new Yw,data:new Map,refCount:0}}function Ni(t){t.refCount--,t.refCount===0&&Qw(Gw,function(){t.controller.abort()})}var Ii=null,Tc=0,Lr=0,Sr=null;function $w(t,n){if(Ii===null){var r=Ii=[];Tc=0,Lr=Iu(),Sr={status:"pending",value:void 0,then:function(o){r.push(o)}}}return Tc++,n.then(Ch,Ch),n}function Ch(){if(--Tc===0&&Ii!==null){Sr!==null&&(Sr.status="fulfilled");var t=Ii;Ii=null,Lr=0,Sr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Zw(t,n){var r=[],o={status:"pending",value:null,reason:null,then:function(l){r.push(l)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var l=0;l<r.length;l++)(0,r[l])(n)},function(l){for(o.status="rejected",o.reason=l,l=0;l<r.length;l++)(0,r[l])(void 0)}),o}var kh=U.S;U.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&$w(t,n),kh!==null&&kh(t,n)};var Ya=fe(null);function Nc(){var t=Ya.current;return t!==null?t:Ne.pooledCache}function Mo(t,n){n===null?ce(Ya,Ya.current):ce(Ya,n.pool)}function Eh(){var t=Nc();return t===null?null:{parent:Xe._currentValue,pool:t}}var Di=Error(f(460)),Th=Error(f(474)),jo=Error(f(542)),Ic={then:function(){}};function Nh(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Lo(){}function Ih(t,n,r){switch(r=t[r],r===void 0?t.push(n):r!==n&&(n.then(Lo,Lo),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Ah(t),t;default:if(typeof n.status=="string")n.then(Lo,Lo);else{if(t=Ne,t!==null&&100<t.shellSuspendCounter)throw Error(f(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=o}},function(o){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Ah(t),t}throw Ai=n,Di}}var Ai=null;function Dh(){if(Ai===null)throw Error(f(459));var t=Ai;return Ai=null,t}function Ah(t){if(t===Di||t===jo)throw Error(f(483))}var Xn=!1;function Dc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ac(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Wn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Kn(t,n,r){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(je&2)!==0){var l=o.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),o.pending=n,n=po(t),wh(t,null,r),n}return go(t,o,n,r),po(t)}function zi(t,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,r|=o,n.lanes=r,C1(t,r)}}function zc(t,n){var r=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var l=null,u=null;if(r=r.firstBaseUpdate,r!==null){do{var p={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};u===null?l=u=p:u=u.next=p,r=r.next}while(r!==null);u===null?l=u=n:u=u.next=n}else l=u=n;r={baseState:o.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:o.shared,callbacks:o.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=n:t.next=n,r.lastBaseUpdate=n}var Rc=!1;function Ri(){if(Rc){var t=Sr;if(t!==null)throw t}}function Oi(t,n,r,o){Rc=!1;var l=t.updateQueue;Xn=!1;var u=l.firstBaseUpdate,p=l.lastBaseUpdate,w=l.shared.pending;if(w!==null){l.shared.pending=null;var S=w,B=S.next;S.next=null,p===null?u=B:p.next=B,p=S;var Z=t.alternate;Z!==null&&(Z=Z.updateQueue,w=Z.lastBaseUpdate,w!==p&&(w===null?Z.firstBaseUpdate=B:w.next=B,Z.lastBaseUpdate=S))}if(u!==null){var H=l.baseState;p=0,Z=B=S=null,w=u;do{var Y=w.lane&-536870913,Q=Y!==w.lane;if(Q?(be&Y)===Y:(o&Y)===Y){Y!==0&&Y===Lr&&(Rc=!0),Z!==null&&(Z=Z.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var ae=t,ee=w;Y=n;var Ee=r;switch(ee.tag){case 1:if(ae=ee.payload,typeof ae=="function"){H=ae.call(Ee,H,Y);break e}H=ae;break e;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=ee.payload,Y=typeof ae=="function"?ae.call(Ee,H,Y):ae,Y==null)break e;H=v({},H,Y);break e;case 2:Xn=!0}}Y=w.callback,Y!==null&&(t.flags|=64,Q&&(t.flags|=8192),Q=l.callbacks,Q===null?l.callbacks=[Y]:Q.push(Y))}else Q={lane:Y,tag:w.tag,payload:w.payload,callback:w.callback,next:null},Z===null?(B=Z=Q,S=H):Z=Z.next=Q,p|=Y;if(w=w.next,w===null){if(w=l.shared.pending,w===null)break;Q=w,w=Q.next,Q.next=null,l.lastBaseUpdate=Q,l.shared.pending=null}}while(!0);Z===null&&(S=H),l.baseState=S,l.firstBaseUpdate=B,l.lastBaseUpdate=Z,u===null&&(l.shared.lanes=0),oa|=p,t.lanes=p,t.memoizedState=H}}function zh(t,n){if(typeof t!="function")throw Error(f(191,t));t.call(n)}function Rh(t,n){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)zh(r[t],n)}var Cr=fe(null),So=fe(0);function Oh(t,n){t=Qn,ce(So,t),ce(Cr,n),Qn=t|n.baseLanes}function Oc(){ce(So,Qn),ce(Cr,Cr.current)}function Bc(){Qn=So.current,re(Cr),re(So)}var ea=0,le=null,Ce=null,He=null,Co=!1,kr=!1,Qa=!1,ko=0,Bi=0,Er=null,Jw=0;function Qe(){throw Error(f(321))}function Uc(t,n){if(n===null)return!1;for(var r=0;r<n.length&&r<t.length;r++)if(!Dt(t[r],n[r]))return!1;return!0}function _c(t,n,r,o,l,u){return ea=u,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,U.H=t===null||t.memoizedState===null?wm:vm,Qa=!1,u=r(o,l),Qa=!1,kr&&(u=Uh(n,r,o,l)),Bh(t),u}function Bh(t){U.H=Ao;var n=Ce!==null&&Ce.next!==null;if(ea=0,He=Ce=le=null,Co=!1,Bi=0,Er=null,n)throw Error(f(300));t===null||et||(t=t.dependencies,t!==null&&vo(t)&&(et=!0))}function Uh(t,n,r,o){le=t;var l=0;do{if(kr&&(Er=null),Bi=0,kr=!1,25<=l)throw Error(f(301));if(l+=1,He=Ce=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}U.H=Ww,u=n(r,o)}while(kr);return u}function Hw(){var t=U.H,n=t.useState()[0];return n=typeof n.then=="function"?Ui(n):n,t=t.useState()[0],(Ce!==null?Ce.memoizedState:null)!==t&&(le.flags|=1024),n}function Yc(){var t=ko!==0;return ko=0,t}function Qc(t,n,r){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~r}function Gc(t){if(Co){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Co=!1}ea=0,He=Ce=le=null,kr=!1,Bi=ko=0,Er=null}function Lt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?le.memoizedState=He=t:He=He.next=t,He}function Pe(){if(Ce===null){var t=le.alternate;t=t!==null?t.memoizedState:null}else t=Ce.next;var n=He===null?le.memoizedState:He.next;if(n!==null)He=n,Ce=t;else{if(t===null)throw le.alternate===null?Error(f(467)):Error(f(310));Ce=t,t={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},He===null?le.memoizedState=He=t:He=He.next=t}return He}function $c(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ui(t){var n=Bi;return Bi+=1,Er===null&&(Er=[]),t=Ih(Er,t,n),n=le,(He===null?n.memoizedState:He.next)===null&&(n=n.alternate,U.H=n===null||n.memoizedState===null?wm:vm),t}function Eo(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ui(t);if(t.$$typeof===G)return ut(t)}throw Error(f(438,String(t)))}function Zc(t){var n=null,r=le.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var o=le.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=$c(),le.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(t),o=0;o<t;o++)r[o]=Ye;return n.index++,r}function Rn(t,n){return typeof n=="function"?n(t):n}function To(t){var n=Pe();return Jc(n,Ce,t)}function Jc(t,n,r){var o=t.queue;if(o===null)throw Error(f(311));o.lastRenderedReducer=r;var l=t.baseQueue,u=o.pending;if(u!==null){if(l!==null){var p=l.next;l.next=u.next,u.next=p}n.baseQueue=l=u,o.pending=null}if(u=t.baseState,l===null)t.memoizedState=u;else{n=l.next;var w=p=null,S=null,B=n,Z=!1;do{var H=B.lane&-536870913;if(H!==B.lane?(be&H)===H:(ea&H)===H){var Y=B.revertLane;if(Y===0)S!==null&&(S=S.next={lane:0,revertLane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),H===Lr&&(Z=!0);else if((ea&Y)===Y){B=B.next,Y===Lr&&(Z=!0);continue}else H={lane:0,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},S===null?(w=S=H,p=u):S=S.next=H,le.lanes|=Y,oa|=Y;H=B.action,Qa&&r(u,H),u=B.hasEagerState?B.eagerState:r(u,H)}else Y={lane:H,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},S===null?(w=S=Y,p=u):S=S.next=Y,le.lanes|=H,oa|=H;B=B.next}while(B!==null&&B!==n);if(S===null?p=u:S.next=w,!Dt(u,t.memoizedState)&&(et=!0,Z&&(r=Sr,r!==null)))throw r;t.memoizedState=u,t.baseState=p,t.baseQueue=S,o.lastRenderedState=u}return l===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Hc(t){var n=Pe(),r=n.queue;if(r===null)throw Error(f(311));r.lastRenderedReducer=t;var o=r.dispatch,l=r.pending,u=n.memoizedState;if(l!==null){r.pending=null;var p=l=l.next;do u=t(u,p.action),p=p.next;while(p!==l);Dt(u,n.memoizedState)||(et=!0),n.memoizedState=u,n.baseQueue===null&&(n.baseState=u),r.lastRenderedState=u}return[u,o]}function _h(t,n,r){var o=le,l=Pe(),u=ve;if(u){if(r===void 0)throw Error(f(407));r=r()}else r=n();var p=!Dt((Ce||l).memoizedState,r);p&&(l.memoizedState=r,et=!0),l=l.queue;var w=Gh.bind(null,o,l,t);if(_i(2048,8,w,[t]),l.getSnapshot!==n||p||He!==null&&He.memoizedState.tag&1){if(o.flags|=2048,Tr(9,No(),Qh.bind(null,o,l,r,n),null),Ne===null)throw Error(f(349));u||(ea&124)!==0||Yh(o,n,r)}return r}function Yh(t,n,r){t.flags|=16384,t={getSnapshot:n,value:r},n=le.updateQueue,n===null?(n=$c(),le.updateQueue=n,n.stores=[t]):(r=n.stores,r===null?n.stores=[t]:r.push(t))}function Qh(t,n,r,o){n.value=r,n.getSnapshot=o,$h(n)&&Zh(t)}function Gh(t,n,r){return r(function(){$h(n)&&Zh(t)})}function $h(t){var n=t.getSnapshot;t=t.value;try{var r=n();return!Dt(t,r)}catch{return!0}}function Zh(t){var n=vr(t,2);n!==null&&Ut(n,t,2)}function Pc(t){var n=Lt();if(typeof t=="function"){var r=t;if(t=r(),Qa){Pn(!0);try{r()}finally{Pn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rn,lastRenderedState:t},n}function Jh(t,n,r,o){return t.baseState=r,Jc(t,Ce,typeof o=="function"?o:Rn)}function Pw(t,n,r,o,l){if(Do(t))throw Error(f(485));if(t=n.action,t!==null){var u={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){u.listeners.push(p)}};U.T!==null?r(!0):u.isTransition=!1,o(u),r=n.pending,r===null?(u.next=n.pending=u,Hh(n,u)):(u.next=r.next,n.pending=r.next=u)}}function Hh(t,n){var r=n.action,o=n.payload,l=t.state;if(n.isTransition){var u=U.T,p={};U.T=p;try{var w=r(l,o),S=U.S;S!==null&&S(p,w),Ph(t,n,w)}catch(B){Fc(t,n,B)}finally{U.T=u}}else try{u=r(l,o),Ph(t,n,u)}catch(B){Fc(t,n,B)}}function Ph(t,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){Fh(t,n,o)},function(o){return Fc(t,n,o)}):Fh(t,n,r)}function Fh(t,n,r){n.status="fulfilled",n.value=r,qh(n),t.state=r,n=t.pending,n!==null&&(r=n.next,r===n?t.pending=null:(r=r.next,n.next=r,Hh(t,r)))}function Fc(t,n,r){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=r,qh(n),n=n.next;while(n!==o)}t.action=null}function qh(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Vh(t,n){return n}function Xh(t,n){if(ve){var r=Ne.formState;if(r!==null){e:{var o=le;if(ve){if(Be){t:{for(var l=Be,u=pn;l.nodeType!==8;){if(!u){l=null;break t}if(l=sn(l.nextSibling),l===null){l=null;break t}}u=l.data,l=u==="F!"||u==="F"?l:null}if(l){Be=sn(l.nextSibling),o=l.data==="F!";break e}}Ba(o)}o=!1}o&&(n=r[0])}}return r=Lt(),r.memoizedState=r.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vh,lastRenderedState:n},r.queue=o,r=pm.bind(null,le,o),o.dispatch=r,o=Pc(!1),u=Kc.bind(null,le,!1,o.queue),o=Lt(),l={state:n,dispatch:null,action:t,pending:null},o.queue=l,r=Pw.bind(null,le,l,u,r),l.dispatch=r,o.memoizedState=t,[n,r,!1]}function Wh(t){var n=Pe();return Kh(n,Ce,t)}function Kh(t,n,r){if(n=Jc(t,n,Vh)[0],t=To(Rn)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Ui(n)}catch(p){throw p===Di?jo:p}else o=n;n=Pe();var l=n.queue,u=l.dispatch;return r!==n.memoizedState&&(le.flags|=2048,Tr(9,No(),Fw.bind(null,l,r),null)),[o,u,t]}function Fw(t,n){t.action=n}function em(t){var n=Pe(),r=Ce;if(r!==null)return Kh(n,r,t);Pe(),n=n.memoizedState,r=Pe();var o=r.queue.dispatch;return r.memoizedState=t,[n,o,!1]}function Tr(t,n,r,o){return t={tag:t,create:r,deps:o,inst:n,next:null},n=le.updateQueue,n===null&&(n=$c(),le.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=t.next=t:(o=r.next,r.next=t,t.next=o,n.lastEffect=t),t}function No(){return{destroy:void 0,resource:void 0}}function tm(){return Pe().memoizedState}function Io(t,n,r,o){var l=Lt();o=o===void 0?null:o,le.flags|=t,l.memoizedState=Tr(1|n,No(),r,o)}function _i(t,n,r,o){var l=Pe();o=o===void 0?null:o;var u=l.memoizedState.inst;Ce!==null&&o!==null&&Uc(o,Ce.memoizedState.deps)?l.memoizedState=Tr(n,u,r,o):(le.flags|=t,l.memoizedState=Tr(1|n,u,r,o))}function nm(t,n){Io(8390656,8,t,n)}function am(t,n){_i(2048,8,t,n)}function rm(t,n){return _i(4,2,t,n)}function im(t,n){return _i(4,4,t,n)}function fm(t,n){if(typeof n=="function"){t=t();var r=n(t);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function om(t,n,r){r=r!=null?r.concat([t]):null,_i(4,4,fm.bind(null,n,t),r)}function qc(){}function sm(t,n){var r=Pe();n=n===void 0?null:n;var o=r.memoizedState;return n!==null&&Uc(n,o[1])?o[0]:(r.memoizedState=[t,n],t)}function lm(t,n){var r=Pe();n=n===void 0?null:n;var o=r.memoizedState;if(n!==null&&Uc(n,o[1]))return o[0];if(o=t(),Qa){Pn(!0);try{t()}finally{Pn(!1)}}return r.memoizedState=[o,n],o}function Vc(t,n,r){return r===void 0||(ea&1073741824)!==0?t.memoizedState=n:(t.memoizedState=r,t=dg(),le.lanes|=t,oa|=t,r)}function cm(t,n,r,o){return Dt(r,n)?r:Cr.current!==null?(t=Vc(t,r,o),Dt(t,n)||(et=!0),t):(ea&42)===0?(et=!0,t.memoizedState=r):(t=dg(),le.lanes|=t,oa|=t,n)}function um(t,n,r,o,l){var u=P.p;P.p=u!==0&&8>u?u:8;var p=U.T,w={};U.T=w,Kc(t,!1,n,r);try{var S=l(),B=U.S;if(B!==null&&B(w,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var Z=Zw(S,o);Yi(t,n,Z,Bt(t))}else Yi(t,n,o,Bt(t))}catch(H){Yi(t,n,{then:function(){},status:"rejected",reason:H},Bt())}finally{P.p=u,U.T=p}}function qw(){}function Xc(t,n,r,o){if(t.tag!==5)throw Error(f(476));var l=dm(t).queue;um(t,l,n,F,r===null?qw:function(){return hm(t),r(o)})}function dm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rn,lastRenderedState:F},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rn,lastRenderedState:r},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function hm(t){var n=dm(t).next.queue;Yi(t,n,{},Bt())}function Wc(){return ut(rf)}function mm(){return Pe().memoizedState}function gm(){return Pe().memoizedState}function Vw(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var r=Bt();t=Wn(r);var o=Kn(n,t,r);o!==null&&(Ut(o,n,r),zi(o,n,r)),n={cache:Ec()},t.payload=n;return}n=n.return}}function Xw(t,n,r){var o=Bt();r={lane:o,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},Do(t)?ym(n,r):(r=bc(t,n,r,o),r!==null&&(Ut(r,t,o),bm(r,n,o)))}function pm(t,n,r){var o=Bt();Yi(t,n,r,o)}function Yi(t,n,r,o){var l={lane:o,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(Do(t))ym(n,l);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=n.lastRenderedReducer,u!==null))try{var p=n.lastRenderedState,w=u(p,r);if(l.hasEagerState=!0,l.eagerState=w,Dt(w,p))return go(t,n,l,0),Ne===null&&mo(),!1}catch{}finally{}if(r=bc(t,n,l,o),r!==null)return Ut(r,t,o),bm(r,n,o),!0}return!1}function Kc(t,n,r,o){if(o={lane:2,revertLane:Iu(),action:o,hasEagerState:!1,eagerState:null,next:null},Do(t)){if(n)throw Error(f(479))}else n=bc(t,r,o,2),n!==null&&Ut(n,t,2)}function Do(t){var n=t.alternate;return t===le||n!==null&&n===le}function ym(t,n){kr=Co=!0;var r=t.pending;r===null?n.next=n:(n.next=r.next,r.next=n),t.pending=n}function bm(t,n,r){if((r&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,r|=o,n.lanes=r,C1(t,r)}}var Ao={readContext:ut,use:Eo,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe},wm={readContext:ut,use:Eo,useCallback:function(t,n){return Lt().memoizedState=[t,n===void 0?null:n],t},useContext:ut,useEffect:nm,useImperativeHandle:function(t,n,r){r=r!=null?r.concat([t]):null,Io(4194308,4,fm.bind(null,n,t),r)},useLayoutEffect:function(t,n){return Io(4194308,4,t,n)},useInsertionEffect:function(t,n){Io(4,2,t,n)},useMemo:function(t,n){var r=Lt();n=n===void 0?null:n;var o=t();if(Qa){Pn(!0);try{t()}finally{Pn(!1)}}return r.memoizedState=[o,n],o},useReducer:function(t,n,r){var o=Lt();if(r!==void 0){var l=r(n);if(Qa){Pn(!0);try{r(n)}finally{Pn(!1)}}}else l=n;return o.memoizedState=o.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},o.queue=t,t=t.dispatch=Xw.bind(null,le,t),[o.memoizedState,t]},useRef:function(t){var n=Lt();return t={current:t},n.memoizedState=t},useState:function(t){t=Pc(t);var n=t.queue,r=pm.bind(null,le,n);return n.dispatch=r,[t.memoizedState,r]},useDebugValue:qc,useDeferredValue:function(t,n){var r=Lt();return Vc(r,t,n)},useTransition:function(){var t=Pc(!1);return t=um.bind(null,le,t.queue,!0,!1),Lt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,r){var o=le,l=Lt();if(ve){if(r===void 0)throw Error(f(407));r=r()}else{if(r=n(),Ne===null)throw Error(f(349));(be&124)!==0||Yh(o,n,r)}l.memoizedState=r;var u={value:r,getSnapshot:n};return l.queue=u,nm(Gh.bind(null,o,u,t),[t]),o.flags|=2048,Tr(9,No(),Qh.bind(null,o,u,r,n),null),r},useId:function(){var t=Lt(),n=Ne.identifierPrefix;if(ve){var r=Dn,o=In;r=(o&~(1<<32-It(o)-1)).toString(32)+r,n="«"+n+"R"+r,r=ko++,0<r&&(n+="H"+r.toString(32)),n+="»"}else r=Jw++,n="«"+n+"r"+r.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:Wc,useFormState:Xh,useActionState:Xh,useOptimistic:function(t){var n=Lt();n.memoizedState=n.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=Kc.bind(null,le,!0,r),r.dispatch=n,[t,n]},useMemoCache:Zc,useCacheRefresh:function(){return Lt().memoizedState=Vw.bind(null,le)}},vm={readContext:ut,use:Eo,useCallback:sm,useContext:ut,useEffect:am,useImperativeHandle:om,useInsertionEffect:rm,useLayoutEffect:im,useMemo:lm,useReducer:To,useRef:tm,useState:function(){return To(Rn)},useDebugValue:qc,useDeferredValue:function(t,n){var r=Pe();return cm(r,Ce.memoizedState,t,n)},useTransition:function(){var t=To(Rn)[0],n=Pe().memoizedState;return[typeof t=="boolean"?t:Ui(t),n]},useSyncExternalStore:_h,useId:mm,useHostTransitionStatus:Wc,useFormState:Wh,useActionState:Wh,useOptimistic:function(t,n){var r=Pe();return Jh(r,Ce,t,n)},useMemoCache:Zc,useCacheRefresh:gm},Ww={readContext:ut,use:Eo,useCallback:sm,useContext:ut,useEffect:am,useImperativeHandle:om,useInsertionEffect:rm,useLayoutEffect:im,useMemo:lm,useReducer:Hc,useRef:tm,useState:function(){return Hc(Rn)},useDebugValue:qc,useDeferredValue:function(t,n){var r=Pe();return Ce===null?Vc(r,t,n):cm(r,Ce.memoizedState,t,n)},useTransition:function(){var t=Hc(Rn)[0],n=Pe().memoizedState;return[typeof t=="boolean"?t:Ui(t),n]},useSyncExternalStore:_h,useId:mm,useHostTransitionStatus:Wc,useFormState:em,useActionState:em,useOptimistic:function(t,n){var r=Pe();return Ce!==null?Jh(r,Ce,t,n):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:Zc,useCacheRefresh:gm},Nr=null,Qi=0;function zo(t){var n=Qi;return Qi+=1,Nr===null&&(Nr=[]),Ih(Nr,t,n)}function Gi(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ro(t,n){throw n.$$typeof===M?Error(f(525)):(t=Object.prototype.toString.call(n),Error(f(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function xm(t){var n=t._init;return n(t._payload)}function Mm(t){function n(D,T){if(t){var z=D.deletions;z===null?(D.deletions=[T],D.flags|=16):z.push(T)}}function r(D,T){if(!t)return null;for(;T!==null;)n(D,T),T=T.sibling;return null}function o(D){for(var T=new Map;D!==null;)D.key!==null?T.set(D.key,D):T.set(D.index,D),D=D.sibling;return T}function l(D,T){return D=Nn(D,T),D.index=0,D.sibling=null,D}function u(D,T,z){return D.index=z,t?(z=D.alternate,z!==null?(z=z.index,z<T?(D.flags|=67108866,T):z):(D.flags|=67108866,T)):(D.flags|=1048576,T)}function p(D){return t&&D.alternate===null&&(D.flags|=67108866),D}function w(D,T,z,J){return T===null||T.tag!==6?(T=vc(z,D.mode,J),T.return=D,T):(T=l(T,z),T.return=D,T)}function S(D,T,z,J){var X=z.type;return X===N?Z(D,T,z.props.children,J,z.key):T!==null&&(T.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===q&&xm(X)===T.type)?(T=l(T,z.props),Gi(T,z),T.return=D,T):(T=yo(z.type,z.key,z.props,null,D.mode,J),Gi(T,z),T.return=D,T)}function B(D,T,z,J){return T===null||T.tag!==4||T.stateNode.containerInfo!==z.containerInfo||T.stateNode.implementation!==z.implementation?(T=xc(z,D.mode,J),T.return=D,T):(T=l(T,z.children||[]),T.return=D,T)}function Z(D,T,z,J,X){return T===null||T.tag!==7?(T=Aa(z,D.mode,J,X),T.return=D,T):(T=l(T,z),T.return=D,T)}function H(D,T,z){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=vc(""+T,D.mode,z),T.return=D,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case j:return z=yo(T.type,T.key,T.props,null,D.mode,z),Gi(z,T),z.return=D,z;case k:return T=xc(T,D.mode,z),T.return=D,T;case q:var J=T._init;return T=J(T._payload),H(D,T,z)}if(V(T)||Oe(T))return T=Aa(T,D.mode,z,null),T.return=D,T;if(typeof T.then=="function")return H(D,zo(T),z);if(T.$$typeof===G)return H(D,xo(D,T),z);Ro(D,T)}return null}function Y(D,T,z,J){var X=T!==null?T.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return X!==null?null:w(D,T,""+z,J);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case j:return z.key===X?S(D,T,z,J):null;case k:return z.key===X?B(D,T,z,J):null;case q:return X=z._init,z=X(z._payload),Y(D,T,z,J)}if(V(z)||Oe(z))return X!==null?null:Z(D,T,z,J,null);if(typeof z.then=="function")return Y(D,T,zo(z),J);if(z.$$typeof===G)return Y(D,T,xo(D,z),J);Ro(D,z)}return null}function Q(D,T,z,J,X){if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return D=D.get(z)||null,w(T,D,""+J,X);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case j:return D=D.get(J.key===null?z:J.key)||null,S(T,D,J,X);case k:return D=D.get(J.key===null?z:J.key)||null,B(T,D,J,X);case q:var ue=J._init;return J=ue(J._payload),Q(D,T,z,J,X)}if(V(J)||Oe(J))return D=D.get(z)||null,Z(T,D,J,X,null);if(typeof J.then=="function")return Q(D,T,z,zo(J),X);if(J.$$typeof===G)return Q(D,T,z,xo(T,J),X);Ro(T,J)}return null}function ae(D,T,z,J){for(var X=null,ue=null,K=T,ne=T=0,nt=null;K!==null&&ne<z.length;ne++){K.index>ne?(nt=K,K=null):nt=K.sibling;var we=Y(D,K,z[ne],J);if(we===null){K===null&&(K=nt);break}t&&K&&we.alternate===null&&n(D,K),T=u(we,T,ne),ue===null?X=we:ue.sibling=we,ue=we,K=nt}if(ne===z.length)return r(D,K),ve&&Ra(D,ne),X;if(K===null){for(;ne<z.length;ne++)K=H(D,z[ne],J),K!==null&&(T=u(K,T,ne),ue===null?X=K:ue.sibling=K,ue=K);return ve&&Ra(D,ne),X}for(K=o(K);ne<z.length;ne++)nt=Q(K,D,ne,z[ne],J),nt!==null&&(t&&nt.alternate!==null&&K.delete(nt.key===null?ne:nt.key),T=u(nt,T,ne),ue===null?X=nt:ue.sibling=nt,ue=nt);return t&&K.forEach(function(pa){return n(D,pa)}),ve&&Ra(D,ne),X}function ee(D,T,z,J){if(z==null)throw Error(f(151));for(var X=null,ue=null,K=T,ne=T=0,nt=null,we=z.next();K!==null&&!we.done;ne++,we=z.next()){K.index>ne?(nt=K,K=null):nt=K.sibling;var pa=Y(D,K,we.value,J);if(pa===null){K===null&&(K=nt);break}t&&K&&pa.alternate===null&&n(D,K),T=u(pa,T,ne),ue===null?X=pa:ue.sibling=pa,ue=pa,K=nt}if(we.done)return r(D,K),ve&&Ra(D,ne),X;if(K===null){for(;!we.done;ne++,we=z.next())we=H(D,we.value,J),we!==null&&(T=u(we,T,ne),ue===null?X=we:ue.sibling=we,ue=we);return ve&&Ra(D,ne),X}for(K=o(K);!we.done;ne++,we=z.next())we=Q(K,D,ne,we.value,J),we!==null&&(t&&we.alternate!==null&&K.delete(we.key===null?ne:we.key),T=u(we,T,ne),ue===null?X=we:ue.sibling=we,ue=we);return t&&K.forEach(function(K6){return n(D,K6)}),ve&&Ra(D,ne),X}function Ee(D,T,z,J){if(typeof z=="object"&&z!==null&&z.type===N&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case j:e:{for(var X=z.key;T!==null;){if(T.key===X){if(X=z.type,X===N){if(T.tag===7){r(D,T.sibling),J=l(T,z.props.children),J.return=D,D=J;break e}}else if(T.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===q&&xm(X)===T.type){r(D,T.sibling),J=l(T,z.props),Gi(J,z),J.return=D,D=J;break e}r(D,T);break}else n(D,T);T=T.sibling}z.type===N?(J=Aa(z.props.children,D.mode,J,z.key),J.return=D,D=J):(J=yo(z.type,z.key,z.props,null,D.mode,J),Gi(J,z),J.return=D,D=J)}return p(D);case k:e:{for(X=z.key;T!==null;){if(T.key===X)if(T.tag===4&&T.stateNode.containerInfo===z.containerInfo&&T.stateNode.implementation===z.implementation){r(D,T.sibling),J=l(T,z.children||[]),J.return=D,D=J;break e}else{r(D,T);break}else n(D,T);T=T.sibling}J=xc(z,D.mode,J),J.return=D,D=J}return p(D);case q:return X=z._init,z=X(z._payload),Ee(D,T,z,J)}if(V(z))return ae(D,T,z,J);if(Oe(z)){if(X=Oe(z),typeof X!="function")throw Error(f(150));return z=X.call(z),ee(D,T,z,J)}if(typeof z.then=="function")return Ee(D,T,zo(z),J);if(z.$$typeof===G)return Ee(D,T,xo(D,z),J);Ro(D,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,T!==null&&T.tag===6?(r(D,T.sibling),J=l(T,z),J.return=D,D=J):(r(D,T),J=vc(z,D.mode,J),J.return=D,D=J),p(D)):r(D,T)}return function(D,T,z,J){try{Qi=0;var X=Ee(D,T,z,J);return Nr=null,X}catch(K){if(K===Di||K===jo)throw K;var ue=At(29,K,null,D.mode);return ue.lanes=J,ue.return=D,ue}finally{}}}var Ir=Mm(!0),jm=Mm(!1),Vt=fe(null),yn=null;function ta(t){var n=t.alternate;ce(We,We.current&1),ce(Vt,t),yn===null&&(n===null||Cr.current!==null||n.memoizedState!==null)&&(yn=t)}function Lm(t){if(t.tag===22){if(ce(We,We.current),ce(Vt,t),yn===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(yn=t)}}else na()}function na(){ce(We,We.current),ce(Vt,Vt.current)}function On(t){re(Vt),yn===t&&(yn=null),re(We)}var We=fe(0);function Oo(t){for(var n=t;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||$u(r)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function eu(t,n,r,o){n=t.memoizedState,r=r(o,n),r=r==null?n:v({},n,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var tu={enqueueSetState:function(t,n,r){t=t._reactInternals;var o=Bt(),l=Wn(o);l.payload=n,r!=null&&(l.callback=r),n=Kn(t,l,o),n!==null&&(Ut(n,t,o),zi(n,t,o))},enqueueReplaceState:function(t,n,r){t=t._reactInternals;var o=Bt(),l=Wn(o);l.tag=1,l.payload=n,r!=null&&(l.callback=r),n=Kn(t,l,o),n!==null&&(Ut(n,t,o),zi(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var r=Bt(),o=Wn(r);o.tag=2,n!=null&&(o.callback=n),n=Kn(t,o,r),n!==null&&(Ut(n,t,r),zi(n,t,r))}};function Sm(t,n,r,o,l,u,p){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,u,p):n.prototype&&n.prototype.isPureReactComponent?!Li(r,o)||!Li(l,u):!0}function Cm(t,n,r,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,o),n.state!==t&&tu.enqueueReplaceState(n,n.state,null)}function Ga(t,n){var r=n;if("ref"in n){r={};for(var o in n)o!=="ref"&&(r[o]=n[o])}if(t=t.defaultProps){r===n&&(r=v({},r));for(var l in t)r[l]===void 0&&(r[l]=t[l])}return r}var Bo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function km(t){Bo(t)}function Em(t){console.error(t)}function Tm(t){Bo(t)}function Uo(t,n){try{var r=t.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Nm(t,n,r){try{var o=t.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function nu(t,n,r){return r=Wn(r),r.tag=3,r.payload={element:null},r.callback=function(){Uo(t,n)},r}function Im(t){return t=Wn(t),t.tag=3,t}function Dm(t,n,r,o){var l=r.type.getDerivedStateFromError;if(typeof l=="function"){var u=o.value;t.payload=function(){return l(u)},t.callback=function(){Nm(n,r,o)}}var p=r.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(t.callback=function(){Nm(n,r,o),typeof l!="function"&&(sa===null?sa=new Set([this]):sa.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})})}function Kw(t,n,r,o,l){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=r.alternate,n!==null&&Ti(n,r,l,!0),r=Vt.current,r!==null){switch(r.tag){case 13:return yn===null?Cu():r.alternate===null&&Ue===0&&(Ue=3),r.flags&=-257,r.flags|=65536,r.lanes=l,o===Ic?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([o]):n.add(o),Eu(t,o,l)),!1;case 22:return r.flags|=65536,o===Ic?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([o]):r.add(o)),Eu(t,o,l)),!1}throw Error(f(435,r.tag))}return Eu(t,o,l),Cu(),!1}if(ve)return n=Vt.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,o!==Lc&&(t=Error(f(422),{cause:o}),Ei(Ht(t,r)))):(o!==Lc&&(n=Error(f(423),{cause:o}),Ei(Ht(n,r))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,o=Ht(o,r),l=nu(t.stateNode,o,l),zc(t,l),Ue!==4&&(Ue=2)),!1;var u=Error(f(520),{cause:o});if(u=Ht(u,r),qi===null?qi=[u]:qi.push(u),Ue!==4&&(Ue=2),n===null)return!0;o=Ht(o,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,t=l&-l,r.lanes|=t,t=nu(r.stateNode,o,t),zc(r,t),!1;case 1:if(n=r.type,u=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(sa===null||!sa.has(u))))return r.flags|=65536,l&=-l,r.lanes|=l,l=Im(l),Dm(l,t,r,o),zc(r,l),!1}r=r.return}while(r!==null);return!1}var Am=Error(f(461)),et=!1;function ot(t,n,r,o){n.child=t===null?jm(n,null,r,o):Ir(n,t.child,r,o)}function zm(t,n,r,o,l){r=r.render;var u=n.ref;if("ref"in o){var p={};for(var w in o)w!=="ref"&&(p[w]=o[w])}else p=o;return _a(n),o=_c(t,n,r,p,u,l),w=Yc(),t!==null&&!et?(Qc(t,n,l),Bn(t,n,l)):(ve&&w&&Mc(n),n.flags|=1,ot(t,n,o,l),n.child)}function Rm(t,n,r,o,l){if(t===null){var u=r.type;return typeof u=="function"&&!wc(u)&&u.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=u,Om(t,n,u,o,l)):(t=yo(r.type,null,o,n,n.mode,l),t.ref=n.ref,t.return=n,n.child=t)}if(u=t.child,!cu(t,l)){var p=u.memoizedProps;if(r=r.compare,r=r!==null?r:Li,r(p,o)&&t.ref===n.ref)return Bn(t,n,l)}return n.flags|=1,t=Nn(u,o),t.ref=n.ref,t.return=n,n.child=t}function Om(t,n,r,o,l){if(t!==null){var u=t.memoizedProps;if(Li(u,o)&&t.ref===n.ref)if(et=!1,n.pendingProps=o=u,cu(t,l))(t.flags&131072)!==0&&(et=!0);else return n.lanes=t.lanes,Bn(t,n,l)}return au(t,n,r,o,l)}function Bm(t,n,r){var o=n.pendingProps,l=o.children,u=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=u!==null?u.baseLanes|r:r,t!==null){for(l=n.child=t.child,u=0;l!==null;)u=u|l.lanes|l.childLanes,l=l.sibling;n.childLanes=u&~o}else n.childLanes=0,n.child=null;return Um(t,n,o,r)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Mo(n,u!==null?u.cachePool:null),u!==null?Oh(n,u):Oc(),Lm(n);else return n.lanes=n.childLanes=536870912,Um(t,n,u!==null?u.baseLanes|r:r,r)}else u!==null?(Mo(n,u.cachePool),Oh(n,u),na(),n.memoizedState=null):(t!==null&&Mo(n,null),Oc(),na());return ot(t,n,l,r),n.child}function Um(t,n,r,o){var l=Nc();return l=l===null?null:{parent:Xe._currentValue,pool:l},n.memoizedState={baseLanes:r,cachePool:l},t!==null&&Mo(n,null),Oc(),Lm(n),t!==null&&Ti(t,n,o,!0),null}function _o(t,n){var r=n.ref;if(r===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(f(284));(t===null||t.ref!==r)&&(n.flags|=4194816)}}function au(t,n,r,o,l){return _a(n),r=_c(t,n,r,o,void 0,l),o=Yc(),t!==null&&!et?(Qc(t,n,l),Bn(t,n,l)):(ve&&o&&Mc(n),n.flags|=1,ot(t,n,r,l),n.child)}function _m(t,n,r,o,l,u){return _a(n),n.updateQueue=null,r=Uh(n,o,r,l),Bh(t),o=Yc(),t!==null&&!et?(Qc(t,n,u),Bn(t,n,u)):(ve&&o&&Mc(n),n.flags|=1,ot(t,n,r,u),n.child)}function Ym(t,n,r,o,l){if(_a(n),n.stateNode===null){var u=xr,p=r.contextType;typeof p=="object"&&p!==null&&(u=ut(p)),u=new r(o,u),n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=tu,n.stateNode=u,u._reactInternals=n,u=n.stateNode,u.props=o,u.state=n.memoizedState,u.refs={},Dc(n),p=r.contextType,u.context=typeof p=="object"&&p!==null?ut(p):xr,u.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(eu(n,r,p,o),u.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(p=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),p!==u.state&&tu.enqueueReplaceState(u,u.state,null),Oi(n,o,u,l),Ri(),u.state=n.memoizedState),typeof u.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){u=n.stateNode;var w=n.memoizedProps,S=Ga(r,w);u.props=S;var B=u.context,Z=r.contextType;p=xr,typeof Z=="object"&&Z!==null&&(p=ut(Z));var H=r.getDerivedStateFromProps;Z=typeof H=="function"||typeof u.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,Z||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(w||B!==p)&&Cm(n,u,o,p),Xn=!1;var Y=n.memoizedState;u.state=Y,Oi(n,o,u,l),Ri(),B=n.memoizedState,w||Y!==B||Xn?(typeof H=="function"&&(eu(n,r,H,o),B=n.memoizedState),(S=Xn||Sm(n,r,S,o,Y,B,p))?(Z||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(n.flags|=4194308)):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=B),u.props=o,u.state=B,u.context=p,o=S):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{u=n.stateNode,Ac(t,n),p=n.memoizedProps,Z=Ga(r,p),u.props=Z,H=n.pendingProps,Y=u.context,B=r.contextType,S=xr,typeof B=="object"&&B!==null&&(S=ut(B)),w=r.getDerivedStateFromProps,(B=typeof w=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(p!==H||Y!==S)&&Cm(n,u,o,S),Xn=!1,Y=n.memoizedState,u.state=Y,Oi(n,o,u,l),Ri();var Q=n.memoizedState;p!==H||Y!==Q||Xn||t!==null&&t.dependencies!==null&&vo(t.dependencies)?(typeof w=="function"&&(eu(n,r,w,o),Q=n.memoizedState),(Z=Xn||Sm(n,r,Z,o,Y,Q,S)||t!==null&&t.dependencies!==null&&vo(t.dependencies))?(B||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(o,Q,S),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(o,Q,S)),typeof u.componentDidUpdate=="function"&&(n.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof u.componentDidUpdate!="function"||p===t.memoizedProps&&Y===t.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||p===t.memoizedProps&&Y===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=Q),u.props=o,u.state=Q,u.context=S,o=Z):(typeof u.componentDidUpdate!="function"||p===t.memoizedProps&&Y===t.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||p===t.memoizedProps&&Y===t.memoizedState||(n.flags|=1024),o=!1)}return u=o,_o(t,n),o=(n.flags&128)!==0,u||o?(u=n.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:u.render(),n.flags|=1,t!==null&&o?(n.child=Ir(n,t.child,null,l),n.child=Ir(n,null,r,l)):ot(t,n,r,l),n.memoizedState=u.state,t=n.child):t=Bn(t,n,l),t}function Qm(t,n,r,o){return ki(),n.flags|=256,ot(t,n,r,o),n.child}var ru={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function iu(t){return{baseLanes:t,cachePool:Eh()}}function fu(t,n,r){return t=t!==null?t.childLanes&~r:0,n&&(t|=Xt),t}function Gm(t,n,r){var o=n.pendingProps,l=!1,u=(n.flags&128)!==0,p;if((p=u)||(p=t!==null&&t.memoizedState===null?!1:(We.current&2)!==0),p&&(l=!0,n.flags&=-129),p=(n.flags&32)!==0,n.flags&=-33,t===null){if(ve){if(l?ta(n):na(),ve){var w=Be,S;if(S=w){e:{for(S=w,w=pn;S.nodeType!==8;){if(!w){w=null;break e}if(S=sn(S.nextSibling),S===null){w=null;break e}}w=S}w!==null?(n.memoizedState={dehydrated:w,treeContext:za!==null?{id:In,overflow:Dn}:null,retryLane:536870912,hydrationErrors:null},S=At(18,null,null,0),S.stateNode=w,S.return=n,n.child=S,pt=n,Be=null,S=!0):S=!1}S||Ba(n)}if(w=n.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return $u(w)?n.lanes=32:n.lanes=536870912,null;On(n)}return w=o.children,o=o.fallback,l?(na(),l=n.mode,w=Yo({mode:"hidden",children:w},l),o=Aa(o,l,r,null),w.return=n,o.return=n,w.sibling=o,n.child=w,l=n.child,l.memoizedState=iu(r),l.childLanes=fu(t,p,r),n.memoizedState=ru,o):(ta(n),ou(n,w))}if(S=t.memoizedState,S!==null&&(w=S.dehydrated,w!==null)){if(u)n.flags&256?(ta(n),n.flags&=-257,n=su(t,n,r)):n.memoizedState!==null?(na(),n.child=t.child,n.flags|=128,n=null):(na(),l=o.fallback,w=n.mode,o=Yo({mode:"visible",children:o.children},w),l=Aa(l,w,r,null),l.flags|=2,o.return=n,l.return=n,o.sibling=l,n.child=o,Ir(n,t.child,null,r),o=n.child,o.memoizedState=iu(r),o.childLanes=fu(t,p,r),n.memoizedState=ru,n=l);else if(ta(n),$u(w)){if(p=w.nextSibling&&w.nextSibling.dataset,p)var B=p.dgst;p=B,o=Error(f(419)),o.stack="",o.digest=p,Ei({value:o,source:null,stack:null}),n=su(t,n,r)}else if(et||Ti(t,n,r,!1),p=(r&t.childLanes)!==0,et||p){if(p=Ne,p!==null&&(o=r&-r,o=(o&42)!==0?1:Zl(o),o=(o&(p.suspendedLanes|r))!==0?0:o,o!==0&&o!==S.retryLane))throw S.retryLane=o,vr(t,o),Ut(p,t,o),Am;w.data==="$?"||Cu(),n=su(t,n,r)}else w.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=S.treeContext,Be=sn(w.nextSibling),pt=n,ve=!0,Oa=null,pn=!1,t!==null&&(Ft[qt++]=In,Ft[qt++]=Dn,Ft[qt++]=za,In=t.id,Dn=t.overflow,za=n),n=ou(n,o.children),n.flags|=4096);return n}return l?(na(),l=o.fallback,w=n.mode,S=t.child,B=S.sibling,o=Nn(S,{mode:"hidden",children:o.children}),o.subtreeFlags=S.subtreeFlags&65011712,B!==null?l=Nn(B,l):(l=Aa(l,w,r,null),l.flags|=2),l.return=n,o.return=n,o.sibling=l,n.child=o,o=l,l=n.child,w=t.child.memoizedState,w===null?w=iu(r):(S=w.cachePool,S!==null?(B=Xe._currentValue,S=S.parent!==B?{parent:B,pool:B}:S):S=Eh(),w={baseLanes:w.baseLanes|r,cachePool:S}),l.memoizedState=w,l.childLanes=fu(t,p,r),n.memoizedState=ru,o):(ta(n),r=t.child,t=r.sibling,r=Nn(r,{mode:"visible",children:o.children}),r.return=n,r.sibling=null,t!==null&&(p=n.deletions,p===null?(n.deletions=[t],n.flags|=16):p.push(t)),n.child=r,n.memoizedState=null,r)}function ou(t,n){return n=Yo({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Yo(t,n){return t=At(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function su(t,n,r){return Ir(n,t.child,null,r),t=ou(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function $m(t,n,r){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Cc(t.return,n,r)}function lu(t,n,r,o,l){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:l}:(u.isBackwards=n,u.rendering=null,u.renderingStartTime=0,u.last=o,u.tail=r,u.tailMode=l)}function Zm(t,n,r){var o=n.pendingProps,l=o.revealOrder,u=o.tail;if(ot(t,n,o.children,r),o=We.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$m(t,r,n);else if(t.tag===19)$m(t,r,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(ce(We,o),l){case"forwards":for(r=n.child,l=null;r!==null;)t=r.alternate,t!==null&&Oo(t)===null&&(l=r),r=r.sibling;r=l,r===null?(l=n.child,n.child=null):(l=r.sibling,r.sibling=null),lu(n,!1,l,r,u);break;case"backwards":for(r=null,l=n.child,n.child=null;l!==null;){if(t=l.alternate,t!==null&&Oo(t)===null){n.child=l;break}t=l.sibling,l.sibling=r,r=l,l=t}lu(n,!0,r,null,u);break;case"together":lu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Bn(t,n,r){if(t!==null&&(n.dependencies=t.dependencies),oa|=n.lanes,(r&n.childLanes)===0)if(t!==null){if(Ti(t,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(f(153));if(n.child!==null){for(t=n.child,r=Nn(t,t.pendingProps),n.child=r,r.return=n;t.sibling!==null;)t=t.sibling,r=r.sibling=Nn(t,t.pendingProps),r.return=n;r.sibling=null}return n.child}function cu(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&vo(t)))}function e6(t,n,r){switch(n.tag){case 3:mn(n,n.stateNode.containerInfo),Vn(n,Xe,t.memoizedState.cache),ki();break;case 27:case 5:ka(n);break;case 4:mn(n,n.stateNode.containerInfo);break;case 10:Vn(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ta(n),n.flags|=128,null):(r&n.child.childLanes)!==0?Gm(t,n,r):(ta(n),t=Bn(t,n,r),t!==null?t.sibling:null);ta(n);break;case 19:var l=(t.flags&128)!==0;if(o=(r&n.childLanes)!==0,o||(Ti(t,n,r,!1),o=(r&n.childLanes)!==0),l){if(o)return Zm(t,n,r);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),ce(We,We.current),o)break;return null;case 22:case 23:return n.lanes=0,Bm(t,n,r);case 24:Vn(n,Xe,t.memoizedState.cache)}return Bn(t,n,r)}function Jm(t,n,r){if(t!==null)if(t.memoizedProps!==n.pendingProps)et=!0;else{if(!cu(t,r)&&(n.flags&128)===0)return et=!1,e6(t,n,r);et=(t.flags&131072)!==0}else et=!1,ve&&(n.flags&1048576)!==0&&xh(n,wo,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var o=n.elementType,l=o._init;if(o=l(o._payload),n.type=o,typeof o=="function")wc(o)?(t=Ga(o,t),n.tag=1,n=Ym(null,n,o,t,r)):(n.tag=0,n=au(null,n,o,t,r));else{if(o!=null){if(l=o.$$typeof,l===_){n.tag=11,n=zm(null,n,o,t,r);break e}else if(l===O){n.tag=14,n=Rm(null,n,o,t,r);break e}}throw n=Sn(o)||o,Error(f(306,n,""))}}return n;case 0:return au(t,n,n.type,n.pendingProps,r);case 1:return o=n.type,l=Ga(o,n.pendingProps),Ym(t,n,o,l,r);case 3:e:{if(mn(n,n.stateNode.containerInfo),t===null)throw Error(f(387));o=n.pendingProps;var u=n.memoizedState;l=u.element,Ac(t,n),Oi(n,o,null,r);var p=n.memoizedState;if(o=p.cache,Vn(n,Xe,o),o!==u.cache&&kc(n,[Xe],r,!0),Ri(),o=p.element,u.isDehydrated)if(u={element:o,isDehydrated:!1,cache:p.cache},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){n=Qm(t,n,o,r);break e}else if(o!==l){l=Ht(Error(f(424)),n),Ei(l),n=Qm(t,n,o,r);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Be=sn(t.firstChild),pt=n,ve=!0,Oa=null,pn=!0,r=jm(n,null,o,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(ki(),o===l){n=Bn(t,n,r);break e}ot(t,n,o,r)}n=n.child}return n;case 26:return _o(t,n),t===null?(r=qg(n.type,null,n.pendingProps,null))?n.memoizedState=r:ve||(r=n.type,t=n.pendingProps,o=es(vt.current).createElement(r),o[ct]=n,o[Mt]=t,lt(o,r,t),Ke(o),n.stateNode=o):n.memoizedState=qg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return ka(n),t===null&&ve&&(o=n.stateNode=Hg(n.type,n.pendingProps,vt.current),pt=n,pn=!0,l=Be,ua(n.type)?(Zu=l,Be=sn(o.firstChild)):Be=l),ot(t,n,n.pendingProps.children,r),_o(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ve&&((l=o=Be)&&(o=E6(o,n.type,n.pendingProps,pn),o!==null?(n.stateNode=o,pt=n,Be=sn(o.firstChild),pn=!1,l=!0):l=!1),l||Ba(n)),ka(n),l=n.type,u=n.pendingProps,p=t!==null?t.memoizedProps:null,o=u.children,Yu(l,u)?o=null:p!==null&&Yu(l,p)&&(n.flags|=32),n.memoizedState!==null&&(l=_c(t,n,Hw,null,null,r),rf._currentValue=l),_o(t,n),ot(t,n,o,r),n.child;case 6:return t===null&&ve&&((t=r=Be)&&(r=T6(r,n.pendingProps,pn),r!==null?(n.stateNode=r,pt=n,Be=null,t=!0):t=!1),t||Ba(n)),null;case 13:return Gm(t,n,r);case 4:return mn(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Ir(n,null,o,r):ot(t,n,o,r),n.child;case 11:return zm(t,n,n.type,n.pendingProps,r);case 7:return ot(t,n,n.pendingProps,r),n.child;case 8:return ot(t,n,n.pendingProps.children,r),n.child;case 12:return ot(t,n,n.pendingProps.children,r),n.child;case 10:return o=n.pendingProps,Vn(n,n.type,o.value),ot(t,n,o.children,r),n.child;case 9:return l=n.type._context,o=n.pendingProps.children,_a(n),l=ut(l),o=o(l),n.flags|=1,ot(t,n,o,r),n.child;case 14:return Rm(t,n,n.type,n.pendingProps,r);case 15:return Om(t,n,n.type,n.pendingProps,r);case 19:return Zm(t,n,r);case 31:return o=n.pendingProps,r=n.mode,o={mode:o.mode,children:o.children},t===null?(r=Yo(o,r),r.ref=n.ref,n.child=r,r.return=n,n=r):(r=Nn(t.child,o),r.ref=n.ref,n.child=r,r.return=n,n=r),n;case 22:return Bm(t,n,r);case 24:return _a(n),o=ut(Xe),t===null?(l=Nc(),l===null&&(l=Ne,u=Ec(),l.pooledCache=u,u.refCount++,u!==null&&(l.pooledCacheLanes|=r),l=u),n.memoizedState={parent:o,cache:l},Dc(n),Vn(n,Xe,l)):((t.lanes&r)!==0&&(Ac(t,n),Oi(n,null,null,r),Ri()),l=t.memoizedState,u=n.memoizedState,l.parent!==o?(l={parent:o,cache:o},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),Vn(n,Xe,o)):(o=u.cache,Vn(n,Xe,o),o!==l.cache&&kc(n,[Xe],r,!0))),ot(t,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(f(156,n.tag))}function Un(t){t.flags|=4}function Hm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!e2(n)){if(n=Vt.current,n!==null&&((be&4194048)===be?yn!==null:(be&62914560)!==be&&(be&536870912)===0||n!==yn))throw Ai=Ic,Th;t.flags|=8192}}function Qo(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?L1():536870912,t.lanes|=n,Rr|=n)}function $i(t,n){if(!ve)switch(t.tailMode){case"hidden":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function ze(t){var n=t.alternate!==null&&t.alternate.child===t.child,r=0,o=0;if(n)for(var l=t.child;l!==null;)r|=l.lanes|l.childLanes,o|=l.subtreeFlags&65011712,o|=l.flags&65011712,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)r|=l.lanes|l.childLanes,o|=l.subtreeFlags,o|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=o,t.childLanes=r,n}function t6(t,n,r){var o=n.pendingProps;switch(jc(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(n),null;case 1:return ze(n),null;case 3:return r=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),zn(Xe),xt(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ci(n)?Un(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Lh())),ze(n),null;case 26:return r=n.memoizedState,t===null?(Un(n),r!==null?(ze(n),Hm(n,r)):(ze(n),n.flags&=-16777217)):r?r!==t.memoizedState?(Un(n),ze(n),Hm(n,r)):(ze(n),n.flags&=-16777217):(t.memoizedProps!==o&&Un(n),ze(n),n.flags&=-16777217),null;case 27:kn(n),r=vt.current;var l=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Un(n);else{if(!o){if(n.stateNode===null)throw Error(f(166));return ze(n),null}t=xe.current,Ci(n)?Mh(n):(t=Hg(l,o,r),n.stateNode=t,Un(n))}return ze(n),null;case 5:if(kn(n),r=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Un(n);else{if(!o){if(n.stateNode===null)throw Error(f(166));return ze(n),null}if(t=xe.current,Ci(n))Mh(n);else{switch(l=es(vt.current),t){case 1:t=l.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:t=l.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":t=l.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":t=l.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?l.createElement("select",{is:o.is}):l.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?l.createElement(r,{is:o.is}):l.createElement(r)}}t[ct]=n,t[Mt]=o;e:for(l=n.child;l!==null;){if(l.tag===5||l.tag===6)t.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===n)break e;for(;l.sibling===null;){if(l.return===null||l.return===n)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}n.stateNode=t;e:switch(lt(t,r,o),r){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Un(n)}}return ze(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Un(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(f(166));if(t=vt.current,Ci(n)){if(t=n.stateNode,r=n.memoizedProps,o=null,l=pt,l!==null)switch(l.tag){case 27:case 5:o=l.memoizedProps}t[ct]=n,t=!!(t.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||_g(t.nodeValue,r)),t||Ba(n)}else t=es(t).createTextNode(o),t[ct]=n,n.stateNode=t}return ze(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=Ci(n),o!==null&&o.dehydrated!==null){if(t===null){if(!l)throw Error(f(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(f(317));l[ct]=n}else ki(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ze(n),l=!1}else l=Lh(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(On(n),n):(On(n),null)}if(On(n),(n.flags&128)!==0)return n.lanes=r,n;if(r=o!==null,t=t!==null&&t.memoizedState!==null,r){o=n.child,l=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(l=o.alternate.memoizedState.cachePool.pool);var u=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(u=o.memoizedState.cachePool.pool),u!==l&&(o.flags|=2048)}return r!==t&&r&&(n.child.flags|=8192),Qo(n,n.updateQueue),ze(n),null;case 4:return xt(),t===null&&Ru(n.stateNode.containerInfo),ze(n),null;case 10:return zn(n.type),ze(n),null;case 19:if(re(We),l=n.memoizedState,l===null)return ze(n),null;if(o=(n.flags&128)!==0,u=l.rendering,u===null)if(o)$i(l,!1);else{if(Ue!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(u=Oo(t),u!==null){for(n.flags|=128,$i(l,!1),t=u.updateQueue,n.updateQueue=t,Qo(n,t),n.subtreeFlags=0,t=r,r=n.child;r!==null;)vh(r,t),r=r.sibling;return ce(We,We.current&1|2),n.child}t=t.sibling}l.tail!==null&&gn()>Zo&&(n.flags|=128,o=!0,$i(l,!1),n.lanes=4194304)}else{if(!o)if(t=Oo(u),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,Qo(n,t),$i(l,!0),l.tail===null&&l.tailMode==="hidden"&&!u.alternate&&!ve)return ze(n),null}else 2*gn()-l.renderingStartTime>Zo&&r!==536870912&&(n.flags|=128,o=!0,$i(l,!1),n.lanes=4194304);l.isBackwards?(u.sibling=n.child,n.child=u):(t=l.last,t!==null?t.sibling=u:n.child=u,l.last=u)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=gn(),n.sibling=null,t=We.current,ce(We,o?t&1|2:t&1),n):(ze(n),null);case 22:case 23:return On(n),Bc(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(r&536870912)!==0&&(n.flags&128)===0&&(ze(n),n.subtreeFlags&6&&(n.flags|=8192)):ze(n),r=n.updateQueue,r!==null&&Qo(n,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==r&&(n.flags|=2048),t!==null&&re(Ya),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),zn(Xe),ze(n),null;case 25:return null;case 30:return null}throw Error(f(156,n.tag))}function n6(t,n){switch(jc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return zn(Xe),xt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return kn(n),null;case 13:if(On(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(f(340));ki()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return re(We),null;case 4:return xt(),null;case 10:return zn(n.type),null;case 22:case 23:return On(n),Bc(),t!==null&&re(Ya),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return zn(Xe),null;case 25:return null;default:return null}}function Pm(t,n){switch(jc(n),n.tag){case 3:zn(Xe),xt();break;case 26:case 27:case 5:kn(n);break;case 4:xt();break;case 13:On(n);break;case 19:re(We);break;case 10:zn(n.type);break;case 22:case 23:On(n),Bc(),t!==null&&re(Ya);break;case 24:zn(Xe)}}function Zi(t,n){try{var r=n.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var l=o.next;r=l;do{if((r.tag&t)===t){o=void 0;var u=r.create,p=r.inst;o=u(),p.destroy=o}r=r.next}while(r!==l)}}catch(w){Te(n,n.return,w)}}function aa(t,n,r){try{var o=n.updateQueue,l=o!==null?o.lastEffect:null;if(l!==null){var u=l.next;o=u;do{if((o.tag&t)===t){var p=o.inst,w=p.destroy;if(w!==void 0){p.destroy=void 0,l=n;var S=r,B=w;try{B()}catch(Z){Te(l,S,Z)}}}o=o.next}while(o!==u)}}catch(Z){Te(n,n.return,Z)}}function Fm(t){var n=t.updateQueue;if(n!==null){var r=t.stateNode;try{Rh(n,r)}catch(o){Te(t,t.return,o)}}}function qm(t,n,r){r.props=Ga(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(o){Te(t,n,o)}}function Ji(t,n){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof r=="function"?t.refCleanup=r(o):r.current=o}}catch(l){Te(t,n,l)}}function bn(t,n){var r=t.ref,o=t.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(l){Te(t,n,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(l){Te(t,n,l)}else r.current=null}function Vm(t){var n=t.type,r=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break e;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(l){Te(t,t.return,l)}}function uu(t,n,r){try{var o=t.stateNode;j6(o,t.type,r,n),o[Mt]=n}catch(l){Te(t,t.return,l)}}function Xm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ua(t.type)||t.tag===4}function du(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Xm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ua(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hu(t,n,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(t),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=Ko));else if(o!==4&&(o===27&&ua(t.type)&&(r=t.stateNode,n=null),t=t.child,t!==null))for(hu(t,n,r),t=t.sibling;t!==null;)hu(t,n,r),t=t.sibling}function Go(t,n,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?r.insertBefore(t,n):r.appendChild(t);else if(o!==4&&(o===27&&ua(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(Go(t,n,r),t=t.sibling;t!==null;)Go(t,n,r),t=t.sibling}function Wm(t){var n=t.stateNode,r=t.memoizedProps;try{for(var o=t.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);lt(n,o,r),n[ct]=t,n[Mt]=r}catch(u){Te(t,t.return,u)}}var _n=!1,Ge=!1,mu=!1,Km=typeof WeakSet=="function"?WeakSet:Set,tt=null;function a6(t,n){if(t=t.containerInfo,Uu=fs,t=ch(t),dc(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var l=o.anchorOffset,u=o.focusNode;o=o.focusOffset;try{r.nodeType,u.nodeType}catch{r=null;break e}var p=0,w=-1,S=-1,B=0,Z=0,H=t,Y=null;t:for(;;){for(var Q;H!==r||l!==0&&H.nodeType!==3||(w=p+l),H!==u||o!==0&&H.nodeType!==3||(S=p+o),H.nodeType===3&&(p+=H.nodeValue.length),(Q=H.firstChild)!==null;)Y=H,H=Q;for(;;){if(H===t)break t;if(Y===r&&++B===l&&(w=p),Y===u&&++Z===o&&(S=p),(Q=H.nextSibling)!==null)break;H=Y,Y=H.parentNode}H=Q}r=w===-1||S===-1?null:{start:w,end:S}}else r=null}r=r||{start:0,end:0}}else r=null;for(_u={focusedElem:t,selectionRange:r},fs=!1,tt=n;tt!==null;)if(n=tt,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,tt=t;else for(;tt!==null;){switch(n=tt,u=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,r=n,l=u.memoizedProps,u=u.memoizedState,o=r.stateNode;try{var ae=Ga(r.type,l,r.elementType===r.type);t=o.getSnapshotBeforeUpdate(ae,u),o.__reactInternalSnapshotBeforeUpdate=t}catch(ee){Te(r,r.return,ee)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,r=t.nodeType,r===9)Gu(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Gu(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(f(163))}if(t=n.sibling,t!==null){t.return=n.return,tt=t;break}tt=n.return}}function eg(t,n,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:ra(t,r),o&4&&Zi(5,r);break;case 1:if(ra(t,r),o&4)if(t=r.stateNode,n===null)try{t.componentDidMount()}catch(p){Te(r,r.return,p)}else{var l=Ga(r.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(l,n,t.__reactInternalSnapshotBeforeUpdate)}catch(p){Te(r,r.return,p)}}o&64&&Fm(r),o&512&&Ji(r,r.return);break;case 3:if(ra(t,r),o&64&&(t=r.updateQueue,t!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{Rh(t,n)}catch(p){Te(r,r.return,p)}}break;case 27:n===null&&o&4&&Wm(r);case 26:case 5:ra(t,r),n===null&&o&4&&Vm(r),o&512&&Ji(r,r.return);break;case 12:ra(t,r);break;case 13:ra(t,r),o&4&&ag(t,r),o&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=d6.bind(null,r),N6(t,r))));break;case 22:if(o=r.memoizedState!==null||_n,!o){n=n!==null&&n.memoizedState!==null||Ge,l=_n;var u=Ge;_n=o,(Ge=n)&&!u?ia(t,r,(r.subtreeFlags&8772)!==0):ra(t,r),_n=l,Ge=u}break;case 30:break;default:ra(t,r)}}function tg(t){var n=t.alternate;n!==null&&(t.alternate=null,tg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Pl(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var De=null,St=!1;function Yn(t,n,r){for(r=r.child;r!==null;)ng(t,n,r),r=r.sibling}function ng(t,n,r){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(di,r)}catch{}switch(r.tag){case 26:Ge||bn(r,n),Yn(t,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:Ge||bn(r,n);var o=De,l=St;ua(r.type)&&(De=r.stateNode,St=!1),Yn(t,n,r),ef(r.stateNode),De=o,St=l;break;case 5:Ge||bn(r,n);case 6:if(o=De,l=St,De=null,Yn(t,n,r),De=o,St=l,De!==null)if(St)try{(De.nodeType===9?De.body:De.nodeName==="HTML"?De.ownerDocument.body:De).removeChild(r.stateNode)}catch(u){Te(r,n,u)}else try{De.removeChild(r.stateNode)}catch(u){Te(r,n,u)}break;case 18:De!==null&&(St?(t=De,Zg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),lf(t)):Zg(De,r.stateNode));break;case 4:o=De,l=St,De=r.stateNode.containerInfo,St=!0,Yn(t,n,r),De=o,St=l;break;case 0:case 11:case 14:case 15:Ge||aa(2,r,n),Ge||aa(4,r,n),Yn(t,n,r);break;case 1:Ge||(bn(r,n),o=r.stateNode,typeof o.componentWillUnmount=="function"&&qm(r,n,o)),Yn(t,n,r);break;case 21:Yn(t,n,r);break;case 22:Ge=(o=Ge)||r.memoizedState!==null,Yn(t,n,r),Ge=o;break;default:Yn(t,n,r)}}function ag(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{lf(t)}catch(r){Te(n,n.return,r)}}function r6(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Km),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Km),n;default:throw Error(f(435,t.tag))}}function gu(t,n){var r=r6(t);n.forEach(function(o){var l=h6.bind(null,t,o);r.has(o)||(r.add(o),o.then(l,l))})}function zt(t,n){var r=n.deletions;if(r!==null)for(var o=0;o<r.length;o++){var l=r[o],u=t,p=n,w=p;e:for(;w!==null;){switch(w.tag){case 27:if(ua(w.type)){De=w.stateNode,St=!1;break e}break;case 5:De=w.stateNode,St=!1;break e;case 3:case 4:De=w.stateNode.containerInfo,St=!0;break e}w=w.return}if(De===null)throw Error(f(160));ng(u,p,l),De=null,St=!1,u=l.alternate,u!==null&&(u.return=null),l.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)rg(n,t),n=n.sibling}var on=null;function rg(t,n){var r=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:zt(n,t),Rt(t),o&4&&(aa(3,t,t.return),Zi(3,t),aa(5,t,t.return));break;case 1:zt(n,t),Rt(t),o&512&&(Ge||r===null||bn(r,r.return)),o&64&&_n&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?o:r.concat(o))));break;case 26:var l=on;if(zt(n,t),Rt(t),o&512&&(Ge||r===null||bn(r,r.return)),o&4){var u=r!==null?r.memoizedState:null;if(o=t.memoizedState,r===null)if(o===null)if(t.stateNode===null){e:{o=t.type,r=t.memoizedProps,l=l.ownerDocument||l;t:switch(o){case"title":u=l.getElementsByTagName("title")[0],(!u||u[gi]||u[ct]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=l.createElement(o),l.head.insertBefore(u,l.querySelector("head > title"))),lt(u,o,r),u[ct]=t,Ke(u),o=u;break e;case"link":var p=Wg("link","href",l).get(o+(r.href||""));if(p){for(var w=0;w<p.length;w++)if(u=p[w],u.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&u.getAttribute("rel")===(r.rel==null?null:r.rel)&&u.getAttribute("title")===(r.title==null?null:r.title)&&u.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){p.splice(w,1);break t}}u=l.createElement(o),lt(u,o,r),l.head.appendChild(u);break;case"meta":if(p=Wg("meta","content",l).get(o+(r.content||""))){for(w=0;w<p.length;w++)if(u=p[w],u.getAttribute("content")===(r.content==null?null:""+r.content)&&u.getAttribute("name")===(r.name==null?null:r.name)&&u.getAttribute("property")===(r.property==null?null:r.property)&&u.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&u.getAttribute("charset")===(r.charSet==null?null:r.charSet)){p.splice(w,1);break t}}u=l.createElement(o),lt(u,o,r),l.head.appendChild(u);break;default:throw Error(f(468,o))}u[ct]=t,Ke(u),o=u}t.stateNode=o}else Kg(l,t.type,t.stateNode);else t.stateNode=Xg(l,o,t.memoizedProps);else u!==o?(u===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):u.count--,o===null?Kg(l,t.type,t.stateNode):Xg(l,o,t.memoizedProps)):o===null&&t.stateNode!==null&&uu(t,t.memoizedProps,r.memoizedProps)}break;case 27:zt(n,t),Rt(t),o&512&&(Ge||r===null||bn(r,r.return)),r!==null&&o&4&&uu(t,t.memoizedProps,r.memoizedProps);break;case 5:if(zt(n,t),Rt(t),o&512&&(Ge||r===null||bn(r,r.return)),t.flags&32){l=t.stateNode;try{hr(l,"")}catch(Q){Te(t,t.return,Q)}}o&4&&t.stateNode!=null&&(l=t.memoizedProps,uu(t,l,r!==null?r.memoizedProps:l)),o&1024&&(mu=!0);break;case 6:if(zt(n,t),Rt(t),o&4){if(t.stateNode===null)throw Error(f(162));o=t.memoizedProps,r=t.stateNode;try{r.nodeValue=o}catch(Q){Te(t,t.return,Q)}}break;case 3:if(as=null,l=on,on=ts(n.containerInfo),zt(n,t),on=l,Rt(t),o&4&&r!==null&&r.memoizedState.isDehydrated)try{lf(n.containerInfo)}catch(Q){Te(t,t.return,Q)}mu&&(mu=!1,ig(t));break;case 4:o=on,on=ts(t.stateNode.containerInfo),zt(n,t),Rt(t),on=o;break;case 12:zt(n,t),Rt(t);break;case 13:zt(n,t),Rt(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(xu=gn()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,gu(t,o)));break;case 22:l=t.memoizedState!==null;var S=r!==null&&r.memoizedState!==null,B=_n,Z=Ge;if(_n=B||l,Ge=Z||S,zt(n,t),Ge=Z,_n=B,Rt(t),o&8192)e:for(n=t.stateNode,n._visibility=l?n._visibility&-2:n._visibility|1,l&&(r===null||S||_n||Ge||$a(t)),r=null,n=t;;){if(n.tag===5||n.tag===26){if(r===null){S=r=n;try{if(u=S.stateNode,l)p=u.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{w=S.stateNode;var H=S.memoizedProps.style,Y=H!=null&&H.hasOwnProperty("display")?H.display:null;w.style.display=Y==null||typeof Y=="boolean"?"":(""+Y).trim()}}catch(Q){Te(S,S.return,Q)}}}else if(n.tag===6){if(r===null){S=n;try{S.stateNode.nodeValue=l?"":S.memoizedProps}catch(Q){Te(S,S.return,Q)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(r=o.retryQueue,r!==null&&(o.retryQueue=null,gu(t,r))));break;case 19:zt(n,t),Rt(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,gu(t,o)));break;case 30:break;case 21:break;default:zt(n,t),Rt(t)}}function Rt(t){var n=t.flags;if(n&2){try{for(var r,o=t.return;o!==null;){if(Xm(o)){r=o;break}o=o.return}if(r==null)throw Error(f(160));switch(r.tag){case 27:var l=r.stateNode,u=du(t);Go(t,u,l);break;case 5:var p=r.stateNode;r.flags&32&&(hr(p,""),r.flags&=-33);var w=du(t);Go(t,w,p);break;case 3:case 4:var S=r.stateNode.containerInfo,B=du(t);hu(t,B,S);break;default:throw Error(f(161))}}catch(Z){Te(t,t.return,Z)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function ig(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;ig(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ra(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)eg(t,n.alternate,n),n=n.sibling}function $a(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:aa(4,n,n.return),$a(n);break;case 1:bn(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&qm(n,n.return,r),$a(n);break;case 27:ef(n.stateNode);case 26:case 5:bn(n,n.return),$a(n);break;case 22:n.memoizedState===null&&$a(n);break;case 30:$a(n);break;default:$a(n)}t=t.sibling}}function ia(t,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,l=t,u=n,p=u.flags;switch(u.tag){case 0:case 11:case 15:ia(l,u,r),Zi(4,u);break;case 1:if(ia(l,u,r),o=u,l=o.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(B){Te(o,o.return,B)}if(o=u,l=o.updateQueue,l!==null){var w=o.stateNode;try{var S=l.shared.hiddenCallbacks;if(S!==null)for(l.shared.hiddenCallbacks=null,l=0;l<S.length;l++)zh(S[l],w)}catch(B){Te(o,o.return,B)}}r&&p&64&&Fm(u),Ji(u,u.return);break;case 27:Wm(u);case 26:case 5:ia(l,u,r),r&&o===null&&p&4&&Vm(u),Ji(u,u.return);break;case 12:ia(l,u,r);break;case 13:ia(l,u,r),r&&p&4&&ag(l,u);break;case 22:u.memoizedState===null&&ia(l,u,r),Ji(u,u.return);break;case 30:break;default:ia(l,u,r)}n=n.sibling}}function pu(t,n){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&Ni(r))}function yu(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ni(t))}function wn(t,n,r,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)fg(t,n,r,o),n=n.sibling}function fg(t,n,r,o){var l=n.flags;switch(n.tag){case 0:case 11:case 15:wn(t,n,r,o),l&2048&&Zi(9,n);break;case 1:wn(t,n,r,o);break;case 3:wn(t,n,r,o),l&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ni(t)));break;case 12:if(l&2048){wn(t,n,r,o),t=n.stateNode;try{var u=n.memoizedProps,p=u.id,w=u.onPostCommit;typeof w=="function"&&w(p,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(S){Te(n,n.return,S)}}else wn(t,n,r,o);break;case 13:wn(t,n,r,o);break;case 23:break;case 22:u=n.stateNode,p=n.alternate,n.memoizedState!==null?u._visibility&2?wn(t,n,r,o):Hi(t,n):u._visibility&2?wn(t,n,r,o):(u._visibility|=2,Dr(t,n,r,o,(n.subtreeFlags&10256)!==0)),l&2048&&pu(p,n);break;case 24:wn(t,n,r,o),l&2048&&yu(n.alternate,n);break;default:wn(t,n,r,o)}}function Dr(t,n,r,o,l){for(l=l&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var u=t,p=n,w=r,S=o,B=p.flags;switch(p.tag){case 0:case 11:case 15:Dr(u,p,w,S,l),Zi(8,p);break;case 23:break;case 22:var Z=p.stateNode;p.memoizedState!==null?Z._visibility&2?Dr(u,p,w,S,l):Hi(u,p):(Z._visibility|=2,Dr(u,p,w,S,l)),l&&B&2048&&pu(p.alternate,p);break;case 24:Dr(u,p,w,S,l),l&&B&2048&&yu(p.alternate,p);break;default:Dr(u,p,w,S,l)}n=n.sibling}}function Hi(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=t,o=n,l=o.flags;switch(o.tag){case 22:Hi(r,o),l&2048&&pu(o.alternate,o);break;case 24:Hi(r,o),l&2048&&yu(o.alternate,o);break;default:Hi(r,o)}n=n.sibling}}var Pi=8192;function Ar(t){if(t.subtreeFlags&Pi)for(t=t.child;t!==null;)og(t),t=t.sibling}function og(t){switch(t.tag){case 26:Ar(t),t.flags&Pi&&t.memoizedState!==null&&$6(on,t.memoizedState,t.memoizedProps);break;case 5:Ar(t);break;case 3:case 4:var n=on;on=ts(t.stateNode.containerInfo),Ar(t),on=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=Pi,Pi=16777216,Ar(t),Pi=n):Ar(t));break;default:Ar(t)}}function sg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Fi(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];tt=o,cg(o,t)}sg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)lg(t),t=t.sibling}function lg(t){switch(t.tag){case 0:case 11:case 15:Fi(t),t.flags&2048&&aa(9,t,t.return);break;case 3:Fi(t);break;case 12:Fi(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,$o(t)):Fi(t);break;default:Fi(t)}}function $o(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];tt=o,cg(o,t)}sg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:aa(8,n,n.return),$o(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,$o(n));break;default:$o(n)}t=t.sibling}}function cg(t,n){for(;tt!==null;){var r=tt;switch(r.tag){case 0:case 11:case 15:aa(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Ni(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,tt=o;else e:for(r=t;tt!==null;){o=tt;var l=o.sibling,u=o.return;if(tg(o),o===r){tt=null;break e}if(l!==null){l.return=u,tt=l;break e}tt=u}}}var i6={getCacheForType:function(t){var n=ut(Xe),r=n.data.get(t);return r===void 0&&(r=t(),n.data.set(t,r)),r}},f6=typeof WeakMap=="function"?WeakMap:Map,je=0,Ne=null,me=null,be=0,Le=0,Ot=null,fa=!1,zr=!1,bu=!1,Qn=0,Ue=0,oa=0,Za=0,wu=0,Xt=0,Rr=0,qi=null,Ct=null,vu=!1,xu=0,Zo=1/0,Jo=null,sa=null,st=0,la=null,Or=null,Br=0,Mu=0,ju=null,ug=null,Vi=0,Lu=null;function Bt(){if((je&2)!==0&&be!==0)return be&-be;if(U.T!==null){var t=Lr;return t!==0?t:Iu()}return k1()}function dg(){Xt===0&&(Xt=(be&536870912)===0||ve?j1():536870912);var t=Vt.current;return t!==null&&(t.flags|=32),Xt}function Ut(t,n,r){(t===Ne&&(Le===2||Le===9)||t.cancelPendingCommit!==null)&&(Ur(t,0),ca(t,be,Xt,!1)),mi(t,r),((je&2)===0||t!==Ne)&&(t===Ne&&((je&2)===0&&(Za|=r),Ue===4&&ca(t,be,Xt,!1)),vn(t))}function hg(t,n,r){if((je&6)!==0)throw Error(f(327));var o=!r&&(n&124)===0&&(n&t.expiredLanes)===0||hi(t,n),l=o?l6(t,n):ku(t,n,!0),u=o;do{if(l===0){zr&&!o&&ca(t,n,0,!1);break}else{if(r=t.current.alternate,u&&!o6(r)){l=ku(t,n,!1),u=!1;continue}if(l===2){if(u=n,t.errorRecoveryDisabledLanes&u)var p=0;else p=t.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){n=p;e:{var w=t;l=qi;var S=w.current.memoizedState.isDehydrated;if(S&&(Ur(w,p).flags|=256),p=ku(w,p,!1),p!==2){if(bu&&!S){w.errorRecoveryDisabledLanes|=u,Za|=u,l=4;break e}u=Ct,Ct=l,u!==null&&(Ct===null?Ct=u:Ct.push.apply(Ct,u))}l=p}if(u=!1,l!==2)continue}}if(l===1){Ur(t,0),ca(t,n,0,!0);break}e:{switch(o=t,u=l,u){case 0:case 1:throw Error(f(345));case 4:if((n&4194048)!==n)break;case 6:ca(o,n,Xt,!fa);break e;case 2:Ct=null;break;case 3:case 5:break;default:throw Error(f(329))}if((n&62914560)===n&&(l=xu+300-gn(),10<l)){if(ca(o,n,Xt,!fa),to(o,0,!0)!==0)break e;o.timeoutHandle=Gg(mg.bind(null,o,r,Ct,Jo,vu,n,Xt,Za,Rr,fa,u,2,-0,0),l);break e}mg(o,r,Ct,Jo,vu,n,Xt,Za,Rr,fa,u,0,-0,0)}}break}while(!0);vn(t)}function mg(t,n,r,o,l,u,p,w,S,B,Z,H,Y,Q){if(t.timeoutHandle=-1,H=n.subtreeFlags,(H&8192||(H&16785408)===16785408)&&(af={stylesheets:null,count:0,unsuspend:G6},og(n),H=Z6(),H!==null)){t.cancelPendingCommit=H(xg.bind(null,t,n,u,r,o,l,p,w,S,Z,1,Y,Q)),ca(t,u,p,!B);return}xg(t,n,u,r,o,l,p,w,S)}function o6(t){for(var n=t;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var l=r[o],u=l.getSnapshot;l=l.value;try{if(!Dt(u(),l))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ca(t,n,r,o){n&=~wu,n&=~Za,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var l=n;0<l;){var u=31-It(l),p=1<<u;o[u]=-1,l&=~p}r!==0&&S1(t,r,n)}function Ho(){return(je&6)===0?(Xi(0),!1):!0}function Su(){if(me!==null){if(Le===0)var t=me.return;else t=me,An=Ua=null,Gc(t),Nr=null,Qi=0,t=me;for(;t!==null;)Pm(t.alternate,t),t=t.return;me=null}}function Ur(t,n){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,S6(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),Su(),Ne=t,me=r=Nn(t.current,null),be=n,Le=0,Ot=null,fa=!1,zr=hi(t,n),bu=!1,Rr=Xt=wu=Za=oa=Ue=0,Ct=qi=null,vu=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var l=31-It(o),u=1<<l;n|=t[l],o&=~u}return Qn=n,mo(),r}function gg(t,n){le=null,U.H=Ao,n===Di||n===jo?(n=Dh(),Le=3):n===Th?(n=Dh(),Le=4):Le=n===Am?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Ot=n,me===null&&(Ue=1,Uo(t,Ht(n,t.current)))}function pg(){var t=U.H;return U.H=Ao,t===null?Ao:t}function yg(){var t=U.A;return U.A=i6,t}function Cu(){Ue=4,fa||(be&4194048)!==be&&Vt.current!==null||(zr=!0),(oa&134217727)===0&&(Za&134217727)===0||Ne===null||ca(Ne,be,Xt,!1)}function ku(t,n,r){var o=je;je|=2;var l=pg(),u=yg();(Ne!==t||be!==n)&&(Jo=null,Ur(t,n)),n=!1;var p=Ue;e:do try{if(Le!==0&&me!==null){var w=me,S=Ot;switch(Le){case 8:Su(),p=6;break e;case 3:case 2:case 9:case 6:Vt.current===null&&(n=!0);var B=Le;if(Le=0,Ot=null,_r(t,w,S,B),r&&zr){p=0;break e}break;default:B=Le,Le=0,Ot=null,_r(t,w,S,B)}}s6(),p=Ue;break}catch(Z){gg(t,Z)}while(!0);return n&&t.shellSuspendCounter++,An=Ua=null,je=o,U.H=l,U.A=u,me===null&&(Ne=null,be=0,mo()),p}function s6(){for(;me!==null;)bg(me)}function l6(t,n){var r=je;je|=2;var o=pg(),l=yg();Ne!==t||be!==n?(Jo=null,Zo=gn()+500,Ur(t,n)):zr=hi(t,n);e:do try{if(Le!==0&&me!==null){n=me;var u=Ot;t:switch(Le){case 1:Le=0,Ot=null,_r(t,n,u,1);break;case 2:case 9:if(Nh(u)){Le=0,Ot=null,wg(n);break}n=function(){Le!==2&&Le!==9||Ne!==t||(Le=7),vn(t)},u.then(n,n);break e;case 3:Le=7;break e;case 4:Le=5;break e;case 7:Nh(u)?(Le=0,Ot=null,wg(n)):(Le=0,Ot=null,_r(t,n,u,7));break;case 5:var p=null;switch(me.tag){case 26:p=me.memoizedState;case 5:case 27:var w=me;if(!p||e2(p)){Le=0,Ot=null;var S=w.sibling;if(S!==null)me=S;else{var B=w.return;B!==null?(me=B,Po(B)):me=null}break t}}Le=0,Ot=null,_r(t,n,u,5);break;case 6:Le=0,Ot=null,_r(t,n,u,6);break;case 8:Su(),Ue=6;break e;default:throw Error(f(462))}}c6();break}catch(Z){gg(t,Z)}while(!0);return An=Ua=null,U.H=o,U.A=l,je=r,me!==null?0:(Ne=null,be=0,mo(),Ue)}function c6(){for(;me!==null&&!Db();)bg(me)}function bg(t){var n=Jm(t.alternate,t,Qn);t.memoizedProps=t.pendingProps,n===null?Po(t):me=n}function wg(t){var n=t,r=n.alternate;switch(n.tag){case 15:case 0:n=_m(r,n,n.pendingProps,n.type,void 0,be);break;case 11:n=_m(r,n,n.pendingProps,n.type.render,n.ref,be);break;case 5:Gc(n);default:Pm(r,n),n=me=vh(n,Qn),n=Jm(r,n,Qn)}t.memoizedProps=t.pendingProps,n===null?Po(t):me=n}function _r(t,n,r,o){An=Ua=null,Gc(n),Nr=null,Qi=0;var l=n.return;try{if(Kw(t,l,n,r,be)){Ue=1,Uo(t,Ht(r,t.current)),me=null;return}}catch(u){if(l!==null)throw me=l,u;Ue=1,Uo(t,Ht(r,t.current)),me=null;return}n.flags&32768?(ve||o===1?t=!0:zr||(be&536870912)!==0?t=!1:(fa=t=!0,(o===2||o===9||o===3||o===6)&&(o=Vt.current,o!==null&&o.tag===13&&(o.flags|=16384))),vg(n,t)):Po(n)}function Po(t){var n=t;do{if((n.flags&32768)!==0){vg(n,fa);return}t=n.return;var r=t6(n.alternate,n,Qn);if(r!==null){me=r;return}if(n=n.sibling,n!==null){me=n;return}me=n=t}while(n!==null);Ue===0&&(Ue=5)}function vg(t,n){do{var r=n6(t.alternate,t);if(r!==null){r.flags&=32767,me=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(t=t.sibling,t!==null)){me=t;return}me=t=r}while(t!==null);Ue=6,me=null}function xg(t,n,r,o,l,u,p,w,S){t.cancelPendingCommit=null;do Fo();while(st!==0);if((je&6)!==0)throw Error(f(327));if(n!==null){if(n===t.current)throw Error(f(177));if(u=n.lanes|n.childLanes,u|=yc,Gb(t,r,u,p,w,S),t===Ne&&(me=Ne=null,be=0),Or=n,la=t,Br=r,Mu=u,ju=l,ug=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,m6(Wf,function(){return Cg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=U.T,U.T=null,l=P.p,P.p=2,p=je,je|=4;try{a6(t,n,r)}finally{je=p,P.p=l,U.T=o}}st=1,Mg(),jg(),Lg()}}function Mg(){if(st===1){st=0;var t=la,n=Or,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=U.T,U.T=null;var o=P.p;P.p=2;var l=je;je|=4;try{rg(n,t);var u=_u,p=ch(t.containerInfo),w=u.focusedElem,S=u.selectionRange;if(p!==w&&w&&w.ownerDocument&&lh(w.ownerDocument.documentElement,w)){if(S!==null&&dc(w)){var B=S.start,Z=S.end;if(Z===void 0&&(Z=B),"selectionStart"in w)w.selectionStart=B,w.selectionEnd=Math.min(Z,w.value.length);else{var H=w.ownerDocument||document,Y=H&&H.defaultView||window;if(Y.getSelection){var Q=Y.getSelection(),ae=w.textContent.length,ee=Math.min(S.start,ae),Ee=S.end===void 0?ee:Math.min(S.end,ae);!Q.extend&&ee>Ee&&(p=Ee,Ee=ee,ee=p);var D=sh(w,ee),T=sh(w,Ee);if(D&&T&&(Q.rangeCount!==1||Q.anchorNode!==D.node||Q.anchorOffset!==D.offset||Q.focusNode!==T.node||Q.focusOffset!==T.offset)){var z=H.createRange();z.setStart(D.node,D.offset),Q.removeAllRanges(),ee>Ee?(Q.addRange(z),Q.extend(T.node,T.offset)):(z.setEnd(T.node,T.offset),Q.addRange(z))}}}}for(H=[],Q=w;Q=Q.parentNode;)Q.nodeType===1&&H.push({element:Q,left:Q.scrollLeft,top:Q.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<H.length;w++){var J=H[w];J.element.scrollLeft=J.left,J.element.scrollTop=J.top}}fs=!!Uu,_u=Uu=null}finally{je=l,P.p=o,U.T=r}}t.current=n,st=2}}function jg(){if(st===2){st=0;var t=la,n=Or,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=U.T,U.T=null;var o=P.p;P.p=2;var l=je;je|=4;try{eg(t,n.alternate,n)}finally{je=l,P.p=o,U.T=r}}st=3}}function Lg(){if(st===4||st===3){st=0,Ab();var t=la,n=Or,r=Br,o=ug;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?st=5:(st=0,Or=la=null,Sg(t,t.pendingLanes));var l=t.pendingLanes;if(l===0&&(sa=null),Jl(r),n=n.stateNode,Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(di,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=U.T,l=P.p,P.p=2,U.T=null;try{for(var u=t.onRecoverableError,p=0;p<o.length;p++){var w=o[p];u(w.value,{componentStack:w.stack})}}finally{U.T=n,P.p=l}}(Br&3)!==0&&Fo(),vn(t),l=t.pendingLanes,(r&4194090)!==0&&(l&42)!==0?t===Lu?Vi++:(Vi=0,Lu=t):Vi=0,Xi(0)}}function Sg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ni(n)))}function Fo(t){return Mg(),jg(),Lg(),Cg()}function Cg(){if(st!==5)return!1;var t=la,n=Mu;Mu=0;var r=Jl(Br),o=U.T,l=P.p;try{P.p=32>r?32:r,U.T=null,r=ju,ju=null;var u=la,p=Br;if(st=0,Or=la=null,Br=0,(je&6)!==0)throw Error(f(331));var w=je;if(je|=4,lg(u.current),fg(u,u.current,p,r),je=w,Xi(0,!1),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(di,u)}catch{}return!0}finally{P.p=l,U.T=o,Sg(t,n)}}function kg(t,n,r){n=Ht(r,n),n=nu(t.stateNode,n,2),t=Kn(t,n,2),t!==null&&(mi(t,2),vn(t))}function Te(t,n,r){if(t.tag===3)kg(t,t,r);else for(;n!==null;){if(n.tag===3){kg(n,t,r);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(sa===null||!sa.has(o))){t=Ht(r,t),r=Im(2),o=Kn(n,r,2),o!==null&&(Dm(r,o,n,t),mi(o,2),vn(o));break}}n=n.return}}function Eu(t,n,r){var o=t.pingCache;if(o===null){o=t.pingCache=new f6;var l=new Set;o.set(n,l)}else l=o.get(n),l===void 0&&(l=new Set,o.set(n,l));l.has(r)||(bu=!0,l.add(r),t=u6.bind(null,t,n,r),n.then(t,t))}function u6(t,n,r){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,Ne===t&&(be&r)===r&&(Ue===4||Ue===3&&(be&62914560)===be&&300>gn()-xu?(je&2)===0&&Ur(t,0):wu|=r,Rr===be&&(Rr=0)),vn(t)}function Eg(t,n){n===0&&(n=L1()),t=vr(t,n),t!==null&&(mi(t,n),vn(t))}function d6(t){var n=t.memoizedState,r=0;n!==null&&(r=n.retryLane),Eg(t,r)}function h6(t,n){var r=0;switch(t.tag){case 13:var o=t.stateNode,l=t.memoizedState;l!==null&&(r=l.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(f(314))}o!==null&&o.delete(n),Eg(t,r)}function m6(t,n){return Ql(t,n)}var qo=null,Yr=null,Tu=!1,Vo=!1,Nu=!1,Ja=0;function vn(t){t!==Yr&&t.next===null&&(Yr===null?qo=Yr=t:Yr=Yr.next=t),Vo=!0,Tu||(Tu=!0,p6())}function Xi(t,n){if(!Nu&&Vo){Nu=!0;do for(var r=!1,o=qo;o!==null;){if(t!==0){var l=o.pendingLanes;if(l===0)var u=0;else{var p=o.suspendedLanes,w=o.pingedLanes;u=(1<<31-It(42|t)+1)-1,u&=l&~(p&~w),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(r=!0,Dg(o,u))}else u=be,u=to(o,o===Ne?u:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(u&3)===0||hi(o,u)||(r=!0,Dg(o,u));o=o.next}while(r);Nu=!1}}function g6(){Tg()}function Tg(){Vo=Tu=!1;var t=0;Ja!==0&&(L6()&&(t=Ja),Ja=0);for(var n=gn(),r=null,o=qo;o!==null;){var l=o.next,u=Ng(o,n);u===0?(o.next=null,r===null?qo=l:r.next=l,l===null&&(Yr=r)):(r=o,(t!==0||(u&3)!==0)&&(Vo=!0)),o=l}Xi(t)}function Ng(t,n){for(var r=t.suspendedLanes,o=t.pingedLanes,l=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var p=31-It(u),w=1<<p,S=l[p];S===-1?((w&r)===0||(w&o)!==0)&&(l[p]=Qb(w,n)):S<=n&&(t.expiredLanes|=w),u&=~w}if(n=Ne,r=be,r=to(t,t===n?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,r===0||t===n&&(Le===2||Le===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Gl(o),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||hi(t,r)){if(n=r&-r,n===t.callbackPriority)return n;switch(o!==null&&Gl(o),Jl(r)){case 2:case 8:r=x1;break;case 32:r=Wf;break;case 268435456:r=M1;break;default:r=Wf}return o=Ig.bind(null,t),r=Ql(r,o),t.callbackPriority=n,t.callbackNode=r,n}return o!==null&&o!==null&&Gl(o),t.callbackPriority=2,t.callbackNode=null,2}function Ig(t,n){if(st!==0&&st!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(Fo()&&t.callbackNode!==r)return null;var o=be;return o=to(t,t===Ne?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(hg(t,o,n),Ng(t,gn()),t.callbackNode!=null&&t.callbackNode===r?Ig.bind(null,t):null)}function Dg(t,n){if(Fo())return null;hg(t,n,!0)}function p6(){C6(function(){(je&6)!==0?Ql(v1,g6):Tg()})}function Iu(){return Ja===0&&(Ja=j1()),Ja}function Ag(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:fo(""+t)}function zg(t,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,t.id&&r.setAttribute("form",t.id),n.parentNode.insertBefore(r,n),t=new FormData(t),r.parentNode.removeChild(r),t}function y6(t,n,r,o,l){if(n==="submit"&&r&&r.stateNode===l){var u=Ag((l[Mt]||null).action),p=o.submitter;p&&(n=(n=p[Mt]||null)?Ag(n.formAction):p.getAttribute("formAction"),n!==null&&(u=n,p=null));var w=new co("action","action",null,o,l);t.push({event:w,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ja!==0){var S=p?zg(l,p):new FormData(l);Xc(r,{pending:!0,data:S,method:l.method,action:u},null,S)}}else typeof u=="function"&&(w.preventDefault(),S=p?zg(l,p):new FormData(l),Xc(r,{pending:!0,data:S,method:l.method,action:u},u,S))},currentTarget:l}]})}}for(var Du=0;Du<pc.length;Du++){var Au=pc[Du],b6=Au.toLowerCase(),w6=Au[0].toUpperCase()+Au.slice(1);fn(b6,"on"+w6)}fn(hh,"onAnimationEnd"),fn(mh,"onAnimationIteration"),fn(gh,"onAnimationStart"),fn("dblclick","onDoubleClick"),fn("focusin","onFocus"),fn("focusout","onBlur"),fn(Ow,"onTransitionRun"),fn(Bw,"onTransitionStart"),fn(Uw,"onTransitionCancel"),fn(ph,"onTransitionEnd"),cr("onMouseEnter",["mouseout","mouseover"]),cr("onMouseLeave",["mouseout","mouseover"]),cr("onPointerEnter",["pointerout","pointerover"]),cr("onPointerLeave",["pointerout","pointerover"]),Ta("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ta("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ta("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ta("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ta("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ta("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),v6=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Wi));function Rg(t,n){n=(n&4)!==0;for(var r=0;r<t.length;r++){var o=t[r],l=o.event;o=o.listeners;e:{var u=void 0;if(n)for(var p=o.length-1;0<=p;p--){var w=o[p],S=w.instance,B=w.currentTarget;if(w=w.listener,S!==u&&l.isPropagationStopped())break e;u=w,l.currentTarget=B;try{u(l)}catch(Z){Bo(Z)}l.currentTarget=null,u=S}else for(p=0;p<o.length;p++){if(w=o[p],S=w.instance,B=w.currentTarget,w=w.listener,S!==u&&l.isPropagationStopped())break e;u=w,l.currentTarget=B;try{u(l)}catch(Z){Bo(Z)}l.currentTarget=null,u=S}}}}function ge(t,n){var r=n[Hl];r===void 0&&(r=n[Hl]=new Set);var o=t+"__bubble";r.has(o)||(Og(n,t,2,!1),r.add(o))}function zu(t,n,r){var o=0;n&&(o|=4),Og(r,t,o,n)}var Xo="_reactListening"+Math.random().toString(36).slice(2);function Ru(t){if(!t[Xo]){t[Xo]=!0,T1.forEach(function(r){r!=="selectionchange"&&(v6.has(r)||zu(r,!1,t),zu(r,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Xo]||(n[Xo]=!0,zu("selectionchange",!1,n))}}function Og(t,n,r,o){switch(f2(n)){case 2:var l=P6;break;case 8:l=F6;break;default:l=qu}r=l.bind(null,n,r,t),l=void 0,!ac||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),o?l!==void 0?t.addEventListener(n,r,{capture:!0,passive:l}):t.addEventListener(n,r,!0):l!==void 0?t.addEventListener(n,r,{passive:l}):t.addEventListener(n,r,!1)}function Ou(t,n,r,o,l){var u=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var p=o.tag;if(p===3||p===4){var w=o.stateNode.containerInfo;if(w===l)break;if(p===4)for(p=o.return;p!==null;){var S=p.tag;if((S===3||S===4)&&p.stateNode.containerInfo===l)return;p=p.return}for(;w!==null;){if(p=or(w),p===null)return;if(S=p.tag,S===5||S===6||S===26||S===27){o=u=p;continue e}w=w.parentNode}}o=o.return}$1(function(){var B=u,Z=tc(r),H=[];e:{var Y=yh.get(t);if(Y!==void 0){var Q=co,ae=t;switch(t){case"keypress":if(so(r)===0)break e;case"keydown":case"keyup":Q=mw;break;case"focusin":ae="focus",Q=oc;break;case"focusout":ae="blur",Q=oc;break;case"beforeblur":case"afterblur":Q=oc;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Q=H1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Q=nw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Q=yw;break;case hh:case mh:case gh:Q=iw;break;case ph:Q=ww;break;case"scroll":case"scrollend":Q=ew;break;case"wheel":Q=xw;break;case"copy":case"cut":case"paste":Q=ow;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Q=F1;break;case"toggle":case"beforetoggle":Q=jw}var ee=(n&4)!==0,Ee=!ee&&(t==="scroll"||t==="scrollend"),D=ee?Y!==null?Y+"Capture":null:Y;ee=[];for(var T=B,z;T!==null;){var J=T;if(z=J.stateNode,J=J.tag,J!==5&&J!==26&&J!==27||z===null||D===null||(J=yi(T,D),J!=null&&ee.push(Ki(T,J,z))),Ee)break;T=T.return}0<ee.length&&(Y=new Q(Y,ae,null,r,Z),H.push({event:Y,listeners:ee}))}}if((n&7)===0){e:{if(Y=t==="mouseover"||t==="pointerover",Q=t==="mouseout"||t==="pointerout",Y&&r!==ec&&(ae=r.relatedTarget||r.fromElement)&&(or(ae)||ae[fr]))break e;if((Q||Y)&&(Y=Z.window===Z?Z:(Y=Z.ownerDocument)?Y.defaultView||Y.parentWindow:window,Q?(ae=r.relatedTarget||r.toElement,Q=B,ae=ae?or(ae):null,ae!==null&&(Ee=d(ae),ee=ae.tag,ae!==Ee||ee!==5&&ee!==27&&ee!==6)&&(ae=null)):(Q=null,ae=B),Q!==ae)){if(ee=H1,J="onMouseLeave",D="onMouseEnter",T="mouse",(t==="pointerout"||t==="pointerover")&&(ee=F1,J="onPointerLeave",D="onPointerEnter",T="pointer"),Ee=Q==null?Y:pi(Q),z=ae==null?Y:pi(ae),Y=new ee(J,T+"leave",Q,r,Z),Y.target=Ee,Y.relatedTarget=z,J=null,or(Z)===B&&(ee=new ee(D,T+"enter",ae,r,Z),ee.target=z,ee.relatedTarget=Ee,J=ee),Ee=J,Q&&ae)t:{for(ee=Q,D=ae,T=0,z=ee;z;z=Qr(z))T++;for(z=0,J=D;J;J=Qr(J))z++;for(;0<T-z;)ee=Qr(ee),T--;for(;0<z-T;)D=Qr(D),z--;for(;T--;){if(ee===D||D!==null&&ee===D.alternate)break t;ee=Qr(ee),D=Qr(D)}ee=null}else ee=null;Q!==null&&Bg(H,Y,Q,ee,!1),ae!==null&&Ee!==null&&Bg(H,Ee,ae,ee,!0)}}e:{if(Y=B?pi(B):window,Q=Y.nodeName&&Y.nodeName.toLowerCase(),Q==="select"||Q==="input"&&Y.type==="file")var X=nh;else if(eh(Y))if(ah)X=Aw;else{X=Iw;var ue=Nw}else Q=Y.nodeName,!Q||Q.toLowerCase()!=="input"||Y.type!=="checkbox"&&Y.type!=="radio"?B&&Kl(B.elementType)&&(X=nh):X=Dw;if(X&&(X=X(t,B))){th(H,X,r,Z);break e}ue&&ue(t,Y,B),t==="focusout"&&B&&Y.type==="number"&&B.memoizedProps.value!=null&&Wl(Y,"number",Y.value)}switch(ue=B?pi(B):window,t){case"focusin":(eh(ue)||ue.contentEditable==="true")&&(yr=ue,hc=B,Si=null);break;case"focusout":Si=hc=yr=null;break;case"mousedown":mc=!0;break;case"contextmenu":case"mouseup":case"dragend":mc=!1,uh(H,r,Z);break;case"selectionchange":if(Rw)break;case"keydown":case"keyup":uh(H,r,Z)}var K;if(lc)e:{switch(t){case"compositionstart":var ne="onCompositionStart";break e;case"compositionend":ne="onCompositionEnd";break e;case"compositionupdate":ne="onCompositionUpdate";break e}ne=void 0}else pr?W1(t,r)&&(ne="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(ne="onCompositionStart");ne&&(q1&&r.locale!=="ko"&&(pr||ne!=="onCompositionStart"?ne==="onCompositionEnd"&&pr&&(K=Z1()):(qn=Z,rc="value"in qn?qn.value:qn.textContent,pr=!0)),ue=Wo(B,ne),0<ue.length&&(ne=new P1(ne,t,null,r,Z),H.push({event:ne,listeners:ue}),K?ne.data=K:(K=K1(r),K!==null&&(ne.data=K)))),(K=Sw?Cw(t,r):kw(t,r))&&(ne=Wo(B,"onBeforeInput"),0<ne.length&&(ue=new P1("onBeforeInput","beforeinput",null,r,Z),H.push({event:ue,listeners:ne}),ue.data=K)),y6(H,t,B,r,Z)}Rg(H,n)})}function Ki(t,n,r){return{instance:t,listener:n,currentTarget:r}}function Wo(t,n){for(var r=n+"Capture",o=[];t!==null;){var l=t,u=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||u===null||(l=yi(t,r),l!=null&&o.unshift(Ki(t,l,u)),l=yi(t,n),l!=null&&o.push(Ki(t,l,u))),t.tag===3)return o;t=t.return}return[]}function Qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Bg(t,n,r,o,l){for(var u=n._reactName,p=[];r!==null&&r!==o;){var w=r,S=w.alternate,B=w.stateNode;if(w=w.tag,S!==null&&S===o)break;w!==5&&w!==26&&w!==27||B===null||(S=B,l?(B=yi(r,u),B!=null&&p.unshift(Ki(r,B,S))):l||(B=yi(r,u),B!=null&&p.push(Ki(r,B,S)))),r=r.return}p.length!==0&&t.push({event:n,listeners:p})}var x6=/\r\n?/g,M6=/\u0000|\uFFFD/g;function Ug(t){return(typeof t=="string"?t:""+t).replace(x6,`
`).replace(M6,"")}function _g(t,n){return n=Ug(n),Ug(t)===n}function Ko(){}function ke(t,n,r,o,l,u){switch(r){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||hr(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&hr(t,""+o);break;case"className":ao(t,"class",o);break;case"tabIndex":ao(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ao(t,r,o);break;case"style":Q1(t,o,u);break;case"data":if(n!=="object"){ao(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||r!=="href")){t.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=fo(""+o),t.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(r==="formAction"?(n!=="input"&&ke(t,n,"name",l.name,l,null),ke(t,n,"formEncType",l.formEncType,l,null),ke(t,n,"formMethod",l.formMethod,l,null),ke(t,n,"formTarget",l.formTarget,l,null)):(ke(t,n,"encType",l.encType,l,null),ke(t,n,"method",l.method,l,null),ke(t,n,"target",l.target,l,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=fo(""+o),t.setAttribute(r,o);break;case"onClick":o!=null&&(t.onclick=Ko);break;case"onScroll":o!=null&&ge("scroll",t);break;case"onScrollEnd":o!=null&&ge("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(f(61));if(r=o.__html,r!=null){if(l.children!=null)throw Error(f(60));t.innerHTML=r}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}r=fo(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""+o):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":o===!0?t.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,o):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(r,o):t.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(r):t.setAttribute(r,o);break;case"popover":ge("beforetoggle",t),ge("toggle",t),no(t,"popover",o);break;case"xlinkActuate":En(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":En(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":En(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":En(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":En(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":En(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":En(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":En(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":En(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":no(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=Wb.get(r)||r,no(t,r,o))}}function Bu(t,n,r,o,l,u){switch(r){case"style":Q1(t,o,u);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(f(61));if(r=o.__html,r!=null){if(l.children!=null)throw Error(f(60));t.innerHTML=r}}break;case"children":typeof o=="string"?hr(t,o):(typeof o=="number"||typeof o=="bigint")&&hr(t,""+o);break;case"onScroll":o!=null&&ge("scroll",t);break;case"onScrollEnd":o!=null&&ge("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Ko);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!N1.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(l=r.endsWith("Capture"),n=r.slice(2,l?r.length-7:void 0),u=t[Mt]||null,u=u!=null?u[r]:null,typeof u=="function"&&t.removeEventListener(n,u,l),typeof o=="function")){typeof u!="function"&&u!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(n,o,l);break e}r in t?t[r]=o:o===!0?t.setAttribute(r,""):no(t,r,o)}}}function lt(t,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",t),ge("load",t);var o=!1,l=!1,u;for(u in r)if(r.hasOwnProperty(u)){var p=r[u];if(p!=null)switch(u){case"src":o=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(f(137,n));default:ke(t,n,u,p,r,null)}}l&&ke(t,n,"srcSet",r.srcSet,r,null),o&&ke(t,n,"src",r.src,r,null);return;case"input":ge("invalid",t);var w=u=p=l=null,S=null,B=null;for(o in r)if(r.hasOwnProperty(o)){var Z=r[o];if(Z!=null)switch(o){case"name":l=Z;break;case"type":p=Z;break;case"checked":S=Z;break;case"defaultChecked":B=Z;break;case"value":u=Z;break;case"defaultValue":w=Z;break;case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(f(137,n));break;default:ke(t,n,o,Z,r,null)}}B1(t,u,w,S,B,p,l,!1),ro(t);return;case"select":ge("invalid",t),o=p=u=null;for(l in r)if(r.hasOwnProperty(l)&&(w=r[l],w!=null))switch(l){case"value":u=w;break;case"defaultValue":p=w;break;case"multiple":o=w;default:ke(t,n,l,w,r,null)}n=u,r=p,t.multiple=!!o,n!=null?dr(t,!!o,n,!1):r!=null&&dr(t,!!o,r,!0);return;case"textarea":ge("invalid",t),u=l=o=null;for(p in r)if(r.hasOwnProperty(p)&&(w=r[p],w!=null))switch(p){case"value":o=w;break;case"defaultValue":l=w;break;case"children":u=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(f(91));break;default:ke(t,n,p,w,r,null)}_1(t,o,l,u),ro(t);return;case"option":for(S in r)if(r.hasOwnProperty(S)&&(o=r[S],o!=null))switch(S){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:ke(t,n,S,o,r,null)}return;case"dialog":ge("beforetoggle",t),ge("toggle",t),ge("cancel",t),ge("close",t);break;case"iframe":case"object":ge("load",t);break;case"video":case"audio":for(o=0;o<Wi.length;o++)ge(Wi[o],t);break;case"image":ge("error",t),ge("load",t);break;case"details":ge("toggle",t);break;case"embed":case"source":case"link":ge("error",t),ge("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(B in r)if(r.hasOwnProperty(B)&&(o=r[B],o!=null))switch(B){case"children":case"dangerouslySetInnerHTML":throw Error(f(137,n));default:ke(t,n,B,o,r,null)}return;default:if(Kl(n)){for(Z in r)r.hasOwnProperty(Z)&&(o=r[Z],o!==void 0&&Bu(t,n,Z,o,r,void 0));return}}for(w in r)r.hasOwnProperty(w)&&(o=r[w],o!=null&&ke(t,n,w,o,r,null))}function j6(t,n,r,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,u=null,p=null,w=null,S=null,B=null,Z=null;for(Q in r){var H=r[Q];if(r.hasOwnProperty(Q)&&H!=null)switch(Q){case"checked":break;case"value":break;case"defaultValue":S=H;default:o.hasOwnProperty(Q)||ke(t,n,Q,null,o,H)}}for(var Y in o){var Q=o[Y];if(H=r[Y],o.hasOwnProperty(Y)&&(Q!=null||H!=null))switch(Y){case"type":u=Q;break;case"name":l=Q;break;case"checked":B=Q;break;case"defaultChecked":Z=Q;break;case"value":p=Q;break;case"defaultValue":w=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(f(137,n));break;default:Q!==H&&ke(t,n,Y,Q,o,H)}}Xl(t,p,w,S,B,Z,u,l);return;case"select":Q=p=w=Y=null;for(u in r)if(S=r[u],r.hasOwnProperty(u)&&S!=null)switch(u){case"value":break;case"multiple":Q=S;default:o.hasOwnProperty(u)||ke(t,n,u,null,o,S)}for(l in o)if(u=o[l],S=r[l],o.hasOwnProperty(l)&&(u!=null||S!=null))switch(l){case"value":Y=u;break;case"defaultValue":w=u;break;case"multiple":p=u;default:u!==S&&ke(t,n,l,u,o,S)}n=w,r=p,o=Q,Y!=null?dr(t,!!r,Y,!1):!!o!=!!r&&(n!=null?dr(t,!!r,n,!0):dr(t,!!r,r?[]:"",!1));return;case"textarea":Q=Y=null;for(w in r)if(l=r[w],r.hasOwnProperty(w)&&l!=null&&!o.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:ke(t,n,w,null,o,l)}for(p in o)if(l=o[p],u=r[p],o.hasOwnProperty(p)&&(l!=null||u!=null))switch(p){case"value":Y=l;break;case"defaultValue":Q=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(f(91));break;default:l!==u&&ke(t,n,p,l,o,u)}U1(t,Y,Q);return;case"option":for(var ae in r)if(Y=r[ae],r.hasOwnProperty(ae)&&Y!=null&&!o.hasOwnProperty(ae))switch(ae){case"selected":t.selected=!1;break;default:ke(t,n,ae,null,o,Y)}for(S in o)if(Y=o[S],Q=r[S],o.hasOwnProperty(S)&&Y!==Q&&(Y!=null||Q!=null))switch(S){case"selected":t.selected=Y&&typeof Y!="function"&&typeof Y!="symbol";break;default:ke(t,n,S,Y,o,Q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in r)Y=r[ee],r.hasOwnProperty(ee)&&Y!=null&&!o.hasOwnProperty(ee)&&ke(t,n,ee,null,o,Y);for(B in o)if(Y=o[B],Q=r[B],o.hasOwnProperty(B)&&Y!==Q&&(Y!=null||Q!=null))switch(B){case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(f(137,n));break;default:ke(t,n,B,Y,o,Q)}return;default:if(Kl(n)){for(var Ee in r)Y=r[Ee],r.hasOwnProperty(Ee)&&Y!==void 0&&!o.hasOwnProperty(Ee)&&Bu(t,n,Ee,void 0,o,Y);for(Z in o)Y=o[Z],Q=r[Z],!o.hasOwnProperty(Z)||Y===Q||Y===void 0&&Q===void 0||Bu(t,n,Z,Y,o,Q);return}}for(var D in r)Y=r[D],r.hasOwnProperty(D)&&Y!=null&&!o.hasOwnProperty(D)&&ke(t,n,D,null,o,Y);for(H in o)Y=o[H],Q=r[H],!o.hasOwnProperty(H)||Y===Q||Y==null&&Q==null||ke(t,n,H,Y,o,Q)}var Uu=null,_u=null;function es(t){return t.nodeType===9?t:t.ownerDocument}function Yg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Qg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Yu(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Qu=null;function L6(){var t=window.event;return t&&t.type==="popstate"?t===Qu?!1:(Qu=t,!0):(Qu=null,!1)}var Gg=typeof setTimeout=="function"?setTimeout:void 0,S6=typeof clearTimeout=="function"?clearTimeout:void 0,$g=typeof Promise=="function"?Promise:void 0,C6=typeof queueMicrotask=="function"?queueMicrotask:typeof $g<"u"?function(t){return $g.resolve(null).then(t).catch(k6)}:Gg;function k6(t){setTimeout(function(){throw t})}function ua(t){return t==="head"}function Zg(t,n){var r=n,o=0,l=0;do{var u=r.nextSibling;if(t.removeChild(r),u&&u.nodeType===8)if(r=u.data,r==="/$"){if(0<o&&8>o){r=o;var p=t.ownerDocument;if(r&1&&ef(p.documentElement),r&2&&ef(p.body),r&4)for(r=p.head,ef(r),p=r.firstChild;p;){var w=p.nextSibling,S=p.nodeName;p[gi]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&p.rel.toLowerCase()==="stylesheet"||r.removeChild(p),p=w}}if(l===0){t.removeChild(u),lf(n);return}l--}else r==="$"||r==="$?"||r==="$!"?l++:o=r.charCodeAt(0)-48;else o=0;r=u}while(r);lf(n)}function Gu(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Gu(r),Pl(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function E6(t,n,r,o){for(;t.nodeType===1;){var l=r;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[gi])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var u=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=sn(t.nextSibling),t===null)break}return null}function T6(t,n,r){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=sn(t.nextSibling),t===null))return null;return t}function $u(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function N6(t,n){var r=t.ownerDocument;if(t.data!=="$?"||r.readyState==="complete")n();else{var o=function(){n(),r.removeEventListener("DOMContentLoaded",o)};r.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function sn(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var Zu=null;function Jg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(n===0)return t;n--}else r==="/$"&&n++}t=t.previousSibling}return null}function Hg(t,n,r){switch(n=es(r),t){case"html":if(t=n.documentElement,!t)throw Error(f(452));return t;case"head":if(t=n.head,!t)throw Error(f(453));return t;case"body":if(t=n.body,!t)throw Error(f(454));return t;default:throw Error(f(451))}}function ef(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Pl(t)}var Wt=new Map,Pg=new Set;function ts(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Gn=P.d;P.d={f:I6,r:D6,D:A6,C:z6,L:R6,m:O6,X:U6,S:B6,M:_6};function I6(){var t=Gn.f(),n=Ho();return t||n}function D6(t){var n=sr(t);n!==null&&n.tag===5&&n.type==="form"?hm(n):Gn.r(t)}var Gr=typeof document>"u"?null:document;function Fg(t,n,r){var o=Gr;if(o&&typeof n=="string"&&n){var l=Jt(n);l='link[rel="'+t+'"][href="'+l+'"]',typeof r=="string"&&(l+='[crossorigin="'+r+'"]'),Pg.has(l)||(Pg.add(l),t={rel:t,crossOrigin:r,href:n},o.querySelector(l)===null&&(n=o.createElement("link"),lt(n,"link",t),Ke(n),o.head.appendChild(n)))}}function A6(t){Gn.D(t),Fg("dns-prefetch",t,null)}function z6(t,n){Gn.C(t,n),Fg("preconnect",t,n)}function R6(t,n,r){Gn.L(t,n,r);var o=Gr;if(o&&t&&n){var l='link[rel="preload"][as="'+Jt(n)+'"]';n==="image"&&r&&r.imageSrcSet?(l+='[imagesrcset="'+Jt(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(l+='[imagesizes="'+Jt(r.imageSizes)+'"]')):l+='[href="'+Jt(t)+'"]';var u=l;switch(n){case"style":u=$r(t);break;case"script":u=Zr(t)}Wt.has(u)||(t=v({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:t,as:n},r),Wt.set(u,t),o.querySelector(l)!==null||n==="style"&&o.querySelector(tf(u))||n==="script"&&o.querySelector(nf(u))||(n=o.createElement("link"),lt(n,"link",t),Ke(n),o.head.appendChild(n)))}}function O6(t,n){Gn.m(t,n);var r=Gr;if(r&&t){var o=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+Jt(o)+'"][href="'+Jt(t)+'"]',u=l;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Zr(t)}if(!Wt.has(u)&&(t=v({rel:"modulepreload",href:t},n),Wt.set(u,t),r.querySelector(l)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(nf(u)))return}o=r.createElement("link"),lt(o,"link",t),Ke(o),r.head.appendChild(o)}}}function B6(t,n,r){Gn.S(t,n,r);var o=Gr;if(o&&t){var l=lr(o).hoistableStyles,u=$r(t);n=n||"default";var p=l.get(u);if(!p){var w={loading:0,preload:null};if(p=o.querySelector(tf(u)))w.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},r),(r=Wt.get(u))&&Ju(t,r);var S=p=o.createElement("link");Ke(S),lt(S,"link",t),S._p=new Promise(function(B,Z){S.onload=B,S.onerror=Z}),S.addEventListener("load",function(){w.loading|=1}),S.addEventListener("error",function(){w.loading|=2}),w.loading|=4,ns(p,n,o)}p={type:"stylesheet",instance:p,count:1,state:w},l.set(u,p)}}}function U6(t,n){Gn.X(t,n);var r=Gr;if(r&&t){var o=lr(r).hoistableScripts,l=Zr(t),u=o.get(l);u||(u=r.querySelector(nf(l)),u||(t=v({src:t,async:!0},n),(n=Wt.get(l))&&Hu(t,n),u=r.createElement("script"),Ke(u),lt(u,"link",t),r.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(l,u))}}function _6(t,n){Gn.M(t,n);var r=Gr;if(r&&t){var o=lr(r).hoistableScripts,l=Zr(t),u=o.get(l);u||(u=r.querySelector(nf(l)),u||(t=v({src:t,async:!0,type:"module"},n),(n=Wt.get(l))&&Hu(t,n),u=r.createElement("script"),Ke(u),lt(u,"link",t),r.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(l,u))}}function qg(t,n,r,o){var l=(l=vt.current)?ts(l):null;if(!l)throw Error(f(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=$r(r.href),r=lr(l).hoistableStyles,o=r.get(n),o||(o={type:"style",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=$r(r.href);var u=lr(l).hoistableStyles,p=u.get(t);if(p||(l=l.ownerDocument||l,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,p),(u=l.querySelector(tf(t)))&&!u._p&&(p.instance=u,p.state.loading=5),Wt.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Wt.set(t,r),u||Y6(l,t,r,p.state))),n&&o===null)throw Error(f(528,""));return p}if(n&&o!==null)throw Error(f(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Zr(r),r=lr(l).hoistableScripts,o=r.get(n),o||(o={type:"script",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(f(444,t))}}function $r(t){return'href="'+Jt(t)+'"'}function tf(t){return'link[rel="stylesheet"]['+t+"]"}function Vg(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function Y6(t,n,r,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),lt(n,"link",r),Ke(n),t.head.appendChild(n))}function Zr(t){return'[src="'+Jt(t)+'"]'}function nf(t){return"script[async]"+t}function Xg(t,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Jt(r.href)+'"]');if(o)return n.instance=o,Ke(o),o;var l=v({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),Ke(o),lt(o,"style",l),ns(o,r.precedence,t),n.instance=o;case"stylesheet":l=$r(r.href);var u=t.querySelector(tf(l));if(u)return n.state.loading|=4,n.instance=u,Ke(u),u;o=Vg(r),(l=Wt.get(l))&&Ju(o,l),u=(t.ownerDocument||t).createElement("link"),Ke(u);var p=u;return p._p=new Promise(function(w,S){p.onload=w,p.onerror=S}),lt(u,"link",o),n.state.loading|=4,ns(u,r.precedence,t),n.instance=u;case"script":return u=Zr(r.src),(l=t.querySelector(nf(u)))?(n.instance=l,Ke(l),l):(o=r,(l=Wt.get(u))&&(o=v({},r),Hu(o,l)),t=t.ownerDocument||t,l=t.createElement("script"),Ke(l),lt(l,"link",o),t.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(f(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,ns(o,r.precedence,t));return n.instance}function ns(t,n,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=o.length?o[o.length-1]:null,u=l,p=0;p<o.length;p++){var w=o[p];if(w.dataset.precedence===n)u=w;else if(u!==l)break}u?u.parentNode.insertBefore(t,u.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(t,n.firstChild))}function Ju(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Hu(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var as=null;function Wg(t,n,r){if(as===null){var o=new Map,l=as=new Map;l.set(r,o)}else l=as,o=l.get(r),o||(o=new Map,l.set(r,o));if(o.has(t))return o;for(o.set(t,null),r=r.getElementsByTagName(t),l=0;l<r.length;l++){var u=r[l];if(!(u[gi]||u[ct]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var p=u.getAttribute(n)||"";p=t+p;var w=o.get(p);w?w.push(u):o.set(p,[u])}}return o}function Kg(t,n,r){t=t.ownerDocument||t,t.head.insertBefore(r,n==="title"?t.querySelector("head > title"):null)}function Q6(t,n,r){if(r===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function e2(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var af=null;function G6(){}function $6(t,n,r){if(af===null)throw Error(f(475));var o=af;if(n.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=$r(r.href),u=t.querySelector(tf(l));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=rs.bind(o),t.then(o,o)),n.state.loading|=4,n.instance=u,Ke(u);return}u=t.ownerDocument||t,r=Vg(r),(l=Wt.get(l))&&Ju(r,l),u=u.createElement("link"),Ke(u);var p=u;p._p=new Promise(function(w,S){p.onload=w,p.onerror=S}),lt(u,"link",r),n.instance=u}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=rs.bind(o),t.addEventListener("load",n),t.addEventListener("error",n))}}function Z6(){if(af===null)throw Error(f(475));var t=af;return t.stylesheets&&t.count===0&&Pu(t,t.stylesheets),0<t.count?function(n){var r=setTimeout(function(){if(t.stylesheets&&Pu(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(r)}}:null}function rs(){if(this.count--,this.count===0){if(this.stylesheets)Pu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var is=null;function Pu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,is=new Map,n.forEach(J6,t),is=null,rs.call(t))}function J6(t,n){if(!(n.state.loading&4)){var r=is.get(t);if(r)var o=r.get(null);else{r=new Map,is.set(t,r);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<l.length;u++){var p=l[u];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(r.set(p.dataset.precedence,p),o=p)}o&&r.set(null,o)}l=n.instance,p=l.getAttribute("data-precedence"),u=r.get(p)||o,u===o&&r.set(null,l),r.set(p,l),this.count++,o=rs.bind(this),l.addEventListener("load",o),l.addEventListener("error",o),u?u.parentNode.insertBefore(l,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),n.state.loading|=4}}var rf={$$typeof:G,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function H6(t,n,r,o,l,u,p,w){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$l(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$l(0),this.hiddenUpdates=$l(null),this.identifierPrefix=o,this.onUncaughtError=l,this.onCaughtError=u,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function t2(t,n,r,o,l,u,p,w,S,B,Z,H){return t=new H6(t,n,r,p,w,S,B,H),n=1,u===!0&&(n|=24),u=At(3,null,null,n),t.current=u,u.stateNode=t,n=Ec(),n.refCount++,t.pooledCache=n,n.refCount++,u.memoizedState={element:o,isDehydrated:r,cache:n},Dc(u),t}function n2(t){return t?(t=xr,t):xr}function a2(t,n,r,o,l,u){l=n2(l),o.context===null?o.context=l:o.pendingContext=l,o=Wn(n),o.payload={element:r},u=u===void 0?null:u,u!==null&&(o.callback=u),r=Kn(t,o,n),r!==null&&(Ut(r,t,n),zi(r,t,n))}function r2(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<n?r:n}}function Fu(t,n){r2(t,n),(t=t.alternate)&&r2(t,n)}function i2(t){if(t.tag===13){var n=vr(t,67108864);n!==null&&Ut(n,t,67108864),Fu(t,67108864)}}var fs=!0;function P6(t,n,r,o){var l=U.T;U.T=null;var u=P.p;try{P.p=2,qu(t,n,r,o)}finally{P.p=u,U.T=l}}function F6(t,n,r,o){var l=U.T;U.T=null;var u=P.p;try{P.p=8,qu(t,n,r,o)}finally{P.p=u,U.T=l}}function qu(t,n,r,o){if(fs){var l=Vu(o);if(l===null)Ou(t,n,o,os,r),o2(t,o);else if(V6(l,t,n,r,o))o.stopPropagation();else if(o2(t,o),n&4&&-1<q6.indexOf(t)){for(;l!==null;){var u=sr(l);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var p=Ea(u.pendingLanes);if(p!==0){var w=u;for(w.pendingLanes|=2,w.entangledLanes|=2;p;){var S=1<<31-It(p);w.entanglements[1]|=S,p&=~S}vn(u),(je&6)===0&&(Zo=gn()+500,Xi(0))}}break;case 13:w=vr(u,2),w!==null&&Ut(w,u,2),Ho(),Fu(u,2)}if(u=Vu(o),u===null&&Ou(t,n,o,os,r),u===l)break;l=u}l!==null&&o.stopPropagation()}else Ou(t,n,o,null,r)}}function Vu(t){return t=tc(t),Xu(t)}var os=null;function Xu(t){if(os=null,t=or(t),t!==null){var n=d(t);if(n===null)t=null;else{var r=n.tag;if(r===13){if(t=m(n),t!==null)return t;t=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return os=t,null}function f2(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(zb()){case v1:return 2;case x1:return 8;case Wf:case Rb:return 32;case M1:return 268435456;default:return 32}default:return 32}}var Wu=!1,da=null,ha=null,ma=null,ff=new Map,of=new Map,ga=[],q6="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function o2(t,n){switch(t){case"focusin":case"focusout":da=null;break;case"dragenter":case"dragleave":ha=null;break;case"mouseover":case"mouseout":ma=null;break;case"pointerover":case"pointerout":ff.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":of.delete(n.pointerId)}}function sf(t,n,r,o,l,u){return t===null||t.nativeEvent!==u?(t={blockedOn:n,domEventName:r,eventSystemFlags:o,nativeEvent:u,targetContainers:[l]},n!==null&&(n=sr(n),n!==null&&i2(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),t)}function V6(t,n,r,o,l){switch(n){case"focusin":return da=sf(da,t,n,r,o,l),!0;case"dragenter":return ha=sf(ha,t,n,r,o,l),!0;case"mouseover":return ma=sf(ma,t,n,r,o,l),!0;case"pointerover":var u=l.pointerId;return ff.set(u,sf(ff.get(u)||null,t,n,r,o,l)),!0;case"gotpointercapture":return u=l.pointerId,of.set(u,sf(of.get(u)||null,t,n,r,o,l)),!0}return!1}function s2(t){var n=or(t.target);if(n!==null){var r=d(n);if(r!==null){if(n=r.tag,n===13){if(n=m(r),n!==null){t.blockedOn=n,$b(t.priority,function(){if(r.tag===13){var o=Bt();o=Zl(o);var l=vr(r,o);l!==null&&Ut(l,r,o),Fu(r,o)}});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ss(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var r=Vu(t.nativeEvent);if(r===null){r=t.nativeEvent;var o=new r.constructor(r.type,r);ec=o,r.target.dispatchEvent(o),ec=null}else return n=sr(r),n!==null&&i2(n),t.blockedOn=r,!1;n.shift()}return!0}function l2(t,n,r){ss(t)&&r.delete(n)}function X6(){Wu=!1,da!==null&&ss(da)&&(da=null),ha!==null&&ss(ha)&&(ha=null),ma!==null&&ss(ma)&&(ma=null),ff.forEach(l2),of.forEach(l2)}function ls(t,n){t.blockedOn===n&&(t.blockedOn=null,Wu||(Wu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,X6)))}var cs=null;function c2(t){cs!==t&&(cs=t,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){cs===t&&(cs=null);for(var n=0;n<t.length;n+=3){var r=t[n],o=t[n+1],l=t[n+2];if(typeof o!="function"){if(Xu(o||r)===null)continue;break}var u=sr(r);u!==null&&(t.splice(n,3),n-=3,Xc(u,{pending:!0,data:l,method:r.method,action:o},o,l))}}))}function lf(t){function n(S){return ls(S,t)}da!==null&&ls(da,t),ha!==null&&ls(ha,t),ma!==null&&ls(ma,t),ff.forEach(n),of.forEach(n);for(var r=0;r<ga.length;r++){var o=ga[r];o.blockedOn===t&&(o.blockedOn=null)}for(;0<ga.length&&(r=ga[0],r.blockedOn===null);)s2(r),r.blockedOn===null&&ga.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var l=r[o],u=r[o+1],p=l[Mt]||null;if(typeof u=="function")p||c2(r);else if(p){var w=null;if(u&&u.hasAttribute("formAction")){if(l=u,p=u[Mt]||null)w=p.formAction;else if(Xu(l)!==null)continue}else w=p.action;typeof w=="function"?r[o+1]=w:(r.splice(o,3),o-=3),c2(r)}}}function Ku(t){this._internalRoot=t}us.prototype.render=Ku.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(f(409));var r=n.current,o=Bt();a2(r,o,t,n,null,null)},us.prototype.unmount=Ku.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;a2(t.current,2,null,t,null,null),Ho(),n[fr]=null}};function us(t){this._internalRoot=t}us.prototype.unstable_scheduleHydration=function(t){if(t){var n=k1();t={blockedOn:null,target:t,priority:n};for(var r=0;r<ga.length&&n!==0&&n<ga[r].priority;r++);ga.splice(r,0,t),r===0&&s2(t)}};var u2=a.version;if(u2!=="19.1.0")throw Error(f(527,u2,"19.1.0"));P.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(f(188)):(t=Object.keys(t).join(","),Error(f(268,t)));return t=b(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var W6={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ds=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ds.isDisabled&&ds.supportsFiber)try{di=ds.inject(W6),Nt=ds}catch{}}return uf.createRoot=function(t,n){if(!c(t))throw Error(f(299));var r=!1,o="",l=km,u=Em,p=Tm,w=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(p=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(w=n.unstable_transitionCallbacks)),n=t2(t,1,!1,null,null,r,o,l,u,p,w,null),t[fr]=n.current,Ru(t),new Ku(n)},uf.hydrateRoot=function(t,n,r){if(!c(t))throw Error(f(299));var o=!1,l="",u=km,p=Em,w=Tm,S=null,B=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onUncaughtError!==void 0&&(u=r.onUncaughtError),r.onCaughtError!==void 0&&(p=r.onCaughtError),r.onRecoverableError!==void 0&&(w=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(S=r.unstable_transitionCallbacks),r.formState!==void 0&&(B=r.formState)),n=t2(t,1,!0,n,r??null,o,l,u,p,w,S,B),n.context=n2(null),r=n.current,o=Bt(),o=Zl(o),l=Wn(o),l.callback=null,Kn(r,l,o),r=o,n.current.lanes=r,mi(n,r),vn(n),t[fr]=n.current,Ru(t),new us(n)},uf.version="19.1.0",uf}var y2;function lv(){if(y2)return td.exports;y2=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(a){console.error(a)}}return e(),td.exports=sv(),td.exports}var cv=lv(),it=function(){return it=Object.assign||function(a){for(var i,f=1,c=arguments.length;f<c;f++){i=arguments[f];for(var d in i)Object.prototype.hasOwnProperty.call(i,d)&&(a[d]=i[d])}return a},it.apply(this,arguments)};function Xr(e,a,i){if(i||arguments.length===2)for(var f=0,c=a.length,d;f<c;f++)(d||!(f in a))&&(d||(d=Array.prototype.slice.call(a,0,f)),d[f]=a[f]);return e.concat(d||Array.prototype.slice.call(a))}var Ie="-ms-",Sf="-moz-",Me="-webkit-",v4="comm",ul="rule",D0="decl",uv="@import",x4="@keyframes",dv="@layer",M4=Math.abs,A0=String.fromCharCode,a0=Object.assign;function hv(e,a){return at(e,0)^45?(((a<<2^at(e,0))<<2^at(e,1))<<2^at(e,2))<<2^at(e,3):0}function j4(e){return e.trim()}function $n(e,a){return(e=a.exec(e))?e[0]:e}function oe(e,a,i){return e.replace(a,i)}function Ns(e,a,i){return e.indexOf(a,i)}function at(e,a){return e.charCodeAt(a)|0}function Wr(e,a,i){return e.slice(a,i)}function jn(e){return e.length}function L4(e){return e.length}function xf(e,a){return a.push(e),e}function mv(e,a){return e.map(a).join("")}function b2(e,a){return e.filter(function(i){return!$n(i,a)})}var dl=1,Kr=1,S4=0,nn=0,Fe=0,ii="";function hl(e,a,i,f,c,d,m,y){return{value:e,root:a,parent:i,type:f,props:c,children:d,line:dl,column:Kr,length:m,return:"",siblings:y}}function ba(e,a){return a0(hl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},a)}function Jr(e){for(;e.root;)e=ba(e.root,{children:[e]});xf(e,e.siblings)}function gv(){return Fe}function pv(){return Fe=nn>0?at(ii,--nn):0,Kr--,Fe===10&&(Kr=1,dl--),Fe}function un(){return Fe=nn<S4?at(ii,nn++):0,Kr++,Fe===10&&(Kr=1,dl++),Fe}function qa(){return at(ii,nn)}function Is(){return nn}function ml(e,a){return Wr(ii,e,a)}function r0(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function yv(e){return dl=Kr=1,S4=jn(ii=e),nn=0,[]}function bv(e){return ii="",e}function rd(e){return j4(ml(nn-1,i0(e===91?e+2:e===40?e+1:e)))}function wv(e){for(;(Fe=qa())&&Fe<33;)un();return r0(e)>2||r0(Fe)>3?"":" "}function vv(e,a){for(;--a&&un()&&!(Fe<48||Fe>102||Fe>57&&Fe<65||Fe>70&&Fe<97););return ml(e,Is()+(a<6&&qa()==32&&un()==32))}function i0(e){for(;un();)switch(Fe){case e:return nn;case 34:case 39:e!==34&&e!==39&&i0(Fe);break;case 40:e===41&&i0(e);break;case 92:un();break}return nn}function xv(e,a){for(;un()&&e+Fe!==57;)if(e+Fe===84&&qa()===47)break;return"/*"+ml(a,nn-1)+"*"+A0(e===47?e:un())}function Mv(e){for(;!r0(qa());)un();return ml(e,nn)}function jv(e){return bv(Ds("",null,null,null,[""],e=yv(e),0,[0],e))}function Ds(e,a,i,f,c,d,m,y,b){for(var x=0,v=0,M=m,j=0,k=0,N=0,C=1,E=1,I=1,A=0,G="",_=c,L=d,R=f,O=G;E;)switch(N=A,A=un()){case 40:if(N!=108&&at(O,M-1)==58){Ns(O+=oe(rd(A),"&","&\f"),"&\f",M4(x?y[x-1]:0))!=-1&&(I=-1);break}case 34:case 39:case 91:O+=rd(A);break;case 9:case 10:case 13:case 32:O+=wv(N);break;case 92:O+=vv(Is()-1,7);continue;case 47:switch(qa()){case 42:case 47:xf(Lv(xv(un(),Is()),a,i,b),b);break;default:O+="/"}break;case 123*C:y[x++]=jn(O)*I;case 125*C:case 59:case 0:switch(A){case 0:case 125:E=0;case 59+v:I==-1&&(O=oe(O,/\f/g,"")),k>0&&jn(O)-M&&xf(k>32?v2(O+";",f,i,M-1,b):v2(oe(O," ","")+";",f,i,M-2,b),b);break;case 59:O+=";";default:if(xf(R=w2(O,a,i,x,v,c,y,G,_=[],L=[],M,d),d),A===123)if(v===0)Ds(O,a,R,R,_,d,M,y,L);else switch(j===99&&at(O,3)===110?100:j){case 100:case 108:case 109:case 115:Ds(e,R,R,f&&xf(w2(e,R,R,0,0,c,y,G,c,_=[],M,L),L),c,L,M,y,f?_:L);break;default:Ds(O,R,R,R,[""],L,0,y,L)}}x=v=k=0,C=I=1,G=O="",M=m;break;case 58:M=1+jn(O),k=N;default:if(C<1){if(A==123)--C;else if(A==125&&C++==0&&pv()==125)continue}switch(O+=A0(A),A*C){case 38:I=v>0?1:(O+="\f",-1);break;case 44:y[x++]=(jn(O)-1)*I,I=1;break;case 64:qa()===45&&(O+=rd(un())),j=qa(),v=M=jn(G=O+=Mv(Is())),A++;break;case 45:N===45&&jn(O)==2&&(C=0)}}return d}function w2(e,a,i,f,c,d,m,y,b,x,v,M){for(var j=c-1,k=c===0?d:[""],N=L4(k),C=0,E=0,I=0;C<f;++C)for(var A=0,G=Wr(e,j+1,j=M4(E=m[C])),_=e;A<N;++A)(_=j4(E>0?k[A]+" "+G:oe(G,/&\f/g,k[A])))&&(b[I++]=_);return hl(e,a,i,c===0?ul:y,b,x,v,M)}function Lv(e,a,i,f){return hl(e,a,i,v4,A0(gv()),Wr(e,2,-2),0,f)}function v2(e,a,i,f,c){return hl(e,a,i,D0,Wr(e,0,f),Wr(e,f+1,-1),f,c)}function C4(e,a,i){switch(hv(e,a)){case 5103:return Me+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Me+e+e;case 4789:return Sf+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Me+e+Sf+e+Ie+e+e;case 5936:switch(at(e,a+11)){case 114:return Me+e+Ie+oe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Me+e+Ie+oe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Me+e+Ie+oe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Me+e+Ie+e+e;case 6165:return Me+e+Ie+"flex-"+e+e;case 5187:return Me+e+oe(e,/(\w+).+(:[^]+)/,Me+"box-$1$2"+Ie+"flex-$1$2")+e;case 5443:return Me+e+Ie+"flex-item-"+oe(e,/flex-|-self/g,"")+($n(e,/flex-|baseline/)?"":Ie+"grid-row-"+oe(e,/flex-|-self/g,""))+e;case 4675:return Me+e+Ie+"flex-line-pack"+oe(e,/align-content|flex-|-self/g,"")+e;case 5548:return Me+e+Ie+oe(e,"shrink","negative")+e;case 5292:return Me+e+Ie+oe(e,"basis","preferred-size")+e;case 6060:return Me+"box-"+oe(e,"-grow","")+Me+e+Ie+oe(e,"grow","positive")+e;case 4554:return Me+oe(e,/([^-])(transform)/g,"$1"+Me+"$2")+e;case 6187:return oe(oe(oe(e,/(zoom-|grab)/,Me+"$1"),/(image-set)/,Me+"$1"),e,"")+e;case 5495:case 3959:return oe(e,/(image-set\([^]*)/,Me+"$1$`$1");case 4968:return oe(oe(e,/(.+:)(flex-)?(.*)/,Me+"box-pack:$3"+Ie+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Me+e+e;case 4200:if(!$n(e,/flex-|baseline/))return Ie+"grid-column-align"+Wr(e,a)+e;break;case 2592:case 3360:return Ie+oe(e,"template-","")+e;case 4384:case 3616:return i&&i.some(function(f,c){return a=c,$n(f.props,/grid-\w+-end/)})?~Ns(e+(i=i[a].value),"span",0)?e:Ie+oe(e,"-start","")+e+Ie+"grid-row-span:"+(~Ns(i,"span",0)?$n(i,/\d+/):+$n(i,/\d+/)-+$n(e,/\d+/))+";":Ie+oe(e,"-start","")+e;case 4896:case 4128:return i&&i.some(function(f){return $n(f.props,/grid-\w+-start/)})?e:Ie+oe(oe(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return oe(e,/(.+)-inline(.+)/,Me+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(jn(e)-1-a>6)switch(at(e,a+1)){case 109:if(at(e,a+4)!==45)break;case 102:return oe(e,/(.+:)(.+)-([^]+)/,"$1"+Me+"$2-$3$1"+Sf+(at(e,a+3)==108?"$3":"$2-$3"))+e;case 115:return~Ns(e,"stretch",0)?C4(oe(e,"stretch","fill-available"),a,i)+e:e}break;case 5152:case 5920:return oe(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(f,c,d,m,y,b,x){return Ie+c+":"+d+x+(m?Ie+c+"-span:"+(y?b:+b-+d)+x:"")+e});case 4949:if(at(e,a+6)===121)return oe(e,":",":"+Me)+e;break;case 6444:switch(at(e,at(e,14)===45?18:11)){case 120:return oe(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Me+(at(e,14)===45?"inline-":"")+"box$3$1"+Me+"$2$3$1"+Ie+"$2box$3")+e;case 100:return oe(e,":",":"+Ie)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return oe(e,"scroll-","scroll-snap-")+e}return e}function Xs(e,a){for(var i="",f=0;f<e.length;f++)i+=a(e[f],f,e,a)||"";return i}function Sv(e,a,i,f){switch(e.type){case dv:if(e.children.length)break;case uv:case D0:return e.return=e.return||e.value;case v4:return"";case x4:return e.return=e.value+"{"+Xs(e.children,f)+"}";case ul:if(!jn(e.value=e.props.join(",")))return""}return jn(i=Xs(e.children,f))?e.return=e.value+"{"+i+"}":""}function Cv(e){var a=L4(e);return function(i,f,c,d){for(var m="",y=0;y<a;y++)m+=e[y](i,f,c,d)||"";return m}}function kv(e){return function(a){a.root||(a=a.return)&&e(a)}}function Ev(e,a,i,f){if(e.length>-1&&!e.return)switch(e.type){case D0:e.return=C4(e.value,e.length,i);return;case x4:return Xs([ba(e,{value:oe(e.value,"@","@"+Me)})],f);case ul:if(e.length)return mv(i=e.props,function(c){switch($n(c,f=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Jr(ba(e,{props:[oe(c,/:(read-\w+)/,":"+Sf+"$1")]})),Jr(ba(e,{props:[c]})),a0(e,{props:b2(i,f)});break;case"::placeholder":Jr(ba(e,{props:[oe(c,/:(plac\w+)/,":"+Me+"input-$1")]})),Jr(ba(e,{props:[oe(c,/:(plac\w+)/,":"+Sf+"$1")]})),Jr(ba(e,{props:[oe(c,/:(plac\w+)/,Ie+"input-$1")]})),Jr(ba(e,{props:[c]})),a0(e,{props:b2(i,f)});break}return""})}}var Tv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},_t={},ei=typeof process<"u"&&_t!==void 0&&(_t.REACT_APP_SC_ATTR||_t.SC_ATTR)||"data-styled",k4="active",E4="data-styled-version",gl="6.1.18",z0=`/*!sc*/
`,Ws=typeof window<"u"&&typeof document<"u",Nv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&_t!==void 0&&_t.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&_t.REACT_APP_SC_DISABLE_SPEEDY!==""?_t.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&_t.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&_t!==void 0&&_t.SC_DISABLE_SPEEDY!==void 0&&_t.SC_DISABLE_SPEEDY!==""&&_t.SC_DISABLE_SPEEDY!=="false"&&_t.SC_DISABLE_SPEEDY),Iv={},pl=Object.freeze([]),ti=Object.freeze({});function T4(e,a,i){return i===void 0&&(i=ti),e.theme!==i.theme&&e.theme||a||i.theme}var N4=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Dv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Av=/(^-|-$)/g;function x2(e){return e.replace(Dv,"-").replace(Av,"")}var zv=/(a)(d)/gi,hs=52,M2=function(e){return String.fromCharCode(e+(e>25?39:97))};function f0(e){var a,i="";for(a=Math.abs(e);a>hs;a=a/hs|0)i=M2(a%hs)+i;return(M2(a%hs)+i).replace(zv,"$1-$2")}var id,I4=5381,Hr=function(e,a){for(var i=a.length;i;)e=33*e^a.charCodeAt(--i);return e},D4=function(e){return Hr(I4,e)};function R0(e){return f0(D4(e)>>>0)}function Rv(e){return e.displayName||e.name||"Component"}function fd(e){return typeof e=="string"&&!0}var A4=typeof Symbol=="function"&&Symbol.for,z4=A4?Symbol.for("react.memo"):60115,Ov=A4?Symbol.for("react.forward_ref"):60112,Bv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Uv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},R4={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},_v=((id={})[Ov]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},id[z4]=R4,id);function j2(e){return("type"in(a=e)&&a.type.$$typeof)===z4?R4:"$$typeof"in e?_v[e.$$typeof]:Bv;var a}var Yv=Object.defineProperty,Qv=Object.getOwnPropertyNames,L2=Object.getOwnPropertySymbols,Gv=Object.getOwnPropertyDescriptor,$v=Object.getPrototypeOf,S2=Object.prototype;function O4(e,a,i){if(typeof a!="string"){if(S2){var f=$v(a);f&&f!==S2&&O4(e,f,i)}var c=Qv(a);L2&&(c=c.concat(L2(a)));for(var d=j2(e),m=j2(a),y=0;y<c.length;++y){var b=c[y];if(!(b in Uv||i&&i[b]||m&&b in m||d&&b in d)){var x=Gv(a,b);try{Yv(e,b,x)}catch{}}}}return e}function Xa(e){return typeof e=="function"}function O0(e){return typeof e=="object"&&"styledComponentId"in e}function Pa(e,a){return e&&a?"".concat(e," ").concat(a):e||a||""}function Ks(e,a){if(e.length===0)return"";for(var i=e[0],f=1;f<e.length;f++)i+=e[f];return i}function kf(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function o0(e,a,i){if(i===void 0&&(i=!1),!i&&!kf(e)&&!Array.isArray(e))return a;if(Array.isArray(a))for(var f=0;f<a.length;f++)e[f]=o0(e[f],a[f]);else if(kf(a))for(var f in a)e[f]=o0(e[f],a[f]);return e}function B0(e,a){Object.defineProperty(e,"toString",{value:a})}function Wa(e){for(var a=[],i=1;i<arguments.length;i++)a[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(a.length>0?" Args: ".concat(a.join(", ")):""))}var Zv=function(){function e(a){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=a}return e.prototype.indexOfGroup=function(a){for(var i=0,f=0;f<a;f++)i+=this.groupSizes[f];return i},e.prototype.insertRules=function(a,i){if(a>=this.groupSizes.length){for(var f=this.groupSizes,c=f.length,d=c;a>=d;)if((d<<=1)<0)throw Wa(16,"".concat(a));this.groupSizes=new Uint32Array(d),this.groupSizes.set(f),this.length=d;for(var m=c;m<d;m++)this.groupSizes[m]=0}for(var y=this.indexOfGroup(a+1),b=(m=0,i.length);m<b;m++)this.tag.insertRule(y,i[m])&&(this.groupSizes[a]++,y++)},e.prototype.clearGroup=function(a){if(a<this.length){var i=this.groupSizes[a],f=this.indexOfGroup(a),c=f+i;this.groupSizes[a]=0;for(var d=f;d<c;d++)this.tag.deleteRule(f)}},e.prototype.getGroup=function(a){var i="";if(a>=this.length||this.groupSizes[a]===0)return i;for(var f=this.groupSizes[a],c=this.indexOfGroup(a),d=c+f,m=c;m<d;m++)i+="".concat(this.tag.getRule(m)).concat(z0);return i},e}(),As=new Map,el=new Map,zs=1,ms=function(e){if(As.has(e))return As.get(e);for(;el.has(zs);)zs++;var a=zs++;return As.set(e,a),el.set(a,e),a},Jv=function(e,a){zs=a+1,As.set(e,a),el.set(a,e)},Hv="style[".concat(ei,"][").concat(E4,'="').concat(gl,'"]'),Pv=new RegExp("^".concat(ei,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Fv=function(e,a,i){for(var f,c=i.split(","),d=0,m=c.length;d<m;d++)(f=c[d])&&e.registerName(a,f)},qv=function(e,a){for(var i,f=((i=a.textContent)!==null&&i!==void 0?i:"").split(z0),c=[],d=0,m=f.length;d<m;d++){var y=f[d].trim();if(y){var b=y.match(Pv);if(b){var x=0|parseInt(b[1],10),v=b[2];x!==0&&(Jv(v,x),Fv(e,v,b[3]),e.getTag().insertRules(x,c)),c.length=0}else c.push(y)}}},C2=function(e){for(var a=document.querySelectorAll(Hv),i=0,f=a.length;i<f;i++){var c=a[i];c&&c.getAttribute(ei)!==k4&&(qv(e,c),c.parentNode&&c.parentNode.removeChild(c))}};function Vv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var B4=function(e){var a=document.head,i=e||a,f=document.createElement("style"),c=function(y){var b=Array.from(y.querySelectorAll("style[".concat(ei,"]")));return b[b.length-1]}(i),d=c!==void 0?c.nextSibling:null;f.setAttribute(ei,k4),f.setAttribute(E4,gl);var m=Vv();return m&&f.setAttribute("nonce",m),i.insertBefore(f,d),f},Xv=function(){function e(a){this.element=B4(a),this.element.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var f=document.styleSheets,c=0,d=f.length;c<d;c++){var m=f[c];if(m.ownerNode===i)return m}throw Wa(17)}(this.element),this.length=0}return e.prototype.insertRule=function(a,i){try{return this.sheet.insertRule(i,a),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(a){this.sheet.deleteRule(a),this.length--},e.prototype.getRule=function(a){var i=this.sheet.cssRules[a];return i&&i.cssText?i.cssText:""},e}(),Wv=function(){function e(a){this.element=B4(a),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(a,i){if(a<=this.length&&a>=0){var f=document.createTextNode(i);return this.element.insertBefore(f,this.nodes[a]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(a){this.element.removeChild(this.nodes[a]),this.length--},e.prototype.getRule=function(a){return a<this.length?this.nodes[a].textContent:""},e}(),Kv=function(){function e(a){this.rules=[],this.length=0}return e.prototype.insertRule=function(a,i){return a<=this.length&&(this.rules.splice(a,0,i),this.length++,!0)},e.prototype.deleteRule=function(a){this.rules.splice(a,1),this.length--},e.prototype.getRule=function(a){return a<this.length?this.rules[a]:""},e}(),k2=Ws,ex={isServer:!Ws,useCSSOMInjection:!Nv},tl=function(){function e(a,i,f){a===void 0&&(a=ti),i===void 0&&(i={});var c=this;this.options=it(it({},ex),a),this.gs=i,this.names=new Map(f),this.server=!!a.isServer,!this.server&&Ws&&k2&&(k2=!1,C2(this)),B0(this,function(){return function(d){for(var m=d.getTag(),y=m.length,b="",x=function(M){var j=function(I){return el.get(I)}(M);if(j===void 0)return"continue";var k=d.names.get(j),N=m.getGroup(M);if(k===void 0||!k.size||N.length===0)return"continue";var C="".concat(ei,".g").concat(M,'[id="').concat(j,'"]'),E="";k!==void 0&&k.forEach(function(I){I.length>0&&(E+="".concat(I,","))}),b+="".concat(N).concat(C,'{content:"').concat(E,'"}').concat(z0)},v=0;v<y;v++)x(v);return b}(c)})}return e.registerId=function(a){return ms(a)},e.prototype.rehydrate=function(){!this.server&&Ws&&C2(this)},e.prototype.reconstructWithOptions=function(a,i){return i===void 0&&(i=!0),new e(it(it({},this.options),a),this.gs,i&&this.names||void 0)},e.prototype.allocateGSInstance=function(a){return this.gs[a]=(this.gs[a]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(a=function(i){var f=i.useCSSOMInjection,c=i.target;return i.isServer?new Kv(c):f?new Xv(c):new Wv(c)}(this.options),new Zv(a)));var a},e.prototype.hasNameForId=function(a,i){return this.names.has(a)&&this.names.get(a).has(i)},e.prototype.registerName=function(a,i){if(ms(a),this.names.has(a))this.names.get(a).add(i);else{var f=new Set;f.add(i),this.names.set(a,f)}},e.prototype.insertRules=function(a,i,f){this.registerName(a,i),this.getTag().insertRules(ms(a),f)},e.prototype.clearNames=function(a){this.names.has(a)&&this.names.get(a).clear()},e.prototype.clearRules=function(a){this.getTag().clearGroup(ms(a)),this.clearNames(a)},e.prototype.clearTag=function(){this.tag=void 0},e}(),tx=/&/g,nx=/^\s*\/\/.*$/gm;function U4(e,a){return e.map(function(i){return i.type==="rule"&&(i.value="".concat(a," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(a," ")),i.props=i.props.map(function(f){return"".concat(a," ").concat(f)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=U4(i.children,a)),i})}function ax(e){var a,i,f,c=ti,d=c.options,m=d===void 0?ti:d,y=c.plugins,b=y===void 0?pl:y,x=function(j,k,N){return N.startsWith(i)&&N.endsWith(i)&&N.replaceAll(i,"").length>0?".".concat(a):j},v=b.slice();v.push(function(j){j.type===ul&&j.value.includes("&")&&(j.props[0]=j.props[0].replace(tx,i).replace(f,x))}),m.prefix&&v.push(Ev),v.push(Sv);var M=function(j,k,N,C){k===void 0&&(k=""),N===void 0&&(N=""),C===void 0&&(C="&"),a=C,i=k,f=new RegExp("\\".concat(i,"\\b"),"g");var E=j.replace(nx,""),I=jv(N||k?"".concat(N," ").concat(k," { ").concat(E," }"):E);m.namespace&&(I=U4(I,m.namespace));var A=[];return Xs(I,Cv(v.concat(kv(function(G){return A.push(G)})))),A};return M.hash=b.length?b.reduce(function(j,k){return k.name||Wa(15),Hr(j,k.name)},I4).toString():"",M}var rx=new tl,s0=ax(),_4=rt.createContext({shouldForwardProp:void 0,styleSheet:rx,stylis:s0});_4.Consumer;rt.createContext(void 0);function l0(){return g.useContext(_4)}var Y4=function(){function e(a,i){var f=this;this.inject=function(c,d){d===void 0&&(d=s0);var m=f.name+d.hash;c.hasNameForId(f.id,m)||c.insertRules(f.id,m,d(f.rules,m,"@keyframes"))},this.name=a,this.id="sc-keyframes-".concat(a),this.rules=i,B0(this,function(){throw Wa(12,String(f.name))})}return e.prototype.getName=function(a){return a===void 0&&(a=s0),this.name+a.hash},e}(),ix=function(e){return e>="A"&&e<="Z"};function E2(e){for(var a="",i=0;i<e.length;i++){var f=e[i];if(i===1&&f==="-"&&e[0]==="-")return e;ix(f)?a+="-"+f.toLowerCase():a+=f}return a.startsWith("ms-")?"-"+a:a}var Q4=function(e){return e==null||e===!1||e===""},G4=function(e){var a,i,f=[];for(var c in e){var d=e[c];e.hasOwnProperty(c)&&!Q4(d)&&(Array.isArray(d)&&d.isCss||Xa(d)?f.push("".concat(E2(c),":"),d,";"):kf(d)?f.push.apply(f,Xr(Xr(["".concat(c," {")],G4(d),!1),["}"],!1)):f.push("".concat(E2(c),": ").concat((a=c,(i=d)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||a in Tv||a.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return f};function wa(e,a,i,f){if(Q4(e))return[];if(O0(e))return[".".concat(e.styledComponentId)];if(Xa(e)){if(!Xa(d=e)||d.prototype&&d.prototype.isReactComponent||!a)return[e];var c=e(a);return wa(c,a,i,f)}var d;return e instanceof Y4?i?(e.inject(i,f),[e.getName(f)]):[e]:kf(e)?G4(e):Array.isArray(e)?Array.prototype.concat.apply(pl,e.map(function(m){return wa(m,a,i,f)})):[e.toString()]}function $4(e){for(var a=0;a<e.length;a+=1){var i=e[a];if(Xa(i)&&!O0(i))return!1}return!0}var fx=D4(gl),ox=function(){function e(a,i,f){this.rules=a,this.staticRulesId="",this.isStatic=(f===void 0||f.isStatic)&&$4(a),this.componentId=i,this.baseHash=Hr(fx,i),this.baseStyle=f,tl.registerId(i)}return e.prototype.generateAndInjectStyles=function(a,i,f){var c=this.baseStyle?this.baseStyle.generateAndInjectStyles(a,i,f):"";if(this.isStatic&&!f.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))c=Pa(c,this.staticRulesId);else{var d=Ks(wa(this.rules,a,i,f)),m=f0(Hr(this.baseHash,d)>>>0);if(!i.hasNameForId(this.componentId,m)){var y=f(d,".".concat(m),void 0,this.componentId);i.insertRules(this.componentId,m,y)}c=Pa(c,m),this.staticRulesId=m}else{for(var b=Hr(this.baseHash,f.hash),x="",v=0;v<this.rules.length;v++){var M=this.rules[v];if(typeof M=="string")x+=M;else if(M){var j=Ks(wa(M,a,i,f));b=Hr(b,j+v),x+=j}}if(x){var k=f0(b>>>0);i.hasNameForId(this.componentId,k)||i.insertRules(this.componentId,k,f(x,".".concat(k),void 0,this.componentId)),c=Pa(c,k)}}return c},e}(),Ef=rt.createContext(void 0);Ef.Consumer;function sx(e){var a=rt.useContext(Ef),i=g.useMemo(function(){return function(f,c){if(!f)throw Wa(14);if(Xa(f)){var d=f(c);return d}if(Array.isArray(f)||typeof f!="object")throw Wa(8);return c?it(it({},c),f):f}(e.theme,a)},[e.theme,a]);return e.children?rt.createElement(Ef.Provider,{value:i},e.children):null}var od={};function lx(e,a,i){var f=O0(e),c=e,d=!fd(e),m=a.attrs,y=m===void 0?pl:m,b=a.componentId,x=b===void 0?function(_,L){var R=typeof _!="string"?"sc":x2(_);od[R]=(od[R]||0)+1;var O="".concat(R,"-").concat(R0(gl+R+od[R]));return L?"".concat(L,"-").concat(O):O}(a.displayName,a.parentComponentId):b,v=a.displayName,M=v===void 0?function(_){return fd(_)?"styled.".concat(_):"Styled(".concat(Rv(_),")")}(e):v,j=a.displayName&&a.componentId?"".concat(x2(a.displayName),"-").concat(a.componentId):a.componentId||x,k=f&&c.attrs?c.attrs.concat(y).filter(Boolean):y,N=a.shouldForwardProp;if(f&&c.shouldForwardProp){var C=c.shouldForwardProp;if(a.shouldForwardProp){var E=a.shouldForwardProp;N=function(_,L){return C(_,L)&&E(_,L)}}else N=C}var I=new ox(i,j,f?c.componentStyle:void 0);function A(_,L){return function(R,O,q){var se=R.attrs,Ye=R.componentStyle,Je=R.defaultProps,Oe=R.foldedComponentIds,Gt=R.styledComponentId,Sn=R.target,V=rt.useContext(Ef),U=l0(),P=R.shouldForwardProp||U.shouldForwardProp,F=T4(O,V,Je)||ti,W=function(ft,vt,Cn){for(var mn,xt=it(it({},vt),{className:void 0,theme:Cn}),ka=0;ka<ft.length;ka+=1){var kn=Xa(mn=ft[ka])?mn(xt):mn;for(var $t in kn)xt[$t]=$t==="className"?Pa(xt[$t],kn[$t]):$t==="style"?it(it({},xt[$t]),kn[$t]):kn[$t]}return vt.className&&(xt.className=Pa(xt.className,vt.className)),xt}(se,O,F),te=W.as||Sn,fe={};for(var re in W)W[re]===void 0||re[0]==="$"||re==="as"||re==="theme"&&W.theme===F||(re==="forwardedAs"?fe.as=W.forwardedAs:P&&!P(re,te)||(fe[re]=W[re]));var ce=function(ft,vt){var Cn=l0(),mn=ft.generateAndInjectStyles(vt,Cn.styleSheet,Cn.stylis);return mn}(Ye,W),xe=Pa(Oe,Gt);return ce&&(xe+=" "+ce),W.className&&(xe+=" "+W.className),fe[fd(te)&&!N4.has(te)?"class":"className"]=xe,q&&(fe.ref=q),g.createElement(te,fe)}(G,_,L)}A.displayName=M;var G=rt.forwardRef(A);return G.attrs=k,G.componentStyle=I,G.displayName=M,G.shouldForwardProp=N,G.foldedComponentIds=f?Pa(c.foldedComponentIds,c.styledComponentId):"",G.styledComponentId=j,G.target=f?c.target:e,Object.defineProperty(G,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(_){this._foldedDefaultProps=f?function(L){for(var R=[],O=1;O<arguments.length;O++)R[O-1]=arguments[O];for(var q=0,se=R;q<se.length;q++)o0(L,se[q],!0);return L}({},c.defaultProps,_):_}}),B0(G,function(){return".".concat(G.styledComponentId)}),d&&O4(G,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),G}function T2(e,a){for(var i=[e[0]],f=0,c=a.length;f<c;f+=1)i.push(a[f],e[f+1]);return i}var N2=function(e){return Object.assign(e,{isCss:!0})};function Qf(e){for(var a=[],i=1;i<arguments.length;i++)a[i-1]=arguments[i];if(Xa(e)||kf(e))return N2(wa(T2(pl,Xr([e],a,!0))));var f=e;return a.length===0&&f.length===1&&typeof f[0]=="string"?wa(f):N2(wa(T2(f,a)))}function c0(e,a,i){if(i===void 0&&(i=ti),!a)throw Wa(1,a);var f=function(c){for(var d=[],m=1;m<arguments.length;m++)d[m-1]=arguments[m];return e(a,i,Qf.apply(void 0,Xr([c],d,!1)))};return f.attrs=function(c){return c0(e,a,it(it({},i),{attrs:Array.prototype.concat(i.attrs,c).filter(Boolean)}))},f.withConfig=function(c){return c0(e,a,it(it({},i),c))},f}var Z4=function(e){return c0(lx,e)},h=Z4;N4.forEach(function(e){h[e]=Z4(e)});var cx=function(){function e(a,i){this.rules=a,this.componentId=i,this.isStatic=$4(a),tl.registerId(this.componentId+1)}return e.prototype.createStyles=function(a,i,f,c){var d=c(Ks(wa(this.rules,i,f,c)),""),m=this.componentId+a;f.insertRules(m,m,d)},e.prototype.removeStyles=function(a,i){i.clearRules(this.componentId+a)},e.prototype.renderStyles=function(a,i,f,c){a>2&&tl.registerId(this.componentId+a),this.removeStyles(a,f),this.createStyles(a,i,f,c)},e}();function ux(e){for(var a=[],i=1;i<arguments.length;i++)a[i-1]=arguments[i];var f=Qf.apply(void 0,Xr([e],a,!1)),c="sc-global-".concat(R0(JSON.stringify(f))),d=new cx(f,c),m=function(b){var x=l0(),v=rt.useContext(Ef),M=rt.useRef(x.styleSheet.allocateGSInstance(c)).current;return x.styleSheet.server&&y(M,b,x.styleSheet,v,x.stylis),rt.useLayoutEffect(function(){if(!x.styleSheet.server)return y(M,b,x.styleSheet,v,x.stylis),function(){return d.removeStyles(M,x.styleSheet)}},[M,b,x.styleSheet,v,x.stylis]),null};function y(b,x,v,M,j){if(d.isStatic)d.renderStyles(b,Iv,v,j);else{var k=it(it({},x),{theme:T4(x,M,m.defaultProps)});d.renderStyles(b,k,v,j)}}return rt.memo(m)}function Tt(e){for(var a=[],i=1;i<arguments.length;i++)a[i-1]=arguments[i];var f=Ks(Qf.apply(void 0,Xr([e],a,!1))),c=R0(f);return new Y4(c,f)}const yl=({width:e=45,height:a=45})=>s.jsx(s.Fragment,{children:s.jsxs("svg",{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 66.59 63.66",width:e,height:a,children:[s.jsx("defs",{children:s.jsx("style",{children:`
            .logo-dark { fill: var(--blue) }
          `})}),s.jsx("path",{className:"logo-dark",d:"M50,70.82c-.13-.51-.28-1.13-.47-1.74A29,29,0,0,0,45,60.79a70.83,70.83,0,0,0-5.71-6.41,59.7,59.7,0,0,1-9.34-12.16c-.37-.67-.69-1.37-1.06-2.1-.06.12-.12.21-.17.31a39.53,39.53,0,0,0-3.13,10A25.62,25.62,0,0,0,27.66,66a32.27,32.27,0,0,0,7.45,9.79A52.47,52.47,0,0,0,43,81.64l.21.14c-1.85.11-8.38-2.61-11.73-4.86a33.27,33.27,0,0,1-9-9,32.14,32.14,0,0,1-5-11.7,33.2,33.2,0,0,1,21-38c-.55.66-1.1,1.29-1.61,1.95a14.4,14.4,0,0,0-2.76,5.58A11.27,11.27,0,0,0,34.93,33a39,39,0,0,0,6.27,9.26C42.88,44.15,44.63,46,46.26,48a20.22,20.22,0,0,1,3.67,6.42s0,.05.07.09c.29-.67.54-1.34.85-2a30.15,30.15,0,0,1,5-7A79.35,79.35,0,0,0,62,38.22a28.19,28.19,0,0,0,3.49-6.28,10.94,10.94,0,0,0-1-9.84c-.82-1.38-1.86-2.63-2.7-3.81C72.49,21.9,83.66,33.71,83.28,50.08a33.12,33.12,0,0,1-26.5,31.75l1.84-1.2a42.78,42.78,0,0,0,11-10.08,25.92,25.92,0,0,0,4.94-11.64A28.44,28.44,0,0,0,73.38,46c-.62-2-1.4-3.93-2.11-5.89l-.2-.06a1,1,0,0,1,0,.18A40.08,40.08,0,0,1,65.43,49c-2.17,2.71-4.57,5.21-7,7.71a35.26,35.26,0,0,0-7,10.05C50.83,68.11,50.42,69.52,50,70.82Z",transform:"translate(-16.71 -18.17)"})]})}),dx=({width:e=45,height:a=45})=>s.jsx(s.Fragment,{children:s.jsxs("svg",{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 66.59 63.66",width:e,height:a,children:[s.jsx("defs",{children:s.jsx("style",{children:`
            .cls-1 { fill: #ffffff }
          `})}),s.jsx("path",{className:"cls-1",d:"M50,70.82c-.13-.51-.28-1.13-.47-1.74A29,29,0,0,0,45,60.79a70.83,70.83,0,0,0-5.71-6.41,59.7,59.7,0,0,1-9.34-12.16c-.37-.67-.69-1.37-1.06-2.1-.06.12-.12.21-.17.31a39.53,39.53,0,0,0-3.13,10A25.62,25.62,0,0,0,27.66,66a32.27,32.27,0,0,0,7.45,9.79A52.47,52.47,0,0,0,43,81.64l.21.14c-1.85.11-8.38-2.61-11.73-4.86a33.27,33.27,0,0,1-9-9,32.14,32.14,0,0,1-5-11.7,33.2,33.2,0,0,1,21-38c-.55.66-1.1,1.29-1.61,1.95a14.4,14.4,0,0,0-2.76,5.58A11.27,11.27,0,0,0,34.93,33a39,39,0,0,0,6.27,9.26C42.88,44.15,44.63,46,46.26,48a20.22,20.22,0,0,1,3.67,6.42s0,.05.07.09c.29-.67.54-1.34.85-2a30.15,30.15,0,0,1,5-7A79.35,79.35,0,0,0,62,38.22a28.19,28.19,0,0,0,3.49-6.28,10.94,10.94,0,0,0-1-9.84c-.82-1.38-1.86-2.63-2.7-3.81C72.49,21.9,83.66,33.71,83.28,50.08a33.12,33.12,0,0,1-26.5,31.75l1.84-1.2a42.78,42.78,0,0,0,11-10.08,25.92,25.92,0,0,0,4.94-11.64A28.44,28.44,0,0,0,73.38,46c-.62-2-1.4-3.93-2.11-5.89l-.2-.06a1,1,0,0,1,0,.18A40.08,40.08,0,0,1,65.43,49c-2.17,2.71-4.57,5.21-7,7.71a35.26,35.26,0,0,0-7,10.05C50.83,68.11,50.42,69.52,50,70.82Z",transform:"translate(-16.71 -18.17)"})]})});function J4(e,a){return function(){return e.apply(a,arguments)}}const{toString:hx}=Object.prototype,{getPrototypeOf:U0}=Object,{iterator:bl,toStringTag:H4}=Symbol,wl=(e=>a=>{const i=hx.call(a);return e[i]||(e[i]=i.slice(8,-1).toLowerCase())})(Object.create(null)),hn=e=>(e=e.toLowerCase(),a=>wl(a)===e),vl=e=>a=>typeof a===e,{isArray:fi}=Array,Tf=vl("undefined");function mx(e){return e!==null&&!Tf(e)&&e.constructor!==null&&!Tf(e.constructor)&&kt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const P4=hn("ArrayBuffer");function gx(e){let a;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?a=ArrayBuffer.isView(e):a=e&&e.buffer&&P4(e.buffer),a}const px=vl("string"),kt=vl("function"),F4=vl("number"),xl=e=>e!==null&&typeof e=="object",yx=e=>e===!0||e===!1,Rs=e=>{if(wl(e)!=="object")return!1;const a=U0(e);return(a===null||a===Object.prototype||Object.getPrototypeOf(a)===null)&&!(H4 in e)&&!(bl in e)},bx=hn("Date"),wx=hn("File"),vx=hn("Blob"),xx=hn("FileList"),Mx=e=>xl(e)&&kt(e.pipe),jx=e=>{let a;return e&&(typeof FormData=="function"&&e instanceof FormData||kt(e.append)&&((a=wl(e))==="formdata"||a==="object"&&kt(e.toString)&&e.toString()==="[object FormData]"))},Lx=hn("URLSearchParams"),[Sx,Cx,kx,Ex]=["ReadableStream","Request","Response","Headers"].map(hn),Tx=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Gf(e,a,{allOwnKeys:i=!1}={}){if(e===null||typeof e>"u")return;let f,c;if(typeof e!="object"&&(e=[e]),fi(e))for(f=0,c=e.length;f<c;f++)a.call(null,e[f],f,e);else{const d=i?Object.getOwnPropertyNames(e):Object.keys(e),m=d.length;let y;for(f=0;f<m;f++)y=d[f],a.call(null,e[y],y,e)}}function q4(e,a){a=a.toLowerCase();const i=Object.keys(e);let f=i.length,c;for(;f-- >0;)if(c=i[f],a===c.toLowerCase())return c;return null}const Fa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,V4=e=>!Tf(e)&&e!==Fa;function u0(){const{caseless:e}=V4(this)&&this||{},a={},i=(f,c)=>{const d=e&&q4(a,c)||c;Rs(a[d])&&Rs(f)?a[d]=u0(a[d],f):Rs(f)?a[d]=u0({},f):fi(f)?a[d]=f.slice():a[d]=f};for(let f=0,c=arguments.length;f<c;f++)arguments[f]&&Gf(arguments[f],i);return a}const Nx=(e,a,i,{allOwnKeys:f}={})=>(Gf(a,(c,d)=>{i&&kt(c)?e[d]=J4(c,i):e[d]=c},{allOwnKeys:f}),e),Ix=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Dx=(e,a,i,f)=>{e.prototype=Object.create(a.prototype,f),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:a.prototype}),i&&Object.assign(e.prototype,i)},Ax=(e,a,i,f)=>{let c,d,m;const y={};if(a=a||{},e==null)return a;do{for(c=Object.getOwnPropertyNames(e),d=c.length;d-- >0;)m=c[d],(!f||f(m,e,a))&&!y[m]&&(a[m]=e[m],y[m]=!0);e=i!==!1&&U0(e)}while(e&&(!i||i(e,a))&&e!==Object.prototype);return a},zx=(e,a,i)=>{e=String(e),(i===void 0||i>e.length)&&(i=e.length),i-=a.length;const f=e.indexOf(a,i);return f!==-1&&f===i},Rx=e=>{if(!e)return null;if(fi(e))return e;let a=e.length;if(!F4(a))return null;const i=new Array(a);for(;a-- >0;)i[a]=e[a];return i},Ox=(e=>a=>e&&a instanceof e)(typeof Uint8Array<"u"&&U0(Uint8Array)),Bx=(e,a)=>{const f=(e&&e[bl]).call(e);let c;for(;(c=f.next())&&!c.done;){const d=c.value;a.call(e,d[0],d[1])}},Ux=(e,a)=>{let i;const f=[];for(;(i=e.exec(a))!==null;)f.push(i);return f},_x=hn("HTMLFormElement"),Yx=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(i,f,c){return f.toUpperCase()+c}),I2=(({hasOwnProperty:e})=>(a,i)=>e.call(a,i))(Object.prototype),Qx=hn("RegExp"),X4=(e,a)=>{const i=Object.getOwnPropertyDescriptors(e),f={};Gf(i,(c,d)=>{let m;(m=a(c,d,e))!==!1&&(f[d]=m||c)}),Object.defineProperties(e,f)},Gx=e=>{X4(e,(a,i)=>{if(kt(e)&&["arguments","caller","callee"].indexOf(i)!==-1)return!1;const f=e[i];if(kt(f)){if(a.enumerable=!1,"writable"in a){a.writable=!1;return}a.set||(a.set=()=>{throw Error("Can not rewrite read-only method '"+i+"'")})}})},$x=(e,a)=>{const i={},f=c=>{c.forEach(d=>{i[d]=!0})};return fi(e)?f(e):f(String(e).split(a)),i},Zx=()=>{},Jx=(e,a)=>e!=null&&Number.isFinite(e=+e)?e:a;function Hx(e){return!!(e&&kt(e.append)&&e[H4]==="FormData"&&e[bl])}const Px=e=>{const a=new Array(10),i=(f,c)=>{if(xl(f)){if(a.indexOf(f)>=0)return;if(!("toJSON"in f)){a[c]=f;const d=fi(f)?[]:{};return Gf(f,(m,y)=>{const b=i(m,c+1);!Tf(b)&&(d[y]=b)}),a[c]=void 0,d}}return f};return i(e,0)},Fx=hn("AsyncFunction"),qx=e=>e&&(xl(e)||kt(e))&&kt(e.then)&&kt(e.catch),W4=((e,a)=>e?setImmediate:a?((i,f)=>(Fa.addEventListener("message",({source:c,data:d})=>{c===Fa&&d===i&&f.length&&f.shift()()},!1),c=>{f.push(c),Fa.postMessage(i,"*")}))(`axios@${Math.random()}`,[]):i=>setTimeout(i))(typeof setImmediate=="function",kt(Fa.postMessage)),Vx=typeof queueMicrotask<"u"?queueMicrotask.bind(Fa):typeof process<"u"&&process.nextTick||W4,Xx=e=>e!=null&&kt(e[bl]),$={isArray:fi,isArrayBuffer:P4,isBuffer:mx,isFormData:jx,isArrayBufferView:gx,isString:px,isNumber:F4,isBoolean:yx,isObject:xl,isPlainObject:Rs,isReadableStream:Sx,isRequest:Cx,isResponse:kx,isHeaders:Ex,isUndefined:Tf,isDate:bx,isFile:wx,isBlob:vx,isRegExp:Qx,isFunction:kt,isStream:Mx,isURLSearchParams:Lx,isTypedArray:Ox,isFileList:xx,forEach:Gf,merge:u0,extend:Nx,trim:Tx,stripBOM:Ix,inherits:Dx,toFlatObject:Ax,kindOf:wl,kindOfTest:hn,endsWith:zx,toArray:Rx,forEachEntry:Bx,matchAll:Ux,isHTMLForm:_x,hasOwnProperty:I2,hasOwnProp:I2,reduceDescriptors:X4,freezeMethods:Gx,toObjectSet:$x,toCamelCase:Yx,noop:Zx,toFiniteNumber:Jx,findKey:q4,global:Fa,isContextDefined:V4,isSpecCompliantForm:Hx,toJSONObject:Px,isAsyncFn:Fx,isThenable:qx,setImmediate:W4,asap:Vx,isIterable:Xx};function ie(e,a,i,f,c){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",a&&(this.code=a),i&&(this.config=i),f&&(this.request=f),c&&(this.response=c,this.status=c.status?c.status:null)}$.inherits(ie,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:$.toJSONObject(this.config),code:this.code,status:this.status}}});const K4=ie.prototype,ey={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ey[e]={value:e}});Object.defineProperties(ie,ey);Object.defineProperty(K4,"isAxiosError",{value:!0});ie.from=(e,a,i,f,c,d)=>{const m=Object.create(K4);return $.toFlatObject(e,m,function(b){return b!==Error.prototype},y=>y!=="isAxiosError"),ie.call(m,e.message,a,i,f,c),m.cause=e,m.name=e.name,d&&Object.assign(m,d),m};const Wx=null;function d0(e){return $.isPlainObject(e)||$.isArray(e)}function ty(e){return $.endsWith(e,"[]")?e.slice(0,-2):e}function D2(e,a,i){return e?e.concat(a).map(function(c,d){return c=ty(c),!i&&d?"["+c+"]":c}).join(i?".":""):a}function Kx(e){return $.isArray(e)&&!e.some(d0)}const eM=$.toFlatObject($,{},null,function(a){return/^is[A-Z]/.test(a)});function Ml(e,a,i){if(!$.isObject(e))throw new TypeError("target must be an object");a=a||new FormData,i=$.toFlatObject(i,{metaTokens:!0,dots:!1,indexes:!1},!1,function(C,E){return!$.isUndefined(E[C])});const f=i.metaTokens,c=i.visitor||v,d=i.dots,m=i.indexes,b=(i.Blob||typeof Blob<"u"&&Blob)&&$.isSpecCompliantForm(a);if(!$.isFunction(c))throw new TypeError("visitor must be a function");function x(N){if(N===null)return"";if($.isDate(N))return N.toISOString();if(!b&&$.isBlob(N))throw new ie("Blob is not supported. Use a Buffer instead.");return $.isArrayBuffer(N)||$.isTypedArray(N)?b&&typeof Blob=="function"?new Blob([N]):Buffer.from(N):N}function v(N,C,E){let I=N;if(N&&!E&&typeof N=="object"){if($.endsWith(C,"{}"))C=f?C:C.slice(0,-2),N=JSON.stringify(N);else if($.isArray(N)&&Kx(N)||($.isFileList(N)||$.endsWith(C,"[]"))&&(I=$.toArray(N)))return C=ty(C),I.forEach(function(G,_){!($.isUndefined(G)||G===null)&&a.append(m===!0?D2([C],_,d):m===null?C:C+"[]",x(G))}),!1}return d0(N)?!0:(a.append(D2(E,C,d),x(N)),!1)}const M=[],j=Object.assign(eM,{defaultVisitor:v,convertValue:x,isVisitable:d0});function k(N,C){if(!$.isUndefined(N)){if(M.indexOf(N)!==-1)throw Error("Circular reference detected in "+C.join("."));M.push(N),$.forEach(N,function(I,A){(!($.isUndefined(I)||I===null)&&c.call(a,I,$.isString(A)?A.trim():A,C,j))===!0&&k(I,C?C.concat(A):[A])}),M.pop()}}if(!$.isObject(e))throw new TypeError("data must be an object");return k(e),a}function A2(e){const a={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(f){return a[f]})}function _0(e,a){this._pairs=[],e&&Ml(e,this,a)}const ny=_0.prototype;ny.append=function(a,i){this._pairs.push([a,i])};ny.toString=function(a){const i=a?function(f){return a.call(this,f,A2)}:A2;return this._pairs.map(function(c){return i(c[0])+"="+i(c[1])},"").join("&")};function tM(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ay(e,a,i){if(!a)return e;const f=i&&i.encode||tM;$.isFunction(i)&&(i={serialize:i});const c=i&&i.serialize;let d;if(c?d=c(a,i):d=$.isURLSearchParams(a)?a.toString():new _0(a,i).toString(f),d){const m=e.indexOf("#");m!==-1&&(e=e.slice(0,m)),e+=(e.indexOf("?")===-1?"?":"&")+d}return e}class z2{constructor(){this.handlers=[]}use(a,i,f){return this.handlers.push({fulfilled:a,rejected:i,synchronous:f?f.synchronous:!1,runWhen:f?f.runWhen:null}),this.handlers.length-1}eject(a){this.handlers[a]&&(this.handlers[a]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(a){$.forEach(this.handlers,function(f){f!==null&&a(f)})}}const ry={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},nM=typeof URLSearchParams<"u"?URLSearchParams:_0,aM=typeof FormData<"u"?FormData:null,rM=typeof Blob<"u"?Blob:null,iM={isBrowser:!0,classes:{URLSearchParams:nM,FormData:aM,Blob:rM},protocols:["http","https","file","blob","url","data"]},Y0=typeof window<"u"&&typeof document<"u",h0=typeof navigator=="object"&&navigator||void 0,fM=Y0&&(!h0||["ReactNative","NativeScript","NS"].indexOf(h0.product)<0),oM=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",sM=Y0&&window.location.href||"http://localhost",lM=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Y0,hasStandardBrowserEnv:fM,hasStandardBrowserWebWorkerEnv:oM,navigator:h0,origin:sM},Symbol.toStringTag,{value:"Module"})),ht={...lM,...iM};function cM(e,a){return Ml(e,new ht.classes.URLSearchParams,Object.assign({visitor:function(i,f,c,d){return ht.isNode&&$.isBuffer(i)?(this.append(f,i.toString("base64")),!1):d.defaultVisitor.apply(this,arguments)}},a))}function uM(e){return $.matchAll(/\w+|\[(\w*)]/g,e).map(a=>a[0]==="[]"?"":a[1]||a[0])}function dM(e){const a={},i=Object.keys(e);let f;const c=i.length;let d;for(f=0;f<c;f++)d=i[f],a[d]=e[d];return a}function iy(e){function a(i,f,c,d){let m=i[d++];if(m==="__proto__")return!0;const y=Number.isFinite(+m),b=d>=i.length;return m=!m&&$.isArray(c)?c.length:m,b?($.hasOwnProp(c,m)?c[m]=[c[m],f]:c[m]=f,!y):((!c[m]||!$.isObject(c[m]))&&(c[m]=[]),a(i,f,c[m],d)&&$.isArray(c[m])&&(c[m]=dM(c[m])),!y)}if($.isFormData(e)&&$.isFunction(e.entries)){const i={};return $.forEachEntry(e,(f,c)=>{a(uM(f),c,i,0)}),i}return null}function hM(e,a,i){if($.isString(e))try{return(a||JSON.parse)(e),$.trim(e)}catch(f){if(f.name!=="SyntaxError")throw f}return(i||JSON.stringify)(e)}const $f={transitional:ry,adapter:["xhr","http","fetch"],transformRequest:[function(a,i){const f=i.getContentType()||"",c=f.indexOf("application/json")>-1,d=$.isObject(a);if(d&&$.isHTMLForm(a)&&(a=new FormData(a)),$.isFormData(a))return c?JSON.stringify(iy(a)):a;if($.isArrayBuffer(a)||$.isBuffer(a)||$.isStream(a)||$.isFile(a)||$.isBlob(a)||$.isReadableStream(a))return a;if($.isArrayBufferView(a))return a.buffer;if($.isURLSearchParams(a))return i.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),a.toString();let y;if(d){if(f.indexOf("application/x-www-form-urlencoded")>-1)return cM(a,this.formSerializer).toString();if((y=$.isFileList(a))||f.indexOf("multipart/form-data")>-1){const b=this.env&&this.env.FormData;return Ml(y?{"files[]":a}:a,b&&new b,this.formSerializer)}}return d||c?(i.setContentType("application/json",!1),hM(a)):a}],transformResponse:[function(a){const i=this.transitional||$f.transitional,f=i&&i.forcedJSONParsing,c=this.responseType==="json";if($.isResponse(a)||$.isReadableStream(a))return a;if(a&&$.isString(a)&&(f&&!this.responseType||c)){const m=!(i&&i.silentJSONParsing)&&c;try{return JSON.parse(a)}catch(y){if(m)throw y.name==="SyntaxError"?ie.from(y,ie.ERR_BAD_RESPONSE,this,null,this.response):y}}return a}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ht.classes.FormData,Blob:ht.classes.Blob},validateStatus:function(a){return a>=200&&a<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};$.forEach(["delete","get","head","post","put","patch"],e=>{$f.headers[e]={}});const mM=$.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),gM=e=>{const a={};let i,f,c;return e&&e.split(`
`).forEach(function(m){c=m.indexOf(":"),i=m.substring(0,c).trim().toLowerCase(),f=m.substring(c+1).trim(),!(!i||a[i]&&mM[i])&&(i==="set-cookie"?a[i]?a[i].push(f):a[i]=[f]:a[i]=a[i]?a[i]+", "+f:f)}),a},R2=Symbol("internals");function df(e){return e&&String(e).trim().toLowerCase()}function Os(e){return e===!1||e==null?e:$.isArray(e)?e.map(Os):String(e)}function pM(e){const a=Object.create(null),i=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let f;for(;f=i.exec(e);)a[f[1]]=f[2];return a}const yM=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function sd(e,a,i,f,c){if($.isFunction(f))return f.call(this,a,i);if(c&&(a=i),!!$.isString(a)){if($.isString(f))return a.indexOf(f)!==-1;if($.isRegExp(f))return f.test(a)}}function bM(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(a,i,f)=>i.toUpperCase()+f)}function wM(e,a){const i=$.toCamelCase(" "+a);["get","set","has"].forEach(f=>{Object.defineProperty(e,f+i,{value:function(c,d,m){return this[f].call(this,a,c,d,m)},configurable:!0})})}let Et=class{constructor(a){a&&this.set(a)}set(a,i,f){const c=this;function d(y,b,x){const v=df(b);if(!v)throw new Error("header name must be a non-empty string");const M=$.findKey(c,v);(!M||c[M]===void 0||x===!0||x===void 0&&c[M]!==!1)&&(c[M||b]=Os(y))}const m=(y,b)=>$.forEach(y,(x,v)=>d(x,v,b));if($.isPlainObject(a)||a instanceof this.constructor)m(a,i);else if($.isString(a)&&(a=a.trim())&&!yM(a))m(gM(a),i);else if($.isObject(a)&&$.isIterable(a)){let y={},b,x;for(const v of a){if(!$.isArray(v))throw TypeError("Object iterator must return a key-value pair");y[x=v[0]]=(b=y[x])?$.isArray(b)?[...b,v[1]]:[b,v[1]]:v[1]}m(y,i)}else a!=null&&d(i,a,f);return this}get(a,i){if(a=df(a),a){const f=$.findKey(this,a);if(f){const c=this[f];if(!i)return c;if(i===!0)return pM(c);if($.isFunction(i))return i.call(this,c,f);if($.isRegExp(i))return i.exec(c);throw new TypeError("parser must be boolean|regexp|function")}}}has(a,i){if(a=df(a),a){const f=$.findKey(this,a);return!!(f&&this[f]!==void 0&&(!i||sd(this,this[f],f,i)))}return!1}delete(a,i){const f=this;let c=!1;function d(m){if(m=df(m),m){const y=$.findKey(f,m);y&&(!i||sd(f,f[y],y,i))&&(delete f[y],c=!0)}}return $.isArray(a)?a.forEach(d):d(a),c}clear(a){const i=Object.keys(this);let f=i.length,c=!1;for(;f--;){const d=i[f];(!a||sd(this,this[d],d,a,!0))&&(delete this[d],c=!0)}return c}normalize(a){const i=this,f={};return $.forEach(this,(c,d)=>{const m=$.findKey(f,d);if(m){i[m]=Os(c),delete i[d];return}const y=a?bM(d):String(d).trim();y!==d&&delete i[d],i[y]=Os(c),f[y]=!0}),this}concat(...a){return this.constructor.concat(this,...a)}toJSON(a){const i=Object.create(null);return $.forEach(this,(f,c)=>{f!=null&&f!==!1&&(i[c]=a&&$.isArray(f)?f.join(", "):f)}),i}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([a,i])=>a+": "+i).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(a){return a instanceof this?a:new this(a)}static concat(a,...i){const f=new this(a);return i.forEach(c=>f.set(c)),f}static accessor(a){const f=(this[R2]=this[R2]={accessors:{}}).accessors,c=this.prototype;function d(m){const y=df(m);f[y]||(wM(c,m),f[y]=!0)}return $.isArray(a)?a.forEach(d):d(a),this}};Et.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);$.reduceDescriptors(Et.prototype,({value:e},a)=>{let i=a[0].toUpperCase()+a.slice(1);return{get:()=>e,set(f){this[i]=f}}});$.freezeMethods(Et);function ld(e,a){const i=this||$f,f=a||i,c=Et.from(f.headers);let d=f.data;return $.forEach(e,function(y){d=y.call(i,d,c.normalize(),a?a.status:void 0)}),c.normalize(),d}function fy(e){return!!(e&&e.__CANCEL__)}function oi(e,a,i){ie.call(this,e??"canceled",ie.ERR_CANCELED,a,i),this.name="CanceledError"}$.inherits(oi,ie,{__CANCEL__:!0});function oy(e,a,i){const f=i.config.validateStatus;!i.status||!f||f(i.status)?e(i):a(new ie("Request failed with status code "+i.status,[ie.ERR_BAD_REQUEST,ie.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i))}function vM(e){const a=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return a&&a[1]||""}function xM(e,a){e=e||10;const i=new Array(e),f=new Array(e);let c=0,d=0,m;return a=a!==void 0?a:1e3,function(b){const x=Date.now(),v=f[d];m||(m=x),i[c]=b,f[c]=x;let M=d,j=0;for(;M!==c;)j+=i[M++],M=M%e;if(c=(c+1)%e,c===d&&(d=(d+1)%e),x-m<a)return;const k=v&&x-v;return k?Math.round(j*1e3/k):void 0}}function MM(e,a){let i=0,f=1e3/a,c,d;const m=(x,v=Date.now())=>{i=v,c=null,d&&(clearTimeout(d),d=null),e.apply(null,x)};return[(...x)=>{const v=Date.now(),M=v-i;M>=f?m(x,v):(c=x,d||(d=setTimeout(()=>{d=null,m(c)},f-M)))},()=>c&&m(c)]}const nl=(e,a,i=3)=>{let f=0;const c=xM(50,250);return MM(d=>{const m=d.loaded,y=d.lengthComputable?d.total:void 0,b=m-f,x=c(b),v=m<=y;f=m;const M={loaded:m,total:y,progress:y?m/y:void 0,bytes:b,rate:x||void 0,estimated:x&&y&&v?(y-m)/x:void 0,event:d,lengthComputable:y!=null,[a?"download":"upload"]:!0};e(M)},i)},O2=(e,a)=>{const i=e!=null;return[f=>a[0]({lengthComputable:i,total:e,loaded:f}),a[1]]},B2=e=>(...a)=>$.asap(()=>e(...a)),jM=ht.hasStandardBrowserEnv?((e,a)=>i=>(i=new URL(i,ht.origin),e.protocol===i.protocol&&e.host===i.host&&(a||e.port===i.port)))(new URL(ht.origin),ht.navigator&&/(msie|trident)/i.test(ht.navigator.userAgent)):()=>!0,LM=ht.hasStandardBrowserEnv?{write(e,a,i,f,c,d){const m=[e+"="+encodeURIComponent(a)];$.isNumber(i)&&m.push("expires="+new Date(i).toGMTString()),$.isString(f)&&m.push("path="+f),$.isString(c)&&m.push("domain="+c),d===!0&&m.push("secure"),document.cookie=m.join("; ")},read(e){const a=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return a?decodeURIComponent(a[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function SM(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function CM(e,a){return a?e.replace(/\/?\/$/,"")+"/"+a.replace(/^\/+/,""):e}function sy(e,a,i){let f=!SM(a);return e&&(f||i==!1)?CM(e,a):a}const U2=e=>e instanceof Et?{...e}:e;function Ka(e,a){a=a||{};const i={};function f(x,v,M,j){return $.isPlainObject(x)&&$.isPlainObject(v)?$.merge.call({caseless:j},x,v):$.isPlainObject(v)?$.merge({},v):$.isArray(v)?v.slice():v}function c(x,v,M,j){if($.isUndefined(v)){if(!$.isUndefined(x))return f(void 0,x,M,j)}else return f(x,v,M,j)}function d(x,v){if(!$.isUndefined(v))return f(void 0,v)}function m(x,v){if($.isUndefined(v)){if(!$.isUndefined(x))return f(void 0,x)}else return f(void 0,v)}function y(x,v,M){if(M in a)return f(x,v);if(M in e)return f(void 0,x)}const b={url:d,method:d,data:d,baseURL:m,transformRequest:m,transformResponse:m,paramsSerializer:m,timeout:m,timeoutMessage:m,withCredentials:m,withXSRFToken:m,adapter:m,responseType:m,xsrfCookieName:m,xsrfHeaderName:m,onUploadProgress:m,onDownloadProgress:m,decompress:m,maxContentLength:m,maxBodyLength:m,beforeRedirect:m,transport:m,httpAgent:m,httpsAgent:m,cancelToken:m,socketPath:m,responseEncoding:m,validateStatus:y,headers:(x,v,M)=>c(U2(x),U2(v),M,!0)};return $.forEach(Object.keys(Object.assign({},e,a)),function(v){const M=b[v]||c,j=M(e[v],a[v],v);$.isUndefined(j)&&M!==y||(i[v]=j)}),i}const ly=e=>{const a=Ka({},e);let{data:i,withXSRFToken:f,xsrfHeaderName:c,xsrfCookieName:d,headers:m,auth:y}=a;a.headers=m=Et.from(m),a.url=ay(sy(a.baseURL,a.url,a.allowAbsoluteUrls),e.params,e.paramsSerializer),y&&m.set("Authorization","Basic "+btoa((y.username||"")+":"+(y.password?unescape(encodeURIComponent(y.password)):"")));let b;if($.isFormData(i)){if(ht.hasStandardBrowserEnv||ht.hasStandardBrowserWebWorkerEnv)m.setContentType(void 0);else if((b=m.getContentType())!==!1){const[x,...v]=b?b.split(";").map(M=>M.trim()).filter(Boolean):[];m.setContentType([x||"multipart/form-data",...v].join("; "))}}if(ht.hasStandardBrowserEnv&&(f&&$.isFunction(f)&&(f=f(a)),f||f!==!1&&jM(a.url))){const x=c&&d&&LM.read(d);x&&m.set(c,x)}return a},kM=typeof XMLHttpRequest<"u",EM=kM&&function(e){return new Promise(function(i,f){const c=ly(e);let d=c.data;const m=Et.from(c.headers).normalize();let{responseType:y,onUploadProgress:b,onDownloadProgress:x}=c,v,M,j,k,N;function C(){k&&k(),N&&N(),c.cancelToken&&c.cancelToken.unsubscribe(v),c.signal&&c.signal.removeEventListener("abort",v)}let E=new XMLHttpRequest;E.open(c.method.toUpperCase(),c.url,!0),E.timeout=c.timeout;function I(){if(!E)return;const G=Et.from("getAllResponseHeaders"in E&&E.getAllResponseHeaders()),L={data:!y||y==="text"||y==="json"?E.responseText:E.response,status:E.status,statusText:E.statusText,headers:G,config:e,request:E};oy(function(O){i(O),C()},function(O){f(O),C()},L),E=null}"onloadend"in E?E.onloadend=I:E.onreadystatechange=function(){!E||E.readyState!==4||E.status===0&&!(E.responseURL&&E.responseURL.indexOf("file:")===0)||setTimeout(I)},E.onabort=function(){E&&(f(new ie("Request aborted",ie.ECONNABORTED,e,E)),E=null)},E.onerror=function(){f(new ie("Network Error",ie.ERR_NETWORK,e,E)),E=null},E.ontimeout=function(){let _=c.timeout?"timeout of "+c.timeout+"ms exceeded":"timeout exceeded";const L=c.transitional||ry;c.timeoutErrorMessage&&(_=c.timeoutErrorMessage),f(new ie(_,L.clarifyTimeoutError?ie.ETIMEDOUT:ie.ECONNABORTED,e,E)),E=null},d===void 0&&m.setContentType(null),"setRequestHeader"in E&&$.forEach(m.toJSON(),function(_,L){E.setRequestHeader(L,_)}),$.isUndefined(c.withCredentials)||(E.withCredentials=!!c.withCredentials),y&&y!=="json"&&(E.responseType=c.responseType),x&&([j,N]=nl(x,!0),E.addEventListener("progress",j)),b&&E.upload&&([M,k]=nl(b),E.upload.addEventListener("progress",M),E.upload.addEventListener("loadend",k)),(c.cancelToken||c.signal)&&(v=G=>{E&&(f(!G||G.type?new oi(null,e,E):G),E.abort(),E=null)},c.cancelToken&&c.cancelToken.subscribe(v),c.signal&&(c.signal.aborted?v():c.signal.addEventListener("abort",v)));const A=vM(c.url);if(A&&ht.protocols.indexOf(A)===-1){f(new ie("Unsupported protocol "+A+":",ie.ERR_BAD_REQUEST,e));return}E.send(d||null)})},TM=(e,a)=>{const{length:i}=e=e?e.filter(Boolean):[];if(a||i){let f=new AbortController,c;const d=function(x){if(!c){c=!0,y();const v=x instanceof Error?x:this.reason;f.abort(v instanceof ie?v:new oi(v instanceof Error?v.message:v))}};let m=a&&setTimeout(()=>{m=null,d(new ie(`timeout ${a} of ms exceeded`,ie.ETIMEDOUT))},a);const y=()=>{e&&(m&&clearTimeout(m),m=null,e.forEach(x=>{x.unsubscribe?x.unsubscribe(d):x.removeEventListener("abort",d)}),e=null)};e.forEach(x=>x.addEventListener("abort",d));const{signal:b}=f;return b.unsubscribe=()=>$.asap(y),b}},NM=function*(e,a){let i=e.byteLength;if(i<a){yield e;return}let f=0,c;for(;f<i;)c=f+a,yield e.slice(f,c),f=c},IM=async function*(e,a){for await(const i of DM(e))yield*NM(i,a)},DM=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const a=e.getReader();try{for(;;){const{done:i,value:f}=await a.read();if(i)break;yield f}}finally{await a.cancel()}},_2=(e,a,i,f)=>{const c=IM(e,a);let d=0,m,y=b=>{m||(m=!0,f&&f(b))};return new ReadableStream({async pull(b){try{const{done:x,value:v}=await c.next();if(x){y(),b.close();return}let M=v.byteLength;if(i){let j=d+=M;i(j)}b.enqueue(new Uint8Array(v))}catch(x){throw y(x),x}},cancel(b){return y(b),c.return()}},{highWaterMark:2})},jl=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",cy=jl&&typeof ReadableStream=="function",AM=jl&&(typeof TextEncoder=="function"?(e=>a=>e.encode(a))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),uy=(e,...a)=>{try{return!!e(...a)}catch{return!1}},zM=cy&&uy(()=>{let e=!1;const a=new Request(ht.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!a}),Y2=64*1024,m0=cy&&uy(()=>$.isReadableStream(new Response("").body)),al={stream:m0&&(e=>e.body)};jl&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(a=>{!al[a]&&(al[a]=$.isFunction(e[a])?i=>i[a]():(i,f)=>{throw new ie(`Response type '${a}' is not supported`,ie.ERR_NOT_SUPPORT,f)})})})(new Response);const RM=async e=>{if(e==null)return 0;if($.isBlob(e))return e.size;if($.isSpecCompliantForm(e))return(await new Request(ht.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if($.isArrayBufferView(e)||$.isArrayBuffer(e))return e.byteLength;if($.isURLSearchParams(e)&&(e=e+""),$.isString(e))return(await AM(e)).byteLength},OM=async(e,a)=>{const i=$.toFiniteNumber(e.getContentLength());return i??RM(a)},BM=jl&&(async e=>{let{url:a,method:i,data:f,signal:c,cancelToken:d,timeout:m,onDownloadProgress:y,onUploadProgress:b,responseType:x,headers:v,withCredentials:M="same-origin",fetchOptions:j}=ly(e);x=x?(x+"").toLowerCase():"text";let k=TM([c,d&&d.toAbortSignal()],m),N;const C=k&&k.unsubscribe&&(()=>{k.unsubscribe()});let E;try{if(b&&zM&&i!=="get"&&i!=="head"&&(E=await OM(v,f))!==0){let L=new Request(a,{method:"POST",body:f,duplex:"half"}),R;if($.isFormData(f)&&(R=L.headers.get("content-type"))&&v.setContentType(R),L.body){const[O,q]=O2(E,nl(B2(b)));f=_2(L.body,Y2,O,q)}}$.isString(M)||(M=M?"include":"omit");const I="credentials"in Request.prototype;N=new Request(a,{...j,signal:k,method:i.toUpperCase(),headers:v.normalize().toJSON(),body:f,duplex:"half",credentials:I?M:void 0});let A=await fetch(N);const G=m0&&(x==="stream"||x==="response");if(m0&&(y||G&&C)){const L={};["status","statusText","headers"].forEach(se=>{L[se]=A[se]});const R=$.toFiniteNumber(A.headers.get("content-length")),[O,q]=y&&O2(R,nl(B2(y),!0))||[];A=new Response(_2(A.body,Y2,O,()=>{q&&q(),C&&C()}),L)}x=x||"text";let _=await al[$.findKey(al,x)||"text"](A,e);return!G&&C&&C(),await new Promise((L,R)=>{oy(L,R,{data:_,headers:Et.from(A.headers),status:A.status,statusText:A.statusText,config:e,request:N})})}catch(I){throw C&&C(),I&&I.name==="TypeError"&&/Load failed|fetch/i.test(I.message)?Object.assign(new ie("Network Error",ie.ERR_NETWORK,e,N),{cause:I.cause||I}):ie.from(I,I&&I.code,e,N)}}),g0={http:Wx,xhr:EM,fetch:BM};$.forEach(g0,(e,a)=>{if(e){try{Object.defineProperty(e,"name",{value:a})}catch{}Object.defineProperty(e,"adapterName",{value:a})}});const Q2=e=>`- ${e}`,UM=e=>$.isFunction(e)||e===null||e===!1,dy={getAdapter:e=>{e=$.isArray(e)?e:[e];const{length:a}=e;let i,f;const c={};for(let d=0;d<a;d++){i=e[d];let m;if(f=i,!UM(i)&&(f=g0[(m=String(i)).toLowerCase()],f===void 0))throw new ie(`Unknown adapter '${m}'`);if(f)break;c[m||"#"+d]=f}if(!f){const d=Object.entries(c).map(([y,b])=>`adapter ${y} `+(b===!1?"is not supported by the environment":"is not available in the build"));let m=a?d.length>1?`since :
`+d.map(Q2).join(`
`):" "+Q2(d[0]):"as no adapter specified";throw new ie("There is no suitable adapter to dispatch the request "+m,"ERR_NOT_SUPPORT")}return f},adapters:g0};function cd(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new oi(null,e)}function G2(e){return cd(e),e.headers=Et.from(e.headers),e.data=ld.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),dy.getAdapter(e.adapter||$f.adapter)(e).then(function(f){return cd(e),f.data=ld.call(e,e.transformResponse,f),f.headers=Et.from(f.headers),f},function(f){return fy(f)||(cd(e),f&&f.response&&(f.response.data=ld.call(e,e.transformResponse,f.response),f.response.headers=Et.from(f.response.headers))),Promise.reject(f)})}const hy="1.9.0",Ll={};["object","boolean","number","function","string","symbol"].forEach((e,a)=>{Ll[e]=function(f){return typeof f===e||"a"+(a<1?"n ":" ")+e}});const $2={};Ll.transitional=function(a,i,f){function c(d,m){return"[Axios v"+hy+"] Transitional option '"+d+"'"+m+(f?". "+f:"")}return(d,m,y)=>{if(a===!1)throw new ie(c(m," has been removed"+(i?" in "+i:"")),ie.ERR_DEPRECATED);return i&&!$2[m]&&($2[m]=!0,console.warn(c(m," has been deprecated since v"+i+" and will be removed in the near future"))),a?a(d,m,y):!0}};Ll.spelling=function(a){return(i,f)=>(console.warn(`${f} is likely a misspelling of ${a}`),!0)};function _M(e,a,i){if(typeof e!="object")throw new ie("options must be an object",ie.ERR_BAD_OPTION_VALUE);const f=Object.keys(e);let c=f.length;for(;c-- >0;){const d=f[c],m=a[d];if(m){const y=e[d],b=y===void 0||m(y,d,e);if(b!==!0)throw new ie("option "+d+" must be "+b,ie.ERR_BAD_OPTION_VALUE);continue}if(i!==!0)throw new ie("Unknown option "+d,ie.ERR_BAD_OPTION)}}const Bs={assertOptions:_M,validators:Ll},xn=Bs.validators;let Va=class{constructor(a){this.defaults=a||{},this.interceptors={request:new z2,response:new z2}}async request(a,i){try{return await this._request(a,i)}catch(f){if(f instanceof Error){let c={};Error.captureStackTrace?Error.captureStackTrace(c):c=new Error;const d=c.stack?c.stack.replace(/^.+\n/,""):"";try{f.stack?d&&!String(f.stack).endsWith(d.replace(/^.+\n.+\n/,""))&&(f.stack+=`
`+d):f.stack=d}catch{}}throw f}}_request(a,i){typeof a=="string"?(i=i||{},i.url=a):i=a||{},i=Ka(this.defaults,i);const{transitional:f,paramsSerializer:c,headers:d}=i;f!==void 0&&Bs.assertOptions(f,{silentJSONParsing:xn.transitional(xn.boolean),forcedJSONParsing:xn.transitional(xn.boolean),clarifyTimeoutError:xn.transitional(xn.boolean)},!1),c!=null&&($.isFunction(c)?i.paramsSerializer={serialize:c}:Bs.assertOptions(c,{encode:xn.function,serialize:xn.function},!0)),i.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?i.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:i.allowAbsoluteUrls=!0),Bs.assertOptions(i,{baseUrl:xn.spelling("baseURL"),withXsrfToken:xn.spelling("withXSRFToken")},!0),i.method=(i.method||this.defaults.method||"get").toLowerCase();let m=d&&$.merge(d.common,d[i.method]);d&&$.forEach(["delete","get","head","post","put","patch","common"],N=>{delete d[N]}),i.headers=Et.concat(m,d);const y=[];let b=!0;this.interceptors.request.forEach(function(C){typeof C.runWhen=="function"&&C.runWhen(i)===!1||(b=b&&C.synchronous,y.unshift(C.fulfilled,C.rejected))});const x=[];this.interceptors.response.forEach(function(C){x.push(C.fulfilled,C.rejected)});let v,M=0,j;if(!b){const N=[G2.bind(this),void 0];for(N.unshift.apply(N,y),N.push.apply(N,x),j=N.length,v=Promise.resolve(i);M<j;)v=v.then(N[M++],N[M++]);return v}j=y.length;let k=i;for(M=0;M<j;){const N=y[M++],C=y[M++];try{k=N(k)}catch(E){C.call(this,E);break}}try{v=G2.call(this,k)}catch(N){return Promise.reject(N)}for(M=0,j=x.length;M<j;)v=v.then(x[M++],x[M++]);return v}getUri(a){a=Ka(this.defaults,a);const i=sy(a.baseURL,a.url,a.allowAbsoluteUrls);return ay(i,a.params,a.paramsSerializer)}};$.forEach(["delete","get","head","options"],function(a){Va.prototype[a]=function(i,f){return this.request(Ka(f||{},{method:a,url:i,data:(f||{}).data}))}});$.forEach(["post","put","patch"],function(a){function i(f){return function(d,m,y){return this.request(Ka(y||{},{method:a,headers:f?{"Content-Type":"multipart/form-data"}:{},url:d,data:m}))}}Va.prototype[a]=i(),Va.prototype[a+"Form"]=i(!0)});let YM=class my{constructor(a){if(typeof a!="function")throw new TypeError("executor must be a function.");let i;this.promise=new Promise(function(d){i=d});const f=this;this.promise.then(c=>{if(!f._listeners)return;let d=f._listeners.length;for(;d-- >0;)f._listeners[d](c);f._listeners=null}),this.promise.then=c=>{let d;const m=new Promise(y=>{f.subscribe(y),d=y}).then(c);return m.cancel=function(){f.unsubscribe(d)},m},a(function(d,m,y){f.reason||(f.reason=new oi(d,m,y),i(f.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(a){if(this.reason){a(this.reason);return}this._listeners?this._listeners.push(a):this._listeners=[a]}unsubscribe(a){if(!this._listeners)return;const i=this._listeners.indexOf(a);i!==-1&&this._listeners.splice(i,1)}toAbortSignal(){const a=new AbortController,i=f=>{a.abort(f)};return this.subscribe(i),a.signal.unsubscribe=()=>this.unsubscribe(i),a.signal}static source(){let a;return{token:new my(function(c){a=c}),cancel:a}}};function QM(e){return function(i){return e.apply(null,i)}}function GM(e){return $.isObject(e)&&e.isAxiosError===!0}const p0={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(p0).forEach(([e,a])=>{p0[a]=e});function gy(e){const a=new Va(e),i=J4(Va.prototype.request,a);return $.extend(i,Va.prototype,a,{allOwnKeys:!0}),$.extend(i,a,null,{allOwnKeys:!0}),i.create=function(c){return gy(Ka(e,c))},i}const Ze=gy($f);Ze.Axios=Va;Ze.CanceledError=oi;Ze.CancelToken=YM;Ze.isCancel=fy;Ze.VERSION=hy;Ze.toFormData=Ml;Ze.AxiosError=ie;Ze.Cancel=Ze.CanceledError;Ze.all=function(a){return Promise.all(a)};Ze.spread=QM;Ze.isAxiosError=GM;Ze.mergeConfig=Ka;Ze.AxiosHeaders=Et;Ze.formToJSON=e=>iy($.isHTMLForm(e)?new FormData(e):e);Ze.getAdapter=dy.getAdapter;Ze.HttpStatusCode=p0;Ze.default=Ze;const{Axios:Wz,AxiosError:Kz,CanceledError:eR,isCancel:tR,CancelToken:nR,VERSION:aR,all:rR,Cancel:iR,isAxiosError:fR,spread:oR,toFormData:sR,AxiosHeaders:lR,HttpStatusCode:cR,formToJSON:uR,getAdapter:dR,mergeConfig:hR}=Ze,$M="https://mendam-server.onrender.com/api",Se=Ze.create({baseURL:$M,headers:{"Content-Type":"application/json"},timeout:1e4,withCredentials:!0});Se.interceptors.request.use(e=>{const a=localStorage.getItem("token");return a&&(e.headers.Authorization=`Bearer ${a}`),e},e=>(console.error("❌ API Request Error:",e),Promise.reject(e)));Se.interceptors.response.use(e=>e,e=>{var a,i,f,c;return console.error(`❌ API Response Error: ${(a=e.response)==null?void 0:a.status} ${(i=e.config)==null?void 0:i.url}`,(f=e.response)==null?void 0:f.data),((c=e.response)==null?void 0:c.status)===401&&(localStorage.removeItem("token"),window.location.href="/auth/login"),Promise.reject(e)});const Mf={register:async e=>{var a,i,f;try{return(await Se.post("/auth/register",e)).data}catch(c){throw console.error("❌ Registration failed:",(a=c.response)==null?void 0:a.data),new Error(((f=(i=c.response)==null?void 0:i.data)==null?void 0:f.message)||"Registration failed")}},login:async e=>{var a,i,f;try{return(await Se.post("/auth/login",e)).data}catch(c){throw console.error("❌ Login failed:",(a=c.response)==null?void 0:a.data),new Error(((f=(i=c.response)==null?void 0:i.data)==null?void 0:f.message)||"Login failed")}},logout:async()=>{try{await Se.post("/auth/logout")}catch(e){console.error("Logout error:",e)}finally{localStorage.removeItem("token")}},getProfile:async()=>{var e,a,i;try{return(await Se.get("/auth/profile")).data}catch(f){throw console.error("❌ Get profile failed:",(e=f.response)==null?void 0:e.data),new Error(((i=(a=f.response)==null?void 0:a.data)==null?void 0:i.message)||"Failed to get profile")}},updateProfile:async e=>{var a,i,f;try{return(await Se.put("/users/profile",e)).data}catch(c){throw console.error("❌ Update profile failed:",(a=c.response)==null?void 0:a.data),new Error(((f=(i=c.response)==null?void 0:i.data)==null?void 0:f.message)||"Failed to update profile")}}},ya={getFriends:async()=>{var e,a,i;try{return(await Se.get("/friends")).data}catch(f){throw console.error("❌ Get friends failed:",(e=f.response)==null?void 0:e.data),new Error(((i=(a=f.response)==null?void 0:a.data)==null?void 0:i.message)||"Failed to get friends")}},getFriendRequests:async()=>{var e,a,i;try{return(await Se.get("/friends/requests")).data}catch(f){throw console.error("❌ Get friend requests failed:",(e=f.response)==null?void 0:e.data),new Error(((i=(a=f.response)==null?void 0:a.data)==null?void 0:i.message)||"Failed to get friend requests")}},sendFriendRequest:async e=>{var a,i,f;try{return(await Se.post("/friends/request",{friendId:e})).data}catch(c){throw console.error("❌ Send friend request failed:",(a=c.response)==null?void 0:a.data),new Error(((f=(i=c.response)==null?void 0:i.data)==null?void 0:f.message)||"Failed to send friend request")}},acceptFriendRequest:async e=>{var a,i,f;try{return(await Se.put(`/friends/request/${e}/accept`)).data}catch(c){throw console.error("❌ Accept friend request failed:",(a=c.response)==null?void 0:a.data),new Error(((f=(i=c.response)==null?void 0:i.data)==null?void 0:f.message)||"Failed to accept friend request")}},declineFriendRequest:async e=>{var a,i,f;try{return(await Se.put(`/friends/request/${e}/decline`)).data}catch(c){throw console.error("❌ Decline friend request failed:",(a=c.response)==null?void 0:a.data),new Error(((f=(i=c.response)==null?void 0:i.data)==null?void 0:f.message)||"Failed to decline friend request")}},removeFriend:async e=>{var a,i,f;try{return(await Se.delete(`/friends/${e}`)).data}catch(c){throw console.error("❌ Remove friend failed:",(a=c.response)==null?void 0:a.data),new Error(((f=(i=c.response)==null?void 0:i.data)==null?void 0:f.message)||"Failed to remove friend")}},blockUser:async e=>{var a,i,f;try{return(await Se.post("/friends/block",{friendId:e})).data}catch(c){throw console.error("❌ Block user failed:",(a=c.response)==null?void 0:a.data),new Error(((f=(i=c.response)==null?void 0:i.data)==null?void 0:f.message)||"Failed to block user")}},searchUsers:async e=>{var a,i,f;try{return(await Se.get(`/users/search?query=${encodeURIComponent(e)}`)).data}catch(c){throw console.error("❌ Search users failed:",(a=c.response)==null?void 0:a.data),new Error(((f=(i=c.response)==null?void 0:i.data)==null?void 0:f.message)||"Failed to search users")}}},ud={sendDirectMessage:async(e,a,i="text")=>{var f,c,d;try{return(await Se.post("/messages/direct",{recipientId:e,content:a,type:i})).data}catch(m){throw console.error("❌ Send message failed:",(f=m.response)==null?void 0:f.data),new Error(((d=(c=m.response)==null?void 0:c.data)==null?void 0:d.message)||"Failed to send message")}},getDirectMessages:async(e,a=1,i=50)=>{var f,c,d;try{return(await Se.get(`/messages/direct/${e}?page=${a}&limit=${i}`)).data}catch(m){throw console.error("❌ Get messages failed:",(f=m.response)==null?void 0:f.data),new Error(((d=(c=m.response)==null?void 0:c.data)==null?void 0:d.message)||"Failed to get messages")}},deleteMessage:async e=>{var a,i,f;try{return(await Se.delete(`/messages/${e}`)).data}catch(c){throw console.error("❌ Delete message failed:",(a=c.response)==null?void 0:a.data),new Error(((f=(i=c.response)==null?void 0:i.data)==null?void 0:f.message)||"Failed to delete message")}}},Mn={getUserGroups:async()=>{var e,a,i;try{return(await Se.get("/chat-groups")).data}catch(f){throw console.error("❌ Get groups failed:",(e=f.response)==null?void 0:e.data),new Error(((i=(a=f.response)==null?void 0:a.data)==null?void 0:i.message)||"Failed to get groups")}},getGroupDetails:async e=>{var a,i,f;try{return(await Se.get(`/chat-groups/${e}`)).data}catch(c){throw console.error("❌ Get group details failed:",(a=c.response)==null?void 0:a.data),new Error(((f=(i=c.response)==null?void 0:i.data)==null?void 0:f.message)||"Failed to get group details")}},createGroup:async(e,a,i=!1,f=100)=>{var c,d,m;try{return(await Se.post("/chat-groups",{name:e,description:a,isPrivate:i,maxMembers:f})).data}catch(y){throw console.error("❌ Create group failed:",(c=y.response)==null?void 0:c.data),new Error(((m=(d=y.response)==null?void 0:d.data)==null?void 0:m.message)||"Failed to create group")}},sendGroupMessage:async(e,a,i="text")=>{var f,c,d;try{return(await Se.post("/messages/group",{chatGroupId:e,content:a,type:i})).data}catch(m){throw console.error("❌ Send group message failed:",(f=m.response)==null?void 0:f.data),new Error(((d=(c=m.response)==null?void 0:c.data)==null?void 0:d.message)||"Failed to send group message")}},getGroupMessages:async(e,a=1,i=50)=>{var f,c,d;try{return(await Se.get(`/messages/group/${e}?page=${a}&limit=${i}`)).data}catch(m){throw console.error("❌ Get group messages failed:",(f=m.response)==null?void 0:f.data),new Error(((d=(c=m.response)==null?void 0:c.data)==null?void 0:d.message)||"Failed to get group messages")}},joinGroup:async e=>{var a,i,f;try{return(await Se.post(`/chat-groups/${e}/join`)).data}catch(c){throw console.error("❌ Join group failed:",(a=c.response)==null?void 0:a.data),new Error(((f=(i=c.response)==null?void 0:i.data)==null?void 0:f.message)||"Failed to join group")}},leaveGroup:async e=>{var a,i,f;try{return(await Se.delete(`/chat-groups/${e}/leave`)).data}catch(c){throw console.error("❌ Leave group failed:",(a=c.response)==null?void 0:a.data),new Error(((f=(i=c.response)==null?void 0:i.data)==null?void 0:f.message)||"Failed to leave group")}},addMember:async(e,a)=>{var i,f,c;try{return(await Se.post(`/chat-groups/${e}/members`,{userId:a})).data}catch(d){throw console.error("❌ Add member failed:",(i=d.response)==null?void 0:i.data),new Error(((c=(f=d.response)==null?void 0:f.data)==null?void 0:c.message)||"Failed to add member")}},removeMember:async(e,a)=>{var i,f,c;try{return(await Se.delete(`/chat-groups/${e}/members/${a}`)).data}catch(d){throw console.error("❌ Remove member failed:",(i=d.response)==null?void 0:i.data),new Error(((c=(f=d.response)==null?void 0:f.data)==null?void 0:c.message)||"Failed to remove member")}},updateMemberRole:async(e,a,i)=>{var f,c,d;try{return(await Se.put(`/chat-groups/${e}/members/${a}/role`,{role:i})).data}catch(m){throw console.error("❌ Update member role failed:",(f=m.response)==null?void 0:f.data),new Error(((d=(c=m.response)==null?void 0:c.data)==null?void 0:d.message)||"Failed to update member role")}},searchPublicGroups:async e=>{var a,i,f;try{return(await Se.get(`/chat-groups/search?query=${encodeURIComponent(e)}`)).data}catch(c){throw console.error("❌ Search groups failed:",(a=c.response)==null?void 0:a.data),new Error(((f=(i=c.response)==null?void 0:i.data)==null?void 0:f.message)||"Failed to search groups")}}},py=g.createContext(void 0),ZM=({children:e})=>{const[a,i]=g.useState(null),[f,c]=g.useState(!0);g.useEffect(()=>{(async()=>{try{if(localStorage.getItem("token")){const j=await Mf.getProfile();j.success?i(j.data.user):localStorage.removeItem("token")}}catch(M){console.error("Token verification failed:",M),localStorage.removeItem("token"),i(null)}finally{c(!1)}})()},[]);const x={user:a,loading:f,login:async v=>{try{c(!0);const M=await Mf.login(v);if(M.success){const{user:j,token:k}=M.data;localStorage.setItem("token",k),i(j)}else throw new Error(M.message||"Login failed")}catch(M){throw new Error(M.message||"Login failed")}finally{c(!1)}},register:async v=>{try{c(!0);const M=await Mf.register(v);if(M.success){const{user:j,token:k}=M.data;localStorage.setItem("token",k),i(j)}else throw new Error(M.message||"Registration failed")}catch(M){throw new Error(M.message||"Registration failed")}finally{c(!1)}},logout:async()=>{try{await Mf.logout()}catch(v){console.error("Logout error:",v)}finally{localStorage.removeItem("token"),i(null)}},updateUser:v=>{i(M=>M?{...M,...v}:null)},isAuthenticated:!!a};return s.jsx(py.Provider,{value:x,children:e})},gt=()=>{const e=g.useContext(py);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e},JM=Tt`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,HM=()=>{const[e,a]=g.useState(!1),[i,f]=g.useState(!1),{isAuthenticated:c}=gt();g.useEffect(()=>{const m=()=>{a(window.scrollY>50)};return window.addEventListener("scroll",m),()=>window.removeEventListener("scroll",m)},[]);const d=[{label:"Features",href:"#features"},{label:"CTA",href:"#cta"},{label:"Trust",href:"#trust"},{label:"Testimonials",href:"#testimonials"}];return s.jsx(PM,{isScrolled:e,children:s.jsxs(FM,{children:[s.jsxs(qM,{children:[s.jsxs(VM,{children:[s.jsx(XM,{children:e?s.jsx(yl,{}):s.jsx(dx,{})}),s.jsx(WM,{isScrolled:e,children:"Mendam"})]}),s.jsx(KM,{children:s.jsx(ej,{children:d.map((m,y)=>s.jsx(tj,{children:s.jsx(nj,{isScrolled:e,children:s.jsx("a",{href:m.href,children:m.label})})},y))})}),s.jsxs(aj,{children:[!c&&s.jsxs(s.Fragment,{children:[s.jsx($e,{to:"/auth/login",children:s.jsx(rj,{isScrolled:e,children:"Sign In"})}),s.jsx($e,{to:"/auth/register",children:s.jsx(Z2,{children:"Get Started"})})]}),c&&s.jsx($e,{to:"/app/@me",children:s.jsx(Z2,{children:"Open Mendam"})}),s.jsxs(ij,{onClick:()=>f(!i),isOpen:i,isScrolled:e,children:[s.jsx("span",{}),s.jsx("span",{}),s.jsx("span",{})]})]})]}),s.jsx(fj,{isOpen:i,children:s.jsxs(oj,{children:[d.map((m,y)=>s.jsx(dd,{children:s.jsx(hd,{onClick:()=>f(!1),children:s.jsx("a",{href:m.href,children:m.label})})},y)),s.jsx(sj,{}),s.jsx(dd,{children:s.jsx($e,{to:"/auth/login",children:s.jsx(hd,{children:"Sign In"})})}),s.jsx(dd,{children:s.jsx($e,{to:"/auth/register",children:s.jsx(hd,{isPrimary:!0,children:"Get Started"})})})]})})]})})},PM=h.header`
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
  animation: ${JM} 0.8s ease-out;
  
  @media (max-width: 768px) {
    padding: 1.5rem 0;
  }
`,FM=h.div`
  max-width: 140rem;
  margin: 0 auto;
  padding: 0 3rem;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`,qM=h.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,VM=h.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  user-select: none;
`,XM=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 3.5rem;
    height: 3.5rem;
  }
`,WM=h.div`
  font-size: var(--text-xl);
  font-weight: 700;
  color: ${e=>e.isScrolled?"#1a202c":"white"};
  transition: color 0.3s ease;
  
  @media (max-width: 640px) {
    display: none;
  }
`,KM=h.div`
  @media (max-width: 768px) {
    display: none;
  }
`,ej=h.ul`
  display: flex;
  align-items: center;
  gap: 4rem;
  list-style: none;
  margin: 0;
  padding: 0;
`,tj=h.li`
  position: relative;
`,nj=h.div`
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
`,aj=h.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`,rj=h.a`
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
`,Z2=h.div`
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
`,ij=h.button`
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
`,fj=h.div`
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
`,oj=h.ul`
  list-style: none;
  margin: 0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,dd=h.li`
  width: 100%;
`,hd=h.div`
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
`,sj=h.div`
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, #e2e8f0 50%, transparent 100%);
  margin: 1rem 0;
`,lj=Tt`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,yy=Tt`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
`,cj=()=>{const e=[{title:"Product",links:[{label:"Features",href:"#features"},{label:"Security",href:"#security"}]},{title:"Company",links:[{label:"About Us",href:"#about"},{label:"Blog",href:"#blog"},{label:"Contact",href:"#contact"}]},{title:"Resources",links:[{label:"Help Center",href:"#help"},{label:"Documentation",href:"#docs"},{label:"Community",href:"#community"},{label:"Status",href:"#status"}]},{title:"Legal",links:[{label:"Privacy Policy",href:"#privacy"},{label:"Terms of Service",href:"#terms"},{label:"Cookie Policy",href:"#cookies"}]}];return s.jsxs(uj,{children:[s.jsxs(hj,{children:[s.jsxs(mj,{children:[s.jsxs(gj,{children:[s.jsxs(pj,{children:[s.jsx(yj,{children:s.jsx(yl,{})}),s.jsx(bj,{children:s.jsx(wj,{children:"Mendam"})})]}),s.jsx(vj,{children:"Empowering teams worldwide with intelligent, secure, and seamless communication tools. Join thousands of organizations who trust Mendam for their daily collaboration needs."})]}),s.jsx(Mj,{children:e.map((a,i)=>s.jsxs(jj,{children:[s.jsx(Lj,{children:a.title}),s.jsx(Sj,{children:a.links.map((f,c)=>s.jsx(Cj,{children:s.jsx("a",{href:f.href,children:f.label})},c))})]},i))})]}),s.jsx(kj,{children:s.jsxs(Ej,{children:[s.jsxs(Tj,{children:[s.jsx(Nj,{children:"Stay in the loop"}),s.jsx(Ij,{children:"Get the latest updates, tips, and insights delivered to your inbox."})]}),s.jsxs(Dj,{children:[s.jsx(Aj,{type:"email",placeholder:"Enter your email address"}),s.jsxs(zj,{children:[s.jsx("span",{children:"Subscribe"}),s.jsx(Rj,{children:"✨"})]})]})]})}),s.jsxs(Oj,{children:[s.jsx(Bj,{children:"© 2024 Mendam Technologies Inc. All rights reserved."}),s.jsxs(Uj,{children:[s.jsx(md,{href:"#privacy",children:"Privacy"}),s.jsx(J2,{children:"•"}),s.jsx(md,{href:"#terms",children:"Terms"}),s.jsx(J2,{children:"•"}),s.jsx(md,{href:"#cookies",children:"Cookies"})]}),s.jsxs(_j,{children:[s.jsx(Yj,{}),s.jsx("span",{children:"All systems operational"})]})]})]}),s.jsx(dj,{})]})},uj=h.footer`
  background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
  color: white;
  position: relative;
  overflow: hidden;
  /* margin-top: 8rem; */
`,dj=h.div`
  position: absolute;
  inset: 0;
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(118, 75, 162, 0.1) 0%, transparent 50%);
  pointer-events: none;
`,hj=h.div`
  max-width: 140rem;
  margin: 0 auto;
  padding: 0 3rem;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`,mj=h.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 6rem;
  padding: 8rem 0 6rem;
  animation: ${lj} 0.8s ease-out;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 4rem;
    text-align: center;
  }
  
  @media (max-width: 768px) {
    padding: 6rem 0 4rem;
  }
`,gj=h.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`,pj=h.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  
  @media (max-width: 1024px) {
    justify-content: center;
  }
`,yj=h.div`
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
`,bj=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`,wj=h.div`
  font-size: var(--text-xl);
  font-weight: 700;
  line-height: 1;
`;h.div`
  font-size: var(--text-sm);
  opacity: 0.8;
  line-height: 1;
`;const vj=h.p`
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
`;const xj=h.div`
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
    
    ${xj} {
      opacity: 1;
      visibility: visible;
      transform: translateY(-100%);
    }
  }
`;const Mj=h.div`
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
`,jj=h.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,Lj=h.h4`
  font-size: var(--text-lg);
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
`,Sj=h.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Cj=h.li`
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
`,kj=h.div`
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
`,Ej=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    gap: 3rem;
  }
`,Tj=h.div`
  flex: 1;
`,Nj=h.h3`
  font-size: var(--text-xl);
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
`,Ij=h.p`
  font-size: var(--text-md);
  opacity: 0.9;
  line-height: 1.6;
`,Dj=h.form`
  display: flex;
  gap: 1.5rem;
  flex: 1;
  max-width: 40rem;
  
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 1rem;
  }
`,Aj=h.input`
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
`,zj=h.button`
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
`,Rj=h.span`
  animation: ${yy} 2s infinite;
`,Oj=h.div`
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
`,Bj=h.div`
  font-size: var(--text-sm);
  opacity: 0.8;
`,Uj=h.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  
  @media (max-width: 640px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`,md=h.a`
  font-size: var(--text-sm);
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #667eea;
  }
`,J2=h.span`
  opacity: 0.5;
  
  @media (max-width: 640px) {
    display: none;
  }
`,_j=h.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: var(--text-sm);
  opacity: 0.8;
`,Yj=h.div`
  width: 0.8rem;
  height: 0.8rem;
  background: #22c55e;
  border-radius: 50%;
  animation: ${yy} 2s infinite;
`,Qj=({fz:e,bg:a,outline:i,color:f,hoverColor:c,hoverBg:d,title:m,isLink:y,href:b,isBlank:x})=>y?s.jsx("a",{href:b,target:x?"_blank":void 0,children:s.jsx(H2,{color:f,outline:i,bg:a,fz:e,hoverColor:c,hoverBg:d,children:m})}):s.jsx(H2,{color:f,outline:i,bg:a,fz:e,hoverColor:c,hoverBg:d,children:m}),H2=h.button`
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
`,by=Tt`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,wy=Tt`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`,vy=Tt`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
`,Gj=()=>s.jsxs($j,{children:[s.jsxs(Zj,{children:[s.jsxs(Jj,{children:[s.jsxs(Hj,{children:[s.jsx(P2,{children:"Connect"})," teams.",s.jsx("br",{}),s.jsx(P2,{children:"Build"})," relationships.",s.jsx("br",{}),s.jsx(Pj,{children:"Achieve more."})]}),s.jsx(Fj,{children:"Experience the future of team communication with Mendam's AI-powered chat platform. Real-time collaboration, custom workflows, and seamless integration - all in one place."}),s.jsx(qj,{children:s.jsx(Vj,{children:s.jsx(Qj,{isLink:!0,href:"/auth/register",title:"Get Started"})})})]}),s.jsx(Xj,{children:s.jsxs(Wj,{children:[s.jsxs(Kj,{children:[s.jsxs(eL,{children:[s.jsx(Ha,{color:"#ff5f57"}),s.jsx(Ha,{color:"#ffbd2e"}),s.jsx(Ha,{color:"#28ca42"}),s.jsx(tL,{children:"Mendam"})]}),s.jsx(nL,{children:s.jsxs(aL,{children:[s.jsxs(rL,{children:[s.jsxs(gd,{active:!0,children:[s.jsx(Us,{color:"#6366f1"}),s.jsx("span",{children:"Design Team"}),s.jsx(F2,{children:"3"})]}),s.jsxs(gd,{children:[s.jsx(Us,{color:"#10b981"}),s.jsx("span",{children:"Development"})]}),s.jsxs(gd,{children:[s.jsx(Us,{color:"#f59e0b"}),s.jsx("span",{children:"Marketing"}),s.jsx(F2,{children:"1"})]})]}),s.jsxs(iL,{children:[s.jsxs(q2,{children:[s.jsx(V2,{color:"#6366f1"}),s.jsxs(X2,{children:[s.jsx(W2,{children:"Alex Designer"}),s.jsx(K2,{children:"Just finished the new component library! 🎨"})]})]}),s.jsxs(q2,{children:[s.jsx(V2,{color:"#10b981"}),s.jsxs(X2,{children:[s.jsx(W2,{children:"Sarah Dev"}),s.jsx(K2,{children:"Amazing work! The new buttons look fantastic"})]})]}),s.jsxs(fL,{children:[s.jsx(Ha,{color:"#6366f1"}),s.jsx(Ha,{color:"#6366f1"}),s.jsx(Ha,{color:"#6366f1"}),s.jsx("span",{children:"Mike is typing..."})]})]})]})})]}),s.jsxs(pd,{delay:"0s",children:[s.jsx(yd,{children:"📊"}),s.jsxs(bd,{children:[s.jsx("strong",{children:"Team Analytics"}),s.jsx("span",{children:"Real-time insights"})]})]}),s.jsxs(pd,{delay:"1s",children:[s.jsx(yd,{children:"🔔"}),s.jsxs(bd,{children:[s.jsx("strong",{children:"Smart Notifications"}),s.jsx("span",{children:"Never miss important updates"})]})]}),s.jsxs(pd,{delay:"2s",children:[s.jsx(yd,{children:"🚀"}),s.jsxs(bd,{children:[s.jsx("strong",{children:"AI Assistant"}),s.jsx("span",{children:"Boost productivity by 40%"})]})]})]})})]}),s.jsxs(oL,{children:[s.jsx(wd,{top:"10%",left:"5%",size:"300px"}),s.jsx(wd,{top:"60%",right:"10%",size:"200px"}),s.jsx(wd,{bottom:"20%",left:"20%",size:"150px"})]})]}),$j=h.section`
  min-height: 100svh;
  padding: 8rem 3rem 4rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 3rem 2rem 2rem;
  }
`,Zj=h.div`
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

  @media (max-width: 750px) {
    display: flex;
    align-items: center;
    justify-content: center;
  height: 100%;
  }
`,Jj=h.div`
  animation: ${by} 0.8s ease-out;
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
  animation: ${vy} 2s infinite;
`;const Hj=h.h1`
  font-size: clamp(4rem, 8vw, 7rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 2rem;
  color: white;
`,P2=h.span`
  background: linear-gradient(135deg, #ffd89b 0%, #ffffff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,Pj=h.span`
  color: #ffd89b;
`,Fj=h.p`
  font-size: var(--text-lg);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 3rem;
  max-width: 50rem;
`,qj=h.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 4rem;
  
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
`,Vj=h.div`
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
`;const Xj=h.div`
  animation: ${by} 0.8s ease-out 0.2s both;
  position: relative;
  @media (max-width: 750px) {
    display: none;
  }
`,Wj=h.div`
  position: relative;
  perspective: 1000px;
`,Kj=h.div`
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
`,eL=h.div`
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
`,tL=h.div`
  font-weight: 600;
  color: #495057;
  margin-left: auto;
`,nL=h.div`
  height: 40rem;
  background: white;
`,aL=h.div`
  display: flex;
  height: 100%;
`,rL=h.div`
  width: 25rem;
  background: #f8f9fa;
  padding: 2rem 1rem;
  border-right: 1px solid #e9ecef;
`,gd=h.div`
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
`,Us=h.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: ${e=>e.color};
  flex-shrink: 0;
`,F2=h.div`
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
`,iL=h.div`
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,q2=h.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`,V2=h(Us)`
  width: 4rem;
  height: 4rem;
`,X2=h.div`
  flex: 1;
`,W2=h.div`
  font-weight: 600;
  color: #495057;
  font-size: var(--text-sm);
  margin-bottom: 0.3rem;
`,K2=h.div`
  color: #6c757d;
  font-size: var(--text-sm);
  line-height: 1.4;
`,fL=h.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  opacity: 0.7;
  font-size: var(--text-xs);
  color: #6c757d;
  
  ${Ha} {
    width: 0.6rem;
    height: 0.6rem;
    animation: ${vy} 1.5s infinite;
    
    &:nth-child(2) {
      animation-delay: 0.2s;
    }
    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`,pd=h.div`
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
  animation: ${wy} 3s ease-in-out infinite;
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
`,yd=h.div`
  font-size: 2.4rem;
`,bd=h.div`
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
`,oL=h.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`,wd=h.div`
  position: absolute;
  width: ${e=>e.size};
  height: ${e=>e.size};
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  top: ${e=>e.top};
  bottom: ${e=>e.bottom};
  left: ${e=>e.left};
  right: ${e=>e.right};
  animation: ${wy} 6s ease-in-out infinite;
  
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
`;const xy=Tt`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,sL=Tt`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,lL=Tt`
  0%, 100% {
    box-shadow: 0 0 20px rgba(102, 126, 234, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(102, 126, 234, 0.6);
  }
`,cL=()=>{const e=[{icon:"💬",title:"Real-time Messaging",description:"Instant messaging with smooth delivery and real-time updates across all chats.",stats:"99.9% uptime",color:"#667eea"},{icon:"👥",title:"Group & Private Chats",description:"Create private 1-on-1 chats or public/private group conversations with multiple participants.",stats:"Unlimited rooms",color:"#f093fb"},{icon:"🎨",title:"Multiple Themes",description:"Switch between light, dark, and custom themes to personalize your chat experience.",stats:"6+ themes available",color:"#764ba2"},{icon:"🔔",title:"Smart Notifications",description:"Get notified for new messages, mentions, or custom keywords in real-time.",stats:"Instant alerts",color:"#f5576c"},{icon:"🔒",title:"Privacy & Security",description:"Messages are securely stored and transmitted with user privacy in mind.",stats:"Secure by design",color:"#4facfe"},{icon:"📱",title:"Responsive Design",description:"Fully responsive web app that works seamlessly on desktop, tablet, and mobile.",stats:"Cross-device ready",color:"#43e97b"}];return s.jsx(uL,{id:"features",children:s.jsxs(dL,{children:[s.jsxs(hL,{children:[s.jsx(mL,{children:"Features"}),s.jsxs(gL,{children:["Everything you need for",s.jsx(pL,{children:" modern communication"})]}),s.jsx(yL,{children:"Discover the powerful features that make Mendam the preferred choice for teams who demand excellence in their communication tools."})]}),s.jsx(bL,{children:e.map((a,i)=>s.jsxs(wL,{index:i,color:a.color,children:[s.jsxs(vL,{children:[s.jsx(xL,{children:a.icon}),s.jsx(ML,{children:a.stats})]}),s.jsxs(jL,{children:[s.jsx(LL,{children:a.title}),s.jsx(SL,{children:a.description})]}),s.jsx(My,{color:a.color})]},i))}),s.jsx(CL,{id:"cta",children:s.jsxs(kL,{children:[s.jsx(EL,{children:"Ready to transform your team communication?"}),s.jsx(TL,{children:"Join thousands of teams already using Mendam to collaborate more effectively."}),s.jsx(NL,{children:s.jsx(IL,{children:s.jsx($e,{to:"/auth/register",children:"Get Started"})})})]})})]})})},uL=h.section`
  /* padding: 12rem 0; */
  position: relative;
  overflow: hidden;
  
`,dL=h.div`
  max-width: 140rem;
  margin: 0 auto;
  padding: 0 3rem;
  
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`,hL=h.div`
  text-align: center;
  margin-bottom: 8rem;
  animation: ${xy} 0.8s ease-out;
`,mL=h.div`
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
`,gL=h.h2`
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 700;
  line-height: 1.2;
  color: #1a202c;
  margin-bottom: 2rem;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
`,pL=h.span`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,yL=h.p`
  font-size: var(--text-lg);
  color: #4a5568;
  line-height: 1.6;
  max-width: 60rem;
  margin: 0 auto;
`,bL=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  gap: 3rem;
  margin-bottom: 8rem;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,My=h.div`
  position: absolute;
  top: -50%;
  left: -50%;
  right: -50%;
  bottom: -50%;
  background: radial-gradient(circle, ${e=>e.color}20 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
`,wL=h.div`
  background: white;
  border-radius: 2rem;
  padding: 3rem;
  position: relative;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  animation: ${e=>e.index%2===0?xy:sL} 0.8s ease-out;
  animation-delay: ${e=>e.index*.1}s;
  animation-fill-mode: both;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
    border-color: ${e=>e.color};
    
    ${My} {
      opacity: 0.6;
      animation: ${lL} 2s infinite;
    }
  }
`,vL=h.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`,xL=h.div`
  font-size: 4rem;
  width: 8rem;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
  border-radius: 1.5rem;
  border: 1px solid #e2e8f0;
`,ML=h.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.5rem 1.2rem;
  border-radius: 5rem;
  font-size: var(--text-xs);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,jL=h.div`
  position: relative;
  z-index: 2;
`,LL=h.h3`
  font-size: var(--text-xl);
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 1rem;
`,SL=h.p`
  font-size: var(--text-md);
  color: #4a5568;
  line-height: 1.6;
`,CL=h.div`
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
`,kL=h.div`
  position: relative;
  z-index: 2;
`,EL=h.h3`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
  line-height: 1.2;
`,TL=h.p`
  font-size: var(--text-lg);
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 3rem;
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`,NL=h.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`,IL=h.div`
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
`;const DL=Tt`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,AL=Tt`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`,zL=()=>{const e=[{number:"10,000+",label:"Active Teams",description:"Trust Mendam for daily communication"},{number:"99.9%",label:"Uptime",description:"Reliable service you can count on"},{number:"50M+",label:"Messages",description:"Sent securely every month"},{number:"150+",label:"Countries",description:"Teams worldwide using Mendam"}],a=[{quote:"Mendam transformed how our distributed team communicates. The AI features save us hours every week.",author:"Sarah Chen",role:"Engineering Manager",company:"TechFlow Inc",avatar:"👩‍💻",rating:5},{quote:"Best team chat app we've ever used. The security features give us peace of mind with sensitive data.",author:"Michael Rodriguez",role:"CTO",company:"SecureBank",avatar:"👨‍💼",rating:5},{quote:"The analytics dashboard helps us understand team dynamics better. Highly recommend for growing teams.",author:"Emma Thompson",role:"Head of Operations",company:"GrowthCo",avatar:"👩‍🎯",rating:5}];return s.jsx(RL,{id:"trust",children:s.jsxs(OL,{children:[s.jsxs(BL,{children:[s.jsxs(ep,{children:[s.jsx(tp,{children:"Trusted Globally"}),s.jsx(np,{children:"Numbers that speak for themselves"}),s.jsx(ap,{children:"Join thousands of teams who have already discovered the power of seamless communication."})]}),s.jsx(UL,{children:e.map((i,f)=>s.jsxs(_L,{index:f,children:[s.jsx(YL,{children:i.number}),s.jsx(QL,{children:i.label}),s.jsx(GL,{children:i.description}),s.jsx($L,{children:"📈"})]},f))})]}),s.jsxs(ZL,{id:"testimonials",children:[s.jsxs(ep,{children:[s.jsx(tp,{children:"Customer Stories"}),s.jsx(np,{children:"What our customers are saying"}),s.jsx(ap,{children:"Don't just take our word for it. Here's what real teams say about their Mendam experience."})]}),s.jsx(JL,{children:a.map((i,f)=>s.jsxs(HL,{index:f,children:[s.jsxs(PL,{children:[s.jsx(FL,{children:'"'}),s.jsx(qL,{children:i.quote}),s.jsx(VL,{children:[...Array(i.rating)].map((c,d)=>s.jsx(XL,{children:"⭐"},d))})]}),s.jsxs(WL,{children:[s.jsx(KL,{children:i.avatar}),s.jsxs(e5,{children:[s.jsx(t5,{children:i.author}),s.jsx(n5,{children:i.role}),s.jsx(a5,{children:i.company})]})]})]},f))})]})]})})},RL=h.section`
  /* padding: 10rem 0; */
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%);
  position: relative;
`,OL=h.div`
  max-width: 140rem;
  margin: 0 auto;
  padding: 0 3rem;
  
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`,BL=h.div`
  margin-bottom: 10rem;
`,ep=h.div`
  text-align: center;
  margin-bottom: 6rem;
`,tp=h.div`
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
`,np=h.h2`
  font-size: clamp(3rem, 5vw, 4.5rem);
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 2rem;
  line-height: 1.2;
`,ap=h.p`
  font-size: var(--text-lg);
  color: #4a5568;
  line-height: 1.6;
  max-width: 60rem;
  margin: 0 auto;
`,UL=h.div`
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
`,_L=h.div`
  background: white;
  border-radius: 2rem;
  padding: 3rem 2rem;
  text-align: center;
  position: relative;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  animation: ${DL} 0.8s ease-out;
  animation-delay: ${e=>e.index*.1}s;
  animation-fill-mode: both;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 60px rgba(102, 126, 234, 0.1);
    border-color: #667eea;
  }
`,YL=h.div`
  font-size: clamp(3rem, 5vw, 4rem);
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  line-height: 1;
`,QL=h.div`
  font-size: var(--text-lg);
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
`,GL=h.div`
  font-size: var(--text-sm);
  color: #718096;
  line-height: 1.5;
`,$L=h.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-size: 2rem;
  opacity: 0.3;
`,ZL=h.div`
  margin-bottom: 8rem;
`,JL=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  gap: 3rem;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,HL=h.div`
  background: white;
  border-radius: 2rem;
  padding: 3rem;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  animation: ${AL} 3s ease-in-out infinite;
  animation-delay: ${e=>e.index*.5}s;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.1);
    border-color: #667eea;
  }
`,PL=h.div`
  margin-bottom: 2rem;
`,FL=h.div`
  font-size: 4rem;
  color: #667eea;
  line-height: 1;
  margin-bottom: 1rem;
  font-family: serif;
`,qL=h.p`
  font-size: var(--text-lg);
  line-height: 1.6;
  color: #2d3748;
  margin-bottom: 1.5rem;
  font-style: italic;
`,VL=h.div`
  display: flex;
  gap: 0.2rem;
  margin-bottom: 1rem;
`,XL=h.span`
  font-size: 1.4rem;
`,WL=h.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`,KL=h.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  flex-shrink: 0;
`,e5=h.div`
  flex: 1;
`,t5=h.div`
  font-size: var(--text-md);
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.2rem;
`,n5=h.div`
  font-size: var(--text-sm);
  color: #4a5568;
  margin-bottom: 0.2rem;
`,a5=h.div`
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
`;const r5=h.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 8rem;

`,i5=()=>s.jsxs(r5,{children:[s.jsx(HM,{}),s.jsx(Gj,{}),s.jsx(cL,{}),s.jsx(zL,{}),s.jsx(cj,{})]}),f5=h.rect`
  fill: #2492c2;
`,o5=h.path`
  fill: #fbfbfb;
`,s5=()=>s.jsxs("svg",{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",width:43,height:43,children:[s.jsx(f5,{width:"100",height:"100",rx:"8"}),s.jsx(o5,{d:"M42.59,82.84a17.76,17.76,0,0,1-1.82-.37c-12.57-4-21.06-12.15-24.54-25A34.7,34.7,0,0,1,35.07,17.34a1.74,1.74,0,0,1,.91-.17c.49.09.57.69.17,1.22a15.42,15.42,0,0,0-2.64,5.26,11.3,11.3,0,0,0,.74,8,45.6,45.6,0,0,0,8.21,11.56,39.26,39.26,0,0,1,5.94,7.47c.58,1,1.05,2.16,1.55,3.19.72-1.33,1.41-2.71,2.19-4a43.15,43.15,0,0,1,5.5-6.78c3.06-3.43,6-6.95,8-11.18a11.69,11.69,0,0,0-.41-11.47A2.48,2.48,0,0,1,65,20a1.44,1.44,0,0,1,.31-1.71A1.27,1.27,0,0,1,67,18.25a63.72,63.72,0,0,1,5.64,3.93A33.31,33.31,0,0,1,84.22,41.82c2.12,11.24-.52,21.32-8,30A33.8,33.8,0,0,1,60,82.15a1.84,1.84,0,0,1-.64.17c-.18,0-.47-.09-.53-.23s.05-.4.17-.55a1.88,1.88,0,0,1,.48-.34A41.12,41.12,0,0,0,72.25,68.34,26.46,26.46,0,0,0,75.83,52c-.36-4.17-1.8-8-3.25-11.88l-.35-.91c-.9,1.59-1.71,3.15-2.64,4.63A64.74,64.74,0,0,1,61.26,54c-2.91,3-5.92,6-8,9.72-1,1.77-1.72,3.65-2.6,5.47a1.17,1.17,0,0,1-.68.62c-.18,0-.55-.31-.63-.56-1.7-4.9-4.74-8.92-8.24-12.63-3.1-3.3-6.37-6.45-8.91-10.22-1.44-2.15-2.73-4.41-4.08-6.61l-.31-.47c-.19.35-.34.61-.46.89A37.56,37.56,0,0,0,24.05,53.9a27,27,0,0,0,5.53,17.23A44.24,44.24,0,0,0,41.72,82l1,.63Z"})]});function l5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{fillRule:"evenodd",d:"M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",clipRule:"evenodd"}),g.createElement("path",{d:"M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z"}))}const c5=g.forwardRef(l5);function u5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{fillRule:"evenodd",d:"M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z",clipRule:"evenodd"}))}const d5=g.forwardRef(u5);function h5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{fillRule:"evenodd",d:"M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z",clipRule:"evenodd"}))}const m5=g.forwardRef(h5);function g5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{fillRule:"evenodd",d:"M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z",clipRule:"evenodd"}))}const jy=g.forwardRef(g5);function p5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{d:"M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"}),g.createElement("path",{d:"M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"}))}const y5=g.forwardRef(p5);function b5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{d:"M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z"}))}const w5=g.forwardRef(b5);function v5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{fillRule:"evenodd",d:"M11.097 1.515a.75.75 0 0 1 .589.882L10.666 7.5h4.47l1.079-5.397a.75.75 0 1 1 1.47.294L16.665 7.5h3.585a.75.75 0 0 1 0 1.5h-3.885l-1.2 6h3.585a.75.75 0 0 1 0 1.5h-3.885l-1.08 5.397a.75.75 0 1 1-1.47-.294l1.02-5.103h-4.47l-1.08 5.397a.75.75 0 1 1-1.47-.294l1.02-5.103H3.75a.75.75 0 0 1 0-1.5h3.885l1.2-6H5.25a.75.75 0 0 1 0-1.5h3.885l1.08-5.397a.75.75 0 0 1 .882-.588ZM10.365 9l-1.2 6h4.47l1.2-6h-4.47Z",clipRule:"evenodd"}))}const x5=g.forwardRef(v5);function M5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{fillRule:"evenodd",d:"M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z",clipRule:"evenodd"}))}const Ly=g.forwardRef(M5);function j5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{fillRule:"evenodd",d:"M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z",clipRule:"evenodd"}))}const Q0=g.forwardRef(j5);function L5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{fillRule:"evenodd",d:"m6.72 5.66 11.62 11.62A8.25 8.25 0 0 0 6.72 5.66Zm10.56 12.68L5.66 6.72a8.25 8.25 0 0 0 11.62 11.62ZM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788Z",clipRule:"evenodd"}))}const S5=g.forwardRef(L5);function C5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{d:"M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z"}))}const Sy=g.forwardRef(C5);function k5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{fillRule:"evenodd",d:"M18.97 3.659a2.25 2.25 0 0 0-3.182 0l-10.94 10.94a3.75 3.75 0 1 0 5.304 5.303l7.693-7.693a.75.75 0 0 1 1.06 1.06l-7.693 7.693a5.25 5.25 0 1 1-7.424-7.424l10.939-10.94a3.75 3.75 0 1 1 5.303 5.304L9.097 18.835l-.008.008-.007.007-.002.002-.003.002A2.25 2.25 0 0 1 5.91 15.66l7.81-7.81a.75.75 0 0 1 1.061 1.06l-7.81 7.81a.75.75 0 0 0 1.054 1.068L18.97 6.84a2.25 2.25 0 0 0 0-3.182Z",clipRule:"evenodd"}))}const Cy=g.forwardRef(k5);function E5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{fillRule:"evenodd",d:"M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z",clipRule:"evenodd"}))}const T5=g.forwardRef(E5);function N5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{fillRule:"evenodd",d:"M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z",clipRule:"evenodd"}),g.createElement("path",{d:"M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z"}))}const Nf=g.forwardRef(N5);function I5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{d:"M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z"}))}const G0=g.forwardRef(I5);function D5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{fillRule:"evenodd",d:"M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z",clipRule:"evenodd"}))}const A5=g.forwardRef(D5);function z5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{fillRule:"evenodd",d:"M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"}))}const $0=g.forwardRef(z5);function R5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"}))}const ky=g.forwardRef(R5);function O5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"}))}const Ey=g.forwardRef(O5);function B5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"}))}const rp=g.forwardRef(B5);function U5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"}))}const _5=g.forwardRef(U5);function Y5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"}),g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"}))}const Z0=g.forwardRef(Y5);function Q5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"}))}const ip=g.forwardRef(Q5);function G5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"}))}const vd=g.forwardRef(G5);function $5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 12.75 6 6 9-13.5"}))}const Z5=g.forwardRef($5);function J5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5 8.25 12l7.5-7.5"}))}const Ty=g.forwardRef(J5);function H5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m8.25 4.5 7.5 7.5-7.5 7.5"}))}const P5=g.forwardRef(H5);function F5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"}),g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}))}const If=g.forwardRef(F5);function q5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"}),g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}))}const fp=g.forwardRef(q5);function V5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"}))}const Ny=g.forwardRef(V5);function X5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"}))}const Sl=g.forwardRef(X5);function W5({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"}))}const K5=g.forwardRef(W5);function e9({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"}))}const y0=g.forwardRef(e9);function t9({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"}),g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}))}const b0=g.forwardRef(t9);function n9({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"}))}const Iy=g.forwardRef(n9);function a9({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"}))}const r9=g.forwardRef(a9);function i9({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"}))}const f9=g.forwardRef(i9);function o9({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"}))}const s9=g.forwardRef(o9);function l9({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"}))}const c9=g.forwardRef(l9);function u9({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"}))}const d9=g.forwardRef(u9);function h9({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"}))}const m9=g.forwardRef(h9);function g9({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"}))}const p9=g.forwardRef(g9);function y9({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"}))}const Dy=g.forwardRef(y9);function b9({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"}))}const op=g.forwardRef(b9);function w9({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"}))}const v9=g.forwardRef(w9);function x9({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"}))}const M9=g.forwardRef(x9);function j9({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"}))}const Ay=g.forwardRef(j9);function L9({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"}))}const sp=g.forwardRef(L9);function S9({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"}))}const C9=g.forwardRef(S9);function k9({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"}))}const J0=g.forwardRef(k9);function E9({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"}))}const T9=g.forwardRef(E9);function N9({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"}))}const Df=g.forwardRef(N9),Zf=({children:e,title:a,isOpen:i,onClose:f})=>{g.useEffect(()=>{if(!i)return;const d=m=>{m.key==="Escape"&&f()};return document.body.style.overflow="hidden",document.addEventListener("keydown",d),()=>{document.body.style.overflow="auto",document.removeEventListener("keydown",d)}},[i,f]);const c=g.useCallback(d=>{d.target===d.currentTarget&&f()},[f]);return i?s.jsx(I9,{onClick:c,children:s.jsxs(D9,{onClick:d=>d.stopPropagation(),children:[s.jsxs(A9,{children:[s.jsx(z9,{children:a}),s.jsx(O9,{onClick:f,"aria-label":"Close modal",children:s.jsx(Df,{className:"size-6"})})]}),s.jsx(R9,{children:e})]})}):null},I9=h.div`
  position: fixed;
  inset: 0;
  background-color: #00000039;
  z-index: 10034567890987650;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`,D9=h.div`
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
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
`,A9=h.div`
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
`,z9=h.h2`
  font-size: var(--text-xl);
  color: ${({theme:e})=>e.text.secondary};
  font-weight: 500;
  margin: 0;
`,R9=h.div`
  flex: 1;
  overflow-y: auto;
  margin: 2rem;
  margin-top: 0;
  @media (max-width: 700px) {
    margin: 1.5rem;
    margin-top: 0;
  }
`,O9=h.button`
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
`,yt=({variant:e="primary",type:a="button",onClick:i,disabled:f=!1,title:c,link:d,target:m="self",full:y})=>{const b=c,x=s.jsx(B9,{disabled:f,onClick:i,type:a,variant:e,full:y,children:b});return d?s.jsx("a",{target:`_${m}`,href:d,children:x}):x},lp={primary:{default:"var(--blue)",hover:"var(--dark-blue)"},danger:{default:"#e83333",hover:"#c22626"},cancel:{default:"#1e1e20",hover:"#3c3c41"}},B9=h.button`
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
  background-color: ${({variant:e="primary"})=>lp[e].default};
  color: var(--light);
  border: 1px solid
    ${({variant:e})=>e==="cancel"?({theme:a})=>a.border.secondary:"transparent"};

  &:hover:not(:disabled) {
    background-color: ${({variant:e="primary"})=>lp[e].hover};
  }
`,U9=({title:e,onClose:a,isOpen:i})=>s.jsx(s.Fragment,{children:s.jsx(Zf,{title:e,onClose:a,isOpen:i,children:s.jsxs(_9,{children:[s.jsxs(Y9,{htmlFor:"upload-Workspace-image",children:[s.jsx(zy,{children:s.jsx(Z0,{})}),s.jsx(Q9,{children:s.jsx("span",{children:"Add Workspace image (optional)"})}),s.jsx("input",{type:"file",id:"upload-Workspace-image",name:"upload-Workspace-image"})]}),s.jsxs(G9,{children:[s.jsx($9,{htmlFor:"Workspace-name",children:"Provide Workspace name *"}),s.jsx(Z9,{placeholder:"Workspace name",type:"text",name:"Workspace-name",id:"Workspace-name"})]}),s.jsx(J9,{children:s.jsxs(H9,{children:[s.jsx(yt,{onClick:a,variant:"cancel",type:"button",title:"Cancel"}),s.jsx(yt,{variant:"primary",type:"submit",title:"Create"})]})})]})})}),_9=h.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,zy=h.div`
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
`,Y9=h.label`
  width: max-content;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  cursor: pointer;
  input {
    display: none;
  }
  &:hover ${zy} {
    background-color: ${({theme:e})=>e.background.secondary};
  }
`,Q9=h.div`
  span {
    line-height: 1;
    font-size: var(--text-md);
    color: ${({theme:e})=>e.text.secondary};
  }
`,G9=h.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,$9=h.label`
  font-size: var(--text-md);
  line-height: 1;
  color: ${({theme:e})=>e.text.secondary};
`,Z9=h.input`
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
`,J9=h.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
`,H9=h.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`,Ry=({})=>{const e=cl(),[a,i]=g.useState(!1),f=()=>{i(!1)};return s.jsx(s.Fragment,{children:s.jsxs(P9,{children:[s.jsxs(F9,{children:[s.jsx(q9,{children:s.jsx($e,{to:"/app/@me",children:s.jsx(s5,{})})}),s.jsx(V9,{}),s.jsxs(X9,{children:[s.jsx($e,{to:"/app/@me",children:s.jsx(xd,{selected:e.pathname==="/app/@me",children:s.jsx(Md,{children:s.jsx(m5,{})})})}),s.jsx($e,{to:"/app/friends",children:s.jsx(xd,{selected:e.pathname==="/app/friends",children:s.jsx(Md,{children:s.jsx(G0,{})})})}),s.jsx($e,{to:"/app/groups",children:s.jsx(xd,{selected:e.pathname==="/app/groups",children:s.jsx(Md,{children:s.jsx(Nf,{})})})})]})]}),s.jsx(U9,{title:"Create new workspace",onClose:f,isOpen:a})]})})},P9=h.aside`
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
`,F9=h.aside`
  height: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.8rem;
  @media (max-width: 1000px) {
    gap: 1.5rem;
  }
`,q9=h.div`
  width: max-content;
  svg {
    border-radius: 8px;
  }
`,V9=h.div`
  width: 100%;
  height: 1.5px;
  background-color: ${({theme:e})=>e.border.primary};
  @media (max-width: 1000px) {
    height: 0.5px;
  }
`,X9=h.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.8rem;
`,xd=h.div`
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
`,Md=h.a`
  width: 2rem;
  height: 2rem;
`;h.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.8rem;
`;h.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.8rem;
`;h.div`
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
`;h.div`
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
`;h.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 0.8rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;const bt=({userName:e="Ali Yara",image:a,link:i=!1,status:f="offline",showStatus:c=!1,showStatusCircle:d=!1,showUserName:m=!1,size:y=40,isGroup:b=!1,bg:x=!1})=>{const v=s.jsxs(W9,{children:[s.jsx(K9,{bg:x,size:y,children:a?s.jsx("img",{src:a,alt:`${e} avatar`,loading:"lazy",width:y,height:y}):b?s.jsx(Nf,{}):s.jsx(A5,{})}),d&&s.jsx(eS,{children:s.jsxs(nS,{status:f,children:[f==="idle"&&s.jsx(aS,{}),f==="offline"&&s.jsx(rS,{})]})})]});return i?s.jsxs(cp,{children:[s.jsx($e,{to:"#",children:v}),m&&s.jsxs(up,{children:[s.jsx("h5",{children:e}),c&&s.jsx("span",{children:f})]})]}):s.jsxs(cp,{children:[v,m&&s.jsxs(up,{children:[s.jsx("h5",{children:e}),c&&s.jsx("span",{children:f})]})]})},cp=h.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  /* z-index: 1; */
  user-select: none;
  width: max-content;
`,W9=h.div`
  position: relative;
  width: max-content;
`,K9=h.div`
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
`,eS=h.div`
  position: absolute;
  right: 0;
  bottom: -3px;
  width: 1.6rem;
  height: 1.6rem;
  background-color: ${({theme:e})=>e.background.secondary};
  border-radius: 50%;
`,tS=e=>({idle:"var(--info-500)",online:"var(--success-500)",offline:"var(--primary)"})[e],nS=h.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-45%, -46%);
  width: 1rem;
  height: 1rem;
  background-color: ${({status:e})=>tS(e)};
  border-radius: 50%;
`,aS=h.div`
  position: absolute;
  top: -5%;
  left: -3%;
  width: 0.8rem;
  height: 0.8rem;
  background-color: ${({theme:e})=>e.background.secondary};
  border-radius: 50%;
`,rS=h.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0.5rem;
  height: 0.5rem;
  background-color: ${({theme:e})=>e.text.thirdly};
  border-radius: 50%;
`,up=h.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

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
`;function iS({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{fillRule:"evenodd",d:"M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z",clipRule:"evenodd"}))}const fS=g.forwardRef(iS);function oS({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{fillRule:"evenodd",d:"M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"}))}const sS=g.forwardRef(oS);function lS({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{fillRule:"evenodd",d:"M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z",clipRule:"evenodd"}))}const cS=g.forwardRef(lS);function uS({title:e,titleId:a,...i},f){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":a},i),e?g.createElement("title",{id:a},e):null,g.createElement("path",{d:"M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z"}))}const dS=g.forwardRef(uS),hS=({isOpen:e,shouldAnimate:a,user:i,onLogout:f,onClose:c})=>{const d=g.useRef(null);g.useEffect(()=>{const b=x=>{d.current&&!d.current.contains(x.target)&&c()};return e&&document.addEventListener("mousedown",b),()=>{document.removeEventListener("mousedown",b)}},[e,c]);const m=b=>{switch(b){case"online":return"#43a25a";case"idle":return"#f2c100";case"offline":default:return"#6b7280"}},y=b=>{switch(b){case"online":return"online";case"idle":return"idle";case"offline":default:return"offline"}};return s.jsx(s.Fragment,{children:s.jsxs(mS,{ref:d,isOpen:e,shouldAnimate:a,children:[s.jsx(gS,{children:s.jsxs(pS,{children:[s.jsx(yS,{children:s.jsx(bS,{children:i.avatar?s.jsx("img",{src:i.avatar,alt:i.fullName}):s.jsx(wS,{children:i.fullName.charAt(0).toUpperCase()})})}),s.jsxs(vS,{children:[s.jsx("h4",{children:i.fullName}),s.jsxs("span",{children:["@",i.username]})]})]})}),s.jsx(xS,{children:s.jsxs(MS,{children:[s.jsxs(jd,{as:$e,to:"/app/settings/profile",children:[s.jsx(Ld,{children:s.jsx(_s,{children:"Edit profile"})}),s.jsx(jS,{children:s.jsx(LS,{children:s.jsx(sS,{})})})]}),s.jsx(dp,{}),s.jsx(jd,{children:s.jsxs(Ld,{children:[s.jsx(Oy,{children:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12px",height:"12px",viewBox:"0 0 24 24",fill:"none",children:s.jsx("circle",{cx:"12",cy:"12",r:"10",fill:m(i.status)})})}),s.jsx(_s,{children:y(i.status)})]})}),s.jsx(dp,{}),s.jsx(jd,{onClick:f,isLogout:!0,children:s.jsx(Ld,{children:s.jsx(_s,{children:"Sign out"})})})]})})]})})},mS=h.div`
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
`,gS=h.div`
  width: 100%;
  height: 8rem;
  background: var(--blue);
  position: relative;
  margin-bottom: 11rem;
`,pS=h.div`
  position: absolute;
  bottom: -9rem;
  left: 2rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;
`,yS=h.div`
  width: 9rem;
  height: 9rem;
  border-radius: 100%;
  background-color: ${({theme:e})=>e.background.secondary};
  padding: 0.8rem;
  position: relative;
`,bS=h.div`
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
`,wS=h.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-xxl);
  font-weight: 600;
  color: ${({theme:e})=>e.text.primary};
   background: var(--blue);
  color: white;
`,vS=h.div`
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
`,xS=h.div`
  width: 100%;
  padding: 1rem;
  user-select: none;
`,MS=h.div`
  width: 100%;
  padding: 0.7rem;
  border-radius: 0.6rem;
  background-color: ${({theme:e})=>e.background.thirdly};
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`,jd=h.div`
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
    background-color: ${({theme:e})=>e.background.secondary};
    
    ${({isLogout:e})=>e&&`
      ${_s} {
        color: #ff99a4;
      }
      ${Oy} {
        color: #ff99a4;
      }
    `}
  }
`,_s=h.div`
  font-size: var(--text-md);
  color: ${({theme:e})=>e.text.thirdly};
  line-height: 1;
`,Oy=h.div`
  color: ${({theme:e})=>e.text.thirdly};
  display: flex;
  align-items: center;
  height: 100%;
  padding-top: 1px;
  
  svg {
    width: 1.4rem;
    height: 1.4rem;
  }
`,dp=h.div`
  width: 100%;
  height: 1px;
  background-color: ${({theme:e})=>e.border.secondary};
  opacity: 0.3;
`,Ld=h.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,jS=h.div`
  width: max-content;
`,LS=h.div`
  svg {
    width: 1.6rem;
    color: ${({theme:e})=>e.text.placeholder};
  }
`,Ln=Object.create(null);Ln.open="0";Ln.close="1";Ln.ping="2";Ln.pong="3";Ln.message="4";Ln.upgrade="5";Ln.noop="6";const Ys=Object.create(null);Object.keys(Ln).forEach(e=>{Ys[Ln[e]]=e});const w0={type:"error",data:"parser error"},By=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Uy=typeof ArrayBuffer=="function",_y=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e&&e.buffer instanceof ArrayBuffer,H0=({type:e,data:a},i,f)=>By&&a instanceof Blob?i?f(a):hp(a,f):Uy&&(a instanceof ArrayBuffer||_y(a))?i?f(a):hp(new Blob([a]),f):f(Ln[e]+(a||"")),hp=(e,a)=>{const i=new FileReader;return i.onload=function(){const f=i.result.split(",")[1];a("b"+(f||""))},i.readAsDataURL(e)};function mp(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}let Sd;function SS(e,a){if(By&&e.data instanceof Blob)return e.data.arrayBuffer().then(mp).then(a);if(Uy&&(e.data instanceof ArrayBuffer||_y(e.data)))return a(mp(e.data));H0(e,!1,i=>{Sd||(Sd=new TextEncoder),a(Sd.encode(i))})}const gp="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",jf=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let e=0;e<gp.length;e++)jf[gp.charCodeAt(e)]=e;const CS=e=>{let a=e.length*.75,i=e.length,f,c=0,d,m,y,b;e[e.length-1]==="="&&(a--,e[e.length-2]==="="&&a--);const x=new ArrayBuffer(a),v=new Uint8Array(x);for(f=0;f<i;f+=4)d=jf[e.charCodeAt(f)],m=jf[e.charCodeAt(f+1)],y=jf[e.charCodeAt(f+2)],b=jf[e.charCodeAt(f+3)],v[c++]=d<<2|m>>4,v[c++]=(m&15)<<4|y>>2,v[c++]=(y&3)<<6|b&63;return x},kS=typeof ArrayBuffer=="function",P0=(e,a)=>{if(typeof e!="string")return{type:"message",data:Yy(e,a)};const i=e.charAt(0);return i==="b"?{type:"message",data:ES(e.substring(1),a)}:Ys[i]?e.length>1?{type:Ys[i],data:e.substring(1)}:{type:Ys[i]}:w0},ES=(e,a)=>{if(kS){const i=CS(e);return Yy(i,a)}else return{base64:!0,data:e}},Yy=(e,a)=>{switch(a){case"blob":return e instanceof Blob?e:new Blob([e]);case"arraybuffer":default:return e instanceof ArrayBuffer?e:e.buffer}},Qy="",TS=(e,a)=>{const i=e.length,f=new Array(i);let c=0;e.forEach((d,m)=>{H0(d,!1,y=>{f[m]=y,++c===i&&a(f.join(Qy))})})},NS=(e,a)=>{const i=e.split(Qy),f=[];for(let c=0;c<i.length;c++){const d=P0(i[c],a);if(f.push(d),d.type==="error")break}return f};function IS(){return new TransformStream({transform(e,a){SS(e,i=>{const f=i.length;let c;if(f<126)c=new Uint8Array(1),new DataView(c.buffer).setUint8(0,f);else if(f<65536){c=new Uint8Array(3);const d=new DataView(c.buffer);d.setUint8(0,126),d.setUint16(1,f)}else{c=new Uint8Array(9);const d=new DataView(c.buffer);d.setUint8(0,127),d.setBigUint64(1,BigInt(f))}e.data&&typeof e.data!="string"&&(c[0]|=128),a.enqueue(c),a.enqueue(i)})}})}let Cd;function gs(e){return e.reduce((a,i)=>a+i.length,0)}function ps(e,a){if(e[0].length===a)return e.shift();const i=new Uint8Array(a);let f=0;for(let c=0;c<a;c++)i[c]=e[0][f++],f===e[0].length&&(e.shift(),f=0);return e.length&&f<e[0].length&&(e[0]=e[0].slice(f)),i}function DS(e,a){Cd||(Cd=new TextDecoder);const i=[];let f=0,c=-1,d=!1;return new TransformStream({transform(m,y){for(i.push(m);;){if(f===0){if(gs(i)<1)break;const b=ps(i,1);d=(b[0]&128)===128,c=b[0]&127,c<126?f=3:c===126?f=1:f=2}else if(f===1){if(gs(i)<2)break;const b=ps(i,2);c=new DataView(b.buffer,b.byteOffset,b.length).getUint16(0),f=3}else if(f===2){if(gs(i)<8)break;const b=ps(i,8),x=new DataView(b.buffer,b.byteOffset,b.length),v=x.getUint32(0);if(v>Math.pow(2,21)-1){y.enqueue(w0);break}c=v*Math.pow(2,32)+x.getUint32(4),f=3}else{if(gs(i)<c)break;const b=ps(i,c);y.enqueue(P0(d?b:Cd.decode(b),a)),f=0}if(c===0||c>e){y.enqueue(w0);break}}}})}const Gy=4;function Ve(e){if(e)return AS(e)}function AS(e){for(var a in Ve.prototype)e[a]=Ve.prototype[a];return e}Ve.prototype.on=Ve.prototype.addEventListener=function(e,a){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(a),this};Ve.prototype.once=function(e,a){function i(){this.off(e,i),a.apply(this,arguments)}return i.fn=a,this.on(e,i),this};Ve.prototype.off=Ve.prototype.removeListener=Ve.prototype.removeAllListeners=Ve.prototype.removeEventListener=function(e,a){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var i=this._callbacks["$"+e];if(!i)return this;if(arguments.length==1)return delete this._callbacks["$"+e],this;for(var f,c=0;c<i.length;c++)if(f=i[c],f===a||f.fn===a){i.splice(c,1);break}return i.length===0&&delete this._callbacks["$"+e],this};Ve.prototype.emit=function(e){this._callbacks=this._callbacks||{};for(var a=new Array(arguments.length-1),i=this._callbacks["$"+e],f=1;f<arguments.length;f++)a[f-1]=arguments[f];if(i){i=i.slice(0);for(var f=0,c=i.length;f<c;++f)i[f].apply(this,a)}return this};Ve.prototype.emitReserved=Ve.prototype.emit;Ve.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]};Ve.prototype.hasListeners=function(e){return!!this.listeners(e).length};const Cl=typeof Promise=="function"&&typeof Promise.resolve=="function"?a=>Promise.resolve().then(a):(a,i)=>i(a,0),en=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),zS="arraybuffer";function $y(e,...a){return a.reduce((i,f)=>(e.hasOwnProperty(f)&&(i[f]=e[f]),i),{})}const RS=en.setTimeout,OS=en.clearTimeout;function kl(e,a){a.useNativeTimers?(e.setTimeoutFn=RS.bind(en),e.clearTimeoutFn=OS.bind(en)):(e.setTimeoutFn=en.setTimeout.bind(en),e.clearTimeoutFn=en.clearTimeout.bind(en))}const BS=1.33;function US(e){return typeof e=="string"?_S(e):Math.ceil((e.byteLength||e.size)*BS)}function _S(e){let a=0,i=0;for(let f=0,c=e.length;f<c;f++)a=e.charCodeAt(f),a<128?i+=1:a<2048?i+=2:a<55296||a>=57344?i+=3:(f++,i+=4);return i}function Zy(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function YS(e){let a="";for(let i in e)e.hasOwnProperty(i)&&(a.length&&(a+="&"),a+=encodeURIComponent(i)+"="+encodeURIComponent(e[i]));return a}function QS(e){let a={},i=e.split("&");for(let f=0,c=i.length;f<c;f++){let d=i[f].split("=");a[decodeURIComponent(d[0])]=decodeURIComponent(d[1])}return a}class GS extends Error{constructor(a,i,f){super(a),this.description=i,this.context=f,this.type="TransportError"}}class F0 extends Ve{constructor(a){super(),this.writable=!1,kl(this,a),this.opts=a,this.query=a.query,this.socket=a.socket,this.supportsBinary=!a.forceBase64}onError(a,i,f){return super.emitReserved("error",new GS(a,i,f)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(a){this.readyState==="open"&&this.write(a)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(a){const i=P0(a,this.socket.binaryType);this.onPacket(i)}onPacket(a){super.emitReserved("packet",a)}onClose(a){this.readyState="closed",super.emitReserved("close",a)}pause(a){}createUri(a,i={}){return a+"://"+this._hostname()+this._port()+this.opts.path+this._query(i)}_hostname(){const a=this.opts.hostname;return a.indexOf(":")===-1?a:"["+a+"]"}_port(){return this.opts.port&&(this.opts.secure&&+(this.opts.port!==443)||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(a){const i=YS(a);return i.length?"?"+i:""}}class $S extends F0{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(a){this.readyState="pausing";const i=()=>{this.readyState="paused",a()};if(this._polling||!this.writable){let f=0;this._polling&&(f++,this.once("pollComplete",function(){--f||i()})),this.writable||(f++,this.once("drain",function(){--f||i()}))}else i()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(a){const i=f=>{if(this.readyState==="opening"&&f.type==="open"&&this.onOpen(),f.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(f)};NS(a,this.socket.binaryType).forEach(i),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const a=()=>{this.write([{type:"close"}])};this.readyState==="open"?a():this.once("open",a)}write(a){this.writable=!1,TS(a,i=>{this.doWrite(i,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const a=this.opts.secure?"https":"http",i=this.query||{};return this.opts.timestampRequests!==!1&&(i[this.opts.timestampParam]=Zy()),!this.supportsBinary&&!i.sid&&(i.b64=1),this.createUri(a,i)}}let Jy=!1;try{Jy=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const ZS=Jy;function JS(){}class HS extends $S{constructor(a){if(super(a),typeof location<"u"){const i=location.protocol==="https:";let f=location.port;f||(f=i?"443":"80"),this.xd=typeof location<"u"&&a.hostname!==location.hostname||f!==a.port}}doWrite(a,i){const f=this.request({method:"POST",data:a});f.on("success",i),f.on("error",(c,d)=>{this.onError("xhr post error",c,d)})}doPoll(){const a=this.request();a.on("data",this.onData.bind(this)),a.on("error",(i,f)=>{this.onError("xhr poll error",i,f)}),this.pollXhr=a}}let Pr=class Qs extends Ve{constructor(a,i,f){super(),this.createRequest=a,kl(this,f),this._opts=f,this._method=f.method||"GET",this._uri=i,this._data=f.data!==void 0?f.data:null,this._create()}_create(){var a;const i=$y(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");i.xdomain=!!this._opts.xd;const f=this._xhr=this.createRequest(i);try{f.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){f.setDisableHeaderCheck&&f.setDisableHeaderCheck(!0);for(let c in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(c)&&f.setRequestHeader(c,this._opts.extraHeaders[c])}}catch{}if(this._method==="POST")try{f.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{f.setRequestHeader("Accept","*/*")}catch{}(a=this._opts.cookieJar)===null||a===void 0||a.addCookies(f),"withCredentials"in f&&(f.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(f.timeout=this._opts.requestTimeout),f.onreadystatechange=()=>{var c;f.readyState===3&&((c=this._opts.cookieJar)===null||c===void 0||c.parseCookies(f.getResponseHeader("set-cookie"))),f.readyState===4&&(f.status===200||f.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof f.status=="number"?f.status:0)},0))},f.send(this._data)}catch(c){this.setTimeoutFn(()=>{this._onError(c)},0);return}typeof document<"u"&&(this._index=Qs.requestsCount++,Qs.requests[this._index]=this)}_onError(a){this.emitReserved("error",a,this._xhr),this._cleanup(!0)}_cleanup(a){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=JS,a)try{this._xhr.abort()}catch{}typeof document<"u"&&delete Qs.requests[this._index],this._xhr=null}}_onLoad(){const a=this._xhr.responseText;a!==null&&(this.emitReserved("data",a),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}};Pr.requestsCount=0;Pr.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",pp);else if(typeof addEventListener=="function"){const e="onpagehide"in en?"pagehide":"unload";addEventListener(e,pp,!1)}}function pp(){for(let e in Pr.requests)Pr.requests.hasOwnProperty(e)&&Pr.requests[e].abort()}const PS=function(){const e=Hy({xdomain:!1});return e&&e.responseType!==null}();class FS extends HS{constructor(a){super(a);const i=a&&a.forceBase64;this.supportsBinary=PS&&!i}request(a={}){return Object.assign(a,{xd:this.xd},this.opts),new Pr(Hy,this.uri(),a)}}function Hy(e){const a=e.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!a||ZS))return new XMLHttpRequest}catch{}if(!a)try{return new en[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const Py=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class qS extends F0{get name(){return"websocket"}doOpen(){const a=this.uri(),i=this.opts.protocols,f=Py?{}:$y(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(f.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(a,i,f)}catch(c){return this.emitReserved("error",c)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=a=>this.onClose({description:"websocket connection closed",context:a}),this.ws.onmessage=a=>this.onData(a.data),this.ws.onerror=a=>this.onError("websocket error",a)}write(a){this.writable=!1;for(let i=0;i<a.length;i++){const f=a[i],c=i===a.length-1;H0(f,this.supportsBinary,d=>{try{this.doWrite(f,d)}catch{}c&&Cl(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const a=this.opts.secure?"wss":"ws",i=this.query||{};return this.opts.timestampRequests&&(i[this.opts.timestampParam]=Zy()),this.supportsBinary||(i.b64=1),this.createUri(a,i)}}const kd=en.WebSocket||en.MozWebSocket;class VS extends qS{createSocket(a,i,f){return Py?new kd(a,i,f):i?new kd(a,i):new kd(a)}doWrite(a,i){this.ws.send(i)}}class XS extends F0{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(a){return this.emitReserved("error",a)}this._transport.closed.then(()=>{this.onClose()}).catch(a=>{this.onError("webtransport error",a)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(a=>{const i=DS(Number.MAX_SAFE_INTEGER,this.socket.binaryType),f=a.readable.pipeThrough(i).getReader(),c=IS();c.readable.pipeTo(a.writable),this._writer=c.writable.getWriter();const d=()=>{f.read().then(({done:y,value:b})=>{y||(this.onPacket(b),d())}).catch(y=>{})};d();const m={type:"open"};this.query.sid&&(m.data=`{"sid":"${this.query.sid}"}`),this._writer.write(m).then(()=>this.onOpen())})})}write(a){this.writable=!1;for(let i=0;i<a.length;i++){const f=a[i],c=i===a.length-1;this._writer.write(f).then(()=>{c&&Cl(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var a;(a=this._transport)===null||a===void 0||a.close()}}const WS={websocket:VS,webtransport:XS,polling:FS},KS=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,eC=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function v0(e){if(e.length>8e3)throw"URI too long";const a=e,i=e.indexOf("["),f=e.indexOf("]");i!=-1&&f!=-1&&(e=e.substring(0,i)+e.substring(i,f).replace(/:/g,";")+e.substring(f,e.length));let c=KS.exec(e||""),d={},m=14;for(;m--;)d[eC[m]]=c[m]||"";return i!=-1&&f!=-1&&(d.source=a,d.host=d.host.substring(1,d.host.length-1).replace(/;/g,":"),d.authority=d.authority.replace("[","").replace("]","").replace(/;/g,":"),d.ipv6uri=!0),d.pathNames=tC(d,d.path),d.queryKey=nC(d,d.query),d}function tC(e,a){const i=/\/{2,9}/g,f=a.replace(i,"/").split("/");return(a.slice(0,1)=="/"||a.length===0)&&f.splice(0,1),a.slice(-1)=="/"&&f.splice(f.length-1,1),f}function nC(e,a){const i={};return a.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(f,c,d){c&&(i[c]=d)}),i}const x0=typeof addEventListener=="function"&&typeof removeEventListener=="function",Gs=[];x0&&addEventListener("offline",()=>{Gs.forEach(e=>e())},!1);class va extends Ve{constructor(a,i){if(super(),this.binaryType=zS,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,a&&typeof a=="object"&&(i=a,a=null),a){const f=v0(a);i.hostname=f.host,i.secure=f.protocol==="https"||f.protocol==="wss",i.port=f.port,f.query&&(i.query=f.query)}else i.host&&(i.hostname=v0(i.host).host);kl(this,i),this.secure=i.secure!=null?i.secure:typeof location<"u"&&location.protocol==="https:",i.hostname&&!i.port&&(i.port=this.secure?"443":"80"),this.hostname=i.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=i.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},i.transports.forEach(f=>{const c=f.prototype.name;this.transports.push(c),this._transportsByName[c]=f}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},i),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=QS(this.opts.query)),x0&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},Gs.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(a){const i=Object.assign({},this.opts.query);i.EIO=Gy,i.transport=a,this.id&&(i.sid=this.id);const f=Object.assign({},this.opts,{query:i,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[a]);return new this._transportsByName[a](f)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const a=this.opts.rememberUpgrade&&va.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const i=this.createTransport(a);i.open(),this.setTransport(i)}setTransport(a){this.transport&&this.transport.removeAllListeners(),this.transport=a,a.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",i=>this._onClose("transport close",i))}onOpen(){this.readyState="open",va.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(a){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",a),this.emitReserved("heartbeat"),a.type){case"open":this.onHandshake(JSON.parse(a.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const i=new Error("server error");i.code=a.data,this._onError(i);break;case"message":this.emitReserved("data",a.data),this.emitReserved("message",a.data);break}}onHandshake(a){this.emitReserved("handshake",a),this.id=a.sid,this.transport.query.sid=a.sid,this._pingInterval=a.pingInterval,this._pingTimeout=a.pingTimeout,this._maxPayload=a.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const a=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+a,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},a),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const a=this._getWritablePackets();this.transport.send(a),this._prevBufferLen=a.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let i=1;for(let f=0;f<this.writeBuffer.length;f++){const c=this.writeBuffer[f].data;if(c&&(i+=US(c)),f>0&&i>this._maxPayload)return this.writeBuffer.slice(0,f);i+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const a=Date.now()>this._pingTimeoutTime;return a&&(this._pingTimeoutTime=0,Cl(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),a}write(a,i,f){return this._sendPacket("message",a,i,f),this}send(a,i,f){return this._sendPacket("message",a,i,f),this}_sendPacket(a,i,f,c){if(typeof i=="function"&&(c=i,i=void 0),typeof f=="function"&&(c=f,f=null),this.readyState==="closing"||this.readyState==="closed")return;f=f||{},f.compress=f.compress!==!1;const d={type:a,data:i,options:f};this.emitReserved("packetCreate",d),this.writeBuffer.push(d),c&&this.once("flush",c),this.flush()}close(){const a=()=>{this._onClose("forced close"),this.transport.close()},i=()=>{this.off("upgrade",i),this.off("upgradeError",i),a()},f=()=>{this.once("upgrade",i),this.once("upgradeError",i)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?f():a()}):this.upgrading?f():a()),this}_onError(a){if(va.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",a),this._onClose("transport error",a)}_onClose(a,i){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),x0&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const f=Gs.indexOf(this._offlineEventListener);f!==-1&&Gs.splice(f,1)}this.readyState="closed",this.id=null,this.emitReserved("close",a,i),this.writeBuffer=[],this._prevBufferLen=0}}}va.protocol=Gy;class aC extends va{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let a=0;a<this._upgrades.length;a++)this._probe(this._upgrades[a])}_probe(a){let i=this.createTransport(a),f=!1;va.priorWebsocketSuccess=!1;const c=()=>{f||(i.send([{type:"ping",data:"probe"}]),i.once("packet",M=>{if(!f)if(M.type==="pong"&&M.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",i),!i)return;va.priorWebsocketSuccess=i.name==="websocket",this.transport.pause(()=>{f||this.readyState!=="closed"&&(v(),this.setTransport(i),i.send([{type:"upgrade"}]),this.emitReserved("upgrade",i),i=null,this.upgrading=!1,this.flush())})}else{const j=new Error("probe error");j.transport=i.name,this.emitReserved("upgradeError",j)}}))};function d(){f||(f=!0,v(),i.close(),i=null)}const m=M=>{const j=new Error("probe error: "+M);j.transport=i.name,d(),this.emitReserved("upgradeError",j)};function y(){m("transport closed")}function b(){m("socket closed")}function x(M){i&&M.name!==i.name&&d()}const v=()=>{i.removeListener("open",c),i.removeListener("error",m),i.removeListener("close",y),this.off("close",b),this.off("upgrading",x)};i.once("open",c),i.once("error",m),i.once("close",y),this.once("close",b),this.once("upgrading",x),this._upgrades.indexOf("webtransport")!==-1&&a!=="webtransport"?this.setTimeoutFn(()=>{f||i.open()},200):i.open()}onHandshake(a){this._upgrades=this._filterUpgrades(a.upgrades),super.onHandshake(a)}_filterUpgrades(a){const i=[];for(let f=0;f<a.length;f++)~this.transports.indexOf(a[f])&&i.push(a[f]);return i}}let rC=class extends aC{constructor(a,i={}){const f=typeof a=="object"?a:i;(!f.transports||f.transports&&typeof f.transports[0]=="string")&&(f.transports=(f.transports||["polling","websocket","webtransport"]).map(c=>WS[c]).filter(c=>!!c)),super(a,f)}};function iC(e,a="",i){let f=e;i=i||typeof location<"u"&&location,e==null&&(e=i.protocol+"//"+i.host),typeof e=="string"&&(e.charAt(0)==="/"&&(e.charAt(1)==="/"?e=i.protocol+e:e=i.host+e),/^(https?|wss?):\/\//.test(e)||(typeof i<"u"?e=i.protocol+"//"+e:e="https://"+e),f=v0(e)),f.port||(/^(http|ws)$/.test(f.protocol)?f.port="80":/^(http|ws)s$/.test(f.protocol)&&(f.port="443")),f.path=f.path||"/";const d=f.host.indexOf(":")!==-1?"["+f.host+"]":f.host;return f.id=f.protocol+"://"+d+":"+f.port+a,f.href=f.protocol+"://"+d+(i&&i.port===f.port?"":":"+f.port),f}const fC=typeof ArrayBuffer=="function",oC=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e.buffer instanceof ArrayBuffer,Fy=Object.prototype.toString,sC=typeof Blob=="function"||typeof Blob<"u"&&Fy.call(Blob)==="[object BlobConstructor]",lC=typeof File=="function"||typeof File<"u"&&Fy.call(File)==="[object FileConstructor]";function q0(e){return fC&&(e instanceof ArrayBuffer||oC(e))||sC&&e instanceof Blob||lC&&e instanceof File}function $s(e,a){if(!e||typeof e!="object")return!1;if(Array.isArray(e)){for(let i=0,f=e.length;i<f;i++)if($s(e[i]))return!0;return!1}if(q0(e))return!0;if(e.toJSON&&typeof e.toJSON=="function"&&arguments.length===1)return $s(e.toJSON(),!0);for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&$s(e[i]))return!0;return!1}function cC(e){const a=[],i=e.data,f=e;return f.data=M0(i,a),f.attachments=a.length,{packet:f,buffers:a}}function M0(e,a){if(!e)return e;if(q0(e)){const i={_placeholder:!0,num:a.length};return a.push(e),i}else if(Array.isArray(e)){const i=new Array(e.length);for(let f=0;f<e.length;f++)i[f]=M0(e[f],a);return i}else if(typeof e=="object"&&!(e instanceof Date)){const i={};for(const f in e)Object.prototype.hasOwnProperty.call(e,f)&&(i[f]=M0(e[f],a));return i}return e}function uC(e,a){return e.data=j0(e.data,a),delete e.attachments,e}function j0(e,a){if(!e)return e;if(e&&e._placeholder===!0){if(typeof e.num=="number"&&e.num>=0&&e.num<a.length)return a[e.num];throw new Error("illegal attachments")}else if(Array.isArray(e))for(let i=0;i<e.length;i++)e[i]=j0(e[i],a);else if(typeof e=="object")for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(e[i]=j0(e[i],a));return e}const dC=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],hC=5;var ye;(function(e){e[e.CONNECT=0]="CONNECT",e[e.DISCONNECT=1]="DISCONNECT",e[e.EVENT=2]="EVENT",e[e.ACK=3]="ACK",e[e.CONNECT_ERROR=4]="CONNECT_ERROR",e[e.BINARY_EVENT=5]="BINARY_EVENT",e[e.BINARY_ACK=6]="BINARY_ACK"})(ye||(ye={}));class mC{constructor(a){this.replacer=a}encode(a){return(a.type===ye.EVENT||a.type===ye.ACK)&&$s(a)?this.encodeAsBinary({type:a.type===ye.EVENT?ye.BINARY_EVENT:ye.BINARY_ACK,nsp:a.nsp,data:a.data,id:a.id}):[this.encodeAsString(a)]}encodeAsString(a){let i=""+a.type;return(a.type===ye.BINARY_EVENT||a.type===ye.BINARY_ACK)&&(i+=a.attachments+"-"),a.nsp&&a.nsp!=="/"&&(i+=a.nsp+","),a.id!=null&&(i+=a.id),a.data!=null&&(i+=JSON.stringify(a.data,this.replacer)),i}encodeAsBinary(a){const i=cC(a),f=this.encodeAsString(i.packet),c=i.buffers;return c.unshift(f),c}}function yp(e){return Object.prototype.toString.call(e)==="[object Object]"}class V0 extends Ve{constructor(a){super(),this.reviver=a}add(a){let i;if(typeof a=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");i=this.decodeString(a);const f=i.type===ye.BINARY_EVENT;f||i.type===ye.BINARY_ACK?(i.type=f?ye.EVENT:ye.ACK,this.reconstructor=new gC(i),i.attachments===0&&super.emitReserved("decoded",i)):super.emitReserved("decoded",i)}else if(q0(a)||a.base64)if(this.reconstructor)i=this.reconstructor.takeBinaryData(a),i&&(this.reconstructor=null,super.emitReserved("decoded",i));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+a)}decodeString(a){let i=0;const f={type:Number(a.charAt(0))};if(ye[f.type]===void 0)throw new Error("unknown packet type "+f.type);if(f.type===ye.BINARY_EVENT||f.type===ye.BINARY_ACK){const d=i+1;for(;a.charAt(++i)!=="-"&&i!=a.length;);const m=a.substring(d,i);if(m!=Number(m)||a.charAt(i)!=="-")throw new Error("Illegal attachments");f.attachments=Number(m)}if(a.charAt(i+1)==="/"){const d=i+1;for(;++i&&!(a.charAt(i)===","||i===a.length););f.nsp=a.substring(d,i)}else f.nsp="/";const c=a.charAt(i+1);if(c!==""&&Number(c)==c){const d=i+1;for(;++i;){const m=a.charAt(i);if(m==null||Number(m)!=m){--i;break}if(i===a.length)break}f.id=Number(a.substring(d,i+1))}if(a.charAt(++i)){const d=this.tryParse(a.substr(i));if(V0.isPayloadValid(f.type,d))f.data=d;else throw new Error("invalid payload")}return f}tryParse(a){try{return JSON.parse(a,this.reviver)}catch{return!1}}static isPayloadValid(a,i){switch(a){case ye.CONNECT:return yp(i);case ye.DISCONNECT:return i===void 0;case ye.CONNECT_ERROR:return typeof i=="string"||yp(i);case ye.EVENT:case ye.BINARY_EVENT:return Array.isArray(i)&&(typeof i[0]=="number"||typeof i[0]=="string"&&dC.indexOf(i[0])===-1);case ye.ACK:case ye.BINARY_ACK:return Array.isArray(i)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class gC{constructor(a){this.packet=a,this.buffers=[],this.reconPack=a}takeBinaryData(a){if(this.buffers.push(a),this.buffers.length===this.reconPack.attachments){const i=uC(this.reconPack,this.buffers);return this.finishedReconstruction(),i}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const pC=Object.freeze(Object.defineProperty({__proto__:null,Decoder:V0,Encoder:mC,get PacketType(){return ye},protocol:hC},Symbol.toStringTag,{value:"Module"}));function ln(e,a,i){return e.on(a,i),function(){e.off(a,i)}}const yC=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class qy extends Ve{constructor(a,i,f){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=a,this.nsp=i,f&&f.auth&&(this.auth=f.auth),this._opts=Object.assign({},f),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const a=this.io;this.subs=[ln(a,"open",this.onopen.bind(this)),ln(a,"packet",this.onpacket.bind(this)),ln(a,"error",this.onerror.bind(this)),ln(a,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...a){return a.unshift("message"),this.emit.apply(this,a),this}emit(a,...i){var f,c,d;if(yC.hasOwnProperty(a))throw new Error('"'+a.toString()+'" is a reserved event name');if(i.unshift(a),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(i),this;const m={type:ye.EVENT,data:i};if(m.options={},m.options.compress=this.flags.compress!==!1,typeof i[i.length-1]=="function"){const v=this.ids++,M=i.pop();this._registerAckCallback(v,M),m.id=v}const y=(c=(f=this.io.engine)===null||f===void 0?void 0:f.transport)===null||c===void 0?void 0:c.writable,b=this.connected&&!(!((d=this.io.engine)===null||d===void 0)&&d._hasPingExpired());return this.flags.volatile&&!y||(b?(this.notifyOutgoingListeners(m),this.packet(m)):this.sendBuffer.push(m)),this.flags={},this}_registerAckCallback(a,i){var f;const c=(f=this.flags.timeout)!==null&&f!==void 0?f:this._opts.ackTimeout;if(c===void 0){this.acks[a]=i;return}const d=this.io.setTimeoutFn(()=>{delete this.acks[a];for(let y=0;y<this.sendBuffer.length;y++)this.sendBuffer[y].id===a&&this.sendBuffer.splice(y,1);i.call(this,new Error("operation has timed out"))},c),m=(...y)=>{this.io.clearTimeoutFn(d),i.apply(this,y)};m.withError=!0,this.acks[a]=m}emitWithAck(a,...i){return new Promise((f,c)=>{const d=(m,y)=>m?c(m):f(y);d.withError=!0,i.push(d),this.emit(a,...i)})}_addToQueue(a){let i;typeof a[a.length-1]=="function"&&(i=a.pop());const f={id:this._queueSeq++,tryCount:0,pending:!1,args:a,flags:Object.assign({fromQueue:!0},this.flags)};a.push((c,...d)=>f!==this._queue[0]?void 0:(c!==null?f.tryCount>this._opts.retries&&(this._queue.shift(),i&&i(c)):(this._queue.shift(),i&&i(null,...d)),f.pending=!1,this._drainQueue())),this._queue.push(f),this._drainQueue()}_drainQueue(a=!1){if(!this.connected||this._queue.length===0)return;const i=this._queue[0];i.pending&&!a||(i.pending=!0,i.tryCount++,this.flags=i.flags,this.emit.apply(this,i.args))}packet(a){a.nsp=this.nsp,this.io._packet(a)}onopen(){typeof this.auth=="function"?this.auth(a=>{this._sendConnectPacket(a)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(a){this.packet({type:ye.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},a):a})}onerror(a){this.connected||this.emitReserved("connect_error",a)}onclose(a,i){this.connected=!1,delete this.id,this.emitReserved("disconnect",a,i),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(a=>{if(!this.sendBuffer.some(f=>String(f.id)===a)){const f=this.acks[a];delete this.acks[a],f.withError&&f.call(this,new Error("socket has been disconnected"))}})}onpacket(a){if(a.nsp===this.nsp)switch(a.type){case ye.CONNECT:a.data&&a.data.sid?this.onconnect(a.data.sid,a.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case ye.EVENT:case ye.BINARY_EVENT:this.onevent(a);break;case ye.ACK:case ye.BINARY_ACK:this.onack(a);break;case ye.DISCONNECT:this.ondisconnect();break;case ye.CONNECT_ERROR:this.destroy();const f=new Error(a.data.message);f.data=a.data.data,this.emitReserved("connect_error",f);break}}onevent(a){const i=a.data||[];a.id!=null&&i.push(this.ack(a.id)),this.connected?this.emitEvent(i):this.receiveBuffer.push(Object.freeze(i))}emitEvent(a){if(this._anyListeners&&this._anyListeners.length){const i=this._anyListeners.slice();for(const f of i)f.apply(this,a)}super.emit.apply(this,a),this._pid&&a.length&&typeof a[a.length-1]=="string"&&(this._lastOffset=a[a.length-1])}ack(a){const i=this;let f=!1;return function(...c){f||(f=!0,i.packet({type:ye.ACK,id:a,data:c}))}}onack(a){const i=this.acks[a.id];typeof i=="function"&&(delete this.acks[a.id],i.withError&&a.data.unshift(null),i.apply(this,a.data))}onconnect(a,i){this.id=a,this.recovered=i&&this._pid===i,this._pid=i,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(a=>this.emitEvent(a)),this.receiveBuffer=[],this.sendBuffer.forEach(a=>{this.notifyOutgoingListeners(a),this.packet(a)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(a=>a()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:ye.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(a){return this.flags.compress=a,this}get volatile(){return this.flags.volatile=!0,this}timeout(a){return this.flags.timeout=a,this}onAny(a){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(a),this}prependAny(a){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(a),this}offAny(a){if(!this._anyListeners)return this;if(a){const i=this._anyListeners;for(let f=0;f<i.length;f++)if(a===i[f])return i.splice(f,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(a){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(a),this}prependAnyOutgoing(a){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(a),this}offAnyOutgoing(a){if(!this._anyOutgoingListeners)return this;if(a){const i=this._anyOutgoingListeners;for(let f=0;f<i.length;f++)if(a===i[f])return i.splice(f,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(a){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const i=this._anyOutgoingListeners.slice();for(const f of i)f.apply(this,a.data)}}}function si(e){e=e||{},this.ms=e.min||100,this.max=e.max||1e4,this.factor=e.factor||2,this.jitter=e.jitter>0&&e.jitter<=1?e.jitter:0,this.attempts=0}si.prototype.duration=function(){var e=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var a=Math.random(),i=Math.floor(a*this.jitter*e);e=(Math.floor(a*10)&1)==0?e-i:e+i}return Math.min(e,this.max)|0};si.prototype.reset=function(){this.attempts=0};si.prototype.setMin=function(e){this.ms=e};si.prototype.setMax=function(e){this.max=e};si.prototype.setJitter=function(e){this.jitter=e};class L0 extends Ve{constructor(a,i){var f;super(),this.nsps={},this.subs=[],a&&typeof a=="object"&&(i=a,a=void 0),i=i||{},i.path=i.path||"/socket.io",this.opts=i,kl(this,i),this.reconnection(i.reconnection!==!1),this.reconnectionAttempts(i.reconnectionAttempts||1/0),this.reconnectionDelay(i.reconnectionDelay||1e3),this.reconnectionDelayMax(i.reconnectionDelayMax||5e3),this.randomizationFactor((f=i.randomizationFactor)!==null&&f!==void 0?f:.5),this.backoff=new si({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(i.timeout==null?2e4:i.timeout),this._readyState="closed",this.uri=a;const c=i.parser||pC;this.encoder=new c.Encoder,this.decoder=new c.Decoder,this._autoConnect=i.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(a){return arguments.length?(this._reconnection=!!a,a||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(a){return a===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=a,this)}reconnectionDelay(a){var i;return a===void 0?this._reconnectionDelay:(this._reconnectionDelay=a,(i=this.backoff)===null||i===void 0||i.setMin(a),this)}randomizationFactor(a){var i;return a===void 0?this._randomizationFactor:(this._randomizationFactor=a,(i=this.backoff)===null||i===void 0||i.setJitter(a),this)}reconnectionDelayMax(a){var i;return a===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=a,(i=this.backoff)===null||i===void 0||i.setMax(a),this)}timeout(a){return arguments.length?(this._timeout=a,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(a){if(~this._readyState.indexOf("open"))return this;this.engine=new rC(this.uri,this.opts);const i=this.engine,f=this;this._readyState="opening",this.skipReconnect=!1;const c=ln(i,"open",function(){f.onopen(),a&&a()}),d=y=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",y),a?a(y):this.maybeReconnectOnOpen()},m=ln(i,"error",d);if(this._timeout!==!1){const y=this._timeout,b=this.setTimeoutFn(()=>{c(),d(new Error("timeout")),i.close()},y);this.opts.autoUnref&&b.unref(),this.subs.push(()=>{this.clearTimeoutFn(b)})}return this.subs.push(c),this.subs.push(m),this}connect(a){return this.open(a)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const a=this.engine;this.subs.push(ln(a,"ping",this.onping.bind(this)),ln(a,"data",this.ondata.bind(this)),ln(a,"error",this.onerror.bind(this)),ln(a,"close",this.onclose.bind(this)),ln(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(a){try{this.decoder.add(a)}catch(i){this.onclose("parse error",i)}}ondecoded(a){Cl(()=>{this.emitReserved("packet",a)},this.setTimeoutFn)}onerror(a){this.emitReserved("error",a)}socket(a,i){let f=this.nsps[a];return f?this._autoConnect&&!f.active&&f.connect():(f=new qy(this,a,i),this.nsps[a]=f),f}_destroy(a){const i=Object.keys(this.nsps);for(const f of i)if(this.nsps[f].active)return;this._close()}_packet(a){const i=this.encoder.encode(a);for(let f=0;f<i.length;f++)this.engine.write(i[f],a.options)}cleanup(){this.subs.forEach(a=>a()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(a,i){var f;this.cleanup(),(f=this.engine)===null||f===void 0||f.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",a,i),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const a=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const i=this.backoff.duration();this._reconnecting=!0;const f=this.setTimeoutFn(()=>{a.skipReconnect||(this.emitReserved("reconnect_attempt",a.backoff.attempts),!a.skipReconnect&&a.open(c=>{c?(a._reconnecting=!1,a.reconnect(),this.emitReserved("reconnect_error",c)):a.onreconnect()}))},i);this.opts.autoUnref&&f.unref(),this.subs.push(()=>{this.clearTimeoutFn(f)})}}onreconnect(){const a=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",a)}}const hf={};function Zs(e,a){typeof e=="object"&&(a=e,e=void 0),a=a||{};const i=iC(e,a.path||"/socket.io"),f=i.source,c=i.id,d=i.path,m=hf[c]&&d in hf[c].nsps,y=a.forceNew||a["force new connection"]||a.multiplex===!1||m;let b;return y?b=new L0(f,a):(hf[c]||(hf[c]=new L0(f,a)),b=hf[c]),i.query&&!a.query&&(a.query=i.queryKey),b.socket(i.path,a)}Object.assign(Zs,{Manager:L0,Socket:qy,io:Zs,connect:Zs});const Vy=g.createContext(void 0),bC=({children:e})=>{const[a,i]=g.useState(null),[f,c]=g.useState(!1),[d,m]=g.useState([]),{user:y,isAuthenticated:b}=gt();g.useEffect(()=>{if(b&&y){const C=localStorage.getItem("token"),I=Zs("https://mendam-server.onrender.com",{auth:{token:C},transports:["websocket","polling"],reconnection:!0,reconnectionAttempts:5,reconnectionDelay:1e3});return I.on("connect",()=>{c(!0)}),I.on("disconnect",A=>{c(!1)}),I.on("connect_error",A=>{c(!1)}),I.on("reconnect",A=>{c(!0)}),I.on("reconnect_error",A=>{}),I.on("user_online",A=>{m(G=>[...G.filter(_=>_!==A.userId),A.userId])}),I.on("user_offline",A=>{m(G=>G.filter(_=>_!==A.userId))}),I.on("user_status_change",A=>{}),I.on("new_direct_message",A=>{window.dispatchEvent(new CustomEvent("new_direct_message",{detail:A}))}),I.on("new_group_message",A=>{window.dispatchEvent(new CustomEvent("new_group_message",{detail:A}))}),I.on("user_typing_start_direct",A=>{window.dispatchEvent(new CustomEvent("user_typing_start_direct",{detail:A}))}),I.on("user_typing_stop_direct",A=>{window.dispatchEvent(new CustomEvent("user_typing_stop_direct",{detail:A}))}),I.on("user_typing_start_group",A=>{window.dispatchEvent(new CustomEvent("user_typing_start_group",{detail:A}))}),I.on("user_typing_stop_group",A=>{window.dispatchEvent(new CustomEvent("user_typing_stop_group",{detail:A}))}),I.on("message_read_receipt",A=>{window.dispatchEvent(new CustomEvent("message_read_receipt",{detail:A}))}),I.on("group_member_joined",A=>{window.dispatchEvent(new CustomEvent("group_member_joined",{detail:A}))}),I.on("group_member_left",A=>{window.dispatchEvent(new CustomEvent("group_member_left",{detail:A}))}),I.on("notification",A=>{window.dispatchEvent(new CustomEvent("notification",{detail:A}))}),I.on("new_friend_request",A=>{window.dispatchEvent(new CustomEvent("new_friend_request",{detail:A}))}),I.on("friend_request_accepted",A=>{window.dispatchEvent(new CustomEvent("friend_request_accepted",{detail:A}))}),i(I),()=>{I.close(),i(null),c(!1),m([])}}else a&&(a.close(),i(null),c(!1),m([]))},[b,y]);const N={socket:a,isConnected:f,onlineUsers:d,joinGroup:C=>{a&&f?a.emit("join_group",C):console.warn("Cannot join group - socket not connected")},leaveGroup:C=>{a&&f?a.emit("leave_group",C):console.warn("Cannot leave group - socket not connected")},sendDirectMessage:(C,E,I="text")=>{a&&f?a.emit("send_direct_message",{recipientId:C,content:E,type:I}):console.warn("Cannot send direct message - socket not connected")},sendGroupMessage:(C,E,I="text")=>{a&&f?a.emit("send_group_message",{groupId:C,content:E,type:I}):console.warn("Cannot send group message - socket not connected")},updateStatus:C=>{a&&f?a.emit("status_update",C):console.warn("❌ Cannot update status - socket not connected")}};return s.jsx(Vy.Provider,{value:N,children:e})},Jf=()=>{const e=g.useContext(Vy);if(!e)throw new Error("useSocket must be used within a SocketProvider");return e},Xy=g.createContext(void 0),wC=({children:e})=>{const[a,i]=g.useState([]),[f,c]=g.useState([]),[d,m]=g.useState(!1),[y,b]=g.useState(null),{isAuthenticated:x,user:v}=gt(),{socket:M}=Jf();g.useEffect(()=>{x&&v&&(j(),k())},[x,v]),g.useEffect(()=>{if(!M||!x)return;const L=O=>{k()},R=O=>{j(),k()};return M.on("new_friend_request",L),M.on("friend_request_accepted",R),()=>{M.off("new_friend_request",L),M.off("friend_request_accepted",R)}},[M,x]);const j=async()=>{try{const L=await ya.getFriends();L.success&&i(L.data.friends||[])}catch(L){b(L.message)}},k=async()=>{try{const L=await ya.getFriendRequests();L.success&&c(L.data.friendRequests||[])}catch(L){b(L.message)}},_={friends:a,friendRequests:f,loading:d,error:y,loadFriends:j,loadFriendRequests:k,sendFriendRequest:async L=>{try{b(null),(await ya.sendFriendRequest(L)).success}catch(R){throw b(R.message),R}},acceptFriendRequest:async L=>{try{b(null),(await ya.acceptFriendRequest(L)).success&&(c(O=>O.filter(q=>q._id!==L)),await j())}catch(R){throw b(R.message),R}},declineFriendRequest:async L=>{try{b(null),(await ya.declineFriendRequest(L)).success&&c(O=>O.filter(q=>q._id!==L))}catch(R){throw b(R.message),R}},removeFriend:async L=>{try{b(null),(await ya.removeFriend(L)).success&&i(O=>O.filter(q=>q.friendId._id!==L))}catch(R){throw b(R.message),R}},blockUser:async L=>{try{b(null),(await ya.blockUser(L)).success&&i(O=>O.filter(q=>q.friendId._id!==L))}catch(R){throw b(R.message),R}},searchUsers:async L=>{try{b(null);const R=await ya.searchUsers(L);return R.success?R.data.users||[]:[]}catch(R){return b(R.message),[]}}};return s.jsx(Xy.Provider,{value:_,children:e})},Hn=()=>{const e=g.useContext(Xy);if(!e)throw new Error("useFriends must be used within a FriendsProvider");return e},Wy=g.createContext(void 0),vC=({children:e})=>{const[a,i]=g.useState({}),[f,c]=g.useState(null),{user:d,isAuthenticated:m}=gt(),{socket:y,sendDirectMessage:b}=Jf();g.useEffect(()=>{if(!y||!m)return;const C=I=>{const A={_id:I.messageId||`temp_${Date.now()}`,senderId:{_id:I.senderId,username:I.senderUsername,fullName:I.senderFullName||I.senderUsername,avatar:I.senderAvatar},content:I.content,type:I.type,createdAt:I.timestamp,isEdited:!1,readBy:[]};i(G=>{const _=G[I.senderId];return{...G,[I.senderId]:{userId:I.senderId,messages:[...(_==null?void 0:_.messages)||[],A],hasMore:(_==null?void 0:_.hasMore)||!1,loading:!1}}})},E=I=>{C(I.detail)};return window.addEventListener("new_direct_message",E),()=>{window.removeEventListener("new_direct_message",E)}},[y,m]);const x=g.useCallback(async(C,E=1)=>{var I;try{i(G=>{var _;return{...G,[C]:{userId:C,messages:((_=G[C])==null?void 0:_.messages)||[],hasMore:!0,loading:!0}}});const A=await ud.getDirectMessages(C,E,50);if(A.success){const G=A.data.messages||[],_=((I=A.data.pagination)==null?void 0:I.hasMore)||!1;i(L=>{var R;return{...L,[C]:{userId:C,messages:E===1?G:[...G,...((R=L[C])==null?void 0:R.messages)||[]],hasMore:_,loading:!1}}})}}catch{i(G=>{var _;return{...G,[C]:{userId:C,messages:((_=G[C])==null?void 0:_.messages)||[],hasMore:!1,loading:!1}}})}},[]),v=g.useCallback(async(C,E,I="text")=>{try{const A={_id:`temp_${Date.now()}`,senderId:{_id:(d==null?void 0:d.id)||"",username:(d==null?void 0:d.username)||"",fullName:(d==null?void 0:d.fullName)||"",avatar:d==null?void 0:d.avatar},content:E,type:I,createdAt:new Date,isEdited:!1,readBy:[]};i(_=>{var L,R;return{..._,[C]:{userId:C,messages:[...((L=_[C])==null?void 0:L.messages)||[],A],hasMore:((R=_[C])==null?void 0:R.hasMore)||!1,loading:!1}}}),y&&b(C,E,I);const G=await ud.sendDirectMessage(C,E,I);if(G.success){const _=G.data.message;i(L=>{var R,O;return{...L,[C]:{userId:C,messages:[...((R=L[C])==null?void 0:R.messages.filter(q=>q._id!==A._id))||[],_],hasMore:((O=L[C])==null?void 0:O.hasMore)||!1,loading:!1}}})}}catch(A){throw i(G=>{var _;return{...G,[C]:{...G[C],messages:((_=G[C])==null?void 0:_.messages.filter(L=>L._id!==`temp_${Date.now()}`))||[]}}}),A}},[y,b,d]),M=g.useCallback(async C=>{try{(await ud.deleteMessage(C)).success&&i(I=>{const A={...I};return Object.keys(A).forEach(G=>{A[G]={...A[G],messages:A[G].messages.filter(_=>_._id!==C)}}),A})}catch(E){throw E}},[]),j=g.useCallback((C,E)=>{!y||!d||(y.emit("message_read",{messageId:E,senderId:C}),i(I=>{var A;return{...I,[C]:{...I[C],messages:((A=I[C])==null?void 0:A.messages.map(G=>G._id===E?{...G,readBy:[...G.readBy.filter(_=>_.userId!==d.id),{userId:d.id,readAt:new Date}]}:G))||[]}}}))},[y,d]),k=g.useCallback(C=>{c(C)},[]),N={conversations:a,currentConversation:f,setCurrentConversation:k,loadMessages:x,sendMessage:v,deleteMessage:M,markAsRead:j};return s.jsx(Wy.Provider,{value:N,children:e})},er=()=>{const e=g.useContext(Wy);if(!e)throw new Error("useMessages must be used within a MessagesProvider");return e},xC=({isNotificationsOpen:e=!1,onClose:a})=>{const i=g.useRef(null),{friendRequests:f,acceptFriendRequest:c,declineFriendRequest:d,loadFriendRequests:m}=Hn(),{setCurrentConversation:y}=er();Yf(),g.useEffect(()=>{const v=setInterval(()=>{f.length===0&&m()},7e3);return()=>clearInterval(v)},[f.length,m]),g.useEffect(()=>{const v=M=>{i.current&&!i.current.contains(M.target)&&(a==null||a())};return e&&document.addEventListener("mousedown",v),()=>{document.removeEventListener("mousedown",v)}},[e,a]);const b=async v=>{try{await c(v),console.log("✅ Friend request accepted!")}catch(M){console.error("Failed to accept friend request:",M)}},x=async v=>{try{await d(v),console.log("❌ Friend request declined")}catch(M){console.error("Failed to decline friend request:",M)}};return s.jsx(MC,{ref:i,children:e&&s.jsxs(jC,{children:[s.jsxs(LC,{children:[s.jsx("h4",{children:"Friend Requests"}),s.jsx(SC,{onClick:a,children:s.jsx(Df,{})})]}),f.length===0?s.jsx(CC,{children:s.jsx(kC,{children:"No pending friend requests"})}):s.jsx(EC,{children:f.map(v=>s.jsxs(TC,{children:[s.jsxs(NC,{children:[s.jsx(bt,{image:v.friendId.avatar,userName:v.friendId.fullName,size:35}),s.jsxs(IC,{children:[s.jsx(DC,{children:v.friendId.fullName}),s.jsxs(AC,{children:["@",v.friendId.username]})]})]}),s.jsxs(zC,{children:[s.jsx(bp,{accept:!0,onClick:()=>b(v._id),title:"Accept",children:s.jsx(Z5,{})}),s.jsx(bp,{onClick:()=>x(v._id),title:"Decline",children:s.jsx(Df,{})})]})]},v._id))}),f.length>0&&s.jsx(RC,{children:s.jsxs(OC,{children:[f.length," pending request",f.length!==1?"s":""]})})]})})},MC=h.div`
  position: relative;
  width: 94%;
`;Tt`
0% {
  transform: rotate(-10deg);
}
50% {
  transform: rotate(10deg);
}
100% {
  transform: rotate(0);
}
`;h.div`
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
`;const jC=h.div`
  position: absolute;
  bottom: 11rem;
  left: 3%;
  width: 100%;
  max-height: 50rem;
  background-color: ${({theme:e})=>e.background.secondary};
  border: 1px solid ${({theme:e})=>e.border.primary};
  border-radius: 1rem;
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  z-index: 10000;

  @media (max-width: 700px) {
    bottom: 8rem;
  }
`,LC=h.div`
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
`,SC=h.button`
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
`,CC=h.div`
  padding: 3rem 1.5rem;
  text-align: center;
`,kC=h.div`
  color: ${({theme:e})=>e.text.placeholder};
  font-size: var(--text-md);
`,EC=h.div`
  max-height: 40rem;
  overflow-y: auto;
`,TC=h.div`
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
`,NC=h.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
  min-width: 0;
`,IC=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  min-width: 0;
`,DC=h.div`
  font-size: var(--text-md);
  color: ${({theme:e})=>e.text.primary};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,AC=h.div`
  font-size: var(--text-sm);
  color: ${({theme:e})=>e.text.secondary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;h.div`
  font-size: var(--text-xs);
  color: ${({theme:e})=>e.text.placeholder};
`;const zC=h.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,bp=h.button`
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
`,RC=h.div`
  padding: 1rem 1.5rem;
  border-top: 1px solid ${({theme:e})=>e.border.secondary};
  text-align: center;
`,OC=h.div`
  font-size: var(--text-sm);
  color: ${({theme:e})=>e.text.placeholder};
`,Ky=({})=>{const[e,a]=g.useState(!1),[i,f]=g.useState(!1),[c,d]=g.useState(!1),{friendRequests:m}=Hn(),y=cl(),{user:b,logout:x}=gt(),v=()=>{d(!1)},M=()=>{f(!e),a(k=>!k)},j=async()=>{try{await x()}catch(k){console.error("Logout failed:",k)}};return b?s.jsx(s.Fragment,{children:s.jsxs(BC,{children:[s.jsx(UC,{children:s.jsx(_C,{children:window.innerWidth<=700?s.jsx(s.Fragment,{children:s.jsxs($C,{children:[s.jsx(ys,{isActive:y.pathname==="/app/@me",children:s.jsxs($e,{to:"/app/@me",children:[s.jsx(Ed,{children:s.jsx(f9,{})}),s.jsx(bs,{children:s.jsx("span",{children:"Home"})})]})}),s.jsxs(ys,{isActive:e,onClick:M,children:[s.jsx(ZC,{isActive:y.pathname==="/app/friends",children:b.avatar?s.jsx("img",{src:b.avatar,alt:b.fullName}):s.jsx("div",{className:"placeholder",children:b.fullName.charAt(0).toUpperCase()})}),s.jsx(bs,{children:s.jsx("span",{children:"Profile"})})]}),s.jsxs(ys,{isActive:c,onClick:()=>d(!0),children:[s.jsxs(Ed,{children:[s.jsx(rp,{}),s.jsx("div",{className:"friend-request-length",children:m.length})]}),s.jsx(bs,{children:s.jsx("span",{children:"Notifications"})})]}),s.jsx(ys,{isActive:y.pathname.startsWith("/app/settings"),children:s.jsxs($e,{to:"/app/settings/profile",children:[s.jsx(Ed,{children:s.jsx(fp,{})}),s.jsx(bs,{children:s.jsx("span",{children:"Settings"})})]})})]})}):s.jsxs(s.Fragment,{children:[s.jsx(YC,{onClick:M,children:s.jsx(bt,{image:b.avatar,userName:b.fullName,status:b.status,showStatus:!0,showStatusCircle:!0,showUserName:!0})}),s.jsxs(QC,{children:[s.jsxs(HC,{onClick:()=>d(!0),children:[s.jsx(rp,{}),s.jsx("div",{className:"friend-request-length",children:m.length})]}),s.jsx(GC,{children:s.jsx($e,{to:"/app/settings/profile",children:s.jsx(fp,{})})})]})]})})}),s.jsx(hS,{isOpen:e,shouldAnimate:i,user:b,onLogout:j,onClose:()=>a(!1)}),s.jsx(xC,{onClose:v,isNotificationsOpen:c})]})}):null},BC=h.div`
  width: 100%;
  position: relative;
`,UC=h.div`
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
`,_C=h.div`
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
`,YC=h.div`
  width: max-content;
  padding-right: 2rem;
  border-radius: 3rem;
  padding: 0.5rem;
  padding-right: 2rem;
  cursor: pointer;
  &:hover {
    background-color: ${({theme:e})=>e.background.primary};
  }
`,QC=h.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,GC=h.div`
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
`;const $C=h.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  padding: 0.6rem 0;
`,ys=h.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${({isActive:e})=>e?({theme:a})=>a.text.primary:({theme:a})=>a.text.placeholder};

  a {
    color: ${({isActive:e})=>e?({theme:a})=>a.text.primary:({theme:a})=>a.text.placeholder};
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`,Ed=h.div`
  position: relative;
  .friend-request-length {
     position: absolute;
    top: -3px;
    right: -3px;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 3rem;
    background-color: var(--blue);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
    font-size: 9px;
  }
  svg {
    color: inherit;
    width: 2.4rem;
  }
`,ZC=h.div`
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
    font-weight: 500;
  }
`,bs=h.div`
  color: inherit;
  span {
    font-size: var(--text-xxs);
    line-height: 1;
  }
`,JC=Tt`
0% {
  transform: rotate(-10deg);
}
50% {
  transform: rotate(10deg);
}
100% {
  transform: rotate(0);
}
`,HC=h.button`
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
.friend-request-length {
    position: absolute;
    top: 0;
    right: 0;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 3rem;
    background-color: var(--blue);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
    font-size: 9px;
  }
  &:hover {
    /* background-color: ${({theme:e})=>e.background.primary}; */
    color: var(--blue);
    svg {
      animation: ${JC} 0.3s ease-in;
    }
  }

  svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`,PC=({onClick:e,isOpen:a,user:i})=>{if(!a)return null;const f=m=>new Date(m).toLocaleDateString("en-US",{month:"long",year:"numeric"}),c=()=>i.isOnline?i.status==="idle"?"Idle":"Online":"Offline",d=()=>i.isOnline?i.status==="idle"?"#f2c100":"#43a25a":"#6b7280";return s.jsx(s.Fragment,{children:s.jsx(FC,{children:s.jsxs(qC,{children:[s.jsx(XC,{children:s.jsxs(WC,{children:[s.jsxs(KC,{children:[s.jsx(t7,{children:i.avatar?s.jsx("img",{src:i.avatar,alt:i.fullName}):s.jsx(n7,{children:i.fullName.charAt(0).toUpperCase()})}),s.jsx(e7,{})]}),s.jsxs(a7,{children:[s.jsx("h4",{children:i.fullName.substring(0,10)}),s.jsxs("span",{children:["@",i.username]}),s.jsxs(r7,{children:[s.jsx(i7,{color:d()}),s.jsx(f7,{children:c()})]})]})]})}),s.jsxs(o7,{children:[s.jsx(s7,{children:s.jsxs(l7,{children:[s.jsx(wp,{children:"Personal Info"}),s.jsx(wp,{children:"Mutual Friends"})]})}),s.jsxs(c7,{children:[s.jsxs(Td,{children:[s.jsx(Nd,{children:s.jsx(y5,{})}),s.jsxs(Id,{children:["@",i.username]})]}),i.jobTitle&&s.jsxs(Td,{children:[s.jsx(Nd,{children:s.jsx(c5,{})}),s.jsx(Id,{children:i.jobTitle})]}),s.jsxs(Td,{children:[s.jsx(Nd,{children:s.jsx(d5,{})}),s.jsxs(Id,{children:["Joined ",f(i.lastSeen)]})]})]}),i.biography&&s.jsx(u7,{children:s.jsx("p",{children:i.biography})})]}),s.jsx(VC,{onClick:e,children:s.jsx($0,{})})]})})})},FC=h.div`
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
  padding: 1.5rem;
`,qC=h.div`
  width: 100%;
  height: 50rem;
  max-width: 70rem;
  background-color: ${({theme:e})=>e.background.secondary};
  border-radius: 2rem;
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  position: relative;
  border: 1px solid ${({theme:e})=>e.border.primary};
`,VC=h.div`
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
`,XC=h.div`
  width: 100%;
  height: 13rem;
  background: var(--blue);
  margin-bottom: 18rem;
  position: relative;
`,WC=h.div`
  position: absolute;
  bottom: -16rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`,KC=h.div`
  width: 15rem;
  height: 15rem;
  border-radius: 100%;
  background-color: var(--blue);
  padding: 1rem;
  position: relative;
`,e7=h.div`
  width: 135%;
  height: 7rem;
  border-radius: 3rem;
  background-color: ${({theme:e})=>e.background.secondary};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
`,t7=h.div`
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
`,n7=h.div`
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
`,a7=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
  
  h4 {
    width: max-content;
    font-size: var(--text-xxl);
    line-height: 1;
    color: ${({theme:e})=>e.text.primary};
    font-weight: 500;
    text-align: center;
  }
  
  span {
    width: max-content;
    font-size: var(--text-md);
    line-height: 1;
    color: ${({theme:e})=>e.text.secondary};
  }
`,r7=h.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,i7=h.div`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background-color: ${({color:e})=>e};
`,f7=h.span`
  font-size: var(--text-sm);
  color: ${({theme:e})=>e.text.secondary};
  text-transform: lowercase;
`,o7=h.div`
  width: 100%;
  max-height: 19rem;
  overflow: auto;
`,s7=h.div`
  background-color: ${({theme:e})=>e.background.secondary};
  border-bottom: 1px solid ${({theme:e})=>e.border.secondary};
  margin: 0 2rem;
  position: sticky;
  top: 0;
`,l7=h.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
`,wp=h.li`
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
`,c7=h.div`
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
`,u7=h.div`
  padding: 0 2rem 2rem;
  
  p {
    font-size: var(--text-md);
    color: ${({theme:e})=>e.text.thirdly};
    line-height: 1.6;
  }
`,Ma=({items:e=[],top:a,left:i,right:f,bottom:c,isOpen:d=!1,onClose:m})=>{const y=g.useRef(null);return g.useEffect(()=>{const b=x=>{y.current&&!y.current.contains(x.target)&&m()};return d&&document.addEventListener("mousedown",b),()=>{document.removeEventListener("mousedown",b)}},[d,m]),s.jsx(d7,{ref:y,bottom:c,left:i,right:f,top:a,isOpen:d,children:s.jsx(h7,{children:s.jsx(m7,{isOpen:d,children:e.map((b,x)=>s.jsxs(g7,{isDanger:b.danger,onClick:b.onClick,children:[b.icon&&s.jsx(p7,{isDanger:b.danger,children:b.icon}),s.jsx(y7,{isDanger:b.danger,children:s.jsx("span",{children:b.label})})]},x))})})})},d7=h.div`
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
`,h7=h.div`
  width: 100%;
  height: max-content;
`,m7=h.div`
  transform: ${({isOpen:e})=>e?"translateY(0)":"translateY(-100%)"};
  background-color: ${({theme:e})=>e.background.thirdly};
  border-radius: 8px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  transition: transform 0.2s ease;
`,g7=h.div`
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
`,p7=h.div`
  color: ${({isDanger:e})=>e?"#ff99a4":({theme:a})=>a.text.primary};
  display: flex;
  align-items: center;
  
  svg {
    width: 1.6rem;
  }
`,y7=h.div`
  span {
    font-size: var(--text-md);
    color: ${({isDanger:e})=>e?"#ff99a4":({theme:a})=>a.text.primary};
  }
`,e3=g.createContext(void 0),b7=({children:e})=>{const[a,i]=g.useState(!1),f=()=>i(!0),c=()=>i(!1);return s.jsx(e3.Provider,{value:{isChatOpen:a,setIsChatOpen:i,openChat:f,closeChat:c},children:e})},li=()=>{const e=g.useContext(e3);if(!e)throw new Error("useMobileChat must be used within a MobileChatProvider");return e},w7=({recipient:e})=>{const[a,i]=g.useState(!1),[f,c]=g.useState(!1),{removeFriend:d,blockUser:m}=Hn(),{setCurrentConversation:y}=er(),{closeChat:b}=li(),x=()=>{i(!1)},v=()=>{c(!0)},M=()=>{b&&b()},j=async()=>{try{await d(e._id),y(null),c(!1)}catch(I){console.error("Failed to remove friend:",I)}},k=async()=>{try{await m(e._id),y(null),c(!1)}catch(I){console.error("Failed to block user:",I)}},N=()=>{alert("Clear messages functionality not implemented yet"),c(!1)},C=[{label:"View Profile",icon:s.jsx(J0,{}),onClick:()=>{i(!0),c(!1)}},{label:"Clear messages",icon:s.jsx(Df,{}),onClick:N},{label:"Remove Friend",icon:s.jsx(Ay,{}),onClick:j},{label:"Block User",icon:s.jsx(m9,{}),danger:!0,onClick:k}],E=()=>e.isOnline?e.status==="idle"?"idle":"online":"offline";return s.jsxs(s.Fragment,{children:[s.jsxs(v7,{children:[s.jsx(x7,{onClick:M,children:s.jsx(Ty,{})}),s.jsx(M7,{onClick:()=>i(!0),children:s.jsx(bt,{image:e.avatar,showStatus:!0,showStatusCircle:!0,showUserName:!0,userName:e.fullName,status:E()})}),s.jsx(j7,{children:s.jsx(L7,{onClick:v,children:s.jsx(Ey,{})})}),s.jsx(Ma,{onClose:()=>c(!1),isOpen:f,right:"0",top:"100",items:C})]}),s.jsx(PC,{isOpen:a,onClick:x,user:e})]})},v7=h.header`
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
`,x7=h.button`
  display: none;
  background: none;
  border: none;
  color: ${({theme:e})=>e.text.primary};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: ${({theme:e})=>e.background.primary};
  }
  
  svg {
    width: 2.4rem;
    height: 2.4rem;
  }
  
  @media (max-width: 700px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,M7=h.div`
  width: max-content;
  border-radius: 3rem;
  cursor: pointer;
  padding: 0.7em 2rem 0.7em 0.7em;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: background-color 0.2s ease;
  /* flex: 1; */
  
  &:hover {
    background-color: ${({theme:e})=>e.background.primary};
  }
  
  @media (max-width: 700px) {
    padding: 0.7em 1rem 0.7em 0.7em;
  }
`,j7=h.div`
  width: max-content;
  display: flex;
  align-items: center;
  gap: 2rem;
`,L7=h.div`
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
`,S7=({group:e,memberCount:a,userRole:i,isOpen:f,onClose:c})=>{const[d,m]=g.useState(!1),[y,b]=g.useState(e.name),[x,v]=g.useState(e.description||""),M=i==="admin"||i==="moderator",j=async()=>{try{console.log("Saving changes:",{name:y,description:x}),m(!1)}catch(C){console.error("Failed to update group:",C)}},k=()=>{b(e.name),v(e.description||""),m(!1)},N=C=>new Date(C).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return s.jsx(Zf,{title:d?"Edit Group Info":"Group Info",isOpen:f,onClose:c,children:s.jsxs(C7,{children:[s.jsxs(k7,{children:[s.jsx(E7,{children:e.avatar?s.jsx(bt,{image:e.avatar,userName:e.name,size:80,isGroup:!0}):s.jsx(T7,{children:s.jsx(sp,{})})}),d?s.jsxs(R7,{children:[s.jsxs(vp,{children:[s.jsx(xp,{children:"Group Name"}),s.jsx(O7,{type:"text",value:y,onChange:C=>b(C.target.value),placeholder:"Enter group name"})]}),s.jsxs(vp,{children:[s.jsx(xp,{children:"Description"}),s.jsx(B7,{value:x,onChange:C=>v(C.target.value),placeholder:"Enter group description (optional)",rows:3})]}),s.jsxs(U7,{children:[s.jsx(yt,{variant:"cancel",title:"Cancel",onClick:k}),s.jsx(yt,{variant:"primary",title:"Save Changes",onClick:j})]})]}):s.jsxs(N7,{children:[s.jsxs(I7,{children:[s.jsx(D7,{children:e.name}),M&&s.jsx(A7,{onClick:()=>m(!0),children:s.jsx(p9,{})})]}),e.description&&s.jsx(z7,{children:e.description})]})]}),!d&&s.jsxs(_7,{children:[s.jsxs(ws,{children:[s.jsx(vs,{children:s.jsx(sp,{})}),s.jsxs(xs,{children:[s.jsx(Ms,{children:"Members"}),s.jsx(js,{children:a})]})]}),s.jsxs(ws,{children:[s.jsx(vs,{children:s.jsx(_5,{})}),s.jsxs(xs,{children:[s.jsx(Ms,{children:"Created"}),s.jsx(js,{children:N(e.createdAt)})]})]}),s.jsxs(ws,{children:[s.jsx(vs,{children:e.isPrivate?s.jsx(c9,{}):s.jsx(r9,{})}),s.jsxs(xs,{children:[s.jsx(Ms,{children:"Type"}),s.jsx(js,{children:e.isPrivate?"Private Group":"Public Group"})]})]}),s.jsxs(ws,{children:[s.jsx(vs,{children:s.jsx(J0,{})}),s.jsxs(xs,{children:[s.jsx(Ms,{children:"Created by"}),s.jsx(js,{children:e.createdBy.fullName})]})]})]})]})})},C7=h.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,k7=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
`,E7=h.div`
  position: relative;
`,T7=h.div`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.background.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 4rem;
    height: 4rem;
    color: ${({theme:e})=>e.text.primary};
  }
`,N7=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
`,I7=h.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,D7=h.h2`
  font-size: var(--text-xxl);
  color: ${({theme:e})=>e.text.primary};
  font-weight: 600;
  margin: 0;
`,A7=h.button`
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
`,z7=h.p`
  font-size: var(--text-md);
  color: ${({theme:e})=>e.text.secondary};
  line-height: 1.5;
  margin: 0;
`,R7=h.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,vp=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`,xp=h.label`
  font-size: var(--text-sm);
  font-weight: 600;
  color: ${({theme:e})=>e.text.secondary};
`,O7=h.input`
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
`,B7=h.textarea`
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
`,U7=h.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
`,_7=h.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,ws=h.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background-color: ${({theme:e})=>e.background.secondary};
  border-radius: 0.8rem;
`,vs=h.div`
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
`,xs=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`,Ms=h.div`
  font-size: var(--text-sm);
  color: ${({theme:e})=>e.text.placeholder};
  font-weight: 500;
`,js=h.div`
  font-size: var(--text-md);
  color: ${({theme:e})=>e.text.primary};
  font-weight: 600;
`;h.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;h.div`
  h4 {
    font-size: var(--text-sm);
    color: ${({theme:e})=>e.text.placeholder};
    font-weight: 600;
    margin: 0 0 0.5rem 0;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`;h.div`
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: var(--text-sm);
  color: ${({theme:e})=>e.text.secondary};
  background-color: ${({theme:e})=>e.background.secondary};
  padding: 0.8rem 1rem;
  border-radius: 0.6rem;
  word-break: break-all;
`;const t3=g.createContext(void 0),Y7=({children:e})=>{const[a,i]=g.useState([]),[f,c]=g.useState({}),[d,m]=g.useState({}),[y,b]=g.useState(null),[x,v]=g.useState(!1),[M,j]=g.useState(null),{user:k,isAuthenticated:N}=gt(),{socket:C,joinGroup:E,leaveGroup:I}=Jf(),A=g.useRef(!1),G=g.useRef(new Set),_=g.useCallback(async()=>{var V,U;if(!x)try{v(!0),j(null),console.log("🔄 Loading groups...");const P=await Mn.getUserGroups();P.success&&(i(P.data.chatGroups||[]),A.current=!0,(V=P.data.chatGroups)==null||V.forEach(F=>{E&&E(F._id)}),console.log("✅ Groups loaded successfully:",((U=P.data.chatGroups)==null?void 0:U.length)||0))}catch(P){console.error("❌ Load groups error:",P),j(P.message)}finally{v(!1)}},[E,x]);g.useEffect(()=>{N&&!A.current&&!x&&_()},[N]),g.useEffect(()=>{if(!C||!N)return;const V=F=>{if(console.log("📨 New group message received:",F),F.senderId===(k==null?void 0:k.id)&&G.current.has(F.content)){console.log("🚫 Skipping own message from socket (already added optimistically)"),G.current.delete(F.content);return}const W={_id:F.messageId||`temp_${Date.now()}`,senderId:{_id:F.senderId,username:F.senderUsername,fullName:F.senderFullName||F.senderUsername,avatar:F.senderAvatar},chatGroupId:F.groupId,content:F.content,type:F.type,createdAt:F.timestamp,isEdited:!1,readBy:[]};m(te=>{const fe=te[F.groupId],re=(fe==null?void 0:fe.messages)||[];return re.some(xe=>xe._id===W._id||xe.senderId._id===W.senderId._id&&xe.content===W.content&&Math.abs(new Date(xe.createdAt).getTime()-new Date(W.createdAt).getTime())<5e3)?(console.log("🚫 Message already exists, skipping"),te):{...te,[F.groupId]:{groupId:F.groupId,messages:[...re,W],hasMore:(fe==null?void 0:fe.hasMore)||!1,loading:!1}}})},U=F=>{c(W=>({...W,[F.groupId]:[...W[F.groupId]||[],F.member]}))},P=F=>{c(W=>({...W,[F.groupId]:(W[F.groupId]||[]).filter(te=>te.userId._id!==F.userId)}))};return C.on("new_group_message",V),C.on("group_member_joined",U),C.on("group_member_left",P),()=>{C.off("new_group_message",V),C.off("group_member_joined",U),C.off("group_member_left",P)}},[C,N,k==null?void 0:k.id]);const L=g.useCallback(async V=>{try{j(null);const U=await Mn.getGroupDetails(V);U.success&&c(P=>({...P,[V]:U.data.members||[]}))}catch(U){j(U.message)}},[]),R=g.useCallback(async(V,U=1)=>{var P;try{console.log(`🔄 Loading messages for group ${V}, page ${U}`),m(W=>{var te;return{...W,[V]:{groupId:V,messages:((te=W[V])==null?void 0:te.messages)||[],hasMore:!0,loading:!0}}});const F=await Mn.getGroupMessages(V,U,50);if(F.success){const W=F.data.messages||[],te=((P=F.data.pagination)==null?void 0:P.hasMore)||!1;m(fe=>{var re;return{...fe,[V]:{groupId:V,messages:U===1?W:[...W,...((re=fe[V])==null?void 0:re.messages)||[]],hasMore:te,loading:!1}}}),console.log(`✅ Loaded ${W.length} messages for group ${V}`)}}catch(F){console.error(`❌ Failed to load messages for group ${V}:`,F),m(W=>{var te;return{...W,[V]:{groupId:V,messages:((te=W[V])==null?void 0:te.messages)||[],hasMore:!1,loading:!1}}})}},[]),O=g.useCallback(async(V,U,P="text")=>{try{console.log(`📤 Sending message to group ${V}:`,U),G.current.add(U);const F=`temp_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,W={_id:F,senderId:{_id:(k==null?void 0:k.id)||"",username:(k==null?void 0:k.username)||"",fullName:(k==null?void 0:k.fullName)||"",avatar:k==null?void 0:k.avatar},chatGroupId:V,content:U,type:P,createdAt:new Date,isEdited:!1,readBy:[]};m(fe=>{var re,ce;return{...fe,[V]:{...fe[V],groupId:V,messages:[...((re=fe[V])==null?void 0:re.messages)||[],W],hasMore:((ce=fe[V])==null?void 0:ce.hasMore)||!1,loading:!1}}});const te=await Mn.sendGroupMessage(V,U,P);if(te.success){const fe=te.data.message;m(re=>{var ce,xe;return{...re,[V]:{...re[V],groupId:V,messages:[...((ce=re[V])==null?void 0:ce.messages.filter(ft=>ft._id!==F))||[],fe],hasMore:((xe=re[V])==null?void 0:xe.hasMore)||!1,loading:!1}}}),C&&C.emit("send_group_message",{groupId:V,content:U,type:P}),console.log("✅ Group message sent successfully")}}catch(F){throw console.error("❌ Failed to send group message:",F),G.current.delete(U),m(W=>{var te;return{...W,[V]:{...W[V],messages:((te=W[V])==null?void 0:te.messages.filter(fe=>!fe._id.startsWith("temp_")))||[]}}}),F}},[C,k]),q=g.useCallback(async(V,U,P=!1)=>{try{j(null);const F=await Mn.createGroup(V,U,P);if(F.success)return A.current=!1,await _(),F.data.chatGroup}catch(F){throw j(F.message),F}},[_]),se=g.useCallback(async V=>{try{j(null),(await Mn.joinGroup(V)).success&&(E&&E(V),A.current=!1,await _())}catch(U){throw j(U.message),U}},[E,_]),Ye=g.useCallback(async V=>{try{j(null),(await Mn.leaveGroup(V)).success&&(I&&I(V),i(P=>P.filter(F=>F._id!==V)),b(null))}catch(U){throw j(U.message),U}},[I]),Je=g.useCallback(async(V,U)=>{try{j(null),(await Mn.addMember(V,U)).success&&await L(V)}catch(P){throw j(P.message),P}},[L]),Oe=g.useCallback(async(V,U)=>{try{j(null),(await Mn.removeMember(V,U)).success&&await L(V)}catch(P){throw j(P.message),P}},[L]),Gt=g.useCallback(async(V,U,P)=>{try{j(null),(await Mn.updateMemberRole(V,U,P)).success&&await L(V)}catch(F){throw j(F.message),F}},[L]),Sn={groups:a,groupMembers:f,groupConversations:d,currentGroup:y,loading:x,error:M,setCurrentGroup:b,loadGroups:_,loadGroupMembers:L,loadGroupMessages:R,sendGroupMessage:O,createGroup:q,joinGroup:se,leaveGroup:Ye,addMember:Je,removeMember:Oe,updateMemberRole:Gt};return s.jsx(t3.Provider,{value:Sn,children:e})},ja=()=>{const e=g.useContext(t3);if(!e)throw new Error("useGroups must be used within a GroupsProvider");return e},Q7=({group:e,isOpen:a,onClose:i})=>{const[f,c]=g.useState(""),[d,m]=g.useState([]),[y,b]=g.useState([]),[x,v]=g.useState(new Set),[M,j]=g.useState(!1),[k,N]=g.useState(""),{addMember:C,groupMembers:E}=ja(),{friends:I}=Hn(),A=new Set((E[e._id]||[]).map(L=>L.userId._id));g.useEffect(()=>{if(a){const L=I.map(R=>({_id:R.friendId._id,username:R.friendId.username,fullName:R.friendId.fullName,avatar:R.friendId.avatar,status:R.friendId.status})).filter(R=>!A.has(R._id));b(L),m(L),c(""),v(new Set),N("")}},[a,I,E,e._id]),g.useEffect(()=>{if(!f.trim())m(y);else{const L=y.filter(R=>R.fullName.toLowerCase().includes(f.toLowerCase())||R.username.toLowerCase().includes(f.toLowerCase()));m(L)}},[f,y]);const G=async L=>{try{N(""),await C(e._id,L),v(R=>new Set([...R,L]))}catch(R){N(R.message||"Failed to add member")}},_=()=>{c(""),m([]),v(new Set),N(""),i()};return s.jsx(Zf,{title:`Add Members to ${e.name}`,isOpen:a,onClose:_,children:s.jsxs(G7,{children:[s.jsx($7,{children:s.jsxs(Z7,{children:[s.jsx(J7,{children:s.jsx(Q0,{})}),s.jsx(H7,{children:s.jsx("input",{type:"text",placeholder:"Search your friends to add",value:f,onChange:L=>c(L.target.value)})})]})}),k&&s.jsx(P7,{children:k}),s.jsxs(F7,{children:[s.jsx(q7,{children:s.jsx("h4",{children:d.length===0&&f?"No friends found":d.length===0&&!f?"No friends available to add":`${d.length} friend${d.length!==1?"s":""} available`})}),d.length===0?s.jsx(i8,{children:f?s.jsxs(Mp,{children:['No friends found matching "',f,'". Try a different search term.']}):s.jsx(Mp,{children:"All your friends are already members of this group, or you don't have any friends to add yet."})}):s.jsx(V7,{children:d.map(L=>s.jsxs(X7,{children:[s.jsxs(W7,{children:[s.jsx(bt,{image:L.avatar,userName:L.fullName,status:"offline",size:40}),s.jsxs(K7,{children:[s.jsx(e8,{children:L.fullName}),s.jsxs(t8,{children:["@",L.username]})]})]}),s.jsx(n8,{children:x.has(L._id)?s.jsxs(r8,{children:[s.jsx(jy,{}),s.jsx("span",{children:"Added"})]}):s.jsxs(a8,{onClick:()=>G(L._id),disabled:M,children:[s.jsx(G0,{}),s.jsx("span",{children:"Add"})]})})]},L._id))})]}),s.jsx(f8,{children:s.jsx(yt,{variant:"primary",title:"Done",onClick:_})})]})})},G7=h.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,$7=h.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Z7=h.div`
  position: relative;
  display: flex;
  align-items: center;
`,J7=h.div`
  position: absolute;
  left: 1.2rem;
  z-index: 1;
  color: ${({theme:e})=>e.text.placeholder};
  
  svg {
    width: 2rem;
    height: 2rem;
  }
`,H7=h.div`
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
`,P7=h.div`
  background-color: #fee2e2;
  border: 1px solid #fecaca;
  color: #dc2626;
  padding: 1rem 1.5rem;
  border-radius: 0.8rem;
  font-size: var(--text-sm);
  text-align: center;
`,F7=h.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,q7=h.div`
  h4 {
    font-size: var(--text-md);
    color: ${({theme:e})=>e.text.secondary};
    font-weight: 600;
    margin: 0;
  }
`,V7=h.div`
  display: flex;
  flex-direction: column;
  max-height: 40rem;
  overflow-y: auto;
  gap: 0.5rem;
`,X7=h.div`
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
`,W7=h.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
  min-width: 0;
`,K7=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  min-width: 0;
`,e8=h.div`
  font-size: var(--text-md);
  color: ${({theme:e})=>e.text.primary};
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,t8=h.div`
  font-size: var(--text-sm);
  color: ${({theme:e})=>e.text.secondary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,n8=h.div`
  display: flex;
  align-items: center;
`,a8=h.button`
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
`,r8=h.div`
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
`,i8=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
  text-align: center;
`,Mp=h.div`
  color: ${({theme:e})=>e.text.secondary};
  font-size: var(--text-md);
  line-height: 1.5;
`,f8=h.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 1rem;
  border-top: 1px solid ${({theme:e})=>e.border.secondary};
`,o8=({group:e,memberCount:a,userRole:i,onToggleMembersSidebar:f})=>{const[c,d]=g.useState(!1),[m,y]=g.useState(!1),[b,x]=g.useState(!1),{leaveGroup:v}=ja(),{closeChat:M}=li(),j=()=>{M&&M()},k=async()=>{try{await v(e._id),d(!1)}catch(E){console.error("Failed to leave group:",E)}},N=i==="admin"||i==="moderator",C=[{label:"Group Info",icon:s.jsx(s9,{}),onClick:()=>{y(!0),d(!1)}},...N?[{label:"Add Members",icon:s.jsx(C9,{}),onClick:()=>{x(!0),d(!1)}}]:[],{label:"Group Settings",icon:s.jsx(If,{}),onClick:()=>{d(!1),alert("Group settings not implemented yet")}},{label:"Leave Group",icon:s.jsx(ky,{}),danger:!0,onClick:k}];return s.jsxs(s.Fragment,{children:[s.jsxs(s8,{children:[s.jsx(l8,{onClick:j,children:s.jsx(Ty,{})}),s.jsxs(c8,{onClick:()=>y(!0),children:[s.jsx(u8,{children:e.avatar?s.jsx(bt,{image:e.avatar,userName:e.name,size:40,isGroup:!0}):s.jsx(d8,{children:s.jsx(Nf,{})})}),s.jsxs(h8,{children:[s.jsx(m8,{children:e.name}),s.jsxs(g8,{children:[a," member",a!==1?"s":""]})]})]}),s.jsxs(p8,{children:[s.jsx(jp,{onClick:f,title:"Show members",children:s.jsx(T9,{})}),s.jsx(jp,{onClick:()=>d(!0),title:"Group menu",children:s.jsx(Ey,{})})]}),s.jsx(Ma,{onClose:()=>d(!1),isOpen:c,right:"0",top:"100",items:C})]}),m&&s.jsx(S7,{group:e,memberCount:a,userRole:i,isOpen:m,onClose:()=>y(!1)}),b&&N&&s.jsx(Q7,{group:e,isOpen:b,onClose:()=>x(!1)})]})},s8=h.header`
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
`,l8=h.button`
  display: none;
  background: none;
  border: none;
  color: ${({theme:e})=>e.text.primary};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: background-color 0.2s ease;
  margin-right: 0.5rem;
  
  &:hover {
    background-color: ${({theme:e})=>e.background.primary};
  }
  
  svg {
    width: 2.4rem;
    height: 2.4rem;
  }
  
  @media (max-width: 700px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,c8=h.div`
width: max-content;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  padding: 0.5rem;
  padding-right: 2rem;
  border-radius: 3rem;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: ${({theme:e})=>e.background.primary};
  }
`,u8=h.div`
  flex-shrink: 0;
`,d8=h.div`
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
    color: ${({theme:e})=>e.text.thirdly};
  }
`,h8=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  min-width: 0;
  flex: 1;
`,m8=h.h3`
  font-size: var(--text-lg);
  font-weight: 600;
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,g8=h.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: var(--text-sm);
  color: ${({theme:e})=>e.text.secondary};
`;h.span`
  background-color: var(--blue);
  color: white;
  padding: 0.2rem 0.6rem;
  border-radius: 1rem;
  font-size: var(--text-xs);
  font-weight: 500;
`;const p8=h.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,jp=h.button`
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
`;function S0(e){return[].concat(e)}function X0(e){return e.startsWith(":")}function n3(e){return El(e)&&(e==="*"||e.length>1&&":>~.+*".includes(e.slice(0,1))||f3(e))}function a3(e,a){return(El(a)||typeof a=="number")&&!i3(e)&&!X0(e)&&!r3(e)}function r3(e){return e.startsWith("@media")}function y8(e){return e==="."}function i3(e){return e==="--"}function El(e){return e+""===e}function f3(e){return El(e)&&(e.startsWith("&")||X0(e))}function rl(e,a=""){return e.filter(Boolean).join(a)}function o3(e,a){let i=0;if(a.length===0)return i.toString();for(let f=0;f<a.length;f++){const c=a.charCodeAt(f);i=(i<<5)-i+c,i=i&i}return`${e??"cl"}_${i.toString(36)}`}function b8(e,a){return e==="content"?`"${a}"`:a}function w8(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function Lp(e,a){return`${e}:${a}`}function v8(e){return e?`.${e}`:""}function x8(e,a){return e?`${e}
${a}`:a}var s3=class l3{constructor(a,i,f,c){this.sheet=a,this.property=i,this.value=f,this.selector=c,this.property=i,this.value=f,this.joined=Lp(i,f);const d=this.selector.preconditions.concat(this.selector.postconditions);this.hash=this.selector.hasConditions?this.selector.scopeClassName:o3(this.sheet.name,this.joined),this.key=rl([this.joined,d,this.hash])}toString(){let a=C0(this.selector.preconditions,{right:this.hash});return a=C0(this.selector.postconditions,{left:a}),`${a} {${l3.genRule(this.property,this.value)}}`}static genRule(a,i){const f=w8(a);return Lp(f,b8(a,i))+";"}};function C0(e,{left:a="",right:i=""}={}){const f=e.reduce((c,d)=>X0(d)?c+d:f3(d)?c+d.slice(1):rl([c,d]," "),a);return rl([f,v8(i)]," ")}var M8=class Js{constructor(a,i=null,{preconditions:f,postconditions:c}={}){this.sheet=a,this.preconditions=[],this.scopeClassName=null,this.scopeName=null,this.postconditions=[],this.preconditions=f?S0(f):[],this.postconditions=c?S0(c):[],this.setScope(i)}setScope(a){return a?(this.scopeClassName||(this.scopeName=a,this.scopeClassName=o3(this.sheet.name,a+this.sheet.count)),this):this}get hasConditions(){return this.preconditions.length>0||this.postconditions.length>0}addScope(a){return new Js(this.sheet,a,{preconditions:this.preconditions,postconditions:this.postconditions})}addPrecondition(a){return new Js(this.sheet,this.scopeClassName,{postconditions:this.postconditions,preconditions:this.preconditions.concat(a)})}addPostcondition(a){return new Js(this.sheet,this.scopeClassName,{preconditions:this.preconditions,postconditions:this.postconditions.concat(a)})}createRule(a,i){return new s3(this.sheet,a,i,this)}},j8=class{constructor(e,a){this.name=e,this.rootNode=a,this.storedStyles={},this.storedClasses={},this.style="",this.count=0,this.id=`flairup-${e}`,this.styleTag=this.createStyleTag()}getStyle(){return this.style}append(e){this.style=x8(this.style,e)}apply(){this.count++,this.styleTag&&(this.styleTag.innerHTML=this.style)}isApplied(){return!!this.styleTag}createStyleTag(){if(typeof document>"u"||this.isApplied()||this.rootNode===null)return this.styleTag;const e=document.createElement("style");return e.type="text/css",e.id=this.id,(this.rootNode??document.head).appendChild(e),e}addRule(e){const a=this.storedClasses[e.key];return El(a)?a:(this.storedClasses[e.key]=e.hash,this.storedStyles[e.hash]=[e.property,e.value],this.append(e.toString()),e.hash)}};function W0(e,a){for(const i in e)a(i.trim(),e[i])}function pe(...e){const a=e.reduce((i,f)=>(f instanceof Set?i.push(...f):typeof f=="string"?i.push(f):Array.isArray(f)?i.push(pe(...f)):typeof f=="object"&&Object.entries(f).forEach(([c,d])=>{d&&i.push(c)}),i),[]);return rl(a," ").trim()}function L8(e,a){const i=new j8(e,a);return{create:f,getStyle:i.getStyle.bind(i),isApplied:i.isApplied.bind(i)};function f(c){const d={};return c3(i,c,new M8(i)).forEach(([y,b,x])=>{Tl(i,b,x).forEach(v=>{m(y,v)})}),i.apply(),d;function m(y,b){d[y]=d[y]??new Set,d[y].add(b)}}}function c3(e,a,i){const f=[];return W0(a,(c,d)=>{if(n3(c))return c3(e,d,i.addPrecondition(c)).forEach(m=>f.push(m));f.push([c,a[c],i.addScope(c)])}),f}function Tl(e,a,i){const f=new Set;return W0(a,(c,d)=>{let m=[];if(n3(c))m=Tl(e,d,i.addPostcondition(c));else if(y8(c))m=S0(d);else if(r3(c))m=C8(e,d,c,i);else if(i3(c))m=S8(e,d,i);else if(a3(c,d)){const y=i.createRule(c,d);e.addRule(y),f.add(y.hash)}return u3(m,f)}),f}function u3(e,a){return e.forEach(i=>a.add(i)),a}function S8(e,a,i){const f=new Set,c=[];if(W0(a,(d,m)=>{if(a3(d,m)){c.push(s3.genRule(d,m));return}const y=Tl(e,m??{},i);u3(y,f)}),!i.scopeClassName)return f;if(c.length){const d=c.join(" ");e.append(`${C0(i.preconditions,{right:i.scopeClassName})} {${d}}`)}return f.add(i.scopeClassName),f}function C8(e,a,i,f){e.append(i+" {");const c=Tl(e,a,f);return e.append("}"),c}function Re(){return Re=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var i=arguments[a];for(var f in i)Object.prototype.hasOwnProperty.call(i,f)&&(e[f]=i[f])}return e},Re.apply(this,arguments)}function k8(e,a){e.prototype=Object.create(a.prototype),e.prototype.constructor=e,k0(e,a)}function k0(e,a){return k0=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(f,c){return f.__proto__=c,f},k0(e,a)}function d3(e,a){if(e==null)return{};var i={},f=Object.keys(e),c,d;for(d=0;d<f.length;d++)c=f[d],!(a.indexOf(c)>=0)&&(i[c]=e[c]);return i}function E8(e,a){if(e){if(typeof e=="string")return Sp(e,a);var i=Object.prototype.toString.call(e).slice(8,-1);if(i==="Object"&&e.constructor&&(i=e.constructor.name),i==="Map"||i==="Set")return Array.from(e);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Sp(e,a)}}function Sp(e,a){(a==null||a>e.length)&&(a=e.length);for(var i=0,f=new Array(a);i<a;i++)f[i]=e[i];return f}function T8(e,a){var i=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(i)return(i=i.call(e)).next.bind(i);if(Array.isArray(e)||(i=E8(e))||a){i&&(e=i);var f=0;return function(){return f>=e.length?{done:!0}:{done:!1,value:e[f++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var he;(function(e){e.hiddenOnSearch="epr-hidden-on-search",e.searchActive="epr-search-active",e.hidden="epr-hidden",e.visible="epr-visible",e.active="epr-active",e.emoji="epr-emoji",e.category="epr-emoji-category",e.label="epr-emoji-category-label",e.categoryContent="epr-emoji-category-content",e.emojiHasVariations="epr-emoji-has-variations",e.scrollBody="epr-body",e.emojiList="epr-emoji-list",e.external="__EmojiPicker__",e.emojiPicker="EmojiPickerReact",e.open="epr-open",e.vertical="epr-vertical",e.horizontal="epr-horizontal",e.variationPicker="epr-emoji-variation-picker",e.darkTheme="epr-dark-theme",e.autoTheme="epr-auto-theme"})(he||(he={}));function mt(){for(var e=arguments.length,a=new Array(e),i=0;i<e;i++)a[i]=arguments[i];return a.map(function(f){return"."+f}).join("")}var Ae=L8("epr",null),Hs={display:"none",opacity:"0",pointerEvents:"none",visibility:"hidden",overflow:"hidden"},K0=Ae.create({hidden:Re({".":he.hidden},Hs)}),N8=g.memo(function(){return g.createElement("style",{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:Ae.getStyle()}})}),tr=Ae.create({".epr-main":{":has(input:not(:placeholder-shown))":{categoryBtn:{":hover":{opacity:"1",backgroundPositionY:"var(--epr-category-navigation-button-size)"}},hiddenOnSearch:Re({".":he.hiddenOnSearch},Hs)},":has(input(:placeholder-shown))":{visibleOnSearchOnly:Hs}},hiddenOnReactions:{transition:"all 0.5s ease-in-out"},".epr-reactions":{hiddenOnReactions:{height:"0px",width:"0px",opacity:"0",pointerEvents:"none",overflow:"hidden"}},".EmojiPickerReact:not(.epr-search-active)":{categoryBtn:{":hover":{opacity:"1",backgroundPositionY:"var(--epr-category-navigation-button-size)"},"&.epr-active":{opacity:"1",backgroundPositionY:"var(--epr-category-navigation-button-size)"}},visibleOnSearchOnly:Re({".":"epr-visible-on-search-only"},Hs)}});function xa(e,a){var i,f;return{".epr-dark-theme":(i={},i[e]=a,i),".epr-auto-theme":(f={},f[e]={"@media (prefers-color-scheme: dark)":a},f)}}function h3(e,a){var i,f,c=(i=e.customEmojis)!=null?i:[],d=(f=a.customEmojis)!=null?f:[];return e.open===a.open&&e.emojiVersion===a.emojiVersion&&e.reactionsDefaultOpen===a.reactionsDefaultOpen&&e.searchPlaceHolder===a.searchPlaceHolder&&e.searchPlaceholder===a.searchPlaceholder&&e.defaultSkinTone===a.defaultSkinTone&&e.skinTonesDisabled===a.skinTonesDisabled&&e.autoFocusSearch===a.autoFocusSearch&&e.emojiStyle===a.emojiStyle&&e.theme===a.theme&&e.suggestedEmojisMode===a.suggestedEmojisMode&&e.lazyLoadEmojis===a.lazyLoadEmojis&&e.className===a.className&&e.height===a.height&&e.width===a.width&&e.style===a.style&&e.searchDisabled===a.searchDisabled&&e.skinTonePickerLocation===a.skinTonePickerLocation&&c.length===d.length}var I8=["1f44d","2764-fe0f","1f603","1f622","1f64f","1f44e","1f621"],Af;(function(e){e.RECENT="recent",e.FREQUENT="frequent"})(Af||(Af={}));var Yt;(function(e){e.NATIVE="native",e.APPLE="apple",e.TWITTER="twitter",e.GOOGLE="google",e.FACEBOOK="facebook"})(Yt||(Yt={}));var zf;(function(e){e.DARK="dark",e.LIGHT="light",e.AUTO="auto"})(zf||(zf={}));var cn;(function(e){e.NEUTRAL="neutral",e.LIGHT="1f3fb",e.MEDIUM_LIGHT="1f3fc",e.MEDIUM="1f3fd",e.MEDIUM_DARK="1f3fe",e.DARK="1f3ff"})(cn||(cn={}));var de;(function(e){e.SUGGESTED="suggested",e.CUSTOM="custom",e.SMILEYS_PEOPLE="smileys_people",e.ANIMALS_NATURE="animals_nature",e.FOOD_DRINK="food_drink",e.TRAVEL_PLACES="travel_places",e.ACTIVITIES="activities",e.OBJECTS="objects",e.SYMBOLS="symbols",e.FLAGS="flags"})(de||(de={}));var ni;(function(e){e.SEARCH="SEARCH",e.PREVIEW="PREVIEW"})(ni||(ni={}));var Kt,D8=[de.SUGGESTED,de.CUSTOM,de.SMILEYS_PEOPLE,de.ANIMALS_NATURE,de.FOOD_DRINK,de.TRAVEL_PLACES,de.ACTIVITIES,de.OBJECTS,de.SYMBOLS,de.FLAGS],A8={name:"Recently Used",category:de.SUGGESTED},m3=(Kt={},Kt[de.SUGGESTED]={category:de.SUGGESTED,name:"Frequently Used"},Kt[de.CUSTOM]={category:de.CUSTOM,name:"Custom Emojis"},Kt[de.SMILEYS_PEOPLE]={category:de.SMILEYS_PEOPLE,name:"Smileys & People"},Kt[de.ANIMALS_NATURE]={category:de.ANIMALS_NATURE,name:"Animals & Nature"},Kt[de.FOOD_DRINK]={category:de.FOOD_DRINK,name:"Food & Drink"},Kt[de.TRAVEL_PLACES]={category:de.TRAVEL_PLACES,name:"Travel & Places"},Kt[de.ACTIVITIES]={category:de.ACTIVITIES,name:"Activities"},Kt[de.OBJECTS]={category:de.OBJECTS,name:"Objects"},Kt[de.SYMBOLS]={category:de.SYMBOLS,name:"Symbols"},Kt[de.FLAGS]={category:de.FLAGS,name:"Flags"},Kt);function g3(e){return D8.map(function(a){return Re({},m3[a],e&&e[a]&&e[a])})}function e1(e){return e.category}function p3(e){return e.name}function z8(e,a){var i;e===void 0&&(e=[]),a===void 0&&(a={});var f={};a.suggestionMode===Af.RECENT&&(f[de.SUGGESTED]=A8);var c=g3(f);return(i=e)!=null&&i.length?e.map(function(d){return typeof d=="string"?Cp(d,f[d]):Re({},Cp(d.category,f[d.category]),d)}):c}function Cp(e,a){return a===void 0&&(a={}),Object.assign(m3[e],a)}var R8="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/",O8="https://cdn.jsdelivr.net/npm/emoji-datasource-facebook/img/facebook/64/",B8="https://cdn.jsdelivr.net/npm/emoji-datasource-twitter/img/twitter/64/",U8="https://cdn.jsdelivr.net/npm/emoji-datasource-google/img/google/64/";function _8(e){switch(e){case Yt.TWITTER:return B8;case Yt.GOOGLE:return U8;case Yt.FACEBOOK:return O8;case Yt.APPLE:default:return R8}}var Y8=[],Q8=[{n:["grinning","grinning face"],u:"1f600",a:"1.0"},{n:["smiley","smiling face with open mouth"],u:"1f603",a:"0.6"},{n:["smile","smiling face with open mouth and smiling eyes"],u:"1f604",a:"0.6"},{n:["grin","grinning face with smiling eyes"],u:"1f601",a:"0.6"},{n:["laughing","satisfied","smiling face with open mouth and tightly-closed eyes"],u:"1f606",a:"0.6"},{n:["sweat smile","smiling face with open mouth and cold sweat"],u:"1f605",a:"0.6"},{n:["rolling on the floor laughing"],u:"1f923",a:"3.0"},{n:["joy","face with tears of joy"],u:"1f602",a:"0.6"},{n:["slightly smiling face"],u:"1f642",a:"1.0"},{n:["upside-down face","upside down face"],u:"1f643",a:"1.0"},{n:["melting face"],u:"1fae0",a:"14.0"},{n:["wink","winking face"],u:"1f609",a:"0.6"},{n:["blush","smiling face with smiling eyes"],u:"1f60a",a:"0.6"},{n:["innocent","smiling face with halo"],u:"1f607",a:"1.0"},{n:["smiling face with 3 hearts","smiling face with smiling eyes and three hearts"],u:"1f970",a:"11.0"},{n:["heart eyes","smiling face with heart-shaped eyes"],u:"1f60d",a:"0.6"},{n:["star-struck","grinning face with star eyes"],u:"1f929",a:"5.0"},{n:["kissing heart","face throwing a kiss"],u:"1f618",a:"0.6"},{n:["kissing","kissing face"],u:"1f617",a:"1.0"},{n:["relaxed","white smiling face"],u:"263a-fe0f",a:"0.6"},{n:["kissing closed eyes","kissing face with closed eyes"],u:"1f61a",a:"0.6"},{n:["kissing smiling eyes","kissing face with smiling eyes"],u:"1f619",a:"1.0"},{n:["smiling face with tear"],u:"1f972",a:"13.0"},{n:["yum","face savouring delicious food"],u:"1f60b",a:"0.6"},{n:["stuck out tongue","face with stuck-out tongue"],u:"1f61b",a:"1.0"},{n:["stuck out tongue winking eye","face with stuck-out tongue and winking eye"],u:"1f61c",a:"0.6"},{n:["zany face","grinning face with one large and one small eye"],u:"1f92a",a:"5.0"},{n:["stuck out tongue closed eyes","face with stuck-out tongue and tightly-closed eyes"],u:"1f61d",a:"0.6"},{n:["money-mouth face","money mouth face"],u:"1f911",a:"1.0"},{n:["hugging face"],u:"1f917",a:"1.0"},{n:["face with hand over mouth","smiling face with smiling eyes and hand covering mouth"],u:"1f92d",a:"5.0"},{n:["face with open eyes and hand over mouth"],u:"1fae2",a:"14.0"},{n:["face with peeking eye"],u:"1fae3",a:"14.0"},{n:["shushing face","face with finger covering closed lips"],u:"1f92b",a:"5.0"},{n:["thinking face"],u:"1f914",a:"1.0"},{n:["saluting face"],u:"1fae1",a:"14.0"},{n:["zipper-mouth face","zipper mouth face"],u:"1f910",a:"1.0"},{n:["face with raised eyebrow","face with one eyebrow raised"],u:"1f928",a:"5.0"},{n:["neutral face"],u:"1f610",a:"0.7"},{n:["expressionless","expressionless face"],u:"1f611",a:"1.0"},{n:["no mouth","face without mouth"],u:"1f636",a:"1.0"},{n:["dotted line face"],u:"1fae5",a:"14.0"},{n:["face in clouds"],u:"1f636-200d-1f32b-fe0f",a:"13.1"},{n:["smirk","smirking face"],u:"1f60f",a:"0.6"},{n:["unamused","unamused face"],u:"1f612",a:"0.6"},{n:["face with rolling eyes"],u:"1f644",a:"1.0"},{n:["grimacing","grimacing face"],u:"1f62c",a:"1.0"},{n:["face exhaling"],u:"1f62e-200d-1f4a8",a:"13.1"},{n:["lying face"],u:"1f925",a:"3.0"},{n:["relieved","relieved face"],u:"1f60c",a:"0.6"},{n:["pensive","pensive face"],u:"1f614",a:"0.6"},{n:["sleepy","sleepy face"],u:"1f62a",a:"0.6"},{n:["drooling face"],u:"1f924",a:"3.0"},{n:["sleeping","sleeping face"],u:"1f634",a:"1.0"},{n:["mask","face with medical mask"],u:"1f637",a:"0.6"},{n:["face with thermometer"],u:"1f912",a:"1.0"},{n:["face with head-bandage","face with head bandage"],u:"1f915",a:"1.0"},{n:["nauseated face"],u:"1f922",a:"3.0"},{n:["face vomiting","face with open mouth vomiting"],u:"1f92e",a:"5.0"},{n:["sneezing face"],u:"1f927",a:"3.0"},{n:["hot face","overheated face"],u:"1f975",a:"11.0"},{n:["cold face","freezing face"],u:"1f976",a:"11.0"},{n:["woozy face","face with uneven eyes and wavy mouth"],u:"1f974",a:"11.0"},{n:["dizzy face"],u:"1f635",a:"0.6"},{n:["face with spiral eyes"],u:"1f635-200d-1f4ab",a:"13.1"},{n:["exploding head","shocked face with exploding head"],u:"1f92f",a:"5.0"},{n:["face with cowboy hat"],u:"1f920",a:"3.0"},{n:["partying face","face with party horn and party hat"],u:"1f973",a:"11.0"},{n:["disguised face"],u:"1f978",a:"13.0"},{n:["sunglasses","smiling face with sunglasses"],u:"1f60e",a:"1.0"},{n:["nerd face"],u:"1f913",a:"1.0"},{n:["face with monocle"],u:"1f9d0",a:"5.0"},{n:["confused","confused face"],u:"1f615",a:"1.0"},{n:["face with diagonal mouth"],u:"1fae4",a:"14.0"},{n:["worried","worried face"],u:"1f61f",a:"1.0"},{n:["slightly frowning face"],u:"1f641",a:"1.0"},{n:["frowning face","white frowning face"],u:"2639-fe0f",a:"0.7"},{n:["open mouth","face with open mouth"],u:"1f62e",a:"1.0"},{n:["hushed","hushed face"],u:"1f62f",a:"1.0"},{n:["astonished","astonished face"],u:"1f632",a:"0.6"},{n:["flushed","flushed face"],u:"1f633",a:"0.6"},{n:["pleading face","face with pleading eyes"],u:"1f97a",a:"11.0"},{n:["face holding back tears"],u:"1f979",a:"14.0"},{n:["frowning","frowning face with open mouth"],u:"1f626",a:"1.0"},{n:["anguished","anguished face"],u:"1f627",a:"1.0"},{n:["fearful","fearful face"],u:"1f628",a:"0.6"},{n:["cold sweat","face with open mouth and cold sweat"],u:"1f630",a:"0.6"},{n:["disappointed relieved","disappointed but relieved face"],u:"1f625",a:"0.6"},{n:["cry","crying face"],u:"1f622",a:"0.6"},{n:["sob","loudly crying face"],u:"1f62d",a:"0.6"},{n:["scream","face screaming in fear"],u:"1f631",a:"0.6"},{n:["confounded","confounded face"],u:"1f616",a:"0.6"},{n:["persevere","persevering face"],u:"1f623",a:"0.6"},{n:["disappointed","disappointed face"],u:"1f61e",a:"0.6"},{n:["sweat","face with cold sweat"],u:"1f613",a:"0.6"},{n:["weary","weary face"],u:"1f629",a:"0.6"},{n:["tired face"],u:"1f62b",a:"0.6"},{n:["yawning face"],u:"1f971",a:"12.0"},{n:["triumph","face with look of triumph"],u:"1f624",a:"0.6"},{n:["rage","pouting face"],u:"1f621",a:"0.6"},{n:["angry","angry face"],u:"1f620",a:"0.6"},{n:["face with symbols on mouth","serious face with symbols covering mouth"],u:"1f92c",a:"5.0"},{n:["smiling imp","smiling face with horns"],u:"1f608",a:"1.0"},{n:["imp"],u:"1f47f",a:"0.6"},{n:["skull"],u:"1f480",a:"0.6"},{n:["skull and crossbones"],u:"2620-fe0f",a:"1.0"},{n:["poop","shit","hankey","pile of poo"],u:"1f4a9",a:"0.6"},{n:["clown face"],u:"1f921",a:"3.0"},{n:["japanese ogre"],u:"1f479",a:"0.6"},{n:["japanese goblin"],u:"1f47a",a:"0.6"},{n:["ghost"],u:"1f47b",a:"0.6"},{n:["alien","extraterrestrial alien"],u:"1f47d",a:"0.6"},{n:["alien monster","space invader"],u:"1f47e",a:"0.6"},{n:["robot face"],u:"1f916",a:"1.0"},{n:["smiley cat","smiling cat face with open mouth"],u:"1f63a",a:"0.6"},{n:["smile cat","grinning cat face with smiling eyes"],u:"1f638",a:"0.6"},{n:["joy cat","cat face with tears of joy"],u:"1f639",a:"0.6"},{n:["heart eyes cat","smiling cat face with heart-shaped eyes"],u:"1f63b",a:"0.6"},{n:["smirk cat","cat face with wry smile"],u:"1f63c",a:"0.6"},{n:["kissing cat","kissing cat face with closed eyes"],u:"1f63d",a:"0.6"},{n:["scream cat","weary cat face"],u:"1f640",a:"0.6"},{n:["crying cat face"],u:"1f63f",a:"0.6"},{n:["pouting cat","pouting cat face"],u:"1f63e",a:"0.6"},{n:["see no evil","see-no-evil monkey"],u:"1f648",a:"0.6"},{n:["hear no evil","hear-no-evil monkey"],u:"1f649",a:"0.6"},{n:["speak no evil","speak-no-evil monkey"],u:"1f64a",a:"0.6"},{n:["kiss","kiss mark"],u:"1f48b",a:"0.6"},{n:["love letter"],u:"1f48c",a:"0.6"},{n:["cupid","heart with arrow"],u:"1f498",a:"0.6"},{n:["gift heart","heart with ribbon"],u:"1f49d",a:"0.6"},{n:["sparkling heart"],u:"1f496",a:"0.6"},{n:["heartpulse","growing heart"],u:"1f497",a:"0.6"},{n:["heartbeat","beating heart"],u:"1f493",a:"0.6"},{n:["revolving hearts"],u:"1f49e",a:"0.6"},{n:["two hearts"],u:"1f495",a:"0.6"},{n:["heart decoration"],u:"1f49f",a:"0.6"},{n:["heart exclamation","heavy heart exclamation mark ornament"],u:"2763-fe0f",a:"1.0"},{n:["broken heart"],u:"1f494",a:"0.6"},{n:["heart on fire"],u:"2764-fe0f-200d-1f525",a:"13.1"},{n:["mending heart"],u:"2764-fe0f-200d-1fa79",a:"13.1"},{n:["heart","heavy black heart"],u:"2764-fe0f",a:"0.6"},{n:["orange heart"],u:"1f9e1",a:"5.0"},{n:["yellow heart"],u:"1f49b",a:"0.6"},{n:["green heart"],u:"1f49a",a:"0.6"},{n:["blue heart"],u:"1f499",a:"0.6"},{n:["purple heart"],u:"1f49c",a:"0.6"},{n:["brown heart"],u:"1f90e",a:"12.0"},{n:["black heart"],u:"1f5a4",a:"3.0"},{n:["white heart"],u:"1f90d",a:"12.0"},{n:["100","hundred points symbol"],u:"1f4af",a:"0.6"},{n:["anger","anger symbol"],u:"1f4a2",a:"0.6"},{n:["boom","collision","collision symbol"],u:"1f4a5",a:"0.6"},{n:["dizzy","dizzy symbol"],u:"1f4ab",a:"0.6"},{n:["sweat drops","splashing sweat symbol"],u:"1f4a6",a:"0.6"},{n:["dash","dash symbol"],u:"1f4a8",a:"0.6"},{n:["hole"],u:"1f573-fe0f",a:"0.7"},{n:["bomb"],u:"1f4a3",a:"0.6"},{n:["speech balloon"],u:"1f4ac",a:"0.6"},{n:["eye in speech bubble","eye-in-speech-bubble"],u:"1f441-fe0f-200d-1f5e8-fe0f",a:"2.0"},{n:["left speech bubble"],u:"1f5e8-fe0f",a:"2.0"},{n:["right anger bubble"],u:"1f5ef-fe0f",a:"0.7"},{n:["thought balloon"],u:"1f4ad",a:"1.0"},{n:["zzz","sleeping symbol"],u:"1f4a4",a:"0.6"},{n:["wave","waving hand sign"],u:"1f44b",v:["1f44b-1f3fb","1f44b-1f3fc","1f44b-1f3fd","1f44b-1f3fe","1f44b-1f3ff"],a:"0.6"},{n:["raised back of hand"],u:"1f91a",v:["1f91a-1f3fb","1f91a-1f3fc","1f91a-1f3fd","1f91a-1f3fe","1f91a-1f3ff"],a:"3.0"},{n:["hand with fingers splayed","raised hand with fingers splayed"],u:"1f590-fe0f",v:["1f590-1f3fb","1f590-1f3fc","1f590-1f3fd","1f590-1f3fe","1f590-1f3ff"],a:"0.7"},{n:["hand","raised hand"],u:"270b",v:["270b-1f3fb","270b-1f3fc","270b-1f3fd","270b-1f3fe","270b-1f3ff"],a:"0.6"},{n:["spock-hand","raised hand with part between middle and ring fingers"],u:"1f596",v:["1f596-1f3fb","1f596-1f3fc","1f596-1f3fd","1f596-1f3fe","1f596-1f3ff"],a:"1.0"},{n:["rightwards hand"],u:"1faf1",v:["1faf1-1f3fb","1faf1-1f3fc","1faf1-1f3fd","1faf1-1f3fe","1faf1-1f3ff"],a:"14.0"},{n:["leftwards hand"],u:"1faf2",v:["1faf2-1f3fb","1faf2-1f3fc","1faf2-1f3fd","1faf2-1f3fe","1faf2-1f3ff"],a:"14.0"},{n:["palm down hand"],u:"1faf3",v:["1faf3-1f3fb","1faf3-1f3fc","1faf3-1f3fd","1faf3-1f3fe","1faf3-1f3ff"],a:"14.0"},{n:["palm up hand"],u:"1faf4",v:["1faf4-1f3fb","1faf4-1f3fc","1faf4-1f3fd","1faf4-1f3fe","1faf4-1f3ff"],a:"14.0"},{n:["ok hand","ok hand sign"],u:"1f44c",v:["1f44c-1f3fb","1f44c-1f3fc","1f44c-1f3fd","1f44c-1f3fe","1f44c-1f3ff"],a:"0.6"},{n:["pinched fingers"],u:"1f90c",v:["1f90c-1f3fb","1f90c-1f3fc","1f90c-1f3fd","1f90c-1f3fe","1f90c-1f3ff"],a:"13.0"},{n:["pinching hand"],u:"1f90f",v:["1f90f-1f3fb","1f90f-1f3fc","1f90f-1f3fd","1f90f-1f3fe","1f90f-1f3ff"],a:"12.0"},{n:["v","victory hand"],u:"270c-fe0f",v:["270c-1f3fb","270c-1f3fc","270c-1f3fd","270c-1f3fe","270c-1f3ff"],a:"0.6"},{n:["crossed fingers","hand with index and middle fingers crossed"],u:"1f91e",v:["1f91e-1f3fb","1f91e-1f3fc","1f91e-1f3fd","1f91e-1f3fe","1f91e-1f3ff"],a:"3.0"},{n:["hand with index finger and thumb crossed"],u:"1faf0",v:["1faf0-1f3fb","1faf0-1f3fc","1faf0-1f3fd","1faf0-1f3fe","1faf0-1f3ff"],a:"14.0"},{n:["i love you hand sign"],u:"1f91f",v:["1f91f-1f3fb","1f91f-1f3fc","1f91f-1f3fd","1f91f-1f3fe","1f91f-1f3ff"],a:"5.0"},{n:["the horns","sign of the horns"],u:"1f918",v:["1f918-1f3fb","1f918-1f3fc","1f918-1f3fd","1f918-1f3fe","1f918-1f3ff"],a:"1.0"},{n:["call me hand"],u:"1f919",v:["1f919-1f3fb","1f919-1f3fc","1f919-1f3fd","1f919-1f3fe","1f919-1f3ff"],a:"3.0"},{n:["point left","white left pointing backhand index"],u:"1f448",v:["1f448-1f3fb","1f448-1f3fc","1f448-1f3fd","1f448-1f3fe","1f448-1f3ff"],a:"0.6"},{n:["point right","white right pointing backhand index"],u:"1f449",v:["1f449-1f3fb","1f449-1f3fc","1f449-1f3fd","1f449-1f3fe","1f449-1f3ff"],a:"0.6"},{n:["point up 2","white up pointing backhand index"],u:"1f446",v:["1f446-1f3fb","1f446-1f3fc","1f446-1f3fd","1f446-1f3fe","1f446-1f3ff"],a:"0.6"},{n:["middle finger","reversed hand with middle finger extended"],u:"1f595",v:["1f595-1f3fb","1f595-1f3fc","1f595-1f3fd","1f595-1f3fe","1f595-1f3ff"],a:"1.0"},{n:["point down","white down pointing backhand index"],u:"1f447",v:["1f447-1f3fb","1f447-1f3fc","1f447-1f3fd","1f447-1f3fe","1f447-1f3ff"],a:"0.6"},{n:["point up","white up pointing index"],u:"261d-fe0f",v:["261d-1f3fb","261d-1f3fc","261d-1f3fd","261d-1f3fe","261d-1f3ff"],a:"0.6"},{n:["index pointing at the viewer"],u:"1faf5",v:["1faf5-1f3fb","1faf5-1f3fc","1faf5-1f3fd","1faf5-1f3fe","1faf5-1f3ff"],a:"14.0"},{n:["+1","thumbsup","thumbs up sign"],u:"1f44d",v:["1f44d-1f3fb","1f44d-1f3fc","1f44d-1f3fd","1f44d-1f3fe","1f44d-1f3ff"],a:"0.6"},{n:["-1","thumbsdown","thumbs down sign"],u:"1f44e",v:["1f44e-1f3fb","1f44e-1f3fc","1f44e-1f3fd","1f44e-1f3fe","1f44e-1f3ff"],a:"0.6"},{n:["fist","raised fist"],u:"270a",v:["270a-1f3fb","270a-1f3fc","270a-1f3fd","270a-1f3fe","270a-1f3ff"],a:"0.6"},{n:["punch","facepunch","fisted hand sign"],u:"1f44a",v:["1f44a-1f3fb","1f44a-1f3fc","1f44a-1f3fd","1f44a-1f3fe","1f44a-1f3ff"],a:"0.6"},{n:["left-facing fist"],u:"1f91b",v:["1f91b-1f3fb","1f91b-1f3fc","1f91b-1f3fd","1f91b-1f3fe","1f91b-1f3ff"],a:"3.0"},{n:["right-facing fist"],u:"1f91c",v:["1f91c-1f3fb","1f91c-1f3fc","1f91c-1f3fd","1f91c-1f3fe","1f91c-1f3ff"],a:"3.0"},{n:["clap","clapping hands sign"],u:"1f44f",v:["1f44f-1f3fb","1f44f-1f3fc","1f44f-1f3fd","1f44f-1f3fe","1f44f-1f3ff"],a:"0.6"},{n:["raised hands","person raising both hands in celebration"],u:"1f64c",v:["1f64c-1f3fb","1f64c-1f3fc","1f64c-1f3fd","1f64c-1f3fe","1f64c-1f3ff"],a:"0.6"},{n:["heart hands"],u:"1faf6",v:["1faf6-1f3fb","1faf6-1f3fc","1faf6-1f3fd","1faf6-1f3fe","1faf6-1f3ff"],a:"14.0"},{n:["open hands","open hands sign"],u:"1f450",v:["1f450-1f3fb","1f450-1f3fc","1f450-1f3fd","1f450-1f3fe","1f450-1f3ff"],a:"0.6"},{n:["palms up together"],u:"1f932",v:["1f932-1f3fb","1f932-1f3fc","1f932-1f3fd","1f932-1f3fe","1f932-1f3ff"],a:"5.0"},{n:["handshake"],u:"1f91d",v:["1f91d-1f3fb","1f91d-1f3fc","1f91d-1f3fd","1f91d-1f3fe","1f91d-1f3ff","1faf1-1f3fb-200d-1faf2-1f3fc","1faf1-1f3fb-200d-1faf2-1f3fd","1faf1-1f3fb-200d-1faf2-1f3fe","1faf1-1f3fb-200d-1faf2-1f3ff","1faf1-1f3fc-200d-1faf2-1f3fb","1faf1-1f3fc-200d-1faf2-1f3fd","1faf1-1f3fc-200d-1faf2-1f3fe","1faf1-1f3fc-200d-1faf2-1f3ff","1faf1-1f3fd-200d-1faf2-1f3fb","1faf1-1f3fd-200d-1faf2-1f3fc","1faf1-1f3fd-200d-1faf2-1f3fe","1faf1-1f3fd-200d-1faf2-1f3ff","1faf1-1f3fe-200d-1faf2-1f3fb","1faf1-1f3fe-200d-1faf2-1f3fc","1faf1-1f3fe-200d-1faf2-1f3fd","1faf1-1f3fe-200d-1faf2-1f3ff","1faf1-1f3ff-200d-1faf2-1f3fb","1faf1-1f3ff-200d-1faf2-1f3fc","1faf1-1f3ff-200d-1faf2-1f3fd","1faf1-1f3ff-200d-1faf2-1f3fe"],a:"3.0"},{n:["pray","person with folded hands"],u:"1f64f",v:["1f64f-1f3fb","1f64f-1f3fc","1f64f-1f3fd","1f64f-1f3fe","1f64f-1f3ff"],a:"0.6"},{n:["writing hand"],u:"270d-fe0f",v:["270d-1f3fb","270d-1f3fc","270d-1f3fd","270d-1f3fe","270d-1f3ff"],a:"0.7"},{n:["nail care","nail polish"],u:"1f485",v:["1f485-1f3fb","1f485-1f3fc","1f485-1f3fd","1f485-1f3fe","1f485-1f3ff"],a:"0.6"},{n:["selfie"],u:"1f933",v:["1f933-1f3fb","1f933-1f3fc","1f933-1f3fd","1f933-1f3fe","1f933-1f3ff"],a:"3.0"},{n:["muscle","flexed biceps"],u:"1f4aa",v:["1f4aa-1f3fb","1f4aa-1f3fc","1f4aa-1f3fd","1f4aa-1f3fe","1f4aa-1f3ff"],a:"0.6"},{n:["mechanical arm"],u:"1f9be",a:"12.0"},{n:["mechanical leg"],u:"1f9bf",a:"12.0"},{n:["leg"],u:"1f9b5",v:["1f9b5-1f3fb","1f9b5-1f3fc","1f9b5-1f3fd","1f9b5-1f3fe","1f9b5-1f3ff"],a:"11.0"},{n:["foot"],u:"1f9b6",v:["1f9b6-1f3fb","1f9b6-1f3fc","1f9b6-1f3fd","1f9b6-1f3fe","1f9b6-1f3ff"],a:"11.0"},{n:["ear"],u:"1f442",v:["1f442-1f3fb","1f442-1f3fc","1f442-1f3fd","1f442-1f3fe","1f442-1f3ff"],a:"0.6"},{n:["ear with hearing aid"],u:"1f9bb",v:["1f9bb-1f3fb","1f9bb-1f3fc","1f9bb-1f3fd","1f9bb-1f3fe","1f9bb-1f3ff"],a:"12.0"},{n:["nose"],u:"1f443",v:["1f443-1f3fb","1f443-1f3fc","1f443-1f3fd","1f443-1f3fe","1f443-1f3ff"],a:"0.6"},{n:["brain"],u:"1f9e0",a:"5.0"},{n:["anatomical heart"],u:"1fac0",a:"13.0"},{n:["lungs"],u:"1fac1",a:"13.0"},{n:["tooth"],u:"1f9b7",a:"11.0"},{n:["bone"],u:"1f9b4",a:"11.0"},{n:["eyes"],u:"1f440",a:"0.6"},{n:["eye"],u:"1f441-fe0f",a:"0.7"},{n:["tongue"],u:"1f445",a:"0.6"},{n:["lips","mouth"],u:"1f444",a:"0.6"},{n:["biting lip"],u:"1fae6",a:"14.0"},{n:["baby"],u:"1f476",v:["1f476-1f3fb","1f476-1f3fc","1f476-1f3fd","1f476-1f3fe","1f476-1f3ff"],a:"0.6"},{n:["child"],u:"1f9d2",v:["1f9d2-1f3fb","1f9d2-1f3fc","1f9d2-1f3fd","1f9d2-1f3fe","1f9d2-1f3ff"],a:"5.0"},{n:["boy"],u:"1f466",v:["1f466-1f3fb","1f466-1f3fc","1f466-1f3fd","1f466-1f3fe","1f466-1f3ff"],a:"0.6"},{n:["girl"],u:"1f467",v:["1f467-1f3fb","1f467-1f3fc","1f467-1f3fd","1f467-1f3fe","1f467-1f3ff"],a:"0.6"},{n:["adult"],u:"1f9d1",v:["1f9d1-1f3fb","1f9d1-1f3fc","1f9d1-1f3fd","1f9d1-1f3fe","1f9d1-1f3ff"],a:"5.0"},{n:["person with blond hair"],u:"1f471",v:["1f471-1f3fb","1f471-1f3fc","1f471-1f3fd","1f471-1f3fe","1f471-1f3ff"],a:"0.6"},{n:["man"],u:"1f468",v:["1f468-1f3fb","1f468-1f3fc","1f468-1f3fd","1f468-1f3fe","1f468-1f3ff"],a:"0.6"},{n:["bearded person"],u:"1f9d4",v:["1f9d4-1f3fb","1f9d4-1f3fc","1f9d4-1f3fd","1f9d4-1f3fe","1f9d4-1f3ff"],a:"5.0"},{n:["man: beard","man with beard"],u:"1f9d4-200d-2642-fe0f",v:["1f9d4-1f3fb-200d-2642-fe0f","1f9d4-1f3fc-200d-2642-fe0f","1f9d4-1f3fd-200d-2642-fe0f","1f9d4-1f3fe-200d-2642-fe0f","1f9d4-1f3ff-200d-2642-fe0f"],a:"13.1"},{n:["woman: beard","woman with beard"],u:"1f9d4-200d-2640-fe0f",v:["1f9d4-1f3fb-200d-2640-fe0f","1f9d4-1f3fc-200d-2640-fe0f","1f9d4-1f3fd-200d-2640-fe0f","1f9d4-1f3fe-200d-2640-fe0f","1f9d4-1f3ff-200d-2640-fe0f"],a:"13.1"},{n:["man: red hair","red haired man"],u:"1f468-200d-1f9b0",v:["1f468-1f3fb-200d-1f9b0","1f468-1f3fc-200d-1f9b0","1f468-1f3fd-200d-1f9b0","1f468-1f3fe-200d-1f9b0","1f468-1f3ff-200d-1f9b0"],a:"11.0"},{n:["man: curly hair","curly haired man"],u:"1f468-200d-1f9b1",v:["1f468-1f3fb-200d-1f9b1","1f468-1f3fc-200d-1f9b1","1f468-1f3fd-200d-1f9b1","1f468-1f3fe-200d-1f9b1","1f468-1f3ff-200d-1f9b1"],a:"11.0"},{n:["man: white hair","white haired man"],u:"1f468-200d-1f9b3",v:["1f468-1f3fb-200d-1f9b3","1f468-1f3fc-200d-1f9b3","1f468-1f3fd-200d-1f9b3","1f468-1f3fe-200d-1f9b3","1f468-1f3ff-200d-1f9b3"],a:"11.0"},{n:["bald man","man: bald"],u:"1f468-200d-1f9b2",v:["1f468-1f3fb-200d-1f9b2","1f468-1f3fc-200d-1f9b2","1f468-1f3fd-200d-1f9b2","1f468-1f3fe-200d-1f9b2","1f468-1f3ff-200d-1f9b2"],a:"11.0"},{n:["woman"],u:"1f469",v:["1f469-1f3fb","1f469-1f3fc","1f469-1f3fd","1f469-1f3fe","1f469-1f3ff"],a:"0.6"},{n:["woman: red hair","red haired woman"],u:"1f469-200d-1f9b0",v:["1f469-1f3fb-200d-1f9b0","1f469-1f3fc-200d-1f9b0","1f469-1f3fd-200d-1f9b0","1f469-1f3fe-200d-1f9b0","1f469-1f3ff-200d-1f9b0"],a:"11.0"},{n:["person: red hair","red haired person"],u:"1f9d1-200d-1f9b0",v:["1f9d1-1f3fb-200d-1f9b0","1f9d1-1f3fc-200d-1f9b0","1f9d1-1f3fd-200d-1f9b0","1f9d1-1f3fe-200d-1f9b0","1f9d1-1f3ff-200d-1f9b0"],a:"12.1"},{n:["woman: curly hair","curly haired woman"],u:"1f469-200d-1f9b1",v:["1f469-1f3fb-200d-1f9b1","1f469-1f3fc-200d-1f9b1","1f469-1f3fd-200d-1f9b1","1f469-1f3fe-200d-1f9b1","1f469-1f3ff-200d-1f9b1"],a:"11.0"},{n:["person: curly hair","curly haired person"],u:"1f9d1-200d-1f9b1",v:["1f9d1-1f3fb-200d-1f9b1","1f9d1-1f3fc-200d-1f9b1","1f9d1-1f3fd-200d-1f9b1","1f9d1-1f3fe-200d-1f9b1","1f9d1-1f3ff-200d-1f9b1"],a:"12.1"},{n:["woman: white hair","white haired woman"],u:"1f469-200d-1f9b3",v:["1f469-1f3fb-200d-1f9b3","1f469-1f3fc-200d-1f9b3","1f469-1f3fd-200d-1f9b3","1f469-1f3fe-200d-1f9b3","1f469-1f3ff-200d-1f9b3"],a:"11.0"},{n:["person: white hair","white haired person"],u:"1f9d1-200d-1f9b3",v:["1f9d1-1f3fb-200d-1f9b3","1f9d1-1f3fc-200d-1f9b3","1f9d1-1f3fd-200d-1f9b3","1f9d1-1f3fe-200d-1f9b3","1f9d1-1f3ff-200d-1f9b3"],a:"12.1"},{n:["bald woman","woman: bald"],u:"1f469-200d-1f9b2",v:["1f469-1f3fb-200d-1f9b2","1f469-1f3fc-200d-1f9b2","1f469-1f3fd-200d-1f9b2","1f469-1f3fe-200d-1f9b2","1f469-1f3ff-200d-1f9b2"],a:"11.0"},{n:["bald person","person: bald"],u:"1f9d1-200d-1f9b2",v:["1f9d1-1f3fb-200d-1f9b2","1f9d1-1f3fc-200d-1f9b2","1f9d1-1f3fd-200d-1f9b2","1f9d1-1f3fe-200d-1f9b2","1f9d1-1f3ff-200d-1f9b2"],a:"12.1"},{n:["woman: blond hair","blond-haired-woman"],u:"1f471-200d-2640-fe0f",v:["1f471-1f3fb-200d-2640-fe0f","1f471-1f3fc-200d-2640-fe0f","1f471-1f3fd-200d-2640-fe0f","1f471-1f3fe-200d-2640-fe0f","1f471-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["man: blond hair","blond-haired-man"],u:"1f471-200d-2642-fe0f",v:["1f471-1f3fb-200d-2642-fe0f","1f471-1f3fc-200d-2642-fe0f","1f471-1f3fd-200d-2642-fe0f","1f471-1f3fe-200d-2642-fe0f","1f471-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["older adult"],u:"1f9d3",v:["1f9d3-1f3fb","1f9d3-1f3fc","1f9d3-1f3fd","1f9d3-1f3fe","1f9d3-1f3ff"],a:"5.0"},{n:["older man"],u:"1f474",v:["1f474-1f3fb","1f474-1f3fc","1f474-1f3fd","1f474-1f3fe","1f474-1f3ff"],a:"0.6"},{n:["older woman"],u:"1f475",v:["1f475-1f3fb","1f475-1f3fc","1f475-1f3fd","1f475-1f3fe","1f475-1f3ff"],a:"0.6"},{n:["person frowning"],u:"1f64d",v:["1f64d-1f3fb","1f64d-1f3fc","1f64d-1f3fd","1f64d-1f3fe","1f64d-1f3ff"],a:"0.6"},{n:["man frowning","man-frowning"],u:"1f64d-200d-2642-fe0f",v:["1f64d-1f3fb-200d-2642-fe0f","1f64d-1f3fc-200d-2642-fe0f","1f64d-1f3fd-200d-2642-fe0f","1f64d-1f3fe-200d-2642-fe0f","1f64d-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman frowning","woman-frowning"],u:"1f64d-200d-2640-fe0f",v:["1f64d-1f3fb-200d-2640-fe0f","1f64d-1f3fc-200d-2640-fe0f","1f64d-1f3fd-200d-2640-fe0f","1f64d-1f3fe-200d-2640-fe0f","1f64d-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["person with pouting face"],u:"1f64e",v:["1f64e-1f3fb","1f64e-1f3fc","1f64e-1f3fd","1f64e-1f3fe","1f64e-1f3ff"],a:"0.6"},{n:["man pouting","man-pouting"],u:"1f64e-200d-2642-fe0f",v:["1f64e-1f3fb-200d-2642-fe0f","1f64e-1f3fc-200d-2642-fe0f","1f64e-1f3fd-200d-2642-fe0f","1f64e-1f3fe-200d-2642-fe0f","1f64e-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman pouting","woman-pouting"],u:"1f64e-200d-2640-fe0f",v:["1f64e-1f3fb-200d-2640-fe0f","1f64e-1f3fc-200d-2640-fe0f","1f64e-1f3fd-200d-2640-fe0f","1f64e-1f3fe-200d-2640-fe0f","1f64e-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["no good","face with no good gesture"],u:"1f645",v:["1f645-1f3fb","1f645-1f3fc","1f645-1f3fd","1f645-1f3fe","1f645-1f3ff"],a:"0.6"},{n:["man gesturing no","man-gesturing-no"],u:"1f645-200d-2642-fe0f",v:["1f645-1f3fb-200d-2642-fe0f","1f645-1f3fc-200d-2642-fe0f","1f645-1f3fd-200d-2642-fe0f","1f645-1f3fe-200d-2642-fe0f","1f645-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman gesturing no","woman-gesturing-no"],u:"1f645-200d-2640-fe0f",v:["1f645-1f3fb-200d-2640-fe0f","1f645-1f3fc-200d-2640-fe0f","1f645-1f3fd-200d-2640-fe0f","1f645-1f3fe-200d-2640-fe0f","1f645-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["ok woman","face with ok gesture"],u:"1f646",v:["1f646-1f3fb","1f646-1f3fc","1f646-1f3fd","1f646-1f3fe","1f646-1f3ff"],a:"0.6"},{n:["man gesturing ok","man-gesturing-ok"],u:"1f646-200d-2642-fe0f",v:["1f646-1f3fb-200d-2642-fe0f","1f646-1f3fc-200d-2642-fe0f","1f646-1f3fd-200d-2642-fe0f","1f646-1f3fe-200d-2642-fe0f","1f646-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman gesturing ok","woman-gesturing-ok"],u:"1f646-200d-2640-fe0f",v:["1f646-1f3fb-200d-2640-fe0f","1f646-1f3fc-200d-2640-fe0f","1f646-1f3fd-200d-2640-fe0f","1f646-1f3fe-200d-2640-fe0f","1f646-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["information desk person"],u:"1f481",v:["1f481-1f3fb","1f481-1f3fc","1f481-1f3fd","1f481-1f3fe","1f481-1f3ff"],a:"0.6"},{n:["man tipping hand","man-tipping-hand"],u:"1f481-200d-2642-fe0f",v:["1f481-1f3fb-200d-2642-fe0f","1f481-1f3fc-200d-2642-fe0f","1f481-1f3fd-200d-2642-fe0f","1f481-1f3fe-200d-2642-fe0f","1f481-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman tipping hand","woman-tipping-hand"],u:"1f481-200d-2640-fe0f",v:["1f481-1f3fb-200d-2640-fe0f","1f481-1f3fc-200d-2640-fe0f","1f481-1f3fd-200d-2640-fe0f","1f481-1f3fe-200d-2640-fe0f","1f481-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["raising hand","happy person raising one hand"],u:"1f64b",v:["1f64b-1f3fb","1f64b-1f3fc","1f64b-1f3fd","1f64b-1f3fe","1f64b-1f3ff"],a:"0.6"},{n:["man raising hand","man-raising-hand"],u:"1f64b-200d-2642-fe0f",v:["1f64b-1f3fb-200d-2642-fe0f","1f64b-1f3fc-200d-2642-fe0f","1f64b-1f3fd-200d-2642-fe0f","1f64b-1f3fe-200d-2642-fe0f","1f64b-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman raising hand","woman-raising-hand"],u:"1f64b-200d-2640-fe0f",v:["1f64b-1f3fb-200d-2640-fe0f","1f64b-1f3fc-200d-2640-fe0f","1f64b-1f3fd-200d-2640-fe0f","1f64b-1f3fe-200d-2640-fe0f","1f64b-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["deaf person"],u:"1f9cf",v:["1f9cf-1f3fb","1f9cf-1f3fc","1f9cf-1f3fd","1f9cf-1f3fe","1f9cf-1f3ff"],a:"12.0"},{n:["deaf man"],u:"1f9cf-200d-2642-fe0f",v:["1f9cf-1f3fb-200d-2642-fe0f","1f9cf-1f3fc-200d-2642-fe0f","1f9cf-1f3fd-200d-2642-fe0f","1f9cf-1f3fe-200d-2642-fe0f","1f9cf-1f3ff-200d-2642-fe0f"],a:"12.0"},{n:["deaf woman"],u:"1f9cf-200d-2640-fe0f",v:["1f9cf-1f3fb-200d-2640-fe0f","1f9cf-1f3fc-200d-2640-fe0f","1f9cf-1f3fd-200d-2640-fe0f","1f9cf-1f3fe-200d-2640-fe0f","1f9cf-1f3ff-200d-2640-fe0f"],a:"12.0"},{n:["bow","person bowing deeply"],u:"1f647",v:["1f647-1f3fb","1f647-1f3fc","1f647-1f3fd","1f647-1f3fe","1f647-1f3ff"],a:"0.6"},{n:["man bowing","man-bowing"],u:"1f647-200d-2642-fe0f",v:["1f647-1f3fb-200d-2642-fe0f","1f647-1f3fc-200d-2642-fe0f","1f647-1f3fd-200d-2642-fe0f","1f647-1f3fe-200d-2642-fe0f","1f647-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman bowing","woman-bowing"],u:"1f647-200d-2640-fe0f",v:["1f647-1f3fb-200d-2640-fe0f","1f647-1f3fc-200d-2640-fe0f","1f647-1f3fd-200d-2640-fe0f","1f647-1f3fe-200d-2640-fe0f","1f647-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["face palm"],u:"1f926",v:["1f926-1f3fb","1f926-1f3fc","1f926-1f3fd","1f926-1f3fe","1f926-1f3ff"],a:"3.0"},{n:["man facepalming","man-facepalming"],u:"1f926-200d-2642-fe0f",v:["1f926-1f3fb-200d-2642-fe0f","1f926-1f3fc-200d-2642-fe0f","1f926-1f3fd-200d-2642-fe0f","1f926-1f3fe-200d-2642-fe0f","1f926-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman facepalming","woman-facepalming"],u:"1f926-200d-2640-fe0f",v:["1f926-1f3fb-200d-2640-fe0f","1f926-1f3fc-200d-2640-fe0f","1f926-1f3fd-200d-2640-fe0f","1f926-1f3fe-200d-2640-fe0f","1f926-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["shrug"],u:"1f937",v:["1f937-1f3fb","1f937-1f3fc","1f937-1f3fd","1f937-1f3fe","1f937-1f3ff"],a:"3.0"},{n:["man shrugging","man-shrugging"],u:"1f937-200d-2642-fe0f",v:["1f937-1f3fb-200d-2642-fe0f","1f937-1f3fc-200d-2642-fe0f","1f937-1f3fd-200d-2642-fe0f","1f937-1f3fe-200d-2642-fe0f","1f937-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman shrugging","woman-shrugging"],u:"1f937-200d-2640-fe0f",v:["1f937-1f3fb-200d-2640-fe0f","1f937-1f3fc-200d-2640-fe0f","1f937-1f3fd-200d-2640-fe0f","1f937-1f3fe-200d-2640-fe0f","1f937-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["health worker"],u:"1f9d1-200d-2695-fe0f",v:["1f9d1-1f3fb-200d-2695-fe0f","1f9d1-1f3fc-200d-2695-fe0f","1f9d1-1f3fd-200d-2695-fe0f","1f9d1-1f3fe-200d-2695-fe0f","1f9d1-1f3ff-200d-2695-fe0f"],a:"12.1"},{n:["male-doctor","man health worker"],u:"1f468-200d-2695-fe0f",v:["1f468-1f3fb-200d-2695-fe0f","1f468-1f3fc-200d-2695-fe0f","1f468-1f3fd-200d-2695-fe0f","1f468-1f3fe-200d-2695-fe0f","1f468-1f3ff-200d-2695-fe0f"],a:"4.0"},{n:["female-doctor","woman health worker"],u:"1f469-200d-2695-fe0f",v:["1f469-1f3fb-200d-2695-fe0f","1f469-1f3fc-200d-2695-fe0f","1f469-1f3fd-200d-2695-fe0f","1f469-1f3fe-200d-2695-fe0f","1f469-1f3ff-200d-2695-fe0f"],a:"4.0"},{n:["student"],u:"1f9d1-200d-1f393",v:["1f9d1-1f3fb-200d-1f393","1f9d1-1f3fc-200d-1f393","1f9d1-1f3fd-200d-1f393","1f9d1-1f3fe-200d-1f393","1f9d1-1f3ff-200d-1f393"],a:"12.1"},{n:["man student","male-student"],u:"1f468-200d-1f393",v:["1f468-1f3fb-200d-1f393","1f468-1f3fc-200d-1f393","1f468-1f3fd-200d-1f393","1f468-1f3fe-200d-1f393","1f468-1f3ff-200d-1f393"],a:"4.0"},{n:["woman student","female-student"],u:"1f469-200d-1f393",v:["1f469-1f3fb-200d-1f393","1f469-1f3fc-200d-1f393","1f469-1f3fd-200d-1f393","1f469-1f3fe-200d-1f393","1f469-1f3ff-200d-1f393"],a:"4.0"},{n:["teacher"],u:"1f9d1-200d-1f3eb",v:["1f9d1-1f3fb-200d-1f3eb","1f9d1-1f3fc-200d-1f3eb","1f9d1-1f3fd-200d-1f3eb","1f9d1-1f3fe-200d-1f3eb","1f9d1-1f3ff-200d-1f3eb"],a:"12.1"},{n:["man teacher","male-teacher"],u:"1f468-200d-1f3eb",v:["1f468-1f3fb-200d-1f3eb","1f468-1f3fc-200d-1f3eb","1f468-1f3fd-200d-1f3eb","1f468-1f3fe-200d-1f3eb","1f468-1f3ff-200d-1f3eb"],a:"4.0"},{n:["woman teacher","female-teacher"],u:"1f469-200d-1f3eb",v:["1f469-1f3fb-200d-1f3eb","1f469-1f3fc-200d-1f3eb","1f469-1f3fd-200d-1f3eb","1f469-1f3fe-200d-1f3eb","1f469-1f3ff-200d-1f3eb"],a:"4.0"},{n:["judge"],u:"1f9d1-200d-2696-fe0f",v:["1f9d1-1f3fb-200d-2696-fe0f","1f9d1-1f3fc-200d-2696-fe0f","1f9d1-1f3fd-200d-2696-fe0f","1f9d1-1f3fe-200d-2696-fe0f","1f9d1-1f3ff-200d-2696-fe0f"],a:"12.1"},{n:["man judge","male-judge"],u:"1f468-200d-2696-fe0f",v:["1f468-1f3fb-200d-2696-fe0f","1f468-1f3fc-200d-2696-fe0f","1f468-1f3fd-200d-2696-fe0f","1f468-1f3fe-200d-2696-fe0f","1f468-1f3ff-200d-2696-fe0f"],a:"4.0"},{n:["woman judge","female-judge"],u:"1f469-200d-2696-fe0f",v:["1f469-1f3fb-200d-2696-fe0f","1f469-1f3fc-200d-2696-fe0f","1f469-1f3fd-200d-2696-fe0f","1f469-1f3fe-200d-2696-fe0f","1f469-1f3ff-200d-2696-fe0f"],a:"4.0"},{n:["farmer"],u:"1f9d1-200d-1f33e",v:["1f9d1-1f3fb-200d-1f33e","1f9d1-1f3fc-200d-1f33e","1f9d1-1f3fd-200d-1f33e","1f9d1-1f3fe-200d-1f33e","1f9d1-1f3ff-200d-1f33e"],a:"12.1"},{n:["man farmer","male-farmer"],u:"1f468-200d-1f33e",v:["1f468-1f3fb-200d-1f33e","1f468-1f3fc-200d-1f33e","1f468-1f3fd-200d-1f33e","1f468-1f3fe-200d-1f33e","1f468-1f3ff-200d-1f33e"],a:"4.0"},{n:["woman farmer","female-farmer"],u:"1f469-200d-1f33e",v:["1f469-1f3fb-200d-1f33e","1f469-1f3fc-200d-1f33e","1f469-1f3fd-200d-1f33e","1f469-1f3fe-200d-1f33e","1f469-1f3ff-200d-1f33e"],a:"4.0"},{n:["cook"],u:"1f9d1-200d-1f373",v:["1f9d1-1f3fb-200d-1f373","1f9d1-1f3fc-200d-1f373","1f9d1-1f3fd-200d-1f373","1f9d1-1f3fe-200d-1f373","1f9d1-1f3ff-200d-1f373"],a:"12.1"},{n:["man cook","male-cook"],u:"1f468-200d-1f373",v:["1f468-1f3fb-200d-1f373","1f468-1f3fc-200d-1f373","1f468-1f3fd-200d-1f373","1f468-1f3fe-200d-1f373","1f468-1f3ff-200d-1f373"],a:"4.0"},{n:["woman cook","female-cook"],u:"1f469-200d-1f373",v:["1f469-1f3fb-200d-1f373","1f469-1f3fc-200d-1f373","1f469-1f3fd-200d-1f373","1f469-1f3fe-200d-1f373","1f469-1f3ff-200d-1f373"],a:"4.0"},{n:["mechanic"],u:"1f9d1-200d-1f527",v:["1f9d1-1f3fb-200d-1f527","1f9d1-1f3fc-200d-1f527","1f9d1-1f3fd-200d-1f527","1f9d1-1f3fe-200d-1f527","1f9d1-1f3ff-200d-1f527"],a:"12.1"},{n:["man mechanic","male-mechanic"],u:"1f468-200d-1f527",v:["1f468-1f3fb-200d-1f527","1f468-1f3fc-200d-1f527","1f468-1f3fd-200d-1f527","1f468-1f3fe-200d-1f527","1f468-1f3ff-200d-1f527"],a:"4.0"},{n:["woman mechanic","female-mechanic"],u:"1f469-200d-1f527",v:["1f469-1f3fb-200d-1f527","1f469-1f3fc-200d-1f527","1f469-1f3fd-200d-1f527","1f469-1f3fe-200d-1f527","1f469-1f3ff-200d-1f527"],a:"4.0"},{n:["factory worker"],u:"1f9d1-200d-1f3ed",v:["1f9d1-1f3fb-200d-1f3ed","1f9d1-1f3fc-200d-1f3ed","1f9d1-1f3fd-200d-1f3ed","1f9d1-1f3fe-200d-1f3ed","1f9d1-1f3ff-200d-1f3ed"],a:"12.1"},{n:["man factory worker","male-factory-worker"],u:"1f468-200d-1f3ed",v:["1f468-1f3fb-200d-1f3ed","1f468-1f3fc-200d-1f3ed","1f468-1f3fd-200d-1f3ed","1f468-1f3fe-200d-1f3ed","1f468-1f3ff-200d-1f3ed"],a:"4.0"},{n:["woman factory worker","female-factory-worker"],u:"1f469-200d-1f3ed",v:["1f469-1f3fb-200d-1f3ed","1f469-1f3fc-200d-1f3ed","1f469-1f3fd-200d-1f3ed","1f469-1f3fe-200d-1f3ed","1f469-1f3ff-200d-1f3ed"],a:"4.0"},{n:["office worker"],u:"1f9d1-200d-1f4bc",v:["1f9d1-1f3fb-200d-1f4bc","1f9d1-1f3fc-200d-1f4bc","1f9d1-1f3fd-200d-1f4bc","1f9d1-1f3fe-200d-1f4bc","1f9d1-1f3ff-200d-1f4bc"],a:"12.1"},{n:["man office worker","male-office-worker"],u:"1f468-200d-1f4bc",v:["1f468-1f3fb-200d-1f4bc","1f468-1f3fc-200d-1f4bc","1f468-1f3fd-200d-1f4bc","1f468-1f3fe-200d-1f4bc","1f468-1f3ff-200d-1f4bc"],a:"4.0"},{n:["woman office worker","female-office-worker"],u:"1f469-200d-1f4bc",v:["1f469-1f3fb-200d-1f4bc","1f469-1f3fc-200d-1f4bc","1f469-1f3fd-200d-1f4bc","1f469-1f3fe-200d-1f4bc","1f469-1f3ff-200d-1f4bc"],a:"4.0"},{n:["scientist"],u:"1f9d1-200d-1f52c",v:["1f9d1-1f3fb-200d-1f52c","1f9d1-1f3fc-200d-1f52c","1f9d1-1f3fd-200d-1f52c","1f9d1-1f3fe-200d-1f52c","1f9d1-1f3ff-200d-1f52c"],a:"12.1"},{n:["man scientist","male-scientist"],u:"1f468-200d-1f52c",v:["1f468-1f3fb-200d-1f52c","1f468-1f3fc-200d-1f52c","1f468-1f3fd-200d-1f52c","1f468-1f3fe-200d-1f52c","1f468-1f3ff-200d-1f52c"],a:"4.0"},{n:["woman scientist","female-scientist"],u:"1f469-200d-1f52c",v:["1f469-1f3fb-200d-1f52c","1f469-1f3fc-200d-1f52c","1f469-1f3fd-200d-1f52c","1f469-1f3fe-200d-1f52c","1f469-1f3ff-200d-1f52c"],a:"4.0"},{n:["technologist"],u:"1f9d1-200d-1f4bb",v:["1f9d1-1f3fb-200d-1f4bb","1f9d1-1f3fc-200d-1f4bb","1f9d1-1f3fd-200d-1f4bb","1f9d1-1f3fe-200d-1f4bb","1f9d1-1f3ff-200d-1f4bb"],a:"12.1"},{n:["man technologist","male-technologist"],u:"1f468-200d-1f4bb",v:["1f468-1f3fb-200d-1f4bb","1f468-1f3fc-200d-1f4bb","1f468-1f3fd-200d-1f4bb","1f468-1f3fe-200d-1f4bb","1f468-1f3ff-200d-1f4bb"],a:"4.0"},{n:["woman technologist","female-technologist"],u:"1f469-200d-1f4bb",v:["1f469-1f3fb-200d-1f4bb","1f469-1f3fc-200d-1f4bb","1f469-1f3fd-200d-1f4bb","1f469-1f3fe-200d-1f4bb","1f469-1f3ff-200d-1f4bb"],a:"4.0"},{n:["singer"],u:"1f9d1-200d-1f3a4",v:["1f9d1-1f3fb-200d-1f3a4","1f9d1-1f3fc-200d-1f3a4","1f9d1-1f3fd-200d-1f3a4","1f9d1-1f3fe-200d-1f3a4","1f9d1-1f3ff-200d-1f3a4"],a:"12.1"},{n:["man singer","male-singer"],u:"1f468-200d-1f3a4",v:["1f468-1f3fb-200d-1f3a4","1f468-1f3fc-200d-1f3a4","1f468-1f3fd-200d-1f3a4","1f468-1f3fe-200d-1f3a4","1f468-1f3ff-200d-1f3a4"],a:"4.0"},{n:["woman singer","female-singer"],u:"1f469-200d-1f3a4",v:["1f469-1f3fb-200d-1f3a4","1f469-1f3fc-200d-1f3a4","1f469-1f3fd-200d-1f3a4","1f469-1f3fe-200d-1f3a4","1f469-1f3ff-200d-1f3a4"],a:"4.0"},{n:["artist"],u:"1f9d1-200d-1f3a8",v:["1f9d1-1f3fb-200d-1f3a8","1f9d1-1f3fc-200d-1f3a8","1f9d1-1f3fd-200d-1f3a8","1f9d1-1f3fe-200d-1f3a8","1f9d1-1f3ff-200d-1f3a8"],a:"12.1"},{n:["man artist","male-artist"],u:"1f468-200d-1f3a8",v:["1f468-1f3fb-200d-1f3a8","1f468-1f3fc-200d-1f3a8","1f468-1f3fd-200d-1f3a8","1f468-1f3fe-200d-1f3a8","1f468-1f3ff-200d-1f3a8"],a:"4.0"},{n:["woman artist","female-artist"],u:"1f469-200d-1f3a8",v:["1f469-1f3fb-200d-1f3a8","1f469-1f3fc-200d-1f3a8","1f469-1f3fd-200d-1f3a8","1f469-1f3fe-200d-1f3a8","1f469-1f3ff-200d-1f3a8"],a:"4.0"},{n:["pilot"],u:"1f9d1-200d-2708-fe0f",v:["1f9d1-1f3fb-200d-2708-fe0f","1f9d1-1f3fc-200d-2708-fe0f","1f9d1-1f3fd-200d-2708-fe0f","1f9d1-1f3fe-200d-2708-fe0f","1f9d1-1f3ff-200d-2708-fe0f"],a:"12.1"},{n:["man pilot","male-pilot"],u:"1f468-200d-2708-fe0f",v:["1f468-1f3fb-200d-2708-fe0f","1f468-1f3fc-200d-2708-fe0f","1f468-1f3fd-200d-2708-fe0f","1f468-1f3fe-200d-2708-fe0f","1f468-1f3ff-200d-2708-fe0f"],a:"4.0"},{n:["woman pilot","female-pilot"],u:"1f469-200d-2708-fe0f",v:["1f469-1f3fb-200d-2708-fe0f","1f469-1f3fc-200d-2708-fe0f","1f469-1f3fd-200d-2708-fe0f","1f469-1f3fe-200d-2708-fe0f","1f469-1f3ff-200d-2708-fe0f"],a:"4.0"},{n:["astronaut"],u:"1f9d1-200d-1f680",v:["1f9d1-1f3fb-200d-1f680","1f9d1-1f3fc-200d-1f680","1f9d1-1f3fd-200d-1f680","1f9d1-1f3fe-200d-1f680","1f9d1-1f3ff-200d-1f680"],a:"12.1"},{n:["man astronaut","male-astronaut"],u:"1f468-200d-1f680",v:["1f468-1f3fb-200d-1f680","1f468-1f3fc-200d-1f680","1f468-1f3fd-200d-1f680","1f468-1f3fe-200d-1f680","1f468-1f3ff-200d-1f680"],a:"4.0"},{n:["woman astronaut","female-astronaut"],u:"1f469-200d-1f680",v:["1f469-1f3fb-200d-1f680","1f469-1f3fc-200d-1f680","1f469-1f3fd-200d-1f680","1f469-1f3fe-200d-1f680","1f469-1f3ff-200d-1f680"],a:"4.0"},{n:["firefighter"],u:"1f9d1-200d-1f692",v:["1f9d1-1f3fb-200d-1f692","1f9d1-1f3fc-200d-1f692","1f9d1-1f3fd-200d-1f692","1f9d1-1f3fe-200d-1f692","1f9d1-1f3ff-200d-1f692"],a:"12.1"},{n:["man firefighter","male-firefighter"],u:"1f468-200d-1f692",v:["1f468-1f3fb-200d-1f692","1f468-1f3fc-200d-1f692","1f468-1f3fd-200d-1f692","1f468-1f3fe-200d-1f692","1f468-1f3ff-200d-1f692"],a:"4.0"},{n:["woman firefighter","female-firefighter"],u:"1f469-200d-1f692",v:["1f469-1f3fb-200d-1f692","1f469-1f3fc-200d-1f692","1f469-1f3fd-200d-1f692","1f469-1f3fe-200d-1f692","1f469-1f3ff-200d-1f692"],a:"4.0"},{n:["cop","police officer"],u:"1f46e",v:["1f46e-1f3fb","1f46e-1f3fc","1f46e-1f3fd","1f46e-1f3fe","1f46e-1f3ff"],a:"0.6"},{n:["man police officer","male-police-officer"],u:"1f46e-200d-2642-fe0f",v:["1f46e-1f3fb-200d-2642-fe0f","1f46e-1f3fc-200d-2642-fe0f","1f46e-1f3fd-200d-2642-fe0f","1f46e-1f3fe-200d-2642-fe0f","1f46e-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman police officer","female-police-officer"],u:"1f46e-200d-2640-fe0f",v:["1f46e-1f3fb-200d-2640-fe0f","1f46e-1f3fc-200d-2640-fe0f","1f46e-1f3fd-200d-2640-fe0f","1f46e-1f3fe-200d-2640-fe0f","1f46e-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["detective","sleuth or spy"],u:"1f575-fe0f",v:["1f575-1f3fb","1f575-1f3fc","1f575-1f3fd","1f575-1f3fe","1f575-1f3ff"],a:"0.7"},{n:["man detective","male-detective"],u:"1f575-fe0f-200d-2642-fe0f",v:["1f575-1f3fb-200d-2642-fe0f","1f575-1f3fc-200d-2642-fe0f","1f575-1f3fd-200d-2642-fe0f","1f575-1f3fe-200d-2642-fe0f","1f575-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman detective","female-detective"],u:"1f575-fe0f-200d-2640-fe0f",v:["1f575-1f3fb-200d-2640-fe0f","1f575-1f3fc-200d-2640-fe0f","1f575-1f3fd-200d-2640-fe0f","1f575-1f3fe-200d-2640-fe0f","1f575-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["guardsman"],u:"1f482",v:["1f482-1f3fb","1f482-1f3fc","1f482-1f3fd","1f482-1f3fe","1f482-1f3ff"],a:"0.6"},{n:["man guard","male-guard"],u:"1f482-200d-2642-fe0f",v:["1f482-1f3fb-200d-2642-fe0f","1f482-1f3fc-200d-2642-fe0f","1f482-1f3fd-200d-2642-fe0f","1f482-1f3fe-200d-2642-fe0f","1f482-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman guard","female-guard"],u:"1f482-200d-2640-fe0f",v:["1f482-1f3fb-200d-2640-fe0f","1f482-1f3fc-200d-2640-fe0f","1f482-1f3fd-200d-2640-fe0f","1f482-1f3fe-200d-2640-fe0f","1f482-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["ninja"],u:"1f977",v:["1f977-1f3fb","1f977-1f3fc","1f977-1f3fd","1f977-1f3fe","1f977-1f3ff"],a:"13.0"},{n:["construction worker"],u:"1f477",v:["1f477-1f3fb","1f477-1f3fc","1f477-1f3fd","1f477-1f3fe","1f477-1f3ff"],a:"0.6"},{n:["man construction worker","male-construction-worker"],u:"1f477-200d-2642-fe0f",v:["1f477-1f3fb-200d-2642-fe0f","1f477-1f3fc-200d-2642-fe0f","1f477-1f3fd-200d-2642-fe0f","1f477-1f3fe-200d-2642-fe0f","1f477-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman construction worker","female-construction-worker"],u:"1f477-200d-2640-fe0f",v:["1f477-1f3fb-200d-2640-fe0f","1f477-1f3fc-200d-2640-fe0f","1f477-1f3fd-200d-2640-fe0f","1f477-1f3fe-200d-2640-fe0f","1f477-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["person with crown"],u:"1fac5",v:["1fac5-1f3fb","1fac5-1f3fc","1fac5-1f3fd","1fac5-1f3fe","1fac5-1f3ff"],a:"14.0"},{n:["prince"],u:"1f934",v:["1f934-1f3fb","1f934-1f3fc","1f934-1f3fd","1f934-1f3fe","1f934-1f3ff"],a:"3.0"},{n:["princess"],u:"1f478",v:["1f478-1f3fb","1f478-1f3fc","1f478-1f3fd","1f478-1f3fe","1f478-1f3ff"],a:"0.6"},{n:["man with turban"],u:"1f473",v:["1f473-1f3fb","1f473-1f3fc","1f473-1f3fd","1f473-1f3fe","1f473-1f3ff"],a:"0.6"},{n:["man wearing turban","man-wearing-turban"],u:"1f473-200d-2642-fe0f",v:["1f473-1f3fb-200d-2642-fe0f","1f473-1f3fc-200d-2642-fe0f","1f473-1f3fd-200d-2642-fe0f","1f473-1f3fe-200d-2642-fe0f","1f473-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman wearing turban","woman-wearing-turban"],u:"1f473-200d-2640-fe0f",v:["1f473-1f3fb-200d-2640-fe0f","1f473-1f3fc-200d-2640-fe0f","1f473-1f3fd-200d-2640-fe0f","1f473-1f3fe-200d-2640-fe0f","1f473-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["man with gua pi mao"],u:"1f472",v:["1f472-1f3fb","1f472-1f3fc","1f472-1f3fd","1f472-1f3fe","1f472-1f3ff"],a:"0.6"},{n:["person with headscarf"],u:"1f9d5",v:["1f9d5-1f3fb","1f9d5-1f3fc","1f9d5-1f3fd","1f9d5-1f3fe","1f9d5-1f3ff"],a:"5.0"},{n:["man in tuxedo","person in tuxedo"],u:"1f935",v:["1f935-1f3fb","1f935-1f3fc","1f935-1f3fd","1f935-1f3fe","1f935-1f3ff"],a:"3.0"},{n:["man in tuxedo"],u:"1f935-200d-2642-fe0f",v:["1f935-1f3fb-200d-2642-fe0f","1f935-1f3fc-200d-2642-fe0f","1f935-1f3fd-200d-2642-fe0f","1f935-1f3fe-200d-2642-fe0f","1f935-1f3ff-200d-2642-fe0f"],a:"13.0"},{n:["woman in tuxedo"],u:"1f935-200d-2640-fe0f",v:["1f935-1f3fb-200d-2640-fe0f","1f935-1f3fc-200d-2640-fe0f","1f935-1f3fd-200d-2640-fe0f","1f935-1f3fe-200d-2640-fe0f","1f935-1f3ff-200d-2640-fe0f"],a:"13.0"},{n:["bride with veil"],u:"1f470",v:["1f470-1f3fb","1f470-1f3fc","1f470-1f3fd","1f470-1f3fe","1f470-1f3ff"],a:"0.6"},{n:["man with veil"],u:"1f470-200d-2642-fe0f",v:["1f470-1f3fb-200d-2642-fe0f","1f470-1f3fc-200d-2642-fe0f","1f470-1f3fd-200d-2642-fe0f","1f470-1f3fe-200d-2642-fe0f","1f470-1f3ff-200d-2642-fe0f"],a:"13.0"},{n:["woman with veil"],u:"1f470-200d-2640-fe0f",v:["1f470-1f3fb-200d-2640-fe0f","1f470-1f3fc-200d-2640-fe0f","1f470-1f3fd-200d-2640-fe0f","1f470-1f3fe-200d-2640-fe0f","1f470-1f3ff-200d-2640-fe0f"],a:"13.0"},{n:["pregnant woman"],u:"1f930",v:["1f930-1f3fb","1f930-1f3fc","1f930-1f3fd","1f930-1f3fe","1f930-1f3ff"],a:"3.0"},{n:["pregnant man"],u:"1fac3",v:["1fac3-1f3fb","1fac3-1f3fc","1fac3-1f3fd","1fac3-1f3fe","1fac3-1f3ff"],a:"14.0"},{n:["pregnant person"],u:"1fac4",v:["1fac4-1f3fb","1fac4-1f3fc","1fac4-1f3fd","1fac4-1f3fe","1fac4-1f3ff"],a:"14.0"},{n:["breast-feeding"],u:"1f931",v:["1f931-1f3fb","1f931-1f3fc","1f931-1f3fd","1f931-1f3fe","1f931-1f3ff"],a:"5.0"},{n:["woman feeding baby"],u:"1f469-200d-1f37c",v:["1f469-1f3fb-200d-1f37c","1f469-1f3fc-200d-1f37c","1f469-1f3fd-200d-1f37c","1f469-1f3fe-200d-1f37c","1f469-1f3ff-200d-1f37c"],a:"13.0"},{n:["man feeding baby"],u:"1f468-200d-1f37c",v:["1f468-1f3fb-200d-1f37c","1f468-1f3fc-200d-1f37c","1f468-1f3fd-200d-1f37c","1f468-1f3fe-200d-1f37c","1f468-1f3ff-200d-1f37c"],a:"13.0"},{n:["person feeding baby"],u:"1f9d1-200d-1f37c",v:["1f9d1-1f3fb-200d-1f37c","1f9d1-1f3fc-200d-1f37c","1f9d1-1f3fd-200d-1f37c","1f9d1-1f3fe-200d-1f37c","1f9d1-1f3ff-200d-1f37c"],a:"13.0"},{n:["angel","baby angel"],u:"1f47c",v:["1f47c-1f3fb","1f47c-1f3fc","1f47c-1f3fd","1f47c-1f3fe","1f47c-1f3ff"],a:"0.6"},{n:["santa","father christmas"],u:"1f385",v:["1f385-1f3fb","1f385-1f3fc","1f385-1f3fd","1f385-1f3fe","1f385-1f3ff"],a:"0.6"},{n:["mrs claus","mother christmas"],u:"1f936",v:["1f936-1f3fb","1f936-1f3fc","1f936-1f3fd","1f936-1f3fe","1f936-1f3ff"],a:"3.0"},{n:["mx claus"],u:"1f9d1-200d-1f384",v:["1f9d1-1f3fb-200d-1f384","1f9d1-1f3fc-200d-1f384","1f9d1-1f3fd-200d-1f384","1f9d1-1f3fe-200d-1f384","1f9d1-1f3ff-200d-1f384"],a:"13.0"},{n:["superhero"],u:"1f9b8",v:["1f9b8-1f3fb","1f9b8-1f3fc","1f9b8-1f3fd","1f9b8-1f3fe","1f9b8-1f3ff"],a:"11.0"},{n:["man superhero","male superhero"],u:"1f9b8-200d-2642-fe0f",v:["1f9b8-1f3fb-200d-2642-fe0f","1f9b8-1f3fc-200d-2642-fe0f","1f9b8-1f3fd-200d-2642-fe0f","1f9b8-1f3fe-200d-2642-fe0f","1f9b8-1f3ff-200d-2642-fe0f"],a:"11.0"},{n:["woman superhero","female superhero"],u:"1f9b8-200d-2640-fe0f",v:["1f9b8-1f3fb-200d-2640-fe0f","1f9b8-1f3fc-200d-2640-fe0f","1f9b8-1f3fd-200d-2640-fe0f","1f9b8-1f3fe-200d-2640-fe0f","1f9b8-1f3ff-200d-2640-fe0f"],a:"11.0"},{n:["supervillain"],u:"1f9b9",v:["1f9b9-1f3fb","1f9b9-1f3fc","1f9b9-1f3fd","1f9b9-1f3fe","1f9b9-1f3ff"],a:"11.0"},{n:["man supervillain","male supervillain"],u:"1f9b9-200d-2642-fe0f",v:["1f9b9-1f3fb-200d-2642-fe0f","1f9b9-1f3fc-200d-2642-fe0f","1f9b9-1f3fd-200d-2642-fe0f","1f9b9-1f3fe-200d-2642-fe0f","1f9b9-1f3ff-200d-2642-fe0f"],a:"11.0"},{n:["woman supervillain","female supervillain"],u:"1f9b9-200d-2640-fe0f",v:["1f9b9-1f3fb-200d-2640-fe0f","1f9b9-1f3fc-200d-2640-fe0f","1f9b9-1f3fd-200d-2640-fe0f","1f9b9-1f3fe-200d-2640-fe0f","1f9b9-1f3ff-200d-2640-fe0f"],a:"11.0"},{n:["mage"],u:"1f9d9",v:["1f9d9-1f3fb","1f9d9-1f3fc","1f9d9-1f3fd","1f9d9-1f3fe","1f9d9-1f3ff"],a:"5.0"},{n:["man mage","male mage"],u:"1f9d9-200d-2642-fe0f",v:["1f9d9-1f3fb-200d-2642-fe0f","1f9d9-1f3fc-200d-2642-fe0f","1f9d9-1f3fd-200d-2642-fe0f","1f9d9-1f3fe-200d-2642-fe0f","1f9d9-1f3ff-200d-2642-fe0f"],a:"5.0"},{n:["woman mage","female mage"],u:"1f9d9-200d-2640-fe0f",v:["1f9d9-1f3fb-200d-2640-fe0f","1f9d9-1f3fc-200d-2640-fe0f","1f9d9-1f3fd-200d-2640-fe0f","1f9d9-1f3fe-200d-2640-fe0f","1f9d9-1f3ff-200d-2640-fe0f"],a:"5.0"},{n:["fairy"],u:"1f9da",v:["1f9da-1f3fb","1f9da-1f3fc","1f9da-1f3fd","1f9da-1f3fe","1f9da-1f3ff"],a:"5.0"},{n:["man fairy","male fairy"],u:"1f9da-200d-2642-fe0f",v:["1f9da-1f3fb-200d-2642-fe0f","1f9da-1f3fc-200d-2642-fe0f","1f9da-1f3fd-200d-2642-fe0f","1f9da-1f3fe-200d-2642-fe0f","1f9da-1f3ff-200d-2642-fe0f"],a:"5.0"},{n:["woman fairy","female fairy"],u:"1f9da-200d-2640-fe0f",v:["1f9da-1f3fb-200d-2640-fe0f","1f9da-1f3fc-200d-2640-fe0f","1f9da-1f3fd-200d-2640-fe0f","1f9da-1f3fe-200d-2640-fe0f","1f9da-1f3ff-200d-2640-fe0f"],a:"5.0"},{n:["vampire"],u:"1f9db",v:["1f9db-1f3fb","1f9db-1f3fc","1f9db-1f3fd","1f9db-1f3fe","1f9db-1f3ff"],a:"5.0"},{n:["man vampire","male vampire"],u:"1f9db-200d-2642-fe0f",v:["1f9db-1f3fb-200d-2642-fe0f","1f9db-1f3fc-200d-2642-fe0f","1f9db-1f3fd-200d-2642-fe0f","1f9db-1f3fe-200d-2642-fe0f","1f9db-1f3ff-200d-2642-fe0f"],a:"5.0"},{n:["woman vampire","female vampire"],u:"1f9db-200d-2640-fe0f",v:["1f9db-1f3fb-200d-2640-fe0f","1f9db-1f3fc-200d-2640-fe0f","1f9db-1f3fd-200d-2640-fe0f","1f9db-1f3fe-200d-2640-fe0f","1f9db-1f3ff-200d-2640-fe0f"],a:"5.0"},{n:["merperson"],u:"1f9dc",v:["1f9dc-1f3fb","1f9dc-1f3fc","1f9dc-1f3fd","1f9dc-1f3fe","1f9dc-1f3ff"],a:"5.0"},{n:["merman"],u:"1f9dc-200d-2642-fe0f",v:["1f9dc-1f3fb-200d-2642-fe0f","1f9dc-1f3fc-200d-2642-fe0f","1f9dc-1f3fd-200d-2642-fe0f","1f9dc-1f3fe-200d-2642-fe0f","1f9dc-1f3ff-200d-2642-fe0f"],a:"5.0"},{n:["mermaid"],u:"1f9dc-200d-2640-fe0f",v:["1f9dc-1f3fb-200d-2640-fe0f","1f9dc-1f3fc-200d-2640-fe0f","1f9dc-1f3fd-200d-2640-fe0f","1f9dc-1f3fe-200d-2640-fe0f","1f9dc-1f3ff-200d-2640-fe0f"],a:"5.0"},{n:["elf"],u:"1f9dd",v:["1f9dd-1f3fb","1f9dd-1f3fc","1f9dd-1f3fd","1f9dd-1f3fe","1f9dd-1f3ff"],a:"5.0"},{n:["man elf","male elf"],u:"1f9dd-200d-2642-fe0f",v:["1f9dd-1f3fb-200d-2642-fe0f","1f9dd-1f3fc-200d-2642-fe0f","1f9dd-1f3fd-200d-2642-fe0f","1f9dd-1f3fe-200d-2642-fe0f","1f9dd-1f3ff-200d-2642-fe0f"],a:"5.0"},{n:["woman elf","female elf"],u:"1f9dd-200d-2640-fe0f",v:["1f9dd-1f3fb-200d-2640-fe0f","1f9dd-1f3fc-200d-2640-fe0f","1f9dd-1f3fd-200d-2640-fe0f","1f9dd-1f3fe-200d-2640-fe0f","1f9dd-1f3ff-200d-2640-fe0f"],a:"5.0"},{n:["genie"],u:"1f9de",a:"5.0"},{n:["man genie","male genie"],u:"1f9de-200d-2642-fe0f",a:"5.0"},{n:["woman genie","female genie"],u:"1f9de-200d-2640-fe0f",a:"5.0"},{n:["zombie"],u:"1f9df",a:"5.0"},{n:["man zombie","male zombie"],u:"1f9df-200d-2642-fe0f",a:"5.0"},{n:["woman zombie","female zombie"],u:"1f9df-200d-2640-fe0f",a:"5.0"},{n:["troll"],u:"1f9cc",a:"14.0"},{n:["massage","face massage"],u:"1f486",v:["1f486-1f3fb","1f486-1f3fc","1f486-1f3fd","1f486-1f3fe","1f486-1f3ff"],a:"0.6"},{n:["man getting massage","man-getting-massage"],u:"1f486-200d-2642-fe0f",v:["1f486-1f3fb-200d-2642-fe0f","1f486-1f3fc-200d-2642-fe0f","1f486-1f3fd-200d-2642-fe0f","1f486-1f3fe-200d-2642-fe0f","1f486-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman getting massage","woman-getting-massage"],u:"1f486-200d-2640-fe0f",v:["1f486-1f3fb-200d-2640-fe0f","1f486-1f3fc-200d-2640-fe0f","1f486-1f3fd-200d-2640-fe0f","1f486-1f3fe-200d-2640-fe0f","1f486-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["haircut"],u:"1f487",v:["1f487-1f3fb","1f487-1f3fc","1f487-1f3fd","1f487-1f3fe","1f487-1f3ff"],a:"0.6"},{n:["man getting haircut","man-getting-haircut"],u:"1f487-200d-2642-fe0f",v:["1f487-1f3fb-200d-2642-fe0f","1f487-1f3fc-200d-2642-fe0f","1f487-1f3fd-200d-2642-fe0f","1f487-1f3fe-200d-2642-fe0f","1f487-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman getting haircut","woman-getting-haircut"],u:"1f487-200d-2640-fe0f",v:["1f487-1f3fb-200d-2640-fe0f","1f487-1f3fc-200d-2640-fe0f","1f487-1f3fd-200d-2640-fe0f","1f487-1f3fe-200d-2640-fe0f","1f487-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["walking","pedestrian"],u:"1f6b6",v:["1f6b6-1f3fb","1f6b6-1f3fc","1f6b6-1f3fd","1f6b6-1f3fe","1f6b6-1f3ff"],a:"0.6"},{n:["man walking","man-walking"],u:"1f6b6-200d-2642-fe0f",v:["1f6b6-1f3fb-200d-2642-fe0f","1f6b6-1f3fc-200d-2642-fe0f","1f6b6-1f3fd-200d-2642-fe0f","1f6b6-1f3fe-200d-2642-fe0f","1f6b6-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman walking","woman-walking"],u:"1f6b6-200d-2640-fe0f",v:["1f6b6-1f3fb-200d-2640-fe0f","1f6b6-1f3fc-200d-2640-fe0f","1f6b6-1f3fd-200d-2640-fe0f","1f6b6-1f3fe-200d-2640-fe0f","1f6b6-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["standing person"],u:"1f9cd",v:["1f9cd-1f3fb","1f9cd-1f3fc","1f9cd-1f3fd","1f9cd-1f3fe","1f9cd-1f3ff"],a:"12.0"},{n:["man standing"],u:"1f9cd-200d-2642-fe0f",v:["1f9cd-1f3fb-200d-2642-fe0f","1f9cd-1f3fc-200d-2642-fe0f","1f9cd-1f3fd-200d-2642-fe0f","1f9cd-1f3fe-200d-2642-fe0f","1f9cd-1f3ff-200d-2642-fe0f"],a:"12.0"},{n:["woman standing"],u:"1f9cd-200d-2640-fe0f",v:["1f9cd-1f3fb-200d-2640-fe0f","1f9cd-1f3fc-200d-2640-fe0f","1f9cd-1f3fd-200d-2640-fe0f","1f9cd-1f3fe-200d-2640-fe0f","1f9cd-1f3ff-200d-2640-fe0f"],a:"12.0"},{n:["kneeling person"],u:"1f9ce",v:["1f9ce-1f3fb","1f9ce-1f3fc","1f9ce-1f3fd","1f9ce-1f3fe","1f9ce-1f3ff"],a:"12.0"},{n:["man kneeling"],u:"1f9ce-200d-2642-fe0f",v:["1f9ce-1f3fb-200d-2642-fe0f","1f9ce-1f3fc-200d-2642-fe0f","1f9ce-1f3fd-200d-2642-fe0f","1f9ce-1f3fe-200d-2642-fe0f","1f9ce-1f3ff-200d-2642-fe0f"],a:"12.0"},{n:["woman kneeling"],u:"1f9ce-200d-2640-fe0f",v:["1f9ce-1f3fb-200d-2640-fe0f","1f9ce-1f3fc-200d-2640-fe0f","1f9ce-1f3fd-200d-2640-fe0f","1f9ce-1f3fe-200d-2640-fe0f","1f9ce-1f3ff-200d-2640-fe0f"],a:"12.0"},{n:["person with white cane","person with probing cane"],u:"1f9d1-200d-1f9af",v:["1f9d1-1f3fb-200d-1f9af","1f9d1-1f3fc-200d-1f9af","1f9d1-1f3fd-200d-1f9af","1f9d1-1f3fe-200d-1f9af","1f9d1-1f3ff-200d-1f9af"],a:"12.1"},{n:["man with white cane","man with probing cane"],u:"1f468-200d-1f9af",v:["1f468-1f3fb-200d-1f9af","1f468-1f3fc-200d-1f9af","1f468-1f3fd-200d-1f9af","1f468-1f3fe-200d-1f9af","1f468-1f3ff-200d-1f9af"],a:"12.0"},{n:["woman with white cane","woman with probing cane"],u:"1f469-200d-1f9af",v:["1f469-1f3fb-200d-1f9af","1f469-1f3fc-200d-1f9af","1f469-1f3fd-200d-1f9af","1f469-1f3fe-200d-1f9af","1f469-1f3ff-200d-1f9af"],a:"12.0"},{n:["person in motorized wheelchair"],u:"1f9d1-200d-1f9bc",v:["1f9d1-1f3fb-200d-1f9bc","1f9d1-1f3fc-200d-1f9bc","1f9d1-1f3fd-200d-1f9bc","1f9d1-1f3fe-200d-1f9bc","1f9d1-1f3ff-200d-1f9bc"],a:"12.1"},{n:["man in motorized wheelchair"],u:"1f468-200d-1f9bc",v:["1f468-1f3fb-200d-1f9bc","1f468-1f3fc-200d-1f9bc","1f468-1f3fd-200d-1f9bc","1f468-1f3fe-200d-1f9bc","1f468-1f3ff-200d-1f9bc"],a:"12.0"},{n:["woman in motorized wheelchair"],u:"1f469-200d-1f9bc",v:["1f469-1f3fb-200d-1f9bc","1f469-1f3fc-200d-1f9bc","1f469-1f3fd-200d-1f9bc","1f469-1f3fe-200d-1f9bc","1f469-1f3ff-200d-1f9bc"],a:"12.0"},{n:["person in manual wheelchair"],u:"1f9d1-200d-1f9bd",v:["1f9d1-1f3fb-200d-1f9bd","1f9d1-1f3fc-200d-1f9bd","1f9d1-1f3fd-200d-1f9bd","1f9d1-1f3fe-200d-1f9bd","1f9d1-1f3ff-200d-1f9bd"],a:"12.1"},{n:["man in manual wheelchair"],u:"1f468-200d-1f9bd",v:["1f468-1f3fb-200d-1f9bd","1f468-1f3fc-200d-1f9bd","1f468-1f3fd-200d-1f9bd","1f468-1f3fe-200d-1f9bd","1f468-1f3ff-200d-1f9bd"],a:"12.0"},{n:["woman in manual wheelchair"],u:"1f469-200d-1f9bd",v:["1f469-1f3fb-200d-1f9bd","1f469-1f3fc-200d-1f9bd","1f469-1f3fd-200d-1f9bd","1f469-1f3fe-200d-1f9bd","1f469-1f3ff-200d-1f9bd"],a:"12.0"},{n:["runner","running"],u:"1f3c3",v:["1f3c3-1f3fb","1f3c3-1f3fc","1f3c3-1f3fd","1f3c3-1f3fe","1f3c3-1f3ff"],a:"0.6"},{n:["man running","man-running"],u:"1f3c3-200d-2642-fe0f",v:["1f3c3-1f3fb-200d-2642-fe0f","1f3c3-1f3fc-200d-2642-fe0f","1f3c3-1f3fd-200d-2642-fe0f","1f3c3-1f3fe-200d-2642-fe0f","1f3c3-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman running","woman-running"],u:"1f3c3-200d-2640-fe0f",v:["1f3c3-1f3fb-200d-2640-fe0f","1f3c3-1f3fc-200d-2640-fe0f","1f3c3-1f3fd-200d-2640-fe0f","1f3c3-1f3fe-200d-2640-fe0f","1f3c3-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["dancer"],u:"1f483",v:["1f483-1f3fb","1f483-1f3fc","1f483-1f3fd","1f483-1f3fe","1f483-1f3ff"],a:"0.6"},{n:["man dancing"],u:"1f57a",v:["1f57a-1f3fb","1f57a-1f3fc","1f57a-1f3fd","1f57a-1f3fe","1f57a-1f3ff"],a:"3.0"},{n:["person in suit levitating","man in business suit levitating"],u:"1f574-fe0f",v:["1f574-1f3fb","1f574-1f3fc","1f574-1f3fd","1f574-1f3fe","1f574-1f3ff"],a:"0.7"},{n:["dancers","woman with bunny ears"],u:"1f46f",a:"0.6"},{n:["men with bunny ears","men-with-bunny-ears-partying","man-with-bunny-ears-partying"],u:"1f46f-200d-2642-fe0f",a:"4.0"},{n:["women with bunny ears","women-with-bunny-ears-partying","woman-with-bunny-ears-partying"],u:"1f46f-200d-2640-fe0f",a:"4.0"},{n:["person in steamy room"],u:"1f9d6",v:["1f9d6-1f3fb","1f9d6-1f3fc","1f9d6-1f3fd","1f9d6-1f3fe","1f9d6-1f3ff"],a:"5.0"},{n:["man in steamy room"],u:"1f9d6-200d-2642-fe0f",v:["1f9d6-1f3fb-200d-2642-fe0f","1f9d6-1f3fc-200d-2642-fe0f","1f9d6-1f3fd-200d-2642-fe0f","1f9d6-1f3fe-200d-2642-fe0f","1f9d6-1f3ff-200d-2642-fe0f"],a:"5.0"},{n:["woman in steamy room"],u:"1f9d6-200d-2640-fe0f",v:["1f9d6-1f3fb-200d-2640-fe0f","1f9d6-1f3fc-200d-2640-fe0f","1f9d6-1f3fd-200d-2640-fe0f","1f9d6-1f3fe-200d-2640-fe0f","1f9d6-1f3ff-200d-2640-fe0f"],a:"5.0"},{n:["person climbing"],u:"1f9d7",v:["1f9d7-1f3fb","1f9d7-1f3fc","1f9d7-1f3fd","1f9d7-1f3fe","1f9d7-1f3ff"],a:"5.0"},{n:["man climbing"],u:"1f9d7-200d-2642-fe0f",v:["1f9d7-1f3fb-200d-2642-fe0f","1f9d7-1f3fc-200d-2642-fe0f","1f9d7-1f3fd-200d-2642-fe0f","1f9d7-1f3fe-200d-2642-fe0f","1f9d7-1f3ff-200d-2642-fe0f"],a:"5.0"},{n:["woman climbing"],u:"1f9d7-200d-2640-fe0f",v:["1f9d7-1f3fb-200d-2640-fe0f","1f9d7-1f3fc-200d-2640-fe0f","1f9d7-1f3fd-200d-2640-fe0f","1f9d7-1f3fe-200d-2640-fe0f","1f9d7-1f3ff-200d-2640-fe0f"],a:"5.0"},{n:["fencer"],u:"1f93a",a:"3.0"},{n:["horse racing"],u:"1f3c7",v:["1f3c7-1f3fb","1f3c7-1f3fc","1f3c7-1f3fd","1f3c7-1f3fe","1f3c7-1f3ff"],a:"1.0"},{n:["skier"],u:"26f7-fe0f",a:"0.7"},{n:["snowboarder"],u:"1f3c2",v:["1f3c2-1f3fb","1f3c2-1f3fc","1f3c2-1f3fd","1f3c2-1f3fe","1f3c2-1f3ff"],a:"0.6"},{n:["golfer","person golfing"],u:"1f3cc-fe0f",v:["1f3cc-1f3fb","1f3cc-1f3fc","1f3cc-1f3fd","1f3cc-1f3fe","1f3cc-1f3ff"],a:"0.7"},{n:["man golfing","man-golfing"],u:"1f3cc-fe0f-200d-2642-fe0f",v:["1f3cc-1f3fb-200d-2642-fe0f","1f3cc-1f3fc-200d-2642-fe0f","1f3cc-1f3fd-200d-2642-fe0f","1f3cc-1f3fe-200d-2642-fe0f","1f3cc-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman golfing","woman-golfing"],u:"1f3cc-fe0f-200d-2640-fe0f",v:["1f3cc-1f3fb-200d-2640-fe0f","1f3cc-1f3fc-200d-2640-fe0f","1f3cc-1f3fd-200d-2640-fe0f","1f3cc-1f3fe-200d-2640-fe0f","1f3cc-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["surfer"],u:"1f3c4",v:["1f3c4-1f3fb","1f3c4-1f3fc","1f3c4-1f3fd","1f3c4-1f3fe","1f3c4-1f3ff"],a:"0.6"},{n:["man surfing","man-surfing"],u:"1f3c4-200d-2642-fe0f",v:["1f3c4-1f3fb-200d-2642-fe0f","1f3c4-1f3fc-200d-2642-fe0f","1f3c4-1f3fd-200d-2642-fe0f","1f3c4-1f3fe-200d-2642-fe0f","1f3c4-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman surfing","woman-surfing"],u:"1f3c4-200d-2640-fe0f",v:["1f3c4-1f3fb-200d-2640-fe0f","1f3c4-1f3fc-200d-2640-fe0f","1f3c4-1f3fd-200d-2640-fe0f","1f3c4-1f3fe-200d-2640-fe0f","1f3c4-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["rowboat"],u:"1f6a3",v:["1f6a3-1f3fb","1f6a3-1f3fc","1f6a3-1f3fd","1f6a3-1f3fe","1f6a3-1f3ff"],a:"1.0"},{n:["man rowing boat","man-rowing-boat"],u:"1f6a3-200d-2642-fe0f",v:["1f6a3-1f3fb-200d-2642-fe0f","1f6a3-1f3fc-200d-2642-fe0f","1f6a3-1f3fd-200d-2642-fe0f","1f6a3-1f3fe-200d-2642-fe0f","1f6a3-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman rowing boat","woman-rowing-boat"],u:"1f6a3-200d-2640-fe0f",v:["1f6a3-1f3fb-200d-2640-fe0f","1f6a3-1f3fc-200d-2640-fe0f","1f6a3-1f3fd-200d-2640-fe0f","1f6a3-1f3fe-200d-2640-fe0f","1f6a3-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["swimmer"],u:"1f3ca",v:["1f3ca-1f3fb","1f3ca-1f3fc","1f3ca-1f3fd","1f3ca-1f3fe","1f3ca-1f3ff"],a:"0.6"},{n:["man swimming","man-swimming"],u:"1f3ca-200d-2642-fe0f",v:["1f3ca-1f3fb-200d-2642-fe0f","1f3ca-1f3fc-200d-2642-fe0f","1f3ca-1f3fd-200d-2642-fe0f","1f3ca-1f3fe-200d-2642-fe0f","1f3ca-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman swimming","woman-swimming"],u:"1f3ca-200d-2640-fe0f",v:["1f3ca-1f3fb-200d-2640-fe0f","1f3ca-1f3fc-200d-2640-fe0f","1f3ca-1f3fd-200d-2640-fe0f","1f3ca-1f3fe-200d-2640-fe0f","1f3ca-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["person with ball","person bouncing ball"],u:"26f9-fe0f",v:["26f9-1f3fb","26f9-1f3fc","26f9-1f3fd","26f9-1f3fe","26f9-1f3ff"],a:"0.7"},{n:["man bouncing ball","man-bouncing-ball"],u:"26f9-fe0f-200d-2642-fe0f",v:["26f9-1f3fb-200d-2642-fe0f","26f9-1f3fc-200d-2642-fe0f","26f9-1f3fd-200d-2642-fe0f","26f9-1f3fe-200d-2642-fe0f","26f9-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman bouncing ball","woman-bouncing-ball"],u:"26f9-fe0f-200d-2640-fe0f",v:["26f9-1f3fb-200d-2640-fe0f","26f9-1f3fc-200d-2640-fe0f","26f9-1f3fd-200d-2640-fe0f","26f9-1f3fe-200d-2640-fe0f","26f9-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["weight lifter","person lifting weights"],u:"1f3cb-fe0f",v:["1f3cb-1f3fb","1f3cb-1f3fc","1f3cb-1f3fd","1f3cb-1f3fe","1f3cb-1f3ff"],a:"0.7"},{n:["man lifting weights","man-lifting-weights"],u:"1f3cb-fe0f-200d-2642-fe0f",v:["1f3cb-1f3fb-200d-2642-fe0f","1f3cb-1f3fc-200d-2642-fe0f","1f3cb-1f3fd-200d-2642-fe0f","1f3cb-1f3fe-200d-2642-fe0f","1f3cb-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman lifting weights","woman-lifting-weights"],u:"1f3cb-fe0f-200d-2640-fe0f",v:["1f3cb-1f3fb-200d-2640-fe0f","1f3cb-1f3fc-200d-2640-fe0f","1f3cb-1f3fd-200d-2640-fe0f","1f3cb-1f3fe-200d-2640-fe0f","1f3cb-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["bicyclist"],u:"1f6b4",v:["1f6b4-1f3fb","1f6b4-1f3fc","1f6b4-1f3fd","1f6b4-1f3fe","1f6b4-1f3ff"],a:"1.0"},{n:["man biking","man-biking"],u:"1f6b4-200d-2642-fe0f",v:["1f6b4-1f3fb-200d-2642-fe0f","1f6b4-1f3fc-200d-2642-fe0f","1f6b4-1f3fd-200d-2642-fe0f","1f6b4-1f3fe-200d-2642-fe0f","1f6b4-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman biking","woman-biking"],u:"1f6b4-200d-2640-fe0f",v:["1f6b4-1f3fb-200d-2640-fe0f","1f6b4-1f3fc-200d-2640-fe0f","1f6b4-1f3fd-200d-2640-fe0f","1f6b4-1f3fe-200d-2640-fe0f","1f6b4-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["mountain bicyclist"],u:"1f6b5",v:["1f6b5-1f3fb","1f6b5-1f3fc","1f6b5-1f3fd","1f6b5-1f3fe","1f6b5-1f3ff"],a:"1.0"},{n:["man mountain biking","man-mountain-biking"],u:"1f6b5-200d-2642-fe0f",v:["1f6b5-1f3fb-200d-2642-fe0f","1f6b5-1f3fc-200d-2642-fe0f","1f6b5-1f3fd-200d-2642-fe0f","1f6b5-1f3fe-200d-2642-fe0f","1f6b5-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman mountain biking","woman-mountain-biking"],u:"1f6b5-200d-2640-fe0f",v:["1f6b5-1f3fb-200d-2640-fe0f","1f6b5-1f3fc-200d-2640-fe0f","1f6b5-1f3fd-200d-2640-fe0f","1f6b5-1f3fe-200d-2640-fe0f","1f6b5-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["person doing cartwheel"],u:"1f938",v:["1f938-1f3fb","1f938-1f3fc","1f938-1f3fd","1f938-1f3fe","1f938-1f3ff"],a:"3.0"},{n:["man cartwheeling","man-cartwheeling"],u:"1f938-200d-2642-fe0f",v:["1f938-1f3fb-200d-2642-fe0f","1f938-1f3fc-200d-2642-fe0f","1f938-1f3fd-200d-2642-fe0f","1f938-1f3fe-200d-2642-fe0f","1f938-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman cartwheeling","woman-cartwheeling"],u:"1f938-200d-2640-fe0f",v:["1f938-1f3fb-200d-2640-fe0f","1f938-1f3fc-200d-2640-fe0f","1f938-1f3fd-200d-2640-fe0f","1f938-1f3fe-200d-2640-fe0f","1f938-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["wrestlers"],u:"1f93c",a:"3.0"},{n:["men wrestling","man-wrestling"],u:"1f93c-200d-2642-fe0f",a:"4.0"},{n:["women wrestling","woman-wrestling"],u:"1f93c-200d-2640-fe0f",a:"4.0"},{n:["water polo"],u:"1f93d",v:["1f93d-1f3fb","1f93d-1f3fc","1f93d-1f3fd","1f93d-1f3fe","1f93d-1f3ff"],a:"3.0"},{n:["man playing water polo","man-playing-water-polo"],u:"1f93d-200d-2642-fe0f",v:["1f93d-1f3fb-200d-2642-fe0f","1f93d-1f3fc-200d-2642-fe0f","1f93d-1f3fd-200d-2642-fe0f","1f93d-1f3fe-200d-2642-fe0f","1f93d-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman playing water polo","woman-playing-water-polo"],u:"1f93d-200d-2640-fe0f",v:["1f93d-1f3fb-200d-2640-fe0f","1f93d-1f3fc-200d-2640-fe0f","1f93d-1f3fd-200d-2640-fe0f","1f93d-1f3fe-200d-2640-fe0f","1f93d-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["handball"],u:"1f93e",v:["1f93e-1f3fb","1f93e-1f3fc","1f93e-1f3fd","1f93e-1f3fe","1f93e-1f3ff"],a:"3.0"},{n:["man playing handball","man-playing-handball"],u:"1f93e-200d-2642-fe0f",v:["1f93e-1f3fb-200d-2642-fe0f","1f93e-1f3fc-200d-2642-fe0f","1f93e-1f3fd-200d-2642-fe0f","1f93e-1f3fe-200d-2642-fe0f","1f93e-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman playing handball","woman-playing-handball"],u:"1f93e-200d-2640-fe0f",v:["1f93e-1f3fb-200d-2640-fe0f","1f93e-1f3fc-200d-2640-fe0f","1f93e-1f3fd-200d-2640-fe0f","1f93e-1f3fe-200d-2640-fe0f","1f93e-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["juggling"],u:"1f939",v:["1f939-1f3fb","1f939-1f3fc","1f939-1f3fd","1f939-1f3fe","1f939-1f3ff"],a:"3.0"},{n:["man juggling","man-juggling"],u:"1f939-200d-2642-fe0f",v:["1f939-1f3fb-200d-2642-fe0f","1f939-1f3fc-200d-2642-fe0f","1f939-1f3fd-200d-2642-fe0f","1f939-1f3fe-200d-2642-fe0f","1f939-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman juggling","woman-juggling"],u:"1f939-200d-2640-fe0f",v:["1f939-1f3fb-200d-2640-fe0f","1f939-1f3fc-200d-2640-fe0f","1f939-1f3fd-200d-2640-fe0f","1f939-1f3fe-200d-2640-fe0f","1f939-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["person in lotus position"],u:"1f9d8",v:["1f9d8-1f3fb","1f9d8-1f3fc","1f9d8-1f3fd","1f9d8-1f3fe","1f9d8-1f3ff"],a:"5.0"},{n:["man in lotus position"],u:"1f9d8-200d-2642-fe0f",v:["1f9d8-1f3fb-200d-2642-fe0f","1f9d8-1f3fc-200d-2642-fe0f","1f9d8-1f3fd-200d-2642-fe0f","1f9d8-1f3fe-200d-2642-fe0f","1f9d8-1f3ff-200d-2642-fe0f"],a:"5.0"},{n:["woman in lotus position"],u:"1f9d8-200d-2640-fe0f",v:["1f9d8-1f3fb-200d-2640-fe0f","1f9d8-1f3fc-200d-2640-fe0f","1f9d8-1f3fd-200d-2640-fe0f","1f9d8-1f3fe-200d-2640-fe0f","1f9d8-1f3ff-200d-2640-fe0f"],a:"5.0"},{n:["bath"],u:"1f6c0",v:["1f6c0-1f3fb","1f6c0-1f3fc","1f6c0-1f3fd","1f6c0-1f3fe","1f6c0-1f3ff"],a:"0.6"},{n:["sleeping accommodation"],u:"1f6cc",v:["1f6cc-1f3fb","1f6cc-1f3fc","1f6cc-1f3fd","1f6cc-1f3fe","1f6cc-1f3ff"],a:"1.0"},{n:["people holding hands"],u:"1f9d1-200d-1f91d-200d-1f9d1",v:["1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fb","1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fc","1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fd","1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fe","1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3ff","1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fb","1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fc","1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fd","1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fe","1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3ff","1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fb","1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fc","1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fd","1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fe","1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3ff","1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fb","1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fc","1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fd","1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fe","1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3ff","1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fb","1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fc","1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fd","1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fe","1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3ff"],a:"12.0"},{n:["women holding hands","two women holding hands"],u:"1f46d",v:["1f46d-1f3fb","1f46d-1f3fc","1f46d-1f3fd","1f46d-1f3fe","1f46d-1f3ff","1f469-1f3fb-200d-1f91d-200d-1f469-1f3fc","1f469-1f3fb-200d-1f91d-200d-1f469-1f3fd","1f469-1f3fb-200d-1f91d-200d-1f469-1f3fe","1f469-1f3fb-200d-1f91d-200d-1f469-1f3ff","1f469-1f3fc-200d-1f91d-200d-1f469-1f3fb","1f469-1f3fc-200d-1f91d-200d-1f469-1f3fd","1f469-1f3fc-200d-1f91d-200d-1f469-1f3fe","1f469-1f3fc-200d-1f91d-200d-1f469-1f3ff","1f469-1f3fd-200d-1f91d-200d-1f469-1f3fb","1f469-1f3fd-200d-1f91d-200d-1f469-1f3fc","1f469-1f3fd-200d-1f91d-200d-1f469-1f3fe","1f469-1f3fd-200d-1f91d-200d-1f469-1f3ff","1f469-1f3fe-200d-1f91d-200d-1f469-1f3fb","1f469-1f3fe-200d-1f91d-200d-1f469-1f3fc","1f469-1f3fe-200d-1f91d-200d-1f469-1f3fd","1f469-1f3fe-200d-1f91d-200d-1f469-1f3ff","1f469-1f3ff-200d-1f91d-200d-1f469-1f3fb","1f469-1f3ff-200d-1f91d-200d-1f469-1f3fc","1f469-1f3ff-200d-1f91d-200d-1f469-1f3fd","1f469-1f3ff-200d-1f91d-200d-1f469-1f3fe"],a:"1.0"},{n:["couple","man and woman holding hands","woman and man holding hands"],u:"1f46b",v:["1f46b-1f3fb","1f46b-1f3fc","1f46b-1f3fd","1f46b-1f3fe","1f46b-1f3ff","1f469-1f3fb-200d-1f91d-200d-1f468-1f3fc","1f469-1f3fb-200d-1f91d-200d-1f468-1f3fd","1f469-1f3fb-200d-1f91d-200d-1f468-1f3fe","1f469-1f3fb-200d-1f91d-200d-1f468-1f3ff","1f469-1f3fc-200d-1f91d-200d-1f468-1f3fb","1f469-1f3fc-200d-1f91d-200d-1f468-1f3fd","1f469-1f3fc-200d-1f91d-200d-1f468-1f3fe","1f469-1f3fc-200d-1f91d-200d-1f468-1f3ff","1f469-1f3fd-200d-1f91d-200d-1f468-1f3fb","1f469-1f3fd-200d-1f91d-200d-1f468-1f3fc","1f469-1f3fd-200d-1f91d-200d-1f468-1f3fe","1f469-1f3fd-200d-1f91d-200d-1f468-1f3ff","1f469-1f3fe-200d-1f91d-200d-1f468-1f3fb","1f469-1f3fe-200d-1f91d-200d-1f468-1f3fc","1f469-1f3fe-200d-1f91d-200d-1f468-1f3fd","1f469-1f3fe-200d-1f91d-200d-1f468-1f3ff","1f469-1f3ff-200d-1f91d-200d-1f468-1f3fb","1f469-1f3ff-200d-1f91d-200d-1f468-1f3fc","1f469-1f3ff-200d-1f91d-200d-1f468-1f3fd","1f469-1f3ff-200d-1f91d-200d-1f468-1f3fe"],a:"0.6"},{n:["men holding hands","two men holding hands"],u:"1f46c",v:["1f46c-1f3fb","1f46c-1f3fc","1f46c-1f3fd","1f46c-1f3fe","1f46c-1f3ff","1f468-1f3fb-200d-1f91d-200d-1f468-1f3fc","1f468-1f3fb-200d-1f91d-200d-1f468-1f3fd","1f468-1f3fb-200d-1f91d-200d-1f468-1f3fe","1f468-1f3fb-200d-1f91d-200d-1f468-1f3ff","1f468-1f3fc-200d-1f91d-200d-1f468-1f3fb","1f468-1f3fc-200d-1f91d-200d-1f468-1f3fd","1f468-1f3fc-200d-1f91d-200d-1f468-1f3fe","1f468-1f3fc-200d-1f91d-200d-1f468-1f3ff","1f468-1f3fd-200d-1f91d-200d-1f468-1f3fb","1f468-1f3fd-200d-1f91d-200d-1f468-1f3fc","1f468-1f3fd-200d-1f91d-200d-1f468-1f3fe","1f468-1f3fd-200d-1f91d-200d-1f468-1f3ff","1f468-1f3fe-200d-1f91d-200d-1f468-1f3fb","1f468-1f3fe-200d-1f91d-200d-1f468-1f3fc","1f468-1f3fe-200d-1f91d-200d-1f468-1f3fd","1f468-1f3fe-200d-1f91d-200d-1f468-1f3ff","1f468-1f3ff-200d-1f91d-200d-1f468-1f3fb","1f468-1f3ff-200d-1f91d-200d-1f468-1f3fc","1f468-1f3ff-200d-1f91d-200d-1f468-1f3fd","1f468-1f3ff-200d-1f91d-200d-1f468-1f3fe"],a:"1.0"},{n:["kiss","couplekiss"],u:"1f48f",v:["1f48f-1f3fb","1f48f-1f3fc","1f48f-1f3fd","1f48f-1f3fe","1f48f-1f3ff","1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc","1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd","1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe","1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff","1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb","1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd","1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe","1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff","1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb","1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc","1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe","1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff","1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb","1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc","1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd","1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff","1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb","1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc","1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd","1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe"],a:"0.6"},{n:["woman-kiss-man","kiss: woman, man"],u:"1f469-200d-2764-fe0f-200d-1f48b-200d-1f468",v:["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb","1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc","1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd","1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe","1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff","1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb","1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc","1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd","1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe","1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff","1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb","1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc","1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd","1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe","1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff","1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb","1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc","1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd","1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe","1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff","1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb","1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc","1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd","1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe","1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff"],a:"2.0"},{n:["man-kiss-man","kiss: man, man"],u:"1f468-200d-2764-fe0f-200d-1f48b-200d-1f468",v:["1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb","1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc","1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd","1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe","1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff","1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb","1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc","1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd","1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe","1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff","1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb","1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc","1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd","1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe","1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff","1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb","1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc","1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd","1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe","1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff","1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb","1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc","1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd","1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe","1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff"],a:"2.0"},{n:["woman-kiss-woman","kiss: woman, woman"],u:"1f469-200d-2764-fe0f-200d-1f48b-200d-1f469",v:["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb","1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc","1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd","1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe","1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff","1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb","1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc","1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd","1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe","1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff","1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb","1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc","1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd","1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe","1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff","1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb","1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc","1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd","1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe","1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff","1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb","1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc","1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd","1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe","1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff"],a:"2.0"},{n:["couple with heart"],u:"1f491",v:["1f491-1f3fb","1f491-1f3fc","1f491-1f3fd","1f491-1f3fe","1f491-1f3ff","1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fc","1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fd","1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fe","1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3ff","1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fb","1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fd","1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fe","1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3ff","1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fb","1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fc","1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fe","1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3ff","1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fb","1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fc","1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fd","1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3ff","1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fb","1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fc","1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fd","1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fe"],a:"0.6"},{n:["woman-heart-man","couple with heart: woman, man"],u:"1f469-200d-2764-fe0f-200d-1f468",v:["1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fb","1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fc","1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fd","1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fe","1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3ff","1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fb","1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fc","1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fd","1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fe","1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3ff","1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fb","1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fc","1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fd","1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fe","1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3ff","1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fb","1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fc","1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fd","1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fe","1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3ff","1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fb","1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fc","1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fd","1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fe","1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3ff"],a:"2.0"},{n:["man-heart-man","couple with heart: man, man"],u:"1f468-200d-2764-fe0f-200d-1f468",v:["1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fb","1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fc","1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fd","1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fe","1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3ff","1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fb","1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fc","1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fd","1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fe","1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3ff","1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fb","1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fc","1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fd","1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fe","1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3ff","1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fb","1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fc","1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fd","1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fe","1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3ff","1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fb","1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fc","1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fd","1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fe","1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3ff"],a:"2.0"},{n:["woman-heart-woman","couple with heart: woman, woman"],u:"1f469-200d-2764-fe0f-200d-1f469",v:["1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fb","1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fc","1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fd","1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fe","1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3ff","1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fb","1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fc","1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fd","1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fe","1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3ff","1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fb","1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fc","1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fd","1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fe","1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3ff","1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fb","1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fc","1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fd","1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fe","1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3ff","1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fb","1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fc","1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fd","1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fe","1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3ff"],a:"2.0"},{n:["family"],u:"1f46a",a:"0.6"},{n:["man-woman-boy","family: man, woman, boy"],u:"1f468-200d-1f469-200d-1f466",a:"2.0"},{n:["man-woman-girl","family: man, woman, girl"],u:"1f468-200d-1f469-200d-1f467",a:"2.0"},{n:["man-woman-girl-boy","family: man, woman, girl, boy"],u:"1f468-200d-1f469-200d-1f467-200d-1f466",a:"2.0"},{n:["man-woman-boy-boy","family: man, woman, boy, boy"],u:"1f468-200d-1f469-200d-1f466-200d-1f466",a:"2.0"},{n:["man-woman-girl-girl","family: man, woman, girl, girl"],u:"1f468-200d-1f469-200d-1f467-200d-1f467",a:"2.0"},{n:["man-man-boy","family: man, man, boy"],u:"1f468-200d-1f468-200d-1f466",a:"2.0"},{n:["man-man-girl","family: man, man, girl"],u:"1f468-200d-1f468-200d-1f467",a:"2.0"},{n:["man-man-girl-boy","family: man, man, girl, boy"],u:"1f468-200d-1f468-200d-1f467-200d-1f466",a:"2.0"},{n:["man-man-boy-boy","family: man, man, boy, boy"],u:"1f468-200d-1f468-200d-1f466-200d-1f466",a:"2.0"},{n:["man-man-girl-girl","family: man, man, girl, girl"],u:"1f468-200d-1f468-200d-1f467-200d-1f467",a:"2.0"},{n:["woman-woman-boy","family: woman, woman, boy"],u:"1f469-200d-1f469-200d-1f466",a:"2.0"},{n:["woman-woman-girl","family: woman, woman, girl"],u:"1f469-200d-1f469-200d-1f467",a:"2.0"},{n:["woman-woman-girl-boy","family: woman, woman, girl, boy"],u:"1f469-200d-1f469-200d-1f467-200d-1f466",a:"2.0"},{n:["woman-woman-boy-boy","family: woman, woman, boy, boy"],u:"1f469-200d-1f469-200d-1f466-200d-1f466",a:"2.0"},{n:["woman-woman-girl-girl","family: woman, woman, girl, girl"],u:"1f469-200d-1f469-200d-1f467-200d-1f467",a:"2.0"},{n:["man-boy","family: man, boy"],u:"1f468-200d-1f466",a:"4.0"},{n:["man-boy-boy","family: man, boy, boy"],u:"1f468-200d-1f466-200d-1f466",a:"4.0"},{n:["man-girl","family: man, girl"],u:"1f468-200d-1f467",a:"4.0"},{n:["man-girl-boy","family: man, girl, boy"],u:"1f468-200d-1f467-200d-1f466",a:"4.0"},{n:["man-girl-girl","family: man, girl, girl"],u:"1f468-200d-1f467-200d-1f467",a:"4.0"},{n:["woman-boy","family: woman, boy"],u:"1f469-200d-1f466",a:"4.0"},{n:["woman-boy-boy","family: woman, boy, boy"],u:"1f469-200d-1f466-200d-1f466",a:"4.0"},{n:["woman-girl","family: woman, girl"],u:"1f469-200d-1f467",a:"4.0"},{n:["woman-girl-boy","family: woman, girl, boy"],u:"1f469-200d-1f467-200d-1f466",a:"4.0"},{n:["woman-girl-girl","family: woman, girl, girl"],u:"1f469-200d-1f467-200d-1f467",a:"4.0"},{n:["speaking head","speaking head in silhouette"],u:"1f5e3-fe0f",a:"0.7"},{n:["bust in silhouette"],u:"1f464",a:"0.6"},{n:["busts in silhouette"],u:"1f465",a:"1.0"},{n:["people hugging"],u:"1fac2",a:"13.0"},{n:["footprints"],u:"1f463",a:"0.6"}],G8=[{n:["monkey face"],u:"1f435",a:"0.6"},{n:["monkey"],u:"1f412",a:"0.6"},{n:["gorilla"],u:"1f98d",a:"3.0"},{n:["orangutan"],u:"1f9a7",a:"12.0"},{n:["dog","dog face"],u:"1f436",a:"0.6"},{n:["dog","dog2"],u:"1f415",a:"0.7"},{n:["guide dog"],u:"1f9ae",a:"12.0"},{n:["service dog"],u:"1f415-200d-1f9ba",a:"12.0"},{n:["poodle"],u:"1f429",a:"0.6"},{n:["wolf","wolf face"],u:"1f43a",a:"0.6"},{n:["fox face"],u:"1f98a",a:"3.0"},{n:["raccoon"],u:"1f99d",a:"11.0"},{n:["cat","cat face"],u:"1f431",a:"0.6"},{n:["cat","cat2"],u:"1f408",a:"0.7"},{n:["black cat"],u:"1f408-200d-2b1b",a:"13.0"},{n:["lion face"],u:"1f981",a:"1.0"},{n:["tiger","tiger face"],u:"1f42f",a:"0.6"},{n:["tiger","tiger2"],u:"1f405",a:"1.0"},{n:["leopard"],u:"1f406",a:"1.0"},{n:["horse","horse face"],u:"1f434",a:"0.6"},{n:["horse","racehorse"],u:"1f40e",a:"0.6"},{n:["unicorn face"],u:"1f984",a:"1.0"},{n:["zebra face"],u:"1f993",a:"5.0"},{n:["deer"],u:"1f98c",a:"3.0"},{n:["bison"],u:"1f9ac",a:"13.0"},{n:["cow","cow face"],u:"1f42e",a:"0.6"},{n:["ox"],u:"1f402",a:"1.0"},{n:["water buffalo"],u:"1f403",a:"1.0"},{n:["cow","cow2"],u:"1f404",a:"1.0"},{n:["pig","pig face"],u:"1f437",a:"0.6"},{n:["pig","pig2"],u:"1f416",a:"1.0"},{n:["boar"],u:"1f417",a:"0.6"},{n:["pig nose"],u:"1f43d",a:"0.6"},{n:["ram"],u:"1f40f",a:"1.0"},{n:["sheep"],u:"1f411",a:"0.6"},{n:["goat"],u:"1f410",a:"1.0"},{n:["dromedary camel"],u:"1f42a",a:"1.0"},{n:["camel","bactrian camel"],u:"1f42b",a:"0.6"},{n:["llama"],u:"1f999",a:"11.0"},{n:["giraffe face"],u:"1f992",a:"5.0"},{n:["elephant"],u:"1f418",a:"0.6"},{n:["mammoth"],u:"1f9a3",a:"13.0"},{n:["rhinoceros"],u:"1f98f",a:"3.0"},{n:["hippopotamus"],u:"1f99b",a:"11.0"},{n:["mouse","mouse face"],u:"1f42d",a:"0.6"},{n:["mouse","mouse2"],u:"1f401",a:"1.0"},{n:["rat"],u:"1f400",a:"1.0"},{n:["hamster","hamster face"],u:"1f439",a:"0.6"},{n:["rabbit","rabbit face"],u:"1f430",a:"0.6"},{n:["rabbit","rabbit2"],u:"1f407",a:"1.0"},{n:["chipmunk"],u:"1f43f-fe0f",a:"0.7"},{n:["beaver"],u:"1f9ab",a:"13.0"},{n:["hedgehog"],u:"1f994",a:"5.0"},{n:["bat"],u:"1f987",a:"3.0"},{n:["bear","bear face"],u:"1f43b",a:"0.6"},{n:["polar bear"],u:"1f43b-200d-2744-fe0f",a:"13.0"},{n:["koala"],u:"1f428",a:"0.6"},{n:["panda face"],u:"1f43c",a:"0.6"},{n:["sloth"],u:"1f9a5",a:"12.0"},{n:["otter"],u:"1f9a6",a:"12.0"},{n:["skunk"],u:"1f9a8",a:"12.0"},{n:["kangaroo"],u:"1f998",a:"11.0"},{n:["badger"],u:"1f9a1",a:"11.0"},{n:["feet","paw prints"],u:"1f43e",a:"0.6"},{n:["turkey"],u:"1f983",a:"1.0"},{n:["chicken"],u:"1f414",a:"0.6"},{n:["rooster"],u:"1f413",a:"1.0"},{n:["hatching chick"],u:"1f423",a:"0.6"},{n:["baby chick"],u:"1f424",a:"0.6"},{n:["hatched chick","front-facing baby chick"],u:"1f425",a:"0.6"},{n:["bird"],u:"1f426",a:"0.6"},{n:["penguin"],u:"1f427",a:"0.6"},{n:["dove","dove of peace"],u:"1f54a-fe0f",a:"0.7"},{n:["eagle"],u:"1f985",a:"3.0"},{n:["duck"],u:"1f986",a:"3.0"},{n:["swan"],u:"1f9a2",a:"11.0"},{n:["owl"],u:"1f989",a:"3.0"},{n:["dodo"],u:"1f9a4",a:"13.0"},{n:["feather"],u:"1fab6",a:"13.0"},{n:["flamingo"],u:"1f9a9",a:"12.0"},{n:["peacock"],u:"1f99a",a:"11.0"},{n:["parrot"],u:"1f99c",a:"11.0"},{n:["frog","frog face"],u:"1f438",a:"0.6"},{n:["crocodile"],u:"1f40a",a:"1.0"},{n:["turtle"],u:"1f422",a:"0.6"},{n:["lizard"],u:"1f98e",a:"3.0"},{n:["snake"],u:"1f40d",a:"0.6"},{n:["dragon face"],u:"1f432",a:"0.6"},{n:["dragon"],u:"1f409",a:"1.0"},{n:["sauropod"],u:"1f995",a:"5.0"},{n:["t-rex"],u:"1f996",a:"5.0"},{n:["whale","spouting whale"],u:"1f433",a:"0.6"},{n:["whale","whale2"],u:"1f40b",a:"1.0"},{n:["dolphin","flipper"],u:"1f42c",a:"0.6"},{n:["seal"],u:"1f9ad",a:"13.0"},{n:["fish"],u:"1f41f",a:"0.6"},{n:["tropical fish"],u:"1f420",a:"0.6"},{n:["blowfish"],u:"1f421",a:"0.6"},{n:["shark"],u:"1f988",a:"3.0"},{n:["octopus"],u:"1f419",a:"0.6"},{n:["shell","spiral shell"],u:"1f41a",a:"0.6"},{n:["coral"],u:"1fab8",a:"14.0"},{n:["snail"],u:"1f40c",a:"0.6"},{n:["butterfly"],u:"1f98b",a:"3.0"},{n:["bug"],u:"1f41b",a:"0.6"},{n:["ant"],u:"1f41c",a:"0.6"},{n:["bee","honeybee"],u:"1f41d",a:"0.6"},{n:["beetle"],u:"1fab2",a:"13.0"},{n:["ladybug","lady beetle"],u:"1f41e",a:"0.6"},{n:["cricket"],u:"1f997",a:"5.0"},{n:["cockroach"],u:"1fab3",a:"13.0"},{n:["spider"],u:"1f577-fe0f",a:"0.7"},{n:["spider web"],u:"1f578-fe0f",a:"0.7"},{n:["scorpion"],u:"1f982",a:"1.0"},{n:["mosquito"],u:"1f99f",a:"11.0"},{n:["fly"],u:"1fab0",a:"13.0"},{n:["worm"],u:"1fab1",a:"13.0"},{n:["microbe"],u:"1f9a0",a:"11.0"},{n:["bouquet"],u:"1f490",a:"0.6"},{n:["cherry blossom"],u:"1f338",a:"0.6"},{n:["white flower"],u:"1f4ae",a:"0.6"},{n:["lotus"],u:"1fab7",a:"14.0"},{n:["rosette"],u:"1f3f5-fe0f",a:"0.7"},{n:["rose"],u:"1f339",a:"0.6"},{n:["wilted flower"],u:"1f940",a:"3.0"},{n:["hibiscus"],u:"1f33a",a:"0.6"},{n:["sunflower"],u:"1f33b",a:"0.6"},{n:["blossom"],u:"1f33c",a:"0.6"},{n:["tulip"],u:"1f337",a:"0.6"},{n:["seedling"],u:"1f331",a:"0.6"},{n:["potted plant"],u:"1fab4",a:"13.0"},{n:["evergreen tree"],u:"1f332",a:"1.0"},{n:["deciduous tree"],u:"1f333",a:"1.0"},{n:["palm tree"],u:"1f334",a:"0.6"},{n:["cactus"],u:"1f335",a:"0.6"},{n:["ear of rice"],u:"1f33e",a:"0.6"},{n:["herb"],u:"1f33f",a:"0.6"},{n:["shamrock"],u:"2618-fe0f",a:"1.0"},{n:["four leaf clover"],u:"1f340",a:"0.6"},{n:["maple leaf"],u:"1f341",a:"0.6"},{n:["fallen leaf"],u:"1f342",a:"0.6"},{n:["leaves","leaf fluttering in wind"],u:"1f343",a:"0.6"},{n:["empty nest"],u:"1fab9",a:"14.0"},{n:["nest with eggs"],u:"1faba",a:"14.0"}],$8=[{n:["grapes"],u:"1f347",a:"0.6"},{n:["melon"],u:"1f348",a:"0.6"},{n:["watermelon"],u:"1f349",a:"0.6"},{n:["tangerine"],u:"1f34a",a:"0.6"},{n:["lemon"],u:"1f34b",a:"1.0"},{n:["banana"],u:"1f34c",a:"0.6"},{n:["pineapple"],u:"1f34d",a:"0.6"},{n:["mango"],u:"1f96d",a:"11.0"},{n:["apple","red apple"],u:"1f34e",a:"0.6"},{n:["green apple"],u:"1f34f",a:"0.6"},{n:["pear"],u:"1f350",a:"1.0"},{n:["peach"],u:"1f351",a:"0.6"},{n:["cherries"],u:"1f352",a:"0.6"},{n:["strawberry"],u:"1f353",a:"0.6"},{n:["blueberries"],u:"1fad0",a:"13.0"},{n:["kiwifruit"],u:"1f95d",a:"3.0"},{n:["tomato"],u:"1f345",a:"0.6"},{n:["olive"],u:"1fad2",a:"13.0"},{n:["coconut"],u:"1f965",a:"5.0"},{n:["avocado"],u:"1f951",a:"3.0"},{n:["eggplant","aubergine"],u:"1f346",a:"0.6"},{n:["potato"],u:"1f954",a:"3.0"},{n:["carrot"],u:"1f955",a:"3.0"},{n:["corn","ear of maize"],u:"1f33d",a:"0.6"},{n:["hot pepper"],u:"1f336-fe0f",a:"0.7"},{n:["bell pepper"],u:"1fad1",a:"13.0"},{n:["cucumber"],u:"1f952",a:"3.0"},{n:["leafy green"],u:"1f96c",a:"11.0"},{n:["broccoli"],u:"1f966",a:"5.0"},{n:["garlic"],u:"1f9c4",a:"12.0"},{n:["onion"],u:"1f9c5",a:"12.0"},{n:["mushroom"],u:"1f344",a:"0.6"},{n:["peanuts"],u:"1f95c",a:"3.0"},{n:["beans"],u:"1fad8",a:"14.0"},{n:["chestnut"],u:"1f330",a:"0.6"},{n:["bread"],u:"1f35e",a:"0.6"},{n:["croissant"],u:"1f950",a:"3.0"},{n:["baguette bread"],u:"1f956",a:"3.0"},{n:["flatbread"],u:"1fad3",a:"13.0"},{n:["pretzel"],u:"1f968",a:"5.0"},{n:["bagel"],u:"1f96f",a:"11.0"},{n:["pancakes"],u:"1f95e",a:"3.0"},{n:["waffle"],u:"1f9c7",a:"12.0"},{n:["cheese wedge"],u:"1f9c0",a:"1.0"},{n:["meat on bone"],u:"1f356",a:"0.6"},{n:["poultry leg"],u:"1f357",a:"0.6"},{n:["cut of meat"],u:"1f969",a:"5.0"},{n:["bacon"],u:"1f953",a:"3.0"},{n:["hamburger"],u:"1f354",a:"0.6"},{n:["fries","french fries"],u:"1f35f",a:"0.6"},{n:["pizza","slice of pizza"],u:"1f355",a:"0.6"},{n:["hotdog","hot dog"],u:"1f32d",a:"1.0"},{n:["sandwich"],u:"1f96a",a:"5.0"},{n:["taco"],u:"1f32e",a:"1.0"},{n:["burrito"],u:"1f32f",a:"1.0"},{n:["tamale"],u:"1fad4",a:"13.0"},{n:["stuffed flatbread"],u:"1f959",a:"3.0"},{n:["falafel"],u:"1f9c6",a:"12.0"},{n:["egg"],u:"1f95a",a:"3.0"},{n:["cooking","fried egg"],u:"1f373",a:"0.6"},{n:["shallow pan of food"],u:"1f958",a:"3.0"},{n:["stew","pot of food"],u:"1f372",a:"0.6"},{n:["fondue"],u:"1fad5",a:"13.0"},{n:["bowl with spoon"],u:"1f963",a:"5.0"},{n:["green salad"],u:"1f957",a:"3.0"},{n:["popcorn"],u:"1f37f",a:"1.0"},{n:["butter"],u:"1f9c8",a:"12.0"},{n:["salt","salt shaker"],u:"1f9c2",a:"11.0"},{n:["canned food"],u:"1f96b",a:"5.0"},{n:["bento","bento box"],u:"1f371",a:"0.6"},{n:["rice cracker"],u:"1f358",a:"0.6"},{n:["rice ball"],u:"1f359",a:"0.6"},{n:["rice","cooked rice"],u:"1f35a",a:"0.6"},{n:["curry","curry and rice"],u:"1f35b",a:"0.6"},{n:["ramen","steaming bowl"],u:"1f35c",a:"0.6"},{n:["spaghetti"],u:"1f35d",a:"0.6"},{n:["sweet potato","roasted sweet potato"],u:"1f360",a:"0.6"},{n:["oden"],u:"1f362",a:"0.6"},{n:["sushi"],u:"1f363",a:"0.6"},{n:["fried shrimp"],u:"1f364",a:"0.6"},{n:["fish cake","fish cake with swirl design"],u:"1f365",a:"0.6"},{n:["moon cake"],u:"1f96e",a:"11.0"},{n:["dango"],u:"1f361",a:"0.6"},{n:["dumpling"],u:"1f95f",a:"5.0"},{n:["fortune cookie"],u:"1f960",a:"5.0"},{n:["takeout box"],u:"1f961",a:"5.0"},{n:["crab"],u:"1f980",a:"1.0"},{n:["lobster"],u:"1f99e",a:"11.0"},{n:["shrimp"],u:"1f990",a:"3.0"},{n:["squid"],u:"1f991",a:"3.0"},{n:["oyster"],u:"1f9aa",a:"12.0"},{n:["icecream","soft ice cream"],u:"1f366",a:"0.6"},{n:["shaved ice"],u:"1f367",a:"0.6"},{n:["ice cream"],u:"1f368",a:"0.6"},{n:["doughnut"],u:"1f369",a:"0.6"},{n:["cookie"],u:"1f36a",a:"0.6"},{n:["birthday","birthday cake"],u:"1f382",a:"0.6"},{n:["cake","shortcake"],u:"1f370",a:"0.6"},{n:["cupcake"],u:"1f9c1",a:"11.0"},{n:["pie"],u:"1f967",a:"5.0"},{n:["chocolate bar"],u:"1f36b",a:"0.6"},{n:["candy"],u:"1f36c",a:"0.6"},{n:["lollipop"],u:"1f36d",a:"0.6"},{n:["custard"],u:"1f36e",a:"0.6"},{n:["honey pot"],u:"1f36f",a:"0.6"},{n:["baby bottle"],u:"1f37c",a:"1.0"},{n:["glass of milk"],u:"1f95b",a:"3.0"},{n:["coffee","hot beverage"],u:"2615",a:"0.6"},{n:["teapot"],u:"1fad6",a:"13.0"},{n:["tea","teacup without handle"],u:"1f375",a:"0.6"},{n:["sake","sake bottle and cup"],u:"1f376",a:"0.6"},{n:["champagne","bottle with popping cork"],u:"1f37e",a:"1.0"},{n:["wine glass"],u:"1f377",a:"0.6"},{n:["cocktail","cocktail glass"],u:"1f378",a:"0.6"},{n:["tropical drink"],u:"1f379",a:"0.6"},{n:["beer","beer mug"],u:"1f37a",a:"0.6"},{n:["beers","clinking beer mugs"],u:"1f37b",a:"0.6"},{n:["clinking glasses"],u:"1f942",a:"3.0"},{n:["tumbler glass"],u:"1f943",a:"3.0"},{n:["pouring liquid"],u:"1fad7",a:"14.0"},{n:["cup with straw"],u:"1f964",a:"5.0"},{n:["bubble tea"],u:"1f9cb",a:"13.0"},{n:["beverage box"],u:"1f9c3",a:"12.0"},{n:["mate drink"],u:"1f9c9",a:"12.0"},{n:["ice cube"],u:"1f9ca",a:"12.0"},{n:["chopsticks"],u:"1f962",a:"5.0"},{n:["knife fork plate","fork and knife with plate"],u:"1f37d-fe0f",a:"0.7"},{n:["fork and knife"],u:"1f374",a:"0.6"},{n:["spoon"],u:"1f944",a:"3.0"},{n:["hocho","knife"],u:"1f52a",a:"0.6"},{n:["jar"],u:"1fad9",a:"14.0"},{n:["amphora"],u:"1f3fa",a:"1.0"}],Z8=[{n:["earth africa","earth globe europe-africa"],u:"1f30d",a:"0.7"},{n:["earth americas","earth globe americas"],u:"1f30e",a:"0.7"},{n:["earth asia","earth globe asia-australia"],u:"1f30f",a:"0.6"},{n:["globe with meridians"],u:"1f310",a:"1.0"},{n:["world map"],u:"1f5fa-fe0f",a:"0.7"},{n:["japan","silhouette of japan"],u:"1f5fe",a:"0.6"},{n:["compass"],u:"1f9ed",a:"11.0"},{n:["snow-capped mountain","snow capped mountain"],u:"1f3d4-fe0f",a:"0.7"},{n:["mountain"],u:"26f0-fe0f",a:"0.7"},{n:["volcano"],u:"1f30b",a:"0.6"},{n:["mount fuji"],u:"1f5fb",a:"0.6"},{n:["camping"],u:"1f3d5-fe0f",a:"0.7"},{n:["beach with umbrella"],u:"1f3d6-fe0f",a:"0.7"},{n:["desert"],u:"1f3dc-fe0f",a:"0.7"},{n:["desert island"],u:"1f3dd-fe0f",a:"0.7"},{n:["national park"],u:"1f3de-fe0f",a:"0.7"},{n:["stadium"],u:"1f3df-fe0f",a:"0.7"},{n:["classical building"],u:"1f3db-fe0f",a:"0.7"},{n:["building construction"],u:"1f3d7-fe0f",a:"0.7"},{n:["brick","bricks"],u:"1f9f1",a:"11.0"},{n:["rock"],u:"1faa8",a:"13.0"},{n:["wood"],u:"1fab5",a:"13.0"},{n:["hut"],u:"1f6d6",a:"13.0"},{n:["houses","house buildings"],u:"1f3d8-fe0f",a:"0.7"},{n:["derelict house","derelict house building"],u:"1f3da-fe0f",a:"0.7"},{n:["house","house building"],u:"1f3e0",a:"0.6"},{n:["house with garden"],u:"1f3e1",a:"0.6"},{n:["office","office building"],u:"1f3e2",a:"0.6"},{n:["post office","japanese post office"],u:"1f3e3",a:"0.6"},{n:["european post office"],u:"1f3e4",a:"1.0"},{n:["hospital"],u:"1f3e5",a:"0.6"},{n:["bank"],u:"1f3e6",a:"0.6"},{n:["hotel"],u:"1f3e8",a:"0.6"},{n:["love hotel"],u:"1f3e9",a:"0.6"},{n:["convenience store"],u:"1f3ea",a:"0.6"},{n:["school"],u:"1f3eb",a:"0.6"},{n:["department store"],u:"1f3ec",a:"0.6"},{n:["factory"],u:"1f3ed",a:"0.6"},{n:["japanese castle"],u:"1f3ef",a:"0.6"},{n:["european castle"],u:"1f3f0",a:"0.6"},{n:["wedding"],u:"1f492",a:"0.6"},{n:["tokyo tower"],u:"1f5fc",a:"0.6"},{n:["statue of liberty"],u:"1f5fd",a:"0.6"},{n:["church"],u:"26ea",a:"0.6"},{n:["mosque"],u:"1f54c",a:"1.0"},{n:["hindu temple"],u:"1f6d5",a:"12.0"},{n:["synagogue"],u:"1f54d",a:"1.0"},{n:["shinto shrine"],u:"26e9-fe0f",a:"0.7"},{n:["kaaba"],u:"1f54b",a:"1.0"},{n:["fountain"],u:"26f2",a:"0.6"},{n:["tent"],u:"26fa",a:"0.6"},{n:["foggy"],u:"1f301",a:"0.6"},{n:["night with stars"],u:"1f303",a:"0.6"},{n:["cityscape"],u:"1f3d9-fe0f",a:"0.7"},{n:["sunrise over mountains"],u:"1f304",a:"0.6"},{n:["sunrise"],u:"1f305",a:"0.6"},{n:["city sunset","cityscape at dusk"],u:"1f306",a:"0.6"},{n:["city sunrise","sunset over buildings"],u:"1f307",a:"0.6"},{n:["bridge at night"],u:"1f309",a:"0.6"},{n:["hotsprings","hot springs"],u:"2668-fe0f",a:"0.6"},{n:["carousel horse"],u:"1f3a0",a:"0.6"},{n:["playground slide"],u:"1f6dd",a:"14.0"},{n:["ferris wheel"],u:"1f3a1",a:"0.6"},{n:["roller coaster"],u:"1f3a2",a:"0.6"},{n:["barber","barber pole"],u:"1f488",a:"0.6"},{n:["circus tent"],u:"1f3aa",a:"0.6"},{n:["steam locomotive"],u:"1f682",a:"1.0"},{n:["railway car"],u:"1f683",a:"0.6"},{n:["high-speed train","bullettrain side"],u:"1f684",a:"0.6"},{n:["bullettrain front","high-speed train with bullet nose"],u:"1f685",a:"0.6"},{n:["train","train2"],u:"1f686",a:"1.0"},{n:["metro"],u:"1f687",a:"0.6"},{n:["light rail"],u:"1f688",a:"1.0"},{n:["station"],u:"1f689",a:"0.6"},{n:["tram"],u:"1f68a",a:"1.0"},{n:["monorail"],u:"1f69d",a:"1.0"},{n:["mountain railway"],u:"1f69e",a:"1.0"},{n:["train","tram car"],u:"1f68b",a:"1.0"},{n:["bus"],u:"1f68c",a:"0.6"},{n:["oncoming bus"],u:"1f68d",a:"0.7"},{n:["trolleybus"],u:"1f68e",a:"1.0"},{n:["minibus"],u:"1f690",a:"1.0"},{n:["ambulance"],u:"1f691",a:"0.6"},{n:["fire engine"],u:"1f692",a:"0.6"},{n:["police car"],u:"1f693",a:"0.6"},{n:["oncoming police car"],u:"1f694",a:"0.7"},{n:["taxi"],u:"1f695",a:"0.6"},{n:["oncoming taxi"],u:"1f696",a:"1.0"},{n:["car","red car","automobile"],u:"1f697",a:"0.6"},{n:["oncoming automobile"],u:"1f698",a:"0.7"},{n:["blue car","recreational vehicle"],u:"1f699",a:"0.6"},{n:["pickup truck"],u:"1f6fb",a:"13.0"},{n:["truck","delivery truck"],u:"1f69a",a:"0.6"},{n:["articulated lorry"],u:"1f69b",a:"1.0"},{n:["tractor"],u:"1f69c",a:"1.0"},{n:["racing car"],u:"1f3ce-fe0f",a:"0.7"},{n:["motorcycle","racing motorcycle"],u:"1f3cd-fe0f",a:"0.7"},{n:["motor scooter"],u:"1f6f5",a:"3.0"},{n:["manual wheelchair"],u:"1f9bd",a:"12.0"},{n:["motorized wheelchair"],u:"1f9bc",a:"12.0"},{n:["auto rickshaw"],u:"1f6fa",a:"12.0"},{n:["bike","bicycle"],u:"1f6b2",a:"0.6"},{n:["scooter"],u:"1f6f4",a:"3.0"},{n:["skateboard"],u:"1f6f9",a:"11.0"},{n:["roller skate"],u:"1f6fc",a:"13.0"},{n:["busstop","bus stop"],u:"1f68f",a:"0.6"},{n:["motorway"],u:"1f6e3-fe0f",a:"0.7"},{n:["railway track"],u:"1f6e4-fe0f",a:"0.7"},{n:["oil drum"],u:"1f6e2-fe0f",a:"0.7"},{n:["fuelpump","fuel pump"],u:"26fd",a:"0.6"},{n:["wheel"],u:"1f6de",a:"14.0"},{n:["rotating light","police cars revolving light"],u:"1f6a8",a:"0.6"},{n:["traffic light","horizontal traffic light"],u:"1f6a5",a:"0.6"},{n:["vertical traffic light"],u:"1f6a6",a:"1.0"},{n:["octagonal sign"],u:"1f6d1",a:"3.0"},{n:["construction","construction sign"],u:"1f6a7",a:"0.6"},{n:["anchor"],u:"2693",a:"0.6"},{n:["ring buoy"],u:"1f6df",a:"14.0"},{n:["boat","sailboat"],u:"26f5",a:"0.6"},{n:["canoe"],u:"1f6f6",a:"3.0"},{n:["speedboat"],u:"1f6a4",a:"0.6"},{n:["passenger ship"],u:"1f6f3-fe0f",a:"0.7"},{n:["ferry"],u:"26f4-fe0f",a:"0.7"},{n:["motor boat"],u:"1f6e5-fe0f",a:"0.7"},{n:["ship"],u:"1f6a2",a:"0.6"},{n:["airplane"],u:"2708-fe0f",a:"0.6"},{n:["small airplane"],u:"1f6e9-fe0f",a:"0.7"},{n:["airplane departure"],u:"1f6eb",a:"1.0"},{n:["airplane arriving"],u:"1f6ec",a:"1.0"},{n:["parachute"],u:"1fa82",a:"12.0"},{n:["seat"],u:"1f4ba",a:"0.6"},{n:["helicopter"],u:"1f681",a:"1.0"},{n:["suspension railway"],u:"1f69f",a:"1.0"},{n:["mountain cableway"],u:"1f6a0",a:"1.0"},{n:["aerial tramway"],u:"1f6a1",a:"1.0"},{n:["satellite"],u:"1f6f0-fe0f",a:"0.7"},{n:["rocket"],u:"1f680",a:"0.6"},{n:["flying saucer"],u:"1f6f8",a:"5.0"},{n:["bellhop bell"],u:"1f6ce-fe0f",a:"0.7"},{n:["luggage"],u:"1f9f3",a:"11.0"},{n:["hourglass"],u:"231b",a:"0.6"},{n:["hourglass flowing sand","hourglass with flowing sand"],u:"23f3",a:"0.6"},{n:["watch"],u:"231a",a:"0.6"},{n:["alarm clock"],u:"23f0",a:"0.6"},{n:["stopwatch"],u:"23f1-fe0f",a:"1.0"},{n:["timer clock"],u:"23f2-fe0f",a:"1.0"},{n:["mantelpiece clock"],u:"1f570-fe0f",a:"0.7"},{n:["clock12","clock face twelve oclock"],u:"1f55b",a:"0.6"},{n:["clock1230","clock face twelve-thirty"],u:"1f567",a:"0.7"},{n:["clock1","clock face one oclock"],u:"1f550",a:"0.6"},{n:["clock130","clock face one-thirty"],u:"1f55c",a:"0.7"},{n:["clock2","clock face two oclock"],u:"1f551",a:"0.6"},{n:["clock230","clock face two-thirty"],u:"1f55d",a:"0.7"},{n:["clock3","clock face three oclock"],u:"1f552",a:"0.6"},{n:["clock330","clock face three-thirty"],u:"1f55e",a:"0.7"},{n:["clock4","clock face four oclock"],u:"1f553",a:"0.6"},{n:["clock430","clock face four-thirty"],u:"1f55f",a:"0.7"},{n:["clock5","clock face five oclock"],u:"1f554",a:"0.6"},{n:["clock530","clock face five-thirty"],u:"1f560",a:"0.7"},{n:["clock6","clock face six oclock"],u:"1f555",a:"0.6"},{n:["clock630","clock face six-thirty"],u:"1f561",a:"0.7"},{n:["clock7","clock face seven oclock"],u:"1f556",a:"0.6"},{n:["clock730","clock face seven-thirty"],u:"1f562",a:"0.7"},{n:["clock8","clock face eight oclock"],u:"1f557",a:"0.6"},{n:["clock830","clock face eight-thirty"],u:"1f563",a:"0.7"},{n:["clock9","clock face nine oclock"],u:"1f558",a:"0.6"},{n:["clock930","clock face nine-thirty"],u:"1f564",a:"0.7"},{n:["clock10","clock face ten oclock"],u:"1f559",a:"0.6"},{n:["clock1030","clock face ten-thirty"],u:"1f565",a:"0.7"},{n:["clock11","clock face eleven oclock"],u:"1f55a",a:"0.6"},{n:["clock1130","clock face eleven-thirty"],u:"1f566",a:"0.7"},{n:["new moon","new moon symbol"],u:"1f311",a:"0.6"},{n:["waxing crescent moon","waxing crescent moon symbol"],u:"1f312",a:"1.0"},{n:["first quarter moon","first quarter moon symbol"],u:"1f313",a:"0.6"},{n:["moon","waxing gibbous moon","waxing gibbous moon symbol"],u:"1f314",a:"0.6"},{n:["full moon","full moon symbol"],u:"1f315",a:"0.6"},{n:["waning gibbous moon","waning gibbous moon symbol"],u:"1f316",a:"1.0"},{n:["last quarter moon","last quarter moon symbol"],u:"1f317",a:"1.0"},{n:["waning crescent moon","waning crescent moon symbol"],u:"1f318",a:"1.0"},{n:["crescent moon"],u:"1f319",a:"0.6"},{n:["new moon with face"],u:"1f31a",a:"1.0"},{n:["first quarter moon with face"],u:"1f31b",a:"0.6"},{n:["last quarter moon with face"],u:"1f31c",a:"0.7"},{n:["thermometer"],u:"1f321-fe0f",a:"0.7"},{n:["sunny","black sun with rays"],u:"2600-fe0f",a:"0.6"},{n:["full moon with face"],u:"1f31d",a:"1.0"},{n:["sun with face"],u:"1f31e",a:"1.0"},{n:["ringed planet"],u:"1fa90",a:"12.0"},{n:["star","white medium star"],u:"2b50",a:"0.6"},{n:["star2","glowing star"],u:"1f31f",a:"0.6"},{n:["stars","shooting star"],u:"1f320",a:"0.6"},{n:["milky way"],u:"1f30c",a:"0.6"},{n:["cloud"],u:"2601-fe0f",a:"0.6"},{n:["partly sunny","sun behind cloud"],u:"26c5",a:"0.6"},{n:["thunder cloud and rain","cloud with lightning and rain"],u:"26c8-fe0f",a:"0.7"},{n:["mostly sunny","sun small cloud","sun behind small cloud"],u:"1f324-fe0f",a:"0.7"},{n:["barely sunny","sun behind cloud","sun behind large cloud"],u:"1f325-fe0f",a:"0.7"},{n:["partly sunny rain","sun behind rain cloud"],u:"1f326-fe0f",a:"0.7"},{n:["rain cloud","cloud with rain"],u:"1f327-fe0f",a:"0.7"},{n:["snow cloud","cloud with snow"],u:"1f328-fe0f",a:"0.7"},{n:["lightning","lightning cloud","cloud with lightning"],u:"1f329-fe0f",a:"0.7"},{n:["tornado","tornado cloud"],u:"1f32a-fe0f",a:"0.7"},{n:["fog"],u:"1f32b-fe0f",a:"0.7"},{n:["wind face","wind blowing face"],u:"1f32c-fe0f",a:"0.7"},{n:["cyclone"],u:"1f300",a:"0.6"},{n:["rainbow"],u:"1f308",a:"0.6"},{n:["closed umbrella"],u:"1f302",a:"0.6"},{n:["umbrella"],u:"2602-fe0f",a:"0.7"},{n:["umbrella with rain drops"],u:"2614",a:"0.6"},{n:["umbrella on ground"],u:"26f1-fe0f",a:"0.7"},{n:["zap","high voltage sign"],u:"26a1",a:"0.6"},{n:["snowflake"],u:"2744-fe0f",a:"0.6"},{n:["snowman"],u:"2603-fe0f",a:"0.7"},{n:["snowman without snow"],u:"26c4",a:"0.6"},{n:["comet"],u:"2604-fe0f",a:"1.0"},{n:["fire"],u:"1f525",a:"0.6"},{n:["droplet"],u:"1f4a7",a:"0.6"},{n:["ocean","water wave"],u:"1f30a",a:"0.6"}],J8=[{n:["jack-o-lantern","jack o lantern"],u:"1f383",a:"0.6"},{n:["christmas tree"],u:"1f384",a:"0.6"},{n:["fireworks"],u:"1f386",a:"0.6"},{n:["sparkler","firework sparkler"],u:"1f387",a:"0.6"},{n:["firecracker"],u:"1f9e8",a:"11.0"},{n:["sparkles"],u:"2728",a:"0.6"},{n:["balloon"],u:"1f388",a:"0.6"},{n:["tada","party popper"],u:"1f389",a:"0.6"},{n:["confetti ball"],u:"1f38a",a:"0.6"},{n:["tanabata tree"],u:"1f38b",a:"0.6"},{n:["bamboo","pine decoration"],u:"1f38d",a:"0.6"},{n:["dolls","japanese dolls"],u:"1f38e",a:"0.6"},{n:["flags","carp streamer"],u:"1f38f",a:"0.6"},{n:["wind chime"],u:"1f390",a:"0.6"},{n:["rice scene","moon viewing ceremony"],u:"1f391",a:"0.6"},{n:["red envelope","red gift envelope"],u:"1f9e7",a:"11.0"},{n:["ribbon"],u:"1f380",a:"0.6"},{n:["gift","wrapped present"],u:"1f381",a:"0.6"},{n:["reminder ribbon"],u:"1f397-fe0f",a:"0.7"},{n:["admission tickets"],u:"1f39f-fe0f",a:"0.7"},{n:["ticket"],u:"1f3ab",a:"0.6"},{n:["medal","military medal"],u:"1f396-fe0f",a:"0.7"},{n:["trophy"],u:"1f3c6",a:"0.6"},{n:["sports medal"],u:"1f3c5",a:"1.0"},{n:["first place medal"],u:"1f947",a:"3.0"},{n:["second place medal"],u:"1f948",a:"3.0"},{n:["third place medal"],u:"1f949",a:"3.0"},{n:["soccer","soccer ball"],u:"26bd",a:"0.6"},{n:["baseball"],u:"26be",a:"0.6"},{n:["softball"],u:"1f94e",a:"11.0"},{n:["basketball","basketball and hoop"],u:"1f3c0",a:"0.6"},{n:["volleyball"],u:"1f3d0",a:"1.0"},{n:["football","american football"],u:"1f3c8",a:"0.6"},{n:["rugby football"],u:"1f3c9",a:"1.0"},{n:["tennis","tennis racquet and ball"],u:"1f3be",a:"0.6"},{n:["flying disc"],u:"1f94f",a:"11.0"},{n:["bowling"],u:"1f3b3",a:"0.6"},{n:["cricket bat and ball"],u:"1f3cf",a:"1.0"},{n:["field hockey stick and ball"],u:"1f3d1",a:"1.0"},{n:["ice hockey stick and puck"],u:"1f3d2",a:"1.0"},{n:["lacrosse","lacrosse stick and ball"],u:"1f94d",a:"11.0"},{n:["table tennis paddle and ball"],u:"1f3d3",a:"1.0"},{n:["badminton racquet and shuttlecock"],u:"1f3f8",a:"1.0"},{n:["boxing glove"],u:"1f94a",a:"3.0"},{n:["martial arts uniform"],u:"1f94b",a:"3.0"},{n:["goal net"],u:"1f945",a:"3.0"},{n:["golf","flag in hole"],u:"26f3",a:"0.6"},{n:["ice skate"],u:"26f8-fe0f",a:"0.7"},{n:["fishing pole and fish"],u:"1f3a3",a:"0.6"},{n:["diving mask"],u:"1f93f",a:"12.0"},{n:["running shirt with sash"],u:"1f3bd",a:"0.6"},{n:["ski","ski and ski boot"],u:"1f3bf",a:"0.6"},{n:["sled"],u:"1f6f7",a:"5.0"},{n:["curling stone"],u:"1f94c",a:"5.0"},{n:["dart","direct hit"],u:"1f3af",a:"0.6"},{n:["yo-yo"],u:"1fa80",a:"12.0"},{n:["kite"],u:"1fa81",a:"12.0"},{n:["8ball","billiards"],u:"1f3b1",a:"0.6"},{n:["crystal ball"],u:"1f52e",a:"0.6"},{n:["magic wand"],u:"1fa84",a:"13.0"},{n:["nazar amulet"],u:"1f9ff",a:"11.0"},{n:["hamsa"],u:"1faac",a:"14.0"},{n:["video game"],u:"1f3ae",a:"0.6"},{n:["joystick"],u:"1f579-fe0f",a:"0.7"},{n:["slot machine"],u:"1f3b0",a:"0.6"},{n:["game die"],u:"1f3b2",a:"0.6"},{n:["jigsaw","jigsaw puzzle piece"],u:"1f9e9",a:"11.0"},{n:["teddy bear"],u:"1f9f8",a:"11.0"},{n:["pinata"],u:"1fa85",a:"13.0"},{n:["mirror ball"],u:"1faa9",a:"14.0"},{n:["nesting dolls"],u:"1fa86",a:"13.0"},{n:["spades","black spade suit"],u:"2660-fe0f",a:"0.6"},{n:["hearts","black heart suit"],u:"2665-fe0f",a:"0.6"},{n:["diamonds","black diamond suit"],u:"2666-fe0f",a:"0.6"},{n:["clubs","black club suit"],u:"2663-fe0f",a:"0.6"},{n:["chess pawn"],u:"265f-fe0f",a:"11.0"},{n:["black joker","playing card black joker"],u:"1f0cf",a:"0.6"},{n:["mahjong","mahjong tile red dragon"],u:"1f004",a:"0.6"},{n:["flower playing cards"],u:"1f3b4",a:"0.6"},{n:["performing arts"],u:"1f3ad",a:"0.6"},{n:["framed picture","frame with picture"],u:"1f5bc-fe0f",a:"0.7"},{n:["art","artist palette"],u:"1f3a8",a:"0.6"},{n:["thread","spool of thread"],u:"1f9f5",a:"11.0"},{n:["sewing needle"],u:"1faa1",a:"13.0"},{n:["yarn","ball of yarn"],u:"1f9f6",a:"11.0"},{n:["knot"],u:"1faa2",a:"13.0"}],H8=[{n:["eyeglasses"],u:"1f453",a:"0.6"},{n:["sunglasses","dark sunglasses"],u:"1f576-fe0f",a:"0.7"},{n:["goggles"],u:"1f97d",a:"11.0"},{n:["lab coat"],u:"1f97c",a:"11.0"},{n:["safety vest"],u:"1f9ba",a:"12.0"},{n:["necktie"],u:"1f454",a:"0.6"},{n:["shirt","tshirt","t-shirt"],u:"1f455",a:"0.6"},{n:["jeans"],u:"1f456",a:"0.6"},{n:["scarf"],u:"1f9e3",a:"5.0"},{n:["gloves"],u:"1f9e4",a:"5.0"},{n:["coat"],u:"1f9e5",a:"5.0"},{n:["socks"],u:"1f9e6",a:"5.0"},{n:["dress"],u:"1f457",a:"0.6"},{n:["kimono"],u:"1f458",a:"0.6"},{n:["sari"],u:"1f97b",a:"12.0"},{n:["one-piece swimsuit"],u:"1fa71",a:"12.0"},{n:["briefs"],u:"1fa72",a:"12.0"},{n:["shorts"],u:"1fa73",a:"12.0"},{n:["bikini"],u:"1f459",a:"0.6"},{n:["womans clothes"],u:"1f45a",a:"0.6"},{n:["purse"],u:"1f45b",a:"0.6"},{n:["handbag"],u:"1f45c",a:"0.6"},{n:["pouch"],u:"1f45d",a:"0.6"},{n:["shopping bags"],u:"1f6cd-fe0f",a:"0.7"},{n:["school satchel"],u:"1f392",a:"0.6"},{n:["thong sandal"],u:"1fa74",a:"13.0"},{n:["shoe","mans shoe"],u:"1f45e",a:"0.6"},{n:["athletic shoe"],u:"1f45f",a:"0.6"},{n:["hiking boot"],u:"1f97e",a:"11.0"},{n:["flat shoe","womans flat shoe"],u:"1f97f",a:"11.0"},{n:["high heel","high-heeled shoe"],u:"1f460",a:"0.6"},{n:["sandal","womans sandal"],u:"1f461",a:"0.6"},{n:["ballet shoes"],u:"1fa70",a:"12.0"},{n:["boot","womans boots"],u:"1f462",a:"0.6"},{n:["crown"],u:"1f451",a:"0.6"},{n:["womans hat"],u:"1f452",a:"0.6"},{n:["tophat","top hat"],u:"1f3a9",a:"0.6"},{n:["mortar board","graduation cap"],u:"1f393",a:"0.6"},{n:["billed cap"],u:"1f9e2",a:"5.0"},{n:["military helmet"],u:"1fa96",a:"13.0"},{n:["rescue worker’s helmet","helmet with white cross"],u:"26d1-fe0f",a:"0.7"},{n:["prayer beads"],u:"1f4ff",a:"1.0"},{n:["lipstick"],u:"1f484",a:"0.6"},{n:["ring"],u:"1f48d",a:"0.6"},{n:["gem","gem stone"],u:"1f48e",a:"0.6"},{n:["mute","speaker with cancellation stroke"],u:"1f507",a:"1.0"},{n:["speaker"],u:"1f508",a:"0.7"},{n:["sound","speaker with one sound wave"],u:"1f509",a:"1.0"},{n:["loud sound","speaker with three sound waves"],u:"1f50a",a:"0.6"},{n:["loudspeaker","public address loudspeaker"],u:"1f4e2",a:"0.6"},{n:["mega","cheering megaphone"],u:"1f4e3",a:"0.6"},{n:["postal horn"],u:"1f4ef",a:"1.0"},{n:["bell"],u:"1f514",a:"0.6"},{n:["no bell","bell with cancellation stroke"],u:"1f515",a:"1.0"},{n:["musical score"],u:"1f3bc",a:"0.6"},{n:["musical note"],u:"1f3b5",a:"0.6"},{n:["notes","multiple musical notes"],u:"1f3b6",a:"0.6"},{n:["studio microphone"],u:"1f399-fe0f",a:"0.7"},{n:["level slider"],u:"1f39a-fe0f",a:"0.7"},{n:["control knobs"],u:"1f39b-fe0f",a:"0.7"},{n:["microphone"],u:"1f3a4",a:"0.6"},{n:["headphone","headphones"],u:"1f3a7",a:"0.6"},{n:["radio"],u:"1f4fb",a:"0.6"},{n:["saxophone"],u:"1f3b7",a:"0.6"},{n:["accordion"],u:"1fa97",a:"13.0"},{n:["guitar"],u:"1f3b8",a:"0.6"},{n:["musical keyboard"],u:"1f3b9",a:"0.6"},{n:["trumpet"],u:"1f3ba",a:"0.6"},{n:["violin"],u:"1f3bb",a:"0.6"},{n:["banjo"],u:"1fa95",a:"12.0"},{n:["drum with drumsticks"],u:"1f941",a:"3.0"},{n:["long drum"],u:"1fa98",a:"13.0"},{n:["iphone","mobile phone"],u:"1f4f1",a:"0.6"},{n:["calling","mobile phone with rightwards arrow at left"],u:"1f4f2",a:"0.6"},{n:["phone","telephone","black telephone"],u:"260e-fe0f",a:"0.6"},{n:["telephone receiver"],u:"1f4de",a:"0.6"},{n:["pager"],u:"1f4df",a:"0.6"},{n:["fax","fax machine"],u:"1f4e0",a:"0.6"},{n:["battery"],u:"1f50b",a:"0.6"},{n:["low battery"],u:"1faab",a:"14.0"},{n:["electric plug"],u:"1f50c",a:"0.6"},{n:["computer","personal computer"],u:"1f4bb",a:"0.6"},{n:["desktop computer"],u:"1f5a5-fe0f",a:"0.7"},{n:["printer"],u:"1f5a8-fe0f",a:"0.7"},{n:["keyboard"],u:"2328-fe0f",a:"1.0"},{n:["computer mouse","three button mouse"],u:"1f5b1-fe0f",a:"0.7"},{n:["trackball"],u:"1f5b2-fe0f",a:"0.7"},{n:["minidisc"],u:"1f4bd",a:"0.6"},{n:["floppy disk"],u:"1f4be",a:"0.6"},{n:["cd","optical disc"],u:"1f4bf",a:"0.6"},{n:["dvd"],u:"1f4c0",a:"0.6"},{n:["abacus"],u:"1f9ee",a:"11.0"},{n:["movie camera"],u:"1f3a5",a:"0.6"},{n:["film frames"],u:"1f39e-fe0f",a:"0.7"},{n:["film projector"],u:"1f4fd-fe0f",a:"0.7"},{n:["clapper","clapper board"],u:"1f3ac",a:"0.6"},{n:["tv","television"],u:"1f4fa",a:"0.6"},{n:["camera"],u:"1f4f7",a:"0.6"},{n:["camera with flash"],u:"1f4f8",a:"1.0"},{n:["video camera"],u:"1f4f9",a:"0.6"},{n:["vhs","videocassette"],u:"1f4fc",a:"0.6"},{n:["mag","left-pointing magnifying glass"],u:"1f50d",a:"0.6"},{n:["mag right","right-pointing magnifying glass"],u:"1f50e",a:"0.6"},{n:["candle"],u:"1f56f-fe0f",a:"0.7"},{n:["bulb","electric light bulb"],u:"1f4a1",a:"0.6"},{n:["flashlight","electric torch"],u:"1f526",a:"0.6"},{n:["lantern","izakaya lantern"],u:"1f3ee",a:"0.6"},{n:["diya lamp"],u:"1fa94",a:"12.0"},{n:["notebook with decorative cover"],u:"1f4d4",a:"0.6"},{n:["closed book"],u:"1f4d5",a:"0.6"},{n:["book","open book"],u:"1f4d6",a:"0.6"},{n:["green book"],u:"1f4d7",a:"0.6"},{n:["blue book"],u:"1f4d8",a:"0.6"},{n:["orange book"],u:"1f4d9",a:"0.6"},{n:["books"],u:"1f4da",a:"0.6"},{n:["notebook"],u:"1f4d3",a:"0.6"},{n:["ledger"],u:"1f4d2",a:"0.6"},{n:["page with curl"],u:"1f4c3",a:"0.6"},{n:["scroll"],u:"1f4dc",a:"0.6"},{n:["page facing up"],u:"1f4c4",a:"0.6"},{n:["newspaper"],u:"1f4f0",a:"0.6"},{n:["rolled-up newspaper","rolled up newspaper"],u:"1f5de-fe0f",a:"0.7"},{n:["bookmark tabs"],u:"1f4d1",a:"0.6"},{n:["bookmark"],u:"1f516",a:"0.6"},{n:["label"],u:"1f3f7-fe0f",a:"0.7"},{n:["moneybag","money bag"],u:"1f4b0",a:"0.6"},{n:["coin"],u:"1fa99",a:"13.0"},{n:["yen","banknote with yen sign"],u:"1f4b4",a:"0.6"},{n:["dollar","banknote with dollar sign"],u:"1f4b5",a:"0.6"},{n:["euro","banknote with euro sign"],u:"1f4b6",a:"1.0"},{n:["pound","banknote with pound sign"],u:"1f4b7",a:"1.0"},{n:["money with wings"],u:"1f4b8",a:"0.6"},{n:["credit card"],u:"1f4b3",a:"0.6"},{n:["receipt"],u:"1f9fe",a:"11.0"},{n:["chart","chart with upwards trend and yen sign"],u:"1f4b9",a:"0.6"},{n:["email","envelope"],u:"2709-fe0f",a:"0.6"},{n:["e-mail","e-mail symbol"],u:"1f4e7",a:"0.6"},{n:["incoming envelope"],u:"1f4e8",a:"0.6"},{n:["envelope with arrow","envelope with downwards arrow above"],u:"1f4e9",a:"0.6"},{n:["outbox tray"],u:"1f4e4",a:"0.6"},{n:["inbox tray"],u:"1f4e5",a:"0.6"},{n:["package"],u:"1f4e6",a:"0.6"},{n:["mailbox","closed mailbox with raised flag"],u:"1f4eb",a:"0.6"},{n:["mailbox closed","closed mailbox with lowered flag"],u:"1f4ea",a:"0.6"},{n:["mailbox with mail","open mailbox with raised flag"],u:"1f4ec",a:"0.7"},{n:["mailbox with no mail","open mailbox with lowered flag"],u:"1f4ed",a:"0.7"},{n:["postbox"],u:"1f4ee",a:"0.6"},{n:["ballot box with ballot"],u:"1f5f3-fe0f",a:"0.7"},{n:["pencil","pencil2"],u:"270f-fe0f",a:"0.6"},{n:["black nib"],u:"2712-fe0f",a:"0.6"},{n:["fountain pen","lower left fountain pen"],u:"1f58b-fe0f",a:"0.7"},{n:["pen","lower left ballpoint pen"],u:"1f58a-fe0f",a:"0.7"},{n:["paintbrush","lower left paintbrush"],u:"1f58c-fe0f",a:"0.7"},{n:["crayon","lower left crayon"],u:"1f58d-fe0f",a:"0.7"},{n:["memo","pencil"],u:"1f4dd",a:"0.6"},{n:["briefcase"],u:"1f4bc",a:"0.6"},{n:["file folder"],u:"1f4c1",a:"0.6"},{n:["open file folder"],u:"1f4c2",a:"0.6"},{n:["card index dividers"],u:"1f5c2-fe0f",a:"0.7"},{n:["date","calendar"],u:"1f4c5",a:"0.6"},{n:["calendar","tear-off calendar"],u:"1f4c6",a:"0.6"},{n:["spiral notepad","spiral note pad"],u:"1f5d2-fe0f",a:"0.7"},{n:["spiral calendar","spiral calendar pad"],u:"1f5d3-fe0f",a:"0.7"},{n:["card index"],u:"1f4c7",a:"0.6"},{n:["chart with upwards trend"],u:"1f4c8",a:"0.6"},{n:["chart with downwards trend"],u:"1f4c9",a:"0.6"},{n:["bar chart"],u:"1f4ca",a:"0.6"},{n:["clipboard"],u:"1f4cb",a:"0.6"},{n:["pushpin"],u:"1f4cc",a:"0.6"},{n:["round pushpin"],u:"1f4cd",a:"0.6"},{n:["paperclip"],u:"1f4ce",a:"0.6"},{n:["linked paperclips"],u:"1f587-fe0f",a:"0.7"},{n:["straight ruler"],u:"1f4cf",a:"0.6"},{n:["triangular ruler"],u:"1f4d0",a:"0.6"},{n:["scissors","black scissors"],u:"2702-fe0f",a:"0.6"},{n:["card file box"],u:"1f5c3-fe0f",a:"0.7"},{n:["file cabinet"],u:"1f5c4-fe0f",a:"0.7"},{n:["wastebasket"],u:"1f5d1-fe0f",a:"0.7"},{n:["lock"],u:"1f512",a:"0.6"},{n:["unlock","open lock"],u:"1f513",a:"0.6"},{n:["lock with ink pen"],u:"1f50f",a:"0.6"},{n:["closed lock with key"],u:"1f510",a:"0.6"},{n:["key"],u:"1f511",a:"0.6"},{n:["old key"],u:"1f5dd-fe0f",a:"0.7"},{n:["hammer"],u:"1f528",a:"0.6"},{n:["axe"],u:"1fa93",a:"12.0"},{n:["pick"],u:"26cf-fe0f",a:"0.7"},{n:["hammer and pick"],u:"2692-fe0f",a:"1.0"},{n:["hammer and wrench"],u:"1f6e0-fe0f",a:"0.7"},{n:["dagger","dagger knife"],u:"1f5e1-fe0f",a:"0.7"},{n:["crossed swords"],u:"2694-fe0f",a:"1.0"},{n:["gun","pistol"],u:"1f52b",a:"0.6"},{n:["boomerang"],u:"1fa83",a:"13.0"},{n:["bow and arrow"],u:"1f3f9",a:"1.0"},{n:["shield"],u:"1f6e1-fe0f",a:"0.7"},{n:["carpentry saw"],u:"1fa9a",a:"13.0"},{n:["wrench"],u:"1f527",a:"0.6"},{n:["screwdriver"],u:"1fa9b",a:"13.0"},{n:["nut and bolt"],u:"1f529",a:"0.6"},{n:["gear"],u:"2699-fe0f",a:"1.0"},{n:["clamp","compression"],u:"1f5dc-fe0f",a:"0.7"},{n:["scales","balance scale"],u:"2696-fe0f",a:"1.0"},{n:["probing cane"],u:"1f9af",a:"12.0"},{n:["link","link symbol"],u:"1f517",a:"0.6"},{n:["chains"],u:"26d3-fe0f",a:"0.7"},{n:["hook"],u:"1fa9d",a:"13.0"},{n:["toolbox"],u:"1f9f0",a:"11.0"},{n:["magnet"],u:"1f9f2",a:"11.0"},{n:["ladder"],u:"1fa9c",a:"13.0"},{n:["alembic"],u:"2697-fe0f",a:"1.0"},{n:["test tube"],u:"1f9ea",a:"11.0"},{n:["petri dish"],u:"1f9eb",a:"11.0"},{n:["dna","dna double helix"],u:"1f9ec",a:"11.0"},{n:["microscope"],u:"1f52c",a:"1.0"},{n:["telescope"],u:"1f52d",a:"1.0"},{n:["satellite antenna"],u:"1f4e1",a:"0.6"},{n:["syringe"],u:"1f489",a:"0.6"},{n:["drop of blood"],u:"1fa78",a:"12.0"},{n:["pill"],u:"1f48a",a:"0.6"},{n:["adhesive bandage"],u:"1fa79",a:"12.0"},{n:["crutch"],u:"1fa7c",a:"14.0"},{n:["stethoscope"],u:"1fa7a",a:"12.0"},{n:["x-ray"],u:"1fa7b",a:"14.0"},{n:["door"],u:"1f6aa",a:"0.6"},{n:["elevator"],u:"1f6d7",a:"13.0"},{n:["mirror"],u:"1fa9e",a:"13.0"},{n:["window"],u:"1fa9f",a:"13.0"},{n:["bed"],u:"1f6cf-fe0f",a:"0.7"},{n:["couch and lamp"],u:"1f6cb-fe0f",a:"0.7"},{n:["chair"],u:"1fa91",a:"12.0"},{n:["toilet"],u:"1f6bd",a:"0.6"},{n:["plunger"],u:"1faa0",a:"13.0"},{n:["shower"],u:"1f6bf",a:"1.0"},{n:["bathtub"],u:"1f6c1",a:"1.0"},{n:["mouse trap"],u:"1faa4",a:"13.0"},{n:["razor"],u:"1fa92",a:"12.0"},{n:["lotion bottle"],u:"1f9f4",a:"11.0"},{n:["safety pin"],u:"1f9f7",a:"11.0"},{n:["broom"],u:"1f9f9",a:"11.0"},{n:["basket"],u:"1f9fa",a:"11.0"},{n:["roll of paper"],u:"1f9fb",a:"11.0"},{n:["bucket"],u:"1faa3",a:"13.0"},{n:["soap","bar of soap"],u:"1f9fc",a:"11.0"},{n:["bubbles"],u:"1fae7",a:"14.0"},{n:["toothbrush"],u:"1faa5",a:"13.0"},{n:["sponge"],u:"1f9fd",a:"11.0"},{n:["fire extinguisher"],u:"1f9ef",a:"11.0"},{n:["shopping trolley"],u:"1f6d2",a:"3.0"},{n:["smoking","smoking symbol"],u:"1f6ac",a:"0.6"},{n:["coffin"],u:"26b0-fe0f",a:"1.0"},{n:["headstone"],u:"1faa6",a:"13.0"},{n:["funeral urn"],u:"26b1-fe0f",a:"1.0"},{n:["moyai"],u:"1f5ff",a:"0.6"},{n:["placard"],u:"1faa7",a:"13.0"},{n:["identification card"],u:"1faaa",a:"14.0"}],P8=[{n:["atm","automated teller machine"],u:"1f3e7",a:"0.6"},{n:["put litter in its place","put litter in its place symbol"],u:"1f6ae",a:"1.0"},{n:["potable water","potable water symbol"],u:"1f6b0",a:"1.0"},{n:["wheelchair","wheelchair symbol"],u:"267f",a:"0.6"},{n:["mens","mens symbol"],u:"1f6b9",a:"0.6"},{n:["womens","womens symbol"],u:"1f6ba",a:"0.6"},{n:["restroom"],u:"1f6bb",a:"0.6"},{n:["baby symbol"],u:"1f6bc",a:"0.6"},{n:["wc","water closet"],u:"1f6be",a:"0.6"},{n:["passport control"],u:"1f6c2",a:"1.0"},{n:["customs"],u:"1f6c3",a:"1.0"},{n:["baggage claim"],u:"1f6c4",a:"1.0"},{n:["left luggage"],u:"1f6c5",a:"1.0"},{n:["warning","warning sign"],u:"26a0-fe0f",a:"0.6"},{n:["children crossing"],u:"1f6b8",a:"1.0"},{n:["no entry"],u:"26d4",a:"0.6"},{n:["no entry sign"],u:"1f6ab",a:"0.6"},{n:["no bicycles"],u:"1f6b3",a:"1.0"},{n:["no smoking","no smoking symbol"],u:"1f6ad",a:"0.6"},{n:["do not litter","do not litter symbol"],u:"1f6af",a:"1.0"},{n:["non-potable water","non-potable water symbol"],u:"1f6b1",a:"1.0"},{n:["no pedestrians"],u:"1f6b7",a:"1.0"},{n:["no mobile phones"],u:"1f4f5",a:"1.0"},{n:["underage","no one under eighteen symbol"],u:"1f51e",a:"0.6"},{n:["radioactive","radioactive sign"],u:"2622-fe0f",a:"1.0"},{n:["biohazard","biohazard sign"],u:"2623-fe0f",a:"1.0"},{n:["arrow up","upwards black arrow"],u:"2b06-fe0f",a:"0.6"},{n:["north east arrow","arrow upper right"],u:"2197-fe0f",a:"0.6"},{n:["arrow right","black rightwards arrow"],u:"27a1-fe0f",a:"0.6"},{n:["south east arrow","arrow lower right"],u:"2198-fe0f",a:"0.6"},{n:["arrow down","downwards black arrow"],u:"2b07-fe0f",a:"0.6"},{n:["south west arrow","arrow lower left"],u:"2199-fe0f",a:"0.6"},{n:["arrow left","leftwards black arrow"],u:"2b05-fe0f",a:"0.6"},{n:["north west arrow","arrow upper left"],u:"2196-fe0f",a:"0.6"},{n:["up down arrow","arrow up down"],u:"2195-fe0f",a:"0.6"},{n:["left right arrow"],u:"2194-fe0f",a:"0.6"},{n:["leftwards arrow with hook"],u:"21a9-fe0f",a:"0.6"},{n:["arrow right hook","rightwards arrow with hook"],u:"21aa-fe0f",a:"0.6"},{n:["arrow heading up","arrow pointing rightwards then curving upwards"],u:"2934-fe0f",a:"0.6"},{n:["arrow heading down","arrow pointing rightwards then curving downwards"],u:"2935-fe0f",a:"0.6"},{n:["arrows clockwise","clockwise downwards and upwards open circle arrows"],u:"1f503",a:"0.6"},{n:["arrows counterclockwise","anticlockwise downwards and upwards open circle arrows"],u:"1f504",a:"1.0"},{n:["back","back with leftwards arrow above"],u:"1f519",a:"0.6"},{n:["end","end with leftwards arrow above"],u:"1f51a",a:"0.6"},{n:["on","on with exclamation mark with left right arrow above"],u:"1f51b",a:"0.6"},{n:["soon","soon with rightwards arrow above"],u:"1f51c",a:"0.6"},{n:["top","top with upwards arrow above"],u:"1f51d",a:"0.6"},{n:["place of worship"],u:"1f6d0",a:"1.0"},{n:["atom symbol"],u:"269b-fe0f",a:"1.0"},{n:["om","om symbol"],u:"1f549-fe0f",a:"0.7"},{n:["star of david"],u:"2721-fe0f",a:"0.7"},{n:["wheel of dharma"],u:"2638-fe0f",a:"0.7"},{n:["yin yang"],u:"262f-fe0f",a:"0.7"},{n:["latin cross"],u:"271d-fe0f",a:"0.7"},{n:["orthodox cross"],u:"2626-fe0f",a:"1.0"},{n:["star and crescent"],u:"262a-fe0f",a:"0.7"},{n:["peace symbol"],u:"262e-fe0f",a:"1.0"},{n:["menorah with nine branches"],u:"1f54e",a:"1.0"},{n:["six pointed star","six pointed star with middle dot"],u:"1f52f",a:"0.6"},{n:["aries"],u:"2648",a:"0.6"},{n:["taurus"],u:"2649",a:"0.6"},{n:["gemini"],u:"264a",a:"0.6"},{n:["cancer"],u:"264b",a:"0.6"},{n:["leo"],u:"264c",a:"0.6"},{n:["virgo"],u:"264d",a:"0.6"},{n:["libra"],u:"264e",a:"0.6"},{n:["scorpius"],u:"264f",a:"0.6"},{n:["sagittarius"],u:"2650",a:"0.6"},{n:["capricorn"],u:"2651",a:"0.6"},{n:["aquarius"],u:"2652",a:"0.6"},{n:["pisces"],u:"2653",a:"0.6"},{n:["ophiuchus"],u:"26ce",a:"0.6"},{n:["twisted rightwards arrows"],u:"1f500",a:"1.0"},{n:["repeat","clockwise rightwards and leftwards open circle arrows"],u:"1f501",a:"1.0"},{n:["repeat one","clockwise rightwards and leftwards open circle arrows with circled one overlay"],u:"1f502",a:"1.0"},{n:["arrow forward","black right-pointing triangle"],u:"25b6-fe0f",a:"0.6"},{n:["fast forward","black right-pointing double triangle"],u:"23e9",a:"0.6"},{n:["next track button","black right pointing double triangle with vertical bar"],u:"23ed-fe0f",a:"0.7"},{n:["play or pause button","black right pointing triangle with double vertical bar"],u:"23ef-fe0f",a:"1.0"},{n:["arrow backward","black left-pointing triangle"],u:"25c0-fe0f",a:"0.6"},{n:["rewind","black left-pointing double triangle"],u:"23ea",a:"0.6"},{n:["last track button","black left pointing double triangle with vertical bar"],u:"23ee-fe0f",a:"0.7"},{n:["arrow up small","up-pointing small red triangle"],u:"1f53c",a:"0.6"},{n:["arrow double up","black up-pointing double triangle"],u:"23eb",a:"0.6"},{n:["arrow down small","down-pointing small red triangle"],u:"1f53d",a:"0.6"},{n:["arrow double down","black down-pointing double triangle"],u:"23ec",a:"0.6"},{n:["pause button","double vertical bar"],u:"23f8-fe0f",a:"0.7"},{n:["stop button","black square for stop"],u:"23f9-fe0f",a:"0.7"},{n:["record button","black circle for record"],u:"23fa-fe0f",a:"0.7"},{n:["eject","eject button"],u:"23cf-fe0f",a:"1.0"},{n:["cinema"],u:"1f3a6",a:"0.6"},{n:["low brightness","low brightness symbol"],u:"1f505",a:"1.0"},{n:["high brightness","high brightness symbol"],u:"1f506",a:"1.0"},{n:["signal strength","antenna with bars"],u:"1f4f6",a:"0.6"},{n:["vibration mode"],u:"1f4f3",a:"0.6"},{n:["mobile phone off"],u:"1f4f4",a:"0.6"},{n:["female sign"],u:"2640-fe0f",a:"4.0"},{n:["male sign"],u:"2642-fe0f",a:"4.0"},{n:["transgender symbol"],u:"26a7-fe0f",a:"13.0"},{n:["heavy multiplication x"],u:"2716-fe0f",a:"0.6"},{n:["heavy plus sign"],u:"2795",a:"0.6"},{n:["heavy minus sign"],u:"2796",a:"0.6"},{n:["heavy division sign"],u:"2797",a:"0.6"},{n:["heavy equals sign"],u:"1f7f0",a:"14.0"},{n:["infinity"],u:"267e-fe0f",a:"11.0"},{n:["bangbang","double exclamation mark"],u:"203c-fe0f",a:"0.6"},{n:["interrobang","exclamation question mark"],u:"2049-fe0f",a:"0.6"},{n:["question","black question mark ornament"],u:"2753",a:"0.6"},{n:["grey question","white question mark ornament"],u:"2754",a:"0.6"},{n:["grey exclamation","white exclamation mark ornament"],u:"2755",a:"0.6"},{n:["exclamation","heavy exclamation mark","heavy exclamation mark symbol"],u:"2757",a:"0.6"},{n:["wavy dash"],u:"3030-fe0f",a:"0.6"},{n:["currency exchange"],u:"1f4b1",a:"0.6"},{n:["heavy dollar sign"],u:"1f4b2",a:"0.6"},{n:["medical symbol","staff of aesculapius"],u:"2695-fe0f",a:"4.0"},{n:["recycle","black universal recycling symbol"],u:"267b-fe0f",a:"0.6"},{n:["fleur-de-lis","fleur de lis"],u:"269c-fe0f",a:"1.0"},{n:["trident","trident emblem"],u:"1f531",a:"0.6"},{n:["name badge"],u:"1f4db",a:"0.6"},{n:["beginner","japanese symbol for beginner"],u:"1f530",a:"0.6"},{n:["o","heavy large circle"],u:"2b55",a:"0.6"},{n:["white check mark","white heavy check mark"],u:"2705",a:"0.6"},{n:["ballot box with check"],u:"2611-fe0f",a:"0.6"},{n:["heavy check mark"],u:"2714-fe0f",a:"0.6"},{n:["x","cross mark"],u:"274c",a:"0.6"},{n:["negative squared cross mark"],u:"274e",a:"0.6"},{n:["curly loop"],u:"27b0",a:"0.6"},{n:["loop","double curly loop"],u:"27bf",a:"1.0"},{n:["part alternation mark"],u:"303d-fe0f",a:"0.6"},{n:["eight spoked asterisk"],u:"2733-fe0f",a:"0.6"},{n:["eight pointed black star"],u:"2734-fe0f",a:"0.6"},{n:["sparkle"],u:"2747-fe0f",a:"0.6"},{n:["copyright","copyright sign"],u:"00a9-fe0f",a:"0.6"},{n:["registered","registered sign"],u:"00ae-fe0f",a:"0.6"},{n:["tm","trade mark sign"],u:"2122-fe0f",a:"0.6"},{n:["hash","hash key"],u:"0023-fe0f-20e3",a:"0.6"},{n:["keycap: *","keycap star"],u:"002a-fe0f-20e3",a:"2.0"},{n:["zero","keycap 0"],u:"0030-fe0f-20e3",a:"0.6"},{n:["one","keycap 1"],u:"0031-fe0f-20e3",a:"0.6"},{n:["two","keycap 2"],u:"0032-fe0f-20e3",a:"0.6"},{n:["three","keycap 3"],u:"0033-fe0f-20e3",a:"0.6"},{n:["four","keycap 4"],u:"0034-fe0f-20e3",a:"0.6"},{n:["five","keycap 5"],u:"0035-fe0f-20e3",a:"0.6"},{n:["six","keycap 6"],u:"0036-fe0f-20e3",a:"0.6"},{n:["seven","keycap 7"],u:"0037-fe0f-20e3",a:"0.6"},{n:["eight","keycap 8"],u:"0038-fe0f-20e3",a:"0.6"},{n:["nine","keycap 9"],u:"0039-fe0f-20e3",a:"0.6"},{n:["keycap ten"],u:"1f51f",a:"0.6"},{n:["capital abcd","input symbol for latin capital letters"],u:"1f520",a:"0.6"},{n:["abcd","input symbol for latin small letters"],u:"1f521",a:"0.6"},{n:["1234","input symbol for numbers"],u:"1f522",a:"0.6"},{n:["symbols","input symbol for symbols"],u:"1f523",a:"0.6"},{n:["abc","input symbol for latin letters"],u:"1f524",a:"0.6"},{n:["a","negative squared latin capital letter a"],u:"1f170-fe0f",a:"0.6"},{n:["ab","negative squared ab"],u:"1f18e",a:"0.6"},{n:["b","negative squared latin capital letter b"],u:"1f171-fe0f",a:"0.6"},{n:["cl","squared cl"],u:"1f191",a:"0.6"},{n:["cool","squared cool"],u:"1f192",a:"0.6"},{n:["free","squared free"],u:"1f193",a:"0.6"},{n:["information source"],u:"2139-fe0f",a:"0.6"},{n:["id","squared id"],u:"1f194",a:"0.6"},{n:["m","circled latin capital letter m"],u:"24c2-fe0f",a:"0.6"},{n:["new","squared new"],u:"1f195",a:"0.6"},{n:["ng","squared ng"],u:"1f196",a:"0.6"},{n:["o2","negative squared latin capital letter o"],u:"1f17e-fe0f",a:"0.6"},{n:["ok","squared ok"],u:"1f197",a:"0.6"},{n:["parking","negative squared latin capital letter p"],u:"1f17f-fe0f",a:"0.6"},{n:["sos","squared sos"],u:"1f198",a:"0.6"},{n:["up","squared up with exclamation mark"],u:"1f199",a:"0.6"},{n:["vs","squared vs"],u:"1f19a",a:"0.6"},{n:["koko","squared katakana koko"],u:"1f201",a:"0.6"},{n:["sa","squared katakana sa"],u:"1f202-fe0f",a:"0.6"},{n:["u6708","squared cjk unified ideograph-6708"],u:"1f237-fe0f",a:"0.6"},{n:["u6709","squared cjk unified ideograph-6709"],u:"1f236",a:"0.6"},{n:["u6307","squared cjk unified ideograph-6307"],u:"1f22f",a:"0.6"},{n:["ideograph advantage","circled ideograph advantage"],u:"1f250",a:"0.6"},{n:["u5272","squared cjk unified ideograph-5272"],u:"1f239",a:"0.6"},{n:["u7121","squared cjk unified ideograph-7121"],u:"1f21a",a:"0.6"},{n:["u7981","squared cjk unified ideograph-7981"],u:"1f232",a:"0.6"},{n:["accept","circled ideograph accept"],u:"1f251",a:"0.6"},{n:["u7533","squared cjk unified ideograph-7533"],u:"1f238",a:"0.6"},{n:["u5408","squared cjk unified ideograph-5408"],u:"1f234",a:"0.6"},{n:["u7a7a","squared cjk unified ideograph-7a7a"],u:"1f233",a:"0.6"},{n:["congratulations","circled ideograph congratulation"],u:"3297-fe0f",a:"0.6"},{n:["secret","circled ideograph secret"],u:"3299-fe0f",a:"0.6"},{n:["u55b6","squared cjk unified ideograph-55b6"],u:"1f23a",a:"0.6"},{n:["u6e80","squared cjk unified ideograph-6e80"],u:"1f235",a:"0.6"},{n:["red circle","large red circle"],u:"1f534",a:"0.6"},{n:["large orange circle"],u:"1f7e0",a:"12.0"},{n:["large yellow circle"],u:"1f7e1",a:"12.0"},{n:["large green circle"],u:"1f7e2",a:"12.0"},{n:["large blue circle"],u:"1f535",a:"0.6"},{n:["large purple circle"],u:"1f7e3",a:"12.0"},{n:["large brown circle"],u:"1f7e4",a:"12.0"},{n:["black circle","medium black circle"],u:"26ab",a:"0.6"},{n:["white circle","medium white circle"],u:"26aa",a:"0.6"},{n:["large red square"],u:"1f7e5",a:"12.0"},{n:["large orange square"],u:"1f7e7",a:"12.0"},{n:["large yellow square"],u:"1f7e8",a:"12.0"},{n:["large green square"],u:"1f7e9",a:"12.0"},{n:["large blue square"],u:"1f7e6",a:"12.0"},{n:["large purple square"],u:"1f7ea",a:"12.0"},{n:["large brown square"],u:"1f7eb",a:"12.0"},{n:["black large square"],u:"2b1b",a:"0.6"},{n:["white large square"],u:"2b1c",a:"0.6"},{n:["black medium square"],u:"25fc-fe0f",a:"0.6"},{n:["white medium square"],u:"25fb-fe0f",a:"0.6"},{n:["black medium small square"],u:"25fe",a:"0.6"},{n:["white medium small square"],u:"25fd",a:"0.6"},{n:["black small square"],u:"25aa-fe0f",a:"0.6"},{n:["white small square"],u:"25ab-fe0f",a:"0.6"},{n:["large orange diamond"],u:"1f536",a:"0.6"},{n:["large blue diamond"],u:"1f537",a:"0.6"},{n:["small orange diamond"],u:"1f538",a:"0.6"},{n:["small blue diamond"],u:"1f539",a:"0.6"},{n:["small red triangle","up-pointing red triangle"],u:"1f53a",a:"0.6"},{n:["small red triangle down","down-pointing red triangle"],u:"1f53b",a:"0.6"},{n:["diamond shape with a dot inside"],u:"1f4a0",a:"0.6"},{n:["radio button"],u:"1f518",a:"0.6"},{n:["white square button"],u:"1f533",a:"0.6"},{n:["black square button"],u:"1f532",a:"0.6"}],F8=[{n:["chequered flag","checkered flag"],u:"1f3c1",a:"0.6"},{n:["triangular flag on post"],u:"1f6a9",a:"0.6"},{n:["crossed flags"],u:"1f38c",a:"0.6"},{n:["waving black flag"],u:"1f3f4",a:"1.0"},{n:["white flag","waving white flag"],u:"1f3f3-fe0f",a:"0.7"},{n:["rainbow flag","rainbow-flag"],u:"1f3f3-fe0f-200d-1f308",a:"4.0"},{n:["transgender flag"],u:"1f3f3-fe0f-200d-26a7-fe0f",a:"13.0"},{n:["pirate flag"],u:"1f3f4-200d-2620-fe0f",a:"11.0"},{n:["flag-ac","ascension island flag"],u:"1f1e6-1f1e8",a:"2.0"},{n:["flag-ad","andorra flag"],u:"1f1e6-1f1e9",a:"2.0"},{n:["flag-ae","united arab emirates flag"],u:"1f1e6-1f1ea",a:"2.0"},{n:["flag-af","afghanistan flag"],u:"1f1e6-1f1eb",a:"2.0"},{n:["flag-ag","antigua & barbuda flag"],u:"1f1e6-1f1ec",a:"2.0"},{n:["flag-ai","anguilla flag"],u:"1f1e6-1f1ee",a:"2.0"},{n:["flag-al","albania flag"],u:"1f1e6-1f1f1",a:"2.0"},{n:["flag-am","armenia flag"],u:"1f1e6-1f1f2",a:"2.0"},{n:["flag-ao","angola flag"],u:"1f1e6-1f1f4",a:"2.0"},{n:["flag-aq","antarctica flag"],u:"1f1e6-1f1f6",a:"2.0"},{n:["flag-ar","argentina flag"],u:"1f1e6-1f1f7",a:"2.0"},{n:["flag-as","american samoa flag"],u:"1f1e6-1f1f8",a:"2.0"},{n:["flag-at","austria flag"],u:"1f1e6-1f1f9",a:"2.0"},{n:["flag-au","australia flag"],u:"1f1e6-1f1fa",a:"2.0"},{n:["flag-aw","aruba flag"],u:"1f1e6-1f1fc",a:"2.0"},{n:["flag-ax","åland islands flag"],u:"1f1e6-1f1fd",a:"2.0"},{n:["flag-az","azerbaijan flag"],u:"1f1e6-1f1ff",a:"2.0"},{n:["flag-ba","bosnia & herzegovina flag"],u:"1f1e7-1f1e6",a:"2.0"},{n:["flag-bb","barbados flag"],u:"1f1e7-1f1e7",a:"2.0"},{n:["flag-bd","bangladesh flag"],u:"1f1e7-1f1e9",a:"2.0"},{n:["flag-be","belgium flag"],u:"1f1e7-1f1ea",a:"2.0"},{n:["flag-bf","burkina faso flag"],u:"1f1e7-1f1eb",a:"2.0"},{n:["flag-bg","bulgaria flag"],u:"1f1e7-1f1ec",a:"2.0"},{n:["flag-bh","bahrain flag"],u:"1f1e7-1f1ed",a:"2.0"},{n:["flag-bi","burundi flag"],u:"1f1e7-1f1ee",a:"2.0"},{n:["flag-bj","benin flag"],u:"1f1e7-1f1ef",a:"2.0"},{n:["flag-bl","st. barthélemy flag"],u:"1f1e7-1f1f1",a:"2.0"},{n:["flag-bm","bermuda flag"],u:"1f1e7-1f1f2",a:"2.0"},{n:["flag-bn","brunei flag"],u:"1f1e7-1f1f3",a:"2.0"},{n:["flag-bo","bolivia flag"],u:"1f1e7-1f1f4",a:"2.0"},{n:["flag-bq","caribbean netherlands flag"],u:"1f1e7-1f1f6",a:"2.0"},{n:["flag-br","brazil flag"],u:"1f1e7-1f1f7",a:"2.0"},{n:["flag-bs","bahamas flag"],u:"1f1e7-1f1f8",a:"2.0"},{n:["flag-bt","bhutan flag"],u:"1f1e7-1f1f9",a:"2.0"},{n:["flag-bv","bouvet island flag"],u:"1f1e7-1f1fb",a:"2.0"},{n:["flag-bw","botswana flag"],u:"1f1e7-1f1fc",a:"2.0"},{n:["flag-by","belarus flag"],u:"1f1e7-1f1fe",a:"2.0"},{n:["flag-bz","belize flag"],u:"1f1e7-1f1ff",a:"2.0"},{n:["flag-ca","canada flag"],u:"1f1e8-1f1e6",a:"2.0"},{n:["flag-cc","cocos (keeling) islands flag"],u:"1f1e8-1f1e8",a:"2.0"},{n:["flag-cd","congo - kinshasa flag"],u:"1f1e8-1f1e9",a:"2.0"},{n:["flag-cf","central african republic flag"],u:"1f1e8-1f1eb",a:"2.0"},{n:["flag-cg","congo - brazzaville flag"],u:"1f1e8-1f1ec",a:"2.0"},{n:["flag-ch","switzerland flag"],u:"1f1e8-1f1ed",a:"2.0"},{n:["flag-ci","côte d’ivoire flag"],u:"1f1e8-1f1ee",a:"2.0"},{n:["flag-ck","cook islands flag"],u:"1f1e8-1f1f0",a:"2.0"},{n:["flag-cl","chile flag"],u:"1f1e8-1f1f1",a:"2.0"},{n:["flag-cm","cameroon flag"],u:"1f1e8-1f1f2",a:"2.0"},{n:["cn","flag-cn","china flag"],u:"1f1e8-1f1f3",a:"0.6"},{n:["flag-co","colombia flag"],u:"1f1e8-1f1f4",a:"2.0"},{n:["flag-cp","clipperton island flag"],u:"1f1e8-1f1f5",a:"2.0"},{n:["flag-cr","costa rica flag"],u:"1f1e8-1f1f7",a:"2.0"},{n:["flag-cu","cuba flag"],u:"1f1e8-1f1fa",a:"2.0"},{n:["flag-cv","cape verde flag"],u:"1f1e8-1f1fb",a:"2.0"},{n:["flag-cw","curaçao flag"],u:"1f1e8-1f1fc",a:"2.0"},{n:["flag-cx","christmas island flag"],u:"1f1e8-1f1fd",a:"2.0"},{n:["flag-cy","cyprus flag"],u:"1f1e8-1f1fe",a:"2.0"},{n:["flag-cz","czechia flag"],u:"1f1e8-1f1ff",a:"2.0"},{n:["de","flag-de","germany flag"],u:"1f1e9-1f1ea",a:"0.6"},{n:["flag-dg","diego garcia flag"],u:"1f1e9-1f1ec",a:"2.0"},{n:["flag-dj","djibouti flag"],u:"1f1e9-1f1ef",a:"2.0"},{n:["flag-dk","denmark flag"],u:"1f1e9-1f1f0",a:"2.0"},{n:["flag-dm","dominica flag"],u:"1f1e9-1f1f2",a:"2.0"},{n:["flag-do","dominican republic flag"],u:"1f1e9-1f1f4",a:"2.0"},{n:["flag-dz","algeria flag"],u:"1f1e9-1f1ff",a:"2.0"},{n:["flag-ea","ceuta & melilla flag"],u:"1f1ea-1f1e6",a:"2.0"},{n:["flag-ec","ecuador flag"],u:"1f1ea-1f1e8",a:"2.0"},{n:["flag-ee","estonia flag"],u:"1f1ea-1f1ea",a:"2.0"},{n:["flag-eg","egypt flag"],u:"1f1ea-1f1ec",a:"2.0"},{n:["flag-eh","western sahara flag"],u:"1f1ea-1f1ed",a:"2.0"},{n:["flag-er","eritrea flag"],u:"1f1ea-1f1f7",a:"2.0"},{n:["es","flag-es","spain flag"],u:"1f1ea-1f1f8",a:"0.6"},{n:["flag-et","ethiopia flag"],u:"1f1ea-1f1f9",a:"2.0"},{n:["flag-eu","european union flag"],u:"1f1ea-1f1fa",a:"2.0"},{n:["flag-fi","finland flag"],u:"1f1eb-1f1ee",a:"2.0"},{n:["flag-fj","fiji flag"],u:"1f1eb-1f1ef",a:"2.0"},{n:["flag-fk","falkland islands flag"],u:"1f1eb-1f1f0",a:"2.0"},{n:["flag-fm","micronesia flag"],u:"1f1eb-1f1f2",a:"2.0"},{n:["flag-fo","faroe islands flag"],u:"1f1eb-1f1f4",a:"2.0"},{n:["fr","flag-fr","france flag"],u:"1f1eb-1f1f7",a:"0.6"},{n:["flag-ga","gabon flag"],u:"1f1ec-1f1e6",a:"2.0"},{n:["gb","uk","flag-gb","united kingdom flag"],u:"1f1ec-1f1e7",a:"0.6"},{n:["flag-gd","grenada flag"],u:"1f1ec-1f1e9",a:"2.0"},{n:["flag-ge","georgia flag"],u:"1f1ec-1f1ea",a:"2.0"},{n:["flag-gf","french guiana flag"],u:"1f1ec-1f1eb",a:"2.0"},{n:["flag-gg","guernsey flag"],u:"1f1ec-1f1ec",a:"2.0"},{n:["flag-gh","ghana flag"],u:"1f1ec-1f1ed",a:"2.0"},{n:["flag-gi","gibraltar flag"],u:"1f1ec-1f1ee",a:"2.0"},{n:["flag-gl","greenland flag"],u:"1f1ec-1f1f1",a:"2.0"},{n:["flag-gm","gambia flag"],u:"1f1ec-1f1f2",a:"2.0"},{n:["flag-gn","guinea flag"],u:"1f1ec-1f1f3",a:"2.0"},{n:["flag-gp","guadeloupe flag"],u:"1f1ec-1f1f5",a:"2.0"},{n:["flag-gq","equatorial guinea flag"],u:"1f1ec-1f1f6",a:"2.0"},{n:["flag-gr","greece flag"],u:"1f1ec-1f1f7",a:"2.0"},{n:["flag-gs","south georgia & south sandwich islands flag"],u:"1f1ec-1f1f8",a:"2.0"},{n:["flag-gt","guatemala flag"],u:"1f1ec-1f1f9",a:"2.0"},{n:["flag-gu","guam flag"],u:"1f1ec-1f1fa",a:"2.0"},{n:["flag-gw","guinea-bissau flag"],u:"1f1ec-1f1fc",a:"2.0"},{n:["flag-gy","guyana flag"],u:"1f1ec-1f1fe",a:"2.0"},{n:["flag-hk","hong kong sar china flag"],u:"1f1ed-1f1f0",a:"2.0"},{n:["flag-hm","heard & mcdonald islands flag"],u:"1f1ed-1f1f2",a:"2.0"},{n:["flag-hn","honduras flag"],u:"1f1ed-1f1f3",a:"2.0"},{n:["flag-hr","croatia flag"],u:"1f1ed-1f1f7",a:"2.0"},{n:["flag-ht","haiti flag"],u:"1f1ed-1f1f9",a:"2.0"},{n:["flag-hu","hungary flag"],u:"1f1ed-1f1fa",a:"2.0"},{n:["flag-ic","canary islands flag"],u:"1f1ee-1f1e8",a:"2.0"},{n:["flag-id","indonesia flag"],u:"1f1ee-1f1e9",a:"2.0"},{n:["flag-ie","ireland flag"],u:"1f1ee-1f1ea",a:"2.0"},{n:["flag-il","israel flag"],u:"1f1ee-1f1f1",a:"2.0"},{n:["flag-im","isle of man flag"],u:"1f1ee-1f1f2",a:"2.0"},{n:["flag-in","india flag"],u:"1f1ee-1f1f3",a:"2.0"},{n:["flag-io","british indian ocean territory flag"],u:"1f1ee-1f1f4",a:"2.0"},{n:["flag-iq","iraq flag"],u:"1f1ee-1f1f6",a:"2.0"},{n:["flag-ir","iran flag"],u:"1f1ee-1f1f7",a:"2.0"},{n:["flag-is","iceland flag"],u:"1f1ee-1f1f8",a:"2.0"},{n:["it","flag-it","italy flag"],u:"1f1ee-1f1f9",a:"0.6"},{n:["flag-je","jersey flag"],u:"1f1ef-1f1ea",a:"2.0"},{n:["flag-jm","jamaica flag"],u:"1f1ef-1f1f2",a:"2.0"},{n:["flag-jo","jordan flag"],u:"1f1ef-1f1f4",a:"2.0"},{n:["jp","flag-jp","japan flag"],u:"1f1ef-1f1f5",a:"0.6"},{n:["flag-ke","kenya flag"],u:"1f1f0-1f1ea",a:"2.0"},{n:["flag-kg","kyrgyzstan flag"],u:"1f1f0-1f1ec",a:"2.0"},{n:["flag-kh","cambodia flag"],u:"1f1f0-1f1ed",a:"2.0"},{n:["flag-ki","kiribati flag"],u:"1f1f0-1f1ee",a:"2.0"},{n:["flag-km","comoros flag"],u:"1f1f0-1f1f2",a:"2.0"},{n:["flag-kn","st. kitts & nevis flag"],u:"1f1f0-1f1f3",a:"2.0"},{n:["flag-kp","north korea flag"],u:"1f1f0-1f1f5",a:"2.0"},{n:["kr","flag-kr","south korea flag"],u:"1f1f0-1f1f7",a:"0.6"},{n:["flag-kw","kuwait flag"],u:"1f1f0-1f1fc",a:"2.0"},{n:["flag-ky","cayman islands flag"],u:"1f1f0-1f1fe",a:"2.0"},{n:["flag-kz","kazakhstan flag"],u:"1f1f0-1f1ff",a:"2.0"},{n:["flag-la","laos flag"],u:"1f1f1-1f1e6",a:"2.0"},{n:["flag-lb","lebanon flag"],u:"1f1f1-1f1e7",a:"2.0"},{n:["flag-lc","st. lucia flag"],u:"1f1f1-1f1e8",a:"2.0"},{n:["flag-li","liechtenstein flag"],u:"1f1f1-1f1ee",a:"2.0"},{n:["flag-lk","sri lanka flag"],u:"1f1f1-1f1f0",a:"2.0"},{n:["flag-lr","liberia flag"],u:"1f1f1-1f1f7",a:"2.0"},{n:["flag-ls","lesotho flag"],u:"1f1f1-1f1f8",a:"2.0"},{n:["flag-lt","lithuania flag"],u:"1f1f1-1f1f9",a:"2.0"},{n:["flag-lu","luxembourg flag"],u:"1f1f1-1f1fa",a:"2.0"},{n:["flag-lv","latvia flag"],u:"1f1f1-1f1fb",a:"2.0"},{n:["flag-ly","libya flag"],u:"1f1f1-1f1fe",a:"2.0"},{n:["flag-ma","morocco flag"],u:"1f1f2-1f1e6",a:"2.0"},{n:["flag-mc","monaco flag"],u:"1f1f2-1f1e8",a:"2.0"},{n:["flag-md","moldova flag"],u:"1f1f2-1f1e9",a:"2.0"},{n:["flag-me","montenegro flag"],u:"1f1f2-1f1ea",a:"2.0"},{n:["flag-mf","st. martin flag"],u:"1f1f2-1f1eb",a:"2.0"},{n:["flag-mg","madagascar flag"],u:"1f1f2-1f1ec",a:"2.0"},{n:["flag-mh","marshall islands flag"],u:"1f1f2-1f1ed",a:"2.0"},{n:["flag-mk","north macedonia flag"],u:"1f1f2-1f1f0",a:"2.0"},{n:["flag-ml","mali flag"],u:"1f1f2-1f1f1",a:"2.0"},{n:["flag-mm","myanmar (burma) flag"],u:"1f1f2-1f1f2",a:"2.0"},{n:["flag-mn","mongolia flag"],u:"1f1f2-1f1f3",a:"2.0"},{n:["flag-mo","macao sar china flag"],u:"1f1f2-1f1f4",a:"2.0"},{n:["flag-mp","northern mariana islands flag"],u:"1f1f2-1f1f5",a:"2.0"},{n:["flag-mq","martinique flag"],u:"1f1f2-1f1f6",a:"2.0"},{n:["flag-mr","mauritania flag"],u:"1f1f2-1f1f7",a:"2.0"},{n:["flag-ms","montserrat flag"],u:"1f1f2-1f1f8",a:"2.0"},{n:["flag-mt","malta flag"],u:"1f1f2-1f1f9",a:"2.0"},{n:["flag-mu","mauritius flag"],u:"1f1f2-1f1fa",a:"2.0"},{n:["flag-mv","maldives flag"],u:"1f1f2-1f1fb",a:"2.0"},{n:["flag-mw","malawi flag"],u:"1f1f2-1f1fc",a:"2.0"},{n:["flag-mx","mexico flag"],u:"1f1f2-1f1fd",a:"2.0"},{n:["flag-my","malaysia flag"],u:"1f1f2-1f1fe",a:"2.0"},{n:["flag-mz","mozambique flag"],u:"1f1f2-1f1ff",a:"2.0"},{n:["flag-na","namibia flag"],u:"1f1f3-1f1e6",a:"2.0"},{n:["flag-nc","new caledonia flag"],u:"1f1f3-1f1e8",a:"2.0"},{n:["flag-ne","niger flag"],u:"1f1f3-1f1ea",a:"2.0"},{n:["flag-nf","norfolk island flag"],u:"1f1f3-1f1eb",a:"2.0"},{n:["flag-ng","nigeria flag"],u:"1f1f3-1f1ec",a:"2.0"},{n:["flag-ni","nicaragua flag"],u:"1f1f3-1f1ee",a:"2.0"},{n:["flag-nl","netherlands flag"],u:"1f1f3-1f1f1",a:"2.0"},{n:["flag-no","norway flag"],u:"1f1f3-1f1f4",a:"2.0"},{n:["flag-np","nepal flag"],u:"1f1f3-1f1f5",a:"2.0"},{n:["flag-nr","nauru flag"],u:"1f1f3-1f1f7",a:"2.0"},{n:["flag-nu","niue flag"],u:"1f1f3-1f1fa",a:"2.0"},{n:["flag-nz","new zealand flag"],u:"1f1f3-1f1ff",a:"2.0"},{n:["flag-om","oman flag"],u:"1f1f4-1f1f2",a:"2.0"},{n:["flag-pa","panama flag"],u:"1f1f5-1f1e6",a:"2.0"},{n:["flag-pe","peru flag"],u:"1f1f5-1f1ea",a:"2.0"},{n:["flag-pf","french polynesia flag"],u:"1f1f5-1f1eb",a:"2.0"},{n:["flag-pg","papua new guinea flag"],u:"1f1f5-1f1ec",a:"2.0"},{n:["flag-ph","philippines flag"],u:"1f1f5-1f1ed",a:"2.0"},{n:["flag-pk","pakistan flag"],u:"1f1f5-1f1f0",a:"2.0"},{n:["flag-pl","poland flag"],u:"1f1f5-1f1f1",a:"2.0"},{n:["flag-pm","st. pierre & miquelon flag"],u:"1f1f5-1f1f2",a:"2.0"},{n:["flag-pn","pitcairn islands flag"],u:"1f1f5-1f1f3",a:"2.0"},{n:["flag-pr","puerto rico flag"],u:"1f1f5-1f1f7",a:"2.0"},{n:["flag-ps","palestinian territories flag"],u:"1f1f5-1f1f8",a:"2.0"},{n:["flag-pt","portugal flag"],u:"1f1f5-1f1f9",a:"2.0"},{n:["flag-pw","palau flag"],u:"1f1f5-1f1fc",a:"2.0"},{n:["flag-py","paraguay flag"],u:"1f1f5-1f1fe",a:"2.0"},{n:["flag-qa","qatar flag"],u:"1f1f6-1f1e6",a:"2.0"},{n:["flag-re","réunion flag"],u:"1f1f7-1f1ea",a:"2.0"},{n:["flag-ro","romania flag"],u:"1f1f7-1f1f4",a:"2.0"},{n:["flag-rs","serbia flag"],u:"1f1f7-1f1f8",a:"2.0"},{n:["ru","flag-ru","russia flag"],u:"1f1f7-1f1fa",a:"0.6"},{n:["flag-rw","rwanda flag"],u:"1f1f7-1f1fc",a:"2.0"},{n:["flag-sa","saudi arabia flag"],u:"1f1f8-1f1e6",a:"2.0"},{n:["flag-sb","solomon islands flag"],u:"1f1f8-1f1e7",a:"2.0"},{n:["flag-sc","seychelles flag"],u:"1f1f8-1f1e8",a:"2.0"},{n:["flag-sd","sudan flag"],u:"1f1f8-1f1e9",a:"2.0"},{n:["flag-se","sweden flag"],u:"1f1f8-1f1ea",a:"2.0"},{n:["flag-sg","singapore flag"],u:"1f1f8-1f1ec",a:"2.0"},{n:["flag-sh","st. helena flag"],u:"1f1f8-1f1ed",a:"2.0"},{n:["flag-si","slovenia flag"],u:"1f1f8-1f1ee",a:"2.0"},{n:["flag-sj","svalbard & jan mayen flag"],u:"1f1f8-1f1ef",a:"2.0"},{n:["flag-sk","slovakia flag"],u:"1f1f8-1f1f0",a:"2.0"},{n:["flag-sl","sierra leone flag"],u:"1f1f8-1f1f1",a:"2.0"},{n:["flag-sm","san marino flag"],u:"1f1f8-1f1f2",a:"2.0"},{n:["flag-sn","senegal flag"],u:"1f1f8-1f1f3",a:"2.0"},{n:["flag-so","somalia flag"],u:"1f1f8-1f1f4",a:"2.0"},{n:["flag-sr","suriname flag"],u:"1f1f8-1f1f7",a:"2.0"},{n:["flag-ss","south sudan flag"],u:"1f1f8-1f1f8",a:"2.0"},{n:["flag-st","são tomé & príncipe flag"],u:"1f1f8-1f1f9",a:"2.0"},{n:["flag-sv","el salvador flag"],u:"1f1f8-1f1fb",a:"2.0"},{n:["flag-sx","sint maarten flag"],u:"1f1f8-1f1fd",a:"2.0"},{n:["flag-sy","syria flag"],u:"1f1f8-1f1fe",a:"2.0"},{n:["flag-sz","eswatini flag"],u:"1f1f8-1f1ff",a:"2.0"},{n:["flag-ta","tristan da cunha flag"],u:"1f1f9-1f1e6",a:"2.0"},{n:["flag-tc","turks & caicos islands flag"],u:"1f1f9-1f1e8",a:"2.0"},{n:["flag-td","chad flag"],u:"1f1f9-1f1e9",a:"2.0"},{n:["flag-tf","french southern territories flag"],u:"1f1f9-1f1eb",a:"2.0"},{n:["flag-tg","togo flag"],u:"1f1f9-1f1ec",a:"2.0"},{n:["flag-th","thailand flag"],u:"1f1f9-1f1ed",a:"2.0"},{n:["flag-tj","tajikistan flag"],u:"1f1f9-1f1ef",a:"2.0"},{n:["flag-tk","tokelau flag"],u:"1f1f9-1f1f0",a:"2.0"},{n:["flag-tl","timor-leste flag"],u:"1f1f9-1f1f1",a:"2.0"},{n:["flag-tm","turkmenistan flag"],u:"1f1f9-1f1f2",a:"2.0"},{n:["flag-tn","tunisia flag"],u:"1f1f9-1f1f3",a:"2.0"},{n:["flag-to","tonga flag"],u:"1f1f9-1f1f4",a:"2.0"},{n:["flag-tr","turkey flag"],u:"1f1f9-1f1f7",a:"2.0"},{n:["flag-tt","trinidad & tobago flag"],u:"1f1f9-1f1f9",a:"2.0"},{n:["flag-tv","tuvalu flag"],u:"1f1f9-1f1fb",a:"2.0"},{n:["flag-tw","taiwan flag"],u:"1f1f9-1f1fc",a:"2.0"},{n:["flag-tz","tanzania flag"],u:"1f1f9-1f1ff",a:"2.0"},{n:["flag-ua","ukraine flag"],u:"1f1fa-1f1e6",a:"2.0"},{n:["flag-ug","uganda flag"],u:"1f1fa-1f1ec",a:"2.0"},{n:["flag-um","u.s. outlying islands flag"],u:"1f1fa-1f1f2",a:"2.0"},{n:["flag-un","united nations flag"],u:"1f1fa-1f1f3",a:"4.0"},{n:["us","flag-us","united states flag"],u:"1f1fa-1f1f8",a:"0.6"},{n:["flag-uy","uruguay flag"],u:"1f1fa-1f1fe",a:"2.0"},{n:["flag-uz","uzbekistan flag"],u:"1f1fa-1f1ff",a:"2.0"},{n:["flag-va","vatican city flag"],u:"1f1fb-1f1e6",a:"2.0"},{n:["flag-vc","st. vincent & grenadines flag"],u:"1f1fb-1f1e8",a:"2.0"},{n:["flag-ve","venezuela flag"],u:"1f1fb-1f1ea",a:"2.0"},{n:["flag-vg","british virgin islands flag"],u:"1f1fb-1f1ec",a:"2.0"},{n:["flag-vi","u.s. virgin islands flag"],u:"1f1fb-1f1ee",a:"2.0"},{n:["flag-vn","vietnam flag"],u:"1f1fb-1f1f3",a:"2.0"},{n:["flag-vu","vanuatu flag"],u:"1f1fb-1f1fa",a:"2.0"},{n:["flag-wf","wallis & futuna flag"],u:"1f1fc-1f1eb",a:"2.0"},{n:["flag-ws","samoa flag"],u:"1f1fc-1f1f8",a:"2.0"},{n:["flag-xk","kosovo flag"],u:"1f1fd-1f1f0",a:"2.0"},{n:["flag-ye","yemen flag"],u:"1f1fe-1f1ea",a:"2.0"},{n:["flag-yt","mayotte flag"],u:"1f1fe-1f1f9",a:"2.0"},{n:["flag-za","south africa flag"],u:"1f1ff-1f1e6",a:"2.0"},{n:["flag-zm","zambia flag"],u:"1f1ff-1f1f2",a:"2.0"},{n:["flag-zw","zimbabwe flag"],u:"1f1ff-1f1fc",a:"2.0"},{n:["england flag","flag-england"],u:"1f3f4-e0067-e0062-e0065-e006e-e0067-e007f",a:"5.0"},{n:["scotland flag","flag-scotland"],u:"1f3f4-e0067-e0062-e0073-e0063-e0074-e007f",a:"5.0"},{n:["wales flag","flag-wales"],u:"1f3f4-e0067-e0062-e0077-e006c-e0073-e007f",a:"5.0"}],Rf={custom:Y8,smileys_people:Q8,animals_nature:G8,food_drink:$8,travel_places:Z8,activities:J8,objects:H8,symbols:P8,flags:F8},il=[cn.NEUTRAL,cn.LIGHT,cn.MEDIUM_LIGHT,cn.MEDIUM,cn.MEDIUM_DARK,cn.DARK],q8=Object.entries(cn).reduce(function(e,a){var i=a[0],f=a[1];return e[f]=i,e},{}),V8=il.reduce(function(e,a){var i;return Object.assign(e,(i={},i[a]=a,i))},{}),tn;(function(e){e.name="n",e.unified="u",e.variations="v",e.added_in="a",e.imgUrl="imgUrl"})(tn||(tn={}));var Cf={};setTimeout(function(){Nl.reduce(function(e,a){return y3(a),e},Cf)});function y3(e){var a=Hf(e).flat().join("").toLowerCase().replace(/[^a-zA-Z\d]/g,"").split("");a.forEach(function(i){var f;Cf[i]=(f=Cf[i])!=null?f:{},Cf[i][wt(e)]=e})}function Hf(e){var a;return(a=e[tn.name])!=null?a:[]}function X8(e){return parseFloat(e[tn.added_in])}function E0(e){return e?Hf(e)[0]:""}function t1(e){var a=e.split("-"),i=a.splice(1,1),f=i[0];return V8[f]?a.join("-"):e}function wt(e,a){var i,f=e[tn.unified];return!a||!ci(e)?f:(i=K8(e,a))!=null?i:f}function W8(e){var a;return(a=Rf==null?void 0:Rf[e])!=null?a:[]}function b3(e,a){return""+_8(a)+e+".png"}function Pf(e){var a;return(a=e[tn.variations])!=null?a:[]}function ci(e){return Pf(e).length>0}function K8(e,a){return a?Pf(e).find(function(i){return i.includes(a)}):wt(e)}function ai(e){if(e){if(Fr[e])return Fr[e];var a=t1(e);return Fr[a]}}var Nl=Object.values(Rf).flat();function ek(e){Rf[de.CUSTOM].length=0,e.forEach(function(a){var i=tk(a);Rf[de.CUSTOM].push(i),!Fr[i[tn.unified]]&&(Nl.push(i),Fr[i[tn.unified]]=i,y3(i))})}function tk(e){var a;return a={},a[tn.name]=e.names.map(function(i){return i.toLowerCase()}),a[tn.unified]=e.id.toLowerCase(),a[tn.added_in]="0",a[tn.imgUrl]=e.imgUrl,a}var Fr={};setTimeout(function(){Nl.reduce(function(e,a){return e[wt(a)]=a,ci(a)&&Pf(a).forEach(function(i){e[i]=a}),e},Fr)});function nk(e){var a=e.split("-"),i=a[1];return il.includes(i)?i:null}var ak=["2640-fe0f","2642-fe0f","2695-fe0f"],fl="Search",rk="No results found",w3=" found. Use up and down arrow keys to navigate.",ik="1 result"+w3,fk="%n results"+w3;function kp(e){var a,i;e===void 0&&(e={});var f=v3(),c=Object.assign(f.previewConfig,(a=e.previewConfig)!=null?a:{}),d=Object.assign(f,e),m=z8(e.categories,{suggestionMode:d.suggestedEmojisMode});d.hiddenEmojis.forEach(function(b){d.unicodeToHide.add(b)}),ek((i=d.customEmojis)!=null?i:[]);var y=d.searchDisabled?ni.PREVIEW:d.skinTonePickerLocation;return Re({},d,{categories:m,previewConfig:c,skinTonePickerLocation:y})}function v3(){return{autoFocusSearch:!0,categories:g3(),className:"",customEmojis:[],defaultSkinTone:cn.NEUTRAL,emojiStyle:Yt.APPLE,emojiVersion:null,getEmojiUrl:b3,height:450,lazyLoadEmojis:!1,previewConfig:Re({},ok),searchDisabled:!1,searchPlaceHolder:fl,searchPlaceholder:fl,skinTonePickerLocation:ni.SEARCH,skinTonesDisabled:!1,style:{},suggestedEmojisMode:Af.FREQUENT,theme:zf.LIGHT,unicodeToHide:new Set(ak),width:350,reactionsDefaultOpen:!1,reactions:I8,open:!0,allowExpandReactions:!0,hiddenEmojis:[]}}var ok={defaultEmoji:"1f60a",defaultCaption:"What's your mood?",showPreview:!0},sk=["children"],x3=g.createContext(v3());function lk(e){var a=e.children,i=d3(e,sk),f=ck(i);return g.createElement(x3.Provider,{value:f},a)}function ck(e){var a,i=g.useState(function(){return kp(e)}),f=i[0],c=i[1];return g.useEffect(function(){h3(f,e)||c(kp(e))},[(a=e.customEmojis)==null?void 0:a.length,e.open,e.emojiVersion,e.reactionsDefaultOpen,e.searchPlaceHolder,e.searchPlaceholder,e.defaultSkinTone,e.skinTonesDisabled,e.autoFocusSearch,e.emojiStyle,e.theme,e.suggestedEmojisMode,e.lazyLoadEmojis,e.className,e.height,e.width,e.searchDisabled,e.skinTonePickerLocation,e.allowExpandReactions]),f}function _e(){return g.useContext(x3)}var M3=rt.createContext({});function j3(){var e=rt.useContext(M3);return e}function uk(e){var a=rt.useRef({onEmojiClick:e.onEmojiClick||Ls,onReactionClick:e.onReactionClick||e.onEmojiClick,onSkinToneChange:e.onSkinToneChange||Ls});return rt.useEffect(function(){a.current.onEmojiClick=e.onEmojiClick||Ls,a.current.onReactionClick=e.onReactionClick||e.onEmojiClick},[e.onEmojiClick,e.onReactionClick]),rt.useEffect(function(){a.current.onSkinToneChange=e.onSkinToneChange||Ls},[e.onSkinToneChange]),a}function Ls(){}var Of;(function(e){e.REACTIONS="reactions",e.PICKER="picker"})(Of||(Of={}));function dk(){var e,a=_e(),i=a.searchPlaceHolder,f=a.searchPlaceholder;return(e=[i,f].find(function(c){return c!==fl}))!=null?e:fl}function hk(){var e=_e(),a=e.defaultSkinTone;return a}function L3(){var e=_e(),a=e.allowExpandReactions;return a}function S3(){var e=_e(),a=e.skinTonesDisabled;return a}function nr(){var e=_e(),a=e.emojiStyle;return a}function mk(){var e=_e(),a=e.autoFocusSearch;return a}function C3(){var e=_e(),a=e.categories;return a}function gk(){var e=_e(),a=e.customEmojis;return a}function pk(){var e=_e(),a=e.open;return a}function yk(e){var a,i=j3(),f=i.current,c=(a=e===Of.REACTIONS?f.onReactionClick:f.onEmojiClick)!=null?a:f.onEmojiClick;return c||function(){}}function bk(){var e=j3(),a=e.current;return a.onSkinToneChange||function(){}}function k3(){var e=_e(),a=e.previewConfig;return a}function wk(){var e=_e(),a=e.theme;return a}function vk(){var e=_e(),a=e.suggestedEmojisMode;return a}function xk(){var e=_e(),a=e.lazyLoadEmojis;return a}function Mk(){var e=_e(),a=e.className;return a}function jk(){var e=_e(),a=e.height,i=e.width,f=e.style;return Re({height:Ep(a),width:Ep(i)},f)}function Lk(){var e=_e(),a=e.reactionsDefaultOpen;return a}function Sk(){var e=_e(),a=e.emojiVersion;return a}function E3(){var e=_e(),a=e.searchDisabled;return a}function T3(){var e=_e(),a=e.skinTonePickerLocation;return a}function Ck(){var e=_e(),a=e.unicodeToHide;return a}function kk(){var e=_e(),a=e.reactions;return a}function ar(){var e=_e(),a=e.getEmojiUrl;return a}function Ep(e){return typeof e=="number"?e+"px":e}function Ek(e){var a=e>0,i=e>1;return a?i?fk.replace("%n",e.toString()):ik:rk}function Tp(e,a){a===void 0&&(a=0);var i=g.useState(e),f=i[0],c=i[1],d=g.useRef(null);function m(y){return new Promise(function(b){var x;d.current&&clearTimeout(d.current),d.current=(x=window)==null?void 0:x.setTimeout(function(){c(y),b(y)},a)})}return[f,m]}function Tk(){var e=Ck();return function(a){return e.has(a)}}function N3(){var e=g.useRef({}),a=Sk();return g.useMemo(function(){var i=parseFloat(""+a);return!a||Number.isNaN(i)?e.current:Nl.reduce(function(f,c){return Ik(c,i)&&(f[wt(c)]=!0),f},e.current)},[a])}function Nk(){var e=N3(),a=Tk();return function(f){var c=t1(wt(f));return!!(e[c]||a(c))}}function Ik(e,a){return X8(e)>a}function Dk(e){g.useEffect(function(){e(!0)},[e])}function Ak(e){var a=e.children,i=N3(),f=hk(),c=Lk(),d=g.useRef(Cf),m=g.useRef(!1),y=g.useRef(!1),b=g.useRef(i),x=Tp(Date.now(),200),v=Tp("",100),M=g.useState(!1),j=g.useState(f),k=g.useState(null),N=g.useState(new Set),C=g.useState(null),E=g.useState(c),I=g.useState(!1),A=I[0],G=I[1];return Dk(G),g.createElement(an.Provider,{value:{activeCategoryState:k,activeSkinTone:j,disallowClickRef:m,disallowMouseRef:y,disallowedEmojisRef:b,emojiVariationPickerState:C,emojisThatFailedToLoadState:N,filterRef:d,isPastInitialLoad:A,searchTerm:v,skinToneFanOpenState:M,suggestedUpdateState:x,reactionsModeState:E}},a)}var an=g.createContext({activeCategoryState:[null,function(){}],activeSkinTone:[cn.NEUTRAL,function(){}],disallowClickRef:{current:!1},disallowMouseRef:{current:!1},disallowedEmojisRef:{current:{}},emojiVariationPickerState:[null,function(){}],emojisThatFailedToLoadState:[new Set,function(){}],filterRef:{current:{}},isPastInitialLoad:!0,searchTerm:["",function(){return new Promise(function(){})}],skinToneFanOpenState:[!1,function(){}],suggestedUpdateState:[Date.now(),function(){}],reactionsModeState:[!1,function(){}]});function n1(){var e=g.useContext(an),a=e.filterRef;return a}function zk(){var e=g.useContext(an),a=e.disallowClickRef;return a}function a1(){var e=g.useContext(an),a=e.disallowMouseRef;return a}function Il(){var e=g.useContext(an),a=e.reactionsModeState;return a}function Dl(){var e=g.useContext(an),a=e.searchTerm;return a}function r1(){var e=g.useContext(an),a=e.activeSkinTone;return a}function I3(){var e=g.useContext(an),a=e.emojisThatFailedToLoadState;return a}function Rk(){var e=g.useContext(an),a=e.isPastInitialLoad;return a}function ui(){var e=g.useContext(an),a=e.emojiVariationPickerState;return a}function Ff(){var e=g.useContext(an),a=e.skinToneFanOpenState;return a}function D3(){var e=g.useContext(an),a=e.suggestedUpdateState,i=a[0],f=a[1];return[i,function(){f(Date.now())}]}function Al(){var e=Dl(),a=e[0];return!!a}function Qt(e){e&&requestAnimationFrame(function(){e.focus()})}function A3(e){if(e){var a=e.previousElementSibling;Qt(a)}}function z3(e){if(e){var a=e.nextElementSibling;Qt(a)}}function R3(e){if(e){var a=e.firstElementChild;Qt(a)}}function Bf(){return document.activeElement}function Ok(e){var a=e.children,i=g.useRef(null),f=g.useRef(null),c=g.useRef(null),d=g.useRef(null),m=g.useRef(null),y=g.useRef(null),b=g.useRef(null),x=g.useRef(null);return g.createElement(O3.Provider,{value:{AnchoredEmojiRef:f,BodyRef:c,CategoryNavigationRef:y,PickerMainRef:i,SearchInputRef:d,SkinTonePickerRef:m,VariationPickerRef:b,ReactionsRef:x}},a)}var O3=g.createContext({AnchoredEmojiRef:g.createRef(),BodyRef:g.createRef(),CategoryNavigationRef:g.createRef(),PickerMainRef:g.createRef(),SearchInputRef:g.createRef(),SkinTonePickerRef:g.createRef(),VariationPickerRef:g.createRef(),ReactionsRef:g.createRef()});function La(){return g.useContext(O3)}function qf(){return La().PickerMainRef}function zl(){return La().AnchoredEmojiRef}function B3(){var e=zl();return function(a){a===null&&e.current!==null&&Qt(e.current),e.current=a}}function rn(){return La().BodyRef}function Bk(){return La().ReactionsRef}function Sa(){return La().SearchInputRef}function i1(){return La().SkinTonePickerRef}function f1(){return La().CategoryNavigationRef}function Uk(){return La().VariationPickerRef}function U3(e,a){a===void 0&&(a=0);var i=K3(e);i&&requestAnimationFrame(function(){i.scrollTop=a})}function _k(e,a){var i=K3(e);i&&requestAnimationFrame(function(){i.scrollTop=i.scrollTop+a})}function Yk(){var e=rn();return g.useCallback(function(a){requestAnimationFrame(function(){e.current&&(e.current.scrollTop=a)})},[e])}function Rl(e){if(!(!e||!NE(e))&&!e.closest(mt(he.variationPicker))){var a=tb(e),i=eb(e);_k(a,-(d1(Ca(e))-i))}}function Ol(e){var a=p1(e);Qt(a),Rl(a)}function Qk(e){var a=p1(e);Qt(a),a==null||a.click()}function Gk(e){Qt(ib(e))}function $k(e){if(e){var a=fb(e);if(!a)return Ol(Ul(e));Qt(a),Rl(a)}}function Zk(e){if(e){var a=g1(e);if(!a)return Gk(Bl(e));Qt(a),Rl(a)}}function Jk(e,a){if(e){var i=Pk(e);if(!i)return a();Qt(i),Rl(i)}}function Hk(e){if(e){var a=Fk(e);return Qt(a)}}function Pk(e){if(!e)return null;var a=ob(e),i=Ca(a),f=q3(a,e),c=V3(a,e),d=F3(a,e);if(c===0){var m=Bl(i);return m?X3(ri(m),-1,d,f):null}return LE(ri(a),c,d,f)}function Fk(e){if(!e)return null;var a=ob(e),i=Ca(a),f=q3(a,e),c=V3(a,e),d=F3(a,e);if(!xE(a,e)){var m=Ul(i);return m?X3(ri(m),0,d,f):null}var y=jE(ri(a),c,d,f);return y}function rr(){var e=ui(),a=e[0],i=e[1],f=Ff(),c=f[0],d=f[1],m=g.useCallback(function(){a&&i(null),c&&d(!1)},[a,c,i,d]);return m}function _3(){var e=ui(),a=e[0],i=Ff(),f=i[0];return function(){return!!a||f}}function qk(){var e=a1();return function(){e.current=!0}}function Y3(){var e=a1();return function(){e.current=!1}}function Q3(){var e=a1();return function(){return e.current}}function Vk(){var e=rn(),a=Y3(),i=Q3();g.useEffect(function(){var f=e.current;f==null||f.addEventListener("mousemove",c,{passive:!0});function c(){i()&&a()}return function(){f==null||f.removeEventListener("mousemove",c)}},[e,a,i])}function ir(){var e=Sa();return g.useCallback(function(){Qt(e.current)},[e])}function Xk(){var e=i1();return g.useCallback(function(){e.current&&R3(e.current)},[e])}function G3(){var e=f1();return g.useCallback(function(){e.current&&R3(e.current)},[e])}function Wk(){var e=n1();return function a(i){if(typeof i=="function")return a(i(e.current));e.current=i}}function $3(){var e=o1(),a=Sa(),i=ir();return function(){a.current&&(a.current.value=""),e(""),i()}}function Kk(){var e=Sa(),a=o1();return function(f){e.current?(e.current.value=""+e.current.value+f,a(T0(e.current.value))):a(T0(f))}}function eE(){var e=Sa(),a=n1(),i=Wk(),f=o1(),c=Dl(),d=c[0],m=fE(a.current,d);return{onChange:y,searchTerm:d,SearchInputRef:e,statusSearchResults:m};function y(b){var x=a.current,v=b.toLowerCase();if(x!=null&&x[v]||v.length<=1)return f(v);var M=iE(v,x);if(!M)return f(v);i(function(j){var k;return Object.assign(j,(k={},k[v]=tE(M,v),k))}),f(v)}}function o1(){var e=Dl(),a=e[1],i=qf();return function(c){requestAnimationFrame(function(){a(c&&(c==null?void 0:c.toLowerCase())).then(function(){U3(i.current,0)})})}}function tE(e,a){var i={};for(var f in e){var c=e[f];nE(c,a)&&(i[f]=c)}return i}function nE(e,a){return Hf(e).some(function(i){return i.includes(a)})}function aE(){var e=n1(),a=e.current,i=Dl(),f=i[0];return function(c){return rE(c,a,f)}}function rE(e,a,i){var f;return!a||!i?!1:!((f=a[i])!=null&&f[e])}function iE(e,a){if(!a)return null;if(a[e])return a[e];var i=Object.keys(a).sort(function(f,c){return c.length-f.length}).find(function(f){return e.includes(f)});return i?a[i]:null}function T0(e){return!e||typeof e!="string"?"":e.trim().toLowerCase()}function fE(e,a){var i;if(!(e!=null&&e[a]))return"";var f=((i=Object.entries(e==null?void 0:e[a]))==null?void 0:i.length)||0;return Ek(f)}function Z3(){var e=B3(),a=ui(),i=a[1];return function(c){var d=u1(c),m=d[0];m&&(e(c),i(m))}}function s1(){var e=T3();return e===ni.SEARCH}function J3(){var e=T3();return e===ni.PREVIEW}var qe;(function(e){e.ArrowDown="ArrowDown",e.ArrowUp="ArrowUp",e.ArrowLeft="ArrowLeft",e.ArrowRight="ArrowRight",e.Escape="Escape",e.Enter="Enter",e.Space=" "})(qe||(qe={}));function oE(){sE(),lE(),cE(),uE(),dE()}function sE(){var e=qf(),a=$3(),i=Yk(),f=Sa(),c=ir(),d=_3(),m=qk(),y=rr(),b=g.useMemo(function(){return function(v){var M=v.key;switch(m(),M){case qe.Escape:if(v.preventDefault(),d()){y();return}a(),i(0),c();break}}},[i,a,y,c,d,m]);g.useEffect(function(){var x=e.current;if(x)return x.addEventListener("keydown",b),function(){x.removeEventListener("keydown",b)}},[e,f,i,b])}function lE(){var e=Xk(),a=qf(),i=rn(),f=Sa(),c=Ff(),d=c[1],m=H3(),y=s1(),b=g.useMemo(function(){return function(v){var M=v.key;switch(M){case qe.ArrowRight:if(!y)return;v.preventDefault(),d(!0),e();break;case qe.ArrowDown:v.preventDefault(),m();break;case qe.Enter:v.preventDefault(),Qk(i.current);break}}},[e,m,d,i,y]);g.useEffect(function(){var x=f.current;if(x)return x.addEventListener("keydown",b),function(){x.removeEventListener("keydown",b)}},[a,f,b])}function cE(){var e=i1(),a=ir(),i=Sa(),f=H3(),c=Ff(),d=c[0],m=c[1],y=J3(),b=s1(),x=l1(),v=g.useMemo(function(){return function(j){var k=j.key;if(b)switch(k){case qe.ArrowLeft:if(j.preventDefault(),!d)return a();Np(a);break;case qe.ArrowRight:if(j.preventDefault(),!d)return a();Ip();break;case qe.ArrowDown:j.preventDefault(),d&&m(!1),f();break;default:x(j);break}if(y)switch(k){case qe.ArrowUp:if(j.preventDefault(),!d)return a();Np(a);break;case qe.ArrowDown:if(j.preventDefault(),!d)return a();Ip();break;default:x(j);break}}},[d,a,m,f,x,y,b]);g.useEffect(function(){var M=e.current;if(M)return M.addEventListener("keydown",v),function(){M.removeEventListener("keydown",v)}},[e,i,d,v])}function uE(){var e=ir(),a=f1(),i=rn(),f=l1(),c=g.useMemo(function(){return function(m){var y=m.key;switch(y){case qe.ArrowUp:m.preventDefault(),e();break;case qe.ArrowRight:m.preventDefault(),z3(Bf());break;case qe.ArrowLeft:m.preventDefault(),A3(Bf());break;case qe.ArrowDown:m.preventDefault(),Ol(i.current);break;default:f(m);break}}},[i,e,f]);g.useEffect(function(){var d=a.current;if(d)return d.addEventListener("keydown",c),function(){d.removeEventListener("keydown",c)}},[a,i,c])}function dE(){var e=rn(),a=hE(),i=Z3(),f=_3(),c=rr(),d=l1(),m=g.useMemo(function(){return function(b){var x=b.key,v=dn(Bf());switch(x){case qe.ArrowRight:b.preventDefault(),$k(v);break;case qe.ArrowLeft:b.preventDefault(),Zk(v);break;case qe.ArrowDown:if(b.preventDefault(),f()){c();break}Hk(v);break;case qe.ArrowUp:if(b.preventDefault(),f()){c();break}Jk(v,a);break;case qe.Space:b.preventDefault(),i(b.target);break;default:d(b);break}}},[a,d,i,f,c]);g.useEffect(function(){var y=e.current;if(y)return y.addEventListener("keydown",m),function(){y.removeEventListener("keydown",m)}},[e,m])}function H3(){var e=G3(),a=Al(),i=rn();return g.useCallback(function(){return a?Ol(i.current):e()},[i,e,a])}function hE(){var e=ir(),a=G3(),i=Al();return g.useCallback(function(){return i?e():a()},[e,i,a])}function Np(e){var a=Bf();a&&(CE(a)||e(),z3(a))}function Ip(){var e=Bf();e&&A3(e)}function l1(){var e=Kk(),a=ir(),i=E3(),f=rr();return function(d){var m=d.key;mE(d)||i||m.match(/(^[a-zA-Z0-9]$){1}/)&&(d.preventDefault(),f(),a(),e(m))}}function mE(e){var a=e.metaKey,i=e.ctrlKey,f=e.altKey;return a||i||f}function gE(e,a,i){if(a&&i!==Yt.NATIVE){var f=wt(a);Dp.has(f)||(Pf(a).forEach(function(c){var d=e(c,i);pE(d)}),Dp.add(f))}}var Dp=new Set;function pE(e){var a=new Image;a.src=e}function yE(){var e=rn(),a=nr(),i=ar();g.useEffect(function(){if(a===Yt.NATIVE)return;var f=e.current;return f==null||f.addEventListener("focusin",c),function(){f==null||f.removeEventListener("focusin",c)};function c(d){var m=dn(d.target);if(m){var y=u1(m),b=y[0];b&&ci(b)&&gE(i,b,a)}}},[e,a,i])}var bE=["width","height"],P3=40;function wE(e){var a=e.children;return g.createElement(Ak,null,g.createElement(vE,null,a))}function vE(e){var a,i=e.children,f=Il(),c=f[0],d=wk(),m=Al(),y=qf(),b=Mk(),x=jk();oE(),yE();var v=x||{},M=v.width,j=v.height,k=d3(v,bE);return g.createElement("aside",{className:pe(mf.main,mf.baseVariables,d===zf.DARK&&mf.darkTheme,d===zf.AUTO&&mf.autoThemeDark,(a={},a[he.searchActive]=m,a),c&&mf.reactionsMenu,b),ref:y,style:Re({},k,!c&&{height:j,width:M})},i)}var Ap={"--epr-emoji-variation-picker-bg-color":"var(--epr-dark-emoji-variation-picker-bg-color)","--epr-hover-bg-color-reduced-opacity":"var(--epr-dark-hover-bg-color-reduced-opacity)","--epr-highlight-color":"var(--epr-dark-highlight-color)","--epr-text-color":"var(--epr-dark-text-color)","--epr-hover-bg-color":"var(--epr-dark-hover-bg-color)","--epr-focus-bg-color":"var(--epr-dark-focus-bg-color)","--epr-search-input-bg-color":"var(--epr-dark-search-input-bg-color)","--epr-category-label-bg-color":"var(--epr-dark-category-label-bg-color)","--epr-picker-border-color":"var(--epr-dark-picker-border-color)","--epr-bg-color":"var(--epr-dark-bg-color)","--epr-reactions-bg-color":"var(--epr-dark-reactions-bg-color)","--epr-search-input-bg-color-active":"var(--epr-dark-search-input-bg-color-active)","--epr-emoji-variation-indicator-color":"var(--epr-dark-emoji-variation-indicator-color)","--epr-category-icon-active-color":"var(--epr-dark-category-icon-active-color)","--epr-skin-tone-picker-menu-color":"var(--epr-dark-skin-tone-picker-menu-color)","--epr-skin-tone-outer-border-color":"var(--epr-dark-skin-tone-outer-border-color)","--epr-skin-tone-inner-border-color":"var(--epr-dark-skin-tone-inner-border-color)"},mf=Ae.create({main:{".":["epr-main",he.emojiPicker],position:"relative",display:"flex",flexDirection:"column",borderWidth:"1px",borderStyle:"solid",borderRadius:"var(--epr-picker-border-radius)",borderColor:"var(--epr-picker-border-color)",backgroundColor:"var(--epr-bg-color)",overflow:"hidden",transition:"all 0.3s ease-in-out, background-color 0.1s ease-in-out","*":{boxSizing:"border-box",fontFamily:"sans-serif"}},baseVariables:{"--":{"--epr-highlight-color":"#007aeb","--epr-hover-bg-color":"#e5f0fa","--epr-hover-bg-color-reduced-opacity":"#e5f0fa80","--epr-focus-bg-color":"#e0f0ff","--epr-text-color":"#858585","--epr-search-input-bg-color":"#f6f6f6","--epr-picker-border-color":"#e7e7e7","--epr-bg-color":"#fff","--epr-reactions-bg-color":"#ffffff90","--epr-category-icon-active-color":"#6aa8de","--epr-skin-tone-picker-menu-color":"#ffffff95","--epr-skin-tone-outer-border-color":"#555555","--epr-skin-tone-inner-border-color":"var(--epr-bg-color)","--epr-horizontal-padding":"10px","--epr-picker-border-radius":"8px","--epr-search-border-color":"var(--epr-highlight-color)","--epr-header-padding":"15px var(--epr-horizontal-padding)","--epr-active-skin-tone-indicator-border-color":"var(--epr-highlight-color)","--epr-active-skin-hover-color":"var(--epr-hover-bg-color)","--epr-search-input-bg-color-active":"var(--epr-search-input-bg-color)","--epr-search-input-padding":"0 30px","--epr-search-input-border-radius":"8px","--epr-search-input-height":"40px","--epr-search-input-text-color":"var(--epr-text-color)","--epr-search-input-placeholder-color":"var(--epr-text-color)","--epr-search-bar-inner-padding":"var(--epr-horizontal-padding)","--epr-category-navigation-button-size":"30px","--epr-emoji-variation-picker-height":"45px","--epr-emoji-variation-picker-bg-color":"var(--epr-bg-color)","--epr-preview-height":"70px","--epr-preview-text-size":"14px","--epr-preview-text-padding":"0 var(--epr-horizontal-padding)","--epr-preview-border-color":"var(--epr-picker-border-color)","--epr-preview-text-color":"var(--epr-text-color)","--epr-category-padding":"0 var(--epr-horizontal-padding)","--epr-category-label-bg-color":"#ffffffe6","--epr-category-label-text-color":"var(--epr-text-color)","--epr-category-label-padding":"0 var(--epr-horizontal-padding)","--epr-category-label-height":P3+"px","--epr-emoji-size":"30px","--epr-emoji-padding":"5px","--epr-emoji-fullsize":"calc(var(--epr-emoji-size) + var(--epr-emoji-padding) * 2)","--epr-emoji-hover-color":"var(--epr-hover-bg-color)","--epr-emoji-variation-indicator-color":"var(--epr-picker-border-color)","--epr-emoji-variation-indicator-color-hover":"var(--epr-text-color)","--epr-header-overlay-z-index":"3","--epr-emoji-variations-indictator-z-index":"1","--epr-category-label-z-index":"2","--epr-skin-variation-picker-z-index":"5","--epr-preview-z-index":"6","--epr-dark":"#000","--epr-dark-emoji-variation-picker-bg-color":"var(--epr-dark)","--epr-dark-highlight-color":"#c0c0c0","--epr-dark-text-color":"var(--epr-highlight-color)","--epr-dark-hover-bg-color":"#363636f6","--epr-dark-hover-bg-color-reduced-opacity":"#36363680","--epr-dark-focus-bg-color":"#474747","--epr-dark-search-input-bg-color":"#333333","--epr-dark-category-label-bg-color":"#222222e6","--epr-dark-picker-border-color":"#151617","--epr-dark-bg-color":"#222222","--epr-dark-reactions-bg-color":"#22222290","--epr-dark-search-input-bg-color-active":"var(--epr-dark)","--epr-dark-emoji-variation-indicator-color":"#444","--epr-dark-category-icon-active-color":"#3271b7","--epr-dark-skin-tone-picker-menu-color":"#22222295","--epr-dark-skin-tone-outer-border-color":"var(--epr-dark-picker-border-color)","--epr-dark-skin-tone-inner-border-color":"#FFFFFF"}},autoThemeDark:{".":he.autoTheme,"@media (prefers-color-scheme: dark)":{"--":Ap}},darkTheme:{".":he.darkTheme,"--":Ap},reactionsMenu:{".":"epr-reactions",height:"50px",display:"inline-flex",backgroundColor:"var(--epr-reactions-bg-color)",backdropFilter:"blur(8px)","--":{"--epr-picker-border-radius":"50px"}}});function F3(e,a){if(!e||!a)return 0;var i=e.getBoundingClientRect().width,f=a.getBoundingClientRect().width;return Math.floor(i/f)}function q3(e,a){if(!e||!a)return 0;var i=a.getBoundingClientRect().width,f=a.getBoundingClientRect().left,c=e.getBoundingClientRect().left;return Math.floor((f-c)/i)}function V3(e,a){if(!e||!a)return 0;var i=a.getBoundingClientRect().height,f=a.getBoundingClientRect().top,c=e.getBoundingClientRect().top;return Math.round((f-c)/i)}function xE(e,a){if(!e||!a)return!1;var i=a.getBoundingClientRect().height,f=a.getBoundingClientRect().top,c=e.getBoundingClientRect().top,d=e.getBoundingClientRect().height;return Math.round(f-c+i)<d}function c1(e,a,i){if(a===-1){var f=Math.floor((e.length-1)/i),c=f*i,d=e.length-1;return e.slice(c,d+1)}return e.slice(a*i,(a+1)*i)}function ME(e,a,i){var f=a+1;return f*i>e.length?[]:c1(e,f,i)}function X3(e,a,i,f){var c=c1(e,a,i);return c[f]||c[c.length-1]||null}function jE(e,a,i,f){var c=ME(e,a,i);return c[f]||c[c.length-1]||null}function LE(e,a,i,f){var c=c1(e,a-1,i);return c[f]||c[c.length-1]||null}function SE(e,a,i){if(!e||!a.length)return null;var f=e.getBoundingClientRect().top,c=e.getBoundingClientRect().bottom,d=f+kE(e),m=a.find(function(y){var b=y.getBoundingClientRect().top,x=y.getBoundingClientRect().bottom,v=y.clientHeight*i,M=b+v,j=x-v;return M<d?!1:M>=f&&M<=c||j>=f&&j<=c});return m||null}function CE(e){return!!e.nextElementSibling}function kE(e){for(var a=Array.from(e.querySelectorAll(mt(he.label))),i=0,f=a;i<f.length;i++){var c=f[i],d=c.getBoundingClientRect().height;if(d>0)return d}return P3}var ol="button"+mt(he.emoji),EE=[ol,mt(he.visible),":not("+mt(he.hidden)+")"].join("");function dn(e){var a;return(a=e==null?void 0:e.closest(ol))!=null?a:null}function u1(e){var a=nb(e),i=h1(e);if(!a)return[];var f=ai(i??a);return f?[f,i]:[]}function TE(e){var a;return!!(e!=null&&e.matches(ol)||!(e==null||(a=e.parentElement)==null)&&a.matches(ol))}function zp(e){var a;return(a=e==null?void 0:e.clientHeight)!=null?a:0}function W3(e){if(!e)return 0;var a=dn(e),i=Ca(a),f=d1(i);return Rp(a)+Rp(i)+f}function d1(e){var a,i;if(!e)return 0;var f=e.querySelector(mt(he.categoryContent));return((a=e==null?void 0:e.clientHeight)!=null?a:0)-((i=f==null?void 0:f.clientHeight)!=null?i:0)}function NE(e){return e?eb(e)<d1(Ca(e)):!1}function K3(e){return e?e.matches(mt(he.scrollBody))?e:e.querySelector(mt(he.scrollBody)):null}function eb(e){var a,i;return e?W3(e)-((a=(i=tb(e))==null?void 0:i.scrollTop)!=null?a:0):0}function tb(e){var a;return e&&(a=e.closest(mt(he.scrollBody)))!=null?a:null}function IE(e){var a=dn(e),i=Ca(a);return Op(a)+Op(i)}function Rp(e){var a;return(a=e==null?void 0:e.offsetTop)!=null?a:0}function Op(e){var a;return(a=e==null?void 0:e.offsetLeft)!=null?a:0}function h1(e){var a;return(a=DE(dn(e),"unified"))!=null?a:null}function nb(e){var a=h1(e);return a?t1(a):null}function ab(e){return e?{unified:h1(e),originalUnified:nb(e)}:{unified:null,originalUnified:null}}function DE(e,a){var i;return(i=AE(e)[a])!=null?i:null}function AE(e){var a;return(a=e==null?void 0:e.dataset)!=null?a:{}}function m1(e){return e.classList.contains(he.visible)}function rb(e){return e?e.classList.contains(he.hidden):!0}function ri(e){return e?Array.from(e.querySelectorAll(EE)):[]}function ib(e){if(!e)return null;var a=ri(e),i=a.slice(-1),f=i[0];return f?m1(f)?f:g1(f):null}function fb(e){var a=e.nextElementSibling;return a?m1(a)?a:fb(a):p1(Ul(e))}function g1(e){var a=e.previousElementSibling;return a?m1(a)?a:g1(a):ib(Bl(e))}function p1(e){if(!e)return null;var a=ri(e);return SE(e,a,.1)}function Bl(e){var a=Ca(e);if(!a)return null;var i=a.previousElementSibling;return i?rb(i)?Bl(i):i:null}function Ul(e){var a=Ca(e);if(!a)return null;var i=a.nextElementSibling;return i?rb(i)?Ul(i):i:null}function Ca(e){return e?e.closest(mt(he.category)):null}function ob(e){return e?e.closest(mt(he.categoryContent)):null}function sb(e){return e.split("-").map(function(a){return String.fromCodePoint(parseInt(a,16))}).join("")}var lb="epr_suggested";function cb(e){try{var a,i,f;if(!((a=window)!=null&&a.localStorage))return[];var c=JSON.parse((i=(f=window)==null?void 0:f.localStorage.getItem(lb))!=null?i:"[]");return e===Af.FREQUENT?c.sort(function(d,m){return m.count-d.count}):c}catch{return[]}}function zE(e,a){var i=cb(),f=wt(e,a),c=wt(e),d=i.find(function(b){var x=b.unified;return x===f}),m;d?m=[d].concat(i.filter(function(b){return b!==d})):(d={unified:f,original:c,count:0},m=[d].concat(i)),d.count++,m.length=Math.min(m.length,14);try{var y;(y=window)==null||y.localStorage.setItem(lb,JSON.stringify(m))}catch{}}function RE(e){return e.category===de.CUSTOM}function ub(e){return e.imgUrl!==void 0}function db(e,a){var i=g.useRef(),f=Z3(),c=zk(),d=ui(),m=d[1],y=rr(),b=r1(),x=b[0],v=yk(a),M=D3(),j=M[1],k=ar(),N=nr(),C=g.useCallback(function(G){if(!c.current){y();var _=Bp(G),L=_[0],R=_[1];if(!(!L||!R)){var O=nk(R)||x;j(),zE(L,O),v(OE(L,O,N,k),G)}}},[x,y,c,v,j,k,N]),E=g.useCallback(function(G){var _;i.current&&clearTimeout(i.current);var L=Bp(G),R=L[0];!R||!ci(R)||(i.current=(_=window)==null?void 0:_.setTimeout(function(){c.current=!0,i.current=void 0,y(),f(G.target),m(R)},500))},[c,y,f,m]),I=g.useCallback(function(){i.current?(clearTimeout(i.current),i.current=void 0):c.current&&requestAnimationFrame(function(){c.current=!1})},[c]);g.useEffect(function(){if(e.current){var A=e.current;return A.addEventListener("click",C,{passive:!0}),A.addEventListener("mousedown",E,{passive:!0}),A.addEventListener("mouseup",I,{passive:!0}),function(){A==null||A.removeEventListener("click",C),A==null||A.removeEventListener("mousedown",E),A==null||A.removeEventListener("mouseup",I)}}},[e,C,E,I])}function Bp(e){var a=e==null?void 0:e.target;return TE(a)?u1(a):[]}function OE(e,a,i,f){var c=Hf(e);if(ub(e)){var d=wt(e);return{activeSkinTone:a,emoji:d,getImageUrl:function(){return e.imgUrl},imageUrl:e.imgUrl,isCustom:!0,names:c,unified:d,unifiedWithoutSkinTone:d}}var m=wt(e,a);return{activeSkinTone:a,emoji:sb(m),getImageUrl:function(b){return b===void 0&&(b=i??Yt.APPLE),f(m,b)},imageUrl:f(m,i??Yt.APPLE),isCustom:!1,names:c,unified:m,unifiedWithoutSkinTone:wt(e)}}function Vf(e){return g.createElement("button",Object.assign({type:"button"},e,{className:pe(BE.button,e.className)}),e.children)}var BE=Ae.create({button:{".":"epr-btn",cursor:"pointer",border:"0",background:"none",outline:"none"}});function UE(e){var a,i=e.emojiNames,f=e.unified,c=e.hidden,d=e.hiddenOnSearch,m=e.showVariations,y=m===void 0?!0:m,b=e.hasVariations,x=e.children,v=e.className,M=e.noBackground,j=M===void 0?!1:M;return g.createElement(Vf,{className:pe(Dd.emoji,c&&K0.hidden,d&&tr.hiddenOnSearch,(a={},a[he.visible]=!c&&!d,a),!!(b&&y)&&Dd.hasVariations,j&&Dd.noBackground,v),"data-unified":f,"aria-label":_E(i),"data-full-name":i},x)}function _E(e){var a;return e[0].match("flag-")&&(a=e[1])!=null?a:e[0]}var Dd=Ae.create({emoji:{".":he.emoji,position:"relative",width:"var(--epr-emoji-fullsize)",height:"var(--epr-emoji-fullsize)",boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:"center",maxWidth:"var(--epr-emoji-fullsize)",maxHeight:"var(--epr-emoji-fullsize)",borderRadius:"8px",overflow:"hidden",transition:"background-color 0.2s",":hover":{backgroundColor:"var(--epr-emoji-hover-color)"},":focus":{backgroundColor:"var(--epr-focus-bg-color)"}},noBackground:{background:"none",":hover":{backgroundColor:"transparent",background:"none"},":focus":{backgroundColor:"transparent",background:"none"}},hasVariations:{".":he.emojiHasVariations,":after":{content:"",display:"block",width:"0",height:"0",right:"0px",bottom:"1px",position:"absolute",borderLeft:"4px solid transparent",borderRight:"4px solid transparent",transform:"rotate(135deg)",borderBottom:"4px solid var(--epr-emoji-variation-indicator-color)",zIndex:"var(--epr-emoji-variations-indictator-z-index)"},":hover:after":{borderBottom:"4px solid var(--epr-emoji-variation-indicator-color-hover)"}}}),sl=Ae.create({external:{".":he.external,fontSize:"0"},common:{alignSelf:"center",justifySelf:"center",display:"block"}});function Up(e){var a=e.emojiName,i=e.style,f=e.lazyLoad,c=f===void 0?!1:f,d=e.imgUrl,m=e.onError,y=e.className;return g.createElement("img",{src:d,alt:a,className:pe(YE.emojiImag,sl.external,sl.common,y),loading:c?"lazy":"eager",onError:m,style:i})}var YE=Ae.create({emojiImag:{".":"epr-emoji-img",maxWidth:"var(--epr-emoji-fullsize)",maxHeight:"var(--epr-emoji-fullsize)",minWidth:"var(--epr-emoji-fullsize)",minHeight:"var(--epr-emoji-fullsize)",padding:"var(--epr-emoji-padding)"}});function QE(e){var a=e.unified,i=e.style,f=e.className;return g.createElement("span",{className:pe(GE.nativeEmoji,sl.common,sl.external,f),"data-unified":a,style:i},sb(a))}var GE=Ae.create({nativeEmoji:{".":"epr-emoji-native",fontFamily:'"Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "EmojiOne Color", "Android Emoji"!important',position:"relative",lineHeight:"100%",fontSize:"var(--epr-emoji-size)",textAlign:"center",alignSelf:"center",justifySelf:"center",letterSpacing:"0",padding:"var(--epr-emoji-padding)"}});function N0(e){var a=e.emoji,i=e.unified,f=e.emojiStyle,c=e.size,d=e.lazyLoad,m=e.getEmojiUrl,y=m===void 0?b3:m,b=e.className,x=I3(),v=x[1],M={};c&&(M.width=M.height=M.fontSize=c+"px");var j=a||ai(i);if(!j)return null;if(ub(j))return g.createElement(Up,{style:M,emojiName:i,emojiStyle:Yt.NATIVE,lazyLoad:d,imgUrl:j.imgUrl,onError:k,className:b});return g.createElement(g.Fragment,null,f===Yt.NATIVE?g.createElement(QE,{unified:i,style:M,className:b}):g.createElement(Up,{style:M,emojiName:E0(j),emojiStyle:f,lazyLoad:d,imgUrl:y(i,f),onError:k,className:b}));function k(){v(function(N){return new Set(N).add(i)})}}function _l(e){var a=e.emoji,i=e.unified,f=e.hidden,c=e.hiddenOnSearch,d=e.emojiStyle,m=e.showVariations,y=m===void 0?!0:m,b=e.size,x=e.lazyLoad,v=e.getEmojiUrl,M=e.className,j=e.noBackground,k=j===void 0?!1:j,N=ci(a);return g.createElement(UE,{hasVariations:N,showVariations:y,hidden:f,hiddenOnSearch:c,emojiNames:Hf(a),unified:i,noBackground:k},g.createElement(N0,{unified:i,emoji:a,size:b,emojiStyle:d,lazyLoad:x,getEmojiUrl:v,className:M}))}var $E="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI4LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjgwcHgiIHZpZXdCb3g9IjAgMCAyMCA4MCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjAgODAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsPSIjODY4Njg2IiBkPSJNNS43LDEwLjRjMCwwLjEsMC4xLDAuMywwLjIsMC40QzYsMTAuOSw2LjEsMTEsNi4zLDExaDMuNHYzLjRjMCwwLjEsMC4xLDAuMywwLjIsMC40CgljMC4xLDAuMSwwLjIsMC4yLDAuNCwwLjJjMC4zLDAsMC41LTAuMiwwLjUtMC41di0zLjRoMy40YzAuMywwLDAuNS0wLjIsMC41LTAuNXMtMC4yLTAuNS0wLjUtMC41aC0zLjRWNi43YzAtMC4zLTAuMi0wLjUtMC41LTAuNQoJQzkuOCw2LDkuNiw2LjIsOS42LDYuNXYzLjRINi4yQzUuOSw5LjksNS43LDEwLjEsNS43LDEwLjRMNS43LDEwLjR6Ii8+CjxwYXRoIGZpbGw9IiMzMzcxQjciIGQ9Ik01LjcsMzAuNGMwLDAuMSwwLjEsMC4zLDAuMiwwLjRTNi4xLDMxLDYuMywzMWgzLjR2My40YzAsMC4xLDAuMSwwLjMsMC4yLDAuNGMwLjEsMC4xLDAuMiwwLjIsMC40LDAuMgoJYzAuMywwLDAuNS0wLjIsMC41LTAuNXYtMy40aDMuNGMwLjMsMCwwLjUtMC4yLDAuNS0wLjVzLTAuMi0wLjUtMC41LTAuNWgtMy40di0zLjRjMC0wLjMtMC4yLTAuNS0wLjUtMC41cy0wLjUsMC4yLTAuNSwwLjV2My40SDYuMgoJQzUuOSwyOS45LDUuNywzMC4xLDUuNywzMC40TDUuNywzMC40eiIvPgo8cGF0aCBmaWxsPSIjQzBDMEJGIiBkPSJNNS43LDUwLjRjMCwwLjEsMC4xLDAuMywwLjIsMC40QzYsNTAuOSw2LjEsNTEsNi4zLDUxaDMuNHYzLjRjMCwwLjEsMC4xLDAuMywwLjIsMC40CgljMC4xLDAuMSwwLjIsMC4yLDAuNCwwLjJjMC4zLDAsMC41LTAuMiwwLjUtMC41di0zLjRoMy40YzAuMywwLDAuNS0wLjIsMC41LTAuNXMtMC4yLTAuNS0wLjUtMC41aC0zLjR2LTMuNGMwLTAuMy0wLjItMC41LTAuNS0wLjUKCXMtMC41LDAuMi0wLjUsMC41djMuNEg2LjJDNS45LDQ5LjksNS43LDUwLjEsNS43LDUwLjRMNS43LDUwLjR6Ii8+CjxwYXRoIGZpbGw9IiM2QUE5REQiIGQ9Ik01LjcsNzAuNGMwLDAuMSwwLjEsMC4zLDAuMiwwLjRTNi4xLDcxLDYuMyw3MWgzLjR2My40YzAsMC4xLDAuMSwwLjMsMC4yLDAuNGMwLjEsMC4xLDAuMiwwLjIsMC40LDAuMgoJYzAuMywwLDAuNS0wLjIsMC41LTAuNXYtMy40aDMuNGMwLjMsMCwwLjUtMC4yLDAuNS0wLjVzLTAuMi0wLjUtMC41LTAuNWgtMy40di0zLjRjMC0wLjMtMC4yLTAuNS0wLjUtMC41cy0wLjUsMC4yLTAuNSwwLjV2My40SDYuNAoJQzUuOSw2OS45LDUuNyw3MC4xLDUuNyw3MC40TDUuNyw3MC40eiIvPgo8L3N2Zz4=";function ZE(){var e=Il(),a=e[1];return g.createElement(Vf,{"aria-label":"Show all Emojis",title:"Show all Emojis",tabIndex:0,className:pe(JE.plusSign),onClick:function(){return a(!1)}})}var JE=Ae.create(Re({plusSign:{fontSize:"20px",padding:"17px",color:"var(--epr-text-color)",borderRadius:"50%",textAlign:"center",lineHeight:"100%",width:"20px",height:"20px",display:"flex",justifyContent:"center",alignItems:"center",transition:"background-color 0.2s ease-in-out",":after":{content:"",minWidth:"20px",minHeight:"20px",backgroundImage:"url("+$E+")",backgroundColor:"transparent",backgroundRepeat:"no-repeat",backgroundSize:"20px",backgroundPositionY:"0"},":hover":{color:"var(--epr-highlight-color)",backgroundColor:"var(--epr-hover-bg-color-reduced-opacity)",":after":{backgroundPositionY:"-20px"}},":focus":{color:"var(--epr-highlight-color)",backgroundColor:"var(--epr-hover-bg-color-reduced-opacity)",":after":{backgroundPositionY:"-40px"}}}},xa("plusSign",{":after":{backgroundPositionY:"-40px"},":hover:after":{backgroundPositionY:"-60px"}})));function HE(){var e=Il(),a=e[0],i=Bk(),f=kk();db(i,Of.REACTIONS);var c=nr(),d=L3(),m=ar();return a?g.createElement("ul",{className:pe(_p.list,!a&&K0.hidden),ref:i},f.map(function(y){return g.createElement("li",{key:y},g.createElement(_l,{emoji:ai(y),emojiStyle:c,unified:y,showVariations:!1,className:pe(_p.emojiButton),noBackground:!0,getEmojiUrl:m}))}),d?g.createElement("li",null,g.createElement(ZE,null)):null):null}var _p=Ae.create({list:{listStyle:"none",margin:"0",padding:"0 5px",display:"flex",justifyContent:"space-between",alignItems:"center",height:"100%"},emojiButton:{":hover":{transform:"scale(1.2)"},":focus":{transform:"scale(1.2)"},":active":{transform:"scale(1.1)"},transition:"transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.5)"}});function PE(e){var a=rr();g.useEffect(function(){var i=e.current;if(!i)return;i.addEventListener("scroll",f,{passive:!0});function f(){a()}return function(){i==null||i.removeEventListener("scroll",f)}},[e,a])}function FE(){var e=I3(),a=e[0],i=aE();return function(f){var c=wt(f),d=a.has(c),m=i(c);return{failedToLoad:d,filteredOut:m,hidden:d||m}}}function hb(e){var a=e.categoryConfig,i=e.children,f=e.hidden,c=e.hiddenOnSearch,d=e1(a),m=p3(a);return g.createElement("li",{className:pe(Ad.category,f&&K0.hidden,c&&tr.hiddenOnSearch),"data-name":d,"aria-label":m},g.createElement("h2",{className:pe(Ad.label)},m),g.createElement("div",{className:pe(Ad.categoryContent)},i))}var Ad=Ae.create({category:{".":he.category,":not(:has(.epr-visible))":{display:"none"}},categoryContent:{".":he.categoryContent,display:"grid",gridGap:"0",gridTemplateColumns:"repeat(auto-fill, var(--epr-emoji-fullsize))",justifyContent:"space-between",margin:"var(--epr-category-padding)",position:"relative"},label:{".":he.label,alignItems:"center",backdropFilter:"blur(3px)",backgroundColor:"var(--epr-category-label-bg-color)",color:"var(--epr-category-label-text-color)",display:"flex",fontSize:"16px",fontWeight:"bold",height:"var(--epr-category-label-height)",margin:"0",padding:"var(--epr-category-label-padding)",position:"sticky",textTransform:"capitalize",top:"0",width:"100%",zIndex:"var(--epr-category-label-z-index)"}}),zd=!1;function qE(){var e=g.useState(zd),a=e[0],i=e[1];return g.useEffect(function(){i(!0),zd=!0},[]),a||zd}function VE(e){var a=e.categoryConfig,i=D3(),f=i[0],c=qE(),d=vk(),m=ar(),y=g.useMemo(function(){var x;return(x=cb(d))!=null?x:[]},[f,d]),b=nr();return c?g.createElement(hb,{categoryConfig:a,hiddenOnSearch:!0,hidden:y.length===0},y.map(function(x){var v=ai(x.original);return v?g.createElement(_l,{showVariations:!1,unified:x.unified,emojiStyle:b,emoji:v,key:x.unified,getEmojiUrl:m}):null})):null}function XE(){var e=C3(),a=g.useRef(0);return g.createElement("ul",{className:pe(KE.emojiList)},e.map(function(i){var f=e1(i);return f===de.SUGGESTED?g.createElement(VE,{key:f,categoryConfig:i}):g.createElement(g.Suspense,{key:f},g.createElement(WE,{category:f,categoryConfig:i,renderdCategoriesCountRef:a}))}))}function WE(e){var a=e.category,i=e.categoryConfig,f=e.renderdCategoriesCountRef,c=FE(),d=xk(),m=nr(),y=Rk(),b=r1(),x=b[0],v=Nk(),M=ar(),j=!S3(),k=!y&&f.current>0?[]:W8(a);k.length>0&&f.current++;var N=0,C=k.map(function(E){var I=wt(E,x),A=c(E),G=A.failedToLoad,_=A.filteredOut,L=A.hidden,R=v(E);return(L||R)&&N++,R?null:g.createElement(_l,{showVariations:j,key:I,emoji:E,unified:I,hidden:G,hiddenOnSearch:_,emojiStyle:m,lazyLoad:d,getEmojiUrl:M})});return g.createElement(hb,{categoryConfig:i,hidden:N===C.length},C)}var KE=Ae.create({emojiList:{".":he.emojiList,listStyle:"none",margin:"0",padding:"0"}}),eT="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI1MHB4IgoJIGhlaWdodD0iMTVweCIgdmlld0JveD0iMCAwIDUwIDE1IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MCAxNSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnIGlkPSJMYXllcl8xIj4KPC9nPgo8ZyBpZD0iTGF5ZXJfMiI+Cgk8cGF0aCBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiNFOEU3RTciIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTEuODYtMC40M2w5LjgzLDExLjUzYzAuNTksMC42OSwxLjU2LDAuNjksMi4xNCwwbDkuODMtMTEuNTMiLz4KCTxwYXRoIGZpbGw9IiMwMTAyMDIiIHN0cm9rZT0iIzE1MTYxNyIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMjYuODYtMC40M2w5LjgzLDExLjUzYzAuNTksMC42OSwxLjU2LDAuNjksMi4xNCwwbDkuODMtMTEuNTMiLz4KPC9nPgo8L3N2Zz4=",qr;(function(e){e[e.Up=0]="Up",e[e.Down=1]="Down"})(qr||(qr={}));function tT(){var e=zl(),a=Uk(),i=ui(),f=i[0],c=nr(),d=aT(a),m=d.getTop,y=d.getMenuDirection,b=B3(),x=nT(a),v=ar(),M=dn(e.current),j=!!(f&&M&&ci(f)&&M.classList.contains(he.emojiHasVariations));g.useEffect(function(){j&&Ol(a.current)},[a,j,e]);var k,N;return!j&&e.current?b(null):(k=m(),N=x()),g.createElement("div",{ref:a,className:pe(Ss.variationPicker,y()===qr.Down&&Ss.pointingUp,j&&Ss.visible),style:{top:k}},j&&f?[wt(f)].concat(Pf(f)).slice(0,6).map(function(C){return g.createElement(_l,{key:C,emoji:f,unified:C,emojiStyle:c,showVariations:!1,getEmojiUrl:v})}):null,g.createElement("div",{className:pe(Ss.pointer),style:N}))}function nT(e){var a=zl();return function(){var f={};if(!e.current)return f;if(a.current){var c=dn(a.current),d=IE(c);if(!c)return f;f.left=d+(c==null?void 0:c.clientWidth)/2}return f}}function aT(e){var a=zl(),i=rn(),f=qr.Up;return{getMenuDirection:c,getTop:d};function c(){return f}function d(){f=qr.Up;var m=0;if(!e.current)return 0;var y=zp(e.current);if(a.current){var b,x=i.current,v=dn(a.current),M=zp(v);m=W3(v);var j=(b=x==null?void 0:x.scrollTop)!=null?b:0;j>m-y&&(f=qr.Down,m+=M+y)}return m-y}}var Ss=Ae.create(Re({variationPicker:{".":he.variationPicker,position:"absolute",right:"15px",left:"15px",padding:"5px",boxShadow:"0px 2px 5px rgba(0, 0, 0, 0.2)",borderRadius:"3px",display:"flex",alignItems:"center",justifyContent:"space-around",opacity:"0",visibility:"hidden",pointerEvents:"none",top:"-100%",border:"1px solid var(--epr-picker-border-color)",height:"var(--epr-emoji-variation-picker-height)",zIndex:"var(--epr-skin-variation-picker-z-index)",background:"var(--epr-emoji-variation-picker-bg-color)",transform:"scale(0.9)",transition:"transform 0.1s ease-out, opacity 0.2s ease-out"},visible:{opacity:"1",visibility:"visible",pointerEvents:"all",transform:"scale(1)"},pointingUp:{".":"pointing-up",transformOrigin:"center 0%",transform:"scale(0.9)"},".pointing-up":{pointer:{top:"0",transform:"rotate(180deg) translateY(100%) translateX(18px)"}},pointer:{".":"epr-emoji-pointer",content:"",position:"absolute",width:"25px",height:"15px",backgroundRepeat:"no-repeat",backgroundPosition:"0 0",backgroundSize:"50px 15px",top:"100%",transform:"translateX(-18px)",backgroundImage:"url("+eT+")"}},xa("pointer",{backgroundPosition:"-25px 0"})));function rT(){var e=rn();return PE(e),db(e,Of.PICKER),Vk(),g.createElement("div",{className:pe(iT.body,tr.hiddenOnReactions),ref:e},g.createElement(tT,null),g.createElement(XE,null))}var iT=Ae.create({body:{".":he.scrollBody,flex:"1",overflowY:"scroll",overflowX:"hidden",position:"relative"}});function fT(e,a){if(!e||!a)return 0;var i=e.getBoundingClientRect(),f=a.getBoundingClientRect();return f.height-(i.y-f.y)}function oT(e,a){var i=rn(),f=Q3(),c=Y3();g.useEffect(function(){if(!e)return;var d=i.current;d==null||d.addEventListener("keydown",b,{passive:!0}),d==null||d.addEventListener("mouseover",x,!0),d==null||d.addEventListener("focus",m,!0),d==null||d.addEventListener("mouseout",y,{passive:!0}),d==null||d.addEventListener("blur",y,!0);function m(v){var M=dn(v.target);if(!M)return y();var j=ab(M),k=j.unified,N=j.originalUnified;if(!k||!N)return y();a({unified:k,originalUnified:N})}function y(v){if(v){var M=v.relatedTarget;if(!dn(M))return a(null)}a(null)}function b(v){v.key==="Escape"&&a(null)}function x(v){if(!f()){var M=dn(v.target);if(M){var j=fT(M,d),k=M.getBoundingClientRect().height;if(j<k)return sT(M,a);Qt(M)}}}return function(){d==null||d.removeEventListener("mouseover",x),d==null||d.removeEventListener("mouseout",y),d==null||d.removeEventListener("focus",m,!0),d==null||d.removeEventListener("blur",y,!0),d==null||d.removeEventListener("keydown",b)}},[i,e,a,f,c])}function sT(e,a){var i,f=ab(e),c=f.unified,d=f.originalUnified;!c||!d||((i=document.activeElement)==null||i.blur==null||i.blur(),a({unified:c,originalUnified:d}))}var Cs,Uf;(function(e){e.ROW="FlexRow",e.COLUMN="FlexColumn"})(Uf||(Uf={}));function mb(e){var a=e.children,i=e.className,f=e.style,c=f===void 0?{}:f,d=e.direction,m=d===void 0?Uf.ROW:d;return g.createElement("div",{style:Re({},c),className:pe(Yp.flex,i,Yp[m])},a)}var Yp=Ae.create((Cs={flex:{display:"flex"}},Cs[Uf.ROW]={flexDirection:"row"},Cs[Uf.COLUMN]={flexDirection:"column"},Cs));function lT(e){var a=e.className,i=e.style,f=i===void 0?{}:i;return g.createElement("div",{style:Re({flex:1},f),className:pe(a)})}function cT(e){var a=e.children,i=e.className,f=e.style;return g.createElement("div",{style:Re({},f,{position:"absolute"}),className:i},a)}function Yl(e){var a=e.children,i=e.className,f=e.style;return g.createElement("div",{style:Re({},f,{position:"relative"}),className:i},a)}function uT(e){var a=e.isOpen,i=e.onClick,f=e.isActive,c=e.skinToneVariation,d=e.style;return g.createElement(Vf,{style:d,onClick:i,className:pe("epr-tone-"+c,Rd.tone,!a&&Rd.closedTone,f&&Rd.active),"aria-pressed":f,"aria-label":"Skin tone "+q8[c]})}var Rd=Ae.create({closedTone:{opacity:"0",zIndex:"0"},active:{".":"epr-active",zIndex:"1",opacity:"1"},tone:{".":"epr-tone",width:"var(--epr-skin-tone-size)",display:"block",cursor:"pointer",borderRadius:"4px",height:"var(--epr-skin-tone-size)",position:"absolute",right:"0",transition:"transform 0.3s ease-in-out, opacity 0.35s ease-in-out",zIndex:"0",border:"1px solid var(--epr-skin-tone-outer-border-color)",boxShadow:"inset 0px 0px 0 1px var(--epr-skin-tone-inner-border-color)",":hover":{boxShadow:"0 0 0 3px var(--epr-active-skin-hover-color), inset 0px 0px 0 1px var(--epr-skin-tone-inner-border-color)"},":focus":{boxShadow:"0 0 0 3px var(--epr-focus-bg-color)"},"&.epr-tone-neutral":{backgroundColor:"#ffd225"},"&.epr-tone-1f3fb":{backgroundColor:"#ffdfbd"},"&.epr-tone-1f3fc":{backgroundColor:"#e9c197"},"&.epr-tone-1f3fd":{backgroundColor:"#c88e62"},"&.epr-tone-1f3fe":{backgroundColor:"#a86637"},"&.epr-tone-1f3ff":{backgroundColor:"#60463a"}}}),Lf=28;function dT(){return g.createElement(Yl,{style:{height:Lf}},g.createElement(cT,{style:{bottom:0,right:0}},g.createElement(gb,{direction:_f.VERTICAL})))}function gb(e){var a=e.direction,i=a===void 0?_f.HORIZONTAL:a,f=i1(),c=S3(),d=Ff(),m=d[0],y=d[1],b=r1(),x=b[0],v=b[1],M=bk(),j=rr(),k=ir();if(c)return null;var N=Lf*il.length+"px",C=m?N:Lf+"px",E=i===_f.VERTICAL;return g.createElement(Yl,{className:pe(gf.skinTones,E&&gf.vertical,m&&gf.open,E&&m&&gf.verticalShadow),style:E?{flexBasis:C,height:C}:{flexBasis:C}},g.createElement("div",{className:pe(gf.select),ref:f},il.map(function(I,A){var G=I===x;return g.createElement(uT,{key:I,skinToneVariation:I,isOpen:m,style:{transform:pe(E?"translateY(-"+A*(m?Lf:0)+"px)":"translateX(-"+A*(m?Lf:0)+"px)",m&&G&&"scale(1.3)")},isActive:G,onClick:function(){m?(v(I),M(I),k()):y(!0),j()}})})))}var _f;(function(e){e.VERTICAL="epr-vertical",e.HORIZONTAL="epr-horizontal"})(_f||(_f={}));var gf=Ae.create({skinTones:{".":"epr-skin-tones","--":{"--epr-skin-tone-size":"15px"},display:"flex",alignItems:"center",justifyContent:"flex-end",transition:"all 0.3s ease-in-out",padding:"10px 0"},vertical:{padding:"9px",alignItems:"flex-end",flexDirection:"column",borderRadius:"6px",border:"1px solid var(--epr-bg-color)"},verticalShadow:{boxShadow:"0px 0 7px var(--epr-picker-border-color)"},open:{backdropFilter:"blur(5px)",background:"var(--epr-skin-tone-picker-menu-color)",".epr-active":{border:"1px solid var(--epr-active-skin-tone-indicator-border-color)"}},select:{".":"epr-skin-tone-select",position:"relative",width:"var(--epr-skin-tone-size)",height:"var(--epr-skin-tone-size)"}});function hT(){var e=k3(),a=J3();return e.showPreview?g.createElement(mb,{className:pe(Ps.preview,tr.hiddenOnReactions)},g.createElement(mT,null),g.createElement(lT,null),a?g.createElement(dT,null):null):null}function mT(){var e,a=k3(),i=g.useState(null),f=i[0],c=i[1],d=nr(),m=ui(),y=m[0],b=ar();oT(a.showPreview,c);var x=ai((e=f==null?void 0:f.unified)!=null?e:f==null?void 0:f.originalUnified),v=x!=null&&f!=null;return g.createElement(M,null);function M(){var j=y??ai(a.defaultEmoji);if(!j)return null;var k=y?E0(y):a.defaultCaption;return g.createElement(g.Fragment,null,g.createElement("div",null,v?g.createElement(N0,{unified:f==null?void 0:f.unified,emoji:x,emojiStyle:d,size:45,getEmojiUrl:b,className:pe(Ps.emoji)}):j?g.createElement(N0,{unified:wt(j),emoji:j,emojiStyle:d,size:45,getEmojiUrl:b,className:pe(Ps.emoji)}):null),g.createElement("div",{className:pe(Ps.label)},v?E0(x):k))}}var Ps=Ae.create({preview:{alignItems:"center",borderTop:"1px solid var(--epr-preview-border-color)",height:"var(--epr-preview-height)",padding:"0 var(--epr-horizontal-padding)",position:"relative",zIndex:"var(--epr-preview-z-index)"},label:{color:"var(--epr-preview-text-color)",fontSize:"var(--epr-preview-text-size)",padding:"var(--epr-preview-text-padding)",textTransform:"capitalize"},emoji:{padding:"0"}});function gT(e){var a;return(a=e==null?void 0:e.getAttribute("data-name"))!=null?a:null}function pT(e){var a=rn();g.useEffect(function(){var i=new Map,f=a.current,c=new IntersectionObserver(function(d){if(f){for(var m=T8(d),y;!(y=m()).done;){var b=y.value,x=gT(b.target);i.set(x,b.intersectionRatio)}var v=Array.from(i),M=v[v.length-1];if(M[1]==1)return e(M[0]);for(var j=0,k=v;j<k.length;j++){var N=k[j],C=N[0],E=N[1];if(E){e(C);break}}}},{threshold:[0,1]});f==null||f.querySelectorAll(mt(he.category)).forEach(function(d){c.observe(d)})},[a,e])}function yT(){var e=rn(),a=qf();return function(f){var c;if(e.current){var d=(c=e.current)==null?void 0:c.querySelector('[data-name="'+f+'"]');if(d){var m=d.offsetTop||0;U3(a.current,m)}}}}function bT(){var e=gk();return e?e.length===0:!1}var wT="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIyMDBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgMjAwIDgwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyMDAgODAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8ZyBpZD0iTGF5ZXJfMTEiPgoJPGc+CgkJPHBhdGggZmlsbD0iIzMzNzFCNyIgc3Ryb2tlPSIjMzM3MUI3IiBzdHJva2Utd2lkdGg9IjAuMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTIuOCwyOS41YzAuNiwwLDEuMS0wLjUsMS4xLTEuMQoJCQljMC0wLjYtMC41LTEuMi0xLjEtMS4yYy0wLjYsMC0xLjIsMC41LTEuMiwxLjJDMTEuNiwyOSwxMi4yLDI5LjUsMTIuOCwyOS41eiBNMTIuOCwyOGMwLjIsMCwwLjQsMC4yLDAuNCwwLjQKCQkJYzAsMC4yLTAuMiwwLjQtMC40LDAuNGMtMC4yLDAtMC40LTAuMi0wLjQtMC40QzEyLjQsMjguMSwxMi42LDI4LDEyLjgsMjh6Ii8+CgkJPHBhdGggZmlsbD0iIzMzNzFCNyIgc3Ryb2tlPSIjMzM3MUI3IiBzdHJva2Utd2lkdGg9IjAuMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTAsMjNjLTMuOCwwLTcsMy4xLTcsN2MwLDMuOCwzLjEsNyw3LDcKCQkJczctMy4xLDctN0MxNywyNi4yLDEzLjgsMjMsMTAsMjN6IE0xMCwzNi4yYy0zLjQsMC02LjItMi44LTYuMi02LjJjMC0zLjQsMi44LTYuMiw2LjItNi4yczYuMiwyLjgsNi4yLDYuMgoJCQlDMTYuMiwzMy40LDEzLjQsMzYuMiwxMCwzNi4yeiIvPgoJCTxwYXRoIGZpbGw9IiMzMzcxQjciIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTE0LjYsMzEuMmMtMC4xLTAuMS0wLjItMC4yLTAuMy0wLjJINS43CgkJCWMtMC4xLDAtMC4yLDAuMS0wLjMsMC4yYy0wLjEsMC4xLTAuMSwwLjIsMCwwLjRjMC43LDIsMi41LDMuMyw0LjYsMy4zczMuOS0xLjMsNC42LTMuM0MxNC43LDMxLjUsMTQuNywzMS4zLDE0LjYsMzEuMnogTTEwLDM0LjEKCQkJYy0xLjYsMC0zLTAuOS0zLjctMi4yaDcuM0MxMywzMy4yLDExLjYsMzQuMSwxMCwzNC4xeiIvPgoJCTxwYXRoIGZpbGw9IiMzMzcxQjciIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTcuMiwyOS41YzAuNiwwLDEuMi0wLjUsMS4yLTEuMQoJCQljMC0wLjYtMC41LTEuMi0xLjItMS4yYy0wLjYsMC0xLjEsMC41LTEuMSwxLjJDNi4xLDI5LDYuNiwyOS41LDcuMiwyOS41eiBNNy4yLDI4YzAuMiwwLDAuNCwwLjIsMC40LDAuNGMwLDAuMi0wLjIsMC40LTAuNCwwLjQKCQkJYy0wLjIsMC0wLjQtMC4yLTAuNC0wLjRDNi44LDI4LjEsNywyOCw3LjIsMjh6Ii8+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzM3MUI3IiBkPSJNNjQuMSwzMy40bDIuMywwYzAuMiwwLDAuNCwwLjIsMC40LDAuNHYyLjFjMCwwLjItMC4yLDAuNC0wLjQsMC40aC0yLjMKCQkJCWMtMC4yLDAtMC40LTAuMi0wLjQtMC40di0yLjFDNjMuNywzMy42LDYzLjgsMzMuNCw2NC4xLDMzLjR6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgZD0iTTczLjUsMzMuNWgyLjRjMC4yLDAsMC40LDAuMiwwLjQsMC40djJjMCwwLjItMC4yLDAuNC0wLjQsMC40aC0yLjQKCQkJCWMtMC4yLDAtMC40LTAuMi0wLjQtMC40bDAtMkM3My4xLDMzLjYsNzMuMywzMy41LDczLjUsMzMuNXoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzM3MUI3IiBkPSJNNjMuNywyOC40aDEyLjZ2NUg2My43VjI4LjR6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgZD0iTTY1LjUsMjMuNmg4LjljMSwwLDEuOSwwLjgsMS45LDEuOXYzLjFINjMuN3YtMy4xQzYzLjcsMjQuNSw2NC41LDIzLjYsNjUuNSwyMy42eiIvPgoJCQk8ZWxsaXBzZSBmaWxsPSIjMzM3MUI3IiBjeD0iNjYuMiIgY3k9IjMwLjkiIHJ4PSIwLjkiIHJ5PSIxIi8+CgkJCTxlbGxpcHNlIGZpbGw9IiMzMzcxQjciIGN4PSI3My44IiBjeT0iMzAuOSIgcng9IjAuOSIgcnk9IjEiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzM3MUI3IiBkPSJNOTYuNCwzMGMwLDMuNi0yLjksNi41LTYuNCw2LjVzLTYuNC0yLjktNi40LTYuNXMyLjktNi41LDYuNC02LjVTOTYuNCwyNi40LDk2LjQsMzB6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgZD0iTTk2LjMsMjguNmMwLDAsMCwwLjEsMCwwLjFjLTAuOSwwLjEtMi45LDAuMS00LjYtMS4xYy0xLjEtMC44LTItMS43LTIuNi0yLjUKCQkJCWMtMC4zLTAuNC0wLjYtMC44LTAuNy0xYy0wLjEtMC4xLTAuMS0wLjEtMC4xLTAuMmMwLjUtMC4xLDEuMi0wLjIsMi0wLjFjMS4yLDAsMi41LDAuMywzLjUsMS4xYzEsMC44LDEuNywxLjgsMi4xLDIuOAoJCQkJQzk2LjEsMjcuOSw5Ni4yLDI4LjMsOTYuMywyOC42eiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIGQ9Ik04NCwzMi4yYzAsMCwwLTAuMSwwLTAuMWMwLjktMC4yLDIuOS0wLjQsNC43LDAuNmMxLjEsMC43LDEuOSwxLjUsMi40LDIuMwoJCQkJYzAuNCwwLjUsMC42LDEsMC43LDEuM2MtMC40LDAuMS0xLDAuMi0xLjcsMC4zYy0xLDAtMi4xLTAuMS0zLjItMC44cy0xLjktMS42LTIuNC0yLjVDODQuMiwzMi44LDg0LjEsMzIuNSw4NCwzMi4yeiIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTExNi4zLDI2LjhsLTEuNCwybC0wLjgtMC44bC0wLjYtMC42bDAsMC45bC0wLjEsOC4yaC02LjgKCQkJCWwtMC4xLTguMmwwLTAuOWwtMC42LDAuNmwtMC44LDAuOGwtMS40LTJsMi42LTIuOWMwLjEtMC4xLDAuMi0wLjEsMC4zLTAuMWgxLjNsMC40LDAuN2MwLjcsMS4zLDIuNiwxLjMsMy4zLTAuMWwwLjMtMC42aDEuMgoJCQkJYzAuMSwwLDAuMiwwLDAuMywwLjFsMC4zLTAuM2wtMC4zLDAuM0wxMTYuMywyNi44eiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIGQ9Ik0xMTAuMSwyNy43aDJ2MC45YzAsMC40LTAuNCwwLjctMSwwLjdjLTAuNiwwLTEtMC4zLTEtMC43TDExMC4xLDI3LjdMMTEwLjEsMjcuN3oiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzM3MUI3IiBkPSJNMTI2LjgsMzQuM2MwLDEuMi0xLDIuMi0yLjIsMi4ycy0yLjItMS0yLjItMi4yczEtMi4yLDIuMi0yLjJTMTI2LjgsMzMuMSwxMjYuOCwzNC4zeiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIGQ9Ik0xMzcuNiwzNC4zYzAsMS4yLTEsMi4yLTIuMiwyLjJjLTEuMiwwLTIuMi0xLTIuMi0yLjJzMS0yLjIsMi4yLTIuMgoJCQkJQzEzNi42LDMyLjEsMTM3LjYsMzMuMSwxMzcuNiwzNC4zeiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIGQ9Ik0xMjYuOCwyNC40djkuOSIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIGQ9Ik0xMzcuNywyNC40djkuOSIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIGQ9Ik0xMjYuOCwyMy41aDEwLjh2Mi43aC0xMC44QzEyNi44LDI2LjIsMTI2LjgsMjMuNSwxMjYuOCwyMy41eiIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSIjMzM3MUI3IiBkPSJNMTcwLjgsMjMuMUwxNzAuOCwyMy4xYy0wLjMsMC0wLjUsMC0wLjgsMGMtMi4xLDAtNCwxLTUuMywyLjVsLTAuMSwwbC0wLjEtMC4xbC0xLTEuMmwtMC4zLDMuNGwzLjQsMC4zCgkJCQlsLTEuMS0xLjNsLTAuMS0wLjFsMC4xLTAuMWMxLjEtMS41LDMtMi4zLDUtMi4xbDAsMGMzLjIsMC4zLDUuNSwzLjEsNS4yLDYuM2MtMC4zLDMtMy4xLDUuMy02LjEsNS4xYy0zLjEtMC4yLTUuNC0yLjktNS4zLTYKCQkJCWwtMS4zLTAuMWMtMC4yLDMuOCwyLjYsNy4xLDYuMyw3LjRjMy45LDAuMyw3LjMtMi42LDcuNi02LjVDMTc3LjIsMjYuOCwxNzQuNCwyMy41LDE3MC44LDIzLjF6Ii8+CgkJCTxwYXRoIGZpbGw9IiMzMzcxQjciIGQ9Ik0xNzAuMywyNy40YzAtMC4zLTAuMy0wLjYtMC42LTAuNnMtMC42LDAuMy0wLjYsMC42djMuMmMwLDAuMiwwLjEsMC4zLDAuMiwwLjRjMC4xLDAuMSwwLjMsMC4yLDAuNCwwLjIKCQkJCWgyLjRjMC40LDAsMC42LTAuMywwLjYtMC42YzAtMC40LTAuMy0wLjYtMC42LTAuNmgtMS42aC0wLjJ2LTAuMkwxNzAuMywyNy40TDE3MC4zLDI3LjR6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgZD0iTTE4Ni4yLDIzLjRoNy43YzEuNSwwLDIuNywxLjIsMi43LDIuN3Y3LjdjMCwxLjUtMS4yLDIuNy0yLjcsMi43aC03LjcKCQkJCWMtMS41LDAtMi43LTEuMi0yLjctMi43di03LjdDMTgzLjQsMjQuNiwxODQuNywyMy40LDE4Ni4yLDIzLjR6Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiMzMzcxQjciIGN4PSIxODYiIGN5PSIyOC45IiByeD0iMC43IiByeT0iMC43Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiMzMzcxQjciIGN4PSIxOTQiIGN5PSIyNi43IiByeD0iMC43IiByeT0iMC43Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMTg2LDMzLjNsMC40LTAuM2MwLjQtMC4zLDEtMC4zLDEuNS0wLjFsMSwwLjQKCQkJCWMwLjUsMC4yLDEsMC4yLDEuNS0wLjFsMC44LTAuNWMwLjQtMC4zLDEtMC4zLDEuNS0wLjFsMS44LDAuOCIvPgoJCTwvZz4KCTwvZz4KCTxwYXRoIGZpbGw9IiMzMzcxQjciIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLXdpZHRoPSIwLjI1IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0xNTYsMjQuM2MtMC4yLTAuMS0wLjQtMC4xLTAuNSwwCgkJYzAsMC0wLjIsMC4xLTAuOSwwLjJjLTAuNywwLTIuNC0wLjEtMy44LTAuNmMtMC44LTAuMy0xLjctMC41LTIuNS0wLjVjLTAuMiwwLTAuNCwwLTAuNSwwYy0xLjMsMC0yLjUsMC4zLTMuNiwxCgkJYy0wLjIsMC4xLTAuMiwwLjItMC4yLDAuNHYxMS42YzAsMC4zLDAuMSwwLjUsMC4zLDAuNWMwLjYsMCwwLjUtMC40LDAuNS0wLjZ2LTUuN2MwLjctMC4zLDMuMi0xLjEsNS44LTAuMQoJCWMxLjYsMC42LDMuNSwwLjcsNC4zLDAuN2MwLjgsMCwxLjMtMC4zLDEuMy0wLjNjMC4yLTAuMSwwLjMtMC4yLDAuMy0wLjR2LTUuN0MxNTYuMiwyNC42LDE1Ni4xLDI0LjQsMTU2LDI0LjN6IE0xNTUuNiwzMC4yCgkJYy0wLjEsMC0wLjcsMC4xLTEsMC4xYy0wLjcsMC0yLjQtMC4xLTMuOC0wLjZjLTIuNS0xLTUtMC41LTYuMi0wLjF2LTQuOWMwLjktMC41LDIuMi0wLjcsMy4yLTAuN2MwLjEsMCwwLjMsMCwwLjQsMAoJCWMwLjcsMCwxLjUsMC4yLDIuMiwwLjRjMS42LDAuNiwzLjUsMC43LDQuMywwLjdjMC4yLDAsMC44LDAsMS0wLjFWMzAuMnoiLz4KCTxnPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgZD0iTTQ4LjEsMjMuNWgzLjdjMi41LDAsNC41LDIsNC41LDQuNWMwLDAuNS0wLjQsMC45LTAuOSwwLjlINDQuNWMtMC41LDAtMC45LTAuNC0wLjktMC45CgkJCUM0My42LDI1LjUsNDUuNiwyMy41LDQ4LjEsMjMuNXoiLz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTQzLjUsMjguOGMtMC4yLDAuMS0wLjUsMS4yLDAsMS41YzEuNCwxLDguNSwwLjgsMTEuMywwLjYKCQkJYzAuOC0wLjEsMS42LTAuNCwxLjctMS4yYzAtMC4zLTAuMS0wLjYtMC42LTAuOSIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSwzMC42TDQzLjMsMzFjLTAuMiwwLjUsMC4yLDEsMC43LDAuOWMwLjMtMC4xLDAuNSwwLDAuNywwLjMKCQkJbDAuMSwwLjJjMC4zLDAuNSwxLDAuNiwxLjUsMC4ybDAsMGMwLjMtMC4yLDAuNy0wLjMsMS0wLjJsMC44LDAuM2MwLjQsMC4yLDAuOCwwLjEsMS4yLDBsMC41LTAuMmMwLjQtMC4yLDAuOS0wLjIsMS4zLDBsMC41LDAuMgoJCQljMC40LDAuMiwwLjgsMC4yLDEuMiwwbDAuMi0wLjFjMC4zLTAuMiwwLjgtMC4yLDEuMSwwLjFsMC4yLDAuMmMwLjMsMC4zLDAuOCwwLjIsMS0wLjJsMC4xLTAuMmMwLjEtMC4yLDAtMC4zLDAuMi0wLjMKCQkJYzAuNSwwLDEuMi0wLjMsMS4xLTAuN2wtMC40LTEuMSIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSwzMi4yYy0wLjEsMC4yLTAuMywwLjgsMCwxLjFjMC4zLDAuNCwzLDEuMSw2LjQsMS4xCgkJCWMyLjIsMCw0LjYtMC4zLDYtMC42YzAuNS0wLjEsMC45LTAuNSwwLjgtMC45YzAtMC4yLTAuMi0wLjUtMC40LTAuNyIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSwzMy4zYzAsMC41LDAuNiwyLjMsMS4zLDIuN2MxLjgsMC44LDUuNywwLjcsOC4xLDAuNQoJCQljMS4zLTAuMSwyLjUtMC43LDMuMi0xLjhjMC4zLTAuNSwwLjUtMSwwLjUtMS40Ii8+CgkJPGVsbGlwc2UgZmlsbD0iIzMzNzFCNyIgY3g9IjUxLjYiIGN5PSIyNi41IiByeD0iMC4zIiByeT0iMC40Ii8+CgkJPGVsbGlwc2UgZmlsbD0iIzMzNzFCNyIgY3g9IjUzIiBjeT0iMjUiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjMzM3MUI3IiBjeD0iNTMiIGN5PSIyNy4yIiByeD0iMC4zIiByeT0iMC40Ii8+CgkJPGVsbGlwc2UgZmlsbD0iIzMzNzFCNyIgY3g9IjU0LjMiIGN5PSIyNi41IiByeD0iMC4zIiByeT0iMC40Ii8+CgkJPGVsbGlwc2UgZmlsbD0iIzMzNzFCNyIgY3g9IjUwLjkiIGN5PSIyNSIgcng9IjAuMyIgcnk9IjAuNCIvPgoJPC9nPgoJPGc+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzM3MUI3IiBkPSJNMjQuMiwzMXYtNy42YzAuMSwwLjEsMC44LDAuOSwyLjgsMy4xYzIuNS0xLjYsNS42LTAuNyw2LjksMGwyLjQtMy4xdjcuMQoJCQljMCwxLjItMC4xLDIuNS0wLjksMy40Yy0xLDEuMi0yLjcsMi41LTUuMywyLjVjLTIuOSwwLTQuNS0xLjUtNS4zLTIuOUMyNC4yLDMyLjksMjQuMiwzMiwyNC4yLDMxeiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMjEuMiwzMGw1LjQsMS4yIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzM3MUI3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0yMS4yLDM0LjFsNS40LTEuMiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMzguOCwzMGwtNS40LDEuMiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMzguOCwzNC4xbC01LjQtMS4yIi8+CgkJPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiMzMzcxQjciIGQ9Ik0yOS41LDMyLjRMMjksMzEuN2MtMC4yLTAuMywwLTAuNiwwLjMtMC42aDEuNAoJCQljMC4zLDAsMC41LDAuNCwwLjMsMC42bC0wLjcsMWwwLDBjLTAuNywxLjItMi42LDEuMS0zLjEtMC4zbC0wLjEtMC4yYy0wLjEtMC4yLDAtMC40LDAuMi0wLjVzMC40LDAsMC41LDAuMmwwLjEsMC4yCgkJCUMyOC4zLDMyLjgsMjkuMSwzMi45LDI5LjUsMzIuNHoiLz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTMyLjQsMzIuMWwtMC4xLDAuMmMtMC40LDEtMS44LDEuMS0yLjMsMC4yIi8+CgkJPGVsbGlwc2UgZmlsbD0iIzMzNzFCNyIgY3g9IjI3LjYiIGN5PSIyOS43IiByeD0iMC43IiByeT0iMC43Ii8+CgkJPGVsbGlwc2UgZmlsbD0iIzMzNzFCNyIgY3g9IjMyLjQiIGN5PSIyOS43IiByeD0iMC43IiByeT0iMC43Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBmaWxsPSIjQzBDMEJGIiBzdHJva2U9IiNDMEMwQkYiIHN0cm9rZS13aWR0aD0iMC4xIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0xMi44LDQ5LjVjMC42LDAsMS4xLTAuNSwxLjEtMS4xCgkJCWMwLTAuNi0wLjUtMS4yLTEuMS0xLjJjLTAuNiwwLTEuMiwwLjUtMS4yLDEuMkMxMS42LDQ5LDEyLjIsNDkuNSwxMi44LDQ5LjV6IE0xMi44LDQ4YzAuMiwwLDAuNCwwLjIsMC40LDAuNAoJCQljMCwwLjItMC4yLDAuNC0wLjQsMC40Yy0wLjIsMC0wLjQtMC4yLTAuNC0wLjRDMTIuNCw0OC4xLDEyLjYsNDgsMTIuOCw0OHoiLz4KCQk8cGF0aCBmaWxsPSIjQzBDMEJGIiBzdHJva2U9IiNDMEMwQkYiIHN0cm9rZS13aWR0aD0iMC4xIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0xNC42LDUxLjJjLTAuMS0wLjEtMC4yLTAuMi0wLjMtMC4ySDUuNwoJCQljLTAuMSwwLTAuMiwwLjEtMC4zLDAuMmMtMC4xLDAuMS0wLjEsMC4yLDAsMC40YzAuNywyLDIuNSwzLjMsNC42LDMuM3MzLjktMS4zLDQuNi0zLjNDMTQuNyw1MS41LDE0LjcsNTEuMywxNC42LDUxLjJ6IE0xMCw1NC4xCgkJCWMtMS42LDAtMy0wLjktMy43LTIuMmg3LjNDMTMsNTMuMiwxMS42LDU0LjEsMTAsNTQuMXoiLz4KCQk8cGF0aCBmaWxsPSIjQzBDMEJGIiBzdHJva2U9IiNDMEMwQkYiIHN0cm9rZS13aWR0aD0iMC4xIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik03LjIsNDkuNWMwLjYsMCwxLjItMC41LDEuMi0xLjEKCQkJYzAtMC42LTAuNS0xLjItMS4yLTEuMmMtMC42LDAtMS4xLDAuNS0xLjEsMS4yQzYuMSw0OSw2LjYsNDkuNSw3LjIsNDkuNXogTTcuMiw0OGMwLjIsMCwwLjQsMC4yLDAuNCwwLjRjMCwwLjItMC4yLDAuNC0wLjQsMC40CgkJCWMtMC4yLDAtMC40LTAuMi0wLjQtMC40QzYuOCw0OC4xLDcsNDgsNy4yLDQ4eiIvPgoJCTxwYXRoIGZpbGw9IiNDMEMwQkYiIHN0cm9rZT0iI0MwQzBCRiIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTEwLDQzYy0zLjgsMC03LDMuMS03LDdjMCwzLjgsMy4xLDcsNyw3CgkJCXM3LTMuMSw3LTdDMTcsNDYuMiwxMy44LDQzLDEwLDQzeiBNMTAsNTYuMmMtMy40LDAtNi4yLTIuOC02LjItNi4yYzAtMy40LDIuOC02LjIsNi4yLTYuMnM2LjIsMi44LDYuMiw2LjIKCQkJQzE2LjIsNTMuNCwxMy40LDU2LjIsMTAsNTYuMnoiLz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNDMEMwQkYiIGQ9Ik02NC4xLDUzLjRsMi4zLDBjMC4yLDAsMC40LDAuMiwwLjQsMC40djIuMWMwLDAuMi0wLjIsMC40LTAuNCwwLjRoLTIuMwoJCQkJYy0wLjIsMC0wLjQtMC4yLTAuNC0wLjR2LTIuMUM2My43LDUzLjYsNjMuOCw1My40LDY0LjEsNTMuNHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBkPSJNNzMuNSw1My41aDIuNGMwLjIsMCwwLjQsMC4yLDAuNCwwLjR2MmMwLDAuMi0wLjIsMC40LTAuNCwwLjRoLTIuNAoJCQkJYy0wLjIsMC0wLjQtMC4yLTAuNC0wLjRsMC0yQzczLjEsNTMuNiw3My4zLDUzLjUsNzMuNSw1My41eiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNDMEMwQkYiIGQ9Ik02My43LDQ4LjRoMTIuNnY1SDYzLjdWNDguNHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBkPSJNNjUuNSw0My42aDguOWMxLDAsMS45LDAuOCwxLjksMS45djMuMUg2My43di0zLjFDNjMuNyw0NC41LDY0LjUsNDMuNiw2NS41LDQzLjZ6Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiNDMEMwQkYiIGN4PSI2Ni4yIiBjeT0iNTAuOSIgcng9IjAuOSIgcnk9IjEiLz4KCQkJPGVsbGlwc2UgZmlsbD0iI0MwQzBCRiIgY3g9IjczLjgiIGN5PSI1MC45IiByeD0iMC45IiByeT0iMSIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNDMEMwQkYiIGQ9Ik05Ni40LDUwYzAsMy42LTIuOSw2LjUtNi40LDYuNXMtNi40LTIuOS02LjQtNi41czIuOS02LjUsNi40LTYuNVM5Ni40LDQ2LjQsOTYuNCw1MHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBkPSJNOTYuMyw0OC42YzAsMCwwLDAuMSwwLDAuMWMtMC45LDAuMS0yLjksMC4xLTQuNi0xLjJjLTEuMS0wLjgtMi0xLjctMi42LTIuNQoJCQkJYy0wLjMtMC40LTAuNi0wLjgtMC43LTFjLTAuMS0wLjEtMC4xLTAuMi0wLjEtMC4yYzAuNS0wLjEsMS4yLTAuMiwyLTAuMmMxLjIsMCwyLjUsMC4zLDMuNSwxLjFjMSwwLjgsMS43LDEuOCwyLjEsMi44CgkJCQlDOTYuMSw0Ny45LDk2LjIsNDguMyw5Ni4zLDQ4LjZ6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgZD0iTTg0LDUyLjJjMCwwLDAtMC4xLDAtMC4xYzAuOS0wLjIsMi45LTAuNCw0LjcsMC42YzEuMSwwLjcsMS45LDEuNSwyLjQsMi4zCgkJCQljMC40LDAuNSwwLjYsMSwwLjcsMS4zYy0wLjQsMC4xLTEsMC4yLTEuNywwLjNjLTEsMC0yLjEtMC4xLTMuMi0wLjhzLTEuOS0xLjYtMi40LTIuNUM4NC4yLDUyLjgsODQuMSw1Mi41LDg0LDUyLjJ6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMTE2LjMsNDYuOGwtMS40LDJsLTAuOC0wLjhsLTAuNi0wLjdsMCwwLjlsLTAuMSw4LjJoLTYuOAoJCQkJbC0wLjEtOC4ybDAtMC45bC0wLjYsMC43bC0wLjgsMC44bC0xLjQtMmwyLjYtMi45YzAuMS0wLjEsMC4yLTAuMSwwLjMtMC4xaDEuM2wwLjQsMC43YzAuNywxLjMsMi42LDEuMywzLjMtMC4xbDAuMy0wLjZoMS4yCgkJCQljMC4xLDAsMC4yLDAsMC4zLDAuMWwwLjMtMC4zbC0wLjMsMC4zTDExNi4zLDQ2Ljh6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgZD0iTTExMC4xLDQ3LjdoMnYwLjljMCwwLjQtMC40LDAuNy0xLDAuN2MtMC42LDAtMS0wLjMtMS0wLjdMMTEwLjEsNDcuN0wxMTAuMSw0Ny43eiIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNDMEMwQkYiIGQ9Ik0xMjYuOCw1NC4zYzAsMS4yLTEsMi4yLTIuMiwyLjJzLTIuMi0xLTIuMi0yLjJzMS0yLjIsMi4yLTIuMlMxMjYuOCw1My4xLDEyNi44LDU0LjN6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgZD0iTTEzNy42LDU0LjNjMCwxLjItMSwyLjItMi4yLDIuMmMtMS4yLDAtMi4yLTEtMi4yLTIuMnMxLTIuMiwyLjItMi4yCgkJCQlDMTM2LjYsNTIuMSwxMzcuNiw1My4xLDEzNy42LDU0LjN6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgZD0iTTEyNi44LDQ0LjR2OS45Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgZD0iTTEzNy43LDQ0LjR2OS45Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgZD0iTTEyNi44LDQzLjVoMTAuOHYyLjdoLTEwLjhDMTI2LjgsNDYuMiwxMjYuOCw0My41LDEyNi44LDQzLjV6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9IiNDMEMwQkYiIGQ9Ik0xNzAuOCw0My4xTDE3MC44LDQzLjFjLTAuMywwLTAuNSwwLTAuOCwwYy0yLjEsMC00LDEtNS4zLDIuNWwtMC4xLDBsLTAuMS0wLjFsLTEtMS4ybC0wLjMsMy40bDMuNCwwLjMKCQkJCWwtMS4xLTEuM2wtMC4xLTAuMWwwLjEtMC4xYzEuMS0xLjUsMy0yLjMsNS0yLjFsMCwwYzMuMiwwLjMsNS41LDMuMSw1LjIsNi4zYy0wLjMsMy0zLjEsNS4zLTYuMSw1LjFjLTMuMS0wLjItNS40LTIuOS01LjMtNgoJCQkJbC0xLjMtMC4xYy0wLjIsMy44LDIuNiw3LjEsNi4zLDcuNGMzLjksMC4zLDcuMy0yLjYsNy42LTYuNUMxNzcuMiw0Ni44LDE3NC40LDQzLjUsMTcwLjgsNDMuMXoiLz4KCQkJPHBhdGggZmlsbD0iI0MwQzBCRiIgZD0iTTE3MC4zLDQ3LjRjMC0wLjMtMC4zLTAuNi0wLjYtMC42cy0wLjYsMC4zLTAuNiwwLjZ2My4yYzAsMC4yLDAuMSwwLjMsMC4yLDAuNGMwLjEsMC4xLDAuMywwLjIsMC40LDAuMgoJCQkJaDIuNGMwLjQsMCwwLjYtMC4zLDAuNi0wLjZjMC0wLjMtMC4zLTAuNi0wLjYtMC42aC0xLjZoLTAuMnYtMC4yTDE3MC4zLDQ3LjRMMTcwLjMsNDcuNHoiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBkPSJNMTg2LjIsNDMuNGg3LjdjMS41LDAsMi43LDEuMiwyLjcsMi43djcuN2MwLDEuNS0xLjIsMi43LTIuNywyLjdoLTcuNwoJCQkJYy0xLjUsMC0yLjctMS4yLTIuNy0yLjd2LTcuN0MxODMuNCw0NC43LDE4NC43LDQzLjQsMTg2LjIsNDMuNHoiLz4KCQkJPGVsbGlwc2UgZmlsbD0iI0MwQzBCRiIgY3g9IjE4NiIgY3k9IjQ4LjkiIHJ4PSIwLjciIHJ5PSIwLjciLz4KCQkJPGVsbGlwc2UgZmlsbD0iI0MwQzBCRiIgY3g9IjE5NCIgY3k9IjQ2LjciIHJ4PSIwLjciIHJ5PSIwLjciLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0xODYsNTMuM2wwLjQtMC4zYzAuNC0wLjMsMS0wLjMsMS41LTAuMWwxLDAuNAoJCQkJYzAuNSwwLjIsMSwwLjIsMS41LTAuMWwwLjgtMC41YzAuNC0wLjMsMS0wLjMsMS41LTAuMWwxLjgsMC44Ii8+CgkJPC9nPgoJPC9nPgoJPHBhdGggZmlsbD0iI0MwQzBCRiIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2Utd2lkdGg9IjAuMjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTE1Niw0NC4zYy0wLjItMC4xLTAuNC0wLjEtMC41LDAKCQljMCwwLTAuMiwwLjEtMC45LDAuMmMtMC43LDAtMi40LTAuMS0zLjgtMC42Yy0wLjgtMC4zLTEuNy0wLjUtMi41LTAuNWMtMC4yLDAtMC40LDAtMC41LDBjLTEuMywwLTIuNSwwLjMtMy42LDEKCQljLTAuMiwwLjEtMC4yLDAuMi0wLjIsMC40djExLjZjMCwwLjMsMC4xLDAuNSwwLjMsMC41YzAuNiwwLDAuNS0wLjQsMC41LTAuNnYtNS43YzAuNy0wLjMsMy4yLTEuMSw1LjgtMC4xCgkJYzEuNiwwLjYsMy41LDAuNyw0LjMsMC43YzAuOCwwLDEuMy0wLjMsMS4zLTAuM2MwLjItMC4xLDAuMy0wLjIsMC4zLTAuNHYtNS43QzE1Ni4yLDQ0LjYsMTU2LjEsNDQuNCwxNTYsNDQuM3ogTTE1NS42LDUwLjIKCQljLTAuMSwwLTAuNywwLjEtMSwwLjFjLTAuNywwLTIuNC0wLjEtMy44LTAuNmMtMi41LTEtNS0wLjUtNi4yLTAuMXYtNC45YzAuOS0wLjUsMi4yLTAuNywzLjItMC43YzAuMSwwLDAuMywwLDAuNCwwCgkJYzAuNywwLDEuNSwwLjIsMi4yLDAuNGMxLjYsMC42LDMuNSwwLjcsNC4zLDAuN2MwLjIsMCwwLjgsMCwxLTAuMVY1MC4yeiIvPgoJPGc+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBkPSJNNDguMSw0My41aDMuN2MyLjUsMCw0LjUsMiw0LjUsNC41YzAsMC41LTAuNCwwLjktMC45LDAuOUg0NC41Yy0wLjUsMC0wLjktMC40LTAuOS0wLjkKCQkJQzQzLjYsNDUuNSw0NS42LDQzLjUsNDguMSw0My41eiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSw0OC44Yy0wLjIsMC4xLTAuNSwxLjIsMCwxLjVjMS40LDEsOC41LDAuOCwxMS4zLDAuNgoJCQljMC44LTAuMSwxLjYtMC40LDEuNy0xLjJjMC0wLjMtMC4xLTAuNi0wLjYtMC45Ii8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik00My41LDUwLjZMNDMuMyw1MWMtMC4yLDAuNSwwLjIsMSwwLjcsMC45YzAuMy0wLjEsMC41LDAsMC43LDAuMwoJCQlsMC4xLDAuMmMwLjMsMC41LDEsMC42LDEuNSwwLjJsMCwwYzAuMy0wLjIsMC43LTAuMywxLTAuMmwwLjgsMC4zYzAuNCwwLjIsMC44LDAuMSwxLjIsMGwwLjUtMC4yYzAuNC0wLjIsMC45LTAuMiwxLjMsMGwwLjUsMC4yCgkJCWMwLjQsMC4yLDAuOCwwLjIsMS4yLDBsMC4yLTAuMWMwLjMtMC4yLDAuOC0wLjIsMS4xLDAuMWwwLjIsMC4yYzAuMywwLjMsMC44LDAuMiwxLTAuMmwwLjEtMC4yYzAuMS0wLjIsMC0wLjMsMC4yLTAuMwoJCQljMC41LDAsMS4yLTAuMywxLjEtMC43bC0wLjQtMS4xIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik00My41LDUyLjJjLTAuMSwwLjItMC4zLDAuOCwwLDEuMWMwLjMsMC40LDMsMS4xLDYuNCwxLjEKCQkJYzIuMiwwLDQuNi0wLjMsNi0wLjZjMC41LTAuMSwwLjktMC41LDAuOC0wLjljMC0wLjItMC4yLTAuNS0wLjQtMC43Ii8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik00My41LDUzLjNjMCwwLjUsMC42LDIuMywxLjMsMi43YzEuOCwwLjgsNS43LDAuNyw4LjEsMC41CgkJCWMxLjMtMC4xLDIuNS0wLjcsMy4yLTEuOGMwLjMtMC41LDAuNS0xLDAuNS0xLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjQzBDMEJGIiBjeD0iNTEuNiIgY3k9IjQ2LjUiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjQzBDMEJGIiBjeD0iNTMiIGN5PSI0NSIgcng9IjAuMyIgcnk9IjAuNCIvPgoJCTxlbGxpcHNlIGZpbGw9IiNDMEMwQkYiIGN4PSI1MyIgY3k9IjQ3LjIiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjQzBDMEJGIiBjeD0iNTQuMyIgY3k9IjQ2LjUiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjQzBDMEJGIiBjeD0iNTAuOSIgY3k9IjQ1IiByeD0iMC4zIiByeT0iMC40Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNDMEMwQkYiIGQ9Ik0yNC4yLDUxdi03LjZjMC4xLDAuMSwwLjgsMC45LDIuOCwzLjFjMi41LTEuNyw1LjYtMC43LDYuOSwwbDIuNC0zLjF2Ny4xCgkJCWMwLDEuMi0wLjEsMi41LTAuOSwzLjRjLTEsMS4yLTIuNywyLjUtNS4zLDIuNWMtMi45LDAtNC41LTEuNS01LjMtMi45QzI0LjIsNTIuOSwyNC4yLDUyLDI0LjIsNTF6Ii8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0yMS4yLDUwbDUuNCwxLjIiLz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNDMEMwQkYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTIxLjIsNTQuMWw1LjQtMS4yIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0zOC44LDUwbC01LjQsMS4yIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0zOC44LDU0LjFsLTUuNC0xLjIiLz4KCQk8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI0MwQzBCRiIgZD0iTTI5LjUsNTIuNEwyOSw1MS43Yy0wLjItMC4zLDAtMC42LDAuMy0wLjZoMS40CgkJCWMwLjMsMCwwLjUsMC40LDAuMywwLjZsLTAuNywxbDAsMGMtMC43LDEuMi0yLjYsMS4xLTMuMS0wLjNsLTAuMS0wLjJjLTAuMS0wLjIsMC0wLjQsMC4yLTAuNXMwLjQsMCwwLjUsMC4ybDAuMSwwLjIKCQkJQzI4LjMsNTIuOCwyOS4xLDUyLjksMjkuNSw1Mi40eiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMzIuNCw1Mi4xbC0wLjEsMC4yYy0wLjQsMS0xLjgsMS4xLTIuMywwLjIiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjQzBDMEJGIiBjeD0iMjcuNiIgY3k9IjQ5LjciIHJ4PSIwLjciIHJ5PSIwLjciLz4KCQk8ZWxsaXBzZSBmaWxsPSIjQzBDMEJGIiBjeD0iMzIuNCIgY3k9IjQ5LjciIHJ4PSIwLjciIHJ5PSIwLjciLz4KCTwvZz4KCTxnPgoJCTxwYXRoIGZpbGw9IiM2QUE5REQiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTE0LjYsNzEuMmMtMC4xLTAuMS0wLjItMC4yLTAuMy0wLjJINS43CgkJCWMtMC4xLDAtMC4yLDAuMS0wLjMsMC4yYy0wLjEsMC4xLTAuMSwwLjIsMCwwLjRjMC43LDIsMi41LDMuMyw0LjYsMy4zczMuOS0xLjMsNC42LTMuM0MxNC43LDcxLjUsMTQuNyw3MS4zLDE0LjYsNzEuMnogTTEwLDc0LjEKCQkJYy0xLjYsMC0zLTAuOS0zLjctMi4yaDcuM0MxMyw3My4yLDExLjYsNzQuMSwxMCw3NC4xeiIvPgoJCTxwYXRoIGZpbGw9IiM2QUE5REQiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTEyLjgsNjkuNWMwLjYsMCwxLjEtMC41LDEuMS0xLjEKCQkJYzAtMC42LTAuNS0xLjItMS4xLTEuMmMtMC42LDAtMS4yLDAuNS0xLjIsMS4yQzExLjYsNjksMTIuMiw2OS41LDEyLjgsNjkuNXogTTEyLjgsNjhjMC4yLDAsMC40LDAuMiwwLjQsMC40CgkJCWMwLDAuMi0wLjIsMC40LTAuNCwwLjRjLTAuMiwwLTAuNC0wLjItMC40LTAuNEMxMi40LDY4LjEsMTIuNiw2OCwxMi44LDY4eiIvPgoJCTxwYXRoIGZpbGw9IiM2QUE5REQiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTcuMiw2OS41YzAuNiwwLDEuMi0wLjUsMS4yLTEuMQoJCQljMC0wLjYtMC41LTEuMi0xLjItMS4yYy0wLjYsMC0xLjEsMC41LTEuMSwxLjJDNi4xLDY5LDYuNiw2OS41LDcuMiw2OS41eiBNNy4yLDY4YzAuMiwwLDAuNCwwLjIsMC40LDAuNGMwLDAuMi0wLjIsMC40LTAuNCwwLjQKCQkJYy0wLjIsMC0wLjQtMC4yLTAuNC0wLjRDNi44LDY4LjEsNyw2OCw3LjIsNjh6Ii8+CgkJPHBhdGggZmlsbD0iIzZBQTlERCIgc3Ryb2tlPSIjNkFBOUREIiBzdHJva2Utd2lkdGg9IjAuMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTAsNjNjLTMuOCwwLTcsMy4xLTcsN2MwLDMuOCwzLjEsNyw3LDcKCQkJczctMy4xLDctN0MxNyw2Ni4yLDEzLjgsNjMsMTAsNjN6IE0xMCw3Ni4yYy0zLjQsMC02LjItMi44LTYuMi02LjJjMC0zLjQsMi44LTYuMiw2LjItNi4yczYuMiwyLjgsNi4yLDYuMgoJCQlDMTYuMiw3My40LDEzLjQsNzYuMiwxMCw3Ni4yeiIvPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTY0LjEsNzMuNGwyLjMsMGMwLjIsMCwwLjQsMC4yLDAuNCwwLjR2Mi4xYzAsMC4yLTAuMiwwLjQtMC40LDAuNGgtMi4zCgkJCQljLTAuMiwwLTAuNC0wLjItMC40LTAuNHYtMi4xQzYzLjcsNzMuNiw2My44LDczLjQsNjQuMSw3My40eiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM2QUE5REQiIGQ9Ik03My41LDczLjVoMi40YzAuMiwwLDAuNCwwLjIsMC40LDAuNHYyLjFjMCwwLjItMC4yLDAuNC0wLjQsMC40aC0yLjQKCQkJCWMtMC4yLDAtMC40LTAuMi0wLjQtMC40bDAtMi4xQzczLjEsNzMuNiw3My4zLDczLjUsNzMuNSw3My41eiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM2QUE5REQiIGQ9Ik02My43LDY4LjRoMTIuNnY1SDYzLjdWNjguNHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBkPSJNNjUuNSw2My42aDguOWMxLDAsMS45LDAuOCwxLjksMS45djMuMUg2My43di0zLjFDNjMuNyw2NC41LDY0LjUsNjMuNiw2NS41LDYzLjZ6Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiM2QUE5REQiIGN4PSI2Ni4yIiBjeT0iNzAuOSIgcng9IjAuOSIgcnk9IjAuOSIvPgoJCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iNzMuOCIgY3k9IjcwLjkiIHJ4PSIwLjkiIHJ5PSIwLjkiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBkPSJNOTYuNCw3MGMwLDMuNi0yLjksNi41LTYuNCw2LjVzLTYuNC0yLjktNi40LTYuNXMyLjktNi41LDYuNC02LjVTOTYuNCw2Ni40LDk2LjQsNzB6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTk2LjMsNjguNmMwLDAsMCwwLjEsMCwwLjFjLTAuOSwwLjEtMi45LDAuMS00LjYtMS4yYy0xLjEtMC44LTItMS43LTIuNi0yLjUKCQkJCWMtMC4zLTAuNC0wLjYtMC44LTAuNy0xLjFjLTAuMS0wLjEtMC4xLTAuMi0wLjEtMC4yYzAuNS0wLjEsMS4yLTAuMiwyLTAuMmMxLjIsMCwyLjUsMC4zLDMuNSwxLjFjMSwwLjgsMS43LDEuOCwyLjEsMi44CgkJCQlDOTYuMSw2Ny45LDk2LjIsNjguMyw5Ni4zLDY4LjZ6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTg0LDcyLjJjMCwwLDAtMC4xLDAtMC4xYzAuOS0wLjIsMi45LTAuNCw0LjcsMC42YzEuMSwwLjcsMS45LDEuNSwyLjQsMi4zCgkJCQljMC40LDAuNSwwLjYsMSwwLjcsMS4zYy0wLjQsMC4xLTEsMC4yLTEuNywwLjNjLTEsMC0yLjEtMC4xLTMuMi0wLjhzLTEuOS0xLjYtMi40LTIuNUM4NC4yLDcyLjgsODQuMSw3Mi40LDg0LDcyLjJ6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMTE2LjMsNjYuOGwtMS40LDJsLTAuOC0wLjhsLTAuNi0wLjdsMCwwLjlsLTAuMSw4LjJoLTYuOAoJCQkJbC0wLjEtOC4ybDAtMC45bC0wLjYsMC43bC0wLjgsMC44bC0xLjQtMmwyLjYtMi45YzAuMS0wLjEsMC4yLTAuMSwwLjMtMC4xaDEuM2wwLjQsMC43YzAuNywxLjMsMi42LDEuMywzLjMtMC4xbDAuMy0wLjZoMS4yCgkJCQljMC4xLDAsMC4yLDAsMC4zLDAuMWwwLjMtMC4zbC0wLjMsMC4zTDExNi4zLDY2Ljh6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTExMC4xLDY3LjdoMnYwLjljMCwwLjQtMC40LDAuNy0xLDAuN2MtMC42LDAtMS0wLjMtMS0wLjdMMTEwLjEsNjcuN0wxMTAuMSw2Ny43eiIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM2QUE5REQiIGQ9Ik0xMjYuOCw3NC4zYzAsMS4yLTEsMi4yLTIuMiwyLjJzLTIuMi0xLTIuMi0yLjJzMS0yLjIsMi4yLTIuMlMxMjYuOCw3My4xLDEyNi44LDc0LjN6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTEzNy42LDc0LjNjMCwxLjItMSwyLjItMi4yLDIuMmMtMS4yLDAtMi4yLTEtMi4yLTIuMnMxLTIuMiwyLjItMi4yCgkJCQlDMTM2LjYsNzIuMSwxMzcuNiw3My4xLDEzNy42LDc0LjN6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTEyNi44LDY0LjR2OS45Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTEzNy43LDY0LjR2OS45Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTEyNi44LDYzLjVoMTAuOHYyLjdoLTEwLjhDMTI2LjgsNjYuMiwxMjYuOCw2My41LDEyNi44LDYzLjV6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9IiM2QUE5REQiIGQ9Ik0xNzAuOCw2My4xTDE3MC44LDYzLjFjLTAuMywwLTAuNSwwLTAuOCwwYy0yLjEsMC00LDEtNS4zLDIuNWwtMC4xLDBsLTAuMS0wLjFsLTEtMS4ybC0wLjMsMy40bDMuNCwwLjMKCQkJCWwtMS4xLTEuM2wtMC4xLTAuMWwwLjEtMC4xYzEuMS0xLjQsMy0yLjMsNS0yLjFsMCwwYzMuMiwwLjMsNS41LDMuMSw1LjIsNi4zYy0wLjMsMy0zLjEsNS4zLTYuMSw1LjFjLTMuMS0wLjItNS40LTIuOS01LjMtNgoJCQkJbC0xLjMtMC4xYy0wLjIsMy44LDIuNiw3LjEsNi4zLDcuNGMzLjksMC4zLDcuMy0yLjYsNy42LTYuNUMxNzcuMiw2Ni44LDE3NC40LDYzLjUsMTcwLjgsNjMuMXoiLz4KCQkJPHBhdGggZmlsbD0iIzZBQTlERCIgZD0iTTE3MC4zLDY3LjRjMC0wLjMtMC4zLTAuNi0wLjYtMC42cy0wLjYsMC4zLTAuNiwwLjZ2My4yYzAsMC4yLDAuMSwwLjMsMC4yLDAuNGMwLjEsMC4xLDAuMywwLjIsMC40LDAuMgoJCQkJaDIuNGMwLjQsMCwwLjYtMC4zLDAuNi0wLjZTMTcyLjQsNzAsMTcyLDcwaC0xLjZoLTAuMnYtMC4yTDE3MC4zLDY3LjRMMTcwLjMsNjcuNHoiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBkPSJNMTg2LjIsNjMuNGg3LjdjMS41LDAsMi43LDEuMiwyLjcsMi43djcuN2MwLDEuNS0xLjIsMi43LTIuNywyLjdoLTcuNwoJCQkJYy0xLjUsMC0yLjctMS4yLTIuNy0yLjd2LTcuN0MxODMuNCw2NC43LDE4NC43LDYzLjQsMTg2LjIsNjMuNHoiLz4KCQkJPGVsbGlwc2UgZmlsbD0iIzZBQTlERCIgY3g9IjE4NiIgY3k9IjY4LjkiIHJ4PSIwLjciIHJ5PSIwLjciLz4KCQkJPGVsbGlwc2UgZmlsbD0iIzZBQTlERCIgY3g9IjE5NCIgY3k9IjY2LjciIHJ4PSIwLjciIHJ5PSIwLjciLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0xODYsNzMuM2wwLjQtMC4zYzAuNC0wLjMsMS0wLjMsMS41LTAuMWwxLDAuNAoJCQkJYzAuNSwwLjIsMSwwLjIsMS41LTAuMWwwLjgtMC41YzAuNC0wLjMsMS0wLjMsMS41LTAuMWwxLjgsMC44Ii8+CgkJPC9nPgoJPC9nPgoJPHBhdGggZmlsbD0iIzZBQTlERCIgc3Ryb2tlPSIjNkFBOUREIiBzdHJva2Utd2lkdGg9IjAuMjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTE1Niw2NC4zYy0wLjItMC4xLTAuNC0wLjEtMC41LDAKCQljMCwwLTAuMiwwLjEtMC45LDAuMmMtMC43LDAtMi40LTAuMS0zLjgtMC42Yy0wLjgtMC4zLTEuNy0wLjUtMi41LTAuNWMtMC4yLDAtMC40LDAtMC41LDBjLTEuMywwLTIuNSwwLjMtMy42LDEKCQljLTAuMiwwLjEtMC4yLDAuMi0wLjIsMC40djExLjZjMCwwLjMsMC4xLDAuNSwwLjMsMC41YzAuNiwwLDAuNS0wLjQsMC41LTAuNnYtNS43YzAuNy0wLjMsMy4yLTEuMSw1LjgtMC4xCgkJYzEuNiwwLjYsMy41LDAuNyw0LjMsMC43YzAuOCwwLDEuMy0wLjMsMS4zLTAuM2MwLjItMC4xLDAuMy0wLjIsMC4zLTAuNHYtNS43QzE1Ni4yLDY0LjYsMTU2LjEsNjQuNCwxNTYsNjQuM3ogTTE1NS42LDcwLjIKCQljLTAuMSwwLTAuNywwLjEtMSwwLjFjLTAuNywwLTIuNC0wLjEtMy44LTAuNmMtMi41LTEtNS0wLjUtNi4yLTAuMXYtNC45YzAuOS0wLjUsMi4yLTAuNywzLjItMC43YzAuMSwwLDAuMywwLDAuNCwwCgkJYzAuNywwLDEuNSwwLjIsMi4yLDAuNGMxLjYsMC42LDMuNSwwLjcsNC4zLDAuN2MwLjIsMCwwLjgsMCwxLTAuMVY3MC4yeiIvPgoJPGc+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBkPSJNNDguMSw2My41aDMuN2MyLjUsMCw0LjUsMiw0LjUsNC41YzAsMC41LTAuNCwwLjktMC45LDAuOUg0NC41Yy0wLjUsMC0wLjktMC40LTAuOS0wLjkKCQkJQzQzLjYsNjUuNSw0NS42LDYzLjUsNDguMSw2My41eiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSw2OC44Yy0wLjIsMC4xLTAuNSwxLjIsMCwxLjVjMS40LDAuOSw4LjUsMC44LDExLjMsMC42CgkJCWMwLjgtMC4xLDEuNi0wLjQsMS43LTEuMmMwLTAuMy0wLjEtMC42LTAuNi0wLjkiLz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM2QUE5REQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTQzLjUsNzAuNkw0My4zLDcxYy0wLjIsMC41LDAuMiwxLDAuNywwLjljMC4zLTAuMSwwLjUsMC4xLDAuNywwLjMKCQkJbDAuMSwwLjJjMC4zLDAuNSwxLDAuNiwxLjUsMC4ybDAsMGMwLjMtMC4yLDAuNy0wLjMsMS0wLjJsMC44LDAuM2MwLjQsMC4yLDAuOCwwLjEsMS4yLDBsMC41LTAuMmMwLjQtMC4yLDAuOS0wLjIsMS4zLDBsMC41LDAuMgoJCQljMC40LDAuMiwwLjgsMC4yLDEuMi0wLjFsMC4yLTAuMWMwLjMtMC4yLDAuOC0wLjIsMS4xLDAuMWwwLjIsMC4yYzAuMywwLjMsMC44LDAuMiwxLTAuMmwwLjEtMC4yYzAuMS0wLjIsMC0wLjMsMC4yLTAuMwoJCQljMC41LDAsMS4yLTAuMywxLjEtMC43bC0wLjQtMS4xIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik00My41LDcyLjJjLTAuMSwwLjItMC4zLDAuOCwwLDEuMWMwLjMsMC40LDMsMS4xLDYuNCwxLjEKCQkJYzIuMiwwLDQuNi0wLjMsNi0wLjZjMC41LTAuMSwwLjktMC40LDAuOC0wLjljMC0wLjItMC4yLTAuNS0wLjQtMC43Ii8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik00My41LDczLjNjMCwwLjUsMC42LDIuMywxLjMsMi43YzEuOCwwLjgsNS43LDAuNyw4LjEsMC41CgkJCWMxLjMtMC4xLDIuNS0wLjcsMy4yLTEuOGMwLjMtMC41LDAuNS0xLDAuNS0xLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iNTEuNiIgY3k9IjY2LjUiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iNTMiIGN5PSI2NSIgcng9IjAuMyIgcnk9IjAuNCIvPgoJCTxlbGxpcHNlIGZpbGw9IiM2QUE5REQiIGN4PSI1MyIgY3k9IjY3LjIiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iNTQuMyIgY3k9IjY2LjUiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iNTAuOSIgY3k9IjY1IiByeD0iMC4zIiByeT0iMC40Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM2QUE5REQiIGQ9Ik0yNC4yLDcxdi03LjZjMC4xLDAuMSwwLjgsMC45LDIuOCwzLjFjMi41LTEuNyw1LjYtMC43LDYuOSwwbDIuNC0zLjF2Ny4xCgkJCWMwLDEuMi0wLjEsMi41LTAuOSwzLjRjLTEsMS4yLTIuNywyLjUtNS4zLDIuNWMtMi45LDAtNC41LTEuNS01LjMtMi45QzI0LjIsNzIuOSwyNC4yLDcyLDI0LjIsNzF6Ii8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0yMS4yLDcwLjFsNS40LDEuMiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMjEuMiw3NC4xbDUuNC0xLjIiLz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM2QUE5REQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTM4LjgsNzAuMWwtNS40LDEuMiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMzguOCw3NC4xbC01LjQtMS4yIi8+CgkJPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiM2QUE5REQiIGQ9Ik0yOS41LDcyLjRMMjksNzEuN2MtMC4yLTAuMywwLTAuNiwwLjMtMC42aDEuNAoJCQljMC4zLDAsMC41LDAuNCwwLjMsMC42bC0wLjcsMWwwLDBjLTAuNywxLjItMi42LDEuMS0zLjEtMC4zbC0wLjEtMC4yYy0wLjEtMC4yLDAtMC40LDAuMi0wLjVjMC4yLTAuMSwwLjQsMCwwLjUsMC4ybDAuMSwwLjIKCQkJQzI4LjMsNzIuOCwyOS4xLDcyLjksMjkuNSw3Mi40eiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMzIuNCw3Mi4xbC0wLjEsMC4yYy0wLjQsMS0xLjgsMS4xLTIuMywwLjIiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iMjcuNiIgY3k9IjY5LjciIHJ4PSIwLjciIHJ5PSIwLjciLz4KCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iMzIuNCIgY3k9IjY5LjciIHJ4PSIwLjciIHJ5PSIwLjciLz4KCTwvZz4KPC9nPgo8Zz4KCTxwYXRoIGZpbGw9IiM4Njg2ODYiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTEyLjgsOS41YzAuNiwwLDEuMS0wLjUsMS4xLTEuMgoJCWMwLTAuNi0wLjUtMS4xLTEuMS0xLjFjLTAuNiwwLTEuMiwwLjUtMS4yLDEuMVMxMi4yLDkuNSwxMi44LDkuNXogTTEyLjgsNy45YzAuMiwwLDAuNCwwLjIsMC40LDAuNGMwLDAuMi0wLjIsMC40LTAuNCwwLjQKCQljLTAuMiwwLTAuNC0wLjItMC40LTAuNEMxMi40LDguMSwxMi42LDcuOSwxMi44LDcuOXoiLz4KCTxwYXRoIGZpbGw9IiM4Njg2ODYiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTcuMiw5LjVjMC42LDAsMS4yLTAuNSwxLjItMS4yCgkJYzAtMC42LTAuNS0xLjEtMS4yLTEuMWMtMC42LDAtMS4xLDAuNS0xLjEsMS4xUzYuNiw5LjUsNy4yLDkuNXogTTcuMiw3LjljMC4yLDAsMC40LDAuMiwwLjQsMC40YzAsMC4yLTAuMiwwLjQtMC40LDAuNAoJCUM3LDguNyw2LjgsOC41LDYuOCw4LjNDNi44LDguMSw3LDcuOSw3LjIsNy45eiIvPgoJPHBhdGggZmlsbD0iIzg2ODY4NiIgc3Ryb2tlPSIjODY4Njg2IiBzdHJva2Utd2lkdGg9IjAuMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTQuNiwxMS4yYy0wLjEtMC4xLTAuMi0wLjItMC4zLTAuMkg1LjcKCQljLTAuMSwwLTAuMiwwLjEtMC4zLDAuMmMtMC4xLDAuMS0wLjEsMC4yLDAsMC40YzAuNywyLDIuNSwzLjMsNC42LDMuM3MzLjktMS4zLDQuNi0zLjNDMTQuNywxMS40LDE0LjcsMTEuMywxNC42LDExLjJ6IE0xMCwxNC4xCgkJYy0xLjYsMC0zLTAuOS0zLjctMi4yaDcuM0MxMywxMy4yLDExLjYsMTQuMSwxMCwxNC4xeiIvPgoJPHBhdGggZmlsbD0iIzg2ODY4NiIgc3Ryb2tlPSIjODY4Njg2IiBzdHJva2Utd2lkdGg9IjAuMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTAsM2MtMy44LDAtNywzLjEtNyw3czMuMSw3LDcsN3M3LTMuMSw3LTcKCQlTMTMuOCwzLDEwLDN6IE0xMCwxNi4yYy0zLjQsMC02LjItMi44LTYuMi02LjJTNi42LDMuOCwxMCwzLjhzNi4yLDIuOCw2LjIsNi4yUzEzLjQsMTYuMiwxMCwxNi4yeiIvPgo8L2c+CjxnIGlkPSJDYXJfMDAwMDAwMTg5MzUzOTUwODU0MTM0MTM3NTAwMDAwMDA4MjUyNzM4Nzc4NDI3NzU3MTVfIj4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIGQ9Ik02NC4xLDEzLjRsMi4zLDBjMC4yLDAsMC40LDAuMiwwLjQsMC40djIuMWMwLDAuMi0wLjIsMC40LTAuNCwwLjRoLTIuMwoJCQkJYy0wLjIsMC0wLjQtMC4yLTAuNC0wLjR2LTIuMUM2My43LDEzLjYsNjMuOCwxMy40LDY0LjEsMTMuNHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBkPSJNNzMuNSwxMy40aDIuNGMwLjIsMCwwLjQsMC4yLDAuNCwwLjR2Mi4xYzAsMC4yLTAuMiwwLjQtMC40LDAuNGgtMi40CgkJCQljLTAuMiwwLTAuNC0wLjItMC40LTAuNGwwLTIuMUM3My4xLDEzLjYsNzMuMywxMy40LDczLjUsMTMuNHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBkPSJNNjMuNyw4LjRoMTIuNnY1SDYzLjdWOC40eiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIGQ9Ik02NS41LDMuNmg4LjljMSwwLDEuOSwwLjgsMS45LDEuOXYzLjFINjMuN1Y1LjVDNjMuNyw0LjQsNjQuNSwzLjYsNjUuNSwzLjZ6Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiM4Njg2ODYiIGN4PSI2Ni4yIiBjeT0iMTAuOSIgcng9IjAuOSIgcnk9IjAuOSIvPgoJCQk8ZWxsaXBzZSBmaWxsPSIjODY4Njg2IiBjeD0iNzMuOCIgY3k9IjEwLjkiIHJ4PSIwLjkiIHJ5PSIwLjkiLz4KCQk8L2c+Cgk8L2c+CjwvZz4KPGcgaWQ9IkFjdGl2aXRpZXMiPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgZD0iTTk2LjQsMTBjMCwzLjYtMi45LDYuNS02LjQsNi41cy02LjQtMi45LTYuNC02LjVzMi45LTYuNSw2LjQtNi41Uzk2LjQsNi40LDk2LjQsMTB6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgZD0iTTk2LjMsOC42YzAsMCwwLDAuMSwwLDAuMWMtMC45LDAuMS0yLjksMC4xLTQuNi0xLjJjLTEuMS0wLjgtMi0xLjctMi42LTIuNQoJCQkJYy0wLjMtMC40LTAuNi0wLjgtMC43LTEuMWMtMC4xLTAuMS0wLjEtMC4yLTAuMS0wLjJjMC41LTAuMSwxLjItMC4yLDItMC4yYzEuMiwwLDIuNSwwLjMsMy41LDEuMWMxLDAuOCwxLjcsMS44LDIuMSwyLjgKCQkJCUM5Ni4xLDcuOSw5Ni4yLDguMyw5Ni4zLDguNnoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBkPSJNODQsMTIuMWMwLDAsMC0wLjEsMC0wLjFjMC45LTAuMiwyLjktMC40LDQuNywwLjZjMS4xLDAuNiwxLjksMS41LDIuNCwyLjMKCQkJCWMwLjQsMC41LDAuNiwxLDAuNywxLjNjLTAuNCwwLjEtMSwwLjItMS43LDAuM2MtMSwwLTIuMS0wLjEtMy4yLTAuOGMtMS4xLTAuNi0xLjktMS42LTIuNC0yLjVDODQuMiwxMi44LDg0LjEsMTIuNCw4NCwxMi4xeiIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8ZyBpZD0iT2JqZWN0c18wMDAwMDA2NDMxMjM3MTczOTEzMDMxNTI1MDAwMDAxMDIyNTg4OTAzMjIyODYzMjk3NV8iPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMTE2LjMsNi44bC0xLjQsMkwxMTQuMSw4bC0wLjYtMC43bDAsMC45bC0wLjEsOC4yaC02LjhsLTAuMS04LjIKCQkJCWwwLTAuOUwxMDUuOSw4bC0wLjgsMC44bC0xLjQtMmwyLjYtMi45YzAuMS0wLjEsMC4yLTAuMSwwLjMtMC4xaDEuM2wwLjQsMC43YzAuNywxLjMsMi42LDEuMywzLjMtMC4xbDAuMy0wLjZoMS4yCgkJCQljMC4xLDAsMC4yLDAsMC4zLDAuMWwwLjMtMC4zbC0wLjMsMC4zTDExNi4zLDYuOHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBkPSJNMTEwLjEsNy43aDJ2MC45YzAsMC40LTAuNCwwLjctMSwwLjdjLTAuNiwwLTEtMC4zLTEtMC43TDExMC4xLDcuN0wxMTAuMSw3Ljd6Ii8+CgkJPC9nPgoJPC9nPgo8L2c+CjxnIGlkPSJTeW1ib2xzXzAwMDAwMDk2NzQ2OTA3ODY5OTI5OTIxMTgwMDAwMDA2NDg0ODEyODMwMjgyNTgyNDE2XyI+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBkPSJNMTI2LjgsMTQuM2MwLDEuMi0xLDIuMi0yLjIsMi4ycy0yLjItMS0yLjItMi4yczEtMi4yLDIuMi0yLjJTMTI2LjgsMTMuMSwxMjYuOCwxNC4zeiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIGQ9Ik0xMzcuNiwxNC4zYzAsMS4yLTEsMi4yLTIuMiwyLjJjLTEuMiwwLTIuMi0xLTIuMi0yLjJzMS0yLjIsMi4yLTIuMgoJCQkJQzEzNi42LDEyLjEsMTM3LjYsMTMuMSwxMzcuNiwxNC4zeiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIGQ9Ik0xMjYuOCw0LjR2OS45Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgZD0iTTEzNy43LDQuNHY5LjkiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBkPSJNMTI2LjgsMy41aDEwLjh2Mi43aC0xMC44QzEyNi44LDYuMiwxMjYuOCwzLjUsMTI2LjgsMy41eiIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8ZyBpZD0iUmVjZW50cyI+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0iIzg2ODY4NiIgZD0iTTE3MC44LDMuMUwxNzAuOCwzLjFjLTAuMywwLTAuNSwwLTAuOCwwYy0yLjEsMC00LDEtNS4zLDIuNWwtMC4xLDBsLTAuMS0wLjFsLTEtMS4ybC0wLjMsMy40bDMuNCwwLjMKCQkJCWwtMS4xLTEuM2wtMC4xLTAuMWwwLjEtMC4xYzEuMS0xLjQsMy0yLjMsNS0yLjFsMCwwYzMuMiwwLjMsNS41LDMuMSw1LjIsNi4zYy0wLjMsMy0zLjEsNS4zLTYuMSw1LjFjLTMuMS0wLjItNS40LTIuOS01LjMtNgoJCQkJTDE2Myw5LjVjLTAuMiwzLjgsMi42LDcuMSw2LjMsNy40YzMuOSwwLjQsNy4zLTIuNiw3LjYtNi41QzE3Ny4yLDYuOCwxNzQuNCwzLjUsMTcwLjgsMy4xeiIvPgoJCQk8cGF0aCBmaWxsPSIjODY4Njg2IiBkPSJNMTcwLjMsNy40YzAtMC4zLTAuMy0wLjYtMC42LTAuNlMxNjksNy4xLDE2OSw3LjR2My4yYzAsMC4yLDAuMSwwLjMsMC4yLDAuNGMwLjEsMC4xLDAuMywwLjIsMC40LDAuMgoJCQkJaDIuNGMwLjQsMCwwLjYtMC4zLDAuNi0wLjZzLTAuMy0wLjYtMC42LTAuNmgtMS42aC0wLjJWOS44TDE3MC4zLDcuNEwxNzAuMyw3LjR6Ii8+CgkJPC9nPgoJPC9nPgo8L2c+CjxnIGlkPSJDdXN0b21fMDAwMDAxODEwODcyMjk0MzQzMDIzMzY3ODAwMDAwMDUxNTIyNzc5NDU5NDA2NzQ0ODhfIj4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIGQ9Ik0xODYuMiwzLjRoNy43YzEuNSwwLDIuNywxLjIsMi43LDIuN3Y3LjdjMCwxLjUtMS4yLDIuNy0yLjcsMi43aC03LjcKCQkJCWMtMS41LDAtMi43LTEuMi0yLjctMi43VjYuMUMxODMuNCw0LjYsMTg0LjcsMy40LDE4Ni4yLDMuNHoiLz4KCQkJPGVsbGlwc2UgZmlsbD0iIzg2ODY4NiIgY3g9IjE4NiIgY3k9IjguOSIgcng9IjAuNyIgcnk9IjAuNyIvPgoJCQk8ZWxsaXBzZSBmaWxsPSIjODY4Njg2IiBjeD0iMTk0IiBjeT0iNi43IiByeD0iMC43IiByeT0iMC43Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMTg2LDEzLjNsMC40LTAuM2MwLjQtMC4zLDEtMC4zLDEuNS0wLjFsMSwwLjQKCQkJCWMwLjUsMC4yLDEsMC4yLDEuNS0wLjFsMC44LTAuNWMwLjQtMC4zLDEtMC4zLDEuNS0wLjFsMS44LDAuOCIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8cGF0aCBmaWxsPSIjODY4Njg2IiBzdHJva2U9IiM4Njg2ODYiIHN0cm9rZS13aWR0aD0iMC4yNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTU2LDQuM2MtMC4yLTAuMS0wLjQtMC4xLTAuNSwwCgljMCwwLTAuMiwwLjEtMC45LDAuMWMtMC43LDAtMi40LTAuMS0zLjgtMC42Yy0wLjgtMC4zLTEuNy0wLjUtMi41LTAuNWMtMC4yLDAtMC40LDAtMC41LDBjLTEuMywwLTIuNSwwLjMtMy42LDEKCWMtMC4yLDAuMS0wLjIsMC4yLTAuMiwwLjR2MTEuNmMwLDAuMywwLjEsMC41LDAuMywwLjVjMC42LDAsMC41LTAuNCwwLjUtMC42di01LjdjMC43LTAuMywzLjItMS4xLDUuOC0wLjFjMS42LDAuNiwzLjUsMC43LDQuMywwLjcKCWMwLjgsMCwxLjMtMC4zLDEuMy0wLjNjMC4yLTAuMSwwLjMtMC4yLDAuMy0wLjRWNC43QzE1Ni4yLDQuNSwxNTYuMSw0LjQsMTU2LDQuM3ogTTE1NS42LDEwLjJjLTAuMSwwLTAuNywwLjEtMSwwLjEKCWMtMC43LDAtMi40LTAuMS0zLjgtMC42Yy0yLjUtMS01LTAuNS02LjItMC4xVjQuN2MwLjktMC41LDIuMi0wLjcsMy4yLTAuN2MwLjEsMCwwLjMsMCwwLjQsMGMwLjcsMCwxLjUsMC4yLDIuMiwwLjQKCWMxLjYsMC42LDMuNSwwLjcsNC4zLDAuN2MwLjIsMCwwLjgsMCwxLTAuMVYxMC4yeiIvPgo8ZyBpZD0iRm9vZCI+Cgk8ZyBpZD0iTGF5ZXJfMTIiPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIGQ9Ik00OC4xLDMuNWgzLjdjMi41LDAsNC41LDIsNC41LDQuNWMwLDAuNS0wLjQsMC45LTAuOSwwLjlINDQuNWMtMC41LDAtMC45LTAuNC0wLjktMC45CgkJCQlDNDMuNiw1LjUsNDUuNiwzLjUsNDguMSwzLjV6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSw4LjdjLTAuMiwwLjEtMC41LDEuMiwwLDEuNWMxLjQsMC45LDguNSwwLjgsMTEuMywwLjYKCQkJCWMwLjgtMC4xLDEuNi0wLjQsMS43LTEuMmMwLTAuMy0wLjEtMC42LTAuNi0wLjkiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik00My41LDEwLjZMNDMuMywxMWMtMC4yLDAuNSwwLjIsMSwwLjcsMC45CgkJCQljMC4zLTAuMSwwLjUsMC4xLDAuNywwLjNsMC4xLDAuMmMwLjMsMC41LDEsMC42LDEuNSwwLjJsMCwwYzAuMy0wLjIsMC43LTAuMywxLTAuMmwwLjgsMC4zYzAuNCwwLjEsMC44LDAuMSwxLjIsMGwwLjUtMC4yCgkJCQljMC40LTAuMiwwLjktMC4yLDEuMywwbDAuNSwwLjJjMC40LDAuMiwwLjgsMC4xLDEuMi0wLjFsMC4yLTAuMWMwLjMtMC4yLDAuOC0wLjEsMS4xLDAuMWwwLjIsMC4yYzAuMywwLjMsMC44LDAuMiwxLTAuMmwwLjEtMC4yCgkJCQljMC4xLTAuMiwwLTAuMywwLjItMC40YzAuNSwwLDEuMi0wLjMsMS4xLTAuN2wtMC40LTEuMSIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTQzLjUsMTIuMWMtMC4xLDAuMi0wLjMsMC44LDAsMS4xYzAuMywwLjQsMywxLjEsNi40LDEuMQoJCQkJYzIuMiwwLDQuNi0wLjMsNi0wLjZjMC41LTAuMSwwLjktMC40LDAuOC0wLjljMC0wLjItMC4yLTAuNS0wLjQtMC43Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSwxMy4zYzAsMC41LDAuNiwyLjQsMS4zLDIuNmMxLjgsMC44LDUuNywwLjcsOC4xLDAuNQoJCQkJYzEuMy0wLjEsMi41LTAuNywzLjItMS44YzAuMy0wLjUsMC41LTEsMC41LTEuNCIvPgoJCQk8ZWxsaXBzZSBmaWxsPSIjODY4Njg2IiBjeD0iNTEuNiIgY3k9IjYuNSIgcng9IjAuMyIgcnk9IjAuNCIvPgoJCQk8ZWxsaXBzZSBmaWxsPSIjODY4Njg2IiBjeD0iNTMiIGN5PSI0LjkiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQkJPGVsbGlwc2UgZmlsbD0iIzg2ODY4NiIgY3g9IjUzIiBjeT0iNy4yIiByeD0iMC4zIiByeT0iMC40Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiM4Njg2ODYiIGN4PSI1NC4zIiBjeT0iNi41IiByeD0iMC4zIiByeT0iMC40Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiM4Njg2ODYiIGN4PSI1MC45IiBjeT0iNC45IiByeD0iMC4zIiByeT0iMC40Ii8+CgkJPC9nPgoJPC9nPgo8L2c+CjxnIGlkPSJBbmltYWxzIj4KCTxnPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgZD0iTTI0LjIsMTFWMy41YzAuMSwwLjEsMC44LDAuOSwyLjgsMy4xYzIuNS0xLjcsNS42LTAuNyw2LjksMGwyLjQtMy4xdjcuMQoJCQljMCwxLjItMC4xLDIuNS0wLjksMy40Yy0xLDEuMi0yLjcsMi41LTUuMywyLjVjLTIuOSwwLTQuNS0xLjUtNS4zLTIuOUMyNC4yLDEyLjksMjQuMiwxMS45LDI0LjIsMTF6Ii8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0yMS4yLDEwbDUuNCwxLjIiLz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTIxLjIsMTQuMWw1LjQtMS4yIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0zOC44LDEwbC01LjQsMS4yIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0zOC44LDE0LjFsLTUuNC0xLjIiLz4KCQk8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzg2ODY4NiIgZD0iTTI5LjUsMTIuNEwyOSwxMS43Yy0wLjItMC4zLDAtMC42LDAuMy0wLjZoMS40CgkJCWMwLjMsMCwwLjUsMC40LDAuMywwLjZsLTAuNywxbDAsMGMtMC43LDEuMi0yLjYsMS4xLTMuMS0wLjNsLTAuMS0wLjJjLTAuMS0wLjIsMC0wLjQsMC4yLTAuNXMwLjQsMCwwLjUsMC4ybDAuMSwwLjIKCQkJQzI4LjMsMTIuNywyOS4xLDEyLjksMjkuNSwxMi40eiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMzIuNCwxMi4xbC0wLjEsMC4yYy0wLjQsMS0xLjgsMS4xLTIuMywwLjIiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjODY4Njg2IiBjeD0iMjcuNiIgY3k9IjkuNyIgcng9IjAuNyIgcnk9IjAuNyIvPgoJCTxlbGxpcHNlIGZpbGw9IiM4Njg2ODYiIGN4PSIzMi40IiBjeT0iOS43IiByeD0iMC43IiByeT0iMC43Ii8+Cgk8L2c+CjwvZz4KPC9zdmc+";function vT(e){var a,i=e.isActiveCategory,f=e.category,c=e.allowNavigation,d=e.categoryConfig,m=e.onClick;return g.createElement(Vf,{tabIndex:c?0:-1,className:pe(MT.catBtn,tr.categoryBtn,"epr-icn-"+f,(a={},a[he.active]=i,a)),onClick:m,"aria-label":p3(d),"aria-selected":i,role:"tab","aria-controls":"epr-category-nav-id"})}var Qp={backgroundPositionY:"calc(var(--epr-category-navigation-button-size) * 3)"},xT={backgroundPositionY:"calc(var(--epr-category-navigation-button-size) * 2)"},Gp={":not(.epr-search-active)":{catBtn:{":hover":Qp,"&.epr-active":Qp}}},MT=Ae.create(Re({catBtn:{".":"epr-cat-btn",display:"inline-block",transition:"opacity 0.2s ease-in-out",position:"relative",height:"var(--epr-category-navigation-button-size)",width:"var(--epr-category-navigation-button-size)",backgroundSize:"calc(var(--epr-category-navigation-button-size) * 10)",outline:"none",backgroundPosition:"0 0",backgroundImage:"url("+wT+")",":focus:before":{content:"",position:"absolute",top:"-2px",left:"-2px",right:"-2px",bottom:"-2px",border:"2px solid var(--epr-category-icon-active-color)",borderRadius:"50%"},"&.epr-icn-suggested":{backgroundPositionX:"calc(var(--epr-category-navigation-button-size) * -8)"},"&.epr-icn-custom":{backgroundPositionX:"calc(var(--epr-category-navigation-button-size) * -9)"},"&.epr-icn-activities":{backgroundPositionX:"calc(var(--epr-category-navigation-button-size) * -4)"},"&.epr-icn-animals_nature":{backgroundPositionX:"calc(var(--epr-category-navigation-button-size) * -1)"},"&.epr-icn-flags":{backgroundPositionX:"calc(var(--epr-category-navigation-button-size) * -7)"},"&.epr-icn-food_drink":{backgroundPositionX:"calc(var(--epr-category-navigation-button-size) * -2)"},"&.epr-icn-objects":{backgroundPositionX:"calc(var(--epr-category-navigation-button-size) * -5)"},"&.epr-icn-smileys_people":{backgroundPositionX:"0px"},"&.epr-icn-symbols":{backgroundPositionX:"calc(var(--epr-category-navigation-button-size) * -6)"},"&.epr-icn-travel_places":{backgroundPositionX:"calc(var(--epr-category-navigation-button-size) * -3)"}}},xa("catBtn",xT),{".epr-dark-theme":Re({},Gp),".epr-auto-theme":Re({},Gp)}));function jT(){var e=g.useState(null),a=e[0],i=e[1],f=yT();pT(i);var c=Al(),d=C3(),m=f1(),y=bT();return g.createElement("div",{className:pe(LT.nav),role:"tablist","aria-label":"Category navigation",id:"epr-category-nav-id",ref:m},d.map(function(b){var x=e1(b),v=x===a;if(RE(b)&&y)return null;var M=!c&&!v;return g.createElement(vT,{key:x,category:x,isActiveCategory:v,allowNavigation:M,categoryConfig:b,onClick:function(){i(x),f(x)}})}))}var LT=Ae.create({nav:{".":"epr-category-nav",display:"flex",flexDirection:"row",justifyContent:"space-around",padding:"var(--epr-header-padding)"},".epr-search-active":{nav:{opacity:"0.3",cursor:"default",pointerEvents:"none"}},".epr-main:has(input:not(:placeholder-shown))":{nav:{opacity:"0.3",cursor:"default",pointerEvents:"none"}}}),pb="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjgwcHgiIHZpZXdCb3g9IjAgMCAyMCA4MCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjAgODAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsPSIjODY4Njg2IiBkPSJNNi45OCwxMy41OWMwLjEsMC4xLDAuMjQsMC4xNSwwLjM3LDAuMTVzMC4yNy0wLjA1LDAuMzctMC4xNWwyLjQyLTIuNDJsMi40MywyLjQzCgljMC4xLDAuMSwwLjI0LDAuMTUsMC4zNywwLjE1YzAuMTQsMCwwLjI3LTAuMDUsMC4zNy0wLjE1YzAuMjEtMC4yMSwwLjIxLTAuNTQsMC0wLjc1bC0yLjQzLTIuNDNMMTMuMzIsOAoJYzAuMjEtMC4yMSwwLjIxLTAuNTQsMC0wLjc1Yy0wLjIxLTAuMjEtMC41NC0wLjIxLTAuNzUsMGwtMi40MiwyLjQyTDcuNzQsNy4yN2MtMC4yMS0wLjIxLTAuNTQtMC4yMS0wLjc1LDAKCWMtMC4yMSwwLjIxLTAuMjEsMC41NCwwLDAuNzVsMi40MSwyLjQxbC0yLjQyLDIuNDJDNi43NywxMy4wNSw2Ljc3LDEzLjM5LDYuOTgsMTMuNTlMNi45OCwxMy41OXoiLz4KPHBhdGggZmlsbD0iIzg2ODY4NiIgZD0iTTEwLjE1LDE4LjQzYzQuNDEsMCw4LTMuNTksOC04YzAtNC40MS0zLjU5LTgtOC04Yy00LjQxLDAtOCwzLjU5LTgsOEMyLjE1LDE0Ljg0LDUuNzQsMTguNDMsMTAuMTUsMTguNDN6CgkgTTEwLjE1LDMuNDljMy44MywwLDYuOTQsMy4xMSw2Ljk0LDYuOTRjMCwzLjgzLTMuMTEsNi45NC02Ljk0LDYuOTRjLTMuODMsMC02Ljk0LTMuMTEtNi45NC02Ljk0QzMuMjEsNi42LDYuMzMsMy40OSwxMC4xNSwzLjQ5CglMMTAuMTUsMy40OXoiLz4KPHBhdGggZmlsbD0iIzMzNzFCNyIgZD0iTTYuOTgsMzMuNTljMC4xLDAuMSwwLjI0LDAuMTUsMC4zNywwLjE1czAuMjctMC4wNSwwLjM3LTAuMTVsMi40Mi0yLjQybDIuNDMsMi40MwoJYzAuMSwwLjEsMC4yNCwwLjE1LDAuMzcsMC4xNWMwLjE0LDAsMC4yNy0wLjA1LDAuMzctMC4xNWMwLjIxLTAuMjEsMC4yMS0wLjU0LDAtMC43NWwtMi40My0yLjQzTDEzLjMyLDI4CgljMC4yMS0wLjIxLDAuMjEtMC41NCwwLTAuNzVjLTAuMjEtMC4yMS0wLjU0LTAuMjEtMC43NSwwbC0yLjQyLDIuNDJsLTIuNDEtMi40MWMtMC4yMS0wLjIxLTAuNTQtMC4yMS0wLjc1LDAKCWMtMC4yMSwwLjIxLTAuMjEsMC41NCwwLDAuNzVsMi40MSwyLjQxbC0yLjQyLDIuNDJDNi43NywzMy4wNSw2Ljc3LDMzLjM5LDYuOTgsMzMuNTlMNi45OCwzMy41OXoiLz4KPHBhdGggZmlsbD0iIzMzNzFCNyIgZD0iTTEwLjE1LDM4LjQzYzQuNDEsMCw4LTMuNTksOC04YzAtNC40MS0zLjU5LTgtOC04Yy00LjQxLDAtOCwzLjU5LTgsOEMyLjE1LDM0Ljg0LDUuNzQsMzguNDMsMTAuMTUsMzguNDN6CgkgTTEwLjE1LDIzLjQ5YzMuODMsMCw2Ljk0LDMuMTEsNi45NCw2Ljk0YzAsMy44My0zLjExLDYuOTQtNi45NCw2Ljk0Yy0zLjgzLDAtNi45NC0zLjExLTYuOTQtNi45NAoJQzMuMjEsMjYuNiw2LjMzLDIzLjQ5LDEwLjE1LDIzLjQ5TDEwLjE1LDIzLjQ5eiIvPgo8cGF0aCBmaWxsPSIjQzBDMEJGIiBkPSJNNi45OCw1My41OWMwLjEsMC4xLDAuMjQsMC4xNSwwLjM3LDAuMTVzMC4yNy0wLjA1LDAuMzctMC4xNWwyLjQyLTIuNDJsMi40MywyLjQzCgljMC4xLDAuMSwwLjI0LDAuMTUsMC4zNywwLjE1YzAuMTQsMCwwLjI3LTAuMDUsMC4zNy0wLjE1YzAuMjEtMC4yMSwwLjIxLTAuNTQsMC0wLjc1bC0yLjQzLTIuNDNMMTMuMzIsNDgKCWMwLjIxLTAuMjEsMC4yMS0wLjU0LDAtMC43NWMtMC4yMS0wLjIxLTAuNTQtMC4yMS0wLjc1LDBsLTIuNDIsMi40MmwtMi40MS0yLjQxYy0wLjIxLTAuMjEtMC41NC0wLjIxLTAuNzUsMAoJYy0wLjIxLDAuMjEtMC4yMSwwLjU0LDAsMC43NWwyLjQxLDIuNDFsLTIuNDIsMi40MkM2Ljc3LDUzLjA1LDYuNzcsNTMuMzksNi45OCw1My41OUw2Ljk4LDUzLjU5eiIvPgo8cGF0aCBmaWxsPSIjQzBDMEJGIiBkPSJNMTAuMTUsNTguNDNjNC40MSwwLDgtMy41OSw4LThjMC00LjQxLTMuNTktOC04LThjLTQuNDEsMC04LDMuNTktOCw4QzIuMTUsNTQuODQsNS43NCw1OC40MywxMC4xNSw1OC40M3oKCSBNMTAuMTUsNDMuNDljMy44MywwLDYuOTQsMy4xMSw2Ljk0LDYuOTRjMCwzLjgzLTMuMTEsNi45NC02Ljk0LDYuOTRjLTMuODMsMC02Ljk0LTMuMTEtNi45NC02Ljk0CglDMy4yMSw0Ni42LDYuMzMsNDMuNDksMTAuMTUsNDMuNDlMMTAuMTUsNDMuNDl6Ii8+CjxwYXRoIGZpbGw9IiM2QUE5REQiIGQ9Ik02Ljk4LDczLjU5YzAuMSwwLjEsMC4yNCwwLjE1LDAuMzcsMC4xNXMwLjI3LTAuMDUsMC4zNy0wLjE1bDIuNDItMi40MmwyLjQzLDIuNDMKCWMwLjEsMC4xLDAuMjQsMC4xNSwwLjM3LDAuMTVjMC4xNCwwLDAuMjctMC4wNSwwLjM3LTAuMTVjMC4yMS0wLjIxLDAuMjEtMC41NCwwLTAuNzVsLTIuNDMtMi40M0wxMy4zMiw2OAoJYzAuMjEtMC4yMSwwLjIxLTAuNTQsMC0wLjc1Yy0wLjIxLTAuMjEtMC41NC0wLjIxLTAuNzUsMGwtMi40MiwyLjQybC0yLjQxLTIuNDFjLTAuMjEtMC4yMS0wLjU0LTAuMjEtMC43NSwwCgljLTAuMjEsMC4yMS0wLjIxLDAuNTQsMCwwLjc1bDIuNDEsMi40MWwtMi40MiwyLjQyQzYuNzcsNzMuMDUsNi43Nyw3My4zOSw2Ljk4LDczLjU5TDYuOTgsNzMuNTl6Ii8+CjxwYXRoIGZpbGw9IiM2QUE5REQiIGQ9Ik0xMC4xNSw3OC40M2M0LjQxLDAsOC0zLjU5LDgtOGMwLTQuNDEtMy41OS04LTgtOGMtNC40MSwwLTgsMy41OS04LDhDMi4xNSw3NC44NCw1Ljc0LDc4LjQzLDEwLjE1LDc4LjQzegoJIE0xMC4xNSw2My40OWMzLjgzLDAsNi45NCwzLjExLDYuOTQsNi45NGMwLDMuODMtMy4xMSw2Ljk0LTYuOTQsNi45NGMtMy44MywwLTYuOTQtMy4xMS02Ljk0LTYuOTQKCUMzLjIxLDY2LjYsNi4zMyw2My40OSwxMC4xNSw2My40OUwxMC4xNSw2My40OXoiLz4KPC9zdmc+";function ST(){var e=$3();return g.createElement(Vf,{className:pe($p.btnClearSearch,tr.visibleOnSearchOnly),onClick:e,"aria-label":"Clear",title:"Clear"},g.createElement("div",{className:pe($p.icnClearnSearch)}))}var CT={":hover":{"> .epr-icn-clear-search":{backgroundPositionY:"-60px"}}},$p=Ae.create(Re({btnClearSearch:{".":"epr-btn-clear-search",position:"absolute",right:"var(--epr-search-bar-inner-padding)",height:"30px",width:"30px",display:"flex",alignItems:"center",justifyContent:"center",top:"50%",transform:"translateY(-50%)",padding:"0",borderRadius:"50%",":hover":{background:"var(--epr-hover-bg-color)"},":focus":{background:"var(--epr-hover-bg-color)"}},icnClearnSearch:{".":"epr-icn-clear-search",backgroundColor:"transparent",backgroundRepeat:"no-repeat",backgroundSize:"20px",height:"20px",width:"20px",backgroundImage:"url("+pb+")",":hover":{backgroundPositionY:"-20px"},":focus":{backgroundPositionY:"-20px"}}},xa("icnClearnSearch",{backgroundPositionY:"-40px"}),xa("btnClearSearch",CT))),Od=mt(he.emojiPicker)+" "+mt(he.emojiList),yb=["button",mt(he.emoji)].join(""),kT=mt(he.category);function ET(e){var a=e.value;if(!a)return null;var i=TT(a);return g.createElement("style",null,`
    `+Od+" "+yb+` {
      display: none;
    }


    `+Od+" "+i+` {
      display: flex;
    }

    `+Od+" "+kT+":not(:has("+i+`)) {
      display: none;
    }
  `)}function TT(e){return[yb,'[data-full-name*="',T0(e),'"]'].join("")}var NT="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjQwcHgiIHZpZXdCb3g9IjAgMCAyMCA0MCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjAgNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzg2ODY4NiIgZD0iTTEyLDguODFjMCwyLjA4LTEuNjgsMy43Ni0zLjc2LDMuNzZjLTIuMDgsMC0zLjc2LTEuNjgtMy43Ni0zLjc2CgljMC0yLjA4LDEuNjgtMy43NiwzLjc2LTMuNzZDMTAuMzIsNS4wNSwxMiw2LjczLDEyLDguODF6IE0xMS4yMywxMi43MmMtMC44MywwLjY0LTEuODcsMS4wMS0yLjk5LDEuMDFjLTIuNzIsMC00LjkyLTIuMi00LjkyLTQuOTIKCWMwLTIuNzIsMi4yLTQuOTIsNC45Mi00LjkyYzIuNzIsMCw0LjkyLDIuMiw0LjkyLDQuOTJjMCwxLjEzLTAuMzgsMi4xNi0xLjAxLDIuOTlsMy45NCwzLjkzYzAuMjUsMC4yNSwwLjI1LDAuNjYsMCwwLjkyCgljLTAuMjUsMC4yNS0wLjY2LDAuMjUtMC45MiwwTDExLjIzLDEyLjcyeiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI0MwQzBCRiIgZD0iTTEyLDI4LjgxYzAsMi4wOC0xLjY4LDMuNzYtMy43NiwzLjc2Yy0yLjA4LDAtMy43Ni0xLjY4LTMuNzYtMy43NgoJYzAtMi4wOCwxLjY4LTMuNzYsMy43Ni0zLjc2QzEwLjMyLDI1LjA1LDEyLDI2LjczLDEyLDI4LjgxeiBNMTEuMjMsMzIuNzJjLTAuODMsMC42NC0xLjg3LDEuMDEtMi45OSwxLjAxCgljLTIuNzIsMC00LjkyLTIuMi00LjkyLTQuOTJjMC0yLjcyLDIuMi00LjkyLDQuOTItNC45MmMyLjcyLDAsNC45MiwyLjIsNC45Miw0LjkyYzAsMS4xMy0wLjM4LDIuMTYtMS4wMSwyLjk5bDMuOTQsMy45MwoJYzAuMjUsMC4yNSwwLjI1LDAuNjYsMCwwLjkyYy0wLjI1LDAuMjUtMC42NiwwLjI1LTAuOTIsMEwxMS4yMywzMi43MnoiLz4KPC9zdmc+";function IT(){return g.createElement("div",{className:pe(DT.icnSearch)})}var DT=Ae.create(Re({icnSearch:{".":"epr-icn-search",content:"",position:"absolute",top:"50%",left:"var(--epr-search-bar-inner-padding)",transform:"translateY(-50%)",width:"20px",height:"20px",backgroundRepeat:"no-repeat",backgroundPosition:"0 0",backgroundSize:"20px",backgroundImage:"url("+NT+")"}},xa("icnSearch",{backgroundPositionY:"-20px"})));function AT(){var e=E3(),a=s1();return e?null:g.createElement(mb,{className:pe(Fs.overlay)},g.createElement(zT,null),a?g.createElement(gb,null):null)}function zT(){var e=g.useState(0),a=e[0],i=e[1],f=rr(),c=Sa(),d=dk(),m=mk(),y=eE(),b=y.statusSearchResults,x=y.searchTerm,v=y.onChange,M=c==null?void 0:c.current,j=M==null?void 0:M.value;return g.createElement(Yl,{className:pe(Fs.searchContainer)},g.createElement(ET,{value:j}),g.createElement("input",{autoFocus:m,"aria-label":"Type to search for an emoji",onFocus:f,className:pe(Fs.search),type:"text","aria-controls":"epr-search-id",placeholder:d,onChange:function(N){i(a+1),setTimeout(function(){var C,E;v((C=N==null||(E=N.target)==null?void 0:E.value)!=null?C:j)})},ref:c}),x?g.createElement("div",{role:"status",className:pe("epr-status-search-results",Fs.visuallyHidden),"aria-live":"polite",id:"epr-search-id","aria-atomic":"true"},b):null,g.createElement(IT,null),g.createElement(ST,null))}var Fs=Ae.create(Re({overlay:{padding:"var(--epr-header-padding)",zIndex:"var(--epr-header-overlay-z-index)"},searchContainer:{".":"epr-search-container",flex:"1",display:"block",minWidth:"0"},visuallyHidden:{clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",width:"1px"},search:{outline:"none",transition:"all 0.2s ease-in-out",color:"var(--epr-search-input-text-color)",borderRadius:"var(--epr-search-input-border-radius)",padding:"var(--epr-search-input-padding)",height:"var(--epr-search-input-height)",backgroundColor:"var(--epr-search-input-bg-color)",border:"1px solid var(--epr-search-input-bg-color)",width:"100%",":focus":{backgroundColor:"var(--epr-search-input-bg-color-active)",border:"1px solid var(--epr-search-border-color)"},"::placeholder":{color:"var(--epr-search-input-placeholder-color)"}},btnClearSearch:{".":"epr-btn-clear-search",position:"absolute",right:"var(--epr-search-bar-inner-padding)",height:"30px",width:"30px",display:"flex",alignItems:"center",justifyContent:"center",top:"50%",transform:"translateY(-50%)",padding:"0",borderRadius:"50%",":hover":{background:"var(--epr-hover-bg-color)"},":focus":{background:"var(--epr-hover-bg-color)"}},icnClearnSearch:{".":"epr-icn-clear-search",backgroundColor:"transparent",backgroundRepeat:"no-repeat",backgroundSize:"20px",height:"20px",width:"20px",backgroundImage:"url("+pb+")",":hover":{backgroundPositionY:"-20px"},":focus":{backgroundPositionY:"-20px"}}},xa("icnClearnSearch",{backgroundPositionY:"-40px"}),xa("btnClearSearch",{":hover > .epr-icn-clear-search":{backgroundPositionY:"-60px"}})));function RT(){return g.createElement(Yl,{className:pe("epr-header",tr.hiddenOnReactions)},g.createElement(AT,null),g.createElement(jT,null))}function OT(e){return g.createElement(Ok,null,g.createElement(N8,null),g.createElement(lk,Object.assign({},e),g.createElement(BT,null)))}function BT(){var e=Il(),a=e[0],i=L3(),f=g.useState(!a),c=f[0],d=f[1],m=pk();return g.useEffect(function(){a&&!i||c||d(!0)},[c,i,a]),m?g.createElement(wE,null,g.createElement(HE,null),g.createElement(UT,{renderAll:c})):null}function UT(e){var a=e.renderAll;return a?g.createElement(g.Fragment,null,g.createElement(RT,null),g.createElement(rT,null),g.createElement(hT,null)):null}var _T=g.memo(OT,h3),YT=function(e){k8(a,e);function a(f){var c;return c=e.call(this,f)||this,c.state={hasError:!1},c}a.getDerivedStateFromError=function(){return{hasError:!0}};var i=a.prototype;return i.componentDidCatch=function(c,d){console.error("Emoji Picker React failed to render:",c,d)},i.render=function(){return this.state.hasError?null:this.props.children},a}(g.Component);function bb(e){var a=uk({onEmojiClick:e.onEmojiClick,onReactionClick:e.onReactionClick,onSkinToneChange:e.onSkinToneChange});return g.createElement(YT,null,g.createElement(M3.Provider,{value:a},g.createElement(_T,Object.assign({},e))))}const y1={mode:"dark",background:{primary:"#0d1117",secondary:"#161b22",thirdly:"#21262d",message:"#2d3748"},text:{primary:"#ffffff",secondary:"#e6edf3",thirdly:"#c9d1d9",placeholder:"#7d8590"},border:{primary:"#30363d",secondary:"#484f58"},buttons:{primary:"#6366f1",secondary:"#21262d",danger:"#f85149"},status:{success:"#3fb950",info:"#f0883e",danger:"#f85149"},shadow:{primary:"#00000020",secondary:"#00000040"}},wb={mode:"light",background:{primary:"#ffffff",secondary:"#f6f8fa",thirdly:"#eaeef2",message:"#dbeafe"},text:{primary:"#1f2328",secondary:"#656d76",thirdly:"#7c8b96",placeholder:"#9a9ea6"},border:{primary:"#d1d9e0",secondary:"#afb8c1"},buttons:{primary:"#6366f1",secondary:"#f6f8fa",danger:"#da3633"},status:{success:"#1a7f37",info:"#fb8500",danger:"#da3633"},shadow:{primary:"#0000000a",secondary:"#0000001a"}},vb={mode:"clean-light",background:{primary:"#ffffff",secondary:"#f8fafc",thirdly:"#e2e8f0",message:"#eff6ff"},text:{primary:"#0f172a",secondary:"#475569",thirdly:"#64748b",placeholder:"#94a3b8"},border:{primary:"#cbd5e1",secondary:"#94a3b8"},buttons:{primary:"#3b82f6",secondary:"#f1f5f9",danger:"#ef4444"},status:{success:"#10b981",info:"#f59e0b",danger:"#ef4444"},shadow:{primary:"#0000000d",secondary:"#00000024"}},xb={mode:"minimal-white",background:{primary:"#ffffff",secondary:"#fafafa",thirdly:"#f4f4f5",message:"#f8fafc"},text:{primary:"#18181b",secondary:"#3f3f46",thirdly:"#71717a",placeholder:"#a1a1aa"},border:{primary:"#e4e4e7",secondary:"#d4d4d8"},buttons:{primary:"#5b21b6",secondary:"#f4f4f5",danger:"#dc2626"},status:{success:"#059669",info:"#ea580c",danger:"#dc2626"},shadow:{primary:"#0000000a",secondary:"#00000018"}},Mb={mode:"modern-sky",background:{primary:"#f0f9ff",secondary:"#e0f2fe",thirdly:"#bae6fd",message:"#93c5fd"},text:{primary:"#0c4a6e",secondary:"#0369a1",thirdly:"#0284c7",placeholder:"#0ea5e9"},border:{primary:"#7dd3fc",secondary:"#38bdf8"},buttons:{primary:"#0284c7",secondary:"#e0f2fe",danger:"#dc2626"},status:{success:"#059669",info:"#ea580c",danger:"#dc2626"},shadow:{primary:"#0284c720",secondary:"#0284c740"}},jb={mode:"soft-blush",background:{primary:"#fefcfc",secondary:"#fef2f2",thirdly:"#fecaca",message:"#f3e8ff"},text:{primary:"#374151",secondary:"#4b5563",thirdly:"#6b7280",placeholder:"#9ca3af"},border:{primary:"#fca5a5",secondary:"#f87171"},buttons:{primary:"#db2777",secondary:"#fef2f2",danger:"#dc2626"},status:{success:"#059669",info:"#ea580c",danger:"#dc2626"},shadow:{primary:"#db277720",secondary:"#db277740"}},Lb={mode:"clean-dark",background:{primary:"#0f172a",secondary:"#1e293b",thirdly:"#334155",message:"#475569"},text:{primary:"#f8fafc",secondary:"#e2e8f0",thirdly:"#cbd5e1",placeholder:"#64748b"},border:{primary:"#475569",secondary:"#64748b"},buttons:{primary:"#3b82f6",secondary:"#334155",danger:"#ef4444"},status:{success:"#10b981",info:"#f59e0b",danger:"#ef4444"},shadow:{primary:"#00000030",secondary:"#00000050"}},Sb={mode:"modern-charcoal",background:{primary:"#0a0a0a",secondary:"#171717",thirdly:"#262626",message:"#404040"},text:{primary:"#fafafa",secondary:"#e5e5e5",thirdly:"#d4d4d4",placeholder:"#737373"},border:{primary:"#404040",secondary:"#525252"},buttons:{primary:"#7c3aed",secondary:"#262626",danger:"#ef4444"},status:{success:"#22c55e",info:"#f59e0b",danger:"#ef4444"},shadow:{primary:"#00000040",secondary:"#00000060"}},Cb={mode:"neo-dark",background:{primary:"#09090b",secondary:"#18181b",thirdly:"#27272a",message:"#3f3f46"},text:{primary:"#fafafa",secondary:"#e4e4e7",thirdly:"#d4d4d8",placeholder:"#71717a"},border:{primary:"#3f3f46",secondary:"#52525b"},buttons:{primary:"#8b5cf6",secondary:"#27272a",danger:"#f87171"},status:{success:"#4ade80",info:"#facc15",danger:"#f87171"},shadow:{primary:"#8b5cf630",secondary:"#8b5cf650"}},kb={mode:"glass-night",background:{primary:"#0c1222",secondary:"#1a2332",thirdly:"#2a3441",message:"#374151"},text:{primary:"#ffffff",secondary:"#f3f4f6",thirdly:"#d1d5db",placeholder:"#6b7280"},border:{primary:"#374151",secondary:"#4b5563"},buttons:{primary:"#06b6d4",secondary:"#1a2332",danger:"#f87171"},status:{success:"#10b981",info:"#f59e0b",danger:"#f87171"},shadow:{primary:"#00000040",secondary:"#00000060"}},Eb={dark:y1,light:wb,"clean-light":vb,"minimal-white":xb,"modern-sky":Mb,"soft-blush":jb,"clean-dark":Lb,"modern-charcoal":Sb,"neo-dark":Cb,"glass-night":kb},Zp=Object.keys(Eb),Tb=g.createContext(void 0),QT=({children:e})=>{const[a,i]=g.useState(()=>{const m=localStorage.getItem("theme");return m&&Zp.includes(m)?m:window.matchMedia("(prefers-color-scheme: dark)").matches?"glass-night":"minimal-white"}),f=Eb[a]||y1;g.useEffect(()=>{localStorage.setItem("theme",a)},[a]);const d={theme:f,themeMode:a,switchTheme:m=>{Zp.includes(m)?i(m):console.warn(`Invalid theme: ${m}`)}};return s.jsx(Tb.Provider,{value:d,children:s.jsx(sx,{theme:f,children:e})})},b1=()=>{const e=g.useContext(Tb);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e},GT=({recipientId:e})=>{const[a,i]=g.useState(""),[f,c]=g.useState(!1),[d,m]=g.useState(!1),[y,b]=g.useState(!1),[x,v]=g.useState(!1),{themeMode:M}=b1(),{sendMessage:j}=er(),{socket:k}=Jf(),N=g.useRef(null),C=g.useRef(null),E=g.useRef(null);g.useEffect(()=>{if(!(!k||!e))return a.trim()&&!y&&(b(!0),k.emit("typing_start_direct",{recipientId:e})),E.current&&clearTimeout(E.current),E.current=setTimeout(()=>{y&&(b(!1),k.emit("typing_stop_direct",{recipientId:e}))},2e3),()=>{E.current&&clearTimeout(E.current)}},[a,k,e,y]),g.useEffect(()=>()=>{E.current&&clearTimeout(E.current),y&&k&&e&&k.emit("typing_stop_direct",{recipientId:e})},[y,k,e]);const I=O=>{var q;i(se=>se+O.emoji),(q=C.current)==null||q.focus()},A=async()=>{var q;if(!a.trim()||!e||x)return;const O=a.trim();i(""),v(!0),y&&(b(!1),k&&k.emit("typing_stop_direct",{recipientId:e}));try{await j(e,O)}catch(se){console.error("Failed to send message:",se),i(O)}finally{v(!1),(q=C.current)==null||q.focus()}},G=O=>{O.key==="Enter"&&!O.shiftKey&&(O.preventDefault(),A())},_=O=>{i(O.target.value)};g.useEffect(()=>{const O=q=>{N.current&&!N.current.contains(q.target)&&c(!1)};return f&&document.addEventListener("mousedown",O),()=>{document.removeEventListener("mousedown",O)}},[f]);const L=[{label:"Photos & Videos",icon:s.jsx(Dy,{}),onClick:()=>{m(!1),alert("File upload not implemented yet")}},{label:"Document",icon:s.jsx(Ny,{}),onClick:()=>{m(!1),alert("Document upload not implemented yet")}}],R=M==="light"||M==="clean-light"||M==="minimal-white"||M==="modern-sky"||M==="soft-blush"?"light":"dark";return e?s.jsxs(Jp,{children:[s.jsx(HT,{children:s.jsx(Hp,{onClick:()=>c(O=>!O),children:s.jsx(Iy,{})})}),s.jsx(FT,{ref:N,isOpen:f,children:s.jsx(qT,{isOpen:f,children:s.jsx(bb,{autoFocusSearch:!1,theme:R,lazyLoadEmojis:!0,onEmojiClick:I})})}),s.jsx(ZT,{children:s.jsx("input",{ref:C,type:"text",placeholder:"Type a message",value:a,onChange:_,onKeyPress:G,disabled:x})}),s.jsxs(PT,{children:[s.jsx(Ma,{onClose:()=>m(!1),isOpen:d,right:"1",top:"-160",items:L}),s.jsx(Hp,{onClick:()=>m(!0),children:s.jsx(Cy,{})}),a.trim()&&s.jsx(JT,{onClick:A,disabled:x,children:s.jsx(Sy,{})})]})]}):s.jsx(Jp,{children:s.jsx($T,{children:"Select a conversation to start messaging"})})},Jp=h.div`
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
`,$T=h.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.text.placeholder};
  font-size: var(--text-md);
`,ZT=h.div`
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
`,Hp=h.div`
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
`,JT=h.button`
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
`,HT=h.div`
  width: max-content;
`,PT=h.div`
  width: max-content;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,FT=h.div`
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
`,qT=h.div`
  width: 100%;
`,VT=({groupId:e})=>{const[a,i]=g.useState(""),[f,c]=g.useState(!1),[d,m]=g.useState(!1),[y,b]=g.useState(!1),[x,v]=g.useState(!1),{themeMode:M}=b1(),{sendGroupMessage:j}=ja(),{socket:k}=Jf(),N=g.useRef(null),C=g.useRef(null),E=g.useRef(null);g.useEffect(()=>{if(!(!k||!e))return a.trim()&&!y&&(b(!0),k.emit("typing_start_group",{groupId:e})),E.current&&clearTimeout(E.current),E.current=setTimeout(()=>{y&&(b(!1),k.emit("typing_stop_group",{groupId:e}))},2e3),()=>{E.current&&clearTimeout(E.current)}},[a,k,e,y]),g.useEffect(()=>()=>{E.current&&clearTimeout(E.current),y&&k&&e&&k.emit("typing_stop_group",{groupId:e})},[y,k,e]);const I=O=>{var q;i(se=>se+O.emoji),(q=C.current)==null||q.focus()},A=async()=>{var q;if(!a.trim()||!e||x)return;const O=a.trim();i(""),v(!0),y&&(b(!1),k&&k.emit("typing_stop_group",{groupId:e}));try{await j(e,O)}catch(se){console.error("Failed to send group message:",se),i(O)}finally{v(!1),(q=C.current)==null||q.focus()}},G=O=>{O.key==="Enter"&&!O.shiftKey&&(O.preventDefault(),A())},_=O=>{i(O.target.value)};g.useEffect(()=>{const O=q=>{N.current&&!N.current.contains(q.target)&&c(!1)};return f&&document.addEventListener("mousedown",O),()=>{document.removeEventListener("mousedown",O)}},[f]);const L=[{label:"Photos & Videos",icon:s.jsx(Dy,{}),onClick:()=>{m(!1),alert("File upload not implemented yet")}},{label:"Document",icon:s.jsx(Ny,{}),onClick:()=>{m(!1),alert("Document upload not implemented yet")}}],R=M==="light"||M==="clean-light"||M==="minimal-white"||M==="modern-sky"||M==="soft-blush"?"light":"dark";return e?s.jsxs(Pp,{children:[s.jsx(eN,{children:s.jsx(Fp,{onClick:()=>c(O=>!O),children:s.jsx(Iy,{})})}),s.jsx(nN,{ref:N,isOpen:f,children:s.jsx(aN,{isOpen:f,children:s.jsx(bb,{autoFocusSearch:!1,theme:R,lazyLoadEmojis:!0,onEmojiClick:I})})}),s.jsx(WT,{children:s.jsx("input",{ref:C,type:"text",placeholder:"Type a message",value:a,onChange:_,onKeyPress:G,disabled:x})}),s.jsxs(tN,{children:[s.jsx(Ma,{onClose:()=>m(!1),isOpen:d,right:"1",top:"-160",items:L}),s.jsx(Fp,{onClick:()=>m(!0),children:s.jsx(Cy,{})}),a.trim()&&s.jsx(KT,{onClick:A,disabled:x,children:s.jsx(Sy,{})})]})]}):s.jsx(Pp,{children:s.jsx(XT,{children:"Select a group to start messaging"})})},Pp=h.div`
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
`,XT=h.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.text.placeholder};
  font-size: var(--text-md);
`,WT=h.div`
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
`,KT=h.button`
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
`,eN=h.div`
  width: max-content;
`,tN=h.div`
  width: max-content;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,nN=h.div`
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
`,aN=h.div`
  width: 100%;
`,rN=Tt`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,iN=h.div`
  width: 20px;
  height: 20px;
  border: 3px solid ${({theme:e})=>e.text.placeholder};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${rN} 1s linear infinite;
`,ll=()=>s.jsx(iN,{}),fN=({recipientId:e})=>{var A,G,_;const{conversations:a,loadMessages:i,markAsRead:f}=er(),{user:c}=gt(),{friends:d}=Hn(),m=g.useRef(null),[y,b]=g.useState(!1),[x,v]=g.useState(new Set),M=a[e],j=(A=d.find(L=>L.friendId._id===e))==null?void 0:A.friendId;g.useEffect(()=>{e&&!x.has(e)&&(i(e,1),v(L=>new Set([...L,e])))},[e,i,x]),g.useEffect(()=>{var L;((L=M==null?void 0:M.messages)==null?void 0:L.length)>0&&k()},[(G=M==null?void 0:M.messages)==null?void 0:G.length]),g.useEffect(()=>{if(!(M!=null&&M.messages)||!c||!e)return;const L=M.messages.filter(R=>R.senderId._id!==c.id&&!R.readBy.some(O=>O.userId===c.id));if(L.length>0){const R=L[L.length-1];f(R.senderId._id,R._id)}},[M==null?void 0:M.messages,c,e,f]);const k=g.useCallback(()=>{var L;(L=m.current)==null||L.scrollIntoView({behavior:"smooth"})},[]),N=g.useCallback(async()=>{if(!(!(M!=null&&M.hasMore)||y)){b(!0);try{const L=M.messages.length,R=Math.floor(L/50)+1;await i(e,R)}finally{b(!1)}}},[M==null?void 0:M.hasMore,(_=M==null?void 0:M.messages)==null?void 0:_.length,y,i,e]),C=g.useCallback(L=>new Date(L).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),[]),E=g.useCallback(L=>{const R=new Date,O=new Date(L);if(O.toDateString()===R.toDateString())return"Today";const q=new Date(R);return q.setDate(q.getDate()-1),O.toDateString()===q.toDateString()?"Yesterday":O.toLocaleDateString()},[]);if(!j)return s.jsx(pf,{children:s.jsx(Bd,{children:s.jsx(Ud,{children:"User not found"})})});if(!M&&x.has(e))return s.jsx(pf,{children:s.jsxs(Bd,{children:[s.jsx(bt,{image:j.avatar,userName:j.fullName,size:80}),s.jsxs(qp,{children:["Start a conversation with ",j.fullName]}),s.jsx(Ud,{children:"Send a message to get the conversation started!"})]})});if(M!=null&&M.loading&&M.messages.length===0)return s.jsx(pf,{children:s.jsx(vN,{children:s.jsx(xN,{children:s.jsx(ll,{})})})});if(!(M!=null&&M.messages)||M.messages.length===0)return s.jsx(pf,{children:s.jsxs(Bd,{children:[s.jsx(bt,{image:j.avatar,userName:j.fullName,size:80}),s.jsxs(qp,{children:["Start a conversation with ",j.fullName]}),s.jsx(Ud,{children:"Send a message to get the conversation started!"})]})});let I="";return s.jsxs(pf,{children:[M.hasMore&&s.jsx(bN,{children:s.jsx(wN,{onClick:N,disabled:y,children:y?s.jsx(ll,{}):"Load older messages"})}),s.jsx(oN,{children:M.messages.map((L,R)=>{const O=L.senderId._id===(c==null?void 0:c.id),q=E(L.createdAt),se=q!==I;I=q;const Ye=R>0?M.messages[R-1]:null,Je=R<M.messages.length-1?M.messages[R+1]:null,Oe=!Ye||Ye.senderId._id!==L.senderId._id,Gt=!Je||Je.senderId._id!==L.senderId._id;return s.jsxs(rt.Fragment,{children:[se&&s.jsx(pN,{children:s.jsx(yN,{children:q})}),s.jsx(sN,{isOwn:O,children:s.jsxs(lN,{isOwn:O,children:[!O&&Oe&&s.jsx(cN,{children:s.jsx(bt,{image:L.senderId.avatar,userName:L.senderId.fullName,size:36})}),s.jsx(uN,{isOwn:O,children:s.jsxs(dN,{isOwn:O,hasAvatar:!O&&Oe,isLastInGroup:Gt,children:[s.jsx(hN,{children:L.content}),s.jsxs(mN,{isOwn:O,children:[C(L.createdAt),O&&L.readBy.length>1&&s.jsx(gN,{children:"✓✓"})]})]})})]})})]},L._id)})}),s.jsx("div",{ref:m})]})},pf=h.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.background.secondary};
`,oN=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`,sN=h.div`
  display: flex;
  justify-content: ${({isOwn:e})=>e?"flex-end":"flex-start"};
  margin-bottom: 0.3rem;
`,lN=h.div`
  display: flex;
  align-items: flex-end;
  gap: 0.8rem;
  max-width: 70%;
  flex-direction: ${({isOwn:e})=>e?"row-reverse":"row"};
  
  @media (max-width: 600px) {
    max-width: 85%;
  }
`,cN=h.div`
  flex-shrink: 0;
  align-self: flex-start;
`,uN=h.div`
  display: flex;
  flex-direction: column;
  align-items: ${({isOwn:e})=>e?"flex-end":"flex-start"};
`,dN=h.div`
  background-color: ${({isOwn:e,theme:a})=>e?"var(--blue)":a.background.thirdly};
  color: ${({isOwn:e,theme:a})=>e?"white":a.text.primary};
  padding: 0.8rem 1.2rem;
  border-radius: 1.2rem;
  word-wrap: break-word;
  position: relative;
  max-width: 50rem;
  min-width: 0;
  
  ${({isOwn:e,hasAvatar:a,isLastInGroup:i})=>e?i?"border-bottom-right-radius: 0.3rem;":"":a&&i?"border-bottom-left-radius: 0.3rem;":""}
`,hN=h.div`
  font-size: var(--text-md);
  line-height: 1.4;
  word-break: break-word;
  margin-bottom: 0.3rem;
`,mN=h.div`
  font-size: var(--text-xs);
  opacity: 0.7;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  justify-content: ${({isOwn:e})=>e?"flex-end":"flex-start"};
`,gN=h.span`
  color: #4ade80;
  font-size: var(--text-xs);
`,pN=h.div`
  display: flex;
  justify-content: center;
  margin: 1.5rem 0 1rem;
`,yN=h.div`
  background-color: ${({theme:e})=>e.background.primary};
  color: ${({theme:e})=>e.text.secondary};
  padding: 0.7rem 2rem;
  border-radius: 0.5rem;
  font-size: var(--text-sm);
  font-weight: 500;
  box-shadow: 0 0 12px 3px #00000005;
`,bN=h.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`,wN=h.button`
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
  gap: 2rem;
  padding: 2rem;
`,qp=h.h3`
  font-size: var(--text-lg);
  color: ${({theme:e})=>e.text.primary};
  font-weight: 500;
  text-align: center;
`,Ud=h.p`
  font-size: var(--text-md);
  color: ${({theme:e})=>e.text.secondary};
  text-align: center;
`,vN=h.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`,xN=h.div`
  font-size: var(--text-md);
  color: ${({theme:e})=>e.text.secondary};
`,MN=({groupId:e,conversation:a})=>{const{user:i}=gt(),{loadGroupMessages:f}=ja(),c=g.useRef(null),[d,m]=g.useState(!1);g.useEffect(()=>{y()},[a==null?void 0:a.messages]);const y=()=>{var j;(j=c.current)==null||j.scrollIntoView({behavior:"smooth"})},b=async()=>{if(!(!(a!=null&&a.hasMore)||a!=null&&a.loading||d)){m(!0);try{const j=a.messages.length,k=Math.floor(j/50)+1;await f(e,k)}catch(j){console.error("Failed to load more messages:",j)}finally{m(!1)}}},x=j=>new Date(j).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),v=j=>{const k=new Date,N=new Date(j);if(N.toDateString()===k.toDateString())return"Today";const C=new Date(k);return C.setDate(C.getDate()-1),N.toDateString()===C.toDateString()?"Yesterday":N.toLocaleDateString()};if(!a)return s.jsx(ks,{children:s.jsx(Vp,{children:s.jsx(Xp,{children:"Loading messages..."})})});if(a.loading&&a.messages.length===0)return s.jsx(ks,{children:s.jsx(Vp,{children:s.jsx(Xp,{children:"Loading messages..."})})});if(a.messages.length===0)return s.jsx(ks,{children:s.jsxs(BN,{children:[s.jsx(UN,{children:"💬"}),s.jsx(_N,{children:"Welcome to the group!"}),s.jsx(YN,{children:"Be the first to send a message in this group."})]})});let M="";return s.jsxs(ks,{children:[a.hasMore&&s.jsx(RN,{children:s.jsx(ON,{onClick:b,disabled:d||a.loading,children:d||a.loading?"Loading...":"Load older messages"})}),s.jsx(jN,{children:a.messages.map((j,k)=>{const N=j.senderId._id===(i==null?void 0:i.id),C=v(j.createdAt),E=C!==M;M=C;const I=k>0?a.messages[k-1]:null,A=k<a.messages.length-1?a.messages[k+1]:null,G=!I||I.senderId._id!==j.senderId._id,_=!A||A.senderId._id!==j.senderId._id;return s.jsxs(rt.Fragment,{children:[E&&s.jsx(AN,{children:s.jsx(zN,{children:C})}),s.jsx(LN,{isOwn:N,children:s.jsxs(SN,{isOwn:N,children:[!N&&G&&s.jsx(CN,{children:s.jsx(bt,{image:j.senderId.avatar,userName:j.senderId.fullName,size:36})}),s.jsxs(kN,{isOwn:N,children:[!N&&G&&s.jsxs(EN,{children:["@",j.senderId.fullName]}),s.jsxs(TN,{isOwn:N,hasAvatar:!N&&G,isLastInGroup:_,children:[s.jsx(NN,{children:j.content}),s.jsxs(IN,{isOwn:N,children:[x(j.createdAt),N&&j.readBy.length>1&&s.jsx(DN,{children:"✓✓"})]})]})]})]})})]},j._id)})}),s.jsx("div",{ref:c})]})},ks=h.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.background.secondary};
`,jN=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`,LN=h.div`
  display: flex;
  justify-content: ${({isOwn:e})=>e?"flex-end":"flex-start"};
  margin-bottom: 0.3rem;
`,SN=h.div`
  display: flex;
  align-items: flex-end;
  gap: 0.8rem;
  max-width: 70%;
  flex-direction: ${({isOwn:e})=>e?"row-reverse":"row"};
  
  @media (max-width: 600px) {
    max-width: 85%;
  }
`,CN=h.div`
  flex-shrink: 0;
  align-self: flex-start;
`,kN=h.div`
  display: flex;
  flex-direction: column;
  align-items: ${({isOwn:e})=>e?"flex-end":"flex-start"};
  gap: 0.9rem;
  min-width: 0;
`,EN=h.div`
  font-size: var(--text-sm);
  font-weight: 600;
  color: ${({theme:e})=>e.text.primary};
  margin-bottom: 0.2rem;
  margin-left: 0.2rem;
`,TN=h.div`
  background-color: ${({isOwn:e,theme:a})=>e?"var(--blue)":a.background.thirdly};
  color: ${({isOwn:e,theme:a})=>e?"white":a.text.primary};
  padding: 0.8rem 1.2rem;
  border-radius: 1.2rem;
  word-wrap: break-word;
  position: relative;
  max-width: 50rem;
  min-width: 0;
  
  ${({isOwn:e,hasAvatar:a,isLastInGroup:i})=>e?i?"border-bottom-right-radius: 0.3rem;":"":a&&i?"border-bottom-left-radius: 0.3rem;":""}
`,NN=h.div`
  font-size: var(--text-md);
  line-height: 1.4;
  word-break: break-word;
  margin-bottom: 0.3rem;
`,IN=h.div`
  font-size: var(--text-xs);
  opacity: 0.7;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  justify-content: ${({isOwn:e})=>e?"flex-start":"flex-end"};
`,DN=h.span`
  color: #4ade80;
  font-size: var(--text-xs);
`,AN=h.div`
  display: flex;
  justify-content: center;
  margin: 1.5rem 0 1rem;
`,zN=h.div`
  background-color: #0000004e;
  color: ${({theme:e})=>e.text.secondary};
  padding: 0.7rem 2rem;
  border-radius: 0.5rem;
  font-size: var(--text-sm);
  font-weight: 500;
`,RN=h.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`,ON=h.button`
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
`,BN=h.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
`,UN=h.div`
  font-size: 4rem;
  margin-bottom: 1rem;
`,_N=h.h3`
  font-size: var(--text-lg);
  color: ${({theme:e})=>e.text.primary};
  font-weight: 500;
  text-align: center;
`,YN=h.p`
  font-size: var(--text-md);
  color: ${({theme:e})=>e.text.secondary};
  text-align: center;
`,Vp=h.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`,Xp=h.div`
  font-size: var(--text-md);
  color: ${({theme:e})=>e.text.secondary};
`,QN=({group:e,members:a,userRole:i,onClose:f})=>{const[c,d]=g.useState(""),[m,y]=g.useState(null),{user:b}=gt(),{removeMember:x,updateMemberRole:v}=ja(),M=i==="admin"||i==="moderator",j=i==="admin",k=a.filter(L=>L.userId.fullName.toLowerCase().includes(c.toLowerCase())||L.userId.username.toLowerCase().includes(c.toLowerCase())),N={admin:k.filter(L=>L.role==="admin"),moderator:k.filter(L=>L.role==="moderator"),member:k.filter(L=>L.role==="member")},C=async L=>{try{await x(e._id,L),y(null)}catch(R){console.error("Failed to remove member:",R)}},E=async(L,R)=>{try{await v(e._id,L,R),y(null)}catch(O){console.error("Failed to update member role:",O)}},I=L=>{const R=[];return L.userId._id===(b==null?void 0:b.id)||!M||(j&&(L.role!=="admin"&&R.push({label:"Make Admin",icon:s.jsx(vd,{}),onClick:()=>E(L.userId._id,"admin")}),L.role!=="moderator"&&L.role!=="admin"&&R.push({label:"Make Moderator",icon:s.jsx(op,{}),onClick:()=>E(L.userId._id,"moderator")}),(L.role==="moderator"||L.role==="admin")&&R.push({label:"Remove Role",icon:s.jsx(vd,{}),onClick:()=>E(L.userId._id,"member")})),M&&!(i==="moderator"&&L.role==="admin")&&R.push({label:"Remove from Group",icon:s.jsx(K5,{}),danger:!0,onClick:()=>C(L.userId._id)})),R},A=L=>{switch(L){case"admin":return s.jsx(vd,{});case"moderator":return s.jsx(op,{});default:return null}},G=L=>{switch(L){case"admin":return"#f59e0b";case"moderator":return"#3b82f6";default:return"inherit"}},_=(L,R,O)=>R.length===0?null:s.jsxs(XN,{children:[s.jsxs(WN,{children:[L," — ",R.length]}),s.jsx(KN,{children:R.map(q=>s.jsxs(eI,{children:[s.jsxs(tI,{children:[s.jsx(bt,{image:q.userId.avatar,userName:q.userId.fullName,status:q.userId.isOnline?"online":"offline",showStatusCircle:!0,size:36}),s.jsxs(nI,{children:[s.jsxs(aI,{children:[q.userId.fullName,q.userId._id===(b==null?void 0:b.id)&&s.jsx(rI,{children:"You"})]}),s.jsxs(iI,{children:["@",q.userId.username]})]})]}),s.jsxs(fI,{children:[q.role!=="member"&&s.jsx(oI,{color:G(q.role),children:A(q.role)}),I(q).length>0&&s.jsx(sI,{onClick:()=>y(m===q.userId._id?null:q.userId._id),children:s.jsx(Sl,{})})]}),m===q.userId._id&&s.jsx(Ma,{onClose:()=>y(null),isOpen:!0,right:"0",top:"100",items:I(q)})]},q.userId._id))})]},O);return s.jsxs(s.Fragment,{children:[s.jsx(GN,{onClick:f}),s.jsxs($N,{children:[s.jsxs(ZN,{children:[s.jsxs(JN,{children:[s.jsx("h3",{children:"Members"}),s.jsx(HN,{children:a.length})]}),s.jsx(PN,{onClick:f,children:s.jsx(Df,{})})]}),s.jsx(FN,{children:s.jsxs(qN,{children:[s.jsx(d9,{}),s.jsx("input",{type:"text",placeholder:"Search members",value:c,onChange:L=>d(L.target.value)})]})}),s.jsxs(VN,{children:[_("Admins",N.admin,"admin"),_("Moderators",N.moderator,"moderator"),_("Members",N.member,"member"),k.length===0&&s.jsx(lI,{children:s.jsx(cI,{children:c?`No members found matching "${c}"`:"No members found"})})]})]})]})},GN=h.div`
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
`,$N=h.div`
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
`,ZN=h.div`
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,JN=h.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  h3 {
    font-size: var(--text-xl);
    color: ${({theme:e})=>e.text.primary};
    font-weight: 600;
    margin: 0;
  }
`,HN=h.span`
  background-color: ${({theme:e})=>e.background.thirdly};
  color: ${({theme:e})=>e.text.secondary};
  padding: 0.3rem 0.8rem;
  border-radius: 1rem;
  font-size: var(--text-sm);
  font-weight: 500;
`,PN=h.button`
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
`,FN=h.div`
  padding: 0 1.5rem 2rem;
`,qN=h.div`
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
`,VN=h.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 1.5rem 2rem;
`,XN=h.div`
  margin-bottom: 2rem;
`,WN=h.h4`
  font-size: var(--text-sm);
  color: ${({theme:e})=>e.text.secondary};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0 0 1rem 0;
  padding: 0 0.5rem;
`,KN=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,eI=h.div`
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
`,tI=h.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
  min-width: 0;
`,nI=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  min-width: 0;
`,aI=h.div`
  font-size: var(--text-md);
  color: ${({theme:e})=>e.text.primary};
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,rI=h.span`
  background-color: var(--blue);
  color: white;
  padding: 0.2rem 0.6rem;
  border-radius: 0.8rem;
  font-size: var(--text-xs);
  font-weight: 500;
  flex-shrink: 0;
`,iI=h.div`
  font-size: var(--text-sm);
  color: ${({theme:e})=>e.text.secondary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,fI=h.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,oI=h.div`
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
`,sI=h.button`
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
`,lI=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
`,cI=h.div`
  color: ${({theme:e})=>e.text.secondary};
  font-size: var(--text-md);
  text-align: center;
`,uI=()=>{var E;const{groupId:e}=b4(),{currentConversation:a}=er(),{friends:i}=Hn(),{groups:f,groupMembers:c,groupConversations:d,loadGroupMembers:m,loadGroupMessages:y,setCurrentGroup:b,currentGroup:x}=ja(),{user:v}=gt(),[M,j]=g.useState(!1),k=g.useRef(new Set),N=g.useRef(new Set),C=!!e;if(g.useEffect(()=>{e&&e!==x?b(e):e||b(null)},[e,b,x]),g.useEffect(()=>{e&&!k.current.has(e)&&(k.current.add(e),m(e))},[e,m]),g.useEffect(()=>{if(e&&!N.current.has(e)){const I=d[e];(!I||I.messages.length===0)&&(N.current.add(e),y(e))}},[e,d,y]),C){const I=f.find(L=>L._id===e),A=c[e||""]||[],G=d[e||""];if(!I)return s.jsx(Es,{children:s.jsx(_d,{children:s.jsxs(Yd,{children:[s.jsx(Wp,{children:"🔍"}),s.jsx(Qd,{children:"Group not found"}),s.jsx(Gd,{children:"The group you're looking for doesn't exist or you don't have access to it."})]})})});const _=A.find(L=>L.userId._id===(v==null?void 0:v.id));return A.length>0&&!_?s.jsx(Es,{children:s.jsx(_d,{children:s.jsxs(Yd,{children:[s.jsx(Wp,{children:"🚫"}),s.jsx(Qd,{children:"Access Denied"}),s.jsx(Gd,{children:"You are not a member of this group."})]})})}):s.jsxs(Es,{children:[s.jsxs(hI,{showSidebar:M,children:[s.jsx(o8,{group:I,memberCount:A.length,userRole:(_==null?void 0:_.role)||"member",onToggleMembersSidebar:()=>j(!M)}),s.jsx(MN,{groupId:e,conversation:G}),s.jsx(VT,{groupId:e})]}),M&&s.jsx(QN,{group:I,members:A,userRole:(_==null?void 0:_.role)||"member",onClose:()=>j(!1)})]})}else{const I=a?(E=i.find(A=>A.friendId._id===a))==null?void 0:E.friendId:null;return!a||!I?s.jsx(Es,{children:s.jsx(_d,{children:s.jsxs(Yd,{children:[s.jsx("svg",{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 66.59 63.66",width:70,height:70,children:s.jsx(mI,{d:"M50,70.82c-.13-.51-.28-1.13-.47-1.74A29,29,0,0,0,45,60.79a70.83,70.83,0,0,0-5.71-6.41,59.7,59.7,0,0,1-9.34-12.16c-.37-.67-.69-1.37-1.06-2.1-.06.12-.12.21-.17.31a39.53,39.53,0,0,0-3.13,10A25.62,25.62,0,0,0,27.66,66a32.27,32.27,0,0,0,7.45,9.79A52.47,52.47,0,0,0,43,81.64l.21.14c-1.85.11-8.38-2.61-11.73-4.86a33.27,33.27,0,0,1-9-9,32.14,32.14,0,0,1-5-11.7,33.2,33.2,0,0,1,21-38c-.55.66-1.10,1.29-1.61,1.95a14.4,14.4,0,0,0-2.76,5.58A11.27,11.27,0,0,0,34.93,33a39,39,0,0,0,6.27,9.26C42.88,44.15,44.63,46,46.26,48a20.22,20.22,0,0,1,3.67,6.42s0,.05.07.09c.29-.67.54-1.34.85-2a30.15,30.15,0,0,1,5-7A79.35,79.35,0,0,0,62,38.22a28.19,28.19,0,0,0,3.49-6.28,10.94,10.94,0,0,0-1-9.84c-.82-1.38-1.86-2.63-2.7-3.81C72.49,21.9,83.66,33.71,83.28,50.08a33.12,33.12,0,0,1-26.5,31.75l1.84-1.2a42.78,42.78,0,0,0,11-10.08,25.92,25.92,0,0,0,4.94-11.64A28.44,28.44,0,0,0,73.38,46c-.62-2-1.4-3.93-2.11-5.89l-.2-.06a1,1,0,0,1,0,.18A40.08,40.08,0,0,1,65.43,49c-2.17,2.71-4.57,5.21-7,7.71a35.26,35.26,0,0,0-7,10.05C50.83,68.11,50.42,69.52,50,70.82Z",transform:"translate(-16.71 -18.17)"})}),s.jsx(Qd,{children:"Welcome to Mendam"}),s.jsx(Gd,{children:"Select a conversation from the sidebar to start chatting with your friends."})]})})}):s.jsxs(dI,{children:[s.jsx(w7,{recipient:I}),s.jsx(fN,{recipientId:a}),s.jsx(GT,{recipientId:a})]})}},Es=h.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: ${({theme:e})=>e.background.secondary};
`,dI=h.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.background.secondary};
`,hI=h.div`
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
`,Wp=h.div`
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
`,mI=h.path`
  fill: ${({theme:e})=>e.text.placeholder};
`,gI=()=>{const{isChatOpen:e}=li();return s.jsxs(pI,{children:[s.jsxs(yI,{isChatOpen:e,children:[s.jsxs(bI,{children:[s.jsx(Ry,{}),s.jsx(wI,{children:s.jsx(w4,{})})]}),s.jsx(Ky,{})]}),s.jsx(vI,{isChatOpen:e,children:s.jsx(uI,{})})]})},pI=h.div`
  width: 100%;
  display: flex;
`,yI=h.div`
  width: 100%;
  max-width: 47rem;
  height: 100svh;
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
    position: ${({isChatOpen:e})=>e?"fixed":"relative"};
    left: ${({isChatOpen:e})=>e?"-100%":"0"};
    transition: left 0.3s ease;
    z-index: ${({isChatOpen:e})=>e?1:10};
  }
`,bI=h.div`
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
`,wI=h.div`
  width: 100%;
  height: 100%;
  background-color: ${({theme:e})=>e.background.primary};
  border-left: 1px solid ${({theme:e})=>e.border.primary};
  border-bottom: 1px solid ${({theme:e})=>e.border.primary};
  border-bottom-left-radius: 8px;
`,vI=h.div`
  width: 100%;
  height: 100svh;
  background-color: ${({theme:e})=>e.background.secondary};
  border-left: 1px solid ${({theme:e})=>e.border.primary};
  
  @media (max-width: 700px) {
    position: fixed;
    top: 0;
    right: ${({isChatOpen:e})=>e?"0":"-100%"};
    width: 100%;
    height: 100%;
    z-index: 1000;
    transition: right 0.3s ease;
  }
`,Nb=g.createContext(void 0),xI=({children:e})=>{const[a,i]=g.useState(!1);return s.jsx(Nb.Provider,{value:{openSettings:a,setOpenSettings:i},children:e})},Xf=()=>{const e=g.useContext(Nb);if(!e)throw new Error("useMainContent must be used within a MainContentProvider");return e},MI=()=>{const e=cl(),{setOpenSettings:a}=Xf(),i=()=>{a&&a(!0)};return s.jsx(s.Fragment,{children:s.jsx(jI,{children:s.jsx(LI,{children:s.jsxs(CI,{children:[s.jsx(SI,{children:s.jsx("h4",{children:"Settings"})}),s.jsxs(kI,{children:[s.jsx($d,{onClick:i,isActive:e.pathname==="/app/settings/profile",children:s.jsxs($e,{to:"profile",children:[s.jsx(qs,{children:s.jsx(J0,{})}),s.jsx(Vs,{children:s.jsx("span",{children:"Profile"})})]})}),s.jsx($d,{onClick:i,isActive:e.pathname==="/app/settings/account",children:s.jsxs($e,{to:"account",children:[s.jsx(qs,{children:s.jsx(If,{})}),s.jsx(Vs,{children:s.jsx("span",{children:"Account"})})]})}),s.jsx($d,{onClick:i,isActive:e.pathname==="/app/settings/appearance",children:s.jsxs($e,{to:"appearance",children:[s.jsx(qs,{children:s.jsx(M9,{})}),s.jsx(Vs,{children:s.jsx("span",{children:"Appearance"})})]})})]})]})})})})},jI=h.div`
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
`,LI=h.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,SI=h.div`
  padding-bottom: 3rem;
  @media (max-width: 700px) {
      padding: 2rem 1.5rem 3rem;
    }
  h4 {
    color: ${({theme:e})=>e.text.primary};
    font-size: var(--text-xl);
    font-weight: 400;
  }
`,CI=h.div`
  width: 100%;
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: space-between;
`,kI=h.div`
  width: 100%;
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 0.8rem;
`,qs=h.div`
  color: ${({theme:e})=>e.text.secondary};
  display: flex;
  align-items: center;
  svg {
    width: 2rem;
  }
`,Vs=h.div`
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
          ${qs} {
            color: var(--blue);
          }
          ${Vs} {
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
`,EI=({})=>{const{openSettings:e}=Xf();return s.jsx(s.Fragment,{children:s.jsxs(TI,{children:[s.jsxs(NI,{children:[s.jsxs(II,{children:[s.jsx(Ry,{}),s.jsx(MI,{})]}),window.innerWidth<=700&&s.jsx(Ky,{})]}),s.jsx(DI,{isOpen:e,children:s.jsx(w4,{})})]})})},TI=h.div`
  width: 100%;
  height: 100svh;
  display: flex;
  overflow: hidden;
  background-color: ${({theme:e})=>e.background.primary};
`,NI=h.div`
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
`,II=h.div`
height: 100%;
   @media (max-width: 700px) {
    min-height: calc(100% - 67.4px);
    max-height: calc(100% -  67.4px);
  }
  display: flex;
  overflow: hidden;

`,DI=h.div`
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
`,Zn=({value:e,placeholder:a="Search for",onInputChange:i})=>{const f=c=>{i&&i(c.target.value)};return s.jsx(s.Fragment,{children:s.jsxs(AI,{children:[s.jsx(zI,{children:s.jsx("input",{type:"text",placeholder:a,value:e||"",onChange:f})}),s.jsx(RI,{children:s.jsx(Q0,{})})]})})},AI=h.div`
  width: 100%;
  height: 4.5rem;
  overflow: hidden;
  border-radius: 0.8rem;
  background-color: ${({theme:e})=>e.background.secondary};
  border: 1px solid ${({theme:e})=>e.border.primary};
  display: flex;
  align-items: center;
`,zI=h.div`
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
`,RI=h.div`
  color: ${({theme:e})=>e.text.placeholder};
  padding: 1.5rem;
  display: flex;
  align-items: center;
  
  svg {
    width: 2.1rem;
    margin-left: 1.5rem;
  }
`,Jn=({title:e,heading:a})=>s.jsx(s.Fragment,{children:s.jsx(OI,{children:s.jsx(BI,{as:a,children:e})})}),OI=h.div`
  width: max-content;
`,BI=h.h1`
  color: ${({theme:e})=>e.text.primary};
  line-height: 1;
  font-weight: 500;
  font-size: ${({fontSize:e})=>e?`var(--text-${e})`:"var(--text-xl)"};
`,UI=({})=>{const[e,a]=g.useState(null),[i,f]=g.useState(null),[c,d]=g.useState(""),{friends:m,loading:y}=Hn(),{conversations:b,currentConversation:x,setCurrentConversation:v,loadMessages:M}=er(),{user:j}=gt(),{openChat:k}=li(),N=O=>{f(i===O?null:O)},C=()=>{f(null)},E=[{label:"Add to favorite",icon:s.jsx(v9,{}),onClick:()=>{C()}},{label:"Clear messages",icon:s.jsx($0,{}),onClick:()=>{C()}},{label:"Delete",icon:s.jsx(Ay,{}),danger:!0,onClick:()=>{C(),alert("Delete functionality")}}],A=m.map(O=>{const q=O.friendId._id,se=b[q],Ye=se==null?void 0:se.messages[se.messages.length-1],Je=(se==null?void 0:se.messages.filter(Oe=>Oe.senderId._id!==(j==null?void 0:j.id)&&!Oe.readBy.some(Gt=>Gt.userId===(j==null?void 0:j.id))).length)||0;return{id:q,userName:O.friendId.fullName,avatar:O.friendId.avatar,status:O.friendId.isOnline?"online":"offline",lastMessage:(Ye==null?void 0:Ye.content)||"No messages yet",lastMessageTime:Ye?R(new Date(Ye.createdAt)):"",unreadCount:Je>0?Je:void 0}}).filter(O=>O.userName.toLowerCase().includes(c.toLowerCase())),G=O=>{a(O)},_=()=>{a(null)},L=async O=>{try{v(O),window.innerWidth<=700&&k&&k();const q=b[O];(!q||q.messages.length===0)&&await M(O,1)}catch(q){console.error("Failed to load conversation:",q)}};function R(O){const se=Math.floor((new Date().getTime()-O.getTime())/(1e3*60));if(se<1)return"now";if(se<60)return`${se}m`;const Ye=Math.floor(se/60);if(Ye<24)return`${Ye}h`;const Je=Math.floor(Ye/24);return Je<7?`${Je}d`:`${Math.floor(Je/7)}w`}return y&&m.length===0?s.jsxs(Kp,{children:[s.jsxs(e4,{children:[s.jsx(Jn,{title:"Direct Messages",heading:"h3"}),s.jsx(Zn,{placeholder:"Search or start a new conversation"})]}),s.jsx(qI,{children:s.jsx(VI,{children:"Loading conversations..."})})]}):s.jsx(s.Fragment,{children:s.jsxs(Kp,{children:[s.jsxs(e4,{children:[s.jsx(Jn,{title:"Direct Messages",heading:"h3"}),s.jsx(Zn,{placeholder:"Search or start a new conversation",value:c,onInputChange:d})]}),A.length===0?s.jsx(XI,{children:s.jsx(WI,{children:c?`No conversations found matching "${c}"`:"No conversations yet. Add some friends to start chatting!"})}):s.jsx(_I,{children:A.map(O=>s.jsxs(YI,{children:[s.jsxs(QI,{onClick:()=>L(O.id),onMouseEnter:()=>G(O.id),onMouseLeave:_,isActive:x===O.id,children:[s.jsxs(GI,{children:[s.jsx(bt,{image:O.avatar,status:O.status,userName:O.userName,showStatusCircle:!0,size:35}),s.jsxs($I,{children:[s.jsxs(ZI,{hasUnread:!!O.unreadCount,children:[O.userName,O.unreadCount&&s.jsx(HI,{children:O.unreadCount})]}),s.jsxs(JI,{children:[O.lastMessage.substring(0,40),O.lastMessage.length>40?"...":""]})]})]}),e!==O.id&&O.lastMessageTime&&s.jsx(PI,{children:s.jsx("span",{children:O.lastMessageTime})}),e===O.id&&s.jsx(FI,{onClick:q=>{q.stopPropagation(),N(O.id)},children:s.jsx(Sl,{})})]}),s.jsx("div",{onClick:q=>q.stopPropagation(),children:s.jsx(Ma,{onClose:()=>f(null),isOpen:i===O.id,right:"1",items:E})})]},O.id))})]})})},Kp=h.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding-bottom: 0.5rem;
`,e4=h.div`
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
`,_I=h.div`
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 3px;
  @media (max-width: 1000px) {
    padding: 0;
  }
`,YI=h.div`
  width: 100%;
  position: relative;
`,QI=h.div`
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
`,GI=h.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
  min-width: 0;
`,$I=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
  min-width: 0;
`,ZI=h.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: ${({hasUnread:e})=>e?"500":"400"};
  font-size: var(--text-base);
  color: ${({hasUnread:e,theme:a})=>e?a.text.primary:a.text.thirdly};
  @media (max-width: 1000px) {
    font-size: var(--text-sm);
  }
  text-transform: capitalize;
`,JI=h.div`
  width: 90%;
  font-size: var(--text-sm);
  color: ${({theme:e})=>e.text.secondary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,HI=h.span`
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
`,PI=h.div`
  flex-shrink: 0;
  span {
    font-size: var(--text-sm);
    color: ${({theme:e})=>e.text.placeholder};
  }
`,FI=h.div`
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
`,qI=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
`,VI=h.div`
  color: ${({theme:e})=>e.text.secondary};
  font-size: var(--text-md);
`,XI=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
`,WI=h.div`
  color: ${({theme:e})=>e.text.secondary};
  font-size: var(--text-md);
  text-align: center;
`,Vr=({onClick:e})=>s.jsx(s.Fragment,{children:s.jsx(KI,{onClick:e,children:s.jsx(T5,{})})}),KI=h.div`
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
`,Zd=({title:e,onClose:a,isOpen:i})=>{const[f,c]=g.useState(""),[d,m]=g.useState([]),[y,b]=g.useState(!1),[x,v]=g.useState(new Set),[M,j]=g.useState(""),{searchUsers:k,sendFriendRequest:N,friends:C}=Hn(),E=new Set(C.map(_=>_.friendId._id)),I=async()=>{if(!f.trim()){m([]);return}b(!0),j("");try{const L=(await k(f.trim())).filter(R=>!E.has(R._id));m(L)}catch(_){j(_.message||"Failed to search users"),m([])}finally{b(!1)}},A=async _=>{try{j(""),await N(_),v(L=>new Set([...L,_]))}catch(L){j(L.message||"Failed to send friend request")}};g.useEffect(()=>{i&&(c(""),m([]),v(new Set),j(""))},[i]);const G=_=>{_.key==="Enter"&&I()};return s.jsx(Zf,{title:e,onClose:a,isOpen:i,children:s.jsxs(eD,{children:[s.jsx(tD,{children:s.jsxs(nD,{children:[s.jsx(aD,{children:s.jsx("input",{type:"text",placeholder:"Search for friend by username or name",value:f,onChange:_=>c(_.target.value),onKeyPress:G,disabled:y})}),s.jsx(rD,{onClick:I,disabled:y,children:s.jsx(Q0,{})})]})}),M&&s.jsx(iD,{children:M}),s.jsxs(fD,{children:[s.jsx(oD,{children:s.jsx("h6",{children:y?"Searching...":d.length>0?`Found ${d.length} user${d.length!==1?"s":""}:`:f.trim()?"No users found":"Enter a username or name to search"})}),d.length>0&&s.jsx(sD,{children:d.map(_=>s.jsx(lD,{children:s.jsxs(cD,{children:[s.jsx(bt,{image:_.avatar,userName:_.fullName,showUserName:!0,size:35,bg:!0}),s.jsx(uD,{children:s.jsxs(dD,{children:["@",_.username]})}),s.jsx(hD,{children:x.has(_._id)?s.jsxs(gD,{children:[s.jsx(jy,{}),s.jsx("span",{children:"Request Sent"})]}):s.jsxs(mD,{onClick:()=>A(_._id),children:[s.jsx(G0,{}),s.jsx("span",{children:"Add Friend"})]})})]})},_._id))})]}),s.jsx(pD,{children:s.jsx(yt,{variant:"cancel",title:"Close",onClick:a})})]})})},eD=h.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,tD=h.div`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 3456;
  background-color: ${({theme:e})=>e.background.thirdly};
`,nD=h.div`
  width: 100%;
  height: 4.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`,aD=h.div`
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
`,rD=h.button`
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
`,iD=h.div`
  background-color: #fee2e2;
  border: 1px solid #fecaca;
  color: #dc2626;
  padding: 1rem 1.5rem;
  border-radius: 0.8rem;
  font-size: var(--text-sm);
  text-align: center;
`,fD=h.div`
  width: 100%;
`,oD=h.div`
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
`,sD=h.div`
  display: flex;
  flex-direction: column;
  max-height: 40rem;
  overflow-y: auto;
`,lD=h.div`
  width: 100%;
  
  &:not(:last-child) {
    border-bottom: 1px solid ${({theme:e})=>e.border.secondary};
  }
`,cD=h.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;
  gap: 1rem;
`,uD=h.div`
  flex: 1;
  min-width: 0;
`,dD=h.div`
  font-size: var(--text-sm);
  color: ${({theme:e})=>e.text.placeholder};
  margin-top: 0.3rem;
`,hD=h.div`
  display: flex;
  align-items: center;
`,mD=h.button`
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
`,gD=h.div`
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
`,pD=h.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 1rem;
  border-top: 1px solid ${({theme:e})=>e.border.secondary};
`,yD=({})=>{const[e,a]=g.useState(!1),[i,f]=g.useState(""),[c,d]=g.useState(null),{friends:m,loading:y,error:b,loadFriends:x,removeFriend:v,blockUser:M}=Hn(),{setCurrentConversation:j}=er(),{openChat:k}=li(),N=Yf();g.useEffect(()=>{x()},[]);const C=()=>{a(!1)},E=L=>{j(L),N("/app/@me"),window.innerWidth<=700&&k&&k()},I=async L=>{try{await v(L),d(null)}catch(R){console.error("Failed to remove friend:",R)}},A=async L=>{try{await M(L),d(null)}catch(R){console.error("Failed to block user:",R)}},G=L=>[{label:"Start Chat",icon:s.jsx(ip,{}),onClick:()=>{E(L),d(null)}},{label:"Remove Friend",icon:s.jsx($0,{}),onClick:()=>I(L)},{label:"Block User",icon:s.jsx(S5,{}),danger:!0,onClick:()=>A(L)}],_=m.filter(L=>L.friendId.fullName.toLowerCase().includes(i.toLowerCase())||L.friendId.username.toLowerCase().includes(i.toLowerCase()));return y&&m.length===0?s.jsxs(Jd,{children:[s.jsxs(Hd,{children:[s.jsx(Jn,{title:"Friends",heading:"h3"}),s.jsxs(Pd,{children:[s.jsx(Zn,{placeholder:"Search for people"}),s.jsx(Vr,{onClick:()=>a(!0)})]})]}),s.jsx(MD,{children:s.jsx(jD,{children:"Loading friends..."})}),s.jsx(Zd,{title:"Add new friend",onClose:C,isOpen:e})]}):b?s.jsxs(Jd,{children:[s.jsxs(Hd,{children:[s.jsx(Jn,{title:"Friends",heading:"h3"}),s.jsxs(Pd,{children:[s.jsx(Zn,{placeholder:"Search for people"}),s.jsx(Vr,{onClick:()=>a(!0)})]})]}),s.jsxs(LD,{children:[s.jsxs(SD,{children:["Failed to load friends: ",b]}),s.jsx(CD,{onClick:x,children:"Retry"})]}),s.jsx(Zd,{title:"Add new friend",onClose:C,isOpen:e})]}):s.jsxs(Jd,{children:[s.jsxs(Hd,{children:[s.jsx(Jn,{title:"Friends",heading:"h3"}),s.jsxs(Pd,{children:[s.jsx(Zn,{placeholder:"Search for people",value:i,onInputChange:L=>f(L)}),s.jsx(Vr,{onClick:()=>a(!0)})]})]}),_.length===0?s.jsx(kD,{children:s.jsx(ED,{children:i?`No friends found matching "${i}"`:"No friends yet. Add some friends to start chatting!"})}):s.jsx(bD,{children:_.map(L=>s.jsxs(wD,{children:[s.jsxs(vD,{children:[s.jsxs(TD,{children:[s.jsx(bt,{image:L.friendId.avatar,status:L.friendId.isOnline?"online":"offline",showStatusCircle:!0,size:35}),s.jsx(ND,{children:L.friendId.fullName})]}),s.jsxs(xD,{children:[s.jsx(t4,{onClick:()=>E(L.friendId._id),children:s.jsx(ip,{})}),s.jsx(t4,{onClick:()=>d(c===L.friendId._id?null:L.friendId._id),children:s.jsx(Sl,{})})]})]}),s.jsx("div",{onClick:R=>R.stopPropagation(),children:s.jsx(Ma,{onClose:()=>d(null),isOpen:c===L.friendId._id,right:"1",items:G(L.friendId._id)})})]},L._id))}),s.jsx(Zd,{title:"Add new friend",onClose:C,isOpen:e})]})},Jd=h.div`
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
`,bD=h.div`
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 1000px) {
    padding: 0;
  }
`,wD=h.div`
  width: 100%;
  position: relative;
`,vD=h.div`
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
`,xD=h.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,t4=h.div`
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
`,MD=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
`,jD=h.div`
  color: ${({theme:e})=>e.text.secondary};
  font-size: var(--text-md);
`,LD=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  gap: 1rem;
`,SD=h.div`
  color: ${({theme:e})=>e.text.secondary};
  font-size: var(--text-md);
  text-align: center;
`,CD=h.button`
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
`,kD=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
`,ED=h.div`
  color: ${({theme:e})=>e.text.secondary};
  font-size: var(--text-md);
  text-align: center;
`,TD=h.div`
display: flex;
align-items: center;
gap: 1rem;
`,ND=h.div`
  font-weight: 400;
  font-size: var(--text-base);
  color: ${({theme:e})=>e.text.thirdly};
  @media (max-width: 1000px) {
    font-size: var(--text-sm);
  }
  text-transform: capitalize;
`,Fd=({title:e,onClose:a,isOpen:i})=>{const[f,c]=g.useState({name:"",description:"",isPrivate:!1,maxMembers:100}),[d,m]=g.useState({}),[y,b]=g.useState(!1),{createGroup:x}=ja(),v=()=>{const C={};return f.name.trim()?f.name.length<3?C.name="Group name must be at least 3 characters":f.name.length>100&&(C.name="Group name cannot exceed 100 characters"):C.name="Group name is required",f.description&&f.description.length>500&&(C.description="Description cannot exceed 500 characters"),f.maxMembers<2?C.maxMembers="Group must allow at least 2 members":f.maxMembers>1e3&&(C.maxMembers="Group cannot exceed 1000 members"),m(C),Object.keys(C).length===0},M=C=>{const{name:E,value:I,type:A}=C.target,G=C.target.checked;c(_=>({..._,[E]:A==="checkbox"?G:A==="number"?parseInt(I)||0:I})),d[E]&&m(_=>({..._,[E]:""}))},j=async C=>{if(C.preventDefault(),!!v()){b(!0);try{await x(f.name.trim(),f.description.trim()||void 0,f.isPrivate),c({name:"",description:"",isPrivate:!1,maxMembers:100}),m({}),a()}catch(E){m({general:E.message||"Failed to create group"})}finally{b(!1)}}},k=()=>{y||(c({name:"",description:"",isPrivate:!1,maxMembers:100}),m({}),a())},N=f.name.trim().length>=3&&Object.keys(d).length===0;return s.jsx(Zf,{title:e,onClose:k,isOpen:i,children:s.jsx(ID,{children:s.jsxs("form",{onSubmit:j,children:[d.general&&s.jsx(DD,{children:d.general}),s.jsxs(AD,{htmlFor:"upload-group-image",children:[s.jsx(Ib,{children:s.jsx(Z0,{})}),s.jsx(zD,{children:s.jsx("span",{children:"Add group image (optional)"})}),s.jsx("input",{type:"file",id:"upload-group-image",name:"upload-group-image",accept:"image/*",disabled:y})]}),s.jsxs(qd,{children:[s.jsx(Vd,{htmlFor:"group-name",children:"Group name *"}),s.jsx(n4,{placeholder:"Enter group name",type:"text",name:"name",id:"group-name",value:f.name,onChange:M,disabled:y,hasError:!!d.name}),d.name&&s.jsx(Xd,{children:d.name})]}),s.jsxs(qd,{children:[s.jsx(Vd,{htmlFor:"group-description",children:"Description (optional)"}),s.jsx(RD,{placeholder:"What's this group about?",name:"description",id:"group-description",value:f.description,onChange:M,disabled:y,rows:3,hasError:!!d.description}),d.description&&s.jsx(Xd,{children:d.description})]}),s.jsxs(OD,{children:[s.jsxs(BD,{children:[s.jsxs(UD,{children:[s.jsxs(_D,{children:[s.jsx(YD,{isPrivate:f.isPrivate,children:f.isPrivate?s.jsx(Ly,{}):s.jsx(w5,{})}),f.isPrivate?"Private Group":"Public Group"]}),s.jsx(QD,{children:f.isPrivate?"Only invited members can join this group":"Anyone can discover and join this group"})]}),s.jsxs(GD,{children:[s.jsx("input",{type:"checkbox",name:"isPrivate",checked:f.isPrivate,onChange:M,disabled:y}),s.jsx($D,{})]})]}),s.jsxs(qd,{children:[s.jsx(Vd,{htmlFor:"max-members",children:"Maximum members (2-1000)"}),s.jsx(n4,{type:"number",name:"maxMembers",id:"max-members",value:f.maxMembers,onChange:M,disabled:y,min:"2",max:"1000",hasError:!!d.maxMembers}),d.maxMembers&&s.jsx(Xd,{children:d.maxMembers})]})]}),s.jsx(ZD,{children:s.jsxs(JD,{children:[s.jsx(yt,{onClick:k,variant:"cancel",type:"button",title:"Cancel",disabled:y}),s.jsx(yt,{variant:"primary",type:"submit",title:y?"Creating...":"Create Group",disabled:y||!N})]})})]})})})},ID=h.div`
  width: 100%;
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;

  }
`,DD=h.div`
  background-color: #fee2e2;
  border: 1px solid #fecaca;
  color: #dc2626;
  padding: 1rem 1.5rem;
  border-radius: 0.8rem;
  font-size: var(--text-sm);
  text-align: center;
`,Ib=h.div`
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
`,AD=h.label`
  width: max-content;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  cursor: pointer;
  
  input {
    display: none;
  }
  
  &:hover ${Ib} {
    background-color: ${({theme:e})=>e.background.secondary};
    border-color: var(--blue);
  }
`,zD=h.div`
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
`,n4=h.input`
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
`,RD=h.textarea`
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
`,OD=h.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
  background-color: ${({theme:e})=>e.background.secondary};
  border-radius: 0.8rem;
  border: 1px solid ${({theme:e})=>e.border.secondary};
`,BD=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`,UD=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
`,_D=h.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: var(--text-md);
  font-weight: 500;
  color: ${({theme:e})=>e.text.primary};
`,YD=h.div`
  width: 2rem;
  height: 2rem;
  color: ${({isPrivate:e})=>e?"#f59e0b":"#10b981"};
  
  svg {
    width: 100%;
    height: 100%;
  }
`,QD=h.div`
  font-size: var(--text-sm);
  color: ${({theme:e})=>e.text.secondary};
  line-height: 1.4;
`,GD=h.label`
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
`,$D=h.span`
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
`,ZD=h.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  /* border-top: 1px solid ${({theme:e})=>e.border.secondary}; */
`,JD=h.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`,a4=({})=>{const[e,a]=g.useState(!1),[i,f]=g.useState(""),[c,d]=g.useState(null),{groupId:m}=b4(),y=Yf(),{groups:b,loading:x,error:v,loadGroups:M,leaveGroup:j,setCurrentGroup:k,currentGroup:N}=ja(),{openChat:C}=li();g.useEffect(()=>{M()},[]),g.useEffect(()=>{m&&k(m)},[m,k]);const E=()=>{a(!1)},I=L=>{k(L),window.innerWidth<=700&&C&&C(),y(`/app/groups/${L}`)},A=async L=>{try{await j(L),d(null),N===L&&(k(null),y("/app/groups"))}catch(R){console.error("Failed to leave group:",R)}},G=L=>[{label:"Group Settings",icon:s.jsx(If,{}),onClick:()=>{d(null),alert("Group settings not implemented yet")}},{label:"Leave Group",icon:s.jsx(ky,{}),danger:!0,onClick:()=>A(L)}],_=b.filter(L=>L.name.toLowerCase().includes(i.toLowerCase()));return x&&b.length===0?s.jsxs(Wd,{children:[s.jsxs(Kd,{children:[s.jsx(Jn,{title:"Groups",heading:"h3"}),s.jsxs(e0,{children:[s.jsx(Zn,{placeholder:"Search for groups"}),s.jsx(Vr,{onClick:()=>a(!0)})]})]}),s.jsx(oA,{children:s.jsx(sA,{children:"Loading groups..."})}),s.jsx(Fd,{title:"Create new group",onClose:E,isOpen:e})]}):v?s.jsxs(Wd,{children:[s.jsxs(Kd,{children:[s.jsx(Jn,{title:"Groups",heading:"h3"}),s.jsxs(e0,{children:[s.jsx(Zn,{placeholder:"Search for groups"}),s.jsx(Vr,{onClick:()=>a(!0)})]})]}),s.jsxs(lA,{children:[s.jsxs(cA,{children:["Failed to load groups: ",v]}),s.jsx(uA,{onClick:M,children:"Retry"})]}),s.jsx(Fd,{title:"Create new group",onClose:E,isOpen:e})]}):s.jsxs(Wd,{children:[s.jsxs(Kd,{children:[s.jsx(Jn,{title:"Groups",heading:"h3"}),s.jsxs(e0,{children:[s.jsx(Zn,{placeholder:"Search for groups",value:i,onInputChange:L=>f(L)}),s.jsx(Vr,{onClick:()=>a(!0)})]})]}),_.length===0?s.jsxs(aA,{children:[s.jsx(rA,{children:s.jsx(Nf,{})}),s.jsx(iA,{children:i?`No groups found matching "${i}"`:"No groups yet. Create a group to start collaborating!"}),!i&&s.jsx(fA,{onClick:()=>a(!0),children:"Create Your First Group"})]}):s.jsx(HD,{children:_.map(L=>s.jsxs(PD,{children:[s.jsxs(FD,{onClick:()=>I(L._id),isActive:N===L._id||m===L._id,children:[s.jsx(qD,{children:L.avatar?s.jsx(bt,{image:L.avatar,userName:L.name,size:40,isGroup:!0}):s.jsx(VD,{children:s.jsx(Nf,{})})}),s.jsxs(XD,{children:[s.jsx(WD,{children:L.name}),s.jsx(KD,{children:L.isPrivate&&s.jsx(eA,{children:s.jsx(Ly,{})})})]}),s.jsx(tA,{onClick:R=>R.stopPropagation(),children:s.jsx(nA,{onClick:()=>d(c===L._id?null:L._id),children:s.jsx(Sl,{})})})]}),s.jsx("div",{onClick:R=>R.stopPropagation(),children:s.jsx(Ma,{onClose:()=>d(null),isOpen:c===L._id,right:"1",items:G(L._id)})})]},L._id))}),s.jsx(Fd,{title:"Create new group",onClose:E,isOpen:e})]})},Wd=h.div`
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
`,HD=h.div`
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  gap:2px;
  @media (max-width: 1000px) {
    padding: 0;
  }
`,PD=h.div`
  width: 100%;
  position: relative;
`,FD=h.div`
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
`,qD=h.div`
  flex-shrink: 0;
`,VD=h.div`
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
    color: ${({theme:e})=>e.text.placeholder};
  }
`,XD=h.div`
  flex: 1;
  display: flex;
  gap: 0.4rem;
  margin-left: 1rem;
  min-width: 0;
`,WD=h.h4`
  font-size: var(--text-base);
  color: ${({theme:e})=>e.text.primary};
  font-weight: 400;
  margin: 0;
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,KD=h.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: var(--text-sm);
  color: ${({theme:e})=>e.text.secondary};
`,eA=h.span`
  color: ${({theme:e})=>e.text.placeholder};
display: flex;
align-items: center;
justify-content: center;
padding-top: 2px;
  svg {
    width: 1.3rem;
  }
`,tA=h.div`
  display: flex;
  align-items: center;
`,nA=h.div`
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
`,aA=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  gap: 1.5rem;
`,rA=h.div`
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
`,iA=h.div`
  color: ${({theme:e})=>e.text.secondary};
  font-size: var(--text-md);
  text-align: center;
  line-height: 1.5;
`,fA=h.button`
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
`,oA=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
`,sA=h.div`
  color: ${({theme:e})=>e.text.secondary};
  font-size: var(--text-md);
`,lA=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  gap: 1rem;
`,cA=h.div`
  color: ${({theme:e})=>e.text.secondary};
  font-size: var(--text-md);
  text-align: center;
`,uA=h.button`
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
`,dA=()=>{const[e]=g.useState({id:"234567834567",name:"Heisenberg",teams:[{id:"34567876543",name:"Frontend Team",channels:[{id:"chan-fe-gen",name:"general"},{id:"chan-fe-ui",name:"ui-design"},{id:"chan-fe-bugs",name:"bug-reports"}]},{id:"456787654567",name:"Backend Team",channels:[{id:"chan-be-gen",name:"general"},{id:"chan-be-api",name:"api-development"},{id:"chan-be-db",name:"database"}]},{id:"789012345678",name:"DevOps Team",channels:[{id:"chan-do-gen",name:"general"},{id:"chan-do-deploy",name:"deployment"},{id:"chan-do-test",name:"testing"}]}]}),[a,i]=g.useState(()=>{try{const c=localStorage.getItem("o-c");return c?JSON.parse(c):(e==null?void 0:e.teams.map(d=>d.id))||[]}catch(c){return console.warn("Error reading from localStorage:",c),(e==null?void 0:e.teams.map(d=>d.id))||[]}}),f=c=>{i(d=>{const m=d.includes(c)?d.filter(y=>y!==c):[...d,c];try{localStorage.setItem("o-c",JSON.stringify(m))}catch(y){console.warn("Error saving to localStorage:",y)}return m})};return s.jsxs(hA,{children:[s.jsxs(mA,{children:[s.jsx(Jn,{title:`${e==null?void 0:e.name}`,heading:"h3"}),s.jsx(Zn,{placeholder:"Search in Heisenberg group"})]}),s.jsx(gA,{children:s.jsx(pA,{children:e==null?void 0:e.teams.map(c=>s.jsxs(bA,{children:[s.jsxs(vA,{onClick:()=>f(c.id),children:[s.jsxs(wA,{children:[s.jsx(xA,{children:s.jsx("span",{children:c.name})}),s.jsx(Ts,{children:s.jsx(cS,{})})]}),s.jsxs(yA,{children:[s.jsx(Ts,{children:s.jsx(If,{})}),s.jsx(Ts,{children:s.jsx(dS,{})})]})]}),a.includes(c.id)&&s.jsx(MA,{children:s.jsx(jA,{children:c.channels.map(d=>s.jsx(LA,{children:s.jsxs(SA,{children:[s.jsxs(r4,{children:[s.jsx(x5,{}),s.jsx("span",{children:d.name})]}),s.jsx(r4,{children:s.jsx(Ts,{children:s.jsx(If,{})})})]})},d.id))})})]},c.id))})})]})},hA=h.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`,mA=h.div`
  background-color: ${({theme:e})=>e.background.primary};
  position: sticky;
  top: 0;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 20;
`,gA=h.div`
  /* width: 100%; */
  border-top: 0.5px solid ${({theme:e})=>e.border.primary};
  margin: 0 1.5rem 1.5rem 1.5rem;
  padding-top: 1.5rem;
`,pA=h.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,yA=h.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  svg {
    visibility: hidden;
    &:hover {
      color: ${({theme:e})=>e.text.primary};
    }
  }
`,bA=h.li`
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
`,wA=h.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`,Ts=h.div`
  color: ${({theme:e})=>e.text.thirdly};
  display: flex;
  align-items: center;
  svg {
    width: 1.5rem;
    transition: rotate 0.2s ease;
  }
`,vA=h.div`
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
`,xA=h.div`
  span {
    font-size: var(--text-md);
    color: ${({theme:e})=>e.text.thirdly};
  }
  svg {
    width: 2rem;
  }
`,MA=h.div`
  padding: 0.8rem;
`,jA=h.ul`
  display: flex;
  flex-direction: column;
  /* gap: 1.5rem; */
`,LA=h.li`
  list-style-type: none;
`,SA=h.a`
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
`,r4=h.a`
  width: max-content;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`,w1=({title:e,onClick:a})=>s.jsx(s.Fragment,{children:s.jsxs(CA,{children:[s.jsx(kA,{onClick:a,children:s.jsx(P5,{})}),s.jsx(EA,{children:s.jsx("h3",{children:e})})]})}),CA=h.div`
width: 100%;
display: grid;
grid-template-columns: repeat(8, 1fr);
  padding: 3rem;
  padding-bottom: 2rem;
   @media (max-width: 700px) {
    padding: 2rem 2rem 1rem 1rem;
  }
/* padding-bottom: 5rem; */

`,kA=h.div`
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
`,EA=h.div`
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
`,TA=({})=>{const{setOpenSettings:e}=Xf(),a=()=>{e&&e(!1)};return s.jsx(s.Fragment,{children:s.jsxs(NA,{children:[s.jsx(w1,{onClick:a,title:"Account"}),s.jsxs(IA,{children:[s.jsxs(f4,{children:[s.jsx(i4,{children:s.jsx("h5",{children:"Password"})}),s.jsx(o4,{children:s.jsx(yt,{onClick:()=>alert("Comming soon!!"),variant:"primary",title:"Change password",type:"button"})})]}),s.jsxs(f4,{children:[s.jsxs(i4,{children:[s.jsx("h5",{children:"Account Removal"}),s.jsx("p",{children:"Disabling your account means you can recover it at any time after taking this action."})]}),s.jsxs(o4,{children:[s.jsx(yt,{onClick:()=>alert("Comming soon!!"),variant:"danger",title:"Disable Account",type:"button"}),s.jsx(yt,{onClick:()=>alert("Comming soon!!"),variant:"danger",title:"Delete Account",type:"button"})]})]})]})]})})},NA=h.div`
  width: 100%;
`,IA=h.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  gap: 3rem;
  padding: 3rem;
   @media (max-width: 700px) {
    padding: 2rem;
  }
`,i4=h.div`
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
`,f4=h.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,o4=h.div`
  width: 100%;
  display: flex;
  gap: 1.5rem;
`,DA=()=>{const{setOpenSettings:e}=Xf(),{user:a,updateUser:i}=gt(),[f,c]=g.useState(!1),[d,m]=g.useState(""),[y,b]=g.useState(""),[x,v]=g.useState({fullName:(a==null?void 0:a.fullName)||"",jobTitle:(a==null?void 0:a.jobTitle)||"",biography:(a==null?void 0:a.biography)||""}),[M,j]=g.useState(!1);g.useEffect(()=>{if(a){const I={fullName:a.fullName,jobTitle:a.jobTitle||"",biography:a.biography||""};v(I)}},[a]),g.useEffect(()=>{if(a){const I=x.fullName!==a.fullName||x.jobTitle!==(a.jobTitle||"")||x.biography!==(a.biography||"");j(I)}},[x,a]);const k=()=>{e&&e(!1)},N=I=>{const{name:A,value:G}=I.target;v(_=>({..._,[A]:G})),m(""),b("")},C=async I=>{var A,G;I.preventDefault(),c(!0),m(""),b("");try{const _=await Mf.updateProfile(x);i(_.data.user),b("Profile updated successfully!"),j(!1)}catch(_){m(((G=(A=_.response)==null?void 0:A.data)==null?void 0:G.message)||"Failed to update profile")}finally{c(!1)}},E=()=>{a&&(v({fullName:a.fullName,jobTitle:a.jobTitle||"",biography:a.biography||""}),j(!1),m(""),b(""))};return a?s.jsxs(AA,{children:[s.jsx(w1,{onClick:k,title:"Profile"}),s.jsxs(zA,{children:[s.jsxs(BA,{children:[s.jsx(RA,{children:s.jsxs(OA,{htmlFor:"upload-image",children:[s.jsx(Z0,{}),s.jsx("span",{children:"Update Avatar"}),s.jsx("input",{type:"file",name:"upload-image",id:"upload-image"})]})}),s.jsx("form",{onSubmit:C,children:s.jsxs(UA,{children:[d&&s.jsx(s4,{type:"error",children:d}),y&&s.jsx(s4,{type:"success",children:y}),s.jsxs(t0,{children:[s.jsx(n0,{htmlFor:"fullName",children:"Display Name"}),s.jsx(l4,{type:"text",name:"fullName",id:"fullName",value:x.fullName,onChange:N,placeholder:"Display Name",disabled:f,required:!0})]}),s.jsxs(t0,{children:[s.jsx(n0,{htmlFor:"jobTitle",children:"Job Title"}),s.jsx(l4,{type:"text",name:"jobTitle",id:"jobTitle",value:x.jobTitle,onChange:N,placeholder:"Job Title",disabled:f})]}),s.jsxs(t0,{children:[s.jsx(n0,{htmlFor:"biography",children:"Bio"}),s.jsx(_A,{name:"biography",id:"biography",value:x.biography,onChange:N,placeholder:"Tell us about yourself...",disabled:f})]}),s.jsx(FA,{children:s.jsxs(qA,{children:[s.jsx(yt,{onClick:E,variant:"cancel",type:"button",title:"Cancel",disabled:f||!M}),s.jsx(yt,{variant:"primary",type:"submit",title:f?"Updating...":"Update",disabled:f||!M})]})})]})})]}),s.jsx(YA,{children:s.jsx(QA,{children:s.jsxs(GA,{children:[s.jsxs($A,{children:[s.jsx(JA,{children:a.avatar?s.jsx("img",{src:a.avatar,alt:a.fullName}):s.jsx(HA,{children:a.fullName.charAt(0).toUpperCase()})}),s.jsx(ZA,{})]}),s.jsxs(PA,{children:[s.jsx("h4",{children:x.fullName||a.fullName}),s.jsxs("span",{children:["@",a.username]})]})]})})})]})]}):s.jsx("div",{children:"Loading..."})},AA=h.div`
  width: 100%;
`,zA=h.div`
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
`,s4=h.div`
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
`,RA=h.div`
  width: 100%;
  padding-bottom: 2rem;
`,OA=h.label`
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
`,BA=h.div`
  width: 100%;
`,UA=h.div`
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
`,l4=h.input`
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
`,_A=h.textarea`
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
`,YA=h.div`
  width: 100%;
  height: max-content;
  background-color: ${({theme:e})=>e.background.primary};
  border: 1px solid ${({theme:e})=>e.border.secondary};
  border-radius: 0.8rem;
  overflow: hidden;
  
  @media (max-width: 1000px) {
    display: none;
  }
`,QA=h.div`
  width: 100%;
  height: 10rem;
  background: var(--blue);
  position: relative;
  margin-bottom: 14rem;
`,GA=h.div`
  position: absolute;
  top: 5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`,$A=h.div`
  width: 11rem;
  height: 11rem;
  border-radius: 100%;
  background-color: ${({theme:e})=>e.background.primary};
  padding: 1rem;
  position: relative;
`,ZA=h.div`
  width: 135%;
  height: 4rem;
  border-radius: 3rem;
  background-color: ${({theme:e})=>e.background.primary};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
`,JA=h.div`
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
`,HA=h.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-xxxl);
  font-weight: 600;
  color: white;
  background-color: var(--blue);
`,PA=h.div`
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
`,FA=h.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
`,qA=h.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`,VA={"minimal-white":xb,"glass-night":kb,light:wb,"clean-light":vb,"modern-sky":Mb,"soft-blush":jb,dark:y1,"clean-dark":Lb,"modern-charcoal":Sb,"neo-dark":Cb},XA=()=>{const{themeMode:e,switchTheme:a}=b1(),{setOpenSettings:i}=Xf(),f=()=>{i&&i(!1)};return s.jsxs(WA,{children:[s.jsx(w1,{onClick:f,title:"Appearance"}),s.jsx(KA,{children:s.jsxs(tz,{children:[s.jsxs(ez,{children:[s.jsx("h5",{children:"Theme"}),s.jsx("p",{children:"Adjust the color of the interface for better visibility."})]}),s.jsx(nz,{children:s.jsx(az,{children:Object.entries(VA).map(([c,d])=>s.jsx(rz,{onClick:()=>a(c),selected:e===c,mode:d.background.primary,title:c,children:e===c&&s.jsx(iz,{children:s.jsx(fS,{})})},c))})})]})})]})},WA=h.div`
  width: 100%;
`,KA=h.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 3rem;
   @media (max-width: 700px) {
    padding: 2rem;
  }
`,ez=h.div`
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
`,tz=h.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,nz=h.div`
  width: 40rem;
  display: flex;
  gap: 1.5rem;
  @media (max-width: 700px) {
    width: 100%;
  }
`,az=h.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.5rem;
  padding-top: 1rem;
  @media (max-width: 700px) {
      justify-content: center;
  gap: 1rem;

    }
`,rz=h.div`
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
`,iz=h.div`
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
`,fz=({})=>s.jsx(s.Fragment,{children:s.jsxs(oz,{children:[s.jsx(sz,{children:s.jsx("h3",{children:"Languages"})}),s.jsx(lz,{})]})}),oz=h.div`
  width: 100%;
`,sz=h.div`
  width: 100%;
  padding-bottom: 5rem;
  h3 {
    font-weight: 500;
    font-size: var(--text-xxl);
    line-height: 1;
    color: ${({theme:e})=>e.text.primary};
  }
`,lz=h.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`,cz=({})=>s.jsx(s.Fragment,{children:s.jsxs(uz,{children:[s.jsx(dz,{children:s.jsx("h3",{children:"Notifications"})}),s.jsx(hz,{})]})}),uz=h.div`
  width: 100%;
`,dz=h.div`
  width: 100%;
  padding-bottom: 5rem;
  h3 {
    font-weight: 500;
    font-size: var(--text-xxl);
    line-height: 1;
    color: ${({theme:e})=>e.text.primary};
  }
`,hz=h.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`,mz=()=>{const[e,a]=g.useState(""),[i,f]=g.useState(""),[c,d]=g.useState(!1),[m,y]=g.useState(""),[b,x]=g.useState(!1),{login:v}=gt(),M=Yf(),j=async k=>{var N,C;k.preventDefault(),y(""),x(!0);try{await v({email:e,password:i}),M("/app/@me")}catch(E){y(((C=(N=E.response)==null?void 0:N.data)==null?void 0:C.message)||"Login failed. Please try again.")}finally{x(!1)}};return s.jsx(gz,{children:s.jsx(pz,{children:s.jsxs(yz,{children:[s.jsxs(bz,{children:[s.jsx(yl,{}),s.jsxs(wz,{children:[s.jsx("h1",{children:"Welcome back!"}),s.jsx("p",{children:"We're so excited to see you again!"})]})]}),s.jsxs(vz,{onSubmit:j,children:[m&&s.jsx(xz,{children:s.jsx("span",{children:m})}),s.jsxs(c4,{children:[s.jsxs(u4,{htmlFor:"email",children:["Email ",s.jsx("span",{children:"*"})]}),s.jsx(d4,{type:"email",id:"email",value:e,onChange:k=>a(k.target.value),required:!0,disabled:b,placeholder:"Enter your email"})]}),s.jsxs(c4,{children:[s.jsxs(u4,{htmlFor:"password",children:["Password ",s.jsx("span",{children:"*"})]}),s.jsxs(Mz,{children:[s.jsx(d4,{type:c?"text":"password",id:"password",value:i,onChange:k=>f(k.target.value),required:!0,disabled:b,placeholder:"Enter your password"}),s.jsx(jz,{type:"button",onClick:()=>d(!c),disabled:b,children:c?s.jsx(y0,{}):s.jsx(b0,{})})]})]}),s.jsx(Lz,{children:s.jsx($e,{onClick:()=>alert("coming soon!!"),to:"/forgot-password",children:"Forgot your password?"})}),s.jsx(Sz,{children:b?s.jsxs(Cz,{children:[s.jsx(ll,{}),s.jsx("span",{children:"Signing in..."})]}):s.jsx(yt,{full:!0,type:"submit",variant:"primary",title:"Log In",disabled:b||!e||!i})}),s.jsxs(kz,{children:["Need an account? ",s.jsx($e,{to:"/auth/register",children:"Register"})]})]})]})})})},gz=h.div`
  width: 100%;
  height: 100svh;
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
`,pz=h.div`
  width: 100%;
  max-width: 480px;
  position: relative;
  z-index: 45678;
`,yz=h.div`
  background-color: ${({theme:e})=>e.background.secondary};
  border-radius: 1.6rem;
  padding: 3rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  border: 1px solid ${({theme:e})=>e.border.primary};

  @media (max-width: 600px) {
    padding: 3rem 2rem;
    border-radius: 1.2rem;
  }
`,bz=h.div`
  text-align: center;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`,wz=h.div`
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
`,vz=h.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,xz=h.div`
  background-color: #fee2e2;
  border: 1px solid #fecaca;
  color: #dc2626;
  padding: 1rem 1.5rem;
  border-radius: 0.8rem;
  font-size: var(--text-sm);
  text-align: center;
`,c4=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`,u4=h.label`
  font-size: var(--text-sm);
  font-weight: 600;
  color: ${({theme:e})=>e.text.thirdly};
  text-transform: capitalize;
  letter-spacing: 0.5px;

  span {
    color: #ef4444;
  }
`,d4=h.input`
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
`,Mz=h.div`
  position: relative;
  display: flex;
  align-items: center;
`,jz=h.button`
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
`,Lz=h.div`

  a {
    color: var(--blue);
    text-decoration: none;
    font-size: var(--text-base);
    font-weight: 500;
    &:hover {
      text-decoration: underline;
    }
  }
`,Sz=h.div`
  margin-top: 1rem;
`,Cz=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  color: ${({theme:e})=>e.text.secondary};

  span {
    font-size: var(--text-md);
  }
`,kz=h.div`
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
`,Ez=()=>{const[e,a]=g.useState({username:"",email:"",fullName:"",password:"",confirmPassword:""}),[i,f]=g.useState(!1),[c,d]=g.useState(!1),[m,y]=g.useState({}),[b,x]=g.useState(!1),{register:v}=gt(),M=Yf(),j=()=>{const E={};return e.username?e.username.length<3?E.username="Username must be at least 3 characters":e.username.length>20?E.username="Username cannot exceed 20 characters":/^[a-zA-Z0-9_]+$/.test(e.username)||(E.username="Username can only contain letters, numbers, and underscores"):E.username="Username is required",e.email?/^\S+@\S+\.\S+$/.test(e.email)||(E.email="Please enter a valid email address"):E.email="Email is required",e.fullName?e.fullName.length>50&&(E.fullName="Full name cannot exceed 50 characters"):E.fullName="Full name is required",e.password?e.password.length<8&&(E.password="Password must be at least 8 characters"):E.password="Password is required",e.confirmPassword?e.password!==e.confirmPassword&&(E.confirmPassword="Passwords do not match"):E.confirmPassword="Please confirm your password",y(E),Object.keys(E).length===0},k=E=>{const{name:I,value:A}=E.target;a(G=>({...G,[I]:A})),m[I]&&y(G=>({...G,[I]:""}))},N=async E=>{var I,A;if(E.preventDefault(),!!j()){x(!0);try{const{confirmPassword:G,..._}=e;await v(_),M("/app/@me")}catch(G){(A=(I=G.response)==null?void 0:I.data)!=null&&A.message?y({general:G.response.data.message}):y({general:"Registration failed. Please try again."})}finally{x(!1)}}},C=Object.values(e).every(E=>E.trim()!=="")&&e.password===e.confirmPassword&&Object.keys(m).length===0;return s.jsx(Tz,{children:s.jsx(Nz,{children:s.jsxs(Iz,{children:[s.jsxs(Dz,{children:[s.jsx(yl,{}),s.jsxs(Az,{children:[s.jsx("h1",{children:"Create an account"}),s.jsx("p",{children:"Join Mendam and start connecting with your team!"})]})]}),s.jsxs(zz,{onSubmit:N,children:[m.general&&s.jsx(Rz,{children:s.jsx("span",{children:m.general})}),s.jsxs(yf,{children:[s.jsxs(bf,{htmlFor:"fullName",children:["Full Name ",s.jsx("span",{children:"*"})]}),s.jsx(wf,{type:"text",id:"fullName",name:"fullName",value:e.fullName,onChange:k,disabled:b,placeholder:"Enter your full name",hasError:!!m.fullName}),m.fullName&&s.jsx(vf,{children:m.fullName})]}),s.jsxs(h4,{children:[s.jsxs(yf,{children:[s.jsxs(bf,{htmlFor:"email",children:["Email ",s.jsx("span",{children:"*"})]}),s.jsx(wf,{type:"email",id:"email",name:"email",value:e.email,onChange:k,disabled:b,placeholder:"Enter your email",hasError:!!m.email}),m.email&&s.jsx(vf,{children:m.email})]}),s.jsxs(yf,{children:[s.jsxs(bf,{htmlFor:"username",children:["Username ",s.jsx("span",{children:"*"})]}),s.jsx(wf,{type:"text",id:"username",name:"username",value:e.username,onChange:k,disabled:b,placeholder:"Enter your username",hasError:!!m.username}),m.username&&s.jsx(vf,{children:m.username})]})]}),s.jsxs(h4,{children:[s.jsxs(yf,{children:[s.jsxs(bf,{htmlFor:"password",children:["Password ",s.jsx("span",{children:"*"})]}),s.jsxs(m4,{children:[s.jsx(wf,{type:i?"text":"password",id:"password",name:"password",value:e.password,onChange:k,disabled:b,placeholder:"Enter your password",hasError:!!m.password}),s.jsx(g4,{type:"button",onClick:()=>f(!i),disabled:b,children:i?s.jsx(y0,{}):s.jsx(b0,{})})]}),m.password&&s.jsx(vf,{children:m.password})]}),s.jsxs(yf,{children:[s.jsxs(bf,{htmlFor:"confirmPassword",children:["Confirm Password ",s.jsx("span",{children:"*"})]}),s.jsxs(m4,{children:[s.jsx(wf,{type:c?"text":"password",id:"confirmPassword",name:"confirmPassword",value:e.confirmPassword,onChange:k,disabled:b,placeholder:"Confirm your password",hasError:!!m.confirmPassword}),s.jsx(g4,{type:"button",onClick:()=>d(!c),disabled:b,children:c?s.jsx(y0,{}):s.jsx(b0,{})})]}),m.confirmPassword&&s.jsx(vf,{children:m.confirmPassword})]})]}),s.jsx(Oz,{children:b?s.jsxs(Bz,{children:[s.jsx(ll,{}),s.jsx("span",{children:"Creating account..."})]}):s.jsx(yt,{full:!0,type:"submit",variant:"primary",title:"Continue",disabled:b||!C})}),s.jsxs(Uz,{children:["Already have an account? ",s.jsx($e,{to:"/auth/login",children:"Log In"})]})]})]})})})},Tz=h.div`
  width: 100%;
  min-height: 100svh;
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
`,Nz=h.div`
  width: 100%;
  max-width: 600px;
  position: relative;
  z-index: 45678;
`,Iz=h.div`
  background-color: ${({theme:e})=>e.background.secondary};
  border-radius: 1.6rem;
  padding: 3rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  border: 1px solid ${({theme:e})=>e.border.primary};

  @media (max-width: 600px) {
    padding: 3rem 2rem;
    border-radius: 1.2rem;
  }
`,Dz=h.div`
  text-align: center;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`,Az=h.div`
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
`,zz=h.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Rz=h.div`
  background-color: #fee2e2;
  border: 1px solid #fecaca;
  color: #dc2626;
  padding: 1rem 1.5rem;
  border-radius: 0.8rem;
  font-size: var(--text-sm);
  text-align: center;
`,h4=h.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,yf=h.div`
  display: grid;
  flex-direction: column;
  gap: 0.8rem;
`,bf=h.label`
  font-size: var(--text-sm);
  font-weight: 600;
  color: ${({theme:e})=>e.text.thirdly};
  text-transform: capitalize;
  letter-spacing: 0.5px;

  span {
    color: #ef4444;
  }
`,wf=h.input`
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
`,m4=h.div`
  position: relative;
  display: flex;
  align-items: center;
`,g4=h.button`
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
`,vf=h.span`
  color: #ef4444;
  font-size: var(--text-xs);
  margin-top: 0.4rem;
`,Oz=h.div`
  margin-top: 1rem;
`,Bz=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  color: ${({theme:e})=>e.text.secondary};

  span {
    font-size: var(--text-md);
  }
`,Uz=h.div`
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
`,p4=({children:e})=>{const{isAuthenticated:a,loading:i}=gt(),f=cl();return i?s.jsx(_z,{children:s.jsx("svg",{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 66.59 63.66",width:70,height:70,children:s.jsx(Yz,{d:"M50,70.82c-.13-.51-.28-1.13-.47-1.74A29,29,0,0,0,45,60.79a70.83,70.83,0,0,0-5.71-6.41,59.7,59.7,0,0,1-9.34-12.16c-.37-.67-.69-1.37-1.06-2.1-.06.12-.12.21-.17.31a39.53,39.53,0,0,0-3.13,10A25.62,25.62,0,0,0,27.66,66a32.27,32.27,0,0,0,7.45,9.79A52.47,52.47,0,0,0,43,81.64l.21.14c-1.85.11-8.38-2.61-11.73-4.86a33.27,33.27,0,0,1-9-9,32.14,32.14,0,0,1-5-11.7,33.2,33.2,0,0,1,21-38c-.55.66-1.1,1.29-1.61,1.95a14.4,14.4,0,0,0-2.76,5.58A11.27,11.27,0,0,0,34.93,33a39,39,0,0,0,6.27,9.26C42.88,44.15,44.63,46,46.26,48a20.22,20.22,0,0,1,3.67,6.42s0,.05.07.09c.29-.67.54-1.34.85-2a30.15,30.15,0,0,1,5-7A79.35,79.35,0,0,0,62,38.22a28.19,28.19,0,0,0,3.49-6.28,10.94,10.94,0,0,0-1-9.84c-.82-1.38-1.86-2.63-2.7-3.81C72.49,21.9,83.66,33.71,83.28,50.08a33.12,33.12,0,0,1-26.5,31.75l1.84-1.2a42.78,42.78,0,0,0,11-10.08,25.92,25.92,0,0,0,4.94-11.64A28.44,28.44,0,0,0,73.38,46c-.62-2-1.4-3.93-2.11-5.89l-.2-.06a1,1,0,0,1,0,.18A40.08,40.08,0,0,1,65.43,49c-2.17,2.71-4.57,5.21-7,7.71a35.26,35.26,0,0,0-7,10.05C50.83,68.11,50.42,69.52,50,70.82Z",transform:"translate(-16.71 -18.17)"})})}):a?s.jsx(s.Fragment,{children:e}):s.jsx(I0,{to:"/auth/login",state:{from:f},replace:!0})},_z=h.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100svh;
  background: ${({theme:e})=>e.background.primary};
`,Yz=h.path`
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
`;const Qz=()=>s.jsx(ev,{children:s.jsxs(tv,{children:[s.jsx(dt,{path:"/",element:s.jsx(i5,{})}),s.jsx(dt,{path:"/auth/login",element:s.jsx(y4,{children:s.jsx(mz,{})})}),s.jsx(dt,{path:"/auth/register",element:s.jsx(y4,{children:s.jsx(Ez,{})})}),s.jsxs(dt,{path:"/app",element:s.jsx(p4,{children:s.jsx(gI,{})}),children:[s.jsx(dt,{path:"@me",element:s.jsx(UI,{})}),s.jsx(dt,{path:"friends",element:s.jsx(yD,{})}),s.jsx(dt,{path:"groups",element:s.jsx(a4,{})}),s.jsx(dt,{path:"groups/:groupId",element:s.jsx(a4,{})}),s.jsx(dt,{path:"channel/:id",element:s.jsx(dA,{})})]}),s.jsxs(dt,{path:"/app/settings",element:s.jsx(p4,{children:s.jsx(EI,{})}),children:[s.jsx(dt,{path:"account",element:s.jsx(TA,{})}),s.jsx(dt,{path:"profile",element:s.jsx(DA,{})}),s.jsx(dt,{path:"appearance",element:s.jsx(XA,{})}),s.jsx(dt,{path:"languages",element:s.jsx(fz,{})}),s.jsx(dt,{path:"notifications",element:s.jsx(cz,{})})]}),s.jsx(dt,{path:"*",element:s.jsx(I0,{to:"/",replace:!0})})]})}),y4=({children:e})=>{const{isAuthenticated:a,loading:i}=gt();return i?s.jsx(Gz,{children:s.jsx("svg",{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 66.59 63.66",width:70,height:70,children:s.jsx($z,{d:"M50,70.82c-.13-.51-.28-1.13-.47-1.74A29,29,0,0,0,45,60.79a70.83,70.83,0,0,0-5.71-6.41,59.7,59.7,0,0,1-9.34-12.16c-.37-.67-.69-1.37-1.06-2.1-.06.12-.12.21-.17.31a39.53,39.53,0,0,0-3.13,10A25.62,25.62,0,0,0,27.66,66a32.27,32.27,0,0,0,7.45,9.79A52.47,52.47,0,0,0,43,81.64l.21.14c-1.85.11-8.38-2.61-11.73-4.86a33.27,33.27,0,0,1-9-9,32.14,32.14,0,0,1-5-11.7,33.2,33.2,0,0,1,21-38c-.55.66-1.1,1.29-1.61,1.95a14.4,14.4,0,0,0-2.76,5.58A11.27,11.27,0,0,0,34.93,33a39,39,0,0,0,6.27,9.26C42.88,44.15,44.63,46,46.26,48a20.22,20.22,0,0,1,3.67,6.42s0,.05.07.09c.29-.67.54-1.34.85-2a30.15,30.15,0,0,1,5-7A79.35,79.35,0,0,0,62,38.22a28.19,28.19,0,0,0,3.49-6.28,10.94,10.94,0,0,0-1-9.84c-.82-1.38-1.86-2.63-2.7-3.81C72.49,21.9,83.66,33.71,83.28,50.08a33.12,33.12,0,0,1-26.5,31.75l1.84-1.2a42.78,42.78,0,0,0,11-10.08,25.92,25.92,0,0,0,4.94-11.64A28.44,28.44,0,0,0,73.38,46c-.62-2-1.4-3.93-2.11-5.89l-.2-.06a1,1,0,0,1,0,.18A40.08,40.08,0,0,1,65.43,49c-2.17,2.71-4.57,5.21-7,7.71a35.26,35.26,0,0,0-7,10.05C50.83,68.11,50.42,69.52,50,70.82Z",transform:"translate(-16.71 -18.17)"})})}):a?s.jsx(I0,{to:"/app/@me",replace:!0}):s.jsx(s.Fragment,{children:e})},Gz=h.div`
  width: 100%;
  height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e})=>e.background.primary};
`,$z=h.path`
  fill: ${({theme:e})=>e.text.placeholder};
`,Zz=Qf`

@font-face {
    font-family: 'Inter';
    src: url('/assets/fonts/Inter28pt-Medium.eot');
    src: url('/assets/fonts/Inter28pt-Medium.eot?#iefix') format('embedded-opentype'),
        url('/assets/fonts/Inter28pt-Medium.woff2') format('woff2'),
        url('/assets/fonts/Inter28pt-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('/assets/fonts/Inter28pt-ExtraLight.eot');
    src: url('/assets/fonts/Inter28pt-ExtraLight.eot?#iefix') format('embedded-opentype'),
        url('/assets/fonts/Inter28pt-ExtraLight.woff2') format('woff2'),
        url('/assets/fonts/Inter28pt-ExtraLight.woff') format('woff');
    font-weight: 200;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('/assets/fonts/Inter28pt-ExtraBoldItalic.eot');
    src: url('/assets/fonts/Inter28pt-ExtraBoldItalic.eot?#iefix') format('embedded-opentype'),
        url('/assets/fonts/Inter28pt-ExtraBoldItalic.woff2') format('woff2'),
        url('/assets/fonts/Inter28pt-ExtraBoldItalic.woff') format('woff');
    font-weight: bold;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('/assets/fonts/Inter28pt-Italic.eot');
    src: url('/assets/fonts/Inter28pt-Italic.eot?#iefix') format('embedded-opentype'),
        url('/assets/fonts/Inter28pt-Italic.woff2') format('woff2'),
        url('/assets/fonts/Inter28pt-Italic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('/assets/fonts/Inter28pt-ExtraBold.eot');
    src: url('/assets/fonts/Inter28pt-ExtraBold.eot?#iefix') format('embedded-opentype'),
        url('/assets/fonts/Inter28pt-ExtraBold.woff2') format('woff2'),
        url('/assets/fonts/Inter28pt-ExtraBold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('/assets/fonts/Inter28pt-ExtraLightItalic.eot');
    src: url('/assets/fonts/Inter28pt-ExtraLightItalic.eot?#iefix') format('embedded-opentype'),
        url('/assets/fonts/Inter28pt-ExtraLightItalic.woff2') format('woff2'),
        url('/assets/fonts/Inter28pt-ExtraLightItalic.woff') format('woff');
    font-weight: 200;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('/assets/fonts/Inter28pt-LightItalic.eot');
    src: url('/assets/fonts/Inter28pt-LightItalic.eot?#iefix') format('embedded-opentype'),
        url('/assets/fonts/Inter28pt-LightItalic.woff2') format('woff2'),
        url('/assets/fonts/Inter28pt-LightItalic.woff') format('woff');
    font-weight: 300;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('/assets/fonts/Inter28pt-Thin.eot');
    src: url('/assets/fonts/Inter28pt-Thin.eot?#iefix') format('embedded-opentype'),
        url('/assets/fonts/Inter28pt-Thin.woff2') format('woff2'),
        url('/assets/fonts/Inter28pt-Thin.woff') format('woff');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('/assets/fonts/Inter28pt-Light.eot');
    src: url('/assets/fonts/Inter28pt-Light.eot?#iefix') format('embedded-opentype'),
        url('/assets/fonts/Inter28pt-Light.woff2') format('woff2'),
        url('/assets/fonts/Inter28pt-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('/assets/fonts/Inter28pt-MediumItalic.eot');
    src: url('/assets/fonts/Inter28pt-MediumItalic.eot?#iefix') format('embedded-opentype'),
        url('/assets/fonts/Inter28pt-MediumItalic.woff2') format('woff2'),
        url('/assets/fonts/Inter28pt-MediumItalic.woff') format('woff');
    font-weight: 500;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('/assets/fonts/Inter28pt-Regular.eot');
    src: url('/assets/fonts/Inter28pt-Regular.eot?#iefix') format('embedded-opentype'),
        url('/assets/fonts/Inter28pt-Regular.woff2') format('woff2'),
        url('/assets/fonts/Inter28pt-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('/assets/fonts/Inter28pt-SemiBoldItalic.eot');
    src: url('/assets/fonts/Inter28pt-SemiBoldItalic.eot?#iefix') format('embedded-opentype'),
        url('/assets/fonts/Inter28pt-SemiBoldItalic.woff2') format('woff2'),
        url('/assets/fonts/Inter28pt-SemiBoldItalic.woff') format('woff');
    font-weight: 600;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('/assets/fonts/Inter28pt-SemiBold.eot');
    src: url('/assets/fonts/Inter28pt-SemiBold.eot?#iefix') format('embedded-opentype'),
        url('/assets/fonts/Inter28pt-SemiBold.woff2') format('woff2'),
        url('/assets/fonts/Inter28pt-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('/assets/fonts/Inter18pt-ExtraLightItalic.eot');
    src: url('/assets/fonts/Inter18pt-ExtraLightItalic.eot?#iefix') format('embedded-opentype'),
        url('/assets/fonts/Inter18pt-ExtraLightItalic.woff2') format('woff2'),
        url('/assets/fonts/Inter18pt-ExtraLightItalic.woff') format('woff');
    font-weight: 200;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('/assets/fonts/Inter18pt-ExtraBold.eot');
    src: url('/assets/fonts/Inter18pt-ExtraBold.eot?#iefix') format('embedded-opentype'),
        url('/assets/fonts/Inter18pt-ExtraBold.woff2') format('woff2'),
        url('/assets/fonts/Inter18pt-ExtraBold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('/assets/fonts/Inter18pt-Bold.eot');
    src: url('/assets/fonts/Inter18pt-Bold.eot?#iefix') format('embedded-opentype'),
        url('/assets/fonts/Inter18pt-Bold.woff2') format('woff2'),
        url('/assets/fonts/Inter18pt-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('/assets/fonts/Inter18pt-Italic.eot');
    src: url('/assets/fonts/Inter18pt-Italic.eot?#iefix') format('embedded-opentype'),
        url('/assets/fonts/Inter18pt-Italic.woff2') format('woff2'),
        url('/assets/fonts/Inter18pt-Italic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('/assets/fonts/Inter28pt-ThinItalic.eot');
    src: url('/assets/fonts/Inter28pt-ThinItalic.eot?#iefix') format('embedded-opentype'),
        url('/assets/fonts/Inter28pt-ThinItalic.woff2') format('woff2'),
        url('/assets/fonts/Inter28pt-ThinItalic.woff') format('woff');
    font-weight: 100;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('/assets/fonts/Inter18pt-ExtraBoldItalic.eot');
    src: url('/assets/fonts/Inter18pt-ExtraBoldItalic.eot?#iefix') format('embedded-opentype'),
        url('/assets/fonts/Inter18pt-ExtraBoldItalic.woff2') format('woff2'),
        url('/assets/fonts/Inter18pt-ExtraBoldItalic.woff') format('woff');
    font-weight: bold;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('/assets/fonts/Inter18pt-BoldItalic.eot');
    src: url('/assets/fonts/Inter18pt-BoldItalic.eot?#iefix') format('embedded-opentype'),
        url('/assets/fonts/Inter18pt-BoldItalic.woff2') format('woff2'),
        url('/assets/fonts/Inter18pt-BoldItalic.woff') format('woff');
    font-weight: bold;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('/assets/fonts/Inter18pt-ExtraLight.eot');
    src: url('/assets/fonts/Inter18pt-ExtraLight.eot?#iefix') format('embedded-opentype'),
        url('/assets/fonts/Inter18pt-ExtraLight.woff2') format('woff2'),
        url('/assets/fonts/Inter18pt-ExtraLight.woff') format('woff');
    font-weight: 200;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('/assets/fonts/Inter18pt-BlackItalic.eot');
    src: url('/assets/fonts/Inter18pt-BlackItalic.eot?#iefix') format('embedded-opentype'),
        url('/assets/fonts/Inter18pt-BlackItalic.woff2') format('woff2'),
        url('/assets/fonts/Inter18pt-BlackItalic.woff') format('woff');
    font-weight: 900;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('/assets/fonts/Inter18pt-Black.eot');
    src: url('/assets/fonts/Inter18pt-Black.eot?#iefix') format('embedded-opentype'),
        url('/assets/fonts/Inter18pt-Black.woff2') format('woff2'),
        url('/assets/fonts/Inter18pt-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('/assets/fonts/Inter18pt-LightItalic.eot');
    src: url('/assets/fonts/Inter18pt-LightItalic.eot?#iefix') format('embedded-opentype'),
        url('/assets/fonts/Inter18pt-LightItalic.woff2') format('woff2'),
        url('/assets/fonts/Inter18pt-LightItalic.woff') format('woff');
    font-weight: 300;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('/assets/fonts/Inter18pt-Medium.eot');
    src: url('/assets/fonts/Inter18pt-Medium.eot?#iefix') format('embedded-opentype'),
        url('/assets/fonts/Inter18pt-Medium.woff2') format('woff2'),
        url('/assets/fonts/Inter18pt-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('/assets/fonts/Inter18pt-Regular.eot');
    src: url('/assets/fonts/Inter18pt-Regular.eot?#iefix') format('embedded-opentype'),
        url('/assets/fonts/Inter18pt-Regular.woff2') format('woff2'),
        url('/assets/fonts/Inter18pt-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('/assets/fonts/Inter18pt-SemiBold.eot');
    src: url('/assets/fonts/Inter18pt-SemiBold.eot?#iefix') format('embedded-opentype'),
        url('/assets/fonts/Inter18pt-SemiBold.woff2') format('woff2'),
        url('/assets/fonts/Inter18pt-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('/assets/fonts/Inter18pt-MediumItalic.eot');
    src: url('/assets/fonts/Inter18pt-MediumItalic.eot?#iefix') format('embedded-opentype'),
        url('/assets/fonts/Inter18pt-MediumItalic.woff2') format('woff2'),
        url('/assets/fonts/Inter18pt-MediumItalic.woff') format('woff');
    font-weight: 500;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('/assets/fonts/Inter18pt-SemiBoldItalic.eot');
    src: url('/assets/fonts/Inter18pt-SemiBoldItalic.eot?#iefix') format('embedded-opentype'),
        url('/assets/fonts/Inter18pt-SemiBoldItalic.woff2') format('woff2'),
        url('/assets/fonts/Inter18pt-SemiBoldItalic.woff') format('woff');
    font-weight: 600;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('/assets/fonts/Inter18pt-Light.eot');
    src: url('/assets/fonts/Inter18pt-Light.eot?#iefix') format('embedded-opentype'),
        url('/assets/fonts/Inter18pt-Light.woff2') format('woff2'),
        url('/assets/fonts/Inter18pt-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}
`,Jz=Qf`
  :root {
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

    --success-500: #43a25a;
    --info-100: hsl(20, 57%, 94%);
    --info-500: #f2c100;
    --danger-500: #e06363;

    --shadow-sm: 0 0 12px 3px #00000016;
    --shadow-md: 0 0 12px 3px #00000024;
    --shadow-lg: 0 0 12px 3px #00000032;

    --border-px: 1px solid;

    --text-xxs: 0.8rem;
    --text-xs: 1rem;
    --text-sm: 1.2rem;
    --text-base: 1.4rem;
    --text-md: 1.6rem;
    --text-lg: 1.7rem;
    --text-xl: 2rem;
    --text-xxl: 3rem;
    --text-xxxl: 4rem;
    --text-giant: 5rem;
    --text-big: 6rem;

    --text-h4: var(--text-lg);
    --text-h3: var(--text-xl);
    --text-h2: var(--text-xxl);
    --text-h1: var(--text-xxxl);

    --radius-xxs: 0.2rem;
    --radius-xs: 0.4rem;
    --radius-sm: 0.8rem;
    --radius-md: 1rem;
    --radius-lg: 1.2rem;

    --blue-gradient: linear-gradient(55deg, #7515f5, #440c8f);

    --font-family: "Inter", "Roboto", "Poppins", -apple-system,
      "BlinkMacSystemFont", "Segoe UI", "Segoe UI Variable", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      "Helvetica", "Arial", "Noto Sans", sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }
`,Hz=ux`
${Zz}

* {
    font-family: var(--font-family);
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


${Jz}

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

`;function Pz(){return s.jsx(ZM,{children:s.jsx(bC,{children:s.jsx(wC,{children:s.jsx(Y7,{children:s.jsx(vC,{children:s.jsx(xI,{children:s.jsx(b7,{children:s.jsxs(QT,{children:[s.jsx(Hz,{}),s.jsx(Qz,{})]})})})})})})})})}cv.createRoot(document.getElementById("root")).render(s.jsx(g.StrictMode,{children:s.jsx(Pz,{})}));
