(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function xv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var u0={exports:{}},Kl={},d0={exports:{}},Ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ta=Symbol.for("react.element"),vv=Symbol.for("react.portal"),_v=Symbol.for("react.fragment"),yv=Symbol.for("react.strict_mode"),Mv=Symbol.for("react.profiler"),Sv=Symbol.for("react.provider"),wv=Symbol.for("react.context"),Ev=Symbol.for("react.forward_ref"),bv=Symbol.for("react.suspense"),Tv=Symbol.for("react.memo"),Av=Symbol.for("react.lazy"),af=Symbol.iterator;function Cv(t){return t===null||typeof t!="object"?null:(t=af&&t[af]||t["@@iterator"],typeof t=="function"?t:null)}var h0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f0=Object.assign,p0={};function Ws(t,e,n){this.props=t,this.context=e,this.refs=p0,this.updater=n||h0}Ws.prototype.isReactComponent={};Ws.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ws.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function m0(){}m0.prototype=Ws.prototype;function Vd(t,e,n){this.props=t,this.context=e,this.refs=p0,this.updater=n||h0}var jd=Vd.prototype=new m0;jd.constructor=Vd;f0(jd,Ws.prototype);jd.isPureReactComponent=!0;var lf=Array.isArray,g0=Object.prototype.hasOwnProperty,Gd={current:null},x0={key:!0,ref:!0,__self:!0,__source:!0};function v0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)g0.call(e,i)&&!x0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ta,type:t,key:s,ref:o,props:r,_owner:Gd.current}}function Rv(t,e){return{$$typeof:ta,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Wd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ta}function Pv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var cf=/\/+/g;function wc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Pv(""+t.key):e.toString(36)}function sl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ta:case vv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+wc(o,0):i,lf(r)?(n="",t!=null&&(n=t.replace(cf,"$&/")+"/"),sl(r,e,n,"",function(c){return c})):r!=null&&(Wd(r)&&(r=Rv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(cf,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",lf(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+wc(s,a);o+=sl(s,e,n,l,r)}else if(l=Cv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+wc(s,a++),o+=sl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function pa(t,e,n){if(t==null)return t;var i=[],r=0;return sl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Nv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var an={current:null},ol={transition:null},Lv={ReactCurrentDispatcher:an,ReactCurrentBatchConfig:ol,ReactCurrentOwner:Gd};function _0(){throw Error("act(...) is not supported in production builds of React.")}Ze.Children={map:pa,forEach:function(t,e,n){pa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return pa(t,function(){e++}),e},toArray:function(t){return pa(t,function(e){return e})||[]},only:function(t){if(!Wd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ze.Component=Ws;Ze.Fragment=_v;Ze.Profiler=Mv;Ze.PureComponent=Vd;Ze.StrictMode=yv;Ze.Suspense=bv;Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lv;Ze.act=_0;Ze.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=f0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Gd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)g0.call(e,l)&&!x0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ta,type:t.type,key:r,ref:s,props:i,_owner:o}};Ze.createContext=function(t){return t={$$typeof:wv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Sv,_context:t},t.Consumer=t};Ze.createElement=v0;Ze.createFactory=function(t){var e=v0.bind(null,t);return e.type=t,e};Ze.createRef=function(){return{current:null}};Ze.forwardRef=function(t){return{$$typeof:Ev,render:t}};Ze.isValidElement=Wd;Ze.lazy=function(t){return{$$typeof:Av,_payload:{_status:-1,_result:t},_init:Nv}};Ze.memo=function(t,e){return{$$typeof:Tv,type:t,compare:e===void 0?null:e}};Ze.startTransition=function(t){var e=ol.transition;ol.transition={};try{t()}finally{ol.transition=e}};Ze.unstable_act=_0;Ze.useCallback=function(t,e){return an.current.useCallback(t,e)};Ze.useContext=function(t){return an.current.useContext(t)};Ze.useDebugValue=function(){};Ze.useDeferredValue=function(t){return an.current.useDeferredValue(t)};Ze.useEffect=function(t,e){return an.current.useEffect(t,e)};Ze.useId=function(){return an.current.useId()};Ze.useImperativeHandle=function(t,e,n){return an.current.useImperativeHandle(t,e,n)};Ze.useInsertionEffect=function(t,e){return an.current.useInsertionEffect(t,e)};Ze.useLayoutEffect=function(t,e){return an.current.useLayoutEffect(t,e)};Ze.useMemo=function(t,e){return an.current.useMemo(t,e)};Ze.useReducer=function(t,e,n){return an.current.useReducer(t,e,n)};Ze.useRef=function(t){return an.current.useRef(t)};Ze.useState=function(t){return an.current.useState(t)};Ze.useSyncExternalStore=function(t,e,n){return an.current.useSyncExternalStore(t,e,n)};Ze.useTransition=function(){return an.current.useTransition()};Ze.version="18.3.1";d0.exports=Ze;var ue=d0.exports;const Dv=xv(ue);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iv=ue,Uv=Symbol.for("react.element"),kv=Symbol.for("react.fragment"),Ov=Object.prototype.hasOwnProperty,Fv=Iv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zv={key:!0,ref:!0,__self:!0,__source:!0};function y0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Ov.call(e,i)&&!zv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Uv,type:t,key:s,ref:o,props:r,_owner:Fv.current}}Kl.Fragment=kv;Kl.jsx=y0;Kl.jsxs=y0;u0.exports=Kl;var x=u0.exports,Ou={},M0={exports:{}},En={},S0={exports:{}},w0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,oe){var I=z.length;z.push(oe);e:for(;0<I;){var P=I-1>>>1,ae=z[P];if(0<r(ae,oe))z[P]=oe,z[I]=ae,I=P;else break e}}function n(z){return z.length===0?null:z[0]}function i(z){if(z.length===0)return null;var oe=z[0],I=z.pop();if(I!==oe){z[0]=I;e:for(var P=0,ae=z.length,me=ae>>>1;P<me;){var j=2*(P+1)-1,ee=z[j],F=j+1,H=z[F];if(0>r(ee,I))F<ae&&0>r(H,ee)?(z[P]=H,z[F]=I,P=F):(z[P]=ee,z[j]=I,P=j);else if(F<ae&&0>r(H,I))z[P]=H,z[F]=I,P=F;else break e}}return oe}function r(z,oe){var I=z.sortIndex-oe.sortIndex;return I!==0?I:z.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,d=null,f=3,p=!1,v=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(z){for(var oe=n(c);oe!==null;){if(oe.callback===null)i(c);else if(oe.startTime<=z)i(c),oe.sortIndex=oe.expirationTime,e(l,oe);else break;oe=n(c)}}function M(z){if(_=!1,y(z),!v)if(n(l)!==null)v=!0,X(C);else{var oe=n(c);oe!==null&&ne(M,oe.startTime-z)}}function C(z,oe){v=!1,_&&(_=!1,u(R),R=-1),p=!0;var I=f;try{for(y(oe),d=n(l);d!==null&&(!(d.expirationTime>oe)||z&&!D());){var P=d.callback;if(typeof P=="function"){d.callback=null,f=d.priorityLevel;var ae=P(d.expirationTime<=oe);oe=t.unstable_now(),typeof ae=="function"?d.callback=ae:d===n(l)&&i(l),y(oe)}else i(l);d=n(l)}if(d!==null)var me=!0;else{var j=n(c);j!==null&&ne(M,j.startTime-oe),me=!1}return me}finally{d=null,f=I,p=!1}}var E=!1,T=null,R=-1,w=5,S=-1;function D(){return!(t.unstable_now()-S<w)}function L(){if(T!==null){var z=t.unstable_now();S=z;var oe=!0;try{oe=T(!0,z)}finally{oe?O():(E=!1,T=null)}}else E=!1}var O;if(typeof g=="function")O=function(){g(L)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,q=$.port2;$.port1.onmessage=L,O=function(){q.postMessage(null)}}else O=function(){m(L,0)};function X(z){T=z,E||(E=!0,O())}function ne(z,oe){R=m(function(){z(t.unstable_now())},oe)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,X(C))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(z){switch(f){case 1:case 2:case 3:var oe=3;break;default:oe=f}var I=f;f=oe;try{return z()}finally{f=I}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,oe){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var I=f;f=z;try{return oe()}finally{f=I}},t.unstable_scheduleCallback=function(z,oe,I){var P=t.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?P+I:P):I=P,z){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=I+ae,z={id:h++,callback:oe,priorityLevel:z,startTime:I,expirationTime:ae,sortIndex:-1},I>P?(z.sortIndex=I,e(c,z),n(l)===null&&z===n(c)&&(_?(u(R),R=-1):_=!0,ne(M,I-P))):(z.sortIndex=ae,e(l,z),v||p||(v=!0,X(C))),z},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(z){var oe=f;return function(){var I=f;f=oe;try{return z.apply(this,arguments)}finally{f=I}}}})(w0);S0.exports=w0;var Bv=S0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hv=ue,wn=Bv;function pe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var E0=new Set,Io={};function Br(t,e){Ns(t,e),Ns(t+"Capture",e)}function Ns(t,e){for(Io[t]=e,t=0;t<e.length;t++)E0.add(e[t])}var Mi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fu=Object.prototype.hasOwnProperty,Vv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,uf={},df={};function jv(t){return Fu.call(df,t)?!0:Fu.call(uf,t)?!1:Vv.test(t)?df[t]=!0:(uf[t]=!0,!1)}function Gv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Wv(t,e,n,i){if(e===null||typeof e>"u"||Gv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ln(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xt[t]=new ln(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xt[e]=new ln(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xt[t]=new ln(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xt[t]=new ln(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xt[t]=new ln(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xt[t]=new ln(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xt[t]=new ln(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xt[t]=new ln(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xt[t]=new ln(t,5,!1,t.toLowerCase(),null,!1,!1)});var Xd=/[\-:]([a-z])/g;function Yd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Xd,Yd);Xt[e]=new ln(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Xd,Yd);Xt[e]=new ln(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Xd,Yd);Xt[e]=new ln(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xt[t]=new ln(t,1,!1,t.toLowerCase(),null,!1,!1)});Xt.xlinkHref=new ln("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xt[t]=new ln(t,1,!1,t.toLowerCase(),null,!0,!0)});function qd(t,e,n,i){var r=Xt.hasOwnProperty(e)?Xt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Wv(e,n,r,i)&&(n=null),i||r===null?jv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var bi=Hv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ma=Symbol.for("react.element"),ls=Symbol.for("react.portal"),cs=Symbol.for("react.fragment"),$d=Symbol.for("react.strict_mode"),zu=Symbol.for("react.profiler"),b0=Symbol.for("react.provider"),T0=Symbol.for("react.context"),Kd=Symbol.for("react.forward_ref"),Bu=Symbol.for("react.suspense"),Hu=Symbol.for("react.suspense_list"),Zd=Symbol.for("react.memo"),Ii=Symbol.for("react.lazy"),A0=Symbol.for("react.offscreen"),hf=Symbol.iterator;function Qs(t){return t===null||typeof t!="object"?null:(t=hf&&t[hf]||t["@@iterator"],typeof t=="function"?t:null)}var St=Object.assign,Ec;function go(t){if(Ec===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ec=e&&e[1]||""}return`
`+Ec+t}var bc=!1;function Tc(t,e){if(!t||bc)return"";bc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{bc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?go(t):""}function Xv(t){switch(t.tag){case 5:return go(t.type);case 16:return go("Lazy");case 13:return go("Suspense");case 19:return go("SuspenseList");case 0:case 2:case 15:return t=Tc(t.type,!1),t;case 11:return t=Tc(t.type.render,!1),t;case 1:return t=Tc(t.type,!0),t;default:return""}}function Vu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case cs:return"Fragment";case ls:return"Portal";case zu:return"Profiler";case $d:return"StrictMode";case Bu:return"Suspense";case Hu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case T0:return(t.displayName||"Context")+".Consumer";case b0:return(t._context.displayName||"Context")+".Provider";case Kd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Zd:return e=t.displayName||null,e!==null?e:Vu(t.type)||"Memo";case Ii:e=t._payload,t=t._init;try{return Vu(t(e))}catch{}}return null}function Yv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vu(e);case 8:return e===$d?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Qi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function C0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function qv(t){var e=C0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ga(t){t._valueTracker||(t._valueTracker=qv(t))}function R0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=C0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function vl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ju(t,e){var n=e.checked;return St({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ff(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Qi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function P0(t,e){e=e.checked,e!=null&&qd(t,"checked",e,!1)}function Gu(t,e){P0(t,e);var n=Qi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Wu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Wu(t,e.type,Qi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function pf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Wu(t,e,n){(e!=="number"||vl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var xo=Array.isArray;function Ms(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Qi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Xu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(pe(91));return St({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function mf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(pe(92));if(xo(n)){if(1<n.length)throw Error(pe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Qi(n)}}function N0(t,e){var n=Qi(e.value),i=Qi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function gf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function L0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?L0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var xa,D0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(xa=xa||document.createElement("div"),xa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=xa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Uo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var So={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$v=["Webkit","ms","Moz","O"];Object.keys(So).forEach(function(t){$v.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),So[e]=So[t]})});function I0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||So.hasOwnProperty(t)&&So[t]?(""+e).trim():e+"px"}function U0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=I0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Kv=St({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qu(t,e){if(e){if(Kv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(pe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(pe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(pe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(pe(62))}}function $u(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ku=null;function Jd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zu=null,Ss=null,ws=null;function xf(t){if(t=ra(t)){if(typeof Zu!="function")throw Error(pe(280));var e=t.stateNode;e&&(e=tc(e),Zu(t.stateNode,t.type,e))}}function k0(t){Ss?ws?ws.push(t):ws=[t]:Ss=t}function O0(){if(Ss){var t=Ss,e=ws;if(ws=Ss=null,xf(t),e)for(t=0;t<e.length;t++)xf(e[t])}}function F0(t,e){return t(e)}function z0(){}var Ac=!1;function B0(t,e,n){if(Ac)return t(e,n);Ac=!0;try{return F0(t,e,n)}finally{Ac=!1,(Ss!==null||ws!==null)&&(z0(),O0())}}function ko(t,e){var n=t.stateNode;if(n===null)return null;var i=tc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(pe(231,e,typeof n));return n}var Ju=!1;if(Mi)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){Ju=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{Ju=!1}function Zv(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var wo=!1,_l=null,yl=!1,Qu=null,Jv={onError:function(t){wo=!0,_l=t}};function Qv(t,e,n,i,r,s,o,a,l){wo=!1,_l=null,Zv.apply(Jv,arguments)}function e_(t,e,n,i,r,s,o,a,l){if(Qv.apply(this,arguments),wo){if(wo){var c=_l;wo=!1,_l=null}else throw Error(pe(198));yl||(yl=!0,Qu=c)}}function Hr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function H0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function vf(t){if(Hr(t)!==t)throw Error(pe(188))}function t_(t){var e=t.alternate;if(!e){if(e=Hr(t),e===null)throw Error(pe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return vf(r),t;if(s===i)return vf(r),e;s=s.sibling}throw Error(pe(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(pe(189))}}if(n.alternate!==i)throw Error(pe(190))}if(n.tag!==3)throw Error(pe(188));return n.stateNode.current===n?t:e}function V0(t){return t=t_(t),t!==null?j0(t):null}function j0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=j0(t);if(e!==null)return e;t=t.sibling}return null}var G0=wn.unstable_scheduleCallback,_f=wn.unstable_cancelCallback,n_=wn.unstable_shouldYield,i_=wn.unstable_requestPaint,At=wn.unstable_now,r_=wn.unstable_getCurrentPriorityLevel,Qd=wn.unstable_ImmediatePriority,W0=wn.unstable_UserBlockingPriority,Ml=wn.unstable_NormalPriority,s_=wn.unstable_LowPriority,X0=wn.unstable_IdlePriority,Zl=null,ii=null;function o_(t){if(ii&&typeof ii.onCommitFiberRoot=="function")try{ii.onCommitFiberRoot(Zl,t,void 0,(t.current.flags&128)===128)}catch{}}var Xn=Math.clz32?Math.clz32:c_,a_=Math.log,l_=Math.LN2;function c_(t){return t>>>=0,t===0?32:31-(a_(t)/l_|0)|0}var va=64,_a=4194304;function vo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Sl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=vo(a):(s&=o,s!==0&&(i=vo(s)))}else o=n&~r,o!==0?i=vo(o):s!==0&&(i=vo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Xn(e),r=1<<n,i|=t[n],e&=~r;return i}function u_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function d_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Xn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=u_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function ed(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Y0(){var t=va;return va<<=1,!(va&4194240)&&(va=64),t}function Cc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function na(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xn(e),t[e]=n}function h_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Xn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function eh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Xn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ot=0;function q0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var $0,th,K0,Z0,J0,td=!1,ya=[],Vi=null,ji=null,Gi=null,Oo=new Map,Fo=new Map,ki=[],f_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yf(t,e){switch(t){case"focusin":case"focusout":Vi=null;break;case"dragenter":case"dragleave":ji=null;break;case"mouseover":case"mouseout":Gi=null;break;case"pointerover":case"pointerout":Oo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(e.pointerId)}}function to(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ra(e),e!==null&&th(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function p_(t,e,n,i,r){switch(e){case"focusin":return Vi=to(Vi,t,e,n,i,r),!0;case"dragenter":return ji=to(ji,t,e,n,i,r),!0;case"mouseover":return Gi=to(Gi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Oo.set(s,to(Oo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Fo.set(s,to(Fo.get(s)||null,t,e,n,i,r)),!0}return!1}function Q0(t){var e=Er(t.target);if(e!==null){var n=Hr(e);if(n!==null){if(e=n.tag,e===13){if(e=H0(n),e!==null){t.blockedOn=e,J0(t.priority,function(){K0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function al(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=nd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Ku=i,n.target.dispatchEvent(i),Ku=null}else return e=ra(n),e!==null&&th(e),t.blockedOn=n,!1;e.shift()}return!0}function Mf(t,e,n){al(t)&&n.delete(e)}function m_(){td=!1,Vi!==null&&al(Vi)&&(Vi=null),ji!==null&&al(ji)&&(ji=null),Gi!==null&&al(Gi)&&(Gi=null),Oo.forEach(Mf),Fo.forEach(Mf)}function no(t,e){t.blockedOn===e&&(t.blockedOn=null,td||(td=!0,wn.unstable_scheduleCallback(wn.unstable_NormalPriority,m_)))}function zo(t){function e(r){return no(r,t)}if(0<ya.length){no(ya[0],t);for(var n=1;n<ya.length;n++){var i=ya[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Vi!==null&&no(Vi,t),ji!==null&&no(ji,t),Gi!==null&&no(Gi,t),Oo.forEach(e),Fo.forEach(e),n=0;n<ki.length;n++)i=ki[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ki.length&&(n=ki[0],n.blockedOn===null);)Q0(n),n.blockedOn===null&&ki.shift()}var Es=bi.ReactCurrentBatchConfig,wl=!0;function g_(t,e,n,i){var r=ot,s=Es.transition;Es.transition=null;try{ot=1,nh(t,e,n,i)}finally{ot=r,Es.transition=s}}function x_(t,e,n,i){var r=ot,s=Es.transition;Es.transition=null;try{ot=4,nh(t,e,n,i)}finally{ot=r,Es.transition=s}}function nh(t,e,n,i){if(wl){var r=nd(t,e,n,i);if(r===null)Fc(t,e,i,El,n),yf(t,i);else if(p_(r,t,e,n,i))i.stopPropagation();else if(yf(t,i),e&4&&-1<f_.indexOf(t)){for(;r!==null;){var s=ra(r);if(s!==null&&$0(s),s=nd(t,e,n,i),s===null&&Fc(t,e,i,El,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Fc(t,e,i,null,n)}}var El=null;function nd(t,e,n,i){if(El=null,t=Jd(i),t=Er(t),t!==null)if(e=Hr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=H0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return El=t,null}function eg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(r_()){case Qd:return 1;case W0:return 4;case Ml:case s_:return 16;case X0:return 536870912;default:return 16}default:return 16}}var zi=null,ih=null,ll=null;function tg(){if(ll)return ll;var t,e=ih,n=e.length,i,r="value"in zi?zi.value:zi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return ll=r.slice(t,1<i?1-i:void 0)}function cl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ma(){return!0}function Sf(){return!1}function bn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ma:Sf,this.isPropagationStopped=Sf,this}return St(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ma)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ma)},persist:function(){},isPersistent:Ma}),e}var Xs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rh=bn(Xs),ia=St({},Xs,{view:0,detail:0}),v_=bn(ia),Rc,Pc,io,Jl=St({},ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==io&&(io&&t.type==="mousemove"?(Rc=t.screenX-io.screenX,Pc=t.screenY-io.screenY):Pc=Rc=0,io=t),Rc)},movementY:function(t){return"movementY"in t?t.movementY:Pc}}),wf=bn(Jl),__=St({},Jl,{dataTransfer:0}),y_=bn(__),M_=St({},ia,{relatedTarget:0}),Nc=bn(M_),S_=St({},Xs,{animationName:0,elapsedTime:0,pseudoElement:0}),w_=bn(S_),E_=St({},Xs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),b_=bn(E_),T_=St({},Xs,{data:0}),Ef=bn(T_),A_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},C_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},R_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function P_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=R_[t])?!!e[t]:!1}function sh(){return P_}var N_=St({},ia,{key:function(t){if(t.key){var e=A_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=cl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?C_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sh,charCode:function(t){return t.type==="keypress"?cl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?cl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),L_=bn(N_),D_=St({},Jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bf=bn(D_),I_=St({},ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sh}),U_=bn(I_),k_=St({},Xs,{propertyName:0,elapsedTime:0,pseudoElement:0}),O_=bn(k_),F_=St({},Jl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),z_=bn(F_),B_=[9,13,27,32],oh=Mi&&"CompositionEvent"in window,Eo=null;Mi&&"documentMode"in document&&(Eo=document.documentMode);var H_=Mi&&"TextEvent"in window&&!Eo,ng=Mi&&(!oh||Eo&&8<Eo&&11>=Eo),Tf=" ",Af=!1;function ig(t,e){switch(t){case"keyup":return B_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var us=!1;function V_(t,e){switch(t){case"compositionend":return rg(e);case"keypress":return e.which!==32?null:(Af=!0,Tf);case"textInput":return t=e.data,t===Tf&&Af?null:t;default:return null}}function j_(t,e){if(us)return t==="compositionend"||!oh&&ig(t,e)?(t=tg(),ll=ih=zi=null,us=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ng&&e.locale!=="ko"?null:e.data;default:return null}}var G_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!G_[t.type]:e==="textarea"}function sg(t,e,n,i){k0(i),e=bl(e,"onChange"),0<e.length&&(n=new rh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var bo=null,Bo=null;function W_(t){gg(t,0)}function Ql(t){var e=fs(t);if(R0(e))return t}function X_(t,e){if(t==="change")return e}var og=!1;if(Mi){var Lc;if(Mi){var Dc="oninput"in document;if(!Dc){var Rf=document.createElement("div");Rf.setAttribute("oninput","return;"),Dc=typeof Rf.oninput=="function"}Lc=Dc}else Lc=!1;og=Lc&&(!document.documentMode||9<document.documentMode)}function Pf(){bo&&(bo.detachEvent("onpropertychange",ag),Bo=bo=null)}function ag(t){if(t.propertyName==="value"&&Ql(Bo)){var e=[];sg(e,Bo,t,Jd(t)),B0(W_,e)}}function Y_(t,e,n){t==="focusin"?(Pf(),bo=e,Bo=n,bo.attachEvent("onpropertychange",ag)):t==="focusout"&&Pf()}function q_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ql(Bo)}function $_(t,e){if(t==="click")return Ql(e)}function K_(t,e){if(t==="input"||t==="change")return Ql(e)}function Z_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qn=typeof Object.is=="function"?Object.is:Z_;function Ho(t,e){if(qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Fu.call(e,r)||!qn(t[r],e[r]))return!1}return!0}function Nf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Lf(t,e){var n=Nf(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Nf(n)}}function lg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?lg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function cg(){for(var t=window,e=vl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=vl(t.document)}return e}function ah(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function J_(t){var e=cg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&lg(n.ownerDocument.documentElement,n)){if(i!==null&&ah(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Lf(n,s);var o=Lf(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Q_=Mi&&"documentMode"in document&&11>=document.documentMode,ds=null,id=null,To=null,rd=!1;function Df(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rd||ds==null||ds!==vl(i)||(i=ds,"selectionStart"in i&&ah(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),To&&Ho(To,i)||(To=i,i=bl(id,"onSelect"),0<i.length&&(e=new rh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ds)))}function Sa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var hs={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionend:Sa("Transition","TransitionEnd")},Ic={},ug={};Mi&&(ug=document.createElement("div").style,"AnimationEvent"in window||(delete hs.animationend.animation,delete hs.animationiteration.animation,delete hs.animationstart.animation),"TransitionEvent"in window||delete hs.transitionend.transition);function ec(t){if(Ic[t])return Ic[t];if(!hs[t])return t;var e=hs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ug)return Ic[t]=e[n];return t}var dg=ec("animationend"),hg=ec("animationiteration"),fg=ec("animationstart"),pg=ec("transitionend"),mg=new Map,If="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sr(t,e){mg.set(t,e),Br(e,[t])}for(var Uc=0;Uc<If.length;Uc++){var kc=If[Uc],ey=kc.toLowerCase(),ty=kc[0].toUpperCase()+kc.slice(1);sr(ey,"on"+ty)}sr(dg,"onAnimationEnd");sr(hg,"onAnimationIteration");sr(fg,"onAnimationStart");sr("dblclick","onDoubleClick");sr("focusin","onFocus");sr("focusout","onBlur");sr(pg,"onTransitionEnd");Ns("onMouseEnter",["mouseout","mouseover"]);Ns("onMouseLeave",["mouseout","mouseover"]);Ns("onPointerEnter",["pointerout","pointerover"]);Ns("onPointerLeave",["pointerout","pointerover"]);Br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Br("onBeforeInput",["compositionend","keypress","textInput","paste"]);Br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ny=new Set("cancel close invalid load scroll toggle".split(" ").concat(_o));function Uf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,e_(i,e,void 0,t),t.currentTarget=null}function gg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Uf(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Uf(r,a,c),s=l}}}if(yl)throw t=Qu,yl=!1,Qu=null,t}function ht(t,e){var n=e[cd];n===void 0&&(n=e[cd]=new Set);var i=t+"__bubble";n.has(i)||(xg(e,t,2,!1),n.add(i))}function Oc(t,e,n){var i=0;e&&(i|=4),xg(n,t,i,e)}var wa="_reactListening"+Math.random().toString(36).slice(2);function Vo(t){if(!t[wa]){t[wa]=!0,E0.forEach(function(n){n!=="selectionchange"&&(ny.has(n)||Oc(n,!1,t),Oc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[wa]||(e[wa]=!0,Oc("selectionchange",!1,e))}}function xg(t,e,n,i){switch(eg(e)){case 1:var r=g_;break;case 4:r=x_;break;default:r=nh}n=r.bind(null,e,n,t),r=void 0,!Ju||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Fc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Er(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}B0(function(){var c=s,h=Jd(n),d=[];e:{var f=mg.get(t);if(f!==void 0){var p=rh,v=t;switch(t){case"keypress":if(cl(n)===0)break e;case"keydown":case"keyup":p=L_;break;case"focusin":v="focus",p=Nc;break;case"focusout":v="blur",p=Nc;break;case"beforeblur":case"afterblur":p=Nc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=wf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=y_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=U_;break;case dg:case hg:case fg:p=w_;break;case pg:p=O_;break;case"scroll":p=v_;break;case"wheel":p=z_;break;case"copy":case"cut":case"paste":p=b_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=bf}var _=(e&4)!==0,m=!_&&t==="scroll",u=_?f!==null?f+"Capture":null:f;_=[];for(var g=c,y;g!==null;){y=g;var M=y.stateNode;if(y.tag===5&&M!==null&&(y=M,u!==null&&(M=ko(g,u),M!=null&&_.push(jo(g,M,y)))),m)break;g=g.return}0<_.length&&(f=new p(f,v,null,n,h),d.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Ku&&(v=n.relatedTarget||n.fromElement)&&(Er(v)||v[Si]))break e;if((p||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?Er(v):null,v!==null&&(m=Hr(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(_=wf,M="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(_=bf,M="onPointerLeave",u="onPointerEnter",g="pointer"),m=p==null?f:fs(p),y=v==null?f:fs(v),f=new _(M,g+"leave",p,n,h),f.target=m,f.relatedTarget=y,M=null,Er(h)===c&&(_=new _(u,g+"enter",v,n,h),_.target=y,_.relatedTarget=m,M=_),m=M,p&&v)t:{for(_=p,u=v,g=0,y=_;y;y=jr(y))g++;for(y=0,M=u;M;M=jr(M))y++;for(;0<g-y;)_=jr(_),g--;for(;0<y-g;)u=jr(u),y--;for(;g--;){if(_===u||u!==null&&_===u.alternate)break t;_=jr(_),u=jr(u)}_=null}else _=null;p!==null&&kf(d,f,p,_,!1),v!==null&&m!==null&&kf(d,m,v,_,!0)}}e:{if(f=c?fs(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var C=X_;else if(Cf(f))if(og)C=K_;else{C=q_;var E=Y_}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=$_);if(C&&(C=C(t,c))){sg(d,C,n,h);break e}E&&E(t,f,c),t==="focusout"&&(E=f._wrapperState)&&E.controlled&&f.type==="number"&&Wu(f,"number",f.value)}switch(E=c?fs(c):window,t){case"focusin":(Cf(E)||E.contentEditable==="true")&&(ds=E,id=c,To=null);break;case"focusout":To=id=ds=null;break;case"mousedown":rd=!0;break;case"contextmenu":case"mouseup":case"dragend":rd=!1,Df(d,n,h);break;case"selectionchange":if(Q_)break;case"keydown":case"keyup":Df(d,n,h)}var T;if(oh)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else us?ig(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(ng&&n.locale!=="ko"&&(us||R!=="onCompositionStart"?R==="onCompositionEnd"&&us&&(T=tg()):(zi=h,ih="value"in zi?zi.value:zi.textContent,us=!0)),E=bl(c,R),0<E.length&&(R=new Ef(R,t,null,n,h),d.push({event:R,listeners:E}),T?R.data=T:(T=rg(n),T!==null&&(R.data=T)))),(T=H_?V_(t,n):j_(t,n))&&(c=bl(c,"onBeforeInput"),0<c.length&&(h=new Ef("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:c}),h.data=T))}gg(d,e)})}function jo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function bl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ko(t,n),s!=null&&i.unshift(jo(t,s,r)),s=ko(t,e),s!=null&&i.push(jo(t,s,r))),t=t.return}return i}function jr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function kf(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ko(n,s),l!=null&&o.unshift(jo(n,l,a))):r||(l=ko(n,s),l!=null&&o.push(jo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var iy=/\r\n?/g,ry=/\u0000|\uFFFD/g;function Of(t){return(typeof t=="string"?t:""+t).replace(iy,`
`).replace(ry,"")}function Ea(t,e,n){if(e=Of(e),Of(t)!==e&&n)throw Error(pe(425))}function Tl(){}var sd=null,od=null;function ad(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ld=typeof setTimeout=="function"?setTimeout:void 0,sy=typeof clearTimeout=="function"?clearTimeout:void 0,Ff=typeof Promise=="function"?Promise:void 0,oy=typeof queueMicrotask=="function"?queueMicrotask:typeof Ff<"u"?function(t){return Ff.resolve(null).then(t).catch(ay)}:ld;function ay(t){setTimeout(function(){throw t})}function zc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),zo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);zo(e)}function Wi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function zf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ys=Math.random().toString(36).slice(2),ei="__reactFiber$"+Ys,Go="__reactProps$"+Ys,Si="__reactContainer$"+Ys,cd="__reactEvents$"+Ys,ly="__reactListeners$"+Ys,cy="__reactHandles$"+Ys;function Er(t){var e=t[ei];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Si]||n[ei]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=zf(t);t!==null;){if(n=t[ei])return n;t=zf(t)}return e}t=n,n=t.parentNode}return null}function ra(t){return t=t[ei]||t[Si],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(pe(33))}function tc(t){return t[Go]||null}var ud=[],ps=-1;function or(t){return{current:t}}function pt(t){0>ps||(t.current=ud[ps],ud[ps]=null,ps--)}function dt(t,e){ps++,ud[ps]=t.current,t.current=e}var er={},en=or(er),pn=or(!1),Lr=er;function Ls(t,e){var n=t.type.contextTypes;if(!n)return er;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function mn(t){return t=t.childContextTypes,t!=null}function Al(){pt(pn),pt(en)}function Bf(t,e,n){if(en.current!==er)throw Error(pe(168));dt(en,e),dt(pn,n)}function vg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(pe(108,Yv(t)||"Unknown",r));return St({},n,i)}function Cl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||er,Lr=en.current,dt(en,t),dt(pn,pn.current),!0}function Hf(t,e,n){var i=t.stateNode;if(!i)throw Error(pe(169));n?(t=vg(t,e,Lr),i.__reactInternalMemoizedMergedChildContext=t,pt(pn),pt(en),dt(en,t)):pt(pn),dt(pn,n)}var mi=null,nc=!1,Bc=!1;function _g(t){mi===null?mi=[t]:mi.push(t)}function uy(t){nc=!0,_g(t)}function ar(){if(!Bc&&mi!==null){Bc=!0;var t=0,e=ot;try{var n=mi;for(ot=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}mi=null,nc=!1}catch(r){throw mi!==null&&(mi=mi.slice(t+1)),G0(Qd,ar),r}finally{ot=e,Bc=!1}}return null}var ms=[],gs=0,Rl=null,Pl=0,Rn=[],Pn=0,Dr=null,xi=1,vi="";function _r(t,e){ms[gs++]=Pl,ms[gs++]=Rl,Rl=t,Pl=e}function yg(t,e,n){Rn[Pn++]=xi,Rn[Pn++]=vi,Rn[Pn++]=Dr,Dr=t;var i=xi;t=vi;var r=32-Xn(i)-1;i&=~(1<<r),n+=1;var s=32-Xn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,xi=1<<32-Xn(e)+r|n<<r|i,vi=s+t}else xi=1<<s|n<<r|i,vi=t}function lh(t){t.return!==null&&(_r(t,1),yg(t,1,0))}function ch(t){for(;t===Rl;)Rl=ms[--gs],ms[gs]=null,Pl=ms[--gs],ms[gs]=null;for(;t===Dr;)Dr=Rn[--Pn],Rn[Pn]=null,vi=Rn[--Pn],Rn[Pn]=null,xi=Rn[--Pn],Rn[Pn]=null}var Sn=null,Mn=null,gt=!1,Gn=null;function Mg(t,e){var n=Ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Vf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Sn=t,Mn=Wi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Sn=t,Mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Dr!==null?{id:xi,overflow:vi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Sn=t,Mn=null,!0):!1;default:return!1}}function dd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function hd(t){if(gt){var e=Mn;if(e){var n=e;if(!Vf(t,e)){if(dd(t))throw Error(pe(418));e=Wi(n.nextSibling);var i=Sn;e&&Vf(t,e)?Mg(i,n):(t.flags=t.flags&-4097|2,gt=!1,Sn=t)}}else{if(dd(t))throw Error(pe(418));t.flags=t.flags&-4097|2,gt=!1,Sn=t}}}function jf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Sn=t}function ba(t){if(t!==Sn)return!1;if(!gt)return jf(t),gt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ad(t.type,t.memoizedProps)),e&&(e=Mn)){if(dd(t))throw Sg(),Error(pe(418));for(;e;)Mg(t,e),e=Wi(e.nextSibling)}if(jf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(pe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Mn=Wi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Mn=null}}else Mn=Sn?Wi(t.stateNode.nextSibling):null;return!0}function Sg(){for(var t=Mn;t;)t=Wi(t.nextSibling)}function Ds(){Mn=Sn=null,gt=!1}function uh(t){Gn===null?Gn=[t]:Gn.push(t)}var dy=bi.ReactCurrentBatchConfig;function ro(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(pe(309));var i=n.stateNode}if(!i)throw Error(pe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(pe(284));if(!n._owner)throw Error(pe(290,t))}return t}function Ta(t,e){throw t=Object.prototype.toString.call(e),Error(pe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Gf(t){var e=t._init;return e(t._payload)}function wg(t){function e(u,g){if(t){var y=u.deletions;y===null?(u.deletions=[g],u.flags|=16):y.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=$i(u,g),u.index=0,u.sibling=null,u}function s(u,g,y){return u.index=y,t?(y=u.alternate,y!==null?(y=y.index,y<g?(u.flags|=2,g):y):(u.flags|=2,g)):(u.flags|=1048576,g)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,g,y,M){return g===null||g.tag!==6?(g=Yc(y,u.mode,M),g.return=u,g):(g=r(g,y),g.return=u,g)}function l(u,g,y,M){var C=y.type;return C===cs?h(u,g,y.props.children,M,y.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ii&&Gf(C)===g.type)?(M=r(g,y.props),M.ref=ro(u,g,y),M.return=u,M):(M=gl(y.type,y.key,y.props,null,u.mode,M),M.ref=ro(u,g,y),M.return=u,M)}function c(u,g,y,M){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=qc(y,u.mode,M),g.return=u,g):(g=r(g,y.children||[]),g.return=u,g)}function h(u,g,y,M,C){return g===null||g.tag!==7?(g=Nr(y,u.mode,M,C),g.return=u,g):(g=r(g,y),g.return=u,g)}function d(u,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Yc(""+g,u.mode,y),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ma:return y=gl(g.type,g.key,g.props,null,u.mode,y),y.ref=ro(u,null,g),y.return=u,y;case ls:return g=qc(g,u.mode,y),g.return=u,g;case Ii:var M=g._init;return d(u,M(g._payload),y)}if(xo(g)||Qs(g))return g=Nr(g,u.mode,y,null),g.return=u,g;Ta(u,g)}return null}function f(u,g,y,M){var C=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return C!==null?null:a(u,g,""+y,M);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ma:return y.key===C?l(u,g,y,M):null;case ls:return y.key===C?c(u,g,y,M):null;case Ii:return C=y._init,f(u,g,C(y._payload),M)}if(xo(y)||Qs(y))return C!==null?null:h(u,g,y,M,null);Ta(u,y)}return null}function p(u,g,y,M,C){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(y)||null,a(g,u,""+M,C);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case ma:return u=u.get(M.key===null?y:M.key)||null,l(g,u,M,C);case ls:return u=u.get(M.key===null?y:M.key)||null,c(g,u,M,C);case Ii:var E=M._init;return p(u,g,y,E(M._payload),C)}if(xo(M)||Qs(M))return u=u.get(y)||null,h(g,u,M,C,null);Ta(g,M)}return null}function v(u,g,y,M){for(var C=null,E=null,T=g,R=g=0,w=null;T!==null&&R<y.length;R++){T.index>R?(w=T,T=null):w=T.sibling;var S=f(u,T,y[R],M);if(S===null){T===null&&(T=w);break}t&&T&&S.alternate===null&&e(u,T),g=s(S,g,R),E===null?C=S:E.sibling=S,E=S,T=w}if(R===y.length)return n(u,T),gt&&_r(u,R),C;if(T===null){for(;R<y.length;R++)T=d(u,y[R],M),T!==null&&(g=s(T,g,R),E===null?C=T:E.sibling=T,E=T);return gt&&_r(u,R),C}for(T=i(u,T);R<y.length;R++)w=p(T,u,R,y[R],M),w!==null&&(t&&w.alternate!==null&&T.delete(w.key===null?R:w.key),g=s(w,g,R),E===null?C=w:E.sibling=w,E=w);return t&&T.forEach(function(D){return e(u,D)}),gt&&_r(u,R),C}function _(u,g,y,M){var C=Qs(y);if(typeof C!="function")throw Error(pe(150));if(y=C.call(y),y==null)throw Error(pe(151));for(var E=C=null,T=g,R=g=0,w=null,S=y.next();T!==null&&!S.done;R++,S=y.next()){T.index>R?(w=T,T=null):w=T.sibling;var D=f(u,T,S.value,M);if(D===null){T===null&&(T=w);break}t&&T&&D.alternate===null&&e(u,T),g=s(D,g,R),E===null?C=D:E.sibling=D,E=D,T=w}if(S.done)return n(u,T),gt&&_r(u,R),C;if(T===null){for(;!S.done;R++,S=y.next())S=d(u,S.value,M),S!==null&&(g=s(S,g,R),E===null?C=S:E.sibling=S,E=S);return gt&&_r(u,R),C}for(T=i(u,T);!S.done;R++,S=y.next())S=p(T,u,R,S.value,M),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?R:S.key),g=s(S,g,R),E===null?C=S:E.sibling=S,E=S);return t&&T.forEach(function(L){return e(u,L)}),gt&&_r(u,R),C}function m(u,g,y,M){if(typeof y=="object"&&y!==null&&y.type===cs&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ma:e:{for(var C=y.key,E=g;E!==null;){if(E.key===C){if(C=y.type,C===cs){if(E.tag===7){n(u,E.sibling),g=r(E,y.props.children),g.return=u,u=g;break e}}else if(E.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ii&&Gf(C)===E.type){n(u,E.sibling),g=r(E,y.props),g.ref=ro(u,E,y),g.return=u,u=g;break e}n(u,E);break}else e(u,E);E=E.sibling}y.type===cs?(g=Nr(y.props.children,u.mode,M,y.key),g.return=u,u=g):(M=gl(y.type,y.key,y.props,null,u.mode,M),M.ref=ro(u,g,y),M.return=u,u=M)}return o(u);case ls:e:{for(E=y.key;g!==null;){if(g.key===E)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){n(u,g.sibling),g=r(g,y.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=qc(y,u.mode,M),g.return=u,u=g}return o(u);case Ii:return E=y._init,m(u,g,E(y._payload),M)}if(xo(y))return v(u,g,y,M);if(Qs(y))return _(u,g,y,M);Ta(u,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,y),g.return=u,u=g):(n(u,g),g=Yc(y,u.mode,M),g.return=u,u=g),o(u)):n(u,g)}return m}var Is=wg(!0),Eg=wg(!1),Nl=or(null),Ll=null,xs=null,dh=null;function hh(){dh=xs=Ll=null}function fh(t){var e=Nl.current;pt(Nl),t._currentValue=e}function fd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function bs(t,e){Ll=t,dh=xs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(fn=!0),t.firstContext=null)}function kn(t){var e=t._currentValue;if(dh!==t)if(t={context:t,memoizedValue:e,next:null},xs===null){if(Ll===null)throw Error(pe(308));xs=t,Ll.dependencies={lanes:0,firstContext:t}}else xs=xs.next=t;return e}var br=null;function ph(t){br===null?br=[t]:br.push(t)}function bg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,ph(e)):(n.next=r.next,r.next=n),e.interleaved=n,wi(t,i)}function wi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ui=!1;function mh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function yi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Xi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,tt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,wi(t,n)}return r=i.interleaved,r===null?(e.next=e,ph(i)):(e.next=r.next,r.next=e),i.interleaved=e,wi(t,n)}function ul(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,eh(t,n)}}function Wf(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Dl(t,e,n,i){var r=t.updateQueue;Ui=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,h=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){h!==null&&(h=h.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,_=a;switch(f=e,p=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){d=v.call(p,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,f=typeof v=="function"?v.call(p,d,f):v,f==null)break e;d=St({},d,f);break e;case 2:Ui=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=p,l=d):h=h.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(h===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ur|=o,t.lanes=o,t.memoizedState=d}}function Xf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(pe(191,r));r.call(i)}}}var sa={},ri=or(sa),Wo=or(sa),Xo=or(sa);function Tr(t){if(t===sa)throw Error(pe(174));return t}function gh(t,e){switch(dt(Xo,e),dt(Wo,t),dt(ri,sa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Yu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Yu(e,t)}pt(ri),dt(ri,e)}function Us(){pt(ri),pt(Wo),pt(Xo)}function Ag(t){Tr(Xo.current);var e=Tr(ri.current),n=Yu(e,t.type);e!==n&&(dt(Wo,t),dt(ri,n))}function xh(t){Wo.current===t&&(pt(ri),pt(Wo))}var _t=or(0);function Il(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Hc=[];function vh(){for(var t=0;t<Hc.length;t++)Hc[t]._workInProgressVersionPrimary=null;Hc.length=0}var dl=bi.ReactCurrentDispatcher,Vc=bi.ReactCurrentBatchConfig,Ir=0,Mt=null,Pt=null,zt=null,Ul=!1,Ao=!1,Yo=0,hy=0;function qt(){throw Error(pe(321))}function _h(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!qn(t[n],e[n]))return!1;return!0}function yh(t,e,n,i,r,s){if(Ir=s,Mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,dl.current=t===null||t.memoizedState===null?gy:xy,t=n(i,r),Ao){s=0;do{if(Ao=!1,Yo=0,25<=s)throw Error(pe(301));s+=1,zt=Pt=null,e.updateQueue=null,dl.current=vy,t=n(i,r)}while(Ao)}if(dl.current=kl,e=Pt!==null&&Pt.next!==null,Ir=0,zt=Pt=Mt=null,Ul=!1,e)throw Error(pe(300));return t}function Mh(){var t=Yo!==0;return Yo=0,t}function Jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?Mt.memoizedState=zt=t:zt=zt.next=t,zt}function On(){if(Pt===null){var t=Mt.alternate;t=t!==null?t.memoizedState:null}else t=Pt.next;var e=zt===null?Mt.memoizedState:zt.next;if(e!==null)zt=e,Pt=t;else{if(t===null)throw Error(pe(310));Pt=t,t={memoizedState:Pt.memoizedState,baseState:Pt.baseState,baseQueue:Pt.baseQueue,queue:Pt.queue,next:null},zt===null?Mt.memoizedState=zt=t:zt=zt.next=t}return zt}function qo(t,e){return typeof e=="function"?e(t):e}function jc(t){var e=On(),n=e.queue;if(n===null)throw Error(pe(311));n.lastRenderedReducer=t;var i=Pt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((Ir&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Mt.lanes|=h,Ur|=h}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,qn(i,e.memoizedState)||(fn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Mt.lanes|=s,Ur|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Gc(t){var e=On(),n=e.queue;if(n===null)throw Error(pe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);qn(s,e.memoizedState)||(fn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Cg(){}function Rg(t,e){var n=Mt,i=On(),r=e(),s=!qn(i.memoizedState,r);if(s&&(i.memoizedState=r,fn=!0),i=i.queue,Sh(Lg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||zt!==null&&zt.memoizedState.tag&1){if(n.flags|=2048,$o(9,Ng.bind(null,n,i,r,e),void 0,null),Vt===null)throw Error(pe(349));Ir&30||Pg(n,e,r)}return r}function Pg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ng(t,e,n,i){e.value=n,e.getSnapshot=i,Dg(e)&&Ig(t)}function Lg(t,e,n){return n(function(){Dg(e)&&Ig(t)})}function Dg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!qn(t,n)}catch{return!0}}function Ig(t){var e=wi(t,1);e!==null&&Yn(e,t,1,-1)}function Yf(t){var e=Jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qo,lastRenderedState:t},e.queue=t,t=t.dispatch=my.bind(null,Mt,t),[e.memoizedState,t]}function $o(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Ug(){return On().memoizedState}function hl(t,e,n,i){var r=Jn();Mt.flags|=t,r.memoizedState=$o(1|e,n,void 0,i===void 0?null:i)}function ic(t,e,n,i){var r=On();i=i===void 0?null:i;var s=void 0;if(Pt!==null){var o=Pt.memoizedState;if(s=o.destroy,i!==null&&_h(i,o.deps)){r.memoizedState=$o(e,n,s,i);return}}Mt.flags|=t,r.memoizedState=$o(1|e,n,s,i)}function qf(t,e){return hl(8390656,8,t,e)}function Sh(t,e){return ic(2048,8,t,e)}function kg(t,e){return ic(4,2,t,e)}function Og(t,e){return ic(4,4,t,e)}function Fg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function zg(t,e,n){return n=n!=null?n.concat([t]):null,ic(4,4,Fg.bind(null,e,t),n)}function wh(){}function Bg(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&_h(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Hg(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&_h(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Vg(t,e,n){return Ir&21?(qn(n,e)||(n=Y0(),Mt.lanes|=n,Ur|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,fn=!0),t.memoizedState=n)}function fy(t,e){var n=ot;ot=n!==0&&4>n?n:4,t(!0);var i=Vc.transition;Vc.transition={};try{t(!1),e()}finally{ot=n,Vc.transition=i}}function jg(){return On().memoizedState}function py(t,e,n){var i=qi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Gg(t))Wg(e,n);else if(n=bg(t,e,n,i),n!==null){var r=sn();Yn(n,t,i,r),Xg(n,e,i)}}function my(t,e,n){var i=qi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gg(t))Wg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,qn(a,o)){var l=e.interleaved;l===null?(r.next=r,ph(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=bg(t,e,r,i),n!==null&&(r=sn(),Yn(n,t,i,r),Xg(n,e,i))}}function Gg(t){var e=t.alternate;return t===Mt||e!==null&&e===Mt}function Wg(t,e){Ao=Ul=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Xg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,eh(t,n)}}var kl={readContext:kn,useCallback:qt,useContext:qt,useEffect:qt,useImperativeHandle:qt,useInsertionEffect:qt,useLayoutEffect:qt,useMemo:qt,useReducer:qt,useRef:qt,useState:qt,useDebugValue:qt,useDeferredValue:qt,useTransition:qt,useMutableSource:qt,useSyncExternalStore:qt,useId:qt,unstable_isNewReconciler:!1},gy={readContext:kn,useCallback:function(t,e){return Jn().memoizedState=[t,e===void 0?null:e],t},useContext:kn,useEffect:qf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,hl(4194308,4,Fg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return hl(4194308,4,t,e)},useInsertionEffect:function(t,e){return hl(4,2,t,e)},useMemo:function(t,e){var n=Jn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Jn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=py.bind(null,Mt,t),[i.memoizedState,t]},useRef:function(t){var e=Jn();return t={current:t},e.memoizedState=t},useState:Yf,useDebugValue:wh,useDeferredValue:function(t){return Jn().memoizedState=t},useTransition:function(){var t=Yf(!1),e=t[0];return t=fy.bind(null,t[1]),Jn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Mt,r=Jn();if(gt){if(n===void 0)throw Error(pe(407));n=n()}else{if(n=e(),Vt===null)throw Error(pe(349));Ir&30||Pg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,qf(Lg.bind(null,i,s,t),[t]),i.flags|=2048,$o(9,Ng.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Jn(),e=Vt.identifierPrefix;if(gt){var n=vi,i=xi;n=(i&~(1<<32-Xn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Yo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=hy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},xy={readContext:kn,useCallback:Bg,useContext:kn,useEffect:Sh,useImperativeHandle:zg,useInsertionEffect:kg,useLayoutEffect:Og,useMemo:Hg,useReducer:jc,useRef:Ug,useState:function(){return jc(qo)},useDebugValue:wh,useDeferredValue:function(t){var e=On();return Vg(e,Pt.memoizedState,t)},useTransition:function(){var t=jc(qo)[0],e=On().memoizedState;return[t,e]},useMutableSource:Cg,useSyncExternalStore:Rg,useId:jg,unstable_isNewReconciler:!1},vy={readContext:kn,useCallback:Bg,useContext:kn,useEffect:Sh,useImperativeHandle:zg,useInsertionEffect:kg,useLayoutEffect:Og,useMemo:Hg,useReducer:Gc,useRef:Ug,useState:function(){return Gc(qo)},useDebugValue:wh,useDeferredValue:function(t){var e=On();return Pt===null?e.memoizedState=t:Vg(e,Pt.memoizedState,t)},useTransition:function(){var t=Gc(qo)[0],e=On().memoizedState;return[t,e]},useMutableSource:Cg,useSyncExternalStore:Rg,useId:jg,unstable_isNewReconciler:!1};function Vn(t,e){if(t&&t.defaultProps){e=St({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function pd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:St({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var rc={isMounted:function(t){return(t=t._reactInternals)?Hr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=sn(),r=qi(t),s=yi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Xi(t,s,r),e!==null&&(Yn(e,t,r,i),ul(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=sn(),r=qi(t),s=yi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Xi(t,s,r),e!==null&&(Yn(e,t,r,i),ul(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=sn(),i=qi(t),r=yi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Xi(t,r,i),e!==null&&(Yn(e,t,i,n),ul(e,t,i))}};function $f(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ho(n,i)||!Ho(r,s):!0}function Yg(t,e,n){var i=!1,r=er,s=e.contextType;return typeof s=="object"&&s!==null?s=kn(s):(r=mn(e)?Lr:en.current,i=e.contextTypes,s=(i=i!=null)?Ls(t,r):er),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=rc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Kf(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&rc.enqueueReplaceState(e,e.state,null)}function md(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},mh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=kn(s):(s=mn(e)?Lr:en.current,r.context=Ls(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(pd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&rc.enqueueReplaceState(r,r.state,null),Dl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ks(t,e){try{var n="",i=e;do n+=Xv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Wc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function gd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var _y=typeof WeakMap=="function"?WeakMap:Map;function qg(t,e,n){n=yi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Fl||(Fl=!0,Td=i),gd(t,e)},n}function $g(t,e,n){n=yi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){gd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){gd(t,e),typeof i!="function"&&(Yi===null?Yi=new Set([this]):Yi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Zf(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new _y;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Dy.bind(null,t,e,n),e.then(t,t))}function Jf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Qf(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=yi(-1,1),e.tag=2,Xi(n,e,1))),n.lanes|=1),t)}var yy=bi.ReactCurrentOwner,fn=!1;function rn(t,e,n,i){e.child=t===null?Eg(e,null,n,i):Is(e,t.child,n,i)}function ep(t,e,n,i,r){n=n.render;var s=e.ref;return bs(e,r),i=yh(t,e,n,i,s,r),n=Mh(),t!==null&&!fn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ei(t,e,r)):(gt&&n&&lh(e),e.flags|=1,rn(t,e,i,r),e.child)}function tp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Nh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Kg(t,e,s,i,r)):(t=gl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ho,n(o,i)&&t.ref===e.ref)return Ei(t,e,r)}return e.flags|=1,t=$i(s,i),t.ref=e.ref,t.return=e,e.child=t}function Kg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ho(s,i)&&t.ref===e.ref)if(fn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(fn=!0);else return e.lanes=t.lanes,Ei(t,e,r)}return xd(t,e,n,i,r)}function Zg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},dt(_s,yn),yn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,dt(_s,yn),yn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,dt(_s,yn),yn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,dt(_s,yn),yn|=i;return rn(t,e,r,n),e.child}function Jg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function xd(t,e,n,i,r){var s=mn(n)?Lr:en.current;return s=Ls(e,s),bs(e,r),n=yh(t,e,n,i,s,r),i=Mh(),t!==null&&!fn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ei(t,e,r)):(gt&&i&&lh(e),e.flags|=1,rn(t,e,n,r),e.child)}function np(t,e,n,i,r){if(mn(n)){var s=!0;Cl(e)}else s=!1;if(bs(e,r),e.stateNode===null)fl(t,e),Yg(e,n,i),md(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=kn(c):(c=mn(n)?Lr:en.current,c=Ls(e,c));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Kf(e,o,i,c),Ui=!1;var f=e.memoizedState;o.state=f,Dl(e,i,o,r),l=e.memoizedState,a!==i||f!==l||pn.current||Ui?(typeof h=="function"&&(pd(e,n,h,i),l=e.memoizedState),(a=Ui||$f(e,n,a,i,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Tg(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Vn(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=kn(l):(l=mn(n)?Lr:en.current,l=Ls(e,l));var p=n.getDerivedStateFromProps;(h=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Kf(e,o,i,l),Ui=!1,f=e.memoizedState,o.state=f,Dl(e,i,o,r);var v=e.memoizedState;a!==d||f!==v||pn.current||Ui?(typeof p=="function"&&(pd(e,n,p,i),v=e.memoizedState),(c=Ui||$f(e,n,c,i,f,v,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return vd(t,e,n,i,s,r)}function vd(t,e,n,i,r,s){Jg(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Hf(e,n,!1),Ei(t,e,s);i=e.stateNode,yy.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Is(e,t.child,null,s),e.child=Is(e,null,a,s)):rn(t,e,a,s),e.memoizedState=i.state,r&&Hf(e,n,!0),e.child}function Qg(t){var e=t.stateNode;e.pendingContext?Bf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Bf(t,e.context,!1),gh(t,e.containerInfo)}function ip(t,e,n,i,r){return Ds(),uh(r),e.flags|=256,rn(t,e,n,i),e.child}var _d={dehydrated:null,treeContext:null,retryLane:0};function yd(t){return{baseLanes:t,cachePool:null,transitions:null}}function ex(t,e,n){var i=e.pendingProps,r=_t.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),dt(_t,r&1),t===null)return hd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ac(o,i,0,null),t=Nr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=yd(n),e.memoizedState=_d,t):Eh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return My(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=$i(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=$i(a,s):(s=Nr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?yd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=_d,i}return s=t.child,t=s.sibling,i=$i(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Eh(t,e){return e=ac({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Aa(t,e,n,i){return i!==null&&uh(i),Is(e,t.child,null,n),t=Eh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function My(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Wc(Error(pe(422))),Aa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ac({mode:"visible",children:i.children},r,0,null),s=Nr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Is(e,t.child,null,o),e.child.memoizedState=yd(o),e.memoizedState=_d,s);if(!(e.mode&1))return Aa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(pe(419)),i=Wc(s,i,void 0),Aa(t,e,o,i)}if(a=(o&t.childLanes)!==0,fn||a){if(i=Vt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,wi(t,r),Yn(i,t,r,-1))}return Ph(),i=Wc(Error(pe(421))),Aa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Iy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Mn=Wi(r.nextSibling),Sn=e,gt=!0,Gn=null,t!==null&&(Rn[Pn++]=xi,Rn[Pn++]=vi,Rn[Pn++]=Dr,xi=t.id,vi=t.overflow,Dr=e),e=Eh(e,i.children),e.flags|=4096,e)}function rp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),fd(t.return,e,n)}function Xc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function tx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(rn(t,e,i.children,n),i=_t.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rp(t,n,e);else if(t.tag===19)rp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(dt(_t,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Il(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Xc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Il(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Xc(e,!0,n,null,s);break;case"together":Xc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function fl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ei(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ur|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(pe(153));if(e.child!==null){for(t=e.child,n=$i(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=$i(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Sy(t,e,n){switch(e.tag){case 3:Qg(e),Ds();break;case 5:Ag(e);break;case 1:mn(e.type)&&Cl(e);break;case 4:gh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;dt(Nl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(dt(_t,_t.current&1),e.flags|=128,null):n&e.child.childLanes?ex(t,e,n):(dt(_t,_t.current&1),t=Ei(t,e,n),t!==null?t.sibling:null);dt(_t,_t.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return tx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),dt(_t,_t.current),i)break;return null;case 22:case 23:return e.lanes=0,Zg(t,e,n)}return Ei(t,e,n)}var nx,Md,ix,rx;nx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Md=function(){};ix=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Tr(ri.current);var s=null;switch(n){case"input":r=ju(t,r),i=ju(t,i),s=[];break;case"select":r=St({},r,{value:void 0}),i=St({},i,{value:void 0}),s=[];break;case"textarea":r=Xu(t,r),i=Xu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Tl)}qu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Io.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Io.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ht("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};rx=function(t,e,n,i){n!==i&&(e.flags|=4)};function so(t,e){if(!gt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function $t(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function wy(t,e,n){var i=e.pendingProps;switch(ch(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(e),null;case 1:return mn(e.type)&&Al(),$t(e),null;case 3:return i=e.stateNode,Us(),pt(pn),pt(en),vh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ba(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gn!==null&&(Rd(Gn),Gn=null))),Md(t,e),$t(e),null;case 5:xh(e);var r=Tr(Xo.current);if(n=e.type,t!==null&&e.stateNode!=null)ix(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(pe(166));return $t(e),null}if(t=Tr(ri.current),ba(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ei]=e,i[Go]=s,t=(e.mode&1)!==0,n){case"dialog":ht("cancel",i),ht("close",i);break;case"iframe":case"object":case"embed":ht("load",i);break;case"video":case"audio":for(r=0;r<_o.length;r++)ht(_o[r],i);break;case"source":ht("error",i);break;case"img":case"image":case"link":ht("error",i),ht("load",i);break;case"details":ht("toggle",i);break;case"input":ff(i,s),ht("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ht("invalid",i);break;case"textarea":mf(i,s),ht("invalid",i)}qu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ea(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ea(i.textContent,a,t),r=["children",""+a]):Io.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ht("scroll",i)}switch(n){case"input":ga(i),pf(i,s,!0);break;case"textarea":ga(i),gf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Tl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=L0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ei]=e,t[Go]=i,nx(t,e,!1,!1),e.stateNode=t;e:{switch(o=$u(n,i),n){case"dialog":ht("cancel",t),ht("close",t),r=i;break;case"iframe":case"object":case"embed":ht("load",t),r=i;break;case"video":case"audio":for(r=0;r<_o.length;r++)ht(_o[r],t);r=i;break;case"source":ht("error",t),r=i;break;case"img":case"image":case"link":ht("error",t),ht("load",t),r=i;break;case"details":ht("toggle",t),r=i;break;case"input":ff(t,i),r=ju(t,i),ht("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=St({},i,{value:void 0}),ht("invalid",t);break;case"textarea":mf(t,i),r=Xu(t,i),ht("invalid",t);break;default:r=i}qu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?U0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&D0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Uo(t,l):typeof l=="number"&&Uo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Io.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ht("scroll",t):l!=null&&qd(t,s,l,o))}switch(n){case"input":ga(t),pf(t,i,!1);break;case"textarea":ga(t),gf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Qi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ms(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ms(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Tl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return $t(e),null;case 6:if(t&&e.stateNode!=null)rx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(pe(166));if(n=Tr(Xo.current),Tr(ri.current),ba(e)){if(i=e.stateNode,n=e.memoizedProps,i[ei]=e,(s=i.nodeValue!==n)&&(t=Sn,t!==null))switch(t.tag){case 3:Ea(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ea(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ei]=e,e.stateNode=i}return $t(e),null;case 13:if(pt(_t),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(gt&&Mn!==null&&e.mode&1&&!(e.flags&128))Sg(),Ds(),e.flags|=98560,s=!1;else if(s=ba(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(pe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(pe(317));s[ei]=e}else Ds(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$t(e),s=!1}else Gn!==null&&(Rd(Gn),Gn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||_t.current&1?Nt===0&&(Nt=3):Ph())),e.updateQueue!==null&&(e.flags|=4),$t(e),null);case 4:return Us(),Md(t,e),t===null&&Vo(e.stateNode.containerInfo),$t(e),null;case 10:return fh(e.type._context),$t(e),null;case 17:return mn(e.type)&&Al(),$t(e),null;case 19:if(pt(_t),s=e.memoizedState,s===null)return $t(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)so(s,!1);else{if(Nt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Il(t),o!==null){for(e.flags|=128,so(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return dt(_t,_t.current&1|2),e.child}t=t.sibling}s.tail!==null&&At()>Os&&(e.flags|=128,i=!0,so(s,!1),e.lanes=4194304)}else{if(!i)if(t=Il(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),so(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!gt)return $t(e),null}else 2*At()-s.renderingStartTime>Os&&n!==1073741824&&(e.flags|=128,i=!0,so(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=At(),e.sibling=null,n=_t.current,dt(_t,i?n&1|2:n&1),e):($t(e),null);case 22:case 23:return Rh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?yn&1073741824&&($t(e),e.subtreeFlags&6&&(e.flags|=8192)):$t(e),null;case 24:return null;case 25:return null}throw Error(pe(156,e.tag))}function Ey(t,e){switch(ch(e),e.tag){case 1:return mn(e.type)&&Al(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Us(),pt(pn),pt(en),vh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return xh(e),null;case 13:if(pt(_t),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(pe(340));Ds()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pt(_t),null;case 4:return Us(),null;case 10:return fh(e.type._context),null;case 22:case 23:return Rh(),null;case 24:return null;default:return null}}var Ca=!1,Jt=!1,by=typeof WeakSet=="function"?WeakSet:Set,Ne=null;function vs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){bt(t,e,i)}else n.current=null}function Sd(t,e,n){try{n()}catch(i){bt(t,e,i)}}var sp=!1;function Ty(t,e){if(sd=wl,t=cg(),ah(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,d=t,f=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++h===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(od={focusedElem:t,selectionRange:n},wl=!1,Ne=e;Ne!==null;)if(e=Ne,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ne=t;else for(;Ne!==null;){e=Ne;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,m=v.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?_:Vn(e.type,_),m);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(pe(163))}}catch(M){bt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Ne=t;break}Ne=e.return}return v=sp,sp=!1,v}function Co(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Sd(e,n,s)}r=r.next}while(r!==i)}}function sc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function wd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function sx(t){var e=t.alternate;e!==null&&(t.alternate=null,sx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ei],delete e[Go],delete e[cd],delete e[ly],delete e[cy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ox(t){return t.tag===5||t.tag===3||t.tag===4}function op(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ox(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ed(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Tl));else if(i!==4&&(t=t.child,t!==null))for(Ed(t,e,n),t=t.sibling;t!==null;)Ed(t,e,n),t=t.sibling}function bd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(bd(t,e,n),t=t.sibling;t!==null;)bd(t,e,n),t=t.sibling}var jt=null,jn=!1;function Ai(t,e,n){for(n=n.child;n!==null;)ax(t,e,n),n=n.sibling}function ax(t,e,n){if(ii&&typeof ii.onCommitFiberUnmount=="function")try{ii.onCommitFiberUnmount(Zl,n)}catch{}switch(n.tag){case 5:Jt||vs(n,e);case 6:var i=jt,r=jn;jt=null,Ai(t,e,n),jt=i,jn=r,jt!==null&&(jn?(t=jt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):jt.removeChild(n.stateNode));break;case 18:jt!==null&&(jn?(t=jt,n=n.stateNode,t.nodeType===8?zc(t.parentNode,n):t.nodeType===1&&zc(t,n),zo(t)):zc(jt,n.stateNode));break;case 4:i=jt,r=jn,jt=n.stateNode.containerInfo,jn=!0,Ai(t,e,n),jt=i,jn=r;break;case 0:case 11:case 14:case 15:if(!Jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Sd(n,e,o),r=r.next}while(r!==i)}Ai(t,e,n);break;case 1:if(!Jt&&(vs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){bt(n,e,a)}Ai(t,e,n);break;case 21:Ai(t,e,n);break;case 22:n.mode&1?(Jt=(i=Jt)||n.memoizedState!==null,Ai(t,e,n),Jt=i):Ai(t,e,n);break;default:Ai(t,e,n)}}function ap(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new by),e.forEach(function(i){var r=Uy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Fn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:jt=a.stateNode,jn=!1;break e;case 3:jt=a.stateNode.containerInfo,jn=!0;break e;case 4:jt=a.stateNode.containerInfo,jn=!0;break e}a=a.return}if(jt===null)throw Error(pe(160));ax(s,o,r),jt=null,jn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){bt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)lx(e,t),e=e.sibling}function lx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Fn(e,t),Zn(t),i&4){try{Co(3,t,t.return),sc(3,t)}catch(_){bt(t,t.return,_)}try{Co(5,t,t.return)}catch(_){bt(t,t.return,_)}}break;case 1:Fn(e,t),Zn(t),i&512&&n!==null&&vs(n,n.return);break;case 5:if(Fn(e,t),Zn(t),i&512&&n!==null&&vs(n,n.return),t.flags&32){var r=t.stateNode;try{Uo(r,"")}catch(_){bt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&P0(r,s),$u(a,o);var c=$u(a,s);for(o=0;o<l.length;o+=2){var h=l[o],d=l[o+1];h==="style"?U0(r,d):h==="dangerouslySetInnerHTML"?D0(r,d):h==="children"?Uo(r,d):qd(r,h,d,c)}switch(a){case"input":Gu(r,s);break;case"textarea":N0(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ms(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ms(r,!!s.multiple,s.defaultValue,!0):Ms(r,!!s.multiple,s.multiple?[]:"",!1))}r[Go]=s}catch(_){bt(t,t.return,_)}}break;case 6:if(Fn(e,t),Zn(t),i&4){if(t.stateNode===null)throw Error(pe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){bt(t,t.return,_)}}break;case 3:if(Fn(e,t),Zn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{zo(e.containerInfo)}catch(_){bt(t,t.return,_)}break;case 4:Fn(e,t),Zn(t);break;case 13:Fn(e,t),Zn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Ah=At())),i&4&&ap(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Jt=(c=Jt)||h,Fn(e,t),Jt=c):Fn(e,t),Zn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(Ne=t,h=t.child;h!==null;){for(d=Ne=h;Ne!==null;){switch(f=Ne,p=f.child,f.tag){case 0:case 11:case 14:case 15:Co(4,f,f.return);break;case 1:vs(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){bt(i,n,_)}}break;case 5:vs(f,f.return);break;case 22:if(f.memoizedState!==null){cp(d);continue}}p!==null?(p.return=f,Ne=p):cp(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=I0("display",o))}catch(_){bt(t,t.return,_)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(_){bt(t,t.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Fn(e,t),Zn(t),i&4&&ap(t);break;case 21:break;default:Fn(e,t),Zn(t)}}function Zn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ox(n)){var i=n;break e}n=n.return}throw Error(pe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Uo(r,""),i.flags&=-33);var s=op(t);bd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=op(t);Ed(t,a,o);break;default:throw Error(pe(161))}}catch(l){bt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ay(t,e,n){Ne=t,cx(t)}function cx(t,e,n){for(var i=(t.mode&1)!==0;Ne!==null;){var r=Ne,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ca;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Jt;a=Ca;var c=Jt;if(Ca=o,(Jt=l)&&!c)for(Ne=r;Ne!==null;)o=Ne,l=o.child,o.tag===22&&o.memoizedState!==null?up(r):l!==null?(l.return=o,Ne=l):up(r);for(;s!==null;)Ne=s,cx(s),s=s.sibling;Ne=r,Ca=a,Jt=c}lp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ne=s):lp(t)}}function lp(t){for(;Ne!==null;){var e=Ne;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Jt||sc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Vn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Xf(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Xf(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&zo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(pe(163))}Jt||e.flags&512&&wd(e)}catch(f){bt(e,e.return,f)}}if(e===t){Ne=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ne=n;break}Ne=e.return}}function cp(t){for(;Ne!==null;){var e=Ne;if(e===t){Ne=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ne=n;break}Ne=e.return}}function up(t){for(;Ne!==null;){var e=Ne;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{sc(4,e)}catch(l){bt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){bt(e,r,l)}}var s=e.return;try{wd(e)}catch(l){bt(e,s,l)}break;case 5:var o=e.return;try{wd(e)}catch(l){bt(e,o,l)}}}catch(l){bt(e,e.return,l)}if(e===t){Ne=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ne=a;break}Ne=e.return}}var Cy=Math.ceil,Ol=bi.ReactCurrentDispatcher,bh=bi.ReactCurrentOwner,In=bi.ReactCurrentBatchConfig,tt=0,Vt=null,Rt=null,Wt=0,yn=0,_s=or(0),Nt=0,Ko=null,Ur=0,oc=0,Th=0,Ro=null,dn=null,Ah=0,Os=1/0,pi=null,Fl=!1,Td=null,Yi=null,Ra=!1,Bi=null,zl=0,Po=0,Ad=null,pl=-1,ml=0;function sn(){return tt&6?At():pl!==-1?pl:pl=At()}function qi(t){return t.mode&1?tt&2&&Wt!==0?Wt&-Wt:dy.transition!==null?(ml===0&&(ml=Y0()),ml):(t=ot,t!==0||(t=window.event,t=t===void 0?16:eg(t.type)),t):1}function Yn(t,e,n,i){if(50<Po)throw Po=0,Ad=null,Error(pe(185));na(t,n,i),(!(tt&2)||t!==Vt)&&(t===Vt&&(!(tt&2)&&(oc|=n),Nt===4&&Oi(t,Wt)),gn(t,i),n===1&&tt===0&&!(e.mode&1)&&(Os=At()+500,nc&&ar()))}function gn(t,e){var n=t.callbackNode;d_(t,e);var i=Sl(t,t===Vt?Wt:0);if(i===0)n!==null&&_f(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&_f(n),e===1)t.tag===0?uy(dp.bind(null,t)):_g(dp.bind(null,t)),oy(function(){!(tt&6)&&ar()}),n=null;else{switch(q0(i)){case 1:n=Qd;break;case 4:n=W0;break;case 16:n=Ml;break;case 536870912:n=X0;break;default:n=Ml}n=xx(n,ux.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ux(t,e){if(pl=-1,ml=0,tt&6)throw Error(pe(327));var n=t.callbackNode;if(Ts()&&t.callbackNode!==n)return null;var i=Sl(t,t===Vt?Wt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Bl(t,i);else{e=i;var r=tt;tt|=2;var s=hx();(Vt!==t||Wt!==e)&&(pi=null,Os=At()+500,Pr(t,e));do try{Ny();break}catch(a){dx(t,a)}while(!0);hh(),Ol.current=s,tt=r,Rt!==null?e=0:(Vt=null,Wt=0,e=Nt)}if(e!==0){if(e===2&&(r=ed(t),r!==0&&(i=r,e=Cd(t,r))),e===1)throw n=Ko,Pr(t,0),Oi(t,i),gn(t,At()),n;if(e===6)Oi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Ry(r)&&(e=Bl(t,i),e===2&&(s=ed(t),s!==0&&(i=s,e=Cd(t,s))),e===1))throw n=Ko,Pr(t,0),Oi(t,i),gn(t,At()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(pe(345));case 2:yr(t,dn,pi);break;case 3:if(Oi(t,i),(i&130023424)===i&&(e=Ah+500-At(),10<e)){if(Sl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){sn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ld(yr.bind(null,t,dn,pi),e);break}yr(t,dn,pi);break;case 4:if(Oi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Xn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=At()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Cy(i/1960))-i,10<i){t.timeoutHandle=ld(yr.bind(null,t,dn,pi),i);break}yr(t,dn,pi);break;case 5:yr(t,dn,pi);break;default:throw Error(pe(329))}}}return gn(t,At()),t.callbackNode===n?ux.bind(null,t):null}function Cd(t,e){var n=Ro;return t.current.memoizedState.isDehydrated&&(Pr(t,e).flags|=256),t=Bl(t,e),t!==2&&(e=dn,dn=n,e!==null&&Rd(e)),t}function Rd(t){dn===null?dn=t:dn.push.apply(dn,t)}function Ry(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!qn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Oi(t,e){for(e&=~Th,e&=~oc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xn(e),i=1<<n;t[n]=-1,e&=~i}}function dp(t){if(tt&6)throw Error(pe(327));Ts();var e=Sl(t,0);if(!(e&1))return gn(t,At()),null;var n=Bl(t,e);if(t.tag!==0&&n===2){var i=ed(t);i!==0&&(e=i,n=Cd(t,i))}if(n===1)throw n=Ko,Pr(t,0),Oi(t,e),gn(t,At()),n;if(n===6)throw Error(pe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,yr(t,dn,pi),gn(t,At()),null}function Ch(t,e){var n=tt;tt|=1;try{return t(e)}finally{tt=n,tt===0&&(Os=At()+500,nc&&ar())}}function kr(t){Bi!==null&&Bi.tag===0&&!(tt&6)&&Ts();var e=tt;tt|=1;var n=In.transition,i=ot;try{if(In.transition=null,ot=1,t)return t()}finally{ot=i,In.transition=n,tt=e,!(tt&6)&&ar()}}function Rh(){yn=_s.current,pt(_s)}function Pr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,sy(n)),Rt!==null)for(n=Rt.return;n!==null;){var i=n;switch(ch(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Al();break;case 3:Us(),pt(pn),pt(en),vh();break;case 5:xh(i);break;case 4:Us();break;case 13:pt(_t);break;case 19:pt(_t);break;case 10:fh(i.type._context);break;case 22:case 23:Rh()}n=n.return}if(Vt=t,Rt=t=$i(t.current,null),Wt=yn=e,Nt=0,Ko=null,Th=oc=Ur=0,dn=Ro=null,br!==null){for(e=0;e<br.length;e++)if(n=br[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}br=null}return t}function dx(t,e){do{var n=Rt;try{if(hh(),dl.current=kl,Ul){for(var i=Mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ul=!1}if(Ir=0,zt=Pt=Mt=null,Ao=!1,Yo=0,bh.current=null,n===null||n.return===null){Nt=1,Ko=e,Rt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Wt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=Jf(o);if(p!==null){p.flags&=-257,Qf(p,o,a,s,e),p.mode&1&&Zf(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){Zf(s,c,e),Ph();break e}l=Error(pe(426))}}else if(gt&&a.mode&1){var m=Jf(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Qf(m,o,a,s,e),uh(ks(l,a));break e}}s=l=ks(l,a),Nt!==4&&(Nt=2),Ro===null?Ro=[s]:Ro.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=qg(s,l,e);Wf(s,u);break e;case 1:a=l;var g=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Yi===null||!Yi.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=$g(s,a,e);Wf(s,M);break e}}s=s.return}while(s!==null)}px(n)}catch(C){e=C,Rt===n&&n!==null&&(Rt=n=n.return);continue}break}while(!0)}function hx(){var t=Ol.current;return Ol.current=kl,t===null?kl:t}function Ph(){(Nt===0||Nt===3||Nt===2)&&(Nt=4),Vt===null||!(Ur&268435455)&&!(oc&268435455)||Oi(Vt,Wt)}function Bl(t,e){var n=tt;tt|=2;var i=hx();(Vt!==t||Wt!==e)&&(pi=null,Pr(t,e));do try{Py();break}catch(r){dx(t,r)}while(!0);if(hh(),tt=n,Ol.current=i,Rt!==null)throw Error(pe(261));return Vt=null,Wt=0,Nt}function Py(){for(;Rt!==null;)fx(Rt)}function Ny(){for(;Rt!==null&&!n_();)fx(Rt)}function fx(t){var e=gx(t.alternate,t,yn);t.memoizedProps=t.pendingProps,e===null?px(t):Rt=e,bh.current=null}function px(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ey(n,e),n!==null){n.flags&=32767,Rt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Nt=6,Rt=null;return}}else if(n=wy(n,e,yn),n!==null){Rt=n;return}if(e=e.sibling,e!==null){Rt=e;return}Rt=e=t}while(e!==null);Nt===0&&(Nt=5)}function yr(t,e,n){var i=ot,r=In.transition;try{In.transition=null,ot=1,Ly(t,e,n,i)}finally{In.transition=r,ot=i}return null}function Ly(t,e,n,i){do Ts();while(Bi!==null);if(tt&6)throw Error(pe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(pe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(h_(t,s),t===Vt&&(Rt=Vt=null,Wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ra||(Ra=!0,xx(Ml,function(){return Ts(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=In.transition,In.transition=null;var o=ot;ot=1;var a=tt;tt|=4,bh.current=null,Ty(t,n),lx(n,t),J_(od),wl=!!sd,od=sd=null,t.current=n,Ay(n),i_(),tt=a,ot=o,In.transition=s}else t.current=n;if(Ra&&(Ra=!1,Bi=t,zl=r),s=t.pendingLanes,s===0&&(Yi=null),o_(n.stateNode),gn(t,At()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Fl)throw Fl=!1,t=Td,Td=null,t;return zl&1&&t.tag!==0&&Ts(),s=t.pendingLanes,s&1?t===Ad?Po++:(Po=0,Ad=t):Po=0,ar(),null}function Ts(){if(Bi!==null){var t=q0(zl),e=In.transition,n=ot;try{if(In.transition=null,ot=16>t?16:t,Bi===null)var i=!1;else{if(t=Bi,Bi=null,zl=0,tt&6)throw Error(pe(331));var r=tt;for(tt|=4,Ne=t.current;Ne!==null;){var s=Ne,o=s.child;if(Ne.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ne=c;Ne!==null;){var h=Ne;switch(h.tag){case 0:case 11:case 15:Co(8,h,s)}var d=h.child;if(d!==null)d.return=h,Ne=d;else for(;Ne!==null;){h=Ne;var f=h.sibling,p=h.return;if(sx(h),h===c){Ne=null;break}if(f!==null){f.return=p,Ne=f;break}Ne=p}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}Ne=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ne=o;else e:for(;Ne!==null;){if(s=Ne,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Co(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Ne=u;break e}Ne=s.return}}var g=t.current;for(Ne=g;Ne!==null;){o=Ne;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,Ne=y;else e:for(o=g;Ne!==null;){if(a=Ne,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:sc(9,a)}}catch(C){bt(a,a.return,C)}if(a===o){Ne=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,Ne=M;break e}Ne=a.return}}if(tt=r,ar(),ii&&typeof ii.onPostCommitFiberRoot=="function")try{ii.onPostCommitFiberRoot(Zl,t)}catch{}i=!0}return i}finally{ot=n,In.transition=e}}return!1}function hp(t,e,n){e=ks(n,e),e=qg(t,e,1),t=Xi(t,e,1),e=sn(),t!==null&&(na(t,1,e),gn(t,e))}function bt(t,e,n){if(t.tag===3)hp(t,t,n);else for(;e!==null;){if(e.tag===3){hp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Yi===null||!Yi.has(i))){t=ks(n,t),t=$g(e,t,1),e=Xi(e,t,1),t=sn(),e!==null&&(na(e,1,t),gn(e,t));break}}e=e.return}}function Dy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=sn(),t.pingedLanes|=t.suspendedLanes&n,Vt===t&&(Wt&n)===n&&(Nt===4||Nt===3&&(Wt&130023424)===Wt&&500>At()-Ah?Pr(t,0):Th|=n),gn(t,e)}function mx(t,e){e===0&&(t.mode&1?(e=_a,_a<<=1,!(_a&130023424)&&(_a=4194304)):e=1);var n=sn();t=wi(t,e),t!==null&&(na(t,e,n),gn(t,n))}function Iy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),mx(t,n)}function Uy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(pe(314))}i!==null&&i.delete(e),mx(t,n)}var gx;gx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||pn.current)fn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return fn=!1,Sy(t,e,n);fn=!!(t.flags&131072)}else fn=!1,gt&&e.flags&1048576&&yg(e,Pl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;fl(t,e),t=e.pendingProps;var r=Ls(e,en.current);bs(e,n),r=yh(null,e,i,t,r,n);var s=Mh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mn(i)?(s=!0,Cl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,mh(e),r.updater=rc,e.stateNode=r,r._reactInternals=e,md(e,i,t,n),e=vd(null,e,i,!0,s,n)):(e.tag=0,gt&&s&&lh(e),rn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(fl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Oy(i),t=Vn(i,t),r){case 0:e=xd(null,e,i,t,n);break e;case 1:e=np(null,e,i,t,n);break e;case 11:e=ep(null,e,i,t,n);break e;case 14:e=tp(null,e,i,Vn(i.type,t),n);break e}throw Error(pe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),xd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),np(t,e,i,r,n);case 3:e:{if(Qg(e),t===null)throw Error(pe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Tg(t,e),Dl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ks(Error(pe(423)),e),e=ip(t,e,i,n,r);break e}else if(i!==r){r=ks(Error(pe(424)),e),e=ip(t,e,i,n,r);break e}else for(Mn=Wi(e.stateNode.containerInfo.firstChild),Sn=e,gt=!0,Gn=null,n=Eg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ds(),i===r){e=Ei(t,e,n);break e}rn(t,e,i,n)}e=e.child}return e;case 5:return Ag(e),t===null&&hd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,ad(i,r)?o=null:s!==null&&ad(i,s)&&(e.flags|=32),Jg(t,e),rn(t,e,o,n),e.child;case 6:return t===null&&hd(e),null;case 13:return ex(t,e,n);case 4:return gh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Is(e,null,i,n):rn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),ep(t,e,i,r,n);case 7:return rn(t,e,e.pendingProps,n),e.child;case 8:return rn(t,e,e.pendingProps.children,n),e.child;case 12:return rn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,dt(Nl,i._currentValue),i._currentValue=o,s!==null)if(qn(s.value,o)){if(s.children===r.children&&!pn.current){e=Ei(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=yi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),fd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(pe(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),fd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}rn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,bs(e,n),r=kn(r),i=i(r),e.flags|=1,rn(t,e,i,n),e.child;case 14:return i=e.type,r=Vn(i,e.pendingProps),r=Vn(i.type,r),tp(t,e,i,r,n);case 15:return Kg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),fl(t,e),e.tag=1,mn(i)?(t=!0,Cl(e)):t=!1,bs(e,n),Yg(e,i,r),md(e,i,r,n),vd(null,e,i,!0,t,n);case 19:return tx(t,e,n);case 22:return Zg(t,e,n)}throw Error(pe(156,e.tag))};function xx(t,e){return G0(t,e)}function ky(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(t,e,n,i){return new ky(t,e,n,i)}function Nh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Oy(t){if(typeof t=="function")return Nh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Kd)return 11;if(t===Zd)return 14}return 2}function $i(t,e){var n=t.alternate;return n===null?(n=Ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function gl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Nh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case cs:return Nr(n.children,r,s,e);case $d:o=8,r|=8;break;case zu:return t=Ln(12,n,e,r|2),t.elementType=zu,t.lanes=s,t;case Bu:return t=Ln(13,n,e,r),t.elementType=Bu,t.lanes=s,t;case Hu:return t=Ln(19,n,e,r),t.elementType=Hu,t.lanes=s,t;case A0:return ac(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case b0:o=10;break e;case T0:o=9;break e;case Kd:o=11;break e;case Zd:o=14;break e;case Ii:o=16,i=null;break e}throw Error(pe(130,t==null?t:typeof t,""))}return e=Ln(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Nr(t,e,n,i){return t=Ln(7,t,i,e),t.lanes=n,t}function ac(t,e,n,i){return t=Ln(22,t,i,e),t.elementType=A0,t.lanes=n,t.stateNode={isHidden:!1},t}function Yc(t,e,n){return t=Ln(6,t,null,e),t.lanes=n,t}function qc(t,e,n){return e=Ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Fy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cc(0),this.expirationTimes=Cc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Lh(t,e,n,i,r,s,o,a,l){return t=new Fy(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ln(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mh(s),t}function zy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ls,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function vx(t){if(!t)return er;t=t._reactInternals;e:{if(Hr(t)!==t||t.tag!==1)throw Error(pe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(pe(171))}if(t.tag===1){var n=t.type;if(mn(n))return vg(t,n,e)}return e}function _x(t,e,n,i,r,s,o,a,l){return t=Lh(n,i,!0,t,r,s,o,a,l),t.context=vx(null),n=t.current,i=sn(),r=qi(n),s=yi(i,r),s.callback=e??null,Xi(n,s,r),t.current.lanes=r,na(t,r,i),gn(t,i),t}function lc(t,e,n,i){var r=e.current,s=sn(),o=qi(r);return n=vx(n),e.context===null?e.context=n:e.pendingContext=n,e=yi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Xi(r,e,o),t!==null&&(Yn(t,r,o,s),ul(t,r,o)),o}function Hl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function fp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Dh(t,e){fp(t,e),(t=t.alternate)&&fp(t,e)}function By(){return null}var yx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ih(t){this._internalRoot=t}cc.prototype.render=Ih.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(pe(409));lc(t,e,null,null)};cc.prototype.unmount=Ih.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;kr(function(){lc(null,t,null,null)}),e[Si]=null}};function cc(t){this._internalRoot=t}cc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Z0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ki.length&&e!==0&&e<ki[n].priority;n++);ki.splice(n,0,t),n===0&&Q0(t)}};function Uh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function uc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function pp(){}function Hy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Hl(o);s.call(c)}}var o=_x(e,i,t,0,null,!1,!1,"",pp);return t._reactRootContainer=o,t[Si]=o.current,Vo(t.nodeType===8?t.parentNode:t),kr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Hl(l);a.call(c)}}var l=Lh(t,0,!1,null,null,!1,!1,"",pp);return t._reactRootContainer=l,t[Si]=l.current,Vo(t.nodeType===8?t.parentNode:t),kr(function(){lc(e,l,n,i)}),l}function dc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Hl(o);a.call(l)}}lc(e,o,t,r)}else o=Hy(n,e,t,r,i);return Hl(o)}$0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=vo(e.pendingLanes);n!==0&&(eh(e,n|1),gn(e,At()),!(tt&6)&&(Os=At()+500,ar()))}break;case 13:kr(function(){var i=wi(t,1);if(i!==null){var r=sn();Yn(i,t,1,r)}}),Dh(t,1)}};th=function(t){if(t.tag===13){var e=wi(t,134217728);if(e!==null){var n=sn();Yn(e,t,134217728,n)}Dh(t,134217728)}};K0=function(t){if(t.tag===13){var e=qi(t),n=wi(t,e);if(n!==null){var i=sn();Yn(n,t,e,i)}Dh(t,e)}};Z0=function(){return ot};J0=function(t,e){var n=ot;try{return ot=t,e()}finally{ot=n}};Zu=function(t,e,n){switch(e){case"input":if(Gu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=tc(i);if(!r)throw Error(pe(90));R0(i),Gu(i,r)}}}break;case"textarea":N0(t,n);break;case"select":e=n.value,e!=null&&Ms(t,!!n.multiple,e,!1)}};F0=Ch;z0=kr;var Vy={usingClientEntryPoint:!1,Events:[ra,fs,tc,k0,O0,Ch]},oo={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jy={bundleType:oo.bundleType,version:oo.version,rendererPackageName:oo.rendererPackageName,rendererConfig:oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=V0(t),t===null?null:t.stateNode},findFiberByHostInstance:oo.findFiberByHostInstance||By,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pa.isDisabled&&Pa.supportsFiber)try{Zl=Pa.inject(jy),ii=Pa}catch{}}En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vy;En.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Uh(e))throw Error(pe(200));return zy(t,e,null,n)};En.createRoot=function(t,e){if(!Uh(t))throw Error(pe(299));var n=!1,i="",r=yx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Lh(t,1,!1,null,null,n,!1,i,r),t[Si]=e.current,Vo(t.nodeType===8?t.parentNode:t),new Ih(e)};En.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(pe(188)):(t=Object.keys(t).join(","),Error(pe(268,t)));return t=V0(e),t=t===null?null:t.stateNode,t};En.flushSync=function(t){return kr(t)};En.hydrate=function(t,e,n){if(!uc(e))throw Error(pe(200));return dc(null,t,e,!0,n)};En.hydrateRoot=function(t,e,n){if(!Uh(t))throw Error(pe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=yx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=_x(e,null,t,1,n??null,r,!1,s,o),t[Si]=e.current,Vo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new cc(e)};En.render=function(t,e,n){if(!uc(e))throw Error(pe(200));return dc(null,t,e,!1,n)};En.unmountComponentAtNode=function(t){if(!uc(t))throw Error(pe(40));return t._reactRootContainer?(kr(function(){dc(null,null,t,!1,function(){t._reactRootContainer=null,t[Si]=null})}),!0):!1};En.unstable_batchedUpdates=Ch;En.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!uc(n))throw Error(pe(200));if(t==null||t._reactInternals===void 0)throw Error(pe(38));return dc(t,e,n,!1,i)};En.version="18.3.1-next-f1338f8080-20240426";function Mx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mx)}catch(t){console.error(t)}}Mx(),M0.exports=En;var Gy=M0.exports,mp=Gy;Ou.createRoot=mp.createRoot,Ou.hydrateRoot=mp.hydrateRoot;const xt={body:{rotation:{x:0,y:0,z:0},position:{x:0,y:0,z:0}},head:{rotation:{x:0,y:0,z:0}},leftArm:{rotation:{x:0,y:0,z:15}},rightArm:{rotation:{x:0,y:0,z:-15}},leftLeg:{rotation:{x:0,y:0,z:0}},rightLeg:{rotation:{x:0,y:0,z:0}},tail:{rotation:{x:0,y:0,z:0}},accessory:{rotation:{x:0,y:0,z:0}}},Wy=[{id:"neutral",name:"T-Pose / Neutral",iconName:"User",pose:xt},{id:"wave",name:"Friendly Wave",iconName:"Hand",pose:{...xt,rightArm:{rotation:{x:0,y:0,z:-140}},head:{rotation:{x:10,y:-15,z:5}}}},{id:"dance_party",name:"Disco Dance",iconName:"Music",pose:{...xt,body:{rotation:{x:5,y:20,z:-10},position:{x:0,y:.3,z:0}},leftArm:{rotation:{x:45,y:-30,z:120}},rightArm:{rotation:{x:-30,y:45,z:-110}},leftLeg:{rotation:{x:-20,y:0,z:-15}},rightLeg:{rotation:{x:25,y:0,z:15}},head:{rotation:{x:-10,y:-20,z:10}}}},{id:"superhero",name:"Superhero Flight",iconName:"Zap",pose:{...xt,body:{rotation:{x:75,y:0,z:0},position:{x:0,y:1.2,z:0}},head:{rotation:{x:-45,y:0,z:0}},leftArm:{rotation:{x:160,y:0,z:20}},rightArm:{rotation:{x:160,y:0,z:-20}},leftLeg:{rotation:{x:-15,y:0,z:10}},rightLeg:{rotation:{x:-15,y:0,z:-10}}}},{id:"jump",name:"Joy Jump",iconName:"Sparkles",pose:{...xt,body:{rotation:{x:-10,y:0,z:0},position:{x:0,y:1,z:0}},leftArm:{rotation:{x:0,y:0,z:140}},rightArm:{rotation:{x:0,y:0,z:-140}},leftLeg:{rotation:{x:30,y:0,z:-20}},rightLeg:{rotation:{x:30,y:0,z:20}},head:{rotation:{x:-20,y:0,z:0}}}},{id:"dab",name:"The Dab",iconName:"Flame",pose:{...xt,body:{rotation:{x:10,y:-25,z:0}},head:{rotation:{x:35,y:-30,z:-15}},leftArm:{rotation:{x:30,y:45,z:135}},rightArm:{rotation:{x:20,y:-45,z:-135}}}},{id:"curious",name:"Curious Tilt",iconName:"HelpCircle",pose:{...xt,head:{rotation:{x:5,y:20,z:-25}},leftArm:{rotation:{x:20,y:0,z:30}},rightArm:{rotation:{x:-10,y:0,z:-20}}}},{id:"sleepy",name:"Sleepy Nod",iconName:"Moon",pose:{...xt,body:{rotation:{x:15,y:0,z:0},position:{x:0,y:-.2,z:0}},head:{rotation:{x:45,y:0,z:10}},leftArm:{rotation:{x:20,y:0,z:10}},rightArm:{rotation:{x:20,y:0,z:-10}}}}],Ar=[{id:"happy_wave_loop",name:"Friendly Hello Wave",description:"A cheerful double-hand wave that welcomes everyone.",iconName:"Smile",keyframes:[{id:"kf-1",time:0,pose:xt,label:"Start"},{id:"kf-2",time:.5,pose:{...xt,rightArm:{rotation:{x:0,y:0,z:-150}},head:{rotation:{x:5,y:-10,z:5}}},label:"Raise Arm"},{id:"kf-3",time:1,pose:{...xt,rightArm:{rotation:{x:20,y:0,z:-120}},head:{rotation:{x:5,y:10,z:-5}}},label:"Wave Right"},{id:"kf-4",time:1.5,pose:{...xt,rightArm:{rotation:{x:-20,y:0,z:-160}},head:{rotation:{x:5,y:-10,z:5}}},label:"Wave Left"},{id:"kf-5",time:2,pose:xt,label:"End"}]},{id:"robot_pop_dance",name:"Cartoon Robot Bounce",description:"A funny boing dance with arm swings and body twists.",iconName:"Activity",keyframes:[{id:"r-1",time:0,pose:xt,label:"Ready"},{id:"r-2",time:.4,pose:{...xt,body:{rotation:{x:10,y:-20,z:-5},position:{x:0,y:-.2,z:0}},leftArm:{rotation:{x:60,y:0,z:45}},rightArm:{rotation:{x:-30,y:0,z:-80}},leftLeg:{rotation:{x:20,y:0,z:-10}},head:{rotation:{x:-10,y:20,z:0}}},label:"Squat & Twist"},{id:"r-3",time:.8,pose:{...xt,body:{rotation:{x:-10,y:0,z:0},position:{x:0,y:.8,z:0}},leftArm:{rotation:{x:-30,y:0,z:140}},rightArm:{rotation:{x:-30,y:0,z:-140}},leftLeg:{rotation:{x:-15,y:0,z:-10}},rightLeg:{rotation:{x:-15,y:0,z:10}},head:{rotation:{x:-15,y:0,z:0}}},label:"Pop Up Jump!"},{id:"r-4",time:1.2,pose:{...xt,body:{rotation:{x:10,y:20,z:5},position:{x:0,y:-.2,z:0}},leftArm:{rotation:{x:-30,y:0,z:80}},rightArm:{rotation:{x:60,y:0,z:-45}},rightLeg:{rotation:{x:20,y:0,z:10}},head:{rotation:{x:-10,y:-20,z:0}}},label:"Land & Opposite Twist"},{id:"r-5",time:1.6,pose:xt,label:"Finish"}]},{id:"dino_roar_walk",name:"Hero Walk & Stomp",description:"Stepping forward proudly with marching legs and swing arms.",iconName:"Footprints",keyframes:[{id:"w-1",time:0,pose:xt,label:"Stand"},{id:"w-2",time:.5,pose:{...xt,body:{rotation:{x:5,y:10,z:-5},position:{x:0,y:.2,z:.3}},leftLeg:{rotation:{x:40,y:0,z:0}},rightLeg:{rotation:{x:-30,y:0,z:0}},leftArm:{rotation:{x:-30,y:0,z:20}},rightArm:{rotation:{x:40,y:0,z:-20}},head:{rotation:{x:-5,y:-10,z:0}}},label:"Left Step"},{id:"w-3",time:1,pose:{...xt,body:{rotation:{x:5,y:-10,z:5},position:{x:0,y:.2,z:.6}},leftLeg:{rotation:{x:-30,y:0,z:0}},rightLeg:{rotation:{x:40,y:0,z:0}},leftArm:{rotation:{x:40,y:0,z:20}},rightArm:{rotation:{x:-30,y:0,z:-20}},head:{rotation:{x:-5,y:10,z:0}}},label:"Right Step"},{id:"w-4",time:1.5,pose:xt,label:"Return"}]}],Xy={type:"robot",name:"Sparky Mecha",colors:{primary:"#3b82f6",secondary:"#f59e0b",accent:"#10b981",glow:"#38bdf8",joints:"#475569"},prop:{id:"star-1",name:"Magic Star",type:"star",color:"#facc15"},scale:1,wireframe:!1},Yy={theme:"kidsland",showGrid:!0,gridColor:"#a855f7",bgColor:"#38bdf8",groundColor:"#4ade80",lightingIntensity:1.4,particlesEnabled:!0,fogEnabled:!0,cameraPreset:"perspective"};function $c(t,e,n){return t+(e-t)*n}function Kc(t,e,n){let i=(e-t)%360;return i>180&&(i-=360),i<-180&&(i+=360),t+i*n}function qy(t){return t*t*(3-2*t)}function gp(t,e,n,i=!0){const r=qy(Math.max(0,Math.min(1,n)));return{x:i?Kc(t.x,e.x,r):$c(t.x,e.x,r),y:i?Kc(t.y,e.y,r):$c(t.y,e.y,r),z:i?Kc(t.z,e.z,r):$c(t.z,e.z,r)}}function xp(t,e){if(!t||t.length===0)throw new Error("No keyframes to interpolate");const n=[...t].sort((h,d)=>h.time-d.time);if(e<=n[0].time)return n[0].pose;if(e>=n[n.length-1].time)return n[n.length-1].pose;let i=0;for(let h=0;h<n.length-1;h++)if(e>=n[h].time&&e<=n[h+1].time){i=h;break}const r=n[i],s=n[i+1],o=s.time-r.time;if(o<=1e-4)return r.pose;const a=(e-r.time)/o,l=["body","head","leftArm","rightArm","leftLeg","rightLeg","tail","accessory"],c={};for(const h of l){const d=r.pose[h]||{rotation:{x:0,y:0,z:0}},f=s.pose[h]||{rotation:{x:0,y:0,z:0}},p=gp(d.rotation,f.rotation,a,!0);let v;if(d.position||f.position){const _=d.position||{x:0,y:0,z:0},m=f.position||{x:0,y:0,z:0};v=gp(_,m,a,!1)}c[h]={rotation:p,position:v}}return c}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kh="165",$y=0,vp=1,Ky=2,Sx=1,wx=2,fi=3,tr=0,on=1,hn=2,Ki=0,As=1,_p=2,yp=3,Mp=4,Zy=5,Sr=100,Jy=101,Qy=102,e1=103,t1=104,n1=200,i1=201,r1=202,s1=203,Pd=204,Nd=205,o1=206,a1=207,l1=208,c1=209,u1=210,d1=211,h1=212,f1=213,p1=214,m1=0,g1=1,x1=2,Vl=3,v1=4,_1=5,y1=6,M1=7,Ex=0,S1=1,w1=2,Zi=0,E1=1,b1=2,T1=3,A1=4,C1=5,R1=6,P1=7,bx=300,Fs=301,zs=302,Ld=303,Dd=304,hc=306,Zo=1e3,Cr=1001,Id=1002,Dn=1003,N1=1004,Na=1005,Wn=1006,Zc=1007,Rr=1008,nr=1009,L1=1010,D1=1011,jl=1012,Tx=1013,Bs=1014,Hi=1015,fc=1016,Ax=1017,Cx=1018,Hs=1020,I1=35902,U1=1021,k1=1022,ni=1023,O1=1024,F1=1025,Cs=1026,Vs=1027,z1=1028,Rx=1029,B1=1030,Px=1031,Nx=1033,Jc=33776,Qc=33777,eu=33778,tu=33779,Sp=35840,wp=35841,Ep=35842,bp=35843,Tp=36196,Ap=37492,Cp=37496,Rp=37808,Pp=37809,Np=37810,Lp=37811,Dp=37812,Ip=37813,Up=37814,kp=37815,Op=37816,Fp=37817,zp=37818,Bp=37819,Hp=37820,Vp=37821,nu=36492,jp=36494,Gp=36495,H1=36283,Wp=36284,Xp=36285,Yp=36286,V1=3200,j1=3201,Lx=0,G1=1,Fi="",Cn="srgb",lr="srgb-linear",Oh="display-p3",pc="display-p3-linear",Gl="linear",ft="srgb",Wl="rec709",Xl="p3",Gr=7680,qp=519,W1=512,X1=513,Y1=514,Dx=515,q1=516,$1=517,K1=518,Z1=519,$p=35044,Kp="300 es",_i=2e3,Yl=2001;class qs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],iu=Math.PI/180,Ud=180/Math.PI;function oa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[t&255]+Kt[t>>8&255]+Kt[t>>16&255]+Kt[t>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[n&63|128]+Kt[n>>8&255]+"-"+Kt[n>>16&255]+Kt[n>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function Gt(t,e,n){return Math.max(e,Math.min(n,t))}function J1(t,e){return(t%e+e)%e}function ru(t,e,n){return(1-n)*t+n*e}function ao(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function cn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ae{constructor(e=0,n=0){Ae.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,n,i,r,s,o,a,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],p=i[5],v=i[8],_=r[0],m=r[3],u=r[6],g=r[1],y=r[4],M=r[7],C=r[2],E=r[5],T=r[8];return s[0]=o*_+a*g+l*C,s[3]=o*m+a*y+l*E,s[6]=o*u+a*M+l*T,s[1]=c*_+h*g+d*C,s[4]=c*m+h*y+d*E,s[7]=c*u+h*M+d*T,s[2]=f*_+p*g+v*C,s[5]=f*m+p*y+v*E,s[8]=f*u+p*M+v*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return n*o*h-n*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,f=a*l-h*s,p=c*s-o*l,v=n*d+i*f+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=d*_,e[1]=(r*c-h*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(h*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=p*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(su.makeScale(e,n)),this}rotate(e){return this.premultiply(su.makeRotation(-e)),this}translate(e,n){return this.premultiply(su.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const su=new $e;function Ix(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Jo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Q1(){const t=Jo("canvas");return t.style.display="block",t}const Zp={};function Ux(t){t in Zp||(Zp[t]=!0,console.warn(t))}function eM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Jp=new $e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Qp=new $e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),La={[lr]:{transfer:Gl,primaries:Wl,toReference:t=>t,fromReference:t=>t},[Cn]:{transfer:ft,primaries:Wl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[pc]:{transfer:Gl,primaries:Xl,toReference:t=>t.applyMatrix3(Qp),fromReference:t=>t.applyMatrix3(Jp)},[Oh]:{transfer:ft,primaries:Xl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Qp),fromReference:t=>t.applyMatrix3(Jp).convertLinearToSRGB()}},tM=new Set([lr,pc]),st={enabled:!0,_workingColorSpace:lr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!tM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=La[e].toReference,r=La[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return La[t].primaries},getTransfer:function(t){return t===Fi?Gl:La[t].transfer}};function Rs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ou(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Wr;class nM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Wr===void 0&&(Wr=Jo("canvas")),Wr.width=e.width,Wr.height=e.height;const i=Wr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Wr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Jo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Rs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Rs(n[i]/255)*255):n[i]=Rs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let iM=0;class kx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=oa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(au(r[o].image)):s.push(au(r[o]))}else s=au(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function au(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?nM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rM=0;class Qt extends qs{constructor(e=Qt.DEFAULT_IMAGE,n=Qt.DEFAULT_MAPPING,i=Cr,r=Cr,s=Wn,o=Rr,a=ni,l=nr,c=Qt.DEFAULT_ANISOTROPY,h=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=oa(),this.name="",this.source=new kx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zo:e.x=e.x-Math.floor(e.x);break;case Cr:e.x=e.x<0?0:1;break;case Id:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zo:e.y=e.y-Math.floor(e.y);break;case Cr:e.y=e.y<0?0:1;break;case Id:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=bx;Qt.DEFAULT_ANISOTROPY=1;class Bt{constructor(e=0,n=0,i=0,r=1){Bt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],v=l[9],_=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,M=(p+1)/2,C=(u+1)/2,E=(h+f)/4,T=(d+_)/4,R=(v+m)/4;return y>M&&y>C?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=E/i,s=T/i):M>C?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=E/r,s=R/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=T/s,r=R/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-v)*(m-v)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(g)<.001&&(g=1),this.x=(m-v)/g,this.y=(d-_)/g,this.z=(f-h)/g,this.w=Math.acos((c+p+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sM extends qs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Bt(0,0,e,n),this.scissorTest=!1,this.viewport=new Bt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Qt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new kx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Or extends sM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Ox extends Qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class oM extends Qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class aa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],v=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=p,e[n+2]=v,e[n+3]=_;return}if(d!==_||l!==f||c!==p||h!==v){let m=1-a;const u=l*f+c*p+h*v+d*_,g=u>=0?1:-1,y=1-u*u;if(y>Number.EPSILON){const C=Math.sqrt(y),E=Math.atan2(C,u*g);m=Math.sin(m*E)/C,a=Math.sin(a*E)/C}const M=a*g;if(l=l*m+f*M,c=c*m+p*M,h=h*m+v*M,d=d*m+_*M,m===1-a){const C=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=C,c*=C,h*=C,d*=C}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],d=s[o],f=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+h*d+l*p-c*f,e[n+1]=l*v+h*f+c*d-a*p,e[n+2]=c*v+h*p+a*f-l*d,e[n+3]=h*v-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=f*h*d+c*p*v,this._y=c*p*d-f*h*v,this._z=c*h*v+f*p*d,this._w=c*h*d-f*p*v;break;case"YXZ":this._x=f*h*d+c*p*v,this._y=c*p*d-f*h*v,this._z=c*h*v-f*p*d,this._w=c*h*d+f*p*v;break;case"ZXY":this._x=f*h*d-c*p*v,this._y=c*p*d+f*h*v,this._z=c*h*v+f*p*d,this._w=c*h*d-f*p*v;break;case"ZYX":this._x=f*h*d-c*p*v,this._y=c*p*d+f*h*v,this._z=c*h*v-f*p*d,this._w=c*h*d+f*p*v;break;case"YZX":this._x=f*h*d+c*p*v,this._y=c*p*d+f*h*v,this._z=c*h*v-f*p*d,this._w=c*h*d-f*p*v;break;case"XZY":this._x=f*h*d-c*p*v,this._y=c*p*d-f*h*v,this._z=c*h*v+f*p*d,this._w=c*h*d+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],h=n[6],d=n[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-n)*h)/c,f=Math.sin(n*h)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,n=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(em.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(em.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),h=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*h,this.y=i+l*h+a*c-s*d,this.z=r+l*d+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return lu.copy(this).projectOnVector(e),this.sub(lu)}reflect(e){return this.sub(lu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lu=new B,em=new aa;class la{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(zn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(zn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=zn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,zn):zn.fromBufferAttribute(s,o),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Da.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Da.copy(i.boundingBox)),Da.applyMatrix4(e.matrixWorld),this.union(Da)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lo),Ia.subVectors(this.max,lo),Xr.subVectors(e.a,lo),Yr.subVectors(e.b,lo),qr.subVectors(e.c,lo),Ci.subVectors(Yr,Xr),Ri.subVectors(qr,Yr),dr.subVectors(Xr,qr);let n=[0,-Ci.z,Ci.y,0,-Ri.z,Ri.y,0,-dr.z,dr.y,Ci.z,0,-Ci.x,Ri.z,0,-Ri.x,dr.z,0,-dr.x,-Ci.y,Ci.x,0,-Ri.y,Ri.x,0,-dr.y,dr.x,0];return!cu(n,Xr,Yr,qr,Ia)||(n=[1,0,0,0,1,0,0,0,1],!cu(n,Xr,Yr,qr,Ia))?!1:(Ua.crossVectors(Ci,Ri),n=[Ua.x,Ua.y,Ua.z],cu(n,Xr,Yr,qr,Ia))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const li=[new B,new B,new B,new B,new B,new B,new B,new B],zn=new B,Da=new la,Xr=new B,Yr=new B,qr=new B,Ci=new B,Ri=new B,dr=new B,lo=new B,Ia=new B,Ua=new B,hr=new B;function cu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){hr.fromArray(t,s);const a=r.x*Math.abs(hr.x)+r.y*Math.abs(hr.y)+r.z*Math.abs(hr.z),l=e.dot(hr),c=n.dot(hr),h=i.dot(hr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const aM=new la,co=new B,uu=new B;class ca{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):aM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;co.subVectors(e,this.center);const n=co.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(co,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(co.copy(e.center).add(uu)),this.expandByPoint(co.copy(e.center).sub(uu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ci=new B,du=new B,ka=new B,Pi=new B,hu=new B,Oa=new B,fu=new B;class mc{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ci.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,n),ci.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){du.copy(e).add(n).multiplyScalar(.5),ka.copy(n).sub(e).normalize(),Pi.copy(this.origin).sub(du);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ka),a=Pi.dot(this.direction),l=-Pi.dot(ka),c=Pi.lengthSq(),h=Math.abs(1-o*o);let d,f,p,v;if(h>0)if(d=o*l-a,f=o*a-l,v=s*h,d>=0)if(f>=-v)if(f<=v){const _=1/h;d*=_,f*=_,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(du).addScaledVector(ka,f),p}intersectSphere(e,n){ci.subVectors(e.center,this.origin);const i=ci.dot(this.direction),r=ci.dot(ci)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,n,i,r,s){hu.subVectors(n,e),Oa.subVectors(i,e),fu.crossVectors(hu,Oa);let o=this.direction.dot(fu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pi.subVectors(this.origin,e);const l=a*this.direction.dot(Oa.crossVectors(Pi,Oa));if(l<0)return null;const c=a*this.direction.dot(hu.cross(Pi));if(c<0||l+c>o)return null;const h=-a*Pi.dot(fu);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,n,i,r,s,o,a,l,c,h,d,f,p,v,_,m){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,h,d,f,p,v,_,m)}set(e,n,i,r,s,o,a,l,c,h,d,f,p,v,_,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=v,u[11]=_,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/$r.setFromMatrixColumn(e,0).length(),s=1/$r.setFromMatrixColumn(e,1).length(),o=1/$r.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*h,p=o*d,v=a*h,_=a*d;n[0]=l*h,n[4]=-l*d,n[8]=c,n[1]=p+v*c,n[5]=f-_*c,n[9]=-a*l,n[2]=_-f*c,n[6]=v+p*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*h,p=l*d,v=c*h,_=c*d;n[0]=f+_*a,n[4]=v*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*h,n[9]=-a,n[2]=p*a-v,n[6]=_+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*h,p=l*d,v=c*h,_=c*d;n[0]=f-_*a,n[4]=-o*d,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*h,n[9]=_-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*h,p=o*d,v=a*h,_=a*d;n[0]=l*h,n[4]=v*c-p,n[8]=f*c+_,n[1]=l*d,n[5]=_*c+f,n[9]=p*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,v=a*l,_=a*c;n[0]=l*h,n[4]=_-f*d,n[8]=v*d+p,n[1]=d,n[5]=o*h,n[9]=-a*h,n[2]=-c*h,n[6]=p*d+v,n[10]=f-_*d}else if(e.order==="XZY"){const f=o*l,p=o*c,v=a*l,_=a*c;n[0]=l*h,n[4]=-d,n[8]=c*h,n[1]=f*d+_,n[5]=o*h,n[9]=p*d-v,n[2]=v*d-p,n[6]=a*h,n[10]=_*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lM,e,cM)}lookAt(e,n,i){const r=this.elements;return vn.subVectors(e,n),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Ni.crossVectors(i,vn),Ni.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Ni.crossVectors(i,vn)),Ni.normalize(),Fa.crossVectors(vn,Ni),r[0]=Ni.x,r[4]=Fa.x,r[8]=vn.x,r[1]=Ni.y,r[5]=Fa.y,r[9]=vn.y,r[2]=Ni.z,r[6]=Fa.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],p=i[13],v=i[2],_=i[6],m=i[10],u=i[14],g=i[3],y=i[7],M=i[11],C=i[15],E=r[0],T=r[4],R=r[8],w=r[12],S=r[1],D=r[5],L=r[9],O=r[13],$=r[2],q=r[6],X=r[10],ne=r[14],z=r[3],oe=r[7],I=r[11],P=r[15];return s[0]=o*E+a*S+l*$+c*z,s[4]=o*T+a*D+l*q+c*oe,s[8]=o*R+a*L+l*X+c*I,s[12]=o*w+a*O+l*ne+c*P,s[1]=h*E+d*S+f*$+p*z,s[5]=h*T+d*D+f*q+p*oe,s[9]=h*R+d*L+f*X+p*I,s[13]=h*w+d*O+f*ne+p*P,s[2]=v*E+_*S+m*$+u*z,s[6]=v*T+_*D+m*q+u*oe,s[10]=v*R+_*L+m*X+u*I,s[14]=v*w+_*O+m*ne+u*P,s[3]=g*E+y*S+M*$+C*z,s[7]=g*T+y*D+M*q+C*oe,s[11]=g*R+y*L+M*X+C*I,s[15]=g*w+y*O+M*ne+C*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],p=e[14],v=e[3],_=e[7],m=e[11],u=e[15];return v*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*p-i*l*p)+_*(+n*l*p-n*c*f+s*o*f-r*o*p+r*c*h-s*l*h)+m*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*h-i*c*h)+u*(-r*a*h-n*l*d+n*a*f+r*o*d-i*o*f+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],p=e[11],v=e[12],_=e[13],m=e[14],u=e[15],g=d*m*c-_*f*c+_*l*p-a*m*p-d*l*u+a*f*u,y=v*f*c-h*m*c-v*l*p+o*m*p+h*l*u-o*f*u,M=h*_*c-v*d*c+v*a*p-o*_*p-h*a*u+o*d*u,C=v*d*l-h*_*l-v*a*f+o*_*f+h*a*m-o*d*m,E=n*g+i*y+r*M+s*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=g*T,e[1]=(_*f*s-d*m*s-_*r*p+i*m*p+d*r*u-i*f*u)*T,e[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*u+i*l*u)*T,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*p-i*l*p)*T,e[4]=y*T,e[5]=(h*m*s-v*f*s+v*r*p-n*m*p-h*r*u+n*f*u)*T,e[6]=(v*l*s-o*m*s-v*r*c+n*m*c+o*r*u-n*l*u)*T,e[7]=(o*f*s-h*l*s+h*r*c-n*f*c-o*r*p+n*l*p)*T,e[8]=M*T,e[9]=(v*d*s-h*_*s-v*i*p+n*_*p+h*i*u-n*d*u)*T,e[10]=(o*_*s-v*a*s+v*i*c-n*_*c-o*i*u+n*a*u)*T,e[11]=(h*a*s-o*d*s-h*i*c+n*d*c+o*i*p-n*a*p)*T,e[12]=C*T,e[13]=(h*_*r-v*d*r+v*i*f-n*_*f-h*i*m+n*d*m)*T,e[14]=(v*a*r-o*_*r-v*i*l+n*_*l+o*i*m-n*a*m)*T,e[15]=(o*d*r-h*a*r+h*i*l-n*d*l-o*i*f+n*a*f)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,h=o+o,d=a+a,f=s*c,p=s*h,v=s*d,_=o*h,m=o*d,u=a*d,g=l*c,y=l*h,M=l*d,C=i.x,E=i.y,T=i.z;return r[0]=(1-(_+u))*C,r[1]=(p+M)*C,r[2]=(v-y)*C,r[3]=0,r[4]=(p-M)*E,r[5]=(1-(f+u))*E,r[6]=(m+g)*E,r[7]=0,r[8]=(v+y)*T,r[9]=(m-g)*T,r[10]=(1-(f+_))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=$r.set(r[0],r[1],r[2]).length();const o=$r.set(r[4],r[5],r[6]).length(),a=$r.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bn.copy(this);const c=1/s,h=1/o,d=1/a;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=h,Bn.elements[5]*=h,Bn.elements[6]*=h,Bn.elements[8]*=d,Bn.elements[9]*=d,Bn.elements[10]*=d,n.setFromRotationMatrix(Bn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=_i){const l=this.elements,c=2*s/(n-e),h=2*s/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r);let p,v;if(a===_i)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Yl)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=_i){const l=this.elements,c=1/(n-e),h=1/(i-r),d=1/(o-s),f=(n+e)*c,p=(i+r)*h;let v,_;if(a===_i)v=(o+s)*d,_=-2*d;else if(a===Yl)v=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const $r=new B,Bn=new mt,lM=new B(0,0,0),cM=new B(1,1,1),Ni=new B,Fa=new B,vn=new B,tm=new mt,nm=new aa;class si{constructor(e=0,n=0,i=0,r=si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return tm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return nm.setFromEuler(this),this.setFromQuaternion(nm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}si.DEFAULT_ORDER="XYZ";class Fh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let uM=0;const im=new B,Kr=new aa,ui=new mt,za=new B,uo=new B,dM=new B,hM=new aa,rm=new B(1,0,0),sm=new B(0,1,0),om=new B(0,0,1),am={type:"added"},fM={type:"removed"},Zr={type:"childadded",child:null},pu={type:"childremoved",child:null};class Lt extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=oa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new B,n=new si,i=new aa,r=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new $e}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Kr.setFromAxisAngle(e,n),this.quaternion.multiply(Kr),this}rotateOnWorldAxis(e,n){return Kr.setFromAxisAngle(e,n),this.quaternion.premultiply(Kr),this}rotateX(e){return this.rotateOnAxis(rm,e)}rotateY(e){return this.rotateOnAxis(sm,e)}rotateZ(e){return this.rotateOnAxis(om,e)}translateOnAxis(e,n){return im.copy(e).applyQuaternion(this.quaternion),this.position.add(im.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(rm,e)}translateY(e){return this.translateOnAxis(sm,e)}translateZ(e){return this.translateOnAxis(om,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?za.copy(e):za.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(uo,za,this.up):ui.lookAt(za,uo,this.up),this.quaternion.setFromRotationMatrix(ui),r&&(ui.extractRotation(r.matrixWorld),Kr.setFromRotationMatrix(ui),this.quaternion.premultiply(Kr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(am),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(fM),pu.child=e,this.dispatchEvent(pu),pu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(am),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uo,e,dM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uo,hM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Lt.DEFAULT_UP=new B(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hn=new B,di=new B,mu=new B,hi=new B,Jr=new B,Qr=new B,lm=new B,gu=new B,xu=new B,vu=new B;class ti{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Hn.subVectors(e,n),r.cross(Hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Hn.subVectors(r,n),di.subVectors(i,n),mu.subVectors(e,n);const o=Hn.dot(Hn),a=Hn.dot(di),l=Hn.dot(mu),c=di.dot(di),h=di.dot(mu),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-a*h)*f,v=(o*h-a*l)*f;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,hi.x),l.addScaledVector(o,hi.y),l.addScaledVector(a,hi.z),l)}static isFrontFacing(e,n,i,r){return Hn.subVectors(i,n),di.subVectors(e,n),Hn.cross(di).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Hn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ti.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ti.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Jr.subVectors(r,i),Qr.subVectors(s,i),gu.subVectors(e,i);const l=Jr.dot(gu),c=Qr.dot(gu);if(l<=0&&c<=0)return n.copy(i);xu.subVectors(e,r);const h=Jr.dot(xu),d=Qr.dot(xu);if(h>=0&&d<=h)return n.copy(r);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),n.copy(i).addScaledVector(Jr,o);vu.subVectors(e,s);const p=Jr.dot(vu),v=Qr.dot(vu);if(v>=0&&p<=v)return n.copy(s);const _=p*c-l*v;if(_<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(Qr,a);const m=h*v-p*d;if(m<=0&&d-h>=0&&p-v>=0)return lm.subVectors(s,r),a=(d-h)/(d-h+(p-v)),n.copy(r).addScaledVector(lm,a);const u=1/(m+_+f);return o=_*u,a=f*u,n.copy(i).addScaledVector(Jr,o).addScaledVector(Qr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Fx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},Ba={h:0,s:0,l:0};function _u(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Xe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=st.workingColorSpace){return this.r=e,this.g=n,this.b=i,st.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=st.workingColorSpace){if(e=J1(e,1),n=Gt(n,0,1),i=Gt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=_u(o,s,e+1/3),this.g=_u(o,s,e),this.b=_u(o,s,e-1/3)}return st.toWorkingColorSpace(this,r),this}setStyle(e,n=Cn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Cn){const i=Fx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rs(e.r),this.g=Rs(e.g),this.b=Rs(e.b),this}copyLinearToSRGB(e){return this.r=ou(e.r),this.g=ou(e.g),this.b=ou(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Cn){return st.fromWorkingColorSpace(Zt.copy(this),e),Math.round(Gt(Zt.r*255,0,255))*65536+Math.round(Gt(Zt.g*255,0,255))*256+Math.round(Gt(Zt.b*255,0,255))}getHexString(e=Cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=st.workingColorSpace){st.fromWorkingColorSpace(Zt.copy(this),n);const i=Zt.r,r=Zt.g,s=Zt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=st.workingColorSpace){return st.fromWorkingColorSpace(Zt.copy(this),n),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Cn){st.fromWorkingColorSpace(Zt.copy(this),e);const n=Zt.r,i=Zt.g,r=Zt.b;return e!==Cn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+n,Li.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Li),e.getHSL(Ba);const i=ru(Li.h,Ba.h,n),r=ru(Li.s,Ba.s,n),s=ru(Li.l,Ba.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new Xe;Xe.NAMES=Fx;let pM=0;class Vr extends qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pM++}),this.uuid=oa(),this.name="",this.type="Material",this.blending=As,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pd,this.blendDst=Nd,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Vl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gr,this.stencilZFail=Gr,this.stencilZPass=Gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(i.blending=this.blending),this.side!==tr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Pd&&(i.blendSrc=this.blendSrc),this.blendDst!==Nd&&(i.blendDst=this.blendDst),this.blendEquation!==Sr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Vl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ua extends Vr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=Ex,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new B,Ha=new Ae;class Un{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=$p,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ux("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ha.fromBufferAttribute(this,n),Ha.applyMatrix3(e),this.setXY(n,Ha.x,Ha.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix3(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix4(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyNormalMatrix(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.transformDirection(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ao(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=cn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ao(n,this.array)),n}setX(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ao(n,this.array)),n}setY(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ao(n,this.array)),n}setZ(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ao(n,this.array)),n}setW(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array),r=cn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array),r=cn(r,this.array),s=cn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$p&&(e.usage=this.usage),e}}class zx extends Un{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Bx extends Un{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class at extends Un{constructor(e,n,i){super(new Float32Array(e),n,i)}}let mM=0;const An=new mt,yu=new Lt,es=new B,_n=new la,ho=new la,Ot=new B;class Yt extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=oa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ix(e)?Bx:zx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $e().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,n,i){return An.makeTranslation(e,n,i),this.applyMatrix4(An),this}scale(e,n,i){return An.makeScale(e,n,i),this.applyMatrix4(An),this}lookAt(e){return yu.lookAt(e),yu.updateMatrix(),this.applyMatrix4(yu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new at(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new la);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ca);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];ho.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(_n.min,ho.min),_n.expandByPoint(Ot),Ot.addVectors(_n.max,ho.max),_n.expandByPoint(Ot)):(_n.expandByPoint(ho.min),_n.expandByPoint(ho.max))}_n.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ot.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ot));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ot.fromBufferAttribute(a,c),l&&(es.fromBufferAttribute(e,c),Ot.add(es)),r=Math.max(r,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Un(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new B,l[R]=new B;const c=new B,h=new B,d=new B,f=new Ae,p=new Ae,v=new Ae,_=new B,m=new B;function u(R,w,S){c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,w),d.fromBufferAttribute(i,S),f.fromBufferAttribute(s,R),p.fromBufferAttribute(s,w),v.fromBufferAttribute(s,S),h.sub(c),d.sub(c),p.sub(f),v.sub(f);const D=1/(p.x*v.y-v.x*p.y);isFinite(D)&&(_.copy(h).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(D),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-v.x).multiplyScalar(D),a[R].add(_),a[w].add(_),a[S].add(_),l[R].add(m),l[w].add(m),l[S].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let R=0,w=g.length;R<w;++R){const S=g[R],D=S.start,L=S.count;for(let O=D,$=D+L;O<$;O+=3)u(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const y=new B,M=new B,C=new B,E=new B;function T(R){C.fromBufferAttribute(r,R),E.copy(C);const w=a[R];y.copy(w),y.sub(C.multiplyScalar(C.dot(w))).normalize(),M.crossVectors(E,w);const D=M.dot(l[R])<0?-1:1;o.setXYZW(R,y.x,y.y,y.z,D)}for(let R=0,w=g.length;R<w;++R){const S=g[R],D=S.start,L=S.count;for(let O=D,$=D+L;O<$;O+=3)T(e.getX(O+0)),T(e.getX(O+1)),T(e.getX(O+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Un(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new B,s=new B,o=new B,a=new B,l=new B,c=new B,h=new B,d=new B;if(e)for(let f=0,p=e.count;f<p;f+=3){const v=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,m),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ot.fromBufferAttribute(e,n),Ot.normalize(),e.setXYZ(n,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h);let p=0,v=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let u=0;u<h;u++)f[v++]=c[p++]}return new Un(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Yt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){const f=c[h],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cm=new mt,fr=new mc,Va=new ca,um=new B,ts=new B,ns=new B,is=new B,Mu=new B,ja=new B,Ga=new Ae,Wa=new Ae,Xa=new Ae,dm=new B,hm=new B,fm=new B,Ya=new B,qa=new B;class ie extends Lt{constructor(e=new Yt,n=new ua){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ja.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],d=s[l];h!==0&&(Mu.fromBufferAttribute(d,e),o?ja.addScaledVector(Mu,h):ja.addScaledVector(Mu.sub(n),h))}n.add(ja)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Va.copy(i.boundingSphere),Va.applyMatrix4(s),fr.copy(e.ray).recast(e.near),!(Va.containsPoint(fr.origin)===!1&&(fr.intersectSphere(Va,um)===null||fr.origin.distanceToSquared(um)>(e.far-e.near)**2))&&(cm.copy(s).invert(),fr.copy(e.ray).applyMatrix4(cm),!(i.boundingBox!==null&&fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,fr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,_=f.length;v<_;v++){const m=f[v],u=o[m.materialIndex],g=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=g,C=y;M<C;M+=3){const E=a.getX(M),T=a.getX(M+1),R=a.getX(M+2);r=$a(this,u,e,i,c,h,d,E,T,R),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=v,u=_;m<u;m+=3){const g=a.getX(m),y=a.getX(m+1),M=a.getX(m+2);r=$a(this,o,e,i,c,h,d,g,y,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,_=f.length;v<_;v++){const m=f[v],u=o[m.materialIndex],g=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=g,C=y;M<C;M+=3){const E=M,T=M+1,R=M+2;r=$a(this,u,e,i,c,h,d,E,T,R),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=v,u=_;m<u;m+=3){const g=m,y=m+1,M=m+2;r=$a(this,o,e,i,c,h,d,g,y,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function gM(t,e,n,i,r,s,o,a){let l;if(e.side===on?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===tr,a),l===null)return null;qa.copy(a),qa.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(qa);return c<n.near||c>n.far?null:{distance:c,point:qa.clone(),object:t}}function $a(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,ts),t.getVertexPosition(l,ns),t.getVertexPosition(c,is);const h=gM(t,e,n,i,ts,ns,is,Ya);if(h){r&&(Ga.fromBufferAttribute(r,a),Wa.fromBufferAttribute(r,l),Xa.fromBufferAttribute(r,c),h.uv=ti.getInterpolation(Ya,ts,ns,is,Ga,Wa,Xa,new Ae)),s&&(Ga.fromBufferAttribute(s,a),Wa.fromBufferAttribute(s,l),Xa.fromBufferAttribute(s,c),h.uv1=ti.getInterpolation(Ya,ts,ns,is,Ga,Wa,Xa,new Ae)),o&&(dm.fromBufferAttribute(o,a),hm.fromBufferAttribute(o,l),fm.fromBufferAttribute(o,c),h.normal=ti.getInterpolation(Ya,ts,ns,is,dm,hm,fm,new B),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new B,materialIndex:0};ti.getNormal(ts,ns,is,d.normal),h.face=d}return h}class vt extends Yt{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(d,2));function v(_,m,u,g,y,M,C,E,T,R,w){const S=M/T,D=C/R,L=M/2,O=C/2,$=E/2,q=T+1,X=R+1;let ne=0,z=0;const oe=new B;for(let I=0;I<X;I++){const P=I*D-O;for(let ae=0;ae<q;ae++){const me=ae*S-L;oe[_]=me*g,oe[m]=P*y,oe[u]=$,c.push(oe.x,oe.y,oe.z),oe[_]=0,oe[m]=0,oe[u]=E>0?1:-1,h.push(oe.x,oe.y,oe.z),d.push(ae/T),d.push(1-I/R),ne+=1}}for(let I=0;I<R;I++)for(let P=0;P<T;P++){const ae=f+P+q*I,me=f+P+q*(I+1),j=f+(P+1)+q*(I+1),ee=f+(P+1)+q*I;l.push(ae,me,ee),l.push(me,j,ee),z+=6}a.addGroup(p,z,w),p+=z,f+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function js(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function nn(t){const e={};for(let n=0;n<t.length;n++){const i=js(t[n]);for(const r in i)e[r]=i[r]}return e}function xM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Hx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const vM={clone:js,merge:nn};var _M=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ir extends Vr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_M,this.fragmentShader=yM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=xM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}let Vx=class extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=_i}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const Di=new B,pm=new Ae,mm=new Ae;class Nn extends Vx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ud*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(iu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ud*2*Math.atan(Math.tan(iu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Di.x,Di.y).multiplyScalar(-e/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Di.x,Di.y).multiplyScalar(-e/Di.z)}getViewSize(e,n){return this.getViewBounds(e,pm,mm),n.subVectors(mm,pm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(iu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const rs=-90,ss=1;class MM extends Lt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Nn(rs,ss,e,n);r.layers=this.layers,this.add(r);const s=new Nn(rs,ss,e,n);s.layers=this.layers,this.add(s);const o=new Nn(rs,ss,e,n);o.layers=this.layers,this.add(o);const a=new Nn(rs,ss,e,n);a.layers=this.layers,this.add(a);const l=new Nn(rs,ss,e,n);l.layers=this.layers,this.add(l);const c=new Nn(rs,ss,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===_i)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Yl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(d,f,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class jx extends Qt{constructor(e,n,i,r,s,o,a,l,c,h){e=e!==void 0?e:[],n=n!==void 0?n:Fs,super(e,n,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class SM extends Or{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new jx(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Wn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new vt(5,5,5),s=new ir({name:"CubemapFromEquirect",uniforms:js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:Ki});s.uniforms.tEquirect.value=n;const o=new ie(r,s),a=n.minFilter;return n.minFilter===Rr&&(n.minFilter=Wn),new MM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Su=new B,wM=new B,EM=new $e;class gi{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Su.subVectors(i,n).cross(wM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Su),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||EM.getNormalMatrix(e),r=this.coplanarPoint(Su).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pr=new ca,Ka=new B;class zh{constructor(e=new gi,n=new gi,i=new gi,r=new gi,s=new gi,o=new gi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=_i){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],d=r[6],f=r[7],p=r[8],v=r[9],_=r[10],m=r[11],u=r[12],g=r[13],y=r[14],M=r[15];if(i[0].setComponents(l-s,f-c,m-p,M-u).normalize(),i[1].setComponents(l+s,f+c,m+p,M+u).normalize(),i[2].setComponents(l+o,f+h,m+v,M+g).normalize(),i[3].setComponents(l-o,f-h,m-v,M-g).normalize(),i[4].setComponents(l-a,f-d,m-_,M-y).normalize(),n===_i)i[5].setComponents(l+a,f+d,m+_,M+y).normalize();else if(n===Yl)i[5].setComponents(a,d,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pr)}intersectsSprite(e){return pr.center.set(0,0,0),pr.radius=.7071067811865476,pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(pr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ka.x=r.normal.x>0?e.max.x:e.min.x,Ka.y=r.normal.y>0?e.max.y:e.min.y,Ka.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ka)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Gx(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function bM(t){const e=new WeakMap;function n(a,l){const c=a.array,h=a.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const h=l.array,d=l._updateRange,f=l.updateRanges;if(t.bindBuffer(c,a),d.count===-1&&f.length===0&&t.bufferSubData(c,0,h),f.length!==0){for(let p=0,v=f.length;p<v;p++){const _=f[p];t.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}d.count!==-1&&(t.bufferSubData(c,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class $s extends Yt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,d=e/a,f=n/l,p=[],v=[],_=[],m=[];for(let u=0;u<h;u++){const g=u*f-o;for(let y=0;y<c;y++){const M=y*d-s;v.push(M,-g,0),_.push(0,0,1),m.push(y/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<a;g++){const y=g+c*u,M=g+c*(u+1),C=g+1+c*(u+1),E=g+1+c*u;p.push(y,M,E),p.push(M,C,E)}this.setIndex(p),this.setAttribute("position",new at(v,3)),this.setAttribute("normal",new at(_,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.width,e.height,e.widthSegments,e.heightSegments)}}var TM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,AM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,CM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,RM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,NM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,LM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,DM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,IM=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,UM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,kM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,OM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,FM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,BM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,HM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,GM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,WM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,XM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,YM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,$M=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,KM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ZM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,JM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,QM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nS="gl_FragColor = linearToOutputTexel( gl_FragColor );",iS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,rS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,sS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,oS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,aS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,pS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,vS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_S=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,MS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,SS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ES=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,TS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,AS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,RS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,LS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,DS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,IS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,US=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,OS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,FS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,BS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,VS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,GS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,WS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$S=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,KS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ZS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,JS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,QS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ew=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,tw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,iw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ow=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,aw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,lw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,uw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,mw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_w=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Mw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ww=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ew=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Aw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Lw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Dw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Iw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Uw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ow=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Bw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Gw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ww=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Yw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$w=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Kw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,e2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,t2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,i2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,r2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:TM,alphahash_pars_fragment:AM,alphamap_fragment:CM,alphamap_pars_fragment:RM,alphatest_fragment:PM,alphatest_pars_fragment:NM,aomap_fragment:LM,aomap_pars_fragment:DM,batching_pars_vertex:IM,batching_vertex:UM,begin_vertex:kM,beginnormal_vertex:OM,bsdfs:FM,iridescence_fragment:zM,bumpmap_pars_fragment:BM,clipping_planes_fragment:HM,clipping_planes_pars_fragment:VM,clipping_planes_pars_vertex:jM,clipping_planes_vertex:GM,color_fragment:WM,color_pars_fragment:XM,color_pars_vertex:YM,color_vertex:qM,common:$M,cube_uv_reflection_fragment:KM,defaultnormal_vertex:ZM,displacementmap_pars_vertex:JM,displacementmap_vertex:QM,emissivemap_fragment:eS,emissivemap_pars_fragment:tS,colorspace_fragment:nS,colorspace_pars_fragment:iS,envmap_fragment:rS,envmap_common_pars_fragment:sS,envmap_pars_fragment:oS,envmap_pars_vertex:aS,envmap_physical_pars_fragment:vS,envmap_vertex:lS,fog_vertex:cS,fog_pars_vertex:uS,fog_fragment:dS,fog_pars_fragment:hS,gradientmap_pars_fragment:fS,lightmap_pars_fragment:pS,lights_lambert_fragment:mS,lights_lambert_pars_fragment:gS,lights_pars_begin:xS,lights_toon_fragment:_S,lights_toon_pars_fragment:yS,lights_phong_fragment:MS,lights_phong_pars_fragment:SS,lights_physical_fragment:wS,lights_physical_pars_fragment:ES,lights_fragment_begin:bS,lights_fragment_maps:TS,lights_fragment_end:AS,logdepthbuf_fragment:CS,logdepthbuf_pars_fragment:RS,logdepthbuf_pars_vertex:PS,logdepthbuf_vertex:NS,map_fragment:LS,map_pars_fragment:DS,map_particle_fragment:IS,map_particle_pars_fragment:US,metalnessmap_fragment:kS,metalnessmap_pars_fragment:OS,morphinstance_vertex:FS,morphcolor_vertex:zS,morphnormal_vertex:BS,morphtarget_pars_vertex:HS,morphtarget_vertex:VS,normal_fragment_begin:jS,normal_fragment_maps:GS,normal_pars_fragment:WS,normal_pars_vertex:XS,normal_vertex:YS,normalmap_pars_fragment:qS,clearcoat_normal_fragment_begin:$S,clearcoat_normal_fragment_maps:KS,clearcoat_pars_fragment:ZS,iridescence_pars_fragment:JS,opaque_fragment:QS,packing:ew,premultiplied_alpha_fragment:tw,project_vertex:nw,dithering_fragment:iw,dithering_pars_fragment:rw,roughnessmap_fragment:sw,roughnessmap_pars_fragment:ow,shadowmap_pars_fragment:aw,shadowmap_pars_vertex:lw,shadowmap_vertex:cw,shadowmask_pars_fragment:uw,skinbase_vertex:dw,skinning_pars_vertex:hw,skinning_vertex:fw,skinnormal_vertex:pw,specularmap_fragment:mw,specularmap_pars_fragment:gw,tonemapping_fragment:xw,tonemapping_pars_fragment:vw,transmission_fragment:_w,transmission_pars_fragment:yw,uv_pars_fragment:Mw,uv_pars_vertex:Sw,uv_vertex:ww,worldpos_vertex:Ew,background_vert:bw,background_frag:Tw,backgroundCube_vert:Aw,backgroundCube_frag:Cw,cube_vert:Rw,cube_frag:Pw,depth_vert:Nw,depth_frag:Lw,distanceRGBA_vert:Dw,distanceRGBA_frag:Iw,equirect_vert:Uw,equirect_frag:kw,linedashed_vert:Ow,linedashed_frag:Fw,meshbasic_vert:zw,meshbasic_frag:Bw,meshlambert_vert:Hw,meshlambert_frag:Vw,meshmatcap_vert:jw,meshmatcap_frag:Gw,meshnormal_vert:Ww,meshnormal_frag:Xw,meshphong_vert:Yw,meshphong_frag:qw,meshphysical_vert:$w,meshphysical_frag:Kw,meshtoon_vert:Zw,meshtoon_frag:Jw,points_vert:Qw,points_frag:e2,shadow_vert:t2,shadow_frag:n2,sprite_vert:i2,sprite_frag:r2},be={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Qn={basic:{uniforms:nn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:nn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Xe(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:nn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:nn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:nn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Xe(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:nn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:nn([be.points,be.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:nn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:nn([be.common,be.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:nn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:nn([be.sprite,be.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:nn([be.common,be.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:nn([be.lights,be.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Qn.physical={uniforms:nn([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Za={r:0,b:0,g:0},mr=new si,s2=new mt;function o2(t,e,n,i,r,s,o){const a=new Xe(0);let l=s===!0?0:1,c,h,d=null,f=0,p=null;function v(g){let y=g.isScene===!0?g.background:null;return y&&y.isTexture&&(y=(g.backgroundBlurriness>0?n:e).get(y)),y}function _(g){let y=!1;const M=v(g);M===null?u(a,l):M&&M.isColor&&(u(M,1),y=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(g,y){const M=v(y);M&&(M.isCubeTexture||M.mapping===hc)?(h===void 0&&(h=new ie(new vt(1,1,1),new ir({name:"BackgroundCubeMaterial",uniforms:js(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),mr.copy(y.backgroundRotation),mr.x*=-1,mr.y*=-1,mr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(s2.makeRotationFromEuler(mr)),h.material.toneMapped=st.getTransfer(M.colorSpace)!==ft,(d!==M||f!==M.version||p!==t.toneMapping)&&(h.material.needsUpdate=!0,d=M,f=M.version,p=t.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new ie(new $s(2,2),new ir({name:"BackgroundMaterial",uniforms:js(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=st.getTransfer(M.colorSpace)!==ft,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||f!==M.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=M,f=M.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function u(g,y){g.getRGB(Za,Hx(t)),i.buffers.color.setClear(Za.r,Za.g,Za.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(g,y=1){a.set(g),l=y,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,u(a,l)},render:_,addToRenderList:m}}function a2(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(S,D,L,O,$){let q=!1;const X=d(O,L,D);s!==X&&(s=X,c(s.object)),q=p(S,O,L,$),q&&v(S,O,L,$),$!==null&&e.update($,t.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,M(S,D,L,O),$!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function h(S){return t.deleteVertexArray(S)}function d(S,D,L){const O=L.wireframe===!0;let $=i[S.id];$===void 0&&($={},i[S.id]=$);let q=$[D.id];q===void 0&&(q={},$[D.id]=q);let X=q[O];return X===void 0&&(X=f(l()),q[O]=X),X}function f(S){const D=[],L=[],O=[];for(let $=0;$<n;$++)D[$]=0,L[$]=0,O[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:L,attributeDivisors:O,object:S,attributes:{},index:null}}function p(S,D,L,O){const $=s.attributes,q=D.attributes;let X=0;const ne=L.getAttributes();for(const z in ne)if(ne[z].location>=0){const I=$[z];let P=q[z];if(P===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(P=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(P=S.instanceColor)),I===void 0||I.attribute!==P||P&&I.data!==P.data)return!0;X++}return s.attributesNum!==X||s.index!==O}function v(S,D,L,O){const $={},q=D.attributes;let X=0;const ne=L.getAttributes();for(const z in ne)if(ne[z].location>=0){let I=q[z];I===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(I=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(I=S.instanceColor));const P={};P.attribute=I,I&&I.data&&(P.data=I.data),$[z]=P,X++}s.attributes=$,s.attributesNum=X,s.index=O}function _(){const S=s.newAttributes;for(let D=0,L=S.length;D<L;D++)S[D]=0}function m(S){u(S,0)}function u(S,D){const L=s.newAttributes,O=s.enabledAttributes,$=s.attributeDivisors;L[S]=1,O[S]===0&&(t.enableVertexAttribArray(S),O[S]=1),$[S]!==D&&(t.vertexAttribDivisor(S,D),$[S]=D)}function g(){const S=s.newAttributes,D=s.enabledAttributes;for(let L=0,O=D.length;L<O;L++)D[L]!==S[L]&&(t.disableVertexAttribArray(L),D[L]=0)}function y(S,D,L,O,$,q,X){X===!0?t.vertexAttribIPointer(S,D,L,$,q):t.vertexAttribPointer(S,D,L,O,$,q)}function M(S,D,L,O){_();const $=O.attributes,q=L.getAttributes(),X=D.defaultAttributeValues;for(const ne in q){const z=q[ne];if(z.location>=0){let oe=$[ne];if(oe===void 0&&(ne==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),ne==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor)),oe!==void 0){const I=oe.normalized,P=oe.itemSize,ae=e.get(oe);if(ae===void 0)continue;const me=ae.buffer,j=ae.type,ee=ae.bytesPerElement,F=j===t.INT||j===t.UNSIGNED_INT||oe.gpuType===Tx;if(oe.isInterleavedBufferAttribute){const H=oe.data,Y=H.stride,he=oe.offset;if(H.isInstancedInterleavedBuffer){for(let ge=0;ge<z.locationSize;ge++)u(z.location+ge,H.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let ge=0;ge<z.locationSize;ge++)m(z.location+ge);t.bindBuffer(t.ARRAY_BUFFER,me);for(let ge=0;ge<z.locationSize;ge++)y(z.location+ge,P/z.locationSize,j,I,Y*ee,(he+P/z.locationSize*ge)*ee,F)}else{if(oe.isInstancedBufferAttribute){for(let H=0;H<z.locationSize;H++)u(z.location+H,oe.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let H=0;H<z.locationSize;H++)m(z.location+H);t.bindBuffer(t.ARRAY_BUFFER,me);for(let H=0;H<z.locationSize;H++)y(z.location+H,P/z.locationSize,j,I,P*ee,P/z.locationSize*H*ee,F)}}else if(X!==void 0){const I=X[ne];if(I!==void 0)switch(I.length){case 2:t.vertexAttrib2fv(z.location,I);break;case 3:t.vertexAttrib3fv(z.location,I);break;case 4:t.vertexAttrib4fv(z.location,I);break;default:t.vertexAttrib1fv(z.location,I)}}}}g()}function C(){R();for(const S in i){const D=i[S];for(const L in D){const O=D[L];for(const $ in O)h(O[$].object),delete O[$];delete D[L]}delete i[S]}}function E(S){if(i[S.id]===void 0)return;const D=i[S.id];for(const L in D){const O=D[L];for(const $ in O)h(O[$].object),delete O[$];delete D[L]}delete i[S.id]}function T(S){for(const D in i){const L=i[D];if(L[S.id]===void 0)continue;const O=L[S.id];for(const $ in O)h(O[$].object),delete O[$];delete L[S.id]}}function R(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:w,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:g}}function l2(t,e,n){let i;function r(c){i=c}function s(c,h){t.drawArrays(i,c,h),n.update(h,i,1)}function o(c,h,d){d!==0&&(t.drawArraysInstanced(i,c,h,d),n.update(h,i,d))}function a(c,h,d){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<d;p++)this.render(c[p],h[p]);else{f.multiDrawArraysWEBGL(i,c,0,h,0,d);let p=0;for(let v=0;v<d;v++)p+=h[v];n.update(p,i,1)}}function l(c,h,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],h[v],f[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,d);let v=0;for(let _=0;_<d;_++)v+=h[_];for(let _=0;_<f.length;_++)n.update(v,i,f[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function c2(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(E){return!(E!==ni&&i.convert(E)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const T=E===fc&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==nr&&i.convert(E)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Hi&&!T)}function l(E){if(E==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),u=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),M=p>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:u,maxVaryings:g,maxFragmentUniforms:y,vertexTextures:M,maxSamples:C}}function u2(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new gi,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=h(d,f,0)},this.setState=function(d,f,p){const v=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,u=t.get(d);if(!r||v===null||v.length===0||s&&!m)s?h(null):c();else{const g=s?0:i,y=g*4;let M=u.clippingState||null;l.value=M,M=h(v,f,y,p);for(let C=0;C!==y;++C)M[C]=n[C];u.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,f,p,v){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,v!==!0||m===null){const u=p+_*4,g=f.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<u)&&(m=new Float32Array(u));for(let y=0,M=p;y!==_;++y,M+=4)o.copy(d[y]).applyMatrix4(g,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function d2(t){let e=new WeakMap;function n(o,a){return a===Ld?o.mapping=Fs:a===Dd&&(o.mapping=zs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ld||a===Dd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new SM(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Wx extends Vx{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ys=4,gm=[.125,.215,.35,.446,.526,.582],wr=20,wu=new Wx,xm=new Xe;let Eu=null,bu=0,Tu=0,Au=!1;const Mr=(1+Math.sqrt(5))/2,os=1/Mr,vm=[new B(-Mr,os,0),new B(Mr,os,0),new B(-os,0,Mr),new B(os,0,Mr),new B(0,Mr,-os),new B(0,Mr,os),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class _m{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Eu=this._renderer.getRenderTarget(),bu=this._renderer.getActiveCubeFace(),Tu=this._renderer.getActiveMipmapLevel(),Au=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Eu,bu,Tu),this._renderer.xr.enabled=Au,e.scissorTest=!1,Ja(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Fs||e.mapping===zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Eu=this._renderer.getRenderTarget(),bu=this._renderer.getActiveCubeFace(),Tu=this._renderer.getActiveMipmapLevel(),Au=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:fc,format:ni,colorSpace:lr,depthBuffer:!1},r=ym(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ym(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=h2(s)),this._blurMaterial=f2(s,e,n)}return r}_compileMaterial(e){const n=new ie(this._lodPlanes[0],e);this._renderer.compile(n,wu)}_sceneToCubeUV(e,n,i,r){const a=new Nn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(xm),h.toneMapping=Zi,h.autoClear=!1;const p=new ua({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),v=new ie(new vt,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(xm),_=!0);for(let u=0;u<6;u++){const g=u%3;g===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):g===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const y=this._cubeSize;Ja(r,g*y,u>2?y:0,y,y),h.setRenderTarget(r),_&&h.render(v,a),h.render(e,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Fs||e.mapping===zs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ie(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ja(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,wu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=vm[(r-s-1)%vm.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new ie(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*wr-1),_=s/v,m=isFinite(s)?1+Math.floor(h*_):wr;m>wr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${wr}`);const u=[];let g=0;for(let T=0;T<wr;++T){const R=T/_,w=Math.exp(-R*R/2);u.push(w),T===0?g+=w:T<m&&(g+=2*w)}for(let T=0;T<u.length;T++)u[T]=u[T]/g;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=v,f.mipInt.value=y-i;const M=this._sizeLods[r],C=3*M*(r>y-ys?r-y+ys:0),E=4*(this._cubeSize-M);Ja(n,C,E,3*M,2*M),l.setRenderTarget(n),l.render(d,wu)}}function h2(t){const e=[],n=[],i=[];let r=t;const s=t-ys+1+gm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ys?l=gm[o-t+ys-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,v=6,_=3,m=2,u=1,g=new Float32Array(_*v*p),y=new Float32Array(m*v*p),M=new Float32Array(u*v*p);for(let E=0;E<p;E++){const T=E%3*2/3-1,R=E>2?0:-1,w=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];g.set(w,_*v*E),y.set(f,m*v*E);const S=[E,E,E,E,E,E];M.set(S,u*v*E)}const C=new Yt;C.setAttribute("position",new Un(g,_)),C.setAttribute("uv",new Un(y,m)),C.setAttribute("faceIndex",new Un(M,u)),e.push(C),r>ys&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function ym(t,e,n){const i=new Or(t,e,n);return i.texture.mapping=hc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ja(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function f2(t,e,n){const i=new Float32Array(wr),r=new B(0,1,0);return new ir({name:"SphericalGaussianBlur",defines:{n:wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Mm(){return new ir({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Sm(){return new ir({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Bh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function p2(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ld||l===Dd,h=l===Fs||l===zs;if(c||h){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new _m(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&r(p)?(n===null&&(n=new _m(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function m2(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ux("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function g2(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const _=f.morphAttributes[v];for(let m=0,u=_.length;m<u;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const v in f)e.update(f[v],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const v in p){const _=p[v];for(let m=0,u=_.length;m<u;m++)e.update(_[m],t.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,v=d.attributes.position;let _=0;if(p!==null){const g=p.array;_=p.version;for(let y=0,M=g.length;y<M;y+=3){const C=g[y+0],E=g[y+1],T=g[y+2];f.push(C,E,E,T,T,C)}}else if(v!==void 0){const g=v.array;_=v.version;for(let y=0,M=g.length/3-1;y<M;y+=3){const C=y+0,E=y+1,T=y+2;f.push(C,E,E,T,T,C)}}else return;const m=new(Ix(f)?Bx:zx)(f,1);m.version=_;const u=s.get(d);u&&e.remove(u),s.set(d,m)}function h(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function x2(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*o),n.update(p,i,1)}function c(f,p,v){v!==0&&(t.drawElementsInstanced(i,p,s,f*o,v),n.update(p,i,v))}function h(f,p,v){if(v===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<v;m++)this.render(f[m]/o,p[m]);else{_.multiDrawElementsWEBGL(i,p,0,s,f,0,v);let m=0;for(let u=0;u<v;u++)m+=p[u];n.update(m,i,1)}}function d(f,p,v,_){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/o,p[u],_[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,_,0,v);let u=0;for(let g=0;g<v;g++)u+=p[g];for(let g=0;g<_.length;g++)n.update(u,i,_[g])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function v2(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function _2(t,e,n){const i=new WeakMap,r=new Bt;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let S=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const v=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let M=0;v===!0&&(M=1),_===!0&&(M=2),m===!0&&(M=3);let C=a.attributes.position.count*M,E=1;C>e.maxTextureSize&&(E=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const T=new Float32Array(C*E*4*d),R=new Ox(T,C,E,d);R.type=Hi,R.needsUpdate=!0;const w=M*4;for(let D=0;D<d;D++){const L=u[D],O=g[D],$=y[D],q=C*E*4*D;for(let X=0;X<L.count;X++){const ne=X*w;v===!0&&(r.fromBufferAttribute(L,X),T[q+ne+0]=r.x,T[q+ne+1]=r.y,T[q+ne+2]=r.z,T[q+ne+3]=0),_===!0&&(r.fromBufferAttribute(O,X),T[q+ne+4]=r.x,T[q+ne+5]=r.y,T[q+ne+6]=r.z,T[q+ne+7]=0),m===!0&&(r.fromBufferAttribute($,X),T[q+ne+8]=r.x,T[q+ne+9]=r.y,T[q+ne+10]=r.z,T[q+ne+11]=$.itemSize===4?r.w:1)}}f={count:d,texture:R,size:new Ae(C,E)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const _=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function y2(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class Xx extends Qt{constructor(e,n,i,r,s,o,a,l,c,h=Cs){if(h!==Cs&&h!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Cs&&(i=Bs),i===void 0&&h===Vs&&(i=Hs),super(null,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Dn,this.minFilter=l!==void 0?l:Dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Yx=new Qt,qx=new Xx(1,1);qx.compareFunction=Dx;const $x=new Ox,Kx=new oM,Zx=new jx,wm=[],Em=[],bm=new Float32Array(16),Tm=new Float32Array(9),Am=new Float32Array(4);function Ks(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=wm[r];if(s===void 0&&(s=new Float32Array(r),wm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Dt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function It(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function gc(t,e){let n=Em[e];n===void 0&&(n=new Int32Array(e),Em[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function M2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function S2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2fv(this.addr,e),It(n,e)}}function w2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Dt(n,e))return;t.uniform3fv(this.addr,e),It(n,e)}}function E2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4fv(this.addr,e),It(n,e)}}function b2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;Am.set(i),t.uniformMatrix2fv(this.addr,!1,Am),It(n,i)}}function T2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;Tm.set(i),t.uniformMatrix3fv(this.addr,!1,Tm),It(n,i)}}function A2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;bm.set(i),t.uniformMatrix4fv(this.addr,!1,bm),It(n,i)}}function C2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function R2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2iv(this.addr,e),It(n,e)}}function P2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3iv(this.addr,e),It(n,e)}}function N2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4iv(this.addr,e),It(n,e)}}function L2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function D2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2uiv(this.addr,e),It(n,e)}}function I2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3uiv(this.addr,e),It(n,e)}}function U2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4uiv(this.addr,e),It(n,e)}}function k2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?qx:Yx;n.setTexture2D(e||s,r)}function O2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Kx,r)}function F2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Zx,r)}function z2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||$x,r)}function B2(t){switch(t){case 5126:return M2;case 35664:return S2;case 35665:return w2;case 35666:return E2;case 35674:return b2;case 35675:return T2;case 35676:return A2;case 5124:case 35670:return C2;case 35667:case 35671:return R2;case 35668:case 35672:return P2;case 35669:case 35673:return N2;case 5125:return L2;case 36294:return D2;case 36295:return I2;case 36296:return U2;case 35678:case 36198:case 36298:case 36306:case 35682:return k2;case 35679:case 36299:case 36307:return O2;case 35680:case 36300:case 36308:case 36293:return F2;case 36289:case 36303:case 36311:case 36292:return z2}}function H2(t,e){t.uniform1fv(this.addr,e)}function V2(t,e){const n=Ks(e,this.size,2);t.uniform2fv(this.addr,n)}function j2(t,e){const n=Ks(e,this.size,3);t.uniform3fv(this.addr,n)}function G2(t,e){const n=Ks(e,this.size,4);t.uniform4fv(this.addr,n)}function W2(t,e){const n=Ks(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function X2(t,e){const n=Ks(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Y2(t,e){const n=Ks(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function q2(t,e){t.uniform1iv(this.addr,e)}function $2(t,e){t.uniform2iv(this.addr,e)}function K2(t,e){t.uniform3iv(this.addr,e)}function Z2(t,e){t.uniform4iv(this.addr,e)}function J2(t,e){t.uniform1uiv(this.addr,e)}function Q2(t,e){t.uniform2uiv(this.addr,e)}function eE(t,e){t.uniform3uiv(this.addr,e)}function tE(t,e){t.uniform4uiv(this.addr,e)}function nE(t,e,n){const i=this.cache,r=e.length,s=gc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Yx,s[o])}function iE(t,e,n){const i=this.cache,r=e.length,s=gc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Kx,s[o])}function rE(t,e,n){const i=this.cache,r=e.length,s=gc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Zx,s[o])}function sE(t,e,n){const i=this.cache,r=e.length,s=gc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||$x,s[o])}function oE(t){switch(t){case 5126:return H2;case 35664:return V2;case 35665:return j2;case 35666:return G2;case 35674:return W2;case 35675:return X2;case 35676:return Y2;case 5124:case 35670:return q2;case 35667:case 35671:return $2;case 35668:case 35672:return K2;case 35669:case 35673:return Z2;case 5125:return J2;case 36294:return Q2;case 36295:return eE;case 36296:return tE;case 35678:case 36198:case 36298:case 36306:case 35682:return nE;case 35679:case 36299:case 36307:return iE;case 35680:case 36300:case 36308:case 36293:return rE;case 36289:case 36303:case 36311:case 36292:return sE}}class aE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=B2(n.type)}}class lE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=oE(n.type)}}class cE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Cu=/(\w+)(\])?(\[|\.)?/g;function Cm(t,e){t.seq.push(e),t.map[e.id]=e}function uE(t,e,n){const i=t.name,r=i.length;for(Cu.lastIndex=0;;){const s=Cu.exec(i),o=Cu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Cm(n,c===void 0?new aE(a,t,e):new lE(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new cE(a),Cm(n,d)),n=d}}}class xl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);uE(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Rm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const dE=37297;let hE=0;function fE(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function pE(t){const e=st.getPrimaries(st.workingColorSpace),n=st.getPrimaries(t);let i;switch(e===n?i="":e===Xl&&n===Wl?i="LinearDisplayP3ToLinearSRGB":e===Wl&&n===Xl&&(i="LinearSRGBToLinearDisplayP3"),t){case lr:case pc:return[i,"LinearTransferOETF"];case Cn:case Oh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Pm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+fE(t.getShaderSource(e),o)}else return r}function mE(t,e){const n=pE(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function gE(t,e){let n;switch(e){case E1:n="Linear";break;case b1:n="Reinhard";break;case T1:n="OptimizedCineon";break;case A1:n="ACESFilmic";break;case R1:n="AgX";break;case P1:n="Neutral";break;case C1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function xE(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yo).join(`
`)}function vE(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function _E(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function yo(t){return t!==""}function Nm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yE=/^[ \t]*#include +<([\w\d./]+)>/gm;function kd(t){return t.replace(yE,SE)}const ME=new Map;function SE(t,e){let n=qe[e];if(n===void 0){const i=ME.get(e);if(i!==void 0)n=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return kd(n)}const wE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dm(t){return t.replace(wE,EE)}function EE(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Im(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function bE(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Sx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===wx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===fi&&(e="SHADOWMAP_TYPE_VSM"),e}function TE(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Fs:case zs:e="ENVMAP_TYPE_CUBE";break;case hc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function AE(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case zs:e="ENVMAP_MODE_REFRACTION";break}return e}function CE(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Ex:e="ENVMAP_BLENDING_MULTIPLY";break;case S1:e="ENVMAP_BLENDING_MIX";break;case w1:e="ENVMAP_BLENDING_ADD";break}return e}function RE(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function PE(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=bE(n),c=TE(n),h=AE(n),d=CE(n),f=RE(n),p=xE(n),v=vE(s),_=r.createProgram();let m,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(yo).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(yo).join(`
`),u.length>0&&(u+=`
`)):(m=[Im(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yo).join(`
`),u=[Im(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Zi?"#define TONE_MAPPING":"",n.toneMapping!==Zi?qe.tonemapping_pars_fragment:"",n.toneMapping!==Zi?gE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,mE("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(yo).join(`
`)),o=kd(o),o=Nm(o,n),o=Lm(o,n),a=kd(a),a=Nm(a,n),a=Lm(a,n),o=Dm(o),a=Dm(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===Kp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Kp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const y=g+m+o,M=g+u+a,C=Rm(r,r.VERTEX_SHADER,y),E=Rm(r,r.FRAGMENT_SHADER,M);r.attachShader(_,C),r.attachShader(_,E),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(D){if(t.debug.checkShaderErrors){const L=r.getProgramInfoLog(_).trim(),O=r.getShaderInfoLog(C).trim(),$=r.getShaderInfoLog(E).trim();let q=!0,X=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,C,E);else{const ne=Pm(r,C,"vertex"),z=Pm(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+L+`
`+ne+`
`+z)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(O===""||$==="")&&(X=!1);X&&(D.diagnostics={runnable:q,programLog:L,vertexShader:{log:O,prefix:m},fragmentShader:{log:$,prefix:u}})}r.deleteShader(C),r.deleteShader(E),R=new xl(r,_),w=_E(r,_)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,dE)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=hE++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=E,this}let NE=0;class LE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new DE(e),n.set(e,i)),i}}class DE{constructor(e){this.id=NE++,this.code=e,this.usedTimes=0}}function IE(t,e,n,i,r,s,o){const a=new Fh,l=new LE,c=new Set,h=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,S,D,L,O){const $=L.fog,q=O.geometry,X=w.isMeshStandardMaterial?L.environment:null,ne=(w.isMeshStandardMaterial?n:e).get(w.envMap||X),z=ne&&ne.mapping===hc?ne.image.height:null,oe=v[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const I=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,P=I!==void 0?I.length:0;let ae=0;q.morphAttributes.position!==void 0&&(ae=1),q.morphAttributes.normal!==void 0&&(ae=2),q.morphAttributes.color!==void 0&&(ae=3);let me,j,ee,F;if(oe){const lt=Qn[oe];me=lt.vertexShader,j=lt.fragmentShader}else me=w.vertexShader,j=w.fragmentShader,l.update(w),ee=l.getVertexShaderID(w),F=l.getFragmentShaderID(w);const H=t.getRenderTarget(),Y=O.isInstancedMesh===!0,he=O.isBatchedMesh===!0,ge=!!w.map,U=!!w.matcap,Ce=!!ne,Te=!!w.aoMap,_e=!!w.lightMap,we=!!w.bumpMap,Ie=!!w.normalMap,Ee=!!w.displacementMap,ye=!!w.emissiveMap,Ge=!!w.metalnessMap,k=!!w.roughnessMap,b=w.anisotropy>0,Z=w.clearcoat>0,le=w.dispersion>0,ce=w.iridescence>0,de=w.sheen>0,Le=w.transmission>0,ve=b&&!!w.anisotropyMap,Me=Z&&!!w.clearcoatMap,Ue=Z&&!!w.clearcoatNormalMap,re=Z&&!!w.clearcoatRoughnessMap,Re=ce&&!!w.iridescenceMap,Ve=ce&&!!w.iridescenceThicknessMap,Oe=de&&!!w.sheenColorMap,se=de&&!!w.sheenRoughnessMap,Be=!!w.specularMap,Se=!!w.specularColorMap,nt=!!w.specularIntensityMap,N=Le&&!!w.transmissionMap,te=Le&&!!w.thicknessMap,G=!!w.gradientMap,Q=!!w.alphaMap,fe=w.alphaTest>0,Fe=!!w.alphaHash,Ke=!!w.extensions;let Tt=Zi;w.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Tt=t.toneMapping);const Ut={shaderID:oe,shaderType:w.type,shaderName:w.name,vertexShader:me,fragmentShader:j,defines:w.defines,customVertexShaderID:ee,customFragmentShaderID:F,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:he,batchingColor:he&&O._colorsTexture!==null,instancing:Y,instancingColor:Y&&O.instanceColor!==null,instancingMorph:Y&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:H===null?t.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:lr,alphaToCoverage:!!w.alphaToCoverage,map:ge,matcap:U,envMap:Ce,envMapMode:Ce&&ne.mapping,envMapCubeUVHeight:z,aoMap:Te,lightMap:_e,bumpMap:we,normalMap:Ie,displacementMap:f&&Ee,emissiveMap:ye,normalMapObjectSpace:Ie&&w.normalMapType===G1,normalMapTangentSpace:Ie&&w.normalMapType===Lx,metalnessMap:Ge,roughnessMap:k,anisotropy:b,anisotropyMap:ve,clearcoat:Z,clearcoatMap:Me,clearcoatNormalMap:Ue,clearcoatRoughnessMap:re,dispersion:le,iridescence:ce,iridescenceMap:Re,iridescenceThicknessMap:Ve,sheen:de,sheenColorMap:Oe,sheenRoughnessMap:se,specularMap:Be,specularColorMap:Se,specularIntensityMap:nt,transmission:Le,transmissionMap:N,thicknessMap:te,gradientMap:G,opaque:w.transparent===!1&&w.blending===As&&w.alphaToCoverage===!1,alphaMap:Q,alphaTest:fe,alphaHash:Fe,combine:w.combine,mapUv:ge&&_(w.map.channel),aoMapUv:Te&&_(w.aoMap.channel),lightMapUv:_e&&_(w.lightMap.channel),bumpMapUv:we&&_(w.bumpMap.channel),normalMapUv:Ie&&_(w.normalMap.channel),displacementMapUv:Ee&&_(w.displacementMap.channel),emissiveMapUv:ye&&_(w.emissiveMap.channel),metalnessMapUv:Ge&&_(w.metalnessMap.channel),roughnessMapUv:k&&_(w.roughnessMap.channel),anisotropyMapUv:ve&&_(w.anisotropyMap.channel),clearcoatMapUv:Me&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:se&&_(w.sheenRoughnessMap.channel),specularMapUv:Be&&_(w.specularMap.channel),specularColorMapUv:Se&&_(w.specularColorMap.channel),specularIntensityMapUv:nt&&_(w.specularIntensityMap.channel),transmissionMapUv:N&&_(w.transmissionMap.channel),thicknessMapUv:te&&_(w.thicknessMap.channel),alphaMapUv:Q&&_(w.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Ie||b),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!q.attributes.uv&&(ge||Q),fog:!!$,useFog:w.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:O.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:ae,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:Tt,decodeVideoTexture:ge&&w.map.isVideoTexture===!0&&st.getTransfer(w.map.colorSpace)===ft,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===hn,flipSided:w.side===on,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ke&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ke&&w.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ut.vertexUv1s=c.has(1),Ut.vertexUv2s=c.has(2),Ut.vertexUv3s=c.has(3),c.clear(),Ut}function u(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const D in w.defines)S.push(D),S.push(w.defines[D]);return w.isRawShaderMaterial===!1&&(g(S,w),y(S,w),S.push(t.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function g(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function y(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),w.push(a.mask)}function M(w){const S=v[w.type];let D;if(S){const L=Qn[S];D=vM.clone(L.uniforms)}else D=w.uniforms;return D}function C(w,S){let D;for(let L=0,O=h.length;L<O;L++){const $=h[L];if($.cacheKey===S){D=$,++D.usedTimes;break}}return D===void 0&&(D=new PE(t,S,w,s),h.push(D)),D}function E(w){if(--w.usedTimes===0){const S=h.indexOf(w);h[S]=h[h.length-1],h.pop(),w.destroy()}}function T(w){l.remove(w)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:M,acquireProgram:C,releaseProgram:E,releaseShaderCache:T,programs:h,dispose:R}}function UE(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function kE(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Um(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function km(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,f,p,v,_,m){let u=t[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:v,renderOrder:d.renderOrder,z:_,group:m},t[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=v,u.renderOrder=d.renderOrder,u.z=_,u.group=m),e++,u}function a(d,f,p,v,_,m){const u=o(d,f,p,v,_,m);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(d,f,p,v,_,m){const u=o(d,f,p,v,_,m);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(d,f){n.length>1&&n.sort(d||kE),i.length>1&&i.sort(f||Um),r.length>1&&r.sort(f||Um)}function h(){for(let d=e,f=t.length;d<f;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function OE(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new km,t.set(i,[o])):r>=s.length?(o=new km,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function FE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new Xe};break;case"SpotLight":n={position:new B,direction:new B,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":n={color:new Xe,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function zE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let BE=0;function HE(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function VE(t){const e=new FE,n=zE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const r=new B,s=new mt,o=new mt;function a(c){let h=0,d=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,v=0,_=0,m=0,u=0,g=0,y=0,M=0,C=0,E=0,T=0;c.sort(HE);for(let w=0,S=c.length;w<S;w++){const D=c[w],L=D.color,O=D.intensity,$=D.distance,q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=L.r*O,d+=L.g*O,f+=L.b*O;else if(D.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(D.sh.coefficients[X],O);T++}else if(D.isDirectionalLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ne=D.shadow,z=n.get(D);z.shadowBias=ne.bias,z.shadowNormalBias=ne.normalBias,z.shadowRadius=ne.radius,z.shadowMapSize=ne.mapSize,i.directionalShadow[p]=z,i.directionalShadowMap[p]=q,i.directionalShadowMatrix[p]=D.shadow.matrix,g++}i.directional[p]=X,p++}else if(D.isSpotLight){const X=e.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(L).multiplyScalar(O),X.distance=$,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,i.spot[_]=X;const ne=D.shadow;if(D.map&&(i.spotLightMap[C]=D.map,C++,ne.updateMatrices(D),D.castShadow&&E++),i.spotLightMatrix[_]=ne.matrix,D.castShadow){const z=n.get(D);z.shadowBias=ne.bias,z.shadowNormalBias=ne.normalBias,z.shadowRadius=ne.radius,z.shadowMapSize=ne.mapSize,i.spotShadow[_]=z,i.spotShadowMap[_]=q,M++}_++}else if(D.isRectAreaLight){const X=e.get(D);X.color.copy(L).multiplyScalar(O),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=X,m++}else if(D.isPointLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){const ne=D.shadow,z=n.get(D);z.shadowBias=ne.bias,z.shadowNormalBias=ne.normalBias,z.shadowRadius=ne.radius,z.shadowMapSize=ne.mapSize,z.shadowCameraNear=ne.camera.near,z.shadowCameraFar=ne.camera.far,i.pointShadow[v]=z,i.pointShadowMap[v]=q,i.pointShadowMatrix[v]=D.shadow.matrix,y++}i.point[v]=X,v++}else if(D.isHemisphereLight){const X=e.get(D);X.skyColor.copy(D.color).multiplyScalar(O),X.groundColor.copy(D.groundColor).multiplyScalar(O),i.hemi[u]=X,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==p||R.pointLength!==v||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==u||R.numDirectionalShadows!==g||R.numPointShadows!==y||R.numSpotShadows!==M||R.numSpotMaps!==C||R.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=v,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=M+C-E,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=T,R.directionalLength=p,R.pointLength=v,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=u,R.numDirectionalShadows=g,R.numPointShadows=y,R.numSpotShadows=M,R.numSpotMaps=C,R.numLightProbes=T,i.version=BE++)}function l(c,h){let d=0,f=0,p=0,v=0,_=0;const m=h.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){const y=c[u];if(y.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(y.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const M=i.hemi[_];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Om(t){const e=new VE(t),n=[],i=[];function r(h){c.camera=h,n.length=0,i.length=0}function s(h){n.push(h)}function o(h){i.push(h)}function a(){e.setup(n)}function l(h){e.setupView(n,h)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function jE(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Om(t),e.set(r,[a])):s>=o.length?(a=new Om(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class GE extends Vr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=V1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class WE extends Vr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const XE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qE(t,e,n){let i=new zh;const r=new Ae,s=new Ae,o=new Bt,a=new GE({depthPacking:j1}),l=new WE,c={},h=n.maxTextureSize,d={[tr]:on,[on]:tr,[hn]:hn},f=new ir({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:XE,fragmentShader:YE}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new Yt;v.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ie(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sx;let u=this.type;this.render=function(E,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const w=t.getRenderTarget(),S=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),L=t.state;L.setBlending(Ki),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const O=u!==fi&&this.type===fi,$=u===fi&&this.type!==fi;for(let q=0,X=E.length;q<X;q++){const ne=E[q],z=ne.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const oe=z.getFrameExtents();if(r.multiply(oe),s.copy(z.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/oe.x),r.x=s.x*oe.x,z.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/oe.y),r.y=s.y*oe.y,z.mapSize.y=s.y)),z.map===null||O===!0||$===!0){const P=this.type!==fi?{minFilter:Dn,magFilter:Dn}:{};z.map!==null&&z.map.dispose(),z.map=new Or(r.x,r.y,P),z.map.texture.name=ne.name+".shadowMap",z.camera.updateProjectionMatrix()}t.setRenderTarget(z.map),t.clear();const I=z.getViewportCount();for(let P=0;P<I;P++){const ae=z.getViewport(P);o.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),L.viewport(o),z.updateMatrices(ne,P),i=z.getFrustum(),M(T,R,z.camera,ne,this.type)}z.isPointLightShadow!==!0&&this.type===fi&&g(z,R),z.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(w,S,D)};function g(E,T){const R=e.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Or(r.x,r.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(T,null,R,f,_,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(T,null,R,p,_,null)}function y(E,T,R,w){let S=null;const D=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)S=D;else if(S=R.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const L=S.uuid,O=T.uuid;let $=c[L];$===void 0&&($={},c[L]=$);let q=$[O];q===void 0&&(q=S.clone(),$[O]=q,T.addEventListener("dispose",C)),S=q}if(S.visible=T.visible,S.wireframe=T.wireframe,w===fi?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:d[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const L=t.properties.get(S);L.light=R}return S}function M(E,T,R,w,S){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===fi)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const O=e.update(E),$=E.material;if(Array.isArray($)){const q=O.groups;for(let X=0,ne=q.length;X<ne;X++){const z=q[X],oe=$[z.materialIndex];if(oe&&oe.visible){const I=y(E,oe,w,S);E.onBeforeShadow(t,E,T,R,O,I,z),t.renderBufferDirect(R,null,O,I,E,z),E.onAfterShadow(t,E,T,R,O,I,z)}}}else if($.visible){const q=y(E,$,w,S);E.onBeforeShadow(t,E,T,R,O,q,null),t.renderBufferDirect(R,null,O,q,E,null),E.onAfterShadow(t,E,T,R,O,q,null)}}const L=E.children;for(let O=0,$=L.length;O<$;O++)M(L[O],T,R,w,S)}function C(E){E.target.removeEventListener("dispose",C);for(const R in c){const w=c[R],S=E.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}function $E(t){function e(){let N=!1;const te=new Bt;let G=null;const Q=new Bt(0,0,0,0);return{setMask:function(fe){G!==fe&&!N&&(t.colorMask(fe,fe,fe,fe),G=fe)},setLocked:function(fe){N=fe},setClear:function(fe,Fe,Ke,Tt,Ut){Ut===!0&&(fe*=Tt,Fe*=Tt,Ke*=Tt),te.set(fe,Fe,Ke,Tt),Q.equals(te)===!1&&(t.clearColor(fe,Fe,Ke,Tt),Q.copy(te))},reset:function(){N=!1,G=null,Q.set(-1,0,0,0)}}}function n(){let N=!1,te=null,G=null,Q=null;return{setTest:function(fe){fe?F(t.DEPTH_TEST):H(t.DEPTH_TEST)},setMask:function(fe){te!==fe&&!N&&(t.depthMask(fe),te=fe)},setFunc:function(fe){if(G!==fe){switch(fe){case m1:t.depthFunc(t.NEVER);break;case g1:t.depthFunc(t.ALWAYS);break;case x1:t.depthFunc(t.LESS);break;case Vl:t.depthFunc(t.LEQUAL);break;case v1:t.depthFunc(t.EQUAL);break;case _1:t.depthFunc(t.GEQUAL);break;case y1:t.depthFunc(t.GREATER);break;case M1:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}G=fe}},setLocked:function(fe){N=fe},setClear:function(fe){Q!==fe&&(t.clearDepth(fe),Q=fe)},reset:function(){N=!1,te=null,G=null,Q=null}}}function i(){let N=!1,te=null,G=null,Q=null,fe=null,Fe=null,Ke=null,Tt=null,Ut=null;return{setTest:function(lt){N||(lt?F(t.STENCIL_TEST):H(t.STENCIL_TEST))},setMask:function(lt){te!==lt&&!N&&(t.stencilMask(lt),te=lt)},setFunc:function(lt,$n,Kn){(G!==lt||Q!==$n||fe!==Kn)&&(t.stencilFunc(lt,$n,Kn),G=lt,Q=$n,fe=Kn)},setOp:function(lt,$n,Kn){(Fe!==lt||Ke!==$n||Tt!==Kn)&&(t.stencilOp(lt,$n,Kn),Fe=lt,Ke=$n,Tt=Kn)},setLocked:function(lt){N=lt},setClear:function(lt){Ut!==lt&&(t.clearStencil(lt),Ut=lt)},reset:function(){N=!1,te=null,G=null,Q=null,fe=null,Fe=null,Ke=null,Tt=null,Ut=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},h={},d=new WeakMap,f=[],p=null,v=!1,_=null,m=null,u=null,g=null,y=null,M=null,C=null,E=new Xe(0,0,0),T=0,R=!1,w=null,S=null,D=null,L=null,O=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,X=0;const ne=t.getParameter(t.VERSION);ne.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(ne)[1]),q=X>=1):ne.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),q=X>=2);let z=null,oe={};const I=t.getParameter(t.SCISSOR_BOX),P=t.getParameter(t.VIEWPORT),ae=new Bt().fromArray(I),me=new Bt().fromArray(P);function j(N,te,G,Q){const fe=new Uint8Array(4),Fe=t.createTexture();t.bindTexture(N,Fe),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ke=0;Ke<G;Ke++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(te,0,t.RGBA,1,1,Q,0,t.RGBA,t.UNSIGNED_BYTE,fe):t.texImage2D(te+Ke,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,fe);return Fe}const ee={};ee[t.TEXTURE_2D]=j(t.TEXTURE_2D,t.TEXTURE_2D,1),ee[t.TEXTURE_CUBE_MAP]=j(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[t.TEXTURE_2D_ARRAY]=j(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ee[t.TEXTURE_3D]=j(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),F(t.DEPTH_TEST),s.setFunc(Vl),we(!1),Ie(vp),F(t.CULL_FACE),Te(Ki);function F(N){c[N]!==!0&&(t.enable(N),c[N]=!0)}function H(N){c[N]!==!1&&(t.disable(N),c[N]=!1)}function Y(N,te){return h[N]!==te?(t.bindFramebuffer(N,te),h[N]=te,N===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=te),N===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=te),!0):!1}function he(N,te){let G=f,Q=!1;if(N){G=d.get(te),G===void 0&&(G=[],d.set(te,G));const fe=N.textures;if(G.length!==fe.length||G[0]!==t.COLOR_ATTACHMENT0){for(let Fe=0,Ke=fe.length;Fe<Ke;Fe++)G[Fe]=t.COLOR_ATTACHMENT0+Fe;G.length=fe.length,Q=!0}}else G[0]!==t.BACK&&(G[0]=t.BACK,Q=!0);Q&&t.drawBuffers(G)}function ge(N){return p!==N?(t.useProgram(N),p=N,!0):!1}const U={[Sr]:t.FUNC_ADD,[Jy]:t.FUNC_SUBTRACT,[Qy]:t.FUNC_REVERSE_SUBTRACT};U[e1]=t.MIN,U[t1]=t.MAX;const Ce={[n1]:t.ZERO,[i1]:t.ONE,[r1]:t.SRC_COLOR,[Pd]:t.SRC_ALPHA,[u1]:t.SRC_ALPHA_SATURATE,[l1]:t.DST_COLOR,[o1]:t.DST_ALPHA,[s1]:t.ONE_MINUS_SRC_COLOR,[Nd]:t.ONE_MINUS_SRC_ALPHA,[c1]:t.ONE_MINUS_DST_COLOR,[a1]:t.ONE_MINUS_DST_ALPHA,[d1]:t.CONSTANT_COLOR,[h1]:t.ONE_MINUS_CONSTANT_COLOR,[f1]:t.CONSTANT_ALPHA,[p1]:t.ONE_MINUS_CONSTANT_ALPHA};function Te(N,te,G,Q,fe,Fe,Ke,Tt,Ut,lt){if(N===Ki){v===!0&&(H(t.BLEND),v=!1);return}if(v===!1&&(F(t.BLEND),v=!0),N!==Zy){if(N!==_||lt!==R){if((m!==Sr||y!==Sr)&&(t.blendEquation(t.FUNC_ADD),m=Sr,y=Sr),lt)switch(N){case As:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case _p:t.blendFunc(t.ONE,t.ONE);break;case yp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Mp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case As:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case _p:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case yp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Mp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}u=null,g=null,M=null,C=null,E.set(0,0,0),T=0,_=N,R=lt}return}fe=fe||te,Fe=Fe||G,Ke=Ke||Q,(te!==m||fe!==y)&&(t.blendEquationSeparate(U[te],U[fe]),m=te,y=fe),(G!==u||Q!==g||Fe!==M||Ke!==C)&&(t.blendFuncSeparate(Ce[G],Ce[Q],Ce[Fe],Ce[Ke]),u=G,g=Q,M=Fe,C=Ke),(Tt.equals(E)===!1||Ut!==T)&&(t.blendColor(Tt.r,Tt.g,Tt.b,Ut),E.copy(Tt),T=Ut),_=N,R=!1}function _e(N,te){N.side===hn?H(t.CULL_FACE):F(t.CULL_FACE);let G=N.side===on;te&&(G=!G),we(G),N.blending===As&&N.transparent===!1?Te(Ki):Te(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),r.setMask(N.colorWrite);const Q=N.stencilWrite;o.setTest(Q),Q&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ye(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?F(t.SAMPLE_ALPHA_TO_COVERAGE):H(t.SAMPLE_ALPHA_TO_COVERAGE)}function we(N){w!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),w=N)}function Ie(N){N!==$y?(F(t.CULL_FACE),N!==S&&(N===vp?t.cullFace(t.BACK):N===Ky?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):H(t.CULL_FACE),S=N}function Ee(N){N!==D&&(q&&t.lineWidth(N),D=N)}function ye(N,te,G){N?(F(t.POLYGON_OFFSET_FILL),(L!==te||O!==G)&&(t.polygonOffset(te,G),L=te,O=G)):H(t.POLYGON_OFFSET_FILL)}function Ge(N){N?F(t.SCISSOR_TEST):H(t.SCISSOR_TEST)}function k(N){N===void 0&&(N=t.TEXTURE0+$-1),z!==N&&(t.activeTexture(N),z=N)}function b(N,te,G){G===void 0&&(z===null?G=t.TEXTURE0+$-1:G=z);let Q=oe[G];Q===void 0&&(Q={type:void 0,texture:void 0},oe[G]=Q),(Q.type!==N||Q.texture!==te)&&(z!==G&&(t.activeTexture(G),z=G),t.bindTexture(N,te||ee[N]),Q.type=N,Q.texture=te)}function Z(){const N=oe[z];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function le(){try{t.compressedTexImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ce(){try{t.compressedTexImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(){try{t.texSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Le(){try{t.texSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ve(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ue(){try{t.texStorage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{t.texStorage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(){try{t.texImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ve(){try{t.texImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Oe(N){ae.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),ae.copy(N))}function se(N){me.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),me.copy(N))}function Be(N,te){let G=l.get(te);G===void 0&&(G=new WeakMap,l.set(te,G));let Q=G.get(N);Q===void 0&&(Q=t.getUniformBlockIndex(te,N.name),G.set(N,Q))}function Se(N,te){const Q=l.get(te).get(N);a.get(te)!==Q&&(t.uniformBlockBinding(te,Q,N.__bindingPointIndex),a.set(te,Q))}function nt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},z=null,oe={},h={},d=new WeakMap,f=[],p=null,v=!1,_=null,m=null,u=null,g=null,y=null,M=null,C=null,E=new Xe(0,0,0),T=0,R=!1,w=null,S=null,D=null,L=null,O=null,ae.set(0,0,t.canvas.width,t.canvas.height),me.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:F,disable:H,bindFramebuffer:Y,drawBuffers:he,useProgram:ge,setBlending:Te,setMaterial:_e,setFlipSided:we,setCullFace:Ie,setLineWidth:Ee,setPolygonOffset:ye,setScissorTest:Ge,activeTexture:k,bindTexture:b,unbindTexture:Z,compressedTexImage2D:le,compressedTexImage3D:ce,texImage2D:Re,texImage3D:Ve,updateUBOMapping:Be,uniformBlockBinding:Se,texStorage2D:Ue,texStorage3D:re,texSubImage2D:de,texSubImage3D:Le,compressedTexSubImage2D:ve,compressedTexSubImage3D:Me,scissor:Oe,viewport:se,reset:nt}}function KE(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ae,h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(k,b){return p?new OffscreenCanvas(k,b):Jo("canvas")}function _(k,b,Z){let le=1;const ce=Ge(k);if((ce.width>Z||ce.height>Z)&&(le=Z/Math.max(ce.width,ce.height)),le<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){const de=Math.floor(le*ce.width),Le=Math.floor(le*ce.height);d===void 0&&(d=v(de,Le));const ve=b?v(de,Le):d;return ve.width=de,ve.height=Le,ve.getContext("2d").drawImage(k,0,0,de,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+de+"x"+Le+")."),ve}else return"data"in k&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),k;return k}function m(k){return k.generateMipmaps&&k.minFilter!==Dn&&k.minFilter!==Wn}function u(k){t.generateMipmap(k)}function g(k,b,Z,le,ce=!1){if(k!==null){if(t[k]!==void 0)return t[k];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let de=b;if(b===t.RED&&(Z===t.FLOAT&&(de=t.R32F),Z===t.HALF_FLOAT&&(de=t.R16F),Z===t.UNSIGNED_BYTE&&(de=t.R8)),b===t.RED_INTEGER&&(Z===t.UNSIGNED_BYTE&&(de=t.R8UI),Z===t.UNSIGNED_SHORT&&(de=t.R16UI),Z===t.UNSIGNED_INT&&(de=t.R32UI),Z===t.BYTE&&(de=t.R8I),Z===t.SHORT&&(de=t.R16I),Z===t.INT&&(de=t.R32I)),b===t.RG&&(Z===t.FLOAT&&(de=t.RG32F),Z===t.HALF_FLOAT&&(de=t.RG16F),Z===t.UNSIGNED_BYTE&&(de=t.RG8)),b===t.RG_INTEGER&&(Z===t.UNSIGNED_BYTE&&(de=t.RG8UI),Z===t.UNSIGNED_SHORT&&(de=t.RG16UI),Z===t.UNSIGNED_INT&&(de=t.RG32UI),Z===t.BYTE&&(de=t.RG8I),Z===t.SHORT&&(de=t.RG16I),Z===t.INT&&(de=t.RG32I)),b===t.RGB&&Z===t.UNSIGNED_INT_5_9_9_9_REV&&(de=t.RGB9_E5),b===t.RGBA){const Le=ce?Gl:st.getTransfer(le);Z===t.FLOAT&&(de=t.RGBA32F),Z===t.HALF_FLOAT&&(de=t.RGBA16F),Z===t.UNSIGNED_BYTE&&(de=Le===ft?t.SRGB8_ALPHA8:t.RGBA8),Z===t.UNSIGNED_SHORT_4_4_4_4&&(de=t.RGBA4),Z===t.UNSIGNED_SHORT_5_5_5_1&&(de=t.RGB5_A1)}return(de===t.R16F||de===t.R32F||de===t.RG16F||de===t.RG32F||de===t.RGBA16F||de===t.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function y(k,b){let Z;return k?b===null||b===Bs||b===Hs?Z=t.DEPTH24_STENCIL8:b===Hi?Z=t.DEPTH32F_STENCIL8:b===jl&&(Z=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Bs||b===Hs?Z=t.DEPTH_COMPONENT24:b===Hi?Z=t.DEPTH_COMPONENT32F:b===jl&&(Z=t.DEPTH_COMPONENT16),Z}function M(k,b){return m(k)===!0||k.isFramebufferTexture&&k.minFilter!==Dn&&k.minFilter!==Wn?Math.log2(Math.max(b.width,b.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?b.mipmaps.length:1}function C(k){const b=k.target;b.removeEventListener("dispose",C),T(b),b.isVideoTexture&&h.delete(b)}function E(k){const b=k.target;b.removeEventListener("dispose",E),w(b)}function T(k){const b=i.get(k);if(b.__webglInit===void 0)return;const Z=k.source,le=f.get(Z);if(le){const ce=le[b.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&R(k),Object.keys(le).length===0&&f.delete(Z)}i.remove(k)}function R(k){const b=i.get(k);t.deleteTexture(b.__webglTexture);const Z=k.source,le=f.get(Z);delete le[b.__cacheKey],o.memory.textures--}function w(k){const b=i.get(k);if(k.depthTexture&&k.depthTexture.dispose(),k.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(b.__webglFramebuffer[le]))for(let ce=0;ce<b.__webglFramebuffer[le].length;ce++)t.deleteFramebuffer(b.__webglFramebuffer[le][ce]);else t.deleteFramebuffer(b.__webglFramebuffer[le]);b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer[le])}else{if(Array.isArray(b.__webglFramebuffer))for(let le=0;le<b.__webglFramebuffer.length;le++)t.deleteFramebuffer(b.__webglFramebuffer[le]);else t.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&t.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let le=0;le<b.__webglColorRenderbuffer.length;le++)b.__webglColorRenderbuffer[le]&&t.deleteRenderbuffer(b.__webglColorRenderbuffer[le]);b.__webglDepthRenderbuffer&&t.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Z=k.textures;for(let le=0,ce=Z.length;le<ce;le++){const de=i.get(Z[le]);de.__webglTexture&&(t.deleteTexture(de.__webglTexture),o.memory.textures--),i.remove(Z[le])}i.remove(k)}let S=0;function D(){S=0}function L(){const k=S;return k>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+k+" texture units while this GPU supports only "+r.maxTextures),S+=1,k}function O(k){const b=[];return b.push(k.wrapS),b.push(k.wrapT),b.push(k.wrapR||0),b.push(k.magFilter),b.push(k.minFilter),b.push(k.anisotropy),b.push(k.internalFormat),b.push(k.format),b.push(k.type),b.push(k.generateMipmaps),b.push(k.premultiplyAlpha),b.push(k.flipY),b.push(k.unpackAlignment),b.push(k.colorSpace),b.join()}function $(k,b){const Z=i.get(k);if(k.isVideoTexture&&Ee(k),k.isRenderTargetTexture===!1&&k.version>0&&Z.__version!==k.version){const le=k.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(Z,k,b);return}}n.bindTexture(t.TEXTURE_2D,Z.__webglTexture,t.TEXTURE0+b)}function q(k,b){const Z=i.get(k);if(k.version>0&&Z.__version!==k.version){me(Z,k,b);return}n.bindTexture(t.TEXTURE_2D_ARRAY,Z.__webglTexture,t.TEXTURE0+b)}function X(k,b){const Z=i.get(k);if(k.version>0&&Z.__version!==k.version){me(Z,k,b);return}n.bindTexture(t.TEXTURE_3D,Z.__webglTexture,t.TEXTURE0+b)}function ne(k,b){const Z=i.get(k);if(k.version>0&&Z.__version!==k.version){j(Z,k,b);return}n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture,t.TEXTURE0+b)}const z={[Zo]:t.REPEAT,[Cr]:t.CLAMP_TO_EDGE,[Id]:t.MIRRORED_REPEAT},oe={[Dn]:t.NEAREST,[N1]:t.NEAREST_MIPMAP_NEAREST,[Na]:t.NEAREST_MIPMAP_LINEAR,[Wn]:t.LINEAR,[Zc]:t.LINEAR_MIPMAP_NEAREST,[Rr]:t.LINEAR_MIPMAP_LINEAR},I={[W1]:t.NEVER,[Z1]:t.ALWAYS,[X1]:t.LESS,[Dx]:t.LEQUAL,[Y1]:t.EQUAL,[K1]:t.GEQUAL,[q1]:t.GREATER,[$1]:t.NOTEQUAL};function P(k,b){if(b.type===Hi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Wn||b.magFilter===Zc||b.magFilter===Na||b.magFilter===Rr||b.minFilter===Wn||b.minFilter===Zc||b.minFilter===Na||b.minFilter===Rr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(k,t.TEXTURE_WRAP_S,z[b.wrapS]),t.texParameteri(k,t.TEXTURE_WRAP_T,z[b.wrapT]),(k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY)&&t.texParameteri(k,t.TEXTURE_WRAP_R,z[b.wrapR]),t.texParameteri(k,t.TEXTURE_MAG_FILTER,oe[b.magFilter]),t.texParameteri(k,t.TEXTURE_MIN_FILTER,oe[b.minFilter]),b.compareFunction&&(t.texParameteri(k,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(k,t.TEXTURE_COMPARE_FUNC,I[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Dn||b.minFilter!==Na&&b.minFilter!==Rr||b.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(k,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function ae(k,b){let Z=!1;k.__webglInit===void 0&&(k.__webglInit=!0,b.addEventListener("dispose",C));const le=b.source;let ce=f.get(le);ce===void 0&&(ce={},f.set(le,ce));const de=O(b);if(de!==k.__cacheKey){ce[de]===void 0&&(ce[de]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),ce[de].usedTimes++;const Le=ce[k.__cacheKey];Le!==void 0&&(ce[k.__cacheKey].usedTimes--,Le.usedTimes===0&&R(b)),k.__cacheKey=de,k.__webglTexture=ce[de].texture}return Z}function me(k,b,Z){let le=t.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(le=t.TEXTURE_2D_ARRAY),b.isData3DTexture&&(le=t.TEXTURE_3D);const ce=ae(k,b),de=b.source;n.bindTexture(le,k.__webglTexture,t.TEXTURE0+Z);const Le=i.get(de);if(de.version!==Le.__version||ce===!0){n.activeTexture(t.TEXTURE0+Z);const ve=st.getPrimaries(st.workingColorSpace),Me=b.colorSpace===Fi?null:st.getPrimaries(b.colorSpace),Ue=b.colorSpace===Fi||ve===Me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let re=_(b.image,!1,r.maxTextureSize);re=ye(b,re);const Re=s.convert(b.format,b.colorSpace),Ve=s.convert(b.type);let Oe=g(b.internalFormat,Re,Ve,b.colorSpace,b.isVideoTexture);P(le,b);let se;const Be=b.mipmaps,Se=b.isVideoTexture!==!0,nt=Le.__version===void 0||ce===!0,N=de.dataReady,te=M(b,re);if(b.isDepthTexture)Oe=y(b.format===Vs,b.type),nt&&(Se?n.texStorage2D(t.TEXTURE_2D,1,Oe,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,Oe,re.width,re.height,0,Re,Ve,null));else if(b.isDataTexture)if(Be.length>0){Se&&nt&&n.texStorage2D(t.TEXTURE_2D,te,Oe,Be[0].width,Be[0].height);for(let G=0,Q=Be.length;G<Q;G++)se=Be[G],Se?N&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,se.width,se.height,Re,Ve,se.data):n.texImage2D(t.TEXTURE_2D,G,Oe,se.width,se.height,0,Re,Ve,se.data);b.generateMipmaps=!1}else Se?(nt&&n.texStorage2D(t.TEXTURE_2D,te,Oe,re.width,re.height),N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,Re,Ve,re.data)):n.texImage2D(t.TEXTURE_2D,0,Oe,re.width,re.height,0,Re,Ve,re.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Se&&nt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,te,Oe,Be[0].width,Be[0].height,re.depth);for(let G=0,Q=Be.length;G<Q;G++)if(se=Be[G],b.format!==ni)if(Re!==null)if(Se){if(N)if(b.layerUpdates.size>0){for(const fe of b.layerUpdates){const Fe=se.width*se.height;n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,fe,se.width,se.height,1,Re,se.data.slice(Fe*fe,Fe*(fe+1)),0,0)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,0,se.width,se.height,re.depth,Re,se.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,G,Oe,se.width,se.height,re.depth,0,se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Se?N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,0,se.width,se.height,re.depth,Re,Ve,se.data):n.texImage3D(t.TEXTURE_2D_ARRAY,G,Oe,se.width,se.height,re.depth,0,Re,Ve,se.data)}else{Se&&nt&&n.texStorage2D(t.TEXTURE_2D,te,Oe,Be[0].width,Be[0].height);for(let G=0,Q=Be.length;G<Q;G++)se=Be[G],b.format!==ni?Re!==null?Se?N&&n.compressedTexSubImage2D(t.TEXTURE_2D,G,0,0,se.width,se.height,Re,se.data):n.compressedTexImage2D(t.TEXTURE_2D,G,Oe,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Se?N&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,se.width,se.height,Re,Ve,se.data):n.texImage2D(t.TEXTURE_2D,G,Oe,se.width,se.height,0,Re,Ve,se.data)}else if(b.isDataArrayTexture)if(Se){if(nt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,te,Oe,re.width,re.height,re.depth),N)if(b.layerUpdates.size>0){let G;switch(Ve){case t.UNSIGNED_BYTE:switch(Re){case t.ALPHA:G=1;break;case t.LUMINANCE:G=1;break;case t.LUMINANCE_ALPHA:G=2;break;case t.RGB:G=3;break;case t.RGBA:G=4;break;default:throw new Error(`Unknown texel size for format ${Re}.`)}break;case t.UNSIGNED_SHORT_4_4_4_4:case t.UNSIGNED_SHORT_5_5_5_1:case t.UNSIGNED_SHORT_5_6_5:G=1;break;default:throw new Error(`Unknown texel size for type ${Ve}.`)}const Q=re.width*re.height*G;for(const fe of b.layerUpdates)n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,fe,re.width,re.height,1,Re,Ve,re.data.slice(Q*fe,Q*(fe+1)));b.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Re,Ve,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Oe,re.width,re.height,re.depth,0,Re,Ve,re.data);else if(b.isData3DTexture)Se?(nt&&n.texStorage3D(t.TEXTURE_3D,te,Oe,re.width,re.height,re.depth),N&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Re,Ve,re.data)):n.texImage3D(t.TEXTURE_3D,0,Oe,re.width,re.height,re.depth,0,Re,Ve,re.data);else if(b.isFramebufferTexture){if(nt)if(Se)n.texStorage2D(t.TEXTURE_2D,te,Oe,re.width,re.height);else{let G=re.width,Q=re.height;for(let fe=0;fe<te;fe++)n.texImage2D(t.TEXTURE_2D,fe,Oe,G,Q,0,Re,Ve,null),G>>=1,Q>>=1}}else if(Be.length>0){if(Se&&nt){const G=Ge(Be[0]);n.texStorage2D(t.TEXTURE_2D,te,Oe,G.width,G.height)}for(let G=0,Q=Be.length;G<Q;G++)se=Be[G],Se?N&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,Re,Ve,se):n.texImage2D(t.TEXTURE_2D,G,Oe,Re,Ve,se);b.generateMipmaps=!1}else if(Se){if(nt){const G=Ge(re);n.texStorage2D(t.TEXTURE_2D,te,Oe,G.width,G.height)}N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Re,Ve,re)}else n.texImage2D(t.TEXTURE_2D,0,Oe,Re,Ve,re);m(b)&&u(le),Le.__version=de.version,b.onUpdate&&b.onUpdate(b)}k.__version=b.version}function j(k,b,Z){if(b.image.length!==6)return;const le=ae(k,b),ce=b.source;n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+Z);const de=i.get(ce);if(ce.version!==de.__version||le===!0){n.activeTexture(t.TEXTURE0+Z);const Le=st.getPrimaries(st.workingColorSpace),ve=b.colorSpace===Fi?null:st.getPrimaries(b.colorSpace),Me=b.colorSpace===Fi||Le===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Ue=b.isCompressedTexture||b.image[0].isCompressedTexture,re=b.image[0]&&b.image[0].isDataTexture,Re=[];for(let Q=0;Q<6;Q++)!Ue&&!re?Re[Q]=_(b.image[Q],!0,r.maxCubemapSize):Re[Q]=re?b.image[Q].image:b.image[Q],Re[Q]=ye(b,Re[Q]);const Ve=Re[0],Oe=s.convert(b.format,b.colorSpace),se=s.convert(b.type),Be=g(b.internalFormat,Oe,se,b.colorSpace),Se=b.isVideoTexture!==!0,nt=de.__version===void 0||le===!0,N=ce.dataReady;let te=M(b,Ve);P(t.TEXTURE_CUBE_MAP,b);let G;if(Ue){Se&&nt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,te,Be,Ve.width,Ve.height);for(let Q=0;Q<6;Q++){G=Re[Q].mipmaps;for(let fe=0;fe<G.length;fe++){const Fe=G[fe];b.format!==ni?Oe!==null?Se?N&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe,0,0,Fe.width,Fe.height,Oe,Fe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe,Be,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Se?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe,0,0,Fe.width,Fe.height,Oe,se,Fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe,Be,Fe.width,Fe.height,0,Oe,se,Fe.data)}}}else{if(G=b.mipmaps,Se&&nt){G.length>0&&te++;const Q=Ge(Re[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,te,Be,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(re){Se?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Re[Q].width,Re[Q].height,Oe,se,Re[Q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Be,Re[Q].width,Re[Q].height,0,Oe,se,Re[Q].data);for(let fe=0;fe<G.length;fe++){const Ke=G[fe].image[Q].image;Se?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe+1,0,0,Ke.width,Ke.height,Oe,se,Ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe+1,Be,Ke.width,Ke.height,0,Oe,se,Ke.data)}}else{Se?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Oe,se,Re[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Be,Oe,se,Re[Q]);for(let fe=0;fe<G.length;fe++){const Fe=G[fe];Se?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe+1,0,0,Oe,se,Fe.image[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe+1,Be,Oe,se,Fe.image[Q])}}}m(b)&&u(t.TEXTURE_CUBE_MAP),de.__version=ce.version,b.onUpdate&&b.onUpdate(b)}k.__version=b.version}function ee(k,b,Z,le,ce,de){const Le=s.convert(Z.format,Z.colorSpace),ve=s.convert(Z.type),Me=g(Z.internalFormat,Le,ve,Z.colorSpace);if(!i.get(b).__hasExternalTextures){const re=Math.max(1,b.width>>de),Re=Math.max(1,b.height>>de);ce===t.TEXTURE_3D||ce===t.TEXTURE_2D_ARRAY?n.texImage3D(ce,de,Me,re,Re,b.depth,0,Le,ve,null):n.texImage2D(ce,de,Me,re,Re,0,Le,ve,null)}n.bindFramebuffer(t.FRAMEBUFFER,k),Ie(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,le,ce,i.get(Z).__webglTexture,0,we(b)):(ce===t.TEXTURE_2D||ce>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,le,ce,i.get(Z).__webglTexture,de),n.bindFramebuffer(t.FRAMEBUFFER,null)}function F(k,b,Z){if(t.bindRenderbuffer(t.RENDERBUFFER,k),b.depthBuffer){const le=b.depthTexture,ce=le&&le.isDepthTexture?le.type:null,de=y(b.stencilBuffer,ce),Le=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ve=we(b);Ie(b)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ve,de,b.width,b.height):Z?t.renderbufferStorageMultisample(t.RENDERBUFFER,ve,de,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,de,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Le,t.RENDERBUFFER,k)}else{const le=b.textures;for(let ce=0;ce<le.length;ce++){const de=le[ce],Le=s.convert(de.format,de.colorSpace),ve=s.convert(de.type),Me=g(de.internalFormat,Le,ve,de.colorSpace),Ue=we(b);Z&&Ie(b)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ue,Me,b.width,b.height):Ie(b)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ue,Me,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,Me,b.width,b.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function H(k,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,k),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),$(b.depthTexture,0);const le=i.get(b.depthTexture).__webglTexture,ce=we(b);if(b.depthTexture.format===Cs)Ie(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,le,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,le,0);else if(b.depthTexture.format===Vs)Ie(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,le,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function Y(k){const b=i.get(k),Z=k.isWebGLCubeRenderTarget===!0;if(k.depthTexture&&!b.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");H(b.__webglFramebuffer,k)}else if(Z){b.__webglDepthbuffer=[];for(let le=0;le<6;le++)n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[le]),b.__webglDepthbuffer[le]=t.createRenderbuffer(),F(b.__webglDepthbuffer[le],k,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=t.createRenderbuffer(),F(b.__webglDepthbuffer,k,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function he(k,b,Z){const le=i.get(k);b!==void 0&&ee(le.__webglFramebuffer,k,k.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),Z!==void 0&&Y(k)}function ge(k){const b=k.texture,Z=i.get(k),le=i.get(b);k.addEventListener("dispose",E);const ce=k.textures,de=k.isWebGLCubeRenderTarget===!0,Le=ce.length>1;if(Le||(le.__webglTexture===void 0&&(le.__webglTexture=t.createTexture()),le.__version=b.version,o.memory.textures++),de){Z.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(b.mipmaps&&b.mipmaps.length>0){Z.__webglFramebuffer[ve]=[];for(let Me=0;Me<b.mipmaps.length;Me++)Z.__webglFramebuffer[ve][Me]=t.createFramebuffer()}else Z.__webglFramebuffer[ve]=t.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Z.__webglFramebuffer=[];for(let ve=0;ve<b.mipmaps.length;ve++)Z.__webglFramebuffer[ve]=t.createFramebuffer()}else Z.__webglFramebuffer=t.createFramebuffer();if(Le)for(let ve=0,Me=ce.length;ve<Me;ve++){const Ue=i.get(ce[ve]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=t.createTexture(),o.memory.textures++)}if(k.samples>0&&Ie(k)===!1){Z.__webglMultisampledFramebuffer=t.createFramebuffer(),Z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let ve=0;ve<ce.length;ve++){const Me=ce[ve];Z.__webglColorRenderbuffer[ve]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,Z.__webglColorRenderbuffer[ve]);const Ue=s.convert(Me.format,Me.colorSpace),re=s.convert(Me.type),Re=g(Me.internalFormat,Ue,re,Me.colorSpace,k.isXRRenderTarget===!0),Ve=we(k);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ve,Re,k.width,k.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,Z.__webglColorRenderbuffer[ve])}t.bindRenderbuffer(t.RENDERBUFFER,null),k.depthBuffer&&(Z.__webglDepthRenderbuffer=t.createRenderbuffer(),F(Z.__webglDepthRenderbuffer,k,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(de){n.bindTexture(t.TEXTURE_CUBE_MAP,le.__webglTexture),P(t.TEXTURE_CUBE_MAP,b);for(let ve=0;ve<6;ve++)if(b.mipmaps&&b.mipmaps.length>0)for(let Me=0;Me<b.mipmaps.length;Me++)ee(Z.__webglFramebuffer[ve][Me],k,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Me);else ee(Z.__webglFramebuffer[ve],k,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);m(b)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Le){for(let ve=0,Me=ce.length;ve<Me;ve++){const Ue=ce[ve],re=i.get(Ue);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),P(t.TEXTURE_2D,Ue),ee(Z.__webglFramebuffer,k,Ue,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,0),m(Ue)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let ve=t.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(ve=k.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ve,le.__webglTexture),P(ve,b),b.mipmaps&&b.mipmaps.length>0)for(let Me=0;Me<b.mipmaps.length;Me++)ee(Z.__webglFramebuffer[Me],k,b,t.COLOR_ATTACHMENT0,ve,Me);else ee(Z.__webglFramebuffer,k,b,t.COLOR_ATTACHMENT0,ve,0);m(b)&&u(ve),n.unbindTexture()}k.depthBuffer&&Y(k)}function U(k){const b=k.textures;for(let Z=0,le=b.length;Z<le;Z++){const ce=b[Z];if(m(ce)){const de=k.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Le=i.get(ce).__webglTexture;n.bindTexture(de,Le),u(de),n.unbindTexture()}}}const Ce=[],Te=[];function _e(k){if(k.samples>0){if(Ie(k)===!1){const b=k.textures,Z=k.width,le=k.height;let ce=t.COLOR_BUFFER_BIT;const de=k.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Le=i.get(k),ve=b.length>1;if(ve)for(let Me=0;Me<b.length;Me++)n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Me=0;Me<b.length;Me++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(ce|=t.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(ce|=t.STENCIL_BUFFER_BIT)),ve){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Le.__webglColorRenderbuffer[Me]);const Ue=i.get(b[Me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ue,0)}t.blitFramebuffer(0,0,Z,le,0,0,Z,le,ce,t.NEAREST),l===!0&&(Ce.length=0,Te.length=0,Ce.push(t.COLOR_ATTACHMENT0+Me),k.depthBuffer&&k.resolveDepthBuffer===!1&&(Ce.push(de),Te.push(de),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Te)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ce))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ve)for(let Me=0;Me<b.length;Me++){n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,Le.__webglColorRenderbuffer[Me]);const Ue=i.get(b[Me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,Ue,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.resolveDepthBuffer===!1&&l){const b=k.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[b])}}}function we(k){return Math.min(r.maxSamples,k.samples)}function Ie(k){const b=i.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ee(k){const b=o.render.frame;h.get(k)!==b&&(h.set(k,b),k.update())}function ye(k,b){const Z=k.colorSpace,le=k.format,ce=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||Z!==lr&&Z!==Fi&&(st.getTransfer(Z)===ft?(le!==ni||ce!==nr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),b}function Ge(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(c.width=k.naturalWidth||k.width,c.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(c.width=k.displayWidth,c.height=k.displayHeight):(c.width=k.width,c.height=k.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=D,this.setTexture2D=$,this.setTexture2DArray=q,this.setTexture3D=X,this.setTextureCube=ne,this.rebindTextures=he,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=Y,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=Ie}function ZE(t,e){function n(i,r=Fi){let s;const o=st.getTransfer(r);if(i===nr)return t.UNSIGNED_BYTE;if(i===Ax)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Cx)return t.UNSIGNED_SHORT_5_5_5_1;if(i===I1)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===L1)return t.BYTE;if(i===D1)return t.SHORT;if(i===jl)return t.UNSIGNED_SHORT;if(i===Tx)return t.INT;if(i===Bs)return t.UNSIGNED_INT;if(i===Hi)return t.FLOAT;if(i===fc)return t.HALF_FLOAT;if(i===U1)return t.ALPHA;if(i===k1)return t.RGB;if(i===ni)return t.RGBA;if(i===O1)return t.LUMINANCE;if(i===F1)return t.LUMINANCE_ALPHA;if(i===Cs)return t.DEPTH_COMPONENT;if(i===Vs)return t.DEPTH_STENCIL;if(i===z1)return t.RED;if(i===Rx)return t.RED_INTEGER;if(i===B1)return t.RG;if(i===Px)return t.RG_INTEGER;if(i===Nx)return t.RGBA_INTEGER;if(i===Jc||i===Qc||i===eu||i===tu)if(o===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Jc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===eu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===tu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Jc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===eu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===tu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Sp||i===wp||i===Ep||i===bp)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Sp)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wp)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ep)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===bp)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Tp||i===Ap||i===Cp)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Tp||i===Ap)return o===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Cp)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Rp||i===Pp||i===Np||i===Lp||i===Dp||i===Ip||i===Up||i===kp||i===Op||i===Fp||i===zp||i===Bp||i===Hp||i===Vp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Rp)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Pp)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Np)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Lp)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Dp)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ip)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Up)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===kp)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Op)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Fp)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===zp)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bp)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Hp)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Vp)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===nu||i===jp||i===Gp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===nu)return o===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===jp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===H1||i===Wp||i===Xp||i===Yp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===nu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Wp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xp)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Hs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class JE extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Qe extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const QE={type:"move"};class Ru{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),u=this._getHandJoint(c,_);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(QE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Qe;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const eb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class nb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Qt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ir({vertexShader:eb,fragmentShader:tb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ie(new $s(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class ib extends qs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,v=null;const _=new nb,m=n.getContextAttributes();let u=null,g=null;const y=[],M=[],C=new Ae;let E=null;const T=new Nn;T.layers.enable(1),T.viewport=new Bt;const R=new Nn;R.layers.enable(2),R.viewport=new Bt;const w=[T,R],S=new JE;S.layers.enable(1),S.layers.enable(2);let D=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ee=y[j];return ee===void 0&&(ee=new Ru,y[j]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(j){let ee=y[j];return ee===void 0&&(ee=new Ru,y[j]=ee),ee.getGripSpace()},this.getHand=function(j){let ee=y[j];return ee===void 0&&(ee=new Ru,y[j]=ee),ee.getHandSpace()};function O(j){const ee=M.indexOf(j.inputSource);if(ee===-1)return;const F=y[ee];F!==void 0&&(F.update(j.inputSource,j.frame,c||o),F.dispatchEvent({type:j.type,data:j.inputSource}))}function $(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",q);for(let j=0;j<y.length;j++){const ee=M[j];ee!==null&&(M[j]=null,y[j].disconnect(ee))}D=null,L=null,_.reset(),e.setRenderTarget(u),p=null,f=null,d=null,r=null,g=null,me.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",$),r.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await n.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ee),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new Or(p.framebufferWidth,p.framebufferHeight,{format:ni,type:nr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,F=null,H=null;m.depth&&(H=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ee=m.stencil?Vs:Cs,F=m.stencil?Hs:Bs);const Y={colorFormat:n.RGBA8,depthFormat:H,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(Y),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),g=new Or(f.textureWidth,f.textureHeight,{format:ni,type:nr,depthTexture:new Xx(f.textureWidth,f.textureHeight,F,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),me.setContext(r),me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function q(j){for(let ee=0;ee<j.removed.length;ee++){const F=j.removed[ee],H=M.indexOf(F);H>=0&&(M[H]=null,y[H].disconnect(F))}for(let ee=0;ee<j.added.length;ee++){const F=j.added[ee];let H=M.indexOf(F);if(H===-1){for(let he=0;he<y.length;he++)if(he>=M.length){M.push(F),H=he;break}else if(M[he]===null){M[he]=F,H=he;break}if(H===-1)break}const Y=y[H];Y&&Y.connect(F)}}const X=new B,ne=new B;function z(j,ee,F){X.setFromMatrixPosition(ee.matrixWorld),ne.setFromMatrixPosition(F.matrixWorld);const H=X.distanceTo(ne),Y=ee.projectionMatrix.elements,he=F.projectionMatrix.elements,ge=Y[14]/(Y[10]-1),U=Y[14]/(Y[10]+1),Ce=(Y[9]+1)/Y[5],Te=(Y[9]-1)/Y[5],_e=(Y[8]-1)/Y[0],we=(he[8]+1)/he[0],Ie=ge*_e,Ee=ge*we,ye=H/(-_e+we),Ge=ye*-_e;ee.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ge),j.translateZ(ye),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const k=ge+ye,b=U+ye,Z=Ie-Ge,le=Ee+(H-Ge),ce=Ce*U/b*k,de=Te*U/b*k;j.projectionMatrix.makePerspective(Z,le,ce,de,k,b),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function oe(j,ee){ee===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ee.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;_.texture!==null&&(j.near=_.depthNear,j.far=_.depthFar),S.near=R.near=T.near=j.near,S.far=R.far=T.far=j.far,(D!==S.near||L!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,L=S.far,T.near=D,T.far=L,R.near=D,R.far=L,T.updateProjectionMatrix(),R.updateProjectionMatrix(),j.updateProjectionMatrix());const ee=j.parent,F=S.cameras;oe(S,ee);for(let H=0;H<F.length;H++)oe(F[H],ee);F.length===2?z(S,T,R):S.projectionMatrix.copy(T.projectionMatrix),I(j,S,ee)};function I(j,ee,F){F===null?j.matrix.copy(ee.matrixWorld):(j.matrix.copy(F.matrixWorld),j.matrix.invert(),j.matrix.multiply(ee.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ud*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let P=null;function ae(j,ee){if(h=ee.getViewerPose(c||o),v=ee,h!==null){const F=h.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let H=!1;F.length!==S.cameras.length&&(S.cameras.length=0,H=!0);for(let he=0;he<F.length;he++){const ge=F[he];let U=null;if(p!==null)U=p.getViewport(ge);else{const Te=d.getViewSubImage(f,ge);U=Te.viewport,he===0&&(e.setRenderTargetTextures(g,Te.colorTexture,f.ignoreDepthValues?void 0:Te.depthStencilTexture),e.setRenderTarget(g))}let Ce=w[he];Ce===void 0&&(Ce=new Nn,Ce.layers.enable(he),Ce.viewport=new Bt,w[he]=Ce),Ce.matrix.fromArray(ge.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(ge.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(U.x,U.y,U.width,U.height),he===0&&(S.matrix.copy(Ce.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),H===!0&&S.cameras.push(Ce)}const Y=r.enabledFeatures;if(Y&&Y.includes("depth-sensing")){const he=d.getDepthInformation(F[0]);he&&he.isValid&&he.texture&&_.init(e,he,r.renderState)}}for(let F=0;F<y.length;F++){const H=M[F],Y=y[F];H!==null&&Y!==void 0&&Y.update(H,ee,c||o)}P&&P(j,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),v=null}const me=new Gx;me.setAnimationLoop(ae),this.setAnimationLoop=function(j){P=j},this.dispose=function(){}}}const gr=new si,rb=new mt;function sb(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,Hx(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,g,y,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),d(m,u)):u.isMeshPhongMaterial?(s(m,u),h(m,u)):u.isMeshStandardMaterial?(s(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,M)):u.isMeshMatcapMaterial?(s(m,u),v(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),_(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,g,y):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===on&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===on&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const g=e.get(u),y=g.envMap,M=g.envMapRotation;y&&(m.envMap.value=y,gr.copy(M),gr.x*=-1,gr.y*=-1,gr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),m.envMapRotation.value.setFromMatrix4(rb.makeRotationFromEuler(gr)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,g,y){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*g,m.scale.value=y*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,g){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===on&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,u){u.matcap&&(m.matcap.value=u.matcap)}function _(m,u){const g=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ob(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,y){const M=y.program;i.uniformBlockBinding(g,M)}function c(g,y){let M=r[g.id];M===void 0&&(v(g),M=h(g),r[g.id]=M,g.addEventListener("dispose",m));const C=y.program;i.updateUBOMapping(g,C);const E=e.render.frame;s[g.id]!==E&&(f(g),s[g.id]=E)}function h(g){const y=d();g.__bindingPointIndex=y;const M=t.createBuffer(),C=g.__size,E=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,C,E),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,M),M}function d(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const y=r[g.id],M=g.uniforms,C=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let E=0,T=M.length;E<T;E++){const R=Array.isArray(M[E])?M[E]:[M[E]];for(let w=0,S=R.length;w<S;w++){const D=R[w];if(p(D,E,w,C)===!0){const L=D.__offset,O=Array.isArray(D.value)?D.value:[D.value];let $=0;for(let q=0;q<O.length;q++){const X=O[q],ne=_(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,L+$,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):(X.toArray(D.__data,$),$+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,L,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,y,M,C){const E=g.value,T=y+"_"+M;if(C[T]===void 0)return typeof E=="number"||typeof E=="boolean"?C[T]=E:C[T]=E.clone(),!0;{const R=C[T];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return C[T]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function v(g){const y=g.uniforms;let M=0;const C=16;for(let T=0,R=y.length;T<R;T++){const w=Array.isArray(y[T])?y[T]:[y[T]];for(let S=0,D=w.length;S<D;S++){const L=w[S],O=Array.isArray(L.value)?L.value:[L.value];for(let $=0,q=O.length;$<q;$++){const X=O[$],ne=_(X),z=M%C;z!==0&&C-z<ne.boundary&&(M+=C-z),L.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=M,M+=ne.storage}}}const E=M%C;return E>0&&(M+=C-E),g.__size=M,g.__cache={},this}function _(g){const y={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(y.boundary=4,y.storage=4):g.isVector2?(y.boundary=8,y.storage=8):g.isVector3||g.isColor?(y.boundary=16,y.storage=12):g.isVector4?(y.boundary=16,y.storage=16):g.isMatrix3?(y.boundary=48,y.storage=48):g.isMatrix4?(y.boundary=64,y.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),y}function m(g){const y=g.target;y.removeEventListener("dispose",m);const M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function u(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class ab{constructor(e={}){const{canvas:n=Q1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),v=new Int32Array(4);let _=null,m=null;const u=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Cn,this.toneMapping=Zi,this.toneMappingExposure=1;const y=this;let M=!1,C=0,E=0,T=null,R=-1,w=null;const S=new Bt,D=new Bt;let L=null;const O=new Xe(0);let $=0,q=n.width,X=n.height,ne=1,z=null,oe=null;const I=new Bt(0,0,q,X),P=new Bt(0,0,q,X);let ae=!1;const me=new zh;let j=!1,ee=!1;const F=new mt,H=new B,Y={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function ge(){return T===null?ne:1}let U=i;function Ce(A,V){return n.getContext(A,V)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${kh}`),n.addEventListener("webglcontextlost",te,!1),n.addEventListener("webglcontextrestored",G,!1),n.addEventListener("webglcontextcreationerror",Q,!1),U===null){const V="webgl2";if(U=Ce(V,A),U===null)throw Ce(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Te,_e,we,Ie,Ee,ye,Ge,k,b,Z,le,ce,de,Le,ve,Me,Ue,re,Re,Ve,Oe,se,Be,Se;function nt(){Te=new m2(U),Te.init(),se=new ZE(U,Te),_e=new c2(U,Te,e,se),we=new $E(U),Ie=new v2(U),Ee=new UE,ye=new KE(U,Te,we,Ee,_e,se,Ie),Ge=new d2(y),k=new p2(y),b=new bM(U),Be=new a2(U,b),Z=new g2(U,b,Ie,Be),le=new y2(U,Z,b,Ie),Re=new _2(U,_e,ye),Me=new u2(Ee),ce=new IE(y,Ge,k,Te,_e,Be,Me),de=new sb(y,Ee),Le=new OE,ve=new jE(Te),re=new o2(y,Ge,k,we,le,f,l),Ue=new qE(y,le,_e),Se=new ob(U,Ie,_e,we),Ve=new l2(U,Te,Ie),Oe=new x2(U,Te,Ie),Ie.programs=ce.programs,y.capabilities=_e,y.extensions=Te,y.properties=Ee,y.renderLists=Le,y.shadowMap=Ue,y.state=we,y.info=Ie}nt();const N=new ib(y,U);this.xr=N,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const A=Te.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Te.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(A){A!==void 0&&(ne=A,this.setSize(q,X,!1))},this.getSize=function(A){return A.set(q,X)},this.setSize=function(A,V,K=!0){if(N.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=A,X=V,n.width=Math.floor(A*ne),n.height=Math.floor(V*ne),K===!0&&(n.style.width=A+"px",n.style.height=V+"px"),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(q*ne,X*ne).floor()},this.setDrawingBufferSize=function(A,V,K){q=A,X=V,ne=K,n.width=Math.floor(A*K),n.height=Math.floor(V*K),this.setViewport(0,0,A,V)},this.getCurrentViewport=function(A){return A.copy(S)},this.getViewport=function(A){return A.copy(I)},this.setViewport=function(A,V,K,J){A.isVector4?I.set(A.x,A.y,A.z,A.w):I.set(A,V,K,J),we.viewport(S.copy(I).multiplyScalar(ne).round())},this.getScissor=function(A){return A.copy(P)},this.setScissor=function(A,V,K,J){A.isVector4?P.set(A.x,A.y,A.z,A.w):P.set(A,V,K,J),we.scissor(D.copy(P).multiplyScalar(ne).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(A){we.setScissorTest(ae=A)},this.setOpaqueSort=function(A){z=A},this.setTransparentSort=function(A){oe=A},this.getClearColor=function(A){return A.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor.apply(re,arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha.apply(re,arguments)},this.clear=function(A=!0,V=!0,K=!0){let J=0;if(A){let W=!1;if(T!==null){const xe=T.texture.format;W=xe===Nx||xe===Px||xe===Rx}if(W){const xe=T.texture.type,Pe=xe===nr||xe===Bs||xe===jl||xe===Hs||xe===Ax||xe===Cx,De=re.getClearColor(),ke=re.getClearAlpha(),je=De.r,We=De.g,He=De.b;Pe?(p[0]=je,p[1]=We,p[2]=He,p[3]=ke,U.clearBufferuiv(U.COLOR,0,p)):(v[0]=je,v[1]=We,v[2]=He,v[3]=ke,U.clearBufferiv(U.COLOR,0,v))}else J|=U.COLOR_BUFFER_BIT}V&&(J|=U.DEPTH_BUFFER_BIT),K&&(J|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",te,!1),n.removeEventListener("webglcontextrestored",G,!1),n.removeEventListener("webglcontextcreationerror",Q,!1),Le.dispose(),ve.dispose(),Ee.dispose(),Ge.dispose(),k.dispose(),le.dispose(),Be.dispose(),Se.dispose(),ce.dispose(),N.dispose(),N.removeEventListener("sessionstart",$n),N.removeEventListener("sessionend",Kn),cr.stop()};function te(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const A=Ie.autoReset,V=Ue.enabled,K=Ue.autoUpdate,J=Ue.needsUpdate,W=Ue.type;nt(),Ie.autoReset=A,Ue.enabled=V,Ue.autoUpdate=K,Ue.needsUpdate=J,Ue.type=W}function Q(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function fe(A){const V=A.target;V.removeEventListener("dispose",fe),Fe(V)}function Fe(A){Ke(A),Ee.remove(A)}function Ke(A){const V=Ee.get(A).programs;V!==void 0&&(V.forEach(function(K){ce.releaseProgram(K)}),A.isShaderMaterial&&ce.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,K,J,W,xe){V===null&&(V=Y);const Pe=W.isMesh&&W.matrixWorld.determinant()<0,De=fv(A,V,K,J,W);we.setMaterial(J,Pe);let ke=K.index,je=1;if(J.wireframe===!0){if(ke=Z.getWireframeAttribute(K),ke===void 0)return;je=2}const We=K.drawRange,He=K.attributes.position;let it=We.start*je,wt=(We.start+We.count)*je;xe!==null&&(it=Math.max(it,xe.start*je),wt=Math.min(wt,(xe.start+xe.count)*je)),ke!==null?(it=Math.max(it,0),wt=Math.min(wt,ke.count)):He!=null&&(it=Math.max(it,0),wt=Math.min(wt,He.count));const Et=wt-it;if(Et<0||Et===1/0)return;Be.setup(W,J,De,K,ke);let xn,rt=Ve;if(ke!==null&&(xn=b.get(ke),rt=Oe,rt.setIndex(xn)),W.isMesh)J.wireframe===!0?(we.setLineWidth(J.wireframeLinewidth*ge()),rt.setMode(U.LINES)):rt.setMode(U.TRIANGLES);else if(W.isLine){let ze=J.linewidth;ze===void 0&&(ze=1),we.setLineWidth(ze*ge()),W.isLineSegments?rt.setMode(U.LINES):W.isLineLoop?rt.setMode(U.LINE_LOOP):rt.setMode(U.LINE_STRIP)}else W.isPoints?rt.setMode(U.POINTS):W.isSprite&&rt.setMode(U.TRIANGLES);if(W.isBatchedMesh)W._multiDrawInstances!==null?rt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances):rt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)rt.renderInstances(it,Et,W.count);else if(K.isInstancedBufferGeometry){const ze=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,tn=Math.min(K.instanceCount,ze);rt.renderInstances(it,Et,tn)}else rt.render(it,Et)};function Tt(A,V,K){A.transparent===!0&&A.side===hn&&A.forceSinglePass===!1?(A.side=on,A.needsUpdate=!0,ha(A,V,K),A.side=tr,A.needsUpdate=!0,ha(A,V,K),A.side=hn):ha(A,V,K)}this.compile=function(A,V,K=null){K===null&&(K=A),m=ve.get(K),m.init(V),g.push(m),K.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),A!==K&&A.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights();const J=new Set;return A.traverse(function(W){const xe=W.material;if(xe)if(Array.isArray(xe))for(let Pe=0;Pe<xe.length;Pe++){const De=xe[Pe];Tt(De,K,W),J.add(De)}else Tt(xe,K,W),J.add(xe)}),g.pop(),m=null,J},this.compileAsync=function(A,V,K=null){const J=this.compile(A,V,K);return new Promise(W=>{function xe(){if(J.forEach(function(Pe){Ee.get(Pe).currentProgram.isReady()&&J.delete(Pe)}),J.size===0){W(A);return}setTimeout(xe,10)}Te.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Ut=null;function lt(A){Ut&&Ut(A)}function $n(){cr.stop()}function Kn(){cr.start()}const cr=new Gx;cr.setAnimationLoop(lt),typeof self<"u"&&cr.setContext(self),this.setAnimationLoop=function(A){Ut=A,N.setAnimationLoop(A),A===null?cr.stop():cr.start()},N.addEventListener("sessionstart",$n),N.addEventListener("sessionend",Kn),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),N.enabled===!0&&N.isPresenting===!0&&(N.cameraAutoUpdate===!0&&N.updateCamera(V),V=N.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,V,T),m=ve.get(A,g.length),m.init(V),g.push(m),F.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),me.setFromProjectionMatrix(F),ee=this.localClippingEnabled,j=Me.init(this.clippingPlanes,ee),_=Le.get(A,u.length),_.init(),u.push(_),N.enabled===!0&&N.isPresenting===!0){const xe=y.xr.getDepthSensingMesh();xe!==null&&_c(xe,V,-1/0,y.sortObjects)}_c(A,V,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(z,oe),he=N.enabled===!1||N.isPresenting===!1||N.hasDepthSensing()===!1,he&&re.addToRenderList(_,A),this.info.render.frame++,j===!0&&Me.beginShadows();const K=m.state.shadowsArray;Ue.render(K,A,V),j===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=_.opaque,W=_.transmissive;if(m.setupLights(),V.isArrayCamera){const xe=V.cameras;if(W.length>0)for(let Pe=0,De=xe.length;Pe<De;Pe++){const ke=xe[Pe];tf(J,W,A,ke)}he&&re.render(A);for(let Pe=0,De=xe.length;Pe<De;Pe++){const ke=xe[Pe];ef(_,A,ke,ke.viewport)}}else W.length>0&&tf(J,W,A,V),he&&re.render(A),ef(_,A,V);T!==null&&(ye.updateMultisampleRenderTarget(T),ye.updateRenderTargetMipmap(T)),A.isScene===!0&&A.onAfterRender(y,A,V),Be.resetDefaultState(),R=-1,w=null,g.pop(),g.length>0?(m=g[g.length-1],j===!0&&Me.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function _c(A,V,K,J){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||me.intersectsSprite(A)){J&&H.setFromMatrixPosition(A.matrixWorld).applyMatrix4(F);const Pe=le.update(A),De=A.material;De.visible&&_.push(A,Pe,De,K,H.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||me.intersectsObject(A))){const Pe=le.update(A),De=A.material;if(J&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),H.copy(A.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),H.copy(Pe.boundingSphere.center)),H.applyMatrix4(A.matrixWorld).applyMatrix4(F)),Array.isArray(De)){const ke=Pe.groups;for(let je=0,We=ke.length;je<We;je++){const He=ke[je],it=De[He.materialIndex];it&&it.visible&&_.push(A,Pe,it,K,H.z,He)}}else De.visible&&_.push(A,Pe,De,K,H.z,null)}}const xe=A.children;for(let Pe=0,De=xe.length;Pe<De;Pe++)_c(xe[Pe],V,K,J)}function ef(A,V,K,J){const W=A.opaque,xe=A.transmissive,Pe=A.transparent;m.setupLightsView(K),j===!0&&Me.setGlobalState(y.clippingPlanes,K),J&&we.viewport(S.copy(J)),W.length>0&&da(W,V,K),xe.length>0&&da(xe,V,K),Pe.length>0&&da(Pe,V,K),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function tf(A,V,K,J){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[J.id]===void 0&&(m.state.transmissionRenderTarget[J.id]=new Or(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float")?fc:nr,minFilter:Rr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const xe=m.state.transmissionRenderTarget[J.id],Pe=J.viewport||S;xe.setSize(Pe.z,Pe.w);const De=y.getRenderTarget();y.setRenderTarget(xe),y.getClearColor(O),$=y.getClearAlpha(),$<1&&y.setClearColor(16777215,.5),he?re.render(K):y.clear();const ke=y.toneMapping;y.toneMapping=Zi;const je=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),m.setupLightsView(J),j===!0&&Me.setGlobalState(y.clippingPlanes,J),da(A,K,J),ye.updateMultisampleRenderTarget(xe),ye.updateRenderTargetMipmap(xe),Te.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let He=0,it=V.length;He<it;He++){const wt=V[He],Et=wt.object,xn=wt.geometry,rt=wt.material,ze=wt.group;if(rt.side===hn&&Et.layers.test(J.layers)){const tn=rt.side;rt.side=on,rt.needsUpdate=!0,nf(Et,K,J,xn,rt,ze),rt.side=tn,rt.needsUpdate=!0,We=!0}}We===!0&&(ye.updateMultisampleRenderTarget(xe),ye.updateRenderTargetMipmap(xe))}y.setRenderTarget(De),y.setClearColor(O,$),je!==void 0&&(J.viewport=je),y.toneMapping=ke}function da(A,V,K){const J=V.isScene===!0?V.overrideMaterial:null;for(let W=0,xe=A.length;W<xe;W++){const Pe=A[W],De=Pe.object,ke=Pe.geometry,je=J===null?Pe.material:J,We=Pe.group;De.layers.test(K.layers)&&nf(De,V,K,ke,je,We)}}function nf(A,V,K,J,W,xe){A.onBeforeRender(y,V,K,J,W,xe),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(y,V,K,J,A,xe),W.transparent===!0&&W.side===hn&&W.forceSinglePass===!1?(W.side=on,W.needsUpdate=!0,y.renderBufferDirect(K,V,J,W,A,xe),W.side=tr,W.needsUpdate=!0,y.renderBufferDirect(K,V,J,W,A,xe),W.side=hn):y.renderBufferDirect(K,V,J,W,A,xe),A.onAfterRender(y,V,K,J,W,xe)}function ha(A,V,K){V.isScene!==!0&&(V=Y);const J=Ee.get(A),W=m.state.lights,xe=m.state.shadowsArray,Pe=W.state.version,De=ce.getParameters(A,W.state,xe,V,K),ke=ce.getProgramCacheKey(De);let je=J.programs;J.environment=A.isMeshStandardMaterial?V.environment:null,J.fog=V.fog,J.envMap=(A.isMeshStandardMaterial?k:Ge).get(A.envMap||J.environment),J.envMapRotation=J.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,je===void 0&&(A.addEventListener("dispose",fe),je=new Map,J.programs=je);let We=je.get(ke);if(We!==void 0){if(J.currentProgram===We&&J.lightsStateVersion===Pe)return sf(A,De),We}else De.uniforms=ce.getUniforms(A),A.onBuild(K,De,y),A.onBeforeCompile(De,y),We=ce.acquireProgram(De,ke),je.set(ke,We),J.uniforms=De.uniforms;const He=J.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(He.clippingPlanes=Me.uniform),sf(A,De),J.needsLights=mv(A),J.lightsStateVersion=Pe,J.needsLights&&(He.ambientLightColor.value=W.state.ambient,He.lightProbe.value=W.state.probe,He.directionalLights.value=W.state.directional,He.directionalLightShadows.value=W.state.directionalShadow,He.spotLights.value=W.state.spot,He.spotLightShadows.value=W.state.spotShadow,He.rectAreaLights.value=W.state.rectArea,He.ltc_1.value=W.state.rectAreaLTC1,He.ltc_2.value=W.state.rectAreaLTC2,He.pointLights.value=W.state.point,He.pointLightShadows.value=W.state.pointShadow,He.hemisphereLights.value=W.state.hemi,He.directionalShadowMap.value=W.state.directionalShadowMap,He.directionalShadowMatrix.value=W.state.directionalShadowMatrix,He.spotShadowMap.value=W.state.spotShadowMap,He.spotLightMatrix.value=W.state.spotLightMatrix,He.spotLightMap.value=W.state.spotLightMap,He.pointShadowMap.value=W.state.pointShadowMap,He.pointShadowMatrix.value=W.state.pointShadowMatrix),J.currentProgram=We,J.uniformsList=null,We}function rf(A){if(A.uniformsList===null){const V=A.currentProgram.getUniforms();A.uniformsList=xl.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function sf(A,V){const K=Ee.get(A);K.outputColorSpace=V.outputColorSpace,K.batching=V.batching,K.batchingColor=V.batchingColor,K.instancing=V.instancing,K.instancingColor=V.instancingColor,K.instancingMorph=V.instancingMorph,K.skinning=V.skinning,K.morphTargets=V.morphTargets,K.morphNormals=V.morphNormals,K.morphColors=V.morphColors,K.morphTargetsCount=V.morphTargetsCount,K.numClippingPlanes=V.numClippingPlanes,K.numIntersection=V.numClipIntersection,K.vertexAlphas=V.vertexAlphas,K.vertexTangents=V.vertexTangents,K.toneMapping=V.toneMapping}function fv(A,V,K,J,W){V.isScene!==!0&&(V=Y),ye.resetTextureUnits();const xe=V.fog,Pe=J.isMeshStandardMaterial?V.environment:null,De=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:lr,ke=(J.isMeshStandardMaterial?k:Ge).get(J.envMap||Pe),je=J.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,We=!!K.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),He=!!K.morphAttributes.position,it=!!K.morphAttributes.normal,wt=!!K.morphAttributes.color;let Et=Zi;J.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Et=y.toneMapping);const xn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,rt=xn!==void 0?xn.length:0,ze=Ee.get(J),tn=m.state.lights;if(j===!0&&(ee===!0||A!==w)){const Tn=A===w&&J.id===R;Me.setState(J,A,Tn)}let ct=!1;J.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==tn.state.version||ze.outputColorSpace!==De||W.isBatchedMesh&&ze.batching===!1||!W.isBatchedMesh&&ze.batching===!0||W.isBatchedMesh&&ze.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&ze.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&ze.instancing===!1||!W.isInstancedMesh&&ze.instancing===!0||W.isSkinnedMesh&&ze.skinning===!1||!W.isSkinnedMesh&&ze.skinning===!0||W.isInstancedMesh&&ze.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&ze.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&ze.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&ze.instancingMorph===!1&&W.morphTexture!==null||ze.envMap!==ke||J.fog===!0&&ze.fog!==xe||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Me.numPlanes||ze.numIntersection!==Me.numIntersection)||ze.vertexAlphas!==je||ze.vertexTangents!==We||ze.morphTargets!==He||ze.morphNormals!==it||ze.morphColors!==wt||ze.toneMapping!==Et||ze.morphTargetsCount!==rt)&&(ct=!0):(ct=!0,ze.__version=J.version);let ai=ze.currentProgram;ct===!0&&(ai=ha(J,V,W));let fa=!1,ur=!1,yc=!1;const kt=ai.getUniforms(),Ti=ze.uniforms;if(we.useProgram(ai.program)&&(fa=!0,ur=!0,yc=!0),J.id!==R&&(R=J.id,ur=!0),fa||w!==A){kt.setValue(U,"projectionMatrix",A.projectionMatrix),kt.setValue(U,"viewMatrix",A.matrixWorldInverse);const Tn=kt.map.cameraPosition;Tn!==void 0&&Tn.setValue(U,H.setFromMatrixPosition(A.matrixWorld)),_e.logarithmicDepthBuffer&&kt.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&kt.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),w!==A&&(w=A,ur=!0,yc=!0)}if(W.isSkinnedMesh){kt.setOptional(U,W,"bindMatrix"),kt.setOptional(U,W,"bindMatrixInverse");const Tn=W.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),kt.setValue(U,"boneTexture",Tn.boneTexture,ye))}W.isBatchedMesh&&(kt.setOptional(U,W,"batchingTexture"),kt.setValue(U,"batchingTexture",W._matricesTexture,ye),kt.setOptional(U,W,"batchingColorTexture"),W._colorsTexture!==null&&kt.setValue(U,"batchingColorTexture",W._colorsTexture,ye));const Mc=K.morphAttributes;if((Mc.position!==void 0||Mc.normal!==void 0||Mc.color!==void 0)&&Re.update(W,K,ai),(ur||ze.receiveShadow!==W.receiveShadow)&&(ze.receiveShadow=W.receiveShadow,kt.setValue(U,"receiveShadow",W.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Ti.envMap.value=ke,Ti.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&V.environment!==null&&(Ti.envMapIntensity.value=V.environmentIntensity),ur&&(kt.setValue(U,"toneMappingExposure",y.toneMappingExposure),ze.needsLights&&pv(Ti,yc),xe&&J.fog===!0&&de.refreshFogUniforms(Ti,xe),de.refreshMaterialUniforms(Ti,J,ne,X,m.state.transmissionRenderTarget[A.id]),xl.upload(U,rf(ze),Ti,ye)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(xl.upload(U,rf(ze),Ti,ye),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&kt.setValue(U,"center",W.center),kt.setValue(U,"modelViewMatrix",W.modelViewMatrix),kt.setValue(U,"normalMatrix",W.normalMatrix),kt.setValue(U,"modelMatrix",W.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Tn=J.uniformsGroups;for(let Sc=0,gv=Tn.length;Sc<gv;Sc++){const of=Tn[Sc];Se.update(of,ai),Se.bind(of,ai)}}return ai}function pv(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function mv(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(A,V,K){Ee.get(A.texture).__webglTexture=V,Ee.get(A.depthTexture).__webglTexture=K;const J=Ee.get(A);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=K===void 0,J.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,V){const K=Ee.get(A);K.__webglFramebuffer=V,K.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,K=0){T=A,C=V,E=K;let J=!0,W=null,xe=!1,Pe=!1;if(A){const ke=Ee.get(A);ke.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(U.FRAMEBUFFER,null),J=!1):ke.__webglFramebuffer===void 0?ye.setupRenderTarget(A):ke.__hasExternalTextures&&ye.rebindTextures(A,Ee.get(A.texture).__webglTexture,Ee.get(A.depthTexture).__webglTexture);const je=A.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Pe=!0);const We=Ee.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(We[V])?W=We[V][K]:W=We[V],xe=!0):A.samples>0&&ye.useMultisampledRTT(A)===!1?W=Ee.get(A).__webglMultisampledFramebuffer:Array.isArray(We)?W=We[K]:W=We,S.copy(A.viewport),D.copy(A.scissor),L=A.scissorTest}else S.copy(I).multiplyScalar(ne).floor(),D.copy(P).multiplyScalar(ne).floor(),L=ae;if(we.bindFramebuffer(U.FRAMEBUFFER,W)&&J&&we.drawBuffers(A,W),we.viewport(S),we.scissor(D),we.setScissorTest(L),xe){const ke=Ee.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+V,ke.__webglTexture,K)}else if(Pe){const ke=Ee.get(A.texture),je=V||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,ke.__webglTexture,K||0,je)}R=-1},this.readRenderTargetPixels=function(A,V,K,J,W,xe,Pe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Ee.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pe!==void 0&&(De=De[Pe]),De){we.bindFramebuffer(U.FRAMEBUFFER,De);try{const ke=A.texture,je=ke.format,We=ke.type;if(!_e.textureFormatReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_e.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-J&&K>=0&&K<=A.height-W&&U.readPixels(V,K,J,W,se.convert(je),se.convert(We),xe)}finally{const ke=T!==null?Ee.get(T).__webglFramebuffer:null;we.bindFramebuffer(U.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(A,V,K,J,W,xe,Pe){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=Ee.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pe!==void 0&&(De=De[Pe]),De){we.bindFramebuffer(U.FRAMEBUFFER,De);try{const ke=A.texture,je=ke.format,We=ke.type;if(!_e.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_e.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=A.width-J&&K>=0&&K<=A.height-W){const He=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,He),U.bufferData(U.PIXEL_PACK_BUFFER,xe.byteLength,U.STREAM_READ),U.readPixels(V,K,J,W,se.convert(je),se.convert(We),0),U.flush();const it=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);await eM(U,it,4);try{U.bindBuffer(U.PIXEL_PACK_BUFFER,He),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,xe)}finally{U.deleteBuffer(He),U.deleteSync(it)}return xe}}finally{const ke=T!==null?Ee.get(T).__webglFramebuffer:null;we.bindFramebuffer(U.FRAMEBUFFER,ke)}}},this.copyFramebufferToTexture=function(A,V=null,K=0){A.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,A=arguments[1]);const J=Math.pow(2,-K),W=Math.floor(A.image.width*J),xe=Math.floor(A.image.height*J),Pe=V!==null?V.x:0,De=V!==null?V.y:0;ye.setTexture2D(A,0),U.copyTexSubImage2D(U.TEXTURE_2D,K,0,0,Pe,De,W,xe),we.unbindTexture()},this.copyTextureToTexture=function(A,V,K=null,J=null,W=0){A.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,A=arguments[1],V=arguments[2],W=arguments[3]||0,K=null);let xe,Pe,De,ke,je,We;K!==null?(xe=K.max.x-K.min.x,Pe=K.max.y-K.min.y,De=K.min.x,ke=K.min.y):(xe=A.image.width,Pe=A.image.height,De=0,ke=0),J!==null?(je=J.x,We=J.y):(je=0,We=0);const He=se.convert(V.format),it=se.convert(V.type);ye.setTexture2D(V,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment);const wt=U.getParameter(U.UNPACK_ROW_LENGTH),Et=U.getParameter(U.UNPACK_IMAGE_HEIGHT),xn=U.getParameter(U.UNPACK_SKIP_PIXELS),rt=U.getParameter(U.UNPACK_SKIP_ROWS),ze=U.getParameter(U.UNPACK_SKIP_IMAGES),tn=A.isCompressedTexture?A.mipmaps[W]:A.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,tn.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,tn.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,De),U.pixelStorei(U.UNPACK_SKIP_ROWS,ke),A.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,W,je,We,xe,Pe,He,it,tn.data):A.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,W,je,We,tn.width,tn.height,He,tn.data):U.texSubImage2D(U.TEXTURE_2D,W,je,We,He,it,tn),U.pixelStorei(U.UNPACK_ROW_LENGTH,wt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Et),U.pixelStorei(U.UNPACK_SKIP_PIXELS,xn),U.pixelStorei(U.UNPACK_SKIP_ROWS,rt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ze),W===0&&V.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(A,V,K=null,J=null,W=0){A.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,J=arguments[1]||null,A=arguments[2],V=arguments[3],W=arguments[4]||0);let xe,Pe,De,ke,je,We,He,it,wt;const Et=A.isCompressedTexture?A.mipmaps[W]:A.image;K!==null?(xe=K.max.x-K.min.x,Pe=K.max.y-K.min.y,De=K.max.z-K.min.z,ke=K.min.x,je=K.min.y,We=K.min.z):(xe=Et.width,Pe=Et.height,De=Et.depth,ke=0,je=0,We=0),J!==null?(He=J.x,it=J.y,wt=J.z):(He=0,it=0,wt=0);const xn=se.convert(V.format),rt=se.convert(V.type);let ze;if(V.isData3DTexture)ye.setTexture3D(V,0),ze=U.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)ye.setTexture2DArray(V,0),ze=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment);const tn=U.getParameter(U.UNPACK_ROW_LENGTH),ct=U.getParameter(U.UNPACK_IMAGE_HEIGHT),ai=U.getParameter(U.UNPACK_SKIP_PIXELS),fa=U.getParameter(U.UNPACK_SKIP_ROWS),ur=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Et.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Et.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ke),U.pixelStorei(U.UNPACK_SKIP_ROWS,je),U.pixelStorei(U.UNPACK_SKIP_IMAGES,We),A.isDataTexture||A.isData3DTexture?U.texSubImage3D(ze,W,He,it,wt,xe,Pe,De,xn,rt,Et.data):V.isCompressedArrayTexture?U.compressedTexSubImage3D(ze,W,He,it,wt,xe,Pe,De,xn,Et.data):U.texSubImage3D(ze,W,He,it,wt,xe,Pe,De,xn,rt,Et),U.pixelStorei(U.UNPACK_ROW_LENGTH,tn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ct),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ai),U.pixelStorei(U.UNPACK_SKIP_ROWS,fa),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ur),W===0&&V.generateMipmaps&&U.generateMipmap(ze),we.unbindTexture()},this.initRenderTarget=function(A){Ee.get(A).__webglFramebuffer===void 0&&ye.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ye.setTextureCube(A,0):A.isData3DTexture?ye.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ye.setTexture2DArray(A,0):ye.setTexture2D(A,0),we.unbindTexture()},this.resetState=function(){C=0,E=0,T=null,we.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Oh?"display-p3":"srgb",n.unpackColorSpace=st.workingColorSpace===pc?"display-p3":"srgb"}}class Hh{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Xe(e),this.density=n}clone(){return new Hh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class lb extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new si,this.environmentIntensity=1,this.environmentRotation=new si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Jx extends Vr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ql=new B,$l=new B,Fm=new mt,fo=new mc,Qa=new ca,Pu=new B,zm=new B;class cb extends Lt{constructor(e=new Yt,n=new Jx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)ql.fromBufferAttribute(n,r-1),$l.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=ql.distanceTo($l);e.setAttribute("lineDistance",new at(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qa.copy(i.boundingSphere),Qa.applyMatrix4(r),Qa.radius+=s,e.ray.intersectsSphere(Qa)===!1)return;Fm.copy(r).invert(),fo.copy(e.ray).applyMatrix4(Fm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const p=Math.max(0,o.start),v=Math.min(h.count,o.start+o.count);for(let _=p,m=v-1;_<m;_+=c){const u=h.getX(_),g=h.getX(_+1),y=el(this,e,fo,l,u,g);y&&n.push(y)}if(this.isLineLoop){const _=h.getX(v-1),m=h.getX(p),u=el(this,e,fo,l,_,m);u&&n.push(u)}}else{const p=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let _=p,m=v-1;_<m;_+=c){const u=el(this,e,fo,l,_,_+1);u&&n.push(u)}if(this.isLineLoop){const _=el(this,e,fo,l,v-1,p);_&&n.push(_)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function el(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(ql.fromBufferAttribute(o,r),$l.fromBufferAttribute(o,s),n.distanceSqToSegment(ql,$l,Pu,zm)>i)return;Pu.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Pu);if(!(l<e.near||l>e.far))return{distance:l,point:zm.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,object:t}}const Bm=new B,Hm=new B;class ub extends cb{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Bm.fromBufferAttribute(n,r),Hm.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Bm.distanceTo(Hm);e.setAttribute("lineDistance",new at(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Qx extends Vr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Vm=new mt,Od=new mc,tl=new ca,nl=new B;class db extends Lt{constructor(e=new Yt,n=new Qx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),tl.copy(i.boundingSphere),tl.applyMatrix4(r),tl.radius+=s,e.ray.intersectsSphere(tl)===!1)return;Vm.copy(r).invert(),Od.copy(e.ray).applyMatrix4(Vm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let v=f,_=p;v<_;v++){const m=c.getX(v);nl.fromBufferAttribute(d,m),jm(nl,m,l,r,e,n,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let v=f,_=p;v<_;v++)nl.fromBufferAttribute(d,v),jm(nl,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function jm(t,e,n,i,r,s,o){const a=Od.distanceSqToPoint(t);if(a<n){const l=new B;Od.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class oi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const h=i[r],f=i[r+1]-h,p=(o-h)/f;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new Ae:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new B,r=[],s=[],o=[],a=new B,l=new mt;for(let p=0;p<=e;p++){const v=p/e;r[p]=this.getTangentAt(v,new B)}s[0]=new B,o[0]=new B;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(Gt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,v))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Gt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],p*v)),o[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Vh extends oi{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new Ae){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*d+this.aX,c=f*d+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class hb extends Vh{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function jh(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,d){let f=(o-s)/c-(a-s)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,p*=h,r(o,a,f,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const il=new B,Nu=new jh,Lu=new jh,Du=new jh;class fb extends oi{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new B){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(il.subVectors(r[0],r[1]).add(r[0]),c=il);const d=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(il.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=il),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);_<1e-4&&(_=1),v<1e-4&&(v=_),m<1e-4&&(m=_),Nu.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,v,_,m),Lu.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,v,_,m),Du.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,v,_,m)}else this.curveType==="catmullrom"&&(Nu.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),Lu.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),Du.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return i.set(Nu.calc(l),Lu.calc(l),Du.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new B().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Gm(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function pb(t,e){const n=1-t;return n*n*e}function mb(t,e){return 2*(1-t)*t*e}function gb(t,e){return t*t*e}function No(t,e,n,i){return pb(t,e)+mb(t,n)+gb(t,i)}function xb(t,e){const n=1-t;return n*n*n*e}function vb(t,e){const n=1-t;return 3*n*n*t*e}function _b(t,e){return 3*(1-t)*t*t*e}function yb(t,e){return t*t*t*e}function Lo(t,e,n,i,r){return xb(t,e)+vb(t,n)+_b(t,i)+yb(t,r)}class ev extends oi{constructor(e=new Ae,n=new Ae,i=new Ae,r=new Ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new Ae){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Lo(e,r.x,s.x,o.x,a.x),Lo(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Mb extends oi{constructor(e=new B,n=new B,i=new B,r=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new B){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Lo(e,r.x,s.x,o.x,a.x),Lo(e,r.y,s.y,o.y,a.y),Lo(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class tv extends oi{constructor(e=new Ae,n=new Ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Ae){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Ae){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sb extends oi{constructor(e=new B,n=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new B){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new B){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nv extends oi{constructor(e=new Ae,n=new Ae,i=new Ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Ae){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(No(e,r.x,s.x,o.x),No(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wb extends oi{constructor(e=new B,n=new B,i=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new B){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(No(e,r.x,s.x,o.x),No(e,r.y,s.y,o.y),No(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class iv extends oi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Ae){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(Gm(a,l.x,c.x,h.x,d.x),Gm(a,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new Ae().fromArray(r))}return this}}var Wm=Object.freeze({__proto__:null,ArcCurve:hb,CatmullRomCurve3:fb,CubicBezierCurve:ev,CubicBezierCurve3:Mb,EllipseCurve:Vh,LineCurve:tv,LineCurve3:Sb,QuadraticBezierCurve:nv,QuadraticBezierCurve3:wb,SplineCurve:iv});class Eb extends oi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wm[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(n.push(h),i=h)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new Wm[r.type]().fromJSON(r))}return this}}class bb extends Eb{constructor(e){super(),this.type="Path",this.currentPoint=new Ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new tv(this.currentPoint.clone(),new Ae(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new nv(this.currentPoint.clone(),new Ae(e,n),new Ae(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new ev(this.currentPoint.clone(),new Ae(e,n),new Ae(i,r),new Ae(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new iv(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,n+h,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const c=new Vh(e,n,i,r,s,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Gh extends Yt{constructor(e=[new Ae(0,-.5),new Ae(.5,0),new Ae(0,.5)],n=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:n,phiStart:i,phiLength:r},n=Math.floor(n),r=Gt(r,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],h=1/n,d=new B,f=new Ae,p=new B,v=new B,_=new B;let m=0,u=0;for(let g=0;g<=e.length-1;g++)switch(g){case 0:m=e[g+1].x-e[g].x,u=e[g+1].y-e[g].y,p.x=u*1,p.y=-m,p.z=u*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[g+1].x-e[g].x,u=e[g+1].y-e[g].y,p.x=u*1,p.y=-m,p.z=u*0,v.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(v)}for(let g=0;g<=n;g++){const y=i+g*h*r,M=Math.sin(y),C=Math.cos(y);for(let E=0;E<=e.length-1;E++){d.x=e[E].x*M,d.y=e[E].y,d.z=e[E].x*C,o.push(d.x,d.y,d.z),f.x=g/n,f.y=E/(e.length-1),a.push(f.x,f.y);const T=l[3*E+0]*M,R=l[3*E+1],w=l[3*E+0]*C;c.push(T,R,w)}}for(let g=0;g<n;g++)for(let y=0;y<e.length-1;y++){const M=y+g*e.length,C=M,E=M+e.length,T=M+e.length+1,R=M+1;s.push(C,E,R),s.push(T,R,E)}this.setIndex(s),this.setAttribute("position",new at(o,3)),this.setAttribute("uv",new at(a,2)),this.setAttribute("normal",new at(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gh(e.points,e.segments,e.phiStart,e.phiLength)}}class Wh extends Gh{constructor(e=1,n=1,i=4,r=8){const s=new bb;s.absarc(0,-n/2,e,Math.PI*1.5,0),s.absarc(0,n/2,e,0,Math.PI*.5),super(s.getPoints(i),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:n,capSegments:i,radialSegments:r}}static fromJSON(e){return new Wh(e.radius,e.length,e.capSegments,e.radialSegments)}}class Xh extends Yt{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new B,h=new Ae;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=n;d++,f+=3){const p=i+d/n*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=n;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new at(o,3)),this.setAttribute("normal",new at(a,3)),this.setAttribute("uv",new at(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ut extends Yt{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],d=[],f=[],p=[];let v=0;const _=[],m=i/2;let u=0;g(),o===!1&&(e>0&&y(!0),n>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new at(d,3)),this.setAttribute("normal",new at(f,3)),this.setAttribute("uv",new at(p,2));function g(){const M=new B,C=new B;let E=0;const T=(n-e)/i;for(let R=0;R<=s;R++){const w=[],S=R/s,D=S*(n-e)+e;for(let L=0;L<=r;L++){const O=L/r,$=O*l+a,q=Math.sin($),X=Math.cos($);C.x=D*q,C.y=-S*i+m,C.z=D*X,d.push(C.x,C.y,C.z),M.set(q,T,X).normalize(),f.push(M.x,M.y,M.z),p.push(O,1-S),w.push(v++)}_.push(w)}for(let R=0;R<r;R++)for(let w=0;w<s;w++){const S=_[w][R],D=_[w+1][R],L=_[w+1][R+1],O=_[w][R+1];h.push(S,D,O),h.push(D,L,O),E+=6}c.addGroup(u,E,0),u+=E}function y(M){const C=v,E=new Ae,T=new B;let R=0;const w=M===!0?e:n,S=M===!0?1:-1;for(let L=1;L<=r;L++)d.push(0,m*S,0),f.push(0,S,0),p.push(.5,.5),v++;const D=v;for(let L=0;L<=r;L++){const $=L/r*l+a,q=Math.cos($),X=Math.sin($);T.x=w*X,T.y=m*S,T.z=w*q,d.push(T.x,T.y,T.z),f.push(0,S,0),E.x=q*.5+.5,E.y=X*.5*S+.5,p.push(E.x,E.y),v++}for(let L=0;L<r;L++){const O=C+L,$=D+L;M===!0?h.push($,$+1,O):h.push($+1,$,O),R+=3}c.addGroup(u,R,M===!0?1:2),u+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ut(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ft extends ut{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Ft(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xc extends Yt{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),h(),this.setAttribute("position",new at(s,3)),this.setAttribute("normal",new at(s.slice(),3)),this.setAttribute("uv",new at(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(g){const y=new B,M=new B,C=new B;for(let E=0;E<n.length;E+=3)p(n[E+0],y),p(n[E+1],M),p(n[E+2],C),l(y,M,C,g)}function l(g,y,M,C){const E=C+1,T=[];for(let R=0;R<=E;R++){T[R]=[];const w=g.clone().lerp(M,R/E),S=y.clone().lerp(M,R/E),D=E-R;for(let L=0;L<=D;L++)L===0&&R===E?T[R][L]=w:T[R][L]=w.clone().lerp(S,L/D)}for(let R=0;R<E;R++)for(let w=0;w<2*(E-R)-1;w++){const S=Math.floor(w/2);w%2===0?(f(T[R][S+1]),f(T[R+1][S]),f(T[R][S])):(f(T[R][S+1]),f(T[R+1][S+1]),f(T[R+1][S]))}}function c(g){const y=new B;for(let M=0;M<s.length;M+=3)y.x=s[M+0],y.y=s[M+1],y.z=s[M+2],y.normalize().multiplyScalar(g),s[M+0]=y.x,s[M+1]=y.y,s[M+2]=y.z}function h(){const g=new B;for(let y=0;y<s.length;y+=3){g.x=s[y+0],g.y=s[y+1],g.z=s[y+2];const M=m(g)/2/Math.PI+.5,C=u(g)/Math.PI+.5;o.push(M,1-C)}v(),d()}function d(){for(let g=0;g<o.length;g+=6){const y=o[g+0],M=o[g+2],C=o[g+4],E=Math.max(y,M,C),T=Math.min(y,M,C);E>.9&&T<.1&&(y<.2&&(o[g+0]+=1),M<.2&&(o[g+2]+=1),C<.2&&(o[g+4]+=1))}}function f(g){s.push(g.x,g.y,g.z)}function p(g,y){const M=g*3;y.x=e[M+0],y.y=e[M+1],y.z=e[M+2]}function v(){const g=new B,y=new B,M=new B,C=new B,E=new Ae,T=new Ae,R=new Ae;for(let w=0,S=0;w<s.length;w+=9,S+=6){g.set(s[w+0],s[w+1],s[w+2]),y.set(s[w+3],s[w+4],s[w+5]),M.set(s[w+6],s[w+7],s[w+8]),E.set(o[S+0],o[S+1]),T.set(o[S+2],o[S+3]),R.set(o[S+4],o[S+5]),C.copy(g).add(y).add(M).divideScalar(3);const D=m(C);_(E,S+0,g,D),_(T,S+2,y,D),_(R,S+4,M,D)}}function _(g,y,M,C){C<0&&g.x===1&&(o[y]=g.x-1),M.x===0&&M.z===0&&(o[y]=C/2/Math.PI+.5)}function m(g){return Math.atan2(g.z,-g.x)}function u(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xc(e.vertices,e.indices,e.radius,e.details)}}class Yh extends xc{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Yh(e.radius,e.detail)}}class Qo extends xc{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Qo(e.radius,e.detail)}}class et extends Yt{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new B,f=new B,p=[],v=[],_=[],m=[];for(let u=0;u<=i;u++){const g=[],y=u/i;let M=0;u===0&&o===0?M=.5/n:u===i&&l===Math.PI&&(M=-.5/n);for(let C=0;C<=n;C++){const E=C/n;d.x=-e*Math.cos(r+E*s)*Math.sin(o+y*a),d.y=e*Math.cos(o+y*a),d.z=e*Math.sin(r+E*s)*Math.sin(o+y*a),v.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),m.push(E+M,1-y),g.push(c++)}h.push(g)}for(let u=0;u<i;u++)for(let g=0;g<n;g++){const y=h[u][g+1],M=h[u][g],C=h[u+1][g],E=h[u+1][g+1];(u!==0||o>0)&&p.push(y,M,E),(u!==i-1||l<Math.PI)&&p.push(M,C,E)}this.setIndex(p),this.setAttribute("position",new at(v,3)),this.setAttribute("normal",new at(_,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new et(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ji extends Yt{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],h=new B,d=new B,f=new B;for(let p=0;p<=i;p++)for(let v=0;v<=r;v++){const _=v/r*s,m=p/i*Math.PI*2;d.x=(e+n*Math.cos(m))*Math.cos(_),d.y=(e+n*Math.cos(m))*Math.sin(_),d.z=n*Math.sin(m),a.push(d.x,d.y,d.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),c.push(v/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let v=1;v<=r;v++){const _=(r+1)*p+v-1,m=(r+1)*(p-1)+v-1,u=(r+1)*(p-1)+v,g=(r+1)*p+v;o.push(_,m,g),o.push(m,u,g)}this.setIndex(o),this.setAttribute("position",new at(a,3)),this.setAttribute("normal",new at(l,3)),this.setAttribute("uv",new at(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ji(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ye extends Vr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lx,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Xm={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class Tb{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){const p=c[d],v=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return v}return null}}}const Ab=new Tb;class qh{constructor(e){this.manager=e!==void 0?e:Ab,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}qh.DEFAULT_MATERIAL_NAME="__DEFAULT";class Cb extends qh{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Xm.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=Jo("img");function l(){h(),Xm.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(d){h(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class rv extends qh{constructor(e){super(e)}load(e,n,i,r){const s=new Qt,o=new Cb(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class $h extends Lt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class Rb extends $h{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Iu=new mt,Ym=new B,qm=new B;class Pb{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zh,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Ym.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ym),qm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(qm),n.updateMatrixWorld(),Iu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Iu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Iu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Nb extends Pb{constructor(){super(new Wx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $m extends $h{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new Nb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Lb extends $h{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Db{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Km(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Km();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Km(){return(typeof performance>"u"?Date:performance).now()}const Zm=new mt;class rl{constructor(e,n,i=0,r=1/0){this.ray=new mc(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Fh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Zm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zm),this}intersectObject(e,n=!0,i=[]){return Fd(e,this,i,n),i.sort(Jm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Fd(e[r],this,i,n);return i.sort(Jm),i}}function Jm(t,e){return t.distance-e.distance}function Fd(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)Fd(s[o],e,n,!0)}}class Ib extends ub{constructor(e=10,n=10,i=4473924,r=8947848){i=new Xe(i),r=new Xe(r);const s=n/2,o=e/n,a=e/2,l=[],c=[];for(let f=0,p=0,v=-a;f<=n;f++,v+=o){l.push(-a,0,v,a,0,v),l.push(v,0,-a,v,0,a);const _=f===s?i:r;_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3}const h=new Yt;h.setAttribute("position",new at(l,3)),h.setAttribute("color",new at(c,3));const d=new Jx({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kh);let po=null;function Zs(){if(!po){const t=window.AudioContext||window.webkitAudioContext;po=new t}return po.state==="suspended"&&po.resume(),po}function yt(){try{const t=Zs(),e=t.createOscillator(),n=t.createGain();e.type="sine";const i=t.currentTime;e.frequency.setValueAtTime(150,i),e.frequency.exponentialRampToValueAtTime(600,i+.15),e.frequency.exponentialRampToValueAtTime(300,i+.3),n.gain.setValueAtTime(.3,i),n.gain.exponentialRampToValueAtTime(.01,i+.35),e.connect(n),n.connect(t.destination),e.start(i),e.stop(i+.35)}catch{}}function Ht(){try{const t=Zs(),e=t.createOscillator(),n=t.createGain();e.type="sine";const i=t.currentTime;e.frequency.setValueAtTime(400,i),e.frequency.exponentialRampToValueAtTime(1200,i+.08),n.gain.setValueAtTime(.4,i),n.gain.exponentialRampToValueAtTime(.01,i+.1),e.connect(n),n.connect(t.destination),e.start(i),e.stop(i+.1)}catch{}}function Qm(){try{const t=Zs(),e=t.currentTime;[600,750,900,750,900].forEach((n,i)=>{const r=t.createOscillator(),s=t.createGain();r.type="sine";const o=e+i*.06;r.frequency.setValueAtTime(n,o),s.gain.setValueAtTime(.2,o),s.gain.exponentialRampToValueAtTime(.01,o+.05),r.connect(s),s.connect(t.destination),r.start(o),r.stop(o+.05)})}catch{}}function Mo(){try{const t=Zs(),e=t.createOscillator(),n=t.createGain();e.type="triangle";const i=t.currentTime;e.frequency.setValueAtTime(120,i),e.frequency.exponentialRampToValueAtTime(60,i+.06),n.gain.setValueAtTime(.2,i),n.gain.exponentialRampToValueAtTime(.01,i+.07),e.connect(n),n.connect(t.destination),e.start(i),e.stop(i+.07)}catch{}}function Fr(){try{const t=Zs();[261.63,329.63,392,523.25].forEach((n,i)=>{const r=t.createOscillator(),s=t.createGain();r.type="triangle";const o=t.currentTime+i*.1;r.frequency.setValueAtTime(n,o),s.gain.setValueAtTime(.25,o),s.gain.exponentialRampToValueAtTime(.01,o+.3),r.connect(s),s.connect(t.destination),r.start(o),r.stop(o+.3)})}catch{}}let mo=null,Uu=0;function Ub(t){if(!t){mo&&(clearInterval(mo),mo=null);return}if(mo)return;const e=[220,261,330,293,220,349,330,261];mo=window.setInterval(()=>{try{const n=Zs(),i=n.currentTime,r=e[Uu%e.length],s=n.createOscillator(),o=n.createGain();s.type=Uu%2===0?"sine":"triangle",s.frequency.setValueAtTime(r,i),o.gain.setValueAtTime(.08,i),o.gain.exponentialRampToValueAtTime(.001,i+.18),s.connect(o),o.connect(n.destination),s.start(i),s.stop(i+.2),Uu++}catch{}},250)}const e0=6;function Do(t){t.traverse(e=>{const n=e;n.geometry&&n.geometry.dispose();const i=n.material;i&&(Array.isArray(i)?i:[i]).forEach(s=>{Object.values(s).forEach(o=>{o instanceof Qt&&o.dispose()}),s.dispose()})})}const t0=({character:t,environment:e,currentPose:n,ghostPose:i,selectedBone:r,onSelectBone:s,isPlaying:o,creatures:a=[],toys:l=[],onGroundClick:c,onCreatureClick:h})=>{const d=ue.useRef(null),f=ue.useRef(null),p=ue.useRef(null),v=ue.useRef(null),_=ue.useRef(null),m=ue.useRef(null),u=ue.useRef(null),g=ue.useRef(null),y=ue.useRef(null),M=ue.useRef(new Map),C=ue.useRef(new Map),E=ue.useRef(null),T=ue.useRef(new Map);ue.useRef(new rl),ue.useRef(new Ae);const R=ue.useRef(new Map),w=ue.useRef(new Map),S=ue.useRef(!1),D=ue.useRef({x:0,y:0}),L=ue.useRef({phi:Math.PI/6,theta:Math.PI/4,radius:8}),O=ue.useRef(0),[$,q]=ue.useState(null),X=F=>F*Math.PI/180;ue.useEffect(()=>{if(!d.current)return;const F=d.current.clientWidth||800,H=d.current.clientHeight||600,Y=new lb;f.current=Y,Y.background=new Xe("#38bdf8"),Y.fog=new Hh("#38bdf8",.03);const he=new Nn(45,F/H,.1,100);p.current=he,ne();const ge=new ab({antialias:!0,preserveDrawingBuffer:!0});ge.setSize(F,H),ge.setPixelRatio(Math.min(window.devicePixelRatio,2)),ge.shadowMap.enabled=!0,ge.shadowMap.type=wx,v.current=ge,d.current.appendChild(ge.domElement);const U=new Lb(16777215,.7);Y.add(U);const Ce=new Rb(14742270,1976635,.8);Y.add(Ce);const Te=new $m(16776171,1.4);Te.position.set(6,12,6),Te.castShadow=!0,Te.shadow.mapSize.width=2048,Te.shadow.mapSize.height=2048,Te.shadow.bias=-3e-4,Y.add(Te);const _e=new $m(8490232,.9);_e.position.set(-6,8,-6),Y.add(_e);const we=new Qe,Ie=new ie(new ut(1.8,2,.12,32),new Ye({color:1976635,roughness:.2,metalness:.5}));Ie.position.y=-.06,Ie.receiveShadow=!0;const Ee=new ie(new ut(1.68,1.68,.13,32),new Ye({color:3718648,roughness:.3,emissive:165063,emissiveIntensity:.2}));Ee.position.y=-.05,Ee.receiveShadow=!0,we.add(Ie,Ee),Y.add(we);const ye=new Qe;Y.add(ye),_.current=ye;const Ge=new Qe;Ge.visible=!1,Y.add(Ge),m.current=Ge;const k=new Qe;Y.add(k),u.current=k;const b=new Qe;Y.add(b),y.current=b;const Z=new Qe;Y.add(Z),E.current=Z,n0(Y,k,e);const le=jb();Y.add(le),g.current=le;let ce,de=new Db;const Le=()=>{ce=requestAnimationFrame(Le);const Ue=de.getElapsedTime();if(g.current&&g.current.visible){g.current.rotation.y+=.001;const re=g.current.geometry.attributes.position.array;for(let Re=1;Re<re.length;Re+=3)re[Re]+=Math.sin(Date.now()*.001+Re)*.002;g.current.geometry.attributes.position.needsUpdate=!0}M.current.forEach((re,Re)=>{const Ve=re.userData;if(!Ve)return;const Oe=Ve.behavior,se=re.articulatedBones,Be=(Ve.templateId||"blank").toLowerCase();if(Oe==="bounce")re.position.y=Math.abs(Math.sin(Ue*4))*.8,re.rotation.z=Math.sin(Ue*4)*.15;else if(Oe==="dance")re.position.y=Math.abs(Math.sin(Ue*6))*.3,re.rotation.z=Math.sin(Ue*6)*.25,re.rotation.y+=.02;else if(Oe==="crazy")re.position.y=Math.abs(Math.sin(Ue*8))*1.5,re.rotation.y+=.1,re.rotation.z=Math.sin(Ue*8)*.4;else if(Oe==="sleep")re.position.y=Math.sin(Ue*1.5)*.05,re.rotation.z=.3;else if(Ve.targetPosition){const[Se,nt]=Ve.targetPosition,N=Se-re.position.x,te=nt-re.position.z,G=Math.sqrt(N*N+te*te);G>.1?(re.position.x+=N/G*.05,re.position.z+=te/G*.05,re.rotation.y=Math.atan2(N,te),re.position.y=Math.abs(Math.sin(Ue*8))*.25):(Ve.targetPosition=void 0,re.position.y=0)}else Oe==="wander"&&Math.random()<.008&&(Ve.targetPosition=[(Math.random()-.5)*8,(Math.random()-.5)*8]);if(se&&Oe!=="sleep"){const Se=Ue;if(Be==="dino")se.headBone.rotation.z=Math.sin(Se*5)*.15,se.headBone.rotation.x=Math.sin(Se*3)*.1,se.leftArmBone.rotation.z=Math.sin(Se*10)*.35+.2,se.rightArmBone.rotation.z=-Math.sin(Se*10)*.35-.2,se.leftLegBone.rotation.z=Math.sin(Se*7)*.45,se.rightLegBone.rotation.z=-Math.sin(Se*7)*.45,se.tailBone.rotation.y=Math.sin(Se*5)*.4;else if(Be==="robot"){const nt=Math.floor(Math.sin(Se*4)*3)*(Math.PI/8);se.headBone.rotation.y=nt,se.leftArmBone.rotation.x=Math.sin(Se*6)*.6,se.rightArmBone.rotation.x=-Math.sin(Se*6)*.6,se.leftLegBone.position.y=Math.max(0,Math.sin(Se*6))*.15,se.rightLegBone.position.y=Math.max(0,-Math.sin(Se*6))*.15,se.tailBone.rotation.z=Math.sin(Se*12)*.3}else if(Be==="unicorn")se.leftArmBone.rotation.z=Math.sin(Se*12)*.6+.2,se.rightArmBone.rotation.z=-Math.sin(Se*12)*.6-.2,se.headBone.rotation.z=Math.sin(Se*4)*.15,se.leftLegBone.rotation.z=Math.sin(Se*8)*.35,se.rightLegBone.rotation.z=-Math.sin(Se*8)*.35,se.tailBone.rotation.z=Math.sin(Se*6)*.3;else if(Be==="cat")se.headBone.rotation.z=Math.sin(Se*3)*.22,se.leftArmBone.rotation.z=Math.sin(Se*8)*.25,se.rightArmBone.rotation.z=-Math.sin(Se*8)*.25,se.tailBone.rotation.z=Math.sin(Se*7)*.35+.2;else if(Be==="rocket")se.tailBone.scale.y=1+Math.sin(Se*28)*.45,se.tailBone.scale.x=.8+Math.cos(Se*24)*.3,se.leftArmBone.rotation.z=Math.sin(Se*6)*.12,se.rightArmBone.rotation.z=-Math.sin(Se*6)*.12;else if(Be==="monster"){const nt=Math.sin(Se*6);se.bodyBone.scale.y=1+nt*.15,se.bodyBone.scale.x=1-nt*.1,se.headBone.rotation.z=Math.sin(Se*9)*.25,se.leftArmBone.rotation.z=Math.sin(Se*8)*.6+.8,se.rightArmBone.rotation.z=-Math.sin(Se*8)*.6-.8}else Be==="hero"?(se.leftArmBone.rotation.x=-1.2+Math.sin(Se*4)*.15,se.rightArmBone.rotation.x=-1.2+Math.sin(Se*4)*.15,se.tailBone.rotation.x=.4+Math.sin(Se*12)*.3,se.headBone.rotation.x=-.2):(se.headBone.rotation.z=Math.sin(Se*4)*.15,se.leftArmBone.rotation.z=Math.sin(Se*6)*.3+.2,se.rightArmBone.rotation.z=-Math.sin(Se*6)*.3-.2,se.leftLegBone.rotation.z=Math.sin(Se*5)*.25,se.rightLegBone.rotation.z=-Math.sin(Se*5)*.25)}}),v.current&&f.current&&p.current&&v.current.render(f.current,p.current)};Le();const ve=()=>{if(!d.current||!v.current||!p.current)return;const Ue=d.current.clientWidth,re=d.current.clientHeight;p.current.aspect=Ue/re,p.current.updateProjectionMatrix(),v.current.setSize(Ue,re)},Me=new ResizeObserver(ve);return Me.observe(d.current),()=>{cancelAnimationFrame(ce),Me.disconnect(),Do(Y),ge.dispose(),v.current&&v.current.domElement&&v.current.domElement.remove()}},[]);const ne=()=>{if(!p.current)return;const{phi:F,theta:H,radius:Y}=L.current,he=Y*Math.sin(F)*Math.sin(H),ge=Y*Math.cos(F),U=Y*Math.sin(F)*Math.cos(H);p.current.position.set(he,ge+1.2,U),p.current.lookAt(0,1.2,0)};ue.useEffect(()=>{e.cameraPreset==="front"?L.current={phi:Math.PI/2.2,theta:0,radius:7}:e.cameraPreset==="side"?L.current={phi:Math.PI/2.2,theta:Math.PI/2,radius:7}:e.cameraPreset==="top"?L.current={phi:Math.PI/8,theta:0,radius:9}:e.cameraPreset==="cinematic"?L.current={phi:Math.PI/2.5,theta:Math.PI/3.5,radius:5.5}:L.current={phi:Math.PI/3,theta:Math.PI/4,radius:8},ne()},[e.cameraPreset]),ue.useEffect(()=>{!f.current||!u.current||n0(f.current,u.current,e)},[e]),ue.useEffect(()=>{g.current&&(g.current.visible=e.particlesEnabled)},[e.particlesEnabled]),ue.useEffect(()=>{y.current&&(M.current.forEach((F,H)=>{var Y;a.find(he=>he.id===H)||((Y=y.current)==null||Y.remove(F),Do(F),M.current.delete(H),C.current.delete(H))}),a.forEach(F=>{var he,ge;let H=M.current.get(F.id);const Y=`${F.position.join(",")}|${F.rotationY}`;if(!H)H=Wb(F.drawingDataUrl,F.depthThickness,F.templateId||"blank"),H.position.set(F.position[0],F.position[1],F.position[2]),H.rotation.y=F.rotationY,H.scale.setScalar(F.scale||1),H.userData=F,(he=y.current)==null||he.add(H),M.current.set(F.id,H),C.current.set(F.id,Y);else{const U=(ge=H.userData)==null?void 0:ge.targetPosition;H.userData={...F,targetPosition:F.targetPosition??U},C.current.get(F.id)!==Y&&(H.position.set(F.position[0],F.position[1],F.position[2]),H.rotation.y=F.rotationY,C.current.set(F.id,Y))}}))},[a]),ue.useEffect(()=>{E.current&&(T.current.forEach((F,H)=>{var Y;l.find(he=>he.id===H)||((Y=E.current)==null||Y.remove(F),Do(F),T.current.delete(H))}),l.forEach(F=>{var H;if(!T.current.has(F.id)){const Y=Xb(F.type,F.color);Y.position.set(F.position[0],F.position[1],F.position[2]),(H=E.current)==null||H.add(Y),T.current.set(F.id,Y)}}))},[l]),ue.useEffect(()=>{if(!_.current||!m.current)return;const{boneMap:F}=i0(_.current,t,!1);R.current=F;const{boneMap:H}=i0(m.current,t,!0);w.current=H},[t]),ue.useEffect(()=>{R.current&&(R.current.forEach((F,H)=>{const Y=n[H];Y&&(F.rotation.x=X(Y.rotation.x),F.rotation.y=X(Y.rotation.y),F.rotation.z=X(Y.rotation.z),Y.position&&(F.position.x=Y.position.x,F.position.y=Y.position.y+(H==="body"?1:0),F.position.z=Y.position.z))}),R.current.forEach((F,H)=>{const Y=F.getObjectByName("joint_handle");if(Y){const he=H===r,ge=H===$,U=Y.material;he?(U.color.set("#f59e0b"),U.emissive.set("#f59e0b"),U.emissiveIntensity=.8,Y.scale.setScalar(1.25)):ge?(U.color.set("#a855f7"),U.emissive.set("#a855f7"),U.emissiveIntensity=.5,Y.scale.setScalar(1.15)):(U.color.set("#64748b"),U.emissive.set("#000000"),U.emissiveIntensity=0,Y.scale.setScalar(1))}}))},[n,r,$]),ue.useEffect(()=>{!m.current||!w.current||(i?(m.current.visible=!0,w.current.forEach((F,H)=>{const Y=i[H];Y&&(F.rotation.x=X(Y.rotation.x),F.rotation.y=X(Y.rotation.y),F.rotation.z=X(Y.rotation.z),Y.position&&(F.position.x=Y.position.x,F.position.y=Y.position.y+(H==="body"?1:0),F.position.z=Y.position.z))})):m.current.visible=!1)},[i]);const z=F=>{S.current=!0,D.current={x:F.clientX,y:F.clientY},O.current=0},oe=F=>{if(!d.current||!p.current||!f.current)return;if(S.current){const Te=F.clientX-D.current.x,_e=F.clientY-D.current.y;D.current={x:F.clientX,y:F.clientY},O.current+=Math.hypot(Te,_e),L.current.theta-=Te*.008,L.current.phi=Math.max(.1,Math.min(Math.PI/2-.05,L.current.phi-_e*.008)),ne();return}const H=d.current.getBoundingClientRect(),Y=(F.clientX-H.left)/H.width*2-1,he=-((F.clientY-H.top)/H.height)*2+1,ge=new rl;ge.setFromCamera(new Ae(Y,he),p.current);const U=[];R.current.forEach(Te=>{const _e=Te.getObjectByName("joint_handle");_e&&U.push(_e)});const Ce=ge.intersectObjects(U,!1);if(Ce.length>0){const _e=Ce[0].object.userData.boneId;_e&&_e!==$&&q(_e)}else $!==null&&q(null)},I=F=>{var _e,we;const H=S.current;if(S.current=!1,H&&O.current>e0||!d.current||!p.current)return;const Y=d.current.getBoundingClientRect(),he=(F.clientX-Y.left)/Y.width*2-1,ge=-((F.clientY-Y.top)/Y.height)*2+1,U=new rl;U.setFromCamera(new Ae(he,ge),p.current);const Ce=[];R.current.forEach(Ie=>{const Ee=Ie.getObjectByName("joint_handle");Ee&&Ce.push(Ee)});const Te=U.intersectObjects(Ce,!1);if(Te.length>0){const Ee=Te[0].object.userData.boneId;if(Ee){Ht(),s(Ee);return}}if(y.current&&h){const Ie=[];M.current.forEach(ye=>Ie.push(ye));const Ee=U.intersectObjects(Ie,!0);if(Ee.length>0){let ye=Ee[0].object;for(;ye&&!((_e=ye.userData)!=null&&_e.id);)ye=ye.parent;if(ye&&((we=ye.userData)!=null&&we.id)){yt(),h(ye.userData.id);return}}}if(c){const Ie=new gi(new B(0,1,0),0),Ee=new B;U.ray.intersectPlane(Ie,Ee)&&c(Ee.x,Ee.z)}},P=ue.useRef(null),ae=F=>{if(F.touches.length===1)S.current=!0,D.current={x:F.touches[0].clientX,y:F.touches[0].clientY},O.current=0,P.current=null;else if(F.touches.length===2){S.current=!1;const H=F.touches[0].clientX-F.touches[1].clientX,Y=F.touches[0].clientY-F.touches[1].clientY;P.current=Math.hypot(H,Y)}},me=F=>{if(!(!d.current||!p.current)){if(F.touches.length===1&&S.current){const H=F.touches[0].clientX-D.current.x,Y=F.touches[0].clientY-D.current.y;D.current={x:F.touches[0].clientX,y:F.touches[0].clientY},O.current+=Math.hypot(H,Y),L.current.theta-=H*.008,L.current.phi=Math.max(.1,Math.min(Math.PI/2-.05,L.current.phi-Y*.008)),ne()}else if(F.touches.length===2&&P.current!==null){const H=F.touches[0].clientX-F.touches[1].clientX,Y=F.touches[0].clientY-F.touches[1].clientY,he=Math.hypot(H,Y),ge=P.current-he;P.current=he,L.current.radius=Math.max(3.5,Math.min(15,L.current.radius+ge*.02)),ne()}}},j=F=>{var Y,he;const H=S.current;if(S.current=!1,P.current=null,!(H&&O.current>e0)&&F.changedTouches.length===1){const ge=F.changedTouches[0];if(!d.current||!p.current)return;const U=d.current.getBoundingClientRect(),Ce=(ge.clientX-U.left)/U.width*2-1,Te=-((ge.clientY-U.top)/U.height)*2+1,_e=new rl;_e.setFromCamera(new Ae(Ce,Te),p.current);const we=[];R.current.forEach(Ee=>{const ye=Ee.getObjectByName("joint_handle");ye&&we.push(ye)});const Ie=_e.intersectObjects(we,!1);if(Ie.length>0){const ye=Ie[0].object.userData.boneId;if(ye){Ht(),s(ye);return}}if(y.current&&h){const Ee=[];M.current.forEach(Ge=>Ee.push(Ge));const ye=_e.intersectObjects(Ee,!0);if(ye.length>0){let Ge=ye[0].object;for(;Ge&&!((Y=Ge.userData)!=null&&Y.id);)Ge=Ge.parent;if(Ge&&((he=Ge.userData)!=null&&he.id)){yt(),h(Ge.userData.id);return}}}if(c){const Ee=new gi(new B(0,1,0),0),ye=new B;_e.ray.intersectPlane(Ee,ye)&&c(ye.x,ye.z)}}},ee=F=>{L.current.radius=Math.max(3.5,Math.min(15,L.current.radius+F.deltaY*.005)),ne()};return x.jsxs("div",{ref:d,onMouseDown:z,onMouseMove:oe,onMouseUp:I,onTouchStart:ae,onTouchMove:me,onTouchEnd:j,onWheel:ee,className:"w-full h-full relative cursor-grab active:cursor-grabbing rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-950 touch-none",children:[x.jsxs("div",{className:"absolute top-4 left-4 z-10 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700/60 text-xs shadow-lg",children:[x.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"}),x.jsx("span",{className:"font-bold text-slate-200 uppercase tracking-wider text-[11px]",children:"3D Kids Land Stage"}),x.jsxs("span",{className:"text-purple-400 font-mono text-[10px] bg-purple-950/80 px-1.5 py-0.5 rounded border border-purple-800",children:["Theme: ",e.theme]})]}),x.jsxs("div",{className:"absolute top-4 right-4 z-10 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700/60 text-xs shadow-lg",children:[x.jsx("span",{className:"text-slate-400",children:"Selected Joint:"}),x.jsx("span",{className:"font-bold text-amber-300 capitalize",children:r})]}),x.jsx("div",{className:"absolute bottom-4 left-4 z-10 bg-slate-900/70 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-800 text-[11px] text-slate-300 pointer-events-none flex items-center gap-2",children:x.jsx("span",{children:"💡 Click any colored ball joint to pose! Drag canvas to rotate camera."})})]})};function n0(t,e,n){for(;e.children.length>0;){const c=e.children[0];e.remove(c),Do(c)}let i=n.bgColor||"#38bdf8",r=n.groundColor||"#4ade80",s=n.gridColor||"#a855f7";n.theme==="kidsland"?(i="#38bdf8",r="#4ade80",s="#a855f7"):n.theme==="candyland"?(i="#f472b6",r="#fbcfe8",s="#ec4899"):n.theme==="toybox"?(i="#fbbf24",r="#3b82f6",s="#f97316"):n.theme==="fairytale"?(i="#c084fc",r="#86efac",s="#d8b4fe"):n.theme==="space"?(i="#0f172a",r="#1e1b4b",s="#38bdf8"):n.theme==="beach"?(i="#38bdf8",r="#fef08a",s="#0284c7"):n.theme==="neon"&&(i="#09090b",r="#18181b",s="#f43f5e"),t.background=new Xe(i),t.fog&&t.fog.color.set(i);const o=new $s(30,30),a=new Ye({color:r,roughness:.6,metalness:.1}),l=new ie(o,a);if(l.rotation.x=-Math.PI/2,l.receiveShadow=!0,e.add(l),n.showGrid){const c=new Ib(30,30,s,s);c.position.y=.01,c.material.opacity=.4,c.material.transparent=!0,e.add(c)}if(n.theme==="kidsland"||n.theme==="candyland"||n.theme==="fairytale"||n.theme==="playroom"||n.theme==="toybox"){const c=kb();c.position.set(0,0,-10),e.add(c);for(let _=0;_<5;_++){const m=Ob();m.position.set((_-2)*5+(Math.random()-.5)*2,4.5+Math.random()*2,-7+Math.random()*2),e.add(m)}const h=Fb();h.position.set(6,7,-9),e.add(h),[{x:-5,z:-4,color:"#f43f5e"},{x:5,z:-5,color:"#3b82f6"},{x:-6,z:2,color:"#eab308"},{x:6,z:1,color:"#a855f7"},{x:-4,z:-7,color:"#10b981"},{x:4,z:-8,color:"#ec4899"}].forEach(_=>{const m=zb(_.color);m.position.set(_.x,0,_.z),e.add(m)}),[{x:-3,z:-3,c1:"#ef4444",c2:"#ffffff"},{x:3.5,z:-3.5,c1:"#8b5cf6",c2:"#fef08a"}].forEach(_=>{const m=Bb(_.c1,_.c2);m.position.set(_.x,0,_.z),e.add(m)});const p=Hb();p.position.set(-2.5,0,-2),e.add(p),[{x:2.2,z:-2,scale:.8},{x:-1.8,z:2.5,scale:.6},{x:3,z:2,scale:.7}].forEach(_=>{const m=Vb();m.scale.setScalar(_.scale),m.position.set(_.x,0,_.z),e.add(m)})}else if(n.theme==="space")for(let c=0;c<4;c++){const h=new ie(new et(1+Math.random(),16,16),new Ye({color:new Xe().setHSL(Math.random(),.8,.5),roughness:.4}));h.position.set((c-1.5)*6,4+Math.random()*2,-10),e.add(h)}}function kb(){const t=new Qe;return["#ef4444","#f97316","#eab308","#22c55e","#3b82f6","#a855f7"].forEach((n,i)=>{const r=9-i*.4,s=new Ji(r,.2,12,48,Math.PI),o=new Ye({color:n,roughness:.3,emissive:n,emissiveIntensity:.15}),a=new ie(s,o);a.rotation.x=Math.PI/2,t.add(a)}),t}function Ob(){const t=new Qe,e=new Ye({color:"#ffffff",roughness:.9}),n=new ie(new et(.8,12,12),e),i=new ie(new et(.6,12,12),e);i.position.set(.7,-.1,0);const r=new ie(new et(.6,12,12),e);return r.position.set(-.7,-.1,0),t.add(n,i,r),t}function Fb(){const t=new Qe,e=new ie(new et(1.2,16,16),new Ye({color:"#facc15",emissive:"#facc15",emissiveIntensity:.5}));t.add(e);for(let n=0;n<8;n++){const i=new ie(new Ft(.2,.8,8),new Ye({color:"#fbbf24",emissive:"#fbbf24"})),r=n/8*Math.PI*2;i.position.set(Math.cos(r)*1.6,Math.sin(r)*1.6,0),i.rotation.z=r-Math.PI/2,t.add(i)}return t}function zb(t){const e=new Qe,n=new ie(new ut(.2,.3,1.2,8),new Ye({color:"#78350f"}));n.position.y=.6,n.castShadow=!0,e.add(n);const i=new Yh(.9,1),r=new Ye({color:t,roughness:.4}),s=new ie(i,r);return s.position.y=1.7,s.castShadow=!0,e.add(s),e}function Bb(t,e){const n=new Qe,i=new ie(new ut(.08,.08,2,8),new Ye({color:"#f8fafc"}));i.position.y=1,i.castShadow=!0,n.add(i);const r=new ie(new ut(.7,.7,.2,24),new Ye({color:t,roughness:.2}));r.rotation.x=Math.PI/2,r.position.y=2,r.castShadow=!0;const s=new ie(new ut(.4,.4,.22,24),new Ye({color:e,roughness:.2}));return s.rotation.x=Math.PI/2,s.position.y=2,n.add(r,s),n}function Hb(){const t=new Qe;return["#ef4444","#3b82f6","#eab308"].forEach((n,i)=>{const r=new ie(new vt(.7,.7,.7),new Ye({color:n,roughness:.3}));r.position.set(0,.35+i*.7,0),r.rotation.y=i*Math.PI/6,r.castShadow=!0,t.add(r)}),t}function Vb(){const t=new Qe,e=new ie(new ut(.2,.25,.6,8),new Ye({color:"#f1f5f9"}));e.position.y=.3,e.castShadow=!0;const n=new ie(new et(.5,12,12,0,Math.PI*2,0,Math.PI/2),new Ye({color:"#ef4444",roughness:.3}));return n.position.y=.6,n.castShadow=!0,t.add(e,n),t}function jb(){const e=new Yt,n=new Float32Array(80*3),i=new Float32Array(80*3),r=[new Xe("#f43f5e"),new Xe("#38bdf8"),new Xe("#facc15"),new Xe("#a855f7"),new Xe("#4ade80")];for(let o=0;o<80;o++){n[o*3]=(Math.random()-.5)*18,n[o*3+1]=Math.random()*8+.5,n[o*3+2]=(Math.random()-.5)*18;const a=r[Math.floor(Math.random()*r.length)];i[o*3]=a.r,i[o*3+1]=a.g,i[o*3+2]=a.b}e.setAttribute("position",new Un(n,3)),e.setAttribute("color",new Un(i,3));const s=new Qx({size:.2,vertexColors:!0,transparent:!0,opacity:.85});return new db(e,s)}function i0(t,e,n){for(;t.children.length>0;){const O=t.children[0];t.remove(O),Do(O)}const i=new Map,r=new Ye({color:e.colors.primary,roughness:.3,metalness:e.type==="robot"?.6:.1,transparent:n,opacity:n?.35:1,wireframe:e.wireframe}),s=new Ye({color:e.colors.secondary,roughness:.3,transparent:n,opacity:n?.35:1}),o=new Ye({color:e.colors.accent,emissive:e.colors.glow,emissiveIntensity:.4,transparent:n,opacity:n?.35:1}),a=new Ye({color:e.colors.joints,roughness:.5,transparent:n,opacity:n?.2:1});let l=r,c=s;if(e.drawingDataUrl){const $=new rv().load(e.drawingDataUrl);$.colorSpace=Cn,$.wrapS=Zo,$.wrapT=Zo,l=new Ye({map:$,roughness:.25,metalness:.05,side:hn,transparent:n,opacity:n?.35:1,wireframe:e.wireframe}),c=l}const h=(e.type||"blank").toLowerCase(),d=sv(h),f=new Qe;f.position.set(0,1,0),t.add(f),i.set("body",f);const p=new ie(un(d.body),l);p.castShadow=!n,xr(p,n),f.add(p);const v=String(e.type);if(v!=="doodle"&&v!=="dino"&&v!=="cat"){const O=new ie(new ut(.18,.18,.05,12),o);O.rotation.x=Math.PI/2,O.position.set(0,.1,d.body.d/2+.02),f.add(O)}n||vr(f,"body",0,0,0);const _=new Qe;_.position.set(d.head.posX,d.head.posY,d.head.posZ),f.add(_),i.set("head",_);const m=new ie(un(d.head),c);m.position.set(0,d.head.h/2,0),m.castShadow=!n,xr(m,n),_.add(m),n||vr(_,"head",0,d.head.h/2+.1,0);const u=new Qe;u.position.set(d.leftArm.posX,d.leftArm.posY,d.leftArm.posZ),f.add(u),i.set("leftArm",u);const g=new ie(un(d.leftArm),l);g.position.set(-d.leftArm.w/2,-d.leftArm.h/2,0),g.castShadow=!n,xr(g,n),u.add(g),n||vr(u,"leftArm",0,0,0);const y=new Qe;y.position.set(d.rightArm.posX,d.rightArm.posY,d.rightArm.posZ),f.add(y),i.set("rightArm",y);const M=new ie(un(d.rightArm),l);if(M.position.set(d.rightArm.w/2,-d.rightArm.h/2,0),M.castShadow=!n,xr(M,n),y.add(M),e.prop&&e.prop.type!=="none"){const O=Gb(e.prop.type,e.prop.color);O.position.set(0,-d.rightArm.h,.15),y.add(O)}n||vr(y,"rightArm",0,0,0);const C=new Qe;C.position.set(d.leftLeg.posX,d.leftLeg.posY,d.leftLeg.posZ),f.add(C),i.set("leftLeg",C);const E=new ie(un(d.leftLeg),c);E.position.set(0,-d.leftLeg.h/2,0),E.castShadow=!n,xr(E,n);const T=new ie(new vt(d.leftLeg.w*.9,.12,d.leftLeg.d*1.1),a);T.position.set(0,-d.leftLeg.h,d.leftLeg.d*.2),C.add(E,T),n||vr(C,"leftLeg",0,0,0);const R=new Qe;R.position.set(d.rightLeg.posX,d.rightLeg.posY,d.rightLeg.posZ),f.add(R),i.set("rightLeg",R);const w=new ie(un(d.rightLeg),c);w.position.set(0,-d.rightLeg.h/2,0),w.castShadow=!n,xr(w,n);const S=new ie(new vt(d.rightLeg.w*.9,.12,d.rightLeg.d*1.1),a);S.position.set(0,-d.rightLeg.h,d.rightLeg.d*.2),R.add(w,S),n||vr(R,"rightLeg",0,0,0);const D=new Qe;D.position.set(d.tail.posX,d.tail.posY,d.tail.posZ),f.add(D),i.set("tail",D);const L=new ie(un(d.tail),o);return L.position.set(d.tail.offsetX||0,d.tail.offsetY||-d.tail.h/2,0),L.castShadow=!n,xr(L,n),D.add(L),n||vr(D,"tail",0,0,0),ov(h,_,f,u,y,C,R,D,r),t.scale.setScalar(e.scale||1),{boneMap:i}}function xr(t,e,n=988970,i=1.035){if(e)return;const r=new ua({color:n,side:on}),s=new ie(t.geometry,r);s.scale.setScalar(i),t.add(s)}function vr(t,e,n,i,r){const s=new ie(new et(.15,12,12),new Ye({color:"#64748b"}));s.name="joint_handle",s.position.set(n,i,r),s.userData={boneId:e},t.add(s)}function Gb(t,e){const n=new Qe,i=new Ye({color:e,roughness:.3});if(t==="wand"){const r=new ie(new ut(.03,.03,.8),i),s=new ie(new Qo(.15),new Ye({color:"#facc15",emissive:"#facc15"}));s.position.y=.45,n.add(r,s)}else if(t==="shield"){const r=new ie(new ut(.35,.35,.06,12),i);r.rotation.x=Math.PI/2,n.add(r)}else if(t==="balloon"){const r=new ie(new ut(.01,.01,.9),new ua({color:16777215})),s=new ie(new et(.3,12,12),i);s.position.y=.7,n.add(r,s)}else{const r=new ie(new Qo(.25),i);n.add(r)}return n}function un(t){const{w:e,h:n,d:i,uMin:r,vMin:s,uMax:o,vMax:a}=t,l=t.shape||"sphere";let c;if(l==="sphere")c=new et(.5,32,32),c.scale(e,n,i);else if(l==="capsule"){const M=Math.min(e,i)/2,C=Math.max(.01,n-M*2);c=new Wh(M,C,12,24),c.scale(e/(M*2||1),1,i/(M*2||1))}else l==="cylinder"?(c=new ut(.5,.5,1,24),c.scale(e,n,i)):l==="cone"?(c=new Ft(.5,1,24),c.scale(e,n,i)):c=new vt(e,n,i,12,12,12);c.computeBoundingBox();const h=c.boundingBox,d=h.min.x,f=h.max.x,p=h.min.y,v=h.max.y,_=f-d||1,m=v-p||1,u=c.attributes.position,g=c.attributes.uv,y=u.count;for(let M=0;M<y;M++){const C=u.getX(M),E=u.getY(M),T=u.getZ(M);let R=(C-d)/_,w=(E-p)/m;T<-.01&&(R=1-R);const S=r+(o-r)*Math.max(0,Math.min(1,R)),D=s+(a-s)*Math.max(0,Math.min(1,w));g.setXY(M,S,D)}return g.needsUpdate=!0,c.computeVertexNormals(),c}function sv(t){const e=t.toLowerCase();return e==="dino"?{body:{shape:"capsule",w:.85,h:.8,d:1.35,uMin:.25,vMin:.32,uMax:.75,vMax:.65,posX:0,posY:0,posZ:.1},head:{shape:"box",w:.7,h:.65,d:1,uMin:.25,vMin:.65,uMax:.75,vMax:.98,posX:0,posY:.45,posZ:.45},leftArm:{shape:"capsule",w:.22,h:.35,d:.22,uMin:0,vMin:.38,uMax:.32,vMax:.58,posX:-.38,posY:.15,posZ:.4},rightArm:{shape:"capsule",w:.22,h:.35,d:.22,uMin:.68,vMin:.38,uMax:1,vMax:.58,posX:.38,posY:.15,posZ:.4},leftLeg:{shape:"capsule",w:.45,h:.8,d:.5,uMin:.15,vMin:0,uMax:.48,vMax:.32,posX:-.32,posY:-.38,posZ:-.1},rightLeg:{shape:"capsule",w:.45,h:.8,d:.5,uMin:.52,vMin:0,uMax:.85,vMax:.32,posX:.32,posY:-.38,posZ:-.1},tail:{shape:"cone",w:.55,h:1.3,d:.55,uMin:0,vMin:.3,uMax:.32,vMax:.6,posX:0,posY:-.1,posZ:-.75,offsetX:0,offsetY:0}}:e==="robot"?{body:{shape:"box",w:1.05,h:.95,d:.75,uMin:.22,vMin:.32,uMax:.78,vMax:.68,posX:0,posY:0,posZ:0},head:{shape:"box",w:.75,h:.65,d:.65,uMin:.25,vMin:.68,uMax:.75,vMax:.98,posX:0,posY:.45,posZ:0},leftArm:{shape:"cylinder",w:.32,h:.7,d:.32,uMin:0,vMin:.32,uMax:.25,vMax:.7,posX:-.55,posY:.2,posZ:0},rightArm:{shape:"cylinder",w:.32,h:.7,d:.32,uMin:.75,vMin:.32,uMax:1,vMax:.7,posX:.55,posY:.2,posZ:0},leftLeg:{shape:"box",w:.36,h:.7,d:.4,uMin:.25,vMin:0,uMax:.48,vMax:.32,posX:-.28,posY:-.4,posZ:0},rightLeg:{shape:"box",w:.36,h:.7,d:.4,uMin:.52,vMin:0,uMax:.75,vMax:.32,posX:.28,posY:-.4,posZ:0},tail:{shape:"box",w:.6,h:.6,d:.35,uMin:.45,vMin:.85,uMax:.55,vMax:1,posX:0,posY:.1,posZ:-.4,offsetX:0,offsetY:0}}:e==="astronaut"?{body:{shape:"capsule",w:1,h:.95,d:.8,uMin:.22,vMin:.32,uMax:.78,vMax:.68,posX:0,posY:0,posZ:0},head:{shape:"sphere",w:.85,h:.8,d:.8,uMin:.25,vMin:.68,uMax:.75,vMax:.98,posX:0,posY:.45,posZ:0},leftArm:{shape:"capsule",w:.38,h:.65,d:.38,uMin:0,vMin:.32,uMax:.25,vMax:.7,posX:-.55,posY:.2,posZ:0},rightArm:{shape:"capsule",w:.38,h:.65,d:.38,uMin:.75,vMin:.32,uMax:1,vMax:.7,posX:.55,posY:.2,posZ:0},leftLeg:{shape:"capsule",w:.38,h:.6,d:.4,uMin:.25,vMin:0,uMax:.48,vMax:.32,posX:-.28,posY:-.4,posZ:0},rightLeg:{shape:"capsule",w:.38,h:.6,d:.4,uMin:.52,vMin:0,uMax:.75,vMax:.32,posX:.28,posY:-.4,posZ:0},tail:{shape:"box",w:.7,h:.7,d:.35,uMin:.45,vMin:.85,uMax:.55,vMax:1,posX:0,posY:.1,posZ:-.4,offsetX:0,offsetY:0}}:e==="panda"?{body:{shape:"sphere",w:1.1,h:1,d:.9,uMin:.2,vMin:.3,uMax:.75,vMax:.65,posX:0,posY:0,posZ:0},head:{shape:"sphere",w:.95,h:.85,d:.85,uMin:.25,vMin:.65,uMax:.75,vMax:.98,posX:0,posY:.4,posZ:0},leftArm:{shape:"capsule",w:.35,h:.6,d:.35,uMin:0,vMin:.38,uMax:.32,vMax:.58,posX:-.5,posY:.2,posZ:0},rightArm:{shape:"capsule",w:.35,h:.6,d:.35,uMin:.68,vMin:.38,uMax:1,vMax:.58,posX:.5,posY:.2,posZ:0},leftLeg:{shape:"capsule",w:.38,h:.5,d:.38,uMin:.15,vMin:0,uMax:.48,vMax:.32,posX:-.28,posY:-.4,posZ:0},rightLeg:{shape:"capsule",w:.38,h:.5,d:.38,uMin:.52,vMin:0,uMax:.85,vMax:.32,posX:.28,posY:-.4,posZ:0},tail:{shape:"sphere",w:.25,h:.25,d:.25,uMin:0,vMin:.3,uMax:.32,vMax:.6,posX:0,posY:-.1,posZ:-.5,offsetX:0,offsetY:0}}:e==="unicorn"?{body:{shape:"capsule",w:.75,h:.7,d:1.35,uMin:.2,vMin:.3,uMax:.75,vMax:.65,posX:0,posY:0,posZ:0},head:{shape:"capsule",w:.65,h:.8,d:.85,uMin:.45,vMin:.65,uMax:.92,vMax:.98,posX:0,posY:.5,posZ:.45},leftArm:{shape:"cylinder",w:.28,h:.7,d:.28,uMin:.05,vMin:.55,uMax:.45,vMax:.9,posX:-.3,posY:-.35,posZ:.4},rightArm:{shape:"cylinder",w:.28,h:.7,d:.28,uMin:.05,vMin:.55,uMax:.45,vMax:.9,posX:.3,posY:-.35,posZ:.4},leftLeg:{shape:"cylinder",w:.28,h:.7,d:.28,uMin:.2,vMin:0,uMax:.45,vMax:.3,posX:-.3,posY:-.35,posZ:-.4},rightLeg:{shape:"cylinder",w:.28,h:.7,d:.28,uMin:.55,vMin:0,uMax:.8,vMax:.3,posX:.3,posY:-.35,posZ:-.4},tail:{shape:"capsule",w:.35,h:.7,d:.35,uMin:0,vMin:.25,uMax:.25,vMax:.6,posX:0,posY:.1,posZ:-.7,offsetX:0,offsetY:0}}:e==="cat"?{body:{shape:"sphere",w:.85,h:.75,d:1.1,uMin:.25,vMin:.22,uMax:.75,vMax:.58,posX:0,posY:0,posZ:0},head:{shape:"sphere",w:.95,h:.85,d:.85,uMin:.22,vMin:.58,uMax:.78,vMax:.98,posX:0,posY:.4,posZ:0},leftArm:{shape:"capsule",w:.28,h:.5,d:.28,uMin:.25,vMin:0,uMax:.45,vMax:.25,posX:-.3,posY:-.3,posZ:.3},rightArm:{shape:"capsule",w:.28,h:.5,d:.28,uMin:.55,vMin:0,uMax:.75,vMax:.25,posX:.3,posY:-.3,posZ:.3},leftLeg:{shape:"capsule",w:.28,h:.5,d:.28,uMin:.25,vMin:0,uMax:.45,vMax:.25,posX:-.32,posY:-.3,posZ:-.3},rightLeg:{shape:"capsule",w:.28,h:.5,d:.28,uMin:.55,vMin:0,uMax:.75,vMax:.25,posX:.32,posY:-.3,posZ:-.3},tail:{shape:"capsule",w:.22,h:.8,d:.22,uMin:.68,vMin:.3,uMax:.95,vMax:.65,posX:0,posY:.1,posZ:-.6,offsetX:0,offsetY:0}}:e==="rocket"?{body:{shape:"cylinder",w:.9,h:1.2,d:.9,uMin:.25,vMin:.3,uMax:.75,vMax:.7,posX:0,posY:0,posZ:0},head:{shape:"cone",w:.9,h:.8,d:.9,uMin:.28,vMin:.7,uMax:.72,vMax:.98,posX:0,posY:.6,posZ:0},leftArm:{shape:"cylinder",w:.38,h:1,d:.38,uMin:.05,vMin:.25,uMax:.32,vMax:.58,posX:-.65,posY:-.1,posZ:0},rightArm:{shape:"cylinder",w:.38,h:1,d:.38,uMin:.68,vMin:.25,uMax:.95,vMax:.58,posX:.65,posY:-.1,posZ:0},leftLeg:{shape:"box",w:.25,h:.6,d:.4,uMin:.3,vMin:.1,uMax:.45,vMax:.3,posX:-.45,posY:-.5,posZ:.2},rightLeg:{shape:"box",w:.25,h:.6,d:.4,uMin:.55,vMin:.1,uMax:.7,vMax:.3,posX:.45,posY:-.5,posZ:.2},tail:{shape:"cone",w:.6,h:.8,d:.6,uMin:.3,vMin:0,uMax:.7,vMax:.3,posX:0,posY:-.6,posZ:0,offsetX:0,offsetY:0}}:e==="monster"?{body:{shape:"sphere",w:1.2,h:.9,d:.85,uMin:.15,vMin:.22,uMax:.85,vMax:.6,posX:0,posY:0,posZ:0},head:{shape:"sphere",w:.95,h:.8,d:.85,uMin:.2,vMin:.6,uMax:.8,vMax:.98,posX:0,posY:.45,posZ:0},leftArm:{shape:"capsule",w:.4,h:.7,d:.4,uMin:0,vMin:.35,uMax:.22,vMax:.75,posX:-.6,posY:.2,posZ:0},rightArm:{shape:"capsule",w:.4,h:.7,d:.4,uMin:.78,vMin:.35,uMax:1,vMax:.75,posX:.6,posY:.2,posZ:0},leftLeg:{shape:"capsule",w:.35,h:.5,d:.35,uMin:.2,vMin:0,uMax:.45,vMax:.22,posX:-.3,posY:-.4,posZ:0},rightLeg:{shape:"capsule",w:.35,h:.5,d:.35,uMin:.55,vMin:0,uMax:.8,vMax:.22,posX:.3,posY:-.4,posZ:0},tail:{shape:"cone",w:.4,h:.7,d:.4,uMin:.4,vMin:.8,uMax:.6,vMax:1,posX:0,posY:-.2,posZ:-.5,offsetX:0,offsetY:0}}:e==="hero"?{body:{shape:"capsule",w:.95,h:.9,d:.65,uMin:.2,vMin:.3,uMax:.8,vMax:.7,posX:0,posY:0,posZ:0},head:{shape:"sphere",w:.75,h:.65,d:.65,uMin:.3,vMin:.7,uMax:.7,vMax:.98,posX:0,posY:.4,posZ:0},leftArm:{shape:"capsule",w:.35,h:.65,d:.35,uMin:.02,vMin:.35,uMax:.25,vMax:.75,posX:-.52,posY:.25,posZ:0},rightArm:{shape:"capsule",w:.35,h:.65,d:.35,uMin:.75,vMin:.35,uMax:.98,vMax:.75,posX:.52,posY:.25,posZ:0},leftLeg:{shape:"capsule",w:.32,h:.6,d:.32,uMin:.22,vMin:0,uMax:.48,vMax:.3,posX:-.25,posY:-.4,posZ:0},rightLeg:{shape:"capsule",w:.32,h:.6,d:.32,uMin:.52,vMin:0,uMax:.78,vMax:.3,posX:.25,posY:-.4,posZ:0},tail:{shape:"box",w:.9,h:1.1,d:.08,uMin:.15,vMin:.2,uMax:.85,vMax:.8,posX:0,posY:0,posZ:-.32,offsetX:0,offsetY:0}}:{body:{shape:"sphere",w:1,h:.8,d:.6,uMin:.2,vMin:.3,uMax:.8,vMax:.65,posX:0,posY:0,posZ:0},head:{shape:"sphere",w:.8,h:.7,d:.65,uMin:.25,vMin:.65,uMax:.75,vMax:1,posX:0,posY:.4,posZ:0},leftArm:{shape:"capsule",w:.32,h:.5,d:.32,uMin:0,vMin:.3,uMax:.22,vMax:.7,posX:-.5,posY:.2,posZ:0},rightArm:{shape:"capsule",w:.32,h:.5,d:.32,uMin:.78,vMin:.3,uMax:1,vMax:.7,posX:.5,posY:.2,posZ:0},leftLeg:{shape:"capsule",w:.32,h:.5,d:.32,uMin:.2,vMin:0,uMax:.48,vMax:.3,posX:-.25,posY:-.4,posZ:0},rightLeg:{shape:"capsule",w:.32,h:.5,d:.32,uMin:.52,vMin:0,uMax:.8,vMax:.3,posX:.25,posY:-.4,posZ:0},tail:{shape:"capsule",w:.3,h:.35,d:.3,uMin:.4,vMin:.1,uMax:.6,vMax:.3,posX:0,posY:-.2,posZ:0,offsetX:0,offsetY:-.15}}}function ov(t,e,n,i,r,s,o,a,l){const c=new Ye({color:16777215,roughness:.3}),h=new Ye({color:1118481,roughness:.2}),d=new Ye({color:16766720,roughness:.2,metalness:.8}),f=new Ye({color:3359061,roughness:.3,metalness:.6}),p=new Ye({color:440020,emissive:440020,emissiveIntensity:.8}),v=new Ye({color:16347926,emissive:16347926,emissiveIntensity:1});if(t==="dino"){const _=new ie(new vt(.5,.25,.6),l);_.position.set(0,.45,.45);const m=new ie(new vt(.46,.18,.55),f);m.position.set(0,.22,.42),e.add(_,m);for(let u=-2;u<=2;u++){const g=new ie(new Ft(.035,.12,8),c);g.rotation.x=Math.PI,g.position.set(u*.09,.31,.7);const y=new ie(new Ft(.03,.1,8),c);y.position.set(u*.08,.3,.65),e.add(g,y)}for(const u of[-.1,.1]){const g=new ie(new et(.03,8,8),h);g.position.set(u,.52,.74),e.add(g)}for(const u of[-.26,.26]){const g=new ie(new et(.13,12,12),f);g.position.set(u,.58,.22);const y=new ie(new et(.1,16,16),c);y.position.set(u*.9,.58,.26);const M=new ie(new et(.05,12,12),h);M.position.set(u*.9,.58,.35);const C=new ie(new vt(.16,.06,.2),l);C.rotation.z=u>0?-.2:.2,C.position.set(u,.68,.24),e.add(g,y,M,C)}for(let u=0;u<4;u++){const g=new ie(new Ft(.1,.3,8),l);g.rotation.x=-Math.PI/4,g.position.set(0,.35-u*.18,-.4-u*.08),n.add(g)}for(let u=0;u<3;u++){const g=new ie(new Ft(.08-u*.02,.22-u*.04,8),l);g.rotation.x=-Math.PI/3,g.position.set(0,-u*.2,-u*.25),a.add(g)}for(const u of[i,r])for(const g of[-.06,0,.06]){const y=new ie(new Ft(.02,.1,8),c);y.rotation.x=Math.PI/2,y.position.set(g,-.38,.1),u.add(y)}for(const u of[s,o])for(const g of[-.1,0,.1]){const y=new ie(new Ft(.035,.14,8),c);y.rotation.x=Math.PI/2,y.position.set(g,-.82,.28),u.add(y)}}else if(t==="robot"){for(const C of[-.15,.15]){const E=new ie(new ut(.02,.02,.35),f);E.position.set(C,.72,0);const T=new ie(new et(.08,12,12),p);T.position.set(C,.9,0),e.add(E,T)}for(const C of[-.4,.4]){const E=new ie(new ut(.09,.09,.12,12),f);E.rotation.z=Math.PI/2,E.position.set(C,.35,0),e.add(E)}const _=new ie(new vt(.62,.22,.12),f);_.position.set(0,.38,.32);const m=new ie(new vt(.54,.16,.05),p);m.position.set(0,.38,.36),e.add(_,m);const u=new ie(new vt(.65,.45,.12),f);u.position.set(0,.05,.38);const g=new ie(new ut(.08,.08,.05,12),p);g.rotation.x=Math.PI/2,g.position.set(-.16,.12,.43);const y=new ie(new ut(.08,.08,.05,12),v);y.rotation.x=Math.PI/2,y.position.set(.16,.12,.43),n.add(u,g,y);const M=new ie(new vt(.65,.55,.28),f);M.position.set(0,.05,-.4),n.add(M);for(const C of[-.18,.18]){const E=new ie(new ut(.1,.14,.2,12),f);E.position.set(C,-.28,-.4);const T=new ie(new Ft(.12,.35,12),v);T.rotation.x=Math.PI,T.position.set(C,-.5,-.4),n.add(E,T)}for(const C of[i,r]){const E=new ie(new vt(.04,.18,.05),f);E.position.set(-.06,-.72,0);const T=new ie(new vt(.04,.18,.05),f);T.position.set(.06,-.72,0),C.add(E,T)}}else if(t==="astronaut"){const _=new ie(new Ji(.38,.05,12,24),f);_.position.set(0,.42,.25);const m=new ie(new et(.36,24,24),d);m.position.set(0,.42,.22),e.add(_,m);const u=new ie(new vt(.55,.35,.15),c);u.position.set(0,.1,.42),n.add(u);const g=new ie(new vt(.72,.72,.32),c);g.position.set(0,.05,-.42);for(const y of[-.18,.18]){const M=new ie(new ut(.12,.12,.6,16),f);M.position.set(y,.05,-.45),n.add(M)}n.add(g)}else if(t==="panda"){for(const u of[-.35,.35]){const g=new ie(new et(.18,16,16),h);g.position.set(u,.75,0),e.add(g)}for(const u of[-.22,.22]){const g=new ie(new et(.14,16,16),h);g.scale.set(1.2,.9,.4),g.position.set(u,.42,.38);const y=new ie(new et(.08,12,12),c);y.position.set(u,.42,.42);const M=new ie(new et(.04,10,10),h);M.position.set(u,.42,.48),e.add(g,y,M)}const _=new ie(new et(.18,16,16),c);_.scale.set(1.1,.8,.8),_.position.set(0,.32,.42);const m=new ie(new et(.06,12,12),h);m.position.set(0,.36,.56),e.add(_,m)}else if(t==="unicorn"){const _=new ie(new Ft(.11,.6,16),d);_.rotation.x=-.3,_.position.set(0,.82,.25),e.add(_);for(const u of[-.25,.25]){const g=new ie(new Ft(.09,.26,8),l);g.position.set(u,.75,-.1),e.add(g)}const m=new Ye({color:16777215,roughness:.3});for(const[u,g]of[[i,-1],[r,1]]){const y=new Qe;y.position.set(g*.2,.1,0);for(let M=0;M<3;M++){const C=new ie(new vt(.45,.12,.02),m);C.rotation.z=g*(.3+M*.2),C.position.set(g*M*.12,-M*.08,0),y.add(C)}u.add(y)}for(const u of[s,o]){const g=new ie(new ut(.16,.18,.14,16),d);g.position.set(0,-.62,0),u.add(g)}}else if(t==="cat"){const _=new Ye({color:16020150});for(const y of[-.28,.28]){const M=new ie(new Ft(.15,.3,8),l);M.position.set(y,.75,0);const C=new ie(new Ft(.09,.22,8),_);C.position.set(y*.95,.75,.04),e.add(M,C)}const m=new ie(new et(.06,12,12),_);m.position.set(0,.35,.44),e.add(m);const u=new ie(new Ji(.36,.04,8,20),_);u.rotation.x=Math.PI/2,u.position.set(0,.02,0);const g=new ie(new et(.08,12,12),d);g.position.set(0,-.05,.38),e.add(u,g);for(const y of[s,o]){const M=new ie(new et(.12,12,12),_);M.scale.set(1,.4,1),M.position.set(0,-.48,.05),y.add(M)}}else if(t==="rocket"){const _=new ie(new Ft(.45,.7,24),f);_.position.set(0,.8,0);const m=new ie(new et(.08,12,12),v);m.position.set(0,1.15,0),e.add(_,m);const u=new ie(new Ji(.24,.04,12,24),f);u.position.set(0,.1,.38);const g=new ie(new et(.22,16,16),p);g.position.set(0,.1,.35),n.add(u,g);for(let M=0;M<3;M++){const C=M*Math.PI*2/3,E=new ie(new vt(.1,.6,.45),f);E.position.set(Math.cos(C)*.5,-.2,Math.sin(C)*.5),E.rotation.y=-C,n.add(E)}const y=new ie(new Ft(.35,.8,16),v);y.rotation.x=Math.PI,y.position.set(0,-.6,0),a.add(y)}else if(t==="monster"){[{x:-.24,y:.62,z:0},{x:0,y:.76,z:.05},{x:.24,y:.62,z:0}].forEach(m=>{const u=new ie(new ut(.04,.04,.28),l);u.position.set(m.x,m.y,m.z);const g=new ie(new et(.13,16,16),c);g.position.set(m.x,m.y+.16,m.z);const y=new ie(new et(.06,12,12),h);y.position.set(m.x,m.y+.16,m.z+.09),e.add(u,g,y)});for(const m of[-.38,.38]){const u=new ie(new Ft(.09,.35,12),f);u.rotation.z=-m*.5,u.position.set(m,.55,-.1),e.add(u)}}else if(t==="hero"){const _=new ie(new vt(.68,.2,.16),f);_.position.set(0,.38,.28),e.add(_);const m=new ie(new Qo(.2),d);m.scale.set(1,1,.2),m.position.set(0,.15,.34),n.add(m);const u=new Ye({color:14251782,roughness:.4,side:hn}),g=new $s(.95,1.25,8,8),y=new ie(g,u);y.position.set(0,.1,-.34),y.rotation.x=.2,n.add(y)}else for(const _ of[-.3,.3]){const m=new ie(new et(.16,12,12),l);m.position.set(_,.68,0),e.add(m)}}function Wb(t,e=.12,n="blank"){const i=new Qe,s=new rv().load(t);s.colorSpace=Cn;const o=new Ye({map:s,roughness:.3,metalness:.05,side:hn,alphaTest:.05}),a=new Qe;a.position.set(0,1,0),i.add(a);const l=new Qe,c=new Qe,h=new Qe,d=new Qe,f=new Qe,p=new Qe,v=sv(n),_=un(v.body),m=new ie(_,o);m.castShadow=!0,m.receiveShadow=!0,a.add(m),l.position.set(v.head.posX,v.head.posY,v.head.posZ),a.add(l);const u=un(v.head),g=new ie(u,o);g.position.set(0,v.head.h/2,0),g.castShadow=!0,l.add(g),c.position.set(v.leftArm.posX,v.leftArm.posY,v.leftArm.posZ),a.add(c);const y=un(v.leftArm),M=new ie(y,o);M.position.set(-v.leftArm.w/2,-v.leftArm.h/2,0),M.castShadow=!0,c.add(M),h.position.set(v.rightArm.posX,v.rightArm.posY,v.rightArm.posZ),a.add(h);const C=un(v.rightArm),E=new ie(C,o);E.position.set(v.rightArm.w/2,-v.rightArm.h/2,0),E.castShadow=!0,h.add(E),d.position.set(v.leftLeg.posX,v.leftLeg.posY,v.leftLeg.posZ),a.add(d);const T=un(v.leftLeg),R=new ie(T,o);R.position.set(0,-v.leftLeg.h/2,0),R.castShadow=!0,d.add(R),f.position.set(v.rightLeg.posX,v.rightLeg.posY,v.rightLeg.posZ),a.add(f);const w=un(v.rightLeg),S=new ie(w,o);S.position.set(0,-v.rightLeg.h/2,0),S.castShadow=!0,f.add(S),p.position.set(v.tail.posX,v.tail.posY,v.tail.posZ),a.add(p);const D=un(v.tail);let L=o;n.toLowerCase()==="rocket"&&(L=new Ye({map:s,emissive:new Xe(16755200),emissiveIntensity:.7,roughness:.2,side:hn}));const O=new ie(D,L);O.position.set(v.tail.offsetX||0,v.tail.offsetY||-v.tail.h/2,0),O.castShadow=!0,p.add(O),ov(n.toLowerCase(),l,a,c,h,d,f,p,o);const $=new Xh(.7,16),q=new ua({color:0,transparent:!0,opacity:.25,side:hn}),X=new ie($,q);return X.rotation.x=-Math.PI/2,X.position.y=.01,i.add(X),i.articulatedBones={bodyBone:a,headBone:l,leftArmBone:c,rightArmBone:h,leftLegBone:d,rightLegBone:f,tailBone:p,templateId:n},i}function Xb(t,e){const n=new Qe;if(t==="trampoline"){const i=new ie(new Ji(1,.1,12,24),new Ye({color:"#7e22ce",roughness:.3}));i.rotation.x=Math.PI/2,i.position.y=.3;const r=new ie(new ut(.9,.9,.05,24),new Ye({color:"#3b82f6",roughness:.4}));r.position.y=.28;for(let s=0;s<4;s++){const o=s*Math.PI/2,a=new ie(new ut(.04,.04,.3),new Ye({color:"#334155"}));a.position.set(Math.cos(o)*.9,.15,Math.sin(o)*.9),n.add(a)}n.add(i,r)}else if(t==="beachball"){const i=new ie(new et(.6,16,16),new Ye({color:e||"#ef4444",roughness:.2,metalness:.1}));i.position.y=.6,i.castShadow=!0,n.add(i)}else if(t==="candy_tree"){const i=new ie(new ut(.12,.18,1.2),new Ye({color:"#78350f"}));i.position.y=.6;const r=new ie(new et(.7,16,16),new Ye({color:"#ec4899",roughness:.3}));r.position.y=1.4,n.add(i,r)}else if(t==="treat_apple"){const i=new ie(new et(.35,12,12),new Ye({color:"#f97316",roughness:.3}));i.position.y=.35;const r=new ie(new ut(.02,.02,.15),new Ye({color:"#78350f"}));r.position.y=.7,n.add(i,r)}else{const i=new ie(new Ji(.8,.12,12,24),new Ye({color:"#06b6d4",emissive:"#06b6d4",emissiveIntensity:.6}));i.rotation.x=Math.PI/2,i.position.y=.1,n.add(i)}return n}/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),av=(...t)=>t.filter((e,n,i)=>!!e&&i.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var qb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=ue.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>ue.createElement("svg",{ref:l,...qb,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:av("lucide",r),...a},[...o.map(([c,h])=>ue.createElement(c,h)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=(t,e)=>{const n=ue.forwardRef(({className:i,...r},s)=>ue.createElement($b,{ref:s,iconNode:e,className:av(`lucide-${Yb(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=Je("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=Je("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=Je("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qb=Je("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eT=Je("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zr=Je("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=Je("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tT=Je("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nT=Je("Disc",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=Je("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iT=Je("Eraser",[["path",{d:"m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",key:"182aya"}],["path",{d:"M22 21H7",key:"t4ddhn"}],["path",{d:"m5 11 9 9",key:"1mo9qw"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rT=Je("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=Je("Film",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=Je("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sT=Je("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oT=Je("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=Je("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gs=Je("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aT=Je("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=Je("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=Je("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=Je("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lT=Je("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cT=Je("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uT=Je("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=Je("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ps=Je("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rr=Je("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dT=Je("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=Je("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ea=Je("Trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"yh07w9"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hT=Je("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fT=Je("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pT=Je("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mT=Je("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=Je("WandSparkles",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Js=Je("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),r0=({keyframes:t,currentTime:e,duration:n,isPlaying:i,loop:r,fps:s,speed:o,showOnionSkin:a,selectedKeyframeId:l,onSeek:c,onTogglePlay:h,onStop:d,onToggleLoop:f,onToggleOnionSkin:p,onChangeSpeed:v,onChangeFps:_,onAddKeyframe:m,onDeleteKeyframe:u,onSelectKeyframe:g,onCopyKeyframe:y})=>{const M=Math.min(100,e/n*100),C=(R,w)=>{const S=R-w.left,D=Math.max(0,Math.min(1,S/w.width)),L=Math.round(D*n*10)/10;c(L)},E=R=>{const w=R.currentTarget.getBoundingClientRect();C(R.clientX,w)},T=R=>{if(R.touches.length>0){const w=R.currentTarget.getBoundingClientRect();C(R.touches[0].clientX,w)}};return x.jsxs("div",{className:"bg-slate-900 border-t border-slate-800 p-3 flex flex-col gap-2.5 z-30 shadow-2xl",children:[x.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[x.jsxs("div",{className:"flex items-center gap-2",children:[x.jsx("button",{onClick:()=>{yt(),h()},className:`p-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all shadow-lg ${i?"bg-amber-500 text-slate-950 shadow-amber-500/20":"bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-emerald-500/20 scale-105"}`,children:i?x.jsxs(x.Fragment,{children:[x.jsx(aT,{className:"w-4 h-4 fill-slate-950"})," Pause"]}):x.jsxs(x.Fragment,{children:[x.jsx(dv,{className:"w-4 h-4 fill-slate-950"})," Play Movie"]})}),x.jsx("button",{onClick:d,className:"p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors",title:"Stop & Return to Start",children:x.jsx(dT,{className:"w-4 h-4 fill-slate-300"})}),x.jsxs("button",{onClick:f,className:`p-2 rounded-xl border transition-all text-xs font-bold flex items-center gap-1 ${r?"bg-purple-600/30 border-purple-500 text-purple-300":"bg-slate-800 border-slate-700 text-slate-400"}`,title:"Loop Playback",children:[x.jsx(uT,{className:"w-4 h-4"})," Loop"]}),x.jsxs("button",{onClick:p,className:`px-2.5 py-1.5 rounded-xl border transition-all text-xs font-bold flex items-center gap-1 ${a?"bg-sky-600/30 border-sky-500 text-sky-300":"bg-slate-800 border-slate-700 text-slate-400"}`,title:"Show Previous Pose Ghost",children:[x.jsx(rT,{className:"w-4 h-4"})," Onion Skin"]})]}),x.jsxs("div",{className:"flex items-center gap-2 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800 font-mono text-xs",children:[x.jsxs("span",{className:"text-amber-400 font-bold",children:[e.toFixed(1),"s"]}),x.jsx("span",{className:"text-slate-600",children:"/"}),x.jsxs("span",{className:"text-slate-400",children:[n.toFixed(1),"s"]})]}),x.jsxs("div",{className:"flex items-center gap-2",children:[x.jsxs("button",{onClick:()=>{Ht(),m()},className:"flex items-center gap-1.5 px-3 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md transition-all active:scale-95",children:[x.jsx(hv,{className:"w-4 h-4"})," + Record Keyframe"]}),l&&x.jsxs(x.Fragment,{children:[x.jsx("button",{onClick:()=>y(l),className:"p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors",title:"Duplicate Selected Pose Keyframe",children:x.jsx(tT,{className:"w-4 h-4"})}),x.jsx("button",{onClick:()=>u(l),disabled:t.length<=1,className:"p-2 rounded-xl bg-slate-800 hover:bg-rose-900/50 hover:text-rose-400 text-slate-400 transition-colors disabled:opacity-30",title:"Delete Keyframe",children:x.jsx(Hd,{className:"w-4 h-4"})})]}),x.jsxs("select",{value:o,onChange:R=>v(parseFloat(R.target.value)),className:"bg-slate-800 text-slate-300 font-bold text-xs px-2 py-1.5 rounded-xl border border-slate-700 focus:outline-none",children:[x.jsx("option",{value:.5,children:"0.5x Slow"}),x.jsx("option",{value:1,children:"1.0x Normal"}),x.jsx("option",{value:1.5,children:"1.5x Fast"}),x.jsx("option",{value:2,children:"2.0x Turbo"})]})]})]}),x.jsxs("div",{onClick:E,onTouchStart:T,onTouchMove:T,className:"w-full h-12 bg-slate-950 border border-slate-800 rounded-2xl relative cursor-pointer overflow-hidden flex items-center px-2 shadow-inner group touch-none",children:[Array.from({length:Math.ceil(n)+1}).map((R,w)=>{const S=w/n*100;return x.jsx("div",{style:{left:`${S}%`},className:"absolute top-0 bottom-0 border-l border-slate-800/80 flex flex-col justify-between pt-1 pb-1 text-[9px] font-mono text-slate-600 pointer-events-none pl-1",children:x.jsxs("span",{children:[w,"s"]})},w)}),x.jsx("div",{style:{width:`${M}%`},className:"absolute top-0 bottom-0 left-0 bg-purple-600/15 border-r-2 border-amber-400 transition-all duration-75 pointer-events-none"}),x.jsx("div",{style:{left:`${M}%`},className:"absolute top-0 bottom-0 w-1 bg-amber-400 -translate-x-1/2 shadow-[0_0_12px_rgba(251,191,36,0.8)] z-20 pointer-events-none",children:x.jsx("div",{className:"w-3 h-3 bg-amber-400 rounded-full -translate-x-1 -mt-1 shadow-md"})}),t.map(R=>{const w=R.time/n*100,S=R.id===l;return x.jsx("button",{onClick:D=>{D.stopPropagation(),g(R.id)},style:{left:`${w}%`},className:`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rotate-45 rounded-sm transition-transform z-10 flex items-center justify-center ${S?"bg-amber-400 border-2 border-slate-950 scale-125 shadow-lg shadow-amber-400/50":"bg-indigo-500 hover:bg-indigo-400 border border-white/40 hover:scale-110"}`,title:R.label||`Pose at ${R.time.toFixed(1)}s`,children:x.jsx("div",{className:"-rotate-45 text-[8px] font-black text-slate-950",children:"●"})},R.id)})]})]})},gT=[{id:"head",label:"Head 😃",icon:"Smile"},{id:"body",label:"Body Torso 👕",icon:"User"},{id:"leftArm",label:"Left Arm 🖐️",icon:"Hand"},{id:"rightArm",label:"Right Arm ✋",icon:"Hand"},{id:"leftLeg",label:"Left Leg 🦵",icon:"Foot"},{id:"rightLeg",label:"Right Leg 🦵",icon:"Foot"}],s0=({currentPose:t,selectedBone:e,onSelectBone:n,onUpdateBoneTransform:i,onApplyPresetPose:r,onResetPose:s})=>{var c,h;const o=t[e]||{rotation:{x:0,y:0,z:0},position:{x:0,y:0,z:0}},a=(d,f)=>{const p={...o.rotation,[d]:f};i(e,p,o.position)},l=(d,f)=>{const v={...o.position||{x:0,y:0,z:0},[d]:f};i(e,o.rotation,v)};return x.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col gap-4 h-full overflow-y-auto scrollbar-thin",children:[x.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-slate-800",children:[x.jsxs("h3",{className:"font-display font-bold text-sm text-white flex items-center gap-2",children:[x.jsx(Ps,{className:"w-4 h-4 text-purple-400"})," Pose Joint Studio"]}),x.jsxs("button",{onClick:()=>{yt(),s()},className:"flex items-center gap-1 text-[11px] font-bold text-slate-400 hover:text-amber-400 transition-colors",children:[x.jsx(Zh,{className:"w-3.5 h-3.5"})," Reset Pose"]})]}),x.jsxs("div",{className:"flex flex-col gap-1.5",children:[x.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-slate-400",children:"Select Body Joint:"}),x.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:gT.map(d=>{const f=e===d.id;return x.jsxs("button",{onClick:()=>{Ht(),n(d.id)},className:`px-3 py-2 rounded-xl text-xs font-bold flex items-center justify-between transition-all ${f?"bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 font-black":"bg-slate-950 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800"}`,children:[x.jsx("span",{children:d.label}),f&&x.jsx("span",{className:"w-2 h-2 rounded-full bg-slate-950 animate-ping"})]},d.id)})})]}),x.jsxs("div",{className:"bg-slate-950/80 p-3.5 rounded-2xl border border-slate-800 flex flex-col gap-3",children:[x.jsxs("div",{className:"flex items-center justify-between",children:[x.jsxs("span",{className:"text-xs font-bold text-purple-300 capitalize",children:[e," Rotation Angles"]}),x.jsx("span",{className:"text-[10px] text-slate-500 font-mono",children:"Degrees (-180° to 180°)"})]}),x.jsxs("div",{className:"flex flex-col gap-1",children:[x.jsxs("div",{className:"flex justify-between text-xs font-semibold",children:[x.jsx("span",{className:"text-rose-400",children:"Pitch (Forward / Back)"}),x.jsxs("span",{className:"font-mono text-slate-300",children:[Math.round(o.rotation.x),"°"]})]}),x.jsx("input",{type:"range",min:-180,max:180,value:o.rotation.x,onChange:d=>a("x",parseFloat(d.target.value)),className:"w-full accent-rose-500 h-2 bg-slate-800 rounded-lg cursor-pointer"})]}),x.jsxs("div",{className:"flex flex-col gap-1",children:[x.jsxs("div",{className:"flex justify-between text-xs font-semibold",children:[x.jsx("span",{className:"text-emerald-400",children:"Yaw (Twist Left / Right)"}),x.jsxs("span",{className:"font-mono text-slate-300",children:[Math.round(o.rotation.y),"°"]})]}),x.jsx("input",{type:"range",min:-180,max:180,value:o.rotation.y,onChange:d=>a("y",parseFloat(d.target.value)),className:"w-full accent-emerald-500 h-2 bg-slate-800 rounded-lg cursor-pointer"})]}),x.jsxs("div",{className:"flex flex-col gap-1",children:[x.jsxs("div",{className:"flex justify-between text-xs font-semibold",children:[x.jsx("span",{className:"text-sky-400",children:"Roll (Side Tilt)"}),x.jsxs("span",{className:"font-mono text-slate-300",children:[Math.round(o.rotation.z),"°"]})]}),x.jsx("input",{type:"range",min:-180,max:180,value:o.rotation.z,onChange:d=>a("z",parseFloat(d.target.value)),className:"w-full accent-sky-500 h-2 bg-slate-800 rounded-lg cursor-pointer"})]}),e==="body"&&x.jsxs("div",{className:"flex flex-col gap-1 pt-2 border-t border-slate-800",children:[x.jsxs("div",{className:"flex justify-between text-xs font-semibold",children:[x.jsx("span",{className:"text-amber-400",children:"Bounce Height (Y-Pos)"}),x.jsxs("span",{className:"font-mono text-slate-300",children:[(((c=o.position)==null?void 0:c.y)||0).toFixed(2),"m"]})]}),x.jsx("input",{type:"range",min:-.5,max:1.5,step:.05,value:((h=o.position)==null?void 0:h.y)||0,onChange:d=>l("y",parseFloat(d.target.value)),className:"w-full accent-amber-500 h-2 bg-slate-800 rounded-lg cursor-pointer"})]})]}),x.jsxs("div",{className:"flex flex-col gap-2",children:[x.jsxs("label",{className:"text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1",children:[x.jsx(rr,{className:"w-3.5 h-3.5 text-amber-400"})," Instant Pose Presets:"]}),x.jsx("div",{className:"grid grid-cols-2 gap-2",children:Wy.map(d=>x.jsxs("button",{onClick:()=>{yt(),r(d.pose)},className:"px-3 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-200 text-xs font-bold text-left transition-colors flex items-center justify-between group",children:[x.jsx("span",{children:d.name}),x.jsx("span",{className:"text-amber-400 group-hover:scale-125 transition-transform",children:"✨"})]},d.id))})]})]})},xT=[{type:"robot",name:"Sparky Mecha",emoji:"🤖",desc:"Shiny cartoon robot with chest badge"},{type:"monster",name:"Bouncing Beast",emoji:"👾",desc:"Friendly alien monster"},{type:"astronaut",name:"Cosmic Kid",emoji:"👩‍🚀",desc:"Space explorer in heavy suit"},{type:"dino",name:"Roaring Dino",emoji:"🦖",desc:"Prehistoric green friend"},{type:"panda",name:"Kung-Fu Panda",emoji:"🐼",desc:"Cute round martial artist"},{type:"blocky",name:"Craft Blocky",emoji:"🧱",desc:"Voxel block builder"},{type:"doodle",name:"My Hand Drawing",emoji:"🎨",desc:"Kid hand-drawn custom 3D hero"}],vT=[{type:"none",name:"No Prop",emoji:"🚫"},{type:"wand",name:"Magic Wand",emoji:"🪄"},{type:"star",name:"Shining Star",emoji:"⭐"},{type:"balloon",name:"Party Balloon",emoji:"🎈"},{type:"shield",name:"Hero Shield",emoji:"🛡️"}],o0=({character:t,onUpdateCharacter:e,onOpenDrawModal:n})=>{const i=(o,a)=>{if(o==="doodle"&&n){n();return}yt(),e({...t,type:o,name:a})},r=(o,a)=>{e({...t,colors:{...t.colors,[o]:a}})},s=(o,a)=>{Ht(),e({...t,prop:{id:`prop-${Date.now()}`,name:a,type:o,color:t.colors.accent||"#facc15"}})};return x.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col gap-4 h-full overflow-y-auto scrollbar-thin",children:[x.jsx("div",{className:"flex items-center justify-between pb-2 border-b border-slate-800",children:x.jsxs("h3",{className:"font-display font-bold text-sm text-white flex items-center gap-2",children:[x.jsx(Gs,{className:"w-4 h-4 text-purple-400"})," Hero & Costume Customizer"]})}),n&&x.jsxs("button",{onClick:n,className:"p-3.5 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 hover:from-pink-400 hover:to-indigo-500 text-white flex items-center justify-between shadow-xl transition-all active:scale-98 group",children:[x.jsxs("div",{className:"flex items-center gap-3",children:[x.jsx("span",{className:"text-3xl p-1 bg-white/20 rounded-xl",children:"🎨"}),x.jsxs("div",{className:"flex flex-col text-left",children:[x.jsxs("span",{className:"text-xs font-black uppercase tracking-wider text-amber-300 flex items-center gap-1",children:[x.jsx(rr,{className:"w-3.5 h-3.5 fill-amber-300"})," Draw Your Own 3D Hero!"]}),x.jsx("span",{className:"text-[11px] text-white/90",children:"Draw anything & watch it come to life in 3D!"})]})]}),x.jsx("span",{className:"text-xs bg-white text-slate-950 font-black px-2.5 py-1 rounded-xl shadow group-hover:scale-105 transition-transform",children:"Draw!"})]}),x.jsxs("div",{className:"flex flex-col gap-2",children:[x.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-slate-400",children:"Choose Your 3D Hero:"}),x.jsx("div",{className:"grid grid-cols-2 gap-2",children:xT.map(o=>{const a=t.type===o.type;return x.jsxs("button",{onClick:()=>i(o.type,o.name),className:`p-3 rounded-2xl border flex flex-col text-left transition-all ${a?"bg-purple-600/20 border-purple-500 shadow-lg shadow-purple-600/20 ring-1 ring-purple-400":"bg-slate-950 border-slate-800 hover:bg-slate-800"}`,children:[x.jsx("span",{className:"text-2xl mb-1",children:o.emoji}),x.jsx("span",{className:"text-xs font-bold text-white",children:o.name}),x.jsx("span",{className:"text-[10px] text-slate-400 truncate",children:o.desc})]},o.type)})})]}),x.jsxs("div",{className:"bg-slate-950 p-3.5 rounded-2xl border border-slate-800 flex flex-col gap-3",children:[x.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-slate-400",children:"Outfit & Paint Colors:"}),x.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[x.jsxs("div",{className:"flex items-center justify-between bg-slate-900 p-2 rounded-xl border border-slate-800",children:[x.jsx("span",{className:"text-xs font-bold text-slate-300",children:"Primary Body"}),x.jsx("input",{type:"color",value:t.colors.primary,onChange:o=>r("primary",o.target.value),className:"w-7 h-7 rounded-lg border-0 bg-transparent cursor-pointer"})]}),x.jsxs("div",{className:"flex items-center justify-between bg-slate-900 p-2 rounded-xl border border-slate-800",children:[x.jsx("span",{className:"text-xs font-bold text-slate-300",children:"Secondary Trim"}),x.jsx("input",{type:"color",value:t.colors.secondary,onChange:o=>r("secondary",o.target.value),className:"w-7 h-7 rounded-lg border-0 bg-transparent cursor-pointer"})]}),x.jsxs("div",{className:"flex items-center justify-between bg-slate-900 p-2 rounded-xl border border-slate-800",children:[x.jsx("span",{className:"text-xs font-bold text-slate-300",children:"Accent Glow"}),x.jsx("input",{type:"color",value:t.colors.glow,onChange:o=>r("glow",o.target.value),className:"w-7 h-7 rounded-lg border-0 bg-transparent cursor-pointer"})]}),x.jsxs("div",{className:"flex items-center justify-between bg-slate-900 p-2 rounded-xl border border-slate-800",children:[x.jsx("span",{className:"text-xs font-bold text-slate-300",children:"Joint Balls"}),x.jsx("input",{type:"color",value:t.colors.joints,onChange:o=>r("joints",o.target.value),className:"w-7 h-7 rounded-lg border-0 bg-transparent cursor-pointer"})]})]})]}),x.jsxs("div",{className:"flex flex-col gap-2",children:[x.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-slate-400",children:"Hand Prop Item:"}),x.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:vT.map(o=>{const a=t.prop.type===o.type;return x.jsxs("button",{onClick:()=>s(o.type,o.name),className:`p-2 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${a?"bg-amber-500 text-slate-950 border-amber-400 shadow-md font-black":"bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800"}`,children:[x.jsx("span",{className:"text-lg",children:o.emoji}),x.jsx("span",{className:"text-[10px] truncate",children:o.name})]},o.type)})})]})]})},_T=[{theme:"kidsland",name:"3D Kids Land 🌈",emoji:"🏰",desc:"Rainbows, puffy clouds, candy trees & sun"},{theme:"candyland",name:"Sweet Candyland 🍭",emoji:"🍩",desc:"Lollipops, pink skies & cotton candy"},{theme:"toybox",name:"Sunny Toy Box 🧸",emoji:"🎁",desc:"Primary colors & stacked building blocks"},{theme:"fairytale",name:"Fairytale Kingdom 👑",emoji:"🦄",desc:"Enchanted lavender castle grounds"},{theme:"space",name:"Galaxy Outer Space 🚀",emoji:"🪐",desc:"Deep cosmic sky with glowing planets"},{theme:"beach",name:"Sunny Island Beach 🏝️",emoji:"🌊",desc:"Golden sand & azure ocean breeze"},{theme:"neon",name:"Cyber Neon Stage ⚡",emoji:"🌌",desc:"Futuristic glowing neon stage"}],yT=[{id:"perspective",label:"Perspective (Standard)"},{id:"front",label:"Front Director View"},{id:"side",label:"Side Angle View"},{id:"top",label:"Top Overhead View"},{id:"cinematic",label:"Close-up Hero Shot"}],a0=({environment:t,onUpdateEnvironment:e})=>{const n=i=>{yt(),e({...t,theme:i})};return x.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col gap-4 h-full overflow-y-auto scrollbar-thin",children:[x.jsx("div",{className:"flex items-center justify-between pb-2 border-b border-slate-800",children:x.jsxs("h3",{className:"font-display font-bold text-sm text-white flex items-center gap-2",children:[x.jsx(ea,{className:"w-4 h-4 text-emerald-400"})," 3D Stage & Kids Land Studio"]})}),x.jsxs("div",{className:"flex flex-col gap-2",children:[x.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-slate-400",children:"Select World Theme:"}),x.jsx("div",{className:"flex flex-col gap-2",children:_T.map(i=>{const r=t.theme===i.theme;return x.jsxs("button",{onClick:()=>n(i.theme),className:`p-3 rounded-2xl border text-left flex items-center gap-3 transition-all ${r?"bg-emerald-600/20 border-emerald-500 shadow-lg ring-1 ring-emerald-400 text-white":"bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800"}`,children:[x.jsx("span",{className:"text-2xl p-2 bg-slate-900 rounded-xl border border-slate-800",children:i.emoji}),x.jsxs("div",{className:"flex flex-col",children:[x.jsx("span",{className:"text-xs font-bold",children:i.name}),x.jsx("span",{className:"text-[10px] text-slate-400",children:i.desc})]})]},i.theme)})})]}),x.jsxs("div",{className:"bg-slate-950 p-3.5 rounded-2xl border border-slate-800 flex flex-col gap-2",children:[x.jsxs("label",{className:"text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1",children:[x.jsx(zr,{className:"w-3.5 h-3.5 text-amber-400"})," Camera View Angle:"]}),x.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:yT.map(i=>{const r=t.cameraPreset===i.id;return x.jsx("button",{onClick:()=>e({...t,cameraPreset:i.id}),className:`p-2 rounded-xl text-xs font-bold border transition-all ${r?"bg-amber-500 text-slate-950 border-amber-400 font-black":"bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800"}`,children:i.label},i.id)})})]}),x.jsxs("div",{className:"bg-slate-950 p-3.5 rounded-2xl border border-slate-800 flex flex-col gap-3",children:[x.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-slate-400",children:"Stage Display Options:"}),x.jsxs("div",{className:"flex items-center justify-between",children:[x.jsx("span",{className:"text-xs font-bold text-slate-300",children:"Show Ground Grid"}),x.jsx("input",{type:"checkbox",checked:t.showGrid,onChange:i=>e({...t,showGrid:i.target.checked}),className:"w-4 h-4 accent-emerald-500 cursor-pointer"})]}),x.jsxs("div",{className:"flex items-center justify-between",children:[x.jsx("span",{className:"text-xs font-bold text-slate-300",children:"Floating Sparkle Particles"}),x.jsx("input",{type:"checkbox",checked:t.particlesEnabled,onChange:i=>e({...t,particlesEnabled:i.target.checked}),className:"w-4 h-4 accent-purple-500 cursor-pointer"})]})]})]})},l0=()=>{const[t,e]=ue.useState(!1),n=()=>{const i=!t;e(i),Ub(i)};return x.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col gap-4 h-full overflow-y-auto scrollbar-thin",children:[x.jsx("div",{className:"flex items-center justify-between pb-2 border-b border-slate-800",children:x.jsxs("h3",{className:"font-display font-bold text-sm text-white flex items-center gap-2",children:[x.jsx(zd,{className:"w-4 h-4 text-pink-400"})," Sound Effects & Background Beat"]})}),x.jsxs("div",{className:"flex flex-col gap-2",children:[x.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-slate-400",children:"Instant Sound FX Buttons:"}),x.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[x.jsxs("button",{onClick:yt,className:"p-3 rounded-2xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-left flex items-center gap-2.5 text-xs font-bold text-amber-300 transition-colors",children:[x.jsx("span",{className:"text-xl",children:"🏀"})," Cartoon Boing"]}),x.jsxs("button",{onClick:Ht,className:"p-3 rounded-2xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-left flex items-center gap-2.5 text-xs font-bold text-sky-300 transition-colors",children:[x.jsx("span",{className:"text-xl",children:"🎈"})," Bubble Pop"]}),x.jsxs("button",{onClick:Mo,className:"p-3 rounded-2xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-left flex items-center gap-2.5 text-xs font-bold text-emerald-300 transition-colors",children:[x.jsx("span",{className:"text-xl",children:"👣"})," March Step"]}),x.jsxs("button",{onClick:Fr,className:"p-3 rounded-2xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-left flex items-center gap-2.5 text-xs font-bold text-purple-300 transition-colors",children:[x.jsx("span",{className:"text-xl",children:"🎺"})," Victory Fanfare"]})]})]}),x.jsxs("div",{className:"bg-slate-950 p-4 rounded-2xl border border-slate-800 flex flex-col gap-3",children:[x.jsxs("div",{className:"flex items-center justify-between",children:[x.jsxs("span",{className:"text-xs font-bold text-white flex items-center gap-2",children:[x.jsx(nT,{className:`w-4 h-4 text-pink-400 ${t?"animate-spin":""}`}),"Background Cartoon Beat"]}),x.jsx("button",{onClick:n,className:`px-3 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all ${t?"bg-pink-600 text-white shadow-lg shadow-pink-600/30":"bg-slate-800 text-slate-400 hover:text-white"}`,children:t?x.jsxs(x.Fragment,{children:[x.jsx(pT,{className:"w-4 h-4"})," Playing"]}):x.jsxs(x.Fragment,{children:[x.jsx(mT,{className:"w-4 h-4"})," Muted"]})})]}),x.jsx("p",{className:"text-[11px] text-slate-400 leading-relaxed",children:"Play cheerful 8-bit synthesizer loops in the background while animating your 3D Kids Land movie!"})]})]})},MT=({projectTitle:t,onUpdateTitle:e,onOpenAIModal:n,onOpenExportModal:i,onOpenDrawModal:r,onOpenUploadModal:s,onOpenPrintModal:o,onLoadPresetClip:a,onResetProject:l,onOpenHelp:c})=>{const[h,d]=ue.useState(!1),f=p=>{yt(),a(p),d(!1)};return x.jsxs("header",{className:"bg-slate-900/90 backdrop-blur-xl border-b border-slate-800 px-2.5 py-2 sm:px-4 sm:py-3 flex items-center justify-between gap-2 shadow-xl z-40 relative",children:[x.jsxs("div",{className:"flex items-center gap-2 sm:gap-3 min-w-0",children:[x.jsx("div",{className:"flex items-center gap-2 bg-gradient-to-r from-pink-500 via-purple-500 to-sky-400 p-1.5 sm:p-2.5 rounded-xl sm:rounded-2xl shadow-lg shadow-pink-500/20 shrink-0",children:x.jsx(ea,{className:"w-4 h-4 sm:w-6 sm:h-6 text-white"})}),x.jsxs("div",{className:"min-w-0",children:[x.jsxs("h1",{className:"font-display font-black text-xs sm:text-lg text-white tracking-wide flex items-center gap-1 truncate",children:[x.jsx("span",{className:"truncate",children:"3D Paper World"}),x.jsx("span",{className:"hidden sm:inline-block bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-sans font-extrabold text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded-full uppercase",children:"KIDS PLAYGROUND 🌈"})]}),x.jsxs("div",{className:"flex items-center gap-1 text-[10px] sm:text-xs",children:[x.jsx("span",{className:"text-slate-400 hidden xs:inline",children:"World:"}),x.jsx("input",{type:"text",value:t,onChange:p=>e(p.target.value),className:"bg-transparent hover:bg-slate-800/80 focus:bg-slate-950 text-amber-300 font-bold px-1 py-0.5 rounded focus:outline-none focus:ring-1 focus:ring-amber-400 text-[10px] sm:text-xs transition-colors truncate max-w-[100px] sm:max-w-none"})]})]})]}),x.jsxs("div",{className:"flex items-center gap-1.5 sm:gap-2 shrink-0",children:[o&&x.jsxs("button",{onClick:o,className:"flex items-center gap-1 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-lg sm:rounded-xl bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 hover:from-sky-300 hover:to-indigo-500 text-white font-black text-[11px] sm:text-xs shadow-md transition-transform active:scale-95 uppercase tracking-wider",title:"Print paper drawing templates for kids",children:[x.jsx(Bd,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300"}),x.jsx("span",{className:"hidden lg:inline",children:"🖨️ Print Templates"}),x.jsx("span",{className:"lg:hidden",children:"🖨️ Print"})]}),s&&x.jsxs("button",{onClick:s,className:"flex items-center gap-1 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-lg sm:rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-[11px] sm:text-xs shadow-md transition-transform active:scale-95 uppercase tracking-wider",title:"Upload photo of paper drawing",children:[x.jsx(zr,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"}),x.jsx("span",{className:"hidden md:inline",children:"📷 Upload Paper Drawing"}),x.jsx("span",{className:"md:hidden",children:"📷 Photo"})]}),r&&x.jsxs("button",{onClick:r,className:"flex items-center gap-1 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-lg sm:rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-black text-[11px] sm:text-xs shadow-md transition-transform active:scale-95",title:"Draw screen hero",children:[x.jsx(Gs,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"}),x.jsx("span",{className:"hidden sm:inline",children:"🎨 Draw Hero"}),x.jsx("span",{className:"sm:hidden",children:"🎨 Draw"})]}),x.jsxs("div",{className:"relative",children:[x.jsxs("button",{onClick:()=>d(p=>!p),className:"flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs shadow-lg transition-transform active:scale-95",children:[x.jsx(Kh,{className:"w-4 h-4"})," Presets"]}),h&&x.jsxs(x.Fragment,{children:[x.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>d(!1)}),x.jsxs("div",{className:"absolute right-0 top-full mt-2 w-64 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-2 flex flex-col gap-1 z-50",children:[Ar.map(p=>x.jsxs("button",{onClick:()=>f(p),className:"flex items-start gap-2 p-2.5 rounded-xl hover:bg-slate-800 text-left transition-colors",children:[x.jsx(dv,{className:"w-4 h-4 text-emerald-400 mt-0.5 shrink-0"}),x.jsxs("span",{className:"flex flex-col",children:[x.jsx("span",{className:"text-xs font-bold text-white",children:p.name}),x.jsx("span",{className:"text-[10px] text-slate-400",children:p.description})]})]},p.id)),x.jsxs("button",{onClick:()=>{yt(),l(),d(!1)},className:"flex items-center gap-2 p-2.5 rounded-xl hover:bg-rose-900/40 text-rose-300 text-left transition-colors border-t border-slate-800 mt-1 pt-2.5",children:[x.jsx(Zh,{className:"w-4 h-4 shrink-0"}),x.jsx("span",{className:"text-xs font-bold",children:"Reset Project"})]})]})]})]}),x.jsxs("button",{onClick:n,className:"flex items-center gap-1 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-lg sm:rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-[11px] sm:text-xs shadow-md transition-transform active:scale-95",title:"AI Director",children:[x.jsx(Jh,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"}),x.jsx("span",{className:"hidden sm:inline",children:"AI Director"}),x.jsx("span",{className:"sm:hidden",children:"AI"})]}),x.jsxs("button",{onClick:i,className:"flex items-center gap-1 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-lg sm:rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-[11px] sm:text-xs shadow-md transition-transform active:scale-95",title:"Photo Booth",children:[x.jsx(zr,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"}),x.jsx("span",{className:"hidden md:inline",children:"Photo Booth"})]}),x.jsx("button",{onClick:c,title:"How to animate guide",className:"p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors",children:x.jsx(lv,{className:"w-4 h-4 sm:w-5 sm:h-5"})})]})]})},as=(t,e)=>{if(!t||typeof t!="object")return e;const n=t.rotation&&typeof t.rotation=="object"?t.rotation:t;return{x:typeof n.x=="number"?n.x:e.x,y:typeof n.y=="number"?n.y:e.y,z:typeof n.z=="number"?n.z:e.z}},ST=["Make the character do a hilarious backflip and land in a superhero pose!","Dancing disco fever with arms waving up and down!","Curious alien tilt looking left and right with a big wave","Excited victory jump celebrating with hands in the air"],wT=({isOpen:t,onClose:e,characterType:n,onApplyAIKeyframes:i})=>{const[r,s]=ue.useState(""),[o,a]=ue.useState(!1),[l,c]=ue.useState(null);if(!t)return null;const h=async()=>{if(r.trim()){a(!0),c(null);try{const p=await(await fetch("/api/ai/suggest-animation",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:r,characterType:n,availableBones:["head","leftArm","rightArm","leftLeg","rightLeg","body"]})})).json();if(p.success&&p.data&&p.data.keyframes){const v=p.data.keyframes.map((_,m)=>{var u,g,y,M,C,E;return{id:`ai-kf-${m}-${Date.now()}`,time:_.time??m*.5,label:`AI: ${_.label||"Pose "+(m+1)}`,pose:{body:{rotation:as((u=_.pose)==null?void 0:u.body,{x:0,y:0,z:0})},head:{rotation:as((g=_.pose)==null?void 0:g.head,{x:0,y:0,z:0})},leftArm:{rotation:as((y=_.pose)==null?void 0:y.leftArm,{x:0,y:0,z:15})},rightArm:{rotation:as((M=_.pose)==null?void 0:M.rightArm,{x:0,y:0,z:-15})},leftLeg:{rotation:as((C=_.pose)==null?void 0:C.leftLeg,{x:0,y:0,z:0})},rightLeg:{rotation:as((E=_.pose)==null?void 0:E.rightLeg,{x:0,y:0,z:0})},tail:{rotation:{x:0,y:0,z:0}},accessory:{rotation:{x:0,y:0,z:0}}}}});Fr(),i(v),e()}else d()}catch{d()}finally{a(!1)}}},d=()=>{yt();const f=Ar[Math.floor(Math.random()*Ar.length)];i(f.keyframes),e()};return x.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in",children:x.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl w-full max-w-lg p-6 flex flex-col gap-5 relative",children:[x.jsx("button",{onClick:e,className:"absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800",children:x.jsx(Js,{className:"w-5 h-5"})}),x.jsxs("div",{className:"flex items-center gap-3",children:[x.jsx("div",{className:"p-3 bg-purple-500/20 text-purple-400 rounded-2xl border border-purple-500/30",children:x.jsx(Jh,{className:"w-6 h-6"})}),x.jsxs("div",{children:[x.jsx("h3",{className:"font-display font-bold text-lg text-white",children:"AI Director Assistant 🪄"}),x.jsx("p",{className:"text-xs text-slate-400",children:"Describe a movement, dance, or flip for your 3D hero!"})]})]}),x.jsxs("div",{className:"flex flex-col gap-2",children:[x.jsx("textarea",{value:r,onChange:f=>s(f.target.value),placeholder:"e.g., Do a funny robot dance with high jumps and hand waves!",className:"w-full bg-slate-950 text-white rounded-xl p-3 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500 text-xs h-24 resize-none"}),x.jsxs("div",{className:"flex flex-col gap-1.5 mt-1",children:[x.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-slate-500",children:"Or Try One of These Ideas:"}),x.jsx("div",{className:"flex flex-col gap-1",children:ST.map((f,p)=>x.jsxs("button",{onClick:()=>s(f),className:"text-left text-[11px] p-2 bg-slate-950 hover:bg-slate-800 text-slate-300 rounded-lg border border-slate-800/80 transition-colors truncate",children:['✨ "',f,'"']},p))})]})]}),x.jsx("button",{onClick:h,disabled:o||!r.trim(),className:"w-full py-3 bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2",children:o?x.jsxs(x.Fragment,{children:[x.jsx(oT,{className:"w-4 h-4 animate-spin"})," AI Generating 3D Keyframes..."]}):x.jsxs(x.Fragment,{children:[x.jsx(rr,{className:"w-4 h-4"})," Animate Hero with AI Magic"]})})]})})};var Qh={};(function t(e,n,i,r){var s=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),o=typeof Path2D=="function"&&typeof DOMMatrix=="function",a=function(){if(!e.OffscreenCanvas)return!1;try{var I=new OffscreenCanvas(1,1),P=I.getContext("2d");P.fillRect(0,0,1,1);var ae=I.transferToImageBitmap();P.createPattern(ae,"no-repeat")}catch{return!1}return!0}();function l(){}function c(I){var P=n.exports.Promise,ae=P!==void 0?P:e.Promise;return typeof ae=="function"?new ae(I):(I(l,l),null)}var h=function(I,P){return{transform:function(ae){if(I)return ae;if(P.has(ae))return P.get(ae);var me=new OffscreenCanvas(ae.width,ae.height),j=me.getContext("2d");return j.drawImage(ae,0,0),P.set(ae,me),me},clear:function(){P.clear()}}}(a,new Map),d=function(){var I=Math.floor(16.666666666666668),P,ae,me={},j=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(P=function(ee){var F=Math.random();return me[F]=requestAnimationFrame(function H(Y){j===Y||j+I-1<Y?(j=Y,delete me[F],ee()):me[F]=requestAnimationFrame(H)}),F},ae=function(ee){me[ee]&&cancelAnimationFrame(me[ee])}):(P=function(ee){return setTimeout(ee,I)},ae=function(ee){return clearTimeout(ee)}),{frame:P,cancel:ae}}(),f=function(){var I,P,ae={};function me(j){function ee(F,H){j.postMessage({options:F||{},callback:H})}j.init=function(H){var Y=H.transferControlToOffscreen();j.postMessage({canvas:Y},[Y])},j.fire=function(H,Y,he){if(P)return ee(H,null),P;var ge=Math.random().toString(36).slice(2);return P=c(function(U){function Ce(Te){Te.data.callback===ge&&(delete ae[ge],j.removeEventListener("message",Ce),P=null,h.clear(),he(),U())}j.addEventListener("message",Ce),ee(H,ge),ae[ge]=Ce.bind(null,{data:{callback:ge}})}),P},j.reset=function(){j.postMessage({reset:!0});for(var H in ae)ae[H](),delete ae[H]}}return function(){if(I)return I;if(!i&&s){var j=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{I=new Worker(URL.createObjectURL(new Blob([j])))}catch(ee){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",ee),null}me(I)}return I}}(),p={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function v(I,P){return P?P(I):I}function _(I){return I!=null}function m(I,P,ae){return v(I&&_(I[P])?I[P]:p[P],ae)}function u(I){return I<0?0:Math.floor(I)}function g(I,P){return Math.floor(Math.random()*(P-I))+I}function y(I){return parseInt(I,16)}function M(I){return I.map(C)}function C(I){var P=String(I).replace(/[^0-9a-f]/gi,"");return P.length<6&&(P=P[0]+P[0]+P[1]+P[1]+P[2]+P[2]),{r:y(P.substring(0,2)),g:y(P.substring(2,4)),b:y(P.substring(4,6))}}function E(I){var P=m(I,"origin",Object);return P.x=m(P,"x",Number),P.y=m(P,"y",Number),P}function T(I){I.width=document.documentElement.clientWidth,I.height=document.documentElement.clientHeight}function R(I){var P=I.getBoundingClientRect();I.width=P.width,I.height=P.height}function w(I){var P=document.createElement("canvas");return P.style.position="fixed",P.style.top="0px",P.style.left="0px",P.style.pointerEvents="none",P.style.zIndex=I,P}function S(I,P,ae,me,j,ee,F,H,Y){I.save(),I.translate(P,ae),I.rotate(ee),I.scale(me,j),I.arc(0,0,1,F,H,Y),I.restore()}function D(I){var P=I.angle*(Math.PI/180),ae=I.spread*(Math.PI/180);return{x:I.x,y:I.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:I.startVelocity*.5+Math.random()*I.startVelocity,angle2D:-P+(.5*ae-Math.random()*ae),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:I.color,shape:I.shape,tick:0,totalTicks:I.ticks,decay:I.decay,drift:I.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:I.gravity*3,ovalScalar:.6,scalar:I.scalar,flat:I.flat}}function L(I,P){P.x+=Math.cos(P.angle2D)*P.velocity+P.drift,P.y+=Math.sin(P.angle2D)*P.velocity+P.gravity,P.velocity*=P.decay,P.flat?(P.wobble=0,P.wobbleX=P.x+10*P.scalar,P.wobbleY=P.y+10*P.scalar,P.tiltSin=0,P.tiltCos=0,P.random=1):(P.wobble+=P.wobbleSpeed,P.wobbleX=P.x+10*P.scalar*Math.cos(P.wobble),P.wobbleY=P.y+10*P.scalar*Math.sin(P.wobble),P.tiltAngle+=.1,P.tiltSin=Math.sin(P.tiltAngle),P.tiltCos=Math.cos(P.tiltAngle),P.random=Math.random()+2);var ae=P.tick++/P.totalTicks,me=P.x+P.random*P.tiltCos,j=P.y+P.random*P.tiltSin,ee=P.wobbleX+P.random*P.tiltCos,F=P.wobbleY+P.random*P.tiltSin;if(I.fillStyle="rgba("+P.color.r+", "+P.color.g+", "+P.color.b+", "+(1-ae)+")",I.beginPath(),o&&P.shape.type==="path"&&typeof P.shape.path=="string"&&Array.isArray(P.shape.matrix))I.fill(ne(P.shape.path,P.shape.matrix,P.x,P.y,Math.abs(ee-me)*.1,Math.abs(F-j)*.1,Math.PI/10*P.wobble));else if(P.shape.type==="bitmap"){var H=Math.PI/10*P.wobble,Y=Math.abs(ee-me)*.1,he=Math.abs(F-j)*.1,ge=P.shape.bitmap.width*P.scalar,U=P.shape.bitmap.height*P.scalar,Ce=new DOMMatrix([Math.cos(H)*Y,Math.sin(H)*Y,-Math.sin(H)*he,Math.cos(H)*he,P.x,P.y]);Ce.multiplySelf(new DOMMatrix(P.shape.matrix));var Te=I.createPattern(h.transform(P.shape.bitmap),"no-repeat");Te.setTransform(Ce),I.globalAlpha=1-ae,I.fillStyle=Te,I.fillRect(P.x-ge/2,P.y-U/2,ge,U),I.globalAlpha=1}else if(P.shape==="circle")I.ellipse?I.ellipse(P.x,P.y,Math.abs(ee-me)*P.ovalScalar,Math.abs(F-j)*P.ovalScalar,Math.PI/10*P.wobble,0,2*Math.PI):S(I,P.x,P.y,Math.abs(ee-me)*P.ovalScalar,Math.abs(F-j)*P.ovalScalar,Math.PI/10*P.wobble,0,2*Math.PI);else if(P.shape==="star")for(var _e=Math.PI/2*3,we=4*P.scalar,Ie=8*P.scalar,Ee=P.x,ye=P.y,Ge=5,k=Math.PI/Ge;Ge--;)Ee=P.x+Math.cos(_e)*Ie,ye=P.y+Math.sin(_e)*Ie,I.lineTo(Ee,ye),_e+=k,Ee=P.x+Math.cos(_e)*we,ye=P.y+Math.sin(_e)*we,I.lineTo(Ee,ye),_e+=k;else I.moveTo(Math.floor(P.x),Math.floor(P.y)),I.lineTo(Math.floor(P.wobbleX),Math.floor(j)),I.lineTo(Math.floor(ee),Math.floor(F)),I.lineTo(Math.floor(me),Math.floor(P.wobbleY));return I.closePath(),I.fill(),P.tick<P.totalTicks}function O(I,P,ae,me,j){var ee=P.slice(),F=I.getContext("2d"),H,Y,he=c(function(ge){function U(){H=Y=null,F.clearRect(0,0,me.width,me.height),h.clear(),j(),ge()}function Ce(){i&&!(me.width===r.width&&me.height===r.height)&&(me.width=I.width=r.width,me.height=I.height=r.height),!me.width&&!me.height&&(ae(I),me.width=I.width,me.height=I.height),F.clearRect(0,0,me.width,me.height),ee=ee.filter(function(Te){return L(F,Te)}),ee.length?H=d.frame(Ce):U()}H=d.frame(Ce),Y=U});return{addFettis:function(ge){return ee=ee.concat(ge),he},canvas:I,promise:he,reset:function(){H&&d.cancel(H),Y&&Y()}}}function $(I,P){var ae=!I,me=!!m(P||{},"resize"),j=!1,ee=m(P,"disableForReducedMotion",Boolean),F=s&&!!m(P||{},"useWorker"),H=F?f():null,Y=ae?T:R,he=I&&H?!!I.__confetti_initialized:!1,ge=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,U;function Ce(_e,we,Ie){for(var Ee=m(_e,"particleCount",u),ye=m(_e,"angle",Number),Ge=m(_e,"spread",Number),k=m(_e,"startVelocity",Number),b=m(_e,"decay",Number),Z=m(_e,"gravity",Number),le=m(_e,"drift",Number),ce=m(_e,"colors",M),de=m(_e,"ticks",Number),Le=m(_e,"shapes"),ve=m(_e,"scalar"),Me=!!m(_e,"flat"),Ue=E(_e),re=Ee,Re=[],Ve=I.width*Ue.x,Oe=I.height*Ue.y;re--;)Re.push(D({x:Ve,y:Oe,angle:ye,spread:Ge,startVelocity:k,color:ce[re%ce.length],shape:Le[g(0,Le.length)],ticks:de,decay:b,gravity:Z,drift:le,scalar:ve,flat:Me}));return U?U.addFettis(Re):(U=O(I,Re,Y,we,Ie),U.promise)}function Te(_e){var we=ee||m(_e,"disableForReducedMotion",Boolean),Ie=m(_e,"zIndex",Number);if(we&&ge)return c(function(k){k()});ae&&U?I=U.canvas:ae&&!I&&(I=w(Ie),document.body.appendChild(I)),me&&!he&&Y(I);var Ee={width:I.width,height:I.height};H&&!he&&H.init(I),he=!0,H&&(I.__confetti_initialized=!0);function ye(){if(H){var k={getBoundingClientRect:function(){if(!ae)return I.getBoundingClientRect()}};Y(k),H.postMessage({resize:{width:k.width,height:k.height}});return}Ee.width=Ee.height=null}function Ge(){U=null,me&&(j=!1,e.removeEventListener("resize",ye)),ae&&I&&(document.body.contains(I)&&document.body.removeChild(I),I=null,he=!1)}return me&&!j&&(j=!0,e.addEventListener("resize",ye,!1)),H?H.fire(_e,Ee,Ge):Ce(_e,Ee,Ge)}return Te.reset=function(){H&&H.reset(),U&&U.reset()},Te}var q;function X(){return q||(q=$(null,{useWorker:!0,resize:!0})),q}function ne(I,P,ae,me,j,ee,F){var H=new Path2D(I),Y=new Path2D;Y.addPath(H,new DOMMatrix(P));var he=new Path2D;return he.addPath(Y,new DOMMatrix([Math.cos(F)*j,Math.sin(F)*j,-Math.sin(F)*ee,Math.cos(F)*ee,ae,me])),he}function z(I){if(!o)throw new Error("path confetti are not supported in this browser");var P,ae;typeof I=="string"?P=I:(P=I.path,ae=I.matrix);var me=new Path2D(P),j=document.createElement("canvas"),ee=j.getContext("2d");if(!ae){for(var F=1e3,H=F,Y=F,he=0,ge=0,U,Ce,Te=0;Te<F;Te+=2)for(var _e=0;_e<F;_e+=2)ee.isPointInPath(me,Te,_e,"nonzero")&&(H=Math.min(H,Te),Y=Math.min(Y,_e),he=Math.max(he,Te),ge=Math.max(ge,_e));U=he-H,Ce=ge-Y;var we=10,Ie=Math.min(we/U,we/Ce);ae=[Ie,0,0,Ie,-Math.round(U/2+H)*Ie,-Math.round(Ce/2+Y)*Ie]}return{type:"path",path:P,matrix:ae}}function oe(I){var P,ae=1,me="#000000",j='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof I=="string"?P=I:(P=I.text,ae="scalar"in I?I.scalar:ae,j="fontFamily"in I?I.fontFamily:j,me="color"in I?I.color:me);var ee=10*ae,F=""+ee+"px "+j,H=new OffscreenCanvas(ee,ee),Y=H.getContext("2d");Y.font=F;var he=Y.measureText(P),ge=Math.ceil(he.actualBoundingBoxRight+he.actualBoundingBoxLeft),U=Math.ceil(he.actualBoundingBoxAscent+he.actualBoundingBoxDescent),Ce=2,Te=he.actualBoundingBoxLeft+Ce,_e=he.actualBoundingBoxAscent+Ce;ge+=Ce+Ce,U+=Ce+Ce,H=new OffscreenCanvas(ge,U),Y=H.getContext("2d"),Y.font=F,Y.fillStyle=me,Y.fillText(P,Te,_e);var we=1/ae;return{type:"bitmap",bitmap:H.transferToImageBitmap(),matrix:[we,0,0,we,-ge*we/2,-U*we/2]}}n.exports=function(){return X().apply(this,arguments)},n.exports.reset=function(){X().reset()},n.exports.create=$,n.exports.shapeFromPath=z,n.exports.shapeFromText=oe})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),Qh,!1);const vc=Qh.exports;Qh.exports.create;const ET=({isOpen:t,onClose:e,project:n})=>{const[i,r]=ue.useState("Director Award 🎬"),[s,o]=ue.useState(!1);if(!t)return null;const a=()=>{o(!0),Fr(),vc({particleCount:100,spread:70,origin:{y:.6}});const c=document.querySelector("canvas");if(c){const h=c.toDataURL("image/png"),d=document.createElement("a");d.download=`${n.title.replace(/\s+/g,"_")}_3D_KidsLand.png`,d.href=h,d.click()}setTimeout(()=>o(!1),500)},l=()=>{const c="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(n,null,2)),h=document.createElement("a");h.download=`${n.title.replace(/\s+/g,"_")}_project.json`,h.href=c,h.click()};return x.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in",children:x.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl w-full max-w-lg p-6 flex flex-col gap-5 relative",children:[x.jsx("button",{onClick:e,className:"absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800",children:x.jsx(Js,{className:"w-5 h-5"})}),x.jsxs("div",{className:"flex items-center gap-3",children:[x.jsx("div",{className:"p-3 bg-amber-500/20 text-amber-400 rounded-2xl border border-amber-500/30",children:x.jsx(zr,{className:"w-6 h-6"})}),x.jsxs("div",{children:[x.jsx("h3",{className:"font-display font-bold text-lg text-white",children:"Kids Land Photo Booth 📸"}),x.jsx("p",{className:"text-xs text-slate-400",children:"Snap a photo or download your 3D animation movie project!"})]})]}),x.jsxs("div",{className:"bg-slate-950 p-3.5 rounded-2xl border border-slate-800 flex flex-col gap-2",children:[x.jsxs("label",{className:"text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1",children:[x.jsx(hT,{className:"w-3.5 h-3.5 text-amber-400"})," Choose Photo Award Badge:"]}),x.jsx("div",{className:"grid grid-cols-2 gap-2",children:["Director Award 🎬","Kids Land Master 🌈","Animation Pro ⚡","3D Superhero ⭐"].map(c=>x.jsx("button",{onClick:()=>r(c),className:`p-2.5 rounded-xl text-xs font-bold border transition-all ${i===c?"bg-amber-500 text-slate-950 border-amber-400 font-black shadow-md":"bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800"}`,children:c},c))})]}),x.jsxs("div",{className:"flex flex-col gap-2.5",children:[x.jsxs("button",{onClick:a,disabled:s,className:"w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded-xl shadow-lg shadow-amber-500/20 transition-transform active:scale-95 flex items-center justify-center gap-2",children:[x.jsx(zr,{className:"w-4 h-4"})," Snap High-Res 3D Photo & Confetti 🎉"]}),x.jsxs("button",{onClick:l,className:"w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-xl border border-slate-700 transition-colors flex items-center justify-center gap-2",children:[x.jsx(cv,{className:"w-4 h-4"})," Download Project Data File (.json)"]})]})]})})},bT=({isOpen:t,onClose:e})=>t?x.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in",children:x.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl w-full max-w-lg p-6 flex flex-col gap-5 relative max-h-[90vh] overflow-y-auto scrollbar-thin",children:[x.jsx("button",{onClick:e,className:"absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800",children:x.jsx(Js,{className:"w-5 h-5"})}),x.jsxs("div",{className:"flex items-center gap-3",children:[x.jsx("div",{className:"p-3 bg-indigo-500/20 text-indigo-400 rounded-2xl border border-indigo-500/30",children:x.jsx(lv,{className:"w-6 h-6"})}),x.jsxs("div",{children:[x.jsx("h3",{className:"font-display font-bold text-lg text-white",children:"3D Kids Land Director Guide 🎬"}),x.jsx("p",{className:"text-xs text-slate-400",children:"Animate your hero in 3 easy steps!"})]})]}),x.jsxs("div",{className:"flex flex-col gap-4 text-xs text-slate-300",children:[x.jsxs("div",{className:"bg-slate-950 p-3.5 rounded-xl border border-slate-800 flex gap-3",children:[x.jsx("div",{className:"p-2 bg-purple-500/20 text-purple-400 rounded-lg h-fit",children:x.jsx(Ps,{className:"w-5 h-5"})}),x.jsxs("div",{children:[x.jsx("h4",{className:"font-bold text-sm text-white mb-1",children:"1. Pick Hero & Pose Joints"}),x.jsx("p",{className:"text-slate-400 leading-relaxed",children:"Click any colored ball joint on your character or select a body part in the studio panel. Use Pitch, Yaw, and Roll sliders to twist arms, bend legs, and pose your hero!"})]})]}),x.jsxs("div",{className:"bg-slate-950 p-3.5 rounded-xl border border-slate-800 flex gap-3",children:[x.jsx("div",{className:"p-2 bg-indigo-500/20 text-indigo-400 rounded-lg h-fit",children:x.jsx(Kh,{className:"w-5 h-5"})}),x.jsxs("div",{children:[x.jsx("h4",{className:"font-bold text-sm text-white mb-1",children:"2. Record Timeline Keyframes"}),x.jsxs("p",{className:"text-slate-400 leading-relaxed",children:["Click ",x.jsx("strong",{children:"+ Record Keyframe"})," to save your pose. Move the timeline playhead, change the pose, and add another keyframe. Hit ",x.jsx("strong",{children:"Play Movie"})," to watch smooth cartoon motion!"]})]})]}),x.jsxs("div",{className:"bg-slate-950 p-3.5 rounded-xl border border-slate-800 flex gap-3",children:[x.jsx("div",{className:"p-2 bg-emerald-500/20 text-emerald-400 rounded-lg h-fit",children:x.jsx(ea,{className:"w-5 h-5"})}),x.jsxs("div",{children:[x.jsx("h4",{className:"font-bold text-sm text-white mb-1",children:"3. Customize 3D Kids Land Stage"}),x.jsxs("p",{className:"text-slate-400 leading-relaxed",children:["Switch to the ",x.jsx("strong",{children:"Stage tab"})," to choose 3D Kids Land with rainbow arches, fluffy sky clouds, candy trees, and smiling sun!"]})]})]})]}),x.jsx("button",{onClick:e,className:"w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm rounded-xl transition-colors",children:"Got It, Let's Animate! 🌈"})]})}):null,TT=[{label:"Marker 🖊️",size:4},{label:"Crayon 🖍️",size:10},{label:"Brush 🖌️",size:20},{label:"Roller 🎨",size:36}],AT=["#ef4444","#f97316","#eab308","#22c55e","#06b6d4","#3b82f6","#a855f7","#ec4899","#78350f","#1e293b","#ffffff"],CT=[{emoji:"👀",label:"Eyes"},{emoji:"😁",label:"Smile"},{emoji:"👑",label:"Crown"},{emoji:"🕶️",label:"Shades"},{emoji:"⭐",label:"Star"},{emoji:"❤️",label:"Heart"},{emoji:"🎀",label:"Bow"}],RT=[{id:"blank",label:"Blank Canvas 🎨"},{id:"dino",label:"Dino 🦖"},{id:"robot",label:"Robot 🤖"},{id:"unicorn",label:"Unicorn 🦄"},{id:"cat",label:"Kitten 🐱"},{id:"rocket",label:"Rocket 🚀"},{id:"monster",label:"Monster 👾"},{id:"hero",label:"Hero 🦸"}],PT=({isOpen:t,onClose:e,onSaveDrawing:n,initialTemplateId:i})=>{const r=ue.useRef(null),[s,o]=ue.useState(!1),[a,l]=ue.useState("#3b82f6"),[c,h]=ue.useState(10),[d,f]=ue.useState(!1),[p,v]=ue.useState(!1),[_,m]=ue.useState("My Doodle Hero"),[u,g]=ue.useState(null),[y,M]=ue.useState(i||"blank");if(ue.useEffect(()=>{if(!t)return;const S=i||"blank";M(S),setTimeout(()=>{C(S)},50)},[t,i]),!t)return null;const C=S=>{const D=r.current;if(!D)return;const L=D.getContext("2d");L&&(L.fillStyle="#ffffff",L.fillRect(0,0,D.width,D.height),L.strokeStyle="#cbd5e1",L.lineWidth=4,L.setLineDash([8,8]),S==="dino"?(L.beginPath(),L.arc(220,150,50,0,Math.PI*2),L.strokeRect(220,120,90,40),L.ellipse(230,270,90,80,0,0,Math.PI*2),L.strokeRect(180,340,35,90),L.strokeRect(245,340,35,90),L.stroke()):S==="unicorn"?(L.beginPath(),L.arc(300,140,50,0,Math.PI*2),L.moveTo(310,90),L.lineTo(350,20),L.lineTo(280,70),L.ellipse(220,260,110,70,-.1,0,Math.PI*2),L.strokeRect(150,320,30,110),L.strokeRect(280,320,30,110),L.stroke()):S==="cat"?(L.beginPath(),L.arc(256,170,90,0,Math.PI*2),L.moveTo(180,110),L.lineTo(160,40),L.lineTo(210,90),L.moveTo(332,110),L.lineTo(352,40),L.lineTo(302,90),L.ellipse(256,310,80,90,0,0,Math.PI*2),L.stroke()):S==="rocket"?(L.beginPath(),L.moveTo(256,50),L.quadraticCurveTo(360,180,340,360),L.lineTo(172,360),L.quadraticCurveTo(152,180,256,50),L.stroke(),L.beginPath(),L.arc(256,210,50,0,Math.PI*2),L.stroke()):S==="monster"?(L.beginPath(),L.ellipse(256,280,140,160,0,0,Math.PI*2),L.stroke(),L.beginPath(),L.arc(200,200,30,0,Math.PI*2),L.arc(312,200,30,0,Math.PI*2),L.stroke(),L.beginPath(),L.arc(256,270,60,.2,Math.PI-.2),L.stroke()):S==="robot"?(L.strokeRect(176,80,160,140),L.strokeRect(156,240,200,180),L.beginPath(),L.moveTo(256,80),L.lineTo(256,40),L.arc(256,30,10,0,Math.PI*2),L.stroke()):S==="hero"&&(L.beginPath(),L.arc(256,160,80,0,Math.PI*2),L.stroke(),L.beginPath(),L.moveTo(176,240),L.lineTo(336,240),L.lineTo(316,420),L.lineTo(256,460),L.lineTo(196,420),L.closePath(),L.stroke()),L.setLineDash([]))},E=S=>{const D=r.current;if(!D)return;const L=D.getContext("2d");if(!L)return;const O=D.getBoundingClientRect(),$="touches"in S?S.touches[0].clientX:S.clientX,q="touches"in S?S.touches[0].clientY:S.clientY,X=($-O.left)*(D.width/O.width),ne=(q-O.top)*(D.height/O.height);if(u){Ht(),L.font="64px sans-serif",L.textAlign="center",L.textBaseline="middle",L.fillText(u,X,ne),g(null);return}o(!0),L.beginPath(),L.moveTo(X,ne)},T=S=>{if(!s||u)return;const D=r.current;if(!D)return;const L=D.getContext("2d");if(!L)return;const O=D.getBoundingClientRect(),$="touches"in S?S.touches[0].clientX:S.clientX,q="touches"in S?S.touches[0].clientY:S.clientY,X=($-O.left)*(D.width/O.width),ne=(q-O.top)*(D.height/O.height);if(L.lineCap="round",L.lineJoin="round",L.lineWidth=c,d)L.strokeStyle="#ffffff";else if(p){const z=Date.now()/5%360;L.strokeStyle=`hsl(${z}, 90%, 55%)`}else L.strokeStyle=a;L.lineTo(X,ne),L.stroke()},R=()=>{o(!1)},w=()=>{const S=r.current;if(!S)return;Fr(),vc({particleCount:120,spread:80,origin:{y:.5}});const D=S.toDataURL("image/png");n(D,_||"My Hand-Drawn Hero",y),e()};return x.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 bg-slate-950/85 backdrop-blur-md animate-fade-in overflow-y-auto",children:x.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl w-full max-w-4xl p-5 flex flex-col gap-4 relative my-auto",children:[x.jsx("button",{onClick:e,className:"absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800",children:x.jsx(Js,{className:"w-6 h-6"})}),x.jsxs("div",{className:"flex items-center gap-3",children:[x.jsx("div",{className:"p-3 bg-gradient-to-tr from-pink-500 to-purple-600 text-white rounded-2xl shadow-lg",children:x.jsx(Gs,{className:"w-7 h-7"})}),x.jsxs("div",{children:[x.jsx("h2",{className:"font-display font-bold text-xl text-white flex items-center gap-2",children:"Draw Your Hero & Bring to 3D! 🎨✨"}),x.jsx("p",{className:"text-xs text-slate-400",children:"Draw any character, monster, or creature below — it becomes a live 3D animated hero in Kids Land!"})]})]}),x.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 bg-slate-950 p-3 rounded-2xl border border-slate-800",children:[x.jsxs("div",{className:"flex items-center gap-2 flex-1 min-w-[200px]",children:[x.jsx("span",{className:"text-xs font-bold text-amber-400",children:"Hero Name:"}),x.jsx("input",{type:"text",value:_,onChange:S=>m(S.target.value),placeholder:"e.g. Super Doodle Monster",className:"bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"})]}),x.jsxs("div",{className:"flex items-center gap-1",children:[x.jsx("span",{className:"text-[11px] font-bold text-slate-400 mr-1",children:"Outline Stencil:"}),RT.map(S=>x.jsx("button",{onClick:()=>{yt(),M(S.id),C(S.id)},className:"px-2.5 py-1 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold transition-all",children:S.label},S.id))]})]}),x.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-4 items-center",children:[x.jsxs("div",{className:"md:col-span-4 flex flex-col gap-3 bg-slate-950 p-4 rounded-2xl border border-slate-800 h-full justify-between",children:[x.jsxs("div",{className:"flex flex-col gap-2",children:[x.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-slate-400",children:"Pick Marker Colors:"}),x.jsx("div",{className:"grid grid-cols-6 gap-2",children:AT.map(S=>x.jsx("button",{onClick:()=>{l(S),f(!1),v(!1),g(null)},style:{backgroundColor:S},className:`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 shadow-md ${a===S&&!d&&!p?"border-white scale-110 ring-2 ring-purple-400":"border-slate-800"}`},S))}),x.jsxs("button",{onClick:()=>{v(!p),f(!1),g(null)},className:`mt-1 py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${p?"bg-gradient-to-r from-red-500 via-green-500 to-purple-500 text-white border-white shadow-lg font-black":"bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800"}`,children:[x.jsx(rr,{className:"w-4 h-4 text-amber-300"})," Magic Rainbow Brush 🌈"]})]}),x.jsxs("div",{className:"flex flex-col gap-2",children:[x.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-slate-400",children:"Brush Thickness:"}),x.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:TT.map(S=>x.jsx("button",{onClick:()=>{h(S.size),f(!1)},className:`p-2 rounded-xl border text-xs font-bold transition-all ${c===S.size&&!d?"bg-purple-600 text-white border-purple-400 shadow-md":"bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800"}`,children:S.label},S.size))})]}),x.jsxs("div",{className:"flex flex-col gap-2",children:[x.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-slate-400",children:"Sticker Stamps (Tap to Stamp):"}),x.jsx("div",{className:"flex flex-wrap gap-1.5",children:CT.map(S=>x.jsx("button",{onClick:()=>{Ht(),g(u===S.emoji?null:S.emoji)},className:`w-9 h-9 text-xl rounded-xl border flex items-center justify-center transition-all ${u===S.emoji?"bg-amber-400 border-amber-200 scale-110 shadow-lg":"bg-slate-900 border-slate-800 hover:bg-slate-800"}`,title:`Stamp ${S.label}`,children:S.emoji},S.label))})]}),x.jsxs("div",{className:"flex items-center gap-2 pt-2 border-t border-slate-800",children:[x.jsxs("button",{onClick:()=>{f(!d),g(null)},className:`flex-1 p-2 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${d?"bg-rose-600 text-white border-rose-400 shadow-md":"bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800"}`,children:[x.jsx(iT,{className:"w-4 h-4"})," Eraser"]}),x.jsxs("button",{onClick:()=>{yt(),C("blank")},className:"p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-bold flex items-center justify-center gap-1",title:"Clear Canvas",children:[x.jsx(Zh,{className:"w-4 h-4"})," Clear"]})]})]}),x.jsxs("div",{className:"md:col-span-8 flex flex-col items-center justify-center bg-slate-950 p-4 rounded-2xl border border-slate-800 relative shadow-inner",children:[x.jsx("canvas",{ref:r,width:512,height:512,onMouseDown:E,onMouseMove:T,onMouseUp:R,onMouseLeave:R,onTouchStart:E,onTouchMove:T,onTouchEnd:R,className:`w-full max-w-[420px] aspect-square rounded-2xl border-4 border-amber-400 shadow-2xl touch-none bg-white ${u?"cursor-crosshair":"cursor-pen"}`}),u&&x.jsxs("div",{className:"absolute top-6 bg-amber-500 text-slate-950 px-3 py-1 rounded-full text-xs font-black shadow-lg animate-bounce",children:["Tap anywhere on your drawing to stamp ",u,"!"]})]})]}),x.jsxs("button",{onClick:w,className:"w-full py-3.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600 hover:from-emerald-400 hover:to-indigo-500 text-slate-950 font-black text-sm rounded-2xl shadow-xl shadow-emerald-500/20 transition-transform active:scale-95 flex items-center justify-center gap-2 uppercase tracking-wider",children:[x.jsx(rr,{className:"w-5 h-5 fill-slate-950"})," Bring My Drawing to 3D Kids Land! 🚀"]})]})})};function NT(t,e={}){const n=e.threshold??210,i=e.cropPadding??16,r=e.contrastBoost??!0,s=document.createElement("canvas"),o=s.getContext("2d");if(!o)throw new Error("Failed to get canvas context");s.width=t.width||512,s.height=t.height||512,o.drawImage(t,0,0,s.width,s.height);const a=o.getImageData(0,0,s.width,s.height),l=a.data;let c=s.width,h=s.height,d=0,f=0,p=!1;for(let v=0;v<l.length;v+=4){const _=l[v],m=l[v+1],u=l[v+2],g=.299*_+.587*m+.114*u,y=Math.max(_,m,u),M=Math.min(_,m,u),C=y>0?(y-M)/y:0;if(g>n&&C<.25)l[v+3]=0;else{p=!0;const T=v/4%s.width,R=Math.floor(v/4/s.width);T<c&&(c=T),T>d&&(d=T),R<h&&(h=R),R>f&&(f=R),r&&(l[v]=Math.min(255,Math.max(0,(l[v]-128)*1.15+128)),l[v+1]=Math.min(255,Math.max(0,(l[v+1]-128)*1.15+128)),l[v+2]=Math.min(255,Math.max(0,(l[v+2]-128)*1.15+128)))}}if(o.putImageData(a,0,0),p&&d>c&&f>h){const v=Math.max(0,c-i),_=Math.max(0,h-i),m=Math.min(s.width-v,d-c+i*2),u=Math.min(s.height-_,f-h+i*2),g=document.createElement("canvas");g.width=m,g.height=u;const y=g.getContext("2d");if(y)return y.drawImage(s,v,_,m,u,0,0,m,u),{cutoutDataUrl:g.toDataURL("image/png"),width:m,height:u}}return{cutoutDataUrl:s.toDataURL("image/png"),width:s.width,height:s.height}}const LT=({isOpen:t,onClose:e,onAddCreature:n,onAddCreatureToWorld:i,onOpenPrintModal:r})=>{const s=ue.useRef(null),[o,a]=ue.useState(null),[l,c]=ue.useState(null),[h,d]=ue.useState(205),[f,p]=ue.useState("My Paper Doodle"),[v,_]=ue.useState("Loves bouncing and exploring 3D Kids Land!"),[m,u]=ue.useState("wander"),[g,y]=ue.useState("boing"),[M,C]=ue.useState("dino"),[E,T]=ue.useState(!1);if(!t)return null;const R=O=>{var X;const $=(X=O.target.files)==null?void 0:X[0];if(!$)return;Ht();const q=new FileReader;q.onload=ne=>{var oe;const z=(oe=ne.target)==null?void 0:oe.result;a(z),w(z,h),D(z)},q.readAsDataURL($)},w=(O,$)=>{const q=new Image;q.crossOrigin="anonymous",q.onload=()=>{try{const X=NT(q,{threshold:$});c(X.cutoutDataUrl)}catch(X){console.error("Failed to extract paper drawing:",X)}},q.src=O},S=O=>{d(O),o&&w(o,O)},D=async O=>{T(!0);try{const q=await(await fetch("/api/ai/analyze-paper-drawing",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({imageBase64:O})})).json();q.success&&q.data&&(q.data.name&&p(q.data.name),q.data.personality&&_(q.data.personality),q.data.suggestedBehavior&&u(q.data.suggestedBehavior),q.data.soundFx&&y(q.data.soundFx))}catch{console.warn("AI analysis unavailable, using default name")}finally{T(!1)}},L=()=>{if(!l)return;Fr(),vc({particleCount:120,spread:80,origin:{y:.6}});const O={id:`creature-${Date.now()}`,name:f||"Paper Hero",drawingDataUrl:l,originalPaperUrl:o||void 0,position:[(Math.random()-.5)*4,0,(Math.random()-.5)*4],rotationY:Math.random()*Math.PI*2,scale:1.2,behavior:m,personality:v,soundFx:g,isControlled:!1,heightOffset:0,tiltAngle:0,depthThickness:.15,templateId:M};i&&i(O),n&&n(O),e()};return x.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 bg-slate-950/85 backdrop-blur-md animate-fade-in overflow-y-auto",children:x.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl w-full max-w-3xl p-5 flex flex-col gap-4 relative my-auto",children:[x.jsx("button",{onClick:e,className:"absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800",children:x.jsx(Js,{className:"w-5 h-5"})}),x.jsxs("div",{className:"flex items-center gap-3",children:[x.jsx("div",{className:"p-3 bg-gradient-to-tr from-amber-500 to-emerald-500 text-slate-950 font-black rounded-2xl shadow-lg",children:x.jsx(zr,{className:"w-7 h-7"})}),x.jsxs("div",{children:[x.jsx("h2",{className:"font-display font-bold text-xl text-white flex items-center gap-2",children:"Upload Paper Drawing Photo 📸"}),x.jsx("p",{className:"text-xs text-slate-400",children:"Snap a photo of your child's paper drawing — we'll remove the white paper background & bring it alive in 3D!"})]})]}),o?x.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[x.jsxs("div",{className:"bg-slate-950 p-4 rounded-2xl border border-slate-800 flex flex-col gap-3",children:[x.jsxs("div",{className:"flex items-center justify-between",children:[x.jsxs("span",{className:"text-xs font-bold text-amber-400 flex items-center gap-1.5",children:[x.jsx(sT,{className:"w-4 h-4"})," Original Paper Photo"]}),x.jsxs("button",{onClick:()=>{var O;return(O=s.current)==null?void 0:O.click()},className:"text-[11px] font-bold text-slate-400 hover:text-white flex items-center gap-1",children:[x.jsx(cT,{className:"w-3 h-3"})," Change Photo"]}),x.jsx("input",{ref:s,type:"file",accept:"image/*",onChange:R,className:"hidden"})]}),x.jsx("div",{className:"w-full aspect-square bg-slate-900 rounded-xl overflow-hidden border border-slate-800 relative flex items-center justify-center",children:x.jsx("img",{src:o,alt:"Original Drawing",className:"max-h-full max-w-full object-contain"})}),x.jsxs("div",{className:"flex flex-col gap-1.5 pt-2 border-t border-slate-800",children:[x.jsxs("div",{className:"flex justify-between items-center text-[11px] font-bold text-slate-300",children:[x.jsxs("span",{className:"flex items-center gap-1",children:[x.jsx(Ps,{className:"w-3.5 h-3.5 text-amber-400"})," Paper Background Cleaner:"]}),x.jsx("span",{className:"text-amber-400 font-mono",children:h})]}),x.jsx("input",{type:"range",min:"120",max:"245",value:h,onChange:O=>S(parseInt(O.target.value)),className:"w-full accent-amber-400 cursor-pointer"}),x.jsx("p",{className:"text-[10px] text-slate-500",children:"Slide right if paper is dark or shadowy; slide left to preserve light crayon marks."})]})]}),x.jsxs("div",{className:"bg-slate-950 p-4 rounded-2xl border border-slate-800 flex flex-col gap-3 justify-between",children:[x.jsxs("div",{className:"flex items-center justify-between",children:[x.jsxs("span",{className:"text-xs font-bold text-emerald-400 flex items-center gap-1.5",children:[x.jsx(rr,{className:"w-4 h-4"})," 3D Living Cutout Preview"]}),E&&x.jsxs("span",{className:"text-[10px] font-bold text-purple-400 animate-pulse flex items-center gap-1",children:[x.jsx(Jh,{className:"w-3 h-3 animate-spin"})," AI Naming Creature..."]})]}),x.jsx("div",{className:"w-full aspect-square bg-gradient-to-b from-purple-900/30 to-indigo-950/40 rounded-xl overflow-hidden border border-emerald-500/30 relative flex items-center justify-center p-4 shadow-inner",children:l?x.jsx("img",{src:l,alt:"3D Cutout",className:"max-h-full max-w-full object-contain filter drop-shadow-[0_10px_20px_rgba(16,185,129,0.3)] animate-bounce-slow"}):x.jsx("span",{className:"text-xs text-slate-500",children:"Processing cutout..."})}),x.jsxs("div",{className:"flex flex-col gap-2",children:[x.jsxs("div",{className:"flex flex-col gap-1",children:[x.jsx("label",{className:"text-[10px] font-bold uppercase tracking-wider text-amber-400",children:"Template Rig Anatomy (3D Motion):"}),x.jsxs("select",{value:M,onChange:O=>C(O.target.value),className:"bg-slate-900 text-xs font-bold text-amber-300 p-2 rounded-xl border border-amber-500/40 focus:outline-none focus:ring-2 focus:ring-amber-400",children:[x.jsx("option",{value:"dino",children:"🦖 Dino (Head Bob, Stompy Legs, Tail Wag)"}),x.jsx("option",{value:"robot",children:"🤖 Robot (Robotic Head, Piston Legs, Marching Arms)"}),x.jsx("option",{value:"unicorn",children:"🦄 Unicorn (Flapping Wings, Galloping Hooves)"}),x.jsx("option",{value:"cat",children:"🐱 Kitten (Head Tilt, Paw Patter, Wiggling Tail)"}),x.jsx("option",{value:"rocket",children:"🚀 Space Rocket (Thruster Flame Blast, Fins)"}),x.jsx("option",{value:"monster",children:"👾 Monster (Jelly Jiggle, Overhead Arm Wave)"}),x.jsx("option",{value:"hero",children:"🦸 Superhero (Flight Pose, Fluttering Cape)"}),x.jsx("option",{value:"blank",children:"🎨 Custom Doodle (Classic Puppet Rig)"})]})]}),x.jsxs("div",{className:"flex flex-col gap-1",children:[x.jsx("label",{className:"text-[10px] font-bold uppercase tracking-wider text-slate-400",children:"Creature Name:"}),x.jsx("input",{type:"text",value:f,onChange:O=>p(O.target.value),className:"bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl border border-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"})]}),x.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[x.jsxs("div",{className:"flex flex-col gap-1",children:[x.jsx("label",{className:"text-[10px] font-bold uppercase tracking-wider text-slate-400",children:"Living Behavior:"}),x.jsxs("select",{value:m,onChange:O=>u(O.target.value),className:"bg-slate-900 text-xs font-bold text-slate-200 p-1.5 rounded-xl border border-slate-800 focus:outline-none",children:[x.jsx("option",{value:"wander",children:"🌿 Wild Explorer"}),x.jsx("option",{value:"bounce",children:"🎈 Happy Bouncer"}),x.jsx("option",{value:"dance",children:"💃 Silly Dancer"}),x.jsx("option",{value:"crazy",children:"⚡ Crazy Jumper"}),x.jsx("option",{value:"sleep",children:"😴 Sleep & Snore"})]})]}),x.jsxs("div",{className:"flex flex-col gap-1",children:[x.jsx("label",{className:"text-[10px] font-bold uppercase tracking-wider text-slate-400",children:"Voice / Sound:"}),x.jsxs("select",{value:g,onChange:O=>y(O.target.value),className:"bg-slate-900 text-xs font-bold text-slate-200 p-1.5 rounded-xl border border-slate-800 focus:outline-none",children:[x.jsx("option",{value:"boing",children:"🏀 Boing Sound"}),x.jsx("option",{value:"pop",children:"🎈 Bubble Pop"}),x.jsx("option",{value:"giggle",children:"🤭 Giggle Laugh"}),x.jsx("option",{value:"fanfare",children:"🎺 Victory Horn"})]})]})]})]})]})]}):x.jsxs("div",{onClick:()=>{var O;return(O=s.current)==null?void 0:O.click()},className:"border-2 border-dashed border-amber-500/50 hover:border-amber-400 bg-slate-950/80 p-8 rounded-2xl flex flex-col items-center justify-center gap-3 cursor-pointer transition-all hover:bg-slate-900/90 group",children:[x.jsx("div",{className:"w-16 h-16 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30 group-hover:scale-110 transition-transform",children:x.jsx(fT,{className:"w-8 h-8"})}),x.jsxs("div",{className:"text-center",children:[x.jsx("p",{className:"text-sm font-bold text-white mb-1",children:"Click or Drop Photo of Drawing Here"}),x.jsx("p",{className:"text-xs text-slate-400",children:"Supports photos from iPhone, Android, Tablet or computer files (.png, .jpg, .jpeg)"})]}),x.jsx("span",{className:"mt-2 px-4 py-2 bg-amber-500 text-slate-950 font-black text-xs rounded-xl shadow-md group-hover:bg-amber-400",children:"📷 Choose Paper Drawing Photo"}),x.jsx("input",{ref:s,type:"file",accept:"image/*",onChange:R,className:"hidden"}),r&&x.jsx("div",{onClick:O=>{O.stopPropagation(),Ht(),e(),r()},className:"mt-2 text-xs font-bold text-amber-300 hover:text-amber-200 underline flex items-center justify-center gap-1 cursor-pointer",children:"🖨️ Don't have paper drawings yet? Click here to print sheets or draw digitally!"})]}),o&&l&&x.jsxs("button",{onClick:L,className:"w-full py-3.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600 hover:from-emerald-400 hover:to-indigo-500 text-slate-950 font-black text-sm rounded-2xl shadow-xl shadow-emerald-500/20 transition-transform active:scale-95 flex items-center justify-center gap-2 uppercase tracking-wider",children:[x.jsx(rr,{className:"w-5 h-5 fill-slate-950"})," Bring Paper Creature to 3D World! 🚀"]})]})})},c0=[{id:"dino",name:"Jumping T-Rex Dino 🦖",tagline:"Draw sharp teeth, scales & big stompy feet!",category:"Creatures",emoji:"🦖",color:"#10b981",badgeBg:"bg-emerald-500/20 text-emerald-400 border-emerald-500/40",recommendedBehavior:"BOING JUMP & STOMP",soundFx:"boing",description:"Bounces high into the sky and stomps on beachballs in 3D!",svgPath:(t,e,n)=>{t.strokeStyle="#334155",t.lineWidth=3,t.setLineDash([8,8]),t.beginPath(),t.arc(e*.45,n*.22,e*.1,0,Math.PI*2),t.stroke(),t.strokeRect(e*.45,n*.17,e*.2,n*.08),t.beginPath(),t.arc(e*.42,n*.2,8,0,Math.PI*2),t.stroke(),t.beginPath(),t.ellipse(e*.45,n*.45,e*.18,n*.16,.2,0,Math.PI*2),t.stroke(),t.beginPath(),t.moveTo(e*.3,n*.48),t.quadraticCurveTo(e*.12,n*.55,e*.08,n*.4),t.quadraticCurveTo(e*.18,n*.42,e*.32,n*.42),t.stroke(),t.strokeRect(e*.38,n*.58,e*.07,n*.18),t.strokeRect(e*.48,n*.58,e*.07,n*.18),t.strokeRect(e*.36,n*.74,e*.1,n*.04),t.strokeRect(e*.46,n*.74,e*.1,n*.04),t.strokeRect(e*.55,n*.38,e*.08,n*.04),t.setLineDash([])}},{id:"robot",name:"Dancing Beep Robot 🤖",tagline:"Add mechanical gears, antennas & laser eyes!",category:"Robots",emoji:"🤖",color:"#3b82f6",badgeBg:"bg-blue-500/20 text-blue-400 border-blue-500/40",recommendedBehavior:"ROBOT MARCH DANCE",soundFx:"march",description:"Marches to the beat and dances around candy trees!",svgPath:(t,e,n)=>{t.strokeStyle="#334155",t.lineWidth=3,t.setLineDash([8,8]),t.strokeRect(e*.33,n*.12,e*.34,n*.18),t.beginPath(),t.moveTo(e*.5,n*.12),t.lineTo(e*.5,n*.04),t.arc(e*.5,n*.03,10,0,Math.PI*2),t.stroke(),t.strokeRect(e*.38,n*.16,e*.08,n*.06),t.strokeRect(e*.54,n*.16,e*.08,n*.06),t.strokeRect(e*.4,n*.24,e*.2,n*.03),t.strokeRect(e*.28,n*.33,e*.44,n*.28),t.beginPath(),t.arc(e*.4,n*.42,14,0,Math.PI*2),t.arc(e*.5,n*.42,14,0,Math.PI*2),t.arc(e*.6,n*.42,14,0,Math.PI*2),t.stroke(),t.strokeRect(e*.14,n*.36,e*.12,n*.18),t.strokeRect(e*.74,n*.36,e*.12,n*.18),t.strokeRect(e*.34,n*.62,e*.12,n*.18),t.strokeRect(e*.54,n*.62,e*.12,n*.18),t.setLineDash([])}},{id:"unicorn",name:"Sparkle Unicorn / Pegasus 🦄",tagline:"Draw magical wings, a glowing horn & rainbow mane!",category:"Fantasy",emoji:"🦄",color:"#ec4899",badgeBg:"bg-pink-500/20 text-pink-400 border-pink-500/40",recommendedBehavior:"HIGH SKY SOAR",soundFx:"fanfare",description:"Flies gracefully above the 3D world with magical trails!",svgPath:(t,e,n)=>{t.strokeStyle="#334155",t.lineWidth=3,t.setLineDash([8,8]),t.beginPath(),t.arc(e*.6,n*.2,e*.1,0,Math.PI*2),t.stroke(),t.beginPath(),t.moveTo(e*.62,n*.11),t.lineTo(e*.7,n*.02),t.lineTo(e*.56,n*.08),t.closePath(),t.stroke(),t.beginPath(),t.ellipse(e*.45,n*.42,e*.22,n*.15,-.1,0,Math.PI*2),t.stroke(),t.beginPath(),t.moveTo(e*.45,n*.3),t.quadraticCurveTo(e*.35,n*.1,e*.2,n*.15),t.quadraticCurveTo(e*.3,n*.28,e*.4,n*.35),t.stroke(),t.strokeRect(e*.3,n*.56,e*.06,n*.22),t.strokeRect(e*.58,n*.56,e*.06,n*.22),t.setLineDash([])}},{id:"cat",name:"Giggly Kitten / Pet 🐱",tagline:"Draw furry ears, fluffy tail & silly whiskers!",category:"Creatures",emoji:"🐱",color:"#f59e0b",badgeBg:"bg-amber-500/20 text-amber-400 border-amber-500/40",recommendedBehavior:"GIGGLE WIGGLE",soundFx:"giggle",description:"Waddles and giggles whenever kids interact with it!",svgPath:(t,e,n)=>{t.strokeStyle="#334155",t.lineWidth=3,t.setLineDash([8,8]),t.beginPath(),t.arc(e*.5,n*.28,e*.2,0,Math.PI*2),t.stroke(),t.beginPath(),t.moveTo(e*.34,n*.18),t.lineTo(e*.3,n*.06),t.lineTo(e*.42,n*.12),t.stroke(),t.beginPath(),t.moveTo(e*.66,n*.18),t.lineTo(e*.7,n*.06),t.lineTo(e*.58,n*.12),t.stroke(),t.beginPath(),t.ellipse(e*.5,n*.55,e*.16,n*.18,0,0,Math.PI*2),t.stroke(),t.strokeRect(e*.38,n*.7,e*.08,n*.08),t.strokeRect(e*.54,n*.7,e*.08,n*.08),t.beginPath(),t.moveTo(e*.64,n*.58),t.quadraticCurveTo(e*.85,n*.5,e*.82,n*.32),t.stroke(),t.setLineDash([])}},{id:"rocket",name:"Space Rocket Explorer 🚀",tagline:"Draw flame thrusters, round window & space commander!",category:"Space",emoji:"🚀",color:"#a855f7",badgeBg:"bg-purple-500/20 text-purple-400 border-purple-500/40",recommendedBehavior:"ROCKET BOOST LAUNCH",soundFx:"pop",description:"Shoots up into outer space with fire particle trails!",svgPath:(t,e,n)=>{t.strokeStyle="#334155",t.lineWidth=3,t.setLineDash([8,8]),t.beginPath(),t.moveTo(e*.5,n*.05),t.quadraticCurveTo(e*.72,n*.28,e*.68,n*.6),t.lineTo(e*.32,n*.6),t.quadraticCurveTo(e*.28,n*.28,e*.5,n*.05),t.stroke(),t.beginPath(),t.arc(e*.5,n*.3,e*.11,0,Math.PI*2),t.stroke(),t.beginPath(),t.moveTo(e*.3,n*.48),t.lineTo(e*.14,n*.68),t.lineTo(e*.32,n*.6),t.stroke(),t.beginPath(),t.moveTo(e*.7,n*.48),t.lineTo(e*.86,n*.68),t.lineTo(e*.68,n*.6),t.stroke(),t.beginPath(),t.moveTo(e*.38,n*.61),t.lineTo(e*.42,n*.78),t.lineTo(e*.5,n*.66),t.lineTo(e*.58,n*.78),t.lineTo(e*.62,n*.61),t.stroke(),t.setLineDash([])}},{id:"blank",name:"Blank Magic Photo Frame 🎨",tagline:"Draw ANYTHING! Includes corner targets for perfect photo scanner cutout.",category:"Blank",emoji:"🎨",color:"#eab308",badgeBg:"bg-amber-500/20 text-amber-400 border-amber-500/40",recommendedBehavior:"CUSTOM 3D BEHAVIOR",soundFx:"boing",description:"Best for drawing custom superheroes, dragons, or pets on paper!",svgPath:(t,e,n)=>{t.strokeStyle="#f59e0b",t.lineWidth=4,t.strokeRect(e*.1,n*.08,e*.8,n*.72),[[e*.1,n*.08],[e*.9,n*.08],[e*.1,n*.8],[e*.9,n*.8]].forEach(([r,s])=>{t.fillStyle="#f59e0b",t.beginPath(),t.arc(r,s,12,0,Math.PI*2),t.fill()}),t.fillStyle="#94a3b8",t.font="bold 16px sans-serif",t.textAlign="center",t.fillText("✏️ DRAW YOUR HERO INSIDE THIS BOX",e*.5,n*.44)}}],DT=({isOpen:t,onClose:e,onSelectDigitalTemplate:n,onOpenUploadModal:i})=>{const[r,s]=ue.useState(c0[0]),[o,a]=ue.useState("All");if(!t)return null;const l=["All","Creatures","Robots","Fantasy","Space","Blank"],c=c0.filter(p=>o==="All"||p.category===o),h=p=>{const v=document.createElement("canvas");v.width=1200,v.height=1550;const _=v.getContext("2d");return _?(_.fillStyle="#ffffff",_.fillRect(0,0,v.width,v.height),_.fillStyle="#0f172a",_.fillRect(0,0,v.width,140),_.fillStyle="#f59e0b",_.font="bold 42px sans-serif",_.textAlign="left",_.fillText("🌈 3D PAPER DRAWING PLAYGROUND",60,60),_.fillStyle="#e2e8f0",_.font="24px sans-serif",_.fillText("Printable Drawing Sheet - Bring Your Art To Life!",60,105),_.fillStyle="#0f172a",_.font="bold 36px sans-serif",_.fillText(p.name,60,200),_.fillStyle="#475569",_.font="22px sans-serif",_.fillText(`Tip: ${p.tagline}`,60,238),_.strokeStyle="#0f172a",_.lineWidth=6,_.strokeRect(60,270,1080,950),[[60,270],[1140,270],[60,1220],[1140,1220]].forEach(([u,g])=>{_.fillStyle="#0f172a",_.beginPath(),_.arc(u,g,18,0,Math.PI*2),_.fill()}),_.save(),_.translate(60,270),p.svgPath(_,1080,950),_.restore(),_.fillStyle="#f8fafc",_.fillRect(60,1240,1080,250),_.strokeStyle="#cbd5e1",_.lineWidth=3,_.strokeRect(60,1240,1080,250),_.fillStyle="#0f172a",_.font="bold 24px sans-serif",_.fillText("1. COLOR & DRAW YOUR HERO HERE 🖍️",90,1290),_.fillText("2. TAKE A PHOTO WITH YOUR PHONE 📷",90,1340),_.fillText("3. UPLOAD AT 3DPAPER.WORLD TO WATCH IT DANCE! 🚀",90,1390),_.strokeStyle="#94a3b8",_.lineWidth=2,_.strokeRect(680,1270,420,80),_.fillStyle="#64748b",_.font="italic 20px sans-serif",_.fillText("Hero's Name: ________________",700,1318),v.toDataURL("image/png")):""},d=p=>{Fr(),vc({particleCount:50,spread:60});const v=h(p),_=window.open("","_blank");if(!_){alert("Please allow popups to print the drawing sheet!");return}_.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Print ${p.name} - 3D Paper Drawing World</title>
          <style>
            @page {
              size: letter;
              margin: 0;
            }
            body {
              margin: 0;
              padding: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              background: #fff;
            }
            img {
              width: 100%;
              max-width: 8.5in;
              height: auto;
            }
            @media print {
              body { margin: 0; }
              img { width: 100vw; height: 100vh; object-fit: contain; }
            }
          </style>
        </head>
        <body>
          <img src="${v}" onload="window.print(); window.close();" />
        </body>
      </html>
    `),_.document.close()},f=p=>{Ht();const v=h(p),_=document.createElement("a");_.href=v,_.download=`3D-Paper-Drawing-Template-${p.id}.png`,document.body.appendChild(_),_.click(),document.body.removeChild(_)};return x.jsx("div",{className:"fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto",children:x.jsxs("div",{className:"bg-slate-900 border border-slate-800 w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]",children:[x.jsxs("div",{className:"bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 p-4 sm:p-6 flex items-center justify-between text-slate-950 shadow-md",children:[x.jsxs("div",{className:"flex items-center gap-3",children:[x.jsx("div",{className:"p-3 bg-slate-950 text-amber-400 rounded-2xl shadow-lg",children:x.jsx(Bd,{className:"w-7 h-7"})}),x.jsxs("div",{children:[x.jsx("h2",{className:"font-display font-black text-xl sm:text-2xl tracking-wide flex items-center gap-2",children:"Printable Drawing Templates 🖨️"}),x.jsx("p",{className:"text-slate-950/80 text-xs sm:text-sm font-bold",children:"Print out templates for kids to color on paper, or draw them digitally!"})]})]}),x.jsx("button",{onClick:()=>{Ht(),e()},className:"p-2 bg-slate-950/20 hover:bg-slate-950/40 rounded-full text-slate-950 transition-colors",children:x.jsx(Js,{className:"w-6 h-6"})})]}),x.jsx("div",{className:"p-3 bg-slate-950 border-b border-slate-800 flex items-center gap-2 overflow-x-auto scrollbar-none",children:l.map(p=>x.jsx("button",{onClick:()=>{yt(),a(p)},className:`px-4 py-2 rounded-xl text-xs font-black transition-all shrink-0 ${o===p?"bg-amber-500 text-slate-950 shadow-lg scale-105":"bg-slate-900 text-slate-400 hover:text-white border border-slate-800"}`,children:p},p))}),x.jsxs("div",{className:"flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-6",children:[x.jsx("div",{className:"md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 auto-rows-max",children:c.map(p=>{const v=r.id===p.id;return x.jsxs("div",{onClick:()=>{yt(),s(p)},className:`p-4 rounded-2xl border flex flex-col justify-between cursor-pointer transition-all ${v?"bg-slate-800 border-amber-400 ring-2 ring-amber-400/50 shadow-xl scale-[1.02]":"bg-slate-900/80 border-slate-800 hover:bg-slate-800/60 hover:border-slate-700"}`,children:[x.jsxs("div",{className:"flex items-start justify-between gap-2 mb-2",children:[x.jsx("span",{className:"text-3xl",children:p.emoji}),x.jsx("span",{className:`text-[10px] font-black px-2 py-0.5 rounded-full border ${p.badgeBg}`,children:p.category})]}),x.jsxs("div",{children:[x.jsx("h3",{className:"font-bold text-white text-sm",children:p.name}),x.jsx("p",{className:"text-slate-400 text-xs line-clamp-2 mt-1",children:p.tagline})]}),x.jsxs("div",{className:"mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-amber-300 font-bold",children:[x.jsxs("span",{children:["Preset: ",p.soundFx.toUpperCase()]}),x.jsx("span",{children:"3D Ready 🌟"})]})]},p.id)})}),x.jsxs("div",{className:"md:col-span-5 bg-slate-950 p-5 rounded-3xl border border-slate-800 flex flex-col justify-between gap-4",children:[x.jsxs("div",{children:[x.jsxs("div",{className:"flex items-center justify-between gap-2 mb-3",children:[x.jsxs("span",{className:`text-xs font-black px-3 py-1 rounded-full border ${r.badgeBg}`,children:[r.emoji," ",r.category," Template"]}),x.jsx("span",{className:"text-xs text-slate-400 font-semibold",children:'8.5" x 11" Printable'})]}),x.jsx("h3",{className:"text-xl font-black text-white",children:r.name}),x.jsx("p",{className:"text-slate-300 text-xs mt-1",children:r.description}),x.jsxs("div",{className:"mt-4 bg-white rounded-2xl p-4 aspect-[8.5/11] max-h-[220px] mx-auto shadow-inner relative flex flex-col justify-between border-2 border-slate-300",children:[x.jsx("div",{className:"text-center text-[10px] font-bold text-slate-900 border-b border-slate-200 pb-1",children:"🌈 3D PAPER PLAYGROUND TEMPLATE"}),x.jsx("div",{className:"flex-1 my-1 relative",children:x.jsx("canvas",{ref:p=>{if(p){p.width=300,p.height=180;const v=p.getContext("2d");v&&(v.clearRect(0,0,300,180),r.svgPath(v,300,180))}},className:"w-full h-full object-contain"})}),x.jsx("div",{className:"bg-slate-100 p-1 rounded text-[9px] text-slate-700 text-center font-bold",children:"1. Color & Draw 🖍️ ➔ 2. Photo 📷 ➔ 3. 3D Dance 💃"})]})]}),x.jsxs("div",{className:"flex flex-col gap-2 pt-2",children:[x.jsxs("button",{onClick:()=>d(r),className:"w-full py-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-sm rounded-2xl shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 transition-transform active:scale-95",children:[x.jsx(Bd,{className:"w-5 h-5"})," PRINT DRAWING SHEET NOW! 🖨️"]}),x.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[x.jsxs("button",{onClick:()=>f(r),className:"py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-xs rounded-xl border border-slate-800 flex items-center justify-center gap-1.5 transition-colors",children:[x.jsx(cv,{className:"w-4 h-4 text-amber-400"})," Save Image"]}),n&&x.jsxs("button",{onClick:()=>{Fr(),n(r.id),e()},className:"py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs rounded-xl shadow-lg flex items-center justify-center gap-1.5 transition-transform active:scale-95",children:[x.jsx(Gs,{className:"w-4 h-4"})," Draw Digitally"]})]}),i&&x.jsxs("button",{onClick:()=>{Ht(),e(),i()},className:"mt-1 py-2 text-slate-400 hover:text-amber-300 text-xs font-semibold flex items-center justify-center gap-1 transition-colors",children:[x.jsx(zr,{className:"w-3.5 h-3.5"})," Already drew on paper? Upload photo now ➔"]})]})]})]})]})})},IT=[{id:"wander",label:"Wild Explorer",emoji:"🌿"},{id:"bounce",label:"Happy Bouncer",emoji:"🎈"},{id:"dance",label:"Silly Dancer",emoji:"💃"},{id:"crazy",label:"Crazy Jumper",emoji:"⚡"},{id:"sleep",label:"Sleep & Snore",emoji:"😴"},{id:"manual",label:"Kid Control (Drive)",emoji:"🎮"}],UT=[{type:"trampoline",name:"Trampoline",emoji:"🎪",color:"#a855f7"},{type:"beachball",name:"Beachball",emoji:"⚽",color:"#ef4444"},{type:"candy_tree",name:"Candy Tree",emoji:"🍭",color:"#22c55e"},{type:"treat_apple",name:"Snack Apple",emoji:"🍎",color:"#f97316"},{type:"magic_portal",name:"Magic Portal",emoji:"⭐",color:"#06b6d4"}],ku=({creatures:t,activeCreatureId:e,toys:n=[],onSelectCreature:i,onSelectActiveCreature:r,onUpdateBehavior:s,onUpdateCreatureBehavior:o,onDeleteCreature:a,onRemoveCreature:l,onMoveCreature:c,onJumpCreature:h,onAddToy:d,onRemoveToy:f,onOpenUploadModal:p,onOpenDrawModal:v,onOpenPrintModal:_})=>{const m=t.find(M=>M.id===e)||t[0],u=M=>{i&&i(M),r&&r(M)},g=(M,C)=>{s&&s(M,C),o&&o(M,C)},y=M=>{a&&a(M),l&&l(M)};return x.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col gap-4 h-full overflow-y-auto scrollbar-thin",children:[x.jsxs("div",{className:"flex flex-col gap-2",children:[x.jsxs("div",{className:"flex items-center justify-between",children:[x.jsxs("label",{className:"text-[11px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5",children:[x.jsx(lT,{className:"w-4 h-4 text-amber-400 animate-pulse"})," Living Paper Friends (",t.length,"):"]}),x.jsxs("div",{className:"flex items-center gap-1",children:[_&&x.jsx("button",{onClick:()=>_(),className:"px-2 py-1 bg-sky-600 hover:bg-sky-500 text-white font-bold text-[10px] rounded-lg shadow transition-transform active:scale-95 flex items-center gap-1",title:"Print drawing templates",children:"🖨️ Print Sheets"}),x.jsxs("button",{onClick:()=>p==null?void 0:p(),className:"px-2 py-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-[10px] rounded-lg shadow transition-transform active:scale-95 flex items-center gap-1",children:[x.jsx(hv,{className:"w-3 h-3"})," Photo Upload"]}),x.jsx("button",{onClick:()=>v==null?void 0:v(),className:"px-2 py-1 bg-purple-600 hover:bg-purple-500 text-white font-bold text-[10px] rounded-lg shadow transition-transform active:scale-95 flex items-center gap-1",children:"🎨 Draw"})]})]}),t.length===0?x.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 text-center flex flex-col gap-2",children:[x.jsx("p",{className:"text-xs text-slate-400",children:"No paper drawings in the 3D world yet!"}),x.jsx("button",{onClick:()=>p==null?void 0:p(),className:"py-2 bg-amber-500 text-slate-950 font-black text-xs rounded-xl shadow",children:"📷 Upload Photo of Paper Drawing Now!"})]}):x.jsx("div",{className:"grid grid-cols-2 gap-2",children:t.map(M=>{const C=M.id===(m==null?void 0:m.id);return x.jsxs("div",{onClick:()=>u(M.id),className:`p-2.5 rounded-2xl border flex items-center gap-2 cursor-pointer transition-all ${C?"bg-amber-500/20 border-amber-400 ring-2 ring-amber-400/50 shadow-lg":"bg-slate-950 border-slate-800 hover:bg-slate-800"}`,children:[x.jsx("img",{src:M.drawingDataUrl,alt:M.name,className:"w-9 h-9 object-contain bg-slate-900 rounded-lg p-0.5 border border-slate-800"}),x.jsxs("div",{className:"flex flex-col flex-1 min-w-0",children:[x.jsx("span",{className:"text-xs font-bold text-white truncate",children:M.name}),x.jsx("span",{className:"text-[10px] text-amber-300 font-mono capitalize truncate",children:M.behavior})]}),t.length>1&&x.jsx("button",{onClick:E=>{E.stopPropagation(),y(M.id)},className:"p-1 text-slate-500 hover:text-rose-400 rounded-lg hover:bg-slate-800",title:"Remove from world",children:x.jsx(Hd,{className:"w-3.5 h-3.5"})})]},M.id)})})]}),m&&x.jsxs(x.Fragment,{children:[x.jsxs("div",{className:"bg-slate-950 p-3.5 rounded-2xl border border-slate-800 flex flex-col gap-2",children:[x.jsxs("label",{className:"text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between",children:[x.jsxs("span",{children:["Behavior Mode for ",m.name,":"]}),x.jsx("span",{className:"text-amber-400 font-mono text-[10px]",children:m.behavior})]}),x.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:IT.map(M=>{const C=m.behavior===M.id;return x.jsxs("button",{onClick:()=>{yt(),g(m.id,M.id)},className:`p-2 rounded-xl text-xs font-bold border flex items-center gap-2 transition-all ${C?"bg-amber-500 text-slate-950 border-amber-400 font-black shadow-md":"bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800"}`,children:[x.jsx("span",{className:"text-base",children:M.emoji}),x.jsx("span",{className:"truncate",children:M.label})]},M.id)})})]}),x.jsxs("div",{className:"bg-slate-950 p-3.5 rounded-2xl border border-slate-800 flex flex-col items-center gap-3",children:[x.jsxs("label",{className:"text-[11px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 w-full justify-between",children:[x.jsxs("span",{className:"flex items-center gap-1",children:[x.jsx(uv,{className:"w-4 h-4 text-emerald-400"})," Direct Drive & Jump:"]}),x.jsx("span",{className:"text-[10px] text-slate-500 font-normal",children:"WASD / Arrow Keys"})]}),x.jsxs("div",{className:"grid grid-cols-3 gap-2 w-36 aspect-square items-center justify-center",children:[x.jsx("div",{}),x.jsx("button",{onClick:()=>{Mo(),c&&c(0,-.6)},className:"p-3 bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-white rounded-xl border border-slate-700 font-bold active:scale-90 transition-all flex items-center justify-center",title:"Walk Forward (W / Up)",children:x.jsx(Qb,{className:"w-5 h-5"})}),x.jsx("div",{}),x.jsx("button",{onClick:()=>{Mo(),c&&c(-.6,0)},className:"p-3 bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-white rounded-xl border border-slate-700 font-bold active:scale-90 transition-all flex items-center justify-center",title:"Walk Left (A / Left)",children:x.jsx(Zb,{className:"w-5 h-5"})}),x.jsx("button",{onClick:()=>{yt(),h&&h()},className:"p-3 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl font-black shadow-lg shadow-amber-500/20 active:scale-90 transition-all flex flex-col items-center justify-center text-[10px]",title:"BOING JUMP!",children:"🦘 JUMP"}),x.jsx("button",{onClick:()=>{Mo(),c&&c(.6,0)},className:"p-3 bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-white rounded-xl border border-slate-700 font-bold active:scale-90 transition-all flex items-center justify-center",title:"Walk Right (D / Right)",children:x.jsx(Jb,{className:"w-5 h-5"})}),x.jsx("div",{}),x.jsx("button",{onClick:()=>{Mo(),c&&c(0,.6)},className:"p-3 bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-white rounded-xl border border-slate-700 font-bold active:scale-90 transition-all flex items-center justify-center",title:"Walk Back (S / Down)",children:x.jsx(Kb,{className:"w-5 h-5"})}),x.jsx("div",{})]})]})]}),x.jsxs("div",{className:"bg-slate-950 p-3.5 rounded-2xl border border-slate-800 flex flex-col gap-2",children:[x.jsxs("label",{className:"text-[11px] font-bold uppercase tracking-wider text-purple-400 flex items-center gap-1.5",children:[x.jsx(rr,{className:"w-4 h-4 text-purple-400"})," Spawn Playground Toys:"]}),x.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:UT.map(M=>x.jsxs("button",{onClick:()=>{Ht(),d&&d(M.type)},className:"p-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-xs font-bold text-slate-200 flex flex-col items-center gap-1 transition-all active:scale-95",children:[x.jsx("span",{className:"text-xl",children:M.emoji}),x.jsx("span",{className:"text-[10px] truncate",children:M.name})]},M.type))}),n.length>0&&x.jsxs("div",{className:"flex flex-wrap gap-1.5 pt-2 border-t border-slate-800",children:[x.jsx("span",{className:"text-[10px] font-bold text-slate-500 w-full",children:"Active Toys in World:"}),n.map(M=>x.jsxs("span",{onClick:()=>{f&&f(M.id)},className:"px-2 py-0.5 bg-slate-900 border border-slate-800 rounded-lg text-[10px] font-bold text-slate-300 flex items-center gap-1 cursor-pointer hover:border-rose-500/50 hover:text-rose-400",title:"Click to remove toy",children:[M.name||M.type," ",x.jsx(Hd,{className:"w-3 h-3"})]},M.id))]})]})]})};function kT(){const[t,e]=ue.useState("3d"),[n,i]=ue.useState("My Living Drawing World"),[r,s]=ue.useState(Xy),[o,a]=ue.useState(Yy),[l,c]=ue.useState([]),[h,d]=ue.useState(null),[f,p]=ue.useState([]),[v,_]=ue.useState(Ar[0].keyframes),[m,u]=ue.useState(Ar[0].keyframes[0].id),[g,y]=ue.useState(0),[M,C]=ue.useState(2),[E,T]=ue.useState(!1),[R,w]=ue.useState(!0),[S,D]=ue.useState(30),[L,O]=ue.useState(1),[$,q]=ue.useState("body"),[X,ne]=ue.useState(Ar[0].keyframes[0].pose),[z,oe]=ue.useState(!1),[I,P]=ue.useState("stage"),[ae,me]=ue.useState(!1),[j,ee]=ue.useState(!1),[F,H]=ue.useState(!1),[Y,he]=ue.useState(!1),[ge,U]=ue.useState(!1),[Ce,Te]=ue.useState(!1),[_e,we]=ue.useState("blank"),Ie=N=>{c(te=>[...te,N]),d(N.id),Qm()},Ee=(N,te)=>{c(G=>G.map(Q=>Q.id===N?{...Q,behavior:te}:Q)),Ht()},ye=N=>{c(te=>te.filter(G=>G.id!==N)),h===N&&d(null),Ht()},Ge=N=>{const te={trampoline:"Trampoline",beachball:"Beachball",candy_tree:"Candy Tree",treat_apple:"Snack Apple",magic_portal:"Magic Portal",bounce_pad:"Bounce Pad"},G={id:`toy-${Date.now()}`,type:N,name:te[N]||"Fun Toy",position:[(Math.random()-.5)*6,0,(Math.random()-.5)*6],color:["#ef4444","#3b82f6","#10b981","#f59e0b","#ec4899"][Math.floor(Math.random()*5)]};p(Q=>[...Q,G]),yt()},k=N=>{p(te=>te.filter(G=>G.id!==N)),Ht()},b=(N,te)=>{h&&c(G=>G.map(Q=>Q.id===h?{...Q,position:[Q.position[0]+N,Q.position[1],Q.position[2]+te],rotationY:Math.atan2(N,te)}:Q))},Z=()=>{h&&(yt(),c(N=>N.map(te=>te.id===h?{...te,behavior:"crazy"}:te)))},le=(N,te)=>{h&&(c(G=>G.map(Q=>Q.id===h?{...Q,targetPosition:[N,te],behavior:"wander"}:Q)),Ht())},ce=N=>{d(N),Qm()},de=(N,te,G)=>{const Q=G||_e||"blank",fe={id:`screen-draw-${Date.now()}`,name:te,drawingDataUrl:N,position:[(Math.random()-.5)*4,0,(Math.random()-.5)*4],rotationY:Math.random()*Math.PI*2,scale:1,depthThickness:.15,behavior:"dance",personality:"Playful Screen Hero",soundFx:"giggle",isControlled:!1,heightOffset:0,tiltAngle:0,templateId:Q};c(Fe=>[...Fe,fe]),d(fe.id)},Le=ue.useRef(null),ve=ue.useRef(null);ue.useEffect(()=>{if(v.length===0)return;const N=Math.max(...v.map(te=>te.time));C(Math.max(2,Math.ceil((N+.5)*2)/2))},[v]),ue.useEffect(()=>{if(v.length!==0)if(E){const N=xp(v,g);ne(N)}else{const N=v.find(te=>Math.abs(te.time-g)<.02);if(N)u(N.id),ne(N.pose);else{const te=xp(v,g);ne(te)}}},[g,v,E]),ue.useEffect(()=>{if(!E){Le.current&&cancelAnimationFrame(Le.current),ve.current=null;return}const N=te=>{ve.current===null&&(ve.current=te);const G=(te-ve.current)/1e3;ve.current=te,y(Q=>{let fe=Q+G*L;if(fe>=M)if(R)fe=0;else return T(!1),M;return fe}),Le.current=requestAnimationFrame(N)};return Le.current=requestAnimationFrame(N),()=>{Le.current&&cancelAnimationFrame(Le.current)}},[E,M,R,L]);const Me=()=>{if(!z||v.length<=1)return null;const N=[...v].sort((G,Q)=>G.time-Q.time),te=N.filter(G=>G.time<g-.05).pop();return te?te.pose:N[0].pose},Ue=(N,te,G)=>{var fe;const Q={...X,[N]:{rotation:te,position:G||((fe=X[N])==null?void 0:fe.position)}};ne(Q),m&&_(Fe=>Fe.map(Ke=>Ke.id===m?{...Ke,pose:Q}:Ke))},re=N=>{ne(N),m&&_(te=>te.map(G=>G.id===m?{...G,pose:N}:G))},Re=()=>{re(xt)},Ve=()=>{const N=Math.round(g*10)/10,te=v.findIndex(G=>Math.abs(G.time-N)<.05);if(te>=0){const G=[...v];G[te]={...G[te],pose:{...X}},_(G),u(G[te].id)}else{const G={id:`kf-${Date.now()}`,time:N,label:`Pose @ ${N.toFixed(1)}s`,pose:{...X}},Q=[...v,G].sort((fe,Fe)=>fe.time-Fe.time);_(Q),u(G.id)}},Oe=N=>{if(v.length<=1)return;const te=v.filter(G=>G.id!==N);_(te),u(te[0].id)},se=N=>{const te=v.find(Fe=>Fe.id===N);if(!te)return;const G=Math.min(M,te.time+.5),Q={id:`kf-${Date.now()}`,time:G,label:`Copy of ${te.label||"Pose"}`,pose:JSON.parse(JSON.stringify(te.pose))},fe=[...v,Q].sort((Fe,Ke)=>Fe.time-Ke.time);_(fe),u(Q.id),y(G)},Be=N=>{T(!1),_(N.keyframes),u(N.keyframes[0].id),y(0),ne(N.keyframes[0].pose)},Se=N=>{T(!1),_(N),u(N[0].id),y(0),ne(N[0].pose)},nt={id:"proj-1",title:n,character:r,environment:o,duration:M,fps:S,loop:R,keyframes:v,updatedAt:new Date().toISOString()};return x.jsxs("div",{className:"flex flex-col h-screen w-screen overflow-hidden bg-slate-950 text-slate-100 selection:bg-purple-500 selection:text-white",children:[x.jsx(MT,{projectTitle:n,onUpdateTitle:i,onOpenAIModal:()=>me(!0),onOpenExportModal:()=>ee(!0),onOpenDrawModal:()=>{we("blank"),H(!0)},onOpenUploadModal:()=>he(!0),onOpenPrintModal:()=>U(!0),onLoadPresetClip:Be,onResetProject:()=>Be(Ar[0]),onOpenHelp:()=>Te(!0)}),x.jsxs("div",{className:"md:hidden flex items-center justify-around bg-slate-900/90 border-b border-slate-800 p-1.5 px-2 gap-1 shrink-0 z-30 shadow-md",children:[x.jsxs("button",{onClick:()=>{yt(),e("3d")},className:`flex-1 flex items-center justify-center gap-1 py-2 px-1.5 rounded-xl text-xs font-black transition-all ${t==="3d"?"bg-amber-500 text-slate-950 shadow-md scale-105":"text-slate-400 hover:text-white"}`,children:[x.jsx(eT,{className:"w-3.5 h-3.5"})," 3D World"]}),x.jsxs("button",{onClick:()=>{yt(),e("playground")},className:`flex-1 flex items-center justify-center gap-1 py-2 px-1.5 rounded-xl text-xs font-black transition-all ${t==="playground"?"bg-purple-600 text-white shadow-md scale-105":"text-slate-400 hover:text-white"}`,children:[x.jsx(uv,{className:"w-3.5 h-3.5"})," Playground"]}),x.jsxs("button",{onClick:()=>{yt(),e("studio")},className:`flex-1 flex items-center justify-center gap-1 py-2 px-1.5 rounded-xl text-xs font-black transition-all ${t==="studio"?"bg-indigo-600 text-white shadow-md scale-105":"text-slate-400 hover:text-white"}`,children:[x.jsx(Ps,{className:"w-3.5 h-3.5"})," Studio"]}),x.jsxs("button",{onClick:()=>{yt(),e("timeline")},className:`flex-1 flex items-center justify-center gap-1 py-2 px-1.5 rounded-xl text-xs font-black transition-all ${t==="timeline"?"bg-emerald-600 text-white shadow-md scale-105":"text-slate-400 hover:text-white"}`,children:[x.jsx(Kh,{className:"w-3.5 h-3.5"})," Timeline"]})]}),x.jsxs("div",{className:"hidden md:grid flex-1 grid-cols-12 gap-3 p-3 overflow-hidden relative min-h-0",children:[x.jsxs("div",{className:"col-span-4 xl:col-span-3 flex flex-col gap-2 h-full overflow-hidden",children:[x.jsxs("div",{className:"flex items-center gap-1 bg-slate-900 p-1.5 rounded-2xl border border-slate-800 shadow-md",children:[x.jsxs("button",{onClick:()=>P("pose"),className:`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-bold transition-all ${I==="pose"?"bg-indigo-600 text-white shadow-md":"text-slate-400 hover:text-white"}`,children:[x.jsx(Ps,{className:"w-3.5 h-3.5"})," Pose"]}),x.jsxs("button",{onClick:()=>P("character"),className:`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-bold transition-all ${I==="character"?"bg-purple-600 text-white shadow-md":"text-slate-400 hover:text-white"}`,children:[x.jsx(Gs,{className:"w-3.5 h-3.5"})," Hero"]}),x.jsxs("button",{onClick:()=>P("stage"),className:`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-bold transition-all ${I==="stage"?"bg-emerald-600 text-white shadow-md":"text-slate-400 hover:text-white"}`,children:[x.jsx(ea,{className:"w-3.5 h-3.5"})," Stage"]}),x.jsxs("button",{onClick:()=>P("audio"),className:`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-bold transition-all ${I==="audio"?"bg-pink-600 text-white shadow-md":"text-slate-400 hover:text-white"}`,children:[x.jsx(zd,{className:"w-3.5 h-3.5"})," Audio"]})]}),x.jsxs("div",{className:"flex-1 overflow-hidden",children:[I==="pose"&&x.jsx(s0,{currentPose:X,selectedBone:$,onSelectBone:q,onUpdateBoneTransform:Ue,onApplyPresetPose:re,onResetPose:Re}),I==="character"&&x.jsx(o0,{character:r,onUpdateCharacter:s,onOpenDrawModal:()=>H(!0)}),I==="stage"&&x.jsx(a0,{environment:o,onUpdateEnvironment:a}),I==="audio"&&x.jsx(l0,{})]})]}),x.jsxs("div",{className:"col-span-8 xl:col-span-9 h-full flex flex-col overflow-hidden relative",children:[x.jsx(t0,{character:r,environment:o,currentPose:X,ghostPose:Me(),selectedBone:$,onSelectBone:q,isPlaying:E,creatures:l,toys:f,onGroundClick:le,onCreatureClick:ce}),x.jsx(ku,{creatures:l,activeCreatureId:h,toys:f,onSelectActiveCreature:d,onUpdateCreatureBehavior:Ee,onRemoveCreature:ye,onMoveCreature:b,onJumpCreature:Z,onAddToy:Ge,onRemoveToy:k,onOpenUploadModal:()=>he(!0),onOpenDrawModal:()=>{we("blank"),H(!0)},onOpenPrintModal:()=>U(!0)})]})]}),x.jsxs("div",{className:"md:hidden flex-1 overflow-hidden flex flex-col p-2 relative min-h-0",children:[t==="3d"&&x.jsxs("div",{className:"h-full w-full flex flex-col overflow-hidden relative rounded-2xl border border-slate-800",children:[x.jsx(t0,{character:r,environment:o,currentPose:X,ghostPose:Me(),selectedBone:$,onSelectBone:q,isPlaying:E,creatures:l,toys:f,onGroundClick:le,onCreatureClick:ce}),x.jsx(ku,{creatures:l,activeCreatureId:h,toys:f,onSelectActiveCreature:d,onUpdateCreatureBehavior:Ee,onRemoveCreature:ye,onMoveCreature:b,onJumpCreature:Z,onAddToy:Ge,onRemoveToy:k,onOpenUploadModal:()=>he(!0),onOpenDrawModal:()=>{we("blank"),H(!0)},onOpenPrintModal:()=>U(!0)})]}),t==="playground"&&x.jsx("div",{className:"h-full w-full overflow-hidden",children:x.jsx(ku,{creatures:l,activeCreatureId:h,toys:f,onSelectActiveCreature:d,onUpdateCreatureBehavior:Ee,onRemoveCreature:ye,onMoveCreature:b,onJumpCreature:Z,onAddToy:Ge,onRemoveToy:k,onOpenUploadModal:()=>he(!0),onOpenDrawModal:()=>{we("blank"),H(!0)},onOpenPrintModal:()=>U(!0)})}),t==="studio"&&x.jsxs("div",{className:"h-full w-full flex flex-col gap-2 overflow-hidden",children:[x.jsxs("div",{className:"flex items-center gap-1 bg-slate-900 p-1.5 rounded-2xl border border-slate-800 shadow-md shrink-0",children:[x.jsxs("button",{onClick:()=>P("pose"),className:`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-bold transition-all ${I==="pose"?"bg-indigo-600 text-white shadow-md":"text-slate-400 hover:text-white"}`,children:[x.jsx(Ps,{className:"w-3.5 h-3.5"})," Pose"]}),x.jsxs("button",{onClick:()=>P("character"),className:`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-bold transition-all ${I==="character"?"bg-purple-600 text-white shadow-md":"text-slate-400 hover:text-white"}`,children:[x.jsx(Gs,{className:"w-3.5 h-3.5"})," Hero"]}),x.jsxs("button",{onClick:()=>P("stage"),className:`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-bold transition-all ${I==="stage"?"bg-emerald-600 text-white shadow-md":"text-slate-400 hover:text-white"}`,children:[x.jsx(ea,{className:"w-3.5 h-3.5"})," Stage"]}),x.jsxs("button",{onClick:()=>P("audio"),className:`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-bold transition-all ${I==="audio"?"bg-pink-600 text-white shadow-md":"text-slate-400 hover:text-white"}`,children:[x.jsx(zd,{className:"w-3.5 h-3.5"})," Audio"]})]}),x.jsxs("div",{className:"flex-1 overflow-hidden",children:[I==="pose"&&x.jsx(s0,{currentPose:X,selectedBone:$,onSelectBone:q,onUpdateBoneTransform:Ue,onApplyPresetPose:re,onResetPose:Re}),I==="character"&&x.jsx(o0,{character:r,onUpdateCharacter:s,onOpenDrawModal:()=>H(!0)}),I==="stage"&&x.jsx(a0,{environment:o,onUpdateEnvironment:a}),I==="audio"&&x.jsx(l0,{})]})]}),t==="timeline"&&x.jsx("div",{className:"h-full w-full overflow-y-auto",children:x.jsx(r0,{keyframes:v,currentTime:g,duration:M,isPlaying:E,loop:R,fps:S,speed:L,showOnionSkin:z,selectedKeyframeId:m,onSeek:N=>{T(!1),y(N)},onTogglePlay:()=>T(!E),onStop:()=>{T(!1),y(0)},onToggleLoop:()=>w(!R),onToggleOnionSkin:()=>oe(!z),onChangeSpeed:O,onChangeFps:D,onAddKeyframe:Ve,onDeleteKeyframe:Oe,onSelectKeyframe:N=>{u(N);const te=v.find(G=>G.id===N);te&&(y(te.time),ne(te.pose))},onCopyKeyframe:se})})]}),x.jsx("div",{className:"hidden md:block",children:x.jsx(r0,{keyframes:v,currentTime:g,duration:M,isPlaying:E,loop:R,fps:S,speed:L,showOnionSkin:z,selectedKeyframeId:m,onSeek:N=>{T(!1),y(N)},onTogglePlay:()=>T(!E),onStop:()=>{T(!1),y(0)},onToggleLoop:()=>w(!R),onToggleOnionSkin:()=>oe(!z),onChangeSpeed:O,onChangeFps:D,onAddKeyframe:Ve,onDeleteKeyframe:Oe,onSelectKeyframe:N=>{u(N);const te=v.find(G=>G.id===N);te&&(y(te.time),ne(te.pose))},onCopyKeyframe:se})}),x.jsx(LT,{isOpen:Y,onClose:()=>he(!1),onAddCreatureToWorld:Ie,onOpenPrintModal:()=>U(!0)}),x.jsx(DT,{isOpen:ge,onClose:()=>U(!1),onSelectDigitalTemplate:N=>{we(N),H(!0)},onOpenUploadModal:()=>he(!0)}),x.jsx(wT,{isOpen:ae,onClose:()=>me(!1),characterType:r.type,onApplyAIKeyframes:Se}),x.jsx(ET,{isOpen:j,onClose:()=>ee(!1),project:nt}),x.jsx(PT,{isOpen:F,onClose:()=>H(!1),onSaveDrawing:de,initialTemplateId:_e}),x.jsx(bT,{isOpen:Ce,onClose:()=>Te(!1)})]})}Ou.createRoot(document.getElementById("root")).render(x.jsx(Dv.StrictMode,{children:x.jsx(kT,{})}));
