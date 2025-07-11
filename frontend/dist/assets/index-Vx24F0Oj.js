(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function r(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(l){if(l.ep)return;l.ep=!0;const u=r(l);fetch(l.href,u)}})();function sx(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var vd={exports:{}},Mo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J2;function lx(){if(J2)return Mo;J2=1;var e=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function r(o,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var b in l)b!=="key"&&(u[b]=l[b])}else u=l;return l=u.ref,{$$typeof:e,type:o,key:h,ref:l!==void 0?l:null,props:u}}return Mo.Fragment=a,Mo.jsx=r,Mo.jsxs=r,Mo}var F2;function cx(){return F2||(F2=1,vd.exports=lx()),vd.exports}var s=cx(),xd={exports:{}},he={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q2;function ux(){if(q2)return he;q2=1;var e=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.iterator;function j(A){return A===null||typeof A!="object"?null:(A=x&&A[x]||A["@@iterator"],typeof A=="function"?A:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,L={};function T(A,F,X){this.props=A,this.context=F,this.refs=L,this.updater=X||C}T.prototype.isReactComponent={},T.prototype.setState=function(A,F){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,F,"setState")},T.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function E(){}E.prototype=T.prototype;function k(A,F,X){this.props=A,this.context=F,this.refs=L,this.updater=X||C}var O=k.prototype=new E;O.constructor=k,S(O,T.prototype),O.isPureReactComponent=!0;var D=Array.isArray,N={H:null,A:null,T:null,S:null,V:null},z=Object.prototype.hasOwnProperty;function Q(A,F,X,ee,ie,we){return X=we.ref,{$$typeof:e,type:A,key:F,ref:X!==void 0?X:null,props:we}}function V(A,F){return Q(A.type,F,void 0,void 0,void 0,A.props)}function oe(A){return typeof A=="object"&&A!==null&&A.$$typeof===e}function Te(A){var F={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(X){return F[X]})}var Ze=/\/+/g;function Ue(A,F){return typeof A=="object"&&A!==null&&A.key!=null?Te(""+A.key):F.toString(36)}function K(){}function ue(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(K,K):(A.status="pending",A.then(function(F){A.status==="pending"&&(A.status="fulfilled",A.value=F)},function(F){A.status==="pending"&&(A.status="rejected",A.reason=F)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function ne(A,F,X,ee,ie){var we=typeof A;(we==="undefined"||we==="boolean")&&(A=null);var se=!1;if(A===null)se=!0;else switch(we){case"bigint":case"string":case"number":se=!0;break;case"object":switch(A.$$typeof){case e:case a:se=!0;break;case v:return se=A._init,ne(se(A._payload),F,X,ee,ie)}}if(se)return ie=ie(A),se=ee===""?"."+Ue(A,0):ee,D(ie)?(X="",se!=null&&(X=se.replace(Ze,"$&/")+"/"),ne(ie,F,X,"",function(bt){return bt})):ie!=null&&(oe(ie)&&(ie=V(ie,X+(ie.key==null||A&&A.key===ie.key?"":(""+ie.key).replace(Ze,"$&/")+"/")+se)),F.push(ie)),1;se=0;var ot=ee===""?".":ee+":";if(D(A))for(var ke=0;ke<A.length;ke++)ee=A[ke],we=ot+Ue(ee,ke),se+=ne(ee,F,X,we,ie);else if(ke=j(A),typeof ke=="function")for(A=ke.call(A),ke=0;!(ee=A.next()).done;)ee=ee.value,we=ot+Ue(ee,ke++),se+=ne(ee,F,X,we,ie);else if(we==="object"){if(typeof A.then=="function")return ne(ue(A),F,X,ee,ie);throw F=String(A),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.")}return se}function _(A,F,X){if(A==null)return A;var ee=[],ie=0;return ne(A,ee,"","",function(we){return F.call(X,we,ie++)}),ee}function q(A){if(A._status===-1){var F=A._result;F=F(),F.then(function(X){(A._status===0||A._status===-1)&&(A._status=1,A._result=X)},function(X){(A._status===0||A._status===-1)&&(A._status=2,A._result=X)}),A._status===-1&&(A._status=0,A._result=F)}if(A._status===1)return A._result.default;throw A._result}var W=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var F=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(F))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)};function ae(){}return he.Children={map:_,forEach:function(A,F,X){_(A,function(){F.apply(this,arguments)},X)},count:function(A){var F=0;return _(A,function(){F++}),F},toArray:function(A){return _(A,function(F){return F})||[]},only:function(A){if(!oe(A))throw Error("React.Children.only expected to receive a single React element child.");return A}},he.Component=T,he.Fragment=r,he.Profiler=l,he.PureComponent=k,he.StrictMode=o,he.Suspense=p,he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,he.__COMPILER_RUNTIME={__proto__:null,c:function(A){return N.H.useMemoCache(A)}},he.cache=function(A){return function(){return A.apply(null,arguments)}},he.cloneElement=function(A,F,X){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var ee=S({},A.props),ie=A.key,we=void 0;if(F!=null)for(se in F.ref!==void 0&&(we=void 0),F.key!==void 0&&(ie=""+F.key),F)!z.call(F,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&F.ref===void 0||(ee[se]=F[se]);var se=arguments.length-2;if(se===1)ee.children=X;else if(1<se){for(var ot=Array(se),ke=0;ke<se;ke++)ot[ke]=arguments[ke+2];ee.children=ot}return Q(A.type,ie,void 0,void 0,we,ee)},he.createContext=function(A){return A={$$typeof:h,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:u,_context:A},A},he.createElement=function(A,F,X){var ee,ie={},we=null;if(F!=null)for(ee in F.key!==void 0&&(we=""+F.key),F)z.call(F,ee)&&ee!=="key"&&ee!=="__self"&&ee!=="__source"&&(ie[ee]=F[ee]);var se=arguments.length-2;if(se===1)ie.children=X;else if(1<se){for(var ot=Array(se),ke=0;ke<se;ke++)ot[ke]=arguments[ke+2];ie.children=ot}if(A&&A.defaultProps)for(ee in se=A.defaultProps,se)ie[ee]===void 0&&(ie[ee]=se[ee]);return Q(A,we,void 0,void 0,null,ie)},he.createRef=function(){return{current:null}},he.forwardRef=function(A){return{$$typeof:b,render:A}},he.isValidElement=oe,he.lazy=function(A){return{$$typeof:v,_payload:{_status:-1,_result:A},_init:q}},he.memo=function(A,F){return{$$typeof:y,type:A,compare:F===void 0?null:F}},he.startTransition=function(A){var F=N.T,X={};N.T=X;try{var ee=A(),ie=N.S;ie!==null&&ie(X,ee),typeof ee=="object"&&ee!==null&&typeof ee.then=="function"&&ee.then(ae,W)}catch(we){W(we)}finally{N.T=F}},he.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},he.use=function(A){return N.H.use(A)},he.useActionState=function(A,F,X){return N.H.useActionState(A,F,X)},he.useCallback=function(A,F){return N.H.useCallback(A,F)},he.useContext=function(A){return N.H.useContext(A)},he.useDebugValue=function(){},he.useDeferredValue=function(A,F){return N.H.useDeferredValue(A,F)},he.useEffect=function(A,F,X){var ee=N.H;if(typeof X=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ee.useEffect(A,F)},he.useId=function(){return N.H.useId()},he.useImperativeHandle=function(A,F,X){return N.H.useImperativeHandle(A,F,X)},he.useInsertionEffect=function(A,F){return N.H.useInsertionEffect(A,F)},he.useLayoutEffect=function(A,F){return N.H.useLayoutEffect(A,F)},he.useMemo=function(A,F){return N.H.useMemo(A,F)},he.useOptimistic=function(A,F){return N.H.useOptimistic(A,F)},he.useReducer=function(A,F,X){return N.H.useReducer(A,F,X)},he.useRef=function(A){return N.H.useRef(A)},he.useState=function(A){return N.H.useState(A)},he.useSyncExternalStore=function(A,F,X){return N.H.useSyncExternalStore(A,F,X)},he.useTransition=function(){return N.H.useTransition()},he.version="19.1.0",he}var V2;function i1(){return V2||(V2=1,xd.exports=ux()),xd.exports}var m=i1();const dt=sx(m);var Md={exports:{}},jo={},jd={exports:{}},Ld={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X2;function dx(){return X2||(X2=1,function(e){function a(_,q){var W=_.length;_.push(q);e:for(;0<W;){var ae=W-1>>>1,A=_[ae];if(0<l(A,q))_[ae]=q,_[W]=A,W=ae;else break e}}function r(_){return _.length===0?null:_[0]}function o(_){if(_.length===0)return null;var q=_[0],W=_.pop();if(W!==q){_[0]=W;e:for(var ae=0,A=_.length,F=A>>>1;ae<F;){var X=2*(ae+1)-1,ee=_[X],ie=X+1,we=_[ie];if(0>l(ee,W))ie<A&&0>l(we,ee)?(_[ae]=we,_[ie]=W,ae=ie):(_[ae]=ee,_[X]=W,ae=X);else if(ie<A&&0>l(we,W))_[ae]=we,_[ie]=W,ae=ie;else break e}}return q}function l(_,q){var W=_.sortIndex-q.sortIndex;return W!==0?W:_.id-q.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;e.unstable_now=function(){return u.now()}}else{var h=Date,b=h.now();e.unstable_now=function(){return h.now()-b}}var p=[],y=[],v=1,x=null,j=3,C=!1,S=!1,L=!1,T=!1,E=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function D(_){for(var q=r(y);q!==null;){if(q.callback===null)o(y);else if(q.startTime<=_)o(y),q.sortIndex=q.expirationTime,a(p,q);else break;q=r(y)}}function N(_){if(L=!1,D(_),!S)if(r(p)!==null)S=!0,z||(z=!0,Ue());else{var q=r(y);q!==null&&ne(N,q.startTime-_)}}var z=!1,Q=-1,V=5,oe=-1;function Te(){return T?!0:!(e.unstable_now()-oe<V)}function Ze(){if(T=!1,z){var _=e.unstable_now();oe=_;var q=!0;try{e:{S=!1,L&&(L=!1,k(Q),Q=-1),C=!0;var W=j;try{t:{for(D(_),x=r(p);x!==null&&!(x.expirationTime>_&&Te());){var ae=x.callback;if(typeof ae=="function"){x.callback=null,j=x.priorityLevel;var A=ae(x.expirationTime<=_);if(_=e.unstable_now(),typeof A=="function"){x.callback=A,D(_),q=!0;break t}x===r(p)&&o(p),D(_)}else o(p);x=r(p)}if(x!==null)q=!0;else{var F=r(y);F!==null&&ne(N,F.startTime-_),q=!1}}break e}finally{x=null,j=W,C=!1}q=void 0}}finally{q?Ue():z=!1}}}var Ue;if(typeof O=="function")Ue=function(){O(Ze)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,ue=K.port2;K.port1.onmessage=Ze,Ue=function(){ue.postMessage(null)}}else Ue=function(){E(Ze,0)};function ne(_,q){Q=E(function(){_(e.unstable_now())},q)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return j},e.unstable_next=function(_){switch(j){case 1:case 2:case 3:var q=3;break;default:q=j}var W=j;j=q;try{return _()}finally{j=W}},e.unstable_requestPaint=function(){T=!0},e.unstable_runWithPriority=function(_,q){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var W=j;j=_;try{return q()}finally{j=W}},e.unstable_scheduleCallback=function(_,q,W){var ae=e.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ae+W:ae):W=ae,_){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=W+A,_={id:v++,callback:q,priorityLevel:_,startTime:W,expirationTime:A,sortIndex:-1},W>ae?(_.sortIndex=W,a(y,_),r(p)===null&&_===r(y)&&(L?(k(Q),Q=-1):L=!0,ne(N,W-ae))):(_.sortIndex=A,a(p,_),S||C||(S=!0,z||(z=!0,Ue()))),_},e.unstable_shouldYield=Te,e.unstable_wrapCallback=function(_){var q=j;return function(){var W=j;j=q;try{return _.apply(this,arguments)}finally{j=W}}}}(Ld)),Ld}var W2;function hx(){return W2||(W2=1,jd.exports=dx()),jd.exports}var Sd={exports:{}},xt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K2;function mx(){if(K2)return xt;K2=1;var e=i1();function a(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)y+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var o={d:{f:r,r:function(){throw Error(a(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(p,y,v){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:p,containerInfo:y,implementation:v}}var h=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function b(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return xt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,xt.createPortal=function(p,y){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(a(299));return u(p,y,null,v)},xt.flushSync=function(p){var y=h.T,v=o.p;try{if(h.T=null,o.p=2,p)return p()}finally{h.T=y,o.p=v,o.d.f()}},xt.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,o.d.C(p,y))},xt.prefetchDNS=function(p){typeof p=="string"&&o.d.D(p)},xt.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var v=y.as,x=b(v,y.crossOrigin),j=typeof y.integrity=="string"?y.integrity:void 0,C=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;v==="style"?o.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:x,integrity:j,fetchPriority:C}):v==="script"&&o.d.X(p,{crossOrigin:x,integrity:j,fetchPriority:C,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},xt.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var v=b(y.as,y.crossOrigin);o.d.M(p,{crossOrigin:v,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&o.d.M(p)},xt.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var v=y.as,x=b(v,y.crossOrigin);o.d.L(p,v,{crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},xt.preloadModule=function(p,y){if(typeof p=="string")if(y){var v=b(y.as,y.crossOrigin);o.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:v,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else o.d.m(p)},xt.requestFormReset=function(p){o.d.r(p)},xt.unstable_batchedUpdates=function(p,y){return p(y)},xt.useFormState=function(p,y,v){return h.H.useFormState(p,y,v)},xt.useFormStatus=function(){return h.H.useHostTransitionStatus()},xt.version="19.1.0",xt}var ep;function gx(){if(ep)return Sd.exports;ep=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(a){console.error(a)}}return e(),Sd.exports=mx(),Sd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tp;function px(){if(tp)return jo;tp=1;var e=hx(),a=i1(),r=gx();function o(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,i=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(i=n.return),t=n.return;while(t)}return n.tag===3?i:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function b(t){if(u(t)!==t)throw Error(o(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(o(188));return n!==t?null:t}for(var i=t,f=n;;){var c=i.return;if(c===null)break;var d=c.alternate;if(d===null){if(f=c.return,f!==null){i=f;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===i)return b(c),t;if(d===f)return b(c),n;d=d.sibling}throw Error(o(188))}if(i.return!==f.return)i=c,f=d;else{for(var w=!1,M=c.child;M;){if(M===i){w=!0,i=c,f=d;break}if(M===f){w=!0,f=c,i=d;break}M=M.sibling}if(!w){for(M=d.child;M;){if(M===i){w=!0,i=d,f=c;break}if(M===f){w=!0,f=d,i=c;break}M=M.sibling}if(!w)throw Error(o(189))}}if(i.alternate!==f)throw Error(o(190))}if(i.tag!==3)throw Error(o(188));return i.stateNode.current===i?t:n}function y(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=y(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,x=Symbol.for("react.element"),j=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),k=Symbol.for("react.consumer"),O=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),oe=Symbol.for("react.activity"),Te=Symbol.for("react.memo_cache_sentinel"),Ze=Symbol.iterator;function Ue(t){return t===null||typeof t!="object"?null:(t=Ze&&t[Ze]||t["@@iterator"],typeof t=="function"?t:null)}var K=Symbol.for("react.client.reference");function ue(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===K?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case S:return"Fragment";case T:return"Profiler";case L:return"StrictMode";case N:return"Suspense";case z:return"SuspenseList";case oe:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case C:return"Portal";case O:return(t.displayName||"Context")+".Provider";case k:return(t._context.displayName||"Context")+".Consumer";case D:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Q:return n=t.displayName||null,n!==null?n:ue(t.type)||"Memo";case V:n=t._payload,t=t._init;try{return ue(t(n))}catch{}}return null}var ne=Array.isArray,_=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},ae=[],A=-1;function F(t){return{current:t}}function X(t){0>A||(t.current=ae[A],ae[A]=null,A--)}function ee(t,n){A++,ae[A]=t.current,t.current=n}var ie=F(null),we=F(null),se=F(null),ot=F(null);function ke(t,n){switch(ee(se,n),ee(we,t),ee(ie,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?x2(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=x2(n),t=M2(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}X(ie),ee(ie,t)}function bt(){X(ie),X(we),X(se)}function Oa(t){t.memoizedState!==null&&ee(ot,t);var n=ie.current,i=M2(n,t.type);n!==i&&(ee(we,t),ee(ie,i))}function zn(t){we.current===t&&(X(ie),X(we)),ot.current===t&&(X(ot),yo._currentValue=W)}var qt=Object.prototype.hasOwnProperty,fc=e.unstable_scheduleCallback,sc=e.unstable_cancelCallback,Yw=e.unstable_shouldYield,Gw=e.unstable_requestPaint,Ln=e.unstable_now,Qw=e.unstable_getCurrentPriorityLevel,th=e.unstable_ImmediatePriority,nh=e.unstable_UserBlockingPriority,mf=e.unstable_NormalPriority,$w=e.unstable_LowPriority,ah=e.unstable_IdlePriority,Pw=e.log,Hw=e.unstable_setDisableYieldValue,Li=null,Ot=null;function ta(t){if(typeof Pw=="function"&&Hw(t),Ot&&typeof Ot.setStrictMode=="function")try{Ot.setStrictMode(Li,t)}catch{}}var Bt=Math.clz32?Math.clz32:Fw,Zw=Math.log,Jw=Math.LN2;function Fw(t){return t>>>=0,t===0?32:31-(Zw(t)/Jw|0)|0}var gf=256,pf=4194304;function Ba(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function yf(t,n,i){var f=t.pendingLanes;if(f===0)return 0;var c=0,d=t.suspendedLanes,w=t.pingedLanes;t=t.warmLanes;var M=f&134217727;return M!==0?(f=M&~d,f!==0?c=Ba(f):(w&=M,w!==0?c=Ba(w):i||(i=M&~t,i!==0&&(c=Ba(i))))):(M=f&~d,M!==0?c=Ba(M):w!==0?c=Ba(w):i||(i=f&~t,i!==0&&(c=Ba(i)))),c===0?0:n!==0&&n!==c&&(n&d)===0&&(d=c&-c,i=n&-n,d>=i||d===32&&(i&4194048)!==0)?n:c}function Si(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function qw(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rh(){var t=gf;return gf<<=1,(gf&4194048)===0&&(gf=256),t}function ih(){var t=pf;return pf<<=1,(pf&62914560)===0&&(pf=4194304),t}function lc(t){for(var n=[],i=0;31>i;i++)n.push(t);return n}function Ci(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Vw(t,n,i,f,c,d){var w=t.pendingLanes;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=i,t.entangledLanes&=i,t.errorRecoveryDisabledLanes&=i,t.shellSuspendCounter=0;var M=t.entanglements,I=t.expirationTimes,Y=t.hiddenUpdates;for(i=w&~i;0<i;){var H=31-Bt(i),J=1<<H;M[H]=0,I[H]=-1;var G=Y[H];if(G!==null)for(Y[H]=null,H=0;H<G.length;H++){var $=G[H];$!==null&&($.lane&=-536870913)}i&=~J}f!==0&&oh(t,f,0),d!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=d&~(w&~n))}function oh(t,n,i){t.pendingLanes|=n,t.suspendedLanes&=~n;var f=31-Bt(n);t.entangledLanes|=n,t.entanglements[f]=t.entanglements[f]|1073741824|i&4194090}function fh(t,n){var i=t.entangledLanes|=n;for(t=t.entanglements;i;){var f=31-Bt(i),c=1<<f;c&n|t[f]&n&&(t[f]|=n),i&=~c}}function cc(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function uc(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function sh(){var t=q.p;return t!==0?t:(t=window.event,t===void 0?32:G2(t.type))}function Xw(t,n){var i=q.p;try{return q.p=t,n()}finally{q.p=i}}var na=Math.random().toString(36).slice(2),wt="__reactFiber$"+na,Tt="__reactProps$"+na,pr="__reactContainer$"+na,dc="__reactEvents$"+na,Ww="__reactListeners$"+na,Kw="__reactHandles$"+na,lh="__reactResources$"+na,ki="__reactMarker$"+na;function hc(t){delete t[wt],delete t[Tt],delete t[dc],delete t[Ww],delete t[Kw]}function yr(t){var n=t[wt];if(n)return n;for(var i=t.parentNode;i;){if(n=i[pr]||i[wt]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(t=C2(t);t!==null;){if(i=t[wt])return i;t=C2(t)}return n}t=i,i=t.parentNode}return null}function br(t){if(t=t[wt]||t[pr]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Ei(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(o(33))}function wr(t){var n=t[lh];return n||(n=t[lh]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ft(t){t[ki]=!0}var ch=new Set,uh={};function _a(t,n){vr(t,n),vr(t+"Capture",n)}function vr(t,n){for(uh[t]=n,t=0;t<n.length;t++)ch.add(n[t])}var ev=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),dh={},hh={};function tv(t){return qt.call(hh,t)?!0:qt.call(dh,t)?!1:ev.test(t)?hh[t]=!0:(dh[t]=!0,!1)}function bf(t,n,i){if(tv(n))if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var f=n.toLowerCase().slice(0,5);if(f!=="data-"&&f!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+i)}}function wf(t,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+i)}}function Rn(t,n,i,f){if(f===null)t.removeAttribute(i);else{switch(typeof f){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttributeNS(n,i,""+f)}}var mc,mh;function xr(t){if(mc===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);mc=n&&n[1]||"",mh=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+mc+t+mh}var gc=!1;function pc(t,n){if(!t||gc)return"";gc=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var f={DetermineComponentFrameRoot:function(){try{if(n){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch($){var G=$}Reflect.construct(t,[],J)}else{try{J.call()}catch($){G=$}t.call(J.prototype)}}else{try{throw Error()}catch($){G=$}(J=t())&&typeof J.catch=="function"&&J.catch(function(){})}}catch($){if($&&G&&typeof $.stack=="string")return[$.stack,G.stack]}return[null,null]}};f.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(f.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(f.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=f.DetermineComponentFrameRoot(),w=d[0],M=d[1];if(w&&M){var I=w.split(`
`),Y=M.split(`
`);for(c=f=0;f<I.length&&!I[f].includes("DetermineComponentFrameRoot");)f++;for(;c<Y.length&&!Y[c].includes("DetermineComponentFrameRoot");)c++;if(f===I.length||c===Y.length)for(f=I.length-1,c=Y.length-1;1<=f&&0<=c&&I[f]!==Y[c];)c--;for(;1<=f&&0<=c;f--,c--)if(I[f]!==Y[c]){if(f!==1||c!==1)do if(f--,c--,0>c||I[f]!==Y[c]){var H=`
`+I[f].replace(" at new "," at ");return t.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",t.displayName)),H}while(1<=f&&0<=c);break}}}finally{gc=!1,Error.prepareStackTrace=i}return(i=t?t.displayName||t.name:"")?xr(i):""}function nv(t){switch(t.tag){case 26:case 27:case 5:return xr(t.type);case 16:return xr("Lazy");case 13:return xr("Suspense");case 19:return xr("SuspenseList");case 0:case 15:return pc(t.type,!1);case 11:return pc(t.type.render,!1);case 1:return pc(t.type,!0);case 31:return xr("Activity");default:return""}}function gh(t){try{var n="";do n+=nv(t),t=t.return;while(t);return n}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}function Vt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ph(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function av(t){var n=ph(t)?"checked":"value",i=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),f=""+t[n];if(!t.hasOwnProperty(n)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var c=i.get,d=i.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(w){f=""+w,d.call(this,w)}}),Object.defineProperty(t,n,{enumerable:i.enumerable}),{getValue:function(){return f},setValue:function(w){f=""+w},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function vf(t){t._valueTracker||(t._valueTracker=av(t))}function yh(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var i=n.getValue(),f="";return t&&(f=ph(t)?t.checked?"true":"false":t.value),t=f,t!==i?(n.setValue(t),!0):!1}function xf(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var rv=/[\n"\\]/g;function Xt(t){return t.replace(rv,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function yc(t,n,i,f,c,d,w,M){t.name="",w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.type=w:t.removeAttribute("type"),n!=null?w==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Vt(n)):t.value!==""+Vt(n)&&(t.value=""+Vt(n)):w!=="submit"&&w!=="reset"||t.removeAttribute("value"),n!=null?bc(t,w,Vt(n)):i!=null?bc(t,w,Vt(i)):f!=null&&t.removeAttribute("value"),c==null&&d!=null&&(t.defaultChecked=!!d),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?t.name=""+Vt(M):t.removeAttribute("name")}function bh(t,n,i,f,c,d,w,M){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||i!=null){if(!(d!=="submit"&&d!=="reset"||n!=null))return;i=i!=null?""+Vt(i):"",n=n!=null?""+Vt(n):i,M||n===t.value||(t.value=n),t.defaultValue=n}f=f??c,f=typeof f!="function"&&typeof f!="symbol"&&!!f,t.checked=M?t.checked:!!f,t.defaultChecked=!!f,w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"&&(t.name=w)}function bc(t,n,i){n==="number"&&xf(t.ownerDocument)===t||t.defaultValue===""+i||(t.defaultValue=""+i)}function Mr(t,n,i,f){if(t=t.options,n){n={};for(var c=0;c<i.length;c++)n["$"+i[c]]=!0;for(i=0;i<t.length;i++)c=n.hasOwnProperty("$"+t[i].value),t[i].selected!==c&&(t[i].selected=c),c&&f&&(t[i].defaultSelected=!0)}else{for(i=""+Vt(i),n=null,c=0;c<t.length;c++){if(t[c].value===i){t[c].selected=!0,f&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function wh(t,n,i){if(n!=null&&(n=""+Vt(n),n!==t.value&&(t.value=n),i==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=i!=null?""+Vt(i):""}function vh(t,n,i,f){if(n==null){if(f!=null){if(i!=null)throw Error(o(92));if(ne(f)){if(1<f.length)throw Error(o(93));f=f[0]}i=f}i==null&&(i=""),n=i}i=Vt(n),t.defaultValue=i,f=t.textContent,f===i&&f!==""&&f!==null&&(t.value=f)}function jr(t,n){if(n){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=n;return}}t.textContent=n}var iv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function xh(t,n,i){var f=n.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?f?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":f?t.setProperty(n,i):typeof i!="number"||i===0||iv.has(n)?n==="float"?t.cssFloat=i:t[n]=(""+i).trim():t[n]=i+"px"}function Mh(t,n,i){if(n!=null&&typeof n!="object")throw Error(o(62));if(t=t.style,i!=null){for(var f in i)!i.hasOwnProperty(f)||n!=null&&n.hasOwnProperty(f)||(f.indexOf("--")===0?t.setProperty(f,""):f==="float"?t.cssFloat="":t[f]="");for(var c in n)f=n[c],n.hasOwnProperty(c)&&i[c]!==f&&xh(t,c,f)}else for(var d in n)n.hasOwnProperty(d)&&xh(t,d,n[d])}function wc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ov=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),fv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Mf(t){return fv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var vc=null;function xc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Lr=null,Sr=null;function jh(t){var n=br(t);if(n&&(t=n.stateNode)){var i=t[Tt]||null;e:switch(t=n.stateNode,n.type){case"input":if(yc(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),n=i.name,i.type==="radio"&&n!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+Xt(""+n)+'"][type="radio"]'),n=0;n<i.length;n++){var f=i[n];if(f!==t&&f.form===t.form){var c=f[Tt]||null;if(!c)throw Error(o(90));yc(f,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<i.length;n++)f=i[n],f.form===t.form&&yh(f)}break e;case"textarea":wh(t,i.value,i.defaultValue);break e;case"select":n=i.value,n!=null&&Mr(t,!!i.multiple,n,!1)}}}var Mc=!1;function Lh(t,n,i){if(Mc)return t(n,i);Mc=!0;try{var f=t(n);return f}finally{if(Mc=!1,(Lr!==null||Sr!==null)&&(fs(),Lr&&(n=Lr,t=Sr,Sr=Lr=null,jh(n),t)))for(n=0;n<t.length;n++)jh(t[n])}}function Ti(t,n){var i=t.stateNode;if(i===null)return null;var f=i[Tt]||null;if(f===null)return null;i=f[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(t=t.type,f=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!f;break e;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(o(231,n,typeof i));return i}var On=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jc=!1;if(On)try{var Ni={};Object.defineProperty(Ni,"passive",{get:function(){jc=!0}}),window.addEventListener("test",Ni,Ni),window.removeEventListener("test",Ni,Ni)}catch{jc=!1}var aa=null,Lc=null,jf=null;function Sh(){if(jf)return jf;var t,n=Lc,i=n.length,f,c="value"in aa?aa.value:aa.textContent,d=c.length;for(t=0;t<i&&n[t]===c[t];t++);var w=i-t;for(f=1;f<=w&&n[i-f]===c[d-f];f++);return jf=c.slice(t,1<f?1-f:void 0)}function Lf(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Sf(){return!0}function Ch(){return!1}function Nt(t){function n(i,f,c,d,w){this._reactName=i,this._targetInst=c,this.type=f,this.nativeEvent=d,this.target=w,this.currentTarget=null;for(var M in t)t.hasOwnProperty(M)&&(i=t[M],this[M]=i?i(d):d[M]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Sf:Ch,this.isPropagationStopped=Ch,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Sf)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Sf)},persist:function(){},isPersistent:Sf}),n}var Ua={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cf=Nt(Ua),Ii=v({},Ua,{view:0,detail:0}),sv=Nt(Ii),Sc,Cc,Di,kf=v({},Ii,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ec,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Di&&(Di&&t.type==="mousemove"?(Sc=t.screenX-Di.screenX,Cc=t.screenY-Di.screenY):Cc=Sc=0,Di=t),Sc)},movementY:function(t){return"movementY"in t?t.movementY:Cc}}),kh=Nt(kf),lv=v({},kf,{dataTransfer:0}),cv=Nt(lv),uv=v({},Ii,{relatedTarget:0}),kc=Nt(uv),dv=v({},Ua,{animationName:0,elapsedTime:0,pseudoElement:0}),hv=Nt(dv),mv=v({},Ua,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),gv=Nt(mv),pv=v({},Ua,{data:0}),Eh=Nt(pv),yv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=wv[t])?!!n[t]:!1}function Ec(){return vv}var xv=v({},Ii,{key:function(t){if(t.key){var n=yv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Lf(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?bv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ec,charCode:function(t){return t.type==="keypress"?Lf(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Lf(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Mv=Nt(xv),jv=v({},kf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Th=Nt(jv),Lv=v({},Ii,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ec}),Sv=Nt(Lv),Cv=v({},Ua,{propertyName:0,elapsedTime:0,pseudoElement:0}),kv=Nt(Cv),Ev=v({},kf,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Tv=Nt(Ev),Nv=v({},Ua,{newState:0,oldState:0}),Iv=Nt(Nv),Dv=[9,13,27,32],Tc=On&&"CompositionEvent"in window,Ai=null;On&&"documentMode"in document&&(Ai=document.documentMode);var Av=On&&"TextEvent"in window&&!Ai,Nh=On&&(!Tc||Ai&&8<Ai&&11>=Ai),Ih=" ",Dh=!1;function Ah(t,n){switch(t){case"keyup":return Dv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Cr=!1;function zv(t,n){switch(t){case"compositionend":return zh(n);case"keypress":return n.which!==32?null:(Dh=!0,Ih);case"textInput":return t=n.data,t===Ih&&Dh?null:t;default:return null}}function Rv(t,n){if(Cr)return t==="compositionend"||!Tc&&Ah(t,n)?(t=Sh(),jf=Lc=aa=null,Cr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Nh&&n.locale!=="ko"?null:n.data;default:return null}}var Ov={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rh(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Ov[t.type]:n==="textarea"}function Oh(t,n,i,f){Lr?Sr?Sr.push(f):Sr=[f]:Lr=f,n=hs(n,"onChange"),0<n.length&&(i=new Cf("onChange","change",null,i,f),t.push({event:i,listeners:n}))}var zi=null,Ri=null;function Bv(t){p2(t,0)}function Ef(t){var n=Ei(t);if(yh(n))return t}function Bh(t,n){if(t==="change")return n}var _h=!1;if(On){var Nc;if(On){var Ic="oninput"in document;if(!Ic){var Uh=document.createElement("div");Uh.setAttribute("oninput","return;"),Ic=typeof Uh.oninput=="function"}Nc=Ic}else Nc=!1;_h=Nc&&(!document.documentMode||9<document.documentMode)}function Yh(){zi&&(zi.detachEvent("onpropertychange",Gh),Ri=zi=null)}function Gh(t){if(t.propertyName==="value"&&Ef(Ri)){var n=[];Oh(n,Ri,t,xc(t)),Lh(Bv,n)}}function _v(t,n,i){t==="focusin"?(Yh(),zi=n,Ri=i,zi.attachEvent("onpropertychange",Gh)):t==="focusout"&&Yh()}function Uv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ef(Ri)}function Yv(t,n){if(t==="click")return Ef(n)}function Gv(t,n){if(t==="input"||t==="change")return Ef(n)}function Qv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var _t=typeof Object.is=="function"?Object.is:Qv;function Oi(t,n){if(_t(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var i=Object.keys(t),f=Object.keys(n);if(i.length!==f.length)return!1;for(f=0;f<i.length;f++){var c=i[f];if(!qt.call(n,c)||!_t(t[c],n[c]))return!1}return!0}function Qh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $h(t,n){var i=Qh(t);t=0;for(var f;i;){if(i.nodeType===3){if(f=t+i.textContent.length,t<=n&&f>=n)return{node:i,offset:n-t};t=f}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Qh(i)}}function Ph(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Ph(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Hh(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=xf(t.document);n instanceof t.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)t=n.contentWindow;else break;n=xf(t.document)}return n}function Dc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var $v=On&&"documentMode"in document&&11>=document.documentMode,kr=null,Ac=null,Bi=null,zc=!1;function Zh(t,n,i){var f=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;zc||kr==null||kr!==xf(f)||(f=kr,"selectionStart"in f&&Dc(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),Bi&&Oi(Bi,f)||(Bi=f,f=hs(Ac,"onSelect"),0<f.length&&(n=new Cf("onSelect","select",null,n,i),t.push({event:n,listeners:f}),n.target=kr)))}function Ya(t,n){var i={};return i[t.toLowerCase()]=n.toLowerCase(),i["Webkit"+t]="webkit"+n,i["Moz"+t]="moz"+n,i}var Er={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionrun:Ya("Transition","TransitionRun"),transitionstart:Ya("Transition","TransitionStart"),transitioncancel:Ya("Transition","TransitionCancel"),transitionend:Ya("Transition","TransitionEnd")},Rc={},Jh={};On&&(Jh=document.createElement("div").style,"AnimationEvent"in window||(delete Er.animationend.animation,delete Er.animationiteration.animation,delete Er.animationstart.animation),"TransitionEvent"in window||delete Er.transitionend.transition);function Ga(t){if(Rc[t])return Rc[t];if(!Er[t])return t;var n=Er[t],i;for(i in n)if(n.hasOwnProperty(i)&&i in Jh)return Rc[t]=n[i];return t}var Fh=Ga("animationend"),qh=Ga("animationiteration"),Vh=Ga("animationstart"),Pv=Ga("transitionrun"),Hv=Ga("transitionstart"),Zv=Ga("transitioncancel"),Xh=Ga("transitionend"),Wh=new Map,Oc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Oc.push("scrollEnd");function mn(t,n){Wh.set(t,n),_a(n,[t])}var Kh=new WeakMap;function Wt(t,n){if(typeof t=="object"&&t!==null){var i=Kh.get(t);return i!==void 0?i:(n={value:t,source:n,stack:gh(n)},Kh.set(t,n),n)}return{value:t,source:n,stack:gh(n)}}var Kt=[],Tr=0,Bc=0;function Tf(){for(var t=Tr,n=Bc=Tr=0;n<t;){var i=Kt[n];Kt[n++]=null;var f=Kt[n];Kt[n++]=null;var c=Kt[n];Kt[n++]=null;var d=Kt[n];if(Kt[n++]=null,f!==null&&c!==null){var w=f.pending;w===null?c.next=c:(c.next=w.next,w.next=c),f.pending=c}d!==0&&em(i,c,d)}}function Nf(t,n,i,f){Kt[Tr++]=t,Kt[Tr++]=n,Kt[Tr++]=i,Kt[Tr++]=f,Bc|=f,t.lanes|=f,t=t.alternate,t!==null&&(t.lanes|=f)}function _c(t,n,i,f){return Nf(t,n,i,f),If(t)}function Nr(t,n){return Nf(t,null,null,n),If(t)}function em(t,n,i){t.lanes|=i;var f=t.alternate;f!==null&&(f.lanes|=i);for(var c=!1,d=t.return;d!==null;)d.childLanes|=i,f=d.alternate,f!==null&&(f.childLanes|=i),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(c=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,c&&n!==null&&(c=31-Bt(i),t=d.hiddenUpdates,f=t[c],f===null?t[c]=[n]:f.push(n),n.lane=i|536870912),d):null}function If(t){if(50<so)throw so=0,Pu=null,Error(o(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ir={};function Jv(t,n,i,f){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(t,n,i,f){return new Jv(t,n,i,f)}function Uc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Bn(t,n){var i=t.alternate;return i===null?(i=Ut(t.tag,n,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=n,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&65011712,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,n=t.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i.refCleanup=t.refCleanup,i}function tm(t,n){t.flags&=65011714;var i=t.alternate;return i===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=i.childLanes,t.lanes=i.lanes,t.child=i.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=i.memoizedProps,t.memoizedState=i.memoizedState,t.updateQueue=i.updateQueue,t.type=i.type,n=i.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Df(t,n,i,f,c,d){var w=0;if(f=t,typeof t=="function")Uc(t)&&(w=1);else if(typeof t=="string")w=q6(t,i,ie.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case oe:return t=Ut(31,i,n,c),t.elementType=oe,t.lanes=d,t;case S:return Qa(i.children,c,d,n);case L:w=8,c|=24;break;case T:return t=Ut(12,i,n,c|2),t.elementType=T,t.lanes=d,t;case N:return t=Ut(13,i,n,c),t.elementType=N,t.lanes=d,t;case z:return t=Ut(19,i,n,c),t.elementType=z,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case E:case O:w=10;break e;case k:w=9;break e;case D:w=11;break e;case Q:w=14;break e;case V:w=16,f=null;break e}w=29,i=Error(o(130,t===null?"null":typeof t,"")),f=null}return n=Ut(w,i,n,c),n.elementType=t,n.type=f,n.lanes=d,n}function Qa(t,n,i,f){return t=Ut(7,t,f,n),t.lanes=i,t}function Yc(t,n,i){return t=Ut(6,t,null,n),t.lanes=i,t}function Gc(t,n,i){return n=Ut(4,t.children!==null?t.children:[],t.key,n),n.lanes=i,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Dr=[],Ar=0,Af=null,zf=0,en=[],tn=0,$a=null,_n=1,Un="";function Pa(t,n){Dr[Ar++]=zf,Dr[Ar++]=Af,Af=t,zf=n}function nm(t,n,i){en[tn++]=_n,en[tn++]=Un,en[tn++]=$a,$a=t;var f=_n;t=Un;var c=32-Bt(f)-1;f&=~(1<<c),i+=1;var d=32-Bt(n)+c;if(30<d){var w=c-c%5;d=(f&(1<<w)-1).toString(32),f>>=w,c-=w,_n=1<<32-Bt(n)+c|i<<c|f,Un=d+t}else _n=1<<d|i<<c|f,Un=t}function Qc(t){t.return!==null&&(Pa(t,1),nm(t,1,0))}function $c(t){for(;t===Af;)Af=Dr[--Ar],Dr[Ar]=null,zf=Dr[--Ar],Dr[Ar]=null;for(;t===$a;)$a=en[--tn],en[tn]=null,Un=en[--tn],en[tn]=null,_n=en[--tn],en[tn]=null}var St=null,Je=null,Ce=!1,Ha=null,Sn=!1,Pc=Error(o(519));function Za(t){var n=Error(o(418,""));throw Yi(Wt(n,t)),Pc}function am(t){var n=t.stateNode,i=t.type,f=t.memoizedProps;switch(n[wt]=t,n[Tt]=f,i){case"dialog":xe("cancel",n),xe("close",n);break;case"iframe":case"object":case"embed":xe("load",n);break;case"video":case"audio":for(i=0;i<co.length;i++)xe(co[i],n);break;case"source":xe("error",n);break;case"img":case"image":case"link":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"input":xe("invalid",n),bh(n,f.value,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name,!0),vf(n);break;case"select":xe("invalid",n);break;case"textarea":xe("invalid",n),vh(n,f.value,f.defaultValue,f.children),vf(n)}i=f.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||n.textContent===""+i||f.suppressHydrationWarning===!0||v2(n.textContent,i)?(f.popover!=null&&(xe("beforetoggle",n),xe("toggle",n)),f.onScroll!=null&&xe("scroll",n),f.onScrollEnd!=null&&xe("scrollend",n),f.onClick!=null&&(n.onclick=ms),n=!0):n=!1,n||Za(t)}function rm(t){for(St=t.return;St;)switch(St.tag){case 5:case 13:Sn=!1;return;case 27:case 3:Sn=!0;return;default:St=St.return}}function _i(t){if(t!==St)return!1;if(!Ce)return rm(t),Ce=!0,!1;var n=t.tag,i;if((i=n!==3&&n!==27)&&((i=n===5)&&(i=t.type,i=!(i!=="form"&&i!=="button")||od(t.type,t.memoizedProps)),i=!i),i&&Je&&Za(t),rm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(i=t.data,i==="/$"){if(n===0){Je=pn(t.nextSibling);break e}n--}else i!=="$"&&i!=="$!"&&i!=="$?"||n++;t=t.nextSibling}Je=null}}else n===27?(n=Je,wa(t.type)?(t=cd,cd=null,Je=t):Je=n):Je=St?pn(t.stateNode.nextSibling):null;return!0}function Ui(){Je=St=null,Ce=!1}function im(){var t=Ha;return t!==null&&(At===null?At=t:At.push.apply(At,t),Ha=null),t}function Yi(t){Ha===null?Ha=[t]:Ha.push(t)}var Hc=F(null),Ja=null,Yn=null;function ra(t,n,i){ee(Hc,n._currentValue),n._currentValue=i}function Gn(t){t._currentValue=Hc.current,X(Hc)}function Zc(t,n,i){for(;t!==null;){var f=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,f!==null&&(f.childLanes|=n)):f!==null&&(f.childLanes&n)!==n&&(f.childLanes|=n),t===i)break;t=t.return}}function Jc(t,n,i,f){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var d=c.dependencies;if(d!==null){var w=c.child;d=d.firstContext;e:for(;d!==null;){var M=d;d=c;for(var I=0;I<n.length;I++)if(M.context===n[I]){d.lanes|=i,M=d.alternate,M!==null&&(M.lanes|=i),Zc(d.return,i,t),f||(w=null);break e}d=M.next}}else if(c.tag===18){if(w=c.return,w===null)throw Error(o(341));w.lanes|=i,d=w.alternate,d!==null&&(d.lanes|=i),Zc(w,i,t),w=null}else w=c.child;if(w!==null)w.return=c;else for(w=c;w!==null;){if(w===t){w=null;break}if(c=w.sibling,c!==null){c.return=w.return,w=c;break}w=w.return}c=w}}function Gi(t,n,i,f){t=null;for(var c=n,d=!1;c!==null;){if(!d){if((c.flags&524288)!==0)d=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var w=c.alternate;if(w===null)throw Error(o(387));if(w=w.memoizedProps,w!==null){var M=c.type;_t(c.pendingProps.value,w.value)||(t!==null?t.push(M):t=[M])}}else if(c===ot.current){if(w=c.alternate,w===null)throw Error(o(387));w.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(yo):t=[yo])}c=c.return}t!==null&&Jc(n,t,i,f),n.flags|=262144}function Rf(t){for(t=t.firstContext;t!==null;){if(!_t(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Fa(t){Ja=t,Yn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function vt(t){return om(Ja,t)}function Of(t,n){return Ja===null&&Fa(t),om(t,n)}function om(t,n){var i=n._currentValue;if(n={context:n,memoizedValue:i,next:null},Yn===null){if(t===null)throw Error(o(308));Yn=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Yn=Yn.next=n;return i}var Fv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(i,f){t.push(f)}};this.abort=function(){n.aborted=!0,t.forEach(function(i){return i()})}},qv=e.unstable_scheduleCallback,Vv=e.unstable_NormalPriority,rt={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fc(){return{controller:new Fv,data:new Map,refCount:0}}function Qi(t){t.refCount--,t.refCount===0&&qv(Vv,function(){t.controller.abort()})}var $i=null,qc=0,zr=0,Rr=null;function Xv(t,n){if($i===null){var i=$i=[];qc=0,zr=Xu(),Rr={status:"pending",value:void 0,then:function(f){i.push(f)}}}return qc++,n.then(fm,fm),n}function fm(){if(--qc===0&&$i!==null){Rr!==null&&(Rr.status="fulfilled");var t=$i;$i=null,zr=0,Rr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Wv(t,n){var i=[],f={status:"pending",value:null,reason:null,then:function(c){i.push(c)}};return t.then(function(){f.status="fulfilled",f.value=n;for(var c=0;c<i.length;c++)(0,i[c])(n)},function(c){for(f.status="rejected",f.reason=c,c=0;c<i.length;c++)(0,i[c])(void 0)}),f}var sm=_.S;_.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Xv(t,n),sm!==null&&sm(t,n)};var qa=F(null);function Vc(){var t=qa.current;return t!==null?t:_e.pooledCache}function Bf(t,n){n===null?ee(qa,qa.current):ee(qa,n.pool)}function lm(){var t=Vc();return t===null?null:{parent:rt._currentValue,pool:t}}var Pi=Error(o(460)),cm=Error(o(474)),_f=Error(o(542)),Xc={then:function(){}};function um(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Uf(){}function dm(t,n,i){switch(i=t[i],i===void 0?t.push(n):i!==n&&(n.then(Uf,Uf),n=i),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,mm(t),t;default:if(typeof n.status=="string")n.then(Uf,Uf);else{if(t=_e,t!==null&&100<t.shellSuspendCounter)throw Error(o(482));t=n,t.status="pending",t.then(function(f){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=f}},function(f){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=f}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,mm(t),t}throw Hi=n,Pi}}var Hi=null;function hm(){if(Hi===null)throw Error(o(459));var t=Hi;return Hi=null,t}function mm(t){if(t===Pi||t===_f)throw Error(o(483))}var ia=!1;function Wc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Kc(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function oa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function fa(t,n,i){var f=t.updateQueue;if(f===null)return null;if(f=f.shared,(Ne&2)!==0){var c=f.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),f.pending=n,n=If(t),em(t,null,i),n}return Nf(t,f,n,i),If(t)}function Zi(t,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194048)!==0)){var f=n.lanes;f&=t.pendingLanes,i|=f,n.lanes=i,fh(t,i)}}function eu(t,n){var i=t.updateQueue,f=t.alternate;if(f!==null&&(f=f.updateQueue,i===f)){var c=null,d=null;if(i=i.firstBaseUpdate,i!==null){do{var w={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};d===null?c=d=w:d=d.next=w,i=i.next}while(i!==null);d===null?c=d=n:d=d.next=n}else c=d=n;i={baseState:f.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:f.shared,callbacks:f.callbacks},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=n:t.next=n,i.lastBaseUpdate=n}var tu=!1;function Ji(){if(tu){var t=Rr;if(t!==null)throw t}}function Fi(t,n,i,f){tu=!1;var c=t.updateQueue;ia=!1;var d=c.firstBaseUpdate,w=c.lastBaseUpdate,M=c.shared.pending;if(M!==null){c.shared.pending=null;var I=M,Y=I.next;I.next=null,w===null?d=Y:w.next=Y,w=I;var H=t.alternate;H!==null&&(H=H.updateQueue,M=H.lastBaseUpdate,M!==w&&(M===null?H.firstBaseUpdate=Y:M.next=Y,H.lastBaseUpdate=I))}if(d!==null){var J=c.baseState;w=0,H=Y=I=null,M=d;do{var G=M.lane&-536870913,$=G!==M.lane;if($?(Le&G)===G:(f&G)===G){G!==0&&G===zr&&(tu=!0),H!==null&&(H=H.next={lane:0,tag:M.tag,payload:M.payload,callback:null,next:null});e:{var ce=t,fe=M;G=n;var Re=i;switch(fe.tag){case 1:if(ce=fe.payload,typeof ce=="function"){J=ce.call(Re,J,G);break e}J=ce;break e;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=fe.payload,G=typeof ce=="function"?ce.call(Re,J,G):ce,G==null)break e;J=v({},J,G);break e;case 2:ia=!0}}G=M.callback,G!==null&&(t.flags|=64,$&&(t.flags|=8192),$=c.callbacks,$===null?c.callbacks=[G]:$.push(G))}else $={lane:G,tag:M.tag,payload:M.payload,callback:M.callback,next:null},H===null?(Y=H=$,I=J):H=H.next=$,w|=G;if(M=M.next,M===null){if(M=c.shared.pending,M===null)break;$=M,M=$.next,$.next=null,c.lastBaseUpdate=$,c.shared.pending=null}}while(!0);H===null&&(I=J),c.baseState=I,c.firstBaseUpdate=Y,c.lastBaseUpdate=H,d===null&&(c.shared.lanes=0),ga|=w,t.lanes=w,t.memoizedState=J}}function gm(t,n){if(typeof t!="function")throw Error(o(191,t));t.call(n)}function pm(t,n){var i=t.callbacks;if(i!==null)for(t.callbacks=null,t=0;t<i.length;t++)gm(i[t],n)}var Or=F(null),Yf=F(0);function ym(t,n){t=Fn,ee(Yf,t),ee(Or,n),Fn=t|n.baseLanes}function nu(){ee(Yf,Fn),ee(Or,Or.current)}function au(){Fn=Yf.current,X(Or),X(Yf)}var sa=0,ge=null,Ae=null,Ke=null,Gf=!1,Br=!1,Va=!1,Qf=0,qi=0,_r=null,Kv=0;function Ve(){throw Error(o(321))}function ru(t,n){if(n===null)return!1;for(var i=0;i<n.length&&i<t.length;i++)if(!_t(t[i],n[i]))return!1;return!0}function iu(t,n,i,f,c,d){return sa=d,ge=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,_.H=t===null||t.memoizedState===null?eg:tg,Va=!1,d=i(f,c),Va=!1,Br&&(d=wm(n,i,f,c)),bm(t),d}function bm(t){_.H=Ff;var n=Ae!==null&&Ae.next!==null;if(sa=0,Ke=Ae=ge=null,Gf=!1,qi=0,_r=null,n)throw Error(o(300));t===null||st||(t=t.dependencies,t!==null&&Rf(t)&&(st=!0))}function wm(t,n,i,f){ge=t;var c=0;do{if(Br&&(_r=null),qi=0,Br=!1,25<=c)throw Error(o(301));if(c+=1,Ke=Ae=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}_.H=o6,d=n(i,f)}while(Br);return d}function e6(){var t=_.H,n=t.useState()[0];return n=typeof n.then=="function"?Vi(n):n,t=t.useState()[0],(Ae!==null?Ae.memoizedState:null)!==t&&(ge.flags|=1024),n}function ou(){var t=Qf!==0;return Qf=0,t}function fu(t,n,i){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~i}function su(t){if(Gf){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Gf=!1}sa=0,Ke=Ae=ge=null,Br=!1,qi=Qf=0,_r=null}function It(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?ge.memoizedState=Ke=t:Ke=Ke.next=t,Ke}function et(){if(Ae===null){var t=ge.alternate;t=t!==null?t.memoizedState:null}else t=Ae.next;var n=Ke===null?ge.memoizedState:Ke.next;if(n!==null)Ke=n,Ae=t;else{if(t===null)throw ge.alternate===null?Error(o(467)):Error(o(310));Ae=t,t={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},Ke===null?ge.memoizedState=Ke=t:Ke=Ke.next=t}return Ke}function lu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Vi(t){var n=qi;return qi+=1,_r===null&&(_r=[]),t=dm(_r,t,n),n=ge,(Ke===null?n.memoizedState:Ke.next)===null&&(n=n.alternate,_.H=n===null||n.memoizedState===null?eg:tg),t}function $f(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Vi(t);if(t.$$typeof===O)return vt(t)}throw Error(o(438,String(t)))}function cu(t){var n=null,i=ge.updateQueue;if(i!==null&&(n=i.memoCache),n==null){var f=ge.alternate;f!==null&&(f=f.updateQueue,f!==null&&(f=f.memoCache,f!=null&&(n={data:f.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),i===null&&(i=lu(),ge.updateQueue=i),i.memoCache=n,i=n.data[n.index],i===void 0)for(i=n.data[n.index]=Array(t),f=0;f<t;f++)i[f]=Te;return n.index++,i}function Qn(t,n){return typeof n=="function"?n(t):n}function Pf(t){var n=et();return uu(n,Ae,t)}function uu(t,n,i){var f=t.queue;if(f===null)throw Error(o(311));f.lastRenderedReducer=i;var c=t.baseQueue,d=f.pending;if(d!==null){if(c!==null){var w=c.next;c.next=d.next,d.next=w}n.baseQueue=c=d,f.pending=null}if(d=t.baseState,c===null)t.memoizedState=d;else{n=c.next;var M=w=null,I=null,Y=n,H=!1;do{var J=Y.lane&-536870913;if(J!==Y.lane?(Le&J)===J:(sa&J)===J){var G=Y.revertLane;if(G===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null}),J===zr&&(H=!0);else if((sa&G)===G){Y=Y.next,G===zr&&(H=!0);continue}else J={lane:0,revertLane:Y.revertLane,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null},I===null?(M=I=J,w=d):I=I.next=J,ge.lanes|=G,ga|=G;J=Y.action,Va&&i(d,J),d=Y.hasEagerState?Y.eagerState:i(d,J)}else G={lane:J,revertLane:Y.revertLane,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null},I===null?(M=I=G,w=d):I=I.next=G,ge.lanes|=J,ga|=J;Y=Y.next}while(Y!==null&&Y!==n);if(I===null?w=d:I.next=M,!_t(d,t.memoizedState)&&(st=!0,H&&(i=Rr,i!==null)))throw i;t.memoizedState=d,t.baseState=w,t.baseQueue=I,f.lastRenderedState=d}return c===null&&(f.lanes=0),[t.memoizedState,f.dispatch]}function du(t){var n=et(),i=n.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=t;var f=i.dispatch,c=i.pending,d=n.memoizedState;if(c!==null){i.pending=null;var w=c=c.next;do d=t(d,w.action),w=w.next;while(w!==c);_t(d,n.memoizedState)||(st=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),i.lastRenderedState=d}return[d,f]}function vm(t,n,i){var f=ge,c=et(),d=Ce;if(d){if(i===void 0)throw Error(o(407));i=i()}else i=n();var w=!_t((Ae||c).memoizedState,i);w&&(c.memoizedState=i,st=!0),c=c.queue;var M=jm.bind(null,f,c,t);if(Xi(2048,8,M,[t]),c.getSnapshot!==n||w||Ke!==null&&Ke.memoizedState.tag&1){if(f.flags|=2048,Ur(9,Hf(),Mm.bind(null,f,c,i,n),null),_e===null)throw Error(o(349));d||(sa&124)!==0||xm(f,n,i)}return i}function xm(t,n,i){t.flags|=16384,t={getSnapshot:n,value:i},n=ge.updateQueue,n===null?(n=lu(),ge.updateQueue=n,n.stores=[t]):(i=n.stores,i===null?n.stores=[t]:i.push(t))}function Mm(t,n,i,f){n.value=i,n.getSnapshot=f,Lm(n)&&Sm(t)}function jm(t,n,i){return i(function(){Lm(n)&&Sm(t)})}function Lm(t){var n=t.getSnapshot;t=t.value;try{var i=n();return!_t(t,i)}catch{return!0}}function Sm(t){var n=Nr(t,2);n!==null&&Pt(n,t,2)}function hu(t){var n=It();if(typeof t=="function"){var i=t;if(t=i(),Va){ta(!0);try{i()}finally{ta(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qn,lastRenderedState:t},n}function Cm(t,n,i,f){return t.baseState=i,uu(t,Ae,typeof f=="function"?f:Qn)}function t6(t,n,i,f,c){if(Jf(t))throw Error(o(485));if(t=n.action,t!==null){var d={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(w){d.listeners.push(w)}};_.T!==null?i(!0):d.isTransition=!1,f(d),i=n.pending,i===null?(d.next=n.pending=d,km(n,d)):(d.next=i.next,n.pending=i.next=d)}}function km(t,n){var i=n.action,f=n.payload,c=t.state;if(n.isTransition){var d=_.T,w={};_.T=w;try{var M=i(c,f),I=_.S;I!==null&&I(w,M),Em(t,n,M)}catch(Y){mu(t,n,Y)}finally{_.T=d}}else try{d=i(c,f),Em(t,n,d)}catch(Y){mu(t,n,Y)}}function Em(t,n,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(f){Tm(t,n,f)},function(f){return mu(t,n,f)}):Tm(t,n,i)}function Tm(t,n,i){n.status="fulfilled",n.value=i,Nm(n),t.state=i,n=t.pending,n!==null&&(i=n.next,i===n?t.pending=null:(i=i.next,n.next=i,km(t,i)))}function mu(t,n,i){var f=t.pending;if(t.pending=null,f!==null){f=f.next;do n.status="rejected",n.reason=i,Nm(n),n=n.next;while(n!==f)}t.action=null}function Nm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Im(t,n){return n}function Dm(t,n){if(Ce){var i=_e.formState;if(i!==null){e:{var f=ge;if(Ce){if(Je){t:{for(var c=Je,d=Sn;c.nodeType!==8;){if(!d){c=null;break t}if(c=pn(c.nextSibling),c===null){c=null;break t}}d=c.data,c=d==="F!"||d==="F"?c:null}if(c){Je=pn(c.nextSibling),f=c.data==="F!";break e}}Za(f)}f=!1}f&&(n=i[0])}}return i=It(),i.memoizedState=i.baseState=n,f={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Im,lastRenderedState:n},i.queue=f,i=Xm.bind(null,ge,f),f.dispatch=i,f=hu(!1),d=wu.bind(null,ge,!1,f.queue),f=It(),c={state:n,dispatch:null,action:t,pending:null},f.queue=c,i=t6.bind(null,ge,c,d,i),c.dispatch=i,f.memoizedState=t,[n,i,!1]}function Am(t){var n=et();return zm(n,Ae,t)}function zm(t,n,i){if(n=uu(t,n,Im)[0],t=Pf(Qn)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var f=Vi(n)}catch(w){throw w===Pi?_f:w}else f=n;n=et();var c=n.queue,d=c.dispatch;return i!==n.memoizedState&&(ge.flags|=2048,Ur(9,Hf(),n6.bind(null,c,i),null)),[f,d,t]}function n6(t,n){t.action=n}function Rm(t){var n=et(),i=Ae;if(i!==null)return zm(n,i,t);et(),n=n.memoizedState,i=et();var f=i.queue.dispatch;return i.memoizedState=t,[n,f,!1]}function Ur(t,n,i,f){return t={tag:t,create:i,deps:f,inst:n,next:null},n=ge.updateQueue,n===null&&(n=lu(),ge.updateQueue=n),i=n.lastEffect,i===null?n.lastEffect=t.next=t:(f=i.next,i.next=t,t.next=f,n.lastEffect=t),t}function Hf(){return{destroy:void 0,resource:void 0}}function Om(){return et().memoizedState}function Zf(t,n,i,f){var c=It();f=f===void 0?null:f,ge.flags|=t,c.memoizedState=Ur(1|n,Hf(),i,f)}function Xi(t,n,i,f){var c=et();f=f===void 0?null:f;var d=c.memoizedState.inst;Ae!==null&&f!==null&&ru(f,Ae.memoizedState.deps)?c.memoizedState=Ur(n,d,i,f):(ge.flags|=t,c.memoizedState=Ur(1|n,d,i,f))}function Bm(t,n){Zf(8390656,8,t,n)}function _m(t,n){Xi(2048,8,t,n)}function Um(t,n){return Xi(4,2,t,n)}function Ym(t,n){return Xi(4,4,t,n)}function Gm(t,n){if(typeof n=="function"){t=t();var i=n(t);return function(){typeof i=="function"?i():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Qm(t,n,i){i=i!=null?i.concat([t]):null,Xi(4,4,Gm.bind(null,n,t),i)}function gu(){}function $m(t,n){var i=et();n=n===void 0?null:n;var f=i.memoizedState;return n!==null&&ru(n,f[1])?f[0]:(i.memoizedState=[t,n],t)}function Pm(t,n){var i=et();n=n===void 0?null:n;var f=i.memoizedState;if(n!==null&&ru(n,f[1]))return f[0];if(f=t(),Va){ta(!0);try{t()}finally{ta(!1)}}return i.memoizedState=[f,n],f}function pu(t,n,i){return i===void 0||(sa&1073741824)!==0?t.memoizedState=n:(t.memoizedState=i,t=Jg(),ge.lanes|=t,ga|=t,i)}function Hm(t,n,i,f){return _t(i,n)?i:Or.current!==null?(t=pu(t,i,f),_t(t,n)||(st=!0),t):(sa&42)===0?(st=!0,t.memoizedState=i):(t=Jg(),ge.lanes|=t,ga|=t,n)}function Zm(t,n,i,f,c){var d=q.p;q.p=d!==0&&8>d?d:8;var w=_.T,M={};_.T=M,wu(t,!1,n,i);try{var I=c(),Y=_.S;if(Y!==null&&Y(M,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var H=Wv(I,f);Wi(t,n,H,$t(t))}else Wi(t,n,f,$t(t))}catch(J){Wi(t,n,{then:function(){},status:"rejected",reason:J},$t())}finally{q.p=d,_.T=w}}function a6(){}function yu(t,n,i,f){if(t.tag!==5)throw Error(o(476));var c=Jm(t).queue;Zm(t,c,n,W,i===null?a6:function(){return Fm(t),i(f)})}function Jm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qn,lastRenderedState:W},next:null};var i={};return n.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qn,lastRenderedState:i},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Fm(t){var n=Jm(t).next.queue;Wi(t,n,{},$t())}function bu(){return vt(yo)}function qm(){return et().memoizedState}function Vm(){return et().memoizedState}function r6(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var i=$t();t=oa(i);var f=fa(n,t,i);f!==null&&(Pt(f,n,i),Zi(f,n,i)),n={cache:Fc()},t.payload=n;return}n=n.return}}function i6(t,n,i){var f=$t();i={lane:f,revertLane:0,action:i,hasEagerState:!1,eagerState:null,next:null},Jf(t)?Wm(n,i):(i=_c(t,n,i,f),i!==null&&(Pt(i,t,f),Km(i,n,f)))}function Xm(t,n,i){var f=$t();Wi(t,n,i,f)}function Wi(t,n,i,f){var c={lane:f,revertLane:0,action:i,hasEagerState:!1,eagerState:null,next:null};if(Jf(t))Wm(n,c);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var w=n.lastRenderedState,M=d(w,i);if(c.hasEagerState=!0,c.eagerState=M,_t(M,w))return Nf(t,n,c,0),_e===null&&Tf(),!1}catch{}finally{}if(i=_c(t,n,c,f),i!==null)return Pt(i,t,f),Km(i,n,f),!0}return!1}function wu(t,n,i,f){if(f={lane:2,revertLane:Xu(),action:f,hasEagerState:!1,eagerState:null,next:null},Jf(t)){if(n)throw Error(o(479))}else n=_c(t,i,f,2),n!==null&&Pt(n,t,2)}function Jf(t){var n=t.alternate;return t===ge||n!==null&&n===ge}function Wm(t,n){Br=Gf=!0;var i=t.pending;i===null?n.next=n:(n.next=i.next,i.next=n),t.pending=n}function Km(t,n,i){if((i&4194048)!==0){var f=n.lanes;f&=t.pendingLanes,i|=f,n.lanes=i,fh(t,i)}}var Ff={readContext:vt,use:$f,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useLayoutEffect:Ve,useInsertionEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useSyncExternalStore:Ve,useId:Ve,useHostTransitionStatus:Ve,useFormState:Ve,useActionState:Ve,useOptimistic:Ve,useMemoCache:Ve,useCacheRefresh:Ve},eg={readContext:vt,use:$f,useCallback:function(t,n){return It().memoizedState=[t,n===void 0?null:n],t},useContext:vt,useEffect:Bm,useImperativeHandle:function(t,n,i){i=i!=null?i.concat([t]):null,Zf(4194308,4,Gm.bind(null,n,t),i)},useLayoutEffect:function(t,n){return Zf(4194308,4,t,n)},useInsertionEffect:function(t,n){Zf(4,2,t,n)},useMemo:function(t,n){var i=It();n=n===void 0?null:n;var f=t();if(Va){ta(!0);try{t()}finally{ta(!1)}}return i.memoizedState=[f,n],f},useReducer:function(t,n,i){var f=It();if(i!==void 0){var c=i(n);if(Va){ta(!0);try{i(n)}finally{ta(!1)}}}else c=n;return f.memoizedState=f.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},f.queue=t,t=t.dispatch=i6.bind(null,ge,t),[f.memoizedState,t]},useRef:function(t){var n=It();return t={current:t},n.memoizedState=t},useState:function(t){t=hu(t);var n=t.queue,i=Xm.bind(null,ge,n);return n.dispatch=i,[t.memoizedState,i]},useDebugValue:gu,useDeferredValue:function(t,n){var i=It();return pu(i,t,n)},useTransition:function(){var t=hu(!1);return t=Zm.bind(null,ge,t.queue,!0,!1),It().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,i){var f=ge,c=It();if(Ce){if(i===void 0)throw Error(o(407));i=i()}else{if(i=n(),_e===null)throw Error(o(349));(Le&124)!==0||xm(f,n,i)}c.memoizedState=i;var d={value:i,getSnapshot:n};return c.queue=d,Bm(jm.bind(null,f,d,t),[t]),f.flags|=2048,Ur(9,Hf(),Mm.bind(null,f,d,i,n),null),i},useId:function(){var t=It(),n=_e.identifierPrefix;if(Ce){var i=Un,f=_n;i=(f&~(1<<32-Bt(f)-1)).toString(32)+i,n="«"+n+"R"+i,i=Qf++,0<i&&(n+="H"+i.toString(32)),n+="»"}else i=Kv++,n="«"+n+"r"+i.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:bu,useFormState:Dm,useActionState:Dm,useOptimistic:function(t){var n=It();n.memoizedState=n.baseState=t;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=i,n=wu.bind(null,ge,!0,i),i.dispatch=n,[t,n]},useMemoCache:cu,useCacheRefresh:function(){return It().memoizedState=r6.bind(null,ge)}},tg={readContext:vt,use:$f,useCallback:$m,useContext:vt,useEffect:_m,useImperativeHandle:Qm,useInsertionEffect:Um,useLayoutEffect:Ym,useMemo:Pm,useReducer:Pf,useRef:Om,useState:function(){return Pf(Qn)},useDebugValue:gu,useDeferredValue:function(t,n){var i=et();return Hm(i,Ae.memoizedState,t,n)},useTransition:function(){var t=Pf(Qn)[0],n=et().memoizedState;return[typeof t=="boolean"?t:Vi(t),n]},useSyncExternalStore:vm,useId:qm,useHostTransitionStatus:bu,useFormState:Am,useActionState:Am,useOptimistic:function(t,n){var i=et();return Cm(i,Ae,t,n)},useMemoCache:cu,useCacheRefresh:Vm},o6={readContext:vt,use:$f,useCallback:$m,useContext:vt,useEffect:_m,useImperativeHandle:Qm,useInsertionEffect:Um,useLayoutEffect:Ym,useMemo:Pm,useReducer:du,useRef:Om,useState:function(){return du(Qn)},useDebugValue:gu,useDeferredValue:function(t,n){var i=et();return Ae===null?pu(i,t,n):Hm(i,Ae.memoizedState,t,n)},useTransition:function(){var t=du(Qn)[0],n=et().memoizedState;return[typeof t=="boolean"?t:Vi(t),n]},useSyncExternalStore:vm,useId:qm,useHostTransitionStatus:bu,useFormState:Rm,useActionState:Rm,useOptimistic:function(t,n){var i=et();return Ae!==null?Cm(i,Ae,t,n):(i.baseState=t,[t,i.queue.dispatch])},useMemoCache:cu,useCacheRefresh:Vm},Yr=null,Ki=0;function qf(t){var n=Ki;return Ki+=1,Yr===null&&(Yr=[]),dm(Yr,t,n)}function eo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Vf(t,n){throw n.$$typeof===x?Error(o(525)):(t=Object.prototype.toString.call(n),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function ng(t){var n=t._init;return n(t._payload)}function ag(t){function n(B,R){if(t){var U=B.deletions;U===null?(B.deletions=[R],B.flags|=16):U.push(R)}}function i(B,R){if(!t)return null;for(;R!==null;)n(B,R),R=R.sibling;return null}function f(B){for(var R=new Map;B!==null;)B.key!==null?R.set(B.key,B):R.set(B.index,B),B=B.sibling;return R}function c(B,R){return B=Bn(B,R),B.index=0,B.sibling=null,B}function d(B,R,U){return B.index=U,t?(U=B.alternate,U!==null?(U=U.index,U<R?(B.flags|=67108866,R):U):(B.flags|=67108866,R)):(B.flags|=1048576,R)}function w(B){return t&&B.alternate===null&&(B.flags|=67108866),B}function M(B,R,U,Z){return R===null||R.tag!==6?(R=Yc(U,B.mode,Z),R.return=B,R):(R=c(R,U),R.return=B,R)}function I(B,R,U,Z){var te=U.type;return te===S?H(B,R,U.props.children,Z,U.key):R!==null&&(R.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===V&&ng(te)===R.type)?(R=c(R,U.props),eo(R,U),R.return=B,R):(R=Df(U.type,U.key,U.props,null,B.mode,Z),eo(R,U),R.return=B,R)}function Y(B,R,U,Z){return R===null||R.tag!==4||R.stateNode.containerInfo!==U.containerInfo||R.stateNode.implementation!==U.implementation?(R=Gc(U,B.mode,Z),R.return=B,R):(R=c(R,U.children||[]),R.return=B,R)}function H(B,R,U,Z,te){return R===null||R.tag!==7?(R=Qa(U,B.mode,Z,te),R.return=B,R):(R=c(R,U),R.return=B,R)}function J(B,R,U){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return R=Yc(""+R,B.mode,U),R.return=B,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case j:return U=Df(R.type,R.key,R.props,null,B.mode,U),eo(U,R),U.return=B,U;case C:return R=Gc(R,B.mode,U),R.return=B,R;case V:var Z=R._init;return R=Z(R._payload),J(B,R,U)}if(ne(R)||Ue(R))return R=Qa(R,B.mode,U,null),R.return=B,R;if(typeof R.then=="function")return J(B,qf(R),U);if(R.$$typeof===O)return J(B,Of(B,R),U);Vf(B,R)}return null}function G(B,R,U,Z){var te=R!==null?R.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return te!==null?null:M(B,R,""+U,Z);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case j:return U.key===te?I(B,R,U,Z):null;case C:return U.key===te?Y(B,R,U,Z):null;case V:return te=U._init,U=te(U._payload),G(B,R,U,Z)}if(ne(U)||Ue(U))return te!==null?null:H(B,R,U,Z,null);if(typeof U.then=="function")return G(B,R,qf(U),Z);if(U.$$typeof===O)return G(B,R,Of(B,U),Z);Vf(B,U)}return null}function $(B,R,U,Z,te){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return B=B.get(U)||null,M(R,B,""+Z,te);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case j:return B=B.get(Z.key===null?U:Z.key)||null,I(R,B,Z,te);case C:return B=B.get(Z.key===null?U:Z.key)||null,Y(R,B,Z,te);case V:var pe=Z._init;return Z=pe(Z._payload),$(B,R,U,Z,te)}if(ne(Z)||Ue(Z))return B=B.get(U)||null,H(R,B,Z,te,null);if(typeof Z.then=="function")return $(B,R,U,qf(Z),te);if(Z.$$typeof===O)return $(B,R,U,Of(R,Z),te);Vf(R,Z)}return null}function ce(B,R,U,Z){for(var te=null,pe=null,re=R,le=R=0,ct=null;re!==null&&le<U.length;le++){re.index>le?(ct=re,re=null):ct=re.sibling;var Se=G(B,re,U[le],Z);if(Se===null){re===null&&(re=ct);break}t&&re&&Se.alternate===null&&n(B,re),R=d(Se,R,le),pe===null?te=Se:pe.sibling=Se,pe=Se,re=ct}if(le===U.length)return i(B,re),Ce&&Pa(B,le),te;if(re===null){for(;le<U.length;le++)re=J(B,U[le],Z),re!==null&&(R=d(re,R,le),pe===null?te=re:pe.sibling=re,pe=re);return Ce&&Pa(B,le),te}for(re=f(re);le<U.length;le++)ct=$(re,B,le,U[le],Z),ct!==null&&(t&&ct.alternate!==null&&re.delete(ct.key===null?le:ct.key),R=d(ct,R,le),pe===null?te=ct:pe.sibling=ct,pe=ct);return t&&re.forEach(function(La){return n(B,La)}),Ce&&Pa(B,le),te}function fe(B,R,U,Z){if(U==null)throw Error(o(151));for(var te=null,pe=null,re=R,le=R=0,ct=null,Se=U.next();re!==null&&!Se.done;le++,Se=U.next()){re.index>le?(ct=re,re=null):ct=re.sibling;var La=G(B,re,Se.value,Z);if(La===null){re===null&&(re=ct);break}t&&re&&La.alternate===null&&n(B,re),R=d(La,R,le),pe===null?te=La:pe.sibling=La,pe=La,re=ct}if(Se.done)return i(B,re),Ce&&Pa(B,le),te;if(re===null){for(;!Se.done;le++,Se=U.next())Se=J(B,Se.value,Z),Se!==null&&(R=d(Se,R,le),pe===null?te=Se:pe.sibling=Se,pe=Se);return Ce&&Pa(B,le),te}for(re=f(re);!Se.done;le++,Se=U.next())Se=$(re,B,le,Se.value,Z),Se!==null&&(t&&Se.alternate!==null&&re.delete(Se.key===null?le:Se.key),R=d(Se,R,le),pe===null?te=Se:pe.sibling=Se,pe=Se);return t&&re.forEach(function(fx){return n(B,fx)}),Ce&&Pa(B,le),te}function Re(B,R,U,Z){if(typeof U=="object"&&U!==null&&U.type===S&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case j:e:{for(var te=U.key;R!==null;){if(R.key===te){if(te=U.type,te===S){if(R.tag===7){i(B,R.sibling),Z=c(R,U.props.children),Z.return=B,B=Z;break e}}else if(R.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===V&&ng(te)===R.type){i(B,R.sibling),Z=c(R,U.props),eo(Z,U),Z.return=B,B=Z;break e}i(B,R);break}else n(B,R);R=R.sibling}U.type===S?(Z=Qa(U.props.children,B.mode,Z,U.key),Z.return=B,B=Z):(Z=Df(U.type,U.key,U.props,null,B.mode,Z),eo(Z,U),Z.return=B,B=Z)}return w(B);case C:e:{for(te=U.key;R!==null;){if(R.key===te)if(R.tag===4&&R.stateNode.containerInfo===U.containerInfo&&R.stateNode.implementation===U.implementation){i(B,R.sibling),Z=c(R,U.children||[]),Z.return=B,B=Z;break e}else{i(B,R);break}else n(B,R);R=R.sibling}Z=Gc(U,B.mode,Z),Z.return=B,B=Z}return w(B);case V:return te=U._init,U=te(U._payload),Re(B,R,U,Z)}if(ne(U))return ce(B,R,U,Z);if(Ue(U)){if(te=Ue(U),typeof te!="function")throw Error(o(150));return U=te.call(U),fe(B,R,U,Z)}if(typeof U.then=="function")return Re(B,R,qf(U),Z);if(U.$$typeof===O)return Re(B,R,Of(B,U),Z);Vf(B,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,R!==null&&R.tag===6?(i(B,R.sibling),Z=c(R,U),Z.return=B,B=Z):(i(B,R),Z=Yc(U,B.mode,Z),Z.return=B,B=Z),w(B)):i(B,R)}return function(B,R,U,Z){try{Ki=0;var te=Re(B,R,U,Z);return Yr=null,te}catch(re){if(re===Pi||re===_f)throw re;var pe=Ut(29,re,null,B.mode);return pe.lanes=Z,pe.return=B,pe}finally{}}}var Gr=ag(!0),rg=ag(!1),nn=F(null),Cn=null;function la(t){var n=t.alternate;ee(it,it.current&1),ee(nn,t),Cn===null&&(n===null||Or.current!==null||n.memoizedState!==null)&&(Cn=t)}function ig(t){if(t.tag===22){if(ee(it,it.current),ee(nn,t),Cn===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Cn=t)}}else ca()}function ca(){ee(it,it.current),ee(nn,nn.current)}function $n(t){X(nn),Cn===t&&(Cn=null),X(it)}var it=F(0);function Xf(t){for(var n=t;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||ld(i)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function vu(t,n,i,f){n=t.memoizedState,i=i(f,n),i=i==null?n:v({},n,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var xu={enqueueSetState:function(t,n,i){t=t._reactInternals;var f=$t(),c=oa(f);c.payload=n,i!=null&&(c.callback=i),n=fa(t,c,f),n!==null&&(Pt(n,t,f),Zi(n,t,f))},enqueueReplaceState:function(t,n,i){t=t._reactInternals;var f=$t(),c=oa(f);c.tag=1,c.payload=n,i!=null&&(c.callback=i),n=fa(t,c,f),n!==null&&(Pt(n,t,f),Zi(n,t,f))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var i=$t(),f=oa(i);f.tag=2,n!=null&&(f.callback=n),n=fa(t,f,i),n!==null&&(Pt(n,t,i),Zi(n,t,i))}};function og(t,n,i,f,c,d,w){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(f,d,w):n.prototype&&n.prototype.isPureReactComponent?!Oi(i,f)||!Oi(c,d):!0}function fg(t,n,i,f){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,f),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,f),n.state!==t&&xu.enqueueReplaceState(n,n.state,null)}function Xa(t,n){var i=n;if("ref"in n){i={};for(var f in n)f!=="ref"&&(i[f]=n[f])}if(t=t.defaultProps){i===n&&(i=v({},i));for(var c in t)i[c]===void 0&&(i[c]=t[c])}return i}var Wf=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function sg(t){Wf(t)}function lg(t){console.error(t)}function cg(t){Wf(t)}function Kf(t,n){try{var i=t.onUncaughtError;i(n.value,{componentStack:n.stack})}catch(f){setTimeout(function(){throw f})}}function ug(t,n,i){try{var f=t.onCaughtError;f(i.value,{componentStack:i.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Mu(t,n,i){return i=oa(i),i.tag=3,i.payload={element:null},i.callback=function(){Kf(t,n)},i}function dg(t){return t=oa(t),t.tag=3,t}function hg(t,n,i,f){var c=i.type.getDerivedStateFromError;if(typeof c=="function"){var d=f.value;t.payload=function(){return c(d)},t.callback=function(){ug(n,i,f)}}var w=i.stateNode;w!==null&&typeof w.componentDidCatch=="function"&&(t.callback=function(){ug(n,i,f),typeof c!="function"&&(pa===null?pa=new Set([this]):pa.add(this));var M=f.stack;this.componentDidCatch(f.value,{componentStack:M!==null?M:""})})}function f6(t,n,i,f,c){if(i.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){if(n=i.alternate,n!==null&&Gi(n,i,c,!0),i=nn.current,i!==null){switch(i.tag){case 13:return Cn===null?Zu():i.alternate===null&&Fe===0&&(Fe=3),i.flags&=-257,i.flags|=65536,i.lanes=c,f===Xc?i.flags|=16384:(n=i.updateQueue,n===null?i.updateQueue=new Set([f]):n.add(f),Fu(t,f,c)),!1;case 22:return i.flags|=65536,f===Xc?i.flags|=16384:(n=i.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([f])},i.updateQueue=n):(i=n.retryQueue,i===null?n.retryQueue=new Set([f]):i.add(f)),Fu(t,f,c)),!1}throw Error(o(435,i.tag))}return Fu(t,f,c),Zu(),!1}if(Ce)return n=nn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,f!==Pc&&(t=Error(o(422),{cause:f}),Yi(Wt(t,i)))):(f!==Pc&&(n=Error(o(423),{cause:f}),Yi(Wt(n,i))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,f=Wt(f,i),c=Mu(t.stateNode,f,c),eu(t,c),Fe!==4&&(Fe=2)),!1;var d=Error(o(520),{cause:f});if(d=Wt(d,i),fo===null?fo=[d]:fo.push(d),Fe!==4&&(Fe=2),n===null)return!0;f=Wt(f,i),i=n;do{switch(i.tag){case 3:return i.flags|=65536,t=c&-c,i.lanes|=t,t=Mu(i.stateNode,f,t),eu(i,t),!1;case 1:if(n=i.type,d=i.stateNode,(i.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(pa===null||!pa.has(d))))return i.flags|=65536,c&=-c,i.lanes|=c,c=dg(c),hg(c,t,i,f),eu(i,c),!1}i=i.return}while(i!==null);return!1}var mg=Error(o(461)),st=!1;function mt(t,n,i,f){n.child=t===null?rg(n,null,i,f):Gr(n,t.child,i,f)}function gg(t,n,i,f,c){i=i.render;var d=n.ref;if("ref"in f){var w={};for(var M in f)M!=="ref"&&(w[M]=f[M])}else w=f;return Fa(n),f=iu(t,n,i,w,d,c),M=ou(),t!==null&&!st?(fu(t,n,c),Pn(t,n,c)):(Ce&&M&&Qc(n),n.flags|=1,mt(t,n,f,c),n.child)}function pg(t,n,i,f,c){if(t===null){var d=i.type;return typeof d=="function"&&!Uc(d)&&d.defaultProps===void 0&&i.compare===null?(n.tag=15,n.type=d,yg(t,n,d,f,c)):(t=Df(i.type,null,f,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Nu(t,c)){var w=d.memoizedProps;if(i=i.compare,i=i!==null?i:Oi,i(w,f)&&t.ref===n.ref)return Pn(t,n,c)}return n.flags|=1,t=Bn(d,f),t.ref=n.ref,t.return=n,n.child=t}function yg(t,n,i,f,c){if(t!==null){var d=t.memoizedProps;if(Oi(d,f)&&t.ref===n.ref)if(st=!1,n.pendingProps=f=d,Nu(t,c))(t.flags&131072)!==0&&(st=!0);else return n.lanes=t.lanes,Pn(t,n,c)}return ju(t,n,i,f,c)}function bg(t,n,i){var f=n.pendingProps,c=f.children,d=t!==null?t.memoizedState:null;if(f.mode==="hidden"){if((n.flags&128)!==0){if(f=d!==null?d.baseLanes|i:i,t!==null){for(c=n.child=t.child,d=0;c!==null;)d=d|c.lanes|c.childLanes,c=c.sibling;n.childLanes=d&~f}else n.childLanes=0,n.child=null;return wg(t,n,f,i)}if((i&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Bf(n,d!==null?d.cachePool:null),d!==null?ym(n,d):nu(),ig(n);else return n.lanes=n.childLanes=536870912,wg(t,n,d!==null?d.baseLanes|i:i,i)}else d!==null?(Bf(n,d.cachePool),ym(n,d),ca(),n.memoizedState=null):(t!==null&&Bf(n,null),nu(),ca());return mt(t,n,c,i),n.child}function wg(t,n,i,f){var c=Vc();return c=c===null?null:{parent:rt._currentValue,pool:c},n.memoizedState={baseLanes:i,cachePool:c},t!==null&&Bf(n,null),nu(),ig(n),t!==null&&Gi(t,n,f,!0),null}function es(t,n){var i=n.ref;if(i===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(o(284));(t===null||t.ref!==i)&&(n.flags|=4194816)}}function ju(t,n,i,f,c){return Fa(n),i=iu(t,n,i,f,void 0,c),f=ou(),t!==null&&!st?(fu(t,n,c),Pn(t,n,c)):(Ce&&f&&Qc(n),n.flags|=1,mt(t,n,i,c),n.child)}function vg(t,n,i,f,c,d){return Fa(n),n.updateQueue=null,i=wm(n,f,i,c),bm(t),f=ou(),t!==null&&!st?(fu(t,n,d),Pn(t,n,d)):(Ce&&f&&Qc(n),n.flags|=1,mt(t,n,i,d),n.child)}function xg(t,n,i,f,c){if(Fa(n),n.stateNode===null){var d=Ir,w=i.contextType;typeof w=="object"&&w!==null&&(d=vt(w)),d=new i(f,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=xu,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=f,d.state=n.memoizedState,d.refs={},Wc(n),w=i.contextType,d.context=typeof w=="object"&&w!==null?vt(w):Ir,d.state=n.memoizedState,w=i.getDerivedStateFromProps,typeof w=="function"&&(vu(n,i,w,f),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(w=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),w!==d.state&&xu.enqueueReplaceState(d,d.state,null),Fi(n,f,d,c),Ji(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),f=!0}else if(t===null){d=n.stateNode;var M=n.memoizedProps,I=Xa(i,M);d.props=I;var Y=d.context,H=i.contextType;w=Ir,typeof H=="object"&&H!==null&&(w=vt(H));var J=i.getDerivedStateFromProps;H=typeof J=="function"||typeof d.getSnapshotBeforeUpdate=="function",M=n.pendingProps!==M,H||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(M||Y!==w)&&fg(n,d,f,w),ia=!1;var G=n.memoizedState;d.state=G,Fi(n,f,d,c),Ji(),Y=n.memoizedState,M||G!==Y||ia?(typeof J=="function"&&(vu(n,i,J,f),Y=n.memoizedState),(I=ia||og(n,i,I,f,G,Y,w))?(H||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=f,n.memoizedState=Y),d.props=f,d.state=Y,d.context=w,f=I):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),f=!1)}else{d=n.stateNode,Kc(t,n),w=n.memoizedProps,H=Xa(i,w),d.props=H,J=n.pendingProps,G=d.context,Y=i.contextType,I=Ir,typeof Y=="object"&&Y!==null&&(I=vt(Y)),M=i.getDerivedStateFromProps,(Y=typeof M=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(w!==J||G!==I)&&fg(n,d,f,I),ia=!1,G=n.memoizedState,d.state=G,Fi(n,f,d,c),Ji();var $=n.memoizedState;w!==J||G!==$||ia||t!==null&&t.dependencies!==null&&Rf(t.dependencies)?(typeof M=="function"&&(vu(n,i,M,f),$=n.memoizedState),(H=ia||og(n,i,H,f,G,$,I)||t!==null&&t.dependencies!==null&&Rf(t.dependencies))?(Y||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(f,$,I),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(f,$,I)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||w===t.memoizedProps&&G===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||w===t.memoizedProps&&G===t.memoizedState||(n.flags|=1024),n.memoizedProps=f,n.memoizedState=$),d.props=f,d.state=$,d.context=I,f=H):(typeof d.componentDidUpdate!="function"||w===t.memoizedProps&&G===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||w===t.memoizedProps&&G===t.memoizedState||(n.flags|=1024),f=!1)}return d=f,es(t,n),f=(n.flags&128)!==0,d||f?(d=n.stateNode,i=f&&typeof i.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&f?(n.child=Gr(n,t.child,null,c),n.child=Gr(n,null,i,c)):mt(t,n,i,c),n.memoizedState=d.state,t=n.child):t=Pn(t,n,c),t}function Mg(t,n,i,f){return Ui(),n.flags|=256,mt(t,n,i,f),n.child}var Lu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Su(t){return{baseLanes:t,cachePool:lm()}}function Cu(t,n,i){return t=t!==null?t.childLanes&~i:0,n&&(t|=an),t}function jg(t,n,i){var f=n.pendingProps,c=!1,d=(n.flags&128)!==0,w;if((w=d)||(w=t!==null&&t.memoizedState===null?!1:(it.current&2)!==0),w&&(c=!0,n.flags&=-129),w=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ce){if(c?la(n):ca(),Ce){var M=Je,I;if(I=M){e:{for(I=M,M=Sn;I.nodeType!==8;){if(!M){M=null;break e}if(I=pn(I.nextSibling),I===null){M=null;break e}}M=I}M!==null?(n.memoizedState={dehydrated:M,treeContext:$a!==null?{id:_n,overflow:Un}:null,retryLane:536870912,hydrationErrors:null},I=Ut(18,null,null,0),I.stateNode=M,I.return=n,n.child=I,St=n,Je=null,I=!0):I=!1}I||Za(n)}if(M=n.memoizedState,M!==null&&(M=M.dehydrated,M!==null))return ld(M)?n.lanes=32:n.lanes=536870912,null;$n(n)}return M=f.children,f=f.fallback,c?(ca(),c=n.mode,M=ts({mode:"hidden",children:M},c),f=Qa(f,c,i,null),M.return=n,f.return=n,M.sibling=f,n.child=M,c=n.child,c.memoizedState=Su(i),c.childLanes=Cu(t,w,i),n.memoizedState=Lu,f):(la(n),ku(n,M))}if(I=t.memoizedState,I!==null&&(M=I.dehydrated,M!==null)){if(d)n.flags&256?(la(n),n.flags&=-257,n=Eu(t,n,i)):n.memoizedState!==null?(ca(),n.child=t.child,n.flags|=128,n=null):(ca(),c=f.fallback,M=n.mode,f=ts({mode:"visible",children:f.children},M),c=Qa(c,M,i,null),c.flags|=2,f.return=n,c.return=n,f.sibling=c,n.child=f,Gr(n,t.child,null,i),f=n.child,f.memoizedState=Su(i),f.childLanes=Cu(t,w,i),n.memoizedState=Lu,n=c);else if(la(n),ld(M)){if(w=M.nextSibling&&M.nextSibling.dataset,w)var Y=w.dgst;w=Y,f=Error(o(419)),f.stack="",f.digest=w,Yi({value:f,source:null,stack:null}),n=Eu(t,n,i)}else if(st||Gi(t,n,i,!1),w=(i&t.childLanes)!==0,st||w){if(w=_e,w!==null&&(f=i&-i,f=(f&42)!==0?1:cc(f),f=(f&(w.suspendedLanes|i))!==0?0:f,f!==0&&f!==I.retryLane))throw I.retryLane=f,Nr(t,f),Pt(w,t,f),mg;M.data==="$?"||Zu(),n=Eu(t,n,i)}else M.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=I.treeContext,Je=pn(M.nextSibling),St=n,Ce=!0,Ha=null,Sn=!1,t!==null&&(en[tn++]=_n,en[tn++]=Un,en[tn++]=$a,_n=t.id,Un=t.overflow,$a=n),n=ku(n,f.children),n.flags|=4096);return n}return c?(ca(),c=f.fallback,M=n.mode,I=t.child,Y=I.sibling,f=Bn(I,{mode:"hidden",children:f.children}),f.subtreeFlags=I.subtreeFlags&65011712,Y!==null?c=Bn(Y,c):(c=Qa(c,M,i,null),c.flags|=2),c.return=n,f.return=n,f.sibling=c,n.child=f,f=c,c=n.child,M=t.child.memoizedState,M===null?M=Su(i):(I=M.cachePool,I!==null?(Y=rt._currentValue,I=I.parent!==Y?{parent:Y,pool:Y}:I):I=lm(),M={baseLanes:M.baseLanes|i,cachePool:I}),c.memoizedState=M,c.childLanes=Cu(t,w,i),n.memoizedState=Lu,f):(la(n),i=t.child,t=i.sibling,i=Bn(i,{mode:"visible",children:f.children}),i.return=n,i.sibling=null,t!==null&&(w=n.deletions,w===null?(n.deletions=[t],n.flags|=16):w.push(t)),n.child=i,n.memoizedState=null,i)}function ku(t,n){return n=ts({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function ts(t,n){return t=Ut(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Eu(t,n,i){return Gr(n,t.child,null,i),t=ku(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Lg(t,n,i){t.lanes|=n;var f=t.alternate;f!==null&&(f.lanes|=n),Zc(t.return,n,i)}function Tu(t,n,i,f,c){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:f,tail:i,tailMode:c}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=f,d.tail=i,d.tailMode=c)}function Sg(t,n,i){var f=n.pendingProps,c=f.revealOrder,d=f.tail;if(mt(t,n,f.children,i),f=it.current,(f&2)!==0)f=f&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Lg(t,i,n);else if(t.tag===19)Lg(t,i,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}f&=1}switch(ee(it,f),c){case"forwards":for(i=n.child,c=null;i!==null;)t=i.alternate,t!==null&&Xf(t)===null&&(c=i),i=i.sibling;i=c,i===null?(c=n.child,n.child=null):(c=i.sibling,i.sibling=null),Tu(n,!1,c,i,d);break;case"backwards":for(i=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&Xf(t)===null){n.child=c;break}t=c.sibling,c.sibling=i,i=c,c=t}Tu(n,!0,i,null,d);break;case"together":Tu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Pn(t,n,i){if(t!==null&&(n.dependencies=t.dependencies),ga|=n.lanes,(i&n.childLanes)===0)if(t!==null){if(Gi(t,n,i,!1),(i&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(o(153));if(n.child!==null){for(t=n.child,i=Bn(t,t.pendingProps),n.child=i,i.return=n;t.sibling!==null;)t=t.sibling,i=i.sibling=Bn(t,t.pendingProps),i.return=n;i.sibling=null}return n.child}function Nu(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Rf(t)))}function s6(t,n,i){switch(n.tag){case 3:ke(n,n.stateNode.containerInfo),ra(n,rt,t.memoizedState.cache),Ui();break;case 27:case 5:Oa(n);break;case 4:ke(n,n.stateNode.containerInfo);break;case 10:ra(n,n.type,n.memoizedProps.value);break;case 13:var f=n.memoizedState;if(f!==null)return f.dehydrated!==null?(la(n),n.flags|=128,null):(i&n.child.childLanes)!==0?jg(t,n,i):(la(n),t=Pn(t,n,i),t!==null?t.sibling:null);la(n);break;case 19:var c=(t.flags&128)!==0;if(f=(i&n.childLanes)!==0,f||(Gi(t,n,i,!1),f=(i&n.childLanes)!==0),c){if(f)return Sg(t,n,i);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ee(it,it.current),f)break;return null;case 22:case 23:return n.lanes=0,bg(t,n,i);case 24:ra(n,rt,t.memoizedState.cache)}return Pn(t,n,i)}function Cg(t,n,i){if(t!==null)if(t.memoizedProps!==n.pendingProps)st=!0;else{if(!Nu(t,i)&&(n.flags&128)===0)return st=!1,s6(t,n,i);st=(t.flags&131072)!==0}else st=!1,Ce&&(n.flags&1048576)!==0&&nm(n,zf,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var f=n.elementType,c=f._init;if(f=c(f._payload),n.type=f,typeof f=="function")Uc(f)?(t=Xa(f,t),n.tag=1,n=xg(null,n,f,t,i)):(n.tag=0,n=ju(null,n,f,t,i));else{if(f!=null){if(c=f.$$typeof,c===D){n.tag=11,n=gg(null,n,f,t,i);break e}else if(c===Q){n.tag=14,n=pg(null,n,f,t,i);break e}}throw n=ue(f)||f,Error(o(306,n,""))}}return n;case 0:return ju(t,n,n.type,n.pendingProps,i);case 1:return f=n.type,c=Xa(f,n.pendingProps),xg(t,n,f,c,i);case 3:e:{if(ke(n,n.stateNode.containerInfo),t===null)throw Error(o(387));f=n.pendingProps;var d=n.memoizedState;c=d.element,Kc(t,n),Fi(n,f,null,i);var w=n.memoizedState;if(f=w.cache,ra(n,rt,f),f!==d.cache&&Jc(n,[rt],i,!0),Ji(),f=w.element,d.isDehydrated)if(d={element:f,isDehydrated:!1,cache:w.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=Mg(t,n,f,i);break e}else if(f!==c){c=Wt(Error(o(424)),n),Yi(c),n=Mg(t,n,f,i);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Je=pn(t.firstChild),St=n,Ce=!0,Ha=null,Sn=!0,i=rg(n,null,f,i),n.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling}else{if(Ui(),f===c){n=Pn(t,n,i);break e}mt(t,n,f,i)}n=n.child}return n;case 26:return es(t,n),t===null?(i=N2(n.type,null,n.pendingProps,null))?n.memoizedState=i:Ce||(i=n.type,t=n.pendingProps,f=gs(se.current).createElement(i),f[wt]=n,f[Tt]=t,pt(f,i,t),ft(f),n.stateNode=f):n.memoizedState=N2(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Oa(n),t===null&&Ce&&(f=n.stateNode=k2(n.type,n.pendingProps,se.current),St=n,Sn=!0,c=Je,wa(n.type)?(cd=c,Je=pn(f.firstChild)):Je=c),mt(t,n,n.pendingProps.children,i),es(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ce&&((c=f=Je)&&(f=O6(f,n.type,n.pendingProps,Sn),f!==null?(n.stateNode=f,St=n,Je=pn(f.firstChild),Sn=!1,c=!0):c=!1),c||Za(n)),Oa(n),c=n.type,d=n.pendingProps,w=t!==null?t.memoizedProps:null,f=d.children,od(c,d)?f=null:w!==null&&od(c,w)&&(n.flags|=32),n.memoizedState!==null&&(c=iu(t,n,e6,null,null,i),yo._currentValue=c),es(t,n),mt(t,n,f,i),n.child;case 6:return t===null&&Ce&&((t=i=Je)&&(i=B6(i,n.pendingProps,Sn),i!==null?(n.stateNode=i,St=n,Je=null,t=!0):t=!1),t||Za(n)),null;case 13:return jg(t,n,i);case 4:return ke(n,n.stateNode.containerInfo),f=n.pendingProps,t===null?n.child=Gr(n,null,f,i):mt(t,n,f,i),n.child;case 11:return gg(t,n,n.type,n.pendingProps,i);case 7:return mt(t,n,n.pendingProps,i),n.child;case 8:return mt(t,n,n.pendingProps.children,i),n.child;case 12:return mt(t,n,n.pendingProps.children,i),n.child;case 10:return f=n.pendingProps,ra(n,n.type,f.value),mt(t,n,f.children,i),n.child;case 9:return c=n.type._context,f=n.pendingProps.children,Fa(n),c=vt(c),f=f(c),n.flags|=1,mt(t,n,f,i),n.child;case 14:return pg(t,n,n.type,n.pendingProps,i);case 15:return yg(t,n,n.type,n.pendingProps,i);case 19:return Sg(t,n,i);case 31:return f=n.pendingProps,i=n.mode,f={mode:f.mode,children:f.children},t===null?(i=ts(f,i),i.ref=n.ref,n.child=i,i.return=n,n=i):(i=Bn(t.child,f),i.ref=n.ref,n.child=i,i.return=n,n=i),n;case 22:return bg(t,n,i);case 24:return Fa(n),f=vt(rt),t===null?(c=Vc(),c===null&&(c=_e,d=Fc(),c.pooledCache=d,d.refCount++,d!==null&&(c.pooledCacheLanes|=i),c=d),n.memoizedState={parent:f,cache:c},Wc(n),ra(n,rt,c)):((t.lanes&i)!==0&&(Kc(t,n),Fi(n,null,null,i),Ji()),c=t.memoizedState,d=n.memoizedState,c.parent!==f?(c={parent:f,cache:f},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ra(n,rt,f)):(f=d.cache,ra(n,rt,f),f!==c.cache&&Jc(n,[rt],i,!0))),mt(t,n,n.pendingProps.children,i),n.child;case 29:throw n.pendingProps}throw Error(o(156,n.tag))}function Hn(t){t.flags|=4}function kg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!R2(n)){if(n=nn.current,n!==null&&((Le&4194048)===Le?Cn!==null:(Le&62914560)!==Le&&(Le&536870912)===0||n!==Cn))throw Hi=Xc,cm;t.flags|=8192}}function ns(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?ih():536870912,t.lanes|=n,Hr|=n)}function to(t,n){if(!Ce)switch(t.tailMode){case"hidden":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t.tail=null:i.sibling=null;break;case"collapsed":i=t.tail;for(var f=null;i!==null;)i.alternate!==null&&(f=i),i=i.sibling;f===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:f.sibling=null}}function Pe(t){var n=t.alternate!==null&&t.alternate.child===t.child,i=0,f=0;if(n)for(var c=t.child;c!==null;)i|=c.lanes|c.childLanes,f|=c.subtreeFlags&65011712,f|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)i|=c.lanes|c.childLanes,f|=c.subtreeFlags,f|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=f,t.childLanes=i,n}function l6(t,n,i){var f=n.pendingProps;switch($c(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(n),null;case 1:return Pe(n),null;case 3:return i=n.stateNode,f=null,t!==null&&(f=t.memoizedState.cache),n.memoizedState.cache!==f&&(n.flags|=2048),Gn(rt),bt(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(_i(n)?Hn(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,im())),Pe(n),null;case 26:return i=n.memoizedState,t===null?(Hn(n),i!==null?(Pe(n),kg(n,i)):(Pe(n),n.flags&=-16777217)):i?i!==t.memoizedState?(Hn(n),Pe(n),kg(n,i)):(Pe(n),n.flags&=-16777217):(t.memoizedProps!==f&&Hn(n),Pe(n),n.flags&=-16777217),null;case 27:zn(n),i=se.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==f&&Hn(n);else{if(!f){if(n.stateNode===null)throw Error(o(166));return Pe(n),null}t=ie.current,_i(n)?am(n):(t=k2(c,f,i),n.stateNode=t,Hn(n))}return Pe(n),null;case 5:if(zn(n),i=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==f&&Hn(n);else{if(!f){if(n.stateNode===null)throw Error(o(166));return Pe(n),null}if(t=ie.current,_i(n))am(n);else{switch(c=gs(se.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof f.is=="string"?c.createElement("select",{is:f.is}):c.createElement("select"),f.multiple?t.multiple=!0:f.size&&(t.size=f.size);break;default:t=typeof f.is=="string"?c.createElement(i,{is:f.is}):c.createElement(i)}}t[wt]=n,t[Tt]=f;e:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break e;for(;c.sibling===null;){if(c.return===null||c.return===n)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;e:switch(pt(t,i,f),i){case"button":case"input":case"select":case"textarea":t=!!f.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Hn(n)}}return Pe(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==f&&Hn(n);else{if(typeof f!="string"&&n.stateNode===null)throw Error(o(166));if(t=se.current,_i(n)){if(t=n.stateNode,i=n.memoizedProps,f=null,c=St,c!==null)switch(c.tag){case 27:case 5:f=c.memoizedProps}t[wt]=n,t=!!(t.nodeValue===i||f!==null&&f.suppressHydrationWarning===!0||v2(t.nodeValue,i)),t||Za(n)}else t=gs(t).createTextNode(f),t[wt]=n,n.stateNode=t}return Pe(n),null;case 13:if(f=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=_i(n),f!==null&&f.dehydrated!==null){if(t===null){if(!c)throw Error(o(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(o(317));c[wt]=n}else Ui(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Pe(n),c=!1}else c=im(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?($n(n),n):($n(n),null)}if($n(n),(n.flags&128)!==0)return n.lanes=i,n;if(i=f!==null,t=t!==null&&t.memoizedState!==null,i){f=n.child,c=null,f.alternate!==null&&f.alternate.memoizedState!==null&&f.alternate.memoizedState.cachePool!==null&&(c=f.alternate.memoizedState.cachePool.pool);var d=null;f.memoizedState!==null&&f.memoizedState.cachePool!==null&&(d=f.memoizedState.cachePool.pool),d!==c&&(f.flags|=2048)}return i!==t&&i&&(n.child.flags|=8192),ns(n,n.updateQueue),Pe(n),null;case 4:return bt(),t===null&&td(n.stateNode.containerInfo),Pe(n),null;case 10:return Gn(n.type),Pe(n),null;case 19:if(X(it),c=n.memoizedState,c===null)return Pe(n),null;if(f=(n.flags&128)!==0,d=c.rendering,d===null)if(f)to(c,!1);else{if(Fe!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Xf(t),d!==null){for(n.flags|=128,to(c,!1),t=d.updateQueue,n.updateQueue=t,ns(n,t),n.subtreeFlags=0,t=i,i=n.child;i!==null;)tm(i,t),i=i.sibling;return ee(it,it.current&1|2),n.child}t=t.sibling}c.tail!==null&&Ln()>is&&(n.flags|=128,f=!0,to(c,!1),n.lanes=4194304)}else{if(!f)if(t=Xf(d),t!==null){if(n.flags|=128,f=!0,t=t.updateQueue,n.updateQueue=t,ns(n,t),to(c,!0),c.tail===null&&c.tailMode==="hidden"&&!d.alternate&&!Ce)return Pe(n),null}else 2*Ln()-c.renderingStartTime>is&&i!==536870912&&(n.flags|=128,f=!0,to(c,!1),n.lanes=4194304);c.isBackwards?(d.sibling=n.child,n.child=d):(t=c.last,t!==null?t.sibling=d:n.child=d,c.last=d)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=Ln(),n.sibling=null,t=it.current,ee(it,f?t&1|2:t&1),n):(Pe(n),null);case 22:case 23:return $n(n),au(),f=n.memoizedState!==null,t!==null?t.memoizedState!==null!==f&&(n.flags|=8192):f&&(n.flags|=8192),f?(i&536870912)!==0&&(n.flags&128)===0&&(Pe(n),n.subtreeFlags&6&&(n.flags|=8192)):Pe(n),i=n.updateQueue,i!==null&&ns(n,i.retryQueue),i=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),f=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(f=n.memoizedState.cachePool.pool),f!==i&&(n.flags|=2048),t!==null&&X(qa),null;case 24:return i=null,t!==null&&(i=t.memoizedState.cache),n.memoizedState.cache!==i&&(n.flags|=2048),Gn(rt),Pe(n),null;case 25:return null;case 30:return null}throw Error(o(156,n.tag))}function c6(t,n){switch($c(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Gn(rt),bt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return zn(n),null;case 13:if($n(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(o(340));Ui()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return X(it),null;case 4:return bt(),null;case 10:return Gn(n.type),null;case 22:case 23:return $n(n),au(),t!==null&&X(qa),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Gn(rt),null;case 25:return null;default:return null}}function Eg(t,n){switch($c(n),n.tag){case 3:Gn(rt),bt();break;case 26:case 27:case 5:zn(n);break;case 4:bt();break;case 13:$n(n);break;case 19:X(it);break;case 10:Gn(n.type);break;case 22:case 23:$n(n),au(),t!==null&&X(qa);break;case 24:Gn(rt)}}function no(t,n){try{var i=n.updateQueue,f=i!==null?i.lastEffect:null;if(f!==null){var c=f.next;i=c;do{if((i.tag&t)===t){f=void 0;var d=i.create,w=i.inst;f=d(),w.destroy=f}i=i.next}while(i!==c)}}catch(M){Oe(n,n.return,M)}}function ua(t,n,i){try{var f=n.updateQueue,c=f!==null?f.lastEffect:null;if(c!==null){var d=c.next;f=d;do{if((f.tag&t)===t){var w=f.inst,M=w.destroy;if(M!==void 0){w.destroy=void 0,c=n;var I=i,Y=M;try{Y()}catch(H){Oe(c,I,H)}}}f=f.next}while(f!==d)}}catch(H){Oe(n,n.return,H)}}function Tg(t){var n=t.updateQueue;if(n!==null){var i=t.stateNode;try{pm(n,i)}catch(f){Oe(t,t.return,f)}}}function Ng(t,n,i){i.props=Xa(t.type,t.memoizedProps),i.state=t.memoizedState;try{i.componentWillUnmount()}catch(f){Oe(t,n,f)}}function ao(t,n){try{var i=t.ref;if(i!==null){switch(t.tag){case 26:case 27:case 5:var f=t.stateNode;break;case 30:f=t.stateNode;break;default:f=t.stateNode}typeof i=="function"?t.refCleanup=i(f):i.current=f}}catch(c){Oe(t,n,c)}}function kn(t,n){var i=t.ref,f=t.refCleanup;if(i!==null)if(typeof f=="function")try{f()}catch(c){Oe(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(c){Oe(t,n,c)}else i.current=null}function Ig(t){var n=t.type,i=t.memoizedProps,f=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":i.autoFocus&&f.focus();break e;case"img":i.src?f.src=i.src:i.srcSet&&(f.srcset=i.srcSet)}}catch(c){Oe(t,t.return,c)}}function Iu(t,n,i){try{var f=t.stateNode;I6(f,t.type,i,n),f[Tt]=n}catch(c){Oe(t,t.return,c)}}function Dg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&wa(t.type)||t.tag===4}function Du(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Dg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&wa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Au(t,n,i){var f=t.tag;if(f===5||f===6)t=t.stateNode,n?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(t,n):(n=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,n.appendChild(t),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=ms));else if(f!==4&&(f===27&&wa(t.type)&&(i=t.stateNode,n=null),t=t.child,t!==null))for(Au(t,n,i),t=t.sibling;t!==null;)Au(t,n,i),t=t.sibling}function as(t,n,i){var f=t.tag;if(f===5||f===6)t=t.stateNode,n?i.insertBefore(t,n):i.appendChild(t);else if(f!==4&&(f===27&&wa(t.type)&&(i=t.stateNode),t=t.child,t!==null))for(as(t,n,i),t=t.sibling;t!==null;)as(t,n,i),t=t.sibling}function Ag(t){var n=t.stateNode,i=t.memoizedProps;try{for(var f=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);pt(n,f,i),n[wt]=t,n[Tt]=i}catch(d){Oe(t,t.return,d)}}var Zn=!1,Xe=!1,zu=!1,zg=typeof WeakSet=="function"?WeakSet:Set,lt=null;function u6(t,n){if(t=t.containerInfo,rd=xs,t=Hh(t),Dc(t)){if("selectionStart"in t)var i={start:t.selectionStart,end:t.selectionEnd};else e:{i=(i=t.ownerDocument)&&i.defaultView||window;var f=i.getSelection&&i.getSelection();if(f&&f.rangeCount!==0){i=f.anchorNode;var c=f.anchorOffset,d=f.focusNode;f=f.focusOffset;try{i.nodeType,d.nodeType}catch{i=null;break e}var w=0,M=-1,I=-1,Y=0,H=0,J=t,G=null;t:for(;;){for(var $;J!==i||c!==0&&J.nodeType!==3||(M=w+c),J!==d||f!==0&&J.nodeType!==3||(I=w+f),J.nodeType===3&&(w+=J.nodeValue.length),($=J.firstChild)!==null;)G=J,J=$;for(;;){if(J===t)break t;if(G===i&&++Y===c&&(M=w),G===d&&++H===f&&(I=w),($=J.nextSibling)!==null)break;J=G,G=J.parentNode}J=$}i=M===-1||I===-1?null:{start:M,end:I}}else i=null}i=i||{start:0,end:0}}else i=null;for(id={focusedElem:t,selectionRange:i},xs=!1,lt=n;lt!==null;)if(n=lt,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,lt=t;else for(;lt!==null;){switch(n=lt,d=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,i=n,c=d.memoizedProps,d=d.memoizedState,f=i.stateNode;try{var ce=Xa(i.type,c,i.elementType===i.type);t=f.getSnapshotBeforeUpdate(ce,d),f.__reactInternalSnapshotBeforeUpdate=t}catch(fe){Oe(i,i.return,fe)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,i=t.nodeType,i===9)sd(t);else if(i===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":sd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(o(163))}if(t=n.sibling,t!==null){t.return=n.return,lt=t;break}lt=n.return}}function Rg(t,n,i){var f=i.flags;switch(i.tag){case 0:case 11:case 15:da(t,i),f&4&&no(5,i);break;case 1:if(da(t,i),f&4)if(t=i.stateNode,n===null)try{t.componentDidMount()}catch(w){Oe(i,i.return,w)}else{var c=Xa(i.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(w){Oe(i,i.return,w)}}f&64&&Tg(i),f&512&&ao(i,i.return);break;case 3:if(da(t,i),f&64&&(t=i.updateQueue,t!==null)){if(n=null,i.child!==null)switch(i.child.tag){case 27:case 5:n=i.child.stateNode;break;case 1:n=i.child.stateNode}try{pm(t,n)}catch(w){Oe(i,i.return,w)}}break;case 27:n===null&&f&4&&Ag(i);case 26:case 5:da(t,i),n===null&&f&4&&Ig(i),f&512&&ao(i,i.return);break;case 12:da(t,i);break;case 13:da(t,i),f&4&&_g(t,i),f&64&&(t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(i=v6.bind(null,i),_6(t,i))));break;case 22:if(f=i.memoizedState!==null||Zn,!f){n=n!==null&&n.memoizedState!==null||Xe,c=Zn;var d=Xe;Zn=f,(Xe=n)&&!d?ha(t,i,(i.subtreeFlags&8772)!==0):da(t,i),Zn=c,Xe=d}break;case 30:break;default:da(t,i)}}function Og(t){var n=t.alternate;n!==null&&(t.alternate=null,Og(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&hc(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ge=null,Dt=!1;function Jn(t,n,i){for(i=i.child;i!==null;)Bg(t,n,i),i=i.sibling}function Bg(t,n,i){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount(Li,i)}catch{}switch(i.tag){case 26:Xe||kn(i,n),Jn(t,n,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Xe||kn(i,n);var f=Ge,c=Dt;wa(i.type)&&(Ge=i.stateNode,Dt=!1),Jn(t,n,i),ho(i.stateNode),Ge=f,Dt=c;break;case 5:Xe||kn(i,n);case 6:if(f=Ge,c=Dt,Ge=null,Jn(t,n,i),Ge=f,Dt=c,Ge!==null)if(Dt)try{(Ge.nodeType===9?Ge.body:Ge.nodeName==="HTML"?Ge.ownerDocument.body:Ge).removeChild(i.stateNode)}catch(d){Oe(i,n,d)}else try{Ge.removeChild(i.stateNode)}catch(d){Oe(i,n,d)}break;case 18:Ge!==null&&(Dt?(t=Ge,S2(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,i.stateNode),xo(t)):S2(Ge,i.stateNode));break;case 4:f=Ge,c=Dt,Ge=i.stateNode.containerInfo,Dt=!0,Jn(t,n,i),Ge=f,Dt=c;break;case 0:case 11:case 14:case 15:Xe||ua(2,i,n),Xe||ua(4,i,n),Jn(t,n,i);break;case 1:Xe||(kn(i,n),f=i.stateNode,typeof f.componentWillUnmount=="function"&&Ng(i,n,f)),Jn(t,n,i);break;case 21:Jn(t,n,i);break;case 22:Xe=(f=Xe)||i.memoizedState!==null,Jn(t,n,i),Xe=f;break;default:Jn(t,n,i)}}function _g(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{xo(t)}catch(i){Oe(n,n.return,i)}}function d6(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new zg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new zg),n;default:throw Error(o(435,t.tag))}}function Ru(t,n){var i=d6(t);n.forEach(function(f){var c=x6.bind(null,t,f);i.has(f)||(i.add(f),f.then(c,c))})}function Yt(t,n){var i=n.deletions;if(i!==null)for(var f=0;f<i.length;f++){var c=i[f],d=t,w=n,M=w;e:for(;M!==null;){switch(M.tag){case 27:if(wa(M.type)){Ge=M.stateNode,Dt=!1;break e}break;case 5:Ge=M.stateNode,Dt=!1;break e;case 3:case 4:Ge=M.stateNode.containerInfo,Dt=!0;break e}M=M.return}if(Ge===null)throw Error(o(160));Bg(d,w,c),Ge=null,Dt=!1,d=c.alternate,d!==null&&(d.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Ug(n,t),n=n.sibling}var gn=null;function Ug(t,n){var i=t.alternate,f=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Yt(n,t),Gt(t),f&4&&(ua(3,t,t.return),no(3,t),ua(5,t,t.return));break;case 1:Yt(n,t),Gt(t),f&512&&(Xe||i===null||kn(i,i.return)),f&64&&Zn&&(t=t.updateQueue,t!==null&&(f=t.callbacks,f!==null&&(i=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=i===null?f:i.concat(f))));break;case 26:var c=gn;if(Yt(n,t),Gt(t),f&512&&(Xe||i===null||kn(i,i.return)),f&4){var d=i!==null?i.memoizedState:null;if(f=t.memoizedState,i===null)if(f===null)if(t.stateNode===null){e:{f=t.type,i=t.memoizedProps,c=c.ownerDocument||c;t:switch(f){case"title":d=c.getElementsByTagName("title")[0],(!d||d[ki]||d[wt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=c.createElement(f),c.head.insertBefore(d,c.querySelector("head > title"))),pt(d,f,i),d[wt]=t,ft(d),f=d;break e;case"link":var w=A2("link","href",c).get(f+(i.href||""));if(w){for(var M=0;M<w.length;M++)if(d=w[M],d.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&d.getAttribute("rel")===(i.rel==null?null:i.rel)&&d.getAttribute("title")===(i.title==null?null:i.title)&&d.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){w.splice(M,1);break t}}d=c.createElement(f),pt(d,f,i),c.head.appendChild(d);break;case"meta":if(w=A2("meta","content",c).get(f+(i.content||""))){for(M=0;M<w.length;M++)if(d=w[M],d.getAttribute("content")===(i.content==null?null:""+i.content)&&d.getAttribute("name")===(i.name==null?null:i.name)&&d.getAttribute("property")===(i.property==null?null:i.property)&&d.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&d.getAttribute("charset")===(i.charSet==null?null:i.charSet)){w.splice(M,1);break t}}d=c.createElement(f),pt(d,f,i),c.head.appendChild(d);break;default:throw Error(o(468,f))}d[wt]=t,ft(d),f=d}t.stateNode=f}else z2(c,t.type,t.stateNode);else t.stateNode=D2(c,f,t.memoizedProps);else d!==f?(d===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):d.count--,f===null?z2(c,t.type,t.stateNode):D2(c,f,t.memoizedProps)):f===null&&t.stateNode!==null&&Iu(t,t.memoizedProps,i.memoizedProps)}break;case 27:Yt(n,t),Gt(t),f&512&&(Xe||i===null||kn(i,i.return)),i!==null&&f&4&&Iu(t,t.memoizedProps,i.memoizedProps);break;case 5:if(Yt(n,t),Gt(t),f&512&&(Xe||i===null||kn(i,i.return)),t.flags&32){c=t.stateNode;try{jr(c,"")}catch($){Oe(t,t.return,$)}}f&4&&t.stateNode!=null&&(c=t.memoizedProps,Iu(t,c,i!==null?i.memoizedProps:c)),f&1024&&(zu=!0);break;case 6:if(Yt(n,t),Gt(t),f&4){if(t.stateNode===null)throw Error(o(162));f=t.memoizedProps,i=t.stateNode;try{i.nodeValue=f}catch($){Oe(t,t.return,$)}}break;case 3:if(bs=null,c=gn,gn=ps(n.containerInfo),Yt(n,t),gn=c,Gt(t),f&4&&i!==null&&i.memoizedState.isDehydrated)try{xo(n.containerInfo)}catch($){Oe(t,t.return,$)}zu&&(zu=!1,Yg(t));break;case 4:f=gn,gn=ps(t.stateNode.containerInfo),Yt(n,t),Gt(t),gn=f;break;case 12:Yt(n,t),Gt(t);break;case 13:Yt(n,t),Gt(t),t.child.flags&8192&&t.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(Gu=Ln()),f&4&&(f=t.updateQueue,f!==null&&(t.updateQueue=null,Ru(t,f)));break;case 22:c=t.memoizedState!==null;var I=i!==null&&i.memoizedState!==null,Y=Zn,H=Xe;if(Zn=Y||c,Xe=H||I,Yt(n,t),Xe=H,Zn=Y,Gt(t),f&8192)e:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(i===null||I||Zn||Xe||Wa(t)),i=null,n=t;;){if(n.tag===5||n.tag===26){if(i===null){I=i=n;try{if(d=I.stateNode,c)w=d.style,typeof w.setProperty=="function"?w.setProperty("display","none","important"):w.display="none";else{M=I.stateNode;var J=I.memoizedProps.style,G=J!=null&&J.hasOwnProperty("display")?J.display:null;M.style.display=G==null||typeof G=="boolean"?"":(""+G).trim()}}catch($){Oe(I,I.return,$)}}}else if(n.tag===6){if(i===null){I=n;try{I.stateNode.nodeValue=c?"":I.memoizedProps}catch($){Oe(I,I.return,$)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;i===n&&(i=null),n=n.return}i===n&&(i=null),n.sibling.return=n.return,n=n.sibling}f&4&&(f=t.updateQueue,f!==null&&(i=f.retryQueue,i!==null&&(f.retryQueue=null,Ru(t,i))));break;case 19:Yt(n,t),Gt(t),f&4&&(f=t.updateQueue,f!==null&&(t.updateQueue=null,Ru(t,f)));break;case 30:break;case 21:break;default:Yt(n,t),Gt(t)}}function Gt(t){var n=t.flags;if(n&2){try{for(var i,f=t.return;f!==null;){if(Dg(f)){i=f;break}f=f.return}if(i==null)throw Error(o(160));switch(i.tag){case 27:var c=i.stateNode,d=Du(t);as(t,d,c);break;case 5:var w=i.stateNode;i.flags&32&&(jr(w,""),i.flags&=-33);var M=Du(t);as(t,M,w);break;case 3:case 4:var I=i.stateNode.containerInfo,Y=Du(t);Au(t,Y,I);break;default:throw Error(o(161))}}catch(H){Oe(t,t.return,H)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Yg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Yg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function da(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Rg(t,n.alternate,n),n=n.sibling}function Wa(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ua(4,n,n.return),Wa(n);break;case 1:kn(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount=="function"&&Ng(n,n.return,i),Wa(n);break;case 27:ho(n.stateNode);case 26:case 5:kn(n,n.return),Wa(n);break;case 22:n.memoizedState===null&&Wa(n);break;case 30:Wa(n);break;default:Wa(n)}t=t.sibling}}function ha(t,n,i){for(i=i&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var f=n.alternate,c=t,d=n,w=d.flags;switch(d.tag){case 0:case 11:case 15:ha(c,d,i),no(4,d);break;case 1:if(ha(c,d,i),f=d,c=f.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(Y){Oe(f,f.return,Y)}if(f=d,c=f.updateQueue,c!==null){var M=f.stateNode;try{var I=c.shared.hiddenCallbacks;if(I!==null)for(c.shared.hiddenCallbacks=null,c=0;c<I.length;c++)gm(I[c],M)}catch(Y){Oe(f,f.return,Y)}}i&&w&64&&Tg(d),ao(d,d.return);break;case 27:Ag(d);case 26:case 5:ha(c,d,i),i&&f===null&&w&4&&Ig(d),ao(d,d.return);break;case 12:ha(c,d,i);break;case 13:ha(c,d,i),i&&w&4&&_g(c,d);break;case 22:d.memoizedState===null&&ha(c,d,i),ao(d,d.return);break;case 30:break;default:ha(c,d,i)}n=n.sibling}}function Ou(t,n){var i=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==i&&(t!=null&&t.refCount++,i!=null&&Qi(i))}function Bu(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Qi(t))}function En(t,n,i,f){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Gg(t,n,i,f),n=n.sibling}function Gg(t,n,i,f){var c=n.flags;switch(n.tag){case 0:case 11:case 15:En(t,n,i,f),c&2048&&no(9,n);break;case 1:En(t,n,i,f);break;case 3:En(t,n,i,f),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Qi(t)));break;case 12:if(c&2048){En(t,n,i,f),t=n.stateNode;try{var d=n.memoizedProps,w=d.id,M=d.onPostCommit;typeof M=="function"&&M(w,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){Oe(n,n.return,I)}}else En(t,n,i,f);break;case 13:En(t,n,i,f);break;case 23:break;case 22:d=n.stateNode,w=n.alternate,n.memoizedState!==null?d._visibility&2?En(t,n,i,f):ro(t,n):d._visibility&2?En(t,n,i,f):(d._visibility|=2,Qr(t,n,i,f,(n.subtreeFlags&10256)!==0)),c&2048&&Ou(w,n);break;case 24:En(t,n,i,f),c&2048&&Bu(n.alternate,n);break;default:En(t,n,i,f)}}function Qr(t,n,i,f,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var d=t,w=n,M=i,I=f,Y=w.flags;switch(w.tag){case 0:case 11:case 15:Qr(d,w,M,I,c),no(8,w);break;case 23:break;case 22:var H=w.stateNode;w.memoizedState!==null?H._visibility&2?Qr(d,w,M,I,c):ro(d,w):(H._visibility|=2,Qr(d,w,M,I,c)),c&&Y&2048&&Ou(w.alternate,w);break;case 24:Qr(d,w,M,I,c),c&&Y&2048&&Bu(w.alternate,w);break;default:Qr(d,w,M,I,c)}n=n.sibling}}function ro(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var i=t,f=n,c=f.flags;switch(f.tag){case 22:ro(i,f),c&2048&&Ou(f.alternate,f);break;case 24:ro(i,f),c&2048&&Bu(f.alternate,f);break;default:ro(i,f)}n=n.sibling}}var io=8192;function $r(t){if(t.subtreeFlags&io)for(t=t.child;t!==null;)Qg(t),t=t.sibling}function Qg(t){switch(t.tag){case 26:$r(t),t.flags&io&&t.memoizedState!==null&&X6(gn,t.memoizedState,t.memoizedProps);break;case 5:$r(t);break;case 3:case 4:var n=gn;gn=ps(t.stateNode.containerInfo),$r(t),gn=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=io,io=16777216,$r(t),io=n):$r(t));break;default:$r(t)}}function $g(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function oo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var f=n[i];lt=f,Hg(f,t)}$g(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Pg(t),t=t.sibling}function Pg(t){switch(t.tag){case 0:case 11:case 15:oo(t),t.flags&2048&&ua(9,t,t.return);break;case 3:oo(t);break;case 12:oo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,rs(t)):oo(t);break;default:oo(t)}}function rs(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var f=n[i];lt=f,Hg(f,t)}$g(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ua(8,n,n.return),rs(n);break;case 22:i=n.stateNode,i._visibility&2&&(i._visibility&=-3,rs(n));break;default:rs(n)}t=t.sibling}}function Hg(t,n){for(;lt!==null;){var i=lt;switch(i.tag){case 0:case 11:case 15:ua(8,i,n);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var f=i.memoizedState.cachePool.pool;f!=null&&f.refCount++}break;case 24:Qi(i.memoizedState.cache)}if(f=i.child,f!==null)f.return=i,lt=f;else e:for(i=t;lt!==null;){f=lt;var c=f.sibling,d=f.return;if(Og(f),f===i){lt=null;break e}if(c!==null){c.return=d,lt=c;break e}lt=d}}}var h6={getCacheForType:function(t){var n=vt(rt),i=n.data.get(t);return i===void 0&&(i=t(),n.data.set(t,i)),i}},m6=typeof WeakMap=="function"?WeakMap:Map,Ne=0,_e=null,ve=null,Le=0,Ie=0,Qt=null,ma=!1,Pr=!1,_u=!1,Fn=0,Fe=0,ga=0,Ka=0,Uu=0,an=0,Hr=0,fo=null,At=null,Yu=!1,Gu=0,is=1/0,os=null,pa=null,gt=0,ya=null,Zr=null,Jr=0,Qu=0,$u=null,Zg=null,so=0,Pu=null;function $t(){if((Ne&2)!==0&&Le!==0)return Le&-Le;if(_.T!==null){var t=zr;return t!==0?t:Xu()}return sh()}function Jg(){an===0&&(an=(Le&536870912)===0||Ce?rh():536870912);var t=nn.current;return t!==null&&(t.flags|=32),an}function Pt(t,n,i){(t===_e&&(Ie===2||Ie===9)||t.cancelPendingCommit!==null)&&(Fr(t,0),ba(t,Le,an,!1)),Ci(t,i),((Ne&2)===0||t!==_e)&&(t===_e&&((Ne&2)===0&&(Ka|=i),Fe===4&&ba(t,Le,an,!1)),Tn(t))}function Fg(t,n,i){if((Ne&6)!==0)throw Error(o(327));var f=!i&&(n&124)===0&&(n&t.expiredLanes)===0||Si(t,n),c=f?y6(t,n):Ju(t,n,!0),d=f;do{if(c===0){Pr&&!f&&ba(t,n,0,!1);break}else{if(i=t.current.alternate,d&&!g6(i)){c=Ju(t,n,!1),d=!1;continue}if(c===2){if(d=n,t.errorRecoveryDisabledLanes&d)var w=0;else w=t.pendingLanes&-536870913,w=w!==0?w:w&536870912?536870912:0;if(w!==0){n=w;e:{var M=t;c=fo;var I=M.current.memoizedState.isDehydrated;if(I&&(Fr(M,w).flags|=256),w=Ju(M,w,!1),w!==2){if(_u&&!I){M.errorRecoveryDisabledLanes|=d,Ka|=d,c=4;break e}d=At,At=c,d!==null&&(At===null?At=d:At.push.apply(At,d))}c=w}if(d=!1,c!==2)continue}}if(c===1){Fr(t,0),ba(t,n,0,!0);break}e:{switch(f=t,d=c,d){case 0:case 1:throw Error(o(345));case 4:if((n&4194048)!==n)break;case 6:ba(f,n,an,!ma);break e;case 2:At=null;break;case 3:case 5:break;default:throw Error(o(329))}if((n&62914560)===n&&(c=Gu+300-Ln(),10<c)){if(ba(f,n,an,!ma),yf(f,0,!0)!==0)break e;f.timeoutHandle=j2(qg.bind(null,f,i,At,os,Yu,n,an,Ka,Hr,ma,d,2,-0,0),c);break e}qg(f,i,At,os,Yu,n,an,Ka,Hr,ma,d,0,-0,0)}}break}while(!0);Tn(t)}function qg(t,n,i,f,c,d,w,M,I,Y,H,J,G,$){if(t.timeoutHandle=-1,J=n.subtreeFlags,(J&8192||(J&16785408)===16785408)&&(po={stylesheets:null,count:0,unsuspend:V6},Qg(n),J=W6(),J!==null)){t.cancelPendingCommit=J(n2.bind(null,t,n,d,i,f,c,w,M,I,H,1,G,$)),ba(t,d,w,!Y);return}n2(t,n,d,i,f,c,w,M,I)}function g6(t){for(var n=t;;){var i=n.tag;if((i===0||i===11||i===15)&&n.flags&16384&&(i=n.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var f=0;f<i.length;f++){var c=i[f],d=c.getSnapshot;c=c.value;try{if(!_t(d(),c))return!1}catch{return!1}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ba(t,n,i,f){n&=~Uu,n&=~Ka,t.suspendedLanes|=n,t.pingedLanes&=~n,f&&(t.warmLanes|=n),f=t.expirationTimes;for(var c=n;0<c;){var d=31-Bt(c),w=1<<d;f[d]=-1,c&=~w}i!==0&&oh(t,i,n)}function fs(){return(Ne&6)===0?(lo(0),!1):!0}function Hu(){if(ve!==null){if(Ie===0)var t=ve.return;else t=ve,Yn=Ja=null,su(t),Yr=null,Ki=0,t=ve;for(;t!==null;)Eg(t.alternate,t),t=t.return;ve=null}}function Fr(t,n){var i=t.timeoutHandle;i!==-1&&(t.timeoutHandle=-1,A6(i)),i=t.cancelPendingCommit,i!==null&&(t.cancelPendingCommit=null,i()),Hu(),_e=t,ve=i=Bn(t.current,null),Le=n,Ie=0,Qt=null,ma=!1,Pr=Si(t,n),_u=!1,Hr=an=Uu=Ka=ga=Fe=0,At=fo=null,Yu=!1,(n&8)!==0&&(n|=n&32);var f=t.entangledLanes;if(f!==0)for(t=t.entanglements,f&=n;0<f;){var c=31-Bt(f),d=1<<c;n|=t[c],f&=~d}return Fn=n,Tf(),i}function Vg(t,n){ge=null,_.H=Ff,n===Pi||n===_f?(n=hm(),Ie=3):n===cm?(n=hm(),Ie=4):Ie=n===mg?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qt=n,ve===null&&(Fe=1,Kf(t,Wt(n,t.current)))}function Xg(){var t=_.H;return _.H=Ff,t===null?Ff:t}function Wg(){var t=_.A;return _.A=h6,t}function Zu(){Fe=4,ma||(Le&4194048)!==Le&&nn.current!==null||(Pr=!0),(ga&134217727)===0&&(Ka&134217727)===0||_e===null||ba(_e,Le,an,!1)}function Ju(t,n,i){var f=Ne;Ne|=2;var c=Xg(),d=Wg();(_e!==t||Le!==n)&&(os=null,Fr(t,n)),n=!1;var w=Fe;e:do try{if(Ie!==0&&ve!==null){var M=ve,I=Qt;switch(Ie){case 8:Hu(),w=6;break e;case 3:case 2:case 9:case 6:nn.current===null&&(n=!0);var Y=Ie;if(Ie=0,Qt=null,qr(t,M,I,Y),i&&Pr){w=0;break e}break;default:Y=Ie,Ie=0,Qt=null,qr(t,M,I,Y)}}p6(),w=Fe;break}catch(H){Vg(t,H)}while(!0);return n&&t.shellSuspendCounter++,Yn=Ja=null,Ne=f,_.H=c,_.A=d,ve===null&&(_e=null,Le=0,Tf()),w}function p6(){for(;ve!==null;)Kg(ve)}function y6(t,n){var i=Ne;Ne|=2;var f=Xg(),c=Wg();_e!==t||Le!==n?(os=null,is=Ln()+500,Fr(t,n)):Pr=Si(t,n);e:do try{if(Ie!==0&&ve!==null){n=ve;var d=Qt;t:switch(Ie){case 1:Ie=0,Qt=null,qr(t,n,d,1);break;case 2:case 9:if(um(d)){Ie=0,Qt=null,e2(n);break}n=function(){Ie!==2&&Ie!==9||_e!==t||(Ie=7),Tn(t)},d.then(n,n);break e;case 3:Ie=7;break e;case 4:Ie=5;break e;case 7:um(d)?(Ie=0,Qt=null,e2(n)):(Ie=0,Qt=null,qr(t,n,d,7));break;case 5:var w=null;switch(ve.tag){case 26:w=ve.memoizedState;case 5:case 27:var M=ve;if(!w||R2(w)){Ie=0,Qt=null;var I=M.sibling;if(I!==null)ve=I;else{var Y=M.return;Y!==null?(ve=Y,ss(Y)):ve=null}break t}}Ie=0,Qt=null,qr(t,n,d,5);break;case 6:Ie=0,Qt=null,qr(t,n,d,6);break;case 8:Hu(),Fe=6;break e;default:throw Error(o(462))}}b6();break}catch(H){Vg(t,H)}while(!0);return Yn=Ja=null,_.H=f,_.A=c,Ne=i,ve!==null?0:(_e=null,Le=0,Tf(),Fe)}function b6(){for(;ve!==null&&!Yw();)Kg(ve)}function Kg(t){var n=Cg(t.alternate,t,Fn);t.memoizedProps=t.pendingProps,n===null?ss(t):ve=n}function e2(t){var n=t,i=n.alternate;switch(n.tag){case 15:case 0:n=vg(i,n,n.pendingProps,n.type,void 0,Le);break;case 11:n=vg(i,n,n.pendingProps,n.type.render,n.ref,Le);break;case 5:su(n);default:Eg(i,n),n=ve=tm(n,Fn),n=Cg(i,n,Fn)}t.memoizedProps=t.pendingProps,n===null?ss(t):ve=n}function qr(t,n,i,f){Yn=Ja=null,su(n),Yr=null,Ki=0;var c=n.return;try{if(f6(t,c,n,i,Le)){Fe=1,Kf(t,Wt(i,t.current)),ve=null;return}}catch(d){if(c!==null)throw ve=c,d;Fe=1,Kf(t,Wt(i,t.current)),ve=null;return}n.flags&32768?(Ce||f===1?t=!0:Pr||(Le&536870912)!==0?t=!1:(ma=t=!0,(f===2||f===9||f===3||f===6)&&(f=nn.current,f!==null&&f.tag===13&&(f.flags|=16384))),t2(n,t)):ss(n)}function ss(t){var n=t;do{if((n.flags&32768)!==0){t2(n,ma);return}t=n.return;var i=l6(n.alternate,n,Fn);if(i!==null){ve=i;return}if(n=n.sibling,n!==null){ve=n;return}ve=n=t}while(n!==null);Fe===0&&(Fe=5)}function t2(t,n){do{var i=c6(t.alternate,t);if(i!==null){i.flags&=32767,ve=i;return}if(i=t.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!n&&(t=t.sibling,t!==null)){ve=t;return}ve=t=i}while(t!==null);Fe=6,ve=null}function n2(t,n,i,f,c,d,w,M,I){t.cancelPendingCommit=null;do ls();while(gt!==0);if((Ne&6)!==0)throw Error(o(327));if(n!==null){if(n===t.current)throw Error(o(177));if(d=n.lanes|n.childLanes,d|=Bc,Vw(t,i,d,w,M,I),t===_e&&(ve=_e=null,Le=0),Zr=n,ya=t,Jr=i,Qu=d,$u=c,Zg=f,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,M6(mf,function(){return f2(),null})):(t.callbackNode=null,t.callbackPriority=0),f=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||f){f=_.T,_.T=null,c=q.p,q.p=2,w=Ne,Ne|=4;try{u6(t,n,i)}finally{Ne=w,q.p=c,_.T=f}}gt=1,a2(),r2(),i2()}}function a2(){if(gt===1){gt=0;var t=ya,n=Zr,i=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||i){i=_.T,_.T=null;var f=q.p;q.p=2;var c=Ne;Ne|=4;try{Ug(n,t);var d=id,w=Hh(t.containerInfo),M=d.focusedElem,I=d.selectionRange;if(w!==M&&M&&M.ownerDocument&&Ph(M.ownerDocument.documentElement,M)){if(I!==null&&Dc(M)){var Y=I.start,H=I.end;if(H===void 0&&(H=Y),"selectionStart"in M)M.selectionStart=Y,M.selectionEnd=Math.min(H,M.value.length);else{var J=M.ownerDocument||document,G=J&&J.defaultView||window;if(G.getSelection){var $=G.getSelection(),ce=M.textContent.length,fe=Math.min(I.start,ce),Re=I.end===void 0?fe:Math.min(I.end,ce);!$.extend&&fe>Re&&(w=Re,Re=fe,fe=w);var B=$h(M,fe),R=$h(M,Re);if(B&&R&&($.rangeCount!==1||$.anchorNode!==B.node||$.anchorOffset!==B.offset||$.focusNode!==R.node||$.focusOffset!==R.offset)){var U=J.createRange();U.setStart(B.node,B.offset),$.removeAllRanges(),fe>Re?($.addRange(U),$.extend(R.node,R.offset)):(U.setEnd(R.node,R.offset),$.addRange(U))}}}}for(J=[],$=M;$=$.parentNode;)$.nodeType===1&&J.push({element:$,left:$.scrollLeft,top:$.scrollTop});for(typeof M.focus=="function"&&M.focus(),M=0;M<J.length;M++){var Z=J[M];Z.element.scrollLeft=Z.left,Z.element.scrollTop=Z.top}}xs=!!rd,id=rd=null}finally{Ne=c,q.p=f,_.T=i}}t.current=n,gt=2}}function r2(){if(gt===2){gt=0;var t=ya,n=Zr,i=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||i){i=_.T,_.T=null;var f=q.p;q.p=2;var c=Ne;Ne|=4;try{Rg(t,n.alternate,n)}finally{Ne=c,q.p=f,_.T=i}}gt=3}}function i2(){if(gt===4||gt===3){gt=0,Gw();var t=ya,n=Zr,i=Jr,f=Zg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?gt=5:(gt=0,Zr=ya=null,o2(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(pa=null),uc(i),n=n.stateNode,Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot(Li,n,void 0,(n.current.flags&128)===128)}catch{}if(f!==null){n=_.T,c=q.p,q.p=2,_.T=null;try{for(var d=t.onRecoverableError,w=0;w<f.length;w++){var M=f[w];d(M.value,{componentStack:M.stack})}}finally{_.T=n,q.p=c}}(Jr&3)!==0&&ls(),Tn(t),c=t.pendingLanes,(i&4194090)!==0&&(c&42)!==0?t===Pu?so++:(so=0,Pu=t):so=0,lo(0)}}function o2(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Qi(n)))}function ls(t){return a2(),r2(),i2(),f2()}function f2(){if(gt!==5)return!1;var t=ya,n=Qu;Qu=0;var i=uc(Jr),f=_.T,c=q.p;try{q.p=32>i?32:i,_.T=null,i=$u,$u=null;var d=ya,w=Jr;if(gt=0,Zr=ya=null,Jr=0,(Ne&6)!==0)throw Error(o(331));var M=Ne;if(Ne|=4,Pg(d.current),Gg(d,d.current,w,i),Ne=M,lo(0,!1),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot(Li,d)}catch{}return!0}finally{q.p=c,_.T=f,o2(t,n)}}function s2(t,n,i){n=Wt(i,n),n=Mu(t.stateNode,n,2),t=fa(t,n,2),t!==null&&(Ci(t,2),Tn(t))}function Oe(t,n,i){if(t.tag===3)s2(t,t,i);else for(;n!==null;){if(n.tag===3){s2(n,t,i);break}else if(n.tag===1){var f=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(pa===null||!pa.has(f))){t=Wt(i,t),i=dg(2),f=fa(n,i,2),f!==null&&(hg(i,f,n,t),Ci(f,2),Tn(f));break}}n=n.return}}function Fu(t,n,i){var f=t.pingCache;if(f===null){f=t.pingCache=new m6;var c=new Set;f.set(n,c)}else c=f.get(n),c===void 0&&(c=new Set,f.set(n,c));c.has(i)||(_u=!0,c.add(i),t=w6.bind(null,t,n,i),n.then(t,t))}function w6(t,n,i){var f=t.pingCache;f!==null&&f.delete(n),t.pingedLanes|=t.suspendedLanes&i,t.warmLanes&=~i,_e===t&&(Le&i)===i&&(Fe===4||Fe===3&&(Le&62914560)===Le&&300>Ln()-Gu?(Ne&2)===0&&Fr(t,0):Uu|=i,Hr===Le&&(Hr=0)),Tn(t)}function l2(t,n){n===0&&(n=ih()),t=Nr(t,n),t!==null&&(Ci(t,n),Tn(t))}function v6(t){var n=t.memoizedState,i=0;n!==null&&(i=n.retryLane),l2(t,i)}function x6(t,n){var i=0;switch(t.tag){case 13:var f=t.stateNode,c=t.memoizedState;c!==null&&(i=c.retryLane);break;case 19:f=t.stateNode;break;case 22:f=t.stateNode._retryCache;break;default:throw Error(o(314))}f!==null&&f.delete(n),l2(t,i)}function M6(t,n){return fc(t,n)}var cs=null,Vr=null,qu=!1,us=!1,Vu=!1,er=0;function Tn(t){t!==Vr&&t.next===null&&(Vr===null?cs=Vr=t:Vr=Vr.next=t),us=!0,qu||(qu=!0,L6())}function lo(t,n){if(!Vu&&us){Vu=!0;do for(var i=!1,f=cs;f!==null;){if(t!==0){var c=f.pendingLanes;if(c===0)var d=0;else{var w=f.suspendedLanes,M=f.pingedLanes;d=(1<<31-Bt(42|t)+1)-1,d&=c&~(w&~M),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(i=!0,h2(f,d))}else d=Le,d=yf(f,f===_e?d:0,f.cancelPendingCommit!==null||f.timeoutHandle!==-1),(d&3)===0||Si(f,d)||(i=!0,h2(f,d));f=f.next}while(i);Vu=!1}}function j6(){c2()}function c2(){us=qu=!1;var t=0;er!==0&&(D6()&&(t=er),er=0);for(var n=Ln(),i=null,f=cs;f!==null;){var c=f.next,d=u2(f,n);d===0?(f.next=null,i===null?cs=c:i.next=c,c===null&&(Vr=i)):(i=f,(t!==0||(d&3)!==0)&&(us=!0)),f=c}lo(t)}function u2(t,n){for(var i=t.suspendedLanes,f=t.pingedLanes,c=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var w=31-Bt(d),M=1<<w,I=c[w];I===-1?((M&i)===0||(M&f)!==0)&&(c[w]=qw(M,n)):I<=n&&(t.expiredLanes|=M),d&=~M}if(n=_e,i=Le,i=yf(t,t===n?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),f=t.callbackNode,i===0||t===n&&(Ie===2||Ie===9)||t.cancelPendingCommit!==null)return f!==null&&f!==null&&sc(f),t.callbackNode=null,t.callbackPriority=0;if((i&3)===0||Si(t,i)){if(n=i&-i,n===t.callbackPriority)return n;switch(f!==null&&sc(f),uc(i)){case 2:case 8:i=nh;break;case 32:i=mf;break;case 268435456:i=ah;break;default:i=mf}return f=d2.bind(null,t),i=fc(i,f),t.callbackPriority=n,t.callbackNode=i,n}return f!==null&&f!==null&&sc(f),t.callbackPriority=2,t.callbackNode=null,2}function d2(t,n){if(gt!==0&&gt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var i=t.callbackNode;if(ls()&&t.callbackNode!==i)return null;var f=Le;return f=yf(t,t===_e?f:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),f===0?null:(Fg(t,f,n),u2(t,Ln()),t.callbackNode!=null&&t.callbackNode===i?d2.bind(null,t):null)}function h2(t,n){if(ls())return null;Fg(t,n,!0)}function L6(){z6(function(){(Ne&6)!==0?fc(th,j6):c2()})}function Xu(){return er===0&&(er=rh()),er}function m2(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Mf(""+t)}function g2(t,n){var i=n.ownerDocument.createElement("input");return i.name=n.name,i.value=n.value,t.id&&i.setAttribute("form",t.id),n.parentNode.insertBefore(i,n),t=new FormData(t),i.parentNode.removeChild(i),t}function S6(t,n,i,f,c){if(n==="submit"&&i&&i.stateNode===c){var d=m2((c[Tt]||null).action),w=f.submitter;w&&(n=(n=w[Tt]||null)?m2(n.formAction):w.getAttribute("formAction"),n!==null&&(d=n,w=null));var M=new Cf("action","action",null,f,c);t.push({event:M,listeners:[{instance:null,listener:function(){if(f.defaultPrevented){if(er!==0){var I=w?g2(c,w):new FormData(c);yu(i,{pending:!0,data:I,method:c.method,action:d},null,I)}}else typeof d=="function"&&(M.preventDefault(),I=w?g2(c,w):new FormData(c),yu(i,{pending:!0,data:I,method:c.method,action:d},d,I))},currentTarget:c}]})}}for(var Wu=0;Wu<Oc.length;Wu++){var Ku=Oc[Wu],C6=Ku.toLowerCase(),k6=Ku[0].toUpperCase()+Ku.slice(1);mn(C6,"on"+k6)}mn(Fh,"onAnimationEnd"),mn(qh,"onAnimationIteration"),mn(Vh,"onAnimationStart"),mn("dblclick","onDoubleClick"),mn("focusin","onFocus"),mn("focusout","onBlur"),mn(Pv,"onTransitionRun"),mn(Hv,"onTransitionStart"),mn(Zv,"onTransitionCancel"),mn(Xh,"onTransitionEnd"),vr("onMouseEnter",["mouseout","mouseover"]),vr("onMouseLeave",["mouseout","mouseover"]),vr("onPointerEnter",["pointerout","pointerover"]),vr("onPointerLeave",["pointerout","pointerover"]),_a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),_a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),_a("onBeforeInput",["compositionend","keypress","textInput","paste"]),_a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),_a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),_a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),E6=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(co));function p2(t,n){n=(n&4)!==0;for(var i=0;i<t.length;i++){var f=t[i],c=f.event;f=f.listeners;e:{var d=void 0;if(n)for(var w=f.length-1;0<=w;w--){var M=f[w],I=M.instance,Y=M.currentTarget;if(M=M.listener,I!==d&&c.isPropagationStopped())break e;d=M,c.currentTarget=Y;try{d(c)}catch(H){Wf(H)}c.currentTarget=null,d=I}else for(w=0;w<f.length;w++){if(M=f[w],I=M.instance,Y=M.currentTarget,M=M.listener,I!==d&&c.isPropagationStopped())break e;d=M,c.currentTarget=Y;try{d(c)}catch(H){Wf(H)}c.currentTarget=null,d=I}}}}function xe(t,n){var i=n[dc];i===void 0&&(i=n[dc]=new Set);var f=t+"__bubble";i.has(f)||(y2(n,t,2,!1),i.add(f))}function ed(t,n,i){var f=0;n&&(f|=4),y2(i,t,f,n)}var ds="_reactListening"+Math.random().toString(36).slice(2);function td(t){if(!t[ds]){t[ds]=!0,ch.forEach(function(i){i!=="selectionchange"&&(E6.has(i)||ed(i,!1,t),ed(i,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[ds]||(n[ds]=!0,ed("selectionchange",!1,n))}}function y2(t,n,i,f){switch(G2(n)){case 2:var c=tx;break;case 8:c=nx;break;default:c=gd}i=c.bind(null,n,i,t),c=void 0,!jc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),f?c!==void 0?t.addEventListener(n,i,{capture:!0,passive:c}):t.addEventListener(n,i,!0):c!==void 0?t.addEventListener(n,i,{passive:c}):t.addEventListener(n,i,!1)}function nd(t,n,i,f,c){var d=f;if((n&1)===0&&(n&2)===0&&f!==null)e:for(;;){if(f===null)return;var w=f.tag;if(w===3||w===4){var M=f.stateNode.containerInfo;if(M===c)break;if(w===4)for(w=f.return;w!==null;){var I=w.tag;if((I===3||I===4)&&w.stateNode.containerInfo===c)return;w=w.return}for(;M!==null;){if(w=yr(M),w===null)return;if(I=w.tag,I===5||I===6||I===26||I===27){f=d=w;continue e}M=M.parentNode}}f=f.return}Lh(function(){var Y=d,H=xc(i),J=[];e:{var G=Wh.get(t);if(G!==void 0){var $=Cf,ce=t;switch(t){case"keypress":if(Lf(i)===0)break e;case"keydown":case"keyup":$=Mv;break;case"focusin":ce="focus",$=kc;break;case"focusout":ce="blur",$=kc;break;case"beforeblur":case"afterblur":$=kc;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=kh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=cv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=Sv;break;case Fh:case qh:case Vh:$=hv;break;case Xh:$=kv;break;case"scroll":case"scrollend":$=sv;break;case"wheel":$=Tv;break;case"copy":case"cut":case"paste":$=gv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=Th;break;case"toggle":case"beforetoggle":$=Iv}var fe=(n&4)!==0,Re=!fe&&(t==="scroll"||t==="scrollend"),B=fe?G!==null?G+"Capture":null:G;fe=[];for(var R=Y,U;R!==null;){var Z=R;if(U=Z.stateNode,Z=Z.tag,Z!==5&&Z!==26&&Z!==27||U===null||B===null||(Z=Ti(R,B),Z!=null&&fe.push(uo(R,Z,U))),Re)break;R=R.return}0<fe.length&&(G=new $(G,ce,null,i,H),J.push({event:G,listeners:fe}))}}if((n&7)===0){e:{if(G=t==="mouseover"||t==="pointerover",$=t==="mouseout"||t==="pointerout",G&&i!==vc&&(ce=i.relatedTarget||i.fromElement)&&(yr(ce)||ce[pr]))break e;if(($||G)&&(G=H.window===H?H:(G=H.ownerDocument)?G.defaultView||G.parentWindow:window,$?(ce=i.relatedTarget||i.toElement,$=Y,ce=ce?yr(ce):null,ce!==null&&(Re=u(ce),fe=ce.tag,ce!==Re||fe!==5&&fe!==27&&fe!==6)&&(ce=null)):($=null,ce=Y),$!==ce)){if(fe=kh,Z="onMouseLeave",B="onMouseEnter",R="mouse",(t==="pointerout"||t==="pointerover")&&(fe=Th,Z="onPointerLeave",B="onPointerEnter",R="pointer"),Re=$==null?G:Ei($),U=ce==null?G:Ei(ce),G=new fe(Z,R+"leave",$,i,H),G.target=Re,G.relatedTarget=U,Z=null,yr(H)===Y&&(fe=new fe(B,R+"enter",ce,i,H),fe.target=U,fe.relatedTarget=Re,Z=fe),Re=Z,$&&ce)t:{for(fe=$,B=ce,R=0,U=fe;U;U=Xr(U))R++;for(U=0,Z=B;Z;Z=Xr(Z))U++;for(;0<R-U;)fe=Xr(fe),R--;for(;0<U-R;)B=Xr(B),U--;for(;R--;){if(fe===B||B!==null&&fe===B.alternate)break t;fe=Xr(fe),B=Xr(B)}fe=null}else fe=null;$!==null&&b2(J,G,$,fe,!1),ce!==null&&Re!==null&&b2(J,Re,ce,fe,!0)}}e:{if(G=Y?Ei(Y):window,$=G.nodeName&&G.nodeName.toLowerCase(),$==="select"||$==="input"&&G.type==="file")var te=Bh;else if(Rh(G))if(_h)te=Gv;else{te=Uv;var pe=_v}else $=G.nodeName,!$||$.toLowerCase()!=="input"||G.type!=="checkbox"&&G.type!=="radio"?Y&&wc(Y.elementType)&&(te=Bh):te=Yv;if(te&&(te=te(t,Y))){Oh(J,te,i,H);break e}pe&&pe(t,G,Y),t==="focusout"&&Y&&G.type==="number"&&Y.memoizedProps.value!=null&&bc(G,"number",G.value)}switch(pe=Y?Ei(Y):window,t){case"focusin":(Rh(pe)||pe.contentEditable==="true")&&(kr=pe,Ac=Y,Bi=null);break;case"focusout":Bi=Ac=kr=null;break;case"mousedown":zc=!0;break;case"contextmenu":case"mouseup":case"dragend":zc=!1,Zh(J,i,H);break;case"selectionchange":if($v)break;case"keydown":case"keyup":Zh(J,i,H)}var re;if(Tc)e:{switch(t){case"compositionstart":var le="onCompositionStart";break e;case"compositionend":le="onCompositionEnd";break e;case"compositionupdate":le="onCompositionUpdate";break e}le=void 0}else Cr?Ah(t,i)&&(le="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(le="onCompositionStart");le&&(Nh&&i.locale!=="ko"&&(Cr||le!=="onCompositionStart"?le==="onCompositionEnd"&&Cr&&(re=Sh()):(aa=H,Lc="value"in aa?aa.value:aa.textContent,Cr=!0)),pe=hs(Y,le),0<pe.length&&(le=new Eh(le,t,null,i,H),J.push({event:le,listeners:pe}),re?le.data=re:(re=zh(i),re!==null&&(le.data=re)))),(re=Av?zv(t,i):Rv(t,i))&&(le=hs(Y,"onBeforeInput"),0<le.length&&(pe=new Eh("onBeforeInput","beforeinput",null,i,H),J.push({event:pe,listeners:le}),pe.data=re)),S6(J,t,Y,i,H)}p2(J,n)})}function uo(t,n,i){return{instance:t,listener:n,currentTarget:i}}function hs(t,n){for(var i=n+"Capture",f=[];t!==null;){var c=t,d=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||d===null||(c=Ti(t,i),c!=null&&f.unshift(uo(t,c,d)),c=Ti(t,n),c!=null&&f.push(uo(t,c,d))),t.tag===3)return f;t=t.return}return[]}function Xr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function b2(t,n,i,f,c){for(var d=n._reactName,w=[];i!==null&&i!==f;){var M=i,I=M.alternate,Y=M.stateNode;if(M=M.tag,I!==null&&I===f)break;M!==5&&M!==26&&M!==27||Y===null||(I=Y,c?(Y=Ti(i,d),Y!=null&&w.unshift(uo(i,Y,I))):c||(Y=Ti(i,d),Y!=null&&w.push(uo(i,Y,I)))),i=i.return}w.length!==0&&t.push({event:n,listeners:w})}var T6=/\r\n?/g,N6=/\u0000|\uFFFD/g;function w2(t){return(typeof t=="string"?t:""+t).replace(T6,`
`).replace(N6,"")}function v2(t,n){return n=w2(n),w2(t)===n}function ms(){}function ze(t,n,i,f,c,d){switch(i){case"children":typeof f=="string"?n==="body"||n==="textarea"&&f===""||jr(t,f):(typeof f=="number"||typeof f=="bigint")&&n!=="body"&&jr(t,""+f);break;case"className":wf(t,"class",f);break;case"tabIndex":wf(t,"tabindex",f);break;case"dir":case"role":case"viewBox":case"width":case"height":wf(t,i,f);break;case"style":Mh(t,f,d);break;case"data":if(n!=="object"){wf(t,"data",f);break}case"src":case"href":if(f===""&&(n!=="a"||i!=="href")){t.removeAttribute(i);break}if(f==null||typeof f=="function"||typeof f=="symbol"||typeof f=="boolean"){t.removeAttribute(i);break}f=Mf(""+f),t.setAttribute(i,f);break;case"action":case"formAction":if(typeof f=="function"){t.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(i==="formAction"?(n!=="input"&&ze(t,n,"name",c.name,c,null),ze(t,n,"formEncType",c.formEncType,c,null),ze(t,n,"formMethod",c.formMethod,c,null),ze(t,n,"formTarget",c.formTarget,c,null)):(ze(t,n,"encType",c.encType,c,null),ze(t,n,"method",c.method,c,null),ze(t,n,"target",c.target,c,null)));if(f==null||typeof f=="symbol"||typeof f=="boolean"){t.removeAttribute(i);break}f=Mf(""+f),t.setAttribute(i,f);break;case"onClick":f!=null&&(t.onclick=ms);break;case"onScroll":f!=null&&xe("scroll",t);break;case"onScrollEnd":f!=null&&xe("scrollend",t);break;case"dangerouslySetInnerHTML":if(f!=null){if(typeof f!="object"||!("__html"in f))throw Error(o(61));if(i=f.__html,i!=null){if(c.children!=null)throw Error(o(60));t.innerHTML=i}}break;case"multiple":t.multiple=f&&typeof f!="function"&&typeof f!="symbol";break;case"muted":t.muted=f&&typeof f!="function"&&typeof f!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(f==null||typeof f=="function"||typeof f=="boolean"||typeof f=="symbol"){t.removeAttribute("xlink:href");break}i=Mf(""+f),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":f!=null&&typeof f!="function"&&typeof f!="symbol"?t.setAttribute(i,""+f):t.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":f&&typeof f!="function"&&typeof f!="symbol"?t.setAttribute(i,""):t.removeAttribute(i);break;case"capture":case"download":f===!0?t.setAttribute(i,""):f!==!1&&f!=null&&typeof f!="function"&&typeof f!="symbol"?t.setAttribute(i,f):t.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":f!=null&&typeof f!="function"&&typeof f!="symbol"&&!isNaN(f)&&1<=f?t.setAttribute(i,f):t.removeAttribute(i);break;case"rowSpan":case"start":f==null||typeof f=="function"||typeof f=="symbol"||isNaN(f)?t.removeAttribute(i):t.setAttribute(i,f);break;case"popover":xe("beforetoggle",t),xe("toggle",t),bf(t,"popover",f);break;case"xlinkActuate":Rn(t,"http://www.w3.org/1999/xlink","xlink:actuate",f);break;case"xlinkArcrole":Rn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",f);break;case"xlinkRole":Rn(t,"http://www.w3.org/1999/xlink","xlink:role",f);break;case"xlinkShow":Rn(t,"http://www.w3.org/1999/xlink","xlink:show",f);break;case"xlinkTitle":Rn(t,"http://www.w3.org/1999/xlink","xlink:title",f);break;case"xlinkType":Rn(t,"http://www.w3.org/1999/xlink","xlink:type",f);break;case"xmlBase":Rn(t,"http://www.w3.org/XML/1998/namespace","xml:base",f);break;case"xmlLang":Rn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",f);break;case"xmlSpace":Rn(t,"http://www.w3.org/XML/1998/namespace","xml:space",f);break;case"is":bf(t,"is",f);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=ov.get(i)||i,bf(t,i,f))}}function ad(t,n,i,f,c,d){switch(i){case"style":Mh(t,f,d);break;case"dangerouslySetInnerHTML":if(f!=null){if(typeof f!="object"||!("__html"in f))throw Error(o(61));if(i=f.__html,i!=null){if(c.children!=null)throw Error(o(60));t.innerHTML=i}}break;case"children":typeof f=="string"?jr(t,f):(typeof f=="number"||typeof f=="bigint")&&jr(t,""+f);break;case"onScroll":f!=null&&xe("scroll",t);break;case"onScrollEnd":f!=null&&xe("scrollend",t);break;case"onClick":f!=null&&(t.onclick=ms);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!uh.hasOwnProperty(i))e:{if(i[0]==="o"&&i[1]==="n"&&(c=i.endsWith("Capture"),n=i.slice(2,c?i.length-7:void 0),d=t[Tt]||null,d=d!=null?d[i]:null,typeof d=="function"&&t.removeEventListener(n,d,c),typeof f=="function")){typeof d!="function"&&d!==null&&(i in t?t[i]=null:t.hasAttribute(i)&&t.removeAttribute(i)),t.addEventListener(n,f,c);break e}i in t?t[i]=f:f===!0?t.setAttribute(i,""):bf(t,i,f)}}}function pt(t,n,i){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",t),xe("load",t);var f=!1,c=!1,d;for(d in i)if(i.hasOwnProperty(d)){var w=i[d];if(w!=null)switch(d){case"src":f=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,n));default:ze(t,n,d,w,i,null)}}c&&ze(t,n,"srcSet",i.srcSet,i,null),f&&ze(t,n,"src",i.src,i,null);return;case"input":xe("invalid",t);var M=d=w=c=null,I=null,Y=null;for(f in i)if(i.hasOwnProperty(f)){var H=i[f];if(H!=null)switch(f){case"name":c=H;break;case"type":w=H;break;case"checked":I=H;break;case"defaultChecked":Y=H;break;case"value":d=H;break;case"defaultValue":M=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(o(137,n));break;default:ze(t,n,f,H,i,null)}}bh(t,d,M,I,Y,w,c,!1),vf(t);return;case"select":xe("invalid",t),f=w=d=null;for(c in i)if(i.hasOwnProperty(c)&&(M=i[c],M!=null))switch(c){case"value":d=M;break;case"defaultValue":w=M;break;case"multiple":f=M;default:ze(t,n,c,M,i,null)}n=d,i=w,t.multiple=!!f,n!=null?Mr(t,!!f,n,!1):i!=null&&Mr(t,!!f,i,!0);return;case"textarea":xe("invalid",t),d=c=f=null;for(w in i)if(i.hasOwnProperty(w)&&(M=i[w],M!=null))switch(w){case"value":f=M;break;case"defaultValue":c=M;break;case"children":d=M;break;case"dangerouslySetInnerHTML":if(M!=null)throw Error(o(91));break;default:ze(t,n,w,M,i,null)}vh(t,f,c,d),vf(t);return;case"option":for(I in i)if(i.hasOwnProperty(I)&&(f=i[I],f!=null))switch(I){case"selected":t.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:ze(t,n,I,f,i,null)}return;case"dialog":xe("beforetoggle",t),xe("toggle",t),xe("cancel",t),xe("close",t);break;case"iframe":case"object":xe("load",t);break;case"video":case"audio":for(f=0;f<co.length;f++)xe(co[f],t);break;case"image":xe("error",t),xe("load",t);break;case"details":xe("toggle",t);break;case"embed":case"source":case"link":xe("error",t),xe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Y in i)if(i.hasOwnProperty(Y)&&(f=i[Y],f!=null))switch(Y){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,n));default:ze(t,n,Y,f,i,null)}return;default:if(wc(n)){for(H in i)i.hasOwnProperty(H)&&(f=i[H],f!==void 0&&ad(t,n,H,f,i,void 0));return}}for(M in i)i.hasOwnProperty(M)&&(f=i[M],f!=null&&ze(t,n,M,f,i,null))}function I6(t,n,i,f){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,d=null,w=null,M=null,I=null,Y=null,H=null;for($ in i){var J=i[$];if(i.hasOwnProperty($)&&J!=null)switch($){case"checked":break;case"value":break;case"defaultValue":I=J;default:f.hasOwnProperty($)||ze(t,n,$,null,f,J)}}for(var G in f){var $=f[G];if(J=i[G],f.hasOwnProperty(G)&&($!=null||J!=null))switch(G){case"type":d=$;break;case"name":c=$;break;case"checked":Y=$;break;case"defaultChecked":H=$;break;case"value":w=$;break;case"defaultValue":M=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(o(137,n));break;default:$!==J&&ze(t,n,G,$,f,J)}}yc(t,w,M,I,Y,H,d,c);return;case"select":$=w=M=G=null;for(d in i)if(I=i[d],i.hasOwnProperty(d)&&I!=null)switch(d){case"value":break;case"multiple":$=I;default:f.hasOwnProperty(d)||ze(t,n,d,null,f,I)}for(c in f)if(d=f[c],I=i[c],f.hasOwnProperty(c)&&(d!=null||I!=null))switch(c){case"value":G=d;break;case"defaultValue":M=d;break;case"multiple":w=d;default:d!==I&&ze(t,n,c,d,f,I)}n=M,i=w,f=$,G!=null?Mr(t,!!i,G,!1):!!f!=!!i&&(n!=null?Mr(t,!!i,n,!0):Mr(t,!!i,i?[]:"",!1));return;case"textarea":$=G=null;for(M in i)if(c=i[M],i.hasOwnProperty(M)&&c!=null&&!f.hasOwnProperty(M))switch(M){case"value":break;case"children":break;default:ze(t,n,M,null,f,c)}for(w in f)if(c=f[w],d=i[w],f.hasOwnProperty(w)&&(c!=null||d!=null))switch(w){case"value":G=c;break;case"defaultValue":$=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(o(91));break;default:c!==d&&ze(t,n,w,c,f,d)}wh(t,G,$);return;case"option":for(var ce in i)if(G=i[ce],i.hasOwnProperty(ce)&&G!=null&&!f.hasOwnProperty(ce))switch(ce){case"selected":t.selected=!1;break;default:ze(t,n,ce,null,f,G)}for(I in f)if(G=f[I],$=i[I],f.hasOwnProperty(I)&&G!==$&&(G!=null||$!=null))switch(I){case"selected":t.selected=G&&typeof G!="function"&&typeof G!="symbol";break;default:ze(t,n,I,G,f,$)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var fe in i)G=i[fe],i.hasOwnProperty(fe)&&G!=null&&!f.hasOwnProperty(fe)&&ze(t,n,fe,null,f,G);for(Y in f)if(G=f[Y],$=i[Y],f.hasOwnProperty(Y)&&G!==$&&(G!=null||$!=null))switch(Y){case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(o(137,n));break;default:ze(t,n,Y,G,f,$)}return;default:if(wc(n)){for(var Re in i)G=i[Re],i.hasOwnProperty(Re)&&G!==void 0&&!f.hasOwnProperty(Re)&&ad(t,n,Re,void 0,f,G);for(H in f)G=f[H],$=i[H],!f.hasOwnProperty(H)||G===$||G===void 0&&$===void 0||ad(t,n,H,G,f,$);return}}for(var B in i)G=i[B],i.hasOwnProperty(B)&&G!=null&&!f.hasOwnProperty(B)&&ze(t,n,B,null,f,G);for(J in f)G=f[J],$=i[J],!f.hasOwnProperty(J)||G===$||G==null&&$==null||ze(t,n,J,G,f,$)}var rd=null,id=null;function gs(t){return t.nodeType===9?t:t.ownerDocument}function x2(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function M2(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function od(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var fd=null;function D6(){var t=window.event;return t&&t.type==="popstate"?t===fd?!1:(fd=t,!0):(fd=null,!1)}var j2=typeof setTimeout=="function"?setTimeout:void 0,A6=typeof clearTimeout=="function"?clearTimeout:void 0,L2=typeof Promise=="function"?Promise:void 0,z6=typeof queueMicrotask=="function"?queueMicrotask:typeof L2<"u"?function(t){return L2.resolve(null).then(t).catch(R6)}:j2;function R6(t){setTimeout(function(){throw t})}function wa(t){return t==="head"}function S2(t,n){var i=n,f=0,c=0;do{var d=i.nextSibling;if(t.removeChild(i),d&&d.nodeType===8)if(i=d.data,i==="/$"){if(0<f&&8>f){i=f;var w=t.ownerDocument;if(i&1&&ho(w.documentElement),i&2&&ho(w.body),i&4)for(i=w.head,ho(i),w=i.firstChild;w;){var M=w.nextSibling,I=w.nodeName;w[ki]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&w.rel.toLowerCase()==="stylesheet"||i.removeChild(w),w=M}}if(c===0){t.removeChild(d),xo(n);return}c--}else i==="$"||i==="$?"||i==="$!"?c++:f=i.charCodeAt(0)-48;else f=0;i=d}while(i);xo(n)}function sd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var i=n;switch(n=n.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":sd(i),hc(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}t.removeChild(i)}}function O6(t,n,i,f){for(;t.nodeType===1;){var c=i;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!f&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(f){if(!t[ki])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=pn(t.nextSibling),t===null)break}return null}function B6(t,n,i){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=pn(t.nextSibling),t===null))return null;return t}function ld(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function _6(t,n){var i=t.ownerDocument;if(t.data!=="$?"||i.readyState==="complete")n();else{var f=function(){n(),i.removeEventListener("DOMContentLoaded",f)};i.addEventListener("DOMContentLoaded",f),t._reactRetry=f}}function pn(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var cd=null;function C2(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"){if(n===0)return t;n--}else i==="/$"&&n++}t=t.previousSibling}return null}function k2(t,n,i){switch(n=gs(i),t){case"html":if(t=n.documentElement,!t)throw Error(o(452));return t;case"head":if(t=n.head,!t)throw Error(o(453));return t;case"body":if(t=n.body,!t)throw Error(o(454));return t;default:throw Error(o(451))}}function ho(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);hc(t)}var rn=new Map,E2=new Set;function ps(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var qn=q.d;q.d={f:U6,r:Y6,D:G6,C:Q6,L:$6,m:P6,X:Z6,S:H6,M:J6};function U6(){var t=qn.f(),n=fs();return t||n}function Y6(t){var n=br(t);n!==null&&n.tag===5&&n.type==="form"?Fm(n):qn.r(t)}var Wr=typeof document>"u"?null:document;function T2(t,n,i){var f=Wr;if(f&&typeof n=="string"&&n){var c=Xt(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof i=="string"&&(c+='[crossorigin="'+i+'"]'),E2.has(c)||(E2.add(c),t={rel:t,crossOrigin:i,href:n},f.querySelector(c)===null&&(n=f.createElement("link"),pt(n,"link",t),ft(n),f.head.appendChild(n)))}}function G6(t){qn.D(t),T2("dns-prefetch",t,null)}function Q6(t,n){qn.C(t,n),T2("preconnect",t,n)}function $6(t,n,i){qn.L(t,n,i);var f=Wr;if(f&&t&&n){var c='link[rel="preload"][as="'+Xt(n)+'"]';n==="image"&&i&&i.imageSrcSet?(c+='[imagesrcset="'+Xt(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(c+='[imagesizes="'+Xt(i.imageSizes)+'"]')):c+='[href="'+Xt(t)+'"]';var d=c;switch(n){case"style":d=Kr(t);break;case"script":d=ei(t)}rn.has(d)||(t=v({rel:"preload",href:n==="image"&&i&&i.imageSrcSet?void 0:t,as:n},i),rn.set(d,t),f.querySelector(c)!==null||n==="style"&&f.querySelector(mo(d))||n==="script"&&f.querySelector(go(d))||(n=f.createElement("link"),pt(n,"link",t),ft(n),f.head.appendChild(n)))}}function P6(t,n){qn.m(t,n);var i=Wr;if(i&&t){var f=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Xt(f)+'"][href="'+Xt(t)+'"]',d=c;switch(f){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=ei(t)}if(!rn.has(d)&&(t=v({rel:"modulepreload",href:t},n),rn.set(d,t),i.querySelector(c)===null)){switch(f){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(go(d)))return}f=i.createElement("link"),pt(f,"link",t),ft(f),i.head.appendChild(f)}}}function H6(t,n,i){qn.S(t,n,i);var f=Wr;if(f&&t){var c=wr(f).hoistableStyles,d=Kr(t);n=n||"default";var w=c.get(d);if(!w){var M={loading:0,preload:null};if(w=f.querySelector(mo(d)))M.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},i),(i=rn.get(d))&&ud(t,i);var I=w=f.createElement("link");ft(I),pt(I,"link",t),I._p=new Promise(function(Y,H){I.onload=Y,I.onerror=H}),I.addEventListener("load",function(){M.loading|=1}),I.addEventListener("error",function(){M.loading|=2}),M.loading|=4,ys(w,n,f)}w={type:"stylesheet",instance:w,count:1,state:M},c.set(d,w)}}}function Z6(t,n){qn.X(t,n);var i=Wr;if(i&&t){var f=wr(i).hoistableScripts,c=ei(t),d=f.get(c);d||(d=i.querySelector(go(c)),d||(t=v({src:t,async:!0},n),(n=rn.get(c))&&dd(t,n),d=i.createElement("script"),ft(d),pt(d,"link",t),i.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},f.set(c,d))}}function J6(t,n){qn.M(t,n);var i=Wr;if(i&&t){var f=wr(i).hoistableScripts,c=ei(t),d=f.get(c);d||(d=i.querySelector(go(c)),d||(t=v({src:t,async:!0,type:"module"},n),(n=rn.get(c))&&dd(t,n),d=i.createElement("script"),ft(d),pt(d,"link",t),i.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},f.set(c,d))}}function N2(t,n,i,f){var c=(c=se.current)?ps(c):null;if(!c)throw Error(o(446));switch(t){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(n=Kr(i.href),i=wr(c).hoistableStyles,f=i.get(n),f||(f={type:"style",instance:null,count:0,state:null},i.set(n,f)),f):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){t=Kr(i.href);var d=wr(c).hoistableStyles,w=d.get(t);if(w||(c=c.ownerDocument||c,w={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,w),(d=c.querySelector(mo(t)))&&!d._p&&(w.instance=d,w.state.loading=5),rn.has(t)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},rn.set(t,i),d||F6(c,t,i,w.state))),n&&f===null)throw Error(o(528,""));return w}if(n&&f!==null)throw Error(o(529,""));return null;case"script":return n=i.async,i=i.src,typeof i=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ei(i),i=wr(c).hoistableScripts,f=i.get(n),f||(f={type:"script",instance:null,count:0,state:null},i.set(n,f)),f):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,t))}}function Kr(t){return'href="'+Xt(t)+'"'}function mo(t){return'link[rel="stylesheet"]['+t+"]"}function I2(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function F6(t,n,i,f){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?f.loading=1:(n=t.createElement("link"),f.preload=n,n.addEventListener("load",function(){return f.loading|=1}),n.addEventListener("error",function(){return f.loading|=2}),pt(n,"link",i),ft(n),t.head.appendChild(n))}function ei(t){return'[src="'+Xt(t)+'"]'}function go(t){return"script[async]"+t}function D2(t,n,i){if(n.count++,n.instance===null)switch(n.type){case"style":var f=t.querySelector('style[data-href~="'+Xt(i.href)+'"]');if(f)return n.instance=f,ft(f),f;var c=v({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return f=(t.ownerDocument||t).createElement("style"),ft(f),pt(f,"style",c),ys(f,i.precedence,t),n.instance=f;case"stylesheet":c=Kr(i.href);var d=t.querySelector(mo(c));if(d)return n.state.loading|=4,n.instance=d,ft(d),d;f=I2(i),(c=rn.get(c))&&ud(f,c),d=(t.ownerDocument||t).createElement("link"),ft(d);var w=d;return w._p=new Promise(function(M,I){w.onload=M,w.onerror=I}),pt(d,"link",f),n.state.loading|=4,ys(d,i.precedence,t),n.instance=d;case"script":return d=ei(i.src),(c=t.querySelector(go(d)))?(n.instance=c,ft(c),c):(f=i,(c=rn.get(d))&&(f=v({},i),dd(f,c)),t=t.ownerDocument||t,c=t.createElement("script"),ft(c),pt(c,"link",f),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(o(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(f=n.instance,n.state.loading|=4,ys(f,i.precedence,t));return n.instance}function ys(t,n,i){for(var f=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=f.length?f[f.length-1]:null,d=c,w=0;w<f.length;w++){var M=f[w];if(M.dataset.precedence===n)d=M;else if(d!==c)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=i.nodeType===9?i.head:i,n.insertBefore(t,n.firstChild))}function ud(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function dd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var bs=null;function A2(t,n,i){if(bs===null){var f=new Map,c=bs=new Map;c.set(i,f)}else c=bs,f=c.get(i),f||(f=new Map,c.set(i,f));if(f.has(t))return f;for(f.set(t,null),i=i.getElementsByTagName(t),c=0;c<i.length;c++){var d=i[c];if(!(d[ki]||d[wt]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var w=d.getAttribute(n)||"";w=t+w;var M=f.get(w);M?M.push(d):f.set(w,[d])}}return f}function z2(t,n,i){t=t.ownerDocument||t,t.head.insertBefore(i,n==="title"?t.querySelector("head > title"):null)}function q6(t,n,i){if(i===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function R2(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var po=null;function V6(){}function X6(t,n,i){if(po===null)throw Error(o(475));var f=po;if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=Kr(i.href),d=t.querySelector(mo(c));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(f.count++,f=ws.bind(f),t.then(f,f)),n.state.loading|=4,n.instance=d,ft(d);return}d=t.ownerDocument||t,i=I2(i),(c=rn.get(c))&&ud(i,c),d=d.createElement("link"),ft(d);var w=d;w._p=new Promise(function(M,I){w.onload=M,w.onerror=I}),pt(d,"link",i),n.instance=d}f.stylesheets===null&&(f.stylesheets=new Map),f.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(f.count++,n=ws.bind(f),t.addEventListener("load",n),t.addEventListener("error",n))}}function W6(){if(po===null)throw Error(o(475));var t=po;return t.stylesheets&&t.count===0&&hd(t,t.stylesheets),0<t.count?function(n){var i=setTimeout(function(){if(t.stylesheets&&hd(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(i)}}:null}function ws(){if(this.count--,this.count===0){if(this.stylesheets)hd(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var vs=null;function hd(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,vs=new Map,n.forEach(K6,t),vs=null,ws.call(t))}function K6(t,n){if(!(n.state.loading&4)){var i=vs.get(t);if(i)var f=i.get(null);else{i=new Map,vs.set(t,i);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<c.length;d++){var w=c[d];(w.nodeName==="LINK"||w.getAttribute("media")!=="not all")&&(i.set(w.dataset.precedence,w),f=w)}f&&i.set(null,f)}c=n.instance,w=c.getAttribute("data-precedence"),d=i.get(w)||f,d===f&&i.set(null,c),i.set(w,c),this.count++,f=ws.bind(this),c.addEventListener("load",f),c.addEventListener("error",f),d?d.parentNode.insertBefore(c,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var yo={$$typeof:O,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function ex(t,n,i,f,c,d,w,M){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=lc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lc(0),this.hiddenUpdates=lc(null),this.identifierPrefix=f,this.onUncaughtError=c,this.onCaughtError=d,this.onRecoverableError=w,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=M,this.incompleteTransitions=new Map}function O2(t,n,i,f,c,d,w,M,I,Y,H,J){return t=new ex(t,n,i,w,M,I,Y,J),n=1,d===!0&&(n|=24),d=Ut(3,null,null,n),t.current=d,d.stateNode=t,n=Fc(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:f,isDehydrated:i,cache:n},Wc(d),t}function B2(t){return t?(t=Ir,t):Ir}function _2(t,n,i,f,c,d){c=B2(c),f.context===null?f.context=c:f.pendingContext=c,f=oa(n),f.payload={element:i},d=d===void 0?null:d,d!==null&&(f.callback=d),i=fa(t,f,n),i!==null&&(Pt(i,t,n),Zi(i,t,n))}function U2(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<n?i:n}}function md(t,n){U2(t,n),(t=t.alternate)&&U2(t,n)}function Y2(t){if(t.tag===13){var n=Nr(t,67108864);n!==null&&Pt(n,t,67108864),md(t,67108864)}}var xs=!0;function tx(t,n,i,f){var c=_.T;_.T=null;var d=q.p;try{q.p=2,gd(t,n,i,f)}finally{q.p=d,_.T=c}}function nx(t,n,i,f){var c=_.T;_.T=null;var d=q.p;try{q.p=8,gd(t,n,i,f)}finally{q.p=d,_.T=c}}function gd(t,n,i,f){if(xs){var c=pd(f);if(c===null)nd(t,n,f,Ms,i),Q2(t,f);else if(rx(c,t,n,i,f))f.stopPropagation();else if(Q2(t,f),n&4&&-1<ax.indexOf(t)){for(;c!==null;){var d=br(c);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var w=Ba(d.pendingLanes);if(w!==0){var M=d;for(M.pendingLanes|=2,M.entangledLanes|=2;w;){var I=1<<31-Bt(w);M.entanglements[1]|=I,w&=~I}Tn(d),(Ne&6)===0&&(is=Ln()+500,lo(0))}}break;case 13:M=Nr(d,2),M!==null&&Pt(M,d,2),fs(),md(d,2)}if(d=pd(f),d===null&&nd(t,n,f,Ms,i),d===c)break;c=d}c!==null&&f.stopPropagation()}else nd(t,n,f,null,i)}}function pd(t){return t=xc(t),yd(t)}var Ms=null;function yd(t){if(Ms=null,t=yr(t),t!==null){var n=u(t);if(n===null)t=null;else{var i=n.tag;if(i===13){if(t=h(n),t!==null)return t;t=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Ms=t,null}function G2(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Qw()){case th:return 2;case nh:return 8;case mf:case $w:return 32;case ah:return 268435456;default:return 32}default:return 32}}var bd=!1,va=null,xa=null,Ma=null,bo=new Map,wo=new Map,ja=[],ax="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Q2(t,n){switch(t){case"focusin":case"focusout":va=null;break;case"dragenter":case"dragleave":xa=null;break;case"mouseover":case"mouseout":Ma=null;break;case"pointerover":case"pointerout":bo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":wo.delete(n.pointerId)}}function vo(t,n,i,f,c,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:i,eventSystemFlags:f,nativeEvent:d,targetContainers:[c]},n!==null&&(n=br(n),n!==null&&Y2(n)),t):(t.eventSystemFlags|=f,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function rx(t,n,i,f,c){switch(n){case"focusin":return va=vo(va,t,n,i,f,c),!0;case"dragenter":return xa=vo(xa,t,n,i,f,c),!0;case"mouseover":return Ma=vo(Ma,t,n,i,f,c),!0;case"pointerover":var d=c.pointerId;return bo.set(d,vo(bo.get(d)||null,t,n,i,f,c)),!0;case"gotpointercapture":return d=c.pointerId,wo.set(d,vo(wo.get(d)||null,t,n,i,f,c)),!0}return!1}function $2(t){var n=yr(t.target);if(n!==null){var i=u(n);if(i!==null){if(n=i.tag,n===13){if(n=h(i),n!==null){t.blockedOn=n,Xw(t.priority,function(){if(i.tag===13){var f=$t();f=cc(f);var c=Nr(i,f);c!==null&&Pt(c,i,f),md(i,f)}});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function js(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var i=pd(t.nativeEvent);if(i===null){i=t.nativeEvent;var f=new i.constructor(i.type,i);vc=f,i.target.dispatchEvent(f),vc=null}else return n=br(i),n!==null&&Y2(n),t.blockedOn=i,!1;n.shift()}return!0}function P2(t,n,i){js(t)&&i.delete(n)}function ix(){bd=!1,va!==null&&js(va)&&(va=null),xa!==null&&js(xa)&&(xa=null),Ma!==null&&js(Ma)&&(Ma=null),bo.forEach(P2),wo.forEach(P2)}function Ls(t,n){t.blockedOn===n&&(t.blockedOn=null,bd||(bd=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ix)))}var Ss=null;function H2(t){Ss!==t&&(Ss=t,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){Ss===t&&(Ss=null);for(var n=0;n<t.length;n+=3){var i=t[n],f=t[n+1],c=t[n+2];if(typeof f!="function"){if(yd(f||i)===null)continue;break}var d=br(i);d!==null&&(t.splice(n,3),n-=3,yu(d,{pending:!0,data:c,method:i.method,action:f},f,c))}}))}function xo(t){function n(I){return Ls(I,t)}va!==null&&Ls(va,t),xa!==null&&Ls(xa,t),Ma!==null&&Ls(Ma,t),bo.forEach(n),wo.forEach(n);for(var i=0;i<ja.length;i++){var f=ja[i];f.blockedOn===t&&(f.blockedOn=null)}for(;0<ja.length&&(i=ja[0],i.blockedOn===null);)$2(i),i.blockedOn===null&&ja.shift();if(i=(t.ownerDocument||t).$$reactFormReplay,i!=null)for(f=0;f<i.length;f+=3){var c=i[f],d=i[f+1],w=c[Tt]||null;if(typeof d=="function")w||H2(i);else if(w){var M=null;if(d&&d.hasAttribute("formAction")){if(c=d,w=d[Tt]||null)M=w.formAction;else if(yd(c)!==null)continue}else M=w.action;typeof M=="function"?i[f+1]=M:(i.splice(f,3),f-=3),H2(i)}}}function wd(t){this._internalRoot=t}Cs.prototype.render=wd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(o(409));var i=n.current,f=$t();_2(i,f,t,n,null,null)},Cs.prototype.unmount=wd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;_2(t.current,2,null,t,null,null),fs(),n[pr]=null}};function Cs(t){this._internalRoot=t}Cs.prototype.unstable_scheduleHydration=function(t){if(t){var n=sh();t={blockedOn:null,target:t,priority:n};for(var i=0;i<ja.length&&n!==0&&n<ja[i].priority;i++);ja.splice(i,0,t),i===0&&$2(t)}};var Z2=a.version;if(Z2!=="19.1.0")throw Error(o(527,Z2,"19.1.0"));q.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=p(n),t=t!==null?y(t):null,t=t===null?null:t.stateNode,t};var ox={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ks=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ks.isDisabled&&ks.supportsFiber)try{Li=ks.inject(ox),Ot=ks}catch{}}return jo.createRoot=function(t,n){if(!l(t))throw Error(o(299));var i=!1,f="",c=sg,d=lg,w=cg,M=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(f=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(w=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(M=n.unstable_transitionCallbacks)),n=O2(t,1,!1,null,null,i,f,c,d,w,M,null),t[pr]=n.current,td(t),new wd(n)},jo.hydrateRoot=function(t,n,i){if(!l(t))throw Error(o(299));var f=!1,c="",d=sg,w=lg,M=cg,I=null,Y=null;return i!=null&&(i.unstable_strictMode===!0&&(f=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onUncaughtError!==void 0&&(d=i.onUncaughtError),i.onCaughtError!==void 0&&(w=i.onCaughtError),i.onRecoverableError!==void 0&&(M=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(I=i.unstable_transitionCallbacks),i.formState!==void 0&&(Y=i.formState)),n=O2(t,1,!0,n,i??null,f,c,d,w,M,I,Y),n.context=B2(null),i=n.current,f=$t(),f=cc(f),c=oa(f),c.callback=null,fa(i,c,f),i=f,n.current.lanes=i,Ci(n,i),Tn(n),t[pr]=n.current,td(t),new Cs(n)},jo.version="19.1.0",jo}var np;function yx(){if(np)return Md.exports;np=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(a){console.error(a)}}return e(),Md.exports=px(),Md.exports}var bx=yx(),Lo={},ap;function wx(){if(ap)return Lo;ap=1,Object.defineProperty(Lo,"__esModule",{value:!0}),Lo.parse=h,Lo.serialize=y;const e=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,a=/^[\u0021-\u003A\u003C-\u007E]*$/,r=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,o=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,u=(()=>{const j=function(){};return j.prototype=Object.create(null),j})();function h(j,C){const S=new u,L=j.length;if(L<2)return S;const T=(C==null?void 0:C.decode)||v;let E=0;do{const k=j.indexOf("=",E);if(k===-1)break;const O=j.indexOf(";",E),D=O===-1?L:O;if(k>D){E=j.lastIndexOf(";",k-1)+1;continue}const N=b(j,E,k),z=p(j,k,N),Q=j.slice(N,z);if(S[Q]===void 0){let V=b(j,k+1,D),oe=p(j,D,V);const Te=T(j.slice(V,oe));S[Q]=Te}E=D+1}while(E<L);return S}function b(j,C,S){do{const L=j.charCodeAt(C);if(L!==32&&L!==9)return C}while(++C<S);return S}function p(j,C,S){for(;C>S;){const L=j.charCodeAt(--C);if(L!==32&&L!==9)return C+1}return S}function y(j,C,S){const L=(S==null?void 0:S.encode)||encodeURIComponent;if(!e.test(j))throw new TypeError(`argument name is invalid: ${j}`);const T=L(C);if(!a.test(T))throw new TypeError(`argument val is invalid: ${C}`);let E=j+"="+T;if(!S)return E;if(S.maxAge!==void 0){if(!Number.isInteger(S.maxAge))throw new TypeError(`option maxAge is invalid: ${S.maxAge}`);E+="; Max-Age="+S.maxAge}if(S.domain){if(!r.test(S.domain))throw new TypeError(`option domain is invalid: ${S.domain}`);E+="; Domain="+S.domain}if(S.path){if(!o.test(S.path))throw new TypeError(`option path is invalid: ${S.path}`);E+="; Path="+S.path}if(S.expires){if(!x(S.expires)||!Number.isFinite(S.expires.valueOf()))throw new TypeError(`option expires is invalid: ${S.expires}`);E+="; Expires="+S.expires.toUTCString()}if(S.httpOnly&&(E+="; HttpOnly"),S.secure&&(E+="; Secure"),S.partitioned&&(E+="; Partitioned"),S.priority)switch(typeof S.priority=="string"?S.priority.toLowerCase():void 0){case"low":E+="; Priority=Low";break;case"medium":E+="; Priority=Medium";break;case"high":E+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${S.priority}`)}if(S.sameSite)switch(typeof S.sameSite=="string"?S.sameSite.toLowerCase():S.sameSite){case!0:case"strict":E+="; SameSite=Strict";break;case"lax":E+="; SameSite=Lax";break;case"none":E+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${S.sameSite}`)}return E}function v(j){if(j.indexOf("%")===-1)return j;try{return decodeURIComponent(j)}catch{return j}}function x(j){return l.call(j)==="[object Date]"}return Lo}wx();var rp="popstate";function vx(e={}){function a(o,l){let{pathname:u,search:h,hash:b}=o.location;return T0("",{pathname:u,search:h,hash:b},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function r(o,l){return typeof l=="string"?l:Go(l)}return Mx(a,r,null,e)}function Qe(e,a){if(e===!1||e===null||typeof e>"u")throw new Error(a)}function xn(e,a){if(!e){typeof console<"u"&&console.warn(a);try{throw new Error(a)}catch{}}}function xx(){return Math.random().toString(36).substring(2,10)}function ip(e,a){return{usr:e.state,key:e.key,idx:a}}function T0(e,a,r=null,o){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof a=="string"?gi(a):a,state:r,key:a&&a.key||o||xx()}}function Go({pathname:e="/",search:a="",hash:r=""}){return a&&a!=="?"&&(e+=a.charAt(0)==="?"?a:"?"+a),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function gi(e){let a={};if(e){let r=e.indexOf("#");r>=0&&(a.hash=e.substring(r),e=e.substring(0,r));let o=e.indexOf("?");o>=0&&(a.search=e.substring(o),e=e.substring(0,o)),e&&(a.pathname=e)}return a}function Mx(e,a,r,o={}){let{window:l=document.defaultView,v5Compat:u=!1}=o,h=l.history,b="POP",p=null,y=v();y==null&&(y=0,h.replaceState({...h.state,idx:y},""));function v(){return(h.state||{idx:null}).idx}function x(){b="POP";let T=v(),E=T==null?null:T-y;y=T,p&&p({action:b,location:L.location,delta:E})}function j(T,E){b="PUSH";let k=T0(L.location,T,E);y=v()+1;let O=ip(k,y),D=L.createHref(k);try{h.pushState(O,"",D)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;l.location.assign(D)}u&&p&&p({action:b,location:L.location,delta:1})}function C(T,E){b="REPLACE";let k=T0(L.location,T,E);y=v();let O=ip(k,y),D=L.createHref(k);h.replaceState(O,"",D),u&&p&&p({action:b,location:L.location,delta:0})}function S(T){return jx(T)}let L={get action(){return b},get location(){return e(l,h)},listen(T){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener(rp,x),p=T,()=>{l.removeEventListener(rp,x),p=null}},createHref(T){return a(l,T)},createURL:S,encodeLocation(T){let E=S(T);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:j,replace:C,go(T){return h.go(T)}};return L}function jx(e,a=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),Qe(r,"No window.location.(origin|href) available to create URL");let o=typeof e=="string"?e:Go(e);return o=o.replace(/ $/,"%20"),!a&&o.startsWith("//")&&(o=r+o),new URL(o,r)}function dy(e,a,r="/"){return Lx(e,a,r,!1)}function Lx(e,a,r,o){let l=typeof a=="string"?gi(a):a,u=ea(l.pathname||"/",r);if(u==null)return null;let h=hy(e);Sx(h);let b=null;for(let p=0;b==null&&p<h.length;++p){let y=Ox(u);b=zx(h[p],y,o)}return b}function hy(e,a=[],r=[],o=""){let l=(u,h,b)=>{let p={relativePath:b===void 0?u.path||"":b,caseSensitive:u.caseSensitive===!0,childrenIndex:h,route:u};p.relativePath.startsWith("/")&&(Qe(p.relativePath.startsWith(o),`Absolute route path "${p.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(o.length));let y=Xn([o,p.relativePath]),v=r.concat(p);u.children&&u.children.length>0&&(Qe(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),hy(u.children,a,v,y)),!(u.path==null&&!u.index)&&a.push({path:y,score:Dx(y,u.index),routesMeta:v})};return e.forEach((u,h)=>{var b;if(u.path===""||!((b=u.path)!=null&&b.includes("?")))l(u,h);else for(let p of my(u.path))l(u,h,p)}),a}function my(e){let a=e.split("/");if(a.length===0)return[];let[r,...o]=a,l=r.endsWith("?"),u=r.replace(/\?$/,"");if(o.length===0)return l?[u,""]:[u];let h=my(o.join("/")),b=[];return b.push(...h.map(p=>p===""?u:[u,p].join("/"))),l&&b.push(...h),b.map(p=>e.startsWith("/")&&p===""?"/":p)}function Sx(e){e.sort((a,r)=>a.score!==r.score?r.score-a.score:Ax(a.routesMeta.map(o=>o.childrenIndex),r.routesMeta.map(o=>o.childrenIndex)))}var Cx=/^:[\w-]+$/,kx=3,Ex=2,Tx=1,Nx=10,Ix=-2,op=e=>e==="*";function Dx(e,a){let r=e.split("/"),o=r.length;return r.some(op)&&(o+=Ix),a&&(o+=Ex),r.filter(l=>!op(l)).reduce((l,u)=>l+(Cx.test(u)?kx:u===""?Tx:Nx),o)}function Ax(e,a){return e.length===a.length&&e.slice(0,-1).every((o,l)=>o===a[l])?e[e.length-1]-a[a.length-1]:0}function zx(e,a,r=!1){let{routesMeta:o}=e,l={},u="/",h=[];for(let b=0;b<o.length;++b){let p=o[b],y=b===o.length-1,v=u==="/"?a:a.slice(u.length)||"/",x=ml({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},v),j=p.route;if(!x&&y&&r&&!o[o.length-1].route.index&&(x=ml({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},v)),!x)return null;Object.assign(l,x.params),h.push({params:l,pathname:Xn([u,x.pathname]),pathnameBase:Yx(Xn([u,x.pathnameBase])),route:j}),x.pathnameBase!=="/"&&(u=Xn([u,x.pathnameBase]))}return h}function ml(e,a){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,o]=Rx(e.path,e.caseSensitive,e.end),l=a.match(r);if(!l)return null;let u=l[0],h=u.replace(/(.)\/+$/,"$1"),b=l.slice(1);return{params:o.reduce((y,{paramName:v,isOptional:x},j)=>{if(v==="*"){let S=b[j]||"";h=u.slice(0,u.length-S.length).replace(/(.)\/+$/,"$1")}const C=b[j];return x&&!C?y[v]=void 0:y[v]=(C||"").replace(/%2F/g,"/"),y},{}),pathname:u,pathnameBase:h,pattern:e}}function Rx(e,a=!1,r=!0){xn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let o=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,b,p)=>(o.push({paramName:b,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(o.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,a?void 0:"i"),o]}function Ox(e){try{return e.split("/").map(a=>decodeURIComponent(a).replace(/\//g,"%2F")).join("/")}catch(a){return xn(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`),e}}function ea(e,a){if(a==="/")return e;if(!e.toLowerCase().startsWith(a.toLowerCase()))return null;let r=a.endsWith("/")?a.length-1:a.length,o=e.charAt(r);return o&&o!=="/"?null:e.slice(r)||"/"}function Bx(e,a="/"){let{pathname:r,search:o="",hash:l=""}=typeof e=="string"?gi(e):e;return{pathname:r?r.startsWith("/")?r:_x(r,a):a,search:Gx(o),hash:Qx(l)}}function _x(e,a){let r=a.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?r.length>1&&r.pop():l!=="."&&r.push(l)}),r.length>1?r.join("/"):"/"}function Cd(e,a,r,o){return`Cannot include a '${e}' character in a manually specified \`to.${a}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ux(e){return e.filter((a,r)=>r===0||a.route.path&&a.route.path.length>0)}function o1(e){let a=Ux(e);return a.map((r,o)=>o===a.length-1?r.pathname:r.pathnameBase)}function f1(e,a,r,o=!1){let l;typeof e=="string"?l=gi(e):(l={...e},Qe(!l.pathname||!l.pathname.includes("?"),Cd("?","pathname","search",l)),Qe(!l.pathname||!l.pathname.includes("#"),Cd("#","pathname","hash",l)),Qe(!l.search||!l.search.includes("#"),Cd("#","search","hash",l)));let u=e===""||l.pathname==="",h=u?"/":l.pathname,b;if(h==null)b=r;else{let x=a.length-1;if(!o&&h.startsWith("..")){let j=h.split("/");for(;j[0]==="..";)j.shift(),x-=1;l.pathname=j.join("/")}b=x>=0?a[x]:"/"}let p=Bx(l,b),y=h&&h!=="/"&&h.endsWith("/"),v=(u||h===".")&&r.endsWith("/");return!p.pathname.endsWith("/")&&(y||v)&&(p.pathname+="/"),p}var Xn=e=>e.join("/").replace(/\/\/+/g,"/"),Yx=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Gx=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Qx=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function $x(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var gy=["POST","PUT","PATCH","DELETE"];new Set(gy);var Px=["GET",...gy];new Set(Px);var pi=m.createContext(null);pi.displayName="DataRouter";var El=m.createContext(null);El.displayName="DataRouterState";var py=m.createContext({isTransitioning:!1});py.displayName="ViewTransition";var Hx=m.createContext(new Map);Hx.displayName="Fetchers";var Zx=m.createContext(null);Zx.displayName="Await";var Mn=m.createContext(null);Mn.displayName="Navigation";var ef=m.createContext(null);ef.displayName="Location";var cn=m.createContext({outlet:null,matches:[],isDataRoute:!1});cn.displayName="Route";var s1=m.createContext(null);s1.displayName="RouteError";function Jx(e,{relative:a}={}){Qe(yi(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:o}=m.useContext(Mn),{hash:l,pathname:u,search:h}=tf(e,{relative:a}),b=u;return r!=="/"&&(b=u==="/"?r:Xn([r,u])),o.createHref({pathname:b,search:h,hash:l})}function yi(){return m.useContext(ef)!=null}function un(){return Qe(yi(),"useLocation() may be used only in the context of a <Router> component."),m.useContext(ef).location}var yy="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function by(e){m.useContext(Mn).static||m.useLayoutEffect(e)}function lr(){let{isDataRoute:e}=m.useContext(cn);return e?sM():Fx()}function Fx(){Qe(yi(),"useNavigate() may be used only in the context of a <Router> component.");let e=m.useContext(pi),{basename:a,navigator:r}=m.useContext(Mn),{matches:o}=m.useContext(cn),{pathname:l}=un(),u=JSON.stringify(o1(o)),h=m.useRef(!1);return by(()=>{h.current=!0}),m.useCallback((p,y={})=>{if(xn(h.current,yy),!h.current)return;if(typeof p=="number"){r.go(p);return}let v=f1(p,JSON.parse(u),l,y.relative==="path");e==null&&a!=="/"&&(v.pathname=v.pathname==="/"?a:Xn([a,v.pathname])),(y.replace?r.replace:r.push)(v,y.state,y)},[a,r,u,l,e])}var qx=m.createContext(null);function Vx(e){let a=m.useContext(cn).outlet;return a&&m.createElement(qx.Provider,{value:e},a)}function wy(){let{matches:e}=m.useContext(cn),a=e[e.length-1];return a?a.params:{}}function tf(e,{relative:a}={}){let{matches:r}=m.useContext(cn),{pathname:o}=un(),l=JSON.stringify(o1(r));return m.useMemo(()=>f1(e,JSON.parse(l),o,a==="path"),[e,l,o,a])}function Xx(e,a){return vy(e,a)}function vy(e,a,r,o){var E;Qe(yi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=m.useContext(Mn),{matches:u}=m.useContext(cn),h=u[u.length-1],b=h?h.params:{},p=h?h.pathname:"/",y=h?h.pathnameBase:"/",v=h&&h.route;{let k=v&&v.path||"";xy(p,!v||k.endsWith("*")||k.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${k}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${k}"> to <Route path="${k==="/"?"*":`${k}/*`}">.`)}let x=un(),j;if(a){let k=typeof a=="string"?gi(a):a;Qe(y==="/"||((E=k.pathname)==null?void 0:E.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${k.pathname}" was given in the \`location\` prop.`),j=k}else j=x;let C=j.pathname||"/",S=C;if(y!=="/"){let k=y.replace(/^\//,"").split("/");S="/"+C.replace(/^\//,"").split("/").slice(k.length).join("/")}let L=dy(e,{pathname:S});xn(v||L!=null,`No routes matched location "${j.pathname}${j.search}${j.hash}" `),xn(L==null||L[L.length-1].route.element!==void 0||L[L.length-1].route.Component!==void 0||L[L.length-1].route.lazy!==void 0,`Matched leaf route at location "${j.pathname}${j.search}${j.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let T=nM(L&&L.map(k=>Object.assign({},k,{params:Object.assign({},b,k.params),pathname:Xn([y,l.encodeLocation?l.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?y:Xn([y,l.encodeLocation?l.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),u,r,o);return a&&T?m.createElement(ef.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...j},navigationType:"POP"}},T):T}function Wx(){let e=fM(),a=$x(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,o="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:o},u={padding:"2px 4px",backgroundColor:o},h=null;return console.error("Error handled by React Router default ErrorBoundary:",e),h=m.createElement(m.Fragment,null,m.createElement("p",null,"💿 Hey developer 👋"),m.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",m.createElement("code",{style:u},"ErrorBoundary")," or"," ",m.createElement("code",{style:u},"errorElement")," prop on your route.")),m.createElement(m.Fragment,null,m.createElement("h2",null,"Unexpected Application Error!"),m.createElement("h3",{style:{fontStyle:"italic"}},a),r?m.createElement("pre",{style:l},r):null,h)}var Kx=m.createElement(Wx,null),eM=class extends m.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,a){return a.location!==e.location||a.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:a.error,location:a.location,revalidation:e.revalidation||a.revalidation}}componentDidCatch(e,a){console.error("React Router caught the following error during render",e,a)}render(){return this.state.error!==void 0?m.createElement(cn.Provider,{value:this.props.routeContext},m.createElement(s1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function tM({routeContext:e,match:a,children:r}){let o=m.useContext(pi);return o&&o.static&&o.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=a.route.id),m.createElement(cn.Provider,{value:e},r)}function nM(e,a=[],r=null,o=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(a.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let l=e,u=r==null?void 0:r.errors;if(u!=null){let p=l.findIndex(y=>y.route.id&&(u==null?void 0:u[y.route.id])!==void 0);Qe(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,p+1))}let h=!1,b=-1;if(r)for(let p=0;p<l.length;p++){let y=l[p];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(b=p),y.route.id){let{loaderData:v,errors:x}=r,j=y.route.loader&&!v.hasOwnProperty(y.route.id)&&(!x||x[y.route.id]===void 0);if(y.route.lazy||j){h=!0,b>=0?l=l.slice(0,b+1):l=[l[0]];break}}}return l.reduceRight((p,y,v)=>{let x,j=!1,C=null,S=null;r&&(x=u&&y.route.id?u[y.route.id]:void 0,C=y.route.errorElement||Kx,h&&(b<0&&v===0?(xy("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),j=!0,S=null):b===v&&(j=!0,S=y.route.hydrateFallbackElement||null)));let L=a.concat(l.slice(0,v+1)),T=()=>{let E;return x?E=C:j?E=S:y.route.Component?E=m.createElement(y.route.Component,null):y.route.element?E=y.route.element:E=p,m.createElement(tM,{match:y,routeContext:{outlet:p,matches:L,isDataRoute:r!=null},children:E})};return r&&(y.route.ErrorBoundary||y.route.errorElement||v===0)?m.createElement(eM,{location:r.location,revalidation:r.revalidation,component:C,error:x,children:T(),routeContext:{outlet:null,matches:L,isDataRoute:!0}}):T()},null)}function l1(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function aM(e){let a=m.useContext(pi);return Qe(a,l1(e)),a}function rM(e){let a=m.useContext(El);return Qe(a,l1(e)),a}function iM(e){let a=m.useContext(cn);return Qe(a,l1(e)),a}function c1(e){let a=iM(e),r=a.matches[a.matches.length-1];return Qe(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function oM(){return c1("useRouteId")}function fM(){var o;let e=m.useContext(s1),a=rM("useRouteError"),r=c1("useRouteError");return e!==void 0?e:(o=a.errors)==null?void 0:o[r]}function sM(){let{router:e}=aM("useNavigate"),a=c1("useNavigate"),r=m.useRef(!1);return by(()=>{r.current=!0}),m.useCallback(async(l,u={})=>{xn(r.current,yy),r.current&&(typeof l=="number"?e.navigate(l):await e.navigate(l,{fromRouteId:a,...u}))},[e,a])}var fp={};function xy(e,a,r){!a&&!fp[e]&&(fp[e]=!0,xn(!1,r))}m.memo(lM);function lM({routes:e,future:a,state:r}){return vy(e,void 0,r,a)}function u1({to:e,replace:a,state:r,relative:o}){Qe(yi(),"<Navigate> may be used only in the context of a <Router> component.");let{static:l}=m.useContext(Mn);xn(!l,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=m.useContext(cn),{pathname:h}=un(),b=lr(),p=f1(e,o1(u),h,o==="path"),y=JSON.stringify(p);return m.useEffect(()=>{b(JSON.parse(y),{replace:a,state:r,relative:o})},[b,y,o,a,r]),null}function My(e){return Vx(e.context)}function yt(e){Qe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function cM({basename:e="/",children:a=null,location:r,navigationType:o="POP",navigator:l,static:u=!1}){Qe(!yi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=e.replace(/^\/*/,"/"),b=m.useMemo(()=>({basename:h,navigator:l,static:u,future:{}}),[h,l,u]);typeof r=="string"&&(r=gi(r));let{pathname:p="/",search:y="",hash:v="",state:x=null,key:j="default"}=r,C=m.useMemo(()=>{let S=ea(p,h);return S==null?null:{location:{pathname:S,search:y,hash:v,state:x,key:j},navigationType:o}},[h,p,y,v,x,j,o]);return xn(C!=null,`<Router basename="${h}"> is not able to match the URL "${p}${y}${v}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:m.createElement(Mn.Provider,{value:b},m.createElement(ef.Provider,{children:a,value:C}))}function uM({children:e,location:a}){return Xx(N0(e),a)}function N0(e,a=[]){let r=[];return m.Children.forEach(e,(o,l)=>{if(!m.isValidElement(o))return;let u=[...a,l];if(o.type===m.Fragment){r.push.apply(r,N0(o.props.children,u));return}Qe(o.type===yt,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Qe(!o.props.index||!o.props.children,"An index route cannot have child routes.");let h={id:o.props.id||u.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(h.children=N0(o.props.children,u)),r.push(h)}),r}var Hs="get",Zs="application/x-www-form-urlencoded";function Tl(e){return e!=null&&typeof e.tagName=="string"}function dM(e){return Tl(e)&&e.tagName.toLowerCase()==="button"}function hM(e){return Tl(e)&&e.tagName.toLowerCase()==="form"}function mM(e){return Tl(e)&&e.tagName.toLowerCase()==="input"}function gM(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function pM(e,a){return e.button===0&&(!a||a==="_self")&&!gM(e)}var Es=null;function yM(){if(Es===null)try{new FormData(document.createElement("form"),0),Es=!1}catch{Es=!0}return Es}var bM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function kd(e){return e!=null&&!bM.has(e)?(xn(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Zs}"`),null):e}function wM(e,a){let r,o,l,u,h;if(hM(e)){let b=e.getAttribute("action");o=b?ea(b,a):null,r=e.getAttribute("method")||Hs,l=kd(e.getAttribute("enctype"))||Zs,u=new FormData(e)}else if(dM(e)||mM(e)&&(e.type==="submit"||e.type==="image")){let b=e.form;if(b==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=e.getAttribute("formaction")||b.getAttribute("action");if(o=p?ea(p,a):null,r=e.getAttribute("formmethod")||b.getAttribute("method")||Hs,l=kd(e.getAttribute("formenctype"))||kd(b.getAttribute("enctype"))||Zs,u=new FormData(b,e),!yM()){let{name:y,type:v,value:x}=e;if(v==="image"){let j=y?`${y}.`:"";u.append(`${j}x`,"0"),u.append(`${j}y`,"0")}else y&&u.append(y,x)}}else{if(Tl(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=Hs,o=null,l=Zs,h=e}return u&&l==="text/plain"&&(h=u,u=void 0),{action:o,method:r.toLowerCase(),encType:l,formData:u,body:h}}function d1(e,a){if(e===!1||e===null||typeof e>"u")throw new Error(a)}async function vM(e,a){if(e.id in a)return a[e.id];try{let r=await import(e.module);return a[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function xM(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function MM(e,a,r){let o=await Promise.all(e.map(async l=>{let u=a.routes[l.route.id];if(u){let h=await vM(u,r);return h.links?h.links():[]}return[]}));return CM(o.flat(1).filter(xM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function sp(e,a,r,o,l,u){let h=(p,y)=>r[y]?p.route.id!==r[y].route.id:!0,b=(p,y)=>{var v;return r[y].pathname!==p.pathname||((v=r[y].route.path)==null?void 0:v.endsWith("*"))&&r[y].params["*"]!==p.params["*"]};return u==="assets"?a.filter((p,y)=>h(p,y)||b(p,y)):u==="data"?a.filter((p,y)=>{var x;let v=o.routes[p.route.id];if(!v||!v.hasLoader)return!1;if(h(p,y)||b(p,y))return!0;if(p.route.shouldRevalidate){let j=p.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((x=r[0])==null?void 0:x.params)||{},nextUrl:new URL(e,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof j=="boolean")return j}return!0}):[]}function jM(e,a,{includeHydrateFallback:r}={}){return LM(e.map(o=>{let l=a.routes[o.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),r&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function LM(e){return[...new Set(e)]}function SM(e){let a={},r=Object.keys(e).sort();for(let o of r)a[o]=e[o];return a}function CM(e,a){let r=new Set;return new Set(a),e.reduce((o,l)=>{let u=JSON.stringify(SM(l));return r.has(u)||(r.add(u),o.push({key:u,link:l})),o},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var kM=new Set([100,101,204,205]);function EM(e,a){let r=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return r.pathname==="/"?r.pathname="_root.data":a&&ea(r.pathname,a)==="/"?r.pathname=`${a.replace(/\/$/,"")}/_root.data`:r.pathname=`${r.pathname.replace(/\/$/,"")}.data`,r}function jy(){let e=m.useContext(pi);return d1(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function TM(){let e=m.useContext(El);return d1(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var h1=m.createContext(void 0);h1.displayName="FrameworkContext";function Ly(){let e=m.useContext(h1);return d1(e,"You must render this element inside a <HydratedRouter> element"),e}function NM(e,a){let r=m.useContext(h1),[o,l]=m.useState(!1),[u,h]=m.useState(!1),{onFocus:b,onBlur:p,onMouseEnter:y,onMouseLeave:v,onTouchStart:x}=a,j=m.useRef(null);m.useEffect(()=>{if(e==="render"&&h(!0),e==="viewport"){let L=E=>{E.forEach(k=>{h(k.isIntersecting)})},T=new IntersectionObserver(L,{threshold:.5});return j.current&&T.observe(j.current),()=>{T.disconnect()}}},[e]),m.useEffect(()=>{if(o){let L=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(L)}}},[o]);let C=()=>{l(!0)},S=()=>{l(!1),h(!1)};return r?e!=="intent"?[u,j,{}]:[u,j,{onFocus:So(b,C),onBlur:So(p,S),onMouseEnter:So(y,C),onMouseLeave:So(v,S),onTouchStart:So(x,C)}]:[!1,j,{}]}function So(e,a){return r=>{e&&e(r),r.defaultPrevented||a(r)}}function IM({page:e,...a}){let{router:r}=jy(),o=m.useMemo(()=>dy(r.routes,e,r.basename),[r.routes,e,r.basename]);return o?m.createElement(AM,{page:e,matches:o,...a}):null}function DM(e){let{manifest:a,routeModules:r}=Ly(),[o,l]=m.useState([]);return m.useEffect(()=>{let u=!1;return MM(e,a,r).then(h=>{u||l(h)}),()=>{u=!0}},[e,a,r]),o}function AM({page:e,matches:a,...r}){let o=un(),{manifest:l,routeModules:u}=Ly(),{basename:h}=jy(),{loaderData:b,matches:p}=TM(),y=m.useMemo(()=>sp(e,a,p,l,o,"data"),[e,a,p,l,o]),v=m.useMemo(()=>sp(e,a,p,l,o,"assets"),[e,a,p,l,o]),x=m.useMemo(()=>{if(e===o.pathname+o.search+o.hash)return[];let S=new Set,L=!1;if(a.forEach(E=>{var O;let k=l.routes[E.route.id];!k||!k.hasLoader||(!y.some(D=>D.route.id===E.route.id)&&E.route.id in b&&((O=u[E.route.id])!=null&&O.shouldRevalidate)||k.hasClientLoader?L=!0:S.add(E.route.id))}),S.size===0)return[];let T=EM(e,h);return L&&S.size>0&&T.searchParams.set("_routes",a.filter(E=>S.has(E.route.id)).map(E=>E.route.id).join(",")),[T.pathname+T.search]},[h,b,o,l,y,a,e,u]),j=m.useMemo(()=>jM(v,l),[v,l]),C=DM(v);return m.createElement(m.Fragment,null,x.map(S=>m.createElement("link",{key:S,rel:"prefetch",as:"fetch",href:S,...r})),j.map(S=>m.createElement("link",{key:S,rel:"modulepreload",href:S,...r})),C.map(({key:S,link:L})=>m.createElement("link",{key:S,...L})))}function zM(...e){return a=>{e.forEach(r=>{typeof r=="function"?r(a):r!=null&&(r.current=a)})}}var Sy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Sy&&(window.__reactRouterVersion="7.6.1")}catch{}function RM({basename:e,children:a,window:r}){let o=m.useRef();o.current==null&&(o.current=vx({window:r,v5Compat:!0}));let l=o.current,[u,h]=m.useState({action:l.action,location:l.location}),b=m.useCallback(p=>{m.startTransition(()=>h(p))},[h]);return m.useLayoutEffect(()=>l.listen(b),[l,b]),m.createElement(cM,{basename:e,children:a,location:u.location,navigationType:u.action,navigator:l})}var Cy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Be=m.forwardRef(function({onClick:a,discover:r="render",prefetch:o="none",relative:l,reloadDocument:u,replace:h,state:b,target:p,to:y,preventScrollReset:v,viewTransition:x,...j},C){let{basename:S}=m.useContext(Mn),L=typeof y=="string"&&Cy.test(y),T,E=!1;if(typeof y=="string"&&L&&(T=y,Sy))try{let oe=new URL(window.location.href),Te=y.startsWith("//")?new URL(oe.protocol+y):new URL(y),Ze=ea(Te.pathname,S);Te.origin===oe.origin&&Ze!=null?y=Ze+Te.search+Te.hash:E=!0}catch{xn(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let k=Jx(y,{relative:l}),[O,D,N]=NM(o,j),z=UM(y,{replace:h,state:b,target:p,preventScrollReset:v,relative:l,viewTransition:x});function Q(oe){a&&a(oe),oe.defaultPrevented||z(oe)}let V=m.createElement("a",{...j,...N,href:T||k,onClick:E||u?a:Q,ref:zM(C,D),target:p,"data-discover":!L&&r==="render"?"true":void 0});return O&&!L?m.createElement(m.Fragment,null,V,m.createElement(IM,{page:k})):V});Be.displayName="Link";var OM=m.forwardRef(function({"aria-current":a="page",caseSensitive:r=!1,className:o="",end:l=!1,style:u,to:h,viewTransition:b,children:p,...y},v){let x=tf(h,{relative:y.relative}),j=un(),C=m.useContext(El),{navigator:S,basename:L}=m.useContext(Mn),T=C!=null&&PM(x)&&b===!0,E=S.encodeLocation?S.encodeLocation(x).pathname:x.pathname,k=j.pathname,O=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;r||(k=k.toLowerCase(),O=O?O.toLowerCase():null,E=E.toLowerCase()),O&&L&&(O=ea(O,L)||O);const D=E!=="/"&&E.endsWith("/")?E.length-1:E.length;let N=k===E||!l&&k.startsWith(E)&&k.charAt(D)==="/",z=O!=null&&(O===E||!l&&O.startsWith(E)&&O.charAt(E.length)==="/"),Q={isActive:N,isPending:z,isTransitioning:T},V=N?a:void 0,oe;typeof o=="function"?oe=o(Q):oe=[o,N?"active":null,z?"pending":null,T?"transitioning":null].filter(Boolean).join(" ");let Te=typeof u=="function"?u(Q):u;return m.createElement(Be,{...y,"aria-current":V,className:oe,ref:v,style:Te,to:h,viewTransition:b},typeof p=="function"?p(Q):p)});OM.displayName="NavLink";var BM=m.forwardRef(({discover:e="render",fetcherKey:a,navigate:r,reloadDocument:o,replace:l,state:u,method:h=Hs,action:b,onSubmit:p,relative:y,preventScrollReset:v,viewTransition:x,...j},C)=>{let S=QM(),L=$M(b,{relative:y}),T=h.toLowerCase()==="get"?"get":"post",E=typeof b=="string"&&Cy.test(b),k=O=>{if(p&&p(O),O.defaultPrevented)return;O.preventDefault();let D=O.nativeEvent.submitter,N=(D==null?void 0:D.getAttribute("formmethod"))||h;S(D||O.currentTarget,{fetcherKey:a,method:N,navigate:r,replace:l,state:u,relative:y,preventScrollReset:v,viewTransition:x})};return m.createElement("form",{ref:C,method:T,action:L,onSubmit:o?p:k,...j,"data-discover":!E&&e==="render"?"true":void 0})});BM.displayName="Form";function _M(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ky(e){let a=m.useContext(pi);return Qe(a,_M(e)),a}function UM(e,{target:a,replace:r,state:o,preventScrollReset:l,relative:u,viewTransition:h}={}){let b=lr(),p=un(),y=tf(e,{relative:u});return m.useCallback(v=>{if(pM(v,a)){v.preventDefault();let x=r!==void 0?r:Go(p)===Go(y);b(e,{replace:x,state:o,preventScrollReset:l,relative:u,viewTransition:h})}},[p,b,y,r,o,a,e,l,u,h])}var YM=0,GM=()=>`__${String(++YM)}__`;function QM(){let{router:e}=ky("useSubmit"),{basename:a}=m.useContext(Mn),r=oM();return m.useCallback(async(o,l={})=>{let{action:u,method:h,encType:b,formData:p,body:y}=wM(o,a);if(l.navigate===!1){let v=l.fetcherKey||GM();await e.fetch(v,r,l.action||u,{preventScrollReset:l.preventScrollReset,formData:p,body:y,formMethod:l.method||h,formEncType:l.encType||b,flushSync:l.flushSync})}else await e.navigate(l.action||u,{preventScrollReset:l.preventScrollReset,formData:p,body:y,formMethod:l.method||h,formEncType:l.encType||b,replace:l.replace,state:l.state,fromRouteId:r,flushSync:l.flushSync,viewTransition:l.viewTransition})},[e,a,r])}function $M(e,{relative:a}={}){let{basename:r}=m.useContext(Mn),o=m.useContext(cn);Qe(o,"useFormAction must be used inside a RouteContext");let[l]=o.matches.slice(-1),u={...tf(e||".",{relative:a})},h=un();if(e==null){u.search=h.search;let b=new URLSearchParams(u.search),p=b.getAll("index");if(p.some(v=>v==="")){b.delete("index"),p.filter(x=>x).forEach(x=>b.append("index",x));let v=b.toString();u.search=v?`?${v}`:""}}return(!e||e===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(u.pathname=u.pathname==="/"?r:Xn([r,u.pathname])),Go(u)}function PM(e,a={}){let r=m.useContext(py);Qe(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=ky("useViewTransitionState"),l=tf(e,{relative:a.relative});if(!r.isTransitioning)return!1;let u=ea(r.currentLocation.pathname,o)||r.currentLocation.pathname,h=ea(r.nextLocation.pathname,o)||r.nextLocation.pathname;return ml(l.pathname,h)!=null||ml(l.pathname,u)!=null}[...kM];var ht=function(){return ht=Object.assign||function(a){for(var r,o=1,l=arguments.length;o<l;o++){r=arguments[o];for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&(a[u]=r[u])}return a},ht.apply(this,arguments)};function fi(e,a,r){if(r||arguments.length===2)for(var o=0,l=a.length,u;o<l;o++)(u||!(o in a))&&(u||(u=Array.prototype.slice.call(a,0,o)),u[o]=a[o]);return e.concat(u||Array.prototype.slice.call(a))}var Ye="-ms-",Uo="-moz-",Ee="-webkit-",Ey="comm",Nl="rule",m1="decl",HM="@import",Ty="@keyframes",ZM="@layer",Ny=Math.abs,g1=String.fromCharCode,I0=Object.assign;function JM(e,a){return ut(e,0)^45?(((a<<2^ut(e,0))<<2^ut(e,1))<<2^ut(e,2))<<2^ut(e,3):0}function Iy(e){return e.trim()}function Vn(e,a){return(e=a.exec(e))?e[0]:e}function me(e,a,r){return e.replace(a,r)}function Js(e,a,r){return e.indexOf(a,r)}function ut(e,a){return e.charCodeAt(a)|0}function si(e,a,r){return e.slice(a,r)}function Dn(e){return e.length}function Dy(e){return e.length}function Ro(e,a){return a.push(e),e}function FM(e,a){return e.map(a).join("")}function lp(e,a){return e.filter(function(r){return!Vn(r,a)})}var Il=1,li=1,Ay=0,ln=0,tt=0,bi="";function Dl(e,a,r,o,l,u,h,b){return{value:e,root:a,parent:r,type:o,props:l,children:u,line:Il,column:li,length:h,return:"",siblings:b}}function Ca(e,a){return I0(Dl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},a)}function ti(e){for(;e.root;)e=Ca(e.root,{children:[e]});Ro(e,e.siblings)}function qM(){return tt}function VM(){return tt=ln>0?ut(bi,--ln):0,li--,tt===10&&(li=1,Il--),tt}function wn(){return tt=ln<Ay?ut(bi,ln++):0,li++,tt===10&&(li=1,Il++),tt}function rr(){return ut(bi,ln)}function Fs(){return ln}function Al(e,a){return si(bi,e,a)}function D0(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function XM(e){return Il=li=1,Ay=Dn(bi=e),ln=0,[]}function WM(e){return bi="",e}function Ed(e){return Iy(Al(ln-1,A0(e===91?e+2:e===40?e+1:e)))}function KM(e){for(;(tt=rr())&&tt<33;)wn();return D0(e)>2||D0(tt)>3?"":" "}function ej(e,a){for(;--a&&wn()&&!(tt<48||tt>102||tt>57&&tt<65||tt>70&&tt<97););return Al(e,Fs()+(a<6&&rr()==32&&wn()==32))}function A0(e){for(;wn();)switch(tt){case e:return ln;case 34:case 39:e!==34&&e!==39&&A0(tt);break;case 40:e===41&&A0(e);break;case 92:wn();break}return ln}function tj(e,a){for(;wn()&&e+tt!==57;)if(e+tt===84&&rr()===47)break;return"/*"+Al(a,ln-1)+"*"+g1(e===47?e:wn())}function nj(e){for(;!D0(rr());)wn();return Al(e,ln)}function aj(e){return WM(qs("",null,null,null,[""],e=XM(e),0,[0],e))}function qs(e,a,r,o,l,u,h,b,p){for(var y=0,v=0,x=h,j=0,C=0,S=0,L=1,T=1,E=1,k=0,O="",D=l,N=u,z=o,Q=O;T;)switch(S=k,k=wn()){case 40:if(S!=108&&ut(Q,x-1)==58){Js(Q+=me(Ed(k),"&","&\f"),"&\f",Ny(y?b[y-1]:0))!=-1&&(E=-1);break}case 34:case 39:case 91:Q+=Ed(k);break;case 9:case 10:case 13:case 32:Q+=KM(S);break;case 92:Q+=ej(Fs()-1,7);continue;case 47:switch(rr()){case 42:case 47:Ro(rj(tj(wn(),Fs()),a,r,p),p);break;default:Q+="/"}break;case 123*L:b[y++]=Dn(Q)*E;case 125*L:case 59:case 0:switch(k){case 0:case 125:T=0;case 59+v:E==-1&&(Q=me(Q,/\f/g,"")),C>0&&Dn(Q)-x&&Ro(C>32?up(Q+";",o,r,x-1,p):up(me(Q," ","")+";",o,r,x-2,p),p);break;case 59:Q+=";";default:if(Ro(z=cp(Q,a,r,y,v,l,b,O,D=[],N=[],x,u),u),k===123)if(v===0)qs(Q,a,z,z,D,u,x,b,N);else switch(j===99&&ut(Q,3)===110?100:j){case 100:case 108:case 109:case 115:qs(e,z,z,o&&Ro(cp(e,z,z,0,0,l,b,O,l,D=[],x,N),N),l,N,x,b,o?D:N);break;default:qs(Q,z,z,z,[""],N,0,b,N)}}y=v=C=0,L=E=1,O=Q="",x=h;break;case 58:x=1+Dn(Q),C=S;default:if(L<1){if(k==123)--L;else if(k==125&&L++==0&&VM()==125)continue}switch(Q+=g1(k),k*L){case 38:E=v>0?1:(Q+="\f",-1);break;case 44:b[y++]=(Dn(Q)-1)*E,E=1;break;case 64:rr()===45&&(Q+=Ed(wn())),j=rr(),v=x=Dn(O=Q+=nj(Fs())),k++;break;case 45:S===45&&Dn(Q)==2&&(L=0)}}return u}function cp(e,a,r,o,l,u,h,b,p,y,v,x){for(var j=l-1,C=l===0?u:[""],S=Dy(C),L=0,T=0,E=0;L<o;++L)for(var k=0,O=si(e,j+1,j=Ny(T=h[L])),D=e;k<S;++k)(D=Iy(T>0?C[k]+" "+O:me(O,/&\f/g,C[k])))&&(p[E++]=D);return Dl(e,a,r,l===0?Nl:b,p,y,v,x)}function rj(e,a,r,o){return Dl(e,a,r,Ey,g1(qM()),si(e,2,-2),0,o)}function up(e,a,r,o,l){return Dl(e,a,r,m1,si(e,0,o),si(e,o+1,-1),o,l)}function zy(e,a,r){switch(JM(e,a)){case 5103:return Ee+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ee+e+e;case 4789:return Uo+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Ee+e+Uo+e+Ye+e+e;case 5936:switch(ut(e,a+11)){case 114:return Ee+e+Ye+me(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Ee+e+Ye+me(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Ee+e+Ye+me(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Ee+e+Ye+e+e;case 6165:return Ee+e+Ye+"flex-"+e+e;case 5187:return Ee+e+me(e,/(\w+).+(:[^]+)/,Ee+"box-$1$2"+Ye+"flex-$1$2")+e;case 5443:return Ee+e+Ye+"flex-item-"+me(e,/flex-|-self/g,"")+(Vn(e,/flex-|baseline/)?"":Ye+"grid-row-"+me(e,/flex-|-self/g,""))+e;case 4675:return Ee+e+Ye+"flex-line-pack"+me(e,/align-content|flex-|-self/g,"")+e;case 5548:return Ee+e+Ye+me(e,"shrink","negative")+e;case 5292:return Ee+e+Ye+me(e,"basis","preferred-size")+e;case 6060:return Ee+"box-"+me(e,"-grow","")+Ee+e+Ye+me(e,"grow","positive")+e;case 4554:return Ee+me(e,/([^-])(transform)/g,"$1"+Ee+"$2")+e;case 6187:return me(me(me(e,/(zoom-|grab)/,Ee+"$1"),/(image-set)/,Ee+"$1"),e,"")+e;case 5495:case 3959:return me(e,/(image-set\([^]*)/,Ee+"$1$`$1");case 4968:return me(me(e,/(.+:)(flex-)?(.*)/,Ee+"box-pack:$3"+Ye+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ee+e+e;case 4200:if(!Vn(e,/flex-|baseline/))return Ye+"grid-column-align"+si(e,a)+e;break;case 2592:case 3360:return Ye+me(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(o,l){return a=l,Vn(o.props,/grid-\w+-end/)})?~Js(e+(r=r[a].value),"span",0)?e:Ye+me(e,"-start","")+e+Ye+"grid-row-span:"+(~Js(r,"span",0)?Vn(r,/\d+/):+Vn(r,/\d+/)-+Vn(e,/\d+/))+";":Ye+me(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(o){return Vn(o.props,/grid-\w+-start/)})?e:Ye+me(me(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return me(e,/(.+)-inline(.+)/,Ee+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Dn(e)-1-a>6)switch(ut(e,a+1)){case 109:if(ut(e,a+4)!==45)break;case 102:return me(e,/(.+:)(.+)-([^]+)/,"$1"+Ee+"$2-$3$1"+Uo+(ut(e,a+3)==108?"$3":"$2-$3"))+e;case 115:return~Js(e,"stretch",0)?zy(me(e,"stretch","fill-available"),a,r)+e:e}break;case 5152:case 5920:return me(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,l,u,h,b,p,y){return Ye+l+":"+u+y+(h?Ye+l+"-span:"+(b?p:+p-+u)+y:"")+e});case 4949:if(ut(e,a+6)===121)return me(e,":",":"+Ee)+e;break;case 6444:switch(ut(e,ut(e,14)===45?18:11)){case 120:return me(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ee+(ut(e,14)===45?"inline-":"")+"box$3$1"+Ee+"$2$3$1"+Ye+"$2box$3")+e;case 100:return me(e,":",":"+Ye)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return me(e,"scroll-","scroll-snap-")+e}return e}function gl(e,a){for(var r="",o=0;o<e.length;o++)r+=a(e[o],o,e,a)||"";return r}function ij(e,a,r,o){switch(e.type){case ZM:if(e.children.length)break;case HM:case m1:return e.return=e.return||e.value;case Ey:return"";case Ty:return e.return=e.value+"{"+gl(e.children,o)+"}";case Nl:if(!Dn(e.value=e.props.join(",")))return""}return Dn(r=gl(e.children,o))?e.return=e.value+"{"+r+"}":""}function oj(e){var a=Dy(e);return function(r,o,l,u){for(var h="",b=0;b<a;b++)h+=e[b](r,o,l,u)||"";return h}}function fj(e){return function(a){a.root||(a=a.return)&&e(a)}}function sj(e,a,r,o){if(e.length>-1&&!e.return)switch(e.type){case m1:e.return=zy(e.value,e.length,r);return;case Ty:return gl([Ca(e,{value:me(e.value,"@","@"+Ee)})],o);case Nl:if(e.length)return FM(r=e.props,function(l){switch(Vn(l,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ti(Ca(e,{props:[me(l,/:(read-\w+)/,":"+Uo+"$1")]})),ti(Ca(e,{props:[l]})),I0(e,{props:lp(r,o)});break;case"::placeholder":ti(Ca(e,{props:[me(l,/:(plac\w+)/,":"+Ee+"input-$1")]})),ti(Ca(e,{props:[me(l,/:(plac\w+)/,":"+Uo+"$1")]})),ti(Ca(e,{props:[me(l,/:(plac\w+)/,Ye+"input-$1")]})),ti(Ca(e,{props:[l]})),I0(e,{props:lp(r,o)});break}return""})}}var lj={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ht={},ci=typeof process<"u"&&Ht!==void 0&&(Ht.REACT_APP_SC_ATTR||Ht.SC_ATTR)||"data-styled",Ry="active",Oy="data-styled-version",zl="6.1.18",p1=`/*!sc*/
`,pl=typeof window<"u"&&typeof document<"u",cj=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ht!==void 0&&Ht.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ht.REACT_APP_SC_DISABLE_SPEEDY!==""?Ht.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ht.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ht!==void 0&&Ht.SC_DISABLE_SPEEDY!==void 0&&Ht.SC_DISABLE_SPEEDY!==""&&Ht.SC_DISABLE_SPEEDY!=="false"&&Ht.SC_DISABLE_SPEEDY),uj={},Rl=Object.freeze([]),ui=Object.freeze({});function By(e,a,r){return r===void 0&&(r=ui),e.theme!==r.theme&&e.theme||a||r.theme}var _y=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),dj=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,hj=/(^-|-$)/g;function dp(e){return e.replace(dj,"-").replace(hj,"")}var mj=/(a)(d)/gi,Ts=52,hp=function(e){return String.fromCharCode(e+(e>25?39:97))};function z0(e){var a,r="";for(a=Math.abs(e);a>Ts;a=a/Ts|0)r=hp(a%Ts)+r;return(hp(a%Ts)+r).replace(mj,"$1-$2")}var Td,Uy=5381,ni=function(e,a){for(var r=a.length;r;)e=33*e^a.charCodeAt(--r);return e},Yy=function(e){return ni(Uy,e)};function y1(e){return z0(Yy(e)>>>0)}function gj(e){return e.displayName||e.name||"Component"}function Nd(e){return typeof e=="string"&&!0}var Gy=typeof Symbol=="function"&&Symbol.for,Qy=Gy?Symbol.for("react.memo"):60115,pj=Gy?Symbol.for("react.forward_ref"):60112,yj={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},bj={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},$y={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},wj=((Td={})[pj]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Td[Qy]=$y,Td);function mp(e){return("type"in(a=e)&&a.type.$$typeof)===Qy?$y:"$$typeof"in e?wj[e.$$typeof]:yj;var a}var vj=Object.defineProperty,xj=Object.getOwnPropertyNames,gp=Object.getOwnPropertySymbols,Mj=Object.getOwnPropertyDescriptor,jj=Object.getPrototypeOf,pp=Object.prototype;function Py(e,a,r){if(typeof a!="string"){if(pp){var o=jj(a);o&&o!==pp&&Py(e,o,r)}var l=xj(a);gp&&(l=l.concat(gp(a)));for(var u=mp(e),h=mp(a),b=0;b<l.length;++b){var p=l[b];if(!(p in bj||r&&r[p]||h&&p in h||u&&p in u)){var y=Mj(a,p);try{vj(e,p,y)}catch{}}}}return e}function or(e){return typeof e=="function"}function b1(e){return typeof e=="object"&&"styledComponentId"in e}function nr(e,a){return e&&a?"".concat(e," ").concat(a):e||a||""}function yl(e,a){if(e.length===0)return"";for(var r=e[0],o=1;o<e.length;o++)r+=e[o];return r}function Qo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function R0(e,a,r){if(r===void 0&&(r=!1),!r&&!Qo(e)&&!Array.isArray(e))return a;if(Array.isArray(a))for(var o=0;o<a.length;o++)e[o]=R0(e[o],a[o]);else if(Qo(a))for(var o in a)e[o]=R0(e[o],a[o]);return e}function w1(e,a){Object.defineProperty(e,"toString",{value:a})}function fr(e){for(var a=[],r=1;r<arguments.length;r++)a[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(a.length>0?" Args: ".concat(a.join(", ")):""))}var Lj=function(){function e(a){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=a}return e.prototype.indexOfGroup=function(a){for(var r=0,o=0;o<a;o++)r+=this.groupSizes[o];return r},e.prototype.insertRules=function(a,r){if(a>=this.groupSizes.length){for(var o=this.groupSizes,l=o.length,u=l;a>=u;)if((u<<=1)<0)throw fr(16,"".concat(a));this.groupSizes=new Uint32Array(u),this.groupSizes.set(o),this.length=u;for(var h=l;h<u;h++)this.groupSizes[h]=0}for(var b=this.indexOfGroup(a+1),p=(h=0,r.length);h<p;h++)this.tag.insertRule(b,r[h])&&(this.groupSizes[a]++,b++)},e.prototype.clearGroup=function(a){if(a<this.length){var r=this.groupSizes[a],o=this.indexOfGroup(a),l=o+r;this.groupSizes[a]=0;for(var u=o;u<l;u++)this.tag.deleteRule(o)}},e.prototype.getGroup=function(a){var r="";if(a>=this.length||this.groupSizes[a]===0)return r;for(var o=this.groupSizes[a],l=this.indexOfGroup(a),u=l+o,h=l;h<u;h++)r+="".concat(this.tag.getRule(h)).concat(p1);return r},e}(),Vs=new Map,bl=new Map,Xs=1,Ns=function(e){if(Vs.has(e))return Vs.get(e);for(;bl.has(Xs);)Xs++;var a=Xs++;return Vs.set(e,a),bl.set(a,e),a},Sj=function(e,a){Xs=a+1,Vs.set(e,a),bl.set(a,e)},Cj="style[".concat(ci,"][").concat(Oy,'="').concat(zl,'"]'),kj=new RegExp("^".concat(ci,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ej=function(e,a,r){for(var o,l=r.split(","),u=0,h=l.length;u<h;u++)(o=l[u])&&e.registerName(a,o)},Tj=function(e,a){for(var r,o=((r=a.textContent)!==null&&r!==void 0?r:"").split(p1),l=[],u=0,h=o.length;u<h;u++){var b=o[u].trim();if(b){var p=b.match(kj);if(p){var y=0|parseInt(p[1],10),v=p[2];y!==0&&(Sj(v,y),Ej(e,v,p[3]),e.getTag().insertRules(y,l)),l.length=0}else l.push(b)}}},yp=function(e){for(var a=document.querySelectorAll(Cj),r=0,o=a.length;r<o;r++){var l=a[r];l&&l.getAttribute(ci)!==Ry&&(Tj(e,l),l.parentNode&&l.parentNode.removeChild(l))}};function Nj(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Hy=function(e){var a=document.head,r=e||a,o=document.createElement("style"),l=function(b){var p=Array.from(b.querySelectorAll("style[".concat(ci,"]")));return p[p.length-1]}(r),u=l!==void 0?l.nextSibling:null;o.setAttribute(ci,Ry),o.setAttribute(Oy,zl);var h=Nj();return h&&o.setAttribute("nonce",h),r.insertBefore(o,u),o},Ij=function(){function e(a){this.element=Hy(a),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var o=document.styleSheets,l=0,u=o.length;l<u;l++){var h=o[l];if(h.ownerNode===r)return h}throw fr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(a,r){try{return this.sheet.insertRule(r,a),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(a){this.sheet.deleteRule(a),this.length--},e.prototype.getRule=function(a){var r=this.sheet.cssRules[a];return r&&r.cssText?r.cssText:""},e}(),Dj=function(){function e(a){this.element=Hy(a),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(a,r){if(a<=this.length&&a>=0){var o=document.createTextNode(r);return this.element.insertBefore(o,this.nodes[a]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(a){this.element.removeChild(this.nodes[a]),this.length--},e.prototype.getRule=function(a){return a<this.length?this.nodes[a].textContent:""},e}(),Aj=function(){function e(a){this.rules=[],this.length=0}return e.prototype.insertRule=function(a,r){return a<=this.length&&(this.rules.splice(a,0,r),this.length++,!0)},e.prototype.deleteRule=function(a){this.rules.splice(a,1),this.length--},e.prototype.getRule=function(a){return a<this.length?this.rules[a]:""},e}(),bp=pl,zj={isServer:!pl,useCSSOMInjection:!cj},wl=function(){function e(a,r,o){a===void 0&&(a=ui),r===void 0&&(r={});var l=this;this.options=ht(ht({},zj),a),this.gs=r,this.names=new Map(o),this.server=!!a.isServer,!this.server&&pl&&bp&&(bp=!1,yp(this)),w1(this,function(){return function(u){for(var h=u.getTag(),b=h.length,p="",y=function(x){var j=function(E){return bl.get(E)}(x);if(j===void 0)return"continue";var C=u.names.get(j),S=h.getGroup(x);if(C===void 0||!C.size||S.length===0)return"continue";var L="".concat(ci,".g").concat(x,'[id="').concat(j,'"]'),T="";C!==void 0&&C.forEach(function(E){E.length>0&&(T+="".concat(E,","))}),p+="".concat(S).concat(L,'{content:"').concat(T,'"}').concat(p1)},v=0;v<b;v++)y(v);return p}(l)})}return e.registerId=function(a){return Ns(a)},e.prototype.rehydrate=function(){!this.server&&pl&&yp(this)},e.prototype.reconstructWithOptions=function(a,r){return r===void 0&&(r=!0),new e(ht(ht({},this.options),a),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(a){return this.gs[a]=(this.gs[a]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(a=function(r){var o=r.useCSSOMInjection,l=r.target;return r.isServer?new Aj(l):o?new Ij(l):new Dj(l)}(this.options),new Lj(a)));var a},e.prototype.hasNameForId=function(a,r){return this.names.has(a)&&this.names.get(a).has(r)},e.prototype.registerName=function(a,r){if(Ns(a),this.names.has(a))this.names.get(a).add(r);else{var o=new Set;o.add(r),this.names.set(a,o)}},e.prototype.insertRules=function(a,r,o){this.registerName(a,r),this.getTag().insertRules(Ns(a),o)},e.prototype.clearNames=function(a){this.names.has(a)&&this.names.get(a).clear()},e.prototype.clearRules=function(a){this.getTag().clearGroup(Ns(a)),this.clearNames(a)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Rj=/&/g,Oj=/^\s*\/\/.*$/gm;function Zy(e,a){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(a," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(a," ")),r.props=r.props.map(function(o){return"".concat(a," ").concat(o)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Zy(r.children,a)),r})}function Bj(e){var a,r,o,l=ui,u=l.options,h=u===void 0?ui:u,b=l.plugins,p=b===void 0?Rl:b,y=function(j,C,S){return S.startsWith(r)&&S.endsWith(r)&&S.replaceAll(r,"").length>0?".".concat(a):j},v=p.slice();v.push(function(j){j.type===Nl&&j.value.includes("&")&&(j.props[0]=j.props[0].replace(Rj,r).replace(o,y))}),h.prefix&&v.push(sj),v.push(ij);var x=function(j,C,S,L){C===void 0&&(C=""),S===void 0&&(S=""),L===void 0&&(L="&"),a=L,r=C,o=new RegExp("\\".concat(r,"\\b"),"g");var T=j.replace(Oj,""),E=aj(S||C?"".concat(S," ").concat(C," { ").concat(T," }"):T);h.namespace&&(E=Zy(E,h.namespace));var k=[];return gl(E,oj(v.concat(fj(function(O){return k.push(O)})))),k};return x.hash=p.length?p.reduce(function(j,C){return C.name||fr(15),ni(j,C.name)},Uy).toString():"",x}var _j=new wl,O0=Bj(),Jy=dt.createContext({shouldForwardProp:void 0,styleSheet:_j,stylis:O0});Jy.Consumer;dt.createContext(void 0);function B0(){return m.useContext(Jy)}var Fy=function(){function e(a,r){var o=this;this.inject=function(l,u){u===void 0&&(u=O0);var h=o.name+u.hash;l.hasNameForId(o.id,h)||l.insertRules(o.id,h,u(o.rules,h,"@keyframes"))},this.name=a,this.id="sc-keyframes-".concat(a),this.rules=r,w1(this,function(){throw fr(12,String(o.name))})}return e.prototype.getName=function(a){return a===void 0&&(a=O0),this.name+a.hash},e}(),Uj=function(e){return e>="A"&&e<="Z"};function wp(e){for(var a="",r=0;r<e.length;r++){var o=e[r];if(r===1&&o==="-"&&e[0]==="-")return e;Uj(o)?a+="-"+o.toLowerCase():a+=o}return a.startsWith("ms-")?"-"+a:a}var qy=function(e){return e==null||e===!1||e===""},Vy=function(e){var a,r,o=[];for(var l in e){var u=e[l];e.hasOwnProperty(l)&&!qy(u)&&(Array.isArray(u)&&u.isCss||or(u)?o.push("".concat(wp(l),":"),u,";"):Qo(u)?o.push.apply(o,fi(fi(["".concat(l," {")],Vy(u),!1),["}"],!1)):o.push("".concat(wp(l),": ").concat((a=l,(r=u)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||a in lj||a.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return o};function ka(e,a,r,o){if(qy(e))return[];if(b1(e))return[".".concat(e.styledComponentId)];if(or(e)){if(!or(u=e)||u.prototype&&u.prototype.isReactComponent||!a)return[e];var l=e(a);return ka(l,a,r,o)}var u;return e instanceof Fy?r?(e.inject(r,o),[e.getName(o)]):[e]:Qo(e)?Vy(e):Array.isArray(e)?Array.prototype.concat.apply(Rl,e.map(function(h){return ka(h,a,r,o)})):[e.toString()]}function Xy(e){for(var a=0;a<e.length;a+=1){var r=e[a];if(or(r)&&!b1(r))return!1}return!0}var Yj=Yy(zl),Gj=function(){function e(a,r,o){this.rules=a,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&Xy(a),this.componentId=r,this.baseHash=ni(Yj,r),this.baseStyle=o,wl.registerId(r)}return e.prototype.generateAndInjectStyles=function(a,r,o){var l=this.baseStyle?this.baseStyle.generateAndInjectStyles(a,r,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))l=nr(l,this.staticRulesId);else{var u=yl(ka(this.rules,a,r,o)),h=z0(ni(this.baseHash,u)>>>0);if(!r.hasNameForId(this.componentId,h)){var b=o(u,".".concat(h),void 0,this.componentId);r.insertRules(this.componentId,h,b)}l=nr(l,h),this.staticRulesId=h}else{for(var p=ni(this.baseHash,o.hash),y="",v=0;v<this.rules.length;v++){var x=this.rules[v];if(typeof x=="string")y+=x;else if(x){var j=yl(ka(x,a,r,o));p=ni(p,j+v),y+=j}}if(y){var C=z0(p>>>0);r.hasNameForId(this.componentId,C)||r.insertRules(this.componentId,C,o(y,".".concat(C),void 0,this.componentId)),l=nr(l,C)}}return l},e}(),$o=dt.createContext(void 0);$o.Consumer;function Qj(e){var a=dt.useContext($o),r=m.useMemo(function(){return function(o,l){if(!o)throw fr(14);if(or(o)){var u=o(l);return u}if(Array.isArray(o)||typeof o!="object")throw fr(8);return l?ht(ht({},l),o):o}(e.theme,a)},[e.theme,a]);return e.children?dt.createElement($o.Provider,{value:r},e.children):null}var Id={};function $j(e,a,r){var o=b1(e),l=e,u=!Nd(e),h=a.attrs,b=h===void 0?Rl:h,p=a.componentId,y=p===void 0?function(D,N){var z=typeof D!="string"?"sc":dp(D);Id[z]=(Id[z]||0)+1;var Q="".concat(z,"-").concat(y1(zl+z+Id[z]));return N?"".concat(N,"-").concat(Q):Q}(a.displayName,a.parentComponentId):p,v=a.displayName,x=v===void 0?function(D){return Nd(D)?"styled.".concat(D):"Styled(".concat(gj(D),")")}(e):v,j=a.displayName&&a.componentId?"".concat(dp(a.displayName),"-").concat(a.componentId):a.componentId||y,C=o&&l.attrs?l.attrs.concat(b).filter(Boolean):b,S=a.shouldForwardProp;if(o&&l.shouldForwardProp){var L=l.shouldForwardProp;if(a.shouldForwardProp){var T=a.shouldForwardProp;S=function(D,N){return L(D,N)&&T(D,N)}}else S=L}var E=new Gj(r,j,o?l.componentStyle:void 0);function k(D,N){return function(z,Q,V){var oe=z.attrs,Te=z.componentStyle,Ze=z.defaultProps,Ue=z.foldedComponentIds,K=z.styledComponentId,ue=z.target,ne=dt.useContext($o),_=B0(),q=z.shouldForwardProp||_.shouldForwardProp,W=By(Q,ne,Ze)||ui,ae=function(we,se,ot){for(var ke,bt=ht(ht({},se),{className:void 0,theme:ot}),Oa=0;Oa<we.length;Oa+=1){var zn=or(ke=we[Oa])?ke(bt):ke;for(var qt in zn)bt[qt]=qt==="className"?nr(bt[qt],zn[qt]):qt==="style"?ht(ht({},bt[qt]),zn[qt]):zn[qt]}return se.className&&(bt.className=nr(bt.className,se.className)),bt}(oe,Q,W),A=ae.as||ue,F={};for(var X in ae)ae[X]===void 0||X[0]==="$"||X==="as"||X==="theme"&&ae.theme===W||(X==="forwardedAs"?F.as=ae.forwardedAs:q&&!q(X,A)||(F[X]=ae[X]));var ee=function(we,se){var ot=B0(),ke=we.generateAndInjectStyles(se,ot.styleSheet,ot.stylis);return ke}(Te,ae),ie=nr(Ue,K);return ee&&(ie+=" "+ee),ae.className&&(ie+=" "+ae.className),F[Nd(A)&&!_y.has(A)?"class":"className"]=ie,V&&(F.ref=V),m.createElement(A,F)}(O,D,N)}k.displayName=x;var O=dt.forwardRef(k);return O.attrs=C,O.componentStyle=E,O.displayName=x,O.shouldForwardProp=S,O.foldedComponentIds=o?nr(l.foldedComponentIds,l.styledComponentId):"",O.styledComponentId=j,O.target=o?l.target:e,Object.defineProperty(O,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(D){this._foldedDefaultProps=o?function(N){for(var z=[],Q=1;Q<arguments.length;Q++)z[Q-1]=arguments[Q];for(var V=0,oe=z;V<oe.length;V++)R0(N,oe[V],!0);return N}({},l.defaultProps,D):D}}),w1(O,function(){return".".concat(O.styledComponentId)}),u&&Py(O,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),O}function vp(e,a){for(var r=[e[0]],o=0,l=a.length;o<l;o+=1)r.push(a[o],e[o+1]);return r}var xp=function(e){return Object.assign(e,{isCss:!0})};function nf(e){for(var a=[],r=1;r<arguments.length;r++)a[r-1]=arguments[r];if(or(e)||Qo(e))return xp(ka(vp(Rl,fi([e],a,!0))));var o=e;return a.length===0&&o.length===1&&typeof o[0]=="string"?ka(o):xp(ka(vp(o,a)))}function _0(e,a,r){if(r===void 0&&(r=ui),!a)throw fr(1,a);var o=function(l){for(var u=[],h=1;h<arguments.length;h++)u[h-1]=arguments[h];return e(a,r,nf.apply(void 0,fi([l],u,!1)))};return o.attrs=function(l){return _0(e,a,ht(ht({},r),{attrs:Array.prototype.concat(r.attrs,l).filter(Boolean)}))},o.withConfig=function(l){return _0(e,a,ht(ht({},r),l))},o}var Wy=function(e){return _0($j,e)},g=Wy;_y.forEach(function(e){g[e]=Wy(e)});var Pj=function(){function e(a,r){this.rules=a,this.componentId=r,this.isStatic=Xy(a),wl.registerId(this.componentId+1)}return e.prototype.createStyles=function(a,r,o,l){var u=l(yl(ka(this.rules,r,o,l)),""),h=this.componentId+a;o.insertRules(h,h,u)},e.prototype.removeStyles=function(a,r){r.clearRules(this.componentId+a)},e.prototype.renderStyles=function(a,r,o,l){a>2&&wl.registerId(this.componentId+a),this.removeStyles(a,o),this.createStyles(a,r,o,l)},e}();function Hj(e){for(var a=[],r=1;r<arguments.length;r++)a[r-1]=arguments[r];var o=nf.apply(void 0,fi([e],a,!1)),l="sc-global-".concat(y1(JSON.stringify(o))),u=new Pj(o,l),h=function(p){var y=B0(),v=dt.useContext($o),x=dt.useRef(y.styleSheet.allocateGSInstance(l)).current;return y.styleSheet.server&&b(x,p,y.styleSheet,v,y.stylis),dt.useLayoutEffect(function(){if(!y.styleSheet.server)return b(x,p,y.styleSheet,v,y.stylis),function(){return u.removeStyles(x,y.styleSheet)}},[x,p,y.styleSheet,v,y.stylis]),null};function b(p,y,v,x,j){if(u.isStatic)u.renderStyles(p,uj,v,j);else{var C=ht(ht({},y),{theme:By(y,x,h.defaultProps)});u.renderStyles(p,C,v,j)}}return dt.memo(h)}function Jt(e){for(var a=[],r=1;r<arguments.length;r++)a[r-1]=arguments[r];var o=yl(nf.apply(void 0,fi([e],a,!1))),l=y1(o);return new Fy(l,o)}const Ol=({width:e=45,height:a=45})=>s.jsx(s.Fragment,{children:s.jsxs("svg",{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 66.59 63.66",width:e,height:a,children:[s.jsx("defs",{children:s.jsx("style",{children:`
            .logo-dark { fill: var(--blue) }
          `})}),s.jsx("path",{className:"logo-dark",d:"M50,70.82c-.13-.51-.28-1.13-.47-1.74A29,29,0,0,0,45,60.79a70.83,70.83,0,0,0-5.71-6.41,59.7,59.7,0,0,1-9.34-12.16c-.37-.67-.69-1.37-1.06-2.1-.06.12-.12.21-.17.31a39.53,39.53,0,0,0-3.13,10A25.62,25.62,0,0,0,27.66,66a32.27,32.27,0,0,0,7.45,9.79A52.47,52.47,0,0,0,43,81.64l.21.14c-1.85.11-8.38-2.61-11.73-4.86a33.27,33.27,0,0,1-9-9,32.14,32.14,0,0,1-5-11.7,33.2,33.2,0,0,1,21-38c-.55.66-1.1,1.29-1.61,1.95a14.4,14.4,0,0,0-2.76,5.58A11.27,11.27,0,0,0,34.93,33a39,39,0,0,0,6.27,9.26C42.88,44.15,44.63,46,46.26,48a20.22,20.22,0,0,1,3.67,6.42s0,.05.07.09c.29-.67.54-1.34.85-2a30.15,30.15,0,0,1,5-7A79.35,79.35,0,0,0,62,38.22a28.19,28.19,0,0,0,3.49-6.28,10.94,10.94,0,0,0-1-9.84c-.82-1.38-1.86-2.63-2.7-3.81C72.49,21.9,83.66,33.71,83.28,50.08a33.12,33.12,0,0,1-26.5,31.75l1.84-1.2a42.78,42.78,0,0,0,11-10.08,25.92,25.92,0,0,0,4.94-11.64A28.44,28.44,0,0,0,73.38,46c-.62-2-1.4-3.93-2.11-5.89l-.2-.06a1,1,0,0,1,0,.18A40.08,40.08,0,0,1,65.43,49c-2.17,2.71-4.57,5.21-7,7.71a35.26,35.26,0,0,0-7,10.05C50.83,68.11,50.42,69.52,50,70.82Z",transform:"translate(-16.71 -18.17)"})]})}),Zj=({width:e=45,height:a=45})=>s.jsx(s.Fragment,{children:s.jsxs("svg",{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 66.59 63.66",width:e,height:a,children:[s.jsx("defs",{children:s.jsx("style",{children:`
            .cls-1 { fill: #ffffff }
          `})}),s.jsx("path",{className:"cls-1",d:"M50,70.82c-.13-.51-.28-1.13-.47-1.74A29,29,0,0,0,45,60.79a70.83,70.83,0,0,0-5.71-6.41,59.7,59.7,0,0,1-9.34-12.16c-.37-.67-.69-1.37-1.06-2.1-.06.12-.12.21-.17.31a39.53,39.53,0,0,0-3.13,10A25.62,25.62,0,0,0,27.66,66a32.27,32.27,0,0,0,7.45,9.79A52.47,52.47,0,0,0,43,81.64l.21.14c-1.85.11-8.38-2.61-11.73-4.86a33.27,33.27,0,0,1-9-9,32.14,32.14,0,0,1-5-11.7,33.2,33.2,0,0,1,21-38c-.55.66-1.1,1.29-1.61,1.95a14.4,14.4,0,0,0-2.76,5.58A11.27,11.27,0,0,0,34.93,33a39,39,0,0,0,6.27,9.26C42.88,44.15,44.63,46,46.26,48a20.22,20.22,0,0,1,3.67,6.42s0,.05.07.09c.29-.67.54-1.34.85-2a30.15,30.15,0,0,1,5-7A79.35,79.35,0,0,0,62,38.22a28.19,28.19,0,0,0,3.49-6.28,10.94,10.94,0,0,0-1-9.84c-.82-1.38-1.86-2.63-2.7-3.81C72.49,21.9,83.66,33.71,83.28,50.08a33.12,33.12,0,0,1-26.5,31.75l1.84-1.2a42.78,42.78,0,0,0,11-10.08,25.92,25.92,0,0,0,4.94-11.64A28.44,28.44,0,0,0,73.38,46c-.62-2-1.4-3.93-2.11-5.89l-.2-.06a1,1,0,0,1,0,.18A40.08,40.08,0,0,1,65.43,49c-2.17,2.71-4.57,5.21-7,7.71a35.26,35.26,0,0,0-7,10.05C50.83,68.11,50.42,69.52,50,70.82Z",transform:"translate(-16.71 -18.17)"})]})});function Ky(e,a){return function(){return e.apply(a,arguments)}}const{toString:Jj}=Object.prototype,{getPrototypeOf:v1}=Object,{iterator:Bl,toStringTag:eb}=Symbol,_l=(e=>a=>{const r=Jj.call(a);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),jn=e=>(e=e.toLowerCase(),a=>_l(a)===e),Ul=e=>a=>typeof a===e,{isArray:wi}=Array,Po=Ul("undefined");function Fj(e){return e!==null&&!Po(e)&&e.constructor!==null&&!Po(e.constructor)&&zt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const tb=jn("ArrayBuffer");function qj(e){let a;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?a=ArrayBuffer.isView(e):a=e&&e.buffer&&tb(e.buffer),a}const Vj=Ul("string"),zt=Ul("function"),nb=Ul("number"),Yl=e=>e!==null&&typeof e=="object",Xj=e=>e===!0||e===!1,Ws=e=>{if(_l(e)!=="object")return!1;const a=v1(e);return(a===null||a===Object.prototype||Object.getPrototypeOf(a)===null)&&!(eb in e)&&!(Bl in e)},Wj=jn("Date"),Kj=jn("File"),eL=jn("Blob"),tL=jn("FileList"),nL=e=>Yl(e)&&zt(e.pipe),aL=e=>{let a;return e&&(typeof FormData=="function"&&e instanceof FormData||zt(e.append)&&((a=_l(e))==="formdata"||a==="object"&&zt(e.toString)&&e.toString()==="[object FormData]"))},rL=jn("URLSearchParams"),[iL,oL,fL,sL]=["ReadableStream","Request","Response","Headers"].map(jn),lL=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function af(e,a,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let o,l;if(typeof e!="object"&&(e=[e]),wi(e))for(o=0,l=e.length;o<l;o++)a.call(null,e[o],o,e);else{const u=r?Object.getOwnPropertyNames(e):Object.keys(e),h=u.length;let b;for(o=0;o<h;o++)b=u[o],a.call(null,e[b],b,e)}}function ab(e,a){a=a.toLowerCase();const r=Object.keys(e);let o=r.length,l;for(;o-- >0;)if(l=r[o],a===l.toLowerCase())return l;return null}const ar=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,rb=e=>!Po(e)&&e!==ar;function U0(){const{caseless:e}=rb(this)&&this||{},a={},r=(o,l)=>{const u=e&&ab(a,l)||l;Ws(a[u])&&Ws(o)?a[u]=U0(a[u],o):Ws(o)?a[u]=U0({},o):wi(o)?a[u]=o.slice():a[u]=o};for(let o=0,l=arguments.length;o<l;o++)arguments[o]&&af(arguments[o],r);return a}const cL=(e,a,r,{allOwnKeys:o}={})=>(af(a,(l,u)=>{r&&zt(l)?e[u]=Ky(l,r):e[u]=l},{allOwnKeys:o}),e),uL=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),dL=(e,a,r,o)=>{e.prototype=Object.create(a.prototype,o),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:a.prototype}),r&&Object.assign(e.prototype,r)},hL=(e,a,r,o)=>{let l,u,h;const b={};if(a=a||{},e==null)return a;do{for(l=Object.getOwnPropertyNames(e),u=l.length;u-- >0;)h=l[u],(!o||o(h,e,a))&&!b[h]&&(a[h]=e[h],b[h]=!0);e=r!==!1&&v1(e)}while(e&&(!r||r(e,a))&&e!==Object.prototype);return a},mL=(e,a,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=a.length;const o=e.indexOf(a,r);return o!==-1&&o===r},gL=e=>{if(!e)return null;if(wi(e))return e;let a=e.length;if(!nb(a))return null;const r=new Array(a);for(;a-- >0;)r[a]=e[a];return r},pL=(e=>a=>e&&a instanceof e)(typeof Uint8Array<"u"&&v1(Uint8Array)),yL=(e,a)=>{const o=(e&&e[Bl]).call(e);let l;for(;(l=o.next())&&!l.done;){const u=l.value;a.call(e,u[0],u[1])}},bL=(e,a)=>{let r;const o=[];for(;(r=e.exec(a))!==null;)o.push(r);return o},wL=jn("HTMLFormElement"),vL=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,o,l){return o.toUpperCase()+l}),Mp=(({hasOwnProperty:e})=>(a,r)=>e.call(a,r))(Object.prototype),xL=jn("RegExp"),ib=(e,a)=>{const r=Object.getOwnPropertyDescriptors(e),o={};af(r,(l,u)=>{let h;(h=a(l,u,e))!==!1&&(o[u]=h||l)}),Object.defineProperties(e,o)},ML=e=>{ib(e,(a,r)=>{if(zt(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const o=e[r];if(zt(o)){if(a.enumerable=!1,"writable"in a){a.writable=!1;return}a.set||(a.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},jL=(e,a)=>{const r={},o=l=>{l.forEach(u=>{r[u]=!0})};return wi(e)?o(e):o(String(e).split(a)),r},LL=()=>{},SL=(e,a)=>e!=null&&Number.isFinite(e=+e)?e:a;function CL(e){return!!(e&&zt(e.append)&&e[eb]==="FormData"&&e[Bl])}const kL=e=>{const a=new Array(10),r=(o,l)=>{if(Yl(o)){if(a.indexOf(o)>=0)return;if(!("toJSON"in o)){a[l]=o;const u=wi(o)?[]:{};return af(o,(h,b)=>{const p=r(h,l+1);!Po(p)&&(u[b]=p)}),a[l]=void 0,u}}return o};return r(e,0)},EL=jn("AsyncFunction"),TL=e=>e&&(Yl(e)||zt(e))&&zt(e.then)&&zt(e.catch),ob=((e,a)=>e?setImmediate:a?((r,o)=>(ar.addEventListener("message",({source:l,data:u})=>{l===ar&&u===r&&o.length&&o.shift()()},!1),l=>{o.push(l),ar.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",zt(ar.postMessage)),NL=typeof queueMicrotask<"u"?queueMicrotask.bind(ar):typeof process<"u"&&process.nextTick||ob,IL=e=>e!=null&&zt(e[Bl]),P={isArray:wi,isArrayBuffer:tb,isBuffer:Fj,isFormData:aL,isArrayBufferView:qj,isString:Vj,isNumber:nb,isBoolean:Xj,isObject:Yl,isPlainObject:Ws,isReadableStream:iL,isRequest:oL,isResponse:fL,isHeaders:sL,isUndefined:Po,isDate:Wj,isFile:Kj,isBlob:eL,isRegExp:xL,isFunction:zt,isStream:nL,isURLSearchParams:rL,isTypedArray:pL,isFileList:tL,forEach:af,merge:U0,extend:cL,trim:lL,stripBOM:uL,inherits:dL,toFlatObject:hL,kindOf:_l,kindOfTest:jn,endsWith:mL,toArray:gL,forEachEntry:yL,matchAll:bL,isHTMLForm:wL,hasOwnProperty:Mp,hasOwnProp:Mp,reduceDescriptors:ib,freezeMethods:ML,toObjectSet:jL,toCamelCase:vL,noop:LL,toFiniteNumber:SL,findKey:ab,global:ar,isContextDefined:rb,isSpecCompliantForm:CL,toJSONObject:kL,isAsyncFn:EL,isThenable:TL,setImmediate:ob,asap:NL,isIterable:IL};function de(e,a,r,o,l){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",a&&(this.code=a),r&&(this.config=r),o&&(this.request=o),l&&(this.response=l,this.status=l.status?l.status:null)}P.inherits(de,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:P.toJSONObject(this.config),code:this.code,status:this.status}}});const fb=de.prototype,sb={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{sb[e]={value:e}});Object.defineProperties(de,sb);Object.defineProperty(fb,"isAxiosError",{value:!0});de.from=(e,a,r,o,l,u)=>{const h=Object.create(fb);return P.toFlatObject(e,h,function(p){return p!==Error.prototype},b=>b!=="isAxiosError"),de.call(h,e.message,a,r,o,l),h.cause=e,h.name=e.name,u&&Object.assign(h,u),h};const DL=null;function Y0(e){return P.isPlainObject(e)||P.isArray(e)}function lb(e){return P.endsWith(e,"[]")?e.slice(0,-2):e}function jp(e,a,r){return e?e.concat(a).map(function(l,u){return l=lb(l),!r&&u?"["+l+"]":l}).join(r?".":""):a}function AL(e){return P.isArray(e)&&!e.some(Y0)}const zL=P.toFlatObject(P,{},null,function(a){return/^is[A-Z]/.test(a)});function Gl(e,a,r){if(!P.isObject(e))throw new TypeError("target must be an object");a=a||new FormData,r=P.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(L,T){return!P.isUndefined(T[L])});const o=r.metaTokens,l=r.visitor||v,u=r.dots,h=r.indexes,p=(r.Blob||typeof Blob<"u"&&Blob)&&P.isSpecCompliantForm(a);if(!P.isFunction(l))throw new TypeError("visitor must be a function");function y(S){if(S===null)return"";if(P.isDate(S))return S.toISOString();if(!p&&P.isBlob(S))throw new de("Blob is not supported. Use a Buffer instead.");return P.isArrayBuffer(S)||P.isTypedArray(S)?p&&typeof Blob=="function"?new Blob([S]):Buffer.from(S):S}function v(S,L,T){let E=S;if(S&&!T&&typeof S=="object"){if(P.endsWith(L,"{}"))L=o?L:L.slice(0,-2),S=JSON.stringify(S);else if(P.isArray(S)&&AL(S)||(P.isFileList(S)||P.endsWith(L,"[]"))&&(E=P.toArray(S)))return L=lb(L),E.forEach(function(O,D){!(P.isUndefined(O)||O===null)&&a.append(h===!0?jp([L],D,u):h===null?L:L+"[]",y(O))}),!1}return Y0(S)?!0:(a.append(jp(T,L,u),y(S)),!1)}const x=[],j=Object.assign(zL,{defaultVisitor:v,convertValue:y,isVisitable:Y0});function C(S,L){if(!P.isUndefined(S)){if(x.indexOf(S)!==-1)throw Error("Circular reference detected in "+L.join("."));x.push(S),P.forEach(S,function(E,k){(!(P.isUndefined(E)||E===null)&&l.call(a,E,P.isString(k)?k.trim():k,L,j))===!0&&C(E,L?L.concat(k):[k])}),x.pop()}}if(!P.isObject(e))throw new TypeError("data must be an object");return C(e),a}function Lp(e){const a={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(o){return a[o]})}function x1(e,a){this._pairs=[],e&&Gl(e,this,a)}const cb=x1.prototype;cb.append=function(a,r){this._pairs.push([a,r])};cb.toString=function(a){const r=a?function(o){return a.call(this,o,Lp)}:Lp;return this._pairs.map(function(l){return r(l[0])+"="+r(l[1])},"").join("&")};function RL(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ub(e,a,r){if(!a)return e;const o=r&&r.encode||RL;P.isFunction(r)&&(r={serialize:r});const l=r&&r.serialize;let u;if(l?u=l(a,r):u=P.isURLSearchParams(a)?a.toString():new x1(a,r).toString(o),u){const h=e.indexOf("#");h!==-1&&(e=e.slice(0,h)),e+=(e.indexOf("?")===-1?"?":"&")+u}return e}class Sp{constructor(){this.handlers=[]}use(a,r,o){return this.handlers.push({fulfilled:a,rejected:r,synchronous:o?o.synchronous:!1,runWhen:o?o.runWhen:null}),this.handlers.length-1}eject(a){this.handlers[a]&&(this.handlers[a]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(a){P.forEach(this.handlers,function(o){o!==null&&a(o)})}}const db={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},OL=typeof URLSearchParams<"u"?URLSearchParams:x1,BL=typeof FormData<"u"?FormData:null,_L=typeof Blob<"u"?Blob:null,UL={isBrowser:!0,classes:{URLSearchParams:OL,FormData:BL,Blob:_L},protocols:["http","https","file","blob","url","data"]},M1=typeof window<"u"&&typeof document<"u",G0=typeof navigator=="object"&&navigator||void 0,YL=M1&&(!G0||["ReactNative","NativeScript","NS"].indexOf(G0.product)<0),GL=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",QL=M1&&window.location.href||"http://localhost",$L=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:M1,hasStandardBrowserEnv:YL,hasStandardBrowserWebWorkerEnv:GL,navigator:G0,origin:QL},Symbol.toStringTag,{value:"Module"})),Mt={...$L,...UL};function PL(e,a){return Gl(e,new Mt.classes.URLSearchParams,Object.assign({visitor:function(r,o,l,u){return Mt.isNode&&P.isBuffer(r)?(this.append(o,r.toString("base64")),!1):u.defaultVisitor.apply(this,arguments)}},a))}function HL(e){return P.matchAll(/\w+|\[(\w*)]/g,e).map(a=>a[0]==="[]"?"":a[1]||a[0])}function ZL(e){const a={},r=Object.keys(e);let o;const l=r.length;let u;for(o=0;o<l;o++)u=r[o],a[u]=e[u];return a}function hb(e){function a(r,o,l,u){let h=r[u++];if(h==="__proto__")return!0;const b=Number.isFinite(+h),p=u>=r.length;return h=!h&&P.isArray(l)?l.length:h,p?(P.hasOwnProp(l,h)?l[h]=[l[h],o]:l[h]=o,!b):((!l[h]||!P.isObject(l[h]))&&(l[h]=[]),a(r,o,l[h],u)&&P.isArray(l[h])&&(l[h]=ZL(l[h])),!b)}if(P.isFormData(e)&&P.isFunction(e.entries)){const r={};return P.forEachEntry(e,(o,l)=>{a(HL(o),l,r,0)}),r}return null}function JL(e,a,r){if(P.isString(e))try{return(a||JSON.parse)(e),P.trim(e)}catch(o){if(o.name!=="SyntaxError")throw o}return(r||JSON.stringify)(e)}const rf={transitional:db,adapter:["xhr","http","fetch"],transformRequest:[function(a,r){const o=r.getContentType()||"",l=o.indexOf("application/json")>-1,u=P.isObject(a);if(u&&P.isHTMLForm(a)&&(a=new FormData(a)),P.isFormData(a))return l?JSON.stringify(hb(a)):a;if(P.isArrayBuffer(a)||P.isBuffer(a)||P.isStream(a)||P.isFile(a)||P.isBlob(a)||P.isReadableStream(a))return a;if(P.isArrayBufferView(a))return a.buffer;if(P.isURLSearchParams(a))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),a.toString();let b;if(u){if(o.indexOf("application/x-www-form-urlencoded")>-1)return PL(a,this.formSerializer).toString();if((b=P.isFileList(a))||o.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return Gl(b?{"files[]":a}:a,p&&new p,this.formSerializer)}}return u||l?(r.setContentType("application/json",!1),JL(a)):a}],transformResponse:[function(a){const r=this.transitional||rf.transitional,o=r&&r.forcedJSONParsing,l=this.responseType==="json";if(P.isResponse(a)||P.isReadableStream(a))return a;if(a&&P.isString(a)&&(o&&!this.responseType||l)){const h=!(r&&r.silentJSONParsing)&&l;try{return JSON.parse(a)}catch(b){if(h)throw b.name==="SyntaxError"?de.from(b,de.ERR_BAD_RESPONSE,this,null,this.response):b}}return a}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Mt.classes.FormData,Blob:Mt.classes.Blob},validateStatus:function(a){return a>=200&&a<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};P.forEach(["delete","get","head","post","put","patch"],e=>{rf.headers[e]={}});const FL=P.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),qL=e=>{const a={};let r,o,l;return e&&e.split(`
`).forEach(function(h){l=h.indexOf(":"),r=h.substring(0,l).trim().toLowerCase(),o=h.substring(l+1).trim(),!(!r||a[r]&&FL[r])&&(r==="set-cookie"?a[r]?a[r].push(o):a[r]=[o]:a[r]=a[r]?a[r]+", "+o:o)}),a},Cp=Symbol("internals");function Co(e){return e&&String(e).trim().toLowerCase()}function Ks(e){return e===!1||e==null?e:P.isArray(e)?e.map(Ks):String(e)}function VL(e){const a=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let o;for(;o=r.exec(e);)a[o[1]]=o[2];return a}const XL=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Dd(e,a,r,o,l){if(P.isFunction(o))return o.call(this,a,r);if(l&&(a=r),!!P.isString(a)){if(P.isString(o))return a.indexOf(o)!==-1;if(P.isRegExp(o))return o.test(a)}}function WL(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(a,r,o)=>r.toUpperCase()+o)}function KL(e,a){const r=P.toCamelCase(" "+a);["get","set","has"].forEach(o=>{Object.defineProperty(e,o+r,{value:function(l,u,h){return this[o].call(this,a,l,u,h)},configurable:!0})})}let Rt=class{constructor(a){a&&this.set(a)}set(a,r,o){const l=this;function u(b,p,y){const v=Co(p);if(!v)throw new Error("header name must be a non-empty string");const x=P.findKey(l,v);(!x||l[x]===void 0||y===!0||y===void 0&&l[x]!==!1)&&(l[x||p]=Ks(b))}const h=(b,p)=>P.forEach(b,(y,v)=>u(y,v,p));if(P.isPlainObject(a)||a instanceof this.constructor)h(a,r);else if(P.isString(a)&&(a=a.trim())&&!XL(a))h(qL(a),r);else if(P.isObject(a)&&P.isIterable(a)){let b={},p,y;for(const v of a){if(!P.isArray(v))throw TypeError("Object iterator must return a key-value pair");b[y=v[0]]=(p=b[y])?P.isArray(p)?[...p,v[1]]:[p,v[1]]:v[1]}h(b,r)}else a!=null&&u(r,a,o);return this}get(a,r){if(a=Co(a),a){const o=P.findKey(this,a);if(o){const l=this[o];if(!r)return l;if(r===!0)return VL(l);if(P.isFunction(r))return r.call(this,l,o);if(P.isRegExp(r))return r.exec(l);throw new TypeError("parser must be boolean|regexp|function")}}}has(a,r){if(a=Co(a),a){const o=P.findKey(this,a);return!!(o&&this[o]!==void 0&&(!r||Dd(this,this[o],o,r)))}return!1}delete(a,r){const o=this;let l=!1;function u(h){if(h=Co(h),h){const b=P.findKey(o,h);b&&(!r||Dd(o,o[b],b,r))&&(delete o[b],l=!0)}}return P.isArray(a)?a.forEach(u):u(a),l}clear(a){const r=Object.keys(this);let o=r.length,l=!1;for(;o--;){const u=r[o];(!a||Dd(this,this[u],u,a,!0))&&(delete this[u],l=!0)}return l}normalize(a){const r=this,o={};return P.forEach(this,(l,u)=>{const h=P.findKey(o,u);if(h){r[h]=Ks(l),delete r[u];return}const b=a?WL(u):String(u).trim();b!==u&&delete r[u],r[b]=Ks(l),o[b]=!0}),this}concat(...a){return this.constructor.concat(this,...a)}toJSON(a){const r=Object.create(null);return P.forEach(this,(o,l)=>{o!=null&&o!==!1&&(r[l]=a&&P.isArray(o)?o.join(", "):o)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([a,r])=>a+": "+r).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(a){return a instanceof this?a:new this(a)}static concat(a,...r){const o=new this(a);return r.forEach(l=>o.set(l)),o}static accessor(a){const o=(this[Cp]=this[Cp]={accessors:{}}).accessors,l=this.prototype;function u(h){const b=Co(h);o[b]||(KL(l,h),o[b]=!0)}return P.isArray(a)?a.forEach(u):u(a),this}};Rt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);P.reduceDescriptors(Rt.prototype,({value:e},a)=>{let r=a[0].toUpperCase()+a.slice(1);return{get:()=>e,set(o){this[r]=o}}});P.freezeMethods(Rt);function Ad(e,a){const r=this||rf,o=a||r,l=Rt.from(o.headers);let u=o.data;return P.forEach(e,function(b){u=b.call(r,u,l.normalize(),a?a.status:void 0)}),l.normalize(),u}function mb(e){return!!(e&&e.__CANCEL__)}function vi(e,a,r){de.call(this,e??"canceled",de.ERR_CANCELED,a,r),this.name="CanceledError"}P.inherits(vi,de,{__CANCEL__:!0});function gb(e,a,r){const o=r.config.validateStatus;!r.status||!o||o(r.status)?e(r):a(new de("Request failed with status code "+r.status,[de.ERR_BAD_REQUEST,de.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function e5(e){const a=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return a&&a[1]||""}function t5(e,a){e=e||10;const r=new Array(e),o=new Array(e);let l=0,u=0,h;return a=a!==void 0?a:1e3,function(p){const y=Date.now(),v=o[u];h||(h=y),r[l]=p,o[l]=y;let x=u,j=0;for(;x!==l;)j+=r[x++],x=x%e;if(l=(l+1)%e,l===u&&(u=(u+1)%e),y-h<a)return;const C=v&&y-v;return C?Math.round(j*1e3/C):void 0}}function n5(e,a){let r=0,o=1e3/a,l,u;const h=(y,v=Date.now())=>{r=v,l=null,u&&(clearTimeout(u),u=null),e.apply(null,y)};return[(...y)=>{const v=Date.now(),x=v-r;x>=o?h(y,v):(l=y,u||(u=setTimeout(()=>{u=null,h(l)},o-x)))},()=>l&&h(l)]}const vl=(e,a,r=3)=>{let o=0;const l=t5(50,250);return n5(u=>{const h=u.loaded,b=u.lengthComputable?u.total:void 0,p=h-o,y=l(p),v=h<=b;o=h;const x={loaded:h,total:b,progress:b?h/b:void 0,bytes:p,rate:y||void 0,estimated:y&&b&&v?(b-h)/y:void 0,event:u,lengthComputable:b!=null,[a?"download":"upload"]:!0};e(x)},r)},kp=(e,a)=>{const r=e!=null;return[o=>a[0]({lengthComputable:r,total:e,loaded:o}),a[1]]},Ep=e=>(...a)=>P.asap(()=>e(...a)),a5=Mt.hasStandardBrowserEnv?((e,a)=>r=>(r=new URL(r,Mt.origin),e.protocol===r.protocol&&e.host===r.host&&(a||e.port===r.port)))(new URL(Mt.origin),Mt.navigator&&/(msie|trident)/i.test(Mt.navigator.userAgent)):()=>!0,r5=Mt.hasStandardBrowserEnv?{write(e,a,r,o,l,u){const h=[e+"="+encodeURIComponent(a)];P.isNumber(r)&&h.push("expires="+new Date(r).toGMTString()),P.isString(o)&&h.push("path="+o),P.isString(l)&&h.push("domain="+l),u===!0&&h.push("secure"),document.cookie=h.join("; ")},read(e){const a=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return a?decodeURIComponent(a[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function i5(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function o5(e,a){return a?e.replace(/\/?\/$/,"")+"/"+a.replace(/^\/+/,""):e}function pb(e,a,r){let o=!i5(a);return e&&(o||r==!1)?o5(e,a):a}const Tp=e=>e instanceof Rt?{...e}:e;function sr(e,a){a=a||{};const r={};function o(y,v,x,j){return P.isPlainObject(y)&&P.isPlainObject(v)?P.merge.call({caseless:j},y,v):P.isPlainObject(v)?P.merge({},v):P.isArray(v)?v.slice():v}function l(y,v,x,j){if(P.isUndefined(v)){if(!P.isUndefined(y))return o(void 0,y,x,j)}else return o(y,v,x,j)}function u(y,v){if(!P.isUndefined(v))return o(void 0,v)}function h(y,v){if(P.isUndefined(v)){if(!P.isUndefined(y))return o(void 0,y)}else return o(void 0,v)}function b(y,v,x){if(x in a)return o(y,v);if(x in e)return o(void 0,y)}const p={url:u,method:u,data:u,baseURL:h,transformRequest:h,transformResponse:h,paramsSerializer:h,timeout:h,timeoutMessage:h,withCredentials:h,withXSRFToken:h,adapter:h,responseType:h,xsrfCookieName:h,xsrfHeaderName:h,onUploadProgress:h,onDownloadProgress:h,decompress:h,maxContentLength:h,maxBodyLength:h,beforeRedirect:h,transport:h,httpAgent:h,httpsAgent:h,cancelToken:h,socketPath:h,responseEncoding:h,validateStatus:b,headers:(y,v,x)=>l(Tp(y),Tp(v),x,!0)};return P.forEach(Object.keys(Object.assign({},e,a)),function(v){const x=p[v]||l,j=x(e[v],a[v],v);P.isUndefined(j)&&x!==b||(r[v]=j)}),r}const yb=e=>{const a=sr({},e);let{data:r,withXSRFToken:o,xsrfHeaderName:l,xsrfCookieName:u,headers:h,auth:b}=a;a.headers=h=Rt.from(h),a.url=ub(pb(a.baseURL,a.url,a.allowAbsoluteUrls),e.params,e.paramsSerializer),b&&h.set("Authorization","Basic "+btoa((b.username||"")+":"+(b.password?unescape(encodeURIComponent(b.password)):"")));let p;if(P.isFormData(r)){if(Mt.hasStandardBrowserEnv||Mt.hasStandardBrowserWebWorkerEnv)h.setContentType(void 0);else if((p=h.getContentType())!==!1){const[y,...v]=p?p.split(";").map(x=>x.trim()).filter(Boolean):[];h.setContentType([y||"multipart/form-data",...v].join("; "))}}if(Mt.hasStandardBrowserEnv&&(o&&P.isFunction(o)&&(o=o(a)),o||o!==!1&&a5(a.url))){const y=l&&u&&r5.read(u);y&&h.set(l,y)}return a},f5=typeof XMLHttpRequest<"u",s5=f5&&function(e){return new Promise(function(r,o){const l=yb(e);let u=l.data;const h=Rt.from(l.headers).normalize();let{responseType:b,onUploadProgress:p,onDownloadProgress:y}=l,v,x,j,C,S;function L(){C&&C(),S&&S(),l.cancelToken&&l.cancelToken.unsubscribe(v),l.signal&&l.signal.removeEventListener("abort",v)}let T=new XMLHttpRequest;T.open(l.method.toUpperCase(),l.url,!0),T.timeout=l.timeout;function E(){if(!T)return;const O=Rt.from("getAllResponseHeaders"in T&&T.getAllResponseHeaders()),N={data:!b||b==="text"||b==="json"?T.responseText:T.response,status:T.status,statusText:T.statusText,headers:O,config:e,request:T};gb(function(Q){r(Q),L()},function(Q){o(Q),L()},N),T=null}"onloadend"in T?T.onloadend=E:T.onreadystatechange=function(){!T||T.readyState!==4||T.status===0&&!(T.responseURL&&T.responseURL.indexOf("file:")===0)||setTimeout(E)},T.onabort=function(){T&&(o(new de("Request aborted",de.ECONNABORTED,e,T)),T=null)},T.onerror=function(){o(new de("Network Error",de.ERR_NETWORK,e,T)),T=null},T.ontimeout=function(){let D=l.timeout?"timeout of "+l.timeout+"ms exceeded":"timeout exceeded";const N=l.transitional||db;l.timeoutErrorMessage&&(D=l.timeoutErrorMessage),o(new de(D,N.clarifyTimeoutError?de.ETIMEDOUT:de.ECONNABORTED,e,T)),T=null},u===void 0&&h.setContentType(null),"setRequestHeader"in T&&P.forEach(h.toJSON(),function(D,N){T.setRequestHeader(N,D)}),P.isUndefined(l.withCredentials)||(T.withCredentials=!!l.withCredentials),b&&b!=="json"&&(T.responseType=l.responseType),y&&([j,S]=vl(y,!0),T.addEventListener("progress",j)),p&&T.upload&&([x,C]=vl(p),T.upload.addEventListener("progress",x),T.upload.addEventListener("loadend",C)),(l.cancelToken||l.signal)&&(v=O=>{T&&(o(!O||O.type?new vi(null,e,T):O),T.abort(),T=null)},l.cancelToken&&l.cancelToken.subscribe(v),l.signal&&(l.signal.aborted?v():l.signal.addEventListener("abort",v)));const k=e5(l.url);if(k&&Mt.protocols.indexOf(k)===-1){o(new de("Unsupported protocol "+k+":",de.ERR_BAD_REQUEST,e));return}T.send(u||null)})},l5=(e,a)=>{const{length:r}=e=e?e.filter(Boolean):[];if(a||r){let o=new AbortController,l;const u=function(y){if(!l){l=!0,b();const v=y instanceof Error?y:this.reason;o.abort(v instanceof de?v:new vi(v instanceof Error?v.message:v))}};let h=a&&setTimeout(()=>{h=null,u(new de(`timeout ${a} of ms exceeded`,de.ETIMEDOUT))},a);const b=()=>{e&&(h&&clearTimeout(h),h=null,e.forEach(y=>{y.unsubscribe?y.unsubscribe(u):y.removeEventListener("abort",u)}),e=null)};e.forEach(y=>y.addEventListener("abort",u));const{signal:p}=o;return p.unsubscribe=()=>P.asap(b),p}},c5=function*(e,a){let r=e.byteLength;if(r<a){yield e;return}let o=0,l;for(;o<r;)l=o+a,yield e.slice(o,l),o=l},u5=async function*(e,a){for await(const r of d5(e))yield*c5(r,a)},d5=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const a=e.getReader();try{for(;;){const{done:r,value:o}=await a.read();if(r)break;yield o}}finally{await a.cancel()}},Np=(e,a,r,o)=>{const l=u5(e,a);let u=0,h,b=p=>{h||(h=!0,o&&o(p))};return new ReadableStream({async pull(p){try{const{done:y,value:v}=await l.next();if(y){b(),p.close();return}let x=v.byteLength;if(r){let j=u+=x;r(j)}p.enqueue(new Uint8Array(v))}catch(y){throw b(y),y}},cancel(p){return b(p),l.return()}},{highWaterMark:2})},Ql=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",bb=Ql&&typeof ReadableStream=="function",h5=Ql&&(typeof TextEncoder=="function"?(e=>a=>e.encode(a))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),wb=(e,...a)=>{try{return!!e(...a)}catch{return!1}},m5=bb&&wb(()=>{let e=!1;const a=new Request(Mt.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!a}),Ip=64*1024,Q0=bb&&wb(()=>P.isReadableStream(new Response("").body)),xl={stream:Q0&&(e=>e.body)};Ql&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(a=>{!xl[a]&&(xl[a]=P.isFunction(e[a])?r=>r[a]():(r,o)=>{throw new de(`Response type '${a}' is not supported`,de.ERR_NOT_SUPPORT,o)})})})(new Response);const g5=async e=>{if(e==null)return 0;if(P.isBlob(e))return e.size;if(P.isSpecCompliantForm(e))return(await new Request(Mt.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(P.isArrayBufferView(e)||P.isArrayBuffer(e))return e.byteLength;if(P.isURLSearchParams(e)&&(e=e+""),P.isString(e))return(await h5(e)).byteLength},p5=async(e,a)=>{const r=P.toFiniteNumber(e.getContentLength());return r??g5(a)},y5=Ql&&(async e=>{let{url:a,method:r,data:o,signal:l,cancelToken:u,timeout:h,onDownloadProgress:b,onUploadProgress:p,responseType:y,headers:v,withCredentials:x="same-origin",fetchOptions:j}=yb(e);y=y?(y+"").toLowerCase():"text";let C=l5([l,u&&u.toAbortSignal()],h),S;const L=C&&C.unsubscribe&&(()=>{C.unsubscribe()});let T;try{if(p&&m5&&r!=="get"&&r!=="head"&&(T=await p5(v,o))!==0){let N=new Request(a,{method:"POST",body:o,duplex:"half"}),z;if(P.isFormData(o)&&(z=N.headers.get("content-type"))&&v.setContentType(z),N.body){const[Q,V]=kp(T,vl(Ep(p)));o=Np(N.body,Ip,Q,V)}}P.isString(x)||(x=x?"include":"omit");const E="credentials"in Request.prototype;S=new Request(a,{...j,signal:C,method:r.toUpperCase(),headers:v.normalize().toJSON(),body:o,duplex:"half",credentials:E?x:void 0});let k=await fetch(S);const O=Q0&&(y==="stream"||y==="response");if(Q0&&(b||O&&L)){const N={};["status","statusText","headers"].forEach(oe=>{N[oe]=k[oe]});const z=P.toFiniteNumber(k.headers.get("content-length")),[Q,V]=b&&kp(z,vl(Ep(b),!0))||[];k=new Response(Np(k.body,Ip,Q,()=>{V&&V(),L&&L()}),N)}y=y||"text";let D=await xl[P.findKey(xl,y)||"text"](k,e);return!O&&L&&L(),await new Promise((N,z)=>{gb(N,z,{data:D,headers:Rt.from(k.headers),status:k.status,statusText:k.statusText,config:e,request:S})})}catch(E){throw L&&L(),E&&E.name==="TypeError"&&/Load failed|fetch/i.test(E.message)?Object.assign(new de("Network Error",de.ERR_NETWORK,e,S),{cause:E.cause||E}):de.from(E,E&&E.code,e,S)}}),$0={http:DL,xhr:s5,fetch:y5};P.forEach($0,(e,a)=>{if(e){try{Object.defineProperty(e,"name",{value:a})}catch{}Object.defineProperty(e,"adapterName",{value:a})}});const Dp=e=>`- ${e}`,b5=e=>P.isFunction(e)||e===null||e===!1,vb={getAdapter:e=>{e=P.isArray(e)?e:[e];const{length:a}=e;let r,o;const l={};for(let u=0;u<a;u++){r=e[u];let h;if(o=r,!b5(r)&&(o=$0[(h=String(r)).toLowerCase()],o===void 0))throw new de(`Unknown adapter '${h}'`);if(o)break;l[h||"#"+u]=o}if(!o){const u=Object.entries(l).map(([b,p])=>`adapter ${b} `+(p===!1?"is not supported by the environment":"is not available in the build"));let h=a?u.length>1?`since :
`+u.map(Dp).join(`
`):" "+Dp(u[0]):"as no adapter specified";throw new de("There is no suitable adapter to dispatch the request "+h,"ERR_NOT_SUPPORT")}return o},adapters:$0};function zd(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new vi(null,e)}function Ap(e){return zd(e),e.headers=Rt.from(e.headers),e.data=Ad.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),vb.getAdapter(e.adapter||rf.adapter)(e).then(function(o){return zd(e),o.data=Ad.call(e,e.transformResponse,o),o.headers=Rt.from(o.headers),o},function(o){return mb(o)||(zd(e),o&&o.response&&(o.response.data=Ad.call(e,e.transformResponse,o.response),o.response.headers=Rt.from(o.response.headers))),Promise.reject(o)})}const xb="1.9.0",$l={};["object","boolean","number","function","string","symbol"].forEach((e,a)=>{$l[e]=function(o){return typeof o===e||"a"+(a<1?"n ":" ")+e}});const zp={};$l.transitional=function(a,r,o){function l(u,h){return"[Axios v"+xb+"] Transitional option '"+u+"'"+h+(o?". "+o:"")}return(u,h,b)=>{if(a===!1)throw new de(l(h," has been removed"+(r?" in "+r:"")),de.ERR_DEPRECATED);return r&&!zp[h]&&(zp[h]=!0,console.warn(l(h," has been deprecated since v"+r+" and will be removed in the near future"))),a?a(u,h,b):!0}};$l.spelling=function(a){return(r,o)=>(console.warn(`${o} is likely a misspelling of ${a}`),!0)};function w5(e,a,r){if(typeof e!="object")throw new de("options must be an object",de.ERR_BAD_OPTION_VALUE);const o=Object.keys(e);let l=o.length;for(;l-- >0;){const u=o[l],h=a[u];if(h){const b=e[u],p=b===void 0||h(b,u,e);if(p!==!0)throw new de("option "+u+" must be "+p,de.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new de("Unknown option "+u,de.ERR_BAD_OPTION)}}const el={assertOptions:w5,validators:$l},Nn=el.validators;let ir=class{constructor(a){this.defaults=a||{},this.interceptors={request:new Sp,response:new Sp}}async request(a,r){try{return await this._request(a,r)}catch(o){if(o instanceof Error){let l={};Error.captureStackTrace?Error.captureStackTrace(l):l=new Error;const u=l.stack?l.stack.replace(/^.+\n/,""):"";try{o.stack?u&&!String(o.stack).endsWith(u.replace(/^.+\n.+\n/,""))&&(o.stack+=`
`+u):o.stack=u}catch{}}throw o}}_request(a,r){typeof a=="string"?(r=r||{},r.url=a):r=a||{},r=sr(this.defaults,r);const{transitional:o,paramsSerializer:l,headers:u}=r;o!==void 0&&el.assertOptions(o,{silentJSONParsing:Nn.transitional(Nn.boolean),forcedJSONParsing:Nn.transitional(Nn.boolean),clarifyTimeoutError:Nn.transitional(Nn.boolean)},!1),l!=null&&(P.isFunction(l)?r.paramsSerializer={serialize:l}:el.assertOptions(l,{encode:Nn.function,serialize:Nn.function},!0)),r.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),el.assertOptions(r,{baseUrl:Nn.spelling("baseURL"),withXsrfToken:Nn.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let h=u&&P.merge(u.common,u[r.method]);u&&P.forEach(["delete","get","head","post","put","patch","common"],S=>{delete u[S]}),r.headers=Rt.concat(h,u);const b=[];let p=!0;this.interceptors.request.forEach(function(L){typeof L.runWhen=="function"&&L.runWhen(r)===!1||(p=p&&L.synchronous,b.unshift(L.fulfilled,L.rejected))});const y=[];this.interceptors.response.forEach(function(L){y.push(L.fulfilled,L.rejected)});let v,x=0,j;if(!p){const S=[Ap.bind(this),void 0];for(S.unshift.apply(S,b),S.push.apply(S,y),j=S.length,v=Promise.resolve(r);x<j;)v=v.then(S[x++],S[x++]);return v}j=b.length;let C=r;for(x=0;x<j;){const S=b[x++],L=b[x++];try{C=S(C)}catch(T){L.call(this,T);break}}try{v=Ap.call(this,C)}catch(S){return Promise.reject(S)}for(x=0,j=y.length;x<j;)v=v.then(y[x++],y[x++]);return v}getUri(a){a=sr(this.defaults,a);const r=pb(a.baseURL,a.url,a.allowAbsoluteUrls);return ub(r,a.params,a.paramsSerializer)}};P.forEach(["delete","get","head","options"],function(a){ir.prototype[a]=function(r,o){return this.request(sr(o||{},{method:a,url:r,data:(o||{}).data}))}});P.forEach(["post","put","patch"],function(a){function r(o){return function(u,h,b){return this.request(sr(b||{},{method:a,headers:o?{"Content-Type":"multipart/form-data"}:{},url:u,data:h}))}}ir.prototype[a]=r(),ir.prototype[a+"Form"]=r(!0)});let v5=class Mb{constructor(a){if(typeof a!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(u){r=u});const o=this;this.promise.then(l=>{if(!o._listeners)return;let u=o._listeners.length;for(;u-- >0;)o._listeners[u](l);o._listeners=null}),this.promise.then=l=>{let u;const h=new Promise(b=>{o.subscribe(b),u=b}).then(l);return h.cancel=function(){o.unsubscribe(u)},h},a(function(u,h,b){o.reason||(o.reason=new vi(u,h,b),r(o.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(a){if(this.reason){a(this.reason);return}this._listeners?this._listeners.push(a):this._listeners=[a]}unsubscribe(a){if(!this._listeners)return;const r=this._listeners.indexOf(a);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const a=new AbortController,r=o=>{a.abort(o)};return this.subscribe(r),a.signal.unsubscribe=()=>this.unsubscribe(r),a.signal}static source(){let a;return{token:new Mb(function(l){a=l}),cancel:a}}};function x5(e){return function(r){return e.apply(null,r)}}function M5(e){return P.isObject(e)&&e.isAxiosError===!0}const P0={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(P0).forEach(([e,a])=>{P0[a]=e});function jb(e){const a=new ir(e),r=Ky(ir.prototype.request,a);return P.extend(r,ir.prototype,a,{allOwnKeys:!0}),P.extend(r,a,null,{allOwnKeys:!0}),r.create=function(l){return jb(sr(e,l))},r}const We=jb(rf);We.Axios=ir;We.CanceledError=vi;We.CancelToken=v5;We.isCancel=mb;We.VERSION=xb;We.toFormData=Gl;We.AxiosError=de;We.Cancel=We.CanceledError;We.all=function(a){return Promise.all(a)};We.spread=x5;We.isAxiosError=M5;We.mergeConfig=sr;We.AxiosHeaders=Rt;We.formToJSON=e=>hb(P.isHTMLForm(e)?new FormData(e):e);We.getAdapter=vb.getAdapter;We.HttpStatusCode=P0;We.default=We;const{Axios:AB,AxiosError:zB,CanceledError:RB,isCancel:OB,CancelToken:BB,VERSION:_B,all:UB,Cancel:YB,isAxiosError:GB,spread:QB,toFormData:$B,AxiosHeaders:PB,HttpStatusCode:HB,formToJSON:ZB,getAdapter:JB,mergeConfig:FB}=We,j5="http://localhost:5000/api",De=We.create({baseURL:j5,headers:{"Content-Type":"application/json"},timeout:1e4,withCredentials:!0});De.interceptors.request.use(e=>{var r;const a=localStorage.getItem("token");return a&&(e.headers.Authorization=`Bearer ${a}`),console.log(`🌐 API Request: ${(r=e.method)==null?void 0:r.toUpperCase()} ${e.url}`),e},e=>(console.error("❌ API Request Error:",e),Promise.reject(e)));De.interceptors.response.use(e=>(console.log(`✅ API Response: ${e.status} ${e.config.url}`),e),e=>{var a,r,o,l;return console.error(`❌ API Response Error: ${(a=e.response)==null?void 0:a.status} ${(r=e.config)==null?void 0:r.url}`,(o=e.response)==null?void 0:o.data),((l=e.response)==null?void 0:l.status)===401&&(console.log("🔑 Token expired or invalid, redirecting to login"),localStorage.removeItem("token"),window.location.href="/auth/login"),Promise.reject(e)});const Oo={register:async e=>{var a,r,o;try{return console.log("🔐 Registering user:",{...e,password:"[HIDDEN]"}),(await De.post("/auth/register",e)).data}catch(l){throw console.error("❌ Registration failed:",(a=l.response)==null?void 0:a.data),new Error(((o=(r=l.response)==null?void 0:r.data)==null?void 0:o.message)||"Registration failed")}},login:async e=>{var a,r,o;try{return console.log("🔐 Logging in user:",{...e,password:"[HIDDEN]"}),(await De.post("/auth/login",e)).data}catch(l){throw console.error("❌ Login failed:",(a=l.response)==null?void 0:a.data),new Error(((o=(r=l.response)==null?void 0:r.data)==null?void 0:o.message)||"Login failed")}},logout:async()=>{try{await De.post("/auth/logout")}catch(e){console.error("Logout error:",e)}finally{localStorage.removeItem("token")}},getProfile:async()=>{var e,a,r;try{return(await De.get("/auth/profile")).data}catch(o){throw console.error("❌ Get profile failed:",(e=o.response)==null?void 0:e.data),new Error(((r=(a=o.response)==null?void 0:a.data)==null?void 0:r.message)||"Failed to get profile")}},updateProfile:async e=>{var a,r,o;try{return console.log("🔄 Updating profile:",e),(await De.put("/users/profile",e)).data}catch(l){throw console.error("❌ Update profile failed:",(a=l.response)==null?void 0:a.data),new Error(((o=(r=l.response)==null?void 0:r.data)==null?void 0:o.message)||"Failed to update profile")}}},Sa={getFriends:async()=>{var e,a,r;try{console.log("👥 Loading friends...");const o=await De.get("/friends");return console.log("✅ Friends loaded:",o.data),o.data}catch(o){throw console.error("❌ Get friends failed:",(e=o.response)==null?void 0:e.data),new Error(((r=(a=o.response)==null?void 0:a.data)==null?void 0:r.message)||"Failed to get friends")}},getFriendRequests:async()=>{var e,a,r;try{console.log("📬 Loading friend requests...");const o=await De.get("/friends/requests");return console.log("✅ Friend requests loaded:",o.data),o.data}catch(o){throw console.error("❌ Get friend requests failed:",(e=o.response)==null?void 0:e.data),new Error(((r=(a=o.response)==null?void 0:a.data)==null?void 0:r.message)||"Failed to get friend requests")}},sendFriendRequest:async e=>{var a,r,o;try{console.log("📤 Sending friend request to:",e);const l=await De.post("/friends/request",{friendId:e});return console.log("✅ Friend request sent:",l.data),l.data}catch(l){throw console.error("❌ Send friend request failed:",(a=l.response)==null?void 0:a.data),new Error(((o=(r=l.response)==null?void 0:r.data)==null?void 0:o.message)||"Failed to send friend request")}},acceptFriendRequest:async e=>{var a,r,o;try{console.log("✅ Accepting friend request:",e);const l=await De.put(`/friends/request/${e}/accept`);return console.log("✅ Friend request accepted:",l.data),l.data}catch(l){throw console.error("❌ Accept friend request failed:",(a=l.response)==null?void 0:a.data),new Error(((o=(r=l.response)==null?void 0:r.data)==null?void 0:o.message)||"Failed to accept friend request")}},declineFriendRequest:async e=>{var a,r,o;try{console.log("❌ Declining friend request:",e);const l=await De.put(`/friends/request/${e}/decline`);return console.log("✅ Friend request declined:",l.data),l.data}catch(l){throw console.error("❌ Decline friend request failed:",(a=l.response)==null?void 0:a.data),new Error(((o=(r=l.response)==null?void 0:r.data)==null?void 0:o.message)||"Failed to decline friend request")}},removeFriend:async e=>{var a,r,o;try{console.log("🗑️ Removing friend:",e);const l=await De.delete(`/friends/${e}`);return console.log("✅ Friend removed:",l.data),l.data}catch(l){throw console.error("❌ Remove friend failed:",(a=l.response)==null?void 0:a.data),new Error(((o=(r=l.response)==null?void 0:r.data)==null?void 0:o.message)||"Failed to remove friend")}},blockUser:async e=>{var a,r,o;try{console.log("🚫 Blocking user:",e);const l=await De.post("/friends/block",{friendId:e});return console.log("✅ User blocked:",l.data),l.data}catch(l){throw console.error("❌ Block user failed:",(a=l.response)==null?void 0:a.data),new Error(((o=(r=l.response)==null?void 0:r.data)==null?void 0:o.message)||"Failed to block user")}},searchUsers:async e=>{var a,r,o;try{console.log("🔍 Searching users:",e);const l=await De.get(`/users/search?query=${encodeURIComponent(e)}`);return console.log("✅ Users found:",l.data),l.data}catch(l){throw console.error("❌ Search users failed:",(a=l.response)==null?void 0:a.data),new Error(((o=(r=l.response)==null?void 0:r.data)==null?void 0:o.message)||"Failed to search users")}}},Rd={sendDirectMessage:async(e,a,r="text")=>{var o,l,u;try{console.log("💬 Sending message to:",e);const h=await De.post("/messages/direct",{recipientId:e,content:a,type:r});return console.log("✅ Message sent:",h.data),h.data}catch(h){throw console.error("❌ Send message failed:",(o=h.response)==null?void 0:o.data),new Error(((u=(l=h.response)==null?void 0:l.data)==null?void 0:u.message)||"Failed to send message")}},getDirectMessages:async(e,a=1,r=50)=>{var o,l,u;try{console.log("📩 Loading messages with user:",e);const h=await De.get(`/messages/direct/${e}?page=${a}&limit=${r}`);return console.log("✅ Messages loaded:",h.data),h.data}catch(h){throw console.error("❌ Get messages failed:",(o=h.response)==null?void 0:o.data),new Error(((u=(l=h.response)==null?void 0:l.data)==null?void 0:u.message)||"Failed to get messages")}},deleteMessage:async e=>{var a,r,o;try{console.log("🗑️ Deleting message:",e);const l=await De.delete(`/messages/${e}`);return console.log("✅ Message deleted:",l.data),l.data}catch(l){throw console.error("❌ Delete message failed:",(a=l.response)==null?void 0:a.data),new Error(((o=(r=l.response)==null?void 0:r.data)==null?void 0:o.message)||"Failed to delete message")}}},In={getUserGroups:async()=>{var e,a,r;try{console.log("📁 Loading user groups...");const o=await De.get("/chat-groups");return console.log("✅ Groups loaded:",o.data),o.data}catch(o){throw console.error("❌ Get groups failed:",(e=o.response)==null?void 0:e.data),new Error(((r=(a=o.response)==null?void 0:a.data)==null?void 0:r.message)||"Failed to get groups")}},getGroupDetails:async e=>{var a,r,o;try{console.log("📋 Loading group details:",e);const l=await De.get(`/chat-groups/${e}`);return console.log("✅ Group details loaded:",l.data),l.data}catch(l){throw console.error("❌ Get group details failed:",(a=l.response)==null?void 0:a.data),new Error(((o=(r=l.response)==null?void 0:r.data)==null?void 0:o.message)||"Failed to get group details")}},createGroup:async(e,a,r=!1,o=100)=>{var l,u,h;try{console.log("🆕 Creating group:",e);const b=await De.post("/chat-groups",{name:e,description:a,isPrivate:r,maxMembers:o});return console.log("✅ Group created:",b.data),b.data}catch(b){throw console.error("❌ Create group failed:",(l=b.response)==null?void 0:l.data),new Error(((h=(u=b.response)==null?void 0:u.data)==null?void 0:h.message)||"Failed to create group")}},sendGroupMessage:async(e,a,r="text")=>{var o,l,u;try{console.log("💬 Sending group message to:",e);const h=await De.post("/messages/group",{chatGroupId:e,content:a,type:r});return console.log("✅ Group message sent:",h.data),h.data}catch(h){throw console.error("❌ Send group message failed:",(o=h.response)==null?void 0:o.data),new Error(((u=(l=h.response)==null?void 0:l.data)==null?void 0:u.message)||"Failed to send group message")}},getGroupMessages:async(e,a=1,r=50)=>{var o,l,u;try{console.log("📩 Loading group messages:",e);const h=await De.get(`/messages/group/${e}?page=${a}&limit=${r}`);return console.log("✅ Group messages loaded:",h.data),h.data}catch(h){throw console.error("❌ Get group messages failed:",(o=h.response)==null?void 0:o.data),new Error(((u=(l=h.response)==null?void 0:l.data)==null?void 0:u.message)||"Failed to get group messages")}},joinGroup:async e=>{var a,r,o;try{console.log("🚪 Joining group:",e);const l=await De.post(`/chat-groups/${e}/join`);return console.log("✅ Joined group:",l.data),l.data}catch(l){throw console.error("❌ Join group failed:",(a=l.response)==null?void 0:a.data),new Error(((o=(r=l.response)==null?void 0:r.data)==null?void 0:o.message)||"Failed to join group")}},leaveGroup:async e=>{var a,r,o;try{console.log("🚶 Leaving group:",e);const l=await De.delete(`/chat-groups/${e}/leave`);return console.log("✅ Left group:",l.data),l.data}catch(l){throw console.error("❌ Leave group failed:",(a=l.response)==null?void 0:a.data),new Error(((o=(r=l.response)==null?void 0:r.data)==null?void 0:o.message)||"Failed to leave group")}},addMember:async(e,a)=>{var r,o,l;try{console.log("➕ Adding member to group:",e,a);const u=await De.post(`/chat-groups/${e}/members`,{userId:a});return console.log("✅ Member added:",u.data),u.data}catch(u){throw console.error("❌ Add member failed:",(r=u.response)==null?void 0:r.data),new Error(((l=(o=u.response)==null?void 0:o.data)==null?void 0:l.message)||"Failed to add member")}},removeMember:async(e,a)=>{var r,o,l;try{console.log("➖ Removing member from group:",e,a);const u=await De.delete(`/chat-groups/${e}/members/${a}`);return console.log("✅ Member removed:",u.data),u.data}catch(u){throw console.error("❌ Remove member failed:",(r=u.response)==null?void 0:r.data),new Error(((l=(o=u.response)==null?void 0:o.data)==null?void 0:l.message)||"Failed to remove member")}},updateMemberRole:async(e,a,r)=>{var o,l,u;try{console.log("🔄 Updating member role:",e,a,r);const h=await De.put(`/chat-groups/${e}/members/${a}/role`,{role:r});return console.log("✅ Member role updated:",h.data),h.data}catch(h){throw console.error("❌ Update member role failed:",(o=h.response)==null?void 0:o.data),new Error(((u=(l=h.response)==null?void 0:l.data)==null?void 0:u.message)||"Failed to update member role")}},searchPublicGroups:async e=>{var a,r,o;try{console.log("🔍 Searching public groups:",e);const l=await De.get(`/chat-groups/search?query=${encodeURIComponent(e)}`);return console.log("✅ Groups found:",l.data),l.data}catch(l){throw console.error("❌ Search groups failed:",(a=l.response)==null?void 0:a.data),new Error(((o=(r=l.response)==null?void 0:r.data)==null?void 0:o.message)||"Failed to search groups")}}},Lb=m.createContext(void 0),L5=({children:e})=>{const[a,r]=m.useState(null),[o,l]=m.useState(!0);m.useEffect(()=>{(async()=>{try{if(localStorage.getItem("token")){console.log("🔑 Token found in localStorage, verifying...");const j=await Oo.getProfile();j.success?(console.log("✅ Token valid, user authenticated"),r(j.data.user)):(console.log("❌ Token invalid, removing from storage"),localStorage.removeItem("token"))}else console.log("🔍 No token found in localStorage")}catch(x){console.error("❌ Token verification failed:",x),localStorage.removeItem("token"),r(null)}finally{l(!1)}})()},[]);const y={user:a,loading:o,login:async v=>{try{l(!0),console.log("🔐 Attempting login...");const x=await Oo.login(v);if(x.success){const{user:j,token:C}=x.data;console.log("✅ Login successful, storing token"),localStorage.setItem("token",C),r(j)}else throw new Error(x.message||"Login failed")}catch(x){throw console.error("❌ Login failed:",x.message),new Error(x.message||"Login failed")}finally{l(!1)}},register:async v=>{try{l(!0),console.log("📝 Attempting registration...");const x=await Oo.register(v);if(x.success){const{user:j,token:C}=x.data;console.log("✅ Registration successful, storing token"),localStorage.setItem("token",C),r(j)}else throw new Error(x.message||"Registration failed")}catch(x){throw console.error("❌ Registration failed:",x.message),new Error(x.message||"Registration failed")}finally{l(!1)}},logout:async()=>{try{console.log("🚪 Logging out..."),await Oo.logout()}catch(v){console.error("❌ Logout error:",v)}finally{console.log("🗑️ Clearing token and user state"),localStorage.removeItem("token"),r(null)}},updateUser:v=>{r(x=>x?{...x,...v}:null)},isAuthenticated:!!a};return s.jsx(Lb.Provider,{value:y,children:e})},Lt=()=>{const e=m.useContext(Lb);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e},S5=Jt`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,C5=()=>{const[e,a]=m.useState(!1),[r,o]=m.useState(!1),{isAuthenticated:l}=Lt();m.useEffect(()=>{const h=()=>{a(window.scrollY>50)};return window.addEventListener("scroll",h),()=>window.removeEventListener("scroll",h)},[]);const u=[{label:"Features",href:"#features"},{label:"CTA",href:"#cta"},{label:"Trust",href:"#trust"},{label:"Testimonials",href:"#testimonials"}];return s.jsx(k5,{isScrolled:e,children:s.jsxs(E5,{children:[s.jsxs(T5,{children:[s.jsxs(N5,{children:[s.jsx(I5,{children:e?s.jsx(Ol,{}):s.jsx(Zj,{})}),s.jsx(D5,{isScrolled:e,children:"Mendam"})]}),s.jsx(A5,{children:s.jsx(z5,{children:u.map((h,b)=>s.jsx(R5,{children:s.jsx(O5,{isScrolled:e,children:s.jsx("a",{href:h.href,children:h.label})})},b))})}),s.jsxs(B5,{children:[!l&&s.jsxs(s.Fragment,{children:[s.jsx(Be,{to:"/auth/login",children:s.jsx(_5,{isScrolled:e,children:"Sign In"})}),s.jsx(Be,{to:"/auth/register",children:s.jsx(Rp,{children:"Get Started"})})]}),l&&s.jsx(Be,{to:"/app/@me",children:s.jsx(Rp,{children:"Open Mendam"})}),s.jsxs(U5,{onClick:()=>o(!r),isOpen:r,isScrolled:e,children:[s.jsx("span",{}),s.jsx("span",{}),s.jsx("span",{})]})]})]}),s.jsx(Y5,{isOpen:r,children:s.jsxs(G5,{children:[u.map((h,b)=>s.jsx(Od,{children:s.jsx(Bd,{onClick:()=>o(!1),children:s.jsx("a",{href:h.href,children:h.label})})},b)),s.jsx(Q5,{}),s.jsx(Od,{children:s.jsx(Be,{to:"/auth/login",children:s.jsx(Bd,{children:"Sign In"})})}),s.jsx(Od,{children:s.jsx(Be,{to:"/auth/register",children:s.jsx(Bd,{isPrimary:!0,children:"Get Started"})})})]})})]})})},k5=g.header`
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
  animation: ${S5} 0.8s ease-out;
  
  @media (max-width: 768px) {
    padding: 1.5rem 0;
  }
`,E5=g.div`
  max-width: 140rem;
  margin: 0 auto;
  padding: 0 3rem;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`,T5=g.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,N5=g.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  user-select: none;
`,I5=g.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 3.5rem;
    height: 3.5rem;
  }
`,D5=g.div`
  font-size: var(--text-xl);
  font-weight: 700;
  color: ${e=>e.isScrolled?"#1a202c":"white"};
  transition: color 0.3s ease;
  
  @media (max-width: 640px) {
    display: none;
  }
`,A5=g.div`
  @media (max-width: 768px) {
    display: none;
  }
`,z5=g.ul`
  display: flex;
  align-items: center;
  gap: 4rem;
  list-style: none;
  margin: 0;
  padding: 0;
`,R5=g.li`
  position: relative;
`,O5=g.div`
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
`,B5=g.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`,_5=g.a`
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
`,Rp=g.div`
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
`,U5=g.button`
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
`,Y5=g.div`
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
`,G5=g.ul`
  list-style: none;
  margin: 0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Od=g.li`
  width: 100%;
`,Bd=g.div`
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
`,Q5=g.div`
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, #e2e8f0 50%, transparent 100%);
  margin: 1rem 0;
`,$5=Jt`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Sb=Jt`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
`,P5=()=>{const e=[{title:"Product",links:[{label:"Features",href:"#features"},{label:"Security",href:"#security"}]},{title:"Company",links:[{label:"About Us",href:"#about"},{label:"Blog",href:"#blog"},{label:"Contact",href:"#contact"}]},{title:"Resources",links:[{label:"Help Center",href:"#help"},{label:"Documentation",href:"#docs"},{label:"Community",href:"#community"},{label:"Status",href:"#status"}]},{title:"Legal",links:[{label:"Privacy Policy",href:"#privacy"},{label:"Terms of Service",href:"#terms"},{label:"Cookie Policy",href:"#cookies"}]}];return s.jsxs(H5,{children:[s.jsxs(J5,{children:[s.jsxs(F5,{children:[s.jsxs(q5,{children:[s.jsxs(V5,{children:[s.jsx(X5,{children:s.jsx(Ol,{})}),s.jsx(W5,{children:s.jsx(K5,{children:"Mendam"})})]}),s.jsx(eS,{children:"Empowering teams worldwide with intelligent, secure, and seamless communication tools. Join thousands of organizations who trust Mendam for their daily collaboration needs."})]}),s.jsx(nS,{children:e.map((a,r)=>s.jsxs(aS,{children:[s.jsx(rS,{children:a.title}),s.jsx(iS,{children:a.links.map((o,l)=>s.jsx(oS,{children:s.jsx("a",{href:o.href,children:o.label})},l))})]},r))})]}),s.jsx(fS,{children:s.jsxs(sS,{children:[s.jsxs(lS,{children:[s.jsx(cS,{children:"Stay in the loop"}),s.jsx(uS,{children:"Get the latest updates, tips, and insights delivered to your inbox."})]}),s.jsxs(dS,{children:[s.jsx(hS,{type:"email",placeholder:"Enter your email address"}),s.jsxs(mS,{children:[s.jsx("span",{children:"Subscribe"}),s.jsx(gS,{children:"✨"})]})]})]})}),s.jsxs(pS,{children:[s.jsx(yS,{children:"© 2024 Mendam Technologies Inc. All rights reserved."}),s.jsxs(bS,{children:[s.jsx(_d,{href:"#privacy",children:"Privacy"}),s.jsx(Op,{children:"•"}),s.jsx(_d,{href:"#terms",children:"Terms"}),s.jsx(Op,{children:"•"}),s.jsx(_d,{href:"#cookies",children:"Cookies"})]}),s.jsxs(wS,{children:[s.jsx(vS,{}),s.jsx("span",{children:"All systems operational"})]})]})]}),s.jsx(Z5,{})]})},H5=g.footer`
  background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
  color: white;
  position: relative;
  overflow: hidden;
  /* margin-top: 8rem; */
`,Z5=g.div`
  position: absolute;
  inset: 0;
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(118, 75, 162, 0.1) 0%, transparent 50%);
  pointer-events: none;
`,J5=g.div`
  max-width: 140rem;
  margin: 0 auto;
  padding: 0 3rem;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`,F5=g.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 6rem;
  padding: 8rem 0 6rem;
  animation: ${$5} 0.8s ease-out;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 4rem;
    text-align: center;
  }
  
  @media (max-width: 768px) {
    padding: 6rem 0 4rem;
  }
`,q5=g.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`,V5=g.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  
  @media (max-width: 1024px) {
    justify-content: center;
  }
`,X5=g.div`
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
`,W5=g.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`,K5=g.div`
  font-size: var(--text-xl);
  font-weight: 700;
  line-height: 1;
`;g.div`
  font-size: var(--text-sm);
  opacity: 0.8;
  line-height: 1;
`;const eS=g.p`
  font-size: var(--text-md);
  line-height: 1.6;
  opacity: 0.9;
  max-width: 40rem;
  
  @media (max-width: 1024px) {
    margin: 0 auto;
  }
`;g.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 1024px) {
    justify-content: center;
  }
`;const tS=g.div`
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
`;g.a`
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
    
    ${tS} {
      opacity: 1;
      visibility: visible;
      transform: translateY(-100%);
    }
  }
`;const nS=g.div`
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
`,aS=g.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,rS=g.h4`
  font-size: var(--text-lg);
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
`,iS=g.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,oS=g.li`
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
`,fS=g.div`
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
`,sS=g.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    gap: 3rem;
  }
`,lS=g.div`
  flex: 1;
`,cS=g.h3`
  font-size: var(--text-xl);
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
`,uS=g.p`
  font-size: var(--text-md);
  opacity: 0.9;
  line-height: 1.6;
`,dS=g.form`
  display: flex;
  gap: 1.5rem;
  flex: 1;
  max-width: 40rem;
  
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 1rem;
  }
`,hS=g.input`
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
`,mS=g.button`
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
`,gS=g.span`
  animation: ${Sb} 2s infinite;
`,pS=g.div`
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
`,yS=g.div`
  font-size: var(--text-sm);
  opacity: 0.8;
`,bS=g.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  
  @media (max-width: 640px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`,_d=g.a`
  font-size: var(--text-sm);
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #667eea;
  }
`,Op=g.span`
  opacity: 0.5;
  
  @media (max-width: 640px) {
    display: none;
  }
`,wS=g.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: var(--text-sm);
  opacity: 0.8;
`,vS=g.div`
  width: 0.8rem;
  height: 0.8rem;
  background: #22c55e;
  border-radius: 50%;
  animation: ${Sb} 2s infinite;
`,xS=({fz:e,bg:a,outline:r,color:o,hoverColor:l,hoverBg:u,title:h,isLink:b,href:p,isBlank:y})=>b?s.jsx("a",{href:p,target:y?"_blank":void 0,children:s.jsx(Bp,{color:o,outline:r,bg:a,fz:e,hoverColor:l,hoverBg:u,children:h})}):s.jsx(Bp,{color:o,outline:r,bg:a,fz:e,hoverColor:l,hoverBg:u,children:h}),Bp=g.button`
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
`,Cb=Jt`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,kb=Jt`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`,Eb=Jt`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
`,MS=()=>s.jsxs(jS,{children:[s.jsxs(LS,{children:[s.jsxs(SS,{children:[s.jsxs(CS,{children:[s.jsx(_p,{children:"Connect"})," teams.",s.jsx("br",{}),s.jsx(_p,{children:"Build"})," relationships.",s.jsx("br",{}),s.jsx(kS,{children:"Achieve more."})]}),s.jsx(ES,{children:"Experience the future of team communication with Mendam's AI-powered chat platform. Real-time collaboration, custom workflows, and seamless integration - all in one place."}),s.jsx(TS,{children:s.jsx(NS,{children:s.jsx(xS,{isLink:!0,href:"/auth/register",title:"Get Started"})})})]}),s.jsx(IS,{children:s.jsxs(DS,{children:[s.jsxs(AS,{children:[s.jsxs(zS,{children:[s.jsx(tr,{color:"#ff5f57"}),s.jsx(tr,{color:"#ffbd2e"}),s.jsx(tr,{color:"#28ca42"}),s.jsx(RS,{children:"Mendam"})]}),s.jsx(OS,{children:s.jsxs(BS,{children:[s.jsxs(_S,{children:[s.jsxs(Ud,{active:!0,children:[s.jsx(tl,{color:"#6366f1"}),s.jsx("span",{children:"Design Team"}),s.jsx(Up,{children:"3"})]}),s.jsxs(Ud,{children:[s.jsx(tl,{color:"#10b981"}),s.jsx("span",{children:"Development"})]}),s.jsxs(Ud,{children:[s.jsx(tl,{color:"#f59e0b"}),s.jsx("span",{children:"Marketing"}),s.jsx(Up,{children:"1"})]})]}),s.jsxs(US,{children:[s.jsxs(Yp,{children:[s.jsx(Gp,{color:"#6366f1"}),s.jsxs(Qp,{children:[s.jsx($p,{children:"Alex Designer"}),s.jsx(Pp,{children:"Just finished the new component library! 🎨"})]})]}),s.jsxs(Yp,{children:[s.jsx(Gp,{color:"#10b981"}),s.jsxs(Qp,{children:[s.jsx($p,{children:"Sarah Dev"}),s.jsx(Pp,{children:"Amazing work! The new buttons look fantastic"})]})]}),s.jsxs(YS,{children:[s.jsx(tr,{color:"#6366f1"}),s.jsx(tr,{color:"#6366f1"}),s.jsx(tr,{color:"#6366f1"}),s.jsx("span",{children:"Mike is typing..."})]})]})]})})]}),s.jsxs(Yd,{delay:"0s",children:[s.jsx(Gd,{children:"📊"}),s.jsxs(Qd,{children:[s.jsx("strong",{children:"Team Analytics"}),s.jsx("span",{children:"Real-time insights"})]})]}),s.jsxs(Yd,{delay:"1s",children:[s.jsx(Gd,{children:"🔔"}),s.jsxs(Qd,{children:[s.jsx("strong",{children:"Smart Notifications"}),s.jsx("span",{children:"Never miss important updates"})]})]}),s.jsxs(Yd,{delay:"2s",children:[s.jsx(Gd,{children:"🚀"}),s.jsxs(Qd,{children:[s.jsx("strong",{children:"AI Assistant"}),s.jsx("span",{children:"Boost productivity by 40%"})]})]})]})})]}),s.jsxs(GS,{children:[s.jsx($d,{top:"10%",left:"5%",size:"300px"}),s.jsx($d,{top:"60%",right:"10%",size:"200px"}),s.jsx($d,{bottom:"20%",left:"20%",size:"150px"})]})]}),jS=g.section`
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
`,LS=g.div`
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
`,SS=g.div`
  animation: ${Cb} 0.8s ease-out;
`;g.div`
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
`;g.span`
  font-size: 1.4rem;
  animation: ${Eb} 2s infinite;
`;const CS=g.h1`
  font-size: clamp(4rem, 8vw, 7rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 2rem;
  color: white;
`,_p=g.span`
  background: linear-gradient(135deg, #ffd89b 0%, #ffffff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,kS=g.span`
  color: #ffd89b;
`,ES=g.p`
  font-size: var(--text-lg);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 3rem;
  max-width: 50rem;
`,TS=g.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 4rem;
  
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
`,NS=g.div`
  a {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 15px 40px rgba(102, 126, 234, 0.6);
    }
  }
`;g.div`
  a {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.3);
    
    &:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-2px);
    }
  }
`;g.div`
  opacity: 0.9;
`;g.p`
  font-size: var(--text-sm);
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1rem;
`;g.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 640px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;g.div`
  font-size: var(--text-sm);
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
  opacity: 0.8;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 1;
  }
`;const IS=g.div`
  animation: ${Cb} 0.8s ease-out 0.2s both;
  position: relative;
`,DS=g.div`
  position: relative;
  perspective: 1000px;
`,AS=g.div`
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
`,zS=g.div`
  background: #f8f9fa;
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid #e9ecef;
`,tr=g.div`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  background: ${e=>e.color};
`,RS=g.div`
  font-weight: 600;
  color: #495057;
  margin-left: auto;
`,OS=g.div`
  height: 40rem;
  background: white;
`,BS=g.div`
  display: flex;
  height: 100%;
`,_S=g.div`
  width: 25rem;
  background: #f8f9fa;
  padding: 2rem 1rem;
  border-right: 1px solid #e9ecef;
`,Ud=g.div`
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
`,tl=g.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: ${e=>e.color};
  flex-shrink: 0;
`,Up=g.div`
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
`,US=g.div`
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Yp=g.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`,Gp=g(tl)`
  width: 4rem;
  height: 4rem;
`,Qp=g.div`
  flex: 1;
`,$p=g.div`
  font-weight: 600;
  color: #495057;
  font-size: var(--text-sm);
  margin-bottom: 0.3rem;
`,Pp=g.div`
  color: #6c757d;
  font-size: var(--text-sm);
  line-height: 1.4;
`,YS=g.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  opacity: 0.7;
  font-size: var(--text-xs);
  color: #6c757d;
  
  ${tr} {
    width: 0.6rem;
    height: 0.6rem;
    animation: ${Eb} 1.5s infinite;
    
    &:nth-child(2) {
      animation-delay: 0.2s;
    }
    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`,Yd=g.div`
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
  animation: ${kb} 3s ease-in-out infinite;
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
`,Gd=g.div`
  font-size: 2.4rem;
`,Qd=g.div`
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
`,GS=g.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`,$d=g.div`
  position: absolute;
  width: ${e=>e.size};
  height: ${e=>e.size};
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  top: ${e=>e.top};
  bottom: ${e=>e.bottom};
  left: ${e=>e.left};
  right: ${e=>e.right};
  animation: ${kb} 6s ease-in-out infinite;
  
  &:nth-child(2) {
    animation-delay: -2s;
  }
  
  &:nth-child(3) {
    animation-delay: -4s;
  }
`;g.section`
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
`;g.div`
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
`;g.div`
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
`;const Tb=Jt`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,QS=Jt`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,$S=Jt`
  0%, 100% {
    box-shadow: 0 0 20px rgba(102, 126, 234, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(102, 126, 234, 0.6);
  }
`,PS=()=>{const e=[{icon:"💬",title:"Real-time Messaging",description:"Lightning-fast messaging with typing indicators, read receipts, and instant delivery across all devices.",stats:"99.9% uptime",color:"#667eea"},{icon:"🤖",title:"AI-Powered Assistant",description:"Smart suggestions, automated summaries, and intelligent task management to boost your team's productivity.",stats:"40% faster workflows",color:"#764ba2"},{icon:"🔒",title:"Enterprise Security",description:"End-to-end encryption, SSO integration, and compliance with GDPR, HIPAA, and SOC 2 standards.",stats:"Bank-level security",color:"#f093fb"},{icon:"📊",title:"Advanced Analytics",description:"Deep insights into team performance, communication patterns, and productivity metrics.",stats:"Real-time insights",color:"#f5576c"},{icon:"🔗",title:"Seamless Integrations",description:"Connect with 200+ tools including Slack, Microsoft Teams, Google Workspace, and custom APIs.",stats:"200+ integrations",color:"#4facfe"},{icon:"📱",title:"Cross-Platform",description:"Native apps for iOS, Android, Windows, macOS, and web. Your conversations sync everywhere.",stats:"All platforms",color:"#43e97b"}];return s.jsx(HS,{id:"features",children:s.jsxs(ZS,{children:[s.jsxs(JS,{children:[s.jsx(FS,{children:"Features"}),s.jsxs(qS,{children:["Everything you need for",s.jsx(VS,{children:" modern communication"})]}),s.jsx(XS,{children:"Discover the powerful features that make Mendam the preferred choice for teams who demand excellence in their communication tools."})]}),s.jsx(WS,{children:e.map((a,r)=>s.jsxs(KS,{index:r,color:a.color,children:[s.jsxs(e9,{children:[s.jsx(t9,{children:a.icon}),s.jsx(n9,{children:a.stats})]}),s.jsxs(a9,{children:[s.jsx(r9,{children:a.title}),s.jsx(i9,{children:a.description})]}),s.jsx(Nb,{color:a.color})]},r))}),s.jsx(o9,{id:"cta",children:s.jsxs(f9,{children:[s.jsx(s9,{children:"Ready to transform your team communication?"}),s.jsx(l9,{children:"Join thousands of teams already using Mendam to collaborate more effectively."}),s.jsx(c9,{children:s.jsx(u9,{children:s.jsx(Be,{to:"/auth/register",children:"Get Started"})})})]})})]})})},HS=g.section`
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
`,ZS=g.div`
  max-width: 140rem;
  margin: 0 auto;
  padding: 0 3rem;
  
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`,JS=g.div`
  text-align: center;
  margin-bottom: 8rem;
  animation: ${Tb} 0.8s ease-out;
`,FS=g.div`
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
`,qS=g.h2`
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 700;
  line-height: 1.2;
  color: #1a202c;
  margin-bottom: 2rem;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
`,VS=g.span`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,XS=g.p`
  font-size: var(--text-lg);
  color: #4a5568;
  line-height: 1.6;
  max-width: 60rem;
  margin: 0 auto;
`,WS=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  gap: 3rem;
  margin-bottom: 8rem;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,Nb=g.div`
  position: absolute;
  top: -50%;
  left: -50%;
  right: -50%;
  bottom: -50%;
  background: radial-gradient(circle, ${e=>e.color}20 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
`,KS=g.div`
  background: white;
  border-radius: 2rem;
  padding: 3rem;
  position: relative;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  animation: ${e=>e.index%2===0?Tb:QS} 0.8s ease-out;
  animation-delay: ${e=>e.index*.1}s;
  animation-fill-mode: both;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
    border-color: ${e=>e.color};
    
    ${Nb} {
      opacity: 0.6;
      animation: ${$S} 2s infinite;
    }
  }
`,e9=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`,t9=g.div`
  font-size: 4rem;
  width: 8rem;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
  border-radius: 1.5rem;
  border: 1px solid #e2e8f0;
`,n9=g.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.5rem 1.2rem;
  border-radius: 5rem;
  font-size: var(--text-xs);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,a9=g.div`
  position: relative;
  z-index: 2;
`,r9=g.h3`
  font-size: var(--text-xl);
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 1rem;
`,i9=g.p`
  font-size: var(--text-md);
  color: #4a5568;
  line-height: 1.6;
`,o9=g.div`
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
`,f9=g.div`
  position: relative;
  z-index: 2;
`,s9=g.h3`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
  line-height: 1.2;
`,l9=g.p`
  font-size: var(--text-lg);
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 3rem;
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`,c9=g.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`,u9=g.div`
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
`;g.div`
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
`;const d9=Jt`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,h9=Jt`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`,m9=()=>{const e=[{number:"10,000+",label:"Active Teams",description:"Trust Mendam for daily communication"},{number:"99.9%",label:"Uptime",description:"Reliable service you can count on"},{number:"50M+",label:"Messages",description:"Sent securely every month"},{number:"150+",label:"Countries",description:"Teams worldwide using Mendam"}],a=[{quote:"Mendam transformed how our distributed team communicates. The AI features save us hours every week.",author:"Sarah Chen",role:"Engineering Manager",company:"TechFlow Inc",avatar:"👩‍💻",rating:5},{quote:"Best team chat app we've ever used. The security features give us peace of mind with sensitive data.",author:"Michael Rodriguez",role:"CTO",company:"SecureBank",avatar:"👨‍💼",rating:5},{quote:"The analytics dashboard helps us understand team dynamics better. Highly recommend for growing teams.",author:"Emma Thompson",role:"Head of Operations",company:"GrowthCo",avatar:"👩‍🎯",rating:5}];return s.jsx(g9,{id:"trust",children:s.jsxs(p9,{children:[s.jsxs(y9,{children:[s.jsxs(Hp,{children:[s.jsx(Zp,{children:"Trusted Globally"}),s.jsx(Jp,{children:"Numbers that speak for themselves"}),s.jsx(Fp,{children:"Join thousands of teams who have already discovered the power of seamless communication."})]}),s.jsx(b9,{children:e.map((r,o)=>s.jsxs(w9,{index:o,children:[s.jsx(v9,{children:r.number}),s.jsx(x9,{children:r.label}),s.jsx(M9,{children:r.description}),s.jsx(j9,{children:"📈"})]},o))})]}),s.jsxs(L9,{id:"testimonials",children:[s.jsxs(Hp,{children:[s.jsx(Zp,{children:"Customer Stories"}),s.jsx(Jp,{children:"What our customers are saying"}),s.jsx(Fp,{children:"Don't just take our word for it. Here's what real teams say about their Mendam experience."})]}),s.jsx(S9,{children:a.map((r,o)=>s.jsxs(C9,{index:o,children:[s.jsxs(k9,{children:[s.jsx(E9,{children:'"'}),s.jsx(T9,{children:r.quote}),s.jsx(N9,{children:[...Array(r.rating)].map((l,u)=>s.jsx(I9,{children:"⭐"},u))})]}),s.jsxs(D9,{children:[s.jsx(A9,{children:r.avatar}),s.jsxs(z9,{children:[s.jsx(R9,{children:r.author}),s.jsx(O9,{children:r.role}),s.jsx(B9,{children:r.company})]})]})]},o))})]})]})})},g9=g.section`
  /* padding: 10rem 0; */
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%);
  position: relative;
`,p9=g.div`
  max-width: 140rem;
  margin: 0 auto;
  padding: 0 3rem;
  
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`,y9=g.div`
  margin-bottom: 10rem;
`,Hp=g.div`
  text-align: center;
  margin-bottom: 6rem;
`,Zp=g.div`
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
`,Jp=g.h2`
  font-size: clamp(3rem, 5vw, 4.5rem);
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 2rem;
  line-height: 1.2;
`,Fp=g.p`
  font-size: var(--text-lg);
  color: #4a5568;
  line-height: 1.6;
  max-width: 60rem;
  margin: 0 auto;
`,b9=g.div`
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
`,w9=g.div`
  background: white;
  border-radius: 2rem;
  padding: 3rem 2rem;
  text-align: center;
  position: relative;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  animation: ${d9} 0.8s ease-out;
  animation-delay: ${e=>e.index*.1}s;
  animation-fill-mode: both;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 60px rgba(102, 126, 234, 0.1);
    border-color: #667eea;
  }
`,v9=g.div`
  font-size: clamp(3rem, 5vw, 4rem);
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  line-height: 1;
`,x9=g.div`
  font-size: var(--text-lg);
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
`,M9=g.div`
  font-size: var(--text-sm);
  color: #718096;
  line-height: 1.5;
`,j9=g.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-size: 2rem;
  opacity: 0.3;
`,L9=g.div`
  margin-bottom: 8rem;
`,S9=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  gap: 3rem;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,C9=g.div`
  background: white;
  border-radius: 2rem;
  padding: 3rem;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  animation: ${h9} 3s ease-in-out infinite;
  animation-delay: ${e=>e.index*.5}s;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.1);
    border-color: #667eea;
  }
`,k9=g.div`
  margin-bottom: 2rem;
`,E9=g.div`
  font-size: 4rem;
  color: #667eea;
  line-height: 1;
  margin-bottom: 1rem;
  font-family: serif;
`,T9=g.p`
  font-size: var(--text-lg);
  line-height: 1.6;
  color: #2d3748;
  margin-bottom: 1.5rem;
  font-style: italic;
`,N9=g.div`
  display: flex;
  gap: 0.2rem;
  margin-bottom: 1rem;
`,I9=g.span`
  font-size: 1.4rem;
`,D9=g.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`,A9=g.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  flex-shrink: 0;
`,z9=g.div`
  flex: 1;
`,R9=g.div`
  font-size: var(--text-md);
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.2rem;
`,O9=g.div`
  font-size: var(--text-sm);
  color: #4a5568;
  margin-bottom: 0.2rem;
`,B9=g.div`
  font-size: var(--text-sm);
  color: #718096;
`;g.div`
  text-align: center;
`;g.div`
  margin-bottom: 4rem;
`;g.h3`
  font-size: var(--text-xl);
  color: #4a5568;
  font-weight: 500;
`;g.div`
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
`;g.div`
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
`;g.div`
  font-size: var(--text-lg);
  font-weight: 600;
  color: #2d3748;
`;g.div`
  font-size: var(--text-sm);
  color: #718096;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;const _9=g.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 8rem;

`,U9=()=>s.jsxs(_9,{children:[s.jsx(C5,{}),s.jsx(MS,{}),s.jsx(PS,{}),s.jsx(m9,{}),s.jsx(P5,{})]}),Y9=g.rect`
  fill: #2492c2;
`,G9=g.path`
  fill: #fbfbfb;
`,Q9=()=>s.jsxs("svg",{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",width:43,height:43,children:[s.jsx(Y9,{width:"100",height:"100",rx:"8"}),s.jsx(G9,{d:"M42.59,82.84a17.76,17.76,0,0,1-1.82-.37c-12.57-4-21.06-12.15-24.54-25A34.7,34.7,0,0,1,35.07,17.34a1.74,1.74,0,0,1,.91-.17c.49.09.57.69.17,1.22a15.42,15.42,0,0,0-2.64,5.26,11.3,11.3,0,0,0,.74,8,45.6,45.6,0,0,0,8.21,11.56,39.26,39.26,0,0,1,5.94,7.47c.58,1,1.05,2.16,1.55,3.19.72-1.33,1.41-2.71,2.19-4a43.15,43.15,0,0,1,5.5-6.78c3.06-3.43,6-6.95,8-11.18a11.69,11.69,0,0,0-.41-11.47A2.48,2.48,0,0,1,65,20a1.44,1.44,0,0,1,.31-1.71A1.27,1.27,0,0,1,67,18.25a63.72,63.72,0,0,1,5.64,3.93A33.31,33.31,0,0,1,84.22,41.82c2.12,11.24-.52,21.32-8,30A33.8,33.8,0,0,1,60,82.15a1.84,1.84,0,0,1-.64.17c-.18,0-.47-.09-.53-.23s.05-.4.17-.55a1.88,1.88,0,0,1,.48-.34A41.12,41.12,0,0,0,72.25,68.34,26.46,26.46,0,0,0,75.83,52c-.36-4.17-1.8-8-3.25-11.88l-.35-.91c-.9,1.59-1.71,3.15-2.64,4.63A64.74,64.74,0,0,1,61.26,54c-2.91,3-5.92,6-8,9.72-1,1.77-1.72,3.65-2.6,5.47a1.17,1.17,0,0,1-.68.62c-.18,0-.55-.31-.63-.56-1.7-4.9-4.74-8.92-8.24-12.63-3.1-3.3-6.37-6.45-8.91-10.22-1.44-2.15-2.73-4.41-4.08-6.61l-.31-.47c-.19.35-.34.61-.46.89A37.56,37.56,0,0,0,24.05,53.9a27,27,0,0,0,5.53,17.23A44.24,44.24,0,0,0,41.72,82l1,.63Z"})]}),$9=""+new URL("wardd-logo-DYqvtVQR.jpg",import.meta.url).href,P9=""+new URL("dxc-logo-DJHAVO8h.jpg",import.meta.url).href;function H9({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{fillRule:"evenodd",d:"M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",clipRule:"evenodd"}),m.createElement("path",{d:"M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z"}))}const Z9=m.forwardRef(H9);function J9({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{fillRule:"evenodd",d:"M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z",clipRule:"evenodd"}))}const F9=m.forwardRef(J9);function q9({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{fillRule:"evenodd",d:"M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z",clipRule:"evenodd"}))}const V9=m.forwardRef(q9);function X9({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{fillRule:"evenodd",d:"M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z",clipRule:"evenodd"}))}const Ib=m.forwardRef(X9);function W9({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{d:"M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"}),m.createElement("path",{d:"M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"}))}const K9=m.forwardRef(W9);function eC({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{d:"M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z"}))}const tC=m.forwardRef(eC);function nC({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{fillRule:"evenodd",d:"M11.097 1.515a.75.75 0 0 1 .589.882L10.666 7.5h4.47l1.079-5.397a.75.75 0 1 1 1.47.294L16.665 7.5h3.585a.75.75 0 0 1 0 1.5h-3.885l-1.2 6h3.585a.75.75 0 0 1 0 1.5h-3.885l-1.08 5.397a.75.75 0 1 1-1.47-.294l1.02-5.103h-4.47l-1.08 5.397a.75.75 0 1 1-1.47-.294l1.02-5.103H3.75a.75.75 0 0 1 0-1.5h3.885l1.2-6H5.25a.75.75 0 0 1 0-1.5h3.885l1.08-5.397a.75.75 0 0 1 .882-.588ZM10.365 9l-1.2 6h4.47l1.2-6h-4.47Z",clipRule:"evenodd"}))}const Pl=m.forwardRef(nC);function aC({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{fillRule:"evenodd",d:"M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z",clipRule:"evenodd"}))}const rC=m.forwardRef(aC);function iC({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{fillRule:"evenodd",d:"M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z",clipRule:"evenodd"}))}const j1=m.forwardRef(iC);function oC({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{fillRule:"evenodd",d:"m6.72 5.66 11.62 11.62A8.25 8.25 0 0 0 6.72 5.66Zm10.56 12.68L5.66 6.72a8.25 8.25 0 0 0 11.62 11.62ZM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788Z",clipRule:"evenodd"}))}const fC=m.forwardRef(oC);function sC({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{d:"M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z"}))}const Db=m.forwardRef(sC);function lC({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{fillRule:"evenodd",d:"M18.97 3.659a2.25 2.25 0 0 0-3.182 0l-10.94 10.94a3.75 3.75 0 1 0 5.304 5.303l7.693-7.693a.75.75 0 0 1 1.06 1.06l-7.693 7.693a5.25 5.25 0 1 1-7.424-7.424l10.939-10.94a3.75 3.75 0 1 1 5.303 5.304L9.097 18.835l-.008.008-.007.007-.002.002-.003.002A2.25 2.25 0 0 1 5.91 15.66l7.81-7.81a.75.75 0 0 1 1.061 1.06l-7.81 7.81a.75.75 0 0 0 1.054 1.068L18.97 6.84a2.25 2.25 0 0 0 0-3.182Z",clipRule:"evenodd"}))}const Ab=m.forwardRef(lC);function cC({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{fillRule:"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z",clipRule:"evenodd"}))}const uC=m.forwardRef(cC);function dC({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{fillRule:"evenodd",d:"M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z",clipRule:"evenodd"}))}const hC=m.forwardRef(dC);function mC({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{fillRule:"evenodd",d:"M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z",clipRule:"evenodd"}),m.createElement("path",{d:"M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z"}))}const zb=m.forwardRef(mC);function gC({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{d:"M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z"}))}const L1=m.forwardRef(gC);function pC({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{fillRule:"evenodd",d:"M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z",clipRule:"evenodd"}))}const yC=m.forwardRef(pC);function bC({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{fillRule:"evenodd",d:"M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"}))}const S1=m.forwardRef(bC);function wC({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"}))}const Rb=m.forwardRef(wC);function vC({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"}))}const Ob=m.forwardRef(vC);function xC({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"}))}const MC=m.forwardRef(xC);function jC({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"}))}const LC=m.forwardRef(jC);function SC({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"}),m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"}))}const C1=m.forwardRef(SC);function CC({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"}))}const qp=m.forwardRef(CC);function kC({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 12.75 6 6 9-13.5"}))}const EC=m.forwardRef(kC);function TC({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m8.25 4.5 7.5 7.5-7.5 7.5"}))}const NC=m.forwardRef(TC);function IC({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"}),m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}))}const Ho=m.forwardRef(IC);function DC({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"}),m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}))}const Vp=m.forwardRef(DC);function AC({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"}))}const Bb=m.forwardRef(AC);function zC({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"}))}const Hl=m.forwardRef(zC);function RC({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"}))}const OC=m.forwardRef(RC);function BC({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"}))}const H0=m.forwardRef(BC);function _C({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"}),m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}))}const Z0=m.forwardRef(_C);function UC({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"}))}const _b=m.forwardRef(UC);function YC({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"}))}const GC=m.forwardRef(YC);function QC({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"}))}const $C=m.forwardRef(QC);function PC({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"}))}const HC=m.forwardRef(PC);function ZC({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"}))}const JC=m.forwardRef(ZC);function FC({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"}))}const qC=m.forwardRef(FC);function VC({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"}))}const XC=m.forwardRef(VC);function WC({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"}))}const KC=m.forwardRef(WC);function ek({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"}))}const Ub=m.forwardRef(ek);function tk({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"}))}const Xp=m.forwardRef(tk);function nk({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"}))}const ak=m.forwardRef(nk);function rk({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"}))}const ik=m.forwardRef(rk);function ok({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"}))}const Yb=m.forwardRef(ok);function fk({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"}))}const Gb=m.forwardRef(fk);function sk({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M22 10.5h-6m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z"}))}const Pd=m.forwardRef(sk);function lk({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"}))}const ck=m.forwardRef(lk);function uk({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"}))}const Qb=m.forwardRef(uk);function dk({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"}))}const hk=m.forwardRef(dk);function mk({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"}))}const Zo=m.forwardRef(mk),of=({children:e,title:a,isOpen:r,onClose:o})=>{m.useEffect(()=>{if(!r)return;const u=h=>{h.key==="Escape"&&o()};return document.body.style.overflow="hidden",document.addEventListener("keydown",u),()=>{document.body.style.overflow="auto",document.removeEventListener("keydown",u)}},[r,o]);const l=m.useCallback(u=>{u.target===u.currentTarget&&o()},[o]);return r?s.jsx(gk,{onClick:l,children:s.jsxs(pk,{onClick:u=>u.stopPropagation(),children:[s.jsxs(yk,{children:[s.jsx(bk,{children:a}),s.jsx(vk,{onClick:o,"aria-label":"Close modal",children:s.jsx(Zo,{className:"size-6"})})]}),s.jsx(wk,{children:e})]})}):null},gk=g.div`
  position: fixed;
  inset: 0;
  background-color: #00000039;
  z-index: 10034567890987650;
  padding: 1.5rem;
`,pk=g.div`
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
`,yk=g.div`
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
`,bk=g.h2`
  font-size: var(--text-xl);
  color: ${({theme:e})=>e.text.secondary};
  font-weight: 500;
  margin: 0;
`,wk=g.div`
  flex: 1;
  overflow-y: auto;
  margin: 2rem;
  margin-top: 0;
  @media (max-width: 700px) {
    margin: 1.5rem;
    margin-top: 0;
  }
`,vk=g.button`
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
`,Ct=({variant:e="primary",type:a="button",onClick:r,disabled:o=!1,title:l,link:u,target:h="self",full:b})=>{const p=l,y=s.jsx(xk,{disabled:o,onClick:r,type:a,variant:e,full:b,children:p});return u?s.jsx("a",{target:`_${h}`,href:u,children:y}):y},Wp={primary:{default:"var(--blue)",hover:"var(--dark-blue)"},danger:{default:"#e83333",hover:"#c22626"},cancel:{default:"#1e1e20",hover:"#3c3c41"}},xk=g.button`
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
  background-color: ${({variant:e="primary"})=>Wp[e].default};
  color: var(--light);
  border: 1px solid
    ${({variant:e})=>e==="cancel"?({theme:a})=>a.border.secondary:"transparent"};

  &:hover:not(:disabled) {
    background-color: ${({variant:e="primary"})=>Wp[e].hover};
  }
`,Mk=({title:e,onClose:a,isOpen:r})=>s.jsx(s.Fragment,{children:s.jsx(of,{title:e,onClose:a,isOpen:r,children:s.jsxs(jk,{children:[s.jsxs(Lk,{htmlFor:"upload-Workspace-image",children:[s.jsx($b,{children:s.jsx(C1,{})}),s.jsx(Sk,{children:s.jsx("span",{children:"Add Workspace image (optional)"})}),s.jsx("input",{type:"file",id:"upload-Workspace-image",name:"upload-Workspace-image"})]}),s.jsxs(Ck,{children:[s.jsx(kk,{htmlFor:"Workspace-name",children:"Provide Workspace name *"}),s.jsx(Ek,{placeholder:"Workspace name",type:"text",name:"Workspace-name",id:"Workspace-name"})]}),s.jsx(Tk,{children:s.jsxs(Nk,{children:[s.jsx(Ct,{onClick:a,variant:"cancel",type:"button",title:"Cancel"}),s.jsx(Ct,{variant:"primary",type:"submit",title:"Create"})]})})]})})}),jk=g.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,$b=g.div`
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
`,Lk=g.label`
  width: max-content;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  cursor: pointer;
  input {
    display: none;
  }
  &:hover ${$b} {
    background-color: ${({theme:e})=>e.background.secondary};
  }
`,Sk=g.div`
  span {
    line-height: 1;
    font-size: var(--text-md);
    color: ${({theme:e})=>e.text.secondary};
  }
`,Ck=g.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,kk=g.label`
  font-size: var(--text-md);
  line-height: 1;
  color: ${({theme:e})=>e.text.secondary};
`,Ek=g.input`
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
`,Tk=g.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
`,Nk=g.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`,Pb=({})=>{const e=un(),[a,r]=m.useState(!1),o=()=>{r(!1)};return s.jsx(s.Fragment,{children:s.jsxs(Ik,{children:[s.jsxs(Dk,{children:[s.jsx(Ak,{children:s.jsx(Be,{to:"/app/@me",children:s.jsx(Q9,{})})}),s.jsx(Kp,{}),s.jsxs(zk,{children:[s.jsx(Be,{to:"/app/@me",children:s.jsx(Hd,{selected:e.pathname==="/app/@me",children:s.jsx(Is,{children:s.jsx(V9,{})})})}),s.jsx(Be,{to:"/app/friends",children:s.jsx(Hd,{selected:e.pathname==="/app/friends",children:s.jsx(Is,{children:s.jsx(L1,{})})})}),s.jsx(Be,{to:"/app/groups",children:s.jsx(Hd,{selected:e.pathname==="/app/groups",children:s.jsx(Is,{children:s.jsx(zb,{})})})})]}),s.jsx(Kp,{}),s.jsxs(Ok,{children:[s.jsxs(Rk,{children:[s.jsx(Be,{to:"/app/channel/345678",children:s.jsx(Zd,{children:s.jsx(Jd,{children:s.jsx("img",{src:$9,alt:"wardd logo"})})})}),s.jsx(Be,{to:"/app/channel/345678",children:s.jsx(Zd,{children:s.jsx(Jd,{children:s.jsx("img",{src:"https://docs.imperium.plus/files/media-GRGQG-GFRFXRXG-PQQLL-WGRWM-GFRFGQQPLL-LLPXR-GFRFGQPXQWWM-X-QMGGQFRMWG",alt:"wardd logo"})})})}),s.jsx(Be,{to:"/app/channel/345678",children:s.jsx(Zd,{children:s.jsx(Jd,{children:s.jsx("img",{src:P9,alt:"dxc logo"})})})})]}),s.jsx(Bk,{onClick:()=>r(!0),children:s.jsx(Is,{children:s.jsx(uC,{})})})]})]}),s.jsx(Mk,{title:"Create new workspace",onClose:o,isOpen:a})]})})},Ik=g.aside`
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
`,Dk=g.aside`
  height: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.8rem;
  @media (max-width: 1000px) {
    gap: 1.5rem;
  }
`,Ak=g.div`
  width: max-content;
  svg {
    border-radius: 8px;
  }
`,Kp=g.div`
  width: 100%;
  height: 1.5px;
  background-color: ${({theme:e})=>e.border.primary};
  @media (max-width: 1000px) {
    height: 0.5px;
  }
`,zk=g.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.8rem;
`,Hd=g.div`
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
`,Is=g.a`
  width: 2rem;
  height: 2rem;
`,Rk=g.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.8rem;
`,Ok=g.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.8rem;
`,Bk=g.div`
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
`,Zd=g.div`
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
`,Jd=g.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 0.8rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,kt=({userName:e="Ali Yara",image:a,link:r=!1,status:o="offline",showStatus:l=!1,showStatusCircle:u=!1,showUserName:h=!1,size:b=40,isGroup:p=!1,bg:y})=>{const v=s.jsxs(_k,{children:[s.jsx(Uk,{bg:y,size:b,children:a?s.jsx("img",{src:a,alt:`${e} avatar`,loading:"lazy",width:b,height:b}):p?s.jsx(zb,{}):s.jsx(yC,{})}),u&&s.jsx(Yk,{children:s.jsxs(Qk,{status:o,children:[o==="idle"&&s.jsx($k,{}),o==="offline"&&s.jsx(Pk,{})]})})]});return r?s.jsxs(e4,{children:[s.jsx(Be,{to:"#",children:v}),h&&s.jsxs(t4,{children:[s.jsx("h5",{children:e}),l&&s.jsx("span",{children:o})]})]}):s.jsxs(e4,{children:[v,h&&s.jsxs(t4,{children:[s.jsx("h5",{children:e}),l&&s.jsx("span",{children:o})]})]})},e4=g.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  /* z-index: 1; */
  user-select: none;
`,_k=g.div`
  position: relative;
  width: max-content;
`,Uk=g.div`
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
`,Yk=g.div`
  position: absolute;
  right: 0;
  bottom: -3px;
  width: 1.6rem;
  height: 1.6rem;
  background-color: ${({theme:e})=>e.background.secondary};
  border-radius: 50%;
`,Gk=e=>({idle:"var(--info-500)",online:"var(--success-500)",offline:"var(--primary)"})[e],Qk=g.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-45%, -46%);
  width: 1rem;
  height: 1rem;
  background-color: ${({status:e})=>Gk(e)};
  border-radius: 50%;
`,$k=g.div`
  position: absolute;
  top: -5%;
  left: -3%;
  width: 0.8rem;
  height: 0.8rem;
  background-color: ${({theme:e})=>e.background.secondary};
  border-radius: 50%;
`,Pk=g.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0.5rem;
  height: 0.5rem;
  background-color: ${({theme:e})=>e.text.thirdly};
  border-radius: 50%;
`,t4=g.div`
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
`;function Hk({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{fillRule:"evenodd",d:"M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z",clipRule:"evenodd"}))}const Zk=m.forwardRef(Hk);function Jk({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{fillRule:"evenodd",d:"M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"}))}const n4=m.forwardRef(Jk);function Fk({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{fillRule:"evenodd",d:"M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z",clipRule:"evenodd"}))}const qk=m.forwardRef(Fk);function Vk({title:e,titleId:a,...r},o){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),e?m.createElement("title",{id:a},e):null,m.createElement("path",{d:"M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z"}))}const Xk=m.forwardRef(Vk),Wk=({isOpen:e,shouldAnimate:a,user:r,onLogout:o,onClose:l})=>{const u=m.useRef(null);m.useEffect(()=>{const p=y=>{u.current&&!u.current.contains(y.target)&&l()};return e&&document.addEventListener("mousedown",p),()=>{document.removeEventListener("mousedown",p)}},[e,l]);const h=p=>{switch(p){case"online":return"#43a25a";case"idle":return"#f2c100";case"offline":default:return"#6b7280"}},b=p=>{switch(p){case"online":return"online";case"idle":return"idle";case"offline":default:return"offline"}};return s.jsx(s.Fragment,{children:s.jsxs(Kk,{ref:u,isOpen:e,shouldAnimate:a,children:[s.jsx(e7,{children:s.jsxs(t7,{children:[s.jsx(n7,{children:s.jsx(a7,{children:r.avatar?s.jsx("img",{src:r.avatar,alt:r.fullName}):s.jsx(r7,{children:r.fullName.charAt(0).toUpperCase()})})}),s.jsxs(i7,{children:[s.jsx("h4",{children:r.fullName}),s.jsxs("span",{children:["@",r.username]})]})]})}),s.jsx(o7,{children:s.jsxs(f7,{children:[s.jsxs(Fd,{as:Be,to:"/app/settings/profile",children:[s.jsx(qd,{children:s.jsx(nl,{children:"Edit profile"})}),s.jsx(r4,{children:s.jsx(i4,{children:s.jsx(n4,{})})})]}),s.jsx(a4,{}),s.jsxs(Fd,{children:[s.jsxs(qd,{children:[s.jsx(Hb,{children:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12px",height:"12px",viewBox:"0 0 24 24",fill:"none",children:s.jsx("circle",{cx:"12",cy:"12",r:"10",fill:h(r.status)})})}),s.jsx(nl,{children:b(r.status)})]}),s.jsx(r4,{children:s.jsx(i4,{children:s.jsx(n4,{})})})]}),s.jsx(a4,{}),s.jsx(Fd,{onClick:o,isLogout:!0,children:s.jsx(qd,{children:s.jsx(nl,{children:"Sign out"})})})]})})]})})},Kk=g.div`
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
`,e7=g.div`
  width: 100%;
  height: 8rem;
  background: var(--blue);
  position: relative;
  margin-bottom: 11rem;
`,t7=g.div`
  position: absolute;
  bottom: -9rem;
  left: 2rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;
`,n7=g.div`
  width: 9rem;
  height: 9rem;
  border-radius: 100%;
  background-color: ${({theme:e})=>e.background.secondary};
  padding: 0.8rem;
  position: relative;
`,a7=g.div`
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
`,r7=g.div`
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
`,i7=g.div`
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
`,o7=g.div`
  width: 100%;
  padding: 1rem;
  user-select: none;
`,f7=g.div`
  width: 100%;
  padding: 0.7rem;
  border-radius: 0.6rem;
  background-color: ${({theme:e})=>e.background.thirdly};
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`,Fd=g.div`
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
      ${nl} {
        color: #ff99a4;
      }
      ${Hb} {
        color: #ff99a4;
      }
    `}
  }
`,nl=g.div`
  font-size: var(--text-md);
  color: ${({theme:e})=>e.text.thirdly};
  line-height: 1;
`,Hb=g.div`
  color: ${({theme:e})=>e.text.thirdly};
  display: flex;
  align-items: center;
  height: 100%;
  padding-top: 1px;
  
  svg {
    width: 1.4rem;
    height: 1.4rem;
  }
`,a4=g.div`
  width: 100%;
  height: 1px;
  background-color: ${({theme:e})=>e.border.secondary};
  opacity: 0.3;
`,qd=g.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,r4=g.div`
  width: max-content;
`,i4=g.div`
  svg {
    width: 1.6rem;
    color: ${({theme:e})=>e.text.placeholder};
  }
`,An=Object.create(null);An.open="0";An.close="1";An.ping="2";An.pong="3";An.message="4";An.upgrade="5";An.noop="6";const al=Object.create(null);Object.keys(An).forEach(e=>{al[An[e]]=e});const J0={type:"error",data:"parser error"},Zb=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Jb=typeof ArrayBuffer=="function",Fb=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e&&e.buffer instanceof ArrayBuffer,k1=({type:e,data:a},r,o)=>Zb&&a instanceof Blob?r?o(a):o4(a,o):Jb&&(a instanceof ArrayBuffer||Fb(a))?r?o(a):o4(new Blob([a]),o):o(An[e]+(a||"")),o4=(e,a)=>{const r=new FileReader;return r.onload=function(){const o=r.result.split(",")[1];a("b"+(o||""))},r.readAsDataURL(e)};function f4(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}let Vd;function s7(e,a){if(Zb&&e.data instanceof Blob)return e.data.arrayBuffer().then(f4).then(a);if(Jb&&(e.data instanceof ArrayBuffer||Fb(e.data)))return a(f4(e.data));k1(e,!1,r=>{Vd||(Vd=new TextEncoder),a(Vd.encode(r))})}const s4="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Bo=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let e=0;e<s4.length;e++)Bo[s4.charCodeAt(e)]=e;const l7=e=>{let a=e.length*.75,r=e.length,o,l=0,u,h,b,p;e[e.length-1]==="="&&(a--,e[e.length-2]==="="&&a--);const y=new ArrayBuffer(a),v=new Uint8Array(y);for(o=0;o<r;o+=4)u=Bo[e.charCodeAt(o)],h=Bo[e.charCodeAt(o+1)],b=Bo[e.charCodeAt(o+2)],p=Bo[e.charCodeAt(o+3)],v[l++]=u<<2|h>>4,v[l++]=(h&15)<<4|b>>2,v[l++]=(b&3)<<6|p&63;return y},c7=typeof ArrayBuffer=="function",E1=(e,a)=>{if(typeof e!="string")return{type:"message",data:qb(e,a)};const r=e.charAt(0);return r==="b"?{type:"message",data:u7(e.substring(1),a)}:al[r]?e.length>1?{type:al[r],data:e.substring(1)}:{type:al[r]}:J0},u7=(e,a)=>{if(c7){const r=l7(e);return qb(r,a)}else return{base64:!0,data:e}},qb=(e,a)=>{switch(a){case"blob":return e instanceof Blob?e:new Blob([e]);case"arraybuffer":default:return e instanceof ArrayBuffer?e:e.buffer}},Vb="",d7=(e,a)=>{const r=e.length,o=new Array(r);let l=0;e.forEach((u,h)=>{k1(u,!1,b=>{o[h]=b,++l===r&&a(o.join(Vb))})})},h7=(e,a)=>{const r=e.split(Vb),o=[];for(let l=0;l<r.length;l++){const u=E1(r[l],a);if(o.push(u),u.type==="error")break}return o};function m7(){return new TransformStream({transform(e,a){s7(e,r=>{const o=r.length;let l;if(o<126)l=new Uint8Array(1),new DataView(l.buffer).setUint8(0,o);else if(o<65536){l=new Uint8Array(3);const u=new DataView(l.buffer);u.setUint8(0,126),u.setUint16(1,o)}else{l=new Uint8Array(9);const u=new DataView(l.buffer);u.setUint8(0,127),u.setBigUint64(1,BigInt(o))}e.data&&typeof e.data!="string"&&(l[0]|=128),a.enqueue(l),a.enqueue(r)})}})}let Xd;function Ds(e){return e.reduce((a,r)=>a+r.length,0)}function As(e,a){if(e[0].length===a)return e.shift();const r=new Uint8Array(a);let o=0;for(let l=0;l<a;l++)r[l]=e[0][o++],o===e[0].length&&(e.shift(),o=0);return e.length&&o<e[0].length&&(e[0]=e[0].slice(o)),r}function g7(e,a){Xd||(Xd=new TextDecoder);const r=[];let o=0,l=-1,u=!1;return new TransformStream({transform(h,b){for(r.push(h);;){if(o===0){if(Ds(r)<1)break;const p=As(r,1);u=(p[0]&128)===128,l=p[0]&127,l<126?o=3:l===126?o=1:o=2}else if(o===1){if(Ds(r)<2)break;const p=As(r,2);l=new DataView(p.buffer,p.byteOffset,p.length).getUint16(0),o=3}else if(o===2){if(Ds(r)<8)break;const p=As(r,8),y=new DataView(p.buffer,p.byteOffset,p.length),v=y.getUint32(0);if(v>Math.pow(2,21)-1){b.enqueue(J0);break}l=v*Math.pow(2,32)+y.getUint32(4),o=3}else{if(Ds(r)<l)break;const p=As(r,l);b.enqueue(E1(u?p:Xd.decode(p),a)),o=0}if(l===0||l>e){b.enqueue(J0);break}}}})}const Xb=4;function at(e){if(e)return p7(e)}function p7(e){for(var a in at.prototype)e[a]=at.prototype[a];return e}at.prototype.on=at.prototype.addEventListener=function(e,a){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(a),this};at.prototype.once=function(e,a){function r(){this.off(e,r),a.apply(this,arguments)}return r.fn=a,this.on(e,r),this};at.prototype.off=at.prototype.removeListener=at.prototype.removeAllListeners=at.prototype.removeEventListener=function(e,a){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var r=this._callbacks["$"+e];if(!r)return this;if(arguments.length==1)return delete this._callbacks["$"+e],this;for(var o,l=0;l<r.length;l++)if(o=r[l],o===a||o.fn===a){r.splice(l,1);break}return r.length===0&&delete this._callbacks["$"+e],this};at.prototype.emit=function(e){this._callbacks=this._callbacks||{};for(var a=new Array(arguments.length-1),r=this._callbacks["$"+e],o=1;o<arguments.length;o++)a[o-1]=arguments[o];if(r){r=r.slice(0);for(var o=0,l=r.length;o<l;++o)r[o].apply(this,a)}return this};at.prototype.emitReserved=at.prototype.emit;at.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]};at.prototype.hasListeners=function(e){return!!this.listeners(e).length};const Zl=typeof Promise=="function"&&typeof Promise.resolve=="function"?a=>Promise.resolve().then(a):(a,r)=>r(a,0),fn=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),y7="arraybuffer";function Wb(e,...a){return a.reduce((r,o)=>(e.hasOwnProperty(o)&&(r[o]=e[o]),r),{})}const b7=fn.setTimeout,w7=fn.clearTimeout;function Jl(e,a){a.useNativeTimers?(e.setTimeoutFn=b7.bind(fn),e.clearTimeoutFn=w7.bind(fn)):(e.setTimeoutFn=fn.setTimeout.bind(fn),e.clearTimeoutFn=fn.clearTimeout.bind(fn))}const v7=1.33;function x7(e){return typeof e=="string"?M7(e):Math.ceil((e.byteLength||e.size)*v7)}function M7(e){let a=0,r=0;for(let o=0,l=e.length;o<l;o++)a=e.charCodeAt(o),a<128?r+=1:a<2048?r+=2:a<55296||a>=57344?r+=3:(o++,r+=4);return r}function Kb(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function j7(e){let a="";for(let r in e)e.hasOwnProperty(r)&&(a.length&&(a+="&"),a+=encodeURIComponent(r)+"="+encodeURIComponent(e[r]));return a}function L7(e){let a={},r=e.split("&");for(let o=0,l=r.length;o<l;o++){let u=r[o].split("=");a[decodeURIComponent(u[0])]=decodeURIComponent(u[1])}return a}class S7 extends Error{constructor(a,r,o){super(a),this.description=r,this.context=o,this.type="TransportError"}}class T1 extends at{constructor(a){super(),this.writable=!1,Jl(this,a),this.opts=a,this.query=a.query,this.socket=a.socket,this.supportsBinary=!a.forceBase64}onError(a,r,o){return super.emitReserved("error",new S7(a,r,o)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(a){this.readyState==="open"&&this.write(a)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(a){const r=E1(a,this.socket.binaryType);this.onPacket(r)}onPacket(a){super.emitReserved("packet",a)}onClose(a){this.readyState="closed",super.emitReserved("close",a)}pause(a){}createUri(a,r={}){return a+"://"+this._hostname()+this._port()+this.opts.path+this._query(r)}_hostname(){const a=this.opts.hostname;return a.indexOf(":")===-1?a:"["+a+"]"}_port(){return this.opts.port&&(this.opts.secure&&+(this.opts.port!==443)||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(a){const r=j7(a);return r.length?"?"+r:""}}class C7 extends T1{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(a){this.readyState="pausing";const r=()=>{this.readyState="paused",a()};if(this._polling||!this.writable){let o=0;this._polling&&(o++,this.once("pollComplete",function(){--o||r()})),this.writable||(o++,this.once("drain",function(){--o||r()}))}else r()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(a){const r=o=>{if(this.readyState==="opening"&&o.type==="open"&&this.onOpen(),o.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(o)};h7(a,this.socket.binaryType).forEach(r),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const a=()=>{this.write([{type:"close"}])};this.readyState==="open"?a():this.once("open",a)}write(a){this.writable=!1,d7(a,r=>{this.doWrite(r,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const a=this.opts.secure?"https":"http",r=this.query||{};return this.opts.timestampRequests!==!1&&(r[this.opts.timestampParam]=Kb()),!this.supportsBinary&&!r.sid&&(r.b64=1),this.createUri(a,r)}}let e3=!1;try{e3=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const k7=e3;function E7(){}class T7 extends C7{constructor(a){if(super(a),typeof location<"u"){const r=location.protocol==="https:";let o=location.port;o||(o=r?"443":"80"),this.xd=typeof location<"u"&&a.hostname!==location.hostname||o!==a.port}}doWrite(a,r){const o=this.request({method:"POST",data:a});o.on("success",r),o.on("error",(l,u)=>{this.onError("xhr post error",l,u)})}doPoll(){const a=this.request();a.on("data",this.onData.bind(this)),a.on("error",(r,o)=>{this.onError("xhr poll error",r,o)}),this.pollXhr=a}}let ai=class rl extends at{constructor(a,r,o){super(),this.createRequest=a,Jl(this,o),this._opts=o,this._method=o.method||"GET",this._uri=r,this._data=o.data!==void 0?o.data:null,this._create()}_create(){var a;const r=Wb(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");r.xdomain=!!this._opts.xd;const o=this._xhr=this.createRequest(r);try{o.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){o.setDisableHeaderCheck&&o.setDisableHeaderCheck(!0);for(let l in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(l)&&o.setRequestHeader(l,this._opts.extraHeaders[l])}}catch{}if(this._method==="POST")try{o.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{o.setRequestHeader("Accept","*/*")}catch{}(a=this._opts.cookieJar)===null||a===void 0||a.addCookies(o),"withCredentials"in o&&(o.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(o.timeout=this._opts.requestTimeout),o.onreadystatechange=()=>{var l;o.readyState===3&&((l=this._opts.cookieJar)===null||l===void 0||l.parseCookies(o.getResponseHeader("set-cookie"))),o.readyState===4&&(o.status===200||o.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof o.status=="number"?o.status:0)},0))},o.send(this._data)}catch(l){this.setTimeoutFn(()=>{this._onError(l)},0);return}typeof document<"u"&&(this._index=rl.requestsCount++,rl.requests[this._index]=this)}_onError(a){this.emitReserved("error",a,this._xhr),this._cleanup(!0)}_cleanup(a){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=E7,a)try{this._xhr.abort()}catch{}typeof document<"u"&&delete rl.requests[this._index],this._xhr=null}}_onLoad(){const a=this._xhr.responseText;a!==null&&(this.emitReserved("data",a),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}};ai.requestsCount=0;ai.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",l4);else if(typeof addEventListener=="function"){const e="onpagehide"in fn?"pagehide":"unload";addEventListener(e,l4,!1)}}function l4(){for(let e in ai.requests)ai.requests.hasOwnProperty(e)&&ai.requests[e].abort()}const N7=function(){const e=t3({xdomain:!1});return e&&e.responseType!==null}();class I7 extends T7{constructor(a){super(a);const r=a&&a.forceBase64;this.supportsBinary=N7&&!r}request(a={}){return Object.assign(a,{xd:this.xd},this.opts),new ai(t3,this.uri(),a)}}function t3(e){const a=e.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!a||k7))return new XMLHttpRequest}catch{}if(!a)try{return new fn[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const n3=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class D7 extends T1{get name(){return"websocket"}doOpen(){const a=this.uri(),r=this.opts.protocols,o=n3?{}:Wb(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(o.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(a,r,o)}catch(l){return this.emitReserved("error",l)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=a=>this.onClose({description:"websocket connection closed",context:a}),this.ws.onmessage=a=>this.onData(a.data),this.ws.onerror=a=>this.onError("websocket error",a)}write(a){this.writable=!1;for(let r=0;r<a.length;r++){const o=a[r],l=r===a.length-1;k1(o,this.supportsBinary,u=>{try{this.doWrite(o,u)}catch{}l&&Zl(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const a=this.opts.secure?"wss":"ws",r=this.query||{};return this.opts.timestampRequests&&(r[this.opts.timestampParam]=Kb()),this.supportsBinary||(r.b64=1),this.createUri(a,r)}}const Wd=fn.WebSocket||fn.MozWebSocket;class A7 extends D7{createSocket(a,r,o){return n3?new Wd(a,r,o):r?new Wd(a,r):new Wd(a)}doWrite(a,r){this.ws.send(r)}}class z7 extends T1{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(a){return this.emitReserved("error",a)}this._transport.closed.then(()=>{this.onClose()}).catch(a=>{this.onError("webtransport error",a)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(a=>{const r=g7(Number.MAX_SAFE_INTEGER,this.socket.binaryType),o=a.readable.pipeThrough(r).getReader(),l=m7();l.readable.pipeTo(a.writable),this._writer=l.writable.getWriter();const u=()=>{o.read().then(({done:b,value:p})=>{b||(this.onPacket(p),u())}).catch(b=>{})};u();const h={type:"open"};this.query.sid&&(h.data=`{"sid":"${this.query.sid}"}`),this._writer.write(h).then(()=>this.onOpen())})})}write(a){this.writable=!1;for(let r=0;r<a.length;r++){const o=a[r],l=r===a.length-1;this._writer.write(o).then(()=>{l&&Zl(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var a;(a=this._transport)===null||a===void 0||a.close()}}const R7={websocket:A7,webtransport:z7,polling:I7},O7=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,B7=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function F0(e){if(e.length>8e3)throw"URI too long";const a=e,r=e.indexOf("["),o=e.indexOf("]");r!=-1&&o!=-1&&(e=e.substring(0,r)+e.substring(r,o).replace(/:/g,";")+e.substring(o,e.length));let l=O7.exec(e||""),u={},h=14;for(;h--;)u[B7[h]]=l[h]||"";return r!=-1&&o!=-1&&(u.source=a,u.host=u.host.substring(1,u.host.length-1).replace(/;/g,":"),u.authority=u.authority.replace("[","").replace("]","").replace(/;/g,":"),u.ipv6uri=!0),u.pathNames=_7(u,u.path),u.queryKey=U7(u,u.query),u}function _7(e,a){const r=/\/{2,9}/g,o=a.replace(r,"/").split("/");return(a.slice(0,1)=="/"||a.length===0)&&o.splice(0,1),a.slice(-1)=="/"&&o.splice(o.length-1,1),o}function U7(e,a){const r={};return a.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(o,l,u){l&&(r[l]=u)}),r}const q0=typeof addEventListener=="function"&&typeof removeEventListener=="function",il=[];q0&&addEventListener("offline",()=>{il.forEach(e=>e())},!1);class Ea extends at{constructor(a,r){if(super(),this.binaryType=y7,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,a&&typeof a=="object"&&(r=a,a=null),a){const o=F0(a);r.hostname=o.host,r.secure=o.protocol==="https"||o.protocol==="wss",r.port=o.port,o.query&&(r.query=o.query)}else r.host&&(r.hostname=F0(r.host).host);Jl(this,r),this.secure=r.secure!=null?r.secure:typeof location<"u"&&location.protocol==="https:",r.hostname&&!r.port&&(r.port=this.secure?"443":"80"),this.hostname=r.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=r.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},r.transports.forEach(o=>{const l=o.prototype.name;this.transports.push(l),this._transportsByName[l]=o}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},r),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=L7(this.opts.query)),q0&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},il.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(a){const r=Object.assign({},this.opts.query);r.EIO=Xb,r.transport=a,this.id&&(r.sid=this.id);const o=Object.assign({},this.opts,{query:r,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[a]);return new this._transportsByName[a](o)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const a=this.opts.rememberUpgrade&&Ea.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const r=this.createTransport(a);r.open(),this.setTransport(r)}setTransport(a){this.transport&&this.transport.removeAllListeners(),this.transport=a,a.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",r=>this._onClose("transport close",r))}onOpen(){this.readyState="open",Ea.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(a){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",a),this.emitReserved("heartbeat"),a.type){case"open":this.onHandshake(JSON.parse(a.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const r=new Error("server error");r.code=a.data,this._onError(r);break;case"message":this.emitReserved("data",a.data),this.emitReserved("message",a.data);break}}onHandshake(a){this.emitReserved("handshake",a),this.id=a.sid,this.transport.query.sid=a.sid,this._pingInterval=a.pingInterval,this._pingTimeout=a.pingTimeout,this._maxPayload=a.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const a=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+a,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},a),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const a=this._getWritablePackets();this.transport.send(a),this._prevBufferLen=a.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let r=1;for(let o=0;o<this.writeBuffer.length;o++){const l=this.writeBuffer[o].data;if(l&&(r+=x7(l)),o>0&&r>this._maxPayload)return this.writeBuffer.slice(0,o);r+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const a=Date.now()>this._pingTimeoutTime;return a&&(this._pingTimeoutTime=0,Zl(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),a}write(a,r,o){return this._sendPacket("message",a,r,o),this}send(a,r,o){return this._sendPacket("message",a,r,o),this}_sendPacket(a,r,o,l){if(typeof r=="function"&&(l=r,r=void 0),typeof o=="function"&&(l=o,o=null),this.readyState==="closing"||this.readyState==="closed")return;o=o||{},o.compress=o.compress!==!1;const u={type:a,data:r,options:o};this.emitReserved("packetCreate",u),this.writeBuffer.push(u),l&&this.once("flush",l),this.flush()}close(){const a=()=>{this._onClose("forced close"),this.transport.close()},r=()=>{this.off("upgrade",r),this.off("upgradeError",r),a()},o=()=>{this.once("upgrade",r),this.once("upgradeError",r)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?o():a()}):this.upgrading?o():a()),this}_onError(a){if(Ea.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",a),this._onClose("transport error",a)}_onClose(a,r){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),q0&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const o=il.indexOf(this._offlineEventListener);o!==-1&&il.splice(o,1)}this.readyState="closed",this.id=null,this.emitReserved("close",a,r),this.writeBuffer=[],this._prevBufferLen=0}}}Ea.protocol=Xb;class Y7 extends Ea{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let a=0;a<this._upgrades.length;a++)this._probe(this._upgrades[a])}_probe(a){let r=this.createTransport(a),o=!1;Ea.priorWebsocketSuccess=!1;const l=()=>{o||(r.send([{type:"ping",data:"probe"}]),r.once("packet",x=>{if(!o)if(x.type==="pong"&&x.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",r),!r)return;Ea.priorWebsocketSuccess=r.name==="websocket",this.transport.pause(()=>{o||this.readyState!=="closed"&&(v(),this.setTransport(r),r.send([{type:"upgrade"}]),this.emitReserved("upgrade",r),r=null,this.upgrading=!1,this.flush())})}else{const j=new Error("probe error");j.transport=r.name,this.emitReserved("upgradeError",j)}}))};function u(){o||(o=!0,v(),r.close(),r=null)}const h=x=>{const j=new Error("probe error: "+x);j.transport=r.name,u(),this.emitReserved("upgradeError",j)};function b(){h("transport closed")}function p(){h("socket closed")}function y(x){r&&x.name!==r.name&&u()}const v=()=>{r.removeListener("open",l),r.removeListener("error",h),r.removeListener("close",b),this.off("close",p),this.off("upgrading",y)};r.once("open",l),r.once("error",h),r.once("close",b),this.once("close",p),this.once("upgrading",y),this._upgrades.indexOf("webtransport")!==-1&&a!=="webtransport"?this.setTimeoutFn(()=>{o||r.open()},200):r.open()}onHandshake(a){this._upgrades=this._filterUpgrades(a.upgrades),super.onHandshake(a)}_filterUpgrades(a){const r=[];for(let o=0;o<a.length;o++)~this.transports.indexOf(a[o])&&r.push(a[o]);return r}}let G7=class extends Y7{constructor(a,r={}){const o=typeof a=="object"?a:r;(!o.transports||o.transports&&typeof o.transports[0]=="string")&&(o.transports=(o.transports||["polling","websocket","webtransport"]).map(l=>R7[l]).filter(l=>!!l)),super(a,o)}};function Q7(e,a="",r){let o=e;r=r||typeof location<"u"&&location,e==null&&(e=r.protocol+"//"+r.host),typeof e=="string"&&(e.charAt(0)==="/"&&(e.charAt(1)==="/"?e=r.protocol+e:e=r.host+e),/^(https?|wss?):\/\//.test(e)||(typeof r<"u"?e=r.protocol+"//"+e:e="https://"+e),o=F0(e)),o.port||(/^(http|ws)$/.test(o.protocol)?o.port="80":/^(http|ws)s$/.test(o.protocol)&&(o.port="443")),o.path=o.path||"/";const u=o.host.indexOf(":")!==-1?"["+o.host+"]":o.host;return o.id=o.protocol+"://"+u+":"+o.port+a,o.href=o.protocol+"://"+u+(r&&r.port===o.port?"":":"+o.port),o}const $7=typeof ArrayBuffer=="function",P7=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e.buffer instanceof ArrayBuffer,a3=Object.prototype.toString,H7=typeof Blob=="function"||typeof Blob<"u"&&a3.call(Blob)==="[object BlobConstructor]",Z7=typeof File=="function"||typeof File<"u"&&a3.call(File)==="[object FileConstructor]";function N1(e){return $7&&(e instanceof ArrayBuffer||P7(e))||H7&&e instanceof Blob||Z7&&e instanceof File}function ol(e,a){if(!e||typeof e!="object")return!1;if(Array.isArray(e)){for(let r=0,o=e.length;r<o;r++)if(ol(e[r]))return!0;return!1}if(N1(e))return!0;if(e.toJSON&&typeof e.toJSON=="function"&&arguments.length===1)return ol(e.toJSON(),!0);for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&ol(e[r]))return!0;return!1}function J7(e){const a=[],r=e.data,o=e;return o.data=V0(r,a),o.attachments=a.length,{packet:o,buffers:a}}function V0(e,a){if(!e)return e;if(N1(e)){const r={_placeholder:!0,num:a.length};return a.push(e),r}else if(Array.isArray(e)){const r=new Array(e.length);for(let o=0;o<e.length;o++)r[o]=V0(e[o],a);return r}else if(typeof e=="object"&&!(e instanceof Date)){const r={};for(const o in e)Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=V0(e[o],a));return r}return e}function F7(e,a){return e.data=X0(e.data,a),delete e.attachments,e}function X0(e,a){if(!e)return e;if(e&&e._placeholder===!0){if(typeof e.num=="number"&&e.num>=0&&e.num<a.length)return a[e.num];throw new Error("illegal attachments")}else if(Array.isArray(e))for(let r=0;r<e.length;r++)e[r]=X0(e[r],a);else if(typeof e=="object")for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(e[r]=X0(e[r],a));return e}const q7=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],V7=5;var je;(function(e){e[e.CONNECT=0]="CONNECT",e[e.DISCONNECT=1]="DISCONNECT",e[e.EVENT=2]="EVENT",e[e.ACK=3]="ACK",e[e.CONNECT_ERROR=4]="CONNECT_ERROR",e[e.BINARY_EVENT=5]="BINARY_EVENT",e[e.BINARY_ACK=6]="BINARY_ACK"})(je||(je={}));class X7{constructor(a){this.replacer=a}encode(a){return(a.type===je.EVENT||a.type===je.ACK)&&ol(a)?this.encodeAsBinary({type:a.type===je.EVENT?je.BINARY_EVENT:je.BINARY_ACK,nsp:a.nsp,data:a.data,id:a.id}):[this.encodeAsString(a)]}encodeAsString(a){let r=""+a.type;return(a.type===je.BINARY_EVENT||a.type===je.BINARY_ACK)&&(r+=a.attachments+"-"),a.nsp&&a.nsp!=="/"&&(r+=a.nsp+","),a.id!=null&&(r+=a.id),a.data!=null&&(r+=JSON.stringify(a.data,this.replacer)),r}encodeAsBinary(a){const r=J7(a),o=this.encodeAsString(r.packet),l=r.buffers;return l.unshift(o),l}}function c4(e){return Object.prototype.toString.call(e)==="[object Object]"}class I1 extends at{constructor(a){super(),this.reviver=a}add(a){let r;if(typeof a=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");r=this.decodeString(a);const o=r.type===je.BINARY_EVENT;o||r.type===je.BINARY_ACK?(r.type=o?je.EVENT:je.ACK,this.reconstructor=new W7(r),r.attachments===0&&super.emitReserved("decoded",r)):super.emitReserved("decoded",r)}else if(N1(a)||a.base64)if(this.reconstructor)r=this.reconstructor.takeBinaryData(a),r&&(this.reconstructor=null,super.emitReserved("decoded",r));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+a)}decodeString(a){let r=0;const o={type:Number(a.charAt(0))};if(je[o.type]===void 0)throw new Error("unknown packet type "+o.type);if(o.type===je.BINARY_EVENT||o.type===je.BINARY_ACK){const u=r+1;for(;a.charAt(++r)!=="-"&&r!=a.length;);const h=a.substring(u,r);if(h!=Number(h)||a.charAt(r)!=="-")throw new Error("Illegal attachments");o.attachments=Number(h)}if(a.charAt(r+1)==="/"){const u=r+1;for(;++r&&!(a.charAt(r)===","||r===a.length););o.nsp=a.substring(u,r)}else o.nsp="/";const l=a.charAt(r+1);if(l!==""&&Number(l)==l){const u=r+1;for(;++r;){const h=a.charAt(r);if(h==null||Number(h)!=h){--r;break}if(r===a.length)break}o.id=Number(a.substring(u,r+1))}if(a.charAt(++r)){const u=this.tryParse(a.substr(r));if(I1.isPayloadValid(o.type,u))o.data=u;else throw new Error("invalid payload")}return o}tryParse(a){try{return JSON.parse(a,this.reviver)}catch{return!1}}static isPayloadValid(a,r){switch(a){case je.CONNECT:return c4(r);case je.DISCONNECT:return r===void 0;case je.CONNECT_ERROR:return typeof r=="string"||c4(r);case je.EVENT:case je.BINARY_EVENT:return Array.isArray(r)&&(typeof r[0]=="number"||typeof r[0]=="string"&&q7.indexOf(r[0])===-1);case je.ACK:case je.BINARY_ACK:return Array.isArray(r)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class W7{constructor(a){this.packet=a,this.buffers=[],this.reconPack=a}takeBinaryData(a){if(this.buffers.push(a),this.buffers.length===this.reconPack.attachments){const r=F7(this.reconPack,this.buffers);return this.finishedReconstruction(),r}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const K7=Object.freeze(Object.defineProperty({__proto__:null,Decoder:I1,Encoder:X7,get PacketType(){return je},protocol:V7},Symbol.toStringTag,{value:"Module"}));function yn(e,a,r){return e.on(a,r),function(){e.off(a,r)}}const e8=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class r3 extends at{constructor(a,r,o){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=a,this.nsp=r,o&&o.auth&&(this.auth=o.auth),this._opts=Object.assign({},o),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const a=this.io;this.subs=[yn(a,"open",this.onopen.bind(this)),yn(a,"packet",this.onpacket.bind(this)),yn(a,"error",this.onerror.bind(this)),yn(a,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...a){return a.unshift("message"),this.emit.apply(this,a),this}emit(a,...r){var o,l,u;if(e8.hasOwnProperty(a))throw new Error('"'+a.toString()+'" is a reserved event name');if(r.unshift(a),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(r),this;const h={type:je.EVENT,data:r};if(h.options={},h.options.compress=this.flags.compress!==!1,typeof r[r.length-1]=="function"){const v=this.ids++,x=r.pop();this._registerAckCallback(v,x),h.id=v}const b=(l=(o=this.io.engine)===null||o===void 0?void 0:o.transport)===null||l===void 0?void 0:l.writable,p=this.connected&&!(!((u=this.io.engine)===null||u===void 0)&&u._hasPingExpired());return this.flags.volatile&&!b||(p?(this.notifyOutgoingListeners(h),this.packet(h)):this.sendBuffer.push(h)),this.flags={},this}_registerAckCallback(a,r){var o;const l=(o=this.flags.timeout)!==null&&o!==void 0?o:this._opts.ackTimeout;if(l===void 0){this.acks[a]=r;return}const u=this.io.setTimeoutFn(()=>{delete this.acks[a];for(let b=0;b<this.sendBuffer.length;b++)this.sendBuffer[b].id===a&&this.sendBuffer.splice(b,1);r.call(this,new Error("operation has timed out"))},l),h=(...b)=>{this.io.clearTimeoutFn(u),r.apply(this,b)};h.withError=!0,this.acks[a]=h}emitWithAck(a,...r){return new Promise((o,l)=>{const u=(h,b)=>h?l(h):o(b);u.withError=!0,r.push(u),this.emit(a,...r)})}_addToQueue(a){let r;typeof a[a.length-1]=="function"&&(r=a.pop());const o={id:this._queueSeq++,tryCount:0,pending:!1,args:a,flags:Object.assign({fromQueue:!0},this.flags)};a.push((l,...u)=>o!==this._queue[0]?void 0:(l!==null?o.tryCount>this._opts.retries&&(this._queue.shift(),r&&r(l)):(this._queue.shift(),r&&r(null,...u)),o.pending=!1,this._drainQueue())),this._queue.push(o),this._drainQueue()}_drainQueue(a=!1){if(!this.connected||this._queue.length===0)return;const r=this._queue[0];r.pending&&!a||(r.pending=!0,r.tryCount++,this.flags=r.flags,this.emit.apply(this,r.args))}packet(a){a.nsp=this.nsp,this.io._packet(a)}onopen(){typeof this.auth=="function"?this.auth(a=>{this._sendConnectPacket(a)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(a){this.packet({type:je.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},a):a})}onerror(a){this.connected||this.emitReserved("connect_error",a)}onclose(a,r){this.connected=!1,delete this.id,this.emitReserved("disconnect",a,r),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(a=>{if(!this.sendBuffer.some(o=>String(o.id)===a)){const o=this.acks[a];delete this.acks[a],o.withError&&o.call(this,new Error("socket has been disconnected"))}})}onpacket(a){if(a.nsp===this.nsp)switch(a.type){case je.CONNECT:a.data&&a.data.sid?this.onconnect(a.data.sid,a.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case je.EVENT:case je.BINARY_EVENT:this.onevent(a);break;case je.ACK:case je.BINARY_ACK:this.onack(a);break;case je.DISCONNECT:this.ondisconnect();break;case je.CONNECT_ERROR:this.destroy();const o=new Error(a.data.message);o.data=a.data.data,this.emitReserved("connect_error",o);break}}onevent(a){const r=a.data||[];a.id!=null&&r.push(this.ack(a.id)),this.connected?this.emitEvent(r):this.receiveBuffer.push(Object.freeze(r))}emitEvent(a){if(this._anyListeners&&this._anyListeners.length){const r=this._anyListeners.slice();for(const o of r)o.apply(this,a)}super.emit.apply(this,a),this._pid&&a.length&&typeof a[a.length-1]=="string"&&(this._lastOffset=a[a.length-1])}ack(a){const r=this;let o=!1;return function(...l){o||(o=!0,r.packet({type:je.ACK,id:a,data:l}))}}onack(a){const r=this.acks[a.id];typeof r=="function"&&(delete this.acks[a.id],r.withError&&a.data.unshift(null),r.apply(this,a.data))}onconnect(a,r){this.id=a,this.recovered=r&&this._pid===r,this._pid=r,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(a=>this.emitEvent(a)),this.receiveBuffer=[],this.sendBuffer.forEach(a=>{this.notifyOutgoingListeners(a),this.packet(a)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(a=>a()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:je.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(a){return this.flags.compress=a,this}get volatile(){return this.flags.volatile=!0,this}timeout(a){return this.flags.timeout=a,this}onAny(a){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(a),this}prependAny(a){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(a),this}offAny(a){if(!this._anyListeners)return this;if(a){const r=this._anyListeners;for(let o=0;o<r.length;o++)if(a===r[o])return r.splice(o,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(a){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(a),this}prependAnyOutgoing(a){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(a),this}offAnyOutgoing(a){if(!this._anyOutgoingListeners)return this;if(a){const r=this._anyOutgoingListeners;for(let o=0;o<r.length;o++)if(a===r[o])return r.splice(o,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(a){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const r=this._anyOutgoingListeners.slice();for(const o of r)o.apply(this,a.data)}}}function xi(e){e=e||{},this.ms=e.min||100,this.max=e.max||1e4,this.factor=e.factor||2,this.jitter=e.jitter>0&&e.jitter<=1?e.jitter:0,this.attempts=0}xi.prototype.duration=function(){var e=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var a=Math.random(),r=Math.floor(a*this.jitter*e);e=(Math.floor(a*10)&1)==0?e-r:e+r}return Math.min(e,this.max)|0};xi.prototype.reset=function(){this.attempts=0};xi.prototype.setMin=function(e){this.ms=e};xi.prototype.setMax=function(e){this.max=e};xi.prototype.setJitter=function(e){this.jitter=e};class W0 extends at{constructor(a,r){var o;super(),this.nsps={},this.subs=[],a&&typeof a=="object"&&(r=a,a=void 0),r=r||{},r.path=r.path||"/socket.io",this.opts=r,Jl(this,r),this.reconnection(r.reconnection!==!1),this.reconnectionAttempts(r.reconnectionAttempts||1/0),this.reconnectionDelay(r.reconnectionDelay||1e3),this.reconnectionDelayMax(r.reconnectionDelayMax||5e3),this.randomizationFactor((o=r.randomizationFactor)!==null&&o!==void 0?o:.5),this.backoff=new xi({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(r.timeout==null?2e4:r.timeout),this._readyState="closed",this.uri=a;const l=r.parser||K7;this.encoder=new l.Encoder,this.decoder=new l.Decoder,this._autoConnect=r.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(a){return arguments.length?(this._reconnection=!!a,a||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(a){return a===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=a,this)}reconnectionDelay(a){var r;return a===void 0?this._reconnectionDelay:(this._reconnectionDelay=a,(r=this.backoff)===null||r===void 0||r.setMin(a),this)}randomizationFactor(a){var r;return a===void 0?this._randomizationFactor:(this._randomizationFactor=a,(r=this.backoff)===null||r===void 0||r.setJitter(a),this)}reconnectionDelayMax(a){var r;return a===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=a,(r=this.backoff)===null||r===void 0||r.setMax(a),this)}timeout(a){return arguments.length?(this._timeout=a,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(a){if(~this._readyState.indexOf("open"))return this;this.engine=new G7(this.uri,this.opts);const r=this.engine,o=this;this._readyState="opening",this.skipReconnect=!1;const l=yn(r,"open",function(){o.onopen(),a&&a()}),u=b=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",b),a?a(b):this.maybeReconnectOnOpen()},h=yn(r,"error",u);if(this._timeout!==!1){const b=this._timeout,p=this.setTimeoutFn(()=>{l(),u(new Error("timeout")),r.close()},b);this.opts.autoUnref&&p.unref(),this.subs.push(()=>{this.clearTimeoutFn(p)})}return this.subs.push(l),this.subs.push(h),this}connect(a){return this.open(a)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const a=this.engine;this.subs.push(yn(a,"ping",this.onping.bind(this)),yn(a,"data",this.ondata.bind(this)),yn(a,"error",this.onerror.bind(this)),yn(a,"close",this.onclose.bind(this)),yn(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(a){try{this.decoder.add(a)}catch(r){this.onclose("parse error",r)}}ondecoded(a){Zl(()=>{this.emitReserved("packet",a)},this.setTimeoutFn)}onerror(a){this.emitReserved("error",a)}socket(a,r){let o=this.nsps[a];return o?this._autoConnect&&!o.active&&o.connect():(o=new r3(this,a,r),this.nsps[a]=o),o}_destroy(a){const r=Object.keys(this.nsps);for(const o of r)if(this.nsps[o].active)return;this._close()}_packet(a){const r=this.encoder.encode(a);for(let o=0;o<r.length;o++)this.engine.write(r[o],a.options)}cleanup(){this.subs.forEach(a=>a()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(a,r){var o;this.cleanup(),(o=this.engine)===null||o===void 0||o.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",a,r),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const a=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const r=this.backoff.duration();this._reconnecting=!0;const o=this.setTimeoutFn(()=>{a.skipReconnect||(this.emitReserved("reconnect_attempt",a.backoff.attempts),!a.skipReconnect&&a.open(l=>{l?(a._reconnecting=!1,a.reconnect(),this.emitReserved("reconnect_error",l)):a.onreconnect()}))},r);this.opts.autoUnref&&o.unref(),this.subs.push(()=>{this.clearTimeoutFn(o)})}}onreconnect(){const a=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",a)}}const ko={};function fl(e,a){typeof e=="object"&&(a=e,e=void 0),a=a||{};const r=Q7(e,a.path||"/socket.io"),o=r.source,l=r.id,u=r.path,h=ko[l]&&u in ko[l].nsps,b=a.forceNew||a["force new connection"]||a.multiplex===!1||h;let p;return b?p=new W0(o,a):(ko[l]||(ko[l]=new W0(o,a)),p=ko[l]),r.query&&!a.query&&(a.query=r.queryKey),p.socket(r.path,a)}Object.assign(fl,{Manager:W0,Socket:r3,io:fl,connect:fl});const i3=m.createContext(void 0),t8=({children:e})=>{const[a,r]=m.useState(null),[o,l]=m.useState(!1),[u,h]=m.useState([]),{user:b,isAuthenticated:p}=Lt();m.useEffect(()=>{if(p&&b){const L=localStorage.getItem("token"),T="http://localhost:5000";console.log("🔌 Connecting to socket:",T);const E=fl(T,{auth:{token:L},transports:["websocket","polling"],reconnection:!0,reconnectionAttempts:5,reconnectionDelay:1e3});return E.on("connect",()=>{console.log("✅ Connected to server"),l(!0)}),E.on("disconnect",k=>{console.log("❌ Disconnected from server:",k),l(!1)}),E.on("connect_error",k=>{console.error("❌ Connection error:",k),l(!1)}),E.on("reconnect",k=>{console.log("🔄 Reconnected after",k,"attempts"),l(!0)}),E.on("reconnect_error",k=>{console.error("❌ Reconnection error:",k)}),E.on("user_online",k=>{h(O=>[...O.filter(D=>D!==k.userId),k.userId]),console.log(`✅ ${k.username} is now online`)}),E.on("user_offline",k=>{h(O=>O.filter(D=>D!==k.userId)),console.log(`❌ ${k.username} is now offline`)}),E.on("user_status_change",k=>{console.log(`🔄 ${k.username} status changed to ${k.status}`)}),E.on("new_direct_message",k=>{console.log("📩 New direct message received:",k),window.dispatchEvent(new CustomEvent("new_direct_message",{detail:k}))}),E.on("new_group_message",k=>{console.log("📩 New group message received:",k),window.dispatchEvent(new CustomEvent("new_group_message",{detail:k}))}),E.on("user_typing_start_direct",k=>{console.log("⌨️ User started typing (direct):",k),window.dispatchEvent(new CustomEvent("user_typing_start_direct",{detail:k}))}),E.on("user_typing_stop_direct",k=>{console.log("⌨️ User stopped typing (direct):",k),window.dispatchEvent(new CustomEvent("user_typing_stop_direct",{detail:k}))}),E.on("user_typing_start_group",k=>{console.log("⌨️ User started typing (group):",k),window.dispatchEvent(new CustomEvent("user_typing_start_group",{detail:k}))}),E.on("user_typing_stop_group",k=>{console.log("⌨️ User stopped typing (group):",k),window.dispatchEvent(new CustomEvent("user_typing_stop_group",{detail:k}))}),E.on("message_read_receipt",k=>{console.log("✅ Message read receipt:",k),window.dispatchEvent(new CustomEvent("message_read_receipt",{detail:k}))}),E.on("group_member_joined",k=>{console.log("👥 Member joined group:",k),window.dispatchEvent(new CustomEvent("group_member_joined",{detail:k}))}),E.on("group_member_left",k=>{console.log("👥 Member left group:",k),window.dispatchEvent(new CustomEvent("group_member_left",{detail:k}))}),E.on("notification",k=>{console.log("🔔 New notification:",k),window.dispatchEvent(new CustomEvent("notification",{detail:k}))}),E.on("new_friend_request",k=>{console.log("👋 New friend request:",k),window.dispatchEvent(new CustomEvent("new_friend_request",{detail:k}))}),E.on("friend_request_accepted",k=>{console.log("✅ Friend request accepted:",k),window.dispatchEvent(new CustomEvent("friend_request_accepted",{detail:k}))}),r(E),()=>{console.log("🔌 Cleaning up socket connection"),E.close(),r(null),l(!1),h([])}}else a&&(console.log("🔌 Cleaning up socket on logout"),a.close(),r(null),l(!1),h([]))},[p,b]);const S={socket:a,isConnected:o,onlineUsers:u,joinGroup:L=>{a&&o?(console.log("🚪 Joining group room:",L),a.emit("join_group",L)):console.warn("❌ Cannot join group - socket not connected")},leaveGroup:L=>{a&&o?(console.log("🚪 Leaving group room:",L),a.emit("leave_group",L)):console.warn("❌ Cannot leave group - socket not connected")},sendDirectMessage:(L,T,E="text")=>{a&&o?(console.log("📤 Sending direct message via socket"),a.emit("send_direct_message",{recipientId:L,content:T,type:E})):console.warn("❌ Cannot send direct message - socket not connected")},sendGroupMessage:(L,T,E="text")=>{a&&o?(console.log("📤 Sending group message via socket"),a.emit("send_group_message",{groupId:L,content:T,type:E})):console.warn("❌ Cannot send group message - socket not connected")},updateStatus:L=>{a&&o?(console.log("🔄 Updating status:",L),a.emit("status_update",L)):console.warn("❌ Cannot update status - socket not connected")}};return s.jsx(i3.Provider,{value:S,children:e})},ff=()=>{const e=m.useContext(i3);if(!e)throw new Error("useSocket must be used within a SocketProvider");return e},o3=m.createContext(void 0),n8=({children:e})=>{const[a,r]=m.useState([]),[o,l]=m.useState([]),[u,h]=m.useState(!1),[b,p]=m.useState(null),{isAuthenticated:y,user:v}=Lt(),{socket:x}=ff();m.useEffect(()=>{y&&v&&(console.log("🔄 Loading friends and friend requests..."),j(),C())},[y,v]),m.useEffect(()=>{if(!x||!y)return;const N=Q=>{console.log("📨 New friend request received:",Q),C()},z=Q=>{console.log("✅ Friend request accepted:",Q),j(),C()};return x.on("new_friend_request",N),x.on("friend_request_accepted",z),()=>{x.off("new_friend_request",N),x.off("friend_request_accepted",z)}},[x,y]);const j=async()=>{var N;try{console.log("👥 Loading friends...");const z=await Sa.getFriends();z.success&&(console.log("✅ Friends loaded:",((N=z.data.friends)==null?void 0:N.length)||0),r(z.data.friends||[]))}catch(z){console.error("❌ Failed to load friends:",z),p(z.message)}},C=async()=>{var N;try{console.log("📬 Loading friend requests...");const z=await Sa.getFriendRequests();z.success&&(console.log("✅ Friend requests loaded:",((N=z.data.friendRequests)==null?void 0:N.length)||0),l(z.data.friendRequests||[]))}catch(z){console.error("❌ Failed to load friend requests:",z),p(z.message)}},D={friends:a,friendRequests:o,loading:u,error:b,loadFriends:j,loadFriendRequests:C,sendFriendRequest:async N=>{try{p(null),(await Sa.sendFriendRequest(N)).success&&console.log("📤 Friend request sent successfully")}catch(z){throw p(z.message),z}},acceptFriendRequest:async N=>{try{p(null),console.log("✅ Accepting friend request:",N),(await Sa.acceptFriendRequest(N)).success&&(l(Q=>Q.filter(V=>V._id!==N)),await j(),console.log("✅ Friend request accepted successfully"))}catch(z){throw console.error("❌ Failed to accept friend request:",z),p(z.message),z}},declineFriendRequest:async N=>{try{p(null),console.log("❌ Declining friend request:",N),(await Sa.declineFriendRequest(N)).success&&(l(Q=>Q.filter(V=>V._id!==N)),console.log("✅ Friend request declined successfully"))}catch(z){throw console.error("❌ Failed to decline friend request:",z),p(z.message),z}},removeFriend:async N=>{try{p(null),(await Sa.removeFriend(N)).success&&r(Q=>Q.filter(V=>V.friendId._id!==N))}catch(z){throw p(z.message),z}},blockUser:async N=>{try{p(null),(await Sa.blockUser(N)).success&&r(Q=>Q.filter(V=>V.friendId._id!==N))}catch(z){throw p(z.message),z}},searchUsers:async N=>{try{p(null);const z=await Sa.searchUsers(N);return z.success?z.data.users||[]:[]}catch(z){return p(z.message),console.error("Failed to search users:",z),[]}}};return s.jsx(o3.Provider,{value:D,children:e})},Na=()=>{const e=m.useContext(o3);if(!e)throw new Error("useFriends must be used within a FriendsProvider");return e},f3=m.createContext(void 0),a8=({children:e})=>{const[a,r]=m.useState({}),[o,l]=m.useState(null),{user:u,isAuthenticated:h}=Lt(),{socket:b,sendDirectMessage:p}=ff();m.useEffect(()=>{if(!b||!h)return;const L=E=>{console.log("📩 New direct message received:",E);const k={_id:E.messageId||`temp_${Date.now()}`,senderId:{_id:E.senderId,username:E.senderUsername,fullName:E.senderFullName||E.senderUsername,avatar:E.senderAvatar},content:E.content,type:E.type,createdAt:E.timestamp,isEdited:!1,readBy:[]};r(O=>{const D=O[E.senderId];return{...O,[E.senderId]:{userId:E.senderId,messages:[...(D==null?void 0:D.messages)||[],k],hasMore:(D==null?void 0:D.hasMore)||!1,loading:!1}}})},T=E=>{L(E.detail)};return window.addEventListener("new_direct_message",T),()=>{window.removeEventListener("new_direct_message",T)}},[b,h]);const y=m.useCallback(async(L,T=1)=>{var E;try{console.log(`📩 Loading messages with user: ${L}, page: ${T}`),r(O=>{var D;return{...O,[L]:{userId:L,messages:((D=O[L])==null?void 0:D.messages)||[],hasMore:!0,loading:!0}}});const k=await Rd.getDirectMessages(L,T,50);if(k.success){const O=k.data.messages||[],D=((E=k.data.pagination)==null?void 0:E.hasMore)||!1;console.log(`✅ Messages loaded: ${O.length}, hasMore: ${D}`),r(N=>{var z;return{...N,[L]:{userId:L,messages:T===1?O:[...O,...((z=N[L])==null?void 0:z.messages)||[]],hasMore:D,loading:!1}}})}}catch(k){console.error("❌ Failed to load messages:",k),r(O=>{var D;return{...O,[L]:{userId:L,messages:((D=O[L])==null?void 0:D.messages)||[],hasMore:!1,loading:!1}}})}},[]),v=m.useCallback(async(L,T,E="text")=>{try{console.log("📤 Sending message to:",L);const k={_id:`temp_${Date.now()}`,senderId:{_id:(u==null?void 0:u.id)||"",username:(u==null?void 0:u.username)||"",fullName:(u==null?void 0:u.fullName)||"",avatar:u==null?void 0:u.avatar},content:T,type:E,createdAt:new Date,isEdited:!1,readBy:[]};r(D=>{var N,z;return{...D,[L]:{userId:L,messages:[...((N=D[L])==null?void 0:N.messages)||[],k],hasMore:((z=D[L])==null?void 0:z.hasMore)||!1,loading:!1}}}),b&&p(L,T,E);const O=await Rd.sendDirectMessage(L,T,E);if(O.success){const D=O.data.message;console.log("✅ Message sent successfully"),r(N=>{var z,Q;return{...N,[L]:{userId:L,messages:[...((z=N[L])==null?void 0:z.messages.filter(V=>V._id!==k._id))||[],D],hasMore:((Q=N[L])==null?void 0:Q.hasMore)||!1,loading:!1}}})}}catch(k){throw console.error("❌ Failed to send message:",k),r(O=>{var D;return{...O,[L]:{...O[L],messages:((D=O[L])==null?void 0:D.messages.filter(N=>N._id!==`temp_${Date.now()}`))||[]}}}),k}},[b,p,u]),x=m.useCallback(async L=>{try{(await Rd.deleteMessage(L)).success&&r(E=>{const k={...E};return Object.keys(k).forEach(O=>{k[O]={...k[O],messages:k[O].messages.filter(D=>D._id!==L)}}),k})}catch(T){throw console.error("❌ Failed to delete message:",T),T}},[]),j=m.useCallback((L,T)=>{!b||!u||(b.emit("message_read",{messageId:T,senderId:L}),r(E=>{var k;return{...E,[L]:{...E[L],messages:((k=E[L])==null?void 0:k.messages.map(O=>O._id===T?{...O,readBy:[...O.readBy.filter(D=>D.userId!==u.id),{userId:u.id,readAt:new Date}]}:O))||[]}}}))},[b,u]),C=m.useCallback(L=>{console.log("🔄 Setting current conversation to:",L),l(L)},[]),S={conversations:a,currentConversation:o,setCurrentConversation:C,loadMessages:y,sendMessage:v,deleteMessage:x,markAsRead:j};return s.jsx(f3.Provider,{value:S,children:e})},cr=()=>{const e=m.useContext(f3);if(!e)throw new Error("useMessages must be used within a MessagesProvider");return e},r8=()=>{const[e,a]=m.useState(!1),r=m.useRef(null),{friendRequests:o,acceptFriendRequest:l,declineFriendRequest:u,loadFriendRequests:h}=Na(),{setCurrentConversation:b}=cr();lr(),m.useEffect(()=>{const v=setInterval(()=>{o.length===0&&h()},7e3);return()=>clearInterval(v)},[o.length,h]),m.useEffect(()=>{const v=x=>{r.current&&!r.current.contains(x.target)&&a(!1)};return e&&document.addEventListener("mousedown",v),()=>{document.removeEventListener("mousedown",v)}},[e]);const p=async v=>{try{await l(v),console.log("✅ Friend request accepted!")}catch(x){console.error("Failed to accept friend request:",x)}},y=async v=>{try{await u(v),console.log("❌ Friend request declined")}catch(x){console.error("Failed to decline friend request:",x)}};return s.jsxs(i8,{ref:r,children:[s.jsxs(f8,{onClick:()=>a(!e),children:[s.jsx(MC,{}),o.length>0&&s.jsx(s8,{children:o.length})]}),e&&s.jsxs(l8,{children:[s.jsxs(c8,{children:[s.jsx("h4",{children:"Friend Requests"}),s.jsx(u8,{onClick:()=>a(!1),children:s.jsx(Zo,{})})]}),o.length===0?s.jsx(d8,{children:s.jsx(h8,{children:"No pending friend requests"})}):s.jsx(m8,{children:o.map(v=>s.jsxs(g8,{children:[s.jsxs(p8,{children:[s.jsx(kt,{image:v.friendId.avatar,userName:v.friendId.fullName,size:35}),s.jsxs(y8,{children:[s.jsx(b8,{children:v.friendId.fullName}),s.jsxs(w8,{children:["@",v.friendId.username]})]})]}),s.jsxs(v8,{children:[s.jsx(u4,{accept:!0,onClick:()=>p(v._id),title:"Accept",children:s.jsx(EC,{})}),s.jsx(u4,{onClick:()=>y(v._id),title:"Decline",children:s.jsx(Zo,{})})]})]},v._id))}),o.length>0&&s.jsx(x8,{children:s.jsxs(M8,{children:[o.length," pending request",o.length!==1?"s":""]})})]})]})},i8=g.div`
  position: relative;
`,o8=Jt`
0% {
  transform: rotate(-10deg);
}
50% {
  transform: rotate(10deg);
}
100% {
  transform: rotate(0);
}
`,f8=g.button`
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
      animation: ${o8} .3s ease-in;
    }
  }
  
  svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`,s8=g.div`
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
`,l8=g.div`
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
`,c8=g.div`
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
`,u8=g.button`
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
`,d8=g.div`
  padding: 3rem 1.5rem;
  text-align: center;
`,h8=g.div`
  color: ${({theme:e})=>e.text.placeholder};
  font-size: var(--text-md);
`,m8=g.div`
  max-height: 40rem;
  overflow-y: auto;
`,g8=g.div`
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
`,p8=g.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
  min-width: 0;
`,y8=g.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  min-width: 0;
`,b8=g.div`
  font-size: var(--text-md);
  color: ${({theme:e})=>e.text.primary};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,w8=g.div`
  font-size: var(--text-sm);
  color: ${({theme:e})=>e.text.secondary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;g.div`
  font-size: var(--text-xs);
  color: ${({theme:e})=>e.text.placeholder};
`;const v8=g.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,u4=g.button`
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
`,x8=g.div`
  padding: 1rem 1.5rem;
  border-top: 1px solid ${({theme:e})=>e.border.secondary};
  text-align: center;
`,M8=g.div`
  font-size: var(--text-sm);
  color: ${({theme:e})=>e.text.placeholder};
`,s3=({})=>{const[e,a]=m.useState(!1),[r,o]=m.useState(!1),l=un(),{user:u,logout:h}=Lt(),b=()=>{o(!e),a(y=>!y)},p=async()=>{try{await h()}catch(y){console.error("Logout failed:",y)}};return u?s.jsx(s.Fragment,{children:s.jsxs(j8,{children:[s.jsx(L8,{children:s.jsx(S8,{children:window.innerWidth<=700?s.jsx(s.Fragment,{children:s.jsxs(T8,{children:[s.jsx(Kd,{isActive:l.pathname==="/app/@me",children:s.jsxs(Be,{to:"/app/@me",children:[s.jsx(d4,{children:s.jsx($C,{})}),s.jsx(e0,{children:s.jsx("span",{children:"Home"})})]})}),s.jsx(Kd,{isActive:l.pathname==="/app/friends",children:s.jsxs(Be,{to:"/app/friends",children:[s.jsx(N8,{isActive:l.pathname==="/app/friends",children:u.avatar?s.jsx("img",{src:u.avatar,alt:u.fullName}):s.jsx("div",{className:"placeholder",children:u.fullName.charAt(0).toUpperCase()})}),s.jsx(e0,{children:s.jsx("span",{children:"Profile"})})]})}),s.jsx(Kd,{isActive:l.pathname.startsWith("/app/settings"),children:s.jsxs(Be,{to:"/app/settings/profile",children:[s.jsx(d4,{children:s.jsx(Vp,{})}),s.jsx(e0,{children:s.jsx("span",{children:"Settings"})})]})})]})}):s.jsxs(s.Fragment,{children:[s.jsx(C8,{onClick:b,children:s.jsx(kt,{image:u.avatar,userName:u.fullName,status:u.status,showStatus:!0,showStatusCircle:!0,showUserName:!0})}),s.jsxs(k8,{children:[s.jsx(r8,{}),s.jsx(E8,{children:s.jsx(Be,{to:"/app/settings/profile",children:s.jsx(Vp,{})})})]})]})})}),s.jsx(Wk,{isOpen:e,shouldAnimate:r,user:u,onLogout:p,onClose:()=>a(!1)})]})}):null},j8=g.div`
  width: 100%;
  position: relative;
`,L8=g.div`
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
`,S8=g.div`
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
`,C8=g.div`
  width: max-content;
  padding-right: 2rem;
  border-radius: 3rem;
  padding: 0.5rem;
  padding-right: 2rem;
  cursor: pointer;
  &:hover {
    background-color: ${({theme:e})=>e.background.primary};
  }
`,k8=g.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,E8=g.div`
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
`;g.div`
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
`;const T8=g.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  padding: 0.6rem 0;
`,Kd=g.div`
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
`,d4=g.div`
  svg {
    color: inherit;
    width: 2.4rem;
  }
`,N8=g.div`
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
`,e0=g.div`
  color: inherit;
  span {
    font-size: var(--text-xxs);
    line-height: 1;
  }
`,I8=({onClick:e,isOpen:a,user:r})=>{if(!a)return null;const o=h=>new Date(h).toLocaleDateString("en-US",{month:"long",year:"numeric"}),l=()=>r.isOnline?r.status==="idle"?"Idle":"Online":"Offline",u=()=>r.isOnline?r.status==="idle"?"#f2c100":"#43a25a":"#6b7280";return s.jsx(s.Fragment,{children:s.jsx(D8,{children:s.jsxs(A8,{children:[s.jsx(R8,{children:s.jsxs(O8,{children:[s.jsxs(B8,{children:[s.jsx(U8,{children:r.avatar?s.jsx("img",{src:r.avatar,alt:r.fullName}):s.jsx(Y8,{children:r.fullName.charAt(0).toUpperCase()})}),s.jsx(_8,{})]}),s.jsxs(G8,{children:[s.jsx("h4",{children:r.fullName}),s.jsxs("span",{children:["@",r.username]}),s.jsxs(Q8,{children:[s.jsx($8,{color:u()}),s.jsx(P8,{children:l()})]})]})]})}),s.jsxs(H8,{children:[s.jsx(Z8,{children:s.jsxs(J8,{children:[s.jsx(h4,{children:"Personal Info"}),s.jsx(h4,{children:"Mutual Friends"})]})}),s.jsxs(F8,{children:[s.jsxs(t0,{children:[s.jsx(n0,{children:s.jsx(K9,{})}),s.jsxs(a0,{children:["@",r.username]})]}),r.jobTitle&&s.jsxs(t0,{children:[s.jsx(n0,{children:s.jsx(Z9,{})}),s.jsx(a0,{children:r.jobTitle})]}),s.jsxs(t0,{children:[s.jsx(n0,{children:s.jsx(F9,{})}),s.jsxs(a0,{children:["Joined ",o(r.lastSeen)]})]})]}),r.biography&&s.jsx(q8,{children:s.jsx("p",{children:r.biography})})]}),s.jsx(z8,{onClick:e,children:s.jsx(S1,{})})]})})})},D8=g.div`
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
`,A8=g.div`
  width: 100%;
  height: 50rem;
  max-width: 70rem;
  background-color: ${({theme:e})=>e.background.secondary};
  border-radius: 2rem;
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  position: relative;
  border: 1px solid ${({theme:e})=>e.border.primary};
`,z8=g.div`
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
`,R8=g.div`
  width: 100%;
  height: 13rem;
  background: var(--blue);
  margin-bottom: 16rem;
  position: relative;
`,O8=g.div`
  position: absolute;
  bottom: -16rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`,B8=g.div`
  width: 15rem;
  height: 15rem;
  border-radius: 100%;
  background-color: ${({theme:e})=>e.background.secondary};
  padding: 1rem;
  position: relative;
`,_8=g.div`
  width: 135%;
  height: 7rem;
  border-radius: 3rem;
  background-color: ${({theme:e})=>e.background.secondary};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
`,U8=g.div`
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
`,Y8=g.div`
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
`,G8=g.div`
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
`,Q8=g.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,$8=g.div`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background-color: ${({color:e})=>e};
`,P8=g.span`
  font-size: var(--text-sm);
  color: ${({theme:e})=>e.text.secondary};
`,H8=g.div`
  width: 100%;
  max-height: 19rem;
  overflow: auto;
`,Z8=g.div`
  background-color: ${({theme:e})=>e.background.secondary};
  border-bottom: 1px solid ${({theme:e})=>e.border.secondary};
  margin: 0 2rem;
  position: sticky;
  top: 0;
`,J8=g.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
`,h4=g.li`
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
`,F8=g.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
`,t0=g.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,n0=g.div`
  color: ${({theme:e})=>e.text.thirdly};
  
  svg {
    width: 2rem;
  }
`,a0=g.div`
  color: ${({theme:e})=>e.text.thirdly};
  font-size: var(--text-md);
`,q8=g.div`
  padding: 0 2rem 2rem;
  
  p {
    font-size: var(--text-md);
    color: ${({theme:e})=>e.text.thirdly};
    line-height: 1.6;
  }
`,Ia=({items:e=[],top:a,left:r,right:o,bottom:l,isOpen:u=!1,onClose:h})=>{const b=m.useRef(null);return m.useEffect(()=>{const p=y=>{b.current&&!b.current.contains(y.target)&&h()};return u&&document.addEventListener("mousedown",p),()=>{document.removeEventListener("mousedown",p)}},[u,h]),s.jsx(V8,{ref:b,bottom:l,left:r,right:o,top:a,isOpen:u,children:s.jsx(X8,{children:s.jsx(W8,{isOpen:u,children:e.map((p,y)=>s.jsxs(K8,{isDanger:p.danger,onClick:p.onClick,children:[p.icon&&s.jsx(eE,{isDanger:p.danger,children:p.icon}),s.jsx(tE,{isDanger:p.danger,children:s.jsx("span",{children:p.label})})]},y))})})})},V8=g.div`
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
`,X8=g.div`
  width: 100%;
  height: max-content;
`,W8=g.div`
  transform: ${({isOpen:e})=>e?"translateY(0)":"translateY(-100%)"};
  background-color: ${({theme:e})=>e.background.thirdly};
  border-radius: 8px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  transition: transform 0.2s ease;
`,K8=g.div`
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
`,eE=g.div`
  color: ${({isDanger:e})=>e?"#ff99a4":({theme:a})=>a.text.primary};
  display: flex;
  align-items: center;
  
  svg {
    width: 1.6rem;
  }
`,tE=g.div`
  span {
    font-size: var(--text-md);
    color: ${({isDanger:e})=>e?"#ff99a4":({theme:a})=>a.text.primary};
  }
`,nE=({recipient:e})=>{const[a,r]=m.useState(!1),[o,l]=m.useState(!1),{removeFriend:u,blockUser:h}=Na(),{setCurrentConversation:b}=cr(),p=()=>{r(!1)},y=()=>{l(!0)},v=async()=>{try{await u(e._id),b(null),l(!1)}catch(L){console.error("Failed to remove friend:",L)}},x=async()=>{try{await h(e._id),b(null),l(!1)}catch(L){console.error("Failed to block user:",L)}},j=()=>{alert("Clear messages functionality not implemented yet"),l(!1)},C=[{label:"View Profile",icon:s.jsx(Qb,{}),onClick:()=>{r(!0),l(!1)}},{label:"Clear messages",icon:s.jsx(Zo,{}),onClick:j},{label:"Remove Friend",icon:s.jsx(Yb,{}),onClick:v},{label:"Block User",icon:s.jsx(XC,{}),danger:!0,onClick:x}],S=()=>e.isOnline?e.status==="idle"?"idle":"online":"offline";return s.jsxs(s.Fragment,{children:[s.jsxs(aE,{children:[s.jsx(rE,{onClick:()=>r(!0),children:s.jsx(kt,{image:e.avatar,showStatus:!0,showStatusCircle:!0,showUserName:!0,userName:e.fullName,status:S()})}),s.jsx(iE,{children:s.jsx(oE,{onClick:y,children:s.jsx(Ob,{})})}),s.jsx(Ia,{onClose:()=>l(!1),isOpen:o,right:"0",top:"100",items:C})]}),s.jsx(I8,{isOpen:a,onClick:p,user:e})]})},aE=g.header`
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
`,rE=g.div`
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
`;g.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  
  @media (max-width: 600px) {
    display: none;
  }
`;g.span`
  font-size: var(--text-sm);
  color: ${({theme:e})=>e.text.placeholder};
  line-height: 1;
`;const iE=g.div`
  width: max-content;
  display: flex;
  align-items: center;
  gap: 2rem;
`,oE=g.div`
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
`,fE=({group:e,memberCount:a,userRole:r,isOpen:o,onClose:l})=>{const[u,h]=m.useState(!1),[b,p]=m.useState(e.name),[y,v]=m.useState(e.description||""),x=r==="admin"||r==="moderator",j=async()=>{try{console.log("Saving changes:",{name:b,description:y}),h(!1)}catch(L){console.error("Failed to update group:",L)}},C=()=>{p(e.name),v(e.description||""),h(!1)},S=L=>new Date(L).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return s.jsx(of,{title:u?"Edit Group Info":"Group Info",isOpen:o,onClose:l,children:s.jsxs(sE,{children:[s.jsxs(lE,{children:[s.jsx(cE,{children:e.avatar?s.jsx(kt,{image:e.avatar,userName:e.name,size:80,isGroup:!0}):s.jsx(uE,{children:s.jsx(Pl,{})})}),u?s.jsxs(yE,{children:[s.jsxs(m4,{children:[s.jsx(g4,{children:"Group Name"}),s.jsx(bE,{type:"text",value:b,onChange:L=>p(L.target.value),placeholder:"Enter group name"})]}),s.jsxs(m4,{children:[s.jsx(g4,{children:"Description"}),s.jsx(wE,{value:y,onChange:L=>v(L.target.value),placeholder:"Enter group description (optional)",rows:3})]}),s.jsxs(vE,{children:[s.jsx(Ct,{variant:"cancel",title:"Cancel",onClick:C}),s.jsx(Ct,{variant:"primary",title:"Save Changes",onClick:j})]})]}):s.jsxs(dE,{children:[s.jsxs(hE,{children:[s.jsx(mE,{children:e.name}),x&&s.jsx(gE,{onClick:()=>h(!0),children:s.jsx(KC,{})})]}),e.description&&s.jsx(pE,{children:e.description})]})]}),!u&&s.jsxs(xE,{children:[s.jsxs(zs,{children:[s.jsx(Rs,{children:s.jsx(Gb,{})}),s.jsxs(Os,{children:[s.jsx(Bs,{children:"Members"}),s.jsx(_s,{children:a})]})]}),s.jsxs(zs,{children:[s.jsx(Rs,{children:s.jsx(LC,{})}),s.jsxs(Os,{children:[s.jsx(Bs,{children:"Created"}),s.jsx(_s,{children:S(e.createdAt)})]})]}),s.jsxs(zs,{children:[s.jsx(Rs,{children:e.isPrivate?s.jsx(JC,{}):s.jsx(GC,{})}),s.jsxs(Os,{children:[s.jsx(Bs,{children:"Type"}),s.jsx(_s,{children:e.isPrivate?"Private Group":"Public Group"})]})]}),s.jsxs(zs,{children:[s.jsx(Rs,{}),s.jsxs(Os,{children:[s.jsx(Bs,{children:"Created by"}),s.jsx(_s,{children:e.createdBy.fullName})]})]})]}),!u&&s.jsx(ME,{children:s.jsxs(jE,{children:[s.jsx("h4",{children:"Group ID"}),s.jsx(LE,{children:e._id})]})})]})})},sE=g.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,lE=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
`,cE=g.div`
  position: relative;
`,uE=g.div`
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
`,dE=g.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
`,hE=g.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,mE=g.h2`
  font-size: var(--text-xxl);
  color: ${({theme:e})=>e.text.primary};
  font-weight: 600;
  margin: 0;
`,gE=g.button`
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
`,pE=g.p`
  font-size: var(--text-md);
  color: ${({theme:e})=>e.text.secondary};
  line-height: 1.5;
  margin: 0;
`,yE=g.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,m4=g.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`,g4=g.label`
  font-size: var(--text-sm);
  font-weight: 600;
  color: ${({theme:e})=>e.text.secondary};
`,bE=g.input`
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
`,wE=g.textarea`
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
`,vE=g.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
`,xE=g.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,zs=g.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background-color: ${({theme:e})=>e.background.secondary};
  border-radius: 0.8rem;
`,Rs=g.div`
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
`,Os=g.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`,Bs=g.div`
  font-size: var(--text-sm);
  color: ${({theme:e})=>e.text.placeholder};
  font-weight: 500;
`,_s=g.div`
  font-size: var(--text-md);
  color: ${({theme:e})=>e.text.primary};
  font-weight: 600;
`,ME=g.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,jE=g.div`
  h4 {
    font-size: var(--text-sm);
    color: ${({theme:e})=>e.text.placeholder};
    font-weight: 600;
    margin: 0 0 0.5rem 0;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`,LE=g.div`
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: var(--text-sm);
  color: ${({theme:e})=>e.text.secondary};
  background-color: ${({theme:e})=>e.background.secondary};
  padding: 0.8rem 1rem;
  border-radius: 0.6rem;
  word-break: break-all;
`,l3=m.createContext(void 0),SE=({children:e})=>{const[a,r]=m.useState([]),[o,l]=m.useState({}),[u,h]=m.useState({}),[b,p]=m.useState(null),[y,v]=m.useState(!1),[x,j]=m.useState(null),{user:C,isAuthenticated:S}=Lt(),{socket:L,joinGroup:T,leaveGroup:E}=ff(),k=m.useCallback(async()=>{var K,ue;try{v(!0),j(null),console.log("🔄 Loading groups...");const ne=await In.getUserGroups();ne.success&&(console.log("✅ Groups loaded:",((K=ne.data.chatGroups)==null?void 0:K.length)||0),r(ne.data.chatGroups||[]),(ue=ne.data.chatGroups)==null||ue.forEach(_=>{T&&T(_._id)}))}catch(ne){console.error("❌ Failed to load groups:",ne),j(ne.message)}finally{v(!1)}},[T]);m.useEffect(()=>{S&&a.length===0&&!y&&k()},[S,a.length,y,k]),m.useEffect(()=>{if(!L||!S)return;const K=_=>{console.log("📨 New group message received:",_);const q={_id:_.messageId||`temp_${Date.now()}`,senderId:{_id:_.senderId,username:_.senderUsername,fullName:_.senderFullName||_.senderUsername,avatar:_.senderAvatar},chatGroupId:_.groupId,content:_.content,type:_.type,createdAt:_.timestamp,isEdited:!1,readBy:[]};h(W=>{const ae=W[_.groupId];return{...W,[_.groupId]:{groupId:_.groupId,messages:[...(ae==null?void 0:ae.messages)||[],q],hasMore:(ae==null?void 0:ae.hasMore)||!1,loading:!1}}})},ue=_=>{console.log("👋 Member joined group:",_),l(q=>({...q,[_.groupId]:[...q[_.groupId]||[],_.member]}))},ne=_=>{console.log("👋 Member left group:",_),l(q=>({...q,[_.groupId]:(q[_.groupId]||[]).filter(W=>W.userId._id!==_.userId)}))};return L.on("new_group_message",K),L.on("group_member_joined",ue),L.on("group_member_left",ne),()=>{L.off("new_group_message",K),L.off("group_member_joined",ue),L.off("group_member_left",ne)}},[L,S]);const O=m.useCallback(async K=>{var ue;try{j(null),console.log("👥 Loading group members for:",K);const ne=await In.getGroupDetails(K);ne.success&&(console.log("✅ Group members loaded:",((ue=ne.data.members)==null?void 0:ue.length)||0),l(_=>({..._,[K]:ne.data.members||[]})))}catch(ne){console.error("❌ Failed to load group members:",ne),j(ne.message)}},[]),D=m.useCallback(async(K,ue=1)=>{var ne;try{console.log("💬 Loading group messages for:",K,"page:",ue),h(q=>{var W;return{...q,[K]:{groupId:K,messages:((W=q[K])==null?void 0:W.messages)||[],hasMore:!0,loading:!0}}});const _=await In.getGroupMessages(K,ue,50);if(_.success){const q=_.data.messages||[],W=((ne=_.data.pagination)==null?void 0:ne.hasMore)||!1;console.log("✅ Group messages loaded:",q.length,"hasMore:",W),h(ae=>{var A;return{...ae,[K]:{groupId:K,messages:ue===1?q:[...q,...((A=ae[K])==null?void 0:A.messages)||[]],hasMore:W,loading:!1}}})}}catch(_){console.error("❌ Failed to load group messages:",_),h(q=>{var W;return{...q,[K]:{groupId:K,messages:((W=q[K])==null?void 0:W.messages)||[],hasMore:!1,loading:!1}}})}},[]),N=m.useCallback(async(K,ue,ne="text")=>{try{console.log("📤 Sending group message to:",K);const _={_id:`temp_${Date.now()}`,senderId:{_id:(C==null?void 0:C.id)||"",username:(C==null?void 0:C.username)||"",fullName:(C==null?void 0:C.fullName)||"",avatar:C==null?void 0:C.avatar},chatGroupId:K,content:ue,type:ne,createdAt:new Date,isEdited:!1,readBy:[]};h(W=>{var ae,A;return{...W,[K]:{...W[K],groupId:K,messages:[...((ae=W[K])==null?void 0:ae.messages)||[],_],hasMore:((A=W[K])==null?void 0:A.hasMore)||!1,loading:!1}}}),L&&L.emit("send_group_message",{groupId:K,content:ue,type:ne});const q=await In.sendGroupMessage(K,ue,ne);if(q.success){const W=q.data.message;console.log("✅ Group message sent successfully"),h(ae=>{var A,F;return{...ae,[K]:{...ae[K],groupId:K,messages:[...((A=ae[K])==null?void 0:A.messages.filter(X=>X._id!==_._id))||[],W],hasMore:((F=ae[K])==null?void 0:F.hasMore)||!1,loading:!1}}})}}catch(_){throw console.error("❌ Failed to send group message:",_),h(q=>{var W;return{...q,[K]:{...q[K],messages:((W=q[K])==null?void 0:W.messages.filter(ae=>ae._id!==`temp_${Date.now()}`))||[]}}}),_}},[L,C]),z=m.useCallback(async(K,ue,ne=!1)=>{try{j(null),console.log("🆕 Creating group:",K);const _=await In.createGroup(K,ue,ne);if(_.success)return console.log("✅ Group created successfully"),await k(),_.data.chatGroup}catch(_){throw console.error("❌ Failed to create group:",_),j(_.message),_}},[k]),Q=m.useCallback(async K=>{try{j(null),console.log("🚪 Joining group:",K),(await In.joinGroup(K)).success&&(console.log("✅ Joined group successfully"),T&&T(K),await k())}catch(ue){throw console.error("❌ Failed to join group:",ue),j(ue.message),ue}},[T,k]),V=m.useCallback(async K=>{try{j(null),console.log("🚶 Leaving group:",K),(await In.leaveGroup(K)).success&&(console.log("✅ Left group successfully"),E&&E(K),r(ne=>ne.filter(_=>_._id!==K)),p(null))}catch(ue){throw console.error("❌ Failed to leave group:",ue),j(ue.message),ue}},[E]),oe=m.useCallback(async(K,ue)=>{try{j(null),console.log("➕ Adding member to group:",K,ue),(await In.addMember(K,ue)).success&&(console.log("✅ Member added successfully"),await O(K))}catch(ne){throw console.error("❌ Failed to add member:",ne),j(ne.message),ne}},[O]),Te=m.useCallback(async(K,ue)=>{try{j(null),console.log("➖ Removing member from group:",K,ue),(await In.removeMember(K,ue)).success&&(console.log("✅ Member removed successfully"),await O(K))}catch(ne){throw console.error("❌ Failed to remove member:",ne),j(ne.message),ne}},[O]),Ze=m.useCallback(async(K,ue,ne)=>{try{j(null),console.log("🔄 Updating member role:",K,ue,ne),(await In.updateMemberRole(K,ue,ne)).success&&(console.log("✅ Member role updated successfully"),await O(K))}catch(_){throw console.error("❌ Failed to update member role:",_),j(_.message),_}},[O]),Ue={groups:a,groupMembers:o,groupConversations:u,currentGroup:b,loading:y,error:x,setCurrentGroup:p,loadGroups:k,loadGroupMembers:O,loadGroupMessages:D,sendGroupMessage:N,createGroup:z,joinGroup:Q,leaveGroup:V,addMember:oe,removeMember:Te,updateMemberRole:Ze};return s.jsx(l3.Provider,{value:Ue,children:e})},Da=()=>{const e=m.useContext(l3);if(!e)throw new Error("useGroups must be used within a GroupsProvider");return e},CE=({group:e,isOpen:a,onClose:r})=>{const[o,l]=m.useState(""),[u,h]=m.useState([]),[b,p]=m.useState([]),[y,v]=m.useState(new Set),[x,j]=m.useState(!1),[C,S]=m.useState(""),{addMember:L,groupMembers:T}=Da(),{friends:E}=Na(),k=new Set((T[e._id]||[]).map(N=>N.userId._id));m.useEffect(()=>{if(a){const N=E.map(z=>({_id:z.friendId._id,username:z.friendId.username,fullName:z.friendId.fullName,avatar:z.friendId.avatar,status:z.friendId.status})).filter(z=>!k.has(z._id));p(N),h(N),l(""),v(new Set),S("")}},[a,E,T,e._id]),m.useEffect(()=>{if(!o.trim())h(b);else{const N=b.filter(z=>z.fullName.toLowerCase().includes(o.toLowerCase())||z.username.toLowerCase().includes(o.toLowerCase()));h(N)}},[o,b]);const O=async N=>{try{S(""),await L(e._id,N),v(z=>new Set([...z,N]))}catch(z){S(z.message||"Failed to add member")}},D=()=>{l(""),h([]),v(new Set),S(""),r()};return s.jsx(of,{title:`Add Members to ${e.name}`,isOpen:a,onClose:D,children:s.jsxs(kE,{children:[s.jsx(EE,{children:s.jsxs(TE,{children:[s.jsx(NE,{children:s.jsx(j1,{})}),s.jsx(IE,{children:s.jsx("input",{type:"text",placeholder:"Search your friends to add",value:o,onChange:N=>l(N.target.value)})})]})}),C&&s.jsx(DE,{children:C}),s.jsxs(AE,{children:[s.jsx(zE,{children:s.jsx("h4",{children:u.length===0&&o?"No friends found":u.length===0&&!o?"No friends available to add":`${u.length} friend${u.length!==1?"s":""} available`})}),u.length===0?s.jsx(PE,{children:o?s.jsxs(p4,{children:['No friends found matching "',o,'". Try a different search term.']}):s.jsx(p4,{children:"All your friends are already members of this group, or you don't have any friends to add yet."})}):s.jsx(RE,{children:u.map(N=>s.jsxs(OE,{children:[s.jsxs(BE,{children:[s.jsx(kt,{image:N.avatar,userName:N.fullName,status:"offline",size:40}),s.jsxs(_E,{children:[s.jsx(UE,{children:N.fullName}),s.jsxs(YE,{children:["@",N.username]})]})]}),s.jsx(GE,{children:y.has(N._id)?s.jsxs($E,{children:[s.jsx(Ib,{}),s.jsx("span",{children:"Added"})]}):s.jsxs(QE,{onClick:()=>O(N._id),disabled:x,children:[s.jsx(L1,{}),s.jsx("span",{children:"Add"})]})})]},N._id))})]}),s.jsx(HE,{children:s.jsx(Ct,{variant:"primary",title:"Done",onClick:D})})]})})},kE=g.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,EE=g.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,TE=g.div`
  position: relative;
  display: flex;
  align-items: center;
`,NE=g.div`
  position: absolute;
  left: 1.2rem;
  z-index: 1;
  color: ${({theme:e})=>e.text.placeholder};
  
  svg {
    width: 2rem;
    height: 2rem;
  }
`,IE=g.div`
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
`,DE=g.div`
  background-color: #fee2e2;
  border: 1px solid #fecaca;
  color: #dc2626;
  padding: 1rem 1.5rem;
  border-radius: 0.8rem;
  font-size: var(--text-sm);
  text-align: center;
`,AE=g.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,zE=g.div`
  h4 {
    font-size: var(--text-md);
    color: ${({theme:e})=>e.text.secondary};
    font-weight: 600;
    margin: 0;
  }
`,RE=g.div`
  display: flex;
  flex-direction: column;
  max-height: 40rem;
  overflow-y: auto;
  gap: 0.5rem;
`,OE=g.div`
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
`,BE=g.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
  min-width: 0;
`,_E=g.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  min-width: 0;
`,UE=g.div`
  font-size: var(--text-md);
  color: ${({theme:e})=>e.text.primary};
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,YE=g.div`
  font-size: var(--text-sm);
  color: ${({theme:e})=>e.text.secondary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,GE=g.div`
  display: flex;
  align-items: center;
`,QE=g.button`
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
`,$E=g.div`
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
`,PE=g.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
  text-align: center;
`,p4=g.div`
  color: ${({theme:e})=>e.text.secondary};
  font-size: var(--text-md);
  line-height: 1.5;
`,HE=g.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 1rem;
  border-top: 1px solid ${({theme:e})=>e.border.secondary};
`,ZE=({group:e,memberCount:a,userRole:r,onToggleMembersSidebar:o})=>{const[l,u]=m.useState(!1),[h,b]=m.useState(!1),[p,y]=m.useState(!1),{leaveGroup:v}=Da(),x=async()=>{try{await v(e._id),u(!1)}catch(S){console.error("Failed to leave group:",S)}},j=r==="admin"||r==="moderator",C=[{label:"Group Info",icon:s.jsx(HC,{}),onClick:()=>{b(!0),u(!1)}},...j?[{label:"Add Members",icon:s.jsx(ck,{}),onClick:()=>{y(!0),u(!1)}}]:[],{label:"Group Settings",icon:s.jsx(Ho,{}),onClick:()=>{u(!1),alert("Group settings not implemented yet")}},{label:"Leave Group",icon:s.jsx(Rb,{}),danger:!0,onClick:x}];return s.jsxs(s.Fragment,{children:[s.jsxs(JE,{children:[s.jsxs(FE,{onClick:()=>b(!0),children:[s.jsx(qE,{children:e.avatar?s.jsx(kt,{image:e.avatar,userName:e.name,size:40,isGroup:!0}):s.jsx(VE,{children:s.jsx(Pl,{})})}),s.jsxs(XE,{children:[s.jsx(WE,{children:e.name}),s.jsxs(KE,{children:[a," member",a!==1?"s":"",e.isPrivate&&s.jsx(eT,{children:"Private"})]})]})]}),s.jsxs(tT,{children:[s.jsx(y4,{onClick:o,title:"Show members",children:s.jsx(hk,{})}),s.jsx(y4,{onClick:()=>u(!0),title:"Group menu",children:s.jsx(Ob,{})})]}),s.jsx(Ia,{onClose:()=>u(!1),isOpen:l,right:"0",top:"100",items:C})]}),h&&s.jsx(fE,{group:e,memberCount:a,userRole:r,isOpen:h,onClose:()=>b(!1)}),p&&j&&s.jsx(CE,{group:e,isOpen:p,onClose:()=>y(!1)})]})},JE=g.header`
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
`,FE=g.div`
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
`,qE=g.div`
  flex-shrink: 0;
`,VE=g.div`
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
`,XE=g.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  min-width: 0;
`,WE=g.h3`
  font-size: var(--text-lg);
  font-weight: 600;
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,KE=g.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: var(--text-sm);
  color: ${({theme:e})=>e.text.secondary};
`,eT=g.span`
  background-color: var(--blue);
  color: white;
  padding: 0.2rem 0.6rem;
  border-radius: 1rem;
  font-size: var(--text-xs);
  font-weight: 500;
`,tT=g.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,y4=g.button`
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
`;function K0(e){return[].concat(e)}function D1(e){return e.startsWith(":")}function c3(e){return Fl(e)&&(e==="*"||e.length>1&&":>~.+*".includes(e.slice(0,1))||m3(e))}function u3(e,a){return(Fl(a)||typeof a=="number")&&!h3(e)&&!D1(e)&&!d3(e)}function d3(e){return e.startsWith("@media")}function nT(e){return e==="."}function h3(e){return e==="--"}function Fl(e){return e+""===e}function m3(e){return Fl(e)&&(e.startsWith("&")||D1(e))}function Ml(e,a=""){return e.filter(Boolean).join(a)}function g3(e,a){let r=0;if(a.length===0)return r.toString();for(let o=0;o<a.length;o++){const l=a.charCodeAt(o);r=(r<<5)-r+l,r=r&r}return`${e??"cl"}_${r.toString(36)}`}function aT(e,a){return e==="content"?`"${a}"`:a}function rT(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function b4(e,a){return`${e}:${a}`}function iT(e){return e?`.${e}`:""}function oT(e,a){return e?`${e}
${a}`:a}var p3=class y3{constructor(a,r,o,l){this.sheet=a,this.property=r,this.value=o,this.selector=l,this.property=r,this.value=o,this.joined=b4(r,o);const u=this.selector.preconditions.concat(this.selector.postconditions);this.hash=this.selector.hasConditions?this.selector.scopeClassName:g3(this.sheet.name,this.joined),this.key=Ml([this.joined,u,this.hash])}toString(){let a=e1(this.selector.preconditions,{right:this.hash});return a=e1(this.selector.postconditions,{left:a}),`${a} {${y3.genRule(this.property,this.value)}}`}static genRule(a,r){const o=rT(a);return b4(o,aT(a,r))+";"}};function e1(e,{left:a="",right:r=""}={}){const o=e.reduce((l,u)=>D1(u)?l+u:m3(u)?l+u.slice(1):Ml([l,u]," "),a);return Ml([o,iT(r)]," ")}var fT=class sl{constructor(a,r=null,{preconditions:o,postconditions:l}={}){this.sheet=a,this.preconditions=[],this.scopeClassName=null,this.scopeName=null,this.postconditions=[],this.preconditions=o?K0(o):[],this.postconditions=l?K0(l):[],this.setScope(r)}setScope(a){return a?(this.scopeClassName||(this.scopeName=a,this.scopeClassName=g3(this.sheet.name,a+this.sheet.count)),this):this}get hasConditions(){return this.preconditions.length>0||this.postconditions.length>0}addScope(a){return new sl(this.sheet,a,{preconditions:this.preconditions,postconditions:this.postconditions})}addPrecondition(a){return new sl(this.sheet,this.scopeClassName,{postconditions:this.postconditions,preconditions:this.preconditions.concat(a)})}addPostcondition(a){return new sl(this.sheet,this.scopeClassName,{preconditions:this.preconditions,postconditions:this.postconditions.concat(a)})}createRule(a,r){return new p3(this.sheet,a,r,this)}},sT=class{constructor(e,a){this.name=e,this.rootNode=a,this.storedStyles={},this.storedClasses={},this.style="",this.count=0,this.id=`flairup-${e}`,this.styleTag=this.createStyleTag()}getStyle(){return this.style}append(e){this.style=oT(this.style,e)}apply(){this.count++,this.styleTag&&(this.styleTag.innerHTML=this.style)}isApplied(){return!!this.styleTag}createStyleTag(){if(typeof document>"u"||this.isApplied()||this.rootNode===null)return this.styleTag;const e=document.createElement("style");return e.type="text/css",e.id=this.id,(this.rootNode??document.head).appendChild(e),e}addRule(e){const a=this.storedClasses[e.key];return Fl(a)?a:(this.storedClasses[e.key]=e.hash,this.storedStyles[e.hash]=[e.property,e.value],this.append(e.toString()),e.hash)}};function A1(e,a){for(const r in e)a(r.trim(),e[r])}function Me(...e){const a=e.reduce((r,o)=>(o instanceof Set?r.push(...o):typeof o=="string"?r.push(o):Array.isArray(o)?r.push(Me(...o)):typeof o=="object"&&Object.entries(o).forEach(([l,u])=>{u&&r.push(l)}),r),[]);return Ml(a," ").trim()}function lT(e,a){const r=new sT(e,a);return{create:o,getStyle:r.getStyle.bind(r),isApplied:r.isApplied.bind(r)};function o(l){const u={};return b3(r,l,new fT(r)).forEach(([b,p,y])=>{ql(r,p,y).forEach(v=>{h(b,v)})}),r.apply(),u;function h(b,p){u[b]=u[b]??new Set,u[b].add(p)}}}function b3(e,a,r){const o=[];return A1(a,(l,u)=>{if(c3(l))return b3(e,u,r.addPrecondition(l)).forEach(h=>o.push(h));o.push([l,a[l],r.addScope(l)])}),o}function ql(e,a,r){const o=new Set;return A1(a,(l,u)=>{let h=[];if(c3(l))h=ql(e,u,r.addPostcondition(l));else if(nT(l))h=K0(u);else if(d3(l))h=uT(e,u,l,r);else if(h3(l))h=cT(e,u,r);else if(u3(l,u)){const b=r.createRule(l,u);e.addRule(b),o.add(b.hash)}return w3(h,o)}),o}function w3(e,a){return e.forEach(r=>a.add(r)),a}function cT(e,a,r){const o=new Set,l=[];if(A1(a,(u,h)=>{if(u3(u,h)){l.push(p3.genRule(u,h));return}const b=ql(e,h??{},r);w3(b,o)}),!r.scopeClassName)return o;if(l.length){const u=l.join(" ");e.append(`${e1(r.preconditions,{right:r.scopeClassName})} {${u}}`)}return o.add(r.scopeClassName),o}function uT(e,a,r,o){e.append(r+" {");const l=ql(e,a,o);return e.append("}"),l}function He(){return He=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},He.apply(this,arguments)}function dT(e,a){e.prototype=Object.create(a.prototype),e.prototype.constructor=e,t1(e,a)}function t1(e,a){return t1=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,l){return o.__proto__=l,o},t1(e,a)}function v3(e,a){if(e==null)return{};var r={},o=Object.keys(e),l,u;for(u=0;u<o.length;u++)l=o[u],!(a.indexOf(l)>=0)&&(r[l]=e[l]);return r}function hT(e,a){if(e){if(typeof e=="string")return w4(e,a);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return w4(e,a)}}function w4(e,a){(a==null||a>e.length)&&(a=e.length);for(var r=0,o=new Array(a);r<a;r++)o[r]=e[r];return o}function mT(e,a){var r=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=hT(e))||a){r&&(e=r);var o=0;return function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var be;(function(e){e.hiddenOnSearch="epr-hidden-on-search",e.searchActive="epr-search-active",e.hidden="epr-hidden",e.visible="epr-visible",e.active="epr-active",e.emoji="epr-emoji",e.category="epr-emoji-category",e.label="epr-emoji-category-label",e.categoryContent="epr-emoji-category-content",e.emojiHasVariations="epr-emoji-has-variations",e.scrollBody="epr-body",e.emojiList="epr-emoji-list",e.external="__EmojiPicker__",e.emojiPicker="EmojiPickerReact",e.open="epr-open",e.vertical="epr-vertical",e.horizontal="epr-horizontal",e.variationPicker="epr-emoji-variation-picker",e.darkTheme="epr-dark-theme",e.autoTheme="epr-auto-theme"})(be||(be={}));function jt(){for(var e=arguments.length,a=new Array(e),r=0;r<e;r++)a[r]=arguments[r];return a.map(function(o){return"."+o}).join("")}var $e=lT("epr",null),ll={display:"none",opacity:"0",pointerEvents:"none",visibility:"hidden",overflow:"hidden"},z1=$e.create({hidden:He({".":be.hidden},ll)}),gT=m.memo(function(){return m.createElement("style",{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:$e.getStyle()}})}),ur=$e.create({".epr-main":{":has(input:not(:placeholder-shown))":{categoryBtn:{":hover":{opacity:"1",backgroundPositionY:"var(--epr-category-navigation-button-size)"}},hiddenOnSearch:He({".":be.hiddenOnSearch},ll)},":has(input(:placeholder-shown))":{visibleOnSearchOnly:ll}},hiddenOnReactions:{transition:"all 0.5s ease-in-out"},".epr-reactions":{hiddenOnReactions:{height:"0px",width:"0px",opacity:"0",pointerEvents:"none",overflow:"hidden"}},".EmojiPickerReact:not(.epr-search-active)":{categoryBtn:{":hover":{opacity:"1",backgroundPositionY:"var(--epr-category-navigation-button-size)"},"&.epr-active":{opacity:"1",backgroundPositionY:"var(--epr-category-navigation-button-size)"}},visibleOnSearchOnly:He({".":"epr-visible-on-search-only"},ll)}});function Ta(e,a){var r,o;return{".epr-dark-theme":(r={},r[e]=a,r),".epr-auto-theme":(o={},o[e]={"@media (prefers-color-scheme: dark)":a},o)}}function x3(e,a){var r,o,l=(r=e.customEmojis)!=null?r:[],u=(o=a.customEmojis)!=null?o:[];return e.open===a.open&&e.emojiVersion===a.emojiVersion&&e.reactionsDefaultOpen===a.reactionsDefaultOpen&&e.searchPlaceHolder===a.searchPlaceHolder&&e.searchPlaceholder===a.searchPlaceholder&&e.defaultSkinTone===a.defaultSkinTone&&e.skinTonesDisabled===a.skinTonesDisabled&&e.autoFocusSearch===a.autoFocusSearch&&e.emojiStyle===a.emojiStyle&&e.theme===a.theme&&e.suggestedEmojisMode===a.suggestedEmojisMode&&e.lazyLoadEmojis===a.lazyLoadEmojis&&e.className===a.className&&e.height===a.height&&e.width===a.width&&e.style===a.style&&e.searchDisabled===a.searchDisabled&&e.skinTonePickerLocation===a.skinTonePickerLocation&&l.length===u.length}var pT=["1f44d","2764-fe0f","1f603","1f622","1f64f","1f44e","1f621"],Jo;(function(e){e.RECENT="recent",e.FREQUENT="frequent"})(Jo||(Jo={}));var Zt;(function(e){e.NATIVE="native",e.APPLE="apple",e.TWITTER="twitter",e.GOOGLE="google",e.FACEBOOK="facebook"})(Zt||(Zt={}));var Fo;(function(e){e.DARK="dark",e.LIGHT="light",e.AUTO="auto"})(Fo||(Fo={}));var bn;(function(e){e.NEUTRAL="neutral",e.LIGHT="1f3fb",e.MEDIUM_LIGHT="1f3fc",e.MEDIUM="1f3fd",e.MEDIUM_DARK="1f3fe",e.DARK="1f3ff"})(bn||(bn={}));var ye;(function(e){e.SUGGESTED="suggested",e.CUSTOM="custom",e.SMILEYS_PEOPLE="smileys_people",e.ANIMALS_NATURE="animals_nature",e.FOOD_DRINK="food_drink",e.TRAVEL_PLACES="travel_places",e.ACTIVITIES="activities",e.OBJECTS="objects",e.SYMBOLS="symbols",e.FLAGS="flags"})(ye||(ye={}));var di;(function(e){e.SEARCH="SEARCH",e.PREVIEW="PREVIEW"})(di||(di={}));var on,yT=[ye.SUGGESTED,ye.CUSTOM,ye.SMILEYS_PEOPLE,ye.ANIMALS_NATURE,ye.FOOD_DRINK,ye.TRAVEL_PLACES,ye.ACTIVITIES,ye.OBJECTS,ye.SYMBOLS,ye.FLAGS],bT={name:"Recently Used",category:ye.SUGGESTED},M3=(on={},on[ye.SUGGESTED]={category:ye.SUGGESTED,name:"Frequently Used"},on[ye.CUSTOM]={category:ye.CUSTOM,name:"Custom Emojis"},on[ye.SMILEYS_PEOPLE]={category:ye.SMILEYS_PEOPLE,name:"Smileys & People"},on[ye.ANIMALS_NATURE]={category:ye.ANIMALS_NATURE,name:"Animals & Nature"},on[ye.FOOD_DRINK]={category:ye.FOOD_DRINK,name:"Food & Drink"},on[ye.TRAVEL_PLACES]={category:ye.TRAVEL_PLACES,name:"Travel & Places"},on[ye.ACTIVITIES]={category:ye.ACTIVITIES,name:"Activities"},on[ye.OBJECTS]={category:ye.OBJECTS,name:"Objects"},on[ye.SYMBOLS]={category:ye.SYMBOLS,name:"Symbols"},on[ye.FLAGS]={category:ye.FLAGS,name:"Flags"},on);function j3(e){return yT.map(function(a){return He({},M3[a],e&&e[a]&&e[a])})}function R1(e){return e.category}function L3(e){return e.name}function wT(e,a){var r;e===void 0&&(e=[]),a===void 0&&(a={});var o={};a.suggestionMode===Jo.RECENT&&(o[ye.SUGGESTED]=bT);var l=j3(o);return(r=e)!=null&&r.length?e.map(function(u){return typeof u=="string"?v4(u,o[u]):He({},v4(u.category,o[u.category]),u)}):l}function v4(e,a){return a===void 0&&(a={}),Object.assign(M3[e],a)}var vT="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/",xT="https://cdn.jsdelivr.net/npm/emoji-datasource-facebook/img/facebook/64/",MT="https://cdn.jsdelivr.net/npm/emoji-datasource-twitter/img/twitter/64/",jT="https://cdn.jsdelivr.net/npm/emoji-datasource-google/img/google/64/";function LT(e){switch(e){case Zt.TWITTER:return MT;case Zt.GOOGLE:return jT;case Zt.FACEBOOK:return xT;case Zt.APPLE:default:return vT}}var ST=[],CT=[{n:["grinning","grinning face"],u:"1f600",a:"1.0"},{n:["smiley","smiling face with open mouth"],u:"1f603",a:"0.6"},{n:["smile","smiling face with open mouth and smiling eyes"],u:"1f604",a:"0.6"},{n:["grin","grinning face with smiling eyes"],u:"1f601",a:"0.6"},{n:["laughing","satisfied","smiling face with open mouth and tightly-closed eyes"],u:"1f606",a:"0.6"},{n:["sweat smile","smiling face with open mouth and cold sweat"],u:"1f605",a:"0.6"},{n:["rolling on the floor laughing"],u:"1f923",a:"3.0"},{n:["joy","face with tears of joy"],u:"1f602",a:"0.6"},{n:["slightly smiling face"],u:"1f642",a:"1.0"},{n:["upside-down face","upside down face"],u:"1f643",a:"1.0"},{n:["melting face"],u:"1fae0",a:"14.0"},{n:["wink","winking face"],u:"1f609",a:"0.6"},{n:["blush","smiling face with smiling eyes"],u:"1f60a",a:"0.6"},{n:["innocent","smiling face with halo"],u:"1f607",a:"1.0"},{n:["smiling face with 3 hearts","smiling face with smiling eyes and three hearts"],u:"1f970",a:"11.0"},{n:["heart eyes","smiling face with heart-shaped eyes"],u:"1f60d",a:"0.6"},{n:["star-struck","grinning face with star eyes"],u:"1f929",a:"5.0"},{n:["kissing heart","face throwing a kiss"],u:"1f618",a:"0.6"},{n:["kissing","kissing face"],u:"1f617",a:"1.0"},{n:["relaxed","white smiling face"],u:"263a-fe0f",a:"0.6"},{n:["kissing closed eyes","kissing face with closed eyes"],u:"1f61a",a:"0.6"},{n:["kissing smiling eyes","kissing face with smiling eyes"],u:"1f619",a:"1.0"},{n:["smiling face with tear"],u:"1f972",a:"13.0"},{n:["yum","face savouring delicious food"],u:"1f60b",a:"0.6"},{n:["stuck out tongue","face with stuck-out tongue"],u:"1f61b",a:"1.0"},{n:["stuck out tongue winking eye","face with stuck-out tongue and winking eye"],u:"1f61c",a:"0.6"},{n:["zany face","grinning face with one large and one small eye"],u:"1f92a",a:"5.0"},{n:["stuck out tongue closed eyes","face with stuck-out tongue and tightly-closed eyes"],u:"1f61d",a:"0.6"},{n:["money-mouth face","money mouth face"],u:"1f911",a:"1.0"},{n:["hugging face"],u:"1f917",a:"1.0"},{n:["face with hand over mouth","smiling face with smiling eyes and hand covering mouth"],u:"1f92d",a:"5.0"},{n:["face with open eyes and hand over mouth"],u:"1fae2",a:"14.0"},{n:["face with peeking eye"],u:"1fae3",a:"14.0"},{n:["shushing face","face with finger covering closed lips"],u:"1f92b",a:"5.0"},{n:["thinking face"],u:"1f914",a:"1.0"},{n:["saluting face"],u:"1fae1",a:"14.0"},{n:["zipper-mouth face","zipper mouth face"],u:"1f910",a:"1.0"},{n:["face with raised eyebrow","face with one eyebrow raised"],u:"1f928",a:"5.0"},{n:["neutral face"],u:"1f610",a:"0.7"},{n:["expressionless","expressionless face"],u:"1f611",a:"1.0"},{n:["no mouth","face without mouth"],u:"1f636",a:"1.0"},{n:["dotted line face"],u:"1fae5",a:"14.0"},{n:["face in clouds"],u:"1f636-200d-1f32b-fe0f",a:"13.1"},{n:["smirk","smirking face"],u:"1f60f",a:"0.6"},{n:["unamused","unamused face"],u:"1f612",a:"0.6"},{n:["face with rolling eyes"],u:"1f644",a:"1.0"},{n:["grimacing","grimacing face"],u:"1f62c",a:"1.0"},{n:["face exhaling"],u:"1f62e-200d-1f4a8",a:"13.1"},{n:["lying face"],u:"1f925",a:"3.0"},{n:["relieved","relieved face"],u:"1f60c",a:"0.6"},{n:["pensive","pensive face"],u:"1f614",a:"0.6"},{n:["sleepy","sleepy face"],u:"1f62a",a:"0.6"},{n:["drooling face"],u:"1f924",a:"3.0"},{n:["sleeping","sleeping face"],u:"1f634",a:"1.0"},{n:["mask","face with medical mask"],u:"1f637",a:"0.6"},{n:["face with thermometer"],u:"1f912",a:"1.0"},{n:["face with head-bandage","face with head bandage"],u:"1f915",a:"1.0"},{n:["nauseated face"],u:"1f922",a:"3.0"},{n:["face vomiting","face with open mouth vomiting"],u:"1f92e",a:"5.0"},{n:["sneezing face"],u:"1f927",a:"3.0"},{n:["hot face","overheated face"],u:"1f975",a:"11.0"},{n:["cold face","freezing face"],u:"1f976",a:"11.0"},{n:["woozy face","face with uneven eyes and wavy mouth"],u:"1f974",a:"11.0"},{n:["dizzy face"],u:"1f635",a:"0.6"},{n:["face with spiral eyes"],u:"1f635-200d-1f4ab",a:"13.1"},{n:["exploding head","shocked face with exploding head"],u:"1f92f",a:"5.0"},{n:["face with cowboy hat"],u:"1f920",a:"3.0"},{n:["partying face","face with party horn and party hat"],u:"1f973",a:"11.0"},{n:["disguised face"],u:"1f978",a:"13.0"},{n:["sunglasses","smiling face with sunglasses"],u:"1f60e",a:"1.0"},{n:["nerd face"],u:"1f913",a:"1.0"},{n:["face with monocle"],u:"1f9d0",a:"5.0"},{n:["confused","confused face"],u:"1f615",a:"1.0"},{n:["face with diagonal mouth"],u:"1fae4",a:"14.0"},{n:["worried","worried face"],u:"1f61f",a:"1.0"},{n:["slightly frowning face"],u:"1f641",a:"1.0"},{n:["frowning face","white frowning face"],u:"2639-fe0f",a:"0.7"},{n:["open mouth","face with open mouth"],u:"1f62e",a:"1.0"},{n:["hushed","hushed face"],u:"1f62f",a:"1.0"},{n:["astonished","astonished face"],u:"1f632",a:"0.6"},{n:["flushed","flushed face"],u:"1f633",a:"0.6"},{n:["pleading face","face with pleading eyes"],u:"1f97a",a:"11.0"},{n:["face holding back tears"],u:"1f979",a:"14.0"},{n:["frowning","frowning face with open mouth"],u:"1f626",a:"1.0"},{n:["anguished","anguished face"],u:"1f627",a:"1.0"},{n:["fearful","fearful face"],u:"1f628",a:"0.6"},{n:["cold sweat","face with open mouth and cold sweat"],u:"1f630",a:"0.6"},{n:["disappointed relieved","disappointed but relieved face"],u:"1f625",a:"0.6"},{n:["cry","crying face"],u:"1f622",a:"0.6"},{n:["sob","loudly crying face"],u:"1f62d",a:"0.6"},{n:["scream","face screaming in fear"],u:"1f631",a:"0.6"},{n:["confounded","confounded face"],u:"1f616",a:"0.6"},{n:["persevere","persevering face"],u:"1f623",a:"0.6"},{n:["disappointed","disappointed face"],u:"1f61e",a:"0.6"},{n:["sweat","face with cold sweat"],u:"1f613",a:"0.6"},{n:["weary","weary face"],u:"1f629",a:"0.6"},{n:["tired face"],u:"1f62b",a:"0.6"},{n:["yawning face"],u:"1f971",a:"12.0"},{n:["triumph","face with look of triumph"],u:"1f624",a:"0.6"},{n:["rage","pouting face"],u:"1f621",a:"0.6"},{n:["angry","angry face"],u:"1f620",a:"0.6"},{n:["face with symbols on mouth","serious face with symbols covering mouth"],u:"1f92c",a:"5.0"},{n:["smiling imp","smiling face with horns"],u:"1f608",a:"1.0"},{n:["imp"],u:"1f47f",a:"0.6"},{n:["skull"],u:"1f480",a:"0.6"},{n:["skull and crossbones"],u:"2620-fe0f",a:"1.0"},{n:["poop","shit","hankey","pile of poo"],u:"1f4a9",a:"0.6"},{n:["clown face"],u:"1f921",a:"3.0"},{n:["japanese ogre"],u:"1f479",a:"0.6"},{n:["japanese goblin"],u:"1f47a",a:"0.6"},{n:["ghost"],u:"1f47b",a:"0.6"},{n:["alien","extraterrestrial alien"],u:"1f47d",a:"0.6"},{n:["alien monster","space invader"],u:"1f47e",a:"0.6"},{n:["robot face"],u:"1f916",a:"1.0"},{n:["smiley cat","smiling cat face with open mouth"],u:"1f63a",a:"0.6"},{n:["smile cat","grinning cat face with smiling eyes"],u:"1f638",a:"0.6"},{n:["joy cat","cat face with tears of joy"],u:"1f639",a:"0.6"},{n:["heart eyes cat","smiling cat face with heart-shaped eyes"],u:"1f63b",a:"0.6"},{n:["smirk cat","cat face with wry smile"],u:"1f63c",a:"0.6"},{n:["kissing cat","kissing cat face with closed eyes"],u:"1f63d",a:"0.6"},{n:["scream cat","weary cat face"],u:"1f640",a:"0.6"},{n:["crying cat face"],u:"1f63f",a:"0.6"},{n:["pouting cat","pouting cat face"],u:"1f63e",a:"0.6"},{n:["see no evil","see-no-evil monkey"],u:"1f648",a:"0.6"},{n:["hear no evil","hear-no-evil monkey"],u:"1f649",a:"0.6"},{n:["speak no evil","speak-no-evil monkey"],u:"1f64a",a:"0.6"},{n:["kiss","kiss mark"],u:"1f48b",a:"0.6"},{n:["love letter"],u:"1f48c",a:"0.6"},{n:["cupid","heart with arrow"],u:"1f498",a:"0.6"},{n:["gift heart","heart with ribbon"],u:"1f49d",a:"0.6"},{n:["sparkling heart"],u:"1f496",a:"0.6"},{n:["heartpulse","growing heart"],u:"1f497",a:"0.6"},{n:["heartbeat","beating heart"],u:"1f493",a:"0.6"},{n:["revolving hearts"],u:"1f49e",a:"0.6"},{n:["two hearts"],u:"1f495",a:"0.6"},{n:["heart decoration"],u:"1f49f",a:"0.6"},{n:["heart exclamation","heavy heart exclamation mark ornament"],u:"2763-fe0f",a:"1.0"},{n:["broken heart"],u:"1f494",a:"0.6"},{n:["heart on fire"],u:"2764-fe0f-200d-1f525",a:"13.1"},{n:["mending heart"],u:"2764-fe0f-200d-1fa79",a:"13.1"},{n:["heart","heavy black heart"],u:"2764-fe0f",a:"0.6"},{n:["orange heart"],u:"1f9e1",a:"5.0"},{n:["yellow heart"],u:"1f49b",a:"0.6"},{n:["green heart"],u:"1f49a",a:"0.6"},{n:["blue heart"],u:"1f499",a:"0.6"},{n:["purple heart"],u:"1f49c",a:"0.6"},{n:["brown heart"],u:"1f90e",a:"12.0"},{n:["black heart"],u:"1f5a4",a:"3.0"},{n:["white heart"],u:"1f90d",a:"12.0"},{n:["100","hundred points symbol"],u:"1f4af",a:"0.6"},{n:["anger","anger symbol"],u:"1f4a2",a:"0.6"},{n:["boom","collision","collision symbol"],u:"1f4a5",a:"0.6"},{n:["dizzy","dizzy symbol"],u:"1f4ab",a:"0.6"},{n:["sweat drops","splashing sweat symbol"],u:"1f4a6",a:"0.6"},{n:["dash","dash symbol"],u:"1f4a8",a:"0.6"},{n:["hole"],u:"1f573-fe0f",a:"0.7"},{n:["bomb"],u:"1f4a3",a:"0.6"},{n:["speech balloon"],u:"1f4ac",a:"0.6"},{n:["eye in speech bubble","eye-in-speech-bubble"],u:"1f441-fe0f-200d-1f5e8-fe0f",a:"2.0"},{n:["left speech bubble"],u:"1f5e8-fe0f",a:"2.0"},{n:["right anger bubble"],u:"1f5ef-fe0f",a:"0.7"},{n:["thought balloon"],u:"1f4ad",a:"1.0"},{n:["zzz","sleeping symbol"],u:"1f4a4",a:"0.6"},{n:["wave","waving hand sign"],u:"1f44b",v:["1f44b-1f3fb","1f44b-1f3fc","1f44b-1f3fd","1f44b-1f3fe","1f44b-1f3ff"],a:"0.6"},{n:["raised back of hand"],u:"1f91a",v:["1f91a-1f3fb","1f91a-1f3fc","1f91a-1f3fd","1f91a-1f3fe","1f91a-1f3ff"],a:"3.0"},{n:["hand with fingers splayed","raised hand with fingers splayed"],u:"1f590-fe0f",v:["1f590-1f3fb","1f590-1f3fc","1f590-1f3fd","1f590-1f3fe","1f590-1f3ff"],a:"0.7"},{n:["hand","raised hand"],u:"270b",v:["270b-1f3fb","270b-1f3fc","270b-1f3fd","270b-1f3fe","270b-1f3ff"],a:"0.6"},{n:["spock-hand","raised hand with part between middle and ring fingers"],u:"1f596",v:["1f596-1f3fb","1f596-1f3fc","1f596-1f3fd","1f596-1f3fe","1f596-1f3ff"],a:"1.0"},{n:["rightwards hand"],u:"1faf1",v:["1faf1-1f3fb","1faf1-1f3fc","1faf1-1f3fd","1faf1-1f3fe","1faf1-1f3ff"],a:"14.0"},{n:["leftwards hand"],u:"1faf2",v:["1faf2-1f3fb","1faf2-1f3fc","1faf2-1f3fd","1faf2-1f3fe","1faf2-1f3ff"],a:"14.0"},{n:["palm down hand"],u:"1faf3",v:["1faf3-1f3fb","1faf3-1f3fc","1faf3-1f3fd","1faf3-1f3fe","1faf3-1f3ff"],a:"14.0"},{n:["palm up hand"],u:"1faf4",v:["1faf4-1f3fb","1faf4-1f3fc","1faf4-1f3fd","1faf4-1f3fe","1faf4-1f3ff"],a:"14.0"},{n:["ok hand","ok hand sign"],u:"1f44c",v:["1f44c-1f3fb","1f44c-1f3fc","1f44c-1f3fd","1f44c-1f3fe","1f44c-1f3ff"],a:"0.6"},{n:["pinched fingers"],u:"1f90c",v:["1f90c-1f3fb","1f90c-1f3fc","1f90c-1f3fd","1f90c-1f3fe","1f90c-1f3ff"],a:"13.0"},{n:["pinching hand"],u:"1f90f",v:["1f90f-1f3fb","1f90f-1f3fc","1f90f-1f3fd","1f90f-1f3fe","1f90f-1f3ff"],a:"12.0"},{n:["v","victory hand"],u:"270c-fe0f",v:["270c-1f3fb","270c-1f3fc","270c-1f3fd","270c-1f3fe","270c-1f3ff"],a:"0.6"},{n:["crossed fingers","hand with index and middle fingers crossed"],u:"1f91e",v:["1f91e-1f3fb","1f91e-1f3fc","1f91e-1f3fd","1f91e-1f3fe","1f91e-1f3ff"],a:"3.0"},{n:["hand with index finger and thumb crossed"],u:"1faf0",v:["1faf0-1f3fb","1faf0-1f3fc","1faf0-1f3fd","1faf0-1f3fe","1faf0-1f3ff"],a:"14.0"},{n:["i love you hand sign"],u:"1f91f",v:["1f91f-1f3fb","1f91f-1f3fc","1f91f-1f3fd","1f91f-1f3fe","1f91f-1f3ff"],a:"5.0"},{n:["the horns","sign of the horns"],u:"1f918",v:["1f918-1f3fb","1f918-1f3fc","1f918-1f3fd","1f918-1f3fe","1f918-1f3ff"],a:"1.0"},{n:["call me hand"],u:"1f919",v:["1f919-1f3fb","1f919-1f3fc","1f919-1f3fd","1f919-1f3fe","1f919-1f3ff"],a:"3.0"},{n:["point left","white left pointing backhand index"],u:"1f448",v:["1f448-1f3fb","1f448-1f3fc","1f448-1f3fd","1f448-1f3fe","1f448-1f3ff"],a:"0.6"},{n:["point right","white right pointing backhand index"],u:"1f449",v:["1f449-1f3fb","1f449-1f3fc","1f449-1f3fd","1f449-1f3fe","1f449-1f3ff"],a:"0.6"},{n:["point up 2","white up pointing backhand index"],u:"1f446",v:["1f446-1f3fb","1f446-1f3fc","1f446-1f3fd","1f446-1f3fe","1f446-1f3ff"],a:"0.6"},{n:["middle finger","reversed hand with middle finger extended"],u:"1f595",v:["1f595-1f3fb","1f595-1f3fc","1f595-1f3fd","1f595-1f3fe","1f595-1f3ff"],a:"1.0"},{n:["point down","white down pointing backhand index"],u:"1f447",v:["1f447-1f3fb","1f447-1f3fc","1f447-1f3fd","1f447-1f3fe","1f447-1f3ff"],a:"0.6"},{n:["point up","white up pointing index"],u:"261d-fe0f",v:["261d-1f3fb","261d-1f3fc","261d-1f3fd","261d-1f3fe","261d-1f3ff"],a:"0.6"},{n:["index pointing at the viewer"],u:"1faf5",v:["1faf5-1f3fb","1faf5-1f3fc","1faf5-1f3fd","1faf5-1f3fe","1faf5-1f3ff"],a:"14.0"},{n:["+1","thumbsup","thumbs up sign"],u:"1f44d",v:["1f44d-1f3fb","1f44d-1f3fc","1f44d-1f3fd","1f44d-1f3fe","1f44d-1f3ff"],a:"0.6"},{n:["-1","thumbsdown","thumbs down sign"],u:"1f44e",v:["1f44e-1f3fb","1f44e-1f3fc","1f44e-1f3fd","1f44e-1f3fe","1f44e-1f3ff"],a:"0.6"},{n:["fist","raised fist"],u:"270a",v:["270a-1f3fb","270a-1f3fc","270a-1f3fd","270a-1f3fe","270a-1f3ff"],a:"0.6"},{n:["punch","facepunch","fisted hand sign"],u:"1f44a",v:["1f44a-1f3fb","1f44a-1f3fc","1f44a-1f3fd","1f44a-1f3fe","1f44a-1f3ff"],a:"0.6"},{n:["left-facing fist"],u:"1f91b",v:["1f91b-1f3fb","1f91b-1f3fc","1f91b-1f3fd","1f91b-1f3fe","1f91b-1f3ff"],a:"3.0"},{n:["right-facing fist"],u:"1f91c",v:["1f91c-1f3fb","1f91c-1f3fc","1f91c-1f3fd","1f91c-1f3fe","1f91c-1f3ff"],a:"3.0"},{n:["clap","clapping hands sign"],u:"1f44f",v:["1f44f-1f3fb","1f44f-1f3fc","1f44f-1f3fd","1f44f-1f3fe","1f44f-1f3ff"],a:"0.6"},{n:["raised hands","person raising both hands in celebration"],u:"1f64c",v:["1f64c-1f3fb","1f64c-1f3fc","1f64c-1f3fd","1f64c-1f3fe","1f64c-1f3ff"],a:"0.6"},{n:["heart hands"],u:"1faf6",v:["1faf6-1f3fb","1faf6-1f3fc","1faf6-1f3fd","1faf6-1f3fe","1faf6-1f3ff"],a:"14.0"},{n:["open hands","open hands sign"],u:"1f450",v:["1f450-1f3fb","1f450-1f3fc","1f450-1f3fd","1f450-1f3fe","1f450-1f3ff"],a:"0.6"},{n:["palms up together"],u:"1f932",v:["1f932-1f3fb","1f932-1f3fc","1f932-1f3fd","1f932-1f3fe","1f932-1f3ff"],a:"5.0"},{n:["handshake"],u:"1f91d",v:["1f91d-1f3fb","1f91d-1f3fc","1f91d-1f3fd","1f91d-1f3fe","1f91d-1f3ff","1faf1-1f3fb-200d-1faf2-1f3fc","1faf1-1f3fb-200d-1faf2-1f3fd","1faf1-1f3fb-200d-1faf2-1f3fe","1faf1-1f3fb-200d-1faf2-1f3ff","1faf1-1f3fc-200d-1faf2-1f3fb","1faf1-1f3fc-200d-1faf2-1f3fd","1faf1-1f3fc-200d-1faf2-1f3fe","1faf1-1f3fc-200d-1faf2-1f3ff","1faf1-1f3fd-200d-1faf2-1f3fb","1faf1-1f3fd-200d-1faf2-1f3fc","1faf1-1f3fd-200d-1faf2-1f3fe","1faf1-1f3fd-200d-1faf2-1f3ff","1faf1-1f3fe-200d-1faf2-1f3fb","1faf1-1f3fe-200d-1faf2-1f3fc","1faf1-1f3fe-200d-1faf2-1f3fd","1faf1-1f3fe-200d-1faf2-1f3ff","1faf1-1f3ff-200d-1faf2-1f3fb","1faf1-1f3ff-200d-1faf2-1f3fc","1faf1-1f3ff-200d-1faf2-1f3fd","1faf1-1f3ff-200d-1faf2-1f3fe"],a:"3.0"},{n:["pray","person with folded hands"],u:"1f64f",v:["1f64f-1f3fb","1f64f-1f3fc","1f64f-1f3fd","1f64f-1f3fe","1f64f-1f3ff"],a:"0.6"},{n:["writing hand"],u:"270d-fe0f",v:["270d-1f3fb","270d-1f3fc","270d-1f3fd","270d-1f3fe","270d-1f3ff"],a:"0.7"},{n:["nail care","nail polish"],u:"1f485",v:["1f485-1f3fb","1f485-1f3fc","1f485-1f3fd","1f485-1f3fe","1f485-1f3ff"],a:"0.6"},{n:["selfie"],u:"1f933",v:["1f933-1f3fb","1f933-1f3fc","1f933-1f3fd","1f933-1f3fe","1f933-1f3ff"],a:"3.0"},{n:["muscle","flexed biceps"],u:"1f4aa",v:["1f4aa-1f3fb","1f4aa-1f3fc","1f4aa-1f3fd","1f4aa-1f3fe","1f4aa-1f3ff"],a:"0.6"},{n:["mechanical arm"],u:"1f9be",a:"12.0"},{n:["mechanical leg"],u:"1f9bf",a:"12.0"},{n:["leg"],u:"1f9b5",v:["1f9b5-1f3fb","1f9b5-1f3fc","1f9b5-1f3fd","1f9b5-1f3fe","1f9b5-1f3ff"],a:"11.0"},{n:["foot"],u:"1f9b6",v:["1f9b6-1f3fb","1f9b6-1f3fc","1f9b6-1f3fd","1f9b6-1f3fe","1f9b6-1f3ff"],a:"11.0"},{n:["ear"],u:"1f442",v:["1f442-1f3fb","1f442-1f3fc","1f442-1f3fd","1f442-1f3fe","1f442-1f3ff"],a:"0.6"},{n:["ear with hearing aid"],u:"1f9bb",v:["1f9bb-1f3fb","1f9bb-1f3fc","1f9bb-1f3fd","1f9bb-1f3fe","1f9bb-1f3ff"],a:"12.0"},{n:["nose"],u:"1f443",v:["1f443-1f3fb","1f443-1f3fc","1f443-1f3fd","1f443-1f3fe","1f443-1f3ff"],a:"0.6"},{n:["brain"],u:"1f9e0",a:"5.0"},{n:["anatomical heart"],u:"1fac0",a:"13.0"},{n:["lungs"],u:"1fac1",a:"13.0"},{n:["tooth"],u:"1f9b7",a:"11.0"},{n:["bone"],u:"1f9b4",a:"11.0"},{n:["eyes"],u:"1f440",a:"0.6"},{n:["eye"],u:"1f441-fe0f",a:"0.7"},{n:["tongue"],u:"1f445",a:"0.6"},{n:["lips","mouth"],u:"1f444",a:"0.6"},{n:["biting lip"],u:"1fae6",a:"14.0"},{n:["baby"],u:"1f476",v:["1f476-1f3fb","1f476-1f3fc","1f476-1f3fd","1f476-1f3fe","1f476-1f3ff"],a:"0.6"},{n:["child"],u:"1f9d2",v:["1f9d2-1f3fb","1f9d2-1f3fc","1f9d2-1f3fd","1f9d2-1f3fe","1f9d2-1f3ff"],a:"5.0"},{n:["boy"],u:"1f466",v:["1f466-1f3fb","1f466-1f3fc","1f466-1f3fd","1f466-1f3fe","1f466-1f3ff"],a:"0.6"},{n:["girl"],u:"1f467",v:["1f467-1f3fb","1f467-1f3fc","1f467-1f3fd","1f467-1f3fe","1f467-1f3ff"],a:"0.6"},{n:["adult"],u:"1f9d1",v:["1f9d1-1f3fb","1f9d1-1f3fc","1f9d1-1f3fd","1f9d1-1f3fe","1f9d1-1f3ff"],a:"5.0"},{n:["person with blond hair"],u:"1f471",v:["1f471-1f3fb","1f471-1f3fc","1f471-1f3fd","1f471-1f3fe","1f471-1f3ff"],a:"0.6"},{n:["man"],u:"1f468",v:["1f468-1f3fb","1f468-1f3fc","1f468-1f3fd","1f468-1f3fe","1f468-1f3ff"],a:"0.6"},{n:["bearded person"],u:"1f9d4",v:["1f9d4-1f3fb","1f9d4-1f3fc","1f9d4-1f3fd","1f9d4-1f3fe","1f9d4-1f3ff"],a:"5.0"},{n:["man: beard","man with beard"],u:"1f9d4-200d-2642-fe0f",v:["1f9d4-1f3fb-200d-2642-fe0f","1f9d4-1f3fc-200d-2642-fe0f","1f9d4-1f3fd-200d-2642-fe0f","1f9d4-1f3fe-200d-2642-fe0f","1f9d4-1f3ff-200d-2642-fe0f"],a:"13.1"},{n:["woman: beard","woman with beard"],u:"1f9d4-200d-2640-fe0f",v:["1f9d4-1f3fb-200d-2640-fe0f","1f9d4-1f3fc-200d-2640-fe0f","1f9d4-1f3fd-200d-2640-fe0f","1f9d4-1f3fe-200d-2640-fe0f","1f9d4-1f3ff-200d-2640-fe0f"],a:"13.1"},{n:["man: red hair","red haired man"],u:"1f468-200d-1f9b0",v:["1f468-1f3fb-200d-1f9b0","1f468-1f3fc-200d-1f9b0","1f468-1f3fd-200d-1f9b0","1f468-1f3fe-200d-1f9b0","1f468-1f3ff-200d-1f9b0"],a:"11.0"},{n:["man: curly hair","curly haired man"],u:"1f468-200d-1f9b1",v:["1f468-1f3fb-200d-1f9b1","1f468-1f3fc-200d-1f9b1","1f468-1f3fd-200d-1f9b1","1f468-1f3fe-200d-1f9b1","1f468-1f3ff-200d-1f9b1"],a:"11.0"},{n:["man: white hair","white haired man"],u:"1f468-200d-1f9b3",v:["1f468-1f3fb-200d-1f9b3","1f468-1f3fc-200d-1f9b3","1f468-1f3fd-200d-1f9b3","1f468-1f3fe-200d-1f9b3","1f468-1f3ff-200d-1f9b3"],a:"11.0"},{n:["bald man","man: bald"],u:"1f468-200d-1f9b2",v:["1f468-1f3fb-200d-1f9b2","1f468-1f3fc-200d-1f9b2","1f468-1f3fd-200d-1f9b2","1f468-1f3fe-200d-1f9b2","1f468-1f3ff-200d-1f9b2"],a:"11.0"},{n:["woman"],u:"1f469",v:["1f469-1f3fb","1f469-1f3fc","1f469-1f3fd","1f469-1f3fe","1f469-1f3ff"],a:"0.6"},{n:["woman: red hair","red haired woman"],u:"1f469-200d-1f9b0",v:["1f469-1f3fb-200d-1f9b0","1f469-1f3fc-200d-1f9b0","1f469-1f3fd-200d-1f9b0","1f469-1f3fe-200d-1f9b0","1f469-1f3ff-200d-1f9b0"],a:"11.0"},{n:["person: red hair","red haired person"],u:"1f9d1-200d-1f9b0",v:["1f9d1-1f3fb-200d-1f9b0","1f9d1-1f3fc-200d-1f9b0","1f9d1-1f3fd-200d-1f9b0","1f9d1-1f3fe-200d-1f9b0","1f9d1-1f3ff-200d-1f9b0"],a:"12.1"},{n:["woman: curly hair","curly haired woman"],u:"1f469-200d-1f9b1",v:["1f469-1f3fb-200d-1f9b1","1f469-1f3fc-200d-1f9b1","1f469-1f3fd-200d-1f9b1","1f469-1f3fe-200d-1f9b1","1f469-1f3ff-200d-1f9b1"],a:"11.0"},{n:["person: curly hair","curly haired person"],u:"1f9d1-200d-1f9b1",v:["1f9d1-1f3fb-200d-1f9b1","1f9d1-1f3fc-200d-1f9b1","1f9d1-1f3fd-200d-1f9b1","1f9d1-1f3fe-200d-1f9b1","1f9d1-1f3ff-200d-1f9b1"],a:"12.1"},{n:["woman: white hair","white haired woman"],u:"1f469-200d-1f9b3",v:["1f469-1f3fb-200d-1f9b3","1f469-1f3fc-200d-1f9b3","1f469-1f3fd-200d-1f9b3","1f469-1f3fe-200d-1f9b3","1f469-1f3ff-200d-1f9b3"],a:"11.0"},{n:["person: white hair","white haired person"],u:"1f9d1-200d-1f9b3",v:["1f9d1-1f3fb-200d-1f9b3","1f9d1-1f3fc-200d-1f9b3","1f9d1-1f3fd-200d-1f9b3","1f9d1-1f3fe-200d-1f9b3","1f9d1-1f3ff-200d-1f9b3"],a:"12.1"},{n:["bald woman","woman: bald"],u:"1f469-200d-1f9b2",v:["1f469-1f3fb-200d-1f9b2","1f469-1f3fc-200d-1f9b2","1f469-1f3fd-200d-1f9b2","1f469-1f3fe-200d-1f9b2","1f469-1f3ff-200d-1f9b2"],a:"11.0"},{n:["bald person","person: bald"],u:"1f9d1-200d-1f9b2",v:["1f9d1-1f3fb-200d-1f9b2","1f9d1-1f3fc-200d-1f9b2","1f9d1-1f3fd-200d-1f9b2","1f9d1-1f3fe-200d-1f9b2","1f9d1-1f3ff-200d-1f9b2"],a:"12.1"},{n:["woman: blond hair","blond-haired-woman"],u:"1f471-200d-2640-fe0f",v:["1f471-1f3fb-200d-2640-fe0f","1f471-1f3fc-200d-2640-fe0f","1f471-1f3fd-200d-2640-fe0f","1f471-1f3fe-200d-2640-fe0f","1f471-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["man: blond hair","blond-haired-man"],u:"1f471-200d-2642-fe0f",v:["1f471-1f3fb-200d-2642-fe0f","1f471-1f3fc-200d-2642-fe0f","1f471-1f3fd-200d-2642-fe0f","1f471-1f3fe-200d-2642-fe0f","1f471-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["older adult"],u:"1f9d3",v:["1f9d3-1f3fb","1f9d3-1f3fc","1f9d3-1f3fd","1f9d3-1f3fe","1f9d3-1f3ff"],a:"5.0"},{n:["older man"],u:"1f474",v:["1f474-1f3fb","1f474-1f3fc","1f474-1f3fd","1f474-1f3fe","1f474-1f3ff"],a:"0.6"},{n:["older woman"],u:"1f475",v:["1f475-1f3fb","1f475-1f3fc","1f475-1f3fd","1f475-1f3fe","1f475-1f3ff"],a:"0.6"},{n:["person frowning"],u:"1f64d",v:["1f64d-1f3fb","1f64d-1f3fc","1f64d-1f3fd","1f64d-1f3fe","1f64d-1f3ff"],a:"0.6"},{n:["man frowning","man-frowning"],u:"1f64d-200d-2642-fe0f",v:["1f64d-1f3fb-200d-2642-fe0f","1f64d-1f3fc-200d-2642-fe0f","1f64d-1f3fd-200d-2642-fe0f","1f64d-1f3fe-200d-2642-fe0f","1f64d-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman frowning","woman-frowning"],u:"1f64d-200d-2640-fe0f",v:["1f64d-1f3fb-200d-2640-fe0f","1f64d-1f3fc-200d-2640-fe0f","1f64d-1f3fd-200d-2640-fe0f","1f64d-1f3fe-200d-2640-fe0f","1f64d-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["person with pouting face"],u:"1f64e",v:["1f64e-1f3fb","1f64e-1f3fc","1f64e-1f3fd","1f64e-1f3fe","1f64e-1f3ff"],a:"0.6"},{n:["man pouting","man-pouting"],u:"1f64e-200d-2642-fe0f",v:["1f64e-1f3fb-200d-2642-fe0f","1f64e-1f3fc-200d-2642-fe0f","1f64e-1f3fd-200d-2642-fe0f","1f64e-1f3fe-200d-2642-fe0f","1f64e-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman pouting","woman-pouting"],u:"1f64e-200d-2640-fe0f",v:["1f64e-1f3fb-200d-2640-fe0f","1f64e-1f3fc-200d-2640-fe0f","1f64e-1f3fd-200d-2640-fe0f","1f64e-1f3fe-200d-2640-fe0f","1f64e-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["no good","face with no good gesture"],u:"1f645",v:["1f645-1f3fb","1f645-1f3fc","1f645-1f3fd","1f645-1f3fe","1f645-1f3ff"],a:"0.6"},{n:["man gesturing no","man-gesturing-no"],u:"1f645-200d-2642-fe0f",v:["1f645-1f3fb-200d-2642-fe0f","1f645-1f3fc-200d-2642-fe0f","1f645-1f3fd-200d-2642-fe0f","1f645-1f3fe-200d-2642-fe0f","1f645-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman gesturing no","woman-gesturing-no"],u:"1f645-200d-2640-fe0f",v:["1f645-1f3fb-200d-2640-fe0f","1f645-1f3fc-200d-2640-fe0f","1f645-1f3fd-200d-2640-fe0f","1f645-1f3fe-200d-2640-fe0f","1f645-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["ok woman","face with ok gesture"],u:"1f646",v:["1f646-1f3fb","1f646-1f3fc","1f646-1f3fd","1f646-1f3fe","1f646-1f3ff"],a:"0.6"},{n:["man gesturing ok","man-gesturing-ok"],u:"1f646-200d-2642-fe0f",v:["1f646-1f3fb-200d-2642-fe0f","1f646-1f3fc-200d-2642-fe0f","1f646-1f3fd-200d-2642-fe0f","1f646-1f3fe-200d-2642-fe0f","1f646-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman gesturing ok","woman-gesturing-ok"],u:"1f646-200d-2640-fe0f",v:["1f646-1f3fb-200d-2640-fe0f","1f646-1f3fc-200d-2640-fe0f","1f646-1f3fd-200d-2640-fe0f","1f646-1f3fe-200d-2640-fe0f","1f646-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["information desk person"],u:"1f481",v:["1f481-1f3fb","1f481-1f3fc","1f481-1f3fd","1f481-1f3fe","1f481-1f3ff"],a:"0.6"},{n:["man tipping hand","man-tipping-hand"],u:"1f481-200d-2642-fe0f",v:["1f481-1f3fb-200d-2642-fe0f","1f481-1f3fc-200d-2642-fe0f","1f481-1f3fd-200d-2642-fe0f","1f481-1f3fe-200d-2642-fe0f","1f481-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman tipping hand","woman-tipping-hand"],u:"1f481-200d-2640-fe0f",v:["1f481-1f3fb-200d-2640-fe0f","1f481-1f3fc-200d-2640-fe0f","1f481-1f3fd-200d-2640-fe0f","1f481-1f3fe-200d-2640-fe0f","1f481-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["raising hand","happy person raising one hand"],u:"1f64b",v:["1f64b-1f3fb","1f64b-1f3fc","1f64b-1f3fd","1f64b-1f3fe","1f64b-1f3ff"],a:"0.6"},{n:["man raising hand","man-raising-hand"],u:"1f64b-200d-2642-fe0f",v:["1f64b-1f3fb-200d-2642-fe0f","1f64b-1f3fc-200d-2642-fe0f","1f64b-1f3fd-200d-2642-fe0f","1f64b-1f3fe-200d-2642-fe0f","1f64b-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman raising hand","woman-raising-hand"],u:"1f64b-200d-2640-fe0f",v:["1f64b-1f3fb-200d-2640-fe0f","1f64b-1f3fc-200d-2640-fe0f","1f64b-1f3fd-200d-2640-fe0f","1f64b-1f3fe-200d-2640-fe0f","1f64b-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["deaf person"],u:"1f9cf",v:["1f9cf-1f3fb","1f9cf-1f3fc","1f9cf-1f3fd","1f9cf-1f3fe","1f9cf-1f3ff"],a:"12.0"},{n:["deaf man"],u:"1f9cf-200d-2642-fe0f",v:["1f9cf-1f3fb-200d-2642-fe0f","1f9cf-1f3fc-200d-2642-fe0f","1f9cf-1f3fd-200d-2642-fe0f","1f9cf-1f3fe-200d-2642-fe0f","1f9cf-1f3ff-200d-2642-fe0f"],a:"12.0"},{n:["deaf woman"],u:"1f9cf-200d-2640-fe0f",v:["1f9cf-1f3fb-200d-2640-fe0f","1f9cf-1f3fc-200d-2640-fe0f","1f9cf-1f3fd-200d-2640-fe0f","1f9cf-1f3fe-200d-2640-fe0f","1f9cf-1f3ff-200d-2640-fe0f"],a:"12.0"},{n:["bow","person bowing deeply"],u:"1f647",v:["1f647-1f3fb","1f647-1f3fc","1f647-1f3fd","1f647-1f3fe","1f647-1f3ff"],a:"0.6"},{n:["man bowing","man-bowing"],u:"1f647-200d-2642-fe0f",v:["1f647-1f3fb-200d-2642-fe0f","1f647-1f3fc-200d-2642-fe0f","1f647-1f3fd-200d-2642-fe0f","1f647-1f3fe-200d-2642-fe0f","1f647-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman bowing","woman-bowing"],u:"1f647-200d-2640-fe0f",v:["1f647-1f3fb-200d-2640-fe0f","1f647-1f3fc-200d-2640-fe0f","1f647-1f3fd-200d-2640-fe0f","1f647-1f3fe-200d-2640-fe0f","1f647-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["face palm"],u:"1f926",v:["1f926-1f3fb","1f926-1f3fc","1f926-1f3fd","1f926-1f3fe","1f926-1f3ff"],a:"3.0"},{n:["man facepalming","man-facepalming"],u:"1f926-200d-2642-fe0f",v:["1f926-1f3fb-200d-2642-fe0f","1f926-1f3fc-200d-2642-fe0f","1f926-1f3fd-200d-2642-fe0f","1f926-1f3fe-200d-2642-fe0f","1f926-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman facepalming","woman-facepalming"],u:"1f926-200d-2640-fe0f",v:["1f926-1f3fb-200d-2640-fe0f","1f926-1f3fc-200d-2640-fe0f","1f926-1f3fd-200d-2640-fe0f","1f926-1f3fe-200d-2640-fe0f","1f926-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["shrug"],u:"1f937",v:["1f937-1f3fb","1f937-1f3fc","1f937-1f3fd","1f937-1f3fe","1f937-1f3ff"],a:"3.0"},{n:["man shrugging","man-shrugging"],u:"1f937-200d-2642-fe0f",v:["1f937-1f3fb-200d-2642-fe0f","1f937-1f3fc-200d-2642-fe0f","1f937-1f3fd-200d-2642-fe0f","1f937-1f3fe-200d-2642-fe0f","1f937-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman shrugging","woman-shrugging"],u:"1f937-200d-2640-fe0f",v:["1f937-1f3fb-200d-2640-fe0f","1f937-1f3fc-200d-2640-fe0f","1f937-1f3fd-200d-2640-fe0f","1f937-1f3fe-200d-2640-fe0f","1f937-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["health worker"],u:"1f9d1-200d-2695-fe0f",v:["1f9d1-1f3fb-200d-2695-fe0f","1f9d1-1f3fc-200d-2695-fe0f","1f9d1-1f3fd-200d-2695-fe0f","1f9d1-1f3fe-200d-2695-fe0f","1f9d1-1f3ff-200d-2695-fe0f"],a:"12.1"},{n:["male-doctor","man health worker"],u:"1f468-200d-2695-fe0f",v:["1f468-1f3fb-200d-2695-fe0f","1f468-1f3fc-200d-2695-fe0f","1f468-1f3fd-200d-2695-fe0f","1f468-1f3fe-200d-2695-fe0f","1f468-1f3ff-200d-2695-fe0f"],a:"4.0"},{n:["female-doctor","woman health worker"],u:"1f469-200d-2695-fe0f",v:["1f469-1f3fb-200d-2695-fe0f","1f469-1f3fc-200d-2695-fe0f","1f469-1f3fd-200d-2695-fe0f","1f469-1f3fe-200d-2695-fe0f","1f469-1f3ff-200d-2695-fe0f"],a:"4.0"},{n:["student"],u:"1f9d1-200d-1f393",v:["1f9d1-1f3fb-200d-1f393","1f9d1-1f3fc-200d-1f393","1f9d1-1f3fd-200d-1f393","1f9d1-1f3fe-200d-1f393","1f9d1-1f3ff-200d-1f393"],a:"12.1"},{n:["man student","male-student"],u:"1f468-200d-1f393",v:["1f468-1f3fb-200d-1f393","1f468-1f3fc-200d-1f393","1f468-1f3fd-200d-1f393","1f468-1f3fe-200d-1f393","1f468-1f3ff-200d-1f393"],a:"4.0"},{n:["woman student","female-student"],u:"1f469-200d-1f393",v:["1f469-1f3fb-200d-1f393","1f469-1f3fc-200d-1f393","1f469-1f3fd-200d-1f393","1f469-1f3fe-200d-1f393","1f469-1f3ff-200d-1f393"],a:"4.0"},{n:["teacher"],u:"1f9d1-200d-1f3eb",v:["1f9d1-1f3fb-200d-1f3eb","1f9d1-1f3fc-200d-1f3eb","1f9d1-1f3fd-200d-1f3eb","1f9d1-1f3fe-200d-1f3eb","1f9d1-1f3ff-200d-1f3eb"],a:"12.1"},{n:["man teacher","male-teacher"],u:"1f468-200d-1f3eb",v:["1f468-1f3fb-200d-1f3eb","1f468-1f3fc-200d-1f3eb","1f468-1f3fd-200d-1f3eb","1f468-1f3fe-200d-1f3eb","1f468-1f3ff-200d-1f3eb"],a:"4.0"},{n:["woman teacher","female-teacher"],u:"1f469-200d-1f3eb",v:["1f469-1f3fb-200d-1f3eb","1f469-1f3fc-200d-1f3eb","1f469-1f3fd-200d-1f3eb","1f469-1f3fe-200d-1f3eb","1f469-1f3ff-200d-1f3eb"],a:"4.0"},{n:["judge"],u:"1f9d1-200d-2696-fe0f",v:["1f9d1-1f3fb-200d-2696-fe0f","1f9d1-1f3fc-200d-2696-fe0f","1f9d1-1f3fd-200d-2696-fe0f","1f9d1-1f3fe-200d-2696-fe0f","1f9d1-1f3ff-200d-2696-fe0f"],a:"12.1"},{n:["man judge","male-judge"],u:"1f468-200d-2696-fe0f",v:["1f468-1f3fb-200d-2696-fe0f","1f468-1f3fc-200d-2696-fe0f","1f468-1f3fd-200d-2696-fe0f","1f468-1f3fe-200d-2696-fe0f","1f468-1f3ff-200d-2696-fe0f"],a:"4.0"},{n:["woman judge","female-judge"],u:"1f469-200d-2696-fe0f",v:["1f469-1f3fb-200d-2696-fe0f","1f469-1f3fc-200d-2696-fe0f","1f469-1f3fd-200d-2696-fe0f","1f469-1f3fe-200d-2696-fe0f","1f469-1f3ff-200d-2696-fe0f"],a:"4.0"},{n:["farmer"],u:"1f9d1-200d-1f33e",v:["1f9d1-1f3fb-200d-1f33e","1f9d1-1f3fc-200d-1f33e","1f9d1-1f3fd-200d-1f33e","1f9d1-1f3fe-200d-1f33e","1f9d1-1f3ff-200d-1f33e"],a:"12.1"},{n:["man farmer","male-farmer"],u:"1f468-200d-1f33e",v:["1f468-1f3fb-200d-1f33e","1f468-1f3fc-200d-1f33e","1f468-1f3fd-200d-1f33e","1f468-1f3fe-200d-1f33e","1f468-1f3ff-200d-1f33e"],a:"4.0"},{n:["woman farmer","female-farmer"],u:"1f469-200d-1f33e",v:["1f469-1f3fb-200d-1f33e","1f469-1f3fc-200d-1f33e","1f469-1f3fd-200d-1f33e","1f469-1f3fe-200d-1f33e","1f469-1f3ff-200d-1f33e"],a:"4.0"},{n:["cook"],u:"1f9d1-200d-1f373",v:["1f9d1-1f3fb-200d-1f373","1f9d1-1f3fc-200d-1f373","1f9d1-1f3fd-200d-1f373","1f9d1-1f3fe-200d-1f373","1f9d1-1f3ff-200d-1f373"],a:"12.1"},{n:["man cook","male-cook"],u:"1f468-200d-1f373",v:["1f468-1f3fb-200d-1f373","1f468-1f3fc-200d-1f373","1f468-1f3fd-200d-1f373","1f468-1f3fe-200d-1f373","1f468-1f3ff-200d-1f373"],a:"4.0"},{n:["woman cook","female-cook"],u:"1f469-200d-1f373",v:["1f469-1f3fb-200d-1f373","1f469-1f3fc-200d-1f373","1f469-1f3fd-200d-1f373","1f469-1f3fe-200d-1f373","1f469-1f3ff-200d-1f373"],a:"4.0"},{n:["mechanic"],u:"1f9d1-200d-1f527",v:["1f9d1-1f3fb-200d-1f527","1f9d1-1f3fc-200d-1f527","1f9d1-1f3fd-200d-1f527","1f9d1-1f3fe-200d-1f527","1f9d1-1f3ff-200d-1f527"],a:"12.1"},{n:["man mechanic","male-mechanic"],u:"1f468-200d-1f527",v:["1f468-1f3fb-200d-1f527","1f468-1f3fc-200d-1f527","1f468-1f3fd-200d-1f527","1f468-1f3fe-200d-1f527","1f468-1f3ff-200d-1f527"],a:"4.0"},{n:["woman mechanic","female-mechanic"],u:"1f469-200d-1f527",v:["1f469-1f3fb-200d-1f527","1f469-1f3fc-200d-1f527","1f469-1f3fd-200d-1f527","1f469-1f3fe-200d-1f527","1f469-1f3ff-200d-1f527"],a:"4.0"},{n:["factory worker"],u:"1f9d1-200d-1f3ed",v:["1f9d1-1f3fb-200d-1f3ed","1f9d1-1f3fc-200d-1f3ed","1f9d1-1f3fd-200d-1f3ed","1f9d1-1f3fe-200d-1f3ed","1f9d1-1f3ff-200d-1f3ed"],a:"12.1"},{n:["man factory worker","male-factory-worker"],u:"1f468-200d-1f3ed",v:["1f468-1f3fb-200d-1f3ed","1f468-1f3fc-200d-1f3ed","1f468-1f3fd-200d-1f3ed","1f468-1f3fe-200d-1f3ed","1f468-1f3ff-200d-1f3ed"],a:"4.0"},{n:["woman factory worker","female-factory-worker"],u:"1f469-200d-1f3ed",v:["1f469-1f3fb-200d-1f3ed","1f469-1f3fc-200d-1f3ed","1f469-1f3fd-200d-1f3ed","1f469-1f3fe-200d-1f3ed","1f469-1f3ff-200d-1f3ed"],a:"4.0"},{n:["office worker"],u:"1f9d1-200d-1f4bc",v:["1f9d1-1f3fb-200d-1f4bc","1f9d1-1f3fc-200d-1f4bc","1f9d1-1f3fd-200d-1f4bc","1f9d1-1f3fe-200d-1f4bc","1f9d1-1f3ff-200d-1f4bc"],a:"12.1"},{n:["man office worker","male-office-worker"],u:"1f468-200d-1f4bc",v:["1f468-1f3fb-200d-1f4bc","1f468-1f3fc-200d-1f4bc","1f468-1f3fd-200d-1f4bc","1f468-1f3fe-200d-1f4bc","1f468-1f3ff-200d-1f4bc"],a:"4.0"},{n:["woman office worker","female-office-worker"],u:"1f469-200d-1f4bc",v:["1f469-1f3fb-200d-1f4bc","1f469-1f3fc-200d-1f4bc","1f469-1f3fd-200d-1f4bc","1f469-1f3fe-200d-1f4bc","1f469-1f3ff-200d-1f4bc"],a:"4.0"},{n:["scientist"],u:"1f9d1-200d-1f52c",v:["1f9d1-1f3fb-200d-1f52c","1f9d1-1f3fc-200d-1f52c","1f9d1-1f3fd-200d-1f52c","1f9d1-1f3fe-200d-1f52c","1f9d1-1f3ff-200d-1f52c"],a:"12.1"},{n:["man scientist","male-scientist"],u:"1f468-200d-1f52c",v:["1f468-1f3fb-200d-1f52c","1f468-1f3fc-200d-1f52c","1f468-1f3fd-200d-1f52c","1f468-1f3fe-200d-1f52c","1f468-1f3ff-200d-1f52c"],a:"4.0"},{n:["woman scientist","female-scientist"],u:"1f469-200d-1f52c",v:["1f469-1f3fb-200d-1f52c","1f469-1f3fc-200d-1f52c","1f469-1f3fd-200d-1f52c","1f469-1f3fe-200d-1f52c","1f469-1f3ff-200d-1f52c"],a:"4.0"},{n:["technologist"],u:"1f9d1-200d-1f4bb",v:["1f9d1-1f3fb-200d-1f4bb","1f9d1-1f3fc-200d-1f4bb","1f9d1-1f3fd-200d-1f4bb","1f9d1-1f3fe-200d-1f4bb","1f9d1-1f3ff-200d-1f4bb"],a:"12.1"},{n:["man technologist","male-technologist"],u:"1f468-200d-1f4bb",v:["1f468-1f3fb-200d-1f4bb","1f468-1f3fc-200d-1f4bb","1f468-1f3fd-200d-1f4bb","1f468-1f3fe-200d-1f4bb","1f468-1f3ff-200d-1f4bb"],a:"4.0"},{n:["woman technologist","female-technologist"],u:"1f469-200d-1f4bb",v:["1f469-1f3fb-200d-1f4bb","1f469-1f3fc-200d-1f4bb","1f469-1f3fd-200d-1f4bb","1f469-1f3fe-200d-1f4bb","1f469-1f3ff-200d-1f4bb"],a:"4.0"},{n:["singer"],u:"1f9d1-200d-1f3a4",v:["1f9d1-1f3fb-200d-1f3a4","1f9d1-1f3fc-200d-1f3a4","1f9d1-1f3fd-200d-1f3a4","1f9d1-1f3fe-200d-1f3a4","1f9d1-1f3ff-200d-1f3a4"],a:"12.1"},{n:["man singer","male-singer"],u:"1f468-200d-1f3a4",v:["1f468-1f3fb-200d-1f3a4","1f468-1f3fc-200d-1f3a4","1f468-1f3fd-200d-1f3a4","1f468-1f3fe-200d-1f3a4","1f468-1f3ff-200d-1f3a4"],a:"4.0"},{n:["woman singer","female-singer"],u:"1f469-200d-1f3a4",v:["1f469-1f3fb-200d-1f3a4","1f469-1f3fc-200d-1f3a4","1f469-1f3fd-200d-1f3a4","1f469-1f3fe-200d-1f3a4","1f469-1f3ff-200d-1f3a4"],a:"4.0"},{n:["artist"],u:"1f9d1-200d-1f3a8",v:["1f9d1-1f3fb-200d-1f3a8","1f9d1-1f3fc-200d-1f3a8","1f9d1-1f3fd-200d-1f3a8","1f9d1-1f3fe-200d-1f3a8","1f9d1-1f3ff-200d-1f3a8"],a:"12.1"},{n:["man artist","male-artist"],u:"1f468-200d-1f3a8",v:["1f468-1f3fb-200d-1f3a8","1f468-1f3fc-200d-1f3a8","1f468-1f3fd-200d-1f3a8","1f468-1f3fe-200d-1f3a8","1f468-1f3ff-200d-1f3a8"],a:"4.0"},{n:["woman artist","female-artist"],u:"1f469-200d-1f3a8",v:["1f469-1f3fb-200d-1f3a8","1f469-1f3fc-200d-1f3a8","1f469-1f3fd-200d-1f3a8","1f469-1f3fe-200d-1f3a8","1f469-1f3ff-200d-1f3a8"],a:"4.0"},{n:["pilot"],u:"1f9d1-200d-2708-fe0f",v:["1f9d1-1f3fb-200d-2708-fe0f","1f9d1-1f3fc-200d-2708-fe0f","1f9d1-1f3fd-200d-2708-fe0f","1f9d1-1f3fe-200d-2708-fe0f","1f9d1-1f3ff-200d-2708-fe0f"],a:"12.1"},{n:["man pilot","male-pilot"],u:"1f468-200d-2708-fe0f",v:["1f468-1f3fb-200d-2708-fe0f","1f468-1f3fc-200d-2708-fe0f","1f468-1f3fd-200d-2708-fe0f","1f468-1f3fe-200d-2708-fe0f","1f468-1f3ff-200d-2708-fe0f"],a:"4.0"},{n:["woman pilot","female-pilot"],u:"1f469-200d-2708-fe0f",v:["1f469-1f3fb-200d-2708-fe0f","1f469-1f3fc-200d-2708-fe0f","1f469-1f3fd-200d-2708-fe0f","1f469-1f3fe-200d-2708-fe0f","1f469-1f3ff-200d-2708-fe0f"],a:"4.0"},{n:["astronaut"],u:"1f9d1-200d-1f680",v:["1f9d1-1f3fb-200d-1f680","1f9d1-1f3fc-200d-1f680","1f9d1-1f3fd-200d-1f680","1f9d1-1f3fe-200d-1f680","1f9d1-1f3ff-200d-1f680"],a:"12.1"},{n:["man astronaut","male-astronaut"],u:"1f468-200d-1f680",v:["1f468-1f3fb-200d-1f680","1f468-1f3fc-200d-1f680","1f468-1f3fd-200d-1f680","1f468-1f3fe-200d-1f680","1f468-1f3ff-200d-1f680"],a:"4.0"},{n:["woman astronaut","female-astronaut"],u:"1f469-200d-1f680",v:["1f469-1f3fb-200d-1f680","1f469-1f3fc-200d-1f680","1f469-1f3fd-200d-1f680","1f469-1f3fe-200d-1f680","1f469-1f3ff-200d-1f680"],a:"4.0"},{n:["firefighter"],u:"1f9d1-200d-1f692",v:["1f9d1-1f3fb-200d-1f692","1f9d1-1f3fc-200d-1f692","1f9d1-1f3fd-200d-1f692","1f9d1-1f3fe-200d-1f692","1f9d1-1f3ff-200d-1f692"],a:"12.1"},{n:["man firefighter","male-firefighter"],u:"1f468-200d-1f692",v:["1f468-1f3fb-200d-1f692","1f468-1f3fc-200d-1f692","1f468-1f3fd-200d-1f692","1f468-1f3fe-200d-1f692","1f468-1f3ff-200d-1f692"],a:"4.0"},{n:["woman firefighter","female-firefighter"],u:"1f469-200d-1f692",v:["1f469-1f3fb-200d-1f692","1f469-1f3fc-200d-1f692","1f469-1f3fd-200d-1f692","1f469-1f3fe-200d-1f692","1f469-1f3ff-200d-1f692"],a:"4.0"},{n:["cop","police officer"],u:"1f46e",v:["1f46e-1f3fb","1f46e-1f3fc","1f46e-1f3fd","1f46e-1f3fe","1f46e-1f3ff"],a:"0.6"},{n:["man police officer","male-police-officer"],u:"1f46e-200d-2642-fe0f",v:["1f46e-1f3fb-200d-2642-fe0f","1f46e-1f3fc-200d-2642-fe0f","1f46e-1f3fd-200d-2642-fe0f","1f46e-1f3fe-200d-2642-fe0f","1f46e-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman police officer","female-police-officer"],u:"1f46e-200d-2640-fe0f",v:["1f46e-1f3fb-200d-2640-fe0f","1f46e-1f3fc-200d-2640-fe0f","1f46e-1f3fd-200d-2640-fe0f","1f46e-1f3fe-200d-2640-fe0f","1f46e-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["detective","sleuth or spy"],u:"1f575-fe0f",v:["1f575-1f3fb","1f575-1f3fc","1f575-1f3fd","1f575-1f3fe","1f575-1f3ff"],a:"0.7"},{n:["man detective","male-detective"],u:"1f575-fe0f-200d-2642-fe0f",v:["1f575-1f3fb-200d-2642-fe0f","1f575-1f3fc-200d-2642-fe0f","1f575-1f3fd-200d-2642-fe0f","1f575-1f3fe-200d-2642-fe0f","1f575-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman detective","female-detective"],u:"1f575-fe0f-200d-2640-fe0f",v:["1f575-1f3fb-200d-2640-fe0f","1f575-1f3fc-200d-2640-fe0f","1f575-1f3fd-200d-2640-fe0f","1f575-1f3fe-200d-2640-fe0f","1f575-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["guardsman"],u:"1f482",v:["1f482-1f3fb","1f482-1f3fc","1f482-1f3fd","1f482-1f3fe","1f482-1f3ff"],a:"0.6"},{n:["man guard","male-guard"],u:"1f482-200d-2642-fe0f",v:["1f482-1f3fb-200d-2642-fe0f","1f482-1f3fc-200d-2642-fe0f","1f482-1f3fd-200d-2642-fe0f","1f482-1f3fe-200d-2642-fe0f","1f482-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman guard","female-guard"],u:"1f482-200d-2640-fe0f",v:["1f482-1f3fb-200d-2640-fe0f","1f482-1f3fc-200d-2640-fe0f","1f482-1f3fd-200d-2640-fe0f","1f482-1f3fe-200d-2640-fe0f","1f482-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["ninja"],u:"1f977",v:["1f977-1f3fb","1f977-1f3fc","1f977-1f3fd","1f977-1f3fe","1f977-1f3ff"],a:"13.0"},{n:["construction worker"],u:"1f477",v:["1f477-1f3fb","1f477-1f3fc","1f477-1f3fd","1f477-1f3fe","1f477-1f3ff"],a:"0.6"},{n:["man construction worker","male-construction-worker"],u:"1f477-200d-2642-fe0f",v:["1f477-1f3fb-200d-2642-fe0f","1f477-1f3fc-200d-2642-fe0f","1f477-1f3fd-200d-2642-fe0f","1f477-1f3fe-200d-2642-fe0f","1f477-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman construction worker","female-construction-worker"],u:"1f477-200d-2640-fe0f",v:["1f477-1f3fb-200d-2640-fe0f","1f477-1f3fc-200d-2640-fe0f","1f477-1f3fd-200d-2640-fe0f","1f477-1f3fe-200d-2640-fe0f","1f477-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["person with crown"],u:"1fac5",v:["1fac5-1f3fb","1fac5-1f3fc","1fac5-1f3fd","1fac5-1f3fe","1fac5-1f3ff"],a:"14.0"},{n:["prince"],u:"1f934",v:["1f934-1f3fb","1f934-1f3fc","1f934-1f3fd","1f934-1f3fe","1f934-1f3ff"],a:"3.0"},{n:["princess"],u:"1f478",v:["1f478-1f3fb","1f478-1f3fc","1f478-1f3fd","1f478-1f3fe","1f478-1f3ff"],a:"0.6"},{n:["man with turban"],u:"1f473",v:["1f473-1f3fb","1f473-1f3fc","1f473-1f3fd","1f473-1f3fe","1f473-1f3ff"],a:"0.6"},{n:["man wearing turban","man-wearing-turban"],u:"1f473-200d-2642-fe0f",v:["1f473-1f3fb-200d-2642-fe0f","1f473-1f3fc-200d-2642-fe0f","1f473-1f3fd-200d-2642-fe0f","1f473-1f3fe-200d-2642-fe0f","1f473-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman wearing turban","woman-wearing-turban"],u:"1f473-200d-2640-fe0f",v:["1f473-1f3fb-200d-2640-fe0f","1f473-1f3fc-200d-2640-fe0f","1f473-1f3fd-200d-2640-fe0f","1f473-1f3fe-200d-2640-fe0f","1f473-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["man with gua pi mao"],u:"1f472",v:["1f472-1f3fb","1f472-1f3fc","1f472-1f3fd","1f472-1f3fe","1f472-1f3ff"],a:"0.6"},{n:["person with headscarf"],u:"1f9d5",v:["1f9d5-1f3fb","1f9d5-1f3fc","1f9d5-1f3fd","1f9d5-1f3fe","1f9d5-1f3ff"],a:"5.0"},{n:["man in tuxedo","person in tuxedo"],u:"1f935",v:["1f935-1f3fb","1f935-1f3fc","1f935-1f3fd","1f935-1f3fe","1f935-1f3ff"],a:"3.0"},{n:["man in tuxedo"],u:"1f935-200d-2642-fe0f",v:["1f935-1f3fb-200d-2642-fe0f","1f935-1f3fc-200d-2642-fe0f","1f935-1f3fd-200d-2642-fe0f","1f935-1f3fe-200d-2642-fe0f","1f935-1f3ff-200d-2642-fe0f"],a:"13.0"},{n:["woman in tuxedo"],u:"1f935-200d-2640-fe0f",v:["1f935-1f3fb-200d-2640-fe0f","1f935-1f3fc-200d-2640-fe0f","1f935-1f3fd-200d-2640-fe0f","1f935-1f3fe-200d-2640-fe0f","1f935-1f3ff-200d-2640-fe0f"],a:"13.0"},{n:["bride with veil"],u:"1f470",v:["1f470-1f3fb","1f470-1f3fc","1f470-1f3fd","1f470-1f3fe","1f470-1f3ff"],a:"0.6"},{n:["man with veil"],u:"1f470-200d-2642-fe0f",v:["1f470-1f3fb-200d-2642-fe0f","1f470-1f3fc-200d-2642-fe0f","1f470-1f3fd-200d-2642-fe0f","1f470-1f3fe-200d-2642-fe0f","1f470-1f3ff-200d-2642-fe0f"],a:"13.0"},{n:["woman with veil"],u:"1f470-200d-2640-fe0f",v:["1f470-1f3fb-200d-2640-fe0f","1f470-1f3fc-200d-2640-fe0f","1f470-1f3fd-200d-2640-fe0f","1f470-1f3fe-200d-2640-fe0f","1f470-1f3ff-200d-2640-fe0f"],a:"13.0"},{n:["pregnant woman"],u:"1f930",v:["1f930-1f3fb","1f930-1f3fc","1f930-1f3fd","1f930-1f3fe","1f930-1f3ff"],a:"3.0"},{n:["pregnant man"],u:"1fac3",v:["1fac3-1f3fb","1fac3-1f3fc","1fac3-1f3fd","1fac3-1f3fe","1fac3-1f3ff"],a:"14.0"},{n:["pregnant person"],u:"1fac4",v:["1fac4-1f3fb","1fac4-1f3fc","1fac4-1f3fd","1fac4-1f3fe","1fac4-1f3ff"],a:"14.0"},{n:["breast-feeding"],u:"1f931",v:["1f931-1f3fb","1f931-1f3fc","1f931-1f3fd","1f931-1f3fe","1f931-1f3ff"],a:"5.0"},{n:["woman feeding baby"],u:"1f469-200d-1f37c",v:["1f469-1f3fb-200d-1f37c","1f469-1f3fc-200d-1f37c","1f469-1f3fd-200d-1f37c","1f469-1f3fe-200d-1f37c","1f469-1f3ff-200d-1f37c"],a:"13.0"},{n:["man feeding baby"],u:"1f468-200d-1f37c",v:["1f468-1f3fb-200d-1f37c","1f468-1f3fc-200d-1f37c","1f468-1f3fd-200d-1f37c","1f468-1f3fe-200d-1f37c","1f468-1f3ff-200d-1f37c"],a:"13.0"},{n:["person feeding baby"],u:"1f9d1-200d-1f37c",v:["1f9d1-1f3fb-200d-1f37c","1f9d1-1f3fc-200d-1f37c","1f9d1-1f3fd-200d-1f37c","1f9d1-1f3fe-200d-1f37c","1f9d1-1f3ff-200d-1f37c"],a:"13.0"},{n:["angel","baby angel"],u:"1f47c",v:["1f47c-1f3fb","1f47c-1f3fc","1f47c-1f3fd","1f47c-1f3fe","1f47c-1f3ff"],a:"0.6"},{n:["santa","father christmas"],u:"1f385",v:["1f385-1f3fb","1f385-1f3fc","1f385-1f3fd","1f385-1f3fe","1f385-1f3ff"],a:"0.6"},{n:["mrs claus","mother christmas"],u:"1f936",v:["1f936-1f3fb","1f936-1f3fc","1f936-1f3fd","1f936-1f3fe","1f936-1f3ff"],a:"3.0"},{n:["mx claus"],u:"1f9d1-200d-1f384",v:["1f9d1-1f3fb-200d-1f384","1f9d1-1f3fc-200d-1f384","1f9d1-1f3fd-200d-1f384","1f9d1-1f3fe-200d-1f384","1f9d1-1f3ff-200d-1f384"],a:"13.0"},{n:["superhero"],u:"1f9b8",v:["1f9b8-1f3fb","1f9b8-1f3fc","1f9b8-1f3fd","1f9b8-1f3fe","1f9b8-1f3ff"],a:"11.0"},{n:["man superhero","male superhero"],u:"1f9b8-200d-2642-fe0f",v:["1f9b8-1f3fb-200d-2642-fe0f","1f9b8-1f3fc-200d-2642-fe0f","1f9b8-1f3fd-200d-2642-fe0f","1f9b8-1f3fe-200d-2642-fe0f","1f9b8-1f3ff-200d-2642-fe0f"],a:"11.0"},{n:["woman superhero","female superhero"],u:"1f9b8-200d-2640-fe0f",v:["1f9b8-1f3fb-200d-2640-fe0f","1f9b8-1f3fc-200d-2640-fe0f","1f9b8-1f3fd-200d-2640-fe0f","1f9b8-1f3fe-200d-2640-fe0f","1f9b8-1f3ff-200d-2640-fe0f"],a:"11.0"},{n:["supervillain"],u:"1f9b9",v:["1f9b9-1f3fb","1f9b9-1f3fc","1f9b9-1f3fd","1f9b9-1f3fe","1f9b9-1f3ff"],a:"11.0"},{n:["man supervillain","male supervillain"],u:"1f9b9-200d-2642-fe0f",v:["1f9b9-1f3fb-200d-2642-fe0f","1f9b9-1f3fc-200d-2642-fe0f","1f9b9-1f3fd-200d-2642-fe0f","1f9b9-1f3fe-200d-2642-fe0f","1f9b9-1f3ff-200d-2642-fe0f"],a:"11.0"},{n:["woman supervillain","female supervillain"],u:"1f9b9-200d-2640-fe0f",v:["1f9b9-1f3fb-200d-2640-fe0f","1f9b9-1f3fc-200d-2640-fe0f","1f9b9-1f3fd-200d-2640-fe0f","1f9b9-1f3fe-200d-2640-fe0f","1f9b9-1f3ff-200d-2640-fe0f"],a:"11.0"},{n:["mage"],u:"1f9d9",v:["1f9d9-1f3fb","1f9d9-1f3fc","1f9d9-1f3fd","1f9d9-1f3fe","1f9d9-1f3ff"],a:"5.0"},{n:["man mage","male mage"],u:"1f9d9-200d-2642-fe0f",v:["1f9d9-1f3fb-200d-2642-fe0f","1f9d9-1f3fc-200d-2642-fe0f","1f9d9-1f3fd-200d-2642-fe0f","1f9d9-1f3fe-200d-2642-fe0f","1f9d9-1f3ff-200d-2642-fe0f"],a:"5.0"},{n:["woman mage","female mage"],u:"1f9d9-200d-2640-fe0f",v:["1f9d9-1f3fb-200d-2640-fe0f","1f9d9-1f3fc-200d-2640-fe0f","1f9d9-1f3fd-200d-2640-fe0f","1f9d9-1f3fe-200d-2640-fe0f","1f9d9-1f3ff-200d-2640-fe0f"],a:"5.0"},{n:["fairy"],u:"1f9da",v:["1f9da-1f3fb","1f9da-1f3fc","1f9da-1f3fd","1f9da-1f3fe","1f9da-1f3ff"],a:"5.0"},{n:["man fairy","male fairy"],u:"1f9da-200d-2642-fe0f",v:["1f9da-1f3fb-200d-2642-fe0f","1f9da-1f3fc-200d-2642-fe0f","1f9da-1f3fd-200d-2642-fe0f","1f9da-1f3fe-200d-2642-fe0f","1f9da-1f3ff-200d-2642-fe0f"],a:"5.0"},{n:["woman fairy","female fairy"],u:"1f9da-200d-2640-fe0f",v:["1f9da-1f3fb-200d-2640-fe0f","1f9da-1f3fc-200d-2640-fe0f","1f9da-1f3fd-200d-2640-fe0f","1f9da-1f3fe-200d-2640-fe0f","1f9da-1f3ff-200d-2640-fe0f"],a:"5.0"},{n:["vampire"],u:"1f9db",v:["1f9db-1f3fb","1f9db-1f3fc","1f9db-1f3fd","1f9db-1f3fe","1f9db-1f3ff"],a:"5.0"},{n:["man vampire","male vampire"],u:"1f9db-200d-2642-fe0f",v:["1f9db-1f3fb-200d-2642-fe0f","1f9db-1f3fc-200d-2642-fe0f","1f9db-1f3fd-200d-2642-fe0f","1f9db-1f3fe-200d-2642-fe0f","1f9db-1f3ff-200d-2642-fe0f"],a:"5.0"},{n:["woman vampire","female vampire"],u:"1f9db-200d-2640-fe0f",v:["1f9db-1f3fb-200d-2640-fe0f","1f9db-1f3fc-200d-2640-fe0f","1f9db-1f3fd-200d-2640-fe0f","1f9db-1f3fe-200d-2640-fe0f","1f9db-1f3ff-200d-2640-fe0f"],a:"5.0"},{n:["merperson"],u:"1f9dc",v:["1f9dc-1f3fb","1f9dc-1f3fc","1f9dc-1f3fd","1f9dc-1f3fe","1f9dc-1f3ff"],a:"5.0"},{n:["merman"],u:"1f9dc-200d-2642-fe0f",v:["1f9dc-1f3fb-200d-2642-fe0f","1f9dc-1f3fc-200d-2642-fe0f","1f9dc-1f3fd-200d-2642-fe0f","1f9dc-1f3fe-200d-2642-fe0f","1f9dc-1f3ff-200d-2642-fe0f"],a:"5.0"},{n:["mermaid"],u:"1f9dc-200d-2640-fe0f",v:["1f9dc-1f3fb-200d-2640-fe0f","1f9dc-1f3fc-200d-2640-fe0f","1f9dc-1f3fd-200d-2640-fe0f","1f9dc-1f3fe-200d-2640-fe0f","1f9dc-1f3ff-200d-2640-fe0f"],a:"5.0"},{n:["elf"],u:"1f9dd",v:["1f9dd-1f3fb","1f9dd-1f3fc","1f9dd-1f3fd","1f9dd-1f3fe","1f9dd-1f3ff"],a:"5.0"},{n:["man elf","male elf"],u:"1f9dd-200d-2642-fe0f",v:["1f9dd-1f3fb-200d-2642-fe0f","1f9dd-1f3fc-200d-2642-fe0f","1f9dd-1f3fd-200d-2642-fe0f","1f9dd-1f3fe-200d-2642-fe0f","1f9dd-1f3ff-200d-2642-fe0f"],a:"5.0"},{n:["woman elf","female elf"],u:"1f9dd-200d-2640-fe0f",v:["1f9dd-1f3fb-200d-2640-fe0f","1f9dd-1f3fc-200d-2640-fe0f","1f9dd-1f3fd-200d-2640-fe0f","1f9dd-1f3fe-200d-2640-fe0f","1f9dd-1f3ff-200d-2640-fe0f"],a:"5.0"},{n:["genie"],u:"1f9de",a:"5.0"},{n:["man genie","male genie"],u:"1f9de-200d-2642-fe0f",a:"5.0"},{n:["woman genie","female genie"],u:"1f9de-200d-2640-fe0f",a:"5.0"},{n:["zombie"],u:"1f9df",a:"5.0"},{n:["man zombie","male zombie"],u:"1f9df-200d-2642-fe0f",a:"5.0"},{n:["woman zombie","female zombie"],u:"1f9df-200d-2640-fe0f",a:"5.0"},{n:["troll"],u:"1f9cc",a:"14.0"},{n:["massage","face massage"],u:"1f486",v:["1f486-1f3fb","1f486-1f3fc","1f486-1f3fd","1f486-1f3fe","1f486-1f3ff"],a:"0.6"},{n:["man getting massage","man-getting-massage"],u:"1f486-200d-2642-fe0f",v:["1f486-1f3fb-200d-2642-fe0f","1f486-1f3fc-200d-2642-fe0f","1f486-1f3fd-200d-2642-fe0f","1f486-1f3fe-200d-2642-fe0f","1f486-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman getting massage","woman-getting-massage"],u:"1f486-200d-2640-fe0f",v:["1f486-1f3fb-200d-2640-fe0f","1f486-1f3fc-200d-2640-fe0f","1f486-1f3fd-200d-2640-fe0f","1f486-1f3fe-200d-2640-fe0f","1f486-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["haircut"],u:"1f487",v:["1f487-1f3fb","1f487-1f3fc","1f487-1f3fd","1f487-1f3fe","1f487-1f3ff"],a:"0.6"},{n:["man getting haircut","man-getting-haircut"],u:"1f487-200d-2642-fe0f",v:["1f487-1f3fb-200d-2642-fe0f","1f487-1f3fc-200d-2642-fe0f","1f487-1f3fd-200d-2642-fe0f","1f487-1f3fe-200d-2642-fe0f","1f487-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman getting haircut","woman-getting-haircut"],u:"1f487-200d-2640-fe0f",v:["1f487-1f3fb-200d-2640-fe0f","1f487-1f3fc-200d-2640-fe0f","1f487-1f3fd-200d-2640-fe0f","1f487-1f3fe-200d-2640-fe0f","1f487-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["walking","pedestrian"],u:"1f6b6",v:["1f6b6-1f3fb","1f6b6-1f3fc","1f6b6-1f3fd","1f6b6-1f3fe","1f6b6-1f3ff"],a:"0.6"},{n:["man walking","man-walking"],u:"1f6b6-200d-2642-fe0f",v:["1f6b6-1f3fb-200d-2642-fe0f","1f6b6-1f3fc-200d-2642-fe0f","1f6b6-1f3fd-200d-2642-fe0f","1f6b6-1f3fe-200d-2642-fe0f","1f6b6-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman walking","woman-walking"],u:"1f6b6-200d-2640-fe0f",v:["1f6b6-1f3fb-200d-2640-fe0f","1f6b6-1f3fc-200d-2640-fe0f","1f6b6-1f3fd-200d-2640-fe0f","1f6b6-1f3fe-200d-2640-fe0f","1f6b6-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["standing person"],u:"1f9cd",v:["1f9cd-1f3fb","1f9cd-1f3fc","1f9cd-1f3fd","1f9cd-1f3fe","1f9cd-1f3ff"],a:"12.0"},{n:["man standing"],u:"1f9cd-200d-2642-fe0f",v:["1f9cd-1f3fb-200d-2642-fe0f","1f9cd-1f3fc-200d-2642-fe0f","1f9cd-1f3fd-200d-2642-fe0f","1f9cd-1f3fe-200d-2642-fe0f","1f9cd-1f3ff-200d-2642-fe0f"],a:"12.0"},{n:["woman standing"],u:"1f9cd-200d-2640-fe0f",v:["1f9cd-1f3fb-200d-2640-fe0f","1f9cd-1f3fc-200d-2640-fe0f","1f9cd-1f3fd-200d-2640-fe0f","1f9cd-1f3fe-200d-2640-fe0f","1f9cd-1f3ff-200d-2640-fe0f"],a:"12.0"},{n:["kneeling person"],u:"1f9ce",v:["1f9ce-1f3fb","1f9ce-1f3fc","1f9ce-1f3fd","1f9ce-1f3fe","1f9ce-1f3ff"],a:"12.0"},{n:["man kneeling"],u:"1f9ce-200d-2642-fe0f",v:["1f9ce-1f3fb-200d-2642-fe0f","1f9ce-1f3fc-200d-2642-fe0f","1f9ce-1f3fd-200d-2642-fe0f","1f9ce-1f3fe-200d-2642-fe0f","1f9ce-1f3ff-200d-2642-fe0f"],a:"12.0"},{n:["woman kneeling"],u:"1f9ce-200d-2640-fe0f",v:["1f9ce-1f3fb-200d-2640-fe0f","1f9ce-1f3fc-200d-2640-fe0f","1f9ce-1f3fd-200d-2640-fe0f","1f9ce-1f3fe-200d-2640-fe0f","1f9ce-1f3ff-200d-2640-fe0f"],a:"12.0"},{n:["person with white cane","person with probing cane"],u:"1f9d1-200d-1f9af",v:["1f9d1-1f3fb-200d-1f9af","1f9d1-1f3fc-200d-1f9af","1f9d1-1f3fd-200d-1f9af","1f9d1-1f3fe-200d-1f9af","1f9d1-1f3ff-200d-1f9af"],a:"12.1"},{n:["man with white cane","man with probing cane"],u:"1f468-200d-1f9af",v:["1f468-1f3fb-200d-1f9af","1f468-1f3fc-200d-1f9af","1f468-1f3fd-200d-1f9af","1f468-1f3fe-200d-1f9af","1f468-1f3ff-200d-1f9af"],a:"12.0"},{n:["woman with white cane","woman with probing cane"],u:"1f469-200d-1f9af",v:["1f469-1f3fb-200d-1f9af","1f469-1f3fc-200d-1f9af","1f469-1f3fd-200d-1f9af","1f469-1f3fe-200d-1f9af","1f469-1f3ff-200d-1f9af"],a:"12.0"},{n:["person in motorized wheelchair"],u:"1f9d1-200d-1f9bc",v:["1f9d1-1f3fb-200d-1f9bc","1f9d1-1f3fc-200d-1f9bc","1f9d1-1f3fd-200d-1f9bc","1f9d1-1f3fe-200d-1f9bc","1f9d1-1f3ff-200d-1f9bc"],a:"12.1"},{n:["man in motorized wheelchair"],u:"1f468-200d-1f9bc",v:["1f468-1f3fb-200d-1f9bc","1f468-1f3fc-200d-1f9bc","1f468-1f3fd-200d-1f9bc","1f468-1f3fe-200d-1f9bc","1f468-1f3ff-200d-1f9bc"],a:"12.0"},{n:["woman in motorized wheelchair"],u:"1f469-200d-1f9bc",v:["1f469-1f3fb-200d-1f9bc","1f469-1f3fc-200d-1f9bc","1f469-1f3fd-200d-1f9bc","1f469-1f3fe-200d-1f9bc","1f469-1f3ff-200d-1f9bc"],a:"12.0"},{n:["person in manual wheelchair"],u:"1f9d1-200d-1f9bd",v:["1f9d1-1f3fb-200d-1f9bd","1f9d1-1f3fc-200d-1f9bd","1f9d1-1f3fd-200d-1f9bd","1f9d1-1f3fe-200d-1f9bd","1f9d1-1f3ff-200d-1f9bd"],a:"12.1"},{n:["man in manual wheelchair"],u:"1f468-200d-1f9bd",v:["1f468-1f3fb-200d-1f9bd","1f468-1f3fc-200d-1f9bd","1f468-1f3fd-200d-1f9bd","1f468-1f3fe-200d-1f9bd","1f468-1f3ff-200d-1f9bd"],a:"12.0"},{n:["woman in manual wheelchair"],u:"1f469-200d-1f9bd",v:["1f469-1f3fb-200d-1f9bd","1f469-1f3fc-200d-1f9bd","1f469-1f3fd-200d-1f9bd","1f469-1f3fe-200d-1f9bd","1f469-1f3ff-200d-1f9bd"],a:"12.0"},{n:["runner","running"],u:"1f3c3",v:["1f3c3-1f3fb","1f3c3-1f3fc","1f3c3-1f3fd","1f3c3-1f3fe","1f3c3-1f3ff"],a:"0.6"},{n:["man running","man-running"],u:"1f3c3-200d-2642-fe0f",v:["1f3c3-1f3fb-200d-2642-fe0f","1f3c3-1f3fc-200d-2642-fe0f","1f3c3-1f3fd-200d-2642-fe0f","1f3c3-1f3fe-200d-2642-fe0f","1f3c3-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman running","woman-running"],u:"1f3c3-200d-2640-fe0f",v:["1f3c3-1f3fb-200d-2640-fe0f","1f3c3-1f3fc-200d-2640-fe0f","1f3c3-1f3fd-200d-2640-fe0f","1f3c3-1f3fe-200d-2640-fe0f","1f3c3-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["dancer"],u:"1f483",v:["1f483-1f3fb","1f483-1f3fc","1f483-1f3fd","1f483-1f3fe","1f483-1f3ff"],a:"0.6"},{n:["man dancing"],u:"1f57a",v:["1f57a-1f3fb","1f57a-1f3fc","1f57a-1f3fd","1f57a-1f3fe","1f57a-1f3ff"],a:"3.0"},{n:["person in suit levitating","man in business suit levitating"],u:"1f574-fe0f",v:["1f574-1f3fb","1f574-1f3fc","1f574-1f3fd","1f574-1f3fe","1f574-1f3ff"],a:"0.7"},{n:["dancers","woman with bunny ears"],u:"1f46f",a:"0.6"},{n:["men with bunny ears","men-with-bunny-ears-partying","man-with-bunny-ears-partying"],u:"1f46f-200d-2642-fe0f",a:"4.0"},{n:["women with bunny ears","women-with-bunny-ears-partying","woman-with-bunny-ears-partying"],u:"1f46f-200d-2640-fe0f",a:"4.0"},{n:["person in steamy room"],u:"1f9d6",v:["1f9d6-1f3fb","1f9d6-1f3fc","1f9d6-1f3fd","1f9d6-1f3fe","1f9d6-1f3ff"],a:"5.0"},{n:["man in steamy room"],u:"1f9d6-200d-2642-fe0f",v:["1f9d6-1f3fb-200d-2642-fe0f","1f9d6-1f3fc-200d-2642-fe0f","1f9d6-1f3fd-200d-2642-fe0f","1f9d6-1f3fe-200d-2642-fe0f","1f9d6-1f3ff-200d-2642-fe0f"],a:"5.0"},{n:["woman in steamy room"],u:"1f9d6-200d-2640-fe0f",v:["1f9d6-1f3fb-200d-2640-fe0f","1f9d6-1f3fc-200d-2640-fe0f","1f9d6-1f3fd-200d-2640-fe0f","1f9d6-1f3fe-200d-2640-fe0f","1f9d6-1f3ff-200d-2640-fe0f"],a:"5.0"},{n:["person climbing"],u:"1f9d7",v:["1f9d7-1f3fb","1f9d7-1f3fc","1f9d7-1f3fd","1f9d7-1f3fe","1f9d7-1f3ff"],a:"5.0"},{n:["man climbing"],u:"1f9d7-200d-2642-fe0f",v:["1f9d7-1f3fb-200d-2642-fe0f","1f9d7-1f3fc-200d-2642-fe0f","1f9d7-1f3fd-200d-2642-fe0f","1f9d7-1f3fe-200d-2642-fe0f","1f9d7-1f3ff-200d-2642-fe0f"],a:"5.0"},{n:["woman climbing"],u:"1f9d7-200d-2640-fe0f",v:["1f9d7-1f3fb-200d-2640-fe0f","1f9d7-1f3fc-200d-2640-fe0f","1f9d7-1f3fd-200d-2640-fe0f","1f9d7-1f3fe-200d-2640-fe0f","1f9d7-1f3ff-200d-2640-fe0f"],a:"5.0"},{n:["fencer"],u:"1f93a",a:"3.0"},{n:["horse racing"],u:"1f3c7",v:["1f3c7-1f3fb","1f3c7-1f3fc","1f3c7-1f3fd","1f3c7-1f3fe","1f3c7-1f3ff"],a:"1.0"},{n:["skier"],u:"26f7-fe0f",a:"0.7"},{n:["snowboarder"],u:"1f3c2",v:["1f3c2-1f3fb","1f3c2-1f3fc","1f3c2-1f3fd","1f3c2-1f3fe","1f3c2-1f3ff"],a:"0.6"},{n:["golfer","person golfing"],u:"1f3cc-fe0f",v:["1f3cc-1f3fb","1f3cc-1f3fc","1f3cc-1f3fd","1f3cc-1f3fe","1f3cc-1f3ff"],a:"0.7"},{n:["man golfing","man-golfing"],u:"1f3cc-fe0f-200d-2642-fe0f",v:["1f3cc-1f3fb-200d-2642-fe0f","1f3cc-1f3fc-200d-2642-fe0f","1f3cc-1f3fd-200d-2642-fe0f","1f3cc-1f3fe-200d-2642-fe0f","1f3cc-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman golfing","woman-golfing"],u:"1f3cc-fe0f-200d-2640-fe0f",v:["1f3cc-1f3fb-200d-2640-fe0f","1f3cc-1f3fc-200d-2640-fe0f","1f3cc-1f3fd-200d-2640-fe0f","1f3cc-1f3fe-200d-2640-fe0f","1f3cc-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["surfer"],u:"1f3c4",v:["1f3c4-1f3fb","1f3c4-1f3fc","1f3c4-1f3fd","1f3c4-1f3fe","1f3c4-1f3ff"],a:"0.6"},{n:["man surfing","man-surfing"],u:"1f3c4-200d-2642-fe0f",v:["1f3c4-1f3fb-200d-2642-fe0f","1f3c4-1f3fc-200d-2642-fe0f","1f3c4-1f3fd-200d-2642-fe0f","1f3c4-1f3fe-200d-2642-fe0f","1f3c4-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman surfing","woman-surfing"],u:"1f3c4-200d-2640-fe0f",v:["1f3c4-1f3fb-200d-2640-fe0f","1f3c4-1f3fc-200d-2640-fe0f","1f3c4-1f3fd-200d-2640-fe0f","1f3c4-1f3fe-200d-2640-fe0f","1f3c4-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["rowboat"],u:"1f6a3",v:["1f6a3-1f3fb","1f6a3-1f3fc","1f6a3-1f3fd","1f6a3-1f3fe","1f6a3-1f3ff"],a:"1.0"},{n:["man rowing boat","man-rowing-boat"],u:"1f6a3-200d-2642-fe0f",v:["1f6a3-1f3fb-200d-2642-fe0f","1f6a3-1f3fc-200d-2642-fe0f","1f6a3-1f3fd-200d-2642-fe0f","1f6a3-1f3fe-200d-2642-fe0f","1f6a3-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman rowing boat","woman-rowing-boat"],u:"1f6a3-200d-2640-fe0f",v:["1f6a3-1f3fb-200d-2640-fe0f","1f6a3-1f3fc-200d-2640-fe0f","1f6a3-1f3fd-200d-2640-fe0f","1f6a3-1f3fe-200d-2640-fe0f","1f6a3-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["swimmer"],u:"1f3ca",v:["1f3ca-1f3fb","1f3ca-1f3fc","1f3ca-1f3fd","1f3ca-1f3fe","1f3ca-1f3ff"],a:"0.6"},{n:["man swimming","man-swimming"],u:"1f3ca-200d-2642-fe0f",v:["1f3ca-1f3fb-200d-2642-fe0f","1f3ca-1f3fc-200d-2642-fe0f","1f3ca-1f3fd-200d-2642-fe0f","1f3ca-1f3fe-200d-2642-fe0f","1f3ca-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman swimming","woman-swimming"],u:"1f3ca-200d-2640-fe0f",v:["1f3ca-1f3fb-200d-2640-fe0f","1f3ca-1f3fc-200d-2640-fe0f","1f3ca-1f3fd-200d-2640-fe0f","1f3ca-1f3fe-200d-2640-fe0f","1f3ca-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["person with ball","person bouncing ball"],u:"26f9-fe0f",v:["26f9-1f3fb","26f9-1f3fc","26f9-1f3fd","26f9-1f3fe","26f9-1f3ff"],a:"0.7"},{n:["man bouncing ball","man-bouncing-ball"],u:"26f9-fe0f-200d-2642-fe0f",v:["26f9-1f3fb-200d-2642-fe0f","26f9-1f3fc-200d-2642-fe0f","26f9-1f3fd-200d-2642-fe0f","26f9-1f3fe-200d-2642-fe0f","26f9-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman bouncing ball","woman-bouncing-ball"],u:"26f9-fe0f-200d-2640-fe0f",v:["26f9-1f3fb-200d-2640-fe0f","26f9-1f3fc-200d-2640-fe0f","26f9-1f3fd-200d-2640-fe0f","26f9-1f3fe-200d-2640-fe0f","26f9-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["weight lifter","person lifting weights"],u:"1f3cb-fe0f",v:["1f3cb-1f3fb","1f3cb-1f3fc","1f3cb-1f3fd","1f3cb-1f3fe","1f3cb-1f3ff"],a:"0.7"},{n:["man lifting weights","man-lifting-weights"],u:"1f3cb-fe0f-200d-2642-fe0f",v:["1f3cb-1f3fb-200d-2642-fe0f","1f3cb-1f3fc-200d-2642-fe0f","1f3cb-1f3fd-200d-2642-fe0f","1f3cb-1f3fe-200d-2642-fe0f","1f3cb-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman lifting weights","woman-lifting-weights"],u:"1f3cb-fe0f-200d-2640-fe0f",v:["1f3cb-1f3fb-200d-2640-fe0f","1f3cb-1f3fc-200d-2640-fe0f","1f3cb-1f3fd-200d-2640-fe0f","1f3cb-1f3fe-200d-2640-fe0f","1f3cb-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["bicyclist"],u:"1f6b4",v:["1f6b4-1f3fb","1f6b4-1f3fc","1f6b4-1f3fd","1f6b4-1f3fe","1f6b4-1f3ff"],a:"1.0"},{n:["man biking","man-biking"],u:"1f6b4-200d-2642-fe0f",v:["1f6b4-1f3fb-200d-2642-fe0f","1f6b4-1f3fc-200d-2642-fe0f","1f6b4-1f3fd-200d-2642-fe0f","1f6b4-1f3fe-200d-2642-fe0f","1f6b4-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman biking","woman-biking"],u:"1f6b4-200d-2640-fe0f",v:["1f6b4-1f3fb-200d-2640-fe0f","1f6b4-1f3fc-200d-2640-fe0f","1f6b4-1f3fd-200d-2640-fe0f","1f6b4-1f3fe-200d-2640-fe0f","1f6b4-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["mountain bicyclist"],u:"1f6b5",v:["1f6b5-1f3fb","1f6b5-1f3fc","1f6b5-1f3fd","1f6b5-1f3fe","1f6b5-1f3ff"],a:"1.0"},{n:["man mountain biking","man-mountain-biking"],u:"1f6b5-200d-2642-fe0f",v:["1f6b5-1f3fb-200d-2642-fe0f","1f6b5-1f3fc-200d-2642-fe0f","1f6b5-1f3fd-200d-2642-fe0f","1f6b5-1f3fe-200d-2642-fe0f","1f6b5-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman mountain biking","woman-mountain-biking"],u:"1f6b5-200d-2640-fe0f",v:["1f6b5-1f3fb-200d-2640-fe0f","1f6b5-1f3fc-200d-2640-fe0f","1f6b5-1f3fd-200d-2640-fe0f","1f6b5-1f3fe-200d-2640-fe0f","1f6b5-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["person doing cartwheel"],u:"1f938",v:["1f938-1f3fb","1f938-1f3fc","1f938-1f3fd","1f938-1f3fe","1f938-1f3ff"],a:"3.0"},{n:["man cartwheeling","man-cartwheeling"],u:"1f938-200d-2642-fe0f",v:["1f938-1f3fb-200d-2642-fe0f","1f938-1f3fc-200d-2642-fe0f","1f938-1f3fd-200d-2642-fe0f","1f938-1f3fe-200d-2642-fe0f","1f938-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman cartwheeling","woman-cartwheeling"],u:"1f938-200d-2640-fe0f",v:["1f938-1f3fb-200d-2640-fe0f","1f938-1f3fc-200d-2640-fe0f","1f938-1f3fd-200d-2640-fe0f","1f938-1f3fe-200d-2640-fe0f","1f938-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["wrestlers"],u:"1f93c",a:"3.0"},{n:["men wrestling","man-wrestling"],u:"1f93c-200d-2642-fe0f",a:"4.0"},{n:["women wrestling","woman-wrestling"],u:"1f93c-200d-2640-fe0f",a:"4.0"},{n:["water polo"],u:"1f93d",v:["1f93d-1f3fb","1f93d-1f3fc","1f93d-1f3fd","1f93d-1f3fe","1f93d-1f3ff"],a:"3.0"},{n:["man playing water polo","man-playing-water-polo"],u:"1f93d-200d-2642-fe0f",v:["1f93d-1f3fb-200d-2642-fe0f","1f93d-1f3fc-200d-2642-fe0f","1f93d-1f3fd-200d-2642-fe0f","1f93d-1f3fe-200d-2642-fe0f","1f93d-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman playing water polo","woman-playing-water-polo"],u:"1f93d-200d-2640-fe0f",v:["1f93d-1f3fb-200d-2640-fe0f","1f93d-1f3fc-200d-2640-fe0f","1f93d-1f3fd-200d-2640-fe0f","1f93d-1f3fe-200d-2640-fe0f","1f93d-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["handball"],u:"1f93e",v:["1f93e-1f3fb","1f93e-1f3fc","1f93e-1f3fd","1f93e-1f3fe","1f93e-1f3ff"],a:"3.0"},{n:["man playing handball","man-playing-handball"],u:"1f93e-200d-2642-fe0f",v:["1f93e-1f3fb-200d-2642-fe0f","1f93e-1f3fc-200d-2642-fe0f","1f93e-1f3fd-200d-2642-fe0f","1f93e-1f3fe-200d-2642-fe0f","1f93e-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman playing handball","woman-playing-handball"],u:"1f93e-200d-2640-fe0f",v:["1f93e-1f3fb-200d-2640-fe0f","1f93e-1f3fc-200d-2640-fe0f","1f93e-1f3fd-200d-2640-fe0f","1f93e-1f3fe-200d-2640-fe0f","1f93e-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["juggling"],u:"1f939",v:["1f939-1f3fb","1f939-1f3fc","1f939-1f3fd","1f939-1f3fe","1f939-1f3ff"],a:"3.0"},{n:["man juggling","man-juggling"],u:"1f939-200d-2642-fe0f",v:["1f939-1f3fb-200d-2642-fe0f","1f939-1f3fc-200d-2642-fe0f","1f939-1f3fd-200d-2642-fe0f","1f939-1f3fe-200d-2642-fe0f","1f939-1f3ff-200d-2642-fe0f"],a:"4.0"},{n:["woman juggling","woman-juggling"],u:"1f939-200d-2640-fe0f",v:["1f939-1f3fb-200d-2640-fe0f","1f939-1f3fc-200d-2640-fe0f","1f939-1f3fd-200d-2640-fe0f","1f939-1f3fe-200d-2640-fe0f","1f939-1f3ff-200d-2640-fe0f"],a:"4.0"},{n:["person in lotus position"],u:"1f9d8",v:["1f9d8-1f3fb","1f9d8-1f3fc","1f9d8-1f3fd","1f9d8-1f3fe","1f9d8-1f3ff"],a:"5.0"},{n:["man in lotus position"],u:"1f9d8-200d-2642-fe0f",v:["1f9d8-1f3fb-200d-2642-fe0f","1f9d8-1f3fc-200d-2642-fe0f","1f9d8-1f3fd-200d-2642-fe0f","1f9d8-1f3fe-200d-2642-fe0f","1f9d8-1f3ff-200d-2642-fe0f"],a:"5.0"},{n:["woman in lotus position"],u:"1f9d8-200d-2640-fe0f",v:["1f9d8-1f3fb-200d-2640-fe0f","1f9d8-1f3fc-200d-2640-fe0f","1f9d8-1f3fd-200d-2640-fe0f","1f9d8-1f3fe-200d-2640-fe0f","1f9d8-1f3ff-200d-2640-fe0f"],a:"5.0"},{n:["bath"],u:"1f6c0",v:["1f6c0-1f3fb","1f6c0-1f3fc","1f6c0-1f3fd","1f6c0-1f3fe","1f6c0-1f3ff"],a:"0.6"},{n:["sleeping accommodation"],u:"1f6cc",v:["1f6cc-1f3fb","1f6cc-1f3fc","1f6cc-1f3fd","1f6cc-1f3fe","1f6cc-1f3ff"],a:"1.0"},{n:["people holding hands"],u:"1f9d1-200d-1f91d-200d-1f9d1",v:["1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fb","1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fc","1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fd","1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fe","1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3ff","1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fb","1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fc","1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fd","1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fe","1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3ff","1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fb","1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fc","1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fd","1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fe","1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3ff","1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fb","1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fc","1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fd","1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fe","1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3ff","1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fb","1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fc","1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fd","1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fe","1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3ff"],a:"12.0"},{n:["women holding hands","two women holding hands"],u:"1f46d",v:["1f46d-1f3fb","1f46d-1f3fc","1f46d-1f3fd","1f46d-1f3fe","1f46d-1f3ff","1f469-1f3fb-200d-1f91d-200d-1f469-1f3fc","1f469-1f3fb-200d-1f91d-200d-1f469-1f3fd","1f469-1f3fb-200d-1f91d-200d-1f469-1f3fe","1f469-1f3fb-200d-1f91d-200d-1f469-1f3ff","1f469-1f3fc-200d-1f91d-200d-1f469-1f3fb","1f469-1f3fc-200d-1f91d-200d-1f469-1f3fd","1f469-1f3fc-200d-1f91d-200d-1f469-1f3fe","1f469-1f3fc-200d-1f91d-200d-1f469-1f3ff","1f469-1f3fd-200d-1f91d-200d-1f469-1f3fb","1f469-1f3fd-200d-1f91d-200d-1f469-1f3fc","1f469-1f3fd-200d-1f91d-200d-1f469-1f3fe","1f469-1f3fd-200d-1f91d-200d-1f469-1f3ff","1f469-1f3fe-200d-1f91d-200d-1f469-1f3fb","1f469-1f3fe-200d-1f91d-200d-1f469-1f3fc","1f469-1f3fe-200d-1f91d-200d-1f469-1f3fd","1f469-1f3fe-200d-1f91d-200d-1f469-1f3ff","1f469-1f3ff-200d-1f91d-200d-1f469-1f3fb","1f469-1f3ff-200d-1f91d-200d-1f469-1f3fc","1f469-1f3ff-200d-1f91d-200d-1f469-1f3fd","1f469-1f3ff-200d-1f91d-200d-1f469-1f3fe"],a:"1.0"},{n:["couple","man and woman holding hands","woman and man holding hands"],u:"1f46b",v:["1f46b-1f3fb","1f46b-1f3fc","1f46b-1f3fd","1f46b-1f3fe","1f46b-1f3ff","1f469-1f3fb-200d-1f91d-200d-1f468-1f3fc","1f469-1f3fb-200d-1f91d-200d-1f468-1f3fd","1f469-1f3fb-200d-1f91d-200d-1f468-1f3fe","1f469-1f3fb-200d-1f91d-200d-1f468-1f3ff","1f469-1f3fc-200d-1f91d-200d-1f468-1f3fb","1f469-1f3fc-200d-1f91d-200d-1f468-1f3fd","1f469-1f3fc-200d-1f91d-200d-1f468-1f3fe","1f469-1f3fc-200d-1f91d-200d-1f468-1f3ff","1f469-1f3fd-200d-1f91d-200d-1f468-1f3fb","1f469-1f3fd-200d-1f91d-200d-1f468-1f3fc","1f469-1f3fd-200d-1f91d-200d-1f468-1f3fe","1f469-1f3fd-200d-1f91d-200d-1f468-1f3ff","1f469-1f3fe-200d-1f91d-200d-1f468-1f3fb","1f469-1f3fe-200d-1f91d-200d-1f468-1f3fc","1f469-1f3fe-200d-1f91d-200d-1f468-1f3fd","1f469-1f3fe-200d-1f91d-200d-1f468-1f3ff","1f469-1f3ff-200d-1f91d-200d-1f468-1f3fb","1f469-1f3ff-200d-1f91d-200d-1f468-1f3fc","1f469-1f3ff-200d-1f91d-200d-1f468-1f3fd","1f469-1f3ff-200d-1f91d-200d-1f468-1f3fe"],a:"0.6"},{n:["men holding hands","two men holding hands"],u:"1f46c",v:["1f46c-1f3fb","1f46c-1f3fc","1f46c-1f3fd","1f46c-1f3fe","1f46c-1f3ff","1f468-1f3fb-200d-1f91d-200d-1f468-1f3fc","1f468-1f3fb-200d-1f91d-200d-1f468-1f3fd","1f468-1f3fb-200d-1f91d-200d-1f468-1f3fe","1f468-1f3fb-200d-1f91d-200d-1f468-1f3ff","1f468-1f3fc-200d-1f91d-200d-1f468-1f3fb","1f468-1f3fc-200d-1f91d-200d-1f468-1f3fd","1f468-1f3fc-200d-1f91d-200d-1f468-1f3fe","1f468-1f3fc-200d-1f91d-200d-1f468-1f3ff","1f468-1f3fd-200d-1f91d-200d-1f468-1f3fb","1f468-1f3fd-200d-1f91d-200d-1f468-1f3fc","1f468-1f3fd-200d-1f91d-200d-1f468-1f3fe","1f468-1f3fd-200d-1f91d-200d-1f468-1f3ff","1f468-1f3fe-200d-1f91d-200d-1f468-1f3fb","1f468-1f3fe-200d-1f91d-200d-1f468-1f3fc","1f468-1f3fe-200d-1f91d-200d-1f468-1f3fd","1f468-1f3fe-200d-1f91d-200d-1f468-1f3ff","1f468-1f3ff-200d-1f91d-200d-1f468-1f3fb","1f468-1f3ff-200d-1f91d-200d-1f468-1f3fc","1f468-1f3ff-200d-1f91d-200d-1f468-1f3fd","1f468-1f3ff-200d-1f91d-200d-1f468-1f3fe"],a:"1.0"},{n:["kiss","couplekiss"],u:"1f48f",v:["1f48f-1f3fb","1f48f-1f3fc","1f48f-1f3fd","1f48f-1f3fe","1f48f-1f3ff","1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc","1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd","1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe","1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff","1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb","1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd","1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe","1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff","1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb","1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc","1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe","1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff","1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb","1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc","1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd","1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff","1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb","1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc","1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd","1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe"],a:"0.6"},{n:["woman-kiss-man","kiss: woman, man"],u:"1f469-200d-2764-fe0f-200d-1f48b-200d-1f468",v:["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb","1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc","1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd","1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe","1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff","1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb","1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc","1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd","1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe","1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff","1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb","1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc","1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd","1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe","1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff","1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb","1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc","1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd","1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe","1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff","1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb","1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc","1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd","1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe","1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff"],a:"2.0"},{n:["man-kiss-man","kiss: man, man"],u:"1f468-200d-2764-fe0f-200d-1f48b-200d-1f468",v:["1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb","1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc","1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd","1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe","1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff","1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb","1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc","1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd","1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe","1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff","1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb","1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc","1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd","1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe","1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff","1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb","1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc","1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd","1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe","1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff","1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb","1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc","1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd","1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe","1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff"],a:"2.0"},{n:["woman-kiss-woman","kiss: woman, woman"],u:"1f469-200d-2764-fe0f-200d-1f48b-200d-1f469",v:["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb","1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc","1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd","1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe","1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff","1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb","1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc","1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd","1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe","1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff","1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb","1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc","1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd","1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe","1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff","1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb","1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc","1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd","1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe","1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff","1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb","1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc","1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd","1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe","1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff"],a:"2.0"},{n:["couple with heart"],u:"1f491",v:["1f491-1f3fb","1f491-1f3fc","1f491-1f3fd","1f491-1f3fe","1f491-1f3ff","1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fc","1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fd","1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fe","1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3ff","1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fb","1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fd","1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fe","1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3ff","1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fb","1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fc","1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fe","1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3ff","1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fb","1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fc","1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fd","1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3ff","1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fb","1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fc","1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fd","1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fe"],a:"0.6"},{n:["woman-heart-man","couple with heart: woman, man"],u:"1f469-200d-2764-fe0f-200d-1f468",v:["1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fb","1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fc","1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fd","1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fe","1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3ff","1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fb","1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fc","1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fd","1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fe","1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3ff","1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fb","1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fc","1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fd","1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fe","1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3ff","1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fb","1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fc","1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fd","1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fe","1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3ff","1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fb","1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fc","1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fd","1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fe","1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3ff"],a:"2.0"},{n:["man-heart-man","couple with heart: man, man"],u:"1f468-200d-2764-fe0f-200d-1f468",v:["1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fb","1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fc","1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fd","1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fe","1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3ff","1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fb","1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fc","1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fd","1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fe","1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3ff","1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fb","1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fc","1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fd","1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fe","1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3ff","1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fb","1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fc","1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fd","1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fe","1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3ff","1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fb","1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fc","1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fd","1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fe","1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3ff"],a:"2.0"},{n:["woman-heart-woman","couple with heart: woman, woman"],u:"1f469-200d-2764-fe0f-200d-1f469",v:["1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fb","1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fc","1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fd","1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fe","1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3ff","1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fb","1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fc","1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fd","1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fe","1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3ff","1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fb","1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fc","1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fd","1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fe","1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3ff","1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fb","1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fc","1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fd","1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fe","1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3ff","1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fb","1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fc","1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fd","1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fe","1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3ff"],a:"2.0"},{n:["family"],u:"1f46a",a:"0.6"},{n:["man-woman-boy","family: man, woman, boy"],u:"1f468-200d-1f469-200d-1f466",a:"2.0"},{n:["man-woman-girl","family: man, woman, girl"],u:"1f468-200d-1f469-200d-1f467",a:"2.0"},{n:["man-woman-girl-boy","family: man, woman, girl, boy"],u:"1f468-200d-1f469-200d-1f467-200d-1f466",a:"2.0"},{n:["man-woman-boy-boy","family: man, woman, boy, boy"],u:"1f468-200d-1f469-200d-1f466-200d-1f466",a:"2.0"},{n:["man-woman-girl-girl","family: man, woman, girl, girl"],u:"1f468-200d-1f469-200d-1f467-200d-1f467",a:"2.0"},{n:["man-man-boy","family: man, man, boy"],u:"1f468-200d-1f468-200d-1f466",a:"2.0"},{n:["man-man-girl","family: man, man, girl"],u:"1f468-200d-1f468-200d-1f467",a:"2.0"},{n:["man-man-girl-boy","family: man, man, girl, boy"],u:"1f468-200d-1f468-200d-1f467-200d-1f466",a:"2.0"},{n:["man-man-boy-boy","family: man, man, boy, boy"],u:"1f468-200d-1f468-200d-1f466-200d-1f466",a:"2.0"},{n:["man-man-girl-girl","family: man, man, girl, girl"],u:"1f468-200d-1f468-200d-1f467-200d-1f467",a:"2.0"},{n:["woman-woman-boy","family: woman, woman, boy"],u:"1f469-200d-1f469-200d-1f466",a:"2.0"},{n:["woman-woman-girl","family: woman, woman, girl"],u:"1f469-200d-1f469-200d-1f467",a:"2.0"},{n:["woman-woman-girl-boy","family: woman, woman, girl, boy"],u:"1f469-200d-1f469-200d-1f467-200d-1f466",a:"2.0"},{n:["woman-woman-boy-boy","family: woman, woman, boy, boy"],u:"1f469-200d-1f469-200d-1f466-200d-1f466",a:"2.0"},{n:["woman-woman-girl-girl","family: woman, woman, girl, girl"],u:"1f469-200d-1f469-200d-1f467-200d-1f467",a:"2.0"},{n:["man-boy","family: man, boy"],u:"1f468-200d-1f466",a:"4.0"},{n:["man-boy-boy","family: man, boy, boy"],u:"1f468-200d-1f466-200d-1f466",a:"4.0"},{n:["man-girl","family: man, girl"],u:"1f468-200d-1f467",a:"4.0"},{n:["man-girl-boy","family: man, girl, boy"],u:"1f468-200d-1f467-200d-1f466",a:"4.0"},{n:["man-girl-girl","family: man, girl, girl"],u:"1f468-200d-1f467-200d-1f467",a:"4.0"},{n:["woman-boy","family: woman, boy"],u:"1f469-200d-1f466",a:"4.0"},{n:["woman-boy-boy","family: woman, boy, boy"],u:"1f469-200d-1f466-200d-1f466",a:"4.0"},{n:["woman-girl","family: woman, girl"],u:"1f469-200d-1f467",a:"4.0"},{n:["woman-girl-boy","family: woman, girl, boy"],u:"1f469-200d-1f467-200d-1f466",a:"4.0"},{n:["woman-girl-girl","family: woman, girl, girl"],u:"1f469-200d-1f467-200d-1f467",a:"4.0"},{n:["speaking head","speaking head in silhouette"],u:"1f5e3-fe0f",a:"0.7"},{n:["bust in silhouette"],u:"1f464",a:"0.6"},{n:["busts in silhouette"],u:"1f465",a:"1.0"},{n:["people hugging"],u:"1fac2",a:"13.0"},{n:["footprints"],u:"1f463",a:"0.6"}],kT=[{n:["monkey face"],u:"1f435",a:"0.6"},{n:["monkey"],u:"1f412",a:"0.6"},{n:["gorilla"],u:"1f98d",a:"3.0"},{n:["orangutan"],u:"1f9a7",a:"12.0"},{n:["dog","dog face"],u:"1f436",a:"0.6"},{n:["dog","dog2"],u:"1f415",a:"0.7"},{n:["guide dog"],u:"1f9ae",a:"12.0"},{n:["service dog"],u:"1f415-200d-1f9ba",a:"12.0"},{n:["poodle"],u:"1f429",a:"0.6"},{n:["wolf","wolf face"],u:"1f43a",a:"0.6"},{n:["fox face"],u:"1f98a",a:"3.0"},{n:["raccoon"],u:"1f99d",a:"11.0"},{n:["cat","cat face"],u:"1f431",a:"0.6"},{n:["cat","cat2"],u:"1f408",a:"0.7"},{n:["black cat"],u:"1f408-200d-2b1b",a:"13.0"},{n:["lion face"],u:"1f981",a:"1.0"},{n:["tiger","tiger face"],u:"1f42f",a:"0.6"},{n:["tiger","tiger2"],u:"1f405",a:"1.0"},{n:["leopard"],u:"1f406",a:"1.0"},{n:["horse","horse face"],u:"1f434",a:"0.6"},{n:["horse","racehorse"],u:"1f40e",a:"0.6"},{n:["unicorn face"],u:"1f984",a:"1.0"},{n:["zebra face"],u:"1f993",a:"5.0"},{n:["deer"],u:"1f98c",a:"3.0"},{n:["bison"],u:"1f9ac",a:"13.0"},{n:["cow","cow face"],u:"1f42e",a:"0.6"},{n:["ox"],u:"1f402",a:"1.0"},{n:["water buffalo"],u:"1f403",a:"1.0"},{n:["cow","cow2"],u:"1f404",a:"1.0"},{n:["pig","pig face"],u:"1f437",a:"0.6"},{n:["pig","pig2"],u:"1f416",a:"1.0"},{n:["boar"],u:"1f417",a:"0.6"},{n:["pig nose"],u:"1f43d",a:"0.6"},{n:["ram"],u:"1f40f",a:"1.0"},{n:["sheep"],u:"1f411",a:"0.6"},{n:["goat"],u:"1f410",a:"1.0"},{n:["dromedary camel"],u:"1f42a",a:"1.0"},{n:["camel","bactrian camel"],u:"1f42b",a:"0.6"},{n:["llama"],u:"1f999",a:"11.0"},{n:["giraffe face"],u:"1f992",a:"5.0"},{n:["elephant"],u:"1f418",a:"0.6"},{n:["mammoth"],u:"1f9a3",a:"13.0"},{n:["rhinoceros"],u:"1f98f",a:"3.0"},{n:["hippopotamus"],u:"1f99b",a:"11.0"},{n:["mouse","mouse face"],u:"1f42d",a:"0.6"},{n:["mouse","mouse2"],u:"1f401",a:"1.0"},{n:["rat"],u:"1f400",a:"1.0"},{n:["hamster","hamster face"],u:"1f439",a:"0.6"},{n:["rabbit","rabbit face"],u:"1f430",a:"0.6"},{n:["rabbit","rabbit2"],u:"1f407",a:"1.0"},{n:["chipmunk"],u:"1f43f-fe0f",a:"0.7"},{n:["beaver"],u:"1f9ab",a:"13.0"},{n:["hedgehog"],u:"1f994",a:"5.0"},{n:["bat"],u:"1f987",a:"3.0"},{n:["bear","bear face"],u:"1f43b",a:"0.6"},{n:["polar bear"],u:"1f43b-200d-2744-fe0f",a:"13.0"},{n:["koala"],u:"1f428",a:"0.6"},{n:["panda face"],u:"1f43c",a:"0.6"},{n:["sloth"],u:"1f9a5",a:"12.0"},{n:["otter"],u:"1f9a6",a:"12.0"},{n:["skunk"],u:"1f9a8",a:"12.0"},{n:["kangaroo"],u:"1f998",a:"11.0"},{n:["badger"],u:"1f9a1",a:"11.0"},{n:["feet","paw prints"],u:"1f43e",a:"0.6"},{n:["turkey"],u:"1f983",a:"1.0"},{n:["chicken"],u:"1f414",a:"0.6"},{n:["rooster"],u:"1f413",a:"1.0"},{n:["hatching chick"],u:"1f423",a:"0.6"},{n:["baby chick"],u:"1f424",a:"0.6"},{n:["hatched chick","front-facing baby chick"],u:"1f425",a:"0.6"},{n:["bird"],u:"1f426",a:"0.6"},{n:["penguin"],u:"1f427",a:"0.6"},{n:["dove","dove of peace"],u:"1f54a-fe0f",a:"0.7"},{n:["eagle"],u:"1f985",a:"3.0"},{n:["duck"],u:"1f986",a:"3.0"},{n:["swan"],u:"1f9a2",a:"11.0"},{n:["owl"],u:"1f989",a:"3.0"},{n:["dodo"],u:"1f9a4",a:"13.0"},{n:["feather"],u:"1fab6",a:"13.0"},{n:["flamingo"],u:"1f9a9",a:"12.0"},{n:["peacock"],u:"1f99a",a:"11.0"},{n:["parrot"],u:"1f99c",a:"11.0"},{n:["frog","frog face"],u:"1f438",a:"0.6"},{n:["crocodile"],u:"1f40a",a:"1.0"},{n:["turtle"],u:"1f422",a:"0.6"},{n:["lizard"],u:"1f98e",a:"3.0"},{n:["snake"],u:"1f40d",a:"0.6"},{n:["dragon face"],u:"1f432",a:"0.6"},{n:["dragon"],u:"1f409",a:"1.0"},{n:["sauropod"],u:"1f995",a:"5.0"},{n:["t-rex"],u:"1f996",a:"5.0"},{n:["whale","spouting whale"],u:"1f433",a:"0.6"},{n:["whale","whale2"],u:"1f40b",a:"1.0"},{n:["dolphin","flipper"],u:"1f42c",a:"0.6"},{n:["seal"],u:"1f9ad",a:"13.0"},{n:["fish"],u:"1f41f",a:"0.6"},{n:["tropical fish"],u:"1f420",a:"0.6"},{n:["blowfish"],u:"1f421",a:"0.6"},{n:["shark"],u:"1f988",a:"3.0"},{n:["octopus"],u:"1f419",a:"0.6"},{n:["shell","spiral shell"],u:"1f41a",a:"0.6"},{n:["coral"],u:"1fab8",a:"14.0"},{n:["snail"],u:"1f40c",a:"0.6"},{n:["butterfly"],u:"1f98b",a:"3.0"},{n:["bug"],u:"1f41b",a:"0.6"},{n:["ant"],u:"1f41c",a:"0.6"},{n:["bee","honeybee"],u:"1f41d",a:"0.6"},{n:["beetle"],u:"1fab2",a:"13.0"},{n:["ladybug","lady beetle"],u:"1f41e",a:"0.6"},{n:["cricket"],u:"1f997",a:"5.0"},{n:["cockroach"],u:"1fab3",a:"13.0"},{n:["spider"],u:"1f577-fe0f",a:"0.7"},{n:["spider web"],u:"1f578-fe0f",a:"0.7"},{n:["scorpion"],u:"1f982",a:"1.0"},{n:["mosquito"],u:"1f99f",a:"11.0"},{n:["fly"],u:"1fab0",a:"13.0"},{n:["worm"],u:"1fab1",a:"13.0"},{n:["microbe"],u:"1f9a0",a:"11.0"},{n:["bouquet"],u:"1f490",a:"0.6"},{n:["cherry blossom"],u:"1f338",a:"0.6"},{n:["white flower"],u:"1f4ae",a:"0.6"},{n:["lotus"],u:"1fab7",a:"14.0"},{n:["rosette"],u:"1f3f5-fe0f",a:"0.7"},{n:["rose"],u:"1f339",a:"0.6"},{n:["wilted flower"],u:"1f940",a:"3.0"},{n:["hibiscus"],u:"1f33a",a:"0.6"},{n:["sunflower"],u:"1f33b",a:"0.6"},{n:["blossom"],u:"1f33c",a:"0.6"},{n:["tulip"],u:"1f337",a:"0.6"},{n:["seedling"],u:"1f331",a:"0.6"},{n:["potted plant"],u:"1fab4",a:"13.0"},{n:["evergreen tree"],u:"1f332",a:"1.0"},{n:["deciduous tree"],u:"1f333",a:"1.0"},{n:["palm tree"],u:"1f334",a:"0.6"},{n:["cactus"],u:"1f335",a:"0.6"},{n:["ear of rice"],u:"1f33e",a:"0.6"},{n:["herb"],u:"1f33f",a:"0.6"},{n:["shamrock"],u:"2618-fe0f",a:"1.0"},{n:["four leaf clover"],u:"1f340",a:"0.6"},{n:["maple leaf"],u:"1f341",a:"0.6"},{n:["fallen leaf"],u:"1f342",a:"0.6"},{n:["leaves","leaf fluttering in wind"],u:"1f343",a:"0.6"},{n:["empty nest"],u:"1fab9",a:"14.0"},{n:["nest with eggs"],u:"1faba",a:"14.0"}],ET=[{n:["grapes"],u:"1f347",a:"0.6"},{n:["melon"],u:"1f348",a:"0.6"},{n:["watermelon"],u:"1f349",a:"0.6"},{n:["tangerine"],u:"1f34a",a:"0.6"},{n:["lemon"],u:"1f34b",a:"1.0"},{n:["banana"],u:"1f34c",a:"0.6"},{n:["pineapple"],u:"1f34d",a:"0.6"},{n:["mango"],u:"1f96d",a:"11.0"},{n:["apple","red apple"],u:"1f34e",a:"0.6"},{n:["green apple"],u:"1f34f",a:"0.6"},{n:["pear"],u:"1f350",a:"1.0"},{n:["peach"],u:"1f351",a:"0.6"},{n:["cherries"],u:"1f352",a:"0.6"},{n:["strawberry"],u:"1f353",a:"0.6"},{n:["blueberries"],u:"1fad0",a:"13.0"},{n:["kiwifruit"],u:"1f95d",a:"3.0"},{n:["tomato"],u:"1f345",a:"0.6"},{n:["olive"],u:"1fad2",a:"13.0"},{n:["coconut"],u:"1f965",a:"5.0"},{n:["avocado"],u:"1f951",a:"3.0"},{n:["eggplant","aubergine"],u:"1f346",a:"0.6"},{n:["potato"],u:"1f954",a:"3.0"},{n:["carrot"],u:"1f955",a:"3.0"},{n:["corn","ear of maize"],u:"1f33d",a:"0.6"},{n:["hot pepper"],u:"1f336-fe0f",a:"0.7"},{n:["bell pepper"],u:"1fad1",a:"13.0"},{n:["cucumber"],u:"1f952",a:"3.0"},{n:["leafy green"],u:"1f96c",a:"11.0"},{n:["broccoli"],u:"1f966",a:"5.0"},{n:["garlic"],u:"1f9c4",a:"12.0"},{n:["onion"],u:"1f9c5",a:"12.0"},{n:["mushroom"],u:"1f344",a:"0.6"},{n:["peanuts"],u:"1f95c",a:"3.0"},{n:["beans"],u:"1fad8",a:"14.0"},{n:["chestnut"],u:"1f330",a:"0.6"},{n:["bread"],u:"1f35e",a:"0.6"},{n:["croissant"],u:"1f950",a:"3.0"},{n:["baguette bread"],u:"1f956",a:"3.0"},{n:["flatbread"],u:"1fad3",a:"13.0"},{n:["pretzel"],u:"1f968",a:"5.0"},{n:["bagel"],u:"1f96f",a:"11.0"},{n:["pancakes"],u:"1f95e",a:"3.0"},{n:["waffle"],u:"1f9c7",a:"12.0"},{n:["cheese wedge"],u:"1f9c0",a:"1.0"},{n:["meat on bone"],u:"1f356",a:"0.6"},{n:["poultry leg"],u:"1f357",a:"0.6"},{n:["cut of meat"],u:"1f969",a:"5.0"},{n:["bacon"],u:"1f953",a:"3.0"},{n:["hamburger"],u:"1f354",a:"0.6"},{n:["fries","french fries"],u:"1f35f",a:"0.6"},{n:["pizza","slice of pizza"],u:"1f355",a:"0.6"},{n:["hotdog","hot dog"],u:"1f32d",a:"1.0"},{n:["sandwich"],u:"1f96a",a:"5.0"},{n:["taco"],u:"1f32e",a:"1.0"},{n:["burrito"],u:"1f32f",a:"1.0"},{n:["tamale"],u:"1fad4",a:"13.0"},{n:["stuffed flatbread"],u:"1f959",a:"3.0"},{n:["falafel"],u:"1f9c6",a:"12.0"},{n:["egg"],u:"1f95a",a:"3.0"},{n:["cooking","fried egg"],u:"1f373",a:"0.6"},{n:["shallow pan of food"],u:"1f958",a:"3.0"},{n:["stew","pot of food"],u:"1f372",a:"0.6"},{n:["fondue"],u:"1fad5",a:"13.0"},{n:["bowl with spoon"],u:"1f963",a:"5.0"},{n:["green salad"],u:"1f957",a:"3.0"},{n:["popcorn"],u:"1f37f",a:"1.0"},{n:["butter"],u:"1f9c8",a:"12.0"},{n:["salt","salt shaker"],u:"1f9c2",a:"11.0"},{n:["canned food"],u:"1f96b",a:"5.0"},{n:["bento","bento box"],u:"1f371",a:"0.6"},{n:["rice cracker"],u:"1f358",a:"0.6"},{n:["rice ball"],u:"1f359",a:"0.6"},{n:["rice","cooked rice"],u:"1f35a",a:"0.6"},{n:["curry","curry and rice"],u:"1f35b",a:"0.6"},{n:["ramen","steaming bowl"],u:"1f35c",a:"0.6"},{n:["spaghetti"],u:"1f35d",a:"0.6"},{n:["sweet potato","roasted sweet potato"],u:"1f360",a:"0.6"},{n:["oden"],u:"1f362",a:"0.6"},{n:["sushi"],u:"1f363",a:"0.6"},{n:["fried shrimp"],u:"1f364",a:"0.6"},{n:["fish cake","fish cake with swirl design"],u:"1f365",a:"0.6"},{n:["moon cake"],u:"1f96e",a:"11.0"},{n:["dango"],u:"1f361",a:"0.6"},{n:["dumpling"],u:"1f95f",a:"5.0"},{n:["fortune cookie"],u:"1f960",a:"5.0"},{n:["takeout box"],u:"1f961",a:"5.0"},{n:["crab"],u:"1f980",a:"1.0"},{n:["lobster"],u:"1f99e",a:"11.0"},{n:["shrimp"],u:"1f990",a:"3.0"},{n:["squid"],u:"1f991",a:"3.0"},{n:["oyster"],u:"1f9aa",a:"12.0"},{n:["icecream","soft ice cream"],u:"1f366",a:"0.6"},{n:["shaved ice"],u:"1f367",a:"0.6"},{n:["ice cream"],u:"1f368",a:"0.6"},{n:["doughnut"],u:"1f369",a:"0.6"},{n:["cookie"],u:"1f36a",a:"0.6"},{n:["birthday","birthday cake"],u:"1f382",a:"0.6"},{n:["cake","shortcake"],u:"1f370",a:"0.6"},{n:["cupcake"],u:"1f9c1",a:"11.0"},{n:["pie"],u:"1f967",a:"5.0"},{n:["chocolate bar"],u:"1f36b",a:"0.6"},{n:["candy"],u:"1f36c",a:"0.6"},{n:["lollipop"],u:"1f36d",a:"0.6"},{n:["custard"],u:"1f36e",a:"0.6"},{n:["honey pot"],u:"1f36f",a:"0.6"},{n:["baby bottle"],u:"1f37c",a:"1.0"},{n:["glass of milk"],u:"1f95b",a:"3.0"},{n:["coffee","hot beverage"],u:"2615",a:"0.6"},{n:["teapot"],u:"1fad6",a:"13.0"},{n:["tea","teacup without handle"],u:"1f375",a:"0.6"},{n:["sake","sake bottle and cup"],u:"1f376",a:"0.6"},{n:["champagne","bottle with popping cork"],u:"1f37e",a:"1.0"},{n:["wine glass"],u:"1f377",a:"0.6"},{n:["cocktail","cocktail glass"],u:"1f378",a:"0.6"},{n:["tropical drink"],u:"1f379",a:"0.6"},{n:["beer","beer mug"],u:"1f37a",a:"0.6"},{n:["beers","clinking beer mugs"],u:"1f37b",a:"0.6"},{n:["clinking glasses"],u:"1f942",a:"3.0"},{n:["tumbler glass"],u:"1f943",a:"3.0"},{n:["pouring liquid"],u:"1fad7",a:"14.0"},{n:["cup with straw"],u:"1f964",a:"5.0"},{n:["bubble tea"],u:"1f9cb",a:"13.0"},{n:["beverage box"],u:"1f9c3",a:"12.0"},{n:["mate drink"],u:"1f9c9",a:"12.0"},{n:["ice cube"],u:"1f9ca",a:"12.0"},{n:["chopsticks"],u:"1f962",a:"5.0"},{n:["knife fork plate","fork and knife with plate"],u:"1f37d-fe0f",a:"0.7"},{n:["fork and knife"],u:"1f374",a:"0.6"},{n:["spoon"],u:"1f944",a:"3.0"},{n:["hocho","knife"],u:"1f52a",a:"0.6"},{n:["jar"],u:"1fad9",a:"14.0"},{n:["amphora"],u:"1f3fa",a:"1.0"}],TT=[{n:["earth africa","earth globe europe-africa"],u:"1f30d",a:"0.7"},{n:["earth americas","earth globe americas"],u:"1f30e",a:"0.7"},{n:["earth asia","earth globe asia-australia"],u:"1f30f",a:"0.6"},{n:["globe with meridians"],u:"1f310",a:"1.0"},{n:["world map"],u:"1f5fa-fe0f",a:"0.7"},{n:["japan","silhouette of japan"],u:"1f5fe",a:"0.6"},{n:["compass"],u:"1f9ed",a:"11.0"},{n:["snow-capped mountain","snow capped mountain"],u:"1f3d4-fe0f",a:"0.7"},{n:["mountain"],u:"26f0-fe0f",a:"0.7"},{n:["volcano"],u:"1f30b",a:"0.6"},{n:["mount fuji"],u:"1f5fb",a:"0.6"},{n:["camping"],u:"1f3d5-fe0f",a:"0.7"},{n:["beach with umbrella"],u:"1f3d6-fe0f",a:"0.7"},{n:["desert"],u:"1f3dc-fe0f",a:"0.7"},{n:["desert island"],u:"1f3dd-fe0f",a:"0.7"},{n:["national park"],u:"1f3de-fe0f",a:"0.7"},{n:["stadium"],u:"1f3df-fe0f",a:"0.7"},{n:["classical building"],u:"1f3db-fe0f",a:"0.7"},{n:["building construction"],u:"1f3d7-fe0f",a:"0.7"},{n:["brick","bricks"],u:"1f9f1",a:"11.0"},{n:["rock"],u:"1faa8",a:"13.0"},{n:["wood"],u:"1fab5",a:"13.0"},{n:["hut"],u:"1f6d6",a:"13.0"},{n:["houses","house buildings"],u:"1f3d8-fe0f",a:"0.7"},{n:["derelict house","derelict house building"],u:"1f3da-fe0f",a:"0.7"},{n:["house","house building"],u:"1f3e0",a:"0.6"},{n:["house with garden"],u:"1f3e1",a:"0.6"},{n:["office","office building"],u:"1f3e2",a:"0.6"},{n:["post office","japanese post office"],u:"1f3e3",a:"0.6"},{n:["european post office"],u:"1f3e4",a:"1.0"},{n:["hospital"],u:"1f3e5",a:"0.6"},{n:["bank"],u:"1f3e6",a:"0.6"},{n:["hotel"],u:"1f3e8",a:"0.6"},{n:["love hotel"],u:"1f3e9",a:"0.6"},{n:["convenience store"],u:"1f3ea",a:"0.6"},{n:["school"],u:"1f3eb",a:"0.6"},{n:["department store"],u:"1f3ec",a:"0.6"},{n:["factory"],u:"1f3ed",a:"0.6"},{n:["japanese castle"],u:"1f3ef",a:"0.6"},{n:["european castle"],u:"1f3f0",a:"0.6"},{n:["wedding"],u:"1f492",a:"0.6"},{n:["tokyo tower"],u:"1f5fc",a:"0.6"},{n:["statue of liberty"],u:"1f5fd",a:"0.6"},{n:["church"],u:"26ea",a:"0.6"},{n:["mosque"],u:"1f54c",a:"1.0"},{n:["hindu temple"],u:"1f6d5",a:"12.0"},{n:["synagogue"],u:"1f54d",a:"1.0"},{n:["shinto shrine"],u:"26e9-fe0f",a:"0.7"},{n:["kaaba"],u:"1f54b",a:"1.0"},{n:["fountain"],u:"26f2",a:"0.6"},{n:["tent"],u:"26fa",a:"0.6"},{n:["foggy"],u:"1f301",a:"0.6"},{n:["night with stars"],u:"1f303",a:"0.6"},{n:["cityscape"],u:"1f3d9-fe0f",a:"0.7"},{n:["sunrise over mountains"],u:"1f304",a:"0.6"},{n:["sunrise"],u:"1f305",a:"0.6"},{n:["city sunset","cityscape at dusk"],u:"1f306",a:"0.6"},{n:["city sunrise","sunset over buildings"],u:"1f307",a:"0.6"},{n:["bridge at night"],u:"1f309",a:"0.6"},{n:["hotsprings","hot springs"],u:"2668-fe0f",a:"0.6"},{n:["carousel horse"],u:"1f3a0",a:"0.6"},{n:["playground slide"],u:"1f6dd",a:"14.0"},{n:["ferris wheel"],u:"1f3a1",a:"0.6"},{n:["roller coaster"],u:"1f3a2",a:"0.6"},{n:["barber","barber pole"],u:"1f488",a:"0.6"},{n:["circus tent"],u:"1f3aa",a:"0.6"},{n:["steam locomotive"],u:"1f682",a:"1.0"},{n:["railway car"],u:"1f683",a:"0.6"},{n:["high-speed train","bullettrain side"],u:"1f684",a:"0.6"},{n:["bullettrain front","high-speed train with bullet nose"],u:"1f685",a:"0.6"},{n:["train","train2"],u:"1f686",a:"1.0"},{n:["metro"],u:"1f687",a:"0.6"},{n:["light rail"],u:"1f688",a:"1.0"},{n:["station"],u:"1f689",a:"0.6"},{n:["tram"],u:"1f68a",a:"1.0"},{n:["monorail"],u:"1f69d",a:"1.0"},{n:["mountain railway"],u:"1f69e",a:"1.0"},{n:["train","tram car"],u:"1f68b",a:"1.0"},{n:["bus"],u:"1f68c",a:"0.6"},{n:["oncoming bus"],u:"1f68d",a:"0.7"},{n:["trolleybus"],u:"1f68e",a:"1.0"},{n:["minibus"],u:"1f690",a:"1.0"},{n:["ambulance"],u:"1f691",a:"0.6"},{n:["fire engine"],u:"1f692",a:"0.6"},{n:["police car"],u:"1f693",a:"0.6"},{n:["oncoming police car"],u:"1f694",a:"0.7"},{n:["taxi"],u:"1f695",a:"0.6"},{n:["oncoming taxi"],u:"1f696",a:"1.0"},{n:["car","red car","automobile"],u:"1f697",a:"0.6"},{n:["oncoming automobile"],u:"1f698",a:"0.7"},{n:["blue car","recreational vehicle"],u:"1f699",a:"0.6"},{n:["pickup truck"],u:"1f6fb",a:"13.0"},{n:["truck","delivery truck"],u:"1f69a",a:"0.6"},{n:["articulated lorry"],u:"1f69b",a:"1.0"},{n:["tractor"],u:"1f69c",a:"1.0"},{n:["racing car"],u:"1f3ce-fe0f",a:"0.7"},{n:["motorcycle","racing motorcycle"],u:"1f3cd-fe0f",a:"0.7"},{n:["motor scooter"],u:"1f6f5",a:"3.0"},{n:["manual wheelchair"],u:"1f9bd",a:"12.0"},{n:["motorized wheelchair"],u:"1f9bc",a:"12.0"},{n:["auto rickshaw"],u:"1f6fa",a:"12.0"},{n:["bike","bicycle"],u:"1f6b2",a:"0.6"},{n:["scooter"],u:"1f6f4",a:"3.0"},{n:["skateboard"],u:"1f6f9",a:"11.0"},{n:["roller skate"],u:"1f6fc",a:"13.0"},{n:["busstop","bus stop"],u:"1f68f",a:"0.6"},{n:["motorway"],u:"1f6e3-fe0f",a:"0.7"},{n:["railway track"],u:"1f6e4-fe0f",a:"0.7"},{n:["oil drum"],u:"1f6e2-fe0f",a:"0.7"},{n:["fuelpump","fuel pump"],u:"26fd",a:"0.6"},{n:["wheel"],u:"1f6de",a:"14.0"},{n:["rotating light","police cars revolving light"],u:"1f6a8",a:"0.6"},{n:["traffic light","horizontal traffic light"],u:"1f6a5",a:"0.6"},{n:["vertical traffic light"],u:"1f6a6",a:"1.0"},{n:["octagonal sign"],u:"1f6d1",a:"3.0"},{n:["construction","construction sign"],u:"1f6a7",a:"0.6"},{n:["anchor"],u:"2693",a:"0.6"},{n:["ring buoy"],u:"1f6df",a:"14.0"},{n:["boat","sailboat"],u:"26f5",a:"0.6"},{n:["canoe"],u:"1f6f6",a:"3.0"},{n:["speedboat"],u:"1f6a4",a:"0.6"},{n:["passenger ship"],u:"1f6f3-fe0f",a:"0.7"},{n:["ferry"],u:"26f4-fe0f",a:"0.7"},{n:["motor boat"],u:"1f6e5-fe0f",a:"0.7"},{n:["ship"],u:"1f6a2",a:"0.6"},{n:["airplane"],u:"2708-fe0f",a:"0.6"},{n:["small airplane"],u:"1f6e9-fe0f",a:"0.7"},{n:["airplane departure"],u:"1f6eb",a:"1.0"},{n:["airplane arriving"],u:"1f6ec",a:"1.0"},{n:["parachute"],u:"1fa82",a:"12.0"},{n:["seat"],u:"1f4ba",a:"0.6"},{n:["helicopter"],u:"1f681",a:"1.0"},{n:["suspension railway"],u:"1f69f",a:"1.0"},{n:["mountain cableway"],u:"1f6a0",a:"1.0"},{n:["aerial tramway"],u:"1f6a1",a:"1.0"},{n:["satellite"],u:"1f6f0-fe0f",a:"0.7"},{n:["rocket"],u:"1f680",a:"0.6"},{n:["flying saucer"],u:"1f6f8",a:"5.0"},{n:["bellhop bell"],u:"1f6ce-fe0f",a:"0.7"},{n:["luggage"],u:"1f9f3",a:"11.0"},{n:["hourglass"],u:"231b",a:"0.6"},{n:["hourglass flowing sand","hourglass with flowing sand"],u:"23f3",a:"0.6"},{n:["watch"],u:"231a",a:"0.6"},{n:["alarm clock"],u:"23f0",a:"0.6"},{n:["stopwatch"],u:"23f1-fe0f",a:"1.0"},{n:["timer clock"],u:"23f2-fe0f",a:"1.0"},{n:["mantelpiece clock"],u:"1f570-fe0f",a:"0.7"},{n:["clock12","clock face twelve oclock"],u:"1f55b",a:"0.6"},{n:["clock1230","clock face twelve-thirty"],u:"1f567",a:"0.7"},{n:["clock1","clock face one oclock"],u:"1f550",a:"0.6"},{n:["clock130","clock face one-thirty"],u:"1f55c",a:"0.7"},{n:["clock2","clock face two oclock"],u:"1f551",a:"0.6"},{n:["clock230","clock face two-thirty"],u:"1f55d",a:"0.7"},{n:["clock3","clock face three oclock"],u:"1f552",a:"0.6"},{n:["clock330","clock face three-thirty"],u:"1f55e",a:"0.7"},{n:["clock4","clock face four oclock"],u:"1f553",a:"0.6"},{n:["clock430","clock face four-thirty"],u:"1f55f",a:"0.7"},{n:["clock5","clock face five oclock"],u:"1f554",a:"0.6"},{n:["clock530","clock face five-thirty"],u:"1f560",a:"0.7"},{n:["clock6","clock face six oclock"],u:"1f555",a:"0.6"},{n:["clock630","clock face six-thirty"],u:"1f561",a:"0.7"},{n:["clock7","clock face seven oclock"],u:"1f556",a:"0.6"},{n:["clock730","clock face seven-thirty"],u:"1f562",a:"0.7"},{n:["clock8","clock face eight oclock"],u:"1f557",a:"0.6"},{n:["clock830","clock face eight-thirty"],u:"1f563",a:"0.7"},{n:["clock9","clock face nine oclock"],u:"1f558",a:"0.6"},{n:["clock930","clock face nine-thirty"],u:"1f564",a:"0.7"},{n:["clock10","clock face ten oclock"],u:"1f559",a:"0.6"},{n:["clock1030","clock face ten-thirty"],u:"1f565",a:"0.7"},{n:["clock11","clock face eleven oclock"],u:"1f55a",a:"0.6"},{n:["clock1130","clock face eleven-thirty"],u:"1f566",a:"0.7"},{n:["new moon","new moon symbol"],u:"1f311",a:"0.6"},{n:["waxing crescent moon","waxing crescent moon symbol"],u:"1f312",a:"1.0"},{n:["first quarter moon","first quarter moon symbol"],u:"1f313",a:"0.6"},{n:["moon","waxing gibbous moon","waxing gibbous moon symbol"],u:"1f314",a:"0.6"},{n:["full moon","full moon symbol"],u:"1f315",a:"0.6"},{n:["waning gibbous moon","waning gibbous moon symbol"],u:"1f316",a:"1.0"},{n:["last quarter moon","last quarter moon symbol"],u:"1f317",a:"1.0"},{n:["waning crescent moon","waning crescent moon symbol"],u:"1f318",a:"1.0"},{n:["crescent moon"],u:"1f319",a:"0.6"},{n:["new moon with face"],u:"1f31a",a:"1.0"},{n:["first quarter moon with face"],u:"1f31b",a:"0.6"},{n:["last quarter moon with face"],u:"1f31c",a:"0.7"},{n:["thermometer"],u:"1f321-fe0f",a:"0.7"},{n:["sunny","black sun with rays"],u:"2600-fe0f",a:"0.6"},{n:["full moon with face"],u:"1f31d",a:"1.0"},{n:["sun with face"],u:"1f31e",a:"1.0"},{n:["ringed planet"],u:"1fa90",a:"12.0"},{n:["star","white medium star"],u:"2b50",a:"0.6"},{n:["star2","glowing star"],u:"1f31f",a:"0.6"},{n:["stars","shooting star"],u:"1f320",a:"0.6"},{n:["milky way"],u:"1f30c",a:"0.6"},{n:["cloud"],u:"2601-fe0f",a:"0.6"},{n:["partly sunny","sun behind cloud"],u:"26c5",a:"0.6"},{n:["thunder cloud and rain","cloud with lightning and rain"],u:"26c8-fe0f",a:"0.7"},{n:["mostly sunny","sun small cloud","sun behind small cloud"],u:"1f324-fe0f",a:"0.7"},{n:["barely sunny","sun behind cloud","sun behind large cloud"],u:"1f325-fe0f",a:"0.7"},{n:["partly sunny rain","sun behind rain cloud"],u:"1f326-fe0f",a:"0.7"},{n:["rain cloud","cloud with rain"],u:"1f327-fe0f",a:"0.7"},{n:["snow cloud","cloud with snow"],u:"1f328-fe0f",a:"0.7"},{n:["lightning","lightning cloud","cloud with lightning"],u:"1f329-fe0f",a:"0.7"},{n:["tornado","tornado cloud"],u:"1f32a-fe0f",a:"0.7"},{n:["fog"],u:"1f32b-fe0f",a:"0.7"},{n:["wind face","wind blowing face"],u:"1f32c-fe0f",a:"0.7"},{n:["cyclone"],u:"1f300",a:"0.6"},{n:["rainbow"],u:"1f308",a:"0.6"},{n:["closed umbrella"],u:"1f302",a:"0.6"},{n:["umbrella"],u:"2602-fe0f",a:"0.7"},{n:["umbrella with rain drops"],u:"2614",a:"0.6"},{n:["umbrella on ground"],u:"26f1-fe0f",a:"0.7"},{n:["zap","high voltage sign"],u:"26a1",a:"0.6"},{n:["snowflake"],u:"2744-fe0f",a:"0.6"},{n:["snowman"],u:"2603-fe0f",a:"0.7"},{n:["snowman without snow"],u:"26c4",a:"0.6"},{n:["comet"],u:"2604-fe0f",a:"1.0"},{n:["fire"],u:"1f525",a:"0.6"},{n:["droplet"],u:"1f4a7",a:"0.6"},{n:["ocean","water wave"],u:"1f30a",a:"0.6"}],NT=[{n:["jack-o-lantern","jack o lantern"],u:"1f383",a:"0.6"},{n:["christmas tree"],u:"1f384",a:"0.6"},{n:["fireworks"],u:"1f386",a:"0.6"},{n:["sparkler","firework sparkler"],u:"1f387",a:"0.6"},{n:["firecracker"],u:"1f9e8",a:"11.0"},{n:["sparkles"],u:"2728",a:"0.6"},{n:["balloon"],u:"1f388",a:"0.6"},{n:["tada","party popper"],u:"1f389",a:"0.6"},{n:["confetti ball"],u:"1f38a",a:"0.6"},{n:["tanabata tree"],u:"1f38b",a:"0.6"},{n:["bamboo","pine decoration"],u:"1f38d",a:"0.6"},{n:["dolls","japanese dolls"],u:"1f38e",a:"0.6"},{n:["flags","carp streamer"],u:"1f38f",a:"0.6"},{n:["wind chime"],u:"1f390",a:"0.6"},{n:["rice scene","moon viewing ceremony"],u:"1f391",a:"0.6"},{n:["red envelope","red gift envelope"],u:"1f9e7",a:"11.0"},{n:["ribbon"],u:"1f380",a:"0.6"},{n:["gift","wrapped present"],u:"1f381",a:"0.6"},{n:["reminder ribbon"],u:"1f397-fe0f",a:"0.7"},{n:["admission tickets"],u:"1f39f-fe0f",a:"0.7"},{n:["ticket"],u:"1f3ab",a:"0.6"},{n:["medal","military medal"],u:"1f396-fe0f",a:"0.7"},{n:["trophy"],u:"1f3c6",a:"0.6"},{n:["sports medal"],u:"1f3c5",a:"1.0"},{n:["first place medal"],u:"1f947",a:"3.0"},{n:["second place medal"],u:"1f948",a:"3.0"},{n:["third place medal"],u:"1f949",a:"3.0"},{n:["soccer","soccer ball"],u:"26bd",a:"0.6"},{n:["baseball"],u:"26be",a:"0.6"},{n:["softball"],u:"1f94e",a:"11.0"},{n:["basketball","basketball and hoop"],u:"1f3c0",a:"0.6"},{n:["volleyball"],u:"1f3d0",a:"1.0"},{n:["football","american football"],u:"1f3c8",a:"0.6"},{n:["rugby football"],u:"1f3c9",a:"1.0"},{n:["tennis","tennis racquet and ball"],u:"1f3be",a:"0.6"},{n:["flying disc"],u:"1f94f",a:"11.0"},{n:["bowling"],u:"1f3b3",a:"0.6"},{n:["cricket bat and ball"],u:"1f3cf",a:"1.0"},{n:["field hockey stick and ball"],u:"1f3d1",a:"1.0"},{n:["ice hockey stick and puck"],u:"1f3d2",a:"1.0"},{n:["lacrosse","lacrosse stick and ball"],u:"1f94d",a:"11.0"},{n:["table tennis paddle and ball"],u:"1f3d3",a:"1.0"},{n:["badminton racquet and shuttlecock"],u:"1f3f8",a:"1.0"},{n:["boxing glove"],u:"1f94a",a:"3.0"},{n:["martial arts uniform"],u:"1f94b",a:"3.0"},{n:["goal net"],u:"1f945",a:"3.0"},{n:["golf","flag in hole"],u:"26f3",a:"0.6"},{n:["ice skate"],u:"26f8-fe0f",a:"0.7"},{n:["fishing pole and fish"],u:"1f3a3",a:"0.6"},{n:["diving mask"],u:"1f93f",a:"12.0"},{n:["running shirt with sash"],u:"1f3bd",a:"0.6"},{n:["ski","ski and ski boot"],u:"1f3bf",a:"0.6"},{n:["sled"],u:"1f6f7",a:"5.0"},{n:["curling stone"],u:"1f94c",a:"5.0"},{n:["dart","direct hit"],u:"1f3af",a:"0.6"},{n:["yo-yo"],u:"1fa80",a:"12.0"},{n:["kite"],u:"1fa81",a:"12.0"},{n:["8ball","billiards"],u:"1f3b1",a:"0.6"},{n:["crystal ball"],u:"1f52e",a:"0.6"},{n:["magic wand"],u:"1fa84",a:"13.0"},{n:["nazar amulet"],u:"1f9ff",a:"11.0"},{n:["hamsa"],u:"1faac",a:"14.0"},{n:["video game"],u:"1f3ae",a:"0.6"},{n:["joystick"],u:"1f579-fe0f",a:"0.7"},{n:["slot machine"],u:"1f3b0",a:"0.6"},{n:["game die"],u:"1f3b2",a:"0.6"},{n:["jigsaw","jigsaw puzzle piece"],u:"1f9e9",a:"11.0"},{n:["teddy bear"],u:"1f9f8",a:"11.0"},{n:["pinata"],u:"1fa85",a:"13.0"},{n:["mirror ball"],u:"1faa9",a:"14.0"},{n:["nesting dolls"],u:"1fa86",a:"13.0"},{n:["spades","black spade suit"],u:"2660-fe0f",a:"0.6"},{n:["hearts","black heart suit"],u:"2665-fe0f",a:"0.6"},{n:["diamonds","black diamond suit"],u:"2666-fe0f",a:"0.6"},{n:["clubs","black club suit"],u:"2663-fe0f",a:"0.6"},{n:["chess pawn"],u:"265f-fe0f",a:"11.0"},{n:["black joker","playing card black joker"],u:"1f0cf",a:"0.6"},{n:["mahjong","mahjong tile red dragon"],u:"1f004",a:"0.6"},{n:["flower playing cards"],u:"1f3b4",a:"0.6"},{n:["performing arts"],u:"1f3ad",a:"0.6"},{n:["framed picture","frame with picture"],u:"1f5bc-fe0f",a:"0.7"},{n:["art","artist palette"],u:"1f3a8",a:"0.6"},{n:["thread","spool of thread"],u:"1f9f5",a:"11.0"},{n:["sewing needle"],u:"1faa1",a:"13.0"},{n:["yarn","ball of yarn"],u:"1f9f6",a:"11.0"},{n:["knot"],u:"1faa2",a:"13.0"}],IT=[{n:["eyeglasses"],u:"1f453",a:"0.6"},{n:["sunglasses","dark sunglasses"],u:"1f576-fe0f",a:"0.7"},{n:["goggles"],u:"1f97d",a:"11.0"},{n:["lab coat"],u:"1f97c",a:"11.0"},{n:["safety vest"],u:"1f9ba",a:"12.0"},{n:["necktie"],u:"1f454",a:"0.6"},{n:["shirt","tshirt","t-shirt"],u:"1f455",a:"0.6"},{n:["jeans"],u:"1f456",a:"0.6"},{n:["scarf"],u:"1f9e3",a:"5.0"},{n:["gloves"],u:"1f9e4",a:"5.0"},{n:["coat"],u:"1f9e5",a:"5.0"},{n:["socks"],u:"1f9e6",a:"5.0"},{n:["dress"],u:"1f457",a:"0.6"},{n:["kimono"],u:"1f458",a:"0.6"},{n:["sari"],u:"1f97b",a:"12.0"},{n:["one-piece swimsuit"],u:"1fa71",a:"12.0"},{n:["briefs"],u:"1fa72",a:"12.0"},{n:["shorts"],u:"1fa73",a:"12.0"},{n:["bikini"],u:"1f459",a:"0.6"},{n:["womans clothes"],u:"1f45a",a:"0.6"},{n:["purse"],u:"1f45b",a:"0.6"},{n:["handbag"],u:"1f45c",a:"0.6"},{n:["pouch"],u:"1f45d",a:"0.6"},{n:["shopping bags"],u:"1f6cd-fe0f",a:"0.7"},{n:["school satchel"],u:"1f392",a:"0.6"},{n:["thong sandal"],u:"1fa74",a:"13.0"},{n:["shoe","mans shoe"],u:"1f45e",a:"0.6"},{n:["athletic shoe"],u:"1f45f",a:"0.6"},{n:["hiking boot"],u:"1f97e",a:"11.0"},{n:["flat shoe","womans flat shoe"],u:"1f97f",a:"11.0"},{n:["high heel","high-heeled shoe"],u:"1f460",a:"0.6"},{n:["sandal","womans sandal"],u:"1f461",a:"0.6"},{n:["ballet shoes"],u:"1fa70",a:"12.0"},{n:["boot","womans boots"],u:"1f462",a:"0.6"},{n:["crown"],u:"1f451",a:"0.6"},{n:["womans hat"],u:"1f452",a:"0.6"},{n:["tophat","top hat"],u:"1f3a9",a:"0.6"},{n:["mortar board","graduation cap"],u:"1f393",a:"0.6"},{n:["billed cap"],u:"1f9e2",a:"5.0"},{n:["military helmet"],u:"1fa96",a:"13.0"},{n:["rescue worker’s helmet","helmet with white cross"],u:"26d1-fe0f",a:"0.7"},{n:["prayer beads"],u:"1f4ff",a:"1.0"},{n:["lipstick"],u:"1f484",a:"0.6"},{n:["ring"],u:"1f48d",a:"0.6"},{n:["gem","gem stone"],u:"1f48e",a:"0.6"},{n:["mute","speaker with cancellation stroke"],u:"1f507",a:"1.0"},{n:["speaker"],u:"1f508",a:"0.7"},{n:["sound","speaker with one sound wave"],u:"1f509",a:"1.0"},{n:["loud sound","speaker with three sound waves"],u:"1f50a",a:"0.6"},{n:["loudspeaker","public address loudspeaker"],u:"1f4e2",a:"0.6"},{n:["mega","cheering megaphone"],u:"1f4e3",a:"0.6"},{n:["postal horn"],u:"1f4ef",a:"1.0"},{n:["bell"],u:"1f514",a:"0.6"},{n:["no bell","bell with cancellation stroke"],u:"1f515",a:"1.0"},{n:["musical score"],u:"1f3bc",a:"0.6"},{n:["musical note"],u:"1f3b5",a:"0.6"},{n:["notes","multiple musical notes"],u:"1f3b6",a:"0.6"},{n:["studio microphone"],u:"1f399-fe0f",a:"0.7"},{n:["level slider"],u:"1f39a-fe0f",a:"0.7"},{n:["control knobs"],u:"1f39b-fe0f",a:"0.7"},{n:["microphone"],u:"1f3a4",a:"0.6"},{n:["headphone","headphones"],u:"1f3a7",a:"0.6"},{n:["radio"],u:"1f4fb",a:"0.6"},{n:["saxophone"],u:"1f3b7",a:"0.6"},{n:["accordion"],u:"1fa97",a:"13.0"},{n:["guitar"],u:"1f3b8",a:"0.6"},{n:["musical keyboard"],u:"1f3b9",a:"0.6"},{n:["trumpet"],u:"1f3ba",a:"0.6"},{n:["violin"],u:"1f3bb",a:"0.6"},{n:["banjo"],u:"1fa95",a:"12.0"},{n:["drum with drumsticks"],u:"1f941",a:"3.0"},{n:["long drum"],u:"1fa98",a:"13.0"},{n:["iphone","mobile phone"],u:"1f4f1",a:"0.6"},{n:["calling","mobile phone with rightwards arrow at left"],u:"1f4f2",a:"0.6"},{n:["phone","telephone","black telephone"],u:"260e-fe0f",a:"0.6"},{n:["telephone receiver"],u:"1f4de",a:"0.6"},{n:["pager"],u:"1f4df",a:"0.6"},{n:["fax","fax machine"],u:"1f4e0",a:"0.6"},{n:["battery"],u:"1f50b",a:"0.6"},{n:["low battery"],u:"1faab",a:"14.0"},{n:["electric plug"],u:"1f50c",a:"0.6"},{n:["computer","personal computer"],u:"1f4bb",a:"0.6"},{n:["desktop computer"],u:"1f5a5-fe0f",a:"0.7"},{n:["printer"],u:"1f5a8-fe0f",a:"0.7"},{n:["keyboard"],u:"2328-fe0f",a:"1.0"},{n:["computer mouse","three button mouse"],u:"1f5b1-fe0f",a:"0.7"},{n:["trackball"],u:"1f5b2-fe0f",a:"0.7"},{n:["minidisc"],u:"1f4bd",a:"0.6"},{n:["floppy disk"],u:"1f4be",a:"0.6"},{n:["cd","optical disc"],u:"1f4bf",a:"0.6"},{n:["dvd"],u:"1f4c0",a:"0.6"},{n:["abacus"],u:"1f9ee",a:"11.0"},{n:["movie camera"],u:"1f3a5",a:"0.6"},{n:["film frames"],u:"1f39e-fe0f",a:"0.7"},{n:["film projector"],u:"1f4fd-fe0f",a:"0.7"},{n:["clapper","clapper board"],u:"1f3ac",a:"0.6"},{n:["tv","television"],u:"1f4fa",a:"0.6"},{n:["camera"],u:"1f4f7",a:"0.6"},{n:["camera with flash"],u:"1f4f8",a:"1.0"},{n:["video camera"],u:"1f4f9",a:"0.6"},{n:["vhs","videocassette"],u:"1f4fc",a:"0.6"},{n:["mag","left-pointing magnifying glass"],u:"1f50d",a:"0.6"},{n:["mag right","right-pointing magnifying glass"],u:"1f50e",a:"0.6"},{n:["candle"],u:"1f56f-fe0f",a:"0.7"},{n:["bulb","electric light bulb"],u:"1f4a1",a:"0.6"},{n:["flashlight","electric torch"],u:"1f526",a:"0.6"},{n:["lantern","izakaya lantern"],u:"1f3ee",a:"0.6"},{n:["diya lamp"],u:"1fa94",a:"12.0"},{n:["notebook with decorative cover"],u:"1f4d4",a:"0.6"},{n:["closed book"],u:"1f4d5",a:"0.6"},{n:["book","open book"],u:"1f4d6",a:"0.6"},{n:["green book"],u:"1f4d7",a:"0.6"},{n:["blue book"],u:"1f4d8",a:"0.6"},{n:["orange book"],u:"1f4d9",a:"0.6"},{n:["books"],u:"1f4da",a:"0.6"},{n:["notebook"],u:"1f4d3",a:"0.6"},{n:["ledger"],u:"1f4d2",a:"0.6"},{n:["page with curl"],u:"1f4c3",a:"0.6"},{n:["scroll"],u:"1f4dc",a:"0.6"},{n:["page facing up"],u:"1f4c4",a:"0.6"},{n:["newspaper"],u:"1f4f0",a:"0.6"},{n:["rolled-up newspaper","rolled up newspaper"],u:"1f5de-fe0f",a:"0.7"},{n:["bookmark tabs"],u:"1f4d1",a:"0.6"},{n:["bookmark"],u:"1f516",a:"0.6"},{n:["label"],u:"1f3f7-fe0f",a:"0.7"},{n:["moneybag","money bag"],u:"1f4b0",a:"0.6"},{n:["coin"],u:"1fa99",a:"13.0"},{n:["yen","banknote with yen sign"],u:"1f4b4",a:"0.6"},{n:["dollar","banknote with dollar sign"],u:"1f4b5",a:"0.6"},{n:["euro","banknote with euro sign"],u:"1f4b6",a:"1.0"},{n:["pound","banknote with pound sign"],u:"1f4b7",a:"1.0"},{n:["money with wings"],u:"1f4b8",a:"0.6"},{n:["credit card"],u:"1f4b3",a:"0.6"},{n:["receipt"],u:"1f9fe",a:"11.0"},{n:["chart","chart with upwards trend and yen sign"],u:"1f4b9",a:"0.6"},{n:["email","envelope"],u:"2709-fe0f",a:"0.6"},{n:["e-mail","e-mail symbol"],u:"1f4e7",a:"0.6"},{n:["incoming envelope"],u:"1f4e8",a:"0.6"},{n:["envelope with arrow","envelope with downwards arrow above"],u:"1f4e9",a:"0.6"},{n:["outbox tray"],u:"1f4e4",a:"0.6"},{n:["inbox tray"],u:"1f4e5",a:"0.6"},{n:["package"],u:"1f4e6",a:"0.6"},{n:["mailbox","closed mailbox with raised flag"],u:"1f4eb",a:"0.6"},{n:["mailbox closed","closed mailbox with lowered flag"],u:"1f4ea",a:"0.6"},{n:["mailbox with mail","open mailbox with raised flag"],u:"1f4ec",a:"0.7"},{n:["mailbox with no mail","open mailbox with lowered flag"],u:"1f4ed",a:"0.7"},{n:["postbox"],u:"1f4ee",a:"0.6"},{n:["ballot box with ballot"],u:"1f5f3-fe0f",a:"0.7"},{n:["pencil","pencil2"],u:"270f-fe0f",a:"0.6"},{n:["black nib"],u:"2712-fe0f",a:"0.6"},{n:["fountain pen","lower left fountain pen"],u:"1f58b-fe0f",a:"0.7"},{n:["pen","lower left ballpoint pen"],u:"1f58a-fe0f",a:"0.7"},{n:["paintbrush","lower left paintbrush"],u:"1f58c-fe0f",a:"0.7"},{n:["crayon","lower left crayon"],u:"1f58d-fe0f",a:"0.7"},{n:["memo","pencil"],u:"1f4dd",a:"0.6"},{n:["briefcase"],u:"1f4bc",a:"0.6"},{n:["file folder"],u:"1f4c1",a:"0.6"},{n:["open file folder"],u:"1f4c2",a:"0.6"},{n:["card index dividers"],u:"1f5c2-fe0f",a:"0.7"},{n:["date","calendar"],u:"1f4c5",a:"0.6"},{n:["calendar","tear-off calendar"],u:"1f4c6",a:"0.6"},{n:["spiral notepad","spiral note pad"],u:"1f5d2-fe0f",a:"0.7"},{n:["spiral calendar","spiral calendar pad"],u:"1f5d3-fe0f",a:"0.7"},{n:["card index"],u:"1f4c7",a:"0.6"},{n:["chart with upwards trend"],u:"1f4c8",a:"0.6"},{n:["chart with downwards trend"],u:"1f4c9",a:"0.6"},{n:["bar chart"],u:"1f4ca",a:"0.6"},{n:["clipboard"],u:"1f4cb",a:"0.6"},{n:["pushpin"],u:"1f4cc",a:"0.6"},{n:["round pushpin"],u:"1f4cd",a:"0.6"},{n:["paperclip"],u:"1f4ce",a:"0.6"},{n:["linked paperclips"],u:"1f587-fe0f",a:"0.7"},{n:["straight ruler"],u:"1f4cf",a:"0.6"},{n:["triangular ruler"],u:"1f4d0",a:"0.6"},{n:["scissors","black scissors"],u:"2702-fe0f",a:"0.6"},{n:["card file box"],u:"1f5c3-fe0f",a:"0.7"},{n:["file cabinet"],u:"1f5c4-fe0f",a:"0.7"},{n:["wastebasket"],u:"1f5d1-fe0f",a:"0.7"},{n:["lock"],u:"1f512",a:"0.6"},{n:["unlock","open lock"],u:"1f513",a:"0.6"},{n:["lock with ink pen"],u:"1f50f",a:"0.6"},{n:["closed lock with key"],u:"1f510",a:"0.6"},{n:["key"],u:"1f511",a:"0.6"},{n:["old key"],u:"1f5dd-fe0f",a:"0.7"},{n:["hammer"],u:"1f528",a:"0.6"},{n:["axe"],u:"1fa93",a:"12.0"},{n:["pick"],u:"26cf-fe0f",a:"0.7"},{n:["hammer and pick"],u:"2692-fe0f",a:"1.0"},{n:["hammer and wrench"],u:"1f6e0-fe0f",a:"0.7"},{n:["dagger","dagger knife"],u:"1f5e1-fe0f",a:"0.7"},{n:["crossed swords"],u:"2694-fe0f",a:"1.0"},{n:["gun","pistol"],u:"1f52b",a:"0.6"},{n:["boomerang"],u:"1fa83",a:"13.0"},{n:["bow and arrow"],u:"1f3f9",a:"1.0"},{n:["shield"],u:"1f6e1-fe0f",a:"0.7"},{n:["carpentry saw"],u:"1fa9a",a:"13.0"},{n:["wrench"],u:"1f527",a:"0.6"},{n:["screwdriver"],u:"1fa9b",a:"13.0"},{n:["nut and bolt"],u:"1f529",a:"0.6"},{n:["gear"],u:"2699-fe0f",a:"1.0"},{n:["clamp","compression"],u:"1f5dc-fe0f",a:"0.7"},{n:["scales","balance scale"],u:"2696-fe0f",a:"1.0"},{n:["probing cane"],u:"1f9af",a:"12.0"},{n:["link","link symbol"],u:"1f517",a:"0.6"},{n:["chains"],u:"26d3-fe0f",a:"0.7"},{n:["hook"],u:"1fa9d",a:"13.0"},{n:["toolbox"],u:"1f9f0",a:"11.0"},{n:["magnet"],u:"1f9f2",a:"11.0"},{n:["ladder"],u:"1fa9c",a:"13.0"},{n:["alembic"],u:"2697-fe0f",a:"1.0"},{n:["test tube"],u:"1f9ea",a:"11.0"},{n:["petri dish"],u:"1f9eb",a:"11.0"},{n:["dna","dna double helix"],u:"1f9ec",a:"11.0"},{n:["microscope"],u:"1f52c",a:"1.0"},{n:["telescope"],u:"1f52d",a:"1.0"},{n:["satellite antenna"],u:"1f4e1",a:"0.6"},{n:["syringe"],u:"1f489",a:"0.6"},{n:["drop of blood"],u:"1fa78",a:"12.0"},{n:["pill"],u:"1f48a",a:"0.6"},{n:["adhesive bandage"],u:"1fa79",a:"12.0"},{n:["crutch"],u:"1fa7c",a:"14.0"},{n:["stethoscope"],u:"1fa7a",a:"12.0"},{n:["x-ray"],u:"1fa7b",a:"14.0"},{n:["door"],u:"1f6aa",a:"0.6"},{n:["elevator"],u:"1f6d7",a:"13.0"},{n:["mirror"],u:"1fa9e",a:"13.0"},{n:["window"],u:"1fa9f",a:"13.0"},{n:["bed"],u:"1f6cf-fe0f",a:"0.7"},{n:["couch and lamp"],u:"1f6cb-fe0f",a:"0.7"},{n:["chair"],u:"1fa91",a:"12.0"},{n:["toilet"],u:"1f6bd",a:"0.6"},{n:["plunger"],u:"1faa0",a:"13.0"},{n:["shower"],u:"1f6bf",a:"1.0"},{n:["bathtub"],u:"1f6c1",a:"1.0"},{n:["mouse trap"],u:"1faa4",a:"13.0"},{n:["razor"],u:"1fa92",a:"12.0"},{n:["lotion bottle"],u:"1f9f4",a:"11.0"},{n:["safety pin"],u:"1f9f7",a:"11.0"},{n:["broom"],u:"1f9f9",a:"11.0"},{n:["basket"],u:"1f9fa",a:"11.0"},{n:["roll of paper"],u:"1f9fb",a:"11.0"},{n:["bucket"],u:"1faa3",a:"13.0"},{n:["soap","bar of soap"],u:"1f9fc",a:"11.0"},{n:["bubbles"],u:"1fae7",a:"14.0"},{n:["toothbrush"],u:"1faa5",a:"13.0"},{n:["sponge"],u:"1f9fd",a:"11.0"},{n:["fire extinguisher"],u:"1f9ef",a:"11.0"},{n:["shopping trolley"],u:"1f6d2",a:"3.0"},{n:["smoking","smoking symbol"],u:"1f6ac",a:"0.6"},{n:["coffin"],u:"26b0-fe0f",a:"1.0"},{n:["headstone"],u:"1faa6",a:"13.0"},{n:["funeral urn"],u:"26b1-fe0f",a:"1.0"},{n:["moyai"],u:"1f5ff",a:"0.6"},{n:["placard"],u:"1faa7",a:"13.0"},{n:["identification card"],u:"1faaa",a:"14.0"}],DT=[{n:["atm","automated teller machine"],u:"1f3e7",a:"0.6"},{n:["put litter in its place","put litter in its place symbol"],u:"1f6ae",a:"1.0"},{n:["potable water","potable water symbol"],u:"1f6b0",a:"1.0"},{n:["wheelchair","wheelchair symbol"],u:"267f",a:"0.6"},{n:["mens","mens symbol"],u:"1f6b9",a:"0.6"},{n:["womens","womens symbol"],u:"1f6ba",a:"0.6"},{n:["restroom"],u:"1f6bb",a:"0.6"},{n:["baby symbol"],u:"1f6bc",a:"0.6"},{n:["wc","water closet"],u:"1f6be",a:"0.6"},{n:["passport control"],u:"1f6c2",a:"1.0"},{n:["customs"],u:"1f6c3",a:"1.0"},{n:["baggage claim"],u:"1f6c4",a:"1.0"},{n:["left luggage"],u:"1f6c5",a:"1.0"},{n:["warning","warning sign"],u:"26a0-fe0f",a:"0.6"},{n:["children crossing"],u:"1f6b8",a:"1.0"},{n:["no entry"],u:"26d4",a:"0.6"},{n:["no entry sign"],u:"1f6ab",a:"0.6"},{n:["no bicycles"],u:"1f6b3",a:"1.0"},{n:["no smoking","no smoking symbol"],u:"1f6ad",a:"0.6"},{n:["do not litter","do not litter symbol"],u:"1f6af",a:"1.0"},{n:["non-potable water","non-potable water symbol"],u:"1f6b1",a:"1.0"},{n:["no pedestrians"],u:"1f6b7",a:"1.0"},{n:["no mobile phones"],u:"1f4f5",a:"1.0"},{n:["underage","no one under eighteen symbol"],u:"1f51e",a:"0.6"},{n:["radioactive","radioactive sign"],u:"2622-fe0f",a:"1.0"},{n:["biohazard","biohazard sign"],u:"2623-fe0f",a:"1.0"},{n:["arrow up","upwards black arrow"],u:"2b06-fe0f",a:"0.6"},{n:["north east arrow","arrow upper right"],u:"2197-fe0f",a:"0.6"},{n:["arrow right","black rightwards arrow"],u:"27a1-fe0f",a:"0.6"},{n:["south east arrow","arrow lower right"],u:"2198-fe0f",a:"0.6"},{n:["arrow down","downwards black arrow"],u:"2b07-fe0f",a:"0.6"},{n:["south west arrow","arrow lower left"],u:"2199-fe0f",a:"0.6"},{n:["arrow left","leftwards black arrow"],u:"2b05-fe0f",a:"0.6"},{n:["north west arrow","arrow upper left"],u:"2196-fe0f",a:"0.6"},{n:["up down arrow","arrow up down"],u:"2195-fe0f",a:"0.6"},{n:["left right arrow"],u:"2194-fe0f",a:"0.6"},{n:["leftwards arrow with hook"],u:"21a9-fe0f",a:"0.6"},{n:["arrow right hook","rightwards arrow with hook"],u:"21aa-fe0f",a:"0.6"},{n:["arrow heading up","arrow pointing rightwards then curving upwards"],u:"2934-fe0f",a:"0.6"},{n:["arrow heading down","arrow pointing rightwards then curving downwards"],u:"2935-fe0f",a:"0.6"},{n:["arrows clockwise","clockwise downwards and upwards open circle arrows"],u:"1f503",a:"0.6"},{n:["arrows counterclockwise","anticlockwise downwards and upwards open circle arrows"],u:"1f504",a:"1.0"},{n:["back","back with leftwards arrow above"],u:"1f519",a:"0.6"},{n:["end","end with leftwards arrow above"],u:"1f51a",a:"0.6"},{n:["on","on with exclamation mark with left right arrow above"],u:"1f51b",a:"0.6"},{n:["soon","soon with rightwards arrow above"],u:"1f51c",a:"0.6"},{n:["top","top with upwards arrow above"],u:"1f51d",a:"0.6"},{n:["place of worship"],u:"1f6d0",a:"1.0"},{n:["atom symbol"],u:"269b-fe0f",a:"1.0"},{n:["om","om symbol"],u:"1f549-fe0f",a:"0.7"},{n:["star of david"],u:"2721-fe0f",a:"0.7"},{n:["wheel of dharma"],u:"2638-fe0f",a:"0.7"},{n:["yin yang"],u:"262f-fe0f",a:"0.7"},{n:["latin cross"],u:"271d-fe0f",a:"0.7"},{n:["orthodox cross"],u:"2626-fe0f",a:"1.0"},{n:["star and crescent"],u:"262a-fe0f",a:"0.7"},{n:["peace symbol"],u:"262e-fe0f",a:"1.0"},{n:["menorah with nine branches"],u:"1f54e",a:"1.0"},{n:["six pointed star","six pointed star with middle dot"],u:"1f52f",a:"0.6"},{n:["aries"],u:"2648",a:"0.6"},{n:["taurus"],u:"2649",a:"0.6"},{n:["gemini"],u:"264a",a:"0.6"},{n:["cancer"],u:"264b",a:"0.6"},{n:["leo"],u:"264c",a:"0.6"},{n:["virgo"],u:"264d",a:"0.6"},{n:["libra"],u:"264e",a:"0.6"},{n:["scorpius"],u:"264f",a:"0.6"},{n:["sagittarius"],u:"2650",a:"0.6"},{n:["capricorn"],u:"2651",a:"0.6"},{n:["aquarius"],u:"2652",a:"0.6"},{n:["pisces"],u:"2653",a:"0.6"},{n:["ophiuchus"],u:"26ce",a:"0.6"},{n:["twisted rightwards arrows"],u:"1f500",a:"1.0"},{n:["repeat","clockwise rightwards and leftwards open circle arrows"],u:"1f501",a:"1.0"},{n:["repeat one","clockwise rightwards and leftwards open circle arrows with circled one overlay"],u:"1f502",a:"1.0"},{n:["arrow forward","black right-pointing triangle"],u:"25b6-fe0f",a:"0.6"},{n:["fast forward","black right-pointing double triangle"],u:"23e9",a:"0.6"},{n:["next track button","black right pointing double triangle with vertical bar"],u:"23ed-fe0f",a:"0.7"},{n:["play or pause button","black right pointing triangle with double vertical bar"],u:"23ef-fe0f",a:"1.0"},{n:["arrow backward","black left-pointing triangle"],u:"25c0-fe0f",a:"0.6"},{n:["rewind","black left-pointing double triangle"],u:"23ea",a:"0.6"},{n:["last track button","black left pointing double triangle with vertical bar"],u:"23ee-fe0f",a:"0.7"},{n:["arrow up small","up-pointing small red triangle"],u:"1f53c",a:"0.6"},{n:["arrow double up","black up-pointing double triangle"],u:"23eb",a:"0.6"},{n:["arrow down small","down-pointing small red triangle"],u:"1f53d",a:"0.6"},{n:["arrow double down","black down-pointing double triangle"],u:"23ec",a:"0.6"},{n:["pause button","double vertical bar"],u:"23f8-fe0f",a:"0.7"},{n:["stop button","black square for stop"],u:"23f9-fe0f",a:"0.7"},{n:["record button","black circle for record"],u:"23fa-fe0f",a:"0.7"},{n:["eject","eject button"],u:"23cf-fe0f",a:"1.0"},{n:["cinema"],u:"1f3a6",a:"0.6"},{n:["low brightness","low brightness symbol"],u:"1f505",a:"1.0"},{n:["high brightness","high brightness symbol"],u:"1f506",a:"1.0"},{n:["signal strength","antenna with bars"],u:"1f4f6",a:"0.6"},{n:["vibration mode"],u:"1f4f3",a:"0.6"},{n:["mobile phone off"],u:"1f4f4",a:"0.6"},{n:["female sign"],u:"2640-fe0f",a:"4.0"},{n:["male sign"],u:"2642-fe0f",a:"4.0"},{n:["transgender symbol"],u:"26a7-fe0f",a:"13.0"},{n:["heavy multiplication x"],u:"2716-fe0f",a:"0.6"},{n:["heavy plus sign"],u:"2795",a:"0.6"},{n:["heavy minus sign"],u:"2796",a:"0.6"},{n:["heavy division sign"],u:"2797",a:"0.6"},{n:["heavy equals sign"],u:"1f7f0",a:"14.0"},{n:["infinity"],u:"267e-fe0f",a:"11.0"},{n:["bangbang","double exclamation mark"],u:"203c-fe0f",a:"0.6"},{n:["interrobang","exclamation question mark"],u:"2049-fe0f",a:"0.6"},{n:["question","black question mark ornament"],u:"2753",a:"0.6"},{n:["grey question","white question mark ornament"],u:"2754",a:"0.6"},{n:["grey exclamation","white exclamation mark ornament"],u:"2755",a:"0.6"},{n:["exclamation","heavy exclamation mark","heavy exclamation mark symbol"],u:"2757",a:"0.6"},{n:["wavy dash"],u:"3030-fe0f",a:"0.6"},{n:["currency exchange"],u:"1f4b1",a:"0.6"},{n:["heavy dollar sign"],u:"1f4b2",a:"0.6"},{n:["medical symbol","staff of aesculapius"],u:"2695-fe0f",a:"4.0"},{n:["recycle","black universal recycling symbol"],u:"267b-fe0f",a:"0.6"},{n:["fleur-de-lis","fleur de lis"],u:"269c-fe0f",a:"1.0"},{n:["trident","trident emblem"],u:"1f531",a:"0.6"},{n:["name badge"],u:"1f4db",a:"0.6"},{n:["beginner","japanese symbol for beginner"],u:"1f530",a:"0.6"},{n:["o","heavy large circle"],u:"2b55",a:"0.6"},{n:["white check mark","white heavy check mark"],u:"2705",a:"0.6"},{n:["ballot box with check"],u:"2611-fe0f",a:"0.6"},{n:["heavy check mark"],u:"2714-fe0f",a:"0.6"},{n:["x","cross mark"],u:"274c",a:"0.6"},{n:["negative squared cross mark"],u:"274e",a:"0.6"},{n:["curly loop"],u:"27b0",a:"0.6"},{n:["loop","double curly loop"],u:"27bf",a:"1.0"},{n:["part alternation mark"],u:"303d-fe0f",a:"0.6"},{n:["eight spoked asterisk"],u:"2733-fe0f",a:"0.6"},{n:["eight pointed black star"],u:"2734-fe0f",a:"0.6"},{n:["sparkle"],u:"2747-fe0f",a:"0.6"},{n:["copyright","copyright sign"],u:"00a9-fe0f",a:"0.6"},{n:["registered","registered sign"],u:"00ae-fe0f",a:"0.6"},{n:["tm","trade mark sign"],u:"2122-fe0f",a:"0.6"},{n:["hash","hash key"],u:"0023-fe0f-20e3",a:"0.6"},{n:["keycap: *","keycap star"],u:"002a-fe0f-20e3",a:"2.0"},{n:["zero","keycap 0"],u:"0030-fe0f-20e3",a:"0.6"},{n:["one","keycap 1"],u:"0031-fe0f-20e3",a:"0.6"},{n:["two","keycap 2"],u:"0032-fe0f-20e3",a:"0.6"},{n:["three","keycap 3"],u:"0033-fe0f-20e3",a:"0.6"},{n:["four","keycap 4"],u:"0034-fe0f-20e3",a:"0.6"},{n:["five","keycap 5"],u:"0035-fe0f-20e3",a:"0.6"},{n:["six","keycap 6"],u:"0036-fe0f-20e3",a:"0.6"},{n:["seven","keycap 7"],u:"0037-fe0f-20e3",a:"0.6"},{n:["eight","keycap 8"],u:"0038-fe0f-20e3",a:"0.6"},{n:["nine","keycap 9"],u:"0039-fe0f-20e3",a:"0.6"},{n:["keycap ten"],u:"1f51f",a:"0.6"},{n:["capital abcd","input symbol for latin capital letters"],u:"1f520",a:"0.6"},{n:["abcd","input symbol for latin small letters"],u:"1f521",a:"0.6"},{n:["1234","input symbol for numbers"],u:"1f522",a:"0.6"},{n:["symbols","input symbol for symbols"],u:"1f523",a:"0.6"},{n:["abc","input symbol for latin letters"],u:"1f524",a:"0.6"},{n:["a","negative squared latin capital letter a"],u:"1f170-fe0f",a:"0.6"},{n:["ab","negative squared ab"],u:"1f18e",a:"0.6"},{n:["b","negative squared latin capital letter b"],u:"1f171-fe0f",a:"0.6"},{n:["cl","squared cl"],u:"1f191",a:"0.6"},{n:["cool","squared cool"],u:"1f192",a:"0.6"},{n:["free","squared free"],u:"1f193",a:"0.6"},{n:["information source"],u:"2139-fe0f",a:"0.6"},{n:["id","squared id"],u:"1f194",a:"0.6"},{n:["m","circled latin capital letter m"],u:"24c2-fe0f",a:"0.6"},{n:["new","squared new"],u:"1f195",a:"0.6"},{n:["ng","squared ng"],u:"1f196",a:"0.6"},{n:["o2","negative squared latin capital letter o"],u:"1f17e-fe0f",a:"0.6"},{n:["ok","squared ok"],u:"1f197",a:"0.6"},{n:["parking","negative squared latin capital letter p"],u:"1f17f-fe0f",a:"0.6"},{n:["sos","squared sos"],u:"1f198",a:"0.6"},{n:["up","squared up with exclamation mark"],u:"1f199",a:"0.6"},{n:["vs","squared vs"],u:"1f19a",a:"0.6"},{n:["koko","squared katakana koko"],u:"1f201",a:"0.6"},{n:["sa","squared katakana sa"],u:"1f202-fe0f",a:"0.6"},{n:["u6708","squared cjk unified ideograph-6708"],u:"1f237-fe0f",a:"0.6"},{n:["u6709","squared cjk unified ideograph-6709"],u:"1f236",a:"0.6"},{n:["u6307","squared cjk unified ideograph-6307"],u:"1f22f",a:"0.6"},{n:["ideograph advantage","circled ideograph advantage"],u:"1f250",a:"0.6"},{n:["u5272","squared cjk unified ideograph-5272"],u:"1f239",a:"0.6"},{n:["u7121","squared cjk unified ideograph-7121"],u:"1f21a",a:"0.6"},{n:["u7981","squared cjk unified ideograph-7981"],u:"1f232",a:"0.6"},{n:["accept","circled ideograph accept"],u:"1f251",a:"0.6"},{n:["u7533","squared cjk unified ideograph-7533"],u:"1f238",a:"0.6"},{n:["u5408","squared cjk unified ideograph-5408"],u:"1f234",a:"0.6"},{n:["u7a7a","squared cjk unified ideograph-7a7a"],u:"1f233",a:"0.6"},{n:["congratulations","circled ideograph congratulation"],u:"3297-fe0f",a:"0.6"},{n:["secret","circled ideograph secret"],u:"3299-fe0f",a:"0.6"},{n:["u55b6","squared cjk unified ideograph-55b6"],u:"1f23a",a:"0.6"},{n:["u6e80","squared cjk unified ideograph-6e80"],u:"1f235",a:"0.6"},{n:["red circle","large red circle"],u:"1f534",a:"0.6"},{n:["large orange circle"],u:"1f7e0",a:"12.0"},{n:["large yellow circle"],u:"1f7e1",a:"12.0"},{n:["large green circle"],u:"1f7e2",a:"12.0"},{n:["large blue circle"],u:"1f535",a:"0.6"},{n:["large purple circle"],u:"1f7e3",a:"12.0"},{n:["large brown circle"],u:"1f7e4",a:"12.0"},{n:["black circle","medium black circle"],u:"26ab",a:"0.6"},{n:["white circle","medium white circle"],u:"26aa",a:"0.6"},{n:["large red square"],u:"1f7e5",a:"12.0"},{n:["large orange square"],u:"1f7e7",a:"12.0"},{n:["large yellow square"],u:"1f7e8",a:"12.0"},{n:["large green square"],u:"1f7e9",a:"12.0"},{n:["large blue square"],u:"1f7e6",a:"12.0"},{n:["large purple square"],u:"1f7ea",a:"12.0"},{n:["large brown square"],u:"1f7eb",a:"12.0"},{n:["black large square"],u:"2b1b",a:"0.6"},{n:["white large square"],u:"2b1c",a:"0.6"},{n:["black medium square"],u:"25fc-fe0f",a:"0.6"},{n:["white medium square"],u:"25fb-fe0f",a:"0.6"},{n:["black medium small square"],u:"25fe",a:"0.6"},{n:["white medium small square"],u:"25fd",a:"0.6"},{n:["black small square"],u:"25aa-fe0f",a:"0.6"},{n:["white small square"],u:"25ab-fe0f",a:"0.6"},{n:["large orange diamond"],u:"1f536",a:"0.6"},{n:["large blue diamond"],u:"1f537",a:"0.6"},{n:["small orange diamond"],u:"1f538",a:"0.6"},{n:["small blue diamond"],u:"1f539",a:"0.6"},{n:["small red triangle","up-pointing red triangle"],u:"1f53a",a:"0.6"},{n:["small red triangle down","down-pointing red triangle"],u:"1f53b",a:"0.6"},{n:["diamond shape with a dot inside"],u:"1f4a0",a:"0.6"},{n:["radio button"],u:"1f518",a:"0.6"},{n:["white square button"],u:"1f533",a:"0.6"},{n:["black square button"],u:"1f532",a:"0.6"}],AT=[{n:["chequered flag","checkered flag"],u:"1f3c1",a:"0.6"},{n:["triangular flag on post"],u:"1f6a9",a:"0.6"},{n:["crossed flags"],u:"1f38c",a:"0.6"},{n:["waving black flag"],u:"1f3f4",a:"1.0"},{n:["white flag","waving white flag"],u:"1f3f3-fe0f",a:"0.7"},{n:["rainbow flag","rainbow-flag"],u:"1f3f3-fe0f-200d-1f308",a:"4.0"},{n:["transgender flag"],u:"1f3f3-fe0f-200d-26a7-fe0f",a:"13.0"},{n:["pirate flag"],u:"1f3f4-200d-2620-fe0f",a:"11.0"},{n:["flag-ac","ascension island flag"],u:"1f1e6-1f1e8",a:"2.0"},{n:["flag-ad","andorra flag"],u:"1f1e6-1f1e9",a:"2.0"},{n:["flag-ae","united arab emirates flag"],u:"1f1e6-1f1ea",a:"2.0"},{n:["flag-af","afghanistan flag"],u:"1f1e6-1f1eb",a:"2.0"},{n:["flag-ag","antigua & barbuda flag"],u:"1f1e6-1f1ec",a:"2.0"},{n:["flag-ai","anguilla flag"],u:"1f1e6-1f1ee",a:"2.0"},{n:["flag-al","albania flag"],u:"1f1e6-1f1f1",a:"2.0"},{n:["flag-am","armenia flag"],u:"1f1e6-1f1f2",a:"2.0"},{n:["flag-ao","angola flag"],u:"1f1e6-1f1f4",a:"2.0"},{n:["flag-aq","antarctica flag"],u:"1f1e6-1f1f6",a:"2.0"},{n:["flag-ar","argentina flag"],u:"1f1e6-1f1f7",a:"2.0"},{n:["flag-as","american samoa flag"],u:"1f1e6-1f1f8",a:"2.0"},{n:["flag-at","austria flag"],u:"1f1e6-1f1f9",a:"2.0"},{n:["flag-au","australia flag"],u:"1f1e6-1f1fa",a:"2.0"},{n:["flag-aw","aruba flag"],u:"1f1e6-1f1fc",a:"2.0"},{n:["flag-ax","åland islands flag"],u:"1f1e6-1f1fd",a:"2.0"},{n:["flag-az","azerbaijan flag"],u:"1f1e6-1f1ff",a:"2.0"},{n:["flag-ba","bosnia & herzegovina flag"],u:"1f1e7-1f1e6",a:"2.0"},{n:["flag-bb","barbados flag"],u:"1f1e7-1f1e7",a:"2.0"},{n:["flag-bd","bangladesh flag"],u:"1f1e7-1f1e9",a:"2.0"},{n:["flag-be","belgium flag"],u:"1f1e7-1f1ea",a:"2.0"},{n:["flag-bf","burkina faso flag"],u:"1f1e7-1f1eb",a:"2.0"},{n:["flag-bg","bulgaria flag"],u:"1f1e7-1f1ec",a:"2.0"},{n:["flag-bh","bahrain flag"],u:"1f1e7-1f1ed",a:"2.0"},{n:["flag-bi","burundi flag"],u:"1f1e7-1f1ee",a:"2.0"},{n:["flag-bj","benin flag"],u:"1f1e7-1f1ef",a:"2.0"},{n:["flag-bl","st. barthélemy flag"],u:"1f1e7-1f1f1",a:"2.0"},{n:["flag-bm","bermuda flag"],u:"1f1e7-1f1f2",a:"2.0"},{n:["flag-bn","brunei flag"],u:"1f1e7-1f1f3",a:"2.0"},{n:["flag-bo","bolivia flag"],u:"1f1e7-1f1f4",a:"2.0"},{n:["flag-bq","caribbean netherlands flag"],u:"1f1e7-1f1f6",a:"2.0"},{n:["flag-br","brazil flag"],u:"1f1e7-1f1f7",a:"2.0"},{n:["flag-bs","bahamas flag"],u:"1f1e7-1f1f8",a:"2.0"},{n:["flag-bt","bhutan flag"],u:"1f1e7-1f1f9",a:"2.0"},{n:["flag-bv","bouvet island flag"],u:"1f1e7-1f1fb",a:"2.0"},{n:["flag-bw","botswana flag"],u:"1f1e7-1f1fc",a:"2.0"},{n:["flag-by","belarus flag"],u:"1f1e7-1f1fe",a:"2.0"},{n:["flag-bz","belize flag"],u:"1f1e7-1f1ff",a:"2.0"},{n:["flag-ca","canada flag"],u:"1f1e8-1f1e6",a:"2.0"},{n:["flag-cc","cocos (keeling) islands flag"],u:"1f1e8-1f1e8",a:"2.0"},{n:["flag-cd","congo - kinshasa flag"],u:"1f1e8-1f1e9",a:"2.0"},{n:["flag-cf","central african republic flag"],u:"1f1e8-1f1eb",a:"2.0"},{n:["flag-cg","congo - brazzaville flag"],u:"1f1e8-1f1ec",a:"2.0"},{n:["flag-ch","switzerland flag"],u:"1f1e8-1f1ed",a:"2.0"},{n:["flag-ci","côte d’ivoire flag"],u:"1f1e8-1f1ee",a:"2.0"},{n:["flag-ck","cook islands flag"],u:"1f1e8-1f1f0",a:"2.0"},{n:["flag-cl","chile flag"],u:"1f1e8-1f1f1",a:"2.0"},{n:["flag-cm","cameroon flag"],u:"1f1e8-1f1f2",a:"2.0"},{n:["cn","flag-cn","china flag"],u:"1f1e8-1f1f3",a:"0.6"},{n:["flag-co","colombia flag"],u:"1f1e8-1f1f4",a:"2.0"},{n:["flag-cp","clipperton island flag"],u:"1f1e8-1f1f5",a:"2.0"},{n:["flag-cr","costa rica flag"],u:"1f1e8-1f1f7",a:"2.0"},{n:["flag-cu","cuba flag"],u:"1f1e8-1f1fa",a:"2.0"},{n:["flag-cv","cape verde flag"],u:"1f1e8-1f1fb",a:"2.0"},{n:["flag-cw","curaçao flag"],u:"1f1e8-1f1fc",a:"2.0"},{n:["flag-cx","christmas island flag"],u:"1f1e8-1f1fd",a:"2.0"},{n:["flag-cy","cyprus flag"],u:"1f1e8-1f1fe",a:"2.0"},{n:["flag-cz","czechia flag"],u:"1f1e8-1f1ff",a:"2.0"},{n:["de","flag-de","germany flag"],u:"1f1e9-1f1ea",a:"0.6"},{n:["flag-dg","diego garcia flag"],u:"1f1e9-1f1ec",a:"2.0"},{n:["flag-dj","djibouti flag"],u:"1f1e9-1f1ef",a:"2.0"},{n:["flag-dk","denmark flag"],u:"1f1e9-1f1f0",a:"2.0"},{n:["flag-dm","dominica flag"],u:"1f1e9-1f1f2",a:"2.0"},{n:["flag-do","dominican republic flag"],u:"1f1e9-1f1f4",a:"2.0"},{n:["flag-dz","algeria flag"],u:"1f1e9-1f1ff",a:"2.0"},{n:["flag-ea","ceuta & melilla flag"],u:"1f1ea-1f1e6",a:"2.0"},{n:["flag-ec","ecuador flag"],u:"1f1ea-1f1e8",a:"2.0"},{n:["flag-ee","estonia flag"],u:"1f1ea-1f1ea",a:"2.0"},{n:["flag-eg","egypt flag"],u:"1f1ea-1f1ec",a:"2.0"},{n:["flag-eh","western sahara flag"],u:"1f1ea-1f1ed",a:"2.0"},{n:["flag-er","eritrea flag"],u:"1f1ea-1f1f7",a:"2.0"},{n:["es","flag-es","spain flag"],u:"1f1ea-1f1f8",a:"0.6"},{n:["flag-et","ethiopia flag"],u:"1f1ea-1f1f9",a:"2.0"},{n:["flag-eu","european union flag"],u:"1f1ea-1f1fa",a:"2.0"},{n:["flag-fi","finland flag"],u:"1f1eb-1f1ee",a:"2.0"},{n:["flag-fj","fiji flag"],u:"1f1eb-1f1ef",a:"2.0"},{n:["flag-fk","falkland islands flag"],u:"1f1eb-1f1f0",a:"2.0"},{n:["flag-fm","micronesia flag"],u:"1f1eb-1f1f2",a:"2.0"},{n:["flag-fo","faroe islands flag"],u:"1f1eb-1f1f4",a:"2.0"},{n:["fr","flag-fr","france flag"],u:"1f1eb-1f1f7",a:"0.6"},{n:["flag-ga","gabon flag"],u:"1f1ec-1f1e6",a:"2.0"},{n:["gb","uk","flag-gb","united kingdom flag"],u:"1f1ec-1f1e7",a:"0.6"},{n:["flag-gd","grenada flag"],u:"1f1ec-1f1e9",a:"2.0"},{n:["flag-ge","georgia flag"],u:"1f1ec-1f1ea",a:"2.0"},{n:["flag-gf","french guiana flag"],u:"1f1ec-1f1eb",a:"2.0"},{n:["flag-gg","guernsey flag"],u:"1f1ec-1f1ec",a:"2.0"},{n:["flag-gh","ghana flag"],u:"1f1ec-1f1ed",a:"2.0"},{n:["flag-gi","gibraltar flag"],u:"1f1ec-1f1ee",a:"2.0"},{n:["flag-gl","greenland flag"],u:"1f1ec-1f1f1",a:"2.0"},{n:["flag-gm","gambia flag"],u:"1f1ec-1f1f2",a:"2.0"},{n:["flag-gn","guinea flag"],u:"1f1ec-1f1f3",a:"2.0"},{n:["flag-gp","guadeloupe flag"],u:"1f1ec-1f1f5",a:"2.0"},{n:["flag-gq","equatorial guinea flag"],u:"1f1ec-1f1f6",a:"2.0"},{n:["flag-gr","greece flag"],u:"1f1ec-1f1f7",a:"2.0"},{n:["flag-gs","south georgia & south sandwich islands flag"],u:"1f1ec-1f1f8",a:"2.0"},{n:["flag-gt","guatemala flag"],u:"1f1ec-1f1f9",a:"2.0"},{n:["flag-gu","guam flag"],u:"1f1ec-1f1fa",a:"2.0"},{n:["flag-gw","guinea-bissau flag"],u:"1f1ec-1f1fc",a:"2.0"},{n:["flag-gy","guyana flag"],u:"1f1ec-1f1fe",a:"2.0"},{n:["flag-hk","hong kong sar china flag"],u:"1f1ed-1f1f0",a:"2.0"},{n:["flag-hm","heard & mcdonald islands flag"],u:"1f1ed-1f1f2",a:"2.0"},{n:["flag-hn","honduras flag"],u:"1f1ed-1f1f3",a:"2.0"},{n:["flag-hr","croatia flag"],u:"1f1ed-1f1f7",a:"2.0"},{n:["flag-ht","haiti flag"],u:"1f1ed-1f1f9",a:"2.0"},{n:["flag-hu","hungary flag"],u:"1f1ed-1f1fa",a:"2.0"},{n:["flag-ic","canary islands flag"],u:"1f1ee-1f1e8",a:"2.0"},{n:["flag-id","indonesia flag"],u:"1f1ee-1f1e9",a:"2.0"},{n:["flag-ie","ireland flag"],u:"1f1ee-1f1ea",a:"2.0"},{n:["flag-il","israel flag"],u:"1f1ee-1f1f1",a:"2.0"},{n:["flag-im","isle of man flag"],u:"1f1ee-1f1f2",a:"2.0"},{n:["flag-in","india flag"],u:"1f1ee-1f1f3",a:"2.0"},{n:["flag-io","british indian ocean territory flag"],u:"1f1ee-1f1f4",a:"2.0"},{n:["flag-iq","iraq flag"],u:"1f1ee-1f1f6",a:"2.0"},{n:["flag-ir","iran flag"],u:"1f1ee-1f1f7",a:"2.0"},{n:["flag-is","iceland flag"],u:"1f1ee-1f1f8",a:"2.0"},{n:["it","flag-it","italy flag"],u:"1f1ee-1f1f9",a:"0.6"},{n:["flag-je","jersey flag"],u:"1f1ef-1f1ea",a:"2.0"},{n:["flag-jm","jamaica flag"],u:"1f1ef-1f1f2",a:"2.0"},{n:["flag-jo","jordan flag"],u:"1f1ef-1f1f4",a:"2.0"},{n:["jp","flag-jp","japan flag"],u:"1f1ef-1f1f5",a:"0.6"},{n:["flag-ke","kenya flag"],u:"1f1f0-1f1ea",a:"2.0"},{n:["flag-kg","kyrgyzstan flag"],u:"1f1f0-1f1ec",a:"2.0"},{n:["flag-kh","cambodia flag"],u:"1f1f0-1f1ed",a:"2.0"},{n:["flag-ki","kiribati flag"],u:"1f1f0-1f1ee",a:"2.0"},{n:["flag-km","comoros flag"],u:"1f1f0-1f1f2",a:"2.0"},{n:["flag-kn","st. kitts & nevis flag"],u:"1f1f0-1f1f3",a:"2.0"},{n:["flag-kp","north korea flag"],u:"1f1f0-1f1f5",a:"2.0"},{n:["kr","flag-kr","south korea flag"],u:"1f1f0-1f1f7",a:"0.6"},{n:["flag-kw","kuwait flag"],u:"1f1f0-1f1fc",a:"2.0"},{n:["flag-ky","cayman islands flag"],u:"1f1f0-1f1fe",a:"2.0"},{n:["flag-kz","kazakhstan flag"],u:"1f1f0-1f1ff",a:"2.0"},{n:["flag-la","laos flag"],u:"1f1f1-1f1e6",a:"2.0"},{n:["flag-lb","lebanon flag"],u:"1f1f1-1f1e7",a:"2.0"},{n:["flag-lc","st. lucia flag"],u:"1f1f1-1f1e8",a:"2.0"},{n:["flag-li","liechtenstein flag"],u:"1f1f1-1f1ee",a:"2.0"},{n:["flag-lk","sri lanka flag"],u:"1f1f1-1f1f0",a:"2.0"},{n:["flag-lr","liberia flag"],u:"1f1f1-1f1f7",a:"2.0"},{n:["flag-ls","lesotho flag"],u:"1f1f1-1f1f8",a:"2.0"},{n:["flag-lt","lithuania flag"],u:"1f1f1-1f1f9",a:"2.0"},{n:["flag-lu","luxembourg flag"],u:"1f1f1-1f1fa",a:"2.0"},{n:["flag-lv","latvia flag"],u:"1f1f1-1f1fb",a:"2.0"},{n:["flag-ly","libya flag"],u:"1f1f1-1f1fe",a:"2.0"},{n:["flag-ma","morocco flag"],u:"1f1f2-1f1e6",a:"2.0"},{n:["flag-mc","monaco flag"],u:"1f1f2-1f1e8",a:"2.0"},{n:["flag-md","moldova flag"],u:"1f1f2-1f1e9",a:"2.0"},{n:["flag-me","montenegro flag"],u:"1f1f2-1f1ea",a:"2.0"},{n:["flag-mf","st. martin flag"],u:"1f1f2-1f1eb",a:"2.0"},{n:["flag-mg","madagascar flag"],u:"1f1f2-1f1ec",a:"2.0"},{n:["flag-mh","marshall islands flag"],u:"1f1f2-1f1ed",a:"2.0"},{n:["flag-mk","north macedonia flag"],u:"1f1f2-1f1f0",a:"2.0"},{n:["flag-ml","mali flag"],u:"1f1f2-1f1f1",a:"2.0"},{n:["flag-mm","myanmar (burma) flag"],u:"1f1f2-1f1f2",a:"2.0"},{n:["flag-mn","mongolia flag"],u:"1f1f2-1f1f3",a:"2.0"},{n:["flag-mo","macao sar china flag"],u:"1f1f2-1f1f4",a:"2.0"},{n:["flag-mp","northern mariana islands flag"],u:"1f1f2-1f1f5",a:"2.0"},{n:["flag-mq","martinique flag"],u:"1f1f2-1f1f6",a:"2.0"},{n:["flag-mr","mauritania flag"],u:"1f1f2-1f1f7",a:"2.0"},{n:["flag-ms","montserrat flag"],u:"1f1f2-1f1f8",a:"2.0"},{n:["flag-mt","malta flag"],u:"1f1f2-1f1f9",a:"2.0"},{n:["flag-mu","mauritius flag"],u:"1f1f2-1f1fa",a:"2.0"},{n:["flag-mv","maldives flag"],u:"1f1f2-1f1fb",a:"2.0"},{n:["flag-mw","malawi flag"],u:"1f1f2-1f1fc",a:"2.0"},{n:["flag-mx","mexico flag"],u:"1f1f2-1f1fd",a:"2.0"},{n:["flag-my","malaysia flag"],u:"1f1f2-1f1fe",a:"2.0"},{n:["flag-mz","mozambique flag"],u:"1f1f2-1f1ff",a:"2.0"},{n:["flag-na","namibia flag"],u:"1f1f3-1f1e6",a:"2.0"},{n:["flag-nc","new caledonia flag"],u:"1f1f3-1f1e8",a:"2.0"},{n:["flag-ne","niger flag"],u:"1f1f3-1f1ea",a:"2.0"},{n:["flag-nf","norfolk island flag"],u:"1f1f3-1f1eb",a:"2.0"},{n:["flag-ng","nigeria flag"],u:"1f1f3-1f1ec",a:"2.0"},{n:["flag-ni","nicaragua flag"],u:"1f1f3-1f1ee",a:"2.0"},{n:["flag-nl","netherlands flag"],u:"1f1f3-1f1f1",a:"2.0"},{n:["flag-no","norway flag"],u:"1f1f3-1f1f4",a:"2.0"},{n:["flag-np","nepal flag"],u:"1f1f3-1f1f5",a:"2.0"},{n:["flag-nr","nauru flag"],u:"1f1f3-1f1f7",a:"2.0"},{n:["flag-nu","niue flag"],u:"1f1f3-1f1fa",a:"2.0"},{n:["flag-nz","new zealand flag"],u:"1f1f3-1f1ff",a:"2.0"},{n:["flag-om","oman flag"],u:"1f1f4-1f1f2",a:"2.0"},{n:["flag-pa","panama flag"],u:"1f1f5-1f1e6",a:"2.0"},{n:["flag-pe","peru flag"],u:"1f1f5-1f1ea",a:"2.0"},{n:["flag-pf","french polynesia flag"],u:"1f1f5-1f1eb",a:"2.0"},{n:["flag-pg","papua new guinea flag"],u:"1f1f5-1f1ec",a:"2.0"},{n:["flag-ph","philippines flag"],u:"1f1f5-1f1ed",a:"2.0"},{n:["flag-pk","pakistan flag"],u:"1f1f5-1f1f0",a:"2.0"},{n:["flag-pl","poland flag"],u:"1f1f5-1f1f1",a:"2.0"},{n:["flag-pm","st. pierre & miquelon flag"],u:"1f1f5-1f1f2",a:"2.0"},{n:["flag-pn","pitcairn islands flag"],u:"1f1f5-1f1f3",a:"2.0"},{n:["flag-pr","puerto rico flag"],u:"1f1f5-1f1f7",a:"2.0"},{n:["flag-ps","palestinian territories flag"],u:"1f1f5-1f1f8",a:"2.0"},{n:["flag-pt","portugal flag"],u:"1f1f5-1f1f9",a:"2.0"},{n:["flag-pw","palau flag"],u:"1f1f5-1f1fc",a:"2.0"},{n:["flag-py","paraguay flag"],u:"1f1f5-1f1fe",a:"2.0"},{n:["flag-qa","qatar flag"],u:"1f1f6-1f1e6",a:"2.0"},{n:["flag-re","réunion flag"],u:"1f1f7-1f1ea",a:"2.0"},{n:["flag-ro","romania flag"],u:"1f1f7-1f1f4",a:"2.0"},{n:["flag-rs","serbia flag"],u:"1f1f7-1f1f8",a:"2.0"},{n:["ru","flag-ru","russia flag"],u:"1f1f7-1f1fa",a:"0.6"},{n:["flag-rw","rwanda flag"],u:"1f1f7-1f1fc",a:"2.0"},{n:["flag-sa","saudi arabia flag"],u:"1f1f8-1f1e6",a:"2.0"},{n:["flag-sb","solomon islands flag"],u:"1f1f8-1f1e7",a:"2.0"},{n:["flag-sc","seychelles flag"],u:"1f1f8-1f1e8",a:"2.0"},{n:["flag-sd","sudan flag"],u:"1f1f8-1f1e9",a:"2.0"},{n:["flag-se","sweden flag"],u:"1f1f8-1f1ea",a:"2.0"},{n:["flag-sg","singapore flag"],u:"1f1f8-1f1ec",a:"2.0"},{n:["flag-sh","st. helena flag"],u:"1f1f8-1f1ed",a:"2.0"},{n:["flag-si","slovenia flag"],u:"1f1f8-1f1ee",a:"2.0"},{n:["flag-sj","svalbard & jan mayen flag"],u:"1f1f8-1f1ef",a:"2.0"},{n:["flag-sk","slovakia flag"],u:"1f1f8-1f1f0",a:"2.0"},{n:["flag-sl","sierra leone flag"],u:"1f1f8-1f1f1",a:"2.0"},{n:["flag-sm","san marino flag"],u:"1f1f8-1f1f2",a:"2.0"},{n:["flag-sn","senegal flag"],u:"1f1f8-1f1f3",a:"2.0"},{n:["flag-so","somalia flag"],u:"1f1f8-1f1f4",a:"2.0"},{n:["flag-sr","suriname flag"],u:"1f1f8-1f1f7",a:"2.0"},{n:["flag-ss","south sudan flag"],u:"1f1f8-1f1f8",a:"2.0"},{n:["flag-st","são tomé & príncipe flag"],u:"1f1f8-1f1f9",a:"2.0"},{n:["flag-sv","el salvador flag"],u:"1f1f8-1f1fb",a:"2.0"},{n:["flag-sx","sint maarten flag"],u:"1f1f8-1f1fd",a:"2.0"},{n:["flag-sy","syria flag"],u:"1f1f8-1f1fe",a:"2.0"},{n:["flag-sz","eswatini flag"],u:"1f1f8-1f1ff",a:"2.0"},{n:["flag-ta","tristan da cunha flag"],u:"1f1f9-1f1e6",a:"2.0"},{n:["flag-tc","turks & caicos islands flag"],u:"1f1f9-1f1e8",a:"2.0"},{n:["flag-td","chad flag"],u:"1f1f9-1f1e9",a:"2.0"},{n:["flag-tf","french southern territories flag"],u:"1f1f9-1f1eb",a:"2.0"},{n:["flag-tg","togo flag"],u:"1f1f9-1f1ec",a:"2.0"},{n:["flag-th","thailand flag"],u:"1f1f9-1f1ed",a:"2.0"},{n:["flag-tj","tajikistan flag"],u:"1f1f9-1f1ef",a:"2.0"},{n:["flag-tk","tokelau flag"],u:"1f1f9-1f1f0",a:"2.0"},{n:["flag-tl","timor-leste flag"],u:"1f1f9-1f1f1",a:"2.0"},{n:["flag-tm","turkmenistan flag"],u:"1f1f9-1f1f2",a:"2.0"},{n:["flag-tn","tunisia flag"],u:"1f1f9-1f1f3",a:"2.0"},{n:["flag-to","tonga flag"],u:"1f1f9-1f1f4",a:"2.0"},{n:["flag-tr","turkey flag"],u:"1f1f9-1f1f7",a:"2.0"},{n:["flag-tt","trinidad & tobago flag"],u:"1f1f9-1f1f9",a:"2.0"},{n:["flag-tv","tuvalu flag"],u:"1f1f9-1f1fb",a:"2.0"},{n:["flag-tw","taiwan flag"],u:"1f1f9-1f1fc",a:"2.0"},{n:["flag-tz","tanzania flag"],u:"1f1f9-1f1ff",a:"2.0"},{n:["flag-ua","ukraine flag"],u:"1f1fa-1f1e6",a:"2.0"},{n:["flag-ug","uganda flag"],u:"1f1fa-1f1ec",a:"2.0"},{n:["flag-um","u.s. outlying islands flag"],u:"1f1fa-1f1f2",a:"2.0"},{n:["flag-un","united nations flag"],u:"1f1fa-1f1f3",a:"4.0"},{n:["us","flag-us","united states flag"],u:"1f1fa-1f1f8",a:"0.6"},{n:["flag-uy","uruguay flag"],u:"1f1fa-1f1fe",a:"2.0"},{n:["flag-uz","uzbekistan flag"],u:"1f1fa-1f1ff",a:"2.0"},{n:["flag-va","vatican city flag"],u:"1f1fb-1f1e6",a:"2.0"},{n:["flag-vc","st. vincent & grenadines flag"],u:"1f1fb-1f1e8",a:"2.0"},{n:["flag-ve","venezuela flag"],u:"1f1fb-1f1ea",a:"2.0"},{n:["flag-vg","british virgin islands flag"],u:"1f1fb-1f1ec",a:"2.0"},{n:["flag-vi","u.s. virgin islands flag"],u:"1f1fb-1f1ee",a:"2.0"},{n:["flag-vn","vietnam flag"],u:"1f1fb-1f1f3",a:"2.0"},{n:["flag-vu","vanuatu flag"],u:"1f1fb-1f1fa",a:"2.0"},{n:["flag-wf","wallis & futuna flag"],u:"1f1fc-1f1eb",a:"2.0"},{n:["flag-ws","samoa flag"],u:"1f1fc-1f1f8",a:"2.0"},{n:["flag-xk","kosovo flag"],u:"1f1fd-1f1f0",a:"2.0"},{n:["flag-ye","yemen flag"],u:"1f1fe-1f1ea",a:"2.0"},{n:["flag-yt","mayotte flag"],u:"1f1fe-1f1f9",a:"2.0"},{n:["flag-za","south africa flag"],u:"1f1ff-1f1e6",a:"2.0"},{n:["flag-zm","zambia flag"],u:"1f1ff-1f1f2",a:"2.0"},{n:["flag-zw","zimbabwe flag"],u:"1f1ff-1f1fc",a:"2.0"},{n:["england flag","flag-england"],u:"1f3f4-e0067-e0062-e0065-e006e-e0067-e007f",a:"5.0"},{n:["scotland flag","flag-scotland"],u:"1f3f4-e0067-e0062-e0073-e0063-e0074-e007f",a:"5.0"},{n:["wales flag","flag-wales"],u:"1f3f4-e0067-e0062-e0077-e006c-e0073-e007f",a:"5.0"}],qo={custom:ST,smileys_people:CT,animals_nature:kT,food_drink:ET,travel_places:TT,activities:NT,objects:IT,symbols:DT,flags:AT},jl=[bn.NEUTRAL,bn.LIGHT,bn.MEDIUM_LIGHT,bn.MEDIUM,bn.MEDIUM_DARK,bn.DARK],zT=Object.entries(bn).reduce(function(e,a){var r=a[0],o=a[1];return e[o]=r,e},{}),RT=jl.reduce(function(e,a){var r;return Object.assign(e,(r={},r[a]=a,r))},{}),sn;(function(e){e.name="n",e.unified="u",e.variations="v",e.added_in="a",e.imgUrl="imgUrl"})(sn||(sn={}));var Yo={};setTimeout(function(){Vl.reduce(function(e,a){return S3(a),e},Yo)});function S3(e){var a=sf(e).flat().join("").toLowerCase().replace(/[^a-zA-Z\d]/g,"").split("");a.forEach(function(r){var o;Yo[r]=(o=Yo[r])!=null?o:{},Yo[r][Et(e)]=e})}function sf(e){var a;return(a=e[sn.name])!=null?a:[]}function OT(e){return parseFloat(e[sn.added_in])}function n1(e){return e?sf(e)[0]:""}function O1(e){var a=e.split("-"),r=a.splice(1,1),o=r[0];return RT[o]?a.join("-"):e}function Et(e,a){var r,o=e[sn.unified];return!a||!Mi(e)?o:(r=_T(e,a))!=null?r:o}function BT(e){var a;return(a=qo==null?void 0:qo[e])!=null?a:[]}function C3(e,a){return""+LT(a)+e+".png"}function lf(e){var a;return(a=e[sn.variations])!=null?a:[]}function Mi(e){return lf(e).length>0}function _T(e,a){return a?lf(e).find(function(r){return r.includes(a)}):Et(e)}function hi(e){if(e){if(ri[e])return ri[e];var a=O1(e);return ri[a]}}var Vl=Object.values(qo).flat();function UT(e){qo[ye.CUSTOM].length=0,e.forEach(function(a){var r=YT(a);qo[ye.CUSTOM].push(r),!ri[r[sn.unified]]&&(Vl.push(r),ri[r[sn.unified]]=r,S3(r))})}function YT(e){var a;return a={},a[sn.name]=e.names.map(function(r){return r.toLowerCase()}),a[sn.unified]=e.id.toLowerCase(),a[sn.added_in]="0",a[sn.imgUrl]=e.imgUrl,a}var ri={};setTimeout(function(){Vl.reduce(function(e,a){return e[Et(a)]=a,Mi(a)&&lf(a).forEach(function(r){e[r]=a}),e},ri)});function GT(e){var a=e.split("-"),r=a[1];return jl.includes(r)?r:null}var QT=["2640-fe0f","2642-fe0f","2695-fe0f"],Ll="Search",$T="No results found",k3=" found. Use up and down arrow keys to navigate.",PT="1 result"+k3,HT="%n results"+k3;function x4(e){var a,r;e===void 0&&(e={});var o=E3(),l=Object.assign(o.previewConfig,(a=e.previewConfig)!=null?a:{}),u=Object.assign(o,e),h=wT(e.categories,{suggestionMode:u.suggestedEmojisMode});u.hiddenEmojis.forEach(function(p){u.unicodeToHide.add(p)}),UT((r=u.customEmojis)!=null?r:[]);var b=u.searchDisabled?di.PREVIEW:u.skinTonePickerLocation;return He({},u,{categories:h,previewConfig:l,skinTonePickerLocation:b})}function E3(){return{autoFocusSearch:!0,categories:j3(),className:"",customEmojis:[],defaultSkinTone:bn.NEUTRAL,emojiStyle:Zt.APPLE,emojiVersion:null,getEmojiUrl:C3,height:450,lazyLoadEmojis:!1,previewConfig:He({},ZT),searchDisabled:!1,searchPlaceHolder:Ll,searchPlaceholder:Ll,skinTonePickerLocation:di.SEARCH,skinTonesDisabled:!1,style:{},suggestedEmojisMode:Jo.FREQUENT,theme:Fo.LIGHT,unicodeToHide:new Set(QT),width:350,reactionsDefaultOpen:!1,reactions:pT,open:!0,allowExpandReactions:!0,hiddenEmojis:[]}}var ZT={defaultEmoji:"1f60a",defaultCaption:"What's your mood?",showPreview:!0},JT=["children"],T3=m.createContext(E3());function FT(e){var a=e.children,r=v3(e,JT),o=qT(r);return m.createElement(T3.Provider,{value:o},a)}function qT(e){var a,r=m.useState(function(){return x4(e)}),o=r[0],l=r[1];return m.useEffect(function(){x3(o,e)||l(x4(e))},[(a=e.customEmojis)==null?void 0:a.length,e.open,e.emojiVersion,e.reactionsDefaultOpen,e.searchPlaceHolder,e.searchPlaceholder,e.defaultSkinTone,e.skinTonesDisabled,e.autoFocusSearch,e.emojiStyle,e.theme,e.suggestedEmojisMode,e.lazyLoadEmojis,e.className,e.height,e.width,e.searchDisabled,e.skinTonePickerLocation,e.allowExpandReactions]),o}function qe(){return m.useContext(T3)}var N3=dt.createContext({});function I3(){var e=dt.useContext(N3);return e}function VT(e){var a=dt.useRef({onEmojiClick:e.onEmojiClick||Us,onReactionClick:e.onReactionClick||e.onEmojiClick,onSkinToneChange:e.onSkinToneChange||Us});return dt.useEffect(function(){a.current.onEmojiClick=e.onEmojiClick||Us,a.current.onReactionClick=e.onReactionClick||e.onEmojiClick},[e.onEmojiClick,e.onReactionClick]),dt.useEffect(function(){a.current.onSkinToneChange=e.onSkinToneChange||Us},[e.onSkinToneChange]),a}function Us(){}var Vo;(function(e){e.REACTIONS="reactions",e.PICKER="picker"})(Vo||(Vo={}));function XT(){var e,a=qe(),r=a.searchPlaceHolder,o=a.searchPlaceholder;return(e=[r,o].find(function(l){return l!==Ll}))!=null?e:Ll}function WT(){var e=qe(),a=e.defaultSkinTone;return a}function D3(){var e=qe(),a=e.allowExpandReactions;return a}function A3(){var e=qe(),a=e.skinTonesDisabled;return a}function dr(){var e=qe(),a=e.emojiStyle;return a}function KT(){var e=qe(),a=e.autoFocusSearch;return a}function z3(){var e=qe(),a=e.categories;return a}function eN(){var e=qe(),a=e.customEmojis;return a}function tN(){var e=qe(),a=e.open;return a}function nN(e){var a,r=I3(),o=r.current,l=(a=e===Vo.REACTIONS?o.onReactionClick:o.onEmojiClick)!=null?a:o.onEmojiClick;return l||function(){}}function aN(){var e=I3(),a=e.current;return a.onSkinToneChange||function(){}}function R3(){var e=qe(),a=e.previewConfig;return a}function rN(){var e=qe(),a=e.theme;return a}function iN(){var e=qe(),a=e.suggestedEmojisMode;return a}function oN(){var e=qe(),a=e.lazyLoadEmojis;return a}function fN(){var e=qe(),a=e.className;return a}function sN(){var e=qe(),a=e.height,r=e.width,o=e.style;return He({height:M4(a),width:M4(r)},o)}function lN(){var e=qe(),a=e.reactionsDefaultOpen;return a}function cN(){var e=qe(),a=e.emojiVersion;return a}function O3(){var e=qe(),a=e.searchDisabled;return a}function B3(){var e=qe(),a=e.skinTonePickerLocation;return a}function uN(){var e=qe(),a=e.unicodeToHide;return a}function dN(){var e=qe(),a=e.reactions;return a}function hr(){var e=qe(),a=e.getEmojiUrl;return a}function M4(e){return typeof e=="number"?e+"px":e}function hN(e){var a=e>0,r=e>1;return a?r?HT.replace("%n",e.toString()):PT:$T}function j4(e,a){a===void 0&&(a=0);var r=m.useState(e),o=r[0],l=r[1],u=m.useRef(null);function h(b){return new Promise(function(p){var y;u.current&&clearTimeout(u.current),u.current=(y=window)==null?void 0:y.setTimeout(function(){l(b),p(b)},a)})}return[o,h]}function mN(){var e=uN();return function(a){return e.has(a)}}function _3(){var e=m.useRef({}),a=cN();return m.useMemo(function(){var r=parseFloat(""+a);return!a||Number.isNaN(r)?e.current:Vl.reduce(function(o,l){return pN(l,r)&&(o[Et(l)]=!0),o},e.current)},[a])}function gN(){var e=_3(),a=mN();return function(o){var l=O1(Et(o));return!!(e[l]||a(l))}}function pN(e,a){return OT(e)>a}function yN(e){m.useEffect(function(){e(!0)},[e])}function bN(e){var a=e.children,r=_3(),o=WT(),l=lN(),u=m.useRef(Yo),h=m.useRef(!1),b=m.useRef(!1),p=m.useRef(r),y=j4(Date.now(),200),v=j4("",100),x=m.useState(!1),j=m.useState(o),C=m.useState(null),S=m.useState(new Set),L=m.useState(null),T=m.useState(l),E=m.useState(!1),k=E[0],O=E[1];return yN(O),m.createElement(dn.Provider,{value:{activeCategoryState:C,activeSkinTone:j,disallowClickRef:h,disallowMouseRef:b,disallowedEmojisRef:p,emojiVariationPickerState:L,emojisThatFailedToLoadState:S,filterRef:u,isPastInitialLoad:k,searchTerm:v,skinToneFanOpenState:x,suggestedUpdateState:y,reactionsModeState:T}},a)}var dn=m.createContext({activeCategoryState:[null,function(){}],activeSkinTone:[bn.NEUTRAL,function(){}],disallowClickRef:{current:!1},disallowMouseRef:{current:!1},disallowedEmojisRef:{current:{}},emojiVariationPickerState:[null,function(){}],emojisThatFailedToLoadState:[new Set,function(){}],filterRef:{current:{}},isPastInitialLoad:!0,searchTerm:["",function(){return new Promise(function(){})}],skinToneFanOpenState:[!1,function(){}],suggestedUpdateState:[Date.now(),function(){}],reactionsModeState:[!1,function(){}]});function B1(){var e=m.useContext(dn),a=e.filterRef;return a}function wN(){var e=m.useContext(dn),a=e.disallowClickRef;return a}function _1(){var e=m.useContext(dn),a=e.disallowMouseRef;return a}function Xl(){var e=m.useContext(dn),a=e.reactionsModeState;return a}function Wl(){var e=m.useContext(dn),a=e.searchTerm;return a}function U1(){var e=m.useContext(dn),a=e.activeSkinTone;return a}function U3(){var e=m.useContext(dn),a=e.emojisThatFailedToLoadState;return a}function vN(){var e=m.useContext(dn),a=e.isPastInitialLoad;return a}function ji(){var e=m.useContext(dn),a=e.emojiVariationPickerState;return a}function cf(){var e=m.useContext(dn),a=e.skinToneFanOpenState;return a}function Y3(){var e=m.useContext(dn),a=e.suggestedUpdateState,r=a[0],o=a[1];return[r,function(){o(Date.now())}]}function Kl(){var e=Wl(),a=e[0];return!!a}function Ft(e){e&&requestAnimationFrame(function(){e.focus()})}function G3(e){if(e){var a=e.previousElementSibling;Ft(a)}}function Q3(e){if(e){var a=e.nextElementSibling;Ft(a)}}function $3(e){if(e){var a=e.firstElementChild;Ft(a)}}function Xo(){return document.activeElement}function xN(e){var a=e.children,r=m.useRef(null),o=m.useRef(null),l=m.useRef(null),u=m.useRef(null),h=m.useRef(null),b=m.useRef(null),p=m.useRef(null),y=m.useRef(null);return m.createElement(P3.Provider,{value:{AnchoredEmojiRef:o,BodyRef:l,CategoryNavigationRef:b,PickerMainRef:r,SearchInputRef:u,SkinTonePickerRef:h,VariationPickerRef:p,ReactionsRef:y}},a)}var P3=m.createContext({AnchoredEmojiRef:m.createRef(),BodyRef:m.createRef(),CategoryNavigationRef:m.createRef(),PickerMainRef:m.createRef(),SearchInputRef:m.createRef(),SkinTonePickerRef:m.createRef(),VariationPickerRef:m.createRef(),ReactionsRef:m.createRef()});function Aa(){return m.useContext(P3)}function uf(){return Aa().PickerMainRef}function ec(){return Aa().AnchoredEmojiRef}function H3(){var e=ec();return function(a){a===null&&e.current!==null&&Ft(e.current),e.current=a}}function hn(){return Aa().BodyRef}function MN(){return Aa().ReactionsRef}function za(){return Aa().SearchInputRef}function Y1(){return Aa().SkinTonePickerRef}function G1(){return Aa().CategoryNavigationRef}function jN(){return Aa().VariationPickerRef}function Z3(e,a){a===void 0&&(a=0);var r=fw(e);r&&requestAnimationFrame(function(){r.scrollTop=a})}function LN(e,a){var r=fw(e);r&&requestAnimationFrame(function(){r.scrollTop=r.scrollTop+a})}function SN(){var e=hn();return m.useCallback(function(a){requestAnimationFrame(function(){e.current&&(e.current.scrollTop=a)})},[e])}function tc(e){if(!(!e||!gI(e))&&!e.closest(jt(be.variationPicker))){var a=lw(e),r=sw(e);LN(a,-(J1(Ra(e))-r))}}function nc(e){var a=X1(e);Ft(a),tc(a)}function CN(e){var a=X1(e);Ft(a),a==null||a.click()}function kN(e){Ft(hw(e))}function EN(e){if(e){var a=mw(e);if(!a)return nc(rc(e));Ft(a),tc(a)}}function TN(e){if(e){var a=V1(e);if(!a)return kN(ac(e));Ft(a),tc(a)}}function NN(e,a){if(e){var r=DN(e);if(!r)return a();Ft(r),tc(r)}}function IN(e){if(e){var a=AN(e);return Ft(a)}}function DN(e){if(!e)return null;var a=gw(e),r=Ra(a),o=aw(a,e),l=rw(a,e),u=nw(a,e);if(l===0){var h=ac(r);return h?iw(mi(h),-1,u,o):null}return lI(mi(a),l,u,o)}function AN(e){if(!e)return null;var a=gw(e),r=Ra(a),o=aw(a,e),l=rw(a,e),u=nw(a,e);if(!oI(a,e)){var h=rc(r);return h?iw(mi(h),0,u,o):null}var b=sI(mi(a),l,u,o);return b}function mr(){var e=ji(),a=e[0],r=e[1],o=cf(),l=o[0],u=o[1],h=m.useCallback(function(){a&&r(null),l&&u(!1)},[a,l,r,u]);return h}function J3(){var e=ji(),a=e[0],r=cf(),o=r[0];return function(){return!!a||o}}function zN(){var e=_1();return function(){e.current=!0}}function F3(){var e=_1();return function(){e.current=!1}}function q3(){var e=_1();return function(){return e.current}}function RN(){var e=hn(),a=F3(),r=q3();m.useEffect(function(){var o=e.current;o==null||o.addEventListener("mousemove",l,{passive:!0});function l(){r()&&a()}return function(){o==null||o.removeEventListener("mousemove",l)}},[e,a,r])}function gr(){var e=za();return m.useCallback(function(){Ft(e.current)},[e])}function ON(){var e=Y1();return m.useCallback(function(){e.current&&$3(e.current)},[e])}function V3(){var e=G1();return m.useCallback(function(){e.current&&$3(e.current)},[e])}function BN(){var e=B1();return function a(r){if(typeof r=="function")return a(r(e.current));e.current=r}}function X3(){var e=Q1(),a=za(),r=gr();return function(){a.current&&(a.current.value=""),e(""),r()}}function _N(){var e=za(),a=Q1();return function(o){e.current?(e.current.value=""+e.current.value+o,a(a1(e.current.value))):a(a1(o))}}function UN(){var e=za(),a=B1(),r=BN(),o=Q1(),l=Wl(),u=l[0],h=HN(a.current,u);return{onChange:b,searchTerm:u,SearchInputRef:e,statusSearchResults:h};function b(p){var y=a.current,v=p.toLowerCase();if(y!=null&&y[v]||v.length<=1)return o(v);var x=PN(v,y);if(!x)return o(v);r(function(j){var C;return Object.assign(j,(C={},C[v]=YN(x,v),C))}),o(v)}}function Q1(){var e=Wl(),a=e[1],r=uf();return function(l){requestAnimationFrame(function(){a(l&&(l==null?void 0:l.toLowerCase())).then(function(){Z3(r.current,0)})})}}function YN(e,a){var r={};for(var o in e){var l=e[o];GN(l,a)&&(r[o]=l)}return r}function GN(e,a){return sf(e).some(function(r){return r.includes(a)})}function QN(){var e=B1(),a=e.current,r=Wl(),o=r[0];return function(l){return $N(l,a,o)}}function $N(e,a,r){var o;return!a||!r?!1:!((o=a[r])!=null&&o[e])}function PN(e,a){if(!a)return null;if(a[e])return a[e];var r=Object.keys(a).sort(function(o,l){return l.length-o.length}).find(function(o){return e.includes(o)});return r?a[r]:null}function a1(e){return!e||typeof e!="string"?"":e.trim().toLowerCase()}function HN(e,a){var r;if(!(e!=null&&e[a]))return"";var o=((r=Object.entries(e==null?void 0:e[a]))==null?void 0:r.length)||0;return hN(o)}function W3(){var e=H3(),a=ji(),r=a[1];return function(l){var u=Z1(l),h=u[0];h&&(e(l),r(h))}}function $1(){var e=B3();return e===di.SEARCH}function K3(){var e=B3();return e===di.PREVIEW}var nt;(function(e){e.ArrowDown="ArrowDown",e.ArrowUp="ArrowUp",e.ArrowLeft="ArrowLeft",e.ArrowRight="ArrowRight",e.Escape="Escape",e.Enter="Enter",e.Space=" "})(nt||(nt={}));function ZN(){JN(),FN(),qN(),VN(),XN()}function JN(){var e=uf(),a=X3(),r=SN(),o=za(),l=gr(),u=J3(),h=zN(),b=mr(),p=m.useMemo(function(){return function(v){var x=v.key;switch(h(),x){case nt.Escape:if(v.preventDefault(),u()){b();return}a(),r(0),l();break}}},[r,a,b,l,u,h]);m.useEffect(function(){var y=e.current;if(y)return y.addEventListener("keydown",p),function(){y.removeEventListener("keydown",p)}},[e,o,r,p])}function FN(){var e=ON(),a=uf(),r=hn(),o=za(),l=cf(),u=l[1],h=ew(),b=$1(),p=m.useMemo(function(){return function(v){var x=v.key;switch(x){case nt.ArrowRight:if(!b)return;v.preventDefault(),u(!0),e();break;case nt.ArrowDown:v.preventDefault(),h();break;case nt.Enter:v.preventDefault(),CN(r.current);break}}},[e,h,u,r,b]);m.useEffect(function(){var y=o.current;if(y)return y.addEventListener("keydown",p),function(){y.removeEventListener("keydown",p)}},[a,o,p])}function qN(){var e=Y1(),a=gr(),r=za(),o=ew(),l=cf(),u=l[0],h=l[1],b=K3(),p=$1(),y=P1(),v=m.useMemo(function(){return function(j){var C=j.key;if(p)switch(C){case nt.ArrowLeft:if(j.preventDefault(),!u)return a();L4(a);break;case nt.ArrowRight:if(j.preventDefault(),!u)return a();S4();break;case nt.ArrowDown:j.preventDefault(),u&&h(!1),o();break;default:y(j);break}if(b)switch(C){case nt.ArrowUp:if(j.preventDefault(),!u)return a();L4(a);break;case nt.ArrowDown:if(j.preventDefault(),!u)return a();S4();break;default:y(j);break}}},[u,a,h,o,y,b,p]);m.useEffect(function(){var x=e.current;if(x)return x.addEventListener("keydown",v),function(){x.removeEventListener("keydown",v)}},[e,r,u,v])}function VN(){var e=gr(),a=G1(),r=hn(),o=P1(),l=m.useMemo(function(){return function(h){var b=h.key;switch(b){case nt.ArrowUp:h.preventDefault(),e();break;case nt.ArrowRight:h.preventDefault(),Q3(Xo());break;case nt.ArrowLeft:h.preventDefault(),G3(Xo());break;case nt.ArrowDown:h.preventDefault(),nc(r.current);break;default:o(h);break}}},[r,e,o]);m.useEffect(function(){var u=a.current;if(u)return u.addEventListener("keydown",l),function(){u.removeEventListener("keydown",l)}},[a,r,l])}function XN(){var e=hn(),a=WN(),r=W3(),o=J3(),l=mr(),u=P1(),h=m.useMemo(function(){return function(p){var y=p.key,v=vn(Xo());switch(y){case nt.ArrowRight:p.preventDefault(),EN(v);break;case nt.ArrowLeft:p.preventDefault(),TN(v);break;case nt.ArrowDown:if(p.preventDefault(),o()){l();break}IN(v);break;case nt.ArrowUp:if(p.preventDefault(),o()){l();break}NN(v,a);break;case nt.Space:p.preventDefault(),r(p.target);break;default:u(p);break}}},[a,u,r,o,l]);m.useEffect(function(){var b=e.current;if(b)return b.addEventListener("keydown",h),function(){b.removeEventListener("keydown",h)}},[e,h])}function ew(){var e=V3(),a=Kl(),r=hn();return m.useCallback(function(){return a?nc(r.current):e()},[r,e,a])}function WN(){var e=gr(),a=V3(),r=Kl();return m.useCallback(function(){return r?e():a()},[e,r,a])}function L4(e){var a=Xo();a&&(uI(a)||e(),Q3(a))}function S4(){var e=Xo();e&&G3(e)}function P1(){var e=_N(),a=gr(),r=O3(),o=mr();return function(u){var h=u.key;KN(u)||r||h.match(/(^[a-zA-Z0-9]$){1}/)&&(u.preventDefault(),o(),a(),e(h))}}function KN(e){var a=e.metaKey,r=e.ctrlKey,o=e.altKey;return a||r||o}function eI(e,a,r){if(a&&r!==Zt.NATIVE){var o=Et(a);C4.has(o)||(lf(a).forEach(function(l){var u=e(l,r);tI(u)}),C4.add(o))}}var C4=new Set;function tI(e){var a=new Image;a.src=e}function nI(){var e=hn(),a=dr(),r=hr();m.useEffect(function(){if(a===Zt.NATIVE)return;var o=e.current;return o==null||o.addEventListener("focusin",l),function(){o==null||o.removeEventListener("focusin",l)};function l(u){var h=vn(u.target);if(h){var b=Z1(h),p=b[0];p&&Mi(p)&&eI(r,p,a)}}},[e,a,r])}var aI=["width","height"],tw=40;function rI(e){var a=e.children;return m.createElement(bN,null,m.createElement(iI,null,a))}function iI(e){var a,r=e.children,o=Xl(),l=o[0],u=rN(),h=Kl(),b=uf(),p=fN(),y=sN();ZN(),nI();var v=y||{},x=v.width,j=v.height,C=v3(v,aI);return m.createElement("aside",{className:Me(Eo.main,Eo.baseVariables,u===Fo.DARK&&Eo.darkTheme,u===Fo.AUTO&&Eo.autoThemeDark,(a={},a[be.searchActive]=h,a),l&&Eo.reactionsMenu,p),ref:b,style:He({},C,!l&&{height:j,width:x})},r)}var k4={"--epr-emoji-variation-picker-bg-color":"var(--epr-dark-emoji-variation-picker-bg-color)","--epr-hover-bg-color-reduced-opacity":"var(--epr-dark-hover-bg-color-reduced-opacity)","--epr-highlight-color":"var(--epr-dark-highlight-color)","--epr-text-color":"var(--epr-dark-text-color)","--epr-hover-bg-color":"var(--epr-dark-hover-bg-color)","--epr-focus-bg-color":"var(--epr-dark-focus-bg-color)","--epr-search-input-bg-color":"var(--epr-dark-search-input-bg-color)","--epr-category-label-bg-color":"var(--epr-dark-category-label-bg-color)","--epr-picker-border-color":"var(--epr-dark-picker-border-color)","--epr-bg-color":"var(--epr-dark-bg-color)","--epr-reactions-bg-color":"var(--epr-dark-reactions-bg-color)","--epr-search-input-bg-color-active":"var(--epr-dark-search-input-bg-color-active)","--epr-emoji-variation-indicator-color":"var(--epr-dark-emoji-variation-indicator-color)","--epr-category-icon-active-color":"var(--epr-dark-category-icon-active-color)","--epr-skin-tone-picker-menu-color":"var(--epr-dark-skin-tone-picker-menu-color)","--epr-skin-tone-outer-border-color":"var(--epr-dark-skin-tone-outer-border-color)","--epr-skin-tone-inner-border-color":"var(--epr-dark-skin-tone-inner-border-color)"},Eo=$e.create({main:{".":["epr-main",be.emojiPicker],position:"relative",display:"flex",flexDirection:"column",borderWidth:"1px",borderStyle:"solid",borderRadius:"var(--epr-picker-border-radius)",borderColor:"var(--epr-picker-border-color)",backgroundColor:"var(--epr-bg-color)",overflow:"hidden",transition:"all 0.3s ease-in-out, background-color 0.1s ease-in-out","*":{boxSizing:"border-box",fontFamily:"sans-serif"}},baseVariables:{"--":{"--epr-highlight-color":"#007aeb","--epr-hover-bg-color":"#e5f0fa","--epr-hover-bg-color-reduced-opacity":"#e5f0fa80","--epr-focus-bg-color":"#e0f0ff","--epr-text-color":"#858585","--epr-search-input-bg-color":"#f6f6f6","--epr-picker-border-color":"#e7e7e7","--epr-bg-color":"#fff","--epr-reactions-bg-color":"#ffffff90","--epr-category-icon-active-color":"#6aa8de","--epr-skin-tone-picker-menu-color":"#ffffff95","--epr-skin-tone-outer-border-color":"#555555","--epr-skin-tone-inner-border-color":"var(--epr-bg-color)","--epr-horizontal-padding":"10px","--epr-picker-border-radius":"8px","--epr-search-border-color":"var(--epr-highlight-color)","--epr-header-padding":"15px var(--epr-horizontal-padding)","--epr-active-skin-tone-indicator-border-color":"var(--epr-highlight-color)","--epr-active-skin-hover-color":"var(--epr-hover-bg-color)","--epr-search-input-bg-color-active":"var(--epr-search-input-bg-color)","--epr-search-input-padding":"0 30px","--epr-search-input-border-radius":"8px","--epr-search-input-height":"40px","--epr-search-input-text-color":"var(--epr-text-color)","--epr-search-input-placeholder-color":"var(--epr-text-color)","--epr-search-bar-inner-padding":"var(--epr-horizontal-padding)","--epr-category-navigation-button-size":"30px","--epr-emoji-variation-picker-height":"45px","--epr-emoji-variation-picker-bg-color":"var(--epr-bg-color)","--epr-preview-height":"70px","--epr-preview-text-size":"14px","--epr-preview-text-padding":"0 var(--epr-horizontal-padding)","--epr-preview-border-color":"var(--epr-picker-border-color)","--epr-preview-text-color":"var(--epr-text-color)","--epr-category-padding":"0 var(--epr-horizontal-padding)","--epr-category-label-bg-color":"#ffffffe6","--epr-category-label-text-color":"var(--epr-text-color)","--epr-category-label-padding":"0 var(--epr-horizontal-padding)","--epr-category-label-height":tw+"px","--epr-emoji-size":"30px","--epr-emoji-padding":"5px","--epr-emoji-fullsize":"calc(var(--epr-emoji-size) + var(--epr-emoji-padding) * 2)","--epr-emoji-hover-color":"var(--epr-hover-bg-color)","--epr-emoji-variation-indicator-color":"var(--epr-picker-border-color)","--epr-emoji-variation-indicator-color-hover":"var(--epr-text-color)","--epr-header-overlay-z-index":"3","--epr-emoji-variations-indictator-z-index":"1","--epr-category-label-z-index":"2","--epr-skin-variation-picker-z-index":"5","--epr-preview-z-index":"6","--epr-dark":"#000","--epr-dark-emoji-variation-picker-bg-color":"var(--epr-dark)","--epr-dark-highlight-color":"#c0c0c0","--epr-dark-text-color":"var(--epr-highlight-color)","--epr-dark-hover-bg-color":"#363636f6","--epr-dark-hover-bg-color-reduced-opacity":"#36363680","--epr-dark-focus-bg-color":"#474747","--epr-dark-search-input-bg-color":"#333333","--epr-dark-category-label-bg-color":"#222222e6","--epr-dark-picker-border-color":"#151617","--epr-dark-bg-color":"#222222","--epr-dark-reactions-bg-color":"#22222290","--epr-dark-search-input-bg-color-active":"var(--epr-dark)","--epr-dark-emoji-variation-indicator-color":"#444","--epr-dark-category-icon-active-color":"#3271b7","--epr-dark-skin-tone-picker-menu-color":"#22222295","--epr-dark-skin-tone-outer-border-color":"var(--epr-dark-picker-border-color)","--epr-dark-skin-tone-inner-border-color":"#FFFFFF"}},autoThemeDark:{".":be.autoTheme,"@media (prefers-color-scheme: dark)":{"--":k4}},darkTheme:{".":be.darkTheme,"--":k4},reactionsMenu:{".":"epr-reactions",height:"50px",display:"inline-flex",backgroundColor:"var(--epr-reactions-bg-color)",backdropFilter:"blur(8px)","--":{"--epr-picker-border-radius":"50px"}}});function nw(e,a){if(!e||!a)return 0;var r=e.getBoundingClientRect().width,o=a.getBoundingClientRect().width;return Math.floor(r/o)}function aw(e,a){if(!e||!a)return 0;var r=a.getBoundingClientRect().width,o=a.getBoundingClientRect().left,l=e.getBoundingClientRect().left;return Math.floor((o-l)/r)}function rw(e,a){if(!e||!a)return 0;var r=a.getBoundingClientRect().height,o=a.getBoundingClientRect().top,l=e.getBoundingClientRect().top;return Math.round((o-l)/r)}function oI(e,a){if(!e||!a)return!1;var r=a.getBoundingClientRect().height,o=a.getBoundingClientRect().top,l=e.getBoundingClientRect().top,u=e.getBoundingClientRect().height;return Math.round(o-l+r)<u}function H1(e,a,r){if(a===-1){var o=Math.floor((e.length-1)/r),l=o*r,u=e.length-1;return e.slice(l,u+1)}return e.slice(a*r,(a+1)*r)}function fI(e,a,r){var o=a+1;return o*r>e.length?[]:H1(e,o,r)}function iw(e,a,r,o){var l=H1(e,a,r);return l[o]||l[l.length-1]||null}function sI(e,a,r,o){var l=fI(e,a,r);return l[o]||l[l.length-1]||null}function lI(e,a,r,o){var l=H1(e,a-1,r);return l[o]||l[l.length-1]||null}function cI(e,a,r){if(!e||!a.length)return null;var o=e.getBoundingClientRect().top,l=e.getBoundingClientRect().bottom,u=o+dI(e),h=a.find(function(b){var p=b.getBoundingClientRect().top,y=b.getBoundingClientRect().bottom,v=b.clientHeight*r,x=p+v,j=y-v;return x<u?!1:x>=o&&x<=l||j>=o&&j<=l});return h||null}function uI(e){return!!e.nextElementSibling}function dI(e){for(var a=Array.from(e.querySelectorAll(jt(be.label))),r=0,o=a;r<o.length;r++){var l=o[r],u=l.getBoundingClientRect().height;if(u>0)return u}return tw}var Sl="button"+jt(be.emoji),hI=[Sl,jt(be.visible),":not("+jt(be.hidden)+")"].join("");function vn(e){var a;return(a=e==null?void 0:e.closest(Sl))!=null?a:null}function Z1(e){var a=cw(e),r=F1(e);if(!a)return[];var o=hi(r??a);return o?[o,r]:[]}function mI(e){var a;return!!(e!=null&&e.matches(Sl)||!(e==null||(a=e.parentElement)==null)&&a.matches(Sl))}function E4(e){var a;return(a=e==null?void 0:e.clientHeight)!=null?a:0}function ow(e){if(!e)return 0;var a=vn(e),r=Ra(a),o=J1(r);return T4(a)+T4(r)+o}function J1(e){var a,r;if(!e)return 0;var o=e.querySelector(jt(be.categoryContent));return((a=e==null?void 0:e.clientHeight)!=null?a:0)-((r=o==null?void 0:o.clientHeight)!=null?r:0)}function gI(e){return e?sw(e)<J1(Ra(e)):!1}function fw(e){return e?e.matches(jt(be.scrollBody))?e:e.querySelector(jt(be.scrollBody)):null}function sw(e){var a,r;return e?ow(e)-((a=(r=lw(e))==null?void 0:r.scrollTop)!=null?a:0):0}function lw(e){var a;return e&&(a=e.closest(jt(be.scrollBody)))!=null?a:null}function pI(e){var a=vn(e),r=Ra(a);return N4(a)+N4(r)}function T4(e){var a;return(a=e==null?void 0:e.offsetTop)!=null?a:0}function N4(e){var a;return(a=e==null?void 0:e.offsetLeft)!=null?a:0}function F1(e){var a;return(a=yI(vn(e),"unified"))!=null?a:null}function cw(e){var a=F1(e);return a?O1(a):null}function uw(e){return e?{unified:F1(e),originalUnified:cw(e)}:{unified:null,originalUnified:null}}function yI(e,a){var r;return(r=bI(e)[a])!=null?r:null}function bI(e){var a;return(a=e==null?void 0:e.dataset)!=null?a:{}}function q1(e){return e.classList.contains(be.visible)}function dw(e){return e?e.classList.contains(be.hidden):!0}function mi(e){return e?Array.from(e.querySelectorAll(hI)):[]}function hw(e){if(!e)return null;var a=mi(e),r=a.slice(-1),o=r[0];return o?q1(o)?o:V1(o):null}function mw(e){var a=e.nextElementSibling;return a?q1(a)?a:mw(a):X1(rc(e))}function V1(e){var a=e.previousElementSibling;return a?q1(a)?a:V1(a):hw(ac(e))}function X1(e){if(!e)return null;var a=mi(e);return cI(e,a,.1)}function ac(e){var a=Ra(e);if(!a)return null;var r=a.previousElementSibling;return r?dw(r)?ac(r):r:null}function rc(e){var a=Ra(e);if(!a)return null;var r=a.nextElementSibling;return r?dw(r)?rc(r):r:null}function Ra(e){return e?e.closest(jt(be.category)):null}function gw(e){return e?e.closest(jt(be.categoryContent)):null}function pw(e){return e.split("-").map(function(a){return String.fromCodePoint(parseInt(a,16))}).join("")}var yw="epr_suggested";function bw(e){try{var a,r,o;if(!((a=window)!=null&&a.localStorage))return[];var l=JSON.parse((r=(o=window)==null?void 0:o.localStorage.getItem(yw))!=null?r:"[]");return e===Jo.FREQUENT?l.sort(function(u,h){return h.count-u.count}):l}catch{return[]}}function wI(e,a){var r=bw(),o=Et(e,a),l=Et(e),u=r.find(function(p){var y=p.unified;return y===o}),h;u?h=[u].concat(r.filter(function(p){return p!==u})):(u={unified:o,original:l,count:0},h=[u].concat(r)),u.count++,h.length=Math.min(h.length,14);try{var b;(b=window)==null||b.localStorage.setItem(yw,JSON.stringify(h))}catch{}}function vI(e){return e.category===ye.CUSTOM}function ww(e){return e.imgUrl!==void 0}function vw(e,a){var r=m.useRef(),o=W3(),l=wN(),u=ji(),h=u[1],b=mr(),p=U1(),y=p[0],v=nN(a),x=Y3(),j=x[1],C=hr(),S=dr(),L=m.useCallback(function(O){if(!l.current){b();var D=I4(O),N=D[0],z=D[1];if(!(!N||!z)){var Q=GT(z)||y;j(),wI(N,Q),v(xI(N,Q,S,C),O)}}},[y,b,l,v,j,C,S]),T=m.useCallback(function(O){var D;r.current&&clearTimeout(r.current);var N=I4(O),z=N[0];!z||!Mi(z)||(r.current=(D=window)==null?void 0:D.setTimeout(function(){l.current=!0,r.current=void 0,b(),o(O.target),h(z)},500))},[l,b,o,h]),E=m.useCallback(function(){r.current?(clearTimeout(r.current),r.current=void 0):l.current&&requestAnimationFrame(function(){l.current=!1})},[l]);m.useEffect(function(){if(e.current){var k=e.current;return k.addEventListener("click",L,{passive:!0}),k.addEventListener("mousedown",T,{passive:!0}),k.addEventListener("mouseup",E,{passive:!0}),function(){k==null||k.removeEventListener("click",L),k==null||k.removeEventListener("mousedown",T),k==null||k.removeEventListener("mouseup",E)}}},[e,L,T,E])}function I4(e){var a=e==null?void 0:e.target;return mI(a)?Z1(a):[]}function xI(e,a,r,o){var l=sf(e);if(ww(e)){var u=Et(e);return{activeSkinTone:a,emoji:u,getImageUrl:function(){return e.imgUrl},imageUrl:e.imgUrl,isCustom:!0,names:l,unified:u,unifiedWithoutSkinTone:u}}var h=Et(e,a);return{activeSkinTone:a,emoji:pw(h),getImageUrl:function(p){return p===void 0&&(p=r??Zt.APPLE),o(h,p)},imageUrl:o(h,r??Zt.APPLE),isCustom:!1,names:l,unified:h,unifiedWithoutSkinTone:Et(e)}}function df(e){return m.createElement("button",Object.assign({type:"button"},e,{className:Me(MI.button,e.className)}),e.children)}var MI=$e.create({button:{".":"epr-btn",cursor:"pointer",border:"0",background:"none",outline:"none"}});function jI(e){var a,r=e.emojiNames,o=e.unified,l=e.hidden,u=e.hiddenOnSearch,h=e.showVariations,b=h===void 0?!0:h,p=e.hasVariations,y=e.children,v=e.className,x=e.noBackground,j=x===void 0?!1:x;return m.createElement(df,{className:Me(r0.emoji,l&&z1.hidden,u&&ur.hiddenOnSearch,(a={},a[be.visible]=!l&&!u,a),!!(p&&b)&&r0.hasVariations,j&&r0.noBackground,v),"data-unified":o,"aria-label":LI(r),"data-full-name":r},y)}function LI(e){var a;return e[0].match("flag-")&&(a=e[1])!=null?a:e[0]}var r0=$e.create({emoji:{".":be.emoji,position:"relative",width:"var(--epr-emoji-fullsize)",height:"var(--epr-emoji-fullsize)",boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:"center",maxWidth:"var(--epr-emoji-fullsize)",maxHeight:"var(--epr-emoji-fullsize)",borderRadius:"8px",overflow:"hidden",transition:"background-color 0.2s",":hover":{backgroundColor:"var(--epr-emoji-hover-color)"},":focus":{backgroundColor:"var(--epr-focus-bg-color)"}},noBackground:{background:"none",":hover":{backgroundColor:"transparent",background:"none"},":focus":{backgroundColor:"transparent",background:"none"}},hasVariations:{".":be.emojiHasVariations,":after":{content:"",display:"block",width:"0",height:"0",right:"0px",bottom:"1px",position:"absolute",borderLeft:"4px solid transparent",borderRight:"4px solid transparent",transform:"rotate(135deg)",borderBottom:"4px solid var(--epr-emoji-variation-indicator-color)",zIndex:"var(--epr-emoji-variations-indictator-z-index)"},":hover:after":{borderBottom:"4px solid var(--epr-emoji-variation-indicator-color-hover)"}}}),Cl=$e.create({external:{".":be.external,fontSize:"0"},common:{alignSelf:"center",justifySelf:"center",display:"block"}});function D4(e){var a=e.emojiName,r=e.style,o=e.lazyLoad,l=o===void 0?!1:o,u=e.imgUrl,h=e.onError,b=e.className;return m.createElement("img",{src:u,alt:a,className:Me(SI.emojiImag,Cl.external,Cl.common,b),loading:l?"lazy":"eager",onError:h,style:r})}var SI=$e.create({emojiImag:{".":"epr-emoji-img",maxWidth:"var(--epr-emoji-fullsize)",maxHeight:"var(--epr-emoji-fullsize)",minWidth:"var(--epr-emoji-fullsize)",minHeight:"var(--epr-emoji-fullsize)",padding:"var(--epr-emoji-padding)"}});function CI(e){var a=e.unified,r=e.style,o=e.className;return m.createElement("span",{className:Me(kI.nativeEmoji,Cl.common,Cl.external,o),"data-unified":a,style:r},pw(a))}var kI=$e.create({nativeEmoji:{".":"epr-emoji-native",fontFamily:'"Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "EmojiOne Color", "Android Emoji"!important',position:"relative",lineHeight:"100%",fontSize:"var(--epr-emoji-size)",textAlign:"center",alignSelf:"center",justifySelf:"center",letterSpacing:"0",padding:"var(--epr-emoji-padding)"}});function r1(e){var a=e.emoji,r=e.unified,o=e.emojiStyle,l=e.size,u=e.lazyLoad,h=e.getEmojiUrl,b=h===void 0?C3:h,p=e.className,y=U3(),v=y[1],x={};l&&(x.width=x.height=x.fontSize=l+"px");var j=a||hi(r);if(!j)return null;if(ww(j))return m.createElement(D4,{style:x,emojiName:r,emojiStyle:Zt.NATIVE,lazyLoad:u,imgUrl:j.imgUrl,onError:C,className:p});return m.createElement(m.Fragment,null,o===Zt.NATIVE?m.createElement(CI,{unified:r,style:x,className:p}):m.createElement(D4,{style:x,emojiName:n1(j),emojiStyle:o,lazyLoad:u,imgUrl:b(r,o),onError:C,className:p}));function C(){v(function(S){return new Set(S).add(r)})}}function ic(e){var a=e.emoji,r=e.unified,o=e.hidden,l=e.hiddenOnSearch,u=e.emojiStyle,h=e.showVariations,b=h===void 0?!0:h,p=e.size,y=e.lazyLoad,v=e.getEmojiUrl,x=e.className,j=e.noBackground,C=j===void 0?!1:j,S=Mi(a);return m.createElement(jI,{hasVariations:S,showVariations:b,hidden:o,hiddenOnSearch:l,emojiNames:sf(a),unified:r,noBackground:C},m.createElement(r1,{unified:r,emoji:a,size:p,emojiStyle:u,lazyLoad:y,getEmojiUrl:v,className:x}))}var EI="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI4LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjgwcHgiIHZpZXdCb3g9IjAgMCAyMCA4MCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjAgODAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsPSIjODY4Njg2IiBkPSJNNS43LDEwLjRjMCwwLjEsMC4xLDAuMywwLjIsMC40QzYsMTAuOSw2LjEsMTEsNi4zLDExaDMuNHYzLjRjMCwwLjEsMC4xLDAuMywwLjIsMC40CgljMC4xLDAuMSwwLjIsMC4yLDAuNCwwLjJjMC4zLDAsMC41LTAuMiwwLjUtMC41di0zLjRoMy40YzAuMywwLDAuNS0wLjIsMC41LTAuNXMtMC4yLTAuNS0wLjUtMC41aC0zLjRWNi43YzAtMC4zLTAuMi0wLjUtMC41LTAuNQoJQzkuOCw2LDkuNiw2LjIsOS42LDYuNXYzLjRINi4yQzUuOSw5LjksNS43LDEwLjEsNS43LDEwLjRMNS43LDEwLjR6Ii8+CjxwYXRoIGZpbGw9IiMzMzcxQjciIGQ9Ik01LjcsMzAuNGMwLDAuMSwwLjEsMC4zLDAuMiwwLjRTNi4xLDMxLDYuMywzMWgzLjR2My40YzAsMC4xLDAuMSwwLjMsMC4yLDAuNGMwLjEsMC4xLDAuMiwwLjIsMC40LDAuMgoJYzAuMywwLDAuNS0wLjIsMC41LTAuNXYtMy40aDMuNGMwLjMsMCwwLjUtMC4yLDAuNS0wLjVzLTAuMi0wLjUtMC41LTAuNWgtMy40di0zLjRjMC0wLjMtMC4yLTAuNS0wLjUtMC41cy0wLjUsMC4yLTAuNSwwLjV2My40SDYuMgoJQzUuOSwyOS45LDUuNywzMC4xLDUuNywzMC40TDUuNywzMC40eiIvPgo8cGF0aCBmaWxsPSIjQzBDMEJGIiBkPSJNNS43LDUwLjRjMCwwLjEsMC4xLDAuMywwLjIsMC40QzYsNTAuOSw2LjEsNTEsNi4zLDUxaDMuNHYzLjRjMCwwLjEsMC4xLDAuMywwLjIsMC40CgljMC4xLDAuMSwwLjIsMC4yLDAuNCwwLjJjMC4zLDAsMC41LTAuMiwwLjUtMC41di0zLjRoMy40YzAuMywwLDAuNS0wLjIsMC41LTAuNXMtMC4yLTAuNS0wLjUtMC41aC0zLjR2LTMuNGMwLTAuMy0wLjItMC41LTAuNS0wLjUKCXMtMC41LDAuMi0wLjUsMC41djMuNEg2LjJDNS45LDQ5LjksNS43LDUwLjEsNS43LDUwLjRMNS43LDUwLjR6Ii8+CjxwYXRoIGZpbGw9IiM2QUE5REQiIGQ9Ik01LjcsNzAuNGMwLDAuMSwwLjEsMC4zLDAuMiwwLjRTNi4xLDcxLDYuMyw3MWgzLjR2My40YzAsMC4xLDAuMSwwLjMsMC4yLDAuNGMwLjEsMC4xLDAuMiwwLjIsMC40LDAuMgoJYzAuMywwLDAuNS0wLjIsMC41LTAuNXYtMy40aDMuNGMwLjMsMCwwLjUtMC4yLDAuNS0wLjVzLTAuMi0wLjUtMC41LTAuNWgtMy40di0zLjRjMC0wLjMtMC4yLTAuNS0wLjUtMC41cy0wLjUsMC4yLTAuNSwwLjV2My40SDYuNAoJQzUuOSw2OS45LDUuNyw3MC4xLDUuNyw3MC40TDUuNyw3MC40eiIvPgo8L3N2Zz4=";function TI(){var e=Xl(),a=e[1];return m.createElement(df,{"aria-label":"Show all Emojis",title:"Show all Emojis",tabIndex:0,className:Me(NI.plusSign),onClick:function(){return a(!1)}})}var NI=$e.create(He({plusSign:{fontSize:"20px",padding:"17px",color:"var(--epr-text-color)",borderRadius:"50%",textAlign:"center",lineHeight:"100%",width:"20px",height:"20px",display:"flex",justifyContent:"center",alignItems:"center",transition:"background-color 0.2s ease-in-out",":after":{content:"",minWidth:"20px",minHeight:"20px",backgroundImage:"url("+EI+")",backgroundColor:"transparent",backgroundRepeat:"no-repeat",backgroundSize:"20px",backgroundPositionY:"0"},":hover":{color:"var(--epr-highlight-color)",backgroundColor:"var(--epr-hover-bg-color-reduced-opacity)",":after":{backgroundPositionY:"-20px"}},":focus":{color:"var(--epr-highlight-color)",backgroundColor:"var(--epr-hover-bg-color-reduced-opacity)",":after":{backgroundPositionY:"-40px"}}}},Ta("plusSign",{":after":{backgroundPositionY:"-40px"},":hover:after":{backgroundPositionY:"-60px"}})));function II(){var e=Xl(),a=e[0],r=MN(),o=dN();vw(r,Vo.REACTIONS);var l=dr(),u=D3(),h=hr();return a?m.createElement("ul",{className:Me(A4.list,!a&&z1.hidden),ref:r},o.map(function(b){return m.createElement("li",{key:b},m.createElement(ic,{emoji:hi(b),emojiStyle:l,unified:b,showVariations:!1,className:Me(A4.emojiButton),noBackground:!0,getEmojiUrl:h}))}),u?m.createElement("li",null,m.createElement(TI,null)):null):null}var A4=$e.create({list:{listStyle:"none",margin:"0",padding:"0 5px",display:"flex",justifyContent:"space-between",alignItems:"center",height:"100%"},emojiButton:{":hover":{transform:"scale(1.2)"},":focus":{transform:"scale(1.2)"},":active":{transform:"scale(1.1)"},transition:"transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.5)"}});function DI(e){var a=mr();m.useEffect(function(){var r=e.current;if(!r)return;r.addEventListener("scroll",o,{passive:!0});function o(){a()}return function(){r==null||r.removeEventListener("scroll",o)}},[e,a])}function AI(){var e=U3(),a=e[0],r=QN();return function(o){var l=Et(o),u=a.has(l),h=r(l);return{failedToLoad:u,filteredOut:h,hidden:u||h}}}function xw(e){var a=e.categoryConfig,r=e.children,o=e.hidden,l=e.hiddenOnSearch,u=R1(a),h=L3(a);return m.createElement("li",{className:Me(i0.category,o&&z1.hidden,l&&ur.hiddenOnSearch),"data-name":u,"aria-label":h},m.createElement("h2",{className:Me(i0.label)},h),m.createElement("div",{className:Me(i0.categoryContent)},r))}var i0=$e.create({category:{".":be.category,":not(:has(.epr-visible))":{display:"none"}},categoryContent:{".":be.categoryContent,display:"grid",gridGap:"0",gridTemplateColumns:"repeat(auto-fill, var(--epr-emoji-fullsize))",justifyContent:"space-between",margin:"var(--epr-category-padding)",position:"relative"},label:{".":be.label,alignItems:"center",backdropFilter:"blur(3px)",backgroundColor:"var(--epr-category-label-bg-color)",color:"var(--epr-category-label-text-color)",display:"flex",fontSize:"16px",fontWeight:"bold",height:"var(--epr-category-label-height)",margin:"0",padding:"var(--epr-category-label-padding)",position:"sticky",textTransform:"capitalize",top:"0",width:"100%",zIndex:"var(--epr-category-label-z-index)"}}),o0=!1;function zI(){var e=m.useState(o0),a=e[0],r=e[1];return m.useEffect(function(){r(!0),o0=!0},[]),a||o0}function RI(e){var a=e.categoryConfig,r=Y3(),o=r[0],l=zI(),u=iN(),h=hr(),b=m.useMemo(function(){var y;return(y=bw(u))!=null?y:[]},[o,u]),p=dr();return l?m.createElement(xw,{categoryConfig:a,hiddenOnSearch:!0,hidden:b.length===0},b.map(function(y){var v=hi(y.original);return v?m.createElement(ic,{showVariations:!1,unified:y.unified,emojiStyle:p,emoji:v,key:y.unified,getEmojiUrl:h}):null})):null}function OI(){var e=z3(),a=m.useRef(0);return m.createElement("ul",{className:Me(_I.emojiList)},e.map(function(r){var o=R1(r);return o===ye.SUGGESTED?m.createElement(RI,{key:o,categoryConfig:r}):m.createElement(m.Suspense,{key:o},m.createElement(BI,{category:o,categoryConfig:r,renderdCategoriesCountRef:a}))}))}function BI(e){var a=e.category,r=e.categoryConfig,o=e.renderdCategoriesCountRef,l=AI(),u=oN(),h=dr(),b=vN(),p=U1(),y=p[0],v=gN(),x=hr(),j=!A3(),C=!b&&o.current>0?[]:BT(a);C.length>0&&o.current++;var S=0,L=C.map(function(T){var E=Et(T,y),k=l(T),O=k.failedToLoad,D=k.filteredOut,N=k.hidden,z=v(T);return(N||z)&&S++,z?null:m.createElement(ic,{showVariations:j,key:E,emoji:T,unified:E,hidden:O,hiddenOnSearch:D,emojiStyle:h,lazyLoad:u,getEmojiUrl:x})});return m.createElement(xw,{categoryConfig:r,hidden:S===L.length},L)}var _I=$e.create({emojiList:{".":be.emojiList,listStyle:"none",margin:"0",padding:"0"}}),UI="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI1MHB4IgoJIGhlaWdodD0iMTVweCIgdmlld0JveD0iMCAwIDUwIDE1IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MCAxNSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnIGlkPSJMYXllcl8xIj4KPC9nPgo8ZyBpZD0iTGF5ZXJfMiI+Cgk8cGF0aCBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiNFOEU3RTciIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTEuODYtMC40M2w5LjgzLDExLjUzYzAuNTksMC42OSwxLjU2LDAuNjksMi4xNCwwbDkuODMtMTEuNTMiLz4KCTxwYXRoIGZpbGw9IiMwMTAyMDIiIHN0cm9rZT0iIzE1MTYxNyIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMjYuODYtMC40M2w5LjgzLDExLjUzYzAuNTksMC42OSwxLjU2LDAuNjksMi4xNCwwbDkuODMtMTEuNTMiLz4KPC9nPgo8L3N2Zz4=",ii;(function(e){e[e.Up=0]="Up",e[e.Down=1]="Down"})(ii||(ii={}));function YI(){var e=ec(),a=jN(),r=ji(),o=r[0],l=dr(),u=QI(a),h=u.getTop,b=u.getMenuDirection,p=H3(),y=GI(a),v=hr(),x=vn(e.current),j=!!(o&&x&&Mi(o)&&x.classList.contains(be.emojiHasVariations));m.useEffect(function(){j&&nc(a.current)},[a,j,e]);var C,S;return!j&&e.current?p(null):(C=h(),S=y()),m.createElement("div",{ref:a,className:Me(Ys.variationPicker,b()===ii.Down&&Ys.pointingUp,j&&Ys.visible),style:{top:C}},j&&o?[Et(o)].concat(lf(o)).slice(0,6).map(function(L){return m.createElement(ic,{key:L,emoji:o,unified:L,emojiStyle:l,showVariations:!1,getEmojiUrl:v})}):null,m.createElement("div",{className:Me(Ys.pointer),style:S}))}function GI(e){var a=ec();return function(){var o={};if(!e.current)return o;if(a.current){var l=vn(a.current),u=pI(l);if(!l)return o;o.left=u+(l==null?void 0:l.clientWidth)/2}return o}}function QI(e){var a=ec(),r=hn(),o=ii.Up;return{getMenuDirection:l,getTop:u};function l(){return o}function u(){o=ii.Up;var h=0;if(!e.current)return 0;var b=E4(e.current);if(a.current){var p,y=r.current,v=vn(a.current),x=E4(v);h=ow(v);var j=(p=y==null?void 0:y.scrollTop)!=null?p:0;j>h-b&&(o=ii.Down,h+=x+b)}return h-b}}var Ys=$e.create(He({variationPicker:{".":be.variationPicker,position:"absolute",right:"15px",left:"15px",padding:"5px",boxShadow:"0px 2px 5px rgba(0, 0, 0, 0.2)",borderRadius:"3px",display:"flex",alignItems:"center",justifyContent:"space-around",opacity:"0",visibility:"hidden",pointerEvents:"none",top:"-100%",border:"1px solid var(--epr-picker-border-color)",height:"var(--epr-emoji-variation-picker-height)",zIndex:"var(--epr-skin-variation-picker-z-index)",background:"var(--epr-emoji-variation-picker-bg-color)",transform:"scale(0.9)",transition:"transform 0.1s ease-out, opacity 0.2s ease-out"},visible:{opacity:"1",visibility:"visible",pointerEvents:"all",transform:"scale(1)"},pointingUp:{".":"pointing-up",transformOrigin:"center 0%",transform:"scale(0.9)"},".pointing-up":{pointer:{top:"0",transform:"rotate(180deg) translateY(100%) translateX(18px)"}},pointer:{".":"epr-emoji-pointer",content:"",position:"absolute",width:"25px",height:"15px",backgroundRepeat:"no-repeat",backgroundPosition:"0 0",backgroundSize:"50px 15px",top:"100%",transform:"translateX(-18px)",backgroundImage:"url("+UI+")"}},Ta("pointer",{backgroundPosition:"-25px 0"})));function $I(){var e=hn();return DI(e),vw(e,Vo.PICKER),RN(),m.createElement("div",{className:Me(PI.body,ur.hiddenOnReactions),ref:e},m.createElement(YI,null),m.createElement(OI,null))}var PI=$e.create({body:{".":be.scrollBody,flex:"1",overflowY:"scroll",overflowX:"hidden",position:"relative"}});function HI(e,a){if(!e||!a)return 0;var r=e.getBoundingClientRect(),o=a.getBoundingClientRect();return o.height-(r.y-o.y)}function ZI(e,a){var r=hn(),o=q3(),l=F3();m.useEffect(function(){if(!e)return;var u=r.current;u==null||u.addEventListener("keydown",p,{passive:!0}),u==null||u.addEventListener("mouseover",y,!0),u==null||u.addEventListener("focus",h,!0),u==null||u.addEventListener("mouseout",b,{passive:!0}),u==null||u.addEventListener("blur",b,!0);function h(v){var x=vn(v.target);if(!x)return b();var j=uw(x),C=j.unified,S=j.originalUnified;if(!C||!S)return b();a({unified:C,originalUnified:S})}function b(v){if(v){var x=v.relatedTarget;if(!vn(x))return a(null)}a(null)}function p(v){v.key==="Escape"&&a(null)}function y(v){if(!o()){var x=vn(v.target);if(x){var j=HI(x,u),C=x.getBoundingClientRect().height;if(j<C)return JI(x,a);Ft(x)}}}return function(){u==null||u.removeEventListener("mouseover",y),u==null||u.removeEventListener("mouseout",b),u==null||u.removeEventListener("focus",h,!0),u==null||u.removeEventListener("blur",b,!0),u==null||u.removeEventListener("keydown",p)}},[r,e,a,o,l])}function JI(e,a){var r,o=uw(e),l=o.unified,u=o.originalUnified;!l||!u||((r=document.activeElement)==null||r.blur==null||r.blur(),a({unified:l,originalUnified:u}))}var Gs,Wo;(function(e){e.ROW="FlexRow",e.COLUMN="FlexColumn"})(Wo||(Wo={}));function Mw(e){var a=e.children,r=e.className,o=e.style,l=o===void 0?{}:o,u=e.direction,h=u===void 0?Wo.ROW:u;return m.createElement("div",{style:He({},l),className:Me(z4.flex,r,z4[h])},a)}var z4=$e.create((Gs={flex:{display:"flex"}},Gs[Wo.ROW]={flexDirection:"row"},Gs[Wo.COLUMN]={flexDirection:"column"},Gs));function FI(e){var a=e.className,r=e.style,o=r===void 0?{}:r;return m.createElement("div",{style:He({flex:1},o),className:Me(a)})}function qI(e){var a=e.children,r=e.className,o=e.style;return m.createElement("div",{style:He({},o,{position:"absolute"}),className:r},a)}function oc(e){var a=e.children,r=e.className,o=e.style;return m.createElement("div",{style:He({},o,{position:"relative"}),className:r},a)}function VI(e){var a=e.isOpen,r=e.onClick,o=e.isActive,l=e.skinToneVariation,u=e.style;return m.createElement(df,{style:u,onClick:r,className:Me("epr-tone-"+l,f0.tone,!a&&f0.closedTone,o&&f0.active),"aria-pressed":o,"aria-label":"Skin tone "+zT[l]})}var f0=$e.create({closedTone:{opacity:"0",zIndex:"0"},active:{".":"epr-active",zIndex:"1",opacity:"1"},tone:{".":"epr-tone",width:"var(--epr-skin-tone-size)",display:"block",cursor:"pointer",borderRadius:"4px",height:"var(--epr-skin-tone-size)",position:"absolute",right:"0",transition:"transform 0.3s ease-in-out, opacity 0.35s ease-in-out",zIndex:"0",border:"1px solid var(--epr-skin-tone-outer-border-color)",boxShadow:"inset 0px 0px 0 1px var(--epr-skin-tone-inner-border-color)",":hover":{boxShadow:"0 0 0 3px var(--epr-active-skin-hover-color), inset 0px 0px 0 1px var(--epr-skin-tone-inner-border-color)"},":focus":{boxShadow:"0 0 0 3px var(--epr-focus-bg-color)"},"&.epr-tone-neutral":{backgroundColor:"#ffd225"},"&.epr-tone-1f3fb":{backgroundColor:"#ffdfbd"},"&.epr-tone-1f3fc":{backgroundColor:"#e9c197"},"&.epr-tone-1f3fd":{backgroundColor:"#c88e62"},"&.epr-tone-1f3fe":{backgroundColor:"#a86637"},"&.epr-tone-1f3ff":{backgroundColor:"#60463a"}}}),_o=28;function XI(){return m.createElement(oc,{style:{height:_o}},m.createElement(qI,{style:{bottom:0,right:0}},m.createElement(jw,{direction:Ko.VERTICAL})))}function jw(e){var a=e.direction,r=a===void 0?Ko.HORIZONTAL:a,o=Y1(),l=A3(),u=cf(),h=u[0],b=u[1],p=U1(),y=p[0],v=p[1],x=aN(),j=mr(),C=gr();if(l)return null;var S=_o*jl.length+"px",L=h?S:_o+"px",T=r===Ko.VERTICAL;return m.createElement(oc,{className:Me(To.skinTones,T&&To.vertical,h&&To.open,T&&h&&To.verticalShadow),style:T?{flexBasis:L,height:L}:{flexBasis:L}},m.createElement("div",{className:Me(To.select),ref:o},jl.map(function(E,k){var O=E===y;return m.createElement(VI,{key:E,skinToneVariation:E,isOpen:h,style:{transform:Me(T?"translateY(-"+k*(h?_o:0)+"px)":"translateX(-"+k*(h?_o:0)+"px)",h&&O&&"scale(1.3)")},isActive:O,onClick:function(){h?(v(E),x(E),C()):b(!0),j()}})})))}var Ko;(function(e){e.VERTICAL="epr-vertical",e.HORIZONTAL="epr-horizontal"})(Ko||(Ko={}));var To=$e.create({skinTones:{".":"epr-skin-tones","--":{"--epr-skin-tone-size":"15px"},display:"flex",alignItems:"center",justifyContent:"flex-end",transition:"all 0.3s ease-in-out",padding:"10px 0"},vertical:{padding:"9px",alignItems:"flex-end",flexDirection:"column",borderRadius:"6px",border:"1px solid var(--epr-bg-color)"},verticalShadow:{boxShadow:"0px 0 7px var(--epr-picker-border-color)"},open:{backdropFilter:"blur(5px)",background:"var(--epr-skin-tone-picker-menu-color)",".epr-active":{border:"1px solid var(--epr-active-skin-tone-indicator-border-color)"}},select:{".":"epr-skin-tone-select",position:"relative",width:"var(--epr-skin-tone-size)",height:"var(--epr-skin-tone-size)"}});function WI(){var e=R3(),a=K3();return e.showPreview?m.createElement(Mw,{className:Me(cl.preview,ur.hiddenOnReactions)},m.createElement(KI,null),m.createElement(FI,null),a?m.createElement(XI,null):null):null}function KI(){var e,a=R3(),r=m.useState(null),o=r[0],l=r[1],u=dr(),h=ji(),b=h[0],p=hr();ZI(a.showPreview,l);var y=hi((e=o==null?void 0:o.unified)!=null?e:o==null?void 0:o.originalUnified),v=y!=null&&o!=null;return m.createElement(x,null);function x(){var j=b??hi(a.defaultEmoji);if(!j)return null;var C=b?n1(b):a.defaultCaption;return m.createElement(m.Fragment,null,m.createElement("div",null,v?m.createElement(r1,{unified:o==null?void 0:o.unified,emoji:y,emojiStyle:u,size:45,getEmojiUrl:p,className:Me(cl.emoji)}):j?m.createElement(r1,{unified:Et(j),emoji:j,emojiStyle:u,size:45,getEmojiUrl:p,className:Me(cl.emoji)}):null),m.createElement("div",{className:Me(cl.label)},v?n1(y):C))}}var cl=$e.create({preview:{alignItems:"center",borderTop:"1px solid var(--epr-preview-border-color)",height:"var(--epr-preview-height)",padding:"0 var(--epr-horizontal-padding)",position:"relative",zIndex:"var(--epr-preview-z-index)"},label:{color:"var(--epr-preview-text-color)",fontSize:"var(--epr-preview-text-size)",padding:"var(--epr-preview-text-padding)",textTransform:"capitalize"},emoji:{padding:"0"}});function eD(e){var a;return(a=e==null?void 0:e.getAttribute("data-name"))!=null?a:null}function tD(e){var a=hn();m.useEffect(function(){var r=new Map,o=a.current,l=new IntersectionObserver(function(u){if(o){for(var h=mT(u),b;!(b=h()).done;){var p=b.value,y=eD(p.target);r.set(y,p.intersectionRatio)}var v=Array.from(r),x=v[v.length-1];if(x[1]==1)return e(x[0]);for(var j=0,C=v;j<C.length;j++){var S=C[j],L=S[0],T=S[1];if(T){e(L);break}}}},{threshold:[0,1]});o==null||o.querySelectorAll(jt(be.category)).forEach(function(u){l.observe(u)})},[a,e])}function nD(){var e=hn(),a=uf();return function(o){var l;if(e.current){var u=(l=e.current)==null?void 0:l.querySelector('[data-name="'+o+'"]');if(u){var h=u.offsetTop||0;Z3(a.current,h)}}}}function aD(){var e=eN();return e?e.length===0:!1}var rD="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIyMDBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgMjAwIDgwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyMDAgODAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8ZyBpZD0iTGF5ZXJfMTEiPgoJPGc+CgkJPHBhdGggZmlsbD0iIzMzNzFCNyIgc3Ryb2tlPSIjMzM3MUI3IiBzdHJva2Utd2lkdGg9IjAuMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTIuOCwyOS41YzAuNiwwLDEuMS0wLjUsMS4xLTEuMQoJCQljMC0wLjYtMC41LTEuMi0xLjEtMS4yYy0wLjYsMC0xLjIsMC41LTEuMiwxLjJDMTEuNiwyOSwxMi4yLDI5LjUsMTIuOCwyOS41eiBNMTIuOCwyOGMwLjIsMCwwLjQsMC4yLDAuNCwwLjQKCQkJYzAsMC4yLTAuMiwwLjQtMC40LDAuNGMtMC4yLDAtMC40LTAuMi0wLjQtMC40QzEyLjQsMjguMSwxMi42LDI4LDEyLjgsMjh6Ii8+CgkJPHBhdGggZmlsbD0iIzMzNzFCNyIgc3Ryb2tlPSIjMzM3MUI3IiBzdHJva2Utd2lkdGg9IjAuMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTAsMjNjLTMuOCwwLTcsMy4xLTcsN2MwLDMuOCwzLjEsNyw3LDcKCQkJczctMy4xLDctN0MxNywyNi4yLDEzLjgsMjMsMTAsMjN6IE0xMCwzNi4yYy0zLjQsMC02LjItMi44LTYuMi02LjJjMC0zLjQsMi44LTYuMiw2LjItNi4yczYuMiwyLjgsNi4yLDYuMgoJCQlDMTYuMiwzMy40LDEzLjQsMzYuMiwxMCwzNi4yeiIvPgoJCTxwYXRoIGZpbGw9IiMzMzcxQjciIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTE0LjYsMzEuMmMtMC4xLTAuMS0wLjItMC4yLTAuMy0wLjJINS43CgkJCWMtMC4xLDAtMC4yLDAuMS0wLjMsMC4yYy0wLjEsMC4xLTAuMSwwLjIsMCwwLjRjMC43LDIsMi41LDMuMyw0LjYsMy4zczMuOS0xLjMsNC42LTMuM0MxNC43LDMxLjUsMTQuNywzMS4zLDE0LjYsMzEuMnogTTEwLDM0LjEKCQkJYy0xLjYsMC0zLTAuOS0zLjctMi4yaDcuM0MxMywzMy4yLDExLjYsMzQuMSwxMCwzNC4xeiIvPgoJCTxwYXRoIGZpbGw9IiMzMzcxQjciIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTcuMiwyOS41YzAuNiwwLDEuMi0wLjUsMS4yLTEuMQoJCQljMC0wLjYtMC41LTEuMi0xLjItMS4yYy0wLjYsMC0xLjEsMC41LTEuMSwxLjJDNi4xLDI5LDYuNiwyOS41LDcuMiwyOS41eiBNNy4yLDI4YzAuMiwwLDAuNCwwLjIsMC40LDAuNGMwLDAuMi0wLjIsMC40LTAuNCwwLjQKCQkJYy0wLjIsMC0wLjQtMC4yLTAuNC0wLjRDNi44LDI4LjEsNywyOCw3LjIsMjh6Ii8+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzM3MUI3IiBkPSJNNjQuMSwzMy40bDIuMywwYzAuMiwwLDAuNCwwLjIsMC40LDAuNHYyLjFjMCwwLjItMC4yLDAuNC0wLjQsMC40aC0yLjMKCQkJCWMtMC4yLDAtMC40LTAuMi0wLjQtMC40di0yLjFDNjMuNywzMy42LDYzLjgsMzMuNCw2NC4xLDMzLjR6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgZD0iTTczLjUsMzMuNWgyLjRjMC4yLDAsMC40LDAuMiwwLjQsMC40djJjMCwwLjItMC4yLDAuNC0wLjQsMC40aC0yLjQKCQkJCWMtMC4yLDAtMC40LTAuMi0wLjQtMC40bDAtMkM3My4xLDMzLjYsNzMuMywzMy41LDczLjUsMzMuNXoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzM3MUI3IiBkPSJNNjMuNywyOC40aDEyLjZ2NUg2My43VjI4LjR6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgZD0iTTY1LjUsMjMuNmg4LjljMSwwLDEuOSwwLjgsMS45LDEuOXYzLjFINjMuN3YtMy4xQzYzLjcsMjQuNSw2NC41LDIzLjYsNjUuNSwyMy42eiIvPgoJCQk8ZWxsaXBzZSBmaWxsPSIjMzM3MUI3IiBjeD0iNjYuMiIgY3k9IjMwLjkiIHJ4PSIwLjkiIHJ5PSIxIi8+CgkJCTxlbGxpcHNlIGZpbGw9IiMzMzcxQjciIGN4PSI3My44IiBjeT0iMzAuOSIgcng9IjAuOSIgcnk9IjEiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzM3MUI3IiBkPSJNOTYuNCwzMGMwLDMuNi0yLjksNi41LTYuNCw2LjVzLTYuNC0yLjktNi40LTYuNXMyLjktNi41LDYuNC02LjVTOTYuNCwyNi40LDk2LjQsMzB6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgZD0iTTk2LjMsMjguNmMwLDAsMCwwLjEsMCwwLjFjLTAuOSwwLjEtMi45LDAuMS00LjYtMS4xYy0xLjEtMC44LTItMS43LTIuNi0yLjUKCQkJCWMtMC4zLTAuNC0wLjYtMC44LTAuNy0xYy0wLjEtMC4xLTAuMS0wLjEtMC4xLTAuMmMwLjUtMC4xLDEuMi0wLjIsMi0wLjFjMS4yLDAsMi41LDAuMywzLjUsMS4xYzEsMC44LDEuNywxLjgsMi4xLDIuOAoJCQkJQzk2LjEsMjcuOSw5Ni4yLDI4LjMsOTYuMywyOC42eiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIGQ9Ik04NCwzMi4yYzAsMCwwLTAuMSwwLTAuMWMwLjktMC4yLDIuOS0wLjQsNC43LDAuNmMxLjEsMC43LDEuOSwxLjUsMi40LDIuMwoJCQkJYzAuNCwwLjUsMC42LDEsMC43LDEuM2MtMC40LDAuMS0xLDAuMi0xLjcsMC4zYy0xLDAtMi4xLTAuMS0zLjItMC44cy0xLjktMS42LTIuNC0yLjVDODQuMiwzMi44LDg0LjEsMzIuNSw4NCwzMi4yeiIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTExNi4zLDI2LjhsLTEuNCwybC0wLjgtMC44bC0wLjYtMC42bDAsMC45bC0wLjEsOC4yaC02LjgKCQkJCWwtMC4xLTguMmwwLTAuOWwtMC42LDAuNmwtMC44LDAuOGwtMS40LTJsMi42LTIuOWMwLjEtMC4xLDAuMi0wLjEsMC4zLTAuMWgxLjNsMC40LDAuN2MwLjcsMS4zLDIuNiwxLjMsMy4zLTAuMWwwLjMtMC42aDEuMgoJCQkJYzAuMSwwLDAuMiwwLDAuMywwLjFsMC4zLTAuM2wtMC4zLDAuM0wxMTYuMywyNi44eiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIGQ9Ik0xMTAuMSwyNy43aDJ2MC45YzAsMC40LTAuNCwwLjctMSwwLjdjLTAuNiwwLTEtMC4zLTEtMC43TDExMC4xLDI3LjdMMTEwLjEsMjcuN3oiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzM3MUI3IiBkPSJNMTI2LjgsMzQuM2MwLDEuMi0xLDIuMi0yLjIsMi4ycy0yLjItMS0yLjItMi4yczEtMi4yLDIuMi0yLjJTMTI2LjgsMzMuMSwxMjYuOCwzNC4zeiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIGQ9Ik0xMzcuNiwzNC4zYzAsMS4yLTEsMi4yLTIuMiwyLjJjLTEuMiwwLTIuMi0xLTIuMi0yLjJzMS0yLjIsMi4yLTIuMgoJCQkJQzEzNi42LDMyLjEsMTM3LjYsMzMuMSwxMzcuNiwzNC4zeiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIGQ9Ik0xMjYuOCwyNC40djkuOSIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIGQ9Ik0xMzcuNywyNC40djkuOSIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIGQ9Ik0xMjYuOCwyMy41aDEwLjh2Mi43aC0xMC44QzEyNi44LDI2LjIsMTI2LjgsMjMuNSwxMjYuOCwyMy41eiIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSIjMzM3MUI3IiBkPSJNMTcwLjgsMjMuMUwxNzAuOCwyMy4xYy0wLjMsMC0wLjUsMC0wLjgsMGMtMi4xLDAtNCwxLTUuMywyLjVsLTAuMSwwbC0wLjEtMC4xbC0xLTEuMmwtMC4zLDMuNGwzLjQsMC4zCgkJCQlsLTEuMS0xLjNsLTAuMS0wLjFsMC4xLTAuMWMxLjEtMS41LDMtMi4zLDUtMi4xbDAsMGMzLjIsMC4zLDUuNSwzLjEsNS4yLDYuM2MtMC4zLDMtMy4xLDUuMy02LjEsNS4xYy0zLjEtMC4yLTUuNC0yLjktNS4zLTYKCQkJCWwtMS4zLTAuMWMtMC4yLDMuOCwyLjYsNy4xLDYuMyw3LjRjMy45LDAuMyw3LjMtMi42LDcuNi02LjVDMTc3LjIsMjYuOCwxNzQuNCwyMy41LDE3MC44LDIzLjF6Ii8+CgkJCTxwYXRoIGZpbGw9IiMzMzcxQjciIGQ9Ik0xNzAuMywyNy40YzAtMC4zLTAuMy0wLjYtMC42LTAuNnMtMC42LDAuMy0wLjYsMC42djMuMmMwLDAuMiwwLjEsMC4zLDAuMiwwLjRjMC4xLDAuMSwwLjMsMC4yLDAuNCwwLjIKCQkJCWgyLjRjMC40LDAsMC42LTAuMywwLjYtMC42YzAtMC40LTAuMy0wLjYtMC42LTAuNmgtMS42aC0wLjJ2LTAuMkwxNzAuMywyNy40TDE3MC4zLDI3LjR6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgZD0iTTE4Ni4yLDIzLjRoNy43YzEuNSwwLDIuNywxLjIsMi43LDIuN3Y3LjdjMCwxLjUtMS4yLDIuNy0yLjcsMi43aC03LjcKCQkJCWMtMS41LDAtMi43LTEuMi0yLjctMi43di03LjdDMTgzLjQsMjQuNiwxODQuNywyMy40LDE4Ni4yLDIzLjR6Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiMzMzcxQjciIGN4PSIxODYiIGN5PSIyOC45IiByeD0iMC43IiByeT0iMC43Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiMzMzcxQjciIGN4PSIxOTQiIGN5PSIyNi43IiByeD0iMC43IiByeT0iMC43Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMTg2LDMzLjNsMC40LTAuM2MwLjQtMC4zLDEtMC4zLDEuNS0wLjFsMSwwLjQKCQkJCWMwLjUsMC4yLDEsMC4yLDEuNS0wLjFsMC44LTAuNWMwLjQtMC4zLDEtMC4zLDEuNS0wLjFsMS44LDAuOCIvPgoJCTwvZz4KCTwvZz4KCTxwYXRoIGZpbGw9IiMzMzcxQjciIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLXdpZHRoPSIwLjI1IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0xNTYsMjQuM2MtMC4yLTAuMS0wLjQtMC4xLTAuNSwwCgkJYzAsMC0wLjIsMC4xLTAuOSwwLjJjLTAuNywwLTIuNC0wLjEtMy44LTAuNmMtMC44LTAuMy0xLjctMC41LTIuNS0wLjVjLTAuMiwwLTAuNCwwLTAuNSwwYy0xLjMsMC0yLjUsMC4zLTMuNiwxCgkJYy0wLjIsMC4xLTAuMiwwLjItMC4yLDAuNHYxMS42YzAsMC4zLDAuMSwwLjUsMC4zLDAuNWMwLjYsMCwwLjUtMC40LDAuNS0wLjZ2LTUuN2MwLjctMC4zLDMuMi0xLjEsNS44LTAuMQoJCWMxLjYsMC42LDMuNSwwLjcsNC4zLDAuN2MwLjgsMCwxLjMtMC4zLDEuMy0wLjNjMC4yLTAuMSwwLjMtMC4yLDAuMy0wLjR2LTUuN0MxNTYuMiwyNC42LDE1Ni4xLDI0LjQsMTU2LDI0LjN6IE0xNTUuNiwzMC4yCgkJYy0wLjEsMC0wLjcsMC4xLTEsMC4xYy0wLjcsMC0yLjQtMC4xLTMuOC0wLjZjLTIuNS0xLTUtMC41LTYuMi0wLjF2LTQuOWMwLjktMC41LDIuMi0wLjcsMy4yLTAuN2MwLjEsMCwwLjMsMCwwLjQsMAoJCWMwLjcsMCwxLjUsMC4yLDIuMiwwLjRjMS42LDAuNiwzLjUsMC43LDQuMywwLjdjMC4yLDAsMC44LDAsMS0wLjFWMzAuMnoiLz4KCTxnPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgZD0iTTQ4LjEsMjMuNWgzLjdjMi41LDAsNC41LDIsNC41LDQuNWMwLDAuNS0wLjQsMC45LTAuOSwwLjlINDQuNWMtMC41LDAtMC45LTAuNC0wLjktMC45CgkJCUM0My42LDI1LjUsNDUuNiwyMy41LDQ4LjEsMjMuNXoiLz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTQzLjUsMjguOGMtMC4yLDAuMS0wLjUsMS4yLDAsMS41YzEuNCwxLDguNSwwLjgsMTEuMywwLjYKCQkJYzAuOC0wLjEsMS42LTAuNCwxLjctMS4yYzAtMC4zLTAuMS0wLjYtMC42LTAuOSIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSwzMC42TDQzLjMsMzFjLTAuMiwwLjUsMC4yLDEsMC43LDAuOWMwLjMtMC4xLDAuNSwwLDAuNywwLjMKCQkJbDAuMSwwLjJjMC4zLDAuNSwxLDAuNiwxLjUsMC4ybDAsMGMwLjMtMC4yLDAuNy0wLjMsMS0wLjJsMC44LDAuM2MwLjQsMC4yLDAuOCwwLjEsMS4yLDBsMC41LTAuMmMwLjQtMC4yLDAuOS0wLjIsMS4zLDBsMC41LDAuMgoJCQljMC40LDAuMiwwLjgsMC4yLDEuMiwwbDAuMi0wLjFjMC4zLTAuMiwwLjgtMC4yLDEuMSwwLjFsMC4yLDAuMmMwLjMsMC4zLDAuOCwwLjIsMS0wLjJsMC4xLTAuMmMwLjEtMC4yLDAtMC4zLDAuMi0wLjMKCQkJYzAuNSwwLDEuMi0wLjMsMS4xLTAuN2wtMC40LTEuMSIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSwzMi4yYy0wLjEsMC4yLTAuMywwLjgsMCwxLjFjMC4zLDAuNCwzLDEuMSw2LjQsMS4xCgkJCWMyLjIsMCw0LjYtMC4zLDYtMC42YzAuNS0wLjEsMC45LTAuNSwwLjgtMC45YzAtMC4yLTAuMi0wLjUtMC40LTAuNyIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSwzMy4zYzAsMC41LDAuNiwyLjMsMS4zLDIuN2MxLjgsMC44LDUuNywwLjcsOC4xLDAuNQoJCQljMS4zLTAuMSwyLjUtMC43LDMuMi0xLjhjMC4zLTAuNSwwLjUtMSwwLjUtMS40Ii8+CgkJPGVsbGlwc2UgZmlsbD0iIzMzNzFCNyIgY3g9IjUxLjYiIGN5PSIyNi41IiByeD0iMC4zIiByeT0iMC40Ii8+CgkJPGVsbGlwc2UgZmlsbD0iIzMzNzFCNyIgY3g9IjUzIiBjeT0iMjUiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjMzM3MUI3IiBjeD0iNTMiIGN5PSIyNy4yIiByeD0iMC4zIiByeT0iMC40Ii8+CgkJPGVsbGlwc2UgZmlsbD0iIzMzNzFCNyIgY3g9IjU0LjMiIGN5PSIyNi41IiByeD0iMC4zIiByeT0iMC40Ii8+CgkJPGVsbGlwc2UgZmlsbD0iIzMzNzFCNyIgY3g9IjUwLjkiIGN5PSIyNSIgcng9IjAuMyIgcnk9IjAuNCIvPgoJPC9nPgoJPGc+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzM3MUI3IiBkPSJNMjQuMiwzMXYtNy42YzAuMSwwLjEsMC44LDAuOSwyLjgsMy4xYzIuNS0xLjYsNS42LTAuNyw2LjksMGwyLjQtMy4xdjcuMQoJCQljMCwxLjItMC4xLDIuNS0wLjksMy40Yy0xLDEuMi0yLjcsMi41LTUuMywyLjVjLTIuOSwwLTQuNS0xLjUtNS4zLTIuOUMyNC4yLDMyLjksMjQuMiwzMiwyNC4yLDMxeiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMjEuMiwzMGw1LjQsMS4yIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzM3MUI3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0yMS4yLDM0LjFsNS40LTEuMiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMzguOCwzMGwtNS40LDEuMiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMzguOCwzNC4xbC01LjQtMS4yIi8+CgkJPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiMzMzcxQjciIGQ9Ik0yOS41LDMyLjRMMjksMzEuN2MtMC4yLTAuMywwLTAuNiwwLjMtMC42aDEuNAoJCQljMC4zLDAsMC41LDAuNCwwLjMsMC42bC0wLjcsMWwwLDBjLTAuNywxLjItMi42LDEuMS0zLjEtMC4zbC0wLjEtMC4yYy0wLjEtMC4yLDAtMC40LDAuMi0wLjVzMC40LDAsMC41LDAuMmwwLjEsMC4yCgkJCUMyOC4zLDMyLjgsMjkuMSwzMi45LDI5LjUsMzIuNHoiLz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTMyLjQsMzIuMWwtMC4xLDAuMmMtMC40LDEtMS44LDEuMS0yLjMsMC4yIi8+CgkJPGVsbGlwc2UgZmlsbD0iIzMzNzFCNyIgY3g9IjI3LjYiIGN5PSIyOS43IiByeD0iMC43IiByeT0iMC43Ii8+CgkJPGVsbGlwc2UgZmlsbD0iIzMzNzFCNyIgY3g9IjMyLjQiIGN5PSIyOS43IiByeD0iMC43IiByeT0iMC43Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBmaWxsPSIjQzBDMEJGIiBzdHJva2U9IiNDMEMwQkYiIHN0cm9rZS13aWR0aD0iMC4xIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0xMi44LDQ5LjVjMC42LDAsMS4xLTAuNSwxLjEtMS4xCgkJCWMwLTAuNi0wLjUtMS4yLTEuMS0xLjJjLTAuNiwwLTEuMiwwLjUtMS4yLDEuMkMxMS42LDQ5LDEyLjIsNDkuNSwxMi44LDQ5LjV6IE0xMi44LDQ4YzAuMiwwLDAuNCwwLjIsMC40LDAuNAoJCQljMCwwLjItMC4yLDAuNC0wLjQsMC40Yy0wLjIsMC0wLjQtMC4yLTAuNC0wLjRDMTIuNCw0OC4xLDEyLjYsNDgsMTIuOCw0OHoiLz4KCQk8cGF0aCBmaWxsPSIjQzBDMEJGIiBzdHJva2U9IiNDMEMwQkYiIHN0cm9rZS13aWR0aD0iMC4xIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0xNC42LDUxLjJjLTAuMS0wLjEtMC4yLTAuMi0wLjMtMC4ySDUuNwoJCQljLTAuMSwwLTAuMiwwLjEtMC4zLDAuMmMtMC4xLDAuMS0wLjEsMC4yLDAsMC40YzAuNywyLDIuNSwzLjMsNC42LDMuM3MzLjktMS4zLDQuNi0zLjNDMTQuNyw1MS41LDE0LjcsNTEuMywxNC42LDUxLjJ6IE0xMCw1NC4xCgkJCWMtMS42LDAtMy0wLjktMy43LTIuMmg3LjNDMTMsNTMuMiwxMS42LDU0LjEsMTAsNTQuMXoiLz4KCQk8cGF0aCBmaWxsPSIjQzBDMEJGIiBzdHJva2U9IiNDMEMwQkYiIHN0cm9rZS13aWR0aD0iMC4xIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik03LjIsNDkuNWMwLjYsMCwxLjItMC41LDEuMi0xLjEKCQkJYzAtMC42LTAuNS0xLjItMS4yLTEuMmMtMC42LDAtMS4xLDAuNS0xLjEsMS4yQzYuMSw0OSw2LjYsNDkuNSw3LjIsNDkuNXogTTcuMiw0OGMwLjIsMCwwLjQsMC4yLDAuNCwwLjRjMCwwLjItMC4yLDAuNC0wLjQsMC40CgkJCWMtMC4yLDAtMC40LTAuMi0wLjQtMC40QzYuOCw0OC4xLDcsNDgsNy4yLDQ4eiIvPgoJCTxwYXRoIGZpbGw9IiNDMEMwQkYiIHN0cm9rZT0iI0MwQzBCRiIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTEwLDQzYy0zLjgsMC03LDMuMS03LDdjMCwzLjgsMy4xLDcsNyw3CgkJCXM3LTMuMSw3LTdDMTcsNDYuMiwxMy44LDQzLDEwLDQzeiBNMTAsNTYuMmMtMy40LDAtNi4yLTIuOC02LjItNi4yYzAtMy40LDIuOC02LjIsNi4yLTYuMnM2LjIsMi44LDYuMiw2LjIKCQkJQzE2LjIsNTMuNCwxMy40LDU2LjIsMTAsNTYuMnoiLz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNDMEMwQkYiIGQ9Ik02NC4xLDUzLjRsMi4zLDBjMC4yLDAsMC40LDAuMiwwLjQsMC40djIuMWMwLDAuMi0wLjIsMC40LTAuNCwwLjRoLTIuMwoJCQkJYy0wLjIsMC0wLjQtMC4yLTAuNC0wLjR2LTIuMUM2My43LDUzLjYsNjMuOCw1My40LDY0LjEsNTMuNHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBkPSJNNzMuNSw1My41aDIuNGMwLjIsMCwwLjQsMC4yLDAuNCwwLjR2MmMwLDAuMi0wLjIsMC40LTAuNCwwLjRoLTIuNAoJCQkJYy0wLjIsMC0wLjQtMC4yLTAuNC0wLjRsMC0yQzczLjEsNTMuNiw3My4zLDUzLjUsNzMuNSw1My41eiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNDMEMwQkYiIGQ9Ik02My43LDQ4LjRoMTIuNnY1SDYzLjdWNDguNHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBkPSJNNjUuNSw0My42aDguOWMxLDAsMS45LDAuOCwxLjksMS45djMuMUg2My43di0zLjFDNjMuNyw0NC41LDY0LjUsNDMuNiw2NS41LDQzLjZ6Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiNDMEMwQkYiIGN4PSI2Ni4yIiBjeT0iNTAuOSIgcng9IjAuOSIgcnk9IjEiLz4KCQkJPGVsbGlwc2UgZmlsbD0iI0MwQzBCRiIgY3g9IjczLjgiIGN5PSI1MC45IiByeD0iMC45IiByeT0iMSIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNDMEMwQkYiIGQ9Ik05Ni40LDUwYzAsMy42LTIuOSw2LjUtNi40LDYuNXMtNi40LTIuOS02LjQtNi41czIuOS02LjUsNi40LTYuNVM5Ni40LDQ2LjQsOTYuNCw1MHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBkPSJNOTYuMyw0OC42YzAsMCwwLDAuMSwwLDAuMWMtMC45LDAuMS0yLjksMC4xLTQuNi0xLjJjLTEuMS0wLjgtMi0xLjctMi42LTIuNQoJCQkJYy0wLjMtMC40LTAuNi0wLjgtMC43LTFjLTAuMS0wLjEtMC4xLTAuMi0wLjEtMC4yYzAuNS0wLjEsMS4yLTAuMiwyLTAuMmMxLjIsMCwyLjUsMC4zLDMuNSwxLjFjMSwwLjgsMS43LDEuOCwyLjEsMi44CgkJCQlDOTYuMSw0Ny45LDk2LjIsNDguMyw5Ni4zLDQ4LjZ6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgZD0iTTg0LDUyLjJjMCwwLDAtMC4xLDAtMC4xYzAuOS0wLjIsMi45LTAuNCw0LjcsMC42YzEuMSwwLjcsMS45LDEuNSwyLjQsMi4zCgkJCQljMC40LDAuNSwwLjYsMSwwLjcsMS4zYy0wLjQsMC4xLTEsMC4yLTEuNywwLjNjLTEsMC0yLjEtMC4xLTMuMi0wLjhzLTEuOS0xLjYtMi40LTIuNUM4NC4yLDUyLjgsODQuMSw1Mi41LDg0LDUyLjJ6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMTE2LjMsNDYuOGwtMS40LDJsLTAuOC0wLjhsLTAuNi0wLjdsMCwwLjlsLTAuMSw4LjJoLTYuOAoJCQkJbC0wLjEtOC4ybDAtMC45bC0wLjYsMC43bC0wLjgsMC44bC0xLjQtMmwyLjYtMi45YzAuMS0wLjEsMC4yLTAuMSwwLjMtMC4xaDEuM2wwLjQsMC43YzAuNywxLjMsMi42LDEuMywzLjMtMC4xbDAuMy0wLjZoMS4yCgkJCQljMC4xLDAsMC4yLDAsMC4zLDAuMWwwLjMtMC4zbC0wLjMsMC4zTDExNi4zLDQ2Ljh6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgZD0iTTExMC4xLDQ3LjdoMnYwLjljMCwwLjQtMC40LDAuNy0xLDAuN2MtMC42LDAtMS0wLjMtMS0wLjdMMTEwLjEsNDcuN0wxMTAuMSw0Ny43eiIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNDMEMwQkYiIGQ9Ik0xMjYuOCw1NC4zYzAsMS4yLTEsMi4yLTIuMiwyLjJzLTIuMi0xLTIuMi0yLjJzMS0yLjIsMi4yLTIuMlMxMjYuOCw1My4xLDEyNi44LDU0LjN6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgZD0iTTEzNy42LDU0LjNjMCwxLjItMSwyLjItMi4yLDIuMmMtMS4yLDAtMi4yLTEtMi4yLTIuMnMxLTIuMiwyLjItMi4yCgkJCQlDMTM2LjYsNTIuMSwxMzcuNiw1My4xLDEzNy42LDU0LjN6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgZD0iTTEyNi44LDQ0LjR2OS45Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgZD0iTTEzNy43LDQ0LjR2OS45Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgZD0iTTEyNi44LDQzLjVoMTAuOHYyLjdoLTEwLjhDMTI2LjgsNDYuMiwxMjYuOCw0My41LDEyNi44LDQzLjV6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9IiNDMEMwQkYiIGQ9Ik0xNzAuOCw0My4xTDE3MC44LDQzLjFjLTAuMywwLTAuNSwwLTAuOCwwYy0yLjEsMC00LDEtNS4zLDIuNWwtMC4xLDBsLTAuMS0wLjFsLTEtMS4ybC0wLjMsMy40bDMuNCwwLjMKCQkJCWwtMS4xLTEuM2wtMC4xLTAuMWwwLjEtMC4xYzEuMS0xLjUsMy0yLjMsNS0yLjFsMCwwYzMuMiwwLjMsNS41LDMuMSw1LjIsNi4zYy0wLjMsMy0zLjEsNS4zLTYuMSw1LjFjLTMuMS0wLjItNS40LTIuOS01LjMtNgoJCQkJbC0xLjMtMC4xYy0wLjIsMy44LDIuNiw3LjEsNi4zLDcuNGMzLjksMC4zLDcuMy0yLjYsNy42LTYuNUMxNzcuMiw0Ni44LDE3NC40LDQzLjUsMTcwLjgsNDMuMXoiLz4KCQkJPHBhdGggZmlsbD0iI0MwQzBCRiIgZD0iTTE3MC4zLDQ3LjRjMC0wLjMtMC4zLTAuNi0wLjYtMC42cy0wLjYsMC4zLTAuNiwwLjZ2My4yYzAsMC4yLDAuMSwwLjMsMC4yLDAuNGMwLjEsMC4xLDAuMywwLjIsMC40LDAuMgoJCQkJaDIuNGMwLjQsMCwwLjYtMC4zLDAuNi0wLjZjMC0wLjMtMC4zLTAuNi0wLjYtMC42aC0xLjZoLTAuMnYtMC4yTDE3MC4zLDQ3LjRMMTcwLjMsNDcuNHoiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBkPSJNMTg2LjIsNDMuNGg3LjdjMS41LDAsMi43LDEuMiwyLjcsMi43djcuN2MwLDEuNS0xLjIsMi43LTIuNywyLjdoLTcuNwoJCQkJYy0xLjUsMC0yLjctMS4yLTIuNy0yLjd2LTcuN0MxODMuNCw0NC43LDE4NC43LDQzLjQsMTg2LjIsNDMuNHoiLz4KCQkJPGVsbGlwc2UgZmlsbD0iI0MwQzBCRiIgY3g9IjE4NiIgY3k9IjQ4LjkiIHJ4PSIwLjciIHJ5PSIwLjciLz4KCQkJPGVsbGlwc2UgZmlsbD0iI0MwQzBCRiIgY3g9IjE5NCIgY3k9IjQ2LjciIHJ4PSIwLjciIHJ5PSIwLjciLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0xODYsNTMuM2wwLjQtMC4zYzAuNC0wLjMsMS0wLjMsMS41LTAuMWwxLDAuNAoJCQkJYzAuNSwwLjIsMSwwLjIsMS41LTAuMWwwLjgtMC41YzAuNC0wLjMsMS0wLjMsMS41LTAuMWwxLjgsMC44Ii8+CgkJPC9nPgoJPC9nPgoJPHBhdGggZmlsbD0iI0MwQzBCRiIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2Utd2lkdGg9IjAuMjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTE1Niw0NC4zYy0wLjItMC4xLTAuNC0wLjEtMC41LDAKCQljMCwwLTAuMiwwLjEtMC45LDAuMmMtMC43LDAtMi40LTAuMS0zLjgtMC42Yy0wLjgtMC4zLTEuNy0wLjUtMi41LTAuNWMtMC4yLDAtMC40LDAtMC41LDBjLTEuMywwLTIuNSwwLjMtMy42LDEKCQljLTAuMiwwLjEtMC4yLDAuMi0wLjIsMC40djExLjZjMCwwLjMsMC4xLDAuNSwwLjMsMC41YzAuNiwwLDAuNS0wLjQsMC41LTAuNnYtNS43YzAuNy0wLjMsMy4yLTEuMSw1LjgtMC4xCgkJYzEuNiwwLjYsMy41LDAuNyw0LjMsMC43YzAuOCwwLDEuMy0wLjMsMS4zLTAuM2MwLjItMC4xLDAuMy0wLjIsMC4zLTAuNHYtNS43QzE1Ni4yLDQ0LjYsMTU2LjEsNDQuNCwxNTYsNDQuM3ogTTE1NS42LDUwLjIKCQljLTAuMSwwLTAuNywwLjEtMSwwLjFjLTAuNywwLTIuNC0wLjEtMy44LTAuNmMtMi41LTEtNS0wLjUtNi4yLTAuMXYtNC45YzAuOS0wLjUsMi4yLTAuNywzLjItMC43YzAuMSwwLDAuMywwLDAuNCwwCgkJYzAuNywwLDEuNSwwLjIsMi4yLDAuNGMxLjYsMC42LDMuNSwwLjcsNC4zLDAuN2MwLjIsMCwwLjgsMCwxLTAuMVY1MC4yeiIvPgoJPGc+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBkPSJNNDguMSw0My41aDMuN2MyLjUsMCw0LjUsMiw0LjUsNC41YzAsMC41LTAuNCwwLjktMC45LDAuOUg0NC41Yy0wLjUsMC0wLjktMC40LTAuOS0wLjkKCQkJQzQzLjYsNDUuNSw0NS42LDQzLjUsNDguMSw0My41eiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSw0OC44Yy0wLjIsMC4xLTAuNSwxLjIsMCwxLjVjMS40LDEsOC41LDAuOCwxMS4zLDAuNgoJCQljMC44LTAuMSwxLjYtMC40LDEuNy0xLjJjMC0wLjMtMC4xLTAuNi0wLjYtMC45Ii8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik00My41LDUwLjZMNDMuMyw1MWMtMC4yLDAuNSwwLjIsMSwwLjcsMC45YzAuMy0wLjEsMC41LDAsMC43LDAuMwoJCQlsMC4xLDAuMmMwLjMsMC41LDEsMC42LDEuNSwwLjJsMCwwYzAuMy0wLjIsMC43LTAuMywxLTAuMmwwLjgsMC4zYzAuNCwwLjIsMC44LDAuMSwxLjIsMGwwLjUtMC4yYzAuNC0wLjIsMC45LTAuMiwxLjMsMGwwLjUsMC4yCgkJCWMwLjQsMC4yLDAuOCwwLjIsMS4yLDBsMC4yLTAuMWMwLjMtMC4yLDAuOC0wLjIsMS4xLDAuMWwwLjIsMC4yYzAuMywwLjMsMC44LDAuMiwxLTAuMmwwLjEtMC4yYzAuMS0wLjIsMC0wLjMsMC4yLTAuMwoJCQljMC41LDAsMS4yLTAuMywxLjEtMC43bC0wLjQtMS4xIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik00My41LDUyLjJjLTAuMSwwLjItMC4zLDAuOCwwLDEuMWMwLjMsMC40LDMsMS4xLDYuNCwxLjEKCQkJYzIuMiwwLDQuNi0wLjMsNi0wLjZjMC41LTAuMSwwLjktMC41LDAuOC0wLjljMC0wLjItMC4yLTAuNS0wLjQtMC43Ii8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik00My41LDUzLjNjMCwwLjUsMC42LDIuMywxLjMsMi43YzEuOCwwLjgsNS43LDAuNyw4LjEsMC41CgkJCWMxLjMtMC4xLDIuNS0wLjcsMy4yLTEuOGMwLjMtMC41LDAuNS0xLDAuNS0xLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjQzBDMEJGIiBjeD0iNTEuNiIgY3k9IjQ2LjUiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjQzBDMEJGIiBjeD0iNTMiIGN5PSI0NSIgcng9IjAuMyIgcnk9IjAuNCIvPgoJCTxlbGxpcHNlIGZpbGw9IiNDMEMwQkYiIGN4PSI1MyIgY3k9IjQ3LjIiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjQzBDMEJGIiBjeD0iNTQuMyIgY3k9IjQ2LjUiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjQzBDMEJGIiBjeD0iNTAuOSIgY3k9IjQ1IiByeD0iMC4zIiByeT0iMC40Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNDMEMwQkYiIGQ9Ik0yNC4yLDUxdi03LjZjMC4xLDAuMSwwLjgsMC45LDIuOCwzLjFjMi41LTEuNyw1LjYtMC43LDYuOSwwbDIuNC0zLjF2Ny4xCgkJCWMwLDEuMi0wLjEsMi41LTAuOSwzLjRjLTEsMS4yLTIuNywyLjUtNS4zLDIuNWMtMi45LDAtNC41LTEuNS01LjMtMi45QzI0LjIsNTIuOSwyNC4yLDUyLDI0LjIsNTF6Ii8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0yMS4yLDUwbDUuNCwxLjIiLz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNDMEMwQkYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTIxLjIsNTQuMWw1LjQtMS4yIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0zOC44LDUwbC01LjQsMS4yIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0zOC44LDU0LjFsLTUuNC0xLjIiLz4KCQk8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI0MwQzBCRiIgZD0iTTI5LjUsNTIuNEwyOSw1MS43Yy0wLjItMC4zLDAtMC42LDAuMy0wLjZoMS40CgkJCWMwLjMsMCwwLjUsMC40LDAuMywwLjZsLTAuNywxbDAsMGMtMC43LDEuMi0yLjYsMS4xLTMuMS0wLjNsLTAuMS0wLjJjLTAuMS0wLjIsMC0wLjQsMC4yLTAuNXMwLjQsMCwwLjUsMC4ybDAuMSwwLjIKCQkJQzI4LjMsNTIuOCwyOS4xLDUyLjksMjkuNSw1Mi40eiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMzIuNCw1Mi4xbC0wLjEsMC4yYy0wLjQsMS0xLjgsMS4xLTIuMywwLjIiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjQzBDMEJGIiBjeD0iMjcuNiIgY3k9IjQ5LjciIHJ4PSIwLjciIHJ5PSIwLjciLz4KCQk8ZWxsaXBzZSBmaWxsPSIjQzBDMEJGIiBjeD0iMzIuNCIgY3k9IjQ5LjciIHJ4PSIwLjciIHJ5PSIwLjciLz4KCTwvZz4KCTxnPgoJCTxwYXRoIGZpbGw9IiM2QUE5REQiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTE0LjYsNzEuMmMtMC4xLTAuMS0wLjItMC4yLTAuMy0wLjJINS43CgkJCWMtMC4xLDAtMC4yLDAuMS0wLjMsMC4yYy0wLjEsMC4xLTAuMSwwLjIsMCwwLjRjMC43LDIsMi41LDMuMyw0LjYsMy4zczMuOS0xLjMsNC42LTMuM0MxNC43LDcxLjUsMTQuNyw3MS4zLDE0LjYsNzEuMnogTTEwLDc0LjEKCQkJYy0xLjYsMC0zLTAuOS0zLjctMi4yaDcuM0MxMyw3My4yLDExLjYsNzQuMSwxMCw3NC4xeiIvPgoJCTxwYXRoIGZpbGw9IiM2QUE5REQiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTEyLjgsNjkuNWMwLjYsMCwxLjEtMC41LDEuMS0xLjEKCQkJYzAtMC42LTAuNS0xLjItMS4xLTEuMmMtMC42LDAtMS4yLDAuNS0xLjIsMS4yQzExLjYsNjksMTIuMiw2OS41LDEyLjgsNjkuNXogTTEyLjgsNjhjMC4yLDAsMC40LDAuMiwwLjQsMC40CgkJCWMwLDAuMi0wLjIsMC40LTAuNCwwLjRjLTAuMiwwLTAuNC0wLjItMC40LTAuNEMxMi40LDY4LjEsMTIuNiw2OCwxMi44LDY4eiIvPgoJCTxwYXRoIGZpbGw9IiM2QUE5REQiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTcuMiw2OS41YzAuNiwwLDEuMi0wLjUsMS4yLTEuMQoJCQljMC0wLjYtMC41LTEuMi0xLjItMS4yYy0wLjYsMC0xLjEsMC41LTEuMSwxLjJDNi4xLDY5LDYuNiw2OS41LDcuMiw2OS41eiBNNy4yLDY4YzAuMiwwLDAuNCwwLjIsMC40LDAuNGMwLDAuMi0wLjIsMC40LTAuNCwwLjQKCQkJYy0wLjIsMC0wLjQtMC4yLTAuNC0wLjRDNi44LDY4LjEsNyw2OCw3LjIsNjh6Ii8+CgkJPHBhdGggZmlsbD0iIzZBQTlERCIgc3Ryb2tlPSIjNkFBOUREIiBzdHJva2Utd2lkdGg9IjAuMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTAsNjNjLTMuOCwwLTcsMy4xLTcsN2MwLDMuOCwzLjEsNyw3LDcKCQkJczctMy4xLDctN0MxNyw2Ni4yLDEzLjgsNjMsMTAsNjN6IE0xMCw3Ni4yYy0zLjQsMC02LjItMi44LTYuMi02LjJjMC0zLjQsMi44LTYuMiw2LjItNi4yczYuMiwyLjgsNi4yLDYuMgoJCQlDMTYuMiw3My40LDEzLjQsNzYuMiwxMCw3Ni4yeiIvPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTY0LjEsNzMuNGwyLjMsMGMwLjIsMCwwLjQsMC4yLDAuNCwwLjR2Mi4xYzAsMC4yLTAuMiwwLjQtMC40LDAuNGgtMi4zCgkJCQljLTAuMiwwLTAuNC0wLjItMC40LTAuNHYtMi4xQzYzLjcsNzMuNiw2My44LDczLjQsNjQuMSw3My40eiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM2QUE5REQiIGQ9Ik03My41LDczLjVoMi40YzAuMiwwLDAuNCwwLjIsMC40LDAuNHYyLjFjMCwwLjItMC4yLDAuNC0wLjQsMC40aC0yLjQKCQkJCWMtMC4yLDAtMC40LTAuMi0wLjQtMC40bDAtMi4xQzczLjEsNzMuNiw3My4zLDczLjUsNzMuNSw3My41eiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM2QUE5REQiIGQ9Ik02My43LDY4LjRoMTIuNnY1SDYzLjdWNjguNHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBkPSJNNjUuNSw2My42aDguOWMxLDAsMS45LDAuOCwxLjksMS45djMuMUg2My43di0zLjFDNjMuNyw2NC41LDY0LjUsNjMuNiw2NS41LDYzLjZ6Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiM2QUE5REQiIGN4PSI2Ni4yIiBjeT0iNzAuOSIgcng9IjAuOSIgcnk9IjAuOSIvPgoJCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iNzMuOCIgY3k9IjcwLjkiIHJ4PSIwLjkiIHJ5PSIwLjkiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBkPSJNOTYuNCw3MGMwLDMuNi0yLjksNi41LTYuNCw2LjVzLTYuNC0yLjktNi40LTYuNXMyLjktNi41LDYuNC02LjVTOTYuNCw2Ni40LDk2LjQsNzB6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTk2LjMsNjguNmMwLDAsMCwwLjEsMCwwLjFjLTAuOSwwLjEtMi45LDAuMS00LjYtMS4yYy0xLjEtMC44LTItMS43LTIuNi0yLjUKCQkJCWMtMC4zLTAuNC0wLjYtMC44LTAuNy0xLjFjLTAuMS0wLjEtMC4xLTAuMi0wLjEtMC4yYzAuNS0wLjEsMS4yLTAuMiwyLTAuMmMxLjIsMCwyLjUsMC4zLDMuNSwxLjFjMSwwLjgsMS43LDEuOCwyLjEsMi44CgkJCQlDOTYuMSw2Ny45LDk2LjIsNjguMyw5Ni4zLDY4LjZ6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTg0LDcyLjJjMCwwLDAtMC4xLDAtMC4xYzAuOS0wLjIsMi45LTAuNCw0LjcsMC42YzEuMSwwLjcsMS45LDEuNSwyLjQsMi4zCgkJCQljMC40LDAuNSwwLjYsMSwwLjcsMS4zYy0wLjQsMC4xLTEsMC4yLTEuNywwLjNjLTEsMC0yLjEtMC4xLTMuMi0wLjhzLTEuOS0xLjYtMi40LTIuNUM4NC4yLDcyLjgsODQuMSw3Mi40LDg0LDcyLjJ6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMTE2LjMsNjYuOGwtMS40LDJsLTAuOC0wLjhsLTAuNi0wLjdsMCwwLjlsLTAuMSw4LjJoLTYuOAoJCQkJbC0wLjEtOC4ybDAtMC45bC0wLjYsMC43bC0wLjgsMC44bC0xLjQtMmwyLjYtMi45YzAuMS0wLjEsMC4yLTAuMSwwLjMtMC4xaDEuM2wwLjQsMC43YzAuNywxLjMsMi42LDEuMywzLjMtMC4xbDAuMy0wLjZoMS4yCgkJCQljMC4xLDAsMC4yLDAsMC4zLDAuMWwwLjMtMC4zbC0wLjMsMC4zTDExNi4zLDY2Ljh6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTExMC4xLDY3LjdoMnYwLjljMCwwLjQtMC40LDAuNy0xLDAuN2MtMC42LDAtMS0wLjMtMS0wLjdMMTEwLjEsNjcuN0wxMTAuMSw2Ny43eiIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM2QUE5REQiIGQ9Ik0xMjYuOCw3NC4zYzAsMS4yLTEsMi4yLTIuMiwyLjJzLTIuMi0xLTIuMi0yLjJzMS0yLjIsMi4yLTIuMlMxMjYuOCw3My4xLDEyNi44LDc0LjN6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTEzNy42LDc0LjNjMCwxLjItMSwyLjItMi4yLDIuMmMtMS4yLDAtMi4yLTEtMi4yLTIuMnMxLTIuMiwyLjItMi4yCgkJCQlDMTM2LjYsNzIuMSwxMzcuNiw3My4xLDEzNy42LDc0LjN6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTEyNi44LDY0LjR2OS45Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTEzNy43LDY0LjR2OS45Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTEyNi44LDYzLjVoMTAuOHYyLjdoLTEwLjhDMTI2LjgsNjYuMiwxMjYuOCw2My41LDEyNi44LDYzLjV6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9IiM2QUE5REQiIGQ9Ik0xNzAuOCw2My4xTDE3MC44LDYzLjFjLTAuMywwLTAuNSwwLTAuOCwwYy0yLjEsMC00LDEtNS4zLDIuNWwtMC4xLDBsLTAuMS0wLjFsLTEtMS4ybC0wLjMsMy40bDMuNCwwLjMKCQkJCWwtMS4xLTEuM2wtMC4xLTAuMWwwLjEtMC4xYzEuMS0xLjQsMy0yLjMsNS0yLjFsMCwwYzMuMiwwLjMsNS41LDMuMSw1LjIsNi4zYy0wLjMsMy0zLjEsNS4zLTYuMSw1LjFjLTMuMS0wLjItNS40LTIuOS01LjMtNgoJCQkJbC0xLjMtMC4xYy0wLjIsMy44LDIuNiw3LjEsNi4zLDcuNGMzLjksMC4zLDcuMy0yLjYsNy42LTYuNUMxNzcuMiw2Ni44LDE3NC40LDYzLjUsMTcwLjgsNjMuMXoiLz4KCQkJPHBhdGggZmlsbD0iIzZBQTlERCIgZD0iTTE3MC4zLDY3LjRjMC0wLjMtMC4zLTAuNi0wLjYtMC42cy0wLjYsMC4zLTAuNiwwLjZ2My4yYzAsMC4yLDAuMSwwLjMsMC4yLDAuNGMwLjEsMC4xLDAuMywwLjIsMC40LDAuMgoJCQkJaDIuNGMwLjQsMCwwLjYtMC4zLDAuNi0wLjZTMTcyLjQsNzAsMTcyLDcwaC0xLjZoLTAuMnYtMC4yTDE3MC4zLDY3LjRMMTcwLjMsNjcuNHoiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBkPSJNMTg2LjIsNjMuNGg3LjdjMS41LDAsMi43LDEuMiwyLjcsMi43djcuN2MwLDEuNS0xLjIsMi43LTIuNywyLjdoLTcuNwoJCQkJYy0xLjUsMC0yLjctMS4yLTIuNy0yLjd2LTcuN0MxODMuNCw2NC43LDE4NC43LDYzLjQsMTg2LjIsNjMuNHoiLz4KCQkJPGVsbGlwc2UgZmlsbD0iIzZBQTlERCIgY3g9IjE4NiIgY3k9IjY4LjkiIHJ4PSIwLjciIHJ5PSIwLjciLz4KCQkJPGVsbGlwc2UgZmlsbD0iIzZBQTlERCIgY3g9IjE5NCIgY3k9IjY2LjciIHJ4PSIwLjciIHJ5PSIwLjciLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0xODYsNzMuM2wwLjQtMC4zYzAuNC0wLjMsMS0wLjMsMS41LTAuMWwxLDAuNAoJCQkJYzAuNSwwLjIsMSwwLjIsMS41LTAuMWwwLjgtMC41YzAuNC0wLjMsMS0wLjMsMS41LTAuMWwxLjgsMC44Ii8+CgkJPC9nPgoJPC9nPgoJPHBhdGggZmlsbD0iIzZBQTlERCIgc3Ryb2tlPSIjNkFBOUREIiBzdHJva2Utd2lkdGg9IjAuMjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTE1Niw2NC4zYy0wLjItMC4xLTAuNC0wLjEtMC41LDAKCQljMCwwLTAuMiwwLjEtMC45LDAuMmMtMC43LDAtMi40LTAuMS0zLjgtMC42Yy0wLjgtMC4zLTEuNy0wLjUtMi41LTAuNWMtMC4yLDAtMC40LDAtMC41LDBjLTEuMywwLTIuNSwwLjMtMy42LDEKCQljLTAuMiwwLjEtMC4yLDAuMi0wLjIsMC40djExLjZjMCwwLjMsMC4xLDAuNSwwLjMsMC41YzAuNiwwLDAuNS0wLjQsMC41LTAuNnYtNS43YzAuNy0wLjMsMy4yLTEuMSw1LjgtMC4xCgkJYzEuNiwwLjYsMy41LDAuNyw0LjMsMC43YzAuOCwwLDEuMy0wLjMsMS4zLTAuM2MwLjItMC4xLDAuMy0wLjIsMC4zLTAuNHYtNS43QzE1Ni4yLDY0LjYsMTU2LjEsNjQuNCwxNTYsNjQuM3ogTTE1NS42LDcwLjIKCQljLTAuMSwwLTAuNywwLjEtMSwwLjFjLTAuNywwLTIuNC0wLjEtMy44LTAuNmMtMi41LTEtNS0wLjUtNi4yLTAuMXYtNC45YzAuOS0wLjUsMi4yLTAuNywzLjItMC43YzAuMSwwLDAuMywwLDAuNCwwCgkJYzAuNywwLDEuNSwwLjIsMi4yLDAuNGMxLjYsMC42LDMuNSwwLjcsNC4zLDAuN2MwLjIsMCwwLjgsMCwxLTAuMVY3MC4yeiIvPgoJPGc+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBkPSJNNDguMSw2My41aDMuN2MyLjUsMCw0LjUsMiw0LjUsNC41YzAsMC41LTAuNCwwLjktMC45LDAuOUg0NC41Yy0wLjUsMC0wLjktMC40LTAuOS0wLjkKCQkJQzQzLjYsNjUuNSw0NS42LDYzLjUsNDguMSw2My41eiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSw2OC44Yy0wLjIsMC4xLTAuNSwxLjIsMCwxLjVjMS40LDAuOSw4LjUsMC44LDExLjMsMC42CgkJCWMwLjgtMC4xLDEuNi0wLjQsMS43LTEuMmMwLTAuMy0wLjEtMC42LTAuNi0wLjkiLz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM2QUE5REQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTQzLjUsNzAuNkw0My4zLDcxYy0wLjIsMC41LDAuMiwxLDAuNywwLjljMC4zLTAuMSwwLjUsMC4xLDAuNywwLjMKCQkJbDAuMSwwLjJjMC4zLDAuNSwxLDAuNiwxLjUsMC4ybDAsMGMwLjMtMC4yLDAuNy0wLjMsMS0wLjJsMC44LDAuM2MwLjQsMC4yLDAuOCwwLjEsMS4yLDBsMC41LTAuMmMwLjQtMC4yLDAuOS0wLjIsMS4zLDBsMC41LDAuMgoJCQljMC40LDAuMiwwLjgsMC4yLDEuMi0wLjFsMC4yLTAuMWMwLjMtMC4yLDAuOC0wLjIsMS4xLDAuMWwwLjIsMC4yYzAuMywwLjMsMC44LDAuMiwxLTAuMmwwLjEtMC4yYzAuMS0wLjIsMC0wLjMsMC4yLTAuMwoJCQljMC41LDAsMS4yLTAuMywxLjEtMC43bC0wLjQtMS4xIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik00My41LDcyLjJjLTAuMSwwLjItMC4zLDAuOCwwLDEuMWMwLjMsMC40LDMsMS4xLDYuNCwxLjEKCQkJYzIuMiwwLDQuNi0wLjMsNi0wLjZjMC41LTAuMSwwLjktMC40LDAuOC0wLjljMC0wLjItMC4yLTAuNS0wLjQtMC43Ii8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik00My41LDczLjNjMCwwLjUsMC42LDIuMywxLjMsMi43YzEuOCwwLjgsNS43LDAuNyw4LjEsMC41CgkJCWMxLjMtMC4xLDIuNS0wLjcsMy4yLTEuOGMwLjMtMC41LDAuNS0xLDAuNS0xLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iNTEuNiIgY3k9IjY2LjUiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iNTMiIGN5PSI2NSIgcng9IjAuMyIgcnk9IjAuNCIvPgoJCTxlbGxpcHNlIGZpbGw9IiM2QUE5REQiIGN4PSI1MyIgY3k9IjY3LjIiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iNTQuMyIgY3k9IjY2LjUiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iNTAuOSIgY3k9IjY1IiByeD0iMC4zIiByeT0iMC40Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM2QUE5REQiIGQ9Ik0yNC4yLDcxdi03LjZjMC4xLDAuMSwwLjgsMC45LDIuOCwzLjFjMi41LTEuNyw1LjYtMC43LDYuOSwwbDIuNC0zLjF2Ny4xCgkJCWMwLDEuMi0wLjEsMi41LTAuOSwzLjRjLTEsMS4yLTIuNywyLjUtNS4zLDIuNWMtMi45LDAtNC41LTEuNS01LjMtMi45QzI0LjIsNzIuOSwyNC4yLDcyLDI0LjIsNzF6Ii8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0yMS4yLDcwLjFsNS40LDEuMiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMjEuMiw3NC4xbDUuNC0xLjIiLz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM2QUE5REQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTM4LjgsNzAuMWwtNS40LDEuMiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMzguOCw3NC4xbC01LjQtMS4yIi8+CgkJPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiM2QUE5REQiIGQ9Ik0yOS41LDcyLjRMMjksNzEuN2MtMC4yLTAuMywwLTAuNiwwLjMtMC42aDEuNAoJCQljMC4zLDAsMC41LDAuNCwwLjMsMC42bC0wLjcsMWwwLDBjLTAuNywxLjItMi42LDEuMS0zLjEtMC4zbC0wLjEtMC4yYy0wLjEtMC4yLDAtMC40LDAuMi0wLjVjMC4yLTAuMSwwLjQsMCwwLjUsMC4ybDAuMSwwLjIKCQkJQzI4LjMsNzIuOCwyOS4xLDcyLjksMjkuNSw3Mi40eiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMzIuNCw3Mi4xbC0wLjEsMC4yYy0wLjQsMS0xLjgsMS4xLTIuMywwLjIiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iMjcuNiIgY3k9IjY5LjciIHJ4PSIwLjciIHJ5PSIwLjciLz4KCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iMzIuNCIgY3k9IjY5LjciIHJ4PSIwLjciIHJ5PSIwLjciLz4KCTwvZz4KPC9nPgo8Zz4KCTxwYXRoIGZpbGw9IiM4Njg2ODYiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTEyLjgsOS41YzAuNiwwLDEuMS0wLjUsMS4xLTEuMgoJCWMwLTAuNi0wLjUtMS4xLTEuMS0xLjFjLTAuNiwwLTEuMiwwLjUtMS4yLDEuMVMxMi4yLDkuNSwxMi44LDkuNXogTTEyLjgsNy45YzAuMiwwLDAuNCwwLjIsMC40LDAuNGMwLDAuMi0wLjIsMC40LTAuNCwwLjQKCQljLTAuMiwwLTAuNC0wLjItMC40LTAuNEMxMi40LDguMSwxMi42LDcuOSwxMi44LDcuOXoiLz4KCTxwYXRoIGZpbGw9IiM4Njg2ODYiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTcuMiw5LjVjMC42LDAsMS4yLTAuNSwxLjItMS4yCgkJYzAtMC42LTAuNS0xLjEtMS4yLTEuMWMtMC42LDAtMS4xLDAuNS0xLjEsMS4xUzYuNiw5LjUsNy4yLDkuNXogTTcuMiw3LjljMC4yLDAsMC40LDAuMiwwLjQsMC40YzAsMC4yLTAuMiwwLjQtMC40LDAuNAoJCUM3LDguNyw2LjgsOC41LDYuOCw4LjNDNi44LDguMSw3LDcuOSw3LjIsNy45eiIvPgoJPHBhdGggZmlsbD0iIzg2ODY4NiIgc3Ryb2tlPSIjODY4Njg2IiBzdHJva2Utd2lkdGg9IjAuMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTQuNiwxMS4yYy0wLjEtMC4xLTAuMi0wLjItMC4zLTAuMkg1LjcKCQljLTAuMSwwLTAuMiwwLjEtMC4zLDAuMmMtMC4xLDAuMS0wLjEsMC4yLDAsMC40YzAuNywyLDIuNSwzLjMsNC42LDMuM3MzLjktMS4zLDQuNi0zLjNDMTQuNywxMS40LDE0LjcsMTEuMywxNC42LDExLjJ6IE0xMCwxNC4xCgkJYy0xLjYsMC0zLTAuOS0zLjctMi4yaDcuM0MxMywxMy4yLDExLjYsMTQuMSwxMCwxNC4xeiIvPgoJPHBhdGggZmlsbD0iIzg2ODY4NiIgc3Ryb2tlPSIjODY4Njg2IiBzdHJva2Utd2lkdGg9IjAuMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTAsM2MtMy44LDAtNywzLjEtNyw3czMuMSw3LDcsN3M3LTMuMSw3LTcKCQlTMTMuOCwzLDEwLDN6IE0xMCwxNi4yYy0zLjQsMC02LjItMi44LTYuMi02LjJTNi42LDMuOCwxMCwzLjhzNi4yLDIuOCw2LjIsNi4yUzEzLjQsMTYuMiwxMCwxNi4yeiIvPgo8L2c+CjxnIGlkPSJDYXJfMDAwMDAwMTg5MzUzOTUwODU0MTM0MTM3NTAwMDAwMDA4MjUyNzM4Nzc4NDI3NzU3MTVfIj4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIGQ9Ik02NC4xLDEzLjRsMi4zLDBjMC4yLDAsMC40LDAuMiwwLjQsMC40djIuMWMwLDAuMi0wLjIsMC40LTAuNCwwLjRoLTIuMwoJCQkJYy0wLjIsMC0wLjQtMC4yLTAuNC0wLjR2LTIuMUM2My43LDEzLjYsNjMuOCwxMy40LDY0LjEsMTMuNHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBkPSJNNzMuNSwxMy40aDIuNGMwLjIsMCwwLjQsMC4yLDAuNCwwLjR2Mi4xYzAsMC4yLTAuMiwwLjQtMC40LDAuNGgtMi40CgkJCQljLTAuMiwwLTAuNC0wLjItMC40LTAuNGwwLTIuMUM3My4xLDEzLjYsNzMuMywxMy40LDczLjUsMTMuNHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBkPSJNNjMuNyw4LjRoMTIuNnY1SDYzLjdWOC40eiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIGQ9Ik02NS41LDMuNmg4LjljMSwwLDEuOSwwLjgsMS45LDEuOXYzLjFINjMuN1Y1LjVDNjMuNyw0LjQsNjQuNSwzLjYsNjUuNSwzLjZ6Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiM4Njg2ODYiIGN4PSI2Ni4yIiBjeT0iMTAuOSIgcng9IjAuOSIgcnk9IjAuOSIvPgoJCQk8ZWxsaXBzZSBmaWxsPSIjODY4Njg2IiBjeD0iNzMuOCIgY3k9IjEwLjkiIHJ4PSIwLjkiIHJ5PSIwLjkiLz4KCQk8L2c+Cgk8L2c+CjwvZz4KPGcgaWQ9IkFjdGl2aXRpZXMiPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgZD0iTTk2LjQsMTBjMCwzLjYtMi45LDYuNS02LjQsNi41cy02LjQtMi45LTYuNC02LjVzMi45LTYuNSw2LjQtNi41Uzk2LjQsNi40LDk2LjQsMTB6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgZD0iTTk2LjMsOC42YzAsMCwwLDAuMSwwLDAuMWMtMC45LDAuMS0yLjksMC4xLTQuNi0xLjJjLTEuMS0wLjgtMi0xLjctMi42LTIuNQoJCQkJYy0wLjMtMC40LTAuNi0wLjgtMC43LTEuMWMtMC4xLTAuMS0wLjEtMC4yLTAuMS0wLjJjMC41LTAuMSwxLjItMC4yLDItMC4yYzEuMiwwLDIuNSwwLjMsMy41LDEuMWMxLDAuOCwxLjcsMS44LDIuMSwyLjgKCQkJCUM5Ni4xLDcuOSw5Ni4yLDguMyw5Ni4zLDguNnoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBkPSJNODQsMTIuMWMwLDAsMC0wLjEsMC0wLjFjMC45LTAuMiwyLjktMC40LDQuNywwLjZjMS4xLDAuNiwxLjksMS41LDIuNCwyLjMKCQkJCWMwLjQsMC41LDAuNiwxLDAuNywxLjNjLTAuNCwwLjEtMSwwLjItMS43LDAuM2MtMSwwLTIuMS0wLjEtMy4yLTAuOGMtMS4xLTAuNi0xLjktMS42LTIuNC0yLjVDODQuMiwxMi44LDg0LjEsMTIuNCw4NCwxMi4xeiIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8ZyBpZD0iT2JqZWN0c18wMDAwMDA2NDMxMjM3MTczOTEzMDMxNTI1MDAwMDAxMDIyNTg4OTAzMjIyODYzMjk3NV8iPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMTE2LjMsNi44bC0xLjQsMkwxMTQuMSw4bC0wLjYtMC43bDAsMC45bC0wLjEsOC4yaC02LjhsLTAuMS04LjIKCQkJCWwwLTAuOUwxMDUuOSw4bC0wLjgsMC44bC0xLjQtMmwyLjYtMi45YzAuMS0wLjEsMC4yLTAuMSwwLjMtMC4xaDEuM2wwLjQsMC43YzAuNywxLjMsMi42LDEuMywzLjMtMC4xbDAuMy0wLjZoMS4yCgkJCQljMC4xLDAsMC4yLDAsMC4zLDAuMWwwLjMtMC4zbC0wLjMsMC4zTDExNi4zLDYuOHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBkPSJNMTEwLjEsNy43aDJ2MC45YzAsMC40LTAuNCwwLjctMSwwLjdjLTAuNiwwLTEtMC4zLTEtMC43TDExMC4xLDcuN0wxMTAuMSw3Ljd6Ii8+CgkJPC9nPgoJPC9nPgo8L2c+CjxnIGlkPSJTeW1ib2xzXzAwMDAwMDk2NzQ2OTA3ODY5OTI5OTIxMTgwMDAwMDA2NDg0ODEyODMwMjgyNTgyNDE2XyI+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBkPSJNMTI2LjgsMTQuM2MwLDEuMi0xLDIuMi0yLjIsMi4ycy0yLjItMS0yLjItMi4yczEtMi4yLDIuMi0yLjJTMTI2LjgsMTMuMSwxMjYuOCwxNC4zeiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIGQ9Ik0xMzcuNiwxNC4zYzAsMS4yLTEsMi4yLTIuMiwyLjJjLTEuMiwwLTIuMi0xLTIuMi0yLjJzMS0yLjIsMi4yLTIuMgoJCQkJQzEzNi42LDEyLjEsMTM3LjYsMTMuMSwxMzcuNiwxNC4zeiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIGQ9Ik0xMjYuOCw0LjR2OS45Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgZD0iTTEzNy43LDQuNHY5LjkiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBkPSJNMTI2LjgsMy41aDEwLjh2Mi43aC0xMC44QzEyNi44LDYuMiwxMjYuOCwzLjUsMTI2LjgsMy41eiIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8ZyBpZD0iUmVjZW50cyI+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0iIzg2ODY4NiIgZD0iTTE3MC44LDMuMUwxNzAuOCwzLjFjLTAuMywwLTAuNSwwLTAuOCwwYy0yLjEsMC00LDEtNS4zLDIuNWwtMC4xLDBsLTAuMS0wLjFsLTEtMS4ybC0wLjMsMy40bDMuNCwwLjMKCQkJCWwtMS4xLTEuM2wtMC4xLTAuMWwwLjEtMC4xYzEuMS0xLjQsMy0yLjMsNS0yLjFsMCwwYzMuMiwwLjMsNS41LDMuMSw1LjIsNi4zYy0wLjMsMy0zLjEsNS4zLTYuMSw1LjFjLTMuMS0wLjItNS40LTIuOS01LjMtNgoJCQkJTDE2Myw5LjVjLTAuMiwzLjgsMi42LDcuMSw2LjMsNy40YzMuOSwwLjQsNy4zLTIuNiw3LjYtNi41QzE3Ny4yLDYuOCwxNzQuNCwzLjUsMTcwLjgsMy4xeiIvPgoJCQk8cGF0aCBmaWxsPSIjODY4Njg2IiBkPSJNMTcwLjMsNy40YzAtMC4zLTAuMy0wLjYtMC42LTAuNlMxNjksNy4xLDE2OSw3LjR2My4yYzAsMC4yLDAuMSwwLjMsMC4yLDAuNGMwLjEsMC4xLDAuMywwLjIsMC40LDAuMgoJCQkJaDIuNGMwLjQsMCwwLjYtMC4zLDAuNi0wLjZzLTAuMy0wLjYtMC42LTAuNmgtMS42aC0wLjJWOS44TDE3MC4zLDcuNEwxNzAuMyw3LjR6Ii8+CgkJPC9nPgoJPC9nPgo8L2c+CjxnIGlkPSJDdXN0b21fMDAwMDAxODEwODcyMjk0MzQzMDIzMzY3ODAwMDAwMDUxNTIyNzc5NDU5NDA2NzQ0ODhfIj4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIGQ9Ik0xODYuMiwzLjRoNy43YzEuNSwwLDIuNywxLjIsMi43LDIuN3Y3LjdjMCwxLjUtMS4yLDIuNy0yLjcsMi43aC03LjcKCQkJCWMtMS41LDAtMi43LTEuMi0yLjctMi43VjYuMUMxODMuNCw0LjYsMTg0LjcsMy40LDE4Ni4yLDMuNHoiLz4KCQkJPGVsbGlwc2UgZmlsbD0iIzg2ODY4NiIgY3g9IjE4NiIgY3k9IjguOSIgcng9IjAuNyIgcnk9IjAuNyIvPgoJCQk8ZWxsaXBzZSBmaWxsPSIjODY4Njg2IiBjeD0iMTk0IiBjeT0iNi43IiByeD0iMC43IiByeT0iMC43Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMTg2LDEzLjNsMC40LTAuM2MwLjQtMC4zLDEtMC4zLDEuNS0wLjFsMSwwLjQKCQkJCWMwLjUsMC4yLDEsMC4yLDEuNS0wLjFsMC44LTAuNWMwLjQtMC4zLDEtMC4zLDEuNS0wLjFsMS44LDAuOCIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8cGF0aCBmaWxsPSIjODY4Njg2IiBzdHJva2U9IiM4Njg2ODYiIHN0cm9rZS13aWR0aD0iMC4yNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTU2LDQuM2MtMC4yLTAuMS0wLjQtMC4xLTAuNSwwCgljMCwwLTAuMiwwLjEtMC45LDAuMWMtMC43LDAtMi40LTAuMS0zLjgtMC42Yy0wLjgtMC4zLTEuNy0wLjUtMi41LTAuNWMtMC4yLDAtMC40LDAtMC41LDBjLTEuMywwLTIuNSwwLjMtMy42LDEKCWMtMC4yLDAuMS0wLjIsMC4yLTAuMiwwLjR2MTEuNmMwLDAuMywwLjEsMC41LDAuMywwLjVjMC42LDAsMC41LTAuNCwwLjUtMC42di01LjdjMC43LTAuMywzLjItMS4xLDUuOC0wLjFjMS42LDAuNiwzLjUsMC43LDQuMywwLjcKCWMwLjgsMCwxLjMtMC4zLDEuMy0wLjNjMC4yLTAuMSwwLjMtMC4yLDAuMy0wLjRWNC43QzE1Ni4yLDQuNSwxNTYuMSw0LjQsMTU2LDQuM3ogTTE1NS42LDEwLjJjLTAuMSwwLTAuNywwLjEtMSwwLjEKCWMtMC43LDAtMi40LTAuMS0zLjgtMC42Yy0yLjUtMS01LTAuNS02LjItMC4xVjQuN2MwLjktMC41LDIuMi0wLjcsMy4yLTAuN2MwLjEsMCwwLjMsMCwwLjQsMGMwLjcsMCwxLjUsMC4yLDIuMiwwLjQKCWMxLjYsMC42LDMuNSwwLjcsNC4zLDAuN2MwLjIsMCwwLjgsMCwxLTAuMVYxMC4yeiIvPgo8ZyBpZD0iRm9vZCI+Cgk8ZyBpZD0iTGF5ZXJfMTIiPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIGQ9Ik00OC4xLDMuNWgzLjdjMi41LDAsNC41LDIsNC41LDQuNWMwLDAuNS0wLjQsMC45LTAuOSwwLjlINDQuNWMtMC41LDAtMC45LTAuNC0wLjktMC45CgkJCQlDNDMuNiw1LjUsNDUuNiwzLjUsNDguMSwzLjV6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSw4LjdjLTAuMiwwLjEtMC41LDEuMiwwLDEuNWMxLjQsMC45LDguNSwwLjgsMTEuMywwLjYKCQkJCWMwLjgtMC4xLDEuNi0wLjQsMS43LTEuMmMwLTAuMy0wLjEtMC42LTAuNi0wLjkiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik00My41LDEwLjZMNDMuMywxMWMtMC4yLDAuNSwwLjIsMSwwLjcsMC45CgkJCQljMC4zLTAuMSwwLjUsMC4xLDAuNywwLjNsMC4xLDAuMmMwLjMsMC41LDEsMC42LDEuNSwwLjJsMCwwYzAuMy0wLjIsMC43LTAuMywxLTAuMmwwLjgsMC4zYzAuNCwwLjEsMC44LDAuMSwxLjIsMGwwLjUtMC4yCgkJCQljMC40LTAuMiwwLjktMC4yLDEuMywwbDAuNSwwLjJjMC40LDAuMiwwLjgsMC4xLDEuMi0wLjFsMC4yLTAuMWMwLjMtMC4yLDAuOC0wLjEsMS4xLDAuMWwwLjIsMC4yYzAuMywwLjMsMC44LDAuMiwxLTAuMmwwLjEtMC4yCgkJCQljMC4xLTAuMiwwLTAuMywwLjItMC40YzAuNSwwLDEuMi0wLjMsMS4xLTAuN2wtMC40LTEuMSIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTQzLjUsMTIuMWMtMC4xLDAuMi0wLjMsMC44LDAsMS4xYzAuMywwLjQsMywxLjEsNi40LDEuMQoJCQkJYzIuMiwwLDQuNi0wLjMsNi0wLjZjMC41LTAuMSwwLjktMC40LDAuOC0wLjljMC0wLjItMC4yLTAuNS0wLjQtMC43Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSwxMy4zYzAsMC41LDAuNiwyLjQsMS4zLDIuNmMxLjgsMC44LDUuNywwLjcsOC4xLDAuNQoJCQkJYzEuMy0wLjEsMi41LTAuNywzLjItMS44YzAuMy0wLjUsMC41LTEsMC41LTEuNCIvPgoJCQk8ZWxsaXBzZSBmaWxsPSIjODY4Njg2IiBjeD0iNTEuNiIgY3k9IjYuNSIgcng9IjAuMyIgcnk9IjAuNCIvPgoJCQk8ZWxsaXBzZSBmaWxsPSIjODY4Njg2IiBjeD0iNTMiIGN5PSI0LjkiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQkJPGVsbGlwc2UgZmlsbD0iIzg2ODY4NiIgY3g9IjUzIiBjeT0iNy4yIiByeD0iMC4zIiByeT0iMC40Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiM4Njg2ODYiIGN4PSI1NC4zIiBjeT0iNi41IiByeD0iMC4zIiByeT0iMC40Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiM4Njg2ODYiIGN4PSI1MC45IiBjeT0iNC45IiByeD0iMC4zIiByeT0iMC40Ii8+CgkJPC9nPgoJPC9nPgo8L2c+CjxnIGlkPSJBbmltYWxzIj4KCTxnPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgZD0iTTI0LjIsMTFWMy41YzAuMSwwLjEsMC44LDAuOSwyLjgsMy4xYzIuNS0xLjcsNS42LTAuNyw2LjksMGwyLjQtMy4xdjcuMQoJCQljMCwxLjItMC4xLDIuNS0wLjksMy40Yy0xLDEuMi0yLjcsMi41LTUuMywyLjVjLTIuOSwwLTQuNS0xLjUtNS4zLTIuOUMyNC4yLDEyLjksMjQuMiwxMS45LDI0LjIsMTF6Ii8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0yMS4yLDEwbDUuNCwxLjIiLz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTIxLjIsMTQuMWw1LjQtMS4yIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0zOC44LDEwbC01LjQsMS4yIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0zOC44LDE0LjFsLTUuNC0xLjIiLz4KCQk8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzg2ODY4NiIgZD0iTTI5LjUsMTIuNEwyOSwxMS43Yy0wLjItMC4zLDAtMC42LDAuMy0wLjZoMS40CgkJCWMwLjMsMCwwLjUsMC40LDAuMywwLjZsLTAuNywxbDAsMGMtMC43LDEuMi0yLjYsMS4xLTMuMS0wLjNsLTAuMS0wLjJjLTAuMS0wLjIsMC0wLjQsMC4yLTAuNXMwLjQsMCwwLjUsMC4ybDAuMSwwLjIKCQkJQzI4LjMsMTIuNywyOS4xLDEyLjksMjkuNSwxMi40eiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMzIuNCwxMi4xbC0wLjEsMC4yYy0wLjQsMS0xLjgsMS4xLTIuMywwLjIiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjODY4Njg2IiBjeD0iMjcuNiIgY3k9IjkuNyIgcng9IjAuNyIgcnk9IjAuNyIvPgoJCTxlbGxpcHNlIGZpbGw9IiM4Njg2ODYiIGN4PSIzMi40IiBjeT0iOS43IiByeD0iMC43IiByeT0iMC43Ii8+Cgk8L2c+CjwvZz4KPC9zdmc+";function iD(e){var a,r=e.isActiveCategory,o=e.category,l=e.allowNavigation,u=e.categoryConfig,h=e.onClick;return m.createElement(df,{tabIndex:l?0:-1,className:Me(fD.catBtn,ur.categoryBtn,"epr-icn-"+o,(a={},a[be.active]=r,a)),onClick:h,"aria-label":L3(u),"aria-selected":r,role:"tab","aria-controls":"epr-category-nav-id"})}var R4={backgroundPositionY:"calc(var(--epr-category-navigation-button-size) * 3)"},oD={backgroundPositionY:"calc(var(--epr-category-navigation-button-size) * 2)"},O4={":not(.epr-search-active)":{catBtn:{":hover":R4,"&.epr-active":R4}}},fD=$e.create(He({catBtn:{".":"epr-cat-btn",display:"inline-block",transition:"opacity 0.2s ease-in-out",position:"relative",height:"var(--epr-category-navigation-button-size)",width:"var(--epr-category-navigation-button-size)",backgroundSize:"calc(var(--epr-category-navigation-button-size) * 10)",outline:"none",backgroundPosition:"0 0",backgroundImage:"url("+rD+")",":focus:before":{content:"",position:"absolute",top:"-2px",left:"-2px",right:"-2px",bottom:"-2px",border:"2px solid var(--epr-category-icon-active-color)",borderRadius:"50%"},"&.epr-icn-suggested":{backgroundPositionX:"calc(var(--epr-category-navigation-button-size) * -8)"},"&.epr-icn-custom":{backgroundPositionX:"calc(var(--epr-category-navigation-button-size) * -9)"},"&.epr-icn-activities":{backgroundPositionX:"calc(var(--epr-category-navigation-button-size) * -4)"},"&.epr-icn-animals_nature":{backgroundPositionX:"calc(var(--epr-category-navigation-button-size) * -1)"},"&.epr-icn-flags":{backgroundPositionX:"calc(var(--epr-category-navigation-button-size) * -7)"},"&.epr-icn-food_drink":{backgroundPositionX:"calc(var(--epr-category-navigation-button-size) * -2)"},"&.epr-icn-objects":{backgroundPositionX:"calc(var(--epr-category-navigation-button-size) * -5)"},"&.epr-icn-smileys_people":{backgroundPositionX:"0px"},"&.epr-icn-symbols":{backgroundPositionX:"calc(var(--epr-category-navigation-button-size) * -6)"},"&.epr-icn-travel_places":{backgroundPositionX:"calc(var(--epr-category-navigation-button-size) * -3)"}}},Ta("catBtn",oD),{".epr-dark-theme":He({},O4),".epr-auto-theme":He({},O4)}));function sD(){var e=m.useState(null),a=e[0],r=e[1],o=nD();tD(r);var l=Kl(),u=z3(),h=G1(),b=aD();return m.createElement("div",{className:Me(lD.nav),role:"tablist","aria-label":"Category navigation",id:"epr-category-nav-id",ref:h},u.map(function(p){var y=R1(p),v=y===a;if(vI(p)&&b)return null;var x=!l&&!v;return m.createElement(iD,{key:y,category:y,isActiveCategory:v,allowNavigation:x,categoryConfig:p,onClick:function(){r(y),o(y)}})}))}var lD=$e.create({nav:{".":"epr-category-nav",display:"flex",flexDirection:"row",justifyContent:"space-around",padding:"var(--epr-header-padding)"},".epr-search-active":{nav:{opacity:"0.3",cursor:"default",pointerEvents:"none"}},".epr-main:has(input:not(:placeholder-shown))":{nav:{opacity:"0.3",cursor:"default",pointerEvents:"none"}}}),Lw="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjgwcHgiIHZpZXdCb3g9IjAgMCAyMCA4MCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjAgODAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsPSIjODY4Njg2IiBkPSJNNi45OCwxMy41OWMwLjEsMC4xLDAuMjQsMC4xNSwwLjM3LDAuMTVzMC4yNy0wLjA1LDAuMzctMC4xNWwyLjQyLTIuNDJsMi40MywyLjQzCgljMC4xLDAuMSwwLjI0LDAuMTUsMC4zNywwLjE1YzAuMTQsMCwwLjI3LTAuMDUsMC4zNy0wLjE1YzAuMjEtMC4yMSwwLjIxLTAuNTQsMC0wLjc1bC0yLjQzLTIuNDNMMTMuMzIsOAoJYzAuMjEtMC4yMSwwLjIxLTAuNTQsMC0wLjc1Yy0wLjIxLTAuMjEtMC41NC0wLjIxLTAuNzUsMGwtMi40MiwyLjQyTDcuNzQsNy4yN2MtMC4yMS0wLjIxLTAuNTQtMC4yMS0wLjc1LDAKCWMtMC4yMSwwLjIxLTAuMjEsMC41NCwwLDAuNzVsMi40MSwyLjQxbC0yLjQyLDIuNDJDNi43NywxMy4wNSw2Ljc3LDEzLjM5LDYuOTgsMTMuNTlMNi45OCwxMy41OXoiLz4KPHBhdGggZmlsbD0iIzg2ODY4NiIgZD0iTTEwLjE1LDE4LjQzYzQuNDEsMCw4LTMuNTksOC04YzAtNC40MS0zLjU5LTgtOC04Yy00LjQxLDAtOCwzLjU5LTgsOEMyLjE1LDE0Ljg0LDUuNzQsMTguNDMsMTAuMTUsMTguNDN6CgkgTTEwLjE1LDMuNDljMy44MywwLDYuOTQsMy4xMSw2Ljk0LDYuOTRjMCwzLjgzLTMuMTEsNi45NC02Ljk0LDYuOTRjLTMuODMsMC02Ljk0LTMuMTEtNi45NC02Ljk0QzMuMjEsNi42LDYuMzMsMy40OSwxMC4xNSwzLjQ5CglMMTAuMTUsMy40OXoiLz4KPHBhdGggZmlsbD0iIzMzNzFCNyIgZD0iTTYuOTgsMzMuNTljMC4xLDAuMSwwLjI0LDAuMTUsMC4zNywwLjE1czAuMjctMC4wNSwwLjM3LTAuMTVsMi40Mi0yLjQybDIuNDMsMi40MwoJYzAuMSwwLjEsMC4yNCwwLjE1LDAuMzcsMC4xNWMwLjE0LDAsMC4yNy0wLjA1LDAuMzctMC4xNWMwLjIxLTAuMjEsMC4yMS0wLjU0LDAtMC43NWwtMi40My0yLjQzTDEzLjMyLDI4CgljMC4yMS0wLjIxLDAuMjEtMC41NCwwLTAuNzVjLTAuMjEtMC4yMS0wLjU0LTAuMjEtMC43NSwwbC0yLjQyLDIuNDJsLTIuNDEtMi40MWMtMC4yMS0wLjIxLTAuNTQtMC4yMS0wLjc1LDAKCWMtMC4yMSwwLjIxLTAuMjEsMC41NCwwLDAuNzVsMi40MSwyLjQxbC0yLjQyLDIuNDJDNi43NywzMy4wNSw2Ljc3LDMzLjM5LDYuOTgsMzMuNTlMNi45OCwzMy41OXoiLz4KPHBhdGggZmlsbD0iIzMzNzFCNyIgZD0iTTEwLjE1LDM4LjQzYzQuNDEsMCw4LTMuNTksOC04YzAtNC40MS0zLjU5LTgtOC04Yy00LjQxLDAtOCwzLjU5LTgsOEMyLjE1LDM0Ljg0LDUuNzQsMzguNDMsMTAuMTUsMzguNDN6CgkgTTEwLjE1LDIzLjQ5YzMuODMsMCw2Ljk0LDMuMTEsNi45NCw2Ljk0YzAsMy44My0zLjExLDYuOTQtNi45NCw2Ljk0Yy0zLjgzLDAtNi45NC0zLjExLTYuOTQtNi45NAoJQzMuMjEsMjYuNiw2LjMzLDIzLjQ5LDEwLjE1LDIzLjQ5TDEwLjE1LDIzLjQ5eiIvPgo8cGF0aCBmaWxsPSIjQzBDMEJGIiBkPSJNNi45OCw1My41OWMwLjEsMC4xLDAuMjQsMC4xNSwwLjM3LDAuMTVzMC4yNy0wLjA1LDAuMzctMC4xNWwyLjQyLTIuNDJsMi40MywyLjQzCgljMC4xLDAuMSwwLjI0LDAuMTUsMC4zNywwLjE1YzAuMTQsMCwwLjI3LTAuMDUsMC4zNy0wLjE1YzAuMjEtMC4yMSwwLjIxLTAuNTQsMC0wLjc1bC0yLjQzLTIuNDNMMTMuMzIsNDgKCWMwLjIxLTAuMjEsMC4yMS0wLjU0LDAtMC43NWMtMC4yMS0wLjIxLTAuNTQtMC4yMS0wLjc1LDBsLTIuNDIsMi40MmwtMi40MS0yLjQxYy0wLjIxLTAuMjEtMC41NC0wLjIxLTAuNzUsMAoJYy0wLjIxLDAuMjEtMC4yMSwwLjU0LDAsMC43NWwyLjQxLDIuNDFsLTIuNDIsMi40MkM2Ljc3LDUzLjA1LDYuNzcsNTMuMzksNi45OCw1My41OUw2Ljk4LDUzLjU5eiIvPgo8cGF0aCBmaWxsPSIjQzBDMEJGIiBkPSJNMTAuMTUsNTguNDNjNC40MSwwLDgtMy41OSw4LThjMC00LjQxLTMuNTktOC04LThjLTQuNDEsMC04LDMuNTktOCw4QzIuMTUsNTQuODQsNS43NCw1OC40MywxMC4xNSw1OC40M3oKCSBNMTAuMTUsNDMuNDljMy44MywwLDYuOTQsMy4xMSw2Ljk0LDYuOTRjMCwzLjgzLTMuMTEsNi45NC02Ljk0LDYuOTRjLTMuODMsMC02Ljk0LTMuMTEtNi45NC02Ljk0CglDMy4yMSw0Ni42LDYuMzMsNDMuNDksMTAuMTUsNDMuNDlMMTAuMTUsNDMuNDl6Ii8+CjxwYXRoIGZpbGw9IiM2QUE5REQiIGQ9Ik02Ljk4LDczLjU5YzAuMSwwLjEsMC4yNCwwLjE1LDAuMzcsMC4xNXMwLjI3LTAuMDUsMC4zNy0wLjE1bDIuNDItMi40MmwyLjQzLDIuNDMKCWMwLjEsMC4xLDAuMjQsMC4xNSwwLjM3LDAuMTVjMC4xNCwwLDAuMjctMC4wNSwwLjM3LTAuMTVjMC4yMS0wLjIxLDAuMjEtMC41NCwwLTAuNzVsLTIuNDMtMi40M0wxMy4zMiw2OAoJYzAuMjEtMC4yMSwwLjIxLTAuNTQsMC0wLjc1Yy0wLjIxLTAuMjEtMC41NC0wLjIxLTAuNzUsMGwtMi40MiwyLjQybC0yLjQxLTIuNDFjLTAuMjEtMC4yMS0wLjU0LTAuMjEtMC43NSwwCgljLTAuMjEsMC4yMS0wLjIxLDAuNTQsMCwwLjc1bDIuNDEsMi40MWwtMi40MiwyLjQyQzYuNzcsNzMuMDUsNi43Nyw3My4zOSw2Ljk4LDczLjU5TDYuOTgsNzMuNTl6Ii8+CjxwYXRoIGZpbGw9IiM2QUE5REQiIGQ9Ik0xMC4xNSw3OC40M2M0LjQxLDAsOC0zLjU5LDgtOGMwLTQuNDEtMy41OS04LTgtOGMtNC40MSwwLTgsMy41OS04LDhDMi4xNSw3NC44NCw1Ljc0LDc4LjQzLDEwLjE1LDc4LjQzegoJIE0xMC4xNSw2My40OWMzLjgzLDAsNi45NCwzLjExLDYuOTQsNi45NGMwLDMuODMtMy4xMSw2Ljk0LTYuOTQsNi45NGMtMy44MywwLTYuOTQtMy4xMS02Ljk0LTYuOTQKCUMzLjIxLDY2LjYsNi4zMyw2My40OSwxMC4xNSw2My40OUwxMC4xNSw2My40OXoiLz4KPC9zdmc+";function cD(){var e=X3();return m.createElement(df,{className:Me(B4.btnClearSearch,ur.visibleOnSearchOnly),onClick:e,"aria-label":"Clear",title:"Clear"},m.createElement("div",{className:Me(B4.icnClearnSearch)}))}var uD={":hover":{"> .epr-icn-clear-search":{backgroundPositionY:"-60px"}}},B4=$e.create(He({btnClearSearch:{".":"epr-btn-clear-search",position:"absolute",right:"var(--epr-search-bar-inner-padding)",height:"30px",width:"30px",display:"flex",alignItems:"center",justifyContent:"center",top:"50%",transform:"translateY(-50%)",padding:"0",borderRadius:"50%",":hover":{background:"var(--epr-hover-bg-color)"},":focus":{background:"var(--epr-hover-bg-color)"}},icnClearnSearch:{".":"epr-icn-clear-search",backgroundColor:"transparent",backgroundRepeat:"no-repeat",backgroundSize:"20px",height:"20px",width:"20px",backgroundImage:"url("+Lw+")",":hover":{backgroundPositionY:"-20px"},":focus":{backgroundPositionY:"-20px"}}},Ta("icnClearnSearch",{backgroundPositionY:"-40px"}),Ta("btnClearSearch",uD))),s0=jt(be.emojiPicker)+" "+jt(be.emojiList),Sw=["button",jt(be.emoji)].join(""),dD=jt(be.category);function hD(e){var a=e.value;if(!a)return null;var r=mD(a);return m.createElement("style",null,`
    `+s0+" "+Sw+` {
      display: none;
    }


    `+s0+" "+r+` {
      display: flex;
    }

    `+s0+" "+dD+":not(:has("+r+`)) {
      display: none;
    }
  `)}function mD(e){return[Sw,'[data-full-name*="',a1(e),'"]'].join("")}var gD="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjQwcHgiIHZpZXdCb3g9IjAgMCAyMCA0MCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjAgNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzg2ODY4NiIgZD0iTTEyLDguODFjMCwyLjA4LTEuNjgsMy43Ni0zLjc2LDMuNzZjLTIuMDgsMC0zLjc2LTEuNjgtMy43Ni0zLjc2CgljMC0yLjA4LDEuNjgtMy43NiwzLjc2LTMuNzZDMTAuMzIsNS4wNSwxMiw2LjczLDEyLDguODF6IE0xMS4yMywxMi43MmMtMC44MywwLjY0LTEuODcsMS4wMS0yLjk5LDEuMDFjLTIuNzIsMC00LjkyLTIuMi00LjkyLTQuOTIKCWMwLTIuNzIsMi4yLTQuOTIsNC45Mi00LjkyYzIuNzIsMCw0LjkyLDIuMiw0LjkyLDQuOTJjMCwxLjEzLTAuMzgsMi4xNi0xLjAxLDIuOTlsMy45NCwzLjkzYzAuMjUsMC4yNSwwLjI1LDAuNjYsMCwwLjkyCgljLTAuMjUsMC4yNS0wLjY2LDAuMjUtMC45MiwwTDExLjIzLDEyLjcyeiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI0MwQzBCRiIgZD0iTTEyLDI4LjgxYzAsMi4wOC0xLjY4LDMuNzYtMy43NiwzLjc2Yy0yLjA4LDAtMy43Ni0xLjY4LTMuNzYtMy43NgoJYzAtMi4wOCwxLjY4LTMuNzYsMy43Ni0zLjc2QzEwLjMyLDI1LjA1LDEyLDI2LjczLDEyLDI4LjgxeiBNMTEuMjMsMzIuNzJjLTAuODMsMC42NC0xLjg3LDEuMDEtMi45OSwxLjAxCgljLTIuNzIsMC00LjkyLTIuMi00LjkyLTQuOTJjMC0yLjcyLDIuMi00LjkyLDQuOTItNC45MmMyLjcyLDAsNC45MiwyLjIsNC45Miw0LjkyYzAsMS4xMy0wLjM4LDIuMTYtMS4wMSwyLjk5bDMuOTQsMy45MwoJYzAuMjUsMC4yNSwwLjI1LDAuNjYsMCwwLjkyYy0wLjI1LDAuMjUtMC42NiwwLjI1LTAuOTIsMEwxMS4yMywzMi43MnoiLz4KPC9zdmc+";function pD(){return m.createElement("div",{className:Me(yD.icnSearch)})}var yD=$e.create(He({icnSearch:{".":"epr-icn-search",content:"",position:"absolute",top:"50%",left:"var(--epr-search-bar-inner-padding)",transform:"translateY(-50%)",width:"20px",height:"20px",backgroundRepeat:"no-repeat",backgroundPosition:"0 0",backgroundSize:"20px",backgroundImage:"url("+gD+")"}},Ta("icnSearch",{backgroundPositionY:"-20px"})));function bD(){var e=O3(),a=$1();return e?null:m.createElement(Mw,{className:Me(ul.overlay)},m.createElement(wD,null),a?m.createElement(jw,null):null)}function wD(){var e=m.useState(0),a=e[0],r=e[1],o=mr(),l=za(),u=XT(),h=KT(),b=UN(),p=b.statusSearchResults,y=b.searchTerm,v=b.onChange,x=l==null?void 0:l.current,j=x==null?void 0:x.value;return m.createElement(oc,{className:Me(ul.searchContainer)},m.createElement(hD,{value:j}),m.createElement("input",{autoFocus:h,"aria-label":"Type to search for an emoji",onFocus:o,className:Me(ul.search),type:"text","aria-controls":"epr-search-id",placeholder:u,onChange:function(S){r(a+1),setTimeout(function(){var L,T;v((L=S==null||(T=S.target)==null?void 0:T.value)!=null?L:j)})},ref:l}),y?m.createElement("div",{role:"status",className:Me("epr-status-search-results",ul.visuallyHidden),"aria-live":"polite",id:"epr-search-id","aria-atomic":"true"},p):null,m.createElement(pD,null),m.createElement(cD,null))}var ul=$e.create(He({overlay:{padding:"var(--epr-header-padding)",zIndex:"var(--epr-header-overlay-z-index)"},searchContainer:{".":"epr-search-container",flex:"1",display:"block",minWidth:"0"},visuallyHidden:{clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",width:"1px"},search:{outline:"none",transition:"all 0.2s ease-in-out",color:"var(--epr-search-input-text-color)",borderRadius:"var(--epr-search-input-border-radius)",padding:"var(--epr-search-input-padding)",height:"var(--epr-search-input-height)",backgroundColor:"var(--epr-search-input-bg-color)",border:"1px solid var(--epr-search-input-bg-color)",width:"100%",":focus":{backgroundColor:"var(--epr-search-input-bg-color-active)",border:"1px solid var(--epr-search-border-color)"},"::placeholder":{color:"var(--epr-search-input-placeholder-color)"}},btnClearSearch:{".":"epr-btn-clear-search",position:"absolute",right:"var(--epr-search-bar-inner-padding)",height:"30px",width:"30px",display:"flex",alignItems:"center",justifyContent:"center",top:"50%",transform:"translateY(-50%)",padding:"0",borderRadius:"50%",":hover":{background:"var(--epr-hover-bg-color)"},":focus":{background:"var(--epr-hover-bg-color)"}},icnClearnSearch:{".":"epr-icn-clear-search",backgroundColor:"transparent",backgroundRepeat:"no-repeat",backgroundSize:"20px",height:"20px",width:"20px",backgroundImage:"url("+Lw+")",":hover":{backgroundPositionY:"-20px"},":focus":{backgroundPositionY:"-20px"}}},Ta("icnClearnSearch",{backgroundPositionY:"-40px"}),Ta("btnClearSearch",{":hover > .epr-icn-clear-search":{backgroundPositionY:"-60px"}})));function vD(){return m.createElement(oc,{className:Me("epr-header",ur.hiddenOnReactions)},m.createElement(bD,null),m.createElement(sD,null))}function xD(e){return m.createElement(xN,null,m.createElement(gT,null),m.createElement(FT,Object.assign({},e),m.createElement(MD,null)))}function MD(){var e=Xl(),a=e[0],r=D3(),o=m.useState(!a),l=o[0],u=o[1],h=tN();return m.useEffect(function(){a&&!r||l||u(!0)},[l,r,a]),h?m.createElement(rI,null,m.createElement(II,null),m.createElement(jD,{renderAll:l})):null}function jD(e){var a=e.renderAll;return a?m.createElement(m.Fragment,null,m.createElement(vD,null),m.createElement($I,null),m.createElement(WI,null)):null}var LD=m.memo(xD,x3),SD=function(e){dT(a,e);function a(o){var l;return l=e.call(this,o)||this,l.state={hasError:!1},l}a.getDerivedStateFromError=function(){return{hasError:!0}};var r=a.prototype;return r.componentDidCatch=function(l,u){console.error("Emoji Picker React failed to render:",l,u)},r.render=function(){return this.state.hasError?null:this.props.children},a}(m.Component);function Cw(e){var a=VT({onEmojiClick:e.onEmojiClick,onReactionClick:e.onReactionClick,onSkinToneChange:e.onSkinToneChange});return m.createElement(SD,null,m.createElement(N3.Provider,{value:a},m.createElement(LD,Object.assign({},e))))}const W1={mode:"dark",background:{primary:"#0d1117",secondary:"#161b22",thirdly:"#21262d",message:"#2d3748"},text:{primary:"#ffffff",secondary:"#e6edf3",thirdly:"#c9d1d9",placeholder:"#7d8590"},border:{primary:"#30363d",secondary:"#484f58"},buttons:{primary:"#6366f1",secondary:"#21262d",danger:"#f85149"},status:{success:"#3fb950",info:"#f0883e",danger:"#f85149"},shadow:{primary:"#00000020",secondary:"#00000040"}},kw={mode:"light",background:{primary:"#ffffff",secondary:"#f6f8fa",thirdly:"#eaeef2",message:"#dbeafe"},text:{primary:"#1f2328",secondary:"#656d76",thirdly:"#7c8b96",placeholder:"#9a9ea6"},border:{primary:"#d1d9e0",secondary:"#afb8c1"},buttons:{primary:"#6366f1",secondary:"#f6f8fa",danger:"#da3633"},status:{success:"#1a7f37",info:"#fb8500",danger:"#da3633"},shadow:{primary:"#0000000a",secondary:"#0000001a"}},Ew={mode:"clean-light",background:{primary:"#ffffff",secondary:"#f8fafc",thirdly:"#e2e8f0",message:"#eff6ff"},text:{primary:"#0f172a",secondary:"#475569",thirdly:"#64748b",placeholder:"#94a3b8"},border:{primary:"#cbd5e1",secondary:"#94a3b8"},buttons:{primary:"#3b82f6",secondary:"#f1f5f9",danger:"#ef4444"},status:{success:"#10b981",info:"#f59e0b",danger:"#ef4444"},shadow:{primary:"#0000000d",secondary:"#00000024"}},Tw={mode:"minimal-white",background:{primary:"#ffffff",secondary:"#fafafa",thirdly:"#f4f4f5",message:"#f8fafc"},text:{primary:"#18181b",secondary:"#3f3f46",thirdly:"#71717a",placeholder:"#a1a1aa"},border:{primary:"#e4e4e7",secondary:"#d4d4d8"},buttons:{primary:"#5b21b6",secondary:"#f4f4f5",danger:"#dc2626"},status:{success:"#059669",info:"#ea580c",danger:"#dc2626"},shadow:{primary:"#0000000a",secondary:"#00000018"}},Nw={mode:"modern-sky",background:{primary:"#f0f9ff",secondary:"#e0f2fe",thirdly:"#bae6fd",message:"#93c5fd"},text:{primary:"#0c4a6e",secondary:"#0369a1",thirdly:"#0284c7",placeholder:"#0ea5e9"},border:{primary:"#7dd3fc",secondary:"#38bdf8"},buttons:{primary:"#0284c7",secondary:"#e0f2fe",danger:"#dc2626"},status:{success:"#059669",info:"#ea580c",danger:"#dc2626"},shadow:{primary:"#0284c720",secondary:"#0284c740"}},Iw={mode:"soft-blush",background:{primary:"#fefcfc",secondary:"#fef2f2",thirdly:"#fecaca",message:"#f3e8ff"},text:{primary:"#374151",secondary:"#4b5563",thirdly:"#6b7280",placeholder:"#9ca3af"},border:{primary:"#fca5a5",secondary:"#f87171"},buttons:{primary:"#db2777",secondary:"#fef2f2",danger:"#dc2626"},status:{success:"#059669",info:"#ea580c",danger:"#dc2626"},shadow:{primary:"#db277720",secondary:"#db277740"}},Dw={mode:"clean-dark",background:{primary:"#0f172a",secondary:"#1e293b",thirdly:"#334155",message:"#475569"},text:{primary:"#f8fafc",secondary:"#e2e8f0",thirdly:"#cbd5e1",placeholder:"#64748b"},border:{primary:"#475569",secondary:"#64748b"},buttons:{primary:"#3b82f6",secondary:"#334155",danger:"#ef4444"},status:{success:"#10b981",info:"#f59e0b",danger:"#ef4444"},shadow:{primary:"#00000030",secondary:"#00000050"}},Aw={mode:"modern-charcoal",background:{primary:"#0a0a0a",secondary:"#171717",thirdly:"#262626",message:"#404040"},text:{primary:"#fafafa",secondary:"#e5e5e5",thirdly:"#d4d4d4",placeholder:"#737373"},border:{primary:"#404040",secondary:"#525252"},buttons:{primary:"#7c3aed",secondary:"#262626",danger:"#ef4444"},status:{success:"#22c55e",info:"#f59e0b",danger:"#ef4444"},shadow:{primary:"#00000040",secondary:"#00000060"}},zw={mode:"neo-dark",background:{primary:"#09090b",secondary:"#18181b",thirdly:"#27272a",message:"#3f3f46"},text:{primary:"#fafafa",secondary:"#e4e4e7",thirdly:"#d4d4d8",placeholder:"#71717a"},border:{primary:"#3f3f46",secondary:"#52525b"},buttons:{primary:"#8b5cf6",secondary:"#27272a",danger:"#f87171"},status:{success:"#4ade80",info:"#facc15",danger:"#f87171"},shadow:{primary:"#8b5cf630",secondary:"#8b5cf650"}},Rw={mode:"glass-night",background:{primary:"#0c1222",secondary:"#1a2332",thirdly:"#2a3441",message:"#374151"},text:{primary:"#ffffff",secondary:"#f3f4f6",thirdly:"#d1d5db",placeholder:"#6b7280"},border:{primary:"#374151",secondary:"#4b5563"},buttons:{primary:"#06b6d4",secondary:"#1a2332",danger:"#f87171"},status:{success:"#10b981",info:"#f59e0b",danger:"#f87171"},shadow:{primary:"#00000040",secondary:"#00000060"}},Ow={dark:W1,light:kw,"clean-light":Ew,"minimal-white":Tw,"modern-sky":Nw,"soft-blush":Iw,"clean-dark":Dw,"modern-charcoal":Aw,"neo-dark":zw,"glass-night":Rw},_4=Object.keys(Ow),Bw=m.createContext(void 0),CD=({children:e})=>{const[a,r]=m.useState(()=>{const h=localStorage.getItem("theme");return h&&_4.includes(h)?h:window.matchMedia("(prefers-color-scheme: dark)").matches?"glass-night":"minimal-white"}),o=Ow[a]||W1;m.useEffect(()=>{localStorage.setItem("theme",a)},[a]);const u={theme:o,themeMode:a,switchTheme:h=>{_4.includes(h)?r(h):console.warn(`Invalid theme: ${h}`)}};return s.jsx(Bw.Provider,{value:u,children:s.jsx(Qj,{theme:o,children:e})})},K1=()=>{const e=m.useContext(Bw);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e},kD=({recipientId:e})=>{const[a,r]=m.useState(""),[o,l]=m.useState(!1),[u,h]=m.useState(!1),[b,p]=m.useState(!1),[y,v]=m.useState(!1),{themeMode:x}=K1(),{sendMessage:j}=cr(),{socket:C}=ff(),S=m.useRef(null),L=m.useRef(null),T=m.useRef(null);m.useEffect(()=>{if(!(!C||!e))return a.trim()&&!b&&(p(!0),C.emit("typing_start_direct",{recipientId:e})),T.current&&clearTimeout(T.current),T.current=setTimeout(()=>{b&&(p(!1),C.emit("typing_stop_direct",{recipientId:e}))},2e3),()=>{T.current&&clearTimeout(T.current)}},[a,C,e,b]),m.useEffect(()=>()=>{T.current&&clearTimeout(T.current),b&&C&&e&&C.emit("typing_stop_direct",{recipientId:e})},[b,C,e]);const E=Q=>{var V;r(oe=>oe+Q.emoji),(V=L.current)==null||V.focus()},k=async()=>{var V;if(!a.trim()||!e||y)return;const Q=a.trim();r(""),v(!0),b&&(p(!1),C&&C.emit("typing_stop_direct",{recipientId:e}));try{await j(e,Q)}catch(oe){console.error("Failed to send message:",oe),r(Q)}finally{v(!1),(V=L.current)==null||V.focus()}},O=Q=>{Q.key==="Enter"&&!Q.shiftKey&&(Q.preventDefault(),k())},D=Q=>{r(Q.target.value)};m.useEffect(()=>{const Q=V=>{S.current&&!S.current.contains(V.target)&&l(!1)};return o&&document.addEventListener("mousedown",Q),()=>{document.removeEventListener("mousedown",Q)}},[o]);const N=[{label:"Photos & Videos",icon:s.jsx(Ub,{}),onClick:()=>{h(!1),alert("File upload not implemented yet")}},{label:"Document",icon:s.jsx(Bb,{}),onClick:()=>{h(!1),alert("Document upload not implemented yet")}}],z=x==="light"||x==="clean-light"||x==="minimal-white"||x==="modern-sky"||x==="soft-blush"?"light":"dark";return e?s.jsxs(U4,{children:[s.jsx(ID,{children:s.jsx(Y4,{onClick:()=>l(Q=>!Q),children:s.jsx(_b,{})})}),s.jsx(AD,{ref:S,isOpen:o,children:s.jsx(zD,{isOpen:o,children:s.jsx(Cw,{autoFocusSearch:!1,theme:z,lazyLoadEmojis:!0,onEmojiClick:E})})}),s.jsx(TD,{children:s.jsx("input",{ref:L,type:"text",placeholder:"Type a message",value:a,onChange:D,onKeyPress:O,disabled:y,autoFocus:!0})}),s.jsxs(DD,{children:[s.jsx(Ia,{onClose:()=>h(!1),isOpen:u,right:"1",top:"-160",items:N}),s.jsx(Y4,{onClick:()=>h(!0),children:s.jsx(Ab,{})}),a.trim()&&s.jsx(ND,{onClick:k,disabled:y,children:s.jsx(Db,{})})]})]}):s.jsx(U4,{children:s.jsx(ED,{children:"Select a conversation to start messaging"})})},U4=g.div`
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
`,ED=g.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.text.placeholder};
  font-size: var(--text-md);
`,TD=g.div`
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
`,Y4=g.div`
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
`,ND=g.button`
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
`,ID=g.div`
  width: max-content;
`,DD=g.div`
  width: max-content;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,AD=g.div`
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
`,zD=g.div`
  width: 100%;
`,RD=({groupId:e})=>{const[a,r]=m.useState(""),[o,l]=m.useState(!1),[u,h]=m.useState(!1),[b,p]=m.useState(!1),[y,v]=m.useState(!1),{themeMode:x}=K1(),{sendGroupMessage:j}=Da(),{socket:C}=ff(),S=m.useRef(null),L=m.useRef(null),T=m.useRef(null);m.useEffect(()=>{if(!(!C||!e))return a.trim()&&!b&&(p(!0),C.emit("typing_start_group",{groupId:e})),T.current&&clearTimeout(T.current),T.current=setTimeout(()=>{b&&(p(!1),C.emit("typing_stop_group",{groupId:e}))},2e3),()=>{T.current&&clearTimeout(T.current)}},[a,C,e,b]),m.useEffect(()=>()=>{T.current&&clearTimeout(T.current),b&&C&&e&&C.emit("typing_stop_group",{groupId:e})},[b,C,e]);const E=Q=>{var V;r(oe=>oe+Q.emoji),(V=L.current)==null||V.focus()},k=async()=>{var V;if(!a.trim()||!e||y)return;const Q=a.trim();r(""),v(!0),b&&(p(!1),C&&C.emit("typing_stop_group",{groupId:e}));try{await j(e,Q)}catch(oe){console.error("Failed to send group message:",oe),r(Q)}finally{v(!1),(V=L.current)==null||V.focus()}},O=Q=>{Q.key==="Enter"&&!Q.shiftKey&&(Q.preventDefault(),k())},D=Q=>{r(Q.target.value)};m.useEffect(()=>{const Q=V=>{S.current&&!S.current.contains(V.target)&&l(!1)};return o&&document.addEventListener("mousedown",Q),()=>{document.removeEventListener("mousedown",Q)}},[o]);const N=[{label:"Photos & Videos",icon:s.jsx(Ub,{}),onClick:()=>{h(!1),alert("File upload not implemented yet")}},{label:"Document",icon:s.jsx(Bb,{}),onClick:()=>{h(!1),alert("Document upload not implemented yet")}}],z=x==="light"||x==="clean-light"||x==="minimal-white"||x==="modern-sky"||x==="soft-blush"?"light":"dark";return e?s.jsxs(G4,{children:[s.jsx(UD,{children:s.jsx(Q4,{onClick:()=>l(Q=>!Q),children:s.jsx(_b,{})})}),s.jsx(GD,{ref:S,isOpen:o,children:s.jsx(QD,{isOpen:o,children:s.jsx(Cw,{autoFocusSearch:!1,theme:z,lazyLoadEmojis:!0,onEmojiClick:E})})}),s.jsx(BD,{children:s.jsx("input",{ref:L,type:"text",placeholder:"Type a message",value:a,onChange:D,onKeyPress:O,disabled:y})}),s.jsxs(YD,{children:[s.jsx(Ia,{onClose:()=>h(!1),isOpen:u,right:"1",top:"-160",items:N}),s.jsx(Q4,{onClick:()=>h(!0),children:s.jsx(Ab,{})}),a.trim()&&s.jsx(_D,{onClick:k,disabled:y,children:s.jsx(Db,{})})]})]}):s.jsx(G4,{children:s.jsx(OD,{children:"Select a group to start messaging"})})},G4=g.div`
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
`,OD=g.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.text.placeholder};
  font-size: var(--text-md);
`,BD=g.div`
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
`,Q4=g.div`
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
`,_D=g.button`
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
`,UD=g.div`
  width: max-content;
`,YD=g.div`
  width: max-content;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,GD=g.div`
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
`,QD=g.div`
  width: 100%;
`,$D=Jt`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,PD=g.div`
  width: 20px;
  height: 20px;
  border: 3px solid ${({theme:e})=>e.text.placeholder};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${$D} 1s linear infinite;
`,kl=()=>s.jsx(PD,{}),HD=({recipientId:e})=>{var k,O,D;const{conversations:a,loadMessages:r,markAsRead:o}=cr(),{user:l}=Lt(),{friends:u}=Na(),h=m.useRef(null),[b,p]=m.useState(!1),[y,v]=m.useState(new Set),x=a[e],j=(k=u.find(N=>N.friendId._id===e))==null?void 0:k.friendId;m.useEffect(()=>{e&&!y.has(e)&&(console.log(`🔄 Loading initial messages for ${e}`),r(e,1),v(N=>new Set([...N,e])))},[e,r,y]),m.useEffect(()=>{var N;((N=x==null?void 0:x.messages)==null?void 0:N.length)>0&&C()},[(O=x==null?void 0:x.messages)==null?void 0:O.length]),m.useEffect(()=>{if(!(x!=null&&x.messages)||!l||!e)return;const N=x.messages.filter(z=>z.senderId._id!==l.id&&!z.readBy.some(Q=>Q.userId===l.id));if(N.length>0){const z=N[N.length-1];o(z.senderId._id,z._id)}},[x==null?void 0:x.messages,l,e,o]);const C=m.useCallback(()=>{var N;(N=h.current)==null||N.scrollIntoView({behavior:"smooth"})},[]),S=m.useCallback(async()=>{if(!(!(x!=null&&x.hasMore)||b)){p(!0);try{const N=x.messages.length,z=Math.floor(N/50)+1;await r(e,z)}finally{p(!1)}}},[x==null?void 0:x.hasMore,(D=x==null?void 0:x.messages)==null?void 0:D.length,b,r,e]),L=m.useCallback(N=>new Date(N).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),[]),T=m.useCallback(N=>{const z=new Date,Q=new Date(N);if(Q.toDateString()===z.toDateString())return"Today";const V=new Date(z);return V.setDate(V.getDate()-1),Q.toDateString()===V.toDateString()?"Yesterday":Q.toLocaleDateString()},[]);if(!j)return s.jsx(No,{children:s.jsx(l0,{children:s.jsx(c0,{children:"User not found"})})});if(!x&&y.has(e))return s.jsx(No,{children:s.jsxs(l0,{children:[s.jsx(kt,{image:j.avatar,userName:j.fullName,size:60}),s.jsxs($4,{children:["Start a conversation with ",j.fullName]}),s.jsx(c0,{children:"Send a message to get the conversation started!"})]})});if(x!=null&&x.loading&&x.messages.length===0)return s.jsx(No,{children:s.jsx(iA,{children:s.jsx(oA,{children:s.jsx(kl,{})})})});if(!(x!=null&&x.messages)||x.messages.length===0)return s.jsx(No,{children:s.jsxs(l0,{children:[s.jsx(kt,{image:j.avatar,userName:j.fullName,size:70}),s.jsxs($4,{children:["Start a conversation with ",j.fullName]}),s.jsx(c0,{children:"Send a message to get the conversation started!"})]})});let E="";return s.jsxs(No,{children:[x.hasMore&&s.jsx(aA,{children:s.jsx(rA,{onClick:S,disabled:b,children:b?s.jsx(kl,{}):"Load older messages"})}),s.jsx(ZD,{children:x.messages.map((N,z)=>{const Q=N.senderId._id===(l==null?void 0:l.id),V=T(N.createdAt),oe=V!==E;E=V;const Te=z>0?x.messages[z-1]:null,Ze=z<x.messages.length-1?x.messages[z+1]:null,Ue=!Te||Te.senderId._id!==N.senderId._id,K=!Ze||Ze.senderId._id!==N.senderId._id;return s.jsxs(dt.Fragment,{children:[oe&&s.jsx(tA,{children:s.jsx(nA,{children:V})}),s.jsx(JD,{isOwn:Q,children:s.jsxs(FD,{isOwn:Q,children:[!Q&&Ue&&s.jsx(qD,{children:s.jsx(kt,{image:N.senderId.avatar,userName:N.senderId.fullName,size:36})}),s.jsx(VD,{isOwn:Q,children:s.jsxs(XD,{isOwn:Q,hasAvatar:!Q&&Ue,isLastInGroup:K,children:[s.jsx(WD,{children:N.content}),s.jsxs(KD,{isOwn:Q,children:[L(N.createdAt),Q&&N.readBy.length>1&&s.jsx(eA,{children:"✓✓"})]})]})})]})})]},N._id)})}),s.jsx("div",{ref:h})]})},No=g.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.background.secondary};
`,ZD=g.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`,JD=g.div`
  display: flex;
  justify-content: ${({isOwn:e})=>e?"flex-end":"flex-start"};
  margin-bottom: 0.3rem;
`,FD=g.div`
  display: flex;
  align-items: flex-end;
  gap: 0.8rem;
  max-width: 70%;
  flex-direction: ${({isOwn:e})=>e?"row-reverse":"row"};
  
  @media (max-width: 600px) {
    max-width: 85%;
  }
`,qD=g.div`
  flex-shrink: 0;
  align-self: flex-end;
`,VD=g.div`
  display: flex;
  flex-direction: column;
  align-items: ${({isOwn:e})=>e?"flex-end":"flex-start"};
`,XD=g.div`
  background-color: ${({isOwn:e,theme:a})=>e?"var(--blue)":a.background.thirdly};
  color: ${({isOwn:e,theme:a})=>e?"white":a.text.primary};
  padding: 0.8rem 1.2rem;
  border-radius: 1.2rem;
  word-wrap: break-word;
  position: relative;
  max-width: 50rem;
  min-width: 0;
  
  ${({isOwn:e,hasAvatar:a,isLastInGroup:r})=>e?r?"border-bottom-right-radius: 0.3rem;":"":a&&r?"border-bottom-left-radius: 0.3rem;":""}
`,WD=g.div`
  font-size: var(--text-md);
  line-height: 1.4;
  word-break: break-word;
  margin-bottom: 0.3rem;
`,KD=g.div`
  font-size: var(--text-xs);
  opacity: 0.7;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  justify-content: ${({isOwn:e})=>e?"flex-end":"flex-start"};
`,eA=g.span`
  color: #4ade80;
  font-size: var(--text-xs);
`,tA=g.div`
  display: flex;
  justify-content: center;
  margin: 1.5rem 0 1rem;
`,nA=g.div`
  background-color: ${({theme:e})=>e.background.thirdly};
  color: ${({theme:e})=>e.text.secondary};
  padding: 0.4rem 1.2rem;
  border-radius: 1.5rem;
  font-size: var(--text-sm);
  font-weight: 500;
`,aA=g.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`,rA=g.button`
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
`,l0=g.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
`,$4=g.h3`
  font-size: var(--text-lg);
  color: ${({theme:e})=>e.text.primary};
  font-weight: 500;
  text-align: center;
`,c0=g.p`
  font-size: var(--text-md);
  color: ${({theme:e})=>e.text.secondary};
  text-align: center;
`,iA=g.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`,oA=g.div`
  font-size: var(--text-md);
  color: ${({theme:e})=>e.text.secondary};
`,fA=({groupId:e,conversation:a})=>{const{user:r}=Lt(),{loadGroupMessages:o}=Da(),l=m.useRef(null),[u,h]=m.useState(!1);m.useEffect(()=>{b()},[a==null?void 0:a.messages]);const b=()=>{var j;(j=l.current)==null||j.scrollIntoView({behavior:"smooth"})},p=async()=>{if(!(!(a!=null&&a.hasMore)||a!=null&&a.loading||u)){h(!0);try{const j=a.messages.length,C=Math.floor(j/50)+1;await o(e,C)}catch(j){console.error("Failed to load more messages:",j)}finally{h(!1)}}},y=j=>new Date(j).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),v=j=>{const C=new Date,S=new Date(j);if(S.toDateString()===C.toDateString())return"Today";const L=new Date(C);return L.setDate(L.getDate()-1),S.toDateString()===L.toDateString()?"Yesterday":S.toLocaleDateString()};if(!a)return s.jsx(Qs,{children:s.jsx(P4,{children:s.jsx(H4,{children:"Loading messages..."})})});if(a.loading&&a.messages.length===0)return s.jsx(Qs,{children:s.jsx(P4,{children:s.jsx(H4,{children:"Loading messages..."})})});if(a.messages.length===0)return s.jsx(Qs,{children:s.jsxs(MA,{children:[s.jsx(jA,{children:"💬"}),s.jsx(LA,{children:"Welcome to the group!"}),s.jsx(SA,{children:"Be the first to send a message in this group."})]})});let x="";return s.jsxs(Qs,{children:[a.hasMore&&s.jsx(vA,{children:s.jsx(xA,{onClick:p,disabled:u||a.loading,children:u||a.loading?"Loading...":"Load older messages"})}),s.jsx(sA,{children:a.messages.map((j,C)=>{const S=j.senderId._id===(r==null?void 0:r.id),L=v(j.createdAt),T=L!==x;x=L;const E=C>0?a.messages[C-1]:null,k=C<a.messages.length-1?a.messages[C+1]:null,O=!E||E.senderId._id!==j.senderId._id,D=!k||k.senderId._id!==j.senderId._id;return s.jsxs(dt.Fragment,{children:[T&&s.jsx(bA,{children:s.jsx(wA,{children:L})}),s.jsx(lA,{isOwn:S,children:s.jsxs(cA,{isOwn:S,children:[!S&&O&&s.jsx(uA,{children:s.jsx(kt,{image:j.senderId.avatar,userName:j.senderId.fullName,size:36})}),s.jsxs(dA,{isOwn:S,children:[!S&&O&&s.jsx(hA,{children:j.senderId.fullName}),s.jsxs(mA,{isOwn:S,hasAvatar:!S&&O,isLastInGroup:D,children:[s.jsx(gA,{children:j.content}),s.jsxs(pA,{isOwn:S,children:[y(j.createdAt),S&&j.readBy.length>1&&s.jsx(yA,{children:"✓✓"})]})]})]})]})})]},j._id)})}),s.jsx("div",{ref:l})]})},Qs=g.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.background.secondary};
`,sA=g.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`,lA=g.div`
  display: flex;
  justify-content: ${({isOwn:e})=>e?"flex-end":"flex-start"};
  margin-bottom: 0.3rem;
`,cA=g.div`
  display: flex;
  align-items: flex-end;
  gap: 0.8rem;
  max-width: 70%;
  flex-direction: ${({isOwn:e})=>e?"row-reverse":"row"};
  
  @media (max-width: 600px) {
    max-width: 85%;
  }
`,uA=g.div`
  flex-shrink: 0;
  align-self: flex-end;
`,dA=g.div`
  display: flex;
  flex-direction: column;
  align-items: ${({isOwn:e})=>e?"flex-end":"flex-start"};
  gap: 0.2rem;
  min-width: 0;
`,hA=g.div`
  font-size: var(--text-sm);
  font-weight: 600;
  color: ${({theme:e})=>e.text.primary};
  margin-bottom: 0.2rem;
  margin-left: 0.2rem;
`,mA=g.div`
  background-color: ${({isOwn:e,theme:a})=>e?"var(--blue)":a.background.thirdly};
  color: ${({isOwn:e,theme:a})=>e?"white":a.text.primary};
  padding: 0.8rem 1.2rem;
  border-radius: 1.2rem;
  word-wrap: break-word;
  position: relative;
  max-width: 50rem;
  min-width: 0;
  
  ${({isOwn:e,hasAvatar:a,isLastInGroup:r})=>e?r?"border-bottom-right-radius: 0.3rem;":"":a&&r?"border-bottom-left-radius: 0.3rem;":""}
`,gA=g.div`
  font-size: var(--text-md);
  line-height: 1.4;
  word-break: break-word;
  margin-bottom: 0.3rem;
`,pA=g.div`
  font-size: var(--text-xs);
  opacity: 0.7;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  justify-content: ${({isOwn:e})=>e?"flex-end":"flex-start"};
`,yA=g.span`
  color: #4ade80;
  font-size: var(--text-xs);
`,bA=g.div`
  display: flex;
  justify-content: center;
  margin: 1.5rem 0 1rem;
`,wA=g.div`
  background-color: ${({theme:e})=>e.background.thirdly};
  color: ${({theme:e})=>e.text.secondary};
  padding: 0.4rem 1.2rem;
  border-radius: 1.5rem;
  font-size: var(--text-sm);
  font-weight: 500;
`,vA=g.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`,xA=g.button`
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
`,MA=g.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
`,jA=g.div`
  font-size: 4rem;
  margin-bottom: 1rem;
`,LA=g.h3`
  font-size: var(--text-lg);
  color: ${({theme:e})=>e.text.primary};
  font-weight: 500;
  text-align: center;
`,SA=g.p`
  font-size: var(--text-md);
  color: ${({theme:e})=>e.text.secondary};
  text-align: center;
`,P4=g.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`,H4=g.div`
  font-size: var(--text-md);
  color: ${({theme:e})=>e.text.secondary};
`,CA=({group:e,members:a,userRole:r,onClose:o})=>{const[l,u]=m.useState(""),[h,b]=m.useState(null),{user:p}=Lt(),{removeMember:y,updateMemberRole:v}=Da(),x=r==="admin"||r==="moderator",j=r==="admin",C=a.filter(N=>N.userId.fullName.toLowerCase().includes(l.toLowerCase())||N.userId.username.toLowerCase().includes(l.toLowerCase())),S={admin:C.filter(N=>N.role==="admin"),moderator:C.filter(N=>N.role==="moderator"),member:C.filter(N=>N.role==="member")},L=async N=>{try{await y(e._id,N),b(null)}catch(z){console.error("Failed to remove member:",z)}},T=async(N,z)=>{try{await v(e._id,N,z),b(null)}catch(Q){console.error("Failed to update member role:",Q)}},E=N=>{const z=[];return N.userId._id===(p==null?void 0:p.id)||!x||(j&&(N.role!=="admin"&&z.push({label:"Make Admin",icon:s.jsx(Pd,{}),onClick:()=>T(N.userId._id,"admin")}),N.role!=="moderator"&&N.role!=="admin"&&z.push({label:"Make Moderator",icon:s.jsx(Xp,{}),onClick:()=>T(N.userId._id,"moderator")}),(N.role==="moderator"||N.role==="admin")&&z.push({label:"Remove Role",icon:s.jsx(Pd,{}),onClick:()=>T(N.userId._id,"member")})),x&&!(r==="moderator"&&N.role==="admin")&&z.push({label:"Remove from Group",icon:s.jsx(OC,{}),danger:!0,onClick:()=>L(N.userId._id)})),z},k=N=>{switch(N){case"admin":return s.jsx(Pd,{});case"moderator":return s.jsx(Xp,{});default:return null}},O=N=>{switch(N){case"admin":return"#f59e0b";case"moderator":return"#3b82f6";default:return"inherit"}},D=(N,z,Q)=>z.length===0?null:s.jsxs(OA,{children:[s.jsxs(BA,{children:[N," — ",z.length]}),s.jsx(_A,{children:z.map(V=>s.jsxs(UA,{children:[s.jsxs(YA,{children:[s.jsx(kt,{image:V.userId.avatar,userName:V.userId.fullName,status:V.userId.isOnline?"online":"offline",showStatusCircle:!0,size:36}),s.jsxs(GA,{children:[s.jsxs(QA,{children:[V.userId.fullName,V.userId._id===(p==null?void 0:p.id)&&s.jsx($A,{children:"You"})]}),s.jsxs(PA,{children:["@",V.userId.username]})]})]}),s.jsxs(HA,{children:[V.role!=="member"&&s.jsx(ZA,{color:O(V.role),children:k(V.role)}),E(V).length>0&&s.jsx(JA,{onClick:()=>b(h===V.userId._id?null:V.userId._id),children:s.jsx(Hl,{})})]}),h===V.userId._id&&s.jsx(Ia,{onClose:()=>b(null),isOpen:!0,right:"0",top:"100",items:E(V)})]},V.userId._id))})]},Q);return s.jsxs(s.Fragment,{children:[s.jsx(kA,{onClick:o}),s.jsxs(EA,{children:[s.jsxs(TA,{children:[s.jsxs(NA,{children:[s.jsx("h3",{children:"Members"}),s.jsx(IA,{children:a.length})]}),s.jsx(DA,{onClick:o,children:s.jsx(Zo,{})})]}),s.jsx(AA,{children:s.jsxs(zA,{children:[s.jsx(qC,{}),s.jsx("input",{type:"text",placeholder:"Search members",value:l,onChange:N=>u(N.target.value)})]})}),s.jsxs(RA,{children:[D("Admins",S.admin,"admin"),D("Moderators",S.moderator,"moderator"),D("Members",S.member,"member"),C.length===0&&s.jsx(FA,{children:s.jsx(qA,{children:l?`No members found matching "${l}"`:"No members found"})})]})]})]})},kA=g.div`
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
`,EA=g.div`
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
`,TA=g.div`
  padding: 2rem;
  border-bottom: 1px solid ${({theme:e})=>e.border.secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,NA=g.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  h3 {
    font-size: var(--text-xl);
    color: ${({theme:e})=>e.text.primary};
    font-weight: 600;
    margin: 0;
  }
`,IA=g.span`
  background-color: ${({theme:e})=>e.background.thirdly};
  color: ${({theme:e})=>e.text.secondary};
  padding: 0.3rem 0.8rem;
  border-radius: 1rem;
  font-size: var(--text-sm);
  font-weight: 500;
`,DA=g.button`
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
`,AA=g.div`
  padding: 0 2rem 2rem;
`,zA=g.div`
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
`,RA=g.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 2rem 2rem;
`,OA=g.div`
  margin-bottom: 2rem;
`,BA=g.h4`
  font-size: var(--text-sm);
  color: ${({theme:e})=>e.text.secondary};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0 0 1rem 0;
  padding: 0 0.5rem;
`,_A=g.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,UA=g.div`
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
`,YA=g.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
  min-width: 0;
`,GA=g.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  min-width: 0;
`,QA=g.div`
  font-size: var(--text-md);
  color: ${({theme:e})=>e.text.primary};
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,$A=g.span`
  background-color: var(--blue);
  color: white;
  padding: 0.2rem 0.6rem;
  border-radius: 0.8rem;
  font-size: var(--text-xs);
  font-weight: 500;
  flex-shrink: 0;
`,PA=g.div`
  font-size: var(--text-sm);
  color: ${({theme:e})=>e.text.secondary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,HA=g.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,ZA=g.div`
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
`,JA=g.button`
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
`,FA=g.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
`,qA=g.div`
  color: ${({theme:e})=>e.text.secondary};
  font-size: var(--text-md);
  text-align: center;
`,VA=()=>{var T;const{groupId:e}=wy(),{currentConversation:a}=cr(),{friends:r}=Na(),{groups:o,groupMembers:l,groupConversations:u,loadGroupMembers:h,loadGroupMessages:b,setCurrentGroup:p,currentGroup:y}=Da(),{user:v}=Lt(),[x,j]=m.useState(!1),C=m.useRef(new Set),S=m.useRef(new Set),L=!!e;if(m.useEffect(()=>{e&&e!==y?(console.log("Setting current group:",e),p(e)):e||p(null)},[e,p,y]),m.useEffect(()=>{e&&!C.current.has(e)&&(console.log("Loading group members for:",e),C.current.add(e),h(e))},[e,h]),m.useEffect(()=>{if(e&&!S.current.has(e)){const E=u[e];(!E||E.messages.length===0)&&(console.log("Loading group messages for:",e),S.current.add(e),b(e))}},[e,u,b]),L){const E=o.find(N=>N._id===e),k=l[e||""]||[],O=u[e||""];if(!E)return s.jsx($s,{children:s.jsx(u0,{children:s.jsxs(d0,{children:[s.jsx(Z4,{children:"🔍"}),s.jsx(h0,{children:"Group not found"}),s.jsx(m0,{children:"The group you're looking for doesn't exist or you don't have access to it."})]})})});const D=k.find(N=>N.userId._id===(v==null?void 0:v.id));return k.length>0&&!D?s.jsx($s,{children:s.jsx(u0,{children:s.jsxs(d0,{children:[s.jsx(Z4,{children:"🚫"}),s.jsx(h0,{children:"Access Denied"}),s.jsx(m0,{children:"You are not a member of this group."})]})})}):s.jsxs($s,{children:[s.jsxs(WA,{showSidebar:x,children:[s.jsx(ZE,{group:E,memberCount:k.length,userRole:(D==null?void 0:D.role)||"member",onToggleMembersSidebar:()=>j(!x)}),s.jsx(fA,{groupId:e,conversation:O}),s.jsx(RD,{groupId:e})]}),x&&s.jsx(CA,{group:E,members:k,userRole:(D==null?void 0:D.role)||"member",onClose:()=>j(!1)})]})}else{const E=a?(T=r.find(k=>k.friendId._id===a))==null?void 0:T.friendId:null;return!a||!E?s.jsx($s,{children:s.jsx(u0,{children:s.jsxs(d0,{children:[s.jsx("svg",{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 66.59 63.66",width:70,height:70,children:s.jsx(KA,{d:"M50,70.82c-.13-.51-.28-1.13-.47-1.74A29,29,0,0,0,45,60.79a70.83,70.83,0,0,0-5.71-6.41,59.7,59.7,0,0,1-9.34-12.16c-.37-.67-.69-1.37-1.06-2.1-.06.12-.12.21-.17.31a39.53,39.53,0,0,0-3.13,10A25.62,25.62,0,0,0,27.66,66a32.27,32.27,0,0,0,7.45,9.79A52.47,52.47,0,0,0,43,81.64l.21.14c-1.85.11-8.38-2.61-11.73-4.86a33.27,33.27,0,0,1-9-9,32.14,32.14,0,0,1-5-11.7,33.2,33.2,0,0,1,21-38c-.55.66-1.10,1.29-1.61,1.95a14.4,14.4,0,0,0-2.76,5.58A11.27,11.27,0,0,0,34.93,33a39,39,0,0,0,6.27,9.26C42.88,44.15,44.63,46,46.26,48a20.22,20.22,0,0,1,3.67,6.42s0,.05.07.09c.29-.67.54-1.34.85-2a30.15,30.15,0,0,1,5-7A79.35,79.35,0,0,0,62,38.22a28.19,28.19,0,0,0,3.49-6.28,10.94,10.94,0,0,0-1-9.84c-.82-1.38-1.86-2.63-2.7-3.81C72.49,21.9,83.66,33.71,83.28,50.08a33.12,33.12,0,0,1-26.5,31.75l1.84-1.2a42.78,42.78,0,0,0,11-10.08,25.92,25.92,0,0,0,4.94-11.64A28.44,28.44,0,0,0,73.38,46c-.62-2-1.4-3.93-2.11-5.89l-.2-.06a1,1,0,0,1,0,.18A40.08,40.08,0,0,1,65.43,49c-2.17,2.71-4.57,5.21-7,7.71a35.26,35.26,0,0,0-7,10.05C50.83,68.11,50.42,69.52,50,70.82Z",transform:"translate(-16.71 -18.17)"})}),s.jsx(h0,{children:"Welcome to Mendam"}),s.jsx(m0,{children:"Select a conversation from the sidebar to start chatting with your friends."})]})})}):s.jsxs(XA,{children:[s.jsx(nE,{recipient:E}),s.jsx(HD,{recipientId:a}),s.jsx(kD,{recipientId:a})]})}},$s=g.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: ${({theme:e})=>e.background.secondary};
`,XA=g.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.background.secondary};
`,WA=g.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  
  ${({showSidebar:e})=>e&&`
    @media (max-width: 1200px) {
      display: none;
    }
  `}
`,u0=g.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e})=>e.background.secondary};
`,d0=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  max-width: 40rem;
  text-align: center;
  padding: 2rem;
`,Z4=g.div`
  font-size: 4rem;
  margin-bottom: 1rem;
`,h0=g.h2`
  font-size: var(--text-xxl);
  color: ${({theme:e})=>e.text.placeholder};
  font-weight: 600;
  margin: 0;
`,m0=g.p`
  font-size: var(--text-md);
  color: ${({theme:e})=>e.text.placeholder};
  line-height: 1.6;
  margin: 0;
`,KA=g.path`
  fill: ${({theme:e})=>e.text.placeholder};
`,ez=()=>s.jsxs(tz,{children:[s.jsxs(nz,{children:[s.jsxs(az,{children:[s.jsx(Pb,{}),s.jsx(rz,{children:s.jsx(My,{})})]}),s.jsx(s3,{})]}),s.jsx(iz,{children:s.jsx(VA,{})})]}),tz=g.div`
  width: 100%;
  display: flex;
`,nz=g.div`
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
`,az=g.div`
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
`,rz=g.div`
  width: 100%;
  height: 100%;
  background-color: ${({theme:e})=>e.background.primary};
  border-left: 1px solid ${({theme:e})=>e.border.primary};
  border-bottom: 1px solid ${({theme:e})=>e.border.primary};
  border-bottom-left-radius: 8px;
`,iz=g.div`
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
`,_w=m.createContext(void 0),oz=({children:e})=>{const[a,r]=m.useState(!1);return s.jsx(_w.Provider,{value:{openSettings:a,setOpenSettings:r},children:e})},hf=()=>{const e=m.useContext(_w);if(!e)throw new Error("useMainContent must be used within a MainContentProvider");return e},fz=()=>{const e=un(),{setOpenSettings:a}=hf(),r=()=>{a&&a(!0)};return s.jsx(s.Fragment,{children:s.jsx(sz,{children:s.jsx(lz,{children:s.jsxs(uz,{children:[s.jsx(cz,{children:s.jsx("h4",{children:"Settings"})}),s.jsxs(dz,{children:[s.jsx(g0,{onClick:r,isActive:e.pathname==="/app/settings/profile",children:s.jsxs(Be,{to:"profile",children:[s.jsx(dl,{children:s.jsx(Qb,{})}),s.jsx(hl,{children:s.jsx("span",{children:"Profile"})})]})}),s.jsx(g0,{onClick:r,isActive:e.pathname==="/app/settings/account",children:s.jsxs(Be,{to:"account",children:[s.jsx(dl,{children:s.jsx(Ho,{})}),s.jsx(hl,{children:s.jsx("span",{children:"Account"})})]})}),s.jsx(g0,{onClick:r,isActive:e.pathname==="/app/settings/appearance",children:s.jsxs(Be,{to:"appearance",children:[s.jsx(dl,{children:s.jsx(ik,{})}),s.jsx(hl,{children:s.jsx("span",{children:"Appearance"})})]})})]})]})})})})},sz=g.div`
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
`,lz=g.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,cz=g.div`
  padding-bottom: 3rem;
  @media (max-width: 700px) {
      padding: 2rem 1.5rem 3rem;
    }
  h4 {
    color: ${({theme:e})=>e.text.primary};
    font-size: var(--text-xl);
    font-weight: 400;
  }
`,uz=g.div`
  width: 100%;
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: space-between;
`,dz=g.div`
  width: 100%;
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 0.8rem;
`,dl=g.div`
  color: ${({theme:e})=>e.text.secondary};
  display: flex;
  align-items: center;
  svg {
    width: 2rem;
  }
`,hl=g.div`
  color: ${({theme:e})=>e.text.secondary};
  span {
    font-size: var(--text-md);
  }
`,g0=g.div`
  width: 100%;

  a {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    border-radius: 0.8rem;
    padding: 1.1rem 1rem;
    
    @media (min-width: 700px) {
      ${({isActive:e,theme:a})=>e&&`
          ${dl} {
            color: var(--blue);
          }
          ${hl} {
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
`,hz=({})=>{const{openSettings:e}=hf();return s.jsx(s.Fragment,{children:s.jsxs(mz,{children:[s.jsxs(gz,{children:[s.jsxs(pz,{children:[s.jsx(Pb,{}),s.jsx(fz,{})]}),window.innerWidth<=700&&s.jsx(s3,{})]}),s.jsx(yz,{isOpen:e,children:s.jsx(My,{})})]})})},mz=g.div`
  width: 100%;
  height: 100svh;
  display: flex;
  overflow: hidden;
  background-color: ${({theme:e})=>e.background.primary};
`,gz=g.div`
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
`,pz=g.div`
height: 100%;
   @media (max-width: 700px) {
    min-height: calc(100% - 67.4px);
    max-height: calc(100% -  67.4px);
  }
  display: flex;
  overflow: hidden;

`,yz=g.div`
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
`,Wn=({value:e,placeholder:a="Search for",onInputChange:r})=>{const o=l=>{r&&r(l.target.value)};return s.jsx(s.Fragment,{children:s.jsxs(bz,{children:[s.jsx(wz,{children:s.jsx("input",{type:"text",placeholder:a,value:e||"",onChange:o})}),s.jsx(vz,{children:s.jsx(j1,{})})]})})},bz=g.div`
  width: 100%;
  height: 4.5rem;
  overflow: hidden;
  border-radius: 0.8rem;
  background-color: ${({theme:e})=>e.background.secondary};
  border: 1px solid ${({theme:e})=>e.border.primary};
  display: flex;
  align-items: center;
`,wz=g.div`
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
`,vz=g.div`
  color: ${({theme:e})=>e.text.placeholder};
  padding: 1.5rem;
  display: flex;
  align-items: center;
  
  svg {
    width: 2.1rem;
    margin-left: 1.5rem;
  }
`,Kn=({title:e,heading:a})=>s.jsx(s.Fragment,{children:s.jsx(xz,{children:s.jsx(Mz,{as:a,children:e})})}),xz=g.div`
  width: max-content;
`,Mz=g.h1`
  color: ${({theme:e})=>e.text.primary};
  line-height: 1;
  font-weight: 500;
  font-size: ${({fontSize:e})=>e?`var(--text-${e})`:"var(--text-xl)"};
`,jz=({})=>{const[e,a]=m.useState(null),[r,o]=m.useState(null),[l,u]=m.useState(""),{friends:h,loading:b}=Na(),{conversations:p,currentConversation:y,setCurrentConversation:v,loadMessages:x}=cr(),{user:j}=Lt(),C=z=>{o(r===z?null:z)},S=()=>{o(null)},L=[{label:"Add to favorite",icon:s.jsx(ak,{}),onClick:()=>{S()}},{label:"Clear messages",icon:s.jsx(S1,{}),onClick:()=>{S()}},{label:"Delete",icon:s.jsx(Yb,{}),danger:!0,onClick:()=>{S(),alert("Delete functionality")}}],E=h.map(z=>{const Q=z.friendId._id,V=p[Q],oe=V==null?void 0:V.messages[V.messages.length-1],Te=(V==null?void 0:V.messages.filter(Ze=>Ze.senderId._id!==(j==null?void 0:j.id)&&!Ze.readBy.some(Ue=>Ue.userId===(j==null?void 0:j.id))).length)||0;return{id:Q,userName:z.friendId.fullName,avatar:z.friendId.avatar,status:z.friendId.isOnline?"online":"offline",lastMessage:(oe==null?void 0:oe.content)||"No messages yet",lastMessageTime:oe?N(new Date(oe.createdAt)):"",unreadCount:Te>0?Te:void 0}}).filter(z=>z.userName.toLowerCase().includes(l.toLowerCase())),k=z=>{a(z)},O=()=>{a(null)},D=async z=>{console.log("🔄 Selecting chat with:",z);try{v(z);const Q=p[z];(!Q||Q.messages.length===0)&&(console.log("📩 Loading messages for:",z),await x(z,1))}catch(Q){console.error("❌ Failed to load conversation:",Q)}};function N(z){const V=Math.floor((new Date().getTime()-z.getTime())/(1e3*60));if(V<1)return"now";if(V<60)return`${V}m`;const oe=Math.floor(V/60);if(oe<24)return`${oe}h`;const Te=Math.floor(oe/24);return Te<7?`${Te}d`:`${Math.floor(Te/7)}w`}return b&&h.length===0?s.jsxs(J4,{children:[s.jsxs(F4,{children:[s.jsx(Kn,{title:"Direct Messages",heading:"h3"}),s.jsx(Wn,{placeholder:"Search or start a new conversation"})]}),s.jsx(zz,{children:s.jsx(Rz,{children:"Loading conversations..."})})]}):s.jsx(s.Fragment,{children:s.jsxs(J4,{children:[s.jsxs(F4,{children:[s.jsx(Kn,{title:"Direct Messages",heading:"h3"}),s.jsx(Wn,{placeholder:"Search or start a new conversation",value:l,onInputChange:u})]}),E.length===0?s.jsx(Oz,{children:s.jsx(Bz,{children:l?`No conversations found matching "${l}"`:"No conversations yet. Add some friends to start chatting!"})}):s.jsx(Lz,{children:E.map(z=>s.jsxs(Sz,{children:[s.jsxs(Cz,{onClick:()=>D(z.id),onMouseEnter:()=>k(z.id),onMouseLeave:O,isActive:y===z.id,children:[s.jsxs(kz,{children:[s.jsx(kt,{image:z.avatar,status:z.status,userName:z.userName,showStatusCircle:!0,size:35}),s.jsxs(Ez,{children:[s.jsxs(Tz,{hasUnread:!!z.unreadCount,children:[z.userName,z.unreadCount&&s.jsx(Iz,{children:z.unreadCount})]}),s.jsxs(Nz,{children:[z.lastMessage.substring(0,40),z.lastMessage.length>40?"...":""]})]})]}),e!==z.id&&z.lastMessageTime&&s.jsx(Dz,{children:s.jsx("span",{children:z.lastMessageTime})}),e===z.id&&s.jsx(Az,{onClick:Q=>{Q.stopPropagation(),C(z.id)},children:s.jsx(Hl,{})})]}),s.jsx("div",{onClick:Q=>Q.stopPropagation(),children:s.jsx(Ia,{onClose:()=>o(null),isOpen:r===z.id,right:"1",items:L})})]},z.id))})]})})},J4=g.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding-bottom: 0.5rem;
`,F4=g.div`
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
`,Lz=g.div`
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 3px;
  @media (max-width: 1000px) {
    padding: 0;
  }
`,Sz=g.div`
  width: 100%;
  position: relative;
`,Cz=g.div`
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
`,kz=g.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
  min-width: 0;
`,Ez=g.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
  min-width: 0;
`,Tz=g.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: ${({hasUnread:e})=>e?"500":"400"};
  font-size: var(--text-base);
  color: ${({hasUnread:e,theme:a})=>e?a.text.primary:a.text.thirdly};
  @media (max-width: 1000px) {
    font-size: var(--text-sm);
  }
`,Nz=g.div`
  width: 90%;
  font-size: var(--text-sm);
  color: ${({theme:e})=>e.text.secondary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Iz=g.span`
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
`,Dz=g.div`
  flex-shrink: 0;
  span {
    font-size: var(--text-sm);
    color: ${({theme:e})=>e.text.placeholder};
  }
`,Az=g.div`
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
`,zz=g.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
`,Rz=g.div`
  color: ${({theme:e})=>e.text.secondary};
  font-size: var(--text-md);
`,Oz=g.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
`,Bz=g.div`
  color: ${({theme:e})=>e.text.secondary};
  font-size: var(--text-md);
  text-align: center;
`,oi=({onClick:e})=>s.jsx(s.Fragment,{children:s.jsx(_z,{onClick:e,children:s.jsx(hC,{})})}),_z=g.div`
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
`,p0=({title:e,onClose:a,isOpen:r})=>{const[o,l]=m.useState(""),[u,h]=m.useState([]),[b,p]=m.useState(!1),[y,v]=m.useState(new Set),[x,j]=m.useState(""),{searchUsers:C,sendFriendRequest:S,friends:L}=Na(),T=new Set(L.map(D=>D.friendId._id)),E=async()=>{if(!o.trim()){h([]);return}p(!0),j("");try{const N=(await C(o.trim())).filter(z=>!T.has(z._id));h(N)}catch(D){j(D.message||"Failed to search users"),h([])}finally{p(!1)}},k=async D=>{try{j(""),await S(D),v(N=>new Set([...N,D]))}catch(N){j(N.message||"Failed to send friend request")}};m.useEffect(()=>{r&&(l(""),h([]),v(new Set),j(""))},[r]);const O=D=>{D.key==="Enter"&&E()};return s.jsx(of,{title:e,onClose:a,isOpen:r,children:s.jsxs(Uz,{children:[s.jsx(Yz,{children:s.jsxs(Gz,{children:[s.jsx(Qz,{children:s.jsx("input",{type:"text",placeholder:"Search for friend by username or name",value:o,onChange:D=>l(D.target.value),onKeyPress:O,disabled:b})}),s.jsx($z,{onClick:E,disabled:b,children:s.jsx(j1,{})})]})}),x&&s.jsx(Pz,{children:x}),s.jsxs(Hz,{children:[s.jsx(Zz,{children:s.jsx("h6",{children:b?"Searching...":u.length>0?`Found ${u.length} user${u.length!==1?"s":""}:`:o.trim()?"No users found":"Enter a username or name to search"})}),u.length>0&&s.jsx(Jz,{children:u.map(D=>s.jsx(Fz,{children:s.jsxs(qz,{children:[s.jsx(kt,{image:D.avatar,userName:D.fullName,showUserName:!0,size:35,bg:!0}),s.jsx(Vz,{children:s.jsxs(Xz,{children:["@",D.username]})}),s.jsx(Wz,{children:y.has(D._id)?s.jsxs(eR,{children:[s.jsx(Ib,{}),s.jsx("span",{children:"Request Sent"})]}):s.jsxs(Kz,{onClick:()=>k(D._id),children:[s.jsx(L1,{}),s.jsx("span",{children:"Add Friend"})]})})]})},D._id))})]}),s.jsx(tR,{children:s.jsx(Ct,{variant:"cancel",title:"Close",onClick:a})})]})})},Uz=g.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,Yz=g.div`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 3456;
  background-color: ${({theme:e})=>e.background.thirdly};
`,Gz=g.div`
  width: 100%;
  height: 4.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`,Qz=g.div`
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
`,$z=g.button`
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
`,Pz=g.div`
  background-color: #fee2e2;
  border: 1px solid #fecaca;
  color: #dc2626;
  padding: 1rem 1.5rem;
  border-radius: 0.8rem;
  font-size: var(--text-sm);
  text-align: center;
`,Hz=g.div`
  width: 100%;
`,Zz=g.div`
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
`,Jz=g.div`
  display: flex;
  flex-direction: column;
  max-height: 40rem;
  overflow-y: auto;
`,Fz=g.div`
  width: 100%;
  
  &:not(:last-child) {
    border-bottom: 1px solid ${({theme:e})=>e.border.secondary};
  }
`,qz=g.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;
  gap: 1rem;
`,Vz=g.div`
  flex: 1;
  min-width: 0;
`,Xz=g.div`
  font-size: var(--text-sm);
  color: ${({theme:e})=>e.text.placeholder};
  margin-top: 0.3rem;
`,Wz=g.div`
  display: flex;
  align-items: center;
`,Kz=g.button`
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
`,eR=g.div`
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
`,tR=g.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 1rem;
  border-top: 1px solid ${({theme:e})=>e.border.secondary};
`,nR=({})=>{const[e,a]=m.useState(!1),[r,o]=m.useState(""),[l,u]=m.useState(null),{friends:h,loading:b,error:p,loadFriends:y,removeFriend:v,blockUser:x}=Na(),{setCurrentConversation:j}=cr(),C=lr();m.useEffect(()=>{y()},[]);const S=()=>{a(!1)},L=D=>{j(D),C("/app/@me")},T=async D=>{try{await v(D),u(null)}catch(N){console.error("Failed to remove friend:",N)}},E=async D=>{try{await x(D),u(null)}catch(N){console.error("Failed to block user:",N)}},k=D=>[{label:"Start Chat",icon:s.jsx(qp,{}),onClick:()=>{L(D),u(null)}},{label:"Remove Friend",icon:s.jsx(S1,{}),onClick:()=>T(D)},{label:"Block User",icon:s.jsx(fC,{}),danger:!0,onClick:()=>E(D)}],O=h.filter(D=>D.friendId.fullName.toLowerCase().includes(r.toLowerCase())||D.friendId.username.toLowerCase().includes(r.toLowerCase()));return b&&h.length===0?s.jsxs(y0,{children:[s.jsxs(b0,{children:[s.jsx(Kn,{title:"Friends",heading:"h3"}),s.jsxs(w0,{children:[s.jsx(Wn,{placeholder:"Search for people"}),s.jsx(oi,{onClick:()=>a(!0)})]})]}),s.jsx(fR,{children:s.jsx(sR,{children:"Loading friends..."})}),s.jsx(p0,{title:"Add new friend",onClose:S,isOpen:e})]}):p?s.jsxs(y0,{children:[s.jsxs(b0,{children:[s.jsx(Kn,{title:"Friends",heading:"h3"}),s.jsxs(w0,{children:[s.jsx(Wn,{placeholder:"Search for people"}),s.jsx(oi,{onClick:()=>a(!0)})]})]}),s.jsxs(lR,{children:[s.jsxs(cR,{children:["Failed to load friends: ",p]}),s.jsx(uR,{onClick:y,children:"Retry"})]}),s.jsx(p0,{title:"Add new friend",onClose:S,isOpen:e})]}):s.jsxs(y0,{children:[s.jsxs(b0,{children:[s.jsx(Kn,{title:"Friends",heading:"h3"}),s.jsxs(w0,{children:[s.jsx(Wn,{placeholder:"Search for people",value:r,onInputChange:D=>o(D)}),s.jsx(oi,{onClick:()=>a(!0)})]})]}),O.length===0?s.jsx(dR,{children:s.jsx(hR,{children:r?`No friends found matching "${r}"`:"No friends yet. Add some friends to start chatting!"})}):s.jsx(aR,{children:O.map(D=>s.jsxs(rR,{children:[s.jsxs(iR,{children:[s.jsx(kt,{image:D.friendId.avatar,status:D.friendId.isOnline?"online":"offline",userName:D.friendId.fullName,showStatusCircle:!0,showUserName:!0,size:35}),s.jsxs(oR,{children:[s.jsx(q4,{onClick:()=>L(D.friendId._id),children:s.jsx(qp,{})}),s.jsx(q4,{onClick:()=>u(l===D.friendId._id?null:D.friendId._id),children:s.jsx(Hl,{})})]})]}),s.jsx("div",{onClick:N=>N.stopPropagation(),children:s.jsx(Ia,{onClose:()=>u(null),isOpen:l===D.friendId._id,right:"1",items:k(D.friendId._id)})})]},D._id))}),s.jsx(p0,{title:"Add new friend",onClose:S,isOpen:e})]})},y0=g.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding-bottom: 1rem;
  position: relative;
`,b0=g.div`
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
`,w0=g.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  @media (max-width: 1000px) {
    gap: 1rem;
  }
  @media (max-width: 700px) {
    gap: 1.5rem;
  }
`,aR=g.div`
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 1000px) {
    padding: 0;
  }
`,rR=g.div`
  width: 100%;
  position: relative;
`,iR=g.div`
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
`,oR=g.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,q4=g.div`
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
`,fR=g.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
`,sR=g.div`
  color: ${({theme:e})=>e.text.secondary};
  font-size: var(--text-md);
`,lR=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  gap: 1rem;
`,cR=g.div`
  color: ${({theme:e})=>e.text.secondary};
  font-size: var(--text-md);
  text-align: center;
`,uR=g.button`
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
`,dR=g.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
`,hR=g.div`
  color: ${({theme:e})=>e.text.secondary};
  font-size: var(--text-md);
  text-align: center;
`,v0=({title:e,onClose:a,isOpen:r})=>{const[o,l]=m.useState({name:"",description:"",isPrivate:!1,maxMembers:100}),[u,h]=m.useState({}),[b,p]=m.useState(!1),{createGroup:y}=Da(),v=()=>{const L={};return o.name.trim()?o.name.length<3?L.name="Group name must be at least 3 characters":o.name.length>100&&(L.name="Group name cannot exceed 100 characters"):L.name="Group name is required",o.description&&o.description.length>500&&(L.description="Description cannot exceed 500 characters"),o.maxMembers<2?L.maxMembers="Group must allow at least 2 members":o.maxMembers>1e3&&(L.maxMembers="Group cannot exceed 1000 members"),h(L),Object.keys(L).length===0},x=L=>{const{name:T,value:E,type:k}=L.target,O=L.target.checked;l(D=>({...D,[T]:k==="checkbox"?O:k==="number"?parseInt(E)||0:E})),u[T]&&h(D=>({...D,[T]:""}))},j=async L=>{if(L.preventDefault(),!!v()){p(!0);try{await y(o.name.trim(),o.description.trim()||void 0,o.isPrivate),l({name:"",description:"",isPrivate:!1,maxMembers:100}),h({}),a()}catch(T){h({general:T.message||"Failed to create group"})}finally{p(!1)}}},C=()=>{b||(l({name:"",description:"",isPrivate:!1,maxMembers:100}),h({}),a())},S=o.name.trim().length>=3&&Object.keys(u).length===0;return s.jsx(of,{title:e,onClose:C,isOpen:r,children:s.jsx(mR,{children:s.jsxs("form",{onSubmit:j,children:[u.general&&s.jsx(gR,{children:u.general}),s.jsxs(pR,{htmlFor:"upload-group-image",children:[s.jsx(Uw,{children:s.jsx(C1,{})}),s.jsx(yR,{children:s.jsx("span",{children:"Add group image (optional)"})}),s.jsx("input",{type:"file",id:"upload-group-image",name:"upload-group-image",accept:"image/*",disabled:b})]}),s.jsxs(x0,{children:[s.jsx(M0,{htmlFor:"group-name",children:"Group name *"}),s.jsx(V4,{placeholder:"Enter group name",type:"text",name:"name",id:"group-name",value:o.name,onChange:x,disabled:b,hasError:!!u.name}),u.name&&s.jsx(j0,{children:u.name})]}),s.jsxs(x0,{children:[s.jsx(M0,{htmlFor:"group-description",children:"Description (optional)"}),s.jsx(bR,{placeholder:"What's this group about?",name:"description",id:"group-description",value:o.description,onChange:x,disabled:b,rows:3,hasError:!!u.description}),u.description&&s.jsx(j0,{children:u.description})]}),s.jsxs(wR,{children:[s.jsxs(vR,{children:[s.jsxs(xR,{children:[s.jsxs(MR,{children:[s.jsx(jR,{isPrivate:o.isPrivate,children:o.isPrivate?s.jsx(rC,{}):s.jsx(tC,{})}),o.isPrivate?"Private Group":"Public Group"]}),s.jsx(LR,{children:o.isPrivate?"Only invited members can join this group":"Anyone can discover and join this group"})]}),s.jsxs(SR,{children:[s.jsx("input",{type:"checkbox",name:"isPrivate",checked:o.isPrivate,onChange:x,disabled:b}),s.jsx(CR,{})]})]}),s.jsxs(x0,{children:[s.jsx(M0,{htmlFor:"max-members",children:"Maximum members (2-1000)"}),s.jsx(V4,{type:"number",name:"maxMembers",id:"max-members",value:o.maxMembers,onChange:x,disabled:b,min:"2",max:"1000",hasError:!!u.maxMembers}),u.maxMembers&&s.jsx(j0,{children:u.maxMembers})]})]}),s.jsx(kR,{children:s.jsxs(ER,{children:[s.jsx(Ct,{onClick:C,variant:"cancel",type:"button",title:"Cancel",disabled:b}),s.jsx(Ct,{variant:"primary",type:"submit",title:b?"Creating...":"Create Group",disabled:b||!S})]})})]})})})},mR=g.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,gR=g.div`
  background-color: #fee2e2;
  border: 1px solid #fecaca;
  color: #dc2626;
  padding: 1rem 1.5rem;
  border-radius: 0.8rem;
  font-size: var(--text-sm);
  text-align: center;
`,Uw=g.div`
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
`,pR=g.label`
  width: max-content;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  cursor: pointer;
  
  input {
    display: none;
  }
  
  &:hover ${Uw} {
    background-color: ${({theme:e})=>e.background.secondary};
    border-color: var(--blue);
  }
`,yR=g.div`
  span {
    line-height: 1;
    font-size: var(--text-md);
    color: ${({theme:e})=>e.text.secondary};
  }
`,x0=g.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,M0=g.label`
  font-size: var(--text-md);
  line-height: 1;
  color: ${({theme:e})=>e.text.secondary};
  font-weight: 500;
`,V4=g.input`
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
`,bR=g.textarea`
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
`,j0=g.span`
  color: #ef4444;
  font-size: var(--text-xs);
  margin-top: 0.4rem;
`,wR=g.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
  background-color: ${({theme:e})=>e.background.secondary};
  border-radius: 0.8rem;
  border: 1px solid ${({theme:e})=>e.border.secondary};
`,vR=g.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`,xR=g.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
`,MR=g.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: var(--text-md);
  font-weight: 500;
  color: ${({theme:e})=>e.text.primary};
`,jR=g.div`
  width: 2rem;
  height: 2rem;
  color: ${({isPrivate:e})=>e?"#f59e0b":"#10b981"};
  
  svg {
    width: 100%;
    height: 100%;
  }
`,LR=g.div`
  font-size: var(--text-sm);
  color: ${({theme:e})=>e.text.secondary};
  line-height: 1.4;
`,SR=g.label`
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
`,CR=g.span`
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
`,kR=g.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  padding-top: 1rem;
  border-top: 1px solid ${({theme:e})=>e.border.secondary};
`,ER=g.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`,X4=({})=>{const[e,a]=m.useState(!1),[r,o]=m.useState(""),[l,u]=m.useState(null),{groupId:h}=wy(),b=lr(),{groups:p,loading:y,error:v,loadGroups:x,leaveGroup:j,setCurrentGroup:C,currentGroup:S}=Da();m.useEffect(()=>{x()},[]),m.useEffect(()=>{h&&C(h)},[h,C]);const L=()=>{a(!1)},T=D=>{C(D),b(`/app/groups/${D}`)},E=async D=>{try{await j(D),u(null),S===D&&(C(null),b("/app/groups"))}catch(N){console.error("Failed to leave group:",N)}},k=D=>[{label:"Group Settings",icon:s.jsx(Ho,{}),onClick:()=>{u(null),alert("Group settings not implemented yet")}},{label:"Leave Group",icon:s.jsx(Rb,{}),danger:!0,onClick:()=>E(D)}],O=p.filter(D=>D.name.toLowerCase().includes(r.toLowerCase()));return y&&p.length===0?s.jsxs(L0,{children:[s.jsxs(S0,{children:[s.jsx(Kn,{title:"Groups",heading:"h3"}),s.jsxs(C0,{children:[s.jsx(Wn,{placeholder:"Search for groups"}),s.jsx(oi,{onClick:()=>a(!0)})]})]}),s.jsx(PR,{children:s.jsx(HR,{children:"Loading groups..."})}),s.jsx(v0,{title:"Create new group",onClose:L,isOpen:e})]}):v?s.jsxs(L0,{children:[s.jsxs(S0,{children:[s.jsx(Kn,{title:"Groups",heading:"h3"}),s.jsxs(C0,{children:[s.jsx(Wn,{placeholder:"Search for groups"}),s.jsx(oi,{onClick:()=>a(!0)})]})]}),s.jsxs(ZR,{children:[s.jsxs(JR,{children:["Failed to load groups: ",v]}),s.jsx(FR,{onClick:x,children:"Retry"})]}),s.jsx(v0,{title:"Create new group",onClose:L,isOpen:e})]}):s.jsxs(L0,{children:[s.jsxs(S0,{children:[s.jsx(Kn,{title:"Groups",heading:"h3"}),s.jsxs(C0,{children:[s.jsx(Wn,{placeholder:"Search for groups",value:r,onInputChange:D=>o(D)}),s.jsx(oi,{onClick:()=>a(!0)})]})]}),O.length===0?s.jsxs(YR,{children:[s.jsx(GR,{children:s.jsx(Gb,{})}),s.jsx(QR,{children:r?`No groups found matching "${r}"`:"No groups yet. Create a group to start collaborating!"}),!r&&s.jsx($R,{onClick:()=>a(!0),children:"Create Your First Group"})]}):s.jsx(TR,{children:O.map(D=>s.jsxs(NR,{children:[s.jsxs(IR,{onClick:()=>T(D._id),isActive:S===D._id||h===D._id,children:[s.jsx(DR,{children:D.avatar?s.jsx(kt,{image:D.avatar,userName:D.name,size:40,isGroup:!0}):s.jsx(AR,{children:s.jsx(Pl,{})})}),s.jsxs(zR,{children:[s.jsx(RR,{children:D.name}),s.jsxs(OR,{children:[D.memberCount||0," member",(D.memberCount||0)!==1?"s":"",D.isPrivate&&s.jsx(BR,{children:"Private"})]})]}),s.jsx(_R,{onClick:N=>N.stopPropagation(),children:s.jsx(UR,{onClick:()=>u(l===D._id?null:D._id),children:s.jsx(Hl,{})})})]}),s.jsx("div",{onClick:N=>N.stopPropagation(),children:s.jsx(Ia,{onClose:()=>u(null),isOpen:l===D._id,right:"1",items:k(D._id)})})]},D._id))}),s.jsx(v0,{title:"Create new group",onClose:L,isOpen:e})]})},L0=g.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding-bottom: 1rem;
  position: relative;
`,S0=g.div`
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
`,C0=g.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  @media (max-width: 1000px) {
    gap: 1rem;
  }
  @media (max-width: 700px) {
    gap: 1.5rem;
  }
`,TR=g.div`
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 1000px) {
    padding: 0;
  }
`,NR=g.div`
  width: 100%;
  position: relative;
`,IR=g.div`
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
`,DR=g.div`
  flex-shrink: 0;
`,AR=g.div`
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
`,zR=g.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-left: 1rem;
  min-width: 0;
`,RR=g.h4`
  font-size: var(--text-md);
  color: ${({theme:e})=>e.text.primary};
  font-weight: 500;
  margin: 0;
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,OR=g.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: var(--text-sm);
  color: ${({theme:e})=>e.text.secondary};
`,BR=g.span`
  background-color: var(--blue);
  color: white;
  padding: 0.2rem 0.6rem;
  border-radius: 1rem;
  font-size: var(--text-xs);
  font-weight: 500;
`,_R=g.div`
  display: flex;
  align-items: center;
`,UR=g.div`
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
`,YR=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  gap: 1.5rem;
`,GR=g.div`
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
`,QR=g.div`
  color: ${({theme:e})=>e.text.secondary};
  font-size: var(--text-md);
  text-align: center;
  line-height: 1.5;
`,$R=g.button`
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
`,PR=g.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
`,HR=g.div`
  color: ${({theme:e})=>e.text.secondary};
  font-size: var(--text-md);
`,ZR=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  gap: 1rem;
`,JR=g.div`
  color: ${({theme:e})=>e.text.secondary};
  font-size: var(--text-md);
  text-align: center;
`,FR=g.button`
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
`,qR=()=>{const[e]=m.useState({id:"234567834567",name:"Heisenberg",teams:[{id:"34567876543",name:"Frontend Team",channels:[{id:"chan-fe-gen",name:"general"},{id:"chan-fe-ui",name:"ui-design"},{id:"chan-fe-bugs",name:"bug-reports"}]},{id:"456787654567",name:"Backend Team",channels:[{id:"chan-be-gen",name:"general"},{id:"chan-be-api",name:"api-development"},{id:"chan-be-db",name:"database"}]},{id:"789012345678",name:"DevOps Team",channels:[{id:"chan-do-gen",name:"general"},{id:"chan-do-deploy",name:"deployment"},{id:"chan-do-test",name:"testing"}]}]}),[a,r]=m.useState(()=>{try{const l=localStorage.getItem("o-c");return l?JSON.parse(l):(e==null?void 0:e.teams.map(u=>u.id))||[]}catch(l){return console.warn("Error reading from localStorage:",l),(e==null?void 0:e.teams.map(u=>u.id))||[]}}),o=l=>{r(u=>{const h=u.includes(l)?u.filter(b=>b!==l):[...u,l];try{localStorage.setItem("o-c",JSON.stringify(h))}catch(b){console.warn("Error saving to localStorage:",b)}return h})};return s.jsxs(VR,{children:[s.jsxs(XR,{children:[s.jsx(Kn,{title:`${e==null?void 0:e.name}`,heading:"h3"}),s.jsx(Wn,{placeholder:"Search in Heisenberg group"})]}),s.jsx(WR,{children:s.jsx(KR,{children:e==null?void 0:e.teams.map(l=>s.jsxs(tO,{children:[s.jsxs(aO,{onClick:()=>o(l.id),children:[s.jsxs(nO,{children:[s.jsx(rO,{children:s.jsx("span",{children:l.name})}),s.jsx(Ps,{children:s.jsx(qk,{})})]}),s.jsxs(eO,{children:[s.jsx(Ps,{children:s.jsx(Ho,{})}),s.jsx(Ps,{children:s.jsx(Xk,{})})]})]}),a.includes(l.id)&&s.jsx(iO,{children:s.jsx(oO,{children:l.channels.map(u=>s.jsx(fO,{children:s.jsxs(sO,{children:[s.jsxs(W4,{children:[s.jsx(Pl,{}),s.jsx("span",{children:u.name})]}),s.jsx(W4,{children:s.jsx(Ps,{children:s.jsx(Ho,{})})})]})},u.id))})})]},l.id))})})]})},VR=g.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`,XR=g.div`
  background-color: ${({theme:e})=>e.background.primary};
  position: sticky;
  top: 0;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 20;
`,WR=g.div`
  /* width: 100%; */
  border-top: 0.5px solid ${({theme:e})=>e.border.primary};
  margin: 0 1.5rem 1.5rem 1.5rem;
  padding-top: 1.5rem;
`,KR=g.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,eO=g.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  svg {
    visibility: hidden;
    &:hover {
      color: ${({theme:e})=>e.text.primary};
    }
  }
`,tO=g.li`
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
`,nO=g.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`,Ps=g.div`
  color: ${({theme:e})=>e.text.thirdly};
  display: flex;
  align-items: center;
  svg {
    width: 1.5rem;
    transition: rotate 0.2s ease;
  }
`,aO=g.div`
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
`,rO=g.div`
  span {
    font-size: var(--text-md);
    color: ${({theme:e})=>e.text.thirdly};
  }
  svg {
    width: 2rem;
  }
`,iO=g.div`
  padding: 0.8rem;
`,oO=g.ul`
  display: flex;
  flex-direction: column;
  /* gap: 1.5rem; */
`,fO=g.li`
  list-style-type: none;
`,sO=g.a`
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
`,W4=g.a`
  width: max-content;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`,eh=({title:e,onClick:a})=>s.jsx(s.Fragment,{children:s.jsxs(lO,{children:[s.jsx(cO,{onClick:a,children:s.jsx(NC,{})}),s.jsx(uO,{children:s.jsx("h3",{children:e})})]})}),lO=g.div`
width: 100%;
display: grid;
grid-template-columns: repeat(8, 1fr);
  padding: 3rem;
  padding-bottom: 2rem;
   @media (max-width: 700px) {
    padding: 2rem 2rem 1rem 1rem;
  }
/* padding-bottom: 5rem; */

`,cO=g.div`
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
`,uO=g.div`
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
`,dO=({})=>{const{setOpenSettings:e}=hf(),a=()=>{e&&e(!1)};return s.jsx(s.Fragment,{children:s.jsxs(hO,{children:[s.jsx(eh,{onClick:a,title:"Account"}),s.jsxs(mO,{children:[s.jsxs(ey,{children:[s.jsx(K4,{children:s.jsx("h5",{children:"Password"})}),s.jsx(ty,{children:s.jsx(Ct,{variant:"primary",title:"Change password",type:"button"})})]}),s.jsxs(ey,{children:[s.jsxs(K4,{children:[s.jsx("h5",{children:"Account Removal"}),s.jsx("p",{children:"Disabling your account means you can recover it at any time after taking this action."})]}),s.jsxs(ty,{children:[s.jsx(Ct,{variant:"danger",title:"Disable Account",type:"button"}),s.jsx(Ct,{variant:"danger",title:"Delete Account",type:"button"})]})]})]})]})})},hO=g.div`
  width: 100%;
`,mO=g.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  gap: 3rem;
  padding: 3rem;
   @media (max-width: 700px) {
    padding: 2rem;
  }
`,K4=g.div`
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
`,ey=g.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,ty=g.div`
  width: 100%;
  display: flex;
  gap: 1.5rem;
`,gO=()=>{const{setOpenSettings:e}=hf(),{user:a,updateUser:r}=Lt(),[o,l]=m.useState(!1),[u,h]=m.useState(""),[b,p]=m.useState(""),[y,v]=m.useState({fullName:(a==null?void 0:a.fullName)||"",jobTitle:(a==null?void 0:a.jobTitle)||"",biography:(a==null?void 0:a.biography)||""}),[x,j]=m.useState(!1);m.useEffect(()=>{if(a){const E={fullName:a.fullName,jobTitle:a.jobTitle||"",biography:a.biography||""};v(E)}},[a]),m.useEffect(()=>{if(a){const E=y.fullName!==a.fullName||y.jobTitle!==(a.jobTitle||"")||y.biography!==(a.biography||"");j(E)}},[y,a]);const C=()=>{e&&e(!1)},S=E=>{const{name:k,value:O}=E.target;v(D=>({...D,[k]:O})),h(""),p("")},L=async E=>{var k,O;E.preventDefault(),l(!0),h(""),p("");try{const D=await Oo.updateProfile(y);r(D.data.user),p("Profile updated successfully!"),j(!1)}catch(D){h(((O=(k=D.response)==null?void 0:k.data)==null?void 0:O.message)||"Failed to update profile")}finally{l(!1)}},T=()=>{a&&(v({fullName:a.fullName,jobTitle:a.jobTitle||"",biography:a.biography||""}),j(!1),h(""),p(""))};return a?s.jsxs(pO,{children:[s.jsx(eh,{onClick:C,title:"Profile"}),s.jsxs(yO,{children:[s.jsxs(vO,{children:[s.jsx(bO,{children:s.jsxs(wO,{htmlFor:"upload-image",children:[s.jsx(C1,{}),s.jsx("span",{children:"Update Avatar"}),s.jsx("input",{type:"file",name:"upload-image",id:"upload-image"})]})}),s.jsx("form",{onSubmit:L,children:s.jsxs(xO,{children:[u&&s.jsx(ny,{type:"error",children:u}),b&&s.jsx(ny,{type:"success",children:b}),s.jsxs(k0,{children:[s.jsx(E0,{htmlFor:"fullName",children:"Display Name"}),s.jsx(ay,{type:"text",name:"fullName",id:"fullName",value:y.fullName,onChange:S,placeholder:"Display Name",disabled:o,required:!0})]}),s.jsxs(k0,{children:[s.jsx(E0,{htmlFor:"jobTitle",children:"Job Title"}),s.jsx(ay,{type:"text",name:"jobTitle",id:"jobTitle",value:y.jobTitle,onChange:S,placeholder:"Job Title",disabled:o})]}),s.jsxs(k0,{children:[s.jsx(E0,{htmlFor:"biography",children:"Bio"}),s.jsx(MO,{name:"biography",id:"biography",value:y.biography,onChange:S,placeholder:"Tell us about yourself...",disabled:o})]}),s.jsx(IO,{children:s.jsxs(DO,{children:[s.jsx(Ct,{onClick:T,variant:"cancel",type:"button",title:"Cancel",disabled:o||!x}),s.jsx(Ct,{variant:"primary",type:"submit",title:o?"Updating...":"Update",disabled:o||!x})]})})]})})]}),s.jsx(jO,{children:s.jsx(LO,{children:s.jsxs(SO,{children:[s.jsxs(CO,{children:[s.jsx(EO,{children:a.avatar?s.jsx("img",{src:a.avatar,alt:a.fullName}):s.jsx(TO,{children:a.fullName.charAt(0).toUpperCase()})}),s.jsx(kO,{})]}),s.jsxs(NO,{children:[s.jsx("h4",{children:y.fullName||a.fullName}),s.jsxs("span",{children:["@",a.username]})]})]})})})]})]}):s.jsx("div",{children:"Loading..."})},pO=g.div`
  width: 100%;
`,yO=g.div`
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
`,ny=g.div`
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
`,bO=g.div`
  width: 100%;
  padding-bottom: 2rem;
`,wO=g.label`
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
`,vO=g.div`
  width: 100%;
`,xO=g.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,k0=g.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,E0=g.label`
  line-height: 1;
  font-size: var(--text-md);
  color: ${({theme:e})=>e.text.secondary};
  font-weight: 500;
`,ay=g.input`
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
`,MO=g.textarea`
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
`,jO=g.div`
  width: 100%;
  height: max-content;
  background-color: ${({theme:e})=>e.background.primary};
  border: 1px solid ${({theme:e})=>e.border.secondary};
  border-radius: 0.8rem;
  overflow: hidden;
  
  @media (max-width: 1000px) {
    display: none;
  }
`,LO=g.div`
  width: 100%;
  height: 10rem;
  background: var(--blue);
  position: relative;
  margin-bottom: 14rem;
`,SO=g.div`
  position: absolute;
  top: 5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`,CO=g.div`
  width: 11rem;
  height: 11rem;
  border-radius: 100%;
  background-color: ${({theme:e})=>e.background.primary};
  padding: 1rem;
  position: relative;
`,kO=g.div`
  width: 135%;
  height: 4rem;
  border-radius: 3rem;
  background-color: ${({theme:e})=>e.background.primary};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
`,EO=g.div`
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
`,TO=g.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-xxxl);
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, var(--blue), #764ba2);
`,NO=g.div`
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
`,IO=g.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
`,DO=g.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`,AO={"minimal-white":Tw,"glass-night":Rw,light:kw,"clean-light":Ew,"modern-sky":Nw,"soft-blush":Iw,dark:W1,"clean-dark":Dw,"modern-charcoal":Aw,"neo-dark":zw},zO=()=>{const{themeMode:e,switchTheme:a}=K1(),{setOpenSettings:r}=hf(),o=()=>{r&&r(!0)};return s.jsxs(RO,{children:[s.jsx(eh,{onClick:o,title:"Appearance"}),s.jsx(OO,{children:s.jsxs(_O,{children:[s.jsxs(BO,{children:[s.jsx("h5",{children:"Theme"}),s.jsx("p",{children:"Adjust the color of the interface for better visibility."})]}),s.jsx(UO,{children:s.jsx(YO,{children:Object.entries(AO).map(([l,u])=>s.jsx(GO,{onClick:()=>a(l),selected:e===l,mode:u.background.primary,title:l,children:e===l&&s.jsx(QO,{children:s.jsx(Zk,{})})},l))})})]})})]})},RO=g.div`
  width: 100%;
`,OO=g.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 3rem;
   @media (max-width: 700px) {
    padding: 2rem;
  }
`,BO=g.div`
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
`,_O=g.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,UO=g.div`
  width: 40rem;
  display: flex;
  gap: 1.5rem;
  @media (max-width: 700px) {
    width: 100%;
  }
`,YO=g.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.5rem;
  padding-top: 1rem;
  @media (max-width: 700px) {
      justify-content: center;
  gap: 1rem;

    }
`,GO=g.div`
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
`,QO=g.div`
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
`,$O=({})=>s.jsx(s.Fragment,{children:s.jsxs(PO,{children:[s.jsx(HO,{children:s.jsx("h3",{children:"Languages"})}),s.jsx(ZO,{})]})}),PO=g.div`
  width: 100%;
`,HO=g.div`
  width: 100%;
  padding-bottom: 5rem;
  h3 {
    font-weight: 500;
    font-size: var(--text-xxl);
    line-height: 1;
    color: ${({theme:e})=>e.text.primary};
  }
`,ZO=g.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`,JO=({})=>s.jsx(s.Fragment,{children:s.jsxs(FO,{children:[s.jsx(qO,{children:s.jsx("h3",{children:"Notifications"})}),s.jsx(VO,{})]})}),FO=g.div`
  width: 100%;
`,qO=g.div`
  width: 100%;
  padding-bottom: 5rem;
  h3 {
    font-weight: 500;
    font-size: var(--text-xxl);
    line-height: 1;
    color: ${({theme:e})=>e.text.primary};
  }
`,VO=g.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`,XO=()=>{const[e,a]=m.useState(""),[r,o]=m.useState(""),[l,u]=m.useState(!1),[h,b]=m.useState(""),[p,y]=m.useState(!1),{login:v}=Lt(),x=lr(),j=async C=>{var S,L;C.preventDefault(),b(""),y(!0);try{await v({email:e,password:r}),x("/app/@me")}catch(T){b(((L=(S=T.response)==null?void 0:S.data)==null?void 0:L.message)||"Login failed. Please try again.")}finally{y(!1)}};return s.jsx(WO,{children:s.jsx(KO,{children:s.jsxs(eB,{children:[s.jsxs(tB,{children:[s.jsx(Ol,{}),s.jsxs(nB,{children:[s.jsx("h1",{children:"Welcome back!"}),s.jsx("p",{children:"We're so excited to see you again!"})]})]}),s.jsxs(aB,{onSubmit:j,children:[h&&s.jsx(rB,{children:s.jsx("span",{children:h})}),s.jsxs(ry,{children:[s.jsxs(iy,{htmlFor:"email",children:["Email ",s.jsx("span",{children:"*"})]}),s.jsx(oy,{type:"email",id:"email",value:e,onChange:C=>a(C.target.value),required:!0,disabled:p,placeholder:"Enter your email"})]}),s.jsxs(ry,{children:[s.jsxs(iy,{htmlFor:"password",children:["Password ",s.jsx("span",{children:"*"})]}),s.jsxs(iB,{children:[s.jsx(oy,{type:l?"text":"password",id:"password",value:r,onChange:C=>o(C.target.value),required:!0,disabled:p,placeholder:"Enter your password"}),s.jsx(oB,{type:"button",onClick:()=>u(!l),disabled:p,children:l?s.jsx(H0,{}):s.jsx(Z0,{})})]})]}),s.jsx(fB,{children:s.jsx(Be,{to:"/forgot-password",children:"Forgot your password?"})}),s.jsx(sB,{children:p?s.jsxs(lB,{children:[s.jsx(kl,{}),s.jsx("span",{children:"Signing in..."})]}):s.jsx(Ct,{full:!0,type:"submit",variant:"primary",title:"Log In",disabled:p||!e||!r})}),s.jsxs(cB,{children:["Need an account? ",s.jsx(Be,{to:"/auth/register",children:"Register"})]})]})]})})})},WO=g.div`
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
`,KO=g.div`
  width: 100%;
  max-width: 480px;
  position: relative;
  z-index: 45678;
`,eB=g.div`
  background-color: ${({theme:e})=>e.background.secondary};
  border-radius: 1.6rem;
  padding: 3rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  border: 1px solid ${({theme:e})=>e.border.primary};

  @media (max-width: 600px) {
    padding: 3rem 2rem;
    border-radius: 1.2rem;
  }
`,tB=g.div`
  text-align: center;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`,nB=g.div`
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
`,aB=g.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,rB=g.div`
  background-color: #fee2e2;
  border: 1px solid #fecaca;
  color: #dc2626;
  padding: 1rem 1.5rem;
  border-radius: 0.8rem;
  font-size: var(--text-sm);
  text-align: center;
`,ry=g.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`,iy=g.label`
  font-size: var(--text-sm);
  font-weight: 600;
  color: ${({theme:e})=>e.text.thirdly};
  text-transform: capitalize;
  letter-spacing: 0.5px;

  span {
    color: #ef4444;
  }
`,oy=g.input`
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
`,iB=g.div`
  position: relative;
  display: flex;
  align-items: center;
`,oB=g.button`
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
`,fB=g.div`

  a {
    color: var(--blue);
    text-decoration: none;
    font-size: var(--text-base);
    font-weight: 500;
    &:hover {
      text-decoration: underline;
    }
  }
`,sB=g.div`
  margin-top: 1rem;
`,lB=g.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  color: ${({theme:e})=>e.text.secondary};

  span {
    font-size: var(--text-md);
  }
`,cB=g.div`
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
`,uB=()=>{const[e,a]=m.useState({username:"",email:"",fullName:"",password:"",confirmPassword:""}),[r,o]=m.useState(!1),[l,u]=m.useState(!1),[h,b]=m.useState({}),[p,y]=m.useState(!1),{register:v}=Lt(),x=lr(),j=()=>{const T={};return e.username?e.username.length<3?T.username="Username must be at least 3 characters":e.username.length>20?T.username="Username cannot exceed 20 characters":/^[a-zA-Z0-9_]+$/.test(e.username)||(T.username="Username can only contain letters, numbers, and underscores"):T.username="Username is required",e.email?/^\S+@\S+\.\S+$/.test(e.email)||(T.email="Please enter a valid email address"):T.email="Email is required",e.fullName?e.fullName.length>50&&(T.fullName="Full name cannot exceed 50 characters"):T.fullName="Full name is required",e.password?e.password.length<8&&(T.password="Password must be at least 8 characters"):T.password="Password is required",e.confirmPassword?e.password!==e.confirmPassword&&(T.confirmPassword="Passwords do not match"):T.confirmPassword="Please confirm your password",b(T),Object.keys(T).length===0},C=T=>{const{name:E,value:k}=T.target;a(O=>({...O,[E]:k})),h[E]&&b(O=>({...O,[E]:""}))},S=async T=>{var E,k;if(T.preventDefault(),!!j()){y(!0);try{const{confirmPassword:O,...D}=e;await v(D),x("/app/@me")}catch(O){(k=(E=O.response)==null?void 0:E.data)!=null&&k.message?b({general:O.response.data.message}):b({general:"Registration failed. Please try again."})}finally{y(!1)}}},L=Object.values(e).every(T=>T.trim()!=="")&&e.password===e.confirmPassword&&Object.keys(h).length===0;return s.jsx(dB,{children:s.jsx(hB,{children:s.jsxs(mB,{children:[s.jsxs(gB,{children:[s.jsx(Ol,{}),s.jsxs(pB,{children:[s.jsx("h1",{children:"Create an account"}),s.jsx("p",{children:"Join Mendam and start connecting with your team!"})]})]}),s.jsxs(yB,{onSubmit:S,children:[h.general&&s.jsx(bB,{children:s.jsx("span",{children:h.general})}),s.jsxs(Io,{children:[s.jsxs(Do,{htmlFor:"fullName",children:["Full Name ",s.jsx("span",{children:"*"})]}),s.jsx(Ao,{type:"text",id:"fullName",name:"fullName",value:e.fullName,onChange:C,disabled:p,placeholder:"Enter your full name",hasError:!!h.fullName}),h.fullName&&s.jsx(zo,{children:h.fullName})]}),s.jsxs(fy,{children:[s.jsxs(Io,{children:[s.jsxs(Do,{htmlFor:"email",children:["Email ",s.jsx("span",{children:"*"})]}),s.jsx(Ao,{type:"email",id:"email",name:"email",value:e.email,onChange:C,disabled:p,placeholder:"Enter your email",hasError:!!h.email}),h.email&&s.jsx(zo,{children:h.email})]}),s.jsxs(Io,{children:[s.jsxs(Do,{htmlFor:"username",children:["Username ",s.jsx("span",{children:"*"})]}),s.jsx(Ao,{type:"text",id:"username",name:"username",value:e.username,onChange:C,disabled:p,placeholder:"Enter your username",hasError:!!h.username}),h.username&&s.jsx(zo,{children:h.username})]})]}),s.jsxs(fy,{children:[s.jsxs(Io,{children:[s.jsxs(Do,{htmlFor:"password",children:["Password ",s.jsx("span",{children:"*"})]}),s.jsxs(sy,{children:[s.jsx(Ao,{type:r?"text":"password",id:"password",name:"password",value:e.password,onChange:C,disabled:p,placeholder:"Enter your password",hasError:!!h.password}),s.jsx(ly,{type:"button",onClick:()=>o(!r),disabled:p,children:r?s.jsx(H0,{}):s.jsx(Z0,{})})]}),h.password&&s.jsx(zo,{children:h.password})]}),s.jsxs(Io,{children:[s.jsxs(Do,{htmlFor:"confirmPassword",children:["Confirm Password ",s.jsx("span",{children:"*"})]}),s.jsxs(sy,{children:[s.jsx(Ao,{type:l?"text":"password",id:"confirmPassword",name:"confirmPassword",value:e.confirmPassword,onChange:C,disabled:p,placeholder:"Confirm your password",hasError:!!h.confirmPassword}),s.jsx(ly,{type:"button",onClick:()=>u(!l),disabled:p,children:l?s.jsx(H0,{}):s.jsx(Z0,{})})]}),h.confirmPassword&&s.jsx(zo,{children:h.confirmPassword})]})]}),s.jsx(wB,{children:p?s.jsxs(vB,{children:[s.jsx(kl,{}),s.jsx("span",{children:"Creating account..."})]}):s.jsx(Ct,{full:!0,type:"submit",variant:"primary",title:"Continue",disabled:p||!L})}),s.jsxs(xB,{children:["Already have an account? ",s.jsx(Be,{to:"/auth/login",children:"Log In"})]})]})]})})})},dB=g.div`
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
`,hB=g.div`
  width: 100%;
  max-width: 600px;
  position: relative;
  z-index: 45678;
`,mB=g.div`
  background-color: ${({theme:e})=>e.background.secondary};
  border-radius: 1.6rem;
  padding: 3rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  border: 1px solid ${({theme:e})=>e.border.primary};

  @media (max-width: 600px) {
    padding: 3rem 2rem;
    border-radius: 1.2rem;
  }
`,gB=g.div`
  text-align: center;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`,pB=g.div`
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
`,yB=g.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,bB=g.div`
  background-color: #fee2e2;
  border: 1px solid #fecaca;
  color: #dc2626;
  padding: 1rem 1.5rem;
  border-radius: 0.8rem;
  font-size: var(--text-sm);
  text-align: center;
`,fy=g.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,Io=g.div`
  display: grid;
  flex-direction: column;
  gap: 0.8rem;
`,Do=g.label`
  font-size: var(--text-sm);
  font-weight: 600;
  color: ${({theme:e})=>e.text.thirdly};
  text-transform: capitalize;
  letter-spacing: 0.5px;

  span {
    color: #ef4444;
  }
`,Ao=g.input`
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
`,sy=g.div`
  position: relative;
  display: flex;
  align-items: center;
`,ly=g.button`
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
`,zo=g.span`
  color: #ef4444;
  font-size: var(--text-xs);
  margin-top: 0.4rem;
`,wB=g.div`
  margin-top: 1rem;
`,vB=g.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  color: ${({theme:e})=>e.text.secondary};

  span {
    font-size: var(--text-md);
  }
`,xB=g.div`
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
`,cy=({children:e})=>{const{isAuthenticated:a,loading:r}=Lt(),o=un();return r?s.jsx(MB,{children:s.jsx("svg",{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 66.59 63.66",width:70,height:70,children:s.jsx(jB,{d:"M50,70.82c-.13-.51-.28-1.13-.47-1.74A29,29,0,0,0,45,60.79a70.83,70.83,0,0,0-5.71-6.41,59.7,59.7,0,0,1-9.34-12.16c-.37-.67-.69-1.37-1.06-2.1-.06.12-.12.21-.17.31a39.53,39.53,0,0,0-3.13,10A25.62,25.62,0,0,0,27.66,66a32.27,32.27,0,0,0,7.45,9.79A52.47,52.47,0,0,0,43,81.64l.21.14c-1.85.11-8.38-2.61-11.73-4.86a33.27,33.27,0,0,1-9-9,32.14,32.14,0,0,1-5-11.7,33.2,33.2,0,0,1,21-38c-.55.66-1.1,1.29-1.61,1.95a14.4,14.4,0,0,0-2.76,5.58A11.27,11.27,0,0,0,34.93,33a39,39,0,0,0,6.27,9.26C42.88,44.15,44.63,46,46.26,48a20.22,20.22,0,0,1,3.67,6.42s0,.05.07.09c.29-.67.54-1.34.85-2a30.15,30.15,0,0,1,5-7A79.35,79.35,0,0,0,62,38.22a28.19,28.19,0,0,0,3.49-6.28,10.94,10.94,0,0,0-1-9.84c-.82-1.38-1.86-2.63-2.7-3.81C72.49,21.9,83.66,33.71,83.28,50.08a33.12,33.12,0,0,1-26.5,31.75l1.84-1.2a42.78,42.78,0,0,0,11-10.08,25.92,25.92,0,0,0,4.94-11.64A28.44,28.44,0,0,0,73.38,46c-.62-2-1.4-3.93-2.11-5.89l-.2-.06a1,1,0,0,1,0,.18A40.08,40.08,0,0,1,65.43,49c-2.17,2.71-4.57,5.21-7,7.71a35.26,35.26,0,0,0-7,10.05C50.83,68.11,50.42,69.52,50,70.82Z",transform:"translate(-16.71 -18.17)"})})}):a?s.jsx(s.Fragment,{children:e}):s.jsx(u1,{to:"/auth/login",state:{from:o},replace:!0})},MB=g.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${({theme:e})=>e.background.primary};
`,jB=g.path`
  fill: ${({theme:e})=>e.text.primary};
`;g.div`
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
`;g.p`
  color: white;
  font-size: 1.6rem;
  font-weight: 500;
`;const LB=()=>s.jsx(RM,{children:s.jsxs(uM,{children:[s.jsx(yt,{path:"/",element:s.jsx(U9,{})}),s.jsx(yt,{path:"/auth/login",element:s.jsx(uy,{children:s.jsx(XO,{})})}),s.jsx(yt,{path:"/auth/register",element:s.jsx(uy,{children:s.jsx(uB,{})})}),s.jsxs(yt,{path:"/app",element:s.jsx(cy,{children:s.jsx(ez,{})}),children:[s.jsx(yt,{path:"@me",element:s.jsx(jz,{})}),s.jsx(yt,{path:"friends",element:s.jsx(nR,{})}),s.jsx(yt,{path:"groups",element:s.jsx(X4,{})}),s.jsx(yt,{path:"groups/:groupId",element:s.jsx(X4,{})}),s.jsx(yt,{path:"channel/:id",element:s.jsx(qR,{})})]}),s.jsxs(yt,{path:"/app/settings",element:s.jsx(cy,{children:s.jsx(hz,{})}),children:[s.jsx(yt,{path:"account",element:s.jsx(dO,{})}),s.jsx(yt,{path:"profile",element:s.jsx(gO,{})}),s.jsx(yt,{path:"appearance",element:s.jsx(zO,{})}),s.jsx(yt,{path:"languages",element:s.jsx($O,{})}),s.jsx(yt,{path:"notifications",element:s.jsx(JO,{})})]}),s.jsx(yt,{path:"*",element:s.jsx(u1,{to:"/",replace:!0})})]})}),uy=({children:e})=>{const{isAuthenticated:a,loading:r}=Lt();return r?s.jsx(SB,{children:s.jsx("svg",{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 66.59 63.66",width:70,height:70,children:s.jsx(CB,{d:"M50,70.82c-.13-.51-.28-1.13-.47-1.74A29,29,0,0,0,45,60.79a70.83,70.83,0,0,0-5.71-6.41,59.7,59.7,0,0,1-9.34-12.16c-.37-.67-.69-1.37-1.06-2.1-.06.12-.12.21-.17.31a39.53,39.53,0,0,0-3.13,10A25.62,25.62,0,0,0,27.66,66a32.27,32.27,0,0,0,7.45,9.79A52.47,52.47,0,0,0,43,81.64l.21.14c-1.85.11-8.38-2.61-11.73-4.86a33.27,33.27,0,0,1-9-9,32.14,32.14,0,0,1-5-11.7,33.2,33.2,0,0,1,21-38c-.55.66-1.1,1.29-1.61,1.95a14.4,14.4,0,0,0-2.76,5.58A11.27,11.27,0,0,0,34.93,33a39,39,0,0,0,6.27,9.26C42.88,44.15,44.63,46,46.26,48a20.22,20.22,0,0,1,3.67,6.42s0,.05.07.09c.29-.67.54-1.34.85-2a30.15,30.15,0,0,1,5-7A79.35,79.35,0,0,0,62,38.22a28.19,28.19,0,0,0,3.49-6.28,10.94,10.94,0,0,0-1-9.84c-.82-1.38-1.86-2.63-2.7-3.81C72.49,21.9,83.66,33.71,83.28,50.08a33.12,33.12,0,0,1-26.5,31.75l1.84-1.2a42.78,42.78,0,0,0,11-10.08,25.92,25.92,0,0,0,4.94-11.64A28.44,28.44,0,0,0,73.38,46c-.62-2-1.4-3.93-2.11-5.89l-.2-.06a1,1,0,0,1,0,.18A40.08,40.08,0,0,1,65.43,49c-2.17,2.71-4.57,5.21-7,7.71a35.26,35.26,0,0,0-7,10.05C50.83,68.11,50.42,69.52,50,70.82Z",transform:"translate(-16.71 -18.17)"})})}):a?s.jsx(u1,{to:"/app/@me",replace:!0}):s.jsx(s.Fragment,{children:e})},SB=g.div`
  width: 100%;
  height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e})=>e.background.primary};
`,CB=g.path`
  fill: ${({theme:e})=>e.text.placeholder};
`,kB=nf`

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
`,EB=nf`
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
`,TB=Hj`
${kB}

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


${EB}

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

`;function NB(){return s.jsx(L5,{children:s.jsx(t8,{children:s.jsx(n8,{children:s.jsx(SE,{children:s.jsx(a8,{children:s.jsx(oz,{children:s.jsxs(CD,{children:[s.jsx(TB,{}),s.jsx(LB,{})]})})})})})})})}bx.createRoot(document.getElementById("root")).render(s.jsx(m.StrictMode,{children:s.jsx(NB,{})}));
