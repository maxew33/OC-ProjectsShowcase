function sS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function x0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var D0={exports:{}},Cc={},N0={exports:{}},he={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var za=Symbol.for("react.element"),oS=Symbol.for("react.portal"),aS=Symbol.for("react.fragment"),lS=Symbol.for("react.strict_mode"),uS=Symbol.for("react.profiler"),cS=Symbol.for("react.provider"),fS=Symbol.for("react.context"),hS=Symbol.for("react.forward_ref"),dS=Symbol.for("react.suspense"),pS=Symbol.for("react.memo"),mS=Symbol.for("react.lazy"),ov=Symbol.iterator;function gS(t){return t===null||typeof t!="object"?null:(t=ov&&t[ov]||t["@@iterator"],typeof t=="function"?t:null)}var O0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M0=Object.assign,V0={};function Ks(t,e,n){this.props=t,this.context=e,this.refs=V0,this.updater=n||O0}Ks.prototype.isReactComponent={};Ks.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ks.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function L0(){}L0.prototype=Ks.prototype;function Dp(t,e,n){this.props=t,this.context=e,this.refs=V0,this.updater=n||O0}var Np=Dp.prototype=new L0;Np.constructor=Dp;M0(Np,Ks.prototype);Np.isPureReactComponent=!0;var av=Array.isArray,F0=Object.prototype.hasOwnProperty,Op={current:null},j0={key:!0,ref:!0,__self:!0,__source:!0};function U0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)F0.call(e,r)&&!j0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:za,type:t,key:s,ref:o,props:i,_owner:Op.current}}function vS(t,e){return{$$typeof:za,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Mp(t){return typeof t=="object"&&t!==null&&t.$$typeof===za}function yS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var lv=/\/+/g;function Hf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?yS(""+t.key):e.toString(36)}function lu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case za:case oS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Hf(o,0):r,av(i)?(n="",t!=null&&(n=t.replace(lv,"$&/")+"/"),lu(i,e,n,"",function(u){return u})):i!=null&&(Mp(i)&&(i=vS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(lv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",av(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Hf(s,a);o+=lu(s,e,n,l,i)}else if(l=gS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Hf(s,a++),o+=lu(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Tl(t,e,n){if(t==null)return t;var r=[],i=0;return lu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function _S(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var xt={current:null},uu={transition:null},ES={ReactCurrentDispatcher:xt,ReactCurrentBatchConfig:uu,ReactCurrentOwner:Op};he.Children={map:Tl,forEach:function(t,e,n){Tl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Tl(t,function(){e++}),e},toArray:function(t){return Tl(t,function(e){return e})||[]},only:function(t){if(!Mp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};he.Component=Ks;he.Fragment=aS;he.Profiler=uS;he.PureComponent=Dp;he.StrictMode=lS;he.Suspense=dS;he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ES;he.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=M0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Op.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)F0.call(e,l)&&!j0.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:za,type:t.type,key:i,ref:s,props:r,_owner:o}};he.createContext=function(t){return t={$$typeof:fS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:cS,_context:t},t.Consumer=t};he.createElement=U0;he.createFactory=function(t){var e=U0.bind(null,t);return e.type=t,e};he.createRef=function(){return{current:null}};he.forwardRef=function(t){return{$$typeof:hS,render:t}};he.isValidElement=Mp;he.lazy=function(t){return{$$typeof:mS,_payload:{_status:-1,_result:t},_init:_S}};he.memo=function(t,e){return{$$typeof:pS,type:t,compare:e===void 0?null:e}};he.startTransition=function(t){var e=uu.transition;uu.transition={};try{t()}finally{uu.transition=e}};he.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};he.useCallback=function(t,e){return xt.current.useCallback(t,e)};he.useContext=function(t){return xt.current.useContext(t)};he.useDebugValue=function(){};he.useDeferredValue=function(t){return xt.current.useDeferredValue(t)};he.useEffect=function(t,e){return xt.current.useEffect(t,e)};he.useId=function(){return xt.current.useId()};he.useImperativeHandle=function(t,e,n){return xt.current.useImperativeHandle(t,e,n)};he.useInsertionEffect=function(t,e){return xt.current.useInsertionEffect(t,e)};he.useLayoutEffect=function(t,e){return xt.current.useLayoutEffect(t,e)};he.useMemo=function(t,e){return xt.current.useMemo(t,e)};he.useReducer=function(t,e,n){return xt.current.useReducer(t,e,n)};he.useRef=function(t){return xt.current.useRef(t)};he.useState=function(t){return xt.current.useState(t)};he.useSyncExternalStore=function(t,e,n){return xt.current.useSyncExternalStore(t,e,n)};he.useTransition=function(){return xt.current.useTransition()};he.version="18.2.0";N0.exports=he;var O=N0.exports;const Ba=x0(O),wS=sS({__proto__:null,default:Ba},[O]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IS=O,TS=Symbol.for("react.element"),SS=Symbol.for("react.fragment"),AS=Object.prototype.hasOwnProperty,kS=IS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,PS={key:!0,ref:!0,__self:!0,__source:!0};function $0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)AS.call(e,r)&&!PS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:TS,type:t,key:s,ref:o,props:i,_owner:kS.current}}Cc.Fragment=SS;Cc.jsx=$0;Cc.jsxs=$0;D0.exports=Cc;var A=D0.exports,Hh={},z0={exports:{}},Gt={},B0={exports:{}},H0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(b,j){var te=b.length;b.push(j);e:for(;0<te;){var De=te-1>>>1,We=b[De];if(0<i(We,j))b[De]=j,b[te]=We,te=De;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var j=b[0],te=b.pop();if(te!==j){b[0]=te;e:for(var De=0,We=b.length,$i=We>>>1;De<$i;){var Ie=2*(De+1)-1,Mn=b[Ie],yn=Ie+1,zi=b[yn];if(0>i(Mn,te))yn<We&&0>i(zi,Mn)?(b[De]=zi,b[yn]=te,De=yn):(b[De]=Mn,b[Ie]=te,De=Ie);else if(yn<We&&0>i(zi,te))b[De]=zi,b[yn]=te,De=yn;else break e}}return j}function i(b,j){var te=b.sortIndex-j.sortIndex;return te!==0?te:b.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,h=3,m=!1,y=!1,_=!1,w=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(b){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=b)r(u),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(u)}}function d(b){if(_=!1,g(b),!y)if(n(l)!==null)y=!0,ce(I);else{var j=n(u);j!==null&&X(d,j.startTime-b)}}function I(b,j){y=!1,_&&(_=!1,v(E),E=-1),m=!0;var te=h;try{for(g(j),f=n(l);f!==null&&(!(f.expirationTime>j)||b&&!V());){var De=f.callback;if(typeof De=="function"){f.callback=null,h=f.priorityLevel;var We=De(f.expirationTime<=j);j=t.unstable_now(),typeof We=="function"?f.callback=We:f===n(l)&&r(l),g(j)}else r(l);f=n(l)}if(f!==null)var $i=!0;else{var Ie=n(u);Ie!==null&&X(d,Ie.startTime-j),$i=!1}return $i}finally{f=null,h=te,m=!1}}var k=!1,P=null,E=-1,R=5,C=-1;function V(){return!(t.unstable_now()-C<R)}function L(){if(P!==null){var b=t.unstable_now();C=b;var j=!0;try{j=P(!0,b)}finally{j?W():(k=!1,P=null)}}else k=!1}var W;if(typeof p=="function")W=function(){p(L)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,se=K.port2;K.port1.onmessage=L,W=function(){se.postMessage(null)}}else W=function(){w(L,0)};function ce(b){P=b,k||(k=!0,W())}function X(b,j){E=w(function(){b(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(b){b.callback=null},t.unstable_continueExecution=function(){y||m||(y=!0,ce(I))},t.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<b?Math.floor(1e3/b):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(b){switch(h){case 1:case 2:case 3:var j=3;break;default:j=h}var te=h;h=j;try{return b()}finally{h=te}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(b,j){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var te=h;h=b;try{return j()}finally{h=te}},t.unstable_scheduleCallback=function(b,j,te){var De=t.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?De+te:De):te=De,b){case 1:var We=-1;break;case 2:We=250;break;case 5:We=1073741823;break;case 4:We=1e4;break;default:We=5e3}return We=te+We,b={id:c++,callback:j,priorityLevel:b,startTime:te,expirationTime:We,sortIndex:-1},te>De?(b.sortIndex=te,e(u,b),n(l)===null&&b===n(u)&&(_?(v(E),E=-1):_=!0,X(d,te-De))):(b.sortIndex=We,e(l,b),y||m||(y=!0,ce(I))),b},t.unstable_shouldYield=V,t.unstable_wrapCallback=function(b){var j=h;return function(){var te=h;h=j;try{return b.apply(this,arguments)}finally{h=te}}}})(H0);B0.exports=H0;var RS=B0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W0=O,Wt=RS;function M(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var K0=new Set,Zo={};function Vi(t,e){Ps(t,e),Ps(t+"Capture",e)}function Ps(t,e){for(Zo[t]=e,t=0;t<e.length;t++)K0.add(e[t])}var qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wh=Object.prototype.hasOwnProperty,CS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,uv={},cv={};function bS(t){return Wh.call(cv,t)?!0:Wh.call(uv,t)?!1:CS.test(t)?cv[t]=!0:(uv[t]=!0,!1)}function xS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function DS(t,e,n,r){if(e===null||typeof e>"u"||xS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Dt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ht[t]=new Dt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ht[e]=new Dt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ht[t]=new Dt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ht[t]=new Dt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ht[t]=new Dt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ht[t]=new Dt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ht[t]=new Dt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ht[t]=new Dt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ht[t]=new Dt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Vp=/[\-:]([a-z])/g;function Lp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Vp,Lp);ht[e]=new Dt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Vp,Lp);ht[e]=new Dt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Vp,Lp);ht[e]=new Dt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ht[t]=new Dt(t,1,!1,t.toLowerCase(),null,!1,!1)});ht.xlinkHref=new Dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ht[t]=new Dt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Fp(t,e,n,r){var i=ht.hasOwnProperty(e)?ht[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(DS(e,n,i,r)&&(n=null),r||i===null?bS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var sr=W0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sl=Symbol.for("react.element"),Yi=Symbol.for("react.portal"),Xi=Symbol.for("react.fragment"),jp=Symbol.for("react.strict_mode"),Kh=Symbol.for("react.profiler"),G0=Symbol.for("react.provider"),q0=Symbol.for("react.context"),Up=Symbol.for("react.forward_ref"),Gh=Symbol.for("react.suspense"),qh=Symbol.for("react.suspense_list"),$p=Symbol.for("react.memo"),gr=Symbol.for("react.lazy"),Q0=Symbol.for("react.offscreen"),fv=Symbol.iterator;function ao(t){return t===null||typeof t!="object"?null:(t=fv&&t[fv]||t["@@iterator"],typeof t=="function"?t:null)}var Le=Object.assign,Wf;function Ao(t){if(Wf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Wf=e&&e[1]||""}return`
`+Wf+t}var Kf=!1;function Gf(t,e){if(!t||Kf)return"";Kf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Kf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ao(t):""}function NS(t){switch(t.tag){case 5:return Ao(t.type);case 16:return Ao("Lazy");case 13:return Ao("Suspense");case 19:return Ao("SuspenseList");case 0:case 2:case 15:return t=Gf(t.type,!1),t;case 11:return t=Gf(t.type.render,!1),t;case 1:return t=Gf(t.type,!0),t;default:return""}}function Qh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Xi:return"Fragment";case Yi:return"Portal";case Kh:return"Profiler";case jp:return"StrictMode";case Gh:return"Suspense";case qh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case q0:return(t.displayName||"Context")+".Consumer";case G0:return(t._context.displayName||"Context")+".Provider";case Up:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $p:return e=t.displayName||null,e!==null?e:Qh(t.type)||"Memo";case gr:e=t._payload,t=t._init;try{return Qh(t(e))}catch{}}return null}function OS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qh(e);case 8:return e===jp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ur(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Y0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function MS(t){var e=Y0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Al(t){t._valueTracker||(t._valueTracker=MS(t))}function X0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Y0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function bu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Yh(t,e){var n=e.checked;return Le({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function hv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ur(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function J0(t,e){e=e.checked,e!=null&&Fp(t,"checked",e,!1)}function Xh(t,e){J0(t,e);var n=Ur(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Jh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Jh(t,e.type,Ur(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function dv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Jh(t,e,n){(e!=="number"||bu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ko=Array.isArray;function ps(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ur(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Zh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(M(91));return Le({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function pv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(M(92));if(ko(n)){if(1<n.length)throw Error(M(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ur(n)}}function Z0(t,e){var n=Ur(e.value),r=Ur(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function mv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function e_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ed(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?e_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var kl,t_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(kl=kl||document.createElement("div"),kl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=kl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ea(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Oo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},VS=["Webkit","ms","Moz","O"];Object.keys(Oo).forEach(function(t){VS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Oo[e]=Oo[t]})});function n_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Oo.hasOwnProperty(t)&&Oo[t]?(""+e).trim():e+"px"}function r_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=n_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var LS=Le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function td(t,e){if(e){if(LS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(M(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(M(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(M(61))}if(e.style!=null&&typeof e.style!="object")throw Error(M(62))}}function nd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rd=null;function zp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var id=null,ms=null,gs=null;function gv(t){if(t=Ka(t)){if(typeof id!="function")throw Error(M(280));var e=t.stateNode;e&&(e=Oc(e),id(t.stateNode,t.type,e))}}function i_(t){ms?gs?gs.push(t):gs=[t]:ms=t}function s_(){if(ms){var t=ms,e=gs;if(gs=ms=null,gv(t),e)for(t=0;t<e.length;t++)gv(e[t])}}function o_(t,e){return t(e)}function a_(){}var qf=!1;function l_(t,e,n){if(qf)return t(e,n);qf=!0;try{return o_(t,e,n)}finally{qf=!1,(ms!==null||gs!==null)&&(a_(),s_())}}function ta(t,e){var n=t.stateNode;if(n===null)return null;var r=Oc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(M(231,e,typeof n));return n}var sd=!1;if(qn)try{var lo={};Object.defineProperty(lo,"passive",{get:function(){sd=!0}}),window.addEventListener("test",lo,lo),window.removeEventListener("test",lo,lo)}catch{sd=!1}function FS(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Mo=!1,xu=null,Du=!1,od=null,jS={onError:function(t){Mo=!0,xu=t}};function US(t,e,n,r,i,s,o,a,l){Mo=!1,xu=null,FS.apply(jS,arguments)}function $S(t,e,n,r,i,s,o,a,l){if(US.apply(this,arguments),Mo){if(Mo){var u=xu;Mo=!1,xu=null}else throw Error(M(198));Du||(Du=!0,od=u)}}function Li(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function u_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function vv(t){if(Li(t)!==t)throw Error(M(188))}function zS(t){var e=t.alternate;if(!e){if(e=Li(t),e===null)throw Error(M(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return vv(i),t;if(s===r)return vv(i),e;s=s.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?t:e}function c_(t){return t=zS(t),t!==null?f_(t):null}function f_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=f_(t);if(e!==null)return e;t=t.sibling}return null}var h_=Wt.unstable_scheduleCallback,yv=Wt.unstable_cancelCallback,BS=Wt.unstable_shouldYield,HS=Wt.unstable_requestPaint,He=Wt.unstable_now,WS=Wt.unstable_getCurrentPriorityLevel,Bp=Wt.unstable_ImmediatePriority,d_=Wt.unstable_UserBlockingPriority,Nu=Wt.unstable_NormalPriority,KS=Wt.unstable_LowPriority,p_=Wt.unstable_IdlePriority,bc=null,kn=null;function GS(t){if(kn&&typeof kn.onCommitFiberRoot=="function")try{kn.onCommitFiberRoot(bc,t,void 0,(t.current.flags&128)===128)}catch{}}var dn=Math.clz32?Math.clz32:YS,qS=Math.log,QS=Math.LN2;function YS(t){return t>>>=0,t===0?32:31-(qS(t)/QS|0)|0}var Pl=64,Rl=4194304;function Po(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ou(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Po(a):(s&=o,s!==0&&(r=Po(s)))}else o=n&~i,o!==0?r=Po(o):s!==0&&(r=Po(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-dn(e),i=1<<n,r|=t[n],e&=~i;return r}function XS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function JS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-dn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=XS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function ad(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function m_(){var t=Pl;return Pl<<=1,!(Pl&4194240)&&(Pl=64),t}function Qf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ha(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-dn(e),t[e]=n}function ZS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-dn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Hp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-dn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ye=0;function g_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var v_,Wp,y_,__,E_,ld=!1,Cl=[],Pr=null,Rr=null,Cr=null,na=new Map,ra=new Map,yr=[],eA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _v(t,e){switch(t){case"focusin":case"focusout":Pr=null;break;case"dragenter":case"dragleave":Rr=null;break;case"mouseover":case"mouseout":Cr=null;break;case"pointerover":case"pointerout":na.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ra.delete(e.pointerId)}}function uo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ka(e),e!==null&&Wp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function tA(t,e,n,r,i){switch(e){case"focusin":return Pr=uo(Pr,t,e,n,r,i),!0;case"dragenter":return Rr=uo(Rr,t,e,n,r,i),!0;case"mouseover":return Cr=uo(Cr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return na.set(s,uo(na.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ra.set(s,uo(ra.get(s)||null,t,e,n,r,i)),!0}return!1}function w_(t){var e=oi(t.target);if(e!==null){var n=Li(e);if(n!==null){if(e=n.tag,e===13){if(e=u_(n),e!==null){t.blockedOn=e,E_(t.priority,function(){y_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function cu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ud(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);rd=r,n.target.dispatchEvent(r),rd=null}else return e=Ka(n),e!==null&&Wp(e),t.blockedOn=n,!1;e.shift()}return!0}function Ev(t,e,n){cu(t)&&n.delete(e)}function nA(){ld=!1,Pr!==null&&cu(Pr)&&(Pr=null),Rr!==null&&cu(Rr)&&(Rr=null),Cr!==null&&cu(Cr)&&(Cr=null),na.forEach(Ev),ra.forEach(Ev)}function co(t,e){t.blockedOn===e&&(t.blockedOn=null,ld||(ld=!0,Wt.unstable_scheduleCallback(Wt.unstable_NormalPriority,nA)))}function ia(t){function e(i){return co(i,t)}if(0<Cl.length){co(Cl[0],t);for(var n=1;n<Cl.length;n++){var r=Cl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Pr!==null&&co(Pr,t),Rr!==null&&co(Rr,t),Cr!==null&&co(Cr,t),na.forEach(e),ra.forEach(e),n=0;n<yr.length;n++)r=yr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<yr.length&&(n=yr[0],n.blockedOn===null);)w_(n),n.blockedOn===null&&yr.shift()}var vs=sr.ReactCurrentBatchConfig,Mu=!0;function rA(t,e,n,r){var i=ye,s=vs.transition;vs.transition=null;try{ye=1,Kp(t,e,n,r)}finally{ye=i,vs.transition=s}}function iA(t,e,n,r){var i=ye,s=vs.transition;vs.transition=null;try{ye=4,Kp(t,e,n,r)}finally{ye=i,vs.transition=s}}function Kp(t,e,n,r){if(Mu){var i=ud(t,e,n,r);if(i===null)sh(t,e,r,Vu,n),_v(t,r);else if(tA(i,t,e,n,r))r.stopPropagation();else if(_v(t,r),e&4&&-1<eA.indexOf(t)){for(;i!==null;){var s=Ka(i);if(s!==null&&v_(s),s=ud(t,e,n,r),s===null&&sh(t,e,r,Vu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else sh(t,e,r,null,n)}}var Vu=null;function ud(t,e,n,r){if(Vu=null,t=zp(r),t=oi(t),t!==null)if(e=Li(t),e===null)t=null;else if(n=e.tag,n===13){if(t=u_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Vu=t,null}function I_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(WS()){case Bp:return 1;case d_:return 4;case Nu:case KS:return 16;case p_:return 536870912;default:return 16}default:return 16}}var Tr=null,Gp=null,fu=null;function T_(){if(fu)return fu;var t,e=Gp,n=e.length,r,i="value"in Tr?Tr.value:Tr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return fu=i.slice(t,1<r?1-r:void 0)}function hu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function bl(){return!0}function wv(){return!1}function qt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?bl:wv,this.isPropagationStopped=wv,this}return Le(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=bl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=bl)},persist:function(){},isPersistent:bl}),e}var Gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qp=qt(Gs),Wa=Le({},Gs,{view:0,detail:0}),sA=qt(Wa),Yf,Xf,fo,xc=Le({},Wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fo&&(fo&&t.type==="mousemove"?(Yf=t.screenX-fo.screenX,Xf=t.screenY-fo.screenY):Xf=Yf=0,fo=t),Yf)},movementY:function(t){return"movementY"in t?t.movementY:Xf}}),Iv=qt(xc),oA=Le({},xc,{dataTransfer:0}),aA=qt(oA),lA=Le({},Wa,{relatedTarget:0}),Jf=qt(lA),uA=Le({},Gs,{animationName:0,elapsedTime:0,pseudoElement:0}),cA=qt(uA),fA=Le({},Gs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),hA=qt(fA),dA=Le({},Gs,{data:0}),Tv=qt(dA),pA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=gA[t])?!!e[t]:!1}function Qp(){return vA}var yA=Le({},Wa,{key:function(t){if(t.key){var e=pA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=hu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?mA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qp,charCode:function(t){return t.type==="keypress"?hu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),_A=qt(yA),EA=Le({},xc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sv=qt(EA),wA=Le({},Wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qp}),IA=qt(wA),TA=Le({},Gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),SA=qt(TA),AA=Le({},xc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),kA=qt(AA),PA=[9,13,27,32],Yp=qn&&"CompositionEvent"in window,Vo=null;qn&&"documentMode"in document&&(Vo=document.documentMode);var RA=qn&&"TextEvent"in window&&!Vo,S_=qn&&(!Yp||Vo&&8<Vo&&11>=Vo),Av=String.fromCharCode(32),kv=!1;function A_(t,e){switch(t){case"keyup":return PA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function k_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ji=!1;function CA(t,e){switch(t){case"compositionend":return k_(e);case"keypress":return e.which!==32?null:(kv=!0,Av);case"textInput":return t=e.data,t===Av&&kv?null:t;default:return null}}function bA(t,e){if(Ji)return t==="compositionend"||!Yp&&A_(t,e)?(t=T_(),fu=Gp=Tr=null,Ji=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return S_&&e.locale!=="ko"?null:e.data;default:return null}}var xA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!xA[t.type]:e==="textarea"}function P_(t,e,n,r){i_(r),e=Lu(e,"onChange"),0<e.length&&(n=new qp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Lo=null,sa=null;function DA(t){F_(t,0)}function Dc(t){var e=ts(t);if(X0(e))return t}function NA(t,e){if(t==="change")return e}var R_=!1;if(qn){var Zf;if(qn){var eh="oninput"in document;if(!eh){var Rv=document.createElement("div");Rv.setAttribute("oninput","return;"),eh=typeof Rv.oninput=="function"}Zf=eh}else Zf=!1;R_=Zf&&(!document.documentMode||9<document.documentMode)}function Cv(){Lo&&(Lo.detachEvent("onpropertychange",C_),sa=Lo=null)}function C_(t){if(t.propertyName==="value"&&Dc(sa)){var e=[];P_(e,sa,t,zp(t)),l_(DA,e)}}function OA(t,e,n){t==="focusin"?(Cv(),Lo=e,sa=n,Lo.attachEvent("onpropertychange",C_)):t==="focusout"&&Cv()}function MA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Dc(sa)}function VA(t,e){if(t==="click")return Dc(e)}function LA(t,e){if(t==="input"||t==="change")return Dc(e)}function FA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var gn=typeof Object.is=="function"?Object.is:FA;function oa(t,e){if(gn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Wh.call(e,i)||!gn(t[i],e[i]))return!1}return!0}function bv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xv(t,e){var n=bv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bv(n)}}function b_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?b_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function x_(){for(var t=window,e=bu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=bu(t.document)}return e}function Xp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function jA(t){var e=x_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&b_(n.ownerDocument.documentElement,n)){if(r!==null&&Xp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=xv(n,s);var o=xv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var UA=qn&&"documentMode"in document&&11>=document.documentMode,Zi=null,cd=null,Fo=null,fd=!1;function Dv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fd||Zi==null||Zi!==bu(r)||(r=Zi,"selectionStart"in r&&Xp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fo&&oa(Fo,r)||(Fo=r,r=Lu(cd,"onSelect"),0<r.length&&(e=new qp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Zi)))}function xl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var es={animationend:xl("Animation","AnimationEnd"),animationiteration:xl("Animation","AnimationIteration"),animationstart:xl("Animation","AnimationStart"),transitionend:xl("Transition","TransitionEnd")},th={},D_={};qn&&(D_=document.createElement("div").style,"AnimationEvent"in window||(delete es.animationend.animation,delete es.animationiteration.animation,delete es.animationstart.animation),"TransitionEvent"in window||delete es.transitionend.transition);function Nc(t){if(th[t])return th[t];if(!es[t])return t;var e=es[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in D_)return th[t]=e[n];return t}var N_=Nc("animationend"),O_=Nc("animationiteration"),M_=Nc("animationstart"),V_=Nc("transitionend"),L_=new Map,Nv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qr(t,e){L_.set(t,e),Vi(e,[t])}for(var nh=0;nh<Nv.length;nh++){var rh=Nv[nh],$A=rh.toLowerCase(),zA=rh[0].toUpperCase()+rh.slice(1);qr($A,"on"+zA)}qr(N_,"onAnimationEnd");qr(O_,"onAnimationIteration");qr(M_,"onAnimationStart");qr("dblclick","onDoubleClick");qr("focusin","onFocus");qr("focusout","onBlur");qr(V_,"onTransitionEnd");Ps("onMouseEnter",["mouseout","mouseover"]);Ps("onMouseLeave",["mouseout","mouseover"]);Ps("onPointerEnter",["pointerout","pointerover"]);Ps("onPointerLeave",["pointerout","pointerover"]);Vi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),BA=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ro));function Ov(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,$S(r,e,void 0,t),t.currentTarget=null}function F_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Ov(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Ov(i,a,u),s=l}}}if(Du)throw t=od,Du=!1,od=null,t}function Se(t,e){var n=e[gd];n===void 0&&(n=e[gd]=new Set);var r=t+"__bubble";n.has(r)||(j_(e,t,2,!1),n.add(r))}function ih(t,e,n){var r=0;e&&(r|=4),j_(n,t,r,e)}var Dl="_reactListening"+Math.random().toString(36).slice(2);function aa(t){if(!t[Dl]){t[Dl]=!0,K0.forEach(function(n){n!=="selectionchange"&&(BA.has(n)||ih(n,!1,t),ih(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Dl]||(e[Dl]=!0,ih("selectionchange",!1,e))}}function j_(t,e,n,r){switch(I_(e)){case 1:var i=rA;break;case 4:i=iA;break;default:i=Kp}n=i.bind(null,e,n,t),i=void 0,!sd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function sh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=oi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}l_(function(){var u=s,c=zp(n),f=[];e:{var h=L_.get(t);if(h!==void 0){var m=qp,y=t;switch(t){case"keypress":if(hu(n)===0)break e;case"keydown":case"keyup":m=_A;break;case"focusin":y="focus",m=Jf;break;case"focusout":y="blur",m=Jf;break;case"beforeblur":case"afterblur":m=Jf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Iv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=aA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=IA;break;case N_:case O_:case M_:m=cA;break;case V_:m=SA;break;case"scroll":m=sA;break;case"wheel":m=kA;break;case"copy":case"cut":case"paste":m=hA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Sv}var _=(e&4)!==0,w=!_&&t==="scroll",v=_?h!==null?h+"Capture":null:h;_=[];for(var p=u,g;p!==null;){g=p;var d=g.stateNode;if(g.tag===5&&d!==null&&(g=d,v!==null&&(d=ta(p,v),d!=null&&_.push(la(p,d,g)))),w)break;p=p.return}0<_.length&&(h=new m(h,y,null,n,c),f.push({event:h,listeners:_}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==rd&&(y=n.relatedTarget||n.fromElement)&&(oi(y)||y[Qn]))break e;if((m||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?oi(y):null,y!==null&&(w=Li(y),y!==w||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(_=Iv,d="onMouseLeave",v="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(_=Sv,d="onPointerLeave",v="onPointerEnter",p="pointer"),w=m==null?h:ts(m),g=y==null?h:ts(y),h=new _(d,p+"leave",m,n,c),h.target=w,h.relatedTarget=g,d=null,oi(c)===u&&(_=new _(v,p+"enter",y,n,c),_.target=g,_.relatedTarget=w,d=_),w=d,m&&y)t:{for(_=m,v=y,p=0,g=_;g;g=Bi(g))p++;for(g=0,d=v;d;d=Bi(d))g++;for(;0<p-g;)_=Bi(_),p--;for(;0<g-p;)v=Bi(v),g--;for(;p--;){if(_===v||v!==null&&_===v.alternate)break t;_=Bi(_),v=Bi(v)}_=null}else _=null;m!==null&&Mv(f,h,m,_,!1),y!==null&&w!==null&&Mv(f,w,y,_,!0)}}e:{if(h=u?ts(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var I=NA;else if(Pv(h))if(R_)I=LA;else{I=MA;var k=OA}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(I=VA);if(I&&(I=I(t,u))){P_(f,I,n,c);break e}k&&k(t,h,u),t==="focusout"&&(k=h._wrapperState)&&k.controlled&&h.type==="number"&&Jh(h,"number",h.value)}switch(k=u?ts(u):window,t){case"focusin":(Pv(k)||k.contentEditable==="true")&&(Zi=k,cd=u,Fo=null);break;case"focusout":Fo=cd=Zi=null;break;case"mousedown":fd=!0;break;case"contextmenu":case"mouseup":case"dragend":fd=!1,Dv(f,n,c);break;case"selectionchange":if(UA)break;case"keydown":case"keyup":Dv(f,n,c)}var P;if(Yp)e:{switch(t){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Ji?A_(t,n)&&(E="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(S_&&n.locale!=="ko"&&(Ji||E!=="onCompositionStart"?E==="onCompositionEnd"&&Ji&&(P=T_()):(Tr=c,Gp="value"in Tr?Tr.value:Tr.textContent,Ji=!0)),k=Lu(u,E),0<k.length&&(E=new Tv(E,t,null,n,c),f.push({event:E,listeners:k}),P?E.data=P:(P=k_(n),P!==null&&(E.data=P)))),(P=RA?CA(t,n):bA(t,n))&&(u=Lu(u,"onBeforeInput"),0<u.length&&(c=new Tv("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=P))}F_(f,e)})}function la(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Lu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ta(t,n),s!=null&&r.unshift(la(t,s,i)),s=ta(t,e),s!=null&&r.push(la(t,s,i))),t=t.return}return r}function Bi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Mv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ta(n,s),l!=null&&o.unshift(la(n,l,a))):i||(l=ta(n,s),l!=null&&o.push(la(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var HA=/\r\n?/g,WA=/\u0000|\uFFFD/g;function Vv(t){return(typeof t=="string"?t:""+t).replace(HA,`
`).replace(WA,"")}function Nl(t,e,n){if(e=Vv(e),Vv(t)!==e&&n)throw Error(M(425))}function Fu(){}var hd=null,dd=null;function pd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var md=typeof setTimeout=="function"?setTimeout:void 0,KA=typeof clearTimeout=="function"?clearTimeout:void 0,Lv=typeof Promise=="function"?Promise:void 0,GA=typeof queueMicrotask=="function"?queueMicrotask:typeof Lv<"u"?function(t){return Lv.resolve(null).then(t).catch(qA)}:md;function qA(t){setTimeout(function(){throw t})}function oh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ia(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ia(e)}function br(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Fv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var qs=Math.random().toString(36).slice(2),wn="__reactFiber$"+qs,ua="__reactProps$"+qs,Qn="__reactContainer$"+qs,gd="__reactEvents$"+qs,QA="__reactListeners$"+qs,YA="__reactHandles$"+qs;function oi(t){var e=t[wn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Qn]||n[wn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Fv(t);t!==null;){if(n=t[wn])return n;t=Fv(t)}return e}t=n,n=t.parentNode}return null}function Ka(t){return t=t[wn]||t[Qn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ts(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(M(33))}function Oc(t){return t[ua]||null}var vd=[],ns=-1;function Qr(t){return{current:t}}function Pe(t){0>ns||(t.current=vd[ns],vd[ns]=null,ns--)}function Te(t,e){ns++,vd[ns]=t.current,t.current=e}var $r={},St=Qr($r),Lt=Qr(!1),Ei=$r;function Rs(t,e){var n=t.type.contextTypes;if(!n)return $r;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ft(t){return t=t.childContextTypes,t!=null}function ju(){Pe(Lt),Pe(St)}function jv(t,e,n){if(St.current!==$r)throw Error(M(168));Te(St,e),Te(Lt,n)}function U_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(M(108,OS(t)||"Unknown",i));return Le({},n,r)}function Uu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||$r,Ei=St.current,Te(St,t),Te(Lt,Lt.current),!0}function Uv(t,e,n){var r=t.stateNode;if(!r)throw Error(M(169));n?(t=U_(t,e,Ei),r.__reactInternalMemoizedMergedChildContext=t,Pe(Lt),Pe(St),Te(St,t)):Pe(Lt),Te(Lt,n)}var jn=null,Mc=!1,ah=!1;function $_(t){jn===null?jn=[t]:jn.push(t)}function XA(t){Mc=!0,$_(t)}function Yr(){if(!ah&&jn!==null){ah=!0;var t=0,e=ye;try{var n=jn;for(ye=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}jn=null,Mc=!1}catch(i){throw jn!==null&&(jn=jn.slice(t+1)),h_(Bp,Yr),i}finally{ye=e,ah=!1}}return null}var rs=[],is=0,$u=null,zu=0,Xt=[],Jt=0,wi=null,$n=1,zn="";function ri(t,e){rs[is++]=zu,rs[is++]=$u,$u=t,zu=e}function z_(t,e,n){Xt[Jt++]=$n,Xt[Jt++]=zn,Xt[Jt++]=wi,wi=t;var r=$n;t=zn;var i=32-dn(r)-1;r&=~(1<<i),n+=1;var s=32-dn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,$n=1<<32-dn(e)+i|n<<i|r,zn=s+t}else $n=1<<s|n<<i|r,zn=t}function Jp(t){t.return!==null&&(ri(t,1),z_(t,1,0))}function Zp(t){for(;t===$u;)$u=rs[--is],rs[is]=null,zu=rs[--is],rs[is]=null;for(;t===wi;)wi=Xt[--Jt],Xt[Jt]=null,zn=Xt[--Jt],Xt[Jt]=null,$n=Xt[--Jt],Xt[Jt]=null}var Ht=null,zt=null,be=!1,fn=null;function B_(t,e){var n=en(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function $v(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ht=t,zt=br(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ht=t,zt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=wi!==null?{id:$n,overflow:zn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=en(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ht=t,zt=null,!0):!1;default:return!1}}function yd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function _d(t){if(be){var e=zt;if(e){var n=e;if(!$v(t,e)){if(yd(t))throw Error(M(418));e=br(n.nextSibling);var r=Ht;e&&$v(t,e)?B_(r,n):(t.flags=t.flags&-4097|2,be=!1,Ht=t)}}else{if(yd(t))throw Error(M(418));t.flags=t.flags&-4097|2,be=!1,Ht=t}}}function zv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ht=t}function Ol(t){if(t!==Ht)return!1;if(!be)return zv(t),be=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!pd(t.type,t.memoizedProps)),e&&(e=zt)){if(yd(t))throw H_(),Error(M(418));for(;e;)B_(t,e),e=br(e.nextSibling)}if(zv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){zt=br(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}zt=null}}else zt=Ht?br(t.stateNode.nextSibling):null;return!0}function H_(){for(var t=zt;t;)t=br(t.nextSibling)}function Cs(){zt=Ht=null,be=!1}function em(t){fn===null?fn=[t]:fn.push(t)}var JA=sr.ReactCurrentBatchConfig;function ln(t,e){if(t&&t.defaultProps){e=Le({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Bu=Qr(null),Hu=null,ss=null,tm=null;function nm(){tm=ss=Hu=null}function rm(t){var e=Bu.current;Pe(Bu),t._currentValue=e}function Ed(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ys(t,e){Hu=t,tm=ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Vt=!0),t.firstContext=null)}function rn(t){var e=t._currentValue;if(tm!==t)if(t={context:t,memoizedValue:e,next:null},ss===null){if(Hu===null)throw Error(M(308));ss=t,Hu.dependencies={lanes:0,firstContext:t}}else ss=ss.next=t;return e}var ai=null;function im(t){ai===null?ai=[t]:ai.push(t)}function W_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,im(e)):(n.next=i.next,i.next=n),e.interleaved=n,Yn(t,r)}function Yn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var vr=!1;function sm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function K_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Kn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function xr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,me&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Yn(t,n)}return i=r.interleaved,i===null?(e.next=e,im(r)):(e.next=i.next,i.next=e),r.interleaved=e,Yn(t,n)}function du(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Hp(t,n)}}function Bv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Wu(t,e,n,r){var i=t.updateQueue;vr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,_=a;switch(h=e,m=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){f=y.call(m,f,h);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,h=typeof y=="function"?y.call(m,f,h):y,h==null)break e;f=Le({},f,h);break e;case 2:vr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=f):c=c.next=m,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ti|=o,t.lanes=o,t.memoizedState=f}}function Hv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var G_=new W0.Component().refs;function wd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Le({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Vc={isMounted:function(t){return(t=t._reactInternals)?Li(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ct(),i=Nr(t),s=Kn(r,i);s.payload=e,n!=null&&(s.callback=n),e=xr(t,s,i),e!==null&&(pn(e,t,i,r),du(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ct(),i=Nr(t),s=Kn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=xr(t,s,i),e!==null&&(pn(e,t,i,r),du(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ct(),r=Nr(t),i=Kn(n,r);i.tag=2,e!=null&&(i.callback=e),e=xr(t,i,r),e!==null&&(pn(e,t,r,n),du(e,t,r))}};function Wv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!oa(n,r)||!oa(i,s):!0}function q_(t,e,n){var r=!1,i=$r,s=e.contextType;return typeof s=="object"&&s!==null?s=rn(s):(i=Ft(e)?Ei:St.current,r=e.contextTypes,s=(r=r!=null)?Rs(t,i):$r),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Vc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Kv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Vc.enqueueReplaceState(e,e.state,null)}function Id(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=G_,sm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=rn(s):(s=Ft(e)?Ei:St.current,i.context=Rs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(wd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Vc.enqueueReplaceState(i,i.state,null),Wu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ho(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===G_&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,t))}return t}function Ml(t,e){throw t=Object.prototype.toString.call(e),Error(M(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Gv(t){var e=t._init;return e(t._payload)}function Q_(t){function e(v,p){if(t){var g=v.deletions;g===null?(v.deletions=[p],v.flags|=16):g.push(p)}}function n(v,p){if(!t)return null;for(;p!==null;)e(v,p),p=p.sibling;return null}function r(v,p){for(v=new Map;p!==null;)p.key!==null?v.set(p.key,p):v.set(p.index,p),p=p.sibling;return v}function i(v,p){return v=Or(v,p),v.index=0,v.sibling=null,v}function s(v,p,g){return v.index=g,t?(g=v.alternate,g!==null?(g=g.index,g<p?(v.flags|=2,p):g):(v.flags|=2,p)):(v.flags|=1048576,p)}function o(v){return t&&v.alternate===null&&(v.flags|=2),v}function a(v,p,g,d){return p===null||p.tag!==6?(p=ph(g,v.mode,d),p.return=v,p):(p=i(p,g),p.return=v,p)}function l(v,p,g,d){var I=g.type;return I===Xi?c(v,p,g.props.children,d,g.key):p!==null&&(p.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===gr&&Gv(I)===p.type)?(d=i(p,g.props),d.ref=ho(v,p,g),d.return=v,d):(d=_u(g.type,g.key,g.props,null,v.mode,d),d.ref=ho(v,p,g),d.return=v,d)}function u(v,p,g,d){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=mh(g,v.mode,d),p.return=v,p):(p=i(p,g.children||[]),p.return=v,p)}function c(v,p,g,d,I){return p===null||p.tag!==7?(p=vi(g,v.mode,d,I),p.return=v,p):(p=i(p,g),p.return=v,p)}function f(v,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ph(""+p,v.mode,g),p.return=v,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Sl:return g=_u(p.type,p.key,p.props,null,v.mode,g),g.ref=ho(v,null,p),g.return=v,g;case Yi:return p=mh(p,v.mode,g),p.return=v,p;case gr:var d=p._init;return f(v,d(p._payload),g)}if(ko(p)||ao(p))return p=vi(p,v.mode,g,null),p.return=v,p;Ml(v,p)}return null}function h(v,p,g,d){var I=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return I!==null?null:a(v,p,""+g,d);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Sl:return g.key===I?l(v,p,g,d):null;case Yi:return g.key===I?u(v,p,g,d):null;case gr:return I=g._init,h(v,p,I(g._payload),d)}if(ko(g)||ao(g))return I!==null?null:c(v,p,g,d,null);Ml(v,g)}return null}function m(v,p,g,d,I){if(typeof d=="string"&&d!==""||typeof d=="number")return v=v.get(g)||null,a(p,v,""+d,I);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Sl:return v=v.get(d.key===null?g:d.key)||null,l(p,v,d,I);case Yi:return v=v.get(d.key===null?g:d.key)||null,u(p,v,d,I);case gr:var k=d._init;return m(v,p,g,k(d._payload),I)}if(ko(d)||ao(d))return v=v.get(g)||null,c(p,v,d,I,null);Ml(p,d)}return null}function y(v,p,g,d){for(var I=null,k=null,P=p,E=p=0,R=null;P!==null&&E<g.length;E++){P.index>E?(R=P,P=null):R=P.sibling;var C=h(v,P,g[E],d);if(C===null){P===null&&(P=R);break}t&&P&&C.alternate===null&&e(v,P),p=s(C,p,E),k===null?I=C:k.sibling=C,k=C,P=R}if(E===g.length)return n(v,P),be&&ri(v,E),I;if(P===null){for(;E<g.length;E++)P=f(v,g[E],d),P!==null&&(p=s(P,p,E),k===null?I=P:k.sibling=P,k=P);return be&&ri(v,E),I}for(P=r(v,P);E<g.length;E++)R=m(P,v,E,g[E],d),R!==null&&(t&&R.alternate!==null&&P.delete(R.key===null?E:R.key),p=s(R,p,E),k===null?I=R:k.sibling=R,k=R);return t&&P.forEach(function(V){return e(v,V)}),be&&ri(v,E),I}function _(v,p,g,d){var I=ao(g);if(typeof I!="function")throw Error(M(150));if(g=I.call(g),g==null)throw Error(M(151));for(var k=I=null,P=p,E=p=0,R=null,C=g.next();P!==null&&!C.done;E++,C=g.next()){P.index>E?(R=P,P=null):R=P.sibling;var V=h(v,P,C.value,d);if(V===null){P===null&&(P=R);break}t&&P&&V.alternate===null&&e(v,P),p=s(V,p,E),k===null?I=V:k.sibling=V,k=V,P=R}if(C.done)return n(v,P),be&&ri(v,E),I;if(P===null){for(;!C.done;E++,C=g.next())C=f(v,C.value,d),C!==null&&(p=s(C,p,E),k===null?I=C:k.sibling=C,k=C);return be&&ri(v,E),I}for(P=r(v,P);!C.done;E++,C=g.next())C=m(P,v,E,C.value,d),C!==null&&(t&&C.alternate!==null&&P.delete(C.key===null?E:C.key),p=s(C,p,E),k===null?I=C:k.sibling=C,k=C);return t&&P.forEach(function(L){return e(v,L)}),be&&ri(v,E),I}function w(v,p,g,d){if(typeof g=="object"&&g!==null&&g.type===Xi&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Sl:e:{for(var I=g.key,k=p;k!==null;){if(k.key===I){if(I=g.type,I===Xi){if(k.tag===7){n(v,k.sibling),p=i(k,g.props.children),p.return=v,v=p;break e}}else if(k.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===gr&&Gv(I)===k.type){n(v,k.sibling),p=i(k,g.props),p.ref=ho(v,k,g),p.return=v,v=p;break e}n(v,k);break}else e(v,k);k=k.sibling}g.type===Xi?(p=vi(g.props.children,v.mode,d,g.key),p.return=v,v=p):(d=_u(g.type,g.key,g.props,null,v.mode,d),d.ref=ho(v,p,g),d.return=v,v=d)}return o(v);case Yi:e:{for(k=g.key;p!==null;){if(p.key===k)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(v,p.sibling),p=i(p,g.children||[]),p.return=v,v=p;break e}else{n(v,p);break}else e(v,p);p=p.sibling}p=mh(g,v.mode,d),p.return=v,v=p}return o(v);case gr:return k=g._init,w(v,p,k(g._payload),d)}if(ko(g))return y(v,p,g,d);if(ao(g))return _(v,p,g,d);Ml(v,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(v,p.sibling),p=i(p,g),p.return=v,v=p):(n(v,p),p=ph(g,v.mode,d),p.return=v,v=p),o(v)):n(v,p)}return w}var bs=Q_(!0),Y_=Q_(!1),Ga={},Pn=Qr(Ga),ca=Qr(Ga),fa=Qr(Ga);function li(t){if(t===Ga)throw Error(M(174));return t}function om(t,e){switch(Te(fa,e),Te(ca,t),Te(Pn,Ga),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ed(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ed(e,t)}Pe(Pn),Te(Pn,e)}function xs(){Pe(Pn),Pe(ca),Pe(fa)}function X_(t){li(fa.current);var e=li(Pn.current),n=ed(e,t.type);e!==n&&(Te(ca,t),Te(Pn,n))}function am(t){ca.current===t&&(Pe(Pn),Pe(ca))}var Me=Qr(0);function Ku(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var lh=[];function lm(){for(var t=0;t<lh.length;t++)lh[t]._workInProgressVersionPrimary=null;lh.length=0}var pu=sr.ReactCurrentDispatcher,uh=sr.ReactCurrentBatchConfig,Ii=0,Ve=null,Xe=null,rt=null,Gu=!1,jo=!1,ha=0,ZA=0;function pt(){throw Error(M(321))}function um(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!gn(t[n],e[n]))return!1;return!0}function cm(t,e,n,r,i,s){if(Ii=s,Ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,pu.current=t===null||t.memoizedState===null?rk:ik,t=n(r,i),jo){s=0;do{if(jo=!1,ha=0,25<=s)throw Error(M(301));s+=1,rt=Xe=null,e.updateQueue=null,pu.current=sk,t=n(r,i)}while(jo)}if(pu.current=qu,e=Xe!==null&&Xe.next!==null,Ii=0,rt=Xe=Ve=null,Gu=!1,e)throw Error(M(300));return t}function fm(){var t=ha!==0;return ha=0,t}function En(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rt===null?Ve.memoizedState=rt=t:rt=rt.next=t,rt}function sn(){if(Xe===null){var t=Ve.alternate;t=t!==null?t.memoizedState:null}else t=Xe.next;var e=rt===null?Ve.memoizedState:rt.next;if(e!==null)rt=e,Xe=t;else{if(t===null)throw Error(M(310));Xe=t,t={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},rt===null?Ve.memoizedState=rt=t:rt=rt.next=t}return rt}function da(t,e){return typeof e=="function"?e(t):e}function ch(t){var e=sn(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=Xe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ii&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,Ve.lanes|=c,Ti|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,gn(r,e.memoizedState)||(Vt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ve.lanes|=s,Ti|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function fh(t){var e=sn(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);gn(s,e.memoizedState)||(Vt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function J_(){}function Z_(t,e){var n=Ve,r=sn(),i=e(),s=!gn(r.memoizedState,i);if(s&&(r.memoizedState=i,Vt=!0),r=r.queue,hm(nE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||rt!==null&&rt.memoizedState.tag&1){if(n.flags|=2048,pa(9,tE.bind(null,n,r,i,e),void 0,null),it===null)throw Error(M(349));Ii&30||eE(n,e,i)}return i}function eE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ve.updateQueue,e===null?(e={lastEffect:null,stores:null},Ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function tE(t,e,n,r){e.value=n,e.getSnapshot=r,rE(e)&&iE(t)}function nE(t,e,n){return n(function(){rE(e)&&iE(t)})}function rE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!gn(t,n)}catch{return!0}}function iE(t){var e=Yn(t,1);e!==null&&pn(e,t,1,-1)}function qv(t){var e=En();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:t},e.queue=t,t=t.dispatch=nk.bind(null,Ve,t),[e.memoizedState,t]}function pa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ve.updateQueue,e===null?(e={lastEffect:null,stores:null},Ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function sE(){return sn().memoizedState}function mu(t,e,n,r){var i=En();Ve.flags|=t,i.memoizedState=pa(1|e,n,void 0,r===void 0?null:r)}function Lc(t,e,n,r){var i=sn();r=r===void 0?null:r;var s=void 0;if(Xe!==null){var o=Xe.memoizedState;if(s=o.destroy,r!==null&&um(r,o.deps)){i.memoizedState=pa(e,n,s,r);return}}Ve.flags|=t,i.memoizedState=pa(1|e,n,s,r)}function Qv(t,e){return mu(8390656,8,t,e)}function hm(t,e){return Lc(2048,8,t,e)}function oE(t,e){return Lc(4,2,t,e)}function aE(t,e){return Lc(4,4,t,e)}function lE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function uE(t,e,n){return n=n!=null?n.concat([t]):null,Lc(4,4,lE.bind(null,e,t),n)}function dm(){}function cE(t,e){var n=sn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&um(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function fE(t,e){var n=sn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&um(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function hE(t,e,n){return Ii&21?(gn(n,e)||(n=m_(),Ve.lanes|=n,Ti|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Vt=!0),t.memoizedState=n)}function ek(t,e){var n=ye;ye=n!==0&&4>n?n:4,t(!0);var r=uh.transition;uh.transition={};try{t(!1),e()}finally{ye=n,uh.transition=r}}function dE(){return sn().memoizedState}function tk(t,e,n){var r=Nr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},pE(t))mE(e,n);else if(n=W_(t,e,n,r),n!==null){var i=Ct();pn(n,t,r,i),gE(n,e,r)}}function nk(t,e,n){var r=Nr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(pE(t))mE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,gn(a,o)){var l=e.interleaved;l===null?(i.next=i,im(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=W_(t,e,i,r),n!==null&&(i=Ct(),pn(n,t,r,i),gE(n,e,r))}}function pE(t){var e=t.alternate;return t===Ve||e!==null&&e===Ve}function mE(t,e){jo=Gu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function gE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Hp(t,n)}}var qu={readContext:rn,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useInsertionEffect:pt,useLayoutEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useMutableSource:pt,useSyncExternalStore:pt,useId:pt,unstable_isNewReconciler:!1},rk={readContext:rn,useCallback:function(t,e){return En().memoizedState=[t,e===void 0?null:e],t},useContext:rn,useEffect:Qv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,mu(4194308,4,lE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return mu(4194308,4,t,e)},useInsertionEffect:function(t,e){return mu(4,2,t,e)},useMemo:function(t,e){var n=En();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=En();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=tk.bind(null,Ve,t),[r.memoizedState,t]},useRef:function(t){var e=En();return t={current:t},e.memoizedState=t},useState:qv,useDebugValue:dm,useDeferredValue:function(t){return En().memoizedState=t},useTransition:function(){var t=qv(!1),e=t[0];return t=ek.bind(null,t[1]),En().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ve,i=En();if(be){if(n===void 0)throw Error(M(407));n=n()}else{if(n=e(),it===null)throw Error(M(349));Ii&30||eE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Qv(nE.bind(null,r,s,t),[t]),r.flags|=2048,pa(9,tE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=En(),e=it.identifierPrefix;if(be){var n=zn,r=$n;n=(r&~(1<<32-dn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ha++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ZA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ik={readContext:rn,useCallback:cE,useContext:rn,useEffect:hm,useImperativeHandle:uE,useInsertionEffect:oE,useLayoutEffect:aE,useMemo:fE,useReducer:ch,useRef:sE,useState:function(){return ch(da)},useDebugValue:dm,useDeferredValue:function(t){var e=sn();return hE(e,Xe.memoizedState,t)},useTransition:function(){var t=ch(da)[0],e=sn().memoizedState;return[t,e]},useMutableSource:J_,useSyncExternalStore:Z_,useId:dE,unstable_isNewReconciler:!1},sk={readContext:rn,useCallback:cE,useContext:rn,useEffect:hm,useImperativeHandle:uE,useInsertionEffect:oE,useLayoutEffect:aE,useMemo:fE,useReducer:fh,useRef:sE,useState:function(){return fh(da)},useDebugValue:dm,useDeferredValue:function(t){var e=sn();return Xe===null?e.memoizedState=t:hE(e,Xe.memoizedState,t)},useTransition:function(){var t=fh(da)[0],e=sn().memoizedState;return[t,e]},useMutableSource:J_,useSyncExternalStore:Z_,useId:dE,unstable_isNewReconciler:!1};function Ds(t,e){try{var n="",r=e;do n+=NS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function hh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Td(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ok=typeof WeakMap=="function"?WeakMap:Map;function vE(t,e,n){n=Kn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Yu||(Yu=!0,Nd=r),Td(t,e)},n}function yE(t,e,n){n=Kn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Td(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Td(t,e),typeof r!="function"&&(Dr===null?Dr=new Set([this]):Dr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Yv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new ok;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Ek.bind(null,t,e,n),e.then(t,t))}function Xv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Jv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Kn(-1,1),e.tag=2,xr(n,e,1))),n.lanes|=1),t)}var ak=sr.ReactCurrentOwner,Vt=!1;function Pt(t,e,n,r){e.child=t===null?Y_(e,null,n,r):bs(e,t.child,n,r)}function Zv(t,e,n,r,i){n=n.render;var s=e.ref;return ys(e,i),r=cm(t,e,n,r,s,i),n=fm(),t!==null&&!Vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Xn(t,e,i)):(be&&n&&Jp(e),e.flags|=1,Pt(t,e,r,i),e.child)}function ey(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!wm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,_E(t,e,s,r,i)):(t=_u(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:oa,n(o,r)&&t.ref===e.ref)return Xn(t,e,i)}return e.flags|=1,t=Or(s,r),t.ref=e.ref,t.return=e,e.child=t}function _E(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(oa(s,r)&&t.ref===e.ref)if(Vt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Vt=!0);else return e.lanes=t.lanes,Xn(t,e,i)}return Sd(t,e,n,r,i)}function EE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Te(as,$t),$t|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Te(as,$t),$t|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Te(as,$t),$t|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Te(as,$t),$t|=r;return Pt(t,e,i,n),e.child}function wE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Sd(t,e,n,r,i){var s=Ft(n)?Ei:St.current;return s=Rs(e,s),ys(e,i),n=cm(t,e,n,r,s,i),r=fm(),t!==null&&!Vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Xn(t,e,i)):(be&&r&&Jp(e),e.flags|=1,Pt(t,e,n,i),e.child)}function ty(t,e,n,r,i){if(Ft(n)){var s=!0;Uu(e)}else s=!1;if(ys(e,i),e.stateNode===null)gu(t,e),q_(e,n,r),Id(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=rn(u):(u=Ft(n)?Ei:St.current,u=Rs(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Kv(e,o,r,u),vr=!1;var h=e.memoizedState;o.state=h,Wu(e,r,o,i),l=e.memoizedState,a!==r||h!==l||Lt.current||vr?(typeof c=="function"&&(wd(e,n,c,r),l=e.memoizedState),(a=vr||Wv(e,n,a,r,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,K_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:ln(e.type,a),o.props=u,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=rn(l):(l=Ft(n)?Ei:St.current,l=Rs(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Kv(e,o,r,l),vr=!1,h=e.memoizedState,o.state=h,Wu(e,r,o,i);var y=e.memoizedState;a!==f||h!==y||Lt.current||vr?(typeof m=="function"&&(wd(e,n,m,r),y=e.memoizedState),(u=vr||Wv(e,n,u,r,h,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Ad(t,e,n,r,s,i)}function Ad(t,e,n,r,i,s){wE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Uv(e,n,!1),Xn(t,e,s);r=e.stateNode,ak.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=bs(e,t.child,null,s),e.child=bs(e,null,a,s)):Pt(t,e,a,s),e.memoizedState=r.state,i&&Uv(e,n,!0),e.child}function IE(t){var e=t.stateNode;e.pendingContext?jv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&jv(t,e.context,!1),om(t,e.containerInfo)}function ny(t,e,n,r,i){return Cs(),em(i),e.flags|=256,Pt(t,e,n,r),e.child}var kd={dehydrated:null,treeContext:null,retryLane:0};function Pd(t){return{baseLanes:t,cachePool:null,transitions:null}}function TE(t,e,n){var r=e.pendingProps,i=Me.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Te(Me,i&1),t===null)return _d(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Uc(o,r,0,null),t=vi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Pd(n),e.memoizedState=kd,t):pm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return lk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Or(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Or(a,s):(s=vi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Pd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=kd,r}return s=t.child,t=s.sibling,r=Or(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function pm(t,e){return e=Uc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Vl(t,e,n,r){return r!==null&&em(r),bs(e,t.child,null,n),t=pm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function lk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=hh(Error(M(422))),Vl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Uc({mode:"visible",children:r.children},i,0,null),s=vi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&bs(e,t.child,null,o),e.child.memoizedState=Pd(o),e.memoizedState=kd,s);if(!(e.mode&1))return Vl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(M(419)),r=hh(s,r,void 0),Vl(t,e,o,r)}if(a=(o&t.childLanes)!==0,Vt||a){if(r=it,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Yn(t,i),pn(r,t,i,-1))}return Em(),r=hh(Error(M(421))),Vl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=wk.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,zt=br(i.nextSibling),Ht=e,be=!0,fn=null,t!==null&&(Xt[Jt++]=$n,Xt[Jt++]=zn,Xt[Jt++]=wi,$n=t.id,zn=t.overflow,wi=e),e=pm(e,r.children),e.flags|=4096,e)}function ry(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ed(t.return,e,n)}function dh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function SE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Pt(t,e,r.children,n),r=Me.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ry(t,n,e);else if(t.tag===19)ry(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Te(Me,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ku(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),dh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ku(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}dh(e,!0,n,null,s);break;case"together":dh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function gu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Xn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ti|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(M(153));if(e.child!==null){for(t=e.child,n=Or(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Or(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function uk(t,e,n){switch(e.tag){case 3:IE(e),Cs();break;case 5:X_(e);break;case 1:Ft(e.type)&&Uu(e);break;case 4:om(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Te(Bu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Te(Me,Me.current&1),e.flags|=128,null):n&e.child.childLanes?TE(t,e,n):(Te(Me,Me.current&1),t=Xn(t,e,n),t!==null?t.sibling:null);Te(Me,Me.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return SE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Te(Me,Me.current),r)break;return null;case 22:case 23:return e.lanes=0,EE(t,e,n)}return Xn(t,e,n)}var AE,Rd,kE,PE;AE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Rd=function(){};kE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,li(Pn.current);var s=null;switch(n){case"input":i=Yh(t,i),r=Yh(t,r),s=[];break;case"select":i=Le({},i,{value:void 0}),r=Le({},r,{value:void 0}),s=[];break;case"textarea":i=Zh(t,i),r=Zh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Fu)}td(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Zo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Zo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Se("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};PE=function(t,e,n,r){n!==r&&(e.flags|=4)};function po(t,e){if(!be)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function mt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function ck(t,e,n){var r=e.pendingProps;switch(Zp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(e),null;case 1:return Ft(e.type)&&ju(),mt(e),null;case 3:return r=e.stateNode,xs(),Pe(Lt),Pe(St),lm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ol(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,fn!==null&&(Vd(fn),fn=null))),Rd(t,e),mt(e),null;case 5:am(e);var i=li(fa.current);if(n=e.type,t!==null&&e.stateNode!=null)kE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(M(166));return mt(e),null}if(t=li(Pn.current),Ol(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[wn]=e,r[ua]=s,t=(e.mode&1)!==0,n){case"dialog":Se("cancel",r),Se("close",r);break;case"iframe":case"object":case"embed":Se("load",r);break;case"video":case"audio":for(i=0;i<Ro.length;i++)Se(Ro[i],r);break;case"source":Se("error",r);break;case"img":case"image":case"link":Se("error",r),Se("load",r);break;case"details":Se("toggle",r);break;case"input":hv(r,s),Se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Se("invalid",r);break;case"textarea":pv(r,s),Se("invalid",r)}td(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Nl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Nl(r.textContent,a,t),i=["children",""+a]):Zo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Se("scroll",r)}switch(n){case"input":Al(r),dv(r,s,!0);break;case"textarea":Al(r),mv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Fu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=e_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[wn]=e,t[ua]=r,AE(t,e,!1,!1),e.stateNode=t;e:{switch(o=nd(n,r),n){case"dialog":Se("cancel",t),Se("close",t),i=r;break;case"iframe":case"object":case"embed":Se("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ro.length;i++)Se(Ro[i],t);i=r;break;case"source":Se("error",t),i=r;break;case"img":case"image":case"link":Se("error",t),Se("load",t),i=r;break;case"details":Se("toggle",t),i=r;break;case"input":hv(t,r),i=Yh(t,r),Se("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Le({},r,{value:void 0}),Se("invalid",t);break;case"textarea":pv(t,r),i=Zh(t,r),Se("invalid",t);break;default:i=r}td(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?r_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&t_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ea(t,l):typeof l=="number"&&ea(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Zo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Se("scroll",t):l!=null&&Fp(t,s,l,o))}switch(n){case"input":Al(t),dv(t,r,!1);break;case"textarea":Al(t),mv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ur(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ps(t,!!r.multiple,s,!1):r.defaultValue!=null&&ps(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Fu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return mt(e),null;case 6:if(t&&e.stateNode!=null)PE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(M(166));if(n=li(fa.current),li(Pn.current),Ol(e)){if(r=e.stateNode,n=e.memoizedProps,r[wn]=e,(s=r.nodeValue!==n)&&(t=Ht,t!==null))switch(t.tag){case 3:Nl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Nl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[wn]=e,e.stateNode=r}return mt(e),null;case 13:if(Pe(Me),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(be&&zt!==null&&e.mode&1&&!(e.flags&128))H_(),Cs(),e.flags|=98560,s=!1;else if(s=Ol(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(M(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(M(317));s[wn]=e}else Cs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;mt(e),s=!1}else fn!==null&&(Vd(fn),fn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Me.current&1?Ze===0&&(Ze=3):Em())),e.updateQueue!==null&&(e.flags|=4),mt(e),null);case 4:return xs(),Rd(t,e),t===null&&aa(e.stateNode.containerInfo),mt(e),null;case 10:return rm(e.type._context),mt(e),null;case 17:return Ft(e.type)&&ju(),mt(e),null;case 19:if(Pe(Me),s=e.memoizedState,s===null)return mt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)po(s,!1);else{if(Ze!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ku(t),o!==null){for(e.flags|=128,po(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Te(Me,Me.current&1|2),e.child}t=t.sibling}s.tail!==null&&He()>Ns&&(e.flags|=128,r=!0,po(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ku(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),po(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!be)return mt(e),null}else 2*He()-s.renderingStartTime>Ns&&n!==1073741824&&(e.flags|=128,r=!0,po(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=He(),e.sibling=null,n=Me.current,Te(Me,r?n&1|2:n&1),e):(mt(e),null);case 22:case 23:return _m(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?$t&1073741824&&(mt(e),e.subtreeFlags&6&&(e.flags|=8192)):mt(e),null;case 24:return null;case 25:return null}throw Error(M(156,e.tag))}function fk(t,e){switch(Zp(e),e.tag){case 1:return Ft(e.type)&&ju(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return xs(),Pe(Lt),Pe(St),lm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return am(e),null;case 13:if(Pe(Me),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(M(340));Cs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Pe(Me),null;case 4:return xs(),null;case 10:return rm(e.type._context),null;case 22:case 23:return _m(),null;case 24:return null;default:return null}}var Ll=!1,yt=!1,hk=typeof WeakSet=="function"?WeakSet:Set,z=null;function os(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){je(t,e,r)}else n.current=null}function Cd(t,e,n){try{n()}catch(r){je(t,e,r)}}var iy=!1;function dk(t,e){if(hd=Mu,t=x_(),Xp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=t,h=null;t:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)h=f,f=m;for(;;){if(f===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(m=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(dd={focusedElem:t,selectionRange:n},Mu=!1,z=e;z!==null;)if(e=z,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,z=t;else for(;z!==null;){e=z;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,w=y.memoizedState,v=e.stateNode,p=v.getSnapshotBeforeUpdate(e.elementType===e.type?_:ln(e.type,_),w);v.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(d){je(e,e.return,d)}if(t=e.sibling,t!==null){t.return=e.return,z=t;break}z=e.return}return y=iy,iy=!1,y}function Uo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Cd(e,n,s)}i=i.next}while(i!==r)}}function Fc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function bd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function RE(t){var e=t.alternate;e!==null&&(t.alternate=null,RE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[wn],delete e[ua],delete e[gd],delete e[QA],delete e[YA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function CE(t){return t.tag===5||t.tag===3||t.tag===4}function sy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||CE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function xd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Fu));else if(r!==4&&(t=t.child,t!==null))for(xd(t,e,n),t=t.sibling;t!==null;)xd(t,e,n),t=t.sibling}function Dd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Dd(t,e,n),t=t.sibling;t!==null;)Dd(t,e,n),t=t.sibling}var at=null,un=!1;function hr(t,e,n){for(n=n.child;n!==null;)bE(t,e,n),n=n.sibling}function bE(t,e,n){if(kn&&typeof kn.onCommitFiberUnmount=="function")try{kn.onCommitFiberUnmount(bc,n)}catch{}switch(n.tag){case 5:yt||os(n,e);case 6:var r=at,i=un;at=null,hr(t,e,n),at=r,un=i,at!==null&&(un?(t=at,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):at.removeChild(n.stateNode));break;case 18:at!==null&&(un?(t=at,n=n.stateNode,t.nodeType===8?oh(t.parentNode,n):t.nodeType===1&&oh(t,n),ia(t)):oh(at,n.stateNode));break;case 4:r=at,i=un,at=n.stateNode.containerInfo,un=!0,hr(t,e,n),at=r,un=i;break;case 0:case 11:case 14:case 15:if(!yt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Cd(n,e,o),i=i.next}while(i!==r)}hr(t,e,n);break;case 1:if(!yt&&(os(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){je(n,e,a)}hr(t,e,n);break;case 21:hr(t,e,n);break;case 22:n.mode&1?(yt=(r=yt)||n.memoizedState!==null,hr(t,e,n),yt=r):hr(t,e,n);break;default:hr(t,e,n)}}function oy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new hk),e.forEach(function(r){var i=Ik.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function an(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:at=a.stateNode,un=!1;break e;case 3:at=a.stateNode.containerInfo,un=!0;break e;case 4:at=a.stateNode.containerInfo,un=!0;break e}a=a.return}if(at===null)throw Error(M(160));bE(s,o,i),at=null,un=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){je(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)xE(e,t),e=e.sibling}function xE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(an(e,t),_n(t),r&4){try{Uo(3,t,t.return),Fc(3,t)}catch(_){je(t,t.return,_)}try{Uo(5,t,t.return)}catch(_){je(t,t.return,_)}}break;case 1:an(e,t),_n(t),r&512&&n!==null&&os(n,n.return);break;case 5:if(an(e,t),_n(t),r&512&&n!==null&&os(n,n.return),t.flags&32){var i=t.stateNode;try{ea(i,"")}catch(_){je(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&J0(i,s),nd(a,o);var u=nd(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?r_(i,f):c==="dangerouslySetInnerHTML"?t_(i,f):c==="children"?ea(i,f):Fp(i,c,f,u)}switch(a){case"input":Xh(i,s);break;case"textarea":Z0(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?ps(i,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?ps(i,!!s.multiple,s.defaultValue,!0):ps(i,!!s.multiple,s.multiple?[]:"",!1))}i[ua]=s}catch(_){je(t,t.return,_)}}break;case 6:if(an(e,t),_n(t),r&4){if(t.stateNode===null)throw Error(M(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){je(t,t.return,_)}}break;case 3:if(an(e,t),_n(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ia(e.containerInfo)}catch(_){je(t,t.return,_)}break;case 4:an(e,t),_n(t);break;case 13:an(e,t),_n(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(vm=He())),r&4&&oy(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(yt=(u=yt)||c,an(e,t),yt=u):an(e,t),_n(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(z=t,c=t.child;c!==null;){for(f=z=c;z!==null;){switch(h=z,m=h.child,h.tag){case 0:case 11:case 14:case 15:Uo(4,h,h.return);break;case 1:os(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){je(r,n,_)}}break;case 5:os(h,h.return);break;case 22:if(h.memoizedState!==null){ly(f);continue}}m!==null?(m.return=h,z=m):ly(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=n_("display",o))}catch(_){je(t,t.return,_)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(_){je(t,t.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:an(e,t),_n(t),r&4&&oy(t);break;case 21:break;default:an(e,t),_n(t)}}function _n(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(CE(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ea(i,""),r.flags&=-33);var s=sy(t);Dd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=sy(t);xd(t,a,o);break;default:throw Error(M(161))}}catch(l){je(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function pk(t,e,n){z=t,DE(t)}function DE(t,e,n){for(var r=(t.mode&1)!==0;z!==null;){var i=z,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ll;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||yt;a=Ll;var u=yt;if(Ll=o,(yt=l)&&!u)for(z=i;z!==null;)o=z,l=o.child,o.tag===22&&o.memoizedState!==null?uy(i):l!==null?(l.return=o,z=l):uy(i);for(;s!==null;)z=s,DE(s),s=s.sibling;z=i,Ll=a,yt=u}ay(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,z=s):ay(t)}}function ay(t){for(;z!==null;){var e=z;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:yt||Fc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!yt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:ln(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Hv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Hv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&ia(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}yt||e.flags&512&&bd(e)}catch(h){je(e,e.return,h)}}if(e===t){z=null;break}if(n=e.sibling,n!==null){n.return=e.return,z=n;break}z=e.return}}function ly(t){for(;z!==null;){var e=z;if(e===t){z=null;break}var n=e.sibling;if(n!==null){n.return=e.return,z=n;break}z=e.return}}function uy(t){for(;z!==null;){var e=z;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Fc(4,e)}catch(l){je(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){je(e,i,l)}}var s=e.return;try{bd(e)}catch(l){je(e,s,l)}break;case 5:var o=e.return;try{bd(e)}catch(l){je(e,o,l)}}}catch(l){je(e,e.return,l)}if(e===t){z=null;break}var a=e.sibling;if(a!==null){a.return=e.return,z=a;break}z=e.return}}var mk=Math.ceil,Qu=sr.ReactCurrentDispatcher,mm=sr.ReactCurrentOwner,tn=sr.ReactCurrentBatchConfig,me=0,it=null,Qe=null,ct=0,$t=0,as=Qr(0),Ze=0,ma=null,Ti=0,jc=0,gm=0,$o=null,Ot=null,vm=0,Ns=1/0,Fn=null,Yu=!1,Nd=null,Dr=null,Fl=!1,Sr=null,Xu=0,zo=0,Od=null,vu=-1,yu=0;function Ct(){return me&6?He():vu!==-1?vu:vu=He()}function Nr(t){return t.mode&1?me&2&&ct!==0?ct&-ct:JA.transition!==null?(yu===0&&(yu=m_()),yu):(t=ye,t!==0||(t=window.event,t=t===void 0?16:I_(t.type)),t):1}function pn(t,e,n,r){if(50<zo)throw zo=0,Od=null,Error(M(185));Ha(t,n,r),(!(me&2)||t!==it)&&(t===it&&(!(me&2)&&(jc|=n),Ze===4&&_r(t,ct)),jt(t,r),n===1&&me===0&&!(e.mode&1)&&(Ns=He()+500,Mc&&Yr()))}function jt(t,e){var n=t.callbackNode;JS(t,e);var r=Ou(t,t===it?ct:0);if(r===0)n!==null&&yv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&yv(n),e===1)t.tag===0?XA(cy.bind(null,t)):$_(cy.bind(null,t)),GA(function(){!(me&6)&&Yr()}),n=null;else{switch(g_(r)){case 1:n=Bp;break;case 4:n=d_;break;case 16:n=Nu;break;case 536870912:n=p_;break;default:n=Nu}n=UE(n,NE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function NE(t,e){if(vu=-1,yu=0,me&6)throw Error(M(327));var n=t.callbackNode;if(_s()&&t.callbackNode!==n)return null;var r=Ou(t,t===it?ct:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ju(t,r);else{e=r;var i=me;me|=2;var s=ME();(it!==t||ct!==e)&&(Fn=null,Ns=He()+500,gi(t,e));do try{yk();break}catch(a){OE(t,a)}while(1);nm(),Qu.current=s,me=i,Qe!==null?e=0:(it=null,ct=0,e=Ze)}if(e!==0){if(e===2&&(i=ad(t),i!==0&&(r=i,e=Md(t,i))),e===1)throw n=ma,gi(t,0),_r(t,r),jt(t,He()),n;if(e===6)_r(t,r);else{if(i=t.current.alternate,!(r&30)&&!gk(i)&&(e=Ju(t,r),e===2&&(s=ad(t),s!==0&&(r=s,e=Md(t,s))),e===1))throw n=ma,gi(t,0),_r(t,r),jt(t,He()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(M(345));case 2:ii(t,Ot,Fn);break;case 3:if(_r(t,r),(r&130023424)===r&&(e=vm+500-He(),10<e)){if(Ou(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ct(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=md(ii.bind(null,t,Ot,Fn),e);break}ii(t,Ot,Fn);break;case 4:if(_r(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-dn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=He()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mk(r/1960))-r,10<r){t.timeoutHandle=md(ii.bind(null,t,Ot,Fn),r);break}ii(t,Ot,Fn);break;case 5:ii(t,Ot,Fn);break;default:throw Error(M(329))}}}return jt(t,He()),t.callbackNode===n?NE.bind(null,t):null}function Md(t,e){var n=$o;return t.current.memoizedState.isDehydrated&&(gi(t,e).flags|=256),t=Ju(t,e),t!==2&&(e=Ot,Ot=n,e!==null&&Vd(e)),t}function Vd(t){Ot===null?Ot=t:Ot.push.apply(Ot,t)}function gk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!gn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function _r(t,e){for(e&=~gm,e&=~jc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-dn(e),r=1<<n;t[n]=-1,e&=~r}}function cy(t){if(me&6)throw Error(M(327));_s();var e=Ou(t,0);if(!(e&1))return jt(t,He()),null;var n=Ju(t,e);if(t.tag!==0&&n===2){var r=ad(t);r!==0&&(e=r,n=Md(t,r))}if(n===1)throw n=ma,gi(t,0),_r(t,e),jt(t,He()),n;if(n===6)throw Error(M(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ii(t,Ot,Fn),jt(t,He()),null}function ym(t,e){var n=me;me|=1;try{return t(e)}finally{me=n,me===0&&(Ns=He()+500,Mc&&Yr())}}function Si(t){Sr!==null&&Sr.tag===0&&!(me&6)&&_s();var e=me;me|=1;var n=tn.transition,r=ye;try{if(tn.transition=null,ye=1,t)return t()}finally{ye=r,tn.transition=n,me=e,!(me&6)&&Yr()}}function _m(){$t=as.current,Pe(as)}function gi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,KA(n)),Qe!==null)for(n=Qe.return;n!==null;){var r=n;switch(Zp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ju();break;case 3:xs(),Pe(Lt),Pe(St),lm();break;case 5:am(r);break;case 4:xs();break;case 13:Pe(Me);break;case 19:Pe(Me);break;case 10:rm(r.type._context);break;case 22:case 23:_m()}n=n.return}if(it=t,Qe=t=Or(t.current,null),ct=$t=e,Ze=0,ma=null,gm=jc=Ti=0,Ot=$o=null,ai!==null){for(e=0;e<ai.length;e++)if(n=ai[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ai=null}return t}function OE(t,e){do{var n=Qe;try{if(nm(),pu.current=qu,Gu){for(var r=Ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Gu=!1}if(Ii=0,rt=Xe=Ve=null,jo=!1,ha=0,mm.current=null,n===null||n.return===null){Ze=1,ma=e,Qe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ct,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Xv(o);if(m!==null){m.flags&=-257,Jv(m,o,a,s,e),m.mode&1&&Yv(s,u,e),e=m,l=u;var y=e.updateQueue;if(y===null){var _=new Set;_.add(l),e.updateQueue=_}else y.add(l);break e}else{if(!(e&1)){Yv(s,u,e),Em();break e}l=Error(M(426))}}else if(be&&a.mode&1){var w=Xv(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Jv(w,o,a,s,e),em(Ds(l,a));break e}}s=l=Ds(l,a),Ze!==4&&(Ze=2),$o===null?$o=[s]:$o.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var v=vE(s,l,e);Bv(s,v);break e;case 1:a=l;var p=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Dr===null||!Dr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var d=yE(s,a,e);Bv(s,d);break e}}s=s.return}while(s!==null)}LE(n)}catch(I){e=I,Qe===n&&n!==null&&(Qe=n=n.return);continue}break}while(1)}function ME(){var t=Qu.current;return Qu.current=qu,t===null?qu:t}function Em(){(Ze===0||Ze===3||Ze===2)&&(Ze=4),it===null||!(Ti&268435455)&&!(jc&268435455)||_r(it,ct)}function Ju(t,e){var n=me;me|=2;var r=ME();(it!==t||ct!==e)&&(Fn=null,gi(t,e));do try{vk();break}catch(i){OE(t,i)}while(1);if(nm(),me=n,Qu.current=r,Qe!==null)throw Error(M(261));return it=null,ct=0,Ze}function vk(){for(;Qe!==null;)VE(Qe)}function yk(){for(;Qe!==null&&!BS();)VE(Qe)}function VE(t){var e=jE(t.alternate,t,$t);t.memoizedProps=t.pendingProps,e===null?LE(t):Qe=e,mm.current=null}function LE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=fk(n,e),n!==null){n.flags&=32767,Qe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ze=6,Qe=null;return}}else if(n=ck(n,e,$t),n!==null){Qe=n;return}if(e=e.sibling,e!==null){Qe=e;return}Qe=e=t}while(e!==null);Ze===0&&(Ze=5)}function ii(t,e,n){var r=ye,i=tn.transition;try{tn.transition=null,ye=1,_k(t,e,n,r)}finally{tn.transition=i,ye=r}return null}function _k(t,e,n,r){do _s();while(Sr!==null);if(me&6)throw Error(M(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(M(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ZS(t,s),t===it&&(Qe=it=null,ct=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Fl||(Fl=!0,UE(Nu,function(){return _s(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=tn.transition,tn.transition=null;var o=ye;ye=1;var a=me;me|=4,mm.current=null,dk(t,n),xE(n,t),jA(dd),Mu=!!hd,dd=hd=null,t.current=n,pk(n),HS(),me=a,ye=o,tn.transition=s}else t.current=n;if(Fl&&(Fl=!1,Sr=t,Xu=i),s=t.pendingLanes,s===0&&(Dr=null),GS(n.stateNode),jt(t,He()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Yu)throw Yu=!1,t=Nd,Nd=null,t;return Xu&1&&t.tag!==0&&_s(),s=t.pendingLanes,s&1?t===Od?zo++:(zo=0,Od=t):zo=0,Yr(),null}function _s(){if(Sr!==null){var t=g_(Xu),e=tn.transition,n=ye;try{if(tn.transition=null,ye=16>t?16:t,Sr===null)var r=!1;else{if(t=Sr,Sr=null,Xu=0,me&6)throw Error(M(331));var i=me;for(me|=4,z=t.current;z!==null;){var s=z,o=s.child;if(z.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(z=u;z!==null;){var c=z;switch(c.tag){case 0:case 11:case 15:Uo(8,c,s)}var f=c.child;if(f!==null)f.return=c,z=f;else for(;z!==null;){c=z;var h=c.sibling,m=c.return;if(RE(c),c===u){z=null;break}if(h!==null){h.return=m,z=h;break}z=m}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var w=_.sibling;_.sibling=null,_=w}while(_!==null)}}z=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,z=o;else e:for(;z!==null;){if(s=z,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Uo(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,z=v;break e}z=s.return}}var p=t.current;for(z=p;z!==null;){o=z;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,z=g;else e:for(o=p;z!==null;){if(a=z,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Fc(9,a)}}catch(I){je(a,a.return,I)}if(a===o){z=null;break e}var d=a.sibling;if(d!==null){d.return=a.return,z=d;break e}z=a.return}}if(me=i,Yr(),kn&&typeof kn.onPostCommitFiberRoot=="function")try{kn.onPostCommitFiberRoot(bc,t)}catch{}r=!0}return r}finally{ye=n,tn.transition=e}}return!1}function fy(t,e,n){e=Ds(n,e),e=vE(t,e,1),t=xr(t,e,1),e=Ct(),t!==null&&(Ha(t,1,e),jt(t,e))}function je(t,e,n){if(t.tag===3)fy(t,t,n);else for(;e!==null;){if(e.tag===3){fy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Dr===null||!Dr.has(r))){t=Ds(n,t),t=yE(e,t,1),e=xr(e,t,1),t=Ct(),e!==null&&(Ha(e,1,t),jt(e,t));break}}e=e.return}}function Ek(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ct(),t.pingedLanes|=t.suspendedLanes&n,it===t&&(ct&n)===n&&(Ze===4||Ze===3&&(ct&130023424)===ct&&500>He()-vm?gi(t,0):gm|=n),jt(t,e)}function FE(t,e){e===0&&(t.mode&1?(e=Rl,Rl<<=1,!(Rl&130023424)&&(Rl=4194304)):e=1);var n=Ct();t=Yn(t,e),t!==null&&(Ha(t,e,n),jt(t,n))}function wk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),FE(t,n)}function Ik(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(e),FE(t,n)}var jE;jE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Lt.current)Vt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Vt=!1,uk(t,e,n);Vt=!!(t.flags&131072)}else Vt=!1,be&&e.flags&1048576&&z_(e,zu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;gu(t,e),t=e.pendingProps;var i=Rs(e,St.current);ys(e,n),i=cm(null,e,r,t,i,n);var s=fm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ft(r)?(s=!0,Uu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,sm(e),i.updater=Vc,e.stateNode=i,i._reactInternals=e,Id(e,r,t,n),e=Ad(null,e,r,!0,s,n)):(e.tag=0,be&&s&&Jp(e),Pt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(gu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Sk(r),t=ln(r,t),i){case 0:e=Sd(null,e,r,t,n);break e;case 1:e=ty(null,e,r,t,n);break e;case 11:e=Zv(null,e,r,t,n);break e;case 14:e=ey(null,e,r,ln(r.type,t),n);break e}throw Error(M(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ln(r,i),Sd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ln(r,i),ty(t,e,r,i,n);case 3:e:{if(IE(e),t===null)throw Error(M(387));r=e.pendingProps,s=e.memoizedState,i=s.element,K_(t,e),Wu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ds(Error(M(423)),e),e=ny(t,e,r,n,i);break e}else if(r!==i){i=Ds(Error(M(424)),e),e=ny(t,e,r,n,i);break e}else for(zt=br(e.stateNode.containerInfo.firstChild),Ht=e,be=!0,fn=null,n=Y_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cs(),r===i){e=Xn(t,e,n);break e}Pt(t,e,r,n)}e=e.child}return e;case 5:return X_(e),t===null&&_d(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,pd(r,i)?o=null:s!==null&&pd(r,s)&&(e.flags|=32),wE(t,e),Pt(t,e,o,n),e.child;case 6:return t===null&&_d(e),null;case 13:return TE(t,e,n);case 4:return om(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=bs(e,null,r,n):Pt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ln(r,i),Zv(t,e,r,i,n);case 7:return Pt(t,e,e.pendingProps,n),e.child;case 8:return Pt(t,e,e.pendingProps.children,n),e.child;case 12:return Pt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Te(Bu,r._currentValue),r._currentValue=o,s!==null)if(gn(s.value,o)){if(s.children===i.children&&!Lt.current){e=Xn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Kn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ed(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(M(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ed(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Pt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ys(e,n),i=rn(i),r=r(i),e.flags|=1,Pt(t,e,r,n),e.child;case 14:return r=e.type,i=ln(r,e.pendingProps),i=ln(r.type,i),ey(t,e,r,i,n);case 15:return _E(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ln(r,i),gu(t,e),e.tag=1,Ft(r)?(t=!0,Uu(e)):t=!1,ys(e,n),q_(e,r,i),Id(e,r,i,n),Ad(null,e,r,!0,t,n);case 19:return SE(t,e,n);case 22:return EE(t,e,n)}throw Error(M(156,e.tag))};function UE(t,e){return h_(t,e)}function Tk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function en(t,e,n,r){return new Tk(t,e,n,r)}function wm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Sk(t){if(typeof t=="function")return wm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Up)return 11;if(t===$p)return 14}return 2}function Or(t,e){var n=t.alternate;return n===null?(n=en(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function _u(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")wm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Xi:return vi(n.children,i,s,e);case jp:o=8,i|=8;break;case Kh:return t=en(12,n,e,i|2),t.elementType=Kh,t.lanes=s,t;case Gh:return t=en(13,n,e,i),t.elementType=Gh,t.lanes=s,t;case qh:return t=en(19,n,e,i),t.elementType=qh,t.lanes=s,t;case Q0:return Uc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case G0:o=10;break e;case q0:o=9;break e;case Up:o=11;break e;case $p:o=14;break e;case gr:o=16,r=null;break e}throw Error(M(130,t==null?t:typeof t,""))}return e=en(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function vi(t,e,n,r){return t=en(7,t,r,e),t.lanes=n,t}function Uc(t,e,n,r){return t=en(22,t,r,e),t.elementType=Q0,t.lanes=n,t.stateNode={isHidden:!1},t}function ph(t,e,n){return t=en(6,t,null,e),t.lanes=n,t}function mh(t,e,n){return e=en(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ak(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qf(0),this.expirationTimes=Qf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Im(t,e,n,r,i,s,o,a,l){return t=new Ak(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=en(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},sm(s),t}function kk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function $E(t){if(!t)return $r;t=t._reactInternals;e:{if(Li(t)!==t||t.tag!==1)throw Error(M(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ft(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(M(171))}if(t.tag===1){var n=t.type;if(Ft(n))return U_(t,n,e)}return e}function zE(t,e,n,r,i,s,o,a,l){return t=Im(n,r,!0,t,i,s,o,a,l),t.context=$E(null),n=t.current,r=Ct(),i=Nr(n),s=Kn(r,i),s.callback=e??null,xr(n,s,i),t.current.lanes=i,Ha(t,i,r),jt(t,r),t}function $c(t,e,n,r){var i=e.current,s=Ct(),o=Nr(i);return n=$E(n),e.context===null?e.context=n:e.pendingContext=n,e=Kn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=xr(i,e,o),t!==null&&(pn(t,i,o,s),du(t,i,o)),o}function Zu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function hy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Tm(t,e){hy(t,e),(t=t.alternate)&&hy(t,e)}function Pk(){return null}var BE=typeof reportError=="function"?reportError:function(t){console.error(t)};function Sm(t){this._internalRoot=t}zc.prototype.render=Sm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(M(409));$c(t,e,null,null)};zc.prototype.unmount=Sm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Si(function(){$c(null,t,null,null)}),e[Qn]=null}};function zc(t){this._internalRoot=t}zc.prototype.unstable_scheduleHydration=function(t){if(t){var e=__();t={blockedOn:null,target:t,priority:e};for(var n=0;n<yr.length&&e!==0&&e<yr[n].priority;n++);yr.splice(n,0,t),n===0&&w_(t)}};function Am(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Bc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function dy(){}function Rk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Zu(o);s.call(u)}}var o=zE(e,r,t,0,null,!1,!1,"",dy);return t._reactRootContainer=o,t[Qn]=o.current,aa(t.nodeType===8?t.parentNode:t),Si(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Zu(l);a.call(u)}}var l=Im(t,0,!1,null,null,!1,!1,"",dy);return t._reactRootContainer=l,t[Qn]=l.current,aa(t.nodeType===8?t.parentNode:t),Si(function(){$c(e,l,n,r)}),l}function Hc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Zu(o);a.call(l)}}$c(e,o,t,i)}else o=Rk(n,e,t,i,r);return Zu(o)}v_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Po(e.pendingLanes);n!==0&&(Hp(e,n|1),jt(e,He()),!(me&6)&&(Ns=He()+500,Yr()))}break;case 13:Si(function(){var r=Yn(t,1);if(r!==null){var i=Ct();pn(r,t,1,i)}}),Tm(t,1)}};Wp=function(t){if(t.tag===13){var e=Yn(t,134217728);if(e!==null){var n=Ct();pn(e,t,134217728,n)}Tm(t,134217728)}};y_=function(t){if(t.tag===13){var e=Nr(t),n=Yn(t,e);if(n!==null){var r=Ct();pn(n,t,e,r)}Tm(t,e)}};__=function(){return ye};E_=function(t,e){var n=ye;try{return ye=t,e()}finally{ye=n}};id=function(t,e,n){switch(e){case"input":if(Xh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Oc(r);if(!i)throw Error(M(90));X0(r),Xh(r,i)}}}break;case"textarea":Z0(t,n);break;case"select":e=n.value,e!=null&&ps(t,!!n.multiple,e,!1)}};o_=ym;a_=Si;var Ck={usingClientEntryPoint:!1,Events:[Ka,ts,Oc,i_,s_,ym]},mo={findFiberByHostInstance:oi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},bk={bundleType:mo.bundleType,version:mo.version,rendererPackageName:mo.rendererPackageName,rendererConfig:mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=c_(t),t===null?null:t.stateNode},findFiberByHostInstance:mo.findFiberByHostInstance||Pk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jl.isDisabled&&jl.supportsFiber)try{bc=jl.inject(bk),kn=jl}catch{}}Gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ck;Gt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Am(e))throw Error(M(200));return kk(t,e,null,n)};Gt.createRoot=function(t,e){if(!Am(t))throw Error(M(299));var n=!1,r="",i=BE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Im(t,1,!1,null,null,n,!1,r,i),t[Qn]=e.current,aa(t.nodeType===8?t.parentNode:t),new Sm(e)};Gt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(M(188)):(t=Object.keys(t).join(","),Error(M(268,t)));return t=c_(e),t=t===null?null:t.stateNode,t};Gt.flushSync=function(t){return Si(t)};Gt.hydrate=function(t,e,n){if(!Bc(e))throw Error(M(200));return Hc(null,t,e,!0,n)};Gt.hydrateRoot=function(t,e,n){if(!Am(t))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=BE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=zE(e,null,t,1,n??null,i,!1,s,o),t[Qn]=e.current,aa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new zc(e)};Gt.render=function(t,e,n){if(!Bc(e))throw Error(M(200));return Hc(null,t,e,!1,n)};Gt.unmountComponentAtNode=function(t){if(!Bc(t))throw Error(M(40));return t._reactRootContainer?(Si(function(){Hc(null,null,t,!1,function(){t._reactRootContainer=null,t[Qn]=null})}),!0):!1};Gt.unstable_batchedUpdates=ym;Gt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Bc(n))throw Error(M(200));if(t==null||t._reactInternals===void 0)throw Error(M(38));return Hc(t,e,n,!1,r)};Gt.version="18.2.0-next-9e3b772b8-20220608";function HE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(HE)}catch(t){console.error(t)}}HE(),z0.exports=Gt;var xk=z0.exports,py=xk;Hh.createRoot=py.createRoot,Hh.hydrateRoot=py.hydrateRoot;let Dk=0;function WE(t,e){const n=`atom${++Dk}`,r={toString:()=>n};return typeof t=="function"?r.read=t:(r.init=t,r.read=i=>i(r),r.write=(i,s,o)=>s(r,typeof o=="function"?o(i(r)):o)),e&&(r.write=e),r}const my=t=>"init"in t,gy=t=>!!t.write,ec=new WeakMap,Nk=(t,e)=>{ec.set(t,e),t.catch(()=>{}).finally(()=>ec.delete(t))},vy=(t,e)=>{const n=ec.get(t);n&&(ec.delete(t),n(e))},yy=(t,e)=>{t.status="fulfilled",t.value=e},_y=(t,e)=>{t.status="rejected",t.reason=e},Ok=t=>typeof(t==null?void 0:t.then)=="function",Ul=(t,e)=>"v"in t&&"v"in e&&Object.is(t.v,e.v),Ey=(t,e)=>"e"in t&&"e"in e&&Object.is(t.e,e.e),go=t=>"v"in t&&t.v instanceof Promise,Mk=(t,e)=>"v"in t&&"v"in e&&t.v.orig&&t.v.orig===e.v.orig,$l=t=>{if("e"in t)throw t.e;return t.v},Vk=()=>{const t=new WeakMap,e=new WeakMap,n=new Map;let r,i;const s=E=>t.get(E),o=(E,R)=>{const C=t.get(E);if(t.set(E,R),n.has(E)||n.set(E,C),C&&go(C)){const V="v"in R?R.v instanceof Promise?R.v:Promise.resolve(R.v):Promise.reject(R.e);vy(C.v,V)}},a=(E,R,C)=>{const V=new Map;let L=!1;C.forEach((W,K)=>{!W&&K===E&&(W=R),W&&(V.set(K,W),R.d.get(K)!==W&&(L=!0))}),(L||R.d.size!==V.size)&&(R.d=V)},l=(E,R,C)=>{const V=s(E),L={d:(V==null?void 0:V.d)||new Map,v:R};if(C&&a(E,L,C),V&&Ul(V,L)&&V.d===L.d)return V;if(V&&go(V)&&go(L)&&Mk(V,L)){if(V.d===L.d)return V;L.v=V.v}return o(E,L),L},u=(E,R,C,V)=>{if(Ok(R)){let L;const W=new Promise((K,se)=>{let ce=!1;R.then(X=>{if(!ce){ce=!0;const b=s(E),j=l(E,W,C);yy(W,X),K(X),e.has(E)&&(b==null?void 0:b.d)!==j.d&&I(E,j,b==null?void 0:b.d)}},X=>{if(!ce){ce=!0;const b=s(E),j=l(E,W,C);_y(W,X),se(X),e.has(E)&&(b==null?void 0:b.d)!==j.d&&I(E,j,b==null?void 0:b.d)}}),L=X=>{ce||(ce=!0,X.then(b=>yy(W,b),b=>_y(W,b)),K(X))}});return W.orig=R,W.status="pending",Nk(W,K=>{K&&L(K),V==null||V()}),l(E,W,C)}return l(E,R,C)},c=(E,R,C)=>{const V=s(E),L={d:(V==null?void 0:V.d)||new Map,e:R};return C&&a(E,L,C),V&&Ey(V,L)&&V.d===L.d?V:(o(E,L),L)},f=(E,R)=>{const C=s(E);if(!R&&C&&(e.has(E)||Array.from(C.d).every(([X,b])=>X===E||f(X)===b)))return C;const V=new Map;let L=!0;const W=X=>{if(X===E){const j=s(X);if(j)return V.set(X,j),$l(j);if(my(X))return V.set(X,void 0),X.init;throw new Error("no atom init")}const b=f(X);return V.set(X,b),$l(b)};let K,se;const ce={get signal(){return K||(K=new AbortController),K.signal},get setSelf(){return!se&&gy(E)&&(se=(...X)=>{if(!L)return p(E,...X)}),se}};try{const X=E.read(W,ce);return u(E,X,V,()=>K==null?void 0:K.abort())}catch(X){return c(E,X,V)}finally{L=!1}},h=E=>$l(f(E)),m=E=>{let R=e.get(E);return R||(R=g(E)),R},y=(E,R)=>!R.l.size&&(!R.t.size||R.t.size===1&&R.t.has(E)),_=E=>{const R=e.get(E);R&&y(E,R)&&d(E)},w=E=>{const R=new Map,C=new WeakMap,V=K=>{var se;const ce=new Set((se=e.get(K))==null?void 0:se.t);return n.forEach((X,b)=>{var j;(j=s(b))!=null&&j.d.has(K)&&ce.add(b)}),ce},L=K=>{V(K).forEach(se=>{se!==K&&(R.set(se,(R.get(se)||new Set).add(K)),C.set(se,(C.get(se)||0)+1),L(se))})};L(E);const W=K=>{V(K).forEach(se=>{var ce;if(se!==K){let X=C.get(se);if(X&&C.set(se,--X),!X){let b=!!((ce=R.get(se))!=null&&ce.size);if(b){const j=s(se),te=f(se,!0);b=!j||!Ul(j,te)}b||R.forEach(j=>j.delete(se))}W(se)}})};W(E)},v=(E,...R)=>{let C=!0;const V=K=>$l(f(K)),L=(K,...se)=>{let ce;if(K===E){if(!my(K))throw new Error("atom not writable");const X=s(K),b=u(K,se[0]);(!X||!Ul(X,b))&&w(K)}else ce=v(K,...se);if(!C){const X=k()}return ce},W=E.write(V,L,...R);return C=!1,W},p=(E,...R)=>{const C=v(E,...R),V=k();return C},g=(E,R,C)=>{var V;const L=C||[];(V=s(E))==null||V.d.forEach((K,se)=>{const ce=e.get(se);ce?ce.t.add(E):se!==E&&g(se,E,L)}),f(E);const W={t:new Set(R&&[R]),l:new Set};if(e.set(E,W),gy(E)&&E.onMount){const{onMount:K}=E;L.push(()=>{const se=K((...ce)=>p(E,...ce));se&&(W.u=se)})}return C||L.forEach(K=>K()),W},d=E=>{var R;const C=(R=e.get(E))==null?void 0:R.u;C&&C(),e.delete(E);const V=s(E);V&&(go(V)&&vy(V.v),V.d.forEach((L,W)=>{if(W!==E){const K=e.get(W);K&&(K.t.delete(E),y(W,K)&&d(W))}}))},I=(E,R,C)=>{const V=new Set(R.d.keys());C==null||C.forEach((L,W)=>{if(V.has(W)){V.delete(W);return}const K=e.get(W);K&&(K.t.delete(E),y(W,K)&&d(W))}),V.forEach(L=>{const W=e.get(L);W?W.t.add(E):e.has(E)&&g(L,E)})},k=()=>{let E;for(;n.size;){const R=Array.from(n);n.clear(),R.forEach(([C,V])=>{const L=s(C);if(L){const W=e.get(C);W&&L.d!==(V==null?void 0:V.d)&&I(C,L,V==null?void 0:V.d),W&&!(V&&!go(V)&&(Ul(V,L)||Ey(V,L)))&&W.l.forEach(K=>K())}})}};return{get:h,set:p,sub:(E,R)=>{const C=m(E),V=k(),L=C.l;return L.add(R),()=>{L.delete(R),_(E)}}}};let gh;const Lk=()=>(gh||(gh=Vk()),gh),Fk=O.createContext(void 0),KE=t=>{const e=O.useContext(Fk);return(t==null?void 0:t.store)||e||Lk()},jk=t=>typeof(t==null?void 0:t.then)=="function",Uk=Ba.use||(t=>{if(t.status==="pending")throw t;if(t.status==="fulfilled")return t.value;throw t.status==="rejected"?t.reason:(t.status="pending",t.then(e=>{t.status="fulfilled",t.value=e},e=>{t.status="rejected",t.reason=e}),t)});function $k(t,e){const n=KE(e),[[r,i,s],o]=O.useReducer(u=>{const c=n.get(t);return Object.is(u[0],c)&&u[1]===n&&u[2]===t?u:[c,n,t]},void 0,()=>[n.get(t),n,t]);let a=r;(i!==n||s!==t)&&(o(),a=n.get(t));const l=e==null?void 0:e.delay;return O.useEffect(()=>{const u=n.sub(t,()=>{if(typeof l=="number"){setTimeout(o,l);return}o()});return o(),u},[n,t,l]),O.useDebugValue(a),jk(a)?Uk(a):a}function zk(t,e){const n=KE(e);return O.useCallback((...i)=>n.set(t,...i),[n,t])}function Ai(t,e){return[$k(t,e),zk(t,e)]}/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oe(){return Oe=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Oe.apply(this,arguments)}var Ge;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ge||(Ge={}));const wy="popstate";function Bk(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return ga("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ki(i)}return Wk(e,n,null,t)}function ue(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Os(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Hk(){return Math.random().toString(36).substr(2,8)}function Iy(t,e){return{usr:t.state,key:t.key,idx:e}}function ga(t,e,n,r){return n===void 0&&(n=null),Oe({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?or(e):e,{state:n,key:e&&e.key||r||Hk()})}function ki(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function or(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Wk(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Ge.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Oe({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function f(){a=Ge.Pop;let w=c(),v=w==null?null:w-u;u=w,l&&l({action:a,location:_.location,delta:v})}function h(w,v){a=Ge.Push;let p=ga(_.location,w,v);n&&n(p,w),u=c()+1;let g=Iy(p,u),d=_.createHref(p);try{o.pushState(g,"",d)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;i.location.assign(d)}s&&l&&l({action:a,location:_.location,delta:1})}function m(w,v){a=Ge.Replace;let p=ga(_.location,w,v);n&&n(p,w),u=c();let g=Iy(p,u),d=_.createHref(p);o.replaceState(g,"",d),s&&l&&l({action:a,location:_.location,delta:0})}function y(w){let v=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof w=="string"?w:ki(w);return ue(v,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,v)}let _={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(wy,f),l=w,()=>{i.removeEventListener(wy,f),l=null}},createHref(w){return e(i,w)},createURL:y,encodeLocation(w){let v=y(w);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:h,replace:m,go(w){return o.go(w)}};return _}var Be;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Be||(Be={}));const Kk=new Set(["lazy","caseSensitive","path","id","index","children"]);function Gk(t){return t.index===!0}function Ld(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(ue(i.index!==!0||!i.children,"Cannot specify children on an index route"),ue(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),Gk(i)){let l=Oe({},i,e(i),{id:a});return r[a]=l,l}else{let l=Oe({},i,e(i),{id:a,children:void 0});return r[a]=l,i.children&&(l.children=Ld(i.children,e,o,r)),l}})}function ls(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?or(e):e,i=Qs(r.pathname||"/",n);if(i==null)return null;let s=GE(t);Qk(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=iP(s[a],aP(i));return o}function qk(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function GE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ue(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Gn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(ue(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),GE(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:nP(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of qE(s.path))i(s,o,l)}),e}function qE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=qE(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Qk(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:rP(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Yk=/^:\w+$/,Xk=3,Jk=2,Zk=1,eP=10,tP=-2,Ty=t=>t==="*";function nP(t,e){let n=t.split("/"),r=n.length;return n.some(Ty)&&(r+=tP),e&&(r+=Jk),n.filter(i=>!Ty(i)).reduce((i,s)=>i+(Yk.test(s)?Xk:s===""?Zk:eP),r)}function rP(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function iP(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=sP({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=a.route;s.push({params:r,pathname:Gn([i,c.pathname]),pathnameBase:fP(Gn([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=Gn([i,c.pathnameBase]))}return s}function sP(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=oP(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let h=a[f]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=lP(a[f]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function oP(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Os(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function aP(t){try{return decodeURI(t)}catch(e){return Os(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function lP(t,e){try{return decodeURIComponent(t)}catch(n){return Os(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Qs(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function uP(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?or(t):t;return{pathname:n?n.startsWith("/")?n:cP(n,e):e,search:hP(r),hash:dP(i)}}function cP(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function vh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Wc(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function km(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=or(t):(i=Oe({},t),ue(!i.pathname||!i.pathname.includes("?"),vh("?","pathname","search",i)),ue(!i.pathname||!i.pathname.includes("#"),vh("#","pathname","hash",i)),ue(!i.search||!i.search.includes("#"),vh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let f=e.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}a=f>=0?e[f]:"/"}let l=uP(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Gn=t=>t.join("/").replace(/\/\/+/g,"/"),fP=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),hP=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,dP=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Pm{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function QE(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const YE=["post","put","patch","delete"],pP=new Set(YE),mP=["get",...YE],gP=new Set(mP),vP=new Set([301,302,303,307,308]),yP=new Set([307,308]),yh={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},_P={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},vo={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},XE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,EP=t=>({hasErrorBoundary:!!t.hasErrorBoundary});function wP(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;ue(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let T=t.detectErrorBoundary;i=S=>({hasErrorBoundary:T(S)})}else i=EP;let s={},o=Ld(t.routes,i,void 0,s),a,l=t.basename||"/",u=Oe({v7_normalizeFormMethod:!1,v7_prependBasename:!1},t.future),c=null,f=new Set,h=null,m=null,y=null,_=t.hydrationData!=null,w=ls(o,t.history.location,l),v=null;if(w==null){let T=Yt(404,{pathname:t.history.location.pathname}),{matches:S,route:x}=xy(o);w=S,v={[x.id]:T}}let p=!w.some(T=>T.route.lazy)&&(!w.some(T=>T.route.loader)||t.hydrationData!=null),g,d={historyAction:t.history.action,location:t.history.location,matches:w,initialized:p,navigation:yh,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||v,fetchers:new Map,blockers:new Map},I=Ge.Pop,k=!1,P,E=!1,R=!1,C=[],V=[],L=new Map,W=0,K=-1,se=new Map,ce=new Set,X=new Map,b=new Map,j=new Map,te=!1;function De(){return c=t.history.listen(T=>{let{action:S,location:x,delta:$}=T;if(te){te=!1;return}Os(j.size===0||$!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ne=nv({currentLocation:d.location,nextLocation:x,historyAction:S});if(ne&&$!=null){te=!0,t.history.go($*-1),wl(ne,{state:"blocked",location:x,proceed(){wl(ne,{state:"proceeding",proceed:void 0,reset:void 0,location:x}),t.history.go($)},reset(){let Z=new Map(d.blockers);Z.set(ne,vo),Ie({blockers:Z})}});return}return ei(S,x)}),d.initialized||ei(Ge.Pop,d.location),g}function We(){c&&c(),f.clear(),P&&P.abort(),d.fetchers.forEach((T,S)=>Lf(S)),d.blockers.forEach((T,S)=>tv(S))}function $i(T){return f.add(T),()=>f.delete(T)}function Ie(T){d=Oe({},d,T),f.forEach(S=>S(d))}function Mn(T,S){var x,$;let ne=d.actionData!=null&&d.navigation.formMethod!=null&&cn(d.navigation.formMethod)&&d.navigation.state==="loading"&&((x=T.state)==null?void 0:x._isRedirect)!==!0,Z;S.actionData?Object.keys(S.actionData).length>0?Z=S.actionData:Z=null:ne?Z=d.actionData:Z=null;let oe=S.loaderData?by(d.loaderData,S.loaderData,S.matches||[],S.errors):d.loaderData,Y=d.blockers;Y.size>0&&(Y=new Map(Y),Y.forEach((Ne,dt)=>Y.set(dt,vo)));let q=k===!0||d.navigation.formMethod!=null&&cn(d.navigation.formMethod)&&(($=T.state)==null?void 0:$._isRedirect)!==!0;a&&(o=a,a=void 0),E||I===Ge.Pop||(I===Ge.Push?t.history.push(T,T.state):I===Ge.Replace&&t.history.replace(T,T.state)),Ie(Oe({},S,{actionData:Z,loaderData:oe,historyAction:I,location:T,initialized:!0,navigation:yh,revalidation:"idle",restoreScrollPosition:iv(T,S.matches||d.matches),preventScrollReset:q,blockers:Y})),I=Ge.Pop,k=!1,E=!1,R=!1,C=[],V=[]}async function yn(T,S){if(typeof T=="number"){t.history.go(T);return}let x=Fd(d.location,d.matches,l,u.v7_prependBasename,T,S==null?void 0:S.fromRouteId,S==null?void 0:S.relative),{path:$,submission:ne,error:Z}=Sy(u.v7_normalizeFormMethod,!1,x,S),oe=d.location,Y=ga(d.location,$,S&&S.state);Y=Oe({},Y,t.history.encodeLocation(Y));let q=S&&S.replace!=null?S.replace:void 0,Ne=Ge.Push;q===!0?Ne=Ge.Replace:q===!1||ne!=null&&cn(ne.formMethod)&&ne.formAction===d.location.pathname+d.location.search&&(Ne=Ge.Replace);let dt=S&&"preventScrollReset"in S?S.preventScrollReset===!0:void 0,ge=nv({currentLocation:oe,nextLocation:Y,historyAction:Ne});if(ge){wl(ge,{state:"blocked",location:Y,proceed(){wl(ge,{state:"proceeding",proceed:void 0,reset:void 0,location:Y}),yn(T,S)},reset(){let we=new Map(d.blockers);we.set(ge,vo),Ie({blockers:we})}});return}return await ei(Ne,Y,{submission:ne,pendingError:Z,preventScrollReset:dt,replace:S&&S.replace})}function zi(){if(Vf(),Ie({revalidation:"loading"}),d.navigation.state!=="submitting"){if(d.navigation.state==="idle"){ei(d.historyAction,d.location,{startUninterruptedRevalidation:!0});return}ei(I||d.historyAction,d.navigation.location,{overrideNavigation:d.navigation})}}async function ei(T,S,x){P&&P.abort(),P=null,I=T,E=(x&&x.startUninterruptedRevalidation)===!0,nS(d.location,d.matches),k=(x&&x.preventScrollReset)===!0;let $=a||o,ne=x&&x.overrideNavigation,Z=ls($,S,l);if(!Z){let we=Yt(404,{pathname:S.pathname}),{matches:ze,route:ti}=xy($);Ff(),Mn(S,{matches:ze,loaderData:{},errors:{[ti.id]:we}});return}if(d.initialized&&!R&&kP(d.location,S)&&!(x&&x.submission&&cn(x.submission.formMethod))){Mn(S,{matches:Z});return}P=new AbortController;let oe=_o(t.history,S,P.signal,x&&x.submission),Y,q;if(x&&x.pendingError)q={[us(Z).route.id]:x.pendingError};else if(x&&x.submission&&cn(x.submission.formMethod)){let we=await QT(oe,S,x.submission,Z,{replace:x.replace});if(we.shortCircuited)return;Y=we.pendingActionData,q=we.pendingActionError,ne=_h(S,x.submission),oe=new Request(oe.url,{signal:oe.signal})}let{shortCircuited:Ne,loaderData:dt,errors:ge}=await YT(oe,S,Z,ne,x&&x.submission,x&&x.fetcherSubmission,x&&x.replace,Y,q);Ne||(P=null,Mn(S,Oe({matches:Z},Y?{actionData:Y}:{},{loaderData:dt,errors:ge})))}async function QT(T,S,x,$,ne){ne===void 0&&(ne={}),Vf();let Z=bP(S,x);Ie({navigation:Z});let oe,Y=Ud($,S);if(!Y.route.action&&!Y.route.lazy)oe={type:Be.error,error:Yt(405,{method:T.method,pathname:S.pathname,routeId:Y.route.id})};else if(oe=await yo("action",T,Y,$,s,i,l),T.signal.aborted)return{shortCircuited:!0};if(Es(oe)){let q;return ne&&ne.replace!=null?q=ne.replace:q=oe.location===d.location.pathname+d.location.search,await io(d,oe,{submission:x,replace:q}),{shortCircuited:!0}}if(Bo(oe)){let q=us($,Y.route.id);return(ne&&ne.replace)!==!0&&(I=Ge.Push),{pendingActionData:{},pendingActionError:{[q.route.id]:oe.error}}}if(ui(oe))throw Yt(400,{type:"defer-action"});return{pendingActionData:{[Y.route.id]:oe.data}}}async function YT(T,S,x,$,ne,Z,oe,Y,q){let Ne=$||_h(S,ne),dt=ne||Z||Oy(Ne),ge=a||o,[we,ze]=Ay(t.history,d,x,dt,S,R,C,V,X,ce,ge,l,Y,q);if(Ff(Ee=>!(x&&x.some(on=>on.route.id===Ee))||we&&we.some(on=>on.route.id===Ee)),K=++W,we.length===0&&ze.length===0){let Ee=Zg();return Mn(S,Oe({matches:x,loaderData:{},errors:q||null},Y?{actionData:Y}:{},Ee?{fetchers:new Map(d.fetchers)}:{})),{shortCircuited:!0}}if(!E){ze.forEach(on=>{let fr=d.fetchers.get(on.key),Bf=Eo(void 0,fr?fr.data:void 0);d.fetchers.set(on.key,Bf)});let Ee=Y||d.actionData;Ie(Oe({navigation:Ne},Ee?Object.keys(Ee).length===0?{actionData:null}:{actionData:Ee}:{},ze.length>0?{fetchers:new Map(d.fetchers)}:{}))}ze.forEach(Ee=>{L.has(Ee.key)&&cr(Ee.key),Ee.controller&&L.set(Ee.key,Ee.controller)});let ti=()=>ze.forEach(Ee=>cr(Ee.key));P&&P.signal.addEventListener("abort",ti);let{results:ni,loaderResults:so,fetcherResults:jf}=await Xg(d.matches,x,we,ze,T);if(T.signal.aborted)return{shortCircuited:!0};P&&P.signal.removeEventListener("abort",ti),ze.forEach(Ee=>L.delete(Ee.key));let Vn=Dy(ni);if(Vn){if(Vn.idx>=we.length){let Ee=ze[Vn.idx-we.length].key;ce.add(Ee)}return await io(d,Vn.result,{replace:oe}),{shortCircuited:!0}}let{loaderData:Ln,errors:Il}=Cy(d,x,we,so,q,ze,jf,b);b.forEach((Ee,on)=>{Ee.subscribe(fr=>{(fr||Ee.done)&&b.delete(on)})});let Uf=Zg(),$f=ev(K),zf=Uf||$f||ze.length>0;return Oe({loaderData:Ln,errors:Il},zf?{fetchers:new Map(d.fetchers)}:{})}function Yg(T){return d.fetchers.get(T)||_P}function XT(T,S,x,$){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");L.has(T)&&cr(T);let ne=a||o,Z=Fd(d.location,d.matches,l,u.v7_prependBasename,x,S,$==null?void 0:$.relative),oe=ls(ne,Z,l);if(!oe){El(T,S,Yt(404,{pathname:Z}));return}let{path:Y,submission:q,error:Ne}=Sy(u.v7_normalizeFormMethod,!0,Z,$);if(Ne){El(T,S,Ne);return}let dt=Ud(oe,Y);if(k=($&&$.preventScrollReset)===!0,q&&cn(q.formMethod)){JT(T,S,Y,dt,oe,q);return}X.set(T,{routeId:S,path:Y}),ZT(T,S,Y,dt,oe,q)}async function JT(T,S,x,$,ne,Z){if(Vf(),X.delete(T),!$.route.action&&!$.route.lazy){let Ye=Yt(405,{method:Z.formMethod,pathname:x,routeId:S});El(T,S,Ye);return}let oe=d.fetchers.get(T),Y=xP(Z,oe);d.fetchers.set(T,Y),Ie({fetchers:new Map(d.fetchers)});let q=new AbortController,Ne=_o(t.history,x,q.signal,Z);L.set(T,q);let dt=W,ge=await yo("action",Ne,$,ne,s,i,l);if(Ne.signal.aborted){L.get(T)===q&&L.delete(T);return}if(Es(ge))if(L.delete(T),K>dt){let Ye=Ki(void 0);d.fetchers.set(T,Ye),Ie({fetchers:new Map(d.fetchers)});return}else{ce.add(T);let Ye=Eo(Z);return d.fetchers.set(T,Ye),Ie({fetchers:new Map(d.fetchers)}),io(d,ge,{fetcherSubmission:Z})}if(Bo(ge)){El(T,S,ge.error);return}if(ui(ge))throw Yt(400,{type:"defer-action"});let we=d.navigation.location||d.location,ze=_o(t.history,we,q.signal),ti=a||o,ni=d.navigation.state!=="idle"?ls(ti,d.navigation.location,l):d.matches;ue(ni,"Didn't find any matches after fetcher action");let so=++W;se.set(T,so);let jf=Eo(Z,ge.data);d.fetchers.set(T,jf);let[Vn,Ln]=Ay(t.history,d,ni,Z,we,R,C,V,X,ce,ti,l,{[$.route.id]:ge.data},void 0);Ln.filter(Ye=>Ye.key!==T).forEach(Ye=>{let oo=Ye.key,sv=d.fetchers.get(oo),iS=Eo(void 0,sv?sv.data:void 0);d.fetchers.set(oo,iS),L.has(oo)&&cr(oo),Ye.controller&&L.set(oo,Ye.controller)}),Ie({fetchers:new Map(d.fetchers)});let Il=()=>Ln.forEach(Ye=>cr(Ye.key));q.signal.addEventListener("abort",Il);let{results:Uf,loaderResults:$f,fetcherResults:zf}=await Xg(d.matches,ni,Vn,Ln,ze);if(q.signal.aborted)return;q.signal.removeEventListener("abort",Il),se.delete(T),L.delete(T),Ln.forEach(Ye=>L.delete(Ye.key));let Ee=Dy(Uf);if(Ee){if(Ee.idx>=Vn.length){let Ye=Ln[Ee.idx-Vn.length].key;ce.add(Ye)}return io(d,Ee.result)}let{loaderData:on,errors:fr}=Cy(d,d.matches,Vn,$f,void 0,Ln,zf,b);if(d.fetchers.has(T)){let Ye=Ki(ge.data);d.fetchers.set(T,Ye)}let Bf=ev(so);d.navigation.state==="loading"&&so>K?(ue(I,"Expected pending action"),P&&P.abort(),Mn(d.navigation.location,{matches:ni,loaderData:on,errors:fr,fetchers:new Map(d.fetchers)})):(Ie(Oe({errors:fr,loaderData:by(d.loaderData,on,ni,fr)},Bf||Ln.length>0?{fetchers:new Map(d.fetchers)}:{})),R=!1)}async function ZT(T,S,x,$,ne,Z){let oe=d.fetchers.get(T),Y=Eo(Z,oe?oe.data:void 0);d.fetchers.set(T,Y),Ie({fetchers:new Map(d.fetchers)});let q=new AbortController,Ne=_o(t.history,x,q.signal);L.set(T,q);let dt=W,ge=await yo("loader",Ne,$,ne,s,i,l);if(ui(ge)&&(ge=await ew(ge,Ne.signal,!0)||ge),L.get(T)===q&&L.delete(T),Ne.signal.aborted)return;if(Es(ge))if(K>dt){let ze=Ki(void 0);d.fetchers.set(T,ze),Ie({fetchers:new Map(d.fetchers)});return}else{ce.add(T),await io(d,ge);return}if(Bo(ge)){let ze=us(d.matches,S);d.fetchers.delete(T),Ie({fetchers:new Map(d.fetchers),errors:{[ze.route.id]:ge.error}});return}ue(!ui(ge),"Unhandled fetcher deferred data");let we=Ki(ge.data);d.fetchers.set(T,we),Ie({fetchers:new Map(d.fetchers)})}async function io(T,S,x){let{submission:$,fetcherSubmission:ne,replace:Z}=x===void 0?{}:x;S.revalidate&&(R=!0);let oe=ga(T.location,S.location,{_isRedirect:!0});if(ue(oe,"Expected a location on the redirect navigation"),n){let we=!1;if(S.reloadDocument)we=!0;else if(XE.test(S.location)){const ze=t.history.createURL(S.location);we=ze.origin!==e.location.origin||Qs(ze.pathname,l)==null}if(we){Z?e.location.replace(S.location):e.location.assign(S.location);return}}P=null;let Y=Z===!0?Ge.Replace:Ge.Push,{formMethod:q,formAction:Ne,formEncType:dt}=T.navigation;!$&&!ne&&q&&Ne&&dt&&($=Oy(T.navigation));let ge=$||ne;if(yP.has(S.status)&&ge&&cn(ge.formMethod))await ei(Y,oe,{submission:Oe({},ge,{formAction:S.location}),preventScrollReset:k});else{let we=_h(oe,$);await ei(Y,oe,{overrideNavigation:we,fetcherSubmission:ne,preventScrollReset:k})}}async function Xg(T,S,x,$,ne){let Z=await Promise.all([...x.map(q=>yo("loader",ne,q,S,s,i,l)),...$.map(q=>q.matches&&q.match&&q.controller?yo("loader",_o(t.history,q.path,q.controller.signal),q.match,q.matches,s,i,l):{type:Be.error,error:Yt(404,{pathname:q.path})})]),oe=Z.slice(0,x.length),Y=Z.slice(x.length);return await Promise.all([Ny(T,x,oe,oe.map(()=>ne.signal),!1,d.loaderData),Ny(T,$.map(q=>q.match),Y,$.map(q=>q.controller?q.controller.signal:null),!0)]),{results:Z,loaderResults:oe,fetcherResults:Y}}function Vf(){R=!0,C.push(...Ff()),X.forEach((T,S)=>{L.has(S)&&(V.push(S),cr(S))})}function El(T,S,x){let $=us(d.matches,S);Lf(T),Ie({errors:{[$.route.id]:x},fetchers:new Map(d.fetchers)})}function Lf(T){let S=d.fetchers.get(T);L.has(T)&&!(S&&S.state==="loading"&&se.has(T))&&cr(T),X.delete(T),se.delete(T),ce.delete(T),d.fetchers.delete(T)}function cr(T){let S=L.get(T);ue(S,"Expected fetch controller: "+T),S.abort(),L.delete(T)}function Jg(T){for(let S of T){let x=Yg(S),$=Ki(x.data);d.fetchers.set(S,$)}}function Zg(){let T=[],S=!1;for(let x of ce){let $=d.fetchers.get(x);ue($,"Expected fetcher: "+x),$.state==="loading"&&(ce.delete(x),T.push(x),S=!0)}return Jg(T),S}function ev(T){let S=[];for(let[x,$]of se)if($<T){let ne=d.fetchers.get(x);ue(ne,"Expected fetcher: "+x),ne.state==="loading"&&(cr(x),se.delete(x),S.push(x))}return Jg(S),S.length>0}function eS(T,S){let x=d.blockers.get(T)||vo;return j.get(T)!==S&&j.set(T,S),x}function tv(T){d.blockers.delete(T),j.delete(T)}function wl(T,S){let x=d.blockers.get(T)||vo;ue(x.state==="unblocked"&&S.state==="blocked"||x.state==="blocked"&&S.state==="blocked"||x.state==="blocked"&&S.state==="proceeding"||x.state==="blocked"&&S.state==="unblocked"||x.state==="proceeding"&&S.state==="unblocked","Invalid blocker state transition: "+x.state+" -> "+S.state);let $=new Map(d.blockers);$.set(T,S),Ie({blockers:$})}function nv(T){let{currentLocation:S,nextLocation:x,historyAction:$}=T;if(j.size===0)return;j.size>1&&Os(!1,"A router only supports one blocker at a time");let ne=Array.from(j.entries()),[Z,oe]=ne[ne.length-1],Y=d.blockers.get(Z);if(!(Y&&Y.state==="proceeding")&&oe({currentLocation:S,nextLocation:x,historyAction:$}))return Z}function Ff(T){let S=[];return b.forEach((x,$)=>{(!T||T($))&&(x.cancel(),S.push($),b.delete($))}),S}function tS(T,S,x){if(h=T,y=S,m=x||null,!_&&d.navigation===yh){_=!0;let $=iv(d.location,d.matches);$!=null&&Ie({restoreScrollPosition:$})}return()=>{h=null,y=null,m=null}}function rv(T,S){return m&&m(T,S.map($=>qk($,d.loaderData)))||T.key}function nS(T,S){if(h&&y){let x=rv(T,S);h[x]=y()}}function iv(T,S){if(h){let x=rv(T,S),$=h[x];if(typeof $=="number")return $}return null}function rS(T){s={},a=Ld(T,i,void 0,s)}return g={get basename(){return l},get state(){return d},get routes(){return o},initialize:De,subscribe:$i,enableScrollRestoration:tS,navigate:yn,fetch:XT,revalidate:zi,createHref:T=>t.history.createHref(T),encodeLocation:T=>t.history.encodeLocation(T),getFetcher:Yg,deleteFetcher:Lf,dispose:We,getBlocker:eS,deleteBlocker:tv,_internalFetchControllers:L,_internalActiveDeferreds:b,_internalSetRoutes:rS},g}function IP(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function Fd(t,e,n,r,i,s,o){let a,l;if(s!=null&&o!=="path"){a=[];for(let c of e)if(a.push(c),c.route.id===s){l=c;break}}else a=e,l=e[e.length-1];let u=km(i||".",Wc(a).map(c=>c.pathnameBase),Qs(t.pathname,n)||t.pathname,o==="path");return i==null&&(u.search=t.search,u.hash=t.hash),(i==null||i===""||i===".")&&l&&l.route.index&&!Rm(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:Gn([n,u.pathname])),ki(u)}function Sy(t,e,n,r){if(!r||!IP(r))return{path:n};if(r.formMethod&&!CP(r.formMethod))return{path:n,error:Yt(405,{method:r.formMethod})};let i=()=>({path:n,error:Yt(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=ZE(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!cn(o))return i();let h=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((m,y)=>{let[_,w]=y;return""+m+_+"="+w+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:h}}}else if(r.formEncType==="application/json"){if(!cn(o))return i();try{let h=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:h,text:void 0}}}catch{return i()}}}ue(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=jd(r.formData),u=r.formData;else if(r.body instanceof FormData)l=jd(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=Ry(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=Ry(l)}catch{return i()}let c={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(cn(c.formMethod))return{path:n,submission:c};let f=or(n);return e&&f.search&&Rm(f.search)&&l.append("index",""),f.search="?"+l,{path:ki(f),submission:c}}function TP(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function Ay(t,e,n,r,i,s,o,a,l,u,c,f,h,m){let y=m?Object.values(m)[0]:h?Object.values(h)[0]:void 0,_=t.createURL(e.location),w=t.createURL(i),v=m?Object.keys(m)[0]:void 0,g=TP(n,v).filter((I,k)=>{if(I.route.lazy)return!0;if(I.route.loader==null)return!1;if(SP(e.loaderData,e.matches[k],I)||o.some(R=>R===I.route.id))return!0;let P=e.matches[k],E=I;return ky(I,Oe({currentUrl:_,currentParams:P.params,nextUrl:w,nextParams:E.params},r,{actionResult:y,defaultShouldRevalidate:s||_.pathname+_.search===w.pathname+w.search||_.search!==w.search||JE(P,E)}))}),d=[];return l.forEach((I,k)=>{if(!n.some(V=>V.route.id===I.routeId))return;let P=ls(c,I.path,f);if(!P){d.push({key:k,routeId:I.routeId,path:I.path,matches:null,match:null,controller:null});return}let E=e.fetchers.get(k),R=Ud(P,I.path),C=!1;u.has(k)?C=!1:a.includes(k)?C=!0:E&&E.state!=="idle"&&E.data===void 0?C=s:C=ky(R,Oe({currentUrl:_,currentParams:e.matches[e.matches.length-1].params,nextUrl:w,nextParams:n[n.length-1].params},r,{actionResult:y,defaultShouldRevalidate:s})),C&&d.push({key:k,routeId:I.routeId,path:I.path,matches:P,match:R,controller:new AbortController})}),[g,d]}function SP(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function JE(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function ky(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function Py(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];ue(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";Os(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!Kk.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,Oe({},e(i),{lazy:void 0}))}async function yo(t,e,n,r,i,s,o,a){a===void 0&&(a={});let l,u,c,f=y=>{let _,w=new Promise((v,p)=>_=p);return c=()=>_(),e.signal.addEventListener("abort",c),Promise.race([y({request:e,params:n.params,context:a.requestContext}),w])};try{let y=n.route[t];if(n.route.lazy)if(y){let _,w=await Promise.all([f(y).catch(v=>{_=v}),Py(n.route,s,i)]);if(_)throw _;u=w[0]}else if(await Py(n.route,s,i),y=n.route[t],y)u=await f(y);else if(t==="action"){let _=new URL(e.url),w=_.pathname+_.search;throw Yt(405,{method:e.method,pathname:w,routeId:n.route.id})}else return{type:Be.data,data:void 0};else if(y)u=await f(y);else{let _=new URL(e.url),w=_.pathname+_.search;throw Yt(404,{pathname:w})}ue(u!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(y){l=Be.error,u=y}finally{c&&e.signal.removeEventListener("abort",c)}if(RP(u)){let y=u.status;if(vP.has(y)){let v=u.headers.get("Location");if(ue(v,"Redirects returned/thrown from loaders/actions must have a Location header"),!XE.test(v))v=Fd(new URL(e.url),r.slice(0,r.indexOf(n)+1),o,!0,v);else if(!a.isStaticRequest){let p=new URL(e.url),g=v.startsWith("//")?new URL(p.protocol+v):new URL(v),d=Qs(g.pathname,o)!=null;g.origin===p.origin&&d&&(v=g.pathname+g.search+g.hash)}if(a.isStaticRequest)throw u.headers.set("Location",v),u;return{type:Be.redirect,status:y,location:v,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(a.isRouteRequest)throw{type:l===Be.error?Be.error:Be.data,response:u};let _,w=u.headers.get("Content-Type");return w&&/\bapplication\/json\b/.test(w)?_=await u.json():_=await u.text(),l===Be.error?{type:l,error:new Pm(y,u.statusText,_),headers:u.headers}:{type:Be.data,data:_,statusCode:u.status,headers:u.headers}}if(l===Be.error)return{type:l,error:u};if(PP(u)){var h,m;return{type:Be.deferred,deferredData:u,statusCode:(h=u.init)==null?void 0:h.status,headers:((m=u.init)==null?void 0:m.headers)&&new Headers(u.init.headers)}}return{type:Be.data,data:u}}function _o(t,e,n,r){let i=t.createURL(ZE(e)).toString(),s={signal:n};if(r&&cn(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=jd(r.formData):s.body=r.formData}return new Request(i,s)}function jd(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function Ry(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function AP(t,e,n,r,i){let s={},o=null,a,l=!1,u={};return n.forEach((c,f)=>{let h=e[f].route.id;if(ue(!Es(c),"Cannot handle redirect results in processLoaderData"),Bo(c)){let m=us(t,h),y=c.error;r&&(y=Object.values(r)[0],r=void 0),o=o||{},o[m.route.id]==null&&(o[m.route.id]=y),s[h]=void 0,l||(l=!0,a=QE(c.error)?c.error.status:500),c.headers&&(u[h]=c.headers)}else ui(c)?(i.set(h,c.deferredData),s[h]=c.deferredData.data):s[h]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[h]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:u}}function Cy(t,e,n,r,i,s,o,a){let{loaderData:l,errors:u}=AP(e,n,r,i,a);for(let c=0;c<s.length;c++){let{key:f,match:h,controller:m}=s[c];ue(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let y=o[c];if(!(m&&m.signal.aborted))if(Bo(y)){let _=us(t.matches,h==null?void 0:h.route.id);u&&u[_.route.id]||(u=Oe({},u,{[_.route.id]:y.error})),t.fetchers.delete(f)}else if(Es(y))ue(!1,"Unhandled fetcher revalidation redirect");else if(ui(y))ue(!1,"Unhandled fetcher deferred data");else{let _=Ki(y.data);t.fetchers.set(f,_)}}return{loaderData:l,errors:u}}function by(t,e,n,r){let i=Oe({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function us(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function xy(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Yt(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?a="defer() is not supported in actions":s==="invalid-body"&&(a="Unable to encode submission body")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new Pm(t||500,o,new Error(a),!0)}function Dy(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(Es(n))return{result:n,idx:e}}}function ZE(t){let e=typeof t=="string"?or(t):t;return ki(Oe({},e,{hash:""}))}function kP(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function ui(t){return t.type===Be.deferred}function Bo(t){return t.type===Be.error}function Es(t){return(t&&t.type)===Be.redirect}function PP(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function RP(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function CP(t){return gP.has(t.toLowerCase())}function cn(t){return pP.has(t.toLowerCase())}async function Ny(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o];if(!l)continue;let u=t.find(f=>f.route.id===l.route.id),c=u!=null&&!JE(u,l)&&(s&&s[l.route.id])!==void 0;if(ui(a)&&(i||c)){let f=r[o];ue(f,"Expected an AbortSignal for revalidating fetcher deferred result"),await ew(a,f,i).then(h=>{h&&(n[o]=h||n[o])})}}}async function ew(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Be.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Be.error,error:i}}return{type:Be.data,data:t.deferredData.data}}}function Rm(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function Ud(t,e){let n=typeof e=="string"?or(e).search:e.search;if(t[t.length-1].route.index&&Rm(n||""))return t[t.length-1];let r=Wc(t);return r[r.length-1]}function Oy(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function _h(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function bP(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function Eo(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function xP(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function Ki(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tc(){return tc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},tc.apply(this,arguments)}const Kc=O.createContext(null),tw=O.createContext(null),Ys=O.createContext(null),Gc=O.createContext(null),ar=O.createContext({outlet:null,matches:[],isDataRoute:!1}),nw=O.createContext(null);function DP(t,e){let{relative:n}=e===void 0?{}:e;qa()||ue(!1);let{basename:r,navigator:i}=O.useContext(Ys),{hash:s,pathname:o,search:a}=sw(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Gn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function qa(){return O.useContext(Gc)!=null}function qc(){return qa()||ue(!1),O.useContext(Gc).location}function rw(t){O.useContext(Ys).static||O.useLayoutEffect(t)}function iw(){let{isDataRoute:t}=O.useContext(ar);return t?GP():NP()}function NP(){qa()||ue(!1);let t=O.useContext(Kc),{basename:e,navigator:n}=O.useContext(Ys),{matches:r}=O.useContext(ar),{pathname:i}=qc(),s=JSON.stringify(Wc(r).map(l=>l.pathnameBase)),o=O.useRef(!1);return rw(()=>{o.current=!0}),O.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=km(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Gn([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const OP=O.createContext(null);function MP(t){let e=O.useContext(ar).outlet;return e&&O.createElement(OP.Provider,{value:t},e)}function VP(){let{matches:t}=O.useContext(ar),e=t[t.length-1];return e?e.params:{}}function sw(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=O.useContext(ar),{pathname:i}=qc(),s=JSON.stringify(Wc(r).map(o=>o.pathnameBase));return O.useMemo(()=>km(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function LP(t,e,n){qa()||ue(!1);let{navigator:r}=O.useContext(Ys),{matches:i}=O.useContext(ar),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=qc(),u;if(e){var c;let _=typeof e=="string"?or(e):e;a==="/"||(c=_.pathname)!=null&&c.startsWith(a)||ue(!1),u=_}else u=l;let f=u.pathname||"/",h=a==="/"?f:f.slice(a.length)||"/",m=ls(t,{pathname:h}),y=zP(m&&m.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:Gn([a,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:Gn([a,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return e&&y?O.createElement(Gc.Provider,{value:{location:tc({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Ge.Pop}},y):y}function FP(){let t=KP(),e=QE(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},e),n?O.createElement("pre",{style:i},n):null,s)}const jP=O.createElement(FP,null);class UP extends O.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?O.createElement(ar.Provider,{value:this.props.routeContext},O.createElement(nw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function $P(t){let{routeContext:e,match:n,children:r}=t,i=O.useContext(Kc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),O.createElement(ar.Provider,{value:e},r)}function zP(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||ue(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,f=null;n&&(f=l.route.errorElement||jP);let h=e.concat(s.slice(0,u+1)),m=()=>{let y;return c?y=f:l.route.Component?y=O.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,O.createElement($P,{match:l,routeContext:{outlet:a,matches:h,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?O.createElement(UP,{location:n.location,revalidation:n.revalidation,component:f,error:c,children:m(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):m()},null)}var ow=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(ow||{}),nc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(nc||{});function BP(t){let e=O.useContext(Kc);return e||ue(!1),e}function HP(t){let e=O.useContext(tw);return e||ue(!1),e}function WP(t){let e=O.useContext(ar);return e||ue(!1),e}function aw(t){let e=WP(),n=e.matches[e.matches.length-1];return n.route.id||ue(!1),n.route.id}function KP(){var t;let e=O.useContext(nw),n=HP(nc.UseRouteError),r=aw(nc.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function GP(){let{router:t}=BP(ow.UseNavigateStable),e=aw(nc.UseNavigateStable),n=O.useRef(!1);return rw(()=>{n.current=!0}),O.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,tc({fromRouteId:e},s)))},[t,e])}const qP="startTransition",My=wS[qP];function QP(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=O.useState(n.state),{v7_startTransition:o}=r||{},a=O.useCallback(f=>{o&&My?My(()=>s(f)):s(f)},[s,o]);O.useLayoutEffect(()=>n.subscribe(a),[n,a]);let l=O.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:f=>n.navigate(f),push:(f,h,m)=>n.navigate(f,{state:h,preventScrollReset:m==null?void 0:m.preventScrollReset}),replace:(f,h,m)=>n.navigate(f,{replace:!0,state:h,preventScrollReset:m==null?void 0:m.preventScrollReset})}),[n]),u=n.basename||"/",c=O.useMemo(()=>({router:n,navigator:l,static:!1,basename:u}),[n,l,u]);return O.createElement(O.Fragment,null,O.createElement(Kc.Provider,{value:c},O.createElement(tw.Provider,{value:i},O.createElement(JP,{basename:u,location:i.location,navigationType:i.historyAction,navigator:l},i.initialized?O.createElement(YP,{routes:n.routes,state:i}):e))),null)}function YP(t){let{routes:e,state:n}=t;return LP(e,void 0,n)}function XP(t){return MP(t.context)}function JP(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Ge.Pop,navigator:s,static:o=!1}=t;qa()&&ue(!1);let a=e.replace(/^\/*/,"/"),l=O.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=or(r));let{pathname:u="/",search:c="",hash:f="",state:h=null,key:m="default"}=r,y=O.useMemo(()=>{let _=Qs(u,a);return _==null?null:{location:{pathname:_,search:c,hash:f,state:h,key:m},navigationType:i}},[a,u,c,f,h,m,i]);return y==null?null:O.createElement(Ys.Provider,{value:l},O.createElement(Gc.Provider,{children:n,value:y}))}new Promise(()=>{});function ZP(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:O.createElement(t.Component),Component:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:O.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function va(){return va=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},va.apply(this,arguments)}function eR(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function tR(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function nR(t,e){return t.button===0&&(!e||e==="_self")&&!tR(t)}const rR=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function iR(t,e){return wP({basename:e==null?void 0:e.basename,future:va({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:Bk({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||sR(),routes:t,mapRouteProperties:ZP}).initialize()}function sR(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=va({},e,{errors:oR(e.errors)})),e}function oR(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new Pm(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const aR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",lR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ya=O.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,f=eR(e,rR),{basename:h}=O.useContext(Ys),m,y=!1;if(typeof u=="string"&&lR.test(u)&&(m=u,aR))try{let p=new URL(window.location.href),g=u.startsWith("//")?new URL(p.protocol+u):new URL(u),d=Qs(g.pathname,h);g.origin===p.origin&&d!=null?u=d+g.search+g.hash:y=!0}catch{}let _=DP(u,{relative:i}),w=uR(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function v(p){r&&r(p),p.defaultPrevented||w(p)}return O.createElement("a",va({},f,{href:m||_,onClick:y||s?r:v,ref:n,target:l}))});var Vy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(Vy||(Vy={}));var Ly;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Ly||(Ly={}));function uR(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=iw(),l=qc(),u=sw(t,{relative:o});return O.useCallback(c=>{if(nR(c,n)){c.preventDefault();let f=r!==void 0?r:ki(l)===ki(u);a(t,{replace:f,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}const cR="_image_12j4j_2",fR="_closeup_12j4j_8",hR="_article_12j4j_16",dR="_headerLink_12j4j_35",zl={image:cR,closeup:fR,article:hR,headerLink:dR};function Fy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function U(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Fy(Object(n),!0).forEach(function(r){tt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Fy(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function rc(t){"@babel/helpers - typeof";return rc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},rc(t)}function pR(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function jy(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function mR(t,e,n){return e&&jy(t.prototype,e),n&&jy(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function tt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Cm(t,e){return vR(t)||_R(t,e)||lw(t,e)||wR()}function Qa(t){return gR(t)||yR(t)||lw(t)||ER()}function gR(t){if(Array.isArray(t))return $d(t)}function vR(t){if(Array.isArray(t))return t}function yR(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function _R(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function lw(t,e){if(t){if(typeof t=="string")return $d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $d(t,e)}}function $d(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function ER(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wR(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Uy=function(){},bm={},uw={},cw=null,fw={mark:Uy,measure:Uy};try{typeof window<"u"&&(bm=window),typeof document<"u"&&(uw=document),typeof MutationObserver<"u"&&(cw=MutationObserver),typeof performance<"u"&&(fw=performance)}catch{}var IR=bm.navigator||{},$y=IR.userAgent,zy=$y===void 0?"":$y,zr=bm,Re=uw,By=cw,Bl=fw;zr.document;var lr=!!Re.documentElement&&!!Re.head&&typeof Re.addEventListener=="function"&&typeof Re.createElement=="function",hw=~zy.indexOf("MSIE")||~zy.indexOf("Trident/"),Hl,Wl,Kl,Gl,ql,Jn="___FONT_AWESOME___",zd=16,dw="fa",pw="svg-inline--fa",Pi="data-fa-i2svg",Bd="data-fa-pseudo-element",TR="data-fa-pseudo-element-pending",xm="data-prefix",Dm="data-icon",Hy="fontawesome-i2svg",SR="async",AR=["HTML","HEAD","STYLE","SCRIPT"],mw=function(){try{return!0}catch{return!1}}(),Ae="classic",Ue="sharp",Nm=[Ae,Ue];function Ya(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[Ae]}})}var _a=Ya((Hl={},tt(Hl,Ae,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),tt(Hl,Ue,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Hl)),Ea=Ya((Wl={},tt(Wl,Ae,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),tt(Wl,Ue,{solid:"fass",regular:"fasr",light:"fasl"}),Wl)),wa=Ya((Kl={},tt(Kl,Ae,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),tt(Kl,Ue,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Kl)),kR=Ya((Gl={},tt(Gl,Ae,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),tt(Gl,Ue,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Gl)),PR=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,gw="fa-layers-text",RR=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,CR=Ya((ql={},tt(ql,Ae,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),tt(ql,Ue,{900:"fass",400:"fasr",300:"fasl"}),ql)),vw=[1,2,3,4,5,6,7,8,9,10],bR=vw.concat([11,12,13,14,15,16,17,18,19,20]),xR=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ci={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ia=new Set;Object.keys(Ea[Ae]).map(Ia.add.bind(Ia));Object.keys(Ea[Ue]).map(Ia.add.bind(Ia));var DR=[].concat(Nm,Qa(Ia),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ci.GROUP,ci.SWAP_OPACITY,ci.PRIMARY,ci.SECONDARY]).concat(vw.map(function(t){return"".concat(t,"x")})).concat(bR.map(function(t){return"w-".concat(t)})),Ho=zr.FontAwesomeConfig||{};function NR(t){var e=Re.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function OR(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Re&&typeof Re.querySelector=="function"){var MR=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];MR.forEach(function(t){var e=Cm(t,2),n=e[0],r=e[1],i=OR(NR(n));i!=null&&(Ho[r]=i)})}var yw={styleDefault:"solid",familyDefault:"classic",cssPrefix:dw,replacementClass:pw,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ho.familyPrefix&&(Ho.cssPrefix=Ho.familyPrefix);var Ms=U(U({},yw),Ho);Ms.autoReplaceSvg||(Ms.observeMutations=!1);var H={};Object.keys(yw).forEach(function(t){Object.defineProperty(H,t,{enumerable:!0,set:function(n){Ms[t]=n,Wo.forEach(function(r){return r(H)})},get:function(){return Ms[t]}})});Object.defineProperty(H,"familyPrefix",{enumerable:!0,set:function(e){Ms.cssPrefix=e,Wo.forEach(function(n){return n(H)})},get:function(){return Ms.cssPrefix}});zr.FontAwesomeConfig=H;var Wo=[];function VR(t){return Wo.push(t),function(){Wo.splice(Wo.indexOf(t),1)}}var dr=zd,Tn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function LR(t){if(!(!t||!lr)){var e=Re.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Re.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Re.head.insertBefore(e,r),t}}var FR="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ta(){for(var t=12,e="";t-- >0;)e+=FR[Math.random()*62|0];return e}function Xs(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Om(t){return t.classList?Xs(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function _w(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function jR(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(_w(t[n]),'" ')},"").trim()}function Qc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Mm(t){return t.size!==Tn.size||t.x!==Tn.x||t.y!==Tn.y||t.rotate!==Tn.rotate||t.flipX||t.flipY}function UR(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function $R(t){var e=t.transform,n=t.width,r=n===void 0?zd:n,i=t.height,s=i===void 0?zd:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&hw?l+="translate(".concat(e.x/dr-r/2,"em, ").concat(e.y/dr-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/dr,"em), calc(-50% + ").concat(e.y/dr,"em)) "):l+="translate(".concat(e.x/dr,"em, ").concat(e.y/dr,"em) "),l+="scale(".concat(e.size/dr*(e.flipX?-1:1),", ").concat(e.size/dr*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var zR=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Ew(){var t=dw,e=pw,n=H.cssPrefix,r=H.replacementClass,i=zR;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var Wy=!1;function Eh(){H.autoAddCss&&!Wy&&(LR(Ew()),Wy=!0)}var BR={mixout:function(){return{dom:{css:Ew,insertCss:Eh}}},hooks:function(){return{beforeDOMElementCreation:function(){Eh()},beforeI2svg:function(){Eh()}}}},Zn=zr||{};Zn[Jn]||(Zn[Jn]={});Zn[Jn].styles||(Zn[Jn].styles={});Zn[Jn].hooks||(Zn[Jn].hooks={});Zn[Jn].shims||(Zn[Jn].shims=[]);var hn=Zn[Jn],ww=[],HR=function t(){Re.removeEventListener("DOMContentLoaded",t),ic=1,ww.map(function(e){return e()})},ic=!1;lr&&(ic=(Re.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Re.readyState),ic||Re.addEventListener("DOMContentLoaded",HR));function WR(t){lr&&(ic?setTimeout(t,0):ww.push(t))}function Xa(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?_w(t):"<".concat(e," ").concat(jR(r),">").concat(s.map(Xa).join(""),"</").concat(e,">")}function Ky(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var KR=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},wh=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?KR(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function GR(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Hd(t){var e=GR(t);return e.length===1?e[0].toString(16):null}function qR(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Gy(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Wd(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Gy(e);typeof hn.hooks.addPack=="function"&&!i?hn.hooks.addPack(t,Gy(e)):hn.styles[t]=U(U({},hn.styles[t]||{}),s),t==="fas"&&Wd("fa",e)}var Ql,Yl,Xl,cs=hn.styles,QR=hn.shims,YR=(Ql={},tt(Ql,Ae,Object.values(wa[Ae])),tt(Ql,Ue,Object.values(wa[Ue])),Ql),Vm=null,Iw={},Tw={},Sw={},Aw={},kw={},XR=(Yl={},tt(Yl,Ae,Object.keys(_a[Ae])),tt(Yl,Ue,Object.keys(_a[Ue])),Yl);function JR(t){return~DR.indexOf(t)}function ZR(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!JR(i)?i:null}var Pw=function(){var e=function(s){return wh(cs,function(o,a,l){return o[l]=wh(a,s,{}),o},{})};Iw=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),Tw=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),kw=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in cs||H.autoFetchSvg,r=wh(QR,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});Sw=r.names,Aw=r.unicodes,Vm=Yc(H.styleDefault,{family:H.familyDefault})};VR(function(t){Vm=Yc(t.styleDefault,{family:H.familyDefault})});Pw();function Lm(t,e){return(Iw[t]||{})[e]}function eC(t,e){return(Tw[t]||{})[e]}function fi(t,e){return(kw[t]||{})[e]}function Rw(t){return Sw[t]||{prefix:null,iconName:null}}function tC(t){var e=Aw[t],n=Lm("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Br(){return Vm}var Fm=function(){return{prefix:null,iconName:null,rest:[]}};function Yc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?Ae:n,i=_a[r][t],s=Ea[r][t]||Ea[r][i],o=t in hn.styles?t:null;return s||o||null}var qy=(Xl={},tt(Xl,Ae,Object.keys(wa[Ae])),tt(Xl,Ue,Object.keys(wa[Ue])),Xl);function Xc(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},tt(e,Ae,"".concat(H.cssPrefix,"-").concat(Ae)),tt(e,Ue,"".concat(H.cssPrefix,"-").concat(Ue)),e),o=null,a=Ae;(t.includes(s[Ae])||t.some(function(u){return qy[Ae].includes(u)}))&&(a=Ae),(t.includes(s[Ue])||t.some(function(u){return qy[Ue].includes(u)}))&&(a=Ue);var l=t.reduce(function(u,c){var f=ZR(H.cssPrefix,c);if(cs[c]?(c=YR[a].includes(c)?kR[a][c]:c,o=c,u.prefix=c):XR[a].indexOf(c)>-1?(o=c,u.prefix=Yc(c,{family:a})):f?u.iconName=f:c!==H.replacementClass&&c!==s[Ae]&&c!==s[Ue]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var h=o==="fa"?Rw(u.iconName):{},m=fi(u.prefix,u.iconName);h.prefix&&(o=null),u.iconName=h.iconName||m||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!cs.far&&cs.fas&&!H.autoFetchSvg&&(u.prefix="fas")}return u},Fm());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===Ue&&(cs.fass||H.autoFetchSvg)&&(l.prefix="fass",l.iconName=fi(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Br()||"fas"),l}var nC=function(){function t(){pR(this,t),this.definitions={}}return mR(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=U(U({},n.definitions[a]||{}),o[a]),Wd(a,o[a]);var l=wa[Ae][a];l&&Wd(l,o[a]),Pw()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[a][f]=u)}),n[a][l]=u}),n}}]),t}(),Qy=[],fs={},ws={},rC=Object.keys(ws);function iC(t,e){var n=e.mixoutsTo;return Qy=t,fs={},Object.keys(ws).forEach(function(r){rC.indexOf(r)===-1&&delete ws[r]}),Qy.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),rc(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){fs[o]||(fs[o]=[]),fs[o].push(s[o])})}r.provides&&r.provides(ws)}),n}function Kd(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=fs[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Ri(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=fs[t]||[];i.forEach(function(s){s.apply(null,n)})}function er(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ws[t]?ws[t].apply(null,e):void 0}function Gd(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Br();if(e)return e=fi(n,e)||e,Ky(Cw.definitions,n,e)||Ky(hn.styles,n,e)}var Cw=new nC,sC=function(){H.autoReplaceSvg=!1,H.observeMutations=!1,Ri("noAuto")},oC={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return lr?(Ri("beforeI2svg",e),er("pseudoElements2svg",e),er("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;H.autoReplaceSvg===!1&&(H.autoReplaceSvg=!0),H.observeMutations=!0,WR(function(){lC({autoReplaceSvgRoot:n}),Ri("watch",e)})}},aC={icon:function(e){if(e===null)return null;if(rc(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:fi(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Yc(e[0]);return{prefix:r,iconName:fi(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(H.cssPrefix,"-"))>-1||e.match(PR))){var i=Xc(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Br(),iconName:fi(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Br();return{prefix:s,iconName:fi(s,e)||e}}}},Qt={noAuto:sC,config:H,dom:oC,parse:aC,library:Cw,findIconDefinition:Gd,toHtml:Xa},lC=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Re:n;(Object.keys(hn.styles).length>0||H.autoFetchSvg)&&lr&&H.autoReplaceSvg&&Qt.dom.i2svg({node:r})};function Jc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Xa(r)})}}),Object.defineProperty(t,"node",{get:function(){if(lr){var r=Re.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function uC(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Mm(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=Qc(U(U({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function cC(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(H.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:U(U({},i),{},{id:o}),children:r}]}]}function jm(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,f=t.extra,h=t.watchable,m=h===void 0?!1:h,y=r.found?r:n,_=y.width,w=y.height,v=i==="fak",p=[H.replacementClass,s?"".concat(H.cssPrefix,"-").concat(s):""].filter(function(R){return f.classes.indexOf(R)===-1}).filter(function(R){return R!==""||!!R}).concat(f.classes).join(" "),g={children:[],attributes:U(U({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:p,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(w)})},d=v&&!~f.classes.indexOf("fa-fw")?{width:"".concat(_/w*16*.0625,"em")}:{};m&&(g.attributes[Pi]=""),l&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(c||Ta())},children:[l]}),delete g.attributes.title);var I=U(U({},g),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:U(U({},d),f.styles)}),k=r.found&&n.found?er("generateAbstractMask",I)||{children:[],attributes:{}}:er("generateAbstractIcon",I)||{children:[],attributes:{}},P=k.children,E=k.attributes;return I.children=P,I.attributes=E,a?cC(I):uC(I)}function Yy(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=U(U(U({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[Pi]="");var c=U({},o.styles);Mm(i)&&(c.transform=$R({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=Qc(c);f.length>0&&(u.style=f);var h=[];return h.push({tag:"span",attributes:u,children:[e]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function fC(t){var e=t.content,n=t.title,r=t.extra,i=U(U(U({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Qc(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Ih=hn.styles;function qd(t){var e=t[0],n=t[1],r=t.slice(4),i=Cm(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(H.cssPrefix,"-").concat(ci.GROUP)},children:[{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(ci.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(ci.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var hC={found:!1,width:512,height:512};function dC(t,e){!mw&&!H.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Qd(t,e){var n=e;return e==="fa"&&H.styleDefault!==null&&(e=Br()),new Promise(function(r,i){if(er("missingIconAbstract"),n==="fa"){var s=Rw(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Ih[e]&&Ih[e][t]){var o=Ih[e][t];return r(qd(o))}dC(t,e),r(U(U({},hC),{},{icon:H.showMissingIcons&&t?er("missingIconAbstract")||{}:{}}))})}var Xy=function(){},Yd=H.measurePerformance&&Bl&&Bl.mark&&Bl.measure?Bl:{mark:Xy,measure:Xy},Co='FA "6.4.2"',pC=function(e){return Yd.mark("".concat(Co," ").concat(e," begins")),function(){return bw(e)}},bw=function(e){Yd.mark("".concat(Co," ").concat(e," ends")),Yd.measure("".concat(Co," ").concat(e),"".concat(Co," ").concat(e," begins"),"".concat(Co," ").concat(e," ends"))},Um={begin:pC,end:bw},Eu=function(){};function Jy(t){var e=t.getAttribute?t.getAttribute(Pi):null;return typeof e=="string"}function mC(t){var e=t.getAttribute?t.getAttribute(xm):null,n=t.getAttribute?t.getAttribute(Dm):null;return e&&n}function gC(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(H.replacementClass)}function vC(){if(H.autoReplaceSvg===!0)return wu.replace;var t=wu[H.autoReplaceSvg];return t||wu.replace}function yC(t){return Re.createElementNS("http://www.w3.org/2000/svg",t)}function _C(t){return Re.createElement(t)}function xw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?yC:_C:n;if(typeof t=="string")return Re.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(xw(o,{ceFn:r}))}),i}function EC(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var wu={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(xw(i),n)}),n.getAttribute(Pi)===null&&H.keepOriginalSource){var r=Re.createComment(EC(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Om(n).indexOf(H.replacementClass))return wu.replace(e);var i=new RegExp("".concat(H.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===H.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Xa(a)}).join(`
`);n.setAttribute(Pi,""),n.innerHTML=o}};function Zy(t){t()}function Dw(t,e){var n=typeof e=="function"?e:Eu;if(t.length===0)n();else{var r=Zy;H.mutateApproach===SR&&(r=zr.requestAnimationFrame||Zy),r(function(){var i=vC(),s=Um.begin("mutate");t.map(i),s(),n()})}}var $m=!1;function Nw(){$m=!0}function Xd(){$m=!1}var sc=null;function e1(t){if(By&&H.observeMutations){var e=t.treeCallback,n=e===void 0?Eu:e,r=t.nodeCallback,i=r===void 0?Eu:r,s=t.pseudoElementsCallback,o=s===void 0?Eu:s,a=t.observeMutationsRoot,l=a===void 0?Re:a;sc=new By(function(u){if(!$m){var c=Br();Xs(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Jy(f.addedNodes[0])&&(H.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&H.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&Jy(f.target)&&~xR.indexOf(f.attributeName))if(f.attributeName==="class"&&mC(f.target)){var h=Xc(Om(f.target)),m=h.prefix,y=h.iconName;f.target.setAttribute(xm,m||c),y&&f.target.setAttribute(Dm,y)}else gC(f.target)&&i(f.target)})}}),lr&&sc.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function wC(){sc&&sc.disconnect()}function IC(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function TC(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Xc(Om(t));return i.prefix||(i.prefix=Br()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=eC(i.prefix,t.innerText)||Lm(i.prefix,Hd(t.innerText))),!i.iconName&&H.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function SC(t){var e=Xs(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return H.autoA11y&&(n?e["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(r||Ta()):(e["aria-hidden"]="true",e.focusable="false")),e}function AC(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Tn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function t1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=TC(t),r=n.iconName,i=n.prefix,s=n.rest,o=SC(t),a=Kd("parseNodeAttributes",{},t),l=e.styleParser?IC(t):[];return U({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Tn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var kC=hn.styles;function Ow(t){var e=H.autoReplaceSvg==="nest"?t1(t,{styleParser:!1}):t1(t);return~e.extra.classes.indexOf(gw)?er("generateLayersText",t,e):er("generateSvgReplacementMutation",t,e)}var Hr=new Set;Nm.map(function(t){Hr.add("fa-".concat(t))});Object.keys(_a[Ae]).map(Hr.add.bind(Hr));Object.keys(_a[Ue]).map(Hr.add.bind(Hr));Hr=Qa(Hr);function n1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!lr)return Promise.resolve();var n=Re.documentElement.classList,r=function(f){return n.add("".concat(Hy,"-").concat(f))},i=function(f){return n.remove("".concat(Hy,"-").concat(f))},s=H.autoFetchSvg?Hr:Nm.map(function(c){return"fa-".concat(c)}).concat(Object.keys(kC));s.includes("fa")||s.push("fa");var o=[".".concat(gw,":not([").concat(Pi,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(Pi,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Xs(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Um.begin("onTree"),u=a.reduce(function(c,f){try{var h=Ow(f);h&&c.push(h)}catch(m){mw||m.name==="MissingIcon"&&console.error(m)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(h){Dw(h,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(h){l(),f(h)})})}function PC(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ow(t).then(function(n){n&&Dw([n],e)})}function RC(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Gd(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Gd(i||{})),t(r,U(U({},n),{},{mask:i}))}}var CC=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Tn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,f=n.title,h=f===void 0?null:f,m=n.titleId,y=m===void 0?null:m,_=n.classes,w=_===void 0?[]:_,v=n.attributes,p=v===void 0?{}:v,g=n.styles,d=g===void 0?{}:g;if(e){var I=e.prefix,k=e.iconName,P=e.icon;return Jc(U({type:"icon"},e),function(){return Ri("beforeDOMElementCreation",{iconDefinition:e,params:n}),H.autoA11y&&(h?p["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(y||Ta()):(p["aria-hidden"]="true",p.focusable="false")),jm({icons:{main:qd(P),mask:l?qd(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:I,iconName:k,transform:U(U({},Tn),i),symbol:o,title:h,maskId:c,titleId:y,extra:{attributes:p,styles:d,classes:w}})})}},bC={mixout:function(){return{icon:RC(CC)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=n1,n.nodeCallback=PC,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?Re:r,s=n.callback,o=s===void 0?function(){}:s;return n1(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,h=r.extra;return new Promise(function(m,y){Promise.all([Qd(i,a),c.iconName?Qd(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var w=Cm(_,2),v=w[0],p=w[1];m([n,jm({icons:{main:v,mask:p},prefix:a,iconName:i,transform:l,symbol:u,maskId:f,title:s,titleId:o,extra:h,watchable:!0})])}).catch(y)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Qc(a);l.length>0&&(i.style=l);var u;return Mm(o)&&(u=er("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},xC={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Jc({type:"layer"},function(){Ri("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(H.cssPrefix,"-layers")].concat(Qa(s)).join(" ")},children:o}]})}}}},DC={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return Jc({type:"counter",content:n},function(){return Ri("beforeDOMElementCreation",{content:n,params:r}),fC({content:n.toString(),title:s,extra:{attributes:u,styles:f,classes:["".concat(H.cssPrefix,"-layers-counter")].concat(Qa(a))}})})}}}},NC={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?Tn:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,h=r.styles,m=h===void 0?{}:h;return Jc({type:"text",content:n},function(){return Ri("beforeDOMElementCreation",{content:n,params:r}),Yy({content:n,transform:U(U({},Tn),s),title:a,extra:{attributes:f,styles:m,classes:["".concat(H.cssPrefix,"-layers-text")].concat(Qa(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(hw){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return H.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Yy({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},OC=new RegExp('"',"ug"),r1=[1105920,1112319];function MC(t){var e=t.replace(OC,""),n=qR(e,0),r=n>=r1[0]&&n<=r1[1],i=e.length===2?e[0]===e[1]:!1;return{value:Hd(i?e[0]:e),isSecondary:r||i}}function i1(t,e){var n="".concat(TR).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Xs(t.children),o=s.filter(function(P){return P.getAttribute(Bd)===e})[0],a=zr.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(RR),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var f=a.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?Ue:Ae,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Ea[h][l[2].toLowerCase()]:CR[h][u],y=MC(f),_=y.value,w=y.isSecondary,v=l[0].startsWith("FontAwesome"),p=Lm(m,_),g=p;if(v){var d=tC(_);d.iconName&&d.prefix&&(p=d.iconName,m=d.prefix)}if(p&&!w&&(!o||o.getAttribute(xm)!==m||o.getAttribute(Dm)!==g)){t.setAttribute(n,g),o&&t.removeChild(o);var I=AC(),k=I.extra;k.attributes[Bd]=e,Qd(p,m).then(function(P){var E=jm(U(U({},I),{},{icons:{main:P,mask:Fm()},prefix:m,iconName:g,extra:k,watchable:!0})),R=Re.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(R,t.firstChild):t.appendChild(R),R.outerHTML=E.map(function(C){return Xa(C)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function VC(t){return Promise.all([i1(t,"::before"),i1(t,"::after")])}function LC(t){return t.parentNode!==document.head&&!~AR.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Bd)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function s1(t){if(lr)return new Promise(function(e,n){var r=Xs(t.querySelectorAll("*")).filter(LC).map(VC),i=Um.begin("searchPseudoElements");Nw(),Promise.all(r).then(function(){i(),Xd(),e()}).catch(function(){i(),Xd(),n()})})}var FC={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=s1,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Re:r;H.searchPseudoElements&&s1(i)}}},o1=!1,jC={mixout:function(){return{dom:{unwatch:function(){Nw(),o1=!0}}}},hooks:function(){return{bootstrap:function(){e1(Kd("mutationObserverCallbacks",{}))},noAuto:function(){wC()},watch:function(n){var r=n.observeMutationsRoot;o1?Xd():e1(Kd("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},a1=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},UC={mixout:function(){return{parse:{transform:function(n){return a1(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=a1(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},m={outer:a,inner:f,path:h};return{tag:"g",attributes:U({},m.outer),children:[{tag:"g",attributes:U({},m.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:U(U({},r.icon.attributes),m.path)}]}]}}}},Th={x:0,y:0,width:"100%",height:"100%"};function l1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function $C(t){return t.tag==="g"?t.children:[t]}var zC={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Xc(i.split(" ").map(function(o){return o.trim()})):Fm();return s.prefix||(s.prefix=Br()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,f=o.width,h=o.icon,m=UR({transform:l,containerWidth:f,iconWidth:u}),y={tag:"rect",attributes:U(U({},Th),{},{fill:"white"})},_=c.children?{children:c.children.map(l1)}:{},w={tag:"g",attributes:U({},m.inner),children:[l1(U({tag:c.tag,attributes:U(U({},c.attributes),m.path)},_))]},v={tag:"g",attributes:U({},m.outer),children:[w]},p="mask-".concat(a||Ta()),g="clip-".concat(a||Ta()),d={tag:"mask",attributes:U(U({},Th),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,v]},I={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:$C(h)},d]};return r.push(I,{tag:"rect",attributes:U({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(p,")")},Th)}),{children:r,attributes:i}}}},BC={provides:function(e){var n=!1;zr.matchMedia&&(n=zr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:U(U({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=U(U({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:U(U({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:U(U({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:U(U({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:U(U({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:U(U({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:U(U({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:U(U({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},HC={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},WC=[BR,bC,xC,DC,NC,FC,jC,UC,zC,BC,HC];iC(WC,{mixoutsTo:Qt});Qt.noAuto;Qt.config;Qt.library;Qt.dom;var Jd=Qt.parse;Qt.findIconDefinition;Qt.toHtml;var KC=Qt.icon;Qt.layer;Qt.text;Qt.counter;var Mw={exports:{}},GC="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",qC=GC,QC=qC;function Vw(){}function Lw(){}Lw.resetWarningCache=Vw;var YC=function(){function t(r,i,s,o,a,l){if(l!==QC){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Lw,resetWarningCache:Vw};return n.PropTypes=n,n};Mw.exports=YC();var XC=Mw.exports;const le=x0(XC);function u1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Ar(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?u1(Object(n),!0).forEach(function(r){hs(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u1(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function oc(t){"@babel/helpers - typeof";return oc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},oc(t)}function hs(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function JC(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function ZC(t,e){if(t==null)return{};var n=JC(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Zd(t){return e4(t)||t4(t)||n4(t)||r4()}function e4(t){if(Array.isArray(t))return ep(t)}function t4(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function n4(t,e){if(t){if(typeof t=="string")return ep(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ep(t,e)}}function ep(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function r4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i4(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,f=t.pulse,h=t.fixedWidth,m=t.inverse,y=t.border,_=t.listItem,w=t.flip,v=t.size,p=t.rotation,g=t.pull,d=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":h,"fa-inverse":m,"fa-border":y,"fa-li":_,"fa-flip":w===!0,"fa-flip-horizontal":w==="horizontal"||w==="both","fa-flip-vertical":w==="vertical"||w==="both"},hs(e,"fa-".concat(v),typeof v<"u"&&v!==null),hs(e,"fa-rotate-".concat(p),typeof p<"u"&&p!==null&&p!==0),hs(e,"fa-pull-".concat(g),typeof g<"u"&&g!==null),hs(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(d).map(function(I){return d[I]?I:null}).filter(function(I){return I})}function s4(t){return t=t-0,t===t}function Fw(t){return s4(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var o4=["style"];function a4(t){return t.charAt(0).toUpperCase()+t.slice(1)}function l4(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=Fw(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[a4(i)]=s:e[i]=s,e},{})}function jw(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return jw(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=l4(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[Fw(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=ZC(n,o4);return i.attrs.style=Ar(Ar({},i.attrs.style),o),t.apply(void 0,[e.tag,Ar(Ar({},i.attrs),a)].concat(Zd(r)))}var Uw=!1;try{Uw=!0}catch{}function u4(){if(!Uw&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function c1(t){if(t&&oc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Jd.icon)return Jd.icon(t);if(t===null)return null;if(t&&oc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Sh(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?hs({},t,e):{}}var Nt=Ba.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=c1(n),c=Sh("classes",[].concat(Zd(i4(t)),Zd(s.split(" ")))),f=Sh("transform",typeof t.transform=="string"?Jd.transform(t.transform):t.transform),h=Sh("mask",c1(r)),m=KC(u,Ar(Ar(Ar(Ar({},c),f),h),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!m)return u4("Could not find icon",u),null;var y=m.abstract,_={ref:e};return Object.keys(t).forEach(function(w){Nt.defaultProps.hasOwnProperty(w)||(_[w]=t[w])}),c4(y[0],_)});Nt.displayName="FontAwesomeIcon";Nt.propTypes={beat:le.bool,border:le.bool,beatFade:le.bool,bounce:le.bool,className:le.string,fade:le.bool,flash:le.bool,mask:le.oneOfType([le.object,le.array,le.string]),maskId:le.string,fixedWidth:le.bool,inverse:le.bool,flip:le.oneOf([!0,!1,"horizontal","vertical","both"]),icon:le.oneOfType([le.object,le.array,le.string]),listItem:le.bool,pull:le.oneOf(["right","left"]),pulse:le.bool,rotation:le.oneOf([0,90,180,270]),shake:le.bool,size:le.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:le.bool,spinPulse:le.bool,spinReverse:le.bool,symbol:le.oneOfType([le.bool,le.string]),title:le.string,titleId:le.string,transform:le.oneOfType([le.string,le.object]),swapOpacity:le.bool};Nt.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var c4=jw.bind(null,Ba.createElement),f4={prefix:"fab",iconName:"node",icon:[640,512,[],"f419","M316.3 452c-2.1 0-4.2-.6-6.1-1.6L291 439c-2.9-1.6-1.5-2.2-.5-2.5 3.8-1.3 4.6-1.6 8.7-4 .4-.2 1-.1 1.4.1l14.8 8.8c.5.3 1.3.3 1.8 0L375 408c.5-.3.9-.9.9-1.6v-66.7c0-.7-.3-1.3-.9-1.6l-57.8-33.3c-.5-.3-1.2-.3-1.8 0l-57.8 33.3c-.6.3-.9 1-.9 1.6v66.7c0 .6.4 1.2.9 1.5l15.8 9.1c8.6 4.3 13.9-.8 13.9-5.8v-65.9c0-.9.7-1.7 1.7-1.7h7.3c.9 0 1.7.7 1.7 1.7v65.9c0 11.5-6.2 18-17.1 18-3.3 0-6 0-13.3-3.6l-15.2-8.7c-3.7-2.2-6.1-6.2-6.1-10.5v-66.7c0-4.3 2.3-8.4 6.1-10.5l57.8-33.4c3.7-2.1 8.5-2.1 12.1 0l57.8 33.4c3.7 2.2 6.1 6.2 6.1 10.5v66.7c0 4.3-2.3 8.4-6.1 10.5l-57.8 33.4c-1.7 1.1-3.8 1.7-6 1.7zm46.7-65.8c0-12.5-8.4-15.8-26.2-18.2-18-2.4-19.8-3.6-19.8-7.8 0-3.5 1.5-8.1 14.8-8.1 11.9 0 16.3 2.6 18.1 10.6.2.8.8 1.3 1.6 1.3h7.5c.5 0 .9-.2 1.2-.5.3-.4.5-.8.4-1.3-1.2-13.8-10.3-20.2-28.8-20.2-16.5 0-26.3 7-26.3 18.6 0 12.7 9.8 16.1 25.6 17.7 18.9 1.9 20.4 4.6 20.4 8.3 0 6.5-5.2 9.2-17.4 9.2-15.3 0-18.7-3.8-19.8-11.4-.1-.8-.8-1.4-1.7-1.4h-7.5c-.9 0-1.7.7-1.7 1.7 0 9.7 5.3 21.3 30.6 21.3 18.5 0 29-7.2 29-19.8zm54.5-50.1c0 6.1-5 11.1-11.1 11.1s-11.1-5-11.1-11.1c0-6.3 5.2-11.1 11.1-11.1 6-.1 11.1 4.8 11.1 11.1zm-1.8 0c0-5.2-4.2-9.3-9.4-9.3-5.1 0-9.3 4.1-9.3 9.3 0 5.2 4.2 9.4 9.3 9.4 5.2-.1 9.4-4.3 9.4-9.4zm-4.5 6.2h-2.6c-.1-.6-.5-3.8-.5-3.9-.2-.7-.4-1.1-1.3-1.1h-2.2v5h-2.4v-12.5h4.3c1.5 0 4.4 0 4.4 3.3 0 2.3-1.5 2.8-2.4 3.1 1.7.1 1.8 1.2 2.1 2.8.1 1 .3 2.7.6 3.3zm-2.8-8.8c0-1.7-1.2-1.7-1.8-1.7h-2v3.5h1.9c1.6 0 1.9-1.1 1.9-1.8zM137.3 191c0-2.7-1.4-5.1-3.7-6.4l-61.3-35.3c-1-.6-2.2-.9-3.4-1h-.6c-1.2 0-2.3.4-3.4 1L3.7 184.6C1.4 185.9 0 188.4 0 191l.1 95c0 1.3.7 2.5 1.8 3.2 1.1.7 2.5.7 3.7 0L42 268.3c2.3-1.4 3.7-3.8 3.7-6.4v-44.4c0-2.6 1.4-5.1 3.7-6.4l15.5-8.9c1.2-.7 2.4-1 3.7-1 1.3 0 2.6.3 3.7 1l15.5 8.9c2.3 1.3 3.7 3.8 3.7 6.4v44.4c0 2.6 1.4 5.1 3.7 6.4l36.4 20.9c1.1.7 2.6.7 3.7 0 1.1-.6 1.8-1.9 1.8-3.2l.2-95zM472.5 87.3v176.4c0 2.6-1.4 5.1-3.7 6.4l-61.3 35.4c-2.3 1.3-5.1 1.3-7.4 0l-61.3-35.4c-2.3-1.3-3.7-3.8-3.7-6.4v-70.8c0-2.6 1.4-5.1 3.7-6.4l61.3-35.4c2.3-1.3 5.1-1.3 7.4 0l15.3 8.8c1.7 1 3.9-.3 3.9-2.2v-94c0-2.8 3-4.6 5.5-3.2l36.5 20.4c2.3 1.2 3.8 3.7 3.8 6.4zm-46 128.9c0-.7-.4-1.3-.9-1.6l-21-12.2c-.6-.3-1.3-.3-1.9 0l-21 12.2c-.6.3-.9.9-.9 1.6v24.3c0 .7.4 1.3.9 1.6l21 12.1c.6.3 1.3.3 1.8 0l21-12.1c.6-.3.9-.9.9-1.6v-24.3zm209.8-.7c2.3-1.3 3.7-3.8 3.7-6.4V192c0-2.6-1.4-5.1-3.7-6.4l-60.9-35.4c-2.3-1.3-5.1-1.3-7.4 0l-61.3 35.4c-2.3 1.3-3.7 3.8-3.7 6.4v70.8c0 2.7 1.4 5.1 3.7 6.4l60.9 34.7c2.2 1.3 5 1.3 7.3 0l36.8-20.5c2.5-1.4 2.5-5 0-6.4L550 241.6c-1.2-.7-1.9-1.9-1.9-3.2v-22.2c0-1.3.7-2.5 1.9-3.2l19.2-11.1c1.1-.7 2.6-.7 3.7 0l19.2 11.1c1.1.7 1.9 1.9 1.9 3.2v17.4c0 2.8 3.1 4.6 5.6 3.2l36.7-21.3zM559 219c-.4.3-.7.7-.7 1.2v13.6c0 .5.3 1 .7 1.2l11.8 6.8c.4.3 1 .3 1.4 0L584 235c.4-.3.7-.7.7-1.2v-13.6c0-.5-.3-1-.7-1.2l-11.8-6.8c-.4-.3-1-.3-1.4 0L559 219zm-254.2 43.5v-70.4c0-2.6-1.6-5.1-3.9-6.4l-61.1-35.2c-2.1-1.2-5-1.4-7.4 0l-61.1 35.2c-2.3 1.3-3.9 3.7-3.9 6.4v70.4c0 2.8 1.9 5.2 4 6.4l61.2 35.2c2.4 1.4 5.2 1.3 7.4 0l61-35.2c1.8-1 3.1-2.7 3.6-4.7.1-.5.2-1.1.2-1.7zm-74.3-124.9l-.8.5h1.1l-.3-.5zm76.2 130.2l-.4-.7v.9l.4-.2z"]},h4={prefix:"fab",iconName:"react",icon:[512,512,[],"f41b","M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"]},d4={prefix:"fab",iconName:"figma",icon:[384,512,[],"f799","M14 95.7924C14 42.8877 56.8878 0 109.793 0H274.161C327.066 0 369.954 42.8877 369.954 95.7924C369.954 129.292 352.758 158.776 326.711 175.897C352.758 193.019 369.954 222.502 369.954 256.002C369.954 308.907 327.066 351.795 274.161 351.795H272.081C247.279 351.795 224.678 342.369 207.666 326.904V415.167C207.666 468.777 163.657 512 110.309 512C57.5361 512 14 469.243 14 416.207C14 382.709 31.1945 353.227 57.2392 336.105C31.1945 318.983 14 289.5 14 256.002C14 222.502 31.196 193.019 57.2425 175.897C31.196 158.776 14 129.292 14 95.7924ZM176.288 191.587H109.793C74.2172 191.587 45.3778 220.427 45.3778 256.002C45.3778 291.44 73.9948 320.194 109.381 320.416C109.518 320.415 109.655 320.415 109.793 320.415H176.288V191.587ZM207.666 256.002C207.666 291.577 236.505 320.417 272.081 320.417H274.161C309.737 320.417 338.576 291.577 338.576 256.002C338.576 220.427 309.737 191.587 274.161 191.587H272.081C236.505 191.587 207.666 220.427 207.666 256.002ZM109.793 351.795C109.655 351.795 109.518 351.794 109.381 351.794C73.9948 352.015 45.3778 380.769 45.3778 416.207C45.3778 451.652 74.6025 480.622 110.309 480.622C146.591 480.622 176.288 451.186 176.288 415.167V351.795H109.793ZM109.793 31.3778C74.2172 31.3778 45.3778 60.2173 45.3778 95.7924C45.3778 131.368 74.2172 160.207 109.793 160.207H176.288V31.3778H109.793ZM207.666 160.207H274.161C309.737 160.207 338.576 131.368 338.576 95.7924C338.576 60.2173 309.737 31.3778 274.161 31.3778H207.666V160.207Z"]},p4={prefix:"fab",iconName:"html5",icon:[384,512,[],"f13b","M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"]},m4={prefix:"fab",iconName:"sass",icon:[640,512,[],"f41e","M301.84 378.92c-.3.6-.6 1.08 0 0zm249.13-87a131.16 131.16 0 0 0-58 13.5c-5.9-11.9-12-22.3-13-30.1-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.3-6.7-24 2.5-25.29 5.9a122.83 122.83 0 0 0-5.3 19.1c-2.3 11.7-25.79 53.5-39.09 75.3-4.4-8.5-8.1-16-8.9-22-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.29-6.7-24 2.5-25.3 5.9-2.7 11.4-5.3 19.1-33.89 77.3-42.08 95.4c-4.2 9.2-7.8 16.6-10.4 21.6-.4.8-.7 1.3-.9 1.7.3-.5.5-1 .5-.8-2.2 4.3-3.5 6.7-3.5 6.7v.1c-1.7 3.2-3.6 6.1-4.5 6.1-.6 0-1.9-8.4.3-19.9 4.7-24.2 15.8-61.8 15.7-63.1-.1-.7 2.1-7.2-7.3-10.7-9.1-3.3-12.4 2.2-13.2 2.2s-1.4 2-1.4 2 10.1-42.4-19.39-42.4c-18.4 0-44 20.2-56.58 38.5-7.9 4.3-25 13.6-43 23.5-6.9 3.8-14 7.7-20.7 11.4-.5-.5-.9-1-1.4-1.5-35.79-38.2-101.87-65.2-99.07-116.5 1-18.7 7.5-67.8 127.07-127.4 98-48.8 176.35-35.4 189.84-5.6 19.4 42.5-41.89 121.6-143.66 133-38.79 4.3-59.18-10.7-64.28-16.3-5.3-5.9-6.1-6.2-8.1-5.1-3.3 1.8-1.2 7 0 10.1 3 7.9 15.5 21.9 36.79 28.9 18.7 6.1 64.18 9.5 119.17-11.8 61.78-23.8 109.87-90.1 95.77-145.6C386.52 18.32 293-.18 204.57 31.22c-52.69 18.7-109.67 48.1-150.66 86.4-48.69 45.6-56.48 85.3-53.28 101.9 11.39 58.9 92.57 97.3 125.06 125.7-1.6.9-3.1 1.7-4.5 2.5-16.29 8.1-78.18 40.5-93.67 74.7-17.5 38.8 2.9 66.6 16.29 70.4 41.79 11.6 84.58-9.3 107.57-43.6s20.2-79.1 9.6-99.5c-.1-.3-.3-.5-.4-.8 4.2-2.5 8.5-5 12.8-7.5 8.29-4.9 16.39-9.4 23.49-13.3-4 10.8-6.9 23.8-8.4 42.6-1.8 22 7.3 50.5 19.1 61.7 5.2 4.9 11.49 5 15.39 5 13.8 0 20-11.4 26.89-25 8.5-16.6 16-35.9 16-35.9s-9.4 52.2 16.3 52.2c9.39 0 18.79-12.1 23-18.3v.1s.2-.4.7-1.2c1-1.5 1.5-2.4 1.5-2.4v-.3c3.8-6.5 12.1-21.4 24.59-46 16.2-31.8 31.69-71.5 31.69-71.5a201.24 201.24 0 0 0 6.2 25.8c2.8 9.5 8.7 19.9 13.4 30-3.8 5.2-6.1 8.2-6.1 8.2a.31.31 0 0 0 .1.2c-3 4-6.4 8.3-9.9 12.5-12.79 15.2-28 32.6-30 37.6-2.4 5.9-1.8 10.3 2.8 13.7 3.4 2.6 9.4 3 15.69 2.5 11.5-.8 19.6-3.6 23.5-5.4a82.2 82.2 0 0 0 20.19-10.6c12.5-9.2 20.1-22.4 19.4-39.8-.4-9.6-3.5-19.2-7.3-28.2 1.1-1.6 2.3-3.3 3.4-5C434.8 301.72 450.1 270 450.1 270a201.24 201.24 0 0 0 6.2 25.8c2.4 8.1 7.09 17 11.39 25.7-18.59 15.1-30.09 32.6-34.09 44.1-7.4 21.3-1.6 30.9 9.3 33.1 4.9 1 11.9-1.3 17.1-3.5a79.46 79.46 0 0 0 21.59-11.1c12.5-9.2 24.59-22.1 23.79-39.6-.3-7.9-2.5-15.8-5.4-23.4 15.7-6.6 36.09-10.2 62.09-7.2 55.68 6.5 66.58 41.3 64.48 55.8s-13.8 22.6-17.7 25-5.1 3.3-4.8 5.1c.5 2.6 2.3 2.5 5.6 1.9 4.6-.8 29.19-11.8 30.29-38.7 1.6-34-31.09-71.4-89-71.1zm-429.18 144.7c-18.39 20.1-44.19 27.7-55.28 21.3C54.61 451 59.31 421.42 82 400c13.8-13 31.59-25 43.39-32.4 2.7-1.6 6.6-4 11.4-6.9.8-.5 1.2-.7 1.2-.7.9-.6 1.9-1.1 2.9-1.7 8.29 30.4.3 57.2-19.1 78.3zm134.36-91.4c-6.4 15.7-19.89 55.7-28.09 53.6-7-1.8-11.3-32.3-1.4-62.3 5-15.1 15.6-33.1 21.9-40.1 10.09-11.3 21.19-14.9 23.79-10.4 3.5 5.9-12.2 49.4-16.2 59.2zm111 53c-2.7 1.4-5.2 2.3-6.4 1.6-.9-.5 1.1-2.4 1.1-2.4s13.9-14.9 19.4-21.7c3.2-4 6.9-8.7 10.89-13.9 0 .5.1 1 .1 1.6-.13 17.9-17.32 30-25.12 34.8zm85.58-19.5c-2-1.4-1.7-6.1 5-20.7 2.6-5.7 8.59-15.3 19-24.5a36.18 36.18 0 0 1 1.9 10.8c-.1 22.5-16.2 30.9-25.89 34.4z"]},g4={prefix:"fab",iconName:"css3",icon:[512,512,[],"f13c","M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z"]},f1={prefix:"fab",iconName:"js",icon:[448,512,[],"f3b8","M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"]},v4={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},$w={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fas",n="link",r=640,i=512,s=[128279,"chain"],o="f0c1",a="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z";t.definition={prefix:e,iconName:n,icon:[r,i,s,o,a]},t.faLink=t.definition,t.prefix=e,t.iconName=n,t.width=r,t.height=i,t.ligatures=s,t.unicode=o,t.svgPathData=a,t.aliases=s})($w);const y4=({project:t})=>{const{id:e,name:n,illustration:r,techno:i,link:s,repo:o}=t,a=l=>{switch(l){case"html":return A.jsx(Nt,{icon:p4});case"css":return A.jsx(Nt,{icon:g4});case"scss":return A.jsx(Nt,{icon:m4});case"js":return A.jsx(Nt,{icon:f1});case"ts":return A.jsx(Nt,{icon:f1});case"react":return A.jsx(Nt,{icon:h4});case"figma":return A.jsx(Nt,{icon:d4});case"MERN":return A.jsx(Nt,{icon:f4})}};return A.jsxs("article",{className:zl.article,children:[A.jsx(ya,{to:`project/${e}`,className:zl.closeup}),A.jsxs("header",{children:[A.jsx(ya,{to:`project/${e}`,className:zl.headerLink,children:A.jsx("h3",{children:n})}),A.jsxs("span",{className:"links",children:[s&&A.jsx("a",{href:s,children:A.jsx(Nt,{icon:$w.faLink})}),o&&A.jsx("a",{href:o,children:A.jsx(Nt,{icon:v4})})]})]}),A.jsx("img",{src:r,alt:n,className:zl.image}),A.jsx("footer",{children:i==null?void 0:i.map((l,u)=>A.jsxs("span",{children:[a(l)," ",l]},`tech${u}`))})]})},_4="_projectsWrapper_164cg_2",E4="_filters_164cg_7",w4="_filtersWrapper_164cg_39",I4="_unchecked_164cg_47",T4="_projects_164cg_2",Hi={projectsWrapper:_4,filters:E4,filtersWrapper:w4,unchecked:I4,projects:T4},S4=()=>{const[t]=Ai(_l),[e,n]=O.useState([]),[r,i]=O.useState({}),[s,o]=O.useState(!0),[a,l]=O.useState([]);O.useEffect(()=>{t.forEach(f=>{f.techno.forEach(h=>{l(m=>m.includes(h)?m:[...m,h])})}),a.forEach(f=>{i(h=>({...h,[f]:!0}))}),n(a)},[a,t]);const u=f=>{i(h=>({...h,[f.target.id]:!h[f.target.id]}))},c=()=>{s||(o(!s),i(f=>{const h={...f};for(const m in h)h[m]=!0;return h}))};return O.useEffect(()=>{const f=[];let h=!0;for(const m in r)r[m]===!0?f.push(m):h=!1;o(h),n(f)},[r]),A.jsxs("main",{className:Hi.projectsWrapper,children:[A.jsxs("section",{className:Hi.filters,children:["Filtres",A.jsxs("span",{className:Hi.filtersWrapper,children:[A.jsxs("span",{children:[A.jsx("input",{type:"checkbox",name:"all",id:"all",onChange:c}),A.jsx("label",{htmlFor:"all",className:s?"":Hi.unchecked,children:"Tous"})]}),a.map((f,h)=>f&&A.jsxs("span",{children:[A.jsx("input",{type:"checkbox",name:f,id:f,onChange:u}),A.jsx("label",{htmlFor:f,className:r[f]?"":Hi.unchecked,children:f})]},`tech${h}`))]})]}),A.jsx("section",{className:Hi.projects,children:t.map((f,h)=>e.some(m=>f.techno.includes(m))&&A.jsx(y4,{project:f},"project"+h))})]})},A4="_modale_xlns4_2",k4="_form_xlns4_17",P4="_formField_xlns4_35",R4="_buttonContainer_xlns4_41",wo={modale:A4,form:k4,formField:P4,buttonContainer:R4};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},C4=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Bw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,f=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(h=64)),r.push(n[c],n[f],n[h],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(zw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):C4(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw new b4;const h=s<<2|a>>4;if(r.push(h),u!==64){const m=a<<4&240|u>>2;if(r.push(m),f!==64){const y=u<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class b4 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const x4=function(t){const e=zw(t);return Bw.encodeByteArray(e,!0)},ac=function(t){return x4(t).replace(/\./g,"")},Hw=function(t){try{return Bw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D4(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N4=()=>D4().__FIREBASE_DEFAULTS__,O4=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},M4=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Hw(t[1]);return e&&JSON.parse(e)},zm=()=>{try{return N4()||O4()||M4()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ww=t=>{var e,n;return(n=(e=zm())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},V4=t=>{const e=Ww(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Kw=()=>{var t;return(t=zm())===null||t===void 0?void 0:t.config},Gw=t=>{var e;return(e=zm())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L4{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F4(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ac(JSON.stringify(n)),ac(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function j4(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(At())}function U4(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $4(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function z4(){const t=At();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function B4(){try{return typeof indexedDB=="object"}catch{return!1}}function H4(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W4="FirebaseError";class ur extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=W4,Object.setPrototypeOf(this,ur.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ja.prototype.create)}}class Ja{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?K4(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ur(i,a,r)}}function K4(t,e){return t.replace(G4,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const G4=/\{\$([^}]+)}/g;function q4(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function lc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(h1(s)&&h1(o)){if(!lc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function h1(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Q4(t,e){const n=new Y4(t,e);return n.subscribe.bind(n)}class Y4{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");X4(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ah),i.error===void 0&&(i.error=Ah),i.complete===void 0&&(i.complete=Ah);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function X4(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ah(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t){return t&&t._delegate?t._delegate:t}class Ci{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J4{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new L4;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(e3(e))try{this.getOrInitializeService({instanceIdentifier:si})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=si){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=si){return this.instances.has(e)}getOptions(e=si){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Z4(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=si){return this.component?this.component.multipleInstances?e:si:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Z4(t){return t===si?void 0:t}function e3(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t3{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new J4(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const n3={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},r3=de.INFO,i3={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},s3=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=i3[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bm{constructor(e){this.name=e,this._logLevel=r3,this._logHandler=s3,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?n3[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const o3=(t,e)=>e.some(n=>t instanceof n);let d1,p1;function a3(){return d1||(d1=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l3(){return p1||(p1=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qw=new WeakMap,tp=new WeakMap,Qw=new WeakMap,kh=new WeakMap,Hm=new WeakMap;function u3(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Mr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&qw.set(n,t)}).catch(()=>{}),Hm.set(e,t),e}function c3(t){if(tp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});tp.set(t,e)}let np={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return tp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Qw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function f3(t){np=t(np)}function h3(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ph(this),e,...n);return Qw.set(r,e.sort?e.sort():[e]),Mr(r)}:l3().includes(t)?function(...e){return t.apply(Ph(this),e),Mr(qw.get(this))}:function(...e){return Mr(t.apply(Ph(this),e))}}function d3(t){return typeof t=="function"?h3(t):(t instanceof IDBTransaction&&c3(t),o3(t,a3())?new Proxy(t,np):t)}function Mr(t){if(t instanceof IDBRequest)return u3(t);if(kh.has(t))return kh.get(t);const e=d3(t);return e!==t&&(kh.set(t,e),Hm.set(e,t)),e}const Ph=t=>Hm.get(t);function p3(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Mr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Mr(o.result),l.oldVersion,l.newVersion,Mr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const m3=["get","getKey","getAll","getAllKeys","count"],g3=["put","add","delete","clear"],Rh=new Map;function m1(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Rh.get(e))return Rh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=g3.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||m3.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Rh.set(e,s),s}f3(t=>({...t,get:(e,n,r)=>m1(e,n)||t.get(e,n,r),has:(e,n)=>!!m1(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v3{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(y3(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function y3(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const rp="@firebase/app",g1="0.9.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi=new Bm("@firebase/app"),_3="@firebase/app-compat",E3="@firebase/analytics-compat",w3="@firebase/analytics",I3="@firebase/app-check-compat",T3="@firebase/app-check",S3="@firebase/auth",A3="@firebase/auth-compat",k3="@firebase/database",P3="@firebase/database-compat",R3="@firebase/functions",C3="@firebase/functions-compat",b3="@firebase/installations",x3="@firebase/installations-compat",D3="@firebase/messaging",N3="@firebase/messaging-compat",O3="@firebase/performance",M3="@firebase/performance-compat",V3="@firebase/remote-config",L3="@firebase/remote-config-compat",F3="@firebase/storage",j3="@firebase/storage-compat",U3="@firebase/firestore",$3="@firebase/firestore-compat",z3="firebase",B3="10.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip="[DEFAULT]",H3={[rp]:"fire-core",[_3]:"fire-core-compat",[w3]:"fire-analytics",[E3]:"fire-analytics-compat",[T3]:"fire-app-check",[I3]:"fire-app-check-compat",[S3]:"fire-auth",[A3]:"fire-auth-compat",[k3]:"fire-rtdb",[P3]:"fire-rtdb-compat",[R3]:"fire-fn",[C3]:"fire-fn-compat",[b3]:"fire-iid",[x3]:"fire-iid-compat",[D3]:"fire-fcm",[N3]:"fire-fcm-compat",[O3]:"fire-perf",[M3]:"fire-perf-compat",[V3]:"fire-rc",[L3]:"fire-rc-compat",[F3]:"fire-gcs",[j3]:"fire-gcs-compat",[U3]:"fire-fst",[$3]:"fire-fst-compat","fire-js":"fire-js",[z3]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc=new Map,sp=new Map;function W3(t,e){try{t.container.addComponent(e)}catch(n){bi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Vs(t){const e=t.name;if(sp.has(e))return bi.debug(`There were multiple attempts to register component ${e}.`),!1;sp.set(e,t);for(const n of uc.values())W3(n,t);return!0}function Wm(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K3={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Vr=new Ja("app","Firebase",K3);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G3{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ci("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js=B3;function Yw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ip,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Vr.create("bad-app-name",{appName:String(i)});if(n||(n=Kw()),!n)throw Vr.create("no-options");const s=uc.get(i);if(s){if(lc(n,s.options)&&lc(r,s.config))return s;throw Vr.create("duplicate-app",{appName:i})}const o=new t3(i);for(const l of sp.values())o.addComponent(l);const a=new G3(n,r,o);return uc.set(i,a),a}function Xw(t=ip){const e=uc.get(t);if(!e&&t===ip&&Kw())return Yw();if(!e)throw Vr.create("no-app",{appName:t});return e}function Lr(t,e,n){var r;let i=(r=H3[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bi.warn(a.join(" "));return}Vs(new Ci(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q3="firebase-heartbeat-database",Q3=1,Sa="firebase-heartbeat-store";let Ch=null;function Jw(){return Ch||(Ch=p3(q3,Q3,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Sa)}}}).catch(t=>{throw Vr.create("idb-open",{originalErrorMessage:t.message})})),Ch}async function Y3(t){try{return await(await Jw()).transaction(Sa).objectStore(Sa).get(Zw(t))}catch(e){if(e instanceof ur)bi.warn(e.message);else{const n=Vr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});bi.warn(n.message)}}}async function v1(t,e){try{const r=(await Jw()).transaction(Sa,"readwrite");await r.objectStore(Sa).put(e,Zw(t)),await r.done}catch(n){if(n instanceof ur)bi.warn(n.message);else{const r=Vr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});bi.warn(r.message)}}}function Zw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X3=1024,J3=30*24*60*60*1e3;class Z3{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new t5(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=y1();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=J3}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=y1(),{heartbeatsToSend:n,unsentEntries:r}=e5(this._heartbeatsCache.heartbeats),i=ac(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function y1(){return new Date().toISOString().substring(0,10)}function e5(t,e=X3){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),_1(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),_1(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class t5{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return B4()?H4().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Y3(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return v1(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return v1(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function _1(t){return ac(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n5(t){Vs(new Ci("platform-logger",e=>new v3(e),"PRIVATE")),Vs(new Ci("heartbeat",e=>new Z3(e),"PRIVATE")),Lr(rp,g1,t),Lr(rp,g1,"esm2017"),Lr("fire-js","")}n5("");var r5="firebase",i5="10.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lr(r5,i5,"app");var s5=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F,Km=Km||{},ee=s5||self;function Zc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function el(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function o5(t){return Object.prototype.hasOwnProperty.call(t,bh)&&t[bh]||(t[bh]=++a5)}var bh="closure_uid_"+(1e9*Math.random()>>>0),a5=0;function l5(t,e,n){return t.call.apply(t.bind,arguments)}function u5(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function wt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?wt=l5:wt=u5,wt.apply(null,arguments)}function Jl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ot(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Xr(){this.s=this.s,this.o=this.o}var c5=0;Xr.prototype.s=!1;Xr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),c5!=0)&&o5(this)};Xr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const e2=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Gm(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function E1(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Zc(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function It(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}It.prototype.h=function(){this.defaultPrevented=!0};var f5=function(){if(!ee.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ee.addEventListener("test",()=>{},e),ee.removeEventListener("test",()=>{},e)}catch{}return t}();function Aa(t){return/^[\s\xa0]*$/.test(t)}function ef(){var t=ee.navigator;return t&&(t=t.userAgent)?t:""}function In(t){return ef().indexOf(t)!=-1}function qm(t){return qm[" "](t),t}qm[" "]=function(){};function h5(t,e){var n=ib;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var d5=In("Opera"),Ls=In("Trident")||In("MSIE"),t2=In("Edge"),op=t2||Ls,n2=In("Gecko")&&!(ef().toLowerCase().indexOf("webkit")!=-1&&!In("Edge"))&&!(In("Trident")||In("MSIE"))&&!In("Edge"),p5=ef().toLowerCase().indexOf("webkit")!=-1&&!In("Edge");function r2(){var t=ee.document;return t?t.documentMode:void 0}var ap;e:{var xh="",Dh=function(){var t=ef();if(n2)return/rv:([^\);]+)(\)|;)/.exec(t);if(t2)return/Edge\/([\d\.]+)/.exec(t);if(Ls)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(p5)return/WebKit\/(\S+)/.exec(t);if(d5)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Dh&&(xh=Dh?Dh[1]:""),Ls){var Nh=r2();if(Nh!=null&&Nh>parseFloat(xh)){ap=String(Nh);break e}}ap=xh}var lp;if(ee.document&&Ls){var w1=r2();lp=w1||parseInt(ap,10)||void 0}else lp=void 0;var m5=lp;function ka(t,e){if(It.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(n2){e:{try{qm(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:g5[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ka.$.h.call(this)}}ot(ka,It);var g5={2:"touch",3:"pen",4:"mouse"};ka.prototype.h=function(){ka.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var tl="closure_listenable_"+(1e6*Math.random()|0),v5=0;function y5(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++v5,this.fa=this.ia=!1}function tf(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Qm(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function _5(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function i2(t){const e={};for(const n in t)e[n]=t[n];return e}const I1="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function s2(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<I1.length;s++)n=I1[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function nf(t){this.src=t,this.g={},this.h=0}nf.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=cp(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new y5(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function up(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=e2(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(tf(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function cp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Ym="closure_lm_"+(1e6*Math.random()|0),Oh={};function o2(t,e,n,r,i){if(r&&r.once)return l2(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)o2(t,e[s],n,r,i);return null}return n=Zm(n),t&&t[tl]?t.O(e,n,el(r)?!!r.capture:!!r,i):a2(t,e,n,!1,r,i)}function a2(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=el(i)?!!i.capture:!!i,a=Jm(t);if(a||(t[Ym]=a=new nf(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=E5(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)f5||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(c2(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function E5(){function t(n){return e.call(t.src,t.listener,n)}const e=w5;return t}function l2(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)l2(t,e[s],n,r,i);return null}return n=Zm(n),t&&t[tl]?t.P(e,n,el(r)?!!r.capture:!!r,i):a2(t,e,n,!0,r,i)}function u2(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)u2(t,e[s],n,r,i);else r=el(r)?!!r.capture:!!r,n=Zm(n),t&&t[tl]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=cp(s,n,r,i),-1<n&&(tf(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Jm(t))&&(e=t.g[e.toString()],t=-1,e&&(t=cp(e,n,r,i)),(n=-1<t?e[t]:null)&&Xm(n))}function Xm(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[tl])up(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(c2(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Jm(e))?(up(n,t),n.h==0&&(n.src=null,e[Ym]=null)):tf(t)}}}function c2(t){return t in Oh?Oh[t]:Oh[t]="on"+t}function w5(t,e){if(t.fa)t=!0;else{e=new ka(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Xm(t),t=n.call(r,e)}return t}function Jm(t){return t=t[Ym],t instanceof nf?t:null}var Mh="__closure_events_fn_"+(1e9*Math.random()>>>0);function Zm(t){return typeof t=="function"?t:(t[Mh]||(t[Mh]=function(e){return t.handleEvent(e)}),t[Mh])}function st(){Xr.call(this),this.i=new nf(this),this.S=this,this.J=null}ot(st,Xr);st.prototype[tl]=!0;st.prototype.removeEventListener=function(t,e,n,r){u2(this,t,e,n,r)};function ft(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new It(e,t);else if(e instanceof It)e.target=e.target||t;else{var i=e;e=new It(r,t),s2(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Zl(o,r,!0,e)&&i}if(o=e.g=t,i=Zl(o,r,!0,e)&&i,i=Zl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Zl(o,r,!1,e)&&i}st.prototype.N=function(){if(st.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)tf(n[r]);delete t.g[e],t.h--}}this.J=null};st.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};st.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Zl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&up(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var eg=ee.JSON.stringify;class I5{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function T5(){var t=tg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class S5{constructor(){this.h=this.g=null}add(e,n){const r=f2.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var f2=new I5(()=>new A5,t=>t.reset());class A5{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function k5(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function P5(t){ee.setTimeout(()=>{throw t},0)}let Pa,Ra=!1,tg=new S5,h2=()=>{const t=ee.Promise.resolve(void 0);Pa=()=>{t.then(R5)}};var R5=()=>{for(var t;t=T5();){try{t.h.call(t.g)}catch(n){P5(n)}var e=f2;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ra=!1};function rf(t,e){st.call(this),this.h=t||1,this.g=e||ee,this.j=wt(this.qb,this),this.l=Date.now()}ot(rf,st);F=rf.prototype;F.ga=!1;F.T=null;F.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ft(this,"tick"),this.ga&&(ng(this),this.start()))}};F.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ng(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}F.N=function(){rf.$.N.call(this),ng(this),delete this.g};function rg(t,e,n){if(typeof t=="function")n&&(t=wt(t,n));else if(t&&typeof t.handleEvent=="function")t=wt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ee.setTimeout(t,e||0)}function d2(t){t.g=rg(()=>{t.g=null,t.i&&(t.i=!1,d2(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class C5 extends Xr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:d2(this)}N(){super.N(),this.g&&(ee.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ca(t){Xr.call(this),this.h=t,this.g={}}ot(Ca,Xr);var T1=[];function p2(t,e,n,r){Array.isArray(n)||(n&&(T1[0]=n.toString()),n=T1);for(var i=0;i<n.length;i++){var s=o2(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function m2(t){Qm(t.g,function(e,n){this.g.hasOwnProperty(n)&&Xm(e)},t),t.g={}}Ca.prototype.N=function(){Ca.$.N.call(this),m2(this)};Ca.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function sf(){this.g=!0}sf.prototype.Ea=function(){this.g=!1};function b5(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var f=c.split("_");o=2<=f.length&&f[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function x5(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function ds(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+N5(t,n)+(r?" "+r:"")})}function D5(t,e){t.info(function(){return"TIMEOUT: "+e})}sf.prototype.info=function(){};function N5(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return eg(n)}catch{return e}}var Fi={},S1=null;function of(){return S1=S1||new st}Fi.Ta="serverreachability";function g2(t){It.call(this,Fi.Ta,t)}ot(g2,It);function ba(t){const e=of();ft(e,new g2(e))}Fi.STAT_EVENT="statevent";function v2(t,e){It.call(this,Fi.STAT_EVENT,t),this.stat=e}ot(v2,It);function Rt(t){const e=of();ft(e,new v2(e,t))}Fi.Ua="timingevent";function y2(t,e){It.call(this,Fi.Ua,t),this.size=e}ot(y2,It);function nl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ee.setTimeout(function(){t()},e)}var af={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},_2={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ig(){}ig.prototype.h=null;function A1(t){return t.h||(t.h=t.i())}function E2(){}var rl={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function sg(){It.call(this,"d")}ot(sg,It);function og(){It.call(this,"c")}ot(og,It);var fp;function lf(){}ot(lf,ig);lf.prototype.g=function(){return new XMLHttpRequest};lf.prototype.i=function(){return{}};fp=new lf;function il(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Ca(this),this.P=O5,t=op?125:void 0,this.V=new rf(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new w2}function w2(){this.i=null,this.g="",this.h=!1}var O5=45e3,hp={},cc={};F=il.prototype;F.setTimeout=function(t){this.P=t};function dp(t,e,n){t.L=1,t.v=cf(tr(e)),t.s=n,t.S=!0,I2(t,null)}function I2(t,e){t.G=Date.now(),sl(t),t.A=tr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),b2(n.i,"t",r),t.C=0,n=t.l.J,t.h=new w2,t.g=X2(t.l,n?e:null,!t.s),0<t.O&&(t.M=new C5(wt(t.Pa,t,t.g),t.O)),p2(t.U,t.g,"readystatechange",t.nb),e=t.I?i2(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ba(),b5(t.j,t.u,t.A,t.m,t.W,t.s)}F.nb=function(t){t=t.target;const e=this.M;e&&Sn(t)==3?e.l():this.Pa(t)};F.Pa=function(t){try{if(t==this.g)e:{const c=Sn(this.g);var e=this.g.Ia();const f=this.g.da();if(!(3>c)&&(c!=3||op||this.g&&(this.h.h||this.g.ja()||C1(this.g)))){this.J||c!=4||e==7||(e==8||0>=f?ba(3):ba(2)),uf(this);var n=this.g.da();this.ca=n;t:if(T2(this)){var r=C1(this.g);t="";var i=r.length,s=Sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hi(this),Ko(this);var o="";break t}this.h.i=new ee.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,x5(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Aa(a)){var u=a;break t}}u=null}if(n=u)ds(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,pp(this,n);else{this.i=!1,this.o=3,Rt(12),hi(this),Ko(this);break e}}this.S?(S2(this,c,o),op&&this.i&&c==3&&(p2(this.U,this.V,"tick",this.mb),this.V.start())):(ds(this.j,this.m,o,null),pp(this,o)),c==4&&hi(this),this.i&&!this.J&&(c==4?G2(this.l,this):(this.i=!1,sl(this)))}else tb(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Rt(12)):(this.o=0,Rt(13)),hi(this),Ko(this)}}}catch{}finally{}};function T2(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function S2(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=M5(t,n),i==cc){e==4&&(t.o=4,Rt(14),r=!1),ds(t.j,t.m,null,"[Incomplete Response]");break}else if(i==hp){t.o=4,Rt(15),ds(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else ds(t.j,t.m,i,null),pp(t,i);T2(t)&&i!=cc&&i!=hp&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Rt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),hg(e),e.M=!0,Rt(11))):(ds(t.j,t.m,n,"[Invalid Chunked Response]"),hi(t),Ko(t))}F.mb=function(){if(this.g){var t=Sn(this.g),e=this.g.ja();this.C<e.length&&(uf(this),S2(this,t,e),this.i&&t!=4&&sl(this))}};function M5(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?cc:(n=Number(e.substring(n,r)),isNaN(n)?hp:(r+=1,r+n>e.length?cc:(e=e.slice(r,r+n),t.C=r+n,e)))}F.cancel=function(){this.J=!0,hi(this)};function sl(t){t.Y=Date.now()+t.P,A2(t,t.P)}function A2(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=nl(wt(t.lb,t),e)}function uf(t){t.B&&(ee.clearTimeout(t.B),t.B=null)}F.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(D5(this.j,this.A),this.L!=2&&(ba(),Rt(17)),hi(this),this.o=2,Ko(this)):A2(this,this.Y-t)};function Ko(t){t.l.H==0||t.J||G2(t.l,t)}function hi(t){uf(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,ng(t.V),m2(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function pp(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||mp(n.i,t))){if(!t.K&&mp(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)dc(n),pf(n);else break e;fg(n),Rt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=nl(wt(n.ib,n),6e3));if(1>=N2(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else di(n,11)}else if((t.K||n.g==t)&&dc(n),!Aa(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const f=u[4];f!=null&&(n.Ga=f,n.l.info("SVER="+n.Ga));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const y=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(ag(s,s.h),s.h=null))}if(r.F){const _=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,ke(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Y2(r,r.J?r.pa:null,r.Y),o.K){O2(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(uf(a),sl(a)),r.g=o}else W2(r);0<n.j.length&&mf(n)}else u[0]!="stop"&&u[0]!="close"||di(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?di(n,7):cg(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}ba(4)}catch{}}function V5(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Zc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function L5(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Zc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function k2(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Zc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=L5(t),r=V5(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var P2=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function F5(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function yi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof yi){this.h=t.h,fc(this,t.j),this.s=t.s,this.g=t.g,hc(this,t.m),this.l=t.l;var e=t.i,n=new xa;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),k1(this,n),this.o=t.o}else t&&(e=String(t).match(P2))?(this.h=!1,fc(this,e[1]||"",!0),this.s=bo(e[2]||""),this.g=bo(e[3]||"",!0),hc(this,e[4]),this.l=bo(e[5]||"",!0),k1(this,e[6]||"",!0),this.o=bo(e[7]||"")):(this.h=!1,this.i=new xa(null,this.h))}yi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(xo(e,P1,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(xo(e,P1,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(xo(n,n.charAt(0)=="/"?$5:U5,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",xo(n,B5)),t.join("")};function tr(t){return new yi(t)}function fc(t,e,n){t.j=n?bo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function hc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function k1(t,e,n){e instanceof xa?(t.i=e,H5(t.i,t.h)):(n||(e=xo(e,z5)),t.i=new xa(e,t.h))}function ke(t,e,n){t.i.set(e,n)}function cf(t){return ke(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function bo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function xo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,j5),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function j5(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var P1=/[#\/\?@]/g,U5=/[#\?:]/g,$5=/[#\?]/g,z5=/[#\?@]/g,B5=/#/g;function xa(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Jr(t){t.g||(t.g=new Map,t.h=0,t.i&&F5(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}F=xa.prototype;F.add=function(t,e){Jr(this),this.i=null,t=Zs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function R2(t,e){Jr(t),e=Zs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function C2(t,e){return Jr(t),e=Zs(t,e),t.g.has(e)}F.forEach=function(t,e){Jr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};F.ta=function(){Jr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};F.Z=function(t){Jr(this);let e=[];if(typeof t=="string")C2(this,t)&&(e=e.concat(this.g.get(Zs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};F.set=function(t,e){return Jr(this),this.i=null,t=Zs(this,t),C2(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};F.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function b2(t,e,n){R2(t,e),0<n.length&&(t.i=null,t.g.set(Zs(t,e),Gm(n)),t.h+=n.length)}F.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Zs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function H5(t,e){e&&!t.j&&(Jr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(R2(this,r),b2(this,i,n))},t)),t.j=e}var W5=class{constructor(t,e){this.g=t,this.map=e}};function x2(t){this.l=t||K5,ee.PerformanceNavigationTiming?(t=ee.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ee.g&&ee.g.Ka&&ee.g.Ka()&&ee.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var K5=10;function D2(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function N2(t){return t.h?1:t.g?t.g.size:0}function mp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ag(t,e){t.g?t.g.add(e):t.h=e}function O2(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}x2.prototype.cancel=function(){if(this.i=M2(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function M2(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Gm(t.i)}var G5=class{stringify(t){return ee.JSON.stringify(t,void 0)}parse(t){return ee.JSON.parse(t,void 0)}};function q5(){this.g=new G5}function Q5(t,e,n){const r=n||"";try{k2(t,function(i,s){let o=i;el(i)&&(o=eg(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function Y5(t,e){const n=new sf;if(ee.Image){const r=new Image;r.onload=Jl(eu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Jl(eu,n,r,"TestLoadImage: error",!1,e),r.onabort=Jl(eu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Jl(eu,n,r,"TestLoadImage: timeout",!1,e),ee.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function eu(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function ff(t){this.l=t.ec||null,this.j=t.ob||!1}ot(ff,ig);ff.prototype.g=function(){return new hf(this.l,this.j)};ff.prototype.i=function(t){return function(){return t}}({});function hf(t,e){st.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=lg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ot(hf,st);var lg=0;F=hf.prototype;F.open=function(t,e){if(this.readyState!=lg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Da(this)};F.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||ee).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};F.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ol(this)),this.readyState=lg};F.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Da(this)),this.g&&(this.readyState=3,Da(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ee.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;V2(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function V2(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}F.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ol(this):Da(this),this.readyState==3&&V2(this)}};F.Za=function(t){this.g&&(this.response=this.responseText=t,ol(this))};F.Ya=function(t){this.g&&(this.response=t,ol(this))};F.ka=function(){this.g&&ol(this)};function ol(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Da(t)}F.setRequestHeader=function(t,e){this.v.append(t,e)};F.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};F.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Da(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(hf.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var X5=ee.JSON.parse;function $e(t){st.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=L2,this.L=this.M=!1}ot($e,st);var L2="",J5=/^https?$/i,Z5=["POST","PUT"];F=$e.prototype;F.Oa=function(t){this.M=t};F.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():fp.g(),this.C=this.u?A1(this.u):A1(fp),this.g.onreadystatechange=wt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){R1(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=ee.FormData&&t instanceof ee.FormData,!(0<=e2(Z5,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{U2(this),0<this.B&&((this.L=eb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=wt(this.ua,this)):this.A=rg(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){R1(this,s)}};function eb(t){return Ls&&typeof t.timeout=="number"&&t.ontimeout!==void 0}F.ua=function(){typeof Km<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ft(this,"timeout"),this.abort(8))};function R1(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,F2(t),df(t)}function F2(t){t.F||(t.F=!0,ft(t,"complete"),ft(t,"error"))}F.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ft(this,"complete"),ft(this,"abort"),df(this))};F.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),df(this,!0)),$e.$.N.call(this)};F.La=function(){this.s||(this.G||this.v||this.l?j2(this):this.kb())};F.kb=function(){j2(this)};function j2(t){if(t.h&&typeof Km<"u"&&(!t.C[1]||Sn(t)!=4||t.da()!=2)){if(t.v&&Sn(t)==4)rg(t.La,0,t);else if(ft(t,"readystatechange"),Sn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(P2)[1]||null;!i&&ee.self&&ee.self.location&&(i=ee.self.location.protocol.slice(0,-1)),r=!J5.test(i?i.toLowerCase():"")}n=r}if(n)ft(t,"complete"),ft(t,"success");else{t.m=6;try{var s=2<Sn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",F2(t)}}finally{df(t)}}}}function df(t,e){if(t.g){U2(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ft(t,"ready");try{n.onreadystatechange=r}catch{}}}function U2(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(ee.clearTimeout(t.A),t.A=null)}F.isActive=function(){return!!this.g};function Sn(t){return t.g?t.g.readyState:0}F.da=function(){try{return 2<Sn(this)?this.g.status:-1}catch{return-1}};F.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};F.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),X5(e)}};function C1(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case L2:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function tb(t){const e={};t=(t.g&&2<=Sn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Aa(t[r]))continue;var n=k5(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}_5(e,function(r){return r.join(", ")})}F.Ia=function(){return this.m};F.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function $2(t){let e="";return Qm(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function ug(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=$2(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ke(t,e,n))}function Io(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function z2(t){this.Ga=0,this.j=[],this.l=new sf,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Io("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Io("baseRetryDelayMs",5e3,t),this.hb=Io("retryDelaySeedMs",1e4,t),this.eb=Io("forwardChannelMaxRetries",2,t),this.xa=Io("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new x2(t&&t.concurrentRequestLimit),this.Ja=new q5,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}F=z2.prototype;F.ra=8;F.H=1;function cg(t){if(B2(t),t.H==3){var e=t.W++,n=tr(t.I);if(ke(n,"SID",t.K),ke(n,"RID",e),ke(n,"TYPE","terminate"),al(t,n),e=new il(t,t.l,e),e.L=2,e.v=cf(tr(n)),n=!1,ee.navigator&&ee.navigator.sendBeacon)try{n=ee.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&ee.Image&&(new Image().src=e.v,n=!0),n||(e.g=X2(e.l,null),e.g.ha(e.v)),e.G=Date.now(),sl(e)}Q2(t)}function pf(t){t.g&&(hg(t),t.g.cancel(),t.g=null)}function B2(t){pf(t),t.u&&(ee.clearTimeout(t.u),t.u=null),dc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&ee.clearTimeout(t.m),t.m=null)}function mf(t){if(!D2(t.i)&&!t.m){t.m=!0;var e=t.Na;Pa||h2(),Ra||(Pa(),Ra=!0),tg.add(e,t),t.C=0}}function nb(t,e){return N2(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=nl(wt(t.Na,t,e),q2(t,t.C)),t.C++,!0)}F.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new il(this,this.l,t);let s=this.s;if(this.U&&(s?(s=i2(s),s2(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=H2(this,i,e),n=tr(this.I),ke(n,"RID",t),ke(n,"CVER",22),this.F&&ke(n,"X-HTTP-Session-Id",this.F),al(this,n),s&&(this.O?e="headers="+encodeURIComponent(String($2(s)))+"&"+e:this.o&&ug(n,this.o,s)),ag(this.i,i),this.bb&&ke(n,"TYPE","init"),this.P?(ke(n,"$req",e),ke(n,"SID","null"),i.aa=!0,dp(i,n,null)):dp(i,n,e),this.H=2}}else this.H==3&&(t?b1(this,t):this.j.length==0||D2(this.i)||b1(this))};function b1(t,e){var n;e?n=e.m:n=t.W++;const r=tr(t.I);ke(r,"SID",t.K),ke(r,"RID",n),ke(r,"AID",t.V),al(t,r),t.o&&t.s&&ug(r,t.o,t.s),n=new il(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=H2(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),ag(t.i,n),dp(n,r,e)}function al(t,e){t.na&&Qm(t.na,function(n,r){ke(e,r,n)}),t.h&&k2({},function(n,r){ke(e,r,n)})}function H2(t,e,n){n=Math.min(t.j.length,n);var r=t.h?wt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{Q5(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function W2(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Pa||h2(),Ra||(Pa(),Ra=!0),tg.add(e,t),t.A=0}}function fg(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=nl(wt(t.Ma,t),q2(t,t.A)),t.A++,!0)}F.Ma=function(){if(this.u=null,K2(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=nl(wt(this.jb,this),t)}};F.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Rt(10),pf(this),K2(this))};function hg(t){t.B!=null&&(ee.clearTimeout(t.B),t.B=null)}function K2(t){t.g=new il(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=tr(t.wa);ke(e,"RID","rpc"),ke(e,"SID",t.K),ke(e,"AID",t.V),ke(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ke(e,"TO",t.qa),ke(e,"TYPE","xmlhttp"),al(t,e),t.o&&t.s&&ug(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=cf(tr(e)),n.s=null,n.S=!0,I2(n,t)}F.ib=function(){this.v!=null&&(this.v=null,pf(this),fg(this),Rt(19))};function dc(t){t.v!=null&&(ee.clearTimeout(t.v),t.v=null)}function G2(t,e){var n=null;if(t.g==e){dc(t),hg(t),t.g=null;var r=2}else if(mp(t.i,e))n=e.F,O2(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=of(),ft(r,new y2(r,n)),mf(t)}else W2(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&nb(t,e)||r==2&&fg(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:di(t,5);break;case 4:di(t,10);break;case 3:di(t,6);break;default:di(t,2)}}}function q2(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function di(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=wt(t.pb,t);n||(n=new yi("//www.google.com/images/cleardot.gif"),ee.location&&ee.location.protocol=="http"||fc(n,"https"),cf(n)),Y5(n.toString(),r)}else Rt(2);t.H=0,t.h&&t.h.za(e),Q2(t),B2(t)}F.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Rt(2)):(this.l.info("Failed to ping google.com"),Rt(1))};function Q2(t){if(t.H=0,t.ma=[],t.h){const e=M2(t.i);(e.length!=0||t.j.length!=0)&&(E1(t.ma,e),E1(t.ma,t.j),t.i.i.length=0,Gm(t.j),t.j.length=0),t.h.ya()}}function Y2(t,e,n){var r=n instanceof yi?tr(n):new yi(n);if(r.g!="")e&&(r.g=e+"."+r.g),hc(r,r.m);else{var i=ee.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new yi(null);r&&fc(s,r),e&&(s.g=e),i&&hc(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&ke(r,n,e),ke(r,"VER",t.ra),al(t,r),r}function X2(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new $e(new ff({ob:!0})):new $e(t.va),e.Oa(t.J),e}F.isActive=function(){return!!this.h&&this.h.isActive(this)};function J2(){}F=J2.prototype;F.Ba=function(){};F.Aa=function(){};F.za=function(){};F.ya=function(){};F.isActive=function(){return!0};F.Va=function(){};function pc(){if(Ls&&!(10<=Number(m5)))throw Error("Environmental error: no available transport.")}pc.prototype.g=function(t,e){return new Kt(t,e)};function Kt(t,e){st.call(this),this.g=new z2(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Aa(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Aa(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new eo(this)}ot(Kt,st);Kt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Rt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Y2(t,null,t.Y),mf(t)};Kt.prototype.close=function(){cg(this.g)};Kt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=eg(t),t=n);e.j.push(new W5(e.fb++,t)),e.H==3&&mf(e)};Kt.prototype.N=function(){this.g.h=null,delete this.j,cg(this.g),delete this.g,Kt.$.N.call(this)};function Z2(t){sg.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ot(Z2,sg);function eI(){og.call(this),this.status=1}ot(eI,og);function eo(t){this.g=t}ot(eo,J2);eo.prototype.Ba=function(){ft(this.g,"a")};eo.prototype.Aa=function(t){ft(this.g,new Z2(t))};eo.prototype.za=function(t){ft(this.g,new eI)};eo.prototype.ya=function(){ft(this.g,"b")};function rb(){this.blockSize=-1}function vn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ot(vn,rb);vn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Vh(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}vn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Vh(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Vh(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Vh(this,r),i=0;break}}this.h=i,this.i+=e};vn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function _e(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var ib={};function dg(t){return-128<=t&&128>t?h5(t,function(e){return new _e([e|0],0>e?-1:0)}):new _e([t|0],0>t?-1:0)}function An(t){if(isNaN(t)||!isFinite(t))return Is;if(0>t)return ut(An(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=gp;return new _e(e,0)}function tI(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return ut(tI(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=An(Math.pow(e,8)),r=Is,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=An(Math.pow(e,s)),r=r.R(s).add(An(o))):(r=r.R(n),r=r.add(An(o)))}return r}var gp=4294967296,Is=dg(0),vp=dg(1),x1=dg(16777216);F=_e.prototype;F.ea=function(){if(Zt(this))return-ut(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:gp+r)*e,e*=gp}return t};F.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Bn(this))return"0";if(Zt(this))return"-"+ut(this).toString(t);for(var e=An(Math.pow(t,6)),n=this,r="";;){var i=gc(n,e).g;n=mc(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Bn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};F.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Bn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Zt(t){return t.h==-1}F.X=function(t){return t=mc(this,t),Zt(t)?-1:Bn(t)?0:1};function ut(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new _e(n,~t.h).add(vp)}F.abs=function(){return Zt(this)?ut(this):this};F.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new _e(n,n[n.length-1]&-2147483648?-1:0)};function mc(t,e){return t.add(ut(e))}F.R=function(t){if(Bn(this)||Bn(t))return Is;if(Zt(this))return Zt(t)?ut(this).R(ut(t)):ut(ut(this).R(t));if(Zt(t))return ut(this.R(ut(t)));if(0>this.X(x1)&&0>t.X(x1))return An(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,tu(n,2*r+2*i),n[2*r+2*i+1]+=s*l,tu(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,tu(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,tu(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new _e(n,0)};function tu(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function To(t,e){this.g=t,this.h=e}function gc(t,e){if(Bn(e))throw Error("division by zero");if(Bn(t))return new To(Is,Is);if(Zt(t))return e=gc(ut(t),e),new To(ut(e.g),ut(e.h));if(Zt(e))return e=gc(t,ut(e)),new To(ut(e.g),e.h);if(30<t.g.length){if(Zt(t)||Zt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=vp,r=e;0>=r.X(t);)n=D1(n),r=D1(r);var i=Wi(n,1),s=Wi(r,1);for(r=Wi(r,2),n=Wi(n,2);!Bn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Wi(r,1),n=Wi(n,1)}return e=mc(t,i.R(e)),new To(i,e)}for(i=Is;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=An(n),o=s.R(e);Zt(o)||0<o.X(t);)n-=r,s=An(n),o=s.R(e);Bn(s)&&(s=vp),i=i.add(s),t=mc(t,o)}return new To(i,t)}F.gb=function(t){return gc(this,t).h};F.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new _e(n,this.h&t.h)};F.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new _e(n,this.h|t.h)};F.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new _e(n,this.h^t.h)};function D1(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new _e(n,t.h)}function Wi(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new _e(i,t.h)}pc.prototype.createWebChannel=pc.prototype.g;Kt.prototype.send=Kt.prototype.u;Kt.prototype.open=Kt.prototype.m;Kt.prototype.close=Kt.prototype.close;af.NO_ERROR=0;af.TIMEOUT=8;af.HTTP_ERROR=6;_2.COMPLETE="complete";E2.EventType=rl;rl.OPEN="a";rl.CLOSE="b";rl.ERROR="c";rl.MESSAGE="d";st.prototype.listen=st.prototype.O;$e.prototype.listenOnce=$e.prototype.P;$e.prototype.getLastError=$e.prototype.Sa;$e.prototype.getLastErrorCode=$e.prototype.Ia;$e.prototype.getStatus=$e.prototype.da;$e.prototype.getResponseJson=$e.prototype.Wa;$e.prototype.getResponseText=$e.prototype.ja;$e.prototype.send=$e.prototype.ha;$e.prototype.setWithCredentials=$e.prototype.Oa;vn.prototype.digest=vn.prototype.l;vn.prototype.reset=vn.prototype.reset;vn.prototype.update=vn.prototype.j;_e.prototype.add=_e.prototype.add;_e.prototype.multiply=_e.prototype.R;_e.prototype.modulo=_e.prototype.gb;_e.prototype.compare=_e.prototype.X;_e.prototype.toNumber=_e.prototype.ea;_e.prototype.toString=_e.prototype.toString;_e.prototype.getBits=_e.prototype.D;_e.fromNumber=An;_e.fromString=tI;var sb=function(){return new pc},ob=function(){return of()},Lh=af,ab=_2,lb=Fi,N1={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},nu=E2,ub=$e,cb=vn,Ts=_e;const O1="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}vt.UNAUTHENTICATED=new vt(null),vt.GOOGLE_CREDENTIALS=new vt("google-credentials-uid"),vt.FIRST_PARTY=new vt("first-party-uid"),vt.MOCK_USER=new vt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let to="10.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi=new Bm("@firebase/firestore");function So(){return xi.logLevel}function B(t,...e){if(xi.logLevel<=de.DEBUG){const n=e.map(pg);xi.debug(`Firestore (${to}): ${t}`,...n)}}function nr(t,...e){if(xi.logLevel<=de.ERROR){const n=e.map(pg);xi.error(`Firestore (${to}): ${t}`,...n)}}function Fs(t,...e){if(xi.logLevel<=de.WARN){const n=e.map(pg);xi.warn(`Firestore (${to}): ${t}`,...n)}}function pg(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t="Unexpected state"){const e=`FIRESTORE (${to}) INTERNAL ASSERTION FAILED: `+t;throw nr(e),new Error(e)}function Ce(t,e){t||J()}function ae(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends ur{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(vt.UNAUTHENTICATED))}shutdown(){}}class hb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class db{constructor(e){this.t=e,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Fr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Fr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Fr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ce(typeof r.accessToken=="string"),new nI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ce(e===null||typeof e=="string"),new vt(e)}}class pb{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=vt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class mb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new pb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class gb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ce(typeof n.token=="string"),this.R=n.token,new gb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=yb(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ve(t,e){return t<e?-1:t>e?1:0}function js(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new G(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return et.fromMillis(Date.now())}static fromDate(e){return et.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new et(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new re(e)}static min(){return new re(new et(0,0))}static max(){return new re(new et(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(),r===void 0?r=e.length-n:r>e.length-n&&J(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Na.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Na?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class xe extends Na{construct(e,n,r){return new xe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new xe(n)}static emptyPath(){return new xe([])}}const _b=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Et extends Na{construct(e,n,r){return new Et(e,n,r)}static isValidIdentifier(e){return _b.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Et(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new G(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new G(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new G(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new G(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Et(n)}static emptyPath(){return new Et([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(xe.fromString(e))}static fromName(e){return new Q(xe.fromString(e).popFirst(5))}static empty(){return new Q(xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return xe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new xe(e.slice()))}}function Eb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=re.fromTimestamp(r===1e9?new et(n+1,0):new et(n,r));return new Wr(i,Q.empty(),e)}function wb(t){return new Wr(t.readTime,t.key,-1)}class Wr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Wr(re.min(),Q.empty(),-1)}static max(){return new Wr(re.max(),Q.empty(),-1)}}function Ib(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:ve(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Sb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ll(t){if(t.code!==D.FAILED_PRECONDITION||t.message!==Tb)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new N((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof N?n:N.resolve(n)}catch(n){return N.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):N.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):N.reject(n)}static resolve(e){return new N((n,r)=>{n(e)})}static reject(e){return new N((n,r)=>{r(e)})}static waitFor(e){return new N((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=N.resolve(!1);for(const r of e)n=n.next(i=>i?N.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new N((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new N((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function ul(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}mg.ae=-1;function gf(t){return t==null}function vc(t){return t===0&&1/t==-1/0}function Ab(t){return typeof t=="number"&&Number.isInteger(t)&&!vc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M1(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ji(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function iI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,n){this.comparator=e,this.root=n||lt.EMPTY}insert(e,n){return new Fe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,lt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ru(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ru(this.root,e,this.comparator,!1)}getReverseIterator(){return new ru(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ru(this.root,e,this.comparator,!0)}}class ru{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class lt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??lt.RED,this.left=i??lt.EMPTY,this.right=s??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new lt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return lt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(e,n,r,i,s){return this}insert(e,n,r){return new lt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new V1(this.data.getIterator())}getIteratorFrom(e){return new V1(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Tt(this.comparator);return n.data=e,n}}class V1{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.fields=e,e.sort(Et.comparator)}static empty(){return new Bt([])}unionWith(e){let n=new Tt(Et.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return js(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new sI("Invalid base64 string: "+s):s}}(e);return new kt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new kt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}kt.EMPTY_BYTE_STRING=new kt("");const kb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kr(t){if(Ce(!!t),typeof t=="string"){let e=0;const n=kb.exec(t);if(Ce(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qe(t.seconds),nanos:qe(t.nanos)}}function qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Di(t){return typeof t=="string"?kt.fromBase64String(t):kt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function vg(t){const e=t.mapValue.fields.__previous_value__;return gg(e)?vg(e):e}function Oa(t){const e=Kr(t.mapValue.fields.__local_write_time__.timestampValue);return new et(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Ma{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ma("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ma&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ni(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?gg(t)?4:Rb(t)?9007199254740991:10:J()}function Dn(t,e){if(t===e)return!0;const n=Ni(t);if(n!==Ni(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Oa(t).isEqual(Oa(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Kr(i.timestampValue),a=Kr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Di(i.bytesValue).isEqual(Di(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return qe(i.geoPointValue.latitude)===qe(s.geoPointValue.latitude)&&qe(i.geoPointValue.longitude)===qe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return qe(i.integerValue)===qe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=qe(i.doubleValue),a=qe(s.doubleValue);return o===a?vc(o)===vc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return js(t.arrayValue.values||[],e.arrayValue.values||[],Dn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(M1(o)!==M1(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Dn(o[l],a[l])))return!1;return!0}(t,e);default:return J()}}function Va(t,e){return(t.values||[]).find(n=>Dn(n,e))!==void 0}function Us(t,e){if(t===e)return 0;const n=Ni(t),r=Ni(e);if(n!==r)return ve(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=qe(s.integerValue||s.doubleValue),l=qe(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return L1(t.timestampValue,e.timestampValue);case 4:return L1(Oa(t),Oa(e));case 5:return ve(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Di(s),l=Di(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=ve(a[u],l[u]);if(c!==0)return c}return ve(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ve(qe(s.latitude),qe(o.latitude));return a!==0?a:ve(qe(s.longitude),qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Us(a[u],l[u]);if(c)return c}return ve(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===iu.mapValue&&o===iu.mapValue)return 0;if(s===iu.mapValue)return 1;if(o===iu.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let f=0;f<l.length&&f<c.length;++f){const h=ve(l[f],c[f]);if(h!==0)return h;const m=Us(a[l[f]],u[c[f]]);if(m!==0)return m}return ve(l.length,c.length)}(t.mapValue,e.mapValue);default:throw J()}}function L1(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=Kr(t),r=Kr(e),i=ve(n.seconds,r.seconds);return i!==0?i:ve(n.nanos,r.nanos)}function $s(t){return yp(t)}function yp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Kr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Di(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=yp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${yp(n.fields[o])}`;return i+"}"}(t.mapValue):J()}function _p(t){return!!t&&"integerValue"in t}function yg(t){return!!t&&"arrayValue"in t}function F1(t){return!!t&&"nullValue"in t}function j1(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Iu(t){return!!t&&"mapValue"in t}function Go(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ji(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Go(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Go(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Rb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.value=e}static empty(){return new Mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Iu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Go(n)}setAll(e){let n=Et.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Go(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Iu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Iu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ji(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Mt(Go(this.value))}}function oI(t){const e=[];return ji(t.fields,(n,r)=>{const i=new Et([n]);if(Iu(r)){const s=oI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Bt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new _t(e,0,re.min(),re.min(),re.min(),Mt.empty(),0)}static newFoundDocument(e,n,r,i){return new _t(e,1,n,re.min(),r,i,0)}static newNoDocument(e,n){return new _t(e,2,n,re.min(),re.min(),Mt.empty(),0)}static newUnknownDocument(e,n){return new _t(e,3,n,re.min(),re.min(),Mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,n){this.position=e,this.inclusive=n}}function U1(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),n.key):r=Us(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function $1(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Dn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,n="asc"){this.field=e,this.dir=n}}function Cb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{}class Je extends aI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new xb(e,n,r):n==="array-contains"?new Ob(e,r):n==="in"?new Mb(e,r):n==="not-in"?new Vb(e,r):n==="array-contains-any"?new Lb(e,r):new Je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Db(e,r):new Nb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Us(n,this.value)):n!==null&&Ni(this.value)===Ni(n)&&this.matchesComparison(Us(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Nn extends aI{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Nn(e,n)}matches(e){return lI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function lI(t){return t.op==="and"}function uI(t){return bb(t)&&lI(t)}function bb(t){for(const e of t.filters)if(e instanceof Nn)return!1;return!0}function Ep(t){if(t instanceof Je)return t.field.canonicalString()+t.op.toString()+$s(t.value);if(uI(t))return t.filters.map(e=>Ep(e)).join(",");{const e=t.filters.map(n=>Ep(n)).join(",");return`${t.op}(${e})`}}function cI(t,e){return t instanceof Je?function(r,i){return i instanceof Je&&r.op===i.op&&r.field.isEqual(i.field)&&Dn(r.value,i.value)}(t,e):t instanceof Nn?function(r,i){return i instanceof Nn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&cI(o,i.filters[a]),!0):!1}(t,e):void J()}function fI(t){return t instanceof Je?function(n){return`${n.field.canonicalString()} ${n.op} ${$s(n.value)}`}(t):t instanceof Nn?function(n){return n.op.toString()+" {"+n.getFilters().map(fI).join(" ,")+"}"}(t):"Filter"}class xb extends Je{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class Db extends Je{constructor(e,n){super(e,"in",n),this.keys=hI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Nb extends Je{constructor(e,n){super(e,"not-in",n),this.keys=hI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function hI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class Ob extends Je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return yg(n)&&Va(n.arrayValue,this.value)}}class Mb extends Je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Va(this.value.arrayValue,n)}}class Vb extends Je{constructor(e,n){super(e,"not-in",n)}matches(e){if(Va(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Va(this.value.arrayValue,n)}}class Lb extends Je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!yg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Va(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function z1(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Fb(t,e,n,r,i,s,o)}function _g(t){const e=ae(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ep(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),gf(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>$s(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>$s(r)).join(",")),e.he=n}return e.he}function Eg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Cb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!cI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!$1(t.startAt,e.startAt)&&$1(t.endAt,e.endAt)}function wp(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function jb(t,e,n,r,i,s,o,a){return new vf(t,e,n,r,i,s,o,a)}function dI(t){return new vf(t)}function B1(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Ub(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function $b(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function zb(t){return t.collectionGroup!==null}function Qo(t){const e=ae(t);if(e.Pe===null){e.Pe=[];const n=$b(e),r=Ub(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new qo(n)),e.Pe.push(new qo(Et.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new qo(Et.keyField(),s))}}}return e.Pe}function Rn(t){const e=ae(t);return e.Ie||(e.Ie=Bb(e,Qo(t))),e.Ie}function Bb(t,e){if(t.limitType==="F")return z1(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new qo(i.field,s)});const n=t.endAt?new yc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new yc(t.startAt.position,t.startAt.inclusive):null;return z1(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ip(t,e,n){return new vf(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function yf(t,e){return Eg(Rn(t),Rn(e))&&t.limitType===e.limitType}function pI(t){return`${_g(Rn(t))}|lt:${t.limitType}`}function Gi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>fI(i)).join(", ")}]`),gf(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>$s(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>$s(i)).join(",")),`Target(${r})`}(Rn(t))}; limitType=${t.limitType})`}function _f(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Qo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=U1(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Qo(r),i)||r.endAt&&!function(o,a,l){const u=U1(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Qo(r),i))}(t,e)}function Hb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function mI(t){return(e,n)=>{let r=!1;for(const i of Qo(t)){const s=Wb(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Wb(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Us(l,u):J()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ji(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return iI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kb=new Fe(Q.comparator);function rr(){return Kb}const gI=new Fe(Q.comparator);function Do(...t){let e=gI;for(const n of t)e=e.insert(n.key,n);return e}function vI(t){let e=gI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function pi(){return Yo()}function yI(){return Yo()}function Yo(){return new no(t=>t.toString(),(t,e)=>t.isEqual(e))}const Gb=new Fe(Q.comparator),qb=new Tt(Q.comparator);function fe(...t){let e=qb;for(const n of t)e=e.add(n);return e}const Qb=new Tt(ve);function Yb(){return Qb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _I(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vc(e)?"-0":e}}function EI(t){return{integerValue:""+t}}function Xb(t,e){return Ab(e)?EI(e):_I(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(){this._=void 0}}function Jb(t,e,n){return t instanceof _c?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&gg(s)&&(s=vg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof La?II(t,e):t instanceof Fa?TI(t,e):function(i,s){const o=wI(i,s),a=H1(o)+H1(i.Te);return _p(o)&&_p(i.Te)?EI(a):_I(i.serializer,a)}(t,e)}function Zb(t,e,n){return t instanceof La?II(t,e):t instanceof Fa?TI(t,e):n}function wI(t,e){return t instanceof Ec?function(r){return _p(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class _c extends Ef{}class La extends Ef{constructor(e){super(),this.elements=e}}function II(t,e){const n=SI(e);for(const r of t.elements)n.some(i=>Dn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Fa extends Ef{constructor(e){super(),this.elements=e}}function TI(t,e){let n=SI(e);for(const r of t.elements)n=n.filter(i=>!Dn(i,r));return{arrayValue:{values:n}}}class Ec extends Ef{constructor(e,n){super(),this.serializer=e,this.Te=n}}function H1(t){return qe(t.integerValue||t.doubleValue)}function SI(t){return yg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function ex(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof La&&i instanceof La||r instanceof Fa&&i instanceof Fa?js(r.elements,i.elements,Dn):r instanceof Ec&&i instanceof Ec?Dn(r.Te,i.Te):r instanceof _c&&i instanceof _c}(t.transform,e.transform)}class tx{constructor(e,n){this.version=e,this.transformResults=n}}class mn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new mn}static exists(e){return new mn(void 0,e)}static updateTime(e){return new mn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Tu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class wf{}function AI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new wg(t.key,mn.none()):new cl(t.key,t.data,mn.none());{const n=t.data,r=Mt.empty();let i=new Tt(Et.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Zr(t.key,r,new Bt(i.toArray()),mn.none())}}function nx(t,e,n){t instanceof cl?function(i,s,o){const a=i.value.clone(),l=K1(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Zr?function(i,s,o){if(!Tu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=K1(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(kI(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Xo(t,e,n,r){return t instanceof cl?function(s,o,a,l){if(!Tu(s.precondition,o))return a;const u=s.value.clone(),c=G1(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Zr?function(s,o,a,l){if(!Tu(s.precondition,o))return a;const u=G1(s.fieldTransforms,l,o),c=o.data;return c.setAll(kI(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return Tu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function rx(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=wI(r.transform,i||null);s!=null&&(n===null&&(n=Mt.empty()),n.set(r.field,s))}return n||null}function W1(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&js(r,i,(s,o)=>ex(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class cl extends wf{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Zr extends wf{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function kI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function K1(t,e,n){const r=new Map;Ce(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Zb(o,a,n[i]))}return r}function G1(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Jb(s,o,e))}return r}class wg extends wf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ix extends wf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&nx(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Xo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Xo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=yI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=AI(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(re.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),fe())}isEqual(e){return this.batchId===e.batchId&&js(this.mutations,e.mutations,(n,r)=>W1(n,r))&&js(this.baseMutations,e.baseMutations,(n,r)=>W1(n,r))}}class Ig{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ce(e.mutations.length===r.length);let i=function(){return Gb}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ig(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ke,pe;function lx(t){switch(t){default:return J();case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0}}function PI(t){if(t===void 0)return nr("GRPC error has no .code"),D.UNKNOWN;switch(t){case Ke.OK:return D.OK;case Ke.CANCELLED:return D.CANCELLED;case Ke.UNKNOWN:return D.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return D.INTERNAL;case Ke.UNAVAILABLE:return D.UNAVAILABLE;case Ke.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Ke.NOT_FOUND:return D.NOT_FOUND;case Ke.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Ke.ABORTED:return D.ABORTED;case Ke.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Ke.DATA_LOSS:return D.DATA_LOSS;default:return J()}}(pe=Ke||(Ke={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ux(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cx=new Ts([4294967295,4294967295],0);function q1(t){const e=ux().encode(t),n=new cb;return n.update(e),new Uint8Array(n.digest())}function Q1(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ts([n,r],0),new Ts([i,s],0)]}class Tg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new No(`Invalid padding: ${n}`);if(r<0)throw new No(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new No(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new No(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=Ts.fromNumber(this.Ae)}Ve(e,n,r){let i=e.add(n.multiply(Ts.fromNumber(r)));return i.compare(cx)===1&&(i=new Ts([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=q1(e),[r,i]=Q1(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);if(!this.me(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Tg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=q1(e),[r,i]=Q1(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);this.fe(o)}}fe(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class No extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,fl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new If(re.min(),i,new Fe(ve),rr(),fe())}}class fl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new fl(r,n,fe(),fe(),fe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,n,r,i){this.ge=e,this.removedTargetIds=n,this.key=r,this.pe=i}}class RI{constructor(e,n){this.targetId=e,this.ye=n}}class CI{constructor(e,n,r=kt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Y1{constructor(){this.we=0,this.Se=J1(),this.be=kt.EMPTY_BYTE_STRING,this.De=!1,this.Ce=!0}get current(){return this.De}get resumeToken(){return this.be}get ve(){return this.we!==0}get Fe(){return this.Ce}Me(e){e.approximateByteSize()>0&&(this.Ce=!0,this.be=e)}xe(){let e=fe(),n=fe(),r=fe();return this.Se.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:J()}}),new fl(this.be,this.De,e,n,r)}Oe(){this.Ce=!1,this.Se=J1()}Ne(e,n){this.Ce=!0,this.Se=this.Se.insert(e,n)}Be(e){this.Ce=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}class fx{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=rr(),this.Ue=X1(),this.We=new Fe(ve)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const r=this.Je(n);switch(e.state){case 0:this.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.ve||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.ve||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(e.resumeToken));break;default:J()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((r,i)=>{this.Ye(i)&&n(i)})}Xe(e){const n=e.targetId,r=e.ye.count,i=this.et(n);if(i){const s=i.target;if(wp(s))if(r===0){const o=new Q(s.path);this.je(n,o,_t.newNoDocument(o,re.min()))}else Ce(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(e),l=a?this.rt(a,e,o):1;if(l!==0){this.Ze(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,u)}}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Di(r).toUint8Array()}catch(l){if(l instanceof sI)return Fs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Tg(o,i,s)}catch(l){return Fs(l instanceof No?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ae===0?null:a}rt(e,n,r){return n.ye.count===r-this.ot(e,n.targetId)?0:2}ot(e,n){const r=this.Qe.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.je(n,s,null),i++)}),i}_t(e){const n=new Map;this.Ke.forEach((s,o)=>{const a=this.et(o);if(a){if(s.current&&wp(a.target)){const l=new Q(a.target.path);this.$e.get(l)!==null||this.ut(o,l)||this.je(o,l,_t.newNoDocument(l,e))}s.Fe&&(n.set(o,s.xe()),s.Oe())}});let r=fe();this.Ue.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.et(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.$e.forEach((s,o)=>o.setReadTime(e));const i=new If(e,n,this.We,this.$e,r);return this.$e=rr(),this.Ue=X1(),this.We=new Fe(ve),i}ze(e,n){if(!this.Ye(e))return;const r=this.ut(e,n.key)?2:0;this.Je(e).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}je(e,n,r){if(!this.Ye(e))return;const i=this.Je(e);this.ut(e,n)?i.Ne(n,1):i.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new Y1,this.Ke.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new Tt(ve),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.ve?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new Y1),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}ut(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function X1(){return new Fe(Q.comparator)}function J1(){return new Fe(Q.comparator)}const hx=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),dx=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),px=(()=>({and:"AND",or:"OR"}))();class mx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Tp(t,e){return t.useProto3Json||gf(e)?e:{value:e}}function wc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function gx(t,e){return wc(t,e.toTimestamp())}function Cn(t){return Ce(!!t),re.fromTimestamp(function(n){const r=Kr(n);return new et(r.seconds,r.nanos)}(t))}function Sg(t,e){return function(r){return new xe(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function xI(t){const e=xe.fromString(t);return Ce(MI(e)),e}function Sp(t,e){return Sg(t.databaseId,e.path)}function Fh(t,e){const n=xI(e);if(n.get(1)!==t.databaseId.projectId)throw new G(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(DI(n))}function Ap(t,e){return Sg(t.databaseId,e)}function vx(t){const e=xI(t);return e.length===4?xe.emptyPath():DI(e)}function kp(t){return new xe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function DI(t){return Ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Z1(t,e,n){return{name:Sp(t,e),fields:n.value.mapValue.fields}}function yx(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:J()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(Ce(c===void 0||typeof c=="string"),kt.fromBase64String(c||"")):(Ce(c===void 0||c instanceof Uint8Array),kt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?D.UNKNOWN:PI(u.code);return new G(c,u.message||"")}(o);n=new CI(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Fh(t,r.document.name),s=Cn(r.document.updateTime),o=r.document.createTime?Cn(r.document.createTime):re.min(),a=new Mt({mapValue:{fields:r.document.fields}}),l=_t.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Su(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Fh(t,r.document),s=r.readTime?Cn(r.readTime):re.min(),o=_t.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Su([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Fh(t,r.document),s=r.removedTargetIds||[];n=new Su([],s,i,null)}else{if(!("filter"in e))return J();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new ax(i,s),a=r.targetId;n=new RI(a,o)}}return n}function _x(t,e){let n;if(e instanceof cl)n={update:Z1(t,e.key,e.value)};else if(e instanceof wg)n={delete:Sp(t,e.key)};else if(e instanceof Zr)n={update:Z1(t,e.key,e.data),updateMask:Rx(e.fieldMask)};else{if(!(e instanceof ix))return J();n={verify:Sp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof _c)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof La)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Fa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ec)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw J()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:gx(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:J()}(t,e.precondition)),n}function Ex(t,e){return t&&t.length>0?(Ce(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Cn(i.updateTime):Cn(s);return o.isEqual(re.min())&&(o=Cn(s)),new tx(o,i.transformResults||[])}(n,e))):[]}function wx(t,e){return{documents:[Ap(t,e.path)]}}function Ix(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Ap(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ap(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return OI(Nn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(f){return{field:qi(f.field),direction:Ax(f.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Tp(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function Tx(t){let e=vx(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ce(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(f){const h=NI(f);return h instanceof Nn&&uI(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(h=>function(y){return new qo(Qi(y.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(h))}(n.orderBy));let a=null;n.limit&&(a=function(f){let h;return h=typeof f=="object"?f.value:f,gf(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(f){const h=!!f.before,m=f.values||[];return new yc(m,h)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const h=!f.before,m=f.values||[];return new yc(m,h)}(n.endAt)),jb(e,i,o,s,a,"F",l,u)}function Sx(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function NI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Qi(n.unaryFilter.field);return Je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Qi(n.unaryFilter.field);return Je.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Qi(n.unaryFilter.field);return Je.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Qi(n.unaryFilter.field);return Je.create(o,"!=",{nullValue:"NULL_VALUE"});default:return J()}}(t):t.fieldFilter!==void 0?function(n){return Je.create(Qi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Nn.create(n.compositeFilter.filters.map(r=>NI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return J()}}(n.compositeFilter.op))}(t):J()}function Ax(t){return hx[t]}function kx(t){return dx[t]}function Px(t){return px[t]}function qi(t){return{fieldPath:t.canonicalString()}}function Qi(t){return Et.fromServerFormat(t.fieldPath)}function OI(t){return t instanceof Je?function(n){if(n.op==="=="){if(j1(n.value))return{unaryFilter:{field:qi(n.field),op:"IS_NAN"}};if(F1(n.value))return{unaryFilter:{field:qi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(j1(n.value))return{unaryFilter:{field:qi(n.field),op:"IS_NOT_NAN"}};if(F1(n.value))return{unaryFilter:{field:qi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qi(n.field),op:kx(n.op),value:n.value}}}(t):t instanceof Nn?function(n){const r=n.getFilters().map(i=>OI(i));return r.length===1?r[0]:{compositeFilter:{op:Px(n.op),filters:r}}}(t):J()}function Rx(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function MI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,n,r,i,s=re.min(),o=re.min(),a=kt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new kr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new kr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(e){this.ht=e}}function bx(t){const e=Tx({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ip(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xx{constructor(){this.an=new Dx}addToCollectionParentIndex(e,n){return this.an.add(n),N.resolve()}getCollectionParents(e,n){return N.resolve(this.an.getEntries(n))}addFieldIndex(e,n){return N.resolve()}deleteFieldIndex(e,n){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,n){return N.resolve()}getDocumentsMatchingTarget(e,n){return N.resolve(null)}getIndexType(e,n){return N.resolve(0)}getFieldIndexes(e,n){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,n){return N.resolve(Wr.min())}getMinOffsetFromCollectionGroup(e,n){return N.resolve(Wr.min())}updateCollectionGroup(e,n,r){return N.resolve()}updateIndexEntries(e,n){return N.resolve()}}class Dx{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Tt(xe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Tt(xe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Bn(){return new zs(0)}static Ln(){return new zs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nx{constructor(){this.changes=new no(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,_t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?N.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mx{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Xo(r.mutation,i,Bt.empty(),et.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,fe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=fe()){const i=pi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Do();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=pi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,fe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=rr();const o=Yo(),a=function(){return Yo()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Zr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Xo(c.mutation,u,c.mutation.getFieldMask(),et.now())):o.set(u.key,Bt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var f;return a.set(u,new Ox(c,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Yo();let i=new Fe((o,a)=>o-a),s=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Bt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const f=(i.get(a.batchId)||fe()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,f=yI();c.forEach(h=>{if(!s.has(h)){const m=AI(n.get(h),r.get(h));m!==null&&f.set(h,m),s=s.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return N.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return Q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):zb(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):N.resolve(pi());let a=-1,l=s;return o.next(u=>N.forEach(u,(c,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(c)?N.resolve():this.remoteDocumentCache.getEntry(e,c).next(h=>{l=l.insert(c,h)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,fe())).next(c=>({batchId:a,changes:vI(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let i=Do();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Do();return this.indexManager.getCollectionParents(e,s).next(a=>N.forEach(a,l=>{const u=function(f,h){return new vf(h,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((f,h)=>{o=o.insert(f,h)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,_t.newInvalidDocument(c)))});let a=Do();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&Xo(c.mutation,u,Bt.empty(),et.now()),_f(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,n){return N.resolve(this.lr.get(n))}saveBundleMetadata(e,n){return this.lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Cn(i.createTime)}}(n)),N.resolve()}getNamedQuery(e,n){return N.resolve(this.hr.get(n))}saveNamedQuery(e,n){return this.hr.set(n.name,function(i){return{name:i.name,query:bx(i.bundledQuery),readTime:Cn(i.readTime)}}(n)),N.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{constructor(){this.overlays=new Fe(Q.comparator),this.Pr=new Map}getOverlay(e,n){return N.resolve(this.overlays.get(n))}getOverlays(e,n){const r=pi();return N.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.It(e,n,s)}),N.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Pr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Pr.delete(r)),N.resolve()}getOverlaysForCollection(e,n,r){const i=pi(),s=n.length+1,o=new Q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return N.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Fe((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=pi(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=pi(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return N.resolve(a)}It(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Pr.get(i.largestBatchId).delete(r.key);this.Pr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ox(n,r));let s=this.Pr.get(n);s===void 0&&(s=fe(),this.Pr.set(n,s)),this.Pr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(){this.Ir=new Tt(nt.dr),this.Tr=new Tt(nt.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(e,n){const r=new nt(e,n);this.Ir=this.Ir.add(r),this.Tr=this.Tr.add(r)}Ar(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Rr(new nt(e,n))}Vr(e,n){e.forEach(r=>this.removeReference(r,n))}mr(e){const n=new Q(new xe([])),r=new nt(n,e),i=new nt(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Rr(o),s.push(o.key)}),s}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}pr(e){const n=new Q(new xe([])),r=new nt(n,e),i=new nt(n,e+1);let s=fe();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new nt(e,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class nt{constructor(e,n){this.key=e,this.yr=n}static dr(e,n){return Q.comparator(e.key,n.key)||ve(e.yr,n.yr)}static Er(e,n){return ve(e.yr,n.yr)||Q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new Tt(nt.dr)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new sx(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Sr=this.Sr.add(new nt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return N.resolve(o)}lookupMutationBatch(e,n){return N.resolve(this.br(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Dr(r),s=i<0?0:i;return N.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new nt(n,0),i=new nt(n,Number.POSITIVE_INFINITY),s=[];return this.Sr.forEachInRange([r,i],o=>{const a=this.br(o.yr);s.push(a)}),N.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Tt(ve);return n.forEach(i=>{const s=new nt(i,0),o=new nt(i,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([s,o],a=>{r=r.add(a.yr)})}),N.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Q.isDocumentKey(s)||(s=s.child(""));const o=new nt(new Q(s),0);let a=new Tt(ve);return this.Sr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.yr)),!0)},o),N.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.br(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ce(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return N.forEach(n.mutations,i=>{const s=new nt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,n){const r=new nt(n,0),i=this.Sr.firstAfterOrEqual(r);return N.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}vr(e,n){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const n=this.Dr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(e){this.Fr=e,this.docs=function(){return new Fe(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return N.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(n))}getEntries(e,n){let r=rr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():_t.newInvalidDocument(i))}),N.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=rr();const o=n.path,a=new Q(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Ib(wb(c),r)<=0||(i.has(c.key)||_f(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return N.resolve(s)}getAllFromCollectionGroup(e,n,r,i){J()}Mr(e,n){return N.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Ux(this)}getSize(e){return N.resolve(this.size)}}class Ux extends Nx{constructor(e){super(),this.ur=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ur.addEntry(e,i)):this.ur.removeEntry(r)}),N.waitFor(n)}getFromCache(e,n){return this.ur.getEntry(e,n)}getAllFromCache(e,n){return this.ur.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $x{constructor(e){this.persistence=e,this.Or=new no(n=>_g(n),Eg),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.Nr=0,this.Br=new Ag,this.targetCount=0,this.Lr=zs.Bn()}forEachTarget(e,n){return this.Or.forEach((r,i)=>n(i)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),N.resolve()}Qn(e){this.Or.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new zs(n),this.highestTargetId=n),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,n){return this.Qn(n),this.targetCount+=1,N.resolve()}updateTargetData(e,n){return this.Qn(n),N.resolve()}removeTargetData(e,n){return this.Or.delete(n.target),this.Br.mr(n.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Or.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Or.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),N.waitFor(s).next(()=>i)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,n){const r=this.Or.get(n)||null;return N.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Ar(n,r),N.resolve()}removeMatchingKeys(e,n,r){this.Br.Vr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),N.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.mr(n),N.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.pr(n);return N.resolve(r)}containsKey(e,n){return N.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx{constructor(e,n){this.kr={},this.overlays={},this.qr=new mg(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=e(this),this.Kr=new $x(this),this.indexManager=new xx,this.remoteDocumentCache=function(i){return new jx(i)}(r=>this.referenceDelegate.$r(r)),this.serializer=new Cx(n),this.Ur=new Vx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Lx,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.kr[e.toKey()];return r||(r=new Fx(n,this.referenceDelegate),this.kr[e.toKey()]=r),r}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(e,n,r){B("MemoryPersistence","Starting transaction:",e);const i=new Bx(this.qr.next());return this.referenceDelegate.Wr(),r(i).next(s=>this.referenceDelegate.Gr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}zr(e,n){return N.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,n)))}}class Bx extends Sb{constructor(e){super(),this.currentSequenceNumber=e}}class kg{constructor(e){this.persistence=e,this.jr=new Ag,this.Hr=null}static Jr(e){return new kg(e)}get Yr(){if(this.Hr)return this.Hr;throw J()}addReference(e,n,r){return this.jr.addReference(r,n),this.Yr.delete(r.toString()),N.resolve()}removeReference(e,n,r){return this.jr.removeReference(r,n),this.Yr.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,n){return this.Yr.add(n.toString()),N.resolve()}removeTarget(e,n){this.jr.mr(n.targetId).forEach(i=>this.Yr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Yr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Wr(){this.Hr=new Set}Gr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Yr,r=>{const i=Q.fromPath(r);return this.Zr(e,i).next(s=>{s||n.removeEntry(i,re.min())})}).next(()=>(this.Hr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Zr(e,n).next(r=>{r?this.Yr.delete(n.toString()):this.Yr.add(n.toString())})}$r(e){return 0}Zr(e,n){return N.or([()=>N.resolve(this.jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.zr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Qi=r,this.Ki=i}static $i(e,n){let r=fe(),i=fe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Pg(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wx{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=8}initialize(e,n){this.ji=e,this.indexManager=n,this.Ui=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Hi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Ji(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Hx;return this.Yi(e,n,o).next(a=>{if(s.result=a,this.Wi)return this.Zi(e,n,o,a.size)})}).next(()=>s.result)}Zi(e,n,r,i){return r.documentReadCount<this.Gi?(So()<=de.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",Gi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),N.resolve()):(So()<=de.DEBUG&&B("QueryEngine","Query:",Gi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.zi*i?(So()<=de.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",Gi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Rn(n))):N.resolve())}Hi(e,n){if(B1(n))return N.resolve(null);let r=Rn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ip(n,null,"F"),r=Rn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=fe(...s);return this.ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Xi(n,a);return this.es(n,u,o,l.readTime)?this.Hi(e,Ip(n,null,"F")):this.ts(e,u,n,l)}))})))}Ji(e,n,r,i){return B1(n)||i.isEqual(re.min())?N.resolve(null):this.ji.getDocuments(e,r).next(s=>{const o=this.Xi(n,s);return this.es(n,o,r,i)?N.resolve(null):(So()<=de.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Gi(n)),this.ts(e,o,n,Eb(i,-1)).next(a=>a))})}Xi(e,n){let r=new Tt(mI(e));return n.forEach((i,s)=>{_f(e,s)&&(r=r.add(s))}),r}es(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Yi(e,n,r){return So()<=de.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",Gi(n)),this.ji.getDocumentsMatchingQuery(e,n,Wr.min(),r)}ts(e,n,r,i){return this.ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(e,n,r,i){this.persistence=e,this.ns=n,this.serializer=i,this.rs=new Fe(ve),this.ss=new no(s=>_g(s),Eg),this.os=new Map,this._s=e.getRemoteDocumentCache(),this.Kr=e.getTargetCache(),this.Ur=e.getBundleCache(),this.us(r)}us(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Mx(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.rs))}}function Gx(t,e,n,r){return new Kx(t,e,n,r)}async function VI(t,e){const n=ae(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.us(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=fe();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({cs:u,removedBatchIds:o,addedBatchIds:a}))})})}function qx(t,e){const n=ae(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n._s.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const f=u.batch,h=f.keys();let m=N.resolve();return h.forEach(y=>{m=m.next(()=>c.getEntry(l,y)).next(_=>{const w=u.docVersions.get(y);Ce(w!==null),_.version.compareTo(w)<0&&(f.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),c.addEntry(_)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=fe();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function LI(t){const e=ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Kr.getLastRemoteSnapshotVersion(n))}function Qx(t,e){const n=ae(t),r=e.snapshotVersion;let i=n.rs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n._s.newChangeBuffer({trackRemovals:!0});i=n.rs;const a=[];e.targetChanges.forEach((c,f)=>{const h=i.get(f);if(!h)return;a.push(n.Kr.removeMatchingKeys(s,c.removedDocuments,f).next(()=>n.Kr.addMatchingKeys(s,c.addedDocuments,f)));let m=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?m=m.withResumeToken(kt.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,r)),i=i.insert(f,m),function(_,w,v){return _.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(h,m,c)&&a.push(n.Kr.updateTargetData(s,m))});let l=rr(),u=fe();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(Yx(s,o,e.documentUpdates).next(c=>{l=c.ls,u=c.hs})),!r.isEqual(re.min())){const c=n.Kr.getLastRemoteSnapshotVersion(s).next(f=>n.Kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return N.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.rs=i,s))}function Yx(t,e,n){let r=fe(),i=fe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=rr();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(re.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):B("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{ls:o,hs:i}})}function Xx(t,e){const n=ae(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Jx(t,e){const n=ae(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Kr.getTargetData(r,e).next(s=>s?(i=s,N.resolve(i)):n.Kr.allocateTargetId(r).next(o=>(i=new kr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.rs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.rs=n.rs.insert(r.targetId,r),n.ss.set(e,r.targetId)),r})}async function Pp(t,e,n){const r=ae(t),i=r.rs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ul(o))throw o;B("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.rs=r.rs.remove(e),r.ss.delete(i.target)}function e0(t,e,n){const r=ae(t);let i=re.min(),s=fe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const f=ae(l),h=f.ss.get(c);return h!==void 0?N.resolve(f.rs.get(h)):f.Kr.getTargetData(u,c)}(r,o,Rn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ns.getDocumentsMatchingQuery(o,e,n?i:re.min(),n?s:fe())).next(a=>(Zx(r,Hb(e),a),{documents:a,Ps:s})))}function Zx(t,e,n){let r=t.os.get(e)||re.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.os.set(e,r)}class t0{constructor(){this.activeTargetIds=Yb()}Rs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}As(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class eD{constructor(){this.ro=new t0,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.ro.Rs(e),this.io[e]||"not-current"}updateQueryState(e,n,r){this.io[e]=n}removeLocalQueryTarget(e){this.ro.Vs(e)}isLocalQueryTarget(e){return this.ro.activeTargetIds.has(e)}clearQueryState(e){delete this.io[e]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(e){return this.ro.activeTargetIds.has(e)}start(){return this.ro=new t0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{so(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(e){this.co.push(e)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.co)e(0)}uo(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.co)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let su=null;function jh(){return su===null?su=function(){return 268435456+Math.round(2147483648*Math.random())}():su++,"0x"+su.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(e){this.ho=e.ho,this.Po=e.Po}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.Po()}send(e){this.ho(e)}Vo(){this.To()}mo(e){this.Ao(e)}fo(e){this.Ro(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt="WebChannelConnection";class iD extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=r+"://"+n.host,this.yo=`projects/${i}/databases/${s}`,this.wo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get So(){return!1}bo(n,r,i,s,o){const a=jh(),l=this.Do(n,r);B("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(u,s,o),this.vo(n,l,u,i).then(c=>(B("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Fs("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}Fo(n,r,i,s,o,a){return this.bo(n,r,i,s,o)}Co(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+to}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}Do(n,r){const i=nD[n];return`${this.po}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,i){const s=jh();return new Promise((o,a)=>{const l=new ub;l.setWithCredentials(!0),l.listenOnce(ab.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Lh.NO_ERROR:const c=l.getResponseJson();B(gt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Lh.TIMEOUT:B(gt,`RPC '${e}' ${s} timed out`),a(new G(D.DEADLINE_EXCEEDED,"Request time out"));break;case Lh.HTTP_ERROR:const f=l.getStatus();if(B(gt,`RPC '${e}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let h=l.getResponseJson();Array.isArray(h)&&(h=h[0]);const m=h==null?void 0:h.error;if(m&&m.status&&m.message){const y=function(w){const v=w.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(v)>=0?v:D.UNKNOWN}(m.status);a(new G(y,m.message))}else a(new G(D.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new G(D.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{B(gt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);B(gt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Mo(e,n,r){const i=jh(),s=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=sb(),a=ob(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Co(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");B(gt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const f=o.createWebChannel(c,l);let h=!1,m=!1;const y=new rD({ho:w=>{m?B(gt,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(h||(B(gt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),h=!0),B(gt,`RPC '${e}' stream ${i} sending:`,w),f.send(w))},Po:()=>f.close()}),_=(w,v,p)=>{w.listen(v,g=>{try{p(g)}catch(d){setTimeout(()=>{throw d},0)}})};return _(f,nu.EventType.OPEN,()=>{m||B(gt,`RPC '${e}' stream ${i} transport opened.`)}),_(f,nu.EventType.CLOSE,()=>{m||(m=!0,B(gt,`RPC '${e}' stream ${i} transport closed`),y.mo())}),_(f,nu.EventType.ERROR,w=>{m||(m=!0,Fs(gt,`RPC '${e}' stream ${i} transport errored:`,w),y.mo(new G(D.UNAVAILABLE,"The operation could not be completed")))}),_(f,nu.EventType.MESSAGE,w=>{var v;if(!m){const p=w.data[0];Ce(!!p);const g=p,d=g.error||((v=g[0])===null||v===void 0?void 0:v.error);if(d){B(gt,`RPC '${e}' stream ${i} received error:`,d);const I=d.status;let k=function(R){const C=Ke[R];if(C!==void 0)return PI(C)}(I),P=d.message;k===void 0&&(k=D.INTERNAL,P="Unknown error status: "+I+" with message "+d.message),m=!0,y.mo(new G(k,P)),f.close()}else B(gt,`RPC '${e}' stream ${i} received:`,p),y.fo(p)}}),_(a,lb.STAT_EVENT,w=>{w.stat===N1.PROXY?B(gt,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===N1.NOPROXY&&B(gt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.Vo()},0),y}}function Uh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tf(t){return new mx(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e,n,r=1e3,i=1.5,s=6e4){this._i=e,this.timerId=n,this.xo=r,this.Oo=i,this.No=s,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(e){this.cancel();const n=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),i=Math.max(0,n-r);i>0&&B("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,i,()=>(this.ko=Date.now(),e())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(e,n,r,i,s,o,a,l){this._i=e,this.Uo=r,this.Wo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new FI(e,n)}Jo(){return this.state===1||this.state===5||this.Yo()}Yo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&this.zo===null&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}n_(e){this.r_(),this.stream.send(e)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(e,n){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,e!==4?this.Ho.reset():n&&n.code===D.RESOURCE_EXHAUSTED?(nr(n.toString()),nr("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):n&&n.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.s_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(n)}s_(){}auth(){this.state=1;const e=this.o_(this.Go),n=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Go===n&&this.__(r,i)},r=>{e(()=>{const i=new G(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.a_(i)})})}__(e,n){const r=this.o_(this.Go);this.stream=this.u_(e,n),this.stream.Io(()=>{r(()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(i=>{r(()=>this.a_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Zo(){this.state=5,this.Ho.Qo(async()=>{this.state=0,this.start()})}a_(e){return B("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}o_(e){return n=>{this._i.enqueueAndForget(()=>this.Go===e?n():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sD extends jI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}u_(e,n){return this.connection.Mo("Listen",e,n)}onMessage(e){this.Ho.reset();const n=yx(this.serializer,e),r=function(s){if(!("targetChange"in s))return re.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?re.min():o.readTime?Cn(o.readTime):re.min()}(e);return this.listener.c_(n,r)}l_(e){const n={};n.database=kp(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=wp(l)?{documents:wx(s,l)}:{query:Ix(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=bI(s,o.resumeToken);const u=Tp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(re.min())>0){a.readTime=wc(s,o.snapshotVersion.toTimestamp());const u=Tp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=Sx(this.serializer,e);r&&(n.labels=r),this.n_(n)}h_(e){const n={};n.database=kp(this.serializer),n.removeTarget=e,this.n_(n)}}class oD extends jI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.P_=!1}get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(e,n){return this.connection.Mo("Write",e,n)}onMessage(e){if(Ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.P_){this.Ho.reset();const n=Ex(e.writeResults,e.commitTime),r=Cn(e.commitTime);return this.listener.T_(r,n)}return Ce(!e.writeResults||e.writeResults.length===0),this.P_=!0,this.listener.E_()}A_(){const e={};e.database=kp(this.serializer),this.n_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>_x(this.serializer,r))};this.n_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.R_=!1}V_(){if(this.R_)throw new G(D.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.bo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new G(D.UNKNOWN,i.toString())})}Fo(e,n,r,i){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Fo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(D.UNKNOWN,s.toString())})}terminate(){this.R_=!0}}class lD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){this.f_===0&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve())))}b_(e){this.state==="Online"?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.w_("Offline")))}set(e){this.D_(),this.f_=0,e==="Online"&&(this.p_=!1),this.w_(e)}w_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}S_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(nr(n),this.p_=!1):B("OnlineStateTracker",n)}D_(){this.g_!==null&&(this.g_.cancel(),this.g_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uD{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=s,this.x_.so(o=>{r.enqueueAndForget(async()=>{Ui(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=ae(l);u.F_.add(4),await hl(u),u.O_.set("Unknown"),u.F_.delete(4),await Sf(u)}(this))})}),this.O_=new lD(r,i)}}async function Sf(t){if(Ui(t))for(const e of t.M_)await e(!0)}async function hl(t){for(const e of t.M_)await e(!1)}function UI(t,e){const n=ae(t);n.v_.has(e.targetId)||(n.v_.set(e.targetId,e),bg(n)?Cg(n):ro(n).Yo()&&Rg(n,e))}function $I(t,e){const n=ae(t),r=ro(n);n.v_.delete(e),r.Yo()&&zI(n,e),n.v_.size===0&&(r.Yo()?r.e_():Ui(n)&&n.O_.set("Unknown"))}function Rg(t,e){if(t.N_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(re.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ro(t).l_(e)}function zI(t,e){t.N_.Le(e),ro(t).h_(e)}function Cg(t){t.N_=new fx({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.v_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),ro(t).start(),t.O_.y_()}function bg(t){return Ui(t)&&!ro(t).Jo()&&t.v_.size>0}function Ui(t){return ae(t).F_.size===0}function BI(t){t.N_=void 0}async function cD(t){t.v_.forEach((e,n)=>{Rg(t,e)})}async function fD(t,e){BI(t),bg(t)?(t.O_.b_(e),Cg(t)):t.O_.set("Unknown")}async function hD(t,e,n){if(t.O_.set("Online"),e instanceof CI&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.v_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.v_.delete(a),i.N_.removeTarget(a))}(t,e)}catch(r){B("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ic(t,r)}else if(e instanceof Su?t.N_.Ge(e):e instanceof RI?t.N_.Xe(e):t.N_.He(e),!n.isEqual(re.min()))try{const r=await LI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.N_._t(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.v_.get(u);c&&s.v_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.v_.get(l);if(!c)return;s.v_.set(l,c.withResumeToken(kt.EMPTY_BYTE_STRING,c.snapshotVersion)),zI(s,l);const f=new kr(c.target,l,u,c.sequenceNumber);Rg(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){B("RemoteStore","Failed to raise snapshot:",r),await Ic(t,r)}}async function Ic(t,e,n){if(!ul(e))throw e;t.F_.add(1),await hl(t),t.O_.set("Offline"),n||(n=()=>LI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await n(),t.F_.delete(1),await Sf(t)})}function HI(t,e){return e().catch(n=>Ic(t,n,e))}async function Af(t){const e=ae(t),n=Gr(e);let r=e.C_.length>0?e.C_[e.C_.length-1].batchId:-1;for(;dD(e);)try{const i=await Xx(e.localStore,r);if(i===null){e.C_.length===0&&n.e_();break}r=i.batchId,pD(e,i)}catch(i){await Ic(e,i)}WI(e)&&KI(e)}function dD(t){return Ui(t)&&t.C_.length<10}function pD(t,e){t.C_.push(e);const n=Gr(t);n.Yo()&&n.I_&&n.d_(e.mutations)}function WI(t){return Ui(t)&&!Gr(t).Jo()&&t.C_.length>0}function KI(t){Gr(t).start()}async function mD(t){Gr(t).A_()}async function gD(t){const e=Gr(t);for(const n of t.C_)e.d_(n.mutations)}async function vD(t,e,n){const r=t.C_.shift(),i=Ig.from(r,e,n);await HI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Af(t)}async function yD(t,e){e&&Gr(t).I_&&await async function(r,i){if(function(o){return lx(o)&&o!==D.ABORTED}(i.code)){const s=r.C_.shift();Gr(r).Xo(),await HI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Af(r)}}(t,e),WI(t)&&KI(t)}async function r0(t,e){const n=ae(t);n.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const r=Ui(n);n.F_.add(3),await hl(n),r&&n.O_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.F_.delete(3),await Sf(n)}async function _D(t,e){const n=ae(t);e?(n.F_.delete(2),await Sf(n)):e||(n.F_.add(2),await hl(n),n.O_.set("Unknown"))}function ro(t){return t.B_||(t.B_=function(n,r,i){const s=ae(n);return s.V_(),new sD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Io:cD.bind(null,t),Eo:fD.bind(null,t),c_:hD.bind(null,t)}),t.M_.push(async e=>{e?(t.B_.Xo(),bg(t)?Cg(t):t.O_.set("Unknown")):(await t.B_.stop(),BI(t))})),t.B_}function Gr(t){return t.L_||(t.L_=function(n,r,i){const s=ae(n);return s.V_(),new oD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Io:mD.bind(null,t),Eo:yD.bind(null,t),E_:gD.bind(null,t),T_:vD.bind(null,t)}),t.M_.push(async e=>{e?(t.L_.Xo(),await Af(t)):(await t.L_.stop(),t.C_.length>0&&(B("RemoteStore",`Stopping write stream with ${t.C_.length} pending writes`),t.C_=[]))})),t.L_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Fr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new xg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Dg(t,e){if(nr("AsyncQueue",`${e}: ${t}`),ul(t))return new G(D.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Q.comparator(n.key,r.key):(n,r)=>Q.comparator(n.key,r.key),this.keyedMap=Do(),this.sortedSet=new Fe(this.comparator)}static emptySet(e){return new Ss(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ss)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ss;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(){this.k_=new Fe(Q.comparator)}track(e){const n=e.doc.key,r=this.k_.get(n);r?e.type!==0&&r.type===3?this.k_=this.k_.insert(n,e):e.type===3&&r.type!==1?this.k_=this.k_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.k_=this.k_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.k_=this.k_.remove(n):e.type===1&&r.type===2?this.k_=this.k_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):J():this.k_=this.k_.insert(n,e)}q_(){const e=[];return this.k_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Bs{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Bs(e,n,Ss.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ED{constructor(){this.Q_=void 0,this.listeners=[]}}class wD{constructor(){this.queries=new no(e=>pI(e),yf),this.onlineState="Unknown",this.K_=new Set}}async function ID(t,e){const n=ae(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new ED),i)try{s.Q_=await n.onListen(r)}catch(o){const a=Dg(o,`Initialization of query '${Gi(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.U_(n.onlineState),s.Q_&&e.W_(s.Q_)&&Ng(n)}async function TD(t,e){const n=ae(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function SD(t,e){const n=ae(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.W_(i)&&(r=!0);o.Q_=i}}r&&Ng(n)}function AD(t,e,n){const r=ae(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Ng(t){t.K_.forEach(e=>{e.next()})}class kD{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Bs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=Bs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e){this.key=e}}class qI{constructor(e){this.key=e}}class PD{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=fe(),this.mutatedKeys=fe(),this.ua=mI(e),this.ca=new Ss(this.ua)}get la(){return this.oa}ha(e,n){const r=n?n.Pa:new i0,i=n?n.ca:this.ca;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,f)=>{const h=i.get(c),m=_f(this.query,f)?f:null,y=!!h&&this.mutatedKeys.has(h.key),_=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let w=!1;h&&m?h.data.isEqual(m.data)?y!==_&&(r.track({type:3,doc:m}),w=!0):this.Ia(h,m)||(r.track({type:2,doc:m}),w=!0,(l&&this.ua(m,l)>0||u&&this.ua(m,u)<0)&&(a=!0)):!h&&m?(r.track({type:0,doc:m}),w=!0):h&&!m&&(r.track({type:1,doc:h}),w=!0,(l||u)&&(a=!0)),w&&(m?(o=o.add(m),s=_?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ca:o,Pa:r,es:a,mutatedKeys:s}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const s=e.Pa.q_();s.sort((u,c)=>function(h,m){const y=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return y(h)-y(m)}(u.type,c.type)||this.ua(u.doc,c.doc)),this.da(r);const o=n?this.Ta():[],a=this.aa.size===0&&this.current?1:0,l=a!==this._a;return this._a=a,s.length!==0||l?{snapshot:new Bs(this.query,e.ca,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:o}:{Ea:o}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new i0,mutatedKeys:this.mutatedKeys,es:!1},!1)):{Ea:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}da(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ta(){if(!this.current)return[];const e=this.aa;this.aa=fe(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new qI(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new GI(r))}),n}Ra(e){this.oa=e.Ps,this.aa=fe();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return Bs.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class RD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class CD{constructor(e){this.key=e,this.ma=!1}}class bD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new no(a=>pI(a),yf),this.pa=new Map,this.ya=new Set,this.wa=new Fe(Q.comparator),this.Sa=new Map,this.ba=new Ag,this.Da={},this.Ca=new Map,this.va=zs.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function xD(t,e){const n=$D(t);let r,i;const s=n.ga.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const o=await Jx(n.localStore,Rn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await DD(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&UI(n.remoteStore,o)}return i}async function DD(t,e,n,r,i){t.Ma=(f,h,m)=>async function(_,w,v,p){let g=w.view.ha(v);g.es&&(g=await e0(_.localStore,w.query,!1).then(({documents:k})=>w.view.ha(k,g)));const d=p&&p.targetChanges.get(w.targetId),I=w.view.applyChanges(g,_.isPrimaryClient,d);return o0(_,w.targetId,I.Ea),I.snapshot}(t,f,h,m);const s=await e0(t.localStore,e,!0),o=new PD(e,s.Ps),a=o.ha(s.documents),l=fl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);o0(t,n,u.Ea);const c=new RD(e,n,o);return t.ga.set(e,c),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),u.snapshot}async function ND(t,e){const n=ae(t),r=n.ga.get(e),i=n.pa.get(r.targetId);if(i.length>1)return n.pa.set(r.targetId,i.filter(s=>!yf(s,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Pp(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),$I(n.remoteStore,r.targetId),Rp(n,r.targetId)}).catch(ll)):(Rp(n,r.targetId),await Pp(n.localStore,r.targetId,!0))}async function OD(t,e,n){const r=zD(t);try{const i=await function(o,a){const l=ae(o),u=et.now(),c=a.reduce((m,y)=>m.add(y.key),fe());let f,h;return l.persistence.runTransaction("Locally write mutations","readwrite",m=>{let y=rr(),_=fe();return l._s.getEntries(m,c).next(w=>{y=w,y.forEach((v,p)=>{p.isValidDocument()||(_=_.add(v))})}).next(()=>l.localDocuments.getOverlayedDocuments(m,y)).next(w=>{f=w;const v=[];for(const p of a){const g=rx(p,f.get(p.key).overlayedDocument);g!=null&&v.push(new Zr(p.key,g,oI(g.value.mapValue),mn.exists(!0)))}return l.mutationQueue.addMutationBatch(m,u,v,a)}).next(w=>{h=w;const v=w.applyToLocalDocumentSet(f,_);return l.documentOverlayCache.saveOverlays(m,w.batchId,v)})}).then(()=>({batchId:h.batchId,changes:vI(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Da[o.currentUser.toKey()];u||(u=new Fe(ve)),u=u.insert(a,l),o.Da[o.currentUser.toKey()]=u}(r,i.batchId,n),await dl(r,i.changes),await Af(r.remoteStore)}catch(i){const s=Dg(i,"Failed to persist write");n.reject(s)}}async function QI(t,e){const n=ae(t);try{const r=await Qx(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Sa.get(s);o&&(Ce(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ma=!0:i.modifiedDocuments.size>0?Ce(o.ma):i.removedDocuments.size>0&&(Ce(o.ma),o.ma=!1))}),await dl(n,r,e)}catch(r){await ll(r)}}function s0(t,e,n){const r=ae(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ga.forEach((s,o)=>{const a=o.view.U_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=ae(o);l.onlineState=a;let u=!1;l.queries.forEach((c,f)=>{for(const h of f.listeners)h.U_(a)&&(u=!0)}),u&&Ng(l)}(r.eventManager,e),i.length&&r.fa.c_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function MD(t,e,n){const r=ae(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Sa.get(e),s=i&&i.key;if(s){let o=new Fe(Q.comparator);o=o.insert(s,_t.newNoDocument(s,re.min()));const a=fe().add(s),l=new If(re.min(),new Map,new Fe(ve),o,a);await QI(r,l),r.wa=r.wa.remove(s),r.Sa.delete(e),Og(r)}else await Pp(r.localStore,e,!1).then(()=>Rp(r,e,n)).catch(ll)}async function VD(t,e){const n=ae(t),r=e.batch.batchId;try{const i=await qx(n.localStore,e);XI(n,r,null),YI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await dl(n,i)}catch(i){await ll(i)}}async function LD(t,e,n){const r=ae(t);try{const i=await function(o,a){const l=ae(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(f=>(Ce(f!==null),c=f.keys(),l.mutationQueue.removeMutationBatch(u,f))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);XI(r,e,n),YI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await dl(r,i)}catch(i){await ll(i)}}function YI(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function XI(t,e,n){const r=ae(t);let i=r.Da[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Da[r.currentUser.toKey()]=i}}function Rp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.mr(e).forEach(r=>{t.ba.containsKey(r)||JI(t,r)})}function JI(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&($I(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),Og(t))}function o0(t,e,n){for(const r of n)r instanceof GI?(t.ba.addReference(r.key,e),FD(t,r)):r instanceof qI?(B("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||JI(t,r.key)):J()}function FD(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(B("SyncEngine","New document in limbo: "+n),t.ya.add(r),Og(t))}function Og(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new Q(xe.fromString(e)),r=t.va.next();t.Sa.set(r,new CD(n)),t.wa=t.wa.insert(n,r),UI(t.remoteStore,new kr(Rn(dI(n.path)),r,"TargetPurposeLimboResolution",mg.ae))}}async function dl(t,e,n){const r=ae(t),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,l)=>{o.push(r.Ma(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Pg.$i(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.fa.c_(i),await async function(l,u){const c=ae(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>N.forEach(u,h=>N.forEach(h.Qi,m=>c.persistence.referenceDelegate.addReference(f,h.targetId,m)).next(()=>N.forEach(h.Ki,m=>c.persistence.referenceDelegate.removeReference(f,h.targetId,m)))))}catch(f){if(!ul(f))throw f;B("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const h=f.targetId;if(!f.fromCache){const m=c.rs.get(h),y=m.snapshotVersion,_=m.withLastLimboFreeSnapshotVersion(y);c.rs=c.rs.insert(h,_)}}}(r.localStore,s))}async function jD(t,e){const n=ae(t);if(!n.currentUser.isEqual(e)){B("SyncEngine","User change. New user:",e.toKey());const r=await VI(n.localStore,e);n.currentUser=e,function(s,o){s.Ca.forEach(a=>{a.forEach(l=>{l.reject(new G(D.CANCELLED,o))})}),s.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await dl(n,r.cs)}}function UD(t,e){const n=ae(t),r=n.Sa.get(e);if(r&&r.ma)return fe().add(r.key);{let i=fe();const s=n.pa.get(e);if(!s)return i;for(const o of s){const a=n.ga.get(o);i=i.unionWith(a.view.la)}return i}}function $D(t){const e=ae(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=QI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=UD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=MD.bind(null,e),e.fa.c_=SD.bind(null,e.eventManager),e.fa.xa=AD.bind(null,e.eventManager),e}function zD(t){const e=ae(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=VD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=LD.bind(null,e),e}class a0{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Tf(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Gx(this.persistence,new Wx,e.initialUser,this.serializer)}createPersistence(e){return new zx(kg.Jr,this.serializer)}createSharedClientState(e){return new eD}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class BD{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>s0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=jD.bind(null,this.syncEngine),await _D(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new wD}()}createDatastore(e){const n=Tf(e.databaseInfo.databaseId),r=function(s){return new iD(s)}(e.databaseInfo);return function(s,o,a,l){return new aD(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new uD(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>s0(this.syncEngine,n,0),function(){return n0.C()?new n0:new tD}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const f=new bD(i,s,o,a,l,u);return c&&(f.Fa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=ae(n);B("RemoteStore","RemoteStore shutting down."),r.F_.add(5),await hl(r),r.x_.shutdown(),r.O_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HD{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):nr("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=vt.UNAUTHENTICATED,this.clientId=rI.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{B("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(B("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new G(D.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Fr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Dg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function $h(t,e){t.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await VI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function l0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await GD(t);B("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>r0(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>r0(e.remoteStore,s)),t._onlineComponents=e}function KD(t){return t.name==="FirebaseError"?t.code===D.FAILED_PRECONDITION||t.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function GD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){B("FirestoreClient","Using user provided OfflineComponentProvider");try{await $h(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!KD(n))throw n;Fs("Error using user provided cache. Falling back to memory cache: "+n),await $h(t,new a0)}}else B("FirestoreClient","Using default OfflineComponentProvider"),await $h(t,new a0);return t._offlineComponents}async function ZI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(B("FirestoreClient","Using user provided OnlineComponentProvider"),await l0(t,t._uninitializedComponentsProvider._online)):(B("FirestoreClient","Using default OnlineComponentProvider"),await l0(t,new BD))),t._onlineComponents}function qD(t){return ZI(t).then(e=>e.syncEngine)}async function QD(t){const e=await ZI(t),n=e.eventManager;return n.onListen=xD.bind(null,e.syncEngine),n.onUnlisten=ND.bind(null,e.syncEngine),n}function YD(t,e,n={}){const r=new Fr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new HD({next:h=>{o.enqueueAndForget(()=>TD(s,f)),h.fromCache&&l.source==="server"?u.reject(new G(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),f=new kD(a,c,{includeMetadataChanges:!0,Z_:!0});return ID(s,f)}(await QD(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(t,e,n){if(!n)throw new G(D.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function XD(t,e,n,r){if(e===!0&&r===!0)throw new G(D.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function c0(t){if(!Q.isDocumentKey(t))throw new G(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function f0(t){if(Q.isDocumentKey(t))throw new G(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Mg(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function Oi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Mg(t);throw new G(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new G(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new G(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}XD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=eT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new G(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new G(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new G(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class kf{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new h0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new G(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new G(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new h0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new fb;switch(r.type){case"firstParty":return new mb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=u0.get(n);r&&(B("ComponentProvider","Removing Datastore"),u0.delete(n),r.terminate())}(this),Promise.resolve()}}function JD(t,e,n,r={}){var i;const s=(t=Oi(t,kf))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Fs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=vt.MOCK_USER;else{a=F4(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new G(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new vt(u)}t._authCredentials=new hb(new nI(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Pf(this.firestore,e,this._query)}}class nn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new jr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new nn(this.firestore,e,this._key)}}class jr extends Pf{constructor(e,n,r){super(e,n,dI(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new nn(this.firestore,null,new Q(e))}withConverter(e){return new jr(this.firestore,e,this._path)}}function Rf(t,e,...n){if(t=bt(t),tT("collection","path",e),t instanceof kf){const r=xe.fromString(e,...n);return f0(r),new jr(t,null,r)}{if(!(t instanceof nn||t instanceof jr))throw new G(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xe.fromString(e,...n));return f0(r),new jr(t.firestore,null,r)}}function nT(t,e,...n){if(t=bt(t),arguments.length===1&&(e=rI.V()),tT("doc","path",e),t instanceof kf){const r=xe.fromString(e,...n);return c0(r),new nn(t,null,new Q(r))}{if(!(t instanceof nn||t instanceof jr))throw new G(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xe.fromString(e,...n));return c0(r),new nn(t.firestore,t instanceof jr?t.converter:null,new Q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new FI(this,"async_queue_retry"),this.ou=()=>{const n=Uh();n&&B("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ho.$o()};const e=Uh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;const n=Uh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});const n=new Fr;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}async uu(){if(this.Xa.length!==0){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!ul(e))throw e;B("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(e){const n=this.Za.then(()=>(this.ru=!0,e().catch(r=>{this.nu=r,this.ru=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw nr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.ru=!1,r))));return this.Za=n,n}enqueueAfterDelay(e,n,r){this._u(),this.su.indexOf(e)>-1&&(n=0);const i=xg.createAndSchedule(this,e,n,r,s=>this.cu(s));return this.tu.push(i),i}_u(){this.nu&&J()}verifyOperationInProgress(){}async lu(){let e;do e=this.Za,await e;while(e!==this.Za)}hu(e){for(const n of this.tu)if(n.timerId===e)return!0;return!1}Pu(e){return this.lu().then(()=>{this.tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lu()})}Iu(e){this.su.push(e)}cu(e){const n=this.tu.indexOf(e);this.tu.splice(n,1)}}class pl extends kf{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new ZD}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||iT(this),this._firestoreClient.terminate()}}function eN(t,e){const n=typeof t=="object"?t:Xw(),r=typeof t=="string"?t:e||"(default)",i=Wm(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=V4("firestore");s&&JD(i,...s)}return i}function rT(t){return t._firestoreClient||iT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function iT(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new Pb(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,eT(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new WD(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Hs(kt.fromBase64String(e))}catch(n){throw new G(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Hs(kt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tN=/^__.*__$/;class nN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Zr(e,this.data,this.fieldMask,n,this.fieldTransforms):new cl(e,this.data,n,this.fieldTransforms)}}class sT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Zr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function oT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class Fg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.du(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new Fg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Eu({path:r,Ru:!1});return i.Vu(e),i}mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Eu({path:r,Ru:!1});return i.du(),i}fu(e){return this.Eu({path:void 0,Ru:!0})}gu(e){return Tc(e,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}du(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vu(this.path.get(e))}Vu(e){if(e.length===0)throw this.gu("Document fields must not be empty");if(oT(this.Tu)&&tN.test(e))throw this.gu('Document fields cannot begin and end with "__"')}}class rN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Tf(e)}wu(e,n,r,i=!1){return new Fg({Tu:e,methodName:n,yu:r,path:Et.emptyPath(),Ru:!1,pu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function aT(t){const e=t._freezeSettings(),n=Tf(t._databaseId);return new rN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function iN(t,e,n,r,i,s={}){const o=t.wu(s.merge||s.mergeFields?2:0,e,n,i);jg("Data must be an object, but it was:",o,r);const a=lT(r,o);let l,u;if(s.merge)l=new Bt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const f of s.mergeFields){const h=Cp(e,f,n);if(!o.contains(h))throw new G(D.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);cT(c,h)||c.push(h)}l=new Bt(c),u=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,u=o.fieldTransforms;return new nN(new Mt(a),l,u)}class bf extends Vg{_toFieldTransform(e){if(e.Tu!==2)throw e.Tu===1?e.gu(`${this._methodName}() can only appear at the top level of your update data`):e.gu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof bf}}function sN(t,e,n,r){const i=t.wu(1,e,n);jg("Data must be an object, but it was:",i,r);const s=[],o=Mt.empty();ji(r,(l,u)=>{const c=Ug(e,l,n);u=bt(u);const f=i.mu(c);if(u instanceof bf)s.push(c);else{const h=xf(u,f);h!=null&&(s.push(c),o.set(c,h))}});const a=new Bt(s);return new sT(o,a,i.fieldTransforms)}function oN(t,e,n,r,i,s){const o=t.wu(1,e,n),a=[Cp(e,r,n)],l=[i];if(s.length%2!=0)throw new G(D.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<s.length;h+=2)a.push(Cp(e,s[h])),l.push(s[h+1]);const u=[],c=Mt.empty();for(let h=a.length-1;h>=0;--h)if(!cT(u,a[h])){const m=a[h];let y=l[h];y=bt(y);const _=o.mu(m);if(y instanceof bf)u.push(m);else{const w=xf(y,_);w!=null&&(u.push(m),c.set(m,w))}}const f=new Bt(u);return new sT(c,f,o.fieldTransforms)}function xf(t,e){if(uT(t=bt(t)))return jg("Unsupported field value:",e,t),lT(t,e);if(t instanceof Vg)return function(r,i){if(!oT(i.Tu))throw i.gu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.gu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ru&&e.Tu!==4)throw e.gu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=xf(a,i.fu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=bt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Xb(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=et.fromDate(r);return{timestampValue:wc(i.serializer,s)}}if(r instanceof et){const s=new et(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:wc(i.serializer,s)}}if(r instanceof Lg)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Hs)return{bytesValue:bI(i.serializer,r._byteString)};if(r instanceof nn){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.gu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Sg(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.gu(`Unsupported field value: ${Mg(r)}`)}(t,e)}function lT(t,e){const n={};return iI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ji(t,(r,i)=>{const s=xf(i,e.Au(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function uT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof et||t instanceof Lg||t instanceof Hs||t instanceof nn||t instanceof Vg)}function jg(t,e,n){if(!uT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Mg(n);throw r==="an object"?e.gu(t+" a custom object"):e.gu(t+" "+r)}}function Cp(t,e,n){if((e=bt(e))instanceof Cf)return e._internalPath;if(typeof e=="string")return Ug(t,e);throw Tc("Field path arguments must be of type string or ",t,!1,void 0,n)}const aN=new RegExp("[~\\*/\\[\\]]");function Ug(t,e,n){if(e.search(aN)>=0)throw Tc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Cf(...e.split("."))._internalPath}catch{throw Tc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Tc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new G(D.INVALID_ARGUMENT,a+t+l)}function cT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new nn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new lN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(hT("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class lN extends fT{data(){return super.data()}}function hT(t,e){return typeof e=="string"?Ug(t,e):e instanceof Cf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new G(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class cN{convertValue(e,n="none"){switch(Ni(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Di(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw J()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ji(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Lg(qe(e.latitude),qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=vg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Oa(e));default:return null}}convertTimestamp(e){const n=Kr(e);return new et(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=xe.fromString(e);Ce(MI(r));const i=new Ma(r.get(1),r.get(3)),s=new Q(r.popFirst(5));return i.isEqual(n)||nr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fN(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class hN extends fT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Au(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(hT("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Au extends hN{data(e={}){return super.data(e)}}class dN{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ou(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Au(this._firestore,this._userDataWriter,r.key,r,new ou(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new G(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Au(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ou(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Au(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ou(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:pN(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function pN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J()}}class mN extends cN{constructor(e){super(),this.firestore=e}convertBytes(e){return new Hs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new nn(this.firestore,null,n)}}function dT(t){t=Oi(t,Pf);const e=Oi(t.firestore,pl),n=rT(e),r=new mN(e);return uN(t._query),YD(n,t._query).then(i=>new dN(e,r,t,i))}function gN(t,e,n,...r){t=Oi(t,nn);const i=Oi(t.firestore,pl),s=aT(i);let o;return o=typeof(e=bt(e))=="string"||e instanceof Cf?oN(s,"updateDoc",t._key,e,n,r):sN(s,"updateDoc",t._key,e),$g(i,[o.toMutation(t._key,mn.exists(!0))])}function vN(t){return $g(Oi(t.firestore,pl),[new wg(t._key,mn.none())])}function pT(t,e){const n=Oi(t.firestore,pl),r=nT(t),i=fN(t.converter,e);return $g(n,[iN(aT(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,mn.exists(!1))]).then(()=>r)}function $g(t,e){return function(r,i){const s=new Fr;return r.asyncQueue.enqueueAndForget(async()=>OD(await qD(r),i,s)),s.promise}(rT(t),e)}(function(e,n=!0){(function(i){to=i})(Js),Vs(new Ci("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new pl(new db(r.getProvider("auth-internal")),new vb(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new G(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ma(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Lr(O1,"4.2.0",e),Lr(O1,"4.2.0","esm2017")})();function zg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function mT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yN=mT,gT=new Ja("auth","Firebase",mT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc=new Bm("@firebase/auth");function _N(t,...e){Sc.logLevel<=de.WARN&&Sc.warn(`Auth (${Js}): ${t}`,...e)}function ku(t,...e){Sc.logLevel<=de.ERROR&&Sc.error(`Auth (${Js}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(t,...e){throw Bg(t,...e)}function bn(t,...e){return Bg(t,...e)}function vT(t,e,n){const r=Object.assign(Object.assign({},yN()),{[e]:n});return new Ja("auth","Firebase",r).create(e,{appName:t.name})}function EN(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&On(t,"argument-error"),vT(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Bg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return gT.create(t,...e)}function ie(t,e,...n){if(!t)throw Bg(e,...n)}function Hn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ku(e),new Error(e)}function ir(t,e){t||Hn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function wN(){return d0()==="http:"||d0()==="https:"}function d0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wN()||U4()||"connection"in navigator)?navigator.onLine:!0}function TN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e,n){this.shortDelay=e,this.longDelay=n,ir(n>e,"Short delay should be less than long delay!"),this.isMobile=j4()||$4()}get(){return IN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(t,e){ir(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Hn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Hn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Hn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AN=new ml(3e4,6e4);function _T(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function gl(t,e,n,r,i={}){return ET(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Za(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),yT.fetch()(wT(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function ET(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},SN),e);try{const i=new PN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw au(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw au(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw au(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw au(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw vT(t,c,u);On(t,c)}}catch(i){if(i instanceof ur)throw i;On(t,"network-request-failed",{message:String(i)})}}async function kN(t,e,n,r,i={}){const s=await gl(t,e,n,r,i);return"mfaPendingCredential"in s&&On(t,"multi-factor-auth-required",{_serverResponse:s}),s}function wT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Hg(t.config,i):`${t.config.apiScheme}://${i}`}class PN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(bn(this.auth,"network-request-failed")),AN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function au(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=bn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RN(t,e){return gl(t,"POST","/v1/accounts:delete",e)}async function CN(t,e){return gl(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bN(t,e=!1){const n=bt(t),r=await n.getIdToken(e),i=Wg(r);ie(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Jo(zh(i.auth_time)),issuedAtTime:Jo(zh(i.iat)),expirationTime:Jo(zh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function zh(t){return Number(t)*1e3}function Wg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ku("JWT malformed, contained fewer than 3 sections"),null;try{const i=Hw(n);return i?JSON.parse(i):(ku("Failed to decode base64 JWT payload"),null)}catch(i){return ku("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function xN(t){const e=Wg(t);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ja(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ur&&DN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function DN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Jo(this.lastLoginAt),this.creationTime=Jo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ac(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ja(t,CN(n,{idToken:r}));ie(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?VN(s.providerUserInfo):[],a=MN(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new IT(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function ON(t){const e=bt(t);await Ac(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function MN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function VN(t){return t.map(e=>{var{providerId:n}=e,r=zg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LN(t,e){const n=await ET(t,{},async()=>{const r=Za({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=wT(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",yT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ie(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await LN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ua;return r&&(ie(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ie(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ie(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ua,this.toJSON())}_performRefresh(){return Hn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(t,e){ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class _i{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=zg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new NN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new IT(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ja(this,this.stsTokenManager.getToken(this.auth,e));return ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return bN(this,e)}reload(){return ON(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new _i(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ac(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ja(this,RN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:d,isAnonymous:I,providerData:k,stsTokenManager:P}=n;ie(g&&P,e,"internal-error");const E=Ua.fromJSON(this.name,P);ie(typeof g=="string",e,"internal-error"),pr(f,e.name),pr(h,e.name),ie(typeof d=="boolean",e,"internal-error"),ie(typeof I=="boolean",e,"internal-error"),pr(m,e.name),pr(y,e.name),pr(_,e.name),pr(w,e.name),pr(v,e.name),pr(p,e.name);const R=new _i({uid:g,auth:e,email:h,emailVerified:d,displayName:f,isAnonymous:I,photoURL:y,phoneNumber:m,tenantId:_,stsTokenManager:E,createdAt:v,lastLoginAt:p});return k&&Array.isArray(k)&&(R.providerData=k.map(C=>Object.assign({},C))),w&&(R._redirectEventId=w),R}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ua;i.updateFromServerResponse(n);const s=new _i({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ac(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0=new Map;function Wn(t){ir(t instanceof Function,"Expected a class definition");let e=p0.get(t);return e?(ir(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,p0.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}TT.type="NONE";const m0=TT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(t,e,n){return`firebase:${t}:${e}:${n}`}class As{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Pu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Pu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_i._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new As(Wn(m0),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Wn(m0);const o=Pu(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const f=_i._fromJSON(e,c);u!==s&&(a=f),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new As(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new As(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ST(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(RT(e))return"Blackberry";if(CT(e))return"Webos";if(Kg(e))return"Safari";if((e.includes("chrome/")||AT(e))&&!e.includes("edge/"))return"Chrome";if(PT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ST(t=At()){return/firefox\//i.test(t)}function Kg(t=At()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function AT(t=At()){return/crios\//i.test(t)}function kT(t=At()){return/iemobile/i.test(t)}function PT(t=At()){return/android/i.test(t)}function RT(t=At()){return/blackberry/i.test(t)}function CT(t=At()){return/webos/i.test(t)}function Df(t=At()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function FN(t=At()){var e;return Df(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function jN(){return z4()&&document.documentMode===10}function bT(t=At()){return Df(t)||PT(t)||CT(t)||RT(t)||/windows phone/i.test(t)||kT(t)}function UN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xT(t,e=[]){let n;switch(t){case"Browser":n=g0(At());break;case"Worker":n=`${g0(At())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Js}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zN(t,e={}){return gl(t,"GET","/v2/passwordPolicy",_T(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BN=6;class HN{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:BN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new v0(this),this.idTokenSubscription=new v0(this),this.beforeStateQueue=new $N(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Wn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await As.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ac(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=TN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?bt(e):null;return n&&ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Wn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await zN(this),n=new HN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ja("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Wn(e)||this._popupRedirectResolver;ie(n,this,"argument-error"),this.redirectPersistenceManager=await As.create(this,[Wn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&_N(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Nf(t){return bt(t)}class v0{constructor(e){this.auth=e,this.observer=null,this.addObserver=Q4(n=>this.observer=n)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function GN(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=bn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",KN().appendChild(r)})}function qN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QN(t,e){const n=Wm(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(lc(s,e??{}))return i;On(i,"already-initialized")}return n.initialize({options:e})}function YN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Wn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function XN(t,e,n){const r=Nf(t);ie(r._canInitEmulator,r,"emulator-config-failed"),ie(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=DT(e),{host:o,port:a}=JN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||ZN()}function DT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function JN(t){const e=DT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:y0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:y0(o)}}}function y0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ZN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Hn("not implemented")}_getIdTokenResponse(e){return Hn("not implemented")}_linkToIdToken(e,n){return Hn("not implemented")}_getReauthenticationResolver(e){return Hn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ks(t,e){return kN(t,"POST","/v1/accounts:signInWithIdp",_T(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e6="http://localhost";class Mi extends NT{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Mi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):On("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=zg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Mi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ks(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ks(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ks(e,n)}buildRequest(){const e={requestUri:e6,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Za(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl extends Gg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends vl{constructor(){super("facebook.com")}static credential(e){return Mi._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Er.credential(e.oauthAccessToken)}catch{return null}}}Er.FACEBOOK_SIGN_IN_METHOD="facebook.com";Er.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends vl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Mi._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Un.credential(n,r)}catch{return null}}}Un.GOOGLE_SIGN_IN_METHOD="google.com";Un.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends vl{constructor(){super("github.com")}static credential(e){return Mi._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wr.credential(e.oauthAccessToken)}catch{return null}}}wr.GITHUB_SIGN_IN_METHOD="github.com";wr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends vl{constructor(){super("twitter.com")}static credential(e,n){return Mi._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ir.credential(n,r)}catch{return null}}}Ir.TWITTER_SIGN_IN_METHOD="twitter.com";Ir.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await _i._fromIdTokenResponse(e,r,i),o=_0(r);return new Ws({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=_0(r);return new Ws({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function _0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc extends ur{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,kc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new kc(e,n,r,i)}}function OT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?kc._fromErrorAndOperation(t,s,e,r):s})}async function t6(t,e,n=!1){const r=await ja(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ws._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n6(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await ja(t,OT(r,i,e,t),n);ie(s.idToken,r,"internal-error");const o=Wg(s.idToken);ie(o,r,"internal-error");const{sub:a}=o;return ie(t.uid===a,r,"user-mismatch"),Ws._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&On(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r6(t,e,n=!1){const r="signIn",i=await OT(t,r,e),s=await Ws._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function i6(t,e,n,r){return bt(t).onIdTokenChanged(e,n,r)}function s6(t,e,n){return bt(t).beforeAuthStateChanged(e,n)}function o6(t){return bt(t).signOut()}const Pc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Pc,"1"),this.storage.removeItem(Pc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a6(){const t=At();return Kg(t)||Df(t)}const l6=1e3,u6=10;class VT extends MT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=a6()&&UN(),this.fallbackToPolling=bT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);jN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,u6):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},l6)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}VT.type="LOCAL";const c6=VT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT extends MT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}LT.type="SESSION";const FT=LT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f6(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Of(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await f6(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Of.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h6{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=qg("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const h=f;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(){return window}function d6(t){xn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jT(){return typeof xn().WorkerGlobalScope<"u"&&typeof xn().importScripts=="function"}async function p6(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function m6(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function g6(){return jT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT="firebaseLocalStorageDb",v6=1,Rc="firebaseLocalStorage",$T="fbase_key";class yl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Mf(t,e){return t.transaction([Rc],e?"readwrite":"readonly").objectStore(Rc)}function y6(){const t=indexedDB.deleteDatabase(UT);return new yl(t).toPromise()}function xp(){const t=indexedDB.open(UT,v6);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Rc,{keyPath:$T})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Rc)?e(r):(r.close(),await y6(),e(await xp()))})})}async function E0(t,e,n){const r=Mf(t,!0).put({[$T]:e,value:n});return new yl(r).toPromise()}async function _6(t,e){const n=Mf(t,!1).get(e),r=await new yl(n).toPromise();return r===void 0?null:r.value}function w0(t,e){const n=Mf(t,!0).delete(e);return new yl(n).toPromise()}const E6=800,w6=3;class zT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>w6)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Of._getInstance(g6()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await p6(),!this.activeServiceWorker)return;this.sender=new h6(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||m6()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xp();return await E0(e,Pc,"1"),await w0(e,Pc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>E0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>_6(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>w0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Mf(i,!1).getAll();return new yl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),E6)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zT.type="LOCAL";const I6=zT;new ml(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BT(t,e){return e?Wn(e):(ie(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg extends NT{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ks(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ks(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ks(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function T6(t){return r6(t.auth,new Qg(t),t.bypassAuthState)}function S6(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),n6(n,new Qg(t),t.bypassAuthState)}async function A6(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),t6(n,new Qg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return T6;case"linkViaPopup":case"linkViaRedirect":return A6;case"reauthViaPopup":case"reauthViaRedirect":return S6;default:On(this.auth,"internal-error")}}resolve(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k6=new ml(2e3,1e4);async function P6(t,e,n){const r=Nf(t);EN(t,e,Gg);const i=BT(r,n);return new mi(r,"signInViaPopup",e,i).executeNotNull()}class mi extends HT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,mi.currentPopupAction&&mi.currentPopupAction.cancel(),mi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){ir(this.filter.length===1,"Popup operations only handle one event");const e=qg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(bn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(bn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(bn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,k6.get())};e()}}mi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R6="pendingRedirect",Ru=new Map;class C6 extends HT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ru.get(this.auth._key());if(!e){try{const r=await b6(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ru.set(this.auth._key(),e)}return this.bypassAuthState||Ru.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function b6(t,e){const n=N6(e),r=D6(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function x6(t,e){Ru.set(t._key(),e)}function D6(t){return Wn(t._redirectPersistence)}function N6(t){return Pu(R6,t.config.apiKey,t.name)}async function O6(t,e,n=!1){const r=Nf(t),i=BT(r,e),o=await new C6(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M6=10*60*1e3;class V6{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!L6(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!WT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(bn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=M6&&this.cachedEventUids.clear(),this.cachedEventUids.has(I0(e))}saveEventToCache(e){this.cachedEventUids.add(I0(e)),this.lastProcessedEventTime=Date.now()}}function I0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function WT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function L6(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return WT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F6(t,e={}){return gl(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j6=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,U6=/^https?/;async function $6(t){if(t.config.emulator)return;const{authorizedDomains:e}=await F6(t);for(const n of e)try{if(z6(n))return}catch{}On(t,"unauthorized-domain")}function z6(t){const e=bp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!U6.test(n))return!1;if(j6.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B6=new ml(3e4,6e4);function T0(){const t=xn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function H6(t){return new Promise((e,n)=>{var r,i,s;function o(){T0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{T0(),n(bn(t,"network-request-failed"))},timeout:B6.get()})}if(!((i=(r=xn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=xn().gapi)===null||s===void 0)&&s.load)o();else{const a=qN("iframefcb");return xn()[a]=()=>{gapi.load?o():n(bn(t,"network-request-failed"))},GN(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Cu=null,e})}let Cu=null;function W6(t){return Cu=Cu||H6(t),Cu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K6=new ml(5e3,15e3),G6="__/auth/iframe",q6="emulator/auth/iframe",Q6={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Y6=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function X6(t){const e=t.config;ie(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Hg(e,q6):`https://${t.config.authDomain}/${G6}`,r={apiKey:e.apiKey,appName:t.name,v:Js},i=Y6.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Za(r).slice(1)}`}async function J6(t){const e=await W6(t),n=xn().gapi;return ie(n,t,"internal-error"),e.open({where:document.body,url:X6(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Q6,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=bn(t,"network-request-failed"),a=xn().setTimeout(()=>{s(o)},K6.get());function l(){xn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z6={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},e9=500,t9=600,n9="_blank",r9="http://localhost";class S0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function i9(t,e,n,r=e9,i=t9){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Z6),{width:r.toString(),height:i.toString(),top:s,left:o}),u=At().toLowerCase();n&&(a=AT(u)?n9:n),ST(u)&&(e=e||r9,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[m,y])=>`${h}${m}=${y},`,"");if(FN(u)&&a!=="_self")return s9(e||"",a),new S0(null);const f=window.open(e||"",a,c);ie(f,t,"popup-blocked");try{f.focus()}catch{}return new S0(f)}function s9(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o9="__/auth/handler",a9="emulator/auth/handler",l9=encodeURIComponent("fac");async function A0(t,e,n,r,i,s){ie(t.config.authDomain,t,"auth-domain-config-required"),ie(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Js,eventId:i};if(e instanceof Gg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",q4(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,f]of Object.entries(s||{}))o[c]=f}if(e instanceof vl){const c=e.getScopes().filter(f=>f!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${l9}=${encodeURIComponent(l)}`:"";return`${u9(t)}?${Za(a).slice(1)}${u}`}function u9({config:t}){return t.emulator?Hg(t,a9):`https://${t.authDomain}/${o9}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh="webStorageSupport";class c9{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=FT,this._completeRedirectFn=O6,this._overrideRedirectResult=x6}async _openPopup(e,n,r,i){var s;ir((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await A0(e,n,r,bp(),i);return i9(e,o,qg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await A0(e,n,r,bp(),i);return d6(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(ir(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await J6(e),r=new V6(e);return n.register("authEvent",i=>(ie(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Bh,{type:Bh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Bh];o!==void 0&&n(!!o),On(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=$6(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return bT()||Kg()||Df()}}const f9=c9;var k0="@firebase/auth",P0="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h9{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d9(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function p9(t){Vs(new Ci("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ie(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xT(t)},u=new WN(r,i,s,l);return YN(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Vs(new Ci("auth-internal",e=>{const n=Nf(e.getProvider("auth").getImmediate());return(r=>new h9(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Lr(k0,P0,d9(t)),Lr(k0,P0,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m9=5*60,g9=Gw("authIdTokenMaxAge")||m9;let R0=null;const v9=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>g9)return;const i=n==null?void 0:n.token;R0!==i&&(R0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function y9(t=Xw()){const e=Wm(t,"auth");if(e.isInitialized())return e.getImmediate();const n=QN(t,{popupRedirectResolver:f9,persistence:[I6,c6,FT]}),r=Gw("authTokenSyncURL");if(r){const s=v9(r);s6(n,s,()=>s(n.currentUser)),i6(n,o=>s(o))}const i=Ww("auth");return i&&XN(n,`http://${i}`),n}p9("Browser");const _9={apiKey:"AIzaSyAhhFomr1pmaq2I8Rke2Hl0z6Q9QUDy3ZI",authDomain:"oc-projectsshowcase.firebaseapp.com",projectId:"oc-projectsshowcase",storageBucket:"oc-projectsshowcase.appspot.com",messagingSenderId:"509870304385",appId:"1:509870304385:web:774ccd8f11fc5d2683"},KT=Yw(_9),$a=eN(KT),C0=y9(KT),E9=new Un;class GT{async getProjectsData(){{const e=Rf($a,"projects");try{return(await dT(e)).docs.map(s=>({...s.data(),id:s.id,rank:typeof s.data().rank=="number"?s.data().rank:1})).sort((s,o)=>s.rank<o.rank?-1:s.rank>o.rank?1:0)}catch(n){console.error(n)}}}}const w9=t=>{const[e]=Ai(qT),[,n]=Ai(_l),[r,i]=O.useState({id:"",name:"",rank:1,illustration:"",closeup:"",techno:[""],description:"",purpose:[""],skills:[""],link:"",repo:"",comment:[""]}),s=(c,f)=>{const h=c.target,m={...r,[f.name]:h.value};i(m)},o=(c,f,h)=>{const m=c.target,y=[...r[f.name]];y[h]=m.value;const _={...r,[f.name]:y};i(_)},a=(c,f)=>{c.preventDefault();const h=[...r[f.name]];h.push("");const m={...r,[f.name]:h};i(m)},l=(c,f,h)=>{c.preventDefault();const m=[...r[f.name]];m.splice(h,1);const y={...r,[f.name]:m};i(y)},u=async c=>{c.preventDefault();const f=async()=>{const m=await new GT().getProjectsData();m&&n(m)};try{await pT(Rf($a,"projects"),r),await f()}catch(h){console.error(h)}t.close()};return A.jsx("div",{className:wo.modale,children:A.jsxs("form",{className:wo.form,children:[A.jsx("h2",{children:"nouveau projet : "}),e.map((c,f)=>A.jsx("div",{className:wo.formField,children:c.type==="string"||c.type==="number"?A.jsxs(A.Fragment,{children:[A.jsx("label",{htmlFor:"modale"+c.name,children:c.display}),A.jsx("input",{type:"text",name:"modale"+c.name,id:"modale"+c.name,value:r[c.name],onInput:h=>s(h,c)})]}):A.jsxs("div",{className:wo.formField,children:[A.jsxs("span",{children:[c.display,A.jsx("button",{onClick:h=>a(h,c),children:"+"})]}),Array.isArray(r[c.name])&&r[c.name].map((h,m)=>A.jsx(O.Fragment,{children:A.jsxs("span",{children:[A.jsx("input",{type:"text",onInput:y=>o(y,c,m),value:h}),A.jsx("button",{onClick:y=>l(y,c,m),children:"X"})]})},"newProjectEntry"+m))]})},"entry-modale"+f)),A.jsxs("div",{className:wo.buttonContainer,children:[A.jsx("button",{onClick:c=>u(c),children:"OK"}),A.jsx("button",{onClick:t.close,children:"Cancel"})]})]})})},I9=async(t,e)=>{const n=nT($a,"projects",t.id);switch(e){case"delete":try{await vN(n)}catch(r){console.error(r)}break;case"update":try{await gN(n,t)}catch(r){console.error(r)}break;case"create":try{await pT(Rf($a,"projects"),t)}catch(r){console.error(r)}}},T9="_title_1sykg_2",S9="_links_1sykg_11",A9="_backLink_1sykg_15",k9="_newProject_1sykg_24",P9="_projectsContainer_1sykg_33",R9="_form_1sykg_42",C9="_label_1sykg_62",b9="_input_1sykg_71",x9="_buttonContainer_1sykg_78",D9="_buttonDelete_1sykg_89",N9="_buttonUpdate_1sykg_94",Ut={title:T9,links:S9,backLink:A9,newProject:k9,projectsContainer:P9,form:R9,label:C9,input:b9,buttonContainer:x9,buttonDelete:D9,buttonUpdate:N9},O9=()=>{const[t,e]=Ai(_l),[n]=Ai(qT),[r,i]=O.useState(t),[s,o]=O.useState(!1),[a,l]=O.useState(""),u=async()=>{try{return(await dT(Rf($a,"moderators"))).docs.map(d=>({...d.data(),id:d.id}))}catch(p){console.error(p)}},c=async()=>{try{const g=(await P6(C0,E9)).user;console.log(g,g.uid);const d=await u();d==null||d.forEach(I=>{I.moderator.includes(g.uid)&&l(g.displayName??"")})}catch(p){console.error(p)}},f=async()=>{l(""),await o6(C0)},h=(p,g,d)=>{const I=p.target,k=g.type==="string"?I.value:parseInt(I.value),P=[...r];P[d]={...P[d],[g.name]:k},i(P)},m=(p,g,d,I)=>{const k=p.target,P=[...r],E=[...P[d][g.name]];E[I]=k.value,P[d]={...P[d],[g.name]:E},i(P)},y=(p,g,d,I)=>{p.preventDefault();const k=[...r],P=[...k[d][g.name]];P.splice(I,1),k[d]={...k[d],[g.name]:P},i(k)},_=(p,g,d)=>{p.preventDefault();const I=[...r],k=[...I[d][g.name]];k.push(""),I[d]={...I[d],[g.name]:k},i(I)};O.useEffect(()=>{i(t)},[t]);const w=(p,g,d)=>{p.preventDefault();const I=t.findIndex(P=>P.id===r[g].id),k=[...t];d==="update"?k[I]=r[g]:k.splice(g,1),e(k),I9(r[g],d)},v=()=>{o(!s)};return A.jsxs("main",{children:[s&&A.jsx(w9,{close:v}),A.jsx("h1",{className:Ut.title,children:"Admin"}),A.jsxs("section",{className:Ut.links,children:[a?A.jsx("button",{onClick:v,className:Ut.newProject,children:"Nouveau Projet"}):A.jsx("button",{onClick:c,children:"sign in"}),A.jsx(ya,{to:"/",className:Ut.backLink,children:"back to home"}),a&&A.jsx("button",{onClick:f,children:"sign out"})]}),a&&A.jsx("section",{className:Ut.projectsContainer,children:r.map((p,g)=>A.jsxs("form",{className:Ut.form,children:[n.map((d,I)=>A.jsx(O.Fragment,{children:A.jsx("span",{children:d.type==="string"||d.type==="number"?A.jsxs(A.Fragment,{children:[A.jsx("label",{htmlFor:d.name+g,className:Ut.label,children:d.display}),A.jsx("input",{type:d.type==="string"?"text":"number",value:p[d.name],name:d.name+g,id:d.name+g,onInput:k=>h(k,d,g),className:Ut.input})]}):A.jsxs("span",{children:[A.jsxs("span",{className:Ut.label,children:[d.display,A.jsx("button",{onClick:k=>_(k,d,g),children:"+"})]}),Array.isArray(p[d.name])&&p[d.name].map((k,P)=>A.jsxs(O.Fragment,{children:[A.jsx("input",{type:"text",value:k,onInput:E=>m(E,d,g,P),className:Ut.input,name:d.name+g+P,id:d.name+g+P}),A.jsx("button",{onClick:E=>y(E,d,g,P),children:"x"}),A.jsx("br",{})]},"project"+g+"entry"+P))]})})},"project"+g+"entry"+I)),A.jsxs("div",{className:Ut.buttonContainer,children:[A.jsx("button",{onClick:d=>w(d,g,"update"),className:Ut.buttonUpdate,children:"update"}),A.jsx("button",{onClick:d=>w(d,g,"delete"),className:Ut.buttonDelete,children:"delete"})]})]},"project"+g))})]})},M9="_back_1j0la_2",V9="_projectWrapper_1j0la_16",L9="_presentation_1j0la_23",F9="_description_1j0la_39",mr={back:M9,projectWrapper:V9,presentation:L9,description:F9},j9=()=>{const[t]=Ai(_l),[e,n]=O.useState({id:"",rank:0,name:"",illustration:"",closeup:"",techno:[""],description:"",purpose:[""],skills:[""],link:"",repo:"",comment:[""]}),i=VP().projectId,s=iw();return O.useEffect(()=>{const o=t.find(a=>a.id===i);o?n(o):s("/error")},[s,i,t]),A.jsxs(A.Fragment,{children:[A.jsx(ya,{to:"/",className:mr.back,children:"Retour à l'accueil"}),A.jsxs("main",{className:mr.projectWrapper,children:[A.jsxs("section",{className:mr.presentation,children:[A.jsx("h3",{className:"title",children:e.name}),A.jsx("img",{src:e.closeup,alt:e.name})]}),A.jsxs("section",{className:mr.description,children:[A.jsxs("article",{children:[A.jsx("div",{className:"section",children:"Description"}),A.jsx("p",{className:"content",children:e.description})]}),A.jsxs("article",{children:[A.jsx("div",{className:"section",children:"Technologies"}),A.jsx("div",{className:"content",children:e.techno.map((o,a)=>A.jsxs("p",{className:mr.list,children:["· ",o]},"techno"+a))})]}),A.jsxs("article",{children:[A.jsx("div",{className:"section",children:"Objectif"}),A.jsx("div",{className:"content",children:e.purpose.map((o,a)=>A.jsxs("p",{className:mr.list,children:["· ",o]},"purpose"+a))})]}),A.jsxs("article",{children:[A.jsx("div",{className:"section",children:"Compétences"}),A.jsx("div",{className:"content",children:e.skills.map((o,a)=>A.jsxs("p",{className:mr.list,children:["· ",o]},"skills"+a))})]}),A.jsxs("article",{children:[A.jsx("div",{className:"section",children:"Evaluation"}),A.jsx("div",{className:"content",children:e.comment.map((o,a)=>A.jsxs("p",{className:mr.list,children:["· ",o]},"comment"+a))})]}),A.jsxs("article",{children:[A.jsx("div",{className:"section",children:"Liens"}),A.jsxs("div",{className:"content",children:[e.link&&A.jsx("a",{href:e.link,children:"site"}),A.jsx("br",{}),e.repo&&A.jsx("a",{href:e.repo,children:"github"})]})]})]})]})]})},b0=()=>A.jsxs(A.Fragment,{children:[A.jsx("div",{children:"404 - not found"}),A.jsx(ya,{to:"/",children:"back to home"})]}),U9="_header_1oxu6_2",$9={header:U9},z9=()=>A.jsx("header",{className:$9.header,children:A.jsx("h1",{children:"Mes projets OpenClassrooms"})}),B9=()=>{const[,t]=Ai(_l),[e,n]=O.useState(!1);return O.useEffect(()=>{(async()=>{if(!e){const s=await new GT().getProjectsData();if(s){const o=s.map(a=>({...a,rank:typeof a.rank=="number"?a.rank:1}));t(o)}}n(!0)})()},[]),A.jsxs(A.Fragment,{children:[A.jsx(z9,{}),e&&A.jsx(XP,{})]})},H9=[{path:"/OC-ProjectsShowcase/",element:A.jsx(B9,{}),errorElement:A.jsx(b0,{}),children:[{path:"/OC-ProjectsShowcase/",element:A.jsx(S4,{})},{path:"/OC-ProjectsShowcase/admin",element:A.jsx(O9,{})},{path:"/OC-ProjectsShowcase/project/:projectId",element:A.jsx(j9,{})},{path:"/OC-ProjectsShowcase/error",element:A.jsx(b0,{})}]}],_l=WE([]),qT=WE([{name:"name",display:"nom",type:"string"},{name:"rank",display:"rang",type:"number"},{name:"description",display:"description",type:"string"},{name:"purpose",display:"objectif",type:"array"},{name:"skills",display:"compétences",type:"array"},{name:"techno",display:"technologies",type:"array"},{name:"comment",display:"évaluation",type:"array"},{name:"repo",display:"repo du site",type:"string"},{name:"link",display:"site déployé",type:"string"},{name:"illustration",display:"illustration",type:"string"},{name:"closeup",display:"close up",type:"string"}]),W9=iR(H9);Hh.createRoot(document.getElementById("root")).render(A.jsx(Ba.StrictMode,{children:A.jsx(QP,{router:W9})}));
